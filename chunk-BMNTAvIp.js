import{n as s,t as r}from"./chunk-DxqKAYlM.js";import{$ as re,A as cT,B as jE,C as Qp,F as ff$1,H as mf$1,I as gf$1,K as pT,L as hf$1,P as ec$1,Q as rb,R as iT,T as Xa$1,U as mv,Y as qT,Z as rT,_ as IC,at as uT,b as Kp,ct as uv,et as rv,f as DT,g as I,it as tv,j as cu$1,k as ao$1,lt as vv,q as pf$1,rt as sf$1,ut as yv,x as N,y as Jy,z as iv}from"./main-GFPT6XBD.js";var Gn={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2};var Ei={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3};var nu=0;var ec=1;var iu=2;var Pr=1;var su=2;var Ns=3;var Wn=0;var rn=1;var Xn=2;var Yn=0;var Us=1;var tc=2;var nc=3;var ic=4;var ru=5;var Gi=100;var au=101;var ou=102;var lu=103;var cu=104;var hu=200;var uu=201;var du=202;var fu=203;var sc=204;var rc=205;var pu=206;var mu=207;var gu=208;var _u=209;var xu=210;var yu=211;var vu=212;var bu=213;var Su=214;var Pa=0;var Ia=1;var Da=2;var gs=3;var La=4;var Na=5;var Ua=6;var Fa=7;var co=0;var Mu=1;var Eu=2;var Un=0;var ac=1;var oc=2;var lc=3;var cc=4;var hc=5;var uc=6;var dc=7;var fc=300;var Ti=301;var Wi=302;var ho=303;var uo=304;var Ir=306;var _i=1e3;var vn=1001;var Oa=1002;var Ht=1003;var Tu=1004;var Dr=1005;var Gt=1006;var fo=1007;var wi=1008;var cn=1009;var pc=1010;var mc=1011;var Fs=1012;var po=1013;var Fn=1014;var On=1015;var Bn=1016;var mo=1017;var go=1018;var Os=1020;var gc=35902;var _c=35899;var xc=1021;var yc=1022;var Mn=1023;var Vn=1026;var Ai=1027;var vc=1028;var _o=1029;var Ci=1030;var xo=1031;var yo=1033;var Lr=33776;var Nr=33777;var Ur=33778;var Fr=33779;var vo=35840;var bo=35841;var So=35842;var Mo=35843;var Eo=36196;var To=37492;var wo=37496;var Ao=37488;var Co=37489;var Or=37490;var Ro=37491;var Po=37808;var Io=37809;var Do=37810;var Lo=37811;var No=37812;var Uo=37813;var Fo=37814;var Oo=37815;var Bo=37816;var ko=37817;var zo=37818;var Ho=37819;var Vo=37820;var Go=37821;var Wo=36492;var Xo=36494;var Yo=36495;var qo=36283;var jo=36284;var Br=36285;var Zo=36286;var er=2300;var Ba=2301;var Ca=2302;var Gl=2303;var Wl=2400;var Xl=2401;var Yl=2402;var wu=3200;var kr=0;var Au=1;var oi=``;var It=`srgb`;var tr=`srgb-linear`;var nr=`linear`;var lt=`srgb`;var Ra=7680;var Cu=519;var Ru=512;var Pu=513;var Iu=514;var Ko=515;var Du=516;var Lu=517;var Jo=518;var Nu=519;var bc=35044;var Sc=`300 es`;var In=2e3;var _s=2001;function Wd(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function Xd(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}function xs(s){return document.createElementNS(`http://www.w3.org/1999/xhtml`,s)}function Uu(){let s=xs(`canvas`);return s.style.display=`block`,s}var bh={};var ys=null;function ir(...s){let e=`THREE.`+s.shift();ys?ys(`log`,e,...s):console.log(e,...s)}function Fu(s){let e=s[0];if(typeof e==`string`&&e.startsWith(`TSL:`)){let t=s[1];t&&t.isStackTrace?s[0]+=` `+t.getLocation():s[1]=`Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.`}return s}function Ne(...s){s=Fu(s);let e=`THREE.`+s.shift();if(ys)ys(`warn`,e,...s);else{let t=s[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...s)}}function Oe(...s){s=Fu(s);let e=`THREE.`+s.shift();if(ys)ys(`error`,e,...s);else{let t=s[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...s)}}function Oi(...s){let e=s.join(` `);e in bh||(bh[e]=!0,Ne(...s))}function Ou(s,e,t){return new Promise(function(n,i){function r(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}var Bu={[Pa]:Ia,[Da]:Ua,[La]:Fa,[gs]:Na,[Ia]:Pa,[Ua]:Da,[Fa]:La,[Na]:gs};var Dn=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let i=n[e];if(i!==void 0){let r=i.indexOf(t);r!==-1&&i.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let i=n.slice(0);for(let r=0,a=i.length;r<a;r++)i[r].call(this,e);e.target=null}}};var qt=[`00`,`01`,`02`,`03`,`04`,`05`,`06`,`07`,`08`,`09`,`0a`,`0b`,`0c`,`0d`,`0e`,`0f`,`10`,`11`,`12`,`13`,`14`,`15`,`16`,`17`,`18`,`19`,`1a`,`1b`,`1c`,`1d`,`1e`,`1f`,`20`,`21`,`22`,`23`,`24`,`25`,`26`,`27`,`28`,`29`,`2a`,`2b`,`2c`,`2d`,`2e`,`2f`,`30`,`31`,`32`,`33`,`34`,`35`,`36`,`37`,`38`,`39`,`3a`,`3b`,`3c`,`3d`,`3e`,`3f`,`40`,`41`,`42`,`43`,`44`,`45`,`46`,`47`,`48`,`49`,`4a`,`4b`,`4c`,`4d`,`4e`,`4f`,`50`,`51`,`52`,`53`,`54`,`55`,`56`,`57`,`58`,`59`,`5a`,`5b`,`5c`,`5d`,`5e`,`5f`,`60`,`61`,`62`,`63`,`64`,`65`,`66`,`67`,`68`,`69`,`6a`,`6b`,`6c`,`6d`,`6e`,`6f`,`70`,`71`,`72`,`73`,`74`,`75`,`76`,`77`,`78`,`79`,`7a`,`7b`,`7c`,`7d`,`7e`,`7f`,`80`,`81`,`82`,`83`,`84`,`85`,`86`,`87`,`88`,`89`,`8a`,`8b`,`8c`,`8d`,`8e`,`8f`,`90`,`91`,`92`,`93`,`94`,`95`,`96`,`97`,`98`,`99`,`9a`,`9b`,`9c`,`9d`,`9e`,`9f`,`a0`,`a1`,`a2`,`a3`,`a4`,`a5`,`a6`,`a7`,`a8`,`a9`,`aa`,`ab`,`ac`,`ad`,`ae`,`af`,`b0`,`b1`,`b2`,`b3`,`b4`,`b5`,`b6`,`b7`,`b8`,`b9`,`ba`,`bb`,`bc`,`bd`,`be`,`bf`,`c0`,`c1`,`c2`,`c3`,`c4`,`c5`,`c6`,`c7`,`c8`,`c9`,`ca`,`cb`,`cc`,`cd`,`ce`,`cf`,`d0`,`d1`,`d2`,`d3`,`d4`,`d5`,`d6`,`d7`,`d8`,`d9`,`da`,`db`,`dc`,`dd`,`de`,`df`,`e0`,`e1`,`e2`,`e3`,`e4`,`e5`,`e6`,`e7`,`e8`,`e9`,`ea`,`eb`,`ec`,`ed`,`ee`,`ef`,`f0`,`f1`,`f2`,`f3`,`f4`,`f5`,`f6`,`f7`,`f8`,`f9`,`fa`,`fb`,`fc`,`fd`,`fe`,`ff`];var Sh=1234567;var $s=Math.PI/180;var vs=180/Math.PI;function ni(){let s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(qt[s&255]+qt[s>>8&255]+qt[s>>16&255]+qt[s>>24&255]+`-`+qt[e&255]+qt[e>>8&255]+`-`+qt[e>>16&15|64]+qt[e>>24&255]+`-`+qt[t&63|128]+qt[t>>8&255]+`-`+qt[t>>16&255]+qt[t>>24&255]+qt[n&255]+qt[n>>8&255]+qt[n>>16&255]+qt[n>>24&255]).toLowerCase()}function Xe(s,e,t){return Math.max(e,Math.min(t,s))}function Mc(s,e){return(s%e+e)%e}function Yd(s,e,t,n,i){return n+(s-e)*(i-n)/(t-e)}function qd(s,e,t){return s!==e?(t-s)/(e-s):0}function Qs(s,e,t){return(1-t)*s+t*e}function jd(s,e,t,n){return Qs(s,e,1-Math.exp(-t*n))}function Zd(s,e=1){return e-Math.abs(Mc(s,e*2)-e)}function Kd(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*(3-2*s))}function Jd(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*s*(s*(s*6-15)+10))}function $d(s,e){return s+Math.floor(Math.random()*(e-s+1))}function Qd(s,e){return s+Math.random()*(e-s)}function ef(s){return s*(.5-Math.random())}function tf(s){s!==void 0&&(Sh=s);let e=Sh+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function nf(s){return s*$s}function sf(s){return s*vs}function rf(s){return s>0&&Number.isInteger(s)&&2**Math.round(Math.log2(s))===s}function af(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function of(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function lf(s,e,t,n,i){let r=Math.cos,a=Math.sin,o=r(t/2),c=a(t/2),l=r((e+n)/2),u=a((e+n)/2),d=r((e-n)/2),h=a((e-n)/2),f=r((n-e)/2),g=a((n-e)/2);switch(i){case`XYX`:s.set(o*u,c*d,c*h,o*l);break;case`YZY`:s.set(c*h,o*u,c*d,o*l);break;case`ZXZ`:s.set(c*d,c*h,o*u,o*l);break;case`XZX`:s.set(o*u,c*g,c*f,o*l);break;case`YXY`:s.set(c*f,o*u,c*g,o*l);break;case`ZYZ`:s.set(c*g,c*f,o*u,o*l);break;default:Ne(`MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: `+i)}}function Pn(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:case Uint8ClampedArray:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error(`THREE.MathUtils: Invalid component type.`)}}function ht(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error(`THREE.MathUtils: Invalid component type.`)}}var wt={DEG2RAD:$s,RAD2DEG:vs,generateUUID:ni,clamp:Xe,euclideanModulo:Mc,mapLinear:Yd,inverseLerp:qd,lerp:Qs,damp:jd,pingpong:Zd,smoothstep:Kd,smootherstep:Jd,randInt:$d,randFloat:Qd,randFloatSpread:ef,seededRandom:tf,degToRad:nf,radToDeg:sf,isPowerOfTwo:rf,ceilPowerOfTwo:af,floorPowerOfTwo:of,setQuaternionFromProperEuler:lf,normalize:ht,denormalize:Pn};var Se=class s{static{s.prototype.isVector2=!0}constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error(`THREE.Vector2: index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error(`THREE.Vector2: index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Xe(this.x,e.x,t.x),this.y=Xe(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Xe(this.x,e,t),this.y=Xe(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Xe(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Xe(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),i=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*i+e.x,this.y=r*i+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};var Wt=class{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,r,a,o){let c=n[i+0],l=n[i+1],u=n[i+2],d=n[i+3],h=r[a+0],f=r[a+1],g=r[a+2],y=r[a+3];if(d!==y||c!==h||l!==f||u!==g){let m=c*h+l*f+u*g+d*y;m<0&&(h=-h,f=-f,g=-g,y=-y,m=-m);let p=1-o;if(m<.9995){let S=Math.acos(m),C=Math.sin(S);p=Math.sin(p*S)/C,o=Math.sin(o*S)/C,c=c*p+h*o,l=l*p+f*o,u=u*p+g*o,d=d*p+y*o}else{c=c*p+h*o,l=l*p+f*o,u=u*p+g*o,d=d*p+y*o;let S=1/Math.sqrt(c*c+l*l+u*u+d*d);c*=S,l*=S,u*=S,d*=S}}e[t]=c,e[t+1]=l,e[t+2]=u,e[t+3]=d}static multiplyQuaternionsFlat(e,t,n,i,r,a){let o=n[i],c=n[i+1],l=n[i+2],u=n[i+3],d=r[a],h=r[a+1],f=r[a+2],g=r[a+3];return e[t]=o*g+u*d+c*f-l*h,e[t+1]=c*g+u*h+l*d-o*f,e[t+2]=l*g+u*f+o*h-c*d,e[t+3]=u*g-o*d-c*h-l*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,i=e._y,r=e._z,a=e._order,o=Math.cos,c=Math.sin,l=o(n/2),u=o(i/2),d=o(r/2),h=c(n/2),f=c(i/2),g=c(r/2);switch(a){case`XYZ`:this._x=h*u*d+l*f*g,this._y=l*f*d-h*u*g,this._z=l*u*g+h*f*d,this._w=l*u*d-h*f*g;break;case`YXZ`:this._x=h*u*d+l*f*g,this._y=l*f*d-h*u*g,this._z=l*u*g-h*f*d,this._w=l*u*d+h*f*g;break;case`ZXY`:this._x=h*u*d-l*f*g,this._y=l*f*d+h*u*g,this._z=l*u*g+h*f*d,this._w=l*u*d-h*f*g;break;case`ZYX`:this._x=h*u*d-l*f*g,this._y=l*f*d+h*u*g,this._z=l*u*g-h*f*d,this._w=l*u*d+h*f*g;break;case`YZX`:this._x=h*u*d+l*f*g,this._y=l*f*d+h*u*g,this._z=l*u*g-h*f*d,this._w=l*u*d-h*f*g;break;case`XZY`:this._x=h*u*d-l*f*g,this._y=l*f*d-h*u*g,this._z=l*u*g+h*f*d,this._w=l*u*d+h*f*g;break;default:Ne(`Quaternion: .setFromEuler() encountered an unknown order: `+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],i=t[4],r=t[8],a=t[1],o=t[5],c=t[9],l=t[2],u=t[6],d=t[10],h=n+o+d;if(h>0){let f=.5/Math.sqrt(h+1);this._w=.25/f,this._x=(u-c)*f,this._y=(r-l)*f,this._z=(a-i)*f}else if(n>o&&n>d){let f=2*Math.sqrt(1+n-o-d);this._w=(u-c)/f,this._x=.25*f,this._y=(i+a)/f,this._z=(r+l)/f}else if(o>d){let f=2*Math.sqrt(1+o-n-d);this._w=(r-l)/f,this._x=(i+a)/f,this._y=.25*f,this._z=(c+u)/f}else{let f=2*Math.sqrt(1+d-n-o);this._w=(a-i)/f,this._x=(r+l)/f,this._y=(c+u)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Xe(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,i=e._y,r=e._z,a=e._w,o=t._x,c=t._y,l=t._z,u=t._w;return this._x=n*u+a*o+i*l-r*c,this._y=i*u+a*c+r*o-n*l,this._z=r*u+a*l+n*c-i*o,this._w=a*u-n*o-i*c-r*l,this._onChangeCallback(),this}slerp(e,t){let n=e._x,i=e._y,r=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,i=-i,r=-r,a=-a,o=-o);let c=1-t;if(o<.9995){let l=Math.acos(o),u=Math.sin(l);c=Math.sin(c*l)/u,t=Math.sin(t*l)/u,this._x=this._x*c+n*t,this._y=this._y*c+i*t,this._z=this._z*c+r*t,this._w=this._w*c+a*t,this._onChangeCallback()}else this._x=this._x*c+n*t,this._y=this._y*c+i*t,this._z=this._z*c+r*t,this._w=this._w*c+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}};var R=class s{static{s.prototype.isVector3=!0}constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error(`THREE.Vector3: index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error(`THREE.Vector3: index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Mh.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Mh.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*i,this.y=r[1]*t+r[4]*n+r[7]*i,this.z=r[2]*t+r[5]*n+r[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,i=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*i+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*i+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*i+r[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,i=this.z,r=e.x,a=e.y,o=e.z,c=e.w,l=2*(a*i-o*n),u=2*(o*t-r*i),d=2*(r*n-a*t);return this.x=t+c*l+a*d-o*u,this.y=n+c*u+o*l-r*d,this.z=i+c*d+r*u-a*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i,this.y=r[1]*t+r[5]*n+r[9]*i,this.z=r[2]*t+r[6]*n+r[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Xe(this.x,e.x,t.x),this.y=Xe(this.y,e.y,t.y),this.z=Xe(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Xe(this.x,e,t),this.y=Xe(this.y,e,t),this.z=Xe(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Xe(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,i=e.y,r=e.z,a=t.x,o=t.y,c=t.z;return this.x=i*c-r*o,this.y=r*a-n*c,this.z=n*o-i*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return _l.copy(this).projectOnVector(e),this.sub(_l)}reflect(e){return this.sub(_l.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Xe(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};var _l=new R;var Mh=new Wt;var Be=class s{static{s.prototype.isMatrix3=!0}constructor(e,t,n,i,r,a,o,c,l){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,a,o,c,l)}set(e,t,n,i,r,a,o,c,l){let u=this.elements;return u[0]=e,u[1]=i,u[2]=o,u[3]=t,u[4]=r,u[5]=c,u[6]=n,u[7]=a,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,i=t.elements,r=this.elements,a=n[0],o=n[3],c=n[6],l=n[1],u=n[4],d=n[7],h=n[2],f=n[5],g=n[8],y=i[0],m=i[3],p=i[6],S=i[1],C=i[4],v=i[7],E=i[2],M=i[5],w=i[8];return r[0]=a*y+o*S+c*E,r[3]=a*m+o*C+c*M,r[6]=a*p+o*v+c*w,r[1]=l*y+u*S+d*E,r[4]=l*m+u*C+d*M,r[7]=l*p+u*v+d*w,r[2]=h*y+f*S+g*E,r[5]=h*m+f*C+g*M,r[8]=h*p+f*v+g*w,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],u=e[8];return t*a*u-t*o*l-n*r*u+n*o*c+i*r*l-i*a*c}invert(){let e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],u=e[8],d=u*a-o*l,h=o*c-u*r,f=l*r-a*c,g=t*d+n*h+i*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let y=1/g;return e[0]=d*y,e[1]=(i*l-u*n)*y,e[2]=(o*n-i*a)*y,e[3]=h*y,e[4]=(u*t-i*c)*y,e[5]=(i*r-o*t)*y,e[6]=f*y,e[7]=(n*c-l*t)*y,e[8]=(a*t-n*r)*y,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,r,a,o){let c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*a+l*o)+a+e,-i*l,i*c,-i*(-l*a+c*o)+o+t,0,0,1),this}scale(e,t){return Oi(`Matrix3: .scale() is deprecated. Use .makeScale() instead.`),this.premultiply(xl.makeScale(e,t)),this}rotate(e){return Oi(`Matrix3: .rotate() is deprecated. Use .makeRotation() instead.`),this.premultiply(xl.makeRotation(-e)),this}translate(e,t){return Oi(`Matrix3: .translate() is deprecated. Use .makeTranslation() instead.`),this.premultiply(xl.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}};var xl=new Be;var Eh=new Be().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322);var Th=new Be().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function cf(){let s={enabled:!0,workingColorSpace:tr,spaces:{},convert:function(i,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===lt&&(i.r=ii(i.r),i.g=ii(i.g),i.b=ii(i.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(i.applyMatrix3(this.spaces[r].toXYZ),i.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===lt&&(i.r=ps(i.r),i.g=ps(i.g),i.b=ps(i.b))),i},workingToColorSpace:function(i,r){return this.convert(i,this.workingColorSpace,r)},colorSpaceToWorking:function(i,r){return this.convert(i,r,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===oi?nr:this.spaces[i].transfer},getToneMappingMode:function(i){return this.spaces[i].outputColorSpaceConfig.toneMappingMode||`standard`},getLuminanceCoefficients:function(i,r=this.workingColorSpace){return i.fromArray(this.spaces[r].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,r,a){return i.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(i,r){return Oi(`ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace().`),s.workingToColorSpace(i,r)},toWorkingColorSpace:function(i,r){return Oi(`ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking().`),s.colorSpaceToWorking(i,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return s.define({[tr]:{primaries:e,whitePoint:n,transfer:nr,toXYZ:Eh,fromXYZ:Th,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:It},outputColorSpaceConfig:{drawingBufferColorSpace:It}},[It]:{primaries:e,whitePoint:n,transfer:lt,toXYZ:Eh,fromXYZ:Th,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:It}}}),s}var We=cf();function ii(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function ps(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}var Ki;var ka=class{static getDataURL(e,t=`image/png`){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>`u`)return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Ki===void 0&&(Ki=xs(`canvas`)),Ki.width=e.width,Ki.height=e.height;let i=Ki.getContext(`2d`);e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=Ki}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap){let t=xs(`canvas`);t.width=e.width,t.height=e.height;let n=t.getContext(`2d`);n.drawImage(e,0,0,e.width,e.height);let i=n.getImageData(0,0,e.width,e.height),r=i.data;for(let a=0;a<r.length;a++)r[a]=ii(r[a]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(ii(t[n]/255)*255):t[n]=ii(t[n]);return{data:t,width:e.width,height:e.height}}else return Ne(`ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied.`),e}};var hf=0;var bs=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:hf++}),this.uuid=ni(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<`u`&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<`u`&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e==`string`;if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:``},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?r.push(yl(i[a].image)):r.push(yl(i[a]))}else r=yl(i);n.url=r}return t||(e.images[this.uuid]=n),n}};function yl(s){return typeof HTMLImageElement<`u`&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&s instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&s instanceof ImageBitmap?ka.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(Ne(`Texture: Unable to serialize Texture.`),{})}var uf=0;var vl=new R;var Zt=class s extends Dn{constructor(e=s.DEFAULT_IMAGE,t=s.DEFAULT_MAPPING,n=vn,i=vn,r=Gt,a=wi,o=Mn,c=cn,l=s.DEFAULT_ANISOTROPY,u=oi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:uf++}),this.uuid=ni(),this.name=``,this.source=new bs(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new Se(0,0),this.repeat=new Se(1,1),this.center=new Se(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Be,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(vl).x}get height(){return this.source.getSize(vl).y}get depth(){return this.source.getSize(vl).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){Ne(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let i=this[t];if(i===void 0){Ne(`Texture.setValues(): property '${t}' does not exist.`);continue}i&&n&&i.isVector2&&n.isVector2||i&&n&&i.isVector3&&n.isVector3||i&&n&&i.isMatrix3&&n.isMatrix3?i.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e==`string`;if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:`Texture`,generator:`Texture.toJSON`},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:`dispose`})}transformUv(e){if(this.mapping!==fc)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case _i:e.x=e.x-Math.floor(e.x);break;case vn:e.x=e.x<0?0:1;break;case Oa:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x)}if(e.y<0||e.y>1)switch(this.wrapT){case _i:e.y=e.y-Math.floor(e.y);break;case vn:e.y=e.y<0?0:1;break;case Oa:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y)}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Zt.DEFAULT_IMAGE=null;Zt.DEFAULT_MAPPING=fc;Zt.DEFAULT_ANISOTROPY=1;var Et=class s{static{s.prototype.isVector4=!0}constructor(e=0,t=0,n=0,i=1){this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error(`THREE.Vector4: index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error(`THREE.Vector4: index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,i=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*i+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*i+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*i+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*i+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,r,c=e.elements,l=c[0],u=c[4],d=c[8],h=c[1],f=c[5],g=c[9],y=c[2],m=c[6],p=c[10];if(Math.abs(u-h)<.01&&Math.abs(d-y)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+h)<.1&&Math.abs(d+y)<.1&&Math.abs(g+m)<.1&&Math.abs(l+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let C=(l+1)/2,v=(f+1)/2,E=(p+1)/2,M=(u+h)/4,w=(d+y)/4,x=(g+m)/4;return C>v&&C>E?C<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(C),i=M/n,r=w/n):v>E?v<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(v),n=M/i,r=x/i):E<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(E),n=w/r,i=x/r),this.set(n,i,r,t),this}let S=Math.sqrt((m-g)*(m-g)+(d-y)*(d-y)+(h-u)*(h-u));return Math.abs(S)<.001&&(S=1),this.x=(m-g)/S,this.y=(d-y)/S,this.z=(h-u)/S,this.w=Math.acos((l+f+p-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Xe(this.x,e.x,t.x),this.y=Xe(this.y,e.y,t.y),this.z=Xe(this.z,e.z,t.z),this.w=Xe(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Xe(this.x,e,t),this.y=Xe(this.y,e,t),this.z=Xe(this.z,e,t),this.w=Xe(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Xe(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};var za=class extends Dn{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Gt,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new Et(0,0,e,t),this.scissorTest=!1,this.viewport=new Et(0,0,e,t),this.textures=[];let r=new Zt({width:e,height:t,depth:n.depth}),a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:Gt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n,this.textures[i].isData3DTexture!==!0&&(this.textures[i].isArrayTexture=this.textures[i].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let i=Object.assign({},e.textures[t].image);this.textures[t].source=new bs(i)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:`dispose`})}};var ln=class extends za{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}};var sr=class extends Zt{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Ht,this.minFilter=Ht,this.wrapR=vn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var Ha=class extends Zt{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Ht,this.minFilter=Ht,this.wrapR=vn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}};var ft=class s{static{s.prototype.isMatrix4=!0}constructor(e,t,n,i,r,a,o,c,l,u,d,h,f,g,y,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,a,o,c,l,u,d,h,f,g,y,m)}set(e,t,n,i,r,a,o,c,l,u,d,h,f,g,y,m){let p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=i,p[1]=r,p[5]=a,p[9]=o,p[13]=c,p[2]=l,p[6]=u,p[10]=d,p[14]=h,p[3]=f,p[7]=g,p[11]=y,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new s().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,i=1/Ji.setFromMatrixColumn(e,0).length(),r=1/Ji.setFromMatrixColumn(e,1).length(),a=1/Ji.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,i=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(i),l=Math.sin(i),u=Math.cos(r),d=Math.sin(r);if(e.order===`XYZ`){let h=a*u,f=a*d,g=o*u,y=o*d;t[0]=c*u,t[4]=-c*d,t[8]=l,t[1]=f+g*l,t[5]=h-y*l,t[9]=-o*c,t[2]=y-h*l,t[6]=g+f*l,t[10]=a*c}else if(e.order===`YXZ`){let h=c*u,f=c*d,g=l*u,y=l*d;t[0]=h+y*o,t[4]=g*o-f,t[8]=a*l,t[1]=a*d,t[5]=a*u,t[9]=-o,t[2]=f*o-g,t[6]=y+h*o,t[10]=a*c}else if(e.order===`ZXY`){let h=c*u,f=c*d,g=l*u,y=l*d;t[0]=h-y*o,t[4]=-a*d,t[8]=g+f*o,t[1]=f+g*o,t[5]=a*u,t[9]=y-h*o,t[2]=-a*l,t[6]=o,t[10]=a*c}else if(e.order===`ZYX`){let h=a*u,f=a*d,g=o*u,y=o*d;t[0]=c*u,t[4]=g*l-f,t[8]=h*l+y,t[1]=c*d,t[5]=y*l+h,t[9]=f*l-g,t[2]=-l,t[6]=o*c,t[10]=a*c}else if(e.order===`YZX`){let h=a*c,f=a*l,g=o*c,y=o*l;t[0]=c*u,t[4]=y-h*d,t[8]=g*d+f,t[1]=d,t[5]=a*u,t[9]=-o*u,t[2]=-l*u,t[6]=f*d+g,t[10]=h-y*d}else if(e.order===`XZY`){let h=a*c,f=a*l,g=o*c,y=o*l;t[0]=c*u,t[4]=-d,t[8]=l*u,t[1]=h*d+y,t[5]=a*u,t[9]=f*d-g,t[2]=g*d-f,t[6]=o*u,t[10]=y*d+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(df,e,ff)}lookAt(e,t,n){let i=this.elements;return dn.subVectors(e,t),dn.lengthSq()===0&&(dn.z=1),dn.normalize(),di.crossVectors(n,dn),di.lengthSq()===0&&(Math.abs(n.z)===1?dn.x+=1e-4:dn.z+=1e-4,dn.normalize(),di.crossVectors(n,dn)),di.normalize(),ta.crossVectors(dn,di),i[0]=di.x,i[4]=ta.x,i[8]=dn.x,i[1]=di.y,i[5]=ta.y,i[9]=dn.y,i[2]=di.z,i[6]=ta.z,i[10]=dn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,i=t.elements,r=this.elements,a=n[0],o=n[4],c=n[8],l=n[12],u=n[1],d=n[5],h=n[9],f=n[13],g=n[2],y=n[6],m=n[10],p=n[14],S=n[3],C=n[7],v=n[11],E=n[15],M=i[0],w=i[4],x=i[8],T=i[12],P=i[1],I=i[5],F=i[9],H=i[13],U=i[2],z=i[6],J=i[10],W=i[14],re=i[3],Y=i[7],te=i[11],ie=i[15];return r[0]=a*M+o*P+c*U+l*re,r[4]=a*w+o*I+c*z+l*Y,r[8]=a*x+o*F+c*J+l*te,r[12]=a*T+o*H+c*W+l*ie,r[1]=u*M+d*P+h*U+f*re,r[5]=u*w+d*I+h*z+f*Y,r[9]=u*x+d*F+h*J+f*te,r[13]=u*T+d*H+h*W+f*ie,r[2]=g*M+y*P+m*U+p*re,r[6]=g*w+y*I+m*z+p*Y,r[10]=g*x+y*F+m*J+p*te,r[14]=g*T+y*H+m*W+p*ie,r[3]=S*M+C*P+v*U+E*re,r[7]=S*w+C*I+v*z+E*Y,r[11]=S*x+C*F+v*J+E*te,r[15]=S*T+C*H+v*W+E*ie,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],i=e[8],r=e[12],a=e[1],o=e[5],c=e[9],l=e[13],u=e[2],d=e[6],h=e[10],f=e[14],g=e[3],y=e[7],m=e[11],p=e[15],S=c*f-l*h,C=o*f-l*d,v=o*h-c*d,E=a*f-l*u,M=a*h-c*u,w=a*d-o*u;return t*(y*S-m*C+p*v)-n*(g*S-m*E+p*M)+i*(g*C-y*E+p*w)-r*(g*v-y*M+m*w)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],i=e[8],r=e[1],a=e[5],o=e[9],c=e[2],l=e[6],u=e[10];return t*(a*u-o*l)-n*(r*u-o*c)+i*(r*l-a*c)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],u=e[8],d=e[9],h=e[10],f=e[11],g=e[12],y=e[13],m=e[14],p=e[15],S=t*o-n*a,C=t*c-i*a,v=t*l-r*a,E=n*c-i*o,M=n*l-r*o,w=i*l-r*c,x=u*y-d*g,T=u*m-h*g,P=u*p-f*g,I=d*m-h*y,F=d*p-f*y,H=h*p-f*m,U=S*H-C*F+v*I+E*P-M*T+w*x;if(U===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let z=1/U;return e[0]=(o*H-c*F+l*I)*z,e[1]=(i*F-n*H-r*I)*z,e[2]=(y*w-m*M+p*E)*z,e[3]=(h*M-d*w-f*E)*z,e[4]=(c*P-a*H-l*T)*z,e[5]=(t*H-i*P+r*T)*z,e[6]=(m*v-g*w-p*C)*z,e[7]=(u*w-h*v+f*C)*z,e[8]=(a*F-o*P+l*x)*z,e[9]=(n*P-t*F-r*x)*z,e[10]=(g*M-y*v+p*S)*z,e[11]=(d*v-u*M-f*S)*z,e[12]=(o*T-a*I-c*x)*z,e[13]=(t*I-n*T+i*x)*z,e[14]=(y*C-g*E-m*S)*z,e[15]=(u*E-d*C+h*S)*z,this}scale(e){let t=this.elements,n=e.x,i=e.y,r=e.z;return t[0]*=n,t[4]*=i,t[8]*=r,t[1]*=n,t[5]*=i,t[9]*=r,t[2]*=n,t[6]*=i,t[10]*=r,t[3]*=n,t[7]*=i,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),i=Math.sin(t),r=1-n,a=e.x,o=e.y,c=e.z,l=r*a,u=r*o;return this.set(l*a+n,l*o-i*c,l*c+i*o,0,l*o+i*c,u*o+n,u*c-i*a,0,l*c-i*o,u*c+i*a,r*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,r,a){return this.set(1,n,r,0,e,1,a,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){let i=this.elements,r=t._x,a=t._y,o=t._z,c=t._w,l=r+r,u=a+a,d=o+o,h=r*l,f=r*u,g=r*d,y=a*u,m=a*d,p=o*d,S=c*l,C=c*u,v=c*d,E=n.x,M=n.y,w=n.z;return i[0]=(1-(y+p))*E,i[1]=(f+v)*E,i[2]=(g-C)*E,i[3]=0,i[4]=(f-v)*M,i[5]=(1-(h+p))*M,i[6]=(m+S)*M,i[7]=0,i[8]=(g+C)*w,i[9]=(m-S)*w,i[10]=(1-(h+y))*w,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){let i=this.elements;e.x=i[12],e.y=i[13],e.z=i[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),t.identity(),this;let a=Ji.set(i[0],i[1],i[2]).length(),o=Ji.set(i[4],i[5],i[6]).length(),c=Ji.set(i[8],i[9],i[10]).length();r<0&&(a=-a),An.copy(this);let l=1/a,u=1/o,d=1/c;return An.elements[0]*=l,An.elements[1]*=l,An.elements[2]*=l,An.elements[4]*=u,An.elements[5]*=u,An.elements[6]*=u,An.elements[8]*=d,An.elements[9]*=d,An.elements[10]*=d,t.setFromRotationMatrix(An),n.x=a,n.y=o,n.z=c,this}makePerspective(e,t,n,i,r,a,o=In,c=!1){let l=this.elements,u=2*r/(t-e),d=2*r/(n-i),h=(t+e)/(t-e),f=(n+i)/(n-i),g,y;if(c)g=r/(a-r),y=a*r/(a-r);else if(o===In)g=-(a+r)/(a-r),y=-2*a*r/(a-r);else if(o===_s)g=-a/(a-r),y=-a*r/(a-r);else throw new Error(`THREE.Matrix4.makePerspective(): Invalid coordinate system: `+o);return l[0]=u,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=d,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=g,l[14]=y,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,i,r,a,o=In,c=!1){let l=this.elements,u=2/(t-e),d=2/(n-i),h=-(t+e)/(t-e),f=-(n+i)/(n-i),g,y;if(c)g=1/(a-r),y=a/(a-r);else if(o===In)g=-2/(a-r),y=-(a+r)/(a-r);else if(o===_s)g=-1/(a-r),y=-r/(a-r);else throw new Error(`THREE.Matrix4.makeOrthographic(): Invalid coordinate system: `+o);return l[0]=u,l[4]=0,l[8]=0,l[12]=h,l[1]=0,l[5]=d,l[9]=0,l[13]=f,l[2]=0,l[6]=0,l[10]=g,l[14]=y,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}};var Ji=new R;var An=new ft;var df=new R(0,0,0);var ff=new R(1,1,1);var di=new R;var ta=new R;var dn=new R;var wh=new ft;var Ah=new Wt;var bn=class s{constructor(e=0,t=0,n=0,i=s.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let i=e.elements,r=i[0],a=i[4],o=i[8],c=i[1],l=i[5],u=i[9],d=i[2],h=i[6],f=i[10];switch(t){case`XYZ`:this._y=Math.asin(Xe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(h,l),this._z=0);break;case`YXZ`:this._x=Math.asin(-Xe(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-d,r),this._z=0);break;case`ZXY`:this._x=Math.asin(Xe(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,r));break;case`ZYX`:this._y=Math.asin(-Xe(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(h,f),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-a,l));break;case`YZX`:this._z=Math.asin(Xe(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(o,f));break;case`XZY`:this._z=Math.asin(-Xe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(h,l),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-u,f),this._y=0);break;default:Ne(`Euler: .setFromRotationMatrix() encountered an unknown order: `+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return wh.makeRotationFromQuaternion(e),this.setFromRotationMatrix(wh,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Ah.setFromEuler(this),this.setFromQuaternion(Ah,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};bn.DEFAULT_ORDER=`XYZ`;var Ss=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}};var pf=0;var Ch=new R;var $i=new Wt;var Zn=new ft;var na=new R;var Ws=new R;var mf=new R;var gf=new Wt;var Rh=new R(1,0,0);var Ph=new R(0,1,0);var Ih=new R(0,0,1);var Dh={type:`added`};var _f={type:`removed`};var Qi={type:`childadded`,child:null};var bl={type:`childremoved`,child:null};var Dt=class s$1 extends Dn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:pf++}),this.uuid=ni(),this.name=``,this.type=`Object3D`,this.parent=null,this.children=[],this.up=s$1.DEFAULT_UP.clone();let e=new R,t=new bn,n=new Wt,i=new R(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new ft},normalMatrix:{value:new Be}}),this.matrix=new ft,this.matrixWorld=new ft,this.matrixAutoUpdate=s$1.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=s$1.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ss,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return $i.setFromAxisAngle(e,t),this.quaternion.multiply($i),this}rotateOnWorldAxis(e,t){return $i.setFromAxisAngle(e,t),this.quaternion.premultiply($i),this}rotateX(e){return this.rotateOnAxis(Rh,e)}rotateY(e){return this.rotateOnAxis(Ph,e)}rotateZ(e){return this.rotateOnAxis(Ih,e)}translateOnAxis(e,t){return Ch.copy(e).applyQuaternion(this.quaternion),this.position.add(Ch.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Rh,e)}translateY(e){return this.translateOnAxis(Ph,e)}translateZ(e){return this.translateOnAxis(Ih,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Zn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?na.copy(e):na.set(e,t,n);let i=this.parent;this.updateWorldMatrix(!0,!1),Ws.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Zn.lookAt(Ws,na,this.up):Zn.lookAt(na,Ws,this.up),this.quaternion.setFromRotationMatrix(Zn),i&&(Zn.extractRotation(i.matrixWorld),$i.setFromRotationMatrix(Zn),this.quaternion.premultiply($i.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Oe(`Object3D.add: object can't be added as a child of itself.`,e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Dh),Qi.child=e,this.dispatchEvent(Qi),Qi.child=null):Oe(`Object3D.add: object not an instance of THREE.Object3D.`,e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(_f),bl.child=e,this.dispatchEvent(bl),bl.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Zn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Zn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Zn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Dh),Qi.child=e,this.dispatchEvent(Qi),Qi.child=null,this}getObjectById(e){return this.getObjectByProperty(`id`,e)}getObjectByName(e){return this.getObjectByProperty(`name`,e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){let a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ws,e,mf),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ws,gf,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,i=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*n-r[8]*i,r[13]+=n-r[1]*t-r[5]*n-r[9]*i,r[14]+=i-r[2]*t-r[6]*n-r[10]*i}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){let r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e==`string`,n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:`Object`,generator:`Object3D.toJSON`});let i={};i.uuid=this.uuid,i.type=this.type,i.name=this.name,i.castShadow=this.castShadow,i.receiveShadow=this.receiveShadow,i.visible=this.visible,i.frustumCulled=this.frustumCulled,i.renderOrder=this.renderOrder,i.static=this.static,i.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.pivot!==null&&(i.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(i.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(i.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(i.type=`InstancedMesh`,i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type=`BatchedMesh`,i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(o=>s(r({},o),{boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(o=>r({},o)),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(e),i.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON()));function r$1(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r$1(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let c=o.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){let d=c[l];r$1(e.shapes,d)}else r$1(e.shapes,c)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r$1(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(r$1(e.materials,this.material[c]));i.material=o}else i.material=r$1(e.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){let c=this.animations[o];i.animations.push(r$1(e.animations,c))}}if(t){let o=a(e.geometries),c=a(e.materials),l=a(e.textures),u=a(e.images),d=a(e.shapes),h=a(e.skeletons),f=a(e.animations),g=a(e.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),u.length>0&&(n.images=u),d.length>0&&(n.shapes=d),h.length>0&&(n.skeletons=h),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=i,n;function a(o){let c=[];for(let l in o){let u=o[l];delete u.metadata,c.push(u)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let i=e.children[n];this.add(i.clone())}return this}dispose(){this.dispatchEvent({type:`dispose`})}};Dt.DEFAULT_UP=new R(0,1,0);Dt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Dt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var tn=class extends Dt{constructor(){super(),this.isGroup=!0,this.type=`Group`}};var xf={type:`move`};var Ms=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new tn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new tn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new R,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new R),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new tn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new R,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new R,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:`connected`,data:e}),this}disconnect(e){return this.dispatchEvent({type:`disconnected`,data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,r=null,a=null,o=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!==`visible-blurred`){if(l&&e.hand){a=!0;for(let y of e.hand.values()){let m=t.getJointPose(y,n),p=this._getHandJoint(l,y);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}let u=l.joints[`index-finger-tip`],d=l.joints[`thumb-tip`],h=u.position.distanceTo(d.position);l.inputState.pinching&&h>.025?(l.inputState.pinching=!1,this.dispatchEvent({type:`pinchend`,handedness:e.handedness,target:this})):!l.inputState.pinching&&h<=.015&&(l.inputState.pinching=!0,this.dispatchEvent({type:`pinchstart`,handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1,c.eventsEnabled&&c.dispatchEvent({type:`gripUpdated`,data:e,target:this})));o!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(xf)))}return o!==null&&(o.visible=i!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new tn;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}};var ku={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074};var fi={h:0,s:0,l:0};var ia={h:0,s:0,l:0};function Sl(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}var Ae=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let i=e;i&&i.isColor?this.copy(i):typeof i==`number`?this.setHex(i):typeof i==`string`&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=It){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,We.colorSpaceToWorking(this,t),this}setRGB(e,t,n,i=We.workingColorSpace){return this.r=e,this.g=t,this.b=n,We.colorSpaceToWorking(this,i),this}setHSL(e,t,n,i=We.workingColorSpace){if(e=Mc(e,1),t=Xe(t,0,1),n=Xe(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=Sl(a,r,e+1/3),this.g=Sl(a,r,e),this.b=Sl(a,r,e-1/3)}return We.colorSpaceToWorking(this,i),this}setStyle(e,t=It){function n(r){r!==void 0&&parseFloat(r)<1&&Ne(`Color: Alpha component of `+e+` will be ignored.`)}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,a=i[1],o=i[2];switch(a){case`rgb`:case`rgba`:if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case`hsl`:case`hsla`:if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:Ne(`Color: Unknown color model `+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=i[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);Ne(`Color: Invalid hex color `+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=It){let n=ku[e.toLowerCase()];return n!==void 0?this.setHex(n,t):Ne(`Color: Unknown color `+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ii(e.r),this.g=ii(e.g),this.b=ii(e.b),this}copyLinearToSRGB(e){return this.r=ps(e.r),this.g=ps(e.g),this.b=ps(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=It){return We.workingToColorSpace(jt.copy(this),e),Math.round(Xe(jt.r*255,0,255))*65536+Math.round(Xe(jt.g*255,0,255))*256+Math.round(Xe(jt.b*255,0,255))}getHexString(e=It){return(`000000`+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=We.workingColorSpace){We.workingToColorSpace(jt.copy(this),t);let n=jt.r,i=jt.g,r=jt.b,a=Math.max(n,i,r),o=Math.min(n,i,r),c,l,u=(o+a)/2;if(o===a)c=0,l=0;else{let d=a-o;switch(l=u<=.5?d/(a+o):d/(2-a-o),a){case n:c=(i-r)/d+(i<r?6:0);break;case i:c=(r-n)/d+2;break;case r:c=(n-i)/d+4}c/=6}return e.h=c,e.s=l,e.l=u,e}getRGB(e,t=We.workingColorSpace){return We.workingToColorSpace(jt.copy(this),t),e.r=jt.r,e.g=jt.g,e.b=jt.b,e}getStyle(e=It){We.workingToColorSpace(jt.copy(this),e);let t=jt.r,n=jt.g,i=jt.b;return e!==It?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(fi),this.setHSL(fi.h+e,fi.s+t,fi.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(fi),e.getHSL(ia);let n=Qs(fi.h,ia.h,t),i=Qs(fi.s,ia.s,t),r=Qs(fi.l,ia.l,t);return this.setHSL(n,i,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,i=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*i,this.g=r[1]*t+r[4]*n+r[7]*i,this.b=r[2]*t+r[5]*n+r[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}};var jt=new Ae;Ae.NAMES=ku;var rr=class extends Dt{constructor(){super(),this.isScene=!0,this.type=`Scene`,this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new bn,this.environmentIntensity=1,this.environmentRotation=new bn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`observe`,{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}};var Cn=new R;var Kn=new R;var Ml=new R;var Jn=new R;var es=new R;var ts=new R;var Lh=new R;var El=new R;var Tl=new R;var wl=new R;var Al=new Et;var Cl=new Et;var Rl=new Et;var ti=class s{constructor(e=new R,t=new R,n=new R){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),Cn.subVectors(e,t),i.cross(Cn);let r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(e,t,n,i,r){Cn.subVectors(i,t),Kn.subVectors(n,t),Ml.subVectors(e,t);let a=Cn.dot(Cn),o=Cn.dot(Kn),c=Cn.dot(Ml),l=Kn.dot(Kn),u=Kn.dot(Ml),d=a*l-o*o;if(d===0)return r.set(0,0,0),null;let h=1/d,f=(l*c-o*u)*h,g=(a*u-o*c)*h;return r.set(1-f-g,g,f)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,Jn)===null?!1:Jn.x>=0&&Jn.y>=0&&Jn.x+Jn.y<=1}static getInterpolation(e,t,n,i,r,a,o,c){return this.getBarycoord(e,t,n,i,Jn)===null?(c.x=0,c.y=0,`z`in c&&(c.z=0),`w`in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,Jn.x),c.addScaledVector(a,Jn.y),c.addScaledVector(o,Jn.z),c)}static getInterpolatedAttribute(e,t,n,i,r,a){return Al.setScalar(0),Cl.setScalar(0),Rl.setScalar(0),Al.fromBufferAttribute(e,t),Cl.fromBufferAttribute(e,n),Rl.fromBufferAttribute(e,i),a.setScalar(0),a.addScaledVector(Al,r.x),a.addScaledVector(Cl,r.y),a.addScaledVector(Rl,r.z),a}static isFrontFacing(e,t,n,i){return Cn.subVectors(n,t),Kn.subVectors(e,t),Cn.cross(Kn).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Cn.subVectors(this.c,this.b),Kn.subVectors(this.a,this.b),Cn.cross(Kn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return s.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return s.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,r){return s.getInterpolation(e,this.a,this.b,this.c,t,n,i,r)}containsPoint(e){return s.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return s.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,i=this.b,r=this.c,a,o;es.subVectors(i,n),ts.subVectors(r,n),El.subVectors(e,n);let c=es.dot(El),l=ts.dot(El);if(c<=0&&l<=0)return t.copy(n);Tl.subVectors(e,i);let u=es.dot(Tl),d=ts.dot(Tl);if(u>=0&&d<=u)return t.copy(i);let h=c*d-u*l;if(h<=0&&c>=0&&u<=0)return a=c/(c-u),t.copy(n).addScaledVector(es,a);wl.subVectors(e,r);let f=es.dot(wl),g=ts.dot(wl);if(g>=0&&f<=g)return t.copy(r);let y=f*l-c*g;if(y<=0&&l>=0&&g<=0)return o=l/(l-g),t.copy(n).addScaledVector(ts,o);let m=u*g-f*d;if(m<=0&&d-u>=0&&f-g>=0)return Lh.subVectors(r,i),o=(d-u)/(d-u+(f-g)),t.copy(i).addScaledVector(Lh,o);let p=1/(m+y+h);return a=y*p,o=h*p,t.copy(n).addScaledVector(es,a).addScaledVector(ts,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}};var Sn=class{constructor(e=new R(1/0,1/0,1/0),t=new R(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Rn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Rn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=Rn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute(`position`);if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Rn):Rn.fromBufferAttribute(r,a),Rn.applyMatrix4(e.matrixWorld),this.expandByPoint(Rn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),sa.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),sa.copy(n.boundingBox)),sa.applyMatrix4(e.matrixWorld),this.union(sa)}let i=e.children;for(let r=0,a=i.length;r<a;r++)this.expandByObject(i[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Rn),Rn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Xs),ra.subVectors(this.max,Xs),ns.subVectors(e.a,Xs),is.subVectors(e.b,Xs),ss.subVectors(e.c,Xs),pi.subVectors(is,ns),mi.subVectors(ss,is),Li.subVectors(ns,ss);let t=[0,-pi.z,pi.y,0,-mi.z,mi.y,0,-Li.z,Li.y,pi.z,0,-pi.x,mi.z,0,-mi.x,Li.z,0,-Li.x,-pi.y,pi.x,0,-mi.y,mi.x,0,-Li.y,Li.x,0];return!Pl(t,ns,is,ss,ra)||(t=[1,0,0,0,1,0,0,0,1],!Pl(t,ns,is,ss,ra))?!1:(aa.crossVectors(pi,mi),t=[aa.x,aa.y,aa.z],Pl(t,ns,is,ss,ra))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Rn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Rn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:($n[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),$n[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),$n[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),$n[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),$n[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),$n[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),$n[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),$n[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints($n),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}};var $n=[new R,new R,new R,new R,new R,new R,new R,new R];var Rn=new R;var sa=new Sn;var ns=new R;var is=new R;var ss=new R;var pi=new R;var mi=new R;var Li=new R;var Xs=new R;var ra=new R;var aa=new R;var Ni=new R;function Pl(s,e,t,n,i){for(let r=0,a=s.length-3;r<=a;r+=3){Ni.fromArray(s,r);let o=i.x*Math.abs(Ni.x)+i.y*Math.abs(Ni.y)+i.z*Math.abs(Ni.z),c=e.dot(Ni),l=t.dot(Ni),u=n.dot(Ni);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>o)return!1}return!0}var Pt=new R;var oa=new Se;var yf=0;var vt=class extends Dn{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError(`THREE.BufferAttribute: array should be a Typed Array.`);this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:yf++}),this.name=``,this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=bc,this.updateRanges=[],this.gpuType=On,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)oa.fromBufferAttribute(this,t),oa.applyMatrix3(e),this.setXY(t,oa.x,oa.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Pt.fromBufferAttribute(this,t),Pt.applyMatrix3(e),this.setXYZ(t,Pt.x,Pt.y,Pt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Pt.fromBufferAttribute(this,t),Pt.applyMatrix4(e),this.setXYZ(t,Pt.x,Pt.y,Pt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Pt.fromBufferAttribute(this,t),Pt.applyNormalMatrix(e),this.setXYZ(t,Pt.x,Pt.y,Pt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Pt.fromBufferAttribute(this,t),Pt.transformDirection(e),this.setXYZ(t,Pt.x,Pt.y,Pt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Pn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=ht(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Pn(t,this.array)),t}setX(e,t){return this.normalized&&(t=ht(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Pn(t,this.array)),t}setY(e,t){return this.normalized&&(t=ht(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Pn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=ht(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Pn(t,this.array)),t}setW(e,t){return this.normalized&&(t=ht(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=ht(t,this.array),n=ht(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=ht(t,this.array),n=ht(n,this.array),i=ht(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e*=this.itemSize,this.normalized&&(t=ht(t,this.array),n=ht(n,this.array),i=ht(i,this.array),r=ht(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:`dispose`})}};var ar=class extends vt{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var or=class extends vt{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var Ve=class extends vt{constructor(e,t,n){super(new Float32Array(e),t,n)}};var vf=new Sn;var Ys=new R;var Il=new R;var xi=class{constructor(e=new R,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):vf.setFromPoints(e).getCenter(n);let i=0;for(let r=0,a=e.length;r<a;r++)i=Math.max(i,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ys.subVectors(e,this.center);let t=Ys.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(Ys,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Il.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ys.copy(e.center).add(Il)),this.expandByPoint(Ys.copy(e.center).sub(Il))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}};var bf=0;var yn=new ft;var Dl=new Dt;var rs=new R;var fn=new Sn;var qs=new Sn;var zt=new R;var Qe=class s extends Dn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:bf++}),this.uuid=ni(),this.name=``,this.type=`BufferGeometry`,this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Wd(e)?or:ar)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Be().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return yn.makeRotationFromQuaternion(e),this.applyMatrix4(yn),this}rotateX(e){return yn.makeRotationX(e),this.applyMatrix4(yn),this}rotateY(e){return yn.makeRotationY(e),this.applyMatrix4(yn),this}rotateZ(e){return yn.makeRotationZ(e),this.applyMatrix4(yn),this}translate(e,t,n){return yn.makeTranslation(e,t,n),this.applyMatrix4(yn),this}scale(e,t,n){return yn.makeScale(e,t,n),this.applyMatrix4(yn),this}lookAt(e){return Dl.lookAt(e),Dl.updateMatrix(),this.applyMatrix4(Dl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(rs).negate(),this.translate(rs.x,rs.y,rs.z),this}setFromPoints(e){let t=this.getAttribute(`position`);if(t===void 0){let n=[];for(let i=0,r=e.length;i<r;i++){let a=e[i];n.push(a.x,a.y,a.z||0)}this.setAttribute(`position`,new Ve(n,3))}else{let n=Math.min(e.length,t.count);for(let i=0;i<n;i++){let r=e[i];t.setXYZ(i,r.x,r.y,r.z||0)}e.length>t.count&&Ne(`BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry.`),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Sn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Oe(`BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.`,this),this.boundingBox.set(new R(-1/0,-1/0,-1/0),new R(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){let r=t[n];fn.setFromBufferAttribute(r),this.morphTargetsRelative?(zt.addVectors(this.boundingBox.min,fn.min),this.boundingBox.expandByPoint(zt),zt.addVectors(this.boundingBox.max,fn.max),this.boundingBox.expandByPoint(zt)):(this.boundingBox.expandByPoint(fn.min),this.boundingBox.expandByPoint(fn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Oe(`BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.`,this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new xi);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Oe(`BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.`,this),this.boundingSphere.set(new R,1/0);return}if(e){let n=this.boundingSphere.center;if(fn.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){let o=t[r];qs.setFromBufferAttribute(o),this.morphTargetsRelative?(zt.addVectors(fn.min,qs.min),fn.expandByPoint(zt),zt.addVectors(fn.max,qs.max),fn.expandByPoint(zt)):(fn.expandByPoint(qs.min),fn.expandByPoint(qs.max))}fn.getCenter(n);let i=0;for(let r=0,a=e.count;r<a;r++)zt.fromBufferAttribute(e,r),i=Math.max(i,n.distanceToSquared(zt));if(t)for(let r=0,a=t.length;r<a;r++){let o=t[r],c=this.morphTargetsRelative;for(let l=0,u=o.count;l<u;l++)zt.fromBufferAttribute(o,l),c&&(rs.fromBufferAttribute(e,l),zt.add(rs)),i=Math.max(i,n.distanceToSquared(zt))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&Oe(`BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.`,this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Oe(`BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)`);return}let n=t.position,i=t.normal,r=t.uv,a=this.getAttribute(`tangent`);(a===void 0||a.count!==n.count)&&(a=new vt(new Float32Array(4*n.count),4),this.setAttribute(`tangent`,a));let o=[],c=[];for(let x=0;x<n.count;x++)o[x]=new R,c[x]=new R;let l=new R,u=new R,d=new R,h=new Se,f=new Se,g=new Se,y=new R,m=new R;function p(x,T,P){l.fromBufferAttribute(n,x),u.fromBufferAttribute(n,T),d.fromBufferAttribute(n,P),h.fromBufferAttribute(r,x),f.fromBufferAttribute(r,T),g.fromBufferAttribute(r,P),u.sub(l),d.sub(l),f.sub(h),g.sub(h);let I=1/(f.x*g.y-g.x*f.y);isFinite(I)&&(y.copy(u).multiplyScalar(g.y).addScaledVector(d,-f.y).multiplyScalar(I),m.copy(d).multiplyScalar(f.x).addScaledVector(u,-g.x).multiplyScalar(I),o[x].add(y),o[T].add(y),o[P].add(y),c[x].add(m),c[T].add(m),c[P].add(m))}let S=this.groups;S.length===0&&(S=[{start:0,count:e.count}]);for(let x=0,T=S.length;x<T;++x){let P=S[x],I=P.start,F=P.count;for(let H=I,U=I+F;H<U;H+=3)p(e.getX(H+0),e.getX(H+1),e.getX(H+2))}let C=new R,v=new R,E=new R,M=new R;function w(x){E.fromBufferAttribute(i,x),M.copy(E);let T=o[x];C.copy(T),C.sub(E.multiplyScalar(E.dot(T))).normalize(),v.crossVectors(M,T);let I=v.dot(c[x])<0?-1:1;a.setXYZW(x,C.x,C.y,C.z,I)}for(let x=0,T=S.length;x<T;++x){let P=S[x],I=P.start,F=P.count;for(let H=I,U=I+F;H<U;H+=3)w(e.getX(H+0)),w(e.getX(H+1)),w(e.getX(H+2))}this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute(`position`);if(t!==void 0){let n=this.getAttribute(`normal`);if(n===void 0||n.count!==t.count)n=new vt(new Float32Array(t.count*3),3),this.setAttribute(`normal`,n);else for(let h=0,f=n.count;h<f;h++)n.setXYZ(h,0,0,0);let i=new R,r=new R,a=new R,o=new R,c=new R,l=new R,u=new R,d=new R;if(e)for(let h=0,f=e.count;h<f;h+=3){let g=e.getX(h+0),y=e.getX(h+1),m=e.getX(h+2);i.fromBufferAttribute(t,g),r.fromBufferAttribute(t,y),a.fromBufferAttribute(t,m),u.subVectors(a,r),d.subVectors(i,r),u.cross(d),o.fromBufferAttribute(n,g),c.fromBufferAttribute(n,y),l.fromBufferAttribute(n,m),o.add(u),c.add(u),l.add(u),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(y,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let h=0,f=t.count;h<f;h+=3)i.fromBufferAttribute(t,h+0),r.fromBufferAttribute(t,h+1),a.fromBufferAttribute(t,h+2),u.subVectors(a,r),d.subVectors(i,r),u.cross(d),n.setXYZ(h+0,u.x,u.y,u.z),n.setXYZ(h+1,u.x,u.y,u.z),n.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)zt.fromBufferAttribute(e,t),zt.normalize(),e.setXYZ(t,zt.x,zt.y,zt.z)}toNonIndexed(){function e(o,c){let l=o.array,u=o.itemSize,d=o.normalized,h=new l.constructor(c.length*u),f=0,g=0;for(let y=0,m=c.length;y<m;y++){o.isInterleavedBufferAttribute?f=c[y]*o.data.stride+o.offset:f=c[y]*u;for(let p=0;p<u;p++)h[g++]=l[f++]}return new vt(h,u,d)}if(this.index===null)return Ne(`BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed.`),this;let t=new s,n=this.index.array,i=this.attributes;for(let o in i){let c=i[o],l=e(c,n);t.setAttribute(o,l)}let r=this.morphAttributes;for(let o in r){let c=[],l=r[o];for(let u=0,d=l.length;u<d;u++){let h=l[u],f=e(h,n);c.push(f)}t.morphAttributes[o]=c}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,c=a.length;o<c;o++){let l=a[o];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:`BufferGeometry`,generator:`BufferGeometry.toJSON`}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?`BufferGeometry`:this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let c in n){let l=n[c];e.data.attributes[c]=l.toJSON(e.data)}let i={},r=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],u=[];for(let d=0,h=l.length;d<h;d++){let f=l[d];u.push(f.toJSON(e.data))}u.length>0&&(i[c]=u,r=!0)}r&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let i=e.attributes;for(let l in i){let u=i[l];this.setAttribute(l,u.clone(t))}let r=e.morphAttributes;for(let l in r){let u=[],d=r[l];for(let h=0,f=d.length;h<f;h++)u.push(d[h].clone(t));this.morphAttributes[l]=u}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let l=0,u=a.length;l<u;l++){let d=a[l];this.addGroup(d.start,d.count,d.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:`dispose`})}};var Va=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=bc,this.updateRanges=[],this.version=0,this.uuid=ni()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,r=this.stride;i<r;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ni()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ni()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer)));let t={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return t.usage=this.usage,t}};var Qt=new R;var lr=class s{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name=``,this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Qt.fromBufferAttribute(this,t),Qt.applyMatrix4(e),this.setXYZ(t,Qt.x,Qt.y,Qt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Qt.fromBufferAttribute(this,t),Qt.applyNormalMatrix(e),this.setXYZ(t,Qt.x,Qt.y,Qt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Qt.fromBufferAttribute(this,t),Qt.transformDirection(e),this.setXYZ(t,Qt.x,Qt.y,Qt.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=Pn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=ht(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=ht(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=ht(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=ht(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=ht(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Pn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Pn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Pn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Pn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=ht(t,this.array),n=ht(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=ht(t,this.array),n=ht(n,this.array),i=ht(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=ht(t,this.array),n=ht(n,this.array),i=ht(i,this.array),r=ht(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=r,this}clone(e){if(e===void 0){ir(`InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.`);let t=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return new vt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new s(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){ir(`InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.`);let t=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}};var Ll=new R;var Sf=new R;var Mf=new Be;var en=class{constructor(e=new R(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let i=Ll.subVectors(n,t).cross(Sf.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let i=e.delta(Ll),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let a=-(e.start.dot(this.normal)+this.constant)/r;return n===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(i,a)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||Mf.getNormalMatrix(e),i=this.coplanarPoint(Ll).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}};var Ef=0;var nn=class extends Dn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Ef++}),this.uuid=ni(),this.name=``,this.type=`Material`,this.blending=Us,this.side=Wn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=sc,this.blendDst=rc,this.blendEquation=Gi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ae(0,0,0),this.blendAlpha=0,this.depthFunc=gs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Cu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ra,this.stencilZFail=Ra,this.stencilZPass=Ra,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){Ne(`Material: parameter '${t}' has value of undefined.`);continue}let i=this[t];if(i===void 0){Ne(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector2&&n&&n.isVector2||i&&i.isEuler&&n&&n.isEuler||i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e==`string`;t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:`Material`,generator:`Material.toJSON`}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){let a=[];for(let o in r){let c=r[o];delete c.metadata,a.push(c)}return a}if(t){let r=i(e.textures),a=i(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Ae().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(n=>new en().fromJSON(n))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors==`number`?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new Se().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Se().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let i=t.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:`dispose`})}set needsUpdate(e){e===!0&&this.version++}};var Es=class extends nn{constructor(e){super(),this.isSpriteMaterial=!0,this.type=`SpriteMaterial`,this.color=new Ae(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}};var as;var js=new R;var os=new R;var ls=new R;var cs=new Se;var Zs=new Se;var zu=new ft;var la=new R;var Ks=new R;var ca=new R;var Nh=new Se;var Nl=new Se;var Uh=new Se;var cr=class extends Dt{constructor(e=new Es){if(super(),this.isSprite=!0,this.type=`Sprite`,as===void 0){as=new Qe;let n=new Va(new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),5);as.setIndex([0,1,2,0,2,3]),as.setAttribute(`position`,new lr(n,3,0,!1)),as.setAttribute(`uv`,new lr(n,2,3,!1))}this.geometry=as,this.material=e,this.center=new Se(.5,.5),this.count=1}intersectsFrustum(e){return e.intersectsSprite(this)}raycast(e,t){e.camera===null&&Oe(`Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.`),os.setFromMatrixScale(this.matrixWorld),zu.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),ls.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&os.multiplyScalar(-ls.z);let n=this.material.rotation,i,r;n!==0&&(r=Math.cos(n),i=Math.sin(n));let a=this.center;ha(la.set(-.5,-.5,0),ls,a,os,i,r),ha(Ks.set(.5,-.5,0),ls,a,os,i,r),ha(ca.set(.5,.5,0),ls,a,os,i,r),Nh.set(0,0),Nl.set(1,0),Uh.set(1,1);let o=e.ray.intersectTriangle(la,Ks,ca,!1,js);if(o===null&&(ha(Ks.set(-.5,.5,0),ls,a,os,i,r),Nl.set(0,1),o=e.ray.intersectTriangle(la,ca,Ks,!1,js),o===null))return;let c=e.ray.origin.distanceTo(js);c<e.near||c>e.far||t.push({distance:c,point:js.clone(),uv:ti.getInterpolation(js,la,Ks,ca,Nh,Nl,Uh,new Se),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}};function ha(s,e,t,n,i,r){cs.subVectors(s,t).addScalar(.5).multiply(n),i!==void 0?(Zs.x=r*cs.x-i*cs.y,Zs.y=i*cs.x+r*cs.y):Zs.copy(cs),s.copy(e),s.x+=Zs.x,s.y+=Zs.y,s.applyMatrix4(zu)}var Qn=new R;var Ul=new R;var ua=new R;var da=new R;var si=class{constructor(e=new R,t=new R(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Qn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Qn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Qn.copy(this.origin).addScaledVector(this.direction,t),Qn.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){Ul.copy(e).add(t).multiplyScalar(.5),ua.copy(t).sub(e).normalize(),da.copy(this.origin).sub(Ul);let r=e.distanceTo(t)*.5,a=-this.direction.dot(ua),o=da.dot(this.direction),c=-da.dot(ua),l=da.lengthSq(),u=Math.abs(1-a*a),d,h,f,g;if(u>0)if(d=a*c-o,h=a*o-c,g=r*u,d>=0)if(h>=-g)if(h<=g){let y=1/u;d*=y,h*=y,f=d*(d+a*h+2*o)+h*(a*d+h+2*c)+l}else h=r,d=Math.max(0,-(a*h+o)),f=-d*d+h*(h+2*c)+l;else h=-r,d=Math.max(0,-(a*h+o)),f=-d*d+h*(h+2*c)+l;else h<=-g?(d=Math.max(0,-(-a*r+o)),h=d>0?-r:Math.min(Math.max(-r,-c),r),f=-d*d+h*(h+2*c)+l):h<=g?(d=0,h=Math.min(Math.max(-r,-c),r),f=h*(h+2*c)+l):(d=Math.max(0,-(a*r+o)),h=d>0?r:Math.min(Math.max(-r,-c),r),f=-d*d+h*(h+2*c)+l);else h=a>0?-r:r,d=Math.max(0,-(a*h+o)),f=-d*d+h*(h+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,d),i&&i.copy(Ul).addScaledVector(ua,h),f}intersectSphere(e,t){if(e.radius<0)return null;Qn.subVectors(e.center,this.origin);let n=Qn.dot(this.direction),i=Qn.dot(Qn)-n*n,r=e.radius*e.radius;if(i>r)return null;let a=Math.sqrt(r-i),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,r,a,o,c,l=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,h=this.origin;return l>=0?(n=(e.min.x-h.x)*l,i=(e.max.x-h.x)*l):(n=(e.max.x-h.x)*l,i=(e.min.x-h.x)*l),u>=0?(r=(e.min.y-h.y)*u,a=(e.max.y-h.y)*u):(r=(e.max.y-h.y)*u,a=(e.min.y-h.y)*u),n>a||r>i||((r>n||isNaN(n))&&(n=r),(a<i||isNaN(i))&&(i=a),d>=0?(o=(e.min.z-h.z)*d,c=(e.max.z-h.z)*d):(o=(e.max.z-h.z)*d,c=(e.min.z-h.z)*d),n>c||o>i)||((o>n||n!==n)&&(n=o),(c<i||i!==i)&&(i=c),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,Qn)!==null}intersectTriangle(e,t,n,i,r){let a=this.origin,o=this.direction,c=o.x,l=o.y,u=o.z,d=e.x-a.x,h=e.y-a.y,f=e.z-a.z,g=t.x-a.x,y=t.y-a.y,m=t.z-a.z,p=n.x-a.x,S=n.y-a.y,C=n.z-a.z,v=Math.abs(c),E=Math.abs(l),M=Math.abs(u),w,x,T,P,I,F,H,U,z,J,W,re;if(v>=E&&v>=M?(T=c,F=d,z=g,re=p,c>=0?(w=l,x=u,P=h,I=f,H=y,U=m,J=S,W=C):(w=u,x=l,P=f,I=h,H=m,U=y,J=C,W=S)):E>=M?(T=l,F=h,z=y,re=S,l>=0?(w=u,x=c,P=f,I=d,H=m,U=g,J=C,W=p):(w=c,x=u,P=d,I=f,H=g,U=m,J=p,W=C)):(T=u,F=f,z=m,re=C,u>=0?(w=c,x=l,P=d,I=h,H=g,U=y,J=p,W=S):(w=l,x=c,P=h,I=d,H=y,U=g,J=S,W=p)),T===0)return null;let Y=w/T,te=x/T,ie=1/T,Ue=P-Y*F,De=I-te*F,mt=H-Y*z,et=U-te*z,it=J-Y*re,q=W-te*re,ee=it*et-q*mt,Ee=Ue*q-De*it,ke=mt*De-et*Ue;if(i){if(ee<0||Ee<0||ke<0)return null}else if((ee<0||Ee<0||ke<0)&&(ee>0||Ee>0||ke>0))return null;let ye=ee+Ee+ke;if(ye===0)return null;let qe=ie*(ee*F+Ee*z+ke*re);return(ye>0?qe<0:qe>0)?null:this.at(qe/ye,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}};var Bi=class extends nn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type=`MeshBasicMaterial`,this.color=new Ae(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new bn,this.combine=co,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap=`round`,this.wireframeLinejoin=`round`,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var Fh=new ft;var Ui=new si;var fa=new xi;var Oh=new R;var pa=new R;var ma=new R;var ga=new R;var Fl=new R;var _a=new R;var Bh=new R;var xa=new R;var Lt=class extends Dt{constructor(e=new Qe,t=new Bi){super(),this.isMesh=!0,this.type=`Mesh`,this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){let o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){let n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(i,e);let o=this.morphTargetInfluences;if(r&&o){_a.set(0,0,0);for(let c=0,l=r.length;c<l;c++){let u=o[c],d=r[c];u!==0&&(Fl.fromBufferAttribute(d,e),a?_a.addScaledVector(Fl,u):_a.addScaledVector(Fl.sub(t),u))}t.add(_a)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),fa.copy(n.boundingSphere),fa.applyMatrix4(r),Ui.copy(e.ray).recast(e.near),!(fa.containsPoint(Ui.origin)===!1&&(Ui.intersectSphere(fa,Oh)===null||Ui.origin.distanceToSquared(Oh)>(e.far-e.near)**2))&&(Fh.copy(r).invert(),Ui.copy(e.ray).applyMatrix4(Fh),(n.boundingBox===null||Ui.intersectsBox(n.boundingBox)!==!1)&&this._computeIntersections(e,t,Ui)))}_computeIntersections(e,t,n){let i,r=this.geometry,a=this.material,o=r.index,c=r.attributes.position,l=r.attributes.uv,u=r.attributes.uv1,d=r.attributes.normal,h=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,y=h.length;g<y;g++){let m=h[g],p=a[m.materialIndex],S=Math.max(m.start,f.start),C=Math.min(o.count,Math.min(m.start+m.count,f.start+f.count));for(let v=S,E=C;v<E;v+=3){let M=o.getX(v),w=o.getX(v+1),x=o.getX(v+2);i=ya(this,p,e,n,l,u,d,M,w,x),i&&(i.faceIndex=Math.floor(v/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{let g=Math.max(0,f.start),y=Math.min(o.count,f.start+f.count);for(let m=g,p=y;m<p;m+=3){let S=o.getX(m),C=o.getX(m+1),v=o.getX(m+2);i=ya(this,a,e,n,l,u,d,S,C,v),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}else if(c!==void 0)if(Array.isArray(a))for(let g=0,y=h.length;g<y;g++){let m=h[g],p=a[m.materialIndex],S=Math.max(m.start,f.start),C=Math.min(c.count,Math.min(m.start+m.count,f.start+f.count));for(let v=S,E=C;v<E;v+=3){let M=v,w=v+1,x=v+2;i=ya(this,p,e,n,l,u,d,M,w,x),i&&(i.faceIndex=Math.floor(v/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{let g=Math.max(0,f.start),y=Math.min(c.count,f.start+f.count);for(let m=g,p=y;m<p;m+=3){let S=m,C=m+1,v=m+2;i=ya(this,a,e,n,l,u,d,S,C,v),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}}};function Tf(s,e,t,n,i,r,a,o){let c;if(e.side===rn?c=n.intersectTriangle(a,r,i,!0,o):c=n.intersectTriangle(i,r,a,e.side===Wn,o),c===null)return null;xa.copy(o),xa.applyMatrix4(s.matrixWorld);let l=t.ray.origin.distanceTo(xa);return l<t.near||l>t.far?null:{distance:l,point:xa.clone(),object:s}}function ya(s,e,t,n,i,r,a,o,c,l){s.getVertexPosition(o,pa),s.getVertexPosition(c,ma),s.getVertexPosition(l,ga);let u=Tf(s,e,t,n,pa,ma,ga,Bh);if(u){let d=new R;ti.getBarycoord(Bh,pa,ma,ga,d),i&&(u.uv=ti.getInterpolatedAttribute(i,o,c,l,d,new Se)),r&&(u.uv1=ti.getInterpolatedAttribute(r,o,c,l,d,new Se)),a&&(u.normal=ti.getInterpolatedAttribute(a,o,c,l,d,new R),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));let h={a:o,b:c,c:l,normal:new R,materialIndex:0};ti.getNormal(pa,ma,ga,h.normal),u.face=h,u.barycoord=d}return u}var Ga=class extends Zt{constructor(e=null,t=1,n=1,i,r,a,o,c,l=Ht,u=Ht,d,h){super(null,a,o,c,l,u,i,r,d,h),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Fi=new xi;var wf=new Se(.5,.5);var va=new R;var Ts=class{constructor(e=new en,t=new en,n=new en,i=new en,r=new en,a=new en){this.planes=[e,t,n,i,r,a]}set(e,t,n,i,r,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(i),o[4].copy(r),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=In,n=!1){let i=this.planes,r=e.elements,a=r[0],o=r[1],c=r[2],l=r[3],u=r[4],d=r[5],h=r[6],f=r[7],g=r[8],y=r[9],m=r[10],p=r[11],S=r[12],C=r[13],v=r[14],E=r[15];if(i[0].setComponents(l-a,f-u,p-g,E-S).normalize(),i[1].setComponents(l+a,f+u,p+g,E+S).normalize(),i[2].setComponents(l+o,f+d,p+y,E+C).normalize(),i[3].setComponents(l-o,f-d,p-y,E-C).normalize(),n)i[4].setComponents(c,h,m,v).normalize(),i[5].setComponents(l-c,f-h,p-m,E-v).normalize();else if(i[4].setComponents(l-c,f-h,p-m,E-v).normalize(),t===In)i[5].setComponents(l+c,f+h,p+m,E+v).normalize();else if(t===_s)i[5].setComponents(c,h,m,v).normalize();else throw new Error(`THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: `+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Fi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Fi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Fi)}intersectsSprite(e){Fi.center.set(0,0,0);return Fi.radius=.7071067811865476+wf.distanceTo(e.center),Fi.applyMatrix4(e.matrixWorld),this.intersectsSphere(Fi)}intersectsSphere(e){let t=this.planes,n=e.center,i=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let i=t[n];if(va.x=i.normal.x>0?e.max.x:e.min.x,va.y=i.normal.y>0?e.max.y:e.min.y,va.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(va)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var Ut=class extends nn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type=`LineBasicMaterial`,this.color=new Ae(16777215),this.map=null,this.linewidth=1,this.linecap=`round`,this.linejoin=`round`,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}};var Wa=new R;var Xa=new R;var kh=new ft;var Js=new si;var ba=new xi;var Ol=new R;var zh=new R;var ki=class extends Dt{constructor(e=new Qe,t=new Ut){super(),this.isLine=!0,this.type=`Line`,this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let i=1,r=t.count;i<r;i++)Wa.fromBufferAttribute(t,i-1),Xa.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=Wa.distanceTo(Xa);e.setAttribute(`lineDistance`,new Ve(n,1))}else Ne(`Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.`);return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,i=this.matrixWorld,r=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ba.copy(n.boundingSphere),ba.applyMatrix4(i),ba.radius+=r,e.ray.intersectsSphere(ba)===!1)return;kh.copy(i).invert(),Js.copy(e.ray).applyMatrix4(kh);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=this.isLineSegments?2:1,u=n.index,h=n.attributes.position;if(u!==null){let f=Math.max(0,a.start),g=Math.min(u.count,a.start+a.count);for(let y=f,m=g-1;y<m;y+=l){let p=u.getX(y),S=u.getX(y+1),C=Sa(this,e,Js,c,p,S,y);C&&t.push(C)}if(this.isLineLoop){let y=u.getX(g-1),m=u.getX(f),p=Sa(this,e,Js,c,y,m,g-1);p&&t.push(p)}}else{let f=Math.max(0,a.start),g=Math.min(h.count,a.start+a.count);for(let y=f,m=g-1;y<m;y+=l){let p=Sa(this,e,Js,c,y,y+1,y);p&&t.push(p)}if(this.isLineLoop){let y=Sa(this,e,Js,c,g-1,f,g-1);y&&t.push(y)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){let o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function Sa(s,e,t,n,i,r,a){let o=s.geometry.attributes.position;if(Wa.fromBufferAttribute(o,i),Xa.fromBufferAttribute(o,r),t.distanceSqToSegment(Wa,Xa,Ol,zh)>n)return;Ol.applyMatrix4(s.matrixWorld);let l=e.ray.origin.distanceTo(Ol);if(!(l<e.near||l>e.far))return{distance:l,point:zh.clone().applyMatrix4(s.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:s}}var Hh=new R;var Vh=new R;var sn=class extends ki{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type=`LineSegments`}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let i=0,r=t.count;i<r;i+=2)Hh.fromBufferAttribute(t,i),Vh.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+Hh.distanceTo(Vh);e.setAttribute(`lineDistance`,new Ve(n,1))}else Ne(`LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.`);return this}};var pn=class extends nn{constructor(e){super(),this.isPointsMaterial=!0,this.type=`PointsMaterial`,this.color=new Ae(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}};var Gh=new ft;var ql=new si;var Ma=new xi;var Ea=new R;var Ln=class extends Dt{constructor(e=new Qe,t=new pn){super(),this.isPoints=!0,this.type=`Points`,this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,i=this.matrixWorld,r=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ma.copy(n.boundingSphere),Ma.applyMatrix4(i),Ma.radius+=r,e.ray.intersectsSphere(Ma)===!1)return;Gh.copy(i).invert(),ql.copy(e.ray).applyMatrix4(Gh);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=n.index,d=n.attributes.position;if(l!==null){let h=Math.max(0,a.start),f=Math.min(l.count,a.start+a.count);for(let g=h,y=f;g<y;g++){let m=l.getX(g);Ea.fromBufferAttribute(d,m),Wh(Ea,m,c,i,e,t,this)}}else{let h=Math.max(0,a.start),f=Math.min(d.count,a.start+a.count);for(let g=h,y=f;g<y;g++)Ea.fromBufferAttribute(d,g),Wh(Ea,g,c,i,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){let o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function Wh(s,e,t,n,i,r,a){let o=ql.distanceSqToPoint(s);if(o<t){let c=new R;ql.closestPointToPoint(s,c),c.applyMatrix4(n);let l=i.ray.origin.distanceTo(c);if(l<i.near||l>i.far)return;r.push({distance:l,distanceToRay:Math.sqrt(o),point:c,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}var hr=class extends Zt{constructor(e=[],t=Ti,n,i,r,a,o,c,l,u){super(e,t,n,i,r,a,o,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}};var ws=class extends Zt{constructor(e,t,n,i,r,a,o,c,l){super(e,t,n,i,r,a,o,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}};var yi=class extends Zt{constructor(e,t,n=Fn,i,r,a,o=Ht,c=Ht,l,u=Vn,d=1){if(u!==Vn&&u!==Ai)throw new Error(`THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat`);super({width:e,height:t,depth:d},i,r,a,o,c,u,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new bs(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}};var Ya=class extends yi{constructor(e,t=Fn,n=Ti,i,r,a=Ht,o=Ht,c,l=Vn){let u={width:e,height:e,depth:1},d=[u,u,u,u,u,u];super(e,e,t,n,i,r,a,o,c,l),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}};var ur=class extends Zt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}};var ri=class s extends Qe{constructor(e=1,t=1,n=1,i=1,r=1,a=1){super(),this.type=`BoxGeometry`,this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:r,depthSegments:a};let o=this;i=Math.floor(i),r=Math.floor(r),a=Math.floor(a);let c=[],l=[],u=[],d=[],h=0,f=0;g(`z`,`y`,`x`,-1,-1,n,t,e,a,r,0),g(`z`,`y`,`x`,1,-1,n,t,-e,a,r,1),g(`x`,`z`,`y`,1,1,e,n,t,i,a,2),g(`x`,`z`,`y`,1,-1,e,n,-t,i,a,3),g(`x`,`y`,`z`,1,-1,e,t,n,i,r,4),g(`x`,`y`,`z`,-1,-1,e,t,-n,i,r,5),this.setIndex(c),this.setAttribute(`position`,new Ve(l,3)),this.setAttribute(`normal`,new Ve(u,3)),this.setAttribute(`uv`,new Ve(d,2));function g(y,m,p,S,C,v,E,M,w,x,T){let P=v/w,I=E/x,F=v/2,H=E/2,U=M/2,z=w+1,J=x+1,W=0,re=0,Y=new R;for(let te=0;te<J;te++){let ie=te*I-H;for(let Ue=0;Ue<z;Ue++)Y[y]=(Ue*P-F)*S,Y[m]=ie*C,Y[p]=U,l.push(Y.x,Y.y,Y.z),Y[y]=0,Y[m]=0,Y[p]=M>0?1:-1,u.push(Y.x,Y.y,Y.z),d.push(Ue/w),d.push(1-te/x),W+=1}for(let te=0;te<x;te++)for(let ie=0;ie<w;ie++){let Ue=h+ie+z*te,De=h+ie+z*(te+1),mt=h+(ie+1)+z*(te+1),et=h+(ie+1)+z*te;c.push(Ue,De,et),c.push(De,mt,et),re+=6}o.addGroup(f,re,T),f+=re,h+=W}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};var As=class s extends Qe{constructor(e=1,t=1,n=1,i=32,r=1,a=!1,o=0,c=Math.PI*2){super(),this.type=`CylinderGeometry`,this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:c};let l=this;i=Math.floor(i),r=Math.floor(r);let u=[],d=[],h=[],f=[],g=0,y=[],m=n/2,p=0;S(),a===!1&&(e>0&&C(!0),t>0&&C(!1)),this.setIndex(u),this.setAttribute(`position`,new Ve(d,3)),this.setAttribute(`normal`,new Ve(h,3)),this.setAttribute(`uv`,new Ve(f,2));function S(){let v=new R,E=new R,M=0,w=(t-e)/n;for(let x=0;x<=r;x++){let T=[],P=x/r,I=P*(t-e)+e;for(let F=0;F<=i;F++){let H=F/i,U=H*c+o,z=Math.sin(U),J=Math.cos(U);E.x=I*z,E.y=-P*n+m,E.z=I*J,d.push(E.x,E.y,E.z),v.set(z,w,J).normalize(),h.push(v.x,v.y,v.z),f.push(H,1-P),T.push(g++)}y.push(T)}for(let x=0;x<i;x++)for(let T=0;T<r;T++){let P=y[T][x],I=y[T+1][x],F=y[T+1][x+1],H=y[T][x+1];(e>0||T!==0)&&(u.push(P,I,H),M+=3),(t>0||T!==r-1)&&(u.push(I,F,H),M+=3)}l.addGroup(p,M,0),p+=M}function C(v){let E=g,M=new Se,w=new R,x=0,T=v===!0?e:t,P=v===!0?1:-1;for(let F=1;F<=i;F++)d.push(0,m*P,0),h.push(0,P,0),f.push(.5,.5),g++;let I=g;for(let F=0;F<=i;F++){let U=F/i*c+o,z=Math.cos(U),J=Math.sin(U);w.x=T*J,w.y=m*P,w.z=T*z,d.push(w.x,w.y,w.z),h.push(0,P,0),M.x=z*.5+.5,M.y=J*.5*P+.5,f.push(M.x,M.y),g++}for(let F=0;F<i;F++){let H=E+F,U=I+F;v===!0?u.push(U,U+1,H):u.push(U+1,U,H),x+=3}l.addGroup(p,x,v===!0?1:2),p+=x}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}};var Cs=class s extends As{constructor(e=1,t=1,n=32,i=1,r=!1,a=0,o=Math.PI*2){super(0,e,t,n,i,r,a,o),this.type=`ConeGeometry`,this.parameters={radius:e,height:t,radialSegments:n,heightSegments:i,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(e){return new s(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}};var Rs=class s extends Qe{constructor(e=[],t=[],n=1,i=0){super(),this.type=`PolyhedronGeometry`,this.parameters={vertices:e,indices:t,radius:n,detail:i};let r=[],a=[];o(i),l(n),u(),this.setAttribute(`position`,new Ve(r,3)),this.setAttribute(`normal`,new Ve(r.slice(),3)),this.setAttribute(`uv`,new Ve(a,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function o(S){let C=new R,v=new R,E=new R;for(let M=0;M<t.length;M+=3)f(t[M+0],C),f(t[M+1],v),f(t[M+2],E),c(C,v,E,S)}function c(S,C,v,E){let M=E+1,w=[];for(let x=0;x<=M;x++){w[x]=[];let T=S.clone().lerp(v,x/M),P=C.clone().lerp(v,x/M),I=M-x;for(let F=0;F<=I;F++)F===0&&x===M?w[x][F]=T:w[x][F]=T.clone().lerp(P,F/I)}for(let x=0;x<M;x++)for(let T=0;T<2*(M-x)-1;T++){let P=Math.floor(T/2);T%2===0?(h(w[x][P+1]),h(w[x+1][P]),h(w[x][P])):(h(w[x][P+1]),h(w[x+1][P+1]),h(w[x+1][P]))}}function l(S){let C=new R;for(let v=0;v<r.length;v+=3)C.x=r[v+0],C.y=r[v+1],C.z=r[v+2],C.normalize().multiplyScalar(S),r[v+0]=C.x,r[v+1]=C.y,r[v+2]=C.z}function u(){let S=new R;for(let C=0;C<r.length;C+=3){S.x=r[C+0],S.y=r[C+1],S.z=r[C+2];let v=m(S)/2/Math.PI+.5,E=p(S)/Math.PI+.5;a.push(v,1-E)}g(),d()}function d(){for(let S=0;S<a.length;S+=6){let C=a[S+0],v=a[S+2],E=a[S+4];Math.max(C,v,E)>.9&&Math.min(C,v,E)<.1&&(C<.2&&(a[S+0]+=1),v<.2&&(a[S+2]+=1),E<.2&&(a[S+4]+=1))}}function h(S){r.push(S.x,S.y,S.z)}function f(S,C){let v=S*3;C.x=e[v+0],C.y=e[v+1],C.z=e[v+2]}function g(){let S=new R,C=new R,v=new R,E=new R,M=new Se,w=new Se,x=new Se;for(let T=0,P=0;T<r.length;T+=9,P+=6){S.set(r[T+0],r[T+1],r[T+2]),C.set(r[T+3],r[T+4],r[T+5]),v.set(r[T+6],r[T+7],r[T+8]),M.set(a[P+0],a[P+1]),w.set(a[P+2],a[P+3]),x.set(a[P+4],a[P+5]),E.copy(S).add(C).add(v).divideScalar(3);let I=m(E);y(M,P+0,S,I),y(w,P+2,C,I),y(x,P+4,v,I)}}function y(S,C,v,E){E<0&&S.x===1&&(a[C]=S.x-1),v.x===0&&v.z===0&&(a[C]=E/2/Math.PI+.5)}function m(S){return Math.atan2(S.z,-S.x)}function p(S){return Math.atan2(-S.y,Math.sqrt(S.x*S.x+S.z*S.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.vertices,e.indices,e.radius,e.detail)}};var qa=class{constructor(){this.type=`Curve`,this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Ne(`Curve: .getPoint() not implemented.`)}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,i=this.getPoint(0),r=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),r+=n.distanceTo(i),t.push(r),i=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let n=this.getLengths(),i=0,r=n.length,a;t?a=t:a=e*n[r-1];let o=0,c=r-1,l;for(;o<=c;)if(i=Math.floor(o+(c-o)/2),l=n[i]-a,l<0)o=i+1;else if(l>0)c=i-1;else{c=i;break}if(i=c,n[i]===a)return i/(r-1);let u=n[i],h=n[i+1]-u,f=(a-u)/h;return(i+f)/(r-1)}getTangent(e,t){let i=e-1e-4,r=e+1e-4;i<0&&(i=0),r>1&&(r=1);let a=this.getPoint(i),o=this.getPoint(r),c=t||(a.isVector2?new Se:new R);return c.copy(o).sub(a).normalize(),c}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){let n=new R,i=[],r=[],a=[],o=new R,c=new ft;for(let f=0;f<=e;f++){let g=f/e;i[f]=this.getTangentAt(g,new R)}r[0]=new R,a[0]=new R;let l=Number.MAX_VALUE,u=Math.abs(i[0].x),d=Math.abs(i[0].y),h=Math.abs(i[0].z);u<=l&&(l=u,n.set(1,0,0)),d<=l&&(l=d,n.set(0,1,0)),h<=l&&n.set(0,0,1),o.crossVectors(i[0],n).normalize(),r[0].crossVectors(i[0],o),a[0].crossVectors(i[0],r[0]);for(let f=1;f<=e;f++){if(r[f]=r[f-1].clone(),a[f]=a[f-1].clone(),o.crossVectors(i[f-1],i[f]),o.length()>Number.EPSILON){o.normalize();let g=Math.acos(Xe(i[f-1].dot(i[f]),-1,1));r[f].applyMatrix4(c.makeRotationAxis(o,g))}a[f].crossVectors(i[f],r[f])}if(t===!0){let f=Math.acos(Xe(r[0].dot(r[e]),-1,1));f/=e,i[0].dot(o.crossVectors(r[0],r[e]))>0&&(f=-f);for(let g=1;g<=e;g++)r[g].applyMatrix4(c.makeRotationAxis(i[g],f*g)),a[g].crossVectors(i[g],r[g])}return{tangents:i,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.7,type:`Curve`,generator:`Curve.toJSON`}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}};function Ec(){let s=0,e=0,t=0,n=0;function i(r,a,o,c){s=r,e=o,t=-3*r+3*a-2*o-c,n=2*r-2*a+o+c}return{initCatmullRom:function(r,a,o,c,l){i(a,o,l*(o-r),l*(c-a))},initNonuniformCatmullRom:function(r,a,o,c,l,u,d){let h=(a-r)/l-(o-r)/(l+u)+(o-a)/u,f=(o-a)/u-(c-a)/(u+d)+(c-o)/d;h*=u,f*=u,i(a,o,h,f)},calc:function(r){let a=r*r,o=a*r;return s+e*r+t*a+n*o}}}var Xh=new R;var Yh=new R;var Bl=new Ec;var kl=new Ec;var zl=new Ec;var Ps=class extends qa{constructor(e=[],t=!1,n=`centripetal`,i=.5){super(),this.isCatmullRomCurve3=!0,this.type=`CatmullRomCurve3`,this.points=e,this.closed=t,this.curveType=n,this.tension=i}getPoint(e,t=new R){let n=t,i=this.points,r=i.length,a=(r-(this.closed?0:1))*e,o=Math.floor(a),c=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:c===0&&o===r-1&&(o=r-2,c=1);let l,u;this.closed||o>0?l=i[(o-1)%r]:(Yh.subVectors(i[0],i[1]).add(i[0]),l=Yh);let d=i[o%r],h=i[(o+1)%r];if(this.closed||o+2<r?u=i[(o+2)%r]:(Xh.subVectors(i[r-1],i[r-2]).add(i[r-1]),u=Xh),this.curveType===`centripetal`||this.curveType===`chordal`){let f=this.curveType===`chordal`?.5:.25,g=Math.pow(l.distanceToSquared(d),f),y=Math.pow(d.distanceToSquared(h),f),m=Math.pow(h.distanceToSquared(u),f);y<1e-4&&(y=1),g<1e-4&&(g=y),m<1e-4&&(m=y),Bl.initNonuniformCatmullRom(l.x,d.x,h.x,u.x,g,y,m),kl.initNonuniformCatmullRom(l.y,d.y,h.y,u.y,g,y,m),zl.initNonuniformCatmullRom(l.z,d.z,h.z,u.z,g,y,m)}else this.curveType===`catmullrom`&&(Bl.initCatmullRom(l.x,d.x,h.x,u.x,this.tension),kl.initCatmullRom(l.y,d.y,h.y,u.y,this.tension),zl.initCatmullRom(l.z,d.z,h.z,u.z,this.tension));return n.set(Bl.calc(c),kl.calc(c),zl.calc(c)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(i.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let i=this.points[t];e.points.push(i.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(new R().fromArray(i))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};var dr=class s extends Rs{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,i=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1];super(i,[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1],e,t),this.type=`IcosahedronGeometry`,this.parameters={radius:e,detail:t}}static fromJSON(e){return new s(e.radius,e.detail)}};var fr=class s extends Rs{constructor(e=1,t=0){super([1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2],e,t),this.type=`OctahedronGeometry`,this.parameters={radius:e,detail:t}}static fromJSON(e){return new s(e.radius,e.detail)}};var pr=class s extends Qe{constructor(e=1,t=1,n=1,i=1){super(),this.type=`PlaneGeometry`,this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};let r=e/2,a=t/2,o=Math.floor(n),c=Math.floor(i),l=o+1,u=c+1,d=e/o,h=t/c,f=[],g=[],y=[],m=[];for(let p=0;p<u;p++){let S=p*h-a;for(let C=0;C<l;C++){let v=C*d-r;g.push(v,-S,0),y.push(0,0,1),m.push(C/o),m.push(1-p/c)}}for(let p=0;p<c;p++)for(let S=0;S<o;S++){let C=S+l*p,v=S+l*(p+1),E=S+1+l*(p+1),M=S+1+l*p;f.push(C,v,M),f.push(v,E,M)}this.setIndex(f),this.setAttribute(`position`,new Ve(g,3)),this.setAttribute(`normal`,new Ve(y,3)),this.setAttribute(`uv`,new Ve(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.width,e.height,e.widthSegments,e.heightSegments)}};var Is=class s extends Qe{constructor(e=1,t=32,n=16,i=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type=`SphereGeometry`,this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let c=Math.min(a+o,Math.PI),l=0,u=[],d=new R,h=new R,f=[],g=[],y=[],m=[];for(let p=0;p<=n;p++){let S=[],C=p/n,v=a+C*o,E=e*Math.cos(v),M=Math.sqrt(e*e-E*E),w=0;p===0&&a===0?w=.5/t:p===n&&c===Math.PI&&(w=-.5/t);for(let x=0;x<=t;x++){let T=x/t,P=i+T*r;d.x=-M*Math.cos(P),d.y=E,d.z=M*Math.sin(P),g.push(d.x,d.y,d.z),h.copy(d).normalize(),y.push(h.x,h.y,h.z),m.push(T+w,1-C),S.push(l++)}u.push(S)}for(let p=0;p<n;p++)for(let S=0;S<t;S++){let C=u[p][S+1],v=u[p][S],E=u[p+1][S],M=u[p+1][S+1];(p!==0||a>0)&&f.push(C,v,M),(p!==n-1||c<Math.PI)&&f.push(v,E,M)}this.setIndex(f),this.setAttribute(`position`,new Ve(g,3)),this.setAttribute(`normal`,new Ve(y,3)),this.setAttribute(`uv`,new Ve(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var mr=class s extends Rs{constructor(e=1,t=0){super([1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],[2,1,0,0,3,2,1,3,0,2,3,1],e,t),this.type=`TetrahedronGeometry`,this.parameters={radius:e,detail:t}}static fromJSON(e){return new s(e.radius,e.detail)}};var gr=class s extends Qe{constructor(e=1,t=.4,n=12,i=48,r=Math.PI*2,a=0,o=Math.PI*2){super(),this.type=`TorusGeometry`,this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:i,arc:r,thetaStart:a,thetaLength:o},n=Math.floor(n),i=Math.floor(i);let c=[],l=[],u=[],d=[],h=new R,f=new R,g=new R;for(let y=0;y<=n;y++){let m=a+y/n*o;for(let p=0;p<=i;p++){let S=p/i*r;f.x=(e+t*Math.cos(m))*Math.cos(S),f.y=(e+t*Math.cos(m))*Math.sin(S),f.z=t*Math.sin(m),l.push(f.x,f.y,f.z),h.x=e*Math.cos(S),h.y=e*Math.sin(S),g.subVectors(f,h).normalize(),u.push(g.x,g.y,g.z),d.push(p/i),d.push(y/n)}}for(let y=1;y<=n;y++)for(let m=1;m<=i;m++){let p=(i+1)*y+m-1,S=(i+1)*(y-1)+m-1,C=(i+1)*(y-1)+m,v=(i+1)*y+m;c.push(p,S,v),c.push(S,C,v)}this.setIndex(c),this.setAttribute(`position`,new Ve(l,3)),this.setAttribute(`normal`,new Ve(u,3)),this.setAttribute(`uv`,new Ve(d,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}};function Xi(s){let e={};for(let t in s){e[t]={};for(let n in s[t]){let i=s[t][n];if(qh(i))i.isRenderTargetTexture?(Ne(`UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms().`),e[t][n]=null):e[t][n]=i.clone();else if(Array.isArray(i))if(qh(i[0])){let r=[];for(let a=0,o=i.length;a<o;a++)r[a]=i[a].clone();e[t][n]=r}else e[t][n]=i.slice();else e[t][n]=i}}return e}function Kt(s){let e={};for(let t=0;t<s.length;t++){let n=Xi(s[t]);for(let i in n)e[i]=n[i]}return e}function qh(s){return s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)}function Af(s){let e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function Tc(s){let e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:We.workingColorSpace}var Hu={clone:Xi,merge:Kt};var Cf=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`;var Rf=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;var mn=class extends nn{constructor(e){super(),this.isShaderMaterial=!0,this.type=`ShaderMaterial`,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Cf,this.fragmentShader=Rf,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Xi(e.uniforms),this.uniformsGroups=Af(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let i in this.uniforms){let a=this.uniforms[i].value;a&&a.isTexture?t.uniforms[i]={type:`t`,value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[i]={type:`c`,value:a.getHex()}:a&&a.isVector2?t.uniforms[i]={type:`v2`,value:a.toArray()}:a&&a.isVector3?t.uniforms[i]={type:`v3`,value:a.toArray()}:a&&a.isVector4?t.uniforms[i]={type:`v4`,value:a.toArray()}:a&&a.isMatrix3?t.uniforms[i]={type:`m3`,value:a.toArray()}:a&&a.isMatrix4?t.uniforms[i]={type:`m4`,value:a.toArray()}:t.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let n in e.uniforms){let i=e.uniforms[n];switch(this.uniforms[n]={},i.type){case`t`:this.uniforms[n].value=t[i.value]||null;break;case`c`:this.uniforms[n].value=new Ae().setHex(i.value);break;case`v2`:this.uniforms[n].value=new Se().fromArray(i.value);break;case`v3`:this.uniforms[n].value=new R().fromArray(i.value);break;case`v4`:this.uniforms[n].value=new Et().fromArray(i.value);break;case`m3`:this.uniforms[n].value=new Be().fromArray(i.value);break;case`m4`:this.uniforms[n].value=new ft().fromArray(i.value);break;default:this.uniforms[n].value=i.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}};var ja=class extends mn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type=`RawShaderMaterial`}};var vi=class extends nn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type=`MeshStandardMaterial`,this.defines={STANDARD:``},this.color=new Ae(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ae(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=kr,this.normalScale=new Se(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new bn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap=`round`,this.wireframeLinejoin=`round`,this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:``},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};var zi=class extends nn{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type=`MeshPhongMaterial`,this.color=new Ae(16777215),this.specular=new Ae(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ae(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=kr,this.normalScale=new Se(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new bn,this.combine=co,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap=`round`,this.wireframeLinejoin=`round`,this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};var Za=class extends nn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type=`MeshDepthMaterial`,this.depthPacking=wu,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}};var Ka=class extends nn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type=`MeshDistanceMaterial`,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function hs(s,e){return!s||s.constructor===e?s:typeof e.BYTES_PER_ELEMENT==`number`?new e(s):Array.prototype.slice.call(s)}function Hl(s){return s!==void 0&&s.inTangents!==void 0&&s.outTangents!==void 0}var bi=class{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,i=t[n],r=t[n-1];n:{e:{let a;t:{i:if(!(e<i)){for(let o=n+2;;){if(i===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=i,i=t[++n],e<i)break e}a=t.length;break t}if(!(e>=r)){let o=t[1];e<o&&(n=2,r=o);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(i=r,r=t[--n-1],e>=r)break e}a=n,n=0;break t}break n}for(;n<a;){let o=n+a>>>1;e<t[o]?a=o:n=o+1}if(i=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i;for(let a=0;a!==i;++a)t[a]=n[r+a];return t}interpolate_(){throw new Error(`THREE.Interpolant: Call to abstract method.`)}intervalChanged_(){}};var Ja=class extends bi{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Wl,endingEnd:Wl}}intervalChanged_(e,t,n){let i=this.parameterPositions,r=e-2,a=e+1,o=i[r],c=i[a];if(o===void 0)switch(this.getSettings_().endingStart){case Xl:r=e,o=2*t-n;break;case Yl:r=i.length-2,o=t+i[r]-i[r+1];break;default:r=e,o=n}if(c===void 0)switch(this.getSettings_().endingEnd){case Xl:a=e,c=2*n-t;break;case Yl:a=1,c=n+i[1]-i[0];break;default:a=e-1,c=t}let l=(n-t)*.5,u=this.valueSize;this._weightPrev=l/(t-o),this._weightNext=l/(c-n),this._offsetPrev=r*u,this._offsetNext=a*u}interpolate_(e,t,n,i){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,u=this._offsetPrev,d=this._offsetNext,h=this._weightPrev,f=this._weightNext,g=(n-t)/(i-t),y=g*g,m=y*g,p=-h*m+2*h*y-h*g,S=(1+h)*m+(-1.5-2*h)*y+(-.5+h)*g+1,C=(-1-f)*m+(1.5+f)*y+.5*g,v=f*m-f*y;for(let E=0;E!==o;++E)r[E]=p*a[u+E]+S*a[l+E]+C*a[c+E]+v*a[d+E];return r}};var $a=class extends bi{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,u=(n-t)/(i-t),d=1-u;for(let h=0;h!==o;++h)r[h]=a[l+h]*d+a[c+h]*u;return r}};var Qa=class extends bi{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}};var eo=class extends bi{interpolate_(e,t,n,i){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,u=this.inTangents,d=this.outTangents;if(!u||!d){let g=(n-t)/(i-t),y=1-g;for(let m=0;m!==o;++m)r[m]=a[l+m]*y+a[c+m]*g;return r}let h=o*2,f=e-1;for(let g=0;g!==o;++g){let y=a[l+g],m=a[c+g],p=f*h+g*2,S=d[p],C=d[p+1],v=e*h+g*2,E=u[v],M=u[v+1],w=If(n,t,S,E,i);r[g]=Vu(w,y,C,M,m)}return r}};function Vu(s,e,t,n,i){let r=1-s;return r*r*r*e+3*r*r*s*t+3*r*s*s*n+s*s*s*i}function Pf(s,e,t,n,i){let r=1-s;return 3*r*r*(t-e)+6*r*s*(n-t)+3*s*s*(i-n)}function If(s,e,t,n,i){let r=(s-e)/(i-e);for(let a=0;a<8;a++){let o=Vu(r,e,t,n,i)-s;if(Math.abs(o)<1e-10)break;let c=Pf(r,e,t,n,i);if(Math.abs(c)<1e-10)break;r=Math.max(0,Math.min(1,r-o/c))}return r}var gn=class{constructor(e,t,n,i){if(e===void 0)throw new Error(`THREE.KeyframeTrack: track name is undefined`);if(t===void 0||t.length===0)throw new Error(`THREE.KeyframeTrack: no keyframes in track named `+e);this.name=e,this.times=hs(t,this.TimeBufferType),this.values=hs(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:hs(e.times,Array),values:hs(e.values,Array)};let i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i),Hl(e.settings)&&(n.settings={inTangents:hs(e.settings.inTangents,Array),outTangents:hs(e.settings.outTangents,Array)})}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Qa(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new $a(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Ja(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new eo(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case er:t=this.InterpolantFactoryMethodDiscrete;break;case Ba:t=this.InterpolantFactoryMethodLinear;break;case Ca:t=this.InterpolantFactoryMethodSmooth;break;case Gl:t=this.InterpolantFactoryMethodBezier}if(t===void 0){let n=`unsupported interpolation for `+this.ValueTypeName+` keyframe track named `+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Ne(`KeyframeTrack:`,n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return er;case this.InterpolantFactoryMethodLinear:return Ba;case this.InterpolantFactoryMethodSmooth:return Ca;case this.InterpolantFactoryMethodBezier:return Gl}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e;Hl(this.settings)&&(jh(this.settings.inTangents,e),jh(this.settings.outTangents,e))}return this}trim(e,t){let n=this.times,i=n.length,r=0,a=i-1;for(;r!==i&&n[r]<e;)++r;for(;a!==-1&&n[a]>t;)--a;if(++a,r!==0||a!==i){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(Oe(`KeyframeTrack: Invalid value size in track.`,this),e=!1);let n=this.times,i=this.values,r=n.length;r===0&&(Oe(`KeyframeTrack: Track is empty.`,this),e=!1);let a=null;for(let o=0;o!==r;o++){let c=n[o];if(typeof c==`number`&&isNaN(c)){Oe(`KeyframeTrack: Time is not a valid number.`,this,o,c),e=!1;break}if(a!==null&&a>c){Oe(`KeyframeTrack: Out of order keys.`,this,o,c,a),e=!1;break}a=c}if(i!==void 0&&Xd(i))for(let o=0,c=i.length;o!==c;++o){let l=i[o];if(isNaN(l)){Oe(`KeyframeTrack: Value is not a valid number.`,this,o,l),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===Ca,r=e.length-1,a=1;for(let o=1;o<r;++o){let c=!1,l=e[o];if(l!==e[o+1]&&(o!==1||l!==e[0]))if(i)c=!0;else{let d=o*n,h=d-n,f=d+n;for(let g=0;g!==n;++g){let y=t[d+g];if(y!==t[h+g]||y!==t[f+g]){c=!0;break}}}if(c){if(o!==a){e[a]=e[o];let d=o*n,h=a*n;for(let f=0;f!==n;++f)t[h+f]=t[d+f]}++a}}if(r>0){e[a]=e[r];for(let o=r*n,c=a*n,l=0;l!==n;++l)t[c+l]=t[o+l];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,Hl(this.settings)&&(i.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),i}};function jh(s,e){for(let t=0,n=s.length;t!==n;t+=2)s[t]*=e}gn.prototype.ValueTypeName=``;gn.prototype.TimeBufferType=Float32Array;gn.prototype.ValueBufferType=Float32Array;gn.prototype.DefaultInterpolation=Ba;var Si=class extends gn{constructor(e,t,n){super(e,t,n)}};Si.prototype.ValueTypeName=`bool`;Si.prototype.ValueBufferType=Array;Si.prototype.DefaultInterpolation=er;Si.prototype.InterpolantFactoryMethodLinear=void 0;Si.prototype.InterpolantFactoryMethodSmooth=void 0;var to=class extends gn{constructor(e,t,n,i){super(e,t,n,i)}};to.prototype.ValueTypeName=`color`;var no=class extends gn{constructor(e,t,n,i){super(e,t,n,i)}};no.prototype.ValueTypeName=`number`;var io=class extends bi{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=(n-t)/(i-t),l=e*o;for(let u=l+o;l!==u;l+=4)Wt.slerpFlat(r,0,a,l-o,a,l,c);return r}};var _r=class extends gn{constructor(e,t,n,i){super(e,t,n,i)}InterpolantFactoryMethodLinear(e){return new io(this.times,this.values,this.getValueSize(),e)}};_r.prototype.ValueTypeName=`quaternion`;_r.prototype.InterpolantFactoryMethodSmooth=void 0;var Mi=class extends gn{constructor(e,t,n){super(e,t,n)}};Mi.prototype.ValueTypeName=`string`;Mi.prototype.ValueBufferType=Array;Mi.prototype.DefaultInterpolation=er;Mi.prototype.InterpolantFactoryMethodLinear=void 0;Mi.prototype.InterpolantFactoryMethodSmooth=void 0;var so=class extends gn{constructor(e,t,n,i){super(e,t,n,i)}};so.prototype.ValueTypeName=`vector`;var ms={enabled:!1,files:{},add:function(s,e){this.enabled!==!1&&(Zh(s)||(this.files[s]=e))},get:function(s){if(this.enabled!==!1&&!Zh(s))return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};function Zh(s){try{let e=s.slice(s.indexOf(`:`)+1);return new URL(e).protocol===`blob:`}catch{return!1}}var ro=class{constructor(e,t,n){let i=this,r=!1,a=0,o=0,c,l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(u){o++,r===!1&&i.onStart!==void 0&&i.onStart(u,a,o),r=!0},this.itemEnd=function(u){a++,i.onProgress!==void 0&&i.onProgress(u,a,o),a===o&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(u){i.onError!==void 0&&i.onError(u)},this.resolveURL=function(u){return u=u.normalize(`NFC`),c?c(u):u},this.setURLModifier=function(u){return c=u,this},this.addHandler=function(u,d){return l.push(u,d),this},this.removeHandler=function(u){let d=l.indexOf(u);return d!==-1&&l.splice(d,2),this},this.getHandler=function(u){for(let d=0,h=l.length;d<h;d+=2){let f=l[d],g=l[d+1];if(f.global&&(f.lastIndex=0),f.test(u))return g}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}};var $o=new ro;var Nn=class{constructor(e){this.manager=e!==void 0?e:$o,this.crossOrigin=`anonymous`,this.withCredentials=!1,this.path=``,this.resourcePath=``,this.requestHeader={},typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`observe`,{detail:this}))}load(){}loadAsync(e,t){let n=this;return new Promise(function(i,r){n.load(e,i,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};Nn.DEFAULT_MATERIAL_NAME=`__DEFAULT`;var ei={};var jl=class extends Error{constructor(e,t){super(e),this.response=t}};var Hi=class extends Nn{constructor(e){super(e),this.mimeType=``,this.responseType=``,this._abortController=new AbortController}load(e,t,n,i){e===void 0&&(e=``),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=ms.get(`file:${e}`);if(r!==void 0){this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0);return}if(ei[e]!==void 0){ei[e].push({onLoad:t,onProgress:n,onError:i});return}ei[e]=[],ei[e].push({onLoad:t,onProgress:n,onError:i});let a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?`include`:`same-origin`,signal:typeof AbortSignal.any==`function`?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),o=this.mimeType,c=this.responseType;fetch(a).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&Ne(`FileLoader: HTTP Status 0 received.`),typeof ReadableStream>`u`||l.body===void 0||l.body.getReader===void 0)return l;let u=ei[e],d=l.body.getReader(),h=l.headers.get(`X-File-Size`)||l.headers.get(`Content-Length`),f=h?parseInt(h):0,g=f!==0,y=0,m=new ReadableStream({start(p){S();function S(){d.read().then(({done:C,value:v})=>{if(C)p.close();else{y+=v.byteLength;let E=new ProgressEvent(`progress`,{lengthComputable:g,loaded:y,total:f});for(let M=0,w=u.length;M<w;M++){let x=u[M];x.onProgress&&x.onProgress(E)}p.enqueue(v),S()}},C=>{p.error(C)})}}});return new Response(m)}else throw new jl(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case`arraybuffer`:return l.arrayBuffer();case`blob`:return l.blob();case`document`:return l.text().then(u=>new DOMParser().parseFromString(u,o));case`json`:return l.json();default:if(o===``)return l.text();{let d=/charset="?([^;"\s]*)"?/i.exec(o),h=d&&d[1]?d[1].toLowerCase():void 0,f=new TextDecoder(h);return l.arrayBuffer().then(g=>f.decode(g))}}}).then(l=>{ms.add(`file:${e}`,l);let u=ei[e];delete ei[e];for(let d=0,h=u.length;d<h;d++){let f=u[d];f.onLoad&&f.onLoad(l)}}).catch(l=>{let u=ei[e];if(u===void 0)throw this.manager.itemError(e),l;delete ei[e];for(let d=0,h=u.length;d<h;d++){let f=u[d];f.onError&&f.onError(l)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}};var us=new WeakMap;var ao=class extends Nn{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,a=ms.get(`image:${e}`);if(a!==void 0){if(a.complete===!0)r.manager.itemStart(e),setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0);else{let d=us.get(a);d===void 0&&(d=[],us.set(a,d)),d.push({onLoad:t,onError:i})}return a}let o=xs(`img`);function c(){u(),t&&t(this);let d=us.get(this)||[];for(let h=0;h<d.length;h++){let f=d[h];f.onLoad&&f.onLoad(this)}us.delete(this),r.manager.itemEnd(e)}function l(d){u(),i&&i(d),ms.remove(`image:${e}`);let h=us.get(this)||[];for(let f=0;f<h.length;f++){let g=h[f];g.onError&&g.onError(d)}us.delete(this),r.manager.itemError(e),r.manager.itemEnd(e)}function u(){o.removeEventListener(`load`,c,!1),o.removeEventListener(`error`,l,!1)}return o.addEventListener(`load`,c,!1),o.addEventListener(`error`,l,!1),e.slice(0,5)!==`data:`&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),ms.add(`image:${e}`,o),r.manager.itemStart(e),o.src=e,o}};var xr=class extends Nn{constructor(e){super(e)}load(e,t,n,i){let r=new Zt,a=new ao(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){r.image=o,r.needsUpdate=!0,t!==void 0&&t(r)},n,i),r}};var Ds=class extends Dt{constructor(e,t=1){super(),this.isLight=!0,this.type=`Light`,this.color=new Ae(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}};var Vl=new ft;var Kh=new R;var Jh=new R;var yr=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Se(512,512),this.mapType=cn,this.map=null,this.mapPass=null,this.matrix=new ft,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ts,this._frameExtents=new Se(1,1),this._viewportCount=1,this._viewports=[new Et(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;Kh.setFromMatrixPosition(e.matrixWorld),t.position.copy(Kh),Jh.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Jh),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,i){Vl.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(Vl,e.coordinateSystem,e.reversedDepth);let r=this._frameExtents,a=i?i.z/r.x:1,o=i?i.w/r.y:1,c=i?i.x/r.x:0,l=i?i.y/r.y:0;e.coordinateSystem===_s||e.reversedDepth?t.set(.5*a,0,0,.5*a+c,0,.5*o,0,.5*o+l,0,0,1,0,0,0,0,1):t.set(.5*a,0,0,.5*a+c,0,.5*o,0,.5*o+l,0,0,.5,.5,0,0,0,1),t.multiply(Vl)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}};var Ta=new R;var wa=new Wt;var Hn=new R;var vr=class extends Dt{constructor(){super(),this.isCamera=!0,this.type=`Camera`,this.matrixWorldInverse=new ft,this.projectionMatrix=new ft,this.projectionMatrixInverse=new ft,this.coordinateSystem=In,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Ta,wa,Hn),Hn.x===1&&Hn.y===1&&Hn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ta,wa,Hn.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(Ta,wa,Hn),Hn.x===1&&Hn.y===1&&Hn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ta,wa,Hn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}};var gi=new R;var $h=new Se;var Qh=new Se;var Vt=class extends vr{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type=`PerspectiveCamera`,this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=vs*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan($s*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return vs*2*Math.atan(Math.tan($s*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){gi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(gi.x,gi.y).multiplyScalar(-e/gi.z),gi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(gi.x,gi.y).multiplyScalar(-e/gi.z)}getViewSize(e,t){return this.getViewBounds(e,$h,Qh),t.subVectors(Qh,$h)}setViewOffset(e,t,n,i,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan($s*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,r=-.5*i,a=this.view;if(this.view!==null&&this.view.enabled){let c=a.fullWidth,l=a.fullHeight;r+=a.offsetX*i/c,t-=a.offsetY*n/l,i*=a.width/c,n*=a.height/l}let o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}};var Zl=class extends yr{constructor(){super(new Vt(90,1,.5,500)),this.isPointLightShadow=!0}};var br=class extends Ds{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type=`PointLight`,this.distance=n,this.decay=i,this.shadow=new Zl}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}};var Ls=class extends vr{constructor(e=-1,t=1,n=1,i=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type=`OrthographicCamera`,this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2,r=n-e,a=n+e,o=i+t,c=i-t;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,a=r+l*this.view.width,o-=u*this.view.offsetY,c=o-u*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}};var Kl=class extends yr{constructor(){super(new Ls(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}};var Vi=class extends Ds{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type=`DirectionalLight`,this.position.copy(Dt.DEFAULT_UP),this.updateMatrix(),this.target=new Dt,this.shadow=new Kl}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}};var Sr=class extends Ds{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type=`AmbientLight`}};var Mr=class{static extractUrlBase(e){let t=e.lastIndexOf(`/`);return t===-1?`./`:e.slice(0,t+1)}static resolveURL(e,t){return typeof e!=`string`||e===``?``:(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,`$1`)),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}};var ds=-90;var fs=1;var oo=class extends Dt{constructor(e,t,n){super(),this.type=`CubeCamera`,this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let i=new Vt(ds,fs,e,t);i.layers=this.layers,this.add(i);let r=new Vt(ds,fs,e,t);r.layers=this.layers,this.add(r);let a=new Vt(ds,fs,e,t);a.layers=this.layers,this.add(a);let o=new Vt(ds,fs,e,t);o.layers=this.layers,this.add(o);let c=new Vt(ds,fs,e,t);c.layers=this.layers,this.add(c);let l=new Vt(ds,fs,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,i,r,a,o,c]=t;for(let l of t)this.remove(l);if(e===In)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===_s)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error(`THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: `+e);for(let l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,c,l,u]=this.children,d=e.getRenderTarget(),h=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let y=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let m=!1;e.isWebGLRenderer===!0?m=e.state.buffers.depth.getReversed():m=e.reversedDepthBuffer,e.setRenderTarget(n,0,i),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(n,1,i),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,2,i),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,i),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),e.setRenderTarget(n,4,i),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),n.texture.generateMipmaps=y,e.setRenderTarget(n,5,i),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),e.setRenderTarget(d,h,f),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}};var lo=class extends Vt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}};var wc=`\\[\\]\\.:\\/`;var Df=new RegExp(`[`+wc+`]`,`g`);var Ac=`[^`+wc+`]`;var Lf=`[^`+wc.replace(`\\.`,``)+`]`;var Nf=/((?:WC+[\/:])*)/.source.replace(`WC`,Ac);var Uf=/(WCOD+)?/.source.replace(`WCOD`,Lf);var Ff=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace(`WC`,Ac);var Of=/\.(WC+)(?:\[(.+)\])?/.source.replace(`WC`,Ac);var Bf=new RegExp(`^`+Nf+Uf+Ff+Of+`$`);var kf=[`material`,`materials`,`bones`,`map`];var Jl=class{constructor(e,t,n){let i=n||St.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}};var St=class s{constructor(e,t,n){this.path=t,this.parsedPath=n||s.parseTrackName(t),this.node=s.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new s.Composite(e,t,n):new s(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,`_`).replace(Df,``)}static parseTrackName(e){let t=Bf.exec(e);if(t===null)throw new Error(`THREE.PropertyBinding: Cannot parse trackName: `+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(`.`);if(i!==void 0&&i!==-1){let r=n.nodeName.substring(i+1);kf.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error(`THREE.PropertyBinding: can not parse propertyName from trackName: `+e);return n}static findNode(e,t){if(t===void 0||t===``||t===`.`||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===t||o.uuid===t)return o;let c=n(o.children);if(c)return c}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,i=t.propertyName,r=t.propertyIndex;if(e||(e=s.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){Ne(`PropertyBinding: No target node found for track: `+this.path+`.`);return}if(n){let l=t.objectIndex;switch(n){case`materials`:if(!e.material){Oe(`PropertyBinding: Can not bind to material as node does not have a material.`,this);return}if(!e.material.materials){Oe(`PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.`,this);return}e=e.material.materials;break;case`bones`:if(!e.skeleton){Oe(`PropertyBinding: Can not bind to bones as node does not have a skeleton.`,this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===l){l=u;break}break;case`map`:if(`map`in e){e=e.map;break}if(!e.material){Oe(`PropertyBinding: Can not bind to material as node does not have a material.`,this);return}if(!e.material.map){Oe(`PropertyBinding: Can not bind to material.map as node.material does not have a map.`,this);return}e=e.material.map;break;default:if(e[n]===void 0){Oe(`PropertyBinding: Can not bind to objectName of node undefined.`,this);return}e=e[n]}if(l!==void 0){if(e[l]===void 0){Oe(`PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.`,this,e);return}e=e[l]}}let a=e[i];if(a===void 0){let l=t.nodeName;Oe(`PropertyBinding: Trying to update property for track: `+l+`.`+i+` but it wasn't found.`,e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(i===`morphTargetInfluences`){if(!e.geometry){Oe(`PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.`,this);return}if(!e.geometry.morphAttributes){Oe(`PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.`,this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(c=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=i;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};St.Composite=Jl;St.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};St.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};St.prototype.GetterByBindingType=[St.prototype._getValue_direct,St.prototype._getValue_array,St.prototype._getValue_arrayElement,St.prototype._getValue_toArray];St.prototype.SetterByBindingTypeAndVersioning=[[St.prototype._setValue_direct,St.prototype._setValue_direct_setNeedsUpdate,St.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[St.prototype._setValue_array,St.prototype._setValue_array_setNeedsUpdate,St.prototype._setValue_array_setMatrixWorldNeedsUpdate],[St.prototype._setValue_arrayElement,St.prototype._setValue_arrayElement_setNeedsUpdate,St.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[St.prototype._setValue_fromArray,St.prototype._setValue_fromArray_setNeedsUpdate,St.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var eu=new ft;var Er=class{constructor(e,t,n=0,i=1/0){this.ray=new si(e,t),this.near=n,this.far=i,this.camera=null,this.layers=new Ss,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):Oe(`Raycaster: Unsupported camera type: `+t.type)}setFromXRController(e){return eu.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(eu),this}intersectObject(e,t=!0,n=[]){return $l(e,this,n,t),n.sort(tu),n}intersectObjects(e,t=!0,n=[]){for(let i=0,r=e.length;i<r;i++)$l(e[i],this,n,t);return n.sort(tu),n}};function tu(s,e){return s.distance-e.distance}function $l(s,e,t,n){let i=!0;if(s.layers.test(e.layers)&&s.raycast(e,t)===!1&&(i=!1),i===!0&&n===!0){let r=s.children;for(let a=0,o=r.length;a<o;a++)$l(r[a],e,t,!0)}}var Tr=class{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,Ne(`Clock: This module has been deprecated. Please use THREE.Timer instead.`)}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let t=performance.now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}};var ai=class{constructor(e=1,t=0,n=0){this.radius=e,this.phi=t,this.theta=n}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Xe(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(Xe(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}};(class s{static{s.prototype.isMatrix2=!0}constructor(e,t,n,i){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,i)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,i){let r=this.elements;return r[0]=e,r[2]=t,r[1]=n,r[3]=i,this}});var wr=class extends sn{constructor(e=10,t=10,n=4473924,i=8947848){n=new Ae(n),i=new Ae(i);let r=t/2,a=e/t,o=e/2,c=[],l=[];for(let h=0,f=0,g=-o;h<=t;h++,g+=a){c.push(-o,0,g,o,0,g),c.push(g,0,-o,g,0,o);let y=h===r?n:i;y.toArray(l,f),f+=3,y.toArray(l,f),f+=3,y.toArray(l,f),f+=3,y.toArray(l,f),f+=3}let u=new Qe;u.setAttribute(`position`,new Ve(c,3)),u.setAttribute(`color`,new Ve(l,3));let d=new Ut({vertexColors:!0,toneMapped:!1});super(u,d),this.type=`GridHelper`}dispose(){super.dispose(),this.geometry.dispose(),this.material.dispose()}};var Aa=new Sn;var Ar=class extends sn{constructor(e,t=16776960){let n=new Uint16Array([0,1,1,2,2,3,3,0,4,5,5,6,6,7,7,4,0,4,1,5,2,6,3,7]),i=new Float32Array(24),r=new Qe;r.setIndex(new vt(n,1)),r.setAttribute(`position`,new vt(i,3)),super(r,new Ut({color:t,toneMapped:!1})),this.object=e,this.type=`BoxHelper`,this.matrixAutoUpdate=!1,this.update()}update(){if(this.object!==void 0&&Aa.setFromObject(this.object),Aa.isEmpty())return;let e=Aa.min,t=Aa.max,n=this.geometry.attributes.position,i=n.array;i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=e.x,i[4]=t.y,i[5]=t.z,i[6]=e.x,i[7]=e.y,i[8]=t.z,i[9]=t.x,i[10]=e.y,i[11]=t.z,i[12]=t.x,i[13]=t.y,i[14]=e.z,i[15]=e.x,i[16]=t.y,i[17]=e.z,i[18]=e.x,i[19]=e.y,i[20]=e.z,i[21]=t.x,i[22]=e.y,i[23]=e.z,n.needsUpdate=!0,this.geometry.computeBoundingSphere()}setFromObject(e){return this.object=e,this.update(),this}copy(e,t){return super.copy(e,t),this.object=e.object,this}dispose(){super.dispose(),this.geometry.dispose(),this.material.dispose()}};var Cr=class extends sn{constructor(e=1){let t=[0,0,0,e,0,0,0,0,0,0,e,0,0,0,0,0,0,e],n=[1,0,0,1,.6,0,0,1,0,.6,1,0,0,0,1,0,.6,1],i=new Qe;i.setAttribute(`position`,new Ve(t,3)),i.setAttribute(`color`,new Ve(n,3));let r=new Ut({vertexColors:!0,toneMapped:!1});super(i,r),this.type=`AxesHelper`}setColors(e,t,n){let i=new Ae,r=this.geometry.attributes.color.array;return i.set(e),i.toArray(r,0),i.toArray(r,3),i.set(t),i.toArray(r,6),i.toArray(r,9),i.set(n),i.toArray(r,12),i.toArray(r,15),this.geometry.attributes.color.needsUpdate=!0,this}dispose(){super.dispose(),this.geometry.dispose(),this.material.dispose()}};var Rr=class extends Dn{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}};function Cc(s,e,t,n){let i=zf(n);switch(t){case xc:return s*e;case vc:return s*e/i.components*i.byteLength;case _o:return s*e/i.components*i.byteLength;case Ci:return s*e*2/i.components*i.byteLength;case xo:return s*e*2/i.components*i.byteLength;case yc:return s*e*3/i.components*i.byteLength;case Mn:return s*e*4/i.components*i.byteLength;case yo:return s*e*4/i.components*i.byteLength;case Lr:case Nr:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Ur:case Fr:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case bo:case Mo:return Math.max(s,16)*Math.max(e,8)/4;case vo:case So:return Math.max(s,8)*Math.max(e,8)/2;case Eo:case To:case Ao:case Co:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case wo:case Or:case Ro:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Po:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Io:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case Do:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case Lo:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case No:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case Uo:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case Fo:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case Oo:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case Bo:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case ko:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case zo:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case Ho:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case Vo:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case Go:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case Wo:case Xo:case Yo:return Math.ceil(s/4)*Math.ceil(e/4)*16;case qo:case jo:return Math.ceil(s/4)*Math.ceil(e/4)*8;case Br:case Zo:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function zf(s){switch(s){case cn:case pc:return{byteLength:1,components:1};case Fs:case mc:case Bn:return{byteLength:2,components:1};case mo:case go:return{byteLength:2,components:4};case Fn:case po:case On:return{byteLength:4,components:1};case gc:case _c:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`register`,{detail:{revision:`186`}}));typeof window<`u`&&(window.__THREE__?Ne(`WARNING: Multiple instances of Three.js being imported.`):window.__THREE__=`186`);function hd(){let s=null,e=!1,t=null,n=null;function i(r,a){n=s.requestAnimationFrame(i),t(r,a)}return{start:function(){e!==!0&&t!==null&&s!==null&&(n=s.requestAnimationFrame(i),e=!0)},stop:function(){s!==null&&s.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){s=r}}}function Vf(s){let e=new WeakMap;function t(o,c){let l=o.array,u=o.usage,d=l.byteLength,h=s.createBuffer();s.bindBuffer(c,h),s.bufferData(c,l,u),o.onUploadCallback();let f;if(l instanceof Float32Array)f=s.FLOAT;else if(typeof Float16Array<`u`&&l instanceof Float16Array)f=s.HALF_FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?f=s.HALF_FLOAT:f=s.UNSIGNED_SHORT;else if(l instanceof Int16Array)f=s.SHORT;else if(l instanceof Uint32Array)f=s.UNSIGNED_INT;else if(l instanceof Int32Array)f=s.INT;else if(l instanceof Int8Array)f=s.BYTE;else if(l instanceof Uint8Array)f=s.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)f=s.UNSIGNED_BYTE;else throw new Error(`THREE.WebGLAttributes: Unsupported buffer data format: `+l);return{buffer:h,type:f,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:d}}function n(o,c,l){let u=c.array,d=c.updateRanges;if(s.bindBuffer(l,o),d.length===0)s.bufferSubData(l,0,u);else{d.sort((f,g)=>f.start-g.start);let h=0;for(let f=1;f<d.length;f++){let g=d[h],y=d[f];y.start<=g.start+g.count+1?g.count=Math.max(g.count,y.start+y.count-g.start):(++h,d[h]=y)}d.length=h+1;for(let f=0,g=d.length;f<g;f++){let y=d[f];s.bufferSubData(l,y.start*u.BYTES_PER_ELEMENT,u,y.start,y.count)}c.clearUpdateRanges()}c.onUploadCallback()}function i(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let c=e.get(o);c&&(s.deleteBuffer(c.buffer),e.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let u=e.get(o);(!u||u.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let l=e.get(o);if(l===void 0)e.set(o,t(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error(`THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.`);n(l.buffer,o,c),l.version=o.version}}return{get:i,remove:r,update:a}}var Ye={alphahash_fragment:`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,alphahash_pars_fragment:`#ifdef USE_ALPHAHASH
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
#endif`,alphamap_fragment:`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,alphamap_pars_fragment:`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,alphatest_fragment:`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,alphatest_pars_fragment:`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,aomap_fragment:`#ifdef USE_AOMAP
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
#endif`,aomap_pars_fragment:`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,batching_pars_vertex:`#ifdef USE_BATCHING
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
#endif`,batching_vertex:`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,begin_vertex:`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,beginnormal_vertex:`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,bsdfs:`float G_BlinnPhong_Implicit( ) {
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
} // validated`,iridescence_fragment:`#ifdef USE_IRIDESCENCE
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
#endif`,bumpmap_pars_fragment:`#ifdef USE_BUMPMAP
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
#endif`,clipping_planes_fragment:`#if NUM_CLIPPING_PLANES > 0
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
#endif`,clipping_planes_pars_fragment:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,clipping_planes_pars_vertex:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,clipping_planes_vertex:`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,color_fragment:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,color_pars_fragment:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,color_pars_vertex:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,color_vertex:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,common:`#define PI 3.141592653589793
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
} // validated`,cube_uv_reflection_fragment:`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,defaultnormal_vertex:`vec3 transformedNormal = objectNormal;
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
#endif`,displacementmap_pars_vertex:`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,displacementmap_vertex:`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,emissivemap_fragment:`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,emissivemap_pars_fragment:`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,colorspace_fragment:`gl_FragColor = linearToOutputTexel( gl_FragColor );`,colorspace_pars_fragment:`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,envmap_fragment:`#ifdef USE_ENVMAP
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
#endif`,envmap_common_pars_fragment:`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,envmap_pars_fragment:`#ifdef USE_ENVMAP
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
#endif`,envmap_pars_vertex:`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,envmap_physical_pars_fragment:`#ifdef USE_ENVMAP
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
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureCubeUV( envMap, envMapRotation * retroVec, roughness );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
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
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_CUBE_UV
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,envmap_vertex:`#ifdef USE_ENVMAP
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
#endif`,fog_vertex:`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,fog_pars_vertex:`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,fog_fragment:`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,fog_pars_fragment:`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,gradientmap_pars_fragment:`#ifdef USE_GRADIENTMAP
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
}`,lightmap_pars_fragment:`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,lights_lambert_fragment:`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,lights_lambert_pars_fragment:`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,lights_pars_begin:`uniform bool receiveShadow;
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
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
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
#include <lightprobes_pars_fragment>`,lights_toon_fragment:`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,lights_toon_pars_fragment:`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,lights_phong_fragment:`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,lights_phong_pars_fragment:`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,lights_physical_fragment:`PhysicalMaterial material;
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
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
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
#endif`,lights_physical_pars_fragment:`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
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
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
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
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
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
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
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
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
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
}`,lights_fragment_begin:`
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
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
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
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
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
#endif`,lights_fragment_maps:`#if defined( RE_IndirectDiffuse )
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
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,lights_fragment_end:`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,lightprobes_pars_fragment:`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,logdepthbuf_fragment:`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,logdepthbuf_pars_fragment:`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_pars_vertex:`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_vertex:`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,map_fragment:`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,map_pars_fragment:`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,map_particle_fragment:`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,map_particle_pars_fragment:`#if defined( USE_POINTS_UV )
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
#endif`,metalnessmap_fragment:`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,metalnessmap_pars_fragment:`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,morphinstance_vertex:`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,morphcolor_vertex:`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,morphnormal_vertex:`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,morphtarget_pars_vertex:`#ifdef USE_MORPHTARGETS
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
#endif`,morphtarget_vertex:`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,normal_fragment_begin:`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,normal_fragment_maps:`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,normal_pars_fragment:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_pars_vertex:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_vertex:`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,normalmap_pars_fragment:`#ifdef USE_NORMALMAP
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
#endif`,clearcoat_normal_fragment_begin:`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,clearcoat_normal_fragment_maps:`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,clearcoat_pars_fragment:`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,iridescence_pars_fragment:`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,opaque_fragment:`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,packing:`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,premultiplied_alpha_fragment:`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,project_vertex:`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,dithering_fragment:`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,dithering_pars_fragment:`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,roughnessmap_fragment:`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,roughnessmap_pars_fragment:`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,shadowmap_pars_fragment:`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
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
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
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
#endif`,shadowmap_pars_vertex:`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
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
#endif`,shadowmap_vertex:`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
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
#endif`,shadowmask_pars_fragment:`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
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
}`,skinbase_vertex:`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,skinning_pars_vertex:`#ifdef USE_SKINNING
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
#endif`,skinning_vertex:`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,skinnormal_vertex:`#ifdef USE_SKINNING
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
#endif`,specularmap_fragment:`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,specularmap_pars_fragment:`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,tonemapping_fragment:`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,tonemapping_pars_fragment:`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,transmission_fragment:`#ifdef USE_TRANSMISSION
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
#endif`,transmission_pars_fragment:`#ifdef USE_TRANSMISSION
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
#endif`,uv_pars_fragment:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,uv_pars_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,uv_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,worldpos_vertex:`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,background_vert:`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,background_frag:`uniform sampler2D t2D;
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
}`,backgroundCube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,backgroundCube_frag:`#ifdef ENVMAP_TYPE_CUBE
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
}`,cube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cube_frag:`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,depth_vert:`#include <common>
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
}`,depth_frag:`#if DEPTH_PACKING == 3200
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
}`,distance_vert:`#define DISTANCE
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
}`,distance_frag:`#define DISTANCE
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
}`,equirect_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,equirect_frag:`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,linedashed_vert:`uniform float scale;
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
}`,linedashed_frag:`uniform vec3 diffuse;
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
}`,meshbasic_vert:`#include <common>
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
}`,meshbasic_frag:`uniform vec3 diffuse;
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
}`,meshlambert_vert:`#define LAMBERT
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
}`,meshlambert_frag:`#define LAMBERT
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
}`,meshmatcap_vert:`#define MATCAP
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
}`,meshmatcap_frag:`#define MATCAP
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
}`,meshnormal_vert:`#define NORMAL
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
}`,meshnormal_frag:`#define NORMAL
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
}`,meshphong_vert:`#define PHONG
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
}`,meshphong_frag:`#define PHONG
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
}`,meshphysical_vert:`#define STANDARD
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
}`,meshphysical_frag:`#define STANDARD
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
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
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
}`,meshtoon_vert:`#define TOON
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
}`,meshtoon_frag:`#define TOON
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
}`,points_vert:`uniform float size;
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
}`,points_frag:`uniform vec3 diffuse;
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
}`,shadow_vert:`#include <common>
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
}`,shadow_frag:`uniform vec3 color;
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
}`,sprite_vert:`uniform float rotation;
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
}`,sprite_frag:`uniform vec3 diffuse;
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
}`};var pe={common:{diffuse:{value:new Ae(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Be},alphaMap:{value:null},alphaMapTransform:{value:new Be},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Be}},envmap:{envMap:{value:null},envMapRotation:{value:new Be},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Be}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Be}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Be},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Be},normalScale:{value:new Se(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Be},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Be}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Be}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Be}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ae(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new R},probesMax:{value:new R},probesResolution:{value:new R}},points:{diffuse:{value:new Ae(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Be},alphaTest:{value:0},uvTransform:{value:new Be}},sprite:{diffuse:{value:new Ae(16777215)},opacity:{value:1},center:{value:new Se(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Be},alphaMap:{value:null},alphaMapTransform:{value:new Be},alphaTest:{value:0}}};var jn={basic:{uniforms:Kt([pe.common,pe.specularmap,pe.envmap,pe.aomap,pe.lightmap,pe.fog]),vertexShader:Ye.meshbasic_vert,fragmentShader:Ye.meshbasic_frag},lambert:{uniforms:Kt([pe.common,pe.specularmap,pe.envmap,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.fog,pe.lights,{emissive:{value:new Ae(0)},envMapIntensity:{value:1}}]),vertexShader:Ye.meshlambert_vert,fragmentShader:Ye.meshlambert_frag},phong:{uniforms:Kt([pe.common,pe.specularmap,pe.envmap,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.fog,pe.lights,{emissive:{value:new Ae(0)},specular:{value:new Ae(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Ye.meshphong_vert,fragmentShader:Ye.meshphong_frag},standard:{uniforms:Kt([pe.common,pe.envmap,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.roughnessmap,pe.metalnessmap,pe.fog,pe.lights,{emissive:{value:new Ae(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ye.meshphysical_vert,fragmentShader:Ye.meshphysical_frag},toon:{uniforms:Kt([pe.common,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.gradientmap,pe.fog,pe.lights,{emissive:{value:new Ae(0)}}]),vertexShader:Ye.meshtoon_vert,fragmentShader:Ye.meshtoon_frag},matcap:{uniforms:Kt([pe.common,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.fog,{matcap:{value:null}}]),vertexShader:Ye.meshmatcap_vert,fragmentShader:Ye.meshmatcap_frag},points:{uniforms:Kt([pe.points,pe.fog]),vertexShader:Ye.points_vert,fragmentShader:Ye.points_frag},dashed:{uniforms:Kt([pe.common,pe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ye.linedashed_vert,fragmentShader:Ye.linedashed_frag},depth:{uniforms:Kt([pe.common,pe.displacementmap]),vertexShader:Ye.depth_vert,fragmentShader:Ye.depth_frag},normal:{uniforms:Kt([pe.common,pe.bumpmap,pe.normalmap,pe.displacementmap,{opacity:{value:1}}]),vertexShader:Ye.meshnormal_vert,fragmentShader:Ye.meshnormal_frag},sprite:{uniforms:Kt([pe.sprite,pe.fog]),vertexShader:Ye.sprite_vert,fragmentShader:Ye.sprite_frag},background:{uniforms:{uvTransform:{value:new Be},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ye.background_vert,fragmentShader:Ye.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Be}},vertexShader:Ye.backgroundCube_vert,fragmentShader:Ye.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ye.cube_vert,fragmentShader:Ye.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ye.equirect_vert,fragmentShader:Ye.equirect_frag},distance:{uniforms:Kt([pe.common,pe.displacementmap,{referencePosition:{value:new R},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ye.distance_vert,fragmentShader:Ye.distance_frag},shadow:{uniforms:Kt([pe.lights,pe.fog,{color:{value:new Ae(0)},opacity:{value:1}}]),vertexShader:Ye.shadow_vert,fragmentShader:Ye.shadow_frag}};jn.physical={uniforms:Kt([jn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Be},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Be},clearcoatNormalScale:{value:new Se(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Be},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Be},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Be},sheen:{value:0},sheenColor:{value:new Ae(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Be},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Be},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Be},transmissionSamplerSize:{value:new Se},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Be},attenuationDistance:{value:0},attenuationColor:{value:new Ae(0)},specularColor:{value:new Ae(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Be},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Be},anisotropyVector:{value:new Se},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Be}}]),vertexShader:Ye.meshphysical_vert,fragmentShader:Ye.meshphysical_frag};var Qo={r:0,b:0,g:0};var Mg=new ft;var ud=new Be;ud.set(-1,0,0,0,1,0,0,0,1);function Eg(s,e,t,n,i,r){let a=new Ae(0),o=i===!0?0:1,c,l,u=null,d=0,h=null;function f(S){let C=S.isScene===!0?S.background:null;if(C&&C.isTexture){let v=S.backgroundBlurriness>0;C=e.get(C,v)}return C}function g(S){let C=!1,v=f(S);v===null?m(a,o):v&&v.isColor&&(m(v,1),C=!0);let E=s.xr.getEnvironmentBlendMode();E===`additive`?t.buffers.color.setClear(0,0,0,1,r):E===`alpha-blend`&&t.buffers.color.setClear(0,0,0,0,r),(s.autoClear||C)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function y(S,C){let v=f(C);v&&(v.isCubeTexture||v.mapping===Ir)?(l===void 0&&(l=new Lt(new ri(1,1,1),new mn({name:`BackgroundCubeMaterial`,uniforms:Xi(jn.backgroundCube.uniforms),vertexShader:jn.backgroundCube.vertexShader,fragmentShader:jn.backgroundCube.fragmentShader,side:rn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute(`normal`),l.geometry.deleteAttribute(`uv`),l.onBeforeRender=function(E,M,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(l)),l.material.uniforms.envMap.value=v,l.material.uniforms.backgroundBlurriness.value=C.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=C.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(Mg.makeRotationFromEuler(C.backgroundRotation)).transpose(),v.isCubeTexture&&v.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(ud),l.material.toneMapped=We.getTransfer(v.colorSpace)!==lt,(u!==v||d!==v.version||h!==s.toneMapping)&&(l.material.needsUpdate=!0,u=v,d=v.version,h=s.toneMapping),l.layers.enableAll(),S.unshift(l,l.geometry,l.material,0,0,null)):v&&v.isTexture&&(c===void 0&&(c=new Lt(new pr(2,2),new mn({name:`BackgroundMaterial`,uniforms:Xi(jn.background.uniforms),vertexShader:jn.background.vertexShader,fragmentShader:jn.background.fragmentShader,side:Wn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute(`normal`),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(c)),c.material.uniforms.t2D.value=v,c.material.uniforms.backgroundIntensity.value=C.backgroundIntensity,c.material.toneMapped=We.getTransfer(v.colorSpace)!==lt,v.matrixAutoUpdate===!0&&v.updateMatrix(),c.material.uniforms.uvTransform.value.copy(v.matrix),(u!==v||d!==v.version||h!==s.toneMapping)&&(c.material.needsUpdate=!0,u=v,d=v.version,h=s.toneMapping),c.layers.enableAll(),S.unshift(c,c.geometry,c.material,0,0,null))}function m(S,C){S.getRGB(Qo,Tc(s)),t.buffers.color.setClear(Qo.r,Qo.g,Qo.b,C,r)}function p(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(S,C=1){a.set(S),o=C,m(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(S){o=S,m(a,o)},render:g,addToRenderList:y,dispose:p}}function Tg(s,e){let t=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=h(null),r=i,a=!1;function o(I,F,H,U,z){let J=!1,W=d(I,U,H,F);r!==W&&(r=W,l(r.object)),J=f(I,U,H,z),J&&g(I,U,H,z),z!==null&&e.update(z,s.ELEMENT_ARRAY_BUFFER),(J||a)&&(a=!1,v(I,F,H,U),z!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(z).buffer))}function c(){return s.createVertexArray()}function l(I){return s.bindVertexArray(I)}function u(I){return s.deleteVertexArray(I)}function d(I,F,H,U){let z=U.wireframe===!0,J=n[F.id];J===void 0&&(J={},n[F.id]=J);let W=I.isInstancedMesh===!0?I.id:0,re=J[W];re===void 0&&(re={},J[W]=re);let Y=re[H.id];Y===void 0&&(Y={},re[H.id]=Y);let te=Y[z];return te===void 0&&(te=h(c()),Y[z]=te),te}function h(I){let F=[],H=[],U=[];for(let z=0;z<t;z++)F[z]=0,H[z]=0,U[z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:F,enabledAttributes:H,attributeDivisors:U,object:I,attributes:{},index:null}}function f(I,F,H,U){let z=r.attributes,J=F.attributes,W=0,re=H.getAttributes();for(let Y in re)if(re[Y].location>=0){let ie=z[Y],Ue=J[Y];if(Ue===void 0&&(Y===`instanceMatrix`&&I.instanceMatrix&&(Ue=I.instanceMatrix),Y===`instanceColor`&&I.instanceColor&&(Ue=I.instanceColor)),ie===void 0||ie.attribute!==Ue||Ue&&ie.data!==Ue.data)return!0;W++}return r.attributesNum!==W||r.index!==U}function g(I,F,H,U){let z={},J=F.attributes,W=0,re=H.getAttributes();for(let Y in re)if(re[Y].location>=0){let ie=J[Y];ie===void 0&&(Y===`instanceMatrix`&&I.instanceMatrix&&(ie=I.instanceMatrix),Y===`instanceColor`&&I.instanceColor&&(ie=I.instanceColor));let Ue={};Ue.attribute=ie,ie&&ie.data&&(Ue.data=ie.data),z[Y]=Ue,W++}r.attributes=z,r.attributesNum=W,r.index=U}function y(){let I=r.newAttributes;for(let F=0,H=I.length;F<H;F++)I[F]=0}function m(I){p(I,0)}function p(I,F){let H=r.newAttributes,U=r.enabledAttributes,z=r.attributeDivisors;H[I]=1,U[I]===0&&(s.enableVertexAttribArray(I),U[I]=1),z[I]!==F&&(s.vertexAttribDivisor(I,F),z[I]=F)}function S(){let I=r.newAttributes,F=r.enabledAttributes;for(let H=0,U=F.length;H<U;H++)F[H]!==I[H]&&(s.disableVertexAttribArray(H),F[H]=0)}function C(I,F,H,U,z,J,W){W===!0?s.vertexAttribIPointer(I,F,H,z,J):s.vertexAttribPointer(I,F,H,U,z,J)}function v(I,F,H,U){y();let z=U.attributes,J=H.getAttributes(),W=F.defaultAttributeValues;for(let re in J){let Y=J[re];if(Y.location>=0){let te=z[re];if(te===void 0&&(re===`instanceMatrix`&&I.instanceMatrix&&(te=I.instanceMatrix),re===`instanceColor`&&I.instanceColor&&(te=I.instanceColor)),te!==void 0){let ie=te.normalized,Ue=te.itemSize,De=e.get(te);if(De===void 0)continue;let mt=De.buffer,et=De.type,it=De.bytesPerElement,q=et===s.INT||et===s.UNSIGNED_INT||te.gpuType===po;if(te.isInterleavedBufferAttribute){let ee=te.data,Ee=ee.stride,ke=te.offset;if(ee.isInstancedInterleavedBuffer){for(let ye=0;ye<Y.locationSize;ye++)p(Y.location+ye,ee.meshPerAttribute);I.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=ee.meshPerAttribute*ee.count)}else for(let ye=0;ye<Y.locationSize;ye++)m(Y.location+ye);s.bindBuffer(s.ARRAY_BUFFER,mt);for(let ye=0;ye<Y.locationSize;ye++)C(Y.location+ye,Ue/Y.locationSize,et,ie,Ee*it,(ke+Ue/Y.locationSize*ye)*it,q)}else{if(te.isInstancedBufferAttribute){for(let ee=0;ee<Y.locationSize;ee++)p(Y.location+ee,te.meshPerAttribute);I.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=te.meshPerAttribute*te.count)}else for(let ee=0;ee<Y.locationSize;ee++)m(Y.location+ee);s.bindBuffer(s.ARRAY_BUFFER,mt);for(let ee=0;ee<Y.locationSize;ee++)C(Y.location+ee,Ue/Y.locationSize,et,ie,Ue*it,Ue/Y.locationSize*ee*it,q)}}else if(W!==void 0){let ie=W[re];if(ie!==void 0)switch(ie.length){case 2:s.vertexAttrib2fv(Y.location,ie);break;case 3:s.vertexAttrib3fv(Y.location,ie);break;case 4:s.vertexAttrib4fv(Y.location,ie);break;default:s.vertexAttrib1fv(Y.location,ie)}}}}S()}function E(){T();for(let I in n){let F=n[I];for(let H in F){let U=F[H];for(let z in U){let J=U[z];for(let W in J)u(J[W].object),delete J[W];delete U[z]}}delete n[I]}}function M(I){if(n[I.id]===void 0)return;let F=n[I.id];for(let H in F){let U=F[H];for(let z in U){let J=U[z];for(let W in J)u(J[W].object),delete J[W];delete U[z]}}delete n[I.id]}function w(I){for(let F in n){let H=n[F];for(let U in H){let z=H[U];if(z[I.id]===void 0)continue;let J=z[I.id];for(let W in J)u(J[W].object),delete J[W];delete z[I.id]}}}function x(I){for(let F in n){let H=n[F],U=I.isInstancedMesh===!0?I.id:0,z=H[U];if(z!==void 0){for(let J in z){let W=z[J];for(let re in W)u(W[re].object),delete W[re];delete z[J]}delete H[U],Object.keys(H).length===0&&delete n[F]}}}function T(){P(),a=!0,r!==i&&(r=i,l(r.object))}function P(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:o,reset:T,resetDefaultState:P,dispose:E,releaseStatesOfGeometry:M,releaseStatesOfObject:x,releaseStatesOfProgram:w,initAttributes:y,enableAttribute:m,disableUnusedAttributes:S}}function wg(s,e,t){let n;function i(c){n=c}function r(c,l){s.drawArrays(n,c,l),t.update(l,n,1)}function a(c,l,u){u!==0&&(s.drawArraysInstanced(n,c,l,u),t.update(l,n,u))}function o(c,l,u){if(u===0)return;e.get(`WEBGL_multi_draw`).multiDrawArraysWEBGL(n,c,0,l,0,u);let h=0;for(let f=0;f<u;f++)h+=l[f];t.update(h,n,1)}this.setMode=i,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function Ag(s,e,t,n){let i;function r(){if(i!==void 0)return i;if(e.has(`EXT_texture_filter_anisotropic`)===!0){let w=e.get(`EXT_texture_filter_anisotropic`);i=s.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function a(w){return!(w!==Mn&&n.convert(w)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(w){let x=w===Bn&&(e.has(`EXT_color_buffer_half_float`)||e.has(`EXT_color_buffer_float`));return!(w!==cn&&w!==On&&!x&&n.convert(w)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE))}function c(w){if(w===`highp`){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return`highp`;w=`mediump`}return w===`mediump`&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?`mediump`:`lowp`}let l=t.precision!==void 0?t.precision:`highp`,u=c(l);u!==l&&(Ne(`WebGLRenderer:`,l,`not supported, using`,u,`instead.`),l=u);let d=t.logarithmicDepthBuffer===!0,h=t.reversedDepthBuffer===!0&&e.has(`EXT_clip_control`);t.reversedDepthBuffer===!0&&h===!1&&Ne(`WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.`);let f=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),g=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=s.getParameter(s.MAX_TEXTURE_SIZE),m=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),p=s.getParameter(s.MAX_VERTEX_ATTRIBS),S=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),C=s.getParameter(s.MAX_VARYING_VECTORS),v=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),E=s.getParameter(s.MAX_SAMPLES),M=s.getParameter(s.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:d,reversedDepthBuffer:h,maxTextures:f,maxVertexTextures:g,maxTextureSize:y,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:S,maxVaryings:C,maxFragmentUniforms:v,maxSamples:E,samples:M}}function Cg(s){let e=this,t=null,n=0,i=!1,r=!1,a=new en,o=new Be,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(d,h){let f=d.length!==0||h||n!==0||i;return i=h,n=d.length,f},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,h){t=u(d,h,0)},this.setState=function(d,h,f){let g=d.clippingPlanes,y=d.clipIntersection,m=d.clipShadows,p=s.get(d);if(!i||g===null||g.length===0||r&&!m)r?u(null):l();else{let S=r?0:n,C=S*4,v=p.clippingState||null;c.value=v,v=u(g,h,C,f);for(let E=0;E!==C;++E)v[E]=t[E];p.clippingState=v,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=S}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(d,h,f,g){let y=d!==null?d.length:0,m=null;if(y!==0){if(m=c.value,g!==!0||m===null){let p=f+y*4,S=h.matrixWorldInverse;o.getNormalMatrix(S),(m===null||m.length<p)&&(m=new Float32Array(p));for(let C=0,v=f;C!==y;++C,v+=4)a.copy(d[C]).applyMatrix4(S,o),a.normal.toArray(m,v),m[v+3]=a.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=y,e.numIntersection=0,m}}var ks=4;var Rg=6;var Pg=20;var Ig=256;var zr=new Ls;var Gu=new Ae;var Rc=null;var Pc=0;var Ic=0;var Dc=!1;var Dg=new R;var Yi=new R;var tl=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,i=100,r={}){let{size:a=256,position:o=Dg}=r;Rc=this._renderer.getRenderTarget(),Pc=this._renderer.getActiveCubeFace(),Ic=this._renderer.getActiveMipmapLevel(),Dc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,n,i,c,o),t>0&&this._blur(c,0,0,t),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Yu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Xu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Rc,Pc,Ic),this._renderer.xr.enabled=Dc,e.scissorTest=!1,Bs(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ti||e.mapping===Wi?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Rc=this._renderer.getRenderTarget(),Pc=this._renderer.getActiveCubeFace(),Ic=this._renderer.getActiveMipmapLevel(),Dc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Gt,minFilter:Gt,generateMipmaps:!1,type:Bn,format:Mn,colorSpace:tr,depthBuffer:!1},i=Wu(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Wu(e,t,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=Lg(r)),this._blurMaterial=Ug(r,e,t),this._ggxMaterial=Ng(r,e,t)}return i}_compileMaterial(e){let t=new Lt(new Qe,e);this._renderer.compile(t,zr)}_sceneToCubeUV(e,t,n,i,r){let c=new Vt(90,1,t,n),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],d=this._renderer,h=d.autoClear,f=d.toneMapping;d.getClearColor(Gu),d.toneMapping=Un,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(i),d.clearDepth(),d.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Lt(new ri,new Bi({name:`PMREM.Background`,side:rn,depthWrite:!1,depthTest:!1})));let y=this._backgroundBox,m=y.material,p=!1,S=e.background;S?S.isColor&&(m.color.copy(S),e.background=null,p=!0):(m.color.copy(Gu),p=!0);for(let C=0;C<6;C++){let v=C%3;v===0?(c.up.set(0,l[C],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x+u[C],r.y,r.z)):v===1?(c.up.set(0,0,l[C]),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y+u[C],r.z)):(c.up.set(0,l[C],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y,r.z+u[C]));let E=this._cubeSize;Bs(i,v*E,C>2?E:0,E,E),d.setRenderTarget(i),p&&d.render(y,c),d.render(e,c)}d.toneMapping=f,d.autoClear=h,e.background=S}_textureToCubeUV(e,t){let n=this._renderer,i=e.mapping===Ti||e.mapping===Wi;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Yu()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Xu());let r=i?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=r;let o=r.uniforms;o.envMap.value=e;let c=this._cubeSize;Bs(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(a,zr)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let i=this._lodMeshes.length;for(let r=1;r<i;r++)this._applyGGXFilter(e,r-1,r);t.autoClear=n}_applyGGXFilter(e,t,n){let i=this._renderer,r=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;let c=a.uniforms,l=n/(this._lodMeshes.length-1),u=t/(this._lodMeshes.length-1),f=Math.sqrt(l*l-u*u)*(l*1.25),{_lodMax:g}=this,y=this._sizeLods[n],m=3*y*(n>g-ks?n-g+ks:0),p=4*(this._cubeSize-y);c.envMap.value=e.texture,c.roughness.value=f,c.mipInt.value=g-t,Bs(r,m,p,3*y,2*y),i.setRenderTarget(r),i.render(o,zr),c.envMap.value=r.texture,c.roughness.value=0,c.mipInt.value=g-n,Bs(e,m,p,3*y,2*y),i.setRenderTarget(e),i.render(o,zr)}_blur(e,t,n,i){let r=this._pingPongRenderTarget,a=Math.min(i,Math.PI)/Math.SQRT2;this._blurPass(e,r,t,n,a),this._blurPass(r,e,n,n,a)}_blurPass(e,t,n,i,r){let a=this._renderer,o=this._blurMaterial,c=this._lodMeshes[i];c.material=o;let l=o.uniforms;l.envMap.value=e.texture,l.sigma.value=r,l.mipInt.value=this._lodMax-n;let u=this._sizeLods[i];Bs(t,3*u*(i>this._lodMax-ks?i-this._lodMax+ks:0),4*(this._cubeSize-u),3*u,2*u),a.setRenderTarget(t),a.render(c,zr)}};function Lg(s){let e=[],t=[],n=s,i=s-ks+1+Rg;for(let r=0;r<i;r++){let a=Math.pow(2,n);e.push(a);let o=1/(a-2),c=-o,l=1+o,u=[c,c,l,c,l,l,c,c,l,l,c,l],d=6,h=6,f=3,g=new Float32Array(108),y=new Float32Array(108);for(let p=0;p<d;p++){let S=p%3*2/3-1,C=p>2?0:-1,v=[S,C,0,S+2/3,C,0,S+2/3,C+1,0,S,C,0,S+2/3,C+1,0,S,C+1,0];g.set(v,18*p);for(let E=0;E<h;E++){let M=u[E*2]*2-1,w=u[E*2+1]*2-1;p===0?Yi.set(1,w,M):p===1?Yi.set(-M,1,-w):p===2?Yi.set(-M,w,1):p===3?Yi.set(-1,w,-M):p===4?Yi.set(-M,-1,w):Yi.set(M,w,-1),Yi.toArray(y,(p*h+E)*f)}}let m=new Qe;m.setAttribute(`position`,new vt(g,f)),m.setAttribute(`outputDirection`,new vt(y,f)),t.push(new Lt(m,null)),n>ks&&n--}return{lodMeshes:t,sizeLods:e}}function Wu(s,e,t){let n=new ln(s,e,t);return n.texture.mapping=Ir,n.texture.name=`PMREM.cubeUv`,n.scissorTest=!0,n}function Bs(s,e,t,n,i){s.viewport.set(e,t,n,i),s.scissor.set(e,t,n,i)}function Ng(s,e,t){return new mn({name:`PMREMGGXConvolution`,defines:{GGX_SAMPLES:Ig,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:sl(),fragmentShader:`

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
		`,blending:Yn,depthTest:!1,depthWrite:!1})}function Ug(s,e,t){return new mn({name:`SphericalGaussianBlur`,defines:{SAMPLES:Pg,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:sl(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float sigma;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359
			#define GOLDEN_ANGLE 2.39996322973

			void main() {

				if ( sigma == 0.0 ) {

					gl_FragColor = vec4( bilinearCubeUV( envMap, vOutputDirection, mipInt ), 1.0 );
					return;

				}

				vec3 outputDirection = normalize( vOutputDirection );

				vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
				vec3 tangent = normalize( cross( up, outputDirection ) );
				vec3 bitangent = cross( outputDirection, tangent );

				// Truncate the kernel at three standard deviations or at the antipode.
				float thetaMax = min( 3.0 * sigma, PI );
				float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

				vec3 accumColor = vec3( 0.0 );
				float accumWeight = 0.0;

				for ( int i = 0; i < SAMPLES; i ++ ) {

					// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
					float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
					float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
					float phi = float( i ) * GOLDEN_ANGLE;

					vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
					vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

					// Correct the planar sample density to solid angle.
					float weight = sin( theta ) / theta;

					accumColor += weight * bilinearCubeUV( envMap, sampleDirection, mipInt );
					accumWeight += weight;

				}

				gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

			}
		`,blending:Yn,depthTest:!1,depthWrite:!1})}function Xu(){return new mn({name:`EquirectangularToCubeUV`,uniforms:{envMap:{value:null}},vertexShader:sl(),fragmentShader:`

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
		`,blending:Yn,depthTest:!1,depthWrite:!1})}function Yu(){return new mn({name:`CubemapToCubeUV`,uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:sl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Yn,depthTest:!1,depthWrite:!1})}function sl(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var nl=class extends ln{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new hr(i),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new ri(5,5,5),r=new mn({name:`CubemapFromEquirect`,uniforms:Xi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:rn,blending:Yn});r.uniforms.tEquirect.value=t;let a=new Lt(i,r),o=t.minFilter;return t.minFilter===wi&&(t.minFilter=Gt),new oo(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,i=!0){let r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,i);e.setRenderTarget(r)}};function Fg(s){let e=new WeakMap,t=new WeakMap,n=null;function i(h,f=!1){return h==null?null:f?a(h):r(h)}function r(h){if(h&&h.isTexture){let f=h.mapping;if(f===ho||f===uo)if(e.has(h)){let g=e.get(h).texture;return o(g,h.mapping)}else{let g=h.image;if(g&&g.height>0){let y=new nl(g.height);return y.fromEquirectangularTexture(s,h),e.set(h,y),h.addEventListener(`dispose`,l),o(y.texture,h.mapping)}else return null}}return h}function a(h){if(h&&h.isTexture){let f=h.mapping,g=f===ho||f===uo,y=f===Ti||f===Wi;if(g||y){let m=t.get(h),p=m!==void 0?m.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==p)return n===null&&(n=new tl(s)),m=g?n.fromEquirectangular(h,m):n.fromCubemap(h,m),m.texture.pmremVersion=h.pmremVersion,t.set(h,m),m.texture;if(m!==void 0)return m.texture;{let S=h.image;return g&&S&&S.height>0||y&&S&&c(S)?(n===null&&(n=new tl(s)),m=g?n.fromEquirectangular(h):n.fromCubemap(h),m.texture.pmremVersion=h.pmremVersion,t.set(h,m),h.addEventListener(`dispose`,u),m.texture):null}}}return h}function o(h,f){return f===ho?h.mapping=Ti:f===uo&&(h.mapping=Wi),h}function c(h){let f=0,g=6;for(let y=0;y<g;y++)h[y]!==void 0&&f++;return f===g}function l(h){let f=h.target;f.removeEventListener(`dispose`,l);let g=e.get(f);g!==void 0&&(e.delete(f),g.dispose())}function u(h){let f=h.target;f.removeEventListener(`dispose`,u);let g=t.get(f);g!==void 0&&(t.delete(f),g.dispose())}function d(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:d}}function Og(s){let e={};function t(n){if(e[n]!==void 0)return e[n];let i=s.getExtension(n);return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t(`EXT_color_buffer_float`),t(`WEBGL_clip_cull_distance`),t(`OES_texture_float_linear`),t(`EXT_color_buffer_half_float`),t(`WEBGL_multisampled_render_to_texture`),t(`WEBGL_render_shared_exponent`)},get:function(n){let i=t(n);return i===null&&Oi(`WebGLRenderer: `+n+` extension not supported.`),i}}}function Bg(s,e,t,n){let i={},r=new WeakMap;function a(d){let h=d.target;h.index!==null&&e.remove(h.index);for(let g in h.attributes)e.remove(h.attributes[g]);h.removeEventListener(`dispose`,a),delete i[h.id];let f=r.get(h);f&&(e.remove(f),r.delete(h)),n.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function o(d,h){return i[h.id]===!0||(h.addEventListener(`dispose`,a),i[h.id]=!0,t.memory.geometries++),h}function c(d){let h=d.attributes;for(let f in h)e.update(h[f],s.ARRAY_BUFFER)}function l(d){let h=[],f=d.index,g=d.attributes.position,y=0;if(g===void 0)return;if(f!==null){let S=f.array;y=f.version;for(let C=0,v=S.length;C<v;C+=3){let E=S[C+0],M=S[C+1],w=S[C+2];h.push(E,M,M,w,w,E)}}else{let S=g.array;y=g.version;for(let C=0,v=S.length/3-1;C<v;C+=3){let E=C+0,M=C+1,w=C+2;h.push(E,M,M,w,w,E)}}let m=new(g.count>=65535?or:ar)(h,1);m.version=y;let p=r.get(d);p&&e.remove(p),r.set(d,m)}function u(d){let h=r.get(d);if(h){let f=d.index;f!==null&&h.version<f.version&&l(d)}else l(d);return r.get(d)}return{get:o,update:c,getWireframeAttribute:u}}function kg(s,e,t){let n;function i(d){n=d}let r,a;function o(d){r=d.type,a=d.bytesPerElement}function c(d,h){s.drawElements(n,h,r,d*a),t.update(h,n,1)}function l(d,h,f){f!==0&&(s.drawElementsInstanced(n,h,r,d*a,f),t.update(h,n,f))}function u(d,h,f){if(f===0)return;e.get(`WEBGL_multi_draw`).multiDrawElementsWEBGL(n,h,0,r,d,0,f);let y=0;for(let m=0;m<f;m++)y+=h[m];t.update(y,n,1)}this.setMode=i,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=u}function zg(s){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case s.TRIANGLES:t.triangles+=o*(r/3);break;case s.LINES:t.lines+=o*(r/2);break;case s.LINE_STRIP:t.lines+=o*(r-1);break;case s.LINE_LOOP:t.lines+=o*r;break;case s.POINTS:t.points+=o*r;break;default:Oe(`WebGLInfo: Unknown draw mode:`,a)}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function Hg(s,e,t){let n=new WeakMap,i=new Et;function r(a,o,c){let l=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=u!==void 0?u.length:0,h=n.get(o);if(h===void 0||h.count!==d){let P=function(){x.dispose(),n.delete(o),o.removeEventListener(`dispose`,P)};h!==void 0&&h.texture.dispose();let g=o.morphAttributes.position!==void 0,y=o.morphAttributes.normal!==void 0,m=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],S=o.morphAttributes.normal||[],C=o.morphAttributes.color||[],v=0;g===!0&&(v=1),y===!0&&(v=2),m===!0&&(v=3);let E=o.attributes.position.count*v,M=1;E>e.maxTextureSize&&(M=Math.ceil(E/e.maxTextureSize),E=e.maxTextureSize);let w=new Float32Array(E*M*4*d),x=new sr(w,E,M,d);x.type=On,x.needsUpdate=!0;let T=v*4;for(let I=0;I<d;I++){let F=p[I],H=S[I],U=C[I],z=E*M*4*I;for(let J=0;J<F.count;J++){let W=J*T;g===!0&&(i.fromBufferAttribute(F,J),w[z+W+0]=i.x,w[z+W+1]=i.y,w[z+W+2]=i.z,w[z+W+3]=0),y===!0&&(i.fromBufferAttribute(H,J),w[z+W+4]=i.x,w[z+W+5]=i.y,w[z+W+6]=i.z,w[z+W+7]=0),m===!0&&(i.fromBufferAttribute(U,J),w[z+W+8]=i.x,w[z+W+9]=i.y,w[z+W+10]=i.z,w[z+W+11]=U.itemSize===4?i.w:1)}}h={count:d,texture:x,size:new Se(E,M)},n.set(o,h),o.addEventListener(`dispose`,P)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(s,`morphTexture`,a.morphTexture,t);else{let g=0;for(let m=0;m<l.length;m++)g+=l[m];let y=o.morphTargetsRelative?1:1-g;c.getUniforms().setValue(s,`morphTargetBaseInfluence`,y),c.getUniforms().setValue(s,`morphTargetInfluences`,l)}c.getUniforms().setValue(s,`morphTargetsTexture`,h.texture,t),c.getUniforms().setValue(s,`morphTargetsTextureSize`,h.size)}return{update:r}}function Vg(s,e,t,n,i){let r=new WeakMap;function a(l){let u=i.render.frame,d=l.geometry,h=e.get(l,d);if(r.get(h)!==u&&(e.update(h),r.set(h,u)),l.isInstancedMesh&&(l.hasEventListener(`dispose`,c)===!1&&l.addEventListener(`dispose`,c),r.get(l)!==u&&(t.update(l.instanceMatrix,s.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,s.ARRAY_BUFFER),r.set(l,u))),l.isSkinnedMesh){let f=l.skeleton;r.get(f)!==u&&(f.update(),r.set(f,u))}return h}function o(){r=new WeakMap}function c(l){let u=l.target;u.removeEventListener(`dispose`,c),n.releaseStatesOfObject(u),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:a,dispose:o}}var Gg={[ac]:`LINEAR_TONE_MAPPING`,[oc]:`REINHARD_TONE_MAPPING`,[lc]:`CINEON_TONE_MAPPING`,[cc]:`ACES_FILMIC_TONE_MAPPING`,[uc]:`AGX_TONE_MAPPING`,[dc]:`NEUTRAL_TONE_MAPPING`,[hc]:`CUSTOM_TONE_MAPPING`};function Wg(s,e,t,n,i,r){let a=new ln(e,t,{type:s,depthBuffer:i,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,c=null,l=new Qe;l.setAttribute(`position`,new Ve([-1,3,0,-1,-1,0,3,-1,0],3)),l.setAttribute(`uv`,new Ve([0,2,0,0,2,0],2));let u=new ja({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),d=new Lt(l,u),h=new Ls(-1,1,1,-1,0,1),f=null,g=null,y=!1,m,p=null,S=[],C=!1;this.setSize=function(v,E){a.setSize(v,E),o!==null&&o.setSize(v,E),c!==null&&c.setSize(v,E);for(let M=0;M<S.length;M++){let w=S[M];w.setSize&&w.setSize(v,E)}},this.setEffects=function(v){S=v,C=S.length>0&&S[0].isRenderPass===!0;let E=a.width,M=a.height;S.length>0&&o===null&&(o=new ln(E,M,{type:Bn,depthBuffer:!1,stencilBuffer:!1}),c=new ln(E,M,{type:Bn,depthBuffer:!1,stencilBuffer:!1}));for(let w=0;w<S.length;w++){let x=S[w];x.setSize&&x.setSize(E,M)}},this.begin=function(v,E){if(y||v.toneMapping===Un&&S.length===0)return!1;if(p=E,E!==null){let M=E.width,w=E.height;(a.width!==M||a.height!==w)&&this.setSize(M,w)}return C===!1&&v.setRenderTarget(a),m=v.toneMapping,v.toneMapping=Un,!0},this.hasRenderPass=function(){return C},this.end=function(v,E){v.toneMapping=m,y=!0;let M=a,w=o;for(let x=0;x<S.length;x++){let T=S[x];T.enabled!==!1&&(T.render(v,w,M,E),T.needsSwap!==!1&&(M=w,w=w===o?c:o))}if(f!==v.outputColorSpace||g!==v.toneMapping){f=v.outputColorSpace,g=v.toneMapping,u.defines={},We.getTransfer(f)===lt&&(u.defines.SRGB_TRANSFER=``);let x=Gg[g];x&&(u.defines[x]=``),u.needsUpdate=!0}u.uniforms.tDiffuse.value=M.texture,v.setRenderTarget(p),v.render(d,h),p=null,y=!1},this.isCompositing=function(){return y},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),c!==null&&c.dispose(),l.dispose(),u.dispose()}}var dd=new Zt;var Uc=new yi(1,1);var fd=new sr;var pd=new Ha;var md=new hr;var qu=[];var ju=[];var Zu=new Float32Array(16);var Ku=new Float32Array(9);var Ju=new Float32Array(4);function Hs(s,e,t){let n=s[0];if(n<=0||n>0)return s;let i=e*t,r=qu[i];if(r===void 0&&(r=new Float32Array(i),qu[i]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,s[a].toArray(r,o)}return r}function Ft(s,e){if(s.length!==e.length)return!1;for(let t=0,n=s.length;t<n;t++)if(s[t]!==e[t])return!1;return!0}function Ot(s,e){for(let t=0,n=e.length;t<n;t++)s[t]=e[t]}function rl(s,e){let t=ju[e];t===void 0&&(t=new Int32Array(e),ju[e]=t);for(let n=0;n!==e;++n)t[n]=s.allocateTextureUnit();return t}function Xg(s,e){let t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function Yg(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ft(t,e))return;s.uniform2fv(this.addr,e),Ot(t,e)}}function qg(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Ft(t,e))return;s.uniform3fv(this.addr,e),Ot(t,e)}}function jg(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ft(t,e))return;s.uniform4fv(this.addr,e),Ot(t,e)}}function Zg(s,e){let t=this.cache,n=e.elements;if(n===void 0){if(Ft(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),Ot(t,e)}else{if(Ft(t,n))return;Ju.set(n),s.uniformMatrix2fv(this.addr,!1,Ju),Ot(t,n)}}function Kg(s,e){let t=this.cache,n=e.elements;if(n===void 0){if(Ft(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),Ot(t,e)}else{if(Ft(t,n))return;Ku.set(n),s.uniformMatrix3fv(this.addr,!1,Ku),Ot(t,n)}}function Jg(s,e){let t=this.cache,n=e.elements;if(n===void 0){if(Ft(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),Ot(t,e)}else{if(Ft(t,n))return;Zu.set(n),s.uniformMatrix4fv(this.addr,!1,Zu),Ot(t,n)}}function $g(s,e){let t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function Qg(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ft(t,e))return;s.uniform2iv(this.addr,e),Ot(t,e)}}function e0(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ft(t,e))return;s.uniform3iv(this.addr,e),Ot(t,e)}}function t0(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ft(t,e))return;s.uniform4iv(this.addr,e),Ot(t,e)}}function n0(s,e){let t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function i0(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ft(t,e))return;s.uniform2uiv(this.addr,e),Ot(t,e)}}function s0(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ft(t,e))return;s.uniform3uiv(this.addr,e),Ot(t,e)}}function r0(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ft(t,e))return;s.uniform4uiv(this.addr,e),Ot(t,e)}}function a0(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_2D_SHADOW?(Uc.compareFunction=t.isReversedDepthBuffer()?Jo:Ko,r=Uc):r=dd,t.setTexture2D(e||r,i)}function o0(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||pd,i)}function l0(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||md,i)}function c0(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||fd,i)}function h0(s){switch(s){case 5126:return Xg;case 35664:return Yg;case 35665:return qg;case 35666:return jg;case 35674:return Zg;case 35675:return Kg;case 35676:return Jg;case 5124:case 35670:return $g;case 35667:case 35671:return Qg;case 35668:case 35672:return e0;case 35669:case 35673:return t0;case 5125:return n0;case 36294:return i0;case 36295:return s0;case 36296:return r0;case 35678:case 36198:case 36298:case 36306:case 35682:return a0;case 35679:case 36299:case 36307:return o0;case 35680:case 36300:case 36308:case 36293:return l0;case 36289:case 36303:case 36311:case 36292:return c0}}function u0(s,e){s.uniform1fv(this.addr,e)}function d0(s,e){let t=Hs(e,this.size,2);s.uniform2fv(this.addr,t)}function f0(s,e){let t=Hs(e,this.size,3);s.uniform3fv(this.addr,t)}function p0(s,e){let t=Hs(e,this.size,4);s.uniform4fv(this.addr,t)}function m0(s,e){let t=Hs(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function g0(s,e){let t=Hs(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function _0(s,e){let t=Hs(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function x0(s,e){s.uniform1iv(this.addr,e)}function y0(s,e){s.uniform2iv(this.addr,e)}function v0(s,e){s.uniform3iv(this.addr,e)}function b0(s,e){s.uniform4iv(this.addr,e)}function S0(s,e){s.uniform1uiv(this.addr,e)}function M0(s,e){s.uniform2uiv(this.addr,e)}function E0(s,e){s.uniform3uiv(this.addr,e)}function T0(s,e){s.uniform4uiv(this.addr,e)}function w0(s,e,t){let n=this.cache,i=e.length,r=rl(t,i);Ft(n,r)||(s.uniform1iv(this.addr,r),Ot(n,r));let a;this.type===s.SAMPLER_2D_SHADOW?a=Uc:a=dd;for(let o=0;o!==i;++o)t.setTexture2D(e[o]||a,r[o])}function A0(s,e,t){let n=this.cache,i=e.length,r=rl(t,i);Ft(n,r)||(s.uniform1iv(this.addr,r),Ot(n,r));for(let a=0;a!==i;++a)t.setTexture3D(e[a]||pd,r[a])}function C0(s,e,t){let n=this.cache,i=e.length,r=rl(t,i);Ft(n,r)||(s.uniform1iv(this.addr,r),Ot(n,r));for(let a=0;a!==i;++a)t.setTextureCube(e[a]||md,r[a])}function R0(s,e,t){let n=this.cache,i=e.length,r=rl(t,i);Ft(n,r)||(s.uniform1iv(this.addr,r),Ot(n,r));for(let a=0;a!==i;++a)t.setTexture2DArray(e[a]||fd,r[a])}function P0(s){switch(s){case 5126:return u0;case 35664:return d0;case 35665:return f0;case 35666:return p0;case 35674:return m0;case 35675:return g0;case 35676:return _0;case 5124:case 35670:return x0;case 35667:case 35671:return y0;case 35668:case 35672:return v0;case 35669:case 35673:return b0;case 5125:return S0;case 36294:return M0;case 36295:return E0;case 36296:return T0;case 35678:case 36198:case 36298:case 36306:case 35682:return w0;case 35679:case 36299:case 36307:return A0;case 35680:case 36300:case 36308:case 36293:return C0;case 36289:case 36303:case 36311:case 36292:return R0}}var Fc=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=h0(t.type)}};var Oc=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=P0(t.type)}};var Bc=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let i=this.seq;for(let r=0,a=i.length;r!==a;++r){let o=i[r];o.setValue(e,t[o.id],n)}}};var Lc=/(\w+)(\])?(\[|\.)?/g;function $u(s,e){s.seq.push(e),s.map[e.id]=e}function I0(s,e,t){let n=s.name,i=n.length;for(Lc.lastIndex=0;;){let r=Lc.exec(n),a=Lc.lastIndex,o=r[1],c=r[2]===`]`,l=r[3];if(c&&(o=o|0),l===void 0||l===`[`&&a+2===i){$u(t,l===void 0?new Fc(o,s,e):new Oc(o,s,e));break}else{let d=t.map[o];d===void 0&&(d=new Bc(o),$u(t,d)),t=d}}}var zs=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){let o=e.getActiveUniform(t,a);I0(o,e.getUniformLocation(t,o.name),this)}let i=[],r=[];for(let a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?i.push(a):r.push(a);i.length>0&&(this.seq=i.concat(r))}setValue(e,t,n,i){let r=this.map[t];r!==void 0&&r.setValue(e,n,i)}setOptional(e,t,n){let i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let r=0,a=t.length;r!==a;++r){let o=t[r],c=n[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,i)}}static seqWithValue(e,t){let n=[];for(let i=0,r=e.length;i!==r;++i){let a=e[i];a.id in t&&n.push(a)}return n}};function Qu(s,e,t){let n=s.createShader(e);return s.shaderSource(n,t),s.compileShader(n),n}var D0=37297;var L0=0;function N0(s,e){let t=s.split(`
`),n=[],i=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=i;a<r;a++){let o=a+1;n.push(`${o===e?`>`:` `} ${o}: ${t[a]}`)}return n.join(`
`)}var ed=new Be;function U0(s){We._getMatrix(ed,We.workingColorSpace,s);let e=`mat3( ${ed.elements.map(t=>t.toFixed(4))} )`;switch(We.getTransfer(s)){case nr:return[e,`LinearTransferOETF`];case lt:return[e,`sRGBTransferOETF`];default:return Ne(`WebGLProgram: Unsupported color space: `,s),[e,`LinearTransferOETF`]}}function td(s,e,t){let n=s.getShaderParameter(e,s.COMPILE_STATUS),r=(s.getShaderInfoLog(e)||``).trim();if(n&&r===``)return``;let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+N0(s.getShaderSource(e),o)}else return r}function F0(s,e){let t=U0(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,`}`].join(`
`)}var O0={[ac]:`Linear`,[oc]:`Reinhard`,[lc]:`Cineon`,[cc]:`ACESFilmic`,[uc]:`AgX`,[dc]:`Neutral`,[hc]:`Custom`};function B0(s,e){let t=O0[e];return t===void 0?(Ne(`WebGLProgram: Unsupported toneMapping:`,e),`vec3 `+s+`( vec3 color ) { return LinearToneMapping( color ); }`):`vec3 `+s+`( vec3 color ) { return `+t+`ToneMapping( color ); }`}var el=new R;function k0(){We.getLuminanceCoefficients(el);return[`float luminance( const in vec3 rgb ) {`,`	const vec3 weights = vec3( ${el.x.toFixed(4)}, ${el.y.toFixed(4)}, ${el.z.toFixed(4)} );`,`	return dot( weights, rgb );`,`}`].join(`
`)}function z0(s){return[s.extensionClipCullDistance?`#extension GL_ANGLE_clip_cull_distance : require`:``,s.extensionMultiDraw?`#extension GL_ANGLE_multi_draw : require`:``].filter(Vr).join(`
`)}function H0(s){let e=[];for(let t in s){let n=s[t];n!==!1&&e.push(`#define `+t+` `+n)}return e.join(`
`)}function V0(s,e){let t={},n=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){let r=s.getActiveAttrib(e,i),a=r.name,o=1;r.type===s.FLOAT_MAT2&&(o=2),r.type===s.FLOAT_MAT3&&(o=3),r.type===s.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:s.getAttribLocation(e,a),locationSize:o}}return t}function Vr(s){return s!==``}function nd(s,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function id(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var G0=/^[ \t]*#include +<([\w\d./]+)>/gm;function kc(s){return s.replace(G0,X0)}var W0=new Map;function X0(s,e){let t=Ye[e];if(t===void 0){let n=W0.get(e);if(n!==void 0)t=Ye[n],Ne(`WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.`,e,n);else throw new Error(`THREE.WebGLProgram: Can not resolve #include <`+e+`>`)}return kc(t)}var Y0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function sd(s){return s.replace(Y0,q0)}function q0(s,e,t,n){let i=``;for(let r=parseInt(e);r<parseInt(t);r++)i+=n.replace(/\[\s*i\s*\]/g,`[ `+r+` ]`).replace(/UNROLLED_LOOP_INDEX/g,r);return i}function rd(s){let e=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision===`highp`?e+=`
#define HIGH_PRECISION`:s.precision===`mediump`?e+=`
#define MEDIUM_PRECISION`:s.precision===`lowp`&&(e+=`
#define LOW_PRECISION`),e}var j0={[Pr]:`SHADOWMAP_TYPE_PCF`,[Ns]:`SHADOWMAP_TYPE_VSM`};function Z0(s){return j0[s.shadowMapType]||`SHADOWMAP_TYPE_BASIC`}var K0={[Ti]:`ENVMAP_TYPE_CUBE`,[Wi]:`ENVMAP_TYPE_CUBE`,[Ir]:`ENVMAP_TYPE_CUBE_UV`};function J0(s){return s.envMap===!1?`ENVMAP_TYPE_CUBE`:K0[s.envMapMode]||`ENVMAP_TYPE_CUBE`}var $0={[Wi]:`ENVMAP_MODE_REFRACTION`};function Q0(s){return s.envMap===!1?`ENVMAP_MODE_REFLECTION`:$0[s.envMapMode]||`ENVMAP_MODE_REFLECTION`}var e_={[co]:`ENVMAP_BLENDING_MULTIPLY`,[Mu]:`ENVMAP_BLENDING_MIX`,[Eu]:`ENVMAP_BLENDING_ADD`};function t_(s){return s.envMap===!1?`ENVMAP_BLENDING_NONE`:e_[s.combine]||`ENVMAP_BLENDING_NONE`}function n_(s){let e=s.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function i_(s,e,t,n){let i=s.getContext(),r=t.defines,a=t.vertexShader,o=t.fragmentShader,c=Z0(t),l=J0(t),u=Q0(t),d=t_(t),h=n_(t),f=z0(t),g=H0(r),y=i.createProgram(),m,p,S=t.glslVersion?`#version `+t.glslVersion+`
`:``;t.isRawShaderMaterial?(m=[`#define SHADER_TYPE `+t.shaderType,`#define SHADER_NAME `+t.shaderName,g].filter(Vr).join(`
`),m.length>0&&(m+=`
`),p=[`#define SHADER_TYPE `+t.shaderType,`#define SHADER_NAME `+t.shaderName,g].filter(Vr).join(`
`),p.length>0&&(p+=`
`)):(m=[rd(t),`#define SHADER_TYPE `+t.shaderType,`#define SHADER_NAME `+t.shaderName,g,t.extensionClipCullDistance?`#define USE_CLIP_DISTANCE`:``,t.batching?`#define USE_BATCHING`:``,t.batchingColor?`#define USE_BATCHING_COLOR`:``,t.instancing?`#define USE_INSTANCING`:``,t.instancingColor?`#define USE_INSTANCING_COLOR`:``,t.instancingMorph?`#define USE_INSTANCING_MORPH`:``,t.useFog&&t.fog?`#define USE_FOG`:``,t.useFog&&t.fogExp2?`#define FOG_EXP2`:``,t.map?`#define USE_MAP`:``,t.envMap?`#define USE_ENVMAP`:``,t.envMap?`#define `+u:``,t.lightMap?`#define USE_LIGHTMAP`:``,t.aoMap?`#define USE_AOMAP`:``,t.bumpMap?`#define USE_BUMPMAP`:``,t.normalMap?`#define USE_NORMALMAP`:``,t.normalMapObjectSpace?`#define USE_NORMALMAP_OBJECTSPACE`:``,t.normalMapTangentSpace?`#define USE_NORMALMAP_TANGENTSPACE`:``,t.displacementMap?`#define USE_DISPLACEMENTMAP`:``,t.emissiveMap?`#define USE_EMISSIVEMAP`:``,t.anisotropy?`#define USE_ANISOTROPY`:``,t.anisotropyMap?`#define USE_ANISOTROPYMAP`:``,t.clearcoatMap?`#define USE_CLEARCOATMAP`:``,t.clearcoatRoughnessMap?`#define USE_CLEARCOAT_ROUGHNESSMAP`:``,t.clearcoatNormalMap?`#define USE_CLEARCOAT_NORMALMAP`:``,t.iridescenceMap?`#define USE_IRIDESCENCEMAP`:``,t.iridescenceThicknessMap?`#define USE_IRIDESCENCE_THICKNESSMAP`:``,t.specularMap?`#define USE_SPECULARMAP`:``,t.specularColorMap?`#define USE_SPECULAR_COLORMAP`:``,t.specularIntensityMap?`#define USE_SPECULAR_INTENSITYMAP`:``,t.roughnessMap?`#define USE_ROUGHNESSMAP`:``,t.metalnessMap?`#define USE_METALNESSMAP`:``,t.alphaMap?`#define USE_ALPHAMAP`:``,t.alphaHash?`#define USE_ALPHAHASH`:``,t.transmission?`#define USE_TRANSMISSION`:``,t.transmissionMap?`#define USE_TRANSMISSIONMAP`:``,t.thicknessMap?`#define USE_THICKNESSMAP`:``,t.sheenColorMap?`#define USE_SHEEN_COLORMAP`:``,t.sheenRoughnessMap?`#define USE_SHEEN_ROUGHNESSMAP`:``,t.mapUv?`#define MAP_UV `+t.mapUv:``,t.alphaMapUv?`#define ALPHAMAP_UV `+t.alphaMapUv:``,t.lightMapUv?`#define LIGHTMAP_UV `+t.lightMapUv:``,t.aoMapUv?`#define AOMAP_UV `+t.aoMapUv:``,t.emissiveMapUv?`#define EMISSIVEMAP_UV `+t.emissiveMapUv:``,t.bumpMapUv?`#define BUMPMAP_UV `+t.bumpMapUv:``,t.normalMapUv?`#define NORMALMAP_UV `+t.normalMapUv:``,t.displacementMapUv?`#define DISPLACEMENTMAP_UV `+t.displacementMapUv:``,t.metalnessMapUv?`#define METALNESSMAP_UV `+t.metalnessMapUv:``,t.roughnessMapUv?`#define ROUGHNESSMAP_UV `+t.roughnessMapUv:``,t.anisotropyMapUv?`#define ANISOTROPYMAP_UV `+t.anisotropyMapUv:``,t.clearcoatMapUv?`#define CLEARCOATMAP_UV `+t.clearcoatMapUv:``,t.clearcoatNormalMapUv?`#define CLEARCOAT_NORMALMAP_UV `+t.clearcoatNormalMapUv:``,t.clearcoatRoughnessMapUv?`#define CLEARCOAT_ROUGHNESSMAP_UV `+t.clearcoatRoughnessMapUv:``,t.iridescenceMapUv?`#define IRIDESCENCEMAP_UV `+t.iridescenceMapUv:``,t.iridescenceThicknessMapUv?`#define IRIDESCENCE_THICKNESSMAP_UV `+t.iridescenceThicknessMapUv:``,t.sheenColorMapUv?`#define SHEEN_COLORMAP_UV `+t.sheenColorMapUv:``,t.sheenRoughnessMapUv?`#define SHEEN_ROUGHNESSMAP_UV `+t.sheenRoughnessMapUv:``,t.specularMapUv?`#define SPECULARMAP_UV `+t.specularMapUv:``,t.specularColorMapUv?`#define SPECULAR_COLORMAP_UV `+t.specularColorMapUv:``,t.specularIntensityMapUv?`#define SPECULAR_INTENSITYMAP_UV `+t.specularIntensityMapUv:``,t.transmissionMapUv?`#define TRANSMISSIONMAP_UV `+t.transmissionMapUv:``,t.thicknessMapUv?`#define THICKNESSMAP_UV `+t.thicknessMapUv:``,t.vertexTangents&&t.flatShading===!1?`#define USE_TANGENT`:``,t.vertexNormals?`#define HAS_NORMAL`:``,t.vertexColors?`#define USE_COLOR`:``,t.vertexAlphas?`#define USE_COLOR_ALPHA`:``,t.vertexUv1s?`#define USE_UV1`:``,t.vertexUv2s?`#define USE_UV2`:``,t.vertexUv3s?`#define USE_UV3`:``,t.pointsUvs?`#define USE_POINTS_UV`:``,t.flatShading?`#define FLAT_SHADED`:``,t.skinning?`#define USE_SKINNING`:``,t.morphTargets?`#define USE_MORPHTARGETS`:``,t.morphNormals&&t.flatShading===!1?`#define USE_MORPHNORMALS`:``,t.morphColors?`#define USE_MORPHCOLORS`:``,t.morphTargetsCount>0?`#define MORPHTARGETS_TEXTURE_STRIDE `+t.morphTextureStride:``,t.morphTargetsCount>0?`#define MORPHTARGETS_COUNT `+t.morphTargetsCount:``,t.doubleSided?`#define DOUBLE_SIDED`:``,t.flipSided?`#define FLIP_SIDED`:``,t.shadowMapEnabled?`#define USE_SHADOWMAP`:``,t.shadowMapEnabled?`#define `+c:``,t.sizeAttenuation?`#define USE_SIZEATTENUATION`:``,t.numLightProbes>0?`#define USE_LIGHT_PROBES`:``,t.logarithmicDepthBuffer?`#define USE_LOGARITHMIC_DEPTH_BUFFER`:``,t.reversedDepthBuffer?`#define USE_REVERSED_DEPTH_BUFFER`:``,`uniform mat4 modelMatrix;`,`uniform mat4 modelViewMatrix;`,`uniform mat4 projectionMatrix;`,`uniform mat4 viewMatrix;`,`uniform mat3 normalMatrix;`,`uniform vec3 cameraPosition;`,`uniform bool isOrthographic;`,`#ifdef USE_INSTANCING`,`	attribute mat4 instanceMatrix;`,`#endif`,`#ifdef USE_INSTANCING_COLOR`,`	attribute vec3 instanceColor;`,`#endif`,`#ifdef USE_INSTANCING_MORPH`,`	uniform sampler2D morphTexture;`,`#endif`,`attribute vec3 position;`,`attribute vec3 normal;`,`attribute vec2 uv;`,`#ifdef USE_UV1`,`	attribute vec2 uv1;`,`#endif`,`#ifdef USE_UV2`,`	attribute vec2 uv2;`,`#endif`,`#ifdef USE_UV3`,`	attribute vec2 uv3;`,`#endif`,`#ifdef USE_TANGENT`,`	attribute vec4 tangent;`,`#endif`,`#if defined( USE_COLOR_ALPHA )`,`	attribute vec4 color;`,`#elif defined( USE_COLOR )`,`	attribute vec3 color;`,`#endif`,`#ifdef USE_SKINNING`,`	attribute vec4 skinIndex;`,`	attribute vec4 skinWeight;`,`#endif`,`
`].filter(Vr).join(`
`),p=[rd(t),`#define SHADER_TYPE `+t.shaderType,`#define SHADER_NAME `+t.shaderName,g,t.useFog&&t.fog?`#define USE_FOG`:``,t.useFog&&t.fogExp2?`#define FOG_EXP2`:``,t.alphaToCoverage?`#define ALPHA_TO_COVERAGE`:``,t.map?`#define USE_MAP`:``,t.matcap?`#define USE_MATCAP`:``,t.envMap?`#define USE_ENVMAP`:``,t.envMap?`#define `+l:``,t.envMap?`#define `+u:``,t.envMap?`#define `+d:``,h?`#define CUBEUV_TEXEL_WIDTH `+h.texelWidth:``,h?`#define CUBEUV_TEXEL_HEIGHT `+h.texelHeight:``,h?`#define CUBEUV_MAX_MIP `+h.maxMip+`.0`:``,t.lightMap?`#define USE_LIGHTMAP`:``,t.aoMap?`#define USE_AOMAP`:``,t.bumpMap?`#define USE_BUMPMAP`:``,t.normalMap?`#define USE_NORMALMAP`:``,t.normalMapObjectSpace?`#define USE_NORMALMAP_OBJECTSPACE`:``,t.normalMapTangentSpace?`#define USE_NORMALMAP_TANGENTSPACE`:``,t.packedNormalMap?`#define USE_PACKED_NORMALMAP`:``,t.emissiveMap?`#define USE_EMISSIVEMAP`:``,t.anisotropy?`#define USE_ANISOTROPY`:``,t.anisotropyMap?`#define USE_ANISOTROPYMAP`:``,t.clearcoat?`#define USE_CLEARCOAT`:``,t.clearcoatMap?`#define USE_CLEARCOATMAP`:``,t.clearcoatRoughnessMap?`#define USE_CLEARCOAT_ROUGHNESSMAP`:``,t.clearcoatNormalMap?`#define USE_CLEARCOAT_NORMALMAP`:``,t.dispersion?`#define USE_DISPERSION`:``,t.retroreflection?`#define USE_RETROREFLECTION`:``,t.iridescence?`#define USE_IRIDESCENCE`:``,t.iridescenceMap?`#define USE_IRIDESCENCEMAP`:``,t.iridescenceThicknessMap?`#define USE_IRIDESCENCE_THICKNESSMAP`:``,t.specularMap?`#define USE_SPECULARMAP`:``,t.specularColorMap?`#define USE_SPECULAR_COLORMAP`:``,t.specularIntensityMap?`#define USE_SPECULAR_INTENSITYMAP`:``,t.roughnessMap?`#define USE_ROUGHNESSMAP`:``,t.metalnessMap?`#define USE_METALNESSMAP`:``,t.alphaMap?`#define USE_ALPHAMAP`:``,t.alphaTest?`#define USE_ALPHATEST`:``,t.alphaHash?`#define USE_ALPHAHASH`:``,t.sheen?`#define USE_SHEEN`:``,t.sheenColorMap?`#define USE_SHEEN_COLORMAP`:``,t.sheenRoughnessMap?`#define USE_SHEEN_ROUGHNESSMAP`:``,t.transmission?`#define USE_TRANSMISSION`:``,t.transmissionMap?`#define USE_TRANSMISSIONMAP`:``,t.thicknessMap?`#define USE_THICKNESSMAP`:``,t.vertexTangents&&t.flatShading===!1?`#define USE_TANGENT`:``,t.vertexColors||t.instancingColor?`#define USE_COLOR`:``,t.vertexAlphas||t.batchingColor?`#define USE_COLOR_ALPHA`:``,t.vertexUv1s?`#define USE_UV1`:``,t.vertexUv2s?`#define USE_UV2`:``,t.vertexUv3s?`#define USE_UV3`:``,t.pointsUvs?`#define USE_POINTS_UV`:``,t.gradientMap?`#define USE_GRADIENTMAP`:``,t.flatShading?`#define FLAT_SHADED`:``,t.doubleSided?`#define DOUBLE_SIDED`:``,t.flipSided?`#define FLIP_SIDED`:``,t.shadowMapEnabled?`#define USE_SHADOWMAP`:``,t.shadowMapEnabled?`#define `+c:``,t.premultipliedAlpha?`#define PREMULTIPLIED_ALPHA`:``,t.numLightProbes>0?`#define USE_LIGHT_PROBES`:``,t.numLightProbeGrids>0?`#define USE_LIGHT_PROBES_GRID`:``,t.decodeVideoTexture?`#define DECODE_VIDEO_TEXTURE`:``,t.decodeVideoTextureEmissive?`#define DECODE_VIDEO_TEXTURE_EMISSIVE`:``,t.logarithmicDepthBuffer?`#define USE_LOGARITHMIC_DEPTH_BUFFER`:``,t.reversedDepthBuffer?`#define USE_REVERSED_DEPTH_BUFFER`:``,`uniform mat4 viewMatrix;`,`uniform vec3 cameraPosition;`,`uniform bool isOrthographic;`,t.toneMapping!==Un?`#define TONE_MAPPING`:``,t.toneMapping!==Un?Ye.tonemapping_pars_fragment:``,t.toneMapping!==Un?B0(`toneMapping`,t.toneMapping):``,t.dithering?`#define DITHERING`:``,t.opaque?`#define OPAQUE`:``,Ye.colorspace_pars_fragment,F0(`linearToOutputTexel`,t.outputColorSpace),k0(),t.useDepthPacking?`#define DEPTH_PACKING `+t.depthPacking:``,`
`].filter(Vr).join(`
`)),a=kc(a),a=nd(a,t),a=id(a,t),o=kc(o),o=nd(o,t),o=id(o,t),a=sd(a),o=sd(o),t.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,m=[f,`#define attribute in`,`#define varying out`,`#define texture2D texture`].join(`
`)+`
`+m,p=[`#define varying in`,t.glslVersion===Sc?``:`layout(location = 0) out highp vec4 pc_fragColor;`,t.glslVersion===Sc?``:`#define gl_FragColor pc_fragColor`,`#define gl_FragDepthEXT gl_FragDepth`,`#define texture2D texture`,`#define textureCube texture`,`#define texture2DProj textureProj`,`#define texture2DLodEXT textureLod`,`#define texture2DProjLodEXT textureProjLod`,`#define textureCubeLodEXT textureLod`,`#define texture2DGradEXT textureGrad`,`#define texture2DProjGradEXT textureProjGrad`,`#define textureCubeGradEXT textureGrad`].join(`
`)+`
`+p);let C=S+m+a,v=S+p+o,E=Qu(i,i.VERTEX_SHADER,C),M=Qu(i,i.FRAGMENT_SHADER,v);i.attachShader(y,E),i.attachShader(y,M),t.index0AttributeName!==void 0?i.bindAttribLocation(y,0,t.index0AttributeName):t.hasPositionAttribute===!0&&i.bindAttribLocation(y,0,`position`),i.linkProgram(y);function w(I){if(s.debug.checkShaderErrors){let F=i.getProgramInfoLog(y)||``,H=i.getShaderInfoLog(E)||``,U=i.getShaderInfoLog(M)||``,z=F.trim(),J=H.trim(),W=U.trim(),re=!0,Y=!0;if(i.getProgramParameter(y,i.LINK_STATUS)===!1)if(re=!1,typeof s.debug.onShaderError==`function`)s.debug.onShaderError(i,y,E,M);else{let te=td(i,E,`vertex`),ie=td(i,M,`fragment`);Oe(`WebGLProgram: Shader Error `+i.getError()+` - VALIDATE_STATUS `+i.getProgramParameter(y,i.VALIDATE_STATUS)+`

Material Name: `+I.name+`
Material Type: `+I.type+`

Program Info Log: `+z+`
`+te+`
`+ie)}else z!==``?Ne(`WebGLProgram: Program Info Log:`,z):(J===``||W===``)&&(Y=!1);Y&&(I.diagnostics={runnable:re,programLog:z,vertexShader:{log:J,prefix:m},fragmentShader:{log:W,prefix:p}})}i.deleteShader(E),i.deleteShader(M),x=new zs(i,y),T=V0(i,y)}let x;this.getUniforms=function(){return x===void 0&&w(this),x};let T;this.getAttributes=function(){return T===void 0&&w(this),T};let P=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return P===!1&&(P=i.getProgramParameter(y,D0)),P},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(y),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=L0++,this.cacheKey=e,this.usedTimes=1,this.program=y,this.vertexShader=E,this.fragmentShader=M,this}var s_=0;var zc=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let i=this._getShaderCacheForMaterial(e);return i.has(t)===!1&&(i.add(t),t.usedTimes++),i.has(n)===!1&&(i.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new Hc(e),t.set(e,n)),n}};var Hc=class{constructor(e){this.id=s_++,this.code=e,this.usedTimes=0}};function r_(s){return s===Ci||s===Or||s===Br}function a_(s,e,t,n,i,r){let a=new Ss,o=new zc,c=new Set,l=[],u=new Map,d=n.logarithmicDepthBuffer,h=n.precision,f={MeshDepthMaterial:`depth`,MeshDistanceMaterial:`distance`,MeshNormalMaterial:`normal`,MeshBasicMaterial:`basic`,MeshLambertMaterial:`lambert`,MeshPhongMaterial:`phong`,MeshToonMaterial:`toon`,MeshStandardMaterial:`physical`,MeshPhysicalMaterial:`physical`,MeshMatcapMaterial:`matcap`,LineBasicMaterial:`basic`,LineDashedMaterial:`dashed`,PointsMaterial:`points`,ShadowMaterial:`shadow`,SpriteMaterial:`sprite`};function g(x){return c.add(x),x===0?`uv`:`uv${x}`}function y(x,T,P,I,F,H){let U=I.fog,z=F.geometry,J=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?I.environment:null,W=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap,re=e.get(x.envMap||J,W),Y=re&&re.mapping===Ir?re.image.height:null,te=f[x.type];x.precision!==null&&(h=n.getMaxPrecision(x.precision),h!==x.precision&&Ne(`WebGLProgram.getParameters:`,x.precision,`not supported, using`,h,`instead.`));let ie=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,Ue=ie!==void 0?ie.length:0,De=0;z.morphAttributes.position!==void 0&&(De=1),z.morphAttributes.normal!==void 0&&(De=2),z.morphAttributes.color!==void 0&&(De=3);let mt,et,it,q;if(te){let _t=jn[te];mt=_t.vertexShader,et=_t.fragmentShader}else{mt=x.vertexShader,et=x.fragmentShader;let _t=o.getVertexShaderStage(x),st=o.getFragmentShaderStage(x);o.update(x,_t,st),it=_t.id,q=st.id}let ee=s.getRenderTarget(),Ee=s.state.buffers.depth.getReversed(),ke=F.isInstancedMesh===!0,ye=F.isBatchedMesh===!0,qe=!!x.map,Nt=!!x.matcap,Ke=!!re,nt=!!x.aoMap,gt=!!x.lightMap,$e=!!x.bumpMap&&x.wireframe===!1,Mt=!!x.normalMap,kt=!!x.displacementMap,an=!!x.emissiveMap,Tt=!!x.metalnessMap,Ct=!!x.roughnessMap,N=x.anisotropy>0,Xt=x.clearcoat>0,ct=x.dispersion>0,A=x.retroreflectivity>0,_=x.iridescence>0,O=x.sheen>0,V=x.transmission>0,X=N&&!!x.anisotropyMap,oe=Xt&&!!x.clearcoatMap,le=Xt&&!!x.clearcoatNormalMap,j=Xt&&!!x.clearcoatRoughnessMap,Q=_&&!!x.iridescenceMap,ce=_&&!!x.iridescenceThicknessMap,Pe=O&&!!x.sheenColorMap,fe=O&&!!x.sheenRoughnessMap,he=!!x.specularMap,Ie=!!x.specularColorMap,Fe=!!x.specularIntensityMap,ze=V&&!!x.transmissionMap,L=V&&!!x.thicknessMap,ue=!!x.gradientMap,$=!!x.alphaMap,de=x.alphaTest>0,_e=!!x.alphaHash,ne=!!x.extensions,Le=Un;x.toneMapped&&(ee===null||ee.isXRRenderTarget===!0)&&(Le=s.toneMapping);let Ce={shaderID:te,shaderType:x.type,shaderName:x.name,vertexShader:mt,fragmentShader:et,defines:x.defines,customVertexShaderID:it,customFragmentShaderID:q,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:h,batching:ye,batchingColor:ye&&F._colorsTexture!==null,instancing:ke,instancingColor:ke&&F.instanceColor!==null,instancingMorph:ke&&F.morphTexture!==null,outputColorSpace:ee===null?s.outputColorSpace:ee.isXRRenderTarget===!0?ee.texture.colorSpace:We.workingColorSpace,alphaToCoverage:!!x.alphaToCoverage,map:qe,matcap:Nt,envMap:Ke,envMapMode:Ke&&re.mapping,envMapCubeUVHeight:Y,aoMap:nt,lightMap:gt,bumpMap:$e,normalMap:Mt,displacementMap:kt,emissiveMap:an,normalMapObjectSpace:Mt&&x.normalMapType===Au,normalMapTangentSpace:Mt&&x.normalMapType===kr,packedNormalMap:Mt&&x.normalMapType===kr&&r_(x.normalMap.format),metalnessMap:Tt,roughnessMap:Ct,anisotropy:N,anisotropyMap:X,clearcoat:Xt,clearcoatMap:oe,clearcoatNormalMap:le,clearcoatRoughnessMap:j,dispersion:ct,retroreflection:A,iridescence:_,iridescenceMap:Q,iridescenceThicknessMap:ce,sheen:O,sheenColorMap:Pe,sheenRoughnessMap:fe,specularMap:he,specularColorMap:Ie,specularIntensityMap:Fe,transmission:V,transmissionMap:ze,thicknessMap:L,gradientMap:ue,opaque:x.transparent===!1&&x.blending===Us&&x.alphaToCoverage===!1,alphaMap:$,alphaTest:de,alphaHash:_e,combine:x.combine,mapUv:qe&&g(x.map.channel),aoMapUv:nt&&g(x.aoMap.channel),lightMapUv:gt&&g(x.lightMap.channel),bumpMapUv:$e&&g(x.bumpMap.channel),normalMapUv:Mt&&g(x.normalMap.channel),displacementMapUv:kt&&g(x.displacementMap.channel),emissiveMapUv:an&&g(x.emissiveMap.channel),metalnessMapUv:Tt&&g(x.metalnessMap.channel),roughnessMapUv:Ct&&g(x.roughnessMap.channel),anisotropyMapUv:X&&g(x.anisotropyMap.channel),clearcoatMapUv:oe&&g(x.clearcoatMap.channel),clearcoatNormalMapUv:le&&g(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:j&&g(x.clearcoatRoughnessMap.channel),iridescenceMapUv:Q&&g(x.iridescenceMap.channel),iridescenceThicknessMapUv:ce&&g(x.iridescenceThicknessMap.channel),sheenColorMapUv:Pe&&g(x.sheenColorMap.channel),sheenRoughnessMapUv:fe&&g(x.sheenRoughnessMap.channel),specularMapUv:he&&g(x.specularMap.channel),specularColorMapUv:Ie&&g(x.specularColorMap.channel),specularIntensityMapUv:Fe&&g(x.specularIntensityMap.channel),transmissionMapUv:ze&&g(x.transmissionMap.channel),thicknessMapUv:L&&g(x.thicknessMap.channel),alphaMapUv:$&&g(x.alphaMap.channel),vertexTangents:!!z.attributes.tangent&&(Mt||N),vertexNormals:!!z.attributes.normal,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,pointsUvs:F.isPoints===!0&&!!z.attributes.uv&&(qe||$),fog:!!U,useFog:x.fog===!0,fogExp2:!!U&&U.isFogExp2,flatShading:x.wireframe===!1&&(x.flatShading===!0||z.attributes.normal===void 0&&Mt===!1&&(x.isMeshLambertMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isMeshPhysicalMaterial)),sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:Ee,skinning:F.isSkinnedMesh===!0,hasPositionAttribute:z.attributes.position!==void 0,morphTargets:z.morphAttributes.position!==void 0,morphNormals:z.morphAttributes.normal!==void 0,morphColors:z.morphAttributes.color!==void 0,morphTargetsCount:Ue,morphTextureStride:De,numSunLights:T.sun.length,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numSunLightShadows:T.sunShadowMap.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numLightProbeGrids:H.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:x.dithering,shadowMapEnabled:s.shadowMap.enabled&&P.length>0,shadowMapType:s.shadowMap.type,toneMapping:Le,decodeVideoTexture:qe&&x.map.isVideoTexture===!0&&We.getTransfer(x.map.colorSpace)===lt,decodeVideoTextureEmissive:an&&x.emissiveMap.isVideoTexture===!0&&We.getTransfer(x.emissiveMap.colorSpace)===lt,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===Xn,flipSided:x.side===rn,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:ne&&x.extensions.clipCullDistance===!0&&t.has(`WEBGL_clip_cull_distance`),extensionMultiDraw:(ne&&x.extensions.multiDraw===!0||ye)&&t.has(`WEBGL_multi_draw`),rendererExtensionParallelShaderCompile:t.has(`KHR_parallel_shader_compile`),customProgramCacheKey:x.customProgramCacheKey()};return Ce.vertexUv1s=c.has(1),Ce.vertexUv2s=c.has(2),Ce.vertexUv3s=c.has(3),c.clear(),Ce}function m(x){let T=[];if(x.shaderID?T.push(x.shaderID):(T.push(x.customVertexShaderID),T.push(x.customFragmentShaderID)),x.defines!==void 0)for(let P in x.defines)T.push(P),T.push(x.defines[P]);return x.isRawShaderMaterial===!1&&(p(T,x),S(T,x),T.push(s.outputColorSpace)),T.push(x.customProgramCacheKey),T.join()}function p(x,T){x.push(T.precision),x.push(T.outputColorSpace),x.push(T.envMapMode),x.push(T.envMapCubeUVHeight),x.push(T.mapUv),x.push(T.alphaMapUv),x.push(T.lightMapUv),x.push(T.aoMapUv),x.push(T.bumpMapUv),x.push(T.normalMapUv),x.push(T.displacementMapUv),x.push(T.emissiveMapUv),x.push(T.metalnessMapUv),x.push(T.roughnessMapUv),x.push(T.anisotropyMapUv),x.push(T.clearcoatMapUv),x.push(T.clearcoatNormalMapUv),x.push(T.clearcoatRoughnessMapUv),x.push(T.iridescenceMapUv),x.push(T.iridescenceThicknessMapUv),x.push(T.sheenColorMapUv),x.push(T.sheenRoughnessMapUv),x.push(T.specularMapUv),x.push(T.specularColorMapUv),x.push(T.specularIntensityMapUv),x.push(T.transmissionMapUv),x.push(T.thicknessMapUv),x.push(T.combine),x.push(T.fogExp2),x.push(T.sizeAttenuation),x.push(T.morphTargetsCount),x.push(T.morphAttributeCount),x.push(T.numSunLights),x.push(T.numDirLights),x.push(T.numPointLights),x.push(T.numSpotLights),x.push(T.numSpotLightMaps),x.push(T.numHemiLights),x.push(T.numRectAreaLights),x.push(T.numSunLightShadows),x.push(T.numDirLightShadows),x.push(T.numPointLightShadows),x.push(T.numSpotLightShadows),x.push(T.numSpotLightShadowsWithMaps),x.push(T.numLightProbes),x.push(T.shadowMapType),x.push(T.toneMapping),x.push(T.numClippingPlanes),x.push(T.numClipIntersection),x.push(T.depthPacking)}function S(x,T){a.disableAll(),T.instancing&&a.enable(0),T.instancingColor&&a.enable(1),T.instancingMorph&&a.enable(2),T.matcap&&a.enable(3),T.envMap&&a.enable(4),T.normalMapObjectSpace&&a.enable(5),T.normalMapTangentSpace&&a.enable(6),T.clearcoat&&a.enable(7),T.iridescence&&a.enable(8),T.alphaTest&&a.enable(9),T.vertexColors&&a.enable(10),T.vertexAlphas&&a.enable(11),T.vertexUv1s&&a.enable(12),T.vertexUv2s&&a.enable(13),T.vertexUv3s&&a.enable(14),T.vertexTangents&&a.enable(15),T.anisotropy&&a.enable(16),T.alphaHash&&a.enable(17),T.batching&&a.enable(18),T.dispersion&&a.enable(19),T.retroreflection&&a.enable(24),T.batchingColor&&a.enable(20),T.gradientMap&&a.enable(21),T.packedNormalMap&&a.enable(22),T.vertexNormals&&a.enable(23),x.push(a.mask),a.disableAll(),T.fog&&a.enable(0),T.useFog&&a.enable(1),T.flatShading&&a.enable(2),T.logarithmicDepthBuffer&&a.enable(3),T.reversedDepthBuffer&&a.enable(4),T.skinning&&a.enable(5),T.morphTargets&&a.enable(6),T.morphNormals&&a.enable(7),T.morphColors&&a.enable(8),T.premultipliedAlpha&&a.enable(9),T.shadowMapEnabled&&a.enable(10),T.doubleSided&&a.enable(11),T.flipSided&&a.enable(12),T.useDepthPacking&&a.enable(13),T.dithering&&a.enable(14),T.transmission&&a.enable(15),T.sheen&&a.enable(16),T.opaque&&a.enable(17),T.pointsUvs&&a.enable(18),T.decodeVideoTexture&&a.enable(19),T.decodeVideoTextureEmissive&&a.enable(20),T.alphaToCoverage&&a.enable(21),T.numLightProbeGrids>0&&a.enable(22),T.hasPositionAttribute&&a.enable(23),x.push(a.mask)}function C(x){let T=f[x.type],P;if(T){let I=jn[T];P=Hu.clone(I.uniforms)}else P=x.uniforms;return P}function v(x,T){let P=u.get(T);return P!==void 0?++P.usedTimes:(P=new i_(s,T,x,i),l.push(P),u.set(T,P)),P}function E(x){if(--x.usedTimes===0){let T=l.indexOf(x);l[T]=l[l.length-1],l.pop(),u.delete(x.cacheKey),x.destroy()}}function M(x){o.remove(x)}function w(){o.dispose()}return{getParameters:y,getProgramCacheKey:m,getUniforms:C,acquireProgram:v,releaseProgram:E,releaseShaderCache:M,programs:l,dispose:w}}function o_(){let s=new WeakMap;function e(a){return s.has(a)}function t(a){let o=s.get(a);return o===void 0&&(o={},s.set(a,o)),o}function n(a){s.delete(a)}function i(a,o,c){s.get(a)[o]=c}function r(){s=new WeakMap}return{has:e,get:t,remove:n,update:i,dispose:r}}function l_(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.materialVariant!==e.materialVariant?s.materialVariant-e.materialVariant:s.z!==e.z?s.z-e.z:s.id-e.id}function ad(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function od(){let s=[],e=0,t=[],n=[],i=[];function r(){e=0,t.length=0,n.length=0,i.length=0}function a(h){let f=0;return h.isInstancedMesh&&(f+=2),h.isSkinnedMesh&&(f+=1),f}function o(h,f,g,y,m,p){let S=s[e];return S===void 0?(S={id:h.id,object:h,geometry:f,material:g,materialVariant:a(h),groupOrder:y,renderOrder:h.renderOrder,z:m,group:p},s[e]=S):(S.id=h.id,S.object=h,S.geometry=f,S.material=g,S.materialVariant=a(h),S.groupOrder=y,S.renderOrder=h.renderOrder,S.z=m,S.group=p),e++,S}function c(h,f,g,y,m,p,S){S.reversedDepth===!0&&(m=-m);let C=o(h,f,g,y,m,p);g.transmission>0?n.push(C):g.transparent===!0?i.push(C):t.push(C)}function l(h,f,g,y,m,p){let S=o(h,f,g,y,m,p);g.transmission>0?n.unshift(S):g.transparent===!0?i.unshift(S):t.unshift(S)}function u(h,f){t.length>1&&t.sort(h||l_),n.length>1&&n.sort(f||ad),i.length>1&&i.sort(f||ad)}function d(){for(let h=e,f=s.length;h<f;h++){let g=s[h];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:t,transmissive:n,transparent:i,init:r,push:c,unshift:l,finish:d,sort:u}}function c_(){let s=new WeakMap;function e(n,i){let r=s.get(n),a;return r===void 0?(a=new od,s.set(n,[a])):i>=r.length?(a=new od,r.push(a)):a=r[i],a}function t(){s=new WeakMap}return{get:e,dispose:t}}function h_(){let s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case`SunLight`:case`DirectionalLight`:t={direction:new R,color:new Ae};break;case`SpotLight`:t={position:new R,direction:new R,color:new Ae,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case`PointLight`:t={position:new R,color:new Ae,distance:0,decay:0};break;case`HemisphereLight`:t={direction:new R,skyColor:new Ae,groundColor:new Ae};break;case`RectAreaLight`:t={color:new Ae,position:new R,halfWidth:new R,halfHeight:new R}}return s[e.id]=t,t}}}function u_(){let s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case`SunLight`:case`DirectionalLight`:t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Se};break;case`SpotLight`:t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Se};break;case`PointLight`:t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Se,shadowCameraNear:1,shadowCameraFar:1e3}}return s[e.id]=t,t}}}var d_=0;function f_(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function p_(s){let e=new h_,t=u_(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new R);let i=new R,r=new ft,a=new ft;function o(l){let u=0,d=0,h=0;for(let F=0;F<9;F++)n.probe[F].set(0,0,0);let f=0,g=0,y=0,m=0,p=0,S=0,C=0,v=0,E=0,M=0,w=0,x=0,T=0,P=0;l.sort(f_);for(let F=0,H=l.length;F<H;F++){let U=l[F],z=U.color,J=U.intensity,W=U.distance,re=null;if(U.shadow&&U.shadow.map&&(U.shadow.map.texture.format===Ci?re=U.shadow.map.texture:re=U.shadow.map.depthTexture||U.shadow.map.texture),U.isAmbientLight)u+=z.r*J,d+=z.g*J,h+=z.b*J;else if(U.isLightProbe){for(let Y=0;Y<9;Y++)n.probe[Y].addScaledVector(U.sh.coefficients[Y],J);P++}else if(U.isSunLight){let Y=e.get(U);if(Y.color.copy(U.color).multiplyScalar(U.intensity),U.castShadow){let te=U.shadow,ie=t.get(U);ie.shadowIntensity=te.intensity,ie.shadowBias=te.bias,ie.shadowNormalBias=te.normalBias,ie.shadowRadius=te.radius,ie.shadowMapSize.copy(te.mapSize).multiply(te.getFrameExtents()),n.sunShadow[g]=ie,n.sunShadowMap[g]=re;let Ue=te.getViewportCount();for(let De=0;De<Ue;De++)n.sunShadowMatrix[y+De]=te.getMatrix(De),n.sunShadowCascade[y+De]=te._cascadeData[De];y+=Ue,g++}n.sun[f]=Y,f++}else if(U.isDirectionalLight){let Y=e.get(U);if(Y.color.copy(U.color).multiplyScalar(U.intensity),U.castShadow){let te=U.shadow,ie=t.get(U);ie.shadowIntensity=te.intensity,ie.shadowBias=te.bias,ie.shadowNormalBias=te.normalBias,ie.shadowRadius=te.radius,ie.shadowMapSize=te.mapSize,n.directionalShadow[m]=ie,n.directionalShadowMap[m]=re,n.directionalShadowMatrix[m]=U.shadow.matrix,E++}n.directional[m]=Y,m++}else if(U.isSpotLight){let Y=e.get(U);Y.position.setFromMatrixPosition(U.matrixWorld),Y.color.copy(z).multiplyScalar(J),Y.distance=W,Y.coneCos=Math.cos(U.angle),Y.penumbraCos=Math.cos(U.angle*(1-U.penumbra)),Y.decay=U.decay,n.spot[S]=Y;let te=U.shadow;if(U.map&&(n.spotLightMap[x]=U.map,x++,te.updateMatrices(U),U.castShadow&&T++),n.spotLightMatrix[S]=te.matrix,U.castShadow){let ie=t.get(U);ie.shadowIntensity=te.intensity,ie.shadowBias=te.bias,ie.shadowNormalBias=te.normalBias,ie.shadowRadius=te.radius,ie.shadowMapSize=te.mapSize,n.spotShadow[S]=ie,n.spotShadowMap[S]=re,w++}S++}else if(U.isRectAreaLight){let Y=e.get(U);Y.color.copy(z).multiplyScalar(J),Y.halfWidth.set(U.width*.5,0,0),Y.halfHeight.set(0,U.height*.5,0),n.rectArea[C]=Y,C++}else if(U.isPointLight){let Y=e.get(U);if(Y.color.copy(U.color).multiplyScalar(U.intensity),Y.distance=U.distance,Y.decay=U.decay,U.castShadow){let te=U.shadow,ie=t.get(U);ie.shadowIntensity=te.intensity,ie.shadowBias=te.bias,ie.shadowNormalBias=te.normalBias,ie.shadowRadius=te.radius,ie.shadowMapSize=te.mapSize,ie.shadowCameraNear=te.camera.near,ie.shadowCameraFar=te.camera.far,n.pointShadow[p]=ie,n.pointShadowMap[p]=re,n.pointShadowMatrix[p]=U.shadow.matrix,M++}n.point[p]=Y,p++}else if(U.isHemisphereLight){let Y=e.get(U);Y.skyColor.copy(U.color).multiplyScalar(J),Y.groundColor.copy(U.groundColor).multiplyScalar(J),n.hemi[v]=Y,v++}}C>0&&(s.has(`OES_texture_float_linear`)===!0?(n.rectAreaLTC1=pe.LTC_FLOAT_1,n.rectAreaLTC2=pe.LTC_FLOAT_2):(n.rectAreaLTC1=pe.LTC_HALF_1,n.rectAreaLTC2=pe.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=d,n.ambient[2]=h;let I=n.hash;(I.sunLength!==f||I.directionalLength!==m||I.pointLength!==p||I.spotLength!==S||I.rectAreaLength!==C||I.hemiLength!==v||I.numSunShadows!==g||I.numDirectionalShadows!==E||I.numPointShadows!==M||I.numSpotShadows!==w||I.numSpotMaps!==x||I.numLightProbes!==P)&&(n.sun.length=f,n.directional.length=m,n.spot.length=S,n.rectArea.length=C,n.point.length=p,n.hemi.length=v,n.sunShadow.length=g,n.sunShadowMap.length=g,n.sunShadowMatrix.length=y,n.sunShadowCascade.length=y,n.directionalShadow.length=E,n.directionalShadowMap.length=E,n.directionalShadowMatrix.length=E,n.pointShadow.length=M,n.pointShadowMap.length=M,n.pointShadowMatrix.length=M,n.spotShadow.length=w,n.spotShadowMap.length=w,n.spotLightMatrix.length=w+x-T,n.spotLightMap.length=x,n.numSpotLightShadowsWithMaps=T,n.numLightProbes=P,I.sunLength=f,I.directionalLength=m,I.pointLength=p,I.spotLength=S,I.rectAreaLength=C,I.hemiLength=v,I.numSunShadows=g,I.numDirectionalShadows=E,I.numPointShadows=M,I.numSpotShadows=w,I.numSpotMaps=x,I.numLightProbes=P,n.version=d_++)}function c(l,u){let d=0,h=0,f=0,g=0,y=0,m=0,p=u.matrixWorldInverse;for(let S=0,C=l.length;S<C;S++){let v=l[S];if(v.isSunLight){let E=n.sun[d];E.direction.setFromMatrixPosition(v.matrixWorld),E.direction.transformDirection(p),d++}else if(v.isDirectionalLight){let E=n.directional[h];E.direction.setFromMatrixPosition(v.matrixWorld),i.setFromMatrixPosition(v.target.matrixWorld),E.direction.sub(i),E.direction.transformDirection(p),h++}else if(v.isSpotLight){let E=n.spot[g];E.position.setFromMatrixPosition(v.matrixWorld),E.position.applyMatrix4(p),E.direction.setFromMatrixPosition(v.matrixWorld),i.setFromMatrixPosition(v.target.matrixWorld),E.direction.sub(i),E.direction.transformDirection(p),g++}else if(v.isRectAreaLight){let E=n.rectArea[y];E.position.setFromMatrixPosition(v.matrixWorld),E.position.applyMatrix4(p),a.identity(),r.copy(v.matrixWorld),r.premultiply(p),a.extractRotation(r),E.halfWidth.set(v.width*.5,0,0),E.halfHeight.set(0,v.height*.5,0),E.halfWidth.applyMatrix4(a),E.halfHeight.applyMatrix4(a),y++}else if(v.isPointLight){let E=n.point[f];E.position.setFromMatrixPosition(v.matrixWorld),E.position.applyMatrix4(p),f++}else if(v.isHemisphereLight){let E=n.hemi[m];E.direction.setFromMatrixPosition(v.matrixWorld),E.direction.transformDirection(p),m++}}}return{setup:o,setupView:c,state:n}}function ld(s){let e=new p_(s),t=[],n=[],i=[];function r(h){d.camera=h,t.length=0,n.length=0,i.length=0}function a(h){t.push(h)}function o(h){n.push(h)}function c(h){i.push(h)}function l(){e.setup(t)}function u(h){e.setupView(t,h)}let d={lightsArray:t,shadowsArray:n,lightProbeGridArray:i,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:d,setupLights:l,setupLightsView:u,pushLight:a,pushShadow:o,pushLightProbeGrid:c}}function m_(s){let e=new WeakMap;function t(i,r=0){let a=e.get(i),o;return a===void 0?(o=new ld(s),e.set(i,[o])):r>=a.length?(o=new ld(s),a.push(o)):o=a[r],o}function n(){e=new WeakMap}return{get:t,dispose:n}}var g_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`;var __=`uniform sampler2D shadow_pass;
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
}`;var x_=[new R(1,0,0),new R(-1,0,0),new R(0,1,0),new R(0,-1,0),new R(0,0,1),new R(0,0,-1)];var y_=[new R(0,-1,0),new R(0,-1,0),new R(0,0,1),new R(0,0,-1),new R(0,-1,0),new R(0,-1,0)];var cd=new ft;var Hr=new R;var Nc=new R;function v_(s,e,t){let n=new Ts,i=new Se,r=new Se,a=new Et,o=new Za,c=new Ka,l={},u=t.maxTextureSize,d={[Wn]:rn,[rn]:Wn,[Xn]:Xn},h=new mn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Se},radius:{value:4}},vertexShader:g_,fragmentShader:__}),f=h.clone();f.defines.HORIZONTAL_PASS=1;let g=new Qe;g.setAttribute(`position`,new vt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let y=new Lt(g,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Pr;let p=this.type;this.render=function(M,w,x){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||M.length===0)return;this.type===su&&(Ne(`WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead.`),this.type=Pr);let T=s.getRenderTarget(),P=s.getActiveCubeFace(),I=s.getActiveMipmapLevel(),F=s.state;F.setBlending(Yn),F.buffers.depth.getReversed()===!0?F.buffers.color.setClear(0,0,0,0):F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);let H=p!==this.type;H&&w.traverse(function(U){U.material&&(Array.isArray(U.material)?U.material.forEach(z=>z.needsUpdate=!0):U.material.needsUpdate=!0)});for(let U=0,z=M.length;U<z;U++){let J=M[U],W=J.shadow;if(W===void 0){Ne(`WebGLShadowMap:`,J,`has no shadow.`);continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;i.copy(W.mapSize);let re=W.getFrameExtents();i.multiply(re),r.copy(W.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(r.x=Math.floor(u/re.x),i.x=r.x*re.x,W.mapSize.x=r.x),i.y>u&&(r.y=Math.floor(u/re.y),i.y=r.y*re.y,W.mapSize.y=r.y));let Y=s.state.buffers.depth.getReversed();if(W.camera._reversedDepth=Y,W.map===null||H===!0){if(W.map!==null&&(W.map.depthTexture!==null&&(W.map.depthTexture.dispose(),W.map.depthTexture=null),W.map.dispose()),this.type===Ns){if(J.isPointLight){Ne(`WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.`);continue}W.map=new ln(i.x,i.y,{format:Ci,type:Bn,minFilter:Gt,magFilter:Gt,generateMipmaps:!1}),W.map.texture.name=J.name+`.shadowMap`,W.map.depthTexture=new yi(i.x,i.y,On),W.map.depthTexture.name=J.name+`.shadowMapDepth`,W.map.depthTexture.format=Vn,W.map.depthTexture.compareFunction=null,W.map.depthTexture.minFilter=Ht,W.map.depthTexture.magFilter=Ht}else J.isPointLight?(W.map=new nl(i.x),W.map.depthTexture=new Ya(i.x,Fn)):(W.map=new ln(i.x,i.y),W.map.depthTexture=new yi(i.x,i.y,Fn)),W.map.depthTexture.name=J.name+`.shadowMap`,W.map.depthTexture.format=Vn,this.type===Pr?(W.map.depthTexture.compareFunction=Y?Jo:Ko,W.map.depthTexture.minFilter=Gt,W.map.depthTexture.magFilter=Gt):(W.map.depthTexture.compareFunction=null,W.map.depthTexture.minFilter=Ht,W.map.depthTexture.magFilter=Ht);W.camera.updateProjectionMatrix()}W.map.isWebGLCubeRenderTarget!==!0&&(W.map.width!==i.x||W.map.height!==i.y)&&W.map.setSize(i.x,i.y);let te=W.map.isWebGLCubeRenderTarget?6:W.getViewportCount();J.isPointLight!==!0&&W.updateMatrices(J,x);for(let ie=0;ie<te;ie++){let Ue=W.getCamera(ie);if(J.isPointLight){let De=W.camera,mt=W.matrix,et=J.distance||De.far;et!==De.far&&(De.far=et,De.updateProjectionMatrix()),Hr.setFromMatrixPosition(J.matrixWorld),De.position.copy(Hr),Nc.copy(De.position),Nc.add(x_[ie]),De.up.copy(y_[ie]),De.lookAt(Nc),De.updateMatrixWorld(),mt.makeTranslation(-Hr.x,-Hr.y,-Hr.z),cd.multiplyMatrices(De.projectionMatrix,De.matrixWorldInverse),W._frustum.setFromProjectionMatrix(cd,De.coordinateSystem,De.reversedDepth)}if(W.map.isWebGLCubeRenderTarget)s.setRenderTarget(W.map,ie),s.clear();else{ie===0&&(s.setRenderTarget(W.map),s.clear());let De=W.getViewport(ie);a.set(r.x*De.x,r.y*De.y,r.x*De.z,r.y*De.w),F.viewport(a)}n=W.getFrustum(ie),v(w,x,Ue,J,this.type)}W.isPointLightShadow!==!0&&this.type===Ns&&S(W,x),W.needsUpdate=!1}p=this.type,m.needsUpdate=!1,s.setRenderTarget(T,P,I)};function S(M,w){let x=e.update(y);h.defines.VSM_SAMPLES!==M.blurSamples&&(h.defines.VSM_SAMPLES=M.blurSamples,f.defines.VSM_SAMPLES=M.blurSamples,h.needsUpdate=!0,f.needsUpdate=!0),M.mapPass===null?M.mapPass=new ln(i.x,i.y,{format:Ci,type:Bn}):(M.mapPass.width!==M.map.width||M.mapPass.height!==M.map.height)&&M.mapPass.setSize(M.map.width,M.map.height),h.uniforms.shadow_pass.value=M.map.depthTexture,h.uniforms.resolution.value.set(M.map.width,M.map.height),h.uniforms.radius.value=M.radius,s.setRenderTarget(M.mapPass),s.clear(),s.renderBufferDirect(w,null,x,h,y,null),f.uniforms.shadow_pass.value=M.mapPass.texture,f.uniforms.resolution.value.set(M.map.width,M.map.height),f.uniforms.radius.value=M.radius,s.setRenderTarget(M.map),s.clear(),s.renderBufferDirect(w,null,x,f,y,null)}function C(M,w,x,T){let P=null,I=x.isPointLight===!0?M.customDistanceMaterial:M.customDepthMaterial;if(I!==void 0)P=I;else if(P=x.isPointLight===!0?c:o,s.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0||w.alphaToCoverage===!0){let F=P.uuid,H=w.uuid,U=l[F];U===void 0&&(U={},l[F]=U);let z=U[H];z===void 0&&(z=P.clone(),U[H]=z,w.addEventListener(`dispose`,E)),P=z}if(P.visible=w.visible,P.wireframe=w.wireframe,T===Ns?P.side=w.shadowSide!==null?w.shadowSide:w.side:P.side=w.shadowSide!==null?w.shadowSide:d[w.side],P.alphaMap=w.alphaMap,P.alphaTest=w.alphaToCoverage===!0?.5:w.alphaTest,P.map=w.map,P.clipShadows=w.clipShadows,P.clippingPlanes=w.clippingPlanes,P.clipIntersection=w.clipIntersection,P.displacementMap=w.displacementMap,P.displacementScale=w.displacementScale,P.displacementBias=w.displacementBias,P.wireframeLinewidth=w.wireframeLinewidth,P.linewidth=w.linewidth,x.isPointLight===!0&&P.isMeshDistanceMaterial===!0){let F=s.properties.get(P);F.light=x}return P}function v(M,w,x,T,P){if(M.visible===!1)return;if(M.layers.test(w.layers)&&(M.isMesh||M.isLine||M.isPoints)&&(M.castShadow||M.receiveShadow&&P===Ns)&&(!M.frustumCulled||M.intersectsFrustum(n))){M.modelViewMatrix.multiplyMatrices(x.matrixWorldInverse,M.matrixWorld);let H=e.update(M),U=M.material;if(Array.isArray(U)){let z=H.groups;for(let J=0,W=z.length;J<W;J++){let re=z[J],Y=U[re.materialIndex];if(Y&&Y.visible){let te=C(M,Y,T,P);M.onBeforeShadow(s,M,w,x,H,te,re),s.renderBufferDirect(x,null,H,te,M,re),M.onAfterShadow(s,M,w,x,H,te,re)}}}else if(U.visible){let z=C(M,U,T,P);M.onBeforeShadow(s,M,w,x,H,z,null),s.renderBufferDirect(x,null,H,z,M,null),M.onAfterShadow(s,M,w,x,H,z,null)}}let F=M.children;for(let H=0,U=F.length;H<U;H++)v(F[H],w,x,T,P)}function E(M){M.target.removeEventListener(`dispose`,E);for(let x in l){let T=l[x],P=M.target.uuid;P in T&&(T[P].dispose(),delete T[P])}}}function b_(s,e){function t(){let L=!1,ue=new Et,$=null,de=new Et(0,0,0,0);return{setMask:function(_e){$!==_e&&!L&&(s.colorMask(_e,_e,_e,_e),$=_e)},setLocked:function(_e){L=_e},setClear:function(_e,ne,Le,Ce,_t){_t===!0&&(_e*=Ce,ne*=Ce,Le*=Ce),ue.set(_e,ne,Le,Ce),de.equals(ue)===!1&&(s.clearColor(_e,ne,Le,Ce),de.copy(ue))},reset:function(){L=!1,$=null,de.set(-1,0,0,0)}}}function n(){let L=!1,ue=!1,$=null,de=null,_e=null;return{setReversed:function(ne){if(ue!==ne){let Le=e.get(`EXT_clip_control`);ne?Le.clipControlEXT(Le.LOWER_LEFT_EXT,Le.ZERO_TO_ONE_EXT):Le.clipControlEXT(Le.LOWER_LEFT_EXT,Le.NEGATIVE_ONE_TO_ONE_EXT),ue=ne;let Ce=_e;_e=null,this.setClear(Ce)}},getReversed:function(){return ue},setTest:function(ne){ne?ee(s.DEPTH_TEST):Ee(s.DEPTH_TEST)},setMask:function(ne){$!==ne&&!L&&(s.depthMask(ne),$=ne)},setFunc:function(ne){if(ue&&(ne=Bu[ne]),de!==ne){switch(ne){case Pa:s.depthFunc(s.NEVER);break;case Ia:s.depthFunc(s.ALWAYS);break;case Da:s.depthFunc(s.LESS);break;case gs:s.depthFunc(s.LEQUAL);break;case La:s.depthFunc(s.EQUAL);break;case Na:s.depthFunc(s.GEQUAL);break;case Ua:s.depthFunc(s.GREATER);break;case Fa:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}de=ne}},setLocked:function(ne){L=ne},setClear:function(ne){_e!==ne&&(_e=ne,ue&&(ne=1-ne),s.clearDepth(ne))},reset:function(){L=!1,$=null,de=null,_e=null,ue=!1}}}function i(){let L=!1,ue=null,$=null,de=null,_e=null,ne=null,Le=null,Ce=null,_t=null;return{setTest:function(st){L||(st?ee(s.STENCIL_TEST):Ee(s.STENCIL_TEST))},setMask:function(st){ue!==st&&!L&&(s.stencilMask(st),ue=st)},setFunc:function(st,Tn,kn){($!==st||de!==Tn||_e!==kn)&&(s.stencilFunc(st,Tn,kn),$=st,de=Tn,_e=kn)},setOp:function(st,Tn,kn){(ne!==st||Le!==Tn||Ce!==kn)&&(s.stencilOp(st,Tn,kn),ne=st,Le=Tn,Ce=kn)},setLocked:function(st){L=st},setClear:function(st){_t!==st&&(s.clearStencil(st),_t=st)},reset:function(){L=!1,ue=null,$=null,de=null,_e=null,ne=null,Le=null,Ce=null,_t=null}}}let r=new t,a=new n,o=new i,c=new WeakMap,l=new WeakMap,u={},d={},h={},f=new WeakMap,g=[],y=null,m=!1,p=null,S=null,C=null,v=null,E=null,M=null,w=null,x=new Ae(0,0,0),T=0,P=!1,I=null,F=null,H=null,U=null,z=null,J=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS),W=!1,re=0,Y=s.getParameter(s.VERSION);Y.indexOf(`WebGL`)!==-1?(re=parseFloat(/^WebGL (\d)/.exec(Y)[1]),W=re>=1):Y.indexOf(`OpenGL ES`)!==-1&&(re=parseFloat(/^OpenGL ES (\d)/.exec(Y)[1]),W=re>=2);let te=null,ie={},Ue=s.getParameter(s.SCISSOR_BOX),De=s.getParameter(s.VIEWPORT),mt=new Et().fromArray(Ue),et=new Et().fromArray(De);function it(L,ue,$,de){let _e=new Uint8Array(4),ne=s.createTexture();s.bindTexture(L,ne),s.texParameteri(L,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(L,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Le=0;Le<$;Le++)L===s.TEXTURE_3D||L===s.TEXTURE_2D_ARRAY?s.texImage3D(ue,0,s.RGBA,1,1,de,0,s.RGBA,s.UNSIGNED_BYTE,_e):s.texImage2D(ue+Le,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,_e);return ne}let q={};q[s.TEXTURE_2D]=it(s.TEXTURE_2D,s.TEXTURE_2D,1),q[s.TEXTURE_CUBE_MAP]=it(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),q[s.TEXTURE_2D_ARRAY]=it(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),q[s.TEXTURE_3D]=it(s.TEXTURE_3D,s.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),ee(s.DEPTH_TEST),a.setFunc(gs),$e(!1),Mt(ec),ee(s.CULL_FACE),nt(Yn);function ee(L){u[L]!==!0&&(s.enable(L),u[L]=!0)}function Ee(L){u[L]!==!1&&(s.disable(L),u[L]=!1)}function ke(L,ue){return h[L]!==ue?(s.bindFramebuffer(L,ue),h[L]=ue,L===s.DRAW_FRAMEBUFFER&&(h[s.FRAMEBUFFER]=ue),L===s.FRAMEBUFFER&&(h[s.DRAW_FRAMEBUFFER]=ue),!0):!1}function ye(L,ue){let $=g,de=!1;if(L){$=f.get(ue),$===void 0&&($=[],f.set(ue,$));let _e=L.textures;if($.length!==_e.length||$[0]!==s.COLOR_ATTACHMENT0){for(let ne=0,Le=_e.length;ne<Le;ne++)$[ne]=s.COLOR_ATTACHMENT0+ne;$.length=_e.length,de=!0}}else $[0]!==s.BACK&&($[0]=s.BACK,de=!0);de&&s.drawBuffers($)}function qe(L){return y!==L?(s.useProgram(L),y=L,!0):!1}let Nt={[Gi]:s.FUNC_ADD,[au]:s.FUNC_SUBTRACT,[ou]:s.FUNC_REVERSE_SUBTRACT};Nt[lu]=s.MIN,Nt[cu]=s.MAX;let Ke={[hu]:s.ZERO,[uu]:s.ONE,[du]:s.SRC_COLOR,[sc]:s.SRC_ALPHA,[xu]:s.SRC_ALPHA_SATURATE,[gu]:s.DST_COLOR,[pu]:s.DST_ALPHA,[fu]:s.ONE_MINUS_SRC_COLOR,[rc]:s.ONE_MINUS_SRC_ALPHA,[_u]:s.ONE_MINUS_DST_COLOR,[mu]:s.ONE_MINUS_DST_ALPHA,[yu]:s.CONSTANT_COLOR,[vu]:s.ONE_MINUS_CONSTANT_COLOR,[bu]:s.CONSTANT_ALPHA,[Su]:s.ONE_MINUS_CONSTANT_ALPHA};function nt(L,ue,$,de,_e,ne,Le,Ce,_t,st){if(L===Yn){m===!0&&(Ee(s.BLEND),m=!1);return}if(m===!1&&(ee(s.BLEND),m=!0),L!==ru){if(L!==p||st!==P){if((S!==Gi||E!==Gi)&&(s.blendEquation(s.FUNC_ADD),S=Gi,E=Gi),st)switch(L){case Us:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case tc:s.blendFunc(s.ONE,s.ONE);break;case nc:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case ic:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:Oe(`WebGLState: Invalid blending: `,L)}else switch(L){case Us:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case tc:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case nc:Oe(`WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true`);break;case ic:Oe(`WebGLState: MultiplyBlending requires material.premultipliedAlpha = true`);break;default:Oe(`WebGLState: Invalid blending: `,L)}C=null,v=null,M=null,w=null,x.set(0,0,0),T=0,p=L,P=st}return}_e=_e||ue,ne=ne||$,Le=Le||de,(ue!==S||_e!==E)&&(s.blendEquationSeparate(Nt[ue],Nt[_e]),S=ue,E=_e),($!==C||de!==v||ne!==M||Le!==w)&&(s.blendFuncSeparate(Ke[$],Ke[de],Ke[ne],Ke[Le]),C=$,v=de,M=ne,w=Le),(Ce.equals(x)===!1||_t!==T)&&(s.blendColor(Ce.r,Ce.g,Ce.b,_t),x.copy(Ce),T=_t),p=L,P=!1}function gt(L,ue){L.side===Xn?Ee(s.CULL_FACE):ee(s.CULL_FACE);let $=L.side===rn;ue&&($=!$),$e($),L.blending===Us&&L.transparent===!1?nt(Yn):nt(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),a.setFunc(L.depthFunc),a.setTest(L.depthTest),a.setMask(L.depthWrite),r.setMask(L.colorWrite);let de=L.stencilWrite;o.setTest(de),de&&(o.setMask(L.stencilWriteMask),o.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),o.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),an(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?ee(s.SAMPLE_ALPHA_TO_COVERAGE):Ee(s.SAMPLE_ALPHA_TO_COVERAGE)}function $e(L){I!==L&&(L?s.frontFace(s.CW):s.frontFace(s.CCW),I=L)}function Mt(L){L!==nu?(ee(s.CULL_FACE),L!==F&&(L===ec?s.cullFace(s.BACK):L===iu?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Ee(s.CULL_FACE),F=L}function kt(L){L!==H&&(W&&s.lineWidth(L),H=L)}function an(L,ue,$){L?(ee(s.POLYGON_OFFSET_FILL),(U!==ue||z!==$)&&(U=ue,z=$,a.getReversed()&&(ue=-ue),s.polygonOffset(ue,$))):Ee(s.POLYGON_OFFSET_FILL)}function Tt(L){L?ee(s.SCISSOR_TEST):Ee(s.SCISSOR_TEST)}function Ct(L){L===void 0&&(L=s.TEXTURE0+J-1),te!==L&&(s.activeTexture(L),te=L)}function N(L,ue,$){$===void 0&&(te===null?$=s.TEXTURE0+J-1:$=te);let de=ie[$];de===void 0&&(de={type:void 0,texture:void 0},ie[$]=de),(de.type!==L||de.texture!==ue)&&(te!==$&&(s.activeTexture($),te=$),s.bindTexture(L,ue||q[L]),de.type=L,de.texture=ue)}function Xt(){let L=ie[te];L!==void 0&&L.type!==void 0&&(s.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function ct(){try{s.compressedTexImage2D(...arguments)}catch(L){Oe(`WebGLState:`,L)}}function A(){try{s.compressedTexImage3D(...arguments)}catch(L){Oe(`WebGLState:`,L)}}function _(){try{s.texSubImage2D(...arguments)}catch(L){Oe(`WebGLState:`,L)}}function O(){try{s.texSubImage3D(...arguments)}catch(L){Oe(`WebGLState:`,L)}}function V(){try{s.compressedTexSubImage2D(...arguments)}catch(L){Oe(`WebGLState:`,L)}}function X(){try{s.compressedTexSubImage3D(...arguments)}catch(L){Oe(`WebGLState:`,L)}}function oe(){try{s.texStorage2D(...arguments)}catch(L){Oe(`WebGLState:`,L)}}function le(){try{s.texStorage3D(...arguments)}catch(L){Oe(`WebGLState:`,L)}}function j(){try{s.texImage2D(...arguments)}catch(L){Oe(`WebGLState:`,L)}}function Q(){try{s.texImage3D(...arguments)}catch(L){Oe(`WebGLState:`,L)}}function ce(L){return d[L]!==void 0?d[L]:s.getParameter(L)}function Pe(L,ue){d[L]!==ue&&(s.pixelStorei(L,ue),d[L]=ue)}function fe(L){mt.equals(L)===!1&&(s.scissor(L.x,L.y,L.z,L.w),mt.copy(L))}function he(L){et.equals(L)===!1&&(s.viewport(L.x,L.y,L.z,L.w),et.copy(L))}function Ie(L,ue){let $=l.get(ue);$===void 0&&($=new WeakMap,l.set(ue,$));let de=$.get(L);de===void 0&&(de=s.getUniformBlockIndex(ue,L.name),$.set(L,de))}function Fe(L,ue){let de=l.get(ue).get(L);c.get(ue)!==de&&(s.uniformBlockBinding(ue,de,L.__bindingPointIndex),c.set(ue,de))}function ze(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),a.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),s.pixelStorei(s.PACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,!1),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,s.BROWSER_DEFAULT_WEBGL),s.pixelStorei(s.PACK_ROW_LENGTH,0),s.pixelStorei(s.PACK_SKIP_PIXELS,0),s.pixelStorei(s.PACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_ROW_LENGTH,0),s.pixelStorei(s.UNPACK_IMAGE_HEIGHT,0),s.pixelStorei(s.UNPACK_SKIP_PIXELS,0),s.pixelStorei(s.UNPACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_SKIP_IMAGES,0),u={},d={},te=null,ie={},h={},f=new WeakMap,g=[],y=null,m=!1,p=null,S=null,C=null,v=null,E=null,M=null,w=null,x=new Ae(0,0,0),T=0,P=!1,I=null,F=null,H=null,U=null,z=null,mt.set(0,0,s.canvas.width,s.canvas.height),et.set(0,0,s.canvas.width,s.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:ee,disable:Ee,bindFramebuffer:ke,drawBuffers:ye,useProgram:qe,setBlending:nt,setMaterial:gt,setFlipSided:$e,setCullFace:Mt,setLineWidth:kt,setPolygonOffset:an,setScissorTest:Tt,activeTexture:Ct,bindTexture:N,unbindTexture:Xt,compressedTexImage2D:ct,compressedTexImage3D:A,texImage2D:j,texImage3D:Q,pixelStorei:Pe,getParameter:ce,updateUBOMapping:Ie,uniformBlockBinding:Fe,texStorage2D:oe,texStorage3D:le,texSubImage2D:_,texSubImage3D:O,compressedTexSubImage2D:V,compressedTexSubImage3D:X,scissor:fe,viewport:he,reset:ze}}function S_(s,e,t,n,i,r,a){let o=e.has(`WEBGL_multisampled_render_to_texture`)?e.get(`WEBGL_multisampled_render_to_texture`):null,c=typeof navigator>`u`?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Se,u=new WeakMap,d=new Set,h,f=new WeakMap,g=!1;try{g=typeof OffscreenCanvas<`u`&&new OffscreenCanvas(1,1).getContext(`2d`)!==null}catch{}function y(A,_){return g?new OffscreenCanvas(A,_):xs(`canvas`)}function m(A,_,O){let V=1,X=ct(A);if((X.width>O||X.height>O)&&(V=O/Math.max(X.width,X.height)),V<1)if(typeof HTMLImageElement<`u`&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&A instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&A instanceof ImageBitmap||typeof VideoFrame<`u`&&A instanceof VideoFrame){let oe=Math.floor(V*X.width),le=Math.floor(V*X.height);h===void 0&&(h=y(oe,le));let j=_?y(oe,le):h;return j.width=oe,j.height=le,j.getContext(`2d`).drawImage(A,0,0,oe,le),Ne(`WebGLRenderer: Texture has been resized from (`+X.width+`x`+X.height+`) to (`+oe+`x`+le+`).`),j}else return`data`in A&&Ne(`WebGLRenderer: Image in DataTexture is too big (`+X.width+`x`+X.height+`).`),A;return A}function p(A){return A.generateMipmaps}function S(A){s.generateMipmap(A)}function C(A){return A.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:A.isWebGL3DRenderTarget?s.TEXTURE_3D:A.isWebGLArrayRenderTarget||A.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function v(A,_,O,V,X,oe=!1){if(A!==null){if(s[A]!==void 0)return s[A];Ne(`WebGLRenderer: Attempt to use non-existing WebGL internal format '`+A+`'`)}let le;V&&(le=e.get(`EXT_texture_norm16`),le||Ne(`WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension`));let j=_;if(_===s.RED&&(O===s.FLOAT&&(j=s.R32F),O===s.HALF_FLOAT&&(j=s.R16F),O===s.UNSIGNED_BYTE&&(j=s.R8),O===s.UNSIGNED_SHORT&&le&&(j=le.R16_EXT),O===s.SHORT&&le&&(j=le.R16_SNORM_EXT)),_===s.RED_INTEGER&&(O===s.UNSIGNED_BYTE&&(j=s.R8UI),O===s.UNSIGNED_SHORT&&(j=s.R16UI),O===s.UNSIGNED_INT&&(j=s.R32UI),O===s.BYTE&&(j=s.R8I),O===s.SHORT&&(j=s.R16I),O===s.INT&&(j=s.R32I)),_===s.RG&&(O===s.FLOAT&&(j=s.RG32F),O===s.HALF_FLOAT&&(j=s.RG16F),O===s.UNSIGNED_BYTE&&(j=s.RG8),O===s.UNSIGNED_SHORT&&le&&(j=le.RG16_EXT),O===s.SHORT&&le&&(j=le.RG16_SNORM_EXT)),_===s.RG_INTEGER&&(O===s.UNSIGNED_BYTE&&(j=s.RG8UI),O===s.UNSIGNED_SHORT&&(j=s.RG16UI),O===s.UNSIGNED_INT&&(j=s.RG32UI),O===s.BYTE&&(j=s.RG8I),O===s.SHORT&&(j=s.RG16I),O===s.INT&&(j=s.RG32I)),_===s.RGB_INTEGER&&(O===s.UNSIGNED_BYTE&&(j=s.RGB8UI),O===s.UNSIGNED_SHORT&&(j=s.RGB16UI),O===s.UNSIGNED_INT&&(j=s.RGB32UI),O===s.BYTE&&(j=s.RGB8I),O===s.SHORT&&(j=s.RGB16I),O===s.INT&&(j=s.RGB32I)),_===s.RGBA_INTEGER&&(O===s.UNSIGNED_BYTE&&(j=s.RGBA8UI),O===s.UNSIGNED_SHORT&&(j=s.RGBA16UI),O===s.UNSIGNED_INT&&(j=s.RGBA32UI),O===s.BYTE&&(j=s.RGBA8I),O===s.SHORT&&(j=s.RGBA16I),O===s.INT&&(j=s.RGBA32I)),_===s.RGB&&(O===s.UNSIGNED_SHORT&&le&&(j=le.RGB16_EXT),O===s.SHORT&&le&&(j=le.RGB16_SNORM_EXT),O===s.UNSIGNED_INT_5_9_9_9_REV&&(j=s.RGB9_E5),O===s.UNSIGNED_INT_10F_11F_11F_REV&&(j=s.R11F_G11F_B10F)),_===s.RGBA){let Q=oe?nr:We.getTransfer(X);O===s.FLOAT&&(j=s.RGBA32F),O===s.HALF_FLOAT&&(j=s.RGBA16F),O===s.UNSIGNED_BYTE&&(j=Q===lt?s.SRGB8_ALPHA8:s.RGBA8),O===s.UNSIGNED_SHORT&&le&&(j=le.RGBA16_EXT),O===s.SHORT&&le&&(j=le.RGBA16_SNORM_EXT),O===s.UNSIGNED_SHORT_4_4_4_4&&(j=s.RGBA4),O===s.UNSIGNED_SHORT_5_5_5_1&&(j=s.RGB5_A1)}return(j===s.R16F||j===s.R32F||j===s.RG16F||j===s.RG32F||j===s.RGBA16F||j===s.RGBA32F)&&e.get(`EXT_color_buffer_float`),j}function E(A,_){let O;return A?_===null||_===Fn||_===Os?O=s.DEPTH24_STENCIL8:_===On?O=s.DEPTH32F_STENCIL8:_===Fs&&(O=s.DEPTH24_STENCIL8,Ne(`DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.`)):_===null||_===Fn||_===Os?O=s.DEPTH_COMPONENT24:_===On?O=s.DEPTH_COMPONENT32F:_===Fs&&(O=s.DEPTH_COMPONENT16),O}function M(A,_){return p(A)===!0||A.isFramebufferTexture&&A.minFilter!==Ht&&A.minFilter!==Gt?Math.log2(Math.max(_.width,_.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?_.mipmaps.length:1}function w(A){let _=A.target;_.removeEventListener(`dispose`,w),T(_),_.isVideoTexture&&u.delete(_),_.isHTMLTexture&&d.delete(_)}function x(A){let _=A.target;_.removeEventListener(`dispose`,x),I(_)}function T(A){let _=n.get(A);if(_.__webglInit===void 0)return;let O=A.source,V=f.get(O);if(V){let X=V[_.__cacheKey];X.usedTimes--,X.usedTimes===0&&P(A),Object.keys(V).length===0&&f.delete(O)}n.remove(A)}function P(A){let _=n.get(A);s.deleteTexture(_.__webglTexture);let O=A.source,V=f.get(O);delete V[_.__cacheKey],a.memory.textures--}function I(A){let _=n.get(A);if(A.depthTexture&&(A.depthTexture.dispose(),n.remove(A.depthTexture)),A.isWebGLCubeRenderTarget)for(let V=0;V<6;V++){if(Array.isArray(_.__webglFramebuffer[V]))for(let X=0;X<_.__webglFramebuffer[V].length;X++)s.deleteFramebuffer(_.__webglFramebuffer[V][X]);else s.deleteFramebuffer(_.__webglFramebuffer[V]);_.__webglDepthbuffer&&s.deleteRenderbuffer(_.__webglDepthbuffer[V])}else{if(Array.isArray(_.__webglFramebuffer))for(let V=0;V<_.__webglFramebuffer.length;V++)s.deleteFramebuffer(_.__webglFramebuffer[V]);else s.deleteFramebuffer(_.__webglFramebuffer);if(_.__webglDepthbuffer&&s.deleteRenderbuffer(_.__webglDepthbuffer),_.__webglMultisampledFramebuffer&&s.deleteFramebuffer(_.__webglMultisampledFramebuffer),_.__webglColorRenderbuffer)for(let V=0;V<_.__webglColorRenderbuffer.length;V++)_.__webglColorRenderbuffer[V]&&s.deleteRenderbuffer(_.__webglColorRenderbuffer[V]);_.__webglDepthRenderbuffer&&s.deleteRenderbuffer(_.__webglDepthRenderbuffer)}let O=A.textures;for(let V=0,X=O.length;V<X;V++){let oe=n.get(O[V]);oe.__webglTexture&&(s.deleteTexture(oe.__webglTexture),a.memory.textures--),n.remove(O[V])}n.remove(A)}let F=0;function H(){F=0}function U(){return F}function z(A){F=A}function J(){let A=F;return A>=i.maxTextures&&Ne(`WebGLTextures: Trying to use `+(A+1)+` texture units while this GPU supports only `+i.maxTextures),F+=1,A}function W(A){let _=[];return _.push(A.wrapS),_.push(A.wrapT),_.push(A.wrapR||0),_.push(A.magFilter),_.push(A.minFilter),_.push(A.anisotropy),_.push(A.internalFormat),_.push(A.format),_.push(A.type),_.push(A.generateMipmaps),_.push(A.premultiplyAlpha),_.push(A.flipY),_.push(A.unpackAlignment),_.push(A.colorSpace),_.join()}function re(A,_){let O=n.get(A);if(A.isVideoTexture&&N(A),A.isRenderTargetTexture===!1&&A.isExternalTexture!==!0&&A.version>0&&O.__version!==A.version){let V=A.image;if(V===null)Ne(`WebGLRenderer: Texture marked for update but no image data found.`);else if(V.complete===!1)Ne(`WebGLRenderer: Texture marked for update but image is incomplete`);else{Ee(O,A,_);return}}else A.isExternalTexture&&(O.__webglTexture=A.sourceTexture?A.sourceTexture:null);t.bindTexture(s.TEXTURE_2D,O.__webglTexture,s.TEXTURE0+_)}function Y(A,_){let O=n.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&O.__version!==A.version){Ee(O,A,_);return}else A.isExternalTexture&&(O.__webglTexture=A.sourceTexture?A.sourceTexture:null);t.bindTexture(s.TEXTURE_2D_ARRAY,O.__webglTexture,s.TEXTURE0+_)}function te(A,_){let O=n.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&O.__version!==A.version){Ee(O,A,_);return}t.bindTexture(s.TEXTURE_3D,O.__webglTexture,s.TEXTURE0+_)}function ie(A,_){let O=n.get(A);if(A.isCubeDepthTexture!==!0&&A.version>0&&O.__version!==A.version){ke(O,A,_);return}t.bindTexture(s.TEXTURE_CUBE_MAP,O.__webglTexture,s.TEXTURE0+_)}let Ue={[_i]:s.REPEAT,[vn]:s.CLAMP_TO_EDGE,[Oa]:s.MIRRORED_REPEAT},De={[Ht]:s.NEAREST,[Tu]:s.NEAREST_MIPMAP_NEAREST,[Dr]:s.NEAREST_MIPMAP_LINEAR,[Gt]:s.LINEAR,[fo]:s.LINEAR_MIPMAP_NEAREST,[wi]:s.LINEAR_MIPMAP_LINEAR},mt={[Ru]:s.NEVER,[Nu]:s.ALWAYS,[Pu]:s.LESS,[Ko]:s.LEQUAL,[Iu]:s.EQUAL,[Jo]:s.GEQUAL,[Du]:s.GREATER,[Lu]:s.NOTEQUAL};function et(A,_){if(_.type===On&&e.has(`OES_texture_float_linear`)===!1&&(_.magFilter===Gt||_.magFilter===fo||_.magFilter===Dr||_.magFilter===wi||_.minFilter===Gt||_.minFilter===fo||_.minFilter===Dr||_.minFilter===wi)&&Ne(`WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device.`),s.texParameteri(A,s.TEXTURE_WRAP_S,Ue[_.wrapS]),s.texParameteri(A,s.TEXTURE_WRAP_T,Ue[_.wrapT]),(A===s.TEXTURE_3D||A===s.TEXTURE_2D_ARRAY)&&s.texParameteri(A,s.TEXTURE_WRAP_R,Ue[_.wrapR]),s.texParameteri(A,s.TEXTURE_MAG_FILTER,De[_.magFilter]),s.texParameteri(A,s.TEXTURE_MIN_FILTER,De[_.minFilter]),_.compareFunction&&(s.texParameteri(A,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(A,s.TEXTURE_COMPARE_FUNC,mt[_.compareFunction])),e.has(`EXT_texture_filter_anisotropic`)===!0){if(_.magFilter===Ht||_.minFilter!==Dr&&_.minFilter!==wi||_.type===On&&e.has(`OES_texture_float_linear`)===!1)return;if(_.anisotropy>1||n.get(_).__currentAnisotropy){let O=e.get(`EXT_texture_filter_anisotropic`);s.texParameterf(A,O.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,i.getMaxAnisotropy())),n.get(_).__currentAnisotropy=_.anisotropy}}}function it(A,_){let O=!1;A.__webglInit===void 0&&(A.__webglInit=!0,_.addEventListener(`dispose`,w));let V=_.source,X=f.get(V);X===void 0&&(X={},f.set(V,X));let oe=W(_);if(oe!==A.__cacheKey){X[oe]===void 0&&(X[oe]={texture:s.createTexture(),usedTimes:0},a.memory.textures++,O=!0),X[oe].usedTimes++;let le=X[A.__cacheKey];le!==void 0&&(X[A.__cacheKey].usedTimes--,le.usedTimes===0&&P(_)),A.__cacheKey=oe,A.__webglTexture=X[oe].texture}return O}function q(A,_,O){return Math.floor(Math.floor(A/O)/_)}function ee(A,_,O,V){let oe=A.updateRanges;if(oe.length===0)t.texSubImage2D(s.TEXTURE_2D,0,0,0,_.width,_.height,O,V,_.data);else{oe.sort((Pe,fe)=>Pe.start-fe.start);let le=0;for(let Pe=1;Pe<oe.length;Pe++){let fe=oe[le],he=oe[Pe],Ie=fe.start+fe.count,Fe=q(he.start,_.width,4),ze=q(fe.start,_.width,4);he.start<=Ie+1&&Fe===ze&&q(he.start+he.count-1,_.width,4)===Fe?fe.count=Math.max(fe.count,he.start+he.count-fe.start):(++le,oe[le]=he)}oe.length=le+1;let j=t.getParameter(s.UNPACK_ROW_LENGTH),Q=t.getParameter(s.UNPACK_SKIP_PIXELS),ce=t.getParameter(s.UNPACK_SKIP_ROWS);t.pixelStorei(s.UNPACK_ROW_LENGTH,_.width);for(let Pe=0,fe=oe.length;Pe<fe;Pe++){let he=oe[Pe],Ie=Math.floor(he.start/4),Fe=Math.ceil(he.count/4),ze=Ie%_.width,L=Math.floor(Ie/_.width),ue=Fe;t.pixelStorei(s.UNPACK_SKIP_PIXELS,ze),t.pixelStorei(s.UNPACK_SKIP_ROWS,L),t.texSubImage2D(s.TEXTURE_2D,0,ze,L,ue,1,O,V,_.data)}A.clearUpdateRanges(),t.pixelStorei(s.UNPACK_ROW_LENGTH,j),t.pixelStorei(s.UNPACK_SKIP_PIXELS,Q),t.pixelStorei(s.UNPACK_SKIP_ROWS,ce)}}function Ee(A,_,O){let V=s.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&(V=s.TEXTURE_2D_ARRAY),_.isData3DTexture&&(V=s.TEXTURE_3D);let X=it(A,_),oe=_.source;t.bindTexture(V,A.__webglTexture,s.TEXTURE0+O);let le=n.get(oe);if(oe.version!==le.__version||X===!0){if(t.activeTexture(s.TEXTURE0+O),(typeof ImageBitmap<`u`&&_.image instanceof ImageBitmap)===!1){let $=We.getPrimaries(We.workingColorSpace),de=_.colorSpace===oi?null:We.getPrimaries(_.colorSpace),_e=_.colorSpace===oi||$===de?s.NONE:s.BROWSER_DEFAULT_WEBGL;t.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,_.flipY),t.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),t.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,_e)}t.pixelStorei(s.UNPACK_ALIGNMENT,_.unpackAlignment);let Q=m(_.image,!1,i.maxTextureSize);Q=Xt(_,Q);let ce=r.convert(_.format,_.colorSpace),Pe=r.convert(_.type),fe=v(_.internalFormat,ce,Pe,_.normalized,_.colorSpace,_.isVideoTexture);et(V,_);let he,Ie=_.mipmaps,Fe=_.isVideoTexture!==!0,ze=le.__version===void 0||X===!0,L=oe.dataReady,ue=M(_,Q);if(_.isDepthTexture)fe=E(_.format===Ai,_.type),ze&&(Fe?t.texStorage2D(s.TEXTURE_2D,1,fe,Q.width,Q.height):t.texImage2D(s.TEXTURE_2D,0,fe,Q.width,Q.height,0,ce,Pe,null));else if(_.isDataTexture)if(Ie.length>0){Fe&&ze&&t.texStorage2D(s.TEXTURE_2D,ue,fe,Ie[0].width,Ie[0].height);for(let $=0,de=Ie.length;$<de;$++)he=Ie[$],Fe?L&&t.texSubImage2D(s.TEXTURE_2D,$,0,0,he.width,he.height,ce,Pe,he.data):t.texImage2D(s.TEXTURE_2D,$,fe,he.width,he.height,0,ce,Pe,he.data);_.generateMipmaps=!1}else Fe?(ze&&t.texStorage2D(s.TEXTURE_2D,ue,fe,Q.width,Q.height),L&&ee(_,Q,ce,Pe)):t.texImage2D(s.TEXTURE_2D,0,fe,Q.width,Q.height,0,ce,Pe,Q.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){Fe&&ze&&t.texStorage3D(s.TEXTURE_2D_ARRAY,ue,fe,Ie[0].width,Ie[0].height,Q.depth);for(let $=0,de=Ie.length;$<de;$++)if(he=Ie[$],_.format!==Mn)if(ce!==null)if(Fe){if(L)if(_.layerUpdates.size>0){let _e=Cc(he.width,he.height,_.format,_.type);for(let ne of _.layerUpdates){let Le=he.data.subarray(ne*_e/he.data.BYTES_PER_ELEMENT,(ne+1)*_e/he.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,$,0,0,ne,he.width,he.height,1,ce,Le)}}else t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,$,0,0,0,he.width,he.height,Q.depth,ce,he.data)}else t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,$,fe,he.width,he.height,Q.depth,0,he.data,0,0);else Ne(`WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()`);else Fe?L&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,$,0,0,0,he.width,he.height,Q.depth,ce,Pe,he.data):t.texImage3D(s.TEXTURE_2D_ARRAY,$,fe,he.width,he.height,Q.depth,0,ce,Pe,he.data);_.layerUpdates.size>0&&_.clearLayerUpdates()}else{Fe&&ze&&t.texStorage2D(s.TEXTURE_2D,ue,fe,Ie[0].width,Ie[0].height);for(let $=0,de=Ie.length;$<de;$++)he=Ie[$],_.format!==Mn?ce!==null?Fe?L&&t.compressedTexSubImage2D(s.TEXTURE_2D,$,0,0,he.width,he.height,ce,he.data):t.compressedTexImage2D(s.TEXTURE_2D,$,fe,he.width,he.height,0,he.data):Ne(`WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()`):Fe?L&&t.texSubImage2D(s.TEXTURE_2D,$,0,0,he.width,he.height,ce,Pe,he.data):t.texImage2D(s.TEXTURE_2D,$,fe,he.width,he.height,0,ce,Pe,he.data)}else if(_.isDataArrayTexture)if(Fe){if(ze&&t.texStorage3D(s.TEXTURE_2D_ARRAY,ue,fe,Q.width,Q.height,Q.depth),L)if(_.layerUpdates.size>0){let $=Cc(Q.width,Q.height,_.format,_.type);for(let de of _.layerUpdates){let _e=Q.data.subarray(de*$/Q.data.BYTES_PER_ELEMENT,(de+1)*$/Q.data.BYTES_PER_ELEMENT);t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,de,Q.width,Q.height,1,ce,Pe,_e)}_.clearLayerUpdates()}else t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,Q.width,Q.height,Q.depth,ce,Pe,Q.data)}else t.texImage3D(s.TEXTURE_2D_ARRAY,0,fe,Q.width,Q.height,Q.depth,0,ce,Pe,Q.data);else if(_.isData3DTexture)Fe?(ze&&t.texStorage3D(s.TEXTURE_3D,ue,fe,Q.width,Q.height,Q.depth),L&&t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,Q.width,Q.height,Q.depth,ce,Pe,Q.data)):t.texImage3D(s.TEXTURE_3D,0,fe,Q.width,Q.height,Q.depth,0,ce,Pe,Q.data);else if(_.isFramebufferTexture){if(ze)if(Fe)t.texStorage2D(s.TEXTURE_2D,ue,fe,Q.width,Q.height);else{let $=Q.width,de=Q.height;for(let _e=0;_e<ue;_e++)t.texImage2D(s.TEXTURE_2D,_e,fe,$,de,0,ce,Pe,null),$>>=1,de>>=1}}else if(_.isHTMLTexture){if(`texElementImage2D`in s){let $=s.canvas;if($.hasAttribute(`layoutsubtree`)||$.setAttribute(`layoutsubtree`,`true`),Q.parentNode!==$){$.appendChild(Q),d.add(_),$.onpaint=de=>{let _e=de.changedElements;for(let ne of d)_e.includes(ne.image)&&(ne.needsUpdate=!0)},$.requestPaint();return}if(s.texElementImage2D.length===3)s.texElementImage2D(s.TEXTURE_2D,s.RGBA8,Q);else{let _e=s.RGBA,ne=s.RGBA,Le=s.UNSIGNED_BYTE;s.texElementImage2D(s.TEXTURE_2D,0,_e,ne,Le,Q)}s.texParameteri(s.TEXTURE_2D,s.TEXTURE_MIN_FILTER,s.LINEAR),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE)}}else if(Ie.length>0){if(Fe&&ze){let $=ct(Ie[0]);t.texStorage2D(s.TEXTURE_2D,ue,fe,$.width,$.height)}for(let $=0,de=Ie.length;$<de;$++)he=Ie[$],Fe?L&&t.texSubImage2D(s.TEXTURE_2D,$,0,0,ce,Pe,he):t.texImage2D(s.TEXTURE_2D,$,fe,ce,Pe,he);_.generateMipmaps=!1}else if(Fe){if(ze){let $=ct(Q);t.texStorage2D(s.TEXTURE_2D,ue,fe,$.width,$.height)}L&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,ce,Pe,Q)}else t.texImage2D(s.TEXTURE_2D,0,fe,ce,Pe,Q);p(_)&&S(V),le.__version=oe.version,_.onUpdate&&_.onUpdate(_)}A.__version=_.version}function ke(A,_,O){if(_.image.length!==6)return;let V=it(A,_),X=_.source;t.bindTexture(s.TEXTURE_CUBE_MAP,A.__webglTexture,s.TEXTURE0+O);let oe=n.get(X);if(X.version!==oe.__version||V===!0){t.activeTexture(s.TEXTURE0+O);let le=We.getPrimaries(We.workingColorSpace),j=_.colorSpace===oi?null:We.getPrimaries(_.colorSpace),Q=_.colorSpace===oi||le===j?s.NONE:s.BROWSER_DEFAULT_WEBGL;t.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,_.flipY),t.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),t.pixelStorei(s.UNPACK_ALIGNMENT,_.unpackAlignment),t.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Q);let ce=_.isCompressedTexture||_.image[0].isCompressedTexture,Pe=_.image[0]&&_.image[0].isDataTexture,fe=[];for(let ne=0;ne<6;ne++)!ce&&!Pe?fe[ne]=m(_.image[ne],!0,i.maxCubemapSize):fe[ne]=Pe?_.image[ne].image:_.image[ne],fe[ne]=Xt(_,fe[ne]);let he=fe[0],Ie=r.convert(_.format,_.colorSpace),Fe=r.convert(_.type),ze=v(_.internalFormat,Ie,Fe,_.normalized,_.colorSpace),L=_.isVideoTexture!==!0,ue=oe.__version===void 0||V===!0,$=X.dataReady,de=M(_,he);et(s.TEXTURE_CUBE_MAP,_);let _e;if(ce){L&&ue&&t.texStorage2D(s.TEXTURE_CUBE_MAP,de,ze,he.width,he.height);for(let ne=0;ne<6;ne++){_e=fe[ne].mipmaps;for(let Le=0;Le<_e.length;Le++){let Ce=_e[Le];_.format!==Mn?Ie!==null?L?$&&t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Le,0,0,Ce.width,Ce.height,Ie,Ce.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Le,ze,Ce.width,Ce.height,0,Ce.data):Ne(`WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()`):L?$&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Le,0,0,Ce.width,Ce.height,Ie,Fe,Ce.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Le,ze,Ce.width,Ce.height,0,Ie,Fe,Ce.data)}}}else{if(_e=_.mipmaps,L&&ue){_e.length>0&&de++;let ne=ct(fe[0]);t.texStorage2D(s.TEXTURE_CUBE_MAP,de,ze,ne.width,ne.height)}for(let ne=0;ne<6;ne++)if(Pe){L?$&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,0,0,fe[ne].width,fe[ne].height,Ie,Fe,fe[ne].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,ze,fe[ne].width,fe[ne].height,0,Ie,Fe,fe[ne].data);for(let Le=0;Le<_e.length;Le++){let _t=_e[Le].image[ne].image;L?$&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Le+1,0,0,_t.width,_t.height,Ie,Fe,_t.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Le+1,ze,_t.width,_t.height,0,Ie,Fe,_t.data)}}else{L?$&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,0,0,Ie,Fe,fe[ne]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,ze,Ie,Fe,fe[ne]);for(let Le=0;Le<_e.length;Le++){let Ce=_e[Le];L?$&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Le+1,0,0,Ie,Fe,Ce.image[ne]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Le+1,ze,Ie,Fe,Ce.image[ne])}}}p(_)&&S(s.TEXTURE_CUBE_MAP),oe.__version=X.version,_.onUpdate&&_.onUpdate(_)}A.__version=_.version}function ye(A,_,O,V,X,oe){let le=r.convert(O.format,O.colorSpace),j=r.convert(O.type),Q=v(O.internalFormat,le,j,O.normalized,O.colorSpace),ce=n.get(_),Pe=n.get(O);if(Pe.__renderTarget=_,!ce.__hasExternalTextures){let fe=Math.max(1,_.width>>oe),he=Math.max(1,_.height>>oe);X===s.TEXTURE_3D||X===s.TEXTURE_2D_ARRAY?t.texImage3D(X,oe,Q,fe,he,_.depth,0,le,j,null):t.texImage2D(X,oe,Q,fe,he,0,le,j,null)}t.bindFramebuffer(s.FRAMEBUFFER,A),Ct(_)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,V,X,Pe.__webglTexture,0,Tt(_)):(X===s.TEXTURE_2D||X>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&X<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,V,X,Pe.__webglTexture,oe),t.bindFramebuffer(s.FRAMEBUFFER,null)}function qe(A,_,O){if(s.bindRenderbuffer(s.RENDERBUFFER,A),_.depthBuffer){let V=_.depthTexture,X=V&&V.isDepthTexture?V.type:null,oe=E(_.stencilBuffer,X),le=_.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;Ct(_)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Tt(_),oe,_.width,_.height):O?s.renderbufferStorageMultisample(s.RENDERBUFFER,Tt(_),oe,_.width,_.height):s.renderbufferStorage(s.RENDERBUFFER,oe,_.width,_.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,le,s.RENDERBUFFER,A)}else{let V=_.textures;for(let X=0;X<V.length;X++){let oe=V[X],le=r.convert(oe.format,oe.colorSpace),j=r.convert(oe.type),Q=v(oe.internalFormat,le,j,oe.normalized,oe.colorSpace);Ct(_)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Tt(_),Q,_.width,_.height):O?s.renderbufferStorageMultisample(s.RENDERBUFFER,Tt(_),Q,_.width,_.height):s.renderbufferStorage(s.RENDERBUFFER,Q,_.width,_.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Nt(A,_,O){let V=_.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(s.FRAMEBUFFER,A),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error(`THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.`);let X=n.get(_.depthTexture);if(X.__renderTarget=_,(!X.__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),V){if(X.__webglInit===void 0&&(X.__webglInit=!0,_.depthTexture.addEventListener(`dispose`,w)),X.__webglTexture===void 0){X.__webglTexture=s.createTexture(),t.bindTexture(s.TEXTURE_CUBE_MAP,X.__webglTexture),et(s.TEXTURE_CUBE_MAP,_.depthTexture);let ce=r.convert(_.depthTexture.format),Pe=r.convert(_.depthTexture.type),fe;_.depthTexture.format===Vn?fe=s.DEPTH_COMPONENT24:_.depthTexture.format===Ai&&(fe=s.DEPTH24_STENCIL8);for(let he=0;he<6;he++)s.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,fe,_.width,_.height,0,ce,Pe,null)}}else re(_.depthTexture,0);let oe=X.__webglTexture,le=Tt(_),j=V?s.TEXTURE_CUBE_MAP_POSITIVE_X+O:s.TEXTURE_2D,Q=_.depthTexture.format===Ai?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;if(_.depthTexture.format===Vn)Ct(_)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,Q,j,oe,0,le):s.framebufferTexture2D(s.FRAMEBUFFER,Q,j,oe,0);else if(_.depthTexture.format===Ai)Ct(_)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,Q,j,oe,0,le):s.framebufferTexture2D(s.FRAMEBUFFER,Q,j,oe,0);else throw new Error(`THREE.WebGLTextures: Unknown depthTexture format.`)}function Ke(A){let _=n.get(A),O=A.isWebGLCubeRenderTarget===!0;if(_.__boundDepthTexture!==A.depthTexture){let V=A.depthTexture;if(_.__depthDisposeCallback&&_.__depthDisposeCallback(),V){let X=()=>{delete _.__boundDepthTexture,delete _.__depthDisposeCallback,V.removeEventListener(`dispose`,X)};V.addEventListener(`dispose`,X),_.__depthDisposeCallback=X}_.__boundDepthTexture=V}if(A.depthTexture&&!_.__autoAllocateDepthBuffer)if(O)for(let V=0;V<6;V++)Nt(_.__webglFramebuffer[V],A,V);else{let V=A.texture.mipmaps;V&&V.length>0?Nt(_.__webglFramebuffer[0],A,0):Nt(_.__webglFramebuffer,A,0)}else if(O){_.__webglDepthbuffer=[];for(let V=0;V<6;V++)if(t.bindFramebuffer(s.FRAMEBUFFER,_.__webglFramebuffer[V]),_.__webglDepthbuffer[V]===void 0)_.__webglDepthbuffer[V]=s.createRenderbuffer(),qe(_.__webglDepthbuffer[V],A,!1);else{let X=A.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,oe=_.__webglDepthbuffer[V];s.bindRenderbuffer(s.RENDERBUFFER,oe),s.framebufferRenderbuffer(s.FRAMEBUFFER,X,s.RENDERBUFFER,oe)}}else{let V=A.texture.mipmaps;if(V&&V.length>0?t.bindFramebuffer(s.FRAMEBUFFER,_.__webglFramebuffer[0]):t.bindFramebuffer(s.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer===void 0)_.__webglDepthbuffer=s.createRenderbuffer(),qe(_.__webglDepthbuffer,A,!1);else{let X=A.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,oe=_.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,oe),s.framebufferRenderbuffer(s.FRAMEBUFFER,X,s.RENDERBUFFER,oe)}}t.bindFramebuffer(s.FRAMEBUFFER,null)}function nt(A,_,O){let V=n.get(A);_!==void 0&&ye(V.__webglFramebuffer,A,A.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),O!==void 0&&Ke(A)}function gt(A){let _=A.texture,O=n.get(A),V=n.get(_);A.addEventListener(`dispose`,x);let X=A.textures,oe=A.isWebGLCubeRenderTarget===!0,le=X.length>1;if(le||(V.__webglTexture===void 0&&(V.__webglTexture=s.createTexture()),V.__version=_.version,a.memory.textures++),oe){O.__webglFramebuffer=[];for(let j=0;j<6;j++)if(_.mipmaps&&_.mipmaps.length>0){O.__webglFramebuffer[j]=[];for(let Q=0;Q<_.mipmaps.length;Q++)O.__webglFramebuffer[j][Q]=s.createFramebuffer()}else O.__webglFramebuffer[j]=s.createFramebuffer()}else{if(_.mipmaps&&_.mipmaps.length>0){O.__webglFramebuffer=[];for(let j=0;j<_.mipmaps.length;j++)O.__webglFramebuffer[j]=s.createFramebuffer()}else O.__webglFramebuffer=s.createFramebuffer();if(le)for(let j=0,Q=X.length;j<Q;j++){let ce=n.get(X[j]);ce.__webglTexture===void 0&&(ce.__webglTexture=s.createTexture(),a.memory.textures++)}if(A.samples>0&&Ct(A)===!1){O.__webglMultisampledFramebuffer=s.createFramebuffer(),O.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,O.__webglMultisampledFramebuffer);for(let j=0;j<X.length;j++){let Q=X[j];O.__webglColorRenderbuffer[j]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,O.__webglColorRenderbuffer[j]);let ce=r.convert(Q.format,Q.colorSpace),Pe=r.convert(Q.type),fe=v(Q.internalFormat,ce,Pe,Q.normalized,Q.colorSpace,A.isXRRenderTarget===!0),he=Tt(A);s.renderbufferStorageMultisample(s.RENDERBUFFER,he,fe,A.width,A.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+j,s.RENDERBUFFER,O.__webglColorRenderbuffer[j])}s.bindRenderbuffer(s.RENDERBUFFER,null),A.depthBuffer&&(O.__webglDepthRenderbuffer=s.createRenderbuffer(),qe(O.__webglDepthRenderbuffer,A,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(oe){t.bindTexture(s.TEXTURE_CUBE_MAP,V.__webglTexture),et(s.TEXTURE_CUBE_MAP,_);for(let j=0;j<6;j++)if(_.mipmaps&&_.mipmaps.length>0)for(let Q=0;Q<_.mipmaps.length;Q++)ye(O.__webglFramebuffer[j][Q],A,_,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+j,Q);else ye(O.__webglFramebuffer[j],A,_,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+j,0);p(_)&&S(s.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(le){for(let j=0,Q=X.length;j<Q;j++){let ce=X[j],Pe=n.get(ce),fe=s.TEXTURE_2D;(A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(fe=A.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(fe,Pe.__webglTexture),et(fe,ce),ye(O.__webglFramebuffer,A,ce,s.COLOR_ATTACHMENT0+j,fe,0),p(ce)&&S(fe)}t.unbindTexture()}else{let j=s.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(j=A.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(j,V.__webglTexture),et(j,_),_.mipmaps&&_.mipmaps.length>0)for(let Q=0;Q<_.mipmaps.length;Q++)ye(O.__webglFramebuffer[Q],A,_,s.COLOR_ATTACHMENT0,j,Q);else ye(O.__webglFramebuffer,A,_,s.COLOR_ATTACHMENT0,j,0);p(_)&&S(j),t.unbindTexture()}A.depthBuffer&&Ke(A)}function $e(A){let _=A.textures;for(let O=0,V=_.length;O<V;O++){let X=_[O];if(p(X)){let oe=C(A),le=n.get(X).__webglTexture;t.bindTexture(oe,le),S(oe),t.unbindTexture()}}}let Mt=[],kt=[];function an(A){if(A.samples>0){if(Ct(A)===!1){let _=A.textures,O=A.width,V=A.height,X=s.COLOR_BUFFER_BIT,oe=A.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,le=n.get(A),j=_.length>1;if(j)for(let ce=0;ce<_.length;ce++)t.bindFramebuffer(s.FRAMEBUFFER,le.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ce,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,le.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+ce,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,le.__webglMultisampledFramebuffer);let Q=A.texture.mipmaps;Q&&Q.length>0?t.bindFramebuffer(s.DRAW_FRAMEBUFFER,le.__webglFramebuffer[0]):t.bindFramebuffer(s.DRAW_FRAMEBUFFER,le.__webglFramebuffer);for(let ce=0;ce<_.length;ce++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(X|=s.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(X|=s.STENCIL_BUFFER_BIT)),j){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,le.__webglColorRenderbuffer[ce]);let Pe=n.get(_[ce]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,Pe,0)}s.blitFramebuffer(0,0,O,V,0,0,O,V,X,s.NEAREST),c===!0&&(Mt.length=0,kt.length=0,Mt.push(s.COLOR_ATTACHMENT0+ce),A.depthBuffer&&A.storeMultisampledDepthBuffer===!1&&(Mt.push(oe),kt.push(oe),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,kt)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,Mt))}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),j)for(let ce=0;ce<_.length;ce++){t.bindFramebuffer(s.FRAMEBUFFER,le.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ce,s.RENDERBUFFER,le.__webglColorRenderbuffer[ce]);let Pe=n.get(_[ce]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,le.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+ce,s.TEXTURE_2D,Pe,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,le.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.storeMultisampledDepthBuffer===!1&&c){let _=A.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[_])}}}function Tt(A){return Math.min(i.maxSamples,A.samples)}function Ct(A){let _=n.get(A);return A.samples>0&&e.has(`WEBGL_multisampled_render_to_texture`)===!0&&_.__useRenderToTexture!==!1}function N(A){let _=a.render.frame;u.get(A)!==_&&(u.set(A,_),A.update())}function Xt(A,_){let O=A.colorSpace,V=A.format,X=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||O!==tr&&O!==oi&&(We.getTransfer(O)===lt?(V!==Mn||X!==cn)&&Ne(`WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.`):Oe(`WebGLTextures: Unsupported texture color space:`,O)),_}function ct(A){return typeof HTMLImageElement<`u`&&A instanceof HTMLImageElement?(l.width=A.naturalWidth||A.width,l.height=A.naturalHeight||A.height):typeof VideoFrame<`u`&&A instanceof VideoFrame?(l.width=A.displayWidth,l.height=A.displayHeight):(l.width=A.width,l.height=A.height),l}this.allocateTextureUnit=J,this.resetTextureUnits=H,this.getTextureUnits=U,this.setTextureUnits=z,this.setTexture2D=re,this.setTexture2DArray=Y,this.setTexture3D=te,this.setTextureCube=ie,this.rebindTextures=nt,this.setupRenderTarget=gt,this.updateRenderTargetMipmap=$e,this.updateMultisampleRenderTarget=an,this.setupDepthRenderbuffer=Ke,this.setupFrameBufferTexture=ye,this.useMultisampledRTT=Ct,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function M_(s,e){function t(n,i=oi){let r,a=We.getTransfer(i);if(n===cn)return s.UNSIGNED_BYTE;if(n===mo)return s.UNSIGNED_SHORT_4_4_4_4;if(n===go)return s.UNSIGNED_SHORT_5_5_5_1;if(n===gc)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===_c)return s.UNSIGNED_INT_10F_11F_11F_REV;if(n===pc)return s.BYTE;if(n===mc)return s.SHORT;if(n===Fs)return s.UNSIGNED_SHORT;if(n===po)return s.INT;if(n===Fn)return s.UNSIGNED_INT;if(n===On)return s.FLOAT;if(n===Bn)return s.HALF_FLOAT;if(n===xc)return s.ALPHA;if(n===yc)return s.RGB;if(n===Mn)return s.RGBA;if(n===Vn)return s.DEPTH_COMPONENT;if(n===Ai)return s.DEPTH_STENCIL;if(n===vc)return s.RED;if(n===_o)return s.RED_INTEGER;if(n===Ci)return s.RG;if(n===xo)return s.RG_INTEGER;if(n===yo)return s.RGBA_INTEGER;if(n===Lr||n===Nr||n===Ur||n===Fr)if(a===lt)if(r=e.get(`WEBGL_compressed_texture_s3tc_srgb`),r!==null){if(n===Lr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Nr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Ur)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Fr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get(`WEBGL_compressed_texture_s3tc`),r!==null){if(n===Lr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Nr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Ur)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Fr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===vo||n===bo||n===So||n===Mo)if(r=e.get(`WEBGL_compressed_texture_pvrtc`),r!==null){if(n===vo)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===bo)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===So)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Mo)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Eo||n===To||n===wo||n===Ao||n===Co||n===Or||n===Ro)if(r=e.get(`WEBGL_compressed_texture_etc`),r!==null){if(n===Eo||n===To)return a===lt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===wo)return a===lt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===Ao)return r.COMPRESSED_R11_EAC;if(n===Co)return r.COMPRESSED_SIGNED_R11_EAC;if(n===Or)return r.COMPRESSED_RG11_EAC;if(n===Ro)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Po||n===Io||n===Do||n===Lo||n===No||n===Uo||n===Fo||n===Oo||n===Bo||n===ko||n===zo||n===Ho||n===Vo||n===Go)if(r=e.get(`WEBGL_compressed_texture_astc`),r!==null){if(n===Po)return a===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Io)return a===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Do)return a===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Lo)return a===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===No)return a===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Uo)return a===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Fo)return a===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Oo)return a===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Bo)return a===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===ko)return a===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===zo)return a===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Ho)return a===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Vo)return a===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Go)return a===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Wo||n===Xo||n===Yo)if(r=e.get(`EXT_texture_compression_bptc`),r!==null){if(n===Wo)return a===lt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Xo)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Yo)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===qo||n===jo||n===Br||n===Zo)if(r=e.get(`EXT_texture_compression_rgtc`),r!==null){if(n===qo)return r.COMPRESSED_RED_RGTC1_EXT;if(n===jo)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Br)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Zo)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Os?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:t}}var E_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`;var T_=`
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

}`;var Vc=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new ur(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new mn({vertexShader:E_,fragmentShader:T_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Lt(new pr(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}};var Gc=class extends Dn{constructor(e,t){super();let n=this,i=null,r=1,a=null,o=`local-floor`,c=1,l=null,u=null,d=null,h=null,f=null,g=null,y=typeof XRWebGLBinding<`u`,m=new Vc,p={},S=t.getContextAttributes(),C=null,v=null,E=[],M=[],w=new Se,x=null,T=null,P=new Vt;P.viewport=new Et;let I=new Vt;I.viewport=new Et;let F=[P,I],H=new lo,U=null,z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let ee=E[q];return ee===void 0&&(ee=new Ms,E[q]=ee),ee.getTargetRaySpace()},this.getControllerGrip=function(q){let ee=E[q];return ee===void 0&&(ee=new Ms,E[q]=ee),ee.getGripSpace()},this.getHand=function(q){let ee=E[q];return ee===void 0&&(ee=new Ms,E[q]=ee),ee.getHandSpace()};function J(q){let ee=M.indexOf(q.inputSource);if(ee===-1)return;let Ee=E[ee];Ee!==void 0&&(Ee.update(q.inputSource,q.frame,l||a),Ee.dispatchEvent({type:q.type,data:q.inputSource}))}function W(){i.removeEventListener(`select`,J),i.removeEventListener(`selectstart`,J),i.removeEventListener(`selectend`,J),i.removeEventListener(`squeeze`,J),i.removeEventListener(`squeezestart`,J),i.removeEventListener(`squeezeend`,J),i.removeEventListener(`end`,W),i.removeEventListener(`inputsourceschange`,re);for(let q=0;q<E.length;q++){let ee=M[q];ee!==null&&(M[q]=null,E[q].disconnect(ee))}U=null,z=null,m.reset();for(let q in p)delete p[q];if(e.setRenderTarget(C),f=null,h=null,d=null,i=null,v=null,it.stop(),n.isPresenting=!1,e.setPixelRatio(x),e.setSize(w.width,w.height,!1),T!==null){let q=T.camera;q.fov=T.fov,q.zoom=T.zoom,q.updateProjectionMatrix(),T=null}n.dispatchEvent({type:`sessionend`})}this.setFramebufferScaleFactor=function(q){r=q,n.isPresenting===!0&&Ne(`WebXRManager: Cannot change framebuffer scale while presenting.`)},this.setReferenceSpaceType=function(q){o=q,n.isPresenting===!0&&Ne(`WebXRManager: Cannot change reference space type while presenting.`)},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(q){l=q},this.getBaseLayer=function(){return h!==null?h:f},this.getBinding=function(){return d===null&&y&&(d=new XRWebGLBinding(i,t)),d},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(q){if(i=q,i!==null){if(C=e.getRenderTarget(),i.addEventListener(`select`,J),i.addEventListener(`selectstart`,J),i.addEventListener(`selectend`,J),i.addEventListener(`squeeze`,J),i.addEventListener(`squeezestart`,J),i.addEventListener(`squeezeend`,J),i.addEventListener(`end`,W),i.addEventListener(`inputsourceschange`,re),S.xrCompatible!==!0&&await t.makeXRCompatible(),x=e.getPixelRatio(),e.getSize(w),y&&`createProjectionLayer`in XRWebGLBinding.prototype){let Ee=null,ke=null,ye=null;S.depth&&(ye=S.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Ee=S.stencil?Ai:Vn,ke=S.stencil?Os:Fn);let qe={colorFormat:t.RGBA8,depthFormat:ye,scaleFactor:r};d=this.getBinding(),h=d.createProjectionLayer(qe),i.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),v=new ln(h.textureWidth,h.textureHeight,{format:Mn,type:cn,depthTexture:new yi(h.textureWidth,h.textureHeight,ke,void 0,void 0,void 0,void 0,void 0,void 0,Ee),stencilBuffer:S.stencil,colorSpace:e.outputColorSpace,samples:S.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1,storeMultisampledDepthBuffer:h.ignoreDepthValues===!1,storeMultisampledStencilBuffer:h.ignoreDepthValues===!1})}else{let Ee={antialias:S.antialias,alpha:!0,depth:S.depth,stencil:S.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(i,t,Ee),i.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),v=new ln(f.framebufferWidth,f.framebufferHeight,{format:Mn,type:cn,colorSpace:e.outputColorSpace,stencilBuffer:S.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await i.requestReferenceSpace(o),it.setContext(i),it.start(),n.isPresenting=!0,n.dispatchEvent({type:`sessionstart`})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function re(q){for(let ee=0;ee<q.removed.length;ee++){let Ee=q.removed[ee],ke=M.indexOf(Ee);ke>=0&&(M[ke]=null,E[ke].disconnect(Ee))}for(let ee=0;ee<q.added.length;ee++){let Ee=q.added[ee],ke=M.indexOf(Ee);if(ke===-1){for(let qe=0;qe<E.length;qe++)if(qe>=M.length){M.push(Ee),ke=qe;break}else if(M[qe]===null){M[qe]=Ee,ke=qe;break}if(ke===-1)break}let ye=E[ke];ye&&ye.connect(Ee)}}let Y=new R,te=new R;function ie(q,ee,Ee){Y.setFromMatrixPosition(ee.matrixWorld),te.setFromMatrixPosition(Ee.matrixWorld);let ke=Y.distanceTo(te),ye=ee.projectionMatrix.elements,qe=Ee.projectionMatrix.elements,Nt=ye[14]/(ye[10]-1),Ke=ye[14]/(ye[10]+1),nt=(ye[9]+1)/ye[5],gt=(ye[9]-1)/ye[5],$e=(ye[8]-1)/ye[0],Mt=(qe[8]+1)/qe[0],kt=Nt*$e,an=Nt*Mt,Tt=ke/(-$e+Mt),Ct=Tt*-$e;if(ee.matrixWorld.decompose(q.position,q.quaternion,q.scale),q.translateX(Ct),q.translateZ(Tt),q.matrixWorld.compose(q.position,q.quaternion,q.scale),q.matrixWorldInverse.copy(q.matrixWorld).invert(),ye[10]===-1)q.projectionMatrix.copy(ee.projectionMatrix),q.projectionMatrixInverse.copy(ee.projectionMatrixInverse);else{let N=Nt+Tt,Xt=Ke+Tt,ct=kt-Ct,A=an+(ke-Ct),_=nt*Ke/Xt*N,O=gt*Ke/Xt*N;q.projectionMatrix.makePerspective(ct,A,_,O,N,Xt),q.projectionMatrixInverse.copy(q.projectionMatrix).invert()}}function Ue(q,ee){ee===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(ee.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(i===null)return;let ee=q.near,Ee=q.far;m.texture!==null&&(m.depthNear>0&&(ee=m.depthNear),m.depthFar>0&&(Ee=m.depthFar)),H.near=I.near=P.near=ee,H.far=I.far=P.far=Ee,(U!==H.near||z!==H.far)&&(i.updateRenderState({depthNear:H.near,depthFar:H.far}),U=H.near,z=H.far),H.layers.mask=q.layers.mask|6,P.layers.mask=H.layers.mask&-5,I.layers.mask=H.layers.mask&-3;let ke=q.parent,ye=H.cameras;Ue(H,ke);for(let qe=0;qe<ye.length;qe++)Ue(ye[qe],ke);ye.length===2?ie(H,P,I):H.projectionMatrix.copy(P.projectionMatrix),T===null&&q.isPerspectiveCamera&&(T={camera:q,fov:q.fov,zoom:q.zoom}),De(q,H,ke)};function De(q,ee,Ee){Ee===null?q.matrix.copy(ee.matrixWorld):(q.matrix.copy(Ee.matrixWorld),q.matrix.invert(),q.matrix.multiply(ee.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(ee.projectionMatrix),q.projectionMatrixInverse.copy(ee.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=vs*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return H},this.getFoveation=function(){if(!(h===null&&f===null))return c},this.setFoveation=function(q){c=q,h!==null&&(h.fixedFoveation=q),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=q)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(H)},this.getCameraTexture=function(q){return p[q]};let mt=null;function et(q,ee){if(u=ee.getViewerPose(l||a),g=ee,u!==null){let Ee=u.views;f!==null&&(e.setRenderTargetFramebuffer(v,f.framebuffer),e.setRenderTarget(v));let ke=!1;Ee.length!==H.cameras.length&&(H.cameras.length=0,ke=!0);for(let Ke=0;Ke<Ee.length;Ke++){let nt=Ee[Ke],gt=null;if(f!==null)gt=f.getViewport(nt);else{let Mt=d.getViewSubImage(h,nt);gt=Mt.viewport,Ke===0&&(e.setRenderTargetTextures(v,Mt.colorTexture,Mt.depthStencilTexture),e.setRenderTarget(v))}let $e=F[Ke];$e===void 0&&($e=new Vt,$e.layers.enable(Ke),$e.viewport=new Et,F[Ke]=$e),$e.matrix.fromArray(nt.transform.matrix),$e.matrix.decompose($e.position,$e.quaternion,$e.scale),$e.projectionMatrix.fromArray(nt.projectionMatrix),$e.projectionMatrixInverse.copy($e.projectionMatrix).invert(),$e.viewport.set(gt.x,gt.y,gt.width,gt.height),Ke===0&&(H.matrix.copy($e.matrix),H.matrix.decompose(H.position,H.quaternion,H.scale)),ke===!0&&H.cameras.push($e)}let ye=i.enabledFeatures;if(ye&&ye.includes(`depth-sensing`)&&i.depthUsage==`gpu-optimized`&&y){d=n.getBinding();let Ke=d.getDepthInformation(Ee[0]);Ke&&Ke.isValid&&Ke.texture&&m.init(Ke,i.renderState)}if(ye&&ye.includes(`camera-access`)&&y){e.state.unbindTexture(),d=n.getBinding();for(let Ke=0;Ke<Ee.length;Ke++){let nt=Ee[Ke].camera;if(nt){let gt=p[nt];gt||(gt=new ur,p[nt]=gt);let $e=d.getCameraImage(nt);gt.sourceTexture=$e}}}}for(let Ee=0;Ee<E.length;Ee++){let ke=M[Ee],ye=E[Ee];ke!==null&&ye!==void 0&&ye.update(ke,ee,l||a)}mt&&mt(q,ee),ee.detectedPlanes&&n.dispatchEvent({type:`planesdetected`,data:ee}),g=null}let it=new hd;it.setAnimationLoop(et),this.setAnimationLoop=function(q){mt=q},this.dispose=function(){}}};var w_=new ft;var gd=new Be;gd.set(-1,0,0,0,1,0,0,0,1);function A_(s,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,Tc(s)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function i(m,p,S,C,v){p.isNodeMaterial?p.uniformsNeedUpdate=!1:p.isMeshBasicMaterial?r(m,p):p.isMeshLambertMaterial?(r(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(r(m,p),d(m,p)):p.isMeshPhongMaterial?(r(m,p),u(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(r(m,p),h(m,p),p.isMeshPhysicalMaterial&&f(m,p,v)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),y(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?c(m,p,S,C):p.isSpriteMaterial?l(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===rn&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===rn&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let S=e.get(p),C=S.envMap,v=S.envMapRotation;C&&(m.envMap.value=C,m.envMapRotation.value.setFromMatrix4(w_.makeRotationFromEuler(v)).transpose(),C.isCubeTexture&&C.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(gd),m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function c(m,p,S,C){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*S,m.scale.value=C*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function l(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function d(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function h(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,S){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===rn&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.retroreflectivity>0&&(m.retroreflectivity.value=p.retroreflectivity),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=S.texture,m.transmissionSamplerSize.value.set(S.width,S.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function y(m,p){let S=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(S.matrixWorld),m.nearDistance.value=S.shadow.camera.near,m.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function C_(s,e,t,n){let i={},r={},a=[],o=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function c(v,E){let M=E.program;n.uniformBlockBinding(v,M)}function l(v,E){let M=i[v.id];M===void 0&&(m(v),M=u(v),i[v.id]=M,v.addEventListener(`dispose`,S));let w=E.program;n.updateUBOMapping(v,w);let x=e.render.frame;r[v.id]!==x&&(h(v),r[v.id]=x)}function u(v){let E=d();v.__bindingPointIndex=E;let M=s.createBuffer(),w=v.__size,x=v.usage;return s.bindBuffer(s.UNIFORM_BUFFER,M),s.bufferData(s.UNIFORM_BUFFER,w,x),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,E,M),M}function d(){for(let v=0;v<o;v++)if(a.indexOf(v)===-1)return a.push(v),v;return Oe(`WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached.`),0}function h(v){let E=i[v.id],M=v.uniforms,w=v.__cache;s.bindBuffer(s.UNIFORM_BUFFER,E);for(let x=0,T=M.length;x<T;x++){let P=M[x];if(Array.isArray(P))for(let I=0,F=P.length;I<F;I++)f(P[I],x,I,w);else f(P,x,0,w)}s.bindBuffer(s.UNIFORM_BUFFER,null)}function f(v,E,M,w){if(y(v,E,M,w)===!0){let x=v.__offset,T=v.value;if(Array.isArray(T)){let P=0;for(let I=0;I<T.length;I++){let F=T[I],H=p(F);g(F,v.__data,P),typeof F!=`number`&&typeof F!=`boolean`&&!F.isMatrix3&&!ArrayBuffer.isView(F)&&(P+=H.storage/Float32Array.BYTES_PER_ELEMENT)}}else g(T,v.__data,0);s.bufferSubData(s.UNIFORM_BUFFER,x,v.__data)}}function g(v,E,M){typeof v==`number`||typeof v==`boolean`?E[0]=v:v.isMatrix3?(E[0]=v.elements[0],E[1]=v.elements[1],E[2]=v.elements[2],E[3]=0,E[4]=v.elements[3],E[5]=v.elements[4],E[6]=v.elements[5],E[7]=0,E[8]=v.elements[6],E[9]=v.elements[7],E[10]=v.elements[8],E[11]=0):ArrayBuffer.isView(v)?E.set(new v.constructor(v.buffer,v.byteOffset,E.length)):v.toArray(E,M)}function y(v,E,M,w){let x=v.value,T=E+`_`+M;if(w[T]===void 0)return typeof x==`number`||typeof x==`boolean`?w[T]=x:ArrayBuffer.isView(x)?w[T]=x.slice():w[T]=x.clone(),!0;{let P=w[T];if(typeof x==`number`||typeof x==`boolean`){if(P!==x)return w[T]=x,!0}else{if(ArrayBuffer.isView(x))return!0;if(P.equals(x)===!1)return P.copy(x),!0}}return!1}function m(v){let E=v.uniforms,M=0,w=16;for(let T=0,P=E.length;T<P;T++){let I=Array.isArray(E[T])?E[T]:[E[T]];for(let F=0,H=I.length;F<H;F++){let U=I[F],z=Array.isArray(U.value)?U.value:[U.value];for(let J=0,W=z.length;J<W;J++){let re=z[J],Y=p(re),te=M%w,ie=te%Y.boundary,Ue=te+ie;M+=ie,Ue!==0&&w-Ue<Y.storage&&(M+=w-Ue),U.__data=new Float32Array(Y.storage/Float32Array.BYTES_PER_ELEMENT),U.__offset=M,M+=Y.storage}}}let x=M%w;return x>0&&(M+=w-x),v.__size=M,v.__cache={},this}function p(v){let E={boundary:0,storage:0};return typeof v==`number`||typeof v==`boolean`?(E.boundary=4,E.storage=4):v.isVector2?(E.boundary=8,E.storage=8):v.isVector3||v.isColor?(E.boundary=16,E.storage=12):v.isVector4?(E.boundary=16,E.storage=16):v.isMatrix3?(E.boundary=48,E.storage=48):v.isMatrix4?(E.boundary=64,E.storage=64):v.isTexture?Ne(`WebGLRenderer: Texture samplers can not be part of an uniforms group.`):ArrayBuffer.isView(v)?(E.boundary=16,E.storage=v.byteLength):Ne(`WebGLRenderer: Unsupported uniform value type.`,v),E}function S(v){let E=v.target;E.removeEventListener(`dispose`,S);let M=a.indexOf(E.__bindingPointIndex);a.splice(M,1),s.deleteBuffer(i[E.id]),delete i[E.id],delete r[E.id]}function C(){for(let v in i)s.deleteBuffer(i[v]);a=[],i={},r={}}return{bind:c,update:l,dispose:C}}var R_=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);var qn=null;function P_(){return qn===null&&(qn=new Ga(R_,16,16,Ci,Bn),qn.name=`DFG_LUT`,qn.minFilter=Gt,qn.magFilter=Gt,qn.wrapS=vn,qn.wrapT=vn,qn.generateMipmaps=!1,qn.needsUpdate=!0),qn}var il=class{constructor(e={}){let{canvas:t=Uu(),context:n=null,depth:i=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u=`default`,failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:h=!1,outputBufferType:f=cn}=e;this.isWebGLRenderer=!0;let g;if(n!==null){if(typeof WebGLRenderingContext<`u`&&n instanceof WebGLRenderingContext)throw new Error(`THREE.WebGLRenderer: WebGL 1 is not supported since r163.`);g=n.getContextAttributes().alpha}else g=a;let y=f,m=new Set([yo,xo,_o]),p=new Set([cn,Fn,Fs,Os,mo,go]),S=new Uint32Array(4),C=new Int32Array(4),v=new R,E=null,M=null,w=[],x=[],T=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Un,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let P=this,I=!1,F=null,H=null,U=null,z=null;this._outputColorSpace=It;let J=0,W=0,re=null,Y=-1,te=null,ie=new Et,Ue=new Et,De=null,mt=new Ae(0),et=0,it=t.width,q=t.height,ee=1,Ee=null,ke=null,ye=new Et(0,0,it,q),qe=new Et(0,0,it,q),Nt=!1,Ke=new Ts,nt=!1,gt=!1,$e=new ft,Mt=new R,kt=new Et,an={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Tt=!1;function Ct(){return re===null?ee:1}let N=n;function Xt(b,D){return t.getContext(b,D)}let ct,A,_,O,V,X,oe,le,j,Q,ce,Pe,fe,he,Ie,Fe,ze,L,ue,$,de,_e,ne;try{let b={alpha:!0,depth:i,stencil:r,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:d};if(`setAttribute`in t&&t.setAttribute(`data-engine`,`three.js r186`),t.addEventListener(`webglcontextlost`,_t,!1),t.addEventListener(`webglcontextrestored`,st,!1),t.addEventListener(`webglcontextcreationerror`,Tn,!1),N===null){let D=`webgl2`;if(N=Xt(D,b),N===null)throw Xt(D)?new Error(`THREE.WebGLRenderer: Error creating WebGL context with your selected attributes.`):new Error(`THREE.WebGLRenderer: Error creating WebGL context.`)}Le()}catch(b){throw t.removeEventListener(`webglcontextlost`,_t,!1),t.removeEventListener(`webglcontextrestored`,st,!1),t.removeEventListener(`webglcontextcreationerror`,Tn,!1),Oe(`WebGLRenderer: `+b.message),b}function Le(){ct=new Og(N),ct.init(),de=new M_(N,ct),A=new Ag(N,ct,e,de),_=new b_(N,ct),A.reversedDepthBuffer&&h&&_.buffers.depth.setReversed(!0),H=N.createFramebuffer(),U=N.createFramebuffer(),z=N.createFramebuffer(),O=new zg(N),V=new o_,X=new S_(N,ct,_,V,A,de,O),oe=new Fg(P),le=new Vf(N),_e=new Tg(N,le),j=new Bg(N,le,O,_e),Q=new Vg(N,j,le,_e,O),L=new Hg(N,A,X),Ie=new Cg(V),ce=new a_(P,oe,ct,A,_e,Ie),Pe=new A_(P,V),fe=new c_,he=new m_(ct),ze=new Eg(P,oe,_,Q,g,c),Fe=new v_(P,Q,A),ne=new C_(N,O,A,_),ue=new wg(N,ct,O),$=new kg(N,ct,O),O.programs=ce.programs,P.capabilities=A,P.extensions=ct,P.properties=V,P.renderLists=fe,P.shadowMap=Fe,P.state=_,P.info=O}y!==cn&&(T=new Wg(y,t.width,t.height,o,i,r));let Ce=new Gc(P,N);this.xr=Ce,this.getContext=function(){return N},this.getContextAttributes=function(){return N.getContextAttributes()},this.forceContextLoss=function(){let b=ct.get(`WEBGL_lose_context`);b&&b.loseContext()},this.forceContextRestore=function(){let b=ct.get(`WEBGL_lose_context`);b&&b.restoreContext()},this.getPixelRatio=function(){return ee},this.setPixelRatio=function(b){b!==void 0&&(ee=b,this.setSize(it,q,!1))},this.getSize=function(b){return b.set(it,q)},this.setSize=function(b,D,G=!0){if(Ce.isPresenting){Ne(`WebGLRenderer: Can't change size while VR device is presenting.`);return}it=b,q=D,t.width=Math.floor(b*ee),t.height=Math.floor(D*ee),G===!0&&(t.style.width=b+`px`,t.style.height=D+`px`),T!==null&&T.setSize(t.width,t.height),this.setViewport(0,0,b,D)},this.getDrawingBufferSize=function(b){return b.set(it*ee,q*ee).floor()},this.setDrawingBufferSize=function(b,D,G){it=b,q=D,ee=G,t.width=Math.floor(b*G),t.height=Math.floor(D*G),this.setViewport(0,0,b,D)},this.setEffects=function(b){if(y===cn){Oe(`WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.`);return}if(b){for(let D=0;D<b.length;D++)if(b[D].isOutputPass===!0){Ne(`WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.`);break}}T.setEffects(b||[])},this.getCurrentViewport=function(b){return b.copy(ie)},this.getViewport=function(b){return b.copy(ye)},this.setViewport=function(b,D,G,B){b.isVector4?ye.set(b.x,b.y,b.z,b.w):ye.set(b,D,G,B),_.viewport(ie.copy(ye).multiplyScalar(ee).round())},this.getScissor=function(b){return b.copy(qe)},this.setScissor=function(b,D,G,B){b.isVector4?qe.set(b.x,b.y,b.z,b.w):qe.set(b,D,G,B),_.scissor(Ue.copy(qe).multiplyScalar(ee).round())},this.getScissorTest=function(){return Nt},this.setScissorTest=function(b){_.setScissorTest(Nt=b)},this.setOpaqueSort=function(b){Ee=b},this.setTransparentSort=function(b){ke=b},this.getClearColor=function(b){return b.copy(ze.getClearColor())},this.setClearColor=function(){ze.setClearColor(...arguments)},this.getClearAlpha=function(){return ze.getClearAlpha()},this.setClearAlpha=function(){ze.setClearAlpha(...arguments)},this.clear=function(b=!0,D=!0,G=!0){let B=0;if(b){let k=!1;if(re!==null){let ge=re.texture.format;k=m.has(ge)}if(k){let ge=re.texture.type,ve=p.has(ge),me=ze.getClearColor(),Te=ze.getClearAlpha(),Re=me.r,Ge=me.g,Je=me.b;ve?(S[0]=Re,S[1]=Ge,S[2]=Je,S[3]=Te,N.clearBufferuiv(N.COLOR,0,S)):(C[0]=Re,C[1]=Ge,C[2]=Je,C[3]=Te,N.clearBufferiv(N.COLOR,0,C))}else B|=N.COLOR_BUFFER_BIT}D&&(B|=N.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),G&&(B|=N.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),B!==0&&N.clear(B)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(b){b.setRenderer(this),F=b},this.dispose=function(){t.removeEventListener(`webglcontextlost`,_t,!1),t.removeEventListener(`webglcontextrestored`,st,!1),t.removeEventListener(`webglcontextcreationerror`,Tn,!1),ze.dispose(),fe.dispose(),he.dispose(),V.dispose(),oe.dispose(),Q.dispose(),_e.dispose(),ne.dispose(),ce.dispose(),Ce.dispose(),Ce.removeEventListener(`sessionstart`,ih),Ce.removeEventListener(`sessionend`,sh),Pi.stop()};function _t(b){b.preventDefault(),ir(`WebGLRenderer: Context Lost.`),I=!0}function st(){ir(`WebGLRenderer: Context Restored.`),I=!1;let b=O.autoReset,D=Fe.enabled,G=Fe.autoUpdate,B=Fe.needsUpdate,k=Fe.type;Le(),O.autoReset=b,Fe.enabled=D,Fe.autoUpdate=G,Fe.needsUpdate=B,Fe.type=k}function Tn(b){Oe(`WebGLRenderer: A WebGL context could not be created. Reason: `,b.statusMessage)}function kn(b){let D=b.target;D.removeEventListener(`dispose`,kn),Od(D)}function Od(b){Bd(b),V.remove(b)}function Bd(b){let D=V.get(b).programs;D!==void 0&&(D.forEach(function(G){ce.releaseProgram(G)}),b.isShaderMaterial&&ce.releaseShaderCache(b))}this.renderBufferDirect=function(b,D,G,B,k,ge){D===null&&(D=an);let ve=k.isMesh&&k.matrixWorld.determinantAffine()<0,me=Hd(b,D,G,B,k);_.setMaterial(B,ve);let Te=G.index,Re=1;if(B.wireframe===!0){if(Te=j.getWireframeAttribute(G),Te===void 0)return;Re=2}let Ge=G.drawRange,Je=G.attributes.position,we=Ge.start*Re,rt=(Ge.start+Ge.count)*Re;ge!==null&&(we=Math.max(we,ge.start*Re),rt=Math.min(rt,(ge.start+ge.count)*Re)),Te!==null?(we=Math.max(we,0),rt=Math.min(rt,Te.count)):Je!=null&&(we=Math.max(we,0),rt=Math.min(rt,Je.count));let Rt=rt-we;if(Rt<0||Rt===1/0)return;_e.setup(k,B,me,G,Te);let bt,pt=ue;if(Te!==null&&(bt=le.get(Te),pt=$,pt.setIndex(bt)),k.isMesh)B.wireframe===!0?(_.setLineWidth(B.wireframeLinewidth*Ct()),pt.setMode(N.LINES)):pt.setMode(N.TRIANGLES);else if(k.isLine){let Yt=B.linewidth;Yt===void 0&&(Yt=1),_.setLineWidth(Yt*Ct()),k.isLineSegments?pt.setMode(N.LINES):k.isLineLoop?pt.setMode(N.LINE_LOOP):pt.setMode(N.LINE_STRIP)}else k.isPoints?pt.setMode(N.POINTS):k.isSprite&&pt.setMode(N.TRIANGLES);if(k.isBatchedMesh)if(ct.get(`WEBGL_multi_draw`))pt.renderMultiDraw(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount);else{let Yt=k._multiDrawStarts,xe=k._multiDrawCounts,$t=k._multiDrawCount,tt=Te?le.get(Te).bytesPerElement:1,_n=V.get(B).currentProgram.getUniforms();for(let zn=0;zn<$t;zn++)_n.setValue(N,`_gl_DrawID`,zn),pt.render(Yt[zn]/tt,xe[zn])}else if(k.isInstancedMesh)pt.renderInstances(we,Rt,k.count);else if(G.isInstancedBufferGeometry){let Yt=G._maxInstanceCount!==void 0?G._maxInstanceCount:1/0,xe=Math.min(G.instanceCount,Yt);pt.renderInstances(we,Rt,xe)}else pt.render(we,Rt)};function nh(b,D,G,B){F!==null&&b.isNodeMaterial&&F.setObject(B,b),nt===!0&&Ie.setState(b,G,!1),b.transparent===!0&&b.side===Xn&&b.forceSinglePass===!1?(b.side=rn,b.needsUpdate=!0,qr(b,D,B),b.side=Wn,b.needsUpdate=!0,qr(b,D,B),b.side=Xn):qr(b,D,B)}this.compile=function(b,D,G=null){G===null&&(G=b),F!==null&&F.renderStart(b,D,G),M=he.get(G),M.init(D),x.push(M),G.traverseVisible(function(k){k.isLight&&k.layers.test(D.layers)&&(M.pushLight(k),k.castShadow&&M.pushShadow(k))}),b!==G&&b.traverseVisible(function(k){k.isLight&&k.layers.test(D.layers)&&(M.pushLight(k),k.castShadow&&M.pushShadow(k))}),M.setupLights(),F!==null&&F.updateLights(M.state.lightsArray),gt=this.localClippingEnabled,nt=Ie.init(this.clippingPlanes,gt),nt===!0&&Ie.setGlobalState(this.clippingPlanes,D),F!==null&&Fe.render(M.state.shadowsArray,G,D);let B=new Set;return b.traverse(function(k){if(!(k.isMesh||k.isPoints||k.isLine||k.isSprite))return;let ge=k.material;if(ge)if(Array.isArray(ge))for(let ve=0;ve<ge.length;ve++){let me=ge[ve];nh(me,G,D,k),B.add(me)}else nh(ge,G,D,k),B.add(ge)}),M=x.pop(),F!==null&&F.renderEnd(),B},this.compileAsync=function(b,D,G=null){let B=this.compile(b,D,G);return new Promise(k=>{function ge(){if(B.forEach(function(ve){let Te=V.get(ve).currentProgram;(Te===void 0||Te.isReady())&&B.delete(ve)}),B.size===0){k(b);return}setTimeout(ge,10)}ct.get(`KHR_parallel_shader_compile`)!==null?ge():setTimeout(ge,10)})};let pl=null;function kd(b){pl&&pl(b)}function ih(){Pi.stop()}function sh(){Pi.start()}let Pi=new hd;Pi.setAnimationLoop(kd),typeof self<`u`&&Pi.setContext(self),this.setAnimationLoop=function(b){pl=b,Ce.setAnimationLoop(b),b===null?Pi.stop():Pi.start()},Ce.addEventListener(`sessionstart`,ih),Ce.addEventListener(`sessionend`,sh),this.render=function(b,D){if(D!==void 0&&D.isCamera!==!0){Oe(`WebGLRenderer.render: camera is not an instance of THREE.Camera.`);return}if(I===!0)return;F!==null&&F.renderStart(b,D);let G=Ce.enabled===!0&&Ce.isPresenting===!0,B=T!==null&&(re===null||G)&&T.begin(P,re);if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),D.parent===null&&D.matrixWorldAutoUpdate===!0&&D.updateMatrixWorld(),Ce.enabled===!0&&Ce.isPresenting===!0&&(T===null||T.isCompositing()===!1)&&(Ce.cameraAutoUpdate===!0&&Ce.updateCamera(D),D=Ce.getCamera()),b.isScene===!0&&b.onBeforeRender(P,b,D,re),M=he.get(b,x.length),M.init(D),M.state.textureUnits=X.getTextureUnits(),x.push(M),$e.multiplyMatrices(D.projectionMatrix,D.matrixWorldInverse),Ke.setFromProjectionMatrix($e,In,D.reversedDepth),gt=this.localClippingEnabled,nt=Ie.init(this.clippingPlanes,gt),E=fe.get(b,w.length),E.init(),w.push(E),Ce.enabled===!0&&Ce.isPresenting===!0){let ve=P.xr.getDepthSensingMesh();ve!==null&&ml(ve,D,-1/0,P.sortObjects)}ml(b,D,0,P.sortObjects),E.finish(),F!==null&&F.updateLights(M.state.lightsArray),P.sortObjects===!0&&E.sort(Ee,ke),Tt=Ce.enabled===!1||Ce.isPresenting===!1||Ce.hasDepthSensing()===!1,Tt&&ze.addToRenderList(E,b),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),nt===!0&&Ie.beginShadows();let k=M.state.shadowsArray;if(Fe.render(k,b,D),nt===!0&&Ie.endShadows(),(B&&T.hasRenderPass())===!1){let ve=E.opaque,me=E.transmissive;if(M.setupLights(),D.isArrayCamera){let Te=D.cameras;if(me.length>0)for(let Re=0,Ge=Te.length;Re<Ge;Re++){let Je=Te[Re];ah(ve,me,b,Je)}Tt&&ze.render(b);for(let Re=0,Ge=Te.length;Re<Ge;Re++){let Je=Te[Re];rh(E,b,Je,Je.viewport)}}else me.length>0&&ah(ve,me,b,D),Tt&&ze.render(b),rh(E,b,D)}re!==null&&W===0&&(X.updateMultisampleRenderTarget(re),X.updateRenderTargetMipmap(re)),B&&T.end(P),b.isScene===!0&&b.onAfterRender(P,b,D),_e.resetDefaultState(),Y=-1,te=null,x.pop(),x.length>0?(M=x[x.length-1],X.setTextureUnits(M.state.textureUnits),nt===!0&&Ie.setGlobalState(P.clippingPlanes,M.state.camera)):M=null,w.pop(),w.length>0?E=w[w.length-1]:E=null,F!==null&&F.renderEnd()};function ml(b,D,G,B){if(b.visible===!1)return;if(b.layers.test(D.layers)){if(b.isGroup)G=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(D);else if(b.isLightProbeGrid)M.pushLightProbeGrid(b);else if(b.isLight)M.pushLight(b),b.castShadow&&M.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||b.intersectsFrustum(Ke)){B&&kt.setFromMatrixPosition(b.matrixWorld).applyMatrix4($e);let ve=Q.update(b),me=b.material;me.visible&&E.push(b,ve,me,G,kt.z,null,D)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||b.intersectsFrustum(Ke))){let ve=Q.update(b),me=b.material;if(B&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),kt.copy(b.boundingSphere.center)):(ve.boundingSphere===null&&ve.computeBoundingSphere(),kt.copy(ve.boundingSphere.center)),kt.applyMatrix4(b.matrixWorld).applyMatrix4($e)),Array.isArray(me)){let Te=ve.groups;for(let Re=0,Ge=Te.length;Re<Ge;Re++){let Je=Te[Re],we=me[Je.materialIndex];we&&we.visible&&E.push(b,ve,we,G,kt.z,Je,D)}}else me.visible&&E.push(b,ve,me,G,kt.z,null,D)}}let ge=b.children;for(let ve=0,me=ge.length;ve<me;ve++)ml(ge[ve],D,G,B)}function rh(b,D,G,B){let{opaque:k,transmissive:ge,transparent:ve}=b;M.setupLightsView(G),nt===!0&&Ie.setGlobalState(P.clippingPlanes,G),B&&_.viewport(ie.copy(B)),k.length>0&&Yr(k,D,G),ge.length>0&&Yr(ge,D,G),ve.length>0&&Yr(ve,D,G),_.buffers.depth.setTest(!0),_.buffers.depth.setMask(!0),_.buffers.color.setMask(!0),_.setPolygonOffset(!1)}function ah(b,D,G,B){if((G.isScene===!0?G.overrideMaterial:null)!==null)return;if(M.state.transmissionRenderTarget[B.id]===void 0){let we=ct.has(`EXT_color_buffer_half_float`)||ct.has(`EXT_color_buffer_float`);M.state.transmissionRenderTarget[B.id]=new ln(1,1,{generateMipmaps:!0,type:we?Bn:cn,minFilter:wi,samples:Math.max(4,A.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:We.workingColorSpace})}let ge=M.state.transmissionRenderTarget[B.id],ve=B.viewport||ie;ge.setSize(ve.z*P.transmissionResolutionScale,ve.w*P.transmissionResolutionScale);let me=P.getRenderTarget(),Te=P.getActiveCubeFace(),Re=P.getActiveMipmapLevel();P.setRenderTarget(ge),P.getClearColor(mt),et=P.getClearAlpha(),et<1&&P.setClearColor(16777215,.5),P.clear(),Tt&&ze.render(G);let Ge=P.toneMapping;P.toneMapping=Un;let Je=B.viewport;if(B.viewport!==void 0&&(B.viewport=void 0),M.setupLightsView(B),nt===!0&&Ie.setGlobalState(P.clippingPlanes,B),Yr(b,G,B),X.updateMultisampleRenderTarget(ge),X.updateRenderTargetMipmap(ge),ct.has(`WEBGL_multisampled_render_to_texture`)===!1){let we=!1;for(let rt=0,Rt=D.length;rt<Rt;rt++){let{object:pt,geometry:Yt,material:xe,group:$t}=D[rt];if(xe.side===Xn&&pt.layers.test(B.layers)){let tt=xe.side;xe.side=rn,xe.needsUpdate=!0,oh(pt,G,B,Yt,xe,$t),xe.side=tt,xe.needsUpdate=!0,we=!0}}we===!0&&(X.updateMultisampleRenderTarget(ge),X.updateRenderTargetMipmap(ge))}P.setRenderTarget(me,Te,Re),P.setClearColor(mt,et),Je!==void 0&&(B.viewport=Je),P.toneMapping=Ge}function Yr(b,D,G){let B=D.isScene===!0?D.overrideMaterial:null;for(let k=0,ge=b.length;k<ge;k++){let ve=b[k],{object:me,geometry:Te,group:Re}=ve,Ge=ve.material;Ge.allowOverride===!0&&B!==null&&(Ge=B),me.layers.test(G.layers)&&oh(me,D,G,Te,Ge,Re)}}function oh(b,D,G,B,k,ge){F!==null&&k.isNodeMaterial&&F.setObject(b,k),b.onBeforeRender(P,D,G,B,k,ge),b.modelViewMatrix.multiplyMatrices(G.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),k.onBeforeRender(P,D,G,B,b,ge),k.transparent===!0&&k.side===Xn&&k.forceSinglePass===!1?(k.side=rn,k.needsUpdate=!0,P.renderBufferDirect(G,D,B,k,b,ge),k.side=Wn,k.needsUpdate=!0,P.renderBufferDirect(G,D,B,k,b,ge),k.side=Xn):P.renderBufferDirect(G,D,B,k,b,ge),b.onAfterRender(P,D,G,B,k,ge)}function qr(b,D,G){D.isScene!==!0&&(D=an);let B=V.get(b),k=M.state.lights,ge=M.state.shadowsArray,ve=k.state.version,me=ce.getParameters(b,k.state,ge,D,G,M.state.lightProbeGridArray),Te=ce.getProgramCacheKey(me),Re=B.programs;B.environment=b.isMeshStandardMaterial||b.isMeshLambertMaterial||b.isMeshPhongMaterial?D.environment:null,B.fog=D.fog;let Ge=b.isMeshStandardMaterial||b.isMeshLambertMaterial&&!b.envMap||b.isMeshPhongMaterial&&!b.envMap;B.envMap=oe.get(b.envMap||B.environment,Ge),B.envMapRotation=B.environment!==null&&b.envMap===null?D.environmentRotation:b.envMapRotation,Re===void 0&&(b.addEventListener(`dispose`,kn),Re=new Map,B.programs=Re);let Je=Re.get(Te);if(Je!==void 0){if(B.currentProgram===Je&&B.lightsStateVersion===ve)return ch(b,me),Je}else me.uniforms=ce.getUniforms(b),F!==null&&b.isNodeMaterial&&F.build(b,G,me),b.onBeforeCompile(me,P),Je=ce.acquireProgram(me,Te),Re.set(Te,Je),B.uniforms=me.uniforms;let we=B.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(we.clippingPlanes=Ie.uniform),ch(b,me),B.needsLights=Gd(b),B.lightsStateVersion=ve,B.needsLights&&(we.ambientLightColor.value=k.state.ambient,we.lightProbe.value=k.state.probe,we.sunLights.value=k.state.sun,we.sunLightShadows.value=k.state.sunShadow,we.directionalLights.value=k.state.directional,we.directionalLightShadows.value=k.state.directionalShadow,we.spotLights.value=k.state.spot,we.spotLightShadows.value=k.state.spotShadow,we.rectAreaLights.value=k.state.rectArea,we.ltc_1.value=k.state.rectAreaLTC1,we.ltc_2.value=k.state.rectAreaLTC2,we.pointLights.value=k.state.point,we.pointLightShadows.value=k.state.pointShadow,we.hemisphereLights.value=k.state.hemi,we.sunShadowMatrix.value=k.state.sunShadowMatrix,we.sunShadowCascade.value=k.state.sunShadowCascade,we.directionalShadowMatrix.value=k.state.directionalShadowMatrix,we.spotLightMatrix.value=k.state.spotLightMatrix,we.spotLightMap.value=k.state.spotLightMap,we.pointShadowMatrix.value=k.state.pointShadowMatrix),B.lightProbeGrid=M.state.lightProbeGridArray.length>0,B.currentProgram=Je,B.uniformsList=null,Je}function lh(b){if(b.uniformsList===null){let D=b.currentProgram.getUniforms();b.uniformsList=zs.seqWithValue(D.seq,b.uniforms)}return b.uniformsList}function ch(b,D){let G=V.get(b);G.outputColorSpace=D.outputColorSpace,G.batching=D.batching,G.batchingColor=D.batchingColor,G.instancing=D.instancing,G.instancingColor=D.instancingColor,G.instancingMorph=D.instancingMorph,G.skinning=D.skinning,G.morphTargets=D.morphTargets,G.morphNormals=D.morphNormals,G.morphColors=D.morphColors,G.morphTargetsCount=D.morphTargetsCount,G.numClippingPlanes=D.numClippingPlanes,G.numIntersection=D.numClipIntersection,G.vertexAlphas=D.vertexAlphas,G.vertexTangents=D.vertexTangents,G.toneMapping=D.toneMapping}function zd(b,D){if(b.length===0)return null;if(b.length===1)return b[0].texture!==null?b[0]:null;v.setFromMatrixPosition(D.matrixWorld);for(let G=0,B=b.length;G<B;G++){let k=b[G];if(k.texture!==null&&k.boundingBox.containsPoint(v))return k}return null}function Hd(b,D,G,B,k){D.isScene!==!0&&(D=an),X.resetTextureUnits();let ge=D.fog,ve=B.isMeshStandardMaterial||B.isMeshLambertMaterial||B.isMeshPhongMaterial?D.environment:null,me=re===null?P.outputColorSpace:re.isXRRenderTarget===!0?re.texture.colorSpace:We.workingColorSpace,Te=B.isMeshStandardMaterial||B.isMeshLambertMaterial&&!B.envMap||B.isMeshPhongMaterial&&!B.envMap,Re=oe.get(B.envMap||ve,Te),Ge=B.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,Je=!!G.attributes.tangent&&(!!B.normalMap||B.anisotropy>0),we=!!G.morphAttributes.position,rt=!!G.morphAttributes.normal,Rt=!!G.morphAttributes.color,bt=Un;B.toneMapped&&(re===null||re.isXRRenderTarget===!0)&&(bt=P.toneMapping);let pt=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,Yt=pt!==void 0?pt.length:0,xe=V.get(B),$t=M.state.lights;if(nt===!0&&(gt===!0||b!==te)){let xt=b===te&&B.id===Y;Ie.setState(B,b,xt)}let tt=!1;B.version===xe.__version?(xe.needsLights&&xe.lightsStateVersion!==$t.state.version||xe.outputColorSpace!==me||k.isBatchedMesh&&xe.batching===!1||!k.isBatchedMesh&&xe.batching===!0||k.isBatchedMesh&&xe.batchingColor===!0&&k._colorsTexture===null||k.isBatchedMesh&&xe.batchingColor===!1&&k._colorsTexture!==null||k.isInstancedMesh&&xe.instancing===!1||!k.isInstancedMesh&&xe.instancing===!0||k.isSkinnedMesh&&xe.skinning===!1||!k.isSkinnedMesh&&xe.skinning===!0||k.isInstancedMesh&&xe.instancingColor===!0&&k.instanceColor===null||k.isInstancedMesh&&xe.instancingColor===!1&&k.instanceColor!==null||k.isInstancedMesh&&xe.instancingMorph===!0&&k.morphTexture===null||k.isInstancedMesh&&xe.instancingMorph===!1&&k.morphTexture!==null||xe.envMap!==Re||B.fog===!0&&xe.fog!==ge||xe.numClippingPlanes!==void 0&&(xe.numClippingPlanes!==Ie.numPlanes||xe.numIntersection!==Ie.numIntersection)||xe.vertexAlphas!==Ge||xe.vertexTangents!==Je||xe.morphTargets!==we||xe.morphNormals!==rt||xe.morphColors!==Rt||xe.toneMapping!==bt||xe.morphTargetsCount!==Yt||!!xe.lightProbeGrid!=M.state.lightProbeGridArray.length>0)&&(tt=!0):(tt=!0,xe.__version=B.version);let _n=xe.currentProgram;tt===!0&&(_n=qr(B,D,k),F&&B.isNodeMaterial&&F.onUpdateProgram(B,_n,xe));let zn=!1,ci=!1,ji=!1,dt=_n.getUniforms(),At=xe.uniforms;if(_.useProgram(_n.program)&&(zn=!0,ci=!0,ji=!0),B.id!==Y&&(Y=B.id,ci=!0),xe.needsLights){let xt=zd(M.state.lightProbeGridArray,k);xe.lightProbeGrid!==xt&&(xe.lightProbeGrid=xt,ci=!0)}if(zn||te!==b){_.buffers.depth.getReversed()&&b.reversedDepth!==!0&&(b._reversedDepth=!0,b.updateProjectionMatrix()),dt.setValue(N,`projectionMatrix`,b.projectionMatrix),dt.setValue(N,`viewMatrix`,b.matrixWorldInverse);let ui=dt.map.cameraPosition;ui!==void 0&&ui.setValue(N,Mt.setFromMatrixPosition(b.matrixWorld)),A.logarithmicDepthBuffer&&dt.setValue(N,`logDepthBufFC`,2/(Math.log(b.far+1)/Math.LN2)),(B.isMeshPhongMaterial||B.isMeshToonMaterial||B.isMeshLambertMaterial||B.isMeshBasicMaterial||B.isMeshStandardMaterial||B.isShaderMaterial)&&dt.setValue(N,`isOrthographic`,b.isOrthographicCamera===!0),te!==b&&(te=b,ci=!0,ji=!0)}if(xe.needsLights&&($t.state.sunShadowMap.length>0&&dt.setValue(N,`sunShadowMap`,$t.state.sunShadowMap,X),$t.state.directionalShadowMap.length>0&&dt.setValue(N,`directionalShadowMap`,$t.state.directionalShadowMap,X),$t.state.spotShadowMap.length>0&&dt.setValue(N,`spotShadowMap`,$t.state.spotShadowMap,X),$t.state.pointShadowMap.length>0&&dt.setValue(N,`pointShadowMap`,$t.state.pointShadowMap,X)),k.isSkinnedMesh){dt.setOptional(N,k,`bindMatrix`),dt.setOptional(N,k,`bindMatrixInverse`);let xt=k.skeleton;xt&&(xt.boneTexture===null&&xt.computeBoneTexture(),dt.setValue(N,`boneTexture`,xt.boneTexture,X))}k.isBatchedMesh&&(dt.setOptional(N,k,`batchingTexture`),dt.setValue(N,`batchingTexture`,k._matricesTexture,X),dt.setOptional(N,k,`batchingIdTexture`),dt.setValue(N,`batchingIdTexture`,k._indirectTexture,X),dt.setOptional(N,k,`batchingColorTexture`),k._colorsTexture!==null&&dt.setValue(N,`batchingColorTexture`,k._colorsTexture,X));let hi=G.morphAttributes;if((hi.position!==void 0||hi.normal!==void 0||hi.color!==void 0)&&L.update(k,G,_n),(ci||xe.receiveShadow!==k.receiveShadow)&&(xe.receiveShadow=k.receiveShadow,dt.setValue(N,`receiveShadow`,k.receiveShadow)),(B.isMeshStandardMaterial||B.isMeshLambertMaterial||B.isMeshPhongMaterial)&&B.envMap===null&&D.environment!==null&&(At.envMapIntensity.value=D.environmentIntensity),At.dfgLUT!==void 0&&(At.dfgLUT.value=P_()),ci){if(dt.setValue(N,`toneMappingExposure`,P.toneMappingExposure),xe.needsLights&&Vd(At,ji),ge&&B.fog===!0&&Pe.refreshFogUniforms(At,ge),Pe.refreshMaterialUniforms(At,B,ee,q,M.state.transmissionRenderTarget[b.id]),xe.needsLights&&xe.lightProbeGrid){let xt=xe.lightProbeGrid;At.probesSH.value=xt.texture,At.probesMin.value.copy(xt.boundingBox.min),At.probesMax.value.copy(xt.boundingBox.max),At.probesResolution.value.copy(xt.resolution)}zs.upload(N,lh(xe),At,X)}if(B.isShaderMaterial&&B.uniformsNeedUpdate===!0&&(zs.upload(N,lh(xe),At,X),B.uniformsNeedUpdate=!1),B.isSpriteMaterial&&dt.setValue(N,`center`,k.center),dt.setValue(N,`modelViewMatrix`,k.modelViewMatrix),dt.setValue(N,`normalMatrix`,k.normalMatrix),dt.setValue(N,`modelMatrix`,k.matrixWorld),B.uniformsGroups!==void 0){let xt=B.uniformsGroups;for(let ui=0,Zi=xt.length;ui<Zi;ui++){let uh=xt[ui];ne.update(uh,_n),ne.bind(uh,_n)}}return _n}function Vd(b,D){b.ambientLightColor.needsUpdate=D,b.lightProbe.needsUpdate=D,b.sunLights.needsUpdate=D,b.sunLightShadows.needsUpdate=D,b.directionalLights.needsUpdate=D,b.directionalLightShadows.needsUpdate=D,b.pointLights.needsUpdate=D,b.pointLightShadows.needsUpdate=D,b.spotLights.needsUpdate=D,b.spotLightShadows.needsUpdate=D,b.rectAreaLights.needsUpdate=D,b.hemisphereLights.needsUpdate=D}function Gd(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return J},this.getActiveMipmapLevel=function(){return W},this.getRenderTarget=function(){return re},this.setRenderTargetTextures=function(b,D,G){let B=V.get(b);B.__autoAllocateDepthBuffer=b.resolveDepthBuffer===!1,B.__autoAllocateDepthBuffer===!1&&(B.__useRenderToTexture=!1),V.get(b.texture).__webglTexture=D,V.get(b.depthTexture).__webglTexture=B.__autoAllocateDepthBuffer?void 0:G,B.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(b,D){let G=V.get(b);G.__webglFramebuffer=D,G.__useDefaultFramebuffer=D===void 0},this.setRenderTarget=function(b,D=0,G=0){re=b,J=D,W=G;let B=null,k=!1,ge=!1;if(b){let me=V.get(b);if(me.__useDefaultFramebuffer!==void 0){_.bindFramebuffer(N.FRAMEBUFFER,me.__webglFramebuffer),ie.copy(b.viewport),Ue.copy(b.scissor),De=b.scissorTest,_.viewport(ie),_.scissor(Ue),_.setScissorTest(De),Y=-1;return}else if(me.__webglFramebuffer===void 0)X.setupRenderTarget(b);else if(me.__hasExternalTextures)X.rebindTextures(b,V.get(b.texture).__webglTexture,V.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){let Ge=b.depthTexture;if(me.__boundDepthTexture!==Ge){if(Ge!==null&&V.has(Ge)&&(b.width!==Ge.image.width||b.height!==Ge.image.height))throw new Error(`THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.`);X.setupDepthRenderbuffer(b)}}let Te=b.texture;(Te.isData3DTexture||Te.isDataArrayTexture||Te.isCompressedArrayTexture)&&(ge=!0);let Re=V.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(Re[D])?B=Re[D][G]:B=Re[D],k=!0):b.samples>0&&X.useMultisampledRTT(b)===!1?B=V.get(b).__webglMultisampledFramebuffer:Array.isArray(Re)?B=Re[G]:B=Re,ie.copy(b.viewport),Ue.copy(b.scissor),De=b.scissorTest}else ie.copy(ye).multiplyScalar(ee).floor(),Ue.copy(qe).multiplyScalar(ee).floor(),De=Nt;if(G!==0&&(B=H),_.bindFramebuffer(N.FRAMEBUFFER,B)&&_.drawBuffers(b,B),_.viewport(ie),_.scissor(Ue),_.setScissorTest(De),k){let me=V.get(b.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_CUBE_MAP_POSITIVE_X+D,me.__webglTexture,G)}else if(ge){let me=D;for(let Te=0;Te<b.textures.length;Te++){let Re=V.get(b.textures[Te]);N.framebufferTextureLayer(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0+Te,Re.__webglTexture,G,me)}}else if(b!==null&&G!==0){let me=V.get(b.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,me.__webglTexture,G)}Y=-1};function hh(b){let D=V.get(b);return(D.__readFormat!==b.format||D.__readType!==b.type)&&(D.__readFormat=b.format,D.__readType=b.type,D.__formatReadable=A.textureFormatReadable(b.format),D.__typeReadable=A.textureTypeReadable(b.type)),D}this.readRenderTargetPixels=function(b,D,G,B,k,ge,ve,me=0){if(!(b&&b.isWebGLRenderTarget)){Oe(`WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.`);return}let Te=V.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&ve!==void 0&&(Te=Te[ve]),Te){_.bindFramebuffer(N.FRAMEBUFFER,Te);try{let Re=b.textures[me],Ge=Re.format,Je=Re.type;b.textures.length>1&&N.readBuffer(N.COLOR_ATTACHMENT0+me);let we=hh(Re);if(we.__formatReadable===!1){Oe(`WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.`);return}if(we.__typeReadable===!1){Oe(`WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.`);return}D>=0&&D<=b.width-B&&G>=0&&G<=b.height-k&&N.readPixels(D,G,B,k,de.convert(Ge),de.convert(Je),ge)}finally{let Re=re!==null?V.get(re).__webglFramebuffer:null;_.bindFramebuffer(N.FRAMEBUFFER,Re)}}},this.readRenderTargetPixelsAsync=async function(b,D,G,B,k,ge,ve,me=0){if(!(b&&b.isWebGLRenderTarget))throw new Error(`THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.`);let Te=V.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&ve!==void 0&&(Te=Te[ve]),Te)if(D>=0&&D<=b.width-B&&G>=0&&G<=b.height-k){_.bindFramebuffer(N.FRAMEBUFFER,Te);let Re=b.textures[me],Ge=Re.format,Je=Re.type;b.textures.length>1&&N.readBuffer(N.COLOR_ATTACHMENT0+me);let we=hh(Re);if(we.__formatReadable===!1)throw new Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.`);if(we.__typeReadable===!1)throw new Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.`);let rt=N.createBuffer();N.bindBuffer(N.PIXEL_PACK_BUFFER,rt),N.bufferData(N.PIXEL_PACK_BUFFER,ge.byteLength,N.STREAM_READ),N.readPixels(D,G,B,k,de.convert(Ge),de.convert(Je),0),N.bindBuffer(N.PIXEL_PACK_BUFFER,null);let Rt=re!==null?V.get(re).__webglFramebuffer:null;_.bindFramebuffer(N.FRAMEBUFFER,Rt);let bt=N.fenceSync(N.SYNC_GPU_COMMANDS_COMPLETE,0);return N.flush(),await Ou(N,bt,4),N.bindBuffer(N.PIXEL_PACK_BUFFER,rt),N.getBufferSubData(N.PIXEL_PACK_BUFFER,0,ge),N.bindBuffer(N.PIXEL_PACK_BUFFER,null),N.deleteBuffer(rt),N.deleteSync(bt),ge}else throw new Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.`)},this.copyFramebufferToTexture=function(b,D=null,G=0){let B=Math.pow(2,-G),k=Math.floor(b.image.width*B),ge=Math.floor(b.image.height*B),ve=D!==null?D.x:0,me=D!==null?D.y:0;X.setTexture2D(b,0),N.copyTexSubImage2D(N.TEXTURE_2D,G,0,0,ve,me,k,ge),_.unbindTexture()},this.copyTextureToTexture=function(b,D,G=null,B=null,k=0,ge=0){let ve,me,Te,Re,Ge,Je,we,rt,Rt,bt=b.isCompressedTexture?b.mipmaps[ge]:b.image;if(G!==null)ve=G.max.x-G.min.x,me=G.max.y-G.min.y,Te=G.isBox3?G.max.z-G.min.z:1,Re=G.min.x,Ge=G.min.y,Je=G.isBox3?G.min.z:0;else{let At=Math.pow(2,-k);ve=Math.floor(bt.width*At),me=Math.floor(bt.height*At),b.isDataArrayTexture?Te=bt.depth:b.isData3DTexture?Te=Math.floor(bt.depth*At):Te=1,Re=0,Ge=0,Je=0}B!==null?(we=B.x,rt=B.y,Rt=B.z):(we=0,rt=0,Rt=0);let pt=de.convert(D.format),Yt=de.convert(D.type),xe;D.isData3DTexture?(X.setTexture3D(D,0),xe=N.TEXTURE_3D):D.isDataArrayTexture||D.isCompressedArrayTexture?(X.setTexture2DArray(D,0),xe=N.TEXTURE_2D_ARRAY):(X.setTexture2D(D,0),xe=N.TEXTURE_2D),_.activeTexture(N.TEXTURE0),_.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,D.flipY),_.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,D.premultiplyAlpha),_.pixelStorei(N.UNPACK_ALIGNMENT,D.unpackAlignment);let $t=_.getParameter(N.UNPACK_ROW_LENGTH),tt=_.getParameter(N.UNPACK_IMAGE_HEIGHT),_n=_.getParameter(N.UNPACK_SKIP_PIXELS),zn=_.getParameter(N.UNPACK_SKIP_ROWS),ci=_.getParameter(N.UNPACK_SKIP_IMAGES);_.pixelStorei(N.UNPACK_ROW_LENGTH,bt.width),_.pixelStorei(N.UNPACK_IMAGE_HEIGHT,bt.height),_.pixelStorei(N.UNPACK_SKIP_PIXELS,Re),_.pixelStorei(N.UNPACK_SKIP_ROWS,Ge),_.pixelStorei(N.UNPACK_SKIP_IMAGES,Je);let ji=b.isDataArrayTexture||b.isData3DTexture,dt=D.isDataArrayTexture||D.isData3DTexture;if(b.isDepthTexture){let At=V.get(b),hi=V.get(D),xt=V.get(At.__renderTarget),ui=V.get(hi.__renderTarget);_.bindFramebuffer(N.READ_FRAMEBUFFER,xt.__webglFramebuffer),_.bindFramebuffer(N.DRAW_FRAMEBUFFER,ui.__webglFramebuffer);for(let Zi=0;Zi<Te;Zi++)ji&&(N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,V.get(b).__webglTexture,k,Je+Zi),N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,V.get(D).__webglTexture,ge,Rt+Zi)),N.blitFramebuffer(Re,Ge,ve,me,we,rt,ve,me,N.DEPTH_BUFFER_BIT,N.NEAREST);_.bindFramebuffer(N.READ_FRAMEBUFFER,null),_.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else if(k!==0||b.isRenderTargetTexture||V.has(b)){let At=V.get(b),hi=V.get(D);_.bindFramebuffer(N.READ_FRAMEBUFFER,U),_.bindFramebuffer(N.DRAW_FRAMEBUFFER,z);for(let xt=0;xt<Te;xt++)ji?N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,At.__webglTexture,k,Je+xt):N.framebufferTexture2D(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,At.__webglTexture,k),dt?N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,hi.__webglTexture,ge,Rt+xt):N.framebufferTexture2D(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,hi.__webglTexture,ge),k!==0?N.blitFramebuffer(Re,Ge,ve,me,we,rt,ve,me,N.COLOR_BUFFER_BIT,N.NEAREST):dt?N.copyTexSubImage3D(xe,ge,we,rt,Rt+xt,Re,Ge,ve,me):N.copyTexSubImage2D(xe,ge,we,rt,Re,Ge,ve,me);_.bindFramebuffer(N.READ_FRAMEBUFFER,null),_.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else dt?b.isDataTexture||b.isData3DTexture?N.texSubImage3D(xe,ge,we,rt,Rt,ve,me,Te,pt,Yt,bt.data):D.isCompressedArrayTexture?N.compressedTexSubImage3D(xe,ge,we,rt,Rt,ve,me,Te,pt,bt.data):N.texSubImage3D(xe,ge,we,rt,Rt,ve,me,Te,pt,Yt,bt):b.isDataTexture?N.texSubImage2D(N.TEXTURE_2D,ge,we,rt,ve,me,pt,Yt,bt.data):b.isCompressedTexture?N.compressedTexSubImage2D(N.TEXTURE_2D,ge,we,rt,bt.width,bt.height,pt,bt.data):N.texSubImage2D(N.TEXTURE_2D,ge,we,rt,ve,me,pt,Yt,bt);_.pixelStorei(N.UNPACK_ROW_LENGTH,$t),_.pixelStorei(N.UNPACK_IMAGE_HEIGHT,tt),_.pixelStorei(N.UNPACK_SKIP_PIXELS,_n),_.pixelStorei(N.UNPACK_SKIP_ROWS,zn),_.pixelStorei(N.UNPACK_SKIP_IMAGES,ci),ge===0&&D.generateMipmaps&&N.generateMipmap(xe),_.unbindTexture()},this.initRenderTarget=function(b){V.get(b).__webglFramebuffer===void 0&&X.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?X.setTextureCube(b,0):b.isData3DTexture?X.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?X.setTexture2DArray(b,0):X.setTexture2D(b,0),_.unbindTexture()},this.resetState=function(){J=0,W=0,re=null,_.reset(),_e.reset()},typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`observe`,{detail:this}))}get coordinateSystem(){return In}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=We._getDrawingBufferColorSpace(e),t.unpackColorSpace=We._getUnpackColorSpace()}};var _d={type:`change`};var Xc={type:`start`};var yd={type:`end`};var al=new si;var xd=new en;var D_=Math.cos(70*wt.DEG2RAD);var Bt=new R;var hn=2*Math.PI;var ut={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};var Wc=1e-6;var ol=class extends Rr{constructor(e,t=null){super(e,t),this.state=ut.NONE,this.target=new R,this.cursor=new R,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:`ArrowLeft`,UP:`ArrowUp`,RIGHT:`ArrowRight`,BOTTOM:`ArrowDown`},this.mouseButtons={LEFT:Gn.ROTATE,MIDDLE:Gn.DOLLY,RIGHT:Gn.PAN},this.touches={ONE:Ei.ROTATE,TWO:Ei.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle=`auto`,this._domElementKeyEvents=null,this._lastPosition=new R,this._lastQuaternion=new Wt,this._lastTargetPosition=new R,this._quat=new Wt().setFromUnitVectors(e.up,new R(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new ai,this._sphericalDelta=new ai,this._scale=1,this._panOffset=new R,this._rotateStart=new Se,this._rotateEnd=new Se,this._rotateDelta=new Se,this._panStart=new Se,this._panEnd=new Se,this._panDelta=new Se,this._dollyStart=new Se,this._dollyEnd=new Se,this._dollyDelta=new Se,this._dollyDirection=new R,this._mouse=new Se,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=N_.bind(this),this._onPointerDown=L_.bind(this),this._onPointerUp=U_.bind(this),this._onContextMenu=V_.bind(this),this._onMouseWheel=B_.bind(this),this._onKeyDown=k_.bind(this),this._onTouchStart=z_.bind(this),this._onTouchMove=H_.bind(this),this._onMouseDown=F_.bind(this),this._onMouseMove=O_.bind(this),this._interceptControlDown=G_.bind(this),this._interceptControlUp=W_.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}set cursorStyle(e){this._cursorStyle=e,e===`grab`?this.domElement.style.cursor=`grab`:this.domElement.style.cursor=`auto`}get cursorStyle(){return this._cursorStyle}connect(e){super.connect(e),this.domElement.addEventListener(`pointerdown`,this._onPointerDown),this.domElement.addEventListener(`pointercancel`,this._onPointerUp),this.domElement.addEventListener(`contextmenu`,this._onContextMenu),this.domElement.addEventListener(`wheel`,this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener(`keydown`,this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction=`none`}disconnect(){this.state=ut.NONE,this.domElement.removeEventListener(`pointerdown`,this._onPointerDown),this.domElement.ownerDocument.removeEventListener(`pointermove`,this._onPointerMove),this.domElement.ownerDocument.removeEventListener(`pointerup`,this._onPointerUp),this.domElement.removeEventListener(`pointercancel`,this._onPointerUp),this.domElement.removeEventListener(`wheel`,this._onMouseWheel),this.domElement.removeEventListener(`contextmenu`,this._onContextMenu),this.stopListenToKeyEvents();let e=this.domElement.getRootNode();e.removeEventListener(`keydown`,this._interceptControlDown,{capture:!0}),e.removeEventListener(`keyup`,this._interceptControlUp,{capture:!0}),this._controlActive=!1,this._pointers.length=0,this._pointerPositions={},this.domElement.style.touchAction=``,this.domElement.style.cursor=`auto`}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener(`keydown`,this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener(`keydown`,this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(_d),this.update(),this.state=ut.NONE}pan(e,t){this._pan(e,t),this.update()}dollyIn(e){this._dollyIn(e),this.update()}dollyOut(e){this._dollyOut(e),this.update()}rotateLeft(e){this._rotateLeft(e),this.update()}rotateUp(e){this._rotateUp(e),this.update()}update(e=null){let t=this.object.position;Bt.copy(t).sub(this.target),Bt.applyQuaternion(this._quat),this._spherical.setFromVector3(Bt),this.autoRotate&&this.state===ut.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,i=this.maxAzimuthAngle;isFinite(n)&&isFinite(i)&&(n<-Math.PI?n+=hn:n>Math.PI&&(n-=hn),i<-Math.PI?i+=hn:i>Math.PI&&(i-=hn),n<=i?this._spherical.theta=Math.max(n,Math.min(i,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+i)/2?Math.max(n,this._spherical.theta):Math.min(i,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{let a=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=a!=this._spherical.radius}if(Bt.setFromSpherical(this._spherical),Bt.applyQuaternion(this._quatInverse),t.copy(this.target).add(Bt),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let a=null;if(this.object.isPerspectiveCamera){let o=Bt.length();a=this._clampDistance(o*this._scale);let c=o-a;this.object.position.addScaledVector(this._dollyDirection,c),this.object.updateMatrixWorld(),r=!!c}else if(this.object.isOrthographicCamera){let o=new R(this._mouse.x,this._mouse.y,0);o.unproject(this.object);let c=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=c!==this.object.zoom;let l=new R(this._mouse.x,this._mouse.y,0);l.unproject(this.object),this.object.position.sub(l).add(o),this.object.updateMatrixWorld(),a=Bt.length()}else console.warn(`WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled.`),this.zoomToCursor=!1;a!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(a).add(this.object.position):(al.origin.copy(this.object.position),al.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(al.direction))<D_?this.object.lookAt(this.target):(xd.setFromNormalAndCoplanarPoint(this.object.up,this.target),al.intersectPlane(xd,this.target))))}else if(this.object.isOrthographicCamera){let a=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),a!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>Wc||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Wc||this._lastTargetPosition.distanceToSquared(this.target)>Wc?(this.dispatchEvent(_d),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?hn/60*this.autoRotateSpeed*e:hn/60/60*this.autoRotateSpeed}_getZoomScale(e){let t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){Bt.setFromMatrixColumn(t,0),Bt.multiplyScalar(-e),this._panOffset.add(Bt)}_panUp(e,t){this.screenSpacePanning===!0?Bt.setFromMatrixColumn(t,1):(Bt.setFromMatrixColumn(t,0),Bt.crossVectors(this.object.up,Bt)),Bt.multiplyScalar(e),this._panOffset.add(Bt)}_pan(e,t){let n=this.domElement;if(this.object.isPerspectiveCamera){let i=this.object.position;Bt.copy(i).sub(this.target);let r=Bt.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*r/n.clientHeight,this.object.matrix),this._panUp(2*t*r/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn(`WARNING: OrbitControls.js encountered an unknown camera type - pan disabled.`),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn(`WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled.`),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn(`WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled.`),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;let n=this.domElement.getBoundingClientRect(),i=e-n.left,r=t-n.top,a=n.width,o=n.height;this._mouse.x=i/a*2-1,this._mouse.y=-(r/o)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let t=this.domElement;this._rotateLeft(hn*this._rotateDelta.x/t.clientHeight),this._rotateUp(hn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(hn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-hn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(hn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-hn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),i=.5*(e.pageY+t.y);this._rotateStart.set(n,i)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),i=.5*(e.pageY+t.y);this._panStart.set(n,i)}}_handleTouchStartDolly(e){let t=this._getSecondPointerPosition(e),n=e.pageX-t.x,i=e.pageY-t.y,r=Math.sqrt(n*n+i*i);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{let n=this._getSecondPointerPosition(e),i=.5*(e.pageX+n.x),r=.5*(e.pageY+n.y);this._rotateEnd.set(i,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let t=this.domElement;this._rotateLeft(hn*this._rotateDelta.x/t.clientHeight),this._rotateUp(hn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),i=.5*(e.pageY+t.y);this._panEnd.set(n,i)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){let t=this._getSecondPointerPosition(e),n=e.pageX-t.x,i=e.pageY-t.y,r=Math.sqrt(n*n+i*i);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);let a=(e.pageX+t.x)*.5,o=(e.pageY+t.y)*.5;this._updateZoomParameters(a,o)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new Se,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){let t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){let t=e.deltaMode,n={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100}return e.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}};function L_(s){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(s.pointerId),this.domElement.ownerDocument.addEventListener(`pointermove`,this._onPointerMove),this.domElement.ownerDocument.addEventListener(`pointerup`,this._onPointerUp)),!this._isTrackingPointer(s)&&(this._addPointer(s),s.pointerType===`touch`?this._onTouchStart(s):this._onMouseDown(s),this._cursorStyle===`grab`&&(this.domElement.style.cursor=`grabbing`)))}function N_(s){this.enabled!==!1&&(s.pointerType===`touch`?this._onTouchMove(s):this._onMouseMove(s))}function U_(s){switch(this._removePointer(s),this._pointers.length){case 0:this.domElement.releasePointerCapture(s.pointerId),this.domElement.ownerDocument.removeEventListener(`pointermove`,this._onPointerMove),this.domElement.ownerDocument.removeEventListener(`pointerup`,this._onPointerUp),this.dispatchEvent(yd),this.state=ut.NONE,this._cursorStyle===`grab`&&(this.domElement.style.cursor=`grab`);break;case 1:let e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y})}}function F_(s){let e;switch(s.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case Gn.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(s),this.state=ut.DOLLY;break;case Gn.ROTATE:if(s.ctrlKey||s.metaKey||s.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(s),this.state=ut.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(s),this.state=ut.ROTATE}break;case Gn.PAN:if(s.ctrlKey||s.metaKey||s.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(s),this.state=ut.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(s),this.state=ut.PAN}break;default:this.state=ut.NONE}this.state!==ut.NONE&&this.dispatchEvent(Xc)}function O_(s){switch(this.state){case ut.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(s);break;case ut.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(s);break;case ut.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(s)}}function B_(s){this.enabled===!1||this.enableZoom===!1||this.state!==ut.NONE||(s.preventDefault(),this.dispatchEvent(Xc),this._handleMouseWheel(this._customWheelEvent(s)),this.dispatchEvent(yd))}function k_(s){this.enabled!==!1&&this._handleKeyDown(s)}function z_(s){switch(this._trackPointer(s),this._pointers.length){case 1:switch(this.touches.ONE){case Ei.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(s),this.state=ut.TOUCH_ROTATE;break;case Ei.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(s),this.state=ut.TOUCH_PAN;break;default:this.state=ut.NONE}break;case 2:switch(this.touches.TWO){case Ei.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(s),this.state=ut.TOUCH_DOLLY_PAN;break;case Ei.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(s),this.state=ut.TOUCH_DOLLY_ROTATE;break;default:this.state=ut.NONE}break;default:this.state=ut.NONE}this.state!==ut.NONE&&this.dispatchEvent(Xc)}function H_(s){switch(this._trackPointer(s),this.state){case ut.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(s),this.update();break;case ut.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(s),this.update();break;case ut.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(s),this.update();break;case ut.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(s),this.update();break;default:this.state=ut.NONE}}function V_(s){this.enabled!==!1&&s.preventDefault()}function G_(s){s.key===`Control`&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener(`keyup`,this._interceptControlUp,{passive:!0,capture:!0}))}function W_(s){s.key===`Control`&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener(`keyup`,this._interceptControlUp,{passive:!0,capture:!0}))}var X_=/^[og]\s*(.+)?/;var Y_=/^mtllib /;var q_=/^usemtl /;var j_=/^usemap /;var vd=/\s+/;var bd=new R;var Yc=new R;var Sd=new R;var Md=new R;var En=new R;var ll=new Ae;function Z_(){let s={objects:[],object:{},vertices:[],normals:[],colors:[],uvs:[],materials:{},materialLibraries:[],startObject:function(e,t){if(this.object&&this.object.fromDeclaration===!1){this.object.name=e,this.object.fromDeclaration=t!==!1;return}let n=this.object&&typeof this.object.currentMaterial==`function`?this.object.currentMaterial():void 0;if(this.object&&typeof this.object._finalize==`function`&&this.object._finalize(!0),this.object={name:e||``,fromDeclaration:t!==!1,geometry:{vertices:[],normals:[],colors:[],uvs:[],hasUVIndices:!1},materials:[],smooth:!0,startMaterial:function(i,r){let a=this._finalize(!1);a&&(a.inherited||a.groupCount<=0)&&this.materials.splice(a.index,1);let o={index:this.materials.length,name:i||``,mtllib:Array.isArray(r)&&r.length>0?r[r.length-1]:``,smooth:a!==void 0?a.smooth:this.smooth,groupStart:a!==void 0?a.groupEnd:0,groupEnd:-1,groupCount:-1,inherited:!1,clone:function(c){let l={index:typeof c==`number`?c:this.index,name:this.name,mtllib:this.mtllib,smooth:this.smooth,groupStart:0,groupEnd:-1,groupCount:-1,inherited:!1};return l.clone=this.clone.bind(l),l}};return this.materials.push(o),o},currentMaterial:function(){if(this.materials.length>0)return this.materials[this.materials.length-1]},_finalize:function(i){let r=this.currentMaterial();if(r&&r.groupEnd===-1&&(r.groupEnd=this.geometry.vertices.length/3,r.groupCount=r.groupEnd-r.groupStart,r.inherited=!1),i&&this.materials.length>1)for(let a=this.materials.length-1;a>=0;a--)this.materials[a].groupCount<=0&&this.materials.splice(a,1);return i&&this.materials.length===0&&this.materials.push({name:``,smooth:this.smooth}),r}},n&&n.name&&typeof n.clone==`function`){let i=n.clone(0);i.inherited=!0,this.object.materials.push(i)}this.objects.push(this.object)},finalize:function(){this.object&&typeof this.object._finalize==`function`&&this.object._finalize(!0)},parseVertexIndex:function(e,t){let n=parseInt(e,10);return(n>=0?n-1:n+t/3)*3},parseNormalIndex:function(e,t){let n=parseInt(e,10);return(n>=0?n-1:n+t/3)*3},parseUVIndex:function(e,t){let n=parseInt(e,10);return(n>=0?n-1:n+t/2)*2},addVertex:function(e,t,n){let i=this.vertices,r=this.object.geometry.vertices;r.push(i[e+0],i[e+1],i[e+2]),r.push(i[t+0],i[t+1],i[t+2]),r.push(i[n+0],i[n+1],i[n+2])},addVertexPoint:function(e){let t=this.vertices;this.object.geometry.vertices.push(t[e+0],t[e+1],t[e+2])},addVertexLine:function(e){let t=this.vertices;this.object.geometry.vertices.push(t[e+0],t[e+1],t[e+2])},addNormal:function(e,t,n){let i=this.normals,r=this.object.geometry.normals;r.push(i[e+0],i[e+1],i[e+2]),r.push(i[t+0],i[t+1],i[t+2]),r.push(i[n+0],i[n+1],i[n+2])},addFaceNormal:function(e,t,n){let i=this.vertices,r=this.object.geometry.normals;bd.fromArray(i,e),Yc.fromArray(i,t),Sd.fromArray(i,n),En.subVectors(Sd,Yc),Md.subVectors(bd,Yc),En.cross(Md),En.normalize(),r.push(En.x,En.y,En.z),r.push(En.x,En.y,En.z),r.push(En.x,En.y,En.z)},addColor:function(e,t,n){let i=this.colors,r=this.object.geometry.colors;i[e]!==void 0&&r.push(i[e+0],i[e+1],i[e+2]),i[t]!==void 0&&r.push(i[t+0],i[t+1],i[t+2]),i[n]!==void 0&&r.push(i[n+0],i[n+1],i[n+2])},addUV:function(e,t,n){let i=this.uvs,r=this.object.geometry.uvs;r.push(i[e+0],i[e+1]),r.push(i[t+0],i[t+1]),r.push(i[n+0],i[n+1])},addDefaultUV:function(){let e=this.object.geometry.uvs;e.push(0,0),e.push(0,0),e.push(0,0)},addUVLine:function(e){let t=this.uvs;this.object.geometry.uvs.push(t[e+0],t[e+1])},addFace:function(e,t,n,i,r,a,o,c,l){let u=this.vertices.length,d=this.parseVertexIndex(e,u),h=this.parseVertexIndex(t,u),f=this.parseVertexIndex(n,u);if(this.addVertex(d,h,f),this.addColor(d,h,f),o!==void 0&&o!==``){let g=this.normals.length;d=this.parseNormalIndex(o,g),h=this.parseNormalIndex(c,g),f=this.parseNormalIndex(l,g),this.addNormal(d,h,f)}else this.addFaceNormal(d,h,f);if(i!==void 0&&i!==``){let g=this.uvs.length;d=this.parseUVIndex(i,g),h=this.parseUVIndex(r,g),f=this.parseUVIndex(a,g),this.addUV(d,h,f),this.object.geometry.hasUVIndices=!0}else this.addDefaultUV()},addPointGeometry:function(e){this.object.geometry.type=`Points`;let t=this.vertices.length;for(let n=0,i=e.length;n<i;n++){let r=this.parseVertexIndex(e[n],t);this.addVertexPoint(r),this.addColor(r)}},addLineGeometry:function(e,t){this.object.geometry.type=`Line`;let n=this.vertices.length,i=this.uvs.length;for(let r=0,a=e.length;r<a;r++)this.addVertexLine(this.parseVertexIndex(e[r],n));for(let r=0,a=t.length;r<a;r++)this.addUVLine(this.parseUVIndex(t[r],i))}};return s.startObject(``,!1),s}var Gr=class extends Nn{constructor(e){super(e),this.materials=null}load(e,t,n,i){let r=this,a=new Hi(this.manager);a.setPath(this.path),a.setRequestHeader(this.requestHeader),a.setWithCredentials(this.withCredentials),a.load(e,function(o){try{t(r.parse(o))}catch(c){i?i(c):console.error(c),r.manager.itemError(e)}},n,i)}setMaterials(e){return this.materials=e,this}parse(e){let t=new Z_;e.indexOf(`\r
`)!==-1&&(e=e.replace(/\r\n/g,`
`)),e.indexOf(`\\
`)!==-1&&(e=e.replace(/\\\n/g,``));let n=e.split(`
`),i=[];for(let o=0,c=n.length;o<c;o++){let l=n[o].trimStart();if(l.length===0)continue;let u=l.charAt(0);if(u!==`#`)if(u===`v`){let d=l.split(vd);switch(d[0]){case`v`:t.vertices.push(parseFloat(d[1]),parseFloat(d[2]),parseFloat(d[3])),d.length>=7?(ll.setRGB(parseFloat(d[4]),parseFloat(d[5]),parseFloat(d[6]),It),t.colors.push(ll.r,ll.g,ll.b)):t.colors.push(void 0,void 0,void 0);break;case`vn`:t.normals.push(parseFloat(d[1]),parseFloat(d[2]),parseFloat(d[3]));break;case`vt`:t.uvs.push(parseFloat(d[1]),parseFloat(d[2]))}}else if(u===`f`){let h=l.slice(1).trim().split(vd),f=[];for(let y=0,m=h.length;y<m;y++){let p=h[y];if(p.length>0){let S=p.split(`/`);f.push(S)}}let g=f[0];for(let y=1,m=f.length-1;y<m;y++){let p=f[y],S=f[y+1];t.addFace(g[0],p[0],S[0],g[1],p[1],S[1],g[2],p[2],S[2])}}else if(u===`l`){let d=l.substring(1).trim().split(` `),h=[],f=[];if(l.indexOf(`/`)===-1)h=d;else for(let g=0,y=d.length;g<y;g++){let m=d[g].split(`/`);m[0]!==``&&h.push(m[0]),m[1]!==``&&f.push(m[1])}t.addLineGeometry(h,f)}else if(u===`p`){let h=l.slice(1).trim().split(` `);t.addPointGeometry(h)}else if((i=X_.exec(l))!==null){let d=(` `+i[0].slice(1).trim()).slice(1);t.startObject(d)}else if(q_.test(l))t.object.startMaterial(l.substring(7).trim(),t.materialLibraries);else if(Y_.test(l))t.materialLibraries.push(l.substring(7).trim());else if(j_.test(l))console.warn(`THREE.OBJLoader: Rendering identifier "usemap" not supported. Textures must be defined in MTL files.`);else if(u===`s`){if(i=l.split(` `),i.length>1){let h=i[1].trim().toLowerCase();t.object.smooth=h!==`0`&&h!==`off`}else t.object.smooth=!0;let d=t.object.currentMaterial();d&&(d.smooth=t.object.smooth)}else{if(l===`\0`)continue;console.warn(`THREE.OBJLoader: Unexpected line: "`+l+`"`)}}t.finalize();let r=new tn;if(r.materialLibraries=[].concat(t.materialLibraries),!(t.objects.length===1&&t.objects[0].geometry.vertices.length===0)===!0)for(let o=0,c=t.objects.length;o<c;o++){let l=t.objects[o],u=l.geometry,d=l.materials,h=u.type===`Line`,f=u.type===`Points`,g=!1;if(u.vertices.length===0)continue;let y=new Qe;y.setAttribute(`position`,new Ve(u.vertices,3)),u.normals.length>0&&y.setAttribute(`normal`,new Ve(u.normals,3)),u.colors.length>0&&(g=!0,y.setAttribute(`color`,new Ve(u.colors,3))),u.hasUVIndices===!0&&y.setAttribute(`uv`,new Ve(u.uvs,2));let m=[];for(let S=0,C=d.length;S<C;S++){let v=d[S],E=v.name+`_`+v.smooth+`_`+g,M=t.materials[E];if(this.materials!==null){if(M=this.materials.create(v.name),h&&M&&!(M instanceof Ut)){let w=new Ut;nn.prototype.copy.call(w,M),w.color.copy(M.color),M=w}else if(f&&M&&!(M instanceof pn)){let w=new pn({size:10,sizeAttenuation:!1});nn.prototype.copy.call(w,M),w.color.copy(M.color),w.map=M.map,M=w}}M===void 0&&(h?M=new Ut:f?M=new pn({size:1,sizeAttenuation:!1}):M=new zi,M.name=v.name,M.flatShading=!v.smooth,M.vertexColors=g,t.materials[E]=M),m.push(M)}let p;if(m.length>1){for(let S=0,C=d.length;S<C;S++){let v=d[S];y.addGroup(v.groupStart,v.groupCount,S)}h?p=new sn(y,m):f?p=new Ln(y,m):p=new Lt(y,m)}else h?p=new sn(y,m[0]):f?p=new Ln(y,m[0]):p=new Lt(y,m[0]);p.name=l.name,r.add(p)}else if(t.vertices.length>0){let o=new pn({size:1,sizeAttenuation:!1}),c=new Qe;c.setAttribute(`position`,new Ve(t.vertices,3)),t.colors.length>0&&t.colors[0]!==void 0&&(c.setAttribute(`color`,new Ve(t.colors,3)),o.vertexColors=!0);let l=new Ln(c,o);r.add(l)}return r}};var cl=class extends Nn{constructor(e){super(e)}load(e,t,n,i){let r=this,a=this.path===``?Mr.extractUrlBase(e):this.path,o=new Hi(this.manager);o.setPath(this.path),o.setRequestHeader(this.requestHeader),o.setWithCredentials(this.withCredentials),o.load(e,function(c){try{t(r.parse(c,a))}catch(l){i?i(l):console.error(l),r.manager.itemError(e)}},n,i)}setMaterialOptions(e){return this.materialOptions=e,this}parse(e,t){let n=e.split(`
`),i={},r=/\s+/,a={};for(let c=0;c<n.length;c++){let l=n[c];if(l=l.trim(),l.length===0||l.charAt(0)===`#`)continue;let u=l.indexOf(` `),d=u>=0?l.substring(0,u):l;d=d.toLowerCase();let h=u>=0?l.substring(u+1):``;if(h=h.trim(),d===`newmtl`)i={name:h},a[h]=i;else if(d===`ka`||d===`kd`||d===`ks`||d===`ke`){let f=h.split(r,3);i[d]=[parseFloat(f[0]),parseFloat(f[1]),parseFloat(f[2])]}else i[d]=h}let o=new qc(this.resourcePath||t,this.materialOptions);return o.setCrossOrigin(this.crossOrigin),o.setManager(this.manager),o.setMaterials(a),o}};var qc=class{constructor(e=``,t={}){this.baseUrl=e,this.options=t,this.materialsInfo={},this.materials={},this.materialsArray=[],this.nameLookup={},this.crossOrigin=`anonymous`,this.side=this.options.side!==void 0?this.options.side:Wn,this.wrap=this.options.wrap!==void 0?this.options.wrap:_i}setCrossOrigin(e){return this.crossOrigin=e,this}setManager(e){this.manager=e}setMaterials(e){this.materialsInfo=this.convert(e),this.materials={},this.materialsArray=[],this.nameLookup={}}convert(e){if(!this.options)return e;let t={};for(let n in e){let i=e[n],r={};t[n]=r;for(let a in i){let o=!0,c=i[a],l=a.toLowerCase();switch(l){case`kd`:case`ka`:case`ks`:this.options&&this.options.normalizeRGB&&(c=[c[0]/255,c[1]/255,c[2]/255]),this.options&&this.options.ignoreZeroRGBs&&c[0]===0&&c[1]===0&&c[2]===0&&(o=!1)}o&&(r[l]=c)}}return t}preload(){for(let e in this.materialsInfo)this.create(e)}getIndex(e){return this.nameLookup[e]}getAsArray(){let e=0;for(let t in this.materialsInfo)this.materialsArray[e]=this.create(t),this.nameLookup[t]=e,e++;return this.materialsArray}create(e){return this.materials[e]===void 0&&this.createMaterial_(e),this.materials[e]}createMaterial_(e){let t=this,n=this.materialsInfo[e],i={name:e,side:this.side};function r(o,c){return typeof c!=`string`||c===``?``:/^https?:\/\//i.test(c)?c:o+c}function a(o,c){if(i[o])return;let l=t.getTextureParams(c,i),u=t.loadTexture(r(t.baseUrl,l.url));u.repeat.copy(l.scale),u.offset.copy(l.offset),u.wrapS=t.wrap,u.wrapT=t.wrap,(o===`map`||o===`emissiveMap`)&&(u.colorSpace=It),i[o]=u}for(let o in n){let c=n[o],l;if(c!==``)switch(o.toLowerCase()){case`kd`:i.color=We.colorSpaceToWorking(new Ae().fromArray(c),It);break;case`ks`:i.specular=We.colorSpaceToWorking(new Ae().fromArray(c),It);break;case`ke`:i.emissive=We.colorSpaceToWorking(new Ae().fromArray(c),It);break;case`map_kd`:a(`map`,c);break;case`map_ks`:a(`specularMap`,c);break;case`map_ke`:a(`emissiveMap`,c);break;case`norm`:a(`normalMap`,c);break;case`map_bump`:case`bump`:a(`bumpMap`,c);break;case`disp`:a(`displacementMap`,c);break;case`map_d`:a(`alphaMap`,c),i.transparent=!0;break;case`ns`:i.shininess=parseFloat(c);break;case`d`:l=parseFloat(c),l<1&&(i.opacity=l,i.transparent=!0);break;case`tr`:l=parseFloat(c),this.options&&this.options.invertTrProperty&&(l=1-l),l>0&&(i.opacity=1-l,i.transparent=!0)}}return this.materials[e]=new zi(i),this.materials[e]}getTextureParams(e,t){let n={scale:new Se(1,1),offset:new Se(0,0)},i=e.split(/\s+/),r;return r=i.indexOf(`-bm`),r>=0&&(t.bumpScale=parseFloat(i[r+1]),i.splice(r,2)),r=i.indexOf(`-mm`),r>=0&&(t.displacementBias=parseFloat(i[r+1]),t.displacementScale=parseFloat(i[r+2]),i.splice(r,3)),r=i.indexOf(`-s`),r>=0&&(n.scale.set(parseFloat(i[r+1]),parseFloat(i[r+2])),i.splice(r,4)),r=i.indexOf(`-o`),r>=0&&(n.offset.set(parseFloat(i[r+1]),parseFloat(i[r+2])),i.splice(r,4)),n.url=i.join(` `).trim(),n}loadTexture(e,t,n,i,r){let a=this.manager!==void 0?this.manager:$o,o=a.getHandler(e);o===null&&(o=new xr(a)),o.setCrossOrigin&&o.setCrossOrigin(this.crossOrigin);let c=o.load(e,n,i,r);return t!==void 0&&(c.mapping=t),c}};var{lerp:qi}=wt,Jt=[151,160,137,91,90,15,131,13,201,95,96,53,194,233,7,225,140,36,103,30,69,142,8,99,37,240,21,10,23,190,6,148,247,120,234,75,0,26,197,62,94,252,219,203,117,35,11,32,57,177,33,88,237,149,56,87,174,20,125,136,171,168,68,175,74,165,71,134,139,48,27,166,77,146,158,231,83,111,229,122,60,211,133,230,220,105,92,41,55,46,245,40,244,102,143,54,65,25,63,161,1,216,80,73,209,76,132,187,208,89,18,169,200,196,135,130,116,188,159,86,164,100,109,198,173,186,3,64,52,217,226,250,124,123,5,202,38,147,118,126,255,82,85,212,207,206,59,227,47,16,58,17,182,189,28,42,223,183,170,213,119,248,152,2,44,154,163,70,221,153,101,155,167,43,172,9,129,22,39,253,19,98,108,110,79,113,224,232,178,185,112,104,218,246,97,228,251,34,242,193,238,210,144,12,191,179,162,241,81,51,145,235,249,14,239,107,49,192,214,31,181,199,106,157,184,84,204,176,115,121,50,45,127,4,150,254,138,236,205,93,222,114,67,29,24,72,243,141,128,195,78,66,215,61,156,180];for(let s=0;s<256;s++)Jt[256+s]=Jt[s];function jc(s){return s*s*s*(s*(s*6-15)+10)}function Ri(s,e,t,n){let i=s&15,r=i<8?e:t,a=i<4?t:i==12||i==14?e:n;return((i&1)==0?r:-r)+((i&2)==0?a:-a)}var hl=class{noise(e,t,n){let i=Math.floor(e),r=Math.floor(t),a=Math.floor(n),o=i&255,c=r&255,l=a&255;e-=i,t-=r,n-=a;let u=e-1,d=t-1,h=n-1,f=jc(e),g=jc(t),y=jc(n),m=Jt[o]+c,p=Jt[m]+l,S=Jt[m+1]+l,C=Jt[o+1]+c,v=Jt[C]+l,E=Jt[C+1]+l;return qi(qi(qi(Ri(Jt[p],e,t,n),Ri(Jt[v],u,t,n),f),qi(Ri(Jt[S],e,d,n),Ri(Jt[E],u,d,n),f),g),qi(qi(Ri(Jt[p+1],e,t,h),Ri(Jt[v+1],u,t,h),f),qi(Ri(Jt[S+1],e,d,h),Ri(Jt[E+1],u,d,h),f),g),y)}};var ul=class s{constructor(e){this.authService=e}authService;API_BASE=cu$1.API_BASE;async authHeaders(){return{Authorization:`Bearer ${await this.authService.getAuthToken()}`,"Content-Type":`application/json`}}async list(){let e=await fetch(`${this.API_BASE}/api/admin/three-d-projects`,{headers:await this.authHeaders()});if(this.authService.checkResponseAuth(e),!e.ok)throw new Error(`Failed to fetch projects`);return e.json()}async get(e){let t=await fetch(`${this.API_BASE}/api/admin/three-d-projects/${e}`,{headers:await this.authHeaders()});if(this.authService.checkResponseAuth(t),!t.ok)throw new Error(`Failed to fetch project`);return t.json()}async create(e,t){let n=await fetch(`${this.API_BASE}/api/admin/three-d-projects`,{method:`POST`,headers:await this.authHeaders(),body:JSON.stringify({name:e,data:t})});if(this.authService.checkResponseAuth(n),!n.ok)throw new Error((await n.json().catch(()=>({})))?.error||`Failed to create project`);return n.json()}async update(e,t){let n=await fetch(`${this.API_BASE}/api/admin/three-d-projects/${e}`,{method:`PUT`,headers:await this.authHeaders(),body:JSON.stringify(t)});if(this.authService.checkResponseAuth(n),!n.ok)throw new Error((await n.json().catch(()=>({})))?.error||`Failed to save project`);return n.json()}async remove(e){let t=await fetch(`${this.API_BASE}/api/admin/three-d-projects/${e}`,{method:`DELETE`,headers:await this.authHeaders()});if(this.authService.checkResponseAuth(t),!t.ok)throw new Error(`Failed to delete project`)}static ɵfac=function(t){return new(t||s)(I(jE))};static ɵprov=N({token:s,factory:s.ɵfac,providedIn:`root`})};var dl=class s{constructor(e){this.authService=e}authService;API_BASE=cu$1.API_BASE;async authHeaders(){return{Authorization:`Bearer ${await this.authService.getAuthToken()}`,"Content-Type":`application/json`}}async list(e){let t=await fetch(`${this.API_BASE}/api/admin/three-d-recordings?projectId=${e}`,{headers:await this.authHeaders()});if(this.authService.checkResponseAuth(t),!t.ok)throw new Error(`Failed to fetch recordings`);return t.json()}async get(e){let t=await fetch(`${this.API_BASE}/api/admin/three-d-recordings/${e}`,{headers:await this.authHeaders()});if(this.authService.checkResponseAuth(t),!t.ok)throw new Error(`Failed to fetch recording`);return t.json()}async create(e,t,n){let i=await fetch(`${this.API_BASE}/api/admin/three-d-recordings`,{method:`POST`,headers:await this.authHeaders(),body:JSON.stringify({name:e,projectId:t,data:n})});if(this.authService.checkResponseAuth(i),!i.ok)throw new Error((await i.json().catch(()=>({})))?.error||`Failed to create recording`);return i.json()}async update(e,t){let n=await fetch(`${this.API_BASE}/api/admin/three-d-recordings/${e}`,{method:`PUT`,headers:await this.authHeaders(),body:JSON.stringify(t)});if(this.authService.checkResponseAuth(n),!n.ok)throw new Error((await n.json().catch(()=>({})))?.error||`Failed to save recording`);return n.json()}async remove(e){let t=await fetch(`${this.API_BASE}/api/admin/three-d-recordings/${e}`,{method:`DELETE`,headers:await this.authHeaders()});if(this.authService.checkResponseAuth(t),!t.ok)throw new Error(`Failed to delete recording`)}static ɵfac=function(t){return new(t||s)(I(jE))};static ɵprov=N({token:s,factory:s.ɵfac,providedIn:`root`})};var Q_=[`canvas`];var Fd=(s,e)=>e.id;var ex=(s,e)=>e.type;function tx(s,e){s&1&&(ff$1(0,`small`,11),qT(1,`Select an object to see its controls.`),hf$1())}function nx(s,e){if(s&1){let t=pT();ff$1(0,`input`,55),rv(`change`,function(i){Qp(t);let r=DT();return Kp(r.onAutoRotateSpeedChange(i))}),hf$1(),ff$1(1,`small`,11),qT(2,`°/sec`),hf$1()}if(s&2){let t=DT();tv(`value`,t.autoRotateSpeedForSelected())}}function ix(s,e){if(s&1){let t=pT();ff$1(0,`input`,56),rv(`change`,function(i){Qp(t);let r=DT();return Kp(r.setSelectedColor(i))}),hf$1(),ff$1(1,`small`,57),qT(2),hf$1()}if(s&2){let t=DT();tv(`value`,t.selectedColorHex()),rb(2),mf$1(` Distance from origin: `,t.formatMiles(t.distanceFromOriginMiles()),` (at 100 units/AU) `)}}function sx(s,e){if(s&1){let t=pT();ff$1(0,`label`,16),qT(1,`Texture`),hf$1(),ff$1(2,`select`,58),rv(`change`,function(i){Qp(t);let r=DT();return Kp(r.onTextureChange(i))}),ff$1(3,`option`,59),qT(4,`None (flat color)`),hf$1(),ff$1(5,`option`,60),qT(6,`Rocky`),hf$1(),ff$1(7,`option`,61),qT(8,`Gas Giant`),hf$1(),ff$1(9,`option`,62),qT(10,`Earth-like`),hf$1(),ff$1(11,`option`,63),qT(12,`Sun`),hf$1()()}if(s&2){let t=DT();rb(2),tv(`value`,t.textureKindForSelected())}}function rx(s,e){if(s&1){let t=pT();ff$1(0,`button`,18),rv(`click`,function(){Qp(t);let i=DT();return Kp(i.toggleWireframe())}),qT(1,` Wireframe `),hf$1()}if(s&2){let t=DT();uv(`btn-secondary`,t.isWireframeOn())(`btn-outline-secondary`,!t.isWireframeOn())}}function ax(s,e){if(s&1){let t=pT();ff$1(0,`label`,16),qT(1,`Size`),hf$1(),ff$1(2,`input`,64),rv(`change`,function(i){Qp(t);let r=DT();return Kp(r.onTerrainSizeChange(i))}),hf$1(),ff$1(3,`label`,16),qT(4,`Resolution`),hf$1(),ff$1(5,`input`,65),rv(`change`,function(i){Qp(t);let r=DT();return Kp(r.onTerrainResolutionChange(i))}),hf$1(),ff$1(6,`label`,16),qT(7,`Height`),hf$1(),ff$1(8,`input`,66),rv(`change`,function(i){Qp(t);let r=DT();return Kp(r.onTerrainHeightChange(i))}),hf$1(),ff$1(9,`button`,38),rv(`click`,function(){Qp(t);let i=DT();return Kp(i.regenerateTerrain())}),qT(10,` Reroll Seed `),hf$1()}if(s&2){let t=DT();rb(2),tv(`value`,t.terrainParamsForSelected().size),rb(3),tv(`value`,t.terrainParamsForSelected().resolution),rb(3),tv(`value`,t.terrainParamsForSelected().heightScale)}}function ox(s,e){if(s&1){let t=pT();ff$1(0,`input`,68),rv(`input`,function(i){Qp(t);let r=DT(2);return Kp(r.onPendingLabelTextInput(i))}),hf$1(),ff$1(1,`button`,69),rv(`click`,function(){Qp(t);let i=DT(2);return Kp(i.addLabelToSelected())}),qT(2,` Add Label `),hf$1()}if(s&2){let t=DT(2);tv(`value`,t.pendingLabelText),rb(),tv(`disabled`,!t.pendingLabelText.trim())}}function lx(s,e){if(s&1){let t=pT();ff$1(0,`button`,25),rv(`click`,function(){Qp(t);let i=DT(2);return Kp(i.removeLabelFromSelected())}),qT(1,` Remove Label `),hf$1()}}function cx(s,e){if(s&1&&rT(0,ox,3,2)(1,lx,2,0,`button`,67),s&2){let t=DT();iT(t.hasLabelOnSelected()?1:0)}}function hx(s,e){if(s&1){let t=pT();ff$1(0,`button`,18),rv(`click`,function(){Qp(t);let i=DT();return Kp(i.toggleGravity())}),qT(1),hf$1()}if(s&2){let t=DT();uv(`btn-primary`,t.isGravityOn())(`btn-outline-primary`,!t.isGravityOn()),rb(),mf$1(` Gravity: `,t.isGravityOn()?`On`:`Off`,` `)}}function ux(s,e){if(s&1){let t=pT();ff$1(0,`label`,16),qT(1,`Density`),hf$1(),ff$1(2,`input`,70),rv(`input`,function(i){Qp(t);let r=DT();return Kp(r.onParticleDensityChange(i))}),hf$1(),ff$1(3,`label`,16),qT(4,`Speed`),hf$1(),ff$1(5,`input`,71),rv(`input`,function(i){Qp(t);let r=DT();return Kp(r.onParticleSpeedChange(i))}),hf$1()}if(s&2){let t=DT();rb(2),tv(`value`,t.particleDensityForSelected()),rb(3),tv(`value`,t.particleSpeedForSelected())}}function dx(s,e){if(s&1){let t=pT();ff$1(0,`label`,16),qT(1,`Radius`),hf$1(),ff$1(2,`input`,73),rv(`input`,function(i){Qp(t);let r=DT(2);return Kp(r.onLightRadiusChange(i))}),hf$1()}if(s&2){let t=DT(2);rb(2),tv(`value`,t.lightRadiusForSelected())}}function fx(s,e){if(s&1){let t=pT();ff$1(0,`button`,25),rv(`click`,function(){Qp(t);let i=DT();return Kp(i.onToggleLightMode())}),qT(1),hf$1(),ff$1(2,`label`,16),qT(3,`Intensity`),hf$1(),ff$1(4,`input`,72),rv(`input`,function(i){Qp(t);let r=DT();return Kp(r.onLightIntensityChange(i))}),hf$1(),rT(5,dx,3,1)}if(s&2){let t=DT();rb(),mf$1(` `,t.isLightDirectional()?`Directional`:`Point`,` `),rb(3),tv(`value`,t.lightIntensityForSelected()),rb(),iT(t.isLightDirectional()?-1:5)}}function px(s,e){if(s&1&&(ff$1(0,`div`,24),qT(1),hf$1()),s&2){let t=DT();rb(),mv(t.cameraPathError)}}function mx(s,e){if(s&1&&(ff$1(0,`div`,24),qT(1),hf$1()),s&2){let t=DT();rb(),mv(t.projectError)}}function gx(s,e){if(s&1&&(ff$1(0,`div`,32),qT(1),hf$1()),s&2){let t=DT();rb(),mv(t.projectSuccessMessage)}}function _x(s,e){if(s&1&&(ff$1(0,`option`,35),qT(1),hf$1()),s&2){let t=e.$implicit;tv(`value`,t.id),rb(),mv(t.name)}}function xx(s,e){s&1&&(ff$1(0,`div`,40),qT(1,`Load or save a project above first - recordings belong to a project.`),hf$1())}function yx(s,e){if(s&1&&(ff$1(0,`div`,24),qT(1),hf$1()),s&2){let t=DT(2);rb(),mv(t.recordingError)}}function vx(s,e){if(s&1&&(ff$1(0,`div`,32),qT(1),hf$1()),s&2){let t=DT(2);rb(),mv(t.recordingSuccessMessage)}}function bx(s,e){if(s&1&&(ff$1(0,`option`,35),qT(1),hf$1()),s&2){let t=e.$implicit;tv(`value`,t.id),rb(),mv(t.name)}}function Sx(s,e){if(s&1){let t=pT();rT(0,yx,2,1,`div`,24),rT(1,vx,2,1,`div`,32),ff$1(2,`div`,10)(3,`select`,33),rv(`change`,function(i){Qp(t);let r=DT();return Kp(r.onRecordingSelectChange(i))}),ff$1(4,`option`,34),qT(5),hf$1(),cT(6,bx,2,2,`option`,35,Fd),hf$1(),ff$1(8,`input`,74),rv(`input`,function(i){Qp(t);let r=DT();return Kp(r.onRecordingNameInput(i))}),hf$1(),ff$1(9,`button`,31),rv(`click`,function(){Qp(t);let i=DT();return Kp(i.saveRecording())}),qT(10,` Save `),hf$1(),ff$1(11,`button`,31),rv(`click`,function(){Qp(t);let i=DT();return Kp(i.createRecording())}),qT(12,` Save As New `),hf$1(),ff$1(13,`button`,37),rv(`click`,function(){Qp(t);let i=DT();return Kp(i.deleteRecording())}),qT(14,` Delete Recording `),hf$1()()}if(s&2){let t=DT();iT(t.recordingError?0:-1),rb(),iT(t.recordingSuccessMessage?1:-1),rb(2),tv(`value`,t.selectedRecordingId??``)(`disabled`,t.recordingsLoading),rb(2),mv(t.recordings.length?`Load a saved recording…`:`No saved recordings for this project yet`),rb(),uT(t.recordings),rb(2),tv(`value`,t.recordingName),rb(),tv(`disabled`,t.selectedRecordingId===null||t.recordingSaving||!t.lastRecording),rb(2),tv(`disabled`,!t.recordingName.trim()||t.recordingSaving||!t.lastRecording),rb(2),tv(`disabled`,t.selectedRecordingId===null)}}function Mx(s,e){if(s&1){let t=pT();ff$1(0,`button`,69),rv(`click`,function(){let i=Qp(t).$implicit,r=DT();return Kp(r.addShape(i.type))}),qT(1),hf$1()}if(s&2){let t=e.$implicit,n=DT();tv(`disabled`,t.type===`duck`&&!n.duckReady),rb(),mf$1(` + `,t.label,` `)}}function Ex(s,e){if(s&1){let t=pT();ff$1(0,`button`,25),rv(`click`,function(){Qp(t);let i=DT();return Kp(i.addShape(`custom`))}),qT(1),hf$1(),ff$1(2,`small`,11),qT(3,`Session-only - not saved with the file, just this tab.`),hf$1()}if(s&2){let t=DT();rb(),mf$1(` + `,t.customModelName,` `)}}function Tx(s,e){if(s&1){let t=pT();ff$1(0,`button`,75),rv(`click`,function(){Qp(t);let i=DT();return Kp(i.startRecording())}),qT(1,` ● Record `),hf$1()}}function wx(s,e){if(s&1){let t=pT();ff$1(0,`button`,38),rv(`click`,function(){Qp(t);let i=DT(2);return Kp(i.pauseRecording())}),qT(1,`Pause`),hf$1()}}function Ax(s,e){if(s&1){let t=pT();ff$1(0,`button`,38),rv(`click`,function(){Qp(t);let i=DT(2);return Kp(i.resumeRecording())}),qT(1,`Resume`),hf$1()}}function Cx(s,e){if(s&1){let t=pT();ff$1(0,`button`,76),qT(1,` ● Recording… `),hf$1(),rT(2,wx,2,0,`button`,77)(3,Ax,2,0,`button`,77),ff$1(4,`button`,38),rv(`click`,function(){Qp(t);let i=DT();return Kp(i.stopRecording())}),qT(5,`Stop`),hf$1()}if(s&2){let t=DT();rb(2),iT(t.recordingPaused?3:2)}}function Rx(s,e){s&1&&(ff$1(0,`small`,11),qT(1,`No recording yet - press Record, change something, then Stop.`),hf$1())}function Px(s,e){if(s&1){let t=pT();ff$1(0,`button`,78),rv(`click`,function(){Qp(t);let i=DT();return Kp(i.startPlayback())}),qT(1,` ▶ Play `),hf$1(),rT(2,Rx,2,0,`small`,11)}if(s&2){let t=DT();tv(`disabled`,!t.lastRecording||t.recording)(`title`,t.recording?`Stop recording first`:t.lastRecording?`Play back the last recording`:`Record something first - Play stays disabled until a Record→Stop cycle captures at least one change`),rb(2),iT(!t.lastRecording&&!t.recording?2:-1)}}function Ix(s,e){if(s&1){let t=pT();ff$1(0,`button`,38),rv(`click`,function(){Qp(t);let i=DT(2);return Kp(i.togglePlaybackPause())}),qT(1,`Pause`),hf$1()}}function Dx(s,e){if(s&1){let t=pT();ff$1(0,`button`,38),rv(`click`,function(){Qp(t);let i=DT(2);return Kp(i.togglePlaybackPause())}),qT(1,`Resume`),hf$1()}}function Lx(s,e){if(s&1){let t=pT();rT(0,Ix,2,0,`button`,77)(1,Dx,2,0,`button`,77),ff$1(2,`button`,38),rv(`click`,function(){Qp(t);let i=DT();return Kp(i.stopPlayback())}),qT(3,`Stop`),hf$1()}if(s&2){let t=DT();iT(t.playbackPaused?1:0)}}function Nx(s,e){if(s&1&&(ff$1(0,`small`,11),qT(1),hf$1()),s&2){let t=DT();rb(),vv(``,t.formatTime(t.playbackElapsedSeconds),` / `,t.formatTime(t.recordingDurationSeconds()),` (`,t.lastRecordingEventCount(),` events) - scrubber is on-screen over the viewport below`)}}function Ux(s,e){if(s&1&&(ff$1(0,`div`,79)(1,`span`),qT(2),hf$1(),ff$1(3,`span`),qT(4),hf$1()()),s&2){let t=DT(2);rb(2),mf$1(``,t.formatMiles(t.cameraDistanceMiles),` from origin`),rb(2),mv(t.formatMph(t.cameraSpeedMph))}}function Fx(s,e){if(s&1){let t=pT();ff$1(0,`button`,84),rv(`click`,function(){Qp(t);let i=DT(3);return Kp(i.startPlayback())}),qT(1,`▶`),hf$1()}if(s&2){let t=DT(3);tv(`disabled`,t.recording)}}function Ox(s,e){if(s&1){let t=pT();ff$1(0,`button`,85),rv(`click`,function(){Qp(t);let i=DT(3);return Kp(i.togglePlaybackPause())}),qT(1),hf$1(),ff$1(2,`button`,86),rv(`click`,function(){Qp(t);let i=DT(3);return Kp(i.stopPlayback())}),qT(3,`■`),hf$1()}if(s&2){let t=DT(3);tv(`title`,t.playbackPaused?`Resume`:`Pause`),rb(),mv(t.playbackPaused?`▶`:`❚❚`)}}function Bx(s,e){if(s&1){let t=pT();ff$1(0,`div`,80),rT(1,Fx,2,1,`button`,81)(2,Ox,4,2),ff$1(3,`input`,82),rv(`input`,function(i){Qp(t);let r=DT(2);return Kp(r.seekPlayback(i))}),hf$1(),ff$1(4,`small`),qT(5),hf$1(),ff$1(6,`button`,83),rv(`click`,function(){Qp(t);let i=DT(2);return Kp(i.togglePlaybackLoop())}),qT(7,` ⟲ Loop `),hf$1()()}if(s&2){let t=DT(2);rb(),iT(t.playbackActive?2:1),rb(2),tv(`value`,t.playbackProgress),rb(2),yv(``,t.formatTime(t.playbackElapsedSeconds),` / `,t.formatTime(t.recordingDurationSeconds())),rb(),uv(`btn-light`,t.playbackLoop)(`btn-outline-light`,!t.playbackLoop)}}function kx(s,e){if(s&1&&(ff$1(0,`div`,54),rT(1,Ux,5,2,`div`,79),rT(2,Bx,8,8,`div`,80),hf$1()),s&2){let t=DT();rb(),iT(t.distanceHudEnabled?1:-1),rb(),iT(t.lastRecording?2:-1)}}var Vs=[15947045,2829634,9422748,16171843,5925757,16777215];var zx=.2;var Hx=4;var Vx=1.4;var Gx=45;var Td=.05;var Wx=.15;var wd=4;var Zc=4;var Xx=8;var Yx=180;var qx=5;var jx={r:.95,g:.95,b:1};var Zx=150;var Kx=3;var Jx={r:.9,g:.8,b:.5};var $x=200;var Qx=6;var ey={r:1,g:1,b:.9};var Wr=20;var ty=.25;var Kc=2;var ny=1.5;var fl=12;var Ad=5;var Cd=8;var iy=new R(0,1,0);var Rd=.008;var Pd={cube:0,pyramid:1,octahedron:2,tetrahedron:3,sphere:4,torus:5,cylinder:6,cone:7,icosahedron:8,duck:9,light:11,custom:15,wave:13,fire:14,sand:16,snow:17,starfield:18,ground:20,waypoint:0,terrain:0,galaxy:0};var Id=`#f4f6f8`;var Dd=16776422;var Gs=1;var Xr=20;var sy=5;var ry=1.4;var Ld=16711935;var ay=9.8;var oy=.5;var ly=.3;var Jc=100;var $c=92955807;var Qc=20;var eh=32;var th=3;var cy=2;var hy=120;var uy=1;var dy=500;var fy=0;var py=100;var li=2500;var _y=.15;var Nd=1.8;var xy=.6;var Ud=class s$2{constructor(e,t,n){this.cdr=e;this.projectsService=t;this.recordingsService=n}cdr;projectsService;recordingsService;canvasRef;scene;camera;renderer;controls;group=new tn;frameId=0;raycaster=new Er;duckTemplate=null;customModelTemplate=null;customModelReady=!1;customModelName=``;clock=new Tr;nextObjectId=0;nextWaypointIndex=0;pathLine=null;gridHelper=null;labels=[];pendingLabelText=``;gridVisible=!0;flyAlongPathDurationSeconds=10;flyAlongPathLoop=!1;cameraPathError=``;selected=null;highlight=null;clipboard=null;dragging=!1;dragPlane=new en;lastPointerX=0;lastPointerY=0;mode=`select`;hasSelection=!1;duckReady=!1;debugLogEnabled=!1;backgroundColorHex=Id;distanceHudEnabled=!1;gamepadConnected=!1;gamepadEnabled=!0;gamepadIndex=null;gamepadPrevButtons=[];projects=[];selectedProjectId=null;projectName=``;projectsLoading=!1;projectSaving=!1;projectError=``;projectSuccessMessage=``;recording=!1;recordingPaused=!1;recordEvents=[];recordInitialState=null;recordStartMs=0;recordTotalPausedMs=0;recordPauseStartMs=0;lastRecording=null;playbackActive=!1;playbackPaused=!1;playbackProgress=0;playbackElapsedSeconds=0;playbackTotalSeconds=0;playbackLoop=!1;playbackData=null;playbackStartMs=0;playbackTotalPausedMs=0;playbackPauseStartMs=0;playbackCursor=0;recordings=[];selectedRecordingId=null;recordingName=``;recordingsLoading=!1;recordingSaving=!1;recordingError=``;recordingSuccessMessage=``;shapeTypes=[{type:`cube`,label:`Cube`},{type:`sphere`,label:`Sphere`},{type:`cone`,label:`Cone`},{type:`torus`,label:`Torus`},{type:`cylinder`,label:`Cylinder`},{type:`icosahedron`,label:`Icosahedron`},{type:`octahedron`,label:`Octahedron`},{type:`tetrahedron`,label:`Tetrahedron`},{type:`pyramid`,label:`Pyramid`},{type:`duck`,label:`Duck`},{type:`wave`,label:`Wave`},{type:`fire`,label:`Fire`},{type:`snow`,label:`Snow`},{type:`sand`,label:`Sand`},{type:`starfield`,label:`Star Field`},{type:`light`,label:`Light`},{type:`ground`,label:`Ground`},{type:`terrain`,label:`Terrain`},{type:`galaxy`,label:`Galaxy`}];ngAfterViewInit(){this.initScene(),this.loadDuckModel(),this.addShape(`cube`),this.addShape(`sphere`),this.animate(),this.loadProjectList()}ngOnDestroy(){cancelAnimationFrame(this.frameId);let e=this.renderer?.domElement;e&&(e.removeEventListener(`pointerdown`,this.onPointerDown),e.removeEventListener(`pointermove`,this.onPointerMove),e.removeEventListener(`pointerup`,this.onPointerUp),e.removeEventListener(`pointerleave`,this.onPointerUp),e.removeEventListener(`wheel`,this.onWheel)),this.controls?.removeEventListener(`change`,this.onControlsChange),document.removeEventListener(`fullscreenchange`,this.onFullscreenChange),window.removeEventListener(`gamepadconnected`,this.onGamepadConnected),window.removeEventListener(`gamepaddisconnected`,this.onGamepadDisconnected),this.controls?.dispose(),this.disposeGroup(),this.renderer?.dispose()}initScene(){let e=this.canvasRef.nativeElement,t=e.parentElement?.clientWidth||800,n=500;this.scene=new rr,this.scene.background=new Ae(this.backgroundColorHex),this.scene.add(this.group),this.gridHelper=new wr(20,20,10066329,14540253),this.scene.add(this.gridHelper),this.scene.add(new Cr(5)),this.camera=new Vt(50,t/n,.1,6e3),this.camera.position.set(6,5,8),this.renderer=new il({canvas:e,antialias:!0}),this.renderer.setPixelRatio(window.devicePixelRatio||1),this.renderer.setSize(t,n),this.scene.add(new Sr(16777215,.6));let i=new Vi(16777215,.8);i.position.set(5,10,7),this.scene.add(i),this.controls=new ol(this.camera,this.renderer.domElement),this.controls.enableDamping=!0,this.controls.mouseButtons={LEFT:Gn.ROTATE},this.controls.enablePan=!1,this.controls.enableRotate=!1,this.controls.addEventListener(`change`,this.onControlsChange);let r=this.renderer.domElement;r.addEventListener(`pointerdown`,this.onPointerDown),r.addEventListener(`pointermove`,this.onPointerMove),r.addEventListener(`pointerup`,this.onPointerUp),r.addEventListener(`pointerleave`,this.onPointerUp),r.addEventListener(`wheel`,this.onWheel,{passive:!1}),this.pathLine=new ki(new Qe,new Ut({color:Ld})),this.pathLine.visible=!1,this.scene.add(this.pathLine),document.addEventListener(`fullscreenchange`,this.onFullscreenChange),window.addEventListener(`gamepadconnected`,this.onGamepadConnected),window.addEventListener(`gamepaddisconnected`,this.onGamepadDisconnected)}onFullscreenChange=()=>{this.resizeRenderer()};onWindowResize(){this.resizeRenderer()}resizeRenderer(){if(!this.renderer||!this.camera)return;let e=this.canvasRef.nativeElement.parentElement;if(!e)return;let t=e.clientWidth||800,n=document.fullscreenElement===e?window.innerHeight:500;this.camera.aspect=t/n,this.camera.updateProjectionMatrix(),this.renderer.setSize(t,n)}toggleFullscreen(){let e=this.canvasRef.nativeElement.parentElement;e&&(document.fullscreenElement===e?document.exitFullscreen():e.requestFullscreen())}loadDuckModel(){let e=new cl;e.setPath(`assets/models/duck/`),e.load(`duck.mtl`,t=>{t.preload();let n=new Gr;n.setMaterials(t),n.setPath(`assets/models/duck/`),n.load(`duck.obj`,i=>{let r=new Sn().setFromObject(i),a=r.getSize(new R),o=r.getCenter(new R),c=Vx/(Math.max(a.x,a.y,a.z)||1);i.position.sub(o),i.scale.setScalar(c);let l=new tn;l.add(i),this.duckTemplate=l,this.duckReady=!0,this.cdr.markForCheck()})},void 0,t=>console.error(`Failed to load duck model:`,t))}loadCustomModel(e){let t=e.target.files?.[0];if(!t)return;let n=URL.createObjectURL(t);new Gr().load(n,r=>{URL.revokeObjectURL(n);let a=new Sn().setFromObject(r),o=a.getSize(new R),c=a.getCenter(new R),l=ry/(Math.max(o.x,o.y,o.z)||1);r.position.sub(c),r.scale.setScalar(l),r.traverse(d=>{d instanceof Lt&&(d.material=new vi({color:Vs[Math.floor(Math.random()*Vs.length)]}))});let u=new tn;u.add(r),this.customModelTemplate=u,this.customModelReady=!0,this.customModelName=t.name,this.log(`custom model loaded`,t.name),this.cdr.markForCheck()},void 0,r=>{URL.revokeObjectURL(n),console.error(`Failed to load custom model:`,r)})}disposeObject(e){this.detachLabel(e),e.traverse(t=>{t instanceof Lt&&(t.geometry.dispose(),(Array.isArray(t.material)?t.material:[t.material]).forEach(n=>n.dispose()))})}disposeGroup(){for(let e of[...this.group.children])this.group.remove(e),this.disposeObject(e)}makeGeometry(e){switch(e){case`cube`:return new ri(1,1,1);case`sphere`:return new Is(.7,24,16);case`cone`:return new Cs(.7,1.2,20);case`torus`:return new gr(.6,.25,16,32);case`cylinder`:return new As(.6,.6,1.2,24);case`icosahedron`:return new dr(.8);case`octahedron`:return new fr(.8);case`tetrahedron`:return new mr(.8);case`pyramid`:return new Cs(.8,1.2,4);case`ground`:return new ri(20,.2,20)}}createWave(){let e=2/Wr,t=[];for(let a=0;a<=Wr;a++){let o=-1+a*e;for(let c=0;c<Wr;c++)t.push(-1+c*e,o,-1+(c+1)*e,o)}for(let a=0;a<=Wr;a++){let o=-1+a*e;for(let c=0;c<Wr;c++)t.push(o,-1+c*e,o,-1+(c+1)*e)}let n=t.length/2,i=new Qe;i.setAttribute(`position`,new vt(new Float32Array(n*3),3));let r=new sn(i,new Ut({color:3108787}));return r.userData.effectType=`wave`,r.userData.waveXZ=t,r.userData.waveTime=0,this.updateWave(r,0),r}updateWave(e,t){let n=(e.userData.waveTime||0)+t;e.userData.waveTime=n;let i=n*ny,r=e.userData.waveXZ,a=e.geometry.getAttribute(`position`);for(let o=0;o<r.length/2;o++){let c=r[o*2],l=r[o*2+1],u=ty*(Math.sin(Kc*c+i)+.5*Math.sin(Kc*1.3*l+i*.7)+.3*Math.sin(Kc*2.1*(c+l)+i*1.2));a.setXYZ(o,c,u,l)}a.needsUpdate=!0}createFire(){let e=new tn;e.userData.effectType=`fire`,e.userData.fireTime=0;let t=[];for(let u=0;u<Ad;u++){let d=2*Math.PI*u/Ad;t.push(.5*Math.cos(d),0,.5*Math.sin(d),-.1*Math.cos(d),.15,-.1*Math.sin(d))}let n=new Qe;n.setAttribute(`position`,new Ve(t,3)),e.add(new sn(n,new Ut({color:6701081})));let i=[];for(let u=0;u<fl;u++)i.push({bx:(Math.random()-.5)*.6,height:.8+Math.random()*.8,bz:(Math.random()-.5)*.6,freq:.5+Math.random()*1.5});let r=new Float32Array(fl*2*3);for(let u=0;u<fl;u++)r.set([1,.3,0,1,.9,.2],u*6);let a=new Qe;a.setAttribute(`position`,new vt(new Float32Array(fl*2*3),3)),a.setAttribute(`color`,new vt(r,3));let o=new sn(a,new Ut({vertexColors:!0}));o.userData.seeds=i,e.add(o),e.userData.flames=o;let c=new Qe;c.setAttribute(`position`,new vt(new Float32Array(Cd*3),3));let l=new Ln(c,new pn({color:16750848,size:.05}));return e.add(l),e.userData.embers=l,this.updateFire(e,0),e}updateFire(e,t){let n=(e.userData.fireTime||0)+t;e.userData.fireTime=n;let i=e.userData.flames,r=i.userData.seeds,a=i.geometry.getAttribute(`position`);r.forEach((l,u)=>{let d=.3*Math.sin(l.freq*n*4+u),h=.15*Math.sin(l.freq*n*2+u*1.7),f=.1*Math.cos(l.freq*n*1.5+u*2.3);a.setXYZ(u*2,l.bx,.1,l.bz),a.setXYZ(u*2+1,l.bx+h,l.height+d,l.bz+f)}),a.needsUpdate=!0;let c=e.userData.embers.geometry.getAttribute(`position`);for(let l=0;l<Cd;l++){let u=n+l*.5,d=(u*.8+l*.7)%3;c.setXYZ(l,.2*Math.sin(u*1.3+l),.5+d*.5,.15*Math.cos(u*.9+l*2))}c.needsUpdate=!0}respawnParticle(e,t){if(e===`snow`)t.x=Math.random()*8-4,t.y=3+Math.random()*3,t.z=Math.random()*8-4,t.vx=Math.random()*.4-.2,t.vy=-1+Math.random()*.7,t.vz=Math.random()*.4-.2,t.life=1+Math.random()*4;else if(e===`sand`)t.x=Math.random()*6-3,t.y=Math.random()*4,t.z=Math.random()*6-3,t.vx=.5+Math.random()*1.5,t.vy=-1.5+Math.random()*1.2,t.vz=Math.random()*.6-.3,t.life=.5+Math.random()*2.5;else{let n=Math.random()*2*Math.PI,i=Math.random()*Math.PI-Math.PI/2,r=3+Math.random()*3;t.x=r*Math.cos(i)*Math.cos(n),t.y=r*Math.cos(i)*Math.sin(n),t.z=r*Math.sin(i),t.vx=0,t.vy=0,t.vz=0,t.life=1+Math.random()*5}}particleLifeMax(e){return e===`snow`?qx:e===`sand`?Kx:Qx}particleBaseCount(e){return e===`snow`?Yx:e===`sand`?Zx:$x}particleBaseColor(e){return e===`snow`?jx:e===`sand`?Jx:ey}createParticleEffect(e,t){let n=this.particleBaseCount(e),i=[];for(let c=0;c<n;c++){let l={x:0,y:0,z:0,vx:0,vy:0,vz:0,life:0};this.respawnParticle(e,l),i.push(l)}let r=new Qe;r.setAttribute(`position`,new vt(new Float32Array(n*3),3)),r.setAttribute(`color`,new vt(new Float32Array(n*3),3));let a=new Ln(r,new pn({size:t,vertexColors:!0}));a.userData.effectType=e,a.userData.particles=i,a.userData.baseCount=n,a.userData.particleDensity=1,a.userData.particleSpeed=1;let o=this.particleBaseColor(e);return a.userData.particleColorOverride=new Ae(o.r,o.g,o.b),e===`starfield`?this.updateStarField(a,0):this.updateFallingParticles(a,0),a}createSnow(){return this.createParticleEffect(`snow`,.08)}createSand(){return this.createParticleEffect(`sand`,.06)}createStarField(){return this.createParticleEffect(`starfield`,.05)}terrainHeightAt(e,t,n,i){let r=i*12.9898,a=i*78.233,o=0,c=1,l=.15,u=0;for(let d=0;d<4;d++)o+=e.noise((t+r)*l,(n+a)*l,i%97)*c,u+=c,c*=.5,l*=2;return o/u}createTerrainGeometry(e){let t=wt.clamp(e.size,uy,dy),n=Math.round(wt.clamp(e.resolution,cy,hy)),i=wt.clamp(e.heightScale,fy,py),r=new hl,a=t/2,o=[];for(let h=0;h<=n;h++){let f=[];for(let g=0;g<=n;g++){let y=g/n*t-a,m=h/n*t-a;f.push(this.terrainHeightAt(r,y,m,e.seed)*i)}o.push(f)}let c=[],l=h=>h/n*t-a,u=h=>h/n*t-a;for(let h=0;h<=n;h++)for(let f=0;f<n;f++)c.push(l(f),o[h][f],u(h),l(f+1),o[h][f+1],u(h));for(let h=0;h<=n;h++)for(let f=0;f<n;f++)c.push(l(h),o[f][h],u(f),l(h),o[f+1][h],u(f+1));let d=new Qe;return d.setAttribute(`position`,new Ve(c,3)),d}createTerrainObject(e){let i=new sn(this.createTerrainGeometry(e),new Ut({color:Vs[Math.floor(Math.random()*Vs.length)]}));return i.userData.effectType=`terrain`,i.userData.terrainSize=e.size,i.userData.terrainResolution=e.resolution,i.userData.terrainHeightScale=e.heightScale,i.userData.terrainSeed=e.seed,i}randomTerrainParams(){return{size:Qc,resolution:eh,heightScale:th,seed:Math.floor(Math.random()*1e9)}}terrainParamsFromEntry(e){return{size:e.terrainSize??Qc,resolution:e.terrainResolution??eh,heightScale:e.terrainHeightScale??th,seed:e.terrainSeed??0}}terrainParamsOf(e){return{size:e.userData.terrainSize??Qc,resolution:e.userData.terrainResolution??eh,heightScale:e.userData.terrainHeightScale??th,seed:e.userData.terrainSeed??0}}applyTerrainParams(e,t){let n=e;n.geometry.dispose(),n.geometry=this.createTerrainGeometry(t),e.userData.terrainSize=t.size,e.userData.terrainResolution=t.resolution,e.userData.terrainHeightScale=t.heightScale,e.userData.terrainSeed=t.seed}isTerrainSelected(){return this.selected?.userData.effectType===`terrain`}terrainParamsForSelected(){return this.selected?this.terrainParamsOf(this.selected):this.randomTerrainParams()}onTerrainSizeChange(e){if(!this.selected)return;let t=Number(e.target.value),n=this.terrainParamsOf(this.selected);this.applyTerrainParams(this.selected,s(r({},n),{size:Number.isFinite(t)?t:n.size})),this.log(`terrain size ->`,t)}onTerrainResolutionChange(e){if(!this.selected)return;let t=Number(e.target.value),n=this.terrainParamsOf(this.selected);this.applyTerrainParams(this.selected,s(r({},n),{resolution:Number.isFinite(t)?t:n.resolution})),this.log(`terrain resolution ->`,t)}onTerrainHeightChange(e){if(!this.selected)return;let t=Number(e.target.value),n=this.terrainParamsOf(this.selected);this.applyTerrainParams(this.selected,s(r({},n),{heightScale:Number.isFinite(t)?t:n.heightScale})),this.log(`terrain height ->`,t)}regenerateTerrain(){if(!this.selected)return;let e=this.terrainParamsOf(this.selected);this.applyTerrainParams(this.selected,s(r({},e),{seed:Math.floor(Math.random()*1e9)})),this.log(`terrain reseeded`)}createGalaxy(){let a=new Float32Array(21900),o=new Float32Array(21900),c=0,l=(y,m,p,S,C,v)=>{a[c*3]=y,a[c*3+1]=m,a[c*3+2]=p,o[c*3]=S,o[c*3+1]=C,o[c*3+2]=v,c++},u=.05,d=.29,h=4*Math.PI;for(let y=0;y<4;y++){let m=2*Math.PI*y/4;for(let p=0;p<1400;p++){let S=Math.random()*h,C=Math.min(1,u*Math.exp(d*S)),v=S+m,E=(.05+.12*(1-C))*(Math.random()-.5)*2,M=(C*Math.cos(v)+E*Math.cos(v+Math.PI/2))*li,w=(C*Math.sin(v)+E*Math.sin(v+Math.PI/2))*li,x=(Math.random()-.5)*.02*(1-C*.7)*li,T=1-C;l(M,x,w,.6+T*.4,.7+T*.25,.9-T*.3)}}for(let y=0;y<900;y++){let m=Math.pow(Math.random(),2)*.18,p=Math.random()*2*Math.PI,S=m*Math.cos(p)*li,C=m*Math.sin(p)*li;l(S,(Math.random()-.5)*.09*(1-m/.18)*li,C,1,.95,.85)}for(let y=0;y<800;y++){let m=Math.random(),p=Math.random()*2*Math.PI,S=m*Math.cos(p)*li,C=m*Math.sin(p)*li;l(S,(Math.random()-.5)*.02*(1-m*.7)*li,C,.7,.75,.85)}let f=new Qe;f.setAttribute(`position`,new vt(a,3)),f.setAttribute(`color`,new vt(o,3));let g=new Ln(f,new pn({size:12,vertexColors:!0,sizeAttenuation:!0}));return g.userData.effectType=`galaxy`,g}rebuildParticleCount(e,t){let n=e.userData.effectType,i=e.userData.baseCount,r=Math.max(1,Math.round(i*t)),a=[];for(let c=0;c<r;c++){let l={x:0,y:0,z:0,vx:0,vy:0,vz:0,life:0};this.respawnParticle(n,l),a.push(l)}let o=e;o.geometry.setAttribute(`position`,new vt(new Float32Array(r*3),3)),o.geometry.setAttribute(`color`,new vt(new Float32Array(r*3),3)),o.userData.particles=a,o.userData.particleDensity=Math.max(.1,t)}updateFallingParticles(e,t){let n=e,i=n.userData.effectType,r=n.userData.particles,a=n.userData.particleSpeed||1,o=this.particleLifeMax(i),c=n.userData.particleColorOverride,l=n.geometry.getAttribute(`position`),u=n.geometry.getAttribute(`color`);r.forEach((d,h)=>{d.x+=d.vx*t*a,d.y+=d.vy*t*a,d.z+=d.vz*t*a,d.life-=t,d.life<=0&&this.respawnParticle(i,d);let f=Math.max(0,d.life/o);l.setXYZ(h,d.x,d.y,d.z),u.setXYZ(h,Math.min(c.r*f+c.r*.3*(1-f),1),Math.min(c.g*f+c.g*.3*(1-f),1),Math.min(c.b*f+c.b*.3*(1-f),1))}),l.needsUpdate=!0,u.needsUpdate=!0}updateStarField(e,t){let n=e,i=n.userData.particles,r=n.userData.particleSpeed||1,a=n.userData.particleColorOverride,o=n.geometry.getAttribute(`position`),c=n.geometry.getAttribute(`color`);i.forEach((l,u)=>{o.setXYZ(u,l.x,l.y,l.z);let d=.4+.6*Math.abs(Math.sin(l.life*3*r));c.setXYZ(u,a.r*d,a.g*d,a.b*d),l.life-=t,l.life<=0&&this.respawnParticle(`starfield`,l)}),o.needsUpdate=!0,c.needsUpdate=!0}isParticleEffect(e){let t=e.userData.effectType;return t===`snow`||t===`sand`||t===`starfield`}updateEffects(e){for(let t of this.group.children)switch(t.userData.effectType){case`wave`:this.updateWave(t,e);break;case`fire`:this.updateFire(t,e);break;case`snow`:case`sand`:this.updateFallingParticles(t,e);break;case`starfield`:this.updateStarField(t,e)}}buildLightGizmo(){let n=[];for(let r=0;r<16;r++){let a=2*Math.PI*r/16,o=2*Math.PI*(r+1)/16;n.push(.4*Math.cos(a),.4*Math.sin(a),0,.4*Math.cos(o),.4*Math.sin(o),0)}for(let r=0;r<16;r++){let a=2*Math.PI*r/16,o=2*Math.PI*(r+1)/16;n.push(0,.4*Math.sin(a),.4*Math.cos(a),0,.4*Math.sin(o),.4*Math.cos(o))}n.push(0,0,0,0,-1.5,0,0,-1.5,0,.2,-1.2,0,0,-1.5,0,-.2,-1.2,0,0,-1.5,0,0,-1.2,.2,0,-1.5,0,0,-1.2,-.2);let i=new Qe;return i.setAttribute(`position`,new Ve(n,3)),new sn(i,new Ut({color:Dd}))}createLight(){let e=new tn;e.userData.effectType=`light`,e.userData.directional=!0,e.userData.intensity=Gs,e.userData.lightRadius=Xr,e.add(this.buildLightGizmo());let t=new Dt;t.position.set(0,-1.5,0),e.add(t),e.userData.targetAnchor=t;let n=new Vi(Dd,Gs);return n.target=t,e.add(n),e.userData.light=n,e}toggleLightMode(e){let t=e.userData.light,n=t.color.getHex(),i=e.userData.intensity,r=!e.userData.directional;e.remove(t);let a;if(r){let o=new Vi(n,i);o.target=e.userData.targetAnchor,a=o}else a=new br(n,i,e.userData.lightRadius);e.add(a),e.userData.light=a,e.userData.directional=r}isWaypoint(e){return e.userData.effectType===`waypoint`}waypointCount(){return this.group.children.filter(e=>this.isWaypoint(e)).length}sortedWaypointPositions(){return this.group.children.filter(e=>this.isWaypoint(e)).sort((e,t)=>e.userData.waypointIndex-t.userData.waypointIndex).map(e=>e.position.clone())}updatePathLine(){if(!this.pathLine)return;let e=this.sortedWaypointPositions();if(e.length<2){this.pathLine.visible=!1;return}let t=new Ps(e);this.pathLine.geometry.dispose(),this.pathLine.geometry=new Qe().setFromPoints(t.getPoints(100)),this.pathLine.visible=!0}createTextSprite(e){let t=document.createElement(`canvas`);t.width=256,t.height=64;let n=t.getContext(`2d`);n.font=`bold 32px sans-serif`,n.textAlign=`center`,n.textBaseline=`middle`,n.lineJoin=`round`,n.strokeStyle=`rgba(0, 0, 0, 0.85)`,n.lineWidth=6,n.strokeText(e,t.width/2,t.height/2),n.fillStyle=`#ffffff`,n.fillText(e,t.width/2,t.height/2);let a=new cr(new Es({map:new ws(t),depthTest:!1,depthWrite:!1,transparent:!0}));return a.renderOrder=999,a}attachLabel(e,t){this.detachLabel(e);let n=Math.max(.7*e.scale.x,.3),i=new ki(new Qe().setFromPoints([new R,new R]),new Ut({color:16777215,transparent:!0,opacity:.6,depthTest:!1}));i.renderOrder=998;let r=this.createTextSprite(t);this.scene.add(i),this.scene.add(r),this.labels.push({target:e,radius:n,line:i,sprite:r,screenOffsetPx:new Se(0,0)}),e.userData.labelText=t}detachLabel(e){let t=this.labels.findIndex(i=>i.target===e);if(t===-1)return;let[n]=this.labels.splice(t,1);this.scene.remove(n.line),this.scene.remove(n.sprite),n.line.geometry.dispose(),n.line.material.dispose(),n.sprite.material.map?.dispose(),n.sprite.material.dispose(),delete e.userData.labelText}updateLabels(e){if(!this.labels.length)return;let t=this.renderer.domElement,n=t.clientWidth||1,i=t.clientHeight||1,r=Math.tan(wt.degToRad(this.camera.fov)/2),a=i*Td,c=a*wd/2,l=a/2,u=new R;this.camera.getWorldDirection(u);let d=[];for(let y of this.labels){let m=y.target.position,p=Math.max(this.camera.position.distanceTo(m),.01),S=Math.max(2*p*r*Td,Wx),C=S*wd;y.sprite.scale.set(C,S,1);let v=m.clone().project(this.camera),E=(v.x*.5+.5)*n,M=(1-(v.y*.5+.5))*i,w=Math.max(y.radius/(p*r)*(i/2),2),x=M-(w+l+Zc),T=m.clone().sub(this.camera.position).dot(u)>0,P=E+w>0&&E-w<n&&M+w>0&&M-w<i;d.push({label:y,ndcZ:v.z,onScreen:T&&P&&v.z>-1&&v.z<1,surfacePos:m.clone().add(new R(0,y.radius,0)),bodyScreenX:E,bodyScreenY:M,bodyRadiusPx:w,naturalX:E,naturalY:x,desiredX:E,desiredY:x})}let h=d.filter(y=>y.onScreen).sort((y,m)=>m.bodyRadiusPx-y.bodyRadiusPx),f=[];for(let y of h){let m=d.filter(E=>E!==y&&E.onScreen),p=(E,M)=>{let w=E-c,x=E+c,T=M-l,P=M+l;for(let I of f)if(w<I.maxX&&x>I.minX&&T<I.maxY&&P>I.minY)return!0;for(let I of m){let F=I.bodyScreenX-I.bodyRadiusPx,H=I.bodyScreenX+I.bodyRadiusPx,U=I.bodyScreenY-I.bodyRadiusPx,z=I.bodyScreenY+I.bodyRadiusPx;if(w<H&&x>F&&T<z&&P>U)return!0}return!1},S=y.bodyRadiusPx+c+Zc,C=[{x:y.naturalX,y:y.naturalY},{x:y.bodyScreenX+S,y:y.bodyScreenY},{x:y.bodyScreenX-S,y:y.bodyScreenY}],v=C.find(E=>!p(E.x,E.y));if(!v){let E=C[0].y,M=C[0].x,w=f.length+m.length+1;for(let x=0;x<w&&p(M,E);x++)E+=a+Zc;v={x:M,y:E}}f.push({minX:v.x-c,maxX:v.x+c,minY:v.y-l,maxY:v.y+l}),y.desiredX=v.x,y.desiredY=v.y}let g=1-Math.exp(-Xx*e);for(let y of d){if(y.label.sprite.visible=y.onScreen,y.label.line.visible=y.onScreen,!y.onScreen)continue;let m=y.desiredX-y.naturalX,p=y.desiredY-y.naturalY;y.label.screenOffsetPx.x+=(m-y.label.screenOffsetPx.x)*g,y.label.screenOffsetPx.y+=(p-y.label.screenOffsetPx.y)*g;let S=y.naturalX+y.label.screenOffsetPx.x,C=y.naturalY+y.label.screenOffsetPx.y,M=new R(S/n*2-1,-(C/i*2-1),y.ndcZ).unproject(this.camera);y.label.sprite.position.copy(M);let w=y.label.line.geometry.getAttribute(`position`);w.setXYZ(0,y.surfacePos.x,y.surfacePos.y,y.surfacePos.z),w.setXYZ(1,M.x,M.y,M.z),w.needsUpdate=!0}}hasLabelOnSelected(){return!!this.selected?.userData.labelText}onPendingLabelTextInput(e){this.pendingLabelText=e.target.value}addLabelToSelected(){if(!this.selected||!this.pendingLabelText.trim())return;let e=this.pendingLabelText.trim();this.attachLabel(this.selected,e),this.pendingLabelText=``,this.recordEvent(`set_label`,this.selected.userData.id,{labelText:e}),this.log(`label ->`,e),this.cdr.markForCheck()}removeLabelFromSelected(){this.selected&&(this.detachLabel(this.selected),this.recordEvent(`set_label`,this.selected.userData.id,{labelText:``}),this.log(`label removed`),this.cdr.markForCheck())}pythonCameraFields(e,t){let n=e.clone().sub(t),i=new ai().setFromVector3(n);return{distance:i.radius,rotationX:wt.radToDeg(i.phi)-90,rotationY:wt.radToDeg(i.theta)}}onFlyDurationChange(e){let t=Number(e.target.value);this.flyAlongPathDurationSeconds=Number.isFinite(t)&&t>0?t:10}onFlyLoopChange(e){this.flyAlongPathLoop=e.target.checked}async flyAlongPath(){let e=this.sortedWaypointPositions();if(this.cameraPathError=``,e.length<2){this.cameraPathError=`Place at least 2 waypoints before flying the path.`,this.cdr.markForCheck();return}let t=Math.max(1,this.flyAlongPathDurationSeconds||10),n=new Ps(e,this.flyAlongPathLoop),i=30,r$2=t*i,a=[];for(let c=0;c<=r$2;c++){let l=c/r$2,u=n.getPointAt(Math.min(l,1)),d=n.getTangentAt(Math.min(l,1)),h=u.clone().add(d);a.push(r({t:Math.round(c/i*1e3),type:`camera_move`,position:u.toArray(),target:h.toArray()},this.pythonCameraFields(u,h)))}let o=this.serializeScene();o.objects=o.objects.filter(c=>c.shapeType!==`waypoint`),this.lastRecording={events:a,initialState:o,durationMs:t*1e3},this.selectedRecordingId=null,this.recordingName=``,this.log(`flew along path`,{waypoints:e.length,durationSeconds:t}),await this.startPlayback()}createShapeObject(e,t){let n;if(e===`duck`){if(!this.duckTemplate)return null;n=this.duckTemplate.clone(!0)}else if(e===`wave`)n=this.createWave();else if(e===`fire`)n=this.createFire();else if(e===`snow`)n=this.createSnow();else if(e===`sand`)n=this.createSand();else if(e===`starfield`)n=this.createStarField();else if(e===`terrain`)n=this.createTerrainObject(t??this.randomTerrainParams());else if(e===`galaxy`)n=this.createGalaxy();else if(e===`light`)n=this.createLight();else if(e===`waypoint`)n=new Lt(new Is(.15,8,6),new Bi({color:Ld,wireframe:!0})),n.userData.effectType=`waypoint`,n.userData.waypointIndex=this.nextWaypointIndex++;else if(e===`custom`){if(!this.customModelTemplate)return null;n=this.customModelTemplate.clone(!0)}else n=new Lt(this.makeGeometry(e),new vi({color:Vs[Math.floor(Math.random()*Vs.length)]}));return n.userData.shapeType=e,n.userData.id=this.nextObjectId++,n}findById(e){return this.group.children.find(t=>t.userData.id===e)??null}addShape(e){let t=this.createShapeObject(e);if(!t)return;let n=this.selected?this.selected.position.clone():new R;t.position.copy(n).add(new R((Math.random()-.5)*2,(Math.random()-.5)*2,(Math.random()-.5)*2)),this.group.add(t),this.setSelected(t),this.log(`add shape`,e),this.recordEvent(`add_shape`,t.userData.id,{shapeType:e,position:t.position.toArray(),quaternion:t.quaternion.toArray(),scale:t.scale.x,color:this.materialHexOf(t)})}deleteSelected(){this.selected&&(this.log(`delete shape`),this.recordEvent(`delete_object`,this.selected.userData.id),this.group.remove(this.selected),this.disposeObject(this.selected),this.setSelected(null))}hasClipboard(){return!!this.clipboard}copySelected(){if(!this.selected)return;let e={shapeType:this.selected.userData.shapeType||`cube`,position:this.selected.position.toArray(),quaternion:this.selected.quaternion.toArray(),scale:this.selected.scale.x,color:this.materialHexOf(this.selected),rotationSpeed:this.selected.userData.rotationSpeed||0};this.selected.userData.effectType===`light`&&(e.lightIntensity=this.selected.userData.intensity,e.lightRadius=this.selected.userData.lightRadius,e.lightDirectional=this.selected.userData.directional),this.selected.userData.gravity&&(e.gravity=!0),this.selected.userData.textureKind&&(e.textureKind=this.selected.userData.textureKind),this.selected.userData.labelText&&(e.labelText=this.selected.userData.labelText),this.selected.userData.rotationAxis&&(e.rotationAxis=this.selected.userData.rotationAxis),this.selected.userData.wireframe&&(e.wireframe=!0),this.selected.userData.effectType===`terrain`&&(e.terrainSize=this.selected.userData.terrainSize,e.terrainResolution=this.selected.userData.terrainResolution,e.terrainHeightScale=this.selected.userData.terrainHeightScale,e.terrainSeed=this.selected.userData.terrainSeed),this.clipboard=e,this.log(`copied`,e.shapeType)}pasteClipboard(){if(!this.clipboard)return;let e=this.clipboard.shapeType,t=this.createShapeObject(e,e===`terrain`?this.terrainParamsFromEntry(this.clipboard):void 0);t&&(t.position.fromArray(this.clipboard.position).add(new R(.5,.5,.5)),t.quaternion.fromArray(this.clipboard.quaternion),t.scale.setScalar(this.clipboard.scale),this.applyObjectFields(t,this.clipboard),this.group.add(t),this.setSelected(t),this.log(`pasted`,e),this.recordEvent(`add_shape`,t.userData.id,{shapeType:e,position:t.position.toArray(),quaternion:t.quaternion.toArray(),scale:t.scale.x,color:this.materialHexOf(t),rotationSpeed:this.clipboard.rotationSpeed,gravity:this.clipboard.gravity,textureKind:this.clipboard.textureKind,labelText:this.clipboard.labelText,rotationAxis:this.clipboard.rotationAxis,wireframe:this.clipboard.wireframe,lightIntensity:this.clipboard.lightIntensity,lightRadius:this.clipboard.lightRadius,lightDirectional:this.clipboard.lightDirectional,terrainSize:this.clipboard.terrainSize,terrainResolution:this.clipboard.terrainResolution,terrainHeightScale:this.clipboard.terrainHeightScale,terrainSeed:this.clipboard.terrainSeed}))}clearAll(){this.log(`clear all`),this.disposeGroup(),this.setSelected(null)}deselect(){this.setSelected(null)}toggleDebugLog(){this.debugLogEnabled=!this.debugLogEnabled}toggleDistanceHud(){this.distanceHudEnabled=!this.distanceHudEnabled}toggleGrid(){this.gridVisible=!this.gridVisible,this.gridHelper&&(this.gridHelper.visible=this.gridVisible)}setBackgroundColor(e){let t=e.target.value;this.backgroundColorHex=t,this.scene.background=new Ae(t),this.recordSceneEvent(`set_background`,{backgroundColor:t}),this.log(`background ->`,t)}log(e,t){this.debugLogEnabled&&(t!==void 0?console.log(`[3D] ${e}`,t):console.log(`[3D] ${e}`))}setMode(e){this.mode=e,this.dragging=!1,this.controls.enableRotate=e===`camera`,this.controls.enableZoom=e!==`scale`,this.log(`mode ->`,e)}toggleAutoRotate(){if(!this.selected)return;let e=this.selected.userData.rotationSpeed||0;this.selected.userData.rotationSpeed=e!==0?0:Gx,this.log(`auto-rotate ->`,this.selected.userData.rotationSpeed),this.recordEvent(`set_rotation_speed`,this.selected.userData.id,{rotationSpeed:this.selected.userData.rotationSpeed}),this.cdr.markForCheck()}isGravityOn(){return!!this.selected?.userData.gravity}toggleGravity(){if(!this.selected)return;let e=!this.selected.userData.gravity;this.selected.userData.gravity=e,this.selected.userData.velocity={x:0,y:0,z:0},this.selected.userData.onSurface=!1,this.log(`gravity ->`,e),this.recordEvent(`set_gravity`,this.selected.userData.id,{gravity:e}),this.cdr.markForCheck()}onAutoRotateSpeedChange(e){if(!this.selected)return;let t=Number(e.target.value);this.selected.userData.rotationSpeed=Number.isFinite(t)?t:0,this.log(`auto-rotate speed ->`,this.selected.userData.rotationSpeed),this.recordEvent(`set_rotation_speed`,this.selected.userData.id,{rotationSpeed:this.selected.userData.rotationSpeed})}isAutoRotating(){return!!this.selected&&(this.selected.userData.rotationSpeed||0)!==0}autoRotateSpeedForSelected(){return this.selected&&this.selected.userData.rotationSpeed||0}materialsOf(e){let t=e.material;return t?Array.isArray(t)?t:[t]:[]}createProceduralTexture(e,t){let n=document.createElement(`canvas`);n.width=256,n.height=128;let i=n.getContext(`2d`),r=new Ae(t),a=c=>{let l=r.clone().multiplyScalar(c),u=d=>Math.round(wt.clamp(d,0,1)*255);return`rgb(${u(l.r)}, ${u(l.g)}, ${u(l.b)})`};if(i.fillStyle=a(1),i.fillRect(0,0,n.width,n.height),e===`gasGiant`)for(let l=0;l<10;l++)i.fillStyle=a(l%2===0?1.15:.85),i.fillRect(0,n.height/10*l,n.width,n.height/10);else if(e===`earth`){i.fillStyle=`#3d6b35`;for(let c=0;c<18;c++)i.beginPath(),i.ellipse(Math.random()*n.width,Math.random()*n.height,15+Math.random()*35,10+Math.random()*20,Math.random()*Math.PI,0,Math.PI*2),i.fill()}else if(e===`sun`)for(let c=0;c<400;c++)i.fillStyle=a(.8+Math.random()*.6),i.beginPath(),i.arc(Math.random()*n.width,Math.random()*n.height,1+Math.random()*3,0,Math.PI*2),i.fill();else for(let c=0;c<250;c++)i.fillStyle=a(.7+Math.random()*.6),i.beginPath(),i.arc(Math.random()*n.width,Math.random()*n.height,1+Math.random()*4,0,Math.PI*2),i.fill();let o=new ws(n);return o.wrapS=_i,o.wrapT=vn,o}applyColor(e,t){let n=e.userData.particleColorOverride;if(n){n.set(t);return}let i=e.userData.textureKind;if(i){let a=e.userData.textureBaseColor??new Ae;a.set(t),e.userData.textureBaseColor=a;let o=this.createProceduralTexture(i,t);e.traverse(c=>{for(let l of this.materialsOf(c))l instanceof vi&&(l.map?.dispose(),l.map=o,l.color.set(16777215),l.needsUpdate=!0)});return}e.traverse(a=>{for(let o of this.materialsOf(a))`color`in o&&o.color.set(t),o instanceof vi&&o.map&&(o.map.dispose(),o.map=null,o.needsUpdate=!0)});let r=e.userData.light;r&&r.color.set(t)}materialHexOf(e){let t=e.userData.particleColorOverride;if(t)return`#`+t.getHexString();let n=e.userData.textureBaseColor;if(n)return`#`+n.getHexString();let i=null;return e.traverse(r=>{if(i)return;let a=this.materialsOf(r)[0];a&&`color`in a&&(i=`#`+a.color.getHexString())}),i??`#ffffff`}setSelectedColor(e){if(!this.selected)return;let t=e.target.value;this.applyColor(this.selected,t),this.log(`color ->`,t),this.recordEvent(`color_object`,this.selected.userData.id,{color:t})}selectedColorHex(){return this.selected?this.materialHexOf(this.selected):`#ffffff`}distanceFromOriginMiles(){return this.selected?this.selected.position.length()/Jc*$c:0}formatScaledUnit(e,t){return e>=1e9?(e/1e9).toFixed(2)+`B `+t:e>=1e6?(e/1e6).toFixed(2)+`M `+t:e>=1e3?(e/1e3).toFixed(1)+`K `+t:Math.round(e)+` `+t}formatMiles(e){return this.formatScaledUnit(e,`mi`)}isSolidMeshObject(e){let t=e.userData.effectType;return t===`wave`||t===`fire`||t===`light`||t===`terrain`||t===`galaxy`?!1:!this.isParticleEffect(e)}isTexturable(){return!!this.selected&&this.isSolidMeshObject(this.selected)}isWireframeToggleable(){return!!this.selected&&this.isSolidMeshObject(this.selected)}isWireframeOn(){return!!this.selected?.userData.wireframe}applyWireframe(e,t){e.traverse(n=>{for(let i of this.materialsOf(n))`wireframe`in i&&(i.wireframe=t)})}toggleWireframe(){if(!this.selected)return;let e=!this.selected.userData.wireframe;this.selected.userData.wireframe=e,this.applyWireframe(this.selected,e),this.log(`wireframe ->`,e),this.recordEvent(`set_wireframe`,this.selected.userData.id,{wireframe:e}),this.cdr.markForCheck()}textureKindForSelected(){return this.selected?.userData.textureKind??``}onTextureChange(e){if(!this.selected)return;let t=e.target.value,n=this.materialHexOf(this.selected);this.selected.userData.textureKind=t||void 0,this.applyColor(this.selected,n),this.log(`texture ->`,t||`none`),this.recordEvent(`set_texture`,this.selected.userData.id,{textureKind:t})}isParticleSelected(){return!!this.selected&&this.isParticleEffect(this.selected)}particleDensityForSelected(){return this.selected&&this.selected.userData.particleDensity||1}particleSpeedForSelected(){return this.selected&&this.selected.userData.particleSpeed||1}onParticleDensityChange(e){if(!this.selected)return;let t=Number(e.target.value);this.rebuildParticleCount(this.selected,Number.isFinite(t)?t:1),this.recordEvent(`set_particle_density`,this.selected.userData.id,{particleDensity:this.selected.userData.particleDensity}),this.log(`particle density ->`,this.selected.userData.particleDensity)}onParticleSpeedChange(e){if(!this.selected)return;let t=Number(e.target.value);this.selected.userData.particleSpeed=Number.isFinite(t)?t:1,this.recordEvent(`set_particle_speed`,this.selected.userData.id,{particleSpeed:this.selected.userData.particleSpeed}),this.log(`particle speed ->`,this.selected.userData.particleSpeed)}isLightSelected(){return!!this.selected&&this.selected.userData.effectType===`light`}isLightDirectional(){return!!this.selected&&this.selected.userData.directional}lightIntensityForSelected(){return this.selected?this.selected.userData.intensity??Gs:Gs}lightRadiusForSelected(){return this.selected?this.selected.userData.lightRadius??Xr:Xr}onToggleLightMode(){this.selected&&(this.toggleLightMode(this.selected),this.recordEvent(`set_light_mode`,this.selected.userData.id,{lightDirectional:this.selected.userData.directional}),this.log(`light mode ->`,this.selected.userData.directional?`directional`:`point`))}onLightIntensityChange(e){if(!this.selected)return;let t=Number(e.target.value),n=Number.isFinite(t)?t:Gs;this.selected.userData.intensity=n;let i=this.selected.userData.light;i&&(i.intensity=n),this.recordEvent(`set_light_intensity`,this.selected.userData.id,{lightIntensity:n}),this.log(`light intensity ->`,n)}onLightRadiusChange(e){if(!this.selected)return;let t=Number(e.target.value),n=Number.isFinite(t)?t:Xr;this.selected.userData.lightRadius=n;let i=this.selected.userData.light;i&&`distance`in i&&(i.distance=n),this.recordEvent(`set_light_radius`,this.selected.userData.id,{lightRadius:n}),this.log(`light radius ->`,n)}onKeydown(e){let t=e.target;if(t instanceof HTMLInputElement||t instanceof HTMLTextAreaElement||t instanceof HTMLSelectElement)return;let r={1:`select`,2:`rotate`,3:`scale`,4:`camera`}[e.key];if(r){this.setMode(r);return}(e.key===`Delete`||e.key===`Backspace`)&&this.hasSelection?(e.preventDefault(),this.deleteSelected()):e.key===`Escape`?this.deselect():(e.ctrlKey||e.metaKey)&&e.key.toLowerCase()===`c`&&this.hasSelection?(e.preventDefault(),this.copySelected()):(e.ctrlKey||e.metaKey)&&e.key.toLowerCase()===`v`&&this.clipboard&&(e.preventDefault(),this.pasteClipboard())}setSelected(e){this.highlight&&(this.scene.remove(this.highlight),this.highlight=null),this.selected=e,this.hasSelection=e!==null,e&&(this.highlight=new Ar(e,16766474),this.scene.add(this.highlight)),this.log(e?`select`:`deselect`),this.cdr.markForCheck()}pointerToNDC(e){let t=this.renderer.domElement.getBoundingClientRect();return new Se((e.clientX-t.left)/t.width*2-1,-((e.clientY-t.top)/t.height)*2+1)}findTopLevelObject(e){let t=e;for(;t.parent&&t.parent!==this.group;)t=t.parent;return t}raycastAtPointer(e){this.raycaster.setFromCamera(this.pointerToNDC(e),this.camera);let t=this.raycaster.intersectObjects(this.group.children,!0);return t.length>0?this.findTopLevelObject(t[0].object):null}raycastAtPointerToPlane(e){this.raycaster.setFromCamera(this.pointerToNDC(e),this.camera);let t=new R;return this.raycaster.ray.intersectPlane(this.dragPlane,t)?t:null}onPointerDown=e=>{if(e.button===1){e.preventDefault();return}if(!(e.button!==0||this.mode===`camera`)){if(this.mode===`select`){let t=this.raycastAtPointer(e);if(this.setSelected(t),!t)return}else if(!this.selected)return;if(this.dragging=!0,this.lastPointerX=e.clientX,this.lastPointerY=e.clientY,this.log(`drag start`,this.mode),this.mode===`select`){let t=new R;this.camera.getWorldDirection(t),this.dragPlane.setFromNormalAndCoplanarPoint(t,this.selected.position)}}};onPointerMove=e=>{if(!(!this.dragging||!this.selected)){if(this.mode===`select`){let t=this.raycastAtPointerToPlane(e);t&&(this.selected.position.copy(t),this.recordEvent(`move_object`,this.selected.userData.id,{position:this.selected.position.toArray()}))}else if(this.mode===`rotate`){let t=e.clientX-this.lastPointerX,n=e.clientY-this.lastPointerY,i=new R().setFromMatrixColumn(this.camera.matrixWorld,0),r=new Wt().setFromAxisAngle(iy,t*Rd),a=new Wt().setFromAxisAngle(i,n*Rd);this.selected.quaternion.premultiply(r).premultiply(a),this.recordEvent(`rotate_object`,this.selected.userData.id,{quaternion:this.selected.quaternion.toArray()})}this.lastPointerX=e.clientX,this.lastPointerY=e.clientY}};onPointerUp=()=>{this.dragging&&this.log(`drag end`),this.dragging=!1};onWheel=e=>{if(this.mode!==`scale`||!this.selected)return;e.preventDefault();let t=e.deltaY<0?1.05:.95,n=wt.clamp(this.selected.scale.x*t,zx,Hx);this.selected.scale.setScalar(n),this.recordEvent(`scale_object`,this.selected.userData.id,{scale:n})};onControlsChange=()=>{if(!this.recording||this.recordingPaused)return;let e=performance.now()-this.recordStartMs-this.recordTotalPausedMs;this.recordEvents.push({t:e,type:`camera_move`,position:this.camera.position.toArray(),target:this.controls.target.toArray(),distance:this.controls.getDistance(),rotationX:wt.radToDeg(this.controls.getPolarAngle())-90,rotationY:wt.radToDeg(this.controls.getAzimuthalAngle())})};onGamepadConnected=e=>{this.gamepadIndex=e.gamepad.index,this.gamepadConnected=!0,this.log(`gamepad connected`,e.gamepad.id),this.cdr.markForCheck()};onGamepadDisconnected=e=>{this.gamepadIndex===e.gamepad.index&&(this.gamepadIndex=null,this.gamepadConnected=!1,this.gamepadPrevButtons=[],this.cdr.markForCheck())};toggleGamepadEnabled(){this.gamepadEnabled=!this.gamepadEnabled}applyGamepadDeadzone(e){return Math.abs(e)<_y?0:e}cycleSelection(e){let t=this.group.children.filter(r=>!this.isWaypoint(r));if(t.length===0)return;let i=((this.selected?t.indexOf(this.selected):-1)+e+t.length)%t.length;this.setSelected(t[i])}cycleMode(e){let t=[`select`,`rotate`,`scale`,`camera`],i=(t.indexOf(this.mode)+e+t.length)%t.length;this.setMode(t[i])}gamepadTogglePlayback(){this.playbackActive?this.togglePlaybackPause():this.lastRecording&&!this.recording&&this.startPlayback()}updateGamepad(e){if(!this.gamepadEnabled)return;if(this.gamepadIndex===null){let a=navigator.getGamepads?navigator.getGamepads():[],o=Array.from(a).find(c=>c!==null);if(!o)return;this.gamepadIndex=o.index,this.gamepadConnected=!0,this.cdr.markForCheck()}let n=(navigator.getGamepads?navigator.getGamepads():[])[this.gamepadIndex];if(!n)return;if(!this.playbackActive){let a=this.applyGamepadDeadzone(n.axes[0]??0),o=this.applyGamepadDeadzone(n.axes[1]??0),c=this.applyGamepadDeadzone(n.axes[3]??0),l=n.buttons[6]?.value??0,u=n.buttons[7]?.value??0;if(a!==0||o!==0){let h=this.camera.position.clone().sub(this.controls.target),f=new ai().setFromVector3(h);f.theta-=a*Nd*e,f.phi=wt.clamp(f.phi+o*Nd*e,.05,Math.PI-.05),h.setFromSpherical(f),this.camera.position.copy(this.controls.target).add(h),this.controls.update()}let d=-c+u-l;if(d!==0){let h=this.camera.position.clone().sub(this.controls.target),f=Math.max(.01,h.length()),g=Math.max(.5,f*(1-d*xy*e));h.setLength(g),this.camera.position.copy(this.controls.target).add(h),this.controls.update()}}let i=n.buttons.map(a=>a.pressed),r=a=>!!i[a]&&!this.gamepadPrevButtons[a];r(0)&&this.toggleAutoRotate(),r(1)&&this.deselect(),r(2)&&this.toggleWireframe(),r(3)&&this.toggleGrid(),r(4)&&this.cycleSelection(-1),r(5)&&this.cycleSelection(1),r(8)&&this.gamepadTogglePlayback(),r(9)&&this.toggleFullscreen(),r(14)&&this.cycleMode(-1),r(15)&&this.cycleMode(1),this.gamepadPrevButtons=i}animate=()=>{this.frameId=requestAnimationFrame(this.animate);let e=this.clock.getDelta();this.controls.update(),this.highlight?.update(),this.updateAutoRotation(e),this.updateEffects(e),this.updatePhysics(e),this.updatePathLine(),this.updateLabels(e),this.updateGamepad(e),this.updatePlayback(),this.updateCameraTelemetry(e),this.renderer.render(this.scene,this.camera)};lastCameraPosition=null;hudUpdateAccumulator=0;cameraDistanceMiles=0;cameraSpeedMph=0;updateCameraTelemetry(e){if(this.lastCameraPosition&&e>0){let t=this.camera.position.distanceTo(this.lastCameraPosition)/e;this.cameraSpeedMph=t/Jc*$c*3600}this.lastCameraPosition=this.camera.position.clone(),this.cameraDistanceMiles=this.camera.position.length()/Jc*$c,this.hudUpdateAccumulator+=e,this.hudUpdateAccumulator>=.1&&(this.hudUpdateAccumulator=0,this.cdr.markForCheck())}formatMph(e){return this.formatScaledUnit(e,`mph`)}updateAutoRotation(e){for(let t of this.group.children){let n=t.userData.rotationSpeed;if(!n)continue;let i=t.userData.rotationAxis||`z`;t.rotation[i]+=wt.degToRad(n)*e}}boundingRadius(e){return .6*e.scale.x}updatePhysics(e){for(let t of this.group.children){if(!t.userData.gravity)continue;let n=t.userData.velocity;t.userData.onSurface||(n.y-=ay*e),t.position.y+=n.y*e;let i=this.boundingRadius(t);t.position.y-i<0?(t.position.y=i,n.y<0&&(n.y=-n.y*oy,Math.abs(n.y)<ly&&(n.y=0)),t.userData.onSurface=!0):t.userData.onSurface=!1}}startRecording(){this.recording||(this.recording=!0,this.recordingPaused=!1,this.recordEvents=[],this.recordInitialState=this.serializeScene(),this.recordStartMs=performance.now(),this.recordTotalPausedMs=0,this.log(`recording started`),this.cdr.markForCheck())}pauseRecording(){!this.recording||this.recordingPaused||(this.recordingPaused=!0,this.recordPauseStartMs=performance.now(),this.log(`recording paused`),this.cdr.markForCheck())}resumeRecording(){!this.recording||!this.recordingPaused||(this.recordTotalPausedMs+=performance.now()-this.recordPauseStartMs,this.recordingPaused=!1,this.log(`recording resumed`),this.cdr.markForCheck())}stopRecording(){if(!this.recording)return;let e=this.recordingPaused?this.recordTotalPausedMs+(performance.now()-this.recordPauseStartMs):this.recordTotalPausedMs,t=performance.now()-this.recordStartMs-e;this.recording=!1,this.recordingPaused=!1,this.recordEvents.length>0&&this.recordInitialState?this.lastRecording={events:[...this.recordEvents],initialState:this.recordInitialState,durationMs:t}:console.warn(`[3D] recording stopped with no events captured - Play will stay disabled. Try moving, rotating, scaling, recoloring, or adding/deleting a shape while recording.`),this.log(`recording stopped`,{events:this.recordEvents.length,durationMs:t}),this.cdr.markForCheck()}discardRecording(){this.recording=!1,this.recordingPaused=!1,this.playbackActive=!1,this.playbackPaused=!1,this.lastRecording=null,this.playbackData=null,this.playbackCursor=0,this.selectedRecordingId=null,this.recordingName=``}recordEvent(e,t,n={}){if(!this.recording||this.recordingPaused)return;let i=performance.now()-this.recordStartMs-this.recordTotalPausedMs;this.recordEvents.push(r({t:i,type:e,objectId:t},n))}recordSceneEvent(e,t={}){if(!this.recording||this.recordingPaused)return;let n=performance.now()-this.recordStartMs-this.recordTotalPausedMs;this.recordEvents.push(r({t:n,type:e},t))}async startPlayback(){!this.lastRecording||this.recording||(await this.deserializeScene(this.lastRecording.initialState),this.playbackData=this.lastRecording,this.playbackActive=!0,this.playbackPaused=!1,this.playbackStartMs=performance.now(),this.playbackTotalPausedMs=0,this.playbackCursor=0,this.gridHelper&&(this.gridHelper.visible=!1),this.log(`playback started`),this.cdr.markForCheck())}togglePlaybackPause(){this.playbackActive&&(this.playbackPaused?(this.playbackTotalPausedMs+=performance.now()-this.playbackPauseStartMs,this.playbackPaused=!1,this.log(`playback resumed`)):(this.playbackPauseStartMs=performance.now(),this.playbackPaused=!0,this.log(`playback paused`)),this.cdr.markForCheck())}stopPlayback(){this.playbackActive&&(this.playbackActive=!1,this.playbackPaused=!1,this.playbackData&&this.deserializeScene(this.playbackData.initialState),this.gridHelper&&(this.gridHelper.visible=this.gridVisible),this.log(`playback stopped`),this.cdr.markForCheck())}seekPlayback(e){if(!this.playbackData)return;let t=Number(e.target.value),n=t*this.playbackData.durationMs;this.deserializeScene(this.playbackData.initialState).then(()=>{if(!this.playbackData)return;let i=0;for(let r of this.playbackData.events){if(r.t>n)break;this.applyRecordedEvent(r),i++}this.playbackCursor=i,this.playbackStartMs=performance.now()-n,this.playbackTotalPausedMs=0,this.playbackProgress=t,this.playbackElapsedSeconds=n/1e3,this.cdr.markForCheck()})}recordingDurationSeconds(){return this.lastRecording?this.lastRecording.durationMs/1e3:0}lastRecordingEventCount(){return this.lastRecording?this.lastRecording.events.length:0}formatTime(e){let t=Math.max(0,Math.floor(e));return`${Math.floor(t/60)}:${(t%60).toString().padStart(2,`0`)}`}applyRecordedEvent(e){if(e.type===`camera_move`){e.position&&this.camera.position.fromArray(e.position),e.target&&this.controls.target.fromArray(e.target),this.controls.update();return}if(e.type===`set_background`){e.backgroundColor&&(this.backgroundColorHex=e.backgroundColor,this.scene.background=new Ae(e.backgroundColor));return}if(e.type===`add_shape`){let n=e.shapeType?this.createShapeObject(e.shapeType,e.shapeType===`terrain`?this.terrainParamsFromEntry(e):void 0):null;n&&e.objectId!==void 0&&(n.userData.id=e.objectId,this.nextObjectId=Math.max(this.nextObjectId,e.objectId+1),e.position&&n.position.fromArray(e.position),e.quaternion&&n.quaternion.fromArray(e.quaternion),e.scale!==void 0&&n.scale.setScalar(e.scale),this.applyObjectFields(n,{shapeType:e.shapeType??`cube`,position:e.position??[0,0,0],quaternion:e.quaternion??[0,0,0,1],scale:e.scale??1,color:e.color??`#ffffff`,rotationSpeed:e.rotationSpeed??0,gravity:e.gravity,textureKind:e.textureKind||void 0,labelText:e.labelText,rotationAxis:e.rotationAxis,wireframe:e.wireframe,lightIntensity:e.lightIntensity,lightRadius:e.lightRadius,lightDirectional:e.lightDirectional}),this.group.add(n));return}if(e.objectId===void 0)return;let t=this.findById(e.objectId);if(t){switch(e.type){case`move_object`:e.position&&t.position.fromArray(e.position);break;case`rotate_object`:e.quaternion&&t.quaternion.fromArray(e.quaternion);break;case`scale_object`:e.scale!==void 0&&t.scale.setScalar(e.scale);break;case`color_object`:e.color&&this.applyColor(t,e.color);break;case`set_rotation_speed`:t.userData.rotationSpeed=e.rotationSpeed??0;break;case`set_wireframe`:{let n=e.wireframe??!1;t.userData.wireframe=n,this.applyWireframe(t,n);break}case`set_particle_density`:e.particleDensity!==void 0&&this.rebuildParticleCount(t,e.particleDensity);break;case`set_particle_speed`:t.userData.particleSpeed=e.particleSpeed??1;break;case`set_light_intensity`:{let n=e.lightIntensity??Gs;t.userData.intensity=n;let i=t.userData.light;i&&(i.intensity=n);break}case`set_light_radius`:{let n=e.lightRadius??Xr;t.userData.lightRadius=n;let i=t.userData.light;i&&`distance`in i&&(i.distance=n);break}case`set_light_mode`:e.lightDirectional!==void 0&&e.lightDirectional!==t.userData.directional&&this.toggleLightMode(t);break;case`set_gravity`:t.userData.gravity=e.gravity??!1,t.userData.velocity={x:0,y:0,z:0},t.userData.onSurface=!1;break;case`set_texture`:{let n=this.materialHexOf(t);t.userData.textureKind=e.textureKind||void 0,this.applyColor(t,n);break}case`set_label`:e.labelText?this.attachLabel(t,e.labelText):this.detachLabel(t);break;case`delete_object`:this.group.remove(t),this.disposeObject(t)}this.selected===t&&this.highlight?.update()}}updatePlayback(){if(!this.playbackActive||!this.playbackData||this.playbackPaused)return;let e=performance.now()-this.playbackStartMs-this.playbackTotalPausedMs;this.playbackElapsedSeconds=e/1e3,this.playbackTotalSeconds=this.playbackData.durationMs/1e3,this.playbackProgress=this.playbackTotalSeconds>0?Math.min(1,e/this.playbackData.durationMs):0;let t=this.playbackData.events;for(;this.playbackCursor<t.length&&t[this.playbackCursor].t<=e;)this.applyRecordedEvent(t[this.playbackCursor]),this.playbackCursor++;e>=this.playbackData.durationMs&&(this.playbackActive=!1,this.playbackLoop?this.startPlayback():(this.gridHelper&&(this.gridHelper.visible=this.gridVisible),this.log(`playback complete`))),this.cdr.markForCheck()}togglePlaybackLoop(){this.playbackLoop=!this.playbackLoop}serializeScene(){return{objects:this.group.children.map(t=>{let n={id:t.userData.id,shapeType:t.userData.shapeType||`cube`,position:t.position.toArray(),quaternion:t.quaternion.toArray(),scale:t.scale.x,color:this.materialHexOf(t),rotationSpeed:t.userData.rotationSpeed||0};return t.userData.effectType===`light`&&(n.lightIntensity=t.userData.intensity,n.lightRadius=t.userData.lightRadius,n.lightDirectional=t.userData.directional),t.userData.gravity&&(n.gravity=!0),t.userData.textureKind&&(n.textureKind=t.userData.textureKind),t.userData.labelText&&(n.labelText=t.userData.labelText),t.userData.rotationAxis&&(n.rotationAxis=t.userData.rotationAxis),t.userData.wireframe&&(n.wireframe=!0),t.userData.effectType===`terrain`&&(n.terrainSize=t.userData.terrainSize,n.terrainResolution=t.userData.terrainResolution,n.terrainHeightScale=t.userData.terrainHeightScale,n.terrainSeed=t.userData.terrainSeed),n}),camera:{position:this.camera.position.toArray(),target:this.controls.target.toArray()},backgroundColor:this.backgroundColorHex,distanceHudEnabled:this.distanceHudEnabled}}async waitForDuck(){let e=Date.now();for(;!this.duckReady;){if(Date.now()-e>5e3)return!1;await new Promise(t=>setTimeout(t,100))}return!0}applyObjectFields(e,t){if(t.textureKind&&(e.userData.textureKind=t.textureKind),this.applyColor(e,t.color),e.userData.rotationSpeed=t.rotationSpeed,t.rotationAxis&&(e.userData.rotationAxis=t.rotationAxis),t.wireframe&&(e.userData.wireframe=!0,this.applyWireframe(e,!0)),e.userData.effectType===`light`&&(t.lightDirectional!==void 0&&t.lightDirectional!==e.userData.directional&&this.toggleLightMode(e),t.lightIntensity!==void 0&&(e.userData.intensity=t.lightIntensity,e.userData.light.intensity=t.lightIntensity),t.lightRadius!==void 0)){e.userData.lightRadius=t.lightRadius;let n=e.userData.light;`distance`in n&&(n.distance=t.lightRadius)}t.gravity&&(e.userData.gravity=!0,e.userData.velocity={x:0,y:0,z:0},e.userData.onSurface=!1),t.labelText&&this.attachLabel(e,t.labelText)}async deserializeScene(e){this.clearAll();for(let t of e.objects){let n=t.shapeType;if(n===`duck`&&!await this.waitForDuck()){console.warn(`[3D] duck model was not ready in time - skipping a duck object from the loaded project`);continue}if(n===`custom`&&!this.customModelTemplate){console.warn(`[3D] no custom model loaded this session - skipping a custom-model object from the loaded project (session-only, see loadCustomModel)`);continue}let i=this.createShapeObject(n,n===`terrain`?this.terrainParamsFromEntry(t):void 0);i&&(t.id!==void 0&&(i.userData.id=t.id,this.nextObjectId=Math.max(this.nextObjectId,t.id+1)),i.position.fromArray(t.position),i.quaternion.fromArray(t.quaternion),i.scale.setScalar(t.scale),this.applyObjectFields(i,t),this.group.add(i))}e.camera&&(this.controls.target.fromArray(e.camera.target),this.camera.position.fromArray(e.camera.position),this.controls.update()),this.backgroundColorHex=e.backgroundColor||Id,this.scene.background=new Ae(this.backgroundColorHex),this.distanceHudEnabled=!!e.distanceHudEnabled,this.setSelected(null),this.lastCameraPosition=null}async loadProjectList(){this.projectsLoading=!0,this.projectError=``;try{this.projects=await this.projectsService.list()}catch(e){console.error(`Error loading 3D projects:`,e),this.projectError=e?.message||`Failed to load projects.`}finally{this.projectsLoading=!1,this.cdr.markForCheck()}}onProjectSelectChange(e){let t=parseInt(e.target.value,10);isNaN(t)||this.selectProject(t)}onProjectNameInput(e){this.projectName=e.target.value}async selectProject(e){this.projectsLoading=!0,this.projectError=``,this.projectSuccessMessage=``;try{let t=await this.projectsService.get(e);this.discardRecording(),await this.deserializeScene(t.data),this.selectedProjectId=t.id,this.projectName=t.name,await this.loadRecordingList(),this.log(`project loaded`,t.name)}catch(t){console.error(`Error loading 3D project:`,t),this.projectError=t?.message||`Failed to load project.`}finally{this.projectsLoading=!1,this.cdr.markForCheck()}}async createProject(){let e=this.projectName.trim();if(e){this.projectSaving=!0,this.projectError=``;try{let t=await this.projectsService.create(e,this.serializeScene());this.selectedProjectId=t.id,this.projectName=t.name,await this.loadProjectList(),await this.loadRecordingList(),this.projectSuccessMessage=`Saved as new project.`,setTimeout(()=>{this.projectSuccessMessage=``,this.cdr.markForCheck()},3e3),this.log(`project created`,t.name)}catch(t){console.error(`Error creating 3D project:`,t),this.projectError=t?.message||`Failed to save project.`}finally{this.projectSaving=!1,this.cdr.markForCheck()}}}async saveProject(){if(this.selectedProjectId!==null){this.projectSaving=!0,this.projectError=``;try{let e=await this.projectsService.update(this.selectedProjectId,{name:this.projectName,data:this.serializeScene()});this.projectName=e.name,await this.loadProjectList(),this.projectSuccessMessage=`Saved.`,setTimeout(()=>{this.projectSuccessMessage=``,this.cdr.markForCheck()},3e3),this.log(`project saved`,e.name)}catch(e){console.error(`Error saving 3D project:`,e),this.projectError=e?.message||`Failed to save project.`}finally{this.projectSaving=!1,this.cdr.markForCheck()}}}async deleteProject(){if(this.selectedProjectId!==null&&confirm(`Delete "${this.projectName}"? This can't be undone.`))try{await this.projectsService.remove(this.selectedProjectId),this.log(`project deleted`,this.projectName),this.selectedProjectId=null,this.projectName=``,this.discardRecording(),await this.loadProjectList(),await this.loadRecordingList()}catch(e){console.error(`Error deleting 3D project:`,e),this.projectError=e?.message||`Failed to delete project.`,this.cdr.markForCheck()}}async loadRecordingList(){if(this.selectedProjectId===null){this.recordings=[],this.cdr.markForCheck();return}this.recordingsLoading=!0,this.recordingError=``;try{this.recordings=await this.recordingsService.list(this.selectedProjectId)}catch(e){console.error(`Error loading 3D recordings:`,e),this.recordingError=e?.message||`Failed to load recordings.`}finally{this.recordingsLoading=!1,this.cdr.markForCheck()}}onRecordingSelectChange(e){let t=parseInt(e.target.value,10);isNaN(t)||this.selectRecording(t)}onRecordingNameInput(e){this.recordingName=e.target.value}async selectRecording(e){this.recordingsLoading=!0,this.recordingError=``,this.recordingSuccessMessage=``;try{let t=await this.recordingsService.get(e);await this.deserializeScene(t.data.initialState),this.lastRecording={events:t.data.events,initialState:t.data.initialState,durationMs:t.data.durationMs},this.playbackData=null,this.playbackActive=!1,this.playbackCursor=0,this.selectedRecordingId=t.id,this.recordingName=t.name,this.log(`recording loaded`,t.name)}catch(t){console.error(`Error loading 3D recording:`,t),this.recordingError=t?.message||`Failed to load recording.`}finally{this.recordingsLoading=!1,this.cdr.markForCheck()}}recordingPayload(){return{initialState:this.lastRecording.initialState,events:this.lastRecording.events,durationMs:this.lastRecording.durationMs}}async createRecording(){let e=this.recordingName.trim();if(!(!e||!this.lastRecording||this.selectedProjectId===null)){this.recordingSaving=!0,this.recordingError=``;try{let t=await this.recordingsService.create(e,this.selectedProjectId,this.recordingPayload());this.selectedRecordingId=t.id,this.recordingName=t.name,await this.loadRecordingList(),this.recordingSuccessMessage=`Saved as new recording.`,setTimeout(()=>{this.recordingSuccessMessage=``,this.cdr.markForCheck()},3e3),this.log(`recording saved as new`,t.name)}catch(t){console.error(`Error creating 3D recording:`,t),this.recordingError=t?.message||`Failed to save recording.`}finally{this.recordingSaving=!1,this.cdr.markForCheck()}}}async saveRecording(){if(!(this.selectedRecordingId===null||!this.lastRecording)){this.recordingSaving=!0,this.recordingError=``;try{let e=await this.recordingsService.update(this.selectedRecordingId,{name:this.recordingName,data:this.recordingPayload()});this.recordingName=e.name,await this.loadRecordingList(),this.recordingSuccessMessage=`Saved.`,setTimeout(()=>{this.recordingSuccessMessage=``,this.cdr.markForCheck()},3e3),this.log(`recording saved`,e.name)}catch(e){console.error(`Error saving 3D recording:`,e),this.recordingError=e?.message||`Failed to save recording.`}finally{this.recordingSaving=!1,this.cdr.markForCheck()}}}async deleteRecording(){if(this.selectedRecordingId!==null&&confirm(`Delete "${this.recordingName}"? This can't be undone.`))try{await this.recordingsService.remove(this.selectedRecordingId),this.log(`recording deleted`,this.recordingName),this.selectedRecordingId=null,this.recordingName=``,await this.loadRecordingList()}catch(e){console.error(`Error deleting 3D recording:`,e),this.recordingError=e?.message||`Failed to delete recording.`,this.cdr.markForCheck()}}exportRecordedEvents(){if(!this.lastRecording)return[];let e=[];for(let t of this.lastRecording.events){let n=Math.round(t.t);switch(t.type){case`move_object`:e.push({t:n,type:`move_object`,object_id:t.objectId,position:t.position});break;case`rotate_object`:{if(!t.quaternion)break;let i=new bn().setFromQuaternion(new Wt(...t.quaternion));e.push({t:n,type:`rotate_object`,object_id:t.objectId,rotation:[i.x,i.y,i.z].map(r=>wt.radToDeg(r))});break}case`scale_object`:e.push({t:n,type:`scale_object`,object_id:t.objectId,scale:t.scale});break;case`set_rotation_speed`:e.push({t:n,type:`set_rotation_speed`,object_id:t.objectId,rotation_speed:[0,0,t.rotationSpeed??0]});break;case`set_particle_density`:e.push({t:n,type:`set_particle_density`,object_id:t.objectId,particle_density:t.particleDensity});break;case`set_gravity`:e.push({t:n,type:`toggle_gravity`,object_id:t.objectId,gravity:t.gravity});break;case`add_shape`:{if(!t.shapeType||t.shapeType===`waypoint`)break;let i=new Ae(t.color||`#ffffff`);e.push({t:n,type:`add_shape`,object_id:t.objectId,shape_index:Pd[t.shapeType],position:t.position,scale:t.scale,color:[i.r,i.g,i.b]});break}case`camera_move`:e.push({t:n,type:`camera_rotate`,rotation_x:t.rotationX,rotation_y:t.rotationY,rotation_z:0}),e.push({t:n,type:`camera_zoom`,distance:t.distance})}}return e}rotationSpeedVector(e){let t=e.userData.rotationSpeed||0,n=e.userData.rotationAxis||`z`,i=[0,0,0];return i[n===`x`?0:n===`y`?1:2]=t,i}exportProject(){let e=this.group.children.filter(o=>{let c=o.userData.shapeType;return!this.isWaypoint(o)&&c!==`terrain`&&c!==`galaxy`}).map((o,c)=>{let l=o.userData.shapeType||`cube`,u=[o.rotation.x,o.rotation.y,o.rotation.z].map(h=>wt.radToDeg(h)),d=new Ae(this.materialHexOf(o));return{id:c,type:`shape`,shape_index:Pd[l],position:o.position.toArray(),rotation:u,rotation_speed:this.rotationSpeedVector(o),scale:[o.scale.x,o.scale.x,o.scale.x],color:[d.r,d.g,d.b],gravity:!!o.userData.gravity}}),t={distance:this.controls.getDistance(),rotation_x:wt.radToDeg(this.controls.getPolarAngle())-90,rotation_y:wt.radToDeg(this.controls.getAzimuthalAngle()),rotation_z:0,offset_y:0,fov:this.camera.fov},n={name:this.projectName||`export`,version:`2.0`,duration:this.lastRecording?this.lastRecording.durationMs/1e3:sy,initial_state:{camera:t,objects:e},events:this.exportRecordedEvents()},i=new Blob([JSON.stringify(n,null,2)],{type:`application/json`}),r=URL.createObjectURL(i),a=document.createElement(`a`);a.href=r,a.download=`${this.projectName||`scene`}.queue.json`,document.body.appendChild(a),a.click(),document.body.removeChild(a),setTimeout(()=>URL.revokeObjectURL(r),1e3),this.log(`exported`,n.name)}static ɵfac=function(t){return new(t||s$2)(re(ao$1),re(ul),re(dl))};static ɵcmp=sf$1({type:s$2,selectors:[[`app-three-d-generator`]],viewQuery:function(t,n){if(t&1&&iv(Q_,5),t&2){let i;pf$1(i=gf$1())&&(n.canvasRef=i.first)}},hostBindings:function(t,n){t&1&&ec$1(`resize`,function(){return n.onWindowResize()},IC)(`keydown`,function(r){return n.onKeydown(r)},IC)},decls:155,vars:84,consts:[[`canvas`,``],[1,`three-d-generator-page`],[1,`page-heading`],[1,`container`],[1,`row`],[1,`col-lg-8`],[1,`top-text`,`header-text`],[1,`text-muted`,`mb-3`],[`open`,``,1,`toolbar-section`],[1,`toolbar-section-title`],[1,`d-flex`,`flex-wrap`,`align-items-center`,`gap-2`],[1,`text-muted`],[`type`,`button`,1,`btn`,`btn-sm`,3,`click`,`disabled`],[1,`fa`,`fa-sync`],[`type`,`button`,1,`btn`,`btn-sm`,3,`btn-secondary`,`btn-outline-secondary`],[`type`,`button`,1,`btn`,`btn-sm`,3,`btn-primary`,`btn-outline-primary`],[1,`text-muted`,`small`,`mb-0`],[`type`,`color`,`title`,`Scene background color`,1,`form-control`,`form-control-color`,`form-control-sm`,3,`change`,`value`],[`type`,`button`,1,`btn`,`btn-sm`,3,`click`],[`type`,`button`,`title`,`Only meaningful for content built at 100 units/AU, e.g. the realistic solar system`,1,`btn`,`btn-sm`,3,`click`],[1,`toolbar-section`],[1,`d-flex`,`flex-wrap`,`align-items-center`,`gap-2`,`mb-2`],[1,`badge`],[1,`text-muted`,`small`,`mb-2`],[1,`alert`,`alert-danger`,`py-1`,`px-2`,`mb-2`],[`type`,`button`,1,`btn`,`btn-sm`,`btn-outline-dark`,3,`click`],[1,`text-muted`,`small`,`mb-0`,`ms-2`],[`type`,`number`,`min`,`1`,`title`,`Flight duration in seconds`,1,`form-control`,`form-control-sm`,`auto-rotate-speed`,3,`change`,`value`],[1,`form-check`,`form-check-inline`,`ms-1`],[`type`,`checkbox`,`id`,`flyLoop`,1,`form-check-input`,3,`change`,`checked`],[`for`,`flyLoop`,1,`form-check-label`,`small`,`text-muted`],[`type`,`button`,1,`btn`,`btn-sm`,`btn-outline-primary`,3,`click`,`disabled`],[1,`alert`,`alert-success`,`py-1`,`px-2`,`mb-2`],[1,`form-select`,`form-select-sm`,`projects-select`,3,`change`,`value`,`disabled`],[`value`,``,`disabled`,``],[3,`value`],[`type`,`text`,`placeholder`,`Project name`,1,`form-control`,`form-control-sm`,`project-name`,3,`input`,`value`],[`type`,`button`,1,`btn`,`btn-sm`,`btn-outline-danger`,3,`click`,`disabled`],[`type`,`button`,1,`btn`,`btn-sm`,`btn-outline-secondary`,3,`click`],[1,`my-2`],[1,`text-muted`,`small`],[1,`d-flex`,`flex-wrap`,`gap-2`,`mb-2`],[`type`,`button`,1,`btn`,`btn-sm`,`btn-outline-dark`,3,`disabled`],[1,`btn`,`btn-sm`,`btn-outline-dark`,`mb-0`],[`type`,`file`,`accept`,`.obj`,1,`visually-hidden`,3,`change`],[`role`,`group`,`aria-label`,`Editor mode`,1,`btn-group`],[`type`,`button`,1,`btn`,`btn-sm`,`btn-outline-secondary`,3,`click`,`disabled`],[1,`fa`,`fa-trash`],[1,`fa`,`fa-broom`],[`open`,``,1,`toolbar-section`,`toolbar-section-last`],[`type`,`button`,1,`btn`,`btn-sm`,`btn-outline-danger`],[1,`d-flex`,`justify-content-end`,`mb-2`],[1,`fa`,`fa-expand`],[1,`canvas-wrap`],[1,`viewport-hud`],[`type`,`number`,`title`,`Degrees per second`,1,`form-control`,`form-control-sm`,`auto-rotate-speed`,3,`change`,`value`],[`type`,`color`,`title`,`Object color`,1,`form-control`,`form-control-color`,`form-control-sm`,3,`change`,`value`],[`title`,`Only meaningful for content built at 100 units/AU, e.g. the realistic solar system`,1,`text-muted`],[1,`form-select`,`form-select-sm`,`projects-select`,3,`change`,`value`],[`value`,``],[`value`,`rocky`],[`value`,`gasGiant`],[`value`,`earth`],[`value`,`sun`],[`type`,`number`,`min`,`1`,`max`,`500`,`step`,`1`,`title`,`Terrain footprint (world units)`,1,`form-control`,`form-control-sm`,`auto-rotate-speed`,3,`change`,`value`],[`type`,`number`,`min`,`2`,`max`,`120`,`step`,`1`,`title`,`Grid lines per side - higher is more detailed but slower to generate`,1,`form-control`,`form-control-sm`,`auto-rotate-speed`,3,`change`,`value`],[`type`,`number`,`min`,`0`,`max`,`100`,`step`,`0.5`,`title`,`Peak-to-valley height scale`,1,`form-control`,`form-control-sm`,`auto-rotate-speed`,3,`change`,`value`],[`type`,`button`,1,`btn`,`btn-sm`,`btn-outline-dark`],[`type`,`text`,`placeholder`,`Label text`,1,`form-control`,`form-control-sm`,`project-name`,3,`input`,`value`],[`type`,`button`,1,`btn`,`btn-sm`,`btn-outline-dark`,3,`click`,`disabled`],[`type`,`range`,`min`,`0.1`,`max`,`3`,`step`,`0.1`,`title`,`Particle density`,1,`form-range`,`particle-slider`,3,`input`,`value`],[`type`,`range`,`min`,`0.1`,`max`,`3`,`step`,`0.1`,`title`,`Particle speed`,1,`form-range`,`particle-slider`,3,`input`,`value`],[`type`,`range`,`min`,`0`,`max`,`3`,`step`,`0.1`,`title`,`Light intensity`,1,`form-range`,`particle-slider`,3,`input`,`value`],[`type`,`range`,`min`,`1`,`max`,`40`,`step`,`1`,`title`,`Light radius (point mode)`,1,`form-range`,`particle-slider`,3,`input`,`value`],[`type`,`text`,`placeholder`,`Recording name`,1,`form-control`,`form-control-sm`,`project-name`,3,`input`,`value`],[`type`,`button`,1,`btn`,`btn-sm`,`btn-outline-danger`,3,`click`],[`type`,`button`,`disabled`,``,1,`btn`,`btn-sm`,`btn-danger`],[`type`,`button`,1,`btn`,`btn-sm`,`btn-outline-secondary`],[`type`,`button`,1,`btn`,`btn-sm`,`btn-outline-primary`,3,`click`,`disabled`,`title`],[1,`viewport-hud-stats`],[1,`viewport-hud-scrubber`,`d-flex`,`align-items-center`,`gap-2`],[`type`,`button`,`title`,`Play`,1,`btn`,`btn-sm`,`btn-outline-light`,3,`disabled`],[`type`,`range`,`min`,`0`,`max`,`1`,`step`,`0.001`,1,`form-range`,`playback-scrubber`,3,`input`,`value`],[`type`,`button`,`title`,`Loop playback`,1,`btn`,`btn-sm`,3,`click`],[`type`,`button`,`title`,`Play`,1,`btn`,`btn-sm`,`btn-outline-light`,3,`click`,`disabled`],[`type`,`button`,1,`btn`,`btn-sm`,`btn-outline-light`,3,`click`,`title`],[`type`,`button`,`title`,`Stop`,1,`btn`,`btn-sm`,`btn-outline-light`,3,`click`]],template:function(t,n){t&1&&(ff$1(0,`div`,1)(1,`div`,2)(2,`div`,3)(3,`div`,4)(4,`div`,5)(5,`div`,6)(6,`h6`),qT(7,`Admin demo`),hf$1(),ff$1(8,`h2`),qT(9,`3D Generator`),hf$1()()()()()(),ff$1(10,`div`,3)(11,`p`,7),qT(12,` Select/Move: click to select, drag to move. Rotate and Scale act on the current selection (scroll to scale). Camera: left-drag orbits, scroll to zoom. Shortcuts: Delete/Backspace removes the selection, Escape deselects, Ctrl+C/Ctrl+V copy and paste. `),hf$1(),ff$1(13,`details`,8)(14,`summary`,9),qT(15,`Selected Object`),hf$1(),ff$1(16,`div`,10),rT(17,tx,2,0,`small`,11),ff$1(18,`button`,12),rv(`click`,function(){return n.toggleAutoRotate()}),Jy(19,`i`,13),qT(20,` Auto-Rotate `),hf$1(),rT(21,nx,3,1),rT(22,ix,3,2),rT(23,sx,13,1),rT(24,rx,2,4,`button`,14),rT(25,ax,11,3),rT(26,cx,2,1),rT(27,hx,2,5,`button`,15),rT(28,ux,6,2),rT(29,fx,6,3),hf$1()(),ff$1(30,`details`,8)(31,`summary`,9),qT(32,`Scene`),hf$1(),ff$1(33,`div`,10)(34,`label`,16),qT(35,`Background`),hf$1(),ff$1(36,`input`,17),rv(`change`,function(r){return n.setBackgroundColor(r)}),hf$1(),ff$1(37,`button`,18),rv(`click`,function(){return n.toggleGrid()}),qT(38),hf$1(),ff$1(39,`button`,18),rv(`click`,function(){return n.toggleDebugLog()}),qT(40),hf$1(),ff$1(41,`button`,19),rv(`click`,function(){return n.toggleDistanceHud()}),qT(42),hf$1()()(),ff$1(43,`details`,20)(44,`summary`,9),qT(45,`Gamepad`),hf$1(),ff$1(46,`div`,21)(47,`span`,22),qT(48),hf$1(),ff$1(49,`button`,18),rv(`click`,function(){return n.toggleGamepadEnabled()}),qT(50),hf$1()(),ff$1(51,`p`,16),qT(52,` Left stick: orbit camera · Right stick / triggers: zoom · LB/RB: previous/next object · A: toggle auto-rotate · B: deselect · X: toggle wireframe · Y: toggle grid · D-pad left/right: change mode · View: play/pause recording · Menu: fullscreen. `),hf$1()(),ff$1(53,`details`,20)(54,`summary`,9),qT(55,`Camera Path`),hf$1(),ff$1(56,`p`,23),qT(57,` Add waypoints, drag them into place, then fly the camera along the curve they form - it becomes a normal recording, so Play/Save/Export all work on it. `),hf$1(),rT(58,px,2,1,`div`,24),ff$1(59,`div`,10)(60,`button`,25),rv(`click`,function(){return n.addShape(`waypoint`)}),qT(61,` + Waypoint `),hf$1(),ff$1(62,`small`,11),qT(63),hf$1(),ff$1(64,`label`,26),qT(65,`Duration`),hf$1(),ff$1(66,`input`,27),rv(`change`,function(r){return n.onFlyDurationChange(r)}),hf$1(),ff$1(67,`small`,11),qT(68,`sec`),hf$1(),ff$1(69,`div`,28)(70,`input`,29),rv(`change`,function(r){return n.onFlyLoopChange(r)}),hf$1(),ff$1(71,`label`,30),qT(72,`Loop`),hf$1()(),ff$1(73,`button`,31),rv(`click`,function(){return n.flyAlongPath()}),qT(74,` Fly Along Path `),hf$1()()(),ff$1(75,`details`,20)(76,`summary`,9),qT(77,`Projects & Recordings`),hf$1(),ff$1(78,`label`,16),qT(79,`Projects`),hf$1(),rT(80,mx,2,1,`div`,24),rT(81,gx,2,1,`div`,32),ff$1(82,`div`,10)(83,`select`,33),rv(`change`,function(r){return n.onProjectSelectChange(r)}),ff$1(84,`option`,34),qT(85),hf$1(),cT(86,_x,2,2,`option`,35,Fd),hf$1(),ff$1(88,`input`,36),rv(`input`,function(r){return n.onProjectNameInput(r)}),hf$1(),ff$1(89,`button`,31),rv(`click`,function(){return n.saveProject()}),qT(90,` Save `),hf$1(),ff$1(91,`button`,31),rv(`click`,function(){return n.createProject()}),qT(92,` Save As New `),hf$1(),ff$1(93,`button`,37),rv(`click`,function(){return n.deleteProject()}),qT(94,` Delete Project `),hf$1(),ff$1(95,`button`,38),rv(`click`,function(){return n.exportProject()}),qT(96,` Export JSON `),hf$1()(),Jy(97,`hr`,39),ff$1(98,`label`,16),qT(99,`Recordings`),hf$1(),rT(100,xx,2,0,`div`,40)(101,Sx,15,9),hf$1(),ff$1(102,`details`,20)(103,`summary`,9),qT(104,`Add Shape`),hf$1(),ff$1(105,`div`,41),cT(106,Mx,2,2,`button`,42,ex),hf$1(),ff$1(108,`div`,10)(109,`label`,43),qT(110,` Load Model… `),ff$1(111,`input`,44),rv(`change`,function(r){return n.loadCustomModel(r)}),hf$1()(),rT(112,Ex,4,1),hf$1()(),ff$1(113,`details`,8)(114,`summary`,9),qT(115,`Edit`),hf$1(),ff$1(116,`div`,10)(117,`div`,45)(118,`button`,18),rv(`click`,function(){return n.setMode(`select`)}),qT(119,` 1 · Select/Move `),hf$1(),ff$1(120,`button`,12),rv(`click`,function(){return n.setMode(`rotate`)}),qT(121,` 2 · Rotate `),hf$1(),ff$1(122,`button`,12),rv(`click`,function(){return n.setMode(`scale`)}),qT(123,` 3 · Scale (wheel) `),hf$1(),ff$1(124,`button`,18),rv(`click`,function(){return n.setMode(`camera`)}),qT(125,` 4 · Camera `),hf$1()(),ff$1(126,`button`,46),rv(`click`,function(){return n.deselect()}),qT(127,` Deselect `),hf$1(),ff$1(128,`button`,46),rv(`click`,function(){return n.copySelected()}),qT(129,` Copy `),hf$1(),ff$1(130,`button`,46),rv(`click`,function(){return n.pasteClipboard()}),qT(131,` Paste `),hf$1(),ff$1(132,`button`,37),rv(`click`,function(){return n.deleteSelected()}),Jy(133,`i`,47),qT(134,` Delete `),hf$1(),ff$1(135,`button`,38),rv(`click`,function(){return n.clearAll()}),Jy(136,`i`,48),qT(137,` Clear All `),hf$1()()(),ff$1(138,`details`,49)(139,`summary`,9),qT(140,`Record & Playback`),hf$1(),ff$1(141,`div`,10),rT(142,Tx,2,0,`button`,50)(143,Cx,6,1),rT(144,Px,3,3)(145,Lx,4,1),rT(146,Nx,2,3,`small`,11),hf$1()(),ff$1(147,`div`,51)(148,`button`,38),rv(`click`,function(){return n.toggleFullscreen()}),Jy(149,`i`,52),qT(150,` Fullscreen `),hf$1()(),ff$1(151,`div`,53),Jy(152,`canvas`,null,0),rT(154,kx,3,2,`div`,54),hf$1()()()),t&2&&(rb(17),iT(n.hasSelection?-1:17),rb(),uv(`btn-primary`,n.isAutoRotating())(`btn-outline-primary`,!n.isAutoRotating()),tv(`disabled`,!n.hasSelection),rb(3),iT(n.isAutoRotating()?21:-1),rb(),iT(n.hasSelection?22:-1),rb(),iT(n.isTexturable()?23:-1),rb(),iT(n.isWireframeToggleable()?24:-1),rb(),iT(n.isTerrainSelected()?25:-1),rb(),iT(n.hasSelection?26:-1),rb(),iT(n.hasSelection?27:-1),rb(),iT(n.isParticleSelected()?28:-1),rb(),iT(n.isLightSelected()?29:-1),rb(7),tv(`value`,n.backgroundColorHex),rb(),uv(`btn-primary`,n.gridVisible)(`btn-outline-secondary`,!n.gridVisible),rb(),mf$1(` Grid: `,n.gridVisible?`On`:`Off`,` `),rb(),uv(`btn-primary`,n.debugLogEnabled)(`btn-outline-secondary`,!n.debugLogEnabled),rb(),mf$1(` Debug Log: `,n.debugLogEnabled?`On`:`Off`,` `),rb(),uv(`btn-primary`,n.distanceHudEnabled)(`btn-outline-secondary`,!n.distanceHudEnabled),rb(),mf$1(` Distance/Speed HUD: `,n.distanceHudEnabled?`On`:`Off`,` `),rb(5),uv(`text-bg-success`,n.gamepadConnected)(`text-bg-secondary`,!n.gamepadConnected),rb(),mf$1(` `,n.gamepadConnected?`Connected`:`Not connected`,` `),rb(),uv(`btn-primary`,n.gamepadEnabled)(`btn-outline-secondary`,!n.gamepadEnabled),rb(),mf$1(` Gamepad Controls: `,n.gamepadEnabled?`On`:`Off`,` `),rb(8),iT(n.cameraPathError?58:-1),rb(5),mf$1(``,n.waypointCount(),` placed`),rb(3),tv(`value`,n.flyAlongPathDurationSeconds),rb(4),tv(`checked`,n.flyAlongPathLoop),rb(3),tv(`disabled`,n.waypointCount()<2),rb(7),iT(n.projectError?80:-1),rb(),iT(n.projectSuccessMessage?81:-1),rb(2),tv(`value`,n.selectedProjectId??``)(`disabled`,n.projectsLoading),rb(2),mv(n.projects.length?`Load a saved project…`:`No saved projects yet`),rb(),uT(n.projects),rb(2),tv(`value`,n.projectName),rb(),tv(`disabled`,n.selectedProjectId===null||n.projectSaving),rb(2),tv(`disabled`,!n.projectName.trim()||n.projectSaving),rb(2),tv(`disabled`,n.selectedProjectId===null),rb(7),iT(n.selectedProjectId===null?100:101),rb(6),uT(n.shapeTypes),rb(6),iT(n.customModelReady?112:-1),rb(6),uv(`btn-primary`,n.mode===`select`)(`btn-outline-primary`,n.mode!==`select`),rb(2),uv(`btn-primary`,n.mode===`rotate`)(`btn-outline-primary`,n.mode!==`rotate`),tv(`disabled`,!n.hasSelection),rb(2),uv(`btn-primary`,n.mode===`scale`)(`btn-outline-primary`,n.mode!==`scale`),tv(`disabled`,!n.hasSelection),rb(2),uv(`btn-primary`,n.mode===`camera`)(`btn-outline-primary`,n.mode!==`camera`),rb(2),tv(`disabled`,!n.hasSelection),rb(2),tv(`disabled`,!n.hasSelection),rb(2),tv(`disabled`,!n.hasClipboard()),rb(2),tv(`disabled`,!n.hasSelection),rb(10),iT(n.recording?143:142),rb(2),iT(n.playbackActive?145:144),rb(2),iT(n.lastRecording?146:-1),rb(5),Xa$1(`data-mode`,n.mode),rb(3),iT(n.distanceHudEnabled||n.lastRecording?154:-1))},styles:[`@charset "UTF-8";.three-d-generator-page[_ngcontent-%COMP%]{min-height:60vh}.three-d-generator-page[_ngcontent-%COMP%] > .container[_ngcontent-%COMP%]{padding-top:0;padding-bottom:60px}.three-d-generator-page[_ngcontent-%COMP%]   .auto-rotate-speed[_ngcontent-%COMP%]{width:70px}.three-d-generator-page[_ngcontent-%COMP%]   .projects-select[_ngcontent-%COMP%]{max-width:220px}.three-d-generator-page[_ngcontent-%COMP%]   .project-name[_ngcontent-%COMP%]{max-width:180px}.three-d-generator-page[_ngcontent-%COMP%]   .particle-slider[_ngcontent-%COMP%]{width:90px}.three-d-generator-page[_ngcontent-%COMP%]   .playback-scrubber[_ngcontent-%COMP%]{width:200px}.three-d-generator-page[_ngcontent-%COMP%]   .toolbar-section[_ngcontent-%COMP%]{padding-bottom:12px;margin-bottom:12px;border-bottom:1px solid #e9ecef}.three-d-generator-page[_ngcontent-%COMP%]   .toolbar-section.toolbar-section-last[_ngcontent-%COMP%]{border-bottom:none;margin-bottom:16px}.three-d-generator-page[_ngcontent-%COMP%]   .toolbar-section-title[_ngcontent-%COMP%]{margin-bottom:6px;color:#6c757d;text-transform:uppercase;font-size:.7rem;letter-spacing:.05em;cursor:pointer;-webkit-user-select:none;user-select:none;list-style:none}.three-d-generator-page[_ngcontent-%COMP%]   .toolbar-section-title[_ngcontent-%COMP%]::-webkit-details-marker{display:none}.three-d-generator-page[_ngcontent-%COMP%]   .toolbar-section-title[_ngcontent-%COMP%]:before{content:"\\25b8";display:inline-block;width:1em;transition:transform .15s ease}.three-d-generator-page[_ngcontent-%COMP%]   details[open][_ngcontent-%COMP%] > .toolbar-section-title[_ngcontent-%COMP%]:before{transform:rotate(90deg)}.three-d-generator-page[_ngcontent-%COMP%]   .canvas-wrap[_ngcontent-%COMP%]{position:relative;border:1px solid #e9ecef;border-radius:8px;overflow:hidden;line-height:0}.three-d-generator-page[_ngcontent-%COMP%]   .canvas-wrap[_ngcontent-%COMP%]   canvas[_ngcontent-%COMP%]{display:block;width:100%;touch-action:none;cursor:pointer}.three-d-generator-page[_ngcontent-%COMP%]   .canvas-wrap[data-mode=rotate][_ngcontent-%COMP%]   canvas[_ngcontent-%COMP%]{cursor:grab}.three-d-generator-page[_ngcontent-%COMP%]   .canvas-wrap[data-mode=scale][_ngcontent-%COMP%]   canvas[_ngcontent-%COMP%]{cursor:ns-resize}.three-d-generator-page[_ngcontent-%COMP%]   .canvas-wrap[data-mode=camera][_ngcontent-%COMP%]   canvas[_ngcontent-%COMP%]{cursor:all-scroll}.three-d-generator-page[_ngcontent-%COMP%]   .canvas-wrap[_ngcontent-%COMP%]:fullscreen{width:100vw;border-radius:0}.three-d-generator-page[_ngcontent-%COMP%]   .viewport-hud[_ngcontent-%COMP%]{position:absolute;left:0;right:0;bottom:0;display:flex;flex-direction:column;gap:4px;padding:8px 12px;line-height:normal;background:linear-gradient(to top,#0000008c,#0000);pointer-events:none}.three-d-generator-page[_ngcontent-%COMP%]   .viewport-hud-stats[_ngcontent-%COMP%]{display:flex;justify-content:space-between;color:#fff;font-size:.8rem;font-variant-numeric:tabular-nums;text-shadow:0 1px 2px rgba(0,0,0,.8)}.three-d-generator-page[_ngcontent-%COMP%]   .viewport-hud-scrubber[_ngcontent-%COMP%]{pointer-events:auto}.three-d-generator-page[_ngcontent-%COMP%]   .viewport-hud-scrubber[_ngcontent-%COMP%]   .playback-scrubber[_ngcontent-%COMP%]{flex:1 1 auto;width:auto}.three-d-generator-page[_ngcontent-%COMP%]   .viewport-hud-scrubber[_ngcontent-%COMP%]   small[_ngcontent-%COMP%]{color:#fff;white-space:nowrap;text-shadow:0 1px 2px rgba(0,0,0,.8)}`],changeDetection:1})};export{Ud as ThreeDGeneratorComponent};