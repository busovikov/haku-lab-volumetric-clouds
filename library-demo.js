import * as THREE from 'three';
import {MaskFieldClouds} from './packages/volumetric-clouds/src/index.js';

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
 const clouds=new MaskFieldClouds(renderer,{bounds:new THREE.Box3(new THREE.Vector3(-24,0,-24),new THREE.Vector3(24,8,24)),settings:{base:.2,thickness:6,density:.75,cameraClear:true,fogTint:'#f2f0e5',shadowTint:'#849ba9',cloudScale:22}});
 clouds.setPreset(mobileGPU?'speed':'balance');
 document.querySelector('#demoQuality').value=mobileGPU?'speed':'balance';
 const area=clouds.addArea({shape:'cylinder',position:[-7,3,4],radius:3.5,softness:1.5});
 const decoration=new THREE.Group();scene.add(decoration);const pathOutlines=new THREE.Group();decoration.add(pathOutlines);
 const pathAreas=Array.from({length:13},(_,i)=>{const z=-17+i*34/12;const area=clouds.addArea({shape:'box',position:[Math.sin(z*.14)*5,3,z],radii:[2.4,6,2.1],heightMode:'manual',softness:1.2});const edges=new THREE.EdgesGeometry(new THREE.BoxGeometry(4.8,12,4.2));const wire=new THREE.LineSegments(edges,new THREE.LineBasicMaterial({color:0xa9e6cd,transparent:true,opacity:.22}));wire.position.copy(area.position);pathOutlines.add(wire);return area;});
 for(const [position,color] of [[[-9,3,-4],'#ff785f'],[[8,3,-5],'#67d1af'],[[1,3,10],'#9d8bef']]){clouds.addTint({shape:'sphere',position,radius:7,softness:2,color});const mesh=new THREE.Mesh(new THREE.SphereGeometry(7,20,12),new THREE.MeshBasicMaterial({color,wireframe:true,transparent:true,opacity:.08,depthWrite:false}));mesh.position.set(...position);decoration.add(mesh);}
 const lightColors=['#ffb26f','#73daff','#dc98ff','#91ffa7','#ff82c7','#ffe681'];
 const lights=Array.from({length:32},(_,i)=>clouds.addLight({color:lightColors[i%6],radius:8,enabled:i<16}));
 const markers=lights.map((light,i)=>{const marker=new THREE.Mesh(new THREE.SphereGeometry(.22,10,8),new THREE.MeshBasicMaterial({color:lightColors[i%6],depthWrite:false}));scene.add(marker);return marker;});
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
 document.querySelector('#showOutline').onchange=e=>{outline.visible=e.target.checked;decoration.visible=e.target.checked;};
 document.querySelector('#clearForeground').onchange=e=>clouds.setSettings({cameraClear:e.target.checked});
 document.querySelector('#demoQuality').onchange=e=>clouds.setPreset(e.target.value);
 document.querySelector('#demoLights').onchange=e=>clouds.setEffects({lights:e.target.checked});
 document.querySelector('#demoTint').onchange=e=>clouds.setEffects({tint:e.target.checked});
 document.querySelector('#demoPath').onchange=e=>{for(const a of pathAreas)a.enabled=e.target.checked;pathOutlines.visible=e.target.checked;};
 pauseButton.onclick=()=>{paused=!paused;syncPause();};
 const resize=()=>{const {width,height}=stage.getBoundingClientRect();if(width<1||height<1)return;renderer.setSize(width,height);camera.aspect=width/height;camera.updateProjectionMatrix();};
 const resizeObserver=new ResizeObserver(resize);resizeObserver.observe(stage);resize();
 function frame(now){
  const dt=previous===undefined?0:Math.max(0,Math.min((now-previous)/1000,.1));previous=now;
  if(!paused)orbit+=dt*.045;
  camera.position.set(Math.sin(orbit)*33,27,Math.cos(orbit)*33);camera.lookAt(0,2,0);
  const count=Number(document.querySelector('#demoLightCount').value),time=clouds.time+(paused?0:dt);
  lights.forEach((light,i)=>{light.enabled=i<count;light.intensity=10.5/count;const a=time*(.23+(i%7)*.07)+i*2.399963,ring=7+(i%5)*2.5;light.position.set(Math.cos(a)*ring,2.8+Math.sin(time*(.53+(i%3)*.11)+i)*1.8,Math.sin(a)*(ring+1));markers[i].position.copy(light.position);markers[i].visible=i<count&&document.querySelector('#demoLights').checked;});
  try{clouds.render(scene,camera,paused?0:dt);stage.dataset.ready='true';}
  catch(error){renderer.setAnimationLoop(null);errorPanel.hidden=false;errorPanel.textContent=t('Ошибка рендера. ','Rendering failed. ')+error.message;metric.textContent=t('ДЕМО НЕДОСТУПНО','DEMO UNAVAILABLE');console.error(error);return;}
  if(metricStart===undefined)metricStart=now;frames++;
  if(now-metricStart>700){metric.textContent=`${Math.round(frames*1000/(now-metricStart))} FPS · ${clouds.getSettings().steps} ${t('ШАГОВ','STEPS')} · ${Math.round(clouds.getSettings().resolutionScale*100)}% · ${document.querySelector('#demoLights').checked?count:0} ${t('СВЕТОВ','LIGHTS')}`;frames=0;metricStart=now;}
 }
 frame(performance.now());
 const visibilityObserver=new IntersectionObserver(entries=>{
  if(entries[0].isIntersecting){previous=undefined;metricStart=undefined;frames=0;renderer.setAnimationLoop(frame);}
  else renderer.setAnimationLoop(null);
 });visibilityObserver.observe(stage);
 document.addEventListener('visibilitychange',()=>{if(document.hidden)renderer.setAnimationLoop(null);else if(stage.getBoundingClientRect().bottom>0&&stage.getBoundingClientRect().top<innerHeight){previous=undefined;renderer.setAnimationLoop(frame);}});
 addEventListener('pageshow',()=>{previous=undefined;resize();if(!document.hidden&&stage.getBoundingClientRect().bottom>0&&stage.getBoundingClientRect().top<innerHeight)renderer.setAnimationLoop(frame);});
 addEventListener('pagehide',event=>{renderer.setAnimationLoop(null);if(event.persisted)return;resizeObserver.disconnect();visibilityObserver.disconnect();clouds.dispose();scene.traverse(object=>{object.geometry?.dispose();if(object.material)object.material.dispose();});renderer.dispose();});
}catch(error){errorPanel.hidden=false;errorPanel.textContent=t('Не удалось запустить WebGL2-пример. ','Could not start the WebGL2 demo. ')+error.message;metric.textContent=t('ДЕМО НЕДОСТУПНО','DEMO UNAVAILABLE');console.error(error);}
