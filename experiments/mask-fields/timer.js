export class GpuTimer {
 constructor(gl){this.gl=gl;this.ext=gl.getExtension('EXT_disjoint_timer_query_webgl2');this.pending=[];this.active=null;}
 begin(tag){if(!this.ext||this.active||this.pending.length>24)return;const q=this.gl.createQuery();this.gl.beginQuery(this.ext.TIME_ELAPSED_EXT,q);this.active={q,tag};}
 end(){if(!this.active)return;this.gl.endQuery(this.ext.TIME_ELAPSED_EXT);this.pending.push(this.active);this.active=null;}
 poll(){if(!this.ext)return [];const gl=this.gl,out=[],disjoint=gl.getParameter(this.ext.GPU_DISJOINT_EXT);while(this.pending.length&&gl.getQueryParameter(this.pending[0].q,gl.QUERY_RESULT_AVAILABLE)){const item=this.pending.shift();if(!disjoint)out.push({tag:item.tag,ms:gl.getQueryParameter(item.q,gl.QUERY_RESULT)/1e6});gl.deleteQuery(item.q);}if(disjoint){for(const {q} of this.pending)gl.deleteQuery(q);this.pending=[];}return out;}
 dispose(){this.end();for(const {q} of this.pending)this.gl.deleteQuery(q);this.pending=[];}
}
