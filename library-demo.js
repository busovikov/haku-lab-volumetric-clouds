import * as THREE from 'three';
import {VolumetricClouds} from './packages/volumetric-clouds/src/index.js';

const english=document.documentElement.lang==='en';
const t=(ru,en)=>english?en:ru;
for(const link of document.querySelectorAll('.language-switch a'))link.addEventListener('click',()=>{const url=new URL(link.href);url.hash=location.hash;link.href=url.href;});
const stage=document.querySelector('#cloudDemo');
const metric=document.querySelector('#demoMetric');
const errorPanel=document.querySelector('#demoError');
const mobileGPU=matchMedia('(max-width: 760px), (pointer: coarse)').matches;
const reducedMotion=matchMedia('(prefers-reduced-motion: reduce)').matches;
let paused=reducedMotion;
const pauseButton=document.querySelector('#pauseDemo');
function syncPause(){pauseButton.textContent=paused?'▶':'Ⅱ';pauseButton.setAttribute('aria-label',paused?t('Продолжить анимацию','Resume animation'):t('Остановить анимацию','Pause animation'));}
syncPause();
const toast=document.querySelector('#toast');let toastTimer;
for(const button of document.querySelectorAll('[data-copy]'))button.onclick=async()=>{
 try{await navigator.clipboard.writeText(document.querySelector('#'+button.dataset.copy).textContent);toast.textContent=t('Код скопирован','Code copied');}
 catch{toast.textContent=t('Выделите и скопируйте код вручную','Select and copy the code manually');}
 clearTimeout(toastTimer);toast.classList.add('visible');toastTimer=setTimeout(()=>toast.classList.remove('visible'),2200);
};

