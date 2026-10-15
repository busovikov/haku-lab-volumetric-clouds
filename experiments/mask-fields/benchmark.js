export const WARMUP_FRAMES=60;
export const MEASURE_FRAMES=360;
export const STANDARD={steps:64,resolutionScale:.65};
export function benchmarkModes(reverse=false){
 const common={clear:true,tint:true,lights:true,camera:false,...STANDARD};
 const modes=[{name:'Baseline: no fields',baseline:true,...STANDARD}];
 for(const count of [3,8,16,32]){
  modes.push({...common,name:`${count} lights / direct`,count,direct:true,refreshHz:0});
  for(const refreshHz of [0,30,15])modes.push({...common,name:`${count} lights / atlas ${refreshHz||'frame'}`,count,direct:false,refreshHz});
 }
 for(const resolutionScale of [.4,.5,1])modes.push({...common,name:`32 lights / scale ${resolutionScale}`,count:32,refreshHz:0,resolutionScale});
 for(const steps of [32,48,96])modes.push({...common,name:`32 lights / steps ${steps}`,count:32,refreshHz:0,steps});
 return reverse?modes.reverse():modes;
}
export function quantile(a,q){if(!a.length)return null;const s=[...a].sort((a,b)=>a-b);return s[Math.floor((s.length-1)*q)];}
export const mean=a=>a.length?a.reduce((sum,v)=>sum+v,0)/a.length:null;
