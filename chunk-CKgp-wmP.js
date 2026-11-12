import{A as ao$1,C as KE,F as ec$1,G as iv,I as ee,J as mb,K as kC,L as eg,S as Jp,T as MT,V as gf$1,W as hv,X as nc$1,Y as mf$1,at as vf$1,ct as wv,et as rv,g as Df$1,h as DT,it as uv,j as av,k as a_$1,lt as yT,ot as wT,p as CT,q as kT,rt as uf$1,ut as yf$1,v as Ev,w as M,x as Iv,y as I,z as fu$1}from"./main-XSQZ3CK4.js";import{n as s,t as r}from"./chunk-DxqKAYlM.js";var Gn={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2};var wi={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3};var au=0;var Ql=1;var ou=2;var Dr=1;var lu=2;var Ls=3;var Vn=0;var rn=1;var Wn=2;var Vi=0;var Ns=1;var ec=2;var tc=3;var nc=4;var cu=5;var Wi=100;var hu=101;var uu=102;var du=103;var fu=104;var pu=200;var mu=201;var gu=202;var _u=203;var ic=204;var sc=205;var xu=206;var yu=207;var vu=208;var bu=209;var Su=210;var Mu=211;var Eu=212;var Tu=213;var wu=214;var Ia=0;var La=1;var Na=2;var ms=3;var Oa=4;var Ua=5;var Fa=6;var Ba=7;var ho=0;var Au=1;var Cu=2;var Xn=0;var rc=1;var ac=2;var oc=3;var lc=4;var cc=5;var hc=6;var uc=7;var dc=300;var Xi=301;var Os=302;var uo=303;var fo=304;var yi=1e3;var Sn=1001;var ka=1002;var Bt=1003;var Ru=1004;var Ir=1005;var tn=1006;var po=1007;var li=1008;var ln=1009;var fc=1010;var pc=1011;var Us=1012;var mo=1013;var On=1014;var Un=1015;var Fn=1016;var go=1017;var _o=1018;var qi=1020;var mc=35902;var gc=35899;var _c=1021;var xc=1022;var Bn=1023;var ii=1026;var ci=1027;var yc=1028;var xo=1029;var Ai=1030;var yo=1031;var vo=1033;var Lr=33776;var Nr=33777;var Or=33778;var Ur=33779;var bo=35840;var So=35841;var Mo=35842;var Eo=35843;var To=36196;var wo=37492;var Ao=37496;var Co=37488;var Ro=37489;var Fr=37490;var Po=37491;var Do=37808;var Io=37809;var Lo=37810;var No=37811;var Oo=37812;var Uo=37813;var Fo=37814;var Bo=37815;var ko=37816;var zo=37817;var Ho=37818;var Go=37819;var Vo=37820;var Wo=37821;var Xo=36492;var qo=36494;var Yo=36495;var jo=36283;var Zo=36284;var Br=36285;var Ko=36286;var Qs=2300;var za=2301;var Pa=2302;var Gl=2303;var Vl=2400;var Wl=2401;var Xl=2402;var Pu=3200;var kr=0;var Du=1;var hi=``;var wt=`srgb`;var er=`srgb-linear`;var tr=`linear`;var ot=`srgb`;var Da=7680;var Iu=519;var Lu=512;var Nu=513;var Ou=514;var vc=515;var Uu=516;var Fu=517;var bc=518;var Sc=519;var Mc=35044;var Ec=`300 es`;var Mn=2e3;var gs=2001;function jd(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function Zd(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}function _s(s){return document.createElementNS(`http://www.w3.org/1999/xhtml`,s)}function Bu(){let s=_s(`canvas`);return s.style.display=`block`,s}var Sh={};var xs=null;function nr(...s){let e=`THREE.`+s.shift();xs?xs(`log`,e,...s):console.log(e,...s)}function ku(s){let e=s[0];if(typeof e==`string`&&e.startsWith(`TSL:`)){let t=s[1];t&&t.isStackTrace?s[0]+=` `+t.getLocation():s[1]=`Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.`}return s}function Ie(...s){s=ku(s);let e=`THREE.`+s.shift();if(xs)xs(`warn`,e,...s);else{let t=s[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...s)}}function Fe(...s){s=ku(s);let e=`THREE.`+s.shift();if(xs)xs(`error`,e,...s);else{let t=s[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...s)}}function Ks(...s){let e=s.join(` `);e in Sh||(Sh[e]=!0,Ie(...s))}function zu(s,e,t){return new Promise(function(n,i){function r(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}var Hu={[Ia]:Ia,[Na]:Fa,[Oa]:Oa,[ms]:Ua,[La]:La,[Fa]:Na,[Ba]:Ba,[Ua]:ms};var In=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let i=n[e];if(i!==void 0){let r=i.indexOf(t);r!==-1&&i.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let i=n.slice(0);for(let r=0,a=i.length;r<a;r++)i[r].call(this,e);e.target=null}}};var Xt=[`00`,`01`,`02`,`03`,`04`,`05`,`06`,`07`,`08`,`09`,`0a`,`0b`,`0c`,`0d`,`0e`,`0f`,`10`,`11`,`12`,`13`,`14`,`15`,`16`,`17`,`18`,`19`,`1a`,`1b`,`1c`,`1d`,`1e`,`1f`,`20`,`21`,`22`,`23`,`24`,`25`,`26`,`27`,`28`,`29`,`2a`,`2b`,`2c`,`2d`,`2e`,`2f`,`30`,`31`,`32`,`33`,`34`,`35`,`36`,`37`,`38`,`39`,`3a`,`3b`,`3c`,`3d`,`3e`,`3f`,`40`,`41`,`42`,`43`,`44`,`45`,`46`,`47`,`48`,`49`,`4a`,`4b`,`4c`,`4d`,`4e`,`4f`,`50`,`51`,`52`,`53`,`54`,`55`,`56`,`57`,`58`,`59`,`5a`,`5b`,`5c`,`5d`,`5e`,`5f`,`60`,`61`,`62`,`63`,`64`,`65`,`66`,`67`,`68`,`69`,`6a`,`6b`,`6c`,`6d`,`6e`,`6f`,`70`,`71`,`72`,`73`,`74`,`75`,`76`,`77`,`78`,`79`,`7a`,`7b`,`7c`,`7d`,`7e`,`7f`,`80`,`81`,`82`,`83`,`84`,`85`,`86`,`87`,`88`,`89`,`8a`,`8b`,`8c`,`8d`,`8e`,`8f`,`90`,`91`,`92`,`93`,`94`,`95`,`96`,`97`,`98`,`99`,`9a`,`9b`,`9c`,`9d`,`9e`,`9f`,`a0`,`a1`,`a2`,`a3`,`a4`,`a5`,`a6`,`a7`,`a8`,`a9`,`aa`,`ab`,`ac`,`ad`,`ae`,`af`,`b0`,`b1`,`b2`,`b3`,`b4`,`b5`,`b6`,`b7`,`b8`,`b9`,`ba`,`bb`,`bc`,`bd`,`be`,`bf`,`c0`,`c1`,`c2`,`c3`,`c4`,`c5`,`c6`,`c7`,`c8`,`c9`,`ca`,`cb`,`cc`,`cd`,`ce`,`cf`,`d0`,`d1`,`d2`,`d3`,`d4`,`d5`,`d6`,`d7`,`d8`,`d9`,`da`,`db`,`dc`,`dd`,`de`,`df`,`e0`,`e1`,`e2`,`e3`,`e4`,`e5`,`e6`,`e7`,`e8`,`e9`,`ea`,`eb`,`ec`,`ed`,`ee`,`ef`,`f0`,`f1`,`f2`,`f3`,`f4`,`f5`,`f6`,`f7`,`f8`,`f9`,`fa`,`fb`,`fc`,`fd`,`fe`,`ff`];var Mh=1234567;var Js=Math.PI/180;var ys=180/Math.PI;function Ci(){let s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Xt[s&255]+Xt[s>>8&255]+Xt[s>>16&255]+Xt[s>>24&255]+`-`+Xt[e&255]+Xt[e>>8&255]+`-`+Xt[e>>16&15|64]+Xt[e>>24&255]+`-`+Xt[t&63|128]+Xt[t>>8&255]+`-`+Xt[t>>16&255]+Xt[t>>24&255]+Xt[n&255]+Xt[n>>8&255]+Xt[n>>16&255]+Xt[n>>24&255]).toLowerCase()}function je(s,e,t){return Math.max(e,Math.min(t,s))}function Tc(s,e){return(s%e+e)%e}function Kd(s,e,t,n,i){return n+(s-e)*(i-n)/(t-e)}function Jd(s,e,t){return s!==e?(t-s)/(e-s):0}function $s(s,e,t){return(1-t)*s+t*e}function $d(s,e,t,n){return $s(s,e,1-Math.exp(-t*n))}function Qd(s,e=1){return e-Math.abs(Tc(s,e*2)-e)}function ef(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*(3-2*s))}function tf(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*s*(s*(s*6-15)+10))}function nf(s,e){return s+Math.floor(Math.random()*(e-s+1))}function sf(s,e){return s+Math.random()*(e-s)}function rf(s){return s*(.5-Math.random())}function af(s){s!==void 0&&(Mh=s);let e=Mh+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function of(s){return s*Js}function lf(s){return s*ys}function cf(s){return s>0&&Number.isInteger(s)&&2**Math.round(Math.log2(s))===s}function hf(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function wc(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function uf(s,e,t,n,i){let r=Math.cos,a=Math.sin,o=r(t/2),c=a(t/2),l=r((e+n)/2),h=a((e+n)/2),d=r((e-n)/2),u=a((e-n)/2),f=r((n-e)/2),_=a((n-e)/2);switch(i){case`XYX`:s.set(o*h,c*d,c*u,o*l);break;case`YZY`:s.set(c*u,o*h,c*d,o*l);break;case`ZXZ`:s.set(c*d,c*u,o*h,o*l);break;case`XZX`:s.set(o*h,c*_,c*f,o*l);break;case`YXY`:s.set(c*f,o*h,c*_,o*l);break;case`ZYZ`:s.set(c*_,c*f,o*h,o*l);break;default:Ie(`MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: `+i)}}function Jo(s){switch(s.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function Ac(s,e){if(e.constructor===Float32Array)return s;let t=Jo(e);if(t===void 0)throw new Error(`THREE.MathUtils: Invalid component type.`);return Math.max(s/t,-1)}function Cc(s,e){if(e.constructor===Float32Array)return s;let t=Jo(e);if(t===void 0)throw new Error(`THREE.MathUtils: Invalid component type.`);return Math.round(s*t)}var St={DEG2RAD:Js,RAD2DEG:ys,generateUUID:Ci,clamp:je,euclideanModulo:Tc,mapLinear:Kd,inverseLerp:Jd,lerp:$s,damp:$d,pingpong:Qd,smoothstep:ef,smootherstep:tf,randInt:nf,randFloat:sf,randFloatSpread:rf,seededRandom:af,degToRad:of,radToDeg:lf,isPowerOfTwo:cf,ceilPowerOfTwo:hf,floorPowerOfTwo:wc,setQuaternionFromProperEuler:uf,normalize:Cc,denormalize:Ac};var Se=class{static{this.prototype.isVector2=!0}constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error(`THREE.Vector2: index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error(`THREE.Vector2: index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=je(this.x,e.x,t.x),this.y=je(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=je(this.x,e,t),this.y=je(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(je(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(je(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),i=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*i+e.x,this.y=r*i+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};var Gt=class{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,r,a,o){let c=n[i+0],l=n[i+1],h=n[i+2],d=n[i+3],u=r[a+0],f=r[a+1],_=r[a+2],x=r[a+3];if(d!==x||c!==u||l!==f||h!==_){let p=c*u+l*f+h*_+d*x;p<0&&(u=-u,f=-f,_=-_,x=-x,p=-p);let m=1-o;if(p<.9995){let v=Math.acos(p),T=Math.sin(v);m=Math.sin(m*v)/T,o=Math.sin(o*v)/T,c=c*m+u*o,l=l*m+f*o,h=h*m+_*o,d=d*m+x*o}else{c=c*m+u*o,l=l*m+f*o,h=h*m+_*o,d=d*m+x*o;let v=1/Math.sqrt(c*c+l*l+h*h+d*d);c*=v,l*=v,h*=v,d*=v}}e[t]=c,e[t+1]=l,e[t+2]=h,e[t+3]=d}static multiplyQuaternionsFlat(e,t,n,i,r,a){let o=n[i],c=n[i+1],l=n[i+2],h=n[i+3],d=r[a],u=r[a+1],f=r[a+2],_=r[a+3];return e[t]=o*_+h*d+c*f-l*u,e[t+1]=c*_+h*u+l*d-o*f,e[t+2]=l*_+h*f+o*u-c*d,e[t+3]=h*_-o*d-c*u-l*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,i=e._y,r=e._z,a=e._order,o=Math.cos,c=Math.sin,l=o(n/2),h=o(i/2),d=o(r/2),u=c(n/2),f=c(i/2),_=c(r/2);switch(a){case`XYZ`:this._x=u*h*d+l*f*_,this._y=l*f*d-u*h*_,this._z=l*h*_+u*f*d,this._w=l*h*d-u*f*_;break;case`YXZ`:this._x=u*h*d+l*f*_,this._y=l*f*d-u*h*_,this._z=l*h*_-u*f*d,this._w=l*h*d+u*f*_;break;case`ZXY`:this._x=u*h*d-l*f*_,this._y=l*f*d+u*h*_,this._z=l*h*_+u*f*d,this._w=l*h*d-u*f*_;break;case`ZYX`:this._x=u*h*d-l*f*_,this._y=l*f*d+u*h*_,this._z=l*h*_-u*f*d,this._w=l*h*d+u*f*_;break;case`YZX`:this._x=u*h*d+l*f*_,this._y=l*f*d+u*h*_,this._z=l*h*_-u*f*d,this._w=l*h*d-u*f*_;break;case`XZY`:this._x=u*h*d-l*f*_,this._y=l*f*d-u*h*_,this._z=l*h*_+u*f*d,this._w=l*h*d+u*f*_;break;default:Ie(`Quaternion: .setFromEuler() encountered an unknown order: `+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],i=t[4],r=t[8],a=t[1],o=t[5],c=t[9],l=t[2],h=t[6],d=t[10],u=n+o+d;if(u>0){let f=.5/Math.sqrt(u+1);this._w=.25/f,this._x=(h-c)*f,this._y=(r-l)*f,this._z=(a-i)*f}else if(n>o&&n>d){let f=2*Math.sqrt(1+n-o-d);this._w=(h-c)/f,this._x=.25*f,this._y=(i+a)/f,this._z=(r+l)/f}else if(o>d){let f=2*Math.sqrt(1+o-n-d);this._w=(r-l)/f,this._x=(i+a)/f,this._y=.25*f,this._z=(c+h)/f}else{let f=2*Math.sqrt(1+d-n-o);this._w=(a-i)/f,this._x=(r+l)/f,this._y=(c+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(je(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,i=e._y,r=e._z,a=e._w,o=t._x,c=t._y,l=t._z,h=t._w;return this._x=n*h+a*o+i*l-r*c,this._y=i*h+a*c+r*o-n*l,this._z=r*h+a*l+n*c-i*o,this._w=a*h-n*o-i*c-r*l,this._onChangeCallback(),this}slerp(e,t){let n=e._x,i=e._y,r=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,i=-i,r=-r,a=-a,o=-o);let c=1-t;if(o<.9995){let l=Math.acos(o),h=Math.sin(l);c=Math.sin(c*l)/h,t=Math.sin(t*l)/h,this._x=this._x*c+n*t,this._y=this._y*c+i*t,this._z=this._z*c+r*t,this._w=this._w*c+a*t,this._onChangeCallback()}else this._x=this._x*c+n*t,this._y=this._y*c+i*t,this._z=this._z*c+r*t,this._w=this._w*c+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}};var P=class{static{this.prototype.isVector3=!0}constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error(`THREE.Vector3: index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error(`THREE.Vector3: index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Eh.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Eh.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*i,this.y=r[1]*t+r[4]*n+r[7]*i,this.z=r[2]*t+r[5]*n+r[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,i=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*i+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*i+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*i+r[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,i=this.z,r=e.x,a=e.y,o=e.z,c=e.w,l=2*(a*i-o*n),h=2*(o*t-r*i),d=2*(r*n-a*t);return this.x=t+c*l+a*d-o*h,this.y=n+c*h+o*l-r*d,this.z=i+c*d+r*h-a*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i,this.y=r[1]*t+r[5]*n+r[9]*i,this.z=r[2]*t+r[6]*n+r[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=je(this.x,e.x,t.x),this.y=je(this.y,e.y,t.y),this.z=je(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=je(this.x,e,t),this.y=je(this.y,e,t),this.z=je(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(je(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,i=e.y,r=e.z,a=t.x,o=t.y,c=t.z;return this.x=i*c-r*o,this.y=r*a-n*c,this.z=n*o-i*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return _l.copy(this).projectOnVector(e),this.sub(_l)}reflect(e){return this.sub(_l.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(je(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};var _l=new P;var Eh=new Gt;var Be=class{static{this.prototype.isMatrix3=!0}constructor(e,t,n,i,r,a,o,c,l){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,a,o,c,l)}set(e,t,n,i,r,a,o,c,l){let h=this.elements;return h[0]=e,h[1]=i,h[2]=o,h[3]=t,h[4]=r,h[5]=c,h[6]=n,h[7]=a,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,i=t.elements,r=this.elements,a=n[0],o=n[3],c=n[6],l=n[1],h=n[4],d=n[7],u=n[2],f=n[5],_=n[8],x=i[0],p=i[3],m=i[6],v=i[1],T=i[4],S=i[7],w=i[2],E=i[5],g=i[8];return r[0]=a*x+o*v+c*w,r[3]=a*p+o*T+c*E,r[6]=a*m+o*S+c*g,r[1]=l*x+h*v+d*w,r[4]=l*p+h*T+d*E,r[7]=l*m+h*S+d*g,r[2]=u*x+f*v+_*w,r[5]=u*p+f*T+_*E,r[8]=u*m+f*S+_*g,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8];return t*a*h-t*o*l-n*r*h+n*o*c+i*r*l-i*a*c}invert(){let e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8],d=h*a-o*l,u=o*c-h*r,f=l*r-a*c,_=t*d+n*u+i*f;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/_;return e[0]=d*x,e[1]=(i*l-h*n)*x,e[2]=(o*n-i*a)*x,e[3]=u*x,e[4]=(h*t-i*c)*x,e[5]=(i*r-o*t)*x,e[6]=f*x,e[7]=(n*c-l*t)*x,e[8]=(a*t-n*r)*x,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,r,a,o){let c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*a+l*o)+a+e,-i*l,i*c,-i*(-l*a+c*o)+o+t,0,0,1),this}scale(e,t){return Ks(`Matrix3: .scale() is deprecated. Use .makeScale() instead.`),this.premultiply(xl.makeScale(e,t)),this}rotate(e){return Ks(`Matrix3: .rotate() is deprecated. Use .makeRotation() instead.`),this.premultiply(xl.makeRotation(-e)),this}translate(e,t){return Ks(`Matrix3: .translate() is deprecated. Use .makeTranslation() instead.`),this.premultiply(xl.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}};var xl=new Be;var Th=new Be().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322);var wh=new Be().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function df(){let s={enabled:!0,workingColorSpace:er,spaces:{},convert:function(i,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===ot&&(i.r=ni(i.r),i.g=ni(i.g),i.b=ni(i.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(i.applyMatrix3(this.spaces[r].toXYZ),i.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===ot&&(i.r=fs(i.r),i.g=fs(i.g),i.b=fs(i.b))),i},workingToColorSpace:function(i,r){return this.convert(i,this.workingColorSpace,r)},colorSpaceToWorking:function(i,r){return this.convert(i,r,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===hi?tr:this.spaces[i].transfer},getToneMappingMode:function(i){return this.spaces[i].outputColorSpaceConfig.toneMappingMode||`standard`},getLuminanceCoefficients:function(i,r=this.workingColorSpace){return i.fromArray(this.spaces[r].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,r,a){return i.copy(this.spaces[a].fromXYZ).multiply(this.spaces[r].toXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return s.define({[er]:{primaries:e,whitePoint:n,transfer:tr,toXYZ:Th,fromXYZ:wh,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:wt},outputColorSpaceConfig:{drawingBufferColorSpace:wt}},[wt]:{primaries:e,whitePoint:n,transfer:ot,toXYZ:Th,fromXYZ:wh,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:wt}}}),s}var Ye=df();function ni(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function fs(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}var Zi;var Ha=class{static getDataURL(e,t=`image/png`){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>`u`)return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Zi===void 0&&(Zi=_s(`canvas`)),Zi.width=e.width,Zi.height=e.height;let i=Zi.getContext(`2d`);e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=Zi}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap){let t=_s(`canvas`);t.width=e.width,t.height=e.height;let n=t.getContext(`2d`);n.drawImage(e,0,0,e.width,e.height);let i=n.getImageData(0,0,e.width,e.height),r=i.data;for(let a=0;a<r.length;a++)r[a]=ni(r[a]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(ni(t[n]/255)*255):t[n]=ni(t[n]);return{data:t,width:e.width,height:e.height}}else return Ie(`ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied.`),e}};var ff=0;var vs=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:ff++}),this.uuid=Ci(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<`u`&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<`u`&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width||0,t.height||0,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e==`string`;if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:``},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?r.push(yl(i[a].image)):r.push(yl(i[a]))}else r=yl(i);n.url=r}return t||(e.images[this.uuid]=n),n}};function yl(s){return typeof HTMLImageElement<`u`&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&s instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&s instanceof ImageBitmap?Ha.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(Ie(`Texture: Unable to serialize Texture.`),{})}var pf=0;var vl=new P;var jt=class s extends In{constructor(e=s.DEFAULT_IMAGE,t=s.DEFAULT_MAPPING,n=Sn,i=Sn,r=tn,a=li,o=Bn,c=ln,l=s.DEFAULT_ANISOTROPY,h=hi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:pf++}),this.uuid=Ci(),this.name=``,this.source=new vs(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new Se(0,0),this.repeat=new Se(1,1),this.center=new Se(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Be,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(vl).x}get height(){return this.source.getSize(vl).y}get depth(){return this.source.getSize(vl).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.mipmapsAutoUpdate=e.mipmapsAutoUpdate,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isPMREMTexture=e.isPMREMTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){Ie(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let i=this[t];if(i===void 0){Ie(`Texture.setValues(): property '${t}' does not exist.`);continue}i&&n&&i.isVector2&&n.isVector2||i&&n&&i.isVector3&&n.isVector3||i&&n&&i.isMatrix3&&n.isMatrix3?i.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e==`string`;if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:`Texture`,generator:`Texture.toJSON`},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:`dispose`})}transformUv(e){if(this.mapping!==dc)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case yi:e.x=e.x-Math.floor(e.x);break;case Sn:e.x=e.x<0?0:1;break;case ka:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x)}if(e.y<0||e.y>1)switch(this.wrapT){case yi:e.y=e.y-Math.floor(e.y);break;case Sn:e.y=e.y<0?0:1;break;case ka:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y)}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};jt.DEFAULT_IMAGE=null;jt.DEFAULT_MAPPING=dc;jt.DEFAULT_ANISOTROPY=1;var yt=class{static{this.prototype.isVector4=!0}constructor(e=0,t=0,n=0,i=1){this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error(`THREE.Vector4: index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error(`THREE.Vector4: index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,i=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*i+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*i+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*i+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*i+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,r,c=e.elements,l=c[0],h=c[4],d=c[8],u=c[1],f=c[5],_=c[9],x=c[2],p=c[6],m=c[10];if(Math.abs(h-u)<.01&&Math.abs(d-x)<.01&&Math.abs(_-p)<.01){if(Math.abs(h+u)<.1&&Math.abs(d+x)<.1&&Math.abs(_+p)<.1&&Math.abs(l+f+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let T=(l+1)/2,S=(f+1)/2,w=(m+1)/2,E=(h+u)/4,g=(d+x)/4,M=(_+p)/4;return T>S&&T>w?T<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(T),i=E/n,r=g/n):S>w?S<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(S),n=E/i,r=M/i):w<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(w),n=g/r,i=M/r),this.set(n,i,r,t),this}let v=Math.sqrt((p-_)*(p-_)+(d-x)*(d-x)+(u-h)*(u-h));return Math.abs(v)<.001&&(v=1),this.x=(p-_)/v,this.y=(d-x)/v,this.z=(u-h)/v,this.w=Math.acos((l+f+m-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=je(this.x,e.x,t.x),this.y=je(this.y,e.y,t.y),this.z=je(this.z,e.z,t.z),this.w=je(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=je(this.x,e,t),this.y=je(this.y,e,t),this.z=je(this.z,e,t),this.w=je(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(je(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};var Ga=class extends In{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:tn,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new yt(0,0,e,t),this.scissorTest=!1,this.viewport=new yt(0,0,e,t),this.textures=[];let i=n.count;for(let r=0;r<i;r++)this.textures[r]=new jt({width:e,height:t,depth:n.depth}),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:tn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.mipmapsAutoUpdate!==void 0&&(t.mipmapsAutoUpdate=e.mipmapsAutoUpdate),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n,this.textures[i].isData3DTexture!==!0&&(this.textures[i].isArrayTexture=this.textures[i].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let i=Object.assign({},e.textures[t].image);this.textures[t].source=new vs(i)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;else this.depthTexture=null;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:`dispose`})}};var fn=class extends Ga{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}};var ir=class extends jt{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Bt,this.minFilter=Bt,this.wrapR=Sn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=/* @__PURE__ */ new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var Va=class extends jt{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Bt,this.minFilter=Bt,this.wrapR=Sn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}};var ht=class s{static{this.prototype.isMatrix4=!0}constructor(e,t,n,i,r,a,o,c,l,h,d,u,f,_,x,p){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,a,o,c,l,h,d,u,f,_,x,p)}set(e,t,n,i,r,a,o,c,l,h,d,u,f,_,x,p){let m=this.elements;return m[0]=e,m[4]=t,m[8]=n,m[12]=i,m[1]=r,m[5]=a,m[9]=o,m[13]=c,m[2]=l,m[6]=h,m[10]=d,m[14]=u,m[3]=f,m[7]=_,m[11]=x,m[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new s().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,i=1/Ki.setFromMatrixColumn(e,0).length(),r=1/Ki.setFromMatrixColumn(e,1).length(),a=1/Ki.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,i=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(i),l=Math.sin(i),h=Math.cos(r),d=Math.sin(r);if(e.order===`XYZ`){let u=a*h,f=a*d,_=o*h,x=o*d;t[0]=c*h,t[4]=-c*d,t[8]=l,t[1]=f+_*l,t[5]=u-x*l,t[9]=-o*c,t[2]=x-u*l,t[6]=_+f*l,t[10]=a*c}else if(e.order===`YXZ`){let u=c*h,f=c*d,_=l*h,x=l*d;t[0]=u+x*o,t[4]=_*o-f,t[8]=a*l,t[1]=a*d,t[5]=a*h,t[9]=-o,t[2]=f*o-_,t[6]=x+u*o,t[10]=a*c}else if(e.order===`ZXY`){let u=c*h,f=c*d,_=l*h,x=l*d;t[0]=u-x*o,t[4]=-a*d,t[8]=_+f*o,t[1]=f+_*o,t[5]=a*h,t[9]=x-u*o,t[2]=-a*l,t[6]=o,t[10]=a*c}else if(e.order===`ZYX`){let u=a*h,f=a*d,_=o*h,x=o*d;t[0]=c*h,t[4]=_*l-f,t[8]=u*l+x,t[1]=c*d,t[5]=x*l+u,t[9]=f*l-_,t[2]=-l,t[6]=o*c,t[10]=a*c}else if(e.order===`YZX`){let u=a*c,f=a*l,_=o*c,x=o*l;t[0]=c*h,t[4]=x-u*d,t[8]=_*d+f,t[1]=d,t[5]=a*h,t[9]=-o*h,t[2]=-l*h,t[6]=f*d+_,t[10]=u-x*d}else if(e.order===`XZY`){let u=a*c,f=a*l,_=o*c,x=o*l;t[0]=c*h,t[4]=-d,t[8]=l*h,t[1]=u*d+x,t[5]=a*h,t[9]=f*d-_,t[2]=_*d-f,t[6]=o*h,t[10]=x*d+u}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(mf,e,gf)}lookAt(e,t,n){let i=this.elements;return un.subVectors(e,t),un.lengthSq()===0&&(un.z=1),un.normalize(),pi.crossVectors(n,un),pi.lengthSq()===0&&(Math.abs(n.z)===1?un.x+=1e-4:un.z+=1e-4,un.normalize(),pi.crossVectors(n,un)),pi.normalize(),na.crossVectors(un,pi),i[0]=pi.x,i[4]=na.x,i[8]=un.x,i[1]=pi.y,i[5]=na.y,i[9]=un.y,i[2]=pi.z,i[6]=na.z,i[10]=un.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,i=t.elements,r=this.elements,a=n[0],o=n[4],c=n[8],l=n[12],h=n[1],d=n[5],u=n[9],f=n[13],_=n[2],x=n[6],p=n[10],m=n[14],v=n[3],T=n[7],S=n[11],w=n[15],E=i[0],g=i[4],M=i[8],N=i[12],R=i[1],L=i[5],U=i[9],V=i[13],I=i[2],H=i[6],$=i[10],z=i[14],re=i[3],X=i[7],ee=i[11],ne=i[15];return r[0]=a*E+o*R+c*I+l*re,r[4]=a*g+o*L+c*H+l*X,r[8]=a*M+o*U+c*$+l*ee,r[12]=a*N+o*V+c*z+l*ne,r[1]=h*E+d*R+u*I+f*re,r[5]=h*g+d*L+u*H+f*X,r[9]=h*M+d*U+u*$+f*ee,r[13]=h*N+d*V+u*z+f*ne,r[2]=_*E+x*R+p*I+m*re,r[6]=_*g+x*L+p*H+m*X,r[10]=_*M+x*U+p*$+m*ee,r[14]=_*N+x*V+p*z+m*ne,r[3]=v*E+T*R+S*I+w*re,r[7]=v*g+T*L+S*H+w*X,r[11]=v*M+T*U+S*$+w*ee,r[15]=v*N+T*V+S*z+w*ne,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],i=e[8],r=e[12],a=e[1],o=e[5],c=e[9],l=e[13],h=e[2],d=e[6],u=e[10],f=e[14],_=e[3],x=e[7],p=e[11],m=e[15],v=c*f-l*u,T=o*f-l*d,S=o*u-c*d,w=a*f-l*h,E=a*u-c*h,g=a*d-o*h;return t*(x*v-p*T+m*S)-n*(_*v-p*w+m*E)+i*(_*T-x*w+m*g)-r*(_*S-x*E+p*g)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],i=e[8],r=e[1],a=e[5],o=e[9],c=e[2],l=e[6],h=e[10];return t*(a*h-o*l)-n*(r*h-o*c)+i*(r*l-a*c)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8],d=e[9],u=e[10],f=e[11],_=e[12],x=e[13],p=e[14],m=e[15],v=t*o-n*a,T=t*c-i*a,S=t*l-r*a,w=n*c-i*o,E=n*l-r*o,g=i*l-r*c,M=h*x-d*_,N=h*p-u*_,R=h*m-f*_,L=d*p-u*x,U=d*m-f*x,V=u*m-f*p,I=v*V-T*U+S*L+w*R-E*N+g*M;if(I===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let H=1/I;return e[0]=(o*V-c*U+l*L)*H,e[1]=(i*U-n*V-r*L)*H,e[2]=(x*g-p*E+m*w)*H,e[3]=(u*E-d*g-f*w)*H,e[4]=(c*R-a*V-l*N)*H,e[5]=(t*V-i*R+r*N)*H,e[6]=(p*S-_*g-m*T)*H,e[7]=(h*g-u*S+f*T)*H,e[8]=(a*U-o*R+l*M)*H,e[9]=(n*R-t*U-r*M)*H,e[10]=(_*E-x*S+m*v)*H,e[11]=(d*S-h*E-f*v)*H,e[12]=(o*N-a*L-c*M)*H,e[13]=(t*L-n*N+i*M)*H,e[14]=(x*T-_*w-p*v)*H,e[15]=(h*w-d*T+u*v)*H,this}scale(e){let t=this.elements,n=e.x,i=e.y,r=e.z;return t[0]*=n,t[4]*=i,t[8]*=r,t[1]*=n,t[5]*=i,t[9]*=r,t[2]*=n,t[6]*=i,t[10]*=r,t[3]*=n,t[7]*=i,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),i=Math.sin(t),r=1-n,a=e.x,o=e.y,c=e.z,l=r*a,h=r*o;return this.set(l*a+n,l*o-i*c,l*c+i*o,0,l*o+i*c,h*o+n,h*c-i*a,0,l*c-i*o,h*c+i*a,r*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,r,a){return this.set(1,n,r,0,e,1,a,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){let i=this.elements,r=t._x,a=t._y,o=t._z,c=t._w,l=r+r,h=a+a,d=o+o,u=r*l,f=r*h,_=r*d,x=a*h,p=a*d,m=o*d,v=c*l,T=c*h,S=c*d,w=n.x,E=n.y,g=n.z;return i[0]=(1-(x+m))*w,i[1]=(f+S)*w,i[2]=(_-T)*w,i[3]=0,i[4]=(f-S)*E,i[5]=(1-(u+m))*E,i[6]=(p+v)*E,i[7]=0,i[8]=(_+T)*g,i[9]=(p-v)*g,i[10]=(1-(u+x))*g,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){let i=this.elements;e.x=i[12],e.y=i[13],e.z=i[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),t.identity(),this;let a=Ki.set(i[0],i[1],i[2]).length(),o=Ki.set(i[4],i[5],i[6]).length(),c=Ki.set(i[8],i[9],i[10]).length();r<0&&(a=-a),Rn.copy(this);let l=1/a,h=1/o,d=1/c;return Rn.elements[0]*=l,Rn.elements[1]*=l,Rn.elements[2]*=l,Rn.elements[4]*=h,Rn.elements[5]*=h,Rn.elements[6]*=h,Rn.elements[8]*=d,Rn.elements[9]*=d,Rn.elements[10]*=d,t.setFromRotationMatrix(Rn),n.x=a,n.y=o,n.z=c,this}makePerspective(e,t,n,i,r,a,o=Mn,c=!1){let l=this.elements,h=2*r/(t-e),d=2*r/(n-i),u=(t+e)/(t-e),f=(n+i)/(n-i),_,x;if(c)_=r/(a-r),x=a*r/(a-r);else if(o===Mn)_=-(a+r)/(a-r),x=-2*a*r/(a-r);else if(o===gs)_=-a/(a-r),x=-a*r/(a-r);else throw new Error(`THREE.Matrix4.makePerspective(): Invalid coordinate system: `+o);return l[0]=h,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=d,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=_,l[14]=x,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,i,r,a,o=Mn,c=!1){let l=this.elements,h=2/(t-e),d=2/(n-i),u=-(t+e)/(t-e),f=-(n+i)/(n-i),_,x;if(c)_=1/(a-r),x=a/(a-r);else if(o===Mn)_=-2/(a-r),x=-(a+r)/(a-r);else if(o===gs)_=-1/(a-r),x=-r/(a-r);else throw new Error(`THREE.Matrix4.makeOrthographic(): Invalid coordinate system: `+o);return l[0]=h,l[4]=0,l[8]=0,l[12]=u,l[1]=0,l[5]=d,l[9]=0,l[13]=f,l[2]=0,l[6]=0,l[10]=_,l[14]=x,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}};var Ki=new P;var Rn=new ht;var mf=new P(0,0,0);var gf=new P(1,1,1);var pi=new P;var na=new P;var un=new P;var Ah=new ht;var Ch=new Gt;var En=class s{constructor(e=0,t=0,n=0,i=s.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let i=e.elements,r=i[0],a=i[4],o=i[8],c=i[1],l=i[5],h=i[9],d=i[2],u=i[6],f=i[10];switch(t){case`XYZ`:this._y=Math.asin(je(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(u,l),this._z=0);break;case`YXZ`:this._x=Math.asin(-je(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-d,r),this._z=0);break;case`ZXY`:this._x=Math.asin(je(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,r));break;case`ZYX`:this._y=Math.asin(-je(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,f),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-a,l));break;case`YZX`:this._z=Math.asin(je(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(o,f));break;case`XZY`:this._z=Math.asin(-je(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(u,l),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:Ie(`Euler: .setFromRotationMatrix() encountered an unknown order: `+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Ah.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Ah,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Ch.setFromEuler(this),this.setFromQuaternion(Ch,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};En.DEFAULT_ORDER=`XYZ`;var bs=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}};var _f=0;var Rh=new P;var Ji=new Gt;var Zn=new ht;var ia=new P;var Gs=new P;var xf=new P;var yf=new Gt;var Ph=new P(1,0,0);var Dh=new P(0,1,0);var Ih=new P(0,0,1);var Lh={type:`added`};var vf={type:`removed`};var $i={type:`childadded`,child:null};var bl={type:`childremoved`,child:null};var At=class s$1 extends In{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:_f++}),this.uuid=Ci(),this.name=``,this.type=`Object3D`,this.parent=null,this.children=[],this.up=s$1.DEFAULT_UP.clone();let e=new P,t=new En,n=new Gt,i=new P(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new ht},normalMatrix:{value:new Be}}),this.matrix=new ht,this.matrixWorld=new ht,this.matrixAutoUpdate=s$1.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=s$1.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new bs,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ji.setFromAxisAngle(e,t),this.quaternion.multiply(Ji),this}rotateOnWorldAxis(e,t){return Ji.setFromAxisAngle(e,t),this.quaternion.premultiply(Ji),this}rotateX(e){return this.rotateOnAxis(Ph,e)}rotateY(e){return this.rotateOnAxis(Dh,e)}rotateZ(e){return this.rotateOnAxis(Ih,e)}translateOnAxis(e,t){return Rh.copy(e).applyQuaternion(this.quaternion),this.position.add(Rh.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Ph,e)}translateY(e){return this.translateOnAxis(Dh,e)}translateZ(e){return this.translateOnAxis(Ih,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Zn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?ia.copy(e):ia.set(e,t,n);let i=this.parent;this.updateWorldMatrix(!0,!1),Gs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Zn.lookAt(Gs,ia,this.up):Zn.lookAt(ia,Gs,this.up),this.quaternion.setFromRotationMatrix(Zn),i&&(Zn.extractRotation(i.matrixWorld),Ji.setFromRotationMatrix(Zn),this.quaternion.premultiply(Ji.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Fe(`Object3D.add: object can't be added as a child of itself.`,e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Lh),$i.child=e,this.dispatchEvent($i),$i.child=null):Fe(`Object3D.add: object not an instance of THREE.Object3D.`,e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(vf),bl.child=e,this.dispatchEvent(bl),bl.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Zn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Zn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Zn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Lh),$i.child=e,this.dispatchEvent($i),$i.child=null,this}getObjectById(e){return this.getObjectByProperty(`id`,e)}getObjectByName(e){return this.getObjectByProperty(`name`,e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){let a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Gs,e,xf),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Gs,yf,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(e){e(this);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,i=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*n-r[8]*i,r[13]+=n-r[1]*t-r[5]*n-r[9]*i,r[14]+=i-r[2]*t-r[6]*n-r[10]*i}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){let r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e==`string`,n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:`Object`,generator:`Object3D.toJSON`});let i={};i.uuid=this.uuid,i.type=this.type,i.name=this.name,i.castShadow=this.castShadow,i.receiveShadow=this.receiveShadow,i.visible=this.visible,i.frustumCulled=this.frustumCulled,i.renderOrder=this.renderOrder,i.static=this.static,i.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.pivot!==null&&(i.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(i.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(i.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(i.type=`InstancedMesh`,i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type=`BatchedMesh`,i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(o=>s(r({},o),{boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(o=>r({},o)),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(e),i.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON()));function r$1(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r$1(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let c=o.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){let d=c[l];r$1(e.shapes,d)}else r$1(e.shapes,c)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r$1(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(r$1(e.materials,this.material[c]));i.material=o}else i.material=r$1(e.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){let c=this.animations[o];i.animations.push(r$1(e.animations,c))}}if(t){let o=a(e.geometries),c=a(e.materials),l=a(e.textures),h=a(e.images),d=a(e.shapes),u=a(e.skeletons),f=a(e.animations),_=a(e.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),u.length>0&&(n.skeletons=u),f.length>0&&(n.animations=f),_.length>0&&(n.nodes=_)}return n.object=i,n;function a(o){let c=[];for(let l in o){let h=o[l];delete h.metadata,c.push(h)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let i=e.children[n];this.add(i.clone())}return this}dispose(){this.dispatchEvent({type:`dispose`})}};At.DEFAULT_UP=new P(0,1,0);At.DEFAULT_MATRIX_AUTO_UPDATE=!0;At.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var en=class extends At{constructor(){super(),this.isGroup=!0,this.type=`Group`}};var bf={type:`move`};var Ss=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new en,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new en,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new P,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new P),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new en,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new P,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new P,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:`connected`,data:e}),this}disconnect(e){return this.dispatchEvent({type:`disconnected`,data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,r=null,a=null,o=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!==`visible-blurred`){if(l&&e.hand){a=!0;for(let x of e.hand.values()){let p=t.getJointPose(x,n),m=this._getHandJoint(l,x);p!==null&&(m.matrix.fromArray(p.transform.matrix),m.matrix.decompose(m.position,m.quaternion,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=p.radius),m.visible=p!==null}let h=l.joints[`index-finger-tip`],d=l.joints[`thumb-tip`],u=h.position.distanceTo(d.position);l.inputState.pinching&&u>.025?(l.inputState.pinching=!1,this.dispatchEvent({type:`pinchend`,handedness:e.handedness,target:this})):!l.inputState.pinching&&u<=.015&&(l.inputState.pinching=!0,this.dispatchEvent({type:`pinchstart`,handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.quaternion,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1,c.eventsEnabled&&c.dispatchEvent({type:`gripUpdated`,data:e,target:this})));o!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(bf)))}return o!==null&&(o.visible=i!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new en;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}};var Gu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074};var mi={h:0,s:0,l:0};var sa={h:0,s:0,l:0};function Sl(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}var Ce=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let i=e;i&&i.isColor?this.copy(i):typeof i==`number`?this.setHex(i):typeof i==`string`&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=wt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ye.colorSpaceToWorking(this,t),this}setRGB(e,t,n,i=Ye.workingColorSpace){return this.r=e,this.g=t,this.b=n,Ye.colorSpaceToWorking(this,i),this}setHSL(e,t,n,i=Ye.workingColorSpace){if(e=Tc(e,1),t=je(t,0,1),n=je(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=Sl(a,r,e+1/3),this.g=Sl(a,r,e),this.b=Sl(a,r,e-1/3)}return Ye.colorSpaceToWorking(this,i),this}setStyle(e,t=wt){function n(r){r!==void 0&&parseFloat(r)<1&&Ie(`Color: Alpha component of `+e+` will be ignored.`)}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,a=i[1],o=i[2];switch(a){case`rgb`:case`rgba`:if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseFloat(r[1]))/100,Math.min(100,parseFloat(r[2]))/100,Math.min(100,parseFloat(r[3]))/100,t);break;case`hsl`:case`hsla`:if(r=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:Ie(`Color: Unknown color model `+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=i[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);Ie(`Color: Invalid hex color `+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=wt){let n=Gu[e.toLowerCase()];return n!==void 0?this.setHex(n,t):Ie(`Color: Unknown color `+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ni(e.r),this.g=ni(e.g),this.b=ni(e.b),this}copyLinearToSRGB(e){return this.r=fs(e.r),this.g=fs(e.g),this.b=fs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=wt){return Ye.workingToColorSpace(qt.copy(this),e),Math.round(je(qt.r*255,0,255))*65536+Math.round(je(qt.g*255,0,255))*256+Math.round(je(qt.b*255,0,255))}getHexString(e=wt){return(`000000`+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ye.workingColorSpace){Ye.workingToColorSpace(qt.copy(this),t);let n=qt.r,i=qt.g,r=qt.b,a=Math.max(n,i,r),o=Math.min(n,i,r),c,l,h=(o+a)/2;if(o===a)c=0,l=0;else{let d=a-o;switch(l=h<=.5?d/(a+o):d/(2-a-o),a){case n:c=(i-r)/d+(i<r?6:0);break;case i:c=(r-n)/d+2;break;case r:c=(n-i)/d+4}c/=6}return e.h=c,e.s=l,e.l=h,e}getRGB(e,t=Ye.workingColorSpace){return Ye.workingToColorSpace(qt.copy(this),t),e.r=qt.r,e.g=qt.g,e.b=qt.b,e}getStyle(e=wt){Ye.workingToColorSpace(qt.copy(this),e);let t=qt.r,n=qt.g,i=qt.b;return e!==wt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(mi),this.setHSL(mi.h+e,mi.s+t,mi.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(mi),e.getHSL(sa);let n=$s(mi.h,sa.h,t),i=$s(mi.s,sa.s,t),r=$s(mi.l,sa.l,t);return this.setHSL(n,i,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,i=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*i,this.g=r[1]*t+r[4]*n+r[7]*i,this.b=r[2]*t+r[5]*n+r[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}};var qt=new Ce;Ce.NAMES=Gu;var sr=class extends At{constructor(){super(),this.isScene=!0,this.type=`Scene`,this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new En,this.environmentIntensity=1,this.environmentRotation=new En,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`observe`,{detail:this}))}copy(e,t){return super.copy(e,t),this.background=e.background!==null?e.background.clone():null,this.environment=e.environment!==null?e.environment.clone():null,this.fog=e.fog!==null?e.fog.clone():null,this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),this.overrideMaterial=e.overrideMaterial!==null?e.overrideMaterial.clone():null,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}};var Pn=new P;var Kn=new P;var Ml=new P;var Jn=new P;var Qi=new P;var es=new P;var Nh=new P;var El=new P;var Tl=new P;var wl=new P;var Al=new yt;var Cl=new yt;var Rl=new yt;var ti=class s{constructor(e=new P,t=new P,n=new P){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),Pn.subVectors(e,t),i.cross(Pn);let r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(e,t,n,i,r){Pn.subVectors(i,t),Kn.subVectors(n,t),Ml.subVectors(e,t);let a=Pn.dot(Pn),o=Pn.dot(Kn),c=Pn.dot(Ml),l=Kn.dot(Kn),h=Kn.dot(Ml),d=a*l-o*o;if(d===0)return r.set(0,0,0),null;let u=1/d,f=(l*c-o*h)*u,_=(a*h-o*c)*u;return r.set(1-f-_,_,f)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,Jn)===null?!1:Jn.x>=0&&Jn.y>=0&&Jn.x+Jn.y<=1}static getInterpolation(e,t,n,i,r,a,o,c){return this.getBarycoord(e,t,n,i,Jn)===null?(c.x=0,c.y=0,`z`in c&&(c.z=0),`w`in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,Jn.x),c.addScaledVector(a,Jn.y),c.addScaledVector(o,Jn.z),c)}static getInterpolatedAttribute(e,t,n,i,r,a){return Al.setScalar(0),Cl.setScalar(0),Rl.setScalar(0),Al.fromBufferAttribute(e,t),Cl.fromBufferAttribute(e,n),Rl.fromBufferAttribute(e,i),a.setScalar(0),a.addScaledVector(Al,r.x),a.addScaledVector(Cl,r.y),a.addScaledVector(Rl,r.z),a}static isFrontFacing(e,t,n,i){return Pn.subVectors(n,t),Kn.subVectors(e,t),Pn.cross(Kn).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Pn.subVectors(this.c,this.b),Kn.subVectors(this.a,this.b),Pn.cross(Kn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return s.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return s.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,r){return s.getInterpolation(e,this.a,this.b,this.c,t,n,i,r)}containsPoint(e){return s.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return s.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,i=this.b,r=this.c,a,o;Qi.subVectors(i,n),es.subVectors(r,n),El.subVectors(e,n);let c=Qi.dot(El),l=es.dot(El);if(c<=0&&l<=0)return t.copy(n);Tl.subVectors(e,i);let h=Qi.dot(Tl),d=es.dot(Tl);if(h>=0&&d<=h)return t.copy(i);let u=c*d-h*l;if(u<=0&&c>=0&&h<=0&&c-h>0)return a=c/(c-h),t.copy(n).addScaledVector(Qi,a);wl.subVectors(e,r);let f=Qi.dot(wl),_=es.dot(wl);if(_>=0&&f<=_)return t.copy(r);let x=f*l-c*_;if(x<=0&&l>=0&&_<=0)return o=l/(l-_),t.copy(n).addScaledVector(es,o);let p=h*_-f*d;if(p<=0&&d-h>=0&&f-_>=0)return Nh.subVectors(r,i),o=(d-h)/(d-h+(f-_)),t.copy(i).addScaledVector(Nh,o);let m=1/(p+x+u);return a=x*m,o=u*m,t.copy(n).addScaledVector(Qi,a).addScaledVector(es,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}};var Tn=class{constructor(e=new P(1/0,1/0,1/0),t=new P(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Dn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Dn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=Dn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute(`position`);if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0&&e.isBatchedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Dn):Dn.fromBufferAttribute(r,a),Dn.applyMatrix4(e.matrixWorld),this.expandByPoint(Dn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ra.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),ra.copy(n.boundingBox)),ra.applyMatrix4(e.matrixWorld),this.union(ra)}let i=e.children;for(let r=0,a=i.length;r<a;r++)this.expandByObject(i[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Dn),Dn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Vs),aa.subVectors(this.max,Vs),ts.subVectors(e.a,Vs),ns.subVectors(e.b,Vs),is.subVectors(e.c,Vs),gi.subVectors(ns,ts),_i.subVectors(is,ns),Oi.subVectors(ts,is);let t=[0,-gi.z,gi.y,0,-_i.z,_i.y,0,-Oi.z,Oi.y,gi.z,0,-gi.x,_i.z,0,-_i.x,Oi.z,0,-Oi.x,-gi.y,gi.x,0,-_i.y,_i.x,0,-Oi.y,Oi.x,0];return!Pl(t,ts,ns,is,aa)||(t=[1,0,0,0,1,0,0,0,1],!Pl(t,ts,ns,is,aa))?!1:(oa.crossVectors(gi,_i),t=[oa.x,oa.y,oa.z],Pl(t,ts,ns,is,aa))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Dn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Dn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:($n[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),$n[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),$n[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),$n[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),$n[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),$n[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),$n[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),$n[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints($n),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}};var $n=[new P,new P,new P,new P,new P,new P,new P,new P];var Dn=new P;var ra=new Tn;var ts=new P;var ns=new P;var is=new P;var gi=new P;var _i=new P;var Oi=new P;var Vs=new P;var aa=new P;var oa=new P;var Ui=new P;function Pl(s,e,t,n,i){for(let r=0,a=s.length-3;r<=a;r+=3){Ui.fromArray(s,r);let o=i.x*Math.abs(Ui.x)+i.y*Math.abs(Ui.y)+i.z*Math.abs(Ui.z),c=e.dot(Ui),l=t.dot(Ui),h=n.dot(Ui);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>o)return!1}return!0}var Tt=new P;var la=new Se;var Sf=0;var xt=class extends In{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError(`THREE.BufferAttribute: array should be a Typed Array.`);this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Sf++}),this.name=``,this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Mc,this.updateRanges=[],this.gpuType=Un,this.version=0,this._normalizationScale=e!==void 0?Jo(e):void 0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this._normalizationScale=e._normalizationScale,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)la.fromBufferAttribute(this,t),la.applyMatrix3(e),this.setXY(t,la.x,la.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Tt.fromBufferAttribute(this,t),Tt.applyMatrix3(e),this.setXYZ(t,Tt.x,Tt.y,Tt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Tt.fromBufferAttribute(this,t),Tt.applyMatrix4(e),this.setXYZ(t,Tt.x,Tt.y,Tt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Tt.fromBufferAttribute(this,t),Tt.applyNormalMatrix(e),this.setXYZ(t,Tt.x,Tt.y,Tt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Tt.fromBufferAttribute(this,t),Tt.transformDirection(e),this.setXYZ(t,Tt.x,Tt.y,Tt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=this._denormalize(n)),n}setComponent(e,t,n){return this.normalized&&(n=this._normalize(n)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=this._denormalize(t)),t}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=this._denormalize(t)),t}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=this._denormalize(t)),t}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=this._denormalize(t)),t}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n),i=this._normalize(i)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n),i=this._normalize(i),r=this._normalize(r)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:`dispose`})}_denormalize(e){let t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):Ac(e,this.array)}_normalize(e){let t=this._normalizationScale;return t!==void 0?Math.round(e*t):Cc(e,this.array)}};var rr=class extends xt{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var ar=class extends xt{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var Xe=class extends xt{constructor(e,t,n){super(new Float32Array(e),t,n)}};var Mf=new Tn;var Ws=new P;var Dl=new P;var vi=class{constructor(e=new P,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):Mf.setFromPoints(e).getCenter(n);let i=0;for(let r=0,a=e.length;r<a;r++)i=Math.max(i,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ws.subVectors(e,this.center);let t=Ws.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(Ws,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Dl.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ws.copy(e.center).add(Dl)),this.expandByPoint(Ws.copy(e.center).sub(Dl))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}};var Ef=0;var bn=new ht;var Il=new At;var ss=new P;var dn=new Tn;var Xs=new Tn;var Ft=new P;var nt=class s extends In{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Ef++}),this.uuid=Ci(),this.name=``,this.type=`BufferGeometry`,this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(jd(e)?ar:rr)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Be().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return bn.makeRotationFromQuaternion(e),this.applyMatrix4(bn),this}rotateX(e){return bn.makeRotationX(e),this.applyMatrix4(bn),this}rotateY(e){return bn.makeRotationY(e),this.applyMatrix4(bn),this}rotateZ(e){return bn.makeRotationZ(e),this.applyMatrix4(bn),this}translate(e,t,n){return bn.makeTranslation(e,t,n),this.applyMatrix4(bn),this}scale(e,t,n){return bn.makeScale(e,t,n),this.applyMatrix4(bn),this}lookAt(e){return Il.lookAt(e),Il.updateMatrix(),this.applyMatrix4(Il.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ss).negate(),this.translate(ss.x,ss.y,ss.z),this}setFromPoints(e){let t=this.getAttribute(`position`);if(t===void 0){let n=[];for(let i=0,r=e.length;i<r;i++){let a=e[i];n.push(a.x,a.y,a.z||0)}this.setAttribute(`position`,new Xe(n,3))}else{let n=Math.min(e.length,t.count);for(let i=0;i<n;i++){let r=e[i];t.setXYZ(i,r.x,r.y,r.z||0)}e.length>t.count&&Ie(`BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry.`),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Tn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Fe(`BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.`,this),this.boundingBox.set(new P(-1/0,-1/0,-1/0),new P(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){let r=t[n];dn.setFromBufferAttribute(r),this.morphTargetsRelative?(Ft.addVectors(this.boundingBox.min,dn.min),this.boundingBox.expandByPoint(Ft),Ft.addVectors(this.boundingBox.max,dn.max),this.boundingBox.expandByPoint(Ft)):(this.boundingBox.expandByPoint(dn.min),this.boundingBox.expandByPoint(dn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Fe(`BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.`,this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new vi);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Fe(`BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.`,this),this.boundingSphere.set(new P,1/0);return}if(e){let n=this.boundingSphere.center;if(dn.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){let o=t[r];Xs.setFromBufferAttribute(o),this.morphTargetsRelative?(Ft.addVectors(dn.min,Xs.min),dn.expandByPoint(Ft),Ft.addVectors(dn.max,Xs.max),dn.expandByPoint(Ft)):(dn.expandByPoint(Xs.min),dn.expandByPoint(Xs.max))}dn.getCenter(n);let i=0;for(let r=0,a=e.count;r<a;r++)Ft.fromBufferAttribute(e,r),i=Math.max(i,n.distanceToSquared(Ft));if(t)for(let r=0,a=t.length;r<a;r++){let o=t[r],c=this.morphTargetsRelative;for(let l=0,h=o.count;l<h;l++)Ft.fromBufferAttribute(o,l),c&&(ss.fromBufferAttribute(e,l),Ft.add(ss)),i=Math.max(i,n.distanceToSquared(Ft))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&Fe(`BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.`,this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Fe(`BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)`);return}let n=t.position,i=t.normal,r=t.uv,a=this.getAttribute(`tangent`);(a===void 0||a.count!==n.count)&&(a=new xt(new Float32Array(4*n.count),4),this.setAttribute(`tangent`,a));let o=[],c=[],l=new Uint8Array(n.count);for(let N=0;N<n.count;N++)o[N]=new P,c[N]=new P;let h=new P,d=new P,u=new P,f=new Se,_=new Se,x=new Se,p=new P,m=new P;function v(N,R,L){l[N]=l[R]=l[L]=1,h.fromBufferAttribute(n,N),d.fromBufferAttribute(n,R),u.fromBufferAttribute(n,L),f.fromBufferAttribute(r,N),_.fromBufferAttribute(r,R),x.fromBufferAttribute(r,L),d.sub(h),u.sub(h),_.sub(f),x.sub(f);let U=1/(_.x*x.y-x.x*_.y);isFinite(U)&&(p.copy(d).multiplyScalar(x.y).addScaledVector(u,-_.y).multiplyScalar(U),m.copy(u).multiplyScalar(_.x).addScaledVector(d,-x.x).multiplyScalar(U),o[N].add(p),o[R].add(p),o[L].add(p),c[N].add(m),c[R].add(m),c[L].add(m))}let T=this.groups;T.length===0&&(T=[{start:0,count:e.count}]);for(let N=0,R=T.length;N<R;++N){let L=T[N],U=L.start,V=L.count;for(let I=U,H=U+V;I<H;I+=3)v(e.getX(I+0),e.getX(I+1),e.getX(I+2))}let S=new P,w=new P,E=new P,g=new P;function M(N){E.fromBufferAttribute(i,N),g.copy(E);let R=o[N];S.copy(R),S.sub(E.multiplyScalar(E.dot(R))).normalize(),w.crossVectors(g,R);let U=w.dot(c[N])<0?-1:1;a.setXYZW(N,S.x,S.y,S.z,U)}for(let N=0,R=n.count;N<R;++N)l[N]&&M(N);this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute(`position`);if(t!==void 0){let n=this.getAttribute(`normal`);if(n===void 0||n.count!==t.count)n=new xt(new Float32Array(t.count*3),3),this.setAttribute(`normal`,n);else for(let u=0,f=n.count;u<f;u++)n.setXYZ(u,0,0,0);let i=new P,r=new P,a=new P,o=new P,c=new P,l=new P,h=new P,d=new P;if(e)for(let u=0,f=e.count;u<f;u+=3){let _=e.getX(u+0),x=e.getX(u+1),p=e.getX(u+2);i.fromBufferAttribute(t,_),r.fromBufferAttribute(t,x),a.fromBufferAttribute(t,p),h.subVectors(a,r),d.subVectors(i,r),h.cross(d),o.fromBufferAttribute(n,_),c.fromBufferAttribute(n,x),l.fromBufferAttribute(n,p),o.add(h),c.add(h),l.add(h),n.setXYZ(_,o.x,o.y,o.z),n.setXYZ(x,c.x,c.y,c.z),n.setXYZ(p,l.x,l.y,l.z)}else for(let u=0,f=t.count;u<f;u+=3)i.fromBufferAttribute(t,u+0),r.fromBufferAttribute(t,u+1),a.fromBufferAttribute(t,u+2),h.subVectors(a,r),d.subVectors(i,r),h.cross(d),n.setXYZ(u+0,h.x,h.y,h.z),n.setXYZ(u+1,h.x,h.y,h.z),n.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Ft.fromBufferAttribute(e,t),Ft.normalize(),e.setXYZ(t,Ft.x,Ft.y,Ft.z)}toNonIndexed(){function e(o,c){let l=o.array,h=o.itemSize,d=o.normalized,u=new l.constructor(c.length*h),f=0,_=0;for(let x=0,p=c.length;x<p;x++){o.isInterleavedBufferAttribute?f=c[x]*o.data.stride+o.offset:f=c[x]*h;for(let m=0;m<h;m++)u[_++]=l[f++]}return new xt(u,h,d)}if(this.index===null)return Ie(`BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed.`),this;let t=new s,n=this.index.array,i=this.attributes;for(let o in i){let c=i[o],l=e(c,n);t.setAttribute(o,l)}let r=this.morphAttributes;for(let o in r){let c=[],l=r[o];for(let h=0,d=l.length;h<d;h++){let u=l[h],f=e(u,n);c.push(f)}t.morphAttributes[o]=c}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,c=a.length;o<c;o++){let l=a[o];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:`BufferGeometry`,generator:`BufferGeometry.toJSON`}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?`BufferGeometry`:this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let c in n){let l=n[c];e.data.attributes[c]=l.toJSON(e.data)}let i={},r=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],h=[];for(let d=0,u=l.length;d<u;d++){let f=l[d];h.push(f.toJSON(e.data))}h.length>0&&(i[c]=h,r=!0)}r&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let i=e.attributes;for(let l in i){let h=i[l];this.setAttribute(l,h.clone(t))}let r=e.morphAttributes;for(let l in r){let h=[],d=r[l];for(let u=0,f=d.length;u<f;u++)h.push(d[u].clone(t));this.morphAttributes[l]=h}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let l=0,h=a.length;l<h;l++){let d=a[l];this.addGroup(d.start,d.count,d.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:`dispose`})}};var Wa=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Mc,this.updateRanges=[],this.version=0,this.uuid=Ci()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,r=this.stride;i<r;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={});let t=Oh(this.array);e.arrayBuffers[t]===void 0&&(e.arrayBuffers[t]=this.array.slice(0).buffer);let n=new this.array.constructor(e.arrayBuffers[t]),i=new this.constructor(n,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){e.arrayBuffers===void 0&&(e.arrayBuffers={});let t=Oh(this.array);e.arrayBuffers[t]===void 0&&(e.arrayBuffers[t]=Array.from(new Uint32Array(this.array.slice(0).buffer)));let n={uuid:this.uuid,buffer:t,type:this.array.constructor.name,stride:this.stride};return n.usage=this.usage,n}};function Oh(s){return s.buffer._uuid===void 0&&(s.buffer._uuid=Ci()),s.byteOffset===0&&s.byteLength===s.buffer.byteLength?s.buffer._uuid:s.buffer._uuid+`:`+s.byteOffset+`:`+s.byteLength}var $t=new P;var or=class s{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name=``,this.data=e,this.itemSize=t,this.offset=n,this.normalized=i,this._normalizationScale=e!==void 0?Jo(e.array):void 0}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)$t.fromBufferAttribute(this,t),$t.applyMatrix4(e),this.setXYZ(t,$t.x,$t.y,$t.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)$t.fromBufferAttribute(this,t),$t.applyNormalMatrix(e),this.setXYZ(t,$t.x,$t.y,$t.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)$t.fromBufferAttribute(this,t),$t.transformDirection(e),this.setXYZ(t,$t.x,$t.y,$t.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=this._denormalize(n)),n}setComponent(e,t,n){return this.normalized&&(n=this._normalize(n)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=this._denormalize(t)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=this._denormalize(t)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=this._denormalize(t)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=this._denormalize(t)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),n=this._normalize(n)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),n=this._normalize(n),i=this._normalize(i)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),n=this._normalize(n),i=this._normalize(i),r=this._normalize(r)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=r,this}clone(e){if(e===void 0){nr(`InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.`);let t=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return new xt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new s(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){nr(`InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.`);let t=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}_denormalize(e){let t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):Ac(e,this.data.array)}_normalize(e){let t=this._normalizationScale;return t!==void 0?Math.round(e*t):Cc(e,this.data.array)}};var Ll=new P;var Tf=new P;var wf=new Be;var Qt=class{constructor(e=new P(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let i=Ll.subVectors(n,t).cross(Tf.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let i=e.delta(Ll),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let a=-(e.start.dot(this.normal)+this.constant)/r;return n===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(i,a)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||wf.getNormalMatrix(e),i=this.coplanarPoint(Ll).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}};var Af=0;var nn=class extends In{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Af++}),this.uuid=Ci(),this.name=``,this.type=`Material`,this.blending=Ns,this.side=Vn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ic,this.blendDst=sc,this.blendEquation=Wi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ce(0,0,0),this.blendAlpha=0,this.depthFunc=ms,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Iu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Da,this.stencilZFail=Da,this.stencilZPass=Da,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){Ie(`Material: parameter '${t}' has value of undefined.`);continue}let i=this[t];if(i===void 0){Ie(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector2&&n&&n.isVector2||i&&i.isEuler&&n&&n.isEuler||i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e==`string`;t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:`Material`,generator:`Material.toJSON`}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(n.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(n.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(e).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(n.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(n.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){let a=[];for(let o in r){let c=r[o];delete c.metadata,a.push(c)}return a}if(t){let r=i(e.textures),a=i(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Ce().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.diffuseRoughness!==void 0&&(this.diffuseRoughness=e.diffuseRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum),e.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=e.iridescenceThicknessRange[1]),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(n=>new Qt().fromJSON(n))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors==`number`?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new Se().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Se().fromArray(e.clearcoatNormalScale)),e.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=t[e.diffuseRoughnessMap]||null),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let i=t.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:`dispose`})}set needsUpdate(e){e===!0&&this.version++}};var Ms=class extends nn{constructor(e){super(),this.isSpriteMaterial=!0,this.type=`SpriteMaterial`,this.color=new Ce(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}};var rs;var qs=new P;var as=new P;var os=new P;var ls=new Se;var Ys=new Se;var Vu=new ht;var ca=new P;var js=new P;var ha=new P;var Uh=new Se;var Nl=new Se;var Fh=new Se;var lr=class extends At{constructor(e=new Ms){if(super(),this.isSprite=!0,this.type=`Sprite`,rs===void 0){rs=new nt;let n=new Wa(new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),5);rs.setIndex([0,1,2,0,2,3]),rs.setAttribute(`position`,new or(n,3,0,!1)),rs.setAttribute(`uv`,new or(n,2,3,!1))}this.geometry=rs,this.material=e,this.center=new Se(.5,.5),this.count=1}intersectsFrustum(e){return e.intersectsSprite(this)}raycast(e,t){e.camera===null&&Fe(`Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.`),as.setFromMatrixScale(this.matrixWorld),Vu.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),os.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&as.multiplyScalar(-os.z);let n=this.material.rotation,i,r;n!==0&&(r=Math.cos(n),i=Math.sin(n));let a=this.center;ua(ca.set(-.5,-.5,0),os,a,as,i,r),ua(js.set(.5,-.5,0),os,a,as,i,r),ua(ha.set(.5,.5,0),os,a,as,i,r),Uh.set(0,0),Nl.set(1,0),Fh.set(1,1);let o=e.ray.intersectTriangle(ca,js,ha,!1,qs);if(o===null&&(ua(js.set(-.5,.5,0),os,a,as,i,r),Nl.set(0,1),o=e.ray.intersectTriangle(ca,ha,js,!1,qs),o===null))return;let c=e.ray.origin.distanceTo(qs);c<e.near||c>e.far||t.push({distance:c,point:qs.clone(),uv:ti.getInterpolation(qs,ca,js,ha,Uh,Nl,Fh,new Se),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}toJSON(e){let t=super.toJSON(e);return t.object.center=this.center.toArray(),t}};function ua(s,e,t,n,i,r){ls.subVectors(s,t).addScalar(.5).multiply(n),i!==void 0?(Ys.x=r*ls.x-i*ls.y,Ys.y=i*ls.x+r*ls.y):Ys.copy(ls),s.copy(e),s.x+=Ys.x,s.y+=Ys.y,s.applyMatrix4(Vu)}var Qn=new P;var Ol=new P;var da=new P;var fa=new P;var si=class{constructor(e=new P,t=new P(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Qn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Qn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Qn.copy(this.origin).addScaledVector(this.direction,t),Qn.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){Ol.copy(e).add(t).multiplyScalar(.5),da.copy(t).sub(e).normalize(),fa.copy(this.origin).sub(Ol);let r=e.distanceTo(t)*.5,a=-this.direction.dot(da),o=fa.dot(this.direction),c=-fa.dot(da),l=fa.lengthSq(),h=Math.abs(1-a*a),d,u,f,_;if(h>0)if(d=a*c-o,u=a*o-c,_=r*h,d>=0)if(u>=-_)if(u<=_){let x=1/h;d*=x,u*=x,f=d*(d+a*u+2*o)+u*(a*d+u+2*c)+l}else u=r,d=Math.max(0,-(a*u+o)),f=-d*d+u*(u+2*c)+l;else u=-r,d=Math.max(0,-(a*u+o)),f=-d*d+u*(u+2*c)+l;else u<=-_?(d=Math.max(0,-(-a*r+o)),u=d>0?-r:Math.min(Math.max(-r,-c),r),f=-d*d+u*(u+2*c)+l):u<=_?(d=0,u=Math.min(Math.max(-r,-c),r),f=u*(u+2*c)+l):(d=Math.max(0,-(a*r+o)),u=d>0?r:Math.min(Math.max(-r,-c),r),f=-d*d+u*(u+2*c)+l);else u=a>0?-r:r,d=Math.max(0,-(a*u+o)),f=-d*d+u*(u+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,d),i&&i.copy(Ol).addScaledVector(da,u),f}intersectSphere(e,t){if(e.radius<0)return null;Qn.subVectors(e.center,this.origin);let n=Qn.dot(this.direction),i=Qn.dot(Qn)-n*n,r=e.radius*e.radius;if(i>r)return null;let a=Math.sqrt(r-i),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,r,a,o,c,l=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,u=this.origin;return l>=0?(n=(e.min.x-u.x)*l,i=(e.max.x-u.x)*l):(n=(e.max.x-u.x)*l,i=(e.min.x-u.x)*l),h>=0?(r=(e.min.y-u.y)*h,a=(e.max.y-u.y)*h):(r=(e.max.y-u.y)*h,a=(e.min.y-u.y)*h),n>a||r>i||((r>n||isNaN(n))&&(n=r),(a<i||isNaN(i))&&(i=a),d>=0?(o=(e.min.z-u.z)*d,c=(e.max.z-u.z)*d):(o=(e.max.z-u.z)*d,c=(e.min.z-u.z)*d),n>c||o>i)||((o>n||n!==n)&&(n=o),(c<i||i!==i)&&(i=c),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,Qn)!==null}intersectTriangle(e,t,n,i,r){let a=this.origin,o=this.direction,c=o.x,l=o.y,h=o.z,d=e.x-a.x,u=e.y-a.y,f=e.z-a.z,_=t.x-a.x,x=t.y-a.y,p=t.z-a.z,m=n.x-a.x,v=n.y-a.y,T=n.z-a.z,S=Math.abs(c),w=Math.abs(l),E=Math.abs(h),g,M,N,R,L,U,V,I,H,$,z,re;if(S>=w&&S>=E?(N=c,U=d,H=_,re=m,c>=0?(g=l,M=h,R=u,L=f,V=x,I=p,$=v,z=T):(g=h,M=l,R=f,L=u,V=p,I=x,$=T,z=v)):w>=E?(N=l,U=u,H=x,re=v,l>=0?(g=h,M=c,R=f,L=d,V=p,I=_,$=T,z=m):(g=c,M=h,R=d,L=f,V=_,I=p,$=m,z=T)):(N=h,U=f,H=p,re=T,h>=0?(g=c,M=l,R=d,L=u,V=_,I=x,$=m,z=v):(g=l,M=c,R=u,L=d,V=x,I=_,$=v,z=m)),N===0)return null;let X=g/N,ee=M/N,ne=1/N,Re=R-X*U,ze=L-ee*U,K=V-X*H,xe=I-ee*H,Te=$-X*re,Ne=z-ee*re,ye=Te*xe-Ne*K,Ge=Re*Ne-ze*Te,Mt=K*ze-xe*Re;if(i){if(ye<0||Ge<0||Mt<0)return null}else if((ye<0||Ge<0||Mt<0)&&(ye>0||Ge>0||Mt>0))return null;let Ue=ye+Ge+Mt;if(Ue===0)return null;let lt=ne*(ye*U+Ge*H+Mt*re);return(Ue>0?lt<0:lt>0)?null:this.at(lt/Ue,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}};var Es=class extends nn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type=`MeshBasicMaterial`,this.color=new Ce(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new En,this.combine=ho,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap=`round`,this.wireframeLinejoin=`round`,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var Bh=new ht;var Fi=new si;var pa=new vi;var kh=new P;var ma=new P;var ga=new P;var _a=new P;var Ul=new P;var xa=new P;var zh=new P;var ya=new P;var kt=class extends At{constructor(e=new nt,t=new Es){super(),this.isMesh=!0,this.type=`Mesh`,this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){let o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){let n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(i,e);let o=this.morphTargetInfluences;if(r&&o){xa.set(0,0,0);for(let c=0,l=r.length;c<l;c++){let h=o[c],d=r[c];h!==0&&(Ul.fromBufferAttribute(d,e),a?xa.addScaledVector(Ul,h):xa.addScaledVector(Ul.sub(t),h))}t.add(xa)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),pa.copy(n.boundingSphere),pa.applyMatrix4(r),Fi.copy(e.ray).recast(e.near),!(pa.containsPoint(Fi.origin)===!1&&(Fi.intersectSphere(pa,kh)===null||Fi.origin.distanceToSquared(kh)>(e.far-e.near)**2))&&(Bh.copy(r).invert(),Fi.copy(e.ray).applyMatrix4(Bh),(n.boundingBox===null||Fi.intersectsBox(n.boundingBox)!==!1)&&this._computeIntersections(e,t,Fi)))}_computeIntersections(e,t,n){let i,r=this.geometry,a=this.material,o=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,d=r.attributes.normal,u=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(a))for(let _=0,x=u.length;_<x;_++){let p=u[_],m=a[p.materialIndex],v=Math.max(p.start,f.start),T=Math.min(o.count,Math.min(p.start+p.count,f.start+f.count));for(let S=v,w=T;S<w;S+=3){let E=o.getX(S),g=o.getX(S+1),M=o.getX(S+2);i=va(this,m,e,n,l,h,d,E,g,M),i&&(i.faceIndex=Math.floor(S/3),i.face.materialIndex=p.materialIndex,t.push(i))}}else{let _=Math.max(0,f.start),x=Math.min(o.count,f.start+f.count);for(let p=_,m=x;p<m;p+=3){let v=o.getX(p),T=o.getX(p+1),S=o.getX(p+2);i=va(this,a,e,n,l,h,d,v,T,S),i&&(i.faceIndex=Math.floor(p/3),t.push(i))}}else if(c!==void 0)if(Array.isArray(a))for(let _=0,x=u.length;_<x;_++){let p=u[_],m=a[p.materialIndex],v=Math.max(p.start,f.start),T=Math.min(c.count,Math.min(p.start+p.count,f.start+f.count));for(let S=v,w=T;S<w;S+=3){let E=S,g=S+1,M=S+2;i=va(this,m,e,n,l,h,d,E,g,M),i&&(i.faceIndex=Math.floor(S/3),i.face.materialIndex=p.materialIndex,t.push(i))}}else{let _=Math.max(0,f.start),x=Math.min(c.count,f.start+f.count);for(let p=_,m=x;p<m;p+=3){let v=p,T=p+1,S=p+2;i=va(this,a,e,n,l,h,d,v,T,S),i&&(i.faceIndex=Math.floor(p/3),t.push(i))}}}};function Cf(s,e,t,n,i,r,a,o){let c;if(e.side===rn?c=n.intersectTriangle(a,r,i,!0,o):c=n.intersectTriangle(i,r,a,e.side===Vn,o),c===null)return null;ya.copy(o),ya.applyMatrix4(s.matrixWorld);let l=t.ray.origin.distanceTo(ya);return l<t.near||l>t.far?null:{distance:l,point:ya.clone(),object:s}}function va(s,e,t,n,i,r,a,o,c,l){s.getVertexPosition(o,ma),s.getVertexPosition(c,ga),s.getVertexPosition(l,_a);let h=Cf(s,e,t,n,ma,ga,_a,zh);if(h){let d=new P;ti.getBarycoord(zh,ma,ga,_a,d),i&&(h.uv=ti.getInterpolatedAttribute(i,o,c,l,d,new Se)),r&&(h.uv1=ti.getInterpolatedAttribute(r,o,c,l,d,new Se)),a&&(h.normal=ti.getInterpolatedAttribute(a,o,c,l,d,new P),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let u={a:o,b:c,c:l,normal:new P,materialIndex:0};ti.getNormal(ma,ga,_a,u.normal),h.face=u,h.barycoord=d}return h}var Xa=class extends jt{constructor(e=null,t=1,n=1,i,r,a,o,c,l=Bt,h=Bt,d,u){super(null,a,o,c,l,h,i,r,d,u),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Bi=new vi;var Rf=new Se(.5,.5);var ba=new P;var bi=class{constructor(e=new Qt,t=new Qt,n=new Qt,i=new Qt,r=new Qt,a=new Qt){this.planes=[e,t,n,i,r,a]}set(e,t,n,i,r,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(i),o[4].copy(r),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Mn,n=!1){let i=this.planes,r=e.elements,a=r[0],o=r[1],c=r[2],l=r[3],h=r[4],d=r[5],u=r[6],f=r[7],_=r[8],x=r[9],p=r[10],m=r[11],v=r[12],T=r[13],S=r[14],w=r[15];if(i[0].setComponents(l-a,f-h,m-_,w-v).normalize(),i[1].setComponents(l+a,f+h,m+_,w+v).normalize(),i[2].setComponents(l+o,f+d,m+x,w+T).normalize(),i[3].setComponents(l-o,f-d,m-x,w-T).normalize(),n)i[4].setComponents(c,u,p,S).normalize(),i[5].setComponents(l-c,f-u,m-p,w-S).normalize();else if(i[4].setComponents(l-c,f-u,m-p,w-S).normalize(),t===Mn)i[5].setComponents(l+c,f+u,m+p,w+S).normalize();else if(t===gs)i[5].setComponents(c,u,p,S).normalize();else throw new Error(`THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: `+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Bi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Bi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Bi)}intersectsSprite(e){Bi.center.set(0,0,0);return Bi.radius=.7071067811865476+Rf.distanceTo(e.center),Bi.applyMatrix4(e.matrixWorld),this.intersectsSphere(Bi)}intersectsSphere(e){let t=this.planes,n=e.center,i=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let i=t[n];if(ba.x=i.normal.x>0?e.max.x:e.min.x,ba.y=i.normal.y>0?e.max.y:e.min.y,ba.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(ba)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var Hh=new ht;var qa=class s{constructor(){this.coordinateSystem=Mn,this._frustums=[],this._count=0}setFromArrayCamera(e){let t=e.cameras,n=this._frustums;for(let i=0;i<t.length;i++){let r=t[i];Hh.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),n[i]===void 0&&(n[i]=new bi),n[i].setFromProjectionMatrix(Hh,r.coordinateSystem,r.reversedDepth)}return this._count=t.length,this}getFrustum(e){return this._frustums[e]}intersectsObject(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsObject(e))return!0;return!1}intersectsSprite(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSprite(e))return!0;return!1}intersectsSphere(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSphere(e))return!0;return!1}intersectsBox(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsBox(e))return!0;return!1}containsPoint(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].containsPoint(e))return!0;return!1}copy(e){this.coordinateSystem=e.coordinateSystem;let t=this._frustums,n=e._frustums;for(let i=0;i<e._count;i++)t[i]===void 0&&(t[i]=new bi),t[i].copy(n[i]);return this._count=e._count,this}clone(){return new s().copy(this)}};var Pt=class extends nn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type=`LineBasicMaterial`,this.color=new Ce(16777215),this.map=null,this.linewidth=1,this.linecap=`round`,this.linejoin=`round`,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}};var Ya=new P;var ja=new P;var Gh=new ht;var Zs=new si;var Sa=new vi;var Fl=new P;var Vh=new P;var ki=class extends At{constructor(e=new nt,t=new Pt){super(),this.isLine=!0,this.type=`Line`,this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let i=1,r=t.count;i<r;i++)Ya.fromBufferAttribute(t,i-1),ja.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=Ya.distanceTo(ja);e.setAttribute(`lineDistance`,new Xe(n,1))}else Ie(`Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.`);return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,i=this.matrixWorld,r=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Sa.copy(n.boundingSphere),Sa.applyMatrix4(i),Sa.radius+=r,e.ray.intersectsSphere(Sa)===!1)return;Gh.copy(i).invert(),Zs.copy(e.ray).applyMatrix4(Gh);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=this.isLineSegments?2:1,h=n.index,u=n.attributes.position;if(h!==null){let f=Math.max(0,a.start),_=Math.min(h.count,a.start+a.count);for(let x=f,p=_-1;x<p;x+=l){let m=h.getX(x),v=h.getX(x+1),T=Ma(this,e,Zs,c,m,v,x);T&&t.push(T)}if(this.isLineLoop){let x=h.getX(_-1),p=h.getX(f),m=Ma(this,e,Zs,c,x,p,_-1);m&&t.push(m)}}else{let f=Math.max(0,a.start),_=Math.min(u.count,a.start+a.count);for(let x=f,p=_-1;x<p;x+=l){let m=Ma(this,e,Zs,c,x,x+1,x);m&&t.push(m)}if(this.isLineLoop){let x=Ma(this,e,Zs,c,_-1,f,_-1);x&&t.push(x)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){let o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function Ma(s,e,t,n,i,r,a){let o=s.geometry.attributes.position;if(Ya.fromBufferAttribute(o,i),ja.fromBufferAttribute(o,r),t.distanceSqToSegment(Ya,ja,Fl,Vh)>n)return;Fl.applyMatrix4(s.matrixWorld);let l=e.ray.origin.distanceTo(Fl);if(!(l<e.near||l>e.far))return{distance:l,point:Vh.clone().applyMatrix4(s.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:s}}var Wh=new P;var Xh=new P;var sn=class extends ki{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type=`LineSegments`}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let i=0,r=t.count;i<r;i+=2)Wh.fromBufferAttribute(t,i),Xh.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+Wh.distanceTo(Xh);e.setAttribute(`lineDistance`,new Xe(n,1))}else Ie(`LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.`);return this}};var pn=class extends nn{constructor(e){super(),this.isPointsMaterial=!0,this.type=`PointsMaterial`,this.color=new Ce(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}};var qh=new ht;var ql=new si;var Ea=new vi;var Ta=new P;var Ln=class extends At{constructor(e=new nt,t=new pn){super(),this.isPoints=!0,this.type=`Points`,this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,i=this.matrixWorld,r=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ea.copy(n.boundingSphere),Ea.applyMatrix4(i),Ea.radius+=r,e.ray.intersectsSphere(Ea)===!1)return;qh.copy(i).invert(),ql.copy(e.ray).applyMatrix4(qh);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=n.index,d=n.attributes.position;if(l!==null){let u=Math.max(0,a.start),f=Math.min(l.count,a.start+a.count);for(let _=u,x=f;_<x;_++){let p=l.getX(_);Ta.fromBufferAttribute(d,p),Yh(Ta,p,c,i,e,t,this)}}else{let u=Math.max(0,a.start),f=Math.min(d.count,a.start+a.count);for(let _=u,x=f;_<x;_++)Ta.fromBufferAttribute(d,_),Yh(Ta,_,c,i,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){let o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function Yh(s,e,t,n,i,r,a){let o=ql.distanceSqToPoint(s);if(o<t){let c=new P;ql.closestPointToPoint(s,c),c.applyMatrix4(n);let l=i.ray.origin.distanceTo(c);if(l<i.near||l>i.far)return;r.push({distance:l,distanceToRay:Math.sqrt(o),point:c,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}var cr=class extends jt{constructor(e=[],t=Xi,n,i,r,a,o,c,l,h){super(e,t,n,i,r,a,o,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}};var Ts=class extends jt{constructor(e,t,n,i,r,a,o,c,l){super(e,t,n,i,r,a,o,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}};var ri=class extends jt{constructor(e,t,n=On,i,r,a,o=Bt,c=Bt,l,h=ii,d=1){if(h!==ii&&h!==ci)throw new Error(`THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat`);super({width:e,height:t,depth:d},i,r,a,o,c,h,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new vs(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}};var hr=class extends ri{constructor(e,t=On,n=Xi,i,r,a=Bt,o=Bt,c,l=ii){let h={width:e,height:e,depth:1},d=[h,h,h,h,h,h];super(e,e,t,n,i,r,a,o,c,l),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}};var ur=class extends jt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}};var ai=class s extends nt{constructor(e=1,t=1,n=1,i=1,r=1,a=1){super(),this.type=`BoxGeometry`,this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:r,depthSegments:a};let o=this;i=Math.floor(i),r=Math.floor(r),a=Math.floor(a);let c=[],l=[],h=[],d=[],u=0,f=0;_(`z`,`y`,`x`,-1,-1,n,t,e,a,r,0),_(`z`,`y`,`x`,1,-1,n,t,-e,a,r,1),_(`x`,`z`,`y`,1,1,e,n,t,i,a,2),_(`x`,`z`,`y`,1,-1,e,n,-t,i,a,3),_(`x`,`y`,`z`,1,-1,e,t,n,i,r,4),_(`x`,`y`,`z`,-1,-1,e,t,-n,i,r,5),this.setIndex(c),this.setAttribute(`position`,new Xe(l,3)),this.setAttribute(`normal`,new Xe(h,3)),this.setAttribute(`uv`,new Xe(d,2));function _(x,p,m,v,T,S,w,E,g,M,N){let R=S/g,L=w/M,U=S/2,V=w/2,I=E/2,H=g+1,$=M+1,z=0,re=0,X=new P;for(let ee=0;ee<$;ee++){let ne=ee*L-V;for(let Re=0;Re<H;Re++)X[x]=(Re*R-U)*v,X[p]=ne*T,X[m]=I,l.push(X.x,X.y,X.z),X[x]=0,X[p]=0,X[m]=E>0?1:-1,h.push(X.x,X.y,X.z),d.push(Re/g),d.push(1-ee/M),z+=1}for(let ee=0;ee<M;ee++)for(let ne=0;ne<g;ne++){let Re=u+ne+H*ee,ze=u+ne+H*(ee+1),K=u+(ne+1)+H*(ee+1),xe=u+(ne+1)+H*ee;c.push(Re,ze,xe),c.push(ze,K,xe),re+=6}o.addGroup(f,re,N),f+=re,u+=z}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};var ws=class s extends nt{constructor(e=1,t=1,n=1,i=32,r=1,a=!1,o=0,c=Math.PI*2){super(),this.type=`CylinderGeometry`,this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:c};let l=this;i=Math.floor(i),r=Math.floor(r);let h=[],d=[],u=[],f=[],_=0,x=[],p=n/2,m=0;v(),a===!1&&(e>0&&T(!0),t>0&&T(!1)),this.setIndex(h),this.setAttribute(`position`,new Xe(d,3)),this.setAttribute(`normal`,new Xe(u,3)),this.setAttribute(`uv`,new Xe(f,2));function v(){let S=new P,w=new P,E=0,g=(t-e)/n;for(let M=0;M<=r;M++){let N=[],R=M/r,L=R*(t-e)+e;for(let U=0;U<=i;U++){let V=U/i,I=V*c+o,H=Math.sin(I),$=Math.cos(I);w.x=L*H,w.y=-R*n+p,w.z=L*$,d.push(w.x,w.y,w.z),S.set(H,g,$).normalize(),u.push(S.x,S.y,S.z),f.push(V,1-R),N.push(_++)}x.push(N)}for(let M=0;M<i;M++)for(let N=0;N<r;N++){let R=x[N][M],L=x[N+1][M],U=x[N+1][M+1],V=x[N][M+1];(e>0||N!==0)&&(h.push(R,L,V),E+=3),(t>0||N!==r-1)&&(h.push(L,U,V),E+=3)}l.addGroup(m,E,0),m+=E}function T(S){let w=_,E=new Se,g=new P,M=0,N=S===!0?e:t,R=S===!0?1:-1;for(let U=1;U<=i;U++)d.push(0,p*R,0),u.push(0,R,0),f.push(.5,.5),_++;let L=_;for(let U=0;U<=i;U++){let I=U/i*c+o,H=Math.cos(I),$=Math.sin(I);g.x=N*$,g.y=p*R,g.z=N*H,d.push(g.x,g.y,g.z),u.push(0,R,0),E.x=H*.5+.5,E.y=$*.5*R+.5,f.push(E.x,E.y),_++}for(let U=0;U<i;U++){let V=w+U,I=L+U;S===!0?h.push(I,I+1,V):h.push(I+1,I,V),M+=3}l.addGroup(m,M,S===!0?1:2),m+=M}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}};var As=class s extends ws{constructor(e=1,t=1,n=32,i=1,r=!1,a=0,o=Math.PI*2){super(0,e,t,n,i,r,a,o),this.type=`ConeGeometry`,this.parameters={radius:e,height:t,radialSegments:n,heightSegments:i,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(e){return new s(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}};var Cs=class s extends nt{constructor(e=[],t=[],n=1,i=0){super(),this.type=`PolyhedronGeometry`,this.parameters={vertices:e,indices:t,radius:n,detail:i};let r=[],a=[];o(i),l(n),h(),this.setAttribute(`position`,new Xe(r,3)),this.setAttribute(`normal`,new Xe(r.slice(),3)),this.setAttribute(`uv`,new Xe(a,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function o(v){let T=new P,S=new P,w=new P;for(let E=0;E<t.length;E+=3)f(t[E+0],T),f(t[E+1],S),f(t[E+2],w),c(T,S,w,v)}function c(v,T,S,w){let E=w+1,g=[];for(let M=0;M<=E;M++){g[M]=[];let N=v.clone().lerp(S,M/E),R=T.clone().lerp(S,M/E),L=E-M;for(let U=0;U<=L;U++)U===0&&M===E?g[M][U]=N:g[M][U]=N.clone().lerp(R,U/L)}for(let M=0;M<E;M++)for(let N=0;N<2*(E-M)-1;N++){let R=Math.floor(N/2);N%2===0?(u(g[M][R+1]),u(g[M+1][R]),u(g[M][R])):(u(g[M][R+1]),u(g[M+1][R+1]),u(g[M+1][R]))}}function l(v){let T=new P;for(let S=0;S<r.length;S+=3)T.x=r[S+0],T.y=r[S+1],T.z=r[S+2],T.normalize().multiplyScalar(v),r[S+0]=T.x,r[S+1]=T.y,r[S+2]=T.z}function h(){let v=new P;for(let T=0;T<r.length;T+=3){v.x=r[T+0],v.y=r[T+1],v.z=r[T+2];let S=p(v)/2/Math.PI+.5,w=m(v)/Math.PI+.5;a.push(S,1-w)}_(),d()}function d(){for(let v=0;v<a.length;v+=6){let T=a[v+0],S=a[v+2],w=a[v+4];Math.max(T,S,w)>.9&&Math.min(T,S,w)<.1&&(T<.2&&(a[v+0]+=1),S<.2&&(a[v+2]+=1),w<.2&&(a[v+4]+=1))}}function u(v){r.push(v.x,v.y,v.z)}function f(v,T){let S=v*3;T.x=e[S+0],T.y=e[S+1],T.z=e[S+2]}function _(){let v=new P,T=new P,S=new P,w=new P,E=new Se,g=new Se,M=new Se;for(let N=0,R=0;N<r.length;N+=9,R+=6){v.set(r[N+0],r[N+1],r[N+2]),T.set(r[N+3],r[N+4],r[N+5]),S.set(r[N+6],r[N+7],r[N+8]),E.set(a[R+0],a[R+1]),g.set(a[R+2],a[R+3]),M.set(a[R+4],a[R+5]),w.copy(v).add(T).add(S).divideScalar(3);let L=p(w);x(E,R+0,v,L),x(g,R+2,T,L),x(M,R+4,S,L)}}function x(v,T,S,w){w<0&&v.x===1&&(a[T]=v.x-1),S.x===0&&S.z===0&&(a[T]=w/2/Math.PI+.5)}function p(v){return Math.atan2(v.z,-v.x)}function m(v){return Math.atan2(-v.y,Math.sqrt(v.x*v.x+v.z*v.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.vertices,e.indices,e.radius,e.detail)}};var Za=class{constructor(){this.type=`Curve`,this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Ie(`Curve: .getPoint() not implemented.`)}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,i=this.getPoint(0),r=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),r+=n.distanceTo(i),t.push(r),i=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let n=this.getLengths(),i=0,r=n.length,a;t?a=t:a=e*n[r-1];let o=0,c=r-1,l;for(;o<=c;)if(i=Math.floor(o+(c-o)/2),l=n[i]-a,l<0)o=i+1;else if(l>0)c=i-1;else{c=i;break}if(i=c,n[i]===a)return i/(r-1);let h=n[i],u=n[i+1]-h,f=(a-h)/u;return(i+f)/(r-1)}getTangent(e,t){let i=e-1e-4,r=e+1e-4;i<0&&(i=0),r>1&&(r=1);let a=this.getPoint(i),o=this.getPoint(r),c=t||(a.isVector2?new Se:new P);return c.copy(o).sub(a).normalize(),c}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){let n=new P,i=[],r=[],a=[],o=new P,c=new ht;for(let f=0;f<=e;f++){let _=f/e;i[f]=this.getTangentAt(_,new P)}r[0]=new P,a[0]=new P;let l=Number.MAX_VALUE,h=Math.abs(i[0].x),d=Math.abs(i[0].y),u=Math.abs(i[0].z);h<=l&&(l=h,n.set(1,0,0)),d<=l&&(l=d,n.set(0,1,0)),u<=l&&n.set(0,0,1),o.crossVectors(i[0],n).normalize(),r[0].crossVectors(i[0],o),a[0].crossVectors(i[0],r[0]);for(let f=1;f<=e;f++){if(r[f]=r[f-1].clone(),a[f]=a[f-1].clone(),o.crossVectors(i[f-1],i[f]),o.length()>Number.EPSILON){o.normalize();let _=Math.acos(je(i[f-1].dot(i[f]),-1,1));r[f].applyMatrix4(c.makeRotationAxis(o,_))}a[f].crossVectors(i[f],r[f])}if(t===!0){let f=Math.acos(je(r[0].dot(r[e]),-1,1));f/=e,i[0].dot(o.crossVectors(r[0],r[e]))>0&&(f=-f);for(let _=1;_<=e;_++)r[_].applyMatrix4(c.makeRotationAxis(i[_],f*_)),a[_].crossVectors(i[_],r[_])}return{tangents:i,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this.cacheArcLengths=null,this}toJSON(){let e={metadata:{version:4.7,type:`Curve`,generator:`Curve.toJSON`}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this.cacheArcLengths=null,this}};function Rc(){let s=0,e=0,t=0,n=0;function i(r,a,o,c){s=r,e=o,t=-3*r+3*a-2*o-c,n=2*r-2*a+o+c}return{initCatmullRom:function(r,a,o,c,l){i(a,o,l*(o-r),l*(c-a))},initNonuniformCatmullRom:function(r,a,o,c,l,h,d){let u=(a-r)/l-(o-r)/(l+h)+(o-a)/h,f=(o-a)/h-(c-a)/(h+d)+(c-o)/d;u*=h,f*=h,i(a,o,u,f)},calc:function(r){let a=r*r,o=a*r;return s+e*r+t*a+n*o}}}var jh=new P;var Zh=new P;var Bl=new Rc;var kl=new Rc;var zl=new Rc;var Rs=class extends Za{constructor(e=[],t=!1,n=`centripetal`,i=.5){super(),this.isCatmullRomCurve3=!0,this.type=`CatmullRomCurve3`,this.points=e,this.closed=t,this.curveType=n,this.tension=i}getPoint(e,t=new P){let n=t,i=this.points,r=i.length,a=(r-(this.closed?0:1))*e,o=Math.floor(a),c=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:c===0&&o===r-1&&(o=r-2,c=1);let l,h;this.closed||o>0?l=i[(o-1)%r]:(Zh.subVectors(i[0],i[1]).add(i[0]),l=Zh);let d=i[o%r],u=i[(o+1)%r];if(this.closed||o+2<r?h=i[(o+2)%r]:(jh.subVectors(i[r-1],i[r-2]).add(i[r-1]),h=jh),this.curveType===`centripetal`||this.curveType===`chordal`){let f=this.curveType===`chordal`?.5:.25,_=Math.pow(l.distanceToSquared(d),f),x=Math.pow(d.distanceToSquared(u),f),p=Math.pow(u.distanceToSquared(h),f);x<1e-4&&(x=1),_<1e-4&&(_=x),p<1e-4&&(p=x),Bl.initNonuniformCatmullRom(l.x,d.x,u.x,h.x,_,x,p),kl.initNonuniformCatmullRom(l.y,d.y,u.y,h.y,_,x,p),zl.initNonuniformCatmullRom(l.z,d.z,u.z,h.z,_,x,p)}else this.curveType===`catmullrom`&&(Bl.initCatmullRom(l.x,d.x,u.x,h.x,this.tension),kl.initCatmullRom(l.y,d.y,u.y,h.y,this.tension),zl.initCatmullRom(l.z,d.z,u.z,h.z,this.tension));return n.set(Bl.calc(c),kl.calc(c),zl.calc(c)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(i.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let i=this.points[t];e.points.push(i.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(new P().fromArray(i))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};var dr=class s extends Cs{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,i=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1];super(i,[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1],e,t),this.type=`IcosahedronGeometry`,this.parameters={radius:e,detail:t}}static fromJSON(e){return new s(e.radius,e.detail)}};var fr=class s extends Cs{constructor(e=1,t=0){super([1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2],e,t),this.type=`OctahedronGeometry`,this.parameters={radius:e,detail:t}}static fromJSON(e){return new s(e.radius,e.detail)}};var pr=class s extends nt{constructor(e=1,t=1,n=1,i=1){super(),this.type=`PlaneGeometry`,this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};let r=e/2,a=t/2,o=Math.floor(n),c=Math.floor(i),l=o+1,h=c+1,d=e/o,u=t/c,f=[],_=[],x=[],p=[];for(let m=0;m<h;m++){let v=m*u-a;for(let T=0;T<l;T++){let S=T*d-r;_.push(S,-v,0),x.push(0,0,1),p.push(T/o),p.push(1-m/c)}}for(let m=0;m<c;m++)for(let v=0;v<o;v++){let T=v+l*m,S=v+l*(m+1),w=v+1+l*(m+1),E=v+1+l*m;f.push(T,S,E),f.push(S,w,E)}this.setIndex(f),this.setAttribute(`position`,new Xe(_,3)),this.setAttribute(`normal`,new Xe(x,3)),this.setAttribute(`uv`,new Xe(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.width,e.height,e.widthSegments,e.heightSegments)}};var Ps=class s extends nt{constructor(e=1,t=32,n=16,i=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type=`SphereGeometry`,this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let c=Math.min(a+o,Math.PI),l=0,h=[],d=new P,u=new P,f=[],_=[],x=[],p=[];for(let m=0;m<=n;m++){let v=[],T=m/n,S=a+T*o,w=e*Math.cos(S),E=Math.sqrt(e*e-w*w),g=0;m===0&&a===0?g=.5/t:m===n&&c===Math.PI&&(g=-.5/t);for(let M=0;M<=t;M++){let N=M/t,R=i+N*r;d.x=-E*Math.cos(R),d.y=w,d.z=E*Math.sin(R),_.push(d.x,d.y,d.z),u.copy(d).normalize(),x.push(u.x,u.y,u.z),p.push(N+g,1-T),v.push(l++)}h.push(v)}for(let m=0;m<n;m++)for(let v=0;v<t;v++){let T=h[m][v+1],S=h[m][v],w=h[m+1][v],E=h[m+1][v+1];(m!==0||a>0)&&f.push(T,S,E),(m!==n-1||c<Math.PI)&&f.push(S,w,E)}this.setIndex(f),this.setAttribute(`position`,new Xe(_,3)),this.setAttribute(`normal`,new Xe(x,3)),this.setAttribute(`uv`,new Xe(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var mr=class s extends Cs{constructor(e=1,t=0){super([1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],[2,1,0,0,3,2,1,3,0,2,3,1],e,t),this.type=`TetrahedronGeometry`,this.parameters={radius:e,detail:t}}static fromJSON(e){return new s(e.radius,e.detail)}};var gr=class s extends nt{constructor(e=1,t=.4,n=12,i=48,r=Math.PI*2,a=0,o=Math.PI*2){super(),this.type=`TorusGeometry`,this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:i,arc:r,thetaStart:a,thetaLength:o},n=Math.floor(n),i=Math.floor(i);let c=[],l=[],h=[],d=[],u=new P,f=new P,_=new P;for(let x=0;x<=n;x++){let p=a+x/n*o;for(let m=0;m<=i;m++){let v=m/i*r;f.x=(e+t*Math.cos(p))*Math.cos(v),f.y=(e+t*Math.cos(p))*Math.sin(v),f.z=t*Math.sin(p),l.push(f.x,f.y,f.z),u.x=e*Math.cos(v),u.y=e*Math.sin(v),_.subVectors(f,u).normalize(),h.push(_.x,_.y,_.z),d.push(m/i),d.push(x/n)}}for(let x=1;x<=n;x++)for(let p=1;p<=i;p++){let m=(i+1)*x+p-1,v=(i+1)*(x-1)+p-1,T=(i+1)*(x-1)+p,S=(i+1)*x+p;c.push(m,v,S),c.push(v,T,S)}this.setIndex(c),this.setAttribute(`position`,new Xe(l,3)),this.setAttribute(`normal`,new Xe(h,3)),this.setAttribute(`uv`,new Xe(d,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}};function Yi(s){let e={};for(let t in s){e[t]={};for(let n in s[t]){let i=s[t][n];if(Kh(i))i.isRenderTargetTexture?(Ie(`UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms().`),e[t][n]=null):e[t][n]=i.clone();else if(Array.isArray(i))if(Kh(i[0])){let r=[];for(let a=0,o=i.length;a<o;a++)r[a]=i[a].clone();e[t][n]=r}else e[t][n]=i.slice();else e[t][n]=i}}return e}function Zt(s){let e={};for(let t=0;t<s.length;t++){let n=Yi(s[t]);for(let i in n)e[i]=n[i]}return e}function Kh(s){return s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)}function Pf(s){let e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function Pc(s){let e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ye.workingColorSpace}var Wu={clone:Yi,merge:Zt};var Df=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`;var If=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;var Hn=class extends nn{constructor(e){super(),this.isShaderMaterial=!0,this.type=`ShaderMaterial`,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Df,this.fragmentShader=If,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Yi(e.uniforms),this.uniformsGroups=Pf(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let i in this.uniforms){let a=this.uniforms[i].value;a&&a.isTexture?t.uniforms[i]={type:`t`,value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[i]={type:`c`,value:a.getHex()}:a&&a.isVector2?t.uniforms[i]={type:`v2`,value:a.toArray()}:a&&a.isVector3?t.uniforms[i]={type:`v3`,value:a.toArray()}:a&&a.isVector4?t.uniforms[i]={type:`v4`,value:a.toArray()}:a&&a.isMatrix3?t.uniforms[i]={type:`m3`,value:a.toArray()}:a&&a.isMatrix4?t.uniforms[i]={type:`m4`,value:a.toArray()}:t.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let n in e.uniforms){let i=e.uniforms[n];switch(this.uniforms[n]={},i.type){case`t`:this.uniforms[n].value=t[i.value]||null;break;case`c`:this.uniforms[n].value=new Ce().setHex(i.value);break;case`v2`:this.uniforms[n].value=new Se().fromArray(i.value);break;case`v3`:this.uniforms[n].value=new P().fromArray(i.value);break;case`v4`:this.uniforms[n].value=new yt().fromArray(i.value);break;case`m3`:this.uniforms[n].value=new Be().fromArray(i.value);break;case`m4`:this.uniforms[n].value=new ht().fromArray(i.value);break;default:this.uniforms[n].value=i.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}};var Ka=class extends Hn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type=`RawShaderMaterial`}};var Si=class extends nn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type=`MeshStandardMaterial`,this.defines={STANDARD:``},this.color=new Ce(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ce(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=kr,this.normalScale=new Se(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new En,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap=`round`,this.wireframeLinejoin=`round`,this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:``},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};var zi=class extends nn{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type=`MeshPhongMaterial`,this.color=new Ce(16777215),this.specular=new Ce(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ce(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=kr,this.normalScale=new Se(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new En,this.combine=ho,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap=`round`,this.wireframeLinejoin=`round`,this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};var Ja=class extends nn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type=`MeshDepthMaterial`,this.depthPacking=Pu,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}};var $a=class extends nn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type=`MeshDistanceMaterial`,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function cs(s,e){return!s||s.constructor===e?s:typeof e.BYTES_PER_ELEMENT==`number`?new e(s):Array.prototype.slice.call(s)}function wa(s){return s!==void 0&&s.inTangents!==void 0&&s.outTangents!==void 0}var Mi=class{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,i=t[n],r=t[n-1];n:{e:{let a;t:{i:if(!(e<i)){for(let o=n+2;;){if(i===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=i,i=t[++n],e<i)break e}a=t.length;break t}if(!(e>=r)){let o=t[1];e<o&&(n=2,r=o);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(i=r,r=t[--n-1],e>=r)break e}a=n,n=0;break t}break n}for(;n<a;){let o=n+a>>>1;e<t[o]?a=o:n=o+1}if(i=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i;for(let a=0;a!==i;++a)t[a]=n[r+a];return t}interpolate_(){throw new Error(`THREE.Interpolant: Call to abstract method.`)}intervalChanged_(){}};var Qa=class extends Mi{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Vl,endingEnd:Vl}}intervalChanged_(e,t,n){let i=this.parameterPositions,r=e-2,a=e+1,o=i[r],c=i[a];if(o===void 0)switch(this.getSettings_().endingStart){case Wl:r=e,o=2*t-n;break;case Xl:r=i.length-2,o=t+i[r]-i[r+1];break;default:r=e,o=n}if(c===void 0)switch(this.getSettings_().endingEnd){case Wl:a=e,c=2*n-t;break;case Xl:a=1,c=n+i[1]-i[0];break;default:a=e-1,c=t}let l=(n-t)*.5,h=this.valueSize;this._weightPrev=l/(t-o),this._weightNext=l/(c-n),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(e,t,n,i){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,h=this._offsetPrev,d=this._offsetNext,u=this._weightPrev,f=this._weightNext,_=(n-t)/(i-t),x=_*_,p=x*_,m=-u*p+2*u*x-u*_,v=(1+u)*p+(-1.5-2*u)*x+(-.5+u)*_+1,T=(-1-f)*p+(1.5+f)*x+.5*_,S=f*p-f*x;for(let w=0;w!==o;++w)r[w]=m*a[h+w]+v*a[l+w]+T*a[c+w]+S*a[d+w];return r}};var eo=class extends Mi{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,h=(n-t)/(i-t),d=1-h;for(let u=0;u!==o;++u)r[u]=a[l+u]*d+a[c+u]*h;return r}};var to=class extends Mi{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}};var no=class extends Mi{interpolate_(e,t,n,i){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,h=this.inTangents,d=this.outTangents;if(!h||!d){let _=(n-t)/(i-t),x=1-_;for(let p=0;p!==o;++p)r[p]=a[l+p]*x+a[c+p]*_;return r}let u=o*2,f=e-1;for(let _=0;_!==o;++_){let x=a[l+_],p=a[c+_],m=f*u+_*2,v=d[m],T=d[m+1],S=e*u+_*2,w=h[S],E=h[S+1],g=Nf(n,t,v,w,i);r[_]=Xu(g,x,T,E,p)}return r}};function Xu(s,e,t,n,i){let r=1-s;return r*r*r*e+3*r*r*s*t+3*r*s*s*n+s*s*s*i}function Lf(s,e,t,n,i){let r=1-s;return 3*r*r*(t-e)+6*r*s*(n-t)+3*s*s*(i-n)}function Nf(s,e,t,n,i){let r=(s-e)/(i-e);for(let a=0;a<8;a++){let o=Xu(r,e,t,n,i)-s;if(Math.abs(o)<1e-10)break;let c=Lf(r,e,t,n,i);if(Math.abs(c)<1e-10)break;r=Math.max(0,Math.min(1,r-o/c))}return r}var mn=class{constructor(e,t,n,i){if(e===void 0)throw new Error(`THREE.KeyframeTrack: track name is undefined`);if(t===void 0||t.length===0)throw new Error(`THREE.KeyframeTrack: no keyframes in track named `+e);this.name=e,this.times=cs(t,this.TimeBufferType),this.values=cs(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:cs(e.times,Array),values:cs(e.values,Array)};let i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i),wa(e.settings)&&(n.settings={inTangents:cs(e.settings.inTangents,Array),outTangents:cs(e.settings.outTangents,Array)})}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new to(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new eo(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Qa(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new no(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case Qs:t=this.InterpolantFactoryMethodDiscrete;break;case za:t=this.InterpolantFactoryMethodLinear;break;case Pa:t=this.InterpolantFactoryMethodSmooth;break;case Gl:t=this.InterpolantFactoryMethodBezier}if(t===void 0){let n=`unsupported interpolation for `+this.ValueTypeName+` keyframe track named `+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Ie(`KeyframeTrack:`,n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Qs;case this.InterpolantFactoryMethodLinear:return za;case this.InterpolantFactoryMethodSmooth:return Pa;case this.InterpolantFactoryMethodBezier:return Gl}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e;wa(this.settings)&&(Jh(this.settings.inTangents,e),Jh(this.settings.outTangents,e))}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e;wa(this.settings)&&($h(this.settings.inTangents,e),$h(this.settings.outTangents,e))}return this}trim(e,t){let n=this.times,i=n.length,r=0,a=i-1;for(;r!==i&&n[r]<e;)++r;for(;a!==-1&&n[a]>t;)--a;if(++a,r!==0||a!==i){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(Fe(`KeyframeTrack: Invalid value size in track.`,this),e=!1);let n=this.times,i=this.values,r=n.length;r===0&&(Fe(`KeyframeTrack: Track is empty.`,this),e=!1);let a=null;for(let o=0;o!==r;o++){let c=n[o];if(typeof c==`number`&&isNaN(c)){Fe(`KeyframeTrack: Time is not a valid number.`,this,o,c),e=!1;break}if(a!==null&&a>c){Fe(`KeyframeTrack: Out of order keys.`,this,o,c,a),e=!1;break}a=c}if(i!==void 0&&Zd(i))for(let o=0,c=i.length;o!==c;++o){let l=i[o];if(isNaN(l)){Fe(`KeyframeTrack: Value is not a valid number.`,this,o,l),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===Pa,r=e.length-1,a=1;for(let o=1;o<r;++o){let c=!1,l=e[o];if(l!==e[o+1]&&(o!==1||l!==e[0]))if(i)c=!0;else{let d=o*n,u=d-n,f=d+n;for(let _=0;_!==n;++_){let x=t[d+_];if(x!==t[u+_]||x!==t[f+_]){c=!0;break}}}if(c){if(o!==a){e[a]=e[o];let d=o*n,u=a*n;for(let f=0;f!==n;++f)t[u+f]=t[d+f]}++a}}if(r>0){e[a]=e[r];for(let o=r*n,c=a*n,l=0;l!==n;++l)t[c+l]=t[o+l];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,wa(this.settings)&&(i.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),i}};function Jh(s,e){for(let t=0,n=s.length;t!==n;t+=2)s[t]+=e}function $h(s,e){for(let t=0,n=s.length;t!==n;t+=2)s[t]*=e}mn.prototype.ValueTypeName=``;mn.prototype.TimeBufferType=Float32Array;mn.prototype.ValueBufferType=Float32Array;mn.prototype.DefaultInterpolation=za;var Ei=class extends mn{constructor(e,t,n){super(e,t,n)}};Ei.prototype.ValueTypeName=`bool`;Ei.prototype.ValueBufferType=Array;Ei.prototype.DefaultInterpolation=Qs;Ei.prototype.InterpolantFactoryMethodLinear=void 0;Ei.prototype.InterpolantFactoryMethodSmooth=void 0;var io=class extends mn{constructor(e,t,n,i){super(e,t,n,i)}};io.prototype.ValueTypeName=`color`;var so=class extends mn{constructor(e,t,n,i){super(e,t,n,i)}};so.prototype.ValueTypeName=`number`;var ro=class extends Mi{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=(n-t)/(i-t),l=e*o;for(let h=l+o;l!==h;l+=4)Gt.slerpFlat(r,0,a,l-o,a,l,c);return r}};var _r=class extends mn{constructor(e,t,n,i){super(e,t,n,i)}InterpolantFactoryMethodLinear(e){return new ro(this.times,this.values,this.getValueSize(),e)}};_r.prototype.ValueTypeName=`quaternion`;_r.prototype.InterpolantFactoryMethodSmooth=void 0;var Ti=class extends mn{constructor(e,t,n){super(e,t,n)}};Ti.prototype.ValueTypeName=`string`;Ti.prototype.ValueBufferType=Array;Ti.prototype.DefaultInterpolation=Qs;Ti.prototype.InterpolantFactoryMethodLinear=void 0;Ti.prototype.InterpolantFactoryMethodSmooth=void 0;var ao=class extends mn{constructor(e,t,n,i){super(e,t,n,i)}};ao.prototype.ValueTypeName=`vector`;var ps={enabled:!1,files:{},add:function(s,e){this.enabled!==!1&&(Qh(s)||(this.files[s]=e))},get:function(s){if(this.enabled!==!1&&!Qh(s))return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};function Qh(s){try{let e=s.slice(s.indexOf(`:`)+1);return new URL(e).protocol===`blob:`}catch{return!1}}var oo=class{constructor(e,t,n){let i=this,r=!1,a=0,o=0,c,l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(h){o++,r===!1&&i.onStart!==void 0&&i.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,i.onProgress!==void 0&&i.onProgress(h,a,o),a===o&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return h=h.normalize(`NFC`),c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,d){return l.push(h,d),this},this.removeHandler=function(h){let d=l.indexOf(h);return d!==-1&&l.splice(d,2),this},this.getHandler=function(h){for(let d=0,u=l.length;d<u;d+=2){let f=l[d],_=l[d+1];if(f.global&&(f.lastIndex=0),f.test(h))return _}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}};var $o=new oo;var Nn=class{constructor(e){this.manager=e!==void 0?e:$o,this.crossOrigin=`anonymous`,this.withCredentials=!1,this.path=``,this.resourcePath=``,this.requestHeader={},this.priority=`auto`,this.cache=`default`,typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`observe`,{detail:this}))}load(){}loadAsync(e,t){let n=this;return new Promise(function(i,r){n.load(e,i,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}setPriority(e){return this.priority=e,this}setCache(e){return this.cache=e,this}abort(){return this}};Nn.DEFAULT_MATERIAL_NAME=`__DEFAULT`;var ei={};var Yl=class extends Error{constructor(e,t){super(e),this.response=t}};var Hi=class extends Nn{constructor(e){super(e),this.mimeType=``,this.responseType=``,this._abortController=new AbortController}load(e,t,n,i){e===void 0&&(e=``),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=ps.get(`file:${e}`);if(r!==void 0){this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0);return}if(ei[e]!==void 0){ei[e].push({onLoad:t,onProgress:n,onError:i});return}ei[e]=[],ei[e].push({onLoad:t,onProgress:n,onError:i});let a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?`include`:`same-origin`,priority:this.priority,cache:this.cache,signal:typeof AbortSignal.any==`function`?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),o=this.mimeType,c=this.responseType;fetch(a).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&Ie(`FileLoader: HTTP Status 0 received.`),typeof ReadableStream>`u`||l.body===void 0||l.body.getReader===void 0)return l;let h=ei[e],d=l.body.getReader(),u=l.headers.get(`X-File-Size`)||l.headers.get(`Content-Length`),f=u?parseInt(u):0,_=f!==0,x=0,p=new ReadableStream({start(m){v();function v(){d.read().then(({done:T,value:S})=>{if(T)m.close();else{x+=S.byteLength;let w=new ProgressEvent(`progress`,{lengthComputable:_,loaded:x,total:f});for(let E=0,g=h.length;E<g;E++){let M=h[E];M.onProgress&&M.onProgress(w)}m.enqueue(S),v()}},T=>{m.error(T)})}}});return new Response(p)}else throw new Yl(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case`arraybuffer`:return l.arrayBuffer();case`blob`:return l.blob();case`document`:return l.text().then(h=>new DOMParser().parseFromString(h,o));case`json`:return l.json();default:if(o===``)return l.text();{let d=/charset="?([^;"\s]*)"?/i.exec(o),u=d&&d[1]?d[1].toLowerCase():void 0,f=new TextDecoder(u);return l.arrayBuffer().then(_=>f.decode(_))}}}).then(l=>{ps.add(`file:${e}`,l);let h=ei[e];delete ei[e];for(let d=0,u=h.length;d<u;d++){let f=h[d];f.onLoad&&f.onLoad(l)}}).catch(l=>{let h=ei[e];if(h===void 0)throw this.manager.itemError(e),l;delete ei[e];for(let d=0,u=h.length;d<u;d++){let f=h[d];f.onError&&f.onError(l)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}};var hs=/* @__PURE__ */ new WeakMap;var lo=class extends Nn{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,a=ps.get(`image:${e}`);if(a!==void 0){if(a.complete===!0)r.manager.itemStart(e),setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0);else{let d=hs.get(a);d===void 0&&(d=[],hs.set(a,d)),d.push({onLoad:t,onError:i})}return a}let o=_s(`img`);function c(){h(),t&&t(this);let d=hs.get(this)||[];for(let u=0;u<d.length;u++){let f=d[u];f.onLoad&&f.onLoad(this)}hs.delete(this),r.manager.itemEnd(e)}function l(d){h(),i&&i(d),ps.remove(`image:${e}`);let u=hs.get(this)||[];for(let f=0;f<u.length;f++){let _=u[f];_.onError&&_.onError(d)}hs.delete(this),r.manager.itemError(e),r.manager.itemEnd(e)}function h(){o.removeEventListener(`load`,c,!1),o.removeEventListener(`error`,l,!1)}return o.addEventListener(`load`,c,!1),o.addEventListener(`error`,l,!1),e.slice(0,5)!==`data:`&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),ps.add(`image:${e}`,o),r.manager.itemStart(e),o.fetchPriority=this.priority,o.src=e,o}};var xr=class extends Nn{constructor(e){super(e)}load(e,t,n,i){let r=new jt,a=new lo(this.manager);return a.setPriority(this.priority),a.setCache(this.cache),a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){r.image=o,r.needsUpdate=!0,t!==void 0&&t(r)},n,i),r}};var Ds=class extends At{static registerNode(e){this.prototype._lightNode=e}constructor(e,t=1){super(),this.isLight=!0,this.type=`Light`,this.color=new Ce(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}};var Hl=new ht;var eu=new P;var tu=new P;var yr=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Se(512,512),this.mapType=ln,this.map=null,this.mapPass=null,this.matrix=new ht,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new bi,this._frameExtents=new Se(1,1),this._viewportCount=1,this._viewports=[new yt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;eu.setFromMatrixPosition(e.matrixWorld),t.position.copy(eu),tu.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(tu),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,i){Hl.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(Hl,e.coordinateSystem,e.reversedDepth);let r=this._frameExtents,a=i?i.z/r.x:1,o=i?i.w/r.y:1,c=i?i.x/r.x:0,l=i?i.y/r.y:0;e.coordinateSystem===gs||e.reversedDepth?t.set(.5*a,0,0,.5*a+c,0,.5*o,0,.5*o+l,0,0,1,0,0,0,0,1):t.set(.5*a,0,0,.5*a+c,0,.5*o,0,.5*o+l,0,0,.5,.5,0,0,0,1),t.multiply(Hl)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.mapType=e.mapType,this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.mapType=this.mapType,e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}};var Aa=new P;var Ca=new Gt;var zn=new P;var vr=class extends At{constructor(){super(),this.isCamera=!0,this.type=`Camera`,this.matrixWorldInverse=new ht,this.projectionMatrix=new ht,this.projectionMatrixInverse=new ht,this.coordinateSystem=Mn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Aa,Ca,zn),zn.x===1&&zn.y===1&&zn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Aa,Ca,zn.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(Aa,Ca,zn),zn.x===1&&zn.y===1&&zn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Aa,Ca,zn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}};var xi=new P;var nu=new Se;var iu=new Se;var Yt=class extends vr{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type=`PerspectiveCamera`,this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=ys*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Js*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ys*2*Math.atan(Math.tan(Js*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){xi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(xi.x,xi.y).multiplyScalar(-e/xi.z),xi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(xi.x,xi.y).multiplyScalar(-e/xi.z)}getViewSize(e,t){return this.getViewBounds(e,nu,iu),t.subVectors(iu,nu)}setViewOffset(e,t,n,i,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Js*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,r=-.5*i,a=this.view;if(this.view!==null&&this.view.enabled){let c=a.fullWidth,l=a.fullHeight;r+=a.offsetX*i/c,t-=a.offsetY*n/l,i*=a.width/c,n*=a.height/l}let o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}};var jl=class extends yr{constructor(){super(new Yt(90,1,.5,500)),this.isPointLightShadow=!0}};var br=class extends Ds{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type=`PointLight`,this.distance=n,this.decay=i,this.shadow=new jl}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}};var Sr=class extends vr{constructor(e=-1,t=1,n=1,i=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type=`OrthographicCamera`,this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2,r=n-e,a=n+e,o=i+t,c=i-t;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,a=r+l*this.view.width,o-=h*this.view.offsetY,c=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}};var Zl=class extends yr{constructor(){super(new Sr(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}};var Gi=class extends Ds{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type=`DirectionalLight`,this.position.copy(At.DEFAULT_UP),this.updateMatrix(),this.target=new At,this.shadow=new Zl}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}};var Mr=class extends Ds{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type=`AmbientLight`}};var Er=class{static extractUrlBase(e){let t=e.lastIndexOf(`/`);return t===-1?`./`:e.slice(0,t+1)}static resolveURL(e,t){return typeof e!=`string`||e===``?``:(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,`$1`)),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}};var us=-90;var ds=1;var Is=class extends At{constructor(e,t,n){super(),this.type=`CubeCamera`,this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let i=new Yt(us,ds,e,t);i.layers=this.layers,this.add(i);let r=new Yt(us,ds,e,t);r.layers=this.layers,this.add(r);let a=new Yt(us,ds,e,t);a.layers=this.layers,this.add(a);let o=new Yt(us,ds,e,t);o.layers=this.layers,this.add(o);let c=new Yt(us,ds,e,t);c.layers=this.layers,this.add(c);let l=new Yt(us,ds,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,i,r,a,o,c]=t;for(let l of t)this.remove(l);if(e===Mn)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===gs)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error(`THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: `+e);for(let l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,c,l,h]=this.children,d=e.getRenderTarget(),u=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;let x=n.texture.mipmapsAutoUpdate;n.texture.mipmapsAutoUpdate=!1;let p=!1;e.isWebGLRenderer===!0?p=e.state.buffers.depth.getReversed():p=e.reversedDepthBuffer,e.setRenderTarget(n,0,i),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(n,1,i),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,2,i),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,i),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),e.setRenderTarget(n,4,i),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),n.texture.mipmapsAutoUpdate=x,e.setRenderTarget(n,5,i),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(d,u,f),e.xr.enabled=_,n.texture.needsPMREMUpdate=!0}};var co=class extends Yt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e,this.perCameraFrustumCulled=!1}};var Dc=`\\[\\]\\.:\\/`;var Of=new RegExp(`[`+Dc+`]`,`g`);var Ic=`[^`+Dc+`]`;var Uf=`[^`+Dc.replace(`\\.`,``)+`]`;var Ff=/((?:WC+[\/:])*)/.source.replace(`WC`,Ic);var Bf=/(WCOD+)?/.source.replace(`WCOD`,Uf);var kf=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace(`WC`,Ic);var zf=/\.(WC+)(?:\[(.+)\])?/.source.replace(`WC`,Ic);var Hf=new RegExp(`^`+Ff+Bf+kf+zf+`$`);var Gf=[`material`,`materials`,`bones`,`map`];var Kl=class{constructor(e,t,n){let i=n||mt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}};var mt=class s{constructor(e,t,n){this.path=t,this.parsedPath=n||s.parseTrackName(t),this.node=s.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new s.Composite(e,t,n):new s(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,`_`).replace(Of,``)}static parseTrackName(e){let t=Hf.exec(e);if(t===null)throw new Error(`THREE.PropertyBinding: Cannot parse trackName: `+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(`.`);if(i!==void 0&&i!==-1){let r=n.nodeName.substring(i+1);Gf.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error(`THREE.PropertyBinding: can not parse propertyName from trackName: `+e);return n}static findNode(e,t){if(t===void 0||t===``||t===`.`||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===t||o.uuid===t)return o;let c=n(o.children);if(c)return c}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,i=t.propertyName,r=t.propertyIndex;if(e||(e=s.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){Ie(`PropertyBinding: No target node found for track: `+this.path+`.`);return}if(n){let l=t.objectIndex;switch(n){case`materials`:if(!e.material){Fe(`PropertyBinding: Can not bind to material as node does not have a material.`,this);return}if(!e.material.materials){Fe(`PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.`,this);return}e=e.material.materials;break;case`bones`:if(!e.skeleton){Fe(`PropertyBinding: Can not bind to bones as node does not have a skeleton.`,this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===l){l=h;break}break;case`map`:if(`map`in e){e=e.map;break}if(!e.material){Fe(`PropertyBinding: Can not bind to material as node does not have a material.`,this);return}if(!e.material.map){Fe(`PropertyBinding: Can not bind to material.map as node.material does not have a map.`,this);return}e=e.material.map;break;default:if(e[n]===void 0){Fe(`PropertyBinding: Can not bind to objectName of node undefined.`,this);return}e=e[n]}if(l!==void 0){if(e[l]===void 0){Fe(`PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.`,this,e);return}e=e[l]}}let a=e[i];if(a===void 0){let l=t.nodeName;Fe(`PropertyBinding: Trying to update property for track: `+l+`.`+i+` but it wasn't found.`,e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(i===`morphTargetInfluences`){if(!e.geometry){Fe(`PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.`,this);return}if(!e.geometry.morphAttributes){Fe(`PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.`,this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(c=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=i;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};mt.Composite=Kl;mt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};mt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};mt.prototype.GetterByBindingType=[mt.prototype._getValue_direct,mt.prototype._getValue_array,mt.prototype._getValue_arrayElement,mt.prototype._getValue_toArray];mt.prototype.SetterByBindingTypeAndVersioning=[[mt.prototype._setValue_direct,mt.prototype._setValue_direct_setNeedsUpdate,mt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[mt.prototype._setValue_array,mt.prototype._setValue_array_setNeedsUpdate,mt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[mt.prototype._setValue_arrayElement,mt.prototype._setValue_arrayElement_setNeedsUpdate,mt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[mt.prototype._setValue_fromArray,mt.prototype._setValue_fromArray_setNeedsUpdate,mt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var su=new ht;var Tr=class{constructor(e,t,n=0,i=1/0){this.ray=new si(e,t),this.near=n,this.far=i,this.camera=null,this.layers=new bs,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):Fe(`Raycaster: Unsupported camera type: `+t.type)}setFromXRController(e){return su.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(su),this}intersectObject(e,t=!0,n=[]){return Jl(e,this,n,t),n.sort(ru),n}intersectObjects(e,t=!0,n=[]){for(let i=0,r=e.length;i<r;i++)Jl(e[i],this,n,t);return n.sort(ru),n}};function ru(s,e){return s.distance-e.distance}function Jl(s,e,t,n){let i=!0;if(s.layers.test(e.layers)&&s.raycast(e,t)===!1&&(i=!1),i===!0&&n===!0){let r=s.children;for(let a=0,o=r.length;a<o;a++)Jl(r[a],e,t,!0)}}var wr=class{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,Ie(`Clock: This module has been deprecated. Please use THREE.Timer instead.`)}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let t=performance.now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}};var oi=class{constructor(e=1,t=0,n=0){this.radius=e,this.phi=t,this.theta=n}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=je(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(je(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}};var $l=class{static{this.prototype.isMatrix2=!0}constructor(e,t,n,i){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,i)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,i){let r=this.elements;return r[0]=e,r[2]=t,r[1]=n,r[3]=i,this}};var Ar=class extends sn{constructor(e=10,t=10,n=4473924,i=8947848){n=new Ce(n),i=new Ce(i);let r=t/2,a=e/t,o=e/2,c=[],l=[];for(let u=0,f=0,_=-o;u<=t;u++,_+=a){c.push(-o,0,_,o,0,_),c.push(_,0,-o,_,0,o);let x=u===r?n:i;x.toArray(l,f),f+=3,x.toArray(l,f),f+=3,x.toArray(l,f),f+=3,x.toArray(l,f),f+=3}let h=new nt;h.setAttribute(`position`,new Xe(c,3)),h.setAttribute(`color`,new Xe(l,3));let d=new Pt({vertexColors:!0,toneMapped:!1});super(h,d),this.type=`GridHelper`}dispose(){super.dispose(),this.geometry.dispose(),this.material.dispose()}};var Ra=new Tn;var Cr=class extends sn{constructor(e,t=16776960){let n=new Uint16Array([0,1,1,2,2,3,3,0,4,5,5,6,6,7,7,4,0,4,1,5,2,6,3,7]),i=/* @__PURE__ */ new Float32Array(24),r=new nt;r.setIndex(new xt(n,1)),r.setAttribute(`position`,new xt(i,3)),super(r,new Pt({color:t,toneMapped:!1})),this.object=e,this.type=`BoxHelper`,this.matrixAutoUpdate=!1,this.update()}update(){if(this.object!==void 0&&Ra.setFromObject(this.object),Ra.isEmpty())return;let e=Ra.min,t=Ra.max,n=this.geometry.attributes.position,i=n.array;i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=e.x,i[4]=t.y,i[5]=t.z,i[6]=e.x,i[7]=e.y,i[8]=t.z,i[9]=t.x,i[10]=e.y,i[11]=t.z,i[12]=t.x,i[13]=t.y,i[14]=e.z,i[15]=e.x,i[16]=t.y,i[17]=e.z,i[18]=e.x,i[19]=e.y,i[20]=e.z,i[21]=t.x,i[22]=e.y,i[23]=e.z,n.needsUpdate=!0,this.geometry.computeBoundingSphere()}setFromObject(e){return this.object=e,this.update(),this}copy(e,t){return super.copy(e,t),this.object=e.object,this}dispose(){super.dispose(),this.geometry.dispose(),this.material.dispose()}};var Rr=class extends sn{constructor(e=1){let t=[0,0,0,e,0,0,0,0,0,0,e,0,0,0,0,0,0,e],n=[1,0,0,1,.6,0,0,1,0,.6,1,0,0,0,1,0,.6,1],i=new nt;i.setAttribute(`position`,new Xe(t,3)),i.setAttribute(`color`,new Xe(n,3));let r=new Pt({vertexColors:!0,toneMapped:!1});super(i,r),this.type=`AxesHelper`}setColors(e,t,n){let i=new Ce,r=this.geometry.attributes.color.array;return i.set(e),i.toArray(r,0),i.toArray(r,3),i.set(t),i.toArray(r,6),i.toArray(r,9),i.set(n),i.toArray(r,12),i.toArray(r,15),this.geometry.attributes.color.needsUpdate=!0,this}dispose(){super.dispose(),this.geometry.dispose(),this.material.dispose()}};var Pr=class extends In{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}};function Lc(s,e,t,n){let i=Vf(n);switch(t){case _c:return s*e;case yc:return s*e/i.components*i.byteLength;case xo:return s*e/i.components*i.byteLength;case Ai:return s*e*2/i.components*i.byteLength;case yo:return s*e*2/i.components*i.byteLength;case xc:return s*e*3/i.components*i.byteLength;case Bn:return s*e*4/i.components*i.byteLength;case vo:return s*e*4/i.components*i.byteLength;case Lr:case Nr:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Or:case Ur:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case So:case Eo:return Math.max(s,16)*Math.max(e,8)/4;case bo:case Mo:return Math.max(s,8)*Math.max(e,8)/2;case To:case wo:case Co:case Ro:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Ao:case Fr:case Po:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Do:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Io:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case Lo:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case No:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case Oo:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case Uo:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case Fo:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case Bo:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case ko:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case zo:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case Ho:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case Go:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case Vo:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case Wo:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case Xo:case qo:case Yo:return Math.ceil(s/4)*Math.ceil(e/4)*16;case jo:case Zo:return Math.ceil(s/4)*Math.ceil(e/4)*8;case Br:case Ko:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Vf(s){switch(s){case ln:case fc:return{byteLength:1,components:1};case Us:case pc:case Fn:return{byteLength:2,components:1};case go:case _o:return{byteLength:2,components:4};case On:case mo:case Un:return{byteLength:4,components:1};case mc:case gc:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`register`,{detail:{revision:`187`}}));typeof window<`u`&&(window.__THREE__?Ie(`WARNING: Multiple instances of Three.js being imported.`):window.__THREE__=`187`);function fd(){let s=null,e=!1,t=null,n=null;function i(r,a){n=s.requestAnimationFrame(i),t(r,a)}return{start:function(){e!==!0&&t!==null&&s!==null&&(n=s.requestAnimationFrame(i),e=!0)},stop:function(){s!==null&&s.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){s=r}}}function Xf(s){let e=/* @__PURE__ */ new WeakMap;function t(o,c){let l=o.array,h=o.usage,d=l.byteLength,u=s.createBuffer();s.bindBuffer(c,u),s.bufferData(c,l,h),o.onUploadCallback();let f;if(l instanceof Float32Array)f=s.FLOAT;else if(typeof Float16Array<`u`&&l instanceof Float16Array)f=s.HALF_FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?f=s.HALF_FLOAT:f=s.UNSIGNED_SHORT;else if(l instanceof Int16Array)f=s.SHORT;else if(l instanceof Uint32Array)f=s.UNSIGNED_INT;else if(l instanceof Int32Array)f=s.INT;else if(l instanceof Int8Array)f=s.BYTE;else if(l instanceof Uint8Array)f=s.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)f=s.UNSIGNED_BYTE;else throw new Error(`THREE.WebGLAttributes: Unsupported buffer data format: `+l);return{buffer:u,type:f,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:d}}function n(o,c,l){let h=c.array,d=c.updateRanges;if(s.bindBuffer(l,o),d.length===0)s.bufferSubData(l,0,h);else{d.sort((f,_)=>f.start-_.start);let u=0;for(let f=1;f<d.length;f++){let _=d[u],x=d[f];x.start<=_.start+_.count+1?_.count=Math.max(_.count,x.start+x.count-_.start):(++u,d[u]=x)}d.length=u+1;for(let f=0,_=d.length;f<_;f++){let x=d[f];s.bufferSubData(l,x.start*h.BYTES_PER_ELEMENT,h,x.start,x.count)}c.clearUpdateRanges()}c.onUploadCallback()}function i(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let c=e.get(o);c&&(s.deleteBuffer(c.buffer),e.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let l=e.get(o);if(l===void 0)e.set(o,t(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error(`THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.`);n(l.buffer,o,c),l.version=o.version}}return{get:i,remove:r,update:a}}var Ze={alphahash_fragment:`#ifdef USE_ALPHAHASH
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
} // validated`,defaultnormal_vertex:`vec3 transformedNormal = objectNormal;
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
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
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
		#ifdef ENVMAP_TYPE_PMREM
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * worldNormal, ENVMAP_MAX_LOD );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * reflectVec, roughnessToMip( roughness ) );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureLod( envMap, envMapRotation * retroVec, roughnessToMip( roughness ) );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_PMREM
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
				#ifdef ENVMAP_TYPE_PMREM
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
material.roughness = max( roughnessFactor, 0.045 );
material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef USE_DIFFUSE_ROUGHNESS
	float diffuseRoughnessFactor = diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		diffuseRoughnessFactor *= texture2D( diffuseRoughnessMap, vDiffuseRoughnessMapUv ).r;
	#endif
	material.diffuseRoughness = saturate( diffuseRoughnessFactor );
#endif
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
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.045 );
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
	#ifdef USE_DIFFUSE_ROUGHNESS
		float diffuseRoughness;
	#endif
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
#ifdef USE_DIFFUSE_ROUGHNESS
	const float EON_EPSILON = 1e-7;
	float FON_DirectionalAlbedo( const in float mu, const in float roughness, const in float A ) {
		float muComp = 1.0 - mu;
		float gOverPi = muComp * ( 0.0571085289 + muComp * ( 0.491881867 + muComp * ( - 0.332181442 + muComp * 0.0714429953 ) ) );
		return A * ( 1.0 + roughness * gOverPi );
	}
	vec3 BRDF_EON( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 diffuseColor, const in float roughness ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return BRDF_Lambert( rho );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float s = dot( lightDir, viewDir ) - dotNL * dotNV;
		float sOverT = ( s > 0.0 ) ? s / max( max( dotNL, dotNV ), EON_EPSILON ) : s;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		vec3 singleScatter = rho * RECIPROCAL_PI * A * ( 1.0 + roughness * sOverT );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		float albedoV = FON_DirectionalAlbedo( dotNV, roughness, A );
		float albedoL = FON_DirectionalAlbedo( dotNL, roughness, A );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		vec3 multiScatter = rhoMultiScatter * RECIPROCAL_PI
			* max( EON_EPSILON, 1.0 - albedoV )
			* max( EON_EPSILON, 1.0 - albedoL )
			/ max( EON_EPSILON, 1.0 - averageAlbedo );
		return singleScatter + multiScatter;
	}
	vec3 EON_DirectionalAlbedo( const in vec3 diffuseColor, const in float roughness, const in float dotNV ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return rho;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		float directionalAlbedo = FON_DirectionalAlbedo( dotNV, roughness, A );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		return rho * directionalAlbedo + rhoMultiScatter * ( 1.0 - directionalAlbedo );
	}
#endif
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
		float roughness = max( material.clearcoatRoughness, 0.045 );
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
	float roughness = max( material.roughness, 0.045 );
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
		float alphaT = max( material.alphaT, alpha );
		float V = V_GGX_SmithCorrelated_Anisotropic( alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( alphaT, alpha, dotNH, dotTH, dotBH );
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
	#ifdef USE_DIFFUSE_ROUGHNESS
		vec3 diffuseBRDF = BRDF_EON( directLight.direction, geometryViewDir, geometryNormal, material.diffuseColor, material.diffuseRoughness ) * ( 1.0 - material.metalness );
	#else
		vec3 diffuseBRDF = BRDF_Lambert( material.diffuseContribution );
	#endif
	reflectedLight.directDiffuse += irradiance * diffuseBRDF * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuseAlbedo = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness );
		vec3 diffuse = irradiance * RECIPROCAL_PI * diffuseAlbedo * ( 1.0 - singleScattering - multiScattering );
	#else
		vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#endif
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
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuse = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness ) * ( 1.0 - totalScatteringDielectric );
	#else
		vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	#endif
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
	#if NUM_LIGHT_PROBE_GRIDS > 0
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		int probeGrid = - 1;
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( isInsideLightProbeGrid( probeWorldPos, probeWorldNormal, probesMin[ i ], probesMax[ i ], probesResolution[ i ] ) ) probeGrid = UNROLLED_LOOP_INDEX;
		}
		#pragma unroll_loop_end
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( probeGrid == UNROLLED_LOOP_INDEX ) irradiance += getLightProbeGridIrradiance( probesSH[ i ], probesMin[ i ], probesMax[ i ], probesResolution[ i ], probeWorldPos, probeWorldNormal );
		}
		#pragma unroll_loop_end
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
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_PMREM )
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
#endif`,lightprobes_pars_fragment:`#if NUM_LIGHT_PROBE_GRIDS > 0
uniform highp sampler3D probesSH[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMin[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMax[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesResolution[ NUM_LIGHT_PROBE_GRIDS ];
bool isInsideLightProbeGrid( vec3 worldPos, vec3 worldNormal, vec3 probesMin, vec3 probesMax, vec3 probesResolution ) {
	vec3 spacing = ( probesMax - probesMin ) / probesResolution;
	vec3 samplePos = worldPos + worldNormal * spacing * 0.5;
	vec3 margin = spacing * 0.01;
	return all( greaterThanEqual( samplePos, probesMin - margin ) ) && all( lessThanEqual( samplePos, probesMax + margin ) );
}
vec3 getLightProbeGridIrradiance( highp sampler3D probesSH, vec3 probesMin, vec3 probesMax, vec3 probesResolution, vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 probeSpacing = gridRange / res;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.5 / res, 1.0 - 0.5 / res );
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
	#if defined( USE_COLOR_ALPHA )
		vColor *= morphTargetBaseInfluence;
	#elif defined( USE_COLOR )
		vColor.rgb *= morphTargetBaseInfluence;
	#endif
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor.rgb += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
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
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				vec2 radius = shadowRadius * texelSize;
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
			float lightDistance = length( lightToPosition );
			float depthRange = shadowCameraFar - shadowCameraNear;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float depthA = - shadowCameraNear / depthRange - shadowBias;
				float depthB = shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#else
				float depthA = shadowCameraFar / depthRange + shadowBias;
				float depthB = - shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			shadow = 0.0;
			for ( int i = 0; i < 5; i ++ ) {
				vec2 offset = vogelDiskSample( i, 5, phi );
				vec3 direction = bd3D + ( tangent * offset.x + bitangent * offset.y ) * texelSize;
				vec3 absDirection = abs( direction );
				float dp = depthA + depthB / max( max( absDirection.x, absDirection.y ), absDirection.z );
				shadow += texture( shadowMap, vec4( direction, dp ) );
			}
			shadow *= 0.2;
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
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	varying vec2 vDiffuseRoughnessMapUv;
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
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	uniform mat3 diffuseRoughnessMapTransform;
	varying vec2 vDiffuseRoughnessMapUv;
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
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	vDiffuseRoughnessMapUv = ( diffuseRoughnessMapTransform * vec3( DIFFUSE_ROUGHNESSMAP_UV, 1 ) ).xy;
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
}`,backgroundCube_frag:`uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <envmap_common_pars_fragment>
void main() {
	#ifdef ENVMAP_TYPE_PMREM
		vec4 texColor = textureLod( envMap, backgroundRotation * vWorldDirection, roughnessToMip( backgroundBlurriness ) );
	#else
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
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
#ifdef USE_DIFFUSE_ROUGHNESS
	uniform float diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		uniform sampler2D diffuseRoughnessMap;
	#endif
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
}`};var _e={common:{diffuse:{value:new Ce(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Be},alphaMap:{value:null},alphaMapTransform:{value:new Be},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Be}},envmap:{envMap:{value:null},envMapRotation:{value:new Be},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Be}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Be}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Be},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Be},normalScale:{value:new Se(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Be},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Be}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Be}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Be}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ce(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new Ce(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Be},alphaTest:{value:0},uvTransform:{value:new Be}},sprite:{diffuse:{value:new Ce(16777215)},opacity:{value:1},center:{value:new Se(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Be},alphaMap:{value:null},alphaMapTransform:{value:new Be},alphaTest:{value:0}}};var Yn={basic:{uniforms:Zt([_e.common,_e.specularmap,_e.envmap,_e.aomap,_e.lightmap,_e.fog]),vertexShader:Ze.meshbasic_vert,fragmentShader:Ze.meshbasic_frag},lambert:{uniforms:Zt([_e.common,_e.specularmap,_e.envmap,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.fog,_e.lights,{emissive:{value:new Ce(0)},envMapIntensity:{value:1}}]),vertexShader:Ze.meshlambert_vert,fragmentShader:Ze.meshlambert_frag},phong:{uniforms:Zt([_e.common,_e.specularmap,_e.envmap,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.fog,_e.lights,{emissive:{value:new Ce(0)},specular:{value:new Ce(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Ze.meshphong_vert,fragmentShader:Ze.meshphong_frag},standard:{uniforms:Zt([_e.common,_e.envmap,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.roughnessmap,_e.metalnessmap,_e.fog,_e.lights,{emissive:{value:new Ce(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ze.meshphysical_vert,fragmentShader:Ze.meshphysical_frag},toon:{uniforms:Zt([_e.common,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.gradientmap,_e.fog,_e.lights,{emissive:{value:new Ce(0)}}]),vertexShader:Ze.meshtoon_vert,fragmentShader:Ze.meshtoon_frag},matcap:{uniforms:Zt([_e.common,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.fog,{matcap:{value:null}}]),vertexShader:Ze.meshmatcap_vert,fragmentShader:Ze.meshmatcap_frag},points:{uniforms:Zt([_e.points,_e.fog]),vertexShader:Ze.points_vert,fragmentShader:Ze.points_frag},dashed:{uniforms:Zt([_e.common,_e.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ze.linedashed_vert,fragmentShader:Ze.linedashed_frag},depth:{uniforms:Zt([_e.common,_e.displacementmap]),vertexShader:Ze.depth_vert,fragmentShader:Ze.depth_frag},normal:{uniforms:Zt([_e.common,_e.bumpmap,_e.normalmap,_e.displacementmap,{opacity:{value:1}}]),vertexShader:Ze.meshnormal_vert,fragmentShader:Ze.meshnormal_frag},sprite:{uniforms:Zt([_e.sprite,_e.fog]),vertexShader:Ze.sprite_vert,fragmentShader:Ze.sprite_frag},background:{uniforms:{uvTransform:{value:new Be},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ze.background_vert,fragmentShader:Ze.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Be}},vertexShader:Ze.backgroundCube_vert,fragmentShader:Ze.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ze.cube_vert,fragmentShader:Ze.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ze.equirect_vert,fragmentShader:Ze.equirect_frag},distance:{uniforms:Zt([_e.common,_e.displacementmap,{referencePosition:{value:new P},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ze.distance_vert,fragmentShader:Ze.distance_frag},shadow:{uniforms:Zt([_e.lights,_e.fog,{color:{value:new Ce(0)},opacity:{value:1}}]),vertexShader:Ze.shadow_vert,fragmentShader:Ze.shadow_frag}};Yn.physical={uniforms:Zt([Yn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Be},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Be},clearcoatNormalScale:{value:new Se(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Be},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new Be},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Be},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Be},sheen:{value:0},sheenColor:{value:new Ce(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Be},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Be},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Be},transmissionSamplerSize:{value:new Se},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Be},attenuationDistance:{value:0},attenuationColor:{value:new Ce(0)},specularColor:{value:new Ce(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Be},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Be},anisotropyVector:{value:new Se},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Be}}]),vertexShader:Ze.meshphysical_vert,fragmentShader:Ze.meshphysical_frag};var Qo={r:0,b:0,g:0};var Tg=new ht;var pd=new Be;pd.set(-1,0,0,0,1,0,0,0,1);function wg(s,e,t,n,i,r){let a=new Ce(0),o=i===!0?0:1,c,l,h=null,d=0,u=null;function f(v){let T=v.isScene===!0?v.background:null;if(T&&T.isTexture){let S=v.backgroundBlurriness>0;T=e.get(T,S)}return T}function _(v){let T=!1,S=f(v);S===null?p(a,o):S&&S.isColor&&(p(S,1),T=!0);let w=s.xr.getEnvironmentBlendMode();w===`additive`?t.buffers.color.setClear(0,0,0,1,r):w===`alpha-blend`&&t.buffers.color.setClear(0,0,0,0,r),(s.autoClear||T)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function x(v,T){let S=f(T);S&&S.isCubeTexture?(l===void 0&&(l=new kt(new ai(1,1,1),new Hn({name:`BackgroundCubeMaterial`,uniforms:Yi(Yn.backgroundCube.uniforms),vertexShader:Yn.backgroundCube.vertexShader,fragmentShader:Yn.backgroundCube.fragmentShader,side:rn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute(`normal`),l.geometry.deleteAttribute(`uv`),l.onBeforeRender=function(w,E,g){this.matrixWorld.copyPosition(g.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(l)),l.material.uniforms.envMap.value=S,l.material.uniforms.backgroundBlurriness.value=T.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(Tg.makeRotationFromEuler(T.backgroundRotation)).transpose(),S.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(pd),l.material.toneMapped=Ye.getTransfer(S.colorSpace)!==ot,(h!==S||d!==S.version||u!==s.toneMapping)&&(l.material.needsUpdate=!0,h=S,d=S.version,u=s.toneMapping),l.layers.enableAll(),v.unshift(l,l.geometry,l.material,0,0,null)):S&&S.isTexture&&(c===void 0&&(c=new kt(new pr(2,2),new Hn({name:`BackgroundMaterial`,uniforms:Yi(Yn.background.uniforms),vertexShader:Yn.background.vertexShader,fragmentShader:Yn.background.fragmentShader,side:Vn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute(`normal`),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(c)),c.material.uniforms.t2D.value=S,c.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,c.material.toneMapped=Ye.getTransfer(S.colorSpace)!==ot,S.matrixAutoUpdate===!0&&S.updateMatrix(),c.material.uniforms.uvTransform.value.copy(S.matrix),(h!==S||d!==S.version||u!==s.toneMapping)&&(c.material.needsUpdate=!0,h=S,d=S.version,u=s.toneMapping),c.layers.enableAll(),v.unshift(c,c.geometry,c.material,0,0,null))}function p(v,T){v.getRGB(Qo,Pc(s)),t.buffers.color.setClear(Qo.r,Qo.g,Qo.b,T,r)}function m(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(v,T=1){a.set(v),o=T,p(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(v){o=v,p(a,o)},render:_,addToRenderList:x,dispose:m}}function Ag(s,e){let t=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=u(null),r=i,a=!1;function o(L,U,V,I,H){let $=!1,z=d(L,I,V,U);r!==z&&(r=z,l(r.object)),$=f(L,I,V,H),$&&_(L,I,V,H),H!==null&&e.update(H,s.ELEMENT_ARRAY_BUFFER),($||a)&&(a=!1,S(L,U,V,I),H!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(H).buffer))}function c(){return s.createVertexArray()}function l(L){return s.bindVertexArray(L)}function h(L){return s.deleteVertexArray(L)}function d(L,U,V,I){let H=I.wireframe===!0,$=n[U.id];$===void 0&&($={},n[U.id]=$);let z=L.isInstancedMesh===!0?L.id:0,re=$[z];re===void 0&&(re={},$[z]=re);let X=re[V.id];X===void 0&&(X={},re[V.id]=X);let ee=X[H];return ee===void 0&&(ee=u(c()),X[H]=ee),ee}function u(L){let U=[],V=[],I=[];for(let H=0;H<t;H++)U[H]=0,V[H]=0,I[H]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:U,enabledAttributes:V,attributeDivisors:I,object:L,attributes:{},index:null}}function f(L,U,V,I){let H=r.attributes,$=U.attributes,z=0,re=V.getAttributes();for(let X in re)if(re[X].location>=0){let ne=H[X],Re=$[X];if(Re===void 0&&(X===`instanceMatrix`&&L.instanceMatrix&&(Re=L.instanceMatrix),X===`instanceColor`&&L.instanceColor&&(Re=L.instanceColor)),ne===void 0||ne.attribute!==Re||Re&&ne.data!==Re.data)return!0;z++}return r.attributesNum!==z||r.index!==I}function _(L,U,V,I){let H={},$=U.attributes,z=0,re=V.getAttributes();for(let X in re)if(re[X].location>=0){let ne=$[X];ne===void 0&&(X===`instanceMatrix`&&L.instanceMatrix&&(ne=L.instanceMatrix),X===`instanceColor`&&L.instanceColor&&(ne=L.instanceColor));let Re={};Re.attribute=ne,ne&&ne.data&&(Re.data=ne.data),H[X]=Re,z++}r.attributes=H,r.attributesNum=z,r.index=I}function x(){let L=r.newAttributes;for(let U=0,V=L.length;U<V;U++)L[U]=0}function p(L){m(L,0)}function m(L,U){let V=r.newAttributes,I=r.enabledAttributes,H=r.attributeDivisors;V[L]=1,I[L]===0&&(s.enableVertexAttribArray(L),I[L]=1),H[L]!==U&&(s.vertexAttribDivisor(L,U),H[L]=U)}function v(){let L=r.newAttributes,U=r.enabledAttributes;for(let V=0,I=U.length;V<I;V++)U[V]!==L[V]&&(s.disableVertexAttribArray(V),U[V]=0)}function T(L,U,V,I,H,$,z){z===!0?s.vertexAttribIPointer(L,U,V,H,$):s.vertexAttribPointer(L,U,V,I,H,$)}function S(L,U,V,I){x();let H=I.attributes,$=V.getAttributes(),z=U.defaultAttributeValues;for(let re in $){let X=$[re];if(X.location>=0){let ee=H[re];if(ee===void 0&&(re===`instanceMatrix`&&L.instanceMatrix&&(ee=L.instanceMatrix),re===`instanceColor`&&L.instanceColor&&(ee=L.instanceColor)),ee!==void 0){let ne=ee.normalized,Re=ee.itemSize,ze=e.get(ee);if(ze===void 0)continue;let K=ze.buffer,xe=ze.type,Te=ze.bytesPerElement,Ne=xe===s.INT||xe===s.UNSIGNED_INT||ee.gpuType===mo;if(ee.isInterleavedBufferAttribute){let ye=ee.data,Ge=ye.isInterleavedBuffer===!0?ye.stride:ye.itemSize,Mt=ee.offset;if(ye.isInstancedInterleavedBuffer||ye.isInstancedBufferAttribute){for(let Ue=0;Ue<X.locationSize;Ue++)m(X.location+Ue,ye.meshPerAttribute);L.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=ye.meshPerAttribute*ye.count)}else for(let Ue=0;Ue<X.locationSize;Ue++)p(X.location+Ue);s.bindBuffer(s.ARRAY_BUFFER,K);for(let Ue=0;Ue<X.locationSize;Ue++)T(X.location+Ue,Re/X.locationSize,xe,ne,Ge*Te,(Mt+Re/X.locationSize*Ue)*Te,Ne)}else{if(ee.isInstancedBufferAttribute){for(let ye=0;ye<X.locationSize;ye++)m(X.location+ye,ee.meshPerAttribute);L.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=ee.meshPerAttribute*ee.count)}else for(let ye=0;ye<X.locationSize;ye++)p(X.location+ye);s.bindBuffer(s.ARRAY_BUFFER,K);for(let ye=0;ye<X.locationSize;ye++)T(X.location+ye,Re/X.locationSize,xe,ne,Re*Te,Re/X.locationSize*ye*Te,Ne)}}else if(z!==void 0){let ne=z[re];if(ne!==void 0)switch(ne.length){case 2:s.vertexAttrib2fv(X.location,ne);break;case 3:s.vertexAttrib3fv(X.location,ne);break;case 4:s.vertexAttrib4fv(X.location,ne);break;default:s.vertexAttrib1fv(X.location,ne)}}}}v()}function w(){N();for(let L in n){let U=n[L];for(let V in U){let I=U[V];for(let H in I){let $=I[H];for(let z in $)h($[z].object),delete $[z];delete I[H]}}delete n[L]}}function E(L){if(n[L.id]===void 0)return;let U=n[L.id];for(let V in U){let I=U[V];for(let H in I){let $=I[H];for(let z in $)h($[z].object),delete $[z];delete I[H]}}delete n[L.id]}function g(L){for(let U in n){let V=n[U];for(let I in V){let H=V[I];if(H[L.id]===void 0)continue;let $=H[L.id];for(let z in $)h($[z].object),delete $[z];delete H[L.id]}}}function M(L){for(let U in n){let V=n[U],I=L.isInstancedMesh===!0?L.id:0,H=V[I];if(H!==void 0){for(let $ in H){let z=H[$];for(let re in z)h(z[re].object),delete z[re];delete H[$]}delete V[I],Object.keys(V).length===0&&delete n[U]}}}function N(){R(),a=!0,r!==i&&(r=i,l(r.object))}function R(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:o,reset:N,resetDefaultState:R,dispose:w,releaseStatesOfGeometry:E,releaseStatesOfObject:M,releaseStatesOfProgram:g,initAttributes:x,enableAttribute:p,disableUnusedAttributes:v}}function Cg(s,e,t){let n;function i(c){n=c}function r(c,l){s.drawArrays(n,c,l),t.update(l,n,1)}function a(c,l,h){h!==0&&(s.drawArraysInstanced(n,c,l,h),t.update(l,n,h))}function o(c,l,h){if(h===0)return;e.get(`WEBGL_multi_draw`).multiDrawArraysWEBGL(n,c,0,l,0,h);let u=0;for(let f=0;f<h;f++)u+=l[f];t.update(u,n,1)}this.setMode=i,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function Rg(s,e,t,n){let i;function r(){if(i!==void 0)return i;if(e.has(`EXT_texture_filter_anisotropic`)===!0){let g=e.get(`EXT_texture_filter_anisotropic`);i=s.getParameter(g.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function a(g){return!(g!==Bn&&n.convert(g)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(g){let M=g===Fn&&(e.has(`EXT_color_buffer_half_float`)||e.has(`EXT_color_buffer_float`));return!(g!==ln&&g!==Un&&!M&&n.convert(g)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE))}function c(g){if(g===`highp`){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return`highp`;g=`mediump`}return g===`mediump`&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?`mediump`:`lowp`}let l=t.precision!==void 0?t.precision:`highp`,h=c(l);h!==l&&(Ie(`WebGLRenderer:`,l,`not supported, using`,h,`instead.`),l=h);let d=t.reversedDepthBuffer===!0&&e.has(`EXT_clip_control`),u=t.logarithmicDepthBuffer===!0&&d===!1;t.reversedDepthBuffer===!0&&d===!1&&Ie(`WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.`),t.logarithmicDepthBuffer===!0&&d===!0&&Ie(`WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.`);let f=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),_=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=s.getParameter(s.MAX_TEXTURE_SIZE),p=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),m=s.getParameter(s.MAX_VERTEX_ATTRIBS),v=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),T=s.getParameter(s.MAX_VARYING_VECTORS),S=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),w=s.getParameter(s.MAX_SAMPLES),E=s.getParameter(s.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:u,reversedDepthBuffer:d,maxTextures:f,maxVertexTextures:_,maxTextureSize:x,maxCubemapSize:p,maxAttributes:m,maxVertexUniforms:v,maxVaryings:T,maxFragmentUniforms:S,maxSamples:w,samples:E}}function Pg(s){let e=this,t=null,n=0,i=!1,r=!1,a=new Qt,o=new Be,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){let f=d.length!==0||u||n!==0||i;return i=u,n=d.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,u){t=h(d,u,0)},this.setState=function(d,u,f){let _=d.clippingPlanes,x=d.clipIntersection,p=d.clipShadows,m=s.get(d);if(!i||_===null||_.length===0||r&&!p)r?h(null):l();else{let v=r?0:n,T=v*4,S=m.clippingState||null;c.value=S,S=h(_,u,T,f);for(let w=0;w!==T;++w)S[w]=t[w];m.clippingState=S,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=v}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(d,u,f,_){let x=d!==null?d.length:0,p=null;if(x!==0){if(p=c.value,_!==!0||p===null){let m=f+x*4,v=u.matrixWorldInverse;o.getNormalMatrix(v),(p===null||p.length<m)&&(p=new Float32Array(m));for(let T=0,S=f;T!==x;++T,S+=4)a.copy(d[T]).applyMatrix4(v,o),a.normal.toArray(p,S),p[S+3]=a.constant}c.value=p,c.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,p}}var Gr=class extends fn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new cr(i),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new ai(5,5,5),r=new Hn({name:`CubemapFromEquirect`,uniforms:Yi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:rn,blending:Vi});r.uniforms.tEquirect.value=t;let a=new kt(i,r),o=t.minFilter;return t.minFilter===li&&(t.minFilter=tn),new Is(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,i=!0){let r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,i);e.setRenderTarget(r)}};var qu=256;var Dg=3;var Ig=20;var md=256;var gd=16;var Lg=3;var Ng=new P;var Og=new Ce;var tl=class s{constructor(e){this._renderer=e,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new Is(1,10,null),this._boxMesh=new kt(new ai(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(e,t=0,n=.1,i=100,r={}){let{size:a=256,position:o=Ng}=r,c=this._renderer;this._setSize(a);let l=this._allocateTarget(),h=this._getSourceTarget(!0);t>0&&(h.texture.mipmapsAutoUpdate=!1);let d=c.autoClear,u=c.autoClearColor,f=c.autoClearDepth,_=c.autoClearStencil,x=e.background;c.autoClear=!0,c.autoClearColor=!0,c.autoClearDepth=!0,c.autoClearStencil=!0,x===null&&(e.background=c.getClearColor(Og));let p=new Is(n,i,h);return p.position.copy(o),p.update(c,e),c.autoClear=d,c.autoClearColor=u,c.autoClearDepth=f,c.autoClearStencil=_,e.background=x,t>0&&(h.texture.mipmapsAutoUpdate=!0,this._blur(l,t)),this._applyPMREM(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Zu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ju(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(e,t){return t>0?1-Math.sqrt(1-e/t):0}_setSize(e){this._cubeSize=Math.max(qu,wc(e))}_fromTexture(e,t){e.mapping===Xi||e.mapping===Os?this._setSize(e.image.length===0?qu:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4);let n=t||this._allocateTarget();return this._textureToCubemap(e),this._applyPMREM(n),n}_allocateTarget(){let e=this._cubeSize,t=Yu(e,!1,!1),n=Math.log2(e)-Dg;for(let i=0;i<=n;i++)t.texture.mipmaps.push({width:e>>i,height:e>>i});return t.texture.name=`PMREM`,t.texture.isPMREMTexture=!0,t}_getSourceTarget(e=!1){let t=this._cubeSize,n=this._sourceTarget;return(n===null||n.width!==t||e&&n.depthBuffer===!1)&&(n!==null&&n.dispose(),this._sourceTarget=Yu(t,!0,e)),this._sourceTarget}_compileMaterial(e){this._boxMesh.material=e,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(e,t,n){let i=this._boxMesh,r=this._cubeCamera;i.material=n,r.renderTarget=e,r.activeMipmapLevel=t;let a=e.width>>t;e.viewport.set(0,0,a,a),r.update(this._renderer,i),e.viewport.set(0,0,e.width,e.height)}_textureToCubemap(e){let t;e.mapping===Xi||e.mapping===Os?(this._cubemapMaterial===null&&(this._cubemapMaterial=Zu()),t=this._cubemapMaterial,t.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=ju()),t=this._equirectMaterial),t.uniforms.envMap.value=e,this._renderCube(this._getSourceTarget(),0,t)}_applyPMREM(e){this._ggxMaterial===null&&(this._ggxMaterial=Ug(),this._integrationMaterial=Fg());let t=this._cubeSize,n=e.texture.mipmaps.length-1,i=this._ggxMaterial.uniforms;i.envMap.value=this._sourceTarget.texture;let r=this._integrationMaterial.uniforms;r.envMap.value=this._sourceTarget.texture,r.sourceLod.value=Math.log2(t/gd);for(let a=0;a<=n;a++){let o=s.lodToRoughness(a,n);if(a>n-Lg)r.roughness.value=o,this._renderCube(e,a,this._integrationMaterial);else{let c=o>0?Math.log2(t)+.5*Math.log2(6/(md*Math.pow(o,4)))+.5:0;i.roughness.value=o,i.lodBias.value=c,this._renderCube(e,a,this._ggxMaterial)}}}_blur(e,t){this._blurMaterial===null&&(this._blurMaterial=Bg());let n=this._blurMaterial,i=n.uniforms,r=this._sourceTarget;i.sigma.value=Math.min(t,Math.PI)/Math.SQRT2,i.envMap.value=r.texture,this._renderCube(e,0,n),i.envMap.value=e.texture,this._renderCube(r,0,n)}};function Yu(s,e,t){return new Gr(s,{minFilter:li,generateMipmaps:e,type:Fn,colorSpace:er,depthBuffer:t})}function Vr(s,e,t){return new Hn({name:s,uniforms:e,vertexShader:Ze.cube_vert,fragmentShader:t,side:rn,blending:Vi,depthTest:!1,depthWrite:!1})}function Ug(){return Vr(`PMREMGGXConvolution`,{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${md}u

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float lodBias;

		#include <common>

		// Van der Corput radical inverse
		float radicalInverse_VdC( uint bits ) {

			bits = ( bits << 16u ) | ( bits >> 16u );
			bits = ( ( bits & 0x55555555u ) << 1u ) | ( ( bits & 0xAAAAAAAAu ) >> 1u );
			bits = ( ( bits & 0x33333333u ) << 2u ) | ( ( bits & 0xCCCCCCCCu ) >> 2u );
			bits = ( ( bits & 0x0F0F0F0Fu ) << 4u ) | ( ( bits & 0xF0F0F0F0u ) >> 4u );
			bits = ( ( bits & 0x00FF00FFu ) << 8u ) | ( ( bits & 0xFF00FF00u ) >> 8u );
			return float( bits ) * 2.3283064365386963e-10; // / 0x100000000

		}

		// Hammersley sequence
		vec2 hammersley( uint i, uint N ) {

			return vec2( float( i ) / float( N ), radicalInverse_VdC( i ) );

		}

		void main() {

			vec3 N = normalize( vWorldDirection );

			// For very low roughness, just sample the environment directly
			if ( roughness < 0.001 ) {

				gl_FragColor = vec4( textureLod( envMap, N, 0.0 ).rgb, 1.0 );
				return;

			}

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			// Tangent space basis for VNDF sampling
			vec3 up = abs( N.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, N ) );
			vec3 bitangent = cross( N, tangent );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			for ( uint i = 0u; i < GGX_SAMPLES; i ++ ) {

				vec2 Xi = hammersley( i, GGX_SAMPLES );

				// With V = N, sample the reflected direction directly.
				float invQ = 1.0 / ( 1.0 - Xi.x + alpha2 * Xi.x );
				float NdotL = ( 1.0 - Xi.x - alpha2 * Xi.x ) * invQ;

				if ( NdotL > 0.0 ) {

					float phi = 2.0 * PI * Xi.y;
					float sinTheta = 2.0 * alpha * sqrt( Xi.x * ( 1.0 - Xi.x ) ) * invQ;
					vec3 L = N * NdotL + ( tangent * cos( phi ) + bitangent * sin( phi ) ) * sinTheta;

					// Match the source mip to the sample's solid angle. The terms
					// independent of the sample are precomputed in lodBias.
					float d = alpha2 * invQ;
					float lod = max( log2( d ) + lodBias, 0.0 );

					// Weight by NdotL for the split-sum approximation
					prefilteredColor += textureLod( envMap, L, lod ).rgb * NdotL;
					totalWeight += NdotL;

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function Fg(){return Vr(`PMREMGGXIntegration`,{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:gd}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float sourceLod;
		uniform int sourceSize;

		void main() {

			vec3 N = normalize( vWorldDirection );

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			float texelSize = 2.0 / float( sourceSize );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			// Pair opposite texels: only the one in N's hemisphere contributes.
			for ( int face = 0; face < 3; face ++ ) {

				for ( int y = 0; y < sourceSize; y ++ ) {

					for ( int x = 0; x < sourceSize; x ++ ) {

						vec2 uv = ( vec2( x, y ) + 0.5 ) * texelSize - 1.0;
						vec3 texelDirection = face == 0 ? vec3( 1.0, uv ) : ( face == 1 ? vec3( uv.x, 1.0, uv.y ) : vec3( uv, 1.0 ) );

						float invDistance = inversesqrt( 1.0 + dot( uv, uv ) );
						float NdotL = dot( N, texelDirection );
						texelDirection *= NdotL < 0.0 ? - 1.0 : 1.0;
						NdotL = abs( NdotL ) * invDistance;

						// With V = N, NdotH squared is ( 1 + NdotL ) / 2. Common factors
						// in the GGX distribution and texel solid angle cancel when normalized.
						float d = 1.0 + alpha2 + ( alpha2 - 1.0 ) * NdotL;
						float weight = NdotL * invDistance * invDistance * invDistance / ( d * d );

						prefilteredColor += textureLod( envMap, texelDirection, sourceLod ).rgb * weight;
						totalWeight += weight;

					}

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function Bg(){return Vr(`PMREMSphericalGaussianBlur`,{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${Ig}
		#define GOLDEN_ANGLE 2.39996322973

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float sigma;

		#include <common>

		void main() {

			vec3 outputDirection = normalize( vWorldDirection );

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

				accumColor += weight * textureLod( envMap, sampleDirection, 0.0 ).rgb;
				accumWeight += weight;

			}

			gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

		}
	`)}function ju(){return Vr(`PMREMEquirectangularToCubemap`,{envMap:{value:null}},`

		varying vec3 vWorldDirection;

		uniform sampler2D envMap;

		#include <common>

		void main() {

			// Average four subpixel samples to preserve small, bright features.
			vec3 direction = normalize( vWorldDirection );
			vec3 dx = dFdx( direction ) * 0.25;
			vec3 dy = dFdy( direction ) * 0.25;

			vec3 color = textureLod( envMap, equirectUv( normalize( direction - dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction - dx + dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx + dy ) ), 0.0 ).rgb;
			gl_FragColor = vec4( color * 0.25, 1.0 );

		}
	`)}function Zu(){return Vr(`PMREMCubemapToCubemap`,{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function kg(s){let e=/* @__PURE__ */ new WeakMap,t=/* @__PURE__ */ new WeakMap,n=null;function i(u,f=!1){return u==null?null:f?a(u):r(u)}function r(u){if(u&&u.isTexture){let f=u.mapping;if(f===uo||f===fo)if(e.has(u)){let _=e.get(u).texture;return o(_,u.mapping)}else{let _=u.image;if(_&&_.height>0){let x=new Gr(_.height);return x.fromEquirectangularTexture(s,u),e.set(u,x),u.addEventListener(`dispose`,l),o(x.texture,u.mapping)}else return null}}return u}function a(u){if(u&&u.isTexture&&u.isPMREMTexture!==!0){let f=u.mapping,_=f===uo||f===fo,x=f===Xi||f===Os;if(_||x){let p=t.get(u),m=p!==void 0?p.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==m)return n===null&&(n=new tl(s)),p=_?n.fromEquirectangular(u,p):n.fromCubemap(u,p),p.texture.pmremVersion=u.pmremVersion,t.set(u,p),p.texture;if(p!==void 0)return p.texture;{let v=u.image;return _&&v&&v.height>0||x&&v&&c(v)?(n===null&&(n=new tl(s)),p=_?n.fromEquirectangular(u):n.fromCubemap(u),p.texture.pmremVersion=u.pmremVersion,t.set(u,p),u.addEventListener(`dispose`,h),p.texture):null}}}return u}function o(u,f){return f===uo?u.mapping=Xi:f===fo&&(u.mapping=Os),u}function c(u){let f=0,_=6;for(let x=0;x<_;x++)u[x]!==void 0&&f++;return f===_}function l(u){let f=u.target;f.removeEventListener(`dispose`,l);let _=e.get(f);_!==void 0&&(e.delete(f),_.dispose())}function h(u){let f=u.target;f.removeEventListener(`dispose`,h);let _=t.get(f);_!==void 0&&(t.delete(f),_.dispose())}function d(){e=/* @__PURE__ */ new WeakMap,t=/* @__PURE__ */ new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:d}}function zg(s){let e={};function t(n){if(e[n]!==void 0)return e[n];let i=s.getExtension(n);return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t(`EXT_color_buffer_float`),t(`WEBGL_clip_cull_distance`),t(`OES_texture_float_linear`),t(`EXT_color_buffer_half_float`),t(`WEBGL_multisampled_render_to_texture`),t(`WEBGL_render_shared_exponent`)},get:function(n){let i=t(n);return i===null&&Ks(`WebGLRenderer: `+n+` extension not supported.`),i}}}function Hg(s,e,t,n){let i={},r=/* @__PURE__ */ new WeakMap,a=new FinalizationRegistry(_=>delete i[_]);function o(_){c(_.target)}function c(_){_.index!==null&&e.remove(_.index);for(let p in _.attributes)e.remove(_.attributes[p]);_.removeEventListener(`dispose`,o),delete i[_.id],a.unregister(_);let x=r.get(_);x&&(e.remove(x),r.delete(_)),n.releaseStatesOfGeometry(_),_.isInstancedBufferGeometry===!0&&delete _._maxInstanceCount,t.memory.geometries--}function l(_,x){return i[x.id]!==void 0||(x.addEventListener(`dispose`,o),i[x.id]=new WeakRef(x),a.register(x,x.id,x),t.memory.geometries++),x}function h(_){let x=_.attributes;for(let p in x)e.update(x[p],s.ARRAY_BUFFER)}function d(_){let x=_.index,p=_.attributes.position,m=0;if(p===void 0)return;let v=x!==null?x.array.length:p.array.length/3-1,S=new(p.count>=65535?ar:rr)(Math.ceil(v/3)*6,1),w=S.array;if(x!==null){let g=x.array;m=x.version;for(let M=0,N=0;M<v;M+=3){let R=g[M+0],L=g[M+1],U=g[M+2];w[N++]=R,w[N++]=L,w[N++]=L,w[N++]=U,w[N++]=U,w[N++]=R}}else{m=p.version;for(let g=0,M=0;g<v;g+=3){let N=g+0,R=g+1,L=g+2;w[M++]=N,w[M++]=R,w[M++]=R,w[M++]=L,w[M++]=L,w[M++]=N}}S.version=m;let E=r.get(_);E&&e.remove(E),r.set(_,S)}function u(_){let x=r.get(_);if(x){let p=_.index;p!==null&&x.version<p.version&&d(_)}else d(_);return r.get(_)}function f(){for(let _ in i){let x=i[_].deref();x!==void 0&&c(x)}}return{get:l,update:h,getWireframeAttribute:u,dispose:f}}function Gg(s,e,t){let n;function i(d){n=d}let r,a;function o(d){r=d.type,a=d.bytesPerElement}function c(d,u){s.drawElements(n,u,r,d*a),t.update(u,n,1)}function l(d,u,f){f!==0&&(s.drawElementsInstanced(n,u,r,d*a,f),t.update(u,n,f))}function h(d,u,f){if(f===0)return;e.get(`WEBGL_multi_draw`).multiDrawElementsWEBGL(n,u,0,r,d,0,f);let x=0;for(let p=0;p<f;p++)x+=u[p];t.update(x,n,1)}this.setMode=i,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=h}function Vg(s){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case s.TRIANGLES:t.triangles+=o*(r/3);break;case s.LINES:t.lines+=o*(r/2);break;case s.LINE_STRIP:t.lines+=o*(r-1);break;case s.LINE_LOOP:t.lines+=o*r;break;case s.POINTS:t.points+=o*r;break;default:Fe(`WebGLInfo: Unknown draw mode:`,a)}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function Wg(s,e,t){let n=/* @__PURE__ */ new WeakMap,i=new yt;function r(a,o,c){let l=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=h!==void 0?h.length:0,u=n.get(o);if(u===void 0||u.count!==d){let R=function(){M.dispose(),n.delete(o),o.removeEventListener(`dispose`,R)};u!==void 0&&u.texture.dispose();let _=o.morphAttributes.position!==void 0,x=o.morphAttributes.normal!==void 0,p=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],v=o.morphAttributes.normal||[],T=o.morphAttributes.color||[],S=0;_===!0&&(S=1),x===!0&&(S=2),p===!0&&(S=3);let w=o.attributes.position.count*S,E=1;w>e.maxTextureSize&&(E=Math.ceil(w/e.maxTextureSize),w=e.maxTextureSize);let g=new Float32Array(w*E*4*d),M=new ir(g,w,E,d);M.type=Un,M.needsUpdate=!0;let N=S*4;for(let L=0;L<d;L++){let U=m[L],V=v[L],I=T[L],H=w*E*4*L;for(let $=0;$<U.count;$++){let z=$*N;_===!0&&(i.fromBufferAttribute(U,$),g[H+z+0]=i.x,g[H+z+1]=i.y,g[H+z+2]=i.z,g[H+z+3]=0),x===!0&&(i.fromBufferAttribute(V,$),g[H+z+4]=i.x,g[H+z+5]=i.y,g[H+z+6]=i.z,g[H+z+7]=0),p===!0&&(i.fromBufferAttribute(I,$),g[H+z+8]=i.x,g[H+z+9]=i.y,g[H+z+10]=i.z,g[H+z+11]=I.itemSize===4?i.w:1)}}u={count:d,texture:M,size:new Se(w,E)},n.set(o,u),o.addEventListener(`dispose`,R)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(s,`morphTexture`,a.morphTexture,t);else{let _=0;for(let p=0;p<l.length;p++)_+=l[p];let x=o.morphTargetsRelative?1:1-_;c.getUniforms().setValue(s,`morphTargetBaseInfluence`,x),c.getUniforms().setValue(s,`morphTargetInfluences`,l)}c.getUniforms().setValue(s,`morphTargetsTexture`,u.texture,t),c.getUniforms().setValue(s,`morphTargetsTextureSize`,u.size)}return{update:r}}function Xg(s,e,t,n,i){let r=/* @__PURE__ */ new WeakMap;function a(l){let h=i.render.frame,d=l.geometry,u=e.get(l,d);if(r.get(u)!==h&&(e.update(u),r.set(u,h)),l.isInstancedMesh&&(l.hasEventListener(`dispose`,c)===!1&&l.addEventListener(`dispose`,c),r.get(l)!==h&&(t.update(l.instanceMatrix,s.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,s.ARRAY_BUFFER),r.set(l,h))),l.isSkinnedMesh){let f=l.skeleton;r.get(f)!==h&&(f.update(),r.set(f,h))}return u}function o(){r=/* @__PURE__ */ new WeakMap}function c(l){let h=l.target;h.removeEventListener(`dispose`,c),n.releaseStatesOfObject(h),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:a,dispose:o}}var qg={[rc]:`LINEAR_TONE_MAPPING`,[ac]:`REINHARD_TONE_MAPPING`,[oc]:`CINEON_TONE_MAPPING`,[lc]:`ACES_FILMIC_TONE_MAPPING`,[hc]:`AGX_TONE_MAPPING`,[uc]:`NEUTRAL_TONE_MAPPING`,[cc]:`CUSTOM_TONE_MAPPING`};function Yg(s,e,t,n,i,r){let a=new fn(e,t,{type:s,depthBuffer:i,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,c=null,l=null,h=new nt;h.setAttribute(`position`,new Xe([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute(`uv`,new Xe([0,2,0,0,2,0],2));let d=new Ka({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),u=new kt(h,d),f=new Sr(-1,1,1,-1,0,1),_=null,x=null,p=!1,m,v=null,T=[],S=!1;this.setSize=function(w,E){a.setSize(w,E),o!==null&&o.setSize(w,E),c!==null&&c.setSize(w,E);for(let g=0;g<T.length;g++){let M=T[g];M.setSize&&M.setSize(w,E)}},this.setEffects=function(w){T=w,S=T.length>0&&T[0].isRenderPass===!0;let E=a.width,g=a.height;T.length>0&&o===null&&(o=new fn(E,g,{type:Fn,depthBuffer:!1,stencilBuffer:!1}),c=new fn(E,g,{type:Fn,depthBuffer:!1,stencilBuffer:!1}));let M=i===!0&&T.some(N=>N.needsDepthTexture===!0);M!==(a.depthTexture!==null)&&(M===!0&&l===null&&(l=new ri(E,g),r===!0&&(l.format=ci,l.type=qi)),a.dispose(),a.depthTexture=M?l:null,a.resolveDepthBuffer=M,a.storeMultisampledDepthBuffer=M);for(let N=0;N<T.length;N++){let R=T[N];R.setSize&&R.setSize(E,g),M&&R.needsDepthTexture===!0&&R.setDepthTexture&&R.setDepthTexture(l)}},this.begin=function(w,E){if(p||w.toneMapping===Xn&&T.length===0)return!1;if(v=E,E!==null){let g=E.width,M=E.height;(a.width!==g||a.height!==M)&&this.setSize(g,M)}return S===!1&&w.setRenderTarget(a),m=w.toneMapping,w.toneMapping=Xn,!0},this.hasRenderPass=function(){return S},this.end=function(w,E){w.toneMapping=m,p=!0;let g=a,M=o;for(let N=0;N<T.length;N++){let R=T[N];R.enabled!==!1&&(R.render(w,M,g,E),R.needsSwap!==!1&&(g=M,M=M===o?c:o))}if(_!==w.outputColorSpace||x!==w.toneMapping){_=w.outputColorSpace,x=w.toneMapping,d.defines={},Ye.getTransfer(_)===ot&&(d.defines.SRGB_TRANSFER=``);let N=qg[x];N&&(d.defines[N]=``),d.needsUpdate=!0}d.uniforms.tDiffuse.value=g.texture,w.setRenderTarget(v),w.render(u,f),v=null,p=!1},this.isCompositing=function(){return p},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),c!==null&&c.dispose(),h.dispose(),d.dispose()}}var _d=new jt;var xd=new ri(1,1);var yd=new hr(1);var vd=new ir;var bd=new Va;var Sd=new cr;var Ku=[];var Ju=[];var $u=/* @__PURE__ */ new Float32Array(16);var Qu=/* @__PURE__ */ new Float32Array(9);var ed=/* @__PURE__ */ new Float32Array(4);function Bs(s,e,t){let n=s[0];if(n<=0||n>0)return s;let i=e*t,r=Ku[i];if(r===void 0&&(r=new Float32Array(i),Ku[i]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,s[a].toArray(r,o)}return r}function Dt(s,e){if(s.length!==e.length)return!1;for(let t=0,n=s.length;t<n;t++)if(s[t]!==e[t])return!1;return!0}function It(s,e){for(let t=0,n=e.length;t<n;t++)s[t]=e[t]}function il(s,e){let t=Ju[e];t===void 0&&(t=new Int32Array(e),Ju[e]=t);for(let n=0;n!==e;++n)t[n]=s.allocateTextureUnit();return t}function jg(s,e){let t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function Zg(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Dt(t,e))return;s.uniform2fv(this.addr,e),It(t,e)}}function Kg(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Dt(t,e))return;s.uniform3fv(this.addr,e),It(t,e)}}function Jg(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Dt(t,e))return;s.uniform4fv(this.addr,e),It(t,e)}}function $g(s,e){let t=this.cache,n=e.elements;if(n===void 0){if(Dt(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),It(t,e)}else{if(Dt(t,n))return;ed.set(n),s.uniformMatrix2fv(this.addr,!1,ed),It(t,n)}}function Qg(s,e){let t=this.cache,n=e.elements;if(n===void 0){if(Dt(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),It(t,e)}else{if(Dt(t,n))return;Qu.set(n),s.uniformMatrix3fv(this.addr,!1,Qu),It(t,n)}}function e0(s,e){let t=this.cache,n=e.elements;if(n===void 0){if(Dt(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),It(t,e)}else{if(Dt(t,n))return;$u.set(n),s.uniformMatrix4fv(this.addr,!1,$u),It(t,n)}}function t0(s,e){let t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function n0(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Dt(t,e))return;s.uniform2iv(this.addr,e),It(t,e)}}function i0(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Dt(t,e))return;s.uniform3iv(this.addr,e),It(t,e)}}function s0(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Dt(t,e))return;s.uniform4iv(this.addr,e),It(t,e)}}function r0(s,e){let t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function a0(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Dt(t,e))return;s.uniform2uiv(this.addr,e),It(t,e)}}function o0(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Dt(t,e))return;s.uniform3uiv(this.addr,e),It(t,e)}}function l0(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Dt(t,e))return;s.uniform4uiv(this.addr,e),It(t,e)}}function sl(s){return s.version===0&&(s.compareFunction=Sc,s.needsUpdate=!0),s}function c0(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_2D_SHADOW?r=sl(xd):r=_d,t.setTexture2D(e||r,i)}function h0(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||bd,i)}function u0(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_CUBE_SHADOW?r=sl(yd):r=Sd,t.setTextureCube(e||r,i)}function d0(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||vd,i)}function f0(s){switch(s){case 5126:return jg;case 35664:return Zg;case 35665:return Kg;case 35666:return Jg;case 35674:return $g;case 35675:return Qg;case 35676:return e0;case 5124:case 35670:return t0;case 35667:case 35671:return n0;case 35668:case 35672:return i0;case 35669:case 35673:return s0;case 5125:return r0;case 36294:return a0;case 36295:return o0;case 36296:return l0;case 35678:case 36198:case 36298:case 36306:case 35682:return c0;case 35679:case 36299:case 36307:return h0;case 35680:case 36300:case 36308:case 36293:return u0;case 36289:case 36303:case 36311:case 36292:return d0}}function p0(s,e){s.uniform1fv(this.addr,e)}function m0(s,e){let t=Bs(e,this.size,2);s.uniform2fv(this.addr,t)}function g0(s,e){let t=Bs(e,this.size,3);s.uniform3fv(this.addr,t)}function _0(s,e){let t=Bs(e,this.size,4);s.uniform4fv(this.addr,t)}function x0(s,e){let t=Bs(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function y0(s,e){let t=Bs(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function v0(s,e){let t=Bs(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function b0(s,e){s.uniform1iv(this.addr,e)}function S0(s,e){s.uniform2iv(this.addr,e)}function M0(s,e){s.uniform3iv(this.addr,e)}function E0(s,e){s.uniform4iv(this.addr,e)}function T0(s,e){s.uniform1uiv(this.addr,e)}function w0(s,e){s.uniform2uiv(this.addr,e)}function A0(s,e){s.uniform3uiv(this.addr,e)}function C0(s,e){s.uniform4uiv(this.addr,e)}function R0(s,e,t){let n=this.cache,i=e.length,r=il(t,i);Dt(n,r)||(s.uniform1iv(this.addr,r),It(n,r));let a;this.type===s.SAMPLER_2D_SHADOW?a=sl(xd):a=_d;for(let o=0;o!==i;++o)t.setTexture2D(e[o]||a,r[o])}function P0(s,e,t){let n=this.cache,i=e.length,r=il(t,i);Dt(n,r)||(s.uniform1iv(this.addr,r),It(n,r));for(let a=0;a!==i;++a)t.setTexture3D(e[a]||bd,r[a])}function D0(s,e,t){let n=this.cache,i=e.length,r=il(t,i);Dt(n,r)||(s.uniform1iv(this.addr,r),It(n,r));let a;this.type===s.SAMPLER_CUBE_SHADOW?a=sl(yd):a=Sd;for(let o=0;o!==i;++o)t.setTextureCube(e[o]||a,r[o])}function I0(s,e,t){let n=this.cache,i=e.length,r=il(t,i);Dt(n,r)||(s.uniform1iv(this.addr,r),It(n,r));for(let a=0;a!==i;++a)t.setTexture2DArray(e[a]||vd,r[a])}function L0(s){switch(s){case 5126:return p0;case 35664:return m0;case 35665:return g0;case 35666:return _0;case 35674:return x0;case 35675:return y0;case 35676:return v0;case 5124:case 35670:return b0;case 35667:case 35671:return S0;case 35668:case 35672:return M0;case 35669:case 35673:return E0;case 5125:return T0;case 36294:return w0;case 36295:return A0;case 36296:return C0;case 35678:case 36198:case 36298:case 36306:case 35682:return R0;case 35679:case 36299:case 36307:return P0;case 35680:case 36300:case 36308:case 36293:return D0;case 36289:case 36303:case 36311:case 36292:return I0}}var Uc=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=f0(t.type)}};var Fc=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=L0(t.type)}};var Bc=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let i=this.seq;for(let r=0,a=i.length;r!==a;++r){let o=i[r];o.setValue(e,t[o.id],n)}}};var Nc=/(\w+)(\])?(\[|\.)?/g;function td(s,e){s.seq.push(e),s.map[e.id]=e}function N0(s,e,t){let n=s.name,i=n.length;for(Nc.lastIndex=0;;){let r=Nc.exec(n),a=Nc.lastIndex,o=r[1],c=r[2]===`]`,l=r[3];if(c&&(o=o|0),l===void 0||l===`[`&&a+2===i){td(t,l===void 0?new Uc(o,s,e):new Fc(o,s,e));break}else{let d=t.map[o];d===void 0&&(d=new Bc(o),td(t,d)),t=d}}}var Fs=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){let o=e.getActiveUniform(t,a);N0(o,e.getUniformLocation(t,o.name),this)}let i=[],r=[];for(let a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?i.push(a):r.push(a);i.length>0&&(this.seq=i.concat(r))}setValue(e,t,n,i){let r=this.map[t];r!==void 0&&r.setValue(e,n,i)}setOptional(e,t,n){let i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let r=0,a=t.length;r!==a;++r){let o=t[r],c=n[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,i)}}static seqWithValue(e,t){let n=[];for(let i=0,r=e.length;i!==r;++i){let a=e[i];a.id in t&&n.push(a)}return n}};function nd(s,e,t){let n=s.createShader(e);return s.shaderSource(n,t),s.compileShader(n),n}var O0=37297;var U0=0;function F0(s,e){let t=s.split(`
`),n=[],i=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=i;a<r;a++){let o=a+1;n.push(`${o===e?`>`:` `} ${o}: ${t[a]}`)}return n.join(`
`)}var id=new Be;function B0(s){Ye._getMatrix(id,Ye.workingColorSpace,s);let e=`mat3( ${id.elements.map(t=>t.toFixed(4))} )`;switch(Ye.getTransfer(s)){case tr:return[e,`LinearTransferOETF`];case ot:return[e,`sRGBTransferOETF`];default:return Ie(`WebGLProgram: Unsupported color space: `,s),[e,`LinearTransferOETF`]}}function sd(s,e,t){let n=s.getShaderParameter(e,s.COMPILE_STATUS),r=(s.getShaderInfoLog(e)||``).trim();if(n&&r===``)return``;let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+F0(s.getShaderSource(e),o)}else return r}function k0(s,e){let t=B0(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${t[1]}( vec4( ${t[0]} * value.rgb, value.a ) );`,`}`].join(`
`)}var z0={[rc]:`Linear`,[ac]:`Reinhard`,[oc]:`Cineon`,[lc]:`ACESFilmic`,[hc]:`AgX`,[uc]:`Neutral`,[cc]:`Custom`};function H0(s,e){let t=z0[e];return t===void 0?(Ie(`WebGLProgram: Unsupported toneMapping:`,e),`vec3 `+s+`( vec3 color ) { return LinearToneMapping( color ); }`):`vec3 `+s+`( vec3 color ) { return `+t+`ToneMapping( color ); }`}var el=new P;function G0(){Ye.getLuminanceCoefficients(el);return[`float luminance( const in vec3 rgb ) {`,`	const vec3 weights = vec3( ${el.x.toFixed(4)}, ${el.y.toFixed(4)}, ${el.z.toFixed(4)} );`,`	return dot( weights, rgb );`,`}`].join(`
`)}function V0(s){return[s.extensionClipCullDistance?`#extension GL_ANGLE_clip_cull_distance : require`:``,s.extensionMultiDraw?`#extension GL_ANGLE_multi_draw : require`:``].filter(Hr).join(`
`)}function W0(s){let e=[];for(let t in s){let n=s[t];n!==!1&&e.push(`#define `+t+` `+n)}return e.join(`
`)}function X0(s,e){let t={},n=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){let r=s.getActiveAttrib(e,i),a=r.name,o=1;r.type===s.FLOAT_MAT2&&(o=2),r.type===s.FLOAT_MAT3&&(o=3),r.type===s.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:s.getAttribLocation(e,a),locationSize:o}}return t}function Hr(s){return s!==``}function rd(s,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,e.numLightProbeGrids)}function ad(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var q0=/^[ \t]*#include +<([\w\d./]+)>/gm;function kc(s){return s.replace(q0,Y0)}function Y0(s,e){let t=Ze[e];if(t===void 0)throw new Error(`THREE.WebGLProgram: Can not resolve #include <`+e+`>`);return kc(t)}var j0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function od(s){return s.replace(j0,Z0)}function Z0(s,e,t,n){let i=``;for(let r=parseInt(e);r<parseInt(t);r++)i+=n.replace(/\[\s*i\s*\]/g,`[ `+r+` ]`).replace(/UNROLLED_LOOP_INDEX/g,r);return i}function ld(s){let e=`precision ${s.precision} float;
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
#define LOW_PRECISION`),e}var K0={[Dr]:`SHADOWMAP_TYPE_PCF`,[Ls]:`SHADOWMAP_TYPE_VSM`};function J0(s){return K0[s.shadowMapType]||`SHADOWMAP_TYPE_BASIC`}var $0={[Os]:`ENVMAP_MODE_REFRACTION`};function Q0(s){return s.envMap===!1?`ENVMAP_MODE_REFLECTION`:$0[s.envMapMode]||`ENVMAP_MODE_REFLECTION`}var e_={[ho]:`ENVMAP_BLENDING_MULTIPLY`,[Au]:`ENVMAP_BLENDING_MIX`,[Cu]:`ENVMAP_BLENDING_ADD`};function t_(s){return s.envMap===!1?`ENVMAP_BLENDING_NONE`:e_[s.combine]||`ENVMAP_BLENDING_NONE`}function n_(s,e,t,n){let i=s.getContext(),r=t.defines,a=t.vertexShader,o=t.fragmentShader,c=J0(t),l=t.envMapPMREM===!0?`ENVMAP_TYPE_PMREM`:`ENVMAP_TYPE_CUBE`,h=Q0(t),d=t_(t),u=V0(t),f=W0(r),_=i.createProgram(),x,p,m=t.glslVersion?`#version `+t.glslVersion+`
`:``;t.isRawShaderMaterial?(x=[`#define SHADER_TYPE `+t.shaderType,`#define SHADER_NAME `+t.shaderName,f].filter(Hr).join(`
`),x.length>0&&(x+=`
`),p=[`#define SHADER_TYPE `+t.shaderType,`#define SHADER_NAME `+t.shaderName,f].filter(Hr).join(`
`),p.length>0&&(p+=`
`)):(x=[ld(t),`#define SHADER_TYPE `+t.shaderType,`#define SHADER_NAME `+t.shaderName,f,t.extensionClipCullDistance?`#define USE_CLIP_DISTANCE`:``,t.batching?`#define USE_BATCHING`:``,t.batchingColor?`#define USE_BATCHING_COLOR`:``,t.instancing?`#define USE_INSTANCING`:``,t.instancingColor?`#define USE_INSTANCING_COLOR`:``,t.instancingMorph?`#define USE_INSTANCING_MORPH`:``,t.useFog&&t.fog?`#define USE_FOG`:``,t.useFog&&t.fogExp2?`#define FOG_EXP2`:``,t.map?`#define USE_MAP`:``,t.envMap?`#define USE_ENVMAP`:``,t.envMap?`#define `+h:``,t.lightMap?`#define USE_LIGHTMAP`:``,t.aoMap?`#define USE_AOMAP`:``,t.bumpMap?`#define USE_BUMPMAP`:``,t.normalMap?`#define USE_NORMALMAP`:``,t.normalMapObjectSpace?`#define USE_NORMALMAP_OBJECTSPACE`:``,t.normalMapTangentSpace?`#define USE_NORMALMAP_TANGENTSPACE`:``,t.displacementMap?`#define USE_DISPLACEMENTMAP`:``,t.emissiveMap?`#define USE_EMISSIVEMAP`:``,t.anisotropy?`#define USE_ANISOTROPY`:``,t.anisotropyMap?`#define USE_ANISOTROPYMAP`:``,t.clearcoatMap?`#define USE_CLEARCOATMAP`:``,t.clearcoatRoughnessMap?`#define USE_CLEARCOAT_ROUGHNESSMAP`:``,t.clearcoatNormalMap?`#define USE_CLEARCOAT_NORMALMAP`:``,t.diffuseRoughnessMap?`#define USE_DIFFUSE_ROUGHNESSMAP`:``,t.iridescenceMap?`#define USE_IRIDESCENCEMAP`:``,t.iridescenceThicknessMap?`#define USE_IRIDESCENCE_THICKNESSMAP`:``,t.specularMap?`#define USE_SPECULARMAP`:``,t.specularColorMap?`#define USE_SPECULAR_COLORMAP`:``,t.specularIntensityMap?`#define USE_SPECULAR_INTENSITYMAP`:``,t.roughnessMap?`#define USE_ROUGHNESSMAP`:``,t.metalnessMap?`#define USE_METALNESSMAP`:``,t.alphaMap?`#define USE_ALPHAMAP`:``,t.alphaHash?`#define USE_ALPHAHASH`:``,t.transmission?`#define USE_TRANSMISSION`:``,t.transmissionMap?`#define USE_TRANSMISSIONMAP`:``,t.thicknessMap?`#define USE_THICKNESSMAP`:``,t.sheenColorMap?`#define USE_SHEEN_COLORMAP`:``,t.sheenRoughnessMap?`#define USE_SHEEN_ROUGHNESSMAP`:``,t.mapUv?`#define MAP_UV `+t.mapUv:``,t.alphaMapUv?`#define ALPHAMAP_UV `+t.alphaMapUv:``,t.lightMapUv?`#define LIGHTMAP_UV `+t.lightMapUv:``,t.aoMapUv?`#define AOMAP_UV `+t.aoMapUv:``,t.emissiveMapUv?`#define EMISSIVEMAP_UV `+t.emissiveMapUv:``,t.bumpMapUv?`#define BUMPMAP_UV `+t.bumpMapUv:``,t.normalMapUv?`#define NORMALMAP_UV `+t.normalMapUv:``,t.displacementMapUv?`#define DISPLACEMENTMAP_UV `+t.displacementMapUv:``,t.metalnessMapUv?`#define METALNESSMAP_UV `+t.metalnessMapUv:``,t.roughnessMapUv?`#define ROUGHNESSMAP_UV `+t.roughnessMapUv:``,t.anisotropyMapUv?`#define ANISOTROPYMAP_UV `+t.anisotropyMapUv:``,t.clearcoatMapUv?`#define CLEARCOATMAP_UV `+t.clearcoatMapUv:``,t.clearcoatNormalMapUv?`#define CLEARCOAT_NORMALMAP_UV `+t.clearcoatNormalMapUv:``,t.clearcoatRoughnessMapUv?`#define CLEARCOAT_ROUGHNESSMAP_UV `+t.clearcoatRoughnessMapUv:``,t.diffuseRoughnessMapUv?`#define DIFFUSE_ROUGHNESSMAP_UV `+t.diffuseRoughnessMapUv:``,t.iridescenceMapUv?`#define IRIDESCENCEMAP_UV `+t.iridescenceMapUv:``,t.iridescenceThicknessMapUv?`#define IRIDESCENCE_THICKNESSMAP_UV `+t.iridescenceThicknessMapUv:``,t.sheenColorMapUv?`#define SHEEN_COLORMAP_UV `+t.sheenColorMapUv:``,t.sheenRoughnessMapUv?`#define SHEEN_ROUGHNESSMAP_UV `+t.sheenRoughnessMapUv:``,t.specularMapUv?`#define SPECULARMAP_UV `+t.specularMapUv:``,t.specularColorMapUv?`#define SPECULAR_COLORMAP_UV `+t.specularColorMapUv:``,t.specularIntensityMapUv?`#define SPECULAR_INTENSITYMAP_UV `+t.specularIntensityMapUv:``,t.transmissionMapUv?`#define TRANSMISSIONMAP_UV `+t.transmissionMapUv:``,t.thicknessMapUv?`#define THICKNESSMAP_UV `+t.thicknessMapUv:``,t.vertexTangents&&t.flatShading===!1?`#define USE_TANGENT`:``,t.vertexNormals?`#define HAS_NORMAL`:``,t.vertexColors?`#define USE_COLOR`:``,t.vertexAlphas?`#define USE_COLOR_ALPHA`:``,t.vertexUv1s?`#define USE_UV1`:``,t.vertexUv2s?`#define USE_UV2`:``,t.vertexUv3s?`#define USE_UV3`:``,t.pointsUvs?`#define USE_POINTS_UV`:``,t.flatShading?`#define FLAT_SHADED`:``,t.skinning?`#define USE_SKINNING`:``,t.morphTargets?`#define USE_MORPHTARGETS`:``,t.morphNormals&&t.flatShading===!1?`#define USE_MORPHNORMALS`:``,t.morphColors?`#define USE_MORPHCOLORS`:``,t.morphTargetsCount>0?`#define MORPHTARGETS_TEXTURE_STRIDE `+t.morphTextureStride:``,t.morphTargetsCount>0?`#define MORPHTARGETS_COUNT `+t.morphTargetsCount:``,t.doubleSided?`#define DOUBLE_SIDED`:``,t.flipSided?`#define FLIP_SIDED`:``,t.shadowMapEnabled?`#define USE_SHADOWMAP`:``,t.shadowMapEnabled?`#define `+c:``,t.sizeAttenuation?`#define USE_SIZEATTENUATION`:``,t.numLightProbes>0?`#define USE_LIGHT_PROBES`:``,t.logarithmicDepthBuffer?`#define USE_LOGARITHMIC_DEPTH_BUFFER`:``,t.reversedDepthBuffer?`#define USE_REVERSED_DEPTH_BUFFER`:``,`uniform mat4 modelMatrix;`,`uniform mat4 modelViewMatrix;`,`uniform mat4 projectionMatrix;`,`uniform mat4 viewMatrix;`,`uniform mat3 normalMatrix;`,`uniform vec3 cameraPosition;`,`uniform bool isOrthographic;`,`#ifdef USE_INSTANCING`,`	attribute mat4 instanceMatrix;`,`#endif`,`#ifdef USE_INSTANCING_COLOR`,`	attribute vec3 instanceColor;`,`#endif`,`#ifdef USE_INSTANCING_MORPH`,`	uniform sampler2D morphTexture;`,`#endif`,`attribute vec3 position;`,`attribute vec3 normal;`,`attribute vec2 uv;`,`#ifdef USE_UV1`,`	attribute vec2 uv1;`,`#endif`,`#ifdef USE_UV2`,`	attribute vec2 uv2;`,`#endif`,`#ifdef USE_UV3`,`	attribute vec2 uv3;`,`#endif`,`#ifdef USE_TANGENT`,`	attribute vec4 tangent;`,`#endif`,`#if defined( USE_COLOR_ALPHA )`,`	attribute vec4 color;`,`#elif defined( USE_COLOR )`,`	attribute vec3 color;`,`#endif`,`#ifdef USE_SKINNING`,`	attribute vec4 skinIndex;`,`	attribute vec4 skinWeight;`,`#endif`,`
`].filter(Hr).join(`
`),p=[ld(t),`#define SHADER_TYPE `+t.shaderType,`#define SHADER_NAME `+t.shaderName,f,t.useFog&&t.fog?`#define USE_FOG`:``,t.useFog&&t.fogExp2?`#define FOG_EXP2`:``,t.alphaToCoverage?`#define ALPHA_TO_COVERAGE`:``,t.map?`#define USE_MAP`:``,t.matcap?`#define USE_MATCAP`:``,t.envMap?`#define USE_ENVMAP`:``,t.envMap?`#define `+l:``,t.envMap?`#define `+h:``,t.envMap?`#define `+d:``,t.envMapPMREM?`#define ENVMAP_MAX_LOD `+t.envMapMaxLod+`.0`:``,t.envMapPMREM?`#define ENVMAP_SIZE `+t.envMapSize+`.0`:``,t.lightMap?`#define USE_LIGHTMAP`:``,t.aoMap?`#define USE_AOMAP`:``,t.bumpMap?`#define USE_BUMPMAP`:``,t.normalMap?`#define USE_NORMALMAP`:``,t.normalMapObjectSpace?`#define USE_NORMALMAP_OBJECTSPACE`:``,t.normalMapTangentSpace?`#define USE_NORMALMAP_TANGENTSPACE`:``,t.packedNormalMap?`#define USE_PACKED_NORMALMAP`:``,t.emissiveMap?`#define USE_EMISSIVEMAP`:``,t.anisotropy?`#define USE_ANISOTROPY`:``,t.anisotropyMap?`#define USE_ANISOTROPYMAP`:``,t.clearcoat?`#define USE_CLEARCOAT`:``,t.clearcoatMap?`#define USE_CLEARCOATMAP`:``,t.clearcoatRoughnessMap?`#define USE_CLEARCOAT_ROUGHNESSMAP`:``,t.clearcoatNormalMap?`#define USE_CLEARCOAT_NORMALMAP`:``,t.diffuseRoughness?`#define USE_DIFFUSE_ROUGHNESS`:``,t.diffuseRoughnessMap?`#define USE_DIFFUSE_ROUGHNESSMAP`:``,t.dispersion?`#define USE_DISPERSION`:``,t.retroreflection?`#define USE_RETROREFLECTION`:``,t.iridescence?`#define USE_IRIDESCENCE`:``,t.iridescenceMap?`#define USE_IRIDESCENCEMAP`:``,t.iridescenceThicknessMap?`#define USE_IRIDESCENCE_THICKNESSMAP`:``,t.specularMap?`#define USE_SPECULARMAP`:``,t.specularColorMap?`#define USE_SPECULAR_COLORMAP`:``,t.specularIntensityMap?`#define USE_SPECULAR_INTENSITYMAP`:``,t.roughnessMap?`#define USE_ROUGHNESSMAP`:``,t.metalnessMap?`#define USE_METALNESSMAP`:``,t.alphaMap?`#define USE_ALPHAMAP`:``,t.alphaTest?`#define USE_ALPHATEST`:``,t.alphaHash?`#define USE_ALPHAHASH`:``,t.sheen?`#define USE_SHEEN`:``,t.sheenColorMap?`#define USE_SHEEN_COLORMAP`:``,t.sheenRoughnessMap?`#define USE_SHEEN_ROUGHNESSMAP`:``,t.transmission?`#define USE_TRANSMISSION`:``,t.transmissionMap?`#define USE_TRANSMISSIONMAP`:``,t.thicknessMap?`#define USE_THICKNESSMAP`:``,t.vertexTangents&&t.flatShading===!1?`#define USE_TANGENT`:``,t.vertexColors||t.instancingColor?`#define USE_COLOR`:``,t.vertexAlphas||t.batchingColor?`#define USE_COLOR_ALPHA`:``,t.vertexUv1s?`#define USE_UV1`:``,t.vertexUv2s?`#define USE_UV2`:``,t.vertexUv3s?`#define USE_UV3`:``,t.pointsUvs?`#define USE_POINTS_UV`:``,t.gradientMap?`#define USE_GRADIENTMAP`:``,t.flatShading?`#define FLAT_SHADED`:``,t.doubleSided?`#define DOUBLE_SIDED`:``,t.flipSided?`#define FLIP_SIDED`:``,t.shadowMapEnabled?`#define USE_SHADOWMAP`:``,t.shadowMapEnabled?`#define `+c:``,t.premultipliedAlpha?`#define PREMULTIPLIED_ALPHA`:``,t.numLightProbes>0?`#define USE_LIGHT_PROBES`:``,t.decodeVideoTexture?`#define DECODE_VIDEO_TEXTURE`:``,t.decodeVideoTextureEmissive?`#define DECODE_VIDEO_TEXTURE_EMISSIVE`:``,t.logarithmicDepthBuffer?`#define USE_LOGARITHMIC_DEPTH_BUFFER`:``,t.reversedDepthBuffer?`#define USE_REVERSED_DEPTH_BUFFER`:``,`uniform mat4 viewMatrix;`,`uniform vec3 cameraPosition;`,`uniform bool isOrthographic;`,t.toneMapping!==Xn?`#define TONE_MAPPING`:``,t.toneMapping!==Xn?Ze.tonemapping_pars_fragment:``,t.toneMapping!==Xn?H0(`toneMapping`,t.toneMapping):``,t.dithering?`#define DITHERING`:``,t.opaque?`#define OPAQUE`:``,Ze.colorspace_pars_fragment,k0(`linearToOutputTexel`,t.outputColorSpace),G0(),t.useDepthPacking?`#define DEPTH_PACKING `+t.depthPacking:``,`
`].filter(Hr).join(`
`)),a=kc(a),a=rd(a,t),a=ad(a,t),o=kc(o),o=rd(o,t),o=ad(o,t),a=od(a),o=od(o),t.isRawShaderMaterial!==!0&&(m=`#version 300 es
`,x=[u,`#define attribute in`,`#define varying out`,`#define texture2D texture`].join(`
`)+`
`+x,p=[`#define varying in`,t.glslVersion===Ec?``:`layout(location = 0) out highp vec4 pc_fragColor;`,t.glslVersion===Ec?``:`#define gl_FragColor pc_fragColor`,`#define gl_FragDepthEXT gl_FragDepth`,`#define texture2D texture`,`#define textureCube texture`,`#define texture2DProj textureProj`,`#define texture2DLodEXT textureLod`,`#define texture2DProjLodEXT textureProjLod`,`#define textureCubeLodEXT textureLod`,`#define texture2DGradEXT textureGrad`,`#define texture2DProjGradEXT textureProjGrad`,`#define textureCubeGradEXT textureGrad`].join(`
`)+`
`+p);let v=m+x+a,T=m+p+o,S=nd(i,i.VERTEX_SHADER,v),w=nd(i,i.FRAGMENT_SHADER,T);i.attachShader(_,S),i.attachShader(_,w),t.index0AttributeName!==void 0?i.bindAttribLocation(_,0,t.index0AttributeName):t.hasPositionAttribute===!0&&i.bindAttribLocation(_,0,`position`),i.linkProgram(_);function E(R){if(s.debug.checkShaderErrors){let L=i.getProgramInfoLog(_)||``,U=i.getShaderInfoLog(S)||``,V=i.getShaderInfoLog(w)||``,I=L.trim(),H=U.trim(),$=V.trim(),z=!0,re=!0;if(i.getProgramParameter(_,i.LINK_STATUS)===!1)if(z=!1,typeof s.debug.onShaderError==`function`)s.debug.onShaderError(i,_,S,w);else{let X=sd(i,S,`vertex`),ee=sd(i,w,`fragment`);Fe(`WebGLProgram: Shader Error `+i.getError()+` - VALIDATE_STATUS `+i.getProgramParameter(_,i.VALIDATE_STATUS)+`

Material Name: `+R.name+`
Material Type: `+R.type+`

Program Info Log: `+I+`
`+X+`
`+ee)}else I!==``?Ie(`WebGLProgram: Program Info Log:`,I):(H===``||$===``)&&(re=!1);re&&(R.diagnostics={runnable:z,programLog:I,vertexShader:{log:H,prefix:x},fragmentShader:{log:$,prefix:p}})}i.deleteShader(S),i.deleteShader(w),g=new Fs(i,_),M=X0(i,_)}let g;this.getUniforms=function(){return g===void 0&&E(this),g};let M;this.getAttributes=function(){return M===void 0&&E(this),M};let N=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return N===!1&&(N=i.getProgramParameter(_,O0)),N},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=U0++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=S,this.fragmentShader=w,this}var i_=0;var zc=class{constructor(){this.shaderCache=/* @__PURE__ */ new Map,this.materialCache=/* @__PURE__ */ new Map}update(e,t,n){let i=this._getShaderCacheForMaterial(e);return i.has(t)===!1&&(i.add(t),t.usedTimes++),i.has(n)===!1&&(i.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=/* @__PURE__ */ new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new Hc(e),t.set(e,n)),n}};var Hc=class{constructor(e){this.id=i_++,this.code=e,this.usedTimes=0}};function s_(s){return s===Ai||s===Fr||s===Br}function r_(s,e,t,n,i,r){let a=new bs,o=new zc,c=/* @__PURE__ */ new Set,l=[],h=/* @__PURE__ */ new Map,d=n.logarithmicDepthBuffer,u={MeshDepthMaterial:`depth`,MeshDistanceMaterial:`distance`,MeshNormalMaterial:`normal`,MeshBasicMaterial:`basic`,MeshLambertMaterial:`lambert`,MeshPhongMaterial:`phong`,MeshToonMaterial:`toon`,MeshStandardMaterial:`physical`,MeshPhysicalMaterial:`physical`,MeshMatcapMaterial:`matcap`,LineBasicMaterial:`basic`,LineDashedMaterial:`dashed`,PointsMaterial:`points`,ShadowMaterial:`shadow`,SpriteMaterial:`sprite`};function f(g){return c.add(g),g===0?`uv`:`uv${g}`}function _(g,M,N,R,L,U){let V=R.fog,I=L.geometry,H=g.isMeshStandardMaterial||g.isMeshLambertMaterial||g.isMeshPhongMaterial?R.environment:null,$=g.isMeshStandardMaterial||g.isMeshLambertMaterial&&!g.envMap||g.isMeshPhongMaterial&&!g.envMap,z=e.get(g.envMap||H,$),re=u[g.type],X=n.precision;g.precision!==null&&(X=n.getMaxPrecision(g.precision),X!==g.precision&&Ie(`WebGLProgram.getParameters:`,g.precision,`not supported, using`,X,`instead.`));let ee=I.morphAttributes.position||I.morphAttributes.normal||I.morphAttributes.color,ne=ee!==void 0?ee.length:0,Re=0;I.morphAttributes.position!==void 0&&(Re=1),I.morphAttributes.normal!==void 0&&(Re=2),I.morphAttributes.color!==void 0&&(Re=3);let ze,K,xe,Te;if(re){let ge=Yn[re];ze=ge.vertexShader,K=ge.fragmentShader}else{ze=g.vertexShader,K=g.fragmentShader;let ge=o.getVertexShaderStage(g),ct=o.getFragmentShaderStage(g);o.update(g,ge,ct),xe=ge.id,Te=ct.id}let Ne=s.getRenderTarget(),ye=s.state.buffers.depth.getReversed(),Ge=L.isInstancedMesh===!0,Mt=L.isBatchedMesh===!0,Ue=!!g.map,lt=!!g.matcap,ut=!!z,$e=ut&&z.isPMREMTexture===!0,zt=!!g.aoMap,Ct=!!g.lightMap,an=!!g.bumpMap&&g.wireframe===!1,vt=!!g.normalMap,kn=!!g.displacementMap,Nt=!!g.emissiveMap,gn=!!g.metalnessMap,_n=!!g.roughnessMap,xn=g.anisotropy>0,O=g.clearcoat>0,yn=g.diffuseRoughness>0,gt=g.dispersion>0,_t=g.retroreflectivity>0,me=g.iridescence>0,Rt=g.sheen>0,Oe=g.transmission>0,ke=xn&&!!g.anisotropyMap,A=O&&!!g.clearcoatMap,y=O&&!!g.clearcoatNormalMap,B=O&&!!g.clearcoatRoughnessMap,ie=yn&&!!g.diffuseRoughnessMap,Q=me&&!!g.iridescenceMap,le=me&&!!g.iridescenceThicknessMap,fe=Rt&&!!g.sheenColorMap,q=Rt&&!!g.sheenRoughnessMap,Z=!!g.specularMap,he=!!g.specularColorMap,C=!!g.specularIntensityMap,J=Oe&&!!g.transmissionMap,W=Oe&&!!g.thicknessMap,ue=!!g.gradientMap,oe=!!g.alphaMap,ce=g.alphaTest>0,De=!!g.alphaHash,qe=!!g.extensions,ae=Xn;g.toneMapped&&(Ne===null||Ne.isXRRenderTarget===!0)&&(ae=s.toneMapping);let Le=$e?z.isCompressedCubeTexture?z.image[0].mipmaps:z.mipmaps:null,Ve={shaderID:re,shaderType:g.type,shaderName:g.name,vertexShader:ze,fragmentShader:K,defines:g.defines,customVertexShaderID:xe,customFragmentShaderID:Te,isRawShaderMaterial:g.isRawShaderMaterial===!0,glslVersion:g.glslVersion,precision:X,batching:Mt,batchingColor:Mt&&L._colorsTexture!==null,instancing:Ge,instancingColor:Ge&&L.instanceColor!==null,instancingMorph:Ge&&L.morphTexture!==null,outputColorSpace:Ne===null?s.outputColorSpace:Ne.isXRRenderTarget===!0?Ne.texture.colorSpace:Ye.workingColorSpace,alphaToCoverage:!!g.alphaToCoverage,map:Ue,matcap:lt,envMap:ut,envMapMode:ut&&z.mapping,envMapPMREM:$e,envMapMaxLod:$e?Le.length-1:null,envMapSize:$e?Le[0].width:null,aoMap:zt,lightMap:Ct,bumpMap:an,normalMap:vt,displacementMap:kn,emissiveMap:Nt,normalMapObjectSpace:vt&&g.normalMapType===Du,normalMapTangentSpace:vt&&g.normalMapType===kr,packedNormalMap:vt&&g.normalMapType===kr&&s_(g.normalMap.format),metalnessMap:gn,roughnessMap:_n,anisotropy:xn,anisotropyMap:ke,clearcoat:O,clearcoatMap:A,clearcoatNormalMap:y,clearcoatRoughnessMap:B,diffuseRoughness:yn,diffuseRoughnessMap:ie,dispersion:gt,retroreflection:_t,iridescence:me,iridescenceMap:Q,iridescenceThicknessMap:le,sheen:Rt,sheenColorMap:fe,sheenRoughnessMap:q,specularMap:Z,specularColorMap:he,specularIntensityMap:C,transmission:Oe,transmissionMap:J,thicknessMap:W,gradientMap:ue,opaque:g.transparent===!1&&g.blending===Ns&&g.alphaToCoverage===!1,alphaMap:oe,alphaTest:ce,alphaHash:De,combine:g.combine,mapUv:Ue&&f(g.map.channel),aoMapUv:zt&&f(g.aoMap.channel),lightMapUv:Ct&&f(g.lightMap.channel),bumpMapUv:an&&f(g.bumpMap.channel),normalMapUv:vt&&f(g.normalMap.channel),displacementMapUv:kn&&f(g.displacementMap.channel),emissiveMapUv:Nt&&f(g.emissiveMap.channel),metalnessMapUv:gn&&f(g.metalnessMap.channel),roughnessMapUv:_n&&f(g.roughnessMap.channel),anisotropyMapUv:ke&&f(g.anisotropyMap.channel),clearcoatMapUv:A&&f(g.clearcoatMap.channel),clearcoatNormalMapUv:y&&f(g.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:B&&f(g.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:ie&&f(g.diffuseRoughnessMap.channel),iridescenceMapUv:Q&&f(g.iridescenceMap.channel),iridescenceThicknessMapUv:le&&f(g.iridescenceThicknessMap.channel),sheenColorMapUv:fe&&f(g.sheenColorMap.channel),sheenRoughnessMapUv:q&&f(g.sheenRoughnessMap.channel),specularMapUv:Z&&f(g.specularMap.channel),specularColorMapUv:he&&f(g.specularColorMap.channel),specularIntensityMapUv:C&&f(g.specularIntensityMap.channel),transmissionMapUv:J&&f(g.transmissionMap.channel),thicknessMapUv:W&&f(g.thicknessMap.channel),alphaMapUv:oe&&f(g.alphaMap.channel),vertexTangents:!!I.attributes.tangent&&(vt||xn),vertexNormals:!!I.attributes.normal,vertexColors:g.vertexColors,vertexAlphas:g.vertexColors===!0&&!!I.attributes.color&&I.attributes.color.itemSize===4,pointsUvs:L.isPoints===!0&&!!I.attributes.uv&&(Ue||oe),fog:!!V,useFog:g.fog===!0,fogExp2:!!V&&V.isFogExp2,flatShading:g.wireframe===!1&&(g.flatShading===!0||I.attributes.normal===void 0&&vt===!1&&(g.isMeshLambertMaterial||g.isMeshPhongMaterial||g.isMeshStandardMaterial||g.isMeshPhysicalMaterial)),sizeAttenuation:g.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:ye,skinning:L.isSkinnedMesh===!0,hasPositionAttribute:I.attributes.position!==void 0,morphTargets:I.morphAttributes.position!==void 0,morphNormals:I.morphAttributes.normal!==void 0,morphColors:I.morphAttributes.color!==void 0,morphTargetsCount:ne,morphTextureStride:Re,numSunLights:M.sun.length,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numSunLightShadows:M.sunShadowMap.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numLightProbeGrids:U.filter(ge=>ge.texture!==null).length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:g.dithering,shadowMapEnabled:s.shadowMap.enabled&&N.length>0,shadowMapType:s.shadowMap.type,toneMapping:ae,decodeVideoTexture:Ue&&g.map.isVideoTexture===!0&&Ye.getTransfer(g.map.colorSpace)===ot,decodeVideoTextureEmissive:Nt&&g.emissiveMap.isVideoTexture===!0&&Ye.getTransfer(g.emissiveMap.colorSpace)===ot,premultipliedAlpha:g.premultipliedAlpha,doubleSided:g.side===Wn,flipSided:g.side===rn,useDepthPacking:g.depthPacking>=0,depthPacking:g.depthPacking||0,index0AttributeName:g.index0AttributeName,extensionClipCullDistance:qe&&g.extensions.clipCullDistance===!0&&t.has(`WEBGL_clip_cull_distance`),extensionMultiDraw:(qe&&g.extensions.multiDraw===!0||Mt)&&t.has(`WEBGL_multi_draw`),rendererExtensionParallelShaderCompile:t.has(`KHR_parallel_shader_compile`),customProgramCacheKey:g.customProgramCacheKey()};return Ve.vertexUv1s=c.has(1),Ve.vertexUv2s=c.has(2),Ve.vertexUv3s=c.has(3),c.clear(),Ve}function x(g){let M=[];if(g.shaderID?M.push(g.shaderID):(M.push(g.customVertexShaderID),M.push(g.customFragmentShaderID)),g.defines!==void 0)for(let N in g.defines)M.push(N),M.push(g.defines[N]);return g.isRawShaderMaterial===!1&&(p(M,g),m(M,g),M.push(s.outputColorSpace)),M.push(g.customProgramCacheKey),M.join()}function p(g,M){g.push(M.precision),g.push(M.outputColorSpace),g.push(M.envMapMode),g.push(M.envMapPMREM),g.push(M.envMapMaxLod),g.push(M.envMapSize),g.push(M.mapUv),g.push(M.alphaMapUv),g.push(M.lightMapUv),g.push(M.aoMapUv),g.push(M.bumpMapUv),g.push(M.normalMapUv),g.push(M.displacementMapUv),g.push(M.emissiveMapUv),g.push(M.metalnessMapUv),g.push(M.roughnessMapUv),g.push(M.anisotropyMapUv),g.push(M.clearcoatMapUv),g.push(M.clearcoatNormalMapUv),g.push(M.clearcoatRoughnessMapUv),g.push(M.diffuseRoughnessMapUv),g.push(M.iridescenceMapUv),g.push(M.iridescenceThicknessMapUv),g.push(M.sheenColorMapUv),g.push(M.sheenRoughnessMapUv),g.push(M.specularMapUv),g.push(M.specularColorMapUv),g.push(M.specularIntensityMapUv),g.push(M.transmissionMapUv),g.push(M.thicknessMapUv),g.push(M.combine),g.push(M.fogExp2),g.push(M.sizeAttenuation),g.push(M.morphTargetsCount),g.push(M.numSunLights),g.push(M.numDirLights),g.push(M.numPointLights),g.push(M.numSpotLights),g.push(M.numSpotLightMaps),g.push(M.numHemiLights),g.push(M.numRectAreaLights),g.push(M.numSunLightShadows),g.push(M.numDirLightShadows),g.push(M.numPointLightShadows),g.push(M.numSpotLightShadows),g.push(M.numSpotLightShadowsWithMaps),g.push(M.numLightProbes),g.push(M.numLightProbeGrids),g.push(M.shadowMapType),g.push(M.toneMapping),g.push(M.numClippingPlanes),g.push(M.numClipIntersection),g.push(M.depthPacking)}function m(g,M){a.disableAll(),M.instancing&&a.enable(0),M.instancingColor&&a.enable(1),M.instancingMorph&&a.enable(2),M.matcap&&a.enable(3),M.envMap&&a.enable(4),M.normalMapObjectSpace&&a.enable(5),M.normalMapTangentSpace&&a.enable(6),M.clearcoat&&a.enable(7),M.iridescence&&a.enable(8),M.alphaTest&&a.enable(9),M.vertexColors&&a.enable(10),M.vertexAlphas&&a.enable(11),M.vertexUv1s&&a.enable(12),M.vertexUv2s&&a.enable(13),M.vertexUv3s&&a.enable(14),M.vertexTangents&&a.enable(15),M.anisotropy&&a.enable(16),M.alphaHash&&a.enable(17),M.batching&&a.enable(18),M.dispersion&&a.enable(19),M.retroreflection&&a.enable(24),M.diffuseRoughness&&a.enable(25),M.batchingColor&&a.enable(20),M.gradientMap&&a.enable(21),M.packedNormalMap&&a.enable(22),M.vertexNormals&&a.enable(23),g.push(a.mask),a.disableAll(),M.fog&&a.enable(0),M.useFog&&a.enable(1),M.flatShading&&a.enable(2),M.logarithmicDepthBuffer&&a.enable(3),M.reversedDepthBuffer&&a.enable(4),M.skinning&&a.enable(5),M.morphTargets&&a.enable(6),M.morphNormals&&a.enable(7),M.morphColors&&a.enable(8),M.premultipliedAlpha&&a.enable(9),M.shadowMapEnabled&&a.enable(10),M.doubleSided&&a.enable(11),M.flipSided&&a.enable(12),M.useDepthPacking&&a.enable(13),M.dithering&&a.enable(14),M.transmission&&a.enable(15),M.sheen&&a.enable(16),M.opaque&&a.enable(17),M.pointsUvs&&a.enable(18),M.decodeVideoTexture&&a.enable(19),M.decodeVideoTextureEmissive&&a.enable(20),M.alphaToCoverage&&a.enable(21),M.numLightProbeGrids>0&&a.enable(22),M.hasPositionAttribute&&a.enable(23),g.push(a.mask)}function v(g){let M=u[g.type],N;if(M){let R=Yn[M];N=Wu.clone(R.uniforms)}else N=g.uniforms;return N}function T(g,M){let N=h.get(M);return N!==void 0?++N.usedTimes:(N=new n_(s,M,g,i),l.push(N),h.set(M,N)),N}function S(g){if(--g.usedTimes===0){let M=l.indexOf(g);l[M]=l[l.length-1],l.pop(),h.delete(g.cacheKey),g.destroy()}}function w(g){o.remove(g)}function E(){o.dispose()}return{getParameters:_,getProgramCacheKey:x,getUniforms:v,acquireProgram:T,releaseProgram:S,releaseShaderCache:w,programs:l,dispose:E}}function a_(){let s=/* @__PURE__ */ new WeakMap;function e(a){return s.has(a)}function t(a){let o=s.get(a);return o===void 0&&(o={},s.set(a,o)),o}function n(a){s.delete(a)}function i(a,o,c){s.get(a)[o]=c}function r(){s=/* @__PURE__ */ new WeakMap}return{has:e,get:t,remove:n,update:i,dispose:r}}function o_(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.materialVariant!==e.materialVariant?s.materialVariant-e.materialVariant:s.z!==e.z?s.z-e.z:s.id-e.id}function cd(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function hd(){let s=[],e=0,t=[],n=[],i=[];function r(){e=0,t.length=0,n.length=0,i.length=0}function a(u){let f=0;return u.isInstancedMesh&&(f+=2),u.isSkinnedMesh&&(f+=1),f}function o(u,f,_,x,p,m){let v=s[e];return v===void 0?(v={id:u.id,object:u,geometry:f,material:_,materialVariant:a(u),groupOrder:x,renderOrder:u.renderOrder,z:p,group:m},s[e]=v):(v.id=u.id,v.object=u,v.geometry=f,v.material=_,v.materialVariant=a(u),v.groupOrder=x,v.renderOrder=u.renderOrder,v.z=p,v.group=m),e++,v}function c(u,f,_,x,p,m,v){v.reversedDepth===!0&&(p=-p);let T=o(u,f,_,x,p,m);_.transmission>0?n.push(T):_.transparent===!0?i.push(T):t.push(T)}function l(u,f,_,x,p,m){let v=o(u,f,_,x,p,m);_.transmission>0?n.unshift(v):_.transparent===!0?i.unshift(v):t.unshift(v)}function h(u,f){t.length>1&&t.sort(u||o_),n.length>1&&n.sort(f||cd),i.length>1&&i.sort(f||cd)}function d(){for(let u=e,f=s.length;u<f;u++){let _=s[u];if(_.id===null)break;_.id=null,_.object=null,_.geometry=null,_.material=null,_.group=null}}return{opaque:t,transmissive:n,transparent:i,init:r,push:c,unshift:l,finish:d,sort:h}}function l_(){let s=/* @__PURE__ */ new WeakMap;function e(n,i){let r=s.get(n),a;return r===void 0?(a=new hd,s.set(n,[a])):i>=r.length?(a=new hd,r.push(a)):a=r[i],a}function t(){s=/* @__PURE__ */ new WeakMap}return{get:e,dispose:t}}function c_(){let s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case`SunLight`:case`DirectionalLight`:t={direction:new P,color:new Ce};break;case`SpotLight`:t={position:new P,direction:new P,color:new Ce,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case`PointLight`:t={position:new P,color:new Ce,distance:0,decay:0};break;case`HemisphereLight`:t={direction:new P,skyColor:new Ce,groundColor:new Ce};break;case`RectAreaLight`:t={color:new Ce,position:new P,halfWidth:new P,halfHeight:new P}}return s[e.id]=t,t}}}function h_(){let s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case`SunLight`:case`DirectionalLight`:t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Se};break;case`SpotLight`:t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Se};break;case`PointLight`:t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Se,shadowCameraNear:1,shadowCameraFar:1e3}}return s[e.id]=t,t}}}var u_=0;function d_(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function f_(s){let e=new c_,t=h_(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new P);let i=new P,r=new ht,a=new ht;function o(l){let h=0,d=0,u=0;for(let U=0;U<9;U++)n.probe[U].set(0,0,0);let f=0,_=0,x=0,p=0,m=0,v=0,T=0,S=0,w=0,E=0,g=0,M=0,N=0,R=0;l.sort(d_);for(let U=0,V=l.length;U<V;U++){let I=l[U],H=I.color,$=I.intensity,z=I.distance,re=null;if(I.shadow&&I.shadow.map&&(I.shadow.map.texture.format===Ai?re=I.shadow.map.texture:re=I.shadow.map.depthTexture||I.shadow.map.texture),I.isAmbientLight)h+=H.r*$,d+=H.g*$,u+=H.b*$;else if(I.isLightProbe){for(let X=0;X<9;X++)n.probe[X].addScaledVector(I.sh.coefficients[X],$);R++}else if(I.isSunLight){let X=e.get(I);if(X.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){let ee=I.shadow,ne=t.get(I);ne.shadowIntensity=ee.intensity,ne.shadowBias=ee.bias,ne.shadowNormalBias=ee.normalBias,ne.shadowRadius=ee.radius,ne.shadowMapSize.copy(ee.mapSize).multiply(ee.getFrameExtents()),n.sunShadow[_]=ne,n.sunShadowMap[_]=re;let Re=ee.getViewportCount();for(let ze=0;ze<Re;ze++)n.sunShadowMatrix[x+ze]=ee.getMatrix(ze),n.sunShadowCascade[x+ze]=ee._cascadeData[ze];x+=Re,_++}n.sun[f]=X,f++}else if(I.isDirectionalLight){let X=e.get(I);if(X.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){let ee=I.shadow,ne=t.get(I);ne.shadowIntensity=ee.intensity,ne.shadowBias=ee.bias,ne.shadowNormalBias=ee.normalBias,ne.shadowRadius=ee.radius,ne.shadowMapSize=ee.mapSize,n.directionalShadow[p]=ne,n.directionalShadowMap[p]=re,n.directionalShadowMatrix[p]=I.shadow.matrix,w++}n.directional[p]=X,p++}else if(I.isSpotLight){let X=e.get(I);X.position.setFromMatrixPosition(I.matrixWorld),X.color.copy(H).multiplyScalar($),X.distance=z,X.coneCos=Math.cos(I.angle),X.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),X.decay=I.decay,n.spot[v]=X;let ee=I.shadow;if(I.map&&(n.spotLightMap[M]=I.map,M++,ee.updateMatrices(I),I.castShadow&&N++),n.spotLightMatrix[v]=ee.matrix,I.castShadow){let ne=t.get(I);ne.shadowIntensity=ee.intensity,ne.shadowBias=ee.bias,ne.shadowNormalBias=ee.normalBias,ne.shadowRadius=ee.radius,ne.shadowMapSize=ee.mapSize,n.spotShadow[v]=ne,n.spotShadowMap[v]=re,g++}v++}else if(I.isRectAreaLight){let X=e.get(I);X.color.copy(H).multiplyScalar($),X.halfWidth.set(I.width*.5,0,0),X.halfHeight.set(0,I.height*.5,0),n.rectArea[T]=X,T++}else if(I.isPointLight){let X=e.get(I);if(X.color.copy(I.color).multiplyScalar(I.intensity),X.distance=I.distance,X.decay=I.decay,I.castShadow){let ee=I.shadow,ne=t.get(I);ne.shadowIntensity=ee.intensity,ne.shadowBias=ee.bias,ne.shadowNormalBias=ee.normalBias,ne.shadowRadius=ee.radius,ne.shadowMapSize=ee.mapSize,ne.shadowCameraNear=ee.camera.near,ne.shadowCameraFar=ee.camera.far,n.pointShadow[m]=ne,n.pointShadowMap[m]=re,n.pointShadowMatrix[m]=I.shadow.matrix,E++}n.point[m]=X,m++}else if(I.isHemisphereLight){let X=e.get(I);X.skyColor.copy(I.color).multiplyScalar($),X.groundColor.copy(I.groundColor).multiplyScalar($),n.hemi[S]=X,S++}}T>0&&(s.has(`OES_texture_float_linear`)===!0?(n.rectAreaLTC1=_e.LTC_FLOAT_1,n.rectAreaLTC2=_e.LTC_FLOAT_2):(n.rectAreaLTC1=_e.LTC_HALF_1,n.rectAreaLTC2=_e.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=d,n.ambient[2]=u;let L=n.hash;(L.sunLength!==f||L.directionalLength!==p||L.pointLength!==m||L.spotLength!==v||L.rectAreaLength!==T||L.hemiLength!==S||L.numSunShadows!==_||L.numDirectionalShadows!==w||L.numPointShadows!==E||L.numSpotShadows!==g||L.numSpotMaps!==M||L.numLightProbes!==R)&&(n.sun.length=f,n.directional.length=p,n.spot.length=v,n.rectArea.length=T,n.point.length=m,n.hemi.length=S,n.sunShadow.length=_,n.sunShadowMap.length=_,n.sunShadowMatrix.length=x,n.sunShadowCascade.length=x,n.directionalShadow.length=w,n.directionalShadowMap.length=w,n.directionalShadowMatrix.length=w,n.pointShadow.length=E,n.pointShadowMap.length=E,n.pointShadowMatrix.length=E,n.spotShadow.length=g,n.spotShadowMap.length=g,n.spotLightMatrix.length=g+M-N,n.spotLightMap.length=M,n.numSpotLightShadowsWithMaps=N,n.numLightProbes=R,L.sunLength=f,L.directionalLength=p,L.pointLength=m,L.spotLength=v,L.rectAreaLength=T,L.hemiLength=S,L.numSunShadows=_,L.numDirectionalShadows=w,L.numPointShadows=E,L.numSpotShadows=g,L.numSpotMaps=M,L.numLightProbes=R,n.version=u_++)}function c(l,h){let d=0,u=0,f=0,_=0,x=0,p=0,m=h.matrixWorldInverse;for(let v=0,T=l.length;v<T;v++){let S=l[v];if(S.isSunLight){let w=n.sun[d];w.direction.setFromMatrixPosition(S.matrixWorld),w.direction.transformDirection(m),d++}else if(S.isDirectionalLight){let w=n.directional[u];w.direction.setFromMatrixPosition(S.matrixWorld),i.setFromMatrixPosition(S.target.matrixWorld),w.direction.sub(i),w.direction.transformDirection(m),u++}else if(S.isSpotLight){let w=n.spot[_];w.position.setFromMatrixPosition(S.matrixWorld),w.position.applyMatrix4(m),w.direction.setFromMatrixPosition(S.matrixWorld),i.setFromMatrixPosition(S.target.matrixWorld),w.direction.sub(i),w.direction.transformDirection(m),_++}else if(S.isRectAreaLight){let w=n.rectArea[x];w.position.setFromMatrixPosition(S.matrixWorld),w.position.applyMatrix4(m),a.identity(),r.copy(S.matrixWorld),r.premultiply(m),a.extractRotation(r),w.halfWidth.set(S.width*.5,0,0),w.halfHeight.set(0,S.height*.5,0),w.halfWidth.applyMatrix4(a),w.halfHeight.applyMatrix4(a),x++}else if(S.isPointLight){let w=n.point[f];w.position.setFromMatrixPosition(S.matrixWorld),w.position.applyMatrix4(m),f++}else if(S.isHemisphereLight){let w=n.hemi[p];w.direction.setFromMatrixPosition(S.matrixWorld),w.direction.transformDirection(m),p++}}}return{setup:o,setupView:c,state:n}}function ud(s){let e=new f_(s),t=[],n=[],i=[];function r(d){h.camera=d,t.length=0,n.length=0,i.length=0}function a(d){d.isLightProbeGrid?i.push(d):t.push(d)}function o(d){n.push(d)}function c(){e.setup(t),i.sort((d,u)=>d.priority-u.priority||d.id-u.id)}function l(d){e.setupView(t,d)}let h={lightsArray:t,shadowsArray:n,lightProbeGridArray:i,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:h,setupLights:c,setupLightsView:l,pushLight:a,pushShadow:o}}function p_(s){let e=/* @__PURE__ */ new WeakMap;function t(i,r=0){let a=e.get(i),o;return a===void 0?(o=new ud(s),e.set(i,[o])):r>=a.length?(o=new ud(s),a.push(o)):o=a[r],o}function n(){e=/* @__PURE__ */ new WeakMap}return{get:t,dispose:n}}var m_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`;var g_=`uniform sampler2D shadow_pass;
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
}`;var __=[new P(1,0,0),new P(-1,0,0),new P(0,1,0),new P(0,-1,0),new P(0,0,1),new P(0,0,-1)];var x_=[new P(0,-1,0),new P(0,-1,0),new P(0,0,1),new P(0,0,-1),new P(0,-1,0),new P(0,-1,0)];var dd=new ht;var zr=new P;var Oc=new P;function y_(s,e,t){let n=new bi,i=new Se,r=new Se,a=new yt,o=new Ja,c=new $a,l={},h=t.maxTextureSize,d={[Vn]:rn,[rn]:Vn,[Wn]:Wn},u=new Hn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Se},radius:{value:4}},vertexShader:m_,fragmentShader:g_}),f=u.clone();f.defines.HORIZONTAL_PASS=1;let _=new nt;_.setAttribute(`position`,new xt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new kt(_,u),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Dr;let m=this.type;this.render=function(E,g,M){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||E.length===0)return;this.type===lu&&(Ie(`WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead.`),this.type=Dr);let N=s.getRenderTarget(),R=s.getActiveCubeFace(),L=s.getActiveMipmapLevel(),U=s.state;U.setBlending(Vi),U.buffers.depth.getReversed()===!0?U.buffers.color.setClear(0,0,0,0):U.buffers.color.setClear(1,1,1,1),U.buffers.depth.setTest(!0),U.setScissorTest(!1);let V=m!==this.type;V&&g.traverse(function(I){I.material&&(Array.isArray(I.material)?I.material.forEach(H=>H.needsUpdate=!0):I.material.needsUpdate=!0)});for(let I=0,H=E.length;I<H;I++){let $=E[I],z=$.shadow;if(z===void 0){Ie(`WebGLShadowMap:`,$,`has no shadow.`);continue}if(z.autoUpdate===!1&&z.needsUpdate===!1)continue;i.copy(z.mapSize);let re=z.getFrameExtents();i.multiply(re),r.copy(z.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(r.x=Math.floor(h/re.x),i.x=r.x*re.x,z.mapSize.x=r.x),i.y>h&&(r.y=Math.floor(h/re.y),i.y=r.y*re.y,z.mapSize.y=r.y));let X=s.state.buffers.depth.getReversed();if(z.camera._reversedDepth=X,z.map===null||V===!0){if(z.map!==null&&(z.map.depthTexture!==null&&(z.map.depthTexture.dispose(),z.map.depthTexture=null),z.map.dispose()),this.type===Ls){if($.isPointLight){Ie(`WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.`);continue}z.map=new fn(i.x,i.y,{format:Ai,type:Fn,minFilter:tn,magFilter:tn,generateMipmaps:!1}),z.map.texture.name=$.name+`.shadowMap`,z.map.depthTexture=new ri(i.x,i.y,Un),z.map.depthTexture.name=$.name+`.shadowMapDepth`,z.map.depthTexture.format=ii,z.map.depthTexture.compareFunction=null,z.map.depthTexture.minFilter=Bt,z.map.depthTexture.magFilter=Bt}else $.isPointLight?(z.map=new Gr(i.x),z.map.depthTexture=new hr(i.x,On)):(z.map=new fn(i.x,i.y),z.map.depthTexture=new ri(i.x,i.y,On)),z.map.depthTexture.name=$.name+`.shadowMap`,z.map.depthTexture.format=ii,this.type===Dr?(z.map.depthTexture.compareFunction=X?bc:vc,z.map.depthTexture.minFilter=tn,z.map.depthTexture.magFilter=tn):(z.map.depthTexture.compareFunction=null,z.map.depthTexture.minFilter=Bt,z.map.depthTexture.magFilter=Bt);z.camera.updateProjectionMatrix()}z.map.isWebGLCubeRenderTarget!==!0&&(z.map.width!==i.x||z.map.height!==i.y)&&z.map.setSize(i.x,i.y);let ee=z.map.isWebGLCubeRenderTarget?6:z.getViewportCount();$.isPointLight!==!0&&z.updateMatrices($,M);let ne=(z.camera.layers.mask&4294967294)!==0?z.camera.layers:M.layers;for(let Re=0;Re<ee;Re++){let ze=z.getCamera(Re);if($.isPointLight){let K=z.camera,xe=z.matrix,Te=$.distance||K.far;Te!==K.far&&(K.far=Te,K.updateProjectionMatrix()),zr.setFromMatrixPosition($.matrixWorld),K.position.copy(zr),Oc.copy(K.position),Oc.add(__[Re]),K.up.copy(x_[Re]),K.lookAt(Oc),K.updateMatrixWorld(),xe.makeTranslation(-zr.x,-zr.y,-zr.z),dd.multiplyMatrices(K.projectionMatrix,K.matrixWorldInverse),z._frustum.setFromProjectionMatrix(dd,K.coordinateSystem,K.reversedDepth)}if(z.map.isWebGLCubeRenderTarget)s.setRenderTarget(z.map,Re),s.clear();else{Re===0&&(s.setRenderTarget(z.map),s.clear());let K=z.getViewport(Re);a.set(r.x*K.x,r.y*K.y,r.x*K.z,r.y*K.w),U.viewport(a)}n=z.getFrustum(Re),S(g,M,ze,$,ne,this.type)}z.isPointLightShadow!==!0&&this.type===Ls&&v(z,M),z.needsUpdate=!1}m=this.type,p.needsUpdate=!1,s.setRenderTarget(N,R,L)};function v(E,g){let M=e.update(x);u.defines.VSM_SAMPLES!==E.blurSamples&&(u.defines.VSM_SAMPLES=E.blurSamples,f.defines.VSM_SAMPLES=E.blurSamples,u.needsUpdate=!0,f.needsUpdate=!0),E.mapPass===null?E.mapPass=new fn(i.x,i.y,{format:Ai,type:Fn}):(E.mapPass.width!==E.map.width||E.mapPass.height!==E.map.height)&&E.mapPass.setSize(E.map.width,E.map.height),u.uniforms.shadow_pass.value=E.map.depthTexture,u.uniforms.resolution.value.set(E.map.width,E.map.height),u.uniforms.radius.value=E.radius,s.setRenderTarget(E.mapPass),s.clear(),s.renderBufferDirect(g,null,M,u,x,null),f.uniforms.shadow_pass.value=E.mapPass.texture,f.uniforms.resolution.value.set(E.map.width,E.map.height),f.uniforms.radius.value=E.radius,s.setRenderTarget(E.map),s.clear(),s.renderBufferDirect(g,null,M,f,x,null)}function T(E,g,M,N){let R=null,L=M.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(L!==void 0)R=L;else if(R=M.isPointLight===!0?c:o,s.localClippingEnabled&&g.clipShadows===!0&&Array.isArray(g.clippingPlanes)&&g.clippingPlanes.length!==0||g.displacementMap&&g.displacementScale!==0||g.alphaMap&&g.alphaTest>0||g.map&&g.alphaTest>0||g.alphaToCoverage===!0){let U=R.uuid,V=g.uuid,I=l[U];I===void 0&&(I={},l[U]=I);let H=I[V];H===void 0&&(H=R.clone(),I[V]=H,g.addEventListener(`dispose`,w)),R=H}if(R.visible=g.visible,R.wireframe=g.wireframe,N===Ls?R.side=g.shadowSide!==null?g.shadowSide:g.side:R.side=g.shadowSide!==null?g.shadowSide:d[g.side],R.alphaMap=g.alphaMap,R.alphaTest=g.alphaToCoverage===!0?.5:g.alphaTest,R.map=g.map,R.clipShadows=g.clipShadows,R.clippingPlanes=g.clippingPlanes,R.clipIntersection=g.clipIntersection,R.displacementMap=g.displacementMap,R.displacementScale=g.displacementScale,R.displacementBias=g.displacementBias,R.wireframeLinewidth=g.wireframeLinewidth,R.linewidth=g.linewidth,M.isPointLight===!0&&R.isMeshDistanceMaterial===!0){let U=s.properties.get(R);U.light=M}return R}function S(E,g,M,N,R,L){if(E.visible===!1)return;if(E.layers.test(R)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&L===Ls)&&(!E.frustumCulled||E.intersectsFrustum(n))){E.modelViewMatrix.multiplyMatrices(M.matrixWorldInverse,E.matrixWorld);let I=e.update(E),H=E.material;if(Array.isArray(H)){let $=I.groups;for(let z=0,re=$.length;z<re;z++){let X=$[z],ee=H[X.materialIndex];if(ee&&ee.visible){let ne=T(E,ee,N,L);E.onBeforeShadow(s,E,g,M,I,ne,X),s.renderBufferDirect(M,null,I,ne,E,X),E.onAfterShadow(s,E,g,M,I,ne,X)}}}else if(H.visible){let $=T(E,H,N,L);E.onBeforeShadow(s,E,g,M,I,$,null),s.renderBufferDirect(M,null,I,$,E,null),E.onAfterShadow(s,E,g,M,I,$,null)}}let V=E.children;for(let I=0,H=V.length;I<H;I++)S(V[I],g,M,N,R,L)}function w(E){E.target.removeEventListener(`dispose`,w);for(let M in l){let N=l[M],R=E.target.uuid;R in N&&(N[R].dispose(),delete N[R])}}}function v_(s,e){function t(){let C=!1,J=new yt,W=null,ue=new yt(0,0,0,0);return{setMask:function(oe){W!==oe&&!C&&(s.colorMask(oe,oe,oe,oe),W=oe)},setLocked:function(oe){C=oe},setClear:function(oe,ce,De,qe,ae){ae===!0&&(oe*=qe,ce*=qe,De*=qe),J.set(oe,ce,De,qe),ue.equals(J)===!1&&(s.clearColor(oe,ce,De,qe),ue.copy(J))},reset:function(){C=!1,W=null,ue.set(-1,0,0,0)}}}function n(){let C=!1,J=!1,W=null,ue=null,oe=null;return{setReversed:function(ce){if(J!==ce){let De=e.get(`EXT_clip_control`);ce?De.clipControlEXT(De.LOWER_LEFT_EXT,De.ZERO_TO_ONE_EXT):De.clipControlEXT(De.LOWER_LEFT_EXT,De.NEGATIVE_ONE_TO_ONE_EXT),J=ce;let qe=oe;oe=null,this.setClear(qe)}},getReversed:function(){return J},setTest:function(ce){ce?ye(s.DEPTH_TEST):Ge(s.DEPTH_TEST)},setMask:function(ce){W!==ce&&!C&&(s.depthMask(ce),W=ce)},setFunc:function(ce){if(J&&(ce=Hu[ce]),ue!==ce){switch(ce){case Ia:s.depthFunc(s.NEVER);break;case La:s.depthFunc(s.ALWAYS);break;case Na:s.depthFunc(s.LESS);break;case ms:s.depthFunc(s.LEQUAL);break;case Oa:s.depthFunc(s.EQUAL);break;case Ua:s.depthFunc(s.GEQUAL);break;case Fa:s.depthFunc(s.GREATER);break;case Ba:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}ue=ce}},setLocked:function(ce){C=ce},setClear:function(ce){oe!==ce&&(oe=ce,J&&(ce=1-ce),s.clearDepth(ce))},reset:function(){C=!1,W=null,ue=null,oe=null,J=!1}}}function i(){let C=!1,J=null,W=null,ue=null,oe=null,ce=null,De=null,qe=null,ae=null;return{setTest:function(Le){C||(Le?ye(s.STENCIL_TEST):Ge(s.STENCIL_TEST))},setMask:function(Le){J!==Le&&!C&&(s.stencilMask(Le),J=Le)},setFunc:function(Le,Ve,ge){(W!==Le||ue!==Ve||oe!==ge)&&(s.stencilFunc(Le,Ve,ge),W=Le,ue=Ve,oe=ge)},setOp:function(Le,Ve,ge){(ce!==Le||De!==Ve||qe!==ge)&&(s.stencilOp(Le,Ve,ge),ce=Le,De=Ve,qe=ge)},setLocked:function(Le){C=Le},setClear:function(Le){ae!==Le&&(s.clearStencil(Le),ae=Le)},reset:function(){C=!1,J=null,W=null,ue=null,oe=null,ce=null,De=null,qe=null,ae=null}}}let r=new t,a=new n,o=new i,c={},l=/* @__PURE__ */ new WeakMap,h={},d={},u={},f=/* @__PURE__ */ new WeakMap,_=[],x=null,p=!1,m=null,v=null,T=null,S=null,w=null,E=null,g=null,M=new Ce(0,0,0),N=0,R=!1,L=null,U=null,V=null,I=null,H=null,$=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS),z=!1,re=0,X=s.getParameter(s.VERSION);X.indexOf(`WebGL`)!==-1?(re=parseFloat(/^WebGL (\d)/.exec(X)[1]),z=re>=1):X.indexOf(`OpenGL ES`)!==-1&&(re=parseFloat(/^OpenGL ES (\d)/.exec(X)[1]),z=re>=2);let ee=null,ne={},Re=s.getParameter(s.SCISSOR_BOX),ze=s.getParameter(s.VIEWPORT),K=new yt().fromArray(Re),xe=new yt().fromArray(ze);function Te(C,J,W,ue){let oe=/* @__PURE__ */ new Uint8Array(4),ce=s.createTexture();s.bindTexture(C,ce),s.texParameteri(C,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(C,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let De=0;De<W;De++)C===s.TEXTURE_3D||C===s.TEXTURE_2D_ARRAY?s.texImage3D(J,0,s.RGBA,1,1,ue,0,s.RGBA,s.UNSIGNED_BYTE,oe):s.texImage2D(J+De,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,oe);return ce}let Ne={};Ne[s.TEXTURE_2D]=Te(s.TEXTURE_2D,s.TEXTURE_2D,1),Ne[s.TEXTURE_CUBE_MAP]=Te(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),Ne[s.TEXTURE_2D_ARRAY]=Te(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),Ne[s.TEXTURE_3D]=Te(s.TEXTURE_3D,s.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),ye(s.DEPTH_TEST),a.setFunc(ms),an(!1),vt(Ql),ye(s.CULL_FACE),zt(Vi);function ye(C){h[C]!==!0&&(s.enable(C),h[C]=!0)}function Ge(C){h[C]!==!1&&(s.disable(C),h[C]=!1)}function Mt(C,J){return u[C]!==J?(s.bindFramebuffer(C,J),u[C]=J,C===s.DRAW_FRAMEBUFFER&&(u[s.FRAMEBUFFER]=J),C===s.FRAMEBUFFER&&(u[s.DRAW_FRAMEBUFFER]=J),!0):!1}function Ue(C,J){let W=_,ue=!1;if(C){W=f.get(J),W===void 0&&(W=[],f.set(J,W));let oe=C.textures;if(W.length!==oe.length||W[0]!==s.COLOR_ATTACHMENT0){for(let ce=0,De=oe.length;ce<De;ce++)W[ce]=s.COLOR_ATTACHMENT0+ce;W.length=oe.length,ue=!0}}else W[0]!==s.BACK&&(W[0]=s.BACK,ue=!0);ue&&s.drawBuffers(W)}function lt(C){return x!==C?(s.useProgram(C),x=C,!0):!1}let ut={[Wi]:s.FUNC_ADD,[hu]:s.FUNC_SUBTRACT,[uu]:s.FUNC_REVERSE_SUBTRACT};ut[du]=s.MIN,ut[fu]=s.MAX;let $e={[pu]:s.ZERO,[mu]:s.ONE,[gu]:s.SRC_COLOR,[ic]:s.SRC_ALPHA,[Su]:s.SRC_ALPHA_SATURATE,[vu]:s.DST_COLOR,[xu]:s.DST_ALPHA,[_u]:s.ONE_MINUS_SRC_COLOR,[sc]:s.ONE_MINUS_SRC_ALPHA,[bu]:s.ONE_MINUS_DST_COLOR,[yu]:s.ONE_MINUS_DST_ALPHA,[Mu]:s.CONSTANT_COLOR,[Eu]:s.ONE_MINUS_CONSTANT_COLOR,[Tu]:s.CONSTANT_ALPHA,[wu]:s.ONE_MINUS_CONSTANT_ALPHA};function zt(C,J,W,ue,oe,ce,De,qe,ae,Le){if(C===Vi){p===!0&&(Ge(s.BLEND),p=!1);return}if(p===!1&&(ye(s.BLEND),p=!0),C!==cu){if(C!==m||Le!==R){if((v!==Wi||w!==Wi)&&(s.blendEquation(s.FUNC_ADD),v=Wi,w=Wi),Le)switch(C){case Ns:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case ec:s.blendFunc(s.ONE,s.ONE);break;case tc:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case nc:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:Fe(`WebGLState: Invalid blending: `,C)}else switch(C){case Ns:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case ec:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case tc:Fe(`WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true`);break;case nc:Fe(`WebGLState: MultiplyBlending requires material.premultipliedAlpha = true`);break;default:Fe(`WebGLState: Invalid blending: `,C)}T=null,S=null,E=null,g=null,M.set(0,0,0),N=0,m=C,R=Le}return}oe=oe||J,ce=ce||W,De=De||ue,(J!==v||oe!==w)&&(s.blendEquationSeparate(ut[J],ut[oe]),v=J,w=oe),(W!==T||ue!==S||ce!==E||De!==g)&&(s.blendFuncSeparate($e[W],$e[ue],$e[ce],$e[De]),T=W,S=ue,E=ce,g=De),(qe.equals(M)===!1||ae!==N)&&(s.blendColor(qe.r,qe.g,qe.b,ae),M.copy(qe),N=ae),m=C,R=!1}function Ct(C,J){C.side===Wn?Ge(s.CULL_FACE):ye(s.CULL_FACE);let W=C.side===rn;J&&(W=!W),an(W),C.blending===Ns&&C.transparent===!1?zt(Vi):zt(C.blending,C.blendEquation,C.blendSrc,C.blendDst,C.blendEquationAlpha,C.blendSrcAlpha,C.blendDstAlpha,C.blendColor,C.blendAlpha,C.premultipliedAlpha),a.setFunc(C.depthFunc),a.setTest(C.depthTest),a.setMask(C.depthWrite),r.setMask(C.colorWrite);let ue=C.stencilWrite;o.setTest(ue),ue&&(o.setMask(C.stencilWriteMask),o.setFunc(C.stencilFunc,C.stencilRef,C.stencilFuncMask),o.setOp(C.stencilFail,C.stencilZFail,C.stencilZPass)),Nt(C.polygonOffset,C.polygonOffsetFactor,C.polygonOffsetUnits),C.alphaToCoverage===!0?ye(s.SAMPLE_ALPHA_TO_COVERAGE):Ge(s.SAMPLE_ALPHA_TO_COVERAGE)}function an(C){L!==C&&(C?s.frontFace(s.CW):s.frontFace(s.CCW),L=C)}function vt(C){C!==au?(ye(s.CULL_FACE),C!==U&&(C===Ql?s.cullFace(s.BACK):C===ou?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Ge(s.CULL_FACE),U=C}function kn(C){C!==V&&(z&&s.lineWidth(C),V=C)}function Nt(C,J,W){C?(ye(s.POLYGON_OFFSET_FILL),(I!==J||H!==W)&&(I=J,H=W,a.getReversed()&&(J=-J,W=-W),s.polygonOffset(J,W))):Ge(s.POLYGON_OFFSET_FILL)}function gn(C){C?ye(s.SCISSOR_TEST):Ge(s.SCISSOR_TEST)}function _n(C){C===void 0&&(C=s.TEXTURE0+$-1),ee!==C&&(s.activeTexture(C),ee=C)}function xn(C,J,W){W===void 0&&(ee===null?W=s.TEXTURE0+$-1:W=ee);let ue=ne[W];ue===void 0&&(ue={type:void 0,texture:void 0},ne[W]=ue),(ue.type!==C||ue.texture!==J)&&(ee!==W&&(s.activeTexture(W),ee=W),s.bindTexture(C,J||Ne[C]),ue.type=C,ue.texture=J)}function O(){let C=ne[ee];C!==void 0&&C.type!==void 0&&(s.bindTexture(C.type,null),C.type=void 0,C.texture=void 0)}function yn(){try{s.compressedTexImage2D(...arguments)}catch(C){Fe(`WebGLState:`,C)}}function gt(){try{s.compressedTexImage3D(...arguments)}catch(C){Fe(`WebGLState:`,C)}}function _t(){try{s.texSubImage2D(...arguments)}catch(C){Fe(`WebGLState:`,C)}}function me(){try{s.texSubImage3D(...arguments)}catch(C){Fe(`WebGLState:`,C)}}function Rt(){try{s.compressedTexSubImage2D(...arguments)}catch(C){Fe(`WebGLState:`,C)}}function Oe(){try{s.compressedTexSubImage3D(...arguments)}catch(C){Fe(`WebGLState:`,C)}}function ke(){try{s.texStorage2D(...arguments)}catch(C){Fe(`WebGLState:`,C)}}function A(){try{s.texStorage3D(...arguments)}catch(C){Fe(`WebGLState:`,C)}}function y(){try{s.texImage2D(...arguments)}catch(C){Fe(`WebGLState:`,C)}}function B(){try{s.texImage3D(...arguments)}catch(C){Fe(`WebGLState:`,C)}}function ie(C){return d[C]!==void 0?d[C]:s.getParameter(C)}function Q(C,J){d[C]!==J&&(s.pixelStorei(C,J),d[C]=J)}function le(C){K.equals(C)===!1&&(s.scissor(C.x,C.y,C.z,C.w),K.copy(C))}function fe(C){xe.equals(C)===!1&&(s.viewport(C.x,C.y,C.z,C.w),xe.copy(C))}function q(C,J){let W=l.get(J);W===void 0&&(W=/* @__PURE__ */ new WeakMap,l.set(J,W));let ue=W.get(C);ue===void 0&&(ue=s.getUniformBlockIndex(J,C.name),s.uniformBlockBinding(J,ue,ue),W.set(C,ue))}function Z(C,J,W){let oe=l.get(J).get(C);c[oe]!==W&&(s.bindBufferBase(s.UNIFORM_BUFFER,oe,W),c[oe]=W)}function he(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),a.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),s.pixelStorei(s.PACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,!1),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,s.BROWSER_DEFAULT_WEBGL),s.pixelStorei(s.PACK_ROW_LENGTH,0),s.pixelStorei(s.PACK_SKIP_PIXELS,0),s.pixelStorei(s.PACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_ROW_LENGTH,0),s.pixelStorei(s.UNPACK_IMAGE_HEIGHT,0),s.pixelStorei(s.UNPACK_SKIP_PIXELS,0),s.pixelStorei(s.UNPACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_SKIP_IMAGES,0),h={},d={},ee=null,ne={},u={},c={},f=/* @__PURE__ */ new WeakMap,_=[],x=null,p=!1,m=null,v=null,T=null,S=null,w=null,E=null,g=null,M=new Ce(0,0,0),N=0,R=!1,L=null,U=null,V=null,I=null,H=null,K.set(0,0,s.canvas.width,s.canvas.height),xe.set(0,0,s.canvas.width,s.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:ye,disable:Ge,bindFramebuffer:Mt,drawBuffers:Ue,useProgram:lt,setBlending:zt,setMaterial:Ct,setFlipSided:an,setCullFace:vt,setLineWidth:kn,setPolygonOffset:Nt,setScissorTest:gn,activeTexture:_n,bindTexture:xn,unbindTexture:O,compressedTexImage2D:yn,compressedTexImage3D:gt,texImage2D:y,texImage3D:B,pixelStorei:Q,getParameter:ie,updateUBOMapping:q,uniformBlockBinding:Z,texStorage2D:ke,texStorage3D:A,texSubImage2D:_t,texSubImage3D:me,compressedTexSubImage2D:Rt,compressedTexSubImage3D:Oe,scissor:le,viewport:fe,reset:he}}function b_(s,e,t,n,i,r,a){let o=e.has(`WEBGL_multisampled_render_to_texture`)?e.get(`WEBGL_multisampled_render_to_texture`):null,c=typeof navigator>`u`?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Se,h=/* @__PURE__ */ new WeakMap,d=/* @__PURE__ */ new Set,u,f=/* @__PURE__ */ new WeakMap,_=/* @__PURE__ */ new Set,x=new FinalizationRegistry(A=>_.delete(A)),p=!1;try{p=typeof OffscreenCanvas<`u`&&new OffscreenCanvas(1,1).getContext(`2d`)!==null}catch{}function m(A,y){return p?new OffscreenCanvas(A,y):_s(`canvas`)}function v(A,y,B){let ie=1,Q=ke(A);if((Q.width>B||Q.height>B)&&(ie=B/Math.max(Q.width,Q.height)),ie<1)if(typeof HTMLImageElement<`u`&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&A instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&A instanceof ImageBitmap||typeof VideoFrame<`u`&&A instanceof VideoFrame){let le=Math.floor(ie*Q.width),fe=Math.floor(ie*Q.height);u===void 0&&(u=m(le,fe));let q=y?m(le,fe):u;return q.width=le,q.height=fe,q.getContext(`2d`).drawImage(A,0,0,le,fe),Ie(`WebGLRenderer: Texture has been resized from (`+Q.width+`x`+Q.height+`) to (`+le+`x`+fe+`).`),q}else return`data`in A&&Ie(`WebGLRenderer: Image in DataTexture is too big (`+Q.width+`x`+Q.height+`).`),A;return A}function T(A){return A.generateMipmaps}function S(A){s.generateMipmap(A)}function w(A){return A.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:A.isWebGL3DRenderTarget?s.TEXTURE_3D:A.isWebGLArrayRenderTarget||A.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function E(A,y,B,ie,Q,le=!1){if(A!==null){if(s[A]!==void 0)return s[A];Ie(`WebGLRenderer: Attempt to use non-existing WebGL internal format '`+A+`'`)}let fe;ie&&(fe=e.get(`EXT_texture_norm16`),fe||Ie(`WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension`));let q=y;if(y===s.RED&&(B===s.FLOAT&&(q=s.R32F),B===s.HALF_FLOAT&&(q=s.R16F),B===s.UNSIGNED_BYTE&&(q=s.R8),B===s.UNSIGNED_SHORT&&fe&&(q=fe.R16_EXT),B===s.SHORT&&fe&&(q=fe.R16_SNORM_EXT)),y===s.RED_INTEGER&&(B===s.UNSIGNED_BYTE&&(q=s.R8UI),B===s.UNSIGNED_SHORT&&(q=s.R16UI),B===s.UNSIGNED_INT&&(q=s.R32UI),B===s.BYTE&&(q=s.R8I),B===s.SHORT&&(q=s.R16I),B===s.INT&&(q=s.R32I)),y===s.RG&&(B===s.FLOAT&&(q=s.RG32F),B===s.HALF_FLOAT&&(q=s.RG16F),B===s.UNSIGNED_BYTE&&(q=s.RG8),B===s.UNSIGNED_SHORT&&fe&&(q=fe.RG16_EXT),B===s.SHORT&&fe&&(q=fe.RG16_SNORM_EXT)),y===s.RG_INTEGER&&(B===s.UNSIGNED_BYTE&&(q=s.RG8UI),B===s.UNSIGNED_SHORT&&(q=s.RG16UI),B===s.UNSIGNED_INT&&(q=s.RG32UI),B===s.BYTE&&(q=s.RG8I),B===s.SHORT&&(q=s.RG16I),B===s.INT&&(q=s.RG32I)),y===s.RGB_INTEGER&&(B===s.UNSIGNED_BYTE&&(q=s.RGB8UI),B===s.UNSIGNED_SHORT&&(q=s.RGB16UI),B===s.UNSIGNED_INT&&(q=s.RGB32UI),B===s.BYTE&&(q=s.RGB8I),B===s.SHORT&&(q=s.RGB16I),B===s.INT&&(q=s.RGB32I)),y===s.RGBA_INTEGER&&(B===s.UNSIGNED_BYTE&&(q=s.RGBA8UI),B===s.UNSIGNED_SHORT&&(q=s.RGBA16UI),B===s.UNSIGNED_INT&&(q=s.RGBA32UI),B===s.BYTE&&(q=s.RGBA8I),B===s.SHORT&&(q=s.RGBA16I),B===s.INT&&(q=s.RGBA32I)),y===s.RGB&&(B===s.UNSIGNED_SHORT&&fe&&(q=fe.RGB16_EXT),B===s.SHORT&&fe&&(q=fe.RGB16_SNORM_EXT),B===s.UNSIGNED_INT_5_9_9_9_REV&&(q=s.RGB9_E5),B===s.UNSIGNED_INT_10F_11F_11F_REV&&(q=s.R11F_G11F_B10F)),y===s.RGBA){let Z=le?tr:Ye.getTransfer(Q);B===s.FLOAT&&(q=s.RGBA32F),B===s.HALF_FLOAT&&(q=s.RGBA16F),B===s.UNSIGNED_BYTE&&(q=Z===ot?s.SRGB8_ALPHA8:s.RGBA8),B===s.UNSIGNED_SHORT&&fe&&(q=fe.RGBA16_EXT),B===s.SHORT&&fe&&(q=fe.RGBA16_SNORM_EXT),B===s.UNSIGNED_SHORT_4_4_4_4&&(q=s.RGBA4),B===s.UNSIGNED_SHORT_5_5_5_1&&(q=s.RGB5_A1)}return(q===s.R16F||q===s.R32F||q===s.RG16F||q===s.RG32F||q===s.RGBA16F||q===s.RGBA32F)&&e.get(`EXT_color_buffer_float`),q}function g(A,y){let B;return A?y===null||y===On||y===qi?B=s.DEPTH24_STENCIL8:y===Un?B=s.DEPTH32F_STENCIL8:y===Us&&(B=s.DEPTH24_STENCIL8,Ie(`DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.`)):y===null||y===On||y===qi?B=s.DEPTH_COMPONENT24:y===Un?B=s.DEPTH_COMPONENT32F:y===Us&&(B=s.DEPTH_COMPONENT16),B}function M(A,y){return T(A)===!0||A.isFramebufferTexture&&A.minFilter!==Bt&&A.minFilter!==tn?Math.log2(Math.max(y.width,y.height))+1:A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?y.mipmaps.length:1}function N(A){let y=new WeakRef(A);n.get(A).__ref=y,_.add(y),x.register(A,y,y)}function R(A){let y=n.get(A).__ref;y!==void 0&&(_.delete(y),x.unregister(y))}function L(A){V(A.target)}function U(A){I(A.target)}function V(A){A.removeEventListener(`dispose`,L),R(A),$(A),A.isVideoTexture&&h.delete(A),A.isHTMLTexture&&d.delete(A)}function I(A){A.removeEventListener(`dispose`,U),R(A),re(A)}function H(){for(let A of _){let y=A.deref();y!==void 0&&(y.isRenderTarget===!0?I(y):V(y))}_.clear(),d.clear()}function $(A){let y=n.get(A);if(y.__webglInit===void 0)return;let B=A.source,ie=f.get(B);if(ie){let Q=ie[y.__cacheKey];Q.usedTimes--,Q.usedTimes===0&&z(A),Object.keys(ie).length===0&&f.delete(B)}n.remove(A)}function z(A){let y=n.get(A);s.deleteTexture(y.__webglTexture);let B=A.source,ie=f.get(B);delete ie[y.__cacheKey],a.memory.textures--}function re(A){let y=n.get(A);y.__depthDisposeCallback&&y.__depthDisposeCallback();let B=A.depthTexture;if(B&&B.renderTarget===A&&V(B),A.isWebGLCubeRenderTarget)for(let Q=0;Q<6;Q++){if(Array.isArray(y.__webglFramebuffer[Q]))for(let le=0;le<y.__webglFramebuffer[Q].length;le++)s.deleteFramebuffer(y.__webglFramebuffer[Q][le]);else s.deleteFramebuffer(y.__webglFramebuffer[Q]);y.__webglDepthbuffer&&s.deleteRenderbuffer(y.__webglDepthbuffer[Q])}else{if(Array.isArray(y.__webglFramebuffer))for(let Q=0;Q<y.__webglFramebuffer.length;Q++)s.deleteFramebuffer(y.__webglFramebuffer[Q]);else s.deleteFramebuffer(y.__webglFramebuffer);if(y.__webglDepthbuffer&&s.deleteRenderbuffer(y.__webglDepthbuffer),y.__webglMultisampledFramebuffer&&s.deleteFramebuffer(y.__webglMultisampledFramebuffer),y.__webglColorRenderbuffer)for(let Q=0;Q<y.__webglColorRenderbuffer.length;Q++)y.__webglColorRenderbuffer[Q]&&s.deleteRenderbuffer(y.__webglColorRenderbuffer[Q]);y.__webglDepthRenderbuffer&&s.deleteRenderbuffer(y.__webglDepthRenderbuffer)}let ie=A.textures;for(let Q=0,le=ie.length;Q<le;Q++){let fe=n.get(ie[Q]);fe.__webglTexture&&(s.deleteTexture(fe.__webglTexture),a.memory.textures--),n.remove(ie[Q])}n.remove(A)}let X=0;function ee(){X=0}function ne(){return X}function Re(A){X=A}function ze(){let A=X;return A>=i.maxTextures&&Ie(`WebGLTextures: Trying to use `+(A+1)+` texture units while this GPU supports only `+i.maxTextures),X+=1,A}function K(A){let y=[];return y.push(A.wrapS),y.push(A.wrapT),y.push(A.wrapR||0),y.push(A.magFilter),y.push(A.minFilter),y.push(A.anisotropy),y.push(A.internalFormat),y.push(A.format),y.push(A.type),y.push(A.generateMipmaps),y.push(A.mipmapsAutoUpdate),y.push(A.premultiplyAlpha),y.push(A.flipY),y.push(A.unpackAlignment),y.push(A.colorSpace),y.join()}function xe(A,y){let B=n.get(A);if(A.isVideoTexture&&Rt(A),A.isRenderTargetTexture===!1&&A.isExternalTexture!==!0&&A.version>0&&B.__version!==A.version){let ie=A.image;if(ie===null)Ie(`WebGLRenderer: Texture marked for update but no image data found.`);else if(ie.complete===!1)Ie(`WebGLRenderer: Texture marked for update but image is incomplete`);else{Ct(B,A,y);return}}else A.isExternalTexture&&(B.__webglTexture=A.sourceTexture?A.sourceTexture:null);t.bindTexture(s.TEXTURE_2D,B.__webglTexture,s.TEXTURE0+y)}function Te(A,y){let B=n.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&B.__version!==A.version){Ct(B,A,y);return}else A.isExternalTexture&&(B.__webglTexture=A.sourceTexture?A.sourceTexture:null);t.bindTexture(s.TEXTURE_2D_ARRAY,B.__webglTexture,s.TEXTURE0+y)}function Ne(A,y){let B=n.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&B.__version!==A.version){Ct(B,A,y);return}t.bindTexture(s.TEXTURE_3D,B.__webglTexture,s.TEXTURE0+y)}function ye(A,y){let B=n.get(A);if(A.version>0&&B.__version!==A.version){an(B,A,y);return}t.bindTexture(s.TEXTURE_CUBE_MAP,B.__webglTexture,s.TEXTURE0+y)}let Ge={[yi]:s.REPEAT,[Sn]:s.CLAMP_TO_EDGE,[ka]:s.MIRRORED_REPEAT},Mt={[Bt]:s.NEAREST,[Ru]:s.NEAREST_MIPMAP_NEAREST,[Ir]:s.NEAREST_MIPMAP_LINEAR,[tn]:s.LINEAR,[po]:s.LINEAR_MIPMAP_NEAREST,[li]:s.LINEAR_MIPMAP_LINEAR},Ue={[Lu]:s.NEVER,[Sc]:s.ALWAYS,[Nu]:s.LESS,[vc]:s.LEQUAL,[Ou]:s.EQUAL,[bc]:s.GEQUAL,[Uu]:s.GREATER,[Fu]:s.NOTEQUAL};function lt(A,y){if(y.type===Un&&e.has(`OES_texture_float_linear`)===!1&&(y.magFilter===tn||y.magFilter===po||y.magFilter===Ir||y.magFilter===li||y.minFilter===tn||y.minFilter===po||y.minFilter===Ir||y.minFilter===li)&&Ie(`WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device.`),s.texParameteri(A,s.TEXTURE_WRAP_S,Ge[y.wrapS]),s.texParameteri(A,s.TEXTURE_WRAP_T,Ge[y.wrapT]),(A===s.TEXTURE_3D||A===s.TEXTURE_2D_ARRAY)&&s.texParameteri(A,s.TEXTURE_WRAP_R,Ge[y.wrapR]),s.texParameteri(A,s.TEXTURE_MAG_FILTER,Mt[y.magFilter]),s.texParameteri(A,s.TEXTURE_MIN_FILTER,Mt[y.minFilter]),y.compareFunction&&(s.texParameteri(A,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(A,s.TEXTURE_COMPARE_FUNC,Ue[y.compareFunction])),e.has(`EXT_texture_filter_anisotropic`)===!0){if(y.magFilter===Bt||y.minFilter!==Ir&&y.minFilter!==li||y.type===Un&&e.has(`OES_texture_float_linear`)===!1)return;if(y.anisotropy>1||n.get(y).__currentAnisotropy){let B=e.get(`EXT_texture_filter_anisotropic`);s.texParameterf(A,B.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,i.getMaxAnisotropy())),n.get(y).__currentAnisotropy=y.anisotropy}}}function ut(A,y){let B=!1;A.__webglInit===void 0&&(A.__webglInit=!0,y.addEventListener(`dispose`,L),N(y));let ie=y.source,Q=f.get(ie);Q===void 0&&(Q={},f.set(ie,Q));let le=K(y);if(le!==A.__cacheKey){Q[le]===void 0&&(Q[le]={texture:s.createTexture(),usedTimes:0},a.memory.textures++,B=!0),Q[le].usedTimes++;let fe=Q[A.__cacheKey];fe!==void 0&&(Q[A.__cacheKey].usedTimes--,fe.usedTimes===0&&z(y)),A.__cacheKey=le,A.__webglTexture=Q[le].texture}return B}function $e(A,y,B){return Math.floor(Math.floor(A/B)/y)}function zt(A,y,B,ie){let le=A.updateRanges;if(le.length===0)t.texSubImage2D(s.TEXTURE_2D,0,0,0,y.width,y.height,B,ie,y.data);else{le.sort((C,J)=>C.start-J.start);let fe=0;for(let C=1;C<le.length;C++){let J=le[fe],W=le[C],ue=J.start+J.count,oe=$e(W.start,y.width,4),ce=$e(J.start,y.width,4);W.start<=ue+1&&oe===ce&&$e(W.start+W.count-1,y.width,4)===oe?J.count=Math.max(J.count,W.start+W.count-J.start):(++fe,le[fe]=W)}le.length=fe+1;let q=t.getParameter(s.UNPACK_ROW_LENGTH),Z=t.getParameter(s.UNPACK_SKIP_PIXELS),he=t.getParameter(s.UNPACK_SKIP_ROWS);t.pixelStorei(s.UNPACK_ROW_LENGTH,y.width);for(let C=0,J=le.length;C<J;C++){let W=le[C],ue=Math.floor(W.start/4),oe=Math.ceil(W.count/4),ce=ue%y.width,De=Math.floor(ue/y.width),qe=oe;t.pixelStorei(s.UNPACK_SKIP_PIXELS,ce),t.pixelStorei(s.UNPACK_SKIP_ROWS,De),t.texSubImage2D(s.TEXTURE_2D,0,ce,De,qe,1,B,ie,y.data)}A.clearUpdateRanges(),t.pixelStorei(s.UNPACK_ROW_LENGTH,q),t.pixelStorei(s.UNPACK_SKIP_PIXELS,Z),t.pixelStorei(s.UNPACK_SKIP_ROWS,he)}}function Ct(A,y,B){let ie=s.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(ie=s.TEXTURE_2D_ARRAY),y.isData3DTexture&&(ie=s.TEXTURE_3D);let Q=ut(A,y),le=y.source;t.bindTexture(ie,A.__webglTexture,s.TEXTURE0+B);let fe=n.get(le);if(le.version!==fe.__version||Q===!0){if(t.activeTexture(s.TEXTURE0+B),(typeof ImageBitmap<`u`&&y.image instanceof ImageBitmap)===!1){let ae=Ye.getPrimaries(Ye.workingColorSpace),Le=y.colorSpace===hi?null:Ye.getPrimaries(y.colorSpace),Ve=y.colorSpace===hi||ae===Le?s.NONE:s.BROWSER_DEFAULT_WEBGL;t.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,y.flipY),t.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),t.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ve)}t.pixelStorei(s.UNPACK_ALIGNMENT,y.unpackAlignment);let Z=v(y.image,!1,i.maxTextureSize);Z=Oe(y,Z);let he=r.convert(y.format,y.colorSpace),C=r.convert(y.type),J=E(y.internalFormat,he,C,y.normalized,y.colorSpace,y.isVideoTexture);lt(ie,y);let W,ue=y.mipmaps,oe=y.isVideoTexture!==!0,ce=fe.__version===void 0||Q===!0,De=le.dataReady,qe=M(y,Z);if(y.isDepthTexture)J=g(y.format===ci,y.type),ce&&(oe?t.texStorage2D(s.TEXTURE_2D,1,J,Z.width,Z.height):t.texImage2D(s.TEXTURE_2D,0,J,Z.width,Z.height,0,he,C,null));else if(y.isDataTexture)if(ue.length>0){oe&&ce&&t.texStorage2D(s.TEXTURE_2D,qe,J,ue[0].width,ue[0].height);for(let ae=0,Le=ue.length;ae<Le;ae++)W=ue[ae],oe?De&&t.texSubImage2D(s.TEXTURE_2D,ae,0,0,W.width,W.height,he,C,W.data):t.texImage2D(s.TEXTURE_2D,ae,J,W.width,W.height,0,he,C,W.data);y.generateMipmaps=!1}else oe?(ce&&t.texStorage2D(s.TEXTURE_2D,qe,J,Z.width,Z.height),De&&zt(y,Z,he,C)):t.texImage2D(s.TEXTURE_2D,0,J,Z.width,Z.height,0,he,C,Z.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){oe&&ce&&t.texStorage3D(s.TEXTURE_2D_ARRAY,qe,J,ue[0].width,ue[0].height,Z.depth);for(let ae=0,Le=ue.length;ae<Le;ae++)if(W=ue[ae],y.format!==Bn)if(he!==null)if(oe){if(De)if(y.layerUpdates.size>0){let Ve=Lc(W.width,W.height,y.format,y.type);for(let ge of y.layerUpdates){let ct=W.data.subarray(ge*Ve/W.data.BYTES_PER_ELEMENT,(ge+1)*Ve/W.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,ae,0,0,ge,W.width,W.height,1,he,ct)}}else t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,ae,0,0,0,W.width,W.height,Z.depth,he,W.data)}else t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,ae,J,W.width,W.height,Z.depth,0,W.data,0,0);else Ie(`WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()`);else oe?De&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,ae,0,0,0,W.width,W.height,Z.depth,he,C,W.data):t.texImage3D(s.TEXTURE_2D_ARRAY,ae,J,W.width,W.height,Z.depth,0,he,C,W.data);y.layerUpdates.size>0&&y.clearLayerUpdates()}else{oe&&ce&&t.texStorage2D(s.TEXTURE_2D,qe,J,ue[0].width,ue[0].height);for(let ae=0,Le=ue.length;ae<Le;ae++)W=ue[ae],y.format!==Bn?he!==null?oe?De&&t.compressedTexSubImage2D(s.TEXTURE_2D,ae,0,0,W.width,W.height,he,W.data):t.compressedTexImage2D(s.TEXTURE_2D,ae,J,W.width,W.height,0,W.data):Ie(`WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()`):oe?De&&t.texSubImage2D(s.TEXTURE_2D,ae,0,0,W.width,W.height,he,C,W.data):t.texImage2D(s.TEXTURE_2D,ae,J,W.width,W.height,0,he,C,W.data)}else if(y.isDataArrayTexture)if(oe){if(ce&&t.texStorage3D(s.TEXTURE_2D_ARRAY,qe,J,Z.width,Z.height,Z.depth),De)if(y.layerUpdates.size>0){let ae=Lc(Z.width,Z.height,y.format,y.type);for(let Le of y.layerUpdates){let Ve=Z.data.subarray(Le*ae/Z.data.BYTES_PER_ELEMENT,(Le+1)*ae/Z.data.BYTES_PER_ELEMENT);t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,Le,Z.width,Z.height,1,he,C,Ve)}y.clearLayerUpdates()}else t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,Z.width,Z.height,Z.depth,he,C,Z.data)}else t.texImage3D(s.TEXTURE_2D_ARRAY,0,J,Z.width,Z.height,Z.depth,0,he,C,Z.data);else if(y.isData3DTexture)oe?(ce&&t.texStorage3D(s.TEXTURE_3D,qe,J,Z.width,Z.height,Z.depth),De&&t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,Z.width,Z.height,Z.depth,he,C,Z.data)):t.texImage3D(s.TEXTURE_3D,0,J,Z.width,Z.height,Z.depth,0,he,C,Z.data);else if(y.isFramebufferTexture){if(ce)if(oe)t.texStorage2D(s.TEXTURE_2D,qe,J,Z.width,Z.height);else{let ae=Z.width,Le=Z.height;for(let Ve=0;Ve<qe;Ve++)t.texImage2D(s.TEXTURE_2D,Ve,J,ae,Le,0,he,C,null),ae>>=1,Le>>=1}}else if(y.isHTMLTexture){if(`texElementImage2D`in s){let ae=s.canvas;if(ae.hasAttribute(`layoutsubtree`)||ae.setAttribute(`layoutsubtree`,`true`),Z.parentNode!==ae){ae.appendChild(Z),d.add(y),ae.onpaint=Le=>{let Ve=Le.changedElements;for(let ge of d)Ve.includes(ge.image)&&(ge.needsUpdate=!0)},ae.requestPaint();return}if(s.texElementImage2D.length===3)s.texElementImage2D(s.TEXTURE_2D,s.RGBA8,Z);else{let Ve=s.RGBA,ge=s.RGBA,ct=s.UNSIGNED_BYTE;s.texElementImage2D(s.TEXTURE_2D,0,Ve,ge,ct,Z)}s.texParameteri(s.TEXTURE_2D,s.TEXTURE_MIN_FILTER,s.LINEAR),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE)}}else if(ue.length>0){if(oe&&ce){let ae=ke(ue[0]);t.texStorage2D(s.TEXTURE_2D,qe,J,ae.width,ae.height)}for(let ae=0,Le=ue.length;ae<Le;ae++)W=ue[ae],oe?De&&t.texSubImage2D(s.TEXTURE_2D,ae,0,0,he,C,W):t.texImage2D(s.TEXTURE_2D,ae,J,he,C,W);y.generateMipmaps=!1}else if(oe){if(ce){let ae=ke(Z);t.texStorage2D(s.TEXTURE_2D,qe,J,ae.width,ae.height)}De&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,he,C,Z)}else t.texImage2D(s.TEXTURE_2D,0,J,he,C,Z);T(y)&&y.mipmapsAutoUpdate===!0&&S(ie),fe.__version=le.version,y.onUpdate&&y.onUpdate(y)}A.__version=y.version}function an(A,y,B){if(y.image.length!==6)return;let ie=ut(A,y),Q=y.source;t.bindTexture(s.TEXTURE_CUBE_MAP,A.__webglTexture,s.TEXTURE0+B);let le=n.get(Q);if(Q.version!==le.__version||ie===!0){t.activeTexture(s.TEXTURE0+B);let fe=Ye.getPrimaries(Ye.workingColorSpace),q=y.colorSpace===hi?null:Ye.getPrimaries(y.colorSpace),Z=y.colorSpace===hi||fe===q?s.NONE:s.BROWSER_DEFAULT_WEBGL;t.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,y.flipY),t.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),t.pixelStorei(s.UNPACK_ALIGNMENT,y.unpackAlignment),t.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Z);let he=y.isCompressedTexture||y.image[0].isCompressedTexture,C=y.image[0]&&y.image[0].isDataTexture,J=[];for(let ge=0;ge<6;ge++)!he&&!C?J[ge]=v(y.image[ge],!0,i.maxCubemapSize):J[ge]=C?y.image[ge].image:y.image[ge],J[ge]=Oe(y,J[ge]);let W=J[0],ue=r.convert(y.format,y.colorSpace),oe=r.convert(y.type),ce=E(y.internalFormat,ue,oe,y.normalized,y.colorSpace),De=y.isVideoTexture!==!0,qe=le.__version===void 0||ie===!0,ae=Q.dataReady,Le=M(y,W);lt(s.TEXTURE_CUBE_MAP,y);let Ve;if(y.isDepthTexture){if(ce=g(y.format===ci,y.type),qe)if(De)t.texStorage2D(s.TEXTURE_CUBE_MAP,1,ce,W.width,W.height);else for(let ge=0;ge<6;ge++)t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0,ce,W.width,W.height,0,ue,oe,null)}else if(he){De&&qe&&t.texStorage2D(s.TEXTURE_CUBE_MAP,Le,ce,W.width,W.height);for(let ge=0;ge<6;ge++){Ve=J[ge].mipmaps;for(let ct=0;ct<Ve.length;ct++){let Ot=Ve[ct];y.format!==Bn?ue!==null?De?ae&&t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ge,ct,0,0,Ot.width,Ot.height,ue,Ot.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ge,ct,ce,Ot.width,Ot.height,0,Ot.data):Ie(`WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()`):De?ae&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ge,ct,0,0,Ot.width,Ot.height,ue,oe,Ot.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ge,ct,ce,Ot.width,Ot.height,0,ue,oe,Ot.data)}}}else{if(Ve=y.mipmaps,De&&qe){Ve.length>0&&Le++;let ge=ke(J[0]);t.texStorage2D(s.TEXTURE_CUBE_MAP,Le,ce,ge.width,ge.height)}for(let ge=0;ge<6;ge++)if(C){De?ae&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0,0,0,J[ge].width,J[ge].height,ue,oe,J[ge].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0,ce,J[ge].width,J[ge].height,0,ue,oe,J[ge].data);for(let ct=0;ct<Ve.length;ct++){let di=Ve[ct].image[ge].image;De?ae&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ge,ct+1,0,0,di.width,di.height,ue,oe,di.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ge,ct+1,ce,di.width,di.height,0,ue,oe,di.data)}}else{De?ae&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0,0,0,ue,oe,J[ge]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0,ce,ue,oe,J[ge]);for(let ct=0;ct<Ve.length;ct++){let Ot=Ve[ct];De?ae&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ge,ct+1,0,0,ue,oe,Ot.image[ge]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ge,ct+1,ce,ue,oe,Ot.image[ge])}}}T(y)&&y.mipmapsAutoUpdate===!0&&S(s.TEXTURE_CUBE_MAP),le.__version=Q.version,y.onUpdate&&y.onUpdate(y)}A.__version=y.version}function vt(A,y,B,ie,Q,le){let fe=r.convert(B.format,B.colorSpace),q=r.convert(B.type),Z=E(B.internalFormat,fe,q,B.normalized,B.colorSpace),he=n.get(y),C=n.get(B);if(C.__renderTarget=y,!he.__hasExternalTextures){let J=Math.max(1,y.width>>le),W=Math.max(1,y.height>>le);Q===s.TEXTURE_3D||Q===s.TEXTURE_2D_ARRAY?t.texImage3D(Q,le,Z,J,W,y.depth,0,fe,q,null):t.texImage2D(Q,le,Z,J,W,0,fe,q,null)}t.bindFramebuffer(s.FRAMEBUFFER,A),me(y)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,ie,Q,C.__webglTexture,0,_t(y)):(Q===s.TEXTURE_2D||Q>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&Q<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,ie,Q,C.__webglTexture,le),t.bindFramebuffer(s.FRAMEBUFFER,null)}function kn(A,y,B){if(s.bindRenderbuffer(s.RENDERBUFFER,A),y.depthBuffer){let ie=y.depthTexture,Q=ie&&ie.isDepthTexture?ie.type:null,le=g(y.stencilBuffer,Q),fe=y.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;me(y)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,_t(y),le,y.width,y.height):B?s.renderbufferStorageMultisample(s.RENDERBUFFER,_t(y),le,y.width,y.height):s.renderbufferStorage(s.RENDERBUFFER,le,y.width,y.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,fe,s.RENDERBUFFER,A)}else{let ie=y.textures;for(let Q=0;Q<ie.length;Q++){let le=ie[Q],fe=r.convert(le.format,le.colorSpace),q=r.convert(le.type),Z=E(le.internalFormat,fe,q,le.normalized,le.colorSpace);me(y)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,_t(y),Z,y.width,y.height):B?s.renderbufferStorageMultisample(s.RENDERBUFFER,_t(y),Z,y.width,y.height):s.renderbufferStorage(s.RENDERBUFFER,Z,y.width,y.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Nt(A,y,B){let ie=y.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(s.FRAMEBUFFER,A),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error(`THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.`);let Q=n.get(y.depthTexture);Q.__renderTarget=y;let le=ie?y.depthTexture.image[0]:y.depthTexture.image;(!Q.__webglTexture||le.width!==y.width||le.height!==y.height)&&(le.width=y.width,le.height=y.height,y.depthTexture.needsUpdate=!0),ie?ye(y.depthTexture,0):xe(y.depthTexture,0);let fe=Q.__webglTexture,q=_t(y),Z=ie?s.TEXTURE_CUBE_MAP_POSITIVE_X+B:s.TEXTURE_2D,he=y.depthTexture.format===ci?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;if(y.depthTexture.format===ii)me(y)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,he,Z,fe,0,q):s.framebufferTexture2D(s.FRAMEBUFFER,he,Z,fe,0);else if(y.depthTexture.format===ci)me(y)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,he,Z,fe,0,q):s.framebufferTexture2D(s.FRAMEBUFFER,he,Z,fe,0);else throw new Error(`THREE.WebGLTextures: Unknown depthTexture format.`)}function gn(A){let y=n.get(A),B=A.isWebGLCubeRenderTarget===!0;if(y.__boundDepthTexture!==A.depthTexture){let ie=A.depthTexture;if(y.__depthDisposeCallback&&y.__depthDisposeCallback(),ie){let Q=()=>{delete y.__boundDepthTexture,delete y.__depthDisposeCallback,ie.removeEventListener(`dispose`,Q)};ie.addEventListener(`dispose`,Q),y.__depthDisposeCallback=Q}y.__boundDepthTexture=ie}if(A.depthTexture&&!y.__autoAllocateDepthBuffer)if(B)for(let ie=0;ie<6;ie++)Nt(y.__webglFramebuffer[ie],A,ie);else A.texture.mipmaps.length>0?Nt(y.__webglFramebuffer[0],A,0):Nt(y.__webglFramebuffer,A,0);else if(B){y.__webglDepthbuffer=[];for(let ie=0;ie<6;ie++)if(t.bindFramebuffer(s.FRAMEBUFFER,y.__webglFramebuffer[ie]),y.__webglDepthbuffer[ie]===void 0)y.__webglDepthbuffer[ie]=s.createRenderbuffer(),kn(y.__webglDepthbuffer[ie],A,!1);else{let Q=A.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,le=y.__webglDepthbuffer[ie];s.bindRenderbuffer(s.RENDERBUFFER,le),s.framebufferRenderbuffer(s.FRAMEBUFFER,Q,s.RENDERBUFFER,le)}}else if(A.texture.mipmaps.length>0?t.bindFramebuffer(s.FRAMEBUFFER,y.__webglFramebuffer[0]):t.bindFramebuffer(s.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer===void 0)y.__webglDepthbuffer=s.createRenderbuffer(),kn(y.__webglDepthbuffer,A,!1);else{let Q=A.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,le=y.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,le),s.framebufferRenderbuffer(s.FRAMEBUFFER,Q,s.RENDERBUFFER,le)}t.bindFramebuffer(s.FRAMEBUFFER,null)}function _n(A,y,B){let ie=n.get(A);y!==void 0&&vt(ie.__webglFramebuffer,A,A.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),B!==void 0&&gn(A)}function xn(A){let y=A.texture,B=n.get(A),ie=n.get(y);A.addEventListener(`dispose`,U),N(A);let Q=A.textures,le=A.isWebGLCubeRenderTarget===!0,fe=Q.length>1;if(fe||(ie.__webglTexture===void 0&&(ie.__webglTexture=s.createTexture()),ie.__version=y.version,a.memory.textures++),le){B.__webglFramebuffer=[];for(let q=0;q<6;q++)if(y.mipmaps.length>0){B.__webglFramebuffer[q]=[];for(let Z=0;Z<y.mipmaps.length;Z++)B.__webglFramebuffer[q][Z]=s.createFramebuffer()}else B.__webglFramebuffer[q]=s.createFramebuffer()}else{if(y.mipmaps.length>0){B.__webglFramebuffer=[];for(let q=0;q<y.mipmaps.length;q++)B.__webglFramebuffer[q]=s.createFramebuffer()}else B.__webglFramebuffer=s.createFramebuffer();if(fe)for(let q=0,Z=Q.length;q<Z;q++){let he=n.get(Q[q]);he.__webglTexture===void 0&&(he.__webglTexture=s.createTexture(),a.memory.textures++)}if(A.samples>0&&me(A)===!1){B.__webglMultisampledFramebuffer=s.createFramebuffer(),B.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let q=0;q<Q.length;q++){let Z=Q[q];B.__webglColorRenderbuffer[q]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,B.__webglColorRenderbuffer[q]);let he=r.convert(Z.format,Z.colorSpace),C=r.convert(Z.type),J=E(Z.internalFormat,he,C,Z.normalized,Z.colorSpace,A.isXRRenderTarget===!0),W=_t(A);s.renderbufferStorageMultisample(s.RENDERBUFFER,W,J,A.width,A.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+q,s.RENDERBUFFER,B.__webglColorRenderbuffer[q])}s.bindRenderbuffer(s.RENDERBUFFER,null),A.depthBuffer&&(B.__webglDepthRenderbuffer=s.createRenderbuffer(),kn(B.__webglDepthRenderbuffer,A,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(le){t.bindTexture(s.TEXTURE_CUBE_MAP,ie.__webglTexture),lt(s.TEXTURE_CUBE_MAP,y);for(let q=0;q<6;q++)if(y.mipmaps.length>0)for(let Z=0;Z<y.mipmaps.length;Z++)vt(B.__webglFramebuffer[q][Z],A,y,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+q,Z);else vt(B.__webglFramebuffer[q],A,y,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+q,0);T(y)?S(s.TEXTURE_CUBE_MAP):y.mipmaps.length>0&&s.texParameteri(s.TEXTURE_CUBE_MAP,s.TEXTURE_MAX_LEVEL,y.mipmaps.length-1),t.unbindTexture()}else if(fe){for(let q=0,Z=Q.length;q<Z;q++){let he=Q[q],C=n.get(he),J=s.TEXTURE_2D;(A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(J=A.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(J,C.__webglTexture),lt(J,he),vt(B.__webglFramebuffer,A,he,s.COLOR_ATTACHMENT0+q,J,0),T(he)&&S(J)}t.unbindTexture()}else{let q=s.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(q=A.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(q,ie.__webglTexture),lt(q,y),y.mipmaps.length>0)for(let Z=0;Z<y.mipmaps.length;Z++)vt(B.__webglFramebuffer[Z],A,y,s.COLOR_ATTACHMENT0,q,Z);else vt(B.__webglFramebuffer,A,y,s.COLOR_ATTACHMENT0,q,0);T(y)?S(q):y.mipmaps.length>0&&s.texParameteri(q,s.TEXTURE_MAX_LEVEL,y.mipmaps.length-1),t.unbindTexture()}A.depthBuffer&&gn(A)}function O(A){let y=A.textures;for(let B=0,ie=y.length;B<ie;B++){let Q=y[B];if(T(Q)&&Q.mipmapsAutoUpdate===!0){let le=w(A),fe=n.get(Q).__webglTexture;t.bindTexture(le,fe),S(le),t.unbindTexture()}}}let yn=[];function gt(A){if(A.samples>0){if(me(A)===!1){let y=A.textures,B=A.width,ie=A.height,Q=s.COLOR_BUFFER_BIT,le=A.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,fe=n.get(A),q=y.length>1;if(q)for(let he=0;he<y.length;he++)t.bindFramebuffer(s.FRAMEBUFFER,fe.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+he,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,fe.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+he,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,fe.__webglMultisampledFramebuffer),A.texture.mipmaps.length>0?t.bindFramebuffer(s.DRAW_FRAMEBUFFER,fe.__webglFramebuffer[0]):t.bindFramebuffer(s.DRAW_FRAMEBUFFER,fe.__webglFramebuffer);for(let he=0;he<y.length;he++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(Q|=s.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(Q|=s.STENCIL_BUFFER_BIT)),q){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,fe.__webglColorRenderbuffer[he]);let C=n.get(y[he]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,C,0)}s.blitFramebuffer(0,0,B,ie,0,0,B,ie,Q,s.NEAREST),c===!0&&(yn.length=0,yn.push(s.COLOR_ATTACHMENT0+he),A.depthBuffer&&A.storeMultisampledDepthBuffer===!1&&yn.push(le),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,yn))}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),q)for(let he=0;he<y.length;he++){t.bindFramebuffer(s.FRAMEBUFFER,fe.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+he,s.RENDERBUFFER,fe.__webglColorRenderbuffer[he]);let C=n.get(y[he]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,fe.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+he,s.TEXTURE_2D,C,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,fe.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.storeMultisampledDepthBuffer===!1&&c){let y=A.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[y])}}}function _t(A){return Math.min(i.maxSamples,A.samples)}function me(A){let y=n.get(A);return A.samples>0&&e.has(`WEBGL_multisampled_render_to_texture`)===!0&&y.__useRenderToTexture!==!1}function Rt(A){let y=a.render.frame;h.get(A)!==y&&(h.set(A,y),A.update())}function Oe(A,y){let B=A.colorSpace,ie=A.format,Q=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||B!==er&&B!==hi&&(Ye.getTransfer(B)===ot?(ie!==Bn||Q!==ln)&&Ie(`WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.`):Fe(`WebGLTextures: Unsupported texture color space:`,B)),y}function ke(A){return typeof HTMLImageElement<`u`&&A instanceof HTMLImageElement?(l.width=A.naturalWidth||A.width,l.height=A.naturalHeight||A.height):typeof VideoFrame<`u`&&A instanceof VideoFrame?(l.width=A.displayWidth,l.height=A.displayHeight):(l.width=A.width,l.height=A.height),l}this.allocateTextureUnit=ze,this.resetTextureUnits=ee,this.getTextureUnits=ne,this.setTextureUnits=Re,this.setTexture2D=xe,this.setTexture2DArray=Te,this.setTexture3D=Ne,this.setTextureCube=ye,this.rebindTextures=_n,this.setupRenderTarget=xn,this.updateRenderTargetMipmap=O,this.updateMultisampleRenderTarget=gt,this.setupDepthRenderbuffer=gn,this.setupFrameBufferTexture=vt,this.useMultisampledRTT=me,this.dispose=H}function S_(s,e){function t(n,i=hi){let r,a=Ye.getTransfer(i);if(n===ln)return s.UNSIGNED_BYTE;if(n===go)return s.UNSIGNED_SHORT_4_4_4_4;if(n===_o)return s.UNSIGNED_SHORT_5_5_5_1;if(n===mc)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===gc)return s.UNSIGNED_INT_10F_11F_11F_REV;if(n===fc)return s.BYTE;if(n===pc)return s.SHORT;if(n===Us)return s.UNSIGNED_SHORT;if(n===mo)return s.INT;if(n===On)return s.UNSIGNED_INT;if(n===Un)return s.FLOAT;if(n===Fn)return s.HALF_FLOAT;if(n===_c)return s.ALPHA;if(n===xc)return s.RGB;if(n===Bn)return s.RGBA;if(n===ii)return s.DEPTH_COMPONENT;if(n===ci)return s.DEPTH_STENCIL;if(n===yc)return s.RED;if(n===xo)return s.RED_INTEGER;if(n===Ai)return s.RG;if(n===yo)return s.RG_INTEGER;if(n===vo)return s.RGBA_INTEGER;if(n===Lr||n===Nr||n===Or||n===Ur)if(a===ot)if(r=e.get(`WEBGL_compressed_texture_s3tc_srgb`),r!==null){if(n===Lr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Nr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Or)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Ur)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get(`WEBGL_compressed_texture_s3tc`),r!==null){if(n===Lr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Nr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Or)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Ur)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===bo||n===So||n===Mo||n===Eo)if(r=e.get(`WEBGL_compressed_texture_pvrtc`),r!==null){if(n===bo)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===So)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Mo)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Eo)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===To||n===wo||n===Ao||n===Co||n===Ro||n===Fr||n===Po)if(r=e.get(`WEBGL_compressed_texture_etc`),r!==null){if(n===To||n===wo)return a===ot?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Ao)return a===ot?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===Co)return r.COMPRESSED_R11_EAC;if(n===Ro)return r.COMPRESSED_SIGNED_R11_EAC;if(n===Fr)return r.COMPRESSED_RG11_EAC;if(n===Po)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Do||n===Io||n===Lo||n===No||n===Oo||n===Uo||n===Fo||n===Bo||n===ko||n===zo||n===Ho||n===Go||n===Vo||n===Wo)if(r=e.get(`WEBGL_compressed_texture_astc`),r!==null){if(n===Do)return a===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Io)return a===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Lo)return a===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===No)return a===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Oo)return a===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Uo)return a===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Fo)return a===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Bo)return a===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===ko)return a===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===zo)return a===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Ho)return a===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Go)return a===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Vo)return a===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Wo)return a===ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Xo||n===qo||n===Yo)if(r=e.get(`EXT_texture_compression_bptc`),r!==null){if(n===Xo)return a===ot?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===qo)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Yo)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===jo||n===Zo||n===Br||n===Ko)if(r=e.get(`EXT_texture_compression_rgtc`),r!==null){if(n===jo)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Zo)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Br)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Ko)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===qi?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:t}}var M_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`;var E_=`
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

}`;var Gc=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new ur(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new Hn({vertexShader:M_,fragmentShader:E_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new kt(new pr(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}};var Vc=class extends In{constructor(e,t){super();let n=this,i=null,r=1,a=null,o=`local-floor`,c=1,l=null,h=null,d=null,u=null,f=null,_=null,x=typeof XRWebGLBinding<`u`,p=new Gc,m={},v=t.getContextAttributes(),T=null,S=null,w=[],E=[],g=new Se,M=null,N=null,R=new Yt;R.viewport=new yt;let L=new Yt;L.viewport=new yt;let U=[R,L],V=new co,I=null,H=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(K){let xe=w[K];return xe===void 0&&(xe=new Ss,w[K]=xe),xe.getTargetRaySpace()},this.getControllerGrip=function(K){let xe=w[K];return xe===void 0&&(xe=new Ss,w[K]=xe),xe.getGripSpace()},this.getHand=function(K){let xe=w[K];return xe===void 0&&(xe=new Ss,w[K]=xe),xe.getHandSpace()};function $(K){let xe=E.indexOf(K.inputSource);if(xe===-1)return;let Te=w[xe];Te!==void 0&&(Te.update(K.inputSource,K.frame,l||a),Te.dispatchEvent({type:K.type,data:K.inputSource}))}function z(){i.removeEventListener(`select`,$),i.removeEventListener(`selectstart`,$),i.removeEventListener(`selectend`,$),i.removeEventListener(`squeeze`,$),i.removeEventListener(`squeezestart`,$),i.removeEventListener(`squeezeend`,$),i.removeEventListener(`end`,z),i.removeEventListener(`inputsourceschange`,re);for(let K=0;K<w.length;K++){let xe=E[K];xe!==null&&(E[K]=null,w[K].disconnect(xe))}I=null,H=null,p.reset();for(let K in m)delete m[K];if(e.setRenderTarget(T),f=null,u=null,d=null,i=null,S=null,ze.stop(),n.isPresenting=!1,e.setPixelRatio(M),e.setSize(g.width,g.height,!1),N!==null){let K=N.camera;K.fov=N.fov,K.zoom=N.zoom,K.updateProjectionMatrix(),N=null}n.dispatchEvent({type:`sessionend`})}this.setFramebufferScaleFactor=function(K){r=K,n.isPresenting===!0&&Ie(`WebXRManager: Cannot change framebuffer scale while presenting.`)},this.setReferenceSpaceType=function(K){o=K,n.isPresenting===!0&&Ie(`WebXRManager: Cannot change reference space type while presenting.`)},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(K){l=K},this.getBaseLayer=function(){return u!==null?u:f},this.getBinding=function(){return d===null&&x&&(d=new XRWebGLBinding(i,t)),d},this.getFrame=function(){return _},this.getSession=function(){return i},this.setSession=async function(K){if(i=K,i!==null){if(T=e.getRenderTarget(),i.addEventListener(`select`,$),i.addEventListener(`selectstart`,$),i.addEventListener(`selectend`,$),i.addEventListener(`squeeze`,$),i.addEventListener(`squeezestart`,$),i.addEventListener(`squeezeend`,$),i.addEventListener(`end`,z),i.addEventListener(`inputsourceschange`,re),v.xrCompatible!==!0&&await t.makeXRCompatible(),M=e.getPixelRatio(),e.getSize(g),x&&`createProjectionLayer`in XRWebGLBinding.prototype){let Te=null,Ne=null,ye=null;v.depth&&(ye=v.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Te=v.stencil?ci:ii,Ne=v.stencil?qi:On);let Ge={colorFormat:t.RGBA8,depthFormat:ye,scaleFactor:r};d=this.getBinding(),u=d.createProjectionLayer(Ge),i.updateRenderState({layers:[u]}),e.setPixelRatio(1),e.setSize(u.textureWidth,u.textureHeight,!1),S=new fn(u.textureWidth,u.textureHeight,{format:Bn,type:ln,depthTexture:new ri(u.textureWidth,u.textureHeight,Ne,void 0,void 0,void 0,void 0,void 0,void 0,Te),stencilBuffer:v.stencil,colorSpace:e.outputColorSpace,samples:v.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}else{let Te={antialias:v.antialias,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(i,t,Te),i.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),S=new fn(f.framebufferWidth,f.framebufferHeight,{format:Bn,type:ln,colorSpace:e.outputColorSpace,stencilBuffer:v.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await i.requestReferenceSpace(o),ze.setContext(i),ze.start(),n.isPresenting=!0,n.dispatchEvent({type:`sessionstart`})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return p.getDepthTexture()};function re(K){for(let xe=0;xe<K.removed.length;xe++){let Te=K.removed[xe],Ne=E.indexOf(Te);Ne>=0&&(E[Ne]=null,w[Ne].disconnect(Te))}for(let xe=0;xe<K.added.length;xe++){let Te=K.added[xe],Ne=E.indexOf(Te);if(Ne===-1){for(let Ge=0;Ge<w.length;Ge++)if(Ge>=E.length){E.push(Te),Ne=Ge;break}else if(E[Ge]===null){E[Ge]=Te,Ne=Ge;break}if(Ne===-1)break}let ye=w[Ne];ye&&ye.connect(Te)}}function X(K,xe){xe===null?K.matrixWorld.copy(K.matrix):K.matrixWorld.multiplyMatrices(xe.matrixWorld,K.matrix),K.matrixWorldInverse.copy(K.matrixWorld).invert()}this.updateCamera=function(K){if(i===null)return;let xe=K.near,Te=K.far;p.texture!==null&&(p.depthNear>0&&(xe=p.depthNear),p.depthFar>0&&(Te=p.depthFar)),V.near=L.near=R.near=xe,V.far=L.far=R.far=Te,(I!==V.near||H!==V.far)&&(i.updateRenderState({depthNear:V.near,depthFar:V.far}),I=V.near,H=V.far),V.layers.mask=K.layers.mask|6,R.layers.mask=V.layers.mask&-5,L.layers.mask=V.layers.mask&-3;let Ne=K.parent,ye=V.cameras;X(V,Ne);for(let Ge=0;Ge<ye.length;Ge++)X(ye[Ge],Ne);V.projectionMatrix.copy(R.projectionMatrix),V.projectionMatrixInverse.copy(R.projectionMatrixInverse),N===null&&K.isPerspectiveCamera&&(N={camera:K,fov:K.fov,zoom:K.zoom}),ee(K,V,Ne)};function ee(K,xe,Te){Te===null?K.matrix.copy(xe.matrixWorld):(K.matrix.copy(Te.matrixWorld),K.matrix.invert(),K.matrix.multiply(xe.matrixWorld)),K.matrix.decompose(K.position,K.quaternion,K.scale),K.updateMatrixWorld(!0),K.projectionMatrix.copy(xe.projectionMatrix),K.projectionMatrixInverse.copy(xe.projectionMatrixInverse),K.isPerspectiveCamera&&(K.fov=ys*2*Math.atan(1/K.projectionMatrix.elements[5]),K.zoom=1)}this.getCamera=function(){return V},this.getFoveation=function(){if(!(u===null&&f===null))return c},this.setFoveation=function(K){c=K,u!==null&&(u.fixedFoveation=K),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=K)},this.hasDepthSensing=function(){return p.texture!==null},this.getDepthSensingMesh=function(){return p.getMesh(V)},this.getCameraTexture=function(K){return m[K]};let ne=null;function Re(K,xe){if(h=xe.getViewerPose(l||a),_=xe,h!==null){let Te=h.views;f!==null&&(e.setRenderTargetFramebuffer(S,f.framebuffer),e.setRenderTarget(S));let Ne=!1;Te.length!==V.cameras.length&&(V.cameras.length=0,Ne=!0);for(let Ue=0;Ue<Te.length;Ue++){let lt=Te[Ue],ut=null;if(f!==null)ut=f.getViewport(lt);else{let zt=d.getViewSubImage(u,lt);ut=zt.viewport,Ue===0&&(e.setRenderTargetTextures(S,zt.colorTexture,zt.depthStencilTexture),e.setRenderTarget(S))}let $e=U[Ue];$e===void 0&&($e=new Yt,$e.layers.enable(Ue),$e.viewport=new yt,U[Ue]=$e),$e.matrix.fromArray(lt.transform.matrix),$e.matrix.decompose($e.position,$e.quaternion,$e.scale),$e.projectionMatrix.fromArray(lt.projectionMatrix),$e.projectionMatrixInverse.copy($e.projectionMatrix).invert(),$e.viewport.set(ut.x,ut.y,ut.width,ut.height),Ue===0&&(V.matrix.copy($e.matrix),V.matrix.decompose(V.position,V.quaternion,V.scale)),Ne===!0&&V.cameras.push($e)}let ye=i.enabledFeatures;if(ye&&ye.includes(`depth-sensing`)&&i.depthUsage==`gpu-optimized`&&x){d=n.getBinding();let Ue=d.getDepthInformation(Te[0]);Ue&&Ue.isValid&&Ue.texture&&p.init(Ue,i.renderState)}if(ye&&ye.includes(`camera-access`)&&x){e.state.unbindTexture(),d=n.getBinding();for(let Ue=0;Ue<Te.length;Ue++){let lt=Te[Ue].camera;if(lt){let ut=m[lt];ut||(ut=new ur,m[lt]=ut);let $e=d.getCameraImage(lt);ut.sourceTexture=$e}}}}for(let Te=0;Te<w.length;Te++){let Ne=E[Te],ye=w[Te];Ne!==null&&ye!==void 0&&ye.update(Ne,xe,l||a)}ne&&ne(K,xe),xe.detectedPlanes&&n.dispatchEvent({type:`planesdetected`,data:xe}),_=null}let ze=new fd;ze.setAnimationLoop(Re),this.setAnimationLoop=function(K){ne=K},this.dispose=function(){}}};var T_=new ht;var Md=new Be;Md.set(-1,0,0,0,1,0,0,0,1);function w_(s,e){function t(p,m){p.matrixAutoUpdate===!0&&p.updateMatrix(),m.value.copy(p.matrix)}function n(p,m){m.color.getRGB(p.fogColor.value,Pc(s)),m.isFog?(p.fogNear.value=m.near,p.fogFar.value=m.far):m.isFogExp2&&(p.fogDensity.value=m.density)}function i(p,m,v,T,S){m.isNodeMaterial?m.uniformsNeedUpdate=!1:m.isMeshBasicMaterial?r(p,m):m.isMeshLambertMaterial?(r(p,m),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)):m.isMeshToonMaterial?(r(p,m),d(p,m)):m.isMeshPhongMaterial?(r(p,m),h(p,m),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)):m.isMeshStandardMaterial?(r(p,m),u(p,m),m.isMeshPhysicalMaterial&&f(p,m,S)):m.isMeshMatcapMaterial?(r(p,m),_(p,m)):m.isMeshDepthMaterial?r(p,m):m.isMeshDistanceMaterial?(r(p,m),x(p,m)):m.isMeshNormalMaterial?r(p,m):m.isLineBasicMaterial?(a(p,m),m.isLineDashedMaterial&&o(p,m)):m.isPointsMaterial?c(p,m,v,T):m.isSpriteMaterial?l(p,m):m.isShadowMaterial?(p.color.value.copy(m.color),p.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(p,m){p.opacity.value=m.opacity,m.color&&p.diffuse.value.copy(m.color),m.emissive&&p.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(p.map.value=m.map,t(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.bumpMap&&(p.bumpMap.value=m.bumpMap,t(m.bumpMap,p.bumpMapTransform),p.bumpScale.value=m.bumpScale,m.side===rn&&(p.bumpScale.value*=-1)),m.normalMap&&(p.normalMap.value=m.normalMap,t(m.normalMap,p.normalMapTransform),p.normalScale.value.copy(m.normalScale),m.side===rn&&p.normalScale.value.negate()),m.displacementMap&&(p.displacementMap.value=m.displacementMap,t(m.displacementMap,p.displacementMapTransform),p.displacementScale.value=m.displacementScale,p.displacementBias.value=m.displacementBias),m.emissiveMap&&(p.emissiveMap.value=m.emissiveMap,t(m.emissiveMap,p.emissiveMapTransform)),m.specularMap&&(p.specularMap.value=m.specularMap,t(m.specularMap,p.specularMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest);let v=e.get(m),T=v.envMap,S=v.envMapRotation;T&&(p.envMap.value=T,p.envMapRotation.value.setFromMatrix4(T_.makeRotationFromEuler(S)).transpose(),T.isCubeTexture&&T.isRenderTargetTexture===!1&&p.envMapRotation.value.premultiply(Md),p.reflectivity.value=m.reflectivity,p.ior.value=m.ior,p.refractionRatio.value=m.refractionRatio),m.lightMap&&(p.lightMap.value=m.lightMap,p.lightMapIntensity.value=m.lightMapIntensity,t(m.lightMap,p.lightMapTransform)),m.aoMap&&(p.aoMap.value=m.aoMap,p.aoMapIntensity.value=m.aoMapIntensity,t(m.aoMap,p.aoMapTransform))}function a(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,m.map&&(p.map.value=m.map,t(m.map,p.mapTransform))}function o(p,m){p.dashSize.value=m.dashSize,p.totalSize.value=m.dashSize+m.gapSize,p.scale.value=m.scale}function c(p,m,v,T){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.size.value=m.size*v,p.scale.value=T*.5,m.map&&(p.map.value=m.map,t(m.map,p.uvTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function l(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.rotation.value=m.rotation,m.map&&(p.map.value=m.map,t(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function h(p,m){p.specular.value.copy(m.specular),p.shininess.value=Math.max(m.shininess,1e-4)}function d(p,m){m.gradientMap&&(p.gradientMap.value=m.gradientMap)}function u(p,m){p.metalness.value=m.metalness,m.metalnessMap&&(p.metalnessMap.value=m.metalnessMap,t(m.metalnessMap,p.metalnessMapTransform)),p.roughness.value=m.roughness,m.roughnessMap&&(p.roughnessMap.value=m.roughnessMap,t(m.roughnessMap,p.roughnessMapTransform)),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)}function f(p,m,v){p.ior.value=m.ior,m.diffuseRoughness>0&&(p.diffuseRoughness.value=m.diffuseRoughness,m.diffuseRoughnessMap&&(p.diffuseRoughnessMap.value=m.diffuseRoughnessMap,t(m.diffuseRoughnessMap,p.diffuseRoughnessMapTransform))),m.sheen>0&&(p.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),p.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(p.sheenColorMap.value=m.sheenColorMap,t(m.sheenColorMap,p.sheenColorMapTransform)),m.sheenRoughnessMap&&(p.sheenRoughnessMap.value=m.sheenRoughnessMap,t(m.sheenRoughnessMap,p.sheenRoughnessMapTransform))),m.clearcoat>0&&(p.clearcoat.value=m.clearcoat,p.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(p.clearcoatMap.value=m.clearcoatMap,t(m.clearcoatMap,p.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,t(m.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(p.clearcoatNormalMap.value=m.clearcoatNormalMap,t(m.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===rn&&p.clearcoatNormalScale.value.negate())),m.dispersion>0&&(p.dispersion.value=m.dispersion),m.retroreflectivity>0&&(p.retroreflectivity.value=m.retroreflectivity),m.iridescence>0&&(p.iridescence.value=m.iridescence,p.iridescenceIOR.value=m.iridescenceIOR,p.iridescenceThicknessMinimum.value=m.iridescenceThicknessMinimum,p.iridescenceThicknessMaximum.value=m.iridescenceThicknessMaximum,m.iridescenceMap&&(p.iridescenceMap.value=m.iridescenceMap,t(m.iridescenceMap,p.iridescenceMapTransform)),m.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=m.iridescenceThicknessMap,t(m.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),m.transmission>0&&(p.transmission.value=m.transmission,p.transmissionSamplerMap.value=v.texture,p.transmissionSamplerSize.value.set(v.width,v.height),m.transmissionMap&&(p.transmissionMap.value=m.transmissionMap,t(m.transmissionMap,p.transmissionMapTransform)),p.thickness.value=m.thickness,m.thicknessMap&&(p.thicknessMap.value=m.thicknessMap,t(m.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=m.attenuationDistance,p.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(p.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(p.anisotropyMap.value=m.anisotropyMap,t(m.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=m.specularIntensity,p.specularColor.value.copy(m.specularColor),m.specularColorMap&&(p.specularColorMap.value=m.specularColorMap,t(m.specularColorMap,p.specularColorMapTransform)),m.specularIntensityMap&&(p.specularIntensityMap.value=m.specularIntensityMap,t(m.specularIntensityMap,p.specularIntensityMapTransform))}function _(p,m){m.matcap&&(p.matcap.value=m.matcap)}function x(p,m){let v=e.get(m).light;p.referencePosition.value.setFromMatrixPosition(v.matrixWorld),p.nearDistance.value=v.shadow.camera.near,p.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function A_(s,e,t,n){let i={},r={};function a(v,T){let S=T.program;n.uniformBlockBinding(v,S,i[v.id])}function o(v,T){let S=i[v.id];S===void 0&&(_(v),S=c(v),i[v.id]=S,v.addEventListener(`dispose`,p));let w=T.program;n.updateUBOMapping(v,w);let E=e.render.frame;r[v.id]!==E&&(l(v),r[v.id]=E)}function c(v){let T=s.createBuffer(),S=v.__size,w=v.usage;return s.bindBuffer(s.UNIFORM_BUFFER,T),s.bufferData(s.UNIFORM_BUFFER,S,w),s.bindBuffer(s.UNIFORM_BUFFER,null),T}function l(v){let T=i[v.id],S=v.uniforms,w=v.__cache;s.bindBuffer(s.UNIFORM_BUFFER,T);for(let E=0,g=S.length;E<g;E++){let M=S[E];if(Array.isArray(M))for(let N=0,R=M.length;N<R;N++)h(M[N],E,N,w);else h(M,E,0,w)}s.bindBuffer(s.UNIFORM_BUFFER,null)}function h(v,T,S,w){if(u(v,T,S,w)===!0){let E=v.__offset,g=v.value;if(Array.isArray(g)){let M=0;for(let N=0;N<g.length;N++){let R=g[N],L=x(R,!0);d(R,v.__data,M),M+=L.storage/Float32Array.BYTES_PER_ELEMENT}}else d(g,v.__data,0);s.bufferSubData(s.UNIFORM_BUFFER,E,v.__data)}}function d(v,T,S){typeof v==`number`||typeof v==`boolean`?T[S]=v:v.isMatrix3?(T[S]=v.elements[0],T[S+1]=v.elements[1],T[S+2]=v.elements[2],T[S+3]=0,T[S+4]=v.elements[3],T[S+5]=v.elements[4],T[S+6]=v.elements[5],T[S+7]=0,T[S+8]=v.elements[6],T[S+9]=v.elements[7],T[S+10]=v.elements[8],T[S+11]=0):ArrayBuffer.isView(v)?T.set(v.subarray(0,T.length-S),S):v.toArray(T,S)}function u(v,T,S,w){let E=v.value,g=T+`_`+S;if(Array.isArray(E)){w[g]===void 0&&(w[g]=[]);let M=w[g],N=!1;for(let R=0;R<E.length;R++)f(E[R],M,R)===!0&&(N=!0);return N}return f(E,w,g)}function f(v,T,S){if(T[S]===void 0)return typeof v==`number`||typeof v==`boolean`?T[S]=v:ArrayBuffer.isView(v)?T[S]=v.slice():T[S]=v.clone(),!0;{let w=T[S];if(typeof v==`number`||typeof v==`boolean`){if(w!==v)return T[S]=v,!0}else{if(ArrayBuffer.isView(v))return!0;if(w.equals(v)===!1)return w.copy(v),!0}}return!1}function _(v){let T=v.uniforms,S=0,w=16;for(let g=0,M=T.length;g<M;g++){let N=Array.isArray(T[g])?T[g]:[T[g]];for(let R=0,L=N.length;R<L;R++){let U=N[R],V=Array.isArray(U.value)?U.value:[U.value],I=Array.isArray(T[g])||Array.isArray(U.value),H=S;for(let z=0,re=V.length;z<re;z++){let X=V[z],ee=x(X,I),ne=S%w,Re=ne%ee.boundary,ze=ne+Re;S+=Re,ze!==0&&w-ze<ee.storage&&(S+=w-ze),z===0&&(H=S),S+=ee.storage}U.__data=new(U.type===`int`?Int32Array:U.type===`uint`?Uint32Array:Float32Array)((S-H)/Float32Array.BYTES_PER_ELEMENT),U.__offset=H}}let E=S%w;return E>0&&(S+=w-E),v.__size=S,v.__cache={},this}function x(v,T){let S={boundary:0,storage:0};return typeof v==`number`||typeof v==`boolean`?(S.boundary=4,S.storage=4):v.isVector2?(S.boundary=8,S.storage=8):v.isVector3||v.isColor?(S.boundary=16,S.storage=12):v.isVector4?(S.boundary=16,S.storage=16):v.isMatrix3?(S.boundary=16,S.storage=48):v.isMatrix4?(S.boundary=16,S.storage=64):v.isTexture?Ie(`WebGLRenderer: Texture samplers can not be part of an uniforms group.`):ArrayBuffer.isView(v)?(S.boundary=16,S.storage=v.byteLength):Ie(`WebGLRenderer: Unsupported uniform value type.`,v),T===!0&&(S.boundary=16,S.storage=Math.ceil(S.storage/16)*16),S}function p(v){let T=v.target;T.removeEventListener(`dispose`,p),s.deleteBuffer(i[T.id]),delete i[T.id],delete r[T.id]}function m(){for(let v in i)s.deleteBuffer(i[v]);i={},r={}}return{bind:a,update:o,dispose:m}}var C_=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);var qn=null;function R_(){return qn===null&&(qn=new Xa(C_,16,16,Ai,Fn),qn.name=`DFG_LUT`,qn.minFilter=tn,qn.magFilter=tn,qn.wrapS=Sn,qn.wrapT=Sn,qn.generateMipmaps=!1,qn.needsUpdate=!0),qn}var nl=class{constructor(e={}){let{canvas:t=Bu(),context:n=null,depth:i=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h=`default`,failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:u=!1,outputBufferType:f=ln}=e;this.isWebGLRenderer=!0;let _;if(n!==null){if(typeof WebGLRenderingContext<`u`&&n instanceof WebGLRenderingContext)throw new Error(`THREE.WebGLRenderer: WebGL 1 is not supported since r163.`);_=n.getContextAttributes().alpha}else _=a;let x=f,p=/* @__PURE__ */ new Set([vo,yo,xo]),m=/* @__PURE__ */ new Set([ln,On,Us,qi,go,_o]),v=/* @__PURE__ */ new Uint32Array(4),T=/* @__PURE__ */ new Int32Array(4),S={textures:[],min:[],max:[],resolution:[]},w=null,E=null,g=[],M=[],N=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Xn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let R=this,L=!1,U=null,V=null,I=null,H=null;this._outputColorSpace=wt;let $=0,z=0,re=null,X=-1,ee=null,ne=new yt,Re=new yt,ze=null,K=new Ce(0),xe=0,Te=t.width,Ne=t.height,ye=1,Ge=null,Mt=null,Ue=new yt(0,0,Te,Ne),lt=new yt(0,0,Te,Ne),ut=!1,$e=new bi,zt=new qa,Ct=!1,an=!1,vt=new ht,kn=new P,Nt=new yt,gn={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},_n=!1;function xn(){return re===null?ye:1}let O=n;function yn(b,D){return t.getContext(b,D)}let gt,_t,me,Rt,Oe,ke,A,y,B,ie,Q,le,fe,q,Z,he,C,J,W,ue,oe,ce,De;try{let b={alpha:!0,depth:i,stencil:r,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:d};if(`setAttribute`in t&&t.setAttribute(`data-engine`,`three.js r187`),t.addEventListener(`webglcontextlost`,Le,!1),t.addEventListener(`webglcontextrestored`,Ve,!1),t.addEventListener(`webglcontextcreationerror`,ge,!1),O===null){let D=`webgl2`;if(O=yn(D,b),O===null)throw yn(D)?/* @__PURE__ */ new Error(`THREE.WebGLRenderer: Error creating WebGL context with your selected attributes.`):/* @__PURE__ */ new Error(`THREE.WebGLRenderer: Error creating WebGL context.`)}qe()}catch(b){throw t.removeEventListener(`webglcontextlost`,Le,!1),t.removeEventListener(`webglcontextrestored`,Ve,!1),t.removeEventListener(`webglcontextcreationerror`,ge,!1),Fe(`WebGLRenderer: `+b.message),b}function qe(){gt=new zg(O),gt.init(),oe=new S_(O,gt),_t=new Rg(O,gt,e,oe),me=new v_(O,gt),_t.reversedDepthBuffer&&u&&me.buffers.depth.setReversed(!0),V=O.createFramebuffer(),I=O.createFramebuffer(),H=O.createFramebuffer(),Rt=new Vg(O),Oe=new a_,ke=new b_(O,gt,me,Oe,_t,oe,Rt),A=new kg(R),y=new Xf(O),ce=new Ag(O,y),B=new Hg(O,y,Rt,ce),ie=new Xg(O,B,y,ce,Rt),J=new Wg(O,_t,ke),Z=new Pg(Oe),Q=new r_(R,A,gt,_t,ce,Z),le=new w_(R,Oe),fe=new l_,q=new p_(gt),C=new wg(R,A,me,ie,_,c),he=new y_(R,ie,_t),De=new A_(O,Rt,_t,me),W=new Cg(O,gt,Rt),ue=new Gg(O,gt,Rt),Rt.programs=Q.programs,R.capabilities=_t,R.extensions=gt,R.properties=Oe,R.renderLists=fe,R.shadowMap=he,R.state=me,R.info=Rt}x!==ln&&(N=new Yg(x,t.width,t.height,o,i,r));let ae=new Vc(R,O);this.xr=ae,this.getContext=function(){return O},this.getContextAttributes=function(){return O.getContextAttributes()},this.forceContextLoss=function(){let b=gt.get(`WEBGL_lose_context`);b&&b.loseContext()},this.forceContextRestore=function(){let b=gt.get(`WEBGL_lose_context`);b&&b.restoreContext()},this.getPixelRatio=function(){return ye},this.setPixelRatio=function(b){b!==void 0&&(ye=b,this.setSize(Te,Ne,!1))},this.getSize=function(b){return b.set(Te,Ne)},this.setSize=function(b,D,G=!0){if(ae.isPresenting){Ie(`WebGLRenderer: Can't change size while VR device is presenting.`);return}Te=b,Ne=D,t.width=Math.floor(b*ye),t.height=Math.floor(D*ye),G===!0&&(t.style.width=b+`px`,t.style.height=D+`px`),N!==null&&N.setSize(t.width,t.height),this.setViewport(0,0,b,D)},this.getDrawingBufferSize=function(b){return b.set(Te*ye,Ne*ye).floor()},this.setDrawingBufferSize=function(b,D,G){Te=b,Ne=D,ye=G,t.width=Math.floor(b*G),t.height=Math.floor(D*G),this.setViewport(0,0,b,D)},this.setEffects=function(b){if(x===ln){Fe(`WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.`);return}if(b){for(let D=0;D<b.length;D++)if(b[D].isOutputPass===!0){Ie(`WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.`);break}}N.setEffects(b||[])},this.getCurrentViewport=function(b){return b.copy(ne)},this.getViewport=function(b){return b.copy(Ue)},this.setViewport=function(b,D,G,F){b.isVector4?Ue.set(b.x,b.y,b.z,b.w):Ue.set(b,D,G,F),me.viewport(ne.copy(Ue).multiplyScalar(xn()).round())},this.getScissor=function(b){return b.copy(lt)},this.setScissor=function(b,D,G,F){b.isVector4?lt.set(b.x,b.y,b.z,b.w):lt.set(b,D,G,F),me.scissor(Re.copy(lt).multiplyScalar(xn()).round())},this.getScissorTest=function(){return ut},this.setScissorTest=function(b){me.setScissorTest(ut=b)},this.setOpaqueSort=function(b){Ge=b},this.setTransparentSort=function(b){Mt=b},this.getClearColor=function(b){return b.copy(C.getClearColor())},this.setClearColor=function(){C.setClearColor(...arguments)},this.getClearAlpha=function(){return C.getClearAlpha()},this.setClearAlpha=function(){C.setClearAlpha(...arguments)},this.clear=function(b=!0,D=!0,G=!0){let F=0;if(b){let k=!1;if(re!==null){let pe=re.texture.format;k=p.has(pe)}if(k){let pe=re.texture.type,Ee=m.has(pe),de=C.getClearColor(),ve=C.getClearAlpha(),Pe=de.r,He=de.g,Qe=de.b;Ee?(v[0]=Pe,v[1]=He,v[2]=Qe,v[3]=ve,O.clearBufferuiv(O.COLOR,0,v)):(T[0]=Pe,T[1]=He,T[2]=Qe,T[3]=ve,O.clearBufferiv(O.COLOR,0,T))}else F|=O.COLOR_BUFFER_BIT}D&&(F|=O.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),G&&(F|=O.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),F!==0&&O.clear(F)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(b){b.setRenderer(this),U=b},this.dispose=function(){t.removeEventListener(`webglcontextlost`,Le,!1),t.removeEventListener(`webglcontextrestored`,Ve,!1),t.removeEventListener(`webglcontextcreationerror`,ge,!1),C.dispose(),fe.dispose(),q.dispose(),ke.dispose(),Oe.dispose(),A.dispose(),ie.dispose(),B.dispose(),ce.dispose(),De.dispose(),Q.dispose(),ae.dispose(),ae.removeEventListener(`sessionstart`,ih),ae.removeEventListener(`sessionend`,sh),Pi.stop()};function Le(b){b.preventDefault(),nr(`WebGLRenderer: Context Lost.`),L=!0}function Ve(){nr(`WebGLRenderer: Context Restored.`),L=!1;let b=Rt.autoReset,D=he.enabled,G=he.autoUpdate,F=he.needsUpdate,k=he.type;qe(),Rt.autoReset=b,he.enabled=D,he.autoUpdate=G,he.needsUpdate=F,he.type=k}function ge(b){Fe(`WebGLRenderer: A WebGL context could not be created. Reason: `,b.statusMessage)}function ct(b){let D=b.target;D.removeEventListener(`dispose`,ct),Ot(D)}function Ot(b){di(b),Oe.remove(b)}function di(b){let D=Oe.get(b).programs;D!==void 0&&(D.forEach(function(G){Q.releaseProgram(G)}),b.isShaderMaterial&&Q.releaseShaderCache(b))}this.renderBufferDirect=function(b,D,G,F,k,pe){D===null&&(D=gn);let Ee=k.isMesh&&k.matrixWorld.determinantAffine()<0,de=Xd(b,D,G,F,k);me.setMaterial(F,Ee);let ve=G.index,Pe=1;if(F.wireframe===!0){if(ve=B.getWireframeAttribute(G),ve===void 0)return;Pe=2}let He=G.drawRange,Qe=G.attributes.position,we=He.start*Pe,et=(He.start+He.count)*Pe;pe!==null&&(we=Math.max(we,pe.start*Pe),et=Math.min(et,(pe.start+pe.count)*Pe)),ve!==null?(we=Math.max(we,0),et=Math.min(et,ve.count)):Qe!=null&&(we=Math.max(we,0),et=Math.min(et,Qe.count));let Et=et-we;if(Et<0||Et===1/0)return;ce.setup(k,F,de,G,ve);let ft,dt=W;if(ve!==null&&(ft=y.get(ve),dt=ue,dt.setIndex(ft)),k.isMesh)F.wireframe===!0?(me.setLineWidth(F.wireframeLinewidth*xn()),dt.setMode(O.LINES)):dt.setMode(O.TRIANGLES);else if(k.isLine){let Vt=F.linewidth;Vt===void 0&&(Vt=1),me.setLineWidth(Vt*xn()),k.isLineSegments?dt.setMode(O.LINES):k.isLineLoop?dt.setMode(O.LINE_LOOP):dt.setMode(O.LINE_STRIP)}else k.isPoints?dt.setMode(O.POINTS):k.isSprite&&dt.setMode(O.TRIANGLES);if(k.isBatchedMesh)if(gt.get(`WEBGL_multi_draw`))dt.renderMultiDraw(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount);else{let Vt=k._multiDrawStarts,Ae=k._multiDrawCounts,Jt=k._multiDrawCount,it=ve?y.get(ve).bytesPerElement:1,Di=Oe.get(F).currentProgram.getUniforms();for(let Wt=0;Wt<Jt;Wt++)Di.setValue(O,`_gl_DrawID`,Wt),dt.render(Vt[Wt]/it,Ae[Wt])}else if(k.isInstancedMesh)dt.renderInstances(we,Et,k.count);else if(G.isInstancedBufferGeometry){let Vt=G._maxInstanceCount!==void 0?G._maxInstanceCount:1/0,Ae=Math.min(G.instanceCount,Vt);dt.renderInstances(we,Et,Ae)}else dt.render(we,Et)};function nh(b,D,G,F){U!==null&&b.isNodeMaterial&&U.setObject(F,b),Ct===!0&&Z.setState(b,G,!1),b.transparent===!0&&b.side===Wn&&b.forceSinglePass===!1?(b.side=rn,b.needsUpdate=!0,Hs(b,D,F),b.side=Vn,b.needsUpdate=!0,Hs(b,D,F),b.side=Wn):Hs(b,D,F)}this.compile=function(b,D,G=null){G===null&&(G=b),U!==null&&U.renderStart(b,D,G),E=q.get(G),E.init(D),M.push(E),G.traverseVisible(function(k){k.isLight&&k.layers.test(D.layers)&&(E.pushLight(k),k.castShadow&&E.pushShadow(k))}),b!==G&&b.traverseVisible(function(k){k.isLight&&k.layers.test(D.layers)&&(E.pushLight(k),k.castShadow&&E.pushShadow(k))}),E.setupLights(),U!==null&&U.updateLights(E.state.lightsArray),an=this.localClippingEnabled,Ct=Z.init(this.clippingPlanes,an),Ct===!0&&Z.setGlobalState(this.clippingPlanes,D),U!==null&&he.render(E.state.shadowsArray,G,D);let F=/* @__PURE__ */ new Set;return b.traverse(function(k){if(!(k.isMesh||k.isPoints||k.isLine||k.isSprite))return;let pe=k.material;if(pe)if(Array.isArray(pe))for(let Ee=0;Ee<pe.length;Ee++){let de=pe[Ee];nh(de,G,D,k),F.add(de)}else nh(pe,G,D,k),F.add(pe)}),E=M.pop(),U!==null&&U.renderEnd(),F},this.compileAsync=function(b,D,G=null){let F=this.compile(b,D,G);return new Promise(k=>{function pe(){if(F.forEach(function(Ee){let ve=Oe.get(Ee).currentProgram;(ve===void 0||ve.isReady())&&F.delete(Ee)}),F.size===0){k(b);return}setTimeout(pe,10)}gt.get(`KHR_parallel_shader_compile`)!==null?pe():setTimeout(pe,10)})};let pl=null;function Vd(b){pl&&pl(b)}function ih(){Pi.stop()}function sh(){Pi.start()}let Pi=new fd;Pi.setAnimationLoop(Vd),typeof self<`u`&&Pi.setContext(self),this.setAnimationLoop=function(b){pl=b,ae.setAnimationLoop(b),b===null?Pi.stop():Pi.start()},ae.addEventListener(`sessionstart`,ih),ae.addEventListener(`sessionend`,sh),this.render=function(b,D){if(D!==void 0&&D.isCamera!==!0){Fe(`WebGLRenderer.render: camera is not an instance of THREE.Camera.`);return}if(L===!0)return;U!==null&&U.renderStart(b,D);let G=ae.enabled===!0&&ae.isPresenting===!0,F=N!==null&&(re===null||G)&&N.begin(R,re);if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),D.parent===null&&D.matrixWorldAutoUpdate===!0&&D.updateMatrixWorld(),ae.enabled===!0&&ae.isPresenting===!0&&(N===null||N.isCompositing()===!1)&&(ae.cameraAutoUpdate===!0&&ae.updateCamera(D),D=ae.getCamera()),b.isScene===!0&&b.onBeforeRender(R,b,D,re),E=q.get(b,M.length),E.init(D),E.state.textureUnits=ke.getTextureUnits(),M.push(E),vt.multiplyMatrices(D.projectionMatrix,D.matrixWorldInverse),D.isArrayCamera?zt.setFromArrayCamera(D):$e.setFromProjectionMatrix(vt,Mn,D.reversedDepth),an=this.localClippingEnabled,Ct=Z.init(this.clippingPlanes,an),w=fe.get(b,g.length),w.init(),g.push(w),this.info.render.frame++,ae.enabled===!0&&ae.isPresenting===!0){let Ee=R.xr.getDepthSensingMesh();Ee!==null&&ml(Ee,D,-1/0,R.sortObjects)}ml(b,D,0,R.sortObjects),w.finish(),U!==null&&U.updateLights(E.state.lightsArray),R.sortObjects===!0&&w.sort(Ge,Mt),_n=ae.enabled===!1||ae.isPresenting===!1||ae.hasDepthSensing()===!1,_n&&C.addToRenderList(w,b),this.info.autoReset===!0&&this.info.reset(),Ct===!0&&Z.beginShadows();let k=E.state.shadowsArray;if(he.render(k,b,D),Ct===!0&&Z.endShadows(),(F&&N.hasRenderPass())===!1){let Ee=w.opaque,de=w.transmissive;if(E.setupLights(),D.isArrayCamera){let ve=D.cameras;if(de.length>0)for(let Pe=0,He=ve.length;Pe<He;Pe++){let Qe=ve[Pe];ah(Ee,de,b,Qe)}_n&&C.render(b);for(let Pe=0,He=ve.length;Pe<He;Pe++){let Qe=ve[Pe];rh(w,b,Qe,Qe.viewport)}}else de.length>0&&ah(Ee,de,b,D),_n&&C.render(b),rh(w,b,D)}re!==null&&z===0&&(ke.updateMultisampleRenderTarget(re),ke.updateRenderTargetMipmap(re)),F&&N.end(R),b.isScene===!0&&b.onAfterRender(R,b,D),ce.resetDefaultState(),X=-1,ee=null,M.pop(),M.length>0?(E=M[M.length-1],ke.setTextureUnits(E.state.textureUnits),Ct===!0&&Z.setGlobalState(R.clippingPlanes,E.state.camera)):E=null,g.pop(),g.length>0?w=g[g.length-1]:w=null,U!==null&&U.renderEnd()};function ml(b,D,G,F){if(b.visible===!1)return;if(b.layers.test(D.layers)){if(b.isGroup)G=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(D);else if(b.isLight)E.pushLight(b),b.castShadow&&E.pushShadow(b);else if(b.isSprite){let Ee=D.isArrayCamera?zt:$e;if(!b.frustumCulled||b.intersectsFrustum(Ee)){F&&Nt.setFromMatrixPosition(b.matrixWorld).applyMatrix4(vt);let de=ie.update(b),ve=b.material;ve.visible&&w.push(b,de,ve,G,Nt.z,null,D)}}else if(b.isMesh||b.isLine||b.isPoints){let Ee=D.isArrayCamera?zt:$e;if(!b.frustumCulled||b.intersectsFrustum(Ee)){let de=ie.update(b),ve=b.material;if(F&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),Nt.copy(b.boundingSphere.center)):(de.boundingSphere===null&&de.computeBoundingSphere(),Nt.copy(de.boundingSphere.center)),Nt.applyMatrix4(b.matrixWorld).applyMatrix4(vt)),Array.isArray(ve)){let Pe=de.groups;for(let He=0,Qe=Pe.length;He<Qe;He++){let we=Pe[He],et=ve[we.materialIndex];et&&et.visible&&w.push(b,de,et,G,Nt.z,we,D)}}else ve.visible&&w.push(b,de,ve,G,Nt.z,null,D)}}}let pe=b.children;for(let Ee=0,de=pe.length;Ee<de;Ee++)ml(pe[Ee],D,G,F)}function rh(b,D,G,F){let{opaque:k,transmissive:pe,transparent:Ee}=b;E.setupLightsView(G),Ct===!0&&Z.setGlobalState(R.clippingPlanes,G),F&&me.viewport(ne.copy(F)),k.length>0&&Yr(k,D,G),pe.length>0&&Yr(pe,D,G),Ee.length>0&&Yr(Ee,D,G),me.buffers.depth.setTest(!0),me.buffers.depth.setMask(!0),me.buffers.color.setMask(!0),me.setPolygonOffset(!1)}function ah(b,D,G,F){if((G.isScene===!0?G.overrideMaterial:null)!==null)return;if(E.state.transmissionRenderTarget[F.id]===void 0){let we=gt.has(`EXT_color_buffer_half_float`)||gt.has(`EXT_color_buffer_float`);E.state.transmissionRenderTarget[F.id]=new fn(1,1,{generateMipmaps:!0,type:we?Fn:ln,minFilter:li,samples:Math.max(4,_t.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Ye.workingColorSpace})}let pe=E.state.transmissionRenderTarget[F.id],Ee=F.viewport||ne;pe.setSize(Ee.z*R.transmissionResolutionScale,Ee.w*R.transmissionResolutionScale);let de=R.getRenderTarget(),ve=R.getActiveCubeFace(),Pe=R.getActiveMipmapLevel();R.setRenderTarget(pe),R.getClearColor(K),xe=R.getClearAlpha(),xe<1&&R.setClearColor(16777215,.5),R.clear(),_n&&C.render(G);let He=R.toneMapping;R.toneMapping=Xn;let Qe=F.viewport;if(F.viewport!==void 0&&(F.viewport=void 0),E.setupLightsView(F),Ct===!0&&Z.setGlobalState(R.clippingPlanes,F),Yr(b,G,F),ke.updateMultisampleRenderTarget(pe),ke.updateRenderTargetMipmap(pe),gt.has(`WEBGL_multisampled_render_to_texture`)===!1){let we=!1;for(let et=0,Et=D.length;et<Et;et++){let{object:dt,geometry:Vt,material:Ae,group:Jt}=D[et];if(Ae.side===Wn&&dt.layers.test(F.layers)){let it=Ae.side;Ae.side=rn,Ae.needsUpdate=!0,oh(dt,G,F,Vt,Ae,Jt),Ae.side=it,Ae.needsUpdate=!0,we=!0}}we===!0&&(ke.updateMultisampleRenderTarget(pe),ke.updateRenderTargetMipmap(pe))}R.setRenderTarget(de,ve,Pe),R.setClearColor(K,xe),Qe!==void 0&&(F.viewport=Qe),R.toneMapping=He}function Yr(b,D,G){let F=D.isScene===!0?D.overrideMaterial:null;for(let k=0,pe=b.length;k<pe;k++){let Ee=b[k],{object:de,geometry:ve,group:Pe}=Ee,He=Ee.material;He.allowOverride===!0&&F!==null&&(He=F),de.layers.test(G.layers)&&oh(de,D,G,ve,He,Pe)}}function oh(b,D,G,F,k,pe){U!==null&&k.isNodeMaterial&&U.setObject(b,k),b.onBeforeRender(R,D,G,F,k,pe),b.modelViewMatrix.multiplyMatrices(G.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),k.onBeforeRender(R,D,G,F,b,pe),k.transparent===!0&&k.side===Wn&&k.forceSinglePass===!1?(k.side=rn,k.needsUpdate=!0,R.renderBufferDirect(G,D,F,k,b,pe),k.side=Vn,k.needsUpdate=!0,R.renderBufferDirect(G,D,F,k,b,pe),k.side=Wn):R.renderBufferDirect(G,D,F,k,b,pe),b.onAfterRender(R,D,G,F,k,pe)}function lh(b){let D=0;for(let G of b)G.texture!==null&&D++;return D}function Hs(b,D,G){D.isScene!==!0&&(D=gn);let F=Oe.get(b),k=E.state.lights,pe=E.state.shadowsArray,Ee=k.state.version,de=Q.getParameters(b,k.state,pe,D,G,E.state.lightProbeGridArray),ve=Q.getProgramCacheKey(de),Pe=F.programs;F.environment=b.isMeshStandardMaterial||b.isMeshLambertMaterial||b.isMeshPhongMaterial?D.environment:null,F.fog=D.fog;let He=b.isMeshStandardMaterial||b.isMeshLambertMaterial&&!b.envMap||b.isMeshPhongMaterial&&!b.envMap;F.envMap=A.get(b.envMap||F.environment,He),F.envMapRotation=F.environment!==null&&b.envMap===null?D.environmentRotation:b.envMapRotation,Pe===void 0&&(b.addEventListener(`dispose`,ct),Pe=/* @__PURE__ */ new Map,F.programs=Pe,F.programVariants=/* @__PURE__ */ new Map);let Qe=Pe.get(ve);if(Qe!==void 0){if(F.currentProgram===Qe&&F.lightsStateVersion===Ee)return hh(b,de),Qe}else de.uniforms=Q.getUniforms(b),U!==null&&b.isNodeMaterial&&U.build(b,G,de),b.onBeforeCompile(de,R),Qe=Q.acquireProgram(de,ve),Pe.set(ve,Qe),F.uniforms=de.uniforms;let we=F.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(we.clippingPlanes=Z.uniform),hh(b,de),F.needsLights=Yd(b),F.lightsStateVersion=Ee,F.needsLights&&(we.ambientLightColor.value=k.state.ambient,we.lightProbe.value=k.state.probe,we.sunLights.value=k.state.sun,we.sunLightShadows.value=k.state.sunShadow,we.directionalLights.value=k.state.directional,we.directionalLightShadows.value=k.state.directionalShadow,we.spotLights.value=k.state.spot,we.spotLightShadows.value=k.state.spotShadow,we.rectAreaLights.value=k.state.rectArea,we.ltc_1.value=k.state.rectAreaLTC1,we.ltc_2.value=k.state.rectAreaLTC2,we.pointLights.value=k.state.point,we.pointLightShadows.value=k.state.pointShadow,we.hemisphereLights.value=k.state.hemi,we.sunShadowMatrix.value=k.state.sunShadowMatrix,we.sunShadowCascade.value=k.state.sunShadowCascade,we.directionalShadowMatrix.value=k.state.directionalShadowMatrix,we.spotLightMatrix.value=k.state.spotLightMatrix,we.spotLightMap.value=k.state.spotLightMap,we.pointShadowMatrix.value=k.state.pointShadowMatrix),F.numLightProbeGrids=lh(E.state.lightProbeGridArray),F.currentProgram=Qe,F.uniformsList=null,Qe}function Wd(b,D,G,F,k){let pe=Oe.get(b),Ee=pe.currentProgram.id+`,`+F+`,`+k,de=pe.programVariants.get(Ee);return de===void 0?(de=Hs(b,D,G),pe.programVariants.set(Ee,de)):(pe.currentProgram=de,pe.uniformsList=null,pe.outputColorSpace=F,pe.toneMapping=k),de}function ch(b){if(b.uniformsList===null){let D=b.currentProgram.getUniforms();b.uniformsList=Fs.seqWithValue(D.seq,b.uniforms)}return b.uniformsList}function hh(b,D){let G=Oe.get(b);G.outputColorSpace=D.outputColorSpace,G.batching=D.batching,G.batchingColor=D.batchingColor,G.instancing=D.instancing,G.instancingColor=D.instancingColor,G.instancingMorph=D.instancingMorph,G.skinning=D.skinning,G.morphTargets=D.morphTargets,G.morphNormals=D.morphNormals,G.morphColors=D.morphColors,G.morphTargetsCount=D.morphTargetsCount,G.numClippingPlanes=D.numClippingPlanes,G.numIntersection=D.numClipIntersection,G.vertexAlphas=D.vertexAlphas,G.vertexTangents=D.vertexTangents,G.toneMapping=D.toneMapping}function Xd(b,D,G,F,k){D.isScene!==!0&&(D=gn),ke.resetTextureUnits();let pe=D.fog,Ee=F.isMeshStandardMaterial||F.isMeshLambertMaterial||F.isMeshPhongMaterial?D.environment:null,de=re===null?R.outputColorSpace:re.isXRRenderTarget===!0?re.texture.colorSpace:Ye.workingColorSpace,ve=F.isMeshStandardMaterial||F.isMeshLambertMaterial&&!F.envMap||F.isMeshPhongMaterial&&!F.envMap,Pe=A.get(F.envMap||Ee,ve),He=F.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,Qe=!!G.attributes.tangent&&(!!F.normalMap||F.anisotropy>0),we=!!G.morphAttributes.position,et=!!G.morphAttributes.normal,Et=!!G.morphAttributes.color,ft=Xn;F.toneMapped&&(re===null||re.isXRRenderTarget===!0)&&(ft=R.toneMapping);let dt=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,Vt=dt!==void 0?dt.length:0,Ae=Oe.get(F),Jt=E.state.lights;if(Ct===!0&&(an===!0||b!==ee)){let bt=b===ee&&F.id===X;Z.setState(F,b,bt)}let it=!1,Di=!1;F.version===Ae.__version?Ae.needsLights&&Ae.lightsStateVersion!==Jt.state.version||k.isBatchedMesh&&Ae.batching===!1||!k.isBatchedMesh&&Ae.batching===!0||k.isBatchedMesh&&Ae.batchingColor===!0&&k._colorsTexture===null||k.isBatchedMesh&&Ae.batchingColor===!1&&k._colorsTexture!==null||k.isInstancedMesh&&Ae.instancing===!1||!k.isInstancedMesh&&Ae.instancing===!0||k.isSkinnedMesh&&Ae.skinning===!1||!k.isSkinnedMesh&&Ae.skinning===!0||k.isInstancedMesh&&Ae.instancingColor===!0&&k.instanceColor===null||k.isInstancedMesh&&Ae.instancingColor===!1&&k.instanceColor!==null||k.isInstancedMesh&&Ae.instancingMorph===!0&&k.morphTexture===null||k.isInstancedMesh&&Ae.instancingMorph===!1&&k.morphTexture!==null||Ae.envMap!==Pe||F.fog===!0&&Ae.fog!==pe||Ae.numClippingPlanes!==void 0&&(Ae.numClippingPlanes!==Z.numPlanes||Ae.numIntersection!==Z.numIntersection)||Ae.vertexAlphas!==He||Ae.vertexTangents!==Qe||Ae.morphTargets!==we||Ae.morphNormals!==et||Ae.morphColors!==Et||Ae.morphTargetsCount!==Vt||Ae.numLightProbeGrids!==lh(E.state.lightProbeGridArray)?it=!0:(Ae.outputColorSpace!==de||Ae.toneMapping!==ft)&&(Di=!0):(it=!0,Ae.__version=F.version);let Wt=Ae.currentProgram;(it===!0||Di===!0)&&(Wt=Di===!0?Wd(F,D,k,de,ft):Hs(F,D,k),U&&F.isNodeMaterial&&U.onUpdateProgram(F,Wt,Ae));let jr=!1,fi=!1,Ii=!1,tt=Wt.getUniforms(),Ht=Ae.uniforms;if(me.useProgram(Wt.program)&&(jr=!0,fi=!0,Ii=!0),F.id!==X&&(X=F.id,fi=!0),jr||ee!==b){me.buffers.depth.getReversed()&&b.reversedDepth!==!0&&(b._reversedDepth=!0,b.updateProjectionMatrix()),tt.setValue(O,`projectionMatrix`,b.projectionMatrix),tt.setValue(O,`viewMatrix`,b.matrixWorldInverse);let Ut=tt.map.cameraPosition;Ut!==void 0&&Ut.setValue(O,kn.setFromMatrixPosition(b.matrixWorld)),_t.logarithmicDepthBuffer&&tt.setValue(O,`logDepthBufFC`,2/(Math.log(b.far+1)/Math.LN2)),(F.isMeshPhongMaterial||F.isMeshToonMaterial||F.isMeshLambertMaterial||F.isMeshBasicMaterial||F.isMeshStandardMaterial||F.isShaderMaterial)&&tt.setValue(O,`isOrthographic`,b.isOrthographicCamera===!0),ee!==b&&(ee=b,fi=!0,Ii=!0)}if(Ae.needsLights&&(Jt.state.sunShadowMap.length>0&&tt.setValue(O,`sunShadowMap`,Jt.state.sunShadowMap,ke),Jt.state.directionalShadowMap.length>0&&tt.setValue(O,`directionalShadowMap`,Jt.state.directionalShadowMap,ke),Jt.state.spotShadowMap.length>0&&tt.setValue(O,`spotShadowMap`,Jt.state.spotShadowMap,ke),Jt.state.pointShadowMap.length>0&&tt.setValue(O,`pointShadowMap`,Jt.state.pointShadowMap,ke)),k.isSkinnedMesh){tt.setOptional(O,k,`bindMatrix`),tt.setOptional(O,k,`bindMatrixInverse`);let bt=k.skeleton;bt&&(bt.boneTexture===null&&bt.computeBoneTexture(),tt.setValue(O,`boneTexture`,bt.boneTexture,ke))}k.isBatchedMesh&&(tt.setOptional(O,k,`batchingTexture`),tt.setValue(O,`batchingTexture`,k._matricesTexture,ke),tt.setOptional(O,k,`batchingIdTexture`),tt.setValue(O,`batchingIdTexture`,k._indirectTexture,ke),tt.setOptional(O,k,`batchingColorTexture`),k._colorsTexture!==null&&tt.setValue(O,`batchingColorTexture`,k._colorsTexture,ke));let An=G.morphAttributes;if((An.position!==void 0||An.normal!==void 0||An.color!==void 0)&&J.update(k,G,Wt),(fi||Ae.receiveShadow!==k.receiveShadow)&&(Ae.receiveShadow=k.receiveShadow,tt.setValue(O,`receiveShadow`,k.receiveShadow)),(F.isMeshStandardMaterial||F.isMeshLambertMaterial||F.isMeshPhongMaterial)&&F.envMap===null&&D.environment!==null&&(Ht.envMapIntensity.value=D.environmentIntensity),Ht.dfgLUT!==void 0&&(Ht.dfgLUT.value=R_()),fi){if(tt.setValue(O,`toneMappingExposure`,R.toneMappingExposure),Ae.needsLights&&qd(Ht,Ii),pe&&F.fog===!0&&le.refreshFogUniforms(Ht,pe),le.refreshMaterialUniforms(Ht,F,ye,Ne,E.state.transmissionRenderTarget[b.id]),Ae.needsLights&&Ae.numLightProbeGrids>0){let bt=S,Ut=0;for(let jn of E.state.lightProbeGridArray)jn.texture!==null&&(bt.textures[Ut]=jn.texture,bt.min[Ut]=jn.boundingBox.min,bt.max[Ut]=jn.boundingBox.max,bt.resolution[Ut]=jn.resolution,Ut++);for(let jn in bt)bt[jn].length=Ut;Ht.probesSH.value=bt.textures,Ht.probesMin.value=bt.min,Ht.probesMax.value=bt.max,Ht.probesResolution.value=bt.resolution}Fs.upload(O,ch(Ae),Ht,ke)}if(F.isShaderMaterial&&F.uniformsNeedUpdate===!0&&(Fs.upload(O,ch(Ae),Ht,ke),F.uniformsNeedUpdate=!1),F.isSpriteMaterial&&tt.setValue(O,`center`,k.center),tt.setValue(O,`modelViewMatrix`,k.modelViewMatrix),tt.setValue(O,`normalMatrix`,k.normalMatrix),tt.setValue(O,`modelMatrix`,k.matrixWorld),F.uniformsGroups!==void 0){let bt=F.uniformsGroups;for(let Ut=0,jn=bt.length;Ut<jn;Ut++){let dh=bt[Ut];De.update(dh,Wt),De.bind(dh,Wt)}}return Wt}function qd(b,D){b.ambientLightColor.needsUpdate=D,b.lightProbe.needsUpdate=D,b.sunLights.needsUpdate=D,b.sunLightShadows.needsUpdate=D,b.directionalLights.needsUpdate=D,b.directionalLightShadows.needsUpdate=D,b.pointLights.needsUpdate=D,b.pointLightShadows.needsUpdate=D,b.spotLights.needsUpdate=D,b.spotLightShadows.needsUpdate=D,b.rectAreaLights.needsUpdate=D,b.hemisphereLights.needsUpdate=D}function Yd(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return $},this.getActiveMipmapLevel=function(){return z},this.getRenderTarget=function(){return re},this.setRenderTargetTextures=function(b,D,G){let F=Oe.get(b);F.__autoAllocateDepthBuffer=b.resolveDepthBuffer===!1,F.__autoAllocateDepthBuffer===!1&&(F.__useRenderToTexture=!1),Oe.get(b.texture).__webglTexture=D,Oe.get(b.depthTexture).__webglTexture=F.__autoAllocateDepthBuffer?void 0:G,F.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(b,D){let G=Oe.get(b);G.__webglFramebuffer=D,G.__useDefaultFramebuffer=D===void 0},this.setRenderTarget=function(b,D=0,G=0){re=b,$=D,z=G;let F=null,k=!1,pe=!1;if(b){let de=Oe.get(b);if(de.__useDefaultFramebuffer!==void 0){me.bindFramebuffer(O.FRAMEBUFFER,de.__webglFramebuffer),ne.copy(b.viewport),Re.copy(b.scissor),ze=b.scissorTest,me.viewport(ne),me.scissor(Re),me.setScissorTest(ze),X=-1;return}else if(de.__webglFramebuffer===void 0)ke.setupRenderTarget(b);else if(de.__hasExternalTextures)ke.rebindTextures(b,Oe.get(b.texture).__webglTexture,Oe.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){let He=b.depthTexture;if(de.__boundDepthTexture!==He){if(He!==null&&Oe.has(He)&&(b.width!==He.image.width||b.height!==He.image.height))throw new Error(`THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.`);ke.setupDepthRenderbuffer(b)}}let ve=b.texture;(ve.isData3DTexture||ve.isDataArrayTexture||ve.isCompressedArrayTexture)&&(pe=!0);let Pe=Oe.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(Pe[D])?F=Pe[D][G]:F=Pe[D],k=!0):b.samples>0&&ke.useMultisampledRTT(b)===!1?F=Oe.get(b).__webglMultisampledFramebuffer:Array.isArray(Pe)?F=Pe[G]:F=Pe,ne.copy(b.viewport),Re.copy(b.scissor),ze=b.scissorTest}else ne.copy(Ue).multiplyScalar(ye).floor(),Re.copy(lt).multiplyScalar(ye).floor(),ze=ut;if(G!==0&&(F=V),me.bindFramebuffer(O.FRAMEBUFFER,F)&&me.drawBuffers(b,F),me.viewport(ne),me.scissor(Re),me.setScissorTest(ze),k){let de=Oe.get(b.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_CUBE_MAP_POSITIVE_X+D,de.__webglTexture,G)}else if(pe){let de=D;for(let ve=0;ve<b.textures.length;ve++){let Pe=Oe.get(b.textures[ve]);O.framebufferTextureLayer(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0+ve,Pe.__webglTexture,G,de)}}else if(b!==null&&G!==0){let de=Oe.get(b.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,de.__webglTexture,G)}X=-1};function uh(b){let D=Oe.get(b);return(D.__readFormat!==b.format||D.__readType!==b.type)&&(D.__readFormat=b.format,D.__readType=b.type,D.__formatReadable=_t.textureFormatReadable(b.format),D.__typeReadable=_t.textureTypeReadable(b.type)),D}this.readRenderTargetPixels=function(b,D,G,F,k,pe,Ee,de=0){if(!(b&&b.isWebGLRenderTarget)){Fe(`WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.`);return}let ve=Oe.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Ee!==void 0&&(ve=ve[Ee],Array.isArray(ve)&&(ve=ve[0])),ve){me.bindFramebuffer(O.FRAMEBUFFER,ve);try{let Pe=b.textures[de],He=Pe.format,Qe=Pe.type;b.textures.length>1&&O.readBuffer(O.COLOR_ATTACHMENT0+de);let we=uh(Pe);if(we.__formatReadable===!1){Fe(`WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.`);return}if(we.__typeReadable===!1){Fe(`WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.`);return}D>=0&&D<=b.width-F&&G>=0&&G<=b.height-k&&O.readPixels(D,G,F,k,oe.convert(He),oe.convert(Qe),pe)}finally{let Pe=re!==null?Oe.get(re).__webglFramebuffer:null;me.bindFramebuffer(O.FRAMEBUFFER,Pe)}}},this.readRenderTargetPixelsAsync=async function(b,D,G,F,k,pe,Ee,de=0){if(!(b&&b.isWebGLRenderTarget))throw new Error(`THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.`);let ve=Oe.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Ee!==void 0&&(ve=ve[Ee],Array.isArray(ve)&&(ve=ve[0])),ve)if(D>=0&&D<=b.width-F&&G>=0&&G<=b.height-k){me.bindFramebuffer(O.FRAMEBUFFER,ve);let Pe=b.textures[de],He=Pe.format,Qe=Pe.type;b.textures.length>1&&O.readBuffer(O.COLOR_ATTACHMENT0+de);let we=uh(Pe);if(we.__formatReadable===!1)throw new Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.`);if(we.__typeReadable===!1)throw new Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.`);let et=O.createBuffer();O.bindBuffer(O.PIXEL_PACK_BUFFER,et),O.bufferData(O.PIXEL_PACK_BUFFER,pe.byteLength,O.STREAM_READ),O.readPixels(D,G,F,k,oe.convert(He),oe.convert(Qe),0),O.bindBuffer(O.PIXEL_PACK_BUFFER,null);let Et=re!==null?Oe.get(re).__webglFramebuffer:null;me.bindFramebuffer(O.FRAMEBUFFER,Et);let ft=O.fenceSync(O.SYNC_GPU_COMMANDS_COMPLETE,0);return O.flush(),await zu(O,ft,4),O.bindBuffer(O.PIXEL_PACK_BUFFER,et),O.getBufferSubData(O.PIXEL_PACK_BUFFER,0,pe),O.bindBuffer(O.PIXEL_PACK_BUFFER,null),O.deleteBuffer(et),O.deleteSync(ft),pe}else throw new Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.`)},this.copyFramebufferToTexture=function(b,D=null,G=0){let F=Math.pow(2,-G),k=Math.floor(b.image.width*F),pe=Math.floor(b.image.height*F),Ee=D!==null?D.x:0,de=D!==null?D.y:0;ke.setTexture2D(b,0),O.copyTexSubImage2D(O.TEXTURE_2D,G,0,0,Ee,de,k,pe),me.unbindTexture()},this.copyTextureToTexture=function(b,D,G=null,F=null,k=0,pe=0){let Ee,de,ve,Pe,He,Qe,we,et,Et,ft=b.isCompressedTexture?b.mipmaps[pe]:b.image;if(G!==null)Ee=G.max.x-G.min.x,de=G.max.y-G.min.y,ve=G.isBox3?G.max.z-G.min.z:1,Pe=G.min.x,He=G.min.y,Qe=G.isBox3?G.min.z:0;else{let tt=Math.pow(2,-k);Ee=Math.floor(ft.width*tt),de=Math.floor(ft.height*tt),b.isDataArrayTexture?ve=ft.depth:b.isData3DTexture?ve=Math.floor(ft.depth*tt):ve=1,Pe=0,He=0,Qe=0}F!==null?(we=F.x,et=F.y,Et=F.z):(we=0,et=0,Et=0);let dt=oe.convert(D.format),Vt=oe.convert(D.type),Ae;D.isData3DTexture?(ke.setTexture3D(D,0),Ae=O.TEXTURE_3D):D.isDataArrayTexture||D.isCompressedArrayTexture?(ke.setTexture2DArray(D,0),Ae=O.TEXTURE_2D_ARRAY):(ke.setTexture2D(D,0),Ae=O.TEXTURE_2D),me.activeTexture(O.TEXTURE0),me.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,D.flipY),me.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,D.premultiplyAlpha),me.pixelStorei(O.UNPACK_ALIGNMENT,D.unpackAlignment);let Jt=me.getParameter(O.UNPACK_ROW_LENGTH),it=me.getParameter(O.UNPACK_IMAGE_HEIGHT),Di=me.getParameter(O.UNPACK_SKIP_PIXELS),Wt=me.getParameter(O.UNPACK_SKIP_ROWS),jr=me.getParameter(O.UNPACK_SKIP_IMAGES);me.pixelStorei(O.UNPACK_ROW_LENGTH,ft.width),me.pixelStorei(O.UNPACK_IMAGE_HEIGHT,ft.height),me.pixelStorei(O.UNPACK_SKIP_PIXELS,Pe),me.pixelStorei(O.UNPACK_SKIP_ROWS,He),me.pixelStorei(O.UNPACK_SKIP_IMAGES,Qe);let fi=b.isDataArrayTexture||b.isData3DTexture,Ii=D.isDataArrayTexture||D.isData3DTexture;if(b.isDepthTexture){let tt=Oe.get(b),Ht=Oe.get(D),An=Oe.get(tt.__renderTarget),bt=Oe.get(Ht.__renderTarget);me.bindFramebuffer(O.READ_FRAMEBUFFER,An.__webglFramebuffer),me.bindFramebuffer(O.DRAW_FRAMEBUFFER,bt.__webglFramebuffer);for(let Ut=0;Ut<ve;Ut++)fi&&(O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,Oe.get(b).__webglTexture,k,Qe+Ut),O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,Oe.get(D).__webglTexture,pe,Et+Ut)),O.blitFramebuffer(Pe,He,Pe+Ee,He+de,we,et,we+Ee,et+de,O.DEPTH_BUFFER_BIT,O.NEAREST);me.bindFramebuffer(O.READ_FRAMEBUFFER,null),me.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else if(k!==0||b.isRenderTargetTexture||Oe.has(b)){let tt=Oe.get(b),Ht=Oe.get(D);me.bindFramebuffer(O.READ_FRAMEBUFFER,I),me.bindFramebuffer(O.DRAW_FRAMEBUFFER,H);for(let An=0;An<ve;An++)fi?O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,tt.__webglTexture,k,Qe+An):O.framebufferTexture2D(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,tt.__webglTexture,k),Ii?O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,Ht.__webglTexture,pe,Et+An):O.framebufferTexture2D(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,Ht.__webglTexture,pe),k!==0?O.blitFramebuffer(Pe,He,Pe+Ee,He+de,we,et,we+Ee,et+de,O.COLOR_BUFFER_BIT,O.NEAREST):Ii?O.copyTexSubImage3D(Ae,pe,we,et,Et+An,Pe,He,Ee,de):O.copyTexSubImage2D(Ae,pe,we,et,Pe,He,Ee,de);me.bindFramebuffer(O.READ_FRAMEBUFFER,null),me.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else Ii?b.isDataTexture||b.isData3DTexture?O.texSubImage3D(Ae,pe,we,et,Et,Ee,de,ve,dt,Vt,ft.data):D.isCompressedArrayTexture?O.compressedTexSubImage3D(Ae,pe,we,et,Et,Ee,de,ve,dt,ft.data):O.texSubImage3D(Ae,pe,we,et,Et,Ee,de,ve,dt,Vt,ft):b.isDataTexture?O.texSubImage2D(O.TEXTURE_2D,pe,we,et,Ee,de,dt,Vt,ft.data):b.isCompressedTexture?O.compressedTexSubImage2D(O.TEXTURE_2D,pe,we,et,ft.width,ft.height,dt,ft.data):O.texSubImage2D(O.TEXTURE_2D,pe,we,et,Ee,de,dt,Vt,ft);me.pixelStorei(O.UNPACK_ROW_LENGTH,Jt),me.pixelStorei(O.UNPACK_IMAGE_HEIGHT,it),me.pixelStorei(O.UNPACK_SKIP_PIXELS,Di),me.pixelStorei(O.UNPACK_SKIP_ROWS,Wt),me.pixelStorei(O.UNPACK_SKIP_IMAGES,jr),pe===0&&D.generateMipmaps===!0&&D.mipmapsAutoUpdate===!0&&O.generateMipmap(Ae),me.unbindTexture()},this.initRenderTarget=function(b){Oe.get(b).__webglFramebuffer===void 0&&ke.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?ke.setTextureCube(b,0):b.isData3DTexture?ke.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?ke.setTexture2DArray(b,0):ke.setTexture2D(b,0),me.unbindTexture()},this.resetState=function(){$=0,z=0,re=null,me.reset(),ce.reset()},typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`observe`,{detail:this}))}get coordinateSystem(){return Mn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=Ye._getDrawingBufferColorSpace(e),t.unpackColorSpace=Ye._getUnpackColorSpace()}};var Ed={type:`change`};var Xc={type:`start`};var wd={type:`end`};var rl=new si;var Td=new Qt;var D_=Math.cos(70*St.DEG2RAD);var Lt=new P;var cn=2*Math.PI;var st={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};var Wc=1e-6;var al=class extends Pr{constructor(e,t=null){super(e,t),this.state=st.NONE,this.target=new P,this.cursor=new P,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:`ArrowLeft`,UP:`ArrowUp`,RIGHT:`ArrowRight`,BOTTOM:`ArrowDown`},this.mouseButtons={LEFT:Gn.ROTATE,MIDDLE:Gn.DOLLY,RIGHT:Gn.PAN},this.touches={ONE:wi.ROTATE,TWO:wi.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle=`auto`,this._domElementKeyEvents=null,this._lastPosition=new P,this._lastQuaternion=new Gt,this._lastTargetPosition=new P,this._quat=new Gt().setFromUnitVectors(e.up,new P(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new oi,this._sphericalDelta=new oi,this._scale=1,this._panOffset=new P,this._rotateStart=new Se,this._rotateEnd=new Se,this._rotateDelta=new Se,this._panStart=new Se,this._panEnd=new Se,this._panDelta=new Se,this._dollyStart=new Se,this._dollyEnd=new Se,this._dollyDelta=new Se,this._dollyDirection=new P,this._mouse=new Se,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=L_.bind(this),this._onPointerDown=I_.bind(this),this._onPointerUp=N_.bind(this),this._onContextMenu=H_.bind(this),this._onMouseWheel=F_.bind(this),this._onKeyDown=B_.bind(this),this._onTouchStart=k_.bind(this),this._onTouchMove=z_.bind(this),this._onMouseDown=O_.bind(this),this._onMouseMove=U_.bind(this),this._interceptControlDown=G_.bind(this),this._interceptControlUp=V_.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}set cursorStyle(e){this._cursorStyle=e,e===`grab`?this.domElement.style.cursor=`grab`:this.domElement.style.cursor=`auto`}get cursorStyle(){return this._cursorStyle}connect(e){super.connect(e),this.domElement.addEventListener(`pointerdown`,this._onPointerDown),this.domElement.addEventListener(`pointercancel`,this._onPointerUp),this.domElement.addEventListener(`contextmenu`,this._onContextMenu),this.domElement.addEventListener(`wheel`,this._onMouseWheel,{passive:!1}),this.domElement.ownerDocument.addEventListener(`keydown`,this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction=`none`}disconnect(){this.state=st.NONE,this.domElement.removeEventListener(`pointerdown`,this._onPointerDown),this.domElement.ownerDocument.removeEventListener(`pointermove`,this._onPointerMove),this.domElement.ownerDocument.removeEventListener(`pointerup`,this._onPointerUp),this.domElement.removeEventListener(`pointercancel`,this._onPointerUp),this.domElement.removeEventListener(`wheel`,this._onMouseWheel),this.domElement.removeEventListener(`contextmenu`,this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.ownerDocument.removeEventListener(`keydown`,this._interceptControlDown,{capture:!0}),this.domElement.ownerDocument.removeEventListener(`keyup`,this._interceptControlUp,{capture:!0}),this._controlActive=!1,this._pointers.length=0,this._pointerPositions={},this.domElement.style.touchAction=``,this.domElement.style.cursor=`auto`}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener(`keydown`,this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener(`keydown`,this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Ed),this.update(),this.state=st.NONE}pan(e,t){this._pan(e,t),this.update()}dollyIn(e){this._dollyIn(e),this.update()}dollyOut(e){this._dollyOut(e),this.update()}rotateLeft(e){this._rotateLeft(e),this.update()}rotateUp(e){this._rotateUp(e),this.update()}update(e=null){let t=this.object.position;Lt.copy(t).sub(this.target),Lt.applyQuaternion(this._quat),this._spherical.setFromVector3(Lt),this.autoRotate&&this.state===st.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,i=this.maxAzimuthAngle;isFinite(n)&&isFinite(i)&&(n<-Math.PI?n+=cn:n>Math.PI&&(n-=cn),i<-Math.PI?i+=cn:i>Math.PI&&(i-=cn),n<=i?this._spherical.theta=Math.max(n,Math.min(i,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+i)/2?Math.max(n,this._spherical.theta):Math.min(i,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{let a=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=a!=this._spherical.radius}if(Lt.setFromSpherical(this._spherical),Lt.applyQuaternion(this._quatInverse),t.copy(this.target).add(Lt),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let a=null;if(this.object.isPerspectiveCamera){let o=Lt.length();a=this._clampDistance(o*this._scale);let c=o-a;this.object.position.addScaledVector(this._dollyDirection,c),this.object.updateMatrixWorld(),r=!!c}else if(this.object.isOrthographicCamera){let o=new P(this._mouse.x,this._mouse.y,0);o.unproject(this.object);let c=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=c!==this.object.zoom;let l=new P(this._mouse.x,this._mouse.y,0);l.unproject(this.object),this.object.position.sub(l).add(o),this.object.updateMatrixWorld(),a=Lt.length()}else console.warn(`WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled.`),this.zoomToCursor=!1;a!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(a).add(this.object.position):(rl.origin.copy(this.object.position),rl.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(rl.direction))<D_?this.object.lookAt(this.target):(Td.setFromNormalAndCoplanarPoint(this.object.up,this.target),rl.intersectPlane(Td,this.target))))}else if(this.object.isOrthographicCamera){let a=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),a!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>Wc||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Wc||this._lastTargetPosition.distanceToSquared(this.target)>Wc?(this.dispatchEvent(Ed),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?cn/60*this.autoRotateSpeed*e:cn/60/60*this.autoRotateSpeed}_getZoomScale(e){let t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){Lt.setFromMatrixColumn(t,0),Lt.multiplyScalar(-e),this._panOffset.add(Lt)}_panUp(e,t){this.screenSpacePanning===!0?Lt.setFromMatrixColumn(t,1):(Lt.setFromMatrixColumn(t,0),Lt.crossVectors(this.object.up,Lt)),Lt.multiplyScalar(e),this._panOffset.add(Lt)}_pan(e,t){let n=this.domElement;if(this.object.isPerspectiveCamera){let i=this.object.position;Lt.copy(i).sub(this.target);let r=Lt.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*r/n.clientHeight,this.object.matrix),this._panUp(2*t*r/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn(`WARNING: OrbitControls.js encountered an unknown camera type - pan disabled.`),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn(`WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled.`),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn(`WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled.`),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;let n=this.domElement.getBoundingClientRect(),i=e-n.left,r=t-n.top,a=n.width,o=n.height;this._mouse.x=i/a*2-1,this._mouse.y=-(r/o)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientY),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let t=this.domElement;this._rotateLeft(cn*this._rotateDelta.x/t.clientHeight),this._rotateUp(cn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.zoomToCursor&&(this._performCursorZoom=!0,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(cn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-cn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(cn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-cn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),i=.5*(e.pageY+t.y);this._rotateStart.set(n,i)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),i=.5*(e.pageY+t.y);this._panStart.set(n,i)}}_handleTouchStartDolly(e){let t=this._getSecondPointerPosition(e),n=e.pageX-t.x,i=e.pageY-t.y,r=Math.sqrt(n*n+i*i);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{let n=this._getSecondPointerPosition(e),i=.5*(e.pageX+n.x),r=.5*(e.pageY+n.y);this._rotateEnd.set(i,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let t=this.domElement;this._rotateLeft(cn*this._rotateDelta.x/t.clientHeight),this._rotateUp(cn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),i=.5*(e.pageY+t.y);this._panEnd.set(n,i)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){let t=this._getSecondPointerPosition(e),n=e.pageX-t.x,i=e.pageY-t.y,r=Math.sqrt(n*n+i*i);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);let a=(e.pageX+t.x)*.5,o=(e.pageY+t.y)*.5;this._updateZoomParameters(a,o)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new Se,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){let t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){let t=e.deltaMode,n={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100}return e.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}};function I_(s){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(s.pointerId),this.domElement.ownerDocument.addEventListener(`pointermove`,this._onPointerMove),this.domElement.ownerDocument.addEventListener(`pointerup`,this._onPointerUp)),!this._isTrackingPointer(s)&&(this._addPointer(s),s.pointerType===`touch`?this._onTouchStart(s):this._onMouseDown(s),this._cursorStyle===`grab`&&(this.domElement.style.cursor=`grabbing`)))}function L_(s){this.enabled!==!1&&(s.pointerType===`touch`?this._onTouchMove(s):this._onMouseMove(s))}function N_(s){switch(this._removePointer(s),this._pointers.length){case 0:this.domElement.releasePointerCapture(s.pointerId),this.domElement.ownerDocument.removeEventListener(`pointermove`,this._onPointerMove),this.domElement.ownerDocument.removeEventListener(`pointerup`,this._onPointerUp),this.dispatchEvent(wd),this.state=st.NONE,this._cursorStyle===`grab`&&(this.domElement.style.cursor=`grab`);break;case 1:let e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y})}}function O_(s){let e;switch(s.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case Gn.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(s),this.state=st.DOLLY;break;case Gn.ROTATE:if(s.ctrlKey||s.metaKey||s.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(s),this.state=st.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(s),this.state=st.ROTATE}break;case Gn.PAN:if(s.ctrlKey||s.metaKey||s.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(s),this.state=st.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(s),this.state=st.PAN}break;default:this.state=st.NONE}this.state!==st.NONE&&this.dispatchEvent(Xc)}function U_(s){switch(this.state){case st.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(s);break;case st.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(s);break;case st.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(s)}}function F_(s){this.enabled===!1||this.enableZoom===!1||this.state!==st.NONE||(s.preventDefault(),this.dispatchEvent(Xc),this._handleMouseWheel(this._customWheelEvent(s)),this.dispatchEvent(wd))}function B_(s){this.enabled!==!1&&this._handleKeyDown(s)}function k_(s){switch(this._trackPointer(s),this._pointers.length){case 1:switch(this.touches.ONE){case wi.ROTATE:if(this.enableRotate===!1){this.state=st.NONE;break}this._handleTouchStartRotate(s),this.state=st.TOUCH_ROTATE;break;case wi.PAN:if(this.enablePan===!1){this.state=st.NONE;break}this._handleTouchStartPan(s),this.state=st.TOUCH_PAN;break;default:this.state=st.NONE}break;case 2:switch(this.touches.TWO){case wi.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(s),this.state=st.TOUCH_DOLLY_PAN;break;case wi.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(s),this.state=st.TOUCH_DOLLY_ROTATE;break;default:this.state=st.NONE}break;default:this.state=st.NONE}this.state!==st.NONE&&this.dispatchEvent(Xc)}function z_(s){switch(this._trackPointer(s),this.state){case st.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(s),this.update();break;case st.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(s),this.update();break;case st.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(s),this.update();break;case st.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(s),this.update();break;default:this.state=st.NONE}}function H_(s){this.enabled!==!1&&s.preventDefault()}function G_(s){s.key===`Control`&&(this._controlActive=!0,this.domElement.ownerDocument.addEventListener(`keyup`,this._interceptControlUp,{passive:!0,capture:!0}))}function V_(s){s.key===`Control`&&(this._controlActive=!1,this.domElement.ownerDocument.removeEventListener(`keyup`,this._interceptControlUp,{passive:!0,capture:!0}))}var W_=/^[og]\s*(.+)?/;var X_=/^mtllib /;var q_=/^usemtl /;var Y_=/^usemap /;var ol=/\s+/;var Ad=new P;var qc=new P;var Cd=new P;var Rd=new P;var wn=new P;var ll=new Ce;function j_(){let s={objects:[],object:{},vertices:[],normals:[],colors:[],uvs:[],materials:{},materialLibraries:[],startObject:function(e,t){if(this.object&&this.object.fromDeclaration===!1){this.object.name=e,this.object.fromDeclaration=t!==!1;return}let n=this.object&&typeof this.object.currentMaterial==`function`?this.object.currentMaterial():void 0;if(this.object&&typeof this.object._finalize==`function`&&this.object._finalize(!0),this.object={name:e||``,fromDeclaration:t!==!1,geometry:{vertices:[],normals:[],colors:[],uvs:[],hasUVIndices:!1},materials:[],smooth:!0,startMaterial:function(i,r){let a=this._finalize(!1);a&&(a.inherited||a.groupCount<=0)&&this.materials.splice(a.index,1);let o={index:this.materials.length,name:i||``,mtllib:Array.isArray(r)&&r.length>0?r[r.length-1]:``,smooth:a!==void 0?a.smooth:this.smooth,groupStart:a!==void 0?a.groupEnd:0,groupEnd:-1,groupCount:-1,inherited:!1,clone:function(c){let l={index:typeof c==`number`?c:this.index,name:this.name,mtllib:this.mtllib,smooth:this.smooth,groupStart:0,groupEnd:-1,groupCount:-1,inherited:!1};return l.clone=this.clone.bind(l),l}};return this.materials.push(o),o},currentMaterial:function(){if(this.materials.length>0)return this.materials[this.materials.length-1]},_finalize:function(i){let r=this.currentMaterial();if(r&&r.groupEnd===-1&&(r.groupEnd=this.geometry.vertices.length/3,r.groupCount=r.groupEnd-r.groupStart,r.inherited=!1),i&&this.materials.length>1)for(let a=this.materials.length-1;a>=0;a--)this.materials[a].groupCount<=0&&this.materials.splice(a,1);return i&&this.materials.length===0&&this.materials.push({name:``,smooth:this.smooth}),r}},n&&n.name&&typeof n.clone==`function`){let i=n.clone(0);i.inherited=!0,this.object.materials.push(i)}this.objects.push(this.object)},finalize:function(){this.object&&typeof this.object._finalize==`function`&&this.object._finalize(!0)},parseVertexIndex:function(e,t){let n=parseInt(e,10);return(n>=0?n-1:n+t/3)*3},parseNormalIndex:function(e,t){let n=parseInt(e,10);return(n>=0?n-1:n+t/3)*3},parseUVIndex:function(e,t){let n=parseInt(e,10);return(n>=0?n-1:n+t/2)*2},addVertex:function(e,t,n){let i=this.vertices,r=this.object.geometry.vertices;r.push(i[e+0],i[e+1],i[e+2]),r.push(i[t+0],i[t+1],i[t+2]),r.push(i[n+0],i[n+1],i[n+2])},addVertexPoint:function(e){let t=this.vertices;this.object.geometry.vertices.push(t[e+0],t[e+1],t[e+2])},addVertexLine:function(e){let t=this.vertices;this.object.geometry.vertices.push(t[e+0],t[e+1],t[e+2])},addNormal:function(e,t,n){let i=this.normals,r=this.object.geometry.normals;r.push(i[e+0],i[e+1],i[e+2]),r.push(i[t+0],i[t+1],i[t+2]),r.push(i[n+0],i[n+1],i[n+2])},addFaceNormal:function(e,t,n){let i=this.vertices,r=this.object.geometry.normals;Ad.fromArray(i,e),qc.fromArray(i,t),Cd.fromArray(i,n),wn.subVectors(Cd,qc),Rd.subVectors(Ad,qc),wn.cross(Rd),wn.normalize(),r.push(wn.x,wn.y,wn.z),r.push(wn.x,wn.y,wn.z),r.push(wn.x,wn.y,wn.z)},addColor:function(e,t,n){let i=this.colors,r=this.object.geometry.colors;i[e]!==void 0&&r.push(i[e+0],i[e+1],i[e+2]),i[t]!==void 0&&r.push(i[t+0],i[t+1],i[t+2]),i[n]!==void 0&&r.push(i[n+0],i[n+1],i[n+2])},addUV:function(e,t,n){let i=this.uvs,r=this.object.geometry.uvs;r.push(i[e+0],i[e+1]),r.push(i[t+0],i[t+1]),r.push(i[n+0],i[n+1])},addDefaultUV:function(){let e=this.object.geometry.uvs;e.push(0,0),e.push(0,0),e.push(0,0)},addUVLine:function(e){let t=this.uvs;this.object.geometry.uvs.push(t[e+0],t[e+1])},addFace:function(e,t,n,i,r,a,o,c,l){let h=this.vertices.length,d=this.parseVertexIndex(e,h),u=this.parseVertexIndex(t,h),f=this.parseVertexIndex(n,h);if(this.addVertex(d,u,f),this.addColor(d,u,f),o!==void 0&&o!==``){let _=this.normals.length;d=this.parseNormalIndex(o,_),u=this.parseNormalIndex(c,_),f=this.parseNormalIndex(l,_),this.addNormal(d,u,f)}else this.addFaceNormal(d,u,f);if(i!==void 0&&i!==``){let _=this.uvs.length;d=this.parseUVIndex(i,_),u=this.parseUVIndex(r,_),f=this.parseUVIndex(a,_),this.addUV(d,u,f),this.object.geometry.hasUVIndices=!0}else this.addDefaultUV()},addPointGeometry:function(e){this.object.geometry.type=`Points`;let t=this.vertices.length;for(let n=0,i=e.length;n<i;n++){let r=this.parseVertexIndex(e[n],t);this.addVertexPoint(r),this.addColor(r)}},addLineGeometry:function(e,t){this.object.geometry.type=`Line`;let n=this.vertices.length,i=this.uvs.length;for(let r=0,a=e.length-1;r<a;r++)this.addVertexLine(this.parseVertexIndex(e[r],n)),this.addVertexLine(this.parseVertexIndex(e[r+1],n));for(let r=0,a=t.length-1;r<a;r++)this.addUVLine(this.parseUVIndex(t[r],i)),this.addUVLine(this.parseUVIndex(t[r+1],i))}};return s.startObject(``,!1),s}var Wr=class extends Nn{constructor(e){super(e),this.materials=null}load(e,t,n,i){let r=this,a=new Hi(this.manager);a.setPriority(this.priority),a.setCache(this.cache),a.setPath(this.path),a.setRequestHeader(this.requestHeader),a.setWithCredentials(this.withCredentials),a.load(e,function(o){try{t(r.parse(o))}catch(c){i?i(c):console.error(c),r.manager.itemError(e)}},n,i)}setMaterials(e){return this.materials=e,this}parse(e){let t=new j_;e.indexOf(`\r
`)!==-1&&(e=e.replace(/\r\n/g,`
`)),e.indexOf(`\\
`)!==-1&&(e=e.replace(/\\\n/g,``));let n=e.split(`
`),i=[];for(let o=0,c=n.length;o<c;o++){let l=n[o].trimStart();if(l.length===0)continue;let h=l.charAt(0);if(h!==`#`)if(h===`v`){let d=l.split(ol);switch(d[0]){case`v`:t.vertices.push(parseFloat(d[1]),parseFloat(d[2]),parseFloat(d[3])),d.length>=7?(ll.setRGB(parseFloat(d[4]),parseFloat(d[5]),parseFloat(d[6]),wt),t.colors.push(ll.r,ll.g,ll.b)):t.colors.push(void 0,void 0,void 0);break;case`vn`:t.normals.push(parseFloat(d[1]),parseFloat(d[2]),parseFloat(d[3]));break;case`vt`:t.uvs.push(parseFloat(d[1]),parseFloat(d[2]))}}else if(h===`f`){let u=l.slice(1).trim().split(ol),f=[];for(let x=0,p=u.length;x<p;x++){let m=u[x];if(m.length>0){let v=m.split(`/`);f.push(v)}}let _=f[0];for(let x=1,p=f.length-1;x<p;x++){let m=f[x],v=f[x+1];t.addFace(_[0],m[0],v[0],_[1],m[1],v[1],_[2],m[2],v[2])}}else if(h===`l`){let d=l.substring(1).trim().split(ol),u=[],f=[];if(l.indexOf(`/`)===-1)u=d;else for(let _=0,x=d.length;_<x;_++){let p=d[_].split(`/`);p[0]!==``&&u.push(p[0]),p[1]!==``&&f.push(p[1])}t.addLineGeometry(u,f)}else if(h===`p`){let u=l.slice(1).trim().split(ol);t.addPointGeometry(u)}else if((i=W_.exec(l))!==null){let d=(` `+i[0].slice(1).trim()).slice(1);t.startObject(d)}else if(q_.test(l))t.object.startMaterial(l.substring(7).trim(),t.materialLibraries);else if(X_.test(l))t.materialLibraries.push(l.substring(7).trim());else if(Y_.test(l))console.warn(`THREE.OBJLoader: Rendering identifier "usemap" not supported. Textures must be defined in MTL files.`);else if(h===`s`){if(i=l.split(` `),i.length>1){let u=i[1].trim().toLowerCase();t.object.smooth=u!==`0`&&u!==`off`}else t.object.smooth=!0;let d=t.object.currentMaterial();d&&(d.smooth=t.object.smooth)}else{if(l===`\0`)continue;console.warn(`THREE.OBJLoader: Unexpected line: "`+l+`"`)}}t.finalize();let r=new en;if(r.materialLibraries=[].concat(t.materialLibraries),!(t.objects.length===1&&t.objects[0].geometry.vertices.length===0)===!0)for(let o=0,c=t.objects.length;o<c;o++){let l=t.objects[o],h=l.geometry,d=l.materials,u=h.type===`Line`,f=h.type===`Points`,_=!1;if(h.vertices.length===0)continue;let x=new nt;x.setAttribute(`position`,new Xe(h.vertices,3)),h.normals.length>0&&x.setAttribute(`normal`,new Xe(h.normals,3)),h.colors.length>0&&(_=!0,x.setAttribute(`color`,new Xe(h.colors,3))),h.hasUVIndices===!0&&x.setAttribute(`uv`,new Xe(h.uvs,2));let p=[];for(let v=0,T=d.length;v<T;v++){let S=d[v],w=S.name+`_`+S.smooth+`_`+_,E=t.materials[w];if(this.materials!==null){if(E=this.materials.create(S.name),u&&E&&!(E instanceof Pt)){let g=new Pt;nn.prototype.copy.call(g,E),g.color.copy(E.color),E=g}else if(f&&E&&!(E instanceof pn)){let g=new pn({size:10,sizeAttenuation:!1});nn.prototype.copy.call(g,E),g.color.copy(E.color),g.map=E.map,E=g}}E===void 0&&(u?E=new Pt:f?E=new pn({size:1,sizeAttenuation:!1}):E=new zi,E.name=S.name,E.flatShading=!S.smooth,E.vertexColors=_,t.materials[w]=E),p.push(E)}let m;if(p.length>1){for(let v=0,T=d.length;v<T;v++){let S=d[v];x.addGroup(S.groupStart,S.groupCount,v)}u?m=new sn(x,p):f?m=new Ln(x,p):m=new kt(x,p)}else u?m=new sn(x,p[0]):f?m=new Ln(x,p[0]):m=new kt(x,p[0]);m.name=l.name,r.add(m)}else if(t.vertices.length>0){let o=new pn({size:1,sizeAttenuation:!1}),c=new nt;c.setAttribute(`position`,new Xe(t.vertices,3)),t.colors.length>0&&t.colors[0]!==void 0&&(c.setAttribute(`color`,new Xe(t.colors,3)),o.vertexColors=!0);let l=new Ln(c,o);r.add(l)}return r}};var cl=class extends Nn{constructor(e){super(e)}load(e,t,n,i){let r=this,a=this.path===``?Er.extractUrlBase(e):this.path,o=new Hi(this.manager);o.setPriority(this.priority),o.setCache(this.cache),o.setPath(this.path),o.setRequestHeader(this.requestHeader),o.setWithCredentials(this.withCredentials),o.load(e,function(c){try{t(r.parse(c,a))}catch(l){i?i(l):console.error(l),r.manager.itemError(e)}},n,i)}setMaterialOptions(e){return this.materialOptions=e,this}parse(e,t){let n=e.split(`
`),i={},r=/\s+/,a={};for(let c=0;c<n.length;c++){let l=n[c];if(l=l.trim(),l.length===0||l.charAt(0)===`#`)continue;let h=l.indexOf(` `),d=h>=0?l.substring(0,h):l;d=d.toLowerCase();let u=h>=0?l.substring(h+1):``;if(u=u.trim(),d===`newmtl`)i={name:u},a[u]=i;else if(d===`ka`||d===`kd`||d===`ks`||d===`ke`){let f=u.split(r,3);i[d]=[parseFloat(f[0]),parseFloat(f[1]),parseFloat(f[2])]}else i[d]=u}let o=new Yc(this.resourcePath||t,this.materialOptions);return o.setCrossOrigin(this.crossOrigin),o.setManager(this.manager),o.priority=this.priority,o.cache=this.cache,o.setMaterials(a),o}};var Yc=class{constructor(e=``,t={}){this.baseUrl=e,this.options=t,this.materialsInfo={},this.materials={},this.materialsArray=[],this.nameLookup={},this.crossOrigin=`anonymous`,this.priority=`auto`,this.cache=`default`,this.side=this.options.side!==void 0?this.options.side:Vn,this.wrap=this.options.wrap!==void 0?this.options.wrap:yi}setCrossOrigin(e){return this.crossOrigin=e,this}setManager(e){this.manager=e}setMaterials(e){this.materialsInfo=this.convert(e),this.materials={},this.materialsArray=[],this.nameLookup={}}convert(e){if(!this.options)return e;let t={};for(let n in e){let i=e[n],r={};t[n]=r;for(let a in i){let o=!0,c=i[a],l=a.toLowerCase();switch(l){case`kd`:case`ka`:case`ks`:this.options&&this.options.normalizeRGB&&(c=[c[0]/255,c[1]/255,c[2]/255]),this.options&&this.options.ignoreZeroRGBs&&c[0]===0&&c[1]===0&&c[2]===0&&(o=!1)}o&&(r[l]=c)}}return t}preload(){for(let e in this.materialsInfo)this.create(e)}getIndex(e){return this.nameLookup[e]}getAsArray(){let e=0;for(let t in this.materialsInfo)this.materialsArray[e]=this.create(t),this.nameLookup[t]=e,e++;return this.materialsArray}create(e){return this.materials[e]===void 0&&this.createMaterial_(e),this.materials[e]}createMaterial_(e){let t=this,n=this.materialsInfo[e],i={name:e,side:this.side};function r(o,c){return typeof c!=`string`||c===``?``:/^https?:\/\//i.test(c)?c:o+c}function a(o,c){if(i[o])return;let l=t.getTextureParams(c,i),h=t.loadTexture(r(t.baseUrl,l.url));h.repeat.copy(l.scale),h.offset.copy(l.offset),h.wrapS=t.wrap,h.wrapT=t.wrap,(o===`map`||o===`emissiveMap`)&&(h.colorSpace=wt),i[o]=h}for(let o in n){let c=n[o],l;if(c!==``)switch(o.toLowerCase()){case`kd`:i.color=Ye.colorSpaceToWorking(new Ce().fromArray(c),wt);break;case`ks`:i.specular=Ye.colorSpaceToWorking(new Ce().fromArray(c),wt);break;case`ke`:i.emissive=Ye.colorSpaceToWorking(new Ce().fromArray(c),wt);break;case`map_kd`:a(`map`,c);break;case`map_ks`:a(`specularMap`,c);break;case`map_ke`:a(`emissiveMap`,c);break;case`norm`:a(`normalMap`,c);break;case`map_bump`:case`bump`:a(`bumpMap`,c);break;case`disp`:a(`displacementMap`,c);break;case`map_d`:a(`alphaMap`,c),i.transparent=!0;break;case`ns`:i.shininess=parseFloat(c);break;case`d`:l=parseFloat(c),l<1&&(i.opacity=l,i.transparent=!0);break;case`tr`:l=parseFloat(c),this.options&&this.options.invertTrProperty&&(l=1-l),l>0&&(i.opacity=1-l,i.transparent=!0)}}return this.materials[e]=new zi(i),this.materials[e]}getTextureParams(e,t){let n={scale:new Se(1,1),offset:new Se(0,0)},i=e.split(/\s+/),r;return r=i.indexOf(`-bm`),r>=0&&(t.bumpScale=parseFloat(i[r+1]),i.splice(r,2)),r=i.indexOf(`-mm`),r>=0&&(t.displacementBias=parseFloat(i[r+1]),t.displacementScale=parseFloat(i[r+2]),i.splice(r,3)),r=i.indexOf(`-s`),r>=0&&(n.scale.set(parseFloat(i[r+1]),parseFloat(i[r+2])),i.splice(r,4)),r=i.indexOf(`-o`),r>=0&&(n.offset.set(parseFloat(i[r+1]),parseFloat(i[r+2])),i.splice(r,4)),n.url=i.join(` `).trim(),n}loadTexture(e,t,n,i,r){let a=this.manager!==void 0?this.manager:$o,o=a.getHandler(e);o===null&&(o=new xr(a),o.setPriority(this.priority),o.setCache(this.cache)),o.setCrossOrigin&&o.setCrossOrigin(this.crossOrigin);let c=o.load(e,n,i,r);return t!==void 0&&(c.mapping=t),c}};var{lerp:ji}=St,Kt=[151,160,137,91,90,15,131,13,201,95,96,53,194,233,7,225,140,36,103,30,69,142,8,99,37,240,21,10,23,190,6,148,247,120,234,75,0,26,197,62,94,252,219,203,117,35,11,32,57,177,33,88,237,149,56,87,174,20,125,136,171,168,68,175,74,165,71,134,139,48,27,166,77,146,158,231,83,111,229,122,60,211,133,230,220,105,92,41,55,46,245,40,244,102,143,54,65,25,63,161,1,216,80,73,209,76,132,187,208,89,18,169,200,196,135,130,116,188,159,86,164,100,109,198,173,186,3,64,52,217,226,250,124,123,5,202,38,147,118,126,255,82,85,212,207,206,59,227,47,16,58,17,182,189,28,42,223,183,170,213,119,248,152,2,44,154,163,70,221,153,101,155,167,43,172,9,129,22,39,253,19,98,108,110,79,113,224,232,178,185,112,104,218,246,97,228,251,34,242,193,238,210,144,12,191,179,162,241,81,51,145,235,249,14,239,107,49,192,214,31,181,199,106,157,184,84,204,176,115,121,50,45,127,4,150,254,138,236,205,93,222,114,67,29,24,72,243,141,128,195,78,66,215,61,156,180];for(let s=0;s<256;s++)Kt[256+s]=Kt[s];function jc(s){return s*s*s*(s*(s*6-15)+10)}function Ri(s,e,t,n){let i=s&15,r=i<8?e:t,a=i<4?t:i==12||i==14?e:n;return((i&1)==0?r:-r)+((i&2)==0?a:-a)}var hl=class{noise(e,t,n){let i=Math.floor(e),r=Math.floor(t),a=Math.floor(n),o=i&255,c=r&255,l=a&255;e-=i,t-=r,n-=a;let h=e-1,d=t-1,u=n-1,f=jc(e),_=jc(t),x=jc(n),p=Kt[o]+c,m=Kt[p]+l,v=Kt[p+1]+l,T=Kt[o+1]+c,S=Kt[T]+l,w=Kt[T+1]+l;return ji(ji(ji(Ri(Kt[m],e,t,n),Ri(Kt[S],h,t,n),f),ji(Ri(Kt[v],e,d,n),Ri(Kt[w],h,d,n),f),_),ji(ji(Ri(Kt[m+1],e,t,u),Ri(Kt[S+1],h,t,u),f),ji(Ri(Kt[v+1],e,d,u),Ri(Kt[w+1],h,d,u),f),_),x)}};var ul=class s{constructor(e){this.authService=e}authService;API_BASE=fu$1.API_BASE;async authHeaders(){return{Authorization:`Bearer ${await this.authService.getAuthToken()}`,"Content-Type":`application/json`}}async list(){let e=await fetch(`${this.API_BASE}/api/admin/three-d-projects`,{headers:await this.authHeaders()});if(this.authService.checkResponseAuth(e),!e.ok)throw new Error(`Failed to fetch projects`);return e.json()}async get(e){let t=await fetch(`${this.API_BASE}/api/admin/three-d-projects/${e}`,{headers:await this.authHeaders()});if(this.authService.checkResponseAuth(t),!t.ok)throw new Error(`Failed to fetch project`);return t.json()}async create(e,t){let n=await fetch(`${this.API_BASE}/api/admin/three-d-projects`,{method:`POST`,headers:await this.authHeaders(),body:JSON.stringify({name:e,data:t})});if(this.authService.checkResponseAuth(n),!n.ok)throw new Error((await n.json().catch(()=>({})))?.error||`Failed to create project`);return n.json()}async update(e,t){let n=await fetch(`${this.API_BASE}/api/admin/three-d-projects/${e}`,{method:`PUT`,headers:await this.authHeaders(),body:JSON.stringify(t)});if(this.authService.checkResponseAuth(n),!n.ok)throw new Error((await n.json().catch(()=>({})))?.error||`Failed to save project`);return n.json()}async remove(e){let t=await fetch(`${this.API_BASE}/api/admin/three-d-projects/${e}`,{method:`DELETE`,headers:await this.authHeaders()});if(this.authService.checkResponseAuth(t),!t.ok)throw new Error(`Failed to delete project`)}static ɵfac=function(t){return new(t||s)(I(KE))};static ɵprov=M({token:s,factory:s.ɵfac,providedIn:`root`})};var dl=class s{constructor(e){this.authService=e}authService;API_BASE=fu$1.API_BASE;async authHeaders(){return{Authorization:`Bearer ${await this.authService.getAuthToken()}`,"Content-Type":`application/json`}}async list(e){let t=await fetch(`${this.API_BASE}/api/admin/three-d-recordings?projectId=${e}`,{headers:await this.authHeaders()});if(this.authService.checkResponseAuth(t),!t.ok)throw new Error(`Failed to fetch recordings`);return t.json()}async get(e){let t=await fetch(`${this.API_BASE}/api/admin/three-d-recordings/${e}`,{headers:await this.authHeaders()});if(this.authService.checkResponseAuth(t),!t.ok)throw new Error(`Failed to fetch recording`);return t.json()}async create(e,t,n){let i=await fetch(`${this.API_BASE}/api/admin/three-d-recordings`,{method:`POST`,headers:await this.authHeaders(),body:JSON.stringify({name:e,projectId:t,data:n})});if(this.authService.checkResponseAuth(i),!i.ok)throw new Error((await i.json().catch(()=>({})))?.error||`Failed to create recording`);return i.json()}async update(e,t){let n=await fetch(`${this.API_BASE}/api/admin/three-d-recordings/${e}`,{method:`PUT`,headers:await this.authHeaders(),body:JSON.stringify(t)});if(this.authService.checkResponseAuth(n),!n.ok)throw new Error((await n.json().catch(()=>({})))?.error||`Failed to save recording`);return n.json()}async remove(e){let t=await fetch(`${this.API_BASE}/api/admin/three-d-recordings/${e}`,{method:`DELETE`,headers:await this.authHeaders()});if(this.authService.checkResponseAuth(t),!t.ok)throw new Error(`Failed to delete recording`)}static ɵfac=function(t){return new(t||s)(I(KE))};static ɵprov=M({token:s,factory:s.ɵfac,providedIn:`root`})};var $_=[`canvas`];var Gd=(s,e)=>e.id;var Q_=(s,e)=>e.type;function ex(s,e){s&1&&(gf$1(0,`small`,11),a_$1(1,`Select an object to see its controls.`),mf$1())}function tx(s,e){if(s&1){let t=MT();gf$1(0,`input`,55),av(`change`,function(i){Jp(t);let r=kT();return eg(r.onAutoRotateSpeedChange(i))}),mf$1(),gf$1(1,`small`,11),a_$1(2,`°/sec`),mf$1()}if(s&2){let t=kT();iv(`value`,t.autoRotateSpeedForSelected())}}function nx(s,e){if(s&1){let t=MT();gf$1(0,`input`,56),av(`change`,function(i){Jp(t);let r=kT();return eg(r.setSelectedColor(i))}),mf$1(),gf$1(1,`small`,57),a_$1(2),mf$1()}if(s&2){let t=kT();iv(`value`,t.selectedColorHex()),mb(2),Df$1(` Distance from origin: `,t.formatMiles(t.distanceFromOriginMiles()),` (at 100 units/AU) `)}}function ix(s,e){if(s&1){let t=MT();gf$1(0,`label`,16),a_$1(1,`Texture`),mf$1(),gf$1(2,`select`,58),av(`change`,function(i){Jp(t);let r=kT();return eg(r.onTextureChange(i))}),gf$1(3,`option`,59),a_$1(4,`None (flat color)`),mf$1(),gf$1(5,`option`,60),a_$1(6,`Rocky`),mf$1(),gf$1(7,`option`,61),a_$1(8,`Gas Giant`),mf$1(),gf$1(9,`option`,62),a_$1(10,`Earth-like`),mf$1(),gf$1(11,`option`,63),a_$1(12,`Sun`),mf$1()()}if(s&2){let t=kT();mb(2),iv(`value`,t.textureKindForSelected())}}function sx(s,e){if(s&1){let t=MT();gf$1(0,`button`,18),av(`click`,function(){Jp(t);let i=kT();return eg(i.toggleWireframe())}),a_$1(1,` Wireframe `),mf$1()}if(s&2){let t=kT();hv(`btn-secondary`,t.isWireframeOn())(`btn-outline-secondary`,!t.isWireframeOn())}}function rx(s,e){if(s&1){let t=MT();gf$1(0,`label`,16),a_$1(1,`Size`),mf$1(),gf$1(2,`input`,64),av(`change`,function(i){Jp(t);let r=kT();return eg(r.onTerrainSizeChange(i))}),mf$1(),gf$1(3,`label`,16),a_$1(4,`Resolution`),mf$1(),gf$1(5,`input`,65),av(`change`,function(i){Jp(t);let r=kT();return eg(r.onTerrainResolutionChange(i))}),mf$1(),gf$1(6,`label`,16),a_$1(7,`Height`),mf$1(),gf$1(8,`input`,66),av(`change`,function(i){Jp(t);let r=kT();return eg(r.onTerrainHeightChange(i))}),mf$1(),gf$1(9,`button`,38),av(`click`,function(){Jp(t);let i=kT();return eg(i.regenerateTerrain())}),a_$1(10,` Reroll Seed `),mf$1()}if(s&2){let t=kT();mb(2),iv(`value`,t.terrainParamsForSelected().size),mb(3),iv(`value`,t.terrainParamsForSelected().resolution),mb(3),iv(`value`,t.terrainParamsForSelected().heightScale)}}function ax(s,e){if(s&1){let t=MT();gf$1(0,`input`,68),av(`input`,function(i){Jp(t);let r=kT(2);return eg(r.onPendingLabelTextInput(i))}),mf$1(),gf$1(1,`button`,69),av(`click`,function(){Jp(t);let i=kT(2);return eg(i.addLabelToSelected())}),a_$1(2,` Add Label `),mf$1()}if(s&2){let t=kT(2);iv(`value`,t.pendingLabelText),mb(),iv(`disabled`,!t.pendingLabelText.trim())}}function ox(s,e){if(s&1){let t=MT();gf$1(0,`button`,25),av(`click`,function(){Jp(t);let i=kT(2);return eg(i.removeLabelFromSelected())}),a_$1(1,` Remove Label `),mf$1()}}function lx(s,e){if(s&1&&yT(0,ax,3,2)(1,ox,2,0,`button`,67),s&2){let t=kT();DT(t.hasLabelOnSelected()?1:0)}}function cx(s,e){if(s&1){let t=MT();gf$1(0,`button`,18),av(`click`,function(){Jp(t);let i=kT();return eg(i.toggleGravity())}),a_$1(1),mf$1()}if(s&2){let t=kT();hv(`btn-primary`,t.isGravityOn())(`btn-outline-primary`,!t.isGravityOn()),mb(),Df$1(` Gravity: `,t.isGravityOn()?`On`:`Off`,` `)}}function hx(s,e){if(s&1){let t=MT();gf$1(0,`label`,16),a_$1(1,`Density`),mf$1(),gf$1(2,`input`,70),av(`input`,function(i){Jp(t);let r=kT();return eg(r.onParticleDensityChange(i))}),mf$1(),gf$1(3,`label`,16),a_$1(4,`Speed`),mf$1(),gf$1(5,`input`,71),av(`input`,function(i){Jp(t);let r=kT();return eg(r.onParticleSpeedChange(i))}),mf$1()}if(s&2){let t=kT();mb(2),iv(`value`,t.particleDensityForSelected()),mb(3),iv(`value`,t.particleSpeedForSelected())}}function ux(s,e){if(s&1){let t=MT();gf$1(0,`label`,16),a_$1(1,`Radius`),mf$1(),gf$1(2,`input`,73),av(`input`,function(i){Jp(t);let r=kT(2);return eg(r.onLightRadiusChange(i))}),mf$1()}if(s&2){let t=kT(2);mb(2),iv(`value`,t.lightRadiusForSelected())}}function dx(s,e){if(s&1){let t=MT();gf$1(0,`button`,25),av(`click`,function(){Jp(t);let i=kT();return eg(i.onToggleLightMode())}),a_$1(1),mf$1(),gf$1(2,`label`,16),a_$1(3,`Intensity`),mf$1(),gf$1(4,`input`,72),av(`input`,function(i){Jp(t);let r=kT();return eg(r.onLightIntensityChange(i))}),mf$1(),yT(5,ux,3,1)}if(s&2){let t=kT();mb(),Df$1(` `,t.isLightDirectional()?`Directional`:`Point`,` `),mb(3),iv(`value`,t.lightIntensityForSelected()),mb(),DT(t.isLightDirectional()?-1:5)}}function fx(s,e){if(s&1&&(gf$1(0,`div`,24),a_$1(1),mf$1()),s&2){let t=kT();mb(),Ev(t.cameraPathError)}}function px(s,e){if(s&1&&(gf$1(0,`div`,24),a_$1(1),mf$1()),s&2){let t=kT();mb(),Ev(t.projectError)}}function mx(s,e){if(s&1&&(gf$1(0,`div`,32),a_$1(1),mf$1()),s&2){let t=kT();mb(),Ev(t.projectSuccessMessage)}}function gx(s,e){if(s&1&&(gf$1(0,`option`,35),a_$1(1),mf$1()),s&2){let t=e.$implicit;iv(`value`,t.id),mb(),Ev(t.name)}}function _x(s,e){s&1&&(gf$1(0,`div`,40),a_$1(1,`Load or save a project above first - recordings belong to a project.`),mf$1())}function xx(s,e){if(s&1&&(gf$1(0,`div`,24),a_$1(1),mf$1()),s&2){let t=kT(2);mb(),Ev(t.recordingError)}}function yx(s,e){if(s&1&&(gf$1(0,`div`,32),a_$1(1),mf$1()),s&2){let t=kT(2);mb(),Ev(t.recordingSuccessMessage)}}function vx(s,e){if(s&1&&(gf$1(0,`option`,35),a_$1(1),mf$1()),s&2){let t=e.$implicit;iv(`value`,t.id),mb(),Ev(t.name)}}function bx(s,e){if(s&1){let t=MT();yT(0,xx,2,1,`div`,24),yT(1,yx,2,1,`div`,32),gf$1(2,`div`,10)(3,`select`,33),av(`change`,function(i){Jp(t);let r=kT();return eg(r.onRecordingSelectChange(i))}),gf$1(4,`option`,34),a_$1(5),mf$1(),wT(6,vx,2,2,`option`,35,Gd),mf$1(),gf$1(8,`input`,74),av(`input`,function(i){Jp(t);let r=kT();return eg(r.onRecordingNameInput(i))}),mf$1(),gf$1(9,`button`,31),av(`click`,function(){Jp(t);let i=kT();return eg(i.saveRecording())}),a_$1(10,` Save `),mf$1(),gf$1(11,`button`,31),av(`click`,function(){Jp(t);let i=kT();return eg(i.createRecording())}),a_$1(12,` Save As New `),mf$1(),gf$1(13,`button`,37),av(`click`,function(){Jp(t);let i=kT();return eg(i.deleteRecording())}),a_$1(14,` Delete Recording `),mf$1()()}if(s&2){let t=kT();DT(t.recordingError?0:-1),mb(),DT(t.recordingSuccessMessage?1:-1),mb(2),iv(`value`,t.selectedRecordingId??``)(`disabled`,t.recordingsLoading),mb(2),Ev(t.recordings.length?`Load a saved recording…`:`No saved recordings for this project yet`),mb(),CT(t.recordings),mb(2),iv(`value`,t.recordingName),mb(),iv(`disabled`,t.selectedRecordingId===null||t.recordingSaving||!t.lastRecording),mb(2),iv(`disabled`,!t.recordingName.trim()||t.recordingSaving||!t.lastRecording),mb(2),iv(`disabled`,t.selectedRecordingId===null)}}function Sx(s,e){if(s&1){let t=MT();gf$1(0,`button`,69),av(`click`,function(){let i=Jp(t).$implicit,r=kT();return eg(r.addShape(i.type))}),a_$1(1),mf$1()}if(s&2){let t=e.$implicit,n=kT();iv(`disabled`,t.type===`duck`&&!n.duckReady),mb(),Df$1(` + `,t.label,` `)}}function Mx(s,e){if(s&1){let t=MT();gf$1(0,`button`,25),av(`click`,function(){Jp(t);let i=kT();return eg(i.addShape(`custom`))}),a_$1(1),mf$1(),gf$1(2,`small`,11),a_$1(3,`Session-only - not saved with the file, just this tab.`),mf$1()}if(s&2){let t=kT();mb(),Df$1(` + `,t.customModelName,` `)}}function Ex(s,e){if(s&1){let t=MT();gf$1(0,`button`,75),av(`click`,function(){Jp(t);let i=kT();return eg(i.startRecording())}),a_$1(1,` ● Record `),mf$1()}}function Tx(s,e){if(s&1){let t=MT();gf$1(0,`button`,38),av(`click`,function(){Jp(t);let i=kT(2);return eg(i.pauseRecording())}),a_$1(1,`Pause`),mf$1()}}function wx(s,e){if(s&1){let t=MT();gf$1(0,`button`,38),av(`click`,function(){Jp(t);let i=kT(2);return eg(i.resumeRecording())}),a_$1(1,`Resume`),mf$1()}}function Ax(s,e){if(s&1){let t=MT();gf$1(0,`button`,76),a_$1(1,` ● Recording… `),mf$1(),yT(2,Tx,2,0,`button`,77)(3,wx,2,0,`button`,77),gf$1(4,`button`,38),av(`click`,function(){Jp(t);let i=kT();return eg(i.stopRecording())}),a_$1(5,`Stop`),mf$1()}if(s&2){let t=kT();mb(2),DT(t.recordingPaused?3:2)}}function Cx(s,e){s&1&&(gf$1(0,`small`,11),a_$1(1,`No recording yet - press Record, change something, then Stop.`),mf$1())}function Rx(s,e){if(s&1){let t=MT();gf$1(0,`button`,78),av(`click`,function(){Jp(t);let i=kT();return eg(i.startPlayback())}),a_$1(1,` ▶ Play `),mf$1(),yT(2,Cx,2,0,`small`,11)}if(s&2){let t=kT();iv(`disabled`,!t.lastRecording||t.recording)(`title`,t.recording?`Stop recording first`:t.lastRecording?`Play back the last recording`:`Record something first - Play stays disabled until a Record→Stop cycle captures at least one change`),mb(2),DT(!t.lastRecording&&!t.recording?2:-1)}}function Px(s,e){if(s&1){let t=MT();gf$1(0,`button`,38),av(`click`,function(){Jp(t);let i=kT(2);return eg(i.togglePlaybackPause())}),a_$1(1,`Pause`),mf$1()}}function Dx(s,e){if(s&1){let t=MT();gf$1(0,`button`,38),av(`click`,function(){Jp(t);let i=kT(2);return eg(i.togglePlaybackPause())}),a_$1(1,`Resume`),mf$1()}}function Ix(s,e){if(s&1){let t=MT();yT(0,Px,2,0,`button`,77)(1,Dx,2,0,`button`,77),gf$1(2,`button`,38),av(`click`,function(){Jp(t);let i=kT();return eg(i.stopPlayback())}),a_$1(3,`Stop`),mf$1()}if(s&2){let t=kT();DT(t.playbackPaused?1:0)}}function Lx(s,e){if(s&1&&(gf$1(0,`small`,11),a_$1(1),mf$1()),s&2){let t=kT();mb(),wv(``,t.formatTime(t.playbackElapsedSeconds),` / `,t.formatTime(t.recordingDurationSeconds()),` (`,t.lastRecordingEventCount(),` events) - scrubber is on-screen over the viewport below`)}}function Nx(s,e){if(s&1&&(gf$1(0,`div`,79)(1,`span`),a_$1(2),mf$1(),gf$1(3,`span`),a_$1(4),mf$1()()),s&2){let t=kT(2);mb(2),Df$1(``,t.formatMiles(t.cameraDistanceMiles),` from origin`),mb(2),Ev(t.formatMph(t.cameraSpeedMph))}}function Ox(s,e){if(s&1){let t=MT();gf$1(0,`button`,84),av(`click`,function(){Jp(t);let i=kT(3);return eg(i.startPlayback())}),a_$1(1,`▶`),mf$1()}if(s&2){let t=kT(3);iv(`disabled`,t.recording)}}function Ux(s,e){if(s&1){let t=MT();gf$1(0,`button`,85),av(`click`,function(){Jp(t);let i=kT(3);return eg(i.togglePlaybackPause())}),a_$1(1),mf$1(),gf$1(2,`button`,86),av(`click`,function(){Jp(t);let i=kT(3);return eg(i.stopPlayback())}),a_$1(3,`■`),mf$1()}if(s&2){let t=kT(3);iv(`title`,t.playbackPaused?`Resume`:`Pause`),mb(),Ev(t.playbackPaused?`▶`:`❚❚`)}}function Fx(s,e){if(s&1){let t=MT();gf$1(0,`div`,80),yT(1,Ox,2,1,`button`,81)(2,Ux,4,2),gf$1(3,`input`,82),av(`input`,function(i){Jp(t);let r=kT(2);return eg(r.seekPlayback(i))}),mf$1(),gf$1(4,`small`),a_$1(5),mf$1(),gf$1(6,`button`,83),av(`click`,function(){Jp(t);let i=kT(2);return eg(i.togglePlaybackLoop())}),a_$1(7,` ⟲ Loop `),mf$1()()}if(s&2){let t=kT(2);mb(),DT(t.playbackActive?2:1),mb(2),iv(`value`,t.playbackProgress),mb(2),Iv(``,t.formatTime(t.playbackElapsedSeconds),` / `,t.formatTime(t.recordingDurationSeconds())),mb(),hv(`btn-light`,t.playbackLoop)(`btn-outline-light`,!t.playbackLoop)}}function Bx(s,e){if(s&1&&(gf$1(0,`div`,54),yT(1,Nx,5,2,`div`,79),yT(2,Fx,8,8,`div`,80),mf$1()),s&2){let t=kT();mb(),DT(t.distanceHudEnabled?1:-1),mb(),DT(t.lastRecording?2:-1)}}var ks=[15947045,2829634,9422748,16171843,5925757,16777215];var kx=.2;var zx=4;var Hx=1.4;var Gx=45;var Dd=.05;var Vx=.15;var Id=4;var Zc=4;var Wx=8;var Xx=180;var qx=5;var Yx={r:.95,g:.95,b:1};var jx=150;var Zx=3;var Kx={r:.9,g:.8,b:.5};var Jx=200;var $x=6;var Qx={r:1,g:1,b:.9};var Xr=20;var ey=.25;var Kc=2;var ty=1.5;var fl=12;var Ld=5;var Nd=8;var ny=new P(0,1,0);var Od=.008;var Ud={cube:0,pyramid:1,octahedron:2,tetrahedron:3,sphere:4,torus:5,cylinder:6,cone:7,icosahedron:8,duck:9,light:11,custom:15,wave:13,fire:14,sand:16,snow:17,starfield:18,ground:20,waypoint:0,terrain:0,galaxy:0};var Fd=`#f4f6f8`;var Bd=16776422;var zs=1;var qr=20;var iy=5;var sy=1.4;var kd=16711935;var ry=9.8;var ay=.5;var oy=.3;var Jc=100;var $c=92955807;var Qc=20;var eh=32;var th=3;var ly=2;var cy=120;var hy=1;var uy=500;var dy=0;var fy=100;var ui=2500;var gy=.15;var zd=1.8;var _y=.6;var Hd=class s$2{constructor(e,t,n){this.cdr=e;this.projectsService=t;this.recordingsService=n}cdr;projectsService;recordingsService;canvasRef;scene;camera;renderer;controls;group=new en;frameId=0;raycaster=new Tr;duckTemplate=null;customModelTemplate=null;customModelReady=!1;customModelName=``;clock=new wr;nextObjectId=0;nextWaypointIndex=0;pathLine=null;gridHelper=null;labels=[];pendingLabelText=``;gridVisible=!0;flyAlongPathDurationSeconds=10;flyAlongPathLoop=!1;cameraPathError=``;selected=null;highlight=null;clipboard=null;dragging=!1;dragPlane=new Qt;lastPointerX=0;lastPointerY=0;mode=`select`;hasSelection=!1;duckReady=!1;debugLogEnabled=!1;backgroundColorHex=Fd;distanceHudEnabled=!1;gamepadConnected=!1;gamepadEnabled=!0;gamepadIndex=null;gamepadPrevButtons=[];projects=[];selectedProjectId=null;projectName=``;projectsLoading=!1;projectSaving=!1;projectError=``;projectSuccessMessage=``;recording=!1;recordingPaused=!1;recordEvents=[];recordInitialState=null;recordStartMs=0;recordTotalPausedMs=0;recordPauseStartMs=0;lastRecording=null;playbackActive=!1;playbackPaused=!1;playbackProgress=0;playbackElapsedSeconds=0;playbackTotalSeconds=0;playbackLoop=!1;playbackData=null;playbackStartMs=0;playbackTotalPausedMs=0;playbackPauseStartMs=0;playbackCursor=0;recordings=[];selectedRecordingId=null;recordingName=``;recordingsLoading=!1;recordingSaving=!1;recordingError=``;recordingSuccessMessage=``;shapeTypes=[{type:`cube`,label:`Cube`},{type:`sphere`,label:`Sphere`},{type:`cone`,label:`Cone`},{type:`torus`,label:`Torus`},{type:`cylinder`,label:`Cylinder`},{type:`icosahedron`,label:`Icosahedron`},{type:`octahedron`,label:`Octahedron`},{type:`tetrahedron`,label:`Tetrahedron`},{type:`pyramid`,label:`Pyramid`},{type:`duck`,label:`Duck`},{type:`wave`,label:`Wave`},{type:`fire`,label:`Fire`},{type:`snow`,label:`Snow`},{type:`sand`,label:`Sand`},{type:`starfield`,label:`Star Field`},{type:`light`,label:`Light`},{type:`ground`,label:`Ground`},{type:`terrain`,label:`Terrain`},{type:`galaxy`,label:`Galaxy`}];ngAfterViewInit(){this.initScene(),this.loadDuckModel(),this.addShape(`cube`),this.addShape(`sphere`),this.animate(),this.loadProjectList()}ngOnDestroy(){cancelAnimationFrame(this.frameId);let e=this.renderer?.domElement;e&&(e.removeEventListener(`pointerdown`,this.onPointerDown),e.removeEventListener(`pointermove`,this.onPointerMove),e.removeEventListener(`pointerup`,this.onPointerUp),e.removeEventListener(`pointerleave`,this.onPointerUp),e.removeEventListener(`wheel`,this.onWheel)),this.controls?.removeEventListener(`change`,this.onControlsChange),document.removeEventListener(`fullscreenchange`,this.onFullscreenChange),window.removeEventListener(`gamepadconnected`,this.onGamepadConnected),window.removeEventListener(`gamepaddisconnected`,this.onGamepadDisconnected),this.controls?.dispose(),this.disposeGroup(),this.renderer?.dispose()}initScene(){let e=this.canvasRef.nativeElement,t=e.parentElement?.clientWidth||800,n=500;this.scene=new sr,this.scene.background=new Ce(this.backgroundColorHex),this.scene.add(this.group),this.gridHelper=new Ar(20,20,10066329,14540253),this.scene.add(this.gridHelper),this.scene.add(new Rr(5)),this.camera=new Yt(50,t/n,.1,6e3),this.camera.position.set(6,5,8),this.renderer=new nl({canvas:e,antialias:!0}),this.renderer.setPixelRatio(window.devicePixelRatio||1),this.renderer.setSize(t,n),this.scene.add(new Mr(16777215,.6));let i=new Gi(16777215,.8);i.position.set(5,10,7),this.scene.add(i),this.controls=new al(this.camera,this.renderer.domElement),this.controls.enableDamping=!0,this.controls.mouseButtons={LEFT:Gn.ROTATE},this.controls.enablePan=!1,this.controls.enableRotate=!1,this.controls.addEventListener(`change`,this.onControlsChange);let r=this.renderer.domElement;r.addEventListener(`pointerdown`,this.onPointerDown),r.addEventListener(`pointermove`,this.onPointerMove),r.addEventListener(`pointerup`,this.onPointerUp),r.addEventListener(`pointerleave`,this.onPointerUp),r.addEventListener(`wheel`,this.onWheel,{passive:!1}),this.pathLine=new ki(new nt,new Pt({color:kd})),this.pathLine.visible=!1,this.scene.add(this.pathLine),document.addEventListener(`fullscreenchange`,this.onFullscreenChange),window.addEventListener(`gamepadconnected`,this.onGamepadConnected),window.addEventListener(`gamepaddisconnected`,this.onGamepadDisconnected)}onFullscreenChange=()=>{this.resizeRenderer()};onWindowResize(){this.resizeRenderer()}resizeRenderer(){if(!this.renderer||!this.camera)return;let e=this.canvasRef.nativeElement.parentElement;if(!e)return;let t=e.clientWidth||800,n=document.fullscreenElement===e?window.innerHeight:500;this.camera.aspect=t/n,this.camera.updateProjectionMatrix(),this.renderer.setSize(t,n)}toggleFullscreen(){let e=this.canvasRef.nativeElement.parentElement;e&&(document.fullscreenElement===e?document.exitFullscreen():e.requestFullscreen())}loadDuckModel(){let e=new cl;e.setPath(`assets/models/duck/`),e.load(`duck.mtl`,t=>{t.preload();let n=new Wr;n.setMaterials(t),n.setPath(`assets/models/duck/`),n.load(`duck.obj`,i=>{let r=new Tn().setFromObject(i),a=r.getSize(new P),o=r.getCenter(new P),c=Hx/(Math.max(a.x,a.y,a.z)||1);i.position.sub(o),i.scale.setScalar(c);let l=new en;l.add(i),this.duckTemplate=l,this.duckReady=!0,this.cdr.markForCheck()})},void 0,t=>console.error(`Failed to load duck model:`,t))}loadCustomModel(e){let t=e.target.files?.[0];if(!t)return;let n=URL.createObjectURL(t);new Wr().load(n,r=>{URL.revokeObjectURL(n);let a=new Tn().setFromObject(r),o=a.getSize(new P),c=a.getCenter(new P),l=sy/(Math.max(o.x,o.y,o.z)||1);r.position.sub(c),r.scale.setScalar(l),r.traverse(d=>{d instanceof kt&&(d.material=new Si({color:ks[Math.floor(Math.random()*ks.length)]}))});let h=new en;h.add(r),this.customModelTemplate=h,this.customModelReady=!0,this.customModelName=t.name,this.log(`custom model loaded`,t.name),this.cdr.markForCheck()},void 0,r=>{URL.revokeObjectURL(n),console.error(`Failed to load custom model:`,r)})}disposeObject(e){this.detachLabel(e),e.traverse(t=>{t instanceof kt&&(t.geometry.dispose(),(Array.isArray(t.material)?t.material:[t.material]).forEach(n=>n.dispose()))})}disposeGroup(){for(let e of[...this.group.children])this.group.remove(e),this.disposeObject(e)}makeGeometry(e){switch(e){case`cube`:return new ai(1,1,1);case`sphere`:return new Ps(.7,24,16);case`cone`:return new As(.7,1.2,20);case`torus`:return new gr(.6,.25,16,32);case`cylinder`:return new ws(.6,.6,1.2,24);case`icosahedron`:return new dr(.8);case`octahedron`:return new fr(.8);case`tetrahedron`:return new mr(.8);case`pyramid`:return new As(.8,1.2,4);case`ground`:return new ai(20,.2,20)}}createWave(){let e=2/Xr,t=[];for(let a=0;a<=Xr;a++){let o=-1+a*e;for(let c=0;c<Xr;c++)t.push(-1+c*e,o,-1+(c+1)*e,o)}for(let a=0;a<=Xr;a++){let o=-1+a*e;for(let c=0;c<Xr;c++)t.push(o,-1+c*e,o,-1+(c+1)*e)}let n=t.length/2,i=new nt;i.setAttribute(`position`,new xt(new Float32Array(n*3),3));let r=new sn(i,new Pt({color:3108787}));return r.userData.effectType=`wave`,r.userData.waveXZ=t,r.userData.waveTime=0,this.updateWave(r,0),r}updateWave(e,t){let n=(e.userData.waveTime||0)+t;e.userData.waveTime=n;let i=n*ty,r=e.userData.waveXZ,a=e.geometry.getAttribute(`position`);for(let o=0;o<r.length/2;o++){let c=r[o*2],l=r[o*2+1],h=ey*(Math.sin(Kc*c+i)+.5*Math.sin(Kc*1.3*l+i*.7)+.3*Math.sin(Kc*2.1*(c+l)+i*1.2));a.setXYZ(o,c,h,l)}a.needsUpdate=!0}createFire(){let e=new en;e.userData.effectType=`fire`,e.userData.fireTime=0;let t=[];for(let h=0;h<Ld;h++){let d=2*Math.PI*h/Ld;t.push(.5*Math.cos(d),0,.5*Math.sin(d),-.1*Math.cos(d),.15,-.1*Math.sin(d))}let n=new nt;n.setAttribute(`position`,new Xe(t,3)),e.add(new sn(n,new Pt({color:6701081})));let i=[];for(let h=0;h<fl;h++)i.push({bx:(Math.random()-.5)*.6,height:.8+Math.random()*.8,bz:(Math.random()-.5)*.6,freq:.5+Math.random()*1.5});let r=new Float32Array(fl*2*3);for(let h=0;h<fl;h++)r.set([1,.3,0,1,.9,.2],h*6);let a=new nt;a.setAttribute(`position`,new xt(new Float32Array(fl*2*3),3)),a.setAttribute(`color`,new xt(r,3));let o=new sn(a,new Pt({vertexColors:!0}));o.userData.seeds=i,e.add(o),e.userData.flames=o;let c=new nt;c.setAttribute(`position`,new xt(new Float32Array(Nd*3),3));let l=new Ln(c,new pn({color:16750848,size:.05}));return e.add(l),e.userData.embers=l,this.updateFire(e,0),e}updateFire(e,t){let n=(e.userData.fireTime||0)+t;e.userData.fireTime=n;let i=e.userData.flames,r=i.userData.seeds,a=i.geometry.getAttribute(`position`);r.forEach((l,h)=>{let d=.3*Math.sin(l.freq*n*4+h),u=.15*Math.sin(l.freq*n*2+h*1.7),f=.1*Math.cos(l.freq*n*1.5+h*2.3);a.setXYZ(h*2,l.bx,.1,l.bz),a.setXYZ(h*2+1,l.bx+u,l.height+d,l.bz+f)}),a.needsUpdate=!0;let c=e.userData.embers.geometry.getAttribute(`position`);for(let l=0;l<Nd;l++){let h=n+l*.5,d=(h*.8+l*.7)%3;c.setXYZ(l,.2*Math.sin(h*1.3+l),.5+d*.5,.15*Math.cos(h*.9+l*2))}c.needsUpdate=!0}respawnParticle(e,t){if(e===`snow`)t.x=Math.random()*8-4,t.y=3+Math.random()*3,t.z=Math.random()*8-4,t.vx=Math.random()*.4-.2,t.vy=-1+Math.random()*.7,t.vz=Math.random()*.4-.2,t.life=1+Math.random()*4;else if(e===`sand`)t.x=Math.random()*6-3,t.y=Math.random()*4,t.z=Math.random()*6-3,t.vx=.5+Math.random()*1.5,t.vy=-1.5+Math.random()*1.2,t.vz=Math.random()*.6-.3,t.life=.5+Math.random()*2.5;else{let n=Math.random()*2*Math.PI,i=Math.random()*Math.PI-Math.PI/2,r=3+Math.random()*3;t.x=r*Math.cos(i)*Math.cos(n),t.y=r*Math.cos(i)*Math.sin(n),t.z=r*Math.sin(i),t.vx=0,t.vy=0,t.vz=0,t.life=1+Math.random()*5}}particleLifeMax(e){return e===`snow`?qx:e===`sand`?Zx:$x}particleBaseCount(e){return e===`snow`?Xx:e===`sand`?jx:Jx}particleBaseColor(e){return e===`snow`?Yx:e===`sand`?Kx:Qx}createParticleEffect(e,t){let n=this.particleBaseCount(e),i=[];for(let c=0;c<n;c++){let l={x:0,y:0,z:0,vx:0,vy:0,vz:0,life:0};this.respawnParticle(e,l),i.push(l)}let r=new nt;r.setAttribute(`position`,new xt(new Float32Array(n*3),3)),r.setAttribute(`color`,new xt(new Float32Array(n*3),3));let a=new Ln(r,new pn({size:t,vertexColors:!0}));a.userData.effectType=e,a.userData.particles=i,a.userData.baseCount=n,a.userData.particleDensity=1,a.userData.particleSpeed=1;let o=this.particleBaseColor(e);return a.userData.particleColorOverride=new Ce(o.r,o.g,o.b),e===`starfield`?this.updateStarField(a,0):this.updateFallingParticles(a,0),a}createSnow(){return this.createParticleEffect(`snow`,.08)}createSand(){return this.createParticleEffect(`sand`,.06)}createStarField(){return this.createParticleEffect(`starfield`,.05)}terrainHeightAt(e,t,n,i){let r=i*12.9898,a=i*78.233,o=0,c=1,l=.15,h=0;for(let d=0;d<4;d++)o+=e.noise((t+r)*l,(n+a)*l,i%97)*c,h+=c,c*=.5,l*=2;return o/h}createTerrainGeometry(e){let t=St.clamp(e.size,hy,uy),n=Math.round(St.clamp(e.resolution,ly,cy)),i=St.clamp(e.heightScale,dy,fy),r=new hl,a=t/2,o=[];for(let u=0;u<=n;u++){let f=[];for(let _=0;_<=n;_++){let x=_/n*t-a,p=u/n*t-a;f.push(this.terrainHeightAt(r,x,p,e.seed)*i)}o.push(f)}let c=[],l=u=>u/n*t-a,h=u=>u/n*t-a;for(let u=0;u<=n;u++)for(let f=0;f<n;f++)c.push(l(f),o[u][f],h(u),l(f+1),o[u][f+1],h(u));for(let u=0;u<=n;u++)for(let f=0;f<n;f++)c.push(l(u),o[f][u],h(f),l(u),o[f+1][u],h(f+1));let d=new nt;return d.setAttribute(`position`,new Xe(c,3)),d}createTerrainObject(e){let i=new sn(this.createTerrainGeometry(e),new Pt({color:ks[Math.floor(Math.random()*ks.length)]}));return i.userData.effectType=`terrain`,i.userData.terrainSize=e.size,i.userData.terrainResolution=e.resolution,i.userData.terrainHeightScale=e.heightScale,i.userData.terrainSeed=e.seed,i}randomTerrainParams(){return{size:Qc,resolution:eh,heightScale:th,seed:Math.floor(Math.random()*1e9)}}terrainParamsFromEntry(e){return{size:e.terrainSize??Qc,resolution:e.terrainResolution??eh,heightScale:e.terrainHeightScale??th,seed:e.terrainSeed??0}}terrainParamsOf(e){return{size:e.userData.terrainSize??Qc,resolution:e.userData.terrainResolution??eh,heightScale:e.userData.terrainHeightScale??th,seed:e.userData.terrainSeed??0}}applyTerrainParams(e,t){let n=e;n.geometry.dispose(),n.geometry=this.createTerrainGeometry(t),e.userData.terrainSize=t.size,e.userData.terrainResolution=t.resolution,e.userData.terrainHeightScale=t.heightScale,e.userData.terrainSeed=t.seed}isTerrainSelected(){return this.selected?.userData.effectType===`terrain`}terrainParamsForSelected(){return this.selected?this.terrainParamsOf(this.selected):this.randomTerrainParams()}onTerrainSizeChange(e){if(!this.selected)return;let t=Number(e.target.value),n=this.terrainParamsOf(this.selected);this.applyTerrainParams(this.selected,s(r({},n),{size:Number.isFinite(t)?t:n.size})),this.log(`terrain size ->`,t)}onTerrainResolutionChange(e){if(!this.selected)return;let t=Number(e.target.value),n=this.terrainParamsOf(this.selected);this.applyTerrainParams(this.selected,s(r({},n),{resolution:Number.isFinite(t)?t:n.resolution})),this.log(`terrain resolution ->`,t)}onTerrainHeightChange(e){if(!this.selected)return;let t=Number(e.target.value),n=this.terrainParamsOf(this.selected);this.applyTerrainParams(this.selected,s(r({},n),{heightScale:Number.isFinite(t)?t:n.heightScale})),this.log(`terrain height ->`,t)}regenerateTerrain(){if(!this.selected)return;let e=this.terrainParamsOf(this.selected);this.applyTerrainParams(this.selected,s(r({},e),{seed:Math.floor(Math.random()*1e9)})),this.log(`terrain reseeded`)}createGalaxy(){let a=/* @__PURE__ */ new Float32Array(21900),o=/* @__PURE__ */ new Float32Array(21900),c=0,l=(x,p,m,v,T,S)=>{a[c*3]=x,a[c*3+1]=p,a[c*3+2]=m,o[c*3]=v,o[c*3+1]=T,o[c*3+2]=S,c++},h=.05,d=.29,u=4*Math.PI;for(let x=0;x<4;x++){let p=2*Math.PI*x/4;for(let m=0;m<1400;m++){let v=Math.random()*u,T=Math.min(1,h*Math.exp(d*v)),S=v+p,w=(.05+.12*(1-T))*(Math.random()-.5)*2,E=(T*Math.cos(S)+w*Math.cos(S+Math.PI/2))*ui,g=(T*Math.sin(S)+w*Math.sin(S+Math.PI/2))*ui,M=(Math.random()-.5)*.02*(1-T*.7)*ui,N=1-T;l(E,M,g,.6+N*.4,.7+N*.25,.9-N*.3)}}for(let x=0;x<900;x++){let p=Math.pow(Math.random(),2)*.18,m=Math.random()*2*Math.PI,v=p*Math.cos(m)*ui,T=p*Math.sin(m)*ui;l(v,(Math.random()-.5)*.09*(1-p/.18)*ui,T,1,.95,.85)}for(let x=0;x<800;x++){let p=Math.random(),m=Math.random()*2*Math.PI,v=p*Math.cos(m)*ui,T=p*Math.sin(m)*ui;l(v,(Math.random()-.5)*.02*(1-p*.7)*ui,T,.7,.75,.85)}let f=new nt;f.setAttribute(`position`,new xt(a,3)),f.setAttribute(`color`,new xt(o,3));let _=new Ln(f,new pn({size:12,vertexColors:!0,sizeAttenuation:!0}));return _.userData.effectType=`galaxy`,_}rebuildParticleCount(e,t){let n=e.userData.effectType,i=e.userData.baseCount,r=Math.max(1,Math.round(i*t)),a=[];for(let c=0;c<r;c++){let l={x:0,y:0,z:0,vx:0,vy:0,vz:0,life:0};this.respawnParticle(n,l),a.push(l)}let o=e;o.geometry.setAttribute(`position`,new xt(new Float32Array(r*3),3)),o.geometry.setAttribute(`color`,new xt(new Float32Array(r*3),3)),o.userData.particles=a,o.userData.particleDensity=Math.max(.1,t)}updateFallingParticles(e,t){let n=e,i=n.userData.effectType,r=n.userData.particles,a=n.userData.particleSpeed||1,o=this.particleLifeMax(i),c=n.userData.particleColorOverride,l=n.geometry.getAttribute(`position`),h=n.geometry.getAttribute(`color`);r.forEach((d,u)=>{d.x+=d.vx*t*a,d.y+=d.vy*t*a,d.z+=d.vz*t*a,d.life-=t,d.life<=0&&this.respawnParticle(i,d);let f=Math.max(0,d.life/o);l.setXYZ(u,d.x,d.y,d.z),h.setXYZ(u,Math.min(c.r*f+c.r*.3*(1-f),1),Math.min(c.g*f+c.g*.3*(1-f),1),Math.min(c.b*f+c.b*.3*(1-f),1))}),l.needsUpdate=!0,h.needsUpdate=!0}updateStarField(e,t){let n=e,i=n.userData.particles,r=n.userData.particleSpeed||1,a=n.userData.particleColorOverride,o=n.geometry.getAttribute(`position`),c=n.geometry.getAttribute(`color`);i.forEach((l,h)=>{o.setXYZ(h,l.x,l.y,l.z);let d=.4+.6*Math.abs(Math.sin(l.life*3*r));c.setXYZ(h,a.r*d,a.g*d,a.b*d),l.life-=t,l.life<=0&&this.respawnParticle(`starfield`,l)}),o.needsUpdate=!0,c.needsUpdate=!0}isParticleEffect(e){let t=e.userData.effectType;return t===`snow`||t===`sand`||t===`starfield`}updateEffects(e){for(let t of this.group.children)switch(t.userData.effectType){case`wave`:this.updateWave(t,e);break;case`fire`:this.updateFire(t,e);break;case`snow`:case`sand`:this.updateFallingParticles(t,e);break;case`starfield`:this.updateStarField(t,e)}}buildLightGizmo(){let n=[];for(let r=0;r<16;r++){let a=2*Math.PI*r/16,o=2*Math.PI*(r+1)/16;n.push(.4*Math.cos(a),.4*Math.sin(a),0,.4*Math.cos(o),.4*Math.sin(o),0)}for(let r=0;r<16;r++){let a=2*Math.PI*r/16,o=2*Math.PI*(r+1)/16;n.push(0,.4*Math.sin(a),.4*Math.cos(a),0,.4*Math.sin(o),.4*Math.cos(o))}n.push(0,0,0,0,-1.5,0,0,-1.5,0,.2,-1.2,0,0,-1.5,0,-.2,-1.2,0,0,-1.5,0,0,-1.2,.2,0,-1.5,0,0,-1.2,-.2);let i=new nt;return i.setAttribute(`position`,new Xe(n,3)),new sn(i,new Pt({color:Bd}))}createLight(){let e=new en;e.userData.effectType=`light`,e.userData.directional=!0,e.userData.intensity=zs,e.userData.lightRadius=qr,e.add(this.buildLightGizmo());let t=new At;t.position.set(0,-1.5,0),e.add(t),e.userData.targetAnchor=t;let n=new Gi(Bd,zs);return n.target=t,e.add(n),e.userData.light=n,e}toggleLightMode(e){let t=e.userData.light,n=t.color.getHex(),i=e.userData.intensity,r=!e.userData.directional;e.remove(t);let a;if(r){let o=new Gi(n,i);o.target=e.userData.targetAnchor,a=o}else a=new br(n,i,e.userData.lightRadius);e.add(a),e.userData.light=a,e.userData.directional=r}isWaypoint(e){return e.userData.effectType===`waypoint`}waypointCount(){return this.group.children.filter(e=>this.isWaypoint(e)).length}sortedWaypointPositions(){return this.group.children.filter(e=>this.isWaypoint(e)).sort((e,t)=>e.userData.waypointIndex-t.userData.waypointIndex).map(e=>e.position.clone())}updatePathLine(){if(!this.pathLine)return;let e=this.sortedWaypointPositions();if(e.length<2){this.pathLine.visible=!1;return}let t=new Rs(e);this.pathLine.geometry.dispose(),this.pathLine.geometry=new nt().setFromPoints(t.getPoints(100)),this.pathLine.visible=!0}createTextSprite(e){let t=document.createElement(`canvas`);t.width=256,t.height=64;let n=t.getContext(`2d`);n.font=`bold 32px sans-serif`,n.textAlign=`center`,n.textBaseline=`middle`,n.lineJoin=`round`,n.strokeStyle=`rgba(0, 0, 0, 0.85)`,n.lineWidth=6,n.strokeText(e,t.width/2,t.height/2),n.fillStyle=`#ffffff`,n.fillText(e,t.width/2,t.height/2);let a=new lr(new Ms({map:new Ts(t),depthTest:!1,depthWrite:!1,transparent:!0}));return a.renderOrder=999,a}attachLabel(e,t){this.detachLabel(e);let n=Math.max(.7*e.scale.x,.3),i=new ki(new nt().setFromPoints([new P,new P]),new Pt({color:16777215,transparent:!0,opacity:.6,depthTest:!1}));i.renderOrder=998;let r=this.createTextSprite(t);this.scene.add(i),this.scene.add(r),this.labels.push({target:e,radius:n,line:i,sprite:r,screenOffsetPx:new Se(0,0)}),e.userData.labelText=t}detachLabel(e){let t=this.labels.findIndex(i=>i.target===e);if(t===-1)return;let[n]=this.labels.splice(t,1);this.scene.remove(n.line),this.scene.remove(n.sprite),n.line.geometry.dispose(),n.line.material.dispose(),n.sprite.material.map?.dispose(),n.sprite.material.dispose(),delete e.userData.labelText}updateLabels(e){if(!this.labels.length)return;let t=this.renderer.domElement,n=t.clientWidth||1,i=t.clientHeight||1,r=Math.tan(St.degToRad(this.camera.fov)/2),a=i*Dd,c=a*Id/2,l=a/2,h=new P;this.camera.getWorldDirection(h);let d=[];for(let x of this.labels){let p=x.target.position,m=Math.max(this.camera.position.distanceTo(p),.01),v=Math.max(2*m*r*Dd,Vx),T=v*Id;x.sprite.scale.set(T,v,1);let S=p.clone().project(this.camera),w=(S.x*.5+.5)*n,E=(1-(S.y*.5+.5))*i,g=Math.max(x.radius/(m*r)*(i/2),2),M=E-(g+l+Zc),N=p.clone().sub(this.camera.position).dot(h)>0,R=w+g>0&&w-g<n&&E+g>0&&E-g<i;d.push({label:x,ndcZ:S.z,onScreen:N&&R&&S.z>-1&&S.z<1,surfacePos:p.clone().add(new P(0,x.radius,0)),bodyScreenX:w,bodyScreenY:E,bodyRadiusPx:g,naturalX:w,naturalY:M,desiredX:w,desiredY:M})}let u=d.filter(x=>x.onScreen).sort((x,p)=>p.bodyRadiusPx-x.bodyRadiusPx),f=[];for(let x of u){let p=d.filter(w=>w!==x&&w.onScreen),m=(w,E)=>{let g=w-c,M=w+c,N=E-l,R=E+l;for(let L of f)if(g<L.maxX&&M>L.minX&&N<L.maxY&&R>L.minY)return!0;for(let L of p){let U=L.bodyScreenX-L.bodyRadiusPx,V=L.bodyScreenX+L.bodyRadiusPx,I=L.bodyScreenY-L.bodyRadiusPx,H=L.bodyScreenY+L.bodyRadiusPx;if(g<V&&M>U&&N<H&&R>I)return!0}return!1},v=x.bodyRadiusPx+c+Zc,T=[{x:x.naturalX,y:x.naturalY},{x:x.bodyScreenX+v,y:x.bodyScreenY},{x:x.bodyScreenX-v,y:x.bodyScreenY}],S=T.find(w=>!m(w.x,w.y));if(!S){let w=T[0].y,E=T[0].x,g=f.length+p.length+1;for(let M=0;M<g&&m(E,w);M++)w+=a+Zc;S={x:E,y:w}}f.push({minX:S.x-c,maxX:S.x+c,minY:S.y-l,maxY:S.y+l}),x.desiredX=S.x,x.desiredY=S.y}let _=1-Math.exp(-Wx*e);for(let x of d){if(x.label.sprite.visible=x.onScreen,x.label.line.visible=x.onScreen,!x.onScreen)continue;let p=x.desiredX-x.naturalX,m=x.desiredY-x.naturalY;x.label.screenOffsetPx.x+=(p-x.label.screenOffsetPx.x)*_,x.label.screenOffsetPx.y+=(m-x.label.screenOffsetPx.y)*_;let v=x.naturalX+x.label.screenOffsetPx.x,T=x.naturalY+x.label.screenOffsetPx.y,E=new P(v/n*2-1,-(T/i*2-1),x.ndcZ).unproject(this.camera);x.label.sprite.position.copy(E);let g=x.label.line.geometry.getAttribute(`position`);g.setXYZ(0,x.surfacePos.x,x.surfacePos.y,x.surfacePos.z),g.setXYZ(1,E.x,E.y,E.z),g.needsUpdate=!0}}hasLabelOnSelected(){return!!this.selected?.userData.labelText}onPendingLabelTextInput(e){this.pendingLabelText=e.target.value}addLabelToSelected(){if(!this.selected||!this.pendingLabelText.trim())return;let e=this.pendingLabelText.trim();this.attachLabel(this.selected,e),this.pendingLabelText=``,this.recordEvent(`set_label`,this.selected.userData.id,{labelText:e}),this.log(`label ->`,e),this.cdr.markForCheck()}removeLabelFromSelected(){this.selected&&(this.detachLabel(this.selected),this.recordEvent(`set_label`,this.selected.userData.id,{labelText:``}),this.log(`label removed`),this.cdr.markForCheck())}pythonCameraFields(e,t){let n=e.clone().sub(t),i=new oi().setFromVector3(n);return{distance:i.radius,rotationX:St.radToDeg(i.phi)-90,rotationY:St.radToDeg(i.theta)}}onFlyDurationChange(e){let t=Number(e.target.value);this.flyAlongPathDurationSeconds=Number.isFinite(t)&&t>0?t:10}onFlyLoopChange(e){this.flyAlongPathLoop=e.target.checked}async flyAlongPath(){let e=this.sortedWaypointPositions();if(this.cameraPathError=``,e.length<2){this.cameraPathError=`Place at least 2 waypoints before flying the path.`,this.cdr.markForCheck();return}let t=Math.max(1,this.flyAlongPathDurationSeconds||10),n=new Rs(e,this.flyAlongPathLoop),i=30,r$2=t*i,a=[];for(let c=0;c<=r$2;c++){let l=c/r$2,h=n.getPointAt(Math.min(l,1)),d=n.getTangentAt(Math.min(l,1)),u=h.clone().add(d);a.push(r({t:Math.round(c/i*1e3),type:`camera_move`,position:h.toArray(),target:u.toArray()},this.pythonCameraFields(h,u)))}let o=this.serializeScene();o.objects=o.objects.filter(c=>c.shapeType!==`waypoint`),this.lastRecording={events:a,initialState:o,durationMs:t*1e3},this.selectedRecordingId=null,this.recordingName=``,this.log(`flew along path`,{waypoints:e.length,durationSeconds:t}),await this.startPlayback()}createShapeObject(e,t){let n;if(e===`duck`){if(!this.duckTemplate)return null;n=this.duckTemplate.clone(!0)}else if(e===`wave`)n=this.createWave();else if(e===`fire`)n=this.createFire();else if(e===`snow`)n=this.createSnow();else if(e===`sand`)n=this.createSand();else if(e===`starfield`)n=this.createStarField();else if(e===`terrain`)n=this.createTerrainObject(t??this.randomTerrainParams());else if(e===`galaxy`)n=this.createGalaxy();else if(e===`light`)n=this.createLight();else if(e===`waypoint`)n=new kt(new Ps(.15,8,6),new Es({color:kd,wireframe:!0})),n.userData.effectType=`waypoint`,n.userData.waypointIndex=this.nextWaypointIndex++;else if(e===`custom`){if(!this.customModelTemplate)return null;n=this.customModelTemplate.clone(!0)}else n=new kt(this.makeGeometry(e),new Si({color:ks[Math.floor(Math.random()*ks.length)]}));return n.userData.shapeType=e,n.userData.id=this.nextObjectId++,n}findById(e){return this.group.children.find(t=>t.userData.id===e)??null}addShape(e){let t=this.createShapeObject(e);if(!t)return;let n=this.selected?this.selected.position.clone():new P;t.position.copy(n).add(new P((Math.random()-.5)*2,(Math.random()-.5)*2,(Math.random()-.5)*2)),this.group.add(t),this.setSelected(t),this.log(`add shape`,e),this.recordEvent(`add_shape`,t.userData.id,{shapeType:e,position:t.position.toArray(),quaternion:t.quaternion.toArray(),scale:t.scale.x,color:this.materialHexOf(t)})}deleteSelected(){this.selected&&(this.log(`delete shape`),this.recordEvent(`delete_object`,this.selected.userData.id),this.group.remove(this.selected),this.disposeObject(this.selected),this.setSelected(null))}hasClipboard(){return!!this.clipboard}copySelected(){if(!this.selected)return;let e={shapeType:this.selected.userData.shapeType||`cube`,position:this.selected.position.toArray(),quaternion:this.selected.quaternion.toArray(),scale:this.selected.scale.x,color:this.materialHexOf(this.selected),rotationSpeed:this.selected.userData.rotationSpeed||0};this.selected.userData.effectType===`light`&&(e.lightIntensity=this.selected.userData.intensity,e.lightRadius=this.selected.userData.lightRadius,e.lightDirectional=this.selected.userData.directional),this.selected.userData.gravity&&(e.gravity=!0),this.selected.userData.textureKind&&(e.textureKind=this.selected.userData.textureKind),this.selected.userData.labelText&&(e.labelText=this.selected.userData.labelText),this.selected.userData.rotationAxis&&(e.rotationAxis=this.selected.userData.rotationAxis),this.selected.userData.wireframe&&(e.wireframe=!0),this.selected.userData.effectType===`terrain`&&(e.terrainSize=this.selected.userData.terrainSize,e.terrainResolution=this.selected.userData.terrainResolution,e.terrainHeightScale=this.selected.userData.terrainHeightScale,e.terrainSeed=this.selected.userData.terrainSeed),this.clipboard=e,this.log(`copied`,e.shapeType)}pasteClipboard(){if(!this.clipboard)return;let e=this.clipboard.shapeType,t=this.createShapeObject(e,e===`terrain`?this.terrainParamsFromEntry(this.clipboard):void 0);t&&(t.position.fromArray(this.clipboard.position).add(new P(.5,.5,.5)),t.quaternion.fromArray(this.clipboard.quaternion),t.scale.setScalar(this.clipboard.scale),this.applyObjectFields(t,this.clipboard),this.group.add(t),this.setSelected(t),this.log(`pasted`,e),this.recordEvent(`add_shape`,t.userData.id,{shapeType:e,position:t.position.toArray(),quaternion:t.quaternion.toArray(),scale:t.scale.x,color:this.materialHexOf(t),rotationSpeed:this.clipboard.rotationSpeed,gravity:this.clipboard.gravity,textureKind:this.clipboard.textureKind,labelText:this.clipboard.labelText,rotationAxis:this.clipboard.rotationAxis,wireframe:this.clipboard.wireframe,lightIntensity:this.clipboard.lightIntensity,lightRadius:this.clipboard.lightRadius,lightDirectional:this.clipboard.lightDirectional,terrainSize:this.clipboard.terrainSize,terrainResolution:this.clipboard.terrainResolution,terrainHeightScale:this.clipboard.terrainHeightScale,terrainSeed:this.clipboard.terrainSeed}))}clearAll(){this.log(`clear all`),this.disposeGroup(),this.setSelected(null)}deselect(){this.setSelected(null)}toggleDebugLog(){this.debugLogEnabled=!this.debugLogEnabled}toggleDistanceHud(){this.distanceHudEnabled=!this.distanceHudEnabled}toggleGrid(){this.gridVisible=!this.gridVisible,this.gridHelper&&(this.gridHelper.visible=this.gridVisible)}setBackgroundColor(e){let t=e.target.value;this.backgroundColorHex=t,this.scene.background=new Ce(t),this.recordSceneEvent(`set_background`,{backgroundColor:t}),this.log(`background ->`,t)}log(e,t){this.debugLogEnabled&&(t!==void 0?console.log(`[3D] ${e}`,t):console.log(`[3D] ${e}`))}setMode(e){this.mode=e,this.dragging=!1,this.controls.enableRotate=e===`camera`,this.controls.enableZoom=e!==`scale`,this.log(`mode ->`,e)}toggleAutoRotate(){if(!this.selected)return;let e=this.selected.userData.rotationSpeed||0;this.selected.userData.rotationSpeed=e!==0?0:Gx,this.log(`auto-rotate ->`,this.selected.userData.rotationSpeed),this.recordEvent(`set_rotation_speed`,this.selected.userData.id,{rotationSpeed:this.selected.userData.rotationSpeed}),this.cdr.markForCheck()}isGravityOn(){return!!this.selected?.userData.gravity}toggleGravity(){if(!this.selected)return;let e=!this.selected.userData.gravity;this.selected.userData.gravity=e,this.selected.userData.velocity={x:0,y:0,z:0},this.selected.userData.onSurface=!1,this.log(`gravity ->`,e),this.recordEvent(`set_gravity`,this.selected.userData.id,{gravity:e}),this.cdr.markForCheck()}onAutoRotateSpeedChange(e){if(!this.selected)return;let t=Number(e.target.value);this.selected.userData.rotationSpeed=Number.isFinite(t)?t:0,this.log(`auto-rotate speed ->`,this.selected.userData.rotationSpeed),this.recordEvent(`set_rotation_speed`,this.selected.userData.id,{rotationSpeed:this.selected.userData.rotationSpeed})}isAutoRotating(){return!!this.selected&&(this.selected.userData.rotationSpeed||0)!==0}autoRotateSpeedForSelected(){return this.selected&&this.selected.userData.rotationSpeed||0}materialsOf(e){let t=e.material;return t?Array.isArray(t)?t:[t]:[]}createProceduralTexture(e,t){let n=document.createElement(`canvas`);n.width=256,n.height=128;let i=n.getContext(`2d`),r=new Ce(t),a=c=>{let l=r.clone().multiplyScalar(c),h=d=>Math.round(St.clamp(d,0,1)*255);return`rgb(${h(l.r)}, ${h(l.g)}, ${h(l.b)})`};if(i.fillStyle=a(1),i.fillRect(0,0,n.width,n.height),e===`gasGiant`)for(let l=0;l<10;l++)i.fillStyle=a(l%2===0?1.15:.85),i.fillRect(0,n.height/10*l,n.width,n.height/10);else if(e===`earth`){i.fillStyle=`#3d6b35`;for(let c=0;c<18;c++)i.beginPath(),i.ellipse(Math.random()*n.width,Math.random()*n.height,15+Math.random()*35,10+Math.random()*20,Math.random()*Math.PI,0,Math.PI*2),i.fill()}else if(e===`sun`)for(let c=0;c<400;c++)i.fillStyle=a(.8+Math.random()*.6),i.beginPath(),i.arc(Math.random()*n.width,Math.random()*n.height,1+Math.random()*3,0,Math.PI*2),i.fill();else for(let c=0;c<250;c++)i.fillStyle=a(.7+Math.random()*.6),i.beginPath(),i.arc(Math.random()*n.width,Math.random()*n.height,1+Math.random()*4,0,Math.PI*2),i.fill();let o=new Ts(n);return o.wrapS=yi,o.wrapT=Sn,o}applyColor(e,t){let n=e.userData.particleColorOverride;if(n){n.set(t);return}let i=e.userData.textureKind;if(i){let a=e.userData.textureBaseColor??new Ce;a.set(t),e.userData.textureBaseColor=a;let o=this.createProceduralTexture(i,t);e.traverse(c=>{for(let l of this.materialsOf(c))l instanceof Si&&(l.map?.dispose(),l.map=o,l.color.set(16777215),l.needsUpdate=!0)});return}e.traverse(a=>{for(let o of this.materialsOf(a))`color`in o&&o.color.set(t),o instanceof Si&&o.map&&(o.map.dispose(),o.map=null,o.needsUpdate=!0)});let r=e.userData.light;r&&r.color.set(t)}materialHexOf(e){let t=e.userData.particleColorOverride;if(t)return`#`+t.getHexString();let n=e.userData.textureBaseColor;if(n)return`#`+n.getHexString();let i=null;return e.traverse(r=>{if(i)return;let a=this.materialsOf(r)[0];a&&`color`in a&&(i=`#`+a.color.getHexString())}),i??`#ffffff`}setSelectedColor(e){if(!this.selected)return;let t=e.target.value;this.applyColor(this.selected,t),this.log(`color ->`,t),this.recordEvent(`color_object`,this.selected.userData.id,{color:t})}selectedColorHex(){return this.selected?this.materialHexOf(this.selected):`#ffffff`}distanceFromOriginMiles(){return this.selected?this.selected.position.length()/Jc*$c:0}formatScaledUnit(e,t){return e>=1e9?(e/1e9).toFixed(2)+`B `+t:e>=1e6?(e/1e6).toFixed(2)+`M `+t:e>=1e3?(e/1e3).toFixed(1)+`K `+t:Math.round(e)+` `+t}formatMiles(e){return this.formatScaledUnit(e,`mi`)}isSolidMeshObject(e){let t=e.userData.effectType;return t===`wave`||t===`fire`||t===`light`||t===`terrain`||t===`galaxy`?!1:!this.isParticleEffect(e)}isTexturable(){return!!this.selected&&this.isSolidMeshObject(this.selected)}isWireframeToggleable(){return!!this.selected&&this.isSolidMeshObject(this.selected)}isWireframeOn(){return!!this.selected?.userData.wireframe}applyWireframe(e,t){e.traverse(n=>{for(let i of this.materialsOf(n))`wireframe`in i&&(i.wireframe=t)})}toggleWireframe(){if(!this.selected)return;let e=!this.selected.userData.wireframe;this.selected.userData.wireframe=e,this.applyWireframe(this.selected,e),this.log(`wireframe ->`,e),this.recordEvent(`set_wireframe`,this.selected.userData.id,{wireframe:e}),this.cdr.markForCheck()}textureKindForSelected(){return this.selected?.userData.textureKind??``}onTextureChange(e){if(!this.selected)return;let t=e.target.value,n=this.materialHexOf(this.selected);this.selected.userData.textureKind=t||void 0,this.applyColor(this.selected,n),this.log(`texture ->`,t||`none`),this.recordEvent(`set_texture`,this.selected.userData.id,{textureKind:t})}isParticleSelected(){return!!this.selected&&this.isParticleEffect(this.selected)}particleDensityForSelected(){return this.selected&&this.selected.userData.particleDensity||1}particleSpeedForSelected(){return this.selected&&this.selected.userData.particleSpeed||1}onParticleDensityChange(e){if(!this.selected)return;let t=Number(e.target.value);this.rebuildParticleCount(this.selected,Number.isFinite(t)?t:1),this.recordEvent(`set_particle_density`,this.selected.userData.id,{particleDensity:this.selected.userData.particleDensity}),this.log(`particle density ->`,this.selected.userData.particleDensity)}onParticleSpeedChange(e){if(!this.selected)return;let t=Number(e.target.value);this.selected.userData.particleSpeed=Number.isFinite(t)?t:1,this.recordEvent(`set_particle_speed`,this.selected.userData.id,{particleSpeed:this.selected.userData.particleSpeed}),this.log(`particle speed ->`,this.selected.userData.particleSpeed)}isLightSelected(){return!!this.selected&&this.selected.userData.effectType===`light`}isLightDirectional(){return!!this.selected&&this.selected.userData.directional}lightIntensityForSelected(){return this.selected?this.selected.userData.intensity??zs:zs}lightRadiusForSelected(){return this.selected?this.selected.userData.lightRadius??qr:qr}onToggleLightMode(){this.selected&&(this.toggleLightMode(this.selected),this.recordEvent(`set_light_mode`,this.selected.userData.id,{lightDirectional:this.selected.userData.directional}),this.log(`light mode ->`,this.selected.userData.directional?`directional`:`point`))}onLightIntensityChange(e){if(!this.selected)return;let t=Number(e.target.value),n=Number.isFinite(t)?t:zs;this.selected.userData.intensity=n;let i=this.selected.userData.light;i&&(i.intensity=n),this.recordEvent(`set_light_intensity`,this.selected.userData.id,{lightIntensity:n}),this.log(`light intensity ->`,n)}onLightRadiusChange(e){if(!this.selected)return;let t=Number(e.target.value),n=Number.isFinite(t)?t:qr;this.selected.userData.lightRadius=n;let i=this.selected.userData.light;i&&`distance`in i&&(i.distance=n),this.recordEvent(`set_light_radius`,this.selected.userData.id,{lightRadius:n}),this.log(`light radius ->`,n)}onKeydown(e){let t=e.target;if(t instanceof HTMLInputElement||t instanceof HTMLTextAreaElement||t instanceof HTMLSelectElement)return;let r={1:`select`,2:`rotate`,3:`scale`,4:`camera`}[e.key];if(r){this.setMode(r);return}(e.key===`Delete`||e.key===`Backspace`)&&this.hasSelection?(e.preventDefault(),this.deleteSelected()):e.key===`Escape`?this.deselect():(e.ctrlKey||e.metaKey)&&e.key.toLowerCase()===`c`&&this.hasSelection?(e.preventDefault(),this.copySelected()):(e.ctrlKey||e.metaKey)&&e.key.toLowerCase()===`v`&&this.clipboard&&(e.preventDefault(),this.pasteClipboard())}setSelected(e){this.highlight&&(this.scene.remove(this.highlight),this.highlight=null),this.selected=e,this.hasSelection=e!==null,e&&(this.highlight=new Cr(e,16766474),this.scene.add(this.highlight)),this.log(e?`select`:`deselect`),this.cdr.markForCheck()}pointerToNDC(e){let t=this.renderer.domElement.getBoundingClientRect();return new Se((e.clientX-t.left)/t.width*2-1,-((e.clientY-t.top)/t.height)*2+1)}findTopLevelObject(e){let t=e;for(;t.parent&&t.parent!==this.group;)t=t.parent;return t}raycastAtPointer(e){this.raycaster.setFromCamera(this.pointerToNDC(e),this.camera);let t=this.raycaster.intersectObjects(this.group.children,!0);return t.length>0?this.findTopLevelObject(t[0].object):null}raycastAtPointerToPlane(e){this.raycaster.setFromCamera(this.pointerToNDC(e),this.camera);let t=new P;return this.raycaster.ray.intersectPlane(this.dragPlane,t)?t:null}onPointerDown=e=>{if(e.button===1){e.preventDefault();return}if(!(e.button!==0||this.mode===`camera`)){if(this.mode===`select`){let t=this.raycastAtPointer(e);if(this.setSelected(t),!t)return}else if(!this.selected)return;if(this.dragging=!0,this.lastPointerX=e.clientX,this.lastPointerY=e.clientY,this.log(`drag start`,this.mode),this.mode===`select`){let t=new P;this.camera.getWorldDirection(t),this.dragPlane.setFromNormalAndCoplanarPoint(t,this.selected.position)}}};onPointerMove=e=>{if(!(!this.dragging||!this.selected)){if(this.mode===`select`){let t=this.raycastAtPointerToPlane(e);t&&(this.selected.position.copy(t),this.recordEvent(`move_object`,this.selected.userData.id,{position:this.selected.position.toArray()}))}else if(this.mode===`rotate`){let t=e.clientX-this.lastPointerX,n=e.clientY-this.lastPointerY,i=new P().setFromMatrixColumn(this.camera.matrixWorld,0),r=new Gt().setFromAxisAngle(ny,t*Od),a=new Gt().setFromAxisAngle(i,n*Od);this.selected.quaternion.premultiply(r).premultiply(a),this.recordEvent(`rotate_object`,this.selected.userData.id,{quaternion:this.selected.quaternion.toArray()})}this.lastPointerX=e.clientX,this.lastPointerY=e.clientY}};onPointerUp=()=>{this.dragging&&this.log(`drag end`),this.dragging=!1};onWheel=e=>{if(this.mode!==`scale`||!this.selected)return;e.preventDefault();let t=e.deltaY<0?1.05:.95,n=St.clamp(this.selected.scale.x*t,kx,zx);this.selected.scale.setScalar(n),this.recordEvent(`scale_object`,this.selected.userData.id,{scale:n})};onControlsChange=()=>{if(!this.recording||this.recordingPaused)return;let e=performance.now()-this.recordStartMs-this.recordTotalPausedMs;this.recordEvents.push({t:e,type:`camera_move`,position:this.camera.position.toArray(),target:this.controls.target.toArray(),distance:this.controls.getDistance(),rotationX:St.radToDeg(this.controls.getPolarAngle())-90,rotationY:St.radToDeg(this.controls.getAzimuthalAngle())})};onGamepadConnected=e=>{this.gamepadIndex=e.gamepad.index,this.gamepadConnected=!0,this.log(`gamepad connected`,e.gamepad.id),this.cdr.markForCheck()};onGamepadDisconnected=e=>{this.gamepadIndex===e.gamepad.index&&(this.gamepadIndex=null,this.gamepadConnected=!1,this.gamepadPrevButtons=[],this.cdr.markForCheck())};toggleGamepadEnabled(){this.gamepadEnabled=!this.gamepadEnabled}applyGamepadDeadzone(e){return Math.abs(e)<gy?0:e}cycleSelection(e){let t=this.group.children.filter(r=>!this.isWaypoint(r));if(t.length===0)return;let i=((this.selected?t.indexOf(this.selected):-1)+e+t.length)%t.length;this.setSelected(t[i])}cycleMode(e){let t=[`select`,`rotate`,`scale`,`camera`],i=(t.indexOf(this.mode)+e+t.length)%t.length;this.setMode(t[i])}gamepadTogglePlayback(){this.playbackActive?this.togglePlaybackPause():this.lastRecording&&!this.recording&&this.startPlayback()}updateGamepad(e){if(!this.gamepadEnabled)return;if(this.gamepadIndex===null){let a=navigator.getGamepads?navigator.getGamepads():[],o=Array.from(a).find(c=>c!==null);if(!o)return;this.gamepadIndex=o.index,this.gamepadConnected=!0,this.cdr.markForCheck()}let n=(navigator.getGamepads?navigator.getGamepads():[])[this.gamepadIndex];if(!n)return;if(!this.playbackActive){let a=this.applyGamepadDeadzone(n.axes[0]??0),o=this.applyGamepadDeadzone(n.axes[1]??0),c=this.applyGamepadDeadzone(n.axes[3]??0),l=n.buttons[6]?.value??0,h=n.buttons[7]?.value??0;if(a!==0||o!==0){let u=this.camera.position.clone().sub(this.controls.target),f=new oi().setFromVector3(u);f.theta-=a*zd*e,f.phi=St.clamp(f.phi+o*zd*e,.05,Math.PI-.05),u.setFromSpherical(f),this.camera.position.copy(this.controls.target).add(u),this.controls.update()}let d=-c+h-l;if(d!==0){let u=this.camera.position.clone().sub(this.controls.target),f=Math.max(.01,u.length()),_=Math.max(.5,f*(1-d*_y*e));u.setLength(_),this.camera.position.copy(this.controls.target).add(u),this.controls.update()}}let i=n.buttons.map(a=>a.pressed),r=a=>!!i[a]&&!this.gamepadPrevButtons[a];r(0)&&this.toggleAutoRotate(),r(1)&&this.deselect(),r(2)&&this.toggleWireframe(),r(3)&&this.toggleGrid(),r(4)&&this.cycleSelection(-1),r(5)&&this.cycleSelection(1),r(8)&&this.gamepadTogglePlayback(),r(9)&&this.toggleFullscreen(),r(14)&&this.cycleMode(-1),r(15)&&this.cycleMode(1),this.gamepadPrevButtons=i}animate=()=>{this.frameId=requestAnimationFrame(this.animate);let e=this.clock.getDelta();this.controls.update(),this.highlight?.update(),this.updateAutoRotation(e),this.updateEffects(e),this.updatePhysics(e),this.updatePathLine(),this.updateLabels(e),this.updateGamepad(e),this.updatePlayback(),this.updateCameraTelemetry(e),this.renderer.render(this.scene,this.camera)};lastCameraPosition=null;hudUpdateAccumulator=0;cameraDistanceMiles=0;cameraSpeedMph=0;updateCameraTelemetry(e){if(this.lastCameraPosition&&e>0){let t=this.camera.position.distanceTo(this.lastCameraPosition)/e;this.cameraSpeedMph=t/Jc*$c*3600}this.lastCameraPosition=this.camera.position.clone(),this.cameraDistanceMiles=this.camera.position.length()/Jc*$c,this.hudUpdateAccumulator+=e,this.hudUpdateAccumulator>=.1&&(this.hudUpdateAccumulator=0,this.cdr.markForCheck())}formatMph(e){return this.formatScaledUnit(e,`mph`)}updateAutoRotation(e){for(let t of this.group.children){let n=t.userData.rotationSpeed;if(!n)continue;let i=t.userData.rotationAxis||`z`;t.rotation[i]+=St.degToRad(n)*e}}boundingRadius(e){return .6*e.scale.x}updatePhysics(e){for(let t of this.group.children){if(!t.userData.gravity)continue;let n=t.userData.velocity;t.userData.onSurface||(n.y-=ry*e),t.position.y+=n.y*e;let i=this.boundingRadius(t);t.position.y-i<0?(t.position.y=i,n.y<0&&(n.y=-n.y*ay,Math.abs(n.y)<oy&&(n.y=0)),t.userData.onSurface=!0):t.userData.onSurface=!1}}startRecording(){this.recording||(this.recording=!0,this.recordingPaused=!1,this.recordEvents=[],this.recordInitialState=this.serializeScene(),this.recordStartMs=performance.now(),this.recordTotalPausedMs=0,this.log(`recording started`),this.cdr.markForCheck())}pauseRecording(){!this.recording||this.recordingPaused||(this.recordingPaused=!0,this.recordPauseStartMs=performance.now(),this.log(`recording paused`),this.cdr.markForCheck())}resumeRecording(){!this.recording||!this.recordingPaused||(this.recordTotalPausedMs+=performance.now()-this.recordPauseStartMs,this.recordingPaused=!1,this.log(`recording resumed`),this.cdr.markForCheck())}stopRecording(){if(!this.recording)return;let e=this.recordingPaused?this.recordTotalPausedMs+(performance.now()-this.recordPauseStartMs):this.recordTotalPausedMs,t=performance.now()-this.recordStartMs-e;this.recording=!1,this.recordingPaused=!1,this.recordEvents.length>0&&this.recordInitialState?this.lastRecording={events:[...this.recordEvents],initialState:this.recordInitialState,durationMs:t}:console.warn(`[3D] recording stopped with no events captured - Play will stay disabled. Try moving, rotating, scaling, recoloring, or adding/deleting a shape while recording.`),this.log(`recording stopped`,{events:this.recordEvents.length,durationMs:t}),this.cdr.markForCheck()}discardRecording(){this.recording=!1,this.recordingPaused=!1,this.playbackActive=!1,this.playbackPaused=!1,this.lastRecording=null,this.playbackData=null,this.playbackCursor=0,this.selectedRecordingId=null,this.recordingName=``}recordEvent(e,t,n={}){if(!this.recording||this.recordingPaused)return;let i=performance.now()-this.recordStartMs-this.recordTotalPausedMs;this.recordEvents.push(r({t:i,type:e,objectId:t},n))}recordSceneEvent(e,t={}){if(!this.recording||this.recordingPaused)return;let n=performance.now()-this.recordStartMs-this.recordTotalPausedMs;this.recordEvents.push(r({t:n,type:e},t))}async startPlayback(){!this.lastRecording||this.recording||(await this.deserializeScene(this.lastRecording.initialState),this.playbackData=this.lastRecording,this.playbackActive=!0,this.playbackPaused=!1,this.playbackStartMs=performance.now(),this.playbackTotalPausedMs=0,this.playbackCursor=0,this.gridHelper&&(this.gridHelper.visible=!1),this.log(`playback started`),this.cdr.markForCheck())}togglePlaybackPause(){this.playbackActive&&(this.playbackPaused?(this.playbackTotalPausedMs+=performance.now()-this.playbackPauseStartMs,this.playbackPaused=!1,this.log(`playback resumed`)):(this.playbackPauseStartMs=performance.now(),this.playbackPaused=!0,this.log(`playback paused`)),this.cdr.markForCheck())}stopPlayback(){this.playbackActive&&(this.playbackActive=!1,this.playbackPaused=!1,this.playbackData&&this.deserializeScene(this.playbackData.initialState),this.gridHelper&&(this.gridHelper.visible=this.gridVisible),this.log(`playback stopped`),this.cdr.markForCheck())}seekPlayback(e){if(!this.playbackData)return;let t=Number(e.target.value),n=t*this.playbackData.durationMs;this.deserializeScene(this.playbackData.initialState).then(()=>{if(!this.playbackData)return;let i=0;for(let r of this.playbackData.events){if(r.t>n)break;this.applyRecordedEvent(r),i++}this.playbackCursor=i,this.playbackStartMs=performance.now()-n,this.playbackTotalPausedMs=0,this.playbackProgress=t,this.playbackElapsedSeconds=n/1e3,this.cdr.markForCheck()})}recordingDurationSeconds(){return this.lastRecording?this.lastRecording.durationMs/1e3:0}lastRecordingEventCount(){return this.lastRecording?this.lastRecording.events.length:0}formatTime(e){let t=Math.max(0,Math.floor(e));return`${Math.floor(t/60)}:${(t%60).toString().padStart(2,`0`)}`}applyRecordedEvent(e){if(e.type===`camera_move`){e.position&&this.camera.position.fromArray(e.position),e.target&&this.controls.target.fromArray(e.target),this.controls.update();return}if(e.type===`set_background`){e.backgroundColor&&(this.backgroundColorHex=e.backgroundColor,this.scene.background=new Ce(e.backgroundColor));return}if(e.type===`add_shape`){let n=e.shapeType?this.createShapeObject(e.shapeType,e.shapeType===`terrain`?this.terrainParamsFromEntry(e):void 0):null;n&&e.objectId!==void 0&&(n.userData.id=e.objectId,this.nextObjectId=Math.max(this.nextObjectId,e.objectId+1),e.position&&n.position.fromArray(e.position),e.quaternion&&n.quaternion.fromArray(e.quaternion),e.scale!==void 0&&n.scale.setScalar(e.scale),this.applyObjectFields(n,{shapeType:e.shapeType??`cube`,position:e.position??[0,0,0],quaternion:e.quaternion??[0,0,0,1],scale:e.scale??1,color:e.color??`#ffffff`,rotationSpeed:e.rotationSpeed??0,gravity:e.gravity,textureKind:e.textureKind||void 0,labelText:e.labelText,rotationAxis:e.rotationAxis,wireframe:e.wireframe,lightIntensity:e.lightIntensity,lightRadius:e.lightRadius,lightDirectional:e.lightDirectional}),this.group.add(n));return}if(e.objectId===void 0)return;let t=this.findById(e.objectId);if(t){switch(e.type){case`move_object`:e.position&&t.position.fromArray(e.position);break;case`rotate_object`:e.quaternion&&t.quaternion.fromArray(e.quaternion);break;case`scale_object`:e.scale!==void 0&&t.scale.setScalar(e.scale);break;case`color_object`:e.color&&this.applyColor(t,e.color);break;case`set_rotation_speed`:t.userData.rotationSpeed=e.rotationSpeed??0;break;case`set_wireframe`:{let n=e.wireframe??!1;t.userData.wireframe=n,this.applyWireframe(t,n);break}case`set_particle_density`:e.particleDensity!==void 0&&this.rebuildParticleCount(t,e.particleDensity);break;case`set_particle_speed`:t.userData.particleSpeed=e.particleSpeed??1;break;case`set_light_intensity`:{let n=e.lightIntensity??zs;t.userData.intensity=n;let i=t.userData.light;i&&(i.intensity=n);break}case`set_light_radius`:{let n=e.lightRadius??qr;t.userData.lightRadius=n;let i=t.userData.light;i&&`distance`in i&&(i.distance=n);break}case`set_light_mode`:e.lightDirectional!==void 0&&e.lightDirectional!==t.userData.directional&&this.toggleLightMode(t);break;case`set_gravity`:t.userData.gravity=e.gravity??!1,t.userData.velocity={x:0,y:0,z:0},t.userData.onSurface=!1;break;case`set_texture`:{let n=this.materialHexOf(t);t.userData.textureKind=e.textureKind||void 0,this.applyColor(t,n);break}case`set_label`:e.labelText?this.attachLabel(t,e.labelText):this.detachLabel(t);break;case`delete_object`:this.group.remove(t),this.disposeObject(t)}this.selected===t&&this.highlight?.update()}}updatePlayback(){if(!this.playbackActive||!this.playbackData||this.playbackPaused)return;let e=performance.now()-this.playbackStartMs-this.playbackTotalPausedMs;this.playbackElapsedSeconds=e/1e3,this.playbackTotalSeconds=this.playbackData.durationMs/1e3,this.playbackProgress=this.playbackTotalSeconds>0?Math.min(1,e/this.playbackData.durationMs):0;let t=this.playbackData.events;for(;this.playbackCursor<t.length&&t[this.playbackCursor].t<=e;)this.applyRecordedEvent(t[this.playbackCursor]),this.playbackCursor++;e>=this.playbackData.durationMs&&(this.playbackActive=!1,this.playbackLoop?this.startPlayback():(this.gridHelper&&(this.gridHelper.visible=this.gridVisible),this.log(`playback complete`))),this.cdr.markForCheck()}togglePlaybackLoop(){this.playbackLoop=!this.playbackLoop}serializeScene(){return{objects:this.group.children.map(t=>{let n={id:t.userData.id,shapeType:t.userData.shapeType||`cube`,position:t.position.toArray(),quaternion:t.quaternion.toArray(),scale:t.scale.x,color:this.materialHexOf(t),rotationSpeed:t.userData.rotationSpeed||0};return t.userData.effectType===`light`&&(n.lightIntensity=t.userData.intensity,n.lightRadius=t.userData.lightRadius,n.lightDirectional=t.userData.directional),t.userData.gravity&&(n.gravity=!0),t.userData.textureKind&&(n.textureKind=t.userData.textureKind),t.userData.labelText&&(n.labelText=t.userData.labelText),t.userData.rotationAxis&&(n.rotationAxis=t.userData.rotationAxis),t.userData.wireframe&&(n.wireframe=!0),t.userData.effectType===`terrain`&&(n.terrainSize=t.userData.terrainSize,n.terrainResolution=t.userData.terrainResolution,n.terrainHeightScale=t.userData.terrainHeightScale,n.terrainSeed=t.userData.terrainSeed),n}),camera:{position:this.camera.position.toArray(),target:this.controls.target.toArray()},backgroundColor:this.backgroundColorHex,distanceHudEnabled:this.distanceHudEnabled}}async waitForDuck(){let e=Date.now();for(;!this.duckReady;){if(Date.now()-e>5e3)return!1;await new Promise(t=>setTimeout(t,100))}return!0}applyObjectFields(e,t){if(t.textureKind&&(e.userData.textureKind=t.textureKind),this.applyColor(e,t.color),e.userData.rotationSpeed=t.rotationSpeed,t.rotationAxis&&(e.userData.rotationAxis=t.rotationAxis),t.wireframe&&(e.userData.wireframe=!0,this.applyWireframe(e,!0)),e.userData.effectType===`light`&&(t.lightDirectional!==void 0&&t.lightDirectional!==e.userData.directional&&this.toggleLightMode(e),t.lightIntensity!==void 0&&(e.userData.intensity=t.lightIntensity,e.userData.light.intensity=t.lightIntensity),t.lightRadius!==void 0)){e.userData.lightRadius=t.lightRadius;let n=e.userData.light;`distance`in n&&(n.distance=t.lightRadius)}t.gravity&&(e.userData.gravity=!0,e.userData.velocity={x:0,y:0,z:0},e.userData.onSurface=!1),t.labelText&&this.attachLabel(e,t.labelText)}async deserializeScene(e){this.clearAll();for(let t of e.objects){let n=t.shapeType;if(n===`duck`&&!await this.waitForDuck()){console.warn(`[3D] duck model was not ready in time - skipping a duck object from the loaded project`);continue}if(n===`custom`&&!this.customModelTemplate){console.warn(`[3D] no custom model loaded this session - skipping a custom-model object from the loaded project (session-only, see loadCustomModel)`);continue}let i=this.createShapeObject(n,n===`terrain`?this.terrainParamsFromEntry(t):void 0);i&&(t.id!==void 0&&(i.userData.id=t.id,this.nextObjectId=Math.max(this.nextObjectId,t.id+1)),i.position.fromArray(t.position),i.quaternion.fromArray(t.quaternion),i.scale.setScalar(t.scale),this.applyObjectFields(i,t),this.group.add(i))}e.camera&&(this.controls.target.fromArray(e.camera.target),this.camera.position.fromArray(e.camera.position),this.controls.update()),this.backgroundColorHex=e.backgroundColor||Fd,this.scene.background=new Ce(this.backgroundColorHex),this.distanceHudEnabled=!!e.distanceHudEnabled,this.setSelected(null),this.lastCameraPosition=null}async loadProjectList(){this.projectsLoading=!0,this.projectError=``;try{this.projects=await this.projectsService.list()}catch(e){console.error(`Error loading 3D projects:`,e),this.projectError=e?.message||`Failed to load projects.`}finally{this.projectsLoading=!1,this.cdr.markForCheck()}}onProjectSelectChange(e){let t=parseInt(e.target.value,10);isNaN(t)||this.selectProject(t)}onProjectNameInput(e){this.projectName=e.target.value}async selectProject(e){this.projectsLoading=!0,this.projectError=``,this.projectSuccessMessage=``;try{let t=await this.projectsService.get(e);this.discardRecording(),await this.deserializeScene(t.data),this.selectedProjectId=t.id,this.projectName=t.name,await this.loadRecordingList(),this.log(`project loaded`,t.name)}catch(t){console.error(`Error loading 3D project:`,t),this.projectError=t?.message||`Failed to load project.`}finally{this.projectsLoading=!1,this.cdr.markForCheck()}}async createProject(){let e=this.projectName.trim();if(e){this.projectSaving=!0,this.projectError=``;try{let t=await this.projectsService.create(e,this.serializeScene());this.selectedProjectId=t.id,this.projectName=t.name,await this.loadProjectList(),await this.loadRecordingList(),this.projectSuccessMessage=`Saved as new project.`,setTimeout(()=>{this.projectSuccessMessage=``,this.cdr.markForCheck()},3e3),this.log(`project created`,t.name)}catch(t){console.error(`Error creating 3D project:`,t),this.projectError=t?.message||`Failed to save project.`}finally{this.projectSaving=!1,this.cdr.markForCheck()}}}async saveProject(){if(this.selectedProjectId!==null){this.projectSaving=!0,this.projectError=``;try{let e=await this.projectsService.update(this.selectedProjectId,{name:this.projectName,data:this.serializeScene()});this.projectName=e.name,await this.loadProjectList(),this.projectSuccessMessage=`Saved.`,setTimeout(()=>{this.projectSuccessMessage=``,this.cdr.markForCheck()},3e3),this.log(`project saved`,e.name)}catch(e){console.error(`Error saving 3D project:`,e),this.projectError=e?.message||`Failed to save project.`}finally{this.projectSaving=!1,this.cdr.markForCheck()}}}async deleteProject(){if(this.selectedProjectId!==null&&confirm(`Delete "${this.projectName}"? This can't be undone.`))try{await this.projectsService.remove(this.selectedProjectId),this.log(`project deleted`,this.projectName),this.selectedProjectId=null,this.projectName=``,this.discardRecording(),await this.loadProjectList(),await this.loadRecordingList()}catch(e){console.error(`Error deleting 3D project:`,e),this.projectError=e?.message||`Failed to delete project.`,this.cdr.markForCheck()}}async loadRecordingList(){if(this.selectedProjectId===null){this.recordings=[],this.cdr.markForCheck();return}this.recordingsLoading=!0,this.recordingError=``;try{this.recordings=await this.recordingsService.list(this.selectedProjectId)}catch(e){console.error(`Error loading 3D recordings:`,e),this.recordingError=e?.message||`Failed to load recordings.`}finally{this.recordingsLoading=!1,this.cdr.markForCheck()}}onRecordingSelectChange(e){let t=parseInt(e.target.value,10);isNaN(t)||this.selectRecording(t)}onRecordingNameInput(e){this.recordingName=e.target.value}async selectRecording(e){this.recordingsLoading=!0,this.recordingError=``,this.recordingSuccessMessage=``;try{let t=await this.recordingsService.get(e);await this.deserializeScene(t.data.initialState),this.lastRecording={events:t.data.events,initialState:t.data.initialState,durationMs:t.data.durationMs},this.playbackData=null,this.playbackActive=!1,this.playbackCursor=0,this.selectedRecordingId=t.id,this.recordingName=t.name,this.log(`recording loaded`,t.name)}catch(t){console.error(`Error loading 3D recording:`,t),this.recordingError=t?.message||`Failed to load recording.`}finally{this.recordingsLoading=!1,this.cdr.markForCheck()}}recordingPayload(){return{initialState:this.lastRecording.initialState,events:this.lastRecording.events,durationMs:this.lastRecording.durationMs}}async createRecording(){let e=this.recordingName.trim();if(!(!e||!this.lastRecording||this.selectedProjectId===null)){this.recordingSaving=!0,this.recordingError=``;try{let t=await this.recordingsService.create(e,this.selectedProjectId,this.recordingPayload());this.selectedRecordingId=t.id,this.recordingName=t.name,await this.loadRecordingList(),this.recordingSuccessMessage=`Saved as new recording.`,setTimeout(()=>{this.recordingSuccessMessage=``,this.cdr.markForCheck()},3e3),this.log(`recording saved as new`,t.name)}catch(t){console.error(`Error creating 3D recording:`,t),this.recordingError=t?.message||`Failed to save recording.`}finally{this.recordingSaving=!1,this.cdr.markForCheck()}}}async saveRecording(){if(!(this.selectedRecordingId===null||!this.lastRecording)){this.recordingSaving=!0,this.recordingError=``;try{let e=await this.recordingsService.update(this.selectedRecordingId,{name:this.recordingName,data:this.recordingPayload()});this.recordingName=e.name,await this.loadRecordingList(),this.recordingSuccessMessage=`Saved.`,setTimeout(()=>{this.recordingSuccessMessage=``,this.cdr.markForCheck()},3e3),this.log(`recording saved`,e.name)}catch(e){console.error(`Error saving 3D recording:`,e),this.recordingError=e?.message||`Failed to save recording.`}finally{this.recordingSaving=!1,this.cdr.markForCheck()}}}async deleteRecording(){if(this.selectedRecordingId!==null&&confirm(`Delete "${this.recordingName}"? This can't be undone.`))try{await this.recordingsService.remove(this.selectedRecordingId),this.log(`recording deleted`,this.recordingName),this.selectedRecordingId=null,this.recordingName=``,await this.loadRecordingList()}catch(e){console.error(`Error deleting 3D recording:`,e),this.recordingError=e?.message||`Failed to delete recording.`,this.cdr.markForCheck()}}exportRecordedEvents(){if(!this.lastRecording)return[];let e=[];for(let t of this.lastRecording.events){let n=Math.round(t.t);switch(t.type){case`move_object`:e.push({t:n,type:`move_object`,object_id:t.objectId,position:t.position});break;case`rotate_object`:{if(!t.quaternion)break;let i=new En().setFromQuaternion(new Gt(...t.quaternion));e.push({t:n,type:`rotate_object`,object_id:t.objectId,rotation:[i.x,i.y,i.z].map(r=>St.radToDeg(r))});break}case`scale_object`:e.push({t:n,type:`scale_object`,object_id:t.objectId,scale:t.scale});break;case`set_rotation_speed`:e.push({t:n,type:`set_rotation_speed`,object_id:t.objectId,rotation_speed:[0,0,t.rotationSpeed??0]});break;case`set_particle_density`:e.push({t:n,type:`set_particle_density`,object_id:t.objectId,particle_density:t.particleDensity});break;case`set_gravity`:e.push({t:n,type:`toggle_gravity`,object_id:t.objectId,gravity:t.gravity});break;case`add_shape`:{if(!t.shapeType||t.shapeType===`waypoint`)break;let i=new Ce(t.color||`#ffffff`);e.push({t:n,type:`add_shape`,object_id:t.objectId,shape_index:Ud[t.shapeType],position:t.position,scale:t.scale,color:[i.r,i.g,i.b]});break}case`camera_move`:e.push({t:n,type:`camera_rotate`,rotation_x:t.rotationX,rotation_y:t.rotationY,rotation_z:0}),e.push({t:n,type:`camera_zoom`,distance:t.distance})}}return e}rotationSpeedVector(e){let t=e.userData.rotationSpeed||0,n=e.userData.rotationAxis||`z`,i=[0,0,0];return i[n===`x`?0:n===`y`?1:2]=t,i}exportProject(){let e=this.group.children.filter(o=>{let c=o.userData.shapeType;return!this.isWaypoint(o)&&c!==`terrain`&&c!==`galaxy`}).map((o,c)=>{let l=o.userData.shapeType||`cube`,h=[o.rotation.x,o.rotation.y,o.rotation.z].map(u=>St.radToDeg(u)),d=new Ce(this.materialHexOf(o));return{id:c,type:`shape`,shape_index:Ud[l],position:o.position.toArray(),rotation:h,rotation_speed:this.rotationSpeedVector(o),scale:[o.scale.x,o.scale.x,o.scale.x],color:[d.r,d.g,d.b],gravity:!!o.userData.gravity}}),t={distance:this.controls.getDistance(),rotation_x:St.radToDeg(this.controls.getPolarAngle())-90,rotation_y:St.radToDeg(this.controls.getAzimuthalAngle()),rotation_z:0,offset_y:0,fov:this.camera.fov},n={name:this.projectName||`export`,version:`2.0`,duration:this.lastRecording?this.lastRecording.durationMs/1e3:iy,initial_state:{camera:t,objects:e},events:this.exportRecordedEvents()},i=new Blob([JSON.stringify(n,null,2)],{type:`application/json`}),r=URL.createObjectURL(i),a=document.createElement(`a`);a.href=r,a.download=`${this.projectName||`scene`}.queue.json`,document.body.appendChild(a),a.click(),document.body.removeChild(a),setTimeout(()=>URL.revokeObjectURL(r),1e3),this.log(`exported`,n.name)}static ɵfac=function(t){return new(t||s$2)(ee(ao$1),ee(ul),ee(dl))};static ɵcmp=uf$1({type:s$2,selectors:[[`app-three-d-generator`]],viewQuery:function(t,n){if(t&1&&uv($_,5),t&2){let i;yf$1(i=vf$1())&&(n.canvasRef=i.first)}},hostBindings:function(t,n){t&1&&nc$1(`resize`,function(){return n.onWindowResize()},kC)(`keydown`,function(r){return n.onKeydown(r)},kC)},decls:155,vars:84,consts:[[`canvas`,``],[1,`three-d-generator-page`],[1,`page-heading`],[1,`container`],[1,`row`],[1,`col-lg-8`],[1,`top-text`,`header-text`],[1,`text-muted`,`mb-3`],[`open`,``,1,`toolbar-section`],[1,`toolbar-section-title`],[1,`d-flex`,`flex-wrap`,`align-items-center`,`gap-2`],[1,`text-muted`],[`type`,`button`,1,`btn`,`btn-sm`,3,`click`,`disabled`],[1,`fa`,`fa-sync`],[`type`,`button`,1,`btn`,`btn-sm`,3,`btn-secondary`,`btn-outline-secondary`],[`type`,`button`,1,`btn`,`btn-sm`,3,`btn-primary`,`btn-outline-primary`],[1,`text-muted`,`small`,`mb-0`],[`type`,`color`,`title`,`Scene background color`,1,`form-control`,`form-control-color`,`form-control-sm`,3,`change`,`value`],[`type`,`button`,1,`btn`,`btn-sm`,3,`click`],[`type`,`button`,`title`,`Only meaningful for content built at 100 units/AU, e.g. the realistic solar system`,1,`btn`,`btn-sm`,3,`click`],[1,`toolbar-section`],[1,`d-flex`,`flex-wrap`,`align-items-center`,`gap-2`,`mb-2`],[1,`badge`],[1,`text-muted`,`small`,`mb-2`],[1,`alert`,`alert-danger`,`py-1`,`px-2`,`mb-2`],[`type`,`button`,1,`btn`,`btn-sm`,`btn-outline-dark`,3,`click`],[1,`text-muted`,`small`,`mb-0`,`ms-2`],[`type`,`number`,`min`,`1`,`title`,`Flight duration in seconds`,1,`form-control`,`form-control-sm`,`auto-rotate-speed`,3,`change`,`value`],[1,`form-check`,`form-check-inline`,`ms-1`],[`type`,`checkbox`,`id`,`flyLoop`,1,`form-check-input`,3,`change`,`checked`],[`for`,`flyLoop`,1,`form-check-label`,`small`,`text-muted`],[`type`,`button`,1,`btn`,`btn-sm`,`btn-outline-primary`,3,`click`,`disabled`],[1,`alert`,`alert-success`,`py-1`,`px-2`,`mb-2`],[1,`form-select`,`form-select-sm`,`projects-select`,3,`change`,`value`,`disabled`],[`value`,``,`disabled`,``],[3,`value`],[`type`,`text`,`placeholder`,`Project name`,1,`form-control`,`form-control-sm`,`project-name`,3,`input`,`value`],[`type`,`button`,1,`btn`,`btn-sm`,`btn-outline-danger`,3,`click`,`disabled`],[`type`,`button`,1,`btn`,`btn-sm`,`btn-outline-secondary`,3,`click`],[1,`my-2`],[1,`text-muted`,`small`],[1,`d-flex`,`flex-wrap`,`gap-2`,`mb-2`],[`type`,`button`,1,`btn`,`btn-sm`,`btn-outline-dark`,3,`disabled`],[1,`btn`,`btn-sm`,`btn-outline-dark`,`mb-0`],[`type`,`file`,`accept`,`.obj`,1,`visually-hidden`,3,`change`],[`role`,`group`,`aria-label`,`Editor mode`,1,`btn-group`],[`type`,`button`,1,`btn`,`btn-sm`,`btn-outline-secondary`,3,`click`,`disabled`],[1,`fa`,`fa-trash`],[1,`fa`,`fa-broom`],[`open`,``,1,`toolbar-section`,`toolbar-section-last`],[`type`,`button`,1,`btn`,`btn-sm`,`btn-outline-danger`],[1,`d-flex`,`justify-content-end`,`mb-2`],[1,`fa`,`fa-expand`],[1,`canvas-wrap`],[1,`viewport-hud`],[`type`,`number`,`title`,`Degrees per second`,1,`form-control`,`form-control-sm`,`auto-rotate-speed`,3,`change`,`value`],[`type`,`color`,`title`,`Object color`,1,`form-control`,`form-control-color`,`form-control-sm`,3,`change`,`value`],[`title`,`Only meaningful for content built at 100 units/AU, e.g. the realistic solar system`,1,`text-muted`],[1,`form-select`,`form-select-sm`,`projects-select`,3,`change`,`value`],[`value`,``],[`value`,`rocky`],[`value`,`gasGiant`],[`value`,`earth`],[`value`,`sun`],[`type`,`number`,`min`,`1`,`max`,`500`,`step`,`1`,`title`,`Terrain footprint (world units)`,1,`form-control`,`form-control-sm`,`auto-rotate-speed`,3,`change`,`value`],[`type`,`number`,`min`,`2`,`max`,`120`,`step`,`1`,`title`,`Grid lines per side - higher is more detailed but slower to generate`,1,`form-control`,`form-control-sm`,`auto-rotate-speed`,3,`change`,`value`],[`type`,`number`,`min`,`0`,`max`,`100`,`step`,`0.5`,`title`,`Peak-to-valley height scale`,1,`form-control`,`form-control-sm`,`auto-rotate-speed`,3,`change`,`value`],[`type`,`button`,1,`btn`,`btn-sm`,`btn-outline-dark`],[`type`,`text`,`placeholder`,`Label text`,1,`form-control`,`form-control-sm`,`project-name`,3,`input`,`value`],[`type`,`button`,1,`btn`,`btn-sm`,`btn-outline-dark`,3,`click`,`disabled`],[`type`,`range`,`min`,`0.1`,`max`,`3`,`step`,`0.1`,`title`,`Particle density`,1,`form-range`,`particle-slider`,3,`input`,`value`],[`type`,`range`,`min`,`0.1`,`max`,`3`,`step`,`0.1`,`title`,`Particle speed`,1,`form-range`,`particle-slider`,3,`input`,`value`],[`type`,`range`,`min`,`0`,`max`,`3`,`step`,`0.1`,`title`,`Light intensity`,1,`form-range`,`particle-slider`,3,`input`,`value`],[`type`,`range`,`min`,`1`,`max`,`40`,`step`,`1`,`title`,`Light radius (point mode)`,1,`form-range`,`particle-slider`,3,`input`,`value`],[`type`,`text`,`placeholder`,`Recording name`,1,`form-control`,`form-control-sm`,`project-name`,3,`input`,`value`],[`type`,`button`,1,`btn`,`btn-sm`,`btn-outline-danger`,3,`click`],[`type`,`button`,`disabled`,``,1,`btn`,`btn-sm`,`btn-danger`],[`type`,`button`,1,`btn`,`btn-sm`,`btn-outline-secondary`],[`type`,`button`,1,`btn`,`btn-sm`,`btn-outline-primary`,3,`click`,`disabled`,`title`],[1,`viewport-hud-stats`],[1,`viewport-hud-scrubber`,`d-flex`,`align-items-center`,`gap-2`],[`type`,`button`,`title`,`Play`,1,`btn`,`btn-sm`,`btn-outline-light`,3,`disabled`],[`type`,`range`,`min`,`0`,`max`,`1`,`step`,`0.001`,1,`form-range`,`playback-scrubber`,3,`input`,`value`],[`type`,`button`,`title`,`Loop playback`,1,`btn`,`btn-sm`,3,`click`],[`type`,`button`,`title`,`Play`,1,`btn`,`btn-sm`,`btn-outline-light`,3,`click`,`disabled`],[`type`,`button`,1,`btn`,`btn-sm`,`btn-outline-light`,3,`click`,`title`],[`type`,`button`,`title`,`Stop`,1,`btn`,`btn-sm`,`btn-outline-light`,3,`click`]],template:function(t,n){t&1&&(gf$1(0,`div`,1)(1,`div`,2)(2,`div`,3)(3,`div`,4)(4,`div`,5)(5,`div`,6)(6,`h6`),a_$1(7,`Admin demo`),mf$1(),gf$1(8,`h1`),a_$1(9,`3D Generator`),mf$1()()()()()(),gf$1(10,`div`,3)(11,`p`,7),a_$1(12,` Select/Move: click to select, drag to move. Rotate and Scale act on the current selection (scroll to scale). Camera: left-drag orbits, scroll to zoom. Shortcuts: Delete/Backspace removes the selection, Escape deselects, Ctrl+C/Ctrl+V copy and paste. `),mf$1(),gf$1(13,`details`,8)(14,`summary`,9),a_$1(15,`Selected Object`),mf$1(),gf$1(16,`div`,10),yT(17,ex,2,0,`small`,11),gf$1(18,`button`,12),av(`click`,function(){return n.toggleAutoRotate()}),rv(19,`i`,13),a_$1(20,` Auto-Rotate `),mf$1(),yT(21,tx,3,1),yT(22,nx,3,2),yT(23,ix,13,1),yT(24,sx,2,4,`button`,14),yT(25,rx,11,3),yT(26,lx,2,1),yT(27,cx,2,5,`button`,15),yT(28,hx,6,2),yT(29,dx,6,3),mf$1()(),gf$1(30,`details`,8)(31,`summary`,9),a_$1(32,`Scene`),mf$1(),gf$1(33,`div`,10)(34,`label`,16),a_$1(35,`Background`),mf$1(),gf$1(36,`input`,17),av(`change`,function(r){return n.setBackgroundColor(r)}),mf$1(),gf$1(37,`button`,18),av(`click`,function(){return n.toggleGrid()}),a_$1(38),mf$1(),gf$1(39,`button`,18),av(`click`,function(){return n.toggleDebugLog()}),a_$1(40),mf$1(),gf$1(41,`button`,19),av(`click`,function(){return n.toggleDistanceHud()}),a_$1(42),mf$1()()(),gf$1(43,`details`,20)(44,`summary`,9),a_$1(45,`Gamepad`),mf$1(),gf$1(46,`div`,21)(47,`span`,22),a_$1(48),mf$1(),gf$1(49,`button`,18),av(`click`,function(){return n.toggleGamepadEnabled()}),a_$1(50),mf$1()(),gf$1(51,`p`,16),a_$1(52,` Left stick: orbit camera · Right stick / triggers: zoom · LB/RB: previous/next object · A: toggle auto-rotate · B: deselect · X: toggle wireframe · Y: toggle grid · D-pad left/right: change mode · View: play/pause recording · Menu: fullscreen. `),mf$1()(),gf$1(53,`details`,20)(54,`summary`,9),a_$1(55,`Camera Path`),mf$1(),gf$1(56,`p`,23),a_$1(57,` Add waypoints, drag them into place, then fly the camera along the curve they form - it becomes a normal recording, so Play/Save/Export all work on it. `),mf$1(),yT(58,fx,2,1,`div`,24),gf$1(59,`div`,10)(60,`button`,25),av(`click`,function(){return n.addShape(`waypoint`)}),a_$1(61,` + Waypoint `),mf$1(),gf$1(62,`small`,11),a_$1(63),mf$1(),gf$1(64,`label`,26),a_$1(65,`Duration`),mf$1(),gf$1(66,`input`,27),av(`change`,function(r){return n.onFlyDurationChange(r)}),mf$1(),gf$1(67,`small`,11),a_$1(68,`sec`),mf$1(),gf$1(69,`div`,28)(70,`input`,29),av(`change`,function(r){return n.onFlyLoopChange(r)}),mf$1(),gf$1(71,`label`,30),a_$1(72,`Loop`),mf$1()(),gf$1(73,`button`,31),av(`click`,function(){return n.flyAlongPath()}),a_$1(74,` Fly Along Path `),mf$1()()(),gf$1(75,`details`,20)(76,`summary`,9),a_$1(77,`Projects & Recordings`),mf$1(),gf$1(78,`label`,16),a_$1(79,`Projects`),mf$1(),yT(80,px,2,1,`div`,24),yT(81,mx,2,1,`div`,32),gf$1(82,`div`,10)(83,`select`,33),av(`change`,function(r){return n.onProjectSelectChange(r)}),gf$1(84,`option`,34),a_$1(85),mf$1(),wT(86,gx,2,2,`option`,35,Gd),mf$1(),gf$1(88,`input`,36),av(`input`,function(r){return n.onProjectNameInput(r)}),mf$1(),gf$1(89,`button`,31),av(`click`,function(){return n.saveProject()}),a_$1(90,` Save `),mf$1(),gf$1(91,`button`,31),av(`click`,function(){return n.createProject()}),a_$1(92,` Save As New `),mf$1(),gf$1(93,`button`,37),av(`click`,function(){return n.deleteProject()}),a_$1(94,` Delete Project `),mf$1(),gf$1(95,`button`,38),av(`click`,function(){return n.exportProject()}),a_$1(96,` Export JSON `),mf$1()(),rv(97,`hr`,39),gf$1(98,`label`,16),a_$1(99,`Recordings`),mf$1(),yT(100,_x,2,0,`div`,40)(101,bx,15,9),mf$1(),gf$1(102,`details`,20)(103,`summary`,9),a_$1(104,`Add Shape`),mf$1(),gf$1(105,`div`,41),wT(106,Sx,2,2,`button`,42,Q_),mf$1(),gf$1(108,`div`,10)(109,`label`,43),a_$1(110,` Load Model… `),gf$1(111,`input`,44),av(`change`,function(r){return n.loadCustomModel(r)}),mf$1()(),yT(112,Mx,4,1),mf$1()(),gf$1(113,`details`,8)(114,`summary`,9),a_$1(115,`Edit`),mf$1(),gf$1(116,`div`,10)(117,`div`,45)(118,`button`,18),av(`click`,function(){return n.setMode(`select`)}),a_$1(119,` 1 · Select/Move `),mf$1(),gf$1(120,`button`,12),av(`click`,function(){return n.setMode(`rotate`)}),a_$1(121,` 2 · Rotate `),mf$1(),gf$1(122,`button`,12),av(`click`,function(){return n.setMode(`scale`)}),a_$1(123,` 3 · Scale (wheel) `),mf$1(),gf$1(124,`button`,18),av(`click`,function(){return n.setMode(`camera`)}),a_$1(125,` 4 · Camera `),mf$1()(),gf$1(126,`button`,46),av(`click`,function(){return n.deselect()}),a_$1(127,` Deselect `),mf$1(),gf$1(128,`button`,46),av(`click`,function(){return n.copySelected()}),a_$1(129,` Copy `),mf$1(),gf$1(130,`button`,46),av(`click`,function(){return n.pasteClipboard()}),a_$1(131,` Paste `),mf$1(),gf$1(132,`button`,37),av(`click`,function(){return n.deleteSelected()}),rv(133,`i`,47),a_$1(134,` Delete `),mf$1(),gf$1(135,`button`,38),av(`click`,function(){return n.clearAll()}),rv(136,`i`,48),a_$1(137,` Clear All `),mf$1()()(),gf$1(138,`details`,49)(139,`summary`,9),a_$1(140,`Record & Playback`),mf$1(),gf$1(141,`div`,10),yT(142,Ex,2,0,`button`,50)(143,Ax,6,1),yT(144,Rx,3,3)(145,Ix,4,1),yT(146,Lx,2,3,`small`,11),mf$1()(),gf$1(147,`div`,51)(148,`button`,38),av(`click`,function(){return n.toggleFullscreen()}),rv(149,`i`,52),a_$1(150,` Fullscreen `),mf$1()(),gf$1(151,`div`,53),rv(152,`canvas`,null,0),yT(154,Bx,3,2,`div`,54),mf$1()()()),t&2&&(mb(17),DT(n.hasSelection?-1:17),mb(),hv(`btn-primary`,n.isAutoRotating())(`btn-outline-primary`,!n.isAutoRotating()),iv(`disabled`,!n.hasSelection),mb(3),DT(n.isAutoRotating()?21:-1),mb(),DT(n.hasSelection?22:-1),mb(),DT(n.isTexturable()?23:-1),mb(),DT(n.isWireframeToggleable()?24:-1),mb(),DT(n.isTerrainSelected()?25:-1),mb(),DT(n.hasSelection?26:-1),mb(),DT(n.hasSelection?27:-1),mb(),DT(n.isParticleSelected()?28:-1),mb(),DT(n.isLightSelected()?29:-1),mb(7),iv(`value`,n.backgroundColorHex),mb(),hv(`btn-primary`,n.gridVisible)(`btn-outline-secondary`,!n.gridVisible),mb(),Df$1(` Grid: `,n.gridVisible?`On`:`Off`,` `),mb(),hv(`btn-primary`,n.debugLogEnabled)(`btn-outline-secondary`,!n.debugLogEnabled),mb(),Df$1(` Debug Log: `,n.debugLogEnabled?`On`:`Off`,` `),mb(),hv(`btn-primary`,n.distanceHudEnabled)(`btn-outline-secondary`,!n.distanceHudEnabled),mb(),Df$1(` Distance/Speed HUD: `,n.distanceHudEnabled?`On`:`Off`,` `),mb(5),hv(`text-bg-success`,n.gamepadConnected)(`text-bg-secondary`,!n.gamepadConnected),mb(),Df$1(` `,n.gamepadConnected?`Connected`:`Not connected`,` `),mb(),hv(`btn-primary`,n.gamepadEnabled)(`btn-outline-secondary`,!n.gamepadEnabled),mb(),Df$1(` Gamepad Controls: `,n.gamepadEnabled?`On`:`Off`,` `),mb(8),DT(n.cameraPathError?58:-1),mb(5),Df$1(``,n.waypointCount(),` placed`),mb(3),iv(`value`,n.flyAlongPathDurationSeconds),mb(4),iv(`checked`,n.flyAlongPathLoop),mb(3),iv(`disabled`,n.waypointCount()<2),mb(7),DT(n.projectError?80:-1),mb(),DT(n.projectSuccessMessage?81:-1),mb(2),iv(`value`,n.selectedProjectId??``)(`disabled`,n.projectsLoading),mb(2),Ev(n.projects.length?`Load a saved project…`:`No saved projects yet`),mb(),CT(n.projects),mb(2),iv(`value`,n.projectName),mb(),iv(`disabled`,n.selectedProjectId===null||n.projectSaving),mb(2),iv(`disabled`,!n.projectName.trim()||n.projectSaving),mb(2),iv(`disabled`,n.selectedProjectId===null),mb(7),DT(n.selectedProjectId===null?100:101),mb(6),CT(n.shapeTypes),mb(6),DT(n.customModelReady?112:-1),mb(6),hv(`btn-primary`,n.mode===`select`)(`btn-outline-primary`,n.mode!==`select`),mb(2),hv(`btn-primary`,n.mode===`rotate`)(`btn-outline-primary`,n.mode!==`rotate`),iv(`disabled`,!n.hasSelection),mb(2),hv(`btn-primary`,n.mode===`scale`)(`btn-outline-primary`,n.mode!==`scale`),iv(`disabled`,!n.hasSelection),mb(2),hv(`btn-primary`,n.mode===`camera`)(`btn-outline-primary`,n.mode!==`camera`),mb(2),iv(`disabled`,!n.hasSelection),mb(2),iv(`disabled`,!n.hasSelection),mb(2),iv(`disabled`,!n.hasClipboard()),mb(2),iv(`disabled`,!n.hasSelection),mb(10),DT(n.recording?143:142),mb(2),DT(n.playbackActive?145:144),mb(2),DT(n.lastRecording?146:-1),mb(5),ec$1(`data-mode`,n.mode),mb(3),DT(n.distanceHudEnabled||n.lastRecording?154:-1))},styles:[`@charset "UTF-8";.three-d-generator-page[_ngcontent-%COMP%]{min-height:60vh}.three-d-generator-page[_ngcontent-%COMP%] > .container[_ngcontent-%COMP%]{padding-top:0;padding-bottom:60px}.three-d-generator-page[_ngcontent-%COMP%]   .auto-rotate-speed[_ngcontent-%COMP%]{width:70px}.three-d-generator-page[_ngcontent-%COMP%]   .projects-select[_ngcontent-%COMP%]{max-width:220px}.three-d-generator-page[_ngcontent-%COMP%]   .project-name[_ngcontent-%COMP%]{max-width:180px}.three-d-generator-page[_ngcontent-%COMP%]   .particle-slider[_ngcontent-%COMP%]{width:90px}.three-d-generator-page[_ngcontent-%COMP%]   .playback-scrubber[_ngcontent-%COMP%]{width:200px}.three-d-generator-page[_ngcontent-%COMP%]   .toolbar-section[_ngcontent-%COMP%]{padding-bottom:12px;margin-bottom:12px;border-bottom:1px solid #e9ecef}.three-d-generator-page[_ngcontent-%COMP%]   .toolbar-section.toolbar-section-last[_ngcontent-%COMP%]{border-bottom:none;margin-bottom:16px}.three-d-generator-page[_ngcontent-%COMP%]   .toolbar-section-title[_ngcontent-%COMP%]{margin-bottom:6px;color:#6c757d;text-transform:uppercase;font-size:.7rem;letter-spacing:.05em;cursor:pointer;-webkit-user-select:none;user-select:none;list-style:none}.three-d-generator-page[_ngcontent-%COMP%]   .toolbar-section-title[_ngcontent-%COMP%]::-webkit-details-marker{display:none}.three-d-generator-page[_ngcontent-%COMP%]   .toolbar-section-title[_ngcontent-%COMP%]:before{content:"\\25b8";display:inline-block;width:1em;transition:transform .15s ease}.three-d-generator-page[_ngcontent-%COMP%]   details[open][_ngcontent-%COMP%] > .toolbar-section-title[_ngcontent-%COMP%]:before{transform:rotate(90deg)}.three-d-generator-page[_ngcontent-%COMP%]   .canvas-wrap[_ngcontent-%COMP%]{position:relative;border:1px solid #e9ecef;border-radius:8px;overflow:hidden;line-height:0}.three-d-generator-page[_ngcontent-%COMP%]   .canvas-wrap[_ngcontent-%COMP%]   canvas[_ngcontent-%COMP%]{display:block;width:100%;touch-action:none;cursor:pointer}.three-d-generator-page[_ngcontent-%COMP%]   .canvas-wrap[data-mode=rotate][_ngcontent-%COMP%]   canvas[_ngcontent-%COMP%]{cursor:grab}.three-d-generator-page[_ngcontent-%COMP%]   .canvas-wrap[data-mode=scale][_ngcontent-%COMP%]   canvas[_ngcontent-%COMP%]{cursor:ns-resize}.three-d-generator-page[_ngcontent-%COMP%]   .canvas-wrap[data-mode=camera][_ngcontent-%COMP%]   canvas[_ngcontent-%COMP%]{cursor:all-scroll}.three-d-generator-page[_ngcontent-%COMP%]   .canvas-wrap[_ngcontent-%COMP%]:fullscreen{width:100vw;border-radius:0}.three-d-generator-page[_ngcontent-%COMP%]   .viewport-hud[_ngcontent-%COMP%]{position:absolute;left:0;right:0;bottom:0;display:flex;flex-direction:column;gap:4px;padding:8px 12px;line-height:normal;background:linear-gradient(to top,#0000008c,#0000);pointer-events:none}.three-d-generator-page[_ngcontent-%COMP%]   .viewport-hud-stats[_ngcontent-%COMP%]{display:flex;justify-content:space-between;color:#fff;font-size:.8rem;font-variant-numeric:tabular-nums;text-shadow:0 1px 2px rgba(0,0,0,.8)}.three-d-generator-page[_ngcontent-%COMP%]   .viewport-hud-scrubber[_ngcontent-%COMP%]{pointer-events:auto}.three-d-generator-page[_ngcontent-%COMP%]   .viewport-hud-scrubber[_ngcontent-%COMP%]   .playback-scrubber[_ngcontent-%COMP%]{flex:1 1 auto;width:auto}.three-d-generator-page[_ngcontent-%COMP%]   .viewport-hud-scrubber[_ngcontent-%COMP%]   small[_ngcontent-%COMP%]{color:#fff;white-space:nowrap;text-shadow:0 1px 2px rgba(0,0,0,.8)}`],changeDetection:1})};export{Hd as ThreeDGeneratorComponent};