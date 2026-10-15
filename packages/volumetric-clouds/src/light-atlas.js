import * as THREE from 'three';
import {fullscreenVertex} from './shaders.js';
const RESOLUTION=[64,24,64],MAX_LIGHTS=32;
export class LightAtlas {
 constructor(bounds){
  this.count=0;
  this.resolution=new THREE.Vector3(...RESOLUTION);
  this.target=new THREE.WebGLRenderTarget(RESOLUTION[0]*8,RESOLUTION[1]*8,{type:THREE.UnsignedByteType,depthBuffer:false,minFilter:THREE.LinearFilter,magFilter:THREE.LinearFilter});
  this.uniforms={fieldMin:{value:bounds.min.clone()},fieldSize:{value:bounds.getSize(new THREE.Vector3())},lightCount:{value:this.count},positions:{value:Array.from({length:MAX_LIGHTS},()=>new THREE.Vector4())},colors:{value:Array.from({length:MAX_LIGHTS},()=>new THREE.Vector4())}};
  this.geometry=new THREE.PlaneGeometry(2,2);
  this.material=new THREE.ShaderMaterial({glslVersion:THREE.GLSL3,vertexShader:fullscreenVertex,depthTest:false,depthWrite:false,toneMapped:false,uniforms:this.uniforms,fragmentShader:`
   in vec2 vUv;out vec4 fragColor;uniform vec3 fieldMin,fieldSize;uniform int lightCount;uniform vec4 positions[${MAX_LIGHTS}],colors[${MAX_LIGHTS}];
   void main(){vec2 pixel=floor(gl_FragCoord.xy);vec2 tile=floor(pixel/vec2(64.,24.));float z=tile.x+tile.y*8.;vec3 cell=vec3(mod(pixel.x,64.),mod(pixel.y,24.),z);vec3 p=fieldMin+(cell+.5)/vec3(64.,24.,64.)*fieldSize;vec3 light=vec3(0.);for(int i=0;i<${MAX_LIGHTS};i++){if(i>=lightCount)break;float d=distance(p,positions[i].xyz)/positions[i].w;float a=max(0.,1.-d);light+=colors[i].rgb*colors[i].w*a*a;}fragColor=vec4(light/16.,1.);}`});
  this.scene=new THREE.Scene();this.scene.add(new THREE.Mesh(this.geometry,this.material));this.camera=new THREE.Camera();
 }
 setLights(lights){
  this.uniforms.lightCount.value=lights.length;
  lights.forEach((light,i)=>{this.uniforms.positions.value[i].set(light.position.x,light.position.y,light.position.z,light.radius);this.uniforms.colors.value[i].set(light.color.r,light.color.g,light.color.b,light.intensity);});
 }
 render(renderer){
  const target=renderer.getRenderTarget(),auto=renderer.autoClear,viewport=renderer.getViewport(new THREE.Vector4()),scissor=renderer.getScissor(new THREE.Vector4()),test=renderer.getScissorTest();
  try{renderer.autoClear=false;renderer.setScissorTest(false);renderer.setRenderTarget(this.target);renderer.render(this.scene,this.camera);}
  finally{renderer.setRenderTarget(target);renderer.autoClear=auto;renderer.setViewport(viewport);renderer.setScissor(scissor);renderer.setScissorTest(test);}
 }
 dispose(){this.target.dispose();this.geometry.dispose();this.material.dispose();}
}
