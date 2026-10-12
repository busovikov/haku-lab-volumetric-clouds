import * as THREE from 'three';
export const SHAPES=Object.freeze({sphere:0,ellipsoid:0,cylinder:1,box:2});
const vector=(value,fallback)=>value instanceof THREE.Vector3?value.clone():new THREE.Vector3(...(value??fallback));
export function edgeWidth(softness){return Math.min(.65,Math.max(.05,softness*.18));}

export class ClearArea {
 constructor(options={}){
  this.position=new THREE.Vector3();this.rotation=new THREE.Quaternion();this.radii=new THREE.Vector3(4.5,3.5,4.5);
  this.shape='cylinder';this.softness=1.2;this.strength=1;this.enabled=true;this.heightMode='layer';this.object=null;
  this.setOptions(options);
 }
 setOptions(options){
  const next={shape:this.shape,softness:this.softness,strength:this.strength,enabled:this.enabled,heightMode:this.heightMode,...options};
  if(!Object.hasOwn(SHAPES,next.shape))throw new RangeError('Unknown clearing shape');
  if(!['layer','manual'].includes(next.heightMode))throw new RangeError('heightMode must be layer or manual');
  if(!Number.isFinite(next.softness)||next.softness<=0)throw new RangeError('softness must be positive');
  if(!Number.isFinite(next.strength)||next.strength<0||next.strength>1)throw new RangeError('strength must be between 0 and 1');
  const position=vector(options.position,this.position.toArray());
  let radii=vector(options.radii,this.radii.toArray());
  if(options.radius!==undefined){if(!Number.isFinite(options.radius)||options.radius<=0)throw new RangeError('radius must be positive');radii.x=radii.z=options.radius;if(next.shape==='sphere')radii.y=options.radius;}
  if(options.height!==undefined){if(!Number.isFinite(options.height)||options.height<=0)throw new RangeError('height must be positive');radii.y=options.height/2;}
  if(next.shape==='sphere')radii.setScalar(radii.x);
  if(![...position.toArray(),...radii.toArray()].every(Number.isFinite)||Math.min(...radii.toArray())<=0)throw new RangeError('Invalid area dimensions');
  const rotation=options.rotation instanceof THREE.Quaternion?options.rotation.clone():new THREE.Quaternion(...(options.rotation??this.rotation.toArray()));
  if(!rotation.toArray().every(Number.isFinite)||rotation.lengthSq()<1e-12)throw new RangeError('Invalid area rotation');
  Object.assign(this,{shape:next.shape,softness:next.softness,strength:next.strength,enabled:!!next.enabled,heightMode:next.heightMode});
  this.position.copy(position);this.radii.copy(radii);this.rotation.copy(rotation.normalize());return this;
 }
 attach(object){
  if(!object?.isObject3D)throw new TypeError('attach expects a Three.js Object3D');
  this.object=object;return this;
 }
 detach(){
  if(this.object){const transform=this.worldTransform();this.position.copy(transform.center);this.rotation.copy(transform.rotation);this.object=null;}
  return this;
 }
 worldTransform(){
  const center=this.position.clone(),rotation=this.rotation.clone();
  if(this.object){
   this.object.updateWorldMatrix(true,true);
   // Anchor on the complete visual bounds; scale does not change clearing radii.
   const box=new THREE.Box3().setFromObject(this.object);
   if(box.isEmpty())this.object.getWorldPosition(center);else box.getCenter(center);
   center.add(this.position.clone().applyQuaternion(this.object.getWorldQuaternion(new THREE.Quaternion())));
   rotation.premultiply(this.object.getWorldQuaternion(new THREE.Quaternion()));
  }
  return {center,rotation};
 }
 volume(layer){
  const {center,rotation}=this.worldTransform();const radii=this.radii.clone();
  if(this.heightMode==='layer'&&this.shape!=='sphere'){
   const axis=new THREE.Vector3(0,1,0).applyQuaternion(rotation);
   if(Math.abs(axis.y)<.999)throw new RangeError('Rotated layer-height areas must use heightMode: manual');
   const reach=Math.max(Math.abs(center.y-layer.base),Math.abs(center.y-layer.base-layer.thickness));
   radii.y=(reach+.5)/(1-edgeWidth(this.softness));
  }
  const inverseRotation=new THREE.Matrix3().setFromMatrix4(new THREE.Matrix4().makeRotationFromQuaternion(rotation.clone().invert()));
  return {center,radii,rotation,inverseRotation,shape:this.shape,shapeId:SHAPES[this.shape],softness:this.softness,strength:this.strength};
 }
}
export function volumeBounds(volume,padding=0,target=new THREE.Box3()){
 const r=volume.radii.clone().multiplyScalar(1+edgeWidth(volume.softness));
 const matrix=new THREE.Matrix3().setFromMatrix4(new THREE.Matrix4().makeRotationFromQuaternion(volume.rotation));
 const m=matrix.elements;
 const extent=new THREE.Vector3(Math.abs(m[0])*r.x+Math.abs(m[3])*r.y+Math.abs(m[6])*r.z,Math.abs(m[1])*r.x+Math.abs(m[4])*r.y+Math.abs(m[7])*r.z,Math.abs(m[2])*r.x+Math.abs(m[5])*r.y+Math.abs(m[8])*r.z).addScalar(padding);
 return target.set(volume.center.clone().sub(extent),volume.center.clone().add(extent));
}
export function revealAtPoint(volume,point){
 const dx=point.x-volume.center.x,dy=point.y-volume.center.y,dz=point.z-volume.center.z,m=volume.inverseRotation.elements;
 const x=(m[0]*dx+m[3]*dy+m[6]*dz)/volume.radii.x,y=(m[1]*dx+m[4]*dy+m[7]*dz)/volume.radii.y,z=(m[2]*dx+m[5]*dy+m[8]*dz)/volume.radii.z;
 const distance=volume.shapeId===2?Math.max(Math.abs(x),Math.abs(y),Math.abs(z)):volume.shapeId===1?Math.max(Math.hypot(x,z),Math.abs(y)):Math.hypot(x,y,z);
 const edge=edgeWidth(volume.softness),t=THREE.MathUtils.clamp((distance-(1-edge))/(2*edge),0,1);
 return (1-t*t*(3-2*t))*volume.strength;
}
