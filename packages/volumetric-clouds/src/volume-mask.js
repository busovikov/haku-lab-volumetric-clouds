import * as THREE from 'three';
import {volumeBounds,revealAtPoint} from './clear-area.js';
export class VolumeMask {
 constructor(bounds,resolution=[128,80,128]){
  if(resolution.length!==3||!resolution.every(n=>Number.isInteger(n)&&n>=2&&n<=256))throw new RangeError('Mask resolution: three integers between 2 and 256');
  this.bounds=bounds.clone();this.resolution=[...resolution];this.size=bounds.getSize(new THREE.Vector3());
  this.data=new Uint8Array(resolution[0]*resolution[1]*resolution[2]);
  this.texture=new THREE.Data3DTexture(this.data,...resolution);
  Object.assign(this.texture,{format:THREE.RedFormat,type:THREE.UnsignedByteType,minFilter:THREE.LinearFilter,magFilter:THREE.LinearFilter,unpackAlignment:1,generateMipmaps:false,needsUpdate:true});
 }
 rebuild(volumes){
  this.data.fill(0);const [nx,ny,nz]=this.resolution,min=this.bounds.min;
  const step=new THREE.Vector3(this.size.x/nx,this.size.y/ny,this.size.z/nz),p=new THREE.Vector3();
  for(const volume of volumes){
   const box=volumeBounds(volume),low=box.min.clone().sub(min).divide(step).floor().max(new THREE.Vector3()),high=box.max.clone().sub(min).divide(step).ceil().min(new THREE.Vector3(nx-1,ny-1,nz-1));
   for(let z=low.z;z<=high.z;z++)for(let y=low.y;y<=high.y;y++)for(let x=low.x;x<=high.x;x++){
    p.set(min.x+(x+.5)*step.x,min.y+(y+.5)*step.y,min.z+(z+.5)*step.z);
    const value=Math.round(revealAtPoint(volume,p)*255),index=x+nx*(y+ny*z);
    if(value>this.data[index])this.data[index]=value;
   }
  }
  this.texture.needsUpdate=true;
 }
 dispose(){this.texture.dispose();}
}
