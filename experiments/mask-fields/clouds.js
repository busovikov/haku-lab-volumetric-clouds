import * as THREE from 'three';
import {VolumetricClouds} from '../../packages/volumetric-clouds/src/index.js';
import {FieldSchedule} from './schedule.js';
import {volumeFragment} from '../../packages/volumetric-clouds/src/shaders.js';
import {bakeFields,LightField,atlasSampling,MAX_LIGHTS} from './fields.js';

export function fieldFragment(){
 let s=volumeFragment;
 const begin=s.indexOf('uniform int clearCount;'),end=s.indexOf('out vec4 fragColor;',begin);
 s=s.slice(0,begin)+`uniform sampler3D tintVolume;uniform bool useClear,useTint,useLights,directLights;
uniform int lightCount;uniform vec4 positions[${MAX_LIGHTS}],colors[${MAX_LIGHTS}];
${atlasSampling}\n`+s.slice(end);
 s=s.replace('return texture(maskVolume,uv).r;','return useClear?texture(maskVolume,uv).r:0.;');
 const a=s.indexOf('float areaDistance'),b=s.indexOf('void main()',a);s=s.slice(0,a)+s.slice(b);
 const c=s.indexOf(' // Project the same soft volume field'),d=s.indexOf(' float dt=',c);
 s=s.slice(0,c)+' if(leave<=enter){fragColor=vec4(0.);return;}\n'+s.slice(d);
 const jitterEnd=s.indexOf(' float transmittance=');
 s=s.slice(0,jitterEnd)+` // One mask sample per step, followed by a linear reverse prefix maximum.
 float rayMask[96];
 for(int k=0;k<96;k++){if(k>=steps)break;rayMask[k]=revealAt(origin+dir*(enter+(float(k)+jitter)*dt));}
 if(cameraClear){float accumulated=0.;for(int k=95;k>=0;k--){if(k>=steps)continue;accumulated=max(accumulated,rayMask[k]);rayMask[k]=accumulated;}}
`+s.slice(jitterEnd);
 const e=s.indexOf('  float reveal=revealAt(p);'),f=s.indexOf('  float localDensity=',e);s=s.slice(0,e)+'  float reveal=rayMask[i];\n'+s.slice(f);
 const place=s.indexOf('  scattering+=');
 s=s.slice(0,place)+`  vec3 uv=(p-maskMin)/maskSize;
  if(useTint){vec4 field=texture(tintVolume,uv);color=mix(color,color*field.rgb,field.a*.82);}
  if(useLights){vec3 illumination=vec3(0.);if(directLights){for(int k=0;k<${MAX_LIGHTS};k++){if(k>=lightCount)break;float d=distance(p,positions[k].xyz)/positions[k].w;float a=max(0.,1.-d);illumination+=colors[k].rgb*colors[k].w*a*a;}}else illumination=lightingField(p);color+=illumination*.65;}
`+s.slice(place);
 return s;
}
export class MaskFieldClouds extends VolumetricClouds {
 constructor(renderer){
  const bounds=new THREE.Box3(new THREE.Vector3(-24,0,-24),new THREE.Vector3(24,8,24));
  super(renderer,{bounds,maxAreas:1,maskResolution:[64,24,64],settings:{base:.2,thickness:6,density:.75,steps:64,resolutionScale:.65,cameraClear:true}});
  this.fields=bakeFields(bounds,this.settings);this.lights=new LightField(bounds);
  Object.assign(this.uniforms,{maskVolume:{value:this.fields.mask.texture},tintVolume:{value:this.fields.tint},lightAtlas:{value:this.lights.target.texture},fieldResolution:{value:this.lights.resolution},lightCount:this.lights.uniforms.lightCount,positions:this.lights.uniforms.positions,colors:this.lights.uniforms.colors,useClear:{value:true},useTint:{value:true},useLights:{value:true},directLights:{value:false}});
  this.refreshHz=0;this.lightSchedule=new FieldSchedule();this.lightFieldUpdated=false;
  this.fogMaterial.fragmentShader=fieldFragment();this.fogMaterial.needsUpdate=true;
 }
 setMode({clear=true,tint=true,lights=true,camera=true,direct=false}){this.uniforms.useClear.value=clear;this.uniforms.useTint.value=tint;this.uniforms.useLights.value=lights;this.uniforms.directLights.value=direct;this.setSettings({cameraClear:camera});}
 update(camera,dt=0){this.assertAlive();camera.updateWorldMatrix(true,false);this.time+=dt;this.uniforms.time.value=this.time;this.uniforms.inverseVP.value.multiplyMatrices(camera.matrixWorld,camera.projectionMatrixInverse);this.lights.updateLights(this.time);}
 setLightOptions({count=this.lights.count,refreshHz=this.refreshHz}={}){
  this.lights.setCount(count);
  if(![0,15,30].includes(refreshHz))throw new RangeError('Refresh rate must be 0 (every frame), 15 or 30 Hz');
  if(this.refreshHz!==refreshHz){this.refreshHz=refreshHz;this.lightSchedule.reset();}
 }
 resetLightSchedule(){this.lightSchedule.reset();}
 render(scene,camera,dt=0,wallSeconds=performance.now()/1000){
  this.lights.updateLights(this.time+dt);this.lightFieldUpdated=false;
  if(this.uniforms.useLights.value&&!this.uniforms.directLights.value&&
   this.lightSchedule.due(wallSeconds,this.refreshHz,this.lights.revision)){
    this.lights.render(this.renderer);this.lightFieldUpdated=true;
  }
  super.render(scene,camera,dt);
 }
 dispose(){this.fields?.dispose();this.lights?.dispose();super.dispose();}
}
