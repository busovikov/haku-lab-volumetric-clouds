(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();const zs="180",qo=0,sa=1,Yo=2,uo=1,jo=2,en=3,gn=0,St=1,tn=2,pn=0,$n=1,aa=2,oa=3,la=4,Ko=5,Cn=100,$o=101,Zo=102,Jo=103,Qo=104,el=200,tl=201,nl=202,il=203,Jr=204,Qr=205,rl=206,sl=207,al=208,ol=209,ll=210,cl=211,ul=212,hl=213,fl=214,es=0,ts=1,ns=2,Qn=3,is=4,rs=5,ss=6,as=7,ho=0,dl=1,pl=2,mn=0,ml=1,gl=2,_l=3,vl=4,xl=5,Ml=6,Sl=7,fo=300,ei=301,ti=302,os=303,ls=304,pr=306,or=1e3,Dn=1001,cs=1002,Rt=1003,El=1004,wi=1005,wt=1006,Sr=1007,Ln=1008,Nt=1009,po=1010,mo=1011,gi=1012,Hs=1013,_n=1014,nn=1015,ri=1016,Vs=1017,Gs=1018,_i=1020,go=35902,_o=35899,vo=1021,xo=1022,It=1023,vi=1026,xi=1027,mr=1028,ks=1029,Mo=1030,Ws=1031,Xs=1033,er=33776,tr=33777,nr=33778,ir=33779,us=35840,hs=35841,fs=35842,ds=35843,ps=36196,ms=37492,gs=37496,_s=37808,vs=37809,xs=37810,Ms=37811,Ss=37812,Es=37813,ys=37814,Ts=37815,bs=37816,As=37817,ws=37818,Rs=37819,Cs=37820,Ps=37821,Ds=36492,Ls=36494,Us=36495,Is=36283,Ns=36284,Fs=36285,Os=36286,yl=3200,Tl=3201,bl=0,Al=1,dn="",Lt="srgb",ni="srgb-linear",lr="linear",Ye="srgb",In=7680,ca=519,wl=512,Rl=513,Cl=514,So=515,Pl=516,Dl=517,Ll=518,Ul=519,ua=35044,cr="300 es",Xt=2e3,ur=2001;class si{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const r=n[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const r=n.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const dt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let ha=1234567;const Zn=Math.PI/180,Mi=180/Math.PI;function ai(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(dt[i&255]+dt[i>>8&255]+dt[i>>16&255]+dt[i>>24&255]+"-"+dt[e&255]+dt[e>>8&255]+"-"+dt[e>>16&15|64]+dt[e>>24&255]+"-"+dt[t&63|128]+dt[t>>8&255]+"-"+dt[t>>16&255]+dt[t>>24&255]+dt[n&255]+dt[n>>8&255]+dt[n>>16&255]+dt[n>>24&255]).toLowerCase()}function Be(i,e,t){return Math.max(e,Math.min(t,i))}function qs(i,e){return(i%e+e)%e}function Il(i,e,t,n,r){return n+(i-e)*(r-n)/(t-e)}function Nl(i,e,t){return i!==e?(t-i)/(e-i):0}function mi(i,e,t){return(1-t)*i+t*e}function Fl(i,e,t,n){return mi(i,e,1-Math.exp(-t*n))}function Ol(i,e=1){return e-Math.abs(qs(i,e*2)-e)}function Bl(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function zl(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function Hl(i,e){return i+Math.floor(Math.random()*(e-i+1))}function Vl(i,e){return i+Math.random()*(e-i)}function Gl(i){return i*(.5-Math.random())}function kl(i){i!==void 0&&(ha=i);let e=ha+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Wl(i){return i*Zn}function Xl(i){return i*Mi}function ql(i){return(i&i-1)===0&&i!==0}function Yl(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function jl(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Kl(i,e,t,n,r){const s=Math.cos,a=Math.sin,o=s(t/2),c=a(t/2),l=s((e+n)/2),h=a((e+n)/2),f=s((e-n)/2),d=a((e-n)/2),m=s((n-e)/2),_=a((n-e)/2);switch(r){case"XYX":i.set(o*h,c*f,c*d,o*l);break;case"YZY":i.set(c*d,o*h,c*f,o*l);break;case"ZXZ":i.set(c*f,c*d,o*h,o*l);break;case"XZX":i.set(o*h,c*_,c*m,o*l);break;case"YXY":i.set(c*m,o*h,c*_,o*l);break;case"ZYZ":i.set(c*_,c*m,o*h,o*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function jn(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function _t(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const $l={DEG2RAD:Zn,RAD2DEG:Mi,generateUUID:ai,clamp:Be,euclideanModulo:qs,mapLinear:Il,inverseLerp:Nl,lerp:mi,damp:Fl,pingpong:Ol,smoothstep:Bl,smootherstep:zl,randInt:Hl,randFloat:Vl,randFloatSpread:Gl,seededRandom:kl,degToRad:Wl,radToDeg:Xl,isPowerOfTwo:ql,ceilPowerOfTwo:Yl,floorPowerOfTwo:jl,setQuaternionFromProperEuler:Kl,normalize:_t,denormalize:jn};class Xe{constructor(e=0,t=0){Xe.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Be(this.x,e.x,t.x),this.y=Be(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Be(this.x,e,t),this.y=Be(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Be(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Be(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),r=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*n-a*r+e.x,this.y=s*r+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Wt{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,s,a,o){let c=n[r+0],l=n[r+1],h=n[r+2],f=n[r+3];const d=s[a+0],m=s[a+1],_=s[a+2],x=s[a+3];if(o===0){e[t+0]=c,e[t+1]=l,e[t+2]=h,e[t+3]=f;return}if(o===1){e[t+0]=d,e[t+1]=m,e[t+2]=_,e[t+3]=x;return}if(f!==x||c!==d||l!==m||h!==_){let p=1-o;const u=c*d+l*m+h*_+f*x,b=u>=0?1:-1,T=1-u*u;if(T>Number.EPSILON){const R=Math.sqrt(T),w=Math.atan2(R,u*b);p=Math.sin(p*w)/R,o=Math.sin(o*w)/R}const E=o*b;if(c=c*p+d*E,l=l*p+m*E,h=h*p+_*E,f=f*p+x*E,p===1-o){const R=1/Math.sqrt(c*c+l*l+h*h+f*f);c*=R,l*=R,h*=R,f*=R}}e[t]=c,e[t+1]=l,e[t+2]=h,e[t+3]=f}static multiplyQuaternionsFlat(e,t,n,r,s,a){const o=n[r],c=n[r+1],l=n[r+2],h=n[r+3],f=s[a],d=s[a+1],m=s[a+2],_=s[a+3];return e[t]=o*_+h*f+c*m-l*d,e[t+1]=c*_+h*d+l*f-o*m,e[t+2]=l*_+h*m+o*d-c*f,e[t+3]=h*_-o*f-c*d-l*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,c=Math.sin,l=o(n/2),h=o(r/2),f=o(s/2),d=c(n/2),m=c(r/2),_=c(s/2);switch(a){case"XYZ":this._x=d*h*f+l*m*_,this._y=l*m*f-d*h*_,this._z=l*h*_+d*m*f,this._w=l*h*f-d*m*_;break;case"YXZ":this._x=d*h*f+l*m*_,this._y=l*m*f-d*h*_,this._z=l*h*_-d*m*f,this._w=l*h*f+d*m*_;break;case"ZXY":this._x=d*h*f-l*m*_,this._y=l*m*f+d*h*_,this._z=l*h*_+d*m*f,this._w=l*h*f-d*m*_;break;case"ZYX":this._x=d*h*f-l*m*_,this._y=l*m*f+d*h*_,this._z=l*h*_-d*m*f,this._w=l*h*f+d*m*_;break;case"YZX":this._x=d*h*f+l*m*_,this._y=l*m*f+d*h*_,this._z=l*h*_-d*m*f,this._w=l*h*f-d*m*_;break;case"XZY":this._x=d*h*f-l*m*_,this._y=l*m*f-d*h*_,this._z=l*h*_+d*m*f,this._w=l*h*f+d*m*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],r=t[4],s=t[8],a=t[1],o=t[5],c=t[9],l=t[2],h=t[6],f=t[10],d=n+o+f;if(d>0){const m=.5/Math.sqrt(d+1);this._w=.25/m,this._x=(h-c)*m,this._y=(s-l)*m,this._z=(a-r)*m}else if(n>o&&n>f){const m=2*Math.sqrt(1+n-o-f);this._w=(h-c)/m,this._x=.25*m,this._y=(r+a)/m,this._z=(s+l)/m}else if(o>f){const m=2*Math.sqrt(1+o-n-f);this._w=(s-l)/m,this._x=(r+a)/m,this._y=.25*m,this._z=(c+h)/m}else{const m=2*Math.sqrt(1+f-n-o);this._w=(a-r)/m,this._x=(s+l)/m,this._y=(c+h)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Be(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,r=e._y,s=e._z,a=e._w,o=t._x,c=t._y,l=t._z,h=t._w;return this._x=n*h+a*o+r*l-s*c,this._y=r*h+a*c+s*o-n*l,this._z=s*h+a*l+n*c-r*o,this._w=a*h-n*o-r*c-s*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,r=this._y,s=this._z,a=this._w;let o=a*e._w+n*e._x+r*e._y+s*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=r,this._z=s,this;const c=1-o*o;if(c<=Number.EPSILON){const m=1-t;return this._w=m*a+t*this._w,this._x=m*n+t*this._x,this._y=m*r+t*this._y,this._z=m*s+t*this._z,this.normalize(),this}const l=Math.sqrt(c),h=Math.atan2(l,o),f=Math.sin((1-t)*h)/l,d=Math.sin(t*h)/l;return this._w=a*f+this._w*d,this._x=n*f+this._x*d,this._y=r*f+this._y*d,this._z=s*f+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class I{constructor(e=0,t=0,n=0){I.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(fa.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(fa.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*r,this.y=s[1]*t+s[4]*n+s[7]*r,this.z=s[2]*t+s[5]*n+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=e.elements,a=1/(s[3]*t+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*r+s[12])*a,this.y=(s[1]*t+s[5]*n+s[9]*r+s[13])*a,this.z=(s[2]*t+s[6]*n+s[10]*r+s[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,r=this.z,s=e.x,a=e.y,o=e.z,c=e.w,l=2*(a*r-o*n),h=2*(o*t-s*r),f=2*(s*n-a*t);return this.x=t+c*l+a*f-o*h,this.y=n+c*h+o*l-s*f,this.z=r+c*f+s*h-a*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*r,this.y=s[1]*t+s[5]*n+s[9]*r,this.z=s[2]*t+s[6]*n+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Be(this.x,e.x,t.x),this.y=Be(this.y,e.y,t.y),this.z=Be(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Be(this.x,e,t),this.y=Be(this.y,e,t),this.z=Be(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Be(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,r=e.y,s=e.z,a=t.x,o=t.y,c=t.z;return this.x=r*c-s*o,this.y=s*a-n*c,this.z=n*o-r*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Er.copy(this).projectOnVector(e),this.sub(Er)}reflect(e){return this.sub(Er.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Be(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Er=new I,fa=new Wt;class Pe{constructor(e,t,n,r,s,a,o,c,l){Pe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,a,o,c,l)}set(e,t,n,r,s,a,o,c,l){const h=this.elements;return h[0]=e,h[1]=r,h[2]=o,h[3]=t,h[4]=s,h[5]=c,h[6]=n,h[7]=a,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,a=n[0],o=n[3],c=n[6],l=n[1],h=n[4],f=n[7],d=n[2],m=n[5],_=n[8],x=r[0],p=r[3],u=r[6],b=r[1],T=r[4],E=r[7],R=r[2],w=r[5],C=r[8];return s[0]=a*x+o*b+c*R,s[3]=a*p+o*T+c*w,s[6]=a*u+o*E+c*C,s[1]=l*x+h*b+f*R,s[4]=l*p+h*T+f*w,s[7]=l*u+h*E+f*C,s[2]=d*x+m*b+_*R,s[5]=d*p+m*T+_*w,s[8]=d*u+m*E+_*C,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8];return t*a*h-t*o*l-n*s*h+n*o*c+r*s*l-r*a*c}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8],f=h*a-o*l,d=o*c-h*s,m=l*s-a*c,_=t*f+n*d+r*m;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/_;return e[0]=f*x,e[1]=(r*l-h*n)*x,e[2]=(o*n-r*a)*x,e[3]=d*x,e[4]=(h*t-r*c)*x,e[5]=(r*s-o*t)*x,e[6]=m*x,e[7]=(n*c-l*t)*x,e[8]=(a*t-n*s)*x,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,s,a,o){const c=Math.cos(s),l=Math.sin(s);return this.set(n*c,n*l,-n*(c*a+l*o)+a+e,-r*l,r*c,-r*(-l*a+c*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(yr.makeScale(e,t)),this}rotate(e){return this.premultiply(yr.makeRotation(-e)),this}translate(e,t){return this.premultiply(yr.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<9;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const yr=new Pe;function Eo(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function hr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Zl(){const i=hr("canvas");return i.style.display="block",i}const da={};function Si(i){i in da||(da[i]=!0,console.warn(i))}function Jl(i,e,t){return new Promise(function(n,r){function s(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:r();break;case i.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:n()}}setTimeout(s,t)})}const pa=new Pe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),ma=new Pe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Ql(){const i={enabled:!0,workingColorSpace:ni,spaces:{},convert:function(r,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===Ye&&(r.r=rn(r.r),r.g=rn(r.g),r.b=rn(r.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===Ye&&(r.r=Jn(r.r),r.g=Jn(r.g),r.b=Jn(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===dn?lr:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,a){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return Si("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return Si("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[ni]:{primaries:e,whitePoint:n,transfer:lr,toXYZ:pa,fromXYZ:ma,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Lt},outputColorSpaceConfig:{drawingBufferColorSpace:Lt}},[Lt]:{primaries:e,whitePoint:n,transfer:Ye,toXYZ:pa,fromXYZ:ma,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Lt}}}),i}const Ve=Ql();function rn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Jn(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let Nn;class ec{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Nn===void 0&&(Nn=hr("canvas")),Nn.width=e.width,Nn.height=e.height;const r=Nn.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),n=Nn}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=hr("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const r=n.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=rn(s[a]/255)*255;return n.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(rn(t[n]/255)*255):t[n]=rn(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let tc=0;class Ys{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:tc++}),this.uuid=ai(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(Tr(r[a].image)):s.push(Tr(r[a]))}else s=Tr(r);n.url=s}return t||(e.images[this.uuid]=n),n}}function Tr(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?ec.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let nc=0;const br=new I;class xt extends si{constructor(e=xt.DEFAULT_IMAGE,t=xt.DEFAULT_MAPPING,n=Dn,r=Dn,s=wt,a=Ln,o=It,c=Nt,l=xt.DEFAULT_ANISOTROPY,h=dn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:nc++}),this.uuid=ai(),this.name="",this.source=new Ys(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new Xe(0,0),this.repeat=new Xe(1,1),this.center=new Xe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Pe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(br).x}get height(){return this.source.getSize(br).y}get depth(){return this.source.getSize(br).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Texture.setValues(): property '${t}' does not exist.`);continue}r&&n&&r.isVector2&&n.isVector2||r&&n&&r.isVector3&&n.isVector3||r&&n&&r.isMatrix3&&n.isMatrix3?r.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==fo)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case or:e.x=e.x-Math.floor(e.x);break;case Dn:e.x=e.x<0?0:1;break;case cs:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case or:e.y=e.y-Math.floor(e.y);break;case Dn:e.y=e.y<0?0:1;break;case cs:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}xt.DEFAULT_IMAGE=null;xt.DEFAULT_MAPPING=fo;xt.DEFAULT_ANISOTROPY=1;class Je{constructor(e=0,t=0,n=0,r=1){Je.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*r+a[12]*s,this.y=a[1]*t+a[5]*n+a[9]*r+a[13]*s,this.z=a[2]*t+a[6]*n+a[10]*r+a[14]*s,this.w=a[3]*t+a[7]*n+a[11]*r+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,s;const c=e.elements,l=c[0],h=c[4],f=c[8],d=c[1],m=c[5],_=c[9],x=c[2],p=c[6],u=c[10];if(Math.abs(h-d)<.01&&Math.abs(f-x)<.01&&Math.abs(_-p)<.01){if(Math.abs(h+d)<.1&&Math.abs(f+x)<.1&&Math.abs(_+p)<.1&&Math.abs(l+m+u-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const T=(l+1)/2,E=(m+1)/2,R=(u+1)/2,w=(h+d)/4,C=(f+x)/4,N=(_+p)/4;return T>E&&T>R?T<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(T),r=w/n,s=C/n):E>R?E<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(E),n=w/r,s=N/r):R<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(R),n=C/s,r=N/s),this.set(n,r,s,t),this}let b=Math.sqrt((p-_)*(p-_)+(f-x)*(f-x)+(d-h)*(d-h));return Math.abs(b)<.001&&(b=1),this.x=(p-_)/b,this.y=(f-x)/b,this.z=(d-h)/b,this.w=Math.acos((l+m+u-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Be(this.x,e.x,t.x),this.y=Be(this.y,e.y,t.y),this.z=Be(this.z,e.z,t.z),this.w=Be(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Be(this.x,e,t),this.y=Be(this.y,e,t),this.z=Be(this.z,e,t),this.w=Be(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Be(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class ic extends si{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:wt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new Je(0,0,e,t),this.scissorTest=!1,this.viewport=new Je(0,0,e,t);const r={width:e,height:t,depth:n.depth},s=new xt(r);this.textures=[];const a=n.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(e={}){const t={minFilter:wt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n,this.textures[r].isArrayTexture=this.textures[r].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const r=Object.assign({},e.textures[t].image);this.textures[t].source=new Ys(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class sn extends ic{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class yo extends xt{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=Rt,this.minFilter=Rt,this.wrapR=Dn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class js extends xt{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=Rt,this.minFilter=Rt,this.wrapR=Dn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class vn{constructor(e=new I(1/0,1/0,1/0),t=new I(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Ft.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Ft.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Ft.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Ft):Ft.fromBufferAttribute(s,a),Ft.applyMatrix4(e.matrixWorld),this.expandByPoint(Ft);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ri.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Ri.copy(n.boundingBox)),Ri.applyMatrix4(e.matrixWorld),this.union(Ri)}const r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Ft),Ft.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ci),Ci.subVectors(this.max,ci),Fn.subVectors(e.a,ci),On.subVectors(e.b,ci),Bn.subVectors(e.c,ci),on.subVectors(On,Fn),ln.subVectors(Bn,On),Sn.subVectors(Fn,Bn);let t=[0,-on.z,on.y,0,-ln.z,ln.y,0,-Sn.z,Sn.y,on.z,0,-on.x,ln.z,0,-ln.x,Sn.z,0,-Sn.x,-on.y,on.x,0,-ln.y,ln.x,0,-Sn.y,Sn.x,0];return!Ar(t,Fn,On,Bn,Ci)||(t=[1,0,0,0,1,0,0,0,1],!Ar(t,Fn,On,Bn,Ci))?!1:(Pi.crossVectors(on,ln),t=[Pi.x,Pi.y,Pi.z],Ar(t,Fn,On,Bn,Ci))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Ft).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Ft).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Kt[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Kt[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Kt[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Kt[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Kt[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Kt[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Kt[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Kt[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Kt),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Kt=[new I,new I,new I,new I,new I,new I,new I,new I],Ft=new I,Ri=new vn,Fn=new I,On=new I,Bn=new I,on=new I,ln=new I,Sn=new I,ci=new I,Ci=new I,Pi=new I,En=new I;function Ar(i,e,t,n,r){for(let s=0,a=i.length-3;s<=a;s+=3){En.fromArray(i,s);const o=r.x*Math.abs(En.x)+r.y*Math.abs(En.y)+r.z*Math.abs(En.z),c=e.dot(En),l=t.dot(En),h=n.dot(En);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>o)return!1}return!0}const rc=new vn,ui=new I,wr=new I;class gr{constructor(e=new I,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):rc.setFromPoints(e).getCenter(n);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ui.subVectors(e,this.center);const t=ui.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),r=(n-this.radius)*.5;this.center.addScaledVector(ui,r/n),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(wr.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ui.copy(e.center).add(wr)),this.expandByPoint(ui.copy(e.center).sub(wr))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const $t=new I,Rr=new I,Di=new I,cn=new I,Cr=new I,Li=new I,Pr=new I;class To{constructor(e=new I,t=new I(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,$t)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=$t.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):($t.copy(this.origin).addScaledVector(this.direction,t),$t.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){Rr.copy(e).add(t).multiplyScalar(.5),Di.copy(t).sub(e).normalize(),cn.copy(this.origin).sub(Rr);const s=e.distanceTo(t)*.5,a=-this.direction.dot(Di),o=cn.dot(this.direction),c=-cn.dot(Di),l=cn.lengthSq(),h=Math.abs(1-a*a);let f,d,m,_;if(h>0)if(f=a*c-o,d=a*o-c,_=s*h,f>=0)if(d>=-_)if(d<=_){const x=1/h;f*=x,d*=x,m=f*(f+a*d+2*o)+d*(a*f+d+2*c)+l}else d=s,f=Math.max(0,-(a*d+o)),m=-f*f+d*(d+2*c)+l;else d=-s,f=Math.max(0,-(a*d+o)),m=-f*f+d*(d+2*c)+l;else d<=-_?(f=Math.max(0,-(-a*s+o)),d=f>0?-s:Math.min(Math.max(-s,-c),s),m=-f*f+d*(d+2*c)+l):d<=_?(f=0,d=Math.min(Math.max(-s,-c),s),m=d*(d+2*c)+l):(f=Math.max(0,-(a*s+o)),d=f>0?s:Math.min(Math.max(-s,-c),s),m=-f*f+d*(d+2*c)+l);else d=a>0?-s:s,f=Math.max(0,-(a*d+o)),m=-f*f+d*(d+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(Rr).addScaledVector(Di,d),m}intersectSphere(e,t){$t.subVectors(e.center,this.origin);const n=$t.dot(this.direction),r=$t.dot($t)-n*n,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,s,a,o,c;const l=1/this.direction.x,h=1/this.direction.y,f=1/this.direction.z,d=this.origin;return l>=0?(n=(e.min.x-d.x)*l,r=(e.max.x-d.x)*l):(n=(e.max.x-d.x)*l,r=(e.min.x-d.x)*l),h>=0?(s=(e.min.y-d.y)*h,a=(e.max.y-d.y)*h):(s=(e.max.y-d.y)*h,a=(e.min.y-d.y)*h),n>a||s>r||((s>n||isNaN(n))&&(n=s),(a<r||isNaN(r))&&(r=a),f>=0?(o=(e.min.z-d.z)*f,c=(e.max.z-d.z)*f):(o=(e.max.z-d.z)*f,c=(e.min.z-d.z)*f),n>c||o>r)||((o>n||n!==n)&&(n=o),(c<r||r!==r)&&(r=c),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,$t)!==null}intersectTriangle(e,t,n,r,s){Cr.subVectors(t,e),Li.subVectors(n,e),Pr.crossVectors(Cr,Li);let a=this.direction.dot(Pr),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;cn.subVectors(this.origin,e);const c=o*this.direction.dot(Li.crossVectors(cn,Li));if(c<0)return null;const l=o*this.direction.dot(Cr.cross(cn));if(l<0||c+l>a)return null;const h=-o*cn.dot(Pr);return h<0?null:this.at(h/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class nt{constructor(e,t,n,r,s,a,o,c,l,h,f,d,m,_,x,p){nt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,a,o,c,l,h,f,d,m,_,x,p)}set(e,t,n,r,s,a,o,c,l,h,f,d,m,_,x,p){const u=this.elements;return u[0]=e,u[4]=t,u[8]=n,u[12]=r,u[1]=s,u[5]=a,u[9]=o,u[13]=c,u[2]=l,u[6]=h,u[10]=f,u[14]=d,u[3]=m,u[7]=_,u[11]=x,u[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new nt().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,r=1/zn.setFromMatrixColumn(e,0).length(),s=1/zn.setFromMatrixColumn(e,1).length(),a=1/zn.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,r=e.y,s=e.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(r),l=Math.sin(r),h=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const d=a*h,m=a*f,_=o*h,x=o*f;t[0]=c*h,t[4]=-c*f,t[8]=l,t[1]=m+_*l,t[5]=d-x*l,t[9]=-o*c,t[2]=x-d*l,t[6]=_+m*l,t[10]=a*c}else if(e.order==="YXZ"){const d=c*h,m=c*f,_=l*h,x=l*f;t[0]=d+x*o,t[4]=_*o-m,t[8]=a*l,t[1]=a*f,t[5]=a*h,t[9]=-o,t[2]=m*o-_,t[6]=x+d*o,t[10]=a*c}else if(e.order==="ZXY"){const d=c*h,m=c*f,_=l*h,x=l*f;t[0]=d-x*o,t[4]=-a*f,t[8]=_+m*o,t[1]=m+_*o,t[5]=a*h,t[9]=x-d*o,t[2]=-a*l,t[6]=o,t[10]=a*c}else if(e.order==="ZYX"){const d=a*h,m=a*f,_=o*h,x=o*f;t[0]=c*h,t[4]=_*l-m,t[8]=d*l+x,t[1]=c*f,t[5]=x*l+d,t[9]=m*l-_,t[2]=-l,t[6]=o*c,t[10]=a*c}else if(e.order==="YZX"){const d=a*c,m=a*l,_=o*c,x=o*l;t[0]=c*h,t[4]=x-d*f,t[8]=_*f+m,t[1]=f,t[5]=a*h,t[9]=-o*h,t[2]=-l*h,t[6]=m*f+_,t[10]=d-x*f}else if(e.order==="XZY"){const d=a*c,m=a*l,_=o*c,x=o*l;t[0]=c*h,t[4]=-f,t[8]=l*h,t[1]=d*f+x,t[5]=a*h,t[9]=m*f-_,t[2]=_*f-m,t[6]=o*h,t[10]=x*f+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(sc,e,ac)}lookAt(e,t,n){const r=this.elements;return bt.subVectors(e,t),bt.lengthSq()===0&&(bt.z=1),bt.normalize(),un.crossVectors(n,bt),un.lengthSq()===0&&(Math.abs(n.z)===1?bt.x+=1e-4:bt.z+=1e-4,bt.normalize(),un.crossVectors(n,bt)),un.normalize(),Ui.crossVectors(bt,un),r[0]=un.x,r[4]=Ui.x,r[8]=bt.x,r[1]=un.y,r[5]=Ui.y,r[9]=bt.y,r[2]=un.z,r[6]=Ui.z,r[10]=bt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,a=n[0],o=n[4],c=n[8],l=n[12],h=n[1],f=n[5],d=n[9],m=n[13],_=n[2],x=n[6],p=n[10],u=n[14],b=n[3],T=n[7],E=n[11],R=n[15],w=r[0],C=r[4],N=r[8],S=r[12],M=r[1],D=r[5],O=r[9],H=r[13],k=r[2],q=r[6],W=r[10],te=r[14],V=r[3],se=r[7],ce=r[11],Ee=r[15];return s[0]=a*w+o*M+c*k+l*V,s[4]=a*C+o*D+c*q+l*se,s[8]=a*N+o*O+c*W+l*ce,s[12]=a*S+o*H+c*te+l*Ee,s[1]=h*w+f*M+d*k+m*V,s[5]=h*C+f*D+d*q+m*se,s[9]=h*N+f*O+d*W+m*ce,s[13]=h*S+f*H+d*te+m*Ee,s[2]=_*w+x*M+p*k+u*V,s[6]=_*C+x*D+p*q+u*se,s[10]=_*N+x*O+p*W+u*ce,s[14]=_*S+x*H+p*te+u*Ee,s[3]=b*w+T*M+E*k+R*V,s[7]=b*C+T*D+E*q+R*se,s[11]=b*N+T*O+E*W+R*ce,s[15]=b*S+T*H+E*te+R*Ee,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],r=e[8],s=e[12],a=e[1],o=e[5],c=e[9],l=e[13],h=e[2],f=e[6],d=e[10],m=e[14],_=e[3],x=e[7],p=e[11],u=e[15];return _*(+s*c*f-r*l*f-s*o*d+n*l*d+r*o*m-n*c*m)+x*(+t*c*m-t*l*d+s*a*d-r*a*m+r*l*h-s*c*h)+p*(+t*l*f-t*o*m-s*a*f+n*a*m+s*o*h-n*l*h)+u*(-r*o*h-t*c*f+t*o*d+r*a*f-n*a*d+n*c*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8],f=e[9],d=e[10],m=e[11],_=e[12],x=e[13],p=e[14],u=e[15],b=f*p*l-x*d*l+x*c*m-o*p*m-f*c*u+o*d*u,T=_*d*l-h*p*l-_*c*m+a*p*m+h*c*u-a*d*u,E=h*x*l-_*f*l+_*o*m-a*x*m-h*o*u+a*f*u,R=_*f*c-h*x*c-_*o*d+a*x*d+h*o*p-a*f*p,w=t*b+n*T+r*E+s*R;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const C=1/w;return e[0]=b*C,e[1]=(x*d*s-f*p*s-x*r*m+n*p*m+f*r*u-n*d*u)*C,e[2]=(o*p*s-x*c*s+x*r*l-n*p*l-o*r*u+n*c*u)*C,e[3]=(f*c*s-o*d*s-f*r*l+n*d*l+o*r*m-n*c*m)*C,e[4]=T*C,e[5]=(h*p*s-_*d*s+_*r*m-t*p*m-h*r*u+t*d*u)*C,e[6]=(_*c*s-a*p*s-_*r*l+t*p*l+a*r*u-t*c*u)*C,e[7]=(a*d*s-h*c*s+h*r*l-t*d*l-a*r*m+t*c*m)*C,e[8]=E*C,e[9]=(_*f*s-h*x*s-_*n*m+t*x*m+h*n*u-t*f*u)*C,e[10]=(a*x*s-_*o*s+_*n*l-t*x*l-a*n*u+t*o*u)*C,e[11]=(h*o*s-a*f*s-h*n*l+t*f*l+a*n*m-t*o*m)*C,e[12]=R*C,e[13]=(h*x*r-_*f*r+_*n*d-t*x*d-h*n*p+t*f*p)*C,e[14]=(_*o*r-a*x*r-_*n*c+t*x*c+a*n*p-t*o*p)*C,e[15]=(a*f*r-h*o*r+h*n*c-t*f*c-a*n*d+t*o*d)*C,this}scale(e){const t=this.elements,n=e.x,r=e.y,s=e.z;return t[0]*=n,t[4]*=r,t[8]*=s,t[1]*=n,t[5]*=r,t[9]*=s,t[2]*=n,t[6]*=r,t[10]*=s,t[3]*=n,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),r=Math.sin(t),s=1-n,a=e.x,o=e.y,c=e.z,l=s*a,h=s*o;return this.set(l*a+n,l*o-r*c,l*c+r*o,0,l*o+r*c,h*o+n,h*c-r*a,0,l*c-r*o,h*c+r*a,s*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,s,a){return this.set(1,n,s,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){const r=this.elements,s=t._x,a=t._y,o=t._z,c=t._w,l=s+s,h=a+a,f=o+o,d=s*l,m=s*h,_=s*f,x=a*h,p=a*f,u=o*f,b=c*l,T=c*h,E=c*f,R=n.x,w=n.y,C=n.z;return r[0]=(1-(x+u))*R,r[1]=(m+E)*R,r[2]=(_-T)*R,r[3]=0,r[4]=(m-E)*w,r[5]=(1-(d+u))*w,r[6]=(p+b)*w,r[7]=0,r[8]=(_+T)*C,r[9]=(p-b)*C,r[10]=(1-(d+x))*C,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){const r=this.elements;let s=zn.set(r[0],r[1],r[2]).length();const a=zn.set(r[4],r[5],r[6]).length(),o=zn.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Ot.copy(this);const l=1/s,h=1/a,f=1/o;return Ot.elements[0]*=l,Ot.elements[1]*=l,Ot.elements[2]*=l,Ot.elements[4]*=h,Ot.elements[5]*=h,Ot.elements[6]*=h,Ot.elements[8]*=f,Ot.elements[9]*=f,Ot.elements[10]*=f,t.setFromRotationMatrix(Ot),n.x=s,n.y=a,n.z=o,this}makePerspective(e,t,n,r,s,a,o=Xt,c=!1){const l=this.elements,h=2*s/(t-e),f=2*s/(n-r),d=(t+e)/(t-e),m=(n+r)/(n-r);let _,x;if(c)_=s/(a-s),x=a*s/(a-s);else if(o===Xt)_=-(a+s)/(a-s),x=-2*a*s/(a-s);else if(o===ur)_=-a/(a-s),x=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=h,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=f,l[9]=m,l[13]=0,l[2]=0,l[6]=0,l[10]=_,l[14]=x,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,r,s,a,o=Xt,c=!1){const l=this.elements,h=2/(t-e),f=2/(n-r),d=-(t+e)/(t-e),m=-(n+r)/(n-r);let _,x;if(c)_=1/(a-s),x=a/(a-s);else if(o===Xt)_=-2/(a-s),x=-(a+s)/(a-s);else if(o===ur)_=-1/(a-s),x=-s/(a-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=h,l[4]=0,l[8]=0,l[12]=d,l[1]=0,l[5]=f,l[9]=0,l[13]=m,l[2]=0,l[6]=0,l[10]=_,l[14]=x,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<16;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const zn=new I,Ot=new nt,sc=new I(0,0,0),ac=new I(1,1,1),un=new I,Ui=new I,bt=new I,ga=new nt,_a=new Wt;class an{constructor(e=0,t=0,n=0,r=an.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const r=e.elements,s=r[0],a=r[4],o=r[8],c=r[1],l=r[5],h=r[9],f=r[2],d=r[6],m=r[10];switch(t){case"XYZ":this._y=Math.asin(Be(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,m),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Be(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(Be(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-f,m),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-Be(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(d,m),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(Be(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-Be(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-h,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return ga.makeRotationFromQuaternion(e),this.setFromRotationMatrix(ga,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return _a.setFromEuler(this),this.setFromQuaternion(_a,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}an.DEFAULT_ORDER="XYZ";class bo{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let oc=0;const va=new I,Hn=new Wt,Zt=new nt,Ii=new I,hi=new I,lc=new I,cc=new Wt,xa=new I(1,0,0),Ma=new I(0,1,0),Sa=new I(0,0,1),Ea={type:"added"},uc={type:"removed"},Vn={type:"childadded",child:null},Dr={type:"childremoved",child:null};class Et extends si{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:oc++}),this.uuid=ai(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Et.DEFAULT_UP.clone();const e=new I,t=new an,n=new Wt,r=new I(1,1,1);function s(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new nt},normalMatrix:{value:new Pe}}),this.matrix=new nt,this.matrixWorld=new nt,this.matrixAutoUpdate=Et.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Et.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new bo,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Hn.setFromAxisAngle(e,t),this.quaternion.multiply(Hn),this}rotateOnWorldAxis(e,t){return Hn.setFromAxisAngle(e,t),this.quaternion.premultiply(Hn),this}rotateX(e){return this.rotateOnAxis(xa,e)}rotateY(e){return this.rotateOnAxis(Ma,e)}rotateZ(e){return this.rotateOnAxis(Sa,e)}translateOnAxis(e,t){return va.copy(e).applyQuaternion(this.quaternion),this.position.add(va.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(xa,e)}translateY(e){return this.translateOnAxis(Ma,e)}translateZ(e){return this.translateOnAxis(Sa,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Zt.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Ii.copy(e):Ii.set(e,t,n);const r=this.parent;this.updateWorldMatrix(!0,!1),hi.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Zt.lookAt(hi,Ii,this.up):Zt.lookAt(Ii,hi,this.up),this.quaternion.setFromRotationMatrix(Zt),r&&(Zt.extractRotation(r.matrixWorld),Hn.setFromRotationMatrix(Zt),this.quaternion.premultiply(Hn.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Ea),Vn.child=e,this.dispatchEvent(Vn),Vn.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(uc),Dr.child=e,this.dispatchEvent(Dr),Dr.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Zt.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Zt.multiply(e.parent.matrixWorld)),e.applyMatrix4(Zt),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Ea),Vn.child=e,this.dispatchEvent(Vn),Vn.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(hi,e,lc),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(hi,cc,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(o=>({...o})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const c=o.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){const f=c[l];s(e.shapes,f)}else s(e.shapes,c)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(s(e.materials,this.material[c]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const c=this.animations[o];r.animations.push(s(e.animations,c))}}if(t){const o=a(e.geometries),c=a(e.materials),l=a(e.textures),h=a(e.images),f=a(e.shapes),d=a(e.skeletons),m=a(e.animations),_=a(e.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),f.length>0&&(n.shapes=f),d.length>0&&(n.skeletons=d),m.length>0&&(n.animations=m),_.length>0&&(n.nodes=_)}return n.object=r,n;function a(o){const c=[];for(const l in o){const h=o[l];delete h.metadata,c.push(h)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const r=e.children[n];this.add(r.clone())}return this}}Et.DEFAULT_UP=new I(0,1,0);Et.DEFAULT_MATRIX_AUTO_UPDATE=!0;Et.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Bt=new I,Jt=new I,Lr=new I,Qt=new I,Gn=new I,kn=new I,ya=new I,Ur=new I,Ir=new I,Nr=new I,Fr=new Je,Or=new Je,Br=new Je;class Ut{constructor(e=new I,t=new I,n=new I){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),Bt.subVectors(e,t),r.cross(Bt);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,n,r,s){Bt.subVectors(r,t),Jt.subVectors(n,t),Lr.subVectors(e,t);const a=Bt.dot(Bt),o=Bt.dot(Jt),c=Bt.dot(Lr),l=Jt.dot(Jt),h=Jt.dot(Lr),f=a*l-o*o;if(f===0)return s.set(0,0,0),null;const d=1/f,m=(l*c-o*h)*d,_=(a*h-o*c)*d;return s.set(1-m-_,_,m)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,Qt)===null?!1:Qt.x>=0&&Qt.y>=0&&Qt.x+Qt.y<=1}static getInterpolation(e,t,n,r,s,a,o,c){return this.getBarycoord(e,t,n,r,Qt)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,Qt.x),c.addScaledVector(a,Qt.y),c.addScaledVector(o,Qt.z),c)}static getInterpolatedAttribute(e,t,n,r,s,a){return Fr.setScalar(0),Or.setScalar(0),Br.setScalar(0),Fr.fromBufferAttribute(e,t),Or.fromBufferAttribute(e,n),Br.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(Fr,s.x),a.addScaledVector(Or,s.y),a.addScaledVector(Br,s.z),a}static isFrontFacing(e,t,n,r){return Bt.subVectors(n,t),Jt.subVectors(e,t),Bt.cross(Jt).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Bt.subVectors(this.c,this.b),Jt.subVectors(this.a,this.b),Bt.cross(Jt).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Ut.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Ut.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,r,s){return Ut.getInterpolation(e,this.a,this.b,this.c,t,n,r,s)}containsPoint(e){return Ut.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Ut.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,r=this.b,s=this.c;let a,o;Gn.subVectors(r,n),kn.subVectors(s,n),Ur.subVectors(e,n);const c=Gn.dot(Ur),l=kn.dot(Ur);if(c<=0&&l<=0)return t.copy(n);Ir.subVectors(e,r);const h=Gn.dot(Ir),f=kn.dot(Ir);if(h>=0&&f<=h)return t.copy(r);const d=c*f-h*l;if(d<=0&&c>=0&&h<=0)return a=c/(c-h),t.copy(n).addScaledVector(Gn,a);Nr.subVectors(e,s);const m=Gn.dot(Nr),_=kn.dot(Nr);if(_>=0&&m<=_)return t.copy(s);const x=m*l-c*_;if(x<=0&&l>=0&&_<=0)return o=l/(l-_),t.copy(n).addScaledVector(kn,o);const p=h*_-m*f;if(p<=0&&f-h>=0&&m-_>=0)return ya.subVectors(s,r),o=(f-h)/(f-h+(m-_)),t.copy(r).addScaledVector(ya,o);const u=1/(p+x+d);return a=x*u,o=d*u,t.copy(n).addScaledVector(Gn,a).addScaledVector(kn,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Ao={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},hn={h:0,s:0,l:0},Ni={h:0,s:0,l:0};function zr(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class Ge{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Lt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ve.colorSpaceToWorking(this,t),this}setRGB(e,t,n,r=Ve.workingColorSpace){return this.r=e,this.g=t,this.b=n,Ve.colorSpaceToWorking(this,r),this}setHSL(e,t,n,r=Ve.workingColorSpace){if(e=qs(e,1),t=Be(t,0,1),n=Be(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,a=2*n-s;this.r=zr(a,s,e+1/3),this.g=zr(a,s,e),this.b=zr(a,s,e-1/3)}return Ve.colorSpaceToWorking(this,r),this}setStyle(e,t=Lt){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Lt){const n=Ao[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=rn(e.r),this.g=rn(e.g),this.b=rn(e.b),this}copyLinearToSRGB(e){return this.r=Jn(e.r),this.g=Jn(e.g),this.b=Jn(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Lt){return Ve.workingToColorSpace(pt.copy(this),e),Math.round(Be(pt.r*255,0,255))*65536+Math.round(Be(pt.g*255,0,255))*256+Math.round(Be(pt.b*255,0,255))}getHexString(e=Lt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ve.workingColorSpace){Ve.workingToColorSpace(pt.copy(this),t);const n=pt.r,r=pt.g,s=pt.b,a=Math.max(n,r,s),o=Math.min(n,r,s);let c,l;const h=(o+a)/2;if(o===a)c=0,l=0;else{const f=a-o;switch(l=h<=.5?f/(a+o):f/(2-a-o),a){case n:c=(r-s)/f+(r<s?6:0);break;case r:c=(s-n)/f+2;break;case s:c=(n-r)/f+4;break}c/=6}return e.h=c,e.s=l,e.l=h,e}getRGB(e,t=Ve.workingColorSpace){return Ve.workingToColorSpace(pt.copy(this),t),e.r=pt.r,e.g=pt.g,e.b=pt.b,e}getStyle(e=Lt){Ve.workingToColorSpace(pt.copy(this),e);const t=pt.r,n=pt.g,r=pt.b;return e!==Lt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(e,t,n){return this.getHSL(hn),this.setHSL(hn.h+e,hn.s+t,hn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(hn),e.getHSL(Ni);const n=mi(hn.h,Ni.h,t),r=mi(hn.s,Ni.s,t),s=mi(hn.l,Ni.l,t);return this.setHSL(n,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*r,this.g=s[1]*t+s[4]*n+s[7]*r,this.b=s[2]*t+s[5]*n+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const pt=new Ge;Ge.NAMES=Ao;let hc=0;class Ei extends si{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:hc++}),this.uuid=ai(),this.name="",this.type="Material",this.blending=$n,this.side=gn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Jr,this.blendDst=Qr,this.blendEquation=Cn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ge(0,0,0),this.blendAlpha=0,this.depthFunc=Qn,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=ca,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=In,this.stencilZFail=In,this.stencilZPass=In,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==$n&&(n.blending=this.blending),this.side!==gn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Jr&&(n.blendSrc=this.blendSrc),this.blendDst!==Qr&&(n.blendDst=this.blendDst),this.blendEquation!==Cn&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Qn&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==ca&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==In&&(n.stencilFail=this.stencilFail),this.stencilZFail!==In&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==In&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(s){const a=[];for(const o in s){const c=s[o];delete c.metadata,a.push(c)}return a}if(t){const s=r(e.textures),a=r(e.images);s.length>0&&(n.textures=s),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const r=t.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class wo extends Ei{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ge(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new an,this.combine=ho,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const ot=new I,Fi=new Xe;let fc=0;class qt{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:fc++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=ua,this.updateRanges=[],this.gpuType=nn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Fi.fromBufferAttribute(this,t),Fi.applyMatrix3(e),this.setXY(t,Fi.x,Fi.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)ot.fromBufferAttribute(this,t),ot.applyMatrix3(e),this.setXYZ(t,ot.x,ot.y,ot.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)ot.fromBufferAttribute(this,t),ot.applyMatrix4(e),this.setXYZ(t,ot.x,ot.y,ot.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)ot.fromBufferAttribute(this,t),ot.applyNormalMatrix(e),this.setXYZ(t,ot.x,ot.y,ot.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)ot.fromBufferAttribute(this,t),ot.transformDirection(e),this.setXYZ(t,ot.x,ot.y,ot.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=jn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=_t(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=jn(t,this.array)),t}setX(e,t){return this.normalized&&(t=_t(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=jn(t,this.array)),t}setY(e,t){return this.normalized&&(t=_t(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=jn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=_t(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=jn(t,this.array)),t}setW(e,t){return this.normalized&&(t=_t(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=_t(t,this.array),n=_t(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=_t(t,this.array),n=_t(n,this.array),r=_t(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e*=this.itemSize,this.normalized&&(t=_t(t,this.array),n=_t(n,this.array),r=_t(r,this.array),s=_t(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==ua&&(e.usage=this.usage),e}}class Ro extends qt{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Co extends qt{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class mt extends qt{constructor(e,t,n){super(new Float32Array(e),t,n)}}let dc=0;const Dt=new nt,Hr=new Et,Wn=new I,At=new vn,fi=new vn,ht=new I;class Vt extends si{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:dc++}),this.uuid=ai(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Eo(e)?Co:Ro)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new Pe().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Dt.makeRotationFromQuaternion(e),this.applyMatrix4(Dt),this}rotateX(e){return Dt.makeRotationX(e),this.applyMatrix4(Dt),this}rotateY(e){return Dt.makeRotationY(e),this.applyMatrix4(Dt),this}rotateZ(e){return Dt.makeRotationZ(e),this.applyMatrix4(Dt),this}translate(e,t,n){return Dt.makeTranslation(e,t,n),this.applyMatrix4(Dt),this}scale(e,t,n){return Dt.makeScale(e,t,n),this.applyMatrix4(Dt),this}lookAt(e){return Hr.lookAt(e),Hr.updateMatrix(),this.applyMatrix4(Hr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Wn).negate(),this.translate(Wn.x,Wn.y,Wn.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let r=0,s=e.length;r<s;r++){const a=e[r];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new mt(n,3))}else{const n=Math.min(e.length,t.count);for(let r=0;r<n;r++){const s=e[r];t.setXYZ(r,s.x,s.y,s.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new vn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new I(-1/0,-1/0,-1/0),new I(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,r=t.length;n<r;n++){const s=t[n];At.setFromBufferAttribute(s),this.morphTargetsRelative?(ht.addVectors(this.boundingBox.min,At.min),this.boundingBox.expandByPoint(ht),ht.addVectors(this.boundingBox.max,At.max),this.boundingBox.expandByPoint(ht)):(this.boundingBox.expandByPoint(At.min),this.boundingBox.expandByPoint(At.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new gr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new I,1/0);return}if(e){const n=this.boundingSphere.center;if(At.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const o=t[s];fi.setFromBufferAttribute(o),this.morphTargetsRelative?(ht.addVectors(At.min,fi.min),At.expandByPoint(ht),ht.addVectors(At.max,fi.max),At.expandByPoint(ht)):(At.expandByPoint(fi.min),At.expandByPoint(fi.max))}At.getCenter(n);let r=0;for(let s=0,a=e.count;s<a;s++)ht.fromBufferAttribute(e,s),r=Math.max(r,n.distanceToSquared(ht));if(t)for(let s=0,a=t.length;s<a;s++){const o=t[s],c=this.morphTargetsRelative;for(let l=0,h=o.count;l<h;l++)ht.fromBufferAttribute(o,l),c&&(Wn.fromBufferAttribute(e,l),ht.add(Wn)),r=Math.max(r,n.distanceToSquared(ht))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new qt(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],c=[];for(let N=0;N<n.count;N++)o[N]=new I,c[N]=new I;const l=new I,h=new I,f=new I,d=new Xe,m=new Xe,_=new Xe,x=new I,p=new I;function u(N,S,M){l.fromBufferAttribute(n,N),h.fromBufferAttribute(n,S),f.fromBufferAttribute(n,M),d.fromBufferAttribute(s,N),m.fromBufferAttribute(s,S),_.fromBufferAttribute(s,M),h.sub(l),f.sub(l),m.sub(d),_.sub(d);const D=1/(m.x*_.y-_.x*m.y);isFinite(D)&&(x.copy(h).multiplyScalar(_.y).addScaledVector(f,-m.y).multiplyScalar(D),p.copy(f).multiplyScalar(m.x).addScaledVector(h,-_.x).multiplyScalar(D),o[N].add(x),o[S].add(x),o[M].add(x),c[N].add(p),c[S].add(p),c[M].add(p))}let b=this.groups;b.length===0&&(b=[{start:0,count:e.count}]);for(let N=0,S=b.length;N<S;++N){const M=b[N],D=M.start,O=M.count;for(let H=D,k=D+O;H<k;H+=3)u(e.getX(H+0),e.getX(H+1),e.getX(H+2))}const T=new I,E=new I,R=new I,w=new I;function C(N){R.fromBufferAttribute(r,N),w.copy(R);const S=o[N];T.copy(S),T.sub(R.multiplyScalar(R.dot(S))).normalize(),E.crossVectors(w,S);const D=E.dot(c[N])<0?-1:1;a.setXYZW(N,T.x,T.y,T.z,D)}for(let N=0,S=b.length;N<S;++N){const M=b[N],D=M.start,O=M.count;for(let H=D,k=D+O;H<k;H+=3)C(e.getX(H+0)),C(e.getX(H+1)),C(e.getX(H+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new qt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,m=n.count;d<m;d++)n.setXYZ(d,0,0,0);const r=new I,s=new I,a=new I,o=new I,c=new I,l=new I,h=new I,f=new I;if(e)for(let d=0,m=e.count;d<m;d+=3){const _=e.getX(d+0),x=e.getX(d+1),p=e.getX(d+2);r.fromBufferAttribute(t,_),s.fromBufferAttribute(t,x),a.fromBufferAttribute(t,p),h.subVectors(a,s),f.subVectors(r,s),h.cross(f),o.fromBufferAttribute(n,_),c.fromBufferAttribute(n,x),l.fromBufferAttribute(n,p),o.add(h),c.add(h),l.add(h),n.setXYZ(_,o.x,o.y,o.z),n.setXYZ(x,c.x,c.y,c.z),n.setXYZ(p,l.x,l.y,l.z)}else for(let d=0,m=t.count;d<m;d+=3)r.fromBufferAttribute(t,d+0),s.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),h.subVectors(a,s),f.subVectors(r,s),h.cross(f),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)ht.fromBufferAttribute(e,t),ht.normalize(),e.setXYZ(t,ht.x,ht.y,ht.z)}toNonIndexed(){function e(o,c){const l=o.array,h=o.itemSize,f=o.normalized,d=new l.constructor(c.length*h);let m=0,_=0;for(let x=0,p=c.length;x<p;x++){o.isInterleavedBufferAttribute?m=c[x]*o.data.stride+o.offset:m=c[x]*h;for(let u=0;u<h;u++)d[_++]=l[m++]}return new qt(d,h,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Vt,n=this.index.array,r=this.attributes;for(const o in r){const c=r[o],l=e(c,n);t.setAttribute(o,l)}const s=this.morphAttributes;for(const o in s){const c=[],l=s[o];for(let h=0,f=l.length;h<f;h++){const d=l[h],m=e(d,n);c.push(m)}t.morphAttributes[o]=c}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,c=a.length;o<c;o++){const l=a[o];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const c in n){const l=n[c];e.data.attributes[c]=l.toJSON(e.data)}const r={};let s=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],h=[];for(let f=0,d=l.length;f<d;f++){const m=l[f];h.push(m.toJSON(e.data))}h.length>0&&(r[c]=h,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const r=e.attributes;for(const l in r){const h=r[l];this.setAttribute(l,h.clone(t))}const s=e.morphAttributes;for(const l in s){const h=[],f=s[l];for(let d=0,m=f.length;d<m;d++)h.push(f[d].clone(t));this.morphAttributes[l]=h}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let l=0,h=a.length;l<h;l++){const f=a[l];this.addGroup(f.start,f.count,f.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Ta=new nt,yn=new To,Oi=new gr,ba=new I,Bi=new I,zi=new I,Hi=new I,Vr=new I,Vi=new I,Aa=new I,Gi=new I;class Ht extends Et{constructor(e=new Vt,t=new wo){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){const n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(s&&o){Vi.set(0,0,0);for(let c=0,l=s.length;c<l;c++){const h=o[c],f=s[c];h!==0&&(Vr.fromBufferAttribute(f,e),a?Vi.addScaledVector(Vr,h):Vi.addScaledVector(Vr.sub(t),h))}t.add(Vi)}return t}raycast(e,t){const n=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Oi.copy(n.boundingSphere),Oi.applyMatrix4(s),yn.copy(e.ray).recast(e.near),!(Oi.containsPoint(yn.origin)===!1&&(yn.intersectSphere(Oi,ba)===null||yn.origin.distanceToSquared(ba)>(e.far-e.near)**2))&&(Ta.copy(s).invert(),yn.copy(e.ray).applyMatrix4(Ta),!(n.boundingBox!==null&&yn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,yn)))}_computeIntersections(e,t,n){let r;const s=this.geometry,a=this.material,o=s.index,c=s.attributes.position,l=s.attributes.uv,h=s.attributes.uv1,f=s.attributes.normal,d=s.groups,m=s.drawRange;if(o!==null)if(Array.isArray(a))for(let _=0,x=d.length;_<x;_++){const p=d[_],u=a[p.materialIndex],b=Math.max(p.start,m.start),T=Math.min(o.count,Math.min(p.start+p.count,m.start+m.count));for(let E=b,R=T;E<R;E+=3){const w=o.getX(E),C=o.getX(E+1),N=o.getX(E+2);r=ki(this,u,e,n,l,h,f,w,C,N),r&&(r.faceIndex=Math.floor(E/3),r.face.materialIndex=p.materialIndex,t.push(r))}}else{const _=Math.max(0,m.start),x=Math.min(o.count,m.start+m.count);for(let p=_,u=x;p<u;p+=3){const b=o.getX(p),T=o.getX(p+1),E=o.getX(p+2);r=ki(this,a,e,n,l,h,f,b,T,E),r&&(r.faceIndex=Math.floor(p/3),t.push(r))}}else if(c!==void 0)if(Array.isArray(a))for(let _=0,x=d.length;_<x;_++){const p=d[_],u=a[p.materialIndex],b=Math.max(p.start,m.start),T=Math.min(c.count,Math.min(p.start+p.count,m.start+m.count));for(let E=b,R=T;E<R;E+=3){const w=E,C=E+1,N=E+2;r=ki(this,u,e,n,l,h,f,w,C,N),r&&(r.faceIndex=Math.floor(E/3),r.face.materialIndex=p.materialIndex,t.push(r))}}else{const _=Math.max(0,m.start),x=Math.min(c.count,m.start+m.count);for(let p=_,u=x;p<u;p+=3){const b=p,T=p+1,E=p+2;r=ki(this,a,e,n,l,h,f,b,T,E),r&&(r.faceIndex=Math.floor(p/3),t.push(r))}}}}function pc(i,e,t,n,r,s,a,o){let c;if(e.side===St?c=n.intersectTriangle(a,s,r,!0,o):c=n.intersectTriangle(r,s,a,e.side===gn,o),c===null)return null;Gi.copy(o),Gi.applyMatrix4(i.matrixWorld);const l=t.ray.origin.distanceTo(Gi);return l<t.near||l>t.far?null:{distance:l,point:Gi.clone(),object:i}}function ki(i,e,t,n,r,s,a,o,c,l){i.getVertexPosition(o,Bi),i.getVertexPosition(c,zi),i.getVertexPosition(l,Hi);const h=pc(i,e,t,n,Bi,zi,Hi,Aa);if(h){const f=new I;Ut.getBarycoord(Aa,Bi,zi,Hi,f),r&&(h.uv=Ut.getInterpolatedAttribute(r,o,c,l,f,new Xe)),s&&(h.uv1=Ut.getInterpolatedAttribute(s,o,c,l,f,new Xe)),a&&(h.normal=Ut.getInterpolatedAttribute(a,o,c,l,f,new I),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const d={a:o,b:c,c:l,normal:new I,materialIndex:0};Ut.getNormal(Bi,zi,Hi,d.normal),h.face=d,h.barycoord=f}return h}class yi extends Vt{constructor(e=1,t=1,n=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const c=[],l=[],h=[],f=[];let d=0,m=0;_("z","y","x",-1,-1,n,t,e,a,s,0),_("z","y","x",1,-1,n,t,-e,a,s,1),_("x","z","y",1,1,e,n,t,r,a,2),_("x","z","y",1,-1,e,n,-t,r,a,3),_("x","y","z",1,-1,e,t,n,r,s,4),_("x","y","z",-1,-1,e,t,-n,r,s,5),this.setIndex(c),this.setAttribute("position",new mt(l,3)),this.setAttribute("normal",new mt(h,3)),this.setAttribute("uv",new mt(f,2));function _(x,p,u,b,T,E,R,w,C,N,S){const M=E/C,D=R/N,O=E/2,H=R/2,k=w/2,q=C+1,W=N+1;let te=0,V=0;const se=new I;for(let ce=0;ce<W;ce++){const Ee=ce*D-H;for(let Fe=0;Fe<q;Fe++){const Ke=Fe*M-O;se[x]=Ke*b,se[p]=Ee*T,se[u]=k,l.push(se.x,se.y,se.z),se[x]=0,se[p]=0,se[u]=w>0?1:-1,h.push(se.x,se.y,se.z),f.push(Fe/C),f.push(1-ce/N),te+=1}}for(let ce=0;ce<N;ce++)for(let Ee=0;Ee<C;Ee++){const Fe=d+Ee+q*ce,Ke=d+Ee+q*(ce+1),Qe=d+(Ee+1)+q*(ce+1),ke=d+(Ee+1)+q*ce;c.push(Fe,Ke,ke),c.push(Ke,Qe,ke),V+=6}o.addGroup(m,V,S),m+=V,d+=te}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new yi(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function ii(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const r=i[t][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=r.clone():Array.isArray(r)?e[t][n]=r.slice():e[t][n]=r}}return e}function vt(i){const e={};for(let t=0;t<i.length;t++){const n=ii(i[t]);for(const r in n)e[r]=n[r]}return e}function mc(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Po(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ve.workingColorSpace}const gc={clone:ii,merge:vt};var _c=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,vc=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Yt extends Ei{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=_c,this.fragmentShader=vc,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ii(e.uniforms),this.uniformsGroups=mc(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?t.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[r]={type:"m4",value:a.toArray()}:t.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Ks extends Et{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new nt,this.projectionMatrix=new nt,this.projectionMatrixInverse=new nt,this.coordinateSystem=Xt,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const fn=new I,wa=new Xe,Ra=new Xe;class zt extends Ks{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Mi*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Zn*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Mi*2*Math.atan(Math.tan(Zn*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){fn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(fn.x,fn.y).multiplyScalar(-e/fn.z),fn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(fn.x,fn.y).multiplyScalar(-e/fn.z)}getViewSize(e,t){return this.getViewBounds(e,wa,Ra),t.subVectors(Ra,wa)}setViewOffset(e,t,n,r,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Zn*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const c=a.fullWidth,l=a.fullHeight;s+=a.offsetX*r/c,t-=a.offsetY*n/l,r*=a.width/c,n*=a.height/l}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Xn=-90,qn=1;class xc extends Et{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new zt(Xn,qn,e,t);r.layers=this.layers,this.add(r);const s=new zt(Xn,qn,e,t);s.layers=this.layers,this.add(s);const a=new zt(Xn,qn,e,t);a.layers=this.layers,this.add(a);const o=new zt(Xn,qn,e,t);o.layers=this.layers,this.add(o);const c=new zt(Xn,qn,e,t);c.layers=this.layers,this.add(c);const l=new zt(Xn,qn,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,r,s,a,o,c]=t;for(const l of t)this.remove(l);if(e===Xt)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===ur)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,c,l,h]=this.children,f=e.getRenderTarget(),d=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,r),e.render(t,s),e.setRenderTarget(n,1,r),e.render(t,a),e.setRenderTarget(n,2,r),e.render(t,o),e.setRenderTarget(n,3,r),e.render(t,c),e.setRenderTarget(n,4,r),e.render(t,l),n.texture.generateMipmaps=x,e.setRenderTarget(n,5,r),e.render(t,h),e.setRenderTarget(f,d,m),e.xr.enabled=_,n.texture.needsPMREMUpdate=!0}}class Do extends xt{constructor(e=[],t=ei,n,r,s,a,o,c,l,h){super(e,t,n,r,s,a,o,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Mc extends sn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new Do(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new yi(5,5,5),s=new Yt({name:"CubemapFromEquirect",uniforms:ii(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:St,blending:pn});s.uniforms.tEquirect.value=t;const a=new Ht(r,s),o=t.minFilter;return t.minFilter===Ln&&(t.minFilter=wt),new xc(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,r=!0){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,r);e.setRenderTarget(s)}}class Wi extends Et{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Sc={type:"move"};class Gr{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Wi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Wi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new I,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new I),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Wi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new I,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new I),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,s=null,a=null;const o=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){a=!0;for(const x of e.hand.values()){const p=t.getJointPose(x,n),u=this._getHandJoint(l,x);p!==null&&(u.matrix.fromArray(p.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,u.jointRadius=p.radius),u.visible=p!==null}const h=l.joints["index-finger-tip"],f=l.joints["thumb-tip"],d=h.position.distanceTo(f.position),m=.02,_=.005;l.inputState.pinching&&d>m+_?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&d<=m-_&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Sc)))}return o!==null&&(o.visible=r!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Wi;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class Ca extends Et{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new an,this.environmentIntensity=1,this.environmentRotation=new an,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class Ec extends xt{constructor(e=null,t=1,n=1,r,s,a,o,c,l=Rt,h=Rt,f,d){super(null,a,o,c,l,h,r,s,f,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const kr=new I,yc=new I,Tc=new Pe;class wn{constructor(e=new I(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const r=kr.subVectors(n,t).cross(yc.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(kr),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Tc.getNormalMatrix(e),r=this.coplanarPoint(kr).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Tn=new gr,bc=new Xe(.5,.5),Xi=new I;class $s{constructor(e=new wn,t=new wn,n=new wn,r=new wn,s=new wn,a=new wn){this.planes=[e,t,n,r,s,a]}set(e,t,n,r,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Xt,n=!1){const r=this.planes,s=e.elements,a=s[0],o=s[1],c=s[2],l=s[3],h=s[4],f=s[5],d=s[6],m=s[7],_=s[8],x=s[9],p=s[10],u=s[11],b=s[12],T=s[13],E=s[14],R=s[15];if(r[0].setComponents(l-a,m-h,u-_,R-b).normalize(),r[1].setComponents(l+a,m+h,u+_,R+b).normalize(),r[2].setComponents(l+o,m+f,u+x,R+T).normalize(),r[3].setComponents(l-o,m-f,u-x,R-T).normalize(),n)r[4].setComponents(c,d,p,E).normalize(),r[5].setComponents(l-c,m-d,u-p,R-E).normalize();else if(r[4].setComponents(l-c,m-d,u-p,R-E).normalize(),t===Xt)r[5].setComponents(l+c,m+d,u+p,R+E).normalize();else if(t===ur)r[5].setComponents(c,d,p,E).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Tn.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Tn.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Tn)}intersectsSprite(e){Tn.center.set(0,0,0);const t=bc.distanceTo(e.center);return Tn.radius=.7071067811865476+t,Tn.applyMatrix4(e.matrixWorld),this.intersectsSphere(Tn)}intersectsSphere(e){const t=this.planes,n=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const r=t[n];if(Xi.x=r.normal.x>0?e.max.x:e.min.x,Xi.y=r.normal.y>0?e.max.y:e.min.y,Xi.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Xi)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Ac extends Ei{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ge(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const fr=new I,dr=new I,Pa=new nt,di=new To,qi=new gr,Wr=new I,Da=new I;class wc extends Et{constructor(e=new Vt,t=new Ac){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let r=1,s=t.count;r<s;r++)fr.fromBufferAttribute(t,r-1),dr.fromBufferAttribute(t,r),n[r]=n[r-1],n[r]+=fr.distanceTo(dr);e.setAttribute("lineDistance",new mt(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),qi.copy(n.boundingSphere),qi.applyMatrix4(r),qi.radius+=s,e.ray.intersectsSphere(qi)===!1)return;Pa.copy(r).invert(),di.copy(e.ray).applyMatrix4(Pa);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=this.isLineSegments?2:1,h=n.index,d=n.attributes.position;if(h!==null){const m=Math.max(0,a.start),_=Math.min(h.count,a.start+a.count);for(let x=m,p=_-1;x<p;x+=l){const u=h.getX(x),b=h.getX(x+1),T=Yi(this,e,di,c,u,b,x);T&&t.push(T)}if(this.isLineLoop){const x=h.getX(_-1),p=h.getX(m),u=Yi(this,e,di,c,x,p,_-1);u&&t.push(u)}}else{const m=Math.max(0,a.start),_=Math.min(d.count,a.start+a.count);for(let x=m,p=_-1;x<p;x+=l){const u=Yi(this,e,di,c,x,x+1,x);u&&t.push(u)}if(this.isLineLoop){const x=Yi(this,e,di,c,_-1,m,_-1);x&&t.push(x)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function Yi(i,e,t,n,r,s,a){const o=i.geometry.attributes.position;if(fr.fromBufferAttribute(o,r),dr.fromBufferAttribute(o,s),t.distanceSqToSegment(fr,dr,Wr,Da)>n)return;Wr.applyMatrix4(i.matrixWorld);const l=e.ray.origin.distanceTo(Wr);if(!(l<e.near||l>e.far))return{distance:l,point:Da.clone().applyMatrix4(i.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:i}}const La=new I,Ua=new I;class Mp extends wc{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let r=0,s=t.count;r<s;r+=2)La.fromBufferAttribute(t,r),Ua.fromBufferAttribute(t,r+1),n[r]=r===0?0:n[r-1],n[r+1]=n[r]+La.distanceTo(Ua);e.setAttribute("lineDistance",new mt(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Zs extends xt{constructor(e,t,n=_n,r,s,a,o=Rt,c=Rt,l,h=vi,f=1){if(h!==vi&&h!==xi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const d={width:e,height:t,depth:f};super(d,r,s,a,o,c,h,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Ys(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class Lo extends xt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Uo extends Vt{constructor(e=1,t=1,n=1,r=32,s=1,a=!1,o=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:r,heightSegments:s,openEnded:a,thetaStart:o,thetaLength:c};const l=this;r=Math.floor(r),s=Math.floor(s);const h=[],f=[],d=[],m=[];let _=0;const x=[],p=n/2;let u=0;b(),a===!1&&(e>0&&T(!0),t>0&&T(!1)),this.setIndex(h),this.setAttribute("position",new mt(f,3)),this.setAttribute("normal",new mt(d,3)),this.setAttribute("uv",new mt(m,2));function b(){const E=new I,R=new I;let w=0;const C=(t-e)/n;for(let N=0;N<=s;N++){const S=[],M=N/s,D=M*(t-e)+e;for(let O=0;O<=r;O++){const H=O/r,k=H*c+o,q=Math.sin(k),W=Math.cos(k);R.x=D*q,R.y=-M*n+p,R.z=D*W,f.push(R.x,R.y,R.z),E.set(q,C,W).normalize(),d.push(E.x,E.y,E.z),m.push(H,1-M),S.push(_++)}x.push(S)}for(let N=0;N<r;N++)for(let S=0;S<s;S++){const M=x[S][N],D=x[S+1][N],O=x[S+1][N+1],H=x[S][N+1];(e>0||S!==0)&&(h.push(M,D,H),w+=3),(t>0||S!==s-1)&&(h.push(D,O,H),w+=3)}l.addGroup(u,w,0),u+=w}function T(E){const R=_,w=new Xe,C=new I;let N=0;const S=E===!0?e:t,M=E===!0?1:-1;for(let O=1;O<=r;O++)f.push(0,p*M,0),d.push(0,M,0),m.push(.5,.5),_++;const D=_;for(let O=0;O<=r;O++){const k=O/r*c+o,q=Math.cos(k),W=Math.sin(k);C.x=S*W,C.y=p*M,C.z=S*q,f.push(C.x,C.y,C.z),d.push(0,M,0),w.x=q*.5+.5,w.y=W*.5*M+.5,m.push(w.x,w.y),_++}for(let O=0;O<r;O++){const H=R+O,k=D+O;E===!0?h.push(k,k+1,H):h.push(k+1,k,H),N+=3}l.addGroup(u,N,E===!0?1:2),u+=N}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Uo(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}const ji=new I,Ki=new I,Xr=new I,$i=new Ut;class Sp extends Vt{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){const r=Math.pow(10,4),s=Math.cos(Zn*t),a=e.getIndex(),o=e.getAttribute("position"),c=a?a.count:o.count,l=[0,0,0],h=["a","b","c"],f=new Array(3),d={},m=[];for(let _=0;_<c;_+=3){a?(l[0]=a.getX(_),l[1]=a.getX(_+1),l[2]=a.getX(_+2)):(l[0]=_,l[1]=_+1,l[2]=_+2);const{a:x,b:p,c:u}=$i;if(x.fromBufferAttribute(o,l[0]),p.fromBufferAttribute(o,l[1]),u.fromBufferAttribute(o,l[2]),$i.getNormal(Xr),f[0]=`${Math.round(x.x*r)},${Math.round(x.y*r)},${Math.round(x.z*r)}`,f[1]=`${Math.round(p.x*r)},${Math.round(p.y*r)},${Math.round(p.z*r)}`,f[2]=`${Math.round(u.x*r)},${Math.round(u.y*r)},${Math.round(u.z*r)}`,!(f[0]===f[1]||f[1]===f[2]||f[2]===f[0]))for(let b=0;b<3;b++){const T=(b+1)%3,E=f[b],R=f[T],w=$i[h[b]],C=$i[h[T]],N=`${E}_${R}`,S=`${R}_${E}`;S in d&&d[S]?(Xr.dot(d[S].normal)<=s&&(m.push(w.x,w.y,w.z),m.push(C.x,C.y,C.z)),d[S]=null):N in d||(d[N]={index0:l[b],index1:l[T],normal:Xr.clone()})}}for(const _ in d)if(d[_]){const{index0:x,index1:p}=d[_];ji.fromBufferAttribute(o,x),Ki.fromBufferAttribute(o,p),m.push(ji.x,ji.y,ji.z),m.push(Ki.x,Ki.y,Ki.z)}this.setAttribute("position",new mt(m,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}class Ti extends Vt{constructor(e=1,t=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};const s=e/2,a=t/2,o=Math.floor(n),c=Math.floor(r),l=o+1,h=c+1,f=e/o,d=t/c,m=[],_=[],x=[],p=[];for(let u=0;u<h;u++){const b=u*d-a;for(let T=0;T<l;T++){const E=T*f-s;_.push(E,-b,0),x.push(0,0,1),p.push(T/o),p.push(1-u/c)}}for(let u=0;u<c;u++)for(let b=0;b<o;b++){const T=b+l*u,E=b+l*(u+1),R=b+1+l*(u+1),w=b+1+l*u;m.push(T,E,w),m.push(E,R,w)}this.setIndex(m),this.setAttribute("position",new mt(_,3)),this.setAttribute("normal",new mt(x,3)),this.setAttribute("uv",new mt(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ti(e.width,e.height,e.widthSegments,e.heightSegments)}}class Io extends Vt{constructor(e=1,t=32,n=16,r=0,s=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:r,phiLength:s,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const c=Math.min(a+o,Math.PI);let l=0;const h=[],f=new I,d=new I,m=[],_=[],x=[],p=[];for(let u=0;u<=n;u++){const b=[],T=u/n;let E=0;u===0&&a===0?E=.5/t:u===n&&c===Math.PI&&(E=-.5/t);for(let R=0;R<=t;R++){const w=R/t;f.x=-e*Math.cos(r+w*s)*Math.sin(a+T*o),f.y=e*Math.cos(a+T*o),f.z=e*Math.sin(r+w*s)*Math.sin(a+T*o),_.push(f.x,f.y,f.z),d.copy(f).normalize(),x.push(d.x,d.y,d.z),p.push(w+E,1-T),b.push(l++)}h.push(b)}for(let u=0;u<n;u++)for(let b=0;b<t;b++){const T=h[u][b+1],E=h[u][b],R=h[u+1][b],w=h[u+1][b+1];(u!==0||a>0)&&m.push(T,E,w),(u!==n-1||c<Math.PI)&&m.push(E,R,w)}this.setIndex(m),this.setAttribute("position",new mt(_,3)),this.setAttribute("normal",new mt(x,3)),this.setAttribute("uv",new mt(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Io(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Rc extends Ei{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=yl,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Cc extends Ei{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class Pc extends Ks{constructor(e=-1,t=1,n=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=n-e,a=n+e,o=r+t,c=r-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,a=s+l*this.view.width,o-=h*this.view.offsetY,c=o-h*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class Dc extends zt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}function Ia(i,e,t,n){const r=Lc(n);switch(t){case vo:return i*e;case mr:return i*e/r.components*r.byteLength;case ks:return i*e/r.components*r.byteLength;case Mo:return i*e*2/r.components*r.byteLength;case Ws:return i*e*2/r.components*r.byteLength;case xo:return i*e*3/r.components*r.byteLength;case It:return i*e*4/r.components*r.byteLength;case Xs:return i*e*4/r.components*r.byteLength;case er:case tr:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case nr:case ir:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case hs:case ds:return Math.max(i,16)*Math.max(e,8)/4;case us:case fs:return Math.max(i,8)*Math.max(e,8)/2;case ps:case ms:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case gs:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case _s:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case vs:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case xs:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case Ms:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case Ss:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case Es:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case ys:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case Ts:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case bs:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case As:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case ws:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case Rs:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case Cs:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case Ps:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case Ds:case Ls:case Us:return Math.ceil(i/4)*Math.ceil(e/4)*16;case Is:case Ns:return Math.ceil(i/4)*Math.ceil(e/4)*8;case Fs:case Os:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Lc(i){switch(i){case Nt:case po:return{byteLength:1,components:1};case gi:case mo:case ri:return{byteLength:2,components:1};case Vs:case Gs:return{byteLength:2,components:4};case _n:case Hs:case nn:return{byteLength:4,components:1};case go:case _o:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:zs}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=zs);function No(){let i=null,e=!1,t=null,n=null;function r(s,a){t(s,a),n=i.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(r),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){i=s}}}function Uc(i){const e=new WeakMap;function t(o,c){const l=o.array,h=o.usage,f=l.byteLength,d=i.createBuffer();i.bindBuffer(c,d),i.bufferData(c,l,h),o.onUploadCallback();let m;if(l instanceof Float32Array)m=i.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)m=i.HALF_FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?m=i.HALF_FLOAT:m=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)m=i.SHORT;else if(l instanceof Uint32Array)m=i.UNSIGNED_INT;else if(l instanceof Int32Array)m=i.INT;else if(l instanceof Int8Array)m=i.BYTE;else if(l instanceof Uint8Array)m=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)m=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:d,type:m,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:f}}function n(o,c,l){const h=c.array,f=c.updateRanges;if(i.bindBuffer(l,o),f.length===0)i.bufferSubData(l,0,h);else{f.sort((m,_)=>m.start-_.start);let d=0;for(let m=1;m<f.length;m++){const _=f[d],x=f[m];x.start<=_.start+_.count+1?_.count=Math.max(_.count,x.start+x.count-_.start):(++d,f[d]=x)}f.length=d+1;for(let m=0,_=f.length;m<_;m++){const x=f[m];i.bufferSubData(l,x.start*h.BYTES_PER_ELEMENT,h,x.start,x.count)}c.clearUpdateRanges()}c.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const c=e.get(o);c&&(i.deleteBuffer(c.buffer),e.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const l=e.get(o);if(l===void 0)e.set(o,t(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,o,c),l.version=o.version}}return{get:r,remove:s,update:a}}var Ic=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Nc=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Fc=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Oc=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Bc=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,zc=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Hc=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Vc=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Gc=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,kc=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Wc=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Xc=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,qc=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Yc=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,jc=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Kc=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,$c=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Zc=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Jc=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Qc=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,eu=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,tu=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,nu=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,iu=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,ru=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,su=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,au=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,ou=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,lu=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,cu=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,uu="gl_FragColor = linearToOutputTexel( gl_FragColor );",hu=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,fu=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,du=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,pu=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,mu=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,gu=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,_u=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,vu=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,xu=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Mu=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Su=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Eu=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,yu=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Tu=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,bu=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Au=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,wu=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Ru=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Cu=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Pu=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Du=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Lu=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Uu=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Iu=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Nu=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Fu=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Ou=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Bu=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,zu=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Hu=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Vu=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Gu=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,ku=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Wu=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Xu=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,qu=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Yu=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,ju=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Ku=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,$u=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Zu=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Ju=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Qu=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,eh=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,th=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,nh=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,ih=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,rh=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,sh=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,ah=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,oh=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,lh=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,ch=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,uh=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,hh=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,fh=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,dh=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,ph=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,mh=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow( sampler2D shadow, vec2 uv, float compare ) {
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare, distribution.x );
		#endif
		if ( hard_shadow != 1.0 ) {
			float distance = compare - distribution.x;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,gh=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,_h=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,vh=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,xh=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Mh=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Sh=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Eh=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,yh=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Th=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,bh=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Ah=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,wh=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Rh=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Ch=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Ph=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Dh=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Lh=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Uh=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Ih=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Nh=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Fh=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Oh=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Bh=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,zh=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Hh=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Vh=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Gh=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,kh=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Wh=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Xh=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,qh=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Yh=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,jh=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Kh=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,$h=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Zh=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Jh=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Qh=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,ef=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,tf=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,nf=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,rf=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,sf=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,af=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,of=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,lf=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,cf=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,uf=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,hf=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ff=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,df=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ne={alphahash_fragment:Ic,alphahash_pars_fragment:Nc,alphamap_fragment:Fc,alphamap_pars_fragment:Oc,alphatest_fragment:Bc,alphatest_pars_fragment:zc,aomap_fragment:Hc,aomap_pars_fragment:Vc,batching_pars_vertex:Gc,batching_vertex:kc,begin_vertex:Wc,beginnormal_vertex:Xc,bsdfs:qc,iridescence_fragment:Yc,bumpmap_pars_fragment:jc,clipping_planes_fragment:Kc,clipping_planes_pars_fragment:$c,clipping_planes_pars_vertex:Zc,clipping_planes_vertex:Jc,color_fragment:Qc,color_pars_fragment:eu,color_pars_vertex:tu,color_vertex:nu,common:iu,cube_uv_reflection_fragment:ru,defaultnormal_vertex:su,displacementmap_pars_vertex:au,displacementmap_vertex:ou,emissivemap_fragment:lu,emissivemap_pars_fragment:cu,colorspace_fragment:uu,colorspace_pars_fragment:hu,envmap_fragment:fu,envmap_common_pars_fragment:du,envmap_pars_fragment:pu,envmap_pars_vertex:mu,envmap_physical_pars_fragment:Au,envmap_vertex:gu,fog_vertex:_u,fog_pars_vertex:vu,fog_fragment:xu,fog_pars_fragment:Mu,gradientmap_pars_fragment:Su,lightmap_pars_fragment:Eu,lights_lambert_fragment:yu,lights_lambert_pars_fragment:Tu,lights_pars_begin:bu,lights_toon_fragment:wu,lights_toon_pars_fragment:Ru,lights_phong_fragment:Cu,lights_phong_pars_fragment:Pu,lights_physical_fragment:Du,lights_physical_pars_fragment:Lu,lights_fragment_begin:Uu,lights_fragment_maps:Iu,lights_fragment_end:Nu,logdepthbuf_fragment:Fu,logdepthbuf_pars_fragment:Ou,logdepthbuf_pars_vertex:Bu,logdepthbuf_vertex:zu,map_fragment:Hu,map_pars_fragment:Vu,map_particle_fragment:Gu,map_particle_pars_fragment:ku,metalnessmap_fragment:Wu,metalnessmap_pars_fragment:Xu,morphinstance_vertex:qu,morphcolor_vertex:Yu,morphnormal_vertex:ju,morphtarget_pars_vertex:Ku,morphtarget_vertex:$u,normal_fragment_begin:Zu,normal_fragment_maps:Ju,normal_pars_fragment:Qu,normal_pars_vertex:eh,normal_vertex:th,normalmap_pars_fragment:nh,clearcoat_normal_fragment_begin:ih,clearcoat_normal_fragment_maps:rh,clearcoat_pars_fragment:sh,iridescence_pars_fragment:ah,opaque_fragment:oh,packing:lh,premultiplied_alpha_fragment:ch,project_vertex:uh,dithering_fragment:hh,dithering_pars_fragment:fh,roughnessmap_fragment:dh,roughnessmap_pars_fragment:ph,shadowmap_pars_fragment:mh,shadowmap_pars_vertex:gh,shadowmap_vertex:_h,shadowmask_pars_fragment:vh,skinbase_vertex:xh,skinning_pars_vertex:Mh,skinning_vertex:Sh,skinnormal_vertex:Eh,specularmap_fragment:yh,specularmap_pars_fragment:Th,tonemapping_fragment:bh,tonemapping_pars_fragment:Ah,transmission_fragment:wh,transmission_pars_fragment:Rh,uv_pars_fragment:Ch,uv_pars_vertex:Ph,uv_vertex:Dh,worldpos_vertex:Lh,background_vert:Uh,background_frag:Ih,backgroundCube_vert:Nh,backgroundCube_frag:Fh,cube_vert:Oh,cube_frag:Bh,depth_vert:zh,depth_frag:Hh,distanceRGBA_vert:Vh,distanceRGBA_frag:Gh,equirect_vert:kh,equirect_frag:Wh,linedashed_vert:Xh,linedashed_frag:qh,meshbasic_vert:Yh,meshbasic_frag:jh,meshlambert_vert:Kh,meshlambert_frag:$h,meshmatcap_vert:Zh,meshmatcap_frag:Jh,meshnormal_vert:Qh,meshnormal_frag:ef,meshphong_vert:tf,meshphong_frag:nf,meshphysical_vert:rf,meshphysical_frag:sf,meshtoon_vert:af,meshtoon_frag:of,points_vert:lf,points_frag:cf,shadow_vert:uf,shadow_frag:hf,sprite_vert:ff,sprite_frag:df},re={common:{diffuse:{value:new Ge(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Pe},alphaMap:{value:null},alphaMapTransform:{value:new Pe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Pe}},envmap:{envMap:{value:null},envMapRotation:{value:new Pe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Pe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Pe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Pe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Pe},normalScale:{value:new Xe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Pe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Pe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Pe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Pe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ge(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ge(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Pe},alphaTest:{value:0},uvTransform:{value:new Pe}},sprite:{diffuse:{value:new Ge(16777215)},opacity:{value:1},center:{value:new Xe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Pe},alphaMap:{value:null},alphaMapTransform:{value:new Pe},alphaTest:{value:0}}},kt={basic:{uniforms:vt([re.common,re.specularmap,re.envmap,re.aomap,re.lightmap,re.fog]),vertexShader:Ne.meshbasic_vert,fragmentShader:Ne.meshbasic_frag},lambert:{uniforms:vt([re.common,re.specularmap,re.envmap,re.aomap,re.lightmap,re.emissivemap,re.bumpmap,re.normalmap,re.displacementmap,re.fog,re.lights,{emissive:{value:new Ge(0)}}]),vertexShader:Ne.meshlambert_vert,fragmentShader:Ne.meshlambert_frag},phong:{uniforms:vt([re.common,re.specularmap,re.envmap,re.aomap,re.lightmap,re.emissivemap,re.bumpmap,re.normalmap,re.displacementmap,re.fog,re.lights,{emissive:{value:new Ge(0)},specular:{value:new Ge(1118481)},shininess:{value:30}}]),vertexShader:Ne.meshphong_vert,fragmentShader:Ne.meshphong_frag},standard:{uniforms:vt([re.common,re.envmap,re.aomap,re.lightmap,re.emissivemap,re.bumpmap,re.normalmap,re.displacementmap,re.roughnessmap,re.metalnessmap,re.fog,re.lights,{emissive:{value:new Ge(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ne.meshphysical_vert,fragmentShader:Ne.meshphysical_frag},toon:{uniforms:vt([re.common,re.aomap,re.lightmap,re.emissivemap,re.bumpmap,re.normalmap,re.displacementmap,re.gradientmap,re.fog,re.lights,{emissive:{value:new Ge(0)}}]),vertexShader:Ne.meshtoon_vert,fragmentShader:Ne.meshtoon_frag},matcap:{uniforms:vt([re.common,re.bumpmap,re.normalmap,re.displacementmap,re.fog,{matcap:{value:null}}]),vertexShader:Ne.meshmatcap_vert,fragmentShader:Ne.meshmatcap_frag},points:{uniforms:vt([re.points,re.fog]),vertexShader:Ne.points_vert,fragmentShader:Ne.points_frag},dashed:{uniforms:vt([re.common,re.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ne.linedashed_vert,fragmentShader:Ne.linedashed_frag},depth:{uniforms:vt([re.common,re.displacementmap]),vertexShader:Ne.depth_vert,fragmentShader:Ne.depth_frag},normal:{uniforms:vt([re.common,re.bumpmap,re.normalmap,re.displacementmap,{opacity:{value:1}}]),vertexShader:Ne.meshnormal_vert,fragmentShader:Ne.meshnormal_frag},sprite:{uniforms:vt([re.sprite,re.fog]),vertexShader:Ne.sprite_vert,fragmentShader:Ne.sprite_frag},background:{uniforms:{uvTransform:{value:new Pe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ne.background_vert,fragmentShader:Ne.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Pe}},vertexShader:Ne.backgroundCube_vert,fragmentShader:Ne.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ne.cube_vert,fragmentShader:Ne.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ne.equirect_vert,fragmentShader:Ne.equirect_frag},distanceRGBA:{uniforms:vt([re.common,re.displacementmap,{referencePosition:{value:new I},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ne.distanceRGBA_vert,fragmentShader:Ne.distanceRGBA_frag},shadow:{uniforms:vt([re.lights,re.fog,{color:{value:new Ge(0)},opacity:{value:1}}]),vertexShader:Ne.shadow_vert,fragmentShader:Ne.shadow_frag}};kt.physical={uniforms:vt([kt.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Pe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Pe},clearcoatNormalScale:{value:new Xe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Pe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Pe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Pe},sheen:{value:0},sheenColor:{value:new Ge(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Pe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Pe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Pe},transmissionSamplerSize:{value:new Xe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Pe},attenuationDistance:{value:0},attenuationColor:{value:new Ge(0)},specularColor:{value:new Ge(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Pe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Pe},anisotropyVector:{value:new Xe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Pe}}]),vertexShader:Ne.meshphysical_vert,fragmentShader:Ne.meshphysical_frag};const Zi={r:0,b:0,g:0},bn=new an,pf=new nt;function mf(i,e,t,n,r,s,a){const o=new Ge(0);let c=s===!0?0:1,l,h,f=null,d=0,m=null;function _(T){let E=T.isScene===!0?T.background:null;return E&&E.isTexture&&(E=(T.backgroundBlurriness>0?t:e).get(E)),E}function x(T){let E=!1;const R=_(T);R===null?u(o,c):R&&R.isColor&&(u(R,1),E=!0);const w=i.xr.getEnvironmentBlendMode();w==="additive"?n.buffers.color.setClear(0,0,0,1,a):w==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||E)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function p(T,E){const R=_(E);R&&(R.isCubeTexture||R.mapping===pr)?(h===void 0&&(h=new Ht(new yi(1,1,1),new Yt({name:"BackgroundCubeMaterial",uniforms:ii(kt.backgroundCube.uniforms),vertexShader:kt.backgroundCube.vertexShader,fragmentShader:kt.backgroundCube.fragmentShader,side:St,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(w,C,N){this.matrixWorld.copyPosition(N.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(h)),bn.copy(E.backgroundRotation),bn.x*=-1,bn.y*=-1,bn.z*=-1,R.isCubeTexture&&R.isRenderTargetTexture===!1&&(bn.y*=-1,bn.z*=-1),h.material.uniforms.envMap.value=R,h.material.uniforms.flipEnvMap.value=R.isCubeTexture&&R.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=E.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(pf.makeRotationFromEuler(bn)),h.material.toneMapped=Ve.getTransfer(R.colorSpace)!==Ye,(f!==R||d!==R.version||m!==i.toneMapping)&&(h.material.needsUpdate=!0,f=R,d=R.version,m=i.toneMapping),h.layers.enableAll(),T.unshift(h,h.geometry,h.material,0,0,null)):R&&R.isTexture&&(l===void 0&&(l=new Ht(new Ti(2,2),new Yt({name:"BackgroundMaterial",uniforms:ii(kt.background.uniforms),vertexShader:kt.background.vertexShader,fragmentShader:kt.background.fragmentShader,side:gn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(l)),l.material.uniforms.t2D.value=R,l.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,l.material.toneMapped=Ve.getTransfer(R.colorSpace)!==Ye,R.matrixAutoUpdate===!0&&R.updateMatrix(),l.material.uniforms.uvTransform.value.copy(R.matrix),(f!==R||d!==R.version||m!==i.toneMapping)&&(l.material.needsUpdate=!0,f=R,d=R.version,m=i.toneMapping),l.layers.enableAll(),T.unshift(l,l.geometry,l.material,0,0,null))}function u(T,E){T.getRGB(Zi,Po(i)),n.buffers.color.setClear(Zi.r,Zi.g,Zi.b,E,a)}function b(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(T,E=1){o.set(T),c=E,u(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(T){c=T,u(o,c)},render:x,addToRenderList:p,dispose:b}}function gf(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},r=d(null);let s=r,a=!1;function o(M,D,O,H,k){let q=!1;const W=f(H,O,D);s!==W&&(s=W,l(s.object)),q=m(M,H,O,k),q&&_(M,H,O,k),k!==null&&e.update(k,i.ELEMENT_ARRAY_BUFFER),(q||a)&&(a=!1,E(M,D,O,H),k!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(k).buffer))}function c(){return i.createVertexArray()}function l(M){return i.bindVertexArray(M)}function h(M){return i.deleteVertexArray(M)}function f(M,D,O){const H=O.wireframe===!0;let k=n[M.id];k===void 0&&(k={},n[M.id]=k);let q=k[D.id];q===void 0&&(q={},k[D.id]=q);let W=q[H];return W===void 0&&(W=d(c()),q[H]=W),W}function d(M){const D=[],O=[],H=[];for(let k=0;k<t;k++)D[k]=0,O[k]=0,H[k]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:O,attributeDivisors:H,object:M,attributes:{},index:null}}function m(M,D,O,H){const k=s.attributes,q=D.attributes;let W=0;const te=O.getAttributes();for(const V in te)if(te[V].location>=0){const ce=k[V];let Ee=q[V];if(Ee===void 0&&(V==="instanceMatrix"&&M.instanceMatrix&&(Ee=M.instanceMatrix),V==="instanceColor"&&M.instanceColor&&(Ee=M.instanceColor)),ce===void 0||ce.attribute!==Ee||Ee&&ce.data!==Ee.data)return!0;W++}return s.attributesNum!==W||s.index!==H}function _(M,D,O,H){const k={},q=D.attributes;let W=0;const te=O.getAttributes();for(const V in te)if(te[V].location>=0){let ce=q[V];ce===void 0&&(V==="instanceMatrix"&&M.instanceMatrix&&(ce=M.instanceMatrix),V==="instanceColor"&&M.instanceColor&&(ce=M.instanceColor));const Ee={};Ee.attribute=ce,ce&&ce.data&&(Ee.data=ce.data),k[V]=Ee,W++}s.attributes=k,s.attributesNum=W,s.index=H}function x(){const M=s.newAttributes;for(let D=0,O=M.length;D<O;D++)M[D]=0}function p(M){u(M,0)}function u(M,D){const O=s.newAttributes,H=s.enabledAttributes,k=s.attributeDivisors;O[M]=1,H[M]===0&&(i.enableVertexAttribArray(M),H[M]=1),k[M]!==D&&(i.vertexAttribDivisor(M,D),k[M]=D)}function b(){const M=s.newAttributes,D=s.enabledAttributes;for(let O=0,H=D.length;O<H;O++)D[O]!==M[O]&&(i.disableVertexAttribArray(O),D[O]=0)}function T(M,D,O,H,k,q,W){W===!0?i.vertexAttribIPointer(M,D,O,k,q):i.vertexAttribPointer(M,D,O,H,k,q)}function E(M,D,O,H){x();const k=H.attributes,q=O.getAttributes(),W=D.defaultAttributeValues;for(const te in q){const V=q[te];if(V.location>=0){let se=k[te];if(se===void 0&&(te==="instanceMatrix"&&M.instanceMatrix&&(se=M.instanceMatrix),te==="instanceColor"&&M.instanceColor&&(se=M.instanceColor)),se!==void 0){const ce=se.normalized,Ee=se.itemSize,Fe=e.get(se);if(Fe===void 0)continue;const Ke=Fe.buffer,Qe=Fe.type,ke=Fe.bytesPerElement,Y=Qe===i.INT||Qe===i.UNSIGNED_INT||se.gpuType===Hs;if(se.isInterleavedBufferAttribute){const $=se.data,fe=$.stride,Ce=se.offset;if($.isInstancedInterleavedBuffer){for(let Se=0;Se<V.locationSize;Se++)u(V.location+Se,$.meshPerAttribute);M.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=$.meshPerAttribute*$.count)}else for(let Se=0;Se<V.locationSize;Se++)p(V.location+Se);i.bindBuffer(i.ARRAY_BUFFER,Ke);for(let Se=0;Se<V.locationSize;Se++)T(V.location+Se,Ee/V.locationSize,Qe,ce,fe*ke,(Ce+Ee/V.locationSize*Se)*ke,Y)}else{if(se.isInstancedBufferAttribute){for(let $=0;$<V.locationSize;$++)u(V.location+$,se.meshPerAttribute);M.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=se.meshPerAttribute*se.count)}else for(let $=0;$<V.locationSize;$++)p(V.location+$);i.bindBuffer(i.ARRAY_BUFFER,Ke);for(let $=0;$<V.locationSize;$++)T(V.location+$,Ee/V.locationSize,Qe,ce,Ee*ke,Ee/V.locationSize*$*ke,Y)}}else if(W!==void 0){const ce=W[te];if(ce!==void 0)switch(ce.length){case 2:i.vertexAttrib2fv(V.location,ce);break;case 3:i.vertexAttrib3fv(V.location,ce);break;case 4:i.vertexAttrib4fv(V.location,ce);break;default:i.vertexAttrib1fv(V.location,ce)}}}}b()}function R(){N();for(const M in n){const D=n[M];for(const O in D){const H=D[O];for(const k in H)h(H[k].object),delete H[k];delete D[O]}delete n[M]}}function w(M){if(n[M.id]===void 0)return;const D=n[M.id];for(const O in D){const H=D[O];for(const k in H)h(H[k].object),delete H[k];delete D[O]}delete n[M.id]}function C(M){for(const D in n){const O=n[D];if(O[M.id]===void 0)continue;const H=O[M.id];for(const k in H)h(H[k].object),delete H[k];delete O[M.id]}}function N(){S(),a=!0,s!==r&&(s=r,l(s.object))}function S(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:N,resetDefaultState:S,dispose:R,releaseStatesOfGeometry:w,releaseStatesOfProgram:C,initAttributes:x,enableAttribute:p,disableUnusedAttributes:b}}function _f(i,e,t){let n;function r(l){n=l}function s(l,h){i.drawArrays(n,l,h),t.update(h,n,1)}function a(l,h,f){f!==0&&(i.drawArraysInstanced(n,l,h,f),t.update(h,n,f))}function o(l,h,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,h,0,f);let m=0;for(let _=0;_<f;_++)m+=h[_];t.update(m,n,1)}function c(l,h,f,d){if(f===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let _=0;_<l.length;_++)a(l[_],h[_],d[_]);else{m.multiDrawArraysInstancedWEBGL(n,l,0,h,0,d,0,f);let _=0;for(let x=0;x<f;x++)_+=h[x]*d[x];t.update(_,n,1)}}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=c}function vf(i,e,t,n){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const C=e.get("EXT_texture_filter_anisotropic");r=i.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(C){return!(C!==It&&n.convert(C)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(C){const N=C===ri&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(C!==Nt&&n.convert(C)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&C!==nn&&!N)}function c(C){if(C==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp";const h=c(l);h!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);const f=t.logarithmicDepthBuffer===!0,d=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),m=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_TEXTURE_SIZE),p=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),u=i.getParameter(i.MAX_VERTEX_ATTRIBS),b=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),T=i.getParameter(i.MAX_VARYING_VECTORS),E=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),R=_>0,w=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:f,reversedDepthBuffer:d,maxTextures:m,maxVertexTextures:_,maxTextureSize:x,maxCubemapSize:p,maxAttributes:u,maxVertexUniforms:b,maxVaryings:T,maxFragmentUniforms:E,vertexTextures:R,maxSamples:w}}function xf(i){const e=this;let t=null,n=0,r=!1,s=!1;const a=new wn,o=new Pe,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(f,d){const m=f.length!==0||d||n!==0||r;return r=d,n=f.length,m},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,d){t=h(f,d,0)},this.setState=function(f,d,m){const _=f.clippingPlanes,x=f.clipIntersection,p=f.clipShadows,u=i.get(f);if(!r||_===null||_.length===0||s&&!p)s?h(null):l();else{const b=s?0:n,T=b*4;let E=u.clippingState||null;c.value=E,E=h(_,d,T,m);for(let R=0;R!==T;++R)E[R]=t[R];u.clippingState=E,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=b}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(f,d,m,_){const x=f!==null?f.length:0;let p=null;if(x!==0){if(p=c.value,_!==!0||p===null){const u=m+x*4,b=d.matrixWorldInverse;o.getNormalMatrix(b),(p===null||p.length<u)&&(p=new Float32Array(u));for(let T=0,E=m;T!==x;++T,E+=4)a.copy(f[T]).applyMatrix4(b,o),a.normal.toArray(p,E),p[E+3]=a.constant}c.value=p,c.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,p}}function Mf(i){let e=new WeakMap;function t(a,o){return o===os?a.mapping=ei:o===ls&&(a.mapping=ti),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===os||o===ls)if(e.has(a)){const c=e.get(a).texture;return t(c,a.mapping)}else{const c=a.image;if(c&&c.height>0){const l=new Mc(c.height);return l.fromEquirectangularTexture(i,a),e.set(a,l),a.addEventListener("dispose",r),t(l.texture,a.mapping)}else return null}}return a}function r(a){const o=a.target;o.removeEventListener("dispose",r);const c=e.get(o);c!==void 0&&(e.delete(o),c.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}const Kn=4,Na=[.125,.215,.35,.446,.526,.582],Pn=20,qr=new Pc,Fa=new Ge;let Yr=null,jr=0,Kr=0,$r=!1;const Rn=(1+Math.sqrt(5))/2,Yn=1/Rn,Oa=[new I(-Rn,Yn,0),new I(Rn,Yn,0),new I(-Yn,0,Rn),new I(Yn,0,Rn),new I(0,Rn,-Yn),new I(0,Rn,Yn),new I(-1,1,-1),new I(1,1,-1),new I(-1,1,1),new I(1,1,1)],Sf=new I;class Ba{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,r=100,s={}){const{size:a=256,position:o=Sf}=s;Yr=this._renderer.getRenderTarget(),jr=this._renderer.getActiveCubeFace(),Kr=this._renderer.getActiveMipmapLevel(),$r=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,n,r,c,o),t>0&&this._blur(c,0,0,t),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Va(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ha(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Yr,jr,Kr),this._renderer.xr.enabled=$r,e.scissorTest=!1,Ji(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===ei||e.mapping===ti?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Yr=this._renderer.getRenderTarget(),jr=this._renderer.getActiveCubeFace(),Kr=this._renderer.getActiveMipmapLevel(),$r=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:wt,minFilter:wt,generateMipmaps:!1,type:ri,format:It,colorSpace:ni,depthBuffer:!1},r=za(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=za(e,t,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Ef(s)),this._blurMaterial=yf(s,e,t)}return r}_compileMaterial(e){const t=new Ht(this._lodPlanes[0],e);this._renderer.compile(t,qr)}_sceneToCubeUV(e,t,n,r,s){const c=new zt(90,1,t,n),l=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],f=this._renderer,d=f.autoClear,m=f.toneMapping;f.getClearColor(Fa),f.toneMapping=mn,f.autoClear=!1,f.state.buffers.depth.getReversed()&&(f.setRenderTarget(r),f.clearDepth(),f.setRenderTarget(null));const x=new wo({name:"PMREM.Background",side:St,depthWrite:!1,depthTest:!1}),p=new Ht(new yi,x);let u=!1;const b=e.background;b?b.isColor&&(x.color.copy(b),e.background=null,u=!0):(x.color.copy(Fa),u=!0);for(let T=0;T<6;T++){const E=T%3;E===0?(c.up.set(0,l[T],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x+h[T],s.y,s.z)):E===1?(c.up.set(0,0,l[T]),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y+h[T],s.z)):(c.up.set(0,l[T],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y,s.z+h[T]));const R=this._cubeSize;Ji(r,E*R,T>2?R:0,R,R),f.setRenderTarget(r),u&&f.render(p,c),f.render(e,c)}p.geometry.dispose(),p.material.dispose(),f.toneMapping=m,f.autoClear=d,e.background=b}_textureToCubeUV(e,t){const n=this._renderer,r=e.mapping===ei||e.mapping===ti;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Va()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ha());const s=r?this._cubemapMaterial:this._equirectMaterial,a=new Ht(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=e;const c=this._cubeSize;Ji(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(a,qr)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const a=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=Oa[(r-s-1)%Oa.length];this._blur(e,s-1,s,a,o)}t.autoClear=n}_blur(e,t,n,r,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,r,"latitudinal",s),this._halfBlur(a,e,n,n,r,"longitudinal",s)}_halfBlur(e,t,n,r,s,a,o){const c=this._renderer,l=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,f=new Ht(this._lodPlanes[r],l),d=l.uniforms,m=this._sizeLods[n]-1,_=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*Pn-1),x=s/_,p=isFinite(s)?1+Math.floor(h*x):Pn;p>Pn&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${Pn}`);const u=[];let b=0;for(let C=0;C<Pn;++C){const N=C/x,S=Math.exp(-N*N/2);u.push(S),C===0?b+=S:C<p&&(b+=2*S)}for(let C=0;C<u.length;C++)u[C]=u[C]/b;d.envMap.value=e.texture,d.samples.value=p,d.weights.value=u,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);const{_lodMax:T}=this;d.dTheta.value=_,d.mipInt.value=T-n;const E=this._sizeLods[r],R=3*E*(r>T-Kn?r-T+Kn:0),w=4*(this._cubeSize-E);Ji(t,R,w,3*E,2*E),c.setRenderTarget(t),c.render(f,qr)}}function Ef(i){const e=[],t=[],n=[];let r=i;const s=i-Kn+1+Na.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);t.push(o);let c=1/o;a>i-Kn?c=Na[a-i+Kn-1]:a===0&&(c=0),n.push(c);const l=1/(o-2),h=-l,f=1+l,d=[h,h,f,h,f,f,h,h,f,f,h,f],m=6,_=6,x=3,p=2,u=1,b=new Float32Array(x*_*m),T=new Float32Array(p*_*m),E=new Float32Array(u*_*m);for(let w=0;w<m;w++){const C=w%3*2/3-1,N=w>2?0:-1,S=[C,N,0,C+2/3,N,0,C+2/3,N+1,0,C,N,0,C+2/3,N+1,0,C,N+1,0];b.set(S,x*_*w),T.set(d,p*_*w);const M=[w,w,w,w,w,w];E.set(M,u*_*w)}const R=new Vt;R.setAttribute("position",new qt(b,x)),R.setAttribute("uv",new qt(T,p)),R.setAttribute("faceIndex",new qt(E,u)),e.push(R),r>Kn&&r--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function za(i,e,t){const n=new sn(i,e,t);return n.texture.mapping=pr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ji(i,e,t,n,r){i.viewport.set(e,t,n,r),i.scissor.set(e,t,n,r)}function yf(i,e,t){const n=new Float32Array(Pn),r=new I(0,1,0);return new Yt({name:"SphericalGaussianBlur",defines:{n:Pn,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Js(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:pn,depthTest:!1,depthWrite:!1})}function Ha(){return new Yt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Js(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:pn,depthTest:!1,depthWrite:!1})}function Va(){return new Yt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Js(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:pn,depthTest:!1,depthWrite:!1})}function Js(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Tf(i){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){const c=o.mapping,l=c===os||c===ls,h=c===ei||c===ti;if(l||h){let f=e.get(o);const d=f!==void 0?f.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==d)return t===null&&(t=new Ba(i)),f=l?t.fromEquirectangular(o,f):t.fromCubemap(o,f),f.texture.pmremVersion=o.pmremVersion,e.set(o,f),f.texture;if(f!==void 0)return f.texture;{const m=o.image;return l&&m&&m.height>0||h&&m&&r(m)?(t===null&&(t=new Ba(i)),f=l?t.fromEquirectangular(o):t.fromCubemap(o),f.texture.pmremVersion=o.pmremVersion,e.set(o,f),o.addEventListener("dispose",s),f.texture):null}}}return o}function r(o){let c=0;const l=6;for(let h=0;h<l;h++)o[h]!==void 0&&c++;return c===l}function s(o){const c=o.target;c.removeEventListener("dispose",s);const l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function bf(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let r;switch(n){case"WEBGL_depth_texture":r=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=i.getExtension(n)}return e[n]=r,r}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const r=t(n);return r===null&&Si("THREE.WebGLRenderer: "+n+" extension not supported."),r}}}function Af(i,e,t,n){const r={},s=new WeakMap;function a(f){const d=f.target;d.index!==null&&e.remove(d.index);for(const _ in d.attributes)e.remove(d.attributes[_]);d.removeEventListener("dispose",a),delete r[d.id];const m=s.get(d);m&&(e.remove(m),s.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function o(f,d){return r[d.id]===!0||(d.addEventListener("dispose",a),r[d.id]=!0,t.memory.geometries++),d}function c(f){const d=f.attributes;for(const m in d)e.update(d[m],i.ARRAY_BUFFER)}function l(f){const d=[],m=f.index,_=f.attributes.position;let x=0;if(m!==null){const b=m.array;x=m.version;for(let T=0,E=b.length;T<E;T+=3){const R=b[T+0],w=b[T+1],C=b[T+2];d.push(R,w,w,C,C,R)}}else if(_!==void 0){const b=_.array;x=_.version;for(let T=0,E=b.length/3-1;T<E;T+=3){const R=T+0,w=T+1,C=T+2;d.push(R,w,w,C,C,R)}}else return;const p=new(Eo(d)?Co:Ro)(d,1);p.version=x;const u=s.get(f);u&&e.remove(u),s.set(f,p)}function h(f){const d=s.get(f);if(d){const m=f.index;m!==null&&d.version<m.version&&l(f)}else l(f);return s.get(f)}return{get:o,update:c,getWireframeAttribute:h}}function wf(i,e,t){let n;function r(d){n=d}let s,a;function o(d){s=d.type,a=d.bytesPerElement}function c(d,m){i.drawElements(n,m,s,d*a),t.update(m,n,1)}function l(d,m,_){_!==0&&(i.drawElementsInstanced(n,m,s,d*a,_),t.update(m,n,_))}function h(d,m,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,m,0,s,d,0,_);let p=0;for(let u=0;u<_;u++)p+=m[u];t.update(p,n,1)}function f(d,m,_,x){if(_===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let u=0;u<d.length;u++)l(d[u]/a,m[u],x[u]);else{p.multiDrawElementsInstancedWEBGL(n,m,0,s,d,0,x,0,_);let u=0;for(let b=0;b<_;b++)u+=m[b]*x[b];t.update(u,n,1)}}this.setMode=r,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=h,this.renderMultiDrawInstances=f}function Rf(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(s/3);break;case i.LINES:t.lines+=o*(s/2);break;case i.LINE_STRIP:t.lines+=o*(s-1);break;case i.LINE_LOOP:t.lines+=o*s;break;case i.POINTS:t.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:n}}function Cf(i,e,t){const n=new WeakMap,r=new Je;function s(a,o,c){const l=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,f=h!==void 0?h.length:0;let d=n.get(o);if(d===void 0||d.count!==f){let S=function(){C.dispose(),n.delete(o),o.removeEventListener("dispose",S)};d!==void 0&&d.texture.dispose();const m=o.morphAttributes.position!==void 0,_=o.morphAttributes.normal!==void 0,x=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],u=o.morphAttributes.normal||[],b=o.morphAttributes.color||[];let T=0;m===!0&&(T=1),_===!0&&(T=2),x===!0&&(T=3);let E=o.attributes.position.count*T,R=1;E>e.maxTextureSize&&(R=Math.ceil(E/e.maxTextureSize),E=e.maxTextureSize);const w=new Float32Array(E*R*4*f),C=new yo(w,E,R,f);C.type=nn,C.needsUpdate=!0;const N=T*4;for(let M=0;M<f;M++){const D=p[M],O=u[M],H=b[M],k=E*R*4*M;for(let q=0;q<D.count;q++){const W=q*N;m===!0&&(r.fromBufferAttribute(D,q),w[k+W+0]=r.x,w[k+W+1]=r.y,w[k+W+2]=r.z,w[k+W+3]=0),_===!0&&(r.fromBufferAttribute(O,q),w[k+W+4]=r.x,w[k+W+5]=r.y,w[k+W+6]=r.z,w[k+W+7]=0),x===!0&&(r.fromBufferAttribute(H,q),w[k+W+8]=r.x,w[k+W+9]=r.y,w[k+W+10]=r.z,w[k+W+11]=H.itemSize===4?r.w:1)}}d={count:f,texture:C,size:new Xe(E,R)},n.set(o,d),o.addEventListener("dispose",S)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",a.morphTexture,t);else{let m=0;for(let x=0;x<l.length;x++)m+=l[x];const _=o.morphTargetsRelative?1:1-m;c.getUniforms().setValue(i,"morphTargetBaseInfluence",_),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",d.texture,t),c.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:s}}function Pf(i,e,t,n){let r=new WeakMap;function s(c){const l=n.render.frame,h=c.geometry,f=e.get(c,h);if(r.get(f)!==l&&(e.update(f),r.set(f,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",o)===!1&&c.addEventListener("dispose",o),r.get(c)!==l&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,l))),c.isSkinnedMesh){const d=c.skeleton;r.get(d)!==l&&(d.update(),r.set(d,l))}return f}function a(){r=new WeakMap}function o(c){const l=c.target;l.removeEventListener("dispose",o),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:s,dispose:a}}const Fo=new xt,Ga=new Zs(1,1),Oo=new yo,Bo=new js,zo=new Do,ka=[],Wa=[],Xa=new Float32Array(16),qa=new Float32Array(9),Ya=new Float32Array(4);function oi(i,e,t){const n=i[0];if(n<=0||n>0)return i;const r=e*t;let s=ka[r];if(s===void 0&&(s=new Float32Array(r),ka[r]=s),e!==0){n.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(s,o)}return s}function lt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function ct(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function _r(i,e){let t=Wa[e];t===void 0&&(t=new Int32Array(e),Wa[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function Df(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function Lf(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(lt(t,e))return;i.uniform2fv(this.addr,e),ct(t,e)}}function Uf(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(lt(t,e))return;i.uniform3fv(this.addr,e),ct(t,e)}}function If(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(lt(t,e))return;i.uniform4fv(this.addr,e),ct(t,e)}}function Nf(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(lt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),ct(t,e)}else{if(lt(t,n))return;Ya.set(n),i.uniformMatrix2fv(this.addr,!1,Ya),ct(t,n)}}function Ff(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(lt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),ct(t,e)}else{if(lt(t,n))return;qa.set(n),i.uniformMatrix3fv(this.addr,!1,qa),ct(t,n)}}function Of(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(lt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),ct(t,e)}else{if(lt(t,n))return;Xa.set(n),i.uniformMatrix4fv(this.addr,!1,Xa),ct(t,n)}}function Bf(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function zf(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(lt(t,e))return;i.uniform2iv(this.addr,e),ct(t,e)}}function Hf(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(lt(t,e))return;i.uniform3iv(this.addr,e),ct(t,e)}}function Vf(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(lt(t,e))return;i.uniform4iv(this.addr,e),ct(t,e)}}function Gf(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function kf(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(lt(t,e))return;i.uniform2uiv(this.addr,e),ct(t,e)}}function Wf(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(lt(t,e))return;i.uniform3uiv(this.addr,e),ct(t,e)}}function Xf(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(lt(t,e))return;i.uniform4uiv(this.addr,e),ct(t,e)}}function qf(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);let s;this.type===i.SAMPLER_2D_SHADOW?(Ga.compareFunction=So,s=Ga):s=Fo,t.setTexture2D(e||s,r)}function Yf(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture3D(e||Bo,r)}function jf(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTextureCube(e||zo,r)}function Kf(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2DArray(e||Oo,r)}function $f(i){switch(i){case 5126:return Df;case 35664:return Lf;case 35665:return Uf;case 35666:return If;case 35674:return Nf;case 35675:return Ff;case 35676:return Of;case 5124:case 35670:return Bf;case 35667:case 35671:return zf;case 35668:case 35672:return Hf;case 35669:case 35673:return Vf;case 5125:return Gf;case 36294:return kf;case 36295:return Wf;case 36296:return Xf;case 35678:case 36198:case 36298:case 36306:case 35682:return qf;case 35679:case 36299:case 36307:return Yf;case 35680:case 36300:case 36308:case 36293:return jf;case 36289:case 36303:case 36311:case 36292:return Kf}}function Zf(i,e){i.uniform1fv(this.addr,e)}function Jf(i,e){const t=oi(e,this.size,2);i.uniform2fv(this.addr,t)}function Qf(i,e){const t=oi(e,this.size,3);i.uniform3fv(this.addr,t)}function ed(i,e){const t=oi(e,this.size,4);i.uniform4fv(this.addr,t)}function td(i,e){const t=oi(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function nd(i,e){const t=oi(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function id(i,e){const t=oi(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function rd(i,e){i.uniform1iv(this.addr,e)}function sd(i,e){i.uniform2iv(this.addr,e)}function ad(i,e){i.uniform3iv(this.addr,e)}function od(i,e){i.uniform4iv(this.addr,e)}function ld(i,e){i.uniform1uiv(this.addr,e)}function cd(i,e){i.uniform2uiv(this.addr,e)}function ud(i,e){i.uniform3uiv(this.addr,e)}function hd(i,e){i.uniform4uiv(this.addr,e)}function fd(i,e,t){const n=this.cache,r=e.length,s=_r(t,r);lt(n,s)||(i.uniform1iv(this.addr,s),ct(n,s));for(let a=0;a!==r;++a)t.setTexture2D(e[a]||Fo,s[a])}function dd(i,e,t){const n=this.cache,r=e.length,s=_r(t,r);lt(n,s)||(i.uniform1iv(this.addr,s),ct(n,s));for(let a=0;a!==r;++a)t.setTexture3D(e[a]||Bo,s[a])}function pd(i,e,t){const n=this.cache,r=e.length,s=_r(t,r);lt(n,s)||(i.uniform1iv(this.addr,s),ct(n,s));for(let a=0;a!==r;++a)t.setTextureCube(e[a]||zo,s[a])}function md(i,e,t){const n=this.cache,r=e.length,s=_r(t,r);lt(n,s)||(i.uniform1iv(this.addr,s),ct(n,s));for(let a=0;a!==r;++a)t.setTexture2DArray(e[a]||Oo,s[a])}function gd(i){switch(i){case 5126:return Zf;case 35664:return Jf;case 35665:return Qf;case 35666:return ed;case 35674:return td;case 35675:return nd;case 35676:return id;case 5124:case 35670:return rd;case 35667:case 35671:return sd;case 35668:case 35672:return ad;case 35669:case 35673:return od;case 5125:return ld;case 36294:return cd;case 36295:return ud;case 36296:return hd;case 35678:case 36198:case 36298:case 36306:case 35682:return fd;case 35679:case 36299:case 36307:return dd;case 35680:case 36300:case 36308:case 36293:return pd;case 36289:case 36303:case 36311:case 36292:return md}}class _d{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=$f(t.type)}}class vd{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=gd(t.type)}}class xd{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(e,t[o.id],n)}}}const Zr=/(\w+)(\])?(\[|\.)?/g;function ja(i,e){i.seq.push(e),i.map[e.id]=e}function Md(i,e,t){const n=i.name,r=n.length;for(Zr.lastIndex=0;;){const s=Zr.exec(n),a=Zr.lastIndex;let o=s[1];const c=s[2]==="]",l=s[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===r){ja(t,l===void 0?new _d(o,i,e):new vd(o,i,e));break}else{let f=t.map[o];f===void 0&&(f=new xd(o),ja(t,f)),t=f}}}class rr{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){const s=e.getActiveUniform(t,r),a=e.getUniformLocation(t,s.name);Md(s,a,this)}}setValue(e,t,n,r){const s=this.map[t];s!==void 0&&s.setValue(e,n,r)}setOptional(e,t,n){const r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let s=0,a=t.length;s!==a;++s){const o=t[s],c=n[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,r)}}static seqWithValue(e,t){const n=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in t&&n.push(a)}return n}}function Ka(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const Sd=37297;let Ed=0;function yd(i,e){const t=i.split(`
`),n=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=r;a<s;a++){const o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}const $a=new Pe;function Td(i){Ve._getMatrix($a,Ve.workingColorSpace,i);const e=`mat3( ${$a.elements.map(t=>t.toFixed(4))} )`;switch(Ve.getTransfer(i)){case lr:return[e,"LinearTransferOETF"];case Ye:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function Za(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),s=(i.getShaderInfoLog(e)||"").trim();if(n&&s==="")return"";const a=/ERROR: 0:(\d+)/.exec(s);if(a){const o=parseInt(a[1]);return t.toUpperCase()+`

`+s+`

`+yd(i.getShaderSource(e),o)}else return s}function bd(i,e){const t=Td(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function Ad(i,e){let t;switch(e){case ml:t="Linear";break;case gl:t="Reinhard";break;case _l:t="Cineon";break;case vl:t="ACESFilmic";break;case Ml:t="AgX";break;case Sl:t="Neutral";break;case xl:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Qi=new I;function wd(){Ve.getLuminanceCoefficients(Qi);const i=Qi.x.toFixed(4),e=Qi.y.toFixed(4),t=Qi.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Rd(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(pi).join(`
`)}function Cd(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Pd(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){const s=i.getActiveAttrib(e,r),a=s.name;let o=1;s.type===i.FLOAT_MAT2&&(o=2),s.type===i.FLOAT_MAT3&&(o=3),s.type===i.FLOAT_MAT4&&(o=4),t[a]={type:s.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function pi(i){return i!==""}function Ja(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Qa(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Dd=/^[ \t]*#include +<([\w\d./]+)>/gm;function Bs(i){return i.replace(Dd,Ud)}const Ld=new Map;function Ud(i,e){let t=Ne[e];if(t===void 0){const n=Ld.get(e);if(n!==void 0)t=Ne[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Bs(t)}const Id=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function eo(i){return i.replace(Id,Nd)}function Nd(i,e,t,n){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function to(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Fd(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===uo?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===jo?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===en&&(e="SHADOWMAP_TYPE_VSM"),e}function Od(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case ei:case ti:e="ENVMAP_TYPE_CUBE";break;case pr:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Bd(i){let e="ENVMAP_MODE_REFLECTION";return i.envMap&&i.envMapMode===ti&&(e="ENVMAP_MODE_REFRACTION"),e}function zd(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case ho:e="ENVMAP_BLENDING_MULTIPLY";break;case dl:e="ENVMAP_BLENDING_MIX";break;case pl:e="ENVMAP_BLENDING_ADD";break}return e}function Hd(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function Vd(i,e,t,n){const r=i.getContext(),s=t.defines;let a=t.vertexShader,o=t.fragmentShader;const c=Fd(t),l=Od(t),h=Bd(t),f=zd(t),d=Hd(t),m=Rd(t),_=Cd(s),x=r.createProgram();let p,u,b=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(pi).join(`
`),p.length>0&&(p+=`
`),u=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(pi).join(`
`),u.length>0&&(u+=`
`)):(p=[to(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(pi).join(`
`),u=[to(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+h:"",t.envMap?"#define "+f:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==mn?"#define TONE_MAPPING":"",t.toneMapping!==mn?Ne.tonemapping_pars_fragment:"",t.toneMapping!==mn?Ad("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ne.colorspace_pars_fragment,bd("linearToOutputTexel",t.outputColorSpace),wd(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(pi).join(`
`)),a=Bs(a),a=Ja(a,t),a=Qa(a,t),o=Bs(o),o=Ja(o,t),o=Qa(o,t),a=eo(a),o=eo(o),t.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,p=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,u=["#define varying in",t.glslVersion===cr?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===cr?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+u);const T=b+p+a,E=b+u+o,R=Ka(r,r.VERTEX_SHADER,T),w=Ka(r,r.FRAGMENT_SHADER,E);r.attachShader(x,R),r.attachShader(x,w),t.index0AttributeName!==void 0?r.bindAttribLocation(x,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(x,0,"position"),r.linkProgram(x);function C(D){if(i.debug.checkShaderErrors){const O=r.getProgramInfoLog(x)||"",H=r.getShaderInfoLog(R)||"",k=r.getShaderInfoLog(w)||"",q=O.trim(),W=H.trim(),te=k.trim();let V=!0,se=!0;if(r.getProgramParameter(x,r.LINK_STATUS)===!1)if(V=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,x,R,w);else{const ce=Za(r,R,"vertex"),Ee=Za(r,w,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(x,r.VALIDATE_STATUS)+`

Material Name: `+D.name+`
Material Type: `+D.type+`

Program Info Log: `+q+`
`+ce+`
`+Ee)}else q!==""?console.warn("THREE.WebGLProgram: Program Info Log:",q):(W===""||te==="")&&(se=!1);se&&(D.diagnostics={runnable:V,programLog:q,vertexShader:{log:W,prefix:p},fragmentShader:{log:te,prefix:u}})}r.deleteShader(R),r.deleteShader(w),N=new rr(r,x),S=Pd(r,x)}let N;this.getUniforms=function(){return N===void 0&&C(this),N};let S;this.getAttributes=function(){return S===void 0&&C(this),S};let M=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=r.getProgramParameter(x,Sd)),M},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(x),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Ed++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=R,this.fragmentShader=w,this}let Gd=0;class kd{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new Wd(e),t.set(e,n)),n}}class Wd{constructor(e){this.id=Gd++,this.code=e,this.usedTimes=0}}function Xd(i,e,t,n,r,s,a){const o=new bo,c=new kd,l=new Set,h=[],f=r.logarithmicDepthBuffer,d=r.vertexTextures;let m=r.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(S){return l.add(S),S===0?"uv":`uv${S}`}function p(S,M,D,O,H){const k=O.fog,q=H.geometry,W=S.isMeshStandardMaterial?O.environment:null,te=(S.isMeshStandardMaterial?t:e).get(S.envMap||W),V=te&&te.mapping===pr?te.image.height:null,se=_[S.type];S.precision!==null&&(m=r.getMaxPrecision(S.precision),m!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",m,"instead."));const ce=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,Ee=ce!==void 0?ce.length:0;let Fe=0;q.morphAttributes.position!==void 0&&(Fe=1),q.morphAttributes.normal!==void 0&&(Fe=2),q.morphAttributes.color!==void 0&&(Fe=3);let Ke,Qe,ke,Y;if(se){const We=kt[se];Ke=We.vertexShader,Qe=We.fragmentShader}else Ke=S.vertexShader,Qe=S.fragmentShader,c.update(S),ke=c.getVertexShaderID(S),Y=c.getFragmentShaderID(S);const $=i.getRenderTarget(),fe=i.state.buffers.depth.getReversed(),Ce=H.isInstancedMesh===!0,Se=H.isBatchedMesh===!0,ze=!!S.map,ft=!!S.matcap,A=!!te,et=!!S.aoMap,Le=!!S.lightMap,we=!!S.bumpMap,me=!!S.normalMap,tt=!!S.displacementMap,ge=!!S.emissiveMap,Ie=!!S.metalnessMap,ut=!!S.roughnessMap,at=S.anisotropy>0,y=S.clearcoat>0,g=S.dispersion>0,F=S.iridescence>0,X=S.sheen>0,K=S.transmission>0,G=at&&!!S.anisotropyMap,Me=y&&!!S.clearcoatMap,ne=y&&!!S.clearcoatNormalMap,_e=y&&!!S.clearcoatRoughnessMap,ve=F&&!!S.iridescenceMap,Q=F&&!!S.iridescenceThicknessMap,le=X&&!!S.sheenColorMap,Ae=X&&!!S.sheenRoughnessMap,xe=!!S.specularMap,ae=!!S.specularColorMap,Ue=!!S.specularIntensityMap,P=K&&!!S.transmissionMap,ee=K&&!!S.thicknessMap,ie=!!S.gradientMap,he=!!S.alphaMap,Z=S.alphaTest>0,j=!!S.alphaHash,pe=!!S.extensions;let De=mn;S.toneMapped&&($===null||$.isXRRenderTarget===!0)&&(De=i.toneMapping);const $e={shaderID:se,shaderType:S.type,shaderName:S.name,vertexShader:Ke,fragmentShader:Qe,defines:S.defines,customVertexShaderID:ke,customFragmentShaderID:Y,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:m,batching:Se,batchingColor:Se&&H._colorsTexture!==null,instancing:Ce,instancingColor:Ce&&H.instanceColor!==null,instancingMorph:Ce&&H.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:$===null?i.outputColorSpace:$.isXRRenderTarget===!0?$.texture.colorSpace:ni,alphaToCoverage:!!S.alphaToCoverage,map:ze,matcap:ft,envMap:A,envMapMode:A&&te.mapping,envMapCubeUVHeight:V,aoMap:et,lightMap:Le,bumpMap:we,normalMap:me,displacementMap:d&&tt,emissiveMap:ge,normalMapObjectSpace:me&&S.normalMapType===Al,normalMapTangentSpace:me&&S.normalMapType===bl,metalnessMap:Ie,roughnessMap:ut,anisotropy:at,anisotropyMap:G,clearcoat:y,clearcoatMap:Me,clearcoatNormalMap:ne,clearcoatRoughnessMap:_e,dispersion:g,iridescence:F,iridescenceMap:ve,iridescenceThicknessMap:Q,sheen:X,sheenColorMap:le,sheenRoughnessMap:Ae,specularMap:xe,specularColorMap:ae,specularIntensityMap:Ue,transmission:K,transmissionMap:P,thicknessMap:ee,gradientMap:ie,opaque:S.transparent===!1&&S.blending===$n&&S.alphaToCoverage===!1,alphaMap:he,alphaTest:Z,alphaHash:j,combine:S.combine,mapUv:ze&&x(S.map.channel),aoMapUv:et&&x(S.aoMap.channel),lightMapUv:Le&&x(S.lightMap.channel),bumpMapUv:we&&x(S.bumpMap.channel),normalMapUv:me&&x(S.normalMap.channel),displacementMapUv:tt&&x(S.displacementMap.channel),emissiveMapUv:ge&&x(S.emissiveMap.channel),metalnessMapUv:Ie&&x(S.metalnessMap.channel),roughnessMapUv:ut&&x(S.roughnessMap.channel),anisotropyMapUv:G&&x(S.anisotropyMap.channel),clearcoatMapUv:Me&&x(S.clearcoatMap.channel),clearcoatNormalMapUv:ne&&x(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:_e&&x(S.clearcoatRoughnessMap.channel),iridescenceMapUv:ve&&x(S.iridescenceMap.channel),iridescenceThicknessMapUv:Q&&x(S.iridescenceThicknessMap.channel),sheenColorMapUv:le&&x(S.sheenColorMap.channel),sheenRoughnessMapUv:Ae&&x(S.sheenRoughnessMap.channel),specularMapUv:xe&&x(S.specularMap.channel),specularColorMapUv:ae&&x(S.specularColorMap.channel),specularIntensityMapUv:Ue&&x(S.specularIntensityMap.channel),transmissionMapUv:P&&x(S.transmissionMap.channel),thicknessMapUv:ee&&x(S.thicknessMap.channel),alphaMapUv:he&&x(S.alphaMap.channel),vertexTangents:!!q.attributes.tangent&&(me||at),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,pointsUvs:H.isPoints===!0&&!!q.attributes.uv&&(ze||he),fog:!!k,useFog:S.fog===!0,fogExp2:!!k&&k.isFogExp2,flatShading:S.flatShading===!0&&S.wireframe===!1,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:fe,skinning:H.isSkinnedMesh===!0,morphTargets:q.morphAttributes.position!==void 0,morphNormals:q.morphAttributes.normal!==void 0,morphColors:q.morphAttributes.color!==void 0,morphTargetsCount:Ee,morphTextureStride:Fe,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:S.dithering,shadowMapEnabled:i.shadowMap.enabled&&D.length>0,shadowMapType:i.shadowMap.type,toneMapping:De,decodeVideoTexture:ze&&S.map.isVideoTexture===!0&&Ve.getTransfer(S.map.colorSpace)===Ye,decodeVideoTextureEmissive:ge&&S.emissiveMap.isVideoTexture===!0&&Ve.getTransfer(S.emissiveMap.colorSpace)===Ye,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===tn,flipSided:S.side===St,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:pe&&S.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(pe&&S.extensions.multiDraw===!0||Se)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return $e.vertexUv1s=l.has(1),$e.vertexUv2s=l.has(2),$e.vertexUv3s=l.has(3),l.clear(),$e}function u(S){const M=[];if(S.shaderID?M.push(S.shaderID):(M.push(S.customVertexShaderID),M.push(S.customFragmentShaderID)),S.defines!==void 0)for(const D in S.defines)M.push(D),M.push(S.defines[D]);return S.isRawShaderMaterial===!1&&(b(M,S),T(M,S),M.push(i.outputColorSpace)),M.push(S.customProgramCacheKey),M.join()}function b(S,M){S.push(M.precision),S.push(M.outputColorSpace),S.push(M.envMapMode),S.push(M.envMapCubeUVHeight),S.push(M.mapUv),S.push(M.alphaMapUv),S.push(M.lightMapUv),S.push(M.aoMapUv),S.push(M.bumpMapUv),S.push(M.normalMapUv),S.push(M.displacementMapUv),S.push(M.emissiveMapUv),S.push(M.metalnessMapUv),S.push(M.roughnessMapUv),S.push(M.anisotropyMapUv),S.push(M.clearcoatMapUv),S.push(M.clearcoatNormalMapUv),S.push(M.clearcoatRoughnessMapUv),S.push(M.iridescenceMapUv),S.push(M.iridescenceThicknessMapUv),S.push(M.sheenColorMapUv),S.push(M.sheenRoughnessMapUv),S.push(M.specularMapUv),S.push(M.specularColorMapUv),S.push(M.specularIntensityMapUv),S.push(M.transmissionMapUv),S.push(M.thicknessMapUv),S.push(M.combine),S.push(M.fogExp2),S.push(M.sizeAttenuation),S.push(M.morphTargetsCount),S.push(M.morphAttributeCount),S.push(M.numDirLights),S.push(M.numPointLights),S.push(M.numSpotLights),S.push(M.numSpotLightMaps),S.push(M.numHemiLights),S.push(M.numRectAreaLights),S.push(M.numDirLightShadows),S.push(M.numPointLightShadows),S.push(M.numSpotLightShadows),S.push(M.numSpotLightShadowsWithMaps),S.push(M.numLightProbes),S.push(M.shadowMapType),S.push(M.toneMapping),S.push(M.numClippingPlanes),S.push(M.numClipIntersection),S.push(M.depthPacking)}function T(S,M){o.disableAll(),M.supportsVertexTextures&&o.enable(0),M.instancing&&o.enable(1),M.instancingColor&&o.enable(2),M.instancingMorph&&o.enable(3),M.matcap&&o.enable(4),M.envMap&&o.enable(5),M.normalMapObjectSpace&&o.enable(6),M.normalMapTangentSpace&&o.enable(7),M.clearcoat&&o.enable(8),M.iridescence&&o.enable(9),M.alphaTest&&o.enable(10),M.vertexColors&&o.enable(11),M.vertexAlphas&&o.enable(12),M.vertexUv1s&&o.enable(13),M.vertexUv2s&&o.enable(14),M.vertexUv3s&&o.enable(15),M.vertexTangents&&o.enable(16),M.anisotropy&&o.enable(17),M.alphaHash&&o.enable(18),M.batching&&o.enable(19),M.dispersion&&o.enable(20),M.batchingColor&&o.enable(21),M.gradientMap&&o.enable(22),S.push(o.mask),o.disableAll(),M.fog&&o.enable(0),M.useFog&&o.enable(1),M.flatShading&&o.enable(2),M.logarithmicDepthBuffer&&o.enable(3),M.reversedDepthBuffer&&o.enable(4),M.skinning&&o.enable(5),M.morphTargets&&o.enable(6),M.morphNormals&&o.enable(7),M.morphColors&&o.enable(8),M.premultipliedAlpha&&o.enable(9),M.shadowMapEnabled&&o.enable(10),M.doubleSided&&o.enable(11),M.flipSided&&o.enable(12),M.useDepthPacking&&o.enable(13),M.dithering&&o.enable(14),M.transmission&&o.enable(15),M.sheen&&o.enable(16),M.opaque&&o.enable(17),M.pointsUvs&&o.enable(18),M.decodeVideoTexture&&o.enable(19),M.decodeVideoTextureEmissive&&o.enable(20),M.alphaToCoverage&&o.enable(21),S.push(o.mask)}function E(S){const M=_[S.type];let D;if(M){const O=kt[M];D=gc.clone(O.uniforms)}else D=S.uniforms;return D}function R(S,M){let D;for(let O=0,H=h.length;O<H;O++){const k=h[O];if(k.cacheKey===M){D=k,++D.usedTimes;break}}return D===void 0&&(D=new Vd(i,M,S,s),h.push(D)),D}function w(S){if(--S.usedTimes===0){const M=h.indexOf(S);h[M]=h[h.length-1],h.pop(),S.destroy()}}function C(S){c.remove(S)}function N(){c.dispose()}return{getParameters:p,getProgramCacheKey:u,getUniforms:E,acquireProgram:R,releaseProgram:w,releaseShaderCache:C,programs:h,dispose:N}}function qd(){let i=new WeakMap;function e(a){return i.has(a)}function t(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function r(a,o,c){i.get(a)[o]=c}function s(){i=new WeakMap}return{has:e,get:t,remove:n,update:r,dispose:s}}function Yd(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function no(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function io(){const i=[];let e=0;const t=[],n=[],r=[];function s(){e=0,t.length=0,n.length=0,r.length=0}function a(f,d,m,_,x,p){let u=i[e];return u===void 0?(u={id:f.id,object:f,geometry:d,material:m,groupOrder:_,renderOrder:f.renderOrder,z:x,group:p},i[e]=u):(u.id=f.id,u.object=f,u.geometry=d,u.material=m,u.groupOrder=_,u.renderOrder=f.renderOrder,u.z=x,u.group=p),e++,u}function o(f,d,m,_,x,p){const u=a(f,d,m,_,x,p);m.transmission>0?n.push(u):m.transparent===!0?r.push(u):t.push(u)}function c(f,d,m,_,x,p){const u=a(f,d,m,_,x,p);m.transmission>0?n.unshift(u):m.transparent===!0?r.unshift(u):t.unshift(u)}function l(f,d){t.length>1&&t.sort(f||Yd),n.length>1&&n.sort(d||no),r.length>1&&r.sort(d||no)}function h(){for(let f=e,d=i.length;f<d;f++){const m=i[f];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:n,transparent:r,init:s,push:o,unshift:c,finish:h,sort:l}}function jd(){let i=new WeakMap;function e(n,r){const s=i.get(n);let a;return s===void 0?(a=new io,i.set(n,[a])):r>=s.length?(a=new io,s.push(a)):a=s[r],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function Kd(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new I,color:new Ge};break;case"SpotLight":t={position:new I,direction:new I,color:new Ge,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new I,color:new Ge,distance:0,decay:0};break;case"HemisphereLight":t={direction:new I,skyColor:new Ge,groundColor:new Ge};break;case"RectAreaLight":t={color:new Ge,position:new I,halfWidth:new I,halfHeight:new I};break}return i[e.id]=t,t}}}function $d(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xe};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xe};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xe,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let Zd=0;function Jd(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function Qd(i){const e=new Kd,t=$d(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new I);const r=new I,s=new nt,a=new nt;function o(l){let h=0,f=0,d=0;for(let S=0;S<9;S++)n.probe[S].set(0,0,0);let m=0,_=0,x=0,p=0,u=0,b=0,T=0,E=0,R=0,w=0,C=0;l.sort(Jd);for(let S=0,M=l.length;S<M;S++){const D=l[S],O=D.color,H=D.intensity,k=D.distance,q=D.shadow&&D.shadow.map?D.shadow.map.texture:null;if(D.isAmbientLight)h+=O.r*H,f+=O.g*H,d+=O.b*H;else if(D.isLightProbe){for(let W=0;W<9;W++)n.probe[W].addScaledVector(D.sh.coefficients[W],H);C++}else if(D.isDirectionalLight){const W=e.get(D);if(W.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){const te=D.shadow,V=t.get(D);V.shadowIntensity=te.intensity,V.shadowBias=te.bias,V.shadowNormalBias=te.normalBias,V.shadowRadius=te.radius,V.shadowMapSize=te.mapSize,n.directionalShadow[m]=V,n.directionalShadowMap[m]=q,n.directionalShadowMatrix[m]=D.shadow.matrix,b++}n.directional[m]=W,m++}else if(D.isSpotLight){const W=e.get(D);W.position.setFromMatrixPosition(D.matrixWorld),W.color.copy(O).multiplyScalar(H),W.distance=k,W.coneCos=Math.cos(D.angle),W.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),W.decay=D.decay,n.spot[x]=W;const te=D.shadow;if(D.map&&(n.spotLightMap[R]=D.map,R++,te.updateMatrices(D),D.castShadow&&w++),n.spotLightMatrix[x]=te.matrix,D.castShadow){const V=t.get(D);V.shadowIntensity=te.intensity,V.shadowBias=te.bias,V.shadowNormalBias=te.normalBias,V.shadowRadius=te.radius,V.shadowMapSize=te.mapSize,n.spotShadow[x]=V,n.spotShadowMap[x]=q,E++}x++}else if(D.isRectAreaLight){const W=e.get(D);W.color.copy(O).multiplyScalar(H),W.halfWidth.set(D.width*.5,0,0),W.halfHeight.set(0,D.height*.5,0),n.rectArea[p]=W,p++}else if(D.isPointLight){const W=e.get(D);if(W.color.copy(D.color).multiplyScalar(D.intensity),W.distance=D.distance,W.decay=D.decay,D.castShadow){const te=D.shadow,V=t.get(D);V.shadowIntensity=te.intensity,V.shadowBias=te.bias,V.shadowNormalBias=te.normalBias,V.shadowRadius=te.radius,V.shadowMapSize=te.mapSize,V.shadowCameraNear=te.camera.near,V.shadowCameraFar=te.camera.far,n.pointShadow[_]=V,n.pointShadowMap[_]=q,n.pointShadowMatrix[_]=D.shadow.matrix,T++}n.point[_]=W,_++}else if(D.isHemisphereLight){const W=e.get(D);W.skyColor.copy(D.color).multiplyScalar(H),W.groundColor.copy(D.groundColor).multiplyScalar(H),n.hemi[u]=W,u++}}p>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=re.LTC_FLOAT_1,n.rectAreaLTC2=re.LTC_FLOAT_2):(n.rectAreaLTC1=re.LTC_HALF_1,n.rectAreaLTC2=re.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=f,n.ambient[2]=d;const N=n.hash;(N.directionalLength!==m||N.pointLength!==_||N.spotLength!==x||N.rectAreaLength!==p||N.hemiLength!==u||N.numDirectionalShadows!==b||N.numPointShadows!==T||N.numSpotShadows!==E||N.numSpotMaps!==R||N.numLightProbes!==C)&&(n.directional.length=m,n.spot.length=x,n.rectArea.length=p,n.point.length=_,n.hemi.length=u,n.directionalShadow.length=b,n.directionalShadowMap.length=b,n.pointShadow.length=T,n.pointShadowMap.length=T,n.spotShadow.length=E,n.spotShadowMap.length=E,n.directionalShadowMatrix.length=b,n.pointShadowMatrix.length=T,n.spotLightMatrix.length=E+R-w,n.spotLightMap.length=R,n.numSpotLightShadowsWithMaps=w,n.numLightProbes=C,N.directionalLength=m,N.pointLength=_,N.spotLength=x,N.rectAreaLength=p,N.hemiLength=u,N.numDirectionalShadows=b,N.numPointShadows=T,N.numSpotShadows=E,N.numSpotMaps=R,N.numLightProbes=C,n.version=Zd++)}function c(l,h){let f=0,d=0,m=0,_=0,x=0;const p=h.matrixWorldInverse;for(let u=0,b=l.length;u<b;u++){const T=l[u];if(T.isDirectionalLight){const E=n.directional[f];E.direction.setFromMatrixPosition(T.matrixWorld),r.setFromMatrixPosition(T.target.matrixWorld),E.direction.sub(r),E.direction.transformDirection(p),f++}else if(T.isSpotLight){const E=n.spot[m];E.position.setFromMatrixPosition(T.matrixWorld),E.position.applyMatrix4(p),E.direction.setFromMatrixPosition(T.matrixWorld),r.setFromMatrixPosition(T.target.matrixWorld),E.direction.sub(r),E.direction.transformDirection(p),m++}else if(T.isRectAreaLight){const E=n.rectArea[_];E.position.setFromMatrixPosition(T.matrixWorld),E.position.applyMatrix4(p),a.identity(),s.copy(T.matrixWorld),s.premultiply(p),a.extractRotation(s),E.halfWidth.set(T.width*.5,0,0),E.halfHeight.set(0,T.height*.5,0),E.halfWidth.applyMatrix4(a),E.halfHeight.applyMatrix4(a),_++}else if(T.isPointLight){const E=n.point[d];E.position.setFromMatrixPosition(T.matrixWorld),E.position.applyMatrix4(p),d++}else if(T.isHemisphereLight){const E=n.hemi[x];E.direction.setFromMatrixPosition(T.matrixWorld),E.direction.transformDirection(p),x++}}}return{setup:o,setupView:c,state:n}}function ro(i){const e=new Qd(i),t=[],n=[];function r(h){l.camera=h,t.length=0,n.length=0}function s(h){t.push(h)}function a(h){n.push(h)}function o(){e.setup(t)}function c(h){e.setupView(t,h)}const l={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:l,setupLights:o,setupLightsView:c,pushLight:s,pushShadow:a}}function ep(i){let e=new WeakMap;function t(r,s=0){const a=e.get(r);let o;return a===void 0?(o=new ro(i),e.set(r,[o])):s>=a.length?(o=new ro(i),a.push(o)):o=a[s],o}function n(){e=new WeakMap}return{get:t,dispose:n}}const tp=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,np=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function ip(i,e,t){let n=new $s;const r=new Xe,s=new Xe,a=new Je,o=new Rc({depthPacking:Tl}),c=new Cc,l={},h=t.maxTextureSize,f={[gn]:St,[St]:gn,[tn]:tn},d=new Yt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Xe},radius:{value:4}},vertexShader:tp,fragmentShader:np}),m=d.clone();m.defines.HORIZONTAL_PASS=1;const _=new Vt;_.setAttribute("position",new qt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new Ht(_,d),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=uo;let u=this.type;this.render=function(w,C,N){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||w.length===0)return;const S=i.getRenderTarget(),M=i.getActiveCubeFace(),D=i.getActiveMipmapLevel(),O=i.state;O.setBlending(pn),O.buffers.depth.getReversed()===!0?O.buffers.color.setClear(0,0,0,0):O.buffers.color.setClear(1,1,1,1),O.buffers.depth.setTest(!0),O.setScissorTest(!1);const H=u!==en&&this.type===en,k=u===en&&this.type!==en;for(let q=0,W=w.length;q<W;q++){const te=w[q],V=te.shadow;if(V===void 0){console.warn("THREE.WebGLShadowMap:",te,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;r.copy(V.mapSize);const se=V.getFrameExtents();if(r.multiply(se),s.copy(V.mapSize),(r.x>h||r.y>h)&&(r.x>h&&(s.x=Math.floor(h/se.x),r.x=s.x*se.x,V.mapSize.x=s.x),r.y>h&&(s.y=Math.floor(h/se.y),r.y=s.y*se.y,V.mapSize.y=s.y)),V.map===null||H===!0||k===!0){const Ee=this.type!==en?{minFilter:Rt,magFilter:Rt}:{};V.map!==null&&V.map.dispose(),V.map=new sn(r.x,r.y,Ee),V.map.texture.name=te.name+".shadowMap",V.camera.updateProjectionMatrix()}i.setRenderTarget(V.map),i.clear();const ce=V.getViewportCount();for(let Ee=0;Ee<ce;Ee++){const Fe=V.getViewport(Ee);a.set(s.x*Fe.x,s.y*Fe.y,s.x*Fe.z,s.y*Fe.w),O.viewport(a),V.updateMatrices(te,Ee),n=V.getFrustum(),E(C,N,V.camera,te,this.type)}V.isPointLightShadow!==!0&&this.type===en&&b(V,N),V.needsUpdate=!1}u=this.type,p.needsUpdate=!1,i.setRenderTarget(S,M,D)};function b(w,C){const N=e.update(x);d.defines.VSM_SAMPLES!==w.blurSamples&&(d.defines.VSM_SAMPLES=w.blurSamples,m.defines.VSM_SAMPLES=w.blurSamples,d.needsUpdate=!0,m.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new sn(r.x,r.y)),d.uniforms.shadow_pass.value=w.map.texture,d.uniforms.resolution.value=w.mapSize,d.uniforms.radius.value=w.radius,i.setRenderTarget(w.mapPass),i.clear(),i.renderBufferDirect(C,null,N,d,x,null),m.uniforms.shadow_pass.value=w.mapPass.texture,m.uniforms.resolution.value=w.mapSize,m.uniforms.radius.value=w.radius,i.setRenderTarget(w.map),i.clear(),i.renderBufferDirect(C,null,N,m,x,null)}function T(w,C,N,S){let M=null;const D=N.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(D!==void 0)M=D;else if(M=N.isPointLight===!0?c:o,i.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0||C.alphaToCoverage===!0){const O=M.uuid,H=C.uuid;let k=l[O];k===void 0&&(k={},l[O]=k);let q=k[H];q===void 0&&(q=M.clone(),k[H]=q,C.addEventListener("dispose",R)),M=q}if(M.visible=C.visible,M.wireframe=C.wireframe,S===en?M.side=C.shadowSide!==null?C.shadowSide:C.side:M.side=C.shadowSide!==null?C.shadowSide:f[C.side],M.alphaMap=C.alphaMap,M.alphaTest=C.alphaToCoverage===!0?.5:C.alphaTest,M.map=C.map,M.clipShadows=C.clipShadows,M.clippingPlanes=C.clippingPlanes,M.clipIntersection=C.clipIntersection,M.displacementMap=C.displacementMap,M.displacementScale=C.displacementScale,M.displacementBias=C.displacementBias,M.wireframeLinewidth=C.wireframeLinewidth,M.linewidth=C.linewidth,N.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const O=i.properties.get(M);O.light=N}return M}function E(w,C,N,S,M){if(w.visible===!1)return;if(w.layers.test(C.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&M===en)&&(!w.frustumCulled||n.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(N.matrixWorldInverse,w.matrixWorld);const H=e.update(w),k=w.material;if(Array.isArray(k)){const q=H.groups;for(let W=0,te=q.length;W<te;W++){const V=q[W],se=k[V.materialIndex];if(se&&se.visible){const ce=T(w,se,S,M);w.onBeforeShadow(i,w,C,N,H,ce,V),i.renderBufferDirect(N,null,H,ce,w,V),w.onAfterShadow(i,w,C,N,H,ce,V)}}}else if(k.visible){const q=T(w,k,S,M);w.onBeforeShadow(i,w,C,N,H,q,null),i.renderBufferDirect(N,null,H,q,w,null),w.onAfterShadow(i,w,C,N,H,q,null)}}const O=w.children;for(let H=0,k=O.length;H<k;H++)E(O[H],C,N,S,M)}function R(w){w.target.removeEventListener("dispose",R);for(const N in l){const S=l[N],M=w.target.uuid;M in S&&(S[M].dispose(),delete S[M])}}}const rp={[es]:ts,[ns]:ss,[is]:as,[Qn]:rs,[ts]:es,[ss]:ns,[as]:is,[rs]:Qn};function sp(i,e){function t(){let P=!1;const ee=new Je;let ie=null;const he=new Je(0,0,0,0);return{setMask:function(Z){ie!==Z&&!P&&(i.colorMask(Z,Z,Z,Z),ie=Z)},setLocked:function(Z){P=Z},setClear:function(Z,j,pe,De,$e){$e===!0&&(Z*=De,j*=De,pe*=De),ee.set(Z,j,pe,De),he.equals(ee)===!1&&(i.clearColor(Z,j,pe,De),he.copy(ee))},reset:function(){P=!1,ie=null,he.set(-1,0,0,0)}}}function n(){let P=!1,ee=!1,ie=null,he=null,Z=null;return{setReversed:function(j){if(ee!==j){const pe=e.get("EXT_clip_control");j?pe.clipControlEXT(pe.LOWER_LEFT_EXT,pe.ZERO_TO_ONE_EXT):pe.clipControlEXT(pe.LOWER_LEFT_EXT,pe.NEGATIVE_ONE_TO_ONE_EXT),ee=j;const De=Z;Z=null,this.setClear(De)}},getReversed:function(){return ee},setTest:function(j){j?$(i.DEPTH_TEST):fe(i.DEPTH_TEST)},setMask:function(j){ie!==j&&!P&&(i.depthMask(j),ie=j)},setFunc:function(j){if(ee&&(j=rp[j]),he!==j){switch(j){case es:i.depthFunc(i.NEVER);break;case ts:i.depthFunc(i.ALWAYS);break;case ns:i.depthFunc(i.LESS);break;case Qn:i.depthFunc(i.LEQUAL);break;case is:i.depthFunc(i.EQUAL);break;case rs:i.depthFunc(i.GEQUAL);break;case ss:i.depthFunc(i.GREATER);break;case as:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}he=j}},setLocked:function(j){P=j},setClear:function(j){Z!==j&&(ee&&(j=1-j),i.clearDepth(j),Z=j)},reset:function(){P=!1,ie=null,he=null,Z=null,ee=!1}}}function r(){let P=!1,ee=null,ie=null,he=null,Z=null,j=null,pe=null,De=null,$e=null;return{setTest:function(We){P||(We?$(i.STENCIL_TEST):fe(i.STENCIL_TEST))},setMask:function(We){ee!==We&&!P&&(i.stencilMask(We),ee=We)},setFunc:function(We,jt,Gt){(ie!==We||he!==jt||Z!==Gt)&&(i.stencilFunc(We,jt,Gt),ie=We,he=jt,Z=Gt)},setOp:function(We,jt,Gt){(j!==We||pe!==jt||De!==Gt)&&(i.stencilOp(We,jt,Gt),j=We,pe=jt,De=Gt)},setLocked:function(We){P=We},setClear:function(We){$e!==We&&(i.clearStencil(We),$e=We)},reset:function(){P=!1,ee=null,ie=null,he=null,Z=null,j=null,pe=null,De=null,$e=null}}}const s=new t,a=new n,o=new r,c=new WeakMap,l=new WeakMap;let h={},f={},d=new WeakMap,m=[],_=null,x=!1,p=null,u=null,b=null,T=null,E=null,R=null,w=null,C=new Ge(0,0,0),N=0,S=!1,M=null,D=null,O=null,H=null,k=null;const q=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let W=!1,te=0;const V=i.getParameter(i.VERSION);V.indexOf("WebGL")!==-1?(te=parseFloat(/^WebGL (\d)/.exec(V)[1]),W=te>=1):V.indexOf("OpenGL ES")!==-1&&(te=parseFloat(/^OpenGL ES (\d)/.exec(V)[1]),W=te>=2);let se=null,ce={};const Ee=i.getParameter(i.SCISSOR_BOX),Fe=i.getParameter(i.VIEWPORT),Ke=new Je().fromArray(Ee),Qe=new Je().fromArray(Fe);function ke(P,ee,ie,he){const Z=new Uint8Array(4),j=i.createTexture();i.bindTexture(P,j),i.texParameteri(P,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(P,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let pe=0;pe<ie;pe++)P===i.TEXTURE_3D||P===i.TEXTURE_2D_ARRAY?i.texImage3D(ee,0,i.RGBA,1,1,he,0,i.RGBA,i.UNSIGNED_BYTE,Z):i.texImage2D(ee+pe,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Z);return j}const Y={};Y[i.TEXTURE_2D]=ke(i.TEXTURE_2D,i.TEXTURE_2D,1),Y[i.TEXTURE_CUBE_MAP]=ke(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),Y[i.TEXTURE_2D_ARRAY]=ke(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Y[i.TEXTURE_3D]=ke(i.TEXTURE_3D,i.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),$(i.DEPTH_TEST),a.setFunc(Qn),we(!1),me(sa),$(i.CULL_FACE),et(pn);function $(P){h[P]!==!0&&(i.enable(P),h[P]=!0)}function fe(P){h[P]!==!1&&(i.disable(P),h[P]=!1)}function Ce(P,ee){return f[P]!==ee?(i.bindFramebuffer(P,ee),f[P]=ee,P===i.DRAW_FRAMEBUFFER&&(f[i.FRAMEBUFFER]=ee),P===i.FRAMEBUFFER&&(f[i.DRAW_FRAMEBUFFER]=ee),!0):!1}function Se(P,ee){let ie=m,he=!1;if(P){ie=d.get(ee),ie===void 0&&(ie=[],d.set(ee,ie));const Z=P.textures;if(ie.length!==Z.length||ie[0]!==i.COLOR_ATTACHMENT0){for(let j=0,pe=Z.length;j<pe;j++)ie[j]=i.COLOR_ATTACHMENT0+j;ie.length=Z.length,he=!0}}else ie[0]!==i.BACK&&(ie[0]=i.BACK,he=!0);he&&i.drawBuffers(ie)}function ze(P){return _!==P?(i.useProgram(P),_=P,!0):!1}const ft={[Cn]:i.FUNC_ADD,[$o]:i.FUNC_SUBTRACT,[Zo]:i.FUNC_REVERSE_SUBTRACT};ft[Jo]=i.MIN,ft[Qo]=i.MAX;const A={[el]:i.ZERO,[tl]:i.ONE,[nl]:i.SRC_COLOR,[Jr]:i.SRC_ALPHA,[ll]:i.SRC_ALPHA_SATURATE,[al]:i.DST_COLOR,[rl]:i.DST_ALPHA,[il]:i.ONE_MINUS_SRC_COLOR,[Qr]:i.ONE_MINUS_SRC_ALPHA,[ol]:i.ONE_MINUS_DST_COLOR,[sl]:i.ONE_MINUS_DST_ALPHA,[cl]:i.CONSTANT_COLOR,[ul]:i.ONE_MINUS_CONSTANT_COLOR,[hl]:i.CONSTANT_ALPHA,[fl]:i.ONE_MINUS_CONSTANT_ALPHA};function et(P,ee,ie,he,Z,j,pe,De,$e,We){if(P===pn){x===!0&&(fe(i.BLEND),x=!1);return}if(x===!1&&($(i.BLEND),x=!0),P!==Ko){if(P!==p||We!==S){if((u!==Cn||E!==Cn)&&(i.blendEquation(i.FUNC_ADD),u=Cn,E=Cn),We)switch(P){case $n:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case aa:i.blendFunc(i.ONE,i.ONE);break;case oa:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case la:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}else switch(P){case $n:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case aa:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case oa:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case la:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}b=null,T=null,R=null,w=null,C.set(0,0,0),N=0,p=P,S=We}return}Z=Z||ee,j=j||ie,pe=pe||he,(ee!==u||Z!==E)&&(i.blendEquationSeparate(ft[ee],ft[Z]),u=ee,E=Z),(ie!==b||he!==T||j!==R||pe!==w)&&(i.blendFuncSeparate(A[ie],A[he],A[j],A[pe]),b=ie,T=he,R=j,w=pe),(De.equals(C)===!1||$e!==N)&&(i.blendColor(De.r,De.g,De.b,$e),C.copy(De),N=$e),p=P,S=!1}function Le(P,ee){P.side===tn?fe(i.CULL_FACE):$(i.CULL_FACE);let ie=P.side===St;ee&&(ie=!ie),we(ie),P.blending===$n&&P.transparent===!1?et(pn):et(P.blending,P.blendEquation,P.blendSrc,P.blendDst,P.blendEquationAlpha,P.blendSrcAlpha,P.blendDstAlpha,P.blendColor,P.blendAlpha,P.premultipliedAlpha),a.setFunc(P.depthFunc),a.setTest(P.depthTest),a.setMask(P.depthWrite),s.setMask(P.colorWrite);const he=P.stencilWrite;o.setTest(he),he&&(o.setMask(P.stencilWriteMask),o.setFunc(P.stencilFunc,P.stencilRef,P.stencilFuncMask),o.setOp(P.stencilFail,P.stencilZFail,P.stencilZPass)),ge(P.polygonOffset,P.polygonOffsetFactor,P.polygonOffsetUnits),P.alphaToCoverage===!0?$(i.SAMPLE_ALPHA_TO_COVERAGE):fe(i.SAMPLE_ALPHA_TO_COVERAGE)}function we(P){M!==P&&(P?i.frontFace(i.CW):i.frontFace(i.CCW),M=P)}function me(P){P!==qo?($(i.CULL_FACE),P!==D&&(P===sa?i.cullFace(i.BACK):P===Yo?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):fe(i.CULL_FACE),D=P}function tt(P){P!==O&&(W&&i.lineWidth(P),O=P)}function ge(P,ee,ie){P?($(i.POLYGON_OFFSET_FILL),(H!==ee||k!==ie)&&(i.polygonOffset(ee,ie),H=ee,k=ie)):fe(i.POLYGON_OFFSET_FILL)}function Ie(P){P?$(i.SCISSOR_TEST):fe(i.SCISSOR_TEST)}function ut(P){P===void 0&&(P=i.TEXTURE0+q-1),se!==P&&(i.activeTexture(P),se=P)}function at(P,ee,ie){ie===void 0&&(se===null?ie=i.TEXTURE0+q-1:ie=se);let he=ce[ie];he===void 0&&(he={type:void 0,texture:void 0},ce[ie]=he),(he.type!==P||he.texture!==ee)&&(se!==ie&&(i.activeTexture(ie),se=ie),i.bindTexture(P,ee||Y[P]),he.type=P,he.texture=ee)}function y(){const P=ce[se];P!==void 0&&P.type!==void 0&&(i.bindTexture(P.type,null),P.type=void 0,P.texture=void 0)}function g(){try{i.compressedTexImage2D(...arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function F(){try{i.compressedTexImage3D(...arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function X(){try{i.texSubImage2D(...arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function K(){try{i.texSubImage3D(...arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function G(){try{i.compressedTexSubImage2D(...arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Me(){try{i.compressedTexSubImage3D(...arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function ne(){try{i.texStorage2D(...arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function _e(){try{i.texStorage3D(...arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function ve(){try{i.texImage2D(...arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Q(){try{i.texImage3D(...arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function le(P){Ke.equals(P)===!1&&(i.scissor(P.x,P.y,P.z,P.w),Ke.copy(P))}function Ae(P){Qe.equals(P)===!1&&(i.viewport(P.x,P.y,P.z,P.w),Qe.copy(P))}function xe(P,ee){let ie=l.get(ee);ie===void 0&&(ie=new WeakMap,l.set(ee,ie));let he=ie.get(P);he===void 0&&(he=i.getUniformBlockIndex(ee,P.name),ie.set(P,he))}function ae(P,ee){const he=l.get(ee).get(P);c.get(ee)!==he&&(i.uniformBlockBinding(ee,he,P.__bindingPointIndex),c.set(ee,he))}function Ue(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},se=null,ce={},f={},d=new WeakMap,m=[],_=null,x=!1,p=null,u=null,b=null,T=null,E=null,R=null,w=null,C=new Ge(0,0,0),N=0,S=!1,M=null,D=null,O=null,H=null,k=null,Ke.set(0,0,i.canvas.width,i.canvas.height),Qe.set(0,0,i.canvas.width,i.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:$,disable:fe,bindFramebuffer:Ce,drawBuffers:Se,useProgram:ze,setBlending:et,setMaterial:Le,setFlipSided:we,setCullFace:me,setLineWidth:tt,setPolygonOffset:ge,setScissorTest:Ie,activeTexture:ut,bindTexture:at,unbindTexture:y,compressedTexImage2D:g,compressedTexImage3D:F,texImage2D:ve,texImage3D:Q,updateUBOMapping:xe,uniformBlockBinding:ae,texStorage2D:ne,texStorage3D:_e,texSubImage2D:X,texSubImage3D:K,compressedTexSubImage2D:G,compressedTexSubImage3D:Me,scissor:le,viewport:Ae,reset:Ue}}function ap(i,e,t,n,r,s,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Xe,h=new WeakMap;let f;const d=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(y,g){return m?new OffscreenCanvas(y,g):hr("canvas")}function x(y,g,F){let X=1;const K=at(y);if((K.width>F||K.height>F)&&(X=F/Math.max(K.width,K.height)),X<1)if(typeof HTMLImageElement<"u"&&y instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&y instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&y instanceof ImageBitmap||typeof VideoFrame<"u"&&y instanceof VideoFrame){const G=Math.floor(X*K.width),Me=Math.floor(X*K.height);f===void 0&&(f=_(G,Me));const ne=g?_(G,Me):f;return ne.width=G,ne.height=Me,ne.getContext("2d").drawImage(y,0,0,G,Me),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+K.width+"x"+K.height+") to ("+G+"x"+Me+")."),ne}else return"data"in y&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+K.width+"x"+K.height+")."),y;return y}function p(y){return y.generateMipmaps}function u(y){i.generateMipmap(y)}function b(y){return y.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:y.isWebGL3DRenderTarget?i.TEXTURE_3D:y.isWebGLArrayRenderTarget||y.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function T(y,g,F,X,K=!1){if(y!==null){if(i[y]!==void 0)return i[y];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+y+"'")}let G=g;if(g===i.RED&&(F===i.FLOAT&&(G=i.R32F),F===i.HALF_FLOAT&&(G=i.R16F),F===i.UNSIGNED_BYTE&&(G=i.R8)),g===i.RED_INTEGER&&(F===i.UNSIGNED_BYTE&&(G=i.R8UI),F===i.UNSIGNED_SHORT&&(G=i.R16UI),F===i.UNSIGNED_INT&&(G=i.R32UI),F===i.BYTE&&(G=i.R8I),F===i.SHORT&&(G=i.R16I),F===i.INT&&(G=i.R32I)),g===i.RG&&(F===i.FLOAT&&(G=i.RG32F),F===i.HALF_FLOAT&&(G=i.RG16F),F===i.UNSIGNED_BYTE&&(G=i.RG8)),g===i.RG_INTEGER&&(F===i.UNSIGNED_BYTE&&(G=i.RG8UI),F===i.UNSIGNED_SHORT&&(G=i.RG16UI),F===i.UNSIGNED_INT&&(G=i.RG32UI),F===i.BYTE&&(G=i.RG8I),F===i.SHORT&&(G=i.RG16I),F===i.INT&&(G=i.RG32I)),g===i.RGB_INTEGER&&(F===i.UNSIGNED_BYTE&&(G=i.RGB8UI),F===i.UNSIGNED_SHORT&&(G=i.RGB16UI),F===i.UNSIGNED_INT&&(G=i.RGB32UI),F===i.BYTE&&(G=i.RGB8I),F===i.SHORT&&(G=i.RGB16I),F===i.INT&&(G=i.RGB32I)),g===i.RGBA_INTEGER&&(F===i.UNSIGNED_BYTE&&(G=i.RGBA8UI),F===i.UNSIGNED_SHORT&&(G=i.RGBA16UI),F===i.UNSIGNED_INT&&(G=i.RGBA32UI),F===i.BYTE&&(G=i.RGBA8I),F===i.SHORT&&(G=i.RGBA16I),F===i.INT&&(G=i.RGBA32I)),g===i.RGB&&(F===i.UNSIGNED_INT_5_9_9_9_REV&&(G=i.RGB9_E5),F===i.UNSIGNED_INT_10F_11F_11F_REV&&(G=i.R11F_G11F_B10F)),g===i.RGBA){const Me=K?lr:Ve.getTransfer(X);F===i.FLOAT&&(G=i.RGBA32F),F===i.HALF_FLOAT&&(G=i.RGBA16F),F===i.UNSIGNED_BYTE&&(G=Me===Ye?i.SRGB8_ALPHA8:i.RGBA8),F===i.UNSIGNED_SHORT_4_4_4_4&&(G=i.RGBA4),F===i.UNSIGNED_SHORT_5_5_5_1&&(G=i.RGB5_A1)}return(G===i.R16F||G===i.R32F||G===i.RG16F||G===i.RG32F||G===i.RGBA16F||G===i.RGBA32F)&&e.get("EXT_color_buffer_float"),G}function E(y,g){let F;return y?g===null||g===_n||g===_i?F=i.DEPTH24_STENCIL8:g===nn?F=i.DEPTH32F_STENCIL8:g===gi&&(F=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):g===null||g===_n||g===_i?F=i.DEPTH_COMPONENT24:g===nn?F=i.DEPTH_COMPONENT32F:g===gi&&(F=i.DEPTH_COMPONENT16),F}function R(y,g){return p(y)===!0||y.isFramebufferTexture&&y.minFilter!==Rt&&y.minFilter!==wt?Math.log2(Math.max(g.width,g.height))+1:y.mipmaps!==void 0&&y.mipmaps.length>0?y.mipmaps.length:y.isCompressedTexture&&Array.isArray(y.image)?g.mipmaps.length:1}function w(y){const g=y.target;g.removeEventListener("dispose",w),N(g),g.isVideoTexture&&h.delete(g)}function C(y){const g=y.target;g.removeEventListener("dispose",C),M(g)}function N(y){const g=n.get(y);if(g.__webglInit===void 0)return;const F=y.source,X=d.get(F);if(X){const K=X[g.__cacheKey];K.usedTimes--,K.usedTimes===0&&S(y),Object.keys(X).length===0&&d.delete(F)}n.remove(y)}function S(y){const g=n.get(y);i.deleteTexture(g.__webglTexture);const F=y.source,X=d.get(F);delete X[g.__cacheKey],a.memory.textures--}function M(y){const g=n.get(y);if(y.depthTexture&&(y.depthTexture.dispose(),n.remove(y.depthTexture)),y.isWebGLCubeRenderTarget)for(let X=0;X<6;X++){if(Array.isArray(g.__webglFramebuffer[X]))for(let K=0;K<g.__webglFramebuffer[X].length;K++)i.deleteFramebuffer(g.__webglFramebuffer[X][K]);else i.deleteFramebuffer(g.__webglFramebuffer[X]);g.__webglDepthbuffer&&i.deleteRenderbuffer(g.__webglDepthbuffer[X])}else{if(Array.isArray(g.__webglFramebuffer))for(let X=0;X<g.__webglFramebuffer.length;X++)i.deleteFramebuffer(g.__webglFramebuffer[X]);else i.deleteFramebuffer(g.__webglFramebuffer);if(g.__webglDepthbuffer&&i.deleteRenderbuffer(g.__webglDepthbuffer),g.__webglMultisampledFramebuffer&&i.deleteFramebuffer(g.__webglMultisampledFramebuffer),g.__webglColorRenderbuffer)for(let X=0;X<g.__webglColorRenderbuffer.length;X++)g.__webglColorRenderbuffer[X]&&i.deleteRenderbuffer(g.__webglColorRenderbuffer[X]);g.__webglDepthRenderbuffer&&i.deleteRenderbuffer(g.__webglDepthRenderbuffer)}const F=y.textures;for(let X=0,K=F.length;X<K;X++){const G=n.get(F[X]);G.__webglTexture&&(i.deleteTexture(G.__webglTexture),a.memory.textures--),n.remove(F[X])}n.remove(y)}let D=0;function O(){D=0}function H(){const y=D;return y>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+y+" texture units while this GPU supports only "+r.maxTextures),D+=1,y}function k(y){const g=[];return g.push(y.wrapS),g.push(y.wrapT),g.push(y.wrapR||0),g.push(y.magFilter),g.push(y.minFilter),g.push(y.anisotropy),g.push(y.internalFormat),g.push(y.format),g.push(y.type),g.push(y.generateMipmaps),g.push(y.premultiplyAlpha),g.push(y.flipY),g.push(y.unpackAlignment),g.push(y.colorSpace),g.join()}function q(y,g){const F=n.get(y);if(y.isVideoTexture&&Ie(y),y.isRenderTargetTexture===!1&&y.isExternalTexture!==!0&&y.version>0&&F.__version!==y.version){const X=y.image;if(X===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(X.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Y(F,y,g);return}}else y.isExternalTexture&&(F.__webglTexture=y.sourceTexture?y.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,F.__webglTexture,i.TEXTURE0+g)}function W(y,g){const F=n.get(y);if(y.isRenderTargetTexture===!1&&y.version>0&&F.__version!==y.version){Y(F,y,g);return}t.bindTexture(i.TEXTURE_2D_ARRAY,F.__webglTexture,i.TEXTURE0+g)}function te(y,g){const F=n.get(y);if(y.isRenderTargetTexture===!1&&y.version>0&&F.__version!==y.version){Y(F,y,g);return}t.bindTexture(i.TEXTURE_3D,F.__webglTexture,i.TEXTURE0+g)}function V(y,g){const F=n.get(y);if(y.version>0&&F.__version!==y.version){$(F,y,g);return}t.bindTexture(i.TEXTURE_CUBE_MAP,F.__webglTexture,i.TEXTURE0+g)}const se={[or]:i.REPEAT,[Dn]:i.CLAMP_TO_EDGE,[cs]:i.MIRRORED_REPEAT},ce={[Rt]:i.NEAREST,[El]:i.NEAREST_MIPMAP_NEAREST,[wi]:i.NEAREST_MIPMAP_LINEAR,[wt]:i.LINEAR,[Sr]:i.LINEAR_MIPMAP_NEAREST,[Ln]:i.LINEAR_MIPMAP_LINEAR},Ee={[wl]:i.NEVER,[Ul]:i.ALWAYS,[Rl]:i.LESS,[So]:i.LEQUAL,[Cl]:i.EQUAL,[Ll]:i.GEQUAL,[Pl]:i.GREATER,[Dl]:i.NOTEQUAL};function Fe(y,g){if(g.type===nn&&e.has("OES_texture_float_linear")===!1&&(g.magFilter===wt||g.magFilter===Sr||g.magFilter===wi||g.magFilter===Ln||g.minFilter===wt||g.minFilter===Sr||g.minFilter===wi||g.minFilter===Ln)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(y,i.TEXTURE_WRAP_S,se[g.wrapS]),i.texParameteri(y,i.TEXTURE_WRAP_T,se[g.wrapT]),(y===i.TEXTURE_3D||y===i.TEXTURE_2D_ARRAY)&&i.texParameteri(y,i.TEXTURE_WRAP_R,se[g.wrapR]),i.texParameteri(y,i.TEXTURE_MAG_FILTER,ce[g.magFilter]),i.texParameteri(y,i.TEXTURE_MIN_FILTER,ce[g.minFilter]),g.compareFunction&&(i.texParameteri(y,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(y,i.TEXTURE_COMPARE_FUNC,Ee[g.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(g.magFilter===Rt||g.minFilter!==wi&&g.minFilter!==Ln||g.type===nn&&e.has("OES_texture_float_linear")===!1)return;if(g.anisotropy>1||n.get(g).__currentAnisotropy){const F=e.get("EXT_texture_filter_anisotropic");i.texParameterf(y,F.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(g.anisotropy,r.getMaxAnisotropy())),n.get(g).__currentAnisotropy=g.anisotropy}}}function Ke(y,g){let F=!1;y.__webglInit===void 0&&(y.__webglInit=!0,g.addEventListener("dispose",w));const X=g.source;let K=d.get(X);K===void 0&&(K={},d.set(X,K));const G=k(g);if(G!==y.__cacheKey){K[G]===void 0&&(K[G]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,F=!0),K[G].usedTimes++;const Me=K[y.__cacheKey];Me!==void 0&&(K[y.__cacheKey].usedTimes--,Me.usedTimes===0&&S(g)),y.__cacheKey=G,y.__webglTexture=K[G].texture}return F}function Qe(y,g,F){return Math.floor(Math.floor(y/F)/g)}function ke(y,g,F,X){const G=y.updateRanges;if(G.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,g.width,g.height,F,X,g.data);else{G.sort((Q,le)=>Q.start-le.start);let Me=0;for(let Q=1;Q<G.length;Q++){const le=G[Me],Ae=G[Q],xe=le.start+le.count,ae=Qe(Ae.start,g.width,4),Ue=Qe(le.start,g.width,4);Ae.start<=xe+1&&ae===Ue&&Qe(Ae.start+Ae.count-1,g.width,4)===ae?le.count=Math.max(le.count,Ae.start+Ae.count-le.start):(++Me,G[Me]=Ae)}G.length=Me+1;const ne=i.getParameter(i.UNPACK_ROW_LENGTH),_e=i.getParameter(i.UNPACK_SKIP_PIXELS),ve=i.getParameter(i.UNPACK_SKIP_ROWS);i.pixelStorei(i.UNPACK_ROW_LENGTH,g.width);for(let Q=0,le=G.length;Q<le;Q++){const Ae=G[Q],xe=Math.floor(Ae.start/4),ae=Math.ceil(Ae.count/4),Ue=xe%g.width,P=Math.floor(xe/g.width),ee=ae,ie=1;i.pixelStorei(i.UNPACK_SKIP_PIXELS,Ue),i.pixelStorei(i.UNPACK_SKIP_ROWS,P),t.texSubImage2D(i.TEXTURE_2D,0,Ue,P,ee,ie,F,X,g.data)}y.clearUpdateRanges(),i.pixelStorei(i.UNPACK_ROW_LENGTH,ne),i.pixelStorei(i.UNPACK_SKIP_PIXELS,_e),i.pixelStorei(i.UNPACK_SKIP_ROWS,ve)}}function Y(y,g,F){let X=i.TEXTURE_2D;(g.isDataArrayTexture||g.isCompressedArrayTexture)&&(X=i.TEXTURE_2D_ARRAY),g.isData3DTexture&&(X=i.TEXTURE_3D);const K=Ke(y,g),G=g.source;t.bindTexture(X,y.__webglTexture,i.TEXTURE0+F);const Me=n.get(G);if(G.version!==Me.__version||K===!0){t.activeTexture(i.TEXTURE0+F);const ne=Ve.getPrimaries(Ve.workingColorSpace),_e=g.colorSpace===dn?null:Ve.getPrimaries(g.colorSpace),ve=g.colorSpace===dn||ne===_e?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,g.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,g.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ve);let Q=x(g.image,!1,r.maxTextureSize);Q=ut(g,Q);const le=s.convert(g.format,g.colorSpace),Ae=s.convert(g.type);let xe=T(g.internalFormat,le,Ae,g.colorSpace,g.isVideoTexture);Fe(X,g);let ae;const Ue=g.mipmaps,P=g.isVideoTexture!==!0,ee=Me.__version===void 0||K===!0,ie=G.dataReady,he=R(g,Q);if(g.isDepthTexture)xe=E(g.format===xi,g.type),ee&&(P?t.texStorage2D(i.TEXTURE_2D,1,xe,Q.width,Q.height):t.texImage2D(i.TEXTURE_2D,0,xe,Q.width,Q.height,0,le,Ae,null));else if(g.isDataTexture)if(Ue.length>0){P&&ee&&t.texStorage2D(i.TEXTURE_2D,he,xe,Ue[0].width,Ue[0].height);for(let Z=0,j=Ue.length;Z<j;Z++)ae=Ue[Z],P?ie&&t.texSubImage2D(i.TEXTURE_2D,Z,0,0,ae.width,ae.height,le,Ae,ae.data):t.texImage2D(i.TEXTURE_2D,Z,xe,ae.width,ae.height,0,le,Ae,ae.data);g.generateMipmaps=!1}else P?(ee&&t.texStorage2D(i.TEXTURE_2D,he,xe,Q.width,Q.height),ie&&ke(g,Q,le,Ae)):t.texImage2D(i.TEXTURE_2D,0,xe,Q.width,Q.height,0,le,Ae,Q.data);else if(g.isCompressedTexture)if(g.isCompressedArrayTexture){P&&ee&&t.texStorage3D(i.TEXTURE_2D_ARRAY,he,xe,Ue[0].width,Ue[0].height,Q.depth);for(let Z=0,j=Ue.length;Z<j;Z++)if(ae=Ue[Z],g.format!==It)if(le!==null)if(P){if(ie)if(g.layerUpdates.size>0){const pe=Ia(ae.width,ae.height,g.format,g.type);for(const De of g.layerUpdates){const $e=ae.data.subarray(De*pe/ae.data.BYTES_PER_ELEMENT,(De+1)*pe/ae.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Z,0,0,De,ae.width,ae.height,1,le,$e)}g.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Z,0,0,0,ae.width,ae.height,Q.depth,le,ae.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,Z,xe,ae.width,ae.height,Q.depth,0,ae.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else P?ie&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,Z,0,0,0,ae.width,ae.height,Q.depth,le,Ae,ae.data):t.texImage3D(i.TEXTURE_2D_ARRAY,Z,xe,ae.width,ae.height,Q.depth,0,le,Ae,ae.data)}else{P&&ee&&t.texStorage2D(i.TEXTURE_2D,he,xe,Ue[0].width,Ue[0].height);for(let Z=0,j=Ue.length;Z<j;Z++)ae=Ue[Z],g.format!==It?le!==null?P?ie&&t.compressedTexSubImage2D(i.TEXTURE_2D,Z,0,0,ae.width,ae.height,le,ae.data):t.compressedTexImage2D(i.TEXTURE_2D,Z,xe,ae.width,ae.height,0,ae.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):P?ie&&t.texSubImage2D(i.TEXTURE_2D,Z,0,0,ae.width,ae.height,le,Ae,ae.data):t.texImage2D(i.TEXTURE_2D,Z,xe,ae.width,ae.height,0,le,Ae,ae.data)}else if(g.isDataArrayTexture)if(P){if(ee&&t.texStorage3D(i.TEXTURE_2D_ARRAY,he,xe,Q.width,Q.height,Q.depth),ie)if(g.layerUpdates.size>0){const Z=Ia(Q.width,Q.height,g.format,g.type);for(const j of g.layerUpdates){const pe=Q.data.subarray(j*Z/Q.data.BYTES_PER_ELEMENT,(j+1)*Z/Q.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,j,Q.width,Q.height,1,le,Ae,pe)}g.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,Q.width,Q.height,Q.depth,le,Ae,Q.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,xe,Q.width,Q.height,Q.depth,0,le,Ae,Q.data);else if(g.isData3DTexture)P?(ee&&t.texStorage3D(i.TEXTURE_3D,he,xe,Q.width,Q.height,Q.depth),ie&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,Q.width,Q.height,Q.depth,le,Ae,Q.data)):t.texImage3D(i.TEXTURE_3D,0,xe,Q.width,Q.height,Q.depth,0,le,Ae,Q.data);else if(g.isFramebufferTexture){if(ee)if(P)t.texStorage2D(i.TEXTURE_2D,he,xe,Q.width,Q.height);else{let Z=Q.width,j=Q.height;for(let pe=0;pe<he;pe++)t.texImage2D(i.TEXTURE_2D,pe,xe,Z,j,0,le,Ae,null),Z>>=1,j>>=1}}else if(Ue.length>0){if(P&&ee){const Z=at(Ue[0]);t.texStorage2D(i.TEXTURE_2D,he,xe,Z.width,Z.height)}for(let Z=0,j=Ue.length;Z<j;Z++)ae=Ue[Z],P?ie&&t.texSubImage2D(i.TEXTURE_2D,Z,0,0,le,Ae,ae):t.texImage2D(i.TEXTURE_2D,Z,xe,le,Ae,ae);g.generateMipmaps=!1}else if(P){if(ee){const Z=at(Q);t.texStorage2D(i.TEXTURE_2D,he,xe,Z.width,Z.height)}ie&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,le,Ae,Q)}else t.texImage2D(i.TEXTURE_2D,0,xe,le,Ae,Q);p(g)&&u(X),Me.__version=G.version,g.onUpdate&&g.onUpdate(g)}y.__version=g.version}function $(y,g,F){if(g.image.length!==6)return;const X=Ke(y,g),K=g.source;t.bindTexture(i.TEXTURE_CUBE_MAP,y.__webglTexture,i.TEXTURE0+F);const G=n.get(K);if(K.version!==G.__version||X===!0){t.activeTexture(i.TEXTURE0+F);const Me=Ve.getPrimaries(Ve.workingColorSpace),ne=g.colorSpace===dn?null:Ve.getPrimaries(g.colorSpace),_e=g.colorSpace===dn||Me===ne?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,g.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,g.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,_e);const ve=g.isCompressedTexture||g.image[0].isCompressedTexture,Q=g.image[0]&&g.image[0].isDataTexture,le=[];for(let j=0;j<6;j++)!ve&&!Q?le[j]=x(g.image[j],!0,r.maxCubemapSize):le[j]=Q?g.image[j].image:g.image[j],le[j]=ut(g,le[j]);const Ae=le[0],xe=s.convert(g.format,g.colorSpace),ae=s.convert(g.type),Ue=T(g.internalFormat,xe,ae,g.colorSpace),P=g.isVideoTexture!==!0,ee=G.__version===void 0||X===!0,ie=K.dataReady;let he=R(g,Ae);Fe(i.TEXTURE_CUBE_MAP,g);let Z;if(ve){P&&ee&&t.texStorage2D(i.TEXTURE_CUBE_MAP,he,Ue,Ae.width,Ae.height);for(let j=0;j<6;j++){Z=le[j].mipmaps;for(let pe=0;pe<Z.length;pe++){const De=Z[pe];g.format!==It?xe!==null?P?ie&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,pe,0,0,De.width,De.height,xe,De.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,pe,Ue,De.width,De.height,0,De.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):P?ie&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,pe,0,0,De.width,De.height,xe,ae,De.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,pe,Ue,De.width,De.height,0,xe,ae,De.data)}}}else{if(Z=g.mipmaps,P&&ee){Z.length>0&&he++;const j=at(le[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,he,Ue,j.width,j.height)}for(let j=0;j<6;j++)if(Q){P?ie&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,0,0,le[j].width,le[j].height,xe,ae,le[j].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,Ue,le[j].width,le[j].height,0,xe,ae,le[j].data);for(let pe=0;pe<Z.length;pe++){const $e=Z[pe].image[j].image;P?ie&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,pe+1,0,0,$e.width,$e.height,xe,ae,$e.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,pe+1,Ue,$e.width,$e.height,0,xe,ae,$e.data)}}else{P?ie&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,0,0,xe,ae,le[j]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,Ue,xe,ae,le[j]);for(let pe=0;pe<Z.length;pe++){const De=Z[pe];P?ie&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,pe+1,0,0,xe,ae,De.image[j]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,pe+1,Ue,xe,ae,De.image[j])}}}p(g)&&u(i.TEXTURE_CUBE_MAP),G.__version=K.version,g.onUpdate&&g.onUpdate(g)}y.__version=g.version}function fe(y,g,F,X,K,G){const Me=s.convert(F.format,F.colorSpace),ne=s.convert(F.type),_e=T(F.internalFormat,Me,ne,F.colorSpace),ve=n.get(g),Q=n.get(F);if(Q.__renderTarget=g,!ve.__hasExternalTextures){const le=Math.max(1,g.width>>G),Ae=Math.max(1,g.height>>G);K===i.TEXTURE_3D||K===i.TEXTURE_2D_ARRAY?t.texImage3D(K,G,_e,le,Ae,g.depth,0,Me,ne,null):t.texImage2D(K,G,_e,le,Ae,0,Me,ne,null)}t.bindFramebuffer(i.FRAMEBUFFER,y),ge(g)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,X,K,Q.__webglTexture,0,tt(g)):(K===i.TEXTURE_2D||K>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&K<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,X,K,Q.__webglTexture,G),t.bindFramebuffer(i.FRAMEBUFFER,null)}function Ce(y,g,F){if(i.bindRenderbuffer(i.RENDERBUFFER,y),g.depthBuffer){const X=g.depthTexture,K=X&&X.isDepthTexture?X.type:null,G=E(g.stencilBuffer,K),Me=g.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ne=tt(g);ge(g)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ne,G,g.width,g.height):F?i.renderbufferStorageMultisample(i.RENDERBUFFER,ne,G,g.width,g.height):i.renderbufferStorage(i.RENDERBUFFER,G,g.width,g.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Me,i.RENDERBUFFER,y)}else{const X=g.textures;for(let K=0;K<X.length;K++){const G=X[K],Me=s.convert(G.format,G.colorSpace),ne=s.convert(G.type),_e=T(G.internalFormat,Me,ne,G.colorSpace),ve=tt(g);F&&ge(g)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,ve,_e,g.width,g.height):ge(g)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ve,_e,g.width,g.height):i.renderbufferStorage(i.RENDERBUFFER,_e,g.width,g.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Se(y,g){if(g&&g.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,y),!(g.depthTexture&&g.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const X=n.get(g.depthTexture);X.__renderTarget=g,(!X.__webglTexture||g.depthTexture.image.width!==g.width||g.depthTexture.image.height!==g.height)&&(g.depthTexture.image.width=g.width,g.depthTexture.image.height=g.height,g.depthTexture.needsUpdate=!0),q(g.depthTexture,0);const K=X.__webglTexture,G=tt(g);if(g.depthTexture.format===vi)ge(g)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,K,0,G):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,K,0);else if(g.depthTexture.format===xi)ge(g)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,K,0,G):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,K,0);else throw new Error("Unknown depthTexture format")}function ze(y){const g=n.get(y),F=y.isWebGLCubeRenderTarget===!0;if(g.__boundDepthTexture!==y.depthTexture){const X=y.depthTexture;if(g.__depthDisposeCallback&&g.__depthDisposeCallback(),X){const K=()=>{delete g.__boundDepthTexture,delete g.__depthDisposeCallback,X.removeEventListener("dispose",K)};X.addEventListener("dispose",K),g.__depthDisposeCallback=K}g.__boundDepthTexture=X}if(y.depthTexture&&!g.__autoAllocateDepthBuffer){if(F)throw new Error("target.depthTexture not supported in Cube render targets");const X=y.texture.mipmaps;X&&X.length>0?Se(g.__webglFramebuffer[0],y):Se(g.__webglFramebuffer,y)}else if(F){g.__webglDepthbuffer=[];for(let X=0;X<6;X++)if(t.bindFramebuffer(i.FRAMEBUFFER,g.__webglFramebuffer[X]),g.__webglDepthbuffer[X]===void 0)g.__webglDepthbuffer[X]=i.createRenderbuffer(),Ce(g.__webglDepthbuffer[X],y,!1);else{const K=y.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,G=g.__webglDepthbuffer[X];i.bindRenderbuffer(i.RENDERBUFFER,G),i.framebufferRenderbuffer(i.FRAMEBUFFER,K,i.RENDERBUFFER,G)}}else{const X=y.texture.mipmaps;if(X&&X.length>0?t.bindFramebuffer(i.FRAMEBUFFER,g.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,g.__webglFramebuffer),g.__webglDepthbuffer===void 0)g.__webglDepthbuffer=i.createRenderbuffer(),Ce(g.__webglDepthbuffer,y,!1);else{const K=y.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,G=g.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,G),i.framebufferRenderbuffer(i.FRAMEBUFFER,K,i.RENDERBUFFER,G)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function ft(y,g,F){const X=n.get(y);g!==void 0&&fe(X.__webglFramebuffer,y,y.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),F!==void 0&&ze(y)}function A(y){const g=y.texture,F=n.get(y),X=n.get(g);y.addEventListener("dispose",C);const K=y.textures,G=y.isWebGLCubeRenderTarget===!0,Me=K.length>1;if(Me||(X.__webglTexture===void 0&&(X.__webglTexture=i.createTexture()),X.__version=g.version,a.memory.textures++),G){F.__webglFramebuffer=[];for(let ne=0;ne<6;ne++)if(g.mipmaps&&g.mipmaps.length>0){F.__webglFramebuffer[ne]=[];for(let _e=0;_e<g.mipmaps.length;_e++)F.__webglFramebuffer[ne][_e]=i.createFramebuffer()}else F.__webglFramebuffer[ne]=i.createFramebuffer()}else{if(g.mipmaps&&g.mipmaps.length>0){F.__webglFramebuffer=[];for(let ne=0;ne<g.mipmaps.length;ne++)F.__webglFramebuffer[ne]=i.createFramebuffer()}else F.__webglFramebuffer=i.createFramebuffer();if(Me)for(let ne=0,_e=K.length;ne<_e;ne++){const ve=n.get(K[ne]);ve.__webglTexture===void 0&&(ve.__webglTexture=i.createTexture(),a.memory.textures++)}if(y.samples>0&&ge(y)===!1){F.__webglMultisampledFramebuffer=i.createFramebuffer(),F.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,F.__webglMultisampledFramebuffer);for(let ne=0;ne<K.length;ne++){const _e=K[ne];F.__webglColorRenderbuffer[ne]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,F.__webglColorRenderbuffer[ne]);const ve=s.convert(_e.format,_e.colorSpace),Q=s.convert(_e.type),le=T(_e.internalFormat,ve,Q,_e.colorSpace,y.isXRRenderTarget===!0),Ae=tt(y);i.renderbufferStorageMultisample(i.RENDERBUFFER,Ae,le,y.width,y.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ne,i.RENDERBUFFER,F.__webglColorRenderbuffer[ne])}i.bindRenderbuffer(i.RENDERBUFFER,null),y.depthBuffer&&(F.__webglDepthRenderbuffer=i.createRenderbuffer(),Ce(F.__webglDepthRenderbuffer,y,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(G){t.bindTexture(i.TEXTURE_CUBE_MAP,X.__webglTexture),Fe(i.TEXTURE_CUBE_MAP,g);for(let ne=0;ne<6;ne++)if(g.mipmaps&&g.mipmaps.length>0)for(let _e=0;_e<g.mipmaps.length;_e++)fe(F.__webglFramebuffer[ne][_e],y,g,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,_e);else fe(F.__webglFramebuffer[ne],y,g,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0);p(g)&&u(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Me){for(let ne=0,_e=K.length;ne<_e;ne++){const ve=K[ne],Q=n.get(ve);let le=i.TEXTURE_2D;(y.isWebGL3DRenderTarget||y.isWebGLArrayRenderTarget)&&(le=y.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(le,Q.__webglTexture),Fe(le,ve),fe(F.__webglFramebuffer,y,ve,i.COLOR_ATTACHMENT0+ne,le,0),p(ve)&&u(le)}t.unbindTexture()}else{let ne=i.TEXTURE_2D;if((y.isWebGL3DRenderTarget||y.isWebGLArrayRenderTarget)&&(ne=y.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(ne,X.__webglTexture),Fe(ne,g),g.mipmaps&&g.mipmaps.length>0)for(let _e=0;_e<g.mipmaps.length;_e++)fe(F.__webglFramebuffer[_e],y,g,i.COLOR_ATTACHMENT0,ne,_e);else fe(F.__webglFramebuffer,y,g,i.COLOR_ATTACHMENT0,ne,0);p(g)&&u(ne),t.unbindTexture()}y.depthBuffer&&ze(y)}function et(y){const g=y.textures;for(let F=0,X=g.length;F<X;F++){const K=g[F];if(p(K)){const G=b(y),Me=n.get(K).__webglTexture;t.bindTexture(G,Me),u(G),t.unbindTexture()}}}const Le=[],we=[];function me(y){if(y.samples>0){if(ge(y)===!1){const g=y.textures,F=y.width,X=y.height;let K=i.COLOR_BUFFER_BIT;const G=y.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Me=n.get(y),ne=g.length>1;if(ne)for(let ve=0;ve<g.length;ve++)t.bindFramebuffer(i.FRAMEBUFFER,Me.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ve,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,Me.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ve,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,Me.__webglMultisampledFramebuffer);const _e=y.texture.mipmaps;_e&&_e.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Me.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Me.__webglFramebuffer);for(let ve=0;ve<g.length;ve++){if(y.resolveDepthBuffer&&(y.depthBuffer&&(K|=i.DEPTH_BUFFER_BIT),y.stencilBuffer&&y.resolveStencilBuffer&&(K|=i.STENCIL_BUFFER_BIT)),ne){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Me.__webglColorRenderbuffer[ve]);const Q=n.get(g[ve]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Q,0)}i.blitFramebuffer(0,0,F,X,0,0,F,X,K,i.NEAREST),c===!0&&(Le.length=0,we.length=0,Le.push(i.COLOR_ATTACHMENT0+ve),y.depthBuffer&&y.resolveDepthBuffer===!1&&(Le.push(G),we.push(G),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,we)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Le))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ne)for(let ve=0;ve<g.length;ve++){t.bindFramebuffer(i.FRAMEBUFFER,Me.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ve,i.RENDERBUFFER,Me.__webglColorRenderbuffer[ve]);const Q=n.get(g[ve]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,Me.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ve,i.TEXTURE_2D,Q,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Me.__webglMultisampledFramebuffer)}else if(y.depthBuffer&&y.resolveDepthBuffer===!1&&c){const g=y.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[g])}}}function tt(y){return Math.min(r.maxSamples,y.samples)}function ge(y){const g=n.get(y);return y.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&g.__useRenderToTexture!==!1}function Ie(y){const g=a.render.frame;h.get(y)!==g&&(h.set(y,g),y.update())}function ut(y,g){const F=y.colorSpace,X=y.format,K=y.type;return y.isCompressedTexture===!0||y.isVideoTexture===!0||F!==ni&&F!==dn&&(Ve.getTransfer(F)===Ye?(X!==It||K!==Nt)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",F)),g}function at(y){return typeof HTMLImageElement<"u"&&y instanceof HTMLImageElement?(l.width=y.naturalWidth||y.width,l.height=y.naturalHeight||y.height):typeof VideoFrame<"u"&&y instanceof VideoFrame?(l.width=y.displayWidth,l.height=y.displayHeight):(l.width=y.width,l.height=y.height),l}this.allocateTextureUnit=H,this.resetTextureUnits=O,this.setTexture2D=q,this.setTexture2DArray=W,this.setTexture3D=te,this.setTextureCube=V,this.rebindTextures=ft,this.setupRenderTarget=A,this.updateRenderTargetMipmap=et,this.updateMultisampleRenderTarget=me,this.setupDepthRenderbuffer=ze,this.setupFrameBufferTexture=fe,this.useMultisampledRTT=ge}function op(i,e){function t(n,r=dn){let s;const a=Ve.getTransfer(r);if(n===Nt)return i.UNSIGNED_BYTE;if(n===Vs)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Gs)return i.UNSIGNED_SHORT_5_5_5_1;if(n===go)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===_o)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===po)return i.BYTE;if(n===mo)return i.SHORT;if(n===gi)return i.UNSIGNED_SHORT;if(n===Hs)return i.INT;if(n===_n)return i.UNSIGNED_INT;if(n===nn)return i.FLOAT;if(n===ri)return i.HALF_FLOAT;if(n===vo)return i.ALPHA;if(n===xo)return i.RGB;if(n===It)return i.RGBA;if(n===vi)return i.DEPTH_COMPONENT;if(n===xi)return i.DEPTH_STENCIL;if(n===mr)return i.RED;if(n===ks)return i.RED_INTEGER;if(n===Mo)return i.RG;if(n===Ws)return i.RG_INTEGER;if(n===Xs)return i.RGBA_INTEGER;if(n===er||n===tr||n===nr||n===ir)if(a===Ye)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===er)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===tr)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===nr)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===ir)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===er)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===tr)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===nr)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===ir)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===us||n===hs||n===fs||n===ds)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===us)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===hs)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===fs)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===ds)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===ps||n===ms||n===gs)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(n===ps||n===ms)return a===Ye?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===gs)return a===Ye?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===_s||n===vs||n===xs||n===Ms||n===Ss||n===Es||n===ys||n===Ts||n===bs||n===As||n===ws||n===Rs||n===Cs||n===Ps)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(n===_s)return a===Ye?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===vs)return a===Ye?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===xs)return a===Ye?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Ms)return a===Ye?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Ss)return a===Ye?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Es)return a===Ye?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===ys)return a===Ye?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Ts)return a===Ye?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===bs)return a===Ye?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===As)return a===Ye?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===ws)return a===Ye?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Rs)return a===Ye?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Cs)return a===Ye?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Ps)return a===Ye?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Ds||n===Ls||n===Us)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(n===Ds)return a===Ye?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Ls)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Us)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Is||n===Ns||n===Fs||n===Os)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(n===Is)return s.COMPRESSED_RED_RGTC1_EXT;if(n===Ns)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Fs)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Os)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===_i?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}const lp=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,cp=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class up{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const n=new Lo(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new Yt({vertexShader:lp,fragmentShader:cp,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Ht(new Ti(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class hp extends si{constructor(e,t){super();const n=this;let r=null,s=1,a=null,o="local-floor",c=1,l=null,h=null,f=null,d=null,m=null,_=null;const x=typeof XRWebGLBinding<"u",p=new up,u={},b=t.getContextAttributes();let T=null,E=null;const R=[],w=[],C=new Xe;let N=null;const S=new zt;S.viewport=new Je;const M=new zt;M.viewport=new Je;const D=[S,M],O=new Dc;let H=null,k=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let $=R[Y];return $===void 0&&($=new Gr,R[Y]=$),$.getTargetRaySpace()},this.getControllerGrip=function(Y){let $=R[Y];return $===void 0&&($=new Gr,R[Y]=$),$.getGripSpace()},this.getHand=function(Y){let $=R[Y];return $===void 0&&($=new Gr,R[Y]=$),$.getHandSpace()};function q(Y){const $=w.indexOf(Y.inputSource);if($===-1)return;const fe=R[$];fe!==void 0&&(fe.update(Y.inputSource,Y.frame,l||a),fe.dispatchEvent({type:Y.type,data:Y.inputSource}))}function W(){r.removeEventListener("select",q),r.removeEventListener("selectstart",q),r.removeEventListener("selectend",q),r.removeEventListener("squeeze",q),r.removeEventListener("squeezestart",q),r.removeEventListener("squeezeend",q),r.removeEventListener("end",W),r.removeEventListener("inputsourceschange",te);for(let Y=0;Y<R.length;Y++){const $=w[Y];$!==null&&(w[Y]=null,R[Y].disconnect($))}H=null,k=null,p.reset();for(const Y in u)delete u[Y];e.setRenderTarget(T),m=null,d=null,f=null,r=null,E=null,ke.stop(),n.isPresenting=!1,e.setPixelRatio(N),e.setSize(C.width,C.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){s=Y,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){o=Y,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(Y){l=Y},this.getBaseLayer=function(){return d!==null?d:m},this.getBinding=function(){return f===null&&x&&(f=new XRWebGLBinding(r,t)),f},this.getFrame=function(){return _},this.getSession=function(){return r},this.setSession=async function(Y){if(r=Y,r!==null){if(T=e.getRenderTarget(),r.addEventListener("select",q),r.addEventListener("selectstart",q),r.addEventListener("selectend",q),r.addEventListener("squeeze",q),r.addEventListener("squeezestart",q),r.addEventListener("squeezeend",q),r.addEventListener("end",W),r.addEventListener("inputsourceschange",te),b.xrCompatible!==!0&&await t.makeXRCompatible(),N=e.getPixelRatio(),e.getSize(C),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let fe=null,Ce=null,Se=null;b.depth&&(Se=b.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,fe=b.stencil?xi:vi,Ce=b.stencil?_i:_n);const ze={colorFormat:t.RGBA8,depthFormat:Se,scaleFactor:s};f=this.getBinding(),d=f.createProjectionLayer(ze),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),E=new sn(d.textureWidth,d.textureHeight,{format:It,type:Nt,depthTexture:new Zs(d.textureWidth,d.textureHeight,Ce,void 0,void 0,void 0,void 0,void 0,void 0,fe),stencilBuffer:b.stencil,colorSpace:e.outputColorSpace,samples:b.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{const fe={antialias:b.antialias,alpha:!0,depth:b.depth,stencil:b.stencil,framebufferScaleFactor:s};m=new XRWebGLLayer(r,t,fe),r.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),E=new sn(m.framebufferWidth,m.framebufferHeight,{format:It,type:Nt,colorSpace:e.outputColorSpace,stencilBuffer:b.stencil,resolveDepthBuffer:m.ignoreDepthValues===!1,resolveStencilBuffer:m.ignoreDepthValues===!1})}E.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await r.requestReferenceSpace(o),ke.setContext(r),ke.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return p.getDepthTexture()};function te(Y){for(let $=0;$<Y.removed.length;$++){const fe=Y.removed[$],Ce=w.indexOf(fe);Ce>=0&&(w[Ce]=null,R[Ce].disconnect(fe))}for(let $=0;$<Y.added.length;$++){const fe=Y.added[$];let Ce=w.indexOf(fe);if(Ce===-1){for(let ze=0;ze<R.length;ze++)if(ze>=w.length){w.push(fe),Ce=ze;break}else if(w[ze]===null){w[ze]=fe,Ce=ze;break}if(Ce===-1)break}const Se=R[Ce];Se&&Se.connect(fe)}}const V=new I,se=new I;function ce(Y,$,fe){V.setFromMatrixPosition($.matrixWorld),se.setFromMatrixPosition(fe.matrixWorld);const Ce=V.distanceTo(se),Se=$.projectionMatrix.elements,ze=fe.projectionMatrix.elements,ft=Se[14]/(Se[10]-1),A=Se[14]/(Se[10]+1),et=(Se[9]+1)/Se[5],Le=(Se[9]-1)/Se[5],we=(Se[8]-1)/Se[0],me=(ze[8]+1)/ze[0],tt=ft*we,ge=ft*me,Ie=Ce/(-we+me),ut=Ie*-we;if($.matrixWorld.decompose(Y.position,Y.quaternion,Y.scale),Y.translateX(ut),Y.translateZ(Ie),Y.matrixWorld.compose(Y.position,Y.quaternion,Y.scale),Y.matrixWorldInverse.copy(Y.matrixWorld).invert(),Se[10]===-1)Y.projectionMatrix.copy($.projectionMatrix),Y.projectionMatrixInverse.copy($.projectionMatrixInverse);else{const at=ft+Ie,y=A+Ie,g=tt-ut,F=ge+(Ce-ut),X=et*A/y*at,K=Le*A/y*at;Y.projectionMatrix.makePerspective(g,F,X,K,at,y),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert()}}function Ee(Y,$){$===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices($.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(r===null)return;let $=Y.near,fe=Y.far;p.texture!==null&&(p.depthNear>0&&($=p.depthNear),p.depthFar>0&&(fe=p.depthFar)),O.near=M.near=S.near=$,O.far=M.far=S.far=fe,(H!==O.near||k!==O.far)&&(r.updateRenderState({depthNear:O.near,depthFar:O.far}),H=O.near,k=O.far),O.layers.mask=Y.layers.mask|6,S.layers.mask=O.layers.mask&3,M.layers.mask=O.layers.mask&5;const Ce=Y.parent,Se=O.cameras;Ee(O,Ce);for(let ze=0;ze<Se.length;ze++)Ee(Se[ze],Ce);Se.length===2?ce(O,S,M):O.projectionMatrix.copy(S.projectionMatrix),Fe(Y,O,Ce)};function Fe(Y,$,fe){fe===null?Y.matrix.copy($.matrixWorld):(Y.matrix.copy(fe.matrixWorld),Y.matrix.invert(),Y.matrix.multiply($.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy($.projectionMatrix),Y.projectionMatrixInverse.copy($.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=Mi*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return O},this.getFoveation=function(){if(!(d===null&&m===null))return c},this.setFoveation=function(Y){c=Y,d!==null&&(d.fixedFoveation=Y),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=Y)},this.hasDepthSensing=function(){return p.texture!==null},this.getDepthSensingMesh=function(){return p.getMesh(O)},this.getCameraTexture=function(Y){return u[Y]};let Ke=null;function Qe(Y,$){if(h=$.getViewerPose(l||a),_=$,h!==null){const fe=h.views;m!==null&&(e.setRenderTargetFramebuffer(E,m.framebuffer),e.setRenderTarget(E));let Ce=!1;fe.length!==O.cameras.length&&(O.cameras.length=0,Ce=!0);for(let A=0;A<fe.length;A++){const et=fe[A];let Le=null;if(m!==null)Le=m.getViewport(et);else{const me=f.getViewSubImage(d,et);Le=me.viewport,A===0&&(e.setRenderTargetTextures(E,me.colorTexture,me.depthStencilTexture),e.setRenderTarget(E))}let we=D[A];we===void 0&&(we=new zt,we.layers.enable(A),we.viewport=new Je,D[A]=we),we.matrix.fromArray(et.transform.matrix),we.matrix.decompose(we.position,we.quaternion,we.scale),we.projectionMatrix.fromArray(et.projectionMatrix),we.projectionMatrixInverse.copy(we.projectionMatrix).invert(),we.viewport.set(Le.x,Le.y,Le.width,Le.height),A===0&&(O.matrix.copy(we.matrix),O.matrix.decompose(O.position,O.quaternion,O.scale)),Ce===!0&&O.cameras.push(we)}const Se=r.enabledFeatures;if(Se&&Se.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&x){f=n.getBinding();const A=f.getDepthInformation(fe[0]);A&&A.isValid&&A.texture&&p.init(A,r.renderState)}if(Se&&Se.includes("camera-access")&&x){e.state.unbindTexture(),f=n.getBinding();for(let A=0;A<fe.length;A++){const et=fe[A].camera;if(et){let Le=u[et];Le||(Le=new Lo,u[et]=Le);const we=f.getCameraImage(et);Le.sourceTexture=we}}}}for(let fe=0;fe<R.length;fe++){const Ce=w[fe],Se=R[fe];Ce!==null&&Se!==void 0&&Se.update(Ce,$,l||a)}Ke&&Ke(Y,$),$.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:$}),_=null}const ke=new No;ke.setAnimationLoop(Qe),this.setAnimationLoop=function(Y){Ke=Y},this.dispose=function(){}}}const An=new an,fp=new nt;function dp(i,e){function t(p,u){p.matrixAutoUpdate===!0&&p.updateMatrix(),u.value.copy(p.matrix)}function n(p,u){u.color.getRGB(p.fogColor.value,Po(i)),u.isFog?(p.fogNear.value=u.near,p.fogFar.value=u.far):u.isFogExp2&&(p.fogDensity.value=u.density)}function r(p,u,b,T,E){u.isMeshBasicMaterial||u.isMeshLambertMaterial?s(p,u):u.isMeshToonMaterial?(s(p,u),f(p,u)):u.isMeshPhongMaterial?(s(p,u),h(p,u)):u.isMeshStandardMaterial?(s(p,u),d(p,u),u.isMeshPhysicalMaterial&&m(p,u,E)):u.isMeshMatcapMaterial?(s(p,u),_(p,u)):u.isMeshDepthMaterial?s(p,u):u.isMeshDistanceMaterial?(s(p,u),x(p,u)):u.isMeshNormalMaterial?s(p,u):u.isLineBasicMaterial?(a(p,u),u.isLineDashedMaterial&&o(p,u)):u.isPointsMaterial?c(p,u,b,T):u.isSpriteMaterial?l(p,u):u.isShadowMaterial?(p.color.value.copy(u.color),p.opacity.value=u.opacity):u.isShaderMaterial&&(u.uniformsNeedUpdate=!1)}function s(p,u){p.opacity.value=u.opacity,u.color&&p.diffuse.value.copy(u.color),u.emissive&&p.emissive.value.copy(u.emissive).multiplyScalar(u.emissiveIntensity),u.map&&(p.map.value=u.map,t(u.map,p.mapTransform)),u.alphaMap&&(p.alphaMap.value=u.alphaMap,t(u.alphaMap,p.alphaMapTransform)),u.bumpMap&&(p.bumpMap.value=u.bumpMap,t(u.bumpMap,p.bumpMapTransform),p.bumpScale.value=u.bumpScale,u.side===St&&(p.bumpScale.value*=-1)),u.normalMap&&(p.normalMap.value=u.normalMap,t(u.normalMap,p.normalMapTransform),p.normalScale.value.copy(u.normalScale),u.side===St&&p.normalScale.value.negate()),u.displacementMap&&(p.displacementMap.value=u.displacementMap,t(u.displacementMap,p.displacementMapTransform),p.displacementScale.value=u.displacementScale,p.displacementBias.value=u.displacementBias),u.emissiveMap&&(p.emissiveMap.value=u.emissiveMap,t(u.emissiveMap,p.emissiveMapTransform)),u.specularMap&&(p.specularMap.value=u.specularMap,t(u.specularMap,p.specularMapTransform)),u.alphaTest>0&&(p.alphaTest.value=u.alphaTest);const b=e.get(u),T=b.envMap,E=b.envMapRotation;T&&(p.envMap.value=T,An.copy(E),An.x*=-1,An.y*=-1,An.z*=-1,T.isCubeTexture&&T.isRenderTargetTexture===!1&&(An.y*=-1,An.z*=-1),p.envMapRotation.value.setFromMatrix4(fp.makeRotationFromEuler(An)),p.flipEnvMap.value=T.isCubeTexture&&T.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=u.reflectivity,p.ior.value=u.ior,p.refractionRatio.value=u.refractionRatio),u.lightMap&&(p.lightMap.value=u.lightMap,p.lightMapIntensity.value=u.lightMapIntensity,t(u.lightMap,p.lightMapTransform)),u.aoMap&&(p.aoMap.value=u.aoMap,p.aoMapIntensity.value=u.aoMapIntensity,t(u.aoMap,p.aoMapTransform))}function a(p,u){p.diffuse.value.copy(u.color),p.opacity.value=u.opacity,u.map&&(p.map.value=u.map,t(u.map,p.mapTransform))}function o(p,u){p.dashSize.value=u.dashSize,p.totalSize.value=u.dashSize+u.gapSize,p.scale.value=u.scale}function c(p,u,b,T){p.diffuse.value.copy(u.color),p.opacity.value=u.opacity,p.size.value=u.size*b,p.scale.value=T*.5,u.map&&(p.map.value=u.map,t(u.map,p.uvTransform)),u.alphaMap&&(p.alphaMap.value=u.alphaMap,t(u.alphaMap,p.alphaMapTransform)),u.alphaTest>0&&(p.alphaTest.value=u.alphaTest)}function l(p,u){p.diffuse.value.copy(u.color),p.opacity.value=u.opacity,p.rotation.value=u.rotation,u.map&&(p.map.value=u.map,t(u.map,p.mapTransform)),u.alphaMap&&(p.alphaMap.value=u.alphaMap,t(u.alphaMap,p.alphaMapTransform)),u.alphaTest>0&&(p.alphaTest.value=u.alphaTest)}function h(p,u){p.specular.value.copy(u.specular),p.shininess.value=Math.max(u.shininess,1e-4)}function f(p,u){u.gradientMap&&(p.gradientMap.value=u.gradientMap)}function d(p,u){p.metalness.value=u.metalness,u.metalnessMap&&(p.metalnessMap.value=u.metalnessMap,t(u.metalnessMap,p.metalnessMapTransform)),p.roughness.value=u.roughness,u.roughnessMap&&(p.roughnessMap.value=u.roughnessMap,t(u.roughnessMap,p.roughnessMapTransform)),u.envMap&&(p.envMapIntensity.value=u.envMapIntensity)}function m(p,u,b){p.ior.value=u.ior,u.sheen>0&&(p.sheenColor.value.copy(u.sheenColor).multiplyScalar(u.sheen),p.sheenRoughness.value=u.sheenRoughness,u.sheenColorMap&&(p.sheenColorMap.value=u.sheenColorMap,t(u.sheenColorMap,p.sheenColorMapTransform)),u.sheenRoughnessMap&&(p.sheenRoughnessMap.value=u.sheenRoughnessMap,t(u.sheenRoughnessMap,p.sheenRoughnessMapTransform))),u.clearcoat>0&&(p.clearcoat.value=u.clearcoat,p.clearcoatRoughness.value=u.clearcoatRoughness,u.clearcoatMap&&(p.clearcoatMap.value=u.clearcoatMap,t(u.clearcoatMap,p.clearcoatMapTransform)),u.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=u.clearcoatRoughnessMap,t(u.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),u.clearcoatNormalMap&&(p.clearcoatNormalMap.value=u.clearcoatNormalMap,t(u.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(u.clearcoatNormalScale),u.side===St&&p.clearcoatNormalScale.value.negate())),u.dispersion>0&&(p.dispersion.value=u.dispersion),u.iridescence>0&&(p.iridescence.value=u.iridescence,p.iridescenceIOR.value=u.iridescenceIOR,p.iridescenceThicknessMinimum.value=u.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=u.iridescenceThicknessRange[1],u.iridescenceMap&&(p.iridescenceMap.value=u.iridescenceMap,t(u.iridescenceMap,p.iridescenceMapTransform)),u.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=u.iridescenceThicknessMap,t(u.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),u.transmission>0&&(p.transmission.value=u.transmission,p.transmissionSamplerMap.value=b.texture,p.transmissionSamplerSize.value.set(b.width,b.height),u.transmissionMap&&(p.transmissionMap.value=u.transmissionMap,t(u.transmissionMap,p.transmissionMapTransform)),p.thickness.value=u.thickness,u.thicknessMap&&(p.thicknessMap.value=u.thicknessMap,t(u.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=u.attenuationDistance,p.attenuationColor.value.copy(u.attenuationColor)),u.anisotropy>0&&(p.anisotropyVector.value.set(u.anisotropy*Math.cos(u.anisotropyRotation),u.anisotropy*Math.sin(u.anisotropyRotation)),u.anisotropyMap&&(p.anisotropyMap.value=u.anisotropyMap,t(u.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=u.specularIntensity,p.specularColor.value.copy(u.specularColor),u.specularColorMap&&(p.specularColorMap.value=u.specularColorMap,t(u.specularColorMap,p.specularColorMapTransform)),u.specularIntensityMap&&(p.specularIntensityMap.value=u.specularIntensityMap,t(u.specularIntensityMap,p.specularIntensityMapTransform))}function _(p,u){u.matcap&&(p.matcap.value=u.matcap)}function x(p,u){const b=e.get(u).light;p.referencePosition.value.setFromMatrixPosition(b.matrixWorld),p.nearDistance.value=b.shadow.camera.near,p.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function pp(i,e,t,n){let r={},s={},a=[];const o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(b,T){const E=T.program;n.uniformBlockBinding(b,E)}function l(b,T){let E=r[b.id];E===void 0&&(_(b),E=h(b),r[b.id]=E,b.addEventListener("dispose",p));const R=T.program;n.updateUBOMapping(b,R);const w=e.render.frame;s[b.id]!==w&&(d(b),s[b.id]=w)}function h(b){const T=f();b.__bindingPointIndex=T;const E=i.createBuffer(),R=b.__size,w=b.usage;return i.bindBuffer(i.UNIFORM_BUFFER,E),i.bufferData(i.UNIFORM_BUFFER,R,w),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,T,E),E}function f(){for(let b=0;b<o;b++)if(a.indexOf(b)===-1)return a.push(b),b;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(b){const T=r[b.id],E=b.uniforms,R=b.__cache;i.bindBuffer(i.UNIFORM_BUFFER,T);for(let w=0,C=E.length;w<C;w++){const N=Array.isArray(E[w])?E[w]:[E[w]];for(let S=0,M=N.length;S<M;S++){const D=N[S];if(m(D,w,S,R)===!0){const O=D.__offset,H=Array.isArray(D.value)?D.value:[D.value];let k=0;for(let q=0;q<H.length;q++){const W=H[q],te=x(W);typeof W=="number"||typeof W=="boolean"?(D.__data[0]=W,i.bufferSubData(i.UNIFORM_BUFFER,O+k,D.__data)):W.isMatrix3?(D.__data[0]=W.elements[0],D.__data[1]=W.elements[1],D.__data[2]=W.elements[2],D.__data[3]=0,D.__data[4]=W.elements[3],D.__data[5]=W.elements[4],D.__data[6]=W.elements[5],D.__data[7]=0,D.__data[8]=W.elements[6],D.__data[9]=W.elements[7],D.__data[10]=W.elements[8],D.__data[11]=0):(W.toArray(D.__data,k),k+=te.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,O,D.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function m(b,T,E,R){const w=b.value,C=T+"_"+E;if(R[C]===void 0)return typeof w=="number"||typeof w=="boolean"?R[C]=w:R[C]=w.clone(),!0;{const N=R[C];if(typeof w=="number"||typeof w=="boolean"){if(N!==w)return R[C]=w,!0}else if(N.equals(w)===!1)return N.copy(w),!0}return!1}function _(b){const T=b.uniforms;let E=0;const R=16;for(let C=0,N=T.length;C<N;C++){const S=Array.isArray(T[C])?T[C]:[T[C]];for(let M=0,D=S.length;M<D;M++){const O=S[M],H=Array.isArray(O.value)?O.value:[O.value];for(let k=0,q=H.length;k<q;k++){const W=H[k],te=x(W),V=E%R,se=V%te.boundary,ce=V+se;E+=se,ce!==0&&R-ce<te.storage&&(E+=R-ce),O.__data=new Float32Array(te.storage/Float32Array.BYTES_PER_ELEMENT),O.__offset=E,E+=te.storage}}}const w=E%R;return w>0&&(E+=R-w),b.__size=E,b.__cache={},this}function x(b){const T={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(T.boundary=4,T.storage=4):b.isVector2?(T.boundary=8,T.storage=8):b.isVector3||b.isColor?(T.boundary=16,T.storage=12):b.isVector4?(T.boundary=16,T.storage=16):b.isMatrix3?(T.boundary=48,T.storage=48):b.isMatrix4?(T.boundary=64,T.storage=64):b.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",b),T}function p(b){const T=b.target;T.removeEventListener("dispose",p);const E=a.indexOf(T.__bindingPointIndex);a.splice(E,1),i.deleteBuffer(r[T.id]),delete r[T.id],delete s[T.id]}function u(){for(const b in r)i.deleteBuffer(r[b]);a=[],r={},s={}}return{bind:c,update:l,dispose:u}}class Ep{constructor(e={}){const{canvas:t=Zl(),context:n=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:d=!1}=e;this.isWebGLRenderer=!0;let m;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=n.getContextAttributes().alpha}else m=a;const _=new Uint32Array(4),x=new Int32Array(4);let p=null,u=null;const b=[],T=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=mn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const E=this;let R=!1;this._outputColorSpace=Lt;let w=0,C=0,N=null,S=-1,M=null;const D=new Je,O=new Je;let H=null;const k=new Ge(0);let q=0,W=t.width,te=t.height,V=1,se=null,ce=null;const Ee=new Je(0,0,W,te),Fe=new Je(0,0,W,te);let Ke=!1;const Qe=new $s;let ke=!1,Y=!1;const $=new nt,fe=new I,Ce=new Je,Se={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ze=!1;function ft(){return N===null?V:1}let A=n;function et(v,L){return t.getContext(v,L)}try{const v={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${zs}`),t.addEventListener("webglcontextlost",ie,!1),t.addEventListener("webglcontextrestored",he,!1),t.addEventListener("webglcontextcreationerror",Z,!1),A===null){const L="webgl2";if(A=et(L,v),A===null)throw et(L)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(v){throw console.error("THREE.WebGLRenderer: "+v.message),v}let Le,we,me,tt,ge,Ie,ut,at,y,g,F,X,K,G,Me,ne,_e,ve,Q,le,Ae,xe,ae,Ue;function P(){Le=new bf(A),Le.init(),xe=new op(A,Le),we=new vf(A,Le,e,xe),me=new sp(A,Le),we.reversedDepthBuffer&&d&&me.buffers.depth.setReversed(!0),tt=new Rf(A),ge=new qd,Ie=new ap(A,Le,me,ge,we,xe,tt),ut=new Mf(E),at=new Tf(E),y=new Uc(A),ae=new gf(A,y),g=new Af(A,y,tt,ae),F=new Pf(A,g,y,tt),Q=new Cf(A,we,Ie),ne=new xf(ge),X=new Xd(E,ut,at,Le,we,ae,ne),K=new dp(E,ge),G=new jd,Me=new ep(Le),ve=new mf(E,ut,at,me,F,m,c),_e=new ip(E,F,we),Ue=new pp(A,tt,we,me),le=new _f(A,Le,tt),Ae=new wf(A,Le,tt),tt.programs=X.programs,E.capabilities=we,E.extensions=Le,E.properties=ge,E.renderLists=G,E.shadowMap=_e,E.state=me,E.info=tt}P();const ee=new hp(E,A);this.xr=ee,this.getContext=function(){return A},this.getContextAttributes=function(){return A.getContextAttributes()},this.forceContextLoss=function(){const v=Le.get("WEBGL_lose_context");v&&v.loseContext()},this.forceContextRestore=function(){const v=Le.get("WEBGL_lose_context");v&&v.restoreContext()},this.getPixelRatio=function(){return V},this.setPixelRatio=function(v){v!==void 0&&(V=v,this.setSize(W,te,!1))},this.getSize=function(v){return v.set(W,te)},this.setSize=function(v,L,B=!0){if(ee.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}W=v,te=L,t.width=Math.floor(v*V),t.height=Math.floor(L*V),B===!0&&(t.style.width=v+"px",t.style.height=L+"px"),this.setViewport(0,0,v,L)},this.getDrawingBufferSize=function(v){return v.set(W*V,te*V).floor()},this.setDrawingBufferSize=function(v,L,B){W=v,te=L,V=B,t.width=Math.floor(v*B),t.height=Math.floor(L*B),this.setViewport(0,0,v,L)},this.getCurrentViewport=function(v){return v.copy(D)},this.getViewport=function(v){return v.copy(Ee)},this.setViewport=function(v,L,B,z){v.isVector4?Ee.set(v.x,v.y,v.z,v.w):Ee.set(v,L,B,z),me.viewport(D.copy(Ee).multiplyScalar(V).round())},this.getScissor=function(v){return v.copy(Fe)},this.setScissor=function(v,L,B,z){v.isVector4?Fe.set(v.x,v.y,v.z,v.w):Fe.set(v,L,B,z),me.scissor(O.copy(Fe).multiplyScalar(V).round())},this.getScissorTest=function(){return Ke},this.setScissorTest=function(v){me.setScissorTest(Ke=v)},this.setOpaqueSort=function(v){se=v},this.setTransparentSort=function(v){ce=v},this.getClearColor=function(v){return v.copy(ve.getClearColor())},this.setClearColor=function(){ve.setClearColor(...arguments)},this.getClearAlpha=function(){return ve.getClearAlpha()},this.setClearAlpha=function(){ve.setClearAlpha(...arguments)},this.clear=function(v=!0,L=!0,B=!0){let z=0;if(v){let U=!1;if(N!==null){const J=N.texture.format;U=J===Xs||J===Ws||J===ks}if(U){const J=N.texture.type,oe=J===Nt||J===_n||J===gi||J===_i||J===Vs||J===Gs,de=ve.getClearColor(),ue=ve.getClearAlpha(),be=de.r,Re=de.g,ye=de.b;oe?(_[0]=be,_[1]=Re,_[2]=ye,_[3]=ue,A.clearBufferuiv(A.COLOR,0,_)):(x[0]=be,x[1]=Re,x[2]=ye,x[3]=ue,A.clearBufferiv(A.COLOR,0,x))}else z|=A.COLOR_BUFFER_BIT}L&&(z|=A.DEPTH_BUFFER_BIT),B&&(z|=A.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),A.clear(z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ie,!1),t.removeEventListener("webglcontextrestored",he,!1),t.removeEventListener("webglcontextcreationerror",Z,!1),ve.dispose(),G.dispose(),Me.dispose(),ge.dispose(),ut.dispose(),at.dispose(),F.dispose(),ae.dispose(),Ue.dispose(),X.dispose(),ee.dispose(),ee.removeEventListener("sessionstart",Gt),ee.removeEventListener("sessionend",Qs),xn.stop()};function ie(v){v.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),R=!0}function he(){console.log("THREE.WebGLRenderer: Context Restored."),R=!1;const v=tt.autoReset,L=_e.enabled,B=_e.autoUpdate,z=_e.needsUpdate,U=_e.type;P(),tt.autoReset=v,_e.enabled=L,_e.autoUpdate=B,_e.needsUpdate=z,_e.type=U}function Z(v){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",v.statusMessage)}function j(v){const L=v.target;L.removeEventListener("dispose",j),pe(L)}function pe(v){De(v),ge.remove(v)}function De(v){const L=ge.get(v).programs;L!==void 0&&(L.forEach(function(B){X.releaseProgram(B)}),v.isShaderMaterial&&X.releaseShaderCache(v))}this.renderBufferDirect=function(v,L,B,z,U,J){L===null&&(L=Se);const oe=U.isMesh&&U.matrixWorld.determinant()<0,de=Ho(v,L,B,z,U);me.setMaterial(z,oe);let ue=B.index,be=1;if(z.wireframe===!0){if(ue=g.getWireframeAttribute(B),ue===void 0)return;be=2}const Re=B.drawRange,ye=B.attributes.position;let Oe=Re.start*be,qe=(Re.start+Re.count)*be;J!==null&&(Oe=Math.max(Oe,J.start*be),qe=Math.min(qe,(J.start+J.count)*be)),ue!==null?(Oe=Math.max(Oe,0),qe=Math.min(qe,ue.count)):ye!=null&&(Oe=Math.max(Oe,0),qe=Math.min(qe,ye.count));const st=qe-Oe;if(st<0||st===1/0)return;ae.setup(U,z,de,B,ue);let Ze,je=le;if(ue!==null&&(Ze=y.get(ue),je=Ae,je.setIndex(Ze)),U.isMesh)z.wireframe===!0?(me.setLineWidth(z.wireframeLinewidth*ft()),je.setMode(A.LINES)):je.setMode(A.TRIANGLES);else if(U.isLine){let Te=z.linewidth;Te===void 0&&(Te=1),me.setLineWidth(Te*ft()),U.isLineSegments?je.setMode(A.LINES):U.isLineLoop?je.setMode(A.LINE_LOOP):je.setMode(A.LINE_STRIP)}else U.isPoints?je.setMode(A.POINTS):U.isSprite&&je.setMode(A.TRIANGLES);if(U.isBatchedMesh)if(U._multiDrawInstances!==null)Si("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),je.renderMultiDrawInstances(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount,U._multiDrawInstances);else if(Le.get("WEBGL_multi_draw"))je.renderMultiDraw(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount);else{const Te=U._multiDrawStarts,it=U._multiDrawCounts,He=U._multiDrawCount,yt=ue?y.get(ue).bytesPerElement:1,Un=ge.get(z).currentProgram.getUniforms();for(let Tt=0;Tt<He;Tt++)Un.setValue(A,"_gl_DrawID",Tt),je.render(Te[Tt]/yt,it[Tt])}else if(U.isInstancedMesh)je.renderInstances(Oe,st,U.count);else if(B.isInstancedBufferGeometry){const Te=B._maxInstanceCount!==void 0?B._maxInstanceCount:1/0,it=Math.min(B.instanceCount,Te);je.renderInstances(Oe,st,it)}else je.render(Oe,st)};function $e(v,L,B){v.transparent===!0&&v.side===tn&&v.forceSinglePass===!1?(v.side=St,v.needsUpdate=!0,Ai(v,L,B),v.side=gn,v.needsUpdate=!0,Ai(v,L,B),v.side=tn):Ai(v,L,B)}this.compile=function(v,L,B=null){B===null&&(B=v),u=Me.get(B),u.init(L),T.push(u),B.traverseVisible(function(U){U.isLight&&U.layers.test(L.layers)&&(u.pushLight(U),U.castShadow&&u.pushShadow(U))}),v!==B&&v.traverseVisible(function(U){U.isLight&&U.layers.test(L.layers)&&(u.pushLight(U),U.castShadow&&u.pushShadow(U))}),u.setupLights();const z=new Set;return v.traverse(function(U){if(!(U.isMesh||U.isPoints||U.isLine||U.isSprite))return;const J=U.material;if(J)if(Array.isArray(J))for(let oe=0;oe<J.length;oe++){const de=J[oe];$e(de,B,U),z.add(de)}else $e(J,B,U),z.add(J)}),u=T.pop(),z},this.compileAsync=function(v,L,B=null){const z=this.compile(v,L,B);return new Promise(U=>{function J(){if(z.forEach(function(oe){ge.get(oe).currentProgram.isReady()&&z.delete(oe)}),z.size===0){U(v);return}setTimeout(J,10)}Le.get("KHR_parallel_shader_compile")!==null?J():setTimeout(J,10)})};let We=null;function jt(v){We&&We(v)}function Gt(){xn.stop()}function Qs(){xn.start()}const xn=new No;xn.setAnimationLoop(jt),typeof self<"u"&&xn.setContext(self),this.setAnimationLoop=function(v){We=v,ee.setAnimationLoop(v),v===null?xn.stop():xn.start()},ee.addEventListener("sessionstart",Gt),ee.addEventListener("sessionend",Qs),this.render=function(v,L){if(L!==void 0&&L.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(R===!0)return;if(v.matrixWorldAutoUpdate===!0&&v.updateMatrixWorld(),L.parent===null&&L.matrixWorldAutoUpdate===!0&&L.updateMatrixWorld(),ee.enabled===!0&&ee.isPresenting===!0&&(ee.cameraAutoUpdate===!0&&ee.updateCamera(L),L=ee.getCamera()),v.isScene===!0&&v.onBeforeRender(E,v,L,N),u=Me.get(v,T.length),u.init(L),T.push(u),$.multiplyMatrices(L.projectionMatrix,L.matrixWorldInverse),Qe.setFromProjectionMatrix($,Xt,L.reversedDepth),Y=this.localClippingEnabled,ke=ne.init(this.clippingPlanes,Y),p=G.get(v,b.length),p.init(),b.push(p),ee.enabled===!0&&ee.isPresenting===!0){const J=E.xr.getDepthSensingMesh();J!==null&&xr(J,L,-1/0,E.sortObjects)}xr(v,L,0,E.sortObjects),p.finish(),E.sortObjects===!0&&p.sort(se,ce),ze=ee.enabled===!1||ee.isPresenting===!1||ee.hasDepthSensing()===!1,ze&&ve.addToRenderList(p,v),this.info.render.frame++,ke===!0&&ne.beginShadows();const B=u.state.shadowsArray;_e.render(B,v,L),ke===!0&&ne.endShadows(),this.info.autoReset===!0&&this.info.reset();const z=p.opaque,U=p.transmissive;if(u.setupLights(),L.isArrayCamera){const J=L.cameras;if(U.length>0)for(let oe=0,de=J.length;oe<de;oe++){const ue=J[oe];ta(z,U,v,ue)}ze&&ve.render(v);for(let oe=0,de=J.length;oe<de;oe++){const ue=J[oe];ea(p,v,ue,ue.viewport)}}else U.length>0&&ta(z,U,v,L),ze&&ve.render(v),ea(p,v,L);N!==null&&C===0&&(Ie.updateMultisampleRenderTarget(N),Ie.updateRenderTargetMipmap(N)),v.isScene===!0&&v.onAfterRender(E,v,L),ae.resetDefaultState(),S=-1,M=null,T.pop(),T.length>0?(u=T[T.length-1],ke===!0&&ne.setGlobalState(E.clippingPlanes,u.state.camera)):u=null,b.pop(),b.length>0?p=b[b.length-1]:p=null};function xr(v,L,B,z){if(v.visible===!1)return;if(v.layers.test(L.layers)){if(v.isGroup)B=v.renderOrder;else if(v.isLOD)v.autoUpdate===!0&&v.update(L);else if(v.isLight)u.pushLight(v),v.castShadow&&u.pushShadow(v);else if(v.isSprite){if(!v.frustumCulled||Qe.intersectsSprite(v)){z&&Ce.setFromMatrixPosition(v.matrixWorld).applyMatrix4($);const oe=F.update(v),de=v.material;de.visible&&p.push(v,oe,de,B,Ce.z,null)}}else if((v.isMesh||v.isLine||v.isPoints)&&(!v.frustumCulled||Qe.intersectsObject(v))){const oe=F.update(v),de=v.material;if(z&&(v.boundingSphere!==void 0?(v.boundingSphere===null&&v.computeBoundingSphere(),Ce.copy(v.boundingSphere.center)):(oe.boundingSphere===null&&oe.computeBoundingSphere(),Ce.copy(oe.boundingSphere.center)),Ce.applyMatrix4(v.matrixWorld).applyMatrix4($)),Array.isArray(de)){const ue=oe.groups;for(let be=0,Re=ue.length;be<Re;be++){const ye=ue[be],Oe=de[ye.materialIndex];Oe&&Oe.visible&&p.push(v,oe,Oe,B,Ce.z,ye)}}else de.visible&&p.push(v,oe,de,B,Ce.z,null)}}const J=v.children;for(let oe=0,de=J.length;oe<de;oe++)xr(J[oe],L,B,z)}function ea(v,L,B,z){const U=v.opaque,J=v.transmissive,oe=v.transparent;u.setupLightsView(B),ke===!0&&ne.setGlobalState(E.clippingPlanes,B),z&&me.viewport(D.copy(z)),U.length>0&&bi(U,L,B),J.length>0&&bi(J,L,B),oe.length>0&&bi(oe,L,B),me.buffers.depth.setTest(!0),me.buffers.depth.setMask(!0),me.buffers.color.setMask(!0),me.setPolygonOffset(!1)}function ta(v,L,B,z){if((B.isScene===!0?B.overrideMaterial:null)!==null)return;u.state.transmissionRenderTarget[z.id]===void 0&&(u.state.transmissionRenderTarget[z.id]=new sn(1,1,{generateMipmaps:!0,type:Le.has("EXT_color_buffer_half_float")||Le.has("EXT_color_buffer_float")?ri:Nt,minFilter:Ln,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ve.workingColorSpace}));const J=u.state.transmissionRenderTarget[z.id],oe=z.viewport||D;J.setSize(oe.z*E.transmissionResolutionScale,oe.w*E.transmissionResolutionScale);const de=E.getRenderTarget(),ue=E.getActiveCubeFace(),be=E.getActiveMipmapLevel();E.setRenderTarget(J),E.getClearColor(k),q=E.getClearAlpha(),q<1&&E.setClearColor(16777215,.5),E.clear(),ze&&ve.render(B);const Re=E.toneMapping;E.toneMapping=mn;const ye=z.viewport;if(z.viewport!==void 0&&(z.viewport=void 0),u.setupLightsView(z),ke===!0&&ne.setGlobalState(E.clippingPlanes,z),bi(v,B,z),Ie.updateMultisampleRenderTarget(J),Ie.updateRenderTargetMipmap(J),Le.has("WEBGL_multisampled_render_to_texture")===!1){let Oe=!1;for(let qe=0,st=L.length;qe<st;qe++){const Ze=L[qe],je=Ze.object,Te=Ze.geometry,it=Ze.material,He=Ze.group;if(it.side===tn&&je.layers.test(z.layers)){const yt=it.side;it.side=St,it.needsUpdate=!0,na(je,B,z,Te,it,He),it.side=yt,it.needsUpdate=!0,Oe=!0}}Oe===!0&&(Ie.updateMultisampleRenderTarget(J),Ie.updateRenderTargetMipmap(J))}E.setRenderTarget(de,ue,be),E.setClearColor(k,q),ye!==void 0&&(z.viewport=ye),E.toneMapping=Re}function bi(v,L,B){const z=L.isScene===!0?L.overrideMaterial:null;for(let U=0,J=v.length;U<J;U++){const oe=v[U],de=oe.object,ue=oe.geometry,be=oe.group;let Re=oe.material;Re.allowOverride===!0&&z!==null&&(Re=z),de.layers.test(B.layers)&&na(de,L,B,ue,Re,be)}}function na(v,L,B,z,U,J){v.onBeforeRender(E,L,B,z,U,J),v.modelViewMatrix.multiplyMatrices(B.matrixWorldInverse,v.matrixWorld),v.normalMatrix.getNormalMatrix(v.modelViewMatrix),U.onBeforeRender(E,L,B,z,v,J),U.transparent===!0&&U.side===tn&&U.forceSinglePass===!1?(U.side=St,U.needsUpdate=!0,E.renderBufferDirect(B,L,z,U,v,J),U.side=gn,U.needsUpdate=!0,E.renderBufferDirect(B,L,z,U,v,J),U.side=tn):E.renderBufferDirect(B,L,z,U,v,J),v.onAfterRender(E,L,B,z,U,J)}function Ai(v,L,B){L.isScene!==!0&&(L=Se);const z=ge.get(v),U=u.state.lights,J=u.state.shadowsArray,oe=U.state.version,de=X.getParameters(v,U.state,J,L,B),ue=X.getProgramCacheKey(de);let be=z.programs;z.environment=v.isMeshStandardMaterial?L.environment:null,z.fog=L.fog,z.envMap=(v.isMeshStandardMaterial?at:ut).get(v.envMap||z.environment),z.envMapRotation=z.environment!==null&&v.envMap===null?L.environmentRotation:v.envMapRotation,be===void 0&&(v.addEventListener("dispose",j),be=new Map,z.programs=be);let Re=be.get(ue);if(Re!==void 0){if(z.currentProgram===Re&&z.lightsStateVersion===oe)return ra(v,de),Re}else de.uniforms=X.getUniforms(v),v.onBeforeCompile(de,E),Re=X.acquireProgram(de,ue),be.set(ue,Re),z.uniforms=de.uniforms;const ye=z.uniforms;return(!v.isShaderMaterial&&!v.isRawShaderMaterial||v.clipping===!0)&&(ye.clippingPlanes=ne.uniform),ra(v,de),z.needsLights=Go(v),z.lightsStateVersion=oe,z.needsLights&&(ye.ambientLightColor.value=U.state.ambient,ye.lightProbe.value=U.state.probe,ye.directionalLights.value=U.state.directional,ye.directionalLightShadows.value=U.state.directionalShadow,ye.spotLights.value=U.state.spot,ye.spotLightShadows.value=U.state.spotShadow,ye.rectAreaLights.value=U.state.rectArea,ye.ltc_1.value=U.state.rectAreaLTC1,ye.ltc_2.value=U.state.rectAreaLTC2,ye.pointLights.value=U.state.point,ye.pointLightShadows.value=U.state.pointShadow,ye.hemisphereLights.value=U.state.hemi,ye.directionalShadowMap.value=U.state.directionalShadowMap,ye.directionalShadowMatrix.value=U.state.directionalShadowMatrix,ye.spotShadowMap.value=U.state.spotShadowMap,ye.spotLightMatrix.value=U.state.spotLightMatrix,ye.spotLightMap.value=U.state.spotLightMap,ye.pointShadowMap.value=U.state.pointShadowMap,ye.pointShadowMatrix.value=U.state.pointShadowMatrix),z.currentProgram=Re,z.uniformsList=null,Re}function ia(v){if(v.uniformsList===null){const L=v.currentProgram.getUniforms();v.uniformsList=rr.seqWithValue(L.seq,v.uniforms)}return v.uniformsList}function ra(v,L){const B=ge.get(v);B.outputColorSpace=L.outputColorSpace,B.batching=L.batching,B.batchingColor=L.batchingColor,B.instancing=L.instancing,B.instancingColor=L.instancingColor,B.instancingMorph=L.instancingMorph,B.skinning=L.skinning,B.morphTargets=L.morphTargets,B.morphNormals=L.morphNormals,B.morphColors=L.morphColors,B.morphTargetsCount=L.morphTargetsCount,B.numClippingPlanes=L.numClippingPlanes,B.numIntersection=L.numClipIntersection,B.vertexAlphas=L.vertexAlphas,B.vertexTangents=L.vertexTangents,B.toneMapping=L.toneMapping}function Ho(v,L,B,z,U){L.isScene!==!0&&(L=Se),Ie.resetTextureUnits();const J=L.fog,oe=z.isMeshStandardMaterial?L.environment:null,de=N===null?E.outputColorSpace:N.isXRRenderTarget===!0?N.texture.colorSpace:ni,ue=(z.isMeshStandardMaterial?at:ut).get(z.envMap||oe),be=z.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,Re=!!B.attributes.tangent&&(!!z.normalMap||z.anisotropy>0),ye=!!B.morphAttributes.position,Oe=!!B.morphAttributes.normal,qe=!!B.morphAttributes.color;let st=mn;z.toneMapped&&(N===null||N.isXRRenderTarget===!0)&&(st=E.toneMapping);const Ze=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,je=Ze!==void 0?Ze.length:0,Te=ge.get(z),it=u.state.lights;if(ke===!0&&(Y===!0||v!==M)){const gt=v===M&&z.id===S;ne.setState(z,v,gt)}let He=!1;z.version===Te.__version?(Te.needsLights&&Te.lightsStateVersion!==it.state.version||Te.outputColorSpace!==de||U.isBatchedMesh&&Te.batching===!1||!U.isBatchedMesh&&Te.batching===!0||U.isBatchedMesh&&Te.batchingColor===!0&&U.colorTexture===null||U.isBatchedMesh&&Te.batchingColor===!1&&U.colorTexture!==null||U.isInstancedMesh&&Te.instancing===!1||!U.isInstancedMesh&&Te.instancing===!0||U.isSkinnedMesh&&Te.skinning===!1||!U.isSkinnedMesh&&Te.skinning===!0||U.isInstancedMesh&&Te.instancingColor===!0&&U.instanceColor===null||U.isInstancedMesh&&Te.instancingColor===!1&&U.instanceColor!==null||U.isInstancedMesh&&Te.instancingMorph===!0&&U.morphTexture===null||U.isInstancedMesh&&Te.instancingMorph===!1&&U.morphTexture!==null||Te.envMap!==ue||z.fog===!0&&Te.fog!==J||Te.numClippingPlanes!==void 0&&(Te.numClippingPlanes!==ne.numPlanes||Te.numIntersection!==ne.numIntersection)||Te.vertexAlphas!==be||Te.vertexTangents!==Re||Te.morphTargets!==ye||Te.morphNormals!==Oe||Te.morphColors!==qe||Te.toneMapping!==st||Te.morphTargetsCount!==je)&&(He=!0):(He=!0,Te.__version=z.version);let yt=Te.currentProgram;He===!0&&(yt=Ai(z,L,U));let Un=!1,Tt=!1,li=!1;const rt=yt.getUniforms(),Ct=Te.uniforms;if(me.useProgram(yt.program)&&(Un=!0,Tt=!0,li=!0),z.id!==S&&(S=z.id,Tt=!0),Un||M!==v){me.buffers.depth.getReversed()&&v.reversedDepth!==!0&&(v._reversedDepth=!0,v.updateProjectionMatrix()),rt.setValue(A,"projectionMatrix",v.projectionMatrix),rt.setValue(A,"viewMatrix",v.matrixWorldInverse);const Mt=rt.map.cameraPosition;Mt!==void 0&&Mt.setValue(A,fe.setFromMatrixPosition(v.matrixWorld)),we.logarithmicDepthBuffer&&rt.setValue(A,"logDepthBufFC",2/(Math.log(v.far+1)/Math.LN2)),(z.isMeshPhongMaterial||z.isMeshToonMaterial||z.isMeshLambertMaterial||z.isMeshBasicMaterial||z.isMeshStandardMaterial||z.isShaderMaterial)&&rt.setValue(A,"isOrthographic",v.isOrthographicCamera===!0),M!==v&&(M=v,Tt=!0,li=!0)}if(U.isSkinnedMesh){rt.setOptional(A,U,"bindMatrix"),rt.setOptional(A,U,"bindMatrixInverse");const gt=U.skeleton;gt&&(gt.boneTexture===null&&gt.computeBoneTexture(),rt.setValue(A,"boneTexture",gt.boneTexture,Ie))}U.isBatchedMesh&&(rt.setOptional(A,U,"batchingTexture"),rt.setValue(A,"batchingTexture",U._matricesTexture,Ie),rt.setOptional(A,U,"batchingIdTexture"),rt.setValue(A,"batchingIdTexture",U._indirectTexture,Ie),rt.setOptional(A,U,"batchingColorTexture"),U._colorsTexture!==null&&rt.setValue(A,"batchingColorTexture",U._colorsTexture,Ie));const Pt=B.morphAttributes;if((Pt.position!==void 0||Pt.normal!==void 0||Pt.color!==void 0)&&Q.update(U,B,yt),(Tt||Te.receiveShadow!==U.receiveShadow)&&(Te.receiveShadow=U.receiveShadow,rt.setValue(A,"receiveShadow",U.receiveShadow)),z.isMeshGouraudMaterial&&z.envMap!==null&&(Ct.envMap.value=ue,Ct.flipEnvMap.value=ue.isCubeTexture&&ue.isRenderTargetTexture===!1?-1:1),z.isMeshStandardMaterial&&z.envMap===null&&L.environment!==null&&(Ct.envMapIntensity.value=L.environmentIntensity),Tt&&(rt.setValue(A,"toneMappingExposure",E.toneMappingExposure),Te.needsLights&&Vo(Ct,li),J&&z.fog===!0&&K.refreshFogUniforms(Ct,J),K.refreshMaterialUniforms(Ct,z,V,te,u.state.transmissionRenderTarget[v.id]),rr.upload(A,ia(Te),Ct,Ie)),z.isShaderMaterial&&z.uniformsNeedUpdate===!0&&(rr.upload(A,ia(Te),Ct,Ie),z.uniformsNeedUpdate=!1),z.isSpriteMaterial&&rt.setValue(A,"center",U.center),rt.setValue(A,"modelViewMatrix",U.modelViewMatrix),rt.setValue(A,"normalMatrix",U.normalMatrix),rt.setValue(A,"modelMatrix",U.matrixWorld),z.isShaderMaterial||z.isRawShaderMaterial){const gt=z.uniformsGroups;for(let Mt=0,Mr=gt.length;Mt<Mr;Mt++){const Mn=gt[Mt];Ue.update(Mn,yt),Ue.bind(Mn,yt)}}return yt}function Vo(v,L){v.ambientLightColor.needsUpdate=L,v.lightProbe.needsUpdate=L,v.directionalLights.needsUpdate=L,v.directionalLightShadows.needsUpdate=L,v.pointLights.needsUpdate=L,v.pointLightShadows.needsUpdate=L,v.spotLights.needsUpdate=L,v.spotLightShadows.needsUpdate=L,v.rectAreaLights.needsUpdate=L,v.hemisphereLights.needsUpdate=L}function Go(v){return v.isMeshLambertMaterial||v.isMeshToonMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isShadowMaterial||v.isShaderMaterial&&v.lights===!0}this.getActiveCubeFace=function(){return w},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return N},this.setRenderTargetTextures=function(v,L,B){const z=ge.get(v);z.__autoAllocateDepthBuffer=v.resolveDepthBuffer===!1,z.__autoAllocateDepthBuffer===!1&&(z.__useRenderToTexture=!1),ge.get(v.texture).__webglTexture=L,ge.get(v.depthTexture).__webglTexture=z.__autoAllocateDepthBuffer?void 0:B,z.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(v,L){const B=ge.get(v);B.__webglFramebuffer=L,B.__useDefaultFramebuffer=L===void 0};const ko=A.createFramebuffer();this.setRenderTarget=function(v,L=0,B=0){N=v,w=L,C=B;let z=!0,U=null,J=!1,oe=!1;if(v){const ue=ge.get(v);if(ue.__useDefaultFramebuffer!==void 0)me.bindFramebuffer(A.FRAMEBUFFER,null),z=!1;else if(ue.__webglFramebuffer===void 0)Ie.setupRenderTarget(v);else if(ue.__hasExternalTextures)Ie.rebindTextures(v,ge.get(v.texture).__webglTexture,ge.get(v.depthTexture).__webglTexture);else if(v.depthBuffer){const ye=v.depthTexture;if(ue.__boundDepthTexture!==ye){if(ye!==null&&ge.has(ye)&&(v.width!==ye.image.width||v.height!==ye.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");Ie.setupDepthRenderbuffer(v)}}const be=v.texture;(be.isData3DTexture||be.isDataArrayTexture||be.isCompressedArrayTexture)&&(oe=!0);const Re=ge.get(v).__webglFramebuffer;v.isWebGLCubeRenderTarget?(Array.isArray(Re[L])?U=Re[L][B]:U=Re[L],J=!0):v.samples>0&&Ie.useMultisampledRTT(v)===!1?U=ge.get(v).__webglMultisampledFramebuffer:Array.isArray(Re)?U=Re[B]:U=Re,D.copy(v.viewport),O.copy(v.scissor),H=v.scissorTest}else D.copy(Ee).multiplyScalar(V).floor(),O.copy(Fe).multiplyScalar(V).floor(),H=Ke;if(B!==0&&(U=ko),me.bindFramebuffer(A.FRAMEBUFFER,U)&&z&&me.drawBuffers(v,U),me.viewport(D),me.scissor(O),me.setScissorTest(H),J){const ue=ge.get(v.texture);A.framebufferTexture2D(A.FRAMEBUFFER,A.COLOR_ATTACHMENT0,A.TEXTURE_CUBE_MAP_POSITIVE_X+L,ue.__webglTexture,B)}else if(oe){const ue=L;for(let be=0;be<v.textures.length;be++){const Re=ge.get(v.textures[be]);A.framebufferTextureLayer(A.FRAMEBUFFER,A.COLOR_ATTACHMENT0+be,Re.__webglTexture,B,ue)}}else if(v!==null&&B!==0){const ue=ge.get(v.texture);A.framebufferTexture2D(A.FRAMEBUFFER,A.COLOR_ATTACHMENT0,A.TEXTURE_2D,ue.__webglTexture,B)}S=-1},this.readRenderTargetPixels=function(v,L,B,z,U,J,oe,de=0){if(!(v&&v.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ue=ge.get(v).__webglFramebuffer;if(v.isWebGLCubeRenderTarget&&oe!==void 0&&(ue=ue[oe]),ue){me.bindFramebuffer(A.FRAMEBUFFER,ue);try{const be=v.textures[de],Re=be.format,ye=be.type;if(!we.textureFormatReadable(Re)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!we.textureTypeReadable(ye)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}L>=0&&L<=v.width-z&&B>=0&&B<=v.height-U&&(v.textures.length>1&&A.readBuffer(A.COLOR_ATTACHMENT0+de),A.readPixels(L,B,z,U,xe.convert(Re),xe.convert(ye),J))}finally{const be=N!==null?ge.get(N).__webglFramebuffer:null;me.bindFramebuffer(A.FRAMEBUFFER,be)}}},this.readRenderTargetPixelsAsync=async function(v,L,B,z,U,J,oe,de=0){if(!(v&&v.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ue=ge.get(v).__webglFramebuffer;if(v.isWebGLCubeRenderTarget&&oe!==void 0&&(ue=ue[oe]),ue)if(L>=0&&L<=v.width-z&&B>=0&&B<=v.height-U){me.bindFramebuffer(A.FRAMEBUFFER,ue);const be=v.textures[de],Re=be.format,ye=be.type;if(!we.textureFormatReadable(Re))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!we.textureTypeReadable(ye))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Oe=A.createBuffer();A.bindBuffer(A.PIXEL_PACK_BUFFER,Oe),A.bufferData(A.PIXEL_PACK_BUFFER,J.byteLength,A.STREAM_READ),v.textures.length>1&&A.readBuffer(A.COLOR_ATTACHMENT0+de),A.readPixels(L,B,z,U,xe.convert(Re),xe.convert(ye),0);const qe=N!==null?ge.get(N).__webglFramebuffer:null;me.bindFramebuffer(A.FRAMEBUFFER,qe);const st=A.fenceSync(A.SYNC_GPU_COMMANDS_COMPLETE,0);return A.flush(),await Jl(A,st,4),A.bindBuffer(A.PIXEL_PACK_BUFFER,Oe),A.getBufferSubData(A.PIXEL_PACK_BUFFER,0,J),A.deleteBuffer(Oe),A.deleteSync(st),J}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(v,L=null,B=0){const z=Math.pow(2,-B),U=Math.floor(v.image.width*z),J=Math.floor(v.image.height*z),oe=L!==null?L.x:0,de=L!==null?L.y:0;Ie.setTexture2D(v,0),A.copyTexSubImage2D(A.TEXTURE_2D,B,0,0,oe,de,U,J),me.unbindTexture()};const Wo=A.createFramebuffer(),Xo=A.createFramebuffer();this.copyTextureToTexture=function(v,L,B=null,z=null,U=0,J=null){J===null&&(U!==0?(Si("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),J=U,U=0):J=0);let oe,de,ue,be,Re,ye,Oe,qe,st;const Ze=v.isCompressedTexture?v.mipmaps[J]:v.image;if(B!==null)oe=B.max.x-B.min.x,de=B.max.y-B.min.y,ue=B.isBox3?B.max.z-B.min.z:1,be=B.min.x,Re=B.min.y,ye=B.isBox3?B.min.z:0;else{const Pt=Math.pow(2,-U);oe=Math.floor(Ze.width*Pt),de=Math.floor(Ze.height*Pt),v.isDataArrayTexture?ue=Ze.depth:v.isData3DTexture?ue=Math.floor(Ze.depth*Pt):ue=1,be=0,Re=0,ye=0}z!==null?(Oe=z.x,qe=z.y,st=z.z):(Oe=0,qe=0,st=0);const je=xe.convert(L.format),Te=xe.convert(L.type);let it;L.isData3DTexture?(Ie.setTexture3D(L,0),it=A.TEXTURE_3D):L.isDataArrayTexture||L.isCompressedArrayTexture?(Ie.setTexture2DArray(L,0),it=A.TEXTURE_2D_ARRAY):(Ie.setTexture2D(L,0),it=A.TEXTURE_2D),A.pixelStorei(A.UNPACK_FLIP_Y_WEBGL,L.flipY),A.pixelStorei(A.UNPACK_PREMULTIPLY_ALPHA_WEBGL,L.premultiplyAlpha),A.pixelStorei(A.UNPACK_ALIGNMENT,L.unpackAlignment);const He=A.getParameter(A.UNPACK_ROW_LENGTH),yt=A.getParameter(A.UNPACK_IMAGE_HEIGHT),Un=A.getParameter(A.UNPACK_SKIP_PIXELS),Tt=A.getParameter(A.UNPACK_SKIP_ROWS),li=A.getParameter(A.UNPACK_SKIP_IMAGES);A.pixelStorei(A.UNPACK_ROW_LENGTH,Ze.width),A.pixelStorei(A.UNPACK_IMAGE_HEIGHT,Ze.height),A.pixelStorei(A.UNPACK_SKIP_PIXELS,be),A.pixelStorei(A.UNPACK_SKIP_ROWS,Re),A.pixelStorei(A.UNPACK_SKIP_IMAGES,ye);const rt=v.isDataArrayTexture||v.isData3DTexture,Ct=L.isDataArrayTexture||L.isData3DTexture;if(v.isDepthTexture){const Pt=ge.get(v),gt=ge.get(L),Mt=ge.get(Pt.__renderTarget),Mr=ge.get(gt.__renderTarget);me.bindFramebuffer(A.READ_FRAMEBUFFER,Mt.__webglFramebuffer),me.bindFramebuffer(A.DRAW_FRAMEBUFFER,Mr.__webglFramebuffer);for(let Mn=0;Mn<ue;Mn++)rt&&(A.framebufferTextureLayer(A.READ_FRAMEBUFFER,A.COLOR_ATTACHMENT0,ge.get(v).__webglTexture,U,ye+Mn),A.framebufferTextureLayer(A.DRAW_FRAMEBUFFER,A.COLOR_ATTACHMENT0,ge.get(L).__webglTexture,J,st+Mn)),A.blitFramebuffer(be,Re,oe,de,Oe,qe,oe,de,A.DEPTH_BUFFER_BIT,A.NEAREST);me.bindFramebuffer(A.READ_FRAMEBUFFER,null),me.bindFramebuffer(A.DRAW_FRAMEBUFFER,null)}else if(U!==0||v.isRenderTargetTexture||ge.has(v)){const Pt=ge.get(v),gt=ge.get(L);me.bindFramebuffer(A.READ_FRAMEBUFFER,Wo),me.bindFramebuffer(A.DRAW_FRAMEBUFFER,Xo);for(let Mt=0;Mt<ue;Mt++)rt?A.framebufferTextureLayer(A.READ_FRAMEBUFFER,A.COLOR_ATTACHMENT0,Pt.__webglTexture,U,ye+Mt):A.framebufferTexture2D(A.READ_FRAMEBUFFER,A.COLOR_ATTACHMENT0,A.TEXTURE_2D,Pt.__webglTexture,U),Ct?A.framebufferTextureLayer(A.DRAW_FRAMEBUFFER,A.COLOR_ATTACHMENT0,gt.__webglTexture,J,st+Mt):A.framebufferTexture2D(A.DRAW_FRAMEBUFFER,A.COLOR_ATTACHMENT0,A.TEXTURE_2D,gt.__webglTexture,J),U!==0?A.blitFramebuffer(be,Re,oe,de,Oe,qe,oe,de,A.COLOR_BUFFER_BIT,A.NEAREST):Ct?A.copyTexSubImage3D(it,J,Oe,qe,st+Mt,be,Re,oe,de):A.copyTexSubImage2D(it,J,Oe,qe,be,Re,oe,de);me.bindFramebuffer(A.READ_FRAMEBUFFER,null),me.bindFramebuffer(A.DRAW_FRAMEBUFFER,null)}else Ct?v.isDataTexture||v.isData3DTexture?A.texSubImage3D(it,J,Oe,qe,st,oe,de,ue,je,Te,Ze.data):L.isCompressedArrayTexture?A.compressedTexSubImage3D(it,J,Oe,qe,st,oe,de,ue,je,Ze.data):A.texSubImage3D(it,J,Oe,qe,st,oe,de,ue,je,Te,Ze):v.isDataTexture?A.texSubImage2D(A.TEXTURE_2D,J,Oe,qe,oe,de,je,Te,Ze.data):v.isCompressedTexture?A.compressedTexSubImage2D(A.TEXTURE_2D,J,Oe,qe,Ze.width,Ze.height,je,Ze.data):A.texSubImage2D(A.TEXTURE_2D,J,Oe,qe,oe,de,je,Te,Ze);A.pixelStorei(A.UNPACK_ROW_LENGTH,He),A.pixelStorei(A.UNPACK_IMAGE_HEIGHT,yt),A.pixelStorei(A.UNPACK_SKIP_PIXELS,Un),A.pixelStorei(A.UNPACK_SKIP_ROWS,Tt),A.pixelStorei(A.UNPACK_SKIP_IMAGES,li),J===0&&L.generateMipmaps&&A.generateMipmap(it),me.unbindTexture()},this.initRenderTarget=function(v){ge.get(v).__webglFramebuffer===void 0&&Ie.setupRenderTarget(v)},this.initTexture=function(v){v.isCubeTexture?Ie.setTextureCube(v,0):v.isData3DTexture?Ie.setTexture3D(v,0):v.isDataArrayTexture||v.isCompressedArrayTexture?Ie.setTexture2DArray(v,0):Ie.setTexture2D(v,0),me.unbindTexture()},this.resetState=function(){w=0,C=0,N=null,me.reset(),ae.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Xt}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=Ve._getDrawingBufferColorSpace(e),t.unpackColorSpace=Ve._getUnpackColorSpace()}}const so=Object.freeze({sphere:0,ellipsoid:0,cylinder:1,box:2}),ao=(i,e)=>i instanceof I?i.clone():new I(...i??e);function vr(i){return Math.min(.65,Math.max(.05,i*.18))}class oo{constructor(e={}){this.position=new I,this.rotation=new Wt,this.radii=new I(4.5,3.5,4.5),this.shape="cylinder",this.softness=1.2,this.strength=1,this.enabled=!0,this.heightMode="layer",this.object=null,this.setOptions(e)}setOptions(e){const t={shape:this.shape,softness:this.softness,strength:this.strength,enabled:this.enabled,heightMode:this.heightMode,...e};if(!Object.hasOwn(so,t.shape))throw new RangeError("Unknown clearing shape");if(!["layer","manual"].includes(t.heightMode))throw new RangeError("heightMode must be layer or manual");if(!Number.isFinite(t.softness)||t.softness<=0)throw new RangeError("softness must be positive");if(!Number.isFinite(t.strength)||t.strength<0||t.strength>1)throw new RangeError("strength must be between 0 and 1");const n=ao(e.position,this.position.toArray());let r=ao(e.radii,this.radii.toArray());if(e.radius!==void 0){if(!Number.isFinite(e.radius)||e.radius<=0)throw new RangeError("radius must be positive");r.x=r.z=e.radius,t.shape==="sphere"&&(r.y=e.radius)}if(e.height!==void 0){if(!Number.isFinite(e.height)||e.height<=0)throw new RangeError("height must be positive");r.y=e.height/2}if(t.shape==="sphere"&&r.setScalar(r.x),![...n.toArray(),...r.toArray()].every(Number.isFinite)||Math.min(...r.toArray())<=0)throw new RangeError("Invalid area dimensions");const s=e.rotation instanceof Wt?e.rotation.clone():new Wt(...e.rotation??this.rotation.toArray());if(!s.toArray().every(Number.isFinite)||s.lengthSq()<1e-12)throw new RangeError("Invalid area rotation");return Object.assign(this,{shape:t.shape,softness:t.softness,strength:t.strength,enabled:!!t.enabled,heightMode:t.heightMode}),this.position.copy(n),this.radii.copy(r),this.rotation.copy(s.normalize()),this}attach(e){if(!e?.isObject3D)throw new TypeError("attach expects a Three.js Object3D");return this.object=e,this}detach(){if(this.object){const e=this.worldTransform();this.position.copy(e.center),this.rotation.copy(e.rotation),this.object=null}return this}worldTransform(){const e=this.position.clone(),t=this.rotation.clone();if(this.object){this.object.updateWorldMatrix(!0,!0);const n=new vn().setFromObject(this.object);n.isEmpty()?this.object.getWorldPosition(e):n.getCenter(e),e.add(this.position.clone().applyQuaternion(this.object.getWorldQuaternion(new Wt))),t.premultiply(this.object.getWorldQuaternion(new Wt))}return{center:e,rotation:t}}volume(e){const{center:t,rotation:n}=this.worldTransform(),r=this.radii.clone();if(this.heightMode==="layer"&&this.shape!=="sphere"){const a=new I(0,1,0).applyQuaternion(n);if(Math.abs(a.y)<.999)throw new RangeError("Rotated layer-height areas must use heightMode: manual");const o=Math.max(Math.abs(t.y-e.base),Math.abs(t.y-e.base-e.thickness));r.y=(o+.5)/(1-vr(this.softness))}const s=new Pe().setFromMatrix4(new nt().makeRotationFromQuaternion(n.clone().invert()));return{center:t,radii:r,rotation:n,inverseRotation:s,shape:this.shape,shapeId:so[this.shape],softness:this.softness,strength:this.strength}}}function sr(i,e=0,t=new vn){const n=i.radii.clone().multiplyScalar(1+vr(i.softness)),s=new Pe().setFromMatrix4(new nt().makeRotationFromQuaternion(i.rotation)).elements,a=new I(Math.abs(s[0])*n.x+Math.abs(s[3])*n.y+Math.abs(s[6])*n.z,Math.abs(s[1])*n.x+Math.abs(s[4])*n.y+Math.abs(s[7])*n.z,Math.abs(s[2])*n.x+Math.abs(s[5])*n.y+Math.abs(s[8])*n.z).addScalar(e);return t.set(i.center.clone().sub(a),i.center.clone().add(a))}function mp(i,e){const t=e.x-i.center.x,n=e.y-i.center.y,r=e.z-i.center.z,s=i.inverseRotation.elements,a=(s[0]*t+s[3]*n+s[6]*r)/i.radii.x,o=(s[1]*t+s[4]*n+s[7]*r)/i.radii.y,c=(s[2]*t+s[5]*n+s[8]*r)/i.radii.z,l=i.shapeId===2?Math.max(Math.abs(a),Math.abs(o),Math.abs(c)):i.shapeId===1?Math.max(Math.hypot(a,c),Math.abs(o)):Math.hypot(a,o,c),h=vr(i.softness),f=$l.clamp((l-(1-h))/(2*h),0,1);return(1-f*f*(3-2*f))*i.strength}class gp{constructor(e,t=[128,80,128]){if(t.length!==3||!t.every(n=>Number.isInteger(n)&&n>=2&&n<=256))throw new RangeError("Mask resolution: three integers between 2 and 256");this.bounds=e.clone(),this.resolution=[...t],this.size=e.getSize(new I),this.data=new Uint8Array(t[0]*t[1]*t[2]),this.texture=new js(this.data,...t),Object.assign(this.texture,{format:mr,type:Nt,minFilter:wt,magFilter:wt,unpackAlignment:1,generateMipmaps:!1,needsUpdate:!0})}rebuild(e){this.data.fill(0);const[t,n,r]=this.resolution,s=this.bounds.min,a=new I(this.size.x/t,this.size.y/n,this.size.z/r),o=new I;for(const c of e){const l=sr(c),h=l.min.clone().sub(s).divide(a).floor().max(new I),f=l.max.clone().sub(s).divide(a).ceil().min(new I(t-1,n-1,r-1));for(let d=h.z;d<=f.z;d++)for(let m=h.y;m<=f.y;m++)for(let _=h.x;_<=f.x;_++){o.set(s.x+(_+.5)*a.x,s.y+(m+.5)*a.y,s.z+(d+.5)*a.z);const x=Math.round(mp(c,o)*255),p=_+t*(m+n*d);x>this.data[p]&&(this.data[p]=x)}}this.texture.needsUpdate=!0}dispose(){this.texture.dispose()}}function _p(){const e=new Uint8Array(262144),t=(o,c,l)=>{let h=Math.imul(o+17,374761393)^Math.imul(c+31,668265263)^Math.imul(l+47,2147483647);return h=Math.imul(h^h>>>13,1274126177),((h^h>>>16)>>>0)/4294967295},n=o=>o*o*o*(o*(o*6-15)+10),r=(o,c,l)=>o+(c-o)*l;function s(o,c,l,h){const f=Math.floor(o),d=Math.floor(c),m=Math.floor(l),_=n(o-f),x=n(c-d),p=n(l-m),u=(b,T,E)=>t((f+b)%h,(d+T)%h,(m+E)%h);return r(r(r(u(0,0,0),u(1,0,0),_),r(u(0,1,0),u(1,1,0),_),x),r(r(u(0,0,1),u(1,0,1),_),r(u(0,1,1),u(1,1,1),_),x),p)}for(let o=0;o<64;o++)for(let c=0;c<64;c++)for(let l=0;l<64;l++){let h=0,f=.58;for(const d of[4,8,16,32])h+=f*s(l/64*d,c/64*d,o/64*d,d),f*=.5;e[l+64*(c+64*o)]=Math.round(h/1.0875*255)}const a=new js(e,64,64,64);return a.format=mr,a.type=Nt,a.wrapS=a.wrapT=a.wrapR=or,a.minFilter=a.magFilter=wt,a.unpackAlignment=1,a.needsUpdate=!0,a}const lo=`
out vec2 vUv;
void main(){vUv=uv;gl_Position=vec4(position.xy,0.,1.);}
`,vp=`
precision highp sampler3D;
in vec2 vUv;
uniform sampler2D cloud,sceneDepth;
uniform vec3 fogMin,fogMax,lightDirection;
uniform sampler3D maskVolume,cloudVolume;
uniform float relief,detail,cloudScale;
uniform vec3 fogTint,shadowTint;
uniform mat4 inverseVP;
uniform vec3 maskMin,maskSize;
uniform float time,speed,base,thickness,density;
uniform int steps;
uniform bool debugMask,cameraClear;
uniform int clearCount;
uniform vec4 clearCenters[128],clearRadii[128];
uniform float clearStrength[128];
uniform mat3 clearRotations[128];
out vec4 fragColor;
float revealAt(vec3 p){
 vec3 uv=(p-maskMin)/maskSize;
 if(any(lessThan(uv,vec3(0.)))||any(greaterThan(uv,vec3(1.))))return 0.;
 return texture(maskVolume,uv).r;
}
float cloudNoise(vec3 p){
 vec3 drift=vec3(-time*speed*.16,time*speed*.018,-time*speed*.07);
 vec3 q=(p+drift)/cloudScale;
 float warp=texture(cloudVolume,q*.53+vec3(.13,.47,.71)).r;
 q+=vec3(warp-.5,warp*.4,warp-.5)*.18;
 float large=texture(cloudVolume,q).r;
 float small=texture(cloudVolume,q*3.7-drift/cloudScale*5.2+vec3(.37,.19,.61)).r;
 return large+(small-.5)*detail*.32;
}
float rawFogDensity(vec3 p){
 float h=(p.y-base)/thickness;
 if(h<=0.||h>=1.)return 0.;
 float n=cloudNoise(p);
 // Each column has its own softly rounded summit, inside the height bound.
 float summitNoise=texture(cloudVolume,vec3(p.x/cloudScale*.65,.31,p.z/cloudScale*.65)+vec3(-time*speed*.004,0.,0.)).r;
 float summit=mix(.96,clamp(.34+summitNoise*.95,.38,.98),relief);
 float vertical=smoothstep(0.,.07,h)*(1.-smoothstep(summit-.18,summit,h));
 float edgeDistance=min(min(p.x-fogMin.x,fogMax.x-p.x),min(p.z-fogMin.z,fogMax.z-p.z));
 float boundary=smoothstep(0.,3.,edgeDistance);
 float threshold=mix(.26,.57,h);
 float shape=smoothstep(threshold,threshold+.19,n);
 return density*vertical*boundary*(.055+shape*1.9);
}
float fogDensity(vec3 p){return rawFogDensity(p)*(1.-revealAt(p));}
float areaDistance(vec3 p,int j){
 vec3 q=(clearRotations[j]*(p-clearCenters[j].xyz))/clearRadii[j].xyz;
 if(clearRadii[j].w>1.5)return max(max(abs(q.x),abs(q.y)),abs(q.z));
 return clearRadii[j].w>.5?max(length(q.xz),abs(q.y)):length(q);
}
// Ray intervals in normalized volume coordinates. Cylinder axis is world Y.
vec2 areaInterval(vec3 origin,vec3 dir,vec3 center,vec3 radii,float shape,mat3 rotation){
 vec3 o=(rotation*(origin-center))/radii,d=(rotation*dir)/radii;
 bool cylinder=shape>.5;
 if(shape>1.5){
  vec2 bounds=vec2(-1e5,1e5);
  for(int axis=0;axis<3;axis++){
   if(abs(d[axis])<1e-7){if(abs(o[axis])>1.)return vec2(1.,-1.);}
   else{vec2 hit=vec2((-1.-o[axis])/d[axis],(1.-o[axis])/d[axis]);bounds=vec2(max(bounds.x,min(hit.x,hit.y)),min(bounds.y,max(hit.x,hit.y)));}
  }
  return bounds;
 }
 float aa=cylinder?dot(d.xz,d.xz):dot(d,d);
 float bb=cylinder?dot(o.xz,d.xz):dot(o,d);
 float cc=(cylinder?dot(o.xz,o.xz):dot(o,o))-1.;
 vec2 interval=vec2(-1e5,1e5);
 if(aa<1e-9){if(cc>0.)return vec2(1.,-1.);}
 else{
  float discriminant=bb*bb-aa*cc;
  if(discriminant<=0.)return vec2(1.,-1.);
  float root=sqrt(discriminant);
  interval=vec2((-bb-root)/aa,(-bb+root)/aa);
 }
 if(cylinder){
  if(abs(d.y)<1e-7){if(abs(o.y)>1.)return vec2(1.,-1.);}
  else{
   vec2 caps=vec2((-1.-o.y)/d.y,(1.-o.y)/d.y);
   interval=vec2(max(interval.x,min(caps.x,caps.y)),min(interval.y,max(caps.x,caps.y)));
  }
 }
 return interval;
}
void main(){
 vec2 clip=vUv*2.-1.;
 vec4 a=inverseVP*vec4(clip,-1.,1.),b=inverseVP*vec4(clip,1.,1.);
 vec3 origin=a.xyz/a.w,dir=normalize(b.xyz/b.w-origin);
 float depth=texture(sceneDepth,vUv).r;
 vec4 hit=inverseVP*vec4(clip,depth*2.-1.,1.);
 float sceneDistance=depth<.999999?length(hit.xyz/hit.w-origin):length(b.xyz/b.w-origin);
 vec3 invDir=1./(dir+vec3(.000001));
 vec3 lo=vec3(fogMin.x,base,fogMin.z),hi=vec3(fogMax.x,base+thickness,fogMax.z);
 vec3 t0=(lo-origin)*invDir,t1=(hi-origin)*invDir;
 vec3 mn=min(t0,t1),mx=max(t0,t1);
 float enter=max(0.,max(mn.x,max(mn.y,mn.z)));
 float leave=min(sceneDistance,min(mx.x,min(mx.y,mx.z)));
 if(debugMask){
  float planeDistance=(base+thickness*.5-origin.y)/dir.y;
  vec3 p=origin+dir*planeDistance;
  float value=revealAt(p);
  fragColor=vec4(vec3(value),1.);return;
 }
 // Project the same soft volume field towards the camera. Each ray keeps
 // the closest point in the visible segment; no binary clipping of the march.
 vec3 rayAreas[128];
 if(cameraClear){
  for(int j=0;j<128;j++){
   if(j>=clearCount)break;
   float edge=clearCenters[j].w;
   vec2 bounds=areaInterval(origin,dir,clearCenters[j].xyz,clearRadii[j].xyz*(1.+edge),clearRadii[j].w,clearRotations[j]);
   float nearT=max(0.,bounds.x),farT=min(sceneDistance,bounds.y);
   rayAreas[j]=vec3(0.,-1.,2.);
   if(farT<=nearT)continue;
   // The normalized cylinder/ellipsoid distance is convex along a ray.
   float left=nearT,right=farT;
   for(int k=0;k<14;k++){
    float u=mix(left,right,1./3.),v=mix(left,right,2./3.);
    if(areaDistance(origin+dir*u,j)<areaDistance(origin+dir*v,j))right=v;else left=u;
   }
   float closest=(left+right)*.5;
   rayAreas[j]=vec3(closest,farT,areaDistance(origin+dir*closest,j));
  }
 }
 if(leave<=enter){fragColor=vec4(0.);return;}
 float dt=(leave-enter)/float(steps);
 // Fixed pixel jitter hides banding without temporal flicker when paused.
 float jitter=fract(sin(dot(gl_FragCoord.xy,vec2(12.9898,78.233)))*43758.5453);
 float transmittance=1.;vec3 scattering=vec3(0.);
 for(int i=0;i<96;i++){
  if(i>=steps||transmittance<.012)break;
  float sampleT=enter+(float(i)+jitter)*dt;
  vec3 p=origin+dir*sampleT;
  float reveal=revealAt(p);
  if(cameraClear){
   for(int j=0;j<128;j++){
    if(j>=clearCount||reveal>.999)break;
    if(sampleT>rayAreas[j].y)continue;
    float distance=sampleT<=rayAreas[j].x?rayAreas[j].z:areaDistance(p,j);
    float edge=clearCenters[j].w;
    float projected=(1.-smoothstep(1.-edge,1.+edge,distance))*clearStrength[j];
    reveal=max(reveal,projected);
   }
  }
  float localDensity=rawFogDensity(p)*(1.-reveal);
  if(localDensity<.001)continue;
  float alpha=1.-exp(-localDensity*dt);
  // Short light march: denser cloud interiors receive less direct light.
  vec3 lightDir=normalize(lightDirection);
  float opticalDepth=0.;
  for(int j=1;j<=4;j++)opticalDepth+=fogDensity(p+lightDir*float(j)*.85)*.85;
  float shadow=exp(-opticalDepth*.85);
  float heightLight=clamp((p.y-base)/thickness,0.,1.);
  vec3 tint=texture(cloud,p.xz/18.+vec2(p.y*.017)-time*speed/128.).rgb;
  float heightGradient=smoothstep(.05,.8,heightLight);
  float illumination=clamp(shadow*.65+heightGradient*.35,0.,1.);
  vec3 color=mix(shadowTint,fogTint,illumination)*mix(vec3(1.),tint,.12);
  // Forward scattering adds a restrained silver edge facing the light.
  color+=fogTint*pow(max(dot(dir,lightDir),0.),5.)*shadow*.12;
  scattering+=transmittance*alpha*color;
  transmittance*=1.-alpha;
 }
 // Premultiplied scattering; compositing happens in a separate pass.
 fragColor=vec4(scattering,1.-transmittance);
}
`,xp=`
#define gl_FragColor fragColor
in vec2 vUv;uniform sampler2D sceneColor,fogColor;out vec4 fragColor;
void main(){vec4 fog=texture(fogColor,vUv);vec3 scene=texture(sceneColor,vUv).rgb;fragColor=vec4(fog.rgb+scene*(1.-fog.a),1.);
 #include <tonemapping_fragment>
 #include <colorspace_fragment>
}
`,ar=Object.freeze({speed:1,base:.55,thickness:5.5,density:1.1,relief:.85,detail:.7,cloudScale:22,fogTint:"#fff1da",shadowTint:"#718baf",steps:64,resolutionScale:.65,cameraClear:!1});function co(i){const e={speed:[0,10],base:[-1e4,1e4],thickness:[.01,1e4],density:[0,20],relief:[0,1],detail:[0,3],cloudScale:[.1,1e4],steps:[8,96],resolutionScale:[.1,1]};for(const[t,[n,r]]of Object.entries(e))if(!Number.isFinite(i[t])||i[t]<n||i[t]>r)throw new RangeError(`Invalid cloud setting: ${t}`);if(!Number.isInteger(i.steps))throw new RangeError("steps must be an integer");for(const t of["fogTint","shadowTint"])if(!/^#[0-9a-f]{6}$/i.test(i[t]))throw new TypeError(`${t} must be a #RRGGBB color`);if(typeof i.cameraClear!="boolean")throw new TypeError("cameraClear must be boolean");for(const t of Object.keys(i))if(!Object.hasOwn(ar,t))throw new TypeError(`Unknown cloud setting: ${t}`);return{...i}}class yp{constructor(e,t={}){if(!e?.isWebGLRenderer)throw new TypeError("Expected THREE.WebGLRenderer");const n=t.maxAreas??128;if(!Number.isInteger(n)||n<1||n>128)throw new RangeError("maxAreas must be an integer between 1 and 128");const r=e.getContext?.(),s=r?r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS):224;this.maxAreas=Math.max(1,Math.min(n,Math.floor((s-40)/6))),this.renderer=e,this.disposed=!1,this.time=0,this.areas=new Set,this.bounds=(t.bounds??new vn(new I(-32,-8,-32),new I(32,24,32))).clone();const a=this.bounds.getSize(new I);if(![...this.bounds.min.toArray(),...this.bounds.max.toArray()].every(Number.isFinite)||Math.min(...a.toArray())<=0)throw new RangeError("bounds must be a finite, nonempty Box3");this.settings=co({...ar,...t.settings}),this.checkLayer(this.settings),this.mask=new gp(this.bounds,t.maskResolution),this.noiseTexture=_p(),this.ownsCloudTexture=!t.cloudTexture,this.cloudTexture=t.cloudTexture??new Ec(new Uint8Array([255,255,255,255]),1,1,It),this.ownsCloudTexture&&(this.cloudTexture.needsUpdate=!0);const o=e.extensions?.has("EXT_color_buffer_float")?ri:Nt;this.sceneTarget=new sn(1,1,{type:o}),this.sceneTarget.depthTexture=new Zs(1,1,_n),this.fogTarget=new sn(1,1,{type:o,depthBuffer:!1}),this.uniforms={cloud:{value:this.cloudTexture},cloudVolume:{value:this.noiseTexture},sceneDepth:{value:this.sceneTarget.depthTexture},maskVolume:{value:this.mask.texture},maskMin:{value:this.bounds.min.clone()},maskSize:{value:a},fogMin:{value:this.bounds.min.clone()},fogMax:{value:this.bounds.max.clone()},lightDirection:{value:new I(...t.lightDirection??[-.5,1,.3]).normalize()},inverseVP:{value:new nt},time:{value:0},debugMask:{value:!1},clearCount:{value:0},clearCenters:{value:Array.from({length:this.maxAreas},()=>new Je)},clearRadii:{value:Array.from({length:this.maxAreas},()=>new Je)},clearRotations:{value:Array.from({length:this.maxAreas},()=>new Pe)},clearStrength:{value:new Float32Array(this.maxAreas)}};for(const c of Object.keys(ar))c!=="resolutionScale"&&(this.uniforms[c]={value:c.endsWith("Tint")?new Ge(this.settings[c]):this.settings[c]});this.geometry=new Ti(2,2),this.postCamera=new Ks,this.fogMaterial=new Yt({uniforms:this.uniforms,glslVersion:cr,vertexShader:lo,fragmentShader:vp.replaceAll("[128]",`[${this.maxAreas}]`).replaceAll("j<128",`j<${this.maxAreas}`),depthTest:!1,depthWrite:!1,toneMapped:!1}),this.compositeMaterial=new Yt({uniforms:{sceneColor:{value:this.sceneTarget.texture},fogColor:{value:this.fogTarget.texture}},glslVersion:cr,vertexShader:lo,fragmentShader:xp,depthTest:!1,depthWrite:!1}),this.fogScene=new Ca,this.fogScene.add(new Ht(this.geometry,this.fogMaterial)),this.compositeScene=new Ca,this.compositeScene.add(new Ht(this.geometry,this.compositeMaterial)),this.frustum=new $s,this.vp=new nt,this.lastSignature="",this.bufferSize=new Xe,this.stats={areas:0,visibleAreas:0,maskAreas:0,maskUpdated:!1,maskUpdateMs:0,fogWidth:1,fogHeight:1}}checkLayer(e){if(e.base<this.bounds.min.y||e.base+e.thickness>this.bounds.max.y)throw new RangeError("The complete fog layer must fit within bounds.y")}assertAlive(){if(this.disposed)throw new Error("VolumetricClouds has been disposed")}setSettings(e){this.assertAlive();const t=co({...this.settings,...e});this.checkLayer(t),this.settings=t;for(const n of Object.keys(ar))n!=="resolutionScale"&&(n.endsWith("Tint")?this.uniforms[n].value.set(t[n]):this.uniforms[n].value=t[n]);return this}getSettings(){return{...this.settings}}addArea(e={}){if(this.assertAlive(),this.areas.size>=this.maxAreas&&!this.areas.has(e))throw new RangeError(`Maximum ${this.maxAreas} clearing areas on this renderer`);const t=e instanceof oo?e:new oo(e);return this.areas.add(t),t}removeArea(e){return this.assertAlive(),this.areas.delete(e)}clearAreas(){this.assertAlive(),this.areas.clear()}setSize(e,t){if(this.assertAlive(),!Number.isFinite(e)||!Number.isFinite(t)||e<=0||t<=0)throw new RangeError("Invalid render size");const n=Math.ceil(e),r=Math.ceil(t);(this.sceneTarget.width!==n||this.sceneTarget.height!==r)&&this.sceneTarget.setSize(n,r);const s=Math.max(1,Math.ceil(n*this.settings.resolutionScale)),a=Math.max(1,Math.ceil(r*this.settings.resolutionScale));(this.fogTarget.width!==s||this.fogTarget.height!==a)&&this.fogTarget.setSize(s,a),this.stats.fogWidth=s,this.stats.fogHeight=a}update(e,t=0){if(this.assertAlive(),!e?.isCamera)throw new TypeError("Expected THREE.Camera");if(!Number.isFinite(t)||t<0)throw new RangeError("deltaSeconds must be nonnegative");e.updateWorldMatrix(!0,!1),this.time+=t,this.uniforms.time.value=this.time,this.uniforms.inverseVP.value.multiplyMatrices(e.matrixWorld,e.projectionMatrixInverse),this.frustum.setFromProjectionMatrix(this.vp.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse));const n=[...this.areas].filter(o=>o.enabled&&o.strength>0).map(o=>o.volume(this.settings)),r=n.filter(o=>this.frustum.intersectsBox(sr(o))),s=n.filter(o=>this.frustum.intersectsBox(sr(o,4))&&this.bounds.intersectsBox(sr(o))),a=JSON.stringify(s.map(o=>[...o.center.toArray(),...o.radii.toArray(),...o.rotation.toArray(),o.shapeId,o.softness,o.strength]));if(this.stats.maskUpdated=a!==this.lastSignature,this.stats.maskUpdateMs=0,this.stats.maskUpdated){const o=performance.now();this.mask.rebuild(s),this.stats.maskUpdateMs=performance.now()-o,this.lastSignature=a}this.uniforms.clearCount.value=this.settings.cameraClear?r.length:0,this.settings.cameraClear&&r.forEach((o,c)=>{this.uniforms.clearCenters.value[c].set(o.center.x,o.center.y,o.center.z,vr(o.softness)),this.uniforms.clearRadii.value[c].set(o.radii.x,o.radii.y,o.radii.z,o.shapeId),this.uniforms.clearRotations.value[c].copy(o.inverseRotation),this.uniforms.clearStrength.value[c]=o.strength}),Object.assign(this.stats,{areas:this.areas.size,visibleAreas:r.length,maskAreas:s.length})}render(e,t,n=0,r=null){this.assertAlive(),this.update(t,n);const s=this.renderer;s.getDrawingBufferSize(this.bufferSize),this.setSize(this.bufferSize.x,this.bufferSize.y);const a={target:s.getRenderTarget(),color:s.getClearColor(new Ge),alpha:s.getClearAlpha(),autoClear:s.autoClear,viewport:s.getViewport(new Je),scissor:s.getScissor(new Je),scissorTest:s.getScissorTest()};try{s.autoClear=!1,s.setScissorTest(!1),s.setRenderTarget(this.sceneTarget),s.clear(),s.render(e,t),s.setRenderTarget(this.fogTarget),s.setClearColor(0,0),s.clear(),s.render(this.fogScene,this.postCamera),s.setRenderTarget(r),s.render(this.compositeScene,this.postCamera)}finally{s.setRenderTarget(a.target),s.setClearColor(a.color,a.alpha),s.autoClear=a.autoClear,s.setViewport(a.viewport),s.setScissor(a.scissor),s.setScissorTest(a.scissorTest)}}dispose(){this.disposed||(this.disposed=!0,this.areas.clear(),this.mask.dispose(),this.noiseTexture.dispose(),this.ownsCloudTexture&&this.cloudTexture.dispose(),this.sceneTarget.dispose(),this.fogTarget.dispose(),this.geometry.dispose(),this.fogMaterial.dispose(),this.compositeMaterial.dispose())}}export{vn as B,oo as C,js as D,Sp as E,cr as G,wt as L,Ht as M,Ti as P,Wt as Q,It as R,Yt as S,Nt as U,gp as V,sn as W,I as a,Ge as b,Je as c,Ca as d,Ks as e,lo as f,$l as g,yp as h,Ep as i,zt as j,Wi as k,yi as l,Mp as m,Ac as n,Io as o,wo as p,Uo as q,an as r,vp as v};
