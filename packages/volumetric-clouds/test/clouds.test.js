import test from 'node:test';
import assert from 'node:assert/strict';
import * as THREE from 'three';
import {ClearArea,VolumetricClouds} from '../src/index.js';
import {revealAtPoint,volumeBounds} from '../src/clear-area.js';
import {VolumeMask} from '../src/volume-mask.js';
const layer={base:.55,thickness:5.5};
test('shape interiors and smooth boundaries',()=>{
 for(const shape of ['cylinder','sphere','ellipsoid','box']){
  const area=new ClearArea({shape,heightMode:'manual',radii:[3,4,3]});const v=area.volume(layer);
  assert.equal(revealAtPoint(v,new THREE.Vector3()),1);
  assert.equal(revealAtPoint(v,new THREE.Vector3(10,0,0)),0);
  assert(Math.abs(revealAtPoint(v,new THREE.Vector3(3,0,0))-.5)<1e-6);
 }
 const p=new THREE.Vector3(2.5,3.5,0);
 assert(revealAtPoint(new ClearArea({shape:'box',heightMode:'manual',radii:[3,4,3]}).volume(layer),p)>.5);
 assert(revealAtPoint(new ClearArea({shape:'ellipsoid',heightMode:'manual',radii:[3,4,3]}).volume(layer),p)<.1);
});
test('rotated box has rotated clearing and conservative bounds',()=>{
 const area=new ClearArea({shape:'box',heightMode:'manual',radii:[1,2,4],rotation:new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(0,1,0),Math.PI/2)});
 const v=area.volume(layer);assert(revealAtPoint(v,new THREE.Vector3(3,0,0))>.9);assert.equal(revealAtPoint(v,new THREE.Vector3(0,0,3)),0);assert(volumeBounds(v).containsPoint(new THREE.Vector3(3,0,0)));
});
test('layer coverage, attachment, scale and detached position',()=>{
 const mesh=new THREE.Mesh(new THREE.BoxGeometry(2,4,2));mesh.position.set(5,3,0);mesh.scale.setScalar(2);
 const area=new ClearArea().attach(mesh),first=area.volume(layer);
 assert.equal(first.center.x,5);assert.equal(first.center.y,3);
 for(const y of [.55,6.05])assert(revealAtPoint(first,new THREE.Vector3(5,y,0))>.98);
 mesh.position.x=8;const linked=area.volume(layer);area.detach();mesh.position.x=10;
 assert(area.volume(layer).center.equals(linked.center));mesh.geometry.dispose();
});
test('mask storage is independent and empty rebuild clears previous data',()=>{
 const bounds=new THREE.Box3(new THREE.Vector3(-8,-8,-8),new THREE.Vector3(8,8,8));
 const a=new VolumeMask(bounds,[16,16,16]),b=new VolumeMask(bounds,[16,16,16]);
 a.rebuild([new ClearArea().volume(layer)]);assert(a.data.some(v=>v>0));assert(!b.data.some(v=>v>0));a.rebuild([]);assert(!a.data.some(v=>v>0));a.dispose();b.dispose();
});
test('frustum retains area touching screen edge and rejects outside area',()=>{
 const camera=new THREE.OrthographicCamera(-10,10,10,-10,.1,100);camera.position.set(0,0,30);camera.lookAt(0,0,0);camera.updateMatrixWorld();
 const f=new THREE.Frustum().setFromProjectionMatrix(new THREE.Matrix4().multiplyMatrices(camera.projectionMatrix,camera.matrixWorldInverse));
 assert(f.intersectsBox(volumeBounds(new ClearArea({position:[11,0,0],radius:2}).volume(layer))));
 assert(!f.intersectsBox(volumeBounds(new ClearArea({position:[30,0,0],radius:2}).volume(layer))));
});
test('public API validates input, culls on update and disposes idempotently',()=>{
 const clouds=new VolumetricClouds({isWebGLRenderer:true},{maskResolution:[16,16,16]});
 const camera=new THREE.OrthographicCamera(-10,10,10,-10,.1,100);camera.position.set(0,0,30);camera.lookAt(0,0,0);
 clouds.addArea({position:[0,0,0]});clouds.addArea({position:[60,0,0]});clouds.update(camera,.1);
 assert.equal(clouds.stats.areas,2);assert.equal(clouds.stats.visibleAreas,1);assert.equal(clouds.stats.maskAreas,1);assert(clouds.stats.maskUpdated);
 clouds.update(camera,0);assert(!clouds.stats.maskUpdated);
 const saved=JSON.parse(JSON.stringify(clouds.getSettings()));clouds.setSettings({density:.2});clouds.setSettings(saved);assert.equal(clouds.getSettings().density,1.1);
 assert.throws(()=>clouds.setSettings({steps:100}));assert.throws(()=>clouds.setSettings({thickness:100}));
 clouds.dispose();clouds.dispose();assert.throws(()=>clouds.addArea());
});

// WebGL2 permits devices with only 224 fragment uniform vector slots.
test('mobile shader fits uniform budget and low-end targets use byte buffers',()=>{
 const renderer={isWebGLRenderer:true,getContext:()=>({MAX_FRAGMENT_UNIFORM_VECTORS:1,getParameter:()=>224}),extensions:{has:()=>false}};
 const clouds=new VolumetricClouds(renderer,{maxAreas:128,maskResolution:[8,8,8]});
 assert.equal(clouds.maxAreas,30);assert(!clouds.fogMaterial.fragmentShader.includes('[128]'));
 assert(clouds.fogMaterial.fragmentShader.includes('[30]'));
 assert.equal(clouds.fogTarget.texture.type,THREE.UnsignedByteType);
 for(let i=0;i<30;i++)clouds.addArea();assert.throws(()=>clouds.addArea(),/Maximum 30/);clouds.dispose();
 const demo=new VolumetricClouds(renderer,{maxAreas:8,maskResolution:[8,8,8]});assert.equal(demo.maxAreas,8);demo.dispose();
});
