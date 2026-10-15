import * as THREE from 'three';
import {VolumetricClouds} from '../../packages/volumetric-clouds/src/index.js';
import {MaskFieldClouds} from './clouds.js';
import {COLOR_SPHERES,LIGHT_COLORS,MAX_LIGHTS} from './fields.js';
import {GpuTimer} from './timer.js';
import {benchmarkModes,WARMUP_FRAMES,MEASURE_FRAMES,mean,quantile} from './benchmark.js';

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
const markers=Array.from({length:MAX_LIGHTS},(_,i)=>{const mesh=new THREE.Mesh(new THREE.SphereGeometry(.22,12,8),new THREE.MeshBasicMaterial({color:LIGHT_COLORS[i%LIGHT_COLORS.length],depthWrite:false}));outlines.add(mesh);return mesh;});
let paused=false,last,clock=0,frames=0,intervalStart=performance.now(),fps=0,bench=null,report=null,generation=0;
const current=()=>({...Object.fromEntries(['clear','tint','lights','camera','direct'].map(k=>[k,document.querySelector('#'+k).checked])),count:Number(document.querySelector('#count').value),refreshHz:Number(document.querySelector('#refresh').value)});
const presets={
 low:{name:'Скорость',steps:32,resolutionScale:.4},
 balance:{name:'Баланс',steps:48,resolutionScale:.5},
 medium:{name:'Качество',steps:64,resolutionScale:.65},
 high:{name:'Ультра',steps:96,resolutionScale:1},
};
function settings(){
 const s={steps:Number(document.querySelector('#steps').value),resolutionScale:Number(document.querySelector('#scale').value)};
 clouds.setSettings(s);baseline.setSettings(s);
 const preset=Object.entries(presets).find(([,p])=>p.steps===s.steps&&p.resolutionScale===s.resolutionScale&&!document.querySelector('#direct').checked&&document.querySelector('#refresh').value==='0');
 document.querySelector('#quality').value=preset?.[0]??'custom';
 document.querySelector('#preset-description').textContent=`${preset?.[1].name??'Свои настройки'} · шаги: ${s.steps} · ${Math.round(s.resolutionScale*100)}% · ${document.querySelector('#direct').checked?'прямой свет':('световая маска, '+(Number(document.querySelector('#refresh').value)?document.querySelector('#refresh').value+' Гц':'каждый кадр'))}`;
}
function applyPreset(){
 const preset=presets[document.querySelector('#quality').value];if(!preset)return;
 document.querySelector('#steps').value=String(preset.steps);document.querySelector('#scale').value=String(preset.resolutionScale);
 document.querySelector('#direct').checked=false;document.querySelector('#refresh').value='0';
 settings();clouds.resetLightSchedule();
}
document.querySelector('#quality').value=matchMedia('(max-width:760px)').matches?'low':'balance';applyPreset();
document.querySelector('#quality').onchange=applyPreset;
for(const id of ['steps','scale','direct','refresh'])document.querySelector('#'+id).addEventListener('change',settings);
document.querySelector('#pause').onclick=e=>{paused=!paused;e.target.textContent=paused?'Продолжить':'Пауза';};
const controls=[...document.querySelectorAll('.panel input,.panel select,#pause')];
function setControls(disabled){for(const el of controls)el.disabled=disabled;document.querySelector('#benchmark').disabled=disabled;}
function finish(){
 const rows=bench.rows.map((row,i)=>({mode:bench.modes[i].name,options:bench.modes[i],fps:1000/mean(row.frame),frameMs:mean(row.frame),cpuMs:mean(row.cpu),gpuMedianMs:quantile(row.gpu,.5),gpuMeanMs:mean(row.gpu),gpuP95Ms:quantile(row.gpu,.95),gpuSamples:row.gpu.length,gpuUpdateSamples:row.updated.length,gpuReuseSamples:row.reused.length,gpuUpdateMedianMs:quantile(row.updated,.5),gpuReuseMedianMs:quantile(row.reused,.5),atlasUpdates:row.updates,actualAtlasHz:row.updates/(row.elapsed/1000),fogWidth:row.fogWidth,fogHeight:row.fogHeight}));
 report={version:'mask-fields-lights-scaling-v3',timestamp:new Date().toISOString(),order:bench.reverse?'reverse':'forward',userAgent:navigator.userAgent,renderer:renderer.getContext().getParameter(renderer.getContext().RENDERER),width:renderer.domElement.width,height:renderer.domElement.height,fieldResolution:[64,24,64],staticColorBakeMs:clouds.fields.bakeMs,gpuTimerAvailable:!!timer.ext,warmupFrames:WARMUP_FRAMES,measuredFrames:MEASURE_FRAMES,totalLightIntensity:10.5,cameraClear:false,rows};
 document.querySelector('#results').replaceChildren(...rows.map(row=>{const tr=document.createElement('tr');for(const value of [row.mode,row.fps.toFixed(1),row.cpuMs.toFixed(2),row.gpuMedianMs?.toFixed(3)??'n/a',row.gpuMeanMs?.toFixed(3)??'n/a',row.gpuP95Ms?.toFixed(3)??'n/a',row.actualAtlasHz.toFixed(1),row.gpuSamples]){const td=document.createElement('td');td.textContent=value;tr.append(td);}return tr;}));
 status.textContent='Измерение завершено. '+(timer.ext?'GPU-таймер доступен.':'GPU-таймер недоступен: CPU и FPS не заменяют GPU-время.');
 document.querySelector('#export').disabled=false;setControls(false);bench=null;settings();clouds.resetLightSchedule();
}
document.querySelector('#benchmark').onclick=()=>{
 generation++;const reverse=generation%2===0;bench={generation,reverse,modes:benchmarkModes(reverse),index:0,frame:0,rows:benchmarkModes(reverse).map(()=>({cpu:[],frame:[],gpu:[],updated:[],reused:[],updates:0,elapsed:0})),drain:0};setControls(true);document.querySelector('#export').disabled=true;document.querySelector('#results').innerHTML='<tr><td colspan="8">Идут измерения…</td></tr>';outlines.visible=false;clouds.resetLightSchedule();
};
document.querySelector('#export').onclick=()=>{if(!report)return;const url=URL.createObjectURL(new Blob([JSON.stringify(report,null,2)],{type:'application/json'})),a=document.createElement('a');a.href=url;a.download='haku-lab-lights-scaling-'+report.order+'.json';a.click();setTimeout(()=>URL.revokeObjectURL(url),1000);};
const resize=()=>{const b=host.getBoundingClientRect();renderer.setSize(b.width,b.height);camera.aspect=b.width/b.height;camera.updateProjectionMatrix();if(bench){bench=null;setControls(false);settings();status.textContent='Замер отменён: размер экрана изменился. Запустите снова.';}};new ResizeObserver(resize).observe(host);resize();
document.addEventListener('visibilitychange',()=>{if(document.hidden&&bench){bench=null;setControls(false);settings();status.textContent='Замер отменён: вкладка скрылась. Запустите снова.';}});
renderer.setAnimationLoop(now=>{
 const dt=last===undefined?0:Math.max(0,(now-last)/1000);last=now;if(!paused)clock+=Math.min(dt,.1);
 for(const result of timer.poll())if(bench&&result.tag.generation===bench.generation){const row=bench.rows[result.tag.mode];row.gpu.push(result.ms);(result.tag.updated?row.updated:row.reused).push(result.ms);}
 if(bench&&bench.index>=bench.modes.length){if(++bench.drain>60||!timer.pending.length)finish();return;}
 const mode=bench?bench.modes[bench.index]:current();
 const time=bench?5+(bench.frame/60):clock;clouds.time=time;baseline.time=time;
 if(bench&&bench.frame===0){clouds.setSettings({steps:mode.steps,resolutionScale:mode.resolutionScale});baseline.setSettings({steps:mode.steps,resolutionScale:mode.resolutionScale});clouds.resetLightSchedule();}
 if(!mode.baseline){clouds.setMode(mode);clouds.setLightOptions(mode);}
 outlines.visible=!bench&&document.querySelector('#outline').checked;
 const measured=bench&&bench.frame>=WARMUP_FRAMES;
 const tag=measured?{generation:bench.generation,mode:bench.index,updated:false}:null;
 if(measured)timer.begin(tag);
 const cpuStart=performance.now();
 try{if(mode.baseline)baseline.render(scene,camera,0);else clouds.render(scene,camera,0,now/1000);}catch(error){document.querySelector('#error').textContent=error.message;renderer.setAnimationLoop(null);throw error;}
 if(measured){tag.updated=!mode.baseline&&clouds.lightFieldUpdated;timer.end();const row=bench.rows[bench.index];row.cpu.push(performance.now()-cpuStart);row.frame.push(dt*1000);row.elapsed+=dt*1000;if(tag.updated)row.updates++;row.fogWidth=(mode.baseline?baseline:clouds).stats.fogWidth;row.fogHeight=(mode.baseline?baseline:clouds).stats.fogHeight;}
 for(let i=0;i<MAX_LIGHTS;i++){markers[i].visible=i<clouds.lights.count;if(markers[i].visible)markers[i].position.copy(clouds.lights.uniforms.positions.value[i]);}
 frames++;if(now-intervalStart>500){fps=frames*1000/(now-intervalStart);frames=0;intervalStart=now;}
 readout.textContent=`${fps.toFixed(0)} FPS · ${clouds.stats.fogWidth} × ${clouds.stats.fogHeight}\nШаги: ${clouds.settings.steps} · ${Math.round(clouds.settings.resolutionScale*100)}%\n64 × 24 × 64 voxels / 3 поля\n13 кубов · 3 цветовые сферы · источников: ${clouds.lights.count}\nGPU timer: ${timer.ext?'доступен':'недоступен'}`;
 if(bench){status.textContent=`${bench.index+1}/${bench.modes.length}: ${mode.name}\n${bench.frame<WARMUP_FRAMES?'Прогрев':'Замер'} ${bench.frame<WARMUP_FRAMES?bench.frame:bench.frame-WARMUP_FRAMES}/${bench.frame<WARMUP_FRAMES?WARMUP_FRAMES:MEASURE_FRAMES}`;if(++bench.frame>=WARMUP_FRAMES+MEASURE_FRAMES){bench.index++;bench.frame=0;}}
 if(shaderFailed){renderer.setAnimationLoop(null);setControls(false);}
});
