import type {WebGLRenderer,WebGLRenderTarget,Scene,Camera,Object3D,Vector3,Quaternion,Box3,Texture} from 'three';
export type Shape='cylinder'|'sphere'|'ellipsoid'|'box';
export interface CloudSettings {speed:number;base:number;thickness:number;density:number;relief:number;detail:number;cloudScale:number;fogTint:string;shadowTint:string;steps:number;resolutionScale:number;cameraClear:boolean;}
export interface AreaOptions {shape?:Shape;position?:Vector3|[number,number,number];rotation?:Quaternion|[number,number,number,number];radii?:Vector3|[number,number,number];radius?:number;height?:number;heightMode?:'layer'|'manual';softness?:number;strength?:number;enabled?:boolean;}
export class ClearArea {constructor(options?:AreaOptions);position:Vector3;rotation:Quaternion;radii:Vector3;shape:Shape;softness:number;strength:number;enabled:boolean;heightMode:'layer'|'manual';object:Object3D|null;setOptions(options:AreaOptions):this;attach(object:Object3D):this;detach():this;}
export interface CloudOptions {maxAreas?:number;bounds?:Box3;maskResolution?:[number,number,number];settings?:Partial<CloudSettings>;cloudTexture?:Texture;lightDirection?:[number,number,number];}
export interface CloudStats {areas:number;visibleAreas:number;maskAreas:number;maskUpdated:boolean;maskUpdateMs:number;fogWidth:number;fogHeight:number;}
export class VolumetricClouds {constructor(renderer:WebGLRenderer,options?:CloudOptions);readonly maxAreas:number;readonly stats:CloudStats;readonly areas:Set<ClearArea>;time:number;setSettings(settings:Partial<CloudSettings>):this;getSettings():CloudSettings;setPreset(name:CloudPreset):this;addArea(options?:AreaOptions|ClearArea):ClearArea;removeArea(area:ClearArea):boolean;clearAreas():void;setSize(width:number,height:number):void;update(camera:Camera,deltaSeconds?:number):void;render(scene:Scene,camera:Camera,deltaSeconds?:number,outputTarget?:WebGLRenderTarget|null):void;dispose():void;}
export type CloudPreset='speed'|'balance'|'quality'|'ultra';
export const CLOUD_PRESETS:Readonly<Record<CloudPreset,Readonly<Pick<CloudSettings,'steps'|'resolutionScale'>>>>;
export interface TintOptions extends AreaOptions {color?:import('three').ColorRepresentation;}
export class TintArea extends ClearArea {constructor(options?:TintOptions);color:import('three').Color;setOptions(options:TintOptions):this;}
export interface FogLightOptions {position?:Vector3|[number,number,number];color?:import('three').ColorRepresentation;radius?:number;intensity?:number;enabled?:boolean;}
export class FogLight {constructor(options?:FogLightOptions);position:Vector3;color:import('three').Color;radius:number;intensity:number;enabled:boolean;setOptions(options:FogLightOptions):this;}
export interface FieldEffects {clearing:boolean;tint:boolean;lights:boolean;lightMode:'atlas'|'direct';lightRefreshHz:0|15|30;}
export interface MaskFieldOptions extends CloudOptions {effects?:Partial<FieldEffects>;}
export interface FieldCloudStats extends CloudStats {tintAreas:number;tintUpdated:boolean;tintUpdateMs:number;lights:number;visibleLights:number;lightFieldUpdated:boolean;}
export class MaskFieldClouds extends VolumetricClouds {constructor(renderer:WebGLRenderer,options?:MaskFieldOptions);readonly stats:FieldCloudStats;readonly tints:Set<TintArea>;readonly lights:Set<FogLight>;addTint(options?:TintOptions|TintArea):TintArea;removeTint(area:TintArea):boolean;clearTints():void;addLight(options?:FogLightOptions|FogLight):FogLight;removeLight(light:FogLight):boolean;clearLights():void;setEffects(effects:Partial<FieldEffects>):this;getEffects():FieldEffects;}
