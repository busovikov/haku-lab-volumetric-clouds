import test from 'node:test';
import assert from 'node:assert/strict';
import * as THREE from 'three';
import {MaskFieldClouds,FogLight,TintArea,CLOUD_PRESETS} from '../src/index.js';
import {FieldSchedule} from '../src/field-schedule.js';
const create=()=>new MaskFieldClouds({isWebGLRenderer:true},{bounds:new THREE.Box3(new THREE.Vector3(-24,-8,-24),new THREE.Vector3(24,16,24)),maskResolution:[16,12,16]});
function camera(){const c=new THREE.OrthographicCamera(-12,12,12,-12,.1,100);c.position.set(0,4,30);c.lookAt(0,4,0);return c;}
test('shared clearing supports many figures without analytical uniforms; tint fields invalidate independently',()=>{
 const c=create();for(let i=0;i<20;i++)c.addArea({shape:'box',position:[i-10,3,0],radii:[1,6,2]});
 const tint=c.addTint({shape:'sphere',position:[0,3,0],radius:6,color:'#ff0000'});c.update(camera(),0);
 assert.equal(c.stats.areas,20);assert(c.mask.data.some(v=>v>0));assert(c.tintVolume.data.some((v,i)=>i%4===0&&v>200));assert(!c.fogMaterial.fragmentShader.includes('clearCenters'));
 c.update(camera(),0);assert(!c.stats.maskUpdated);assert(!c.stats.tintUpdated);
 tint.position.x=2;tint.color.set('#00ff00');c.update(camera(),0);assert(!c.stats.maskUpdated);assert(c.stats.tintUpdated);assert(c.tintVolume.data.some((v,i)=>i%4===1&&v>200));
 c.clearAreas();c.clearTints();c.update(camera(),0);assert(!c.mask.data.some(v=>v));assert(!c.tintVolume.data.some(v=>v));c.dispose();c.dispose();assert.throws(()=>c.addTint());assert.throws(()=>c.addLight());
});
test('light culling, removal, limits and shader budget are independent of clearing count',()=>{
 const c=create();const light=c.addLight({position:[0,3,0],radius:4,color:'#ffaa44',intensity:2});c.addLight({position:[100,3,0],radius:2});
 c.update(camera(),0);assert.equal(c.stats.visibleLights,1);assert.equal(c.lightAtlas.uniforms.lightCount.value,1);const signature=c.lightSignature;light.position.x=1;c.update(camera(),0);assert.notEqual(c.lightSignature,signature);
 light.enabled=false;c.update(camera(),0);assert.equal(c.stats.visibleLights,0);assert(c.removeLight(light));c.clearLights();
 for(let i=0;i<32;i++)c.addLight();assert.throws(()=>c.addLight(),/32/);assert(c.fogMaterial.fragmentShader.includes('positions[32]'));c.dispose();
});
test('field options, presets and light validation reject invalid values',()=>{
 const c=create();c.setPreset('balance');assert.deepEqual({steps:c.getSettings().steps,resolutionScale:c.getSettings().resolutionScale},CLOUD_PRESETS.balance);
 c.setEffects({lightMode:'direct',lightRefreshHz:15});c.setPreset('quality');assert.equal(c.getEffects().lightMode,'atlas');assert.equal(c.getEffects().lightRefreshHz,0);
 const effects=c.getEffects();effects.lights=false;assert(c.getEffects().lights);
 for(const patch of [{lightRefreshHz:7},{lightMode:'bad'},{lights:0},{unknown:true}])assert.throws(()=>c.setEffects(patch));
 assert.throws(()=>c.setPreset('bad'));assert.throws(()=>new FogLight({radius:0}));assert.throws(()=>new FogLight({intensity:-1}));assert.throws(()=>new FogLight({position:[NaN,0,0]}));
 assert.throws(()=>c.update(camera(),-1));const tint=new TintArea({color:'#ff0000'});tint.setOptions({color:'#0000ff'});assert.equal(tint.color.b,1);c.dispose();
});
test('light schedule maintains requested cadence and skips missed ticks',()=>{
 for(const hz of [15,30]){const s=new FieldSchedule();let n=0;for(let i=0;i<1200;i++)if(s.due(i/120,hz,1))n++;assert.equal(n,hz*10);assert(s.due(20,hz,1));assert(!s.due(20,hz,1));}
});
