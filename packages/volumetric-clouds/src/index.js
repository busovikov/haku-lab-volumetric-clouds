import * as THREE from 'three';
import {ClearArea,edgeWidth,volumeBounds} from './clear-area.js';
import {VolumeMask} from './volume-mask.js';
import {createCloudVolume} from './cloud-volume.js';
import {fullscreenVertex,volumeFragment,compositeFragment} from './shaders.js';
export {ClearArea};

const DEFAULTS=Object.freeze({speed:1,base:.55,thickness:5.5,density:1.1,relief:.85,detail:.7,cloudScale:22,fogTint:'#fff1da',shadowTint:'#718baf',steps:64,resolutionScale:.65,cameraClear:false});
function validated(settings){
 const ranges={speed:[0,10],base:[-10000,10000],thickness:[.01,10000],density:[0,20],relief:[0,1],detail:[0,3],cloudScale:[.1,10000],steps:[8,96],resolutionScale:[.1,1]};
 for(const [key,[min,max]] of Object.entries(ranges))if(!Number.isFinite(settings[key])||settings[key]<min||settings[key]>max)throw new RangeError(`Invalid cloud setting: ${key}`);
 if(!Number.isInteger(settings.steps))throw new RangeError('steps must be an integer');
 for(const key of ['fogTint','shadowTint'])if(!/^#[0-9a-f]{6}$/i.test(settings[key]))throw new TypeError(`${key} must be a #RRGGBB color`);
 if(typeof settings.cameraClear!=='boolean')throw new TypeError('cameraClear must be boolean');
 for(const key of Object.keys(settings))if(!Object.hasOwn(DEFAULTS,key))throw new TypeError(`Unknown cloud setting: ${key}`);
 return {...settings};
}

/** Owns cloud resources only. Does not create terrain, visual objects, DOM or an animation loop. */
export class VolumetricClouds {
 constructor(renderer,options={}){
  if(!renderer?.isWebGLRenderer)throw new TypeError('Expected THREE.WebGLRenderer');
  this.renderer=renderer;this.disposed=false;this.time=0;this.areas=new Set();
  this.bounds=(options.bounds??new THREE.Box3(new THREE.Vector3(-32,-8,-32),new THREE.Vector3(32,24,32))).clone();
  const size=this.bounds.getSize(new THREE.Vector3());
  if(![...this.bounds.min.toArray(),...this.bounds.max.toArray()].every(Number.isFinite)||Math.min(...size.toArray())<=0)throw new RangeError('bounds must be a finite, nonempty Box3');
  this.settings=validated({...DEFAULTS,...options.settings});this.checkLayer(this.settings);
  this.mask=new VolumeMask(this.bounds,options.maskResolution);this.noiseTexture=createCloudVolume();
  this.ownsCloudTexture=!options.cloudTexture;
  this.cloudTexture=options.cloudTexture??new THREE.DataTexture(new Uint8Array([255,255,255,255]),1,1,THREE.RGBAFormat);
  if(this.ownsCloudTexture)this.cloudTexture.needsUpdate=true;
  this.sceneTarget=new THREE.WebGLRenderTarget(1,1,{type:THREE.HalfFloatType});
  this.sceneTarget.depthTexture=new THREE.DepthTexture(1,1,THREE.UnsignedIntType);
  this.fogTarget=new THREE.WebGLRenderTarget(1,1,{type:THREE.HalfFloatType,depthBuffer:false});
  this.uniforms={cloud:{value:this.cloudTexture},cloudVolume:{value:this.noiseTexture},sceneDepth:{value:this.sceneTarget.depthTexture},maskVolume:{value:this.mask.texture},maskMin:{value:this.bounds.min.clone()},maskSize:{value:size},fogMin:{value:this.bounds.min.clone()},fogMax:{value:this.bounds.max.clone()},lightDirection:{value:new THREE.Vector3(...(options.lightDirection??[-.5,1,.3])).normalize()},inverseVP:{value:new THREE.Matrix4()},time:{value:0},debugMask:{value:false},clearCount:{value:0},clearCenters:{value:Array.from({length:128},()=>new THREE.Vector4())},clearRadii:{value:Array.from({length:128},()=>new THREE.Vector4())},clearRotations:{value:Array.from({length:128},()=>new THREE.Matrix3())},clearStrength:{value:new Float32Array(128)}};
  for(const key of Object.keys(DEFAULTS))if(key!=='resolutionScale')this.uniforms[key]={value:key.endsWith('Tint')?new THREE.Color(this.settings[key]):this.settings[key]};
  this.geometry=new THREE.PlaneGeometry(2,2);this.postCamera=new THREE.Camera();
  this.fogMaterial=new THREE.ShaderMaterial({uniforms:this.uniforms,glslVersion:THREE.GLSL3,vertexShader:fullscreenVertex,fragmentShader:volumeFragment,depthTest:false,depthWrite:false,toneMapped:false});
  this.compositeMaterial=new THREE.ShaderMaterial({uniforms:{sceneColor:{value:this.sceneTarget.texture},fogColor:{value:this.fogTarget.texture}},glslVersion:THREE.GLSL3,vertexShader:fullscreenVertex,fragmentShader:compositeFragment,depthTest:false,depthWrite:false});
  this.fogScene=new THREE.Scene();this.fogScene.add(new THREE.Mesh(this.geometry,this.fogMaterial));
  this.compositeScene=new THREE.Scene();this.compositeScene.add(new THREE.Mesh(this.geometry,this.compositeMaterial));
  this.frustum=new THREE.Frustum();this.vp=new THREE.Matrix4();this.lastSignature='';this.bufferSize=new THREE.Vector2();
  this.stats={areas:0,visibleAreas:0,maskAreas:0,maskUpdated:false,maskUpdateMs:0,fogWidth:1,fogHeight:1};
 }
 checkLayer(settings){if(settings.base<this.bounds.min.y||settings.base+settings.thickness>this.bounds.max.y)throw new RangeError('The complete fog layer must fit within bounds.y');}
 assertAlive(){if(this.disposed)throw new Error('VolumetricClouds has been disposed');}
 setSettings(patch){
  this.assertAlive();const next=validated({...this.settings,...patch});this.checkLayer(next);this.settings=next;
  for(const key of Object.keys(DEFAULTS))if(key!=='resolutionScale'){if(key.endsWith('Tint'))this.uniforms[key].value.set(next[key]);else this.uniforms[key].value=next[key];}
  return this;
 }
 getSettings(){return {...this.settings};}
 addArea(options={}){
  this.assertAlive();if(this.areas.size>=128)throw new RangeError('Maximum 128 clearing areas');
  const area=options instanceof ClearArea?options:new ClearArea(options);this.areas.add(area);return area;
 }
 removeArea(area){this.assertAlive();return this.areas.delete(area);}
 clearAreas(){this.assertAlive();this.areas.clear();}
 setSize(width,height){
  this.assertAlive();if(!Number.isFinite(width)||!Number.isFinite(height)||width<=0||height<=0)throw new RangeError('Invalid render size');
  const w=Math.ceil(width),h=Math.ceil(height);
  if(this.sceneTarget.width!==w||this.sceneTarget.height!==h)this.sceneTarget.setSize(w,h);
  const fw=Math.max(1,Math.ceil(w*this.settings.resolutionScale)),fh=Math.max(1,Math.ceil(h*this.settings.resolutionScale));
  if(this.fogTarget.width!==fw||this.fogTarget.height!==fh)this.fogTarget.setSize(fw,fh);
  this.stats.fogWidth=fw;this.stats.fogHeight=fh;
 }
 update(camera,deltaSeconds=0){
  this.assertAlive();if(!camera?.isCamera)throw new TypeError('Expected THREE.Camera');
  if(!Number.isFinite(deltaSeconds)||deltaSeconds<0)throw new RangeError('deltaSeconds must be nonnegative');
  camera.updateWorldMatrix(true,false);
  this.time+=deltaSeconds;this.uniforms.time.value=this.time;
  this.uniforms.inverseVP.value.multiplyMatrices(camera.matrixWorld,camera.projectionMatrixInverse);
  this.frustum.setFromProjectionMatrix(this.vp.multiplyMatrices(camera.projectionMatrix,camera.matrixWorldInverse));
  const volumes=[...this.areas].filter(a=>a.enabled&&a.strength>0).map(a=>a.volume(this.settings));
  const visible=volumes.filter(v=>this.frustum.intersectsBox(volumeBounds(v)));
  const maskAreas=volumes.filter(v=>this.frustum.intersectsBox(volumeBounds(v,4))&&this.bounds.intersectsBox(volumeBounds(v)));
  const signature=JSON.stringify(maskAreas.map(v=>[...v.center.toArray(),...v.radii.toArray(),...v.rotation.toArray(),v.shapeId,v.softness,v.strength]));
  this.stats.maskUpdated=signature!==this.lastSignature;this.stats.maskUpdateMs=0;
  if(this.stats.maskUpdated){const start=performance.now();this.mask.rebuild(maskAreas);this.stats.maskUpdateMs=performance.now()-start;this.lastSignature=signature;}
  this.uniforms.clearCount.value=this.settings.cameraClear?visible.length:0;
  if(this.settings.cameraClear)visible.forEach((v,i)=>{
   this.uniforms.clearCenters.value[i].set(v.center.x,v.center.y,v.center.z,edgeWidth(v.softness));
   this.uniforms.clearRadii.value[i].set(v.radii.x,v.radii.y,v.radii.z,v.shapeId);
   this.uniforms.clearRotations.value[i].copy(v.inverseRotation);this.uniforms.clearStrength.value[i]=v.strength;
  });
  Object.assign(this.stats,{areas:this.areas.size,visibleAreas:visible.length,maskAreas:maskAreas.length});
 }
 render(scene,camera,deltaSeconds=0,outputTarget=null){
  this.assertAlive();this.update(camera,deltaSeconds);
  const r=this.renderer;r.getDrawingBufferSize(this.bufferSize);this.setSize(this.bufferSize.x,this.bufferSize.y);
  const previous={target:r.getRenderTarget(),color:r.getClearColor(new THREE.Color()),alpha:r.getClearAlpha(),autoClear:r.autoClear,viewport:r.getViewport(new THREE.Vector4()),scissor:r.getScissor(new THREE.Vector4()),scissorTest:r.getScissorTest()};
  try{
   r.autoClear=false;r.setScissorTest(false);
   r.setRenderTarget(this.sceneTarget);r.clear();r.render(scene,camera);
   r.setRenderTarget(this.fogTarget);r.setClearColor(0,0);r.clear();r.render(this.fogScene,this.postCamera);
   r.setRenderTarget(outputTarget);r.render(this.compositeScene,this.postCamera);
  }finally{
   r.setRenderTarget(previous.target);r.setClearColor(previous.color,previous.alpha);r.autoClear=previous.autoClear;
   r.setViewport(previous.viewport);r.setScissor(previous.scissor);r.setScissorTest(previous.scissorTest);
  }
 }
 dispose(){
  if(this.disposed)return;this.disposed=true;this.areas.clear();
  this.mask.dispose();this.noiseTexture.dispose();if(this.ownsCloudTexture)this.cloudTexture.dispose();
  this.sceneTarget.dispose();this.fogTarget.dispose();this.geometry.dispose();this.fogMaterial.dispose();this.compositeMaterial.dispose();
 }
}
