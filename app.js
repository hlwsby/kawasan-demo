(()=>{var $h="185",on={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},_n={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Jh=0,Vo=1,Kh=2;var js=1,oa=2,hs=3,us=0,je=1,Tn=2,wn=0,Qs=1,Wo=2,Xo=3,qo=4,jh=5;var ds=100,Qh=101,tu=102,eu=103,nu=104,iu=200,su=201,ru=202,au=203,ou=204,lu=205,cu=206,hu=207,uu=208,du=209,fu=210,pu=211,mu=212,gu=213,_u=214,xu=0,yu=1,vu=2,Yo=3,Mu=4,Su=5,bu=6,Eu=7,Tu=0,wu=1,Au=2,xn=0,Zo=1,$o=2,Jo=3,Ko=4,jo=5,Qo=6,tl=7;var fs=301,vi=302,la=303,ca=304,tr=306,ha=1000,ua=1001,Ru=1002,ni=1003,Cu=1004;var er=1005;var We=1006,da=1007;var Mi=1008;var yn=1009,Pu=1010,Iu=1011,nr=1012,el=1013,ii=1014,kn=1015,Gn=1016,nl=1017,il=1018,ps=1020,Lu=35902,Du=35899,Nu=1021,Uu=1022,An=1023,Si=1026,bi=1027,Fu=1028,sl=1029,Ei=1030,rl=1031;var al=1033,fa=33776,pa=33777,ma=33778,ga=33779,ol=35840,ll=35841,cl=35842,hl=35843,ul=36196,dl=37492,fl=37496,pl=37488,ml=37489,_a=37490,gl=37491,_l=37808,xl=37809,yl=37810,vl=37811,Ml=37812,Sl=37813,bl=37814,El=37815,Tl=37816,wl=37817,Al=37818,Rl=37819,Cl=37820,Pl=37821,Il=36492,Ll=36494,Dl=36495,Nl=36283,Ul=36284,xa=36285,Fl=36286;var Ol=0,Ou=1,Ti="",ms="srgb",Bl="srgb-linear",zl="linear",pe="srgb";var Bu=512,zu=513,ku=514,ya=515,Gu=516,Hu=517,va=518,Vu=519;var kl="300 es",Gl=2000;function gf(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function _f(t){return ArrayBuffer.isView(t)&&!(t instanceof DataView)}function qs(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function Wu(){let t=qs("canvas");return t.style.display="block",t}var dh={},os=null;function Ys(...t){let e="THREE."+t.shift();if(os)os("log",e,...t);else console.log(e,...t)}function Xu(t){let e=t[0];if(typeof e==="string"&&e.startsWith("TSL:")){let n=t[1];if(n&&n.isStackTrace)t[0]+=" "+n.getLocation();else t[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return t}function Ut(...t){t=Xu(t);let e="THREE."+t.shift();if(os)os("warn",e,...t);else{let n=t[0];if(n&&n.isStackTrace)console.warn(n.getError(e));else console.warn(e,...t)}}function Bt(...t){t=Xu(t);let e="THREE."+t.shift();if(os)os("error",e,...t);else{let n=t[0];if(n&&n.isStackTrace)console.error(n.getError(e));else console.error(e,...t)}}function xi(...t){let e=t.join(" ");if(e in dh)return;dh[e]=!0,Ut(...t)}function qu(t,e,n){return new Promise(function(i,s){function r(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:s();break;case t.TIMEOUT_EXPIRED:setTimeout(r,n);break;default:i()}}setTimeout(r,n)})}var Yu={[0]:1,[2]:6,[4]:7,[3]:5,[1]:0,[6]:2,[7]:4,[5]:3};class Rn{addEventListener(t,e){if(this._listeners===void 0)this._listeners={};let n=this._listeners;if(n[t]===void 0)n[t]=[];if(n[t].indexOf(e)===-1)n[t].push(e)}hasEventListener(t,e){let n=this._listeners;if(n===void 0)return!1;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){let n=this._listeners;if(n===void 0)return;let i=n[t];if(i!==void 0){let s=i.indexOf(e);if(s!==-1)i.splice(s,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let n=e[t.type];if(n!==void 0){t.target=this;let i=n.slice(0);for(let s=0,r=i.length;s<r;s++)i[s].call(this,t);t.target=null}}}var He=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],fh=1234567,rs=Math.PI/180,ls=180/Math.PI;function En(){let t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(He[t&255]+He[t>>8&255]+He[t>>16&255]+He[t>>24&255]+"-"+He[e&255]+He[e>>8&255]+"-"+He[e>>16&15|64]+He[e>>24&255]+"-"+He[n&63|128]+He[n>>8&255]+"-"+He[n>>16&255]+He[n>>24&255]+He[i&255]+He[i>>8&255]+He[i>>16&255]+He[i>>24&255]).toLowerCase()}function Zt(t,e,n){return Math.max(e,Math.min(n,t))}function Hl(t,e){return(t%e+e)%e}function xf(t,e,n,i,s){return i+(t-e)*(s-i)/(n-e)}function yf(t,e,n){if(t!==e)return(n-t)/(e-t);else return 0}function Vs(t,e,n){return(1-n)*t+n*e}function vf(t,e,n,i){return Vs(t,e,1-Math.exp(-n*i))}function Mf(t,e=1){return e-Math.abs(Hl(t,e*2)-e)}function Sf(t,e,n){if(t<=e)return 0;if(t>=n)return 1;return t=(t-e)/(n-e),t*t*(3-2*t)}function bf(t,e,n){if(t<=e)return 0;if(t>=n)return 1;return t=(t-e)/(n-e),t*t*t*(t*(t*6-15)+10)}function Ef(t,e){return t+Math.floor(Math.random()*(e-t+1))}function Tf(t,e){return t+Math.random()*(e-t)}function wf(t){return t*(0.5-Math.random())}function Af(t){if(t!==void 0)fh=t;let e=fh+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Rf(t){return t*rs}function Cf(t){return t*ls}function Pf(t){return(t&t-1)===0&&t!==0}function If(t){return Math.pow(2,Math.ceil(Math.log(t)/Math.LN2))}function Lf(t){return Math.pow(2,Math.floor(Math.log(t)/Math.LN2))}function Df(t,e,n,i,s){let{cos:r,sin:a}=Math,o=r(n/2),l=a(n/2),c=r((e+i)/2),u=a((e+i)/2),d=r((e-i)/2),h=a((e-i)/2),p=r((i-e)/2),_=a((i-e)/2);switch(s){case"XYX":t.set(o*u,l*d,l*h,o*c);break;case"YZY":t.set(l*h,o*u,l*d,o*c);break;case"ZXZ":t.set(l*d,l*h,o*u,o*c);break;case"XZX":t.set(o*u,l*_,l*p,o*c);break;case"YXY":t.set(l*p,o*u,l*_,o*c);break;case"ZYZ":t.set(l*_,l*p,o*u,o*c);break;default:Ut("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function gn(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw Error("THREE.MathUtils: Invalid component type.")}}function oe(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw Error("THREE.MathUtils: Invalid component type.")}}var gs={DEG2RAD:rs,RAD2DEG:ls,generateUUID:En,clamp:Zt,euclideanModulo:Hl,mapLinear:xf,inverseLerp:yf,lerp:Vs,damp:vf,pingpong:Mf,smoothstep:Sf,smootherstep:bf,randInt:Ef,randFloat:Tf,randFloatSpread:wf,seededRandom:Af,degToRad:Rf,radToDeg:Cf,isPowerOfTwo:Pf,ceilPowerOfTwo:If,floorPowerOfTwo:Lf,setQuaternionFromProperEuler:Df,normalize:oe,denormalize:gn};class tt{static{tt.prototype.isVector2=!0}constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Zt(this.x,t.x,e.x),this.y=Zt(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=Zt(this.x,t,e),this.y=Zt(this.y,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Zt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Zt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),i=Math.sin(e),s=this.x-t.x,r=this.y-t.y;return this.x=s*n-r*i+t.x,this.y=s*i+r*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ln{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,s,r,a){let o=n[i+0],l=n[i+1],c=n[i+2],u=n[i+3],d=s[r+0],h=s[r+1],p=s[r+2],_=s[r+3];if(u!==_||o!==d||l!==h||c!==p){let S=o*d+l*h+c*p+u*_;if(S<0)d=-d,h=-h,p=-p,_=-_,S=-S;let m=1-a;if(S<0.9995){let f=Math.acos(S),w=Math.sin(f);m=Math.sin(m*f)/w,a=Math.sin(a*f)/w,o=o*m+d*a,l=l*m+h*a,c=c*m+p*a,u=u*m+_*a}else{o=o*m+d*a,l=l*m+h*a,c=c*m+p*a,u=u*m+_*a;let f=1/Math.sqrt(o*o+l*l+c*c+u*u);o*=f,l*=f,c*=f,u*=f}}t[e]=o,t[e+1]=l,t[e+2]=c,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,i,s,r){let a=n[i],o=n[i+1],l=n[i+2],c=n[i+3],u=s[r],d=s[r+1],h=s[r+2],p=s[r+3];return t[e]=a*p+c*u+o*h-l*d,t[e+1]=o*p+c*d+l*u-a*h,t[e+2]=l*p+c*h+a*d-o*u,t[e+3]=c*p-a*u-o*d-l*h,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let{_x:n,_y:i,_z:s,_order:r}=t,{cos:a,sin:o}=Math,l=a(n/2),c=a(i/2),u=a(s/2),d=o(n/2),h=o(i/2),p=o(s/2);switch(r){case"XYZ":this._x=d*c*u+l*h*p,this._y=l*h*u-d*c*p,this._z=l*c*p+d*h*u,this._w=l*c*u-d*h*p;break;case"YXZ":this._x=d*c*u+l*h*p,this._y=l*h*u-d*c*p,this._z=l*c*p-d*h*u,this._w=l*c*u+d*h*p;break;case"ZXY":this._x=d*c*u-l*h*p,this._y=l*h*u+d*c*p,this._z=l*c*p+d*h*u,this._w=l*c*u-d*h*p;break;case"ZYX":this._x=d*c*u-l*h*p,this._y=l*h*u+d*c*p,this._z=l*c*p-d*h*u,this._w=l*c*u+d*h*p;break;case"YZX":this._x=d*c*u+l*h*p,this._y=l*h*u+d*c*p,this._z=l*c*p-d*h*u,this._w=l*c*u-d*h*p;break;case"XZY":this._x=d*c*u-l*h*p,this._y=l*h*u-d*c*p,this._z=l*c*p+d*h*u,this._w=l*c*u+d*h*p;break;default:Ut("Quaternion: .setFromEuler() encountered an unknown order: "+r)}if(e===!0)this._onChangeCallback();return this}setFromAxisAngle(t,e){let n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],i=e[4],s=e[8],r=e[1],a=e[5],o=e[9],l=e[2],c=e[6],u=e[10],d=n+a+u;if(d>0){let h=0.5/Math.sqrt(d+1);this._w=0.25/h,this._x=(c-o)*h,this._y=(s-l)*h,this._z=(r-i)*h}else if(n>a&&n>u){let h=2*Math.sqrt(1+n-a-u);this._w=(c-o)/h,this._x=0.25*h,this._y=(i+r)/h,this._z=(s+l)/h}else if(a>u){let h=2*Math.sqrt(1+a-n-u);this._w=(s-l)/h,this._x=(i+r)/h,this._y=0.25*h,this._z=(o+c)/h}else{let h=2*Math.sqrt(1+u-n-a);this._w=(r-i)/h,this._x=(s+l)/h,this._y=(o+c)/h,this._z=0.25*h}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;if(n<0.00000001)if(n=0,Math.abs(t.x)>Math.abs(t.z))this._x=-t.y,this._y=t.x,this._z=0,this._w=n;else this._x=0,this._y=-t.z,this._z=t.y,this._w=n;else this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n;return this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Zt(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();if(t===0)this._x=0,this._y=0,this._z=0,this._w=1;else t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t;return this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let{_x:n,_y:i,_z:s,_w:r}=t,{_x:a,_y:o,_z:l,_w:c}=e;return this._x=n*c+r*a+i*l-s*o,this._y=i*c+r*o+s*a-n*l,this._z=s*c+r*l+n*o-i*a,this._w=r*c-n*a-i*o-s*l,this._onChangeCallback(),this}slerp(t,e){let{_x:n,_y:i,_z:s,_w:r}=t,a=this.dot(t);if(a<0)n=-n,i=-i,s=-s,r=-r,a=-a;let o=1-e;if(a<0.9995){let l=Math.acos(a),c=Math.sin(l);o=Math.sin(o*l)/c,e=Math.sin(e*l)/c,this._x=this._x*o+n*e,this._y=this._y*o+i*e,this._z=this._z*o+s*e,this._w=this._w*o+r*e,this._onChangeCallback()}else this._x=this._x*o+n*e,this._y=this._y*o+i*e,this._z=this._z*o+s*e,this._w=this._w*o+r*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(i*Math.sin(t),i*Math.cos(t),s*Math.sin(e),s*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class P{static{P.prototype.isVector3=!0}constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){if(n===void 0)n=this.z;return this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(ph.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(ph.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,i=this.z,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6]*i,this.y=s[1]*e+s[4]*n+s[7]*i,this.z=s[2]*e+s[5]*n+s[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,i=this.z,s=t.elements,r=1/(s[3]*e+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*e+s[4]*n+s[8]*i+s[12])*r,this.y=(s[1]*e+s[5]*n+s[9]*i+s[13])*r,this.z=(s[2]*e+s[6]*n+s[10]*i+s[14])*r,this}applyQuaternion(t){let e=this.x,n=this.y,i=this.z,{x:s,y:r,z:a,w:o}=t,l=2*(r*i-a*n),c=2*(a*e-s*i),u=2*(s*n-r*e);return this.x=e+o*l+r*u-a*c,this.y=n+o*c+a*l-s*u,this.z=i+o*u+s*c-r*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,i=this.z,s=t.elements;return this.x=s[0]*e+s[4]*n+s[8]*i,this.y=s[1]*e+s[5]*n+s[9]*i,this.z=s[2]*e+s[6]*n+s[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Zt(this.x,t.x,e.x),this.y=Zt(this.y,t.y,e.y),this.z=Zt(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=Zt(this.x,t,e),this.y=Zt(this.y,t,e),this.z=Zt(this.z,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Zt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let{x:n,y:i,z:s}=t,{x:r,y:a,z:o}=e;return this.x=i*o-s*a,this.y=s*r-n*o,this.z=n*a-i*r,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return ho.copy(this).projectOnVector(t),this.sub(ho)}reflect(t){return this.sub(ho.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Zt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}var ho=new P,ph=new ln;class Ht{static{Ht.prototype.isMatrix3=!0}constructor(t,e,n,i,s,r,a,o,l){if(this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0)this.set(t,e,n,i,s,r,a,o,l)}set(t,e,n,i,s,r,a,o,l){let c=this.elements;return c[0]=t,c[1]=i,c[2]=a,c[3]=e,c[4]=s,c[5]=o,c[6]=n,c[7]=r,c[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,i=e.elements,s=this.elements,r=n[0],a=n[3],o=n[6],l=n[1],c=n[4],u=n[7],d=n[2],h=n[5],p=n[8],_=i[0],S=i[3],m=i[6],f=i[1],w=i[4],b=i[7],x=i[2],T=i[5],A=i[8];return s[0]=r*_+a*f+o*x,s[3]=r*S+a*w+o*T,s[6]=r*m+a*b+o*A,s[1]=l*_+c*f+u*x,s[4]=l*S+c*w+u*T,s[7]=l*m+c*b+u*A,s[2]=d*_+h*f+p*x,s[5]=d*S+h*w+p*T,s[8]=d*m+h*b+p*A,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],r=t[4],a=t[5],o=t[6],l=t[7],c=t[8];return e*r*c-e*a*l-n*s*c+n*a*o+i*s*l-i*r*o}invert(){let t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],r=t[4],a=t[5],o=t[6],l=t[7],c=t[8],u=c*r-a*l,d=a*o-c*s,h=l*s-r*o,p=e*u+n*d+i*h;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let _=1/p;return t[0]=u*_,t[1]=(i*l-c*n)*_,t[2]=(a*n-i*r)*_,t[3]=d*_,t[4]=(c*e-i*o)*_,t[5]=(i*s-a*e)*_,t[6]=h*_,t[7]=(n*o-l*e)*_,t[8]=(r*e-n*s)*_,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,s,r,a){let o=Math.cos(s),l=Math.sin(s);return this.set(n*o,n*l,-n*(o*r+l*a)+r+t,-i*l,i*o,-i*(-l*r+o*a)+a+e,0,0,1),this}scale(t,e){return xi("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(uo.makeScale(t,e)),this}rotate(t){return xi("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(uo.makeRotation(-t)),this}translate(t,e){return xi("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(uo.makeTranslation(t,e)),this}makeTranslation(t,e){if(t.isVector2)this.set(1,0,t.x,0,1,t.y,0,0,1);else this.set(1,0,t,0,1,e,0,0,1);return this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}var uo=new Ht,mh=new Ht().set(0.4123908,0.3575843,0.1804808,0.212639,0.7151687,0.0721923,0.0193308,0.1191948,0.9505322),gh=new Ht().set(3.2409699,-1.5373832,-0.4986108,-0.9692436,1.8759675,0.0415551,0.0556301,-0.203977,1.0569715);function Nf(){let t={enabled:!0,workingColorSpace:"srgb-linear",spaces:{},convert:function(s,r,a){if(this.enabled===!1||r===a||!r||!a)return s;if(this.spaces[r].transfer==="srgb")s.r=Bn(s.r),s.g=Bn(s.g),s.b=Bn(s.b);if(this.spaces[r].primaries!==this.spaces[a].primaries)s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ);if(this.spaces[a].transfer==="srgb")s.r=as(s.r),s.g=as(s.g),s.b=as(s.b);return s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){if(s==="")return"linear";return this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return xi("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),t.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return xi("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),t.colorSpaceToWorking(s,r)}},e=[0.64,0.33,0.3,0.6,0.15,0.06],n=[0.2126,0.7152,0.0722],i=[0.3127,0.329];return t.define({["srgb-linear"]:{primaries:e,whitePoint:i,transfer:"linear",toXYZ:mh,fromXYZ:gh,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:"srgb"},outputColorSpaceConfig:{drawingBufferColorSpace:"srgb"}},["srgb"]:{primaries:e,whitePoint:i,transfer:"srgb",toXYZ:mh,fromXYZ:gh,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:"srgb"}}}),t}var te=Nf();function Bn(t){return t<0.04045?t*0.0773993808:Math.pow(t*0.9478672986+0.0521327014,2.4)}function as(t){return t<0.0031308?t*12.92:1.055*Math.pow(t,0.41666)-0.055}var Hi;class Vl{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src))return t.src;if(typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{if(Hi===void 0)Hi=qs("canvas");Hi.width=t.width,Hi.height=t.height;let i=Hi.getContext("2d");if(t instanceof ImageData)i.putImageData(t,0,0);else i.drawImage(t,0,0,t.width,t.height);n=Hi}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=qs("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let i=n.getImageData(0,0,t.width,t.height),s=i.data;for(let r=0;r<s.length;r++)s[r]=Bn(s[r]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)if(e instanceof Uint8Array||e instanceof Uint8ClampedArray)e[n]=Math.floor(Bn(e[n]/255)*255);else e[n]=Bn(e[n]);return{data:e,width:t.width,height:t.height}}else return Ut("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}var Uf=0;class ir{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Uf++}),this.uuid=En(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;if(typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement)t.set(e.videoWidth,e.videoHeight,0);else if(typeof VideoFrame<"u"&&e instanceof VideoFrame)t.set(e.displayWidth,e.displayHeight,0);else if(e!==null)t.set(e.width,e.height,e.depth||0);else t.set(0,0,0);return t}set needsUpdate(t){if(t===!0)this.version++}toJSON(t){let e=t===void 0||typeof t==="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let r=0,a=i.length;r<a;r++)if(i[r].isDataTexture)s.push(fo(i[r].image));else s.push(fo(i[r]))}else s=fo(i);n.url=s}if(!e)t.images[this.uuid]=n;return n}}function fo(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap)return Vl.getDataURL(t);else if(t.data)return{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name};else return Ut("Texture: Unable to serialize Texture."),{}}var Ff=0,po=new P;class ze extends Rn{constructor(t=ze.DEFAULT_IMAGE,e=ze.DEFAULT_MAPPING,n=1001,i=1001,s=1006,r=1008,a=1023,o=1009,l=ze.DEFAULT_ANISOTROPY,c=""){super();this.isTexture=!0,Object.defineProperty(this,"id",{value:Ff++}),this.uuid=En(),this.name="",this.source=new ir(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=r,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=o,this.offset=new tt(0,0),this.repeat=new tt(1,1),this.center=new tt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ht,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=c,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=t&&t.depth&&t.depth>1?!0:!1,this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(po).x}get height(){return this.source.getSize(po).y}get depth(){return this.source.getSize(po).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let n=t[e];if(n===void 0){Ut(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let i=this[e];if(i===void 0){Ut(`Texture.setValues(): property '${e}' does not exist.`);continue}if(i&&n&&(i.isVector2&&n.isVector2))i.copy(n);else if(i&&n&&(i.isVector3&&n.isVector3))i.copy(n);else if(i&&n&&(i.isMatrix3&&n.isMatrix3))i.copy(n);else this[e]=n}}toJSON(t){let e=t===void 0||typeof t==="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};if(Object.keys(this.userData).length>0)n.userData=this.userData;if(!e)t.textures[this.uuid]=n;return n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==300)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case 1000:t.x=t.x-Math.floor(t.x);break;case 1001:t.x=t.x<0?0:1;break;case 1002:if(Math.abs(Math.floor(t.x)%2)===1)t.x=Math.ceil(t.x)-t.x;else t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case 1000:t.y=t.y-Math.floor(t.y);break;case 1001:t.y=t.y<0?0:1;break;case 1002:if(Math.abs(Math.floor(t.y)%2)===1)t.y=Math.ceil(t.y)-t.y;else t.y=t.y-Math.floor(t.y);break}if(this.flipY)t.y=1-t.y;return t}set needsUpdate(t){if(t===!0)this.version++,this.source.needsUpdate=!0}set needsPMREMUpdate(t){if(t===!0)this.pmremVersion++}}ze.DEFAULT_IMAGE=null;ze.DEFAULT_MAPPING=300;ze.DEFAULT_ANISOTROPY=1;class ye{static{ye.prototype.isVector4=!0}constructor(t=0,e=0,n=0,i=1){this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,i=this.z,s=this.w,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*i+r[12]*s,this.y=r[1]*e+r[5]*n+r[9]*i+r[13]*s,this.z=r[2]*e+r[6]*n+r[10]*i+r[14]*s,this.w=r[3]*e+r[7]*n+r[11]*i+r[15]*s,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);if(e<0.0001)this.x=1,this.y=0,this.z=0;else this.x=t.x/e,this.y=t.y/e,this.z=t.z/e;return this}setAxisAngleFromRotationMatrix(t){let e,n,i,s,r=0.01,a=0.1,o=t.elements,l=o[0],c=o[4],u=o[8],d=o[1],h=o[5],p=o[9],_=o[2],S=o[6],m=o[10];if(Math.abs(c-d)<0.01&&Math.abs(u-_)<0.01&&Math.abs(p-S)<0.01){if(Math.abs(c+d)<0.1&&Math.abs(u+_)<0.1&&Math.abs(p+S)<0.1&&Math.abs(l+h+m-3)<0.1)return this.set(1,0,0,0),this;e=Math.PI;let w=(l+1)/2,b=(h+1)/2,x=(m+1)/2,T=(c+d)/4,A=(u+_)/4,R=(p+S)/4;if(w>b&&w>x)if(w<0.01)n=0,i=0.707106781,s=0.707106781;else n=Math.sqrt(w),i=T/n,s=A/n;else if(b>x)if(b<0.01)n=0.707106781,i=0,s=0.707106781;else i=Math.sqrt(b),n=T/i,s=R/i;else if(x<0.01)n=0.707106781,i=0.707106781,s=0;else s=Math.sqrt(x),n=A/s,i=R/s;return this.set(n,i,s,e),this}let f=Math.sqrt((S-p)*(S-p)+(u-_)*(u-_)+(d-c)*(d-c));if(Math.abs(f)<0.001)f=1;return this.x=(S-p)/f,this.y=(u-_)/f,this.z=(d-c)/f,this.w=Math.acos((l+h+m-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Zt(this.x,t.x,e.x),this.y=Zt(this.y,t.y,e.y),this.z=Zt(this.z,t.z,e.z),this.w=Zt(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=Zt(this.x,t,e),this.y=Zt(this.y,t,e),this.z=Zt(this.z,t,e),this.w=Zt(this.w,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Zt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Wl extends Rn{constructor(t=1,e=1,n={}){super();n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:1006,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new ye(0,0,t,e),this.scissorTest=!1,this.viewport=new ye(0,0,t,e),this.textures=[];let i={width:t,height:e,depth:n.depth},s=new ze(i),r=n.count;for(let a=0;a<r;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:1006,generateMipmaps:!1,flipY:!1,internalFormat:null};if(t.mapping!==void 0)e.mapping=t.mapping;if(t.wrapS!==void 0)e.wrapS=t.wrapS;if(t.wrapT!==void 0)e.wrapT=t.wrapT;if(t.wrapR!==void 0)e.wrapR=t.wrapR;if(t.magFilter!==void 0)e.magFilter=t.magFilter;if(t.minFilter!==void 0)e.minFilter=t.minFilter;if(t.format!==void 0)e.format=t.format;if(t.type!==void 0)e.type=t.type;if(t.anisotropy!==void 0)e.anisotropy=t.anisotropy;if(t.colorSpace!==void 0)e.colorSpace=t.colorSpace;if(t.flipY!==void 0)e.flipY=t.flipY;if(t.generateMipmaps!==void 0)e.generateMipmaps=t.generateMipmaps;if(t.internalFormat!==void 0)e.internalFormat=t.internalFormat;for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){if(this._depthTexture!==null)this._depthTexture.renderTarget=null;if(t!==null)t.renderTarget=this;this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let i=0,s=this.textures.length;i<s;i++)if(this.textures[i].image.width=t,this.textures[i].image.height=e,this.textures[i].image.depth=n,this.textures[i].isData3DTexture!==!0)this.textures[i].isArrayTexture=this.textures[i].image.depth>1;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let i=Object.assign({},t.textures[e].image);this.textures[e].source=new ir(i)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null)this.depthTexture=t.depthTexture.clone();return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class cn extends Wl{constructor(t=1,e=1,n={}){super(t,e,n);this.isWebGLRenderTarget=!0}}class Ma extends ze{constructor(t=null,e=1,n=1,i=1){super(null);this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=1003,this.minFilter=1003,this.wrapR=1001,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Xl extends ze{constructor(t=null,e=1,n=1,i=1){super(null);this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=1003,this.minFilter=1003,this.wrapR=1001,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class se{static{se.prototype.isMatrix4=!0}constructor(t,e,n,i,s,r,a,o,l,c,u,d,h,p,_,S){if(this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0)this.set(t,e,n,i,s,r,a,o,l,c,u,d,h,p,_,S)}set(t,e,n,i,s,r,a,o,l,c,u,d,h,p,_,S){let m=this.elements;return m[0]=t,m[4]=e,m[8]=n,m[12]=i,m[1]=s,m[5]=r,m[9]=a,m[13]=o,m[2]=l,m[6]=c,m[10]=u,m[14]=d,m[3]=h,m[7]=p,m[11]=_,m[15]=S,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new se().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){if(this.determinantAffine()===0)return t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this;return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,n=t.elements,i=1/Vi.setFromMatrixColumn(t,0).length(),s=1/Vi.setFromMatrixColumn(t,1).length(),r=1/Vi.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*s,e[5]=n[5]*s,e[6]=n[6]*s,e[7]=0,e[8]=n[8]*r,e[9]=n[9]*r,e[10]=n[10]*r,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,{x:n,y:i,z:s}=t,r=Math.cos(n),a=Math.sin(n),o=Math.cos(i),l=Math.sin(i),c=Math.cos(s),u=Math.sin(s);if(t.order==="XYZ"){let d=r*c,h=r*u,p=a*c,_=a*u;e[0]=o*c,e[4]=-o*u,e[8]=l,e[1]=h+p*l,e[5]=d-_*l,e[9]=-a*o,e[2]=_-d*l,e[6]=p+h*l,e[10]=r*o}else if(t.order==="YXZ"){let d=o*c,h=o*u,p=l*c,_=l*u;e[0]=d+_*a,e[4]=p*a-h,e[8]=r*l,e[1]=r*u,e[5]=r*c,e[9]=-a,e[2]=h*a-p,e[6]=_+d*a,e[10]=r*o}else if(t.order==="ZXY"){let d=o*c,h=o*u,p=l*c,_=l*u;e[0]=d-_*a,e[4]=-r*u,e[8]=p+h*a,e[1]=h+p*a,e[5]=r*c,e[9]=_-d*a,e[2]=-r*l,e[6]=a,e[10]=r*o}else if(t.order==="ZYX"){let d=r*c,h=r*u,p=a*c,_=a*u;e[0]=o*c,e[4]=p*l-h,e[8]=d*l+_,e[1]=o*u,e[5]=_*l+d,e[9]=h*l-p,e[2]=-l,e[6]=a*o,e[10]=r*o}else if(t.order==="YZX"){let d=r*o,h=r*l,p=a*o,_=a*l;e[0]=o*c,e[4]=_-d*u,e[8]=p*u+h,e[1]=u,e[5]=r*c,e[9]=-a*c,e[2]=-l*c,e[6]=h*u+p,e[10]=d-_*u}else if(t.order==="XZY"){let d=r*o,h=r*l,p=a*o,_=a*l;e[0]=o*c,e[4]=-u,e[8]=l*c,e[1]=d*u+_,e[5]=r*c,e[9]=h*u-p,e[2]=p*u-h,e[6]=a*c,e[10]=_*u+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Of,t,Bf)}lookAt(t,e,n){let i=this.elements;if(nn.subVectors(t,e),nn.lengthSq()===0)nn.z=1;if(nn.normalize(),Jn.crossVectors(n,nn),Jn.lengthSq()===0){if(Math.abs(n.z)===1)nn.x+=0.0001;else nn.z+=0.0001;nn.normalize(),Jn.crossVectors(n,nn)}return Jn.normalize(),wr.crossVectors(nn,Jn),i[0]=Jn.x,i[4]=wr.x,i[8]=nn.x,i[1]=Jn.y,i[5]=wr.y,i[9]=nn.y,i[2]=Jn.z,i[6]=wr.z,i[10]=nn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,i=e.elements,s=this.elements,r=n[0],a=n[4],o=n[8],l=n[12],c=n[1],u=n[5],d=n[9],h=n[13],p=n[2],_=n[6],S=n[10],m=n[14],f=n[3],w=n[7],b=n[11],x=n[15],T=i[0],A=i[4],R=i[8],g=i[12],M=i[1],U=i[5],C=i[9],k=i[13],q=i[2],F=i[6],W=i[10],V=i[14],O=i[3],K=i[7],st=i[11],ot=i[15];return s[0]=r*T+a*M+o*q+l*O,s[4]=r*A+a*U+o*F+l*K,s[8]=r*R+a*C+o*W+l*st,s[12]=r*g+a*k+o*V+l*ot,s[1]=c*T+u*M+d*q+h*O,s[5]=c*A+u*U+d*F+h*K,s[9]=c*R+u*C+d*W+h*st,s[13]=c*g+u*k+d*V+h*ot,s[2]=p*T+_*M+S*q+m*O,s[6]=p*A+_*U+S*F+m*K,s[10]=p*R+_*C+S*W+m*st,s[14]=p*g+_*k+S*V+m*ot,s[3]=f*T+w*M+b*q+x*O,s[7]=f*A+w*U+b*F+x*K,s[11]=f*R+w*C+b*W+x*st,s[15]=f*g+w*k+b*V+x*ot,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],i=t[8],s=t[12],r=t[1],a=t[5],o=t[9],l=t[13],c=t[2],u=t[6],d=t[10],h=t[14],p=t[3],_=t[7],S=t[11],m=t[15],f=o*h-l*d,w=a*h-l*u,b=a*d-o*u,x=r*h-l*c,T=r*d-o*c,A=r*u-a*c;return e*(_*f-S*w+m*b)-n*(p*f-S*x+m*T)+i*(p*w-_*x+m*A)-s*(p*b-_*T+S*A)}determinantAffine(){let t=this.elements,e=t[0],n=t[4],i=t[8],s=t[1],r=t[5],a=t[9],o=t[2],l=t[6],c=t[10];return e*(r*c-a*l)-n*(s*c-a*o)+i*(s*l-r*o)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let i=this.elements;if(t.isVector3)i[12]=t.x,i[13]=t.y,i[14]=t.z;else i[12]=t,i[13]=e,i[14]=n;return this}invert(){let t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],r=t[4],a=t[5],o=t[6],l=t[7],c=t[8],u=t[9],d=t[10],h=t[11],p=t[12],_=t[13],S=t[14],m=t[15],f=e*a-n*r,w=e*o-i*r,b=e*l-s*r,x=n*o-i*a,T=n*l-s*a,A=i*l-s*o,R=c*_-u*p,g=c*S-d*p,M=c*m-h*p,U=u*S-d*_,C=u*m-h*_,k=d*m-h*S,q=f*k-w*C+b*U+x*M-T*g+A*R;if(q===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let F=1/q;return t[0]=(a*k-o*C+l*U)*F,t[1]=(i*C-n*k-s*U)*F,t[2]=(_*A-S*T+m*x)*F,t[3]=(d*T-u*A-h*x)*F,t[4]=(o*M-r*k-l*g)*F,t[5]=(e*k-i*M+s*g)*F,t[6]=(S*b-p*A-m*w)*F,t[7]=(c*A-d*b+h*w)*F,t[8]=(r*C-a*M+l*R)*F,t[9]=(n*M-e*C-s*R)*F,t[10]=(p*T-_*b+m*f)*F,t[11]=(u*b-c*T-h*f)*F,t[12]=(a*g-r*U-o*R)*F,t[13]=(e*U-n*g+i*R)*F,t[14]=(_*w-p*x-S*f)*F,t[15]=(c*x-u*w+d*f)*F,this}scale(t){let e=this.elements,{x:n,y:i,z:s}=t;return e[0]*=n,e[4]*=i,e[8]*=s,e[1]*=n,e[5]*=i,e[9]*=s,e[2]*=n,e[6]*=i,e[10]*=s,e[3]*=n,e[7]*=i,e[11]*=s,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){if(t.isVector3)this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1);else this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1);return this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),i=Math.sin(e),s=1-n,{x:r,y:a,z:o}=t,l=s*r,c=s*a;return this.set(l*r+n,l*a-i*o,l*o+i*a,0,l*a+i*o,c*a+n,c*o-i*r,0,l*o-i*a,c*o+i*r,s*o*o+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,s,r){return this.set(1,n,s,0,t,1,r,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){let i=this.elements,{_x:s,_y:r,_z:a,_w:o}=e,l=s+s,c=r+r,u=a+a,d=s*l,h=s*c,p=s*u,_=r*c,S=r*u,m=a*u,f=o*l,w=o*c,b=o*u,{x,y:T,z:A}=n;return i[0]=(1-(_+m))*x,i[1]=(h+b)*x,i[2]=(p-w)*x,i[3]=0,i[4]=(h-b)*T,i[5]=(1-(d+m))*T,i[6]=(S+f)*T,i[7]=0,i[8]=(p+w)*A,i[9]=(S-f)*A,i[10]=(1-(d+_))*A,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){let i=this.elements;t.x=i[12],t.y=i[13],t.z=i[14];let s=this.determinantAffine();if(s===0)return n.set(1,1,1),e.identity(),this;let r=Vi.set(i[0],i[1],i[2]).length(),a=Vi.set(i[4],i[5],i[6]).length(),o=Vi.set(i[8],i[9],i[10]).length();if(s<0)r=-r;fn.copy(this);let l=1/r,c=1/a,u=1/o;return fn.elements[0]*=l,fn.elements[1]*=l,fn.elements[2]*=l,fn.elements[4]*=c,fn.elements[5]*=c,fn.elements[6]*=c,fn.elements[8]*=u,fn.elements[9]*=u,fn.elements[10]*=u,e.setFromRotationMatrix(fn),n.x=r,n.y=a,n.z=o,this}makePerspective(t,e,n,i,s,r,a=2000,o=!1){let l=this.elements,c=2*s/(e-t),u=2*s/(n-i),d=(e+t)/(e-t),h=(n+i)/(n-i),p,_;if(o)p=s/(r-s),_=r*s/(r-s);else if(a===2000)p=-(r+s)/(r-s),_=-2*r*s/(r-s);else if(a===2001)p=-r/(r-s),_=-r*s/(r-s);else throw Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=u,l[9]=h,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,i,s,r,a=2000,o=!1){let l=this.elements,c=2/(e-t),u=2/(n-i),d=-(e+t)/(e-t),h=-(n+i)/(n-i),p,_;if(o)p=1/(r-s),_=r/(r-s);else if(a===2000)p=-2/(r-s),_=-(r+s)/(r-s);else if(a===2001)p=-1/(r-s),_=-s/(r-s);else throw Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=0,l[12]=d,l[1]=0,l[5]=u,l[9]=0,l[13]=h,l[2]=0,l[6]=0,l[10]=p,l[14]=_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}var Vi=new P,fn=new se,Of=new P(0,0,0),Bf=new P(1,1,1),Jn=new P,wr=new P,nn=new P,_h=new se,xh=new ln;class zn{constructor(t=0,e=0,n=0,i=zn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let i=t.elements,s=i[0],r=i[4],a=i[8],o=i[1],l=i[5],c=i[9],u=i[2],d=i[6],h=i[10];switch(e){case"XYZ":if(this._y=Math.asin(Zt(a,-1,1)),Math.abs(a)<0.9999999)this._x=Math.atan2(-c,h),this._z=Math.atan2(-r,s);else this._x=Math.atan2(d,l),this._z=0;break;case"YXZ":if(this._x=Math.asin(-Zt(c,-1,1)),Math.abs(c)<0.9999999)this._y=Math.atan2(a,h),this._z=Math.atan2(o,l);else this._y=Math.atan2(-u,s),this._z=0;break;case"ZXY":if(this._x=Math.asin(Zt(d,-1,1)),Math.abs(d)<0.9999999)this._y=Math.atan2(-u,h),this._z=Math.atan2(-r,l);else this._y=0,this._z=Math.atan2(o,s);break;case"ZYX":if(this._y=Math.asin(-Zt(u,-1,1)),Math.abs(u)<0.9999999)this._x=Math.atan2(d,h),this._z=Math.atan2(o,s);else this._x=0,this._z=Math.atan2(-r,l);break;case"YZX":if(this._z=Math.asin(Zt(o,-1,1)),Math.abs(o)<0.9999999)this._x=Math.atan2(-c,l),this._y=Math.atan2(-u,s);else this._x=0,this._y=Math.atan2(a,h);break;case"XZY":if(this._z=Math.asin(-Zt(r,-1,1)),Math.abs(r)<0.9999999)this._x=Math.atan2(d,l),this._y=Math.atan2(a,s);else this._x=Math.atan2(-c,h),this._y=0;break;default:Ut("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}if(this._order=e,n===!0)this._onChangeCallback();return this}setFromQuaternion(t,e,n){return _h.makeRotationFromQuaternion(t),this.setFromRotationMatrix(_h,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return xh.setFromEuler(this),this.setFromQuaternion(xh,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){if(this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0)this._order=t[3];return this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}zn.DEFAULT_ORDER="XYZ";class sr{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}var zf=0,yh=new P,Wi=new ln,Dn=new se,Ar=new P,Ls=new P,kf=new P,Gf=new ln,vh=new P(1,0,0),Mh=new P(0,1,0),Sh=new P(0,0,1),bh={type:"added"},Hf={type:"removed"},Xi={type:"childadded",child:null},mo={type:"childremoved",child:null};class xe extends Rn{constructor(){super();this.isObject3D=!0,Object.defineProperty(this,"id",{value:zf++}),this.uuid=En(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=xe.DEFAULT_UP.clone();let t=new P,e=new zn,n=new ln,i=new P(1,1,1);function s(){n.setFromEuler(e,!1)}function r(){e.setFromQuaternion(n,void 0,!1)}e._onChange(s),n._onChange(r),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new se},normalMatrix:{value:new Ht}}),this.matrix=new se,this.matrixWorld=new se,this.matrixAutoUpdate=xe.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=xe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new sr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){if(this.matrixAutoUpdate)this.updateMatrix();this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Wi.setFromAxisAngle(t,e),this.quaternion.multiply(Wi),this}rotateOnWorldAxis(t,e){return Wi.setFromAxisAngle(t,e),this.quaternion.premultiply(Wi),this}rotateX(t){return this.rotateOnAxis(vh,t)}rotateY(t){return this.rotateOnAxis(Mh,t)}rotateZ(t){return this.rotateOnAxis(Sh,t)}translateOnAxis(t,e){return yh.copy(t).applyQuaternion(this.quaternion),this.position.add(yh.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(vh,t)}translateY(t){return this.translateOnAxis(Mh,t)}translateZ(t){return this.translateOnAxis(Sh,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Dn.copy(this.matrixWorld).invert())}lookAt(t,e,n){if(t.isVector3)Ar.copy(t);else Ar.set(t,e,n);let i=this.parent;if(this.updateWorldMatrix(!0,!1),Ls.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight)Dn.lookAt(Ls,Ar,this.up);else Dn.lookAt(Ar,Ls,this.up);if(this.quaternion.setFromRotationMatrix(Dn),i)Dn.extractRotation(i.matrixWorld),Wi.setFromRotationMatrix(Dn),this.quaternion.premultiply(Wi.invert())}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}if(t===this)return Bt("Object3D.add: object can't be added as a child of itself.",t),this;if(t&&t.isObject3D)t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(bh),Xi.child=t,this.dispatchEvent(Xi),Xi.child=null;else Bt("Object3D.add: object not an instance of THREE.Object3D.",t);return this}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);if(e!==-1)t.parent=null,this.children.splice(e,1),t.dispatchEvent(Hf),mo.child=t,this.dispatchEvent(mo),mo.child=null;return this}removeFromParent(){let t=this.parent;if(t!==null)t.remove(this);return this}clear(){return this.remove(...this.children)}attach(t){if(this.updateWorldMatrix(!0,!1),Dn.copy(this.matrixWorld).invert(),t.parent!==null)t.parent.updateWorldMatrix(!0,!1),Dn.multiply(t.parent.matrixWorld);return t.applyMatrix4(Dn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(bh),Xi.child=t,this.dispatchEvent(Xi),Xi.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){let r=this.children[n].getObjectByProperty(t,e);if(r!==void 0)return r}return}getObjectsByProperty(t,e,n=[]){if(this[t]===e)n.push(this);let i=this.children;for(let s=0,r=i.length;s<r;s++)i[s].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ls,t,kf),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ls,Gf,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;if(e!==null)t(e),e.traverseAncestors(t)}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let{x:e,y:n,z:i}=t,s=this.matrix.elements;s[12]+=e-s[0]*e-s[4]*n-s[8]*i,s[13]+=n-s[1]*e-s[5]*n-s[9]*i,s[14]+=i-s[2]*e-s[6]*n-s[10]*i}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){if(this.matrixAutoUpdate)this.updateMatrix();if(this.matrixWorldNeedsUpdate||t){if(this.matrixWorldAutoUpdate===!0)if(this.parent===null)this.matrixWorld.copy(this.matrix);else this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix);this.matrixWorldNeedsUpdate=!1,t=!0}let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e,n=!1){let i=this.parent;if(t===!0&&i!==null)i.updateWorldMatrix(!0,!1);if(this.matrixAutoUpdate)this.updateMatrix();if(this.matrixWorldNeedsUpdate||n){if(this.matrixWorldAutoUpdate===!0)if(this.parent===null)this.matrixWorld.copy(this.matrix);else this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix);this.matrixWorldNeedsUpdate=!1,n=!0}if(e===!0){let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].updateWorldMatrix(!1,!0,n)}}toJSON(t){let e=t===void 0||typeof t==="string",n={};if(e)t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"};let i={};if(i.uuid=this.uuid,i.type=this.type,this.name!=="")i.name=this.name;if(this.castShadow===!0)i.castShadow=!0;if(this.receiveShadow===!0)i.receiveShadow=!0;if(this.visible===!1)i.visible=!1;if(this.frustumCulled===!1)i.frustumCulled=!1;if(this.renderOrder!==0)i.renderOrder=this.renderOrder;if(this.static!==!1)i.static=this.static;if(Object.keys(this.userData).length>0)i.userData=this.userData;if(i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.pivot!==null)i.pivot=this.pivot.toArray();if(this.matrixAutoUpdate===!1)i.matrixAutoUpdate=!1;if(this.morphTargetDictionary!==void 0)i.morphTargetDictionary=Object.assign({},this.morphTargetDictionary);if(this.morphTargetInfluences!==void 0)i.morphTargetInfluences=this.morphTargetInfluences.slice();if(this.isInstancedMesh){if(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null)i.instanceColor=this.instanceColor.toJSON()}if(this.isBatchedMesh){if(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map((a)=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map((a)=>({...a})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(t),i.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null)i.colorsTexture=this._colorsTexture.toJSON(t);if(this.boundingSphere!==null)i.boundingSphere=this.boundingSphere.toJSON();if(this.boundingBox!==null)i.boundingBox=this.boundingBox.toJSON()}function s(a,o){if(a[o.uuid]===void 0)a[o.uuid]=o.toJSON(t);return o.uuid}if(this.isScene){if(this.background){if(this.background.isColor)i.background=this.background.toJSON();else if(this.background.isTexture)i.background=this.background.toJSON(t).uuid}if(this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0)i.environment=this.environment.toJSON(t).uuid}else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let o=a.shapes;if(Array.isArray(o))for(let l=0,c=o.length;l<c;l++){let u=o[l];s(t.shapes,u)}else s(t.shapes,o)}}if(this.isSkinnedMesh){if(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0)s(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid}if(this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let o=0,l=this.material.length;o<l;o++)a.push(s(t.materials,this.material[o]));i.material=a}else i.material=s(t.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){let o=this.animations[a];i.animations.push(s(t.animations,o))}}if(e){let a=r(t.geometries),o=r(t.materials),l=r(t.textures),c=r(t.images),u=r(t.shapes),d=r(t.skeletons),h=r(t.animations),p=r(t.nodes);if(a.length>0)n.geometries=a;if(o.length>0)n.materials=o;if(l.length>0)n.textures=l;if(c.length>0)n.images=c;if(u.length>0)n.shapes=u;if(d.length>0)n.skeletons=d;if(h.length>0)n.animations=h;if(p.length>0)n.nodes=p}return n.object=i,n;function r(a){let o=[];for(let l in a){let c=a[l];delete c.metadata,o.push(c)}return o}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let i=t.children[n];this.add(i.clone())}return this}}xe.DEFAULT_UP=new P(0,1,0);xe.DEFAULT_MATRIX_AUTO_UPDATE=!0;xe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Je extends xe{constructor(){super();this.isGroup=!0,this.type="Group"}}var Vf={type:"move"};class rr{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){if(this._hand===null)this._hand=new Je,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1};return this._hand}getTargetRaySpace(){if(this._targetRay===null)this._targetRay=new Je,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new P,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new P;return this._targetRay}getGripSpace(){if(this._grip===null)this._grip=new Je,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new P,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new P,this._grip.eventsEnabled=!1;return this._grip}dispatchEvent(t){if(this._targetRay!==null)this._targetRay.dispatchEvent(t);if(this._grip!==null)this._grip.dispatchEvent(t);if(this._hand!==null)this._hand.dispatchEvent(t);return this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){if(this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null)this._targetRay.visible=!1;if(this._grip!==null)this._grip.visible=!1;if(this._hand!==null)this._hand.visible=!1;return this}update(t,e,n){let i=null,s=null,r=null,a=this._targetRay,o=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){r=!0;for(let _ of t.hand.values()){let S=e.getJointPose(_,n),m=this._getHandJoint(l,_);if(S!==null)m.matrix.fromArray(S.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=S.radius;m.visible=S!==null}let c=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],d=c.position.distanceTo(u.position),h=0.02,p=0.005;if(l.inputState.pinching&&d>h+p)l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this});else if(!l.inputState.pinching&&d<=h-p)l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this})}else if(o!==null&&t.gripSpace){if(s=e.getPose(t.gripSpace,n),s!==null){if(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity)o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity);else o.hasLinearVelocity=!1;if(s.angularVelocity)o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity);else o.hasAngularVelocity=!1;if(o.eventsEnabled)o.dispatchEvent({type:"gripUpdated",data:t,target:this})}}if(a!==null){if(i=e.getPose(t.targetRaySpace,n),i===null&&s!==null)i=s;if(i!==null){if(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity)a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity);else a.hasLinearVelocity=!1;if(i.angularVelocity)a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity);else a.hasAngularVelocity=!1;this.dispatchEvent(Vf)}}}if(a!==null)a.visible=i!==null;if(o!==null)o.visible=s!==null;if(l!==null)l.visible=r!==null;return this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new Je;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}var Zu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Kn={h:0,s:0,l:0},Rr={h:0,s:0,l:0};function go(t,e,n){if(n<0)n+=1;if(n>1)n-=1;if(n<0.16666666666666666)return t+(e-t)*6*n;if(n<0.5)return e;if(n<0.6666666666666666)return t+(e-t)*6*(0.6666666666666666-n);return t}class Yt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let i=t;if(i&&i.isColor)this.copy(i);else if(typeof i==="number")this.setHex(i);else if(typeof i==="string")this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e="srgb"){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,te.colorSpaceToWorking(this,e),this}setRGB(t,e,n,i=te.workingColorSpace){return this.r=t,this.g=e,this.b=n,te.colorSpaceToWorking(this,i),this}setHSL(t,e,n,i=te.workingColorSpace){if(t=Hl(t,1),e=Zt(e,0,1),n=Zt(n,0,1),e===0)this.r=this.g=this.b=n;else{let s=n<=0.5?n*(1+e):n+e-n*e,r=2*n-s;this.r=go(r,s,t+0.3333333333333333),this.g=go(r,s,t),this.b=go(r,s,t-0.3333333333333333)}return te.colorSpaceToWorking(this,i),this}setStyle(t,e="srgb"){function n(s){if(s===void 0)return;if(parseFloat(s)<1)Ut("Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let s,r=i[1],a=i[2];switch(r){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,e);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:Ut("Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){let s=i[1],r=s.length;if(r===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);else if(r===6)return this.setHex(parseInt(s,16),e);else Ut("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e="srgb"){let n=Zu[t.toLowerCase()];if(n!==void 0)this.setHex(n,e);else Ut("Color: Unknown color "+t);return this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Bn(t.r),this.g=Bn(t.g),this.b=Bn(t.b),this}copyLinearToSRGB(t){return this.r=as(t.r),this.g=as(t.g),this.b=as(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t="srgb"){return te.workingToColorSpace(Ve.copy(this),t),Math.round(Zt(Ve.r*255,0,255))*65536+Math.round(Zt(Ve.g*255,0,255))*256+Math.round(Zt(Ve.b*255,0,255))}getHexString(t="srgb"){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=te.workingColorSpace){te.workingToColorSpace(Ve.copy(this),e);let{r:n,g:i,b:s}=Ve,r=Math.max(n,i,s),a=Math.min(n,i,s),o,l,c=(a+r)/2;if(a===r)o=0,l=0;else{let u=r-a;switch(l=c<=0.5?u/(r+a):u/(2-r-a),r){case n:o=(i-s)/u+(i<s?6:0);break;case i:o=(s-n)/u+2;break;case s:o=(n-i)/u+4;break}o/=6}return t.h=o,t.s=l,t.l=c,t}getRGB(t,e=te.workingColorSpace){return te.workingToColorSpace(Ve.copy(this),e),t.r=Ve.r,t.g=Ve.g,t.b=Ve.b,t}getStyle(t="srgb"){te.workingToColorSpace(Ve.copy(this),t);let{r:e,g:n,b:i}=Ve;if(t!=="srgb")return`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`;return`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(Kn),this.setHSL(Kn.h+t,Kn.s+e,Kn.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Kn),t.getHSL(Rr);let n=Vs(Kn.h,Rr.h,e),i=Vs(Kn.s,Rr.s,e),s=Vs(Kn.l,Rr.l,e);return this.setHSL(n,i,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,i=this.b,s=t.elements;return this.r=s[0]*e+s[3]*n+s[6]*i,this.g=s[1]*e+s[4]*n+s[7]*i,this.b=s[2]*e+s[5]*n+s[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}var Ve=new Yt;Yt.NAMES=Zu;class ar{constructor(t,e=1,n=1000){this.isFog=!0,this.name="",this.color=new Yt(t),this.near=e,this.far=n}clone(){return new ar(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class Sa extends xe{constructor(){super();if(this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new zn,this.environmentIntensity=1,this.environmentRotation=new zn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u")__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){if(super.copy(t,e),t.background!==null)this.background=t.background.clone();if(t.environment!==null)this.environment=t.environment.clone();if(t.fog!==null)this.fog=t.fog.clone();if(this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null)this.overrideMaterial=t.overrideMaterial.clone();return this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);if(this.fog!==null)e.object.fog=this.fog.toJSON();if(this.backgroundBlurriness>0)e.object.backgroundBlurriness=this.backgroundBlurriness;if(this.backgroundIntensity!==1)e.object.backgroundIntensity=this.backgroundIntensity;if(e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1)e.object.environmentIntensity=this.environmentIntensity;return e.object.environmentRotation=this.environmentRotation.toArray(),e}}var pn=new P,Nn=new P,_o=new P,Un=new P,qi=new P,Yi=new P,Eh=new P,xo=new P,yo=new P,vo=new P,Mo=new ye,So=new ye,bo=new ye;class $e{constructor(t=new P,e=new P,n=new P){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),pn.subVectors(t,e),i.cross(pn);let s=i.lengthSq();if(s>0)return i.multiplyScalar(1/Math.sqrt(s));return i.set(0,0,0)}static getBarycoord(t,e,n,i,s){pn.subVectors(i,e),Nn.subVectors(n,e),_o.subVectors(t,e);let r=pn.dot(pn),a=pn.dot(Nn),o=pn.dot(_o),l=Nn.dot(Nn),c=Nn.dot(_o),u=r*l-a*a;if(u===0)return s.set(0,0,0),null;let d=1/u,h=(l*o-a*c)*d,p=(r*c-a*o)*d;return s.set(1-h-p,p,h)}static containsPoint(t,e,n,i){if(this.getBarycoord(t,e,n,i,Un)===null)return!1;return Un.x>=0&&Un.y>=0&&Un.x+Un.y<=1}static getInterpolation(t,e,n,i,s,r,a,o){if(this.getBarycoord(t,e,n,i,Un)===null){if(o.x=0,o.y=0,"z"in o)o.z=0;if("w"in o)o.w=0;return null}return o.setScalar(0),o.addScaledVector(s,Un.x),o.addScaledVector(r,Un.y),o.addScaledVector(a,Un.z),o}static getInterpolatedAttribute(t,e,n,i,s,r){return Mo.setScalar(0),So.setScalar(0),bo.setScalar(0),Mo.fromBufferAttribute(t,e),So.fromBufferAttribute(t,n),bo.fromBufferAttribute(t,i),r.setScalar(0),r.addScaledVector(Mo,s.x),r.addScaledVector(So,s.y),r.addScaledVector(bo,s.z),r}static isFrontFacing(t,e,n,i){return pn.subVectors(n,e),Nn.subVectors(t,e),pn.cross(Nn).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return pn.subVectors(this.c,this.b),Nn.subVectors(this.a,this.b),pn.cross(Nn).length()*0.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(0.3333333333333333)}getNormal(t){return $e.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return $e.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,i,s){return $e.getInterpolation(t,this.a,this.b,this.c,e,n,i,s)}containsPoint(t){return $e.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return $e.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,i=this.b,s=this.c,r,a;qi.subVectors(i,n),Yi.subVectors(s,n),xo.subVectors(t,n);let o=qi.dot(xo),l=Yi.dot(xo);if(o<=0&&l<=0)return e.copy(n);yo.subVectors(t,i);let c=qi.dot(yo),u=Yi.dot(yo);if(c>=0&&u<=c)return e.copy(i);let d=o*u-c*l;if(d<=0&&o>=0&&c<=0)return r=o/(o-c),e.copy(n).addScaledVector(qi,r);vo.subVectors(t,s);let h=qi.dot(vo),p=Yi.dot(vo);if(p>=0&&h<=p)return e.copy(s);let _=h*l-o*p;if(_<=0&&l>=0&&p<=0)return a=l/(l-p),e.copy(n).addScaledVector(Yi,a);let S=c*p-h*u;if(S<=0&&u-c>=0&&h-p>=0)return Eh.subVectors(s,i),a=(u-c)/(u-c+(h-p)),e.copy(i).addScaledVector(Eh,a);let m=1/(S+_+d);return r=_*m,a=d*m,e.copy(n).addScaledVector(qi,r).addScaledVector(Yi,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}class Hn{constructor(t=new P(1/0,1/0,1/0),e=new P(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(mn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(mn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=mn.copy(e).multiplyScalar(0.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(0.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let s=n.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let r=0,a=s.count;r<a;r++){if(t.isMesh===!0)t.getVertexPosition(r,mn);else mn.fromBufferAttribute(s,r);mn.applyMatrix4(t.matrixWorld),this.expandByPoint(mn)}else{if(t.boundingBox!==void 0){if(t.boundingBox===null)t.computeBoundingBox();Cr.copy(t.boundingBox)}else{if(n.boundingBox===null)n.computeBoundingBox();Cr.copy(n.boundingBox)}Cr.applyMatrix4(t.matrixWorld),this.union(Cr)}}let i=t.children;for(let s=0,r=i.length;s<r;s++)this.expandByObject(i[s],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,mn),mn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;if(t.normal.x>0)e=t.normal.x*this.min.x,n=t.normal.x*this.max.x;else e=t.normal.x*this.max.x,n=t.normal.x*this.min.x;if(t.normal.y>0)e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y;else e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y;if(t.normal.z>0)e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z;else e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z;return e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Ds),Pr.subVectors(this.max,Ds),Zi.subVectors(t.a,Ds),$i.subVectors(t.b,Ds),Ji.subVectors(t.c,Ds),jn.subVectors($i,Zi),Qn.subVectors(Ji,$i),fi.subVectors(Zi,Ji);let e=[0,-jn.z,jn.y,0,-Qn.z,Qn.y,0,-fi.z,fi.y,jn.z,0,-jn.x,Qn.z,0,-Qn.x,fi.z,0,-fi.x,-jn.y,jn.x,0,-Qn.y,Qn.x,0,-fi.y,fi.x,0];if(!Eo(e,Zi,$i,Ji,Pr))return!1;if(e=[1,0,0,0,1,0,0,0,1],!Eo(e,Zi,$i,Ji,Pr))return!1;return Ir.crossVectors(jn,Qn),e=[Ir.x,Ir.y,Ir.z],Eo(e,Zi,$i,Ji,Pr)}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,mn).distanceTo(t)}getBoundingSphere(t){if(this.isEmpty())t.makeEmpty();else this.getCenter(t.center),t.radius=this.getSize(mn).length()*0.5;return t}intersect(t){if(this.min.max(t.min),this.max.min(t.max),this.isEmpty())this.makeEmpty();return this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){if(this.isEmpty())return this;return Fn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Fn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Fn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Fn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Fn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Fn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Fn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Fn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Fn),this}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}var Fn=[new P,new P,new P,new P,new P,new P,new P,new P],mn=new P,Cr=new Hn,Zi=new P,$i=new P,Ji=new P,jn=new P,Qn=new P,fi=new P,Ds=new P,Pr=new P,Ir=new P,pi=new P;function Eo(t,e,n,i,s){for(let r=0,a=t.length-3;r<=a;r+=3){pi.fromArray(t,r);let o=s.x*Math.abs(pi.x)+s.y*Math.abs(pi.y)+s.z*Math.abs(pi.z),l=e.dot(pi),c=n.dot(pi),u=i.dot(pi);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}var Le=new P,Lr=new tt,Wf=0;class Ke extends Rn{constructor(t,e,n=!1){super();if(Array.isArray(t))throw TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Wf++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=35044,this.updateRanges=[],this.gpuType=1015,this.version=0}onUploadCallback(){}set needsUpdate(t){if(t===!0)this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Lr.fromBufferAttribute(this,e),Lr.applyMatrix3(t),this.setXY(e,Lr.x,Lr.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Le.fromBufferAttribute(this,e),Le.applyMatrix3(t),this.setXYZ(e,Le.x,Le.y,Le.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Le.fromBufferAttribute(this,e),Le.applyMatrix4(t),this.setXYZ(e,Le.x,Le.y,Le.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Le.fromBufferAttribute(this,e),Le.applyNormalMatrix(t),this.setXYZ(e,Le.x,Le.y,Le.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Le.fromBufferAttribute(this,e),Le.transformDirection(t),this.setXYZ(e,Le.x,Le.y,Le.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];if(this.normalized)n=gn(n,this.array);return n}setComponent(t,e,n){if(this.normalized)n=oe(n,this.array);return this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];if(this.normalized)e=gn(e,this.array);return e}setX(t,e){if(this.normalized)e=oe(e,this.array);return this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];if(this.normalized)e=gn(e,this.array);return e}setY(t,e){if(this.normalized)e=oe(e,this.array);return this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];if(this.normalized)e=gn(e,this.array);return e}setZ(t,e){if(this.normalized)e=oe(e,this.array);return this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];if(this.normalized)e=gn(e,this.array);return e}setW(t,e){if(this.normalized)e=oe(e,this.array);return this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){if(t*=this.itemSize,this.normalized)e=oe(e,this.array),n=oe(n,this.array);return this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){if(t*=this.itemSize,this.normalized)e=oe(e,this.array),n=oe(n,this.array),i=oe(i,this.array);return this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,s){if(t*=this.itemSize,this.normalized)e=oe(e,this.array),n=oe(n,this.array),i=oe(i,this.array),s=oe(s,this.array);return this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};if(this.name!=="")t.name=this.name;if(this.usage!==35044)t.usage=this.usage;return t}dispose(){this.dispatchEvent({type:"dispose"})}}class ba extends Ke{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class Ea extends Ke{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class re extends Ke{constructor(t,e,n){super(new Float32Array(t),e,n)}}var Xf=new Hn,Ns=new P,To=new P;class si{constructor(t=new P,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;if(e!==void 0)n.copy(e);else Xf.setFromPoints(t).getCenter(n);let i=0;for(let s=0,r=t.length;s<r;s++)i=Math.max(i,n.distanceToSquared(t[s]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);if(e.copy(t),n>this.radius*this.radius)e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center);return e}getBoundingBox(t){if(this.isEmpty())return t.makeEmpty(),t;return t.set(this.center,this.center),t.expandByScalar(this.radius),t}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Ns.subVectors(t,this.center);let e=Ns.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),i=(n-this.radius)*0.5;this.center.addScaledVector(Ns,i/n),this.radius+=i}return this}union(t){if(t.isEmpty())return this;if(this.isEmpty())return this.copy(t),this;if(this.center.equals(t.center)===!0)this.radius=Math.max(this.radius,t.radius);else To.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Ns.copy(t.center).add(To)),this.expandByPoint(Ns.copy(t.center).sub(To));return this}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}var qf=0,an=new se,wo=new xe,Ki=new P,sn=new Hn,Us=new Hn,Oe=new P;class Pe extends Rn{constructor(){super();this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:qf++}),this.uuid=En(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){if(Array.isArray(t))this.index=new((gf(t))?Ea:ba)(t,1);else this.index=t;return this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;if(e!==void 0)e.applyMatrix4(t),e.needsUpdate=!0;let n=this.attributes.normal;if(n!==void 0){let s=new Ht().getNormalMatrix(t);n.applyNormalMatrix(s),n.needsUpdate=!0}let i=this.attributes.tangent;if(i!==void 0)i.transformDirection(t),i.needsUpdate=!0;if(this.boundingBox!==null)this.computeBoundingBox();if(this.boundingSphere!==null)this.computeBoundingSphere();return this._transformed=!0,this}applyQuaternion(t){return an.makeRotationFromQuaternion(t),this.applyMatrix4(an),this}rotateX(t){return an.makeRotationX(t),this.applyMatrix4(an),this}rotateY(t){return an.makeRotationY(t),this.applyMatrix4(an),this}rotateZ(t){return an.makeRotationZ(t),this.applyMatrix4(an),this}translate(t,e,n){return an.makeTranslation(t,e,n),this.applyMatrix4(an),this}scale(t,e,n){return an.makeScale(t,e,n),this.applyMatrix4(an),this}lookAt(t){return wo.lookAt(t),wo.updateMatrix(),this.applyMatrix4(wo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ki).negate(),this.translate(Ki.x,Ki.y,Ki.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let i=0,s=t.length;i<s;i++){let r=t[i];n.push(r.x,r.y,r.z||0)}this.setAttribute("position",new re(n,3))}else{let n=Math.min(t.length,e.count);for(let i=0;i<n;i++){let s=t[i];e.setXYZ(i,s.x,s.y,s.z||0)}if(t.length>e.count)Ut("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry.");e.needsUpdate=!0}return this}computeBoundingBox(){if(this.boundingBox===null)this.boundingBox=new Hn;let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Bt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new P(-1/0,-1/0,-1/0),new P(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){let s=e[n];if(sn.setFromBufferAttribute(s),this.morphTargetsRelative)Oe.addVectors(this.boundingBox.min,sn.min),this.boundingBox.expandByPoint(Oe),Oe.addVectors(this.boundingBox.max,sn.max),this.boundingBox.expandByPoint(Oe);else this.boundingBox.expandByPoint(sn.min),this.boundingBox.expandByPoint(sn.max)}}else this.boundingBox.makeEmpty();if(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))Bt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){if(this.boundingSphere===null)this.boundingSphere=new si;let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Bt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new P,1/0);return}if(t){let n=this.boundingSphere.center;if(sn.setFromBufferAttribute(t),e)for(let s=0,r=e.length;s<r;s++){let a=e[s];if(Us.setFromBufferAttribute(a),this.morphTargetsRelative)Oe.addVectors(sn.min,Us.min),sn.expandByPoint(Oe),Oe.addVectors(sn.max,Us.max),sn.expandByPoint(Oe);else sn.expandByPoint(Us.min),sn.expandByPoint(Us.max)}sn.getCenter(n);let i=0;for(let s=0,r=t.count;s<r;s++)Oe.fromBufferAttribute(t,s),i=Math.max(i,n.distanceToSquared(Oe));if(e)for(let s=0,r=e.length;s<r;s++){let a=e[s],o=this.morphTargetsRelative;for(let l=0,c=a.count;l<c;l++){if(Oe.fromBufferAttribute(a,l),o)Ki.fromBufferAttribute(t,l),Oe.add(Ki);i=Math.max(i,n.distanceToSquared(Oe))}}if(this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius))Bt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){Bt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let{position:n,normal:i,uv:s}=e,r=this.getAttribute("tangent");if(r===void 0||r.count!==n.count)r=new Ke(new Float32Array(4*n.count),4),this.setAttribute("tangent",r);let a=[],o=[];for(let R=0;R<n.count;R++)a[R]=new P,o[R]=new P;let l=new P,c=new P,u=new P,d=new tt,h=new tt,p=new tt,_=new P,S=new P;function m(R,g,M){l.fromBufferAttribute(n,R),c.fromBufferAttribute(n,g),u.fromBufferAttribute(n,M),d.fromBufferAttribute(s,R),h.fromBufferAttribute(s,g),p.fromBufferAttribute(s,M),c.sub(l),u.sub(l),h.sub(d),p.sub(d);let U=1/(h.x*p.y-p.x*h.y);if(!isFinite(U))return;_.copy(c).multiplyScalar(p.y).addScaledVector(u,-h.y).multiplyScalar(U),S.copy(u).multiplyScalar(h.x).addScaledVector(c,-p.x).multiplyScalar(U),a[R].add(_),a[g].add(_),a[M].add(_),o[R].add(S),o[g].add(S),o[M].add(S)}let f=this.groups;if(f.length===0)f=[{start:0,count:t.count}];for(let R=0,g=f.length;R<g;++R){let M=f[R],{start:U,count:C}=M;for(let k=U,q=U+C;k<q;k+=3)m(t.getX(k+0),t.getX(k+1),t.getX(k+2))}let w=new P,b=new P,x=new P,T=new P;function A(R){x.fromBufferAttribute(i,R),T.copy(x);let g=a[R];w.copy(g),w.sub(x.multiplyScalar(x.dot(g))).normalize(),b.crossVectors(T,g);let U=b.dot(o[R])<0?-1:1;r.setXYZW(R,w.x,w.y,w.z,U)}for(let R=0,g=f.length;R<g;++R){let M=f[R],{start:U,count:C}=M;for(let k=U,q=U+C;k<q;k+=3)A(t.getX(k+0)),A(t.getX(k+1)),A(t.getX(k+2))}this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==e.count)n=new Ke(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,h=n.count;d<h;d++)n.setXYZ(d,0,0,0);let i=new P,s=new P,r=new P,a=new P,o=new P,l=new P,c=new P,u=new P;if(t)for(let d=0,h=t.count;d<h;d+=3){let p=t.getX(d+0),_=t.getX(d+1),S=t.getX(d+2);i.fromBufferAttribute(e,p),s.fromBufferAttribute(e,_),r.fromBufferAttribute(e,S),c.subVectors(r,s),u.subVectors(i,s),c.cross(u),a.fromBufferAttribute(n,p),o.fromBufferAttribute(n,_),l.fromBufferAttribute(n,S),a.add(c),o.add(c),l.add(c),n.setXYZ(p,a.x,a.y,a.z),n.setXYZ(_,o.x,o.y,o.z),n.setXYZ(S,l.x,l.y,l.z)}else for(let d=0,h=e.count;d<h;d+=3)i.fromBufferAttribute(e,d+0),s.fromBufferAttribute(e,d+1),r.fromBufferAttribute(e,d+2),c.subVectors(r,s),u.subVectors(i,s),c.cross(u),n.setXYZ(d+0,c.x,c.y,c.z),n.setXYZ(d+1,c.x,c.y,c.z),n.setXYZ(d+2,c.x,c.y,c.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Oe.fromBufferAttribute(t,e),Oe.normalize(),t.setXYZ(e,Oe.x,Oe.y,Oe.z)}toNonIndexed(){function t(a,o){let{array:l,itemSize:c,normalized:u}=a,d=new l.constructor(o.length*c),h=0,p=0;for(let _=0,S=o.length;_<S;_++){if(a.isInterleavedBufferAttribute)h=o[_]*a.data.stride+a.offset;else h=o[_]*c;for(let m=0;m<c;m++)d[p++]=l[h++]}return new Ke(d,c,u)}if(this.index===null)return Ut("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new Pe,n=this.index.array,i=this.attributes;for(let a in i){let o=i[a],l=t(o,n);e.setAttribute(a,l)}let s=this.morphAttributes;for(let a in s){let o=[],l=s[a];for(let c=0,u=l.length;c<u;c++){let d=l[c],h=t(d,n);o.push(h)}e.morphAttributes[a]=o}e.morphTargetsRelative=this.morphTargetsRelative;let r=this.groups;for(let a=0,o=r.length;a<o;a++){let l=r[a];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,this.name!=="")t.name=this.name;if(Object.keys(this.userData).length>0)t.userData=this.userData;if(this.parameters!==void 0&&this._transformed!==!0){let o=this.parameters;for(let l in o)if(o[l]!==void 0)t[l]=o[l];return t}t.data={attributes:{}};let e=this.index;if(e!==null)t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)};let n=this.attributes;for(let o in n){let l=n[o];t.data.attributes[o]=l.toJSON(t.data)}let i={},s=!1;for(let o in this.morphAttributes){let l=this.morphAttributes[o],c=[];for(let u=0,d=l.length;u<d;u++){let h=l[u];c.push(h.toJSON(t.data))}if(c.length>0)i[o]=c,s=!0}if(s)t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative;let r=this.groups;if(r.length>0)t.data.groups=JSON.parse(JSON.stringify(r));let a=this.boundingSphere;if(a!==null)t.data.boundingSphere=a.toJSON();return t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;if(n!==null)this.setIndex(n.clone());let i=t.attributes;for(let l in i){let c=i[l];this.setAttribute(l,c.clone(e))}let s=t.morphAttributes;for(let l in s){let c=[],u=s[l];for(let d=0,h=u.length;d<h;d++)c.push(u[d].clone(e));this.morphAttributes[l]=c}this.morphTargetsRelative=t.morphTargetsRelative;let r=t.groups;for(let l=0,c=r.length;l<c;l++){let u=r[l];this.addGroup(u.start,u.count,u.materialIndex)}let a=t.boundingBox;if(a!==null)this.boundingBox=a.clone();let o=t.boundingSphere;if(o!==null)this.boundingSphere=o.clone();return this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ql{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=35044,this.updateRanges=[],this.version=0,this.uuid=En()}onUploadCallback(){}set needsUpdate(t){if(t===!0)this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let i=0,s=this.stride;i<s;i++)this.array[t+i]=e.array[n+i];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){if(t.arrayBuffers===void 0)t.arrayBuffers={};if(this.array.buffer._uuid===void 0)this.array.buffer._uuid=En();if(t.arrayBuffers[this.array.buffer._uuid]===void 0)t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer;let e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){if(t.arrayBuffers===void 0)t.arrayBuffers={};if(this.array.buffer._uuid===void 0)this.array.buffer._uuid=En();if(t.arrayBuffers[this.array.buffer._uuid]===void 0)t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer));return{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}var qe=new P;class Zs{constructor(t,e,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)qe.fromBufferAttribute(this,e),qe.applyMatrix4(t),this.setXYZ(e,qe.x,qe.y,qe.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)qe.fromBufferAttribute(this,e),qe.applyNormalMatrix(t),this.setXYZ(e,qe.x,qe.y,qe.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)qe.fromBufferAttribute(this,e),qe.transformDirection(t),this.setXYZ(e,qe.x,qe.y,qe.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];if(this.normalized)n=gn(n,this.array);return n}setComponent(t,e,n){if(this.normalized)n=oe(n,this.array);return this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){if(this.normalized)e=oe(e,this.array);return this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){if(this.normalized)e=oe(e,this.array);return this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){if(this.normalized)e=oe(e,this.array);return this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){if(this.normalized)e=oe(e,this.array);return this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];if(this.normalized)e=gn(e,this.array);return e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];if(this.normalized)e=gn(e,this.array);return e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];if(this.normalized)e=gn(e,this.array);return e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];if(this.normalized)e=gn(e,this.array);return e}setXY(t,e,n){if(t=t*this.data.stride+this.offset,this.normalized)e=oe(e,this.array),n=oe(n,this.array);return this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,i){if(t=t*this.data.stride+this.offset,this.normalized)e=oe(e,this.array),n=oe(n,this.array),i=oe(i,this.array);return this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this}setXYZW(t,e,n,i,s){if(t=t*this.data.stride+this.offset,this.normalized)e=oe(e,this.array),n=oe(n,this.array),i=oe(i,this.array),s=oe(s,this.array);return this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this.data.array[t+3]=s,this}clone(t){if(t===void 0){Ys("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)e.push(this.data.array[i+s])}return new Ke(new this.array.constructor(e),this.itemSize,this.normalized)}else{if(t.interleavedBuffers===void 0)t.interleavedBuffers={};if(t.interleavedBuffers[this.data.uuid]===void 0)t.interleavedBuffers[this.data.uuid]=this.data.clone(t);return new Zs(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}}toJSON(t){if(t===void 0){Ys("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)e.push(this.data.array[i+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else{if(t.interleavedBuffers===void 0)t.interleavedBuffers={};if(t.interleavedBuffers[this.data.uuid]===void 0)t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t);return{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}}var Yf=0;class Vn extends Rn{constructor(){super();this.isMaterial=!0,Object.defineProperty(this,"id",{value:Yf++}),this.uuid=En(),this.name="",this.type="Material",this.blending=1,this.side=0,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=204,this.blendDst=205,this.blendEquation=100,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Yt(0,0,0),this.blendAlpha=0,this.depthFunc=3,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=519,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=7680,this.stencilZFail=7680,this.stencilZPass=7680,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){if(this._alphaTest>0!==t>0)this.version++;this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t===void 0)return;for(let e in t){let n=t[e];if(n===void 0){Ut(`Material: parameter '${e}' has value of undefined.`);continue}let i=this[e];if(i===void 0){Ut(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}if(i&&i.isColor)i.set(n);else if(i&&i.isVector2&&(n&&n.isVector2)||i&&i.isEuler&&(n&&n.isEuler)||i&&i.isVector3&&(n&&n.isVector3))i.copy(n);else this[e]=n}}toJSON(t){let e=t===void 0||typeof t==="string";if(e)t={textures:{},images:{}};let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};if(n.uuid=this.uuid,n.type=this.type,this.name!=="")n.name=this.name;if(this.color&&this.color.isColor)n.color=this.color.getHex();if(this.roughness!==void 0)n.roughness=this.roughness;if(this.metalness!==void 0)n.metalness=this.metalness;if(this.sheen!==void 0)n.sheen=this.sheen;if(this.sheenColor&&this.sheenColor.isColor)n.sheenColor=this.sheenColor.getHex();if(this.sheenRoughness!==void 0)n.sheenRoughness=this.sheenRoughness;if(this.emissive&&this.emissive.isColor)n.emissive=this.emissive.getHex();if(this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1)n.emissiveIntensity=this.emissiveIntensity;if(this.specular&&this.specular.isColor)n.specular=this.specular.getHex();if(this.specularIntensity!==void 0)n.specularIntensity=this.specularIntensity;if(this.specularColor&&this.specularColor.isColor)n.specularColor=this.specularColor.getHex();if(this.shininess!==void 0)n.shininess=this.shininess;if(this.clearcoat!==void 0)n.clearcoat=this.clearcoat;if(this.clearcoatRoughness!==void 0)n.clearcoatRoughness=this.clearcoatRoughness;if(this.clearcoatMap&&this.clearcoatMap.isTexture)n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid;if(this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture)n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid;if(this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture)n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray();if(this.sheenColorMap&&this.sheenColorMap.isTexture)n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid;if(this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture)n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid;if(this.dispersion!==void 0)n.dispersion=this.dispersion;if(this.iridescence!==void 0)n.iridescence=this.iridescence;if(this.iridescenceIOR!==void 0)n.iridescenceIOR=this.iridescenceIOR;if(this.iridescenceThicknessRange!==void 0)n.iridescenceThicknessRange=this.iridescenceThicknessRange;if(this.iridescenceMap&&this.iridescenceMap.isTexture)n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid;if(this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture)n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid;if(this.anisotropy!==void 0)n.anisotropy=this.anisotropy;if(this.anisotropyRotation!==void 0)n.anisotropyRotation=this.anisotropyRotation;if(this.anisotropyMap&&this.anisotropyMap.isTexture)n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid;if(this.map&&this.map.isTexture)n.map=this.map.toJSON(t).uuid;if(this.matcap&&this.matcap.isTexture)n.matcap=this.matcap.toJSON(t).uuid;if(this.alphaMap&&this.alphaMap.isTexture)n.alphaMap=this.alphaMap.toJSON(t).uuid;if(this.lightMap&&this.lightMap.isTexture)n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity;if(this.aoMap&&this.aoMap.isTexture)n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity;if(this.bumpMap&&this.bumpMap.isTexture)n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale;if(this.normalMap&&this.normalMap.isTexture)n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray();if(this.displacementMap&&this.displacementMap.isTexture)n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias;if(this.roughnessMap&&this.roughnessMap.isTexture)n.roughnessMap=this.roughnessMap.toJSON(t).uuid;if(this.metalnessMap&&this.metalnessMap.isTexture)n.metalnessMap=this.metalnessMap.toJSON(t).uuid;if(this.emissiveMap&&this.emissiveMap.isTexture)n.emissiveMap=this.emissiveMap.toJSON(t).uuid;if(this.specularMap&&this.specularMap.isTexture)n.specularMap=this.specularMap.toJSON(t).uuid;if(this.specularIntensityMap&&this.specularIntensityMap.isTexture)n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid;if(this.specularColorMap&&this.specularColorMap.isTexture)n.specularColorMap=this.specularColorMap.toJSON(t).uuid;if(this.envMap&&this.envMap.isTexture){if(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0)n.combine=this.combine}if(this.envMapRotation!==void 0)n.envMapRotation=this.envMapRotation.toArray();if(this.envMapIntensity!==void 0)n.envMapIntensity=this.envMapIntensity;if(this.reflectivity!==void 0)n.reflectivity=this.reflectivity;if(this.refractionRatio!==void 0)n.refractionRatio=this.refractionRatio;if(this.gradientMap&&this.gradientMap.isTexture)n.gradientMap=this.gradientMap.toJSON(t).uuid;if(this.transmission!==void 0)n.transmission=this.transmission;if(this.transmissionMap&&this.transmissionMap.isTexture)n.transmissionMap=this.transmissionMap.toJSON(t).uuid;if(this.thickness!==void 0)n.thickness=this.thickness;if(this.thicknessMap&&this.thicknessMap.isTexture)n.thicknessMap=this.thicknessMap.toJSON(t).uuid;if(this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0)n.attenuationDistance=this.attenuationDistance;if(this.attenuationColor!==void 0)n.attenuationColor=this.attenuationColor.getHex();if(this.size!==void 0)n.size=this.size;if(this.shadowSide!==null)n.shadowSide=this.shadowSide;if(this.sizeAttenuation!==void 0)n.sizeAttenuation=this.sizeAttenuation;if(this.blending!==1)n.blending=this.blending;if(this.side!==0)n.side=this.side;if(this.vertexColors===!0)n.vertexColors=!0;if(this.opacity<1)n.opacity=this.opacity;if(this.transparent===!0)n.transparent=!0;if(this.blendSrc!==204)n.blendSrc=this.blendSrc;if(this.blendDst!==205)n.blendDst=this.blendDst;if(this.blendEquation!==100)n.blendEquation=this.blendEquation;if(this.blendSrcAlpha!==null)n.blendSrcAlpha=this.blendSrcAlpha;if(this.blendDstAlpha!==null)n.blendDstAlpha=this.blendDstAlpha;if(this.blendEquationAlpha!==null)n.blendEquationAlpha=this.blendEquationAlpha;if(this.blendColor&&this.blendColor.isColor)n.blendColor=this.blendColor.getHex();if(this.blendAlpha!==0)n.blendAlpha=this.blendAlpha;if(this.depthFunc!==3)n.depthFunc=this.depthFunc;if(this.depthTest===!1)n.depthTest=this.depthTest;if(this.depthWrite===!1)n.depthWrite=this.depthWrite;if(this.colorWrite===!1)n.colorWrite=this.colorWrite;if(this.stencilWriteMask!==255)n.stencilWriteMask=this.stencilWriteMask;if(this.stencilFunc!==519)n.stencilFunc=this.stencilFunc;if(this.stencilRef!==0)n.stencilRef=this.stencilRef;if(this.stencilFuncMask!==255)n.stencilFuncMask=this.stencilFuncMask;if(this.stencilFail!==7680)n.stencilFail=this.stencilFail;if(this.stencilZFail!==7680)n.stencilZFail=this.stencilZFail;if(this.stencilZPass!==7680)n.stencilZPass=this.stencilZPass;if(this.stencilWrite===!0)n.stencilWrite=this.stencilWrite;if(this.rotation!==void 0&&this.rotation!==0)n.rotation=this.rotation;if(this.polygonOffset===!0)n.polygonOffset=!0;if(this.polygonOffsetFactor!==0)n.polygonOffsetFactor=this.polygonOffsetFactor;if(this.polygonOffsetUnits!==0)n.polygonOffsetUnits=this.polygonOffsetUnits;if(this.linewidth!==void 0&&this.linewidth!==1)n.linewidth=this.linewidth;if(this.dashSize!==void 0)n.dashSize=this.dashSize;if(this.gapSize!==void 0)n.gapSize=this.gapSize;if(this.scale!==void 0)n.scale=this.scale;if(this.dithering===!0)n.dithering=!0;if(this.alphaTest>0)n.alphaTest=this.alphaTest;if(this.alphaHash===!0)n.alphaHash=!0;if(this.alphaToCoverage===!0)n.alphaToCoverage=!0;if(this.premultipliedAlpha===!0)n.premultipliedAlpha=!0;if(this.forceSinglePass===!0)n.forceSinglePass=!0;if(this.allowOverride===!1)n.allowOverride=!1;if(this.wireframe===!0)n.wireframe=!0;if(this.wireframeLinewidth>1)n.wireframeLinewidth=this.wireframeLinewidth;if(this.wireframeLinecap!=="round")n.wireframeLinecap=this.wireframeLinecap;if(this.wireframeLinejoin!=="round")n.wireframeLinejoin=this.wireframeLinejoin;if(this.flatShading===!0)n.flatShading=!0;if(this.visible===!1)n.visible=!1;if(this.toneMapped===!1)n.toneMapped=!1;if(this.fog===!1)n.fog=!1;if(Object.keys(this.userData).length>0)n.userData=this.userData;function i(s){let r=[];for(let a in s){let o=s[a];delete o.metadata,r.push(o)}return r}if(e){let s=i(t.textures),r=i(t.images);if(s.length>0)n.textures=s;if(r.length>0)n.images=r}return n}fromJSON(t,e){if(t.uuid!==void 0)this.uuid=t.uuid;if(t.name!==void 0)this.name=t.name;if(t.color!==void 0&&this.color!==void 0)this.color.setHex(t.color);if(t.roughness!==void 0)this.roughness=t.roughness;if(t.metalness!==void 0)this.metalness=t.metalness;if(t.sheen!==void 0)this.sheen=t.sheen;if(t.sheenColor!==void 0)this.sheenColor=new Yt().setHex(t.sheenColor);if(t.sheenRoughness!==void 0)this.sheenRoughness=t.sheenRoughness;if(t.emissive!==void 0&&this.emissive!==void 0)this.emissive.setHex(t.emissive);if(t.specular!==void 0&&this.specular!==void 0)this.specular.setHex(t.specular);if(t.specularIntensity!==void 0)this.specularIntensity=t.specularIntensity;if(t.specularColor!==void 0&&this.specularColor!==void 0)this.specularColor.setHex(t.specularColor);if(t.shininess!==void 0)this.shininess=t.shininess;if(t.clearcoat!==void 0)this.clearcoat=t.clearcoat;if(t.clearcoatRoughness!==void 0)this.clearcoatRoughness=t.clearcoatRoughness;if(t.dispersion!==void 0)this.dispersion=t.dispersion;if(t.iridescence!==void 0)this.iridescence=t.iridescence;if(t.iridescenceIOR!==void 0)this.iridescenceIOR=t.iridescenceIOR;if(t.iridescenceThicknessRange!==void 0)this.iridescenceThicknessRange=t.iridescenceThicknessRange;if(t.transmission!==void 0)this.transmission=t.transmission;if(t.thickness!==void 0)this.thickness=t.thickness;if(t.attenuationDistance!==void 0)this.attenuationDistance=t.attenuationDistance;if(t.attenuationColor!==void 0&&this.attenuationColor!==void 0)this.attenuationColor.setHex(t.attenuationColor);if(t.anisotropy!==void 0)this.anisotropy=t.anisotropy;if(t.anisotropyRotation!==void 0)this.anisotropyRotation=t.anisotropyRotation;if(t.fog!==void 0)this.fog=t.fog;if(t.flatShading!==void 0)this.flatShading=t.flatShading;if(t.blending!==void 0)this.blending=t.blending;if(t.combine!==void 0)this.combine=t.combine;if(t.side!==void 0)this.side=t.side;if(t.shadowSide!==void 0)this.shadowSide=t.shadowSide;if(t.opacity!==void 0)this.opacity=t.opacity;if(t.transparent!==void 0)this.transparent=t.transparent;if(t.alphaTest!==void 0)this.alphaTest=t.alphaTest;if(t.alphaHash!==void 0)this.alphaHash=t.alphaHash;if(t.depthFunc!==void 0)this.depthFunc=t.depthFunc;if(t.depthTest!==void 0)this.depthTest=t.depthTest;if(t.depthWrite!==void 0)this.depthWrite=t.depthWrite;if(t.colorWrite!==void 0)this.colorWrite=t.colorWrite;if(t.blendSrc!==void 0)this.blendSrc=t.blendSrc;if(t.blendDst!==void 0)this.blendDst=t.blendDst;if(t.blendEquation!==void 0)this.blendEquation=t.blendEquation;if(t.blendSrcAlpha!==void 0)this.blendSrcAlpha=t.blendSrcAlpha;if(t.blendDstAlpha!==void 0)this.blendDstAlpha=t.blendDstAlpha;if(t.blendEquationAlpha!==void 0)this.blendEquationAlpha=t.blendEquationAlpha;if(t.blendColor!==void 0&&this.blendColor!==void 0)this.blendColor.setHex(t.blendColor);if(t.blendAlpha!==void 0)this.blendAlpha=t.blendAlpha;if(t.stencilWriteMask!==void 0)this.stencilWriteMask=t.stencilWriteMask;if(t.stencilFunc!==void 0)this.stencilFunc=t.stencilFunc;if(t.stencilRef!==void 0)this.stencilRef=t.stencilRef;if(t.stencilFuncMask!==void 0)this.stencilFuncMask=t.stencilFuncMask;if(t.stencilFail!==void 0)this.stencilFail=t.stencilFail;if(t.stencilZFail!==void 0)this.stencilZFail=t.stencilZFail;if(t.stencilZPass!==void 0)this.stencilZPass=t.stencilZPass;if(t.stencilWrite!==void 0)this.stencilWrite=t.stencilWrite;if(t.wireframe!==void 0)this.wireframe=t.wireframe;if(t.wireframeLinewidth!==void 0)this.wireframeLinewidth=t.wireframeLinewidth;if(t.wireframeLinecap!==void 0)this.wireframeLinecap=t.wireframeLinecap;if(t.wireframeLinejoin!==void 0)this.wireframeLinejoin=t.wireframeLinejoin;if(t.rotation!==void 0)this.rotation=t.rotation;if(t.linewidth!==void 0)this.linewidth=t.linewidth;if(t.dashSize!==void 0)this.dashSize=t.dashSize;if(t.gapSize!==void 0)this.gapSize=t.gapSize;if(t.scale!==void 0)this.scale=t.scale;if(t.polygonOffset!==void 0)this.polygonOffset=t.polygonOffset;if(t.polygonOffsetFactor!==void 0)this.polygonOffsetFactor=t.polygonOffsetFactor;if(t.polygonOffsetUnits!==void 0)this.polygonOffsetUnits=t.polygonOffsetUnits;if(t.dithering!==void 0)this.dithering=t.dithering;if(t.alphaToCoverage!==void 0)this.alphaToCoverage=t.alphaToCoverage;if(t.premultipliedAlpha!==void 0)this.premultipliedAlpha=t.premultipliedAlpha;if(t.forceSinglePass!==void 0)this.forceSinglePass=t.forceSinglePass;if(t.allowOverride!==void 0)this.allowOverride=t.allowOverride;if(t.visible!==void 0)this.visible=t.visible;if(t.toneMapped!==void 0)this.toneMapped=t.toneMapped;if(t.userData!==void 0)this.userData=t.userData;if(t.vertexColors!==void 0)if(typeof t.vertexColors==="number")this.vertexColors=t.vertexColors>0;else this.vertexColors=t.vertexColors;if(t.size!==void 0)this.size=t.size;if(t.sizeAttenuation!==void 0)this.sizeAttenuation=t.sizeAttenuation;if(t.map!==void 0)this.map=e[t.map]||null;if(t.matcap!==void 0)this.matcap=e[t.matcap]||null;if(t.alphaMap!==void 0)this.alphaMap=e[t.alphaMap]||null;if(t.bumpMap!==void 0)this.bumpMap=e[t.bumpMap]||null;if(t.bumpScale!==void 0)this.bumpScale=t.bumpScale;if(t.normalMap!==void 0)this.normalMap=e[t.normalMap]||null;if(t.normalMapType!==void 0)this.normalMapType=t.normalMapType;if(t.normalScale!==void 0){let n=t.normalScale;if(Array.isArray(n)===!1)n=[n,n];this.normalScale=new tt().fromArray(n)}if(t.displacementMap!==void 0)this.displacementMap=e[t.displacementMap]||null;if(t.displacementScale!==void 0)this.displacementScale=t.displacementScale;if(t.displacementBias!==void 0)this.displacementBias=t.displacementBias;if(t.roughnessMap!==void 0)this.roughnessMap=e[t.roughnessMap]||null;if(t.metalnessMap!==void 0)this.metalnessMap=e[t.metalnessMap]||null;if(t.emissiveMap!==void 0)this.emissiveMap=e[t.emissiveMap]||null;if(t.emissiveIntensity!==void 0)this.emissiveIntensity=t.emissiveIntensity;if(t.specularMap!==void 0)this.specularMap=e[t.specularMap]||null;if(t.specularIntensityMap!==void 0)this.specularIntensityMap=e[t.specularIntensityMap]||null;if(t.specularColorMap!==void 0)this.specularColorMap=e[t.specularColorMap]||null;if(t.envMap!==void 0)this.envMap=e[t.envMap]||null;if(t.envMapRotation!==void 0)this.envMapRotation.fromArray(t.envMapRotation);if(t.envMapIntensity!==void 0)this.envMapIntensity=t.envMapIntensity;if(t.reflectivity!==void 0)this.reflectivity=t.reflectivity;if(t.refractionRatio!==void 0)this.refractionRatio=t.refractionRatio;if(t.lightMap!==void 0)this.lightMap=e[t.lightMap]||null;if(t.lightMapIntensity!==void 0)this.lightMapIntensity=t.lightMapIntensity;if(t.aoMap!==void 0)this.aoMap=e[t.aoMap]||null;if(t.aoMapIntensity!==void 0)this.aoMapIntensity=t.aoMapIntensity;if(t.gradientMap!==void 0)this.gradientMap=e[t.gradientMap]||null;if(t.clearcoatMap!==void 0)this.clearcoatMap=e[t.clearcoatMap]||null;if(t.clearcoatRoughnessMap!==void 0)this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null;if(t.clearcoatNormalMap!==void 0)this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null;if(t.clearcoatNormalScale!==void 0)this.clearcoatNormalScale=new tt().fromArray(t.clearcoatNormalScale);if(t.iridescenceMap!==void 0)this.iridescenceMap=e[t.iridescenceMap]||null;if(t.iridescenceThicknessMap!==void 0)this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null;if(t.transmissionMap!==void 0)this.transmissionMap=e[t.transmissionMap]||null;if(t.thicknessMap!==void 0)this.thicknessMap=e[t.thicknessMap]||null;if(t.anisotropyMap!==void 0)this.anisotropyMap=e[t.anisotropyMap]||null;if(t.sheenColorMap!==void 0)this.sheenColorMap=e[t.sheenColorMap]||null;if(t.sheenRoughnessMap!==void 0)this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null;return this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let i=e.length;n=Array(i);for(let s=0;s!==i;++s)n[s]=e[s].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){if(t===!0)this.version++}}class _s extends Vn{constructor(t){super();this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Yt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}var ji,Fs=new P,Qi=new P,ts=new P,es=new tt,Os=new tt,$u=new se,Dr=new P,Bs=new P,Nr=new P,Th=new tt,Ao=new tt,wh=new tt;class or extends xe{constructor(t=new _s){super();if(this.isSprite=!0,this.type="Sprite",ji===void 0){ji=new Pe;let e=new Float32Array([-0.5,-0.5,0,0,0,0.5,-0.5,0,1,0,0.5,0.5,0,1,1,-0.5,0.5,0,0,1]),n=new ql(e,5);ji.setIndex([0,1,2,0,2,3]),ji.setAttribute("position",new Zs(n,3,0,!1)),ji.setAttribute("uv",new Zs(n,2,3,!1))}this.geometry=ji,this.material=t,this.center=new tt(0.5,0.5),this.count=1}raycast(t,e){if(t.camera===null)Bt('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.');if(Qi.setFromMatrixScale(this.matrixWorld),$u.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),ts.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1)Qi.multiplyScalar(-ts.z);let n=this.material.rotation,i,s;if(n!==0)s=Math.cos(n),i=Math.sin(n);let r=this.center;Ur(Dr.set(-0.5,-0.5,0),ts,r,Qi,i,s),Ur(Bs.set(0.5,-0.5,0),ts,r,Qi,i,s),Ur(Nr.set(0.5,0.5,0),ts,r,Qi,i,s),Th.set(0,0),Ao.set(1,0),wh.set(1,1);let a=t.ray.intersectTriangle(Dr,Bs,Nr,!1,Fs);if(a===null){if(Ur(Bs.set(-0.5,0.5,0),ts,r,Qi,i,s),Ao.set(0,1),a=t.ray.intersectTriangle(Dr,Nr,Bs,!1,Fs),a===null)return}let o=t.ray.origin.distanceTo(Fs);if(o<t.near||o>t.far)return;e.push({distance:o,point:Fs.clone(),uv:$e.getInterpolation(Fs,Dr,Bs,Nr,Th,Ao,wh,new tt),face:null,object:this})}copy(t,e){if(super.copy(t,e),t.center!==void 0)this.center.copy(t.center);return this.material=t.material,this}}function Ur(t,e,n,i,s,r){if(es.subVectors(t,n).addScalar(0.5).multiply(i),s!==void 0)Os.x=r*es.x-s*es.y,Os.y=s*es.x+r*es.y;else Os.copy(es);t.copy(e),t.x+=Os.x,t.y+=Os.y,t.applyMatrix4($u)}var On=new P,Ro=new P,Fr=new P,ti=new P,Co=new P,Or=new P,Po=new P;class wi{constructor(t=new P,e=new P(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,On)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);if(n<0)return e.copy(this.origin);return e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=On.subVectors(t,this.origin).dot(this.direction);if(e<0)return this.origin.distanceToSquared(t);return On.copy(this.origin).addScaledVector(this.direction,e),On.distanceToSquared(t)}distanceSqToSegment(t,e,n,i){Ro.copy(t).add(e).multiplyScalar(0.5),Fr.copy(e).sub(t).normalize(),ti.copy(this.origin).sub(Ro);let s=t.distanceTo(e)*0.5,r=-this.direction.dot(Fr),a=ti.dot(this.direction),o=-ti.dot(Fr),l=ti.lengthSq(),c=Math.abs(1-r*r),u,d,h,p;if(c>0)if(u=r*o-a,d=r*a-o,p=s*c,u>=0)if(d>=-p)if(d<=p){let _=1/c;u*=_,d*=_,h=u*(u+r*d+2*a)+d*(r*u+d+2*o)+l}else d=s,u=Math.max(0,-(r*d+a)),h=-u*u+d*(d+2*o)+l;else d=-s,u=Math.max(0,-(r*d+a)),h=-u*u+d*(d+2*o)+l;else if(d<=-p)u=Math.max(0,-(-r*s+a)),d=u>0?-s:Math.min(Math.max(-s,-o),s),h=-u*u+d*(d+2*o)+l;else if(d<=p)u=0,d=Math.min(Math.max(-s,-o),s),h=d*(d+2*o)+l;else u=Math.max(0,-(r*s+a)),d=u>0?s:Math.min(Math.max(-s,-o),s),h=-u*u+d*(d+2*o)+l;else d=r>0?-s:s,u=Math.max(0,-(r*d+a)),h=-u*u+d*(d+2*o)+l;if(n)n.copy(this.origin).addScaledVector(this.direction,u);if(i)i.copy(Ro).addScaledVector(Fr,d);return h}intersectSphere(t,e){On.subVectors(t.center,this.origin);let n=On.dot(this.direction),i=On.dot(On)-n*n,s=t.radius*t.radius;if(i>s)return null;let r=Math.sqrt(s-i),a=n-r,o=n+r;if(o<0)return null;if(a<0)return this.at(o,e);return this.at(a,e)}intersectsSphere(t){if(t.radius<0)return!1;return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0){if(t.distanceToPoint(this.origin)===0)return 0;return null}let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);if(n===null)return null;return this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);if(e===0)return!0;if(t.normal.dot(this.direction)*e<0)return!0;return!1}intersectBox(t,e){let n,i,s,r,a,o,l=1/this.direction.x,c=1/this.direction.y,u=1/this.direction.z,d=this.origin;if(l>=0)n=(t.min.x-d.x)*l,i=(t.max.x-d.x)*l;else n=(t.max.x-d.x)*l,i=(t.min.x-d.x)*l;if(c>=0)s=(t.min.y-d.y)*c,r=(t.max.y-d.y)*c;else s=(t.max.y-d.y)*c,r=(t.min.y-d.y)*c;if(n>r||s>i)return null;if(s>n||isNaN(n))n=s;if(r<i||isNaN(i))i=r;if(u>=0)a=(t.min.z-d.z)*u,o=(t.max.z-d.z)*u;else a=(t.max.z-d.z)*u,o=(t.min.z-d.z)*u;if(n>o||a>i)return null;if(a>n||n!==n)n=a;if(o<i||i!==i)i=o;if(i<0)return null;return this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,On)!==null}intersectTriangle(t,e,n,i,s){Co.subVectors(e,t),Or.subVectors(n,t),Po.crossVectors(Co,Or);let r=this.direction.dot(Po),a;if(r>0){if(i)return null;a=1}else if(r<0)a=-1,r=-r;else return null;ti.subVectors(this.origin,t);let o=a*this.direction.dot(Or.crossVectors(ti,Or));if(o<0)return null;let l=a*this.direction.dot(Co.cross(ti));if(l<0)return null;if(o+l>r)return null;let c=-a*ti.dot(Po);if(c<0)return null;return this.at(c/r,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class vn extends Vn{constructor(t){super();this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Yt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new zn,this.combine=0,this.reflectivity=1,this.refractionRatio=0.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}var Ah=new se,mi=new wi,Br=new si,Rh=new P,zr=new P,kr=new P,Gr=new P,Io=new P,Hr=new P,Ch=new P,Vr=new P;class Qt extends xe{constructor(t=new Pe,e=new vn){super();this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){if(super.copy(t,e),t.morphTargetInfluences!==void 0)this.morphTargetInfluences=t.morphTargetInfluences.slice();if(t.morphTargetDictionary!==void 0)this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary);return this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,r=i.length;s<r;s++){let a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(t,e){let n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,r=n.morphTargetsRelative;e.fromBufferAttribute(i,t);let a=this.morphTargetInfluences;if(s&&a){Hr.set(0,0,0);for(let o=0,l=s.length;o<l;o++){let c=a[o],u=s[o];if(c===0)continue;if(Io.fromBufferAttribute(u,t),r)Hr.addScaledVector(Io,c);else Hr.addScaledVector(Io.sub(e),c)}e.add(Hr)}return e}raycast(t,e){let n=this.geometry,i=this.material,s=this.matrixWorld;if(i===void 0)return;if(n.boundingSphere===null)n.computeBoundingSphere();if(Br.copy(n.boundingSphere),Br.applyMatrix4(s),mi.copy(t.ray).recast(t.near),Br.containsPoint(mi.origin)===!1){if(mi.intersectSphere(Br,Rh)===null)return;if(mi.origin.distanceToSquared(Rh)>(t.far-t.near)**2)return}if(Ah.copy(s).invert(),mi.copy(t.ray).applyMatrix4(Ah),n.boundingBox!==null){if(mi.intersectsBox(n.boundingBox)===!1)return}this._computeIntersections(t,e,mi)}_computeIntersections(t,e,n){let i,s=this.geometry,r=this.material,a=s.index,o=s.attributes.position,l=s.attributes.uv,c=s.attributes.uv1,u=s.attributes.normal,{groups:d,drawRange:h}=s;if(a!==null)if(Array.isArray(r))for(let p=0,_=d.length;p<_;p++){let S=d[p],m=r[S.materialIndex],f=Math.max(S.start,h.start),w=Math.min(a.count,Math.min(S.start+S.count,h.start+h.count));for(let b=f,x=w;b<x;b+=3){let T=a.getX(b),A=a.getX(b+1),R=a.getX(b+2);if(i=Wr(this,m,t,n,l,c,u,T,A,R),i)i.faceIndex=Math.floor(b/3),i.face.materialIndex=S.materialIndex,e.push(i)}}else{let p=Math.max(0,h.start),_=Math.min(a.count,h.start+h.count);for(let S=p,m=_;S<m;S+=3){let f=a.getX(S),w=a.getX(S+1),b=a.getX(S+2);if(i=Wr(this,r,t,n,l,c,u,f,w,b),i)i.faceIndex=Math.floor(S/3),e.push(i)}}else if(o!==void 0)if(Array.isArray(r))for(let p=0,_=d.length;p<_;p++){let S=d[p],m=r[S.materialIndex],f=Math.max(S.start,h.start),w=Math.min(o.count,Math.min(S.start+S.count,h.start+h.count));for(let b=f,x=w;b<x;b+=3){let T=b,A=b+1,R=b+2;if(i=Wr(this,m,t,n,l,c,u,T,A,R),i)i.faceIndex=Math.floor(b/3),i.face.materialIndex=S.materialIndex,e.push(i)}}else{let p=Math.max(0,h.start),_=Math.min(o.count,h.start+h.count);for(let S=p,m=_;S<m;S+=3){let f=S,w=S+1,b=S+2;if(i=Wr(this,r,t,n,l,c,u,f,w,b),i)i.faceIndex=Math.floor(S/3),e.push(i)}}}}function Zf(t,e,n,i,s,r,a,o){let l;if(e.side===1)l=i.intersectTriangle(a,r,s,!0,o);else l=i.intersectTriangle(s,r,a,e.side===0,o);if(l===null)return null;Vr.copy(o),Vr.applyMatrix4(t.matrixWorld);let c=n.ray.origin.distanceTo(Vr);if(c<n.near||c>n.far)return null;return{distance:c,point:Vr.clone(),object:t}}function Wr(t,e,n,i,s,r,a,o,l,c){t.getVertexPosition(o,zr),t.getVertexPosition(l,kr),t.getVertexPosition(c,Gr);let u=Zf(t,e,n,i,zr,kr,Gr,Ch);if(u){let d=new P;if($e.getBarycoord(Ch,zr,kr,Gr,d),s)u.uv=$e.getInterpolatedAttribute(s,o,l,c,d,new tt);if(r)u.uv1=$e.getInterpolatedAttribute(r,o,l,c,d,new tt);if(a){if(u.normal=$e.getInterpolatedAttribute(a,o,l,c,d,new P),u.normal.dot(i.direction)>0)u.normal.multiplyScalar(-1)}let h={a:o,b:l,c,normal:new P,materialIndex:0};$e.getNormal(zr,kr,Gr,h.normal),u.face=h,u.barycoord=d}return u}class Ta extends ze{constructor(t=null,e=1,n=1,i,s,r,a,o,l=1003,c=1003,u,d){super(null,r,a,o,l,c,i,s,u,d);this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ia extends Ke{constructor(t,e,n,i=1){super(t,e,n);this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}var ns=new se,Ph=new se,Xr=[],Ih=new Hn,$f=new se,zs=new Qt,ks=new si;class Ai extends Qt{constructor(t,e,n){super(t,e);this.isInstancedMesh=!0,this.instanceMatrix=new ia(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,$f)}computeBoundingBox(){let t=this.geometry,e=this.count;if(this.boundingBox===null)this.boundingBox=new Hn;if(t.boundingBox===null)t.computeBoundingBox();this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,ns),Ih.copy(t.boundingBox).applyMatrix4(ns),this.boundingBox.union(Ih)}computeBoundingSphere(){let t=this.geometry,e=this.count;if(this.boundingSphere===null)this.boundingSphere=new si;if(t.boundingSphere===null)t.computeBoundingSphere();this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,ns),ks.copy(t.boundingSphere).applyMatrix4(ns),this.boundingSphere.union(ks)}copy(t,e){if(super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null)this.morphTexture=t.morphTexture.clone();if(t.instanceColor!==null)this.instanceColor=t.instanceColor.clone();if(this.count=t.count,t.boundingBox!==null)this.boundingBox=t.boundingBox.clone();if(t.boundingSphere!==null)this.boundingSphere=t.boundingSphere.clone();return this}getColorAt(t,e){if(this.instanceColor===null)return e.setRGB(1,1,1);else return e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){return e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let n=e.morphTargetInfluences,i=this.morphTexture.source.data.data,s=n.length+1,r=t*s+1;for(let a=0;a<n.length;a++)n[a]=i[r+a]}raycast(t,e){let n=this.matrixWorld,i=this.count;if(zs.geometry=this.geometry,zs.material=this.material,zs.material===void 0)return;if(this.boundingSphere===null)this.computeBoundingSphere();if(ks.copy(this.boundingSphere),ks.applyMatrix4(n),t.ray.intersectsSphere(ks)===!1)return;for(let s=0;s<i;s++){this.getMatrixAt(s,ns),Ph.multiplyMatrices(n,ns),zs.matrixWorld=Ph,zs.raycast(t,Xr);for(let r=0,a=Xr.length;r<a;r++){let o=Xr[r];o.instanceId=s,o.object=this,e.push(o)}Xr.length=0}}setColorAt(t,e){if(this.instanceColor===null)this.instanceColor=new ia(new Float32Array(this.instanceMatrix.count*3).fill(1),3);return e.toArray(this.instanceColor.array,t*3),this}setMatrixAt(t,e){return e.toArray(this.instanceMatrix.array,t*16),this}setMorphAt(t,e){let n=e.morphTargetInfluences,i=n.length+1;if(this.morphTexture===null)this.morphTexture=new Ta(new Float32Array(i*this.count),i,this.count,1028,1015);let s=this.morphTexture.source.data.data,r=0;for(let l=0;l<n.length;l++)r+=n[l];let a=this.geometry.morphTargetsRelative?1:1-r,o=i*t;return s[o]=a,s.set(n,o+1),this}updateMorphTargets(){}dispose(){if(this.dispatchEvent({type:"dispose"}),this.morphTexture!==null)this.morphTexture.dispose(),this.morphTexture=null}}var Lo=new P,Jf=new P,Kf=new Ht;class Ye{constructor(t=new P(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let i=Lo.subVectors(n,e).cross(Jf.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,n=!0){let i=t.delta(Lo),s=this.normal.dot(i);if(s===0){if(this.distanceToPoint(t.start)===0)return e.copy(t.start);return null}let r=-(t.start.dot(this.normal)+this.constant)/s;if(n===!0&&(r<0||r>1))return null;return e.copy(t.start).addScaledVector(i,r)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||Kf.getNormalMatrix(t),i=this.coplanarPoint(Lo).applyMatrix4(t),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}var gi=new si,jf=new tt(0.5,0.5),qr=new P;class lr{constructor(t=new Ye,e=new Ye,n=new Ye,i=new Ye,s=new Ye,r=new Ye){this.planes=[t,e,n,i,s,r]}set(t,e,n,i,s,r){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(i),a[4].copy(s),a[5].copy(r),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=2000,n=!1){let i=this.planes,s=t.elements,r=s[0],a=s[1],o=s[2],l=s[3],c=s[4],u=s[5],d=s[6],h=s[7],p=s[8],_=s[9],S=s[10],m=s[11],f=s[12],w=s[13],b=s[14],x=s[15];if(i[0].setComponents(l-r,h-c,m-p,x-f).normalize(),i[1].setComponents(l+r,h+c,m+p,x+f).normalize(),i[2].setComponents(l+a,h+u,m+_,x+w).normalize(),i[3].setComponents(l-a,h-u,m-_,x-w).normalize(),n)i[4].setComponents(o,d,S,b).normalize(),i[5].setComponents(l-o,h-d,m-S,x-b).normalize();else if(i[4].setComponents(l-o,h-d,m-S,x-b).normalize(),e===2000)i[5].setComponents(l+o,h+d,m+S,x+b).normalize();else if(e===2001)i[5].setComponents(o,d,S,b).normalize();else throw Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0){if(t.boundingSphere===null)t.computeBoundingSphere();gi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld)}else{let e=t.geometry;if(e.boundingSphere===null)e.computeBoundingSphere();gi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(gi)}intersectsSprite(t){gi.center.set(0,0,0);let e=jf.distanceTo(t.center);return gi.radius=0.7071067811865476+e,gi.applyMatrix4(t.matrixWorld),this.intersectsSphere(gi)}intersectsSphere(t){let e=this.planes,n=t.center,i=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let i=e[n];if(qr.x=i.normal.x>0?t.max.x:t.min.x,qr.y=i.normal.y>0?t.max.y:t.min.y,qr.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(qr)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class xs extends Vn{constructor(t){super();this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Yt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}var sa=new P,ra=new P,Lh=new se,Gs=new wi,Yr=new si,Do=new P,Dh=new P;class cr extends xe{constructor(t=new Pe,e=new xs){super();this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[0];for(let i=1,s=e.count;i<s;i++)sa.fromBufferAttribute(e,i-1),ra.fromBufferAttribute(e,i),n[i]=n[i-1],n[i]+=sa.distanceTo(ra);t.setAttribute("lineDistance",new re(n,1))}else Ut("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){let n=this.geometry,i=this.matrixWorld,s=t.params.Line.threshold,r=n.drawRange;if(n.boundingSphere===null)n.computeBoundingSphere();if(Yr.copy(n.boundingSphere),Yr.applyMatrix4(i),Yr.radius+=s,t.ray.intersectsSphere(Yr)===!1)return;Lh.copy(i).invert(),Gs.copy(t.ray).applyMatrix4(Lh);let a=s/((this.scale.x+this.scale.y+this.scale.z)/3),o=a*a,l=this.isLineSegments?2:1,c=n.index,d=n.attributes.position;if(c!==null){let h=Math.max(0,r.start),p=Math.min(c.count,r.start+r.count);for(let _=h,S=p-1;_<S;_+=l){let m=c.getX(_),f=c.getX(_+1),w=Zr(this,t,Gs,o,m,f,_);if(w)e.push(w)}if(this.isLineLoop){let _=c.getX(p-1),S=c.getX(h),m=Zr(this,t,Gs,o,_,S,p-1);if(m)e.push(m)}}else{let h=Math.max(0,r.start),p=Math.min(d.count,r.start+r.count);for(let _=h,S=p-1;_<S;_+=l){let m=Zr(this,t,Gs,o,_,_+1,_);if(m)e.push(m)}if(this.isLineLoop){let _=Zr(this,t,Gs,o,p-1,h,p-1);if(_)e.push(_)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,r=i.length;s<r;s++){let a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function Zr(t,e,n,i,s,r,a){let o=t.geometry.attributes.position;if(sa.fromBufferAttribute(o,s),ra.fromBufferAttribute(o,r),n.distanceSqToSegment(sa,ra,Do,Dh)>i)return;Do.applyMatrix4(t.matrixWorld);let c=e.ray.origin.distanceTo(Do);if(c<e.near||c>e.far)return;return{distance:c,point:Dh.clone().applyMatrix4(t.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:t}}var Nh=new P,Uh=new P;class wa extends cr{constructor(t,e){super(t,e);this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[];for(let i=0,s=e.count;i<s;i+=2)Nh.fromBufferAttribute(e,i),Uh.fromBufferAttribute(e,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+Nh.distanceTo(Uh);t.setAttribute("lineDistance",new re(n,1))}else Ut("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Aa extends ze{constructor(t=[],e=301,n,i,s,r,a,o,l,c){super(t,e,n,i,s,r,a,o,l,c);this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class ys extends ze{constructor(t,e,n,i,s,r,a,o,l){super(t,e,n,i,s,r,a,o,l);this.isCanvasTexture=!0,this.needsUpdate=!0}}class ri extends ze{constructor(t,e,n=1014,i,s,r,a=1003,o=1003,l,c=1026,u=1){if(c!==1026&&c!==1027)throw Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let d={width:t,height:e,depth:u};super(d,i,s,r,a,o,c,n,l);this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new ir(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);if(this.compareFunction!==null)e.compareFunction=this.compareFunction;return e}}class Yl extends ri{constructor(t,e=1014,n=301,i,s,r=1003,a=1003,o,l=1026){let c={width:t,height:t,depth:1},u=[c,c,c,c,c,c];super(t,t,e,n,i,s,r,a,o,l);this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}}class Ra extends ze{constructor(t=null){super();this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class ve extends Pe{constructor(t=1,e=1,n=1,i=1,s=1,r=1){super();this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:s,depthSegments:r};let a=this;i=Math.floor(i),s=Math.floor(s),r=Math.floor(r);let o=[],l=[],c=[],u=[],d=0,h=0;p("z","y","x",-1,-1,n,e,t,r,s,0),p("z","y","x",1,-1,n,e,-t,r,s,1),p("x","z","y",1,1,t,n,e,i,r,2),p("x","z","y",1,-1,t,n,-e,i,r,3),p("x","y","z",1,-1,t,e,n,i,s,4),p("x","y","z",-1,-1,t,e,-n,i,s,5),this.setIndex(o),this.setAttribute("position",new re(l,3)),this.setAttribute("normal",new re(c,3)),this.setAttribute("uv",new re(u,2));function p(_,S,m,f,w,b,x,T,A,R,g){let M=b/A,U=x/R,C=b/2,k=x/2,q=T/2,F=A+1,W=R+1,V=0,O=0,K=new P;for(let st=0;st<W;st++){let ot=st*U-k;for(let At=0;At<F;At++){let Mt=At*M-C;K[_]=Mt*f,K[S]=ot*w,K[m]=q,l.push(K.x,K.y,K.z),K[_]=0,K[S]=0,K[m]=T>0?1:-1,c.push(K.x,K.y,K.z),u.push(At/A),u.push(1-st/R),V+=1}}for(let st=0;st<R;st++)for(let ot=0;ot<A;ot++){let At=d+ot+F*st,Mt=d+ot+F*(st+1),ce=d+(ot+1)+F*(st+1),ae=d+(ot+1)+F*st;o.push(At,Mt,ae),o.push(Mt,ce,ae),O+=6}a.addGroup(h,O,g),h+=O,d+=V}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ve(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}class ai extends Pe{constructor(t=1,e=1,n=1,i=32,s=1,r=!1,a=0,o=Math.PI*2){super();this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:i,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o};let l=this;i=Math.floor(i),s=Math.floor(s);let c=[],u=[],d=[],h=[],p=0,_=[],S=n/2,m=0;if(f(),r===!1){if(t>0)w(!0);if(e>0)w(!1)}this.setIndex(c),this.setAttribute("position",new re(u,3)),this.setAttribute("normal",new re(d,3)),this.setAttribute("uv",new re(h,2));function f(){let b=new P,x=new P,T=0,A=(e-t)/n;for(let R=0;R<=s;R++){let g=[],M=R/s,U=M*(e-t)+t;for(let C=0;C<=i;C++){let k=C/i,q=k*o+a,F=Math.sin(q),W=Math.cos(q);x.x=U*F,x.y=-M*n+S,x.z=U*W,u.push(x.x,x.y,x.z),b.set(F,A,W).normalize(),d.push(b.x,b.y,b.z),h.push(k,1-M),g.push(p++)}_.push(g)}for(let R=0;R<i;R++)for(let g=0;g<s;g++){let M=_[g][R],U=_[g+1][R],C=_[g+1][R+1],k=_[g][R+1];if(t>0||g!==0)c.push(M,U,k),T+=3;if(e>0||g!==s-1)c.push(U,C,k),T+=3}l.addGroup(m,T,0),m+=T}function w(b){let x=p,T=new tt,A=new P,R=0,g=b===!0?t:e,M=b===!0?1:-1;for(let C=1;C<=i;C++)u.push(0,S*M,0),d.push(0,M,0),h.push(0.5,0.5),p++;let U=p;for(let C=0;C<=i;C++){let q=C/i*o+a,F=Math.cos(q),W=Math.sin(q);A.x=g*W,A.y=S*M,A.z=g*F,u.push(A.x,A.y,A.z),d.push(0,M,0),T.x=F*0.5+0.5,T.y=W*0.5*M+0.5,h.push(T.x,T.y),p++}for(let C=0;C<i;C++){let k=x+C,q=U+C;if(b===!0)c.push(q,q+1,k);else c.push(q+1,q,k);R+=3}l.addGroup(m,R,b===!0?1:2),m+=R}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ai(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class vs extends ai{constructor(t=1,e=1,n=32,i=1,s=!1,r=0,a=Math.PI*2){super(0,t,e,n,i,s,r,a);this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:i,openEnded:s,thetaStart:r,thetaLength:a}}static fromJSON(t){return new vs(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Ca extends Pe{constructor(t=[],e=[],n=1,i=0){super();this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:i};let s=[],r=[];if(a(i),l(n),c(),this.setAttribute("position",new re(s,3)),this.setAttribute("normal",new re(s.slice(),3)),this.setAttribute("uv",new re(r,2)),i===0)this.computeVertexNormals();else this.normalizeNormals();function a(f){let w=new P,b=new P,x=new P;for(let T=0;T<e.length;T+=3)h(e[T+0],w),h(e[T+1],b),h(e[T+2],x),o(w,b,x,f)}function o(f,w,b,x){let T=x+1,A=[];for(let R=0;R<=T;R++){A[R]=[];let g=f.clone().lerp(b,R/T),M=w.clone().lerp(b,R/T),U=T-R;for(let C=0;C<=U;C++)if(C===0&&R===T)A[R][C]=g;else A[R][C]=g.clone().lerp(M,C/U)}for(let R=0;R<T;R++)for(let g=0;g<2*(T-R)-1;g++){let M=Math.floor(g/2);if(g%2===0)d(A[R][M+1]),d(A[R+1][M]),d(A[R][M]);else d(A[R][M+1]),d(A[R+1][M+1]),d(A[R+1][M])}}function l(f){let w=new P;for(let b=0;b<s.length;b+=3)w.x=s[b+0],w.y=s[b+1],w.z=s[b+2],w.normalize().multiplyScalar(f),s[b+0]=w.x,s[b+1]=w.y,s[b+2]=w.z}function c(){let f=new P;for(let w=0;w<s.length;w+=3){f.x=s[w+0],f.y=s[w+1],f.z=s[w+2];let b=S(f)/2/Math.PI+0.5,x=m(f)/Math.PI+0.5;r.push(b,1-x)}p(),u()}function u(){for(let f=0;f<r.length;f+=6){let w=r[f+0],b=r[f+2],x=r[f+4],T=Math.max(w,b,x),A=Math.min(w,b,x);if(T>0.9&&A<0.1){if(w<0.2)r[f+0]+=1;if(b<0.2)r[f+2]+=1;if(x<0.2)r[f+4]+=1}}}function d(f){s.push(f.x,f.y,f.z)}function h(f,w){let b=f*3;w.x=t[b+0],w.y=t[b+1],w.z=t[b+2]}function p(){let f=new P,w=new P,b=new P,x=new P,T=new tt,A=new tt,R=new tt;for(let g=0,M=0;g<s.length;g+=9,M+=6){f.set(s[g+0],s[g+1],s[g+2]),w.set(s[g+3],s[g+4],s[g+5]),b.set(s[g+6],s[g+7],s[g+8]),T.set(r[M+0],r[M+1]),A.set(r[M+2],r[M+3]),R.set(r[M+4],r[M+5]),x.copy(f).add(w).add(b).divideScalar(3);let U=S(x);_(T,M+0,f,U),_(A,M+2,w,U),_(R,M+4,b,U)}}function _(f,w,b,x){if(x<0&&f.x===1)r[w]=f.x-1;if(b.x===0&&b.z===0)r[w]=x/2/Math.PI+0.5}function S(f){return Math.atan2(f.z,-f.x)}function m(f){return Math.atan2(-f.y,Math.sqrt(f.x*f.x+f.z*f.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ca(t.vertices,t.indices,t.radius,t.detail)}}var $r=new P,Jr=new P,No=new P,Kr=new $e;class Pa extends Pe{constructor(t=null,e=1){super();if(this.type="EdgesGeometry",this.parameters={geometry:t,thresholdAngle:e},t!==null){let i=Math.pow(10,4),s=Math.cos(rs*e),r=t.getIndex(),a=t.getAttribute("position"),o=r?r.count:a.count,l=[0,0,0],c=["a","b","c"],u=[,,,],d={},h=[];for(let p=0;p<o;p+=3){if(r)l[0]=r.getX(p),l[1]=r.getX(p+1),l[2]=r.getX(p+2);else l[0]=p,l[1]=p+1,l[2]=p+2;let{a:_,b:S,c:m}=Kr;if(_.fromBufferAttribute(a,l[0]),S.fromBufferAttribute(a,l[1]),m.fromBufferAttribute(a,l[2]),Kr.getNormal(No),u[0]=`${Math.round(_.x*i)},${Math.round(_.y*i)},${Math.round(_.z*i)}`,u[1]=`${Math.round(S.x*i)},${Math.round(S.y*i)},${Math.round(S.z*i)}`,u[2]=`${Math.round(m.x*i)},${Math.round(m.y*i)},${Math.round(m.z*i)}`,u[0]===u[1]||u[1]===u[2]||u[2]===u[0])continue;for(let f=0;f<3;f++){let w=(f+1)%3,b=u[f],x=u[w],T=Kr[c[f]],A=Kr[c[w]],R=`${b}_${x}`,g=`${x}_${b}`;if(g in d&&d[g]){if(No.dot(d[g].normal)<=s)h.push(T.x,T.y,T.z),h.push(A.x,A.y,A.z);d[g]=null}else if(!(R in d))d[R]={index0:l[f],index1:l[w],normal:No.clone()}}}for(let p in d)if(d[p]){let{index0:_,index1:S}=d[p];$r.fromBufferAttribute(a,_),Jr.fromBufferAttribute(a,S),h.push($r.x,$r.y,$r.z),h.push(Jr.x,Jr.y,Jr.z)}this.setAttribute("position",new re(h,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}}class hn{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Ut("Curve: .getPoint() not implemented.")}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,i=this.getPoint(0),s=0;e.push(0);for(let r=1;r<=t;r++)n=this.getPoint(r/t),s+=n.distanceTo(i),e.push(s),i=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){let n=this.getLengths(),i=0,s=n.length,r;if(e)r=e;else r=t*n[s-1];let a=0,o=s-1,l;while(a<=o)if(i=Math.floor(a+(o-a)/2),l=n[i]-r,l<0)a=i+1;else if(l>0)o=i-1;else{o=i;break}if(i=o,n[i]===r)return i/(s-1);let c=n[i],d=n[i+1]-c,h=(r-c)/d;return(i+h)/(s-1)}getTangent(t,e){let i=t-0.0001,s=t+0.0001;if(i<0)i=0;if(s>1)s=1;let r=this.getPoint(i),a=this.getPoint(s),o=e||(r.isVector2?new tt:new P);return o.copy(a).sub(r).normalize(),o}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e=!1){let n=new P,i=[],s=[],r=[],a=new P,o=new se;for(let h=0;h<=t;h++){let p=h/t;i[h]=this.getTangentAt(p,new P)}s[0]=new P,r[0]=new P;let l=Number.MAX_VALUE,c=Math.abs(i[0].x),u=Math.abs(i[0].y),d=Math.abs(i[0].z);if(c<=l)l=c,n.set(1,0,0);if(u<=l)l=u,n.set(0,1,0);if(d<=l)n.set(0,0,1);a.crossVectors(i[0],n).normalize(),s[0].crossVectors(i[0],a),r[0].crossVectors(i[0],s[0]);for(let h=1;h<=t;h++){if(s[h]=s[h-1].clone(),r[h]=r[h-1].clone(),a.crossVectors(i[h-1],i[h]),a.length()>Number.EPSILON){a.normalize();let p=Math.acos(Zt(i[h-1].dot(i[h]),-1,1));s[h].applyMatrix4(o.makeRotationAxis(a,p))}r[h].crossVectors(i[h],s[h])}if(e===!0){let h=Math.acos(Zt(s[0].dot(s[t]),-1,1));if(h/=t,i[0].dot(a.crossVectors(s[0],s[t]))>0)h=-h;for(let p=1;p<=t;p++)s[p].applyMatrix4(o.makeRotationAxis(i[p],h*p)),r[p].crossVectors(i[p],s[p])}return{tangents:i,normals:s,binormals:r}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class hr extends hn{constructor(t=0,e=0,n=1,i=1,s=0,r=Math.PI*2,a=!1,o=0){super();this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=i,this.aStartAngle=s,this.aEndAngle=r,this.aClockwise=a,this.aRotation=o}getPoint(t,e=new tt){let n=e,i=Math.PI*2,s=this.aEndAngle-this.aStartAngle,r=Math.abs(s)<Number.EPSILON;while(s<0)s+=i;while(s>i)s-=i;if(s<Number.EPSILON)if(r)s=0;else s=i;if(this.aClockwise===!0&&!r)if(s===i)s=-i;else s=s-i;let a=this.aStartAngle+t*s,o=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let c=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=o-this.aX,h=l-this.aY;o=d*c-h*u+this.aX,l=d*u+h*c+this.aY}return n.set(o,l)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class Zl extends hr{constructor(t,e,n,i,s,r){super(t,e,n,n,i,s,r);this.isArcCurve=!0,this.type="ArcCurve"}}function $l(){let t=0,e=0,n=0,i=0;function s(r,a,o,l){t=r,e=o,n=-3*r+3*a-2*o-l,i=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){s(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,u,d){let h=(a-r)/c-(o-r)/(c+u)+(o-a)/u,p=(o-a)/u-(l-a)/(u+d)+(l-o)/d;h*=u,p*=u,s(a,o,h,p)},calc:function(r){let a=r*r,o=a*r;return t+e*r+n*a+i*o}}}var Fh=new P,Oh=new P,Uo=new $l,Fo=new $l,Oo=new $l;class Jl extends hn{constructor(t=[],e=!1,n="centripetal",i=0.5){super();this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=i}getPoint(t,e=new P){let n=e,i=this.points,s=i.length,r=(s-(this.closed?0:1))*t,a=Math.floor(r),o=r-a;if(this.closed)a+=a>0?0:(Math.floor(Math.abs(a)/s)+1)*s;else if(o===0&&a===s-1)a=s-2,o=1;let l,c;if(this.closed||a>0)l=i[(a-1)%s];else Oh.subVectors(i[0],i[1]).add(i[0]),l=Oh;let u=i[a%s],d=i[(a+1)%s];if(this.closed||a+2<s)c=i[(a+2)%s];else Fh.subVectors(i[s-1],i[s-2]).add(i[s-1]),c=Fh;if(this.curveType==="centripetal"||this.curveType==="chordal"){let h=this.curveType==="chordal"?0.5:0.25,p=Math.pow(l.distanceToSquared(u),h),_=Math.pow(u.distanceToSquared(d),h),S=Math.pow(d.distanceToSquared(c),h);if(_<0.0001)_=1;if(p<0.0001)p=_;if(S<0.0001)S=_;Uo.initNonuniformCatmullRom(l.x,u.x,d.x,c.x,p,_,S),Fo.initNonuniformCatmullRom(l.y,u.y,d.y,c.y,p,_,S),Oo.initNonuniformCatmullRom(l.z,u.z,d.z,c.z,p,_,S)}else if(this.curveType==="catmullrom")Uo.initCatmullRom(l.x,u.x,d.x,c.x,this.tension),Fo.initCatmullRom(l.y,u.y,d.y,c.y,this.tension),Oo.initCatmullRom(l.z,u.z,d.z,c.z,this.tension);return n.set(Uo.calc(o),Fo.calc(o),Oo.calc(o)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(i.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let i=this.points[e];t.points.push(i.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(new P().fromArray(i))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function Bh(t,e,n,i,s){let r=(i-e)*0.5,a=(s-n)*0.5,o=t*t,l=t*o;return(2*n-2*i+r+a)*l+(-3*n+3*i-2*r-a)*o+r*t+n}function Qf(t,e){let n=1-t;return n*n*e}function tp(t,e){return 2*(1-t)*t*e}function ep(t,e){return t*t*e}function Ws(t,e,n,i){return Qf(t,e)+tp(t,n)+ep(t,i)}function np(t,e){let n=1-t;return n*n*n*e}function ip(t,e){let n=1-t;return 3*n*n*t*e}function sp(t,e){return 3*(1-t)*t*t*e}function rp(t,e){return t*t*t*e}function Xs(t,e,n,i,s){return np(t,e)+ip(t,n)+sp(t,i)+rp(t,s)}class Ia extends hn{constructor(t=new tt,e=new tt,n=new tt,i=new tt){super();this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new tt){let n=e,i=this.v0,s=this.v1,r=this.v2,a=this.v3;return n.set(Xs(t,i.x,s.x,r.x,a.x),Xs(t,i.y,s.y,r.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Kl extends hn{constructor(t=new P,e=new P,n=new P,i=new P){super();this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new P){let n=e,i=this.v0,s=this.v1,r=this.v2,a=this.v3;return n.set(Xs(t,i.x,s.x,r.x,a.x),Xs(t,i.y,s.y,r.y,a.y),Xs(t,i.z,s.z,r.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class La extends hn{constructor(t=new tt,e=new tt){super();this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new tt){let n=e;if(t===1)n.copy(this.v2);else n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1);return n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new tt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class jl extends hn{constructor(t=new P,e=new P){super();this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new P){let n=e;if(t===1)n.copy(this.v2);else n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1);return n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new P){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Da extends hn{constructor(t=new tt,e=new tt,n=new tt){super();this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new tt){let n=e,i=this.v0,s=this.v1,r=this.v2;return n.set(Ws(t,i.x,s.x,r.x),Ws(t,i.y,s.y,r.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Ql extends hn{constructor(t=new P,e=new P,n=new P){super();this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new P){let n=e,i=this.v0,s=this.v1,r=this.v2;return n.set(Ws(t,i.x,s.x,r.x),Ws(t,i.y,s.y,r.y),Ws(t,i.z,s.z,r.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Na extends hn{constructor(t=[]){super();this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new tt){let n=e,i=this.points,s=(i.length-1)*t,r=Math.floor(s),a=s-r,o=i[r===0?r:r-1],l=i[r],c=i[r>i.length-2?i.length-1:r+1],u=i[r>i.length-3?i.length-1:r+2];return n.set(Bh(a,o.x,l.x,c.x,u.x),Bh(a,o.y,l.y,c.y,u.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(i.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let i=this.points[e];t.points.push(i.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(new tt().fromArray(i))}return this}}var zo=Object.freeze({__proto__:null,ArcCurve:Zl,CatmullRomCurve3:Jl,CubicBezierCurve:Ia,CubicBezierCurve3:Kl,EllipseCurve:hr,LineCurve:La,LineCurve3:jl,QuadraticBezierCurve:Da,QuadraticBezierCurve3:Ql,SplineCurve:Na});class tc extends hn{constructor(){super();this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new zo[n](e,t))}return this}getPoint(t,e){let n=t*this.getLength(),i=this.getCurveLengths(),s=0;while(s<i.length){if(i[s]>=n){let r=i[s]-n,a=this.curves[s],o=a.getLength(),l=o===0?0:1-r/o;return a.getPointAt(l,e)}s++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let n=0,i=this.curves.length;n<i;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));if(this.autoClose)e.push(e[0]);return e}getPoints(t=12){let e=[],n;for(let i=0,s=this.curves;i<s.length;i++){let r=s[i],a=r.isEllipseCurve?t*2:r.isLineCurve||r.isLineCurve3?1:r.isSplineCurve?t*r.points.length:t,o=r.getPoints(a);for(let l=0;l<o.length;l++){let c=o[l];if(n&&n.equals(c))continue;e.push(c),n=c}}if(this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0]))e.push(e[0]);return e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let i=t.curves[e];this.curves.push(i.clone())}return this.autoClose=t.autoClose,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){let i=this.curves[e];t.curves.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let i=t.curves[e];this.curves.push(new zo[i.type]().fromJSON(i))}return this}}class aa extends tc{constructor(t){super();if(this.type="Path",this.currentPoint=new tt,t)this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let n=new La(this.currentPoint.clone(),new tt(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,i){let s=new Da(this.currentPoint.clone(),new tt(t,e),new tt(n,i));return this.curves.push(s),this.currentPoint.set(n,i),this}bezierCurveTo(t,e,n,i,s,r){let a=new Ia(this.currentPoint.clone(),new tt(t,e),new tt(n,i),new tt(s,r));return this.curves.push(a),this.currentPoint.set(s,r),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),n=new Na(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,i,s,r){let a=this.currentPoint.x,o=this.currentPoint.y;return this.absarc(t+a,e+o,n,i,s,r),this}absarc(t,e,n,i,s,r){return this.absellipse(t,e,n,n,i,s,r),this}ellipse(t,e,n,i,s,r,a,o){let l=this.currentPoint.x,c=this.currentPoint.y;return this.absellipse(t+l,e+c,n,i,s,r,a,o),this}absellipse(t,e,n,i,s,r,a,o){let l=new hr(t,e,n,i,s,r,a,o);if(this.curves.length>0){let u=l.getPoint(0);if(!u.equals(this.currentPoint))this.lineTo(u.x,u.y)}this.curves.push(l);let c=l.getPoint(1);return this.currentPoint.copy(c),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class ur extends aa{constructor(t){super(t);this.uuid=En(),this.type="Shape",this.holes=[]}getPointsHoles(t){let e=[];for(let n=0,i=this.holes.length;n<i;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let i=t.holes[e];this.holes.push(i.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){let i=this.holes[e];t.holes.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let i=t.holes[e];this.holes.push(new aa().fromJSON(i))}return this}}function ap(t,e,n=2){let i=e&&e.length,s=i?e[0]*n:t.length,r=Ju(t,0,s,n,!0),a=[];if(!r||r.next===r.prev)return a;let o,l,c;if(i)r=up(t,e,r,n);if(t.length>80*n){o=t[0],l=t[1];let u=o,d=l;for(let h=n;h<s;h+=n){let p=t[h],_=t[h+1];if(p<o)o=p;if(_<l)l=_;if(p>u)u=p;if(_>d)d=_}c=Math.max(u-o,d-l),c=c!==0?32767/c:0}return $s(r,a,n,o,l,c,0),a}function Ju(t,e,n,i,s){let r;if(s===Sp(t,e,n,i)>0)for(let a=e;a<n;a+=i)r=zh(a/i|0,t[a],t[a+1],r);else for(let a=n-i;a>=e;a-=i)r=zh(a/i|0,t[a],t[a+1],r);if(r&&cs(r,r.next))Ks(r),r=r.next;return r}function yi(t,e){if(!t)return t;if(!e)e=t;let n=t,i;do if(i=!1,!n.steiner&&(cs(n,n.next)||be(n.prev,n,n.next)===0)){if(Ks(n),n=e=n.prev,n===n.next)break;i=!0}else n=n.next;while(i||n!==e);return e}function $s(t,e,n,i,s,r,a){if(!t)return;if(!a&&r)gp(t,i,s,r);let o=t;while(t.prev!==t.next){let l=t.prev,c=t.next;if(r?lp(t,i,s,r):op(t)){e.push(l.i,t.i,c.i),Ks(t),t=c.next,o=c.next;continue}if(t=c,t===o){if(!a)$s(yi(t),e,n,i,s,r,1);else if(a===1)t=cp(yi(t),e),$s(t,e,n,i,s,r,2);else if(a===2)hp(t,e,n,i,s,r);break}}}function op(t){let e=t.prev,n=t,i=t.next;if(be(e,n,i)>=0)return!1;let s=e.x,r=n.x,a=i.x,o=e.y,l=n.y,c=i.y,u=Math.min(s,r,a),d=Math.min(o,l,c),h=Math.max(s,r,a),p=Math.max(o,l,c),_=i.next;while(_!==e){if(_.x>=u&&_.x<=h&&_.y>=d&&_.y<=p&&Hs(s,o,r,l,a,c,_.x,_.y)&&be(_.prev,_,_.next)>=0)return!1;_=_.next}return!0}function lp(t,e,n,i){let s=t.prev,r=t,a=t.next;if(be(s,r,a)>=0)return!1;let o=s.x,l=r.x,c=a.x,u=s.y,d=r.y,h=a.y,p=Math.min(o,l,c),_=Math.min(u,d,h),S=Math.max(o,l,c),m=Math.max(u,d,h),f=ko(p,_,e,n,i),w=ko(S,m,e,n,i),{prevZ:b,nextZ:x}=t;while(b&&b.z>=f&&x&&x.z<=w){if(b.x>=p&&b.x<=S&&b.y>=_&&b.y<=m&&b!==s&&b!==a&&Hs(o,u,l,d,c,h,b.x,b.y)&&be(b.prev,b,b.next)>=0)return!1;if(b=b.prevZ,x.x>=p&&x.x<=S&&x.y>=_&&x.y<=m&&x!==s&&x!==a&&Hs(o,u,l,d,c,h,x.x,x.y)&&be(x.prev,x,x.next)>=0)return!1;x=x.nextZ}while(b&&b.z>=f){if(b.x>=p&&b.x<=S&&b.y>=_&&b.y<=m&&b!==s&&b!==a&&Hs(o,u,l,d,c,h,b.x,b.y)&&be(b.prev,b,b.next)>=0)return!1;b=b.prevZ}while(x&&x.z<=w){if(x.x>=p&&x.x<=S&&x.y>=_&&x.y<=m&&x!==s&&x!==a&&Hs(o,u,l,d,c,h,x.x,x.y)&&be(x.prev,x,x.next)>=0)return!1;x=x.nextZ}return!0}function cp(t,e){let n=t;do{let i=n.prev,s=n.next.next;if(!cs(i,s)&&ju(i,n,n.next,s)&&Js(i,s)&&Js(s,i))e.push(i.i,n.i,s.i),Ks(n),Ks(n.next),n=t=s;n=n.next}while(n!==t);return yi(n)}function hp(t,e,n,i,s,r){let a=t;do{let o=a.next.next;while(o!==a.prev){if(a.i!==o.i&&yp(a,o)){let l=Qu(a,o);a=yi(a,a.next),l=yi(l,l.next),$s(a,e,n,i,s,r,0),$s(l,e,n,i,s,r,0);return}o=o.next}a=a.next}while(a!==t)}function up(t,e,n,i){let s=[];for(let r=0,a=e.length;r<a;r++){let o=e[r]*i,l=r<a-1?e[r+1]*i:t.length,c=Ju(t,o,l,i,!1);if(c===c.next)c.steiner=!0;s.push(xp(c))}s.sort(dp);for(let r=0;r<s.length;r++)n=fp(s[r],n);return n}function dp(t,e){let n=t.x-e.x;if(n===0){if(n=t.y-e.y,n===0){let i=(t.next.y-t.y)/(t.next.x-t.x),s=(e.next.y-e.y)/(e.next.x-e.x);n=i-s}}return n}function fp(t,e){let n=pp(t,e);if(!n)return e;let i=Qu(n,t);return yi(i,i.next),yi(n,n.next)}function pp(t,e){let n=e,{x:i,y:s}=t,r=-1/0,a;if(cs(t,n))return n;do{if(cs(t,n.next))return n.next;else if(s<=n.y&&s>=n.next.y&&n.next.y!==n.y){let d=n.x+(s-n.y)*(n.next.x-n.x)/(n.next.y-n.y);if(d<=i&&d>r){if(r=d,a=n.x<n.next.x?n:n.next,d===i)return a}}n=n.next}while(n!==e);if(!a)return null;let o=a,l=a.x,c=a.y,u=1/0;n=a;do{if(i>=n.x&&n.x>=l&&i!==n.x&&Ku(s<c?i:r,s,l,c,s<c?r:i,s,n.x,n.y)){let d=Math.abs(s-n.y)/(i-n.x);if(Js(n,t)&&(d<u||d===u&&(n.x>a.x||n.x===a.x&&mp(a,n))))a=n,u=d}n=n.next}while(n!==o);return a}function mp(t,e){return be(t.prev,t,e.prev)<0&&be(e.next,t,t.next)<0}function gp(t,e,n,i){let s=t;do{if(s.z===0)s.z=ko(s.x,s.y,e,n,i);s.prevZ=s.prev,s.nextZ=s.next,s=s.next}while(s!==t);s.prevZ.nextZ=null,s.prevZ=null,_p(s)}function _p(t){let e,n=1;do{let i=t,s;t=null;let r=null;e=0;while(i){e++;let a=i,o=0;for(let c=0;c<n;c++)if(o++,a=a.nextZ,!a)break;let l=n;while(o>0||l>0&&a){if(o!==0&&(l===0||!a||i.z<=a.z))s=i,i=i.nextZ,o--;else s=a,a=a.nextZ,l--;if(r)r.nextZ=s;else t=s;s.prevZ=r,r=s}i=a}r.nextZ=null,n*=2}while(e>1);return t}function ko(t,e,n,i,s){return t=(t-n)*s|0,e=(e-i)*s|0,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,t|e<<1}function xp(t){let e=t,n=t;do{if(e.x<n.x||e.x===n.x&&e.y<n.y)n=e;e=e.next}while(e!==t);return n}function Ku(t,e,n,i,s,r,a,o){return(s-a)*(e-o)>=(t-a)*(r-o)&&(t-a)*(i-o)>=(n-a)*(e-o)&&(n-a)*(r-o)>=(s-a)*(i-o)}function Hs(t,e,n,i,s,r,a,o){return!(t===a&&e===o)&&Ku(t,e,n,i,s,r,a,o)}function yp(t,e){return t.next.i!==e.i&&t.prev.i!==e.i&&!vp(t,e)&&(Js(t,e)&&Js(e,t)&&Mp(t,e)&&(be(t.prev,t,e.prev)||be(t,e.prev,e))||cs(t,e)&&be(t.prev,t,t.next)>0&&be(e.prev,e,e.next)>0)}function be(t,e,n){return(e.y-t.y)*(n.x-e.x)-(e.x-t.x)*(n.y-e.y)}function cs(t,e){return t.x===e.x&&t.y===e.y}function ju(t,e,n,i){let s=Qr(be(t,e,n)),r=Qr(be(t,e,i)),a=Qr(be(n,i,t)),o=Qr(be(n,i,e));if(s!==r&&a!==o)return!0;if(s===0&&jr(t,n,e))return!0;if(r===0&&jr(t,i,e))return!0;if(a===0&&jr(n,t,i))return!0;if(o===0&&jr(n,e,i))return!0;return!1}function jr(t,e,n){return e.x<=Math.max(t.x,n.x)&&e.x>=Math.min(t.x,n.x)&&e.y<=Math.max(t.y,n.y)&&e.y>=Math.min(t.y,n.y)}function Qr(t){return t>0?1:t<0?-1:0}function vp(t,e){let n=t;do{if(n.i!==t.i&&n.next.i!==t.i&&n.i!==e.i&&n.next.i!==e.i&&ju(n,n.next,t,e))return!0;n=n.next}while(n!==t);return!1}function Js(t,e){return be(t.prev,t,t.next)<0?be(t,e,t.next)>=0&&be(t,t.prev,e)>=0:be(t,e,t.prev)<0||be(t,t.next,e)<0}function Mp(t,e){let n=t,i=!1,s=(t.x+e.x)/2,r=(t.y+e.y)/2;do{if(n.y>r!==n.next.y>r&&n.next.y!==n.y&&s<(n.next.x-n.x)*(r-n.y)/(n.next.y-n.y)+n.x)i=!i;n=n.next}while(n!==t);return i}function Qu(t,e){let n=Go(t.i,t.x,t.y),i=Go(e.i,e.x,e.y),s=t.next,r=e.prev;return t.next=e,e.prev=t,n.next=s,s.prev=n,i.next=n,n.prev=i,r.next=i,i.prev=r,i}function zh(t,e,n,i){let s=Go(t,e,n);if(!i)s.prev=s,s.next=s;else s.next=i.next,s.prev=i,i.next.prev=s,i.next=s;return s}function Ks(t){if(t.next.prev=t.prev,t.prev.next=t.next,t.prevZ)t.prevZ.nextZ=t.nextZ;if(t.nextZ)t.nextZ.prevZ=t.prevZ}function Go(t,e,n){return{i:t,x:e,y:n,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Sp(t,e,n,i){let s=0;for(let r=e,a=n-i;r<n;r+=i)s+=(t[a]-t[r])*(t[r+1]+t[a+1]),a=r;return s}class td{static triangulate(t,e,n=2){return ap(t,e,n)}}class _i{static area(t){let e=t.length,n=0;for(let i=e-1,s=0;s<e;i=s++)n+=t[i].x*t[s].y-t[s].x*t[i].y;return n*0.5}static isClockWise(t){return _i.area(t)<0}static triangulateShape(t,e){let n=[],i=[],s=[];kh(t),Gh(n,t);let r=t.length;e.forEach(kh);for(let o=0;o<e.length;o++)i.push(r),r+=e[o].length,Gh(n,e[o]);let a=td.triangulate(n,i);for(let o=0;o<a.length;o+=3)s.push(a.slice(o,o+3));return s}}function kh(t){let e=t.length;if(e>2&&t[e-1].equals(t[0]))t.pop()}function Gh(t,e){for(let n=0;n<e.length;n++)t.push(e[n].x),t.push(e[n].y)}class dr extends Pe{constructor(t=new ur([new tt(0.5,0.5),new tt(-0.5,0.5),new tt(-0.5,-0.5),new tt(0.5,-0.5)]),e={}){super();this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];let n=this,i=[],s=[];for(let a=0,o=t.length;a<o;a++){let l=t[a];r(l)}this.setAttribute("position",new re(i,3)),this.setAttribute("uv",new re(s,2)),this.computeVertexNormals();function r(a){let o=[],l=e.curveSegments!==void 0?e.curveSegments:12,c=e.steps!==void 0?e.steps:1,u=e.depth!==void 0?e.depth:1,d=e.bevelEnabled!==void 0?e.bevelEnabled:!0,h=e.bevelThickness!==void 0?e.bevelThickness:0.2,p=e.bevelSize!==void 0?e.bevelSize:h-0.1,_=e.bevelOffset!==void 0?e.bevelOffset:0,S=e.bevelSegments!==void 0?e.bevelSegments:3,m=e.extrudePath,f=e.UVGenerator!==void 0?e.UVGenerator:bp,w,b=!1,x,T,A,R;if(m){w=m.getSpacedPoints(c),b=!0,d=!1;let j=m.isCatmullRomCurve3?m.closed:!1;x=m.computeFrenetFrames(c,j),T=new P,A=new P,R=new P}if(!d)S=0,h=0,p=0,_=0;let g=a.extractPoints(l),{shape:M,holes:U}=g;if(!_i.isClockWise(M)){M=M.reverse();for(let j=0,it=U.length;j<it;j++){let nt=U[j];if(_i.isClockWise(nt))U[j]=nt.reverse()}}function k(j){let yt=j[0];for(let bt=1;bt<=j.length;bt++){let Pt=bt%j.length,Lt=j[Pt],Vt=Lt.x-yt.x,Wt=Lt.y-yt.y,I=Vt*Vt+Wt*Wt,me=Math.max(Math.abs(Lt.x),Math.abs(Lt.y),Math.abs(yt.x),Math.abs(yt.y)),jt=0.000000000000000000010000000000000001*me*me;if(I<=jt){j.splice(Pt,1),bt--;continue}yt=Lt}}k(M),U.forEach(k);let q=U.length,F=M;for(let j=0;j<q;j++){let it=U[j];M=M.concat(it)}function W(j,it,nt){if(!it)Bt("ExtrudeGeometry: vec does not exist");return j.clone().addScaledVector(it,nt)}let V=M.length;function O(j,it,nt){let yt,bt,Pt,Lt=j.x-it.x,Vt=j.y-it.y,Wt=nt.x-j.x,I=nt.y-j.y,me=Lt*Lt+Vt*Vt,jt=Lt*I-Vt*Wt;if(Math.abs(jt)>Number.EPSILON){let Jt=Math.sqrt(me),E=Math.sqrt(Wt*Wt+I*I),y=it.x-Vt/Jt,L=it.y+Lt/Jt,G=nt.x-I/E,Q=nt.y+Wt/E,rt=((G-y)*I-(Q-L)*Wt)/(Lt*I-Vt*Wt);yt=y+Lt*rt-j.x,bt=L+Vt*rt-j.y;let ut=yt*yt+bt*bt;if(ut<=2)return new tt(yt,bt);else Pt=Math.sqrt(ut/2)}else{let Jt=!1;if(Lt>Number.EPSILON){if(Wt>Number.EPSILON)Jt=!0}else if(Lt<-Number.EPSILON){if(Wt<-Number.EPSILON)Jt=!0}else if(Math.sign(Vt)===Math.sign(I))Jt=!0;if(Jt)yt=-Vt,bt=Lt,Pt=Math.sqrt(me);else yt=Lt,bt=Vt,Pt=Math.sqrt(me/2)}return new tt(yt/Pt,bt/Pt)}let K=[];for(let j=0,it=F.length,nt=it-1,yt=j+1;j<it;j++,nt++,yt++){if(nt===it)nt=0;if(yt===it)yt=0;K[j]=O(F[j],F[nt],F[yt])}let st=[],ot,At=K.concat();for(let j=0,it=q;j<it;j++){let nt=U[j];ot=[];for(let yt=0,bt=nt.length,Pt=bt-1,Lt=yt+1;yt<bt;yt++,Pt++,Lt++){if(Pt===bt)Pt=0;if(Lt===bt)Lt=0;ot[yt]=O(nt[yt],nt[Pt],nt[Lt])}st.push(ot),At=At.concat(ot)}let Mt;if(S===0)Mt=_i.triangulateShape(F,U);else{let j=[],it=[];for(let nt=0;nt<S;nt++){let yt=nt/S,bt=h*Math.cos(yt*Math.PI/2),Pt=p*Math.sin(yt*Math.PI/2)+_;for(let Lt=0,Vt=F.length;Lt<Vt;Lt++){let Wt=W(F[Lt],K[Lt],Pt);if(dt(Wt.x,Wt.y,-bt),yt===0)j.push(Wt)}for(let Lt=0,Vt=q;Lt<Vt;Lt++){let Wt=U[Lt];ot=st[Lt];let I=[];for(let me=0,jt=Wt.length;me<jt;me++){let Jt=W(Wt[me],ot[me],Pt);if(dt(Jt.x,Jt.y,-bt),yt===0)I.push(Jt)}if(yt===0)it.push(I)}}Mt=_i.triangulateShape(j,it)}let ce=Mt.length,ae=p+_;for(let j=0;j<V;j++){let it=d?W(M[j],At[j],ae):M[j];if(!b)dt(it.x,it.y,0);else A.copy(x.normals[0]).multiplyScalar(it.x),T.copy(x.binormals[0]).multiplyScalar(it.y),R.copy(w[0]).add(A).add(T),dt(R.x,R.y,R.z)}for(let j=1;j<=c;j++)for(let it=0;it<V;it++){let nt=d?W(M[it],At[it],ae):M[it];if(!b)dt(nt.x,nt.y,u/c*j);else A.copy(x.normals[j]).multiplyScalar(nt.x),T.copy(x.binormals[j]).multiplyScalar(nt.y),R.copy(w[j]).add(A).add(T),dt(R.x,R.y,R.z)}for(let j=S-1;j>=0;j--){let it=j/S,nt=h*Math.cos(it*Math.PI/2),yt=p*Math.sin(it*Math.PI/2)+_;for(let bt=0,Pt=F.length;bt<Pt;bt++){let Lt=W(F[bt],K[bt],yt);dt(Lt.x,Lt.y,u+nt)}for(let bt=0,Pt=U.length;bt<Pt;bt++){let Lt=U[bt];ot=st[bt];for(let Vt=0,Wt=Lt.length;Vt<Wt;Vt++){let I=W(Lt[Vt],ot[Vt],yt);if(!b)dt(I.x,I.y,u+nt);else dt(I.x,I.y+w[c-1].y,w[c-1].x+nt)}}}Z(),lt();function Z(){let j=i.length/3;if(d){let it=0,nt=V*it;for(let yt=0;yt<ce;yt++){let bt=Mt[yt];Ft(bt[2]+nt,bt[1]+nt,bt[0]+nt)}it=c+S*2,nt=V*it;for(let yt=0;yt<ce;yt++){let bt=Mt[yt];Ft(bt[0]+nt,bt[1]+nt,bt[2]+nt)}}else{for(let it=0;it<ce;it++){let nt=Mt[it];Ft(nt[2],nt[1],nt[0])}for(let it=0;it<ce;it++){let nt=Mt[it];Ft(nt[0]+V*c,nt[1]+V*c,nt[2]+V*c)}}n.addGroup(j,i.length/3-j,0)}function lt(){let j=i.length/3,it=0;St(F,it),it+=F.length;for(let nt=0,yt=U.length;nt<yt;nt++){let bt=U[nt];St(bt,it),it+=bt.length}n.addGroup(j,i.length/3-j,1)}function St(j,it){let nt=j.length;while(--nt>=0){let yt=nt,bt=nt-1;if(bt<0)bt=j.length-1;for(let Pt=0,Lt=c+S*2;Pt<Lt;Pt++){let Vt=V*Pt,Wt=V*(Pt+1),I=it+yt+Vt,me=it+bt+Vt,jt=it+bt+Wt,Jt=it+yt+Wt;ee(I,me,jt,Jt)}}}function dt(j,it,nt){o.push(j),o.push(it),o.push(nt)}function Ft(j,it,nt){kt(j),kt(it),kt(nt);let yt=i.length/3,bt=f.generateTopUV(n,i,yt-3,yt-2,yt-1);Gt(bt[0]),Gt(bt[1]),Gt(bt[2])}function ee(j,it,nt,yt){kt(j),kt(it),kt(yt),kt(it),kt(nt),kt(yt);let bt=i.length/3,Pt=f.generateSideWallUV(n,i,bt-6,bt-3,bt-2,bt-1);Gt(Pt[0]),Gt(Pt[1]),Gt(Pt[3]),Gt(Pt[1]),Gt(Pt[2]),Gt(Pt[3])}function kt(j){i.push(o[j*3+0]),i.push(o[j*3+1]),i.push(o[j*3+2])}function Gt(j){s.push(j.x),s.push(j.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return Ep(e,n,t)}static fromJSON(t,e){let n=[];for(let s=0,r=t.shapes.length;s<r;s++){let a=e[t.shapes[s]];n.push(a)}let i=t.options.extrudePath;if(i!==void 0)t.options.extrudePath=new zo[i.type]().fromJSON(i);return new dr(n,t.options)}}var bp={generateTopUV:function(t,e,n,i,s){let r=e[n*3],a=e[n*3+1],o=e[i*3],l=e[i*3+1],c=e[s*3],u=e[s*3+1];return[new tt(r,a),new tt(o,l),new tt(c,u)]},generateSideWallUV:function(t,e,n,i,s,r){let a=e[n*3],o=e[n*3+1],l=e[n*3+2],c=e[i*3],u=e[i*3+1],d=e[i*3+2],h=e[s*3],p=e[s*3+1],_=e[s*3+2],S=e[r*3],m=e[r*3+1],f=e[r*3+2];if(Math.abs(o-u)<Math.abs(a-c))return[new tt(a,1-l),new tt(c,1-d),new tt(h,1-_),new tt(S,1-f)];else return[new tt(o,1-l),new tt(u,1-d),new tt(p,1-_),new tt(m,1-f)]}};function Ep(t,e,n){if(n.shapes=[],Array.isArray(t))for(let i=0,s=t.length;i<s;i++){let r=t[i];n.shapes.push(r.uuid)}else n.shapes.push(t.uuid);if(n.options=Object.assign({},e),e.extrudePath!==void 0)n.options.extrudePath=e.extrudePath.toJSON();return n}class fr extends Ca{constructor(t=1,e=0){let n=(1+Math.sqrt(5))/2,i=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(i,s,t,e);this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new fr(t.radius,t.detail)}}class oi extends Pe{constructor(t=1,e=1,n=1,i=1){super();this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};let s=t/2,r=e/2,a=Math.floor(n),o=Math.floor(i),l=a+1,c=o+1,u=t/a,d=e/o,h=[],p=[],_=[],S=[];for(let m=0;m<c;m++){let f=m*d-r;for(let w=0;w<l;w++){let b=w*u-s;p.push(b,-f,0),_.push(0,0,1),S.push(w/a),S.push(1-m/o)}}for(let m=0;m<o;m++)for(let f=0;f<a;f++){let w=f+l*m,b=f+l*(m+1),x=f+1+l*(m+1),T=f+1+l*m;h.push(w,b,T),h.push(b,x,T)}this.setIndex(h),this.setAttribute("position",new re(p,3)),this.setAttribute("normal",new re(_,3)),this.setAttribute("uv",new re(S,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new oi(t.width,t.height,t.widthSegments,t.heightSegments)}}class pr extends Pe{constructor(t=0.5,e=1,n=32,i=1,s=0,r=Math.PI*2){super();this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:i,thetaStart:s,thetaLength:r},n=Math.max(3,n),i=Math.max(1,i);let a=[],o=[],l=[],c=[],u=t,d=(e-t)/i,h=new P,p=new tt;for(let _=0;_<=i;_++){for(let S=0;S<=n;S++){let m=s+S/n*r;h.x=u*Math.cos(m),h.y=u*Math.sin(m),o.push(h.x,h.y,h.z),l.push(0,0,1),p.x=(h.x/e+1)/2,p.y=(h.y/e+1)/2,c.push(p.x,p.y)}u+=d}for(let _=0;_<i;_++){let S=_*(n+1);for(let m=0;m<n;m++){let f=m+S,w=f,b=f+n+1,x=f+n+2,T=f+1;a.push(w,b,T),a.push(b,x,T)}}this.setIndex(a),this.setAttribute("position",new re(o,3)),this.setAttribute("normal",new re(l,3)),this.setAttribute("uv",new re(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new pr(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class Ms extends Pe{constructor(t=1,e=32,n=16,i=0,s=Math.PI*2,r=0,a=Math.PI){super();this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:i,phiLength:s,thetaStart:r,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let o=Math.min(r+a,Math.PI),l=0,c=[],u=new P,d=new P,h=[],p=[],_=[],S=[];for(let m=0;m<=n;m++){let f=[],w=m/n,b=r+w*a,x=t*Math.cos(b),T=Math.sqrt(t*t-x*x),A=0;if(m===0&&r===0)A=0.5/e;else if(m===n&&o===Math.PI)A=-0.5/e;for(let R=0;R<=e;R++){let g=R/e,M=i+g*s;u.x=-T*Math.cos(M),u.y=x,u.z=T*Math.sin(M),p.push(u.x,u.y,u.z),d.copy(u).normalize(),_.push(d.x,d.y,d.z),S.push(g+A,1-w),f.push(l++)}c.push(f)}for(let m=0;m<n;m++)for(let f=0;f<e;f++){let w=c[m][f+1],b=c[m][f],x=c[m+1][f],T=c[m+1][f+1];if(m!==0||r>0)h.push(w,b,T);if(m!==n-1||o<Math.PI)h.push(b,x,T)}this.setIndex(h),this.setAttribute("position",new re(p,3)),this.setAttribute("normal",new re(_,3)),this.setAttribute("uv",new re(S,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ms(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}function Ri(t){let e={};for(let n in t){e[n]={};for(let i in t[n]){let s=t[n][i];if(Hh(s))if(s.isRenderTargetTexture)Ut("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null;else e[n][i]=s.clone();else if(Array.isArray(s))if(Hh(s[0])){let r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();e[n][i]=r}else e[n][i]=s.slice();else e[n][i]=s}}return e}function Xe(t){let e={};for(let n=0;n<t.length;n++){let i=Ri(t[n]);for(let s in i)e[s]=i[s]}return e}function Hh(t){return t&&(t.isColor||t.isMatrix3||t.isMatrix4||t.isVector2||t.isVector3||t.isVector4||t.isTexture||t.isQuaternion)}function Tp(t){let e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function ec(t){let e=t.getRenderTarget();if(e===null)return t.outputColorSpace;if(e.isXRRenderTarget===!0)return e.texture.colorSpace;return te.workingColorSpace}var ed={clone:Ri,merge:Xe},wp=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Ap=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class un extends Vn{constructor(t){super();if(this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=wp,this.fragmentShader=Ap,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0)this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Ri(t.uniforms),this.uniformsGroups=Tp(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let i in this.uniforms){let r=this.uniforms[i].value;if(r&&r.isTexture)e.uniforms[i]={type:"t",value:r.toJSON(t).uuid};else if(r&&r.isColor)e.uniforms[i]={type:"c",value:r.getHex()};else if(r&&r.isVector2)e.uniforms[i]={type:"v2",value:r.toArray()};else if(r&&r.isVector3)e.uniforms[i]={type:"v3",value:r.toArray()};else if(r&&r.isVector4)e.uniforms[i]={type:"v4",value:r.toArray()};else if(r&&r.isMatrix3)e.uniforms[i]={type:"m3",value:r.toArray()};else if(r&&r.isMatrix4)e.uniforms[i]={type:"m4",value:r.toArray()};else e.uniforms[i]={value:r}}if(Object.keys(this.defines).length>0)e.defines=this.defines;e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let i in this.extensions)if(this.extensions[i]===!0)n[i]=!0;if(Object.keys(n).length>0)e.extensions=n;return e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let n in t.uniforms){let i=t.uniforms[n];switch(this.uniforms[n]={},i.type){case"t":this.uniforms[n].value=e[i.value]||null;break;case"c":this.uniforms[n].value=new Yt().setHex(i.value);break;case"v2":this.uniforms[n].value=new tt().fromArray(i.value);break;case"v3":this.uniforms[n].value=new P().fromArray(i.value);break;case"v4":this.uniforms[n].value=new ye().fromArray(i.value);break;case"m3":this.uniforms[n].value=new Ht().fromArray(i.value);break;case"m4":this.uniforms[n].value=new se().fromArray(i.value);break;default:this.uniforms[n].value=i.value}}if(t.defines!==void 0)this.defines=t.defines;if(t.vertexShader!==void 0)this.vertexShader=t.vertexShader;if(t.fragmentShader!==void 0)this.fragmentShader=t.fragmentShader;if(t.glslVersion!==void 0)this.glslVersion=t.glslVersion;if(t.extensions!==void 0)for(let n in t.extensions)this.extensions[n]=t.extensions[n];if(t.lights!==void 0)this.lights=t.lights;if(t.clipping!==void 0)this.clipping=t.clipping;return this}}class nc extends un{constructor(t){super(t);this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Ss extends Vn{constructor(t){super();this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Yt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Yt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new tt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new zn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class ic extends Vn{constructor(t){super();this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=3200,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class sc extends Vn{constructor(t){super();this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class Ua extends xs{constructor(t){super();this.isLineDashedMaterial=!0,this.type="LineDashedMaterial",this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(t)}copy(t){return super.copy(t),this.scale=t.scale,this.dashSize=t.dashSize,this.gapSize=t.gapSize,this}}function ta(t,e){if(!t||t.constructor===e)return t;if(typeof e.BYTES_PER_ELEMENT==="number")return new e(t);return Array.prototype.slice.call(t)}class Ci{constructor(t,e,n,i){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,i=e[n],s=e[n-1];n:{t:{let r;e:{i:if(!(t<i)){for(let a=n+2;;){if(i===void 0){if(t<s)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(s=i,i=e[++n],t<i)break t}r=e.length;break e}if(!(t>=s)){let a=e[1];if(t<a)n=2,s=a;for(let o=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===o)break;if(i=s,s=e[--n-1],t>=s)break t}r=n,n=0;break e}break n}while(n<r){let a=n+r>>>1;if(t<e[a])r=a;else n=a+1}if(i=e[n],s=e[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,i)}return this.interpolate_(n,s,t,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=t*i;for(let r=0;r!==i;++r)e[r]=n[s+r];return e}interpolate_(){throw Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}}class rc extends Ci{constructor(t,e,n,i){super(t,e,n,i);this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:2400,endingEnd:2400}}intervalChanged_(t,e,n){let i=this.parameterPositions,s=t-2,r=t+1,a=i[s],o=i[r];if(a===void 0)switch(this.getSettings_().endingStart){case 2401:s=t,a=2*e-n;break;case 2402:s=i.length-2,a=e+i[s]-i[s+1];break;default:s=t,a=n}if(o===void 0)switch(this.getSettings_().endingEnd){case 2401:r=t,o=2*n-e;break;case 2402:r=1,o=n+i[1]-i[0];break;default:r=t-1,o=e}let l=(n-e)*0.5,c=this.valueSize;this._weightPrev=l/(e-a),this._weightNext=l/(o-n),this._offsetPrev=s*c,this._offsetNext=r*c}interpolate_(t,e,n,i){let s=this.resultBuffer,r=this.sampleValues,a=this.valueSize,o=t*a,l=o-a,c=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,h=this._weightNext,p=(n-e)/(i-e),_=p*p,S=_*p,m=-d*S+2*d*_-d*p,f=(1+d)*S+(-1.5-2*d)*_+(-0.5+d)*p+1,w=(-1-h)*S+(1.5+h)*_+0.5*p,b=h*S-h*_;for(let x=0;x!==a;++x)s[x]=m*r[c+x]+f*r[l+x]+w*r[o+x]+b*r[u+x];return s}}class ac extends Ci{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){let s=this.resultBuffer,r=this.sampleValues,a=this.valueSize,o=t*a,l=o-a,c=(n-e)/(i-e),u=1-c;for(let d=0;d!==a;++d)s[d]=r[l+d]*u+r[o+d]*c;return s}}class oc extends Ci{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t){return this.copySampleValue_(t-1)}}class lc extends Ci{interpolate_(t,e,n,i){let s=this.resultBuffer,r=this.sampleValues,a=this.valueSize,o=t*a,l=o-a,c=this.inTangents,u=this.outTangents;if(!c||!u){let p=(n-e)/(i-e),_=1-p;for(let S=0;S!==a;++S)s[S]=r[l+S]*_+r[o+S]*p;return s}let d=a*2,h=t-1;for(let p=0;p!==a;++p){let _=r[l+p],S=r[o+p],m=h*d+p*2,f=u[m],w=u[m+1],b=t*d+p*2,x=c[b],T=c[b+1],A=(n-e)/(i-e),R,g,M,U,C;for(let k=0;k<8;k++){R=A*A,g=R*A,M=1-A,U=M*M,C=U*M;let F=C*e+3*U*A*f+3*M*R*x+g*i-n;if(Math.abs(F)<0.0000000001)break;let W=3*U*(f-e)+6*M*A*(x-f)+3*R*(i-x);if(Math.abs(W)<0.0000000001)break;A=A-F/W,A=Math.max(0,Math.min(1,A))}s[p]=C*_+3*U*A*w+3*M*R*T+g*S}return s}}class dn{constructor(t,e,n,i){if(t===void 0)throw Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=ta(e,this.TimeBufferType),this.values=ta(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:ta(t.times,Array),values:ta(t.values,Array)};let i=t.getInterpolation();if(i!==t.DefaultInterpolation)n.interpolation=i}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new oc(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new ac(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new rc(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new lc(this.times,this.values,this.getValueSize(),t);if(this.settings)e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents;return e}setInterpolation(t){let e;switch(t){case 2300:e=this.InterpolantFactoryMethodDiscrete;break;case 2301:e=this.InterpolantFactoryMethodLinear;break;case 2302:e=this.InterpolantFactoryMethodSmooth;break;case 2303:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw Error(n);return Ut("KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return 2300;case this.InterpolantFactoryMethodLinear:return 2301;case this.InterpolantFactoryMethodSmooth:return 2302;case this.InterpolantFactoryMethodBezier:return 2303}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]*=t}return this}trim(t,e){let n=this.times,i=n.length,s=0,r=i-1;while(s!==i&&n[s]<t)++s;while(r!==-1&&n[r]>e)--r;if(++r,s!==0||r!==i){if(s>=r)r=Math.max(r,1),s=r-1;let a=this.getValueSize();this.times=n.slice(s,r),this.values=this.values.slice(s*a,r*a)}return this}validate(){let t=!0,e=this.getValueSize();if(e-Math.floor(e)!==0)Bt("KeyframeTrack: Invalid value size in track.",this),t=!1;let n=this.times,i=this.values,s=n.length;if(s===0)Bt("KeyframeTrack: Track is empty.",this),t=!1;let r=null;for(let a=0;a!==s;a++){let o=n[a];if(typeof o==="number"&&isNaN(o)){Bt("KeyframeTrack: Time is not a valid number.",this,a,o),t=!1;break}if(r!==null&&r>o){Bt("KeyframeTrack: Out of order keys.",this,a,o,r),t=!1;break}r=o}if(i!==void 0){if(_f(i))for(let a=0,o=i.length;a!==o;++a){let l=i[a];if(isNaN(l)){Bt("KeyframeTrack: Value is not a valid number.",this,a,l),t=!1;break}}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===2302,s=t.length-1,r=1;for(let a=1;a<s;++a){let o=!1,l=t[a],c=t[a+1];if(l!==c&&(a!==1||l!==t[0]))if(!i){let u=a*n,d=u-n,h=u+n;for(let p=0;p!==n;++p){let _=e[u+p];if(_!==e[d+p]||_!==e[h+p]){o=!0;break}}}else o=!0;if(o){if(a!==r){t[r]=t[a];let u=a*n,d=r*n;for(let h=0;h!==n;++h)e[d+h]=e[u+h]}++r}}if(s>0){t[r]=t[s];for(let a=s*n,o=r*n,l=0;l!==n;++l)e[o+l]=e[a+l];++r}if(r!==t.length)this.times=t.slice(0,r),this.values=e.slice(0,r*n);else this.times=t,this.values=e;return this}clone(){let t=this.times.slice(),e=this.values.slice(),i=new this.constructor(this.name,t,e);return i.createInterpolant=this.createInterpolant,i}}dn.prototype.ValueTypeName="";dn.prototype.TimeBufferType=Float32Array;dn.prototype.ValueBufferType=Float32Array;dn.prototype.DefaultInterpolation=2301;class Pi extends dn{constructor(t,e,n){super(t,e,n)}}Pi.prototype.ValueTypeName="bool";Pi.prototype.ValueBufferType=Array;Pi.prototype.DefaultInterpolation=2300;Pi.prototype.InterpolantFactoryMethodLinear=void 0;Pi.prototype.InterpolantFactoryMethodSmooth=void 0;class cc extends dn{constructor(t,e,n,i){super(t,e,n,i)}}cc.prototype.ValueTypeName="color";class hc extends dn{constructor(t,e,n,i){super(t,e,n,i)}}hc.prototype.ValueTypeName="number";class uc extends Ci{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){let s=this.resultBuffer,r=this.sampleValues,a=this.valueSize,o=(n-e)/(i-e),l=t*a;for(let c=l+a;l!==c;l+=4)ln.slerpFlat(s,0,r,l-a,r,l,o);return s}}class Fa extends dn{constructor(t,e,n,i){super(t,e,n,i)}InterpolantFactoryMethodLinear(t){return new uc(this.times,this.values,this.getValueSize(),t)}}Fa.prototype.ValueTypeName="quaternion";Fa.prototype.InterpolantFactoryMethodSmooth=void 0;class Ii extends dn{constructor(t,e,n){super(t,e,n)}}Ii.prototype.ValueTypeName="string";Ii.prototype.ValueBufferType=Array;Ii.prototype.DefaultInterpolation=2300;Ii.prototype.InterpolantFactoryMethodLinear=void 0;Ii.prototype.InterpolantFactoryMethodSmooth=void 0;class dc extends dn{constructor(t,e,n,i){super(t,e,n,i)}}dc.prototype.ValueTypeName="vector";class fc{constructor(t,e,n){let i=this,s=!1,r=0,a=0,o=void 0,l=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this._abortController=null,this.itemStart=function(c){if(a++,s===!1){if(i.onStart!==void 0)i.onStart(c,r,a)}s=!0},this.itemEnd=function(c){if(r++,i.onProgress!==void 0)i.onProgress(c,r,a);if(r===a){if(s=!1,i.onLoad!==void 0)i.onLoad()}},this.itemError=function(c){if(i.onError!==void 0)i.onError(c)},this.resolveURL=function(c){if(c=c.normalize("NFC"),o)return o(c);return c},this.setURLModifier=function(c){return o=c,this},this.addHandler=function(c,u){return l.push(c,u),this},this.removeHandler=function(c){let u=l.indexOf(c);if(u!==-1)l.splice(u,2);return this},this.getHandler=function(c){for(let u=0,d=l.length;u<d;u+=2){let h=l[u],p=l[u+1];if(h.global)h.lastIndex=0;if(h.test(c))return p}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){if(!this._abortController)this._abortController=new AbortController;return this._abortController}}var nd=new fc;class pc{constructor(t){if(this.manager=t!==void 0?t:nd,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u")__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let n=this;return new Promise(function(i,s){n.load(t,i,e,s)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}}pc.DEFAULT_MATERIAL_NAME="__DEFAULT";class Oa extends xe{constructor(t,e=1){super();this.isLight=!0,this.type="Light",this.color=new Yt(t),this.intensity=e}dispose(){this.dispatchEvent({type:"dispose"})}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}}class Ba extends Oa{constructor(t,e,n){super(t,n);this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(xe.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Yt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){let e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}}var Bo=new se,Vh=new P,Wh=new P;class id{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new tt(512,512),this.mapType=1009,this.map=null,this.mapPass=null,this.matrix=new se,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new lr,this._frameExtents=new tt(1,1),this._viewportCount=1,this._viewports=[new ye(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera,n=this.matrix;if(Vh.setFromMatrixPosition(t.matrixWorld),e.position.copy(Vh),Wh.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Wh),e.updateMatrixWorld(),Bo.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Bo,e.coordinateSystem,e.reversedDepth),e.coordinateSystem===2001||e.reversedDepth)n.set(0.5,0,0,0.5,0,0.5,0,0.5,0,0,1,0,0,0,0,1);else n.set(0.5,0,0,0.5,0,0.5,0,0.5,0,0,0.5,0.5,0,0,0,1);n.multiply(Bo)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){if(this.map)this.map.dispose();if(this.mapPass)this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};if(this.intensity!==1)t.intensity=this.intensity;if(this.bias!==0)t.bias=this.bias;if(this.normalBias!==0)t.normalBias=this.normalBias;if(this.radius!==1)t.radius=this.radius;if(this.mapSize.x!==512||this.mapSize.y!==512)t.mapSize=this.mapSize.toArray();return t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}var ea=new P,na=new ln,bn=new P;class za extends xe{constructor(){super();this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new se,this.projectionMatrix=new se,this.projectionMatrixInverse=new se,this.coordinateSystem=2000,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){if(super.updateMatrixWorld(t),this.matrixWorld.decompose(ea,na,bn),bn.x===1&&bn.y===1&&bn.z===1)this.matrixWorldInverse.copy(this.matrixWorld).invert();else this.matrixWorldInverse.compose(ea,na,bn.set(1,1,1)).invert()}updateWorldMatrix(t,e,n=!1){if(super.updateWorldMatrix(t,e,n),this.matrixWorld.decompose(ea,na,bn),bn.x===1&&bn.y===1&&bn.z===1)this.matrixWorldInverse.copy(this.matrixWorld).invert();else this.matrixWorldInverse.compose(ea,na,bn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}var ei=new P,Xh=new tt,qh=new tt;class Ze extends za{constructor(t=50,e=1,n=0.1,i=2000){super();this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=0.5*this.getFilmHeight()/t;this.fov=ls*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(rs*0.5*this.fov);return 0.5*this.getFilmHeight()/t}getEffectiveFOV(){return ls*2*Math.atan(Math.tan(rs*0.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){ei.set(-1,-1,0.5).applyMatrix4(this.projectionMatrixInverse),e.set(ei.x,ei.y).multiplyScalar(-t/ei.z),ei.set(1,1,0.5).applyMatrix4(this.projectionMatrixInverse),n.set(ei.x,ei.y).multiplyScalar(-t/ei.z)}getViewSize(t,e){return this.getViewBounds(t,Xh,qh),e.subVectors(qh,Xh)}setViewOffset(t,e,n,i,s,r){if(this.aspect=t/e,this.view===null)this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1};this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){if(this.view!==null)this.view.enabled=!1;this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(rs*0.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,s=-0.5*i,r=this.view;if(this.view!==null&&this.view.enabled){let{fullWidth:o,fullHeight:l}=r;s+=r.offsetX*i/o,e-=r.offsetY*n/l,i*=r.width/o,n*=r.height/l}let a=this.filmOffset;if(a!==0)s+=t*a/this.getFilmWidth();this.projectionMatrix.makePerspective(s,s+i,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);if(e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null)e.object.view=Object.assign({},this.view);return e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}class mr extends za{constructor(t=-1,e=1,n=1,i=-1,s=0.1,r=2000){super();this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=s,this.far=r,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,s,r){if(this.view===null)this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1};this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){if(this.view!==null)this.view.enabled=!1;this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2,s=n-t,r=n+t,a=i+e,o=i-e;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,c=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,r=s+l*this.view.width,a-=c*this.view.offsetY,o=a-c*this.view.height}this.projectionMatrix.makeOrthographic(s,r,a,o,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);if(e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null)e.object.view=Object.assign({},this.view);return e}}class sd extends id{constructor(){super(new mr(-5,5,5,-5,0.5,500));this.isDirectionalLightShadow=!0}}class ka extends Oa{constructor(t,e){super(t,e);this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(xe.DEFAULT_UP),this.updateMatrix(),this.target=new xe,this.shadow=new sd}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}}var is=-90,ss=1;class mc extends xe{constructor(t,e,n){super();this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let i=new Ze(is,ss,t,e);i.layers=this.layers,this.add(i);let s=new Ze(is,ss,t,e);s.layers=this.layers,this.add(s);let r=new Ze(is,ss,t,e);r.layers=this.layers,this.add(r);let a=new Ze(is,ss,t,e);a.layers=this.layers,this.add(a);let o=new Ze(is,ss,t,e);o.layers=this.layers,this.add(o);let l=new Ze(is,ss,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,i,s,r,a,o]=e;for(let l of e)this.remove(l);if(t===2000)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),r.up.set(0,0,1),r.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),o.up.set(0,1,0),o.lookAt(0,0,-1);else if(t===2001)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),r.up.set(0,0,-1),r.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),o.up.set(0,-1,0),o.lookAt(0,0,-1);else throw Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let l of e)this.add(l),l.updateMatrixWorld()}update(t,e){if(this.parent===null)this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:i}=this;if(this.coordinateSystem!==t.coordinateSystem)this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem();let[s,r,a,o,l,c]=this.children,u=t.getRenderTarget(),d=t.getActiveCubeFace(),h=t.getActiveMipmapLevel(),p=t.xr.enabled;t.xr.enabled=!1;let _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let S=!1;if(t.isWebGLRenderer===!0)S=t.state.buffers.depth.getReversed();else S=t.reversedDepthBuffer;if(t.setRenderTarget(n,0,i),S&&t.autoClear===!1)t.clearDepth();if(t.render(e,s),t.setRenderTarget(n,1,i),S&&t.autoClear===!1)t.clearDepth();if(t.render(e,r),t.setRenderTarget(n,2,i),S&&t.autoClear===!1)t.clearDepth();if(t.render(e,a),t.setRenderTarget(n,3,i),S&&t.autoClear===!1)t.clearDepth();if(t.render(e,o),t.setRenderTarget(n,4,i),S&&t.autoClear===!1)t.clearDepth();if(t.render(e,l),n.texture.generateMipmaps=_,t.setRenderTarget(n,5,i),S&&t.autoClear===!1)t.clearDepth();t.render(e,c),t.setRenderTarget(u,d,h),t.xr.enabled=p,n.texture.needsPMREMUpdate=!0}}class gc extends Ze{constructor(t=[]){super();this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}var _c="\\[\\]\\.:\\/",Rp=new RegExp("["+_c+"]","g"),xc="[^"+_c+"]",Cp="[^"+_c.replace("\\.","")+"]",Pp=/((?:WC+[\/:])*)/.source.replace("WC",xc),Ip=/(WCOD+)?/.source.replace("WCOD",Cp),Lp=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",xc),Dp=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",xc),Np=new RegExp("^"+Pp+Ip+Lp+Dp+"$"),Up=["material","materials","bones","map"];class rd{constructor(t,e,n){let i=n||le.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,i)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,i=this._bindings[n];if(i!==void 0)i.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,s=n.length;i!==s;++i)n[i].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}}class le{constructor(t,e,n){this.path=e,this.parsedPath=n||le.parseTrackName(e),this.node=le.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){if(!(t&&t.isAnimationObjectGroup))return new le(t,e,n);else return new le.Composite(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(Rp,"")}static parseTrackName(t){let e=Np.exec(t);if(e===null)throw Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){let s=n.nodeName.substring(i+1);if(Up.indexOf(s)!==-1)n.nodeName=n.nodeName.substring(0,i),n.objectName=s}if(n.propertyName===null||n.propertyName.length===0)throw Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(s){for(let r=0;r<s.length;r++){let a=s[r];if(a.name===e||a.uuid===e)return a;let o=n(a.children);if(o)return o}return null},i=n(t.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)t[e++]=n[i]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,{objectName:n,propertyName:i,propertyIndex:s}=e;if(!t)t=le.findNode(this.rootNode,e.nodeName),this.node=t;if(this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){Ut("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=e.objectIndex;switch(n){case"materials":if(!t.material){Bt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){Bt("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){Bt("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let c=0;c<t.length;c++)if(t[c].name===l){l=c;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){Bt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){Bt("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){Bt("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(l!==void 0){if(t[l]===void 0){Bt("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[l]}}let r=t[i];if(r===void 0){let l=e.nodeName;Bt("PropertyBinding: Trying to update property for track: "+l+"."+i+" but it wasn't found.",t);return}let a=this.Versioning.None;if(this.targetObject=t,t.isMaterial===!0)a=this.Versioning.NeedsUpdate;else if(t.isObject3D===!0)a=this.Versioning.MatrixWorldNeedsUpdate;let o=this.BindingType.Direct;if(s!==void 0){if(i==="morphTargetInfluences"){if(!t.geometry){Bt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){Bt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}if(t.morphTargetDictionary[s]!==void 0)s=t.morphTargetDictionary[s]}o=this.BindingType.ArrayElement,this.resolvedProperty=r,this.propertyIndex=s}else if(r.fromArray!==void 0&&r.toArray!==void 0)o=this.BindingType.HasFromToArray,this.resolvedProperty=r;else if(Array.isArray(r))o=this.BindingType.EntireArray,this.resolvedProperty=r;else this.propertyName=i;this.getValue=this.GetterByBindingType[o],this.setValue=this.SetterByBindingTypeAndVersioning[o][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}le.Composite=rd;le.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};le.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};le.prototype.GetterByBindingType=[le.prototype._getValue_direct,le.prototype._getValue_array,le.prototype._getValue_arrayElement,le.prototype._getValue_toArray];le.prototype.SetterByBindingTypeAndVersioning=[[le.prototype._setValue_direct,le.prototype._setValue_direct_setNeedsUpdate,le.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[le.prototype._setValue_array,le.prototype._setValue_array_setNeedsUpdate,le.prototype._setValue_array_setMatrixWorldNeedsUpdate],[le.prototype._setValue_arrayElement,le.prototype._setValue_arrayElement_setNeedsUpdate,le.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[le.prototype._setValue_fromArray,le.prototype._setValue_fromArray_setNeedsUpdate,le.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var fy=new Float32Array(1);var Yh=new se;class bs{constructor(t,e,n=0,i=1/0){this.ray=new wi(t,e),this.near=n,this.far=i,this.camera=null,this.layers=new sr,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){if(e.isPerspectiveCamera)this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,0.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e;else if(e.isOrthographicCamera)this.ray.origin.set(t.x,t.y,e.projectionMatrix.elements[14]).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e;else Bt("Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return Yh.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Yh),this}intersectObject(t,e=!0,n=[]){return Ho(t,this,n,e),n.sort(Zh),n}intersectObjects(t,e=!0,n=[]){for(let i=0,s=t.length;i<s;i++)Ho(t[i],this,n,e);return n.sort(Zh),n}}function Zh(t,e){return t.distance-e.distance}function Ho(t,e,n,i){let s=!0;if(t.layers.test(e.layers)){if(t.raycast(e,n)===!1)s=!1}if(s===!0&&i===!0){let r=t.children;for(let a=0,o=r.length;a<o;a++)Ho(r[a],e,n,!0)}}class Ga{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,Ut("Clock: This module has been deprecated. Please use THREE.Timer instead.")}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let e=performance.now();t=(e-this.oldTime)/1000,this.oldTime=e,this.elapsedTime+=t}return t}}class li{constructor(t=1,e=0,n=0){this.radius=t,this.phi=e,this.theta=n}set(t,e,n){return this.radius=t,this.phi=e,this.theta=n,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Zt(this.phi,0.000001,Math.PI-0.000001),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){if(this.radius=Math.sqrt(t*t+e*e+n*n),this.radius===0)this.theta=0,this.phi=0;else this.theta=Math.atan2(t,n),this.phi=Math.acos(Zt(e/this.radius,-1,1));return this}clone(){return new this.constructor().copy(this)}}class yc{static{yc.prototype.isMatrix2=!0}constructor(t,e,n,i){if(this.elements=[1,0,0,1],t!==void 0)this.set(t,e,n,i)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let n=0;n<4;n++)this.elements[n]=t[n+e];return this}set(t,e,n,i){let s=this.elements;return s[0]=t,s[2]=e,s[1]=n,s[3]=i,this}}class Ha extends Rn{constructor(t,e=null){super();this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(t){if(t===void 0){Ut("Controls: connect() now requires an element.");return}if(this.domElement!==null)this.disconnect();this.domElement=t}disconnect(){}dispose(){}update(){}}function vc(t,e,n,i){let s=Fp(i);switch(n){case 1021:return t*e;case 1028:return t*e/s.components*s.byteLength;case 1029:return t*e/s.components*s.byteLength;case 1030:return t*e*2/s.components*s.byteLength;case 1031:return t*e*2/s.components*s.byteLength;case 1022:return t*e*3/s.components*s.byteLength;case 1023:return t*e*4/s.components*s.byteLength;case 1033:return t*e*4/s.components*s.byteLength;case 33776:case 33777:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case 33778:case 33779:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case 35841:case 35843:return Math.max(t,16)*Math.max(e,8)/4;case 35840:case 35842:return Math.max(t,8)*Math.max(e,8)/2;case 36196:case 37492:case 37488:case 37489:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case 37496:case 37490:case 37491:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case 37808:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case 37809:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case 37810:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case 37811:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case 37812:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case 37813:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case 37814:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case 37815:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case 37816:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case 37817:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case 37818:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case 37819:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case 37820:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case 37821:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case 36492:case 36494:case 36495:return Math.ceil(t/4)*Math.ceil(e/4)*16;case 36283:case 36284:return Math.ceil(t/4)*Math.ceil(e/4)*8;case 36285:case 36286:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw Error(`Unable to determine texture byte length for ${n} format.`)}function Fp(t){switch(t){case 1009:case 1010:return{byteLength:1,components:1};case 1012:case 1011:case 1016:return{byteLength:2,components:1};case 1017:case 1018:return{byteLength:2,components:4};case 1014:case 1013:case 1015:return{byteLength:4,components:1};case 35902:case 35899:return{byteLength:4,components:3}}throw Error(`THREE.TextureUtils: Unknown texture type ${t}.`)}if(typeof __THREE_DEVTOOLS__<"u")__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"185"}}));if(typeof window<"u")if(window.__THREE__)Ut("WARNING: Multiple instances of Three.js being imported.");else window.__THREE__="185";function Rd(){let t=null,e=!1,n=null,i=null;function s(r,a){n(r,a),i=t.requestAnimationFrame(s)}return{start:function(){if(e===!0)return;if(n===null)return;if(t===null)return;i=t.requestAnimationFrame(s),e=!0},stop:function(){if(t!==null)t.cancelAnimationFrame(i);e=!1},setAnimationLoop:function(r){n=r},setContext:function(r){t=r}}}function Op(t){let e=new WeakMap;function n(o,l){let{array:c,usage:u}=o,d=c.byteLength,h=t.createBuffer();t.bindBuffer(l,h),t.bufferData(l,c,u),o.onUploadCallback();let p;if(c instanceof Float32Array)p=t.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)p=t.HALF_FLOAT;else if(c instanceof Uint16Array)if(o.isFloat16BufferAttribute)p=t.HALF_FLOAT;else p=t.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=t.SHORT;else if(c instanceof Uint32Array)p=t.UNSIGNED_INT;else if(c instanceof Int32Array)p=t.INT;else if(c instanceof Int8Array)p=t.BYTE;else if(c instanceof Uint8Array)p=t.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=t.UNSIGNED_BYTE;else throw Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:d}}function i(o,l,c){let{array:u,updateRanges:d}=l;if(t.bindBuffer(c,o),d.length===0)t.bufferSubData(c,0,u);else{d.sort((p,_)=>p.start-_.start);let h=0;for(let p=1;p<d.length;p++){let _=d[h],S=d[p];if(S.start<=_.start+_.count+1)_.count=Math.max(_.count,S.start+S.count-_.start);else++h,d[h]=S}d.length=h+1;for(let p=0,_=d.length;p<_;p++){let S=d[p];t.bufferSubData(c,S.start*u.BYTES_PER_ELEMENT,u,S.start,S.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){if(o.isInterleavedBufferAttribute)o=o.data;return e.get(o)}function r(o){if(o.isInterleavedBufferAttribute)o=o.data;let l=e.get(o);if(l)t.deleteBuffer(l.buffer),e.delete(o)}function a(o,l){if(o.isInterleavedBufferAttribute)o=o.data;if(o.isGLBufferAttribute){let u=e.get(o);if(!u||u.version<o.version)e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=e.get(o);if(c===void 0)e.set(o,n(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var Bp=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,zp=`#ifdef USE_ALPHAHASH
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
#endif`,kp=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Gp=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Hp=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Vp=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Wp=`#ifdef USE_AOMAP
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
#endif`,Xp=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,qp=`#ifdef USE_BATCHING
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
#endif`,Yp=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Zp=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,$p=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Jp=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Kp=`#ifdef USE_IRIDESCENCE
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
#endif`,jp=`#ifdef USE_BUMPMAP
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
#endif`,Qp=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,tm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,em=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,nm=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,im=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,sm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,rm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,am=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,om=`#define PI 3.141592653589793
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
} // validated`,lm=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,cm=`vec3 transformedNormal = objectNormal;
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
#endif`,hm=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,um=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,dm=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,fm=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,pm="gl_FragColor = linearToOutputTexel( gl_FragColor );",mm=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,gm=`#ifdef USE_ENVMAP
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
#endif`,_m=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,xm=`#ifdef USE_ENVMAP
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
#endif`,ym=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,vm=`#ifdef USE_ENVMAP
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
#endif`,Mm=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Sm=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,bm=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Em=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Tm=`#ifdef USE_GRADIENTMAP
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
}`,wm=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Am=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Rm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Cm=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,Pm=`#ifdef USE_ENVMAP
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
#endif`,Im=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Lm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Dm=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Nm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Um=`PhysicalMaterial material;
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
#endif`,Fm=`uniform sampler2D dfgLUT;
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
}`,Om=`
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
#endif`,Bm=`#if defined( RE_IndirectDiffuse )
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
#endif`,zm=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,km=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,Gm=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Hm=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Vm=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Wm=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Xm=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,qm=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Ym=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Zm=`#if defined( USE_POINTS_UV )
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
#endif`,$m=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Jm=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Km=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,jm=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Qm=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,tg=`#ifdef USE_MORPHTARGETS
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
#endif`,eg=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ng=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,ig=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,sg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,rg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ag=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,og=`#ifdef USE_NORMALMAP
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
#endif`,lg=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,cg=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,hg=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,ug=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,dg=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,fg=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,pg=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,mg=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,gg=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,_g=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,xg=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,yg=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,vg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Mg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Sg=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,bg=`float getShadowMask() {
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
}`,Eg=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Tg=`#ifdef USE_SKINNING
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
#endif`,wg=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Ag=`#ifdef USE_SKINNING
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
#endif`,Rg=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Cg=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Pg=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Ig=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Lg=`#ifdef USE_TRANSMISSION
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
#endif`,Dg=`#ifdef USE_TRANSMISSION
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
#endif`,Ng=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Ug=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Fg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Og=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Bg=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,zg=`uniform sampler2D t2D;
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
}`,kg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Gg=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Hg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Vg=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Wg=`#include <common>
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
}`,Xg=`#if DEPTH_PACKING == 3200
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
}`,qg=`#define DISTANCE
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
}`;var Yg=`#define DISTANCE
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
}`,Zg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,$g=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Jg=`uniform float scale;
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
}`,Kg=`uniform vec3 diffuse;
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
}`,jg=`#include <common>
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
}`,Qg=`uniform vec3 diffuse;
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
}`,t0=`#define LAMBERT
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
}`,e0=`#define LAMBERT
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
}`,n0=`#define MATCAP
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
}`,i0=`#define MATCAP
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
}`,s0=`#define NORMAL
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
}`,r0=`#define NORMAL
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
}`,a0=`#define PHONG
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
}`,o0=`#define PHONG
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
}`,l0=`#define STANDARD
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
}`,c0=`#define STANDARD
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
}`,h0=`#define TOON
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
}`,u0=`#define TOON
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
}`,d0=`uniform float size;
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
}`,f0=`uniform vec3 diffuse;
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
}`,p0=`#include <common>
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
}`,m0=`uniform vec3 color;
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
}`,g0=`uniform float rotation;
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
}`,_0=`uniform vec3 diffuse;
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
}`,$t={alphahash_fragment:Bp,alphahash_pars_fragment:zp,alphamap_fragment:kp,alphamap_pars_fragment:Gp,alphatest_fragment:Hp,alphatest_pars_fragment:Vp,aomap_fragment:Wp,aomap_pars_fragment:Xp,batching_pars_vertex:qp,batching_vertex:Yp,begin_vertex:Zp,beginnormal_vertex:$p,bsdfs:Jp,iridescence_fragment:Kp,bumpmap_pars_fragment:jp,clipping_planes_fragment:Qp,clipping_planes_pars_fragment:tm,clipping_planes_pars_vertex:em,clipping_planes_vertex:nm,color_fragment:im,color_pars_fragment:sm,color_pars_vertex:rm,color_vertex:am,common:om,cube_uv_reflection_fragment:lm,defaultnormal_vertex:cm,displacementmap_pars_vertex:hm,displacementmap_vertex:um,emissivemap_fragment:dm,emissivemap_pars_fragment:fm,colorspace_fragment:pm,colorspace_pars_fragment:mm,envmap_fragment:gm,envmap_common_pars_fragment:_m,envmap_pars_fragment:xm,envmap_pars_vertex:ym,envmap_physical_pars_fragment:Pm,envmap_vertex:vm,fog_vertex:Mm,fog_pars_vertex:Sm,fog_fragment:bm,fog_pars_fragment:Em,gradientmap_pars_fragment:Tm,lightmap_pars_fragment:wm,lights_lambert_fragment:Am,lights_lambert_pars_fragment:Rm,lights_pars_begin:Cm,lights_toon_fragment:Im,lights_toon_pars_fragment:Lm,lights_phong_fragment:Dm,lights_phong_pars_fragment:Nm,lights_physical_fragment:Um,lights_physical_pars_fragment:Fm,lights_fragment_begin:Om,lights_fragment_maps:Bm,lights_fragment_end:zm,lightprobes_pars_fragment:km,logdepthbuf_fragment:Gm,logdepthbuf_pars_fragment:Hm,logdepthbuf_pars_vertex:Vm,logdepthbuf_vertex:Wm,map_fragment:Xm,map_pars_fragment:qm,map_particle_fragment:Ym,map_particle_pars_fragment:Zm,metalnessmap_fragment:$m,metalnessmap_pars_fragment:Jm,morphinstance_vertex:Km,morphcolor_vertex:jm,morphnormal_vertex:Qm,morphtarget_pars_vertex:tg,morphtarget_vertex:eg,normal_fragment_begin:ng,normal_fragment_maps:ig,normal_pars_fragment:sg,normal_pars_vertex:rg,normal_vertex:ag,normalmap_pars_fragment:og,clearcoat_normal_fragment_begin:lg,clearcoat_normal_fragment_maps:cg,clearcoat_pars_fragment:hg,iridescence_pars_fragment:ug,opaque_fragment:dg,packing:fg,premultiplied_alpha_fragment:pg,project_vertex:mg,dithering_fragment:gg,dithering_pars_fragment:_g,roughnessmap_fragment:xg,roughnessmap_pars_fragment:yg,shadowmap_pars_fragment:vg,shadowmap_pars_vertex:Mg,shadowmap_vertex:Sg,shadowmask_pars_fragment:bg,skinbase_vertex:Eg,skinning_pars_vertex:Tg,skinning_vertex:wg,skinnormal_vertex:Ag,specularmap_fragment:Rg,specularmap_pars_fragment:Cg,tonemapping_fragment:Pg,tonemapping_pars_fragment:Ig,transmission_fragment:Lg,transmission_pars_fragment:Dg,uv_pars_fragment:Ng,uv_pars_vertex:Ug,uv_vertex:Fg,worldpos_vertex:Og,background_vert:Bg,background_frag:zg,backgroundCube_vert:kg,backgroundCube_frag:Gg,cube_vert:Hg,cube_frag:Vg,depth_vert:Wg,depth_frag:Xg,distance_vert:qg,distance_frag:Yg,equirect_vert:Zg,equirect_frag:$g,linedashed_vert:Jg,linedashed_frag:Kg,meshbasic_vert:jg,meshbasic_frag:Qg,meshlambert_vert:t0,meshlambert_frag:e0,meshmatcap_vert:n0,meshmatcap_frag:i0,meshnormal_vert:s0,meshnormal_frag:r0,meshphong_vert:a0,meshphong_frag:o0,meshphysical_vert:l0,meshphysical_frag:c0,meshtoon_vert:h0,meshtoon_frag:u0,points_vert:d0,points_frag:f0,shadow_vert:p0,shadow_frag:m0,sprite_vert:g0,sprite_frag:_0},gt={common:{diffuse:{value:new Yt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ht},alphaMap:{value:null},alphaMapTransform:{value:new Ht},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ht}},envmap:{envMap:{value:null},envMapRotation:{value:new Ht},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:0.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ht}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ht}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ht},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ht},normalScale:{value:new tt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ht},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ht}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ht}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ht}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:0.00025},fogNear:{value:1},fogFar:{value:2000},fogColor:{value:new Yt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new P},probesMax:{value:new P},probesResolution:{value:new P}},points:{diffuse:{value:new Yt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ht},alphaTest:{value:0},uvTransform:{value:new Ht}},sprite:{diffuse:{value:new Yt(16777215)},opacity:{value:1},center:{value:new tt(0.5,0.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ht},alphaMap:{value:null},alphaMapTransform:{value:new Ht},alphaTest:{value:0}}},Pn={basic:{uniforms:Xe([gt.common,gt.specularmap,gt.envmap,gt.aomap,gt.lightmap,gt.fog]),vertexShader:$t.meshbasic_vert,fragmentShader:$t.meshbasic_frag},lambert:{uniforms:Xe([gt.common,gt.specularmap,gt.envmap,gt.aomap,gt.lightmap,gt.emissivemap,gt.bumpmap,gt.normalmap,gt.displacementmap,gt.fog,gt.lights,{emissive:{value:new Yt(0)},envMapIntensity:{value:1}}]),vertexShader:$t.meshlambert_vert,fragmentShader:$t.meshlambert_frag},phong:{uniforms:Xe([gt.common,gt.specularmap,gt.envmap,gt.aomap,gt.lightmap,gt.emissivemap,gt.bumpmap,gt.normalmap,gt.displacementmap,gt.fog,gt.lights,{emissive:{value:new Yt(0)},specular:{value:new Yt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:$t.meshphong_vert,fragmentShader:$t.meshphong_frag},standard:{uniforms:Xe([gt.common,gt.envmap,gt.aomap,gt.lightmap,gt.emissivemap,gt.bumpmap,gt.normalmap,gt.displacementmap,gt.roughnessmap,gt.metalnessmap,gt.fog,gt.lights,{emissive:{value:new Yt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:$t.meshphysical_vert,fragmentShader:$t.meshphysical_frag},toon:{uniforms:Xe([gt.common,gt.aomap,gt.lightmap,gt.emissivemap,gt.bumpmap,gt.normalmap,gt.displacementmap,gt.gradientmap,gt.fog,gt.lights,{emissive:{value:new Yt(0)}}]),vertexShader:$t.meshtoon_vert,fragmentShader:$t.meshtoon_frag},matcap:{uniforms:Xe([gt.common,gt.bumpmap,gt.normalmap,gt.displacementmap,gt.fog,{matcap:{value:null}}]),vertexShader:$t.meshmatcap_vert,fragmentShader:$t.meshmatcap_frag},points:{uniforms:Xe([gt.points,gt.fog]),vertexShader:$t.points_vert,fragmentShader:$t.points_frag},dashed:{uniforms:Xe([gt.common,gt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:$t.linedashed_vert,fragmentShader:$t.linedashed_frag},depth:{uniforms:Xe([gt.common,gt.displacementmap]),vertexShader:$t.depth_vert,fragmentShader:$t.depth_frag},normal:{uniforms:Xe([gt.common,gt.bumpmap,gt.normalmap,gt.displacementmap,{opacity:{value:1}}]),vertexShader:$t.meshnormal_vert,fragmentShader:$t.meshnormal_frag},sprite:{uniforms:Xe([gt.sprite,gt.fog]),vertexShader:$t.sprite_vert,fragmentShader:$t.sprite_frag},background:{uniforms:{uvTransform:{value:new Ht},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:$t.background_vert,fragmentShader:$t.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ht}},vertexShader:$t.backgroundCube_vert,fragmentShader:$t.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:$t.cube_vert,fragmentShader:$t.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:$t.equirect_vert,fragmentShader:$t.equirect_frag},distance:{uniforms:Xe([gt.common,gt.displacementmap,{referencePosition:{value:new P},nearDistance:{value:1},farDistance:{value:1000}}]),vertexShader:$t.distance_vert,fragmentShader:$t.distance_frag},shadow:{uniforms:Xe([gt.lights,gt.fog,{color:{value:new Yt(0)},opacity:{value:1}}]),vertexShader:$t.shadow_vert,fragmentShader:$t.shadow_frag}};Pn.physical={uniforms:Xe([Pn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ht},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ht},clearcoatNormalScale:{value:new tt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ht},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ht},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ht},sheen:{value:0},sheenColor:{value:new Yt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ht},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ht},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ht},transmissionSamplerSize:{value:new tt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ht},attenuationDistance:{value:0},attenuationColor:{value:new Yt(0)},specularColor:{value:new Yt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ht},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ht},anisotropyVector:{value:new tt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ht}}]),vertexShader:$t.meshphysical_vert,fragmentShader:$t.meshphysical_frag};var Va={r:0,b:0,g:0},x0=new se,Cd=new Ht;Cd.set(-1,0,0,0,1,0,0,0,1);function y0(t,e,n,i,s,r){let a=new Yt(0),o=s===!0?0:1,l,c,u=null,d=0,h=null;function p(w){let b=w.isScene===!0?w.background:null;if(b&&b.isTexture){let x=w.backgroundBlurriness>0;b=e.get(b,x)}return b}function _(w){let b=!1,x=p(w);if(x===null)m(a,o);else if(x&&x.isColor)m(x,1),b=!0;let T=t.xr.getEnvironmentBlendMode();if(T==="additive")n.buffers.color.setClear(0,0,0,1,r);else if(T==="alpha-blend")n.buffers.color.setClear(0,0,0,0,r);if(t.autoClear||b)n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil)}function S(w,b){let x=p(b);if(x&&(x.isCubeTexture||x.mapping===tr)){if(c===void 0)c=new Qt(new ve(1,1,1),new un({name:"BackgroundCubeMaterial",uniforms:Ri(Pn.backgroundCube.uniforms),vertexShader:Pn.backgroundCube.vertexShader,fragmentShader:Pn.backgroundCube.fragmentShader,side:je,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(T,A,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c);if(c.material.uniforms.envMap.value=x,c.material.uniforms.backgroundBlurriness.value=b.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(x0.makeRotationFromEuler(b.backgroundRotation)).transpose(),x.isCubeTexture&&x.isRenderTargetTexture===!1)c.material.uniforms.backgroundRotation.value.premultiply(Cd);if(c.material.toneMapped=te.getTransfer(x.colorSpace)!==pe,u!==x||d!==x.version||h!==t.toneMapping)c.material.needsUpdate=!0,u=x,d=x.version,h=t.toneMapping;c.layers.enableAll(),w.unshift(c,c.geometry,c.material,0,0,null)}else if(x&&x.isTexture){if(l===void 0)l=new Qt(new oi(2,2),new un({name:"BackgroundMaterial",uniforms:Ri(Pn.background.uniforms),vertexShader:Pn.background.vertexShader,fragmentShader:Pn.background.fragmentShader,side:us,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l);if(l.material.uniforms.t2D.value=x,l.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,l.material.toneMapped=te.getTransfer(x.colorSpace)!==pe,x.matrixAutoUpdate===!0)x.updateMatrix();if(l.material.uniforms.uvTransform.value.copy(x.matrix),u!==x||d!==x.version||h!==t.toneMapping)l.material.needsUpdate=!0,u=x,d=x.version,h=t.toneMapping;l.layers.enableAll(),w.unshift(l,l.geometry,l.material,0,0,null)}}function m(w,b){w.getRGB(Va,ec(t)),n.buffers.color.setClear(Va.r,Va.g,Va.b,b,r)}function f(){if(c!==void 0)c.geometry.dispose(),c.material.dispose(),c=void 0;if(l!==void 0)l.geometry.dispose(),l.material.dispose(),l=void 0}return{getClearColor:function(){return a},setClearColor:function(w,b=1){a.set(w),o=b,m(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(w){o=w,m(a,o)},render:_,addToRenderList:S,dispose:f}}function v0(t,e){let n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},s=h(null),r=s,a=!1;function o(C,k,q,F,W){let V=!1,O=d(C,F,q,k);if(r!==O)r=O,c(r.object);if(V=p(C,F,q,W),V)_(C,F,q,W);if(W!==null)e.update(W,t.ELEMENT_ARRAY_BUFFER);if(V||a){if(a=!1,x(C,k,q,F),W!==null)t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(W).buffer)}}function l(){return t.createVertexArray()}function c(C){return t.bindVertexArray(C)}function u(C){return t.deleteVertexArray(C)}function d(C,k,q,F){let W=F.wireframe===!0,V=i[k.id];if(V===void 0)V={},i[k.id]=V;let O=C.isInstancedMesh===!0?C.id:0,K=V[O];if(K===void 0)K={},V[O]=K;let st=K[q.id];if(st===void 0)st={},K[q.id]=st;let ot=st[W];if(ot===void 0)ot=h(l()),st[W]=ot;return ot}function h(C){let k=[],q=[],F=[];for(let W=0;W<n;W++)k[W]=0,q[W]=0,F[W]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:k,enabledAttributes:q,attributeDivisors:F,object:C,attributes:{},index:null}}function p(C,k,q,F){let W=r.attributes,V=k.attributes,O=0,K=q.getAttributes();for(let st in K)if(K[st].location>=0){let At=W[st],Mt=V[st];if(Mt===void 0){if(st==="instanceMatrix"&&C.instanceMatrix)Mt=C.instanceMatrix;if(st==="instanceColor"&&C.instanceColor)Mt=C.instanceColor}if(At===void 0)return!0;if(At.attribute!==Mt)return!0;if(Mt&&At.data!==Mt.data)return!0;O++}if(r.attributesNum!==O)return!0;if(r.index!==F)return!0;return!1}function _(C,k,q,F){let W={},V=k.attributes,O=0,K=q.getAttributes();for(let st in K)if(K[st].location>=0){let At=V[st];if(At===void 0){if(st==="instanceMatrix"&&C.instanceMatrix)At=C.instanceMatrix;if(st==="instanceColor"&&C.instanceColor)At=C.instanceColor}let Mt={};if(Mt.attribute=At,At&&At.data)Mt.data=At.data;W[st]=Mt,O++}r.attributes=W,r.attributesNum=O,r.index=F}function S(){let C=r.newAttributes;for(let k=0,q=C.length;k<q;k++)C[k]=0}function m(C){f(C,0)}function f(C,k){let q=r.newAttributes,F=r.enabledAttributes,W=r.attributeDivisors;if(q[C]=1,F[C]===0)t.enableVertexAttribArray(C),F[C]=1;if(W[C]!==k)t.vertexAttribDivisor(C,k),W[C]=k}function w(){let C=r.newAttributes,k=r.enabledAttributes;for(let q=0,F=k.length;q<F;q++)if(k[q]!==C[q])t.disableVertexAttribArray(q),k[q]=0}function b(C,k,q,F,W,V,O){if(O===!0)t.vertexAttribIPointer(C,k,q,W,V);else t.vertexAttribPointer(C,k,q,F,W,V)}function x(C,k,q,F){S();let W=F.attributes,V=q.getAttributes(),O=k.defaultAttributeValues;for(let K in V){let st=V[K];if(st.location>=0){let ot=W[K];if(ot===void 0){if(K==="instanceMatrix"&&C.instanceMatrix)ot=C.instanceMatrix;if(K==="instanceColor"&&C.instanceColor)ot=C.instanceColor}if(ot!==void 0){let At=ot.normalized,Mt=ot.itemSize,ce=e.get(ot);if(ce===void 0)continue;let{buffer:ae,type:Z,bytesPerElement:lt}=ce,St=Z===t.INT||Z===t.UNSIGNED_INT||ot.gpuType===el;if(ot.isInterleavedBufferAttribute){let dt=ot.data,Ft=dt.stride,ee=ot.offset;if(dt.isInstancedInterleavedBuffer){for(let kt=0;kt<st.locationSize;kt++)f(st.location+kt,dt.meshPerAttribute);if(C.isInstancedMesh!==!0&&F._maxInstanceCount===void 0)F._maxInstanceCount=dt.meshPerAttribute*dt.count}else for(let kt=0;kt<st.locationSize;kt++)m(st.location+kt);t.bindBuffer(t.ARRAY_BUFFER,ae);for(let kt=0;kt<st.locationSize;kt++)b(st.location+kt,Mt/st.locationSize,Z,At,Ft*lt,(ee+Mt/st.locationSize*kt)*lt,St)}else{if(ot.isInstancedBufferAttribute){for(let dt=0;dt<st.locationSize;dt++)f(st.location+dt,ot.meshPerAttribute);if(C.isInstancedMesh!==!0&&F._maxInstanceCount===void 0)F._maxInstanceCount=ot.meshPerAttribute*ot.count}else for(let dt=0;dt<st.locationSize;dt++)m(st.location+dt);t.bindBuffer(t.ARRAY_BUFFER,ae);for(let dt=0;dt<st.locationSize;dt++)b(st.location+dt,Mt/st.locationSize,Z,At,Mt*lt,Mt/st.locationSize*dt*lt,St)}}else if(O!==void 0){let At=O[K];if(At!==void 0)switch(At.length){case 2:t.vertexAttrib2fv(st.location,At);break;case 3:t.vertexAttrib3fv(st.location,At);break;case 4:t.vertexAttrib4fv(st.location,At);break;default:t.vertexAttrib1fv(st.location,At)}}}}w()}function T(){M();for(let C in i){let k=i[C];for(let q in k){let F=k[q];for(let W in F){let V=F[W];for(let O in V)u(V[O].object),delete V[O];delete F[W]}}delete i[C]}}function A(C){if(i[C.id]===void 0)return;let k=i[C.id];for(let q in k){let F=k[q];for(let W in F){let V=F[W];for(let O in V)u(V[O].object),delete V[O];delete F[W]}}delete i[C.id]}function R(C){for(let k in i){let q=i[k];for(let F in q){let W=q[F];if(W[C.id]===void 0)continue;let V=W[C.id];for(let O in V)u(V[O].object),delete V[O];delete W[C.id]}}}function g(C){for(let k in i){let q=i[k],F=C.isInstancedMesh===!0?C.id:0,W=q[F];if(W===void 0)continue;for(let V in W){let O=W[V];for(let K in O)u(O[K].object),delete O[K];delete W[V]}if(delete q[F],Object.keys(q).length===0)delete i[k]}}function M(){if(U(),a=!0,r===s)return;r=s,c(r.object)}function U(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:M,resetDefaultState:U,dispose:T,releaseStatesOfGeometry:A,releaseStatesOfObject:g,releaseStatesOfProgram:R,initAttributes:S,enableAttribute:m,disableUnusedAttributes:w}}function M0(t,e,n){let i;function s(l){i=l}function r(l,c){t.drawArrays(i,l,c),n.update(c,i,1)}function a(l,c,u){if(u===0)return;t.drawArraysInstanced(i,l,c,u),n.update(c,i,u)}function o(l,c,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,c,0,u);let h=0;for(let p=0;p<u;p++)h+=c[p];n.update(h,i,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function S0(t,e,n,i){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let R=e.get("EXT_texture_filter_anisotropic");s=t.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(R){if(R!==An&&i.convert(R)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))return!1;return!0}function o(R){let g=R===Gn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));if(R!==yn&&i.convert(R)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE)&&R!==kn&&!g)return!1;return!0}function l(R){if(R==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";R="mediump"}if(R==="mediump"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0)return"mediump"}return"lowp"}let c=n.precision!==void 0?n.precision:"highp",u=l(c);if(u!==c)Ut("WebGLRenderer:",c,"not supported, using",u,"instead."),c=u;let d=n.logarithmicDepthBuffer===!0,h=n.reversedDepthBuffer===!0&&e.has("EXT_clip_control");if(n.reversedDepthBuffer===!0&&h===!1)Ut("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let p=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),_=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),S=t.getParameter(t.MAX_TEXTURE_SIZE),m=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),f=t.getParameter(t.MAX_VERTEX_ATTRIBS),w=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),b=t.getParameter(t.MAX_VARYING_VECTORS),x=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),T=t.getParameter(t.MAX_SAMPLES),A=t.getParameter(t.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:h,maxTextures:p,maxVertexTextures:_,maxTextureSize:S,maxCubemapSize:m,maxAttributes:f,maxVertexUniforms:w,maxVaryings:b,maxFragmentUniforms:x,maxSamples:T,samples:A}}function b0(t){let e=this,n=null,i=0,s=!1,r=!1,a=new Ye,o=new Ht,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,h){let p=d.length!==0||h||i!==0||s;return s=h,i=d.length,p},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,h){n=u(d,h,0)},this.setState=function(d,h,p){let{clippingPlanes:_,clipIntersection:S,clipShadows:m}=d,f=t.get(d);if(!s||_===null||_.length===0||r&&!m)if(r)u(null);else c();else{let w=r?0:i,b=w*4,x=f.clippingState||null;l.value=x,x=u(_,h,b,p);for(let T=0;T!==b;++T)x[T]=n[T];f.clippingState=x,this.numIntersection=S?this.numPlanes:0,this.numPlanes+=w}};function c(){if(l.value!==n)l.value=n,l.needsUpdate=i>0;e.numPlanes=i,e.numIntersection=0}function u(d,h,p,_){let S=d!==null?d.length:0,m=null;if(S!==0){if(m=l.value,_!==!0||m===null){let f=p+S*4,w=h.matrixWorldInverse;if(o.getNormalMatrix(w),m===null||m.length<f)m=new Float32Array(f);for(let b=0,x=p;b!==S;++b,x+=4)a.copy(d[b]).applyMatrix4(w,o),a.normal.toArray(m,x),m[x+3]=a.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=S,e.numIntersection=0,m}}var ci=4,ad=[0.125,0.215,0.35,0.446,0.526,0.582],Li=20,E0=256,gr=new mr,od=new Yt,Mc=null,Sc=0,bc=0,Ec=!1,T0=new P;class Ac{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,n=0.1,i=100,s={}){let{size:r=256,position:a=T0}=s;Mc=this._renderer.getRenderTarget(),Sc=this._renderer.getActiveCubeFace(),bc=this._renderer.getActiveMipmapLevel(),Ec=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(r);let o=this._allocateTargets();if(o.depthBuffer=!0,this._sceneToCubeUV(t,n,i,o,a),e>0)this._blur(o,0,0,e);return this._applyPMREM(o),this._cleanup(o),o}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){if(this._cubemapMaterial===null)this._cubemapMaterial=hd(),this._compileMaterial(this._cubemapMaterial)}compileEquirectangularShader(){if(this._equirectMaterial===null)this._equirectMaterial=cd(),this._compileMaterial(this._equirectMaterial)}dispose(){if(this._dispose(),this._cubemapMaterial!==null)this._cubemapMaterial.dispose();if(this._equirectMaterial!==null)this._equirectMaterial.dispose();if(this._backgroundBox!==null)this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){if(this._blurMaterial!==null)this._blurMaterial.dispose();if(this._ggxMaterial!==null)this._ggxMaterial.dispose();if(this._pingPongRenderTarget!==null)this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(Mc,Sc,bc),this._renderer.xr.enabled=Ec,t.scissorTest=!1,Es(t,0,0,t.width,t.height)}_fromTexture(t,e){if(t.mapping===fs||t.mapping===vi)this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width);else this._setSize(t.image.width/4);Mc=this._renderer.getRenderTarget(),Sc=this._renderer.getActiveCubeFace(),bc=this._renderer.getActiveMipmapLevel(),Ec=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:We,minFilter:We,generateMipmaps:!1,type:Gn,format:An,colorSpace:Bl,depthBuffer:!1},i=ld(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){if(this._pingPongRenderTarget!==null)this._dispose();this._pingPongRenderTarget=ld(t,e,n);let{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=w0(s)),this._blurMaterial=R0(s,t,e),this._ggxMaterial=A0(s,t,e)}return i}_compileMaterial(t){let e=new Qt(new Pe,t);this._renderer.compile(e,gr)}_sceneToCubeUV(t,e,n,i,s){let o=new Ze(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,{autoClear:d,toneMapping:h}=u;if(u.getClearColor(od),u.toneMapping=xn,u.autoClear=!1,u.state.buffers.depth.getReversed())u.setRenderTarget(i),u.clearDepth(),u.setRenderTarget(null);if(this._backgroundBox===null)this._backgroundBox=new Qt(new ve,new vn({name:"PMREM.Background",side:je,depthWrite:!1,depthTest:!1}));let _=this._backgroundBox,S=_.material,m=!1,f=t.background;if(f){if(f.isColor)S.color.copy(f),t.background=null,m=!0}else S.color.copy(od),m=!0;for(let w=0;w<6;w++){let b=w%3;if(b===0)o.up.set(0,l[w],0),o.position.set(s.x,s.y,s.z),o.lookAt(s.x+c[w],s.y,s.z);else if(b===1)o.up.set(0,0,l[w]),o.position.set(s.x,s.y,s.z),o.lookAt(s.x,s.y+c[w],s.z);else o.up.set(0,l[w],0),o.position.set(s.x,s.y,s.z),o.lookAt(s.x,s.y,s.z+c[w]);let x=this._cubeSize;if(Es(i,b*x,w>2?x:0,x,x),u.setRenderTarget(i),m)u.render(_,o);u.render(t,o)}u.toneMapping=h,u.autoClear=d,t.background=f}_textureToCubeUV(t,e){let n=this._renderer,i=t.mapping===fs||t.mapping===vi;if(i){if(this._cubemapMaterial===null)this._cubemapMaterial=hd();this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1}else if(this._equirectMaterial===null)this._equirectMaterial=cd();let s=i?this._cubemapMaterial:this._equirectMaterial,r=this._lodMeshes[0];r.material=s;let a=s.uniforms;a.envMap.value=t;let o=this._cubeSize;Es(e,0,0,3*o,2*o),n.setRenderTarget(e),n.render(r,gr)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let i=this._lodMeshes.length;for(let s=1;s<i;s++)this._applyGGXFilter(t,s-1,s);e.autoClear=n}_applyGGXFilter(t,e,n){let i=this._renderer,s=this._pingPongRenderTarget,r=this._ggxMaterial,a=this._lodMeshes[n];a.material=r;let o=r.uniforms,l=n/(this._lodMeshes.length-1),c=e/(this._lodMeshes.length-1),u=Math.sqrt(l*l-c*c),d=0+l*1.25,h=u*d,{_lodMax:p}=this,_=this._sizeLods[n],S=3*_*(n>p-ci?n-p+ci:0),m=4*(this._cubeSize-_);o.envMap.value=t.texture,o.roughness.value=h,o.mipInt.value=p-e,Es(s,S,m,3*_,2*_),i.setRenderTarget(s),i.render(a,gr),o.envMap.value=s.texture,o.roughness.value=0,o.mipInt.value=p-n,Es(t,S,m,3*_,2*_),i.setRenderTarget(t),i.render(a,gr)}_blur(t,e,n,i,s){let r=this._pingPongRenderTarget;this._halfBlur(t,r,e,n,i,"latitudinal",s),this._halfBlur(r,t,n,n,i,"longitudinal",s)}_halfBlur(t,e,n,i,s,r,a){let o=this._renderer,l=this._blurMaterial;if(r!=="latitudinal"&&r!=="longitudinal")Bt("blur direction must be either latitudinal or longitudinal!");let c=3,u=this._lodMeshes[i];u.material=l;let d=l.uniforms,h=this._sizeLods[n]-1,p=isFinite(s)?Math.PI/(2*h):2*Math.PI/(2*Li-1),_=s/p,S=isFinite(s)?1+Math.floor(c*_):Li;if(S>Li)Ut(`sigmaRadians, ${s}, is too large and will clip, as it requested ${S} samples when the maximum is set to ${Li}`);let m=[],f=0;for(let A=0;A<Li;++A){let R=A/_,g=Math.exp(-R*R/2);if(m.push(g),A===0)f+=g;else if(A<S)f+=2*g}for(let A=0;A<m.length;A++)m[A]=m[A]/f;if(d.envMap.value=t.texture,d.samples.value=S,d.weights.value=m,d.latitudinal.value=r==="latitudinal",a)d.poleAxis.value=a;let{_lodMax:w}=this;d.dTheta.value=p,d.mipInt.value=w-n;let b=this._sizeLods[i],x=3*b*(i>w-ci?i-w+ci:0),T=4*(this._cubeSize-b);Es(e,x,T,3*b,2*b),o.setRenderTarget(e),o.render(u,gr)}}function w0(t){let e=[],n=[],i=[],s=t,r=t-ci+1+ad.length;for(let a=0;a<r;a++){let o=Math.pow(2,s);e.push(o);let l=1/o;if(a>t-ci)l=ad[a-t+ci-1];else if(a===0)l=0;n.push(l);let c=1/(o-2),u=-c,d=1+c,h=[u,u,d,u,d,d,u,u,d,d,u,d],p=6,_=6,S=3,m=2,f=1,w=new Float32Array(S*_*p),b=new Float32Array(m*_*p),x=new Float32Array(f*_*p);for(let A=0;A<p;A++){let R=A%3*2/3-1,g=A>2?0:-1,M=[R,g,0,R+0.6666666666666666,g,0,R+0.6666666666666666,g+1,0,R,g,0,R+0.6666666666666666,g+1,0,R,g+1,0];w.set(M,S*_*A),b.set(h,m*_*A);let U=[A,A,A,A,A,A];x.set(U,f*_*A)}let T=new Pe;if(T.setAttribute("position",new Ke(w,S)),T.setAttribute("uv",new Ke(b,m)),T.setAttribute("faceIndex",new Ke(x,f)),i.push(new Qt(T,null)),s>ci)s--}return{lodMeshes:i,sizeLods:e,sigmas:n}}function ld(t,e,n){let i=new cn(t,e,n);return i.texture.mapping=tr,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Es(t,e,n,i,s){t.viewport.set(e,n,i,s),t.scissor.set(e,n,i,s)}function A0(t,e,n){return new un({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:E0,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Xa(),fragmentShader:`

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
		`,blending:wn,depthTest:!1,depthWrite:!1})}function R0(t,e,n){let i=new Float32Array(Li),s=new P(0,1,0);return new un({name:"SphericalGaussianBlur",defines:{n:Li,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Xa(),fragmentShader:`

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
		`,blending:wn,depthTest:!1,depthWrite:!1})}function cd(){return new un({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Xa(),fragmentShader:`

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
		`,blending:wn,depthTest:!1,depthWrite:!1})}function hd(){return new un({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Xa(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:wn,depthTest:!1,depthWrite:!1})}function Xa(){return`

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
	`}class Pc extends cn{constructor(t=1,e={}){super(t,t,e);this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];this.texture=new Aa(i),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new ve(5,5,5),s=new un({name:"CubemapFromEquirect",uniforms:Ri(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:je,blending:wn});s.uniforms.tEquirect.value=e;let r=new Qt(i,s),a=e.minFilter;if(e.minFilter===Mi)e.minFilter=We;return new mc(1,10,this).update(t,r),e.minFilter=a,r.geometry.dispose(),r.material.dispose(),this}clear(t,e=!0,n=!0,i=!0){let s=t.getRenderTarget();for(let r=0;r<6;r++)t.setRenderTarget(this,r),t.clear(e,n,i);t.setRenderTarget(s)}}function C0(t){let e=new WeakMap,n=new WeakMap,i=null;function s(h,p=!1){if(h===null||h===void 0)return null;if(p)return a(h);return r(h)}function r(h){if(h&&h.isTexture){let p=h.mapping;if(p===la||p===ca)if(e.has(h)){let _=e.get(h).texture;return o(_,h.mapping)}else{let _=h.image;if(_&&_.height>0){let S=new Pc(_.height);return S.fromEquirectangularTexture(t,h),e.set(h,S),h.addEventListener("dispose",c),o(S.texture,h.mapping)}else return null}}return h}function a(h){if(h&&h.isTexture){let p=h.mapping,_=p===la||p===ca,S=p===fs||p===vi;if(_||S){let m=n.get(h),f=m!==void 0?m.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==f){if(i===null)i=new Ac(t);return m=_?i.fromEquirectangular(h,m):i.fromCubemap(h,m),m.texture.pmremVersion=h.pmremVersion,n.set(h,m),m.texture}else if(m!==void 0)return m.texture;else{let w=h.image;if(_&&w&&w.height>0||S&&w&&l(w)){if(i===null)i=new Ac(t);return m=_?i.fromEquirectangular(h):i.fromCubemap(h),m.texture.pmremVersion=h.pmremVersion,n.set(h,m),h.addEventListener("dispose",u),m.texture}else return null}}}return h}function o(h,p){if(p===la)h.mapping=fs;else if(p===ca)h.mapping=vi;return h}function l(h){let p=0,_=6;for(let S=0;S<_;S++)if(h[S]!==void 0)p++;return p===_}function c(h){let p=h.target;p.removeEventListener("dispose",c);let _=e.get(p);if(_!==void 0)e.delete(p),_.dispose()}function u(h){let p=h.target;p.removeEventListener("dispose",u);let _=n.get(p);if(_!==void 0)n.delete(p),_.dispose()}function d(){if(e=new WeakMap,n=new WeakMap,i!==null)i.dispose(),i=null}return{get:s,dispose:d}}function P0(t){let e={};function n(i){if(e[i]!==void 0)return e[i];let s=t.getExtension(i);return e[i]=s,s}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){let s=n(i);if(s===null)xi("WebGLRenderer: "+i+" extension not supported.");return s}}}function I0(t,e,n,i){let s={},r=new WeakMap;function a(d){let h=d.target;if(h.index!==null)e.remove(h.index);for(let _ in h.attributes)e.remove(h.attributes[_]);h.removeEventListener("dispose",a),delete s[h.id];let p=r.get(h);if(p)e.remove(p),r.delete(h);if(i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0)delete h._maxInstanceCount;n.memory.geometries--}function o(d,h){if(s[h.id]===!0)return h;return h.addEventListener("dispose",a),s[h.id]=!0,n.memory.geometries++,h}function l(d){let h=d.attributes;for(let p in h)e.update(h[p],t.ARRAY_BUFFER)}function c(d){let h=[],p=d.index,_=d.attributes.position,S=0;if(_===void 0)return;if(p!==null){let w=p.array;S=p.version;for(let b=0,x=w.length;b<x;b+=3){let T=w[b+0],A=w[b+1],R=w[b+2];h.push(T,A,A,R,R,T)}}else{let w=_.array;S=_.version;for(let b=0,x=w.length/3-1;b<x;b+=3){let T=b+0,A=b+1,R=b+2;h.push(T,A,A,R,R,T)}}let m=new(_.count>=65535?Ea:ba)(h,1);m.version=S;let f=r.get(d);if(f)e.remove(f);r.set(d,m)}function u(d){let h=r.get(d);if(h){let p=d.index;if(p!==null){if(h.version<p.version)c(d)}}else c(d);return r.get(d)}return{get:o,update:l,getWireframeAttribute:u}}function L0(t,e,n){let i;function s(d){i=d}let r,a;function o(d){r=d.type,a=d.bytesPerElement}function l(d,h){t.drawElements(i,h,r,d*a),n.update(h,i,1)}function c(d,h,p){if(p===0)return;t.drawElementsInstanced(i,h,r,d*a,p),n.update(h,i,p)}function u(d,h,p){if(p===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,h,0,r,d,0,p);let S=0;for(let m=0;m<p;m++)S+=h[m];n.update(S,i,1)}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u}function D0(t){let e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,a,o){switch(n.calls++,a){case t.TRIANGLES:n.triangles+=o*(r/3);break;case t.LINES:n.lines+=o*(r/2);break;case t.LINE_STRIP:n.lines+=o*(r-1);break;case t.LINE_LOOP:n.lines+=o*r;break;case t.POINTS:n.points+=o*r;break;default:Bt("WebGLInfo: Unknown draw mode:",a);break}}function s(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:s,update:i}}function N0(t,e,n){let i=new WeakMap,s=new ye;function r(a,o,l){let c=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=u!==void 0?u.length:0,h=i.get(o);if(h===void 0||h.count!==d){let M=function(){R.dispose(),i.delete(o),o.removeEventListener("dispose",M)};if(h!==void 0)h.texture.dispose();let p=o.morphAttributes.position!==void 0,_=o.morphAttributes.normal!==void 0,S=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],f=o.morphAttributes.normal||[],w=o.morphAttributes.color||[],b=0;if(p===!0)b=1;if(_===!0)b=2;if(S===!0)b=3;let x=o.attributes.position.count*b,T=1;if(x>e.maxTextureSize)T=Math.ceil(x/e.maxTextureSize),x=e.maxTextureSize;let A=new Float32Array(x*T*4*d),R=new Ma(A,x,T,d);R.type=kn,R.needsUpdate=!0;let g=b*4;for(let U=0;U<d;U++){let C=m[U],k=f[U],q=w[U],F=x*T*4*U;for(let W=0;W<C.count;W++){let V=W*g;if(p===!0)s.fromBufferAttribute(C,W),A[F+V+0]=s.x,A[F+V+1]=s.y,A[F+V+2]=s.z,A[F+V+3]=0;if(_===!0)s.fromBufferAttribute(k,W),A[F+V+4]=s.x,A[F+V+5]=s.y,A[F+V+6]=s.z,A[F+V+7]=0;if(S===!0)s.fromBufferAttribute(q,W),A[F+V+8]=s.x,A[F+V+9]=s.y,A[F+V+10]=s.z,A[F+V+11]=q.itemSize===4?s.w:1}}h={count:d,texture:R,size:new tt(x,T)},i.set(o,h),o.addEventListener("dispose",M)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(t,"morphTexture",a.morphTexture,n);else{let p=0;for(let S=0;S<c.length;S++)p+=c[S];let _=o.morphTargetsRelative?1:1-p;l.getUniforms().setValue(t,"morphTargetBaseInfluence",_),l.getUniforms().setValue(t,"morphTargetInfluences",c)}l.getUniforms().setValue(t,"morphTargetsTexture",h.texture,n),l.getUniforms().setValue(t,"morphTargetsTextureSize",h.size)}return{update:r}}function U0(t,e,n,i,s){let r=new WeakMap;function a(c){let u=s.render.frame,d=c.geometry,h=e.get(c,d);if(r.get(h)!==u)e.update(h),r.set(h,u);if(c.isInstancedMesh){if(c.hasEventListener("dispose",l)===!1)c.addEventListener("dispose",l);if(r.get(c)!==u){if(n.update(c.instanceMatrix,t.ARRAY_BUFFER),c.instanceColor!==null)n.update(c.instanceColor,t.ARRAY_BUFFER);r.set(c,u)}}if(c.isSkinnedMesh){let p=c.skeleton;if(r.get(p)!==u)p.update(),r.set(p,u)}return h}function o(){r=new WeakMap}function l(c){let u=c.target;if(u.removeEventListener("dispose",l),i.releaseStatesOfObject(u),n.remove(u.instanceMatrix),u.instanceColor!==null)n.remove(u.instanceColor)}return{update:a,dispose:o}}var F0={[Zo]:"LINEAR_TONE_MAPPING",[$o]:"REINHARD_TONE_MAPPING",[Jo]:"CINEON_TONE_MAPPING",[Ko]:"ACES_FILMIC_TONE_MAPPING",[Qo]:"AGX_TONE_MAPPING",[tl]:"NEUTRAL_TONE_MAPPING",[jo]:"CUSTOM_TONE_MAPPING"};function O0(t,e,n,i,s,r){let a=new cn(e,n,{type:t,depthBuffer:s,stencilBuffer:r,samples:i?4:0,depthTexture:s?new ri(e,n):void 0}),o=new cn(e,n,{type:Gn,depthBuffer:!1,stencilBuffer:!1}),l=new Pe;l.setAttribute("position",new re([-1,3,0,-1,-1,0,3,-1,0],3)),l.setAttribute("uv",new re([0,2,0,0,2,0],2));let c=new nc({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),u=new Qt(l,c),d=new mr(-1,1,1,-1,0,1),h=null,p=null,_=!1,S,m=null,f=[],w=!1;this.setSize=function(b,x){a.setSize(b,x),o.setSize(b,x);for(let T=0;T<f.length;T++){let A=f[T];if(A.setSize)A.setSize(b,x)}},this.setEffects=function(b){f=b,w=f.length>0&&f[0].isRenderPass===!0;let{width:x,height:T}=a;for(let A=0;A<f.length;A++){let R=f[A];if(R.setSize)R.setSize(x,T)}},this.begin=function(b,x){if(_)return!1;if(b.toneMapping===xn&&f.length===0)return!1;if(m=x,x!==null){let{width:T,height:A}=x;if(a.width!==T||a.height!==A)this.setSize(T,A)}if(w===!1)b.setRenderTarget(a);return S=b.toneMapping,b.toneMapping=xn,!0},this.hasRenderPass=function(){return w},this.end=function(b,x){b.toneMapping=S,_=!0;let T=a,A=o;for(let R=0;R<f.length;R++){let g=f[R];if(g.enabled===!1)continue;if(g.render(b,A,T,x),g.needsSwap!==!1){let M=T;T=A,A=M}}if(h!==b.outputColorSpace||p!==b.toneMapping){if(h=b.outputColorSpace,p=b.toneMapping,c.defines={},te.getTransfer(h)===pe)c.defines.SRGB_TRANSFER="";let R=F0[p];if(R)c.defines[R]="";c.needsUpdate=!0}c.uniforms.tDiffuse.value=T.texture,b.setRenderTarget(m),b.render(u,d),m=null,_=!1},this.isCompositing=function(){return _},this.dispose=function(){if(a.depthTexture)a.depthTexture.dispose();a.dispose(),o.dispose(),l.dispose(),c.dispose()}}var Pd=new ze,Rc=new ri(1,1),Id=new Ma,Ld=new Xl,Dd=new Aa,ud=[],dd=[],fd=new Float32Array(16),pd=new Float32Array(9),md=new Float32Array(4);function Ts(t,e,n){let i=t[0];if(i<=0||i>0)return t;let s=e*n,r=ud[s];if(r===void 0)r=new Float32Array(s),ud[s]=r;if(e!==0){i.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=n,t[a].toArray(r,o)}return r}function Ne(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function Ue(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function qa(t,e){let n=dd[e];if(n===void 0)n=new Int32Array(e),dd[e]=n;for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function B0(t,e){let n=this.cache;if(n[0]===e)return;t.uniform1f(this.addr,e),n[0]=e}function z0(t,e){let n=this.cache;if(e.x!==void 0){if(n[0]!==e.x||n[1]!==e.y)t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y}else{if(Ne(n,e))return;t.uniform2fv(this.addr,e),Ue(n,e)}}function k0(t,e){let n=this.cache;if(e.x!==void 0){if(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z}else if(e.r!==void 0){if(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b}else{if(Ne(n,e))return;t.uniform3fv(this.addr,e),Ue(n,e)}}function G0(t,e){let n=this.cache;if(e.x!==void 0){if(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w}else{if(Ne(n,e))return;t.uniform4fv(this.addr,e),Ue(n,e)}}function H0(t,e){let n=this.cache,i=e.elements;if(i===void 0){if(Ne(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),Ue(n,e)}else{if(Ne(n,i))return;md.set(i),t.uniformMatrix2fv(this.addr,!1,md),Ue(n,i)}}function V0(t,e){let n=this.cache,i=e.elements;if(i===void 0){if(Ne(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),Ue(n,e)}else{if(Ne(n,i))return;pd.set(i),t.uniformMatrix3fv(this.addr,!1,pd),Ue(n,i)}}function W0(t,e){let n=this.cache,i=e.elements;if(i===void 0){if(Ne(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),Ue(n,e)}else{if(Ne(n,i))return;fd.set(i),t.uniformMatrix4fv(this.addr,!1,fd),Ue(n,i)}}function X0(t,e){let n=this.cache;if(n[0]===e)return;t.uniform1i(this.addr,e),n[0]=e}function q0(t,e){let n=this.cache;if(e.x!==void 0){if(n[0]!==e.x||n[1]!==e.y)t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y}else{if(Ne(n,e))return;t.uniform2iv(this.addr,e),Ue(n,e)}}function Y0(t,e){let n=this.cache;if(e.x!==void 0){if(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z}else{if(Ne(n,e))return;t.uniform3iv(this.addr,e),Ue(n,e)}}function Z0(t,e){let n=this.cache;if(e.x!==void 0){if(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w}else{if(Ne(n,e))return;t.uniform4iv(this.addr,e),Ue(n,e)}}function $0(t,e){let n=this.cache;if(n[0]===e)return;t.uniform1ui(this.addr,e),n[0]=e}function J0(t,e){let n=this.cache;if(e.x!==void 0){if(n[0]!==e.x||n[1]!==e.y)t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y}else{if(Ne(n,e))return;t.uniform2uiv(this.addr,e),Ue(n,e)}}function K0(t,e){let n=this.cache;if(e.x!==void 0){if(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z}else{if(Ne(n,e))return;t.uniform3uiv(this.addr,e),Ue(n,e)}}function j0(t,e){let n=this.cache;if(e.x!==void 0){if(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w}else{if(Ne(n,e))return;t.uniform4uiv(this.addr,e),Ue(n,e)}}function Q0(t,e,n){let i=this.cache,s=n.allocateTextureUnit();if(i[0]!==s)t.uniform1i(this.addr,s),i[0]=s;let r;if(this.type===t.SAMPLER_2D_SHADOW)Rc.compareFunction=n.isReversedDepthBuffer()?va:ya,r=Rc;else r=Pd;n.setTexture2D(e||r,s)}function t_(t,e,n){let i=this.cache,s=n.allocateTextureUnit();if(i[0]!==s)t.uniform1i(this.addr,s),i[0]=s;n.setTexture3D(e||Ld,s)}function e_(t,e,n){let i=this.cache,s=n.allocateTextureUnit();if(i[0]!==s)t.uniform1i(this.addr,s),i[0]=s;n.setTextureCube(e||Dd,s)}function n_(t,e,n){let i=this.cache,s=n.allocateTextureUnit();if(i[0]!==s)t.uniform1i(this.addr,s),i[0]=s;n.setTexture2DArray(e||Id,s)}function i_(t){switch(t){case 5126:return B0;case 35664:return z0;case 35665:return k0;case 35666:return G0;case 35674:return H0;case 35675:return V0;case 35676:return W0;case 5124:case 35670:return X0;case 35667:case 35671:return q0;case 35668:case 35672:return Y0;case 35669:case 35673:return Z0;case 5125:return $0;case 36294:return J0;case 36295:return K0;case 36296:return j0;case 35678:case 36198:case 36298:case 36306:case 35682:return Q0;case 35679:case 36299:case 36307:return t_;case 35680:case 36300:case 36308:case 36293:return e_;case 36289:case 36303:case 36311:case 36292:return n_}}function s_(t,e){t.uniform1fv(this.addr,e)}function r_(t,e){let n=Ts(e,this.size,2);t.uniform2fv(this.addr,n)}function a_(t,e){let n=Ts(e,this.size,3);t.uniform3fv(this.addr,n)}function o_(t,e){let n=Ts(e,this.size,4);t.uniform4fv(this.addr,n)}function l_(t,e){let n=Ts(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function c_(t,e){let n=Ts(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function h_(t,e){let n=Ts(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function u_(t,e){t.uniform1iv(this.addr,e)}function d_(t,e){t.uniform2iv(this.addr,e)}function f_(t,e){t.uniform3iv(this.addr,e)}function p_(t,e){t.uniform4iv(this.addr,e)}function m_(t,e){t.uniform1uiv(this.addr,e)}function g_(t,e){t.uniform2uiv(this.addr,e)}function __(t,e){t.uniform3uiv(this.addr,e)}function x_(t,e){t.uniform4uiv(this.addr,e)}function y_(t,e,n){let i=this.cache,s=e.length,r=qa(n,s);if(!Ne(i,r))t.uniform1iv(this.addr,r),Ue(i,r);let a;if(this.type===t.SAMPLER_2D_SHADOW)a=Rc;else a=Pd;for(let o=0;o!==s;++o)n.setTexture2D(e[o]||a,r[o])}function v_(t,e,n){let i=this.cache,s=e.length,r=qa(n,s);if(!Ne(i,r))t.uniform1iv(this.addr,r),Ue(i,r);for(let a=0;a!==s;++a)n.setTexture3D(e[a]||Ld,r[a])}function M_(t,e,n){let i=this.cache,s=e.length,r=qa(n,s);if(!Ne(i,r))t.uniform1iv(this.addr,r),Ue(i,r);for(let a=0;a!==s;++a)n.setTextureCube(e[a]||Dd,r[a])}function S_(t,e,n){let i=this.cache,s=e.length,r=qa(n,s);if(!Ne(i,r))t.uniform1iv(this.addr,r),Ue(i,r);for(let a=0;a!==s;++a)n.setTexture2DArray(e[a]||Id,r[a])}function b_(t){switch(t){case 5126:return s_;case 35664:return r_;case 35665:return a_;case 35666:return o_;case 35674:return l_;case 35675:return c_;case 35676:return h_;case 5124:case 35670:return u_;case 35667:case 35671:return d_;case 35668:case 35672:return f_;case 35669:case 35673:return p_;case 5125:return m_;case 36294:return g_;case 36295:return __;case 36296:return x_;case 35678:case 36198:case 36298:case 36306:case 35682:return y_;case 35679:case 36299:case 36307:return v_;case 35680:case 36300:case 36308:case 36293:return M_;case 36289:case 36303:case 36311:case 36292:return S_}}class Nd{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=i_(e.type)}}class Ud{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=b_(e.type)}}class Fd{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let i=this.seq;for(let s=0,r=i.length;s!==r;++s){let a=i[s];a.setValue(t,e[a.id],n)}}}var Tc=/(\w+)(\])?(\[|\.)?/g;function gd(t,e){t.seq.push(e),t.map[e.id]=e}function E_(t,e,n){let i=t.name,s=i.length;Tc.lastIndex=0;while(!0){let r=Tc.exec(i),a=Tc.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l)o=o|0;if(c===void 0||c==="["&&a+2===s){gd(n,c===void 0?new Nd(o,t,e):new Ud(o,t,e));break}else{let d=n.map[o];if(d===void 0)d=new Fd(o),gd(n,d);n=d}}}class yr{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){let a=t.getActiveUniform(e,r),o=t.getUniformLocation(e,a.name);E_(a,o,this)}let i=[],s=[];for(let r of this.seq)if(r.type===t.SAMPLER_2D_SHADOW||r.type===t.SAMPLER_CUBE_SHADOW||r.type===t.SAMPLER_2D_ARRAY_SHADOW)i.push(r);else s.push(r);if(i.length>0)this.seq=i.concat(s)}setValue(t,e,n,i){let s=this.map[e];if(s!==void 0)s.setValue(t,n,i)}setOptional(t,e,n){let i=e[n];if(i!==void 0)this.setValue(t,n,i)}static upload(t,e,n,i){for(let s=0,r=e.length;s!==r;++s){let a=e[s],o=n[a.id];if(o.needsUpdate!==!1)a.setValue(t,o.value,i)}}static seqWithValue(t,e){let n=[];for(let i=0,s=t.length;i!==s;++i){let r=t[i];if(r.id in e)n.push(r)}return n}}function _d(t,e,n){let i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}var T_=37297,w_=0;function A_(t,e){let n=t.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,n.length);for(let a=s;a<r;a++){let o=a+1;i.push(`${o===e?">":" "} ${o}: ${n[a]}`)}return i.join(`
`)}var xd=new Ht;function R_(t){te._getMatrix(xd,te.workingColorSpace,t);let e=`mat3( ${xd.elements.map((n)=>n.toFixed(4))} )`;switch(te.getTransfer(t)){case zl:return[e,"LinearTransferOETF"];case pe:return[e,"sRGBTransferOETF"];default:return Ut("WebGLProgram: Unsupported color space: ",t),[e,"LinearTransferOETF"]}}function yd(t,e,n){let i=t.getShaderParameter(e,t.COMPILE_STATUS),r=(t.getShaderInfoLog(e)||"").trim();if(i&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return n.toUpperCase()+`

`+r+`

`+A_(t.getShaderSource(e),o)}else return r}function C_(t,e){let n=R_(e);return[`vec4 ${t}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}var P_={[Zo]:"Linear",[$o]:"Reinhard",[Jo]:"Cineon",[Ko]:"ACESFilmic",[Qo]:"AgX",[tl]:"Neutral",[jo]:"Custom"};function I_(t,e){let n=P_[e];if(n===void 0)return Ut("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+t+"( vec3 color ) { return LinearToneMapping( color ); }";return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}var Wa=new P;function L_(){te.getLuminanceCoefficients(Wa);let t=Wa.x.toFixed(4),e=Wa.y.toFixed(4),n=Wa.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${e}, ${n} );`,"\treturn dot( weights, rgb );","}"].join(`
`)}function D_(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(xr).join(`
`)}function N_(t){let e=[];for(let n in t){let i=t[n];if(i===!1)continue;e.push("#define "+n+" "+i)}return e.join(`
`)}function U_(t,e){let n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let r=t.getActiveAttrib(e,s),a=r.name,o=1;if(r.type===t.FLOAT_MAT2)o=2;if(r.type===t.FLOAT_MAT3)o=3;if(r.type===t.FLOAT_MAT4)o=4;n[a]={type:r.type,location:t.getAttribLocation(e,a),locationSize:o}}return n}function xr(t){return t!==""}function vd(t,e){let n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Md(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var F_=/^[ \t]*#include +<([\w\d./]+)>/gm;function Cc(t){return t.replace(F_,B_)}var O_=new Map;function B_(t,e){let n=$t[e];if(n===void 0){let i=O_.get(e);if(i!==void 0)n=$t[i],Ut('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return Cc(n)}var z_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Sd(t){return t.replace(z_,k_)}function k_(t,e,n,i){let s="";for(let r=parseInt(e);r<parseInt(n);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function bd(t){let e=`precision ${t.precision} float;
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
#define LOW_PRECISION`;return e}var G_={[js]:"SHADOWMAP_TYPE_PCF",[hs]:"SHADOWMAP_TYPE_VSM"};function H_(t){return G_[t.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var V_={[fs]:"ENVMAP_TYPE_CUBE",[vi]:"ENVMAP_TYPE_CUBE",[tr]:"ENVMAP_TYPE_CUBE_UV"};function W_(t){if(t.envMap===!1)return"ENVMAP_TYPE_CUBE";return V_[t.envMapMode]||"ENVMAP_TYPE_CUBE"}var X_={[vi]:"ENVMAP_MODE_REFRACTION"};function q_(t){if(t.envMap===!1)return"ENVMAP_MODE_REFLECTION";return X_[t.envMapMode]||"ENVMAP_MODE_REFLECTION"}var Y_={[Tu]:"ENVMAP_BLENDING_MULTIPLY",[wu]:"ENVMAP_BLENDING_MIX",[Au]:"ENVMAP_BLENDING_ADD"};function Z_(t){if(t.envMap===!1)return"ENVMAP_BLENDING_NONE";return Y_[t.combine]||"ENVMAP_BLENDING_NONE"}function $_(t){let e=t.envMapCubeUVHeight;if(e===null)return null;let n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),112)),texelHeight:i,maxMip:n}}function J_(t,e,n,i){let s=t.getContext(),{defines:r,vertexShader:a,fragmentShader:o}=n,l=H_(n),c=W_(n),u=q_(n),d=Z_(n),h=$_(n),p=D_(n),_=N_(r),S=s.createProgram(),m,f,w=n.glslVersion?"#version "+n.glslVersion+`
`:"";if(n.isRawShaderMaterial){if(m=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_].filter(xr).join(`
`),m.length>0)m+=`
`;if(f=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_].filter(xr).join(`
`),f.length>0)f+=`
`}else m=[bd(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+u:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexNormals?"#define HAS_NORMAL":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","\tattribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","\tattribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","\tuniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","\tattribute vec2 uv1;","#endif","#ifdef USE_UV2","\tattribute vec2 uv2;","#endif","#ifdef USE_UV3","\tattribute vec2 uv3;","#endif","#ifdef USE_TANGENT","\tattribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","\tattribute vec4 color;","#elif defined( USE_COLOR )","\tattribute vec3 color;","#endif","#ifdef USE_SKINNING","\tattribute vec4 skinIndex;","\tattribute vec4 skinWeight;","#endif",`
`].filter(xr).join(`
`),f=[bd(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+u:"",n.envMap?"#define "+d:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas||n.batchingColor?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==xn?"#define TONE_MAPPING":"",n.toneMapping!==xn?$t.tonemapping_pars_fragment:"",n.toneMapping!==xn?I_("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",$t.colorspace_pars_fragment,C_("linearToOutputTexel",n.outputColorSpace),L_(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(xr).join(`
`);if(a=Cc(a),a=vd(a,n),a=Md(a,n),o=Cc(o),o=vd(o,n),o=Md(o,n),a=Sd(a),o=Sd(o),n.isRawShaderMaterial!==!0)w=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,f=["#define varying in",n.glslVersion===kl?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===kl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f;let b=w+m+a,x=w+f+o,T=_d(s,s.VERTEX_SHADER,b),A=_d(s,s.FRAGMENT_SHADER,x);if(s.attachShader(S,T),s.attachShader(S,A),n.index0AttributeName!==void 0)s.bindAttribLocation(S,0,n.index0AttributeName);else if(n.hasPositionAttribute===!0)s.bindAttribLocation(S,0,"position");s.linkProgram(S);function R(C){if(t.debug.checkShaderErrors){let k=s.getProgramInfoLog(S)||"",q=s.getShaderInfoLog(T)||"",F=s.getShaderInfoLog(A)||"",W=k.trim(),V=q.trim(),O=F.trim(),K=!0,st=!0;if(s.getProgramParameter(S,s.LINK_STATUS)===!1)if(K=!1,typeof t.debug.onShaderError==="function")t.debug.onShaderError(s,S,T,A);else{let ot=yd(s,T,"vertex"),At=yd(s,A,"fragment");Bt("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(S,s.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+W+`
`+ot+`
`+At)}else if(W!=="")Ut("WebGLProgram: Program Info Log:",W);else if(V===""||O==="")st=!1;if(st)C.diagnostics={runnable:K,programLog:W,vertexShader:{log:V,prefix:m},fragmentShader:{log:O,prefix:f}}}s.deleteShader(T),s.deleteShader(A),g=new yr(s,S),M=U_(s,S)}let g;this.getUniforms=function(){if(g===void 0)R(this);return g};let M;this.getAttributes=function(){if(M===void 0)R(this);return M};let U=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){if(U===!1)U=s.getProgramParameter(S,T_);return U},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(S),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=w_++,this.cacheKey=e,this.usedTimes=1,this.program=S,this.vertexShader=T,this.fragmentShader=A,this}var K_=0;class Od{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,n){let i=this._getShaderCacheForMaterial(t);if(i.has(e)===!1)i.add(e),e.usedTimes++;if(i.has(n)===!1)i.add(n),n.usedTimes++;return this}remove(t){let e=this.materialCache.get(t);for(let n of e)if(n.usedTimes--,n.usedTimes===0)this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);if(n===void 0)n=new Set,e.set(t,n);return n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);if(n===void 0)n=new Bd(t),e.set(t,n);return n}}class Bd{constructor(t){this.id=K_++,this.code=t,this.usedTimes=0}}function j_(t){return t===Ei||t===_a||t===xa}function Q_(t,e,n,i,s,r){let a=new sr,o=new Od,l=new Set,c=[],u=new Map,{logarithmicDepthBuffer:d,precision:h}=i,p={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(g){if(l.add(g),g===0)return"uv";return`uv${g}`}function S(g,M,U,C,k,q){let F=C.fog,W=k.geometry,V=g.isMeshStandardMaterial||g.isMeshLambertMaterial||g.isMeshPhongMaterial?C.environment:null,O=g.isMeshStandardMaterial||g.isMeshLambertMaterial&&!g.envMap||g.isMeshPhongMaterial&&!g.envMap,K=e.get(g.envMap||V,O),st=!!K&&K.mapping===tr?K.image.height:null,ot=p[g.type];if(g.precision!==null){if(h=i.getMaxPrecision(g.precision),h!==g.precision)Ut("WebGLProgram.getParameters:",g.precision,"not supported, using",h,"instead.")}let At=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,Mt=At!==void 0?At.length:0,ce=0;if(W.morphAttributes.position!==void 0)ce=1;if(W.morphAttributes.normal!==void 0)ce=2;if(W.morphAttributes.color!==void 0)ce=3;let ae,Z,lt,St;if(ot){let Xt=Pn[ot];ae=Xt.vertexShader,Z=Xt.fragmentShader}else{ae=g.vertexShader,Z=g.fragmentShader;let Xt=o.getVertexShaderStage(g),Te=o.getFragmentShaderStage(g);o.update(g,Xt,Te),lt=Xt.id,St=Te.id}let dt=t.getRenderTarget(),Ft=t.state.buffers.depth.getReversed(),ee=k.isInstancedMesh===!0,kt=k.isBatchedMesh===!0,Gt=!!g.map,j=!!g.matcap,it=!!K,nt=!!g.aoMap,yt=!!g.lightMap,bt=!!g.bumpMap&&g.wireframe===!1,Pt=!!g.normalMap,Lt=!!g.displacementMap,Vt=!!g.emissiveMap,Wt=!!g.metalnessMap,I=!!g.roughnessMap,me=g.anisotropy>0,jt=g.clearcoat>0,Jt=g.dispersion>0,E=g.iridescence>0,y=g.sheen>0,L=g.transmission>0,G=me&&!!g.anisotropyMap,Q=jt&&!!g.clearcoatMap,rt=jt&&!!g.clearcoatNormalMap,ut=jt&&!!g.clearcoatRoughnessMap,X=E&&!!g.iridescenceMap,J=E&&!!g.iridescenceThicknessMap,vt=y&&!!g.sheenColorMap,It=y&&!!g.sheenRoughnessMap,mt=!!g.specularMap,at=!!g.specularColorMap,Ot=!!g.specularIntensityMap,zt=L&&!!g.transmissionMap,ie=L&&!!g.thicknessMap,D=!!g.gradientMap,ct=!!g.alphaMap,Y=g.alphaTest>0,ft=!!g.alphaHash,Et=!!g.extensions,et=xn;if(g.toneMapped){if(dt===null||dt.isXRRenderTarget===!0)et=t.toneMapping}let pt={shaderID:ot,shaderType:g.type,shaderName:g.name,vertexShader:ae,fragmentShader:Z,defines:g.defines,customVertexShaderID:lt,customFragmentShaderID:St,isRawShaderMaterial:g.isRawShaderMaterial===!0,glslVersion:g.glslVersion,precision:h,batching:kt,batchingColor:kt&&k._colorsTexture!==null,instancing:ee,instancingColor:ee&&k.instanceColor!==null,instancingMorph:ee&&k.morphTexture!==null,outputColorSpace:dt===null?t.outputColorSpace:dt.isXRRenderTarget===!0?dt.texture.colorSpace:te.workingColorSpace,alphaToCoverage:!!g.alphaToCoverage,map:Gt,matcap:j,envMap:it,envMapMode:it&&K.mapping,envMapCubeUVHeight:st,aoMap:nt,lightMap:yt,bumpMap:bt,normalMap:Pt,displacementMap:Lt,emissiveMap:Vt,normalMapObjectSpace:Pt&&g.normalMapType===Ou,normalMapTangentSpace:Pt&&g.normalMapType===Ol,packedNormalMap:Pt&&g.normalMapType===Ol&&j_(g.normalMap.format),metalnessMap:Wt,roughnessMap:I,anisotropy:me,anisotropyMap:G,clearcoat:jt,clearcoatMap:Q,clearcoatNormalMap:rt,clearcoatRoughnessMap:ut,dispersion:Jt,iridescence:E,iridescenceMap:X,iridescenceThicknessMap:J,sheen:y,sheenColorMap:vt,sheenRoughnessMap:It,specularMap:mt,specularColorMap:at,specularIntensityMap:Ot,transmission:L,transmissionMap:zt,thicknessMap:ie,gradientMap:D,opaque:g.transparent===!1&&g.blending===Qs&&g.alphaToCoverage===!1,alphaMap:ct,alphaTest:Y,alphaHash:ft,combine:g.combine,mapUv:Gt&&_(g.map.channel),aoMapUv:nt&&_(g.aoMap.channel),lightMapUv:yt&&_(g.lightMap.channel),bumpMapUv:bt&&_(g.bumpMap.channel),normalMapUv:Pt&&_(g.normalMap.channel),displacementMapUv:Lt&&_(g.displacementMap.channel),emissiveMapUv:Vt&&_(g.emissiveMap.channel),metalnessMapUv:Wt&&_(g.metalnessMap.channel),roughnessMapUv:I&&_(g.roughnessMap.channel),anisotropyMapUv:G&&_(g.anisotropyMap.channel),clearcoatMapUv:Q&&_(g.clearcoatMap.channel),clearcoatNormalMapUv:rt&&_(g.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ut&&_(g.clearcoatRoughnessMap.channel),iridescenceMapUv:X&&_(g.iridescenceMap.channel),iridescenceThicknessMapUv:J&&_(g.iridescenceThicknessMap.channel),sheenColorMapUv:vt&&_(g.sheenColorMap.channel),sheenRoughnessMapUv:It&&_(g.sheenRoughnessMap.channel),specularMapUv:mt&&_(g.specularMap.channel),specularColorMapUv:at&&_(g.specularColorMap.channel),specularIntensityMapUv:Ot&&_(g.specularIntensityMap.channel),transmissionMapUv:zt&&_(g.transmissionMap.channel),thicknessMapUv:ie&&_(g.thicknessMap.channel),alphaMapUv:ct&&_(g.alphaMap.channel),vertexTangents:!!W.attributes.tangent&&(Pt||me),vertexNormals:!!W.attributes.normal,vertexColors:g.vertexColors,vertexAlphas:g.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,pointsUvs:k.isPoints===!0&&!!W.attributes.uv&&(Gt||ct),fog:!!F,useFog:g.fog===!0,fogExp2:!!F&&F.isFogExp2,flatShading:g.wireframe===!1&&(g.flatShading===!0||W.attributes.normal===void 0&&Pt===!1&&(g.isMeshLambertMaterial||g.isMeshPhongMaterial||g.isMeshStandardMaterial||g.isMeshPhysicalMaterial)),sizeAttenuation:g.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:Ft,skinning:k.isSkinnedMesh===!0,hasPositionAttribute:W.attributes.position!==void 0,morphTargets:W.morphAttributes.position!==void 0,morphNormals:W.morphAttributes.normal!==void 0,morphColors:W.morphAttributes.color!==void 0,morphTargetsCount:Mt,morphTextureStride:ce,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numLightProbeGrids:q.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:g.dithering,shadowMapEnabled:t.shadowMap.enabled&&U.length>0,shadowMapType:t.shadowMap.type,toneMapping:et,decodeVideoTexture:Gt&&g.map.isVideoTexture===!0&&te.getTransfer(g.map.colorSpace)===pe,decodeVideoTextureEmissive:Vt&&g.emissiveMap.isVideoTexture===!0&&te.getTransfer(g.emissiveMap.colorSpace)===pe,premultipliedAlpha:g.premultipliedAlpha,doubleSided:g.side===Tn,flipSided:g.side===je,useDepthPacking:g.depthPacking>=0,depthPacking:g.depthPacking||0,index0AttributeName:g.index0AttributeName,extensionClipCullDistance:Et&&g.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Et&&g.extensions.multiDraw===!0||kt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:g.customProgramCacheKey()};return pt.vertexUv1s=l.has(1),pt.vertexUv2s=l.has(2),pt.vertexUv3s=l.has(3),l.clear(),pt}function m(g){let M=[];if(g.shaderID)M.push(g.shaderID);else M.push(g.customVertexShaderID),M.push(g.customFragmentShaderID);if(g.defines!==void 0)for(let U in g.defines)M.push(U),M.push(g.defines[U]);if(g.isRawShaderMaterial===!1)f(M,g),w(M,g),M.push(t.outputColorSpace);return M.push(g.customProgramCacheKey),M.join()}function f(g,M){g.push(M.precision),g.push(M.outputColorSpace),g.push(M.envMapMode),g.push(M.envMapCubeUVHeight),g.push(M.mapUv),g.push(M.alphaMapUv),g.push(M.lightMapUv),g.push(M.aoMapUv),g.push(M.bumpMapUv),g.push(M.normalMapUv),g.push(M.displacementMapUv),g.push(M.emissiveMapUv),g.push(M.metalnessMapUv),g.push(M.roughnessMapUv),g.push(M.anisotropyMapUv),g.push(M.clearcoatMapUv),g.push(M.clearcoatNormalMapUv),g.push(M.clearcoatRoughnessMapUv),g.push(M.iridescenceMapUv),g.push(M.iridescenceThicknessMapUv),g.push(M.sheenColorMapUv),g.push(M.sheenRoughnessMapUv),g.push(M.specularMapUv),g.push(M.specularColorMapUv),g.push(M.specularIntensityMapUv),g.push(M.transmissionMapUv),g.push(M.thicknessMapUv),g.push(M.combine),g.push(M.fogExp2),g.push(M.sizeAttenuation),g.push(M.morphTargetsCount),g.push(M.morphAttributeCount),g.push(M.numDirLights),g.push(M.numPointLights),g.push(M.numSpotLights),g.push(M.numSpotLightMaps),g.push(M.numHemiLights),g.push(M.numRectAreaLights),g.push(M.numDirLightShadows),g.push(M.numPointLightShadows),g.push(M.numSpotLightShadows),g.push(M.numSpotLightShadowsWithMaps),g.push(M.numLightProbes),g.push(M.shadowMapType),g.push(M.toneMapping),g.push(M.numClippingPlanes),g.push(M.numClipIntersection),g.push(M.depthPacking)}function w(g,M){if(a.disableAll(),M.instancing)a.enable(0);if(M.instancingColor)a.enable(1);if(M.instancingMorph)a.enable(2);if(M.matcap)a.enable(3);if(M.envMap)a.enable(4);if(M.normalMapObjectSpace)a.enable(5);if(M.normalMapTangentSpace)a.enable(6);if(M.clearcoat)a.enable(7);if(M.iridescence)a.enable(8);if(M.alphaTest)a.enable(9);if(M.vertexColors)a.enable(10);if(M.vertexAlphas)a.enable(11);if(M.vertexUv1s)a.enable(12);if(M.vertexUv2s)a.enable(13);if(M.vertexUv3s)a.enable(14);if(M.vertexTangents)a.enable(15);if(M.anisotropy)a.enable(16);if(M.alphaHash)a.enable(17);if(M.batching)a.enable(18);if(M.dispersion)a.enable(19);if(M.batchingColor)a.enable(20);if(M.gradientMap)a.enable(21);if(M.packedNormalMap)a.enable(22);if(M.vertexNormals)a.enable(23);if(g.push(a.mask),a.disableAll(),M.fog)a.enable(0);if(M.useFog)a.enable(1);if(M.flatShading)a.enable(2);if(M.logarithmicDepthBuffer)a.enable(3);if(M.reversedDepthBuffer)a.enable(4);if(M.skinning)a.enable(5);if(M.morphTargets)a.enable(6);if(M.morphNormals)a.enable(7);if(M.morphColors)a.enable(8);if(M.premultipliedAlpha)a.enable(9);if(M.shadowMapEnabled)a.enable(10);if(M.doubleSided)a.enable(11);if(M.flipSided)a.enable(12);if(M.useDepthPacking)a.enable(13);if(M.dithering)a.enable(14);if(M.transmission)a.enable(15);if(M.sheen)a.enable(16);if(M.opaque)a.enable(17);if(M.pointsUvs)a.enable(18);if(M.decodeVideoTexture)a.enable(19);if(M.decodeVideoTextureEmissive)a.enable(20);if(M.alphaToCoverage)a.enable(21);if(M.numLightProbeGrids>0)a.enable(22);if(M.hasPositionAttribute)a.enable(23);g.push(a.mask)}function b(g){let M=p[g.type],U;if(M){let C=Pn[M];U=ed.clone(C.uniforms)}else U=g.uniforms;return U}function x(g,M){let U=u.get(M);if(U!==void 0)++U.usedTimes;else U=new J_(t,M,g,s),c.push(U),u.set(M,U);return U}function T(g){if(--g.usedTimes===0){let M=c.indexOf(g);c[M]=c[c.length-1],c.pop(),u.delete(g.cacheKey),g.destroy()}}function A(g){o.remove(g)}function R(){o.dispose()}return{getParameters:S,getProgramCacheKey:m,getUniforms:b,acquireProgram:x,releaseProgram:T,releaseShaderCache:A,programs:c,dispose:R}}function tx(){let t=new WeakMap;function e(a){return t.has(a)}function n(a){let o=t.get(a);if(o===void 0)o={},t.set(a,o);return o}function i(a){t.delete(a)}function s(a,o,l){t.get(a)[o]=l}function r(){t=new WeakMap}return{has:e,get:n,remove:i,update:s,dispose:r}}function ex(t,e){if(t.groupOrder!==e.groupOrder)return t.groupOrder-e.groupOrder;else if(t.renderOrder!==e.renderOrder)return t.renderOrder-e.renderOrder;else if(t.material.id!==e.material.id)return t.material.id-e.material.id;else if(t.materialVariant!==e.materialVariant)return t.materialVariant-e.materialVariant;else if(t.z!==e.z)return t.z-e.z;else return t.id-e.id}function Ed(t,e){if(t.groupOrder!==e.groupOrder)return t.groupOrder-e.groupOrder;else if(t.renderOrder!==e.renderOrder)return t.renderOrder-e.renderOrder;else if(t.z!==e.z)return e.z-t.z;else return t.id-e.id}function Td(){let t=[],e=0,n=[],i=[],s=[];function r(){e=0,n.length=0,i.length=0,s.length=0}function a(h){let p=0;if(h.isInstancedMesh)p+=2;if(h.isSkinnedMesh)p+=1;return p}function o(h,p,_,S,m,f){let w=t[e];if(w===void 0)w={id:h.id,object:h,geometry:p,material:_,materialVariant:a(h),groupOrder:S,renderOrder:h.renderOrder,z:m,group:f},t[e]=w;else w.id=h.id,w.object=h,w.geometry=p,w.material=_,w.materialVariant=a(h),w.groupOrder=S,w.renderOrder=h.renderOrder,w.z=m,w.group=f;return e++,w}function l(h,p,_,S,m,f){let w=o(h,p,_,S,m,f);if(_.transmission>0)i.push(w);else if(_.transparent===!0)s.push(w);else n.push(w)}function c(h,p,_,S,m,f){let w=o(h,p,_,S,m,f);if(_.transmission>0)i.unshift(w);else if(_.transparent===!0)s.unshift(w);else n.unshift(w)}function u(h,p,_){if(n.length>1)n.sort(h||ex);if(i.length>1)i.sort(p||Ed);if(s.length>1)s.sort(p||Ed);if(_)n.reverse(),i.reverse(),s.reverse()}function d(){for(let h=e,p=t.length;h<p;h++){let _=t[h];if(_.id===null)break;_.id=null,_.object=null,_.geometry=null,_.material=null,_.group=null}}return{opaque:n,transmissive:i,transparent:s,init:r,push:l,unshift:c,finish:d,sort:u}}function nx(){let t=new WeakMap;function e(i,s){let r=t.get(i),a;if(r===void 0)a=new Td,t.set(i,[a]);else if(s>=r.length)a=new Td,r.push(a);else a=r[s];return a}function n(){t=new WeakMap}return{get:e,dispose:n}}function ix(){let t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new P,color:new Yt};break;case"SpotLight":n={position:new P,direction:new P,color:new Yt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new P,color:new Yt,distance:0,decay:0};break;case"HemisphereLight":n={direction:new P,skyColor:new Yt,groundColor:new Yt};break;case"RectAreaLight":n={color:new Yt,position:new P,halfWidth:new P,halfHeight:new P};break}return t[e.id]=n,n}}}function sx(){let t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new tt};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new tt};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new tt,shadowCameraNear:1,shadowCameraFar:1000};break}return t[e.id]=n,n}}}var rx=0;function ax(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function ox(t){let e=new ix,n=sx(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new P);let s=new P,r=new se,a=new se;function o(c){let u=0,d=0,h=0;for(let M=0;M<9;M++)i.probe[M].set(0,0,0);let p=0,_=0,S=0,m=0,f=0,w=0,b=0,x=0,T=0,A=0,R=0;c.sort(ax);for(let M=0,U=c.length;M<U;M++){let C=c[M],{color:k,intensity:q,distance:F}=C,W=null;if(C.shadow&&C.shadow.map)if(C.shadow.map.texture.format===Ei)W=C.shadow.map.texture;else W=C.shadow.map.depthTexture||C.shadow.map.texture;if(C.isAmbientLight)u+=k.r*q,d+=k.g*q,h+=k.b*q;else if(C.isLightProbe){for(let V=0;V<9;V++)i.probe[V].addScaledVector(C.sh.coefficients[V],q);R++}else if(C.isDirectionalLight){let V=e.get(C);if(V.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){let O=C.shadow,K=n.get(C);K.shadowIntensity=O.intensity,K.shadowBias=O.bias,K.shadowNormalBias=O.normalBias,K.shadowRadius=O.radius,K.shadowMapSize=O.mapSize,i.directionalShadow[p]=K,i.directionalShadowMap[p]=W,i.directionalShadowMatrix[p]=C.shadow.matrix,w++}i.directional[p]=V,p++}else if(C.isSpotLight){let V=e.get(C);V.position.setFromMatrixPosition(C.matrixWorld),V.color.copy(k).multiplyScalar(q),V.distance=F,V.coneCos=Math.cos(C.angle),V.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),V.decay=C.decay,i.spot[S]=V;let O=C.shadow;if(C.map){if(i.spotLightMap[T]=C.map,T++,O.updateMatrices(C),C.castShadow)A++}if(i.spotLightMatrix[S]=O.matrix,C.castShadow){let K=n.get(C);K.shadowIntensity=O.intensity,K.shadowBias=O.bias,K.shadowNormalBias=O.normalBias,K.shadowRadius=O.radius,K.shadowMapSize=O.mapSize,i.spotShadow[S]=K,i.spotShadowMap[S]=W,x++}S++}else if(C.isRectAreaLight){let V=e.get(C);V.color.copy(k).multiplyScalar(q),V.halfWidth.set(C.width*0.5,0,0),V.halfHeight.set(0,C.height*0.5,0),i.rectArea[m]=V,m++}else if(C.isPointLight){let V=e.get(C);if(V.color.copy(C.color).multiplyScalar(C.intensity),V.distance=C.distance,V.decay=C.decay,C.castShadow){let O=C.shadow,K=n.get(C);K.shadowIntensity=O.intensity,K.shadowBias=O.bias,K.shadowNormalBias=O.normalBias,K.shadowRadius=O.radius,K.shadowMapSize=O.mapSize,K.shadowCameraNear=O.camera.near,K.shadowCameraFar=O.camera.far,i.pointShadow[_]=K,i.pointShadowMap[_]=W,i.pointShadowMatrix[_]=C.shadow.matrix,b++}i.point[_]=V,_++}else if(C.isHemisphereLight){let V=e.get(C);V.skyColor.copy(C.color).multiplyScalar(q),V.groundColor.copy(C.groundColor).multiplyScalar(q),i.hemi[f]=V,f++}}if(m>0)if(t.has("OES_texture_float_linear")===!0)i.rectAreaLTC1=gt.LTC_FLOAT_1,i.rectAreaLTC2=gt.LTC_FLOAT_2;else i.rectAreaLTC1=gt.LTC_HALF_1,i.rectAreaLTC2=gt.LTC_HALF_2;i.ambient[0]=u,i.ambient[1]=d,i.ambient[2]=h;let g=i.hash;if(g.directionalLength!==p||g.pointLength!==_||g.spotLength!==S||g.rectAreaLength!==m||g.hemiLength!==f||g.numDirectionalShadows!==w||g.numPointShadows!==b||g.numSpotShadows!==x||g.numSpotMaps!==T||g.numLightProbes!==R)i.directional.length=p,i.spot.length=S,i.rectArea.length=m,i.point.length=_,i.hemi.length=f,i.directionalShadow.length=w,i.directionalShadowMap.length=w,i.pointShadow.length=b,i.pointShadowMap.length=b,i.spotShadow.length=x,i.spotShadowMap.length=x,i.directionalShadowMatrix.length=w,i.pointShadowMatrix.length=b,i.spotLightMatrix.length=x+T-A,i.spotLightMap.length=T,i.numSpotLightShadowsWithMaps=A,i.numLightProbes=R,g.directionalLength=p,g.pointLength=_,g.spotLength=S,g.rectAreaLength=m,g.hemiLength=f,g.numDirectionalShadows=w,g.numPointShadows=b,g.numSpotShadows=x,g.numSpotMaps=T,g.numLightProbes=R,i.version=rx++}function l(c,u){let d=0,h=0,p=0,_=0,S=0,m=u.matrixWorldInverse;for(let f=0,w=c.length;f<w;f++){let b=c[f];if(b.isDirectionalLight){let x=i.directional[d];x.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(m),d++}else if(b.isSpotLight){let x=i.spot[p];x.position.setFromMatrixPosition(b.matrixWorld),x.position.applyMatrix4(m),x.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(m),p++}else if(b.isRectAreaLight){let x=i.rectArea[_];x.position.setFromMatrixPosition(b.matrixWorld),x.position.applyMatrix4(m),a.identity(),r.copy(b.matrixWorld),r.premultiply(m),a.extractRotation(r),x.halfWidth.set(b.width*0.5,0,0),x.halfHeight.set(0,b.height*0.5,0),x.halfWidth.applyMatrix4(a),x.halfHeight.applyMatrix4(a),_++}else if(b.isPointLight){let x=i.point[h];x.position.setFromMatrixPosition(b.matrixWorld),x.position.applyMatrix4(m),h++}else if(b.isHemisphereLight){let x=i.hemi[S];x.direction.setFromMatrixPosition(b.matrixWorld),x.direction.transformDirection(m),S++}}}return{setup:o,setupView:l,state:i}}function wd(t){let e=new ox(t),n=[],i=[],s=[];function r(h){d.camera=h,n.length=0,i.length=0,s.length=0}function a(h){n.push(h)}function o(h){i.push(h)}function l(h){s.push(h)}function c(){e.setup(n)}function u(h){e.setupView(n,h)}let d={lightsArray:n,shadowsArray:i,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:d,setupLights:c,setupLightsView:u,pushLight:a,pushShadow:o,pushLightProbeGrid:l}}function lx(t){let e=new WeakMap;function n(s,r=0){let a=e.get(s),o;if(a===void 0)o=new wd(t),e.set(s,[o]);else if(r>=a.length)o=new wd(t),a.push(o);else o=a[r];return o}function i(){e=new WeakMap}return{get:n,dispose:i}}var cx=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,hx=`uniform sampler2D shadow_pass;
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
}`,ux=[new P(1,0,0),new P(-1,0,0),new P(0,1,0),new P(0,-1,0),new P(0,0,1),new P(0,0,-1)],dx=[new P(0,-1,0),new P(0,-1,0),new P(0,0,1),new P(0,0,-1),new P(0,-1,0),new P(0,-1,0)],Ad=new se,_r=new P,wc=new P;function fx(t,e,n){let i=new lr,s=new tt,r=new tt,a=new ye,o=new ic,l=new sc,c={},u=n.maxTextureSize,d={[us]:je,[je]:us,[Tn]:Tn},h=new un({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new tt},radius:{value:4}},vertexShader:cx,fragmentShader:hx}),p=h.clone();p.defines.HORIZONTAL_PASS=1;let _=new Pe;_.setAttribute("position",new Ke(new Float32Array([-1,-1,0.5,3,-1,0.5,-1,3,0.5]),3));let S=new Qt(_,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=js;let f=this.type;this.render=function(A,R,g){if(m.enabled===!1)return;if(m.autoUpdate===!1&&m.needsUpdate===!1)return;if(A.length===0)return;if(this.type===oa)Ut("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=js;let M=t.getRenderTarget(),U=t.getActiveCubeFace(),C=t.getActiveMipmapLevel(),k=t.state;if(k.setBlending(wn),k.buffers.depth.getReversed()===!0)k.buffers.color.setClear(0,0,0,0);else k.buffers.color.setClear(1,1,1,1);k.buffers.depth.setTest(!0),k.setScissorTest(!1);let q=f!==this.type;if(q)R.traverse(function(F){if(F.material)if(Array.isArray(F.material))F.material.forEach((W)=>W.needsUpdate=!0);else F.material.needsUpdate=!0});for(let F=0,W=A.length;F<W;F++){let V=A[F],O=V.shadow;if(O===void 0){Ut("WebGLShadowMap:",V,"has no shadow.");continue}if(O.autoUpdate===!1&&O.needsUpdate===!1)continue;s.copy(O.mapSize);let K=O.getFrameExtents();if(s.multiply(K),r.copy(O.mapSize),s.x>u||s.y>u){if(s.x>u)r.x=Math.floor(u/K.x),s.x=r.x*K.x,O.mapSize.x=r.x;if(s.y>u)r.y=Math.floor(u/K.y),s.y=r.y*K.y,O.mapSize.y=r.y}let st=t.state.buffers.depth.getReversed();if(O.camera._reversedDepth=st,O.map===null||q===!0){if(O.map!==null){if(O.map.depthTexture!==null)O.map.depthTexture.dispose(),O.map.depthTexture=null;O.map.dispose()}if(this.type===hs){if(V.isPointLight){Ut("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}O.map=new cn(s.x,s.y,{format:Ei,type:Gn,minFilter:We,magFilter:We,generateMipmaps:!1}),O.map.texture.name=V.name+".shadowMap",O.map.depthTexture=new ri(s.x,s.y,kn),O.map.depthTexture.name=V.name+".shadowMapDepth",O.map.depthTexture.format=Si,O.map.depthTexture.compareFunction=null,O.map.depthTexture.minFilter=ni,O.map.depthTexture.magFilter=ni}else{if(V.isPointLight)O.map=new Pc(s.x),O.map.depthTexture=new Yl(s.x,ii);else O.map=new cn(s.x,s.y),O.map.depthTexture=new ri(s.x,s.y,ii);if(O.map.depthTexture.name=V.name+".shadowMap",O.map.depthTexture.format=Si,this.type===js)O.map.depthTexture.compareFunction=st?va:ya,O.map.depthTexture.minFilter=We,O.map.depthTexture.magFilter=We;else O.map.depthTexture.compareFunction=null,O.map.depthTexture.minFilter=ni,O.map.depthTexture.magFilter=ni}O.camera.updateProjectionMatrix()}let ot=O.map.isWebGLCubeRenderTarget?6:1;for(let At=0;At<ot;At++){if(O.map.isWebGLCubeRenderTarget)t.setRenderTarget(O.map,At),t.clear();else{if(At===0)t.setRenderTarget(O.map),t.clear();let Mt=O.getViewport(At);a.set(r.x*Mt.x,r.y*Mt.y,r.x*Mt.z,r.y*Mt.w),k.viewport(a)}if(V.isPointLight){let{camera:Mt,matrix:ce}=O,ae=V.distance||Mt.far;if(ae!==Mt.far)Mt.far=ae,Mt.updateProjectionMatrix();_r.setFromMatrixPosition(V.matrixWorld),Mt.position.copy(_r),wc.copy(Mt.position),wc.add(ux[At]),Mt.up.copy(dx[At]),Mt.lookAt(wc),Mt.updateMatrixWorld(),ce.makeTranslation(-_r.x,-_r.y,-_r.z),Ad.multiplyMatrices(Mt.projectionMatrix,Mt.matrixWorldInverse),O._frustum.setFromProjectionMatrix(Ad,Mt.coordinateSystem,Mt.reversedDepth)}else O.updateMatrices(V);i=O.getFrustum(),x(R,g,O.camera,V,this.type)}if(O.isPointLightShadow!==!0&&this.type===hs)w(O,g);O.needsUpdate=!1}f=this.type,m.needsUpdate=!1,t.setRenderTarget(M,U,C)};function w(A,R){let g=e.update(S);if(h.defines.VSM_SAMPLES!==A.blurSamples)h.defines.VSM_SAMPLES=A.blurSamples,p.defines.VSM_SAMPLES=A.blurSamples,h.needsUpdate=!0,p.needsUpdate=!0;if(A.mapPass===null)A.mapPass=new cn(s.x,s.y,{format:Ei,type:Gn});h.uniforms.shadow_pass.value=A.map.depthTexture,h.uniforms.resolution.value=A.mapSize,h.uniforms.radius.value=A.radius,t.setRenderTarget(A.mapPass),t.clear(),t.renderBufferDirect(R,null,g,h,S,null),p.uniforms.shadow_pass.value=A.mapPass.texture,p.uniforms.resolution.value=A.mapSize,p.uniforms.radius.value=A.radius,t.setRenderTarget(A.map),t.clear(),t.renderBufferDirect(R,null,g,p,S,null)}function b(A,R,g,M){let U=null,C=g.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(C!==void 0)U=C;else if(U=g.isPointLight===!0?l:o,t.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0||R.alphaToCoverage===!0){let k=U.uuid,q=R.uuid,F=c[k];if(F===void 0)F={},c[k]=F;let W=F[q];if(W===void 0)W=U.clone(),F[q]=W,R.addEventListener("dispose",T);U=W}if(U.visible=R.visible,U.wireframe=R.wireframe,M===hs)U.side=R.shadowSide!==null?R.shadowSide:R.side;else U.side=R.shadowSide!==null?R.shadowSide:d[R.side];if(U.alphaMap=R.alphaMap,U.alphaTest=R.alphaToCoverage===!0?0.5:R.alphaTest,U.map=R.map,U.clipShadows=R.clipShadows,U.clippingPlanes=R.clippingPlanes,U.clipIntersection=R.clipIntersection,U.displacementMap=R.displacementMap,U.displacementScale=R.displacementScale,U.displacementBias=R.displacementBias,U.wireframeLinewidth=R.wireframeLinewidth,U.linewidth=R.linewidth,g.isPointLight===!0&&U.isMeshDistanceMaterial===!0){let k=t.properties.get(U);k.light=g}return U}function x(A,R,g,M,U){if(A.visible===!1)return;if(A.layers.test(R.layers)&&(A.isMesh||A.isLine||A.isPoints)){if((A.castShadow||A.receiveShadow&&U===hs)&&(!A.frustumCulled||i.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(g.matrixWorldInverse,A.matrixWorld);let q=e.update(A),F=A.material;if(Array.isArray(F)){let W=q.groups;for(let V=0,O=W.length;V<O;V++){let K=W[V],st=F[K.materialIndex];if(st&&st.visible){let ot=b(A,st,M,U);A.onBeforeShadow(t,A,R,g,q,ot,K),t.renderBufferDirect(g,null,q,ot,A,K),A.onAfterShadow(t,A,R,g,q,ot,K)}}}else if(F.visible){let W=b(A,F,M,U);A.onBeforeShadow(t,A,R,g,q,W,null),t.renderBufferDirect(g,null,q,W,A,null),A.onAfterShadow(t,A,R,g,q,W,null)}}}let k=A.children;for(let q=0,F=k.length;q<F;q++)x(k[q],R,g,M,U)}function T(A){A.target.removeEventListener("dispose",T);for(let g in c){let M=c[g],U=A.target.uuid;if(U in M)M[U].dispose(),delete M[U]}}}function px(t,e){function n(){let D=!1,ct=new ye,Y=null,ft=new ye(0,0,0,0);return{setMask:function(Et){if(Y!==Et&&!D)t.colorMask(Et,Et,Et,Et),Y=Et},setLocked:function(Et){D=Et},setClear:function(Et,et,pt,Xt,Te){if(Te===!0)Et*=Xt,et*=Xt,pt*=Xt;if(ct.set(Et,et,pt,Xt),ft.equals(ct)===!1)t.clearColor(Et,et,pt,Xt),ft.copy(ct)},reset:function(){D=!1,Y=null,ft.set(-1,0,0,0)}}}function i(){let D=!1,ct=!1,Y=null,ft=null,Et=null;return{setReversed:function(et){if(ct!==et){let pt=e.get("EXT_clip_control");if(et)pt.clipControlEXT(pt.LOWER_LEFT_EXT,pt.ZERO_TO_ONE_EXT);else pt.clipControlEXT(pt.LOWER_LEFT_EXT,pt.NEGATIVE_ONE_TO_ONE_EXT);ct=et;let Xt=Et;Et=null,this.setClear(Xt)}},getReversed:function(){return ct},setTest:function(et){if(et)dt(t.DEPTH_TEST);else Ft(t.DEPTH_TEST)},setMask:function(et){if(Y!==et&&!D)t.depthMask(et),Y=et},setFunc:function(et){if(ct)et=Yu[et];if(ft!==et){switch(et){case xu:t.depthFunc(t.NEVER);break;case yu:t.depthFunc(t.ALWAYS);break;case vu:t.depthFunc(t.LESS);break;case Yo:t.depthFunc(t.LEQUAL);break;case Mu:t.depthFunc(t.EQUAL);break;case Su:t.depthFunc(t.GEQUAL);break;case bu:t.depthFunc(t.GREATER);break;case Eu:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}ft=et}},setLocked:function(et){D=et},setClear:function(et){if(Et!==et){if(Et=et,ct)et=1-et;t.clearDepth(et)}},reset:function(){D=!1,Y=null,ft=null,Et=null,ct=!1}}}function s(){let D=!1,ct=null,Y=null,ft=null,Et=null,et=null,pt=null,Xt=null,Te=null;return{setTest:function(ge){if(!D)if(ge)dt(t.STENCIL_TEST);else Ft(t.STENCIL_TEST)},setMask:function(ge){if(ct!==ge&&!D)t.stencilMask(ge),ct=ge},setFunc:function(ge,Mn,Ln){if(Y!==ge||ft!==Mn||Et!==Ln)t.stencilFunc(ge,Mn,Ln),Y=ge,ft=Mn,Et=Ln},setOp:function(ge,Mn,Ln){if(et!==ge||pt!==Mn||Xt!==Ln)t.stencilOp(ge,Mn,Ln),et=ge,pt=Mn,Xt=Ln},setLocked:function(ge){D=ge},setClear:function(ge){if(Te!==ge)t.clearStencil(ge),Te=ge},reset:function(){D=!1,ct=null,Y=null,ft=null,Et=null,et=null,pt=null,Xt=null,Te=null}}}let r=new n,a=new i,o=new s,l=new WeakMap,c=new WeakMap,u={},d={},h={},p=new WeakMap,_=[],S=null,m=!1,f=null,w=null,b=null,x=null,T=null,A=null,R=null,g=new Yt(0,0,0),M=0,U=!1,C=null,k=null,q=null,F=null,W=null,V=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS),O=!1,K=0,st=t.getParameter(t.VERSION);if(st.indexOf("WebGL")!==-1)K=parseFloat(/^WebGL (\d)/.exec(st)[1]),O=K>=1;else if(st.indexOf("OpenGL ES")!==-1)K=parseFloat(/^OpenGL ES (\d)/.exec(st)[1]),O=K>=2;let ot=null,At={},Mt=t.getParameter(t.SCISSOR_BOX),ce=t.getParameter(t.VIEWPORT),ae=new ye().fromArray(Mt),Z=new ye().fromArray(ce);function lt(D,ct,Y,ft){let Et=new Uint8Array(4),et=t.createTexture();t.bindTexture(D,et),t.texParameteri(D,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(D,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let pt=0;pt<Y;pt++)if(D===t.TEXTURE_3D||D===t.TEXTURE_2D_ARRAY)t.texImage3D(ct,0,t.RGBA,1,1,ft,0,t.RGBA,t.UNSIGNED_BYTE,Et);else t.texImage2D(ct+pt,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,Et);return et}let St={};St[t.TEXTURE_2D]=lt(t.TEXTURE_2D,t.TEXTURE_2D,1),St[t.TEXTURE_CUBE_MAP]=lt(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),St[t.TEXTURE_2D_ARRAY]=lt(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),St[t.TEXTURE_3D]=lt(t.TEXTURE_3D,t.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),dt(t.DEPTH_TEST),a.setFunc(Yo),bt(!1),Pt(Vo),dt(t.CULL_FACE),nt(wn);function dt(D){if(u[D]!==!0)t.enable(D),u[D]=!0}function Ft(D){if(u[D]!==!1)t.disable(D),u[D]=!1}function ee(D,ct){if(h[D]!==ct){if(t.bindFramebuffer(D,ct),h[D]=ct,D===t.DRAW_FRAMEBUFFER)h[t.FRAMEBUFFER]=ct;if(D===t.FRAMEBUFFER)h[t.DRAW_FRAMEBUFFER]=ct;return!0}return!1}function kt(D,ct){let Y=_,ft=!1;if(D){if(Y=p.get(ct),Y===void 0)Y=[],p.set(ct,Y);let Et=D.textures;if(Y.length!==Et.length||Y[0]!==t.COLOR_ATTACHMENT0){for(let et=0,pt=Et.length;et<pt;et++)Y[et]=t.COLOR_ATTACHMENT0+et;Y.length=Et.length,ft=!0}}else if(Y[0]!==t.BACK)Y[0]=t.BACK,ft=!0;if(ft)t.drawBuffers(Y)}function Gt(D){if(S!==D)return t.useProgram(D),S=D,!0;return!1}let j={[ds]:t.FUNC_ADD,[Qh]:t.FUNC_SUBTRACT,[tu]:t.FUNC_REVERSE_SUBTRACT};j[eu]=t.MIN,j[nu]=t.MAX;let it={[iu]:t.ZERO,[su]:t.ONE,[ru]:t.SRC_COLOR,[ou]:t.SRC_ALPHA,[fu]:t.SRC_ALPHA_SATURATE,[uu]:t.DST_COLOR,[cu]:t.DST_ALPHA,[au]:t.ONE_MINUS_SRC_COLOR,[lu]:t.ONE_MINUS_SRC_ALPHA,[du]:t.ONE_MINUS_DST_COLOR,[hu]:t.ONE_MINUS_DST_ALPHA,[pu]:t.CONSTANT_COLOR,[mu]:t.ONE_MINUS_CONSTANT_COLOR,[gu]:t.CONSTANT_ALPHA,[_u]:t.ONE_MINUS_CONSTANT_ALPHA};function nt(D,ct,Y,ft,Et,et,pt,Xt,Te,ge){if(D===wn){if(m===!0)Ft(t.BLEND),m=!1;return}if(m===!1)dt(t.BLEND),m=!0;if(D!==jh){if(D!==f||ge!==U){if(w!==ds||T!==ds)t.blendEquation(t.FUNC_ADD),w=ds,T=ds;if(ge)switch(D){case Qs:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Wo:t.blendFunc(t.ONE,t.ONE);break;case Xo:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case qo:t.blendFuncSeparate(t.DST_COLOR,t.ONE_MINUS_SRC_ALPHA,t.ZERO,t.ONE);break;default:Bt("WebGLState: Invalid blending: ",D);break}else switch(D){case Qs:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Wo:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE,t.ONE,t.ONE);break;case Xo:Bt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case qo:Bt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Bt("WebGLState: Invalid blending: ",D);break}b=null,x=null,A=null,R=null,g.set(0,0,0),M=0,f=D,U=ge}return}if(Et=Et||ct,et=et||Y,pt=pt||ft,ct!==w||Et!==T)t.blendEquationSeparate(j[ct],j[Et]),w=ct,T=Et;if(Y!==b||ft!==x||et!==A||pt!==R)t.blendFuncSeparate(it[Y],it[ft],it[et],it[pt]),b=Y,x=ft,A=et,R=pt;if(Xt.equals(g)===!1||Te!==M)t.blendColor(Xt.r,Xt.g,Xt.b,Te),g.copy(Xt),M=Te;f=D,U=!1}function yt(D,ct){D.side===Tn?Ft(t.CULL_FACE):dt(t.CULL_FACE);let Y=D.side===je;if(ct)Y=!Y;bt(Y),D.blending===Qs&&D.transparent===!1?nt(wn):nt(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),a.setFunc(D.depthFunc),a.setTest(D.depthTest),a.setMask(D.depthWrite),r.setMask(D.colorWrite);let ft=D.stencilWrite;if(o.setTest(ft),ft)o.setMask(D.stencilWriteMask),o.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),o.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass);Vt(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?dt(t.SAMPLE_ALPHA_TO_COVERAGE):Ft(t.SAMPLE_ALPHA_TO_COVERAGE)}function bt(D){if(C!==D){if(D)t.frontFace(t.CW);else t.frontFace(t.CCW);C=D}}function Pt(D){if(D!==Jh){if(dt(t.CULL_FACE),D!==k)if(D===Vo)t.cullFace(t.BACK);else if(D===Kh)t.cullFace(t.FRONT);else t.cullFace(t.FRONT_AND_BACK)}else Ft(t.CULL_FACE);k=D}function Lt(D){if(D!==q){if(O)t.lineWidth(D);q=D}}function Vt(D,ct,Y){if(D){if(dt(t.POLYGON_OFFSET_FILL),F!==ct||W!==Y){if(F=ct,W=Y,a.getReversed())ct=-ct;t.polygonOffset(ct,Y)}}else Ft(t.POLYGON_OFFSET_FILL)}function Wt(D){if(D)dt(t.SCISSOR_TEST);else Ft(t.SCISSOR_TEST)}function I(D){if(D===void 0)D=t.TEXTURE0+V-1;if(ot!==D)t.activeTexture(D),ot=D}function me(D,ct,Y){if(Y===void 0)if(ot===null)Y=t.TEXTURE0+V-1;else Y=ot;let ft=At[Y];if(ft===void 0)ft={type:void 0,texture:void 0},At[Y]=ft;if(ft.type!==D||ft.texture!==ct){if(ot!==Y)t.activeTexture(Y),ot=Y;t.bindTexture(D,ct||St[D]),ft.type=D,ft.texture=ct}}function jt(){let D=At[ot];if(D!==void 0&&D.type!==void 0)t.bindTexture(D.type,null),D.type=void 0,D.texture=void 0}function Jt(){try{t.compressedTexImage2D(...arguments)}catch(D){Bt("WebGLState:",D)}}function E(){try{t.compressedTexImage3D(...arguments)}catch(D){Bt("WebGLState:",D)}}function y(){try{t.texSubImage2D(...arguments)}catch(D){Bt("WebGLState:",D)}}function L(){try{t.texSubImage3D(...arguments)}catch(D){Bt("WebGLState:",D)}}function G(){try{t.compressedTexSubImage2D(...arguments)}catch(D){Bt("WebGLState:",D)}}function Q(){try{t.compressedTexSubImage3D(...arguments)}catch(D){Bt("WebGLState:",D)}}function rt(){try{t.texStorage2D(...arguments)}catch(D){Bt("WebGLState:",D)}}function ut(){try{t.texStorage3D(...arguments)}catch(D){Bt("WebGLState:",D)}}function X(){try{t.texImage2D(...arguments)}catch(D){Bt("WebGLState:",D)}}function J(){try{t.texImage3D(...arguments)}catch(D){Bt("WebGLState:",D)}}function vt(D){if(d[D]!==void 0)return d[D];else return t.getParameter(D)}function It(D,ct){if(d[D]!==ct)t.pixelStorei(D,ct),d[D]=ct}function mt(D){if(ae.equals(D)===!1)t.scissor(D.x,D.y,D.z,D.w),ae.copy(D)}function at(D){if(Z.equals(D)===!1)t.viewport(D.x,D.y,D.z,D.w),Z.copy(D)}function Ot(D,ct){let Y=c.get(ct);if(Y===void 0)Y=new WeakMap,c.set(ct,Y);let ft=Y.get(D);if(ft===void 0)ft=t.getUniformBlockIndex(ct,D.name),Y.set(D,ft)}function zt(D,ct){let ft=c.get(ct).get(D);if(l.get(ct)!==ft)t.uniformBlockBinding(ct,ft,D.__bindingPointIndex),l.set(ct,ft)}function ie(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),a.setReversed(!1),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),t.pixelStorei(t.PACK_ALIGNMENT,4),t.pixelStorei(t.UNPACK_ALIGNMENT,4),t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,!1),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,t.BROWSER_DEFAULT_WEBGL),t.pixelStorei(t.PACK_ROW_LENGTH,0),t.pixelStorei(t.PACK_SKIP_PIXELS,0),t.pixelStorei(t.PACK_SKIP_ROWS,0),t.pixelStorei(t.UNPACK_ROW_LENGTH,0),t.pixelStorei(t.UNPACK_IMAGE_HEIGHT,0),t.pixelStorei(t.UNPACK_SKIP_PIXELS,0),t.pixelStorei(t.UNPACK_SKIP_ROWS,0),t.pixelStorei(t.UNPACK_SKIP_IMAGES,0),u={},d={},ot=null,At={},h={},p=new WeakMap,_=[],S=null,m=!1,f=null,w=null,b=null,x=null,T=null,A=null,R=null,g=new Yt(0,0,0),M=0,U=!1,C=null,k=null,q=null,F=null,W=null,ae.set(0,0,t.canvas.width,t.canvas.height),Z.set(0,0,t.canvas.width,t.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:dt,disable:Ft,bindFramebuffer:ee,drawBuffers:kt,useProgram:Gt,setBlending:nt,setMaterial:yt,setFlipSided:bt,setCullFace:Pt,setLineWidth:Lt,setPolygonOffset:Vt,setScissorTest:Wt,activeTexture:I,bindTexture:me,unbindTexture:jt,compressedTexImage2D:Jt,compressedTexImage3D:E,texImage2D:X,texImage3D:J,pixelStorei:It,getParameter:vt,updateUBOMapping:Ot,uniformBlockBinding:zt,texStorage2D:rt,texStorage3D:ut,texSubImage2D:y,texSubImage3D:L,compressedTexSubImage2D:G,compressedTexSubImage3D:Q,scissor:mt,viewport:at,reset:ie}}function mx(t,e,n,i,s,r,a){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new tt,u=new WeakMap,d=new Set,h,p=new WeakMap,_=!1;try{_=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch(E){}function S(E,y){return _?new OffscreenCanvas(E,y):qs("canvas")}function m(E,y,L){let G=1,Q=Jt(E);if(Q.width>L||Q.height>L)G=L/Math.max(Q.width,Q.height);if(G<1)if(typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&E instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&E instanceof ImageBitmap||typeof VideoFrame<"u"&&E instanceof VideoFrame){let rt=Math.floor(G*Q.width),ut=Math.floor(G*Q.height);if(h===void 0)h=S(rt,ut);let X=y?S(rt,ut):h;return X.width=rt,X.height=ut,X.getContext("2d").drawImage(E,0,0,rt,ut),Ut("WebGLRenderer: Texture has been resized from ("+Q.width+"x"+Q.height+") to ("+rt+"x"+ut+")."),X}else{if("data"in E)Ut("WebGLRenderer: Image in DataTexture is too big ("+Q.width+"x"+Q.height+").");return E}return E}function f(E){return E.generateMipmaps}function w(E){t.generateMipmap(E)}function b(E){if(E.isWebGLCubeRenderTarget)return t.TEXTURE_CUBE_MAP;if(E.isWebGL3DRenderTarget)return t.TEXTURE_3D;if(E.isWebGLArrayRenderTarget||E.isCompressedArrayTexture)return t.TEXTURE_2D_ARRAY;return t.TEXTURE_2D}function x(E,y,L,G,Q,rt=!1){if(E!==null){if(t[E]!==void 0)return t[E];Ut("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+E+"'")}let ut;if(G){if(ut=e.get("EXT_texture_norm16"),!ut)Ut("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension")}let X=y;if(y===t.RED){if(L===t.FLOAT)X=t.R32F;if(L===t.HALF_FLOAT)X=t.R16F;if(L===t.UNSIGNED_BYTE)X=t.R8;if(L===t.UNSIGNED_SHORT&&ut)X=ut.R16_EXT;if(L===t.SHORT&&ut)X=ut.R16_SNORM_EXT}if(y===t.RED_INTEGER){if(L===t.UNSIGNED_BYTE)X=t.R8UI;if(L===t.UNSIGNED_SHORT)X=t.R16UI;if(L===t.UNSIGNED_INT)X=t.R32UI;if(L===t.BYTE)X=t.R8I;if(L===t.SHORT)X=t.R16I;if(L===t.INT)X=t.R32I}if(y===t.RG){if(L===t.FLOAT)X=t.RG32F;if(L===t.HALF_FLOAT)X=t.RG16F;if(L===t.UNSIGNED_BYTE)X=t.RG8;if(L===t.UNSIGNED_SHORT&&ut)X=ut.RG16_EXT;if(L===t.SHORT&&ut)X=ut.RG16_SNORM_EXT}if(y===t.RG_INTEGER){if(L===t.UNSIGNED_BYTE)X=t.RG8UI;if(L===t.UNSIGNED_SHORT)X=t.RG16UI;if(L===t.UNSIGNED_INT)X=t.RG32UI;if(L===t.BYTE)X=t.RG8I;if(L===t.SHORT)X=t.RG16I;if(L===t.INT)X=t.RG32I}if(y===t.RGB_INTEGER){if(L===t.UNSIGNED_BYTE)X=t.RGB8UI;if(L===t.UNSIGNED_SHORT)X=t.RGB16UI;if(L===t.UNSIGNED_INT)X=t.RGB32UI;if(L===t.BYTE)X=t.RGB8I;if(L===t.SHORT)X=t.RGB16I;if(L===t.INT)X=t.RGB32I}if(y===t.RGBA_INTEGER){if(L===t.UNSIGNED_BYTE)X=t.RGBA8UI;if(L===t.UNSIGNED_SHORT)X=t.RGBA16UI;if(L===t.UNSIGNED_INT)X=t.RGBA32UI;if(L===t.BYTE)X=t.RGBA8I;if(L===t.SHORT)X=t.RGBA16I;if(L===t.INT)X=t.RGBA32I}if(y===t.RGB){if(L===t.UNSIGNED_SHORT&&ut)X=ut.RGB16_EXT;if(L===t.SHORT&&ut)X=ut.RGB16_SNORM_EXT;if(L===t.UNSIGNED_INT_5_9_9_9_REV)X=t.RGB9_E5;if(L===t.UNSIGNED_INT_10F_11F_11F_REV)X=t.R11F_G11F_B10F}if(y===t.RGBA){let J=rt?zl:te.getTransfer(Q);if(L===t.FLOAT)X=t.RGBA32F;if(L===t.HALF_FLOAT)X=t.RGBA16F;if(L===t.UNSIGNED_BYTE)X=J===pe?t.SRGB8_ALPHA8:t.RGBA8;if(L===t.UNSIGNED_SHORT&&ut)X=ut.RGBA16_EXT;if(L===t.SHORT&&ut)X=ut.RGBA16_SNORM_EXT;if(L===t.UNSIGNED_SHORT_4_4_4_4)X=t.RGBA4;if(L===t.UNSIGNED_SHORT_5_5_5_1)X=t.RGB5_A1}if(X===t.R16F||X===t.R32F||X===t.RG16F||X===t.RG32F||X===t.RGBA16F||X===t.RGBA32F)e.get("EXT_color_buffer_float");return X}function T(E,y){let L;if(E){if(y===null||y===ii||y===ps)L=t.DEPTH24_STENCIL8;else if(y===kn)L=t.DEPTH32F_STENCIL8;else if(y===nr)L=t.DEPTH24_STENCIL8,Ut("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")}else if(y===null||y===ii||y===ps)L=t.DEPTH_COMPONENT24;else if(y===kn)L=t.DEPTH_COMPONENT32F;else if(y===nr)L=t.DEPTH_COMPONENT16;return L}function A(E,y){if(f(E)===!0||E.isFramebufferTexture&&E.minFilter!==ni&&E.minFilter!==We)return Math.log2(Math.max(y.width,y.height))+1;else if(E.mipmaps!==void 0&&E.mipmaps.length>0)return E.mipmaps.length;else if(E.isCompressedTexture&&Array.isArray(E.image))return y.mipmaps.length;else return 1}function R(E){let y=E.target;if(y.removeEventListener("dispose",R),M(y),y.isVideoTexture)u.delete(y);if(y.isHTMLTexture)d.delete(y)}function g(E){let y=E.target;y.removeEventListener("dispose",g),C(y)}function M(E){let y=i.get(E);if(y.__webglInit===void 0)return;let L=E.source,G=p.get(L);if(G){let Q=G[y.__cacheKey];if(Q.usedTimes--,Q.usedTimes===0)U(E);if(Object.keys(G).length===0)p.delete(L)}i.remove(E)}function U(E){let y=i.get(E);t.deleteTexture(y.__webglTexture);let L=E.source,G=p.get(L);delete G[y.__cacheKey],a.memory.textures--}function C(E){let y=i.get(E);if(E.depthTexture)E.depthTexture.dispose(),i.remove(E.depthTexture);if(E.isWebGLCubeRenderTarget)for(let G=0;G<6;G++){if(Array.isArray(y.__webglFramebuffer[G]))for(let Q=0;Q<y.__webglFramebuffer[G].length;Q++)t.deleteFramebuffer(y.__webglFramebuffer[G][Q]);else t.deleteFramebuffer(y.__webglFramebuffer[G]);if(y.__webglDepthbuffer)t.deleteRenderbuffer(y.__webglDepthbuffer[G])}else{if(Array.isArray(y.__webglFramebuffer))for(let G=0;G<y.__webglFramebuffer.length;G++)t.deleteFramebuffer(y.__webglFramebuffer[G]);else t.deleteFramebuffer(y.__webglFramebuffer);if(y.__webglDepthbuffer)t.deleteRenderbuffer(y.__webglDepthbuffer);if(y.__webglMultisampledFramebuffer)t.deleteFramebuffer(y.__webglMultisampledFramebuffer);if(y.__webglColorRenderbuffer){for(let G=0;G<y.__webglColorRenderbuffer.length;G++)if(y.__webglColorRenderbuffer[G])t.deleteRenderbuffer(y.__webglColorRenderbuffer[G])}if(y.__webglDepthRenderbuffer)t.deleteRenderbuffer(y.__webglDepthRenderbuffer)}let L=E.textures;for(let G=0,Q=L.length;G<Q;G++){let rt=i.get(L[G]);if(rt.__webglTexture)t.deleteTexture(rt.__webglTexture),a.memory.textures--;i.remove(L[G])}i.remove(E)}let k=0;function q(){k=0}function F(){return k}function W(E){k=E}function V(){let E=k;if(E>=s.maxTextures)Ut("WebGLTextures: Trying to use "+E+" texture units while this GPU supports only "+s.maxTextures);return k+=1,E}function O(E){let y=[];return y.push(E.wrapS),y.push(E.wrapT),y.push(E.wrapR||0),y.push(E.magFilter),y.push(E.minFilter),y.push(E.anisotropy),y.push(E.internalFormat),y.push(E.format),y.push(E.type),y.push(E.generateMipmaps),y.push(E.premultiplyAlpha),y.push(E.flipY),y.push(E.unpackAlignment),y.push(E.colorSpace),y.join()}function K(E,y){let L=i.get(E);if(E.isVideoTexture)me(E);if(E.isRenderTargetTexture===!1&&E.isExternalTexture!==!0&&E.version>0&&L.__version!==E.version){let G=E.image;if(G===null)Ut("WebGLRenderer: Texture marked for update but no image data found.");else if(G.complete===!1)Ut("WebGLRenderer: Texture marked for update but image is incomplete");else{Ft(L,E,y);return}}else if(E.isExternalTexture)L.__webglTexture=E.sourceTexture?E.sourceTexture:null;n.bindTexture(t.TEXTURE_2D,L.__webglTexture,t.TEXTURE0+y)}function st(E,y){let L=i.get(E);if(E.isRenderTargetTexture===!1&&E.version>0&&L.__version!==E.version){Ft(L,E,y);return}else if(E.isExternalTexture)L.__webglTexture=E.sourceTexture?E.sourceTexture:null;n.bindTexture(t.TEXTURE_2D_ARRAY,L.__webglTexture,t.TEXTURE0+y)}function ot(E,y){let L=i.get(E);if(E.isRenderTargetTexture===!1&&E.version>0&&L.__version!==E.version){Ft(L,E,y);return}n.bindTexture(t.TEXTURE_3D,L.__webglTexture,t.TEXTURE0+y)}function At(E,y){let L=i.get(E);if(E.isCubeDepthTexture!==!0&&E.version>0&&L.__version!==E.version){ee(L,E,y);return}n.bindTexture(t.TEXTURE_CUBE_MAP,L.__webglTexture,t.TEXTURE0+y)}let Mt={[ha]:t.REPEAT,[ua]:t.CLAMP_TO_EDGE,[Ru]:t.MIRRORED_REPEAT},ce={[ni]:t.NEAREST,[Cu]:t.NEAREST_MIPMAP_NEAREST,[er]:t.NEAREST_MIPMAP_LINEAR,[We]:t.LINEAR,[da]:t.LINEAR_MIPMAP_NEAREST,[Mi]:t.LINEAR_MIPMAP_LINEAR},ae={[Bu]:t.NEVER,[Vu]:t.ALWAYS,[zu]:t.LESS,[ya]:t.LEQUAL,[ku]:t.EQUAL,[va]:t.GEQUAL,[Gu]:t.GREATER,[Hu]:t.NOTEQUAL};function Z(E,y){if(y.type===kn&&e.has("OES_texture_float_linear")===!1&&(y.magFilter===We||y.magFilter===da||y.magFilter===er||y.magFilter===Mi||y.minFilter===We||y.minFilter===da||y.minFilter===er||y.minFilter===Mi))Ut("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device.");if(t.texParameteri(E,t.TEXTURE_WRAP_S,Mt[y.wrapS]),t.texParameteri(E,t.TEXTURE_WRAP_T,Mt[y.wrapT]),E===t.TEXTURE_3D||E===t.TEXTURE_2D_ARRAY)t.texParameteri(E,t.TEXTURE_WRAP_R,Mt[y.wrapR]);if(t.texParameteri(E,t.TEXTURE_MAG_FILTER,ce[y.magFilter]),t.texParameteri(E,t.TEXTURE_MIN_FILTER,ce[y.minFilter]),y.compareFunction)t.texParameteri(E,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(E,t.TEXTURE_COMPARE_FUNC,ae[y.compareFunction]);if(e.has("EXT_texture_filter_anisotropic")===!0){if(y.magFilter===ni)return;if(y.minFilter!==er&&y.minFilter!==Mi)return;if(y.type===kn&&e.has("OES_texture_float_linear")===!1)return;if(y.anisotropy>1||i.get(y).__currentAnisotropy){let L=e.get("EXT_texture_filter_anisotropic");t.texParameterf(E,L.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,s.getMaxAnisotropy())),i.get(y).__currentAnisotropy=y.anisotropy}}}function lt(E,y){let L=!1;if(E.__webglInit===void 0)E.__webglInit=!0,y.addEventListener("dispose",R);let G=y.source,Q=p.get(G);if(Q===void 0)Q={},p.set(G,Q);let rt=O(y);if(rt!==E.__cacheKey){if(Q[rt]===void 0)Q[rt]={texture:t.createTexture(),usedTimes:0},a.memory.textures++,L=!0;Q[rt].usedTimes++;let ut=Q[E.__cacheKey];if(ut!==void 0){if(Q[E.__cacheKey].usedTimes--,ut.usedTimes===0)U(y)}E.__cacheKey=rt,E.__webglTexture=Q[rt].texture}return L}function St(E,y,L){return Math.floor(Math.floor(E/L)/y)}function dt(E,y,L,G){let rt=E.updateRanges;if(rt.length===0)n.texSubImage2D(t.TEXTURE_2D,0,0,0,y.width,y.height,L,G,y.data);else{rt.sort((It,mt)=>It.start-mt.start);let ut=0;for(let It=1;It<rt.length;It++){let mt=rt[ut],at=rt[It],Ot=mt.start+mt.count,zt=St(at.start,y.width,4),ie=St(mt.start,y.width,4);if(at.start<=Ot+1&&zt===ie&&St(at.start+at.count-1,y.width,4)===zt)mt.count=Math.max(mt.count,at.start+at.count-mt.start);else++ut,rt[ut]=at}rt.length=ut+1;let X=n.getParameter(t.UNPACK_ROW_LENGTH),J=n.getParameter(t.UNPACK_SKIP_PIXELS),vt=n.getParameter(t.UNPACK_SKIP_ROWS);n.pixelStorei(t.UNPACK_ROW_LENGTH,y.width);for(let It=0,mt=rt.length;It<mt;It++){let at=rt[It],Ot=Math.floor(at.start/4),zt=Math.ceil(at.count/4),ie=Ot%y.width,D=Math.floor(Ot/y.width),ct=zt,Y=1;n.pixelStorei(t.UNPACK_SKIP_PIXELS,ie),n.pixelStorei(t.UNPACK_SKIP_ROWS,D),n.texSubImage2D(t.TEXTURE_2D,0,ie,D,ct,1,L,G,y.data)}E.clearUpdateRanges(),n.pixelStorei(t.UNPACK_ROW_LENGTH,X),n.pixelStorei(t.UNPACK_SKIP_PIXELS,J),n.pixelStorei(t.UNPACK_SKIP_ROWS,vt)}}function Ft(E,y,L){let G=t.TEXTURE_2D;if(y.isDataArrayTexture||y.isCompressedArrayTexture)G=t.TEXTURE_2D_ARRAY;if(y.isData3DTexture)G=t.TEXTURE_3D;let Q=lt(E,y),rt=y.source;n.bindTexture(G,E.__webglTexture,t.TEXTURE0+L);let ut=i.get(rt);if(rt.version!==ut.__version||Q===!0){if(n.activeTexture(t.TEXTURE0+L),(typeof ImageBitmap<"u"&&y.image instanceof ImageBitmap)===!1){let Y=te.getPrimaries(te.workingColorSpace),ft=y.colorSpace===Ti?null:te.getPrimaries(y.colorSpace),Et=y.colorSpace===Ti||Y===ft?t.NONE:t.BROWSER_DEFAULT_WEBGL;n.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,y.flipY),n.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),n.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Et)}n.pixelStorei(t.UNPACK_ALIGNMENT,y.unpackAlignment);let J=m(y.image,!1,s.maxTextureSize);J=jt(y,J);let vt=r.convert(y.format,y.colorSpace),It=r.convert(y.type),mt=x(y.internalFormat,vt,It,y.normalized,y.colorSpace,y.isVideoTexture);Z(G,y);let at,Ot=y.mipmaps,zt=y.isVideoTexture!==!0,ie=ut.__version===void 0||Q===!0,D=rt.dataReady,ct=A(y,J);if(y.isDepthTexture){if(mt=T(y.format===bi,y.type),ie)if(zt)n.texStorage2D(t.TEXTURE_2D,1,mt,J.width,J.height);else n.texImage2D(t.TEXTURE_2D,0,mt,J.width,J.height,0,vt,It,null)}else if(y.isDataTexture)if(Ot.length>0){if(zt&&ie)n.texStorage2D(t.TEXTURE_2D,ct,mt,Ot[0].width,Ot[0].height);for(let Y=0,ft=Ot.length;Y<ft;Y++)if(at=Ot[Y],zt){if(D)n.texSubImage2D(t.TEXTURE_2D,Y,0,0,at.width,at.height,vt,It,at.data)}else n.texImage2D(t.TEXTURE_2D,Y,mt,at.width,at.height,0,vt,It,at.data);y.generateMipmaps=!1}else if(zt){if(ie)n.texStorage2D(t.TEXTURE_2D,ct,mt,J.width,J.height);if(D)dt(y,J,vt,It)}else n.texImage2D(t.TEXTURE_2D,0,mt,J.width,J.height,0,vt,It,J.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){if(zt&&ie)n.texStorage3D(t.TEXTURE_2D_ARRAY,ct,mt,Ot[0].width,Ot[0].height,J.depth);for(let Y=0,ft=Ot.length;Y<ft;Y++)if(at=Ot[Y],y.format!==An)if(vt!==null)if(zt){if(D)if(y.layerUpdates.size>0){let Et=vc(at.width,at.height,y.format,y.type);for(let et of y.layerUpdates){let pt=at.data.subarray(et*Et/at.data.BYTES_PER_ELEMENT,(et+1)*Et/at.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,Y,0,0,et,at.width,at.height,1,vt,pt)}y.clearLayerUpdates()}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,Y,0,0,0,at.width,at.height,J.depth,vt,at.data)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,Y,mt,at.width,at.height,J.depth,0,at.data,0,0);else Ut("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else if(zt){if(D)n.texSubImage3D(t.TEXTURE_2D_ARRAY,Y,0,0,0,at.width,at.height,J.depth,vt,It,at.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,Y,mt,at.width,at.height,J.depth,0,vt,It,at.data)}else{if(zt&&ie)n.texStorage2D(t.TEXTURE_2D,ct,mt,Ot[0].width,Ot[0].height);for(let Y=0,ft=Ot.length;Y<ft;Y++)if(at=Ot[Y],y.format!==An)if(vt!==null)if(zt){if(D)n.compressedTexSubImage2D(t.TEXTURE_2D,Y,0,0,at.width,at.height,vt,at.data)}else n.compressedTexImage2D(t.TEXTURE_2D,Y,mt,at.width,at.height,0,at.data);else Ut("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else if(zt){if(D)n.texSubImage2D(t.TEXTURE_2D,Y,0,0,at.width,at.height,vt,It,at.data)}else n.texImage2D(t.TEXTURE_2D,Y,mt,at.width,at.height,0,vt,It,at.data)}else if(y.isDataArrayTexture)if(zt){if(ie)n.texStorage3D(t.TEXTURE_2D_ARRAY,ct,mt,J.width,J.height,J.depth);if(D)if(y.layerUpdates.size>0){let Y=vc(J.width,J.height,y.format,y.type);for(let ft of y.layerUpdates){let Et=J.data.subarray(ft*Y/J.data.BYTES_PER_ELEMENT,(ft+1)*Y/J.data.BYTES_PER_ELEMENT);n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,ft,J.width,J.height,1,vt,It,Et)}y.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,J.width,J.height,J.depth,vt,It,J.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,mt,J.width,J.height,J.depth,0,vt,It,J.data);else if(y.isData3DTexture)if(zt){if(ie)n.texStorage3D(t.TEXTURE_3D,ct,mt,J.width,J.height,J.depth);if(D)n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,J.width,J.height,J.depth,vt,It,J.data)}else n.texImage3D(t.TEXTURE_3D,0,mt,J.width,J.height,J.depth,0,vt,It,J.data);else if(y.isFramebufferTexture){if(ie)if(zt)n.texStorage2D(t.TEXTURE_2D,ct,mt,J.width,J.height);else{let Y=J.width,ft=J.height;for(let Et=0;Et<ct;Et++)n.texImage2D(t.TEXTURE_2D,Et,mt,Y,ft,0,vt,It,null),Y>>=1,ft>>=1}}else if(y.isHTMLTexture){if("texElementImage2D"in t){let Y=t.canvas;if(!Y.hasAttribute("layoutsubtree"))Y.setAttribute("layoutsubtree","true");if(J.parentNode!==Y){Y.appendChild(J),d.add(y),Y.onpaint=(ft)=>{let Et=ft.changedElements;for(let et of d)if(Et.includes(et.image))et.needsUpdate=!0},Y.requestPaint();return}if(t.texElementImage2D.length===3)t.texElementImage2D(t.TEXTURE_2D,t.RGBA8,J);else{let{RGBA:Et,RGBA:et,UNSIGNED_BYTE:pt}=t;t.texElementImage2D(t.TEXTURE_2D,0,Et,et,pt,J)}t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MIN_FILTER,t.LINEAR),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE)}}else if(Ot.length>0){if(zt&&ie){let Y=Jt(Ot[0]);n.texStorage2D(t.TEXTURE_2D,ct,mt,Y.width,Y.height)}for(let Y=0,ft=Ot.length;Y<ft;Y++)if(at=Ot[Y],zt){if(D)n.texSubImage2D(t.TEXTURE_2D,Y,0,0,vt,It,at)}else n.texImage2D(t.TEXTURE_2D,Y,mt,vt,It,at);y.generateMipmaps=!1}else if(zt){if(ie){let Y=Jt(J);n.texStorage2D(t.TEXTURE_2D,ct,mt,Y.width,Y.height)}if(D)n.texSubImage2D(t.TEXTURE_2D,0,0,0,vt,It,J)}else n.texImage2D(t.TEXTURE_2D,0,mt,vt,It,J);if(f(y))w(G);if(ut.__version=rt.version,y.onUpdate)y.onUpdate(y)}E.__version=y.version}function ee(E,y,L){if(y.image.length!==6)return;let G=lt(E,y),Q=y.source;n.bindTexture(t.TEXTURE_CUBE_MAP,E.__webglTexture,t.TEXTURE0+L);let rt=i.get(Q);if(Q.version!==rt.__version||G===!0){n.activeTexture(t.TEXTURE0+L);let ut=te.getPrimaries(te.workingColorSpace),X=y.colorSpace===Ti?null:te.getPrimaries(y.colorSpace),J=y.colorSpace===Ti||ut===X?t.NONE:t.BROWSER_DEFAULT_WEBGL;n.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,y.flipY),n.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),n.pixelStorei(t.UNPACK_ALIGNMENT,y.unpackAlignment),n.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,J);let vt=y.isCompressedTexture||y.image[0].isCompressedTexture,It=y.image[0]&&y.image[0].isDataTexture,mt=[];for(let et=0;et<6;et++){if(!vt&&!It)mt[et]=m(y.image[et],!0,s.maxCubemapSize);else mt[et]=It?y.image[et].image:y.image[et];mt[et]=jt(y,mt[et])}let at=mt[0],Ot=r.convert(y.format,y.colorSpace),zt=r.convert(y.type),ie=x(y.internalFormat,Ot,zt,y.normalized,y.colorSpace),D=y.isVideoTexture!==!0,ct=rt.__version===void 0||G===!0,Y=Q.dataReady,ft=A(y,at);Z(t.TEXTURE_CUBE_MAP,y);let Et;if(vt){if(D&&ct)n.texStorage2D(t.TEXTURE_CUBE_MAP,ft,ie,at.width,at.height);for(let et=0;et<6;et++){Et=mt[et].mipmaps;for(let pt=0;pt<Et.length;pt++){let Xt=Et[pt];if(y.format!==An)if(Ot!==null)if(D){if(Y)n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+et,pt,0,0,Xt.width,Xt.height,Ot,Xt.data)}else n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+et,pt,ie,Xt.width,Xt.height,0,Xt.data);else Ut("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()");else if(D){if(Y)n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+et,pt,0,0,Xt.width,Xt.height,Ot,zt,Xt.data)}else n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+et,pt,ie,Xt.width,Xt.height,0,Ot,zt,Xt.data)}}}else{if(Et=y.mipmaps,D&&ct){if(Et.length>0)ft++;let et=Jt(mt[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,ft,ie,et.width,et.height)}for(let et=0;et<6;et++)if(It){if(D){if(Y)n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+et,0,0,0,mt[et].width,mt[et].height,Ot,zt,mt[et].data)}else n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+et,0,ie,mt[et].width,mt[et].height,0,Ot,zt,mt[et].data);for(let pt=0;pt<Et.length;pt++){let Te=Et[pt].image[et].image;if(D){if(Y)n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+et,pt+1,0,0,Te.width,Te.height,Ot,zt,Te.data)}else n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+et,pt+1,ie,Te.width,Te.height,0,Ot,zt,Te.data)}}else{if(D){if(Y)n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+et,0,0,0,Ot,zt,mt[et])}else n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+et,0,ie,Ot,zt,mt[et]);for(let pt=0;pt<Et.length;pt++){let Xt=Et[pt];if(D){if(Y)n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+et,pt+1,0,0,Ot,zt,Xt.image[et])}else n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+et,pt+1,ie,Ot,zt,Xt.image[et])}}}if(f(y))w(t.TEXTURE_CUBE_MAP);if(rt.__version=Q.version,y.onUpdate)y.onUpdate(y)}E.__version=y.version}function kt(E,y,L,G,Q,rt){let ut=r.convert(L.format,L.colorSpace),X=r.convert(L.type),J=x(L.internalFormat,ut,X,L.normalized,L.colorSpace),vt=i.get(y),It=i.get(L);if(It.__renderTarget=y,!vt.__hasExternalTextures){let mt=Math.max(1,y.width>>rt),at=Math.max(1,y.height>>rt);if(Q===t.TEXTURE_3D||Q===t.TEXTURE_2D_ARRAY)n.texImage3D(Q,rt,J,mt,at,y.depth,0,ut,X,null);else n.texImage2D(Q,rt,J,mt,at,0,ut,X,null)}if(n.bindFramebuffer(t.FRAMEBUFFER,E),I(y))o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,G,Q,It.__webglTexture,0,Wt(y));else if(Q===t.TEXTURE_2D||Q>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&Q<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)t.framebufferTexture2D(t.FRAMEBUFFER,G,Q,It.__webglTexture,rt);n.bindFramebuffer(t.FRAMEBUFFER,null)}function Gt(E,y,L){if(t.bindRenderbuffer(t.RENDERBUFFER,E),y.depthBuffer){let G=y.depthTexture,Q=G&&G.isDepthTexture?G.type:null,rt=T(y.stencilBuffer,Q),ut=y.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;if(I(y))o.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,Wt(y),rt,y.width,y.height);else if(L)t.renderbufferStorageMultisample(t.RENDERBUFFER,Wt(y),rt,y.width,y.height);else t.renderbufferStorage(t.RENDERBUFFER,rt,y.width,y.height);t.framebufferRenderbuffer(t.FRAMEBUFFER,ut,t.RENDERBUFFER,E)}else{let G=y.textures;for(let Q=0;Q<G.length;Q++){let rt=G[Q],ut=r.convert(rt.format,rt.colorSpace),X=r.convert(rt.type),J=x(rt.internalFormat,ut,X,rt.normalized,rt.colorSpace);if(I(y))o.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,Wt(y),J,y.width,y.height);else if(L)t.renderbufferStorageMultisample(t.RENDERBUFFER,Wt(y),J,y.width,y.height);else t.renderbufferStorage(t.RENDERBUFFER,J,y.width,y.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function j(E,y,L){let G=y.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(t.FRAMEBUFFER,E),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let Q=i.get(y.depthTexture);if(Q.__renderTarget=y,!Q.__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0;if(G){if(Q.__webglInit===void 0)Q.__webglInit=!0,y.depthTexture.addEventListener("dispose",R);if(Q.__webglTexture===void 0){Q.__webglTexture=t.createTexture(),n.bindTexture(t.TEXTURE_CUBE_MAP,Q.__webglTexture),Z(t.TEXTURE_CUBE_MAP,y.depthTexture);let vt=r.convert(y.depthTexture.format),It=r.convert(y.depthTexture.type),mt;if(y.depthTexture.format===Si)mt=t.DEPTH_COMPONENT24;else if(y.depthTexture.format===bi)mt=t.DEPTH24_STENCIL8;for(let at=0;at<6;at++)t.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+at,0,mt,y.width,y.height,0,vt,It,null)}}else K(y.depthTexture,0);let rt=Q.__webglTexture,ut=Wt(y),X=G?t.TEXTURE_CUBE_MAP_POSITIVE_X+L:t.TEXTURE_2D,J=y.depthTexture.format===bi?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;if(y.depthTexture.format===Si)if(I(y))o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,J,X,rt,0,ut);else t.framebufferTexture2D(t.FRAMEBUFFER,J,X,rt,0);else if(y.depthTexture.format===bi)if(I(y))o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,J,X,rt,0,ut);else t.framebufferTexture2D(t.FRAMEBUFFER,J,X,rt,0);else throw Error("THREE.WebGLTextures: Unknown depthTexture format.")}function it(E){let y=i.get(E),L=E.isWebGLCubeRenderTarget===!0;if(y.__boundDepthTexture!==E.depthTexture){let G=E.depthTexture;if(y.__depthDisposeCallback)y.__depthDisposeCallback();if(G){let Q=()=>{delete y.__boundDepthTexture,delete y.__depthDisposeCallback,G.removeEventListener("dispose",Q)};G.addEventListener("dispose",Q),y.__depthDisposeCallback=Q}y.__boundDepthTexture=G}if(E.depthTexture&&!y.__autoAllocateDepthBuffer)if(L)for(let G=0;G<6;G++)j(y.__webglFramebuffer[G],E,G);else{let G=E.texture.mipmaps;if(G&&G.length>0)j(y.__webglFramebuffer[0],E,0);else j(y.__webglFramebuffer,E,0)}else if(L){y.__webglDepthbuffer=[];for(let G=0;G<6;G++)if(n.bindFramebuffer(t.FRAMEBUFFER,y.__webglFramebuffer[G]),y.__webglDepthbuffer[G]===void 0)y.__webglDepthbuffer[G]=t.createRenderbuffer(),Gt(y.__webglDepthbuffer[G],E,!1);else{let Q=E.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,rt=y.__webglDepthbuffer[G];t.bindRenderbuffer(t.RENDERBUFFER,rt),t.framebufferRenderbuffer(t.FRAMEBUFFER,Q,t.RENDERBUFFER,rt)}}else{let G=E.texture.mipmaps;if(G&&G.length>0)n.bindFramebuffer(t.FRAMEBUFFER,y.__webglFramebuffer[0]);else n.bindFramebuffer(t.FRAMEBUFFER,y.__webglFramebuffer);if(y.__webglDepthbuffer===void 0)y.__webglDepthbuffer=t.createRenderbuffer(),Gt(y.__webglDepthbuffer,E,!1);else{let Q=E.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,rt=y.__webglDepthbuffer;t.bindRenderbuffer(t.RENDERBUFFER,rt),t.framebufferRenderbuffer(t.FRAMEBUFFER,Q,t.RENDERBUFFER,rt)}}n.bindFramebuffer(t.FRAMEBUFFER,null)}function nt(E,y,L){let G=i.get(E);if(y!==void 0)kt(G.__webglFramebuffer,E,E.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0);if(L!==void 0)it(E)}function yt(E){let y=E.texture,L=i.get(E),G=i.get(y);E.addEventListener("dispose",g);let Q=E.textures,rt=E.isWebGLCubeRenderTarget===!0,ut=Q.length>1;if(!ut){if(G.__webglTexture===void 0)G.__webglTexture=t.createTexture();G.__version=y.version,a.memory.textures++}if(rt){L.__webglFramebuffer=[];for(let X=0;X<6;X++)if(y.mipmaps&&y.mipmaps.length>0){L.__webglFramebuffer[X]=[];for(let J=0;J<y.mipmaps.length;J++)L.__webglFramebuffer[X][J]=t.createFramebuffer()}else L.__webglFramebuffer[X]=t.createFramebuffer()}else{if(y.mipmaps&&y.mipmaps.length>0){L.__webglFramebuffer=[];for(let X=0;X<y.mipmaps.length;X++)L.__webglFramebuffer[X]=t.createFramebuffer()}else L.__webglFramebuffer=t.createFramebuffer();if(ut)for(let X=0,J=Q.length;X<J;X++){let vt=i.get(Q[X]);if(vt.__webglTexture===void 0)vt.__webglTexture=t.createTexture(),a.memory.textures++}if(E.samples>0&&I(E)===!1){L.__webglMultisampledFramebuffer=t.createFramebuffer(),L.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,L.__webglMultisampledFramebuffer);for(let X=0;X<Q.length;X++){let J=Q[X];L.__webglColorRenderbuffer[X]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,L.__webglColorRenderbuffer[X]);let vt=r.convert(J.format,J.colorSpace),It=r.convert(J.type),mt=x(J.internalFormat,vt,It,J.normalized,J.colorSpace,E.isXRRenderTarget===!0),at=Wt(E);t.renderbufferStorageMultisample(t.RENDERBUFFER,at,mt,E.width,E.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+X,t.RENDERBUFFER,L.__webglColorRenderbuffer[X])}if(t.bindRenderbuffer(t.RENDERBUFFER,null),E.depthBuffer)L.__webglDepthRenderbuffer=t.createRenderbuffer(),Gt(L.__webglDepthRenderbuffer,E,!0);n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(rt){n.bindTexture(t.TEXTURE_CUBE_MAP,G.__webglTexture),Z(t.TEXTURE_CUBE_MAP,y);for(let X=0;X<6;X++)if(y.mipmaps&&y.mipmaps.length>0)for(let J=0;J<y.mipmaps.length;J++)kt(L.__webglFramebuffer[X][J],E,y,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+X,J);else kt(L.__webglFramebuffer[X],E,y,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+X,0);if(f(y))w(t.TEXTURE_CUBE_MAP);n.unbindTexture()}else if(ut){for(let X=0,J=Q.length;X<J;X++){let vt=Q[X],It=i.get(vt),mt=t.TEXTURE_2D;if(E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)mt=E.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY;if(n.bindTexture(mt,It.__webglTexture),Z(mt,vt),kt(L.__webglFramebuffer,E,vt,t.COLOR_ATTACHMENT0+X,mt,0),f(vt))w(mt)}n.unbindTexture()}else{let X=t.TEXTURE_2D;if(E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)X=E.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY;if(n.bindTexture(X,G.__webglTexture),Z(X,y),y.mipmaps&&y.mipmaps.length>0)for(let J=0;J<y.mipmaps.length;J++)kt(L.__webglFramebuffer[J],E,y,t.COLOR_ATTACHMENT0,X,J);else kt(L.__webglFramebuffer,E,y,t.COLOR_ATTACHMENT0,X,0);if(f(y))w(X);n.unbindTexture()}if(E.depthBuffer)it(E)}function bt(E){let y=E.textures;for(let L=0,G=y.length;L<G;L++){let Q=y[L];if(f(Q)){let rt=b(E),ut=i.get(Q).__webglTexture;n.bindTexture(rt,ut),w(rt),n.unbindTexture()}}}let Pt=[],Lt=[];function Vt(E){if(E.samples>0){if(I(E)===!1){let{textures:y,width:L,height:G}=E,Q=t.COLOR_BUFFER_BIT,rt=E.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ut=i.get(E),X=y.length>1;if(X)for(let vt=0;vt<y.length;vt++)n.bindFramebuffer(t.FRAMEBUFFER,ut.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+vt,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,ut.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+vt,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,ut.__webglMultisampledFramebuffer);let J=E.texture.mipmaps;if(J&&J.length>0)n.bindFramebuffer(t.DRAW_FRAMEBUFFER,ut.__webglFramebuffer[0]);else n.bindFramebuffer(t.DRAW_FRAMEBUFFER,ut.__webglFramebuffer);for(let vt=0;vt<y.length;vt++){if(E.resolveDepthBuffer){if(E.depthBuffer)Q|=t.DEPTH_BUFFER_BIT;if(E.stencilBuffer&&E.resolveStencilBuffer)Q|=t.STENCIL_BUFFER_BIT}if(X){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,ut.__webglColorRenderbuffer[vt]);let It=i.get(y[vt]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,It,0)}if(t.blitFramebuffer(0,0,L,G,0,0,L,G,Q,t.NEAREST),l===!0){if(Pt.length=0,Lt.length=0,Pt.push(t.COLOR_ATTACHMENT0+vt),E.depthBuffer&&E.resolveDepthBuffer===!1)Pt.push(rt),Lt.push(rt),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,Lt);t.invalidateFramebuffer(t.READ_FRAMEBUFFER,Pt)}}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),X)for(let vt=0;vt<y.length;vt++){n.bindFramebuffer(t.FRAMEBUFFER,ut.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+vt,t.RENDERBUFFER,ut.__webglColorRenderbuffer[vt]);let It=i.get(y[vt]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,ut.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+vt,t.TEXTURE_2D,It,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,ut.__webglMultisampledFramebuffer)}else if(E.depthBuffer&&E.resolveDepthBuffer===!1&&l){let y=E.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[y])}}}function Wt(E){return Math.min(s.maxSamples,E.samples)}function I(E){let y=i.get(E);return E.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function me(E){let y=a.render.frame;if(u.get(E)!==y)u.set(E,y),E.update()}function jt(E,y){let{colorSpace:L,format:G,type:Q}=E;if(E.isCompressedTexture===!0||E.isVideoTexture===!0)return y;if(L!==Bl&&L!==Ti)if(te.getTransfer(L)===pe){if(G!==An||Q!==yn)Ut("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.")}else Bt("WebGLTextures: Unsupported texture color space:",L);return y}function Jt(E){if(typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement)c.width=E.naturalWidth||E.width,c.height=E.naturalHeight||E.height;else if(typeof VideoFrame<"u"&&E instanceof VideoFrame)c.width=E.displayWidth,c.height=E.displayHeight;else c.width=E.width,c.height=E.height;return c}this.allocateTextureUnit=V,this.resetTextureUnits=q,this.getTextureUnits=F,this.setTextureUnits=W,this.setTexture2D=K,this.setTexture2DArray=st,this.setTexture3D=ot,this.setTextureCube=At,this.rebindTextures=nt,this.setupRenderTarget=yt,this.updateRenderTargetMipmap=bt,this.updateMultisampleRenderTarget=Vt,this.setupDepthRenderbuffer=it,this.setupFrameBufferTexture=kt,this.useMultisampledRTT=I,this.isReversedDepthBuffer=function(){return n.buffers.depth.getReversed()}}function gx(t,e){function n(i,s=Ti){let r,a=te.getTransfer(s);if(i===yn)return t.UNSIGNED_BYTE;if(i===nl)return t.UNSIGNED_SHORT_4_4_4_4;if(i===il)return t.UNSIGNED_SHORT_5_5_5_1;if(i===Lu)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===Du)return t.UNSIGNED_INT_10F_11F_11F_REV;if(i===Pu)return t.BYTE;if(i===Iu)return t.SHORT;if(i===nr)return t.UNSIGNED_SHORT;if(i===el)return t.INT;if(i===ii)return t.UNSIGNED_INT;if(i===kn)return t.FLOAT;if(i===Gn)return t.HALF_FLOAT;if(i===Nu)return t.ALPHA;if(i===Uu)return t.RGB;if(i===An)return t.RGBA;if(i===Si)return t.DEPTH_COMPONENT;if(i===bi)return t.DEPTH_STENCIL;if(i===Fu)return t.RED;if(i===sl)return t.RED_INTEGER;if(i===Ei)return t.RG;if(i===rl)return t.RG_INTEGER;if(i===al)return t.RGBA_INTEGER;if(i===fa||i===pa||i===ma||i===ga)if(a===pe)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===fa)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===pa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===ma)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===ga)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===fa)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===pa)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===ma)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===ga)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===ol||i===ll||i===cl||i===hl)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===ol)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===ll)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===cl)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===hl)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===ul||i===dl||i===fl||i===pl||i===ml||i===_a||i===gl)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===ul||i===dl)return a===pe?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===fl)return a===pe?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(i===pl)return r.COMPRESSED_R11_EAC;if(i===ml)return r.COMPRESSED_SIGNED_R11_EAC;if(i===_a)return r.COMPRESSED_RG11_EAC;if(i===gl)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===_l||i===xl||i===yl||i===vl||i===Ml||i===Sl||i===bl||i===El||i===Tl||i===wl||i===Al||i===Rl||i===Cl||i===Pl)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===_l)return a===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===xl)return a===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===yl)return a===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===vl)return a===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Ml)return a===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Sl)return a===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===bl)return a===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===El)return a===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Tl)return a===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===wl)return a===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Al)return a===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Rl)return a===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Cl)return a===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Pl)return a===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Il||i===Ll||i===Dl)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===Il)return a===pe?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Ll)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Dl)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Nl||i===Ul||i===xa||i===Fl)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===Nl)return r.COMPRESSED_RED_RGTC1_EXT;if(i===Ul)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===xa)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Fl)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;if(i===ps)return t.UNSIGNED_INT_24_8;return t[i]!==void 0?t[i]:null}return{convert:n}}var _x=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,xx=`
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

}`;class zd{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let n=new Ra(t.texture);if(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)this.depthNear=t.depthNear,this.depthFar=t.depthFar;this.texture=n}}getMesh(t){if(this.texture!==null){if(this.mesh===null){let e=t.cameras[0].viewport,n=new un({vertexShader:_x,fragmentShader:xx,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Qt(new oi(20,20),n)}}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class kd extends Rn{constructor(t,e){super();let n=this,i=null,s=1,r=null,a="local-floor",o=1,l=null,c=null,u=null,d=null,h=null,p=null,_=typeof XRWebGLBinding<"u",S=new zd,m={},f=e.getContextAttributes(),w=null,b=null,x=[],T=[],A=new tt,R=null,g=new Ze;g.viewport=new ye;let M=new Ze;M.viewport=new ye;let U=[g,M],C=new gc,k=null,q=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Z){let lt=x[Z];if(lt===void 0)lt=new rr,x[Z]=lt;return lt.getTargetRaySpace()},this.getControllerGrip=function(Z){let lt=x[Z];if(lt===void 0)lt=new rr,x[Z]=lt;return lt.getGripSpace()},this.getHand=function(Z){let lt=x[Z];if(lt===void 0)lt=new rr,x[Z]=lt;return lt.getHandSpace()};function F(Z){let lt=T.indexOf(Z.inputSource);if(lt===-1)return;let St=x[lt];if(St!==void 0)St.update(Z.inputSource,Z.frame,l||r),St.dispatchEvent({type:Z.type,data:Z.inputSource})}function W(){i.removeEventListener("select",F),i.removeEventListener("selectstart",F),i.removeEventListener("selectend",F),i.removeEventListener("squeeze",F),i.removeEventListener("squeezestart",F),i.removeEventListener("squeezeend",F),i.removeEventListener("end",W),i.removeEventListener("inputsourceschange",V);for(let Z=0;Z<x.length;Z++){let lt=T[Z];if(lt===null)continue;T[Z]=null,x[Z].disconnect(lt)}k=null,q=null,S.reset();for(let Z in m)delete m[Z];t.setRenderTarget(w),h=null,d=null,u=null,i=null,b=null,ae.stop(),n.isPresenting=!1,t.setPixelRatio(R),t.setSize(A.width,A.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Z){if(s=Z,n.isPresenting===!0)Ut("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Z){if(a=Z,n.isPresenting===!0)Ut("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||r},this.setReferenceSpace=function(Z){l=Z},this.getBaseLayer=function(){return d!==null?d:h},this.getBinding=function(){if(u===null&&_)u=new XRWebGLBinding(i,e);return u},this.getFrame=function(){return p},this.getSession=function(){return i},this.setSession=async function(Z){if(i=Z,i!==null){if(w=t.getRenderTarget(),i.addEventListener("select",F),i.addEventListener("selectstart",F),i.addEventListener("selectend",F),i.addEventListener("squeeze",F),i.addEventListener("squeezestart",F),i.addEventListener("squeezeend",F),i.addEventListener("end",W),i.addEventListener("inputsourceschange",V),f.xrCompatible!==!0)await e.makeXRCompatible();if(R=t.getPixelRatio(),t.getSize(A),!(_&&("createProjectionLayer"in XRWebGLBinding.prototype))){let St={antialias:f.antialias,alpha:!0,depth:f.depth,stencil:f.stencil,framebufferScaleFactor:s};h=new XRWebGLLayer(i,e,St),i.updateRenderState({baseLayer:h}),t.setPixelRatio(1),t.setSize(h.framebufferWidth,h.framebufferHeight,!1),b=new cn(h.framebufferWidth,h.framebufferHeight,{format:An,type:yn,colorSpace:t.outputColorSpace,stencilBuffer:f.stencil,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1})}else{let St=null,dt=null,Ft=null;if(f.depth)Ft=f.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,St=f.stencil?bi:Si,dt=f.stencil?ps:ii;let ee={colorFormat:e.RGBA8,depthFormat:Ft,scaleFactor:s};u=this.getBinding(),d=u.createProjectionLayer(ee),i.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),b=new cn(d.textureWidth,d.textureHeight,{format:An,type:yn,depthTexture:new ri(d.textureWidth,d.textureHeight,dt,void 0,void 0,void 0,void 0,void 0,void 0,St),stencilBuffer:f.stencil,colorSpace:t.outputColorSpace,samples:f.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(o),l=null,r=await i.requestReferenceSpace(a),ae.setContext(i),ae.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return S.getDepthTexture()};function V(Z){for(let lt=0;lt<Z.removed.length;lt++){let St=Z.removed[lt],dt=T.indexOf(St);if(dt>=0)T[dt]=null,x[dt].disconnect(St)}for(let lt=0;lt<Z.added.length;lt++){let St=Z.added[lt],dt=T.indexOf(St);if(dt===-1){for(let ee=0;ee<x.length;ee++)if(ee>=T.length){T.push(St),dt=ee;break}else if(T[ee]===null){T[ee]=St,dt=ee;break}if(dt===-1)break}let Ft=x[dt];if(Ft)Ft.connect(St)}}let O=new P,K=new P;function st(Z,lt,St){O.setFromMatrixPosition(lt.matrixWorld),K.setFromMatrixPosition(St.matrixWorld);let dt=O.distanceTo(K),Ft=lt.projectionMatrix.elements,ee=St.projectionMatrix.elements,kt=Ft[14]/(Ft[10]-1),Gt=Ft[14]/(Ft[10]+1),j=(Ft[9]+1)/Ft[5],it=(Ft[9]-1)/Ft[5],nt=(Ft[8]-1)/Ft[0],yt=(ee[8]+1)/ee[0],bt=kt*nt,Pt=kt*yt,Lt=dt/(-nt+yt),Vt=Lt*-nt;if(lt.matrixWorld.decompose(Z.position,Z.quaternion,Z.scale),Z.translateX(Vt),Z.translateZ(Lt),Z.matrixWorld.compose(Z.position,Z.quaternion,Z.scale),Z.matrixWorldInverse.copy(Z.matrixWorld).invert(),Ft[10]===-1)Z.projectionMatrix.copy(lt.projectionMatrix),Z.projectionMatrixInverse.copy(lt.projectionMatrixInverse);else{let Wt=kt+Lt,I=Gt+Lt,me=bt-Vt,jt=Pt+(dt-Vt),Jt=j*Gt/I*Wt,E=it*Gt/I*Wt;Z.projectionMatrix.makePerspective(me,jt,Jt,E,Wt,I),Z.projectionMatrixInverse.copy(Z.projectionMatrix).invert()}}function ot(Z,lt){if(lt===null)Z.matrixWorld.copy(Z.matrix);else Z.matrixWorld.multiplyMatrices(lt.matrixWorld,Z.matrix);Z.matrixWorldInverse.copy(Z.matrixWorld).invert()}this.updateCamera=function(Z){if(i===null)return;let{near:lt,far:St}=Z;if(S.texture!==null){if(S.depthNear>0)lt=S.depthNear;if(S.depthFar>0)St=S.depthFar}if(C.near=M.near=g.near=lt,C.far=M.far=g.far=St,k!==C.near||q!==C.far)i.updateRenderState({depthNear:C.near,depthFar:C.far}),k=C.near,q=C.far;C.layers.mask=Z.layers.mask|6,g.layers.mask=C.layers.mask&-5,M.layers.mask=C.layers.mask&-3;let dt=Z.parent,Ft=C.cameras;ot(C,dt);for(let ee=0;ee<Ft.length;ee++)ot(Ft[ee],dt);if(Ft.length===2)st(C,g,M);else C.projectionMatrix.copy(g.projectionMatrix);At(Z,C,dt)};function At(Z,lt,St){if(St===null)Z.matrix.copy(lt.matrixWorld);else Z.matrix.copy(St.matrixWorld),Z.matrix.invert(),Z.matrix.multiply(lt.matrixWorld);if(Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.updateMatrixWorld(!0),Z.projectionMatrix.copy(lt.projectionMatrix),Z.projectionMatrixInverse.copy(lt.projectionMatrixInverse),Z.isPerspectiveCamera)Z.fov=ls*2*Math.atan(1/Z.projectionMatrix.elements[5]),Z.zoom=1}this.getCamera=function(){return C},this.getFoveation=function(){if(d===null&&h===null)return;return o},this.setFoveation=function(Z){if(o=Z,d!==null)d.fixedFoveation=Z;if(h!==null&&h.fixedFoveation!==void 0)h.fixedFoveation=Z},this.hasDepthSensing=function(){return S.texture!==null},this.getDepthSensingMesh=function(){return S.getMesh(C)},this.getCameraTexture=function(Z){return m[Z]};let Mt=null;function ce(Z,lt){if(c=lt.getViewerPose(l||r),p=lt,c!==null){let St=c.views;if(h!==null)t.setRenderTargetFramebuffer(b,h.framebuffer),t.setRenderTarget(b);let dt=!1;if(St.length!==C.cameras.length)C.cameras.length=0,dt=!0;for(let Gt=0;Gt<St.length;Gt++){let j=St[Gt],it=null;if(h!==null)it=h.getViewport(j);else{let yt=u.getViewSubImage(d,j);if(it=yt.viewport,Gt===0)t.setRenderTargetTextures(b,yt.colorTexture,yt.depthStencilTexture),t.setRenderTarget(b)}let nt=U[Gt];if(nt===void 0)nt=new Ze,nt.layers.enable(Gt),nt.viewport=new ye,U[Gt]=nt;if(nt.matrix.fromArray(j.transform.matrix),nt.matrix.decompose(nt.position,nt.quaternion,nt.scale),nt.projectionMatrix.fromArray(j.projectionMatrix),nt.projectionMatrixInverse.copy(nt.projectionMatrix).invert(),nt.viewport.set(it.x,it.y,it.width,it.height),Gt===0)C.matrix.copy(nt.matrix),C.matrix.decompose(C.position,C.quaternion,C.scale);if(dt===!0)C.cameras.push(nt)}let Ft=i.enabledFeatures;if(Ft&&Ft.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&_){u=n.getBinding();let Gt=u.getDepthInformation(St[0]);if(Gt&&Gt.isValid&&Gt.texture)S.init(Gt,i.renderState)}if(Ft&&Ft.includes("camera-access")&&_){t.state.unbindTexture(),u=n.getBinding();for(let Gt=0;Gt<St.length;Gt++){let j=St[Gt].camera;if(j){let it=m[j];if(!it)it=new Ra,m[j]=it;let nt=u.getCameraImage(j);it.sourceTexture=nt}}}}for(let St=0;St<x.length;St++){let dt=T[St],Ft=x[St];if(dt!==null&&Ft!==void 0)Ft.update(dt,lt,l||r)}if(Mt)Mt(Z,lt);if(lt.detectedPlanes)n.dispatchEvent({type:"planesdetected",data:lt});p=null}let ae=new Rd;ae.setAnimationLoop(ce),this.setAnimationLoop=function(Z){Mt=Z},this.dispose=function(){}}}var yx=new se,Gd=new Ht;Gd.set(-1,0,0,0,1,0,0,0,1);function vx(t,e){function n(m,f){if(m.matrixAutoUpdate===!0)m.updateMatrix();f.value.copy(m.matrix)}function i(m,f){if(f.color.getRGB(m.fogColor.value,ec(t)),f.isFog)m.fogNear.value=f.near,m.fogFar.value=f.far;else if(f.isFogExp2)m.fogDensity.value=f.density}function s(m,f,w,b,x){if(f.isNodeMaterial)f.uniformsNeedUpdate=!1;else if(f.isMeshBasicMaterial)r(m,f);else if(f.isMeshLambertMaterial){if(r(m,f),f.envMap)m.envMapIntensity.value=f.envMapIntensity}else if(f.isMeshToonMaterial)r(m,f),d(m,f);else if(f.isMeshPhongMaterial){if(r(m,f),u(m,f),f.envMap)m.envMapIntensity.value=f.envMapIntensity}else if(f.isMeshStandardMaterial){if(r(m,f),h(m,f),f.isMeshPhysicalMaterial)p(m,f,x)}else if(f.isMeshMatcapMaterial)r(m,f),_(m,f);else if(f.isMeshDepthMaterial)r(m,f);else if(f.isMeshDistanceMaterial)r(m,f),S(m,f);else if(f.isMeshNormalMaterial)r(m,f);else if(f.isLineBasicMaterial){if(a(m,f),f.isLineDashedMaterial)o(m,f)}else if(f.isPointsMaterial)l(m,f,w,b);else if(f.isSpriteMaterial)c(m,f);else if(f.isShadowMaterial)m.color.value.copy(f.color),m.opacity.value=f.opacity;else if(f.isShaderMaterial)f.uniformsNeedUpdate=!1}function r(m,f){if(m.opacity.value=f.opacity,f.color)m.diffuse.value.copy(f.color);if(f.emissive)m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity);if(f.map)m.map.value=f.map,n(f.map,m.mapTransform);if(f.alphaMap)m.alphaMap.value=f.alphaMap,n(f.alphaMap,m.alphaMapTransform);if(f.bumpMap){if(m.bumpMap.value=f.bumpMap,n(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===je)m.bumpScale.value*=-1}if(f.normalMap){if(m.normalMap.value=f.normalMap,n(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===je)m.normalScale.value.negate()}if(f.displacementMap)m.displacementMap.value=f.displacementMap,n(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias;if(f.emissiveMap)m.emissiveMap.value=f.emissiveMap,n(f.emissiveMap,m.emissiveMapTransform);if(f.specularMap)m.specularMap.value=f.specularMap,n(f.specularMap,m.specularMapTransform);if(f.alphaTest>0)m.alphaTest.value=f.alphaTest;let w=e.get(f),{envMap:b,envMapRotation:x}=w;if(b){if(m.envMap.value=b,m.envMapRotation.value.setFromMatrix4(yx.makeRotationFromEuler(x)).transpose(),b.isCubeTexture&&b.isRenderTargetTexture===!1)m.envMapRotation.value.premultiply(Gd);m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio}if(f.lightMap)m.lightMap.value=f.lightMap,m.lightMapIntensity.value=f.lightMapIntensity,n(f.lightMap,m.lightMapTransform);if(f.aoMap)m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,n(f.aoMap,m.aoMapTransform)}function a(m,f){if(m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map)m.map.value=f.map,n(f.map,m.mapTransform)}function o(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function l(m,f,w,b){if(m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*w,m.scale.value=b*0.5,f.map)m.map.value=f.map,n(f.map,m.uvTransform);if(f.alphaMap)m.alphaMap.value=f.alphaMap,n(f.alphaMap,m.alphaMapTransform);if(f.alphaTest>0)m.alphaTest.value=f.alphaTest}function c(m,f){if(m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map)m.map.value=f.map,n(f.map,m.mapTransform);if(f.alphaMap)m.alphaMap.value=f.alphaMap,n(f.alphaMap,m.alphaMapTransform);if(f.alphaTest>0)m.alphaTest.value=f.alphaTest}function u(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,0.0001)}function d(m,f){if(f.gradientMap)m.gradientMap.value=f.gradientMap}function h(m,f){if(m.metalness.value=f.metalness,f.metalnessMap)m.metalnessMap.value=f.metalnessMap,n(f.metalnessMap,m.metalnessMapTransform);if(m.roughness.value=f.roughness,f.roughnessMap)m.roughnessMap.value=f.roughnessMap,n(f.roughnessMap,m.roughnessMapTransform);if(f.envMap)m.envMapIntensity.value=f.envMapIntensity}function p(m,f,w){if(m.ior.value=f.ior,f.sheen>0){if(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap)m.sheenColorMap.value=f.sheenColorMap,n(f.sheenColorMap,m.sheenColorMapTransform);if(f.sheenRoughnessMap)m.sheenRoughnessMap.value=f.sheenRoughnessMap,n(f.sheenRoughnessMap,m.sheenRoughnessMapTransform)}if(f.clearcoat>0){if(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap)m.clearcoatMap.value=f.clearcoatMap,n(f.clearcoatMap,m.clearcoatMapTransform);if(f.clearcoatRoughnessMap)m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,n(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform);if(f.clearcoatNormalMap){if(m.clearcoatNormalMap.value=f.clearcoatNormalMap,n(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===je)m.clearcoatNormalScale.value.negate()}}if(f.dispersion>0)m.dispersion.value=f.dispersion;if(f.iridescence>0){if(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap)m.iridescenceMap.value=f.iridescenceMap,n(f.iridescenceMap,m.iridescenceMapTransform);if(f.iridescenceThicknessMap)m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,n(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform)}if(f.transmission>0){if(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=w.texture,m.transmissionSamplerSize.value.set(w.width,w.height),f.transmissionMap)m.transmissionMap.value=f.transmissionMap,n(f.transmissionMap,m.transmissionMapTransform);if(m.thickness.value=f.thickness,f.thicknessMap)m.thicknessMap.value=f.thicknessMap,n(f.thicknessMap,m.thicknessMapTransform);m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)}if(f.anisotropy>0){if(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap)m.anisotropyMap.value=f.anisotropyMap,n(f.anisotropyMap,m.anisotropyMapTransform)}if(m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap)m.specularColorMap.value=f.specularColorMap,n(f.specularColorMap,m.specularColorMapTransform);if(f.specularIntensityMap)m.specularIntensityMap.value=f.specularIntensityMap,n(f.specularIntensityMap,m.specularIntensityMapTransform)}function _(m,f){if(f.matcap)m.matcap.value=f.matcap}function S(m,f){let w=e.get(f).light;m.referencePosition.value.setFromMatrixPosition(w.matrixWorld),m.nearDistance.value=w.shadow.camera.near,m.farDistance.value=w.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function Mx(t,e,n,i){let s={},r={},a=[],o=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function l(x,T){let A=T.program;i.uniformBlockBinding(x,A)}function c(x,T){let A=s[x.id];if(A===void 0)m(x),A=u(x),s[x.id]=A,x.addEventListener("dispose",w);let R=T.program;i.updateUBOMapping(x,R);let g=e.render.frame;if(r[x.id]!==g)h(x),r[x.id]=g}function u(x){let T=d();x.__bindingPointIndex=T;let A=t.createBuffer(),{__size:R,usage:g}=x;return t.bindBuffer(t.UNIFORM_BUFFER,A),t.bufferData(t.UNIFORM_BUFFER,R,g),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,T,A),A}function d(){for(let x=0;x<o;x++)if(a.indexOf(x)===-1)return a.push(x),x;return Bt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(x){let T=s[x.id],{uniforms:A,__cache:R}=x;t.bindBuffer(t.UNIFORM_BUFFER,T);for(let g=0,M=A.length;g<M;g++){let U=A[g];if(Array.isArray(U))for(let C=0,k=U.length;C<k;C++)p(U[C],g,C,R);else p(U,g,0,R)}t.bindBuffer(t.UNIFORM_BUFFER,null)}function p(x,T,A,R){if(S(x,T,A,R)===!0){let{__offset:g,value:M}=x;if(Array.isArray(M)){let U=0;for(let C=0;C<M.length;C++){let k=M[C],q=f(k);if(_(k,x.__data,U),typeof k!=="number"&&typeof k!=="boolean"&&!k.isMatrix3&&!ArrayBuffer.isView(k))U+=q.storage/Float32Array.BYTES_PER_ELEMENT}}else _(M,x.__data,0);t.bufferSubData(t.UNIFORM_BUFFER,g,x.__data)}}function _(x,T,A){if(typeof x==="number"||typeof x==="boolean")T[0]=x;else if(x.isMatrix3)T[0]=x.elements[0],T[1]=x.elements[1],T[2]=x.elements[2],T[3]=0,T[4]=x.elements[3],T[5]=x.elements[4],T[6]=x.elements[5],T[7]=0,T[8]=x.elements[6],T[9]=x.elements[7],T[10]=x.elements[8],T[11]=0;else if(ArrayBuffer.isView(x))T.set(new x.constructor(x.buffer,x.byteOffset,T.length));else x.toArray(T,A)}function S(x,T,A,R){let g=x.value,M=T+"_"+A;if(R[M]===void 0){if(typeof g==="number"||typeof g==="boolean")R[M]=g;else if(ArrayBuffer.isView(g))R[M]=g.slice();else R[M]=g.clone();return!0}else{let U=R[M];if(typeof g==="number"||typeof g==="boolean"){if(U!==g)return R[M]=g,!0}else if(ArrayBuffer.isView(g))return!0;else if(U.equals(g)===!1)return U.copy(g),!0}return!1}function m(x){let T=x.uniforms,A=0,R=16;for(let M=0,U=T.length;M<U;M++){let C=Array.isArray(T[M])?T[M]:[T[M]];for(let k=0,q=C.length;k<q;k++){let F=C[k],W=Array.isArray(F.value)?F.value:[F.value];for(let V=0,O=W.length;V<O;V++){let K=W[V],st=f(K),ot=A%R,At=ot%st.boundary,Mt=ot+At;if(A+=At,Mt!==0&&R-Mt<st.storage)A+=R-Mt;F.__data=new Float32Array(st.storage/Float32Array.BYTES_PER_ELEMENT),F.__offset=A,A+=st.storage}}}let g=A%R;if(g>0)A+=R-g;return x.__size=A,x.__cache={},this}function f(x){let T={boundary:0,storage:0};if(typeof x==="number"||typeof x==="boolean")T.boundary=4,T.storage=4;else if(x.isVector2)T.boundary=8,T.storage=8;else if(x.isVector3||x.isColor)T.boundary=16,T.storage=12;else if(x.isVector4)T.boundary=16,T.storage=16;else if(x.isMatrix3)T.boundary=48,T.storage=48;else if(x.isMatrix4)T.boundary=64,T.storage=64;else if(x.isTexture)Ut("WebGLRenderer: Texture samplers can not be part of an uniforms group.");else if(ArrayBuffer.isView(x))T.boundary=16,T.storage=x.byteLength;else Ut("WebGLRenderer: Unsupported uniform value type.",x);return T}function w(x){let T=x.target;T.removeEventListener("dispose",w);let A=a.indexOf(T.__bindingPointIndex);a.splice(A,1),t.deleteBuffer(s[T.id]),delete s[T.id],delete r[T.id]}function b(){for(let x in s)t.deleteBuffer(s[x]);a=[],s={},r={}}return{bind:l,update:c,dispose:b}}var Sx=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Cn=null;function bx(){if(Cn===null)Cn=new Ta(Sx,16,16,Ei,Gn),Cn.name="DFG_LUT",Cn.minFilter=We,Cn.magFilter=We,Cn.wrapS=ua,Cn.wrapT=ua,Cn.generateMipmaps=!1,Cn.needsUpdate=!0;return Cn}class Ic{constructor(t={}){let{canvas:e=Wu(),context:n=null,depth:i=!0,stencil:s=!1,alpha:r=!1,antialias:a=!1,premultipliedAlpha:o=!0,preserveDrawingBuffer:l=!1,powerPreference:c="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:d=!1,outputBufferType:h=yn}=t;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=r;let _=h,S=new Set([al,rl,sl]),m=new Set([yn,ii,nr,ps,nl,il]),f=new Uint32Array(4),w=new Int32Array(4),b=new P,x=null,T=null,A=[],R=[],g=null;this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=xn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let M=this,U=!1,C=null,k=null,q=null,F=null;this._outputColorSpace=ms;let W=0,V=0,O=null,K=-1,st=null,ot=new ye,At=new ye,Mt=null,ce=new Yt(0),ae=0,{width:Z,height:lt}=e,St=1,dt=null,Ft=null,ee=new ye(0,0,Z,lt),kt=new ye(0,0,Z,lt),Gt=!1,j=new lr,it=!1,nt=!1,yt=new se,bt=new P,Pt=new ye,Lt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Vt=!1;function Wt(){return O===null?St:1}let I=n;function me(v,N){return e.getContext(v,N)}try{let v={alpha:!0,depth:i,stencil:s,antialias:a,premultipliedAlpha:o,preserveDrawingBuffer:l,powerPreference:c,failIfMajorPerformanceCaveat:u};if("setAttribute"in e)e.setAttribute("data-engine",`three.js r${$h}`);if(e.addEventListener("webglcontextlost",Xt,!1),e.addEventListener("webglcontextrestored",Te,!1),e.addEventListener("webglcontextcreationerror",ge,!1),I===null){if(I=me("webgl2",v),I===null)if(me("webgl2"))throw Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes.");else throw Error("THREE.WebGLRenderer: Error creating WebGL context.")}}catch(v){throw Bt("WebGLRenderer: "+v.message),v}let jt,Jt,E,y,L,G,Q,rt,ut,X,J,vt,It,mt,at,Ot,zt,ie,D,ct,Y,ft,Et;function et(){if(jt=new P0(I),jt.init(),Y=new gx(I,jt),Jt=new S0(I,jt,t,Y),E=new px(I,jt),Jt.reversedDepthBuffer&&d)E.buffers.depth.setReversed(!0);k=I.createFramebuffer(),q=I.createFramebuffer(),F=I.createFramebuffer(),y=new D0(I),L=new tx,G=new mx(I,jt,E,L,Jt,Y,y),Q=new C0(M),rt=new Op(I),ft=new v0(I,rt),ut=new I0(I,rt,y,ft),X=new U0(I,ut,rt,ft,y),ie=new N0(I,Jt,G),at=new b0(L),J=new Q_(M,Q,jt,Jt,ft,at),vt=new vx(M,L),It=new nx,mt=new lx(jt),zt=new y0(M,Q,E,X,p,o),Ot=new fx(M,X,Jt),Et=new Mx(I,y,Jt,E),D=new M0(I,jt,y),ct=new L0(I,jt,y),y.programs=J.programs,M.capabilities=Jt,M.extensions=jt,M.properties=L,M.renderLists=It,M.shadowMap=Ot,M.state=E,M.info=y}if(et(),_!==yn)g=new O0(_,e.width,e.height,a,i,s);let pt=new kd(M,I);this.xr=pt,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){let v=jt.get("WEBGL_lose_context");if(v)v.loseContext()},this.forceContextRestore=function(){let v=jt.get("WEBGL_lose_context");if(v)v.restoreContext()},this.getPixelRatio=function(){return St},this.setPixelRatio=function(v){if(v===void 0)return;St=v,this.setSize(Z,lt,!1)},this.getSize=function(v){return v.set(Z,lt)},this.setSize=function(v,N,H=!0){if(pt.isPresenting){Ut("WebGLRenderer: Can't change size while VR device is presenting.");return}if(Z=v,lt=N,e.width=Math.floor(v*St),e.height=Math.floor(N*St),H===!0)e.style.width=v+"px",e.style.height=N+"px";if(g!==null)g.setSize(e.width,e.height);this.setViewport(0,0,v,N)},this.getDrawingBufferSize=function(v){return v.set(Z*St,lt*St).floor()},this.setDrawingBufferSize=function(v,N,H){Z=v,lt=N,St=H,e.width=Math.floor(v*H),e.height=Math.floor(N*H),this.setViewport(0,0,v,N)},this.setEffects=function(v){if(_===yn){Bt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(v){for(let N=0;N<v.length;N++)if(v[N].isOutputPass===!0){Ut("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}g.setEffects(v||[])},this.getCurrentViewport=function(v){return v.copy(ot)},this.getViewport=function(v){return v.copy(ee)},this.setViewport=function(v,N,H,B){if(v.isVector4)ee.set(v.x,v.y,v.z,v.w);else ee.set(v,N,H,B);E.viewport(ot.copy(ee).multiplyScalar(St).round())},this.getScissor=function(v){return v.copy(kt)},this.setScissor=function(v,N,H,B){if(v.isVector4)kt.set(v.x,v.y,v.z,v.w);else kt.set(v,N,H,B);E.scissor(At.copy(kt).multiplyScalar(St).round())},this.getScissorTest=function(){return Gt},this.setScissorTest=function(v){E.setScissorTest(Gt=v)},this.setOpaqueSort=function(v){dt=v},this.setTransparentSort=function(v){Ft=v},this.getClearColor=function(v){return v.copy(zt.getClearColor())},this.setClearColor=function(){zt.setClearColor(...arguments)},this.getClearAlpha=function(){return zt.getClearAlpha()},this.setClearAlpha=function(){zt.setClearAlpha(...arguments)},this.clear=function(v=!0,N=!0,H=!0){let B=0;if(v){let z=!1;if(O!==null){let xt=O.texture.format;z=S.has(xt)}if(z){let xt=O.texture.type,wt=m.has(xt),_t=zt.getClearColor(),Ct=zt.getClearAlpha(),{r:Dt,g:qt,b:Kt}=_t;if(wt)f[0]=Dt,f[1]=qt,f[2]=Kt,f[3]=Ct,I.clearBufferuiv(I.COLOR,0,f);else w[0]=Dt,w[1]=qt,w[2]=Kt,w[3]=Ct,I.clearBufferiv(I.COLOR,0,w)}else B|=I.COLOR_BUFFER_BIT}if(N)B|=I.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0);if(H)B|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295);if(B!==0)I.clear(B)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(v){v.setRenderer(this),C=v},this.dispose=function(){e.removeEventListener("webglcontextlost",Xt,!1),e.removeEventListener("webglcontextrestored",Te,!1),e.removeEventListener("webglcontextcreationerror",ge,!1),zt.dispose(),It.dispose(),mt.dispose(),L.dispose(),Q.dispose(),X.dispose(),ft.dispose(),Et.dispose(),J.dispose(),pt.dispose(),pt.removeEventListener("sessionstart",sh),pt.removeEventListener("sessionend",rh),di.stop()};function Xt(v){v.preventDefault(),Ys("WebGLRenderer: Context Lost."),U=!0}function Te(){Ys("WebGLRenderer: Context Restored."),U=!1;let v=y.autoReset,N=Ot.enabled,H=Ot.autoUpdate,B=Ot.needsUpdate,z=Ot.type;et(),y.autoReset=v,Ot.enabled=N,Ot.autoUpdate=H,Ot.needsUpdate=B,Ot.type=z}function ge(v){Bt("WebGLRenderer: A WebGL context could not be created. Reason: ",v.statusMessage)}function Mn(v){let N=v.target;N.removeEventListener("dispose",Mn),Ln(N)}function Ln(v){hf(v),L.remove(v)}function hf(v){let N=L.get(v).programs;if(N!==void 0){if(N.forEach(function(H){J.releaseProgram(H)}),v.isShaderMaterial)J.releaseShaderCache(v)}}this.renderBufferDirect=function(v,N,H,B,z,xt){if(N===null)N=Lt;let wt=z.isMesh&&z.matrixWorld.determinantAffine()<0,_t=ff(v,N,H,B,z);E.setMaterial(B,wt);let Ct=H.index,Dt=1;if(B.wireframe===!0){if(Ct=ut.getWireframeAttribute(H),Ct===void 0)return;Dt=2}let qt=H.drawRange,Kt=H.attributes.position,Nt=qt.start*Dt,he=(qt.start+qt.count)*Dt;if(xt!==null)Nt=Math.max(Nt,xt.start*Dt),he=Math.min(he,(xt.start+xt.count)*Dt);if(Ct!==null)Nt=Math.max(Nt,0),he=Math.min(he,Ct.count);else if(Kt!==void 0&&Kt!==null)Nt=Math.max(Nt,0),he=Math.min(he,Kt.count);let Re=he-Nt;if(Re<0||Re===1/0)return;ft.setup(z,B,_t,H,Ct);let we,de=D;if(Ct!==null)we=rt.get(Ct),de=ct,de.setIndex(we);if(z.isMesh)if(B.wireframe===!0)E.setLineWidth(B.wireframeLinewidth*Wt()),de.setMode(I.LINES);else de.setMode(I.TRIANGLES);else if(z.isLine){let Ge=B.linewidth;if(Ge===void 0)Ge=1;if(E.setLineWidth(Ge*Wt()),z.isLineSegments)de.setMode(I.LINES);else if(z.isLineLoop)de.setMode(I.LINE_LOOP);else de.setMode(I.LINE_STRIP)}else if(z.isPoints)de.setMode(I.POINTS);else if(z.isSprite)de.setMode(I.TRIANGLES);if(z.isBatchedMesh)if(!jt.get("WEBGL_multi_draw")){let{_multiDrawStarts:Ge,_multiDrawCounts:Tt,_multiDrawCount:en}=z,ne=Ct?rt.get(Ct).bytesPerElement:1,rn=L.get(B).currentProgram.getUniforms();for(let Sn=0;Sn<en;Sn++)rn.setValue(I,"_gl_DrawID",Sn),de.render(Ge[Sn]/ne,Tt[Sn])}else de.renderMultiDraw(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount);else if(z.isInstancedMesh)de.renderInstances(Nt,Re,z.count);else if(H.isInstancedBufferGeometry){let Ge=H._maxInstanceCount!==void 0?H._maxInstanceCount:1/0,Tt=Math.min(H.instanceCount,Ge);de.renderInstances(Nt,Re,Tt)}else de.render(Nt,Re)};function ih(v,N,H){if(v.transparent===!0&&v.side===Tn&&v.forceSinglePass===!1)v.side=je,v.needsUpdate=!0,Tr(v,N,H),v.side=us,v.needsUpdate=!0,Tr(v,N,H),v.side=Tn;else Tr(v,N,H)}this.compile=function(v,N,H=null){if(H===null)H=v;if(T=mt.get(H),T.init(N),R.push(T),H.traverseVisible(function(z){if(z.isLight&&z.layers.test(N.layers)){if(T.pushLight(z),z.castShadow)T.pushShadow(z)}}),v!==H)v.traverseVisible(function(z){if(z.isLight&&z.layers.test(N.layers)){if(T.pushLight(z),z.castShadow)T.pushShadow(z)}});T.setupLights();let B=new Set;return v.traverse(function(z){if(!(z.isMesh||z.isPoints||z.isLine||z.isSprite))return;let xt=z.material;if(xt)if(Array.isArray(xt))for(let wt=0;wt<xt.length;wt++){let _t=xt[wt];ih(_t,H,z),B.add(_t)}else ih(xt,H,z),B.add(xt)}),T=R.pop(),B},this.compileAsync=function(v,N,H=null){let B=this.compile(v,N,H);return new Promise((z)=>{function xt(){if(B.forEach(function(wt){if(L.get(wt).currentProgram.isReady())B.delete(wt)}),B.size===0){z(v);return}setTimeout(xt,10)}if(jt.get("KHR_parallel_shader_compile")!==null)xt();else setTimeout(xt,10)})};let lo=null;function uf(v){if(lo)lo(v)}function sh(){di.stop()}function rh(){di.start()}let di=new Rd;if(di.setAnimationLoop(uf),typeof self<"u")di.setContext(self);this.setAnimationLoop=function(v){lo=v,pt.setAnimationLoop(v),v===null?di.stop():di.start()},pt.addEventListener("sessionstart",sh),pt.addEventListener("sessionend",rh),this.render=function(v,N){if(N!==void 0&&N.isCamera!==!0){Bt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(U===!0)return;if(C!==null)C.renderStart(v,N);let H=pt.enabled===!0&&pt.isPresenting===!0,B=g!==null&&(O===null||H)&&g.begin(M,O);if(v.matrixWorldAutoUpdate===!0)v.updateMatrixWorld();if(N.parent===null&&N.matrixWorldAutoUpdate===!0)N.updateMatrixWorld();if(pt.enabled===!0&&pt.isPresenting===!0&&(g===null||g.isCompositing()===!1)){if(pt.cameraAutoUpdate===!0)pt.updateCamera(N);N=pt.getCamera()}if(v.isScene===!0)v.onBeforeRender(M,v,N,O);if(T=mt.get(v,R.length),T.init(N),T.state.textureUnits=G.getTextureUnits(),R.push(T),yt.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),j.setFromProjectionMatrix(yt,Gl,N.reversedDepth),nt=this.localClippingEnabled,it=at.init(this.clippingPlanes,nt),x=It.get(v,A.length),x.init(),A.push(x),pt.enabled===!0&&pt.isPresenting===!0){let wt=M.xr.getDepthSensingMesh();if(wt!==null)co(wt,N,-1/0,M.sortObjects)}if(co(v,N,0,M.sortObjects),x.finish(),M.sortObjects===!0)x.sort(dt,Ft,N.reversedDepth);if(Vt=pt.enabled===!1||pt.isPresenting===!1||pt.hasDepthSensing()===!1,Vt)zt.addToRenderList(x,v);if(this.info.render.frame++,this.info.autoReset===!0)this.info.reset();if(it===!0)at.beginShadows();let z=T.state.shadowsArray;if(Ot.render(z,v,N),it===!0)at.endShadows();if((B&&g.hasRenderPass())===!1){let wt=x.opaque,_t=x.transmissive;if(T.setupLights(),N.isArrayCamera){let Ct=N.cameras;if(_t.length>0)for(let Dt=0,qt=Ct.length;Dt<qt;Dt++){let Kt=Ct[Dt];oh(wt,_t,v,Kt)}if(Vt)zt.render(v);for(let Dt=0,qt=Ct.length;Dt<qt;Dt++){let Kt=Ct[Dt];ah(x,v,Kt,Kt.viewport)}}else{if(_t.length>0)oh(wt,_t,v,N);if(Vt)zt.render(v);ah(x,v,N)}}if(O!==null&&V===0)G.updateMultisampleRenderTarget(O),G.updateRenderTargetMipmap(O);if(B)g.end(M);if(v.isScene===!0)v.onAfterRender(M,v,N);if(ft.resetDefaultState(),K=-1,st=null,R.pop(),R.length>0){if(T=R[R.length-1],G.setTextureUnits(T.state.textureUnits),it===!0)at.setGlobalState(M.clippingPlanes,T.state.camera)}else T=null;if(A.pop(),A.length>0)x=A[A.length-1];else x=null;if(C!==null)C.renderEnd()};function co(v,N,H,B){if(v.visible===!1)return;if(v.layers.test(N.layers)){if(v.isGroup)H=v.renderOrder;else if(v.isLOD){if(v.autoUpdate===!0)v.update(N)}else if(v.isLightProbeGrid)T.pushLightProbeGrid(v);else if(v.isLight){if(T.pushLight(v),v.castShadow)T.pushShadow(v)}else if(v.isSprite){if(!v.frustumCulled||j.intersectsSprite(v)){if(B)Pt.setFromMatrixPosition(v.matrixWorld).applyMatrix4(yt);let wt=X.update(v),_t=v.material;if(_t.visible)x.push(v,wt,_t,H,Pt.z,null)}}else if(v.isMesh||v.isLine||v.isPoints){if(!v.frustumCulled||j.intersectsObject(v)){let wt=X.update(v),_t=v.material;if(B){if(v.boundingSphere!==void 0){if(v.boundingSphere===null)v.computeBoundingSphere();Pt.copy(v.boundingSphere.center)}else{if(wt.boundingSphere===null)wt.computeBoundingSphere();Pt.copy(wt.boundingSphere.center)}Pt.applyMatrix4(v.matrixWorld).applyMatrix4(yt)}if(Array.isArray(_t)){let Ct=wt.groups;for(let Dt=0,qt=Ct.length;Dt<qt;Dt++){let Kt=Ct[Dt],Nt=_t[Kt.materialIndex];if(Nt&&Nt.visible)x.push(v,wt,Nt,H,Pt.z,Kt)}}else if(_t.visible)x.push(v,wt,_t,H,Pt.z,null)}}}let xt=v.children;for(let wt=0,_t=xt.length;wt<_t;wt++)co(xt[wt],N,H,B)}function ah(v,N,H,B){let{opaque:z,transmissive:xt,transparent:wt}=v;if(T.setupLightsView(H),it===!0)at.setGlobalState(M.clippingPlanes,H);if(B)E.viewport(ot.copy(B));if(z.length>0)Er(z,N,H);if(xt.length>0)Er(xt,N,H);if(wt.length>0)Er(wt,N,H);E.buffers.depth.setTest(!0),E.buffers.depth.setMask(!0),E.buffers.color.setMask(!0),E.setPolygonOffset(!1)}function oh(v,N,H,B){if((H.isScene===!0?H.overrideMaterial:null)!==null)return;if(T.state.transmissionRenderTarget[B.id]===void 0){let Nt=jt.has("EXT_color_buffer_half_float")||jt.has("EXT_color_buffer_float");T.state.transmissionRenderTarget[B.id]=new cn(1,1,{generateMipmaps:!0,type:Nt?Gn:yn,minFilter:Mi,samples:Math.max(4,Jt.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:te.workingColorSpace})}let xt=T.state.transmissionRenderTarget[B.id],wt=B.viewport||ot;xt.setSize(wt.z*M.transmissionResolutionScale,wt.w*M.transmissionResolutionScale);let _t=M.getRenderTarget(),Ct=M.getActiveCubeFace(),Dt=M.getActiveMipmapLevel();if(M.setRenderTarget(xt),M.getClearColor(ce),ae=M.getClearAlpha(),ae<1)M.setClearColor(16777215,0.5);if(M.clear(),Vt)zt.render(H);let qt=M.toneMapping;M.toneMapping=xn;let Kt=B.viewport;if(B.viewport!==void 0)B.viewport=void 0;if(T.setupLightsView(B),it===!0)at.setGlobalState(M.clippingPlanes,B);if(Er(v,H,B),G.updateMultisampleRenderTarget(xt),G.updateRenderTargetMipmap(xt),jt.has("WEBGL_multisampled_render_to_texture")===!1){let Nt=!1;for(let he=0,Re=N.length;he<Re;he++){let we=N[he],{object:de,geometry:Ge,material:Tt,group:en}=we;if(Tt.side===Tn&&de.layers.test(B.layers)){let ne=Tt.side;Tt.side=je,Tt.needsUpdate=!0,lh(de,H,B,Ge,Tt,en),Tt.side=ne,Tt.needsUpdate=!0,Nt=!0}}if(Nt===!0)G.updateMultisampleRenderTarget(xt),G.updateRenderTargetMipmap(xt)}if(M.setRenderTarget(_t,Ct,Dt),M.setClearColor(ce,ae),Kt!==void 0)B.viewport=Kt;M.toneMapping=qt}function Er(v,N,H){let B=N.isScene===!0?N.overrideMaterial:null;for(let z=0,xt=v.length;z<xt;z++){let wt=v[z],{object:_t,geometry:Ct,group:Dt}=wt,qt=wt.material;if(qt.allowOverride===!0&&B!==null)qt=B;if(_t.layers.test(H.layers))lh(_t,N,H,Ct,qt,Dt)}}function lh(v,N,H,B,z,xt){if(v.onBeforeRender(M,N,H,B,z,xt),v.modelViewMatrix.multiplyMatrices(H.matrixWorldInverse,v.matrixWorld),v.normalMatrix.getNormalMatrix(v.modelViewMatrix),z.onBeforeRender(M,N,H,B,v,xt),z.transparent===!0&&z.side===Tn&&z.forceSinglePass===!1)z.side=je,z.needsUpdate=!0,M.renderBufferDirect(H,N,B,z,v,xt),z.side=us,z.needsUpdate=!0,M.renderBufferDirect(H,N,B,z,v,xt),z.side=Tn;else M.renderBufferDirect(H,N,B,z,v,xt);v.onAfterRender(M,N,H,B,z,xt)}function Tr(v,N,H){if(N.isScene!==!0)N=Lt;let B=L.get(v),z=T.state.lights,xt=T.state.shadowsArray,wt=z.state.version,_t=J.getParameters(v,z.state,xt,N,H,T.state.lightProbeGridArray),Ct=J.getProgramCacheKey(_t),Dt=B.programs;B.environment=v.isMeshStandardMaterial||v.isMeshLambertMaterial||v.isMeshPhongMaterial?N.environment:null,B.fog=N.fog;let qt=v.isMeshStandardMaterial||v.isMeshLambertMaterial&&!v.envMap||v.isMeshPhongMaterial&&!v.envMap;if(B.envMap=Q.get(v.envMap||B.environment,qt),B.envMapRotation=B.environment!==null&&v.envMap===null?N.environmentRotation:v.envMapRotation,Dt===void 0)v.addEventListener("dispose",Mn),Dt=new Map,B.programs=Dt;let Kt=Dt.get(Ct);if(Kt!==void 0){if(B.currentProgram===Kt&&B.lightsStateVersion===wt)return hh(v,_t),Kt}else{if(_t.uniforms=J.getUniforms(v),C!==null&&v.isNodeMaterial)C.build(v,H,_t);v.onBeforeCompile(_t,M),Kt=J.acquireProgram(_t,Ct),Dt.set(Ct,Kt),B.uniforms=_t.uniforms}let Nt=B.uniforms;if(!v.isShaderMaterial&&!v.isRawShaderMaterial||v.clipping===!0)Nt.clippingPlanes=at.uniform;if(hh(v,_t),B.needsLights=mf(v),B.lightsStateVersion=wt,B.needsLights)Nt.ambientLightColor.value=z.state.ambient,Nt.lightProbe.value=z.state.probe,Nt.directionalLights.value=z.state.directional,Nt.directionalLightShadows.value=z.state.directionalShadow,Nt.spotLights.value=z.state.spot,Nt.spotLightShadows.value=z.state.spotShadow,Nt.rectAreaLights.value=z.state.rectArea,Nt.ltc_1.value=z.state.rectAreaLTC1,Nt.ltc_2.value=z.state.rectAreaLTC2,Nt.pointLights.value=z.state.point,Nt.pointLightShadows.value=z.state.pointShadow,Nt.hemisphereLights.value=z.state.hemi,Nt.directionalShadowMatrix.value=z.state.directionalShadowMatrix,Nt.spotLightMatrix.value=z.state.spotLightMatrix,Nt.spotLightMap.value=z.state.spotLightMap,Nt.pointShadowMatrix.value=z.state.pointShadowMatrix;return B.lightProbeGrid=T.state.lightProbeGridArray.length>0,B.currentProgram=Kt,B.uniformsList=null,Kt}function ch(v){if(v.uniformsList===null){let N=v.currentProgram.getUniforms();v.uniformsList=yr.seqWithValue(N.seq,v.uniforms)}return v.uniformsList}function hh(v,N){let H=L.get(v);H.outputColorSpace=N.outputColorSpace,H.batching=N.batching,H.batchingColor=N.batchingColor,H.instancing=N.instancing,H.instancingColor=N.instancingColor,H.instancingMorph=N.instancingMorph,H.skinning=N.skinning,H.morphTargets=N.morphTargets,H.morphNormals=N.morphNormals,H.morphColors=N.morphColors,H.morphTargetsCount=N.morphTargetsCount,H.numClippingPlanes=N.numClippingPlanes,H.numIntersection=N.numClipIntersection,H.vertexAlphas=N.vertexAlphas,H.vertexTangents=N.vertexTangents,H.toneMapping=N.toneMapping}function df(v,N){if(v.length===0)return null;if(v.length===1)return v[0].texture!==null?v[0]:null;b.setFromMatrixPosition(N.matrixWorld);for(let H=0,B=v.length;H<B;H++){let z=v[H];if(z.texture!==null&&z.boundingBox.containsPoint(b))return z}return null}function ff(v,N,H,B,z){if(N.isScene!==!0)N=Lt;G.resetTextureUnits();let xt=N.fog,wt=B.isMeshStandardMaterial||B.isMeshLambertMaterial||B.isMeshPhongMaterial?N.environment:null,_t=O===null?M.outputColorSpace:O.isXRRenderTarget===!0?O.texture.colorSpace:te.workingColorSpace,Ct=B.isMeshStandardMaterial||B.isMeshLambertMaterial&&!B.envMap||B.isMeshPhongMaterial&&!B.envMap,Dt=Q.get(B.envMap||wt,Ct),qt=B.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,Kt=!!H.attributes.tangent&&(!!B.normalMap||B.anisotropy>0),Nt=!!H.morphAttributes.position,he=!!H.morphAttributes.normal,Re=!!H.morphAttributes.color,we=xn;if(B.toneMapped){if(O===null||O.isXRRenderTarget===!0)we=M.toneMapping}let de=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,Ge=de!==void 0?de.length:0,Tt=L.get(B),en=T.state.lights;if(it===!0){if(nt===!0||v!==st){let _e=v===st&&B.id===K;at.setState(B,v,_e)}}let ne=!1;if(B.version===Tt.__version){if(Tt.needsLights&&Tt.lightsStateVersion!==en.state.version)ne=!0;else if(Tt.outputColorSpace!==_t)ne=!0;else if(z.isBatchedMesh&&Tt.batching===!1)ne=!0;else if(!z.isBatchedMesh&&Tt.batching===!0)ne=!0;else if(z.isBatchedMesh&&Tt.batchingColor===!0&&z.colorTexture===null)ne=!0;else if(z.isBatchedMesh&&Tt.batchingColor===!1&&z.colorTexture!==null)ne=!0;else if(z.isInstancedMesh&&Tt.instancing===!1)ne=!0;else if(!z.isInstancedMesh&&Tt.instancing===!0)ne=!0;else if(z.isSkinnedMesh&&Tt.skinning===!1)ne=!0;else if(!z.isSkinnedMesh&&Tt.skinning===!0)ne=!0;else if(z.isInstancedMesh&&Tt.instancingColor===!0&&z.instanceColor===null)ne=!0;else if(z.isInstancedMesh&&Tt.instancingColor===!1&&z.instanceColor!==null)ne=!0;else if(z.isInstancedMesh&&Tt.instancingMorph===!0&&z.morphTexture===null)ne=!0;else if(z.isInstancedMesh&&Tt.instancingMorph===!1&&z.morphTexture!==null)ne=!0;else if(Tt.envMap!==Dt)ne=!0;else if(B.fog===!0&&Tt.fog!==xt)ne=!0;else if(Tt.numClippingPlanes!==void 0&&(Tt.numClippingPlanes!==at.numPlanes||Tt.numIntersection!==at.numIntersection))ne=!0;else if(Tt.vertexAlphas!==qt)ne=!0;else if(Tt.vertexTangents!==Kt)ne=!0;else if(Tt.morphTargets!==Nt)ne=!0;else if(Tt.morphNormals!==he)ne=!0;else if(Tt.morphColors!==Re)ne=!0;else if(Tt.toneMapping!==we)ne=!0;else if(Tt.morphTargetsCount!==Ge)ne=!0;else if(!!Tt.lightProbeGrid!==T.state.lightProbeGridArray.length>0)ne=!0}else ne=!0,Tt.__version=B.version;let rn=Tt.currentProgram;if(ne===!0){if(rn=Tr(B,N,z),C&&B.isNodeMaterial)C.onUpdateProgram(B,rn,Tt)}let Sn=!1,Yn=!1,ki=!1,fe=rn.getUniforms(),Ce=Tt.uniforms;if(E.useProgram(rn.program))Sn=!0,Yn=!0,ki=!0;if(B.id!==K)K=B.id,Yn=!0;if(Tt.needsLights){let _e=df(T.state.lightProbeGridArray,z);if(Tt.lightProbeGrid!==_e)Tt.lightProbeGrid=_e,Yn=!0}if(Sn||st!==v){if(E.buffers.depth.getReversed()&&v.reversedDepth!==!0)v._reversedDepth=!0,v.updateProjectionMatrix();fe.setValue(I,"projectionMatrix",v.projectionMatrix),fe.setValue(I,"viewMatrix",v.matrixWorldInverse);let $n=fe.map.cameraPosition;if($n!==void 0)$n.setValue(I,bt.setFromMatrixPosition(v.matrixWorld));if(Jt.logarithmicDepthBuffer)fe.setValue(I,"logDepthBufFC",2/(Math.log(v.far+1)/Math.LN2));if(B.isMeshPhongMaterial||B.isMeshToonMaterial||B.isMeshLambertMaterial||B.isMeshBasicMaterial||B.isMeshStandardMaterial||B.isShaderMaterial)fe.setValue(I,"isOrthographic",v.isOrthographicCamera===!0);if(st!==v)st=v,Yn=!0,ki=!0}if(Tt.needsLights){if(en.state.directionalShadowMap.length>0)fe.setValue(I,"directionalShadowMap",en.state.directionalShadowMap,G);if(en.state.spotShadowMap.length>0)fe.setValue(I,"spotShadowMap",en.state.spotShadowMap,G);if(en.state.pointShadowMap.length>0)fe.setValue(I,"pointShadowMap",en.state.pointShadowMap,G)}if(z.isSkinnedMesh){fe.setOptional(I,z,"bindMatrix"),fe.setOptional(I,z,"bindMatrixInverse");let _e=z.skeleton;if(_e){if(_e.boneTexture===null)_e.computeBoneTexture();fe.setValue(I,"boneTexture",_e.boneTexture,G)}}if(z.isBatchedMesh){if(fe.setOptional(I,z,"batchingTexture"),fe.setValue(I,"batchingTexture",z._matricesTexture,G),fe.setOptional(I,z,"batchingIdTexture"),fe.setValue(I,"batchingIdTexture",z._indirectTexture,G),fe.setOptional(I,z,"batchingColorTexture"),z._colorsTexture!==null)fe.setValue(I,"batchingColorTexture",z._colorsTexture,G)}let Zn=H.morphAttributes;if(Zn.position!==void 0||Zn.normal!==void 0||Zn.color!==void 0)ie.update(z,H,rn);if(Yn||Tt.receiveShadow!==z.receiveShadow)Tt.receiveShadow=z.receiveShadow,fe.setValue(I,"receiveShadow",z.receiveShadow);if((B.isMeshStandardMaterial||B.isMeshLambertMaterial||B.isMeshPhongMaterial)&&B.envMap===null&&N.environment!==null)Ce.envMapIntensity.value=N.environmentIntensity;if(Ce.dfgLUT!==void 0)Ce.dfgLUT.value=bx();if(Yn){if(fe.setValue(I,"toneMappingExposure",M.toneMappingExposure),Tt.needsLights)pf(Ce,ki);if(xt&&B.fog===!0)vt.refreshFogUniforms(Ce,xt);if(vt.refreshMaterialUniforms(Ce,B,St,lt,T.state.transmissionRenderTarget[v.id]),Tt.needsLights&&Tt.lightProbeGrid){let _e=Tt.lightProbeGrid;Ce.probesSH.value=_e.texture,Ce.probesMin.value.copy(_e.boundingBox.min),Ce.probesMax.value.copy(_e.boundingBox.max),Ce.probesResolution.value.copy(_e.resolution)}yr.upload(I,ch(Tt),Ce,G)}if(B.isShaderMaterial&&B.uniformsNeedUpdate===!0)yr.upload(I,ch(Tt),Ce,G),B.uniformsNeedUpdate=!1;if(B.isSpriteMaterial)fe.setValue(I,"center",z.center);if(fe.setValue(I,"modelViewMatrix",z.modelViewMatrix),fe.setValue(I,"normalMatrix",z.normalMatrix),fe.setValue(I,"modelMatrix",z.matrixWorld),B.uniformsGroups!==void 0){let _e=B.uniformsGroups;for(let $n=0,Gi=_e.length;$n<Gi;$n++){let uh=_e[$n];Et.update(uh,rn),Et.bind(uh,rn)}}return rn}function pf(v,N){v.ambientLightColor.needsUpdate=N,v.lightProbe.needsUpdate=N,v.directionalLights.needsUpdate=N,v.directionalLightShadows.needsUpdate=N,v.pointLights.needsUpdate=N,v.pointLightShadows.needsUpdate=N,v.spotLights.needsUpdate=N,v.spotLightShadows.needsUpdate=N,v.rectAreaLights.needsUpdate=N,v.hemisphereLights.needsUpdate=N}function mf(v){return v.isMeshLambertMaterial||v.isMeshToonMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isShadowMaterial||v.isShaderMaterial&&v.lights===!0}if(this.getActiveCubeFace=function(){return W},this.getActiveMipmapLevel=function(){return V},this.getRenderTarget=function(){return O},this.setRenderTargetTextures=function(v,N,H){let B=L.get(v);if(B.__autoAllocateDepthBuffer=v.resolveDepthBuffer===!1,B.__autoAllocateDepthBuffer===!1)B.__useRenderToTexture=!1;L.get(v.texture).__webglTexture=N,L.get(v.depthTexture).__webglTexture=B.__autoAllocateDepthBuffer?void 0:H,B.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(v,N){let H=L.get(v);H.__webglFramebuffer=N,H.__useDefaultFramebuffer=N===void 0},this.setRenderTarget=function(v,N=0,H=0){O=v,W=N,V=H;let B=null,z=!1,xt=!1;if(v){let _t=L.get(v);if(_t.__useDefaultFramebuffer!==void 0){E.bindFramebuffer(I.FRAMEBUFFER,_t.__webglFramebuffer),ot.copy(v.viewport),At.copy(v.scissor),Mt=v.scissorTest,E.viewport(ot),E.scissor(At),E.setScissorTest(Mt),K=-1;return}else if(_t.__webglFramebuffer===void 0)G.setupRenderTarget(v);else if(_t.__hasExternalTextures)G.rebindTextures(v,L.get(v.texture).__webglTexture,L.get(v.depthTexture).__webglTexture);else if(v.depthBuffer){let qt=v.depthTexture;if(_t.__boundDepthTexture!==qt){if(qt!==null&&L.has(qt)&&(v.width!==qt.image.width||v.height!==qt.image.height))throw Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");G.setupDepthRenderbuffer(v)}}let Ct=v.texture;if(Ct.isData3DTexture||Ct.isDataArrayTexture||Ct.isCompressedArrayTexture)xt=!0;let Dt=L.get(v).__webglFramebuffer;if(v.isWebGLCubeRenderTarget){if(Array.isArray(Dt[N]))B=Dt[N][H];else B=Dt[N];z=!0}else if(v.samples>0&&G.useMultisampledRTT(v)===!1)B=L.get(v).__webglMultisampledFramebuffer;else if(Array.isArray(Dt))B=Dt[H];else B=Dt;ot.copy(v.viewport),At.copy(v.scissor),Mt=v.scissorTest}else ot.copy(ee).multiplyScalar(St).floor(),At.copy(kt).multiplyScalar(St).floor(),Mt=Gt;if(H!==0)B=k;if(E.bindFramebuffer(I.FRAMEBUFFER,B))E.drawBuffers(v,B);if(E.viewport(ot),E.scissor(At),E.setScissorTest(Mt),z){let _t=L.get(v.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+N,_t.__webglTexture,H)}else if(xt){let _t=N;for(let Ct=0;Ct<v.textures.length;Ct++){let Dt=L.get(v.textures[Ct]);I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0+Ct,Dt.__webglTexture,H,_t)}}else if(v!==null&&H!==0){let _t=L.get(v.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,_t.__webglTexture,H)}K=-1},this.readRenderTargetPixels=function(v,N,H,B,z,xt,wt,_t=0){if(!(v&&v.isWebGLRenderTarget)){Bt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ct=L.get(v).__webglFramebuffer;if(v.isWebGLCubeRenderTarget&&wt!==void 0)Ct=Ct[wt];if(Ct){E.bindFramebuffer(I.FRAMEBUFFER,Ct);try{let Dt=v.textures[_t],{format:qt,type:Kt}=Dt;if(v.textures.length>1)I.readBuffer(I.COLOR_ATTACHMENT0+_t);if(!Jt.textureFormatReadable(qt)){Bt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Jt.textureTypeReadable(Kt)){Bt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}if(N>=0&&N<=v.width-B&&(H>=0&&H<=v.height-z))I.readPixels(N,H,B,z,Y.convert(qt),Y.convert(Kt),xt)}finally{let Dt=O!==null?L.get(O).__webglFramebuffer:null;E.bindFramebuffer(I.FRAMEBUFFER,Dt)}}},this.readRenderTargetPixelsAsync=async function(v,N,H,B,z,xt,wt,_t=0){if(!(v&&v.isWebGLRenderTarget))throw Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ct=L.get(v).__webglFramebuffer;if(v.isWebGLCubeRenderTarget&&wt!==void 0)Ct=Ct[wt];if(Ct)if(N>=0&&N<=v.width-B&&(H>=0&&H<=v.height-z)){E.bindFramebuffer(I.FRAMEBUFFER,Ct);let Dt=v.textures[_t],{format:qt,type:Kt}=Dt;if(v.textures.length>1)I.readBuffer(I.COLOR_ATTACHMENT0+_t);if(!Jt.textureFormatReadable(qt))throw Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Jt.textureTypeReadable(Kt))throw Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Nt=I.createBuffer();I.bindBuffer(I.PIXEL_PACK_BUFFER,Nt),I.bufferData(I.PIXEL_PACK_BUFFER,xt.byteLength,I.STREAM_READ),I.readPixels(N,H,B,z,Y.convert(qt),Y.convert(Kt),0);let he=O!==null?L.get(O).__webglFramebuffer:null;E.bindFramebuffer(I.FRAMEBUFFER,he);let Re=I.fenceSync(I.SYNC_GPU_COMMANDS_COMPLETE,0);return I.flush(),await qu(I,Re,4),I.bindBuffer(I.PIXEL_PACK_BUFFER,Nt),I.getBufferSubData(I.PIXEL_PACK_BUFFER,0,xt),I.deleteBuffer(Nt),I.deleteSync(Re),xt}else throw Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(v,N=null,H=0){let B=Math.pow(2,-H),z=Math.floor(v.image.width*B),xt=Math.floor(v.image.height*B),wt=N!==null?N.x:0,_t=N!==null?N.y:0;G.setTexture2D(v,0),I.copyTexSubImage2D(I.TEXTURE_2D,H,0,0,wt,_t,z,xt),E.unbindTexture()},this.copyTextureToTexture=function(v,N,H=null,B=null,z=0,xt=0){let wt,_t,Ct,Dt,qt,Kt,Nt,he,Re,we=v.isCompressedTexture?v.mipmaps[xt]:v.image;if(H!==null)wt=H.max.x-H.min.x,_t=H.max.y-H.min.y,Ct=H.isBox3?H.max.z-H.min.z:1,Dt=H.min.x,qt=H.min.y,Kt=H.isBox3?H.min.z:0;else{let Ce=Math.pow(2,-z);if(wt=Math.floor(we.width*Ce),_t=Math.floor(we.height*Ce),v.isDataArrayTexture)Ct=we.depth;else if(v.isData3DTexture)Ct=Math.floor(we.depth*Ce);else Ct=1;Dt=0,qt=0,Kt=0}if(B!==null)Nt=B.x,he=B.y,Re=B.z;else Nt=0,he=0,Re=0;let de=Y.convert(N.format),Ge=Y.convert(N.type),Tt;if(N.isData3DTexture)G.setTexture3D(N,0),Tt=I.TEXTURE_3D;else if(N.isDataArrayTexture||N.isCompressedArrayTexture)G.setTexture2DArray(N,0),Tt=I.TEXTURE_2D_ARRAY;else G.setTexture2D(N,0),Tt=I.TEXTURE_2D;E.activeTexture(I.TEXTURE0),E.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,N.flipY),E.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),E.pixelStorei(I.UNPACK_ALIGNMENT,N.unpackAlignment);let en=E.getParameter(I.UNPACK_ROW_LENGTH),ne=E.getParameter(I.UNPACK_IMAGE_HEIGHT),rn=E.getParameter(I.UNPACK_SKIP_PIXELS),Sn=E.getParameter(I.UNPACK_SKIP_ROWS),Yn=E.getParameter(I.UNPACK_SKIP_IMAGES);E.pixelStorei(I.UNPACK_ROW_LENGTH,we.width),E.pixelStorei(I.UNPACK_IMAGE_HEIGHT,we.height),E.pixelStorei(I.UNPACK_SKIP_PIXELS,Dt),E.pixelStorei(I.UNPACK_SKIP_ROWS,qt),E.pixelStorei(I.UNPACK_SKIP_IMAGES,Kt);let ki=v.isDataArrayTexture||v.isData3DTexture,fe=N.isDataArrayTexture||N.isData3DTexture;if(v.isDepthTexture){let Ce=L.get(v),Zn=L.get(N),_e=L.get(Ce.__renderTarget),$n=L.get(Zn.__renderTarget);E.bindFramebuffer(I.READ_FRAMEBUFFER,_e.__webglFramebuffer),E.bindFramebuffer(I.DRAW_FRAMEBUFFER,$n.__webglFramebuffer);for(let Gi=0;Gi<Ct;Gi++){if(ki)I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,L.get(v).__webglTexture,z,Kt+Gi),I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,L.get(N).__webglTexture,xt,Re+Gi);I.blitFramebuffer(Dt,qt,wt,_t,Nt,he,wt,_t,I.DEPTH_BUFFER_BIT,I.NEAREST)}E.bindFramebuffer(I.READ_FRAMEBUFFER,null),E.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else if(z!==0||v.isRenderTargetTexture||L.has(v)){let Ce=L.get(v),Zn=L.get(N);E.bindFramebuffer(I.READ_FRAMEBUFFER,q),E.bindFramebuffer(I.DRAW_FRAMEBUFFER,F);for(let _e=0;_e<Ct;_e++){if(ki)I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,Ce.__webglTexture,z,Kt+_e);else I.framebufferTexture2D(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,Ce.__webglTexture,z);if(fe)I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,Zn.__webglTexture,xt,Re+_e);else I.framebufferTexture2D(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,Zn.__webglTexture,xt);if(z!==0)I.blitFramebuffer(Dt,qt,wt,_t,Nt,he,wt,_t,I.COLOR_BUFFER_BIT,I.NEAREST);else if(fe)I.copyTexSubImage3D(Tt,xt,Nt,he,Re+_e,Dt,qt,wt,_t);else I.copyTexSubImage2D(Tt,xt,Nt,he,Dt,qt,wt,_t)}E.bindFramebuffer(I.READ_FRAMEBUFFER,null),E.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else if(fe)if(v.isDataTexture||v.isData3DTexture)I.texSubImage3D(Tt,xt,Nt,he,Re,wt,_t,Ct,de,Ge,we.data);else if(N.isCompressedArrayTexture)I.compressedTexSubImage3D(Tt,xt,Nt,he,Re,wt,_t,Ct,de,we.data);else I.texSubImage3D(Tt,xt,Nt,he,Re,wt,_t,Ct,de,Ge,we);else if(v.isDataTexture)I.texSubImage2D(I.TEXTURE_2D,xt,Nt,he,wt,_t,de,Ge,we.data);else if(v.isCompressedTexture)I.compressedTexSubImage2D(I.TEXTURE_2D,xt,Nt,he,we.width,we.height,de,we.data);else I.texSubImage2D(I.TEXTURE_2D,xt,Nt,he,wt,_t,de,Ge,we);if(E.pixelStorei(I.UNPACK_ROW_LENGTH,en),E.pixelStorei(I.UNPACK_IMAGE_HEIGHT,ne),E.pixelStorei(I.UNPACK_SKIP_PIXELS,rn),E.pixelStorei(I.UNPACK_SKIP_ROWS,Sn),E.pixelStorei(I.UNPACK_SKIP_IMAGES,Yn),xt===0&&N.generateMipmaps)I.generateMipmap(Tt);E.unbindTexture()},this.initRenderTarget=function(v){if(L.get(v).__webglFramebuffer===void 0)G.setupRenderTarget(v)},this.initTexture=function(v){if(v.isCubeTexture)G.setTextureCube(v,0);else if(v.isData3DTexture)G.setTexture3D(v,0);else if(v.isDataArrayTexture||v.isCompressedArrayTexture)G.setTexture2DArray(v,0);else G.setTexture2D(v,0);E.unbindTexture()},this.resetState=function(){W=0,V=0,O=null,E.reset(),ft.reset()},typeof __THREE_DEVTOOLS__<"u")__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Gl}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=te._getDrawingBufferColorSpace(t),e.unpackColorSpace=te._getUnpackColorSpace()}}var Hd={type:"change"},Dc={type:"start"},Wd={type:"end"},Ya=new wi,Vd=new Ye,Tx=Math.cos(70*gs.DEG2RAD),Fe=new P,Qe=2*Math.PI,ue={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Lc=0.000001;class Nc extends Ha{constructor(t,e=null){super(t,e);if(this.state=ue.NONE,this.target=new P,this.cursor=new P,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=0.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:on.ROTATE,MIDDLE:on.DOLLY,RIGHT:on.PAN},this.touches={ONE:_n.ROTATE,TWO:_n.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle="auto",this._domElementKeyEvents=null,this._lastPosition=new P,this._lastQuaternion=new ln,this._lastTargetPosition=new P,this._quat=new ln().setFromUnitVectors(t.up,new P(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new li,this._sphericalDelta=new li,this._scale=1,this._panOffset=new P,this._rotateStart=new tt,this._rotateEnd=new tt,this._rotateDelta=new tt,this._panStart=new tt,this._panEnd=new tt,this._panDelta=new tt,this._dollyStart=new tt,this._dollyEnd=new tt,this._dollyDelta=new tt,this._dollyDirection=new P,this._mouse=new tt,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=Ax.bind(this),this._onPointerDown=wx.bind(this),this._onPointerUp=Rx.bind(this),this._onContextMenu=Ux.bind(this),this._onMouseWheel=Ix.bind(this),this._onKeyDown=Lx.bind(this),this._onTouchStart=Dx.bind(this),this._onTouchMove=Nx.bind(this),this._onMouseDown=Cx.bind(this),this._onMouseMove=Px.bind(this),this._interceptControlDown=Fx.bind(this),this._interceptControlUp=Ox.bind(this),this.domElement!==null)this.connect(this.domElement);this.update()}set cursorStyle(t){if(this._cursorStyle=t,t==="grab")this.domElement.style.cursor="grab";else this.domElement.style.cursor="auto"}get cursorStyle(){return this._cursorStyle}connect(t){super.connect(t),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction=""}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){if(this._domElementKeyEvents!==null)this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Hd),this.update(),this.state=ue.NONE}pan(t,e){this._pan(t,e),this.update()}dollyIn(t){this._dollyIn(t),this.update()}dollyOut(t){this._dollyOut(t),this.update()}rotateLeft(t){this._rotateLeft(t),this.update()}rotateUp(t){this._rotateUp(t),this.update()}update(t=null){let e=this.object.position;if(Fe.copy(e).sub(this.target),Fe.applyQuaternion(this._quat),this._spherical.setFromVector3(Fe),this.autoRotate&&this.state===ue.NONE)this._rotateLeft(this._getAutoRotationAngle(t));if(this.enableDamping)this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor;else this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi;let n=this.minAzimuthAngle,i=this.maxAzimuthAngle;if(isFinite(n)&&isFinite(i)){if(n<-Math.PI)n+=Qe;else if(n>Math.PI)n-=Qe;if(i<-Math.PI)i+=Qe;else if(i>Math.PI)i-=Qe;if(n<=i)this._spherical.theta=Math.max(n,Math.min(i,this._spherical.theta));else this._spherical.theta=this._spherical.theta>(n+i)/2?Math.max(n,this._spherical.theta):Math.min(i,this._spherical.theta)}if(this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0)this.target.addScaledVector(this._panOffset,this.dampingFactor);else this.target.add(this._panOffset);this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let s=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{let r=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),s=r!=this._spherical.radius}if(Fe.setFromSpherical(this._spherical),Fe.applyQuaternion(this._quatInverse),e.copy(this.target).add(Fe),this.object.lookAt(this.target),this.enableDamping===!0)this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor);else this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0);if(this.zoomToCursor&&this._performCursorZoom){let r=null;if(this.object.isPerspectiveCamera){let a=Fe.length();r=this._clampDistance(a*this._scale);let o=a-r;this.object.position.addScaledVector(this._dollyDirection,o),this.object.updateMatrixWorld(),s=!!o}else if(this.object.isOrthographicCamera){let a=new P(this._mouse.x,this._mouse.y,0);a.unproject(this.object);let o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),s=o!==this.object.zoom;let l=new P(this._mouse.x,this._mouse.y,0);l.unproject(this.object),this.object.position.sub(l).add(a),this.object.updateMatrixWorld(),r=Fe.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;if(r!==null)if(this.screenSpacePanning)this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(r).add(this.object.position);else if(Ya.origin.copy(this.object.position),Ya.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Ya.direction))<Tx)this.object.lookAt(this.target);else Vd.setFromNormalAndCoplanarPoint(this.object.up,this.target),Ya.intersectPlane(Vd,this.target)}else if(this.object.isOrthographicCamera){let r=this.object.zoom;if(this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),r!==this.object.zoom)this.object.updateProjectionMatrix(),s=!0}if(this._scale=1,this._performCursorZoom=!1,s||this._lastPosition.distanceToSquared(this.object.position)>Lc||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Lc||this._lastTargetPosition.distanceToSquared(this.target)>Lc)return this.dispatchEvent(Hd),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0;return!1}_getAutoRotationAngle(t){if(t!==null)return Qe/60*this.autoRotateSpeed*t;else return Qe/60/60*this.autoRotateSpeed}_getZoomScale(t){let e=Math.abs(t*0.01);return Math.pow(0.95,this.zoomSpeed*e)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,e){Fe.setFromMatrixColumn(e,0),Fe.multiplyScalar(-t),this._panOffset.add(Fe)}_panUp(t,e){if(this.screenSpacePanning===!0)Fe.setFromMatrixColumn(e,1);else Fe.setFromMatrixColumn(e,0),Fe.crossVectors(this.object.up,Fe);Fe.multiplyScalar(t),this._panOffset.add(Fe)}_pan(t,e){let n=this.domElement;if(this.object.isPerspectiveCamera){let i=this.object.position;Fe.copy(i).sub(this.target);let s=Fe.length();s*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*s/n.clientHeight,this.object.matrix),this._panUp(2*e*s/n.clientHeight,this.object.matrix)}else if(this.object.isOrthographicCamera)this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix);else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1}_dollyOut(t){if(this.object.isPerspectiveCamera||this.object.isOrthographicCamera)this._scale/=t;else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1}_dollyIn(t){if(this.object.isPerspectiveCamera||this.object.isOrthographicCamera)this._scale*=t;else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1}_updateZoomParameters(t,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;let n=this.domElement.getBoundingClientRect(),i=t-n.left,s=e-n.top,{width:r,height:a}=n;this._mouse.x=i/r*2-1,this._mouse.y=-(s/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let e=this.domElement;this._rotateLeft(Qe*this._rotateDelta.x/e.clientHeight),this._rotateUp(Qe*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){if(this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0)this._dollyOut(this._getZoomScale(this._dollyDelta.y));else if(this._dollyDelta.y<0)this._dollyIn(this._getZoomScale(this._dollyDelta.y));this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){if(this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0)this._dollyIn(this._getZoomScale(t.deltaY));else if(t.deltaY>0)this._dollyOut(this._getZoomScale(t.deltaY));this.update()}_handleKeyDown(t){let e=!1;switch(t.code){case this.keys.UP:if(t.ctrlKey||t.metaKey||t.shiftKey){if(this.enableRotate)this._rotateUp(Qe*this.keyRotateSpeed/this.domElement.clientHeight)}else if(this.enablePan)this._pan(0,this.keyPanSpeed);e=!0;break;case this.keys.BOTTOM:if(t.ctrlKey||t.metaKey||t.shiftKey){if(this.enableRotate)this._rotateUp(-Qe*this.keyRotateSpeed/this.domElement.clientHeight)}else if(this.enablePan)this._pan(0,-this.keyPanSpeed);e=!0;break;case this.keys.LEFT:if(t.ctrlKey||t.metaKey||t.shiftKey){if(this.enableRotate)this._rotateLeft(Qe*this.keyRotateSpeed/this.domElement.clientHeight)}else if(this.enablePan)this._pan(this.keyPanSpeed,0);e=!0;break;case this.keys.RIGHT:if(t.ctrlKey||t.metaKey||t.shiftKey){if(this.enableRotate)this._rotateLeft(-Qe*this.keyRotateSpeed/this.domElement.clientHeight)}else if(this.enablePan)this._pan(-this.keyPanSpeed,0);e=!0;break}if(e)t.preventDefault(),this.update()}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),n=0.5*(t.pageX+e.x),i=0.5*(t.pageY+e.y);this._rotateStart.set(n,i)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),n=0.5*(t.pageX+e.x),i=0.5*(t.pageY+e.y);this._panStart.set(n,i)}}_handleTouchStartDolly(t){let e=this._getSecondPointerPosition(t),n=t.pageX-e.x,i=t.pageY-e.y,s=Math.sqrt(n*n+i*i);this._dollyStart.set(0,s)}_handleTouchStartDollyPan(t){if(this.enableZoom)this._handleTouchStartDolly(t);if(this.enablePan)this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){if(this.enableZoom)this._handleTouchStartDolly(t);if(this.enableRotate)this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{let n=this._getSecondPointerPosition(t),i=0.5*(t.pageX+n.x),s=0.5*(t.pageY+n.y);this._rotateEnd.set(i,s)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let e=this.domElement;this._rotateLeft(Qe*this._rotateDelta.x/e.clientHeight),this._rotateUp(Qe*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),n=0.5*(t.pageX+e.x),i=0.5*(t.pageY+e.y);this._panEnd.set(n,i)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){let e=this._getSecondPointerPosition(t),n=t.pageX-e.x,i=t.pageY-e.y,s=Math.sqrt(n*n+i*i);this._dollyEnd.set(0,s),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);let r=(t.pageX+e.x)*0.5,a=(t.pageY+e.y)*0.5;this._updateZoomParameters(r,a)}_handleTouchMoveDollyPan(t){if(this.enableZoom)this._handleTouchMoveDolly(t);if(this.enablePan)this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){if(this.enableZoom)this._handleTouchMoveDolly(t);if(this.enableRotate)this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId){this._pointers.splice(e,1);return}}_isTrackingPointer(t){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId)return!0;return!1}_trackPointer(t){let e=this._pointerPositions[t.pointerId];if(e===void 0)e=new tt,this._pointerPositions[t.pointerId]=e;e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){let e=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(t){let e=t.deltaMode,n={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(e){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}if(t.ctrlKey&&!this._controlActive)n.deltaY*=10;return n}}function wx(t){if(this.enabled===!1)return;if(this._pointers.length===0)this.domElement.setPointerCapture(t.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp);if(this._isTrackingPointer(t))return;if(this._addPointer(t),t.pointerType==="touch")this._onTouchStart(t);else this._onMouseDown(t);if(this._cursorStyle==="grab")this.domElement.style.cursor="grabbing"}function Ax(t){if(this.enabled===!1)return;if(t.pointerType==="touch")this._onTouchMove(t);else this._onMouseMove(t)}function Rx(t){switch(this._removePointer(t),this._pointers.length){case 0:if(this.domElement.releasePointerCapture(t.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Wd),this.state=ue.NONE,this._cursorStyle==="grab")this.domElement.style.cursor="grab";break;case 1:let e=this._pointers[0],n=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:n.x,pageY:n.y});break}}function Cx(t){let e;switch(t.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case on.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(t),this.state=ue.DOLLY;break;case on.ROTATE:if(t.ctrlKey||t.metaKey||t.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(t),this.state=ue.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(t),this.state=ue.ROTATE}break;case on.PAN:if(t.ctrlKey||t.metaKey||t.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(t),this.state=ue.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(t),this.state=ue.PAN}break;default:this.state=ue.NONE}if(this.state!==ue.NONE)this.dispatchEvent(Dc)}function Px(t){switch(this.state){case ue.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(t);break;case ue.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(t);break;case ue.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(t);break}}function Ix(t){if(this.enabled===!1||this.enableZoom===!1||this.state!==ue.NONE)return;t.preventDefault(),this.dispatchEvent(Dc),this._handleMouseWheel(this._customWheelEvent(t)),this.dispatchEvent(Wd)}function Lx(t){if(this.enabled===!1)return;this._handleKeyDown(t)}function Dx(t){switch(this._trackPointer(t),this._pointers.length){case 1:switch(this.touches.ONE){case _n.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(t),this.state=ue.TOUCH_ROTATE;break;case _n.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(t),this.state=ue.TOUCH_PAN;break;default:this.state=ue.NONE}break;case 2:switch(this.touches.TWO){case _n.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(t),this.state=ue.TOUCH_DOLLY_PAN;break;case _n.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(t),this.state=ue.TOUCH_DOLLY_ROTATE;break;default:this.state=ue.NONE}break;default:this.state=ue.NONE}if(this.state!==ue.NONE)this.dispatchEvent(Dc)}function Nx(t){switch(this._trackPointer(t),this.state){case ue.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(t),this.update();break;case ue.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(t),this.update();break;case ue.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(t),this.update();break;case ue.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(t),this.update();break;default:this.state=ue.NONE}}function Ux(t){if(this.enabled===!1)return;t.preventDefault()}function Fx(t){if(t.key==="Control")this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0})}function Ox(t){if(t.key==="Control")this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0})}var Uc=new Ye,Za=new bs,ws=new tt,Fc=new P;class Oc extends Nc{constructor(t,e){super(t,e);this.screenSpacePanning=!1,this.mouseButtons={LEFT:on.PAN,MIDDLE:on.DOLLY,RIGHT:on.ROTATE},this.touches={ONE:_n.PAN,TWO:_n.DOLLY_ROTATE},this._panWorldStart=new P}_handleMouseDownPan(t){if(super._handleMouseDownPan(t),this._panOffset.set(0,0,0),this.screenSpacePanning===!0)return;Uc.setFromNormalAndCoplanarPoint(this.object.up,this.target);let n=this.domElement.getBoundingClientRect();ws.x=(t.clientX-n.left)/n.width*2-1,ws.y=-((t.clientY-n.top)/n.height)*2+1,Za.setFromCamera(ws,this.object),Za.ray.intersectPlane(Uc,this._panWorldStart)}_handleMouseMovePan(t){if(this.screenSpacePanning===!0){super._handleMouseMovePan(t);return}let n=this.domElement.getBoundingClientRect();if(ws.x=(t.clientX-n.left)/n.width*2-1,ws.y=-((t.clientY-n.top)/n.height)*2+1,Za.setFromCamera(ws,this.object),Za.ray.intersectPlane(Uc,Fc))Fc.sub(this._panWorldStart),this._panOffset.copy(Fc).negate(),this.update()}}var Me=window.SITE_DATA,$a=Me.metersPerPixel||3,[vr,Mr]=Me.center||[240,340],{types:As,roads:Bi}=Me,Rt=(t)=>document.querySelector(t),Ee=(t,e,n=0)=>new P(t-vr,n,e-Mr),Ps=(t,e,n)=>Math.max(e,Math.min(n,t)),tn=(t,e,n)=>t+(e-t)*n,Bx=(t)=>t<0.5?4*t*t*t:1-Math.pow(-2*t+2,3)/2;function In(t){let e=2166136261;for(let n=0;n<t.length;n++)e^=t.charCodeAt(n),e=Math.imul(e,16777619);return(e>>>0)%1e4/1e4}function Hc(t){let e=t*$a;return e<1000?`${Math.max(10,Math.round(e/10)*10)} m`:`${(e/1000).toFixed(1)} km`}function zx(t,e){let n=e==="walk"?Me.walkKmh:Me.driveKmh,i=t*$a/1000/n*60;return i<1?"< 1 min":`${Math.round(i)} min`}function Kd(t){let e=(t[2]-t[0])*(t[3]-t[1])*$a*$a;return e>=1e4?`≈ ${(e/1e4).toFixed(1)} ha`:`≈ ${Math.round(e/100)*100} m²`}function Rs(t,e,n){let i=!1;for(let s=0,r=n.length-1;s<n.length;r=s++){let[a,o]=n[s],[l,c]=n[r];if(o>e!==c>e&&t<(l-a)*(e-o)/(c-o)+a)i=!i}return i}function kx(t,e,n,i){let s=e[0]-t[0],r=e[1]-t[1],a=i[0]-n[0],o=i[1]-n[1],l=s*o-r*a;if(Math.abs(l)<0.000000001)return null;let c=n[0]-t[0],u=n[1]-t[1],d=(c*o-u*a)/l,h=(c*r-u*s)/l,p=0.000001;if(d<-p||d>1+p||h<-p||h>1+p)return null;return{t:d,u:h}}function Gx(t){let e=[];t.forEach((a,o)=>{for(let l=0;l<a.points.length-1;l++)e.push({a:a.points[l],b:a.points[l+1],road:o,cuts:[0,1]})});for(let a=0;a<e.length;a++)for(let o=a+1;o<e.length;o++){let l=kx(e[a].a,e[a].b,e[o].a,e[o].b);if(l)e[a].cuts.push(l.t),e[o].cuts.push(l.u)}let n=new Map,i=[],s=(a,o)=>{let l=`${Math.round(a*2)},${Math.round(o*2)}`,c=n.get(l);if(!c)c={id:i.length,x:a,y:o,adj:[],roads:new Set},n.set(l,c),i.push(c);return c},r=[];for(let a of e){let o=[...new Set(a.cuts.map((l)=>Ps(l,0,1)))].sort((l,c)=>l-c);for(let l=0;l<o.length-1;l++){let c=o[l],u=o[l+1];if(u-c<0.000001)continue;let d=s(tn(a.a[0],a.b[0],c),tn(a.a[1],a.b[1],c)),h=s(tn(a.a[0],a.b[0],u),tn(a.a[1],a.b[1],u));if(d===h)continue;let p={id:r.length,a:d.id,b:h.id,len:Math.hypot(h.x-d.x,h.y-d.y),road:a.road};r.push(p),d.adj.push(p),h.adj.push(p),d.roads.add(a.road),h.roads.add(a.road)}}return{nodes:i,edges:r}}var ke=Gx(Bi);function Zc(t,e){let n=null;for(let i of ke.edges){let s=ke.nodes[i.a],r=ke.nodes[i.b],a=r.x-s.x,o=r.y-s.y,l=Ps(((t-s.x)*a+(e-s.y)*o)/(a*a+o*o),0,1),c=s.x+l*a,u=s.y+l*o,d=Math.hypot(t-c,e-u);if(!n||d<n.d)n={e:i,t:l,x:c,y:u,d}}return n}var Hx=15;function Vx(t,e){let n=ke.nodes.length,i=n,s=n+1,r=new Map,a=(f,w,b,x)=>{if(!r.has(f))r.set(f,[]);r.get(f).push({to:w,len:b,road:x})};if(a(i,t.e.a,t.t*t.e.len,t.e.road),a(i,t.e.b,(1-t.t)*t.e.len,t.e.road),a(e.e.a,s,e.t*e.e.len,e.e.road),a(e.e.b,s,(1-e.t)*e.e.len,e.e.road),t.e===e.e)a(i,s,Math.abs(t.t-e.t)*t.e.len,t.e.road);let o=new Float64Array(n+2).fill(1/0),l=new Int32Array(n+2).fill(-1),c=new Int32Array(n+2).fill(-1),u=new Uint8Array(n+2);o[i]=0;for(;;){let f=-1,w=1/0;for(let T=0;T<n+2;T++)if(!u[T]&&o[T]<w)w=o[T],f=T;if(f===-1||f===s)break;u[f]=1;let b=(T,A,R)=>{let g=o[f]+A+(c[f]!==-1&&c[f]!==R?Hx:0);if(g<o[T])o[T]=g,l[T]=f,c[T]=R};if(f<n)for(let T of ke.nodes[f].adj)b(T.a===f?T.b:T.a,T.len,T.road);let x=r.get(f);if(x)for(let T of x)b(T.to,T.len,T.road)}if(!isFinite(o[s]))return null;let d=[];for(let f=s;f!==-1;f=l[f])d.push(f);d.reverse();let h=d.map((f)=>f===i?[t.x,t.y]:f===s?[e.x,e.y]:[ke.nodes[f].x,ke.nodes[f].y]),p=d.slice(1).map((f)=>c[f]),_=[h[0]],S=[],m=0;for(let f=1;f<h.length;f++){let w=_[_.length-1],b=Math.hypot(h[f][0]-w[0],h[f][1]-w[1]);if(b<0.01)continue;_.push(h[f]),S.push(p[f-1]),m+=b}return{points:_,roads:S,length:m}}var Wx=["north","northeast","east","southeast","south","southwest","west","northwest"];function Xx(t,e){let n=Math.atan2(t,-e)*180/Math.PI;return Wx[(Math.round(n/45)%8+8)%8]}function qx(t,e,n){let i=[];for(let r=0;r<t.roads.length;r++){let[a,o]=t.points[r],[l,c]=t.points[r+1],u=Math.hypot(l-a,c-o),d=[(l-a)/u,(c-o)/u],h=i[i.length-1];if(h&&h.road===t.roads[r])h.len+=u,h.end=d;else i.push({road:t.roads[r],len:u,start:d,end:d,at:[a,o]})}let s=[{icon:"start",text:`Start at ${e}`,dist:""}];return i.forEach((r,a)=>{let o=Bi[r.road].name;if(a===0){s.push({icon:"straight",text:`Head ${Xx(...r.start)} on ${o}`,dist:Hc(r.len),at:r.at});return}let l=i[a-1].end,c=r.start,u=Math.atan2(l[0]*c[1]-l[1]*c[0],l[0]*c[0]+l[1]*c[1])*180/Math.PI,d="straight",h="Continue onto";if(Math.abs(u)>150)d="uturn",h="Make a U-turn onto";else if(u>25)d="right",h="Turn right onto";else if(u<-25)d="left",h="Turn left onto";s.push({icon:d,text:`${h} ${o}`,dist:Hc(r.len),at:r.at})}),s.push({icon:"end",text:`Arrive at ${n}`,dist:""}),s}var Fi=Rt("#scene"),Vc=matchMedia("(pointer: coarse)").matches,ui=new Ic({canvas:Fi,antialias:!0,powerPreference:"high-performance"});ui.setPixelRatio(Math.min(window.devicePixelRatio||1,Vc?2:2));ui.shadowMap.enabled=!0;ui.shadowMap.type=oa;var Ae=new Sa,jd=new Yt("#cfe2ee");Ae.background=jd;Ae.fog=new ar(jd,1100,2600);var Be=new Ze(45,1,1,6000);Be.position.set(0,420,380);var Se=new Oc(Be,ui.domElement);Se.enableDamping=!0;Se.dampingFactor=0.12;Se.screenSpacePanning=!1;Se.minDistance=35;Se.maxDistance=1200;Se.maxPolarAngle=1.25;Se.zoomToCursor=!0;Ae.add(new Ba(16777215,10135690,1.5));var zi=new ka(16774368,2.3);zi.position.set(-260,520,300);zi.castShadow=!0;zi.shadow.mapSize.set(Vc?1024:2048,Vc?1024:2048);Object.assign(zi.shadow.camera,{left:-360,right:360,top:360,bottom:-360,near:50,far:1500});zi.shadow.bias=-0.0004;zi.shadow.normalBias=0.4;Ae.add(zi);var Bc=new Map;function De(t,e={}){let n=t+JSON.stringify(e);if(!Bc.has(n))Bc.set(n,new Ss({color:t,roughness:0.88,metalness:0,...e}));return Bc.get(n)}function Yx(t){let e=new ur;return t.forEach(([n,i],s)=>s?e.lineTo(n-vr,-(i-Mr)):e.moveTo(n-vr,-(i-Mr))),e}function Qd(t,e,n,i=0){let s=new dr(Yx(t),{depth:e,bevelEnabled:!1});s.rotateX(-Math.PI/2);let r=new Qt(s,De(n));return r.position.y=i,r.receiveShadow=!0,r}var tf=new Qt(new oi(6000,6000).rotateX(-Math.PI/2),De("#c9d8bb"));tf.receiveShadow=!0;Ae.add(tf);Ae.add(Qd(Me.boundary,0.15,"#e4e8dc"));var to=[],$c=[],zc=22;function Zx(t,e,n,i,s,r){t.beginPath(),t.moveTo(e+r,n),t.arcTo(e+i,n,e+i,n+s,r),t.arcTo(e+i,n+s,e,n+s,r),t.arcTo(e,n+s,e,n,r),t.arcTo(e,n,e+i,n,r),t.closePath()}function eo(t,{bg:e="rgba(255,255,255,0.94)",color:n="#0f172a",border:i="rgba(15,23,42,0.18)",dot:s=null}={}){let l=zc*3,c=document.createElement("canvas"),u=c.getContext("2d"),d='600 39px system-ui, -apple-system, "Segoe UI", Roboto, sans-serif';u.font='600 39px system-ui, -apple-system, "Segoe UI", Roboto, sans-serif';let h=s?36:0,p=Math.ceil(u.measureText(t).width+48+h);if(c.width=p,c.height=l+6,u.font='600 39px system-ui, -apple-system, "Segoe UI", Roboto, sans-serif',Zx(u,1,1,p-2,l-2,l/2-1),u.fillStyle=e,u.fill(),u.lineWidth=3,u.strokeStyle=i,u.stroke(),s)u.fillStyle=s,u.beginPath(),u.arc(33,l/2,12,0,Math.PI*2),u.fill();u.fillStyle=n,u.textBaseline="middle",u.fillText(t,24+h,l/2+3);let _=new ys(c);_.colorSpace=ms,_.minFilter=We,_.generateMipmaps=!1;let S=new or(new _s({map:_,depthTest:!1,depthWrite:!1,sizeAttenuation:!1,transparent:!0}));return S.center.set(0.5,0),S.renderOrder=20,S.userData.aspect=c.width/c.height,S.userData.pxW=(zc+2)*S.userData.aspect,S.userData.pxH=zc+2,S}function no(t,e,n={}){let i={sprite:t,priority:e,minDist:n.minDist??1/0,enabled:!0,key:n.key};return $c.push(i),Ae.add(t),i}var ef=De("#50565f"),Wc=new Map;for(let t of ke.edges){let e=ke.nodes[t.a],n=ke.nodes[t.b],i=Bi[t.road].width||8,s=new Qt(new ve(t.len,0.3,i),ef);s.position.copy(Ee((e.x+n.x)/2,(e.y+n.y)/2,0.15)),s.rotation.y=-Math.atan2(n.y-e.y,n.x-e.x),s.receiveShadow=!0,Ae.add(s);for(let r of[e,n])Wc.set(r.id,Math.max(Wc.get(r.id)||0,i))}for(let t of ke.nodes){let e=Wc.get(t.id)/2,n=new Qt(new ve(e*2,0.31,e*2),ef);n.position.copy(Ee(t.x,t.y,0.155)),n.receiveShadow=!0,Ae.add(n)}{let t=[];for(let i of ke.edges){let s=ke.nodes[i.a],r=ke.nodes[i.b],a=Math.floor((i.len-12)/9);for(let o=0;o<=a;o++){let l=(8+o*9)/i.len;if(l>1)break;t.push({x:tn(s.x,r.x,l),y:tn(s.y,r.y,l),rot:-Math.atan2(r.y-s.y,r.x-s.x)})}}let e=new Ai(new ve(4,0.04,0.45),new vn({color:"#f5f5f0"}),t.length),n=new xe;t.forEach((i,s)=>{n.position.copy(Ee(i.x,i.y,0.32)),n.rotation.set(0,i.rot,0),n.updateMatrix(),e.setMatrixAt(s,n.matrix)}),Ae.add(e)}Bi.forEach((t,e)=>{let n=null;for(let a of ke.edges)if(a.road===e&&(!n||a.len>n.len))n=a;if(!n)return;let i=ke.nodes[n.a],s=ke.nodes[n.b],r=eo(t.name,{bg:"rgba(30,41,59,0.86)",color:"#f8fafc",border:"rgba(255,255,255,0.25)"});r.position.copy(Ee((i.x+s.x)/2,(i.y+s.y)/2,1)),no(r,15,{minDist:520})});var Jc=new Map,Ja=(t)=>t.tenant||(t.id==="GO"?"Gate Office":`Lot ${t.id}`);for(let t of Me.plots){let e=As[t.type]||As.factory,[n,i,s,r]=t.rect,a=s-n,o=r-i,l=(n+s)/2,c=(i+r)/2,u=new Je;u.position.copy(Ee(l,c));let d=new Qt(new ve(a,0.6,o),De("#d5dade"));d.position.y=0.3,d.receiveShadow=!0,u.add(d);let h=new Qt(new ve(a-1.6,0.12,o-1.6),De(e.ground));h.position.y=0.66,h.receiveShadow=!0,u.add(h);let p=0.75;if(e.building&&a>8&&o>8){let f=Ps(Math.min(a,o)*0.16,2.5,7),w=a-f*2,b=o-f*2,x=tn(e.height[0],e.height[1],In(t.id)),T=new Qt(new ve(w,x,b),De(e.wall));T.position.y=0.7+x/2,T.castShadow=T.receiveShadow=!0,u.add(T);let A=new Qt(new ve(w+0.6,0.7,b+0.6),De(e.roof));A.position.y=0.7+x+0.35,A.castShadow=!0,u.add(A);let R=Math.max(1,Math.floor(w/9));for(let g=0;g<R;g++){let M=new Qt(new ve(1.2,0.4,b*0.75),De("#f1f5f9"));M.position.set(-w/2+w/(R+1)*(g+1),0.7+x+0.9,0),u.add(M)}if(a*o>1100){let g=Math.min(w*0.35,14),M=Math.min(b*0.3,9),U=x+3,C=new Qt(new ve(g,U,M),De("#cbd5e1"));C.position.set(w/2-g/2,0.7+U/2,b/2-M/2),C.castShadow=!0,u.add(C)}p=0.7+x+1.2}else if(!e.building)for(let[f,w]of[[-1,-1],[1,-1],[-1,1],[1,1]]){let b=new Qt(new ve(0.8,2,0.8),De("#94a3b8"));b.position.set(f*(a/2-1.4),1.6,w*(o/2-1.4)),u.add(b)}u.traverse((f)=>{if(f.isMesh)f.userData.ref={kind:"plot",id:t.id},to.push(f)}),Ae.add(u);let _=eo(Ja(t),{dot:e.roof||"#94a3b8"});_.position.copy(Ee(l,c,p+1.5));let S=t.tenant?40:t.type==="major"?35:t.type==="available"?8:25,m=no(_,S,{minDist:t.type==="available"?260:380,key:`plot:${t.id}`});Jc.set(t.id,{p:t,t:e,group:u,height:p,center:[l,c],w:a,h:o,label:m})}for(let t of Me.zones||[]){Ae.add(Qd(t.polygon,0.35,"#d7e8c8"));let e=[...t.polygon,t.polygon[0]].map(([c,u])=>Ee(c,u,0.6)),n=new cr(new Pe().setFromPoints(e),new Ua({color:"#dc2626",dashSize:4,gapSize:3}));n.computeLineDistances(),Ae.add(n);let i=t.polygon.map((c)=>c[0]),s=t.polygon.map((c)=>c[1]),r=new Ss({color:"#f5efe3",transparent:!0,opacity:0.6}),a=new Ss({color:"#b45309",transparent:!0,opacity:0.6});for(let c=Math.min(...i)+10;c<Math.max(...i)-6;c+=15)for(let u=Math.min(...s)+10;u<Math.max(...s)-6;u+=16){if(!Rs(c,u,t.polygon)||In(`${c},${u}`)<0.25)continue;let d=new Qt(new ve(8,4,6),r);d.position.copy(Ee(c,u,2.35));let h=new Qt(new vs(6.2,3,4),a);h.rotation.y=Math.PI/4,h.scale.set(1,1,0.78),h.position.copy(Ee(c,u,5.85));for(let p of[d,h])p.userData.ref={kind:"zone",id:t.id},to.push(p),Ae.add(p)}let o=t.polygon.reduce((c,u)=>[c[0]+u[0]/t.polygon.length,c[1]+u[1]/t.polygon.length],[0,0]),l=eo(t.name,{bg:"rgba(254,242,242,0.95)",color:"#991b1b",border:"rgba(220,38,38,0.4)"});l.position.copy(Ee(o[0],o[1],9)),no(l,30,{minDist:600,key:`zone:${t.id}`}),t.center=o}for(let t of Me.pois||[]){let[e,n]=t.at,i=new Je;i.position.copy(Ee(e,n));let s=t.axis==="ew"?"z":"x",r=De("#334155"),a=De("#facc15");for(let c of[-1,1]){let u=new Qt(new ve(1.6,9,1.6),r);u.position[s]=c*7.5,u.position.y=4.5,u.castShadow=!0,i.add(u)}let o=new Qt(s==="x"?new ve(17,1.4,1.8):new ve(1.8,1.4,17),a);o.position.y=9.3,o.castShadow=!0,i.add(o),i.traverse((c)=>{if(c.isMesh)c.userData.ref={kind:"poi",id:t.id},to.push(c)}),Ae.add(i);let l=eo(t.name,{bg:"rgba(250,204,21,0.96)",color:"#1f2937",border:"rgba(0,0,0,0.2)"});l.position.copy(Ee(e,n,12)),no(l,60,{key:`poi:${t.id}`})}{let t=[],e=(o,l,c)=>{for(let d of Me.plots){let h=d.rect;if(o>h[0]-c&&o<h[2]+c&&l>h[1]-c&&l<h[3]+c)return!0}let u=Zc(o,l);return u&&u.d<(Bi[u.e.road].width||8)/2+c},n=Me.boundary;for(let o=0;o<n.length;o++){let[l,c]=n[o],[u,d]=n[(o+1)%n.length],h=Math.hypot(u-l,d-c),p=(d-c)/h,_=-(u-l)/h;for(let S=6;S<h-4;S+=11){let m=l+(u-l)*S/h,f=c+(d-c)*S/h;for(let w of[7,-7]){let b=m+p*w,x=f+_*w;if(!Rs(b,x,n)&&!e(b,x,2)){t.push([b,x]);break}}}}for(let o=30;o<440;o+=9)for(let l=50;l<645;l+=9){let c=o+(In(`tx${o},${l}`)-0.5)*5,u=l+(In(`ty${o},${l}`)-0.5)*5;if(!Rs(c,u,n)||e(c,u,3))continue;if((Me.zones||[]).some((d)=>Rs(c,u,d.polygon))){if(In(`z${o}${l}`)<0.85)continue}if(In(`k${o},${l}`)<0.35)continue;t.push([c,u])}let i=new Ai(new ai(0.35,0.5,3,5),De("#7c5a3a"),t.length),s=new Ai(new fr(2.6,0),De("#4f9a52",{flatShading:!0}),t.length);s.castShadow=!0;let r=new xe,a=new Yt;t.forEach(([o,l],c)=>{let u=0.8+In(`s${o}${l}`)*0.6;r.position.copy(Ee(o,l,1.5*u)),r.scale.setScalar(u),r.rotation.set(0,In(`r${o}`)*6,0),r.updateMatrix(),i.setMatrixAt(c,r.matrix),r.position.y=4.2*u,r.updateMatrix(),s.setMatrixAt(c,r.matrix),s.setColorAt(c,a.set("#4f9a52").offsetHSL((In(`c${o}${l}`)-0.5)*0.05,0,(In(`l${l}`)-0.5)*0.12))}),Ae.add(i,s)}var Di=new wa(new Pa(new ve(1,1,1)),new xs({color:"#f59e0b"}));Di.visible=!1;Ae.add(Di);var Xn=new Qt(new oi(1,1).rotateX(-Math.PI/2),new vn({color:"#fbbf24",transparent:!0,opacity:0.35,depthWrite:!1}));Xn.visible=!1;Ae.add(Xn);function nf(t,e){let n=new Je,i=new Je,s=new Qt(new vs(1.6,7,16).rotateX(Math.PI),De(t,{roughness:0.4}));s.position.y=3.5;let r=new Qt(new Ms(3,24,16),De(t,{roughness:0.35}));r.position.y=8.5,r.castShadow=!0,i.add(s,r);let a=document.createElement("canvas");a.width=a.height=96;let o=a.getContext("2d");o.fillStyle="#fff",o.font="bold 64px system-ui, sans-serif",o.textAlign="center",o.textBaseline="middle",o.fillText(e,48,54);let l=new ys(a);l.colorSpace=ms;let c=new or(new _s({map:l,depthTest:!1,transparent:!0}));c.scale.set(4.6,4.6,1),c.position.y=8.5,c.renderOrder=30,i.add(c);let u=new Qt(new pr(2.2,3.4,32).rotateX(-Math.PI/2),new vn({color:t,transparent:!0,opacity:0.55,depthWrite:!1}));return u.position.y=0.9,n.add(i,u),n.userData.head=i,n.userData.ring=u,n.visible=!1,Ae.add(n),n}var sf=nf("#16a34a","A"),Xc=nf("#dc2626","B");function $x(){let t=document.createElement("canvas");t.width=128,t.height=64;let e=t.getContext("2d");e.fillStyle="#1a73e8",e.fillRect(0,0,128,64),e.strokeStyle="#ffffff",e.lineWidth=9,e.lineCap="round",e.lineJoin="round",e.beginPath(),e.moveTo(48,16),e.lineTo(76,32),e.lineTo(48,48),e.stroke();let n=new ys(t);return n.wrapS=ha,n.colorSpace=ms,n.anisotropy=ui.capabilities.getMaxAnisotropy(),n}var rf=$x(),Jx=new vn({map:rf}),Kx=new vn({color:"#0b3d91"}),jx=new vn({color:"#1a73e8"}),Ni=new Je;Ae.add(Ni);function Xd(t,e,n,i,s){let r=[],a=[],o=[],l=0;for(let d=0;d<t.length-1;d++){let[h,p]=t[d],[_,S]=t[d+1],m=Math.hypot(_-h,S-p);if(m<0.000001)continue;let f=(_-h)/m,w=(S-p)/m,b=-w*e/2,x=f*e/2,T=d>0?e/2:0,A=d<t.length-2?e/2:0,R=h-f*T,g=p-w*T,M=_+f*A,U=S+w*A,C=n+d*0.015,k=r.length/3,q=(l-T)/s,F=(l+m+A)/s;for(let[W,V]of[[R+b,g+x],[R-b,g-x],[M+b,U+x],[M-b,U-x]])r.push(W-vr,C,V-Mr);a.push(q,1,q,0,F,1,F,0),o.push(k,k+2,k+1,k+1,k+2,k+3),l+=m}let c=new Pe;c.setAttribute("position",new re(r,3)),c.setAttribute("uv",new re(a,2)),c.setIndex(o);let u=new Qt(c,i);return u.renderOrder=5,u}function qd(t,e){let n=Math.hypot(e[0]-t[0],e[1]-t[1]),i=Math.max(1,Math.floor(n/2.6)),s=new Ai(new ai(0.75,0.75,0.2,10),jx,i+1),r=new xe;for(let a=0;a<=i;a++)r.position.copy(Ee(tn(t[0],e[0],a/i),tn(t[1],e[1],a/i),0.95)),r.updateMatrix(),s.setMatrixAt(a,r.matrix);return s}function af(){for(let t of[...Ni.children])Ni.remove(t),t.geometry?.dispose()}function Qx(){let t=new Je,e=new Qt(new ve(6,1.8,3),De("#f59e0b",{roughness:0.5}));e.position.y=1.4,e.castShadow=!0;let n=new Qt(new ve(3,1.4,2.6),De("#1e293b",{roughness:0.3}));return n.position.set(-0.4,2.9,0),t.add(e,n),t}function ty(){let t=new Je,e=new Qt(new ai(0.9,1.1,3.4,12),De("#2563eb",{roughness:0.5}));e.position.y=2.2,e.castShadow=!0;let n=new Qt(new Ms(0.9,16,12),De("#fcd34d"));return n.position.y=4.6,t.add(e,n),t}var Ka=Qx(),ja=ty();Ka.visible=ja.visible=!1;Ae.add(Ka,ja);var Ie=null;function Oi({target:t,distance:e,phi:n,theta:i,dur:s=0.9,done:r}){let a=Be.position.clone().sub(Se.target),o=new li().setFromVector3(a),l={r:e??o.radius,phi:n??o.phi,theta:i??o.theta},c=l.theta-o.theta;c=((c+Math.PI)%(Math.PI*2)+Math.PI*2)%(Math.PI*2)-Math.PI,l.theta=o.theta+c,Ie={t:0,dur:s,t0:Se.target.clone(),t1:(t||Se.target).clone(),s0:{r:o.radius,phi:o.phi,theta:o.theta},s1:l,done:r}}function ey(t){if(!Ie)return;Ie.t=Math.min(1,Ie.t+t/Ie.dur);let e=Bx(Ie.t);Se.target.lerpVectors(Ie.t0,Ie.t1,e);let n=new li(tn(Ie.s0.r,Ie.s1.r,e),tn(Ie.s0.phi,Ie.s1.phi,e),tn(Ie.s0.theta,Ie.s1.theta,e));if(Be.position.setFromSpherical(n).add(Se.target),Be.lookAt(Se.target),Ie.t>=1){let i=Ie.done;Ie=null,i&&i()}}var io=1;function of(t,e,n,i,s={}){let r=s.pad??1.25,a=(t+n)/2,o=(e+i)/2,l=Math.max(20,(n-t)/2),c=Math.max(20,(i-e)/2),u=gs.degToRad(Be.fov)/2,d=Math.atan(Math.tan(u)*io),h=s.phi??(ht.view3d?0.72:0.02),p=s.theta??0,_=Math.abs(Math.cos(p)),S=Math.abs(Math.sin(p)),m=l*_+c*S,f=(l*S+c*_)*(0.75+0.25*Math.cos(h)),w=Ps(Math.max(m/Math.tan(d),f/Math.tan(u))*r,Se.minDistance,Se.maxDistance);Oi({target:Ee(a,o),distance:w,phi:h,theta:p,dur:s.dur})}var ht={from:null,to:null,mode:"drive",pick:null,selected:null,route:null,view3d:!0,labels:!0,preview:null},ny=[...Me.plots.map((t)=>({ref:{kind:"plot",id:t.id},name:Ja(t),sub:`${As[t.type].label} · ${Kd(t.rect)}`,color:As[t.type].roof||"#cbd5e1",search:`${Ja(t)} ${t.id} ${As[t.type].label}`.toLowerCase()})),...(Me.pois||[]).map((t)=>({ref:{kind:"poi",id:t.id},name:t.name,sub:"Gate",color:"#facc15",search:`${t.name} gate`.toLowerCase()})),...(Me.zones||[]).map((t)=>({ref:{kind:"zone",id:t.id},name:t.name,sub:"Zone",color:"#dc2626",search:t.name.toLowerCase()}))].sort((t,e)=>{let n=t.ref.kind==="plot"?1:0,i=e.ref.kind==="plot"?1:0;return n-i||t.name.localeCompare(e.name,void 0,{numeric:!0})});function Sr(t){return t.kind==="point"?`pt:${t.x.toFixed(1)},${t.y.toFixed(1)}`:`${t.kind}:${t.id}`}function Yd(t){if(!t)return null;let[e,n]=[t.slice(0,t.indexOf(":")),t.slice(t.indexOf(":")+1)];if(e==="pt"){let[i,s]=n.split(",").map(Number);return isFinite(i)&&isFinite(s)?{kind:"point",x:i,y:s}:null}return so({kind:e,id:n})?{kind:e,id:n}:null}function so(t){if(!t)return null;if(t.kind==="plot"){let i=Jc.get(t.id);if(!i)return null;return{name:Ja(i.p),sub:`${i.t.label} · ${Kd(i.p.rect)}`,x:i.center[0],y:i.center[1],rect:i.p.rect,color:i.t.roof||"#cbd5e1",typeLabel:i.t.label}}if(t.kind==="poi"){let i=(Me.pois||[]).find((s)=>s.id===t.id);if(!i)return null;return{name:i.name,sub:"Gate",x:i.at[0],y:i.at[1],color:"#facc15",typeLabel:"Gate"}}if(t.kind==="zone"){let i=(Me.zones||[]).find((s)=>s.id===t.id);if(!i)return null;return{name:i.name,sub:"Zone",x:i.center[0],y:i.center[1],poly:i.polygon,color:"#dc2626",typeLabel:"Zone"}}let e=Zc(t.x,t.y);return{name:`Dropped pin${e&&e.d<10?` on ${Bi[e.e.road].name}`:""}`,sub:"Map location",x:t.x,y:t.y,color:"#64748b",typeLabel:"Location"}}function qc(t){let e=so(t),n=Zc(e.x,e.y),i=[e.x,e.y];if(e.rect){let[s,r,a,o]=e.rect;i=[Ps(n.x,s,a),Ps(n.y,r,o)]}else if(t.kind==="poi")i=[n.x,n.y];return{info:e,pr:n,door:i}}function Kc(){if(br(),af(),ht.route=null,!ht.from||!ht.to)return Ui();if(Sr(ht.from)===Sr(ht.to))return ht.route={same:!0},Ui();let t=qc(ht.from),e=qc(ht.to),n=Vx(t.pr,e.pr);if(!n)return ht.route={none:!0},Ui();Ni.add(Xd(n.points,6.4,0.42,Kx,1e9)),Ni.add(Xd(n.points,4.6,0.5,Jx,9));let i=Math.hypot(t.door[0]-t.pr.x,t.door[1]-t.pr.y),s=Math.hypot(e.door[0]-e.pr.x,e.door[1]-e.pr.y);if(i>0.5)Ni.add(qd(t.door,[t.pr.x,t.pr.y]));if(s>0.5)Ni.add(qd([e.pr.x,e.pr.y],e.door));let r=[t.door,...n.points,e.door].filter((a,o,l)=>o===0||Math.hypot(a[0]-l[o-1][0],a[1]-l[o-1][1])>0.01);ht.route={path:n,full:r,length:n.length+i+s,steps:qx(n,t.info.name,e.info.name),via:[...new Set(n.roads.map((a)=>Bi[a].name))],doors:[t.door,e.door]},Ui(),ro(),th()}function ro(){if(!ht.route?.full)return;let t=ht.route.full.map((n)=>n[0]),e=ht.route.full.map((n)=>n[1]);of(Math.min(...t),Math.min(...e),Math.max(...t),Math.max(...e),{pad:io<1?1.6:1.35,theta:0})}function iy(){for(let[t,e,n]of[[sf,ht.from,0],[Xc,ht.to,1]]){if(!e){t.visible=!1;continue}let i=ht.route?.doors?ht.route.doors[n]:(()=>qc(e).door)();t.position.copy(Ee(i[0],i[1],0)),t.visible=!0}}function sy(){let t=ht.route;if(!t?.full)return;let e=t.full,n=[0];for(let r=1;r<e.length;r++)n.push(n[r-1]+Math.hypot(e[r][0]-e[r-1][0],e[r][1]-e[r-1][1]));let i=ht.mode==="walk"?ja:Ka;Ka.visible=ja.visible=!1,i.visible=!0,ht.preview={pts:e,cum:n,s:0,total:n[n.length-1],mover:i,speed:ht.mode==="walk"?22:55};let s=e[0];Oi({target:Ee(s[0],s[1]),distance:140,phi:0.85,dur:0.8}),Rt("#previewBtn").textContent="Stop",Rt("#previewBtn").classList.add("active")}function br(){if(!ht.preview)return;ht.preview.mover.visible=!1,ht.preview=null,Rt("#previewBtn").textContent="Preview",Rt("#previewBtn").classList.remove("active")}var kc=new P;function ry(t){let e=ht.preview;if(!e||Ie)return;e.s=Math.min(e.total,e.s+e.speed*t);let n=1;while(n<e.cum.length-1&&e.cum[n]<e.s)n++;let i=e.pts[n-1],s=e.pts[n],r=e.cum[n]-e.cum[n-1]||1,a=(e.s-e.cum[n-1])/r,o=tn(i[0],s[0],a),l=tn(i[1],s[1],a);e.mover.position.copy(Ee(o,l,0.6));let u=-Math.atan2(s[1]-i[1],s[0]-i[0])-e.mover.rotation.y;if(u=Math.atan2(Math.sin(u),Math.cos(u)),e.mover.rotation.y+=u*Math.min(1,t*10),kc.copy(e.mover.position).setY(0).sub(Se.target).multiplyScalar(Math.min(1,t*4)),Se.target.add(kc),Be.position.add(kc),e.s>=e.total){if(e.doneAt=e.doneAt??performance.now(),performance.now()-e.doneAt>1200)br(),ro()}}function qn(t,{fly:e=!1}={}){ht.selected=t;let n=Rt("#infoCard");if(!t){Di.visible=Xn.visible=!1,n.hidden=!0,Is();return}let i=so(t);if(Di.visible=Xn.visible=!1,t.kind==="plot"){let s=Jc.get(t.id);Di.scale.set(s.w+1.2,s.height+1,s.h+1.2),Di.position.copy(Ee(s.center[0],s.center[1],(s.height+1)/2)),Xn.scale.set(s.w+4,1,s.h+4),Xn.position.copy(Ee(s.center[0],s.center[1],0.8)),Di.visible=Xn.visible=!0}if(Rt("#infoSwatch").style.background=i.color,Rt("#infoName").textContent=i.name,Rt("#infoSub").textContent=i.sub,n.hidden=!1,Is(),e)Oi({target:Ee(i.x,i.y),distance:150,dur:0.8})}var ay={start:'<circle cx="12" cy="12" r="6" fill="#16a34a"/>',end:'<path d="M12 2a7 7 0 0 0-7 7c0 5 7 13 7 13s7-8 7-13a7 7 0 0 0-7-7z" fill="#dc2626"/><circle cx="12" cy="9" r="2.5" fill="#fff"/>',straight:'<path d="M12 20V5M6 11l6-6 6 6" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linecap="round" stroke-linejoin="round"/>',right:'<path d="M7 20v-7a4 4 0 0 1 4-4h8M15 5l4 4-4 4" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linecap="round" stroke-linejoin="round"/>',left:'<path d="M17 20v-7a4 4 0 0 0-4-4H5M9 5L5 9l4 4" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linecap="round" stroke-linejoin="round"/>',uturn:'<path d="M8 20V9a4 4 0 0 1 8 0v6M12 12l4 4 4-4" stroke="currentColor" stroke-width="2.4" fill="none" stroke-linecap="round" stroke-linejoin="round"/>'};function Zd(t){let e=ht[t],n=t==="from"?Rt("#fromBtn"):Rt("#toBtn"),i=so(e);n.textContent=i?i.name:t==="from"?"Choose start":"Choose destination",n.classList.toggle("empty",!i)}function Ui(){Zd("from"),Zd("to"),iy();let t=Rt("#summary"),e=Rt("#steps"),n=Rt("#hint");e.innerHTML="";let i=ht.route;if(n.hidden=!!i,t.hidden=!i,!i){n.textContent=!ht.from&&!ht.to?"Pick a start and destination, or tap a building on the map.":!ht.from?"Now choose where you are starting from.":"Now choose your destination.",Rt("#sheet").classList.remove("has-route");return}if(i.same||i.none){Rt("#sumTime").textContent=i.same?"You are already there":"No route found",Rt("#sumMeta").textContent="",Rt("#previewBtn").hidden=Rt("#stepsToggle").hidden=!0;return}Rt("#previewBtn").hidden=Rt("#stepsToggle").hidden=!1,Rt("#sheet").classList.add("has-route"),Rt("#sumTime").textContent=zx(i.length,ht.mode),Rt("#sumMeta").textContent=`${Hc(i.length)} · via ${i.via.slice(0,2).join(", ")}${i.via.length>2?"…":""}`;for(let s of i.steps){let r=document.createElement("li");if(r.innerHTML=`<svg viewBox="0 0 24 24" aria-hidden="true">${ay[s.icon]}</svg><span class="txt"></span><span class="d"></span>`,r.querySelector(".txt").textContent=s.text,r.querySelector(".d").textContent=s.dist,s.at)r.tabIndex=0,r.addEventListener("click",()=>Oi({target:Ee(s.at[0],s.at[1]),distance:110,dur:0.7}));e.appendChild(r)}}function ao(t,e){ht[t]=e,ht.pick=null,Rt("#pickBanner").hidden=!0,document.querySelectorAll(".pick").forEach((n)=>n.classList.remove("active")),Kc(),Is()}var jc=null;function oo(t){jc=t,Rt("#pickerTitle").textContent=t==="from"?"Start from":t==="to"?"Go to":"Find a place",Rt("#picker").hidden=!1;let e=Rt("#pickerInput");e.value="",lf(""),setTimeout(()=>e.focus(),50)}function Qc(){Rt("#picker").hidden=!0,jc=null}function lf(t){let e=Rt("#pickerList");e.innerHTML="";let n=t.trim().toLowerCase(),i=ny.filter((s)=>!n||n.split(/\s+/).every((r)=>s.search.includes(r)));if(!i.length){e.innerHTML='<li class="empty">No matching places</li>';return}for(let s of i){let r=document.createElement("li"),a=document.createElement("button");a.innerHTML='<span class="sw"></span><span class="nm"><b></b><small></small></span>',a.querySelector(".sw").style.background=s.color,a.querySelector("b").textContent=s.name,a.querySelector("small").textContent=s.sub,a.addEventListener("click",()=>{let o=jc;if(Qc(),o==="search")qn(s.ref,{fly:!0});else ao(o,s.ref)}),r.appendChild(a),e.appendChild(r)}}function th(){let t=[];if(ht.from)t.push(`from=${encodeURIComponent(Sr(ht.from))}`);if(ht.to)t.push(`to=${encodeURIComponent(Sr(ht.to))}`);if(ht.mode!=="drive")t.push(`mode=${ht.mode}`);history.replaceState(null,"",t.length?`#${t.join("&")}`:location.pathname+location.search)}function oy(){let t=new URLSearchParams(location.hash.slice(1));ht.from=Yd(t.get("from")),ht.to=Yd(t.get("to")),ht.mode=t.get("mode")==="walk"?"walk":"drive"}var Yc=[];function Is(){let t=new Set([ht.selected,ht.from,ht.to].filter(Boolean).map(Sr));Yc=$c.slice().sort((e,n)=>(t.has(n.key)?1000:n.priority)-(t.has(e.key)?1000:e.priority)),Yc.forEach((e)=>e.boost=t.has(e.key))}var hi=new P;function ly(){let{clientWidth:t,clientHeight:e}=Fi,n=Be.position.distanceTo(Se.target),i=[];for(let s of Yc){let r=s.sprite;if(!ht.labels&&!s.boost||n>s.minDist&&!s.boost){r.visible=!1;continue}if(hi.copy(r.position).project(Be),hi.z>1||hi.x<-1.2||hi.x>1.2||hi.y<-1.2||hi.y>1.2){r.visible=!1;continue}let a=(hi.x+1)/2*t,o=(1-hi.y)/2*e,l={x0:a-r.userData.pxW/2-2,x1:a+r.userData.pxW/2+2,y0:o-r.userData.pxH-2,y1:o+2};if(!s.boost&&i.some((c)=>l.x0<c.x1&&l.x1>c.x0&&l.y0<c.y1&&l.y1>c.y0)){r.visible=!1;continue}i.push(l),r.visible=!0}}var cy=matchMedia("(max-width: 819px)");function eh(){let{innerWidth:t,innerHeight:e}=window;ui.setSize(t,e,!1);let n=0,i=0;if(cy.matches)n=Math.min(Rt("#sheet").offsetHeight,e*0.5);else i=Math.min(Rt("#sheet").offsetWidth+16,t*0.4);let s=Math.max(100,e-n),r=Math.max(100,t-i);if(io=r/s,Be.aspect=r/s,n>0||i>0)Be.setViewOffset(r,s,-i,0,t,e);else Be.clearViewOffset();Be.updateProjectionMatrix();let a=2*Math.tan(gs.degToRad(Be.fov)/2)/s;for(let o of $c)o.sprite.scale.set(o.sprite.userData.pxW*a,o.sprite.userData.pxH*a,1);document.documentElement.style.setProperty("--sheet-h",`${Rt("#sheet").offsetHeight}px`)}window.addEventListener("resize",eh);new ResizeObserver(eh).observe(Rt("#sheet"));var Gc=new bs,hy=new Ye(new P(0,1,0),0),Wn=null,Cs=new Set;Fi.addEventListener("pointerdown",(t)=>{if(Cs.add(t.pointerId),Ie)Ie=null;Wn=Cs.size===1?{x:t.clientX,y:t.clientY,t:performance.now(),multi:!1}:{...Wn||{},multi:!0}});Fi.addEventListener("pointercancel",(t)=>Cs.delete(t.pointerId));Fi.addEventListener("pointerup",(t)=>{if(Cs.delete(t.pointerId),!Wn||Wn.multi||Cs.size){if(!Cs.size)Wn=null;return}let e=Math.hypot(t.clientX-Wn.x,t.clientY-Wn.y),n=performance.now()-Wn.t<600;if(Wn=null,e>8||!n)return;uy(t.clientX,t.clientY)});function uy(t,e){let n=Fi.getBoundingClientRect(),i=new tt((t-n.left)/n.width*2-1,-((e-n.top)/n.height)*2+1);Gc.setFromCamera(i,Be);let r=Gc.intersectObjects(to,!1)[0]?.object.userData.ref||null;if(!r){let a=new P;if(Gc.ray.intersectPlane(hy,a)){let o=a.x+vr,l=a.z+Mr;if(Rs(o,l,Me.boundary)||(Me.zones||[]).some((c)=>Rs(o,l,c.polygon)))r={kind:"point",x:o,y:l}}}if(ht.pick){if(r)ao(ht.pick,r);return}if(r&&r.kind!=="point")qn(r);else if(r&&r.kind==="point")qn(r);else qn(null)}Rt("#fromBtn").addEventListener("click",()=>oo("from"));Rt("#toBtn").addEventListener("click",()=>oo("to"));Rt("#searchBtn").addEventListener("click",()=>oo("search"));Rt("#pickerClose").addEventListener("click",Qc);Rt("#pickerInput").addEventListener("input",(t)=>lf(t.target.value));document.addEventListener("keydown",(t)=>{if(t.key!=="Escape")return;if(!Rt("#picker").hidden)Qc();else if(ht.pick)nh();else qn(null)});document.querySelectorAll(".pick").forEach((t)=>t.addEventListener("click",()=>{let e=t.dataset.pick;if(ht.pick===e)return nh();ht.pick=e,document.querySelectorAll(".pick").forEach((n)=>n.classList.toggle("active",n===t)),Rt("#pickText").textContent=e==="from"?"Tap the map to set your start":"Tap the map to set your destination",Rt("#pickBanner").hidden=!1,qn(null)}));function nh(){ht.pick=null,Rt("#pickBanner").hidden=!0,document.querySelectorAll(".pick").forEach((t)=>t.classList.remove("active"))}Rt("#pickCancel").addEventListener("click",nh);Rt("#swapBtn").addEventListener("click",()=>{[ht.from,ht.to]=[ht.to,ht.from],Kc(),Is()});document.querySelectorAll(".mode").forEach((t)=>t.addEventListener("click",()=>{if(ht.mode=t.dataset.mode,document.querySelectorAll(".mode").forEach((e)=>e.setAttribute("aria-pressed",String(e===t))),ht.preview)br();Ui(),th()}));Rt("#clearBtn").addEventListener("click",()=>{ht.from=ht.to=null,br(),af(),ht.route=null,Ui(),th(),Is()});Rt("#previewBtn").addEventListener("click",()=>ht.preview?(br(),ro()):sy());Rt("#stepsToggle").addEventListener("click",()=>Qa());Rt("#grabber").addEventListener("click",()=>Qa());function Qa(t){let e=Rt("#sheet"),n=t??!e.classList.contains("expanded");e.classList.toggle("expanded",n),Rt("#stepsToggle").textContent=n?"Hide steps":"Steps"}{let t=null,e=Rt("#grabZone");e.addEventListener("touchstart",(n)=>{t=n.touches[0].clientY},{passive:!0}),e.addEventListener("touchend",(n)=>{if(t==null)return;let i=n.changedTouches[0].clientY-t;if(i<-30)Qa(!0);else if(i>30)Qa(!1);t=null})}Rt("#infoClose").addEventListener("click",()=>qn(null));Rt("#infoFrom").addEventListener("click",()=>{let t=ht.selected;qn(null),ao("from",t)});Rt("#infoTo").addEventListener("click",()=>{let t=ht.selected;if(qn(null),ao("to",t),!ht.from)oo("from")});Rt("#viewBtn").addEventListener("click",()=>{if(ht.view3d=!ht.view3d,Rt("#viewBtn").textContent=ht.view3d?"2D":"3D",Rt("#viewBtn").setAttribute("aria-label",ht.view3d?"Switch to top-down 2D view":"Switch to tilted 3D view"),ht.view3d)Se.maxPolarAngle=1.25,Oi({phi:0.75});else Oi({phi:0.02,done:()=>{Se.maxPolarAngle=0.02}})});Rt("#labelsBtn").addEventListener("click",()=>{ht.labels=!ht.labels,Rt("#labelsBtn").setAttribute("aria-pressed",String(ht.labels))});Rt("#fitBtn").addEventListener("click",()=>ht.route?.full?ro():cf());Rt("#compassBtn").addEventListener("click",()=>Oi({theta:0}));function cf(){let t=Me.boundary.map((n)=>n[0]),e=Me.boundary.map((n)=>n[1]);of(Math.min(...t),Math.min(...e),Math.max(...t),Math.max(...e),{pad:io<1?1.25:1.05,theta:0})}{let t=Rt("#legend");for(let[e,n]of Object.entries(As)){let i=document.createElement("li");if(i.innerHTML='<span class="sw"></span><span></span>',i.firstChild.style.background=n.roof||n.ground,e==="available")i.firstChild.style.outline="1px solid #94a3b8";i.lastChild.textContent=n.label,t.appendChild(i)}}var $d=new Ga,Jd=0,dy=Rt("#needle");ui.setAnimationLoop(()=>{let t=Math.min($d.getDelta(),0.1),e=$d.elapsedTime;if(ey(t),ry(t),!Ie)Se.update();rf.offset.x-=t*1.4;for(let i of[sf,Xc])if(i.visible){i.userData.head.position.y=Math.sin(e*3+(i===Xc?1.5:0))*0.6+0.6;let s=1+e*0.8%1*1.2;i.userData.ring.scale.set(s,1,s),i.userData.ring.material.opacity=0.6*(1-e*0.8%1)}if(Xn.visible)Xn.material.opacity=0.25+Math.sin(e*4)*0.1;let n=Be.position.clone().sub(Se.target);if(dy.style.transform=`rotate(${Math.atan2(n.x,n.z)}rad)`,e-Jd>0.12)ly(),Jd=e;ui.render(Ae,Be)});oy();document.querySelectorAll(".mode").forEach((t)=>t.setAttribute("aria-pressed",String(t.dataset.mode===ht.mode)));eh();Is();Ui();{let t=Me.boundary.map((n)=>n[0]),e=Me.boundary.map((n)=>n[1]);Se.target.copy(Ee((Math.min(...t)+Math.max(...t))/2,(Math.min(...e)+Math.max(...e))/2)),Be.position.copy(Se.target).add(new P(0,900,700))}if(ht.from&&ht.to)Kc();else cf();Rt("#loading").remove();if("serviceWorker"in navigator&&location.protocol.startsWith("http"))navigator.serviceWorker.register("sw.js").catch(()=>{});})();
