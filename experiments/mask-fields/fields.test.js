import test from 'node:test';
import assert from 'node:assert/strict';
import * as THREE from 'three';
import {bakeFields,LightField,pathDefinitions,MAX_LIGHTS} from './fields.js';
import {fieldFragment} from './clouds.js';
test('shared fields contain the path and three distinct tint regions',()=>{
 const bounds=new THREE.Box3(new THREE.Vector3(-24,0,-24),new THREE.Vector3(24,8,24));
 const fields=bakeFields(bounds,{base:.2,thickness:6},[32,12,32]);
 assert.equal(pathDefinitions().length,13);assert(fields.mask.data.some(v=>v>240));assert(fields.tint.image.data.some((v,i)=>i%4===3&&v>240));
 const at=(x,y,z)=>{const ix=Math.floor((x+24)/48*32),iy=Math.floor(y/8*12),iz=Math.floor((z+24)/48*32),i=4*(ix+32*(iy+12*iz));return fields.tint.image.data.slice(i,i+4);};
 const red=at(-9,3,-4),green=at(8,3,-5),purple=at(1,3,10);
 assert(red[0]>red[1]);assert(green[1]>green[0]);assert(purple[2]>purple[0]);fields.dispose();
});
test('lights are independent and the main shader has no figure lists',()=>{
 const field=new LightField(new THREE.Box3(new THREE.Vector3(-24,0,-24),new THREE.Vector3(24,8,24)));
 field.setCount(32);field.updateLights(0);const before=field.uniforms.positions.value.map(v=>v.clone());field.updateLights(2);
 for(let i=0;i<32;i++)assert(!field.uniforms.positions.value[i].equals(before[i]));assert(!before[0].equals(before[1]));field.dispose();
 const shader=fieldFragment();assert(!shader.includes('clearCenters'));assert(!shader.includes('areaInterval'));assert(shader.includes('rayMask[k]=accumulated'));assert(shader.includes('vec3 lightingField(vec3 p)'));assert(shader.includes('positions[32]'));assert(!shader.includes('${'));
});

test('light count validation and energy are stable across benchmark counts',()=>{
 const field=new LightField(new THREE.Box3(new THREE.Vector3(-24,0,-24),new THREE.Vector3(24,8,24)));
 for(const count of [3,8,16,32]){field.setCount(count);field.updateLights(1);assert.equal(field.uniforms.lightCount.value,count);assert(Math.abs(field.uniforms.colors.value.slice(0,count).reduce((s,c)=>s+c.w,0)-10.5)<1e-9);}
 for(const count of [0,33,1.5,NaN])assert.throws(()=>field.setCount(count),RangeError);
 assert.equal(MAX_LIGHTS,32);field.dispose();
});

import {FieldSchedule} from './schedule.js';
test('field refresh keeps 15/30 Hz on a 120 Hz display and skips missed ticks',()=>{
 for(const hz of [15,30]){
  const schedule=new FieldSchedule();let updates=0;
  for(let frame=0;frame<1200;frame++)if(schedule.due(frame/120,hz,1))updates++;
  assert.equal(updates,hz*10);
  assert(schedule.due(20,hz,1));assert(!schedule.due(20,hz,1));
  assert(schedule.due(20,hz,2));schedule.reset();assert(schedule.due(20,hz,2));
 }
});
