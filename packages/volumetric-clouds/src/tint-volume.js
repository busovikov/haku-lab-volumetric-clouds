import * as THREE from 'three';
import {volumeBounds,revealAtPoint} from './clear-area.js';
export class TintVolume {
 constructor(bounds,resolution){
  this.bounds=bounds.clone();this.resolution=[...resolution];this.size=bounds.getSize(new THREE.Vector3());
  this.data=new Uint8Array(resolution[0]*resolution[1]*resolution[2]*4);
  this.texture=new THREE.Data3DTexture(this.data,...resolution);
  Object.assign(this.texture,{format:THREE.RGBAFormat,type:THREE.UnsignedByteType,minFilter:THREE.LinearFilter,magFilter:THREE.LinearFilter,unpackAlignment:1,generateMipmaps:false,needsUpdate:true});
 }
 rebuild(regions){
  this.data.fill(0);const [nx,ny,nz]=this.resolution,n=nx*ny*nz,min=this.bounds.min;
  const sum=new Float32Array(n*3),weight=new Float32Array(n),maximum=new Float32Array(n);
  const step=new THREE.Vector3(this.size.x/nx,this.size.y/ny,this.size.z/nz),p=new THREE.Vector3();
  for(const {volume,color} of regions){
   const box=volumeBounds(volume),low=box.min.clone().sub(min).divide(step).floor().max(new THREE.Vector3()),high=box.max.clone().sub(min).divide(step).ceil().min(new THREE.Vector3(nx-1,ny-1,nz-1));
   for(let z=low.z;z<=high.z;z++)for(let y=low.y;y<=high.y;y++)for(let x=low.x;x<=high.x;x++){
    p.set(min.x+(x+.5)*step.x,min.y+(y+.5)*step.y,min.z+(z+.5)*step.z);
    const w=revealAtPoint(volume,p),i=x+nx*(y+ny*z);weight[i]+=w;maximum[i]=Math.max(maximum[i],w);sum[i*3]+=color.r*w;sum[i*3+1]+=color.g*w;sum[i*3+2]+=color.b*w;
   }
  }
  for(let i=0;i<n;i++)if(weight[i]){for(let c=0;c<3;c++)this.data[i*4+c]=Math.round(THREE.MathUtils.clamp(sum[i*3+c]/weight[i],0,1)*255);this.data[i*4+3]=Math.round(maximum[i]*255);}
  this.texture.needsUpdate=true;
 }
 dispose(){this.texture.dispose();}
}
