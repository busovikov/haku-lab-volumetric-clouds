import * as THREE from 'three';
import {VolumetricClouds} from '../../packages/volumetric-clouds/src/index.js';
import {MaskFieldClouds} from './clouds.js';
import {COLOR_SPHERES} from './fields.js';
import {GpuTimer} from './timer.js';

const host=document.querySelector('#scene'),readout=document.querySelector('#readout'),status=document.querySelector('#status');
const renderer=new THREE.WebGLRenderer({antialias:false});renderer.setPixelRatio(1);host.append(renderer.domElement);renderer.setClearColor(0x8c9ca5);
const scene=new THREE.Scene();scene.background=new THREE.Color(0x8c9ca5);
const camera=new THREE.PerspectiveCamera(45,1,.1,150);camera.position.set(22,29,32);camera.lookAt(0,2,0);
let shaderFailed=false;
renderer.debug.onShaderError=(gl,program,vertex,fragment)=>{shaderFailed=true;document.querySelector('#error').textContent='Shader compilation failed: '+gl.getShaderInfoLog(fragment);};
const clouds=new MaskFieldClouds(renderer);
const baseline=new VolumetricClouds(renderer,{bounds:clouds.bounds,maskResolution:[64,24,64],maxAreas:1,settings:{...clouds.getSettings(),cameraClear:false}});
const timer=new GpuTimer(renderer.getContext());const outlines=new THREE.Group();scene.add(outlines);
for(const v of clouds.fields.volumes){const geometry=new THREE.EdgesGeometry(new THREE.BoxGeometry(2,2,2)),mesh=new THREE.LineSegments(geometry,new THREE.LineBasicMaterial({color:0x88edd6,transparent:true,opacity:.35}));mesh.position.copy(v.center);mesh.scale.copy(v.radii);outlines.add(mesh);}
for(const sphere of COLOR_SPHERES){const mesh=new THREE.Mesh(new THREE.SphereGeometry(sphere.radius,24,12),new THREE.MeshBasicMaterial({color:sphere.color,wireframe:true,transparent:true,opacity:.16,depthWrite:false}));mesh.position.set(...sphere.position);outlines.add(mesh);}
const markers=[];
for(const color of ['#ffb26f','#73daff','#dc98ff']){const mesh=new THREE.Mesh(new THREE.SphereGeometry(.22,12,8),new THREE.MeshBasicMaterial({color,depthWrite:false}));outlines.add(mesh);markers.push(mesh);}
const modes=[
 {name:'Обычный туман',baseline:true},
 {name:'Общая маска очистки',clear:true,tint:false,lights:false,camera:false},
 {name:'Очистка + цвет',clear:true,tint:true,lights:false,camera:false},
 {name:'Очистка + цвет + поле света',clear:true,tint:true,lights:true,camera:false},
 {name:'Все поля + очистка до камеры',clear:true,tint:true,lights:true,camera:true},
 {name:'Сравнение: 3 света напрямую',clear:true,tint:true,lights:true,camera:false,direct:true},
 {name:'Только обновление поля света',lightOnly:true},
];
let paused=false,last,clock=0,frames=0,intervalStart=performance.now(),fps=0,bench=null,report=null,generation=0;
const current=()=>Object.fromEntries(['clear','tint','lights','camera','direct'].map(k=>[k,document.querySelector('#'+k).checked]));
function settings(){const q=document.querySelector('#quality').value;const s=q==='high'?{steps:96,resolutionScale:1}:q==='low'?{steps:32,resolutionScale:.4}:{steps:64,resolutionScale:.65};clouds.setSettings(s);baseline.setSettings(s);}
if(matchMedia('(max-width:760px)').matches)document.querySelector('#quality').value='low';settings();
document.querySelector('#quality').onchange=settings;
document.querySelector('#pause').onclick=e=>{paused=!paused;e.target.textContent=paused?'Продолжить':'Пауза';};
const controls=[...document.querySelectorAll('.panel input,.panel select,#pause')];
function setControls(disabled){for(const el of controls)el.disabled=disabled;document.querySelector('#benchmark').disabled=disabled;}
const median=a=>a.length?quantile(a,.5):null;
function quantile(a,q){const s=[...a].sort((a,b)=>a-b);return s[Math.min(s.length-1,Math.floor((s.length-1)*q))];}
function finish(){
 const rows=bench.rows.map((row,i)=>({mode:modes[i].name,options:modes[i],fps:1000/(row.frame.reduce((a,b)=>a+b,0)/row.frame.length),frameMs:row.frame.reduce((a,b)=>a+b,0)/row.frame.length,cpuMs:row.cpu.reduce((a,b)=>a+b,0)/row.cpu.length,gpuMedianMs:median(row.gpu),gpuP95Ms:row.gpu.length?quantile(row.gpu,.95):null,gpuSamples:row.gpu.length}));
 report={version:'mask-fields-experiment',timestamp:new Date().toISOString(),userAgent:navigator.userAgent,renderer:renderer.getContext().getParameter(renderer.getContext().RENDERER),width:renderer.domElement.width,height:renderer.domElement.height,settings:clouds.getSettings(),fieldResolution:[64,24,64],staticColorBakeMs:clouds.fields.bakeMs,gpuTimerAvailable:!!timer.ext,rows};
 document.querySelector('#results').replaceChildren(...rows.map(row=>{const tr=document.createElement('tr');for(const value of [row.mode,row.fps.toFixed(1),row.frameMs.toFixed(2),row.cpuMs.toFixed(2),row.gpuMedianMs?.toFixed(3)??'недоступно',row.gpuP95Ms?.toFixed(3)??'недоступно',row.gpuSamples]){const td=document.createElement('td');td.textContent=value;tr.append(td);}return tr;}));
 status.textContent='Измерение завершено. '+(timer.ext?'GPU-таймер доступен.':'GPU-таймер недоступен: CPU и FPS не заменяют GPU-время.');
 document.querySelector('#export').disabled=false;setControls(false);bench=null;clouds.setMode(current());outlines.visible=document.querySelector('#outline').checked;
}
document.querySelector('#benchmark').onclick=()=>{
 generation++;bench={generation,index:0,frame:0,rows:modes.map(()=>({cpu:[],frame:[],gpu:[]})),drain:0};setControls(true);document.querySelector('#export').disabled=true;document.querySelector('#results').innerHTML='<tr><td colspan="7">Идут измерения…</td></tr>';outlines.visible=false;
};
document.querySelector('#export').onclick=()=>{if(!report)return;const url=URL.createObjectURL(new Blob([JSON.stringify(report,null,2)],{type:'application/json'})),a=document.createElement('a');a.href=url;a.download='haku-lab-mask-fields-benchmark.json';a.click();setTimeout(()=>URL.revokeObjectURL(url),1000);};
const resize=()=>{const b=host.getBoundingClientRect();renderer.setSize(b.width,b.height);camera.aspect=b.width/b.height;camera.updateProjectionMatrix();};new ResizeObserver(resize).observe(host);resize();
renderer.setAnimationLoop(now=>{
 const dt=last===undefined?0:Math.max(0,(now-last)/1000);last=now;if(!paused)clock+=Math.min(dt,.1);
 for(const result of timer.poll())if(bench&&result.tag.generation===bench.generation)bench.rows[result.tag.mode].gpu.push(result.ms);
 if(bench&&bench.index>=modes.length){if(++bench.drain>30||!timer.pending.length)finish();return;}
 const mode=bench?modes[bench.index]:current();
 const time=bench?5+(bench.frame/60):clock;clouds.time=time;baseline.time=time;
 if(!mode.baseline&&!mode.lightOnly)clouds.setMode(mode);
 outlines.visible=!bench&&document.querySelector('#outline').checked;
 const measured=bench&&bench.frame>=45;
 if(measured)timer.begin({generation:bench.generation,mode:bench.index});
 const cpuStart=performance.now();
 try{if(mode.lightOnly){clouds.lights.updateLights(time);clouds.lights.render(renderer);}else (mode.baseline?baseline:clouds).render(scene,camera,0);}catch(error){document.querySelector('#error').textContent=error.message;renderer.setAnimationLoop(null);throw error;}
 if(measured){timer.end();bench.rows[bench.index].cpu.push(performance.now()-cpuStart);bench.rows[bench.index].frame.push(dt*1000);}
 for(let i=0;i<3;i++)markers[i].position.copy(clouds.lights.uniforms.positions.value[i]);
 frames++;if(now-intervalStart>500){fps=frames*1000/(now-intervalStart);frames=0;intervalStart=now;}
 readout.textContent=`${fps.toFixed(0)} FPS · ${clouds.stats.fogWidth} × ${clouds.stats.fogHeight}\n64 × 24 × 64 voxels / 3 поля\n13 кубов · 3 цветовые сферы · 3 света\nGPU timer: ${timer.ext?'доступен':'недоступен'}`;
 if(bench){status.textContent=`${bench.index+1}/${modes.length}: ${mode.name}\n${bench.frame<45?'Прогрев':'Замер'} ${bench.frame<45?bench.frame:bench.frame-45}/${bench.frame<45?45:120}`;if(++bench.frame>=165){bench.index++;bench.frame=0;}}
 if(shaderFailed){renderer.setAnimationLoop(null);setControls(false);}
});