try{
 const renderer=new THREE.WebGLRenderer({antialias:!mobileGPU});renderer.setPixelRatio(mobileGPU?1:Math.min(devicePixelRatio,1.25));renderer.setClearColor(0x87979e);stage.prepend(renderer.domElement);
 const scene=new THREE.Scene();scene.background=new THREE.Color(0x87979e);
 const camera=new THREE.PerspectiveCamera(42,1,.1,200);
 const clouds=new VolumetricClouds(renderer,{maxAreas:8,settings:{density:.85,cameraClear:true,steps:mobileGPU?32:64,resolutionScale:mobileGPU?.4:.65,fogTint:'#f2f0e5',shadowTint:'#849ba9',cloudScale:20}});
 if(mobileGPU)document.querySelector('#demoQuality').value='low';
 const area=clouds.addArea({shape:'cylinder',position:[0,3,0],radius:4,softness:1.5});
 let outline;let orbit=.55,previous,frames=0,metricStart;
 const names=english?{cylinder:'Cylinder',sphere:'Sphere',ellipsoid:'Ellipsoid',box:'Box'}:{cylinder:'Цилиндр',sphere:'Сфера',ellipsoid:'Эллипсоид',box:'Бокс'};
 function rebuildOutline(){
  if(outline){scene.remove(outline);outline.geometry.dispose();outline.material.dispose();}
  const v=area.volume(clouds.getSettings());
  const geometry=area.shape==='cylinder'?new THREE.CylinderGeometry(1,1,2,32):area.shape==='box'?new THREE.BoxGeometry(2,2,2):new THREE.SphereGeometry(1,24,12);
  const edges=new THREE.EdgesGeometry(geometry,12);geometry.dispose();
  outline=new THREE.LineSegments(edges,new THREE.LineBasicMaterial({color:0xf5f0dd,transparent:true,opacity:.5}));
  outline.position.copy(v.center);outline.scale.copy(v.radii);outline.quaternion.copy(v.rotation);outline.visible=document.querySelector('#showOutline').checked;scene.add(outline);
 }
 rebuildOutline();
 for(const button of document.querySelectorAll('[data-shape]'))button.onclick=()=>{
  const shape=button.dataset.shape;
  area.setOptions({shape,radii:shape==='ellipsoid'?[4.8,4,2.8]:[4,4,4],heightMode:shape==='cylinder'?'layer':'manual',rotation:shape==='box'?new THREE.Quaternion().setFromEuler(new THREE.Euler(.12,.55,.1)):new THREE.Quaternion()});
  for(const item of document.querySelectorAll('[data-shape]')){const active=item===button;item.classList.toggle('selected',active);item.setAttribute('aria-pressed',String(active));}
  document.querySelector('#shapeCaption').textContent=names[shape];rebuildOutline();
 };
 const themes={milk:{fogTint:'#f2f0e5',shadowTint:'#849ba9',density:.85},cold:{fogTint:'#d8eafd',shadowTint:'#537399',density:.8},sunset:{fogTint:'#ffe0b7',shadowTint:'#967f93',density:.9}};
 for(const button of document.querySelectorAll('[data-theme]'))button.onclick=()=>{
  clouds.setSettings(themes[button.dataset.theme]);
  for(const item of document.querySelectorAll('[data-theme]')){const active=item===button;item.classList.toggle('selected',active);item.setAttribute('aria-pressed',String(active));}
 };
 document.querySelector('#showOutline').onchange=e=>outline.visible=e.target.checked;
 document.querySelector('#clearForeground').onchange=e=>clouds.setSettings({cameraClear:e.target.checked});
 document.querySelector('#demoQuality').onchange=e=>clouds.setSettings(e.target.value==='high'?{steps:96,resolutionScale:1}:e.target.value==='low'?{steps:32,resolutionScale:.4}:{steps:64,resolutionScale:.65});
 pauseButton.onclick=()=>{paused=!paused;syncPause();};
 const resize=()=>{const {width,height}=stage.getBoundingClientRect();if(width<1||height<1)return;renderer.setSize(width,height);camera.aspect=width/height;camera.updateProjectionMatrix();};
 const resizeObserver=new ResizeObserver(resize);resizeObserver.observe(stage);resize();
 function frame(now){
  const dt=previous===undefined?0:Math.max(0,Math.min((now-previous)/1000,.1));previous=now;
  if(!paused)orbit+=dt*.045;
  camera.position.set(Math.sin(orbit)*24,19,Math.cos(orbit)*24);camera.lookAt(0,2,0);
  try{clouds.render(scene,camera,paused?0:dt);stage.dataset.ready='true';}
  catch(error){renderer.setAnimationLoop(null);errorPanel.hidden=false;errorPanel.textContent=t('Ошибка рендера. ','Rendering failed. ')+error.message;metric.textContent=t('ДЕМО НЕДОСТУПНО','DEMO UNAVAILABLE');console.error(error);return;}
  if(metricStart===undefined)metricStart=now;frames++;
  if(now-metricStart>700){metric.textContent=`${Math.round(frames*1000/(now-metricStart))} FPS · ${clouds.getSettings().steps} ${t('ШАГОВ','STEPS')}`;frames=0;metricStart=now;}
 }
 frame(performance.now());
 const visibilityObserver=new IntersectionObserver(entries=>{
  if(entries[0].isIntersecting){previous=undefined;metricStart=undefined;frames=0;renderer.setAnimationLoop(frame);}
  else renderer.setAnimationLoop(null);
 });visibilityObserver.observe(stage);
 document.addEventListener('visibilitychange',()=>{if(document.hidden)renderer.setAnimationLoop(null);else if(stage.getBoundingClientRect().bottom>0&&stage.getBoundingClientRect().top<innerHeight){previous=undefined;renderer.setAnimationLoop(frame);}});
 addEventListener('pageshow',()=>{previous=undefined;resize();if(!document.hidden&&stage.getBoundingClientRect().bottom>0&&stage.getBoundingClientRect().top<innerHeight)renderer.setAnimationLoop(frame);});
 addEventListener('pagehide',event=>{renderer.setAnimationLoop(null);if(event.persisted)return;resizeObserver.disconnect();visibilityObserver.disconnect();clouds.dispose();outline.geometry.dispose();outline.material.dispose();renderer.dispose();});
}catch(error){errorPanel.hidden=false;errorPanel.textContent=t('Не удалось запустить WebGL2-пример. ','Could not start the WebGL2 demo. ')+error.message;metric.textContent=t('ДЕМО НЕДОСТУПНО','DEMO UNAVAILABLE');console.error(error);}
