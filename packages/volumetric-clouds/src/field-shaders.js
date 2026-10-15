import {volumeFragment} from './shaders.js';
const MAX_LIGHTS=32;
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
