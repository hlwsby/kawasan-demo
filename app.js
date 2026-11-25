(()=>{var ou="185",ln={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},yn={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},lu=0,Qo=1,cu=2;var or=1,ga=2,bs=3,Es=0,Ke=1,Cn=2,Pn=0,lr=1,tl=2,el=3,nl=4,hu=5;var Ts=100,uu=101,du=102,fu=103,pu=104,mu=200,gu=201,_u=202,xu=203,yu=204,vu=205,Mu=206,Su=207,bu=208,Eu=209,Tu=210,wu=211,Au=212,Ru=213,Cu=214,Pu=0,Iu=1,Lu=2,il=3,Du=4,Nu=5,Uu=6,Fu=7,Ou=0,Bu=1,zu=2,vn=0,sl=1,rl=2,al=3,ol=4,ll=5,cl=6,hl=7;var ws=301,wi=302,_a=303,xa=304,cr=306,hr=1000,ya=1001,ku=1002,li=1003,Gu=1004;var ur=1005;var Ve=1006,va=1007;var Ai=1008;var Mn=1009,Hu=1010,Vu=1011,dr=1012,ul=1013,ci=1014,qn=1015,Yn=1016,dl=1017,fl=1018,As=1020,Wu=35902,Xu=35899,qu=1021,Yu=1022,In=1023,Ri=1026,Ci=1027,Zu=1028,pl=1029,Pi=1030,ml=1031;var gl=1033,Ma=33776,Sa=33777,ba=33778,Ea=33779,_l=35840,xl=35841,yl=35842,vl=35843,Ml=36196,Sl=37492,bl=37496,El=37488,Tl=37489,Ta=37490,wl=37491,Al=37808,Rl=37809,Cl=37810,Pl=37811,Il=37812,Ll=37813,Dl=37814,Nl=37815,Ul=37816,Fl=37817,Ol=37818,Bl=37819,zl=37820,kl=37821,Gl=36492,Hl=36494,Vl=36495,Wl=36283,Xl=36284,wa=36285,ql=36286;var Yl=0,$u=1,Ii="",Li="srgb",Zl="srgb-linear",$l="linear",me="srgb";var Ju=512,Ku=513,ju=514,Aa=515,Qu=516,td=517,Ra=518,ed=519;var Jl="300 es",Kl=2000;function Ff(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function Of(t){return ArrayBuffer.isView(t)&&!(t instanceof DataView)}function er(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function nd(){let t=er("canvas");return t.style.display="block",t}var Eh={},ys=null;function nr(...t){let e="THREE."+t.shift();if(ys)ys("log",e,...t);else console.log(e,...t)}function id(t){let e=t[0];if(typeof e==="string"&&e.startsWith("TSL:")){let n=t[1];if(n&&n.isStackTrace)t[0]+=" "+n.getLocation();else t[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return t}function Ut(...t){t=id(t);let e="THREE."+t.shift();if(ys)ys("warn",e,...t);else{let n=t[0];if(n&&n.isStackTrace)console.warn(n.getError(e));else console.warn(e,...t)}}function Bt(...t){t=id(t);let e="THREE."+t.shift();if(ys)ys("error",e,...t);else{let n=t[0];if(n&&n.isStackTrace)console.error(n.getError(e));else console.error(e,...t)}}function Ei(...t){let e=t.join(" ");if(e in Eh)return;Eh[e]=!0,Ut(...t)}function sd(t,e,n){return new Promise(function(i,s){function r(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:s();break;case t.TIMEOUT_EXPIRED:setTimeout(r,n);break;default:i()}}setTimeout(r,n)})}var rd={[0]:1,[2]:6,[4]:7,[3]:5,[1]:0,[6]:2,[7]:4,[5]:3};class Ln{addEventListener(t,e){if(this._listeners===void 0)this._listeners={};let n=this._listeners;if(n[t]===void 0)n[t]=[];if(n[t].indexOf(e)===-1)n[t].push(e)}hasEventListener(t,e){let n=this._listeners;if(n===void 0)return!1;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){let n=this._listeners;if(n===void 0)return;let i=n[t];if(i!==void 0){let s=i.indexOf(e);if(s!==-1)i.splice(s,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let n=e[t.type];if(n!==void 0){t.target=this;let i=n.slice(0);for(let s=0,r=i.length;s<r;s++)i[s].call(this,t);t.target=null}}}var ke=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Th=1234567,_s=Math.PI/180,vs=180/Math.PI;function Rn(){let t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(ke[t&255]+ke[t>>8&255]+ke[t>>16&255]+ke[t>>24&255]+"-"+ke[e&255]+ke[e>>8&255]+"-"+ke[e>>16&15|64]+ke[e>>24&255]+"-"+ke[n&63|128]+ke[n>>8&255]+"-"+ke[n>>16&255]+ke[n>>24&255]+ke[i&255]+ke[i>>8&255]+ke[i>>16&255]+ke[i>>24&255]).toLowerCase()}function $t(t,e,n){return Math.max(e,Math.min(n,t))}function jl(t,e){return(t%e+e)%e}function Bf(t,e,n,i,s){return i+(t-e)*(s-i)/(n-e)}function zf(t,e,n){if(t!==e)return(n-t)/(e-t);else return 0}function js(t,e,n){return(1-n)*t+n*e}function kf(t,e,n,i){return js(t,e,1-Math.exp(-n*i))}function Gf(t,e=1){return e-Math.abs(jl(t,e*2)-e)}function Hf(t,e,n){if(t<=e)return 0;if(t>=n)return 1;return t=(t-e)/(n-e),t*t*(3-2*t)}function Vf(t,e,n){if(t<=e)return 0;if(t>=n)return 1;return t=(t-e)/(n-e),t*t*t*(t*(t*6-15)+10)}function Wf(t,e){return t+Math.floor(Math.random()*(e-t+1))}function Xf(t,e){return t+Math.random()*(e-t)}function qf(t){return t*(0.5-Math.random())}function Yf(t){if(t!==void 0)Th=t;let e=Th+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Zf(t){return t*_s}function $f(t){return t*vs}function Jf(t){return(t&t-1)===0&&t!==0}function Kf(t){return Math.pow(2,Math.ceil(Math.log(t)/Math.LN2))}function jf(t){return Math.pow(2,Math.floor(Math.log(t)/Math.LN2))}function Qf(t,e,n,i,s){let{cos:r,sin:a}=Math,o=r(n/2),l=a(n/2),c=r((e+i)/2),h=a((e+i)/2),d=r((e-i)/2),u=a((e-i)/2),f=r((i-e)/2),g=a((i-e)/2);switch(s){case"XYX":t.set(o*h,l*d,l*u,o*c);break;case"YZY":t.set(l*u,o*h,l*d,o*c);break;case"ZXZ":t.set(l*d,l*u,o*h,o*c);break;case"XZX":t.set(o*h,l*g,l*f,o*c);break;case"YXY":t.set(l*f,o*h,l*g,o*c);break;case"ZYZ":t.set(l*g,l*f,o*h,o*c);break;default:Ut("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function xn(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw Error("THREE.MathUtils: Invalid component type.")}}function le(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw Error("THREE.MathUtils: Invalid component type.")}}var Di={DEG2RAD:_s,RAD2DEG:vs,generateUUID:Rn,clamp:$t,euclideanModulo:jl,mapLinear:Bf,inverseLerp:zf,lerp:js,damp:kf,pingpong:Gf,smoothstep:Hf,smootherstep:Vf,randInt:Wf,randFloat:Xf,randFloatSpread:qf,seededRandom:Yf,degToRad:Zf,radToDeg:$f,isPowerOfTwo:Jf,ceilPowerOfTwo:Kf,floorPowerOfTwo:jf,setQuaternionFromProperEuler:Qf,normalize:le,denormalize:xn};class K{static{K.prototype.isVector2=!0}constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=$t(this.x,t.x,e.x),this.y=$t(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=$t(this.x,t,e),this.y=$t(this.y,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar($t(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos($t(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),i=Math.sin(e),s=this.x-t.x,r=this.y-t.y;return this.x=s*n-r*i+t.x,this.y=s*i+r*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class cn{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,s,r,a){let o=n[i+0],l=n[i+1],c=n[i+2],h=n[i+3],d=s[r+0],u=s[r+1],f=s[r+2],g=s[r+3];if(h!==g||o!==d||l!==u||c!==f){let v=o*d+l*u+c*f+h*g;if(v<0)d=-d,u=-u,f=-f,g=-g,v=-v;let m=1-a;if(v<0.9995){let p=Math.acos(v),R=Math.sin(p);m=Math.sin(m*p)/R,a=Math.sin(a*p)/R,o=o*m+d*a,l=l*m+u*a,c=c*m+f*a,h=h*m+g*a}else{o=o*m+d*a,l=l*m+u*a,c=c*m+f*a,h=h*m+g*a;let p=1/Math.sqrt(o*o+l*l+c*c+h*h);o*=p,l*=p,c*=p,h*=p}}t[e]=o,t[e+1]=l,t[e+2]=c,t[e+3]=h}static multiplyQuaternionsFlat(t,e,n,i,s,r){let a=n[i],o=n[i+1],l=n[i+2],c=n[i+3],h=s[r],d=s[r+1],u=s[r+2],f=s[r+3];return t[e]=a*f+c*h+o*u-l*d,t[e+1]=o*f+c*d+l*h-a*u,t[e+2]=l*f+c*u+a*d-o*h,t[e+3]=c*f-a*h-o*d-l*u,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let{_x:n,_y:i,_z:s,_order:r}=t,{cos:a,sin:o}=Math,l=a(n/2),c=a(i/2),h=a(s/2),d=o(n/2),u=o(i/2),f=o(s/2);switch(r){case"XYZ":this._x=d*c*h+l*u*f,this._y=l*u*h-d*c*f,this._z=l*c*f+d*u*h,this._w=l*c*h-d*u*f;break;case"YXZ":this._x=d*c*h+l*u*f,this._y=l*u*h-d*c*f,this._z=l*c*f-d*u*h,this._w=l*c*h+d*u*f;break;case"ZXY":this._x=d*c*h-l*u*f,this._y=l*u*h+d*c*f,this._z=l*c*f+d*u*h,this._w=l*c*h-d*u*f;break;case"ZYX":this._x=d*c*h-l*u*f,this._y=l*u*h+d*c*f,this._z=l*c*f-d*u*h,this._w=l*c*h+d*u*f;break;case"YZX":this._x=d*c*h+l*u*f,this._y=l*u*h+d*c*f,this._z=l*c*f-d*u*h,this._w=l*c*h-d*u*f;break;case"XZY":this._x=d*c*h-l*u*f,this._y=l*u*h-d*c*f,this._z=l*c*f+d*u*h,this._w=l*c*h+d*u*f;break;default:Ut("Quaternion: .setFromEuler() encountered an unknown order: "+r)}if(e===!0)this._onChangeCallback();return this}setFromAxisAngle(t,e){let n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],i=e[4],s=e[8],r=e[1],a=e[5],o=e[9],l=e[2],c=e[6],h=e[10],d=n+a+h;if(d>0){let u=0.5/Math.sqrt(d+1);this._w=0.25/u,this._x=(c-o)*u,this._y=(s-l)*u,this._z=(r-i)*u}else if(n>a&&n>h){let u=2*Math.sqrt(1+n-a-h);this._w=(c-o)/u,this._x=0.25*u,this._y=(i+r)/u,this._z=(s+l)/u}else if(a>h){let u=2*Math.sqrt(1+a-n-h);this._w=(s-l)/u,this._x=(i+r)/u,this._y=0.25*u,this._z=(o+c)/u}else{let u=2*Math.sqrt(1+h-n-a);this._w=(r-i)/u,this._x=(s+l)/u,this._y=(o+c)/u,this._z=0.25*u}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;if(n<0.00000001)if(n=0,Math.abs(t.x)>Math.abs(t.z))this._x=-t.y,this._y=t.x,this._z=0,this._w=n;else this._x=0,this._y=-t.z,this._z=t.y,this._w=n;else this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n;return this.normalize()}angleTo(t){return 2*Math.acos(Math.abs($t(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();if(t===0)this._x=0,this._y=0,this._z=0,this._w=1;else t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t;return this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let{_x:n,_y:i,_z:s,_w:r}=t,{_x:a,_y:o,_z:l,_w:c}=e;return this._x=n*c+r*a+i*l-s*o,this._y=i*c+r*o+s*a-n*l,this._z=s*c+r*l+n*o-i*a,this._w=r*c-n*a-i*o-s*l,this._onChangeCallback(),this}slerp(t,e){let{_x:n,_y:i,_z:s,_w:r}=t,a=this.dot(t);if(a<0)n=-n,i=-i,s=-s,r=-r,a=-a;let o=1-e;if(a<0.9995){let l=Math.acos(a),c=Math.sin(l);o=Math.sin(o*l)/c,e=Math.sin(e*l)/c,this._x=this._x*o+n*e,this._y=this._y*o+i*e,this._z=this._z*o+s*e,this._w=this._w*o+r*e,this._onChangeCallback()}else this._x=this._x*o+n*e,this._y=this._y*o+i*e,this._z=this._z*o+s*e,this._w=this._w*o+r*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(i*Math.sin(t),i*Math.cos(t),s*Math.sin(e),s*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class P{static{P.prototype.isVector3=!0}constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){if(n===void 0)n=this.z;return this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(wh.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(wh.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,i=this.z,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6]*i,this.y=s[1]*e+s[4]*n+s[7]*i,this.z=s[2]*e+s[5]*n+s[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,i=this.z,s=t.elements,r=1/(s[3]*e+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*e+s[4]*n+s[8]*i+s[12])*r,this.y=(s[1]*e+s[5]*n+s[9]*i+s[13])*r,this.z=(s[2]*e+s[6]*n+s[10]*i+s[14])*r,this}applyQuaternion(t){let e=this.x,n=this.y,i=this.z,{x:s,y:r,z:a,w:o}=t,l=2*(r*i-a*n),c=2*(a*e-s*i),h=2*(s*n-r*e);return this.x=e+o*l+r*h-a*c,this.y=n+o*c+a*l-s*h,this.z=i+o*h+s*c-r*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,i=this.z,s=t.elements;return this.x=s[0]*e+s[4]*n+s[8]*i,this.y=s[1]*e+s[5]*n+s[9]*i,this.z=s[2]*e+s[6]*n+s[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=$t(this.x,t.x,e.x),this.y=$t(this.y,t.y,e.y),this.z=$t(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=$t(this.x,t,e),this.y=$t(this.y,t,e),this.z=$t(this.z,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar($t(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let{x:n,y:i,z:s}=t,{x:r,y:a,z:o}=e;return this.x=i*o-s*a,this.y=s*r-n*o,this.z=n*a-i*r,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Mo.copy(this).projectOnVector(t),this.sub(Mo)}reflect(t){return this.sub(Mo.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos($t(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}var Mo=new P,wh=new cn;class Vt{static{Vt.prototype.isMatrix3=!0}constructor(t,e,n,i,s,r,a,o,l){if(this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0)this.set(t,e,n,i,s,r,a,o,l)}set(t,e,n,i,s,r,a,o,l){let c=this.elements;return c[0]=t,c[1]=i,c[2]=a,c[3]=e,c[4]=s,c[5]=o,c[6]=n,c[7]=r,c[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,i=e.elements,s=this.elements,r=n[0],a=n[3],o=n[6],l=n[1],c=n[4],h=n[7],d=n[2],u=n[5],f=n[8],g=i[0],v=i[3],m=i[6],p=i[1],R=i[4],E=i[7],x=i[2],T=i[5],w=i[8];return s[0]=r*g+a*p+o*x,s[3]=r*v+a*R+o*T,s[6]=r*m+a*E+o*w,s[1]=l*g+c*p+h*x,s[4]=l*v+c*R+h*T,s[7]=l*m+c*E+h*w,s[2]=d*g+u*p+f*x,s[5]=d*v+u*R+f*T,s[8]=d*m+u*E+f*w,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],r=t[4],a=t[5],o=t[6],l=t[7],c=t[8];return e*r*c-e*a*l-n*s*c+n*a*o+i*s*l-i*r*o}invert(){let t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],r=t[4],a=t[5],o=t[6],l=t[7],c=t[8],h=c*r-a*l,d=a*o-c*s,u=l*s-r*o,f=e*h+n*d+i*u;if(f===0)return this.set(0,0,0,0,0,0,0,0,0);let g=1/f;return t[0]=h*g,t[1]=(i*l-c*n)*g,t[2]=(a*n-i*r)*g,t[3]=d*g,t[4]=(c*e-i*o)*g,t[5]=(i*s-a*e)*g,t[6]=u*g,t[7]=(n*o-l*e)*g,t[8]=(r*e-n*s)*g,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,s,r,a){let o=Math.cos(s),l=Math.sin(s);return this.set(n*o,n*l,-n*(o*r+l*a)+r+t,-i*l,i*o,-i*(-l*r+o*a)+a+e,0,0,1),this}scale(t,e){return Ei("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(So.makeScale(t,e)),this}rotate(t){return Ei("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(So.makeRotation(-t)),this}translate(t,e){return Ei("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(So.makeTranslation(t,e)),this}makeTranslation(t,e){if(t.isVector2)this.set(1,0,t.x,0,1,t.y,0,0,1);else this.set(1,0,t,0,1,e,0,0,1);return this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}var So=new Vt,Ah=new Vt().set(0.4123908,0.3575843,0.1804808,0.212639,0.7151687,0.0721923,0.0193308,0.1191948,0.9505322),Rh=new Vt().set(3.2409699,-1.5373832,-0.4986108,-0.9692436,1.8759675,0.0415551,0.0556301,-0.203977,1.0569715);function tp(){let t={enabled:!0,workingColorSpace:"srgb-linear",spaces:{},convert:function(s,r,a){if(this.enabled===!1||r===a||!r||!a)return s;if(this.spaces[r].transfer==="srgb")s.r=Wn(s.r),s.g=Wn(s.g),s.b=Wn(s.b);if(this.spaces[r].primaries!==this.spaces[a].primaries)s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ);if(this.spaces[a].transfer==="srgb")s.r=xs(s.r),s.g=xs(s.g),s.b=xs(s.b);return s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){if(s==="")return"linear";return this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return Ei("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),t.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return Ei("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),t.colorSpaceToWorking(s,r)}},e=[0.64,0.33,0.3,0.6,0.15,0.06],n=[0.2126,0.7152,0.0722],i=[0.3127,0.329];return t.define({["srgb-linear"]:{primaries:e,whitePoint:i,transfer:"linear",toXYZ:Ah,fromXYZ:Rh,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:"srgb"},outputColorSpaceConfig:{drawingBufferColorSpace:"srgb"}},["srgb"]:{primaries:e,whitePoint:i,transfer:"srgb",toXYZ:Ah,fromXYZ:Rh,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:"srgb"}}}),t}var ee=tp();function Wn(t){return t<0.04045?t*0.0773993808:Math.pow(t*0.9478672986+0.0521327014,2.4)}function xs(t){return t<0.0031308?t*12.92:1.055*Math.pow(t,0.41666)-0.055}var ts;class Ql{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src))return t.src;if(typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{if(ts===void 0)ts=er("canvas");ts.width=t.width,ts.height=t.height;let i=ts.getContext("2d");if(t instanceof ImageData)i.putImageData(t,0,0);else i.drawImage(t,0,0,t.width,t.height);n=ts}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=er("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let i=n.getImageData(0,0,t.width,t.height),s=i.data;for(let r=0;r<s.length;r++)s[r]=Wn(s[r]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)if(e instanceof Uint8Array||e instanceof Uint8ClampedArray)e[n]=Math.floor(Wn(e[n]/255)*255);else e[n]=Wn(e[n]);return{data:e,width:t.width,height:t.height}}else return Ut("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}var ep=0;class fr{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:ep++}),this.uuid=Rn(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;if(typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement)t.set(e.videoWidth,e.videoHeight,0);else if(typeof VideoFrame<"u"&&e instanceof VideoFrame)t.set(e.displayWidth,e.displayHeight,0);else if(e!==null)t.set(e.width,e.height,e.depth||0);else t.set(0,0,0);return t}set needsUpdate(t){if(t===!0)this.version++}toJSON(t){let e=t===void 0||typeof t==="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let r=0,a=i.length;r<a;r++)if(i[r].isDataTexture)s.push(bo(i[r].image));else s.push(bo(i[r]))}else s=bo(i);n.url=s}if(!e)t.images[this.uuid]=n;return n}}function bo(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap)return Ql.getDataURL(t);else if(t.data)return{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name};else return Ut("Texture: Unable to serialize Texture."),{}}var np=0,Eo=new P;class Oe extends Ln{constructor(t=Oe.DEFAULT_IMAGE,e=Oe.DEFAULT_MAPPING,n=1001,i=1001,s=1006,r=1008,a=1023,o=1009,l=Oe.DEFAULT_ANISOTROPY,c=""){super();this.isTexture=!0,Object.defineProperty(this,"id",{value:np++}),this.uuid=Rn(),this.name="",this.source=new fr(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=r,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=o,this.offset=new K(0,0),this.repeat=new K(1,1),this.center=new K(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Vt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=c,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=t&&t.depth&&t.depth>1?!0:!1,this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Eo).x}get height(){return this.source.getSize(Eo).y}get depth(){return this.source.getSize(Eo).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let n=t[e];if(n===void 0){Ut(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let i=this[e];if(i===void 0){Ut(`Texture.setValues(): property '${e}' does not exist.`);continue}if(i&&n&&(i.isVector2&&n.isVector2))i.copy(n);else if(i&&n&&(i.isVector3&&n.isVector3))i.copy(n);else if(i&&n&&(i.isMatrix3&&n.isMatrix3))i.copy(n);else this[e]=n}}toJSON(t){let e=t===void 0||typeof t==="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};if(Object.keys(this.userData).length>0)n.userData=this.userData;if(!e)t.textures[this.uuid]=n;return n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==300)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case 1000:t.x=t.x-Math.floor(t.x);break;case 1001:t.x=t.x<0?0:1;break;case 1002:if(Math.abs(Math.floor(t.x)%2)===1)t.x=Math.ceil(t.x)-t.x;else t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case 1000:t.y=t.y-Math.floor(t.y);break;case 1001:t.y=t.y<0?0:1;break;case 1002:if(Math.abs(Math.floor(t.y)%2)===1)t.y=Math.ceil(t.y)-t.y;else t.y=t.y-Math.floor(t.y);break}if(this.flipY)t.y=1-t.y;return t}set needsUpdate(t){if(t===!0)this.version++,this.source.needsUpdate=!0}set needsPMREMUpdate(t){if(t===!0)this.pmremVersion++}}Oe.DEFAULT_IMAGE=null;Oe.DEFAULT_MAPPING=300;Oe.DEFAULT_ANISOTROPY=1;class Me{static{Me.prototype.isVector4=!0}constructor(t=0,e=0,n=0,i=1){this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,i=this.z,s=this.w,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*i+r[12]*s,this.y=r[1]*e+r[5]*n+r[9]*i+r[13]*s,this.z=r[2]*e+r[6]*n+r[10]*i+r[14]*s,this.w=r[3]*e+r[7]*n+r[11]*i+r[15]*s,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);if(e<0.0001)this.x=1,this.y=0,this.z=0;else this.x=t.x/e,this.y=t.y/e,this.z=t.z/e;return this}setAxisAngleFromRotationMatrix(t){let e,n,i,s,r=0.01,a=0.1,o=t.elements,l=o[0],c=o[4],h=o[8],d=o[1],u=o[5],f=o[9],g=o[2],v=o[6],m=o[10];if(Math.abs(c-d)<0.01&&Math.abs(h-g)<0.01&&Math.abs(f-v)<0.01){if(Math.abs(c+d)<0.1&&Math.abs(h+g)<0.1&&Math.abs(f+v)<0.1&&Math.abs(l+u+m-3)<0.1)return this.set(1,0,0,0),this;e=Math.PI;let R=(l+1)/2,E=(u+1)/2,x=(m+1)/2,T=(c+d)/4,w=(h+g)/4,A=(f+v)/4;if(R>E&&R>x)if(R<0.01)n=0,i=0.707106781,s=0.707106781;else n=Math.sqrt(R),i=T/n,s=w/n;else if(E>x)if(E<0.01)n=0.707106781,i=0,s=0.707106781;else i=Math.sqrt(E),n=T/i,s=A/i;else if(x<0.01)n=0.707106781,i=0.707106781,s=0;else s=Math.sqrt(x),n=w/s,i=A/s;return this.set(n,i,s,e),this}let p=Math.sqrt((v-f)*(v-f)+(h-g)*(h-g)+(d-c)*(d-c));if(Math.abs(p)<0.001)p=1;return this.x=(v-f)/p,this.y=(h-g)/p,this.z=(d-c)/p,this.w=Math.acos((l+u+m-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=$t(this.x,t.x,e.x),this.y=$t(this.y,t.y,e.y),this.z=$t(this.z,t.z,e.z),this.w=$t(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=$t(this.x,t,e),this.y=$t(this.y,t,e),this.z=$t(this.z,t,e),this.w=$t(this.w,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar($t(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class tc extends Ln{constructor(t=1,e=1,n={}){super();n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:1006,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new Me(0,0,t,e),this.scissorTest=!1,this.viewport=new Me(0,0,t,e),this.textures=[];let i={width:t,height:e,depth:n.depth},s=new Oe(i),r=n.count;for(let a=0;a<r;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:1006,generateMipmaps:!1,flipY:!1,internalFormat:null};if(t.mapping!==void 0)e.mapping=t.mapping;if(t.wrapS!==void 0)e.wrapS=t.wrapS;if(t.wrapT!==void 0)e.wrapT=t.wrapT;if(t.wrapR!==void 0)e.wrapR=t.wrapR;if(t.magFilter!==void 0)e.magFilter=t.magFilter;if(t.minFilter!==void 0)e.minFilter=t.minFilter;if(t.format!==void 0)e.format=t.format;if(t.type!==void 0)e.type=t.type;if(t.anisotropy!==void 0)e.anisotropy=t.anisotropy;if(t.colorSpace!==void 0)e.colorSpace=t.colorSpace;if(t.flipY!==void 0)e.flipY=t.flipY;if(t.generateMipmaps!==void 0)e.generateMipmaps=t.generateMipmaps;if(t.internalFormat!==void 0)e.internalFormat=t.internalFormat;for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){if(this._depthTexture!==null)this._depthTexture.renderTarget=null;if(t!==null)t.renderTarget=this;this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let i=0,s=this.textures.length;i<s;i++)if(this.textures[i].image.width=t,this.textures[i].image.height=e,this.textures[i].image.depth=n,this.textures[i].isData3DTexture!==!0)this.textures[i].isArrayTexture=this.textures[i].image.depth>1;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let i=Object.assign({},t.textures[e].image);this.textures[e].source=new fr(i)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null)this.depthTexture=t.depthTexture.clone();return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class hn extends tc{constructor(t=1,e=1,n={}){super(t,e,n);this.isWebGLRenderTarget=!0}}class Ca extends Oe{constructor(t=null,e=1,n=1,i=1){super(null);this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=1003,this.minFilter=1003,this.wrapR=1001,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class ec extends Oe{constructor(t=null,e=1,n=1,i=1){super(null);this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=1003,this.minFilter=1003,this.wrapR=1001,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class re{static{re.prototype.isMatrix4=!0}constructor(t,e,n,i,s,r,a,o,l,c,h,d,u,f,g,v){if(this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0)this.set(t,e,n,i,s,r,a,o,l,c,h,d,u,f,g,v)}set(t,e,n,i,s,r,a,o,l,c,h,d,u,f,g,v){let m=this.elements;return m[0]=t,m[4]=e,m[8]=n,m[12]=i,m[1]=s,m[5]=r,m[9]=a,m[13]=o,m[2]=l,m[6]=c,m[10]=h,m[14]=d,m[3]=u,m[7]=f,m[11]=g,m[15]=v,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new re().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){if(this.determinantAffine()===0)return t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this;return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,n=t.elements,i=1/es.setFromMatrixColumn(t,0).length(),s=1/es.setFromMatrixColumn(t,1).length(),r=1/es.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*s,e[5]=n[5]*s,e[6]=n[6]*s,e[7]=0,e[8]=n[8]*r,e[9]=n[9]*r,e[10]=n[10]*r,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,{x:n,y:i,z:s}=t,r=Math.cos(n),a=Math.sin(n),o=Math.cos(i),l=Math.sin(i),c=Math.cos(s),h=Math.sin(s);if(t.order==="XYZ"){let d=r*c,u=r*h,f=a*c,g=a*h;e[0]=o*c,e[4]=-o*h,e[8]=l,e[1]=u+f*l,e[5]=d-g*l,e[9]=-a*o,e[2]=g-d*l,e[6]=f+u*l,e[10]=r*o}else if(t.order==="YXZ"){let d=o*c,u=o*h,f=l*c,g=l*h;e[0]=d+g*a,e[4]=f*a-u,e[8]=r*l,e[1]=r*h,e[5]=r*c,e[9]=-a,e[2]=u*a-f,e[6]=g+d*a,e[10]=r*o}else if(t.order==="ZXY"){let d=o*c,u=o*h,f=l*c,g=l*h;e[0]=d-g*a,e[4]=-r*h,e[8]=f+u*a,e[1]=u+f*a,e[5]=r*c,e[9]=g-d*a,e[2]=-r*l,e[6]=a,e[10]=r*o}else if(t.order==="ZYX"){let d=r*c,u=r*h,f=a*c,g=a*h;e[0]=o*c,e[4]=f*l-u,e[8]=d*l+g,e[1]=o*h,e[5]=g*l+d,e[9]=u*l-f,e[2]=-l,e[6]=a*o,e[10]=r*o}else if(t.order==="YZX"){let d=r*o,u=r*l,f=a*o,g=a*l;e[0]=o*c,e[4]=g-d*h,e[8]=f*h+u,e[1]=h,e[5]=r*c,e[9]=-a*c,e[2]=-l*c,e[6]=u*h+f,e[10]=d-g*h}else if(t.order==="XZY"){let d=r*o,u=r*l,f=a*o,g=a*l;e[0]=o*c,e[4]=-h,e[8]=l*c,e[1]=d*h+g,e[5]=r*c,e[9]=u*h-f,e[2]=f*h-u,e[6]=a*c,e[10]=g*h+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(ip,t,sp)}lookAt(t,e,n){let i=this.elements;if(sn.subVectors(t,e),sn.lengthSq()===0)sn.z=1;if(sn.normalize(),ni.crossVectors(n,sn),ni.lengthSq()===0){if(Math.abs(n.z)===1)sn.x+=0.0001;else sn.z+=0.0001;sn.normalize(),ni.crossVectors(n,sn)}return ni.normalize(),Fr.crossVectors(sn,ni),i[0]=ni.x,i[4]=Fr.x,i[8]=sn.x,i[1]=ni.y,i[5]=Fr.y,i[9]=sn.y,i[2]=ni.z,i[6]=Fr.z,i[10]=sn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,i=e.elements,s=this.elements,r=n[0],a=n[4],o=n[8],l=n[12],c=n[1],h=n[5],d=n[9],u=n[13],f=n[2],g=n[6],v=n[10],m=n[14],p=n[3],R=n[7],E=n[11],x=n[15],T=i[0],w=i[4],A=i[8],_=i[12],M=i[1],U=i[5],C=i[9],k=i[13],q=i[2],F=i[6],V=i[10],W=i[14],O=i[3],j=i[7],rt=i[11],lt=i[15];return s[0]=r*T+a*M+o*q+l*O,s[4]=r*w+a*U+o*F+l*j,s[8]=r*A+a*C+o*V+l*rt,s[12]=r*_+a*k+o*W+l*lt,s[1]=c*T+h*M+d*q+u*O,s[5]=c*w+h*U+d*F+u*j,s[9]=c*A+h*C+d*V+u*rt,s[13]=c*_+h*k+d*W+u*lt,s[2]=f*T+g*M+v*q+m*O,s[6]=f*w+g*U+v*F+m*j,s[10]=f*A+g*C+v*V+m*rt,s[14]=f*_+g*k+v*W+m*lt,s[3]=p*T+R*M+E*q+x*O,s[7]=p*w+R*U+E*F+x*j,s[11]=p*A+R*C+E*V+x*rt,s[15]=p*_+R*k+E*W+x*lt,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],i=t[8],s=t[12],r=t[1],a=t[5],o=t[9],l=t[13],c=t[2],h=t[6],d=t[10],u=t[14],f=t[3],g=t[7],v=t[11],m=t[15],p=o*u-l*d,R=a*u-l*h,E=a*d-o*h,x=r*u-l*c,T=r*d-o*c,w=r*h-a*c;return e*(g*p-v*R+m*E)-n*(f*p-v*x+m*T)+i*(f*R-g*x+m*w)-s*(f*E-g*T+v*w)}determinantAffine(){let t=this.elements,e=t[0],n=t[4],i=t[8],s=t[1],r=t[5],a=t[9],o=t[2],l=t[6],c=t[10];return e*(r*c-a*l)-n*(s*c-a*o)+i*(s*l-r*o)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let i=this.elements;if(t.isVector3)i[12]=t.x,i[13]=t.y,i[14]=t.z;else i[12]=t,i[13]=e,i[14]=n;return this}invert(){let t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],r=t[4],a=t[5],o=t[6],l=t[7],c=t[8],h=t[9],d=t[10],u=t[11],f=t[12],g=t[13],v=t[14],m=t[15],p=e*a-n*r,R=e*o-i*r,E=e*l-s*r,x=n*o-i*a,T=n*l-s*a,w=i*l-s*o,A=c*g-h*f,_=c*v-d*f,M=c*m-u*f,U=h*v-d*g,C=h*m-u*g,k=d*m-u*v,q=p*k-R*C+E*U+x*M-T*_+w*A;if(q===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let F=1/q;return t[0]=(a*k-o*C+l*U)*F,t[1]=(i*C-n*k-s*U)*F,t[2]=(g*w-v*T+m*x)*F,t[3]=(d*T-h*w-u*x)*F,t[4]=(o*M-r*k-l*_)*F,t[5]=(e*k-i*M+s*_)*F,t[6]=(v*E-f*w-m*R)*F,t[7]=(c*w-d*E+u*R)*F,t[8]=(r*C-a*M+l*A)*F,t[9]=(n*M-e*C-s*A)*F,t[10]=(f*T-g*E+m*p)*F,t[11]=(h*E-c*T-u*p)*F,t[12]=(a*_-r*U-o*A)*F,t[13]=(e*U-n*_+i*A)*F,t[14]=(g*R-f*x-v*p)*F,t[15]=(c*x-h*R+d*p)*F,this}scale(t){let e=this.elements,{x:n,y:i,z:s}=t;return e[0]*=n,e[4]*=i,e[8]*=s,e[1]*=n,e[5]*=i,e[9]*=s,e[2]*=n,e[6]*=i,e[10]*=s,e[3]*=n,e[7]*=i,e[11]*=s,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){if(t.isVector3)this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1);else this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1);return this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),i=Math.sin(e),s=1-n,{x:r,y:a,z:o}=t,l=s*r,c=s*a;return this.set(l*r+n,l*a-i*o,l*o+i*a,0,l*a+i*o,c*a+n,c*o-i*r,0,l*o-i*a,c*o+i*r,s*o*o+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,s,r){return this.set(1,n,s,0,t,1,r,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){let i=this.elements,{_x:s,_y:r,_z:a,_w:o}=e,l=s+s,c=r+r,h=a+a,d=s*l,u=s*c,f=s*h,g=r*c,v=r*h,m=a*h,p=o*l,R=o*c,E=o*h,{x,y:T,z:w}=n;return i[0]=(1-(g+m))*x,i[1]=(u+E)*x,i[2]=(f-R)*x,i[3]=0,i[4]=(u-E)*T,i[5]=(1-(d+m))*T,i[6]=(v+p)*T,i[7]=0,i[8]=(f+R)*w,i[9]=(v-p)*w,i[10]=(1-(d+g))*w,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){let i=this.elements;t.x=i[12],t.y=i[13],t.z=i[14];let s=this.determinantAffine();if(s===0)return n.set(1,1,1),e.identity(),this;let r=es.set(i[0],i[1],i[2]).length(),a=es.set(i[4],i[5],i[6]).length(),o=es.set(i[8],i[9],i[10]).length();if(s<0)r=-r;mn.copy(this);let l=1/r,c=1/a,h=1/o;return mn.elements[0]*=l,mn.elements[1]*=l,mn.elements[2]*=l,mn.elements[4]*=c,mn.elements[5]*=c,mn.elements[6]*=c,mn.elements[8]*=h,mn.elements[9]*=h,mn.elements[10]*=h,e.setFromRotationMatrix(mn),n.x=r,n.y=a,n.z=o,this}makePerspective(t,e,n,i,s,r,a=2000,o=!1){let l=this.elements,c=2*s/(e-t),h=2*s/(n-i),d=(e+t)/(e-t),u=(n+i)/(n-i),f,g;if(o)f=s/(r-s),g=r*s/(r-s);else if(a===2000)f=-(r+s)/(r-s),g=-2*r*s/(r-s);else if(a===2001)f=-r/(r-s),g=-r*s/(r-s);else throw Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=h,l[9]=u,l[13]=0,l[2]=0,l[6]=0,l[10]=f,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,i,s,r,a=2000,o=!1){let l=this.elements,c=2/(e-t),h=2/(n-i),d=-(e+t)/(e-t),u=-(n+i)/(n-i),f,g;if(o)f=1/(r-s),g=r/(r-s);else if(a===2000)f=-2/(r-s),g=-(r+s)/(r-s);else if(a===2001)f=-1/(r-s),g=-s/(r-s);else throw Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=0,l[12]=d,l[1]=0,l[5]=h,l[9]=0,l[13]=u,l[2]=0,l[6]=0,l[10]=f,l[14]=g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}var es=new P,mn=new re,ip=new P(0,0,0),sp=new P(1,1,1),ni=new P,Fr=new P,sn=new P,Ch=new re,Ph=new cn;class Xn{constructor(t=0,e=0,n=0,i=Xn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let i=t.elements,s=i[0],r=i[4],a=i[8],o=i[1],l=i[5],c=i[9],h=i[2],d=i[6],u=i[10];switch(e){case"XYZ":if(this._y=Math.asin($t(a,-1,1)),Math.abs(a)<0.9999999)this._x=Math.atan2(-c,u),this._z=Math.atan2(-r,s);else this._x=Math.atan2(d,l),this._z=0;break;case"YXZ":if(this._x=Math.asin(-$t(c,-1,1)),Math.abs(c)<0.9999999)this._y=Math.atan2(a,u),this._z=Math.atan2(o,l);else this._y=Math.atan2(-h,s),this._z=0;break;case"ZXY":if(this._x=Math.asin($t(d,-1,1)),Math.abs(d)<0.9999999)this._y=Math.atan2(-h,u),this._z=Math.atan2(-r,l);else this._y=0,this._z=Math.atan2(o,s);break;case"ZYX":if(this._y=Math.asin(-$t(h,-1,1)),Math.abs(h)<0.9999999)this._x=Math.atan2(d,u),this._z=Math.atan2(o,s);else this._x=0,this._z=Math.atan2(-r,l);break;case"YZX":if(this._z=Math.asin($t(o,-1,1)),Math.abs(o)<0.9999999)this._x=Math.atan2(-c,l),this._y=Math.atan2(-h,s);else this._x=0,this._y=Math.atan2(a,u);break;case"XZY":if(this._z=Math.asin(-$t(r,-1,1)),Math.abs(r)<0.9999999)this._x=Math.atan2(d,l),this._y=Math.atan2(a,s);else this._x=Math.atan2(-c,u),this._y=0;break;default:Ut("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}if(this._order=e,n===!0)this._onChangeCallback();return this}setFromQuaternion(t,e,n){return Ch.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Ch,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Ph.setFromEuler(this),this.setFromQuaternion(Ph,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){if(this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0)this._order=t[3];return this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Xn.DEFAULT_ORDER="XYZ";class pr{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}var rp=0,Ih=new P,ns=new cn,zn=new re,Or=new P,Gs=new P,ap=new P,op=new cn,Lh=new P(1,0,0),Dh=new P(0,1,0),Nh=new P(0,0,1),Uh={type:"added"},lp={type:"removed"},is={type:"childadded",child:null},To={type:"childremoved",child:null};class ve extends Ln{constructor(){super();this.isObject3D=!0,Object.defineProperty(this,"id",{value:rp++}),this.uuid=Rn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ve.DEFAULT_UP.clone();let t=new P,e=new Xn,n=new cn,i=new P(1,1,1);function s(){n.setFromEuler(e,!1)}function r(){e.setFromQuaternion(n,void 0,!1)}e._onChange(s),n._onChange(r),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new re},normalMatrix:{value:new Vt}}),this.matrix=new re,this.matrixWorld=new re,this.matrixAutoUpdate=ve.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=ve.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new pr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){if(this.matrixAutoUpdate)this.updateMatrix();this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return ns.setFromAxisAngle(t,e),this.quaternion.multiply(ns),this}rotateOnWorldAxis(t,e){return ns.setFromAxisAngle(t,e),this.quaternion.premultiply(ns),this}rotateX(t){return this.rotateOnAxis(Lh,t)}rotateY(t){return this.rotateOnAxis(Dh,t)}rotateZ(t){return this.rotateOnAxis(Nh,t)}translateOnAxis(t,e){return Ih.copy(t).applyQuaternion(this.quaternion),this.position.add(Ih.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Lh,t)}translateY(t){return this.translateOnAxis(Dh,t)}translateZ(t){return this.translateOnAxis(Nh,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(zn.copy(this.matrixWorld).invert())}lookAt(t,e,n){if(t.isVector3)Or.copy(t);else Or.set(t,e,n);let i=this.parent;if(this.updateWorldMatrix(!0,!1),Gs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight)zn.lookAt(Gs,Or,this.up);else zn.lookAt(Or,Gs,this.up);if(this.quaternion.setFromRotationMatrix(zn),i)zn.extractRotation(i.matrixWorld),ns.setFromRotationMatrix(zn),this.quaternion.premultiply(ns.invert())}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}if(t===this)return Bt("Object3D.add: object can't be added as a child of itself.",t),this;if(t&&t.isObject3D)t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Uh),is.child=t,this.dispatchEvent(is),is.child=null;else Bt("Object3D.add: object not an instance of THREE.Object3D.",t);return this}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);if(e!==-1)t.parent=null,this.children.splice(e,1),t.dispatchEvent(lp),To.child=t,this.dispatchEvent(To),To.child=null;return this}removeFromParent(){let t=this.parent;if(t!==null)t.remove(this);return this}clear(){return this.remove(...this.children)}attach(t){if(this.updateWorldMatrix(!0,!1),zn.copy(this.matrixWorld).invert(),t.parent!==null)t.parent.updateWorldMatrix(!0,!1),zn.multiply(t.parent.matrixWorld);return t.applyMatrix4(zn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Uh),is.child=t,this.dispatchEvent(is),is.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){let r=this.children[n].getObjectByProperty(t,e);if(r!==void 0)return r}return}getObjectsByProperty(t,e,n=[]){if(this[t]===e)n.push(this);let i=this.children;for(let s=0,r=i.length;s<r;s++)i[s].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Gs,t,ap),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Gs,op,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;if(e!==null)t(e),e.traverseAncestors(t)}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let{x:e,y:n,z:i}=t,s=this.matrix.elements;s[12]+=e-s[0]*e-s[4]*n-s[8]*i,s[13]+=n-s[1]*e-s[5]*n-s[9]*i,s[14]+=i-s[2]*e-s[6]*n-s[10]*i}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){if(this.matrixAutoUpdate)this.updateMatrix();if(this.matrixWorldNeedsUpdate||t){if(this.matrixWorldAutoUpdate===!0)if(this.parent===null)this.matrixWorld.copy(this.matrix);else this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix);this.matrixWorldNeedsUpdate=!1,t=!0}let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e,n=!1){let i=this.parent;if(t===!0&&i!==null)i.updateWorldMatrix(!0,!1);if(this.matrixAutoUpdate)this.updateMatrix();if(this.matrixWorldNeedsUpdate||n){if(this.matrixWorldAutoUpdate===!0)if(this.parent===null)this.matrixWorld.copy(this.matrix);else this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix);this.matrixWorldNeedsUpdate=!1,n=!0}if(e===!0){let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].updateWorldMatrix(!1,!0,n)}}toJSON(t){let e=t===void 0||typeof t==="string",n={};if(e)t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"};let i={};if(i.uuid=this.uuid,i.type=this.type,this.name!=="")i.name=this.name;if(this.castShadow===!0)i.castShadow=!0;if(this.receiveShadow===!0)i.receiveShadow=!0;if(this.visible===!1)i.visible=!1;if(this.frustumCulled===!1)i.frustumCulled=!1;if(this.renderOrder!==0)i.renderOrder=this.renderOrder;if(this.static!==!1)i.static=this.static;if(Object.keys(this.userData).length>0)i.userData=this.userData;if(i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.pivot!==null)i.pivot=this.pivot.toArray();if(this.matrixAutoUpdate===!1)i.matrixAutoUpdate=!1;if(this.morphTargetDictionary!==void 0)i.morphTargetDictionary=Object.assign({},this.morphTargetDictionary);if(this.morphTargetInfluences!==void 0)i.morphTargetInfluences=this.morphTargetInfluences.slice();if(this.isInstancedMesh){if(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null)i.instanceColor=this.instanceColor.toJSON()}if(this.isBatchedMesh){if(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map((a)=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map((a)=>({...a})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(t),i.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null)i.colorsTexture=this._colorsTexture.toJSON(t);if(this.boundingSphere!==null)i.boundingSphere=this.boundingSphere.toJSON();if(this.boundingBox!==null)i.boundingBox=this.boundingBox.toJSON()}function s(a,o){if(a[o.uuid]===void 0)a[o.uuid]=o.toJSON(t);return o.uuid}if(this.isScene){if(this.background){if(this.background.isColor)i.background=this.background.toJSON();else if(this.background.isTexture)i.background=this.background.toJSON(t).uuid}if(this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0)i.environment=this.environment.toJSON(t).uuid}else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let o=a.shapes;if(Array.isArray(o))for(let l=0,c=o.length;l<c;l++){let h=o[l];s(t.shapes,h)}else s(t.shapes,o)}}if(this.isSkinnedMesh){if(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0)s(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid}if(this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let o=0,l=this.material.length;o<l;o++)a.push(s(t.materials,this.material[o]));i.material=a}else i.material=s(t.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){let o=this.animations[a];i.animations.push(s(t.animations,o))}}if(e){let a=r(t.geometries),o=r(t.materials),l=r(t.textures),c=r(t.images),h=r(t.shapes),d=r(t.skeletons),u=r(t.animations),f=r(t.nodes);if(a.length>0)n.geometries=a;if(o.length>0)n.materials=o;if(l.length>0)n.textures=l;if(c.length>0)n.images=c;if(h.length>0)n.shapes=h;if(d.length>0)n.skeletons=d;if(u.length>0)n.animations=u;if(f.length>0)n.nodes=f}return n.object=i,n;function r(a){let o=[];for(let l in a){let c=a[l];delete c.metadata,o.push(c)}return o}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let i=t.children[n];this.add(i.clone())}return this}}ve.DEFAULT_UP=new P(0,1,0);ve.DEFAULT_MATRIX_AUTO_UPDATE=!0;ve.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Je extends ve{constructor(){super();this.isGroup=!0,this.type="Group"}}var cp={type:"move"};class mr{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){if(this._hand===null)this._hand=new Je,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1};return this._hand}getTargetRaySpace(){if(this._targetRay===null)this._targetRay=new Je,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new P,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new P;return this._targetRay}getGripSpace(){if(this._grip===null)this._grip=new Je,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new P,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new P,this._grip.eventsEnabled=!1;return this._grip}dispatchEvent(t){if(this._targetRay!==null)this._targetRay.dispatchEvent(t);if(this._grip!==null)this._grip.dispatchEvent(t);if(this._hand!==null)this._hand.dispatchEvent(t);return this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){if(this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null)this._targetRay.visible=!1;if(this._grip!==null)this._grip.visible=!1;if(this._hand!==null)this._hand.visible=!1;return this}update(t,e,n){let i=null,s=null,r=null,a=this._targetRay,o=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){r=!0;for(let g of t.hand.values()){let v=e.getJointPose(g,n),m=this._getHandJoint(l,g);if(v!==null)m.matrix.fromArray(v.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=v.radius;m.visible=v!==null}let c=l.joints["index-finger-tip"],h=l.joints["thumb-tip"],d=c.position.distanceTo(h.position),u=0.02,f=0.005;if(l.inputState.pinching&&d>u+f)l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this});else if(!l.inputState.pinching&&d<=u-f)l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this})}else if(o!==null&&t.gripSpace){if(s=e.getPose(t.gripSpace,n),s!==null){if(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity)o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity);else o.hasLinearVelocity=!1;if(s.angularVelocity)o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity);else o.hasAngularVelocity=!1;if(o.eventsEnabled)o.dispatchEvent({type:"gripUpdated",data:t,target:this})}}if(a!==null){if(i=e.getPose(t.targetRaySpace,n),i===null&&s!==null)i=s;if(i!==null){if(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity)a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity);else a.hasLinearVelocity=!1;if(i.angularVelocity)a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity);else a.hasAngularVelocity=!1;this.dispatchEvent(cp)}}}if(a!==null)a.visible=i!==null;if(o!==null)o.visible=s!==null;if(l!==null)l.visible=r!==null;return this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new Je;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}var ad={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ii={h:0,s:0,l:0},Br={h:0,s:0,l:0};function wo(t,e,n){if(n<0)n+=1;if(n>1)n-=1;if(n<0.16666666666666666)return t+(e-t)*6*n;if(n<0.5)return e;if(n<0.6666666666666666)return t+(e-t)*6*(0.6666666666666666-n);return t}class Zt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let i=t;if(i&&i.isColor)this.copy(i);else if(typeof i==="number")this.setHex(i);else if(typeof i==="string")this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e="srgb"){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ee.colorSpaceToWorking(this,e),this}setRGB(t,e,n,i=ee.workingColorSpace){return this.r=t,this.g=e,this.b=n,ee.colorSpaceToWorking(this,i),this}setHSL(t,e,n,i=ee.workingColorSpace){if(t=jl(t,1),e=$t(e,0,1),n=$t(n,0,1),e===0)this.r=this.g=this.b=n;else{let s=n<=0.5?n*(1+e):n+e-n*e,r=2*n-s;this.r=wo(r,s,t+0.3333333333333333),this.g=wo(r,s,t),this.b=wo(r,s,t-0.3333333333333333)}return ee.colorSpaceToWorking(this,i),this}setStyle(t,e="srgb"){function n(s){if(s===void 0)return;if(parseFloat(s)<1)Ut("Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let s,r=i[1],a=i[2];switch(r){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,e);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:Ut("Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){let s=i[1],r=s.length;if(r===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);else if(r===6)return this.setHex(parseInt(s,16),e);else Ut("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e="srgb"){let n=ad[t.toLowerCase()];if(n!==void 0)this.setHex(n,e);else Ut("Color: Unknown color "+t);return this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Wn(t.r),this.g=Wn(t.g),this.b=Wn(t.b),this}copyLinearToSRGB(t){return this.r=xs(t.r),this.g=xs(t.g),this.b=xs(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t="srgb"){return ee.workingToColorSpace(Ge.copy(this),t),Math.round($t(Ge.r*255,0,255))*65536+Math.round($t(Ge.g*255,0,255))*256+Math.round($t(Ge.b*255,0,255))}getHexString(t="srgb"){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ee.workingColorSpace){ee.workingToColorSpace(Ge.copy(this),e);let{r:n,g:i,b:s}=Ge,r=Math.max(n,i,s),a=Math.min(n,i,s),o,l,c=(a+r)/2;if(a===r)o=0,l=0;else{let h=r-a;switch(l=c<=0.5?h/(r+a):h/(2-r-a),r){case n:o=(i-s)/h+(i<s?6:0);break;case i:o=(s-n)/h+2;break;case s:o=(n-i)/h+4;break}o/=6}return t.h=o,t.s=l,t.l=c,t}getRGB(t,e=ee.workingColorSpace){return ee.workingToColorSpace(Ge.copy(this),e),t.r=Ge.r,t.g=Ge.g,t.b=Ge.b,t}getStyle(t="srgb"){ee.workingToColorSpace(Ge.copy(this),t);let{r:e,g:n,b:i}=Ge;if(t!=="srgb")return`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`;return`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(ii),this.setHSL(ii.h+t,ii.s+e,ii.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(ii),t.getHSL(Br);let n=js(ii.h,Br.h,e),i=js(ii.s,Br.s,e),s=js(ii.l,Br.l,e);return this.setHSL(n,i,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,i=this.b,s=t.elements;return this.r=s[0]*e+s[3]*n+s[6]*i,this.g=s[1]*e+s[4]*n+s[7]*i,this.b=s[2]*e+s[5]*n+s[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}var Ge=new Zt;Zt.NAMES=ad;class gr{constructor(t,e=1,n=1000){this.isFog=!0,this.name="",this.color=new Zt(t),this.near=e,this.far=n}clone(){return new gr(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class Pa extends ve{constructor(){super();if(this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Xn,this.environmentIntensity=1,this.environmentRotation=new Xn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u")__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){if(super.copy(t,e),t.background!==null)this.background=t.background.clone();if(t.environment!==null)this.environment=t.environment.clone();if(t.fog!==null)this.fog=t.fog.clone();if(this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null)this.overrideMaterial=t.overrideMaterial.clone();return this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);if(this.fog!==null)e.object.fog=this.fog.toJSON();if(this.backgroundBlurriness>0)e.object.backgroundBlurriness=this.backgroundBlurriness;if(this.backgroundIntensity!==1)e.object.backgroundIntensity=this.backgroundIntensity;if(e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1)e.object.environmentIntensity=this.environmentIntensity;return e.object.environmentRotation=this.environmentRotation.toArray(),e}}var gn=new P,kn=new P,Ao=new P,Gn=new P,ss=new P,rs=new P,Fh=new P,Ro=new P,Co=new P,Po=new P,Io=new Me,Lo=new Me,Do=new Me;class $e{constructor(t=new P,e=new P,n=new P){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),gn.subVectors(t,e),i.cross(gn);let s=i.lengthSq();if(s>0)return i.multiplyScalar(1/Math.sqrt(s));return i.set(0,0,0)}static getBarycoord(t,e,n,i,s){gn.subVectors(i,e),kn.subVectors(n,e),Ao.subVectors(t,e);let r=gn.dot(gn),a=gn.dot(kn),o=gn.dot(Ao),l=kn.dot(kn),c=kn.dot(Ao),h=r*l-a*a;if(h===0)return s.set(0,0,0),null;let d=1/h,u=(l*o-a*c)*d,f=(r*c-a*o)*d;return s.set(1-u-f,f,u)}static containsPoint(t,e,n,i){if(this.getBarycoord(t,e,n,i,Gn)===null)return!1;return Gn.x>=0&&Gn.y>=0&&Gn.x+Gn.y<=1}static getInterpolation(t,e,n,i,s,r,a,o){if(this.getBarycoord(t,e,n,i,Gn)===null){if(o.x=0,o.y=0,"z"in o)o.z=0;if("w"in o)o.w=0;return null}return o.setScalar(0),o.addScaledVector(s,Gn.x),o.addScaledVector(r,Gn.y),o.addScaledVector(a,Gn.z),o}static getInterpolatedAttribute(t,e,n,i,s,r){return Io.setScalar(0),Lo.setScalar(0),Do.setScalar(0),Io.fromBufferAttribute(t,e),Lo.fromBufferAttribute(t,n),Do.fromBufferAttribute(t,i),r.setScalar(0),r.addScaledVector(Io,s.x),r.addScaledVector(Lo,s.y),r.addScaledVector(Do,s.z),r}static isFrontFacing(t,e,n,i){return gn.subVectors(n,e),kn.subVectors(t,e),gn.cross(kn).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return gn.subVectors(this.c,this.b),kn.subVectors(this.a,this.b),gn.cross(kn).length()*0.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(0.3333333333333333)}getNormal(t){return $e.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return $e.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,i,s){return $e.getInterpolation(t,this.a,this.b,this.c,e,n,i,s)}containsPoint(t){return $e.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return $e.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,i=this.b,s=this.c,r,a;ss.subVectors(i,n),rs.subVectors(s,n),Ro.subVectors(t,n);let o=ss.dot(Ro),l=rs.dot(Ro);if(o<=0&&l<=0)return e.copy(n);Co.subVectors(t,i);let c=ss.dot(Co),h=rs.dot(Co);if(c>=0&&h<=c)return e.copy(i);let d=o*h-c*l;if(d<=0&&o>=0&&c<=0)return r=o/(o-c),e.copy(n).addScaledVector(ss,r);Po.subVectors(t,s);let u=ss.dot(Po),f=rs.dot(Po);if(f>=0&&u<=f)return e.copy(s);let g=u*l-o*f;if(g<=0&&l>=0&&f<=0)return a=l/(l-f),e.copy(n).addScaledVector(rs,a);let v=c*f-u*h;if(v<=0&&h-c>=0&&u-f>=0)return Fh.subVectors(s,i),a=(h-c)/(h-c+(u-f)),e.copy(i).addScaledVector(Fh,a);let m=1/(v+g+d);return r=g*m,a=d*m,e.copy(n).addScaledVector(ss,r).addScaledVector(rs,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}class Zn{constructor(t=new P(1/0,1/0,1/0),e=new P(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(_n.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(_n.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=_n.copy(e).multiplyScalar(0.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(0.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let s=n.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let r=0,a=s.count;r<a;r++){if(t.isMesh===!0)t.getVertexPosition(r,_n);else _n.fromBufferAttribute(s,r);_n.applyMatrix4(t.matrixWorld),this.expandByPoint(_n)}else{if(t.boundingBox!==void 0){if(t.boundingBox===null)t.computeBoundingBox();zr.copy(t.boundingBox)}else{if(n.boundingBox===null)n.computeBoundingBox();zr.copy(n.boundingBox)}zr.applyMatrix4(t.matrixWorld),this.union(zr)}}let i=t.children;for(let s=0,r=i.length;s<r;s++)this.expandByObject(i[s],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,_n),_n.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;if(t.normal.x>0)e=t.normal.x*this.min.x,n=t.normal.x*this.max.x;else e=t.normal.x*this.max.x,n=t.normal.x*this.min.x;if(t.normal.y>0)e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y;else e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y;if(t.normal.z>0)e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z;else e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z;return e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Hs),kr.subVectors(this.max,Hs),as.subVectors(t.a,Hs),os.subVectors(t.b,Hs),ls.subVectors(t.c,Hs),si.subVectors(os,as),ri.subVectors(ls,os),vi.subVectors(as,ls);let e=[0,-si.z,si.y,0,-ri.z,ri.y,0,-vi.z,vi.y,si.z,0,-si.x,ri.z,0,-ri.x,vi.z,0,-vi.x,-si.y,si.x,0,-ri.y,ri.x,0,-vi.y,vi.x,0];if(!No(e,as,os,ls,kr))return!1;if(e=[1,0,0,0,1,0,0,0,1],!No(e,as,os,ls,kr))return!1;return Gr.crossVectors(si,ri),e=[Gr.x,Gr.y,Gr.z],No(e,as,os,ls,kr)}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,_n).distanceTo(t)}getBoundingSphere(t){if(this.isEmpty())t.makeEmpty();else this.getCenter(t.center),t.radius=this.getSize(_n).length()*0.5;return t}intersect(t){if(this.min.max(t.min),this.max.min(t.max),this.isEmpty())this.makeEmpty();return this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){if(this.isEmpty())return this;return Hn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Hn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Hn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Hn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Hn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Hn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Hn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Hn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Hn),this}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}var Hn=[new P,new P,new P,new P,new P,new P,new P,new P],_n=new P,zr=new Zn,as=new P,os=new P,ls=new P,si=new P,ri=new P,vi=new P,Hs=new P,kr=new P,Gr=new P,Mi=new P;function No(t,e,n,i,s){for(let r=0,a=t.length-3;r<=a;r+=3){Mi.fromArray(t,r);let o=s.x*Math.abs(Mi.x)+s.y*Math.abs(Mi.y)+s.z*Math.abs(Mi.z),l=e.dot(Mi),c=n.dot(Mi),h=i.dot(Mi);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}var Ce=new P,Hr=new K,hp=0;class He extends Ln{constructor(t,e,n=!1){super();if(Array.isArray(t))throw TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:hp++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=35044,this.updateRanges=[],this.gpuType=1015,this.version=0}onUploadCallback(){}set needsUpdate(t){if(t===!0)this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Hr.fromBufferAttribute(this,e),Hr.applyMatrix3(t),this.setXY(e,Hr.x,Hr.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Ce.fromBufferAttribute(this,e),Ce.applyMatrix3(t),this.setXYZ(e,Ce.x,Ce.y,Ce.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Ce.fromBufferAttribute(this,e),Ce.applyMatrix4(t),this.setXYZ(e,Ce.x,Ce.y,Ce.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Ce.fromBufferAttribute(this,e),Ce.applyNormalMatrix(t),this.setXYZ(e,Ce.x,Ce.y,Ce.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Ce.fromBufferAttribute(this,e),Ce.transformDirection(t),this.setXYZ(e,Ce.x,Ce.y,Ce.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];if(this.normalized)n=xn(n,this.array);return n}setComponent(t,e,n){if(this.normalized)n=le(n,this.array);return this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];if(this.normalized)e=xn(e,this.array);return e}setX(t,e){if(this.normalized)e=le(e,this.array);return this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];if(this.normalized)e=xn(e,this.array);return e}setY(t,e){if(this.normalized)e=le(e,this.array);return this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];if(this.normalized)e=xn(e,this.array);return e}setZ(t,e){if(this.normalized)e=le(e,this.array);return this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];if(this.normalized)e=xn(e,this.array);return e}setW(t,e){if(this.normalized)e=le(e,this.array);return this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){if(t*=this.itemSize,this.normalized)e=le(e,this.array),n=le(n,this.array);return this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){if(t*=this.itemSize,this.normalized)e=le(e,this.array),n=le(n,this.array),i=le(i,this.array);return this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,s){if(t*=this.itemSize,this.normalized)e=le(e,this.array),n=le(n,this.array),i=le(i,this.array),s=le(s,this.array);return this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};if(this.name!=="")t.name=this.name;if(this.usage!==35044)t.usage=this.usage;return t}dispose(){this.dispatchEvent({type:"dispose"})}}class Ia extends He{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class La extends He{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class te extends He{constructor(t,e,n){super(new Float32Array(t),e,n)}}var up=new Zn,Vs=new P,Uo=new P;class hi{constructor(t=new P,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;if(e!==void 0)n.copy(e);else up.setFromPoints(t).getCenter(n);let i=0;for(let s=0,r=t.length;s<r;s++)i=Math.max(i,n.distanceToSquared(t[s]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);if(e.copy(t),n>this.radius*this.radius)e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center);return e}getBoundingBox(t){if(this.isEmpty())return t.makeEmpty(),t;return t.set(this.center,this.center),t.expandByScalar(this.radius),t}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Vs.subVectors(t,this.center);let e=Vs.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),i=(n-this.radius)*0.5;this.center.addScaledVector(Vs,i/n),this.radius+=i}return this}union(t){if(t.isEmpty())return this;if(this.isEmpty())return this.copy(t),this;if(this.center.equals(t.center)===!0)this.radius=Math.max(this.radius,t.radius);else Uo.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Vs.copy(t.center).add(Uo)),this.expandByPoint(Vs.copy(t.center).sub(Uo));return this}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}var dp=0,on=new re,Fo=new ve,cs=new P,rn=new Zn,Ws=new Zn,Fe=new P;class Se extends Ln{constructor(){super();this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:dp++}),this.uuid=Rn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){if(Array.isArray(t))this.index=new((Ff(t))?La:Ia)(t,1);else this.index=t;return this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;if(e!==void 0)e.applyMatrix4(t),e.needsUpdate=!0;let n=this.attributes.normal;if(n!==void 0){let s=new Vt().getNormalMatrix(t);n.applyNormalMatrix(s),n.needsUpdate=!0}let i=this.attributes.tangent;if(i!==void 0)i.transformDirection(t),i.needsUpdate=!0;if(this.boundingBox!==null)this.computeBoundingBox();if(this.boundingSphere!==null)this.computeBoundingSphere();return this._transformed=!0,this}applyQuaternion(t){return on.makeRotationFromQuaternion(t),this.applyMatrix4(on),this}rotateX(t){return on.makeRotationX(t),this.applyMatrix4(on),this}rotateY(t){return on.makeRotationY(t),this.applyMatrix4(on),this}rotateZ(t){return on.makeRotationZ(t),this.applyMatrix4(on),this}translate(t,e,n){return on.makeTranslation(t,e,n),this.applyMatrix4(on),this}scale(t,e,n){return on.makeScale(t,e,n),this.applyMatrix4(on),this}lookAt(t){return Fo.lookAt(t),Fo.updateMatrix(),this.applyMatrix4(Fo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(cs).negate(),this.translate(cs.x,cs.y,cs.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let i=0,s=t.length;i<s;i++){let r=t[i];n.push(r.x,r.y,r.z||0)}this.setAttribute("position",new te(n,3))}else{let n=Math.min(t.length,e.count);for(let i=0;i<n;i++){let s=t[i];e.setXYZ(i,s.x,s.y,s.z||0)}if(t.length>e.count)Ut("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry.");e.needsUpdate=!0}return this}computeBoundingBox(){if(this.boundingBox===null)this.boundingBox=new Zn;let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Bt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new P(-1/0,-1/0,-1/0),new P(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){let s=e[n];if(rn.setFromBufferAttribute(s),this.morphTargetsRelative)Fe.addVectors(this.boundingBox.min,rn.min),this.boundingBox.expandByPoint(Fe),Fe.addVectors(this.boundingBox.max,rn.max),this.boundingBox.expandByPoint(Fe);else this.boundingBox.expandByPoint(rn.min),this.boundingBox.expandByPoint(rn.max)}}else this.boundingBox.makeEmpty();if(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))Bt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){if(this.boundingSphere===null)this.boundingSphere=new hi;let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Bt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new P,1/0);return}if(t){let n=this.boundingSphere.center;if(rn.setFromBufferAttribute(t),e)for(let s=0,r=e.length;s<r;s++){let a=e[s];if(Ws.setFromBufferAttribute(a),this.morphTargetsRelative)Fe.addVectors(rn.min,Ws.min),rn.expandByPoint(Fe),Fe.addVectors(rn.max,Ws.max),rn.expandByPoint(Fe);else rn.expandByPoint(Ws.min),rn.expandByPoint(Ws.max)}rn.getCenter(n);let i=0;for(let s=0,r=t.count;s<r;s++)Fe.fromBufferAttribute(t,s),i=Math.max(i,n.distanceToSquared(Fe));if(e)for(let s=0,r=e.length;s<r;s++){let a=e[s],o=this.morphTargetsRelative;for(let l=0,c=a.count;l<c;l++){if(Fe.fromBufferAttribute(a,l),o)cs.fromBufferAttribute(t,l),Fe.add(cs);i=Math.max(i,n.distanceToSquared(Fe))}}if(this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius))Bt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){Bt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let{position:n,normal:i,uv:s}=e,r=this.getAttribute("tangent");if(r===void 0||r.count!==n.count)r=new He(new Float32Array(4*n.count),4),this.setAttribute("tangent",r);let a=[],o=[];for(let A=0;A<n.count;A++)a[A]=new P,o[A]=new P;let l=new P,c=new P,h=new P,d=new K,u=new K,f=new K,g=new P,v=new P;function m(A,_,M){l.fromBufferAttribute(n,A),c.fromBufferAttribute(n,_),h.fromBufferAttribute(n,M),d.fromBufferAttribute(s,A),u.fromBufferAttribute(s,_),f.fromBufferAttribute(s,M),c.sub(l),h.sub(l),u.sub(d),f.sub(d);let U=1/(u.x*f.y-f.x*u.y);if(!isFinite(U))return;g.copy(c).multiplyScalar(f.y).addScaledVector(h,-u.y).multiplyScalar(U),v.copy(h).multiplyScalar(u.x).addScaledVector(c,-f.x).multiplyScalar(U),a[A].add(g),a[_].add(g),a[M].add(g),o[A].add(v),o[_].add(v),o[M].add(v)}let p=this.groups;if(p.length===0)p=[{start:0,count:t.count}];for(let A=0,_=p.length;A<_;++A){let M=p[A],{start:U,count:C}=M;for(let k=U,q=U+C;k<q;k+=3)m(t.getX(k+0),t.getX(k+1),t.getX(k+2))}let R=new P,E=new P,x=new P,T=new P;function w(A){x.fromBufferAttribute(i,A),T.copy(x);let _=a[A];R.copy(_),R.sub(x.multiplyScalar(x.dot(_))).normalize(),E.crossVectors(T,_);let U=E.dot(o[A])<0?-1:1;r.setXYZW(A,R.x,R.y,R.z,U)}for(let A=0,_=p.length;A<_;++A){let M=p[A],{start:U,count:C}=M;for(let k=U,q=U+C;k<q;k+=3)w(t.getX(k+0)),w(t.getX(k+1)),w(t.getX(k+2))}this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==e.count)n=new He(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,u=n.count;d<u;d++)n.setXYZ(d,0,0,0);let i=new P,s=new P,r=new P,a=new P,o=new P,l=new P,c=new P,h=new P;if(t)for(let d=0,u=t.count;d<u;d+=3){let f=t.getX(d+0),g=t.getX(d+1),v=t.getX(d+2);i.fromBufferAttribute(e,f),s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,v),c.subVectors(r,s),h.subVectors(i,s),c.cross(h),a.fromBufferAttribute(n,f),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,v),a.add(c),o.add(c),l.add(c),n.setXYZ(f,a.x,a.y,a.z),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(v,l.x,l.y,l.z)}else for(let d=0,u=e.count;d<u;d+=3)i.fromBufferAttribute(e,d+0),s.fromBufferAttribute(e,d+1),r.fromBufferAttribute(e,d+2),c.subVectors(r,s),h.subVectors(i,s),c.cross(h),n.setXYZ(d+0,c.x,c.y,c.z),n.setXYZ(d+1,c.x,c.y,c.z),n.setXYZ(d+2,c.x,c.y,c.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Fe.fromBufferAttribute(t,e),Fe.normalize(),t.setXYZ(e,Fe.x,Fe.y,Fe.z)}toNonIndexed(){function t(a,o){let{array:l,itemSize:c,normalized:h}=a,d=new l.constructor(o.length*c),u=0,f=0;for(let g=0,v=o.length;g<v;g++){if(a.isInterleavedBufferAttribute)u=o[g]*a.data.stride+a.offset;else u=o[g]*c;for(let m=0;m<c;m++)d[f++]=l[u++]}return new He(d,c,h)}if(this.index===null)return Ut("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new Se,n=this.index.array,i=this.attributes;for(let a in i){let o=i[a],l=t(o,n);e.setAttribute(a,l)}let s=this.morphAttributes;for(let a in s){let o=[],l=s[a];for(let c=0,h=l.length;c<h;c++){let d=l[c],u=t(d,n);o.push(u)}e.morphAttributes[a]=o}e.morphTargetsRelative=this.morphTargetsRelative;let r=this.groups;for(let a=0,o=r.length;a<o;a++){let l=r[a];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,this.name!=="")t.name=this.name;if(Object.keys(this.userData).length>0)t.userData=this.userData;if(this.parameters!==void 0&&this._transformed!==!0){let o=this.parameters;for(let l in o)if(o[l]!==void 0)t[l]=o[l];return t}t.data={attributes:{}};let e=this.index;if(e!==null)t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)};let n=this.attributes;for(let o in n){let l=n[o];t.data.attributes[o]=l.toJSON(t.data)}let i={},s=!1;for(let o in this.morphAttributes){let l=this.morphAttributes[o],c=[];for(let h=0,d=l.length;h<d;h++){let u=l[h];c.push(u.toJSON(t.data))}if(c.length>0)i[o]=c,s=!0}if(s)t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative;let r=this.groups;if(r.length>0)t.data.groups=JSON.parse(JSON.stringify(r));let a=this.boundingSphere;if(a!==null)t.data.boundingSphere=a.toJSON();return t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;if(n!==null)this.setIndex(n.clone());let i=t.attributes;for(let l in i){let c=i[l];this.setAttribute(l,c.clone(e))}let s=t.morphAttributes;for(let l in s){let c=[],h=s[l];for(let d=0,u=h.length;d<u;d++)c.push(h[d].clone(e));this.morphAttributes[l]=c}this.morphTargetsRelative=t.morphTargetsRelative;let r=t.groups;for(let l=0,c=r.length;l<c;l++){let h=r[l];this.addGroup(h.start,h.count,h.materialIndex)}let a=t.boundingBox;if(a!==null)this.boundingBox=a.clone();let o=t.boundingSphere;if(o!==null)this.boundingSphere=o.clone();return this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Da{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=35044,this.updateRanges=[],this.version=0,this.uuid=Rn()}onUploadCallback(){}set needsUpdate(t){if(t===!0)this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let i=0,s=this.stride;i<s;i++)this.array[t+i]=e.array[n+i];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){if(t.arrayBuffers===void 0)t.arrayBuffers={};if(this.array.buffer._uuid===void 0)this.array.buffer._uuid=Rn();if(t.arrayBuffers[this.array.buffer._uuid]===void 0)t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer;let e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){if(t.arrayBuffers===void 0)t.arrayBuffers={};if(this.array.buffer._uuid===void 0)this.array.buffer._uuid=Rn();if(t.arrayBuffers[this.array.buffer._uuid]===void 0)t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer));return{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}var qe=new P;class Ms{constructor(t,e,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)qe.fromBufferAttribute(this,e),qe.applyMatrix4(t),this.setXYZ(e,qe.x,qe.y,qe.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)qe.fromBufferAttribute(this,e),qe.applyNormalMatrix(t),this.setXYZ(e,qe.x,qe.y,qe.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)qe.fromBufferAttribute(this,e),qe.transformDirection(t),this.setXYZ(e,qe.x,qe.y,qe.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];if(this.normalized)n=xn(n,this.array);return n}setComponent(t,e,n){if(this.normalized)n=le(n,this.array);return this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){if(this.normalized)e=le(e,this.array);return this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){if(this.normalized)e=le(e,this.array);return this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){if(this.normalized)e=le(e,this.array);return this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){if(this.normalized)e=le(e,this.array);return this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];if(this.normalized)e=xn(e,this.array);return e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];if(this.normalized)e=xn(e,this.array);return e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];if(this.normalized)e=xn(e,this.array);return e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];if(this.normalized)e=xn(e,this.array);return e}setXY(t,e,n){if(t=t*this.data.stride+this.offset,this.normalized)e=le(e,this.array),n=le(n,this.array);return this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,i){if(t=t*this.data.stride+this.offset,this.normalized)e=le(e,this.array),n=le(n,this.array),i=le(i,this.array);return this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this}setXYZW(t,e,n,i,s){if(t=t*this.data.stride+this.offset,this.normalized)e=le(e,this.array),n=le(n,this.array),i=le(i,this.array),s=le(s,this.array);return this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this.data.array[t+3]=s,this}clone(t){if(t===void 0){nr("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)e.push(this.data.array[i+s])}return new He(new this.array.constructor(e),this.itemSize,this.normalized)}else{if(t.interleavedBuffers===void 0)t.interleavedBuffers={};if(t.interleavedBuffers[this.data.uuid]===void 0)t.interleavedBuffers[this.data.uuid]=this.data.clone(t);return new Ms(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}}toJSON(t){if(t===void 0){nr("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)e.push(this.data.array[i+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else{if(t.interleavedBuffers===void 0)t.interleavedBuffers={};if(t.interleavedBuffers[this.data.uuid]===void 0)t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t);return{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}}var fp=0;class $n extends Ln{constructor(){super();this.isMaterial=!0,Object.defineProperty(this,"id",{value:fp++}),this.uuid=Rn(),this.name="",this.type="Material",this.blending=1,this.side=0,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=204,this.blendDst=205,this.blendEquation=100,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Zt(0,0,0),this.blendAlpha=0,this.depthFunc=3,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=519,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=7680,this.stencilZFail=7680,this.stencilZPass=7680,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){if(this._alphaTest>0!==t>0)this.version++;this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t===void 0)return;for(let e in t){let n=t[e];if(n===void 0){Ut(`Material: parameter '${e}' has value of undefined.`);continue}let i=this[e];if(i===void 0){Ut(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}if(i&&i.isColor)i.set(n);else if(i&&i.isVector2&&(n&&n.isVector2)||i&&i.isEuler&&(n&&n.isEuler)||i&&i.isVector3&&(n&&n.isVector3))i.copy(n);else this[e]=n}}toJSON(t){let e=t===void 0||typeof t==="string";if(e)t={textures:{},images:{}};let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};if(n.uuid=this.uuid,n.type=this.type,this.name!=="")n.name=this.name;if(this.color&&this.color.isColor)n.color=this.color.getHex();if(this.roughness!==void 0)n.roughness=this.roughness;if(this.metalness!==void 0)n.metalness=this.metalness;if(this.sheen!==void 0)n.sheen=this.sheen;if(this.sheenColor&&this.sheenColor.isColor)n.sheenColor=this.sheenColor.getHex();if(this.sheenRoughness!==void 0)n.sheenRoughness=this.sheenRoughness;if(this.emissive&&this.emissive.isColor)n.emissive=this.emissive.getHex();if(this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1)n.emissiveIntensity=this.emissiveIntensity;if(this.specular&&this.specular.isColor)n.specular=this.specular.getHex();if(this.specularIntensity!==void 0)n.specularIntensity=this.specularIntensity;if(this.specularColor&&this.specularColor.isColor)n.specularColor=this.specularColor.getHex();if(this.shininess!==void 0)n.shininess=this.shininess;if(this.clearcoat!==void 0)n.clearcoat=this.clearcoat;if(this.clearcoatRoughness!==void 0)n.clearcoatRoughness=this.clearcoatRoughness;if(this.clearcoatMap&&this.clearcoatMap.isTexture)n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid;if(this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture)n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid;if(this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture)n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray();if(this.sheenColorMap&&this.sheenColorMap.isTexture)n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid;if(this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture)n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid;if(this.dispersion!==void 0)n.dispersion=this.dispersion;if(this.iridescence!==void 0)n.iridescence=this.iridescence;if(this.iridescenceIOR!==void 0)n.iridescenceIOR=this.iridescenceIOR;if(this.iridescenceThicknessRange!==void 0)n.iridescenceThicknessRange=this.iridescenceThicknessRange;if(this.iridescenceMap&&this.iridescenceMap.isTexture)n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid;if(this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture)n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid;if(this.anisotropy!==void 0)n.anisotropy=this.anisotropy;if(this.anisotropyRotation!==void 0)n.anisotropyRotation=this.anisotropyRotation;if(this.anisotropyMap&&this.anisotropyMap.isTexture)n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid;if(this.map&&this.map.isTexture)n.map=this.map.toJSON(t).uuid;if(this.matcap&&this.matcap.isTexture)n.matcap=this.matcap.toJSON(t).uuid;if(this.alphaMap&&this.alphaMap.isTexture)n.alphaMap=this.alphaMap.toJSON(t).uuid;if(this.lightMap&&this.lightMap.isTexture)n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity;if(this.aoMap&&this.aoMap.isTexture)n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity;if(this.bumpMap&&this.bumpMap.isTexture)n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale;if(this.normalMap&&this.normalMap.isTexture)n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray();if(this.displacementMap&&this.displacementMap.isTexture)n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias;if(this.roughnessMap&&this.roughnessMap.isTexture)n.roughnessMap=this.roughnessMap.toJSON(t).uuid;if(this.metalnessMap&&this.metalnessMap.isTexture)n.metalnessMap=this.metalnessMap.toJSON(t).uuid;if(this.emissiveMap&&this.emissiveMap.isTexture)n.emissiveMap=this.emissiveMap.toJSON(t).uuid;if(this.specularMap&&this.specularMap.isTexture)n.specularMap=this.specularMap.toJSON(t).uuid;if(this.specularIntensityMap&&this.specularIntensityMap.isTexture)n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid;if(this.specularColorMap&&this.specularColorMap.isTexture)n.specularColorMap=this.specularColorMap.toJSON(t).uuid;if(this.envMap&&this.envMap.isTexture){if(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0)n.combine=this.combine}if(this.envMapRotation!==void 0)n.envMapRotation=this.envMapRotation.toArray();if(this.envMapIntensity!==void 0)n.envMapIntensity=this.envMapIntensity;if(this.reflectivity!==void 0)n.reflectivity=this.reflectivity;if(this.refractionRatio!==void 0)n.refractionRatio=this.refractionRatio;if(this.gradientMap&&this.gradientMap.isTexture)n.gradientMap=this.gradientMap.toJSON(t).uuid;if(this.transmission!==void 0)n.transmission=this.transmission;if(this.transmissionMap&&this.transmissionMap.isTexture)n.transmissionMap=this.transmissionMap.toJSON(t).uuid;if(this.thickness!==void 0)n.thickness=this.thickness;if(this.thicknessMap&&this.thicknessMap.isTexture)n.thicknessMap=this.thicknessMap.toJSON(t).uuid;if(this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0)n.attenuationDistance=this.attenuationDistance;if(this.attenuationColor!==void 0)n.attenuationColor=this.attenuationColor.getHex();if(this.size!==void 0)n.size=this.size;if(this.shadowSide!==null)n.shadowSide=this.shadowSide;if(this.sizeAttenuation!==void 0)n.sizeAttenuation=this.sizeAttenuation;if(this.blending!==1)n.blending=this.blending;if(this.side!==0)n.side=this.side;if(this.vertexColors===!0)n.vertexColors=!0;if(this.opacity<1)n.opacity=this.opacity;if(this.transparent===!0)n.transparent=!0;if(this.blendSrc!==204)n.blendSrc=this.blendSrc;if(this.blendDst!==205)n.blendDst=this.blendDst;if(this.blendEquation!==100)n.blendEquation=this.blendEquation;if(this.blendSrcAlpha!==null)n.blendSrcAlpha=this.blendSrcAlpha;if(this.blendDstAlpha!==null)n.blendDstAlpha=this.blendDstAlpha;if(this.blendEquationAlpha!==null)n.blendEquationAlpha=this.blendEquationAlpha;if(this.blendColor&&this.blendColor.isColor)n.blendColor=this.blendColor.getHex();if(this.blendAlpha!==0)n.blendAlpha=this.blendAlpha;if(this.depthFunc!==3)n.depthFunc=this.depthFunc;if(this.depthTest===!1)n.depthTest=this.depthTest;if(this.depthWrite===!1)n.depthWrite=this.depthWrite;if(this.colorWrite===!1)n.colorWrite=this.colorWrite;if(this.stencilWriteMask!==255)n.stencilWriteMask=this.stencilWriteMask;if(this.stencilFunc!==519)n.stencilFunc=this.stencilFunc;if(this.stencilRef!==0)n.stencilRef=this.stencilRef;if(this.stencilFuncMask!==255)n.stencilFuncMask=this.stencilFuncMask;if(this.stencilFail!==7680)n.stencilFail=this.stencilFail;if(this.stencilZFail!==7680)n.stencilZFail=this.stencilZFail;if(this.stencilZPass!==7680)n.stencilZPass=this.stencilZPass;if(this.stencilWrite===!0)n.stencilWrite=this.stencilWrite;if(this.rotation!==void 0&&this.rotation!==0)n.rotation=this.rotation;if(this.polygonOffset===!0)n.polygonOffset=!0;if(this.polygonOffsetFactor!==0)n.polygonOffsetFactor=this.polygonOffsetFactor;if(this.polygonOffsetUnits!==0)n.polygonOffsetUnits=this.polygonOffsetUnits;if(this.linewidth!==void 0&&this.linewidth!==1)n.linewidth=this.linewidth;if(this.dashSize!==void 0)n.dashSize=this.dashSize;if(this.gapSize!==void 0)n.gapSize=this.gapSize;if(this.scale!==void 0)n.scale=this.scale;if(this.dithering===!0)n.dithering=!0;if(this.alphaTest>0)n.alphaTest=this.alphaTest;if(this.alphaHash===!0)n.alphaHash=!0;if(this.alphaToCoverage===!0)n.alphaToCoverage=!0;if(this.premultipliedAlpha===!0)n.premultipliedAlpha=!0;if(this.forceSinglePass===!0)n.forceSinglePass=!0;if(this.allowOverride===!1)n.allowOverride=!1;if(this.wireframe===!0)n.wireframe=!0;if(this.wireframeLinewidth>1)n.wireframeLinewidth=this.wireframeLinewidth;if(this.wireframeLinecap!=="round")n.wireframeLinecap=this.wireframeLinecap;if(this.wireframeLinejoin!=="round")n.wireframeLinejoin=this.wireframeLinejoin;if(this.flatShading===!0)n.flatShading=!0;if(this.visible===!1)n.visible=!1;if(this.toneMapped===!1)n.toneMapped=!1;if(this.fog===!1)n.fog=!1;if(Object.keys(this.userData).length>0)n.userData=this.userData;function i(s){let r=[];for(let a in s){let o=s[a];delete o.metadata,r.push(o)}return r}if(e){let s=i(t.textures),r=i(t.images);if(s.length>0)n.textures=s;if(r.length>0)n.images=r}return n}fromJSON(t,e){if(t.uuid!==void 0)this.uuid=t.uuid;if(t.name!==void 0)this.name=t.name;if(t.color!==void 0&&this.color!==void 0)this.color.setHex(t.color);if(t.roughness!==void 0)this.roughness=t.roughness;if(t.metalness!==void 0)this.metalness=t.metalness;if(t.sheen!==void 0)this.sheen=t.sheen;if(t.sheenColor!==void 0)this.sheenColor=new Zt().setHex(t.sheenColor);if(t.sheenRoughness!==void 0)this.sheenRoughness=t.sheenRoughness;if(t.emissive!==void 0&&this.emissive!==void 0)this.emissive.setHex(t.emissive);if(t.specular!==void 0&&this.specular!==void 0)this.specular.setHex(t.specular);if(t.specularIntensity!==void 0)this.specularIntensity=t.specularIntensity;if(t.specularColor!==void 0&&this.specularColor!==void 0)this.specularColor.setHex(t.specularColor);if(t.shininess!==void 0)this.shininess=t.shininess;if(t.clearcoat!==void 0)this.clearcoat=t.clearcoat;if(t.clearcoatRoughness!==void 0)this.clearcoatRoughness=t.clearcoatRoughness;if(t.dispersion!==void 0)this.dispersion=t.dispersion;if(t.iridescence!==void 0)this.iridescence=t.iridescence;if(t.iridescenceIOR!==void 0)this.iridescenceIOR=t.iridescenceIOR;if(t.iridescenceThicknessRange!==void 0)this.iridescenceThicknessRange=t.iridescenceThicknessRange;if(t.transmission!==void 0)this.transmission=t.transmission;if(t.thickness!==void 0)this.thickness=t.thickness;if(t.attenuationDistance!==void 0)this.attenuationDistance=t.attenuationDistance;if(t.attenuationColor!==void 0&&this.attenuationColor!==void 0)this.attenuationColor.setHex(t.attenuationColor);if(t.anisotropy!==void 0)this.anisotropy=t.anisotropy;if(t.anisotropyRotation!==void 0)this.anisotropyRotation=t.anisotropyRotation;if(t.fog!==void 0)this.fog=t.fog;if(t.flatShading!==void 0)this.flatShading=t.flatShading;if(t.blending!==void 0)this.blending=t.blending;if(t.combine!==void 0)this.combine=t.combine;if(t.side!==void 0)this.side=t.side;if(t.shadowSide!==void 0)this.shadowSide=t.shadowSide;if(t.opacity!==void 0)this.opacity=t.opacity;if(t.transparent!==void 0)this.transparent=t.transparent;if(t.alphaTest!==void 0)this.alphaTest=t.alphaTest;if(t.alphaHash!==void 0)this.alphaHash=t.alphaHash;if(t.depthFunc!==void 0)this.depthFunc=t.depthFunc;if(t.depthTest!==void 0)this.depthTest=t.depthTest;if(t.depthWrite!==void 0)this.depthWrite=t.depthWrite;if(t.colorWrite!==void 0)this.colorWrite=t.colorWrite;if(t.blendSrc!==void 0)this.blendSrc=t.blendSrc;if(t.blendDst!==void 0)this.blendDst=t.blendDst;if(t.blendEquation!==void 0)this.blendEquation=t.blendEquation;if(t.blendSrcAlpha!==void 0)this.blendSrcAlpha=t.blendSrcAlpha;if(t.blendDstAlpha!==void 0)this.blendDstAlpha=t.blendDstAlpha;if(t.blendEquationAlpha!==void 0)this.blendEquationAlpha=t.blendEquationAlpha;if(t.blendColor!==void 0&&this.blendColor!==void 0)this.blendColor.setHex(t.blendColor);if(t.blendAlpha!==void 0)this.blendAlpha=t.blendAlpha;if(t.stencilWriteMask!==void 0)this.stencilWriteMask=t.stencilWriteMask;if(t.stencilFunc!==void 0)this.stencilFunc=t.stencilFunc;if(t.stencilRef!==void 0)this.stencilRef=t.stencilRef;if(t.stencilFuncMask!==void 0)this.stencilFuncMask=t.stencilFuncMask;if(t.stencilFail!==void 0)this.stencilFail=t.stencilFail;if(t.stencilZFail!==void 0)this.stencilZFail=t.stencilZFail;if(t.stencilZPass!==void 0)this.stencilZPass=t.stencilZPass;if(t.stencilWrite!==void 0)this.stencilWrite=t.stencilWrite;if(t.wireframe!==void 0)this.wireframe=t.wireframe;if(t.wireframeLinewidth!==void 0)this.wireframeLinewidth=t.wireframeLinewidth;if(t.wireframeLinecap!==void 0)this.wireframeLinecap=t.wireframeLinecap;if(t.wireframeLinejoin!==void 0)this.wireframeLinejoin=t.wireframeLinejoin;if(t.rotation!==void 0)this.rotation=t.rotation;if(t.linewidth!==void 0)this.linewidth=t.linewidth;if(t.dashSize!==void 0)this.dashSize=t.dashSize;if(t.gapSize!==void 0)this.gapSize=t.gapSize;if(t.scale!==void 0)this.scale=t.scale;if(t.polygonOffset!==void 0)this.polygonOffset=t.polygonOffset;if(t.polygonOffsetFactor!==void 0)this.polygonOffsetFactor=t.polygonOffsetFactor;if(t.polygonOffsetUnits!==void 0)this.polygonOffsetUnits=t.polygonOffsetUnits;if(t.dithering!==void 0)this.dithering=t.dithering;if(t.alphaToCoverage!==void 0)this.alphaToCoverage=t.alphaToCoverage;if(t.premultipliedAlpha!==void 0)this.premultipliedAlpha=t.premultipliedAlpha;if(t.forceSinglePass!==void 0)this.forceSinglePass=t.forceSinglePass;if(t.allowOverride!==void 0)this.allowOverride=t.allowOverride;if(t.visible!==void 0)this.visible=t.visible;if(t.toneMapped!==void 0)this.toneMapped=t.toneMapped;if(t.userData!==void 0)this.userData=t.userData;if(t.vertexColors!==void 0)if(typeof t.vertexColors==="number")this.vertexColors=t.vertexColors>0;else this.vertexColors=t.vertexColors;if(t.size!==void 0)this.size=t.size;if(t.sizeAttenuation!==void 0)this.sizeAttenuation=t.sizeAttenuation;if(t.map!==void 0)this.map=e[t.map]||null;if(t.matcap!==void 0)this.matcap=e[t.matcap]||null;if(t.alphaMap!==void 0)this.alphaMap=e[t.alphaMap]||null;if(t.bumpMap!==void 0)this.bumpMap=e[t.bumpMap]||null;if(t.bumpScale!==void 0)this.bumpScale=t.bumpScale;if(t.normalMap!==void 0)this.normalMap=e[t.normalMap]||null;if(t.normalMapType!==void 0)this.normalMapType=t.normalMapType;if(t.normalScale!==void 0){let n=t.normalScale;if(Array.isArray(n)===!1)n=[n,n];this.normalScale=new K().fromArray(n)}if(t.displacementMap!==void 0)this.displacementMap=e[t.displacementMap]||null;if(t.displacementScale!==void 0)this.displacementScale=t.displacementScale;if(t.displacementBias!==void 0)this.displacementBias=t.displacementBias;if(t.roughnessMap!==void 0)this.roughnessMap=e[t.roughnessMap]||null;if(t.metalnessMap!==void 0)this.metalnessMap=e[t.metalnessMap]||null;if(t.emissiveMap!==void 0)this.emissiveMap=e[t.emissiveMap]||null;if(t.emissiveIntensity!==void 0)this.emissiveIntensity=t.emissiveIntensity;if(t.specularMap!==void 0)this.specularMap=e[t.specularMap]||null;if(t.specularIntensityMap!==void 0)this.specularIntensityMap=e[t.specularIntensityMap]||null;if(t.specularColorMap!==void 0)this.specularColorMap=e[t.specularColorMap]||null;if(t.envMap!==void 0)this.envMap=e[t.envMap]||null;if(t.envMapRotation!==void 0)this.envMapRotation.fromArray(t.envMapRotation);if(t.envMapIntensity!==void 0)this.envMapIntensity=t.envMapIntensity;if(t.reflectivity!==void 0)this.reflectivity=t.reflectivity;if(t.refractionRatio!==void 0)this.refractionRatio=t.refractionRatio;if(t.lightMap!==void 0)this.lightMap=e[t.lightMap]||null;if(t.lightMapIntensity!==void 0)this.lightMapIntensity=t.lightMapIntensity;if(t.aoMap!==void 0)this.aoMap=e[t.aoMap]||null;if(t.aoMapIntensity!==void 0)this.aoMapIntensity=t.aoMapIntensity;if(t.gradientMap!==void 0)this.gradientMap=e[t.gradientMap]||null;if(t.clearcoatMap!==void 0)this.clearcoatMap=e[t.clearcoatMap]||null;if(t.clearcoatRoughnessMap!==void 0)this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null;if(t.clearcoatNormalMap!==void 0)this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null;if(t.clearcoatNormalScale!==void 0)this.clearcoatNormalScale=new K().fromArray(t.clearcoatNormalScale);if(t.iridescenceMap!==void 0)this.iridescenceMap=e[t.iridescenceMap]||null;if(t.iridescenceThicknessMap!==void 0)this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null;if(t.transmissionMap!==void 0)this.transmissionMap=e[t.transmissionMap]||null;if(t.thicknessMap!==void 0)this.thicknessMap=e[t.thicknessMap]||null;if(t.anisotropyMap!==void 0)this.anisotropyMap=e[t.anisotropyMap]||null;if(t.sheenColorMap!==void 0)this.sheenColorMap=e[t.sheenColorMap]||null;if(t.sheenRoughnessMap!==void 0)this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null;return this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let i=e.length;n=Array(i);for(let s=0;s!==i;++s)n[s]=e[s].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){if(t===!0)this.version++}}class Rs extends $n{constructor(t){super();this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Zt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}var hs,Xs=new P,us=new P,ds=new P,fs=new K,qs=new K,od=new re,Vr=new P,Ys=new P,Wr=new P,Oh=new K,Oo=new K,Bh=new K;class _r extends ve{constructor(t=new Rs){super();if(this.isSprite=!0,this.type="Sprite",hs===void 0){hs=new Se;let e=new Float32Array([-0.5,-0.5,0,0,0,0.5,-0.5,0,1,0,0.5,0.5,0,1,1,-0.5,0.5,0,0,1]),n=new Da(e,5);hs.setIndex([0,1,2,0,2,3]),hs.setAttribute("position",new Ms(n,3,0,!1)),hs.setAttribute("uv",new Ms(n,2,3,!1))}this.geometry=hs,this.material=t,this.center=new K(0.5,0.5),this.count=1}raycast(t,e){if(t.camera===null)Bt('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.');if(us.setFromMatrixScale(this.matrixWorld),od.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),ds.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1)us.multiplyScalar(-ds.z);let n=this.material.rotation,i,s;if(n!==0)s=Math.cos(n),i=Math.sin(n);let r=this.center;Xr(Vr.set(-0.5,-0.5,0),ds,r,us,i,s),Xr(Ys.set(0.5,-0.5,0),ds,r,us,i,s),Xr(Wr.set(0.5,0.5,0),ds,r,us,i,s),Oh.set(0,0),Oo.set(1,0),Bh.set(1,1);let a=t.ray.intersectTriangle(Vr,Ys,Wr,!1,Xs);if(a===null){if(Xr(Ys.set(-0.5,0.5,0),ds,r,us,i,s),Oo.set(0,1),a=t.ray.intersectTriangle(Vr,Wr,Ys,!1,Xs),a===null)return}let o=t.ray.origin.distanceTo(Xs);if(o<t.near||o>t.far)return;e.push({distance:o,point:Xs.clone(),uv:$e.getInterpolation(Xs,Vr,Ys,Wr,Oh,Oo,Bh,new K),face:null,object:this})}copy(t,e){if(super.copy(t,e),t.center!==void 0)this.center.copy(t.center);return this.material=t.material,this}}function Xr(t,e,n,i,s,r){if(fs.subVectors(t,n).addScalar(0.5).multiply(i),s!==void 0)qs.x=r*fs.x-s*fs.y,qs.y=s*fs.x+r*fs.y;else qs.copy(fs);t.copy(e),t.x+=qs.x,t.y+=qs.y,t.applyMatrix4(od)}var Vn=new P,Bo=new P,qr=new P,ai=new P,zo=new P,Yr=new P,ko=new P;class Ni{constructor(t=new P,e=new P(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Vn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);if(n<0)return e.copy(this.origin);return e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=Vn.subVectors(t,this.origin).dot(this.direction);if(e<0)return this.origin.distanceToSquared(t);return Vn.copy(this.origin).addScaledVector(this.direction,e),Vn.distanceToSquared(t)}distanceSqToSegment(t,e,n,i){Bo.copy(t).add(e).multiplyScalar(0.5),qr.copy(e).sub(t).normalize(),ai.copy(this.origin).sub(Bo);let s=t.distanceTo(e)*0.5,r=-this.direction.dot(qr),a=ai.dot(this.direction),o=-ai.dot(qr),l=ai.lengthSq(),c=Math.abs(1-r*r),h,d,u,f;if(c>0)if(h=r*o-a,d=r*a-o,f=s*c,h>=0)if(d>=-f)if(d<=f){let g=1/c;h*=g,d*=g,u=h*(h+r*d+2*a)+d*(r*h+d+2*o)+l}else d=s,h=Math.max(0,-(r*d+a)),u=-h*h+d*(d+2*o)+l;else d=-s,h=Math.max(0,-(r*d+a)),u=-h*h+d*(d+2*o)+l;else if(d<=-f)h=Math.max(0,-(-r*s+a)),d=h>0?-s:Math.min(Math.max(-s,-o),s),u=-h*h+d*(d+2*o)+l;else if(d<=f)h=0,d=Math.min(Math.max(-s,-o),s),u=d*(d+2*o)+l;else h=Math.max(0,-(r*s+a)),d=h>0?s:Math.min(Math.max(-s,-o),s),u=-h*h+d*(d+2*o)+l;else d=r>0?-s:s,h=Math.max(0,-(r*d+a)),u=-h*h+d*(d+2*o)+l;if(n)n.copy(this.origin).addScaledVector(this.direction,h);if(i)i.copy(Bo).addScaledVector(qr,d);return u}intersectSphere(t,e){Vn.subVectors(t.center,this.origin);let n=Vn.dot(this.direction),i=Vn.dot(Vn)-n*n,s=t.radius*t.radius;if(i>s)return null;let r=Math.sqrt(s-i),a=n-r,o=n+r;if(o<0)return null;if(a<0)return this.at(o,e);return this.at(a,e)}intersectsSphere(t){if(t.radius<0)return!1;return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0){if(t.distanceToPoint(this.origin)===0)return 0;return null}let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);if(n===null)return null;return this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);if(e===0)return!0;if(t.normal.dot(this.direction)*e<0)return!0;return!1}intersectBox(t,e){let n,i,s,r,a,o,l=1/this.direction.x,c=1/this.direction.y,h=1/this.direction.z,d=this.origin;if(l>=0)n=(t.min.x-d.x)*l,i=(t.max.x-d.x)*l;else n=(t.max.x-d.x)*l,i=(t.min.x-d.x)*l;if(c>=0)s=(t.min.y-d.y)*c,r=(t.max.y-d.y)*c;else s=(t.max.y-d.y)*c,r=(t.min.y-d.y)*c;if(n>r||s>i)return null;if(s>n||isNaN(n))n=s;if(r<i||isNaN(i))i=r;if(h>=0)a=(t.min.z-d.z)*h,o=(t.max.z-d.z)*h;else a=(t.max.z-d.z)*h,o=(t.min.z-d.z)*h;if(n>o||a>i)return null;if(a>n||n!==n)n=a;if(o<i||i!==i)i=o;if(i<0)return null;return this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,Vn)!==null}intersectTriangle(t,e,n,i,s){zo.subVectors(e,t),Yr.subVectors(n,t),ko.crossVectors(zo,Yr);let r=this.direction.dot(ko),a;if(r>0){if(i)return null;a=1}else if(r<0)a=-1,r=-r;else return null;ai.subVectors(this.origin,t);let o=a*this.direction.dot(Yr.crossVectors(ai,Yr));if(o<0)return null;let l=a*this.direction.dot(zo.cross(ai));if(l<0)return null;if(o+l>r)return null;let c=-a*ai.dot(ko);if(c<0)return null;return this.at(c/r,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class je extends $n{constructor(t){super();this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Zt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Xn,this.combine=0,this.reflectivity=1,this.refractionRatio=0.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}var zh=new re,Si=new Ni,Zr=new hi,kh=new P,$r=new P,Jr=new P,Kr=new P,Go=new P,jr=new P,Gh=new P,Qr=new P;class oe extends ve{constructor(t=new Se,e=new je){super();this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){if(super.copy(t,e),t.morphTargetInfluences!==void 0)this.morphTargetInfluences=t.morphTargetInfluences.slice();if(t.morphTargetDictionary!==void 0)this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary);return this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,r=i.length;s<r;s++){let a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(t,e){let n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,r=n.morphTargetsRelative;e.fromBufferAttribute(i,t);let a=this.morphTargetInfluences;if(s&&a){jr.set(0,0,0);for(let o=0,l=s.length;o<l;o++){let c=a[o],h=s[o];if(c===0)continue;if(Go.fromBufferAttribute(h,t),r)jr.addScaledVector(Go,c);else jr.addScaledVector(Go.sub(e),c)}e.add(jr)}return e}raycast(t,e){let n=this.geometry,i=this.material,s=this.matrixWorld;if(i===void 0)return;if(n.boundingSphere===null)n.computeBoundingSphere();if(Zr.copy(n.boundingSphere),Zr.applyMatrix4(s),Si.copy(t.ray).recast(t.near),Zr.containsPoint(Si.origin)===!1){if(Si.intersectSphere(Zr,kh)===null)return;if(Si.origin.distanceToSquared(kh)>(t.far-t.near)**2)return}if(zh.copy(s).invert(),Si.copy(t.ray).applyMatrix4(zh),n.boundingBox!==null){if(Si.intersectsBox(n.boundingBox)===!1)return}this._computeIntersections(t,e,Si)}_computeIntersections(t,e,n){let i,s=this.geometry,r=this.material,a=s.index,o=s.attributes.position,l=s.attributes.uv,c=s.attributes.uv1,h=s.attributes.normal,{groups:d,drawRange:u}=s;if(a!==null)if(Array.isArray(r))for(let f=0,g=d.length;f<g;f++){let v=d[f],m=r[v.materialIndex],p=Math.max(v.start,u.start),R=Math.min(a.count,Math.min(v.start+v.count,u.start+u.count));for(let E=p,x=R;E<x;E+=3){let T=a.getX(E),w=a.getX(E+1),A=a.getX(E+2);if(i=ta(this,m,t,n,l,c,h,T,w,A),i)i.faceIndex=Math.floor(E/3),i.face.materialIndex=v.materialIndex,e.push(i)}}else{let f=Math.max(0,u.start),g=Math.min(a.count,u.start+u.count);for(let v=f,m=g;v<m;v+=3){let p=a.getX(v),R=a.getX(v+1),E=a.getX(v+2);if(i=ta(this,r,t,n,l,c,h,p,R,E),i)i.faceIndex=Math.floor(v/3),e.push(i)}}else if(o!==void 0)if(Array.isArray(r))for(let f=0,g=d.length;f<g;f++){let v=d[f],m=r[v.materialIndex],p=Math.max(v.start,u.start),R=Math.min(o.count,Math.min(v.start+v.count,u.start+u.count));for(let E=p,x=R;E<x;E+=3){let T=E,w=E+1,A=E+2;if(i=ta(this,m,t,n,l,c,h,T,w,A),i)i.faceIndex=Math.floor(E/3),i.face.materialIndex=v.materialIndex,e.push(i)}}else{let f=Math.max(0,u.start),g=Math.min(o.count,u.start+u.count);for(let v=f,m=g;v<m;v+=3){let p=v,R=v+1,E=v+2;if(i=ta(this,r,t,n,l,c,h,p,R,E),i)i.faceIndex=Math.floor(v/3),e.push(i)}}}}function pp(t,e,n,i,s,r,a,o){let l;if(e.side===1)l=i.intersectTriangle(a,r,s,!0,o);else l=i.intersectTriangle(s,r,a,e.side===0,o);if(l===null)return null;Qr.copy(o),Qr.applyMatrix4(t.matrixWorld);let c=n.ray.origin.distanceTo(Qr);if(c<n.near||c>n.far)return null;return{distance:c,point:Qr.clone(),object:t}}function ta(t,e,n,i,s,r,a,o,l,c){t.getVertexPosition(o,$r),t.getVertexPosition(l,Jr),t.getVertexPosition(c,Kr);let h=pp(t,e,n,i,$r,Jr,Kr,Gh);if(h){let d=new P;if($e.getBarycoord(Gh,$r,Jr,Kr,d),s)h.uv=$e.getInterpolatedAttribute(s,o,l,c,d,new K);if(r)h.uv1=$e.getInterpolatedAttribute(r,o,l,c,d,new K);if(a){if(h.normal=$e.getInterpolatedAttribute(a,o,l,c,d,new P),h.normal.dot(i.direction)>0)h.normal.multiplyScalar(-1)}let u={a:o,b:l,c,normal:new P,materialIndex:0};$e.getNormal($r,Jr,Kr,u.normal),h.face=u,h.barycoord=d}return h}class Na extends Oe{constructor(t=null,e=1,n=1,i,s,r,a,o,l=1003,c=1003,h,d){super(null,r,a,o,l,c,i,s,h,d);this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ir extends He{constructor(t,e,n,i=1){super(t,e,n);this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}var ps=new re,Hh=new re,ea=[],Vh=new Zn,mp=new re,Zs=new oe,$s=new hi;class Ui extends oe{constructor(t,e,n){super(t,e);this.isInstancedMesh=!0,this.instanceMatrix=new ir(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,mp)}computeBoundingBox(){let t=this.geometry,e=this.count;if(this.boundingBox===null)this.boundingBox=new Zn;if(t.boundingBox===null)t.computeBoundingBox();this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,ps),Vh.copy(t.boundingBox).applyMatrix4(ps),this.boundingBox.union(Vh)}computeBoundingSphere(){let t=this.geometry,e=this.count;if(this.boundingSphere===null)this.boundingSphere=new hi;if(t.boundingSphere===null)t.computeBoundingSphere();this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,ps),$s.copy(t.boundingSphere).applyMatrix4(ps),this.boundingSphere.union($s)}copy(t,e){if(super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null)this.morphTexture=t.morphTexture.clone();if(t.instanceColor!==null)this.instanceColor=t.instanceColor.clone();if(this.count=t.count,t.boundingBox!==null)this.boundingBox=t.boundingBox.clone();if(t.boundingSphere!==null)this.boundingSphere=t.boundingSphere.clone();return this}getColorAt(t,e){if(this.instanceColor===null)return e.setRGB(1,1,1);else return e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){return e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let n=e.morphTargetInfluences,i=this.morphTexture.source.data.data,s=n.length+1,r=t*s+1;for(let a=0;a<n.length;a++)n[a]=i[r+a]}raycast(t,e){let n=this.matrixWorld,i=this.count;if(Zs.geometry=this.geometry,Zs.material=this.material,Zs.material===void 0)return;if(this.boundingSphere===null)this.computeBoundingSphere();if($s.copy(this.boundingSphere),$s.applyMatrix4(n),t.ray.intersectsSphere($s)===!1)return;for(let s=0;s<i;s++){this.getMatrixAt(s,ps),Hh.multiplyMatrices(n,ps),Zs.matrixWorld=Hh,Zs.raycast(t,ea);for(let r=0,a=ea.length;r<a;r++){let o=ea[r];o.instanceId=s,o.object=this,e.push(o)}ea.length=0}}setColorAt(t,e){if(this.instanceColor===null)this.instanceColor=new ir(new Float32Array(this.instanceMatrix.count*3).fill(1),3);return e.toArray(this.instanceColor.array,t*3),this}setMatrixAt(t,e){return e.toArray(this.instanceMatrix.array,t*16),this}setMorphAt(t,e){let n=e.morphTargetInfluences,i=n.length+1;if(this.morphTexture===null)this.morphTexture=new Na(new Float32Array(i*this.count),i,this.count,1028,1015);let s=this.morphTexture.source.data.data,r=0;for(let l=0;l<n.length;l++)r+=n[l];let a=this.geometry.morphTargetsRelative?1:1-r,o=i*t;return s[o]=a,s.set(n,o+1),this}updateMorphTargets(){}dispose(){if(this.dispatchEvent({type:"dispose"}),this.morphTexture!==null)this.morphTexture.dispose(),this.morphTexture=null}}var Ho=new P,gp=new P,_p=new Vt;class Ye{constructor(t=new P(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let i=Ho.subVectors(n,e).cross(gp.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,n=!0){let i=t.delta(Ho),s=this.normal.dot(i);if(s===0){if(this.distanceToPoint(t.start)===0)return e.copy(t.start);return null}let r=-(t.start.dot(this.normal)+this.constant)/s;if(n===!0&&(r<0||r>1))return null;return e.copy(t.start).addScaledVector(i,r)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||_p.getNormalMatrix(t),i=this.coplanarPoint(Ho).applyMatrix4(t),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}var bi=new hi,xp=new K(0.5,0.5),na=new P;class xr{constructor(t=new Ye,e=new Ye,n=new Ye,i=new Ye,s=new Ye,r=new Ye){this.planes=[t,e,n,i,s,r]}set(t,e,n,i,s,r){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(i),a[4].copy(s),a[5].copy(r),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=2000,n=!1){let i=this.planes,s=t.elements,r=s[0],a=s[1],o=s[2],l=s[3],c=s[4],h=s[5],d=s[6],u=s[7],f=s[8],g=s[9],v=s[10],m=s[11],p=s[12],R=s[13],E=s[14],x=s[15];if(i[0].setComponents(l-r,u-c,m-f,x-p).normalize(),i[1].setComponents(l+r,u+c,m+f,x+p).normalize(),i[2].setComponents(l+a,u+h,m+g,x+R).normalize(),i[3].setComponents(l-a,u-h,m-g,x-R).normalize(),n)i[4].setComponents(o,d,v,E).normalize(),i[5].setComponents(l-o,u-d,m-v,x-E).normalize();else if(i[4].setComponents(l-o,u-d,m-v,x-E).normalize(),e===2000)i[5].setComponents(l+o,u+d,m+v,x+E).normalize();else if(e===2001)i[5].setComponents(o,d,v,E).normalize();else throw Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0){if(t.boundingSphere===null)t.computeBoundingSphere();bi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld)}else{let e=t.geometry;if(e.boundingSphere===null)e.computeBoundingSphere();bi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(bi)}intersectsSprite(t){bi.center.set(0,0,0);let e=xp.distanceTo(t.center);return bi.radius=0.7071067811865476+e,bi.applyMatrix4(t.matrixWorld),this.intersectsSphere(bi)}intersectsSphere(t){let e=this.planes,n=t.center,i=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let i=e[n];if(na.x=i.normal.x>0?t.max.x:t.min.x,na.y=i.normal.y>0?t.max.y:t.min.y,na.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(na)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class yr extends $n{constructor(t){super();this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Zt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}var fa=new P,pa=new P,Wh=new re,Js=new Ni,ia=new hi,Vo=new P,Xh=new P;class nc extends ve{constructor(t=new Se,e=new yr){super();this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[0];for(let i=1,s=e.count;i<s;i++)fa.fromBufferAttribute(e,i-1),pa.fromBufferAttribute(e,i),n[i]=n[i-1],n[i]+=fa.distanceTo(pa);t.setAttribute("lineDistance",new te(n,1))}else Ut("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){let n=this.geometry,i=this.matrixWorld,s=t.params.Line.threshold,r=n.drawRange;if(n.boundingSphere===null)n.computeBoundingSphere();if(ia.copy(n.boundingSphere),ia.applyMatrix4(i),ia.radius+=s,t.ray.intersectsSphere(ia)===!1)return;Wh.copy(i).invert(),Js.copy(t.ray).applyMatrix4(Wh);let a=s/((this.scale.x+this.scale.y+this.scale.z)/3),o=a*a,l=this.isLineSegments?2:1,c=n.index,d=n.attributes.position;if(c!==null){let u=Math.max(0,r.start),f=Math.min(c.count,r.start+r.count);for(let g=u,v=f-1;g<v;g+=l){let m=c.getX(g),p=c.getX(g+1),R=sa(this,t,Js,o,m,p,g);if(R)e.push(R)}if(this.isLineLoop){let g=c.getX(f-1),v=c.getX(u),m=sa(this,t,Js,o,g,v,f-1);if(m)e.push(m)}}else{let u=Math.max(0,r.start),f=Math.min(d.count,r.start+r.count);for(let g=u,v=f-1;g<v;g+=l){let m=sa(this,t,Js,o,g,g+1,g);if(m)e.push(m)}if(this.isLineLoop){let g=sa(this,t,Js,o,f-1,u,f-1);if(g)e.push(g)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,r=i.length;s<r;s++){let a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function sa(t,e,n,i,s,r,a){let o=t.geometry.attributes.position;if(fa.fromBufferAttribute(o,s),pa.fromBufferAttribute(o,r),n.distanceSqToSegment(fa,pa,Vo,Xh)>i)return;Vo.applyMatrix4(t.matrixWorld);let c=e.ray.origin.distanceTo(Vo);if(c<e.near||c>e.far)return;return{distance:c,point:Xh.clone().applyMatrix4(t.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:t}}var qh=new P,Yh=new P;class Ua extends nc{constructor(t,e){super(t,e);this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[];for(let i=0,s=e.count;i<s;i+=2)qh.fromBufferAttribute(e,i),Yh.fromBufferAttribute(e,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+qh.distanceTo(Yh);t.setAttribute("lineDistance",new te(n,1))}else Ut("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Fa extends Oe{constructor(t=[],e=301,n,i,s,r,a,o,l,c){super(t,e,n,i,s,r,a,o,l,c);this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Fi extends Oe{constructor(t,e,n,i,s,r,a,o,l){super(t,e,n,i,s,r,a,o,l);this.isCanvasTexture=!0,this.needsUpdate=!0}}class ui extends Oe{constructor(t,e,n=1014,i,s,r,a=1003,o=1003,l,c=1026,h=1){if(c!==1026&&c!==1027)throw Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let d={width:t,height:e,depth:h};super(d,i,s,r,a,o,c,n,l);this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new fr(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);if(this.compareFunction!==null)e.compareFunction=this.compareFunction;return e}}class ic extends ui{constructor(t,e=1014,n=301,i,s,r=1003,a=1003,o,l=1026){let c={width:t,height:t,depth:1},h=[c,c,c,c,c,c];super(t,t,e,n,i,s,r,a,o,l);this.image=h,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}}class Oa extends Oe{constructor(t=null){super();this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class Sn extends Se{constructor(t=1,e=1,n=1,i=1,s=1,r=1){super();this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:s,depthSegments:r};let a=this;i=Math.floor(i),s=Math.floor(s),r=Math.floor(r);let o=[],l=[],c=[],h=[],d=0,u=0;f("z","y","x",-1,-1,n,e,t,r,s,0),f("z","y","x",1,-1,n,e,-t,r,s,1),f("x","z","y",1,1,t,n,e,i,r,2),f("x","z","y",1,-1,t,n,-e,i,r,3),f("x","y","z",1,-1,t,e,n,i,s,4),f("x","y","z",-1,-1,t,e,-n,i,s,5),this.setIndex(o),this.setAttribute("position",new te(l,3)),this.setAttribute("normal",new te(c,3)),this.setAttribute("uv",new te(h,2));function f(g,v,m,p,R,E,x,T,w,A,_){let M=E/w,U=x/A,C=E/2,k=x/2,q=T/2,F=w+1,V=A+1,W=0,O=0,j=new P;for(let rt=0;rt<V;rt++){let lt=rt*U-k;for(let Rt=0;Rt<F;Rt++){let St=Rt*M-C;j[g]=St*p,j[v]=lt*R,j[m]=q,l.push(j.x,j.y,j.z),j[g]=0,j[v]=0,j[m]=T>0?1:-1,c.push(j.x,j.y,j.z),h.push(Rt/w),h.push(1-rt/A),W+=1}}for(let rt=0;rt<A;rt++)for(let lt=0;lt<w;lt++){let Rt=d+lt+F*rt,St=d+lt+F*(rt+1),he=d+(lt+1)+F*(rt+1),ae=d+(lt+1)+F*rt;o.push(Rt,St,ae),o.push(St,he,ae),O+=6}a.addGroup(u,O,_),u+=O,d+=W}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Sn(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}class Oi extends Se{constructor(t=1,e=32,n=0,i=Math.PI*2){super();this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:i},e=Math.max(3,e);let s=[],r=[],a=[],o=[],l=new P,c=new K;r.push(0,0,0),a.push(0,0,1),o.push(0.5,0.5);for(let h=0,d=3;h<=e;h++,d+=3){let u=n+h/e*i;l.x=t*Math.cos(u),l.y=t*Math.sin(u),r.push(l.x,l.y,l.z),a.push(0,0,1),c.x=(r[d]/t+1)/2,c.y=(r[d+1]/t+1)/2,o.push(c.x,c.y)}for(let h=1;h<=e;h++)s.push(h,h+1,0);this.setIndex(s),this.setAttribute("position",new te(r,3)),this.setAttribute("normal",new te(a,3)),this.setAttribute("uv",new te(o,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Oi(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class Jn extends Se{constructor(t=1,e=1,n=1,i=32,s=1,r=!1,a=0,o=Math.PI*2){super();this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:i,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o};let l=this;i=Math.floor(i),s=Math.floor(s);let c=[],h=[],d=[],u=[],f=0,g=[],v=n/2,m=0;if(p(),r===!1){if(t>0)R(!0);if(e>0)R(!1)}this.setIndex(c),this.setAttribute("position",new te(h,3)),this.setAttribute("normal",new te(d,3)),this.setAttribute("uv",new te(u,2));function p(){let E=new P,x=new P,T=0,w=(e-t)/n;for(let A=0;A<=s;A++){let _=[],M=A/s,U=M*(e-t)+t;for(let C=0;C<=i;C++){let k=C/i,q=k*o+a,F=Math.sin(q),V=Math.cos(q);x.x=U*F,x.y=-M*n+v,x.z=U*V,h.push(x.x,x.y,x.z),E.set(F,w,V).normalize(),d.push(E.x,E.y,E.z),u.push(k,1-M),_.push(f++)}g.push(_)}for(let A=0;A<i;A++)for(let _=0;_<s;_++){let M=g[_][A],U=g[_+1][A],C=g[_+1][A+1],k=g[_][A+1];if(t>0||_!==0)c.push(M,U,k),T+=3;if(e>0||_!==s-1)c.push(U,C,k),T+=3}l.addGroup(m,T,0),m+=T}function R(E){let x=f,T=new K,w=new P,A=0,_=E===!0?t:e,M=E===!0?1:-1;for(let C=1;C<=i;C++)h.push(0,v*M,0),d.push(0,M,0),u.push(0.5,0.5),f++;let U=f;for(let C=0;C<=i;C++){let q=C/i*o+a,F=Math.cos(q),V=Math.sin(q);w.x=_*V,w.y=v*M,w.z=_*F,h.push(w.x,w.y,w.z),d.push(0,M,0),T.x=F*0.5+0.5,T.y=V*0.5*M+0.5,u.push(T.x,T.y),f++}for(let C=0;C<i;C++){let k=x+C,q=U+C;if(E===!0)c.push(q,q+1,k);else c.push(q+1,q,k);A+=3}l.addGroup(m,A,E===!0?1:2),m+=A}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Jn(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class vr extends Jn{constructor(t=1,e=1,n=32,i=1,s=!1,r=0,a=Math.PI*2){super(0,t,e,n,i,s,r,a);this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:i,openEnded:s,thetaStart:r,thetaLength:a}}static fromJSON(t){return new vr(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Ba extends Se{constructor(t=[],e=[],n=1,i=0){super();this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:i};let s=[],r=[];if(a(i),l(n),c(),this.setAttribute("position",new te(s,3)),this.setAttribute("normal",new te(s.slice(),3)),this.setAttribute("uv",new te(r,2)),i===0)this.computeVertexNormals();else this.normalizeNormals();function a(p){let R=new P,E=new P,x=new P;for(let T=0;T<e.length;T+=3)u(e[T+0],R),u(e[T+1],E),u(e[T+2],x),o(R,E,x,p)}function o(p,R,E,x){let T=x+1,w=[];for(let A=0;A<=T;A++){w[A]=[];let _=p.clone().lerp(E,A/T),M=R.clone().lerp(E,A/T),U=T-A;for(let C=0;C<=U;C++)if(C===0&&A===T)w[A][C]=_;else w[A][C]=_.clone().lerp(M,C/U)}for(let A=0;A<T;A++)for(let _=0;_<2*(T-A)-1;_++){let M=Math.floor(_/2);if(_%2===0)d(w[A][M+1]),d(w[A+1][M]),d(w[A][M]);else d(w[A][M+1]),d(w[A+1][M+1]),d(w[A+1][M])}}function l(p){let R=new P;for(let E=0;E<s.length;E+=3)R.x=s[E+0],R.y=s[E+1],R.z=s[E+2],R.normalize().multiplyScalar(p),s[E+0]=R.x,s[E+1]=R.y,s[E+2]=R.z}function c(){let p=new P;for(let R=0;R<s.length;R+=3){p.x=s[R+0],p.y=s[R+1],p.z=s[R+2];let E=v(p)/2/Math.PI+0.5,x=m(p)/Math.PI+0.5;r.push(E,1-x)}f(),h()}function h(){for(let p=0;p<r.length;p+=6){let R=r[p+0],E=r[p+2],x=r[p+4],T=Math.max(R,E,x),w=Math.min(R,E,x);if(T>0.9&&w<0.1){if(R<0.2)r[p+0]+=1;if(E<0.2)r[p+2]+=1;if(x<0.2)r[p+4]+=1}}}function d(p){s.push(p.x,p.y,p.z)}function u(p,R){let E=p*3;R.x=t[E+0],R.y=t[E+1],R.z=t[E+2]}function f(){let p=new P,R=new P,E=new P,x=new P,T=new K,w=new K,A=new K;for(let _=0,M=0;_<s.length;_+=9,M+=6){p.set(s[_+0],s[_+1],s[_+2]),R.set(s[_+3],s[_+4],s[_+5]),E.set(s[_+6],s[_+7],s[_+8]),T.set(r[M+0],r[M+1]),w.set(r[M+2],r[M+3]),A.set(r[M+4],r[M+5]),x.copy(p).add(R).add(E).divideScalar(3);let U=v(x);g(T,M+0,p,U),g(w,M+2,R,U),g(A,M+4,E,U)}}function g(p,R,E,x){if(x<0&&p.x===1)r[R]=p.x-1;if(E.x===0&&E.z===0)r[R]=x/2/Math.PI+0.5}function v(p){return Math.atan2(p.z,-p.x)}function m(p){return Math.atan2(-p.y,Math.sqrt(p.x*p.x+p.z*p.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ba(t.vertices,t.indices,t.radius,t.detail)}}var ra=new P,aa=new P,Wo=new P,oa=new $e;class za extends Se{constructor(t=null,e=1){super();if(this.type="EdgesGeometry",this.parameters={geometry:t,thresholdAngle:e},t!==null){let i=Math.pow(10,4),s=Math.cos(_s*e),r=t.getIndex(),a=t.getAttribute("position"),o=r?r.count:a.count,l=[0,0,0],c=["a","b","c"],h=[,,,],d={},u=[];for(let f=0;f<o;f+=3){if(r)l[0]=r.getX(f),l[1]=r.getX(f+1),l[2]=r.getX(f+2);else l[0]=f,l[1]=f+1,l[2]=f+2;let{a:g,b:v,c:m}=oa;if(g.fromBufferAttribute(a,l[0]),v.fromBufferAttribute(a,l[1]),m.fromBufferAttribute(a,l[2]),oa.getNormal(Wo),h[0]=`${Math.round(g.x*i)},${Math.round(g.y*i)},${Math.round(g.z*i)}`,h[1]=`${Math.round(v.x*i)},${Math.round(v.y*i)},${Math.round(v.z*i)}`,h[2]=`${Math.round(m.x*i)},${Math.round(m.y*i)},${Math.round(m.z*i)}`,h[0]===h[1]||h[1]===h[2]||h[2]===h[0])continue;for(let p=0;p<3;p++){let R=(p+1)%3,E=h[p],x=h[R],T=oa[c[p]],w=oa[c[R]],A=`${E}_${x}`,_=`${x}_${E}`;if(_ in d&&d[_]){if(Wo.dot(d[_].normal)<=s)u.push(T.x,T.y,T.z),u.push(w.x,w.y,w.z);d[_]=null}else if(!(A in d))d[A]={index0:l[p],index1:l[R],normal:Wo.clone()}}}for(let f in d)if(d[f]){let{index0:g,index1:v}=d[f];ra.fromBufferAttribute(a,g),aa.fromBufferAttribute(a,v),u.push(ra.x,ra.y,ra.z),u.push(aa.x,aa.y,aa.z)}this.setAttribute("position",new te(u,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}}class un{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Ut("Curve: .getPoint() not implemented.")}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,i=this.getPoint(0),s=0;e.push(0);for(let r=1;r<=t;r++)n=this.getPoint(r/t),s+=n.distanceTo(i),e.push(s),i=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){let n=this.getLengths(),i=0,s=n.length,r;if(e)r=e;else r=t*n[s-1];let a=0,o=s-1,l;while(a<=o)if(i=Math.floor(a+(o-a)/2),l=n[i]-r,l<0)a=i+1;else if(l>0)o=i-1;else{o=i;break}if(i=o,n[i]===r)return i/(s-1);let c=n[i],d=n[i+1]-c,u=(r-c)/d;return(i+u)/(s-1)}getTangent(t,e){let i=t-0.0001,s=t+0.0001;if(i<0)i=0;if(s>1)s=1;let r=this.getPoint(i),a=this.getPoint(s),o=e||(r.isVector2?new K:new P);return o.copy(a).sub(r).normalize(),o}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e=!1){let n=new P,i=[],s=[],r=[],a=new P,o=new re;for(let u=0;u<=t;u++){let f=u/t;i[u]=this.getTangentAt(f,new P)}s[0]=new P,r[0]=new P;let l=Number.MAX_VALUE,c=Math.abs(i[0].x),h=Math.abs(i[0].y),d=Math.abs(i[0].z);if(c<=l)l=c,n.set(1,0,0);if(h<=l)l=h,n.set(0,1,0);if(d<=l)n.set(0,0,1);a.crossVectors(i[0],n).normalize(),s[0].crossVectors(i[0],a),r[0].crossVectors(i[0],s[0]);for(let u=1;u<=t;u++){if(s[u]=s[u-1].clone(),r[u]=r[u-1].clone(),a.crossVectors(i[u-1],i[u]),a.length()>Number.EPSILON){a.normalize();let f=Math.acos($t(i[u-1].dot(i[u]),-1,1));s[u].applyMatrix4(o.makeRotationAxis(a,f))}r[u].crossVectors(i[u],s[u])}if(e===!0){let u=Math.acos($t(s[0].dot(s[t]),-1,1));if(u/=t,i[0].dot(a.crossVectors(s[0],s[t]))>0)u=-u;for(let f=1;f<=t;f++)s[f].applyMatrix4(o.makeRotationAxis(i[f],u*f)),r[f].crossVectors(i[f],s[f])}return{tangents:i,normals:s,binormals:r}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class Mr extends un{constructor(t=0,e=0,n=1,i=1,s=0,r=Math.PI*2,a=!1,o=0){super();this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=i,this.aStartAngle=s,this.aEndAngle=r,this.aClockwise=a,this.aRotation=o}getPoint(t,e=new K){let n=e,i=Math.PI*2,s=this.aEndAngle-this.aStartAngle,r=Math.abs(s)<Number.EPSILON;while(s<0)s+=i;while(s>i)s-=i;if(s<Number.EPSILON)if(r)s=0;else s=i;if(this.aClockwise===!0&&!r)if(s===i)s=-i;else s=s-i;let a=this.aStartAngle+t*s,o=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let c=Math.cos(this.aRotation),h=Math.sin(this.aRotation),d=o-this.aX,u=l-this.aY;o=d*c-u*h+this.aX,l=d*h+u*c+this.aY}return n.set(o,l)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class sc extends Mr{constructor(t,e,n,i,s,r){super(t,e,n,n,i,s,r);this.isArcCurve=!0,this.type="ArcCurve"}}function rc(){let t=0,e=0,n=0,i=0;function s(r,a,o,l){t=r,e=o,n=-3*r+3*a-2*o-l,i=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){s(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,h,d){let u=(a-r)/c-(o-r)/(c+h)+(o-a)/h,f=(o-a)/h-(l-a)/(h+d)+(l-o)/d;u*=h,f*=h,s(a,o,u,f)},calc:function(r){let a=r*r,o=a*r;return t+e*r+n*a+i*o}}}var Zh=new P,$h=new P,Xo=new rc,qo=new rc,Yo=new rc;class ac extends un{constructor(t=[],e=!1,n="centripetal",i=0.5){super();this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=i}getPoint(t,e=new P){let n=e,i=this.points,s=i.length,r=(s-(this.closed?0:1))*t,a=Math.floor(r),o=r-a;if(this.closed)a+=a>0?0:(Math.floor(Math.abs(a)/s)+1)*s;else if(o===0&&a===s-1)a=s-2,o=1;let l,c;if(this.closed||a>0)l=i[(a-1)%s];else $h.subVectors(i[0],i[1]).add(i[0]),l=$h;let h=i[a%s],d=i[(a+1)%s];if(this.closed||a+2<s)c=i[(a+2)%s];else Zh.subVectors(i[s-1],i[s-2]).add(i[s-1]),c=Zh;if(this.curveType==="centripetal"||this.curveType==="chordal"){let u=this.curveType==="chordal"?0.5:0.25,f=Math.pow(l.distanceToSquared(h),u),g=Math.pow(h.distanceToSquared(d),u),v=Math.pow(d.distanceToSquared(c),u);if(g<0.0001)g=1;if(f<0.0001)f=g;if(v<0.0001)v=g;Xo.initNonuniformCatmullRom(l.x,h.x,d.x,c.x,f,g,v),qo.initNonuniformCatmullRom(l.y,h.y,d.y,c.y,f,g,v),Yo.initNonuniformCatmullRom(l.z,h.z,d.z,c.z,f,g,v)}else if(this.curveType==="catmullrom")Xo.initCatmullRom(l.x,h.x,d.x,c.x,this.tension),qo.initCatmullRom(l.y,h.y,d.y,c.y,this.tension),Yo.initCatmullRom(l.z,h.z,d.z,c.z,this.tension);return n.set(Xo.calc(o),qo.calc(o),Yo.calc(o)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(i.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let i=this.points[e];t.points.push(i.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(new P().fromArray(i))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function Jh(t,e,n,i,s){let r=(i-e)*0.5,a=(s-n)*0.5,o=t*t,l=t*o;return(2*n-2*i+r+a)*l+(-3*n+3*i-2*r-a)*o+r*t+n}function yp(t,e){let n=1-t;return n*n*e}function vp(t,e){return 2*(1-t)*t*e}function Mp(t,e){return t*t*e}function Qs(t,e,n,i){return yp(t,e)+vp(t,n)+Mp(t,i)}function Sp(t,e){let n=1-t;return n*n*n*e}function bp(t,e){let n=1-t;return 3*n*n*t*e}function Ep(t,e){return 3*(1-t)*t*t*e}function Tp(t,e){return t*t*t*e}function tr(t,e,n,i,s){return Sp(t,e)+bp(t,n)+Ep(t,i)+Tp(t,s)}class ka extends un{constructor(t=new K,e=new K,n=new K,i=new K){super();this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new K){let n=e,i=this.v0,s=this.v1,r=this.v2,a=this.v3;return n.set(tr(t,i.x,s.x,r.x,a.x),tr(t,i.y,s.y,r.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class oc extends un{constructor(t=new P,e=new P,n=new P,i=new P){super();this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new P){let n=e,i=this.v0,s=this.v1,r=this.v2,a=this.v3;return n.set(tr(t,i.x,s.x,r.x,a.x),tr(t,i.y,s.y,r.y,a.y),tr(t,i.z,s.z,r.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Ga extends un{constructor(t=new K,e=new K){super();this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new K){let n=e;if(t===1)n.copy(this.v2);else n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1);return n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new K){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class lc extends un{constructor(t=new P,e=new P){super();this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new P){let n=e;if(t===1)n.copy(this.v2);else n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1);return n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new P){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Ha extends un{constructor(t=new K,e=new K,n=new K){super();this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new K){let n=e,i=this.v0,s=this.v1,r=this.v2;return n.set(Qs(t,i.x,s.x,r.x),Qs(t,i.y,s.y,r.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class cc extends un{constructor(t=new P,e=new P,n=new P){super();this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new P){let n=e,i=this.v0,s=this.v1,r=this.v2;return n.set(Qs(t,i.x,s.x,r.x),Qs(t,i.y,s.y,r.y),Qs(t,i.z,s.z,r.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Va extends un{constructor(t=[]){super();this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new K){let n=e,i=this.points,s=(i.length-1)*t,r=Math.floor(s),a=s-r,o=i[r===0?r:r-1],l=i[r],c=i[r>i.length-2?i.length-1:r+1],h=i[r>i.length-3?i.length-1:r+2];return n.set(Jh(a,o.x,l.x,c.x,h.x),Jh(a,o.y,l.y,c.y,h.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(i.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let i=this.points[e];t.points.push(i.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(new K().fromArray(i))}return this}}var $o=Object.freeze({__proto__:null,ArcCurve:sc,CatmullRomCurve3:ac,CubicBezierCurve:ka,CubicBezierCurve3:oc,EllipseCurve:Mr,LineCurve:Ga,LineCurve3:lc,QuadraticBezierCurve:Ha,QuadraticBezierCurve3:cc,SplineCurve:Va});class hc extends un{constructor(){super();this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new $o[n](e,t))}return this}getPoint(t,e){let n=t*this.getLength(),i=this.getCurveLengths(),s=0;while(s<i.length){if(i[s]>=n){let r=i[s]-n,a=this.curves[s],o=a.getLength(),l=o===0?0:1-r/o;return a.getPointAt(l,e)}s++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let n=0,i=this.curves.length;n<i;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));if(this.autoClose)e.push(e[0]);return e}getPoints(t=12){let e=[],n;for(let i=0,s=this.curves;i<s.length;i++){let r=s[i],a=r.isEllipseCurve?t*2:r.isLineCurve||r.isLineCurve3?1:r.isSplineCurve?t*r.points.length:t,o=r.getPoints(a);for(let l=0;l<o.length;l++){let c=o[l];if(n&&n.equals(c))continue;e.push(c),n=c}}if(this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0]))e.push(e[0]);return e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let i=t.curves[e];this.curves.push(i.clone())}return this.autoClose=t.autoClose,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){let i=this.curves[e];t.curves.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let i=t.curves[e];this.curves.push(new $o[i.type]().fromJSON(i))}return this}}class ma extends hc{constructor(t){super();if(this.type="Path",this.currentPoint=new K,t)this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let n=new Ga(this.currentPoint.clone(),new K(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,i){let s=new Ha(this.currentPoint.clone(),new K(t,e),new K(n,i));return this.curves.push(s),this.currentPoint.set(n,i),this}bezierCurveTo(t,e,n,i,s,r){let a=new ka(this.currentPoint.clone(),new K(t,e),new K(n,i),new K(s,r));return this.curves.push(a),this.currentPoint.set(s,r),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),n=new Va(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,i,s,r){let a=this.currentPoint.x,o=this.currentPoint.y;return this.absarc(t+a,e+o,n,i,s,r),this}absarc(t,e,n,i,s,r){return this.absellipse(t,e,n,n,i,s,r),this}ellipse(t,e,n,i,s,r,a,o){let l=this.currentPoint.x,c=this.currentPoint.y;return this.absellipse(t+l,e+c,n,i,s,r,a,o),this}absellipse(t,e,n,i,s,r,a,o){let l=new Mr(t,e,n,i,s,r,a,o);if(this.curves.length>0){let h=l.getPoint(0);if(!h.equals(this.currentPoint))this.lineTo(h.x,h.y)}this.curves.push(l);let c=l.getPoint(1);return this.currentPoint.copy(c),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class Bi extends ma{constructor(t){super(t);this.uuid=Rn(),this.type="Shape",this.holes=[]}getPointsHoles(t){let e=[];for(let n=0,i=this.holes.length;n<i;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let i=t.holes[e];this.holes.push(i.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){let i=this.holes[e];t.holes.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let i=t.holes[e];this.holes.push(new ma().fromJSON(i))}return this}}function wp(t,e,n=2){let i=e&&e.length,s=i?e[0]*n:t.length,r=ld(t,0,s,n,!0),a=[];if(!r||r.next===r.prev)return a;let o,l,c;if(i)r=Ip(t,e,r,n);if(t.length>80*n){o=t[0],l=t[1];let h=o,d=l;for(let u=n;u<s;u+=n){let f=t[u],g=t[u+1];if(f<o)o=f;if(g<l)l=g;if(f>h)h=f;if(g>d)d=g}c=Math.max(h-o,d-l),c=c!==0?32767/c:0}return sr(r,a,n,o,l,c,0),a}function ld(t,e,n,i,s){let r;if(s===Hp(t,e,n,i)>0)for(let a=e;a<n;a+=i)r=Kh(a/i|0,t[a],t[a+1],r);else for(let a=n-i;a>=e;a-=i)r=Kh(a/i|0,t[a],t[a+1],r);if(r&&Ss(r,r.next))ar(r),r=r.next;return r}function Ti(t,e){if(!t)return t;if(!e)e=t;let n=t,i;do if(i=!1,!n.steiner&&(Ss(n,n.next)||be(n.prev,n,n.next)===0)){if(ar(n),n=e=n.prev,n===n.next)break;i=!0}else n=n.next;while(i||n!==e);return e}function sr(t,e,n,i,s,r,a){if(!t)return;if(!a&&r)Fp(t,i,s,r);let o=t;while(t.prev!==t.next){let l=t.prev,c=t.next;if(r?Rp(t,i,s,r):Ap(t)){e.push(l.i,t.i,c.i),ar(t),t=c.next,o=c.next;continue}if(t=c,t===o){if(!a)sr(Ti(t),e,n,i,s,r,1);else if(a===1)t=Cp(Ti(t),e),sr(t,e,n,i,s,r,2);else if(a===2)Pp(t,e,n,i,s,r);break}}}function Ap(t){let e=t.prev,n=t,i=t.next;if(be(e,n,i)>=0)return!1;let s=e.x,r=n.x,a=i.x,o=e.y,l=n.y,c=i.y,h=Math.min(s,r,a),d=Math.min(o,l,c),u=Math.max(s,r,a),f=Math.max(o,l,c),g=i.next;while(g!==e){if(g.x>=h&&g.x<=u&&g.y>=d&&g.y<=f&&Ks(s,o,r,l,a,c,g.x,g.y)&&be(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function Rp(t,e,n,i){let s=t.prev,r=t,a=t.next;if(be(s,r,a)>=0)return!1;let o=s.x,l=r.x,c=a.x,h=s.y,d=r.y,u=a.y,f=Math.min(o,l,c),g=Math.min(h,d,u),v=Math.max(o,l,c),m=Math.max(h,d,u),p=Jo(f,g,e,n,i),R=Jo(v,m,e,n,i),{prevZ:E,nextZ:x}=t;while(E&&E.z>=p&&x&&x.z<=R){if(E.x>=f&&E.x<=v&&E.y>=g&&E.y<=m&&E!==s&&E!==a&&Ks(o,h,l,d,c,u,E.x,E.y)&&be(E.prev,E,E.next)>=0)return!1;if(E=E.prevZ,x.x>=f&&x.x<=v&&x.y>=g&&x.y<=m&&x!==s&&x!==a&&Ks(o,h,l,d,c,u,x.x,x.y)&&be(x.prev,x,x.next)>=0)return!1;x=x.nextZ}while(E&&E.z>=p){if(E.x>=f&&E.x<=v&&E.y>=g&&E.y<=m&&E!==s&&E!==a&&Ks(o,h,l,d,c,u,E.x,E.y)&&be(E.prev,E,E.next)>=0)return!1;E=E.prevZ}while(x&&x.z<=R){if(x.x>=f&&x.x<=v&&x.y>=g&&x.y<=m&&x!==s&&x!==a&&Ks(o,h,l,d,c,u,x.x,x.y)&&be(x.prev,x,x.next)>=0)return!1;x=x.nextZ}return!0}function Cp(t,e){let n=t;do{let i=n.prev,s=n.next.next;if(!Ss(i,s)&&hd(i,n,n.next,s)&&rr(i,s)&&rr(s,i))e.push(i.i,n.i,s.i),ar(n),ar(n.next),n=t=s;n=n.next}while(n!==t);return Ti(n)}function Pp(t,e,n,i,s,r){let a=t;do{let o=a.next.next;while(o!==a.prev){if(a.i!==o.i&&zp(a,o)){let l=ud(a,o);a=Ti(a,a.next),l=Ti(l,l.next),sr(a,e,n,i,s,r,0),sr(l,e,n,i,s,r,0);return}o=o.next}a=a.next}while(a!==t)}function Ip(t,e,n,i){let s=[];for(let r=0,a=e.length;r<a;r++){let o=e[r]*i,l=r<a-1?e[r+1]*i:t.length,c=ld(t,o,l,i,!1);if(c===c.next)c.steiner=!0;s.push(Bp(c))}s.sort(Lp);for(let r=0;r<s.length;r++)n=Dp(s[r],n);return n}function Lp(t,e){let n=t.x-e.x;if(n===0){if(n=t.y-e.y,n===0){let i=(t.next.y-t.y)/(t.next.x-t.x),s=(e.next.y-e.y)/(e.next.x-e.x);n=i-s}}return n}function Dp(t,e){let n=Np(t,e);if(!n)return e;let i=ud(n,t);return Ti(i,i.next),Ti(n,n.next)}function Np(t,e){let n=e,{x:i,y:s}=t,r=-1/0,a;if(Ss(t,n))return n;do{if(Ss(t,n.next))return n.next;else if(s<=n.y&&s>=n.next.y&&n.next.y!==n.y){let d=n.x+(s-n.y)*(n.next.x-n.x)/(n.next.y-n.y);if(d<=i&&d>r){if(r=d,a=n.x<n.next.x?n:n.next,d===i)return a}}n=n.next}while(n!==e);if(!a)return null;let o=a,l=a.x,c=a.y,h=1/0;n=a;do{if(i>=n.x&&n.x>=l&&i!==n.x&&cd(s<c?i:r,s,l,c,s<c?r:i,s,n.x,n.y)){let d=Math.abs(s-n.y)/(i-n.x);if(rr(n,t)&&(d<h||d===h&&(n.x>a.x||n.x===a.x&&Up(a,n))))a=n,h=d}n=n.next}while(n!==o);return a}function Up(t,e){return be(t.prev,t,e.prev)<0&&be(e.next,t,t.next)<0}function Fp(t,e,n,i){let s=t;do{if(s.z===0)s.z=Jo(s.x,s.y,e,n,i);s.prevZ=s.prev,s.nextZ=s.next,s=s.next}while(s!==t);s.prevZ.nextZ=null,s.prevZ=null,Op(s)}function Op(t){let e,n=1;do{let i=t,s;t=null;let r=null;e=0;while(i){e++;let a=i,o=0;for(let c=0;c<n;c++)if(o++,a=a.nextZ,!a)break;let l=n;while(o>0||l>0&&a){if(o!==0&&(l===0||!a||i.z<=a.z))s=i,i=i.nextZ,o--;else s=a,a=a.nextZ,l--;if(r)r.nextZ=s;else t=s;s.prevZ=r,r=s}i=a}r.nextZ=null,n*=2}while(e>1);return t}function Jo(t,e,n,i,s){return t=(t-n)*s|0,e=(e-i)*s|0,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,t|e<<1}function Bp(t){let e=t,n=t;do{if(e.x<n.x||e.x===n.x&&e.y<n.y)n=e;e=e.next}while(e!==t);return n}function cd(t,e,n,i,s,r,a,o){return(s-a)*(e-o)>=(t-a)*(r-o)&&(t-a)*(i-o)>=(n-a)*(e-o)&&(n-a)*(r-o)>=(s-a)*(i-o)}function Ks(t,e,n,i,s,r,a,o){return!(t===a&&e===o)&&cd(t,e,n,i,s,r,a,o)}function zp(t,e){return t.next.i!==e.i&&t.prev.i!==e.i&&!kp(t,e)&&(rr(t,e)&&rr(e,t)&&Gp(t,e)&&(be(t.prev,t,e.prev)||be(t,e.prev,e))||Ss(t,e)&&be(t.prev,t,t.next)>0&&be(e.prev,e,e.next)>0)}function be(t,e,n){return(e.y-t.y)*(n.x-e.x)-(e.x-t.x)*(n.y-e.y)}function Ss(t,e){return t.x===e.x&&t.y===e.y}function hd(t,e,n,i){let s=ca(be(t,e,n)),r=ca(be(t,e,i)),a=ca(be(n,i,t)),o=ca(be(n,i,e));if(s!==r&&a!==o)return!0;if(s===0&&la(t,n,e))return!0;if(r===0&&la(t,i,e))return!0;if(a===0&&la(n,t,i))return!0;if(o===0&&la(n,e,i))return!0;return!1}function la(t,e,n){return e.x<=Math.max(t.x,n.x)&&e.x>=Math.min(t.x,n.x)&&e.y<=Math.max(t.y,n.y)&&e.y>=Math.min(t.y,n.y)}function ca(t){return t>0?1:t<0?-1:0}function kp(t,e){let n=t;do{if(n.i!==t.i&&n.next.i!==t.i&&n.i!==e.i&&n.next.i!==e.i&&hd(n,n.next,t,e))return!0;n=n.next}while(n!==t);return!1}function rr(t,e){return be(t.prev,t,t.next)<0?be(t,e,t.next)>=0&&be(t,t.prev,e)>=0:be(t,e,t.prev)<0||be(t,t.next,e)<0}function Gp(t,e){let n=t,i=!1,s=(t.x+e.x)/2,r=(t.y+e.y)/2;do{if(n.y>r!==n.next.y>r&&n.next.y!==n.y&&s<(n.next.x-n.x)*(r-n.y)/(n.next.y-n.y)+n.x)i=!i;n=n.next}while(n!==t);return i}function ud(t,e){let n=Ko(t.i,t.x,t.y),i=Ko(e.i,e.x,e.y),s=t.next,r=e.prev;return t.next=e,e.prev=t,n.next=s,s.prev=n,i.next=n,n.prev=i,r.next=i,i.prev=r,i}function Kh(t,e,n,i){let s=Ko(t,e,n);if(!i)s.prev=s,s.next=s;else s.next=i.next,s.prev=i,i.next.prev=s,i.next=s;return s}function ar(t){if(t.next.prev=t.prev,t.prev.next=t.next,t.prevZ)t.prevZ.nextZ=t.nextZ;if(t.nextZ)t.nextZ.prevZ=t.prevZ}function Ko(t,e,n){return{i:t,x:e,y:n,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Hp(t,e,n,i){let s=0;for(let r=e,a=n-i;r<n;r+=i)s+=(t[a]-t[r])*(t[r+1]+t[a+1]),a=r;return s}class dd{static triangulate(t,e,n=2){return wp(t,e,n)}}class An{static area(t){let e=t.length,n=0;for(let i=e-1,s=0;s<e;i=s++)n+=t[i].x*t[s].y-t[s].x*t[i].y;return n*0.5}static isClockWise(t){return An.area(t)<0}static triangulateShape(t,e){let n=[],i=[],s=[];jh(t),Qh(n,t);let r=t.length;e.forEach(jh);for(let o=0;o<e.length;o++)i.push(r),r+=e[o].length,Qh(n,e[o]);let a=dd.triangulate(n,i);for(let o=0;o<a.length;o+=3)s.push(a.slice(o,o+3));return s}}function jh(t){let e=t.length;if(e>2&&t[e-1].equals(t[0]))t.pop()}function Qh(t,e){for(let n=0;n<e.length;n++)t.push(e[n].x),t.push(e[n].y)}class Cs extends Se{constructor(t=new Bi([new K(0.5,0.5),new K(-0.5,0.5),new K(-0.5,-0.5),new K(0.5,-0.5)]),e={}){super();this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];let n=this,i=[],s=[];for(let a=0,o=t.length;a<o;a++){let l=t[a];r(l)}this.setAttribute("position",new te(i,3)),this.setAttribute("uv",new te(s,2)),this.computeVertexNormals();function r(a){let o=[],l=e.curveSegments!==void 0?e.curveSegments:12,c=e.steps!==void 0?e.steps:1,h=e.depth!==void 0?e.depth:1,d=e.bevelEnabled!==void 0?e.bevelEnabled:!0,u=e.bevelThickness!==void 0?e.bevelThickness:0.2,f=e.bevelSize!==void 0?e.bevelSize:u-0.1,g=e.bevelOffset!==void 0?e.bevelOffset:0,v=e.bevelSegments!==void 0?e.bevelSegments:3,m=e.extrudePath,p=e.UVGenerator!==void 0?e.UVGenerator:Vp,R,E=!1,x,T,w,A;if(m){R=m.getSpacedPoints(c),E=!0,d=!1;let Q=m.isCatmullRomCurve3?m.closed:!1;x=m.computeFrenetFrames(c,Q),T=new P,w=new P,A=new P}if(!d)v=0,u=0,f=0,g=0;let _=a.extractPoints(l),{shape:M,holes:U}=_;if(!An.isClockWise(M)){M=M.reverse();for(let Q=0,it=U.length;Q<it;Q++){let nt=U[Q];if(An.isClockWise(nt))U[Q]=nt.reverse()}}function k(Q){let vt=Q[0];for(let Et=1;Et<=Q.length;Et++){let Pt=Et%Q.length,Lt=Q[Pt],Wt=Lt.x-vt.x,Xt=Lt.y-vt.y,I=Wt*Wt+Xt*Xt,_e=Math.max(Math.abs(Lt.x),Math.abs(Lt.y),Math.abs(vt.x),Math.abs(vt.y)),Qt=0.000000000000000000010000000000000001*_e*_e;if(I<=Qt){Q.splice(Pt,1),Et--;continue}vt=Lt}}k(M),U.forEach(k);let q=U.length,F=M;for(let Q=0;Q<q;Q++){let it=U[Q];M=M.concat(it)}function V(Q,it,nt){if(!it)Bt("ExtrudeGeometry: vec does not exist");return Q.clone().addScaledVector(it,nt)}let W=M.length;function O(Q,it,nt){let vt,Et,Pt,Lt=Q.x-it.x,Wt=Q.y-it.y,Xt=nt.x-Q.x,I=nt.y-Q.y,_e=Lt*Lt+Wt*Wt,Qt=Lt*I-Wt*Xt;if(Math.abs(Qt)>Number.EPSILON){let Kt=Math.sqrt(_e),b=Math.sqrt(Xt*Xt+I*I),y=it.x-Wt/Kt,L=it.y+Lt/Kt,G=nt.x-I/b,tt=nt.y+Xt/b,at=((G-y)*I-(tt-L)*Xt)/(Lt*I-Wt*Xt);vt=y+Lt*at-Q.x,Et=L+Wt*at-Q.y;let ut=vt*vt+Et*Et;if(ut<=2)return new K(vt,Et);else Pt=Math.sqrt(ut/2)}else{let Kt=!1;if(Lt>Number.EPSILON){if(Xt>Number.EPSILON)Kt=!0}else if(Lt<-Number.EPSILON){if(Xt<-Number.EPSILON)Kt=!0}else if(Math.sign(Wt)===Math.sign(I))Kt=!0;if(Kt)vt=-Wt,Et=Lt,Pt=Math.sqrt(_e);else vt=Lt,Et=Wt,Pt=Math.sqrt(_e/2)}return new K(vt/Pt,Et/Pt)}let j=[];for(let Q=0,it=F.length,nt=it-1,vt=Q+1;Q<it;Q++,nt++,vt++){if(nt===it)nt=0;if(vt===it)vt=0;j[Q]=O(F[Q],F[nt],F[vt])}let rt=[],lt,Rt=j.concat();for(let Q=0,it=q;Q<it;Q++){let nt=U[Q];lt=[];for(let vt=0,Et=nt.length,Pt=Et-1,Lt=vt+1;vt<Et;vt++,Pt++,Lt++){if(Pt===Et)Pt=0;if(Lt===Et)Lt=0;lt[vt]=O(nt[vt],nt[Pt],nt[Lt])}rt.push(lt),Rt=Rt.concat(lt)}let St;if(v===0)St=An.triangulateShape(F,U);else{let Q=[],it=[];for(let nt=0;nt<v;nt++){let vt=nt/v,Et=u*Math.cos(vt*Math.PI/2),Pt=f*Math.sin(vt*Math.PI/2)+g;for(let Lt=0,Wt=F.length;Lt<Wt;Lt++){let Xt=V(F[Lt],j[Lt],Pt);if(dt(Xt.x,Xt.y,-Et),vt===0)Q.push(Xt)}for(let Lt=0,Wt=q;Lt<Wt;Lt++){let Xt=U[Lt];lt=rt[Lt];let I=[];for(let _e=0,Qt=Xt.length;_e<Qt;_e++){let Kt=V(Xt[_e],lt[_e],Pt);if(dt(Kt.x,Kt.y,-Et),vt===0)I.push(Kt)}if(vt===0)it.push(I)}}St=An.triangulateShape(Q,it)}let he=St.length,ae=f+g;for(let Q=0;Q<W;Q++){let it=d?V(M[Q],Rt[Q],ae):M[Q];if(!E)dt(it.x,it.y,0);else w.copy(x.normals[0]).multiplyScalar(it.x),T.copy(x.binormals[0]).multiplyScalar(it.y),A.copy(R[0]).add(w).add(T),dt(A.x,A.y,A.z)}for(let Q=1;Q<=c;Q++)for(let it=0;it<W;it++){let nt=d?V(M[it],Rt[it],ae):M[it];if(!E)dt(nt.x,nt.y,h/c*Q);else w.copy(x.normals[Q]).multiplyScalar(nt.x),T.copy(x.binormals[Q]).multiplyScalar(nt.y),A.copy(R[Q]).add(w).add(T),dt(A.x,A.y,A.z)}for(let Q=v-1;Q>=0;Q--){let it=Q/v,nt=u*Math.cos(it*Math.PI/2),vt=f*Math.sin(it*Math.PI/2)+g;for(let Et=0,Pt=F.length;Et<Pt;Et++){let Lt=V(F[Et],j[Et],vt);dt(Lt.x,Lt.y,h+nt)}for(let Et=0,Pt=U.length;Et<Pt;Et++){let Lt=U[Et];lt=rt[Et];for(let Wt=0,Xt=Lt.length;Wt<Xt;Wt++){let I=V(Lt[Wt],lt[Wt],vt);if(!E)dt(I.x,I.y,h+nt);else dt(I.x,I.y+R[c-1].y,R[c-1].x+nt)}}}Z(),ct();function Z(){let Q=i.length/3;if(d){let it=0,nt=W*it;for(let vt=0;vt<he;vt++){let Et=St[vt];Ft(Et[2]+nt,Et[1]+nt,Et[0]+nt)}it=c+v*2,nt=W*it;for(let vt=0;vt<he;vt++){let Et=St[vt];Ft(Et[0]+nt,Et[1]+nt,Et[2]+nt)}}else{for(let it=0;it<he;it++){let nt=St[it];Ft(nt[2],nt[1],nt[0])}for(let it=0;it<he;it++){let nt=St[it];Ft(nt[0]+W*c,nt[1]+W*c,nt[2]+W*c)}}n.addGroup(Q,i.length/3-Q,0)}function ct(){let Q=i.length/3,it=0;bt(F,it),it+=F.length;for(let nt=0,vt=U.length;nt<vt;nt++){let Et=U[nt];bt(Et,it),it+=Et.length}n.addGroup(Q,i.length/3-Q,1)}function bt(Q,it){let nt=Q.length;while(--nt>=0){let vt=nt,Et=nt-1;if(Et<0)Et=Q.length-1;for(let Pt=0,Lt=c+v*2;Pt<Lt;Pt++){let Wt=W*Pt,Xt=W*(Pt+1),I=it+vt+Wt,_e=it+Et+Wt,Qt=it+Et+Xt,Kt=it+vt+Xt;ne(I,_e,Qt,Kt)}}}function dt(Q,it,nt){o.push(Q),o.push(it),o.push(nt)}function Ft(Q,it,nt){kt(Q),kt(it),kt(nt);let vt=i.length/3,Et=p.generateTopUV(n,i,vt-3,vt-2,vt-1);Ht(Et[0]),Ht(Et[1]),Ht(Et[2])}function ne(Q,it,nt,vt){kt(Q),kt(it),kt(vt),kt(it),kt(nt),kt(vt);let Et=i.length/3,Pt=p.generateSideWallUV(n,i,Et-6,Et-3,Et-2,Et-1);Ht(Pt[0]),Ht(Pt[1]),Ht(Pt[3]),Ht(Pt[1]),Ht(Pt[2]),Ht(Pt[3])}function kt(Q){i.push(o[Q*3+0]),i.push(o[Q*3+1]),i.push(o[Q*3+2])}function Ht(Q){s.push(Q.x),s.push(Q.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return Wp(e,n,t)}static fromJSON(t,e){let n=[];for(let s=0,r=t.shapes.length;s<r;s++){let a=e[t.shapes[s]];n.push(a)}let i=t.options.extrudePath;if(i!==void 0)t.options.extrudePath=new $o[i.type]().fromJSON(i);return new Cs(n,t.options)}}var Vp={generateTopUV:function(t,e,n,i,s){let r=e[n*3],a=e[n*3+1],o=e[i*3],l=e[i*3+1],c=e[s*3],h=e[s*3+1];return[new K(r,a),new K(o,l),new K(c,h)]},generateSideWallUV:function(t,e,n,i,s,r){let a=e[n*3],o=e[n*3+1],l=e[n*3+2],c=e[i*3],h=e[i*3+1],d=e[i*3+2],u=e[s*3],f=e[s*3+1],g=e[s*3+2],v=e[r*3],m=e[r*3+1],p=e[r*3+2];if(Math.abs(o-h)<Math.abs(a-c))return[new K(a,1-l),new K(c,1-d),new K(u,1-g),new K(v,1-p)];else return[new K(o,1-l),new K(h,1-d),new K(f,1-g),new K(m,1-p)]}};function Wp(t,e,n){if(n.shapes=[],Array.isArray(t))for(let i=0,s=t.length;i<s;i++){let r=t[i];n.shapes.push(r.uuid)}else n.shapes.push(t.uuid);if(n.options=Object.assign({},e),e.extrudePath!==void 0)n.options.extrudePath=e.extrudePath.toJSON();return n}class Sr extends Ba{constructor(t=1,e=0){let n=(1+Math.sqrt(5))/2,i=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(i,s,t,e);this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Sr(t.radius,t.detail)}}class zi extends Se{constructor(t=1,e=1,n=1,i=1){super();this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};let s=t/2,r=e/2,a=Math.floor(n),o=Math.floor(i),l=a+1,c=o+1,h=t/a,d=e/o,u=[],f=[],g=[],v=[];for(let m=0;m<c;m++){let p=m*d-r;for(let R=0;R<l;R++){let E=R*h-s;f.push(E,-p,0),g.push(0,0,1),v.push(R/a),v.push(1-m/o)}}for(let m=0;m<o;m++)for(let p=0;p<a;p++){let R=p+l*m,E=p+l*(m+1),x=p+1+l*(m+1),T=p+1+l*m;u.push(R,E,T),u.push(E,x,T)}this.setIndex(u),this.setAttribute("position",new te(f,3)),this.setAttribute("normal",new te(g,3)),this.setAttribute("uv",new te(v,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new zi(t.width,t.height,t.widthSegments,t.heightSegments)}}class br extends Se{constructor(t=0.5,e=1,n=32,i=1,s=0,r=Math.PI*2){super();this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:i,thetaStart:s,thetaLength:r},n=Math.max(3,n),i=Math.max(1,i);let a=[],o=[],l=[],c=[],h=t,d=(e-t)/i,u=new P,f=new K;for(let g=0;g<=i;g++){for(let v=0;v<=n;v++){let m=s+v/n*r;u.x=h*Math.cos(m),u.y=h*Math.sin(m),o.push(u.x,u.y,u.z),l.push(0,0,1),f.x=(u.x/e+1)/2,f.y=(u.y/e+1)/2,c.push(f.x,f.y)}h+=d}for(let g=0;g<i;g++){let v=g*(n+1);for(let m=0;m<n;m++){let p=m+v,R=p,E=p+n+1,x=p+n+2,T=p+1;a.push(R,E,T),a.push(E,x,T)}}this.setIndex(a),this.setAttribute("position",new te(o,3)),this.setAttribute("normal",new te(l,3)),this.setAttribute("uv",new te(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new br(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class Er extends Se{constructor(t=new Bi([new K(0,0.5),new K(-0.5,-0.5),new K(0.5,-0.5)]),e=12){super();this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:e};let n=[],i=[],s=[],r=[],a=0,o=0;if(Array.isArray(t)===!1)l(t);else for(let c=0;c<t.length;c++)l(t[c]),this.addGroup(a,o,c),a+=o,o=0;this.setIndex(n),this.setAttribute("position",new te(i,3)),this.setAttribute("normal",new te(s,3)),this.setAttribute("uv",new te(r,2));function l(c){let h=i.length/3,d=c.extractPoints(e),{shape:u,holes:f}=d;if(An.isClockWise(u)===!1)u=u.reverse();for(let v=0,m=f.length;v<m;v++){let p=f[v];if(An.isClockWise(p)===!0)f[v]=p.reverse()}let g=An.triangulateShape(u,f);for(let v=0,m=f.length;v<m;v++){let p=f[v];u=u.concat(p)}for(let v=0,m=u.length;v<m;v++){let p=u[v];i.push(p.x,p.y,0),s.push(0,0,1),r.push(p.x,p.y)}for(let v=0,m=g.length;v<m;v++){let p=g[v],R=p[0]+h,E=p[1]+h,x=p[2]+h;n.push(R,E,x),o+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes;return Xp(e,t)}static fromJSON(t,e){let n=[];for(let i=0,s=t.shapes.length;i<s;i++){let r=e[t.shapes[i]];n.push(r)}return new Er(n,t.curveSegments)}}function Xp(t,e){if(e.shapes=[],Array.isArray(t))for(let n=0,i=t.length;n<i;n++){let s=t[n];e.shapes.push(s.uuid)}else e.shapes.push(t.uuid);return e}class Ps extends Se{constructor(t=1,e=32,n=16,i=0,s=Math.PI*2,r=0,a=Math.PI){super();this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:i,phiLength:s,thetaStart:r,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let o=Math.min(r+a,Math.PI),l=0,c=[],h=new P,d=new P,u=[],f=[],g=[],v=[];for(let m=0;m<=n;m++){let p=[],R=m/n,E=r+R*a,x=t*Math.cos(E),T=Math.sqrt(t*t-x*x),w=0;if(m===0&&r===0)w=0.5/e;else if(m===n&&o===Math.PI)w=-0.5/e;for(let A=0;A<=e;A++){let _=A/e,M=i+_*s;h.x=-T*Math.cos(M),h.y=x,h.z=T*Math.sin(M),f.push(h.x,h.y,h.z),d.copy(h).normalize(),g.push(d.x,d.y,d.z),v.push(_+w,1-R),p.push(l++)}c.push(p)}for(let m=0;m<n;m++)for(let p=0;p<e;p++){let R=c[m][p+1],E=c[m][p],x=c[m+1][p],T=c[m+1][p+1];if(m!==0||r>0)u.push(R,E,T);if(m!==n-1||o<Math.PI)u.push(E,x,T)}this.setIndex(u),this.setAttribute("position",new te(f,3)),this.setAttribute("normal",new te(g,3)),this.setAttribute("uv",new te(v,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ps(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}function ki(t){let e={};for(let n in t){e[n]={};for(let i in t[n]){let s=t[n][i];if(tu(s))if(s.isRenderTargetTexture)Ut("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null;else e[n][i]=s.clone();else if(Array.isArray(s))if(tu(s[0])){let r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();e[n][i]=r}else e[n][i]=s.slice();else e[n][i]=s}}return e}function We(t){let e={};for(let n=0;n<t.length;n++){let i=ki(t[n]);for(let s in i)e[s]=i[s]}return e}function tu(t){return t&&(t.isColor||t.isMatrix3||t.isMatrix4||t.isVector2||t.isVector3||t.isVector4||t.isTexture||t.isQuaternion)}function qp(t){let e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function uc(t){let e=t.getRenderTarget();if(e===null)return t.outputColorSpace;if(e.isXRRenderTarget===!0)return e.texture.colorSpace;return ee.workingColorSpace}var fd={clone:ki,merge:We},Yp=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Zp=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class dn extends $n{constructor(t){super();if(this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Yp,this.fragmentShader=Zp,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0)this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=ki(t.uniforms),this.uniformsGroups=qp(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let i in this.uniforms){let r=this.uniforms[i].value;if(r&&r.isTexture)e.uniforms[i]={type:"t",value:r.toJSON(t).uuid};else if(r&&r.isColor)e.uniforms[i]={type:"c",value:r.getHex()};else if(r&&r.isVector2)e.uniforms[i]={type:"v2",value:r.toArray()};else if(r&&r.isVector3)e.uniforms[i]={type:"v3",value:r.toArray()};else if(r&&r.isVector4)e.uniforms[i]={type:"v4",value:r.toArray()};else if(r&&r.isMatrix3)e.uniforms[i]={type:"m3",value:r.toArray()};else if(r&&r.isMatrix4)e.uniforms[i]={type:"m4",value:r.toArray()};else e.uniforms[i]={value:r}}if(Object.keys(this.defines).length>0)e.defines=this.defines;e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let i in this.extensions)if(this.extensions[i]===!0)n[i]=!0;if(Object.keys(n).length>0)e.extensions=n;return e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let n in t.uniforms){let i=t.uniforms[n];switch(this.uniforms[n]={},i.type){case"t":this.uniforms[n].value=e[i.value]||null;break;case"c":this.uniforms[n].value=new Zt().setHex(i.value);break;case"v2":this.uniforms[n].value=new K().fromArray(i.value);break;case"v3":this.uniforms[n].value=new P().fromArray(i.value);break;case"v4":this.uniforms[n].value=new Me().fromArray(i.value);break;case"m3":this.uniforms[n].value=new Vt().fromArray(i.value);break;case"m4":this.uniforms[n].value=new re().fromArray(i.value);break;default:this.uniforms[n].value=i.value}}if(t.defines!==void 0)this.defines=t.defines;if(t.vertexShader!==void 0)this.vertexShader=t.vertexShader;if(t.fragmentShader!==void 0)this.fragmentShader=t.fragmentShader;if(t.glslVersion!==void 0)this.glslVersion=t.glslVersion;if(t.extensions!==void 0)for(let n in t.extensions)this.extensions[n]=t.extensions[n];if(t.lights!==void 0)this.lights=t.lights;if(t.clipping!==void 0)this.clipping=t.clipping;return this}}class dc extends dn{constructor(t){super(t);this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Gi extends $n{constructor(t){super();this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Zt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Zt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new K(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Xn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class fc extends $n{constructor(t){super();this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=3200,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class pc extends $n{constructor(t){super();this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}function ha(t,e){if(!t||t.constructor===e)return t;if(typeof e.BYTES_PER_ELEMENT==="number")return new e(t);return Array.prototype.slice.call(t)}class Hi{constructor(t,e,n,i){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,i=e[n],s=e[n-1];n:{t:{let r;e:{i:if(!(t<i)){for(let a=n+2;;){if(i===void 0){if(t<s)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(s=i,i=e[++n],t<i)break t}r=e.length;break e}if(!(t>=s)){let a=e[1];if(t<a)n=2,s=a;for(let o=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===o)break;if(i=s,s=e[--n-1],t>=s)break t}r=n,n=0;break e}break n}while(n<r){let a=n+r>>>1;if(t<e[a])r=a;else n=a+1}if(i=e[n],s=e[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,i)}return this.interpolate_(n,s,t,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=t*i;for(let r=0;r!==i;++r)e[r]=n[s+r];return e}interpolate_(){throw Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}}class mc extends Hi{constructor(t,e,n,i){super(t,e,n,i);this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:2400,endingEnd:2400}}intervalChanged_(t,e,n){let i=this.parameterPositions,s=t-2,r=t+1,a=i[s],o=i[r];if(a===void 0)switch(this.getSettings_().endingStart){case 2401:s=t,a=2*e-n;break;case 2402:s=i.length-2,a=e+i[s]-i[s+1];break;default:s=t,a=n}if(o===void 0)switch(this.getSettings_().endingEnd){case 2401:r=t,o=2*n-e;break;case 2402:r=1,o=n+i[1]-i[0];break;default:r=t-1,o=e}let l=(n-e)*0.5,c=this.valueSize;this._weightPrev=l/(e-a),this._weightNext=l/(o-n),this._offsetPrev=s*c,this._offsetNext=r*c}interpolate_(t,e,n,i){let s=this.resultBuffer,r=this.sampleValues,a=this.valueSize,o=t*a,l=o-a,c=this._offsetPrev,h=this._offsetNext,d=this._weightPrev,u=this._weightNext,f=(n-e)/(i-e),g=f*f,v=g*f,m=-d*v+2*d*g-d*f,p=(1+d)*v+(-1.5-2*d)*g+(-0.5+d)*f+1,R=(-1-u)*v+(1.5+u)*g+0.5*f,E=u*v-u*g;for(let x=0;x!==a;++x)s[x]=m*r[c+x]+p*r[l+x]+R*r[o+x]+E*r[h+x];return s}}class gc extends Hi{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){let s=this.resultBuffer,r=this.sampleValues,a=this.valueSize,o=t*a,l=o-a,c=(n-e)/(i-e),h=1-c;for(let d=0;d!==a;++d)s[d]=r[l+d]*h+r[o+d]*c;return s}}class _c extends Hi{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t){return this.copySampleValue_(t-1)}}class xc extends Hi{interpolate_(t,e,n,i){let s=this.resultBuffer,r=this.sampleValues,a=this.valueSize,o=t*a,l=o-a,c=this.inTangents,h=this.outTangents;if(!c||!h){let f=(n-e)/(i-e),g=1-f;for(let v=0;v!==a;++v)s[v]=r[l+v]*g+r[o+v]*f;return s}let d=a*2,u=t-1;for(let f=0;f!==a;++f){let g=r[l+f],v=r[o+f],m=u*d+f*2,p=h[m],R=h[m+1],E=t*d+f*2,x=c[E],T=c[E+1],w=(n-e)/(i-e),A,_,M,U,C;for(let k=0;k<8;k++){A=w*w,_=A*w,M=1-w,U=M*M,C=U*M;let F=C*e+3*U*w*p+3*M*A*x+_*i-n;if(Math.abs(F)<0.0000000001)break;let V=3*U*(p-e)+6*M*w*(x-p)+3*A*(i-x);if(Math.abs(V)<0.0000000001)break;w=w-F/V,w=Math.max(0,Math.min(1,w))}s[f]=C*g+3*U*w*R+3*M*A*T+_*v}return s}}class fn{constructor(t,e,n,i){if(t===void 0)throw Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=ha(e,this.TimeBufferType),this.values=ha(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:ha(t.times,Array),values:ha(t.values,Array)};let i=t.getInterpolation();if(i!==t.DefaultInterpolation)n.interpolation=i}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new _c(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new gc(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new mc(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new xc(this.times,this.values,this.getValueSize(),t);if(this.settings)e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents;return e}setInterpolation(t){let e;switch(t){case 2300:e=this.InterpolantFactoryMethodDiscrete;break;case 2301:e=this.InterpolantFactoryMethodLinear;break;case 2302:e=this.InterpolantFactoryMethodSmooth;break;case 2303:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw Error(n);return Ut("KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return 2300;case this.InterpolantFactoryMethodLinear:return 2301;case this.InterpolantFactoryMethodSmooth:return 2302;case this.InterpolantFactoryMethodBezier:return 2303}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]*=t}return this}trim(t,e){let n=this.times,i=n.length,s=0,r=i-1;while(s!==i&&n[s]<t)++s;while(r!==-1&&n[r]>e)--r;if(++r,s!==0||r!==i){if(s>=r)r=Math.max(r,1),s=r-1;let a=this.getValueSize();this.times=n.slice(s,r),this.values=this.values.slice(s*a,r*a)}return this}validate(){let t=!0,e=this.getValueSize();if(e-Math.floor(e)!==0)Bt("KeyframeTrack: Invalid value size in track.",this),t=!1;let n=this.times,i=this.values,s=n.length;if(s===0)Bt("KeyframeTrack: Track is empty.",this),t=!1;let r=null;for(let a=0;a!==s;a++){let o=n[a];if(typeof o==="number"&&isNaN(o)){Bt("KeyframeTrack: Time is not a valid number.",this,a,o),t=!1;break}if(r!==null&&r>o){Bt("KeyframeTrack: Out of order keys.",this,a,o,r),t=!1;break}r=o}if(i!==void 0){if(Of(i))for(let a=0,o=i.length;a!==o;++a){let l=i[a];if(isNaN(l)){Bt("KeyframeTrack: Value is not a valid number.",this,a,l),t=!1;break}}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===2302,s=t.length-1,r=1;for(let a=1;a<s;++a){let o=!1,l=t[a],c=t[a+1];if(l!==c&&(a!==1||l!==t[0]))if(!i){let h=a*n,d=h-n,u=h+n;for(let f=0;f!==n;++f){let g=e[h+f];if(g!==e[d+f]||g!==e[u+f]){o=!0;break}}}else o=!0;if(o){if(a!==r){t[r]=t[a];let h=a*n,d=r*n;for(let u=0;u!==n;++u)e[d+u]=e[h+u]}++r}}if(s>0){t[r]=t[s];for(let a=s*n,o=r*n,l=0;l!==n;++l)e[o+l]=e[a+l];++r}if(r!==t.length)this.times=t.slice(0,r),this.values=e.slice(0,r*n);else this.times=t,this.values=e;return this}clone(){let t=this.times.slice(),e=this.values.slice(),i=new this.constructor(this.name,t,e);return i.createInterpolant=this.createInterpolant,i}}fn.prototype.ValueTypeName="";fn.prototype.TimeBufferType=Float32Array;fn.prototype.ValueBufferType=Float32Array;fn.prototype.DefaultInterpolation=2301;class Vi extends fn{constructor(t,e,n){super(t,e,n)}}Vi.prototype.ValueTypeName="bool";Vi.prototype.ValueBufferType=Array;Vi.prototype.DefaultInterpolation=2300;Vi.prototype.InterpolantFactoryMethodLinear=void 0;Vi.prototype.InterpolantFactoryMethodSmooth=void 0;class yc extends fn{constructor(t,e,n,i){super(t,e,n,i)}}yc.prototype.ValueTypeName="color";class vc extends fn{constructor(t,e,n,i){super(t,e,n,i)}}vc.prototype.ValueTypeName="number";class Mc extends Hi{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){let s=this.resultBuffer,r=this.sampleValues,a=this.valueSize,o=(n-e)/(i-e),l=t*a;for(let c=l+a;l!==c;l+=4)cn.slerpFlat(s,0,r,l-a,r,l,o);return s}}class Wa extends fn{constructor(t,e,n,i){super(t,e,n,i)}InterpolantFactoryMethodLinear(t){return new Mc(this.times,this.values,this.getValueSize(),t)}}Wa.prototype.ValueTypeName="quaternion";Wa.prototype.InterpolantFactoryMethodSmooth=void 0;class Wi extends fn{constructor(t,e,n){super(t,e,n)}}Wi.prototype.ValueTypeName="string";Wi.prototype.ValueBufferType=Array;Wi.prototype.DefaultInterpolation=2300;Wi.prototype.InterpolantFactoryMethodLinear=void 0;Wi.prototype.InterpolantFactoryMethodSmooth=void 0;class Sc extends fn{constructor(t,e,n,i){super(t,e,n,i)}}Sc.prototype.ValueTypeName="vector";class bc{constructor(t,e,n){let i=this,s=!1,r=0,a=0,o=void 0,l=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this._abortController=null,this.itemStart=function(c){if(a++,s===!1){if(i.onStart!==void 0)i.onStart(c,r,a)}s=!0},this.itemEnd=function(c){if(r++,i.onProgress!==void 0)i.onProgress(c,r,a);if(r===a){if(s=!1,i.onLoad!==void 0)i.onLoad()}},this.itemError=function(c){if(i.onError!==void 0)i.onError(c)},this.resolveURL=function(c){if(c=c.normalize("NFC"),o)return o(c);return c},this.setURLModifier=function(c){return o=c,this},this.addHandler=function(c,h){return l.push(c,h),this},this.removeHandler=function(c){let h=l.indexOf(c);if(h!==-1)l.splice(h,2);return this},this.getHandler=function(c){for(let h=0,d=l.length;h<d;h+=2){let u=l[h],f=l[h+1];if(u.global)u.lastIndex=0;if(u.test(c))return f}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){if(!this._abortController)this._abortController=new AbortController;return this._abortController}}var pd=new bc;class Ec{constructor(t){if(this.manager=t!==void 0?t:pd,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u")__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let n=this;return new Promise(function(i,s){n.load(t,i,e,s)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}}Ec.DEFAULT_MATERIAL_NAME="__DEFAULT";class Xa extends ve{constructor(t,e=1){super();this.isLight=!0,this.type="Light",this.color=new Zt(t),this.intensity=e}dispose(){this.dispatchEvent({type:"dispose"})}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}}class qa extends Xa{constructor(t,e,n){super(t,n);this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(ve.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Zt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){let e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}}var Zo=new re,eu=new P,nu=new P;class md{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new K(512,512),this.mapType=1009,this.map=null,this.mapPass=null,this.matrix=new re,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new xr,this._frameExtents=new K(1,1),this._viewportCount=1,this._viewports=[new Me(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera,n=this.matrix;if(eu.setFromMatrixPosition(t.matrixWorld),e.position.copy(eu),nu.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(nu),e.updateMatrixWorld(),Zo.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Zo,e.coordinateSystem,e.reversedDepth),e.coordinateSystem===2001||e.reversedDepth)n.set(0.5,0,0,0.5,0,0.5,0,0.5,0,0,1,0,0,0,0,1);else n.set(0.5,0,0,0.5,0,0.5,0,0.5,0,0,0.5,0.5,0,0,0,1);n.multiply(Zo)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){if(this.map)this.map.dispose();if(this.mapPass)this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};if(this.intensity!==1)t.intensity=this.intensity;if(this.bias!==0)t.bias=this.bias;if(this.normalBias!==0)t.normalBias=this.normalBias;if(this.radius!==1)t.radius=this.radius;if(this.mapSize.x!==512||this.mapSize.y!==512)t.mapSize=this.mapSize.toArray();return t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}var ua=new P,da=new cn,wn=new P;class Ya extends ve{constructor(){super();this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new re,this.projectionMatrix=new re,this.projectionMatrixInverse=new re,this.coordinateSystem=2000,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){if(super.updateMatrixWorld(t),this.matrixWorld.decompose(ua,da,wn),wn.x===1&&wn.y===1&&wn.z===1)this.matrixWorldInverse.copy(this.matrixWorld).invert();else this.matrixWorldInverse.compose(ua,da,wn.set(1,1,1)).invert()}updateWorldMatrix(t,e,n=!1){if(super.updateWorldMatrix(t,e,n),this.matrixWorld.decompose(ua,da,wn),wn.x===1&&wn.y===1&&wn.z===1)this.matrixWorldInverse.copy(this.matrixWorld).invert();else this.matrixWorldInverse.compose(ua,da,wn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}var oi=new P,iu=new K,su=new K;class Ze extends Ya{constructor(t=50,e=1,n=0.1,i=2000){super();this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=0.5*this.getFilmHeight()/t;this.fov=vs*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(_s*0.5*this.fov);return 0.5*this.getFilmHeight()/t}getEffectiveFOV(){return vs*2*Math.atan(Math.tan(_s*0.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){oi.set(-1,-1,0.5).applyMatrix4(this.projectionMatrixInverse),e.set(oi.x,oi.y).multiplyScalar(-t/oi.z),oi.set(1,1,0.5).applyMatrix4(this.projectionMatrixInverse),n.set(oi.x,oi.y).multiplyScalar(-t/oi.z)}getViewSize(t,e){return this.getViewBounds(t,iu,su),e.subVectors(su,iu)}setViewOffset(t,e,n,i,s,r){if(this.aspect=t/e,this.view===null)this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1};this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){if(this.view!==null)this.view.enabled=!1;this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(_s*0.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,s=-0.5*i,r=this.view;if(this.view!==null&&this.view.enabled){let{fullWidth:o,fullHeight:l}=r;s+=r.offsetX*i/o,e-=r.offsetY*n/l,i*=r.width/o,n*=r.height/l}let a=this.filmOffset;if(a!==0)s+=t*a/this.getFilmWidth();this.projectionMatrix.makePerspective(s,s+i,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);if(e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null)e.object.view=Object.assign({},this.view);return e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}class Tr extends Ya{constructor(t=-1,e=1,n=1,i=-1,s=0.1,r=2000){super();this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=s,this.far=r,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,s,r){if(this.view===null)this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1};this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){if(this.view!==null)this.view.enabled=!1;this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2,s=n-t,r=n+t,a=i+e,o=i-e;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,c=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,r=s+l*this.view.width,a-=c*this.view.offsetY,o=a-c*this.view.height}this.projectionMatrix.makeOrthographic(s,r,a,o,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);if(e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null)e.object.view=Object.assign({},this.view);return e}}class gd extends md{constructor(){super(new Tr(-5,5,5,-5,0.5,500));this.isDirectionalLightShadow=!0}}class Za extends Xa{constructor(t,e){super(t,e);this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ve.DEFAULT_UP),this.updateMatrix(),this.target=new ve,this.shadow=new gd}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}}var ms=-90,gs=1;class Tc extends ve{constructor(t,e,n){super();this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let i=new Ze(ms,gs,t,e);i.layers=this.layers,this.add(i);let s=new Ze(ms,gs,t,e);s.layers=this.layers,this.add(s);let r=new Ze(ms,gs,t,e);r.layers=this.layers,this.add(r);let a=new Ze(ms,gs,t,e);a.layers=this.layers,this.add(a);let o=new Ze(ms,gs,t,e);o.layers=this.layers,this.add(o);let l=new Ze(ms,gs,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,i,s,r,a,o]=e;for(let l of e)this.remove(l);if(t===2000)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),r.up.set(0,0,1),r.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),o.up.set(0,1,0),o.lookAt(0,0,-1);else if(t===2001)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),r.up.set(0,0,-1),r.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),o.up.set(0,-1,0),o.lookAt(0,0,-1);else throw Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let l of e)this.add(l),l.updateMatrixWorld()}update(t,e){if(this.parent===null)this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:i}=this;if(this.coordinateSystem!==t.coordinateSystem)this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem();let[s,r,a,o,l,c]=this.children,h=t.getRenderTarget(),d=t.getActiveCubeFace(),u=t.getActiveMipmapLevel(),f=t.xr.enabled;t.xr.enabled=!1;let g=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let v=!1;if(t.isWebGLRenderer===!0)v=t.state.buffers.depth.getReversed();else v=t.reversedDepthBuffer;if(t.setRenderTarget(n,0,i),v&&t.autoClear===!1)t.clearDepth();if(t.render(e,s),t.setRenderTarget(n,1,i),v&&t.autoClear===!1)t.clearDepth();if(t.render(e,r),t.setRenderTarget(n,2,i),v&&t.autoClear===!1)t.clearDepth();if(t.render(e,a),t.setRenderTarget(n,3,i),v&&t.autoClear===!1)t.clearDepth();if(t.render(e,o),t.setRenderTarget(n,4,i),v&&t.autoClear===!1)t.clearDepth();if(t.render(e,l),n.texture.generateMipmaps=g,t.setRenderTarget(n,5,i),v&&t.autoClear===!1)t.clearDepth();t.render(e,c),t.setRenderTarget(h,d,u),t.xr.enabled=f,n.texture.needsPMREMUpdate=!0}}class wc extends Ze{constructor(t=[]){super();this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}var Ac="\\[\\]\\.:\\/",$p=new RegExp("["+Ac+"]","g"),Rc="[^"+Ac+"]",Jp="[^"+Ac.replace("\\.","")+"]",Kp=/((?:WC+[\/:])*)/.source.replace("WC",Rc),jp=/(WCOD+)?/.source.replace("WCOD",Jp),Qp=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Rc),tm=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Rc),em=new RegExp("^"+Kp+jp+Qp+tm+"$"),nm=["material","materials","bones","map"];class _d{constructor(t,e,n){let i=n||ce.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,i)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,i=this._bindings[n];if(i!==void 0)i.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,s=n.length;i!==s;++i)n[i].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}}class ce{constructor(t,e,n){this.path=e,this.parsedPath=n||ce.parseTrackName(e),this.node=ce.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){if(!(t&&t.isAnimationObjectGroup))return new ce(t,e,n);else return new ce.Composite(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace($p,"")}static parseTrackName(t){let e=em.exec(t);if(e===null)throw Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){let s=n.nodeName.substring(i+1);if(nm.indexOf(s)!==-1)n.nodeName=n.nodeName.substring(0,i),n.objectName=s}if(n.propertyName===null||n.propertyName.length===0)throw Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(s){for(let r=0;r<s.length;r++){let a=s[r];if(a.name===e||a.uuid===e)return a;let o=n(a.children);if(o)return o}return null},i=n(t.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)t[e++]=n[i]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,{objectName:n,propertyName:i,propertyIndex:s}=e;if(!t)t=ce.findNode(this.rootNode,e.nodeName),this.node=t;if(this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){Ut("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=e.objectIndex;switch(n){case"materials":if(!t.material){Bt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){Bt("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){Bt("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let c=0;c<t.length;c++)if(t[c].name===l){l=c;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){Bt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){Bt("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){Bt("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(l!==void 0){if(t[l]===void 0){Bt("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[l]}}let r=t[i];if(r===void 0){let l=e.nodeName;Bt("PropertyBinding: Trying to update property for track: "+l+"."+i+" but it wasn't found.",t);return}let a=this.Versioning.None;if(this.targetObject=t,t.isMaterial===!0)a=this.Versioning.NeedsUpdate;else if(t.isObject3D===!0)a=this.Versioning.MatrixWorldNeedsUpdate;let o=this.BindingType.Direct;if(s!==void 0){if(i==="morphTargetInfluences"){if(!t.geometry){Bt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){Bt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}if(t.morphTargetDictionary[s]!==void 0)s=t.morphTargetDictionary[s]}o=this.BindingType.ArrayElement,this.resolvedProperty=r,this.propertyIndex=s}else if(r.fromArray!==void 0&&r.toArray!==void 0)o=this.BindingType.HasFromToArray,this.resolvedProperty=r;else if(Array.isArray(r))o=this.BindingType.EntireArray,this.resolvedProperty=r;else this.propertyName=i;this.getValue=this.GetterByBindingType[o],this.setValue=this.SetterByBindingTypeAndVersioning[o][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}ce.Composite=_d;ce.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};ce.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};ce.prototype.GetterByBindingType=[ce.prototype._getValue_direct,ce.prototype._getValue_array,ce.prototype._getValue_arrayElement,ce.prototype._getValue_toArray];ce.prototype.SetterByBindingTypeAndVersioning=[[ce.prototype._setValue_direct,ce.prototype._setValue_direct_setNeedsUpdate,ce.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[ce.prototype._setValue_array,ce.prototype._setValue_array_setNeedsUpdate,ce.prototype._setValue_array_setMatrixWorldNeedsUpdate],[ce.prototype._setValue_arrayElement,ce.prototype._setValue_arrayElement_setNeedsUpdate,ce.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[ce.prototype._setValue_fromArray,ce.prototype._setValue_fromArray_setNeedsUpdate,ce.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var qy=new Float32Array(1);var ru=new re;class Is{constructor(t,e,n=0,i=1/0){this.ray=new Ni(t,e),this.near=n,this.far=i,this.camera=null,this.layers=new pr,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){if(e.isPerspectiveCamera)this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,0.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e;else if(e.isOrthographicCamera)this.ray.origin.set(t.x,t.y,e.projectionMatrix.elements[14]).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e;else Bt("Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return ru.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(ru),this}intersectObject(t,e=!0,n=[]){return jo(t,this,n,e),n.sort(au),n}intersectObjects(t,e=!0,n=[]){for(let i=0,s=t.length;i<s;i++)jo(t[i],this,n,e);return n.sort(au),n}}function au(t,e){return t.distance-e.distance}function jo(t,e,n,i){let s=!0;if(t.layers.test(e.layers)){if(t.raycast(e,n)===!1)s=!1}if(s===!0&&i===!0){let r=t.children;for(let a=0,o=r.length;a<o;a++)jo(r[a],e,n,!0)}}class $a{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,Ut("Clock: This module has been deprecated. Please use THREE.Timer instead.")}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let e=performance.now();t=(e-this.oldTime)/1000,this.oldTime=e,this.elapsedTime+=t}return t}}class di{constructor(t=1,e=0,n=0){this.radius=t,this.phi=e,this.theta=n}set(t,e,n){return this.radius=t,this.phi=e,this.theta=n,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=$t(this.phi,0.000001,Math.PI-0.000001),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){if(this.radius=Math.sqrt(t*t+e*e+n*n),this.radius===0)this.theta=0,this.phi=0;else this.theta=Math.atan2(t,n),this.phi=Math.acos($t(e/this.radius,-1,1));return this}clone(){return new this.constructor().copy(this)}}class Cc{static{Cc.prototype.isMatrix2=!0}constructor(t,e,n,i){if(this.elements=[1,0,0,1],t!==void 0)this.set(t,e,n,i)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let n=0;n<4;n++)this.elements[n]=t[n+e];return this}set(t,e,n,i){let s=this.elements;return s[0]=t,s[2]=e,s[1]=n,s[3]=i,this}}class Ja extends Ln{constructor(t,e=null){super();this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(t){if(t===void 0){Ut("Controls: connect() now requires an element.");return}if(this.domElement!==null)this.disconnect();this.domElement=t}disconnect(){}dispose(){}update(){}}function Pc(t,e,n,i){let s=im(i);switch(n){case 1021:return t*e;case 1028:return t*e/s.components*s.byteLength;case 1029:return t*e/s.components*s.byteLength;case 1030:return t*e*2/s.components*s.byteLength;case 1031:return t*e*2/s.components*s.byteLength;case 1022:return t*e*3/s.components*s.byteLength;case 1023:return t*e*4/s.components*s.byteLength;case 1033:return t*e*4/s.components*s.byteLength;case 33776:case 33777:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case 33778:case 33779:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case 35841:case 35843:return Math.max(t,16)*Math.max(e,8)/4;case 35840:case 35842:return Math.max(t,8)*Math.max(e,8)/2;case 36196:case 37492:case 37488:case 37489:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case 37496:case 37490:case 37491:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case 37808:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case 37809:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case 37810:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case 37811:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case 37812:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case 37813:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case 37814:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case 37815:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case 37816:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case 37817:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case 37818:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case 37819:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case 37820:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case 37821:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case 36492:case 36494:case 36495:return Math.ceil(t/4)*Math.ceil(e/4)*16;case 36283:case 36284:return Math.ceil(t/4)*Math.ceil(e/4)*8;case 36285:case 36286:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw Error(`Unable to determine texture byte length for ${n} format.`)}function im(t){switch(t){case 1009:case 1010:return{byteLength:1,components:1};case 1012:case 1011:case 1016:return{byteLength:2,components:1};case 1017:case 1018:return{byteLength:2,components:4};case 1014:case 1013:case 1015:return{byteLength:4,components:1};case 35902:case 35899:return{byteLength:4,components:3}}throw Error(`THREE.TextureUtils: Unknown texture type ${t}.`)}if(typeof __THREE_DEVTOOLS__<"u")__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"185"}}));if(typeof window<"u")if(window.__THREE__)Ut("WARNING: Multiple instances of Three.js being imported.");else window.__THREE__="185";function kd(){let t=null,e=!1,n=null,i=null;function s(r,a){n(r,a),i=t.requestAnimationFrame(s)}return{start:function(){if(e===!0)return;if(n===null)return;if(t===null)return;i=t.requestAnimationFrame(s),e=!0},stop:function(){if(t!==null)t.cancelAnimationFrame(i);e=!1},setAnimationLoop:function(r){n=r},setContext:function(r){t=r}}}function om(t){let e=new WeakMap;function n(o,l){let{array:c,usage:h}=o,d=c.byteLength,u=t.createBuffer();t.bindBuffer(l,u),t.bufferData(l,c,h),o.onUploadCallback();let f;if(c instanceof Float32Array)f=t.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=t.HALF_FLOAT;else if(c instanceof Uint16Array)if(o.isFloat16BufferAttribute)f=t.HALF_FLOAT;else f=t.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=t.SHORT;else if(c instanceof Uint32Array)f=t.UNSIGNED_INT;else if(c instanceof Int32Array)f=t.INT;else if(c instanceof Int8Array)f=t.BYTE;else if(c instanceof Uint8Array)f=t.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=t.UNSIGNED_BYTE;else throw Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:d}}function i(o,l,c){let{array:h,updateRanges:d}=l;if(t.bindBuffer(c,o),d.length===0)t.bufferSubData(c,0,h);else{d.sort((f,g)=>f.start-g.start);let u=0;for(let f=1;f<d.length;f++){let g=d[u],v=d[f];if(v.start<=g.start+g.count+1)g.count=Math.max(g.count,v.start+v.count-g.start);else++u,d[u]=v}d.length=u+1;for(let f=0,g=d.length;f<g;f++){let v=d[f];t.bufferSubData(c,v.start*h.BYTES_PER_ELEMENT,h,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){if(o.isInterleavedBufferAttribute)o=o.data;return e.get(o)}function r(o){if(o.isInterleavedBufferAttribute)o=o.data;let l=e.get(o);if(l)t.deleteBuffer(l.buffer),e.delete(o)}function a(o,l){if(o.isInterleavedBufferAttribute)o=o.data;if(o.isGLBufferAttribute){let h=e.get(o);if(!h||h.version<o.version)e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=e.get(o);if(c===void 0)e.set(o,n(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var lm=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,cm=`#ifdef USE_ALPHAHASH
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
#endif`,hm=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,um=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,dm=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,fm=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,pm=`#ifdef USE_AOMAP
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
#endif`,mm=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,gm=`#ifdef USE_BATCHING
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
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,_m=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,xm=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,ym=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,vm=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Mm=`#ifdef USE_IRIDESCENCE
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
#endif`,Sm=`#ifdef USE_BUMPMAP
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
#endif`,bm=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Em=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Tm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,wm=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Am=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Rm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Cm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Pm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,Im=`#define PI 3.141592653589793
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
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
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
} // validated`,Lm=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Dm=`vec3 transformedNormal = objectNormal;
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
#endif`,Nm=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Um=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Fm=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Om=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Bm="gl_FragColor = linearToOutputTexel( gl_FragColor );",zm=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,km=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,Gm=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Hm=`#ifdef USE_ENVMAP
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
#endif`,Vm=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Wm=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Xm=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,qm=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Ym=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Zm=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,$m=`#ifdef USE_GRADIENTMAP
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
}`,Jm=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Km=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,jm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Qm=`uniform bool receiveShadow;
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
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
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
#endif
#include <lightprobes_pars_fragment>`,tg=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
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
#endif`,eg=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,ng=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,ig=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,sg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,rg=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
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
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
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
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
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
#endif`,ag=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
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
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
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
		return 0.5 / max( gv + gl, EPSILON );
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
	vec3 f0 = material.specularColorBlended;
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
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
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
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
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
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
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
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
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
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,og=`
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
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
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
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
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
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,lg=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
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
#endif`,cg=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,hg=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,ug=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,dg=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,fg=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,pg=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,mg=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,gg=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,_g=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,xg=`#if defined( USE_POINTS_UV )
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
#endif`,yg=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,vg=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Mg=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Sg=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,bg=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Eg=`#ifdef USE_MORPHTARGETS
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
#endif`,Tg=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,wg=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
	#ifdef DOUBLE_SIDED
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
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Ag=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Rg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Cg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Pg=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Ig=`#ifdef USE_NORMALMAP
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
#endif`,Lg=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Dg=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Ng=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Ug=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Fg=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Og=`vec3 packNormalToRGB( const in vec3 normal ) {
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
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,Bg=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,zg=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,kg=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Gg=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Hg=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Vg=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Wg=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
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
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
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
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
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
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,Xg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,qg=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
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
#endif`,Yg=`float getShadowMask() {
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
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
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
}`,Zg=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,$g=`#ifdef USE_SKINNING
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
#endif`,Jg=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Kg=`#ifdef USE_SKINNING
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
#endif`,jg=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Qg=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,t0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,e0=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,n0=`#ifdef USE_TRANSMISSION
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
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,i0=`#ifdef USE_TRANSMISSION
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
#endif`,s0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,r0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,a0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,o0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,l0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,c0=`uniform sampler2D t2D;
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
}`,h0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,u0=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,d0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,f0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,p0=`#include <common>
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
}`,m0=`#if DEPTH_PACKING == 3200
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
}`,g0=`#define DISTANCE
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
}`;var _0=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,x0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,y0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,v0=`uniform float scale;
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
}`,M0=`uniform vec3 diffuse;
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
}`,S0=`#include <common>
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
}`,b0=`uniform vec3 diffuse;
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
}`,E0=`#define LAMBERT
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
}`,T0=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
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
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
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
}`,w0=`#define MATCAP
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
}`,A0=`#define MATCAP
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
}`,R0=`#define NORMAL
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
}`,C0=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
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
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,P0=`#define PHONG
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
}`,I0=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
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
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
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
}`,L0=`#define STANDARD
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
}`,D0=`#define STANDARD
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
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
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
}`,N0=`#define TOON
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
}`,U0=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
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
}`,F0=`uniform float size;
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
}`,O0=`uniform vec3 diffuse;
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
}`,B0=`#include <common>
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
}`,z0=`uniform vec3 color;
uniform float opacity;
#include <common>
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
	#include <premultiplied_alpha_fragment>
}`,k0=`uniform float rotation;
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
}`,G0=`uniform vec3 diffuse;
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
}`,Jt={alphahash_fragment:lm,alphahash_pars_fragment:cm,alphamap_fragment:hm,alphamap_pars_fragment:um,alphatest_fragment:dm,alphatest_pars_fragment:fm,aomap_fragment:pm,aomap_pars_fragment:mm,batching_pars_vertex:gm,batching_vertex:_m,begin_vertex:xm,beginnormal_vertex:ym,bsdfs:vm,iridescence_fragment:Mm,bumpmap_pars_fragment:Sm,clipping_planes_fragment:bm,clipping_planes_pars_fragment:Em,clipping_planes_pars_vertex:Tm,clipping_planes_vertex:wm,color_fragment:Am,color_pars_fragment:Rm,color_pars_vertex:Cm,color_vertex:Pm,common:Im,cube_uv_reflection_fragment:Lm,defaultnormal_vertex:Dm,displacementmap_pars_vertex:Nm,displacementmap_vertex:Um,emissivemap_fragment:Fm,emissivemap_pars_fragment:Om,colorspace_fragment:Bm,colorspace_pars_fragment:zm,envmap_fragment:km,envmap_common_pars_fragment:Gm,envmap_pars_fragment:Hm,envmap_pars_vertex:Vm,envmap_physical_pars_fragment:tg,envmap_vertex:Wm,fog_vertex:Xm,fog_pars_vertex:qm,fog_fragment:Ym,fog_pars_fragment:Zm,gradientmap_pars_fragment:$m,lightmap_pars_fragment:Jm,lights_lambert_fragment:Km,lights_lambert_pars_fragment:jm,lights_pars_begin:Qm,lights_toon_fragment:eg,lights_toon_pars_fragment:ng,lights_phong_fragment:ig,lights_phong_pars_fragment:sg,lights_physical_fragment:rg,lights_physical_pars_fragment:ag,lights_fragment_begin:og,lights_fragment_maps:lg,lights_fragment_end:cg,lightprobes_pars_fragment:hg,logdepthbuf_fragment:ug,logdepthbuf_pars_fragment:dg,logdepthbuf_pars_vertex:fg,logdepthbuf_vertex:pg,map_fragment:mg,map_pars_fragment:gg,map_particle_fragment:_g,map_particle_pars_fragment:xg,metalnessmap_fragment:yg,metalnessmap_pars_fragment:vg,morphinstance_vertex:Mg,morphcolor_vertex:Sg,morphnormal_vertex:bg,morphtarget_pars_vertex:Eg,morphtarget_vertex:Tg,normal_fragment_begin:wg,normal_fragment_maps:Ag,normal_pars_fragment:Rg,normal_pars_vertex:Cg,normal_vertex:Pg,normalmap_pars_fragment:Ig,clearcoat_normal_fragment_begin:Lg,clearcoat_normal_fragment_maps:Dg,clearcoat_pars_fragment:Ng,iridescence_pars_fragment:Ug,opaque_fragment:Fg,packing:Og,premultiplied_alpha_fragment:Bg,project_vertex:zg,dithering_fragment:kg,dithering_pars_fragment:Gg,roughnessmap_fragment:Hg,roughnessmap_pars_fragment:Vg,shadowmap_pars_fragment:Wg,shadowmap_pars_vertex:Xg,shadowmap_vertex:qg,shadowmask_pars_fragment:Yg,skinbase_vertex:Zg,skinning_pars_vertex:$g,skinning_vertex:Jg,skinnormal_vertex:Kg,specularmap_fragment:jg,specularmap_pars_fragment:Qg,tonemapping_fragment:t0,tonemapping_pars_fragment:e0,transmission_fragment:n0,transmission_pars_fragment:i0,uv_pars_fragment:s0,uv_pars_vertex:r0,uv_vertex:a0,worldpos_vertex:o0,background_vert:l0,background_frag:c0,backgroundCube_vert:h0,backgroundCube_frag:u0,cube_vert:d0,cube_frag:f0,depth_vert:p0,depth_frag:m0,distance_vert:g0,distance_frag:_0,equirect_vert:x0,equirect_frag:y0,linedashed_vert:v0,linedashed_frag:M0,meshbasic_vert:S0,meshbasic_frag:b0,meshlambert_vert:E0,meshlambert_frag:T0,meshmatcap_vert:w0,meshmatcap_frag:A0,meshnormal_vert:R0,meshnormal_frag:C0,meshphong_vert:P0,meshphong_frag:I0,meshphysical_vert:L0,meshphysical_frag:D0,meshtoon_vert:N0,meshtoon_frag:U0,points_vert:F0,points_frag:O0,shadow_vert:B0,shadow_frag:z0,sprite_vert:k0,sprite_frag:G0},_t={common:{diffuse:{value:new Zt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Vt},alphaMap:{value:null},alphaMapTransform:{value:new Vt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Vt}},envmap:{envMap:{value:null},envMapRotation:{value:new Vt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:0.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Vt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Vt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Vt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Vt},normalScale:{value:new K(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Vt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Vt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Vt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Vt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:0.00025},fogNear:{value:1},fogFar:{value:2000},fogColor:{value:new Zt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new P},probesMax:{value:new P},probesResolution:{value:new P}},points:{diffuse:{value:new Zt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Vt},alphaTest:{value:0},uvTransform:{value:new Vt}},sprite:{diffuse:{value:new Zt(16777215)},opacity:{value:1},center:{value:new K(0.5,0.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Vt},alphaMap:{value:null},alphaMapTransform:{value:new Vt},alphaTest:{value:0}}},Nn={basic:{uniforms:We([_t.common,_t.specularmap,_t.envmap,_t.aomap,_t.lightmap,_t.fog]),vertexShader:Jt.meshbasic_vert,fragmentShader:Jt.meshbasic_frag},lambert:{uniforms:We([_t.common,_t.specularmap,_t.envmap,_t.aomap,_t.lightmap,_t.emissivemap,_t.bumpmap,_t.normalmap,_t.displacementmap,_t.fog,_t.lights,{emissive:{value:new Zt(0)},envMapIntensity:{value:1}}]),vertexShader:Jt.meshlambert_vert,fragmentShader:Jt.meshlambert_frag},phong:{uniforms:We([_t.common,_t.specularmap,_t.envmap,_t.aomap,_t.lightmap,_t.emissivemap,_t.bumpmap,_t.normalmap,_t.displacementmap,_t.fog,_t.lights,{emissive:{value:new Zt(0)},specular:{value:new Zt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Jt.meshphong_vert,fragmentShader:Jt.meshphong_frag},standard:{uniforms:We([_t.common,_t.envmap,_t.aomap,_t.lightmap,_t.emissivemap,_t.bumpmap,_t.normalmap,_t.displacementmap,_t.roughnessmap,_t.metalnessmap,_t.fog,_t.lights,{emissive:{value:new Zt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Jt.meshphysical_vert,fragmentShader:Jt.meshphysical_frag},toon:{uniforms:We([_t.common,_t.aomap,_t.lightmap,_t.emissivemap,_t.bumpmap,_t.normalmap,_t.displacementmap,_t.gradientmap,_t.fog,_t.lights,{emissive:{value:new Zt(0)}}]),vertexShader:Jt.meshtoon_vert,fragmentShader:Jt.meshtoon_frag},matcap:{uniforms:We([_t.common,_t.bumpmap,_t.normalmap,_t.displacementmap,_t.fog,{matcap:{value:null}}]),vertexShader:Jt.meshmatcap_vert,fragmentShader:Jt.meshmatcap_frag},points:{uniforms:We([_t.points,_t.fog]),vertexShader:Jt.points_vert,fragmentShader:Jt.points_frag},dashed:{uniforms:We([_t.common,_t.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Jt.linedashed_vert,fragmentShader:Jt.linedashed_frag},depth:{uniforms:We([_t.common,_t.displacementmap]),vertexShader:Jt.depth_vert,fragmentShader:Jt.depth_frag},normal:{uniforms:We([_t.common,_t.bumpmap,_t.normalmap,_t.displacementmap,{opacity:{value:1}}]),vertexShader:Jt.meshnormal_vert,fragmentShader:Jt.meshnormal_frag},sprite:{uniforms:We([_t.sprite,_t.fog]),vertexShader:Jt.sprite_vert,fragmentShader:Jt.sprite_frag},background:{uniforms:{uvTransform:{value:new Vt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Jt.background_vert,fragmentShader:Jt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Vt}},vertexShader:Jt.backgroundCube_vert,fragmentShader:Jt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Jt.cube_vert,fragmentShader:Jt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Jt.equirect_vert,fragmentShader:Jt.equirect_frag},distance:{uniforms:We([_t.common,_t.displacementmap,{referencePosition:{value:new P},nearDistance:{value:1},farDistance:{value:1000}}]),vertexShader:Jt.distance_vert,fragmentShader:Jt.distance_frag},shadow:{uniforms:We([_t.lights,_t.fog,{color:{value:new Zt(0)},opacity:{value:1}}]),vertexShader:Jt.shadow_vert,fragmentShader:Jt.shadow_frag}};Nn.physical={uniforms:We([Nn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Vt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Vt},clearcoatNormalScale:{value:new K(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Vt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Vt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Vt},sheen:{value:0},sheenColor:{value:new Zt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Vt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Vt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Vt},transmissionSamplerSize:{value:new K},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Vt},attenuationDistance:{value:0},attenuationColor:{value:new Zt(0)},specularColor:{value:new Zt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Vt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Vt},anisotropyVector:{value:new K},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Vt}}]),vertexShader:Jt.meshphysical_vert,fragmentShader:Jt.meshphysical_frag};var Ka={r:0,b:0,g:0},H0=new re,Gd=new Vt;Gd.set(-1,0,0,0,1,0,0,0,1);function V0(t,e,n,i,s,r){let a=new Zt(0),o=s===!0?0:1,l,c,h=null,d=0,u=null;function f(R){let E=R.isScene===!0?R.background:null;if(E&&E.isTexture){let x=R.backgroundBlurriness>0;E=e.get(E,x)}return E}function g(R){let E=!1,x=f(R);if(x===null)m(a,o);else if(x&&x.isColor)m(x,1),E=!0;let T=t.xr.getEnvironmentBlendMode();if(T==="additive")n.buffers.color.setClear(0,0,0,1,r);else if(T==="alpha-blend")n.buffers.color.setClear(0,0,0,0,r);if(t.autoClear||E)n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil)}function v(R,E){let x=f(E);if(x&&(x.isCubeTexture||x.mapping===cr)){if(c===void 0)c=new oe(new Sn(1,1,1),new dn({name:"BackgroundCubeMaterial",uniforms:ki(Nn.backgroundCube.uniforms),vertexShader:Nn.backgroundCube.vertexShader,fragmentShader:Nn.backgroundCube.fragmentShader,side:Ke,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(T,w,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c);if(c.material.uniforms.envMap.value=x,c.material.uniforms.backgroundBlurriness.value=E.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(H0.makeRotationFromEuler(E.backgroundRotation)).transpose(),x.isCubeTexture&&x.isRenderTargetTexture===!1)c.material.uniforms.backgroundRotation.value.premultiply(Gd);if(c.material.toneMapped=ee.getTransfer(x.colorSpace)!==me,h!==x||d!==x.version||u!==t.toneMapping)c.material.needsUpdate=!0,h=x,d=x.version,u=t.toneMapping;c.layers.enableAll(),R.unshift(c,c.geometry,c.material,0,0,null)}else if(x&&x.isTexture){if(l===void 0)l=new oe(new zi(2,2),new dn({name:"BackgroundMaterial",uniforms:ki(Nn.background.uniforms),vertexShader:Nn.background.vertexShader,fragmentShader:Nn.background.fragmentShader,side:Es,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l);if(l.material.uniforms.t2D.value=x,l.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,l.material.toneMapped=ee.getTransfer(x.colorSpace)!==me,x.matrixAutoUpdate===!0)x.updateMatrix();if(l.material.uniforms.uvTransform.value.copy(x.matrix),h!==x||d!==x.version||u!==t.toneMapping)l.material.needsUpdate=!0,h=x,d=x.version,u=t.toneMapping;l.layers.enableAll(),R.unshift(l,l.geometry,l.material,0,0,null)}}function m(R,E){R.getRGB(Ka,uc(t)),n.buffers.color.setClear(Ka.r,Ka.g,Ka.b,E,r)}function p(){if(c!==void 0)c.geometry.dispose(),c.material.dispose(),c=void 0;if(l!==void 0)l.geometry.dispose(),l.material.dispose(),l=void 0}return{getClearColor:function(){return a},setClearColor:function(R,E=1){a.set(R),o=E,m(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(R){o=R,m(a,o)},render:g,addToRenderList:v,dispose:p}}function W0(t,e){let n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},s=u(null),r=s,a=!1;function o(C,k,q,F,V){let W=!1,O=d(C,F,q,k);if(r!==O)r=O,c(r.object);if(W=f(C,F,q,V),W)g(C,F,q,V);if(V!==null)e.update(V,t.ELEMENT_ARRAY_BUFFER);if(W||a){if(a=!1,x(C,k,q,F),V!==null)t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(V).buffer)}}function l(){return t.createVertexArray()}function c(C){return t.bindVertexArray(C)}function h(C){return t.deleteVertexArray(C)}function d(C,k,q,F){let V=F.wireframe===!0,W=i[k.id];if(W===void 0)W={},i[k.id]=W;let O=C.isInstancedMesh===!0?C.id:0,j=W[O];if(j===void 0)j={},W[O]=j;let rt=j[q.id];if(rt===void 0)rt={},j[q.id]=rt;let lt=rt[V];if(lt===void 0)lt=u(l()),rt[V]=lt;return lt}function u(C){let k=[],q=[],F=[];for(let V=0;V<n;V++)k[V]=0,q[V]=0,F[V]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:k,enabledAttributes:q,attributeDivisors:F,object:C,attributes:{},index:null}}function f(C,k,q,F){let V=r.attributes,W=k.attributes,O=0,j=q.getAttributes();for(let rt in j)if(j[rt].location>=0){let Rt=V[rt],St=W[rt];if(St===void 0){if(rt==="instanceMatrix"&&C.instanceMatrix)St=C.instanceMatrix;if(rt==="instanceColor"&&C.instanceColor)St=C.instanceColor}if(Rt===void 0)return!0;if(Rt.attribute!==St)return!0;if(St&&Rt.data!==St.data)return!0;O++}if(r.attributesNum!==O)return!0;if(r.index!==F)return!0;return!1}function g(C,k,q,F){let V={},W=k.attributes,O=0,j=q.getAttributes();for(let rt in j)if(j[rt].location>=0){let Rt=W[rt];if(Rt===void 0){if(rt==="instanceMatrix"&&C.instanceMatrix)Rt=C.instanceMatrix;if(rt==="instanceColor"&&C.instanceColor)Rt=C.instanceColor}let St={};if(St.attribute=Rt,Rt&&Rt.data)St.data=Rt.data;V[rt]=St,O++}r.attributes=V,r.attributesNum=O,r.index=F}function v(){let C=r.newAttributes;for(let k=0,q=C.length;k<q;k++)C[k]=0}function m(C){p(C,0)}function p(C,k){let q=r.newAttributes,F=r.enabledAttributes,V=r.attributeDivisors;if(q[C]=1,F[C]===0)t.enableVertexAttribArray(C),F[C]=1;if(V[C]!==k)t.vertexAttribDivisor(C,k),V[C]=k}function R(){let C=r.newAttributes,k=r.enabledAttributes;for(let q=0,F=k.length;q<F;q++)if(k[q]!==C[q])t.disableVertexAttribArray(q),k[q]=0}function E(C,k,q,F,V,W,O){if(O===!0)t.vertexAttribIPointer(C,k,q,V,W);else t.vertexAttribPointer(C,k,q,F,V,W)}function x(C,k,q,F){v();let V=F.attributes,W=q.getAttributes(),O=k.defaultAttributeValues;for(let j in W){let rt=W[j];if(rt.location>=0){let lt=V[j];if(lt===void 0){if(j==="instanceMatrix"&&C.instanceMatrix)lt=C.instanceMatrix;if(j==="instanceColor"&&C.instanceColor)lt=C.instanceColor}if(lt!==void 0){let Rt=lt.normalized,St=lt.itemSize,he=e.get(lt);if(he===void 0)continue;let{buffer:ae,type:Z,bytesPerElement:ct}=he,bt=Z===t.INT||Z===t.UNSIGNED_INT||lt.gpuType===ul;if(lt.isInterleavedBufferAttribute){let dt=lt.data,Ft=dt.stride,ne=lt.offset;if(dt.isInstancedInterleavedBuffer){for(let kt=0;kt<rt.locationSize;kt++)p(rt.location+kt,dt.meshPerAttribute);if(C.isInstancedMesh!==!0&&F._maxInstanceCount===void 0)F._maxInstanceCount=dt.meshPerAttribute*dt.count}else for(let kt=0;kt<rt.locationSize;kt++)m(rt.location+kt);t.bindBuffer(t.ARRAY_BUFFER,ae);for(let kt=0;kt<rt.locationSize;kt++)E(rt.location+kt,St/rt.locationSize,Z,Rt,Ft*ct,(ne+St/rt.locationSize*kt)*ct,bt)}else{if(lt.isInstancedBufferAttribute){for(let dt=0;dt<rt.locationSize;dt++)p(rt.location+dt,lt.meshPerAttribute);if(C.isInstancedMesh!==!0&&F._maxInstanceCount===void 0)F._maxInstanceCount=lt.meshPerAttribute*lt.count}else for(let dt=0;dt<rt.locationSize;dt++)m(rt.location+dt);t.bindBuffer(t.ARRAY_BUFFER,ae);for(let dt=0;dt<rt.locationSize;dt++)E(rt.location+dt,St/rt.locationSize,Z,Rt,St*ct,St/rt.locationSize*dt*ct,bt)}}else if(O!==void 0){let Rt=O[j];if(Rt!==void 0)switch(Rt.length){case 2:t.vertexAttrib2fv(rt.location,Rt);break;case 3:t.vertexAttrib3fv(rt.location,Rt);break;case 4:t.vertexAttrib4fv(rt.location,Rt);break;default:t.vertexAttrib1fv(rt.location,Rt)}}}}R()}function T(){M();for(let C in i){let k=i[C];for(let q in k){let F=k[q];for(let V in F){let W=F[V];for(let O in W)h(W[O].object),delete W[O];delete F[V]}}delete i[C]}}function w(C){if(i[C.id]===void 0)return;let k=i[C.id];for(let q in k){let F=k[q];for(let V in F){let W=F[V];for(let O in W)h(W[O].object),delete W[O];delete F[V]}}delete i[C.id]}function A(C){for(let k in i){let q=i[k];for(let F in q){let V=q[F];if(V[C.id]===void 0)continue;let W=V[C.id];for(let O in W)h(W[O].object),delete W[O];delete V[C.id]}}}function _(C){for(let k in i){let q=i[k],F=C.isInstancedMesh===!0?C.id:0,V=q[F];if(V===void 0)continue;for(let W in V){let O=V[W];for(let j in O)h(O[j].object),delete O[j];delete V[W]}if(delete q[F],Object.keys(q).length===0)delete i[k]}}function M(){if(U(),a=!0,r===s)return;r=s,c(r.object)}function U(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:M,resetDefaultState:U,dispose:T,releaseStatesOfGeometry:w,releaseStatesOfObject:_,releaseStatesOfProgram:A,initAttributes:v,enableAttribute:m,disableUnusedAttributes:R}}function X0(t,e,n){let i;function s(l){i=l}function r(l,c){t.drawArrays(i,l,c),n.update(c,i,1)}function a(l,c,h){if(h===0)return;t.drawArraysInstanced(i,l,c,h),n.update(c,i,h)}function o(l,c,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,c,0,h);let u=0;for(let f=0;f<h;f++)u+=c[f];n.update(u,i,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function q0(t,e,n,i){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let A=e.get("EXT_texture_filter_anisotropic");s=t.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(A){if(A!==In&&i.convert(A)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))return!1;return!0}function o(A){let _=A===Yn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));if(A!==Mn&&i.convert(A)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==qn&&!_)return!1;return!0}function l(A){if(A==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";A="mediump"}if(A==="mediump"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0)return"mediump"}return"lowp"}let c=n.precision!==void 0?n.precision:"highp",h=l(c);if(h!==c)Ut("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h;let d=n.logarithmicDepthBuffer===!0,u=n.reversedDepthBuffer===!0&&e.has("EXT_clip_control");if(n.reversedDepthBuffer===!0&&u===!1)Ut("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let f=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),g=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=t.getParameter(t.MAX_TEXTURE_SIZE),m=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),p=t.getParameter(t.MAX_VERTEX_ATTRIBS),R=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),E=t.getParameter(t.MAX_VARYING_VECTORS),x=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),T=t.getParameter(t.MAX_SAMPLES),w=t.getParameter(t.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:u,maxTextures:f,maxVertexTextures:g,maxTextureSize:v,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:R,maxVaryings:E,maxFragmentUniforms:x,maxSamples:T,samples:w}}function Y0(t){let e=this,n=null,i=0,s=!1,r=!1,a=new Ye,o=new Vt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){let f=d.length!==0||u||i!==0||s;return s=u,i=d.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,u){n=h(d,u,0)},this.setState=function(d,u,f){let{clippingPlanes:g,clipIntersection:v,clipShadows:m}=d,p=t.get(d);if(!s||g===null||g.length===0||r&&!m)if(r)h(null);else c();else{let R=r?0:i,E=R*4,x=p.clippingState||null;l.value=x,x=h(g,u,E,f);for(let T=0;T!==E;++T)x[T]=n[T];p.clippingState=x,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=R}};function c(){if(l.value!==n)l.value=n,l.needsUpdate=i>0;e.numPlanes=i,e.numIntersection=0}function h(d,u,f,g){let v=d!==null?d.length:0,m=null;if(v!==0){if(m=l.value,g!==!0||m===null){let p=f+v*4,R=u.matrixWorldInverse;if(o.getNormalMatrix(R),m===null||m.length<p)m=new Float32Array(p);for(let E=0,x=f;E!==v;++E,x+=4)a.copy(d[E]).applyMatrix4(R,o),a.normal.toArray(m,x),m[x+3]=a.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,m}}var fi=4,xd=[0.125,0.215,0.35,0.446,0.526,0.582],Xi=20,Z0=256,wr=new Tr,yd=new Zt,Ic=null,Lc=0,Dc=0,Nc=!1,$0=new P;class Oc{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,n=0.1,i=100,s={}){let{size:r=256,position:a=$0}=s;Ic=this._renderer.getRenderTarget(),Lc=this._renderer.getActiveCubeFace(),Dc=this._renderer.getActiveMipmapLevel(),Nc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(r);let o=this._allocateTargets();if(o.depthBuffer=!0,this._sceneToCubeUV(t,n,i,o,a),e>0)this._blur(o,0,0,e);return this._applyPMREM(o),this._cleanup(o),o}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){if(this._cubemapMaterial===null)this._cubemapMaterial=Sd(),this._compileMaterial(this._cubemapMaterial)}compileEquirectangularShader(){if(this._equirectMaterial===null)this._equirectMaterial=Md(),this._compileMaterial(this._equirectMaterial)}dispose(){if(this._dispose(),this._cubemapMaterial!==null)this._cubemapMaterial.dispose();if(this._equirectMaterial!==null)this._equirectMaterial.dispose();if(this._backgroundBox!==null)this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){if(this._blurMaterial!==null)this._blurMaterial.dispose();if(this._ggxMaterial!==null)this._ggxMaterial.dispose();if(this._pingPongRenderTarget!==null)this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(Ic,Lc,Dc),this._renderer.xr.enabled=Nc,t.scissorTest=!1,Ls(t,0,0,t.width,t.height)}_fromTexture(t,e){if(t.mapping===ws||t.mapping===wi)this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width);else this._setSize(t.image.width/4);Ic=this._renderer.getRenderTarget(),Lc=this._renderer.getActiveCubeFace(),Dc=this._renderer.getActiveMipmapLevel(),Nc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Ve,minFilter:Ve,generateMipmaps:!1,type:Yn,format:In,colorSpace:Zl,depthBuffer:!1},i=vd(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){if(this._pingPongRenderTarget!==null)this._dispose();this._pingPongRenderTarget=vd(t,e,n);let{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=J0(s)),this._blurMaterial=j0(s,t,e),this._ggxMaterial=K0(s,t,e)}return i}_compileMaterial(t){let e=new oe(new Se,t);this._renderer.compile(e,wr)}_sceneToCubeUV(t,e,n,i,s){let o=new Ze(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,{autoClear:d,toneMapping:u}=h;if(h.getClearColor(yd),h.toneMapping=vn,h.autoClear=!1,h.state.buffers.depth.getReversed())h.setRenderTarget(i),h.clearDepth(),h.setRenderTarget(null);if(this._backgroundBox===null)this._backgroundBox=new oe(new Sn,new je({name:"PMREM.Background",side:Ke,depthWrite:!1,depthTest:!1}));let g=this._backgroundBox,v=g.material,m=!1,p=t.background;if(p){if(p.isColor)v.color.copy(p),t.background=null,m=!0}else v.color.copy(yd),m=!0;for(let R=0;R<6;R++){let E=R%3;if(E===0)o.up.set(0,l[R],0),o.position.set(s.x,s.y,s.z),o.lookAt(s.x+c[R],s.y,s.z);else if(E===1)o.up.set(0,0,l[R]),o.position.set(s.x,s.y,s.z),o.lookAt(s.x,s.y+c[R],s.z);else o.up.set(0,l[R],0),o.position.set(s.x,s.y,s.z),o.lookAt(s.x,s.y,s.z+c[R]);let x=this._cubeSize;if(Ls(i,E*x,R>2?x:0,x,x),h.setRenderTarget(i),m)h.render(g,o);h.render(t,o)}h.toneMapping=u,h.autoClear=d,t.background=p}_textureToCubeUV(t,e){let n=this._renderer,i=t.mapping===ws||t.mapping===wi;if(i){if(this._cubemapMaterial===null)this._cubemapMaterial=Sd();this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1}else if(this._equirectMaterial===null)this._equirectMaterial=Md();let s=i?this._cubemapMaterial:this._equirectMaterial,r=this._lodMeshes[0];r.material=s;let a=s.uniforms;a.envMap.value=t;let o=this._cubeSize;Ls(e,0,0,3*o,2*o),n.setRenderTarget(e),n.render(r,wr)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let i=this._lodMeshes.length;for(let s=1;s<i;s++)this._applyGGXFilter(t,s-1,s);e.autoClear=n}_applyGGXFilter(t,e,n){let i=this._renderer,s=this._pingPongRenderTarget,r=this._ggxMaterial,a=this._lodMeshes[n];a.material=r;let o=r.uniforms,l=n/(this._lodMeshes.length-1),c=e/(this._lodMeshes.length-1),h=Math.sqrt(l*l-c*c),d=0+l*1.25,u=h*d,{_lodMax:f}=this,g=this._sizeLods[n],v=3*g*(n>f-fi?n-f+fi:0),m=4*(this._cubeSize-g);o.envMap.value=t.texture,o.roughness.value=u,o.mipInt.value=f-e,Ls(s,v,m,3*g,2*g),i.setRenderTarget(s),i.render(a,wr),o.envMap.value=s.texture,o.roughness.value=0,o.mipInt.value=f-n,Ls(t,v,m,3*g,2*g),i.setRenderTarget(t),i.render(a,wr)}_blur(t,e,n,i,s){let r=this._pingPongRenderTarget;this._halfBlur(t,r,e,n,i,"latitudinal",s),this._halfBlur(r,t,n,n,i,"longitudinal",s)}_halfBlur(t,e,n,i,s,r,a){let o=this._renderer,l=this._blurMaterial;if(r!=="latitudinal"&&r!=="longitudinal")Bt("blur direction must be either latitudinal or longitudinal!");let c=3,h=this._lodMeshes[i];h.material=l;let d=l.uniforms,u=this._sizeLods[n]-1,f=isFinite(s)?Math.PI/(2*u):2*Math.PI/(2*Xi-1),g=s/f,v=isFinite(s)?1+Math.floor(c*g):Xi;if(v>Xi)Ut(`sigmaRadians, ${s}, is too large and will clip, as it requested ${v} samples when the maximum is set to ${Xi}`);let m=[],p=0;for(let w=0;w<Xi;++w){let A=w/g,_=Math.exp(-A*A/2);if(m.push(_),w===0)p+=_;else if(w<v)p+=2*_}for(let w=0;w<m.length;w++)m[w]=m[w]/p;if(d.envMap.value=t.texture,d.samples.value=v,d.weights.value=m,d.latitudinal.value=r==="latitudinal",a)d.poleAxis.value=a;let{_lodMax:R}=this;d.dTheta.value=f,d.mipInt.value=R-n;let E=this._sizeLods[i],x=3*E*(i>R-fi?i-R+fi:0),T=4*(this._cubeSize-E);Ls(e,x,T,3*E,2*E),o.setRenderTarget(e),o.render(h,wr)}}function J0(t){let e=[],n=[],i=[],s=t,r=t-fi+1+xd.length;for(let a=0;a<r;a++){let o=Math.pow(2,s);e.push(o);let l=1/o;if(a>t-fi)l=xd[a-t+fi-1];else if(a===0)l=0;n.push(l);let c=1/(o-2),h=-c,d=1+c,u=[h,h,d,h,d,d,h,h,d,d,h,d],f=6,g=6,v=3,m=2,p=1,R=new Float32Array(v*g*f),E=new Float32Array(m*g*f),x=new Float32Array(p*g*f);for(let w=0;w<f;w++){let A=w%3*2/3-1,_=w>2?0:-1,M=[A,_,0,A+0.6666666666666666,_,0,A+0.6666666666666666,_+1,0,A,_,0,A+0.6666666666666666,_+1,0,A,_+1,0];R.set(M,v*g*w),E.set(u,m*g*w);let U=[w,w,w,w,w,w];x.set(U,p*g*w)}let T=new Se;if(T.setAttribute("position",new He(R,v)),T.setAttribute("uv",new He(E,m)),T.setAttribute("faceIndex",new He(x,p)),i.push(new oe(T,null)),s>fi)s--}return{lodMeshes:i,sizeLods:e,sigmas:n}}function vd(t,e,n){let i=new hn(t,e,n);return i.texture.mapping=cr,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Ls(t,e,n,i,s){t.viewport.set(e,n,i,s),t.scissor.set(e,n,i,s)}function K0(t,e,n){return new dn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Z0,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Qa(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Pn,depthTest:!1,depthWrite:!1})}function j0(t,e,n){let i=new Float32Array(Xi),s=new P(0,1,0);return new dn({name:"SphericalGaussianBlur",defines:{n:Xi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Qa(),fragmentShader:`

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
		`,blending:Pn,depthTest:!1,depthWrite:!1})}function Md(){return new dn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Qa(),fragmentShader:`

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
		`,blending:Pn,depthTest:!1,depthWrite:!1})}function Sd(){return new dn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Qa(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Pn,depthTest:!1,depthWrite:!1})}function Qa(){return`

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
	`}class kc extends hn{constructor(t=1,e={}){super(t,t,e);this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];this.texture=new Fa(i),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new Sn(5,5,5),s=new dn({name:"CubemapFromEquirect",uniforms:ki(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ke,blending:Pn});s.uniforms.tEquirect.value=e;let r=new oe(i,s),a=e.minFilter;if(e.minFilter===Ai)e.minFilter=Ve;return new Tc(1,10,this).update(t,r),e.minFilter=a,r.geometry.dispose(),r.material.dispose(),this}clear(t,e=!0,n=!0,i=!0){let s=t.getRenderTarget();for(let r=0;r<6;r++)t.setRenderTarget(this,r),t.clear(e,n,i);t.setRenderTarget(s)}}function Q0(t){let e=new WeakMap,n=new WeakMap,i=null;function s(u,f=!1){if(u===null||u===void 0)return null;if(f)return a(u);return r(u)}function r(u){if(u&&u.isTexture){let f=u.mapping;if(f===_a||f===xa)if(e.has(u)){let g=e.get(u).texture;return o(g,u.mapping)}else{let g=u.image;if(g&&g.height>0){let v=new kc(g.height);return v.fromEquirectangularTexture(t,u),e.set(u,v),u.addEventListener("dispose",c),o(v.texture,u.mapping)}else return null}}return u}function a(u){if(u&&u.isTexture){let f=u.mapping,g=f===_a||f===xa,v=f===ws||f===wi;if(g||v){let m=n.get(u),p=m!==void 0?m.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==p){if(i===null)i=new Oc(t);return m=g?i.fromEquirectangular(u,m):i.fromCubemap(u,m),m.texture.pmremVersion=u.pmremVersion,n.set(u,m),m.texture}else if(m!==void 0)return m.texture;else{let R=u.image;if(g&&R&&R.height>0||v&&R&&l(R)){if(i===null)i=new Oc(t);return m=g?i.fromEquirectangular(u):i.fromCubemap(u),m.texture.pmremVersion=u.pmremVersion,n.set(u,m),u.addEventListener("dispose",h),m.texture}else return null}}}return u}function o(u,f){if(f===_a)u.mapping=ws;else if(f===xa)u.mapping=wi;return u}function l(u){let f=0,g=6;for(let v=0;v<g;v++)if(u[v]!==void 0)f++;return f===g}function c(u){let f=u.target;f.removeEventListener("dispose",c);let g=e.get(f);if(g!==void 0)e.delete(f),g.dispose()}function h(u){let f=u.target;f.removeEventListener("dispose",h);let g=n.get(f);if(g!==void 0)n.delete(f),g.dispose()}function d(){if(e=new WeakMap,n=new WeakMap,i!==null)i.dispose(),i=null}return{get:s,dispose:d}}function t_(t){let e={};function n(i){if(e[i]!==void 0)return e[i];let s=t.getExtension(i);return e[i]=s,s}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){let s=n(i);if(s===null)Ei("WebGLRenderer: "+i+" extension not supported.");return s}}}function e_(t,e,n,i){let s={},r=new WeakMap;function a(d){let u=d.target;if(u.index!==null)e.remove(u.index);for(let g in u.attributes)e.remove(u.attributes[g]);u.removeEventListener("dispose",a),delete s[u.id];let f=r.get(u);if(f)e.remove(f),r.delete(u);if(i.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0)delete u._maxInstanceCount;n.memory.geometries--}function o(d,u){if(s[u.id]===!0)return u;return u.addEventListener("dispose",a),s[u.id]=!0,n.memory.geometries++,u}function l(d){let u=d.attributes;for(let f in u)e.update(u[f],t.ARRAY_BUFFER)}function c(d){let u=[],f=d.index,g=d.attributes.position,v=0;if(g===void 0)return;if(f!==null){let R=f.array;v=f.version;for(let E=0,x=R.length;E<x;E+=3){let T=R[E+0],w=R[E+1],A=R[E+2];u.push(T,w,w,A,A,T)}}else{let R=g.array;v=g.version;for(let E=0,x=R.length/3-1;E<x;E+=3){let T=E+0,w=E+1,A=E+2;u.push(T,w,w,A,A,T)}}let m=new(g.count>=65535?La:Ia)(u,1);m.version=v;let p=r.get(d);if(p)e.remove(p);r.set(d,m)}function h(d){let u=r.get(d);if(u){let f=d.index;if(f!==null){if(u.version<f.version)c(d)}}else c(d);return r.get(d)}return{get:o,update:l,getWireframeAttribute:h}}function n_(t,e,n){let i;function s(d){i=d}let r,a;function o(d){r=d.type,a=d.bytesPerElement}function l(d,u){t.drawElements(i,u,r,d*a),n.update(u,i,1)}function c(d,u,f){if(f===0)return;t.drawElementsInstanced(i,u,r,d*a,f),n.update(u,i,f)}function h(d,u,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,u,0,r,d,0,f);let v=0;for(let m=0;m<f;m++)v+=u[m];n.update(v,i,1)}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function i_(t){let e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,a,o){switch(n.calls++,a){case t.TRIANGLES:n.triangles+=o*(r/3);break;case t.LINES:n.lines+=o*(r/2);break;case t.LINE_STRIP:n.lines+=o*(r-1);break;case t.LINE_LOOP:n.lines+=o*r;break;case t.POINTS:n.points+=o*r;break;default:Bt("WebGLInfo: Unknown draw mode:",a);break}}function s(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:s,update:i}}function s_(t,e,n){let i=new WeakMap,s=new Me;function r(a,o,l){let c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=h!==void 0?h.length:0,u=i.get(o);if(u===void 0||u.count!==d){let M=function(){A.dispose(),i.delete(o),o.removeEventListener("dispose",M)};if(u!==void 0)u.texture.dispose();let f=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,v=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],p=o.morphAttributes.normal||[],R=o.morphAttributes.color||[],E=0;if(f===!0)E=1;if(g===!0)E=2;if(v===!0)E=3;let x=o.attributes.position.count*E,T=1;if(x>e.maxTextureSize)T=Math.ceil(x/e.maxTextureSize),x=e.maxTextureSize;let w=new Float32Array(x*T*4*d),A=new Ca(w,x,T,d);A.type=qn,A.needsUpdate=!0;let _=E*4;for(let U=0;U<d;U++){let C=m[U],k=p[U],q=R[U],F=x*T*4*U;for(let V=0;V<C.count;V++){let W=V*_;if(f===!0)s.fromBufferAttribute(C,V),w[F+W+0]=s.x,w[F+W+1]=s.y,w[F+W+2]=s.z,w[F+W+3]=0;if(g===!0)s.fromBufferAttribute(k,V),w[F+W+4]=s.x,w[F+W+5]=s.y,w[F+W+6]=s.z,w[F+W+7]=0;if(v===!0)s.fromBufferAttribute(q,V),w[F+W+8]=s.x,w[F+W+9]=s.y,w[F+W+10]=s.z,w[F+W+11]=q.itemSize===4?s.w:1}}u={count:d,texture:A,size:new K(x,T)},i.set(o,u),o.addEventListener("dispose",M)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(t,"morphTexture",a.morphTexture,n);else{let f=0;for(let v=0;v<c.length;v++)f+=c[v];let g=o.morphTargetsRelative?1:1-f;l.getUniforms().setValue(t,"morphTargetBaseInfluence",g),l.getUniforms().setValue(t,"morphTargetInfluences",c)}l.getUniforms().setValue(t,"morphTargetsTexture",u.texture,n),l.getUniforms().setValue(t,"morphTargetsTextureSize",u.size)}return{update:r}}function r_(t,e,n,i,s){let r=new WeakMap;function a(c){let h=s.render.frame,d=c.geometry,u=e.get(c,d);if(r.get(u)!==h)e.update(u),r.set(u,h);if(c.isInstancedMesh){if(c.hasEventListener("dispose",l)===!1)c.addEventListener("dispose",l);if(r.get(c)!==h){if(n.update(c.instanceMatrix,t.ARRAY_BUFFER),c.instanceColor!==null)n.update(c.instanceColor,t.ARRAY_BUFFER);r.set(c,h)}}if(c.isSkinnedMesh){let f=c.skeleton;if(r.get(f)!==h)f.update(),r.set(f,h)}return u}function o(){r=new WeakMap}function l(c){let h=c.target;if(h.removeEventListener("dispose",l),i.releaseStatesOfObject(h),n.remove(h.instanceMatrix),h.instanceColor!==null)n.remove(h.instanceColor)}return{update:a,dispose:o}}var a_={[sl]:"LINEAR_TONE_MAPPING",[rl]:"REINHARD_TONE_MAPPING",[al]:"CINEON_TONE_MAPPING",[ol]:"ACES_FILMIC_TONE_MAPPING",[cl]:"AGX_TONE_MAPPING",[hl]:"NEUTRAL_TONE_MAPPING",[ll]:"CUSTOM_TONE_MAPPING"};function o_(t,e,n,i,s,r){let a=new hn(e,n,{type:t,depthBuffer:s,stencilBuffer:r,samples:i?4:0,depthTexture:s?new ui(e,n):void 0}),o=new hn(e,n,{type:Yn,depthBuffer:!1,stencilBuffer:!1}),l=new Se;l.setAttribute("position",new te([-1,3,0,-1,-1,0,3,-1,0],3)),l.setAttribute("uv",new te([0,2,0,0,2,0],2));let c=new dc({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),h=new oe(l,c),d=new Tr(-1,1,1,-1,0,1),u=null,f=null,g=!1,v,m=null,p=[],R=!1;this.setSize=function(E,x){a.setSize(E,x),o.setSize(E,x);for(let T=0;T<p.length;T++){let w=p[T];if(w.setSize)w.setSize(E,x)}},this.setEffects=function(E){p=E,R=p.length>0&&p[0].isRenderPass===!0;let{width:x,height:T}=a;for(let w=0;w<p.length;w++){let A=p[w];if(A.setSize)A.setSize(x,T)}},this.begin=function(E,x){if(g)return!1;if(E.toneMapping===vn&&p.length===0)return!1;if(m=x,x!==null){let{width:T,height:w}=x;if(a.width!==T||a.height!==w)this.setSize(T,w)}if(R===!1)E.setRenderTarget(a);return v=E.toneMapping,E.toneMapping=vn,!0},this.hasRenderPass=function(){return R},this.end=function(E,x){E.toneMapping=v,g=!0;let T=a,w=o;for(let A=0;A<p.length;A++){let _=p[A];if(_.enabled===!1)continue;if(_.render(E,w,T,x),_.needsSwap!==!1){let M=T;T=w,w=M}}if(u!==E.outputColorSpace||f!==E.toneMapping){if(u=E.outputColorSpace,f=E.toneMapping,c.defines={},ee.getTransfer(u)===me)c.defines.SRGB_TRANSFER="";let A=a_[f];if(A)c.defines[A]="";c.needsUpdate=!0}c.uniforms.tDiffuse.value=T.texture,E.setRenderTarget(m),E.render(h,d),m=null,g=!1},this.isCompositing=function(){return g},this.dispose=function(){if(a.depthTexture)a.depthTexture.dispose();a.dispose(),o.dispose(),l.dispose(),c.dispose()}}var Hd=new Oe,Bc=new ui(1,1),Vd=new Ca,Wd=new ec,Xd=new Fa,bd=[],Ed=[],Td=new Float32Array(16),wd=new Float32Array(9),Ad=new Float32Array(4);function Ds(t,e,n){let i=t[0];if(i<=0||i>0)return t;let s=e*n,r=bd[s];if(r===void 0)r=new Float32Array(s),bd[s]=r;if(e!==0){i.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=n,t[a].toArray(r,o)}return r}function Pe(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function Ie(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function to(t,e){let n=Ed[e];if(n===void 0)n=new Int32Array(e),Ed[e]=n;for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function l_(t,e){let n=this.cache;if(n[0]===e)return;t.uniform1f(this.addr,e),n[0]=e}function c_(t,e){let n=this.cache;if(e.x!==void 0){if(n[0]!==e.x||n[1]!==e.y)t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y}else{if(Pe(n,e))return;t.uniform2fv(this.addr,e),Ie(n,e)}}function h_(t,e){let n=this.cache;if(e.x!==void 0){if(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z}else if(e.r!==void 0){if(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b}else{if(Pe(n,e))return;t.uniform3fv(this.addr,e),Ie(n,e)}}function u_(t,e){let n=this.cache;if(e.x!==void 0){if(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w}else{if(Pe(n,e))return;t.uniform4fv(this.addr,e),Ie(n,e)}}function d_(t,e){let n=this.cache,i=e.elements;if(i===void 0){if(Pe(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),Ie(n,e)}else{if(Pe(n,i))return;Ad.set(i),t.uniformMatrix2fv(this.addr,!1,Ad),Ie(n,i)}}function f_(t,e){let n=this.cache,i=e.elements;if(i===void 0){if(Pe(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),Ie(n,e)}else{if(Pe(n,i))return;wd.set(i),t.uniformMatrix3fv(this.addr,!1,wd),Ie(n,i)}}function p_(t,e){let n=this.cache,i=e.elements;if(i===void 0){if(Pe(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),Ie(n,e)}else{if(Pe(n,i))return;Td.set(i),t.uniformMatrix4fv(this.addr,!1,Td),Ie(n,i)}}function m_(t,e){let n=this.cache;if(n[0]===e)return;t.uniform1i(this.addr,e),n[0]=e}function g_(t,e){let n=this.cache;if(e.x!==void 0){if(n[0]!==e.x||n[1]!==e.y)t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y}else{if(Pe(n,e))return;t.uniform2iv(this.addr,e),Ie(n,e)}}function __(t,e){let n=this.cache;if(e.x!==void 0){if(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z}else{if(Pe(n,e))return;t.uniform3iv(this.addr,e),Ie(n,e)}}function x_(t,e){let n=this.cache;if(e.x!==void 0){if(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w}else{if(Pe(n,e))return;t.uniform4iv(this.addr,e),Ie(n,e)}}function y_(t,e){let n=this.cache;if(n[0]===e)return;t.uniform1ui(this.addr,e),n[0]=e}function v_(t,e){let n=this.cache;if(e.x!==void 0){if(n[0]!==e.x||n[1]!==e.y)t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y}else{if(Pe(n,e))return;t.uniform2uiv(this.addr,e),Ie(n,e)}}function M_(t,e){let n=this.cache;if(e.x!==void 0){if(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z}else{if(Pe(n,e))return;t.uniform3uiv(this.addr,e),Ie(n,e)}}function S_(t,e){let n=this.cache;if(e.x!==void 0){if(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w}else{if(Pe(n,e))return;t.uniform4uiv(this.addr,e),Ie(n,e)}}function b_(t,e,n){let i=this.cache,s=n.allocateTextureUnit();if(i[0]!==s)t.uniform1i(this.addr,s),i[0]=s;let r;if(this.type===t.SAMPLER_2D_SHADOW)Bc.compareFunction=n.isReversedDepthBuffer()?Ra:Aa,r=Bc;else r=Hd;n.setTexture2D(e||r,s)}function E_(t,e,n){let i=this.cache,s=n.allocateTextureUnit();if(i[0]!==s)t.uniform1i(this.addr,s),i[0]=s;n.setTexture3D(e||Wd,s)}function T_(t,e,n){let i=this.cache,s=n.allocateTextureUnit();if(i[0]!==s)t.uniform1i(this.addr,s),i[0]=s;n.setTextureCube(e||Xd,s)}function w_(t,e,n){let i=this.cache,s=n.allocateTextureUnit();if(i[0]!==s)t.uniform1i(this.addr,s),i[0]=s;n.setTexture2DArray(e||Vd,s)}function A_(t){switch(t){case 5126:return l_;case 35664:return c_;case 35665:return h_;case 35666:return u_;case 35674:return d_;case 35675:return f_;case 35676:return p_;case 5124:case 35670:return m_;case 35667:case 35671:return g_;case 35668:case 35672:return __;case 35669:case 35673:return x_;case 5125:return y_;case 36294:return v_;case 36295:return M_;case 36296:return S_;case 35678:case 36198:case 36298:case 36306:case 35682:return b_;case 35679:case 36299:case 36307:return E_;case 35680:case 36300:case 36308:case 36293:return T_;case 36289:case 36303:case 36311:case 36292:return w_}}function R_(t,e){t.uniform1fv(this.addr,e)}function C_(t,e){let n=Ds(e,this.size,2);t.uniform2fv(this.addr,n)}function P_(t,e){let n=Ds(e,this.size,3);t.uniform3fv(this.addr,n)}function I_(t,e){let n=Ds(e,this.size,4);t.uniform4fv(this.addr,n)}function L_(t,e){let n=Ds(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function D_(t,e){let n=Ds(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function N_(t,e){let n=Ds(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function U_(t,e){t.uniform1iv(this.addr,e)}function F_(t,e){t.uniform2iv(this.addr,e)}function O_(t,e){t.uniform3iv(this.addr,e)}function B_(t,e){t.uniform4iv(this.addr,e)}function z_(t,e){t.uniform1uiv(this.addr,e)}function k_(t,e){t.uniform2uiv(this.addr,e)}function G_(t,e){t.uniform3uiv(this.addr,e)}function H_(t,e){t.uniform4uiv(this.addr,e)}function V_(t,e,n){let i=this.cache,s=e.length,r=to(n,s);if(!Pe(i,r))t.uniform1iv(this.addr,r),Ie(i,r);let a;if(this.type===t.SAMPLER_2D_SHADOW)a=Bc;else a=Hd;for(let o=0;o!==s;++o)n.setTexture2D(e[o]||a,r[o])}function W_(t,e,n){let i=this.cache,s=e.length,r=to(n,s);if(!Pe(i,r))t.uniform1iv(this.addr,r),Ie(i,r);for(let a=0;a!==s;++a)n.setTexture3D(e[a]||Wd,r[a])}function X_(t,e,n){let i=this.cache,s=e.length,r=to(n,s);if(!Pe(i,r))t.uniform1iv(this.addr,r),Ie(i,r);for(let a=0;a!==s;++a)n.setTextureCube(e[a]||Xd,r[a])}function q_(t,e,n){let i=this.cache,s=e.length,r=to(n,s);if(!Pe(i,r))t.uniform1iv(this.addr,r),Ie(i,r);for(let a=0;a!==s;++a)n.setTexture2DArray(e[a]||Vd,r[a])}function Y_(t){switch(t){case 5126:return R_;case 35664:return C_;case 35665:return P_;case 35666:return I_;case 35674:return L_;case 35675:return D_;case 35676:return N_;case 5124:case 35670:return U_;case 35667:case 35671:return F_;case 35668:case 35672:return O_;case 35669:case 35673:return B_;case 5125:return z_;case 36294:return k_;case 36295:return G_;case 36296:return H_;case 35678:case 36198:case 36298:case 36306:case 35682:return V_;case 35679:case 36299:case 36307:return W_;case 35680:case 36300:case 36308:case 36293:return X_;case 36289:case 36303:case 36311:case 36292:return q_}}class qd{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=A_(e.type)}}class Yd{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Y_(e.type)}}class Zd{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let i=this.seq;for(let s=0,r=i.length;s!==r;++s){let a=i[s];a.setValue(t,e[a.id],n)}}}var Uc=/(\w+)(\])?(\[|\.)?/g;function Rd(t,e){t.seq.push(e),t.map[e.id]=e}function Z_(t,e,n){let i=t.name,s=i.length;Uc.lastIndex=0;while(!0){let r=Uc.exec(i),a=Uc.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l)o=o|0;if(c===void 0||c==="["&&a+2===s){Rd(n,c===void 0?new qd(o,t,e):new Yd(o,t,e));break}else{let d=n.map[o];if(d===void 0)d=new Zd(o),Rd(n,d);n=d}}}class Cr{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){let a=t.getActiveUniform(e,r),o=t.getUniformLocation(e,a.name);Z_(a,o,this)}let i=[],s=[];for(let r of this.seq)if(r.type===t.SAMPLER_2D_SHADOW||r.type===t.SAMPLER_CUBE_SHADOW||r.type===t.SAMPLER_2D_ARRAY_SHADOW)i.push(r);else s.push(r);if(i.length>0)this.seq=i.concat(s)}setValue(t,e,n,i){let s=this.map[e];if(s!==void 0)s.setValue(t,n,i)}setOptional(t,e,n){let i=e[n];if(i!==void 0)this.setValue(t,n,i)}static upload(t,e,n,i){for(let s=0,r=e.length;s!==r;++s){let a=e[s],o=n[a.id];if(o.needsUpdate!==!1)a.setValue(t,o.value,i)}}static seqWithValue(t,e){let n=[];for(let i=0,s=t.length;i!==s;++i){let r=t[i];if(r.id in e)n.push(r)}return n}}function Cd(t,e,n){let i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}var $_=37297,J_=0;function K_(t,e){let n=t.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,n.length);for(let a=s;a<r;a++){let o=a+1;i.push(`${o===e?">":" "} ${o}: ${n[a]}`)}return i.join(`
`)}var Pd=new Vt;function j_(t){ee._getMatrix(Pd,ee.workingColorSpace,t);let e=`mat3( ${Pd.elements.map((n)=>n.toFixed(4))} )`;switch(ee.getTransfer(t)){case $l:return[e,"LinearTransferOETF"];case me:return[e,"sRGBTransferOETF"];default:return Ut("WebGLProgram: Unsupported color space: ",t),[e,"LinearTransferOETF"]}}function Id(t,e,n){let i=t.getShaderParameter(e,t.COMPILE_STATUS),r=(t.getShaderInfoLog(e)||"").trim();if(i&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return n.toUpperCase()+`

`+r+`

`+K_(t.getShaderSource(e),o)}else return r}function Q_(t,e){let n=j_(e);return[`vec4 ${t}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}var tx={[sl]:"Linear",[rl]:"Reinhard",[al]:"Cineon",[ol]:"ACESFilmic",[cl]:"AgX",[hl]:"Neutral",[ll]:"Custom"};function ex(t,e){let n=tx[e];if(n===void 0)return Ut("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+t+"( vec3 color ) { return LinearToneMapping( color ); }";return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}var ja=new P;function nx(){ee.getLuminanceCoefficients(ja);let t=ja.x.toFixed(4),e=ja.y.toFixed(4),n=ja.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${e}, ${n} );`,"\treturn dot( weights, rgb );","}"].join(`
`)}function ix(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Rr).join(`
`)}function sx(t){let e=[];for(let n in t){let i=t[n];if(i===!1)continue;e.push("#define "+n+" "+i)}return e.join(`
`)}function rx(t,e){let n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let r=t.getActiveAttrib(e,s),a=r.name,o=1;if(r.type===t.FLOAT_MAT2)o=2;if(r.type===t.FLOAT_MAT3)o=3;if(r.type===t.FLOAT_MAT4)o=4;n[a]={type:r.type,location:t.getAttribLocation(e,a),locationSize:o}}return n}function Rr(t){return t!==""}function Ld(t,e){let n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Dd(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var ax=/^[ \t]*#include +<([\w\d./]+)>/gm;function zc(t){return t.replace(ax,lx)}var ox=new Map;function lx(t,e){let n=Jt[e];if(n===void 0){let i=ox.get(e);if(i!==void 0)n=Jt[i],Ut('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return zc(n)}var cx=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Nd(t){return t.replace(cx,hx)}function hx(t,e,n,i){let s="";for(let r=parseInt(e);r<parseInt(n);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Ud(t){let e=`precision ${t.precision} float;
	precision ${t.precision} int;
	precision ${t.precision} sampler2D;
	precision ${t.precision} samplerCube;
	precision ${t.precision} sampler3D;
	precision ${t.precision} sampler2DArray;
	precision ${t.precision} sampler2DShadow;
	precision ${t.precision} samplerCubeShadow;
	precision ${t.precision} sampler2DArrayShadow;
	precision ${t.precision} isampler2D;
	precision ${t.precision} isampler3D;
	precision ${t.precision} isamplerCube;
	precision ${t.precision} isampler2DArray;
	precision ${t.precision} usampler2D;
	precision ${t.precision} usampler3D;
	precision ${t.precision} usamplerCube;
	precision ${t.precision} usampler2DArray;
	`;if(t.precision==="highp")e+=`
#define HIGH_PRECISION`;else if(t.precision==="mediump")e+=`
#define MEDIUM_PRECISION`;else if(t.precision==="lowp")e+=`
#define LOW_PRECISION`;return e}var ux={[or]:"SHADOWMAP_TYPE_PCF",[bs]:"SHADOWMAP_TYPE_VSM"};function dx(t){return ux[t.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var fx={[ws]:"ENVMAP_TYPE_CUBE",[wi]:"ENVMAP_TYPE_CUBE",[cr]:"ENVMAP_TYPE_CUBE_UV"};function px(t){if(t.envMap===!1)return"ENVMAP_TYPE_CUBE";return fx[t.envMapMode]||"ENVMAP_TYPE_CUBE"}var mx={[wi]:"ENVMAP_MODE_REFRACTION"};function gx(t){if(t.envMap===!1)return"ENVMAP_MODE_REFLECTION";return mx[t.envMapMode]||"ENVMAP_MODE_REFLECTION"}var _x={[Ou]:"ENVMAP_BLENDING_MULTIPLY",[Bu]:"ENVMAP_BLENDING_MIX",[zu]:"ENVMAP_BLENDING_ADD"};function xx(t){if(t.envMap===!1)return"ENVMAP_BLENDING_NONE";return _x[t.combine]||"ENVMAP_BLENDING_NONE"}function yx(t){let e=t.envMapCubeUVHeight;if(e===null)return null;let n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),112)),texelHeight:i,maxMip:n}}function vx(t,e,n,i){let s=t.getContext(),{defines:r,vertexShader:a,fragmentShader:o}=n,l=dx(n),c=px(n),h=gx(n),d=xx(n),u=yx(n),f=ix(n),g=sx(r),v=s.createProgram(),m,p,R=n.glslVersion?"#version "+n.glslVersion+`
`:"";if(n.isRawShaderMaterial){if(m=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g].filter(Rr).join(`
`),m.length>0)m+=`
`;if(p=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g].filter(Rr).join(`
`),p.length>0)p+=`
`}else m=[Ud(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+h:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexNormals?"#define HAS_NORMAL":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","\tattribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","\tattribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","\tuniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","\tattribute vec2 uv1;","#endif","#ifdef USE_UV2","\tattribute vec2 uv2;","#endif","#ifdef USE_UV3","\tattribute vec2 uv3;","#endif","#ifdef USE_TANGENT","\tattribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","\tattribute vec4 color;","#elif defined( USE_COLOR )","\tattribute vec3 color;","#endif","#ifdef USE_SKINNING","\tattribute vec4 skinIndex;","\tattribute vec4 skinWeight;","#endif",`
`].filter(Rr).join(`
`),p=[Ud(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+h:"",n.envMap?"#define "+d:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas||n.batchingColor?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==vn?"#define TONE_MAPPING":"",n.toneMapping!==vn?Jt.tonemapping_pars_fragment:"",n.toneMapping!==vn?ex("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Jt.colorspace_pars_fragment,Q_("linearToOutputTexel",n.outputColorSpace),nx(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Rr).join(`
`);if(a=zc(a),a=Ld(a,n),a=Dd(a,n),o=zc(o),o=Ld(o,n),o=Dd(o,n),a=Nd(a),o=Nd(o),n.isRawShaderMaterial!==!0)R=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",n.glslVersion===Jl?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===Jl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p;let E=R+m+a,x=R+p+o,T=Cd(s,s.VERTEX_SHADER,E),w=Cd(s,s.FRAGMENT_SHADER,x);if(s.attachShader(v,T),s.attachShader(v,w),n.index0AttributeName!==void 0)s.bindAttribLocation(v,0,n.index0AttributeName);else if(n.hasPositionAttribute===!0)s.bindAttribLocation(v,0,"position");s.linkProgram(v);function A(C){if(t.debug.checkShaderErrors){let k=s.getProgramInfoLog(v)||"",q=s.getShaderInfoLog(T)||"",F=s.getShaderInfoLog(w)||"",V=k.trim(),W=q.trim(),O=F.trim(),j=!0,rt=!0;if(s.getProgramParameter(v,s.LINK_STATUS)===!1)if(j=!1,typeof t.debug.onShaderError==="function")t.debug.onShaderError(s,v,T,w);else{let lt=Id(s,T,"vertex"),Rt=Id(s,w,"fragment");Bt("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(v,s.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+V+`
`+lt+`
`+Rt)}else if(V!=="")Ut("WebGLProgram: Program Info Log:",V);else if(W===""||O==="")rt=!1;if(rt)C.diagnostics={runnable:j,programLog:V,vertexShader:{log:W,prefix:m},fragmentShader:{log:O,prefix:p}}}s.deleteShader(T),s.deleteShader(w),_=new Cr(s,v),M=rx(s,v)}let _;this.getUniforms=function(){if(_===void 0)A(this);return _};let M;this.getAttributes=function(){if(M===void 0)A(this);return M};let U=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){if(U===!1)U=s.getProgramParameter(v,$_);return U},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(v),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=J_++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=T,this.fragmentShader=w,this}var Mx=0;class $d{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,n){let i=this._getShaderCacheForMaterial(t);if(i.has(e)===!1)i.add(e),e.usedTimes++;if(i.has(n)===!1)i.add(n),n.usedTimes++;return this}remove(t){let e=this.materialCache.get(t);for(let n of e)if(n.usedTimes--,n.usedTimes===0)this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);if(n===void 0)n=new Set,e.set(t,n);return n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);if(n===void 0)n=new Jd(t),e.set(t,n);return n}}class Jd{constructor(t){this.id=Mx++,this.code=t,this.usedTimes=0}}function Sx(t){return t===Pi||t===Ta||t===wa}function bx(t,e,n,i,s,r){let a=new pr,o=new $d,l=new Set,c=[],h=new Map,{logarithmicDepthBuffer:d,precision:u}=i,f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(_){if(l.add(_),_===0)return"uv";return`uv${_}`}function v(_,M,U,C,k,q){let F=C.fog,V=k.geometry,W=_.isMeshStandardMaterial||_.isMeshLambertMaterial||_.isMeshPhongMaterial?C.environment:null,O=_.isMeshStandardMaterial||_.isMeshLambertMaterial&&!_.envMap||_.isMeshPhongMaterial&&!_.envMap,j=e.get(_.envMap||W,O),rt=!!j&&j.mapping===cr?j.image.height:null,lt=f[_.type];if(_.precision!==null){if(u=i.getMaxPrecision(_.precision),u!==_.precision)Ut("WebGLProgram.getParameters:",_.precision,"not supported, using",u,"instead.")}let Rt=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,St=Rt!==void 0?Rt.length:0,he=0;if(V.morphAttributes.position!==void 0)he=1;if(V.morphAttributes.normal!==void 0)he=2;if(V.morphAttributes.color!==void 0)he=3;let ae,Z,ct,bt;if(lt){let qt=Nn[lt];ae=qt.vertexShader,Z=qt.fragmentShader}else{ae=_.vertexShader,Z=_.fragmentShader;let qt=o.getVertexShaderStage(_),Ee=o.getFragmentShaderStage(_);o.update(_,qt,Ee),ct=qt.id,bt=Ee.id}let dt=t.getRenderTarget(),Ft=t.state.buffers.depth.getReversed(),ne=k.isInstancedMesh===!0,kt=k.isBatchedMesh===!0,Ht=!!_.map,Q=!!_.matcap,it=!!j,nt=!!_.aoMap,vt=!!_.lightMap,Et=!!_.bumpMap&&_.wireframe===!1,Pt=!!_.normalMap,Lt=!!_.displacementMap,Wt=!!_.emissiveMap,Xt=!!_.metalnessMap,I=!!_.roughnessMap,_e=_.anisotropy>0,Qt=_.clearcoat>0,Kt=_.dispersion>0,b=_.iridescence>0,y=_.sheen>0,L=_.transmission>0,G=_e&&!!_.anisotropyMap,tt=Qt&&!!_.clearcoatMap,at=Qt&&!!_.clearcoatNormalMap,ut=Qt&&!!_.clearcoatRoughnessMap,X=b&&!!_.iridescenceMap,J=b&&!!_.iridescenceThicknessMap,Mt=y&&!!_.sheenColorMap,It=y&&!!_.sheenRoughnessMap,gt=!!_.specularMap,ot=!!_.specularColorMap,Ot=!!_.specularIntensityMap,zt=L&&!!_.transmissionMap,se=L&&!!_.thicknessMap,D=!!_.gradientMap,ht=!!_.alphaMap,Y=_.alphaTest>0,ft=!!_.alphaHash,Tt=!!_.extensions,et=vn;if(_.toneMapped){if(dt===null||dt.isXRRenderTarget===!0)et=t.toneMapping}let pt={shaderID:lt,shaderType:_.type,shaderName:_.name,vertexShader:ae,fragmentShader:Z,defines:_.defines,customVertexShaderID:ct,customFragmentShaderID:bt,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:u,batching:kt,batchingColor:kt&&k._colorsTexture!==null,instancing:ne,instancingColor:ne&&k.instanceColor!==null,instancingMorph:ne&&k.morphTexture!==null,outputColorSpace:dt===null?t.outputColorSpace:dt.isXRRenderTarget===!0?dt.texture.colorSpace:ee.workingColorSpace,alphaToCoverage:!!_.alphaToCoverage,map:Ht,matcap:Q,envMap:it,envMapMode:it&&j.mapping,envMapCubeUVHeight:rt,aoMap:nt,lightMap:vt,bumpMap:Et,normalMap:Pt,displacementMap:Lt,emissiveMap:Wt,normalMapObjectSpace:Pt&&_.normalMapType===$u,normalMapTangentSpace:Pt&&_.normalMapType===Yl,packedNormalMap:Pt&&_.normalMapType===Yl&&Sx(_.normalMap.format),metalnessMap:Xt,roughnessMap:I,anisotropy:_e,anisotropyMap:G,clearcoat:Qt,clearcoatMap:tt,clearcoatNormalMap:at,clearcoatRoughnessMap:ut,dispersion:Kt,iridescence:b,iridescenceMap:X,iridescenceThicknessMap:J,sheen:y,sheenColorMap:Mt,sheenRoughnessMap:It,specularMap:gt,specularColorMap:ot,specularIntensityMap:Ot,transmission:L,transmissionMap:zt,thicknessMap:se,gradientMap:D,opaque:_.transparent===!1&&_.blending===lr&&_.alphaToCoverage===!1,alphaMap:ht,alphaTest:Y,alphaHash:ft,combine:_.combine,mapUv:Ht&&g(_.map.channel),aoMapUv:nt&&g(_.aoMap.channel),lightMapUv:vt&&g(_.lightMap.channel),bumpMapUv:Et&&g(_.bumpMap.channel),normalMapUv:Pt&&g(_.normalMap.channel),displacementMapUv:Lt&&g(_.displacementMap.channel),emissiveMapUv:Wt&&g(_.emissiveMap.channel),metalnessMapUv:Xt&&g(_.metalnessMap.channel),roughnessMapUv:I&&g(_.roughnessMap.channel),anisotropyMapUv:G&&g(_.anisotropyMap.channel),clearcoatMapUv:tt&&g(_.clearcoatMap.channel),clearcoatNormalMapUv:at&&g(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ut&&g(_.clearcoatRoughnessMap.channel),iridescenceMapUv:X&&g(_.iridescenceMap.channel),iridescenceThicknessMapUv:J&&g(_.iridescenceThicknessMap.channel),sheenColorMapUv:Mt&&g(_.sheenColorMap.channel),sheenRoughnessMapUv:It&&g(_.sheenRoughnessMap.channel),specularMapUv:gt&&g(_.specularMap.channel),specularColorMapUv:ot&&g(_.specularColorMap.channel),specularIntensityMapUv:Ot&&g(_.specularIntensityMap.channel),transmissionMapUv:zt&&g(_.transmissionMap.channel),thicknessMapUv:se&&g(_.thicknessMap.channel),alphaMapUv:ht&&g(_.alphaMap.channel),vertexTangents:!!V.attributes.tangent&&(Pt||_e),vertexNormals:!!V.attributes.normal,vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,pointsUvs:k.isPoints===!0&&!!V.attributes.uv&&(Ht||ht),fog:!!F,useFog:_.fog===!0,fogExp2:!!F&&F.isFogExp2,flatShading:_.wireframe===!1&&(_.flatShading===!0||V.attributes.normal===void 0&&Pt===!1&&(_.isMeshLambertMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isMeshPhysicalMaterial)),sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:Ft,skinning:k.isSkinnedMesh===!0,hasPositionAttribute:V.attributes.position!==void 0,morphTargets:V.morphAttributes.position!==void 0,morphNormals:V.morphAttributes.normal!==void 0,morphColors:V.morphAttributes.color!==void 0,morphTargetsCount:St,morphTextureStride:he,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numLightProbeGrids:q.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:_.dithering,shadowMapEnabled:t.shadowMap.enabled&&U.length>0,shadowMapType:t.shadowMap.type,toneMapping:et,decodeVideoTexture:Ht&&_.map.isVideoTexture===!0&&ee.getTransfer(_.map.colorSpace)===me,decodeVideoTextureEmissive:Wt&&_.emissiveMap.isVideoTexture===!0&&ee.getTransfer(_.emissiveMap.colorSpace)===me,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===Cn,flipSided:_.side===Ke,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:Tt&&_.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Tt&&_.extensions.multiDraw===!0||kt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return pt.vertexUv1s=l.has(1),pt.vertexUv2s=l.has(2),pt.vertexUv3s=l.has(3),l.clear(),pt}function m(_){let M=[];if(_.shaderID)M.push(_.shaderID);else M.push(_.customVertexShaderID),M.push(_.customFragmentShaderID);if(_.defines!==void 0)for(let U in _.defines)M.push(U),M.push(_.defines[U]);if(_.isRawShaderMaterial===!1)p(M,_),R(M,_),M.push(t.outputColorSpace);return M.push(_.customProgramCacheKey),M.join()}function p(_,M){_.push(M.precision),_.push(M.outputColorSpace),_.push(M.envMapMode),_.push(M.envMapCubeUVHeight),_.push(M.mapUv),_.push(M.alphaMapUv),_.push(M.lightMapUv),_.push(M.aoMapUv),_.push(M.bumpMapUv),_.push(M.normalMapUv),_.push(M.displacementMapUv),_.push(M.emissiveMapUv),_.push(M.metalnessMapUv),_.push(M.roughnessMapUv),_.push(M.anisotropyMapUv),_.push(M.clearcoatMapUv),_.push(M.clearcoatNormalMapUv),_.push(M.clearcoatRoughnessMapUv),_.push(M.iridescenceMapUv),_.push(M.iridescenceThicknessMapUv),_.push(M.sheenColorMapUv),_.push(M.sheenRoughnessMapUv),_.push(M.specularMapUv),_.push(M.specularColorMapUv),_.push(M.specularIntensityMapUv),_.push(M.transmissionMapUv),_.push(M.thicknessMapUv),_.push(M.combine),_.push(M.fogExp2),_.push(M.sizeAttenuation),_.push(M.morphTargetsCount),_.push(M.morphAttributeCount),_.push(M.numDirLights),_.push(M.numPointLights),_.push(M.numSpotLights),_.push(M.numSpotLightMaps),_.push(M.numHemiLights),_.push(M.numRectAreaLights),_.push(M.numDirLightShadows),_.push(M.numPointLightShadows),_.push(M.numSpotLightShadows),_.push(M.numSpotLightShadowsWithMaps),_.push(M.numLightProbes),_.push(M.shadowMapType),_.push(M.toneMapping),_.push(M.numClippingPlanes),_.push(M.numClipIntersection),_.push(M.depthPacking)}function R(_,M){if(a.disableAll(),M.instancing)a.enable(0);if(M.instancingColor)a.enable(1);if(M.instancingMorph)a.enable(2);if(M.matcap)a.enable(3);if(M.envMap)a.enable(4);if(M.normalMapObjectSpace)a.enable(5);if(M.normalMapTangentSpace)a.enable(6);if(M.clearcoat)a.enable(7);if(M.iridescence)a.enable(8);if(M.alphaTest)a.enable(9);if(M.vertexColors)a.enable(10);if(M.vertexAlphas)a.enable(11);if(M.vertexUv1s)a.enable(12);if(M.vertexUv2s)a.enable(13);if(M.vertexUv3s)a.enable(14);if(M.vertexTangents)a.enable(15);if(M.anisotropy)a.enable(16);if(M.alphaHash)a.enable(17);if(M.batching)a.enable(18);if(M.dispersion)a.enable(19);if(M.batchingColor)a.enable(20);if(M.gradientMap)a.enable(21);if(M.packedNormalMap)a.enable(22);if(M.vertexNormals)a.enable(23);if(_.push(a.mask),a.disableAll(),M.fog)a.enable(0);if(M.useFog)a.enable(1);if(M.flatShading)a.enable(2);if(M.logarithmicDepthBuffer)a.enable(3);if(M.reversedDepthBuffer)a.enable(4);if(M.skinning)a.enable(5);if(M.morphTargets)a.enable(6);if(M.morphNormals)a.enable(7);if(M.morphColors)a.enable(8);if(M.premultipliedAlpha)a.enable(9);if(M.shadowMapEnabled)a.enable(10);if(M.doubleSided)a.enable(11);if(M.flipSided)a.enable(12);if(M.useDepthPacking)a.enable(13);if(M.dithering)a.enable(14);if(M.transmission)a.enable(15);if(M.sheen)a.enable(16);if(M.opaque)a.enable(17);if(M.pointsUvs)a.enable(18);if(M.decodeVideoTexture)a.enable(19);if(M.decodeVideoTextureEmissive)a.enable(20);if(M.alphaToCoverage)a.enable(21);if(M.numLightProbeGrids>0)a.enable(22);if(M.hasPositionAttribute)a.enable(23);_.push(a.mask)}function E(_){let M=f[_.type],U;if(M){let C=Nn[M];U=fd.clone(C.uniforms)}else U=_.uniforms;return U}function x(_,M){let U=h.get(M);if(U!==void 0)++U.usedTimes;else U=new vx(t,M,_,s),c.push(U),h.set(M,U);return U}function T(_){if(--_.usedTimes===0){let M=c.indexOf(_);c[M]=c[c.length-1],c.pop(),h.delete(_.cacheKey),_.destroy()}}function w(_){o.remove(_)}function A(){o.dispose()}return{getParameters:v,getProgramCacheKey:m,getUniforms:E,acquireProgram:x,releaseProgram:T,releaseShaderCache:w,programs:c,dispose:A}}function Ex(){let t=new WeakMap;function e(a){return t.has(a)}function n(a){let o=t.get(a);if(o===void 0)o={},t.set(a,o);return o}function i(a){t.delete(a)}function s(a,o,l){t.get(a)[o]=l}function r(){t=new WeakMap}return{has:e,get:n,remove:i,update:s,dispose:r}}function Tx(t,e){if(t.groupOrder!==e.groupOrder)return t.groupOrder-e.groupOrder;else if(t.renderOrder!==e.renderOrder)return t.renderOrder-e.renderOrder;else if(t.material.id!==e.material.id)return t.material.id-e.material.id;else if(t.materialVariant!==e.materialVariant)return t.materialVariant-e.materialVariant;else if(t.z!==e.z)return t.z-e.z;else return t.id-e.id}function Fd(t,e){if(t.groupOrder!==e.groupOrder)return t.groupOrder-e.groupOrder;else if(t.renderOrder!==e.renderOrder)return t.renderOrder-e.renderOrder;else if(t.z!==e.z)return e.z-t.z;else return t.id-e.id}function Od(){let t=[],e=0,n=[],i=[],s=[];function r(){e=0,n.length=0,i.length=0,s.length=0}function a(u){let f=0;if(u.isInstancedMesh)f+=2;if(u.isSkinnedMesh)f+=1;return f}function o(u,f,g,v,m,p){let R=t[e];if(R===void 0)R={id:u.id,object:u,geometry:f,material:g,materialVariant:a(u),groupOrder:v,renderOrder:u.renderOrder,z:m,group:p},t[e]=R;else R.id=u.id,R.object=u,R.geometry=f,R.material=g,R.materialVariant=a(u),R.groupOrder=v,R.renderOrder=u.renderOrder,R.z=m,R.group=p;return e++,R}function l(u,f,g,v,m,p){let R=o(u,f,g,v,m,p);if(g.transmission>0)i.push(R);else if(g.transparent===!0)s.push(R);else n.push(R)}function c(u,f,g,v,m,p){let R=o(u,f,g,v,m,p);if(g.transmission>0)i.unshift(R);else if(g.transparent===!0)s.unshift(R);else n.unshift(R)}function h(u,f,g){if(n.length>1)n.sort(u||Tx);if(i.length>1)i.sort(f||Fd);if(s.length>1)s.sort(f||Fd);if(g)n.reverse(),i.reverse(),s.reverse()}function d(){for(let u=e,f=t.length;u<f;u++){let g=t[u];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:n,transmissive:i,transparent:s,init:r,push:l,unshift:c,finish:d,sort:h}}function wx(){let t=new WeakMap;function e(i,s){let r=t.get(i),a;if(r===void 0)a=new Od,t.set(i,[a]);else if(s>=r.length)a=new Od,r.push(a);else a=r[s];return a}function n(){t=new WeakMap}return{get:e,dispose:n}}function Ax(){let t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new P,color:new Zt};break;case"SpotLight":n={position:new P,direction:new P,color:new Zt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new P,color:new Zt,distance:0,decay:0};break;case"HemisphereLight":n={direction:new P,skyColor:new Zt,groundColor:new Zt};break;case"RectAreaLight":n={color:new Zt,position:new P,halfWidth:new P,halfHeight:new P};break}return t[e.id]=n,n}}}function Rx(){let t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new K};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new K};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new K,shadowCameraNear:1,shadowCameraFar:1000};break}return t[e.id]=n,n}}}var Cx=0;function Px(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function Ix(t){let e=new Ax,n=Rx(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new P);let s=new P,r=new re,a=new re;function o(c){let h=0,d=0,u=0;for(let M=0;M<9;M++)i.probe[M].set(0,0,0);let f=0,g=0,v=0,m=0,p=0,R=0,E=0,x=0,T=0,w=0,A=0;c.sort(Px);for(let M=0,U=c.length;M<U;M++){let C=c[M],{color:k,intensity:q,distance:F}=C,V=null;if(C.shadow&&C.shadow.map)if(C.shadow.map.texture.format===Pi)V=C.shadow.map.texture;else V=C.shadow.map.depthTexture||C.shadow.map.texture;if(C.isAmbientLight)h+=k.r*q,d+=k.g*q,u+=k.b*q;else if(C.isLightProbe){for(let W=0;W<9;W++)i.probe[W].addScaledVector(C.sh.coefficients[W],q);A++}else if(C.isDirectionalLight){let W=e.get(C);if(W.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){let O=C.shadow,j=n.get(C);j.shadowIntensity=O.intensity,j.shadowBias=O.bias,j.shadowNormalBias=O.normalBias,j.shadowRadius=O.radius,j.shadowMapSize=O.mapSize,i.directionalShadow[f]=j,i.directionalShadowMap[f]=V,i.directionalShadowMatrix[f]=C.shadow.matrix,R++}i.directional[f]=W,f++}else if(C.isSpotLight){let W=e.get(C);W.position.setFromMatrixPosition(C.matrixWorld),W.color.copy(k).multiplyScalar(q),W.distance=F,W.coneCos=Math.cos(C.angle),W.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),W.decay=C.decay,i.spot[v]=W;let O=C.shadow;if(C.map){if(i.spotLightMap[T]=C.map,T++,O.updateMatrices(C),C.castShadow)w++}if(i.spotLightMatrix[v]=O.matrix,C.castShadow){let j=n.get(C);j.shadowIntensity=O.intensity,j.shadowBias=O.bias,j.shadowNormalBias=O.normalBias,j.shadowRadius=O.radius,j.shadowMapSize=O.mapSize,i.spotShadow[v]=j,i.spotShadowMap[v]=V,x++}v++}else if(C.isRectAreaLight){let W=e.get(C);W.color.copy(k).multiplyScalar(q),W.halfWidth.set(C.width*0.5,0,0),W.halfHeight.set(0,C.height*0.5,0),i.rectArea[m]=W,m++}else if(C.isPointLight){let W=e.get(C);if(W.color.copy(C.color).multiplyScalar(C.intensity),W.distance=C.distance,W.decay=C.decay,C.castShadow){let O=C.shadow,j=n.get(C);j.shadowIntensity=O.intensity,j.shadowBias=O.bias,j.shadowNormalBias=O.normalBias,j.shadowRadius=O.radius,j.shadowMapSize=O.mapSize,j.shadowCameraNear=O.camera.near,j.shadowCameraFar=O.camera.far,i.pointShadow[g]=j,i.pointShadowMap[g]=V,i.pointShadowMatrix[g]=C.shadow.matrix,E++}i.point[g]=W,g++}else if(C.isHemisphereLight){let W=e.get(C);W.skyColor.copy(C.color).multiplyScalar(q),W.groundColor.copy(C.groundColor).multiplyScalar(q),i.hemi[p]=W,p++}}if(m>0)if(t.has("OES_texture_float_linear")===!0)i.rectAreaLTC1=_t.LTC_FLOAT_1,i.rectAreaLTC2=_t.LTC_FLOAT_2;else i.rectAreaLTC1=_t.LTC_HALF_1,i.rectAreaLTC2=_t.LTC_HALF_2;i.ambient[0]=h,i.ambient[1]=d,i.ambient[2]=u;let _=i.hash;if(_.directionalLength!==f||_.pointLength!==g||_.spotLength!==v||_.rectAreaLength!==m||_.hemiLength!==p||_.numDirectionalShadows!==R||_.numPointShadows!==E||_.numSpotShadows!==x||_.numSpotMaps!==T||_.numLightProbes!==A)i.directional.length=f,i.spot.length=v,i.rectArea.length=m,i.point.length=g,i.hemi.length=p,i.directionalShadow.length=R,i.directionalShadowMap.length=R,i.pointShadow.length=E,i.pointShadowMap.length=E,i.spotShadow.length=x,i.spotShadowMap.length=x,i.directionalShadowMatrix.length=R,i.pointShadowMatrix.length=E,i.spotLightMatrix.length=x+T-w,i.spotLightMap.length=T,i.numSpotLightShadowsWithMaps=w,i.numLightProbes=A,_.directionalLength=f,_.pointLength=g,_.spotLength=v,_.rectAreaLength=m,_.hemiLength=p,_.numDirectionalShadows=R,_.numPointShadows=E,_.numSpotShadows=x,_.numSpotMaps=T,_.numLightProbes=A,i.version=Cx++}function l(c,h){let d=0,u=0,f=0,g=0,v=0,m=h.matrixWorldInverse;for(let p=0,R=c.length;p<R;p++){let E=c[p];if(E.isDirectionalLight){let x=i.directional[d];x.direction.setFromMatrixPosition(E.matrixWorld),s.setFromMatrixPosition(E.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(m),d++}else if(E.isSpotLight){let x=i.spot[f];x.position.setFromMatrixPosition(E.matrixWorld),x.position.applyMatrix4(m),x.direction.setFromMatrixPosition(E.matrixWorld),s.setFromMatrixPosition(E.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(m),f++}else if(E.isRectAreaLight){let x=i.rectArea[g];x.position.setFromMatrixPosition(E.matrixWorld),x.position.applyMatrix4(m),a.identity(),r.copy(E.matrixWorld),r.premultiply(m),a.extractRotation(r),x.halfWidth.set(E.width*0.5,0,0),x.halfHeight.set(0,E.height*0.5,0),x.halfWidth.applyMatrix4(a),x.halfHeight.applyMatrix4(a),g++}else if(E.isPointLight){let x=i.point[u];x.position.setFromMatrixPosition(E.matrixWorld),x.position.applyMatrix4(m),u++}else if(E.isHemisphereLight){let x=i.hemi[v];x.direction.setFromMatrixPosition(E.matrixWorld),x.direction.transformDirection(m),v++}}}return{setup:o,setupView:l,state:i}}function Bd(t){let e=new Ix(t),n=[],i=[],s=[];function r(u){d.camera=u,n.length=0,i.length=0,s.length=0}function a(u){n.push(u)}function o(u){i.push(u)}function l(u){s.push(u)}function c(){e.setup(n)}function h(u){e.setupView(n,u)}let d={lightsArray:n,shadowsArray:i,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:d,setupLights:c,setupLightsView:h,pushLight:a,pushShadow:o,pushLightProbeGrid:l}}function Lx(t){let e=new WeakMap;function n(s,r=0){let a=e.get(s),o;if(a===void 0)o=new Bd(t),e.set(s,[o]);else if(r>=a.length)o=new Bd(t),a.push(o);else o=a[r];return o}function i(){e=new WeakMap}return{get:n,dispose:i}}var Dx=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Nx=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,Ux=[new P(1,0,0),new P(-1,0,0),new P(0,1,0),new P(0,-1,0),new P(0,0,1),new P(0,0,-1)],Fx=[new P(0,-1,0),new P(0,-1,0),new P(0,0,1),new P(0,0,-1),new P(0,-1,0),new P(0,-1,0)],zd=new re,Ar=new P,Fc=new P;function Ox(t,e,n){let i=new xr,s=new K,r=new K,a=new Me,o=new fc,l=new pc,c={},h=n.maxTextureSize,d={[Es]:Ke,[Ke]:Es,[Cn]:Cn},u=new dn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new K},radius:{value:4}},vertexShader:Dx,fragmentShader:Nx}),f=u.clone();f.defines.HORIZONTAL_PASS=1;let g=new Se;g.setAttribute("position",new He(new Float32Array([-1,-1,0.5,3,-1,0.5,-1,3,0.5]),3));let v=new oe(g,u),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=or;let p=this.type;this.render=function(w,A,_){if(m.enabled===!1)return;if(m.autoUpdate===!1&&m.needsUpdate===!1)return;if(w.length===0)return;if(this.type===ga)Ut("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=or;let M=t.getRenderTarget(),U=t.getActiveCubeFace(),C=t.getActiveMipmapLevel(),k=t.state;if(k.setBlending(Pn),k.buffers.depth.getReversed()===!0)k.buffers.color.setClear(0,0,0,0);else k.buffers.color.setClear(1,1,1,1);k.buffers.depth.setTest(!0),k.setScissorTest(!1);let q=p!==this.type;if(q)A.traverse(function(F){if(F.material)if(Array.isArray(F.material))F.material.forEach((V)=>V.needsUpdate=!0);else F.material.needsUpdate=!0});for(let F=0,V=w.length;F<V;F++){let W=w[F],O=W.shadow;if(O===void 0){Ut("WebGLShadowMap:",W,"has no shadow.");continue}if(O.autoUpdate===!1&&O.needsUpdate===!1)continue;s.copy(O.mapSize);let j=O.getFrameExtents();if(s.multiply(j),r.copy(O.mapSize),s.x>h||s.y>h){if(s.x>h)r.x=Math.floor(h/j.x),s.x=r.x*j.x,O.mapSize.x=r.x;if(s.y>h)r.y=Math.floor(h/j.y),s.y=r.y*j.y,O.mapSize.y=r.y}let rt=t.state.buffers.depth.getReversed();if(O.camera._reversedDepth=rt,O.map===null||q===!0){if(O.map!==null){if(O.map.depthTexture!==null)O.map.depthTexture.dispose(),O.map.depthTexture=null;O.map.dispose()}if(this.type===bs){if(W.isPointLight){Ut("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}O.map=new hn(s.x,s.y,{format:Pi,type:Yn,minFilter:Ve,magFilter:Ve,generateMipmaps:!1}),O.map.texture.name=W.name+".shadowMap",O.map.depthTexture=new ui(s.x,s.y,qn),O.map.depthTexture.name=W.name+".shadowMapDepth",O.map.depthTexture.format=Ri,O.map.depthTexture.compareFunction=null,O.map.depthTexture.minFilter=li,O.map.depthTexture.magFilter=li}else{if(W.isPointLight)O.map=new kc(s.x),O.map.depthTexture=new ic(s.x,ci);else O.map=new hn(s.x,s.y),O.map.depthTexture=new ui(s.x,s.y,ci);if(O.map.depthTexture.name=W.name+".shadowMap",O.map.depthTexture.format=Ri,this.type===or)O.map.depthTexture.compareFunction=rt?Ra:Aa,O.map.depthTexture.minFilter=Ve,O.map.depthTexture.magFilter=Ve;else O.map.depthTexture.compareFunction=null,O.map.depthTexture.minFilter=li,O.map.depthTexture.magFilter=li}O.camera.updateProjectionMatrix()}let lt=O.map.isWebGLCubeRenderTarget?6:1;for(let Rt=0;Rt<lt;Rt++){if(O.map.isWebGLCubeRenderTarget)t.setRenderTarget(O.map,Rt),t.clear();else{if(Rt===0)t.setRenderTarget(O.map),t.clear();let St=O.getViewport(Rt);a.set(r.x*St.x,r.y*St.y,r.x*St.z,r.y*St.w),k.viewport(a)}if(W.isPointLight){let{camera:St,matrix:he}=O,ae=W.distance||St.far;if(ae!==St.far)St.far=ae,St.updateProjectionMatrix();Ar.setFromMatrixPosition(W.matrixWorld),St.position.copy(Ar),Fc.copy(St.position),Fc.add(Ux[Rt]),St.up.copy(Fx[Rt]),St.lookAt(Fc),St.updateMatrixWorld(),he.makeTranslation(-Ar.x,-Ar.y,-Ar.z),zd.multiplyMatrices(St.projectionMatrix,St.matrixWorldInverse),O._frustum.setFromProjectionMatrix(zd,St.coordinateSystem,St.reversedDepth)}else O.updateMatrices(W);i=O.getFrustum(),x(A,_,O.camera,W,this.type)}if(O.isPointLightShadow!==!0&&this.type===bs)R(O,_);O.needsUpdate=!1}p=this.type,m.needsUpdate=!1,t.setRenderTarget(M,U,C)};function R(w,A){let _=e.update(v);if(u.defines.VSM_SAMPLES!==w.blurSamples)u.defines.VSM_SAMPLES=w.blurSamples,f.defines.VSM_SAMPLES=w.blurSamples,u.needsUpdate=!0,f.needsUpdate=!0;if(w.mapPass===null)w.mapPass=new hn(s.x,s.y,{format:Pi,type:Yn});u.uniforms.shadow_pass.value=w.map.depthTexture,u.uniforms.resolution.value=w.mapSize,u.uniforms.radius.value=w.radius,t.setRenderTarget(w.mapPass),t.clear(),t.renderBufferDirect(A,null,_,u,v,null),f.uniforms.shadow_pass.value=w.mapPass.texture,f.uniforms.resolution.value=w.mapSize,f.uniforms.radius.value=w.radius,t.setRenderTarget(w.map),t.clear(),t.renderBufferDirect(A,null,_,f,v,null)}function E(w,A,_,M){let U=null,C=_.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(C!==void 0)U=C;else if(U=_.isPointLight===!0?l:o,t.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0||A.alphaToCoverage===!0){let k=U.uuid,q=A.uuid,F=c[k];if(F===void 0)F={},c[k]=F;let V=F[q];if(V===void 0)V=U.clone(),F[q]=V,A.addEventListener("dispose",T);U=V}if(U.visible=A.visible,U.wireframe=A.wireframe,M===bs)U.side=A.shadowSide!==null?A.shadowSide:A.side;else U.side=A.shadowSide!==null?A.shadowSide:d[A.side];if(U.alphaMap=A.alphaMap,U.alphaTest=A.alphaToCoverage===!0?0.5:A.alphaTest,U.map=A.map,U.clipShadows=A.clipShadows,U.clippingPlanes=A.clippingPlanes,U.clipIntersection=A.clipIntersection,U.displacementMap=A.displacementMap,U.displacementScale=A.displacementScale,U.displacementBias=A.displacementBias,U.wireframeLinewidth=A.wireframeLinewidth,U.linewidth=A.linewidth,_.isPointLight===!0&&U.isMeshDistanceMaterial===!0){let k=t.properties.get(U);k.light=_}return U}function x(w,A,_,M,U){if(w.visible===!1)return;if(w.layers.test(A.layers)&&(w.isMesh||w.isLine||w.isPoints)){if((w.castShadow||w.receiveShadow&&U===bs)&&(!w.frustumCulled||i.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(_.matrixWorldInverse,w.matrixWorld);let q=e.update(w),F=w.material;if(Array.isArray(F)){let V=q.groups;for(let W=0,O=V.length;W<O;W++){let j=V[W],rt=F[j.materialIndex];if(rt&&rt.visible){let lt=E(w,rt,M,U);w.onBeforeShadow(t,w,A,_,q,lt,j),t.renderBufferDirect(_,null,q,lt,w,j),w.onAfterShadow(t,w,A,_,q,lt,j)}}}else if(F.visible){let V=E(w,F,M,U);w.onBeforeShadow(t,w,A,_,q,V,null),t.renderBufferDirect(_,null,q,V,w,null),w.onAfterShadow(t,w,A,_,q,V,null)}}}let k=w.children;for(let q=0,F=k.length;q<F;q++)x(k[q],A,_,M,U)}function T(w){w.target.removeEventListener("dispose",T);for(let _ in c){let M=c[_],U=w.target.uuid;if(U in M)M[U].dispose(),delete M[U]}}}function Bx(t,e){function n(){let D=!1,ht=new Me,Y=null,ft=new Me(0,0,0,0);return{setMask:function(Tt){if(Y!==Tt&&!D)t.colorMask(Tt,Tt,Tt,Tt),Y=Tt},setLocked:function(Tt){D=Tt},setClear:function(Tt,et,pt,qt,Ee){if(Ee===!0)Tt*=qt,et*=qt,pt*=qt;if(ht.set(Tt,et,pt,qt),ft.equals(ht)===!1)t.clearColor(Tt,et,pt,qt),ft.copy(ht)},reset:function(){D=!1,Y=null,ft.set(-1,0,0,0)}}}function i(){let D=!1,ht=!1,Y=null,ft=null,Tt=null;return{setReversed:function(et){if(ht!==et){let pt=e.get("EXT_clip_control");if(et)pt.clipControlEXT(pt.LOWER_LEFT_EXT,pt.ZERO_TO_ONE_EXT);else pt.clipControlEXT(pt.LOWER_LEFT_EXT,pt.NEGATIVE_ONE_TO_ONE_EXT);ht=et;let qt=Tt;Tt=null,this.setClear(qt)}},getReversed:function(){return ht},setTest:function(et){if(et)dt(t.DEPTH_TEST);else Ft(t.DEPTH_TEST)},setMask:function(et){if(Y!==et&&!D)t.depthMask(et),Y=et},setFunc:function(et){if(ht)et=rd[et];if(ft!==et){switch(et){case Pu:t.depthFunc(t.NEVER);break;case Iu:t.depthFunc(t.ALWAYS);break;case Lu:t.depthFunc(t.LESS);break;case il:t.depthFunc(t.LEQUAL);break;case Du:t.depthFunc(t.EQUAL);break;case Nu:t.depthFunc(t.GEQUAL);break;case Uu:t.depthFunc(t.GREATER);break;case Fu:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}ft=et}},setLocked:function(et){D=et},setClear:function(et){if(Tt!==et){if(Tt=et,ht)et=1-et;t.clearDepth(et)}},reset:function(){D=!1,Y=null,ft=null,Tt=null,ht=!1}}}function s(){let D=!1,ht=null,Y=null,ft=null,Tt=null,et=null,pt=null,qt=null,Ee=null;return{setTest:function(xe){if(!D)if(xe)dt(t.STENCIL_TEST);else Ft(t.STENCIL_TEST)},setMask:function(xe){if(ht!==xe&&!D)t.stencilMask(xe),ht=xe},setFunc:function(xe,En,Bn){if(Y!==xe||ft!==En||Tt!==Bn)t.stencilFunc(xe,En,Bn),Y=xe,ft=En,Tt=Bn},setOp:function(xe,En,Bn){if(et!==xe||pt!==En||qt!==Bn)t.stencilOp(xe,En,Bn),et=xe,pt=En,qt=Bn},setLocked:function(xe){D=xe},setClear:function(xe){if(Ee!==xe)t.clearStencil(xe),Ee=xe},reset:function(){D=!1,ht=null,Y=null,ft=null,Tt=null,et=null,pt=null,qt=null,Ee=null}}}let r=new n,a=new i,o=new s,l=new WeakMap,c=new WeakMap,h={},d={},u={},f=new WeakMap,g=[],v=null,m=!1,p=null,R=null,E=null,x=null,T=null,w=null,A=null,_=new Zt(0,0,0),M=0,U=!1,C=null,k=null,q=null,F=null,V=null,W=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS),O=!1,j=0,rt=t.getParameter(t.VERSION);if(rt.indexOf("WebGL")!==-1)j=parseFloat(/^WebGL (\d)/.exec(rt)[1]),O=j>=1;else if(rt.indexOf("OpenGL ES")!==-1)j=parseFloat(/^OpenGL ES (\d)/.exec(rt)[1]),O=j>=2;let lt=null,Rt={},St=t.getParameter(t.SCISSOR_BOX),he=t.getParameter(t.VIEWPORT),ae=new Me().fromArray(St),Z=new Me().fromArray(he);function ct(D,ht,Y,ft){let Tt=new Uint8Array(4),et=t.createTexture();t.bindTexture(D,et),t.texParameteri(D,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(D,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let pt=0;pt<Y;pt++)if(D===t.TEXTURE_3D||D===t.TEXTURE_2D_ARRAY)t.texImage3D(ht,0,t.RGBA,1,1,ft,0,t.RGBA,t.UNSIGNED_BYTE,Tt);else t.texImage2D(ht+pt,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,Tt);return et}let bt={};bt[t.TEXTURE_2D]=ct(t.TEXTURE_2D,t.TEXTURE_2D,1),bt[t.TEXTURE_CUBE_MAP]=ct(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),bt[t.TEXTURE_2D_ARRAY]=ct(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),bt[t.TEXTURE_3D]=ct(t.TEXTURE_3D,t.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),dt(t.DEPTH_TEST),a.setFunc(il),Et(!1),Pt(Qo),dt(t.CULL_FACE),nt(Pn);function dt(D){if(h[D]!==!0)t.enable(D),h[D]=!0}function Ft(D){if(h[D]!==!1)t.disable(D),h[D]=!1}function ne(D,ht){if(u[D]!==ht){if(t.bindFramebuffer(D,ht),u[D]=ht,D===t.DRAW_FRAMEBUFFER)u[t.FRAMEBUFFER]=ht;if(D===t.FRAMEBUFFER)u[t.DRAW_FRAMEBUFFER]=ht;return!0}return!1}function kt(D,ht){let Y=g,ft=!1;if(D){if(Y=f.get(ht),Y===void 0)Y=[],f.set(ht,Y);let Tt=D.textures;if(Y.length!==Tt.length||Y[0]!==t.COLOR_ATTACHMENT0){for(let et=0,pt=Tt.length;et<pt;et++)Y[et]=t.COLOR_ATTACHMENT0+et;Y.length=Tt.length,ft=!0}}else if(Y[0]!==t.BACK)Y[0]=t.BACK,ft=!0;if(ft)t.drawBuffers(Y)}function Ht(D){if(v!==D)return t.useProgram(D),v=D,!0;return!1}let Q={[Ts]:t.FUNC_ADD,[uu]:t.FUNC_SUBTRACT,[du]:t.FUNC_REVERSE_SUBTRACT};Q[fu]=t.MIN,Q[pu]=t.MAX;let it={[mu]:t.ZERO,[gu]:t.ONE,[_u]:t.SRC_COLOR,[yu]:t.SRC_ALPHA,[Tu]:t.SRC_ALPHA_SATURATE,[bu]:t.DST_COLOR,[Mu]:t.DST_ALPHA,[xu]:t.ONE_MINUS_SRC_COLOR,[vu]:t.ONE_MINUS_SRC_ALPHA,[Eu]:t.ONE_MINUS_DST_COLOR,[Su]:t.ONE_MINUS_DST_ALPHA,[wu]:t.CONSTANT_COLOR,[Au]:t.ONE_MINUS_CONSTANT_COLOR,[Ru]:t.CONSTANT_ALPHA,[Cu]:t.ONE_MINUS_CONSTANT_ALPHA};function nt(D,ht,Y,ft,Tt,et,pt,qt,Ee,xe){if(D===Pn){if(m===!0)Ft(t.BLEND),m=!1;return}if(m===!1)dt(t.BLEND),m=!0;if(D!==hu){if(D!==p||xe!==U){if(R!==Ts||T!==Ts)t.blendEquation(t.FUNC_ADD),R=Ts,T=Ts;if(xe)switch(D){case lr:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case tl:t.blendFunc(t.ONE,t.ONE);break;case el:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case nl:t.blendFuncSeparate(t.DST_COLOR,t.ONE_MINUS_SRC_ALPHA,t.ZERO,t.ONE);break;default:Bt("WebGLState: Invalid blending: ",D);break}else switch(D){case lr:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case tl:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE,t.ONE,t.ONE);break;case el:Bt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case nl:Bt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Bt("WebGLState: Invalid blending: ",D);break}E=null,x=null,w=null,A=null,_.set(0,0,0),M=0,p=D,U=xe}return}if(Tt=Tt||ht,et=et||Y,pt=pt||ft,ht!==R||Tt!==T)t.blendEquationSeparate(Q[ht],Q[Tt]),R=ht,T=Tt;if(Y!==E||ft!==x||et!==w||pt!==A)t.blendFuncSeparate(it[Y],it[ft],it[et],it[pt]),E=Y,x=ft,w=et,A=pt;if(qt.equals(_)===!1||Ee!==M)t.blendColor(qt.r,qt.g,qt.b,Ee),_.copy(qt),M=Ee;p=D,U=!1}function vt(D,ht){D.side===Cn?Ft(t.CULL_FACE):dt(t.CULL_FACE);let Y=D.side===Ke;if(ht)Y=!Y;Et(Y),D.blending===lr&&D.transparent===!1?nt(Pn):nt(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),a.setFunc(D.depthFunc),a.setTest(D.depthTest),a.setMask(D.depthWrite),r.setMask(D.colorWrite);let ft=D.stencilWrite;if(o.setTest(ft),ft)o.setMask(D.stencilWriteMask),o.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),o.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass);Wt(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?dt(t.SAMPLE_ALPHA_TO_COVERAGE):Ft(t.SAMPLE_ALPHA_TO_COVERAGE)}function Et(D){if(C!==D){if(D)t.frontFace(t.CW);else t.frontFace(t.CCW);C=D}}function Pt(D){if(D!==lu){if(dt(t.CULL_FACE),D!==k)if(D===Qo)t.cullFace(t.BACK);else if(D===cu)t.cullFace(t.FRONT);else t.cullFace(t.FRONT_AND_BACK)}else Ft(t.CULL_FACE);k=D}function Lt(D){if(D!==q){if(O)t.lineWidth(D);q=D}}function Wt(D,ht,Y){if(D){if(dt(t.POLYGON_OFFSET_FILL),F!==ht||V!==Y){if(F=ht,V=Y,a.getReversed())ht=-ht;t.polygonOffset(ht,Y)}}else Ft(t.POLYGON_OFFSET_FILL)}function Xt(D){if(D)dt(t.SCISSOR_TEST);else Ft(t.SCISSOR_TEST)}function I(D){if(D===void 0)D=t.TEXTURE0+W-1;if(lt!==D)t.activeTexture(D),lt=D}function _e(D,ht,Y){if(Y===void 0)if(lt===null)Y=t.TEXTURE0+W-1;else Y=lt;let ft=Rt[Y];if(ft===void 0)ft={type:void 0,texture:void 0},Rt[Y]=ft;if(ft.type!==D||ft.texture!==ht){if(lt!==Y)t.activeTexture(Y),lt=Y;t.bindTexture(D,ht||bt[D]),ft.type=D,ft.texture=ht}}function Qt(){let D=Rt[lt];if(D!==void 0&&D.type!==void 0)t.bindTexture(D.type,null),D.type=void 0,D.texture=void 0}function Kt(){try{t.compressedTexImage2D(...arguments)}catch(D){Bt("WebGLState:",D)}}function b(){try{t.compressedTexImage3D(...arguments)}catch(D){Bt("WebGLState:",D)}}function y(){try{t.texSubImage2D(...arguments)}catch(D){Bt("WebGLState:",D)}}function L(){try{t.texSubImage3D(...arguments)}catch(D){Bt("WebGLState:",D)}}function G(){try{t.compressedTexSubImage2D(...arguments)}catch(D){Bt("WebGLState:",D)}}function tt(){try{t.compressedTexSubImage3D(...arguments)}catch(D){Bt("WebGLState:",D)}}function at(){try{t.texStorage2D(...arguments)}catch(D){Bt("WebGLState:",D)}}function ut(){try{t.texStorage3D(...arguments)}catch(D){Bt("WebGLState:",D)}}function X(){try{t.texImage2D(...arguments)}catch(D){Bt("WebGLState:",D)}}function J(){try{t.texImage3D(...arguments)}catch(D){Bt("WebGLState:",D)}}function Mt(D){if(d[D]!==void 0)return d[D];else return t.getParameter(D)}function It(D,ht){if(d[D]!==ht)t.pixelStorei(D,ht),d[D]=ht}function gt(D){if(ae.equals(D)===!1)t.scissor(D.x,D.y,D.z,D.w),ae.copy(D)}function ot(D){if(Z.equals(D)===!1)t.viewport(D.x,D.y,D.z,D.w),Z.copy(D)}function Ot(D,ht){let Y=c.get(ht);if(Y===void 0)Y=new WeakMap,c.set(ht,Y);let ft=Y.get(D);if(ft===void 0)ft=t.getUniformBlockIndex(ht,D.name),Y.set(D,ft)}function zt(D,ht){let ft=c.get(ht).get(D);if(l.get(ht)!==ft)t.uniformBlockBinding(ht,ft,D.__bindingPointIndex),l.set(ht,ft)}function se(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),a.setReversed(!1),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),t.pixelStorei(t.PACK_ALIGNMENT,4),t.pixelStorei(t.UNPACK_ALIGNMENT,4),t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,!1),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,t.BROWSER_DEFAULT_WEBGL),t.pixelStorei(t.PACK_ROW_LENGTH,0),t.pixelStorei(t.PACK_SKIP_PIXELS,0),t.pixelStorei(t.PACK_SKIP_ROWS,0),t.pixelStorei(t.UNPACK_ROW_LENGTH,0),t.pixelStorei(t.UNPACK_IMAGE_HEIGHT,0),t.pixelStorei(t.UNPACK_SKIP_PIXELS,0),t.pixelStorei(t.UNPACK_SKIP_ROWS,0),t.pixelStorei(t.UNPACK_SKIP_IMAGES,0),h={},d={},lt=null,Rt={},u={},f=new WeakMap,g=[],v=null,m=!1,p=null,R=null,E=null,x=null,T=null,w=null,A=null,_=new Zt(0,0,0),M=0,U=!1,C=null,k=null,q=null,F=null,V=null,ae.set(0,0,t.canvas.width,t.canvas.height),Z.set(0,0,t.canvas.width,t.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:dt,disable:Ft,bindFramebuffer:ne,drawBuffers:kt,useProgram:Ht,setBlending:nt,setMaterial:vt,setFlipSided:Et,setCullFace:Pt,setLineWidth:Lt,setPolygonOffset:Wt,setScissorTest:Xt,activeTexture:I,bindTexture:_e,unbindTexture:Qt,compressedTexImage2D:Kt,compressedTexImage3D:b,texImage2D:X,texImage3D:J,pixelStorei:It,getParameter:Mt,updateUBOMapping:Ot,uniformBlockBinding:zt,texStorage2D:at,texStorage3D:ut,texSubImage2D:y,texSubImage3D:L,compressedTexSubImage2D:G,compressedTexSubImage3D:tt,scissor:gt,viewport:ot,reset:se}}function zx(t,e,n,i,s,r,a){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new K,h=new WeakMap,d=new Set,u,f=new WeakMap,g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch(b){}function v(b,y){return g?new OffscreenCanvas(b,y):er("canvas")}function m(b,y,L){let G=1,tt=Kt(b);if(tt.width>L||tt.height>L)G=L/Math.max(tt.width,tt.height);if(G<1)if(typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&b instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&b instanceof ImageBitmap||typeof VideoFrame<"u"&&b instanceof VideoFrame){let at=Math.floor(G*tt.width),ut=Math.floor(G*tt.height);if(u===void 0)u=v(at,ut);let X=y?v(at,ut):u;return X.width=at,X.height=ut,X.getContext("2d").drawImage(b,0,0,at,ut),Ut("WebGLRenderer: Texture has been resized from ("+tt.width+"x"+tt.height+") to ("+at+"x"+ut+")."),X}else{if("data"in b)Ut("WebGLRenderer: Image in DataTexture is too big ("+tt.width+"x"+tt.height+").");return b}return b}function p(b){return b.generateMipmaps}function R(b){t.generateMipmap(b)}function E(b){if(b.isWebGLCubeRenderTarget)return t.TEXTURE_CUBE_MAP;if(b.isWebGL3DRenderTarget)return t.TEXTURE_3D;if(b.isWebGLArrayRenderTarget||b.isCompressedArrayTexture)return t.TEXTURE_2D_ARRAY;return t.TEXTURE_2D}function x(b,y,L,G,tt,at=!1){if(b!==null){if(t[b]!==void 0)return t[b];Ut("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+b+"'")}let ut;if(G){if(ut=e.get("EXT_texture_norm16"),!ut)Ut("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension")}let X=y;if(y===t.RED){if(L===t.FLOAT)X=t.R32F;if(L===t.HALF_FLOAT)X=t.R16F;if(L===t.UNSIGNED_BYTE)X=t.R8;if(L===t.UNSIGNED_SHORT&&ut)X=ut.R16_EXT;if(L===t.SHORT&&ut)X=ut.R16_SNORM_EXT}if(y===t.RED_INTEGER){if(L===t.UNSIGNED_BYTE)X=t.R8UI;if(L===t.UNSIGNED_SHORT)X=t.R16UI;if(L===t.UNSIGNED_INT)X=t.R32UI;if(L===t.BYTE)X=t.R8I;if(L===t.SHORT)X=t.R16I;if(L===t.INT)X=t.R32I}if(y===t.RG){if(L===t.FLOAT)X=t.RG32F;if(L===t.HALF_FLOAT)X=t.RG16F;if(L===t.UNSIGNED_BYTE)X=t.RG8;if(L===t.UNSIGNED_SHORT&&ut)X=ut.RG16_EXT;if(L===t.SHORT&&ut)X=ut.RG16_SNORM_EXT}if(y===t.RG_INTEGER){if(L===t.UNSIGNED_BYTE)X=t.RG8UI;if(L===t.UNSIGNED_SHORT)X=t.RG16UI;if(L===t.UNSIGNED_INT)X=t.RG32UI;if(L===t.BYTE)X=t.RG8I;if(L===t.SHORT)X=t.RG16I;if(L===t.INT)X=t.RG32I}if(y===t.RGB_INTEGER){if(L===t.UNSIGNED_BYTE)X=t.RGB8UI;if(L===t.UNSIGNED_SHORT)X=t.RGB16UI;if(L===t.UNSIGNED_INT)X=t.RGB32UI;if(L===t.BYTE)X=t.RGB8I;if(L===t.SHORT)X=t.RGB16I;if(L===t.INT)X=t.RGB32I}if(y===t.RGBA_INTEGER){if(L===t.UNSIGNED_BYTE)X=t.RGBA8UI;if(L===t.UNSIGNED_SHORT)X=t.RGBA16UI;if(L===t.UNSIGNED_INT)X=t.RGBA32UI;if(L===t.BYTE)X=t.RGBA8I;if(L===t.SHORT)X=t.RGBA16I;if(L===t.INT)X=t.RGBA32I}if(y===t.RGB){if(L===t.UNSIGNED_SHORT&&ut)X=ut.RGB16_EXT;if(L===t.SHORT&&ut)X=ut.RGB16_SNORM_EXT;if(L===t.UNSIGNED_INT_5_9_9_9_REV)X=t.RGB9_E5;if(L===t.UNSIGNED_INT_10F_11F_11F_REV)X=t.R11F_G11F_B10F}if(y===t.RGBA){let J=at?$l:ee.getTransfer(tt);if(L===t.FLOAT)X=t.RGBA32F;if(L===t.HALF_FLOAT)X=t.RGBA16F;if(L===t.UNSIGNED_BYTE)X=J===me?t.SRGB8_ALPHA8:t.RGBA8;if(L===t.UNSIGNED_SHORT&&ut)X=ut.RGBA16_EXT;if(L===t.SHORT&&ut)X=ut.RGBA16_SNORM_EXT;if(L===t.UNSIGNED_SHORT_4_4_4_4)X=t.RGBA4;if(L===t.UNSIGNED_SHORT_5_5_5_1)X=t.RGB5_A1}if(X===t.R16F||X===t.R32F||X===t.RG16F||X===t.RG32F||X===t.RGBA16F||X===t.RGBA32F)e.get("EXT_color_buffer_float");return X}function T(b,y){let L;if(b){if(y===null||y===ci||y===As)L=t.DEPTH24_STENCIL8;else if(y===qn)L=t.DEPTH32F_STENCIL8;else if(y===dr)L=t.DEPTH24_STENCIL8,Ut("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")}else if(y===null||y===ci||y===As)L=t.DEPTH_COMPONENT24;else if(y===qn)L=t.DEPTH_COMPONENT32F;else if(y===dr)L=t.DEPTH_COMPONENT16;return L}function w(b,y){if(p(b)===!0||b.isFramebufferTexture&&b.minFilter!==li&&b.minFilter!==Ve)return Math.log2(Math.max(y.width,y.height))+1;else if(b.mipmaps!==void 0&&b.mipmaps.length>0)return b.mipmaps.length;else if(b.isCompressedTexture&&Array.isArray(b.image))return y.mipmaps.length;else return 1}function A(b){let y=b.target;if(y.removeEventListener("dispose",A),M(y),y.isVideoTexture)h.delete(y);if(y.isHTMLTexture)d.delete(y)}function _(b){let y=b.target;y.removeEventListener("dispose",_),C(y)}function M(b){let y=i.get(b);if(y.__webglInit===void 0)return;let L=b.source,G=f.get(L);if(G){let tt=G[y.__cacheKey];if(tt.usedTimes--,tt.usedTimes===0)U(b);if(Object.keys(G).length===0)f.delete(L)}i.remove(b)}function U(b){let y=i.get(b);t.deleteTexture(y.__webglTexture);let L=b.source,G=f.get(L);delete G[y.__cacheKey],a.memory.textures--}function C(b){let y=i.get(b);if(b.depthTexture)b.depthTexture.dispose(),i.remove(b.depthTexture);if(b.isWebGLCubeRenderTarget)for(let G=0;G<6;G++){if(Array.isArray(y.__webglFramebuffer[G]))for(let tt=0;tt<y.__webglFramebuffer[G].length;tt++)t.deleteFramebuffer(y.__webglFramebuffer[G][tt]);else t.deleteFramebuffer(y.__webglFramebuffer[G]);if(y.__webglDepthbuffer)t.deleteRenderbuffer(y.__webglDepthbuffer[G])}else{if(Array.isArray(y.__webglFramebuffer))for(let G=0;G<y.__webglFramebuffer.length;G++)t.deleteFramebuffer(y.__webglFramebuffer[G]);else t.deleteFramebuffer(y.__webglFramebuffer);if(y.__webglDepthbuffer)t.deleteRenderbuffer(y.__webglDepthbuffer);if(y.__webglMultisampledFramebuffer)t.deleteFramebuffer(y.__webglMultisampledFramebuffer);if(y.__webglColorRenderbuffer){for(let G=0;G<y.__webglColorRenderbuffer.length;G++)if(y.__webglColorRenderbuffer[G])t.deleteRenderbuffer(y.__webglColorRenderbuffer[G])}if(y.__webglDepthRenderbuffer)t.deleteRenderbuffer(y.__webglDepthRenderbuffer)}let L=b.textures;for(let G=0,tt=L.length;G<tt;G++){let at=i.get(L[G]);if(at.__webglTexture)t.deleteTexture(at.__webglTexture),a.memory.textures--;i.remove(L[G])}i.remove(b)}let k=0;function q(){k=0}function F(){return k}function V(b){k=b}function W(){let b=k;if(b>=s.maxTextures)Ut("WebGLTextures: Trying to use "+b+" texture units while this GPU supports only "+s.maxTextures);return k+=1,b}function O(b){let y=[];return y.push(b.wrapS),y.push(b.wrapT),y.push(b.wrapR||0),y.push(b.magFilter),y.push(b.minFilter),y.push(b.anisotropy),y.push(b.internalFormat),y.push(b.format),y.push(b.type),y.push(b.generateMipmaps),y.push(b.premultiplyAlpha),y.push(b.flipY),y.push(b.unpackAlignment),y.push(b.colorSpace),y.join()}function j(b,y){let L=i.get(b);if(b.isVideoTexture)_e(b);if(b.isRenderTargetTexture===!1&&b.isExternalTexture!==!0&&b.version>0&&L.__version!==b.version){let G=b.image;if(G===null)Ut("WebGLRenderer: Texture marked for update but no image data found.");else if(G.complete===!1)Ut("WebGLRenderer: Texture marked for update but image is incomplete");else{Ft(L,b,y);return}}else if(b.isExternalTexture)L.__webglTexture=b.sourceTexture?b.sourceTexture:null;n.bindTexture(t.TEXTURE_2D,L.__webglTexture,t.TEXTURE0+y)}function rt(b,y){let L=i.get(b);if(b.isRenderTargetTexture===!1&&b.version>0&&L.__version!==b.version){Ft(L,b,y);return}else if(b.isExternalTexture)L.__webglTexture=b.sourceTexture?b.sourceTexture:null;n.bindTexture(t.TEXTURE_2D_ARRAY,L.__webglTexture,t.TEXTURE0+y)}function lt(b,y){let L=i.get(b);if(b.isRenderTargetTexture===!1&&b.version>0&&L.__version!==b.version){Ft(L,b,y);return}n.bindTexture(t.TEXTURE_3D,L.__webglTexture,t.TEXTURE0+y)}function Rt(b,y){let L=i.get(b);if(b.isCubeDepthTexture!==!0&&b.version>0&&L.__version!==b.version){ne(L,b,y);return}n.bindTexture(t.TEXTURE_CUBE_MAP,L.__webglTexture,t.TEXTURE0+y)}let St={[hr]:t.REPEAT,[ya]:t.CLAMP_TO_EDGE,[ku]:t.MIRRORED_REPEAT},he={[li]:t.NEAREST,[Gu]:t.NEAREST_MIPMAP_NEAREST,[ur]:t.NEAREST_MIPMAP_LINEAR,[Ve]:t.LINEAR,[va]:t.LINEAR_MIPMAP_NEAREST,[Ai]:t.LINEAR_MIPMAP_LINEAR},ae={[Ju]:t.NEVER,[ed]:t.ALWAYS,[Ku]:t.LESS,[Aa]:t.LEQUAL,[ju]:t.EQUAL,[Ra]:t.GEQUAL,[Qu]:t.GREATER,[td]:t.NOTEQUAL};function Z(b,y){if(y.type===qn&&e.has("OES_texture_float_linear")===!1&&(y.magFilter===Ve||y.magFilter===va||y.magFilter===ur||y.magFilter===Ai||y.minFilter===Ve||y.minFilter===va||y.minFilter===ur||y.minFilter===Ai))Ut("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device.");if(t.texParameteri(b,t.TEXTURE_WRAP_S,St[y.wrapS]),t.texParameteri(b,t.TEXTURE_WRAP_T,St[y.wrapT]),b===t.TEXTURE_3D||b===t.TEXTURE_2D_ARRAY)t.texParameteri(b,t.TEXTURE_WRAP_R,St[y.wrapR]);if(t.texParameteri(b,t.TEXTURE_MAG_FILTER,he[y.magFilter]),t.texParameteri(b,t.TEXTURE_MIN_FILTER,he[y.minFilter]),y.compareFunction)t.texParameteri(b,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(b,t.TEXTURE_COMPARE_FUNC,ae[y.compareFunction]);if(e.has("EXT_texture_filter_anisotropic")===!0){if(y.magFilter===li)return;if(y.minFilter!==ur&&y.minFilter!==Ai)return;if(y.type===qn&&e.has("OES_texture_float_linear")===!1)return;if(y.anisotropy>1||i.get(y).__currentAnisotropy){let L=e.get("EXT_texture_filter_anisotropic");t.texParameterf(b,L.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,s.getMaxAnisotropy())),i.get(y).__currentAnisotropy=y.anisotropy}}}function ct(b,y){let L=!1;if(b.__webglInit===void 0)b.__webglInit=!0,y.addEventListener("dispose",A);let G=y.source,tt=f.get(G);if(tt===void 0)tt={},f.set(G,tt);let at=O(y);if(at!==b.__cacheKey){if(tt[at]===void 0)tt[at]={texture:t.createTexture(),usedTimes:0},a.memory.textures++,L=!0;tt[at].usedTimes++;let ut=tt[b.__cacheKey];if(ut!==void 0){if(tt[b.__cacheKey].usedTimes--,ut.usedTimes===0)U(y)}b.__cacheKey=at,b.__webglTexture=tt[at].texture}return L}function bt(b,y,L){return Math.floor(Math.floor(b/L)/y)}function dt(b,y,L,G){let at=b.updateRanges;if(at.length===0)n.texSubImage2D(t.TEXTURE_2D,0,0,0,y.width,y.height,L,G,y.data);else{at.sort((It,gt)=>It.start-gt.start);let ut=0;for(let It=1;It<at.length;It++){let gt=at[ut],ot=at[It],Ot=gt.start+gt.count,zt=bt(ot.start,y.width,4),se=bt(gt.start,y.width,4);if(ot.start<=Ot+1&&zt===se&&bt(ot.start+ot.count-1,y.width,4)===zt)gt.count=Math.max(gt.count,ot.start+ot.count-gt.start);else++ut,at[ut]=ot}at.length=ut+1;let X=n.getParameter(t.UNPACK_ROW_LENGTH),J=n.getParameter(t.UNPACK_SKIP_PIXELS),Mt=n.getParameter(t.UNPACK_SKIP_ROWS);n.pixelStorei(t.UNPACK_ROW_LENGTH,y.width);for(let It=0,gt=at.length;It<gt;It++){let ot=at[It],Ot=Math.floor(ot.start/4),zt=Math.ceil(ot.count/4),se=Ot%y.width,D=Math.floor(Ot/y.width),ht=zt,Y=1;n.pixelStorei(t.UNPACK_SKIP_PIXELS,se),n.pixelStorei(t.UNPACK_SKIP_ROWS,D),n.texSubImage2D(t.TEXTURE_2D,0,se,D,ht,1,L,G,y.data)}b.clearUpdateRanges(),n.pixelStorei(t.UNPACK_ROW_LENGTH,X),n.pixelStorei(t.UNPACK_SKIP_PIXELS,J),n.pixelStorei(t.UNPACK_SKIP_ROWS,Mt)}}function Ft(b,y,L){let G=t.TEXTURE_2D;if(y.isDataArrayTexture||y.isCompressedArrayTexture)G=t.TEXTURE_2D_ARRAY;if(y.isData3DTexture)G=t.TEXTURE_3D;let tt=ct(b,y),at=y.source;n.bindTexture(G,b.__webglTexture,t.TEXTURE0+L);let ut=i.get(at);if(at.version!==ut.__version||tt===!0){if(n.activeTexture(t.TEXTURE0+L),(typeof ImageBitmap<"u"&&y.image instanceof ImageBitmap)===!1){let Y=ee.getPrimaries(ee.workingColorSpace),ft=y.colorSpace===Ii?null:ee.getPrimaries(y.colorSpace),Tt=y.colorSpace===Ii||Y===ft?t.NONE:t.BROWSER_DEFAULT_WEBGL;n.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,y.flipY),n.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),n.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Tt)}n.pixelStorei(t.UNPACK_ALIGNMENT,y.unpackAlignment);let J=m(y.image,!1,s.maxTextureSize);J=Qt(y,J);let Mt=r.convert(y.format,y.colorSpace),It=r.convert(y.type),gt=x(y.internalFormat,Mt,It,y.normalized,y.colorSpace,y.isVideoTexture);Z(G,y);let ot,Ot=y.mipmaps,zt=y.isVideoTexture!==!0,se=ut.__version===void 0||tt===!0,D=at.dataReady,ht=w(y,J);if(y.isDepthTexture){if(gt=T(y.format===Ci,y.type),se)if(zt)n.texStorage2D(t.TEXTURE_2D,1,gt,J.width,J.height);else n.texImage2D(t.TEXTURE_2D,0,gt,J.width,J.height,0,Mt,It,null)}else if(y.isDataTexture)if(Ot.length>0){if(zt&&se)n.texStorage2D(t.TEXTURE_2D,ht,gt,Ot[0].width,Ot[0].height);for(let Y=0,ft=Ot.length;Y<ft;Y++)if(ot=Ot[Y],zt){if(D)n.texSubImage2D(t.TEXTURE_2D,Y,0,0,ot.width,ot.height,Mt,It,ot.data)}else n.texImage2D(t.TEXTURE_2D,Y,gt,ot.width,ot.height,0,Mt,It,ot.data);y.generateMipmaps=!1}else if(zt){if(se)n.texStorage2D(t.TEXTURE_2D,ht,gt,J.width,J.height);if(D)dt(y,J,Mt,It)}else n.texImage2D(t.TEXTURE_2D,0,gt,J.width,J.height,0,Mt,It,J.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){if(zt&&se)n.texStorage3D(t.TEXTURE_2D_ARRAY,ht,gt,Ot[0].width,Ot[0].height,J.depth);for(let Y=0,ft=Ot.length;Y<ft;Y++)if(ot=Ot[Y],y.format!==In)if(Mt!==null)if(zt){if(D)if(y.layerUpdates.size>0){let Tt=Pc(ot.width,ot.height,y.format,y.type);for(let et of y.layerUpdates){let pt=ot.data.subarray(et*Tt/ot.data.BYTES_PER_ELEMENT,(et+1)*Tt/ot.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,Y,0,0,et,ot.width,ot.height,1,Mt,pt)}y.clearLayerUpdates()}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,Y,0,0,0,ot.width,ot.height,J.depth,Mt,ot.data)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,Y,gt,ot.width,ot.height,J.depth,0,ot.data,0,0);else Ut("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else if(zt){if(D)n.texSubImage3D(t.TEXTURE_2D_ARRAY,Y,0,0,0,ot.width,ot.height,J.depth,Mt,It,ot.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,Y,gt,ot.width,ot.height,J.depth,0,Mt,It,ot.data)}else{if(zt&&se)n.texStorage2D(t.TEXTURE_2D,ht,gt,Ot[0].width,Ot[0].height);for(let Y=0,ft=Ot.length;Y<ft;Y++)if(ot=Ot[Y],y.format!==In)if(Mt!==null)if(zt){if(D)n.compressedTexSubImage2D(t.TEXTURE_2D,Y,0,0,ot.width,ot.height,Mt,ot.data)}else n.compressedTexImage2D(t.TEXTURE_2D,Y,gt,ot.width,ot.height,0,ot.data);else Ut("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else if(zt){if(D)n.texSubImage2D(t.TEXTURE_2D,Y,0,0,ot.width,ot.height,Mt,It,ot.data)}else n.texImage2D(t.TEXTURE_2D,Y,gt,ot.width,ot.height,0,Mt,It,ot.data)}else if(y.isDataArrayTexture)if(zt){if(se)n.texStorage3D(t.TEXTURE_2D_ARRAY,ht,gt,J.width,J.height,J.depth);if(D)if(y.layerUpdates.size>0){let Y=Pc(J.width,J.height,y.format,y.type);for(let ft of y.layerUpdates){let Tt=J.data.subarray(ft*Y/J.data.BYTES_PER_ELEMENT,(ft+1)*Y/J.data.BYTES_PER_ELEMENT);n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,ft,J.width,J.height,1,Mt,It,Tt)}y.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,J.width,J.height,J.depth,Mt,It,J.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,gt,J.width,J.height,J.depth,0,Mt,It,J.data);else if(y.isData3DTexture)if(zt){if(se)n.texStorage3D(t.TEXTURE_3D,ht,gt,J.width,J.height,J.depth);if(D)n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,J.width,J.height,J.depth,Mt,It,J.data)}else n.texImage3D(t.TEXTURE_3D,0,gt,J.width,J.height,J.depth,0,Mt,It,J.data);else if(y.isFramebufferTexture){if(se)if(zt)n.texStorage2D(t.TEXTURE_2D,ht,gt,J.width,J.height);else{let Y=J.width,ft=J.height;for(let Tt=0;Tt<ht;Tt++)n.texImage2D(t.TEXTURE_2D,Tt,gt,Y,ft,0,Mt,It,null),Y>>=1,ft>>=1}}else if(y.isHTMLTexture){if("texElementImage2D"in t){let Y=t.canvas;if(!Y.hasAttribute("layoutsubtree"))Y.setAttribute("layoutsubtree","true");if(J.parentNode!==Y){Y.appendChild(J),d.add(y),Y.onpaint=(ft)=>{let Tt=ft.changedElements;for(let et of d)if(Tt.includes(et.image))et.needsUpdate=!0},Y.requestPaint();return}if(t.texElementImage2D.length===3)t.texElementImage2D(t.TEXTURE_2D,t.RGBA8,J);else{let{RGBA:Tt,RGBA:et,UNSIGNED_BYTE:pt}=t;t.texElementImage2D(t.TEXTURE_2D,0,Tt,et,pt,J)}t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MIN_FILTER,t.LINEAR),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE)}}else if(Ot.length>0){if(zt&&se){let Y=Kt(Ot[0]);n.texStorage2D(t.TEXTURE_2D,ht,gt,Y.width,Y.height)}for(let Y=0,ft=Ot.length;Y<ft;Y++)if(ot=Ot[Y],zt){if(D)n.texSubImage2D(t.TEXTURE_2D,Y,0,0,Mt,It,ot)}else n.texImage2D(t.TEXTURE_2D,Y,gt,Mt,It,ot);y.generateMipmaps=!1}else if(zt){if(se){let Y=Kt(J);n.texStorage2D(t.TEXTURE_2D,ht,gt,Y.width,Y.height)}if(D)n.texSubImage2D(t.TEXTURE_2D,0,0,0,Mt,It,J)}else n.texImage2D(t.TEXTURE_2D,0,gt,Mt,It,J);if(p(y))R(G);if(ut.__version=at.version,y.onUpdate)y.onUpdate(y)}b.__version=y.version}function ne(b,y,L){if(y.image.length!==6)return;let G=ct(b,y),tt=y.source;n.bindTexture(t.TEXTURE_CUBE_MAP,b.__webglTexture,t.TEXTURE0+L);let at=i.get(tt);if(tt.version!==at.__version||G===!0){n.activeTexture(t.TEXTURE0+L);let ut=ee.getPrimaries(ee.workingColorSpace),X=y.colorSpace===Ii?null:ee.getPrimaries(y.colorSpace),J=y.colorSpace===Ii||ut===X?t.NONE:t.BROWSER_DEFAULT_WEBGL;n.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,y.flipY),n.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),n.pixelStorei(t.UNPACK_ALIGNMENT,y.unpackAlignment),n.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,J);let Mt=y.isCompressedTexture||y.image[0].isCompressedTexture,It=y.image[0]&&y.image[0].isDataTexture,gt=[];for(let et=0;et<6;et++){if(!Mt&&!It)gt[et]=m(y.image[et],!0,s.maxCubemapSize);else gt[et]=It?y.image[et].image:y.image[et];gt[et]=Qt(y,gt[et])}let ot=gt[0],Ot=r.convert(y.format,y.colorSpace),zt=r.convert(y.type),se=x(y.internalFormat,Ot,zt,y.normalized,y.colorSpace),D=y.isVideoTexture!==!0,ht=at.__version===void 0||G===!0,Y=tt.dataReady,ft=w(y,ot);Z(t.TEXTURE_CUBE_MAP,y);let Tt;if(Mt){if(D&&ht)n.texStorage2D(t.TEXTURE_CUBE_MAP,ft,se,ot.width,ot.height);for(let et=0;et<6;et++){Tt=gt[et].mipmaps;for(let pt=0;pt<Tt.length;pt++){let qt=Tt[pt];if(y.format!==In)if(Ot!==null)if(D){if(Y)n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+et,pt,0,0,qt.width,qt.height,Ot,qt.data)}else n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+et,pt,se,qt.width,qt.height,0,qt.data);else Ut("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()");else if(D){if(Y)n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+et,pt,0,0,qt.width,qt.height,Ot,zt,qt.data)}else n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+et,pt,se,qt.width,qt.height,0,Ot,zt,qt.data)}}}else{if(Tt=y.mipmaps,D&&ht){if(Tt.length>0)ft++;let et=Kt(gt[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,ft,se,et.width,et.height)}for(let et=0;et<6;et++)if(It){if(D){if(Y)n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+et,0,0,0,gt[et].width,gt[et].height,Ot,zt,gt[et].data)}else n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+et,0,se,gt[et].width,gt[et].height,0,Ot,zt,gt[et].data);for(let pt=0;pt<Tt.length;pt++){let Ee=Tt[pt].image[et].image;if(D){if(Y)n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+et,pt+1,0,0,Ee.width,Ee.height,Ot,zt,Ee.data)}else n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+et,pt+1,se,Ee.width,Ee.height,0,Ot,zt,Ee.data)}}else{if(D){if(Y)n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+et,0,0,0,Ot,zt,gt[et])}else n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+et,0,se,Ot,zt,gt[et]);for(let pt=0;pt<Tt.length;pt++){let qt=Tt[pt];if(D){if(Y)n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+et,pt+1,0,0,Ot,zt,qt.image[et])}else n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+et,pt+1,se,Ot,zt,qt.image[et])}}}if(p(y))R(t.TEXTURE_CUBE_MAP);if(at.__version=tt.version,y.onUpdate)y.onUpdate(y)}b.__version=y.version}function kt(b,y,L,G,tt,at){let ut=r.convert(L.format,L.colorSpace),X=r.convert(L.type),J=x(L.internalFormat,ut,X,L.normalized,L.colorSpace),Mt=i.get(y),It=i.get(L);if(It.__renderTarget=y,!Mt.__hasExternalTextures){let gt=Math.max(1,y.width>>at),ot=Math.max(1,y.height>>at);if(tt===t.TEXTURE_3D||tt===t.TEXTURE_2D_ARRAY)n.texImage3D(tt,at,J,gt,ot,y.depth,0,ut,X,null);else n.texImage2D(tt,at,J,gt,ot,0,ut,X,null)}if(n.bindFramebuffer(t.FRAMEBUFFER,b),I(y))o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,G,tt,It.__webglTexture,0,Xt(y));else if(tt===t.TEXTURE_2D||tt>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&tt<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)t.framebufferTexture2D(t.FRAMEBUFFER,G,tt,It.__webglTexture,at);n.bindFramebuffer(t.FRAMEBUFFER,null)}function Ht(b,y,L){if(t.bindRenderbuffer(t.RENDERBUFFER,b),y.depthBuffer){let G=y.depthTexture,tt=G&&G.isDepthTexture?G.type:null,at=T(y.stencilBuffer,tt),ut=y.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;if(I(y))o.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,Xt(y),at,y.width,y.height);else if(L)t.renderbufferStorageMultisample(t.RENDERBUFFER,Xt(y),at,y.width,y.height);else t.renderbufferStorage(t.RENDERBUFFER,at,y.width,y.height);t.framebufferRenderbuffer(t.FRAMEBUFFER,ut,t.RENDERBUFFER,b)}else{let G=y.textures;for(let tt=0;tt<G.length;tt++){let at=G[tt],ut=r.convert(at.format,at.colorSpace),X=r.convert(at.type),J=x(at.internalFormat,ut,X,at.normalized,at.colorSpace);if(I(y))o.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,Xt(y),J,y.width,y.height);else if(L)t.renderbufferStorageMultisample(t.RENDERBUFFER,Xt(y),J,y.width,y.height);else t.renderbufferStorage(t.RENDERBUFFER,J,y.width,y.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function Q(b,y,L){let G=y.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(t.FRAMEBUFFER,b),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let tt=i.get(y.depthTexture);if(tt.__renderTarget=y,!tt.__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0;if(G){if(tt.__webglInit===void 0)tt.__webglInit=!0,y.depthTexture.addEventListener("dispose",A);if(tt.__webglTexture===void 0){tt.__webglTexture=t.createTexture(),n.bindTexture(t.TEXTURE_CUBE_MAP,tt.__webglTexture),Z(t.TEXTURE_CUBE_MAP,y.depthTexture);let Mt=r.convert(y.depthTexture.format),It=r.convert(y.depthTexture.type),gt;if(y.depthTexture.format===Ri)gt=t.DEPTH_COMPONENT24;else if(y.depthTexture.format===Ci)gt=t.DEPTH24_STENCIL8;for(let ot=0;ot<6;ot++)t.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ot,0,gt,y.width,y.height,0,Mt,It,null)}}else j(y.depthTexture,0);let at=tt.__webglTexture,ut=Xt(y),X=G?t.TEXTURE_CUBE_MAP_POSITIVE_X+L:t.TEXTURE_2D,J=y.depthTexture.format===Ci?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;if(y.depthTexture.format===Ri)if(I(y))o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,J,X,at,0,ut);else t.framebufferTexture2D(t.FRAMEBUFFER,J,X,at,0);else if(y.depthTexture.format===Ci)if(I(y))o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,J,X,at,0,ut);else t.framebufferTexture2D(t.FRAMEBUFFER,J,X,at,0);else throw Error("THREE.WebGLTextures: Unknown depthTexture format.")}function it(b){let y=i.get(b),L=b.isWebGLCubeRenderTarget===!0;if(y.__boundDepthTexture!==b.depthTexture){let G=b.depthTexture;if(y.__depthDisposeCallback)y.__depthDisposeCallback();if(G){let tt=()=>{delete y.__boundDepthTexture,delete y.__depthDisposeCallback,G.removeEventListener("dispose",tt)};G.addEventListener("dispose",tt),y.__depthDisposeCallback=tt}y.__boundDepthTexture=G}if(b.depthTexture&&!y.__autoAllocateDepthBuffer)if(L)for(let G=0;G<6;G++)Q(y.__webglFramebuffer[G],b,G);else{let G=b.texture.mipmaps;if(G&&G.length>0)Q(y.__webglFramebuffer[0],b,0);else Q(y.__webglFramebuffer,b,0)}else if(L){y.__webglDepthbuffer=[];for(let G=0;G<6;G++)if(n.bindFramebuffer(t.FRAMEBUFFER,y.__webglFramebuffer[G]),y.__webglDepthbuffer[G]===void 0)y.__webglDepthbuffer[G]=t.createRenderbuffer(),Ht(y.__webglDepthbuffer[G],b,!1);else{let tt=b.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,at=y.__webglDepthbuffer[G];t.bindRenderbuffer(t.RENDERBUFFER,at),t.framebufferRenderbuffer(t.FRAMEBUFFER,tt,t.RENDERBUFFER,at)}}else{let G=b.texture.mipmaps;if(G&&G.length>0)n.bindFramebuffer(t.FRAMEBUFFER,y.__webglFramebuffer[0]);else n.bindFramebuffer(t.FRAMEBUFFER,y.__webglFramebuffer);if(y.__webglDepthbuffer===void 0)y.__webglDepthbuffer=t.createRenderbuffer(),Ht(y.__webglDepthbuffer,b,!1);else{let tt=b.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,at=y.__webglDepthbuffer;t.bindRenderbuffer(t.RENDERBUFFER,at),t.framebufferRenderbuffer(t.FRAMEBUFFER,tt,t.RENDERBUFFER,at)}}n.bindFramebuffer(t.FRAMEBUFFER,null)}function nt(b,y,L){let G=i.get(b);if(y!==void 0)kt(G.__webglFramebuffer,b,b.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0);if(L!==void 0)it(b)}function vt(b){let y=b.texture,L=i.get(b),G=i.get(y);b.addEventListener("dispose",_);let tt=b.textures,at=b.isWebGLCubeRenderTarget===!0,ut=tt.length>1;if(!ut){if(G.__webglTexture===void 0)G.__webglTexture=t.createTexture();G.__version=y.version,a.memory.textures++}if(at){L.__webglFramebuffer=[];for(let X=0;X<6;X++)if(y.mipmaps&&y.mipmaps.length>0){L.__webglFramebuffer[X]=[];for(let J=0;J<y.mipmaps.length;J++)L.__webglFramebuffer[X][J]=t.createFramebuffer()}else L.__webglFramebuffer[X]=t.createFramebuffer()}else{if(y.mipmaps&&y.mipmaps.length>0){L.__webglFramebuffer=[];for(let X=0;X<y.mipmaps.length;X++)L.__webglFramebuffer[X]=t.createFramebuffer()}else L.__webglFramebuffer=t.createFramebuffer();if(ut)for(let X=0,J=tt.length;X<J;X++){let Mt=i.get(tt[X]);if(Mt.__webglTexture===void 0)Mt.__webglTexture=t.createTexture(),a.memory.textures++}if(b.samples>0&&I(b)===!1){L.__webglMultisampledFramebuffer=t.createFramebuffer(),L.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,L.__webglMultisampledFramebuffer);for(let X=0;X<tt.length;X++){let J=tt[X];L.__webglColorRenderbuffer[X]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,L.__webglColorRenderbuffer[X]);let Mt=r.convert(J.format,J.colorSpace),It=r.convert(J.type),gt=x(J.internalFormat,Mt,It,J.normalized,J.colorSpace,b.isXRRenderTarget===!0),ot=Xt(b);t.renderbufferStorageMultisample(t.RENDERBUFFER,ot,gt,b.width,b.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+X,t.RENDERBUFFER,L.__webglColorRenderbuffer[X])}if(t.bindRenderbuffer(t.RENDERBUFFER,null),b.depthBuffer)L.__webglDepthRenderbuffer=t.createRenderbuffer(),Ht(L.__webglDepthRenderbuffer,b,!0);n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(at){n.bindTexture(t.TEXTURE_CUBE_MAP,G.__webglTexture),Z(t.TEXTURE_CUBE_MAP,y);for(let X=0;X<6;X++)if(y.mipmaps&&y.mipmaps.length>0)for(let J=0;J<y.mipmaps.length;J++)kt(L.__webglFramebuffer[X][J],b,y,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+X,J);else kt(L.__webglFramebuffer[X],b,y,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+X,0);if(p(y))R(t.TEXTURE_CUBE_MAP);n.unbindTexture()}else if(ut){for(let X=0,J=tt.length;X<J;X++){let Mt=tt[X],It=i.get(Mt),gt=t.TEXTURE_2D;if(b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)gt=b.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY;if(n.bindTexture(gt,It.__webglTexture),Z(gt,Mt),kt(L.__webglFramebuffer,b,Mt,t.COLOR_ATTACHMENT0+X,gt,0),p(Mt))R(gt)}n.unbindTexture()}else{let X=t.TEXTURE_2D;if(b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)X=b.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY;if(n.bindTexture(X,G.__webglTexture),Z(X,y),y.mipmaps&&y.mipmaps.length>0)for(let J=0;J<y.mipmaps.length;J++)kt(L.__webglFramebuffer[J],b,y,t.COLOR_ATTACHMENT0,X,J);else kt(L.__webglFramebuffer,b,y,t.COLOR_ATTACHMENT0,X,0);if(p(y))R(X);n.unbindTexture()}if(b.depthBuffer)it(b)}function Et(b){let y=b.textures;for(let L=0,G=y.length;L<G;L++){let tt=y[L];if(p(tt)){let at=E(b),ut=i.get(tt).__webglTexture;n.bindTexture(at,ut),R(at),n.unbindTexture()}}}let Pt=[],Lt=[];function Wt(b){if(b.samples>0){if(I(b)===!1){let{textures:y,width:L,height:G}=b,tt=t.COLOR_BUFFER_BIT,at=b.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ut=i.get(b),X=y.length>1;if(X)for(let Mt=0;Mt<y.length;Mt++)n.bindFramebuffer(t.FRAMEBUFFER,ut.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Mt,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,ut.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+Mt,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,ut.__webglMultisampledFramebuffer);let J=b.texture.mipmaps;if(J&&J.length>0)n.bindFramebuffer(t.DRAW_FRAMEBUFFER,ut.__webglFramebuffer[0]);else n.bindFramebuffer(t.DRAW_FRAMEBUFFER,ut.__webglFramebuffer);for(let Mt=0;Mt<y.length;Mt++){if(b.resolveDepthBuffer){if(b.depthBuffer)tt|=t.DEPTH_BUFFER_BIT;if(b.stencilBuffer&&b.resolveStencilBuffer)tt|=t.STENCIL_BUFFER_BIT}if(X){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,ut.__webglColorRenderbuffer[Mt]);let It=i.get(y[Mt]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,It,0)}if(t.blitFramebuffer(0,0,L,G,0,0,L,G,tt,t.NEAREST),l===!0){if(Pt.length=0,Lt.length=0,Pt.push(t.COLOR_ATTACHMENT0+Mt),b.depthBuffer&&b.resolveDepthBuffer===!1)Pt.push(at),Lt.push(at),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,Lt);t.invalidateFramebuffer(t.READ_FRAMEBUFFER,Pt)}}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),X)for(let Mt=0;Mt<y.length;Mt++){n.bindFramebuffer(t.FRAMEBUFFER,ut.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Mt,t.RENDERBUFFER,ut.__webglColorRenderbuffer[Mt]);let It=i.get(y[Mt]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,ut.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+Mt,t.TEXTURE_2D,It,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,ut.__webglMultisampledFramebuffer)}else if(b.depthBuffer&&b.resolveDepthBuffer===!1&&l){let y=b.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[y])}}}function Xt(b){return Math.min(s.maxSamples,b.samples)}function I(b){let y=i.get(b);return b.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function _e(b){let y=a.render.frame;if(h.get(b)!==y)h.set(b,y),b.update()}function Qt(b,y){let{colorSpace:L,format:G,type:tt}=b;if(b.isCompressedTexture===!0||b.isVideoTexture===!0)return y;if(L!==Zl&&L!==Ii)if(ee.getTransfer(L)===me){if(G!==In||tt!==Mn)Ut("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.")}else Bt("WebGLTextures: Unsupported texture color space:",L);return y}function Kt(b){if(typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement)c.width=b.naturalWidth||b.width,c.height=b.naturalHeight||b.height;else if(typeof VideoFrame<"u"&&b instanceof VideoFrame)c.width=b.displayWidth,c.height=b.displayHeight;else c.width=b.width,c.height=b.height;return c}this.allocateTextureUnit=W,this.resetTextureUnits=q,this.getTextureUnits=F,this.setTextureUnits=V,this.setTexture2D=j,this.setTexture2DArray=rt,this.setTexture3D=lt,this.setTextureCube=Rt,this.rebindTextures=nt,this.setupRenderTarget=vt,this.updateRenderTargetMipmap=Et,this.updateMultisampleRenderTarget=Wt,this.setupDepthRenderbuffer=it,this.setupFrameBufferTexture=kt,this.useMultisampledRTT=I,this.isReversedDepthBuffer=function(){return n.buffers.depth.getReversed()}}function kx(t,e){function n(i,s=Ii){let r,a=ee.getTransfer(s);if(i===Mn)return t.UNSIGNED_BYTE;if(i===dl)return t.UNSIGNED_SHORT_4_4_4_4;if(i===fl)return t.UNSIGNED_SHORT_5_5_5_1;if(i===Wu)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===Xu)return t.UNSIGNED_INT_10F_11F_11F_REV;if(i===Hu)return t.BYTE;if(i===Vu)return t.SHORT;if(i===dr)return t.UNSIGNED_SHORT;if(i===ul)return t.INT;if(i===ci)return t.UNSIGNED_INT;if(i===qn)return t.FLOAT;if(i===Yn)return t.HALF_FLOAT;if(i===qu)return t.ALPHA;if(i===Yu)return t.RGB;if(i===In)return t.RGBA;if(i===Ri)return t.DEPTH_COMPONENT;if(i===Ci)return t.DEPTH_STENCIL;if(i===Zu)return t.RED;if(i===pl)return t.RED_INTEGER;if(i===Pi)return t.RG;if(i===ml)return t.RG_INTEGER;if(i===gl)return t.RGBA_INTEGER;if(i===Ma||i===Sa||i===ba||i===Ea)if(a===me)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===Ma)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Sa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===ba)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Ea)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===Ma)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Sa)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===ba)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Ea)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===_l||i===xl||i===yl||i===vl)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===_l)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===xl)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===yl)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===vl)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Ml||i===Sl||i===bl||i===El||i===Tl||i===Ta||i===wl)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===Ml||i===Sl)return a===me?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===bl)return a===me?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(i===El)return r.COMPRESSED_R11_EAC;if(i===Tl)return r.COMPRESSED_SIGNED_R11_EAC;if(i===Ta)return r.COMPRESSED_RG11_EAC;if(i===wl)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===Al||i===Rl||i===Cl||i===Pl||i===Il||i===Ll||i===Dl||i===Nl||i===Ul||i===Fl||i===Ol||i===Bl||i===zl||i===kl)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===Al)return a===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Rl)return a===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Cl)return a===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Pl)return a===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Il)return a===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Ll)return a===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Dl)return a===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Nl)return a===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Ul)return a===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Fl)return a===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Ol)return a===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Bl)return a===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===zl)return a===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===kl)return a===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Gl||i===Hl||i===Vl)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===Gl)return a===me?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Hl)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Vl)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Wl||i===Xl||i===wa||i===ql)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===Wl)return r.COMPRESSED_RED_RGTC1_EXT;if(i===Xl)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===wa)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===ql)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;if(i===As)return t.UNSIGNED_INT_24_8;return t[i]!==void 0?t[i]:null}return{convert:n}}var Gx=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Hx=`
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

}`;class Kd{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let n=new Oa(t.texture);if(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)this.depthNear=t.depthNear,this.depthFar=t.depthFar;this.texture=n}}getMesh(t){if(this.texture!==null){if(this.mesh===null){let e=t.cameras[0].viewport,n=new dn({vertexShader:Gx,fragmentShader:Hx,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new oe(new zi(20,20),n)}}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class jd extends Ln{constructor(t,e){super();let n=this,i=null,s=1,r=null,a="local-floor",o=1,l=null,c=null,h=null,d=null,u=null,f=null,g=typeof XRWebGLBinding<"u",v=new Kd,m={},p=e.getContextAttributes(),R=null,E=null,x=[],T=[],w=new K,A=null,_=new Ze;_.viewport=new Me;let M=new Ze;M.viewport=new Me;let U=[_,M],C=new wc,k=null,q=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Z){let ct=x[Z];if(ct===void 0)ct=new mr,x[Z]=ct;return ct.getTargetRaySpace()},this.getControllerGrip=function(Z){let ct=x[Z];if(ct===void 0)ct=new mr,x[Z]=ct;return ct.getGripSpace()},this.getHand=function(Z){let ct=x[Z];if(ct===void 0)ct=new mr,x[Z]=ct;return ct.getHandSpace()};function F(Z){let ct=T.indexOf(Z.inputSource);if(ct===-1)return;let bt=x[ct];if(bt!==void 0)bt.update(Z.inputSource,Z.frame,l||r),bt.dispatchEvent({type:Z.type,data:Z.inputSource})}function V(){i.removeEventListener("select",F),i.removeEventListener("selectstart",F),i.removeEventListener("selectend",F),i.removeEventListener("squeeze",F),i.removeEventListener("squeezestart",F),i.removeEventListener("squeezeend",F),i.removeEventListener("end",V),i.removeEventListener("inputsourceschange",W);for(let Z=0;Z<x.length;Z++){let ct=T[Z];if(ct===null)continue;T[Z]=null,x[Z].disconnect(ct)}k=null,q=null,v.reset();for(let Z in m)delete m[Z];t.setRenderTarget(R),u=null,d=null,h=null,i=null,E=null,ae.stop(),n.isPresenting=!1,t.setPixelRatio(A),t.setSize(w.width,w.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Z){if(s=Z,n.isPresenting===!0)Ut("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Z){if(a=Z,n.isPresenting===!0)Ut("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||r},this.setReferenceSpace=function(Z){l=Z},this.getBaseLayer=function(){return d!==null?d:u},this.getBinding=function(){if(h===null&&g)h=new XRWebGLBinding(i,e);return h},this.getFrame=function(){return f},this.getSession=function(){return i},this.setSession=async function(Z){if(i=Z,i!==null){if(R=t.getRenderTarget(),i.addEventListener("select",F),i.addEventListener("selectstart",F),i.addEventListener("selectend",F),i.addEventListener("squeeze",F),i.addEventListener("squeezestart",F),i.addEventListener("squeezeend",F),i.addEventListener("end",V),i.addEventListener("inputsourceschange",W),p.xrCompatible!==!0)await e.makeXRCompatible();if(A=t.getPixelRatio(),t.getSize(w),!(g&&("createProjectionLayer"in XRWebGLBinding.prototype))){let bt={antialias:p.antialias,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:s};u=new XRWebGLLayer(i,e,bt),i.updateRenderState({baseLayer:u}),t.setPixelRatio(1),t.setSize(u.framebufferWidth,u.framebufferHeight,!1),E=new hn(u.framebufferWidth,u.framebufferHeight,{format:In,type:Mn,colorSpace:t.outputColorSpace,stencilBuffer:p.stencil,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1})}else{let bt=null,dt=null,Ft=null;if(p.depth)Ft=p.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,bt=p.stencil?Ci:Ri,dt=p.stencil?As:ci;let ne={colorFormat:e.RGBA8,depthFormat:Ft,scaleFactor:s};h=this.getBinding(),d=h.createProjectionLayer(ne),i.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),E=new hn(d.textureWidth,d.textureHeight,{format:In,type:Mn,depthTexture:new ui(d.textureWidth,d.textureHeight,dt,void 0,void 0,void 0,void 0,void 0,void 0,bt),stencilBuffer:p.stencil,colorSpace:t.outputColorSpace,samples:p.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}E.isXRRenderTarget=!0,this.setFoveation(o),l=null,r=await i.requestReferenceSpace(a),ae.setContext(i),ae.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return v.getDepthTexture()};function W(Z){for(let ct=0;ct<Z.removed.length;ct++){let bt=Z.removed[ct],dt=T.indexOf(bt);if(dt>=0)T[dt]=null,x[dt].disconnect(bt)}for(let ct=0;ct<Z.added.length;ct++){let bt=Z.added[ct],dt=T.indexOf(bt);if(dt===-1){for(let ne=0;ne<x.length;ne++)if(ne>=T.length){T.push(bt),dt=ne;break}else if(T[ne]===null){T[ne]=bt,dt=ne;break}if(dt===-1)break}let Ft=x[dt];if(Ft)Ft.connect(bt)}}let O=new P,j=new P;function rt(Z,ct,bt){O.setFromMatrixPosition(ct.matrixWorld),j.setFromMatrixPosition(bt.matrixWorld);let dt=O.distanceTo(j),Ft=ct.projectionMatrix.elements,ne=bt.projectionMatrix.elements,kt=Ft[14]/(Ft[10]-1),Ht=Ft[14]/(Ft[10]+1),Q=(Ft[9]+1)/Ft[5],it=(Ft[9]-1)/Ft[5],nt=(Ft[8]-1)/Ft[0],vt=(ne[8]+1)/ne[0],Et=kt*nt,Pt=kt*vt,Lt=dt/(-nt+vt),Wt=Lt*-nt;if(ct.matrixWorld.decompose(Z.position,Z.quaternion,Z.scale),Z.translateX(Wt),Z.translateZ(Lt),Z.matrixWorld.compose(Z.position,Z.quaternion,Z.scale),Z.matrixWorldInverse.copy(Z.matrixWorld).invert(),Ft[10]===-1)Z.projectionMatrix.copy(ct.projectionMatrix),Z.projectionMatrixInverse.copy(ct.projectionMatrixInverse);else{let Xt=kt+Lt,I=Ht+Lt,_e=Et-Wt,Qt=Pt+(dt-Wt),Kt=Q*Ht/I*Xt,b=it*Ht/I*Xt;Z.projectionMatrix.makePerspective(_e,Qt,Kt,b,Xt,I),Z.projectionMatrixInverse.copy(Z.projectionMatrix).invert()}}function lt(Z,ct){if(ct===null)Z.matrixWorld.copy(Z.matrix);else Z.matrixWorld.multiplyMatrices(ct.matrixWorld,Z.matrix);Z.matrixWorldInverse.copy(Z.matrixWorld).invert()}this.updateCamera=function(Z){if(i===null)return;let{near:ct,far:bt}=Z;if(v.texture!==null){if(v.depthNear>0)ct=v.depthNear;if(v.depthFar>0)bt=v.depthFar}if(C.near=M.near=_.near=ct,C.far=M.far=_.far=bt,k!==C.near||q!==C.far)i.updateRenderState({depthNear:C.near,depthFar:C.far}),k=C.near,q=C.far;C.layers.mask=Z.layers.mask|6,_.layers.mask=C.layers.mask&-5,M.layers.mask=C.layers.mask&-3;let dt=Z.parent,Ft=C.cameras;lt(C,dt);for(let ne=0;ne<Ft.length;ne++)lt(Ft[ne],dt);if(Ft.length===2)rt(C,_,M);else C.projectionMatrix.copy(_.projectionMatrix);Rt(Z,C,dt)};function Rt(Z,ct,bt){if(bt===null)Z.matrix.copy(ct.matrixWorld);else Z.matrix.copy(bt.matrixWorld),Z.matrix.invert(),Z.matrix.multiply(ct.matrixWorld);if(Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.updateMatrixWorld(!0),Z.projectionMatrix.copy(ct.projectionMatrix),Z.projectionMatrixInverse.copy(ct.projectionMatrixInverse),Z.isPerspectiveCamera)Z.fov=vs*2*Math.atan(1/Z.projectionMatrix.elements[5]),Z.zoom=1}this.getCamera=function(){return C},this.getFoveation=function(){if(d===null&&u===null)return;return o},this.setFoveation=function(Z){if(o=Z,d!==null)d.fixedFoveation=Z;if(u!==null&&u.fixedFoveation!==void 0)u.fixedFoveation=Z},this.hasDepthSensing=function(){return v.texture!==null},this.getDepthSensingMesh=function(){return v.getMesh(C)},this.getCameraTexture=function(Z){return m[Z]};let St=null;function he(Z,ct){if(c=ct.getViewerPose(l||r),f=ct,c!==null){let bt=c.views;if(u!==null)t.setRenderTargetFramebuffer(E,u.framebuffer),t.setRenderTarget(E);let dt=!1;if(bt.length!==C.cameras.length)C.cameras.length=0,dt=!0;for(let Ht=0;Ht<bt.length;Ht++){let Q=bt[Ht],it=null;if(u!==null)it=u.getViewport(Q);else{let vt=h.getViewSubImage(d,Q);if(it=vt.viewport,Ht===0)t.setRenderTargetTextures(E,vt.colorTexture,vt.depthStencilTexture),t.setRenderTarget(E)}let nt=U[Ht];if(nt===void 0)nt=new Ze,nt.layers.enable(Ht),nt.viewport=new Me,U[Ht]=nt;if(nt.matrix.fromArray(Q.transform.matrix),nt.matrix.decompose(nt.position,nt.quaternion,nt.scale),nt.projectionMatrix.fromArray(Q.projectionMatrix),nt.projectionMatrixInverse.copy(nt.projectionMatrix).invert(),nt.viewport.set(it.x,it.y,it.width,it.height),Ht===0)C.matrix.copy(nt.matrix),C.matrix.decompose(C.position,C.quaternion,C.scale);if(dt===!0)C.cameras.push(nt)}let Ft=i.enabledFeatures;if(Ft&&Ft.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&g){h=n.getBinding();let Ht=h.getDepthInformation(bt[0]);if(Ht&&Ht.isValid&&Ht.texture)v.init(Ht,i.renderState)}if(Ft&&Ft.includes("camera-access")&&g){t.state.unbindTexture(),h=n.getBinding();for(let Ht=0;Ht<bt.length;Ht++){let Q=bt[Ht].camera;if(Q){let it=m[Q];if(!it)it=new Oa,m[Q]=it;let nt=h.getCameraImage(Q);it.sourceTexture=nt}}}}for(let bt=0;bt<x.length;bt++){let dt=T[bt],Ft=x[bt];if(dt!==null&&Ft!==void 0)Ft.update(dt,ct,l||r)}if(St)St(Z,ct);if(ct.detectedPlanes)n.dispatchEvent({type:"planesdetected",data:ct});f=null}let ae=new kd;ae.setAnimationLoop(he),this.setAnimationLoop=function(Z){St=Z},this.dispose=function(){}}}var Vx=new re,Qd=new Vt;Qd.set(-1,0,0,0,1,0,0,0,1);function Wx(t,e){function n(m,p){if(m.matrixAutoUpdate===!0)m.updateMatrix();p.value.copy(m.matrix)}function i(m,p){if(p.color.getRGB(m.fogColor.value,uc(t)),p.isFog)m.fogNear.value=p.near,m.fogFar.value=p.far;else if(p.isFogExp2)m.fogDensity.value=p.density}function s(m,p,R,E,x){if(p.isNodeMaterial)p.uniformsNeedUpdate=!1;else if(p.isMeshBasicMaterial)r(m,p);else if(p.isMeshLambertMaterial){if(r(m,p),p.envMap)m.envMapIntensity.value=p.envMapIntensity}else if(p.isMeshToonMaterial)r(m,p),d(m,p);else if(p.isMeshPhongMaterial){if(r(m,p),h(m,p),p.envMap)m.envMapIntensity.value=p.envMapIntensity}else if(p.isMeshStandardMaterial){if(r(m,p),u(m,p),p.isMeshPhysicalMaterial)f(m,p,x)}else if(p.isMeshMatcapMaterial)r(m,p),g(m,p);else if(p.isMeshDepthMaterial)r(m,p);else if(p.isMeshDistanceMaterial)r(m,p),v(m,p);else if(p.isMeshNormalMaterial)r(m,p);else if(p.isLineBasicMaterial){if(a(m,p),p.isLineDashedMaterial)o(m,p)}else if(p.isPointsMaterial)l(m,p,R,E);else if(p.isSpriteMaterial)c(m,p);else if(p.isShadowMaterial)m.color.value.copy(p.color),m.opacity.value=p.opacity;else if(p.isShaderMaterial)p.uniformsNeedUpdate=!1}function r(m,p){if(m.opacity.value=p.opacity,p.color)m.diffuse.value.copy(p.color);if(p.emissive)m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity);if(p.map)m.map.value=p.map,n(p.map,m.mapTransform);if(p.alphaMap)m.alphaMap.value=p.alphaMap,n(p.alphaMap,m.alphaMapTransform);if(p.bumpMap){if(m.bumpMap.value=p.bumpMap,n(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Ke)m.bumpScale.value*=-1}if(p.normalMap){if(m.normalMap.value=p.normalMap,n(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Ke)m.normalScale.value.negate()}if(p.displacementMap)m.displacementMap.value=p.displacementMap,n(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias;if(p.emissiveMap)m.emissiveMap.value=p.emissiveMap,n(p.emissiveMap,m.emissiveMapTransform);if(p.specularMap)m.specularMap.value=p.specularMap,n(p.specularMap,m.specularMapTransform);if(p.alphaTest>0)m.alphaTest.value=p.alphaTest;let R=e.get(p),{envMap:E,envMapRotation:x}=R;if(E){if(m.envMap.value=E,m.envMapRotation.value.setFromMatrix4(Vx.makeRotationFromEuler(x)).transpose(),E.isCubeTexture&&E.isRenderTargetTexture===!1)m.envMapRotation.value.premultiply(Qd);m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio}if(p.lightMap)m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,n(p.lightMap,m.lightMapTransform);if(p.aoMap)m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,n(p.aoMap,m.aoMapTransform)}function a(m,p){if(m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map)m.map.value=p.map,n(p.map,m.mapTransform)}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,R,E){if(m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*R,m.scale.value=E*0.5,p.map)m.map.value=p.map,n(p.map,m.uvTransform);if(p.alphaMap)m.alphaMap.value=p.alphaMap,n(p.alphaMap,m.alphaMapTransform);if(p.alphaTest>0)m.alphaTest.value=p.alphaTest}function c(m,p){if(m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map)m.map.value=p.map,n(p.map,m.mapTransform);if(p.alphaMap)m.alphaMap.value=p.alphaMap,n(p.alphaMap,m.alphaMapTransform);if(p.alphaTest>0)m.alphaTest.value=p.alphaTest}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,0.0001)}function d(m,p){if(p.gradientMap)m.gradientMap.value=p.gradientMap}function u(m,p){if(m.metalness.value=p.metalness,p.metalnessMap)m.metalnessMap.value=p.metalnessMap,n(p.metalnessMap,m.metalnessMapTransform);if(m.roughness.value=p.roughness,p.roughnessMap)m.roughnessMap.value=p.roughnessMap,n(p.roughnessMap,m.roughnessMapTransform);if(p.envMap)m.envMapIntensity.value=p.envMapIntensity}function f(m,p,R){if(m.ior.value=p.ior,p.sheen>0){if(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap)m.sheenColorMap.value=p.sheenColorMap,n(p.sheenColorMap,m.sheenColorMapTransform);if(p.sheenRoughnessMap)m.sheenRoughnessMap.value=p.sheenRoughnessMap,n(p.sheenRoughnessMap,m.sheenRoughnessMapTransform)}if(p.clearcoat>0){if(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap)m.clearcoatMap.value=p.clearcoatMap,n(p.clearcoatMap,m.clearcoatMapTransform);if(p.clearcoatRoughnessMap)m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,n(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform);if(p.clearcoatNormalMap){if(m.clearcoatNormalMap.value=p.clearcoatNormalMap,n(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Ke)m.clearcoatNormalScale.value.negate()}}if(p.dispersion>0)m.dispersion.value=p.dispersion;if(p.iridescence>0){if(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap)m.iridescenceMap.value=p.iridescenceMap,n(p.iridescenceMap,m.iridescenceMapTransform);if(p.iridescenceThicknessMap)m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,n(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform)}if(p.transmission>0){if(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=R.texture,m.transmissionSamplerSize.value.set(R.width,R.height),p.transmissionMap)m.transmissionMap.value=p.transmissionMap,n(p.transmissionMap,m.transmissionMapTransform);if(m.thickness.value=p.thickness,p.thicknessMap)m.thicknessMap.value=p.thicknessMap,n(p.thicknessMap,m.thicknessMapTransform);m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)}if(p.anisotropy>0){if(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap)m.anisotropyMap.value=p.anisotropyMap,n(p.anisotropyMap,m.anisotropyMapTransform)}if(m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap)m.specularColorMap.value=p.specularColorMap,n(p.specularColorMap,m.specularColorMapTransform);if(p.specularIntensityMap)m.specularIntensityMap.value=p.specularIntensityMap,n(p.specularIntensityMap,m.specularIntensityMapTransform)}function g(m,p){if(p.matcap)m.matcap.value=p.matcap}function v(m,p){let R=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(R.matrixWorld),m.nearDistance.value=R.shadow.camera.near,m.farDistance.value=R.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function Xx(t,e,n,i){let s={},r={},a=[],o=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function l(x,T){let w=T.program;i.uniformBlockBinding(x,w)}function c(x,T){let w=s[x.id];if(w===void 0)m(x),w=h(x),s[x.id]=w,x.addEventListener("dispose",R);let A=T.program;i.updateUBOMapping(x,A);let _=e.render.frame;if(r[x.id]!==_)u(x),r[x.id]=_}function h(x){let T=d();x.__bindingPointIndex=T;let w=t.createBuffer(),{__size:A,usage:_}=x;return t.bindBuffer(t.UNIFORM_BUFFER,w),t.bufferData(t.UNIFORM_BUFFER,A,_),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,T,w),w}function d(){for(let x=0;x<o;x++)if(a.indexOf(x)===-1)return a.push(x),x;return Bt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(x){let T=s[x.id],{uniforms:w,__cache:A}=x;t.bindBuffer(t.UNIFORM_BUFFER,T);for(let _=0,M=w.length;_<M;_++){let U=w[_];if(Array.isArray(U))for(let C=0,k=U.length;C<k;C++)f(U[C],_,C,A);else f(U,_,0,A)}t.bindBuffer(t.UNIFORM_BUFFER,null)}function f(x,T,w,A){if(v(x,T,w,A)===!0){let{__offset:_,value:M}=x;if(Array.isArray(M)){let U=0;for(let C=0;C<M.length;C++){let k=M[C],q=p(k);if(g(k,x.__data,U),typeof k!=="number"&&typeof k!=="boolean"&&!k.isMatrix3&&!ArrayBuffer.isView(k))U+=q.storage/Float32Array.BYTES_PER_ELEMENT}}else g(M,x.__data,0);t.bufferSubData(t.UNIFORM_BUFFER,_,x.__data)}}function g(x,T,w){if(typeof x==="number"||typeof x==="boolean")T[0]=x;else if(x.isMatrix3)T[0]=x.elements[0],T[1]=x.elements[1],T[2]=x.elements[2],T[3]=0,T[4]=x.elements[3],T[5]=x.elements[4],T[6]=x.elements[5],T[7]=0,T[8]=x.elements[6],T[9]=x.elements[7],T[10]=x.elements[8],T[11]=0;else if(ArrayBuffer.isView(x))T.set(new x.constructor(x.buffer,x.byteOffset,T.length));else x.toArray(T,w)}function v(x,T,w,A){let _=x.value,M=T+"_"+w;if(A[M]===void 0){if(typeof _==="number"||typeof _==="boolean")A[M]=_;else if(ArrayBuffer.isView(_))A[M]=_.slice();else A[M]=_.clone();return!0}else{let U=A[M];if(typeof _==="number"||typeof _==="boolean"){if(U!==_)return A[M]=_,!0}else if(ArrayBuffer.isView(_))return!0;else if(U.equals(_)===!1)return U.copy(_),!0}return!1}function m(x){let T=x.uniforms,w=0,A=16;for(let M=0,U=T.length;M<U;M++){let C=Array.isArray(T[M])?T[M]:[T[M]];for(let k=0,q=C.length;k<q;k++){let F=C[k],V=Array.isArray(F.value)?F.value:[F.value];for(let W=0,O=V.length;W<O;W++){let j=V[W],rt=p(j),lt=w%A,Rt=lt%rt.boundary,St=lt+Rt;if(w+=Rt,St!==0&&A-St<rt.storage)w+=A-St;F.__data=new Float32Array(rt.storage/Float32Array.BYTES_PER_ELEMENT),F.__offset=w,w+=rt.storage}}}let _=w%A;if(_>0)w+=A-_;return x.__size=w,x.__cache={},this}function p(x){let T={boundary:0,storage:0};if(typeof x==="number"||typeof x==="boolean")T.boundary=4,T.storage=4;else if(x.isVector2)T.boundary=8,T.storage=8;else if(x.isVector3||x.isColor)T.boundary=16,T.storage=12;else if(x.isVector4)T.boundary=16,T.storage=16;else if(x.isMatrix3)T.boundary=48,T.storage=48;else if(x.isMatrix4)T.boundary=64,T.storage=64;else if(x.isTexture)Ut("WebGLRenderer: Texture samplers can not be part of an uniforms group.");else if(ArrayBuffer.isView(x))T.boundary=16,T.storage=x.byteLength;else Ut("WebGLRenderer: Unsupported uniform value type.",x);return T}function R(x){let T=x.target;T.removeEventListener("dispose",R);let w=a.indexOf(T.__bindingPointIndex);a.splice(w,1),t.deleteBuffer(s[T.id]),delete s[T.id],delete r[T.id]}function E(){for(let x in s)t.deleteBuffer(s[x]);a=[],s={},r={}}return{bind:l,update:c,dispose:E}}var qx=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Dn=null;function Yx(){if(Dn===null)Dn=new Na(qx,16,16,Pi,Yn),Dn.name="DFG_LUT",Dn.minFilter=Ve,Dn.magFilter=Ve,Dn.wrapS=ya,Dn.wrapT=ya,Dn.generateMipmaps=!1,Dn.needsUpdate=!0;return Dn}class Gc{constructor(t={}){let{canvas:e=nd(),context:n=null,depth:i=!0,stencil:s=!1,alpha:r=!1,antialias:a=!1,premultipliedAlpha:o=!0,preserveDrawingBuffer:l=!1,powerPreference:c="default",failIfMajorPerformanceCaveat:h=!1,reversedDepthBuffer:d=!1,outputBufferType:u=Mn}=t;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=r;let g=u,v=new Set([gl,ml,pl]),m=new Set([Mn,ci,dr,As,dl,fl]),p=new Uint32Array(4),R=new Int32Array(4),E=new P,x=null,T=null,w=[],A=[],_=null;this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=vn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let M=this,U=!1,C=null,k=null,q=null,F=null;this._outputColorSpace=Li;let V=0,W=0,O=null,j=-1,rt=null,lt=new Me,Rt=new Me,St=null,he=new Zt(0),ae=0,{width:Z,height:ct}=e,bt=1,dt=null,Ft=null,ne=new Me(0,0,Z,ct),kt=new Me(0,0,Z,ct),Ht=!1,Q=new xr,it=!1,nt=!1,vt=new re,Et=new P,Pt=new Me,Lt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Wt=!1;function Xt(){return O===null?bt:1}let I=n;function _e(S,N){return e.getContext(S,N)}try{let S={alpha:!0,depth:i,stencil:s,antialias:a,premultipliedAlpha:o,preserveDrawingBuffer:l,powerPreference:c,failIfMajorPerformanceCaveat:h};if("setAttribute"in e)e.setAttribute("data-engine",`three.js r${ou}`);if(e.addEventListener("webglcontextlost",qt,!1),e.addEventListener("webglcontextrestored",Ee,!1),e.addEventListener("webglcontextcreationerror",xe,!1),I===null){if(I=_e("webgl2",S),I===null)if(_e("webgl2"))throw Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes.");else throw Error("THREE.WebGLRenderer: Error creating WebGL context.")}}catch(S){throw Bt("WebGLRenderer: "+S.message),S}let Qt,Kt,b,y,L,G,tt,at,ut,X,J,Mt,It,gt,ot,Ot,zt,se,D,ht,Y,ft,Tt;function et(){if(Qt=new t_(I),Qt.init(),Y=new kx(I,Qt),Kt=new q0(I,Qt,t,Y),b=new Bx(I,Qt),Kt.reversedDepthBuffer&&d)b.buffers.depth.setReversed(!0);k=I.createFramebuffer(),q=I.createFramebuffer(),F=I.createFramebuffer(),y=new i_(I),L=new Ex,G=new zx(I,Qt,b,L,Kt,Y,y),tt=new Q0(M),at=new om(I),ft=new W0(I,at),ut=new e_(I,at,y,ft),X=new r_(I,ut,at,ft,y),se=new s_(I,Kt,G),ot=new Y0(L),J=new bx(M,tt,Qt,Kt,ft,ot),Mt=new Wx(M,L),It=new wx,gt=new Lx(Qt),zt=new V0(M,tt,b,X,f,o),Ot=new Ox(M,X,Kt),Tt=new Xx(I,y,Kt,b),D=new X0(I,Qt,y),ht=new n_(I,Qt,y),y.programs=J.programs,M.capabilities=Kt,M.extensions=Qt,M.properties=L,M.renderLists=It,M.shadowMap=Ot,M.state=b,M.info=y}if(et(),g!==Mn)_=new o_(g,e.width,e.height,a,i,s);let pt=new jd(M,I);this.xr=pt,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){let S=Qt.get("WEBGL_lose_context");if(S)S.loseContext()},this.forceContextRestore=function(){let S=Qt.get("WEBGL_lose_context");if(S)S.restoreContext()},this.getPixelRatio=function(){return bt},this.setPixelRatio=function(S){if(S===void 0)return;bt=S,this.setSize(Z,ct,!1)},this.getSize=function(S){return S.set(Z,ct)},this.setSize=function(S,N,H=!0){if(pt.isPresenting){Ut("WebGLRenderer: Can't change size while VR device is presenting.");return}if(Z=S,ct=N,e.width=Math.floor(S*bt),e.height=Math.floor(N*bt),H===!0)e.style.width=S+"px",e.style.height=N+"px";if(_!==null)_.setSize(e.width,e.height);this.setViewport(0,0,S,N)},this.getDrawingBufferSize=function(S){return S.set(Z*bt,ct*bt).floor()},this.setDrawingBufferSize=function(S,N,H){Z=S,ct=N,bt=H,e.width=Math.floor(S*H),e.height=Math.floor(N*H),this.setViewport(0,0,S,N)},this.setEffects=function(S){if(g===Mn){Bt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(S){for(let N=0;N<S.length;N++)if(S[N].isOutputPass===!0){Ut("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}_.setEffects(S||[])},this.getCurrentViewport=function(S){return S.copy(lt)},this.getViewport=function(S){return S.copy(ne)},this.setViewport=function(S,N,H,B){if(S.isVector4)ne.set(S.x,S.y,S.z,S.w);else ne.set(S,N,H,B);b.viewport(lt.copy(ne).multiplyScalar(bt).round())},this.getScissor=function(S){return S.copy(kt)},this.setScissor=function(S,N,H,B){if(S.isVector4)kt.set(S.x,S.y,S.z,S.w);else kt.set(S,N,H,B);b.scissor(Rt.copy(kt).multiplyScalar(bt).round())},this.getScissorTest=function(){return Ht},this.setScissorTest=function(S){b.setScissorTest(Ht=S)},this.setOpaqueSort=function(S){dt=S},this.setTransparentSort=function(S){Ft=S},this.getClearColor=function(S){return S.copy(zt.getClearColor())},this.setClearColor=function(){zt.setClearColor(...arguments)},this.getClearAlpha=function(){return zt.getClearAlpha()},this.setClearAlpha=function(){zt.setClearAlpha(...arguments)},this.clear=function(S=!0,N=!0,H=!0){let B=0;if(S){let z=!1;if(O!==null){let yt=O.texture.format;z=v.has(yt)}if(z){let yt=O.texture.type,At=m.has(yt),xt=zt.getClearColor(),Ct=zt.getClearAlpha(),{r:Dt,g:Yt,b:jt}=xt;if(At)p[0]=Dt,p[1]=Yt,p[2]=jt,p[3]=Ct,I.clearBufferuiv(I.COLOR,0,p);else R[0]=Dt,R[1]=Yt,R[2]=jt,R[3]=Ct,I.clearBufferiv(I.COLOR,0,R)}else B|=I.COLOR_BUFFER_BIT}if(N)B|=I.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0);if(H)B|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295);if(B!==0)I.clear(B)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(S){S.setRenderer(this),C=S},this.dispose=function(){e.removeEventListener("webglcontextlost",qt,!1),e.removeEventListener("webglcontextrestored",Ee,!1),e.removeEventListener("webglcontextcreationerror",xe,!1),zt.dispose(),It.dispose(),gt.dispose(),L.dispose(),tt.dispose(),X.dispose(),ft.dispose(),Tt.dispose(),J.dispose(),pt.dispose(),pt.removeEventListener("sessionstart",gh),pt.removeEventListener("sessionend",_h),yi.stop()};function qt(S){S.preventDefault(),nr("WebGLRenderer: Context Lost."),U=!0}function Ee(){nr("WebGLRenderer: Context Restored."),U=!1;let S=y.autoReset,N=Ot.enabled,H=Ot.autoUpdate,B=Ot.needsUpdate,z=Ot.type;et(),y.autoReset=S,Ot.enabled=N,Ot.autoUpdate=H,Ot.needsUpdate=B,Ot.type=z}function xe(S){Bt("WebGLRenderer: A WebGL context could not be created. Reason: ",S.statusMessage)}function En(S){let N=S.target;N.removeEventListener("dispose",En),Bn(N)}function Bn(S){Pf(S),L.remove(S)}function Pf(S){let N=L.get(S).programs;if(N!==void 0){if(N.forEach(function(H){J.releaseProgram(H)}),S.isShaderMaterial)J.releaseShaderCache(S)}}this.renderBufferDirect=function(S,N,H,B,z,yt){if(N===null)N=Lt;let At=z.isMesh&&z.matrixWorld.determinantAffine()<0,xt=Df(S,N,H,B,z);b.setMaterial(B,At);let Ct=H.index,Dt=1;if(B.wireframe===!0){if(Ct=ut.getWireframeAttribute(H),Ct===void 0)return;Dt=2}let Yt=H.drawRange,jt=H.attributes.position,Nt=Yt.start*Dt,ue=(Yt.start+Yt.count)*Dt;if(yt!==null)Nt=Math.max(Nt,yt.start*Dt),ue=Math.min(ue,(yt.start+yt.count)*Dt);if(Ct!==null)Nt=Math.max(Nt,0),ue=Math.min(ue,Ct.count);else if(jt!==void 0&&jt!==null)Nt=Math.max(Nt,0),ue=Math.min(ue,jt.count);let we=ue-Nt;if(we<0||we===1/0)return;ft.setup(z,B,xt,H,Ct);let Te,fe=D;if(Ct!==null)Te=at.get(Ct),fe=ht,fe.setIndex(Te);if(z.isMesh)if(B.wireframe===!0)b.setLineWidth(B.wireframeLinewidth*Xt()),fe.setMode(I.LINES);else fe.setMode(I.TRIANGLES);else if(z.isLine){let ze=B.linewidth;if(ze===void 0)ze=1;if(b.setLineWidth(ze*Xt()),z.isLineSegments)fe.setMode(I.LINES);else if(z.isLineLoop)fe.setMode(I.LINE_LOOP);else fe.setMode(I.LINE_STRIP)}else if(z.isPoints)fe.setMode(I.POINTS);else if(z.isSprite)fe.setMode(I.TRIANGLES);if(z.isBatchedMesh)if(!Qt.get("WEBGL_multi_draw")){let{_multiDrawStarts:ze,_multiDrawCounts:wt,_multiDrawCount:nn}=z,ie=Ct?at.get(Ct).bytesPerElement:1,an=L.get(B).currentProgram.getUniforms();for(let Tn=0;Tn<nn;Tn++)an.setValue(I,"_gl_DrawID",Tn),fe.render(ze[Tn]/ie,wt[Tn])}else fe.renderMultiDraw(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount);else if(z.isInstancedMesh)fe.renderInstances(Nt,we,z.count);else if(H.isInstancedBufferGeometry){let ze=H._maxInstanceCount!==void 0?H._maxInstanceCount:1/0,wt=Math.min(H.instanceCount,ze);fe.renderInstances(Nt,we,wt)}else fe.render(Nt,we)};function mh(S,N,H){if(S.transparent===!0&&S.side===Cn&&S.forceSinglePass===!1)S.side=Ke,S.needsUpdate=!0,Ur(S,N,H),S.side=Es,S.needsUpdate=!0,Ur(S,N,H),S.side=Cn;else Ur(S,N,H)}this.compile=function(S,N,H=null){if(H===null)H=S;if(T=gt.get(H),T.init(N),A.push(T),H.traverseVisible(function(z){if(z.isLight&&z.layers.test(N.layers)){if(T.pushLight(z),z.castShadow)T.pushShadow(z)}}),S!==H)S.traverseVisible(function(z){if(z.isLight&&z.layers.test(N.layers)){if(T.pushLight(z),z.castShadow)T.pushShadow(z)}});T.setupLights();let B=new Set;return S.traverse(function(z){if(!(z.isMesh||z.isPoints||z.isLine||z.isSprite))return;let yt=z.material;if(yt)if(Array.isArray(yt))for(let At=0;At<yt.length;At++){let xt=yt[At];mh(xt,H,z),B.add(xt)}else mh(yt,H,z),B.add(yt)}),T=A.pop(),B},this.compileAsync=function(S,N,H=null){let B=this.compile(S,N,H);return new Promise((z)=>{function yt(){if(B.forEach(function(At){if(L.get(At).currentProgram.isReady())B.delete(At)}),B.size===0){z(S);return}setTimeout(yt,10)}if(Qt.get("KHR_parallel_shader_compile")!==null)yt();else setTimeout(yt,10)})};let yo=null;function If(S){if(yo)yo(S)}function gh(){yi.stop()}function _h(){yi.start()}let yi=new kd;if(yi.setAnimationLoop(If),typeof self<"u")yi.setContext(self);this.setAnimationLoop=function(S){yo=S,pt.setAnimationLoop(S),S===null?yi.stop():yi.start()},pt.addEventListener("sessionstart",gh),pt.addEventListener("sessionend",_h),this.render=function(S,N){if(N!==void 0&&N.isCamera!==!0){Bt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(U===!0)return;if(C!==null)C.renderStart(S,N);let H=pt.enabled===!0&&pt.isPresenting===!0,B=_!==null&&(O===null||H)&&_.begin(M,O);if(S.matrixWorldAutoUpdate===!0)S.updateMatrixWorld();if(N.parent===null&&N.matrixWorldAutoUpdate===!0)N.updateMatrixWorld();if(pt.enabled===!0&&pt.isPresenting===!0&&(_===null||_.isCompositing()===!1)){if(pt.cameraAutoUpdate===!0)pt.updateCamera(N);N=pt.getCamera()}if(S.isScene===!0)S.onBeforeRender(M,S,N,O);if(T=gt.get(S,A.length),T.init(N),T.state.textureUnits=G.getTextureUnits(),A.push(T),vt.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),Q.setFromProjectionMatrix(vt,Kl,N.reversedDepth),nt=this.localClippingEnabled,it=ot.init(this.clippingPlanes,nt),x=It.get(S,w.length),x.init(),w.push(x),pt.enabled===!0&&pt.isPresenting===!0){let At=M.xr.getDepthSensingMesh();if(At!==null)vo(At,N,-1/0,M.sortObjects)}if(vo(S,N,0,M.sortObjects),x.finish(),M.sortObjects===!0)x.sort(dt,Ft,N.reversedDepth);if(Wt=pt.enabled===!1||pt.isPresenting===!1||pt.hasDepthSensing()===!1,Wt)zt.addToRenderList(x,S);if(this.info.render.frame++,this.info.autoReset===!0)this.info.reset();if(it===!0)ot.beginShadows();let z=T.state.shadowsArray;if(Ot.render(z,S,N),it===!0)ot.endShadows();if((B&&_.hasRenderPass())===!1){let At=x.opaque,xt=x.transmissive;if(T.setupLights(),N.isArrayCamera){let Ct=N.cameras;if(xt.length>0)for(let Dt=0,Yt=Ct.length;Dt<Yt;Dt++){let jt=Ct[Dt];yh(At,xt,S,jt)}if(Wt)zt.render(S);for(let Dt=0,Yt=Ct.length;Dt<Yt;Dt++){let jt=Ct[Dt];xh(x,S,jt,jt.viewport)}}else{if(xt.length>0)yh(At,xt,S,N);if(Wt)zt.render(S);xh(x,S,N)}}if(O!==null&&W===0)G.updateMultisampleRenderTarget(O),G.updateRenderTargetMipmap(O);if(B)_.end(M);if(S.isScene===!0)S.onAfterRender(M,S,N);if(ft.resetDefaultState(),j=-1,rt=null,A.pop(),A.length>0){if(T=A[A.length-1],G.setTextureUnits(T.state.textureUnits),it===!0)ot.setGlobalState(M.clippingPlanes,T.state.camera)}else T=null;if(w.pop(),w.length>0)x=w[w.length-1];else x=null;if(C!==null)C.renderEnd()};function vo(S,N,H,B){if(S.visible===!1)return;if(S.layers.test(N.layers)){if(S.isGroup)H=S.renderOrder;else if(S.isLOD){if(S.autoUpdate===!0)S.update(N)}else if(S.isLightProbeGrid)T.pushLightProbeGrid(S);else if(S.isLight){if(T.pushLight(S),S.castShadow)T.pushShadow(S)}else if(S.isSprite){if(!S.frustumCulled||Q.intersectsSprite(S)){if(B)Pt.setFromMatrixPosition(S.matrixWorld).applyMatrix4(vt);let At=X.update(S),xt=S.material;if(xt.visible)x.push(S,At,xt,H,Pt.z,null)}}else if(S.isMesh||S.isLine||S.isPoints){if(!S.frustumCulled||Q.intersectsObject(S)){let At=X.update(S),xt=S.material;if(B){if(S.boundingSphere!==void 0){if(S.boundingSphere===null)S.computeBoundingSphere();Pt.copy(S.boundingSphere.center)}else{if(At.boundingSphere===null)At.computeBoundingSphere();Pt.copy(At.boundingSphere.center)}Pt.applyMatrix4(S.matrixWorld).applyMatrix4(vt)}if(Array.isArray(xt)){let Ct=At.groups;for(let Dt=0,Yt=Ct.length;Dt<Yt;Dt++){let jt=Ct[Dt],Nt=xt[jt.materialIndex];if(Nt&&Nt.visible)x.push(S,At,Nt,H,Pt.z,jt)}}else if(xt.visible)x.push(S,At,xt,H,Pt.z,null)}}}let yt=S.children;for(let At=0,xt=yt.length;At<xt;At++)vo(yt[At],N,H,B)}function xh(S,N,H,B){let{opaque:z,transmissive:yt,transparent:At}=S;if(T.setupLightsView(H),it===!0)ot.setGlobalState(M.clippingPlanes,H);if(B)b.viewport(lt.copy(B));if(z.length>0)Nr(z,N,H);if(yt.length>0)Nr(yt,N,H);if(At.length>0)Nr(At,N,H);b.buffers.depth.setTest(!0),b.buffers.depth.setMask(!0),b.buffers.color.setMask(!0),b.setPolygonOffset(!1)}function yh(S,N,H,B){if((H.isScene===!0?H.overrideMaterial:null)!==null)return;if(T.state.transmissionRenderTarget[B.id]===void 0){let Nt=Qt.has("EXT_color_buffer_half_float")||Qt.has("EXT_color_buffer_float");T.state.transmissionRenderTarget[B.id]=new hn(1,1,{generateMipmaps:!0,type:Nt?Yn:Mn,minFilter:Ai,samples:Math.max(4,Kt.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ee.workingColorSpace})}let yt=T.state.transmissionRenderTarget[B.id],At=B.viewport||lt;yt.setSize(At.z*M.transmissionResolutionScale,At.w*M.transmissionResolutionScale);let xt=M.getRenderTarget(),Ct=M.getActiveCubeFace(),Dt=M.getActiveMipmapLevel();if(M.setRenderTarget(yt),M.getClearColor(he),ae=M.getClearAlpha(),ae<1)M.setClearColor(16777215,0.5);if(M.clear(),Wt)zt.render(H);let Yt=M.toneMapping;M.toneMapping=vn;let jt=B.viewport;if(B.viewport!==void 0)B.viewport=void 0;if(T.setupLightsView(B),it===!0)ot.setGlobalState(M.clippingPlanes,B);if(Nr(S,H,B),G.updateMultisampleRenderTarget(yt),G.updateRenderTargetMipmap(yt),Qt.has("WEBGL_multisampled_render_to_texture")===!1){let Nt=!1;for(let ue=0,we=N.length;ue<we;ue++){let Te=N[ue],{object:fe,geometry:ze,material:wt,group:nn}=Te;if(wt.side===Cn&&fe.layers.test(B.layers)){let ie=wt.side;wt.side=Ke,wt.needsUpdate=!0,vh(fe,H,B,ze,wt,nn),wt.side=ie,wt.needsUpdate=!0,Nt=!0}}if(Nt===!0)G.updateMultisampleRenderTarget(yt),G.updateRenderTargetMipmap(yt)}if(M.setRenderTarget(xt,Ct,Dt),M.setClearColor(he,ae),jt!==void 0)B.viewport=jt;M.toneMapping=Yt}function Nr(S,N,H){let B=N.isScene===!0?N.overrideMaterial:null;for(let z=0,yt=S.length;z<yt;z++){let At=S[z],{object:xt,geometry:Ct,group:Dt}=At,Yt=At.material;if(Yt.allowOverride===!0&&B!==null)Yt=B;if(xt.layers.test(H.layers))vh(xt,N,H,Ct,Yt,Dt)}}function vh(S,N,H,B,z,yt){if(S.onBeforeRender(M,N,H,B,z,yt),S.modelViewMatrix.multiplyMatrices(H.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),z.onBeforeRender(M,N,H,B,S,yt),z.transparent===!0&&z.side===Cn&&z.forceSinglePass===!1)z.side=Ke,z.needsUpdate=!0,M.renderBufferDirect(H,N,B,z,S,yt),z.side=Es,z.needsUpdate=!0,M.renderBufferDirect(H,N,B,z,S,yt),z.side=Cn;else M.renderBufferDirect(H,N,B,z,S,yt);S.onAfterRender(M,N,H,B,z,yt)}function Ur(S,N,H){if(N.isScene!==!0)N=Lt;let B=L.get(S),z=T.state.lights,yt=T.state.shadowsArray,At=z.state.version,xt=J.getParameters(S,z.state,yt,N,H,T.state.lightProbeGridArray),Ct=J.getProgramCacheKey(xt),Dt=B.programs;B.environment=S.isMeshStandardMaterial||S.isMeshLambertMaterial||S.isMeshPhongMaterial?N.environment:null,B.fog=N.fog;let Yt=S.isMeshStandardMaterial||S.isMeshLambertMaterial&&!S.envMap||S.isMeshPhongMaterial&&!S.envMap;if(B.envMap=tt.get(S.envMap||B.environment,Yt),B.envMapRotation=B.environment!==null&&S.envMap===null?N.environmentRotation:S.envMapRotation,Dt===void 0)S.addEventListener("dispose",En),Dt=new Map,B.programs=Dt;let jt=Dt.get(Ct);if(jt!==void 0){if(B.currentProgram===jt&&B.lightsStateVersion===At)return Sh(S,xt),jt}else{if(xt.uniforms=J.getUniforms(S),C!==null&&S.isNodeMaterial)C.build(S,H,xt);S.onBeforeCompile(xt,M),jt=J.acquireProgram(xt,Ct),Dt.set(Ct,jt),B.uniforms=xt.uniforms}let Nt=B.uniforms;if(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)Nt.clippingPlanes=ot.uniform;if(Sh(S,xt),B.needsLights=Uf(S),B.lightsStateVersion=At,B.needsLights)Nt.ambientLightColor.value=z.state.ambient,Nt.lightProbe.value=z.state.probe,Nt.directionalLights.value=z.state.directional,Nt.directionalLightShadows.value=z.state.directionalShadow,Nt.spotLights.value=z.state.spot,Nt.spotLightShadows.value=z.state.spotShadow,Nt.rectAreaLights.value=z.state.rectArea,Nt.ltc_1.value=z.state.rectAreaLTC1,Nt.ltc_2.value=z.state.rectAreaLTC2,Nt.pointLights.value=z.state.point,Nt.pointLightShadows.value=z.state.pointShadow,Nt.hemisphereLights.value=z.state.hemi,Nt.directionalShadowMatrix.value=z.state.directionalShadowMatrix,Nt.spotLightMatrix.value=z.state.spotLightMatrix,Nt.spotLightMap.value=z.state.spotLightMap,Nt.pointShadowMatrix.value=z.state.pointShadowMatrix;return B.lightProbeGrid=T.state.lightProbeGridArray.length>0,B.currentProgram=jt,B.uniformsList=null,jt}function Mh(S){if(S.uniformsList===null){let N=S.currentProgram.getUniforms();S.uniformsList=Cr.seqWithValue(N.seq,S.uniforms)}return S.uniformsList}function Sh(S,N){let H=L.get(S);H.outputColorSpace=N.outputColorSpace,H.batching=N.batching,H.batchingColor=N.batchingColor,H.instancing=N.instancing,H.instancingColor=N.instancingColor,H.instancingMorph=N.instancingMorph,H.skinning=N.skinning,H.morphTargets=N.morphTargets,H.morphNormals=N.morphNormals,H.morphColors=N.morphColors,H.morphTargetsCount=N.morphTargetsCount,H.numClippingPlanes=N.numClippingPlanes,H.numIntersection=N.numClipIntersection,H.vertexAlphas=N.vertexAlphas,H.vertexTangents=N.vertexTangents,H.toneMapping=N.toneMapping}function Lf(S,N){if(S.length===0)return null;if(S.length===1)return S[0].texture!==null?S[0]:null;E.setFromMatrixPosition(N.matrixWorld);for(let H=0,B=S.length;H<B;H++){let z=S[H];if(z.texture!==null&&z.boundingBox.containsPoint(E))return z}return null}function Df(S,N,H,B,z){if(N.isScene!==!0)N=Lt;G.resetTextureUnits();let yt=N.fog,At=B.isMeshStandardMaterial||B.isMeshLambertMaterial||B.isMeshPhongMaterial?N.environment:null,xt=O===null?M.outputColorSpace:O.isXRRenderTarget===!0?O.texture.colorSpace:ee.workingColorSpace,Ct=B.isMeshStandardMaterial||B.isMeshLambertMaterial&&!B.envMap||B.isMeshPhongMaterial&&!B.envMap,Dt=tt.get(B.envMap||At,Ct),Yt=B.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,jt=!!H.attributes.tangent&&(!!B.normalMap||B.anisotropy>0),Nt=!!H.morphAttributes.position,ue=!!H.morphAttributes.normal,we=!!H.morphAttributes.color,Te=vn;if(B.toneMapped){if(O===null||O.isXRRenderTarget===!0)Te=M.toneMapping}let fe=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,ze=fe!==void 0?fe.length:0,wt=L.get(B),nn=T.state.lights;if(it===!0){if(nt===!0||S!==rt){let ye=S===rt&&B.id===j;ot.setState(B,S,ye)}}let ie=!1;if(B.version===wt.__version){if(wt.needsLights&&wt.lightsStateVersion!==nn.state.version)ie=!0;else if(wt.outputColorSpace!==xt)ie=!0;else if(z.isBatchedMesh&&wt.batching===!1)ie=!0;else if(!z.isBatchedMesh&&wt.batching===!0)ie=!0;else if(z.isBatchedMesh&&wt.batchingColor===!0&&z.colorTexture===null)ie=!0;else if(z.isBatchedMesh&&wt.batchingColor===!1&&z.colorTexture!==null)ie=!0;else if(z.isInstancedMesh&&wt.instancing===!1)ie=!0;else if(!z.isInstancedMesh&&wt.instancing===!0)ie=!0;else if(z.isSkinnedMesh&&wt.skinning===!1)ie=!0;else if(!z.isSkinnedMesh&&wt.skinning===!0)ie=!0;else if(z.isInstancedMesh&&wt.instancingColor===!0&&z.instanceColor===null)ie=!0;else if(z.isInstancedMesh&&wt.instancingColor===!1&&z.instanceColor!==null)ie=!0;else if(z.isInstancedMesh&&wt.instancingMorph===!0&&z.morphTexture===null)ie=!0;else if(z.isInstancedMesh&&wt.instancingMorph===!1&&z.morphTexture!==null)ie=!0;else if(wt.envMap!==Dt)ie=!0;else if(B.fog===!0&&wt.fog!==yt)ie=!0;else if(wt.numClippingPlanes!==void 0&&(wt.numClippingPlanes!==ot.numPlanes||wt.numIntersection!==ot.numIntersection))ie=!0;else if(wt.vertexAlphas!==Yt)ie=!0;else if(wt.vertexTangents!==jt)ie=!0;else if(wt.morphTargets!==Nt)ie=!0;else if(wt.morphNormals!==ue)ie=!0;else if(wt.morphColors!==we)ie=!0;else if(wt.toneMapping!==Te)ie=!0;else if(wt.morphTargetsCount!==ze)ie=!0;else if(!!wt.lightProbeGrid!==T.state.lightProbeGridArray.length>0)ie=!0}else ie=!0,wt.__version=B.version;let an=wt.currentProgram;if(ie===!0){if(an=Ur(B,N,z),C&&B.isNodeMaterial)C.onUpdateProgram(B,an,wt)}let Tn=!1,Qn=!1,ji=!1,pe=an.getUniforms(),Ae=wt.uniforms;if(b.useProgram(an.program))Tn=!0,Qn=!0,ji=!0;if(B.id!==j)j=B.id,Qn=!0;if(wt.needsLights){let ye=Lf(T.state.lightProbeGridArray,z);if(wt.lightProbeGrid!==ye)wt.lightProbeGrid=ye,Qn=!0}if(Tn||rt!==S){if(b.buffers.depth.getReversed()&&S.reversedDepth!==!0)S._reversedDepth=!0,S.updateProjectionMatrix();pe.setValue(I,"projectionMatrix",S.projectionMatrix),pe.setValue(I,"viewMatrix",S.matrixWorldInverse);let ei=pe.map.cameraPosition;if(ei!==void 0)ei.setValue(I,Et.setFromMatrixPosition(S.matrixWorld));if(Kt.logarithmicDepthBuffer)pe.setValue(I,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2));if(B.isMeshPhongMaterial||B.isMeshToonMaterial||B.isMeshLambertMaterial||B.isMeshBasicMaterial||B.isMeshStandardMaterial||B.isShaderMaterial)pe.setValue(I,"isOrthographic",S.isOrthographicCamera===!0);if(rt!==S)rt=S,Qn=!0,ji=!0}if(wt.needsLights){if(nn.state.directionalShadowMap.length>0)pe.setValue(I,"directionalShadowMap",nn.state.directionalShadowMap,G);if(nn.state.spotShadowMap.length>0)pe.setValue(I,"spotShadowMap",nn.state.spotShadowMap,G);if(nn.state.pointShadowMap.length>0)pe.setValue(I,"pointShadowMap",nn.state.pointShadowMap,G)}if(z.isSkinnedMesh){pe.setOptional(I,z,"bindMatrix"),pe.setOptional(I,z,"bindMatrixInverse");let ye=z.skeleton;if(ye){if(ye.boneTexture===null)ye.computeBoneTexture();pe.setValue(I,"boneTexture",ye.boneTexture,G)}}if(z.isBatchedMesh){if(pe.setOptional(I,z,"batchingTexture"),pe.setValue(I,"batchingTexture",z._matricesTexture,G),pe.setOptional(I,z,"batchingIdTexture"),pe.setValue(I,"batchingIdTexture",z._indirectTexture,G),pe.setOptional(I,z,"batchingColorTexture"),z._colorsTexture!==null)pe.setValue(I,"batchingColorTexture",z._colorsTexture,G)}let ti=H.morphAttributes;if(ti.position!==void 0||ti.normal!==void 0||ti.color!==void 0)se.update(z,H,an);if(Qn||wt.receiveShadow!==z.receiveShadow)wt.receiveShadow=z.receiveShadow,pe.setValue(I,"receiveShadow",z.receiveShadow);if((B.isMeshStandardMaterial||B.isMeshLambertMaterial||B.isMeshPhongMaterial)&&B.envMap===null&&N.environment!==null)Ae.envMapIntensity.value=N.environmentIntensity;if(Ae.dfgLUT!==void 0)Ae.dfgLUT.value=Yx();if(Qn){if(pe.setValue(I,"toneMappingExposure",M.toneMappingExposure),wt.needsLights)Nf(Ae,ji);if(yt&&B.fog===!0)Mt.refreshFogUniforms(Ae,yt);if(Mt.refreshMaterialUniforms(Ae,B,bt,ct,T.state.transmissionRenderTarget[S.id]),wt.needsLights&&wt.lightProbeGrid){let ye=wt.lightProbeGrid;Ae.probesSH.value=ye.texture,Ae.probesMin.value.copy(ye.boundingBox.min),Ae.probesMax.value.copy(ye.boundingBox.max),Ae.probesResolution.value.copy(ye.resolution)}Cr.upload(I,Mh(wt),Ae,G)}if(B.isShaderMaterial&&B.uniformsNeedUpdate===!0)Cr.upload(I,Mh(wt),Ae,G),B.uniformsNeedUpdate=!1;if(B.isSpriteMaterial)pe.setValue(I,"center",z.center);if(pe.setValue(I,"modelViewMatrix",z.modelViewMatrix),pe.setValue(I,"normalMatrix",z.normalMatrix),pe.setValue(I,"modelMatrix",z.matrixWorld),B.uniformsGroups!==void 0){let ye=B.uniformsGroups;for(let ei=0,Qi=ye.length;ei<Qi;ei++){let bh=ye[ei];Tt.update(bh,an),Tt.bind(bh,an)}}return an}function Nf(S,N){S.ambientLightColor.needsUpdate=N,S.lightProbe.needsUpdate=N,S.directionalLights.needsUpdate=N,S.directionalLightShadows.needsUpdate=N,S.pointLights.needsUpdate=N,S.pointLightShadows.needsUpdate=N,S.spotLights.needsUpdate=N,S.spotLightShadows.needsUpdate=N,S.rectAreaLights.needsUpdate=N,S.hemisphereLights.needsUpdate=N}function Uf(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}if(this.getActiveCubeFace=function(){return V},this.getActiveMipmapLevel=function(){return W},this.getRenderTarget=function(){return O},this.setRenderTargetTextures=function(S,N,H){let B=L.get(S);if(B.__autoAllocateDepthBuffer=S.resolveDepthBuffer===!1,B.__autoAllocateDepthBuffer===!1)B.__useRenderToTexture=!1;L.get(S.texture).__webglTexture=N,L.get(S.depthTexture).__webglTexture=B.__autoAllocateDepthBuffer?void 0:H,B.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(S,N){let H=L.get(S);H.__webglFramebuffer=N,H.__useDefaultFramebuffer=N===void 0},this.setRenderTarget=function(S,N=0,H=0){O=S,V=N,W=H;let B=null,z=!1,yt=!1;if(S){let xt=L.get(S);if(xt.__useDefaultFramebuffer!==void 0){b.bindFramebuffer(I.FRAMEBUFFER,xt.__webglFramebuffer),lt.copy(S.viewport),Rt.copy(S.scissor),St=S.scissorTest,b.viewport(lt),b.scissor(Rt),b.setScissorTest(St),j=-1;return}else if(xt.__webglFramebuffer===void 0)G.setupRenderTarget(S);else if(xt.__hasExternalTextures)G.rebindTextures(S,L.get(S.texture).__webglTexture,L.get(S.depthTexture).__webglTexture);else if(S.depthBuffer){let Yt=S.depthTexture;if(xt.__boundDepthTexture!==Yt){if(Yt!==null&&L.has(Yt)&&(S.width!==Yt.image.width||S.height!==Yt.image.height))throw Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");G.setupDepthRenderbuffer(S)}}let Ct=S.texture;if(Ct.isData3DTexture||Ct.isDataArrayTexture||Ct.isCompressedArrayTexture)yt=!0;let Dt=L.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget){if(Array.isArray(Dt[N]))B=Dt[N][H];else B=Dt[N];z=!0}else if(S.samples>0&&G.useMultisampledRTT(S)===!1)B=L.get(S).__webglMultisampledFramebuffer;else if(Array.isArray(Dt))B=Dt[H];else B=Dt;lt.copy(S.viewport),Rt.copy(S.scissor),St=S.scissorTest}else lt.copy(ne).multiplyScalar(bt).floor(),Rt.copy(kt).multiplyScalar(bt).floor(),St=Ht;if(H!==0)B=k;if(b.bindFramebuffer(I.FRAMEBUFFER,B))b.drawBuffers(S,B);if(b.viewport(lt),b.scissor(Rt),b.setScissorTest(St),z){let xt=L.get(S.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+N,xt.__webglTexture,H)}else if(yt){let xt=N;for(let Ct=0;Ct<S.textures.length;Ct++){let Dt=L.get(S.textures[Ct]);I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0+Ct,Dt.__webglTexture,H,xt)}}else if(S!==null&&H!==0){let xt=L.get(S.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,xt.__webglTexture,H)}j=-1},this.readRenderTargetPixels=function(S,N,H,B,z,yt,At,xt=0){if(!(S&&S.isWebGLRenderTarget)){Bt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ct=L.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&At!==void 0)Ct=Ct[At];if(Ct){b.bindFramebuffer(I.FRAMEBUFFER,Ct);try{let Dt=S.textures[xt],{format:Yt,type:jt}=Dt;if(S.textures.length>1)I.readBuffer(I.COLOR_ATTACHMENT0+xt);if(!Kt.textureFormatReadable(Yt)){Bt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Kt.textureTypeReadable(jt)){Bt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}if(N>=0&&N<=S.width-B&&(H>=0&&H<=S.height-z))I.readPixels(N,H,B,z,Y.convert(Yt),Y.convert(jt),yt)}finally{let Dt=O!==null?L.get(O).__webglFramebuffer:null;b.bindFramebuffer(I.FRAMEBUFFER,Dt)}}},this.readRenderTargetPixelsAsync=async function(S,N,H,B,z,yt,At,xt=0){if(!(S&&S.isWebGLRenderTarget))throw Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ct=L.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&At!==void 0)Ct=Ct[At];if(Ct)if(N>=0&&N<=S.width-B&&(H>=0&&H<=S.height-z)){b.bindFramebuffer(I.FRAMEBUFFER,Ct);let Dt=S.textures[xt],{format:Yt,type:jt}=Dt;if(S.textures.length>1)I.readBuffer(I.COLOR_ATTACHMENT0+xt);if(!Kt.textureFormatReadable(Yt))throw Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Kt.textureTypeReadable(jt))throw Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Nt=I.createBuffer();I.bindBuffer(I.PIXEL_PACK_BUFFER,Nt),I.bufferData(I.PIXEL_PACK_BUFFER,yt.byteLength,I.STREAM_READ),I.readPixels(N,H,B,z,Y.convert(Yt),Y.convert(jt),0);let ue=O!==null?L.get(O).__webglFramebuffer:null;b.bindFramebuffer(I.FRAMEBUFFER,ue);let we=I.fenceSync(I.SYNC_GPU_COMMANDS_COMPLETE,0);return I.flush(),await sd(I,we,4),I.bindBuffer(I.PIXEL_PACK_BUFFER,Nt),I.getBufferSubData(I.PIXEL_PACK_BUFFER,0,yt),I.deleteBuffer(Nt),I.deleteSync(we),yt}else throw Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(S,N=null,H=0){let B=Math.pow(2,-H),z=Math.floor(S.image.width*B),yt=Math.floor(S.image.height*B),At=N!==null?N.x:0,xt=N!==null?N.y:0;G.setTexture2D(S,0),I.copyTexSubImage2D(I.TEXTURE_2D,H,0,0,At,xt,z,yt),b.unbindTexture()},this.copyTextureToTexture=function(S,N,H=null,B=null,z=0,yt=0){let At,xt,Ct,Dt,Yt,jt,Nt,ue,we,Te=S.isCompressedTexture?S.mipmaps[yt]:S.image;if(H!==null)At=H.max.x-H.min.x,xt=H.max.y-H.min.y,Ct=H.isBox3?H.max.z-H.min.z:1,Dt=H.min.x,Yt=H.min.y,jt=H.isBox3?H.min.z:0;else{let Ae=Math.pow(2,-z);if(At=Math.floor(Te.width*Ae),xt=Math.floor(Te.height*Ae),S.isDataArrayTexture)Ct=Te.depth;else if(S.isData3DTexture)Ct=Math.floor(Te.depth*Ae);else Ct=1;Dt=0,Yt=0,jt=0}if(B!==null)Nt=B.x,ue=B.y,we=B.z;else Nt=0,ue=0,we=0;let fe=Y.convert(N.format),ze=Y.convert(N.type),wt;if(N.isData3DTexture)G.setTexture3D(N,0),wt=I.TEXTURE_3D;else if(N.isDataArrayTexture||N.isCompressedArrayTexture)G.setTexture2DArray(N,0),wt=I.TEXTURE_2D_ARRAY;else G.setTexture2D(N,0),wt=I.TEXTURE_2D;b.activeTexture(I.TEXTURE0),b.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,N.flipY),b.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),b.pixelStorei(I.UNPACK_ALIGNMENT,N.unpackAlignment);let nn=b.getParameter(I.UNPACK_ROW_LENGTH),ie=b.getParameter(I.UNPACK_IMAGE_HEIGHT),an=b.getParameter(I.UNPACK_SKIP_PIXELS),Tn=b.getParameter(I.UNPACK_SKIP_ROWS),Qn=b.getParameter(I.UNPACK_SKIP_IMAGES);b.pixelStorei(I.UNPACK_ROW_LENGTH,Te.width),b.pixelStorei(I.UNPACK_IMAGE_HEIGHT,Te.height),b.pixelStorei(I.UNPACK_SKIP_PIXELS,Dt),b.pixelStorei(I.UNPACK_SKIP_ROWS,Yt),b.pixelStorei(I.UNPACK_SKIP_IMAGES,jt);let ji=S.isDataArrayTexture||S.isData3DTexture,pe=N.isDataArrayTexture||N.isData3DTexture;if(S.isDepthTexture){let Ae=L.get(S),ti=L.get(N),ye=L.get(Ae.__renderTarget),ei=L.get(ti.__renderTarget);b.bindFramebuffer(I.READ_FRAMEBUFFER,ye.__webglFramebuffer),b.bindFramebuffer(I.DRAW_FRAMEBUFFER,ei.__webglFramebuffer);for(let Qi=0;Qi<Ct;Qi++){if(ji)I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,L.get(S).__webglTexture,z,jt+Qi),I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,L.get(N).__webglTexture,yt,we+Qi);I.blitFramebuffer(Dt,Yt,At,xt,Nt,ue,At,xt,I.DEPTH_BUFFER_BIT,I.NEAREST)}b.bindFramebuffer(I.READ_FRAMEBUFFER,null),b.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else if(z!==0||S.isRenderTargetTexture||L.has(S)){let Ae=L.get(S),ti=L.get(N);b.bindFramebuffer(I.READ_FRAMEBUFFER,q),b.bindFramebuffer(I.DRAW_FRAMEBUFFER,F);for(let ye=0;ye<Ct;ye++){if(ji)I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,Ae.__webglTexture,z,jt+ye);else I.framebufferTexture2D(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,Ae.__webglTexture,z);if(pe)I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,ti.__webglTexture,yt,we+ye);else I.framebufferTexture2D(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,ti.__webglTexture,yt);if(z!==0)I.blitFramebuffer(Dt,Yt,At,xt,Nt,ue,At,xt,I.COLOR_BUFFER_BIT,I.NEAREST);else if(pe)I.copyTexSubImage3D(wt,yt,Nt,ue,we+ye,Dt,Yt,At,xt);else I.copyTexSubImage2D(wt,yt,Nt,ue,Dt,Yt,At,xt)}b.bindFramebuffer(I.READ_FRAMEBUFFER,null),b.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else if(pe)if(S.isDataTexture||S.isData3DTexture)I.texSubImage3D(wt,yt,Nt,ue,we,At,xt,Ct,fe,ze,Te.data);else if(N.isCompressedArrayTexture)I.compressedTexSubImage3D(wt,yt,Nt,ue,we,At,xt,Ct,fe,Te.data);else I.texSubImage3D(wt,yt,Nt,ue,we,At,xt,Ct,fe,ze,Te);else if(S.isDataTexture)I.texSubImage2D(I.TEXTURE_2D,yt,Nt,ue,At,xt,fe,ze,Te.data);else if(S.isCompressedTexture)I.compressedTexSubImage2D(I.TEXTURE_2D,yt,Nt,ue,Te.width,Te.height,fe,Te.data);else I.texSubImage2D(I.TEXTURE_2D,yt,Nt,ue,At,xt,fe,ze,Te);if(b.pixelStorei(I.UNPACK_ROW_LENGTH,nn),b.pixelStorei(I.UNPACK_IMAGE_HEIGHT,ie),b.pixelStorei(I.UNPACK_SKIP_PIXELS,an),b.pixelStorei(I.UNPACK_SKIP_ROWS,Tn),b.pixelStorei(I.UNPACK_SKIP_IMAGES,Qn),yt===0&&N.generateMipmaps)I.generateMipmap(wt);b.unbindTexture()},this.initRenderTarget=function(S){if(L.get(S).__webglFramebuffer===void 0)G.setupRenderTarget(S)},this.initTexture=function(S){if(S.isCubeTexture)G.setTextureCube(S,0);else if(S.isData3DTexture)G.setTexture3D(S,0);else if(S.isDataArrayTexture||S.isCompressedArrayTexture)G.setTexture2DArray(S,0);else G.setTexture2D(S,0);b.unbindTexture()},this.resetState=function(){V=0,W=0,O=null,b.reset(),ft.reset()},typeof __THREE_DEVTOOLS__<"u")__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Kl}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=ee._getDrawingBufferColorSpace(t),e.unpackColorSpace=ee._getUnpackColorSpace()}}var tf={type:"change"},Vc={type:"start"},nf={type:"end"},eo=new Ni,ef=new Ye,$x=Math.cos(70*Di.DEG2RAD),Le=new P,Qe=2*Math.PI,de={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Hc=0.000001;class Wc extends Ja{constructor(t,e=null){super(t,e);if(this.state=de.NONE,this.target=new P,this.cursor=new P,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=0.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:ln.ROTATE,MIDDLE:ln.DOLLY,RIGHT:ln.PAN},this.touches={ONE:yn.ROTATE,TWO:yn.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle="auto",this._domElementKeyEvents=null,this._lastPosition=new P,this._lastQuaternion=new cn,this._lastTargetPosition=new P,this._quat=new cn().setFromUnitVectors(t.up,new P(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new di,this._sphericalDelta=new di,this._scale=1,this._panOffset=new P,this._rotateStart=new K,this._rotateEnd=new K,this._rotateDelta=new K,this._panStart=new K,this._panEnd=new K,this._panDelta=new K,this._dollyStart=new K,this._dollyEnd=new K,this._dollyDelta=new K,this._dollyDirection=new P,this._mouse=new K,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=Kx.bind(this),this._onPointerDown=Jx.bind(this),this._onPointerUp=jx.bind(this),this._onContextMenu=ry.bind(this),this._onMouseWheel=ey.bind(this),this._onKeyDown=ny.bind(this),this._onTouchStart=iy.bind(this),this._onTouchMove=sy.bind(this),this._onMouseDown=Qx.bind(this),this._onMouseMove=ty.bind(this),this._interceptControlDown=ay.bind(this),this._interceptControlUp=oy.bind(this),this.domElement!==null)this.connect(this.domElement);this.update()}set cursorStyle(t){if(this._cursorStyle=t,t==="grab")this.domElement.style.cursor="grab";else this.domElement.style.cursor="auto"}get cursorStyle(){return this._cursorStyle}connect(t){super.connect(t),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction=""}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){if(this._domElementKeyEvents!==null)this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(tf),this.update(),this.state=de.NONE}pan(t,e){this._pan(t,e),this.update()}dollyIn(t){this._dollyIn(t),this.update()}dollyOut(t){this._dollyOut(t),this.update()}rotateLeft(t){this._rotateLeft(t),this.update()}rotateUp(t){this._rotateUp(t),this.update()}update(t=null){let e=this.object.position;if(Le.copy(e).sub(this.target),Le.applyQuaternion(this._quat),this._spherical.setFromVector3(Le),this.autoRotate&&this.state===de.NONE)this._rotateLeft(this._getAutoRotationAngle(t));if(this.enableDamping)this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor;else this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi;let n=this.minAzimuthAngle,i=this.maxAzimuthAngle;if(isFinite(n)&&isFinite(i)){if(n<-Math.PI)n+=Qe;else if(n>Math.PI)n-=Qe;if(i<-Math.PI)i+=Qe;else if(i>Math.PI)i-=Qe;if(n<=i)this._spherical.theta=Math.max(n,Math.min(i,this._spherical.theta));else this._spherical.theta=this._spherical.theta>(n+i)/2?Math.max(n,this._spherical.theta):Math.min(i,this._spherical.theta)}if(this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0)this.target.addScaledVector(this._panOffset,this.dampingFactor);else this.target.add(this._panOffset);this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let s=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{let r=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),s=r!=this._spherical.radius}if(Le.setFromSpherical(this._spherical),Le.applyQuaternion(this._quatInverse),e.copy(this.target).add(Le),this.object.lookAt(this.target),this.enableDamping===!0)this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor);else this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0);if(this.zoomToCursor&&this._performCursorZoom){let r=null;if(this.object.isPerspectiveCamera){let a=Le.length();r=this._clampDistance(a*this._scale);let o=a-r;this.object.position.addScaledVector(this._dollyDirection,o),this.object.updateMatrixWorld(),s=!!o}else if(this.object.isOrthographicCamera){let a=new P(this._mouse.x,this._mouse.y,0);a.unproject(this.object);let o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),s=o!==this.object.zoom;let l=new P(this._mouse.x,this._mouse.y,0);l.unproject(this.object),this.object.position.sub(l).add(a),this.object.updateMatrixWorld(),r=Le.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;if(r!==null)if(this.screenSpacePanning)this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(r).add(this.object.position);else if(eo.origin.copy(this.object.position),eo.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(eo.direction))<$x)this.object.lookAt(this.target);else ef.setFromNormalAndCoplanarPoint(this.object.up,this.target),eo.intersectPlane(ef,this.target)}else if(this.object.isOrthographicCamera){let r=this.object.zoom;if(this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),r!==this.object.zoom)this.object.updateProjectionMatrix(),s=!0}if(this._scale=1,this._performCursorZoom=!1,s||this._lastPosition.distanceToSquared(this.object.position)>Hc||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Hc||this._lastTargetPosition.distanceToSquared(this.target)>Hc)return this.dispatchEvent(tf),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0;return!1}_getAutoRotationAngle(t){if(t!==null)return Qe/60*this.autoRotateSpeed*t;else return Qe/60/60*this.autoRotateSpeed}_getZoomScale(t){let e=Math.abs(t*0.01);return Math.pow(0.95,this.zoomSpeed*e)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,e){Le.setFromMatrixColumn(e,0),Le.multiplyScalar(-t),this._panOffset.add(Le)}_panUp(t,e){if(this.screenSpacePanning===!0)Le.setFromMatrixColumn(e,1);else Le.setFromMatrixColumn(e,0),Le.crossVectors(this.object.up,Le);Le.multiplyScalar(t),this._panOffset.add(Le)}_pan(t,e){let n=this.domElement;if(this.object.isPerspectiveCamera){let i=this.object.position;Le.copy(i).sub(this.target);let s=Le.length();s*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*s/n.clientHeight,this.object.matrix),this._panUp(2*e*s/n.clientHeight,this.object.matrix)}else if(this.object.isOrthographicCamera)this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix);else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1}_dollyOut(t){if(this.object.isPerspectiveCamera||this.object.isOrthographicCamera)this._scale/=t;else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1}_dollyIn(t){if(this.object.isPerspectiveCamera||this.object.isOrthographicCamera)this._scale*=t;else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1}_updateZoomParameters(t,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;let n=this.domElement.getBoundingClientRect(),i=t-n.left,s=e-n.top,{width:r,height:a}=n;this._mouse.x=i/r*2-1,this._mouse.y=-(s/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let e=this.domElement;this._rotateLeft(Qe*this._rotateDelta.x/e.clientHeight),this._rotateUp(Qe*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){if(this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0)this._dollyOut(this._getZoomScale(this._dollyDelta.y));else if(this._dollyDelta.y<0)this._dollyIn(this._getZoomScale(this._dollyDelta.y));this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){if(this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0)this._dollyIn(this._getZoomScale(t.deltaY));else if(t.deltaY>0)this._dollyOut(this._getZoomScale(t.deltaY));this.update()}_handleKeyDown(t){let e=!1;switch(t.code){case this.keys.UP:if(t.ctrlKey||t.metaKey||t.shiftKey){if(this.enableRotate)this._rotateUp(Qe*this.keyRotateSpeed/this.domElement.clientHeight)}else if(this.enablePan)this._pan(0,this.keyPanSpeed);e=!0;break;case this.keys.BOTTOM:if(t.ctrlKey||t.metaKey||t.shiftKey){if(this.enableRotate)this._rotateUp(-Qe*this.keyRotateSpeed/this.domElement.clientHeight)}else if(this.enablePan)this._pan(0,-this.keyPanSpeed);e=!0;break;case this.keys.LEFT:if(t.ctrlKey||t.metaKey||t.shiftKey){if(this.enableRotate)this._rotateLeft(Qe*this.keyRotateSpeed/this.domElement.clientHeight)}else if(this.enablePan)this._pan(this.keyPanSpeed,0);e=!0;break;case this.keys.RIGHT:if(t.ctrlKey||t.metaKey||t.shiftKey){if(this.enableRotate)this._rotateLeft(-Qe*this.keyRotateSpeed/this.domElement.clientHeight)}else if(this.enablePan)this._pan(-this.keyPanSpeed,0);e=!0;break}if(e)t.preventDefault(),this.update()}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),n=0.5*(t.pageX+e.x),i=0.5*(t.pageY+e.y);this._rotateStart.set(n,i)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),n=0.5*(t.pageX+e.x),i=0.5*(t.pageY+e.y);this._panStart.set(n,i)}}_handleTouchStartDolly(t){let e=this._getSecondPointerPosition(t),n=t.pageX-e.x,i=t.pageY-e.y,s=Math.sqrt(n*n+i*i);this._dollyStart.set(0,s)}_handleTouchStartDollyPan(t){if(this.enableZoom)this._handleTouchStartDolly(t);if(this.enablePan)this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){if(this.enableZoom)this._handleTouchStartDolly(t);if(this.enableRotate)this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{let n=this._getSecondPointerPosition(t),i=0.5*(t.pageX+n.x),s=0.5*(t.pageY+n.y);this._rotateEnd.set(i,s)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let e=this.domElement;this._rotateLeft(Qe*this._rotateDelta.x/e.clientHeight),this._rotateUp(Qe*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),n=0.5*(t.pageX+e.x),i=0.5*(t.pageY+e.y);this._panEnd.set(n,i)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){let e=this._getSecondPointerPosition(t),n=t.pageX-e.x,i=t.pageY-e.y,s=Math.sqrt(n*n+i*i);this._dollyEnd.set(0,s),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);let r=(t.pageX+e.x)*0.5,a=(t.pageY+e.y)*0.5;this._updateZoomParameters(r,a)}_handleTouchMoveDollyPan(t){if(this.enableZoom)this._handleTouchMoveDolly(t);if(this.enablePan)this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){if(this.enableZoom)this._handleTouchMoveDolly(t);if(this.enableRotate)this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId){this._pointers.splice(e,1);return}}_isTrackingPointer(t){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId)return!0;return!1}_trackPointer(t){let e=this._pointerPositions[t.pointerId];if(e===void 0)e=new K,this._pointerPositions[t.pointerId]=e;e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){let e=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(t){let e=t.deltaMode,n={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(e){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}if(t.ctrlKey&&!this._controlActive)n.deltaY*=10;return n}}function Jx(t){if(this.enabled===!1)return;if(this._pointers.length===0)this.domElement.setPointerCapture(t.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp);if(this._isTrackingPointer(t))return;if(this._addPointer(t),t.pointerType==="touch")this._onTouchStart(t);else this._onMouseDown(t);if(this._cursorStyle==="grab")this.domElement.style.cursor="grabbing"}function Kx(t){if(this.enabled===!1)return;if(t.pointerType==="touch")this._onTouchMove(t);else this._onMouseMove(t)}function jx(t){switch(this._removePointer(t),this._pointers.length){case 0:if(this.domElement.releasePointerCapture(t.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(nf),this.state=de.NONE,this._cursorStyle==="grab")this.domElement.style.cursor="grab";break;case 1:let e=this._pointers[0],n=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:n.x,pageY:n.y});break}}function Qx(t){let e;switch(t.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case ln.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(t),this.state=de.DOLLY;break;case ln.ROTATE:if(t.ctrlKey||t.metaKey||t.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(t),this.state=de.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(t),this.state=de.ROTATE}break;case ln.PAN:if(t.ctrlKey||t.metaKey||t.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(t),this.state=de.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(t),this.state=de.PAN}break;default:this.state=de.NONE}if(this.state!==de.NONE)this.dispatchEvent(Vc)}function ty(t){switch(this.state){case de.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(t);break;case de.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(t);break;case de.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(t);break}}function ey(t){if(this.enabled===!1||this.enableZoom===!1||this.state!==de.NONE)return;t.preventDefault(),this.dispatchEvent(Vc),this._handleMouseWheel(this._customWheelEvent(t)),this.dispatchEvent(nf)}function ny(t){if(this.enabled===!1)return;this._handleKeyDown(t)}function iy(t){switch(this._trackPointer(t),this._pointers.length){case 1:switch(this.touches.ONE){case yn.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(t),this.state=de.TOUCH_ROTATE;break;case yn.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(t),this.state=de.TOUCH_PAN;break;default:this.state=de.NONE}break;case 2:switch(this.touches.TWO){case yn.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(t),this.state=de.TOUCH_DOLLY_PAN;break;case yn.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(t),this.state=de.TOUCH_DOLLY_ROTATE;break;default:this.state=de.NONE}break;default:this.state=de.NONE}if(this.state!==de.NONE)this.dispatchEvent(Vc)}function sy(t){switch(this._trackPointer(t),this.state){case de.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(t),this.update();break;case de.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(t),this.update();break;case de.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(t),this.update();break;case de.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(t),this.update();break;default:this.state=de.NONE}}function ry(t){if(this.enabled===!1)return;t.preventDefault()}function ay(t){if(t.key==="Control")this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0})}function oy(t){if(t.key==="Control")this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0})}var Xc=new Ye,no=new Is,Ns=new K,qc=new P;class Yc extends Wc{constructor(t,e){super(t,e);this.screenSpacePanning=!1,this.mouseButtons={LEFT:ln.PAN,MIDDLE:ln.DOLLY,RIGHT:ln.ROTATE},this.touches={ONE:yn.PAN,TWO:yn.DOLLY_ROTATE},this._panWorldStart=new P}_handleMouseDownPan(t){if(super._handleMouseDownPan(t),this._panOffset.set(0,0,0),this.screenSpacePanning===!0)return;Xc.setFromNormalAndCoplanarPoint(this.object.up,this.target);let n=this.domElement.getBoundingClientRect();Ns.x=(t.clientX-n.left)/n.width*2-1,Ns.y=-((t.clientY-n.top)/n.height)*2+1,no.setFromCamera(Ns,this.object),no.ray.intersectPlane(Xc,this._panWorldStart)}_handleMouseMovePan(t){if(this.screenSpacePanning===!0){super._handleMouseMovePan(t);return}let n=this.domElement.getBoundingClientRect();if(Ns.x=(t.clientX-n.left)/n.width*2-1,Ns.y=-((t.clientY-n.top)/n.height)*2+1,no.setFromCamera(Ns,this.object),no.ray.intersectPlane(Xc,qc))qc.sub(this._panWorldStart),this._panOffset.copy(qc).negate(),this.update()}}function rf(t,e=!1){let n=t[0].index!==null,i=new Set(Object.keys(t[0].attributes)),s=new Set(Object.keys(t[0].morphAttributes)),r={},a={},o=t[0].morphTargetsRelative,l=new Se,c=0;for(let h=0;h<t.length;++h){let d=t[h],u=0;if(n!==(d.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let f in d.attributes){if(!i.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+f+'" attribute exists among all geometries, or in none of them.'),null;if(r[f]===void 0)r[f]=[];r[f].push(d.attributes[f]),u++}if(u!==i.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(o!==d.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let f in d.morphAttributes){if(!s.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;if(a[f]===void 0)a[f]=[];a[f].push(d.morphAttributes[f])}if(e){let f;if(n)f=d.index.count;else if(d.attributes.position!==void 0)f=d.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,f,h),c+=f}}if(n){let h=0,d=[];for(let u=0;u<t.length;++u){let f=t[u].index;for(let g=0;g<f.count;++g)d.push(f.getX(g)+h);h+=t[u].attributes.position.count}l.setIndex(d)}for(let h in r){let d=sf(r[h]);if(!d)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,d)}for(let h in a){let d=a[h][0].length;if(d===0)continue;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let u=0;u<d;++u){let f=[];for(let v=0;v<a[h].length;++v)f.push(a[h][v][u]);let g=sf(f);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(g)}}return l}function sf(t){let e,n,i,s=-1,r=0;for(let c=0;c<t.length;++c){let h=t[c];if(e===void 0)e=h.array.constructor;if(e!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(n===void 0)n=h.itemSize;if(n!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(i===void 0)i=h.normalized;if(i!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1)s=h.gpuType;if(s!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*n}let a=new e(r),o=new He(a,n,i),l=0;for(let c=0;c<t.length;++c){let h=t[c];if(h.isInterleavedBufferAttribute){let d=l/n;for(let u=0,f=h.count;u<f;u++)for(let g=0;g<n;g++){let v=h.getComponent(u,g);o.setComponent(u+d,g,v)}}else a.set(h.array,l);l+=h.count*n}if(s!==void 0)o.gpuType=s;return o}var Xe=window.SITE_DATA,io=Xe.geo,[_i,xi]=Xe.center,[co,ho,uo,fo]=Xe.bounds,{types:Fn,roads:bn}=Xe,ly=new Set(["path","footway","steps","pedestrian"]),mt=(t)=>document.querySelector(t),Ne=(t,e,n=0)=>new P(t-_i,n,e-xi),$i=(t,e,n)=>Math.max(e,Math.min(n,t)),en=(t,e,n)=>t+(e-t)*n,cy=(t)=>t<0.5?4*t*t*t:1-Math.pow(-2*t+2,3)/2,hy=(t,e)=>[(e-io.lon0)*io.kx,-(t-io.lat0)*io.ky];function mi(t){let e=2166136261;for(let n=0;n<t.length;n++)e^=t.charCodeAt(n),e=Math.imul(e,16777619);return(e>>>0)%1e4/1e4}function Fs(t){return t<1000?`${Math.max(5,Math.round(t/5)*5)} m`:`${(t/1000).toFixed(1)} km`}function uy(t,e){let n=t/1000/(e==="walk"?Xe.walkKmh:Xe.driveKmh)*60;return n<1?"< 1 min":`${Math.round(n)} min`}function dy(t){let e=0;for(let n=0;n<t.length;n++){let[i,s]=t[n],[r,a]=t[(n+1)%t.length];e+=i*a-r*s}return Math.abs(e/2)}function fy(t){return t>=1e4?`≈ ${(t/1e4).toFixed(1)} ha`:`≈ ${Math.round(t/10)*10} m²`}function py(t,e,n){let i=null;for(let s=0;s<n.length;s++){let[r,a]=n[s],[o,l]=n[(s+1)%n.length],c=o-r,h=l-a,d=$i(((t-r)*c+(e-a)*h)/(c*c+h*h||1),0,1),u=r+d*c,f=a+d*h,g=Math.hypot(t-u,e-f);if(!i||g<i.d)i={x:u,y:f,d:g}}return i}function my(t,e,n,i){let s=e[0]-t[0],r=e[1]-t[1],a=i[0]-n[0],o=i[1]-n[1],l=s*o-r*a;if(Math.abs(l)<0.000000001)return null;let c=n[0]-t[0],h=n[1]-t[1],d=(c*o-h*a)/l,u=(c*r-h*s)/l,f=0.000001;if(d<-f||d>1+f||u<-f||u>1+f)return null;return{t:d,u}}function gy(t){let e=[];t.forEach((c,h)=>{for(let d=0;d<c.points.length-1;d++)e.push({a:c.points[d],b:c.points[d+1],road:h,cuts:[0,1]})});let n=60,i=new Map;e.forEach((c,h)=>{let d=Math.floor(Math.min(c.a[0],c.b[0])/n),u=Math.floor(Math.max(c.a[0],c.b[0])/n),f=Math.floor(Math.min(c.a[1],c.b[1])/n),g=Math.floor(Math.max(c.a[1],c.b[1])/n);for(let v=d;v<=u;v++)for(let m=f;m<=g;m++){let p=`${v},${m}`;if(!i.has(p))i.set(p,[]);i.get(p).push(h)}});let s=new Set;for(let c of i.values())for(let h=0;h<c.length;h++)for(let d=h+1;d<c.length;d++){let u=Math.min(c[h],c[d]),f=Math.max(c[h],c[d]),g=u*1e5+f;if(s.has(g))continue;s.add(g);let v=my(e[u].a,e[u].b,e[f].a,e[f].b);if(v)e[u].cuts.push(v.t),e[f].cuts.push(v.u)}let r=new Map,a=[],o=[],l=(c,h)=>{let d=`${Math.round(c*2)},${Math.round(h*2)}`,u=r.get(d);if(!u)u={id:a.length,x:c,y:h,adj:[],w:0},r.set(d,u),a.push(u);return u};for(let c of e){let h=[...new Set(c.cuts.map((d)=>$i(d,0,1)))].sort((d,u)=>d-u);for(let d=0;d<h.length-1;d++){let u=h[d],f=h[d+1];if(f-u<0.000001)continue;let g=l(en(c.a[0],c.b[0],u),en(c.a[1],c.b[1],u)),v=l(en(c.a[0],c.b[0],f),en(c.a[1],c.b[1],f));if(g===v)continue;let m=t[c.road],p={id:o.length,a:g.id,b:v.id,len:Math.hypot(v.x-g.x,v.y-g.y),road:c.road,walkOnly:ly.has(m.kind)};o.push(p),g.adj.push(p),v.adj.push(p),g.w=Math.max(g.w,m.width),v.w=Math.max(v.w,m.width)}}return{nodes:a,edges:o}}var Be=gy(bn);function eh(t,e,n="walk"){let i=null;for(let s of Be.edges){if(n==="drive"&&s.walkOnly)continue;let r=Be.nodes[s.a],a=Be.nodes[s.b],o=a.x-r.x,l=a.y-r.y,c=$i(((t-r.x)*o+(e-r.y)*l)/(o*o+l*l),0,1),h=r.x+c*o,d=r.y+c*l,u=Math.hypot(t-h,e-d);if(!i||u<i.d)i={e:s,t:c,x:h,y:d,d:u}}return i}var _y=15;function xy(t,e,n){let i=Be.nodes.length,s=i,r=i+1,a=new Map,o=(T,w,A,_)=>{if(!a.has(T))a.set(T,[]);a.get(T).push({to:w,len:A,road:_})};if(o(s,t.e.a,t.t*t.e.len,t.e.road),o(s,t.e.b,(1-t.t)*t.e.len,t.e.road),o(e.e.a,r,e.t*e.e.len,e.e.road),o(e.e.b,r,(1-e.t)*e.e.len,e.e.road),t.e===e.e)o(s,r,Math.abs(t.t-e.t)*t.e.len,t.e.road);let l=new Float64Array(i+2).fill(1/0),c=new Int32Array(i+2).fill(-1),h=new Int32Array(i+2).fill(-1),d=new Uint8Array(i+2),u=[],f=(T,w)=>{u.push([T,w]);let A=u.length-1;while(A>0){let _=A-1>>1;if(u[_][0]<=u[A][0])break;[u[_],u[A]]=[u[A],u[_]],A=_}},g=()=>{let T=u[0],w=u.pop();if(u.length){u[0]=w;let A=0;for(;;){let _=2*A+1,M=_+1,U=A;if(_<u.length&&u[_][0]<u[U][0])U=_;if(M<u.length&&u[M][0]<u[U][0])U=M;if(U===A)break;[u[U],u[A]]=[u[A],u[U]],A=U}}return T};l[s]=0,f(0,s);while(u.length){let[T,w]=g();if(d[w])continue;if(d[w]=1,w===r)break;let A=(M,U,C)=>{let k=T+U+(h[w]!==-1&&h[w]!==C&&bn[h[w]].name!==bn[C].name?_y:0);if(k<l[M])l[M]=k,c[M]=w,h[M]=C,f(k,M)};if(w<i)for(let M of Be.nodes[w].adj){if(n==="drive"&&M.walkOnly)continue;A(M.a===w?M.b:M.a,M.len,M.road)}let _=a.get(w);if(_)for(let M of _)A(M.to,M.len,M.road)}if(!isFinite(l[r]))return null;let v=[];for(let T=r;T!==-1;T=c[T])v.push(T);v.reverse();let m=v.map((T)=>T===s?[t.x,t.y]:T===r?[e.x,e.y]:[Be.nodes[T].x,Be.nodes[T].y]),p=v.slice(1).map((T)=>h[T]),R=[m[0]],E=[],x=0;for(let T=1;T<m.length;T++){let w=R[R.length-1],A=Math.hypot(m[T][0]-w[0],m[T][1]-w[1]);if(A<0.01)continue;R.push(m[T]),E.push(p[T-1]),x+=A}return{points:R,roads:E,length:x}}var yy=["north","northeast","east","southeast","south","southwest","west","northwest"],vy=(t,e)=>yy[(Math.round(Math.atan2(t,-e)*180/Math.PI/45)%8+8)%8],af=(t,e)=>Math.atan2(t[0]*e[1]-t[1]*e[0],t[0]*e[0]+t[1]*e[1])*180/Math.PI;function My(t,e,n){let i=[];for(let r=0;r<t.roads.length;r++){let[a,o]=t.points[r],[l,c]=t.points[r+1],h=Math.hypot(l-a,c-o),d=[(l-a)/h,(c-o)/h],u=bn[t.roads[r]].name,f=i[i.length-1];if(f&&(f.name===u&&Math.abs(af(f.end,d))<35||h<4)){f.len+=h,f.end=d;continue}i.push({name:u,len:h,start:d,end:d,at:[a,o]})}let s=[{icon:"start",text:`Start at ${e}`,dist:""}];return i.forEach((r,a)=>{let o=r.name?` on ${r.name}`:"",l=r.name?` onto ${r.name}`:"";if(a===0){s.push({icon:"straight",text:`Head ${vy(...r.start)}${o}`,dist:Fs(r.len),len:r.len,at:r.at});return}let c=af(i[a-1].end,r.start),h="straight",d=`Continue${l||" straight"}`;if(Math.abs(c)>150)h="uturn",d=`Make a U-turn${l}`;else if(c>30)h="right",d=`Turn right${l}`;else if(c<-30)h="left",d=`Turn left${l}`;else if(c>12)h="right",d=`Keep right${l}`;else if(c<-12)h="left",d=`Keep left${l}`;s.push({icon:h,text:d,dist:Fs(r.len),len:r.len,at:r.at})}),s.push({icon:"end",text:`Arrive at ${n}`,dist:""}),s}var Ji=mt("#scene"),of=matchMedia("(pointer: coarse)").matches,Kn=new Gc({canvas:Ji,antialias:!0,powerPreference:"high-performance"});Kn.setPixelRatio(Math.min(window.devicePixelRatio||1,2));Kn.shadowMap.enabled=!0;Kn.shadowMap.type=ga;var Ue=new Pa,xf=new Zt("#cfe2ee");Ue.background=xf;Ue.fog=new gr(xf,2600,6500);var De=new Ze(45,1,2,9000),ge=new Yc(De,Kn.domElement);ge.enableDamping=!0;ge.dampingFactor=0.12;ge.screenSpacePanning=!1;ge.minDistance=25;ge.maxDistance=2800;ge.maxPolarAngle=1.25;ge.zoomToCursor=!0;Ue.add(new qa(16777215,10135690,1.5));var jn=new Za(16774368,2.3);jn.position.set(-500,900,450);jn.castShadow=!0;jn.shadow.mapSize.set(of?2048:4096,of?2048:4096);Object.assign(jn.shadow.camera,{left:-700,right:700,top:700,bottom:-700,near:100,far:2500});jn.shadow.bias=-0.0005;jn.shadow.normalBias=0.6;Ue.add(jn,jn.target);var Zc=new Map;function pn(t,e={}){let n=t+JSON.stringify(e);if(!Zc.has(n))Zc.set(n,new Gi({color:t,roughness:0.88,metalness:0,...e}));return Zc.get(n)}function yf(t){let e=new Bi;return t.forEach(([n,i],s)=>s?e.lineTo(n-_i,-(i-xi)):e.moveTo(n-_i,-(i-xi))),e}function Sy(t,e,n,i=0){let s=new Cs(yf(t),{depth:e,bevelEnabled:!1});s.rotateX(-Math.PI/2);let r=new oe(s,pn(n));return r.position.y=i,r.receiveShadow=!0,r}var vf=new oe(new zi(12000,12000).rotateX(-Math.PI/2),pn("#cbd9bd"));vf.receiveShadow=!0;Ue.add(vf);for(let t of Xe.areas||[])Ue.add(Sy(t.polygon,0.06,t.kind==="industrial"?"#e3e6df":"#e9e2d4"));var nh=[],ih=[],$c=22;function by(t,e,n,i,s,r){t.beginPath(),t.moveTo(e+r,n),t.arcTo(e+i,n,e+i,n+s,r),t.arcTo(e+i,n+s,e,n+s,r),t.arcTo(e,n+s,e,n,r),t.arcTo(e,n,e+i,n,r),t.closePath()}function sh(t,{bg:e="rgba(255,255,255,0.94)",color:n="#0f172a",border:i="rgba(15,23,42,0.18)",dot:s=null}={}){let l=$c*3,c=document.createElement("canvas"),h=c.getContext("2d"),d='600 39px system-ui, -apple-system, "Segoe UI", Roboto, sans-serif';h.font='600 39px system-ui, -apple-system, "Segoe UI", Roboto, sans-serif';let u=s?36:0,f=Math.ceil(h.measureText(t).width+48+u);if(c.width=f,c.height=l+6,h.font='600 39px system-ui, -apple-system, "Segoe UI", Roboto, sans-serif',by(h,1,1,f-2,l-2,l/2-1),h.fillStyle=e,h.fill(),h.lineWidth=3,h.strokeStyle=i,h.stroke(),s)h.fillStyle=s,h.beginPath(),h.arc(33,l/2,12,0,Math.PI*2),h.fill();h.fillStyle=n,h.textBaseline="middle",h.fillText(t,24+u,l/2+3);let g=new Fi(c);g.colorSpace=Li,g.minFilter=Ve,g.generateMipmaps=!1;let v=new _r(new Rs({map:g,depthTest:!1,depthWrite:!1,sizeAttenuation:!1,transparent:!0}));return v.center.set(0.5,0),v.renderOrder=20,v.userData.pxW=($c+2)*(c.width/c.height),v.userData.pxH=$c+2,v}function rh(t,e,n={}){let i={sprite:t,priority:e,minDist:n.minDist??1/0,key:n.key};return ih.push(i),Ue.add(t),i}function so(t,e,n,i,s=1e9,r=0.015){let a=[],o=[],l=[],c=0;for(let u=0;u<t.length-1;u++){let[f,g]=t[u],[v,m]=t[u+1],p=Math.hypot(v-f,m-g);if(p<0.000001)continue;let R=(v-f)/p,E=(m-g)/p,x=-E*e/2,T=R*e/2,w=u>0?e/2:0,A=u<t.length-2?e/2:0,_=f-R*w,M=g-E*w,U=v+R*A,C=m+E*A,k=n+u%8*r,q=a.length/3,F=(c-w)/s,V=(c+p+A)/s;for(let[W,O]of[[_+x,M+T],[_-x,M-T],[U+x,C+T],[U-x,C-T]])a.push(W-_i,k,O-xi);o.push(F,1,F,0,V,1,V,0),l.push(q,q+2,q+1,q+1,q+2,q+3),c+=p}let h=new Se;h.setAttribute("position",new te(a,3)),h.setAttribute("uv",new te(o,2)),h.setIndex(l),h.computeVertexNormals();let d=new oe(h,i);return d.renderOrder=5,d}{let t=new Gi({color:"#5bb8ea",roughness:0.25,metalness:0.1});for(let e of Xe.water||[]){let n=so(e.points,e.width+3,0.04,pn("#b9cfa6"),1e9,0),i=so(e.points,e.width,0.09,t,1e9,0);n.receiveShadow=i.receiveShadow=!0,Ue.add(n,i)}}{let t=[],e=new ve;for(let a of Be.edges){let o=Be.nodes[a.a],l=Be.nodes[a.b],c=new Sn(a.len,0.3,bn[a.road].width);e.position.copy(Ne((o.x+l.x)/2,(o.y+l.y)/2,0.15)),e.rotation.set(0,-Math.atan2(l.y-o.y,l.x-o.x),0),e.updateMatrix(),c.applyMatrix4(e.matrix),t.push(c)}for(let a of Be.nodes){if(a.adj.length<2&&a.w<7)continue;let o=new Jn(a.w/2,a.w/2,0.3,14);o.translate(a.x-_i,0.15,a.y-xi),t.push(o)}let n=new oe(rf(t.map((a)=>a.index?a.toNonIndexed():a)),pn("#555b63"));n.receiveShadow=!0,Ue.add(n),t.forEach((a)=>a.dispose());let i=[];for(let a of Be.edges){if(bn[a.road].width<7)continue;let o=Be.nodes[a.a],l=Be.nodes[a.b];for(let c=5;c<a.len-5;c+=9){let h=c/a.len;i.push({x:en(o.x,l.x,h),y:en(o.y,l.y,h),rot:-Math.atan2(l.y-o.y,l.x-o.x)})}}let s=new Ui(new Sn(4,0.04,0.35),new je({color:"#f5f5f0"}),Math.max(1,i.length));i.forEach((a,o)=>{e.position.copy(Ne(a.x,a.y,0.32)),e.rotation.set(0,a.rot,0),e.updateMatrix(),s.setMatrixAt(o,e.matrix)}),s.count=i.length,Ue.add(s);let r=new Map;for(let a of Be.edges){let o=bn[a.road].name;if(!o)continue;if(!r.has(o)||a.len>r.get(o).len)r.set(o,a)}for(let[a,o]of r){let l=Be.nodes[o.a],c=Be.nodes[o.b],h=sh(a,{bg:"rgba(30,41,59,0.86)",color:"#f8fafc",border:"rgba(255,255,255,0.25)"});h.position.copy(Ne((l.x+c.x)/2,(l.y+c.y)/2,1)),rh(h,15,{minDist:1400})}}function Ey(){let t=document.createElement("canvas");t.width=t.height=64;let e=t.getContext("2d");e.fillStyle="#ffffff",e.fillRect(0,0,64,64),e.fillStyle="rgba(0,0,0,0.10)";for(let i=0;i<64;i+=8)e.fillRect(i,0,3,64);let n=new Fi(t);return n.wrapS=n.wrapT=hr,n.repeat.set(0.125,0.125),n.colorSpace=Li,n.anisotropy=Kn.capabilities.getMaxAnisotropy(),n}var Ty=Ey(),lf={},cf={},ah=new Map,jc=(t)=>t.name||`Building ${t.id.replace(/^b/,"")}`;for(let t of Xe.buildings){let e=Fn[t.type]||Fn.shed;lf[t.type]??=new Gi({color:e.roof,map:t.type==="house"?null:Ty,roughness:0.8}),cf[t.type]??=new Gi({color:e.wall,roughness:0.9});let n=en(e.height[0],e.height[1],mi(t.id)),i=new Cs(yf(t.poly),{depth:n,bevelEnabled:!1});i.rotateX(-Math.PI/2);let s=new oe(i,[lf[t.type],cf[t.type]]);if(s.castShadow=s.receiveShadow=!0,s.userData.ref={kind:"building",id:t.id},Ue.add(s),t.type!=="house")nh.push(s);let r=t.poly.reduce((l,c)=>l+c[0],0)/t.poly.length,a=t.poly.reduce((l,c)=>l+c[1],0)/t.poly.length,o={b:t,t:e,mesh:s,height:n,center:[r,a],area:dy(t.poly)};if(t.name){let l=sh(t.name,{dot:e.roof});l.position.copy(Ne(r,a,n+2)),o.label=rh(l,45,{minDist:2000,key:`building:${t.id}`})}ah.set(t.id,o)}function wy(t,e=4.6){let n=document.createElement("canvas");n.width=n.height=96;let i=n.getContext("2d");i.fillStyle="#fff",i.font="bold 60px system-ui, sans-serif",i.textAlign="center",i.textBaseline="middle",i.fillText(t,48,54);let s=new Fi(n);s.colorSpace=Li;let r=new _r(new Rs({map:s,depthTest:!1,transparent:!0}));return r.scale.set(e,e,1),r.renderOrder=30,r}function oh(t,e){let n=new Je,i=new Je,s=new oe(new vr(1.6,7,16).rotateX(Math.PI),pn(t,{roughness:0.4}));s.position.y=3.5;let r=new oe(new Ps(3,24,16),pn(t,{roughness:0.35}));if(r.position.y=8.5,r.castShadow=!0,i.add(s,r),e){let o=wy(e);o.position.y=8.5,i.add(o)}let a=new oe(new br(2.2,3.4,32).rotateX(-Math.PI/2),new je({color:t,transparent:!0,opacity:0.55,depthWrite:!1}));return a.position.y=0.6,n.add(i,a),n.userData.head=i,n.userData.ring=a,Ue.add(n),n}var lh=[],Pr={wings:"#dc2626",company:"#2563eb",landmark:"#9333ea"},Mf=new Map;for(let t of Xe.pois||[]){let e=oh(Pr[t.kind]||"#475569",t.kind==="wings"?"W":"");e.position.copy(Ne(t.at[0],t.at[1])),e.traverse((i)=>{if(i.isMesh)i.userData.ref={kind:"poi",id:t.id},nh.push(i)}),lh.push(e);let n=sh(t.name,{bg:t.kind==="wings"?"rgba(220,38,38,0.95)":"rgba(255,255,255,0.95)",color:t.kind==="wings"?"#fff":"#0f172a",dot:t.kind==="wings"?null:Pr[t.kind]});n.position.copy(Ne(t.at[0],t.at[1],14)),e.userData.label=n,rh(n,t.kind==="wings"?90:60,{key:`poi:${t.id}`}),Mf.set(t.id,t)}{let t=[],e=Xe.buildings.map((o)=>{let l=o.poly.map((h)=>h[0]),c=o.poly.map((h)=>h[1]);return[Math.min(...l)-4,Math.min(...c)-4,Math.max(...l)+4,Math.max(...c)+4]}),n=(o,l)=>(Xe.water||[]).some((c)=>c.points.some((h,d)=>{if(d===0)return!1;let[u,f]=c.points[d-1],[g,v]=h,m=g-u,p=v-f,R=$i(((o-u)*m+(l-f)*p)/(m*m+p*p||1),0,1);return Math.hypot(o-u-R*m,l-f-R*p)<c.width/2+4}));for(let o=co;o<uo;o+=15)for(let l=ho;l<fo;l+=15){if(mi(`k${o},${l}`)<0.8)continue;let c=o+(mi(`tx${o},${l}`)-0.5)*10,h=l+(mi(`ty${o},${l}`)-0.5)*10;if(e.some((u)=>c>u[0]&&c<u[2]&&h>u[1]&&h<u[3]))continue;let d=eh(c,h);if(d&&d.d<bn[d.e.road].width/2+3)continue;if(n(c,h))continue;t.push([c,h])}let i=new Ui(new Jn(0.35,0.5,3,5),pn("#7c5a3a"),t.length),s=new Ui(new Sr(3,0),pn("#4f9a52",{flatShading:!0}),t.length);s.castShadow=!0;let r=new ve,a=new Zt;t.forEach(([o,l],c)=>{let h=0.8+mi(`s${o}${l}`)*0.7;r.position.copy(Ne(o,l,1.5*h)),r.scale.setScalar(h),r.rotation.set(0,mi(`r${o}`)*6,0),r.updateMatrix(),i.setMatrixAt(c,r.matrix),r.position.y=4.6*h,r.updateMatrix(),s.setMatrixAt(c,r.matrix),s.setColorAt(c,a.set("#4f9a52").offsetHSL((mi(`c${o}${l}`)-0.5)*0.05,0,(mi(`l${l}`)-0.5)*0.12))}),Ue.add(i,s)}var pi=null;function hf(t){if(pi)Ue.remove(pi),pi.geometry.dispose(),pi=null;if(!t)return;pi=new Ua(new za(t.mesh.geometry),new yr({color:"#f59e0b"})),pi.scale.setScalar(1),pi.renderOrder=6,Ue.add(pi)}var po=oh("#16a34a","A"),Ir=oh("#dc2626","B");po.visible=Ir.visible=!1;lh.push(po,Ir);function Ay(){let t=document.createElement("canvas");t.width=128,t.height=64;let e=t.getContext("2d");e.fillStyle="#1a73e8",e.fillRect(0,0,128,64),e.strokeStyle="#ffffff",e.lineWidth=9,e.lineCap="round",e.lineJoin="round",e.beginPath(),e.moveTo(48,16),e.lineTo(76,32),e.lineTo(48,48),e.stroke();let n=new Fi(t);return n.wrapS=hr,n.colorSpace=Li,n.anisotropy=Kn.capabilities.getMaxAnisotropy(),n}var Sf=Ay(),Ry=new je({map:Sf}),Cy=new je({color:"#0b3d91"}),Py=new je({color:"#1a73e8"}),Yi=new Je;Ue.add(Yi);function uf(t,e){let n=Math.hypot(e[0]-t[0],e[1]-t[1]),i=Math.max(1,Math.floor(n/3)),s=new Ui(new Jn(0.8,0.8,0.2,10),Py,i+1),r=new ve;for(let a=0;a<=i;a++)r.position.copy(Ne(en(t[0],e[0],a/i),en(t[1],e[1],a/i),0.8)),r.updateMatrix(),s.setMatrixAt(a,r.matrix);return s}function bf(){for(let t of[...Yi.children])Yi.remove(t),t.geometry?.dispose()}function Iy(){let t=new Je,e=new oe(new Sn(5,1.6,2.4),pn("#f59e0b",{roughness:0.5}));e.position.y=1.2,e.castShadow=!0;let n=new oe(new Sn(2.6,1.2,2.1),pn("#1e293b",{roughness:0.3}));return n.position.set(-0.3,2.5,0),t.add(e,n),t}function Ly(){let t=new Je,e=new oe(new Jn(0.5,0.6,1.8,12),pn("#2563eb"));e.position.y=1.2,e.castShadow=!0;let n=new oe(new Ps(0.45,16,12),pn("#fcd34d"));return n.position.y=2.5,t.add(e,n),t}var ro=Iy(),ao=Ly();ro.visible=ao.visible=!1;Ue.add(ro,ao);var tn=new Je;{let t=new oe(new Oi(1,48).rotateX(-Math.PI/2),new je({color:"#1a73e8",transparent:!0,opacity:0.16,depthWrite:!1}));t.position.y=0.5;let e=new oe(new Oi(4,32).rotateX(-Math.PI/2),new je({color:"#ffffff"}));e.position.y=0.7;let n=new oe(new Oi(3,32).rotateX(-Math.PI/2),new je({color:"#1a73e8"}));n.position.y=0.75;let i=new oe(new Er(new Bi([new K(0,0),new K(-5,13),new K(5,13)])).rotateX(-Math.PI/2),new je({color:"#1a73e8",transparent:!0,opacity:0.35,depthWrite:!1}));i.position.y=0.6;let s=new Je;s.add(e,n,i),tn.add(t,s),tn.userData={halo:t,puck:s,cone:i};for(let r of[t,e,n,i])r.renderOrder=8;tn.visible=!1,Ue.add(tn)}var Re=null;function On({target:t,distance:e,phi:n,theta:i,dur:s=0.9,done:r}){let a=new di().setFromVector3(De.position.clone().sub(ge.target)),o={r:e??a.radius,phi:n??a.phi,theta:i??a.theta},l=o.theta-a.theta;l=((l+Math.PI)%(Math.PI*2)+Math.PI*2)%(Math.PI*2)-Math.PI,o.theta=a.theta+l,Re={t:0,dur:s,t0:ge.target.clone(),t1:(t||ge.target).clone(),s0:{r:a.radius,phi:a.phi,theta:a.theta},s1:o,done:r}}function Dy(t){if(!Re)return;Re.t=Math.min(1,Re.t+t/Re.dur);let e=cy(Re.t);if(ge.target.lerpVectors(Re.t0,Re.t1,e),De.position.setFromSpherical(new di(en(Re.s0.r,Re.s1.r,e),en(Re.s0.phi,Re.s1.phi,e),en(Re.s0.theta,Re.s1.theta,e))).add(ge.target),De.lookAt(ge.target),Re.t>=1){let n=Re.done;Re=null,n&&n()}}var mo=1;function Ef(t,e,n,i,s={}){let r=s.pad??1.25,a=Math.max(40,(n-t)/2),o=Math.max(40,(i-e)/2),l=Di.degToRad(De.fov)/2,c=Math.atan(Math.tan(l)*mo),h=s.phi??(st.view3d?0.72:0.02),d=$i(Math.max(a/Math.tan(c),o*(0.75+0.25*Math.cos(h))/Math.tan(l))*r,ge.minDistance,ge.maxDistance);On({target:Ne((t+n)/2,(e+i)/2),distance:d,phi:h,theta:s.theta??0,dur:s.dur})}var st={from:null,to:null,mode:"drive",pick:null,selected:null,route:null,view3d:!0,labels:!0,preview:null},Gt={watchId:null,pos:null,acc:null,heading:null,follow:!1,lastRouteAt:0,lastRoutePos:null,warned:!1},Ny=[...(Xe.pois||[]).map((t)=>({ref:{kind:"poi",id:t.id},name:t.name,sub:t.kind==="wings"?"Wings site":t.kind==="landmark"?"Landmark":"Company",color:Pr[t.kind],search:`${t.name} ${t.kind}`.toLowerCase(),rank:t.kind==="wings"?0:1})),...Xe.buildings.filter((t)=>t.name).map((t)=>({ref:{kind:"building",id:t.id},name:t.name,sub:"Company",color:Fn.company.roof,search:`${t.name} company`.toLowerCase(),rank:1}))].sort((t,e)=>t.rank-e.rank||t.name.localeCompare(e.name)),df=Xe.buildings.filter((t)=>!t.name&&t.type!=="house").map((t)=>({ref:{kind:"building",id:t.id},name:jc(t),sub:Fn[t.type].label,color:Fn[t.type].roof,search:`${jc(t)} ${t.id} ${Fn[t.type].label}`.toLowerCase(),rank:2})),Lr=(t)=>t.kind==="point"?`pt:${t.x.toFixed(1)},${t.y.toFixed(1)}`:t.kind==="gps"?"gps":`${t.kind}:${t.id}`;function ff(t){if(!t)return null;if(t==="gps")return{kind:"gps"};let e=t.indexOf(":"),n=t.slice(0,e),i=t.slice(e+1);if(n==="pt"){let[s,r]=i.split(",").map(Number);return isFinite(s)&&isFinite(r)?{kind:"point",x:s,y:r}:null}return Os({kind:n,id:i})?{kind:n,id:i}:null}function Os(t){if(!t)return null;if(t.kind==="building"){let i=ah.get(t.id);if(!i)return null;return{name:jc(i.b),sub:`${i.b.name?"Company":i.t.label} · ${fy(i.area)}`,x:i.center[0],y:i.center[1],poly:i.b.poly,color:i.t.roof}}if(t.kind==="poi"){let i=Mf.get(t.id);if(!i)return null;let s=i.lat?`${i.lat.toFixed(6)}, ${i.lon.toFixed(6)}`:i.kind==="landmark"?"Landmark":"Company";return{name:i.name,sub:s,x:i.at[0],y:i.at[1],color:Pr[i.kind]}}if(t.kind==="gps")return{name:"Your location",sub:Gt.pos?`GPS ± ${Math.round(Gt.acc)} m`:"Waiting for GPS…",x:Gt.pos?.[0],y:Gt.pos?.[1],color:"#1a73e8",pending:!Gt.pos};let e=eh(t.x,t.y);return{name:`Dropped pin${e&&e.d<12&&bn[e.e.road].name?` on ${bn[e.e.road].name}`:""}`,sub:"Map location",x:t.x,y:t.y,color:"#64748b"}}function Qc(t){let e=Os(t);if(!e||e.pending)return null;let n=eh(e.x,e.y,st.mode),i=[e.x,e.y];if(e.poly){let s=py(n.x,n.y,e.poly);i=[s.x,s.y]}return{info:e,pr:n,door:i}}function zs({live:t=!1}={}){if(!t)_o();if(bf(),st.route=null,!st.from||!st.to)return qi();if(Lr(st.from)===Lr(st.to))return st.route={msg:"Start and destination are the same"},qi();let e=Qc(st.from),n=Qc(st.to);if(!e||!n)return st.route={msg:"Waiting for your GPS position…"},qi();let i=xy(e.pr,n.pr,st.mode);if(!i)return st.route={msg:"No route found"},qi();Yi.add(so(i.points,6.4,0.42,Cy)),Yi.add(so(i.points,4.6,0.5,Ry,9));let s=Math.hypot(e.door[0]-e.pr.x,e.door[1]-e.pr.y),r=Math.hypot(n.door[0]-n.pr.x,n.door[1]-n.pr.y);if(s>1)Yi.add(uf(e.door,[e.pr.x,e.pr.y]));if(r>1)Yi.add(uf([n.pr.x,n.pr.y],n.door));let a=[e.door,...i.points,n.door].filter((l,c,h)=>c===0||Math.hypot(l[0]-h[c-1][0],l[1]-h[c-1][1])>0.01),o=[...new Set(i.roads.map((l)=>bn[l].name).filter(Boolean))];if(st.route={path:i,full:a,length:i.length+s+r,steps:My(i,e.info.name,n.info.name),via:o,doors:[e.door,n.door]},qi(),!t)go(),dh()}function go(){if(!st.route?.full)return;let t=st.route.full.map((n)=>n[0]),e=st.route.full.map((n)=>n[1]);Ef(Math.min(...t),Math.min(...e),Math.max(...t),Math.max(...e),{pad:mo<1?1.5:1.3})}function Uy(){[[po,st.from,0],[Ir,st.to,1]].forEach(([t,e,n])=>{if(!e||e.kind==="gps"){t.visible=!1;return}let i=st.route?.doors?st.route.doors[n]:Qc(e)?.door;if(!i){t.visible=!1;return}t.position.copy(Ne(i[0],i[1],0)),t.visible=!0})}function Fy(){let t=st.route;if(!t?.full)return;let e=t.full,n=[0];for(let s=1;s<e.length;s++)n.push(n[s-1]+Math.hypot(e[s][0]-e[s-1][0],e[s][1]-e[s-1][1]));let i=st.mode==="walk"?ao:ro;ro.visible=ao.visible=!1,i.visible=!0,ks(!1),st.preview={pts:e,cum:n,s:0,total:n[n.length-1],mover:i,speed:st.mode==="walk"?25:70},On({target:Ne(e[0][0],e[0][1]),distance:160,phi:0.85,dur:0.8}),mt("#previewBtn").textContent="Stop",mt("#previewBtn").classList.add("active")}function _o(){if(!st.preview)return;st.preview.mover.visible=!1,st.preview=null,mt("#previewBtn").textContent="Preview",mt("#previewBtn").classList.remove("active")}var Jc=new P;function Oy(t){let e=st.preview;if(!e||Re)return;e.s=Math.min(e.total,e.s+e.speed*t);let n=1;while(n<e.cum.length-1&&e.cum[n]<e.s)n++;let i=e.pts[n-1],s=e.pts[n],r=(e.s-e.cum[n-1])/(e.cum[n]-e.cum[n-1]||1);e.mover.position.copy(Ne(en(i[0],s[0],r),en(i[1],s[1],r),0.35));let a=-Math.atan2(s[1]-i[1],s[0]-i[0])-e.mover.rotation.y;if(a=Math.atan2(Math.sin(a),Math.cos(a)),e.mover.rotation.y+=a*Math.min(1,t*10),Jc.copy(e.mover.position).setY(0).sub(ge.target).multiplyScalar(Math.min(1,t*4)),ge.target.add(Jc),De.position.add(Jc),e.s>=e.total){if(e.doneAt??=performance.now(),performance.now()-e.doneAt>1200)_o(),go()}}function Ki(t,{fly:e=!1}={}){st.selected=t;let n=mt("#infoCard");if(hf(null),!t){n.hidden=!0,Bs();return}let i=Os(t);if(t.kind==="building")hf(ah.get(t.id));if(mt("#infoSwatch").style.background=i.color,mt("#infoName").textContent=i.name,mt("#infoSub").textContent=i.sub,n.hidden=!1,Bs(),e&&i.x!=null)On({target:Ne(i.x,i.y),distance:220,dur:0.8})}var Tf={start:'<circle cx="12" cy="12" r="6" fill="#16a34a"/>',end:'<path d="M12 2a7 7 0 0 0-7 7c0 5 7 13 7 13s7-8 7-13a7 7 0 0 0-7-7z" fill="#dc2626"/><circle cx="12" cy="9" r="2.5" fill="#fff"/>',straight:'<path d="M12 20V5M6 11l6-6 6 6" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linecap="round" stroke-linejoin="round"/>',right:'<path d="M7 20v-7a4 4 0 0 1 4-4h8M15 5l4 4-4 4" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linecap="round" stroke-linejoin="round"/>',left:'<path d="M17 20v-7a4 4 0 0 0-4-4H5M9 5L5 9l4 4" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linecap="round" stroke-linejoin="round"/>',uturn:'<path d="M8 20V9a4 4 0 0 1 8 0v6M12 12l4 4 4-4" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linecap="round" stroke-linejoin="round"/>'};function pf(t){let e=st[t],n=t==="from"?mt("#fromBtn"):mt("#toBtn"),i=Os(e);n.textContent=i?i.name:t==="from"?"Choose start":"Choose destination",n.classList.toggle("empty",!i),n.classList.toggle("gps",e?.kind==="gps")}function qi(){pf("from"),pf("to"),Uy();let t=st.route;if(mt("#steps").innerHTML="",mt("#hint").hidden=!!t,mt("#summary").hidden=!t,wf(),!t){mt("#hint").textContent=!st.from&&!st.to?"Pick a start and destination, or tap a building on the map.":!st.from?"Now choose where you are starting from — or use your location.":"Now choose your destination.",mt("#sheet").classList.remove("has-route");return}if(t.msg){mt("#sumTime").textContent=t.msg,mt("#sumMeta").textContent="",mt("#previewBtn").hidden=mt("#stepsToggle").hidden=!0;return}mt("#previewBtn").hidden=mt("#stepsToggle").hidden=!1,mt("#sheet").classList.add("has-route"),mt("#sumTime").textContent=uy(t.length,st.mode),mt("#sumMeta").textContent=`${Fs(t.length)}${t.via.length?` · via ${t.via.slice(0,2).join(", ")}${t.via.length>2?"…":""}`:""}`;for(let e of t.steps){let n=document.createElement("li");if(n.innerHTML=`<svg viewBox="0 0 24 24" aria-hidden="true">${Tf[e.icon]}</svg><span class="txt"></span><span class="d"></span>`,n.querySelector(".txt").textContent=e.text,n.querySelector(".d").textContent=e.dist,e.at)n.tabIndex=0,n.addEventListener("click",()=>{ks(!1),On({target:Ne(e.at[0],e.at[1]),distance:120,dur:0.7})});mt("#steps").appendChild(n)}}function xo(t,e){if(st[t]=e,st.pick=null,mt("#pickBanner").hidden=!0,document.querySelectorAll(".pick").forEach((n)=>n.classList.remove("active")),e?.kind==="gps")Dr({follow:!1});zs(),Bs()}function wf(){let t=mt("#navBanner"),e=st.route;if(st.from?.kind!=="gps"||!e?.steps||!Gt.pos){t.hidden=!0;return}let n=Math.hypot(Gt.pos[0]-e.doors[1][0],Gt.pos[1]-e.doors[1][1]),i,s,r;if(n<20)i="end",s=`You have arrived at ${Os(st.to).name}`,r="";else{let a=e.steps[1],o=e.steps[2];if(!o||o.icon==="end")i="end",s=`${Os(st.to).name} ahead`,r=Fs(e.length);else i=o.icon,s=o.text,r=`in ${Fs(a.len+Math.hypot(e.doors[0][0]-e.path.points[0][0],e.doors[0][1]-e.path.points[0][1]))}`}mt("#navIcon").innerHTML=Tf[i],mt("#navText").textContent=s,mt("#navDist").textContent=r,t.hidden=!1}var mf=0;function gi(t,e=4500){let n=mt("#toast");if(n.textContent=t,n.hidden=!1,clearTimeout(mf),e)mf=setTimeout(()=>n.hidden=!0,e)}function ks(t){Gt.follow=t&&Gt.watchId!=null,mt("#locateBtn").classList.toggle("follow",Gt.follow)}function ch(){let t=mt("#locateBtn");t.classList.toggle("on",Gt.watchId!=null),t.classList.toggle("searching",Gt.watchId!=null&&!Gt.pos),t.setAttribute("aria-pressed",String(Gt.watchId!=null))}function Dr({follow:t=!0}={}){if(!("geolocation"in navigator)){gi("This browser has no location support.");return}if(!window.isSecureContext){gi("Location needs a secure (https) page. Open the GitHub Pages link instead.");return}if(Gt.watchId==null)Gt.warned=!1,Gt.watchId=navigator.geolocation.watchPosition(By,zy,{enableHighAccuracy:!0,maximumAge:1000,timeout:30000}),gi("Finding your location… GPS works without internet; outdoors is fastest.",6000);if(ks(t),ch(),t&&Gt.pos)On({target:Ne(Gt.pos[0],Gt.pos[1]),distance:Math.min(De.position.distanceTo(ge.target),300),dur:0.7})}function Af(){if(Gt.watchId!=null)navigator.geolocation.clearWatch(Gt.watchId);if(Gt.watchId=null,Gt.pos=null,tn.visible=!1,ks(!1),ch(),st.from?.kind==="gps"||st.to?.kind==="gps")zs({live:!0})}function By(t){let[e,n]=hy(t.coords.latitude,t.coords.longitude),i=!Gt.pos;if(Gt.pos=[e,n],Gt.acc=t.coords.accuracy||30,Gt.heading=t.coords.heading!=null&&!isNaN(t.coords.heading)&&(t.coords.speed??1)>0.5?t.coords.heading:Gt.heading,ch(),e<co-400||e>uo+400||n<ho-400||n>fo+400){if(tn.visible=!1,!Gt.warned){let r=Math.hypot(e-_i,n-xi);gi(`You're about ${Fs(r)} from the map area. Your dot will appear when you get closer.`,7000),Gt.warned=!0}}else{if(tn.visible=!0,tn.position.copy(Ne(e,n,0)),tn.userData.halo.scale.setScalar(Math.max(4,Gt.acc)),tn.userData.cone.visible=Gt.heading!=null,Gt.heading!=null)tn.userData.puck.rotation.y=-Di.degToRad(Gt.heading);if(i)gi(`Location found (± ${Math.round(Gt.acc)} m)`,2500);if(Gt.follow&&!st.preview){if(i)On({target:Ne(e,n),distance:260,dur:0.9});else if(!Re)On({target:Ne(e,n),dur:0.6})}}if(st.from?.kind==="gps"||st.to?.kind==="gps"){let r=performance.now(),a=Gt.lastRoutePos?Math.hypot(e-Gt.lastRoutePos[0],n-Gt.lastRoutePos[1]):1/0;if(i||a>6&&r-Gt.lastRouteAt>1500){Gt.lastRouteAt=r,Gt.lastRoutePos=[e,n];let o=!!st.route?.full;zs({live:o})}}wf()}function zy(t){if(t.code===1)gi("Location permission was denied. Allow location for this site in your browser settings, then try again.",8000),Af();else if(t.code===2)gi("No GPS signal yet. Move outdoors or away from tall buildings.",6000);else if(t.code===3&&!Gt.pos)gi("Still searching for GPS… this can take a minute without mobile data.",6000)}var oo=null;function hh(t){oo=t,mt("#pickerTitle").textContent=t==="from"?"Start from":t==="to"?"Go to":"Find a place",mt("#picker").hidden=!1,mt("#pickerInput").value="",Rf(""),setTimeout(()=>mt("#pickerInput").focus(),50)}function uh(){mt("#picker").hidden=!0,oo=null}function Rf(t){let e=mt("#pickerList");e.innerHTML="";let n=t.trim().toLowerCase(),i=(r)=>!n||n.split(/\s+/).every((a)=>r.search.includes(a)),s=Ny.filter(i);if(n)s=s.concat(df.filter(i).slice(0,40));if(oo!=="search"&&(!n||"your location my gps current".includes(n)))s=[{ref:{kind:"gps"},name:"Your location",sub:"Use GPS (works offline)",color:"#1a73e8",gps:!0},...s];if(!s.length){e.innerHTML='<li class="empty">No matching places. Try a building number, e.g. 12</li>';return}for(let r of s){let a=document.createElement("li"),o=document.createElement("button");if(o.innerHTML='<span class="sw"></span><span class="nm"><b></b><small></small></span>',o.querySelector(".sw").style.background=r.color,r.gps)o.querySelector(".sw").classList.add("gps-sw");o.querySelector("b").textContent=r.name,o.querySelector("small").textContent=r.sub,o.addEventListener("click",()=>{let l=oo;if(uh(),l==="search")Ki(r.ref,{fly:!0});else xo(l,r.ref)}),a.appendChild(o),e.appendChild(a)}if(!n){let r=document.createElement("li");r.className="empty",r.textContent=`Unnamed buildings: type a number (1–${df.length}) or tap one on the map.`,e.appendChild(r)}}function dh(){let t=[];if(st.from)t.push(`from=${encodeURIComponent(Lr(st.from))}`);if(st.to)t.push(`to=${encodeURIComponent(Lr(st.to))}`);if(st.mode!=="drive")t.push(`mode=${st.mode}`);history.replaceState(null,"",t.length?`#${t.join("&")}`:location.pathname+location.search)}function ky(){let t=new URLSearchParams(location.hash.slice(1));st.from=ff(t.get("from")),st.to=ff(t.get("to")),st.mode=t.get("mode")==="walk"?"walk":"drive"}var th=[];function Bs(){let t=new Set([st.selected,st.from,st.to].filter(Boolean).map(Lr));th=ih.slice().sort((e,n)=>(t.has(n.key)?1000:n.priority)-(t.has(e.key)?1000:e.priority)),th.forEach((e)=>e.boost=t.has(e.key))}var Us=new P;function Gy(){let{clientWidth:t,clientHeight:e}=Ji,n=De.position.distanceTo(ge.target),i=[];for(let s of th){let r=s.sprite;if(!st.labels&&!s.boost||n>s.minDist&&!s.boost){r.visible=!1;continue}if(Us.copy(r.position).project(De),Us.z>1||Math.abs(Us.x)>1.2||Math.abs(Us.y)>1.2){r.visible=!1;continue}let a=(Us.x+1)/2*t,o=(1-Us.y)/2*e,l={x0:a-r.userData.pxW/2-2,x1:a+r.userData.pxW/2+2,y0:o-r.userData.pxH-2,y1:o+2};if(!s.boost&&i.some((c)=>l.x0<c.x1&&l.x1>c.x0&&l.y0<c.y1&&l.y1>c.y0)){r.visible=!1;continue}i.push(l),r.visible=!0}}var Hy=matchMedia("(max-width: 819px)");function fh(){let{innerWidth:t,innerHeight:e}=window;Kn.setSize(t,e,!1);let n=0,i=0;if(Hy.matches)n=Math.min(mt("#sheet").offsetHeight,e*0.5);else i=Math.min(mt("#sheet").offsetWidth+16,t*0.4);let s=Math.max(100,e-n),r=Math.max(100,t-i);if(mo=r/s,De.aspect=r/s,n>0||i>0)De.setViewOffset(r,s,-i,0,t,e);else De.clearViewOffset();De.updateProjectionMatrix();let a=2*Math.tan(Di.degToRad(De.fov)/2)/s;for(let o of ih)o.sprite.scale.set(o.sprite.userData.pxW*a,o.sprite.userData.pxH*a,1);document.documentElement.style.setProperty("--sheet-h",`${mt("#sheet").offsetHeight}px`)}window.addEventListener("resize",fh);new ResizeObserver(fh).observe(mt("#sheet"));var Kc=new Is,Vy=new Ye(new P(0,1,0),0),Un=null,Zi=new Set;Ji.addEventListener("pointerdown",(t)=>{Zi.add(t.pointerId),Re=null,ks(!1),Un=Zi.size===1?{x:t.clientX,y:t.clientY,t:performance.now(),multi:!1}:{...Un||{},multi:!0}});Ji.addEventListener("pointercancel",(t)=>{if(Zi.delete(t.pointerId),!Zi.size)Un=null});Ji.addEventListener("pointerup",(t)=>{if(Zi.delete(t.pointerId),!Un||Un.multi||Zi.size){if(!Zi.size)Un=null;return}let e=Math.hypot(t.clientX-Un.x,t.clientY-Un.y),n=performance.now()-Un.t<600;if(Un=null,e>8||!n)return;Wy(t.clientX,t.clientY)});function Wy(t,e){let n=Ji.getBoundingClientRect();Kc.setFromCamera(new K((t-n.left)/n.width*2-1,-((e-n.top)/n.height)*2+1),De);let s=Kc.intersectObjects(nh,!1)[0]?.object.userData.ref||null;if(!s){let r=new P;if(Kc.ray.intersectPlane(Vy,r)){let a=r.x+_i,o=r.z+xi;if(a>co&&a<uo&&o>ho&&o<fo)s={kind:"point",x:a,y:o}}}if(st.pick){if(s)xo(st.pick,s);return}Ki(s)}mt("#fromBtn").addEventListener("click",()=>hh("from"));mt("#toBtn").addEventListener("click",()=>hh("to"));mt("#searchBtn").addEventListener("click",()=>hh("search"));mt("#pickerClose").addEventListener("click",uh);mt("#pickerInput").addEventListener("input",(t)=>Rf(t.target.value));document.addEventListener("keydown",(t)=>{if(t.key!=="Escape")return;if(!mt("#picker").hidden)uh();else if(st.pick)ph();else Ki(null)});document.querySelectorAll(".pick").forEach((t)=>t.addEventListener("click",()=>{let e=t.dataset.pick;if(st.pick===e)return ph();st.pick=e,document.querySelectorAll(".pick").forEach((n)=>n.classList.toggle("active",n===t)),mt("#pickText").textContent=e==="from"?"Tap the map to set your start":"Tap the map to set your destination",mt("#pickBanner").hidden=!1,Ki(null)}));function ph(){st.pick=null,mt("#pickBanner").hidden=!0,document.querySelectorAll(".pick").forEach((t)=>t.classList.remove("active"))}mt("#pickCancel").addEventListener("click",ph);mt("#swapBtn").addEventListener("click",()=>{[st.from,st.to]=[st.to,st.from],zs(),Bs()});document.querySelectorAll(".mode").forEach((t)=>t.addEventListener("click",()=>{st.mode=t.dataset.mode,document.querySelectorAll(".mode").forEach((e)=>e.setAttribute("aria-pressed",String(e===t))),zs({live:!0}),dh()}));mt("#clearBtn").addEventListener("click",()=>{st.from=st.to=null,_o(),bf(),st.route=null,qi(),dh(),Bs()});mt("#previewBtn").addEventListener("click",()=>st.preview?(_o(),go()):Fy());mt("#stepsToggle").addEventListener("click",()=>lo());mt("#grabber").addEventListener("click",()=>lo());function lo(t){let e=mt("#sheet"),n=t??!e.classList.contains("expanded");e.classList.toggle("expanded",n),mt("#stepsToggle").textContent=n?"Hide steps":"Steps"}{let t=null,e=mt("#grabZone");e.addEventListener("touchstart",(n)=>{t=n.touches[0].clientY},{passive:!0}),e.addEventListener("touchend",(n)=>{if(t==null)return;let i=n.changedTouches[0].clientY-t;if(i<-30)lo(!0);else if(i>30)lo(!1);t=null})}mt("#infoClose").addEventListener("click",()=>Ki(null));mt("#infoFrom").addEventListener("click",()=>{let t=st.selected;Ki(null),xo("from",t)});mt("#infoTo").addEventListener("click",()=>{let t=st.selected;if(Ki(null),!st.from)st.from={kind:"gps"};if(xo("to",t),st.from.kind==="gps")Dr({follow:!1})});mt("#viewBtn").addEventListener("click",()=>{if(st.view3d=!st.view3d,mt("#viewBtn").textContent=st.view3d?"2D":"3D",mt("#viewBtn").setAttribute("aria-label",st.view3d?"Switch to top-down 2D view":"Switch to tilted 3D view"),st.view3d)ge.maxPolarAngle=1.25,On({phi:0.75});else On({phi:0.02,done:()=>{ge.maxPolarAngle=0.02}})});mt("#labelsBtn").addEventListener("click",()=>{st.labels=!st.labels,mt("#labelsBtn").setAttribute("aria-pressed",String(st.labels))});mt("#fitBtn").addEventListener("click",()=>{ks(!1),st.route?.full?go():Cf()});mt("#compassBtn").addEventListener("click",()=>On({theta:0}));mt("#locateBtn").addEventListener("click",()=>{if(Gt.watchId==null)Dr({follow:!0});else if(!Gt.follow)Dr({follow:!0});else Af()});function Cf(){Ef(co,ho,uo,fo,{pad:mo<1?1.2:1.02})}{let t=mt("#legend"),e=[["Wings site",Pr.wings],["Company",Fn.company.roof],["Factory",Fn.factory.roof],["Warehouse",Fn.warehouse.roof],["Houses",Fn.house.roof],["Canal","#7cc4ea"]];for(let[n,i]of e){let s=document.createElement("li");s.innerHTML='<span class="sw"></span><span></span>',s.firstChild.style.background=i,s.lastChild.textContent=n,t.appendChild(s)}}var gf=new $a,_f=0,Xy=mt("#needle");Kn.setAnimationLoop(()=>{let t=Math.min(gf.getDelta(),0.1),e=gf.elapsedTime;if(Dy(t),Oy(t),!Re)ge.update();Sf.offset.x-=t*1.4;let n=De.position.distanceTo(ge.target),i=$i(n/260,0.8,7);for(let r of lh){if(!r.visible)continue;if(r.scale.setScalar(i),r===po||r===Ir){r.userData.head.position.y=Math.sin(e*3+(r===Ir?1.5:0))*0.6+0.6;let a=1+e*0.8%1*1.2;r.userData.ring.scale.set(a,1,a),r.userData.ring.material.opacity=0.6*(1-e*0.8%1)}if(r.userData.label)r.userData.label.position.y=13*i}if(tn.visible)tn.userData.puck.scale.setScalar($i(n/250,0.6,7)),tn.userData.halo.material.opacity=0.12+Math.sin(e*3)*0.04;let s=De.position.clone().sub(ge.target);if(Xy.style.transform=`rotate(${Math.atan2(s.x,s.z)}rad)`,e-_f>0.12)Gy(),_f=e;Kn.render(Ue,De)});ky();document.querySelectorAll(".mode").forEach((t)=>t.setAttribute("aria-pressed",String(t.dataset.mode===st.mode)));fh();Bs();qi();ge.target.copy(Ne(_i,xi));De.position.copy(ge.target).add(new P(0,2000,1600));jn.target.position.copy(ge.target);if(st.from?.kind==="gps"||st.to?.kind==="gps")Dr({follow:!1});if(st.from&&st.to)zs();else Cf();mt("#loading").remove();if("serviceWorker"in navigator&&location.protocol.startsWith("http"))navigator.serviceWorker.register("sw.js").catch(()=>{});})();
