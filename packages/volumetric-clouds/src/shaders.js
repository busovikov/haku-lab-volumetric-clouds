export const fullscreenVertex = `
out vec2 vUv;
void main(){vUv=uv;gl_Position=vec4(position.xy,0.,1.);}
`;
export const volumeFragment = `
precision highp sampler3D;
in vec2 vUv;
uniform sampler2D cloud,sceneDepth;
uniform vec3 fogMin,fogMax,lightDirection;
uniform sampler3D maskVolume,cloudVolume;
uniform float relief,detail,cloudScale;
uniform vec3 fogTint,shadowTint;
uniform mat4 inverseVP;
uniform vec3 maskMin,maskSize;
uniform float time,speed,base,thickness,density;
uniform int steps;
uniform bool debugMask,cameraClear;
uniform int clearCount;
uniform vec4 clearCenters[128],clearRadii[128];
uniform float clearStrength[128];
uniform mat3 clearRotations[128];
out vec4 fragColor;
float revealAt(vec3 p){
 vec3 uv=(p-maskMin)/maskSize;
 if(any(lessThan(uv,vec3(0.)))||any(greaterThan(uv,vec3(1.))))return 0.;
 return texture(maskVolume,uv).r;
}
float cloudNoise(vec3 p){
 vec3 drift=vec3(-time*speed*.16,time*speed*.018,-time*speed*.07);
 vec3 q=(p+drift)/cloudScale;
 float warp=texture(cloudVolume,q*.53+vec3(.13,.47,.71)).r;
 q+=vec3(warp-.5,warp*.4,warp-.5)*.18;
 float large=texture(cloudVolume,q).r;
 float small=texture(cloudVolume,q*3.7-drift/cloudScale*5.2+vec3(.37,.19,.61)).r;
 return large+(small-.5)*detail*.32;
}
float rawFogDensity(vec3 p){
 float h=(p.y-base)/thickness;
 if(h<=0.||h>=1.)return 0.;
 float n=cloudNoise(p);
 // Each column has its own softly rounded summit, inside the height bound.
 float summitNoise=texture(cloudVolume,vec3(p.x/cloudScale*.65,.31,p.z/cloudScale*.65)+vec3(-time*speed*.004,0.,0.)).r;
 float summit=mix(.96,clamp(.34+summitNoise*.95,.38,.98),relief);
 float vertical=smoothstep(0.,.07,h)*(1.-smoothstep(summit-.18,summit,h));
 float edgeDistance=min(min(p.x-fogMin.x,fogMax.x-p.x),min(p.z-fogMin.z,fogMax.z-p.z));
 float boundary=smoothstep(0.,3.,edgeDistance);
 float threshold=mix(.26,.57,h);
 float shape=smoothstep(threshold,threshold+.19,n);
 return density*vertical*boundary*(.055+shape*1.9);
}
float fogDensity(vec3 p){return rawFogDensity(p)*(1.-revealAt(p));}
float areaDistance(vec3 p,int j){
 vec3 q=(clearRotations[j]*(p-clearCenters[j].xyz))/clearRadii[j].xyz;
 if(clearRadii[j].w>1.5)return max(max(abs(q.x),abs(q.y)),abs(q.z));
 return clearRadii[j].w>.5?max(length(q.xz),abs(q.y)):length(q);
}
// Ray intervals in normalized volume coordinates. Cylinder axis is world Y.
vec2 areaInterval(vec3 origin,vec3 dir,vec3 center,vec3 radii,float shape,mat3 rotation){
 vec3 o=(rotation*(origin-center))/radii,d=(rotation*dir)/radii;
 bool cylinder=shape>.5;
 if(shape>1.5){
  vec2 bounds=vec2(-1e5,1e5);
  for(int axis=0;axis<3;axis++){
   if(abs(d[axis])<1e-7){if(abs(o[axis])>1.)return vec2(1.,-1.);}
   else{vec2 hit=vec2((-1.-o[axis])/d[axis],(1.-o[axis])/d[axis]);bounds=vec2(max(bounds.x,min(hit.x,hit.y)),min(bounds.y,max(hit.x,hit.y)));}
  }
  return bounds;
 }
 float aa=cylinder?dot(d.xz,d.xz):dot(d,d);
 float bb=cylinder?dot(o.xz,d.xz):dot(o,d);
 float cc=(cylinder?dot(o.xz,o.xz):dot(o,o))-1.;
 vec2 interval=vec2(-1e5,1e5);
 if(aa<1e-9){if(cc>0.)return vec2(1.,-1.);}
 else{
  float discriminant=bb*bb-aa*cc;
  if(discriminant<=0.)return vec2(1.,-1.);
  float root=sqrt(discriminant);
  interval=vec2((-bb-root)/aa,(-bb+root)/aa);
 }
 if(cylinder){
  if(abs(d.y)<1e-7){if(abs(o.y)>1.)return vec2(1.,-1.);}
  else{
   vec2 caps=vec2((-1.-o.y)/d.y,(1.-o.y)/d.y);
   interval=vec2(max(interval.x,min(caps.x,caps.y)),min(interval.y,max(caps.x,caps.y)));
  }
 }
 return interval;
}
void main(){
 vec2 clip=vUv*2.-1.;
 vec4 a=inverseVP*vec4(clip,-1.,1.),b=inverseVP*vec4(clip,1.,1.);
 vec3 origin=a.xyz/a.w,dir=normalize(b.xyz/b.w-origin);
 float depth=texture(sceneDepth,vUv).r;
 vec4 hit=inverseVP*vec4(clip,depth*2.-1.,1.);
 float sceneDistance=depth<.999999?length(hit.xyz/hit.w-origin):length(b.xyz/b.w-origin);
 vec3 invDir=1./(dir+vec3(.000001));
 vec3 lo=vec3(fogMin.x,base,fogMin.z),hi=vec3(fogMax.x,base+thickness,fogMax.z);
 vec3 t0=(lo-origin)*invDir,t1=(hi-origin)*invDir;
 vec3 mn=min(t0,t1),mx=max(t0,t1);
 float enter=max(0.,max(mn.x,max(mn.y,mn.z)));
 float leave=min(sceneDistance,min(mx.x,min(mx.y,mx.z)));
 if(debugMask){
  float planeDistance=(base+thickness*.5-origin.y)/dir.y;
  vec3 p=origin+dir*planeDistance;
  float value=revealAt(p);
  fragColor=vec4(vec3(value),1.);return;
 }
 // Project the same soft volume field towards the camera. Each ray keeps
 // the closest point in the visible segment; no binary clipping of the march.
 vec3 rayAreas[128];
 if(cameraClear){
  for(int j=0;j<128;j++){
   if(j>=clearCount)break;
   float edge=clearCenters[j].w;
   vec2 bounds=areaInterval(origin,dir,clearCenters[j].xyz,clearRadii[j].xyz*(1.+edge),clearRadii[j].w,clearRotations[j]);
   float nearT=max(0.,bounds.x),farT=min(sceneDistance,bounds.y);
   rayAreas[j]=vec3(0.,-1.,2.);
   if(farT<=nearT)continue;
   // The normalized cylinder/ellipsoid distance is convex along a ray.
   float left=nearT,right=farT;
   for(int k=0;k<14;k++){
    float u=mix(left,right,1./3.),v=mix(left,right,2./3.);
    if(areaDistance(origin+dir*u,j)<areaDistance(origin+dir*v,j))right=v;else left=u;
   }
   float closest=(left+right)*.5;
   rayAreas[j]=vec3(closest,farT,areaDistance(origin+dir*closest,j));
  }
 }
 if(leave<=enter){fragColor=vec4(0.);return;}
 float dt=(leave-enter)/float(steps);
 // Fixed pixel jitter hides banding without temporal flicker when paused.
 float jitter=fract(sin(dot(gl_FragCoord.xy,vec2(12.9898,78.233)))*43758.5453);
 float transmittance=1.;vec3 scattering=vec3(0.);
 for(int i=0;i<96;i++){
  if(i>=steps||transmittance<.012)break;
  float sampleT=enter+(float(i)+jitter)*dt;
  vec3 p=origin+dir*sampleT;
  float reveal=revealAt(p);
  if(cameraClear){
   for(int j=0;j<128;j++){
    if(j>=clearCount||reveal>.999)break;
    if(sampleT>rayAreas[j].y)continue;
    float distance=sampleT<=rayAreas[j].x?rayAreas[j].z:areaDistance(p,j);
    float edge=clearCenters[j].w;
    float projected=(1.-smoothstep(1.-edge,1.+edge,distance))*clearStrength[j];
    reveal=max(reveal,projected);
   }
  }
  float localDensity=rawFogDensity(p)*(1.-reveal);
  if(localDensity<.001)continue;
  float alpha=1.-exp(-localDensity*dt);
  // Short light march: denser cloud interiors receive less direct light.
  vec3 lightDir=normalize(lightDirection);
  float opticalDepth=0.;
  for(int j=1;j<=4;j++)opticalDepth+=fogDensity(p+lightDir*float(j)*.85)*.85;
  float shadow=exp(-opticalDepth*.85);
  float heightLight=clamp((p.y-base)/thickness,0.,1.);
  vec3 tint=texture(cloud,p.xz/18.+vec2(p.y*.017)-time*speed/128.).rgb;
  float heightGradient=smoothstep(.05,.8,heightLight);
  float illumination=clamp(shadow*.65+heightGradient*.35,0.,1.);
  vec3 color=mix(shadowTint,fogTint,illumination)*mix(vec3(1.),tint,.12);
  // Forward scattering adds a restrained silver edge facing the light.
  color+=fogTint*pow(max(dot(dir,lightDir),0.),5.)*shadow*.12;
  scattering+=transmittance*alpha*color;
  transmittance*=1.-alpha;
 }
 // Premultiplied scattering; compositing happens in a separate pass.
 fragColor=vec4(scattering,1.-transmittance);
}
`;
export const compositeFragment = `
#define gl_FragColor fragColor
in vec2 vUv;uniform sampler2D sceneColor,fogColor;out vec4 fragColor;
void main(){vec4 fog=texture(fogColor,vUv);vec3 scene=texture(sceneColor,vUv).rgb;fragColor=vec4(fog.rgb+scene*(1.-fog.a),1.);
 #include <tonemapping_fragment>
 #include <colorspace_fragment>
}
`;
