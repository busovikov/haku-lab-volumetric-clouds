import * as THREE from 'three';
import {ClearArea} from '../../packages/volumetric-clouds/src/index.js';
import {VolumeMask} from '../../packages/volumetric-clouds/src/volume-mask.js';
import {fullscreenVertex} from '../../packages/volumetric-clouds/src/shaders.js';

export const MAX_LIGHTS=32;
export const LIGHT_COLORS=['#ffb26f','#73daff','#dc98ff','#91ffa7','#ff82c7','#ffe681'];
export const RESOLUTION=[64,24,64];
export const COLOR_SPHERES=[
 {position:[-9,3,-4],radius:7,color:'#ff785f'},
 {position:[8,3,-5],radius:7,color:'#67d1af'},
 {position:[1,3,10],radius:7,color:'#9d8bef'},
];
export function pathDefinitions(count=13){return Array.from({length:count},(_,i)=>{const z=-17+i*34/(count-1);return {shape:'box',position:[Math.sin(z*.14)*5,3,z],radii:[2.4,6,2.1],heightMode:'manual',softness:1.2};});}
export function bakeFields(bounds,layer,resolution=RESOLUTION){
 const mask=new VolumeMask(bounds,resolution);
 const volumes=pathDefinitions().map(options=>new ClearArea(options).volume(layer));mask.rebuild(volumes);
 const [nx,ny,nz]=resolution,size=bounds.getSize(new THREE.Vector3()),data=new Uint8Array(nx*ny*nz*4);
 const spheres=COLOR_SPHERES.map(s=>({...s,color:new THREE.Color(s.color)}));
 const start=performance.now();
 for(let z=0;z<nz;z++)for(let y=0;y<ny;y++)for(let x=0;x<nx;x++){
  const p=new THREE.Vector3(bounds.min.x+(x+.5)*size.x/nx,bounds.min.y+(y+.5)*size.y/ny,bounds.min.z+(z+.5)*size.z/nz);
  let weight=0,maxWeight=0,r=0,g=0,b=0;
  for(const sphere of spheres){const d=p.distanceTo(new THREE.Vector3(...sphere.position))/sphere.radius,t=THREE.MathUtils.clamp((d-.65)/.35,0,1),w=1-t*t*(3-2*t);weight+=w;maxWeight=Math.max(maxWeight,w);r+=sphere.color.r*w;g+=sphere.color.g*w;b+=sphere.color.b*w;}
  const i=4*(x+nx*(y+ny*z));if(weight>0){data[i]=Math.round(r/weight*255);data[i+1]=Math.round(g/weight*255);data[i+2]=Math.round(b/weight*255);data[i+3]=Math.round(maxWeight*255);}
 }
 const tint=new THREE.Data3DTexture(data,nx,ny,nz);Object.assign(tint,{format:THREE.RGBAFormat,type:THREE.UnsignedByteType,minFilter:THREE.LinearFilter,magFilter:THREE.LinearFilter,unpackAlignment:1,generateMipmaps:false,needsUpdate:true});
 return {mask,tint,volumes,bakeMs:performance.now()-start,dispose(){mask.dispose();tint.dispose();}};
}
export const atlasSampling=`
uniform sampler2D lightAtlas;
uniform vec3 fieldResolution;
vec3 atlasSlice(vec2 p,float z){
 vec2 tiles=vec2(mod(z,8.),floor(z/8.));
 vec2 pixel=tiles*fieldResolution.xy+p+vec2(.5);
 return texture(lightAtlas,pixel/(fieldResolution.xy*8.)).rgb*16.;
}
vec3 lightingField(vec3 p){
 vec3 uv=(p-maskMin)/maskSize;
 if(any(lessThan(uv,vec3(0.)))||any(greaterThan(uv,vec3(1.))))return vec3(0.);
 vec3 grid=clamp(uv*fieldResolution-vec3(.5),vec3(0.),fieldResolution-vec3(1.));
 return mix(atlasSlice(grid.xy,floor(grid.z)),atlasSlice(grid.xy,min(floor(grid.z)+1.,fieldResolution.z-1.)),fract(grid.z));
}`;
export class LightField {
 constructor(bounds){
  this.count=16;this.revision=0;
  this.resolution=new THREE.Vector3(...RESOLUTION);
  this.target=new THREE.WebGLRenderTarget(RESOLUTION[0]*8,RESOLUTION[1]*8,{type:THREE.UnsignedByteType,depthBuffer:false,minFilter:THREE.LinearFilter,magFilter:THREE.LinearFilter});
  this.uniforms={fieldMin:{value:bounds.min.clone()},fieldSize:{value:bounds.getSize(new THREE.Vector3())},lightCount:{value:this.count},positions:{value:Array.from({length:MAX_LIGHTS},()=>new THREE.Vector4())},colors:{value:Array.from({length:MAX_LIGHTS},()=>new THREE.Vector4())}};
  this.geometry=new THREE.PlaneGeometry(2,2);
  this.material=new THREE.ShaderMaterial({glslVersion:THREE.GLSL3,vertexShader:fullscreenVertex,depthTest:false,depthWrite:false,toneMapped:false,uniforms:this.uniforms,fragmentShader:`
   in vec2 vUv;out vec4 fragColor;uniform vec3 fieldMin,fieldSize;uniform int lightCount;uniform vec4 positions[${MAX_LIGHTS}],colors[${MAX_LIGHTS}];
   void main(){vec2 pixel=floor(gl_FragCoord.xy);vec2 tile=floor(pixel/vec2(64.,24.));float z=tile.x+tile.y*8.;vec3 cell=vec3(mod(pixel.x,64.),mod(pixel.y,24.),z);vec3 p=fieldMin+(cell+.5)/vec3(64.,24.,64.)*fieldSize;vec3 light=vec3(0.);for(int i=0;i<${MAX_LIGHTS};i++){if(i>=lightCount)break;float d=distance(p,positions[i].xyz)/positions[i].w;float a=max(0.,1.-d);light+=colors[i].rgb*colors[i].w*a*a;}fragColor=vec4(light/16.,1.);}`});
  this.scene=new THREE.Scene();this.scene.add(new THREE.Mesh(this.geometry,this.material));this.camera=new THREE.Camera();
 }
 setCount(count){
  if(!Number.isInteger(count)||count<1||count>MAX_LIGHTS)throw new RangeError(`Light count must be 1–${MAX_LIGHTS}`);
  if(count!==this.count){this.count=count;this.uniforms.lightCount.value=count;this.revision++;}
 }
 updateLights(time){
  for(let i=0;i<this.count;i++){
   const a=time*(.23+(i%7)*.07)+i*2.399963;
   const ring=7+(i%5)*2.5;
   this.uniforms.positions.value[i].set(Math.cos(a)*ring,2.8+Math.sin(time*(.53+(i%3)*.11)+i)*1.8,Math.sin(a)*(ring+1),8);
   const c=new THREE.Color(LIGHT_COLORS[i%LIGHT_COLORS.length]);
   // Keep total energy constant when comparing counts; avoid atlas clipping.
   this.uniforms.colors.value[i].set(c.r,c.g,c.b,3.5*3/this.count);
  }
 }
 render(renderer){
  const target=renderer.getRenderTarget(),auto=renderer.autoClear,viewport=renderer.getViewport(new THREE.Vector4()),scissor=renderer.getScissor(new THREE.Vector4()),test=renderer.getScissorTest();
  try{renderer.autoClear=false;renderer.setScissorTest(false);renderer.setRenderTarget(this.target);renderer.render(this.scene,this.camera);}
  finally{renderer.setRenderTarget(target);renderer.autoClear=auto;renderer.setViewport(viewport);renderer.setScissor(scissor);renderer.setScissorTest(test);}
 }
 dispose(){this.target.dispose();this.geometry.dispose();this.material.dispose();}
}
