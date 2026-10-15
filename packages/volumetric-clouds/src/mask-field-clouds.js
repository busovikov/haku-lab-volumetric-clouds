import * as THREE from 'three';
import {VolumetricClouds} from './volumetric-clouds.js';
import {ClearArea,volumeBounds} from './clear-area.js';
import {TintVolume} from './tint-volume.js';
import {LightAtlas} from './light-atlas.js';
import {FieldSchedule} from './field-schedule.js';
import {fieldFragment} from './field-shaders.js';

export class TintArea extends ClearArea {
 constructor(options={}){super(options);this.color=new THREE.Color(options.color??'#ffffff');}
 setOptions(options){super.setOptions(options);if(options.color!==undefined){if(this.color)this.color.set(options.color);}return this;}
}
export class FogLight {
 constructor(options={}){this.position=new THREE.Vector3();this.color=new THREE.Color('#ffffff');this.radius=8;this.intensity=1;this.enabled=true;this.setOptions(options);}
 setOptions(options){
  const p=options.position?(options.position.isVector3?options.position:new THREE.Vector3(...options.position)):this.position;
  const radius=options.radius??this.radius,intensity=options.intensity??this.intensity,enabled=options.enabled??this.enabled;
  const color=options.color===undefined?this.color:new THREE.Color(options.color);
  if(!p.toArray().every(Number.isFinite)||!Number.isFinite(radius)||radius<=0||!Number.isFinite(intensity)||intensity<0||typeof enabled!=='boolean'||![color.r,color.g,color.b].every(v=>Number.isFinite(v)&&v>=0))throw new RangeError('Invalid fog light');
  this.position.copy(p);this.color.copy(color);this.radius=radius;this.intensity=intensity;this.enabled=enabled;return this;
 }
}
const volumeKey=v=>[...v.center.toArray(),...v.radii.toArray(),...v.rotation.toArray(),v.shapeId,v.softness,v.strength];
const defaults={clearing:true,tint:true,lights:true,lightMode:'atlas',lightRefreshHz:0};
/** Shared clearing/color fields and an unshadowed local-light atlas. No scene content or animation is created. */
export class MaskFieldClouds extends VolumetricClouds {
 constructor(renderer,options={}){
  const maxAreas=options.maxAreas??128;
  if(!Number.isInteger(maxAreas)||maxAreas<1||maxAreas>128)throw new RangeError('maxAreas must be between 1 and 128');
  super(renderer,{...options,maxAreas:1,maskResolution:options.maskResolution??[64,24,64]});
  this.maxAreas=maxAreas;this.tints=new Set();this.lights=new Set();this.effects={...defaults};
  this.tintVolume=new TintVolume(this.bounds,this.mask.resolution);this.lightAtlas=new LightAtlas(this.bounds);this.lightSchedule=new FieldSchedule();
  this.tintSignature=null;this.lightSignature=null;this.renderedLightSignature=null;
  Object.assign(this.uniforms,{tintVolume:{value:this.tintVolume.texture},lightAtlas:{value:this.lightAtlas.target.texture},fieldResolution:{value:this.lightAtlas.resolution},lightCount:this.lightAtlas.uniforms.lightCount,positions:this.lightAtlas.uniforms.positions,colors:this.lightAtlas.uniforms.colors,useClear:{value:true},useTint:{value:true},useLights:{value:true},directLights:{value:false}});
  this.fogMaterial.fragmentShader=fieldFragment();this.fogMaterial.needsUpdate=true;
  Object.assign(this.stats,{tintAreas:0,tintUpdated:false,tintUpdateMs:0,lights:0,visibleLights:0,lightFieldUpdated:false});
  this.setEffects(options.effects??{});
 }
 addTint(options={}){this.assertAlive();if(this.tints.size>=128&&!this.tints.has(options))throw new RangeError('Maximum 128 tint areas');const area=options instanceof TintArea?options:new TintArea(options);this.tints.add(area);return area;}
 removeTint(area){this.assertAlive();return this.tints.delete(area);}
 clearTints(){this.assertAlive();this.tints.clear();}
 addLight(options={}){this.assertAlive();if(this.lights.size>=32&&!this.lights.has(options))throw new RangeError('Maximum 32 local lights');const light=options instanceof FogLight?options:new FogLight(options);this.lights.add(light);return light;}
 removeLight(light){this.assertAlive();return this.lights.delete(light);}
 clearLights(){this.assertAlive();this.lights.clear();}
 addArea(options={}){this.assertAlive();if(this.areas.size>=this.maxAreas&&!this.areas.has(options))throw new RangeError(`Maximum ${this.maxAreas} clearing areas`);const area=options instanceof ClearArea?options:new ClearArea(options);this.areas.add(area);return area;}
 setEffects(patch){
  this.assertAlive();const next={...this.effects,...patch};
  if(Object.keys(next).some(k=>!Object.hasOwn(defaults,k))||!['clearing','tint','lights'].every(k=>typeof next[k]==='boolean')||!['atlas','direct'].includes(next.lightMode)||![0,15,30].includes(next.lightRefreshHz))throw new RangeError('Invalid field effects');
  if(next.lightRefreshHz!==this.effects.lightRefreshHz||next.lightMode!==this.effects.lightMode||next.lights!==this.effects.lights){this.lightSchedule.reset();this.renderedLightSignature=null;}
  this.effects=next;this.uniforms.useClear.value=next.clearing;this.uniforms.useTint.value=next.tint;this.uniforms.useLights.value=next.lights;this.uniforms.directLights.value=next.lightMode==='direct';return this;
 }
 getEffects(){return {...this.effects};}
 setPreset(name){super.setPreset(name);return this.setEffects({lightMode:'atlas',lightRefreshHz:0});}
 update(camera,deltaSeconds=0){
  this.assertAlive();if(!camera?.isCamera)throw new TypeError('Expected THREE.Camera');if(!Number.isFinite(deltaSeconds)||deltaSeconds<0)throw new RangeError('deltaSeconds must be nonnegative');
  camera.updateWorldMatrix(true,false);this.time+=deltaSeconds;this.uniforms.time.value=this.time;this.uniforms.inverseVP.value.multiplyMatrices(camera.matrixWorld,camera.projectionMatrixInverse);
  this.frustum.setFromProjectionMatrix(this.vp.multiplyMatrices(camera.projectionMatrix,camera.matrixWorldInverse));
  const volumes=[...this.areas].filter(a=>a.enabled&&a.strength>0).map(a=>a.volume(this.settings));
  const visible=volumes.filter(v=>this.frustum.intersectsBox(volumeBounds(v)));
  const candidates=volumes.filter(v=>this.frustum.intersectsBox(volumeBounds(v,4))&&this.bounds.intersectsBox(volumeBounds(v)));
  const signature=JSON.stringify(candidates.map(volumeKey));
  Object.assign(this.stats,{areas:this.areas.size,visibleAreas:visible.length,maskAreas:candidates.length,maskUpdated:signature!==this.lastSignature,maskUpdateMs:0,tintAreas:this.tints.size,tintUpdated:false,tintUpdateMs:0,lights:this.lights.size,lightFieldUpdated:false});
  if(this.stats.maskUpdated){const start=performance.now();this.mask.rebuild(candidates);this.stats.maskUpdateMs=performance.now()-start;this.lastSignature=signature;}
  const tints=[...this.tints].filter(a=>a.enabled&&a.strength>0).map(area=>({volume:area.volume(this.settings),color:area.color}));
  const tintSignature=JSON.stringify(tints.map(({volume,color})=>[...volumeKey(volume),...color.toArray()]));
  if(tintSignature!==this.tintSignature){const start=performance.now();this.tintVolume.rebuild(tints);this.stats.tintUpdated=true;this.stats.tintUpdateMs=performance.now()-start;this.tintSignature=tintSignature;}
  const sphere=new THREE.Sphere();const lights=[...this.lights].filter(l=>l.enabled&&l.intensity>0&&this.frustum.intersectsSphere(sphere.set(l.position,l.radius))&&this.bounds.intersectsSphere(sphere));
  this.stats.visibleLights=lights.length;this.lightAtlas.setLights(lights);
  this.lightSignature=JSON.stringify(lights.map(l=>[...l.position.toArray(),...l.color.toArray(),l.radius,l.intensity]));
 }
 renderFields(){
  if(this.effects.lights&&this.effects.lightMode==='atlas'&&this.lightSignature!==this.renderedLightSignature&&this.lightSchedule.due(performance.now()/1000,this.effects.lightRefreshHz,0)){
   this.lightAtlas.render(this.renderer);this.renderedLightSignature=this.lightSignature;this.stats.lightFieldUpdated=true;
  }
 }
 dispose(){if(this.disposed)return;this.tints.clear();this.lights.clear();this.tintVolume.dispose();this.lightAtlas.dispose();super.dispose();}
}
