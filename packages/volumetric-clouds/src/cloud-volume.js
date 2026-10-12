import * as THREE from 'three';

// Periodic, deterministic 3D fBm. Built once; no per-frame CPU noise work.
export function createCloudVolume() {
 const resolution=64, data=new Uint8Array(resolution**3);
 const hash=(x,y,z)=>{let h=Math.imul(x+17,374761393)^Math.imul(y+31,668265263)^Math.imul(z+47,2147483647);h=Math.imul(h^(h>>>13),1274126177);return ((h^(h>>>16))>>>0)/4294967295;};
 const smooth=t=>t*t*t*(t*(t*6-15)+10);
 const mix=(a,b,t)=>a+(b-a)*t;
 function noise(x,y,z,period){
  const ix=Math.floor(x),iy=Math.floor(y),iz=Math.floor(z),u=smooth(x-ix),v=smooth(y-iy),w=smooth(z-iz);
  const n=(dx,dy,dz)=>hash((ix+dx)%period,(iy+dy)%period,(iz+dz)%period);
  return mix(mix(mix(n(0,0,0),n(1,0,0),u),mix(n(0,1,0),n(1,1,0),u),v),mix(mix(n(0,0,1),n(1,0,1),u),mix(n(0,1,1),n(1,1,1),u),v),w);
 }
 for(let z=0;z<resolution;z++)for(let y=0;y<resolution;y++)for(let x=0;x<resolution;x++){
  let value=0,weight=.58;
  for(const period of [4,8,16,32]){value+=weight*noise(x/resolution*period,y/resolution*period,z/resolution*period,period);weight*=.5;}
  data[x+resolution*(y+resolution*z)]=Math.round(value/1.0875*255);
 }
 const texture=new THREE.Data3DTexture(data,resolution,resolution,resolution);
 texture.format=THREE.RedFormat;texture.type=THREE.UnsignedByteType;
 texture.wrapS=texture.wrapT=texture.wrapR=THREE.RepeatWrapping;
 texture.minFilter=texture.magFilter=THREE.LinearFilter;
 texture.unpackAlignment=1;texture.needsUpdate=true;
 return texture;
}
