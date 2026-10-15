// Preserve the cadence across display frames, skip missed ticks after a stall.
export class FieldSchedule {
 constructor(){this.reset();}
 reset(){this.next=-Infinity;this.revision=-1;}
 due(seconds,hz,revision){
  if(hz===0){this.revision=revision;return true;}
  const period=1/hz;
  if(revision!==this.revision||!Number.isFinite(this.next)){
   this.revision=revision;this.next=seconds+period;return true;
  }
  if(seconds+1e-6<this.next)return false;
  this.next+=(Math.floor(Math.max(0,seconds-this.next)/period)+1)*period;
  return true;
 }
}
