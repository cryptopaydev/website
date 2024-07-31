function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["./index-B8YrNbYv.js","./___vite-browser-external_commonjs-proxy-D9uPsQHl.js","./index.es-DRrlvpFG.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
var e,t,n;!function(){const e=document.createElement("link").relList;if(!(e&&e.supports&&e.supports("modulepreload"))){for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver((e=>{for(const n of e)if("childList"===n.type)for(const e of n.addedNodes)"LINK"===e.tagName&&"modulepreload"===e.rel&&t(e)})).observe(document,{childList:!0,subtree:!0})}function t(e){if(e.ep)return;e.ep=!0;const t=function(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),"use-credentials"===e.crossOrigin?t.credentials="include":"anonymous"===e.crossOrigin?t.credentials="omit":t.credentials="same-origin",t}(e);fetch(e.href,t)}}();const i={},r=function(e,t,n){let r=Promise.resolve();if(t&&t.length>0){const e=document.getElementsByTagName("link");r=Promise.all(t.map((t=>{if(t=function(e,t){return new URL(e,t).href}(t,n),t in i)return;i[t]=!0;const r=t.endsWith(".css"),a=r?'[rel="stylesheet"]':"";if(!!n)for(let n=e.length-1;n>=0;n--){const i=e[n];if(i.href===t&&(!r||"stylesheet"===i.rel))return}else if(document.querySelector(`link[href="${t}"]${a}`))return;const o=document.createElement("link");return o.rel=r?"stylesheet":"modulepreload",r||(o.as="script",o.crossOrigin=""),o.href=t,document.head.appendChild(o),r?new Promise(((e,n)=>{o.addEventListener("load",e),o.addEventListener("error",(()=>n(new Error(`Unable to preload CSS for ${t}`))))})):void 0})))}return r.then((()=>e())).catch((e=>{const t=new Event("vite:preloadError",{cancelable:!0});if(t.payload=e,window.dispatchEvent(t),!t.defaultPrevented)throw e}))};var a="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function o(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}function s(e){if(e.__esModule)return e;var t=e.default;if("function"==typeof t){var n=function e(){return this instanceof e?Reflect.construct(t,arguments,this.constructor):t.apply(this,arguments)};n.prototype=t.prototype}else n={};return Object.defineProperty(n,"__esModule",{value:!0}),Object.keys(e).forEach((function(t){var i=Object.getOwnPropertyDescriptor(e,t);Object.defineProperty(n,t,i.get?i:{enumerable:!0,get:function(){return e[t]}})})),n}const l=e=>e;let c=class e extends Error{constructor(t,n={}){var i;super(),Object.defineProperty(this,"details",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"docsPath",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"metaMessages",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"shortMessage",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ViemError"}),Object.defineProperty(this,"version",{enumerable:!0,configurable:!0,writable:!0,value:"viem@2.7.19"});const r=n.cause instanceof e?n.cause.details:(null==(i=n.cause)?void 0:i.message)?n.cause.message:n.details,a=n.cause instanceof e&&n.cause.docsPath||n.docsPath;this.message=[t||"An error occurred.","",...n.metaMessages?[...n.metaMessages,""]:[],...a?[`Docs: https://viem.sh${a}${n.docsSlug?`#${n.docsSlug}`:""}`]:[],...r?[`Details: ${r}`]:[],`Version: ${this.version}`].join("\n"),n.cause&&(this.cause=n.cause),this.details=r,this.docsPath=a,this.metaMessages=n.metaMessages,this.shortMessage=t}walk(e){return u(this,e)}};function u(e,t){return(null==t?void 0:t(e))?e:e&&"object"==typeof e&&"cause"in e?u(e.cause,t):t?null:e}class d extends c{constructor({max:e,min:t,signed:n,size:i,value:r}){super(`Number "${r}" is not in safe ${i?`${8*i}-bit ${n?"signed":"unsigned"} `:""}integer range ${e?`(${t} to ${e})`:`(above ${t})`}`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"IntegerOutOfRangeError"})}}class p extends c{constructor(e){super(`Bytes value "${e}" is not a valid boolean. The bytes array must contain a single byte of either a 0 or 1 value.`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InvalidBytesBooleanError"})}}class h extends c{constructor({givenSize:e,maxSize:t}){super(`Size cannot exceed ${t} bytes. Given size: ${e} bytes.`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"SizeOverflowError"})}}class f extends c{constructor({offset:e,position:t,size:n}){super(`Slice ${"start"===t?"starting":"ending"} at offset "${e}" is out-of-bounds (size: ${n}).`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"SliceOffsetOutOfBoundsError"})}}class m extends c{constructor({size:e,targetSize:t,type:n}){super(`${n.charAt(0).toUpperCase()}${n.slice(1).toLowerCase()} size (${e}) exceeds padding size (${t}).`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"SizeExceedsPaddingSizeError"})}}class g extends c{constructor({size:e,targetSize:t,type:n}){super(`${n.charAt(0).toUpperCase()}${n.slice(1).toLowerCase()} is expected to be ${t} ${n} long, but is ${e} ${n} long.`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InvalidBytesLengthError"})}}function w(e,{dir:t,size:n=32}={}){return"string"==typeof e?y(e,{dir:t,size:n}):function(e,{dir:t,size:n=32}={}){if(null===n)return e;if(e.length>n)throw new m({size:e.length,targetSize:n,type:"bytes"});const i=new Uint8Array(n);for(let r=0;r<n;r++){const a="right"===t;i[a?r:n-r-1]=e[a?r:e.length-r-1]}return i}(e,{dir:t,size:n})}function y(e,{dir:t,size:n=32}={}){if(null===n)return e;const i=e.replace("0x","");if(i.length>2*n)throw new m({size:Math.ceil(i.length/2),targetSize:n,type:"hex"});return`0x${i["right"===t?"padEnd":"padStart"](2*n,"0")}`}function v(e,{strict:t=!0}={}){return!!e&&("string"==typeof e&&(t?/^0x[0-9a-fA-F]*$/.test(e):e.startsWith("0x")))}function b(e){return v(e,{strict:!1})?Math.ceil((e.length-2)/2):e.length}function x(e,{dir:t="left"}={}){let n="string"==typeof e?e.replace("0x",""):e,i=0;for(let r=0;r<n.length-1&&"0"===n["left"===t?r:n.length-r-1].toString();r++)i++;return n="left"===t?n.slice(i):n.slice(0,n.length-i),"string"==typeof e?(1===n.length&&"right"===t&&(n=`${n}0`),`0x${n.length%2==1?`0${n}`:n}`):n}const C=new TextEncoder;function _(e,t={}){return"number"==typeof e||"bigint"==typeof e?function(e,t){const n=U(e,t);return T(n)}(e,t):"boolean"==typeof e?function(e,t={}){const n=new Uint8Array(1);if(n[0]=Number(e),"number"==typeof t.size)return I(n,{size:t.size}),w(n,{size:t.size});return n}(e,t):v(e)?T(e,t):A(e,t)}const E={zero:48,nine:57,A:65,F:70,a:97,f:102};function k(e){return e>=E.zero&&e<=E.nine?e-E.zero:e>=E.A&&e<=E.F?e-(E.A-10):e>=E.a&&e<=E.f?e-(E.a-10):void 0}function T(e,t={}){let n=e;t.size&&(I(n,{size:t.size}),n=w(n,{dir:"right",size:t.size}));let i=n.slice(2);i.length%2&&(i=`0${i}`);const r=i.length/2,a=new Uint8Array(r);for(let o=0,s=0;o<r;o++){const e=k(i.charCodeAt(s++)),t=k(i.charCodeAt(s++));if(void 0===e||void 0===t)throw new c(`Invalid byte sequence ("${i[s-2]}${i[s-1]}" in "${i}").`);a[o]=16*e+t}return a}function A(e,t={}){const n=C.encode(e);return"number"==typeof t.size?(I(n,{size:t.size}),w(n,{dir:"right",size:t.size})):n}function I(e,{size:t}){if(b(e)>t)throw new h({givenSize:b(e),maxSize:t})}function P(e,t={}){const{signed:n}=t;t.size&&I(e,{size:t.size});const i=BigInt(e);if(!n)return i;const r=(e.length-2)/2;return i<=(1n<<8n*BigInt(r)-1n)-1n?i:i-BigInt(`0x${"f".padStart(2*r,"f")}`)-1n}function S(e,t={}){return Number(P(e,t))}function R(e,t={}){let n=T(e);return t.size&&(I(n,{size:t.size}),n=x(n,{dir:"right"})),(new TextDecoder).decode(n)}const O=Array.from({length:256},((e,t)=>t.toString(16).padStart(2,"0")));function N(e,t={}){return"number"==typeof e||"bigint"==typeof e?U(e,t):"string"==typeof e?B(e,t):"boolean"==typeof e?M(e,t):j(e,t)}function M(e,t={}){const n=`0x${Number(e)}`;return"number"==typeof t.size?(I(n,{size:t.size}),w(n,{size:t.size})):n}function j(e,t={}){let n="";for(let r=0;r<e.length;r++)n+=O[e[r]];const i=`0x${n}`;return"number"==typeof t.size?(I(i,{size:t.size}),w(i,{dir:"right",size:t.size})):i}function U(e,t={}){const{signed:n,size:i}=t,r=BigInt(e);let a;i?a=n?(1n<<8n*BigInt(i)-1n)-1n:2n**(8n*BigInt(i))-1n:"number"==typeof e&&(a=BigInt(Number.MAX_SAFE_INTEGER));const o="bigint"==typeof a&&n?-a-1n:0;if(a&&r>a||r<o){const t="bigint"==typeof e?"n":"";throw new d({max:a?`${a}${t}`:void 0,min:`${o}${t}`,signed:n,size:i,value:`${e}${t}`})}const s=`0x${(n&&r<0?(1n<<BigInt(8*i))+BigInt(r):r).toString(16)}`;return i?w(s,{size:i}):s}const D=new TextEncoder;function B(e,t={}){return j(D.encode(e),t)}function L(e,{includeName:t=!1}={}){if("function"!==e.type&&"event"!==e.type&&"error"!==e.type)throw new ee(e.type);return`${e.name}(${z(e.inputs,{includeName:t})})`}function z(e,{includeName:t=!1}={}){return e?e.map((e=>function(e,{includeName:t}){if(e.type.startsWith("tuple"))return`(${z(e.components,{includeName:t})})${e.type.slice(5)}`;return e.type+(t&&e.name?` ${e.name}`:"")}(e,{includeName:t}))).join(t?", ":","):""}class F extends c{constructor({data:e,params:t,size:n}){super([`Data size of ${n} bytes is too small for given parameters.`].join("\n"),{metaMessages:[`Params: (${z(t,{includeName:!0})})`,`Data:   ${e} (${n} bytes)`]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiDecodingDataSizeTooSmallError"}),Object.defineProperty(this,"data",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"params",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"size",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.data=e,this.params=t,this.size=n}}class W extends c{constructor(){super('Cannot decode zero data ("0x") with ABI parameters.'),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiDecodingZeroDataError"})}}class H extends c{constructor({expectedLength:e,givenLength:t,type:n}){super([`ABI encoding array length mismatch for type ${n}.`,`Expected length: ${e}`,`Given length: ${t}`].join("\n")),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiEncodingArrayLengthMismatchError"})}}class Z extends c{constructor({expectedSize:e,value:t}){super(`Size of bytes "${t}" (bytes${b(t)}) does not match expected size (bytes${e}).`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiEncodingBytesSizeMismatchError"})}}class V extends c{constructor({expectedLength:e,givenLength:t}){super(["ABI encoding params/values length mismatch.",`Expected length (params): ${e}`,`Given length (values): ${t}`].join("\n")),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiEncodingLengthMismatchError"})}}class G extends c{constructor(e,{docsPath:t}){super([`Encoded error signature "${e}" not found on ABI.`,"Make sure you are using the correct ABI and that the error exists on it.",`You can look up the decoded signature here: https://openchain.xyz/signatures?query=${e}.`].join("\n"),{docsPath:t}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiErrorSignatureNotFoundError"}),Object.defineProperty(this,"signature",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.signature=e}}class q extends c{constructor(e,{docsPath:t}={}){super([`Function ${e?`"${e}" `:""}not found on ABI.`,"Make sure you are using the correct ABI and that the function exists on it."].join("\n"),{docsPath:t}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiFunctionNotFoundError"})}}class K extends c{constructor(e,{docsPath:t}){super([`Function "${e}" does not contain any \`outputs\` on ABI.`,"Cannot decode function result without knowing what the parameter types are.","Make sure you are using the correct ABI and that the function exists on it."].join("\n"),{docsPath:t}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiFunctionOutputsNotFoundError"})}}class Y extends c{constructor(e,t){super("Found ambiguous types in overloaded ABI items.",{metaMessages:[`\`${e.type}\` in \`${L(e.abiItem)}\`, and`,`\`${t.type}\` in \`${L(t.abiItem)}\``,"","These types encode differently and cannot be distinguished at runtime.","Remove one of the ambiguous items in the ABI."]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiItemAmbiguityError"})}}class J extends c{constructor(e,{docsPath:t}){super([`Type "${e}" is not a valid encoding type.`,"Please provide a valid ABI type."].join("\n"),{docsPath:t}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InvalidAbiEncodingType"})}}class Q extends c{constructor(e,{docsPath:t}){super([`Type "${e}" is not a valid decoding type.`,"Please provide a valid ABI type."].join("\n"),{docsPath:t}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InvalidAbiDecodingType"})}}class X extends c{constructor(e){super([`Value "${e}" is not a valid array.`].join("\n")),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InvalidArrayError"})}}class ee extends c{constructor(e){super([`"${e}" is not a valid definition type.`,'Valid types: "function", "event", "error"'].join("\n")),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InvalidDefinitionTypeError"})}}function te(e){return"string"==typeof e[0]?ne(e):function(e){let t=0;for(const r of e)t+=r.length;const n=new Uint8Array(t);let i=0;for(const r of e)n.set(r,i),i+=r.length;return n}(e)}function ne(e){return`0x${e.reduce(((e,t)=>e+t.replace("0x","")),"")}`}class ie extends c{constructor({address:e}){super(`Address "${e}" is invalid.`,{metaMessages:["- Address must be a hex value of 20 bytes (40 hex characters).","- Address must match its checksum counterpart."]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InvalidAddressError"})}}class re extends Map{constructor(e){super(),Object.defineProperty(this,"maxSize",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.maxSize=e}set(e,t){return super.set(e,t),this.maxSize&&this.size>this.maxSize&&this.delete(this.keys().next().value),this}}function ae(e){if(!Number.isSafeInteger(e)||e<0)throw new Error(`Wrong positive integer: ${e}`)}function oe(e,...t){if(!(e instanceof Uint8Array))throw new Error("Expected Uint8Array");if(t.length>0&&!t.includes(e.length))throw new Error(`Expected Uint8Array of length ${t}, not of length=${e.length}`)}function se(e,t=!0){if(e.destroyed)throw new Error("Hash instance has been destroyed");if(t&&e.finished)throw new Error("Hash#digest() has already been called")}const le=BigInt(2**32-1),ce=BigInt(32);function ue(e,t=!1){return t?{h:Number(e&le),l:Number(e>>ce&le)}:{h:0|Number(e>>ce&le),l:0|Number(e&le)}}function de(e,t=!1){let n=new Uint32Array(e.length),i=new Uint32Array(e.length);for(let r=0;r<e.length;r++){const{h:a,l:o}=ue(e[r],t);[n[r],i[r]]=[a,o]}return[n,i]}const pe=e=>e instanceof Uint8Array;if(!(68===new Uint8Array(new Uint32Array([287454020]).buffer)[0]))throw new Error("Non little-endian hardware is not supported");function he(e){if("string"==typeof e&&(e=function(e){if("string"!=typeof e)throw new Error("utf8ToBytes expected string, got "+typeof e);return new Uint8Array((new TextEncoder).encode(e))}(e)),!pe(e))throw new Error("expected Uint8Array, got "+typeof e);return e}class fe{clone(){return this._cloneInto()}}const[me,ge,we]=[[],[],[]],ye=BigInt(0),ve=BigInt(1),be=BigInt(2),xe=BigInt(7),Ce=BigInt(256),_e=BigInt(113);for(let $=0,ca=ve,xE=1,CE=0;$<24;$++){[xE,CE]=[CE,(2*xE+3*CE)%5],me.push(2*(5*CE+xE)),ge.push(($+1)*($+2)/2%64);let e=ye;for(let t=0;t<7;t++)ca=(ca<<ve^(ca>>xe)*_e)%Ce,ca&be&&(e^=ve<<(ve<<BigInt(t))-ve);we.push(e)}const[Ee,ke]=de(we,!0),Te=(e,t,n)=>n>32?((e,t,n)=>t<<n-32|e>>>64-n)(e,t,n):((e,t,n)=>e<<n|t>>>32-n)(e,t,n),Ae=(e,t,n)=>n>32?((e,t,n)=>e<<n-32|t>>>64-n)
/*! noble-hashes - MIT License (c) 2022 Paul Miller (paulmillr.com) */(e,t,n):((e,t,n)=>t<<n|e>>>32-n)(e,t,n);class $e extends fe{constructor(e,t,n,i=!1,r=24){if(super(),this.blockLen=e,this.suffix=t,this.outputLen=n,this.enableXOF=i,this.rounds=r,this.pos=0,this.posOut=0,this.finished=!1,this.destroyed=!1,ae(n),0>=this.blockLen||this.blockLen>=200)throw new Error("Sha3 supports only keccak-f1600 function");var a;this.state=new Uint8Array(200),this.state32=(a=this.state,new Uint32Array(a.buffer,a.byteOffset,Math.floor(a.byteLength/4)))}keccak(){!function(e,t=24){const n=new Uint32Array(10);for(let i=24-t;i<24;i++){for(let i=0;i<10;i++)n[i]=e[i]^e[i+10]^e[i+20]^e[i+30]^e[i+40];for(let i=0;i<10;i+=2){const t=(i+8)%10,r=(i+2)%10,a=n[r],o=n[r+1],s=Te(a,o,1)^n[t],l=Ae(a,o,1)^n[t+1];for(let n=0;n<50;n+=10)e[i+n]^=s,e[i+n+1]^=l}let t=e[2],r=e[3];for(let n=0;n<24;n++){const i=ge[n],a=Te(t,r,i),o=Ae(t,r,i),s=me[n];t=e[s],r=e[s+1],e[s]=a,e[s+1]=o}for(let i=0;i<50;i+=10){for(let t=0;t<10;t++)n[t]=e[i+t];for(let t=0;t<10;t++)e[i+t]^=~n[(t+2)%10]&n[(t+4)%10]}e[0]^=Ee[i],e[1]^=ke[i]}n.fill(0)}(this.state32,this.rounds),this.posOut=0,this.pos=0}update(e){se(this);const{blockLen:t,state:n}=this,i=(e=he(e)).length;for(let r=0;r<i;){const a=Math.min(t-this.pos,i-r);for(let t=0;t<a;t++)n[this.pos++]^=e[r++];this.pos===t&&this.keccak()}return this}finish(){if(this.finished)return;this.finished=!0;const{state:e,suffix:t,pos:n,blockLen:i}=this;e[n]^=t,0!=(128&t)&&n===i-1&&this.keccak(),e[i-1]^=128,this.keccak()}writeInto(e){se(this,!1),oe(e),this.finish();const t=this.state,{blockLen:n}=this;for(let i=0,r=e.length;i<r;){this.posOut>=n&&this.keccak();const a=Math.min(n-this.posOut,r-i);e.set(t.subarray(this.posOut,this.posOut+a),i),this.posOut+=a,i+=a}return e}xofInto(e){if(!this.enableXOF)throw new Error("XOF is not possible for this instance");return this.writeInto(e)}xof(e){return ae(e),this.xofInto(new Uint8Array(e))}digestInto(e){if(function(e,t){oe(e);const n=t.outputLen;if(e.length<n)throw new Error(`digestInto() expects output buffer of length at least ${n}`)}(e,this),this.finished)throw new Error("digest() was already called");return this.writeInto(e),this.destroy(),e}digest(){return this.digestInto(new Uint8Array(this.outputLen))}destroy(){this.destroyed=!0,this.state.fill(0)}_cloneInto(e){const{blockLen:t,suffix:n,outputLen:i,rounds:r,enableXOF:a}=this;return e||(e=new $e(t,n,i,a,r)),e.state32.set(this.state32),e.pos=this.pos,e.posOut=this.posOut,e.finished=this.finished,e.rounds=r,e.suffix=n,e.outputLen=i,e.enableXOF=a,e.destroyed=this.destroyed,e}}const Ie=((e,t,n)=>function(e){const t=t=>e().update(he(t)).digest(),n=e();return t.outputLen=n.outputLen,t.blockLen=n.blockLen,t.create=()=>e(),t}((()=>new $e(t,e,n))))(1,136,32);function Pe(e,t){const n=t||"hex",i=Ie(v(e,{strict:!1})?_(e):e);return"bytes"===n?i:N(i)}function Se(e,t){const n=t?`${t}${e.toLowerCase()}`:e.substring(2).toLowerCase(),i=Pe(A(n),"bytes"),r=(t?n.substring(`${t}0x`.length):n).split("");for(let a=0;a<40;a+=2)i[a>>1]>>4>=8&&r[a]&&(r[a]=r[a].toUpperCase()),(15&i[a>>1])>=8&&r[a+1]&&(r[a+1]=r[a+1].toUpperCase());return`0x${r.join("")}`}function Re(e,t){if(!Me(e))throw new ie({address:e});return Se(e,t)}const Oe=/^0x[a-fA-F0-9]{40}$/,Ne=new re(8192);function Me(e,{strict:t=!0}={}){if(Ne.has(e))return Ne.get(e);const n=!(!Oe.test(e)||e.toLowerCase()!==e&&t&&Se(e)!==e);return Ne.set(e,n),n}function je(e,t,n,{strict:i}={}){return v(e,{strict:!1})?function(e,t,n,{strict:i}={}){Ue(e,t);const r=`0x${e.replace("0x","").slice(2*(t??0),2*(n??e.length))}`;i&&De(r,t,n);return r}(e,t,n,{strict:i}):Be(e,t,n,{strict:i})}function Ue(e,t){if("number"==typeof t&&t>0&&t>b(e)-1)throw new f({offset:t,position:"start",size:b(e)})}function De(e,t,n){if("number"==typeof t&&"number"==typeof n&&b(e)!==n-t)throw new f({offset:n,position:"end",size:b(e)})}function Be(e,t,n,{strict:i}={}){Ue(e,t);const r=e.slice(t,n);return i&&De(r,t,n),r}function Le(e,t){if(e.length!==t.length)throw new V({expectedLength:e.length,givenLength:t.length});const n=function({params:e,values:t}){const n=[];for(let i=0;i<e.length;i++)n.push(ze({param:e[i],value:t[i]}));return n}({params:e,values:t}),i=Fe(n);return 0===i.length?"0x":i}function ze({param:e,value:t}){const n=We(e.type);if(n){const[i,r]=n;return function(e,{length:t,param:n}){const i=null===t;if(!Array.isArray(e))throw new X(e);if(!i&&e.length!==t)throw new H({expectedLength:t,givenLength:e.length,type:`${n.type}[${t}]`});let r=!1;const a=[];for(let o=0;o<e.length;o++){const t=ze({param:n,value:e[o]});t.dynamic&&(r=!0),a.push(t)}if(i||r){const e=Fe(a);if(i){const t=U(a.length,{size:32});return{dynamic:!0,encoded:a.length>0?te([t,e]):t}}if(r)return{dynamic:!0,encoded:e}}return{dynamic:!1,encoded:te(a.map((({encoded:e})=>e)))}}(t,{length:i,param:{...e,type:r}})}if("tuple"===e.type)return function(e,{param:t}){let n=!1;const i=[];for(let r=0;r<t.components.length;r++){const a=t.components[r],o=ze({param:a,value:e[Array.isArray(e)?r:a.name]});i.push(o),o.dynamic&&(n=!0)}return{dynamic:n,encoded:n?Fe(i):te(i.map((({encoded:e})=>e)))}}(t,{param:e});if("address"===e.type)return function(e){if(!Me(e))throw new ie({address:e});return{dynamic:!1,encoded:y(e.toLowerCase())}}(t);if("bool"===e.type)return function(e){return{dynamic:!1,encoded:y(M(e))}}(t);if(e.type.startsWith("uint")||e.type.startsWith("int")){return function(e,{signed:t}){return{dynamic:!1,encoded:U(e,{size:32,signed:t})}}(t,{signed:e.type.startsWith("int")})}if(e.type.startsWith("bytes"))return function(e,{param:t}){const[,n]=t.type.split("bytes"),i=b(e);if(!n){let t=e;return i%32!=0&&(t=y(t,{dir:"right",size:32*Math.ceil((e.length-2)/2/32)})),{dynamic:!0,encoded:te([y(U(i,{size:32})),t])}}if(i!==parseInt(n))throw new Z({expectedSize:parseInt(n),value:e});return{dynamic:!1,encoded:y(e,{dir:"right"})}}(t,{param:e});if("string"===e.type)return function(e){const t=B(e),n=Math.ceil(b(t)/32),i=[];for(let r=0;r<n;r++)i.push(y(je(t,32*r,32*(r+1)),{dir:"right"}));return{dynamic:!0,encoded:te([y(U(b(t),{size:32})),...i])}}(t);throw new J(e.type,{docsPath:"/docs/contract/encodeAbiParameters"})}function Fe(e){let t=0;for(let a=0;a<e.length;a++){const{dynamic:n,encoded:i}=e[a];t+=n?32:b(i)}const n=[],i=[];let r=0;for(let a=0;a<e.length;a++){const{dynamic:o,encoded:s}=e[a];o?(n.push(U(t+r,{size:32})),i.push(s),r+=b(s)):n.push(s)}return te([...n,...i])}function We(e){const t=e.match(/^(.*)\[(\d+)?\]$/);return t?[t[2]?Number(t[2]):null,t[1]]:void 0}function He(e){return"string"==typeof e?{address:e,type:"json-rpc"}:e}class Ze extends c{constructor({docsPath:e}={}){super(["Could not find an Account to execute with this Action.","Please provide an Account with the `account` argument on the Action, or by supplying an `account` to the WalletClient."].join("\n"),{docsPath:e,docsSlug:"account"}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AccountNotFoundError"})}}class Ve extends c{constructor({blockNumber:e,chain:t,contract:n}){super(`Chain "${t.name}" does not support contract "${n.name}".`,{metaMessages:["This could be due to any of the following:",...e&&n.blockCreated&&n.blockCreated>e?[`- The contract "${n.name}" was not deployed until block ${n.blockCreated} (current block ${e}).`]:[`- The chain does not have the contract "${n.name}" configured.`]]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ChainDoesNotSupportContract"})}}class Ge extends c{constructor({chain:e,currentChainId:t}){super(`The current chain of the wallet (id: ${t}) does not match the target chain for the transaction (id: ${e.id} – ${e.name}).`,{metaMessages:[`Current Chain ID:  ${t}`,`Expected Chain ID: ${e.id} – ${e.name}`]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ChainMismatchError"})}}class qe extends c{constructor(){super(["No chain was provided to the request.","Please provide a chain with the `chain` argument on the Action, or by supplying a `chain` to WalletClient."].join("\n")),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ChainNotFoundError"})}}class Ke extends c{constructor(){super("No chain was provided to the Client."),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ClientChainNotConfiguredError"})}}class Ye extends c{constructor({chainId:e}){super("number"==typeof e?`Chain ID "${e}" is invalid.`:"Chain ID is invalid."),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InvalidChainIdError"})}}const Je={gwei:9,wei:18},Qe={ether:-9,wei:9},Xe={ether:-18,gwei:-9};function et(e,t){let n=e.toString();const i=n.startsWith("-");i&&(n=n.slice(1)),n=n.padStart(t,"0");let[r,a]=[n.slice(0,n.length-t),n.slice(n.length-t)];return a=a.replace(/(0+)$/,""),`${i?"-":""}${r||"0"}${a?`.${a}`:""}`}function tt(e,t="wei"){return et(e,Qe[t])}class nt extends c{constructor({cause:e,message:t}={}){var n;const i=null==(n=null==t?void 0:t.replace("execution reverted: ",""))?void 0:n.replace("execution reverted","");super(`Execution reverted ${i?`with reason: ${i}`:"for an unknown reason"}.`,{cause:e}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ExecutionRevertedError"})}}Object.defineProperty(nt,"code",{enumerable:!0,configurable:!0,writable:!0,value:3}),Object.defineProperty(nt,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/execution reverted/});class it extends c{constructor({cause:e,maxFeePerGas:t}={}){super(`The fee cap (\`maxFeePerGas\`${t?` = ${tt(t)} gwei`:""}) cannot be higher than the maximum allowed value (2^256-1).`,{cause:e}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"FeeCapTooHigh"})}}Object.defineProperty(it,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/max fee per gas higher than 2\^256-1|fee cap higher than 2\^256-1/});class rt extends c{constructor({cause:e,maxFeePerGas:t}={}){super(`The fee cap (\`maxFeePerGas\`${t?` = ${tt(t)}`:""} gwei) cannot be lower than the block base fee.`,{cause:e}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"FeeCapTooLow"})}}Object.defineProperty(rt,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/max fee per gas less than block base fee|fee cap less than block base fee|transaction is outdated/});class at extends c{constructor({cause:e,nonce:t}={}){super(`Nonce provided for the transaction ${t?`(${t}) `:""}is higher than the next one expected.`,{cause:e}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"NonceTooHighError"})}}Object.defineProperty(at,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/nonce too high/});class ot extends c{constructor({cause:e,nonce:t}={}){super([`Nonce provided for the transaction ${t?`(${t}) `:""}is lower than the current nonce of the account.`,"Try increasing the nonce or find the latest nonce with `getTransactionCount`."].join("\n"),{cause:e}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"NonceTooLowError"})}}Object.defineProperty(ot,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/nonce too low|transaction already imported|already known/});class st extends c{constructor({cause:e,nonce:t}={}){super(`Nonce provided for the transaction ${t?`(${t}) `:""}exceeds the maximum allowed nonce.`,{cause:e}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"NonceMaxValueError"})}}Object.defineProperty(st,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/nonce has max value/});class lt extends c{constructor({cause:e}={}){super(["The total cost (gas * gas fee + value) of executing this transaction exceeds the balance of the account."].join("\n"),{cause:e,metaMessages:["This error could arise when the account does not have enough funds to:"," - pay for the total gas fee,"," - pay for the value to send."," ","The cost of the transaction is calculated as `gas * gas fee + value`, where:"," - `gas` is the amount of gas needed for transaction to execute,"," - `gas fee` is the gas fee,"," - `value` is the amount of ether to send to the recipient."]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InsufficientFundsError"})}}Object.defineProperty(lt,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/insufficient funds/});class ct extends c{constructor({cause:e,gas:t}={}){super(`The amount of gas ${t?`(${t}) `:""}provided for the transaction exceeds the limit allowed for the block.`,{cause:e}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"IntrinsicGasTooHighError"})}}Object.defineProperty(ct,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/intrinsic gas too high|gas limit reached/});class ut extends c{constructor({cause:e,gas:t}={}){super(`The amount of gas ${t?`(${t}) `:""}provided for the transaction is too low.`,{cause:e}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"IntrinsicGasTooLowError"})}}Object.defineProperty(ut,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/intrinsic gas too low/});class dt extends c{constructor({cause:e}){super("The transaction type is not supported for this chain.",{cause:e}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"TransactionTypeNotSupportedError"})}}Object.defineProperty(dt,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/transaction type not valid/});class pt extends c{constructor({cause:e,maxPriorityFeePerGas:t,maxFeePerGas:n}={}){super([`The provided tip (\`maxPriorityFeePerGas\`${t?` = ${tt(t)} gwei`:""}) cannot be higher than the fee cap (\`maxFeePerGas\`${n?` = ${tt(n)} gwei`:""}).`].join("\n"),{cause:e}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"TipAboveFeeCapError"})}}Object.defineProperty(pt,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/max priority fee per gas higher than max fee per gas|tip higher than fee cap/});class ht extends c{constructor({cause:e}){super(`An error occurred while executing: ${null==e?void 0:e.shortMessage}`,{cause:e}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"UnknownNodeError"})}}function ft(e,t="wei"){return et(e,Je[t])}function mt(e){const t=Object.entries(e).map((([e,t])=>void 0===t||!1===t?null:[e,t])).filter(Boolean),n=t.reduce(((e,[t])=>Math.max(e,t.length)),0);return t.map((([e,t])=>`  ${`${e}:`.padEnd(n+1)}  ${t}`)).join("\n")}class gt extends c{constructor(){super(["Cannot specify both a `gasPrice` and a `maxFeePerGas`/`maxPriorityFeePerGas`.","Use `maxFeePerGas`/`maxPriorityFeePerGas` for EIP-1559 compatible networks, and `gasPrice` for others."].join("\n")),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"FeeConflictError"})}}class wt extends c{constructor({v:e}){super(`Invalid \`v\` value "${e}". Expected 27 or 28.`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InvalidLegacyVError"})}}class yt extends c{constructor({transaction:e}){super("Cannot infer a transaction type from provided transaction.",{metaMessages:["Provided Transaction:","{",mt(e),"}","","To infer the type, either provide:","- a `type` to the Transaction, or","- an EIP-1559 Transaction with `maxFeePerGas`, or","- an EIP-2930 Transaction with `gasPrice` & `accessList`, or","- a Legacy Transaction with `gasPrice`"]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InvalidSerializableTransactionError"})}}class vt extends c{constructor({storageKey:e}){super(`Size for storage key "${e}" is invalid. Expected 32 bytes. Got ${Math.floor((e.length-2)/2)} bytes.`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InvalidStorageKeySizeError"})}}class bt extends c{constructor(e,{account:t,docsPath:n,chain:i,data:r,gas:a,gasPrice:o,maxFeePerGas:s,maxPriorityFeePerGas:l,nonce:c,to:u,value:d}){var p;const h=mt({chain:i&&`${null==i?void 0:i.name} (id: ${null==i?void 0:i.id})`,from:null==t?void 0:t.address,to:u,value:void 0!==d&&`${ft(d)} ${(null==(p=null==i?void 0:i.nativeCurrency)?void 0:p.symbol)||"ETH"}`,data:r,gas:a,gasPrice:void 0!==o&&`${tt(o)} gwei`,maxFeePerGas:void 0!==s&&`${tt(s)} gwei`,maxPriorityFeePerGas:void 0!==l&&`${tt(l)} gwei`,nonce:c});super(e.shortMessage,{cause:e,docsPath:n,metaMessages:[...e.metaMessages?[...e.metaMessages," "]:[],"Request Arguments:",h].filter(Boolean)}),Object.defineProperty(this,"cause",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"TransactionExecutionError"}),this.cause=e}}class xt extends c{constructor({blockHash:e,blockNumber:t,blockTag:n,hash:i,index:r}){let a="Transaction";n&&void 0!==r&&(a=`Transaction at block time "${n}" at index "${r}"`),e&&void 0!==r&&(a=`Transaction at block hash "${e}" at index "${r}"`),t&&void 0!==r&&(a=`Transaction at block number "${t}" at index "${r}"`),i&&(a=`Transaction with hash "${i}"`),super(`${a} could not be found.`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"TransactionNotFoundError"})}}class Ct extends c{constructor({hash:e}){super(`Transaction receipt with hash "${e}" could not be found. The Transaction may not be processed on a block yet.`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"TransactionReceiptNotFoundError"})}}class _t extends c{constructor({hash:e}){super(`Timed out while waiting for transaction with hash "${e}" to be confirmed.`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"WaitForTransactionReceiptTimeoutError"})}}const Et=(e,t,n)=>JSON.stringify(e,((e,n)=>{const i="bigint"==typeof n?n.toString():n;return"function"==typeof t?t(e,i):i}),n);class kt extends c{constructor({body:e,details:t,headers:n,status:i,url:r}){super("HTTP request failed.",{details:t,metaMessages:[i&&`Status: ${i}`,`URL: ${r}`,e&&`Request body: ${Et(e)}`].filter(Boolean)}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"HttpRequestError"}),Object.defineProperty(this,"body",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"headers",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"status",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"url",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.body=e,this.headers=n,this.status=i,this.url=r}}class Tt extends c{constructor({body:e,error:t,url:n}){super("RPC Request failed.",{cause:t,details:t.message,metaMessages:[`URL: ${n}`,`Request body: ${Et(e)}`]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"RpcRequestError"}),Object.defineProperty(this,"code",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.code=t.code}}class At extends c{constructor({body:e,url:t}){super("The request took too long to respond.",{details:"The request timed out.",metaMessages:[`URL: ${t}`,`Request body: ${Et(e)}`]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"TimeoutError"})}}class $t extends c{constructor(e,{code:t,docsPath:n,metaMessages:i,shortMessage:r}){super(r,{cause:e,docsPath:n,metaMessages:i||(null==e?void 0:e.metaMessages)}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"RpcError"}),Object.defineProperty(this,"code",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.name=e.name,this.code=e instanceof Tt?e.code:t??-1}}class It extends $t{constructor(e,t){super(e,t),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ProviderRpcError"}),Object.defineProperty(this,"data",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.data=t.data}}class Pt extends $t{constructor(e){super(e,{code:Pt.code,shortMessage:"Invalid JSON was received by the server. An error occurred on the server while parsing the JSON text."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ParseRpcError"})}}Object.defineProperty(Pt,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32700});class St extends $t{constructor(e){super(e,{code:St.code,shortMessage:"JSON is not a valid request object."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InvalidRequestRpcError"})}}Object.defineProperty(St,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32600});class Rt extends $t{constructor(e){super(e,{code:Rt.code,shortMessage:"The method does not exist / is not available."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"MethodNotFoundRpcError"})}}Object.defineProperty(Rt,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32601});class Ot extends $t{constructor(e){super(e,{code:Ot.code,shortMessage:["Invalid parameters were provided to the RPC method.","Double check you have provided the correct parameters."].join("\n")}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InvalidParamsRpcError"})}}Object.defineProperty(Ot,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32602});class Nt extends $t{constructor(e){super(e,{code:Nt.code,shortMessage:"An internal error was received."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InternalRpcError"})}}Object.defineProperty(Nt,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32603});class Mt extends $t{constructor(e){super(e,{code:Mt.code,shortMessage:["Missing or invalid parameters.","Double check you have provided the correct parameters."].join("\n")}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InvalidInputRpcError"})}}Object.defineProperty(Mt,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32e3});class jt extends $t{constructor(e){super(e,{code:jt.code,shortMessage:"Requested resource not found."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ResourceNotFoundRpcError"})}}Object.defineProperty(jt,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32001});class Ut extends $t{constructor(e){super(e,{code:Ut.code,shortMessage:"Requested resource not available."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ResourceUnavailableRpcError"})}}Object.defineProperty(Ut,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32002});class Dt extends $t{constructor(e){super(e,{code:Dt.code,shortMessage:"Transaction creation failed."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"TransactionRejectedRpcError"})}}Object.defineProperty(Dt,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32003});class Bt extends $t{constructor(e){super(e,{code:Bt.code,shortMessage:"Method is not implemented."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"MethodNotSupportedRpcError"})}}Object.defineProperty(Bt,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32004});class Lt extends $t{constructor(e){super(e,{code:Lt.code,shortMessage:"Request exceeds defined limit."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"LimitExceededRpcError"})}}Object.defineProperty(Lt,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32005});class zt extends $t{constructor(e){super(e,{code:zt.code,shortMessage:"Version of JSON-RPC protocol is not supported."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"JsonRpcVersionUnsupportedError"})}}Object.defineProperty(zt,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32006});class Ft extends It{constructor(e){super(e,{code:Ft.code,shortMessage:"User rejected the request."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"UserRejectedRequestError"})}}Object.defineProperty(Ft,"code",{enumerable:!0,configurable:!0,writable:!0,value:4001});class Wt extends It{constructor(e){super(e,{code:Wt.code,shortMessage:"The requested method and/or account has not been authorized by the user."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"UnauthorizedProviderError"})}}Object.defineProperty(Wt,"code",{enumerable:!0,configurable:!0,writable:!0,value:4100});class Ht extends It{constructor(e){super(e,{code:Ht.code,shortMessage:"The Provider does not support the requested method."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"UnsupportedProviderMethodError"})}}Object.defineProperty(Ht,"code",{enumerable:!0,configurable:!0,writable:!0,value:4200});class Zt extends It{constructor(e){super(e,{code:Zt.code,shortMessage:"The Provider is disconnected from all chains."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ProviderDisconnectedError"})}}Object.defineProperty(Zt,"code",{enumerable:!0,configurable:!0,writable:!0,value:4900});class Vt extends It{constructor(e){super(e,{code:Vt.code,shortMessage:"The Provider is not connected to the requested chain."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ChainDisconnectedError"})}}Object.defineProperty(Vt,"code",{enumerable:!0,configurable:!0,writable:!0,value:4901});class Gt extends It{constructor(e){super(e,{code:Gt.code,shortMessage:"An error occurred when attempting to switch chain."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"SwitchChainError"})}}Object.defineProperty(Gt,"code",{enumerable:!0,configurable:!0,writable:!0,value:4902});class qt extends $t{constructor(e){super(e,{shortMessage:"An unknown RPC error occurred."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"UnknownRpcError"})}}function Kt(e,t){const n=(e.details||"").toLowerCase(),i=e instanceof c?e.walk((e=>e.code===nt.code)):e;return i instanceof c?new nt({cause:e,message:i.details}):nt.nodeMessage.test(n)?new nt({cause:e,message:e.details}):it.nodeMessage.test(n)?new it({cause:e,maxFeePerGas:null==t?void 0:t.maxFeePerGas}):rt.nodeMessage.test(n)?new rt({cause:e,maxFeePerGas:null==t?void 0:t.maxFeePerGas}):at.nodeMessage.test(n)?new at({cause:e,nonce:null==t?void 0:t.nonce}):ot.nodeMessage.test(n)?new ot({cause:e,nonce:null==t?void 0:t.nonce}):st.nodeMessage.test(n)?new st({cause:e,nonce:null==t?void 0:t.nonce}):lt.nodeMessage.test(n)?new lt({cause:e}):ct.nodeMessage.test(n)?new ct({cause:e,gas:null==t?void 0:t.gas}):ut.nodeMessage.test(n)?new ut({cause:e,gas:null==t?void 0:t.gas}):dt.nodeMessage.test(n)?new dt({cause:e}):pt.nodeMessage.test(n)?new pt({cause:e,maxFeePerGas:null==t?void 0:t.maxFeePerGas,maxPriorityFeePerGas:null==t?void 0:t.maxPriorityFeePerGas}):new ht({cause:e})}function Yt(e,{format:t}){if(!t)return{};const n={};return function t(i){const r=Object.keys(i);for(const a of r)a in e&&(n[a]=e[a]),i[a]&&"object"==typeof i[a]&&!Array.isArray(i[a])&&t(i[a])}(t(e||{})),n}function Jt(e,t){return({exclude:n,format:i})=>({exclude:n,format:e=>{const r=t(e);if(n)for(const t of n)delete r[t];return{...r,...i(e)}},type:e})}const Qt={legacy:"0x0",eip2930:"0x1",eip1559:"0x2",eip4844:"0x3"};function Xt(e){return{...e,gas:void 0!==e.gas?U(e.gas):void 0,gasPrice:void 0!==e.gasPrice?U(e.gasPrice):void 0,maxFeePerGas:void 0!==e.maxFeePerGas?U(e.maxFeePerGas):void 0,maxPriorityFeePerGas:void 0!==e.maxPriorityFeePerGas?U(e.maxPriorityFeePerGas):void 0,nonce:void 0!==e.nonce?U(e.nonce):void 0,type:void 0!==e.type?Qt[e.type]:void 0,value:void 0!==e.value?U(e.value):void 0}}function en(e,t,n){return i=>{var r;return(null==(r=e[t.name||n])?void 0:r.call(e,i))??t(e,i)}}function tn(e){const{account:t,gasPrice:n,maxFeePerGas:i,maxPriorityFeePerGas:r,to:a}=e,o=t?He(t):void 0;if(o&&!Me(o.address))throw new ie({address:o.address});if(a&&!Me(a))throw new ie({address:a});if(void 0!==n&&(void 0!==i||void 0!==r))throw new gt;if(i&&i>2n**256n-1n)throw new it({maxFeePerGas:i});if(r&&i&&r>i)throw new pt({maxFeePerGas:i,maxPriorityFeePerGas:r})}async function nn(e){return S(await e.request({method:"eth_chainId"}))}class rn extends c{constructor(){super("`baseFeeMultiplier` must be greater than 1."),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"BaseFeeScalarError"})}}class an extends c{constructor(){super("Chain does not support EIP-1559 fees."),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"Eip1559FeesNotSupportedError"})}}class on extends c{constructor({maxPriorityFeePerGas:e}){super(`\`maxFeePerGas\` cannot be less than the \`maxPriorityFeePerGas\` (${tt(e)} gwei).`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"MaxFeePerGasTooLowError"})}}class sn extends c{constructor({blockHash:e,blockNumber:t}){let n="Block";e&&(n=`Block at hash "${e}"`),t&&(n=`Block at number "${t}"`),super(`${n} could not be found.`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"BlockNotFoundError"})}}const ln={"0x0":"legacy","0x1":"eip2930","0x2":"eip1559","0x3":"eip4844"};function cn(e){const t={...e,blockHash:e.blockHash?e.blockHash:null,blockNumber:e.blockNumber?BigInt(e.blockNumber):null,chainId:e.chainId?S(e.chainId):void 0,gas:e.gas?BigInt(e.gas):void 0,gasPrice:e.gasPrice?BigInt(e.gasPrice):void 0,maxFeePerBlobGas:e.maxFeePerBlobGas?BigInt(e.maxFeePerBlobGas):void 0,maxFeePerGas:e.maxFeePerGas?BigInt(e.maxFeePerGas):void 0,maxPriorityFeePerGas:e.maxPriorityFeePerGas?BigInt(e.maxPriorityFeePerGas):void 0,nonce:e.nonce?S(e.nonce):void 0,to:e.to?e.to:null,transactionIndex:e.transactionIndex?Number(e.transactionIndex):null,type:e.type?ln[e.type]:void 0,typeHex:e.type?e.type:void 0,value:e.value?BigInt(e.value):void 0,v:e.v?BigInt(e.v):void 0};return t.yParity=(()=>{if(e.yParity)return Number(e.yParity);if("bigint"==typeof t.v){if(0n===t.v||27n===t.v)return 0;if(1n===t.v||28n===t.v)return 1;if(t.v>=35n)return t.v%2n===0n?1:0}})(),"legacy"===t.type&&(delete t.accessList,delete t.maxFeePerBlobGas,delete t.maxFeePerGas,delete t.maxPriorityFeePerGas,delete t.yParity),"eip2930"===t.type&&(delete t.maxFeePerBlobGas,delete t.maxFeePerGas,delete t.maxPriorityFeePerGas),"eip1559"===t.type&&delete t.maxFeePerBlobGas,t}const un=Jt("transaction",cn);function dn(e){var t;const n=null==(t=e.transactions)?void 0:t.map((e=>"string"==typeof e?e:cn(e)));return{...e,baseFeePerGas:e.baseFeePerGas?BigInt(e.baseFeePerGas):null,blobGasUsed:e.blobGasUsed?BigInt(e.blobGasUsed):void 0,difficulty:e.difficulty?BigInt(e.difficulty):void 0,excessBlobGas:e.excessBlobGas?BigInt(e.excessBlobGas):void 0,gasLimit:e.gasLimit?BigInt(e.gasLimit):void 0,gasUsed:e.gasUsed?BigInt(e.gasUsed):void 0,hash:e.hash?e.hash:null,logsBloom:e.logsBloom?e.logsBloom:null,nonce:e.nonce?e.nonce:null,number:e.number?BigInt(e.number):null,size:e.size?BigInt(e.size):void 0,timestamp:e.timestamp?BigInt(e.timestamp):void 0,transactions:n,totalDifficulty:e.totalDifficulty?BigInt(e.totalDifficulty):null}}const pn=Jt("block",dn);async function hn(e,{blockHash:t,blockNumber:n,blockTag:i,includeTransactions:r}={}){var a,o,s;const l=i??"latest",c=r??!1,u=void 0!==n?U(n):void 0;let d=null;if(d=t?await e.request({method:"eth_getBlockByHash",params:[t,c]}):await e.request({method:"eth_getBlockByNumber",params:[u||l,c]}),!d)throw new sn({blockHash:t,blockNumber:n});return((null==(s=null==(o=null==(a=e.chain)?void 0:a.formatters)?void 0:o.block)?void 0:s.format)||dn)(d)}async function fn(e){const t=await e.request({method:"eth_gasPrice"});return BigInt(t)}async function mn(e,t){var n,i;const{block:r,chain:a=e.chain,request:o,type:s="eip1559"}=t||{},l=await(async()=>{var t,n;return"function"==typeof(null==(t=null==a?void 0:a.fees)?void 0:t.baseFeeMultiplier)?a.fees.baseFeeMultiplier({block:r,client:e,request:o}):(null==(n=null==a?void 0:a.fees)?void 0:n.baseFeeMultiplier)??1.2})();if(l<1)throw new rn;const c=10**((null==(n=l.toString().split(".")[1])?void 0:n.length)??0),u=e=>e*BigInt(Math.ceil(l*c))/BigInt(c),d=r||await en(e,hn,"getBlock")({});if("function"==typeof(null==(i=null==a?void 0:a.fees)?void 0:i.estimateFeesPerGas))return a.fees.estimateFeesPerGas({block:r,client:e,multiply:u,request:o,type:s});if("eip1559"===s){if("bigint"!=typeof d.baseFeePerGas)throw new an;const t="bigint"==typeof(null==o?void 0:o.maxPriorityFeePerGas)?o.maxPriorityFeePerGas:await async function(e,t){var n,i,r;const{block:a,chain:o=e.chain,request:s}=t||{};if("function"==typeof(null==(n=null==o?void 0:o.fees)?void 0:n.defaultPriorityFee)){const t=a||await en(e,hn,"getBlock")({});return o.fees.defaultPriorityFee({block:t,client:e,request:s})}if(void 0!==(null==(i=null==o?void 0:o.fees)?void 0:i.defaultPriorityFee))return null==(r=null==o?void 0:o.fees)?void 0:r.defaultPriorityFee;try{return P(await e.request({method:"eth_maxPriorityFeePerGas"}))}catch{const[t,n]=await Promise.all([a?Promise.resolve(a):en(e,hn,"getBlock")({}),en(e,fn,"getGasPrice")({})]);if("bigint"!=typeof t.baseFeePerGas)throw new an;const i=n-t.baseFeePerGas;return i<0n?0n:i}}(e,{block:d,chain:a,request:o}),n=u(d.baseFeePerGas);return{maxFeePerGas:(null==o?void 0:o.maxFeePerGas)??n+t,maxPriorityFeePerGas:t}}return{gasPrice:(null==o?void 0:o.gasPrice)??u(await en(e,fn,"getGasPrice")({}))}}class gn extends c{constructor(e,{account:t,docsPath:n,chain:i,data:r,gas:a,gasPrice:o,maxFeePerGas:s,maxPriorityFeePerGas:l,nonce:c,to:u,value:d}){var p;const h=mt({from:null==t?void 0:t.address,to:u,value:void 0!==d&&`${ft(d)} ${(null==(p=null==i?void 0:i.nativeCurrency)?void 0:p.symbol)||"ETH"}`,data:r,gas:a,gasPrice:void 0!==o&&`${tt(o)} gwei`,maxFeePerGas:void 0!==s&&`${tt(s)} gwei`,maxPriorityFeePerGas:void 0!==l&&`${tt(l)} gwei`,nonce:c});super(e.shortMessage,{cause:e,docsPath:n,metaMessages:[...e.metaMessages?[...e.metaMessages," "]:[],"Estimate Gas Arguments:",h].filter(Boolean)}),Object.defineProperty(this,"cause",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"EstimateGasExecutionError"}),this.cause=e}}async function wn(e,t){var n,i,r;const a=t.account??e.account,o=a?He(a):void 0;try{const{accessList:a,blockNumber:s,blockTag:l,data:c,gas:u,gasPrice:d,maxFeePerGas:p,maxPriorityFeePerGas:h,nonce:f,to:m,value:g,...w}="local"===(null==o?void 0:o.type)?await bn(e,t):t,y=(s?U(s):void 0)||l;tn(t);const v=null==(r=null==(i=null==(n=e.chain)?void 0:n.formatters)?void 0:i.transactionRequest)?void 0:r.format,b=(v||Xt)({...Yt(w,{format:v}),from:null==o?void 0:o.address,accessList:a,data:c,gas:u,gasPrice:d,maxFeePerGas:p,maxPriorityFeePerGas:h,nonce:f,to:m,value:g}),x=await e.request({method:"eth_estimateGas",params:y?[b,y]:[b]});return BigInt(x)}catch(s){throw function(e,{docsPath:t,...n}){const i=(()=>{const t=Kt(e,n);return t instanceof ht?e:t})();return new gn(i,{docsPath:t,...n})}(s,{...t,account:o,chain:e.chain})}}async function yn(e,{address:t,blockTag:n="latest",blockNumber:i}){return S(await e.request({method:"eth_getTransactionCount",params:[t,i?U(i):n]}))}function vn(e){if(e.type)return e.type;if(void 0!==e.maxFeePerGas||void 0!==e.maxPriorityFeePerGas)return"eip1559";if(void 0!==e.gasPrice)return void 0!==e.accessList?"eip2930":"legacy";throw new yt({transaction:e})}async function bn(e,t){const{account:n=e.account,chain:i,gas:r,nonce:a,parameters:o=["fees","gas","nonce","type"],type:s}=t,l=n?He(n):void 0,c=await en(e,hn,"getBlock")({blockTag:"latest"}),u={...t,...l?{from:null==l?void 0:l.address}:{}};if(o.includes("nonce")&&void 0===a&&l&&(u.nonce=await en(e,yn,"getTransactionCount")({address:l.address,blockTag:"pending"})),(o.includes("fees")||o.includes("type"))&&void 0===s)try{u.type=vn(u)}catch{u.type="bigint"==typeof c.baseFeePerGas?"eip1559":"legacy"}if(o.includes("fees"))if("eip1559"===u.type){const{maxFeePerGas:n,maxPriorityFeePerGas:r}=await mn(e,{block:c,chain:i,request:u});if(void 0===t.maxPriorityFeePerGas&&t.maxFeePerGas&&t.maxFeePerGas<r)throw new on({maxPriorityFeePerGas:r});u.maxPriorityFeePerGas=r,u.maxFeePerGas=n}else{if(void 0!==t.maxFeePerGas||void 0!==t.maxPriorityFeePerGas)throw new an;const{gasPrice:n}=await mn(e,{block:c,chain:i,request:u,type:"legacy"});u.gasPrice=n}return o.includes("gas")&&void 0===r&&(u.gas=await en(e,wn,"estimateGas")({...u,account:l?{address:l.address,type:"json-rpc"}:void 0})),tn(u),delete u.parameters,u}async function xn(e,{serializedTransaction:t}){return e.request({method:"eth_sendRawTransaction",params:[t]},{retryCount:0})}async function Cn(e,t){var n,i,r,a;const{account:o=e.account,chain:s=e.chain,accessList:l,data:c,gas:u,gasPrice:d,maxFeePerGas:p,maxPriorityFeePerGas:h,nonce:f,to:m,value:g,...w}=t;if(!o)throw new Ze({docsPath:"/docs/actions/wallet/sendTransaction"});const y=He(o);try{let o;if(tn(t),null!==s&&(o=await en(e,nn,"getChainId")({}),function({chain:e,currentChainId:t}){if(!e)throw new qe;if(t!==e.id)throw new Ge({chain:e,currentChainId:t})}({currentChainId:o,chain:s})),"local"===y.type){const t=await en(e,bn,"prepareTransactionRequest")({account:y,accessList:l,chain:s,data:c,gas:u,gasPrice:d,maxFeePerGas:p,maxPriorityFeePerGas:h,nonce:f,to:m,value:g,...w});o||(o=await en(e,nn,"getChainId")({}));const i=null==(n=null==s?void 0:s.serializers)?void 0:n.transaction,r=await y.signTransaction({...t,chainId:o},{serializer:i});return await en(e,xn,"sendRawTransaction")({serializedTransaction:r})}const v=null==(a=null==(r=null==(i=e.chain)?void 0:i.formatters)?void 0:r.transactionRequest)?void 0:a.format,b=(v||Xt)({...Yt(w,{format:v}),accessList:l,data:c,from:y.address,gas:u,gasPrice:d,maxFeePerGas:p,maxPriorityFeePerGas:h,nonce:f,to:m,value:g});return await e.request({method:"eth_sendTransaction",params:[b]},{retryCount:0})}catch(v){throw function(e,{docsPath:t,...n}){const i=(()=>{const t=Kt(e,n);return t instanceof ht?e:t})();return new bt(i,{docsPath:t,...n})}(v,{...t,account:y,chain:t.chain||void 0})}}const _n=[{inputs:[{components:[{name:"target",type:"address"},{name:"allowFailure",type:"bool"},{name:"callData",type:"bytes"}],name:"calls",type:"tuple[]"}],name:"aggregate3",outputs:[{components:[{name:"success",type:"bool"},{name:"returnData",type:"bytes"}],name:"returnData",type:"tuple[]"}],stateMutability:"view",type:"function"}],En=[{inputs:[],name:"ResolverNotFound",type:"error"},{inputs:[],name:"ResolverWildcardNotSupported",type:"error"},{inputs:[],name:"ResolverNotContract",type:"error"},{inputs:[{name:"returnData",type:"bytes"}],name:"ResolverError",type:"error"},{inputs:[{components:[{name:"status",type:"uint16"},{name:"message",type:"string"}],name:"errors",type:"tuple[]"}],name:"HttpError",type:"error"}],kn=[...En,{name:"resolve",type:"function",stateMutability:"view",inputs:[{name:"name",type:"bytes"},{name:"data",type:"bytes"}],outputs:[{name:"",type:"bytes"},{name:"address",type:"address"}]},{name:"resolve",type:"function",stateMutability:"view",inputs:[{name:"name",type:"bytes"},{name:"data",type:"bytes"},{name:"gateways",type:"string[]"}],outputs:[{name:"",type:"bytes"},{name:"address",type:"address"}]}],Tn=[...En,{name:"reverse",type:"function",stateMutability:"view",inputs:[{type:"bytes",name:"reverseName"}],outputs:[{type:"string",name:"resolvedName"},{type:"address",name:"resolvedAddress"},{type:"address",name:"reverseResolver"},{type:"address",name:"resolver"}]},{name:"reverse",type:"function",stateMutability:"view",inputs:[{type:"bytes",name:"reverseName"},{type:"string[]",name:"gateways"}],outputs:[{type:"string",name:"resolvedName"},{type:"address",name:"resolvedAddress"},{type:"address",name:"reverseResolver"},{type:"address",name:"resolver"}]}],An=[{name:"text",type:"function",stateMutability:"view",inputs:[{name:"name",type:"bytes32"},{name:"key",type:"string"}],outputs:[{name:"",type:"string"}]}];class $n extends c{constructor({offset:e}){super(`Offset \`${e}\` cannot be negative.`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"NegativeOffsetError"})}}class In extends c{constructor({length:e,position:t}){super(`Position \`${t}\` is out of bounds (\`0 < position < ${e}\`).`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"PositionOutOfBoundsError"})}}class Pn extends c{constructor({count:e,limit:t}){super(`Recursive read limit of \`${t}\` exceeded (recursive read count: \`${e}\`).`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"RecursiveReadLimitExceededError"})}}const Sn={bytes:new Uint8Array,dataView:new DataView(new ArrayBuffer(0)),position:0,positionReadCount:new Map,recursiveReadCount:0,recursiveReadLimit:1/0,assertReadLimit(){if(this.recursiveReadCount>=this.recursiveReadLimit)throw new Pn({count:this.recursiveReadCount+1,limit:this.recursiveReadLimit})},assertPosition(e){if(e<0||e>this.bytes.length-1)throw new In({length:this.bytes.length,position:e})},decrementPosition(e){if(e<0)throw new $n({offset:e});const t=this.position-e;this.assertPosition(t),this.position=t},getReadCount(e){return this.positionReadCount.get(e||this.position)||0},incrementPosition(e){if(e<0)throw new $n({offset:e});const t=this.position+e;this.assertPosition(t),this.position=t},inspectByte(e){const t=e??this.position;return this.assertPosition(t),this.bytes[t]},inspectBytes(e,t){const n=t??this.position;return this.assertPosition(n+e-1),this.bytes.subarray(n,n+e)},inspectUint8(e){const t=e??this.position;return this.assertPosition(t),this.bytes[t]},inspectUint16(e){const t=e??this.position;return this.assertPosition(t+1),this.dataView.getUint16(t)},inspectUint24(e){const t=e??this.position;return this.assertPosition(t+2),(this.dataView.getUint16(t)<<8)+this.dataView.getUint8(t+2)},inspectUint32(e){const t=e??this.position;return this.assertPosition(t+3),this.dataView.getUint32(t)},pushByte(e){this.assertPosition(this.position),this.bytes[this.position]=e,this.position++},pushBytes(e){this.assertPosition(this.position+e.length-1),this.bytes.set(e,this.position),this.position+=e.length},pushUint8(e){this.assertPosition(this.position),this.bytes[this.position]=e,this.position++},pushUint16(e){this.assertPosition(this.position+1),this.dataView.setUint16(this.position,e),this.position+=2},pushUint24(e){this.assertPosition(this.position+2),this.dataView.setUint16(this.position,e>>8),this.dataView.setUint8(this.position+2,255&e),this.position+=3},pushUint32(e){this.assertPosition(this.position+3),this.dataView.setUint32(this.position,e),this.position+=4},readByte(){this.assertReadLimit(),this._touch();const e=this.inspectByte();return this.position++,e},readBytes(e,t){this.assertReadLimit(),this._touch();const n=this.inspectBytes(e);return this.position+=t??e,n},readUint8(){this.assertReadLimit(),this._touch();const e=this.inspectUint8();return this.position+=1,e},readUint16(){this.assertReadLimit(),this._touch();const e=this.inspectUint16();return this.position+=2,e},readUint24(){this.assertReadLimit(),this._touch();const e=this.inspectUint24();return this.position+=3,e},readUint32(){this.assertReadLimit(),this._touch();const e=this.inspectUint32();return this.position+=4,e},setPosition(e){const t=this.position;return this.assertPosition(e),this.position=e,()=>this.position=t},_touch(){if(this.recursiveReadLimit===1/0)return;const e=this.getReadCount();this.positionReadCount.set(this.position,e+1),e>0&&this.recursiveReadCount++}};function Rn(e,{recursiveReadLimit:t=8192}={}){const n=Object.create(Sn);return n.bytes=e,n.dataView=new DataView(e.buffer,e.byteOffset,e.byteLength),n.positionReadCount=new Map,n.recursiveReadLimit=t,n}function On(e,t={}){void 0!==t.size&&I(e,{size:t.size});return P(j(e,t),t)}function Nn(e,t={}){let n=e;if(void 0!==t.size&&(I(n,{size:t.size}),n=x(n)),n.length>1||n[0]>1)throw new p(n);return Boolean(n[0])}function Mn(e,t={}){void 0!==t.size&&I(e,{size:t.size});return S(j(e,t),t)}function jn(e,t){const n="string"==typeof t?T(t):t,i=Rn(n);if(0===b(n)&&e.length>0)throw new W;if(b(t)&&b(t)<32)throw new F({data:"string"==typeof t?t:j(t),params:e,size:b(t)});let r=0;const a=[];for(let o=0;o<e.length;++o){const t=e[o];i.setPosition(r);const[n,s]=Un(i,t,{staticPosition:0});r+=s,a.push(n)}return a}function Un(e,t,{staticPosition:n}){const i=We(t.type);if(i){const[r,a]=i;return function(e,t,{length:n,staticPosition:i}){if(!n){const n=i+Mn(e.readBytes(Bn)),r=n+Dn;e.setPosition(n);const a=Mn(e.readBytes(Dn)),o=Ln(t);let s=0;const l=[];for(let i=0;i<a;++i){e.setPosition(r+(o?32*i:s));const[n,a]=Un(e,t,{staticPosition:r});s+=a,l.push(n)}return e.setPosition(i+32),[l,32]}if(Ln(t)){const r=i+Mn(e.readBytes(Bn)),a=[];for(let i=0;i<n;++i){e.setPosition(r+32*i);const[n]=Un(e,t,{staticPosition:r});a.push(n)}return e.setPosition(i+32),[a,32]}let r=0;const a=[];for(let o=0;o<n;++o){const[n,o]=Un(e,t,{staticPosition:i+r});r+=o,a.push(n)}return[a,r]}(e,{...t,type:a},{length:r,staticPosition:n})}if("tuple"===t.type)return function(e,t,{staticPosition:n}){const i=0===t.components.length||t.components.some((({name:e})=>!e)),r=i?[]:{};let a=0;if(Ln(t)){const o=n+Mn(e.readBytes(Bn));for(let n=0;n<t.components.length;++n){const s=t.components[n];e.setPosition(o+a);const[l,c]=Un(e,s,{staticPosition:o});a+=c,r[i?n:null==s?void 0:s.name]=l}return e.setPosition(n+32),[r,32]}for(let o=0;o<t.components.length;++o){const s=t.components[o],[l,c]=Un(e,s,{staticPosition:n});r[i?o:null==s?void 0:s.name]=l,a+=c}return[r,a]}(e,t,{staticPosition:n});if("address"===t.type)return function(e){const t=e.readBytes(32);return[Se(j(Be(t,-20))),32]}(e);if("bool"===t.type)return function(e){return[Nn(e.readBytes(32),{size:32}),32]}(e);if(t.type.startsWith("bytes"))return function(e,t,{staticPosition:n}){const[i,r]=t.type.split("bytes");if(!r){const t=Mn(e.readBytes(32));e.setPosition(n+t);const i=Mn(e.readBytes(32));if(0===i)return e.setPosition(n+32),["0x",32];const r=e.readBytes(i);return e.setPosition(n+32),[j(r),32]}const a=j(e.readBytes(parseInt(r),32));return[a,32]}(e,t,{staticPosition:n});if(t.type.startsWith("uint")||t.type.startsWith("int"))return function(e,t){const n=t.type.startsWith("int"),i=parseInt(t.type.split("int")[1]||"256"),r=e.readBytes(32);return[i>48?On(r,{signed:n}):Mn(r,{signed:n}),32]}(e,t);if("string"===t.type)return function(e,{staticPosition:t}){const n=Mn(e.readBytes(32)),i=t+n;e.setPosition(i);const r=Mn(e.readBytes(32));if(0===r)return e.setPosition(t+32),["",32];const a=e.readBytes(r,32),o=function(e,t={}){let n=e;return void 0!==t.size&&(I(n,{size:t.size}),n=x(n,{dir:"right"})),(new TextDecoder).decode(n)}(x(a));return e.setPosition(t+32),[o,32]}(e,{staticPosition:n});throw new Q(t.type,{docsPath:"/docs/contract/decodeAbiParameters"})}const Dn=32,Bn=32;function Ln(e){var t;const{type:n}=e;if("string"===n)return!0;if("bytes"===n)return!0;if(n.endsWith("[]"))return!0;if("tuple"===n)return null==(t=e.components)?void 0:t.some(Ln);const i=We(e.type);return!(!i||!Ln({...e,type:i[1]}))}const zn=/^tuple(?<array>(\[(\d*)\])*)$/;function Fn(e){let t=e.type;if(zn.test(e.type)&&"components"in e){t="(";const n=e.components.length;for(let r=0;r<n;r++){t+=Fn(e.components[r]),r<n-1&&(t+=", ")}const i=function(e,t){const n=e.exec(t);return null==n?void 0:n.groups}(zn,e.type);return t+=`)${(null==i?void 0:i.array)??""}`,Fn({...e,type:t})}return"indexed"in e&&e.indexed&&(t=`${t} indexed`),e.name?`${t} ${e.name}`:t}function Wn(e){let t="";const n=e.length;for(let i=0;i<n;i++){t+=Fn(e[i]),i!==n-1&&(t+=", ")}return t}const Hn=e=>Pe(_(e));const Zn=e=>{var t;return function(e){let t=!0,n="",i=0,r="",a=!1;for(let o=0;o<e.length;o++){const s=e[o];if(["(",")",","].includes(s)&&(t=!0),"("===s&&i++,")"===s&&i--,t)if(0!==i)" "!==s?(r+=s,n+=s):","!==e[o-1]&&","!==n&&",("!==n&&(n="",t=!1);else if(" "===s&&["event","function",""].includes(r))r="";else if(r+=s,")"===s){a=!0;break}}if(!a)throw new c("Unable to normalize signature.");return r}("string"==typeof e?e:"function"===(t=e).type?`function ${t.name}(${Wn(t.inputs)})${t.stateMutability&&"nonpayable"!==t.stateMutability?` ${t.stateMutability}`:""}${t.outputs.length?` returns (${Wn(t.outputs)})`:""}`:"event"===t.type?`event ${t.name}(${Wn(t.inputs)})`:"error"===t.type?`error ${t.name}(${Wn(t.inputs)})`:"constructor"===t.type?`constructor(${Wn(t.inputs)})${"payable"===t.stateMutability?" payable":""}`:"fallback"===t.type?"fallback()":"receive() external payable")};function Vn(e){return t=Zn(e),Hn(t);var t}const Gn=Vn,qn=e=>je(Vn(e),0,4);function Kn(e){const{abi:t,args:n=[],name:i}=e,r=v(i,{strict:!1}),a=t.filter((e=>r?"function"===e.type?qn(e)===i:"event"===e.type&&Gn(e)===i:"name"in e&&e.name===i));if(0===a.length)return;if(1===a.length)return a[0];let o;for(const s of a){if(!("inputs"in s))continue;if(!n||0===n.length){if(!s.inputs||0===s.inputs.length)return s;continue}if(!s.inputs)continue;if(0===s.inputs.length)continue;if(s.inputs.length!==n.length)continue;if(n.every(((e,t)=>{const n="inputs"in s&&s.inputs[t];return!!n&&Yn(e,n)}))){if(o&&"inputs"in o&&o.inputs){const e=Jn(s.inputs,o.inputs,n);if(e)throw new Y({abiItem:s,type:e[0]},{abiItem:o,type:e[1]})}o=s}}return o||a[0]}function Yn(e,t){const n=typeof e,i=t.type;switch(i){case"address":return Me(e,{strict:!1});case"bool":return"boolean"===n;case"function":case"string":return"string"===n;default:return"tuple"===i&&"components"in t?Object.values(t.components).every(((t,n)=>Yn(Object.values(e)[n],t))):/^u?int(8|16|24|32|40|48|56|64|72|80|88|96|104|112|120|128|136|144|152|160|168|176|184|192|200|208|216|224|232|240|248|256)?$/.test(i)?"number"===n||"bigint"===n:/^bytes([1-9]|1[0-9]|2[0-9]|3[0-2])?$/.test(i)?"string"===n||e instanceof Uint8Array:!!/[a-z]+[1-9]{0,3}(\[[0-9]{0,}\])+$/.test(i)&&(Array.isArray(e)&&e.every((e=>Yn(e,{...t,type:i.replace(/(\[[0-9]{0,}\])$/,"")}))))}}function Jn(e,t,n){for(const i in e){const r=e[i],a=t[i];if("tuple"===r.type&&"tuple"===a.type&&"components"in r&&"components"in a)return Jn(r.components,a.components,n[i]);const o=[r.type,a.type];if(!(!o.includes("address")||!o.includes("bytes20"))||(o.includes("address")&&o.includes("string")||!(!o.includes("address")||!o.includes("bytes")))&&Me(n[i],{strict:!1}))return o}}const Qn="/docs/contract/decodeFunctionResult";function Xn(e){const{abi:t,args:n,functionName:i,data:r}=e;let a=t[0];if(i){const e=Kn({abi:t,args:n,name:i});if(!e)throw new q(i,{docsPath:Qn});a=e}if("function"!==a.type)throw new q(void 0,{docsPath:Qn});if(!a.outputs)throw new K(a.name,{docsPath:Qn});const o=jn(a.outputs,r);return o&&o.length>1?o:o&&1===o.length?o[0]:void 0}const ei="/docs/contract/encodeFunctionData";function ti(e){const{abi:t,args:n,functionName:i}=e;let r=t[0];if(i){const e=Kn({abi:t,args:n,name:i});if(!e)throw new q(i,{docsPath:ei});r=e}if("function"!==r.type)throw new q(void 0,{docsPath:ei});const a=L(r);return ne([qn(a),("inputs"in r&&r.inputs?Le(r.inputs,n??[]):void 0)??"0x"])}function ni({blockNumber:e,chain:t,contract:n}){var i;const r=null==(i=null==t?void 0:t.contracts)?void 0:i[n];if(!r)throw new Ve({chain:t,contract:{name:n}});if(e&&r.blockCreated&&r.blockCreated>e)throw new Ve({blockNumber:e,chain:t,contract:{name:n,blockCreated:r.blockCreated}});return r.address}const ii={1:"An `assert` condition failed.",17:"Arithmetic operation resulted in underflow or overflow.",18:"Division or modulo by zero (e.g. `5 / 0` or `23 % 0`).",33:"Attempted to convert to an invalid type.",34:"Attempted to access a storage byte array that is incorrectly encoded.",49:"Performed `.pop()` on an empty array",50:"Array index is out of bounds.",65:"Allocated too much memory or created an array which is too large.",81:"Attempted to call a zero-initialized variable of internal function type."},ri={inputs:[{name:"message",type:"string"}],name:"Error",type:"error"},ai={inputs:[{name:"reason",type:"uint256"}],name:"Panic",type:"error"};function oi(e){const{abi:t,data:n}=e,i=je(n,0,4);if("0x"===i)throw new W;const r=[...t||[],ri,ai].find((e=>"error"===e.type&&i===qn(L(e))));if(!r)throw new G(i,{docsPath:"/docs/contract/decodeErrorResult"});return{abiItem:r,args:"inputs"in r&&r.inputs&&r.inputs.length>0?jn(r.inputs,je(n,4)):void 0,errorName:r.name}}function si({abiItem:e,args:t,includeFunctionName:n=!0,includeName:i=!1}){if("name"in e&&"inputs"in e&&e.inputs)return`${n?e.name:""}(${e.inputs.map(((e,n)=>`${i&&e.name?`${e.name}: `:""}${"object"==typeof t[n]?Et(t[n]):t[n]}`)).join(", ")})`}class li extends c{constructor({address:e}){super(`State for account "${e}" is set multiple times.`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AccountStateConflictError"})}}class ci extends c{constructor(){super("state and stateDiff are set on the same account."),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"StateAssignmentConflictError"})}}function ui(e){return e.reduce(((e,{slot:t,value:n})=>`${e}        ${t}: ${n}\n`),"")}class di extends c{constructor(e,{account:t,docsPath:n,chain:i,data:r,gas:a,gasPrice:o,maxFeePerGas:s,maxPriorityFeePerGas:l,nonce:c,to:u,value:d,stateOverride:p}){var h;const f=t?He(t):void 0;let m=mt({from:null==f?void 0:f.address,to:u,value:void 0!==d&&`${ft(d)} ${(null==(h=null==i?void 0:i.nativeCurrency)?void 0:h.symbol)||"ETH"}`,data:r,gas:a,gasPrice:void 0!==o&&`${tt(o)} gwei`,maxFeePerGas:void 0!==s&&`${tt(s)} gwei`,maxPriorityFeePerGas:void 0!==l&&`${tt(l)} gwei`,nonce:c});p&&(m+=`\n${function(e){return e.reduce(((e,{address:t,...n})=>{let i=`${e}    ${t}:\n`;return n.nonce&&(i+=`      nonce: ${n.nonce}\n`),n.balance&&(i+=`      balance: ${n.balance}\n`),n.code&&(i+=`      code: ${n.code}\n`),n.state&&(i+="      state:\n",i+=ui(n.state)),n.stateDiff&&(i+="      stateDiff:\n",i+=ui(n.stateDiff)),i}),"  State Override:\n").slice(0,-1)}(p)}`),super(e.shortMessage,{cause:e,docsPath:n,metaMessages:[...e.metaMessages?[...e.metaMessages," "]:[],"Raw Call Arguments:",m].filter(Boolean)}),Object.defineProperty(this,"cause",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"CallExecutionError"}),this.cause=e}}class pi extends c{constructor(e,{abi:t,args:n,contractAddress:i,docsPath:r,functionName:a,sender:o}){const s=Kn({abi:t,args:n,name:a}),l=s?si({abiItem:s,args:n,includeFunctionName:!1,includeName:!1}):void 0,c=mt({address:i&&i,function:s?L(s,{includeName:!0}):void 0,args:l&&"()"!==l&&`${[...Array((null==a?void 0:a.length)??0).keys()].map((()=>" ")).join("")}${l}`,sender:o});super(e.shortMessage||`An unknown error occurred while executing the contract function "${a}".`,{cause:e,docsPath:r,metaMessages:[...e.metaMessages?[...e.metaMessages," "]:[],"Contract Call:",c].filter(Boolean)}),Object.defineProperty(this,"abi",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"args",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"cause",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"contractAddress",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"formattedArgs",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"functionName",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"sender",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ContractFunctionExecutionError"}),this.abi=t,this.args=n,this.cause=e,this.contractAddress=i,this.functionName=a,this.sender=o}}class hi extends c{constructor({abi:e,data:t,functionName:n,message:i}){let r,a,o,s,l;if(t&&"0x"!==t)try{a=oi({abi:e,data:t});const{abiItem:n,errorName:i,args:r}=a;if("Error"===i)s=r[0];else if("Panic"===i){const[e]=r;s=ii[e]}else{const e=n?L(n,{includeName:!0}):void 0,t=n&&r?si({abiItem:n,args:r,includeFunctionName:!1,includeName:!1}):void 0;o=[e?`Error: ${e}`:"",t&&"()"!==t?`       ${[...Array((null==i?void 0:i.length)??0).keys()].map((()=>" ")).join("")}${t}`:""]}}catch(c){r=c}else i&&(s=i);r instanceof G&&(l=r.signature,o=[`Unable to decode signature "${l}" as it was not found on the provided ABI.`,"Make sure you are using the correct ABI and that the error exists on it.",`You can look up the decoded signature here: https://openchain.xyz/signatures?query=${l}.`]),super(s&&"execution reverted"!==s||l?[`The contract function "${n}" reverted with the following ${l?"signature":"reason"}:`,s||l].join("\n"):`The contract function "${n}" reverted.`,{cause:r,metaMessages:o}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ContractFunctionRevertedError"}),Object.defineProperty(this,"data",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"reason",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"signature",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.data=a,this.reason=s,this.signature=l}}class fi extends c{constructor({functionName:e}){super(`The contract function "${e}" returned no data ("0x").`,{metaMessages:["This could be due to any of the following:",`  - The contract does not have the function "${e}",`,"  - The parameters passed to the contract function may be invalid, or","  - The address is not a contract."]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ContractFunctionZeroDataError"})}}class mi extends c{constructor({data:e,message:t}){super(t||""),Object.defineProperty(this,"code",{enumerable:!0,configurable:!0,writable:!0,value:3}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"RawContractError"}),Object.defineProperty(this,"data",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.data=e}}function gi(e,t){var n,i,r,a,o,s;if(!(e instanceof c))return!1;const l=e.walk((e=>e instanceof hi));return l instanceof hi&&("ResolverNotFound"===(null==(n=l.data)?void 0:n.errorName)||("ResolverWildcardNotSupported"===(null==(i=l.data)?void 0:i.errorName)||("ResolverNotContract"===(null==(r=l.data)?void 0:r.errorName)||("ResolverError"===(null==(a=l.data)?void 0:a.errorName)||("HttpError"===(null==(o=l.data)?void 0:o.errorName)||(!!(null==(s=l.reason)?void 0:s.includes("Wildcard on non-extended resolvers is not supported"))||"reverse"===t&&l.reason===ii[50]))))))}function wi(e){if(66!==e.length)return null;if(0!==e.indexOf("["))return null;if(65!==e.indexOf("]"))return null;const t=`0x${e.slice(1,65)}`;return v(t)?t:null}function yi(e){let t=new Uint8Array(32).fill(0);if(!e)return j(t);const n=e.split(".");for(let i=n.length-1;i>=0;i-=1){const e=wi(n[i]),r=e?_(e):Pe(A(n[i]),"bytes");t=Pe(te([t,r]),"bytes")}return j(t)}function vi(e){const t=new Uint8Array(32).fill(0);return e?wi(e)||Pe(A(e)):j(t)}function bi(e){const t=e.replace(/^\.|\.$/gm,"");if(0===t.length)return new Uint8Array(1);const n=new Uint8Array(A(t).byteLength+2);let i=0;const r=t.split(".");for(let a=0;a<r.length;a++){let e=A(r[a]);e.byteLength>255&&(e=A(`[${vi(r[a]).slice(2)}]`)),n[i]=e.length,n.set(e,i+1),i+=e.length+1}return n.byteLength!==i+1?n.slice(0,i+1):n}const xi=3;function Ci(e,{abi:t,address:n,args:i,docsPath:r,functionName:a,sender:o}){const{code:s,data:l,message:u,shortMessage:d}=e instanceof mi?e:e instanceof c?e.walk((e=>"data"in e))||e.walk():{},p=e instanceof W?new fi({functionName:a}):[xi,Nt.code].includes(s)&&(l||u||d)?new hi({abi:t,data:"object"==typeof l?l.data:l,functionName:a,message:d??u}):e;return new pi(p,{abi:t,args:i,contractAddress:n,docsPath:r,functionName:a,sender:o})}const _i="0x82ad56cb";const Ei=new Map;function ki({fn:e,id:t,shouldSplitBatch:n,wait:i=0,sort:r}){const a=async()=>{const t=s();o();const n=t.map((({args:e})=>e));0!==n.length&&e(n).then((e=>{var n;r&&Array.isArray(e)&&e.sort(r);for(let i=0;i<t.length;i++){const{pendingPromise:r}=t[i];null==(n=r.resolve)||n.call(r,[e[i],e])}})).catch((e=>{var n;for(let i=0;i<t.length;i++){const{pendingPromise:r}=t[i];null==(n=r.reject)||n.call(r,e)}}))},o=()=>Ei.delete(t),s=()=>Ei.get(t)||[],l=e=>Ei.set(t,[...s(),e]);return{flush:o,async schedule(e){const t={},r=new Promise(((e,n)=>{t.resolve=e,t.reject=n}));(null==n?void 0:n([...s().map((({args:e})=>e)),e]))&&a();return s().length>0?(l({args:e,pendingPromise:t}),r):(l({args:e,pendingPromise:t}),setTimeout(a,i),r)}}}async function Ti(e,t){var n,i,a,o;const{account:s=e.account,batch:l=Boolean(null==(n=e.batch)?void 0:n.multicall),blockNumber:u,blockTag:d="latest",accessList:p,data:h,gas:f,gasPrice:m,maxFeePerGas:g,maxPriorityFeePerGas:w,nonce:y,to:v,value:b,stateOverride:x,...C}=t,_=s?He(s):void 0;try{tn(t);const n=(u?U(u):void 0)||d,r=function(e){if(!e)return;const t={};for(const{address:n,...i}of e){if(!Me(n,{strict:!1}))throw new ie({address:n});if(t[n])throw new li({address:n});t[n]=$i(i)}return t}(x),s=null==(o=null==(a=null==(i=e.chain)?void 0:i.formatters)?void 0:a.transactionRequest)?void 0:o.format,c=(s||Xt)({...Yt(C,{format:s}),from:null==_?void 0:_.address,accessList:p,data:h,gas:f,gasPrice:m,maxFeePerGas:g,maxPriorityFeePerGas:w,nonce:y,to:v,value:b});if(l&&function({request:e}){const{data:t,to:n,...i}=e;return!!t&&(!t.startsWith(_i)&&(!!n&&!(Object.values(i).filter((e=>void 0!==e)).length>0)))}({request:c})&&!r)try{return await async function(e,t){var n;const{batchSize:i=1024,wait:r=0}="object"==typeof(null==(n=e.batch)?void 0:n.multicall)?e.batch.multicall:{},{blockNumber:a,blockTag:o="latest",data:s,multicallAddress:l,to:c}=t;let u=l;if(!u){if(!e.chain)throw new Ke;u=ni({blockNumber:a,chain:e.chain,contract:"multicall3"})}const d=a?U(a):void 0,p=d||o,{schedule:h}=ki({id:`${e.uid}.${p}`,wait:r,shouldSplitBatch:e=>e.reduce(((e,{data:t})=>e+(t.length-2)),0)>2*i,fn:async t=>{const n=t.map((e=>({allowFailure:!0,callData:e.data,target:e.to}))),i=ti({abi:_n,args:[n],functionName:"aggregate3"}),r=await e.request({method:"eth_call",params:[{data:i,to:u},p]});return Xn({abi:_n,args:[n],functionName:"aggregate3",data:r||"0x"})}}),[{returnData:f,success:m}]=await h({data:s,to:c});if(!m)throw new mi({data:f});return"0x"===f?{data:void 0}:{data:f}}(e,{...c,blockNumber:u,blockTag:d})}catch(E){if(!(E instanceof Ke||E instanceof Ve))throw E}const k=await e.request({method:"eth_call",params:r?[c,n,r]:[c,n]});return"0x"===k?{data:void 0}:{data:k}}catch(E){const n=function(e){if(!(e instanceof c))return;const t=e.walk();return"object"==typeof t.data?t.data.data:t.data}(E),{offchainLookup:i,offchainLookupSignature:a}=await r((()=>import("./ccip-DWtoftKB.js")),__vite__mapDeps([]),import.meta.url);if((null==n?void 0:n.slice(0,10))===a&&v)return{data:await i(e,{data:n,to:v})};throw function(e,{docsPath:t,...n}){const i=(()=>{const t=Kt(e,n);return t instanceof ht?e:t})();return new di(i,{docsPath:t,...n})}(E,{...t,account:_,chain:e.chain})}}function Ai(e){if(e&&0!==e.length)return e.reduce(((e,{slot:t,value:n})=>{if(66!==t.length)throw new g({size:t.length,targetSize:66,type:"hex"});if(66!==n.length)throw new g({size:n.length,targetSize:66,type:"hex"});return e[t]=n,e}),{})}function $i(e){const{balance:t,nonce:n,state:i,stateDiff:r,code:a}=e,o={};if(void 0!==a&&(o.code=a),void 0!==t&&(o.balance=U(t,{size:32})),void 0!==n&&(o.nonce=U(n,{size:8})),void 0!==i&&(o.state=Ai(i)),void 0!==r){if(o.state)throw new ci;o.stateDiff=Ai(r)}return o}async function Ii(e,t){const{abi:n,address:i,args:r,functionName:a,...o}=t,s=ti({abi:n,args:r,functionName:a});try{const{data:t}=await en(e,Ti,"call")({...o,data:s,to:i});return Xn({abi:n,args:r,functionName:a,data:t||"0x"})}catch(l){throw Ci(l,{abi:n,address:i,args:r,docsPath:"/docs/contract/readContract",functionName:a})}}class Pi extends c{constructor({data:e}){super("Unable to extract image from metadata. The metadata may be malformed or invalid.",{metaMessages:["- Metadata must be a JSON object with at least an `image`, `image_url` or `image_data` property.","",`Provided data: ${JSON.stringify(e)}`]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"EnsAvatarInvalidMetadataError"})}}class Si extends c{constructor({reason:e}){super(`ENS NFT avatar URI is invalid. ${e}`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"EnsAvatarInvalidNftUriError"})}}class Ri extends c{constructor({uri:e}){super(`Unable to resolve ENS avatar URI "${e}". The URI may be malformed, invalid, or does not respond with a valid image.`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"EnsAvatarUriResolutionError"})}}class Oi extends c{constructor({namespace:e}){super(`ENS NFT avatar namespace "${e}" is not supported. Must be "erc721" or "erc1155".`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"EnsAvatarUnsupportedNamespaceError"})}}const Ni=/(?<protocol>https?:\/\/[^\/]*|ipfs:\/|ipns:\/|ar:\/)?(?<root>\/)?(?<subpath>ipfs\/|ipns\/)?(?<target>[\w\-.]+)(?<subtarget>\/.*)?/,Mi=/^(Qm[1-9A-HJ-NP-Za-km-z]{44,}|b[A-Za-z2-7]{58,}|B[A-Z2-7]{58,}|z[1-9A-HJ-NP-Za-km-z]{48,}|F[0-9A-F]{50,})(\/(?<target>[\w\-.]+))?(?<subtarget>\/.*)?$/,ji=/^data:([a-zA-Z\-/+]*);base64,([^"].*)/,Ui=/^data:([a-zA-Z\-/+]*)?(;[a-zA-Z0-9].*?)?(,)/;function Di(e,t){return e?e.endsWith("/")?e.slice(0,-1):e:t}function Bi({uri:e,gatewayUrls:t}){const n=ji.test(e);if(n)return{uri:e,isOnChain:!0,isEncoded:n};const i=Di(null==t?void 0:t.ipfs,"https://ipfs.io"),r=Di(null==t?void 0:t.arweave,"https://arweave.net"),a=e.match(Ni),{protocol:o,subpath:s,target:l,subtarget:c=""}=(null==a?void 0:a.groups)||{},u="ipns:/"===o||"ipns/"===s,d="ipfs:/"===o||"ipfs/"===s||Mi.test(e);if(e.startsWith("http")&&!u&&!d){let n=e;return(null==t?void 0:t.arweave)&&(n=e.replace(/https:\/\/arweave.net/g,null==t?void 0:t.arweave)),{uri:n,isOnChain:!1,isEncoded:!1}}if((u||d)&&l)return{uri:`${i}/${u?"ipns":"ipfs"}/${l}${c}`,isOnChain:!1,isEncoded:!1};if("ar:/"===o&&l)return{uri:`${r}/${l}${c||""}`,isOnChain:!1,isEncoded:!1};let p=e.replace(Ui,"");if(p.startsWith("<svg")&&(p=`data:image/svg+xml;base64,${btoa(p)}`),p.startsWith("data:")||p.startsWith("{"))return{uri:p,isOnChain:!0,isEncoded:!1};throw new Ri({uri:e})}function Li(e){if("object"!=typeof e||!("image"in e)&&!("image_url"in e)&&!("image_data"in e))throw new Pi({data:e});return e.image||e.image_url||e.image_data}async function zi({gatewayUrls:e,uri:t}){const{uri:n,isOnChain:i}=Bi({uri:t,gatewayUrls:e});if(i)return n;const r=await async function(e){try{const t=await fetch(e,{method:"HEAD"});if(200===t.status){const e=t.headers.get("content-type");return null==e?void 0:e.startsWith("image/")}return!1}catch(t){return("object"!=typeof t||void 0===t.response)&&!!globalThis.hasOwnProperty("Image")&&new Promise((t=>{const n=new Image;n.onload=()=>{t(!0)},n.onerror=()=>{t(!1)},n.src=e}))}}(n);if(r)return n;throw new Ri({uri:t})}async function Fi(e,{gatewayUrls:t,record:n}){return/eip155:/i.test(n)?async function(e,{gatewayUrls:t,record:n}){const i=function(e){let t=e;t.startsWith("did:nft:")&&(t=t.replace("did:nft:","").replace(/_/g,"/"));const[n,i,r]=t.split("/"),[a,o]=n.split(":"),[s,l]=i.split(":");if(!a||"eip155"!==a.toLowerCase())throw new Si({reason:"Only EIP-155 supported"});if(!o)throw new Si({reason:"Chain ID not found"});if(!l)throw new Si({reason:"Contract address not found"});if(!r)throw new Si({reason:"Token ID not found"});if(!s)throw new Si({reason:"ERC namespace not found"});return{chainID:parseInt(o),namespace:s.toLowerCase(),contractAddress:l,tokenID:r}}(n),r=await async function(e,{nft:t}){if("erc721"===t.namespace)return Ii(e,{address:t.contractAddress,abi:[{name:"tokenURI",type:"function",stateMutability:"view",inputs:[{name:"tokenId",type:"uint256"}],outputs:[{name:"",type:"string"}]}],functionName:"tokenURI",args:[BigInt(t.tokenID)]});if("erc1155"===t.namespace)return Ii(e,{address:t.contractAddress,abi:[{name:"uri",type:"function",stateMutability:"view",inputs:[{name:"_id",type:"uint256"}],outputs:[{name:"",type:"string"}]}],functionName:"uri",args:[BigInt(t.tokenID)]});throw new Oi({namespace:t.namespace})}(e,{nft:i}),{uri:a,isOnChain:o,isEncoded:s}=Bi({uri:r,gatewayUrls:t});if(o&&(a.includes("data:application/json;base64,")||a.startsWith("{"))){const e=s?atob(a.replace("data:application/json;base64,","")):a;return zi({uri:Li(JSON.parse(e)),gatewayUrls:t})}let l=i.tokenID;"erc1155"===i.namespace&&(l=l.replace("0x","").padStart(64,"0"));return async function({gatewayUrls:e,uri:t}){try{const n=await fetch(t).then((e=>e.json()));return await zi({gatewayUrls:e,uri:Li(n)})}catch{throw new Ri({uri:t})}}({gatewayUrls:t,uri:a.replace(/(?:0x)?{id}/,l)})}(e,{gatewayUrls:t,record:n}):zi({uri:n,gatewayUrls:t})}async function Wi(e,{blockNumber:t,blockTag:n,name:i,key:r,gatewayUrls:a,strict:o,universalResolverAddress:s}){let l=s;if(!l){if(!e.chain)throw new Error("client chain not configured. universalResolverAddress is required.");l=ni({blockNumber:t,chain:e.chain,contract:"ensUniversalResolver"})}try{const o={address:l,abi:kn,functionName:"resolve",args:[N(bi(i)),ti({abi:An,functionName:"text",args:[yi(i),r]})],blockNumber:t,blockTag:n},s=en(e,Ii,"readContract"),c=a?await s({...o,args:[...o.args,a]}):await s(o);if("0x"===c[0])return null;const u=Xn({abi:An,functionName:"text",data:c[0]});return""===u?null:u}catch(c){if(o)throw c;if(gi(c,"resolve"))return null;throw c}}async function Hi(e,{blockNumber:t,blockTag:n,assetGatewayUrls:i,name:r,gatewayUrls:a,strict:o,universalResolverAddress:s}){const l=await en(e,Wi,"getEnsText")({blockNumber:t,blockTag:n,key:"avatar",name:r,universalResolverAddress:s,gatewayUrls:a,strict:o});if(!l)return null;try{return await Fi(e,{record:l,gatewayUrls:i})}catch{return null}}async function Zi(e,{address:t,blockNumber:n,blockTag:i,gatewayUrls:r,strict:a,universalResolverAddress:o}){let s=o;if(!s){if(!e.chain)throw new Error("client chain not configured. universalResolverAddress is required.");s=ni({blockNumber:n,chain:e.chain,contract:"ensUniversalResolver"})}const l=`${t.toLowerCase().substring(2)}.addr.reverse`;try{const a={address:s,abi:Tn,functionName:"reverse",args:[N(bi(l))],blockNumber:n,blockTag:i},o=en(e,Ii,"readContract"),[c,u]=r?await o({...a,args:[...a.args,r]}):await o(a);return t.toLowerCase()!==u.toLowerCase()?null:c}catch(c){if(a)throw c;if(gi(c,"reverse"))return null;throw c}}async function Vi(e,{address:t,blockNumber:n,blockTag:i="latest"}){const r=n?U(n):void 0,a=await e.request({method:"eth_getBalance",params:[t,r||i]});return BigInt(a)}const Gi=new Map,qi=new Map;async function Ki(e,{cacheKey:t,cacheTime:n=1/0}){const i=function(e){const t=(e,t)=>({clear:()=>t.delete(e),get:()=>t.get(e),set:n=>t.set(e,n)}),n=t(e,Gi),i=t(e,qi);return{clear:()=>{n.clear(),i.clear()},promise:n,response:i}}(t),r=i.response.get();if(r&&n>0){if((new Date).getTime()-r.created.getTime()<n)return r.data}let a=i.promise.get();a||(a=e(),i.promise.set(a));try{const e=await a;return i.response.set({created:new Date,data:e}),e}finally{i.promise.clear()}}const Yi=e=>`blockNumber.${e}`;async function Ji(e,{cacheTime:t=e.cacheTime}={}){const n=await Ki((()=>e.request({method:"eth_blockNumber"})),{cacheKey:Yi(e.uid),cacheTime:t});return BigInt(n)}async function Qi(e,t){const{abi:n,address:i,args:r,dataSuffix:a,functionName:o,...s}=t,l=s.account?He(s.account):e.account,c=ti({abi:n,args:r,functionName:o});try{const{data:u}=await en(e,Ti,"call")({batch:!1,data:`${c}${a?a.replace("0x",""):""}`,to:i,...s,account:l}),d=Xn({abi:n,args:r,functionName:o,data:u||"0x"});return{result:d,request:{abi:n.filter((e=>"name"in e&&e.name===t.functionName)),address:i,args:r,dataSuffix:a,functionName:o,...s,account:l}}}catch(u){throw Ci(u,{abi:n,address:i,args:r,docsPath:"/docs/contract/simulateContract",functionName:o,sender:null==l?void 0:l.address})}}const Xi=new Map,er=new Map;let tr=0;function nr(e,t,n){const i=++tr,r=()=>Xi.get(e)||[],a=()=>{const t=er.get(e);1===r().length&&t&&t(),(()=>{const t=r();Xi.set(e,t.filter((e=>e.id!==i)))})()},o=r();if(Xi.set(e,[...o,{id:i,fns:t}]),o&&o.length>0)return a;const s={};for(const c in t)s[c]=(...e)=>{var t,n;const i=r();if(0!==i.length)for(const r of i)null==(n=(t=r.fns)[c])||n.call(t,...e)};const l=n(s);return"function"==typeof l&&er.set(e,l),a}async function ir(e){return new Promise((t=>setTimeout(t,e)))}async function rr(e,t){const{abi:n,address:i,args:r,dataSuffix:a,functionName:o,...s}=t,l=ti({abi:n,args:r,functionName:o});return en(e,Cn,"sendTransaction")({data:`${l}${a?a.replace("0x",""):""}`,to:i,...s})}const ar=256;let or,sr=ar;function lr(e=11){if(!or||sr+e>2*ar){or="",sr=0;for(let e=0;e<ar;e++)or+=(256+256*Math.random()|0).toString(16).substring(1)}return or.substring(sr,sr+++e)}function cr(e){const{batch:t,cacheTime:n=e.pollingInterval??4e3,key:i="base",name:r="Base Client",pollingInterval:a=4e3,type:o="base"}=e,s=e.chain,l=e.account?He(e.account):void 0,{config:c,request:u,value:d}=e.transport({chain:s,pollingInterval:a}),p={account:l,batch:t,cacheTime:n,chain:s,key:i,name:r,pollingInterval:a,request:u,transport:{...c,...d},type:o,uid:lr()};return Object.assign(p,{extend:function e(t){return n=>{const i=n(t);for(const e in p)delete i[e];const r={...t,...i};return Object.assign(r,{extend:e(r)})}}(p)})}function ur(e,{delay:t=100,retryCount:n=2,shouldRetry:i=(()=>!0)}={}){return new Promise(((r,a)=>{const o=async({count:s=0}={})=>{try{const t=await e();r(t)}catch(l){if(s<n&&await i({count:s,error:l}))return(async({error:e})=>{const n="function"==typeof t?t({count:s,error:e}):t;n&&await ir(n),o({count:s+1})})({error:l});a(l)}};o()}))}function dr(e,t={}){return async(n,i={})=>{const{retryDelay:r=150,retryCount:a=3}={...t,...i};return ur((async()=>{try{return await e(n)}catch(t){const e=t;switch(e.code){case Pt.code:throw new Pt(e);case St.code:throw new St(e);case Rt.code:throw new Rt(e);case Ot.code:throw new Ot(e);case Nt.code:throw new Nt(e);case Mt.code:throw new Mt(e);case jt.code:throw new jt(e);case Ut.code:throw new Ut(e);case Dt.code:throw new Dt(e);case Bt.code:throw new Bt(e);case Lt.code:throw new Lt(e);case zt.code:throw new zt(e);case Ft.code:throw new Ft(e);case Wt.code:throw new Wt(e);case Ht.code:throw new Ht(e);case Zt.code:throw new Zt(e);case Vt.code:throw new Vt(e);case Gt.code:throw new Gt(e);case 5e3:throw new Ft(e);default:if(t instanceof c)throw t;throw new qt(e)}}}),{delay:({count:e,error:t})=>{var n;if(t&&t instanceof kt){const e=null==(n=null==t?void 0:t.headers)?void 0:n.get("Retry-After");if(null==e?void 0:e.match(/\d/))return 1e3*parseInt(e)}return~~(1<<e)*r},retryCount:a,shouldRetry:({error:e})=>function(e){if("code"in e&&"number"==typeof e.code)return-1===e.code||(e.code===Lt.code||e.code===Nt.code);if(e instanceof kt&&e.status)return 403===e.status||(408===e.status||(413===e.status||(429===e.status||(500===e.status||(502===e.status||(503===e.status||504===e.status))))));return!0}(e)})}}function pr({key:e,name:t,request:n,retryCount:i=3,retryDelay:r=150,timeout:a,type:o},s){return{config:{key:e,name:t,request:n,retryCount:i,retryDelay:r,timeout:a,type:o},request:dr(n,{retryCount:i,retryDelay:r}),value:s}}class hr extends c{constructor(){super("No URL was provided to the Transport. Please provide a valid RPC URL to the Transport.",{docsPath:"/docs/clients/intro"})}}function fr(e,{errorInstance:t=new Error("timed out"),timeout:n,signal:i}){return new Promise(((r,a)=>{(async()=>{let o;try{const s=new AbortController;n>0&&(o=setTimeout((()=>{i?s.abort():a(t)}),n)),r(await e({signal:null==s?void 0:s.signal}))}catch(s){"AbortError"===s.name&&a(t),a(s)}finally{clearTimeout(o)}})()}))}function mr(){return{current:0,take(){return this.current++},reset(){this.current=0}}}const gr=mr();function wr(e,t={}){const{batch:n,fetchOptions:i,key:r="http",name:a="HTTP JSON-RPC",retryDelay:o}=t;return({chain:s,retryCount:l,timeout:c})=>{const{batchSize:u=1e3,wait:d=0}="object"==typeof n?n:{},p=t.retryCount??l,h=c??t.timeout??1e4,f=e||(null==s?void 0:s.rpcUrls.default.http[0]);if(!f)throw new hr;const m=function(e,t={}){return{async request(n){var i;const{body:r,fetchOptions:a={},timeout:o=t.timeout??1e4}=n,{headers:s,method:l,signal:c}={...t.fetchOptions,...a};try{const t=await fr((async({signal:t})=>await fetch(e,{...a,body:Array.isArray(r)?Et(r.map((e=>({jsonrpc:"2.0",id:e.id??gr.take(),...e})))):Et({jsonrpc:"2.0",id:r.id??gr.take(),...r}),headers:{...s,"Content-Type":"application/json"},method:l||"POST",signal:c||(o>0?t:void 0)})),{errorInstance:new At({body:r,url:e}),timeout:o,signal:!0});let n;if(n=(null==(i=t.headers.get("Content-Type"))?void 0:i.startsWith("application/json"))?await t.json():await t.text(),!t.ok)throw new kt({body:r,details:Et(n.error)||t.statusText,headers:t.headers,status:t.status,url:e});return n}catch(u){if(u instanceof kt)throw u;if(u instanceof At)throw u;throw new kt({body:r,details:u.message,url:e})}}}}(f,{fetchOptions:i,timeout:h});return pr({key:r,name:a,async request({method:t,params:i}){const r={method:t,params:i},{schedule:a}=ki({id:`${e}`,wait:d,shouldSplitBatch:e=>e.length>u,fn:e=>m.request({body:e}),sort:(e,t)=>e.id-t.id}),[{error:o,result:s}]=await(async e=>n?a(e):[await m.request({body:e})])(r);if(o)throw new Tt({body:r,error:o,url:f});return s},retryCount:p,retryDelay:o,timeout:h,type:"http"},{fetchOptions:i,url:f})}}function yr(e){return{formatters:void 0,fees:void 0,serializers:void 0,...e}}function vr(e,t="hex"){const n=br(e),i=Rn(new Uint8Array(n.length));return n.encode(i),"hex"===t?j(i.bytes):i.bytes}function br(e){return Array.isArray(e)?function(e){const t=e.reduce(((e,t)=>e+t.length),0),n=xr(t);return{length:t<=55?1+t:1+n+t,encode(i){t<=55?i.pushByte(192+t):(i.pushByte(247+n),1===n?i.pushUint8(t):2===n?i.pushUint16(t):3===n?i.pushUint24(t):i.pushUint32(t));for(const{encode:t}of e)t(i)}}}(e.map((e=>br(e)))):function(e){const t="string"==typeof e?T(e):e,n=xr(t.length),i=1===t.length&&t[0]<128?1:t.length<=55?1+t.length:1+n+t.length;return{length:i,encode(e){1===t.length&&t[0]<128?e.pushBytes(t):t.length<=55?(e.pushByte(128+t.length),e.pushBytes(t)):(e.pushByte(183+n),1===n?e.pushUint8(t.length):2===n?e.pushUint16(t.length):3===n?e.pushUint24(t.length):e.pushUint32(t.length),e.pushBytes(t))}}}(e)}function xr(e){if(e<256)return 1;if(e<65536)return 2;if(e<2**24)return 3;if(e<2**32)return 4;throw new c("Length is too large.")}const Cr={"0x0":"reverted","0x1":"success"};function _r(e){const t={...e,blockNumber:e.blockNumber?BigInt(e.blockNumber):null,contractAddress:e.contractAddress?e.contractAddress:null,cumulativeGasUsed:e.cumulativeGasUsed?BigInt(e.cumulativeGasUsed):null,effectiveGasPrice:e.effectiveGasPrice?BigInt(e.effectiveGasPrice):null,gasUsed:e.gasUsed?BigInt(e.gasUsed):null,logs:e.logs?e.logs.map((e=>function(e,{args:t,eventName:n}={}){return{...e,blockHash:e.blockHash?e.blockHash:null,blockNumber:e.blockNumber?BigInt(e.blockNumber):null,logIndex:e.logIndex?Number(e.logIndex):null,transactionHash:e.transactionHash?e.transactionHash:null,transactionIndex:e.transactionIndex?Number(e.transactionIndex):null,...n?{args:t,eventName:n}:{}}}(e))):null,to:e.to?e.to:null,transactionIndex:e.transactionIndex?S(e.transactionIndex):null,status:e.status?Cr[e.status]:null,type:e.type?ln[e.type]||e.type:null};return e.blobGasPrice&&(t.blobGasPrice=BigInt(e.blobGasPrice)),e.blobGasUsed&&(t.blobGasUsed=BigInt(e.blobGasUsed)),t}const Er=Jt("transactionReceipt",_r);function kr(e){if(!e||0===e.length)return[];const t=[];for(let n=0;n<e.length;n++){const{address:i,storageKeys:r}=e[n];for(let e=0;e<r.length;e++)if(r[e].length-2!=64)throw new vt({storageKey:r[e]});if(!Me(i,{strict:!1}))throw new ie({address:i});t.push([i,r])}return t}function Tr(e,t){const n=vn(e);return"eip1559"===n?function(e,t){const{chainId:n,gas:i,nonce:r,to:a,value:o,maxFeePerGas:s,maxPriorityFeePerGas:l,accessList:u,data:d}=e;!function(e){const{chainId:t,maxPriorityFeePerGas:n,gasPrice:i,maxFeePerGas:r,to:a}=e;if(t<=0)throw new Ye({chainId:t});if(a&&!Me(a))throw new ie({address:a});if(i)throw new c("`gasPrice` is not a valid EIP-1559 Transaction attribute.");if(r&&r>2n**256n-1n)throw new it({maxFeePerGas:r});if(n&&r&&n>r)throw new pt({maxFeePerGas:r,maxPriorityFeePerGas:n})}(e);const p=kr(u),h=[N(n),r?N(r):"0x",l?N(l):"0x",s?N(s):"0x",i?N(i):"0x",a??"0x",o?N(o):"0x",d??"0x",p];if(t){const e=0n===t.v?"0x":1n===t.v?N(1):27n===t.v?"0x":N(1);h.push(e,x(t.r),x(t.s))}return ne(["0x02",vr(h)])}(e,t):"eip2930"===n?function(e,t){const{chainId:n,gas:i,data:r,nonce:a,to:o,value:s,accessList:l,gasPrice:u}=e;!function(e){const{chainId:t,maxPriorityFeePerGas:n,gasPrice:i,maxFeePerGas:r,to:a}=e;if(t<=0)throw new Ye({chainId:t});if(a&&!Me(a))throw new ie({address:a});if(n||r)throw new c("`maxFeePerGas`/`maxPriorityFeePerGas` is not a valid EIP-2930 Transaction attribute.");if(i&&i>2n**256n-1n)throw new it({maxFeePerGas:i})}(e);const d=kr(l),p=[N(n),a?N(a):"0x",u?N(u):"0x",i?N(i):"0x",o??"0x",s?N(s):"0x",r??"0x",d];if(t){const e=0n===t.v?"0x":1n===t.v?N(1):27n===t.v?"0x":N(1);p.push(e,x(t.r),x(t.s))}return ne(["0x01",vr(p)])}(e,t):function(e,t){const{chainId:n=0,gas:i,data:r,nonce:a,to:o,value:s,gasPrice:l}=e;!function(e){const{chainId:t,maxPriorityFeePerGas:n,gasPrice:i,maxFeePerGas:r,to:a,accessList:o}=e;if(a&&!Me(a))throw new ie({address:a});if(void 0!==t&&t<=0)throw new Ye({chainId:t});if(n||r)throw new c("`maxFeePerGas`/`maxPriorityFeePerGas` is not a valid Legacy Transaction attribute.");if(i&&i>2n**256n-1n)throw new it({maxFeePerGas:i});if(o)throw new c("`accessList` is not a valid Legacy Transaction attribute.")}(e);let u=[a?N(a):"0x",l?N(l):"0x",i?N(i):"0x",o??"0x",s?N(s):"0x",r??"0x"];if(t){const e=(()=>{if(t.v>=35n){return(t.v-35n)/2n>0?t.v:27n+(35n===t.v?0n:1n)}if(n>0)return BigInt(2*n)+BigInt(35n+t.v-27n);const e=27n+(27n===t.v?0n:1n);if(t.v!==e)throw new wt({v:t.v});return e})();u=[...u,N(e),t.r,t.s]}else n>0&&(u=[...u,N(n),"0x","0x"]);return vr(u)}(e,t)}function Ar(e,t){let[n,i="0"]=e.split(".");const r=n.startsWith("-");if(r&&(n=n.slice(1)),i=i.replace(/(0+)$/,""),0===t)1===Math.round(Number(`.${i}`))&&(n=`${BigInt(n)+1n}`),i="";else if(i.length>t){const[e,r,a]=[i.slice(0,t-1),i.slice(t-1,t),i.slice(t)],o=Math.round(Number(`${r}.${a}`));i=o>9?`${BigInt(e)+BigInt(1)}0`.padStart(e.length+1,"0"):`${e}${o}`,i.length>t&&(i=i.slice(1),n=`${BigInt(n)+1n}`),i=i.slice(0,t)}else i=i.padEnd(t,"0");return BigInt(`${r?"-":""}${n}${i}`)}async function $r(e,{blockHash:t,blockNumber:n,blockTag:i,hash:r,index:a}){var o,s,l;const c=i||"latest",u=void 0!==n?U(n):void 0;let d=null;if(r?d=await e.request({method:"eth_getTransactionByHash",params:[r]}):t?d=await e.request({method:"eth_getTransactionByBlockHashAndIndex",params:[t,U(a)]}):(u||c)&&(d=await e.request({method:"eth_getTransactionByBlockNumberAndIndex",params:[u||c,U(a)]})),!d)throw new xt({blockHash:t,blockNumber:n,blockTag:c,hash:r,index:a});return((null==(l=null==(s=null==(o=e.chain)?void 0:o.formatters)?void 0:s.transaction)?void 0:l.format)||cn)(d)}async function Ir(e,{hash:t}){var n,i,r;const a=await e.request({method:"eth_getTransactionReceipt",params:[t]});if(!a)throw new Ct({hash:t});return((null==(r=null==(i=null==(n=e.chain)?void 0:n.formatters)?void 0:i.transactionReceipt)?void 0:r.format)||_r)(a)}async function Pr(e,t){var n;const{allowFailure:i=!0,batchSize:r,blockNumber:a,blockTag:o,multicallAddress:s,stateOverride:l}=t,u=t.contracts,d=r??("object"==typeof(null==(n=e.batch)?void 0:n.multicall)&&e.batch.multicall.batchSize||1024);let p=s;if(!p){if(!e.chain)throw new Error("client chain not configured. multicallAddress is required.");p=ni({blockNumber:a,chain:e.chain,contract:"multicall3"})}const h=[[]];let f=0,m=0;for(let c=0;c<u.length;c++){const{abi:e,address:t,args:n,functionName:r}=u[c];try{const i=ti({abi:e,args:n,functionName:r});m+=(i.length-2)/2,d>0&&m>d&&h[f].length>0&&(f++,m=(i.length-2)/2,h[f]=[]),h[f]=[...h[f],{allowFailure:!0,callData:i,target:t}]}catch(y){const a=Ci(y,{abi:e,address:t,args:n,docsPath:"/docs/contract/multicall",functionName:r});if(!i)throw a;h[f]=[...h[f],{allowFailure:!0,callData:"0x",target:t}]}}const g=await Promise.allSettled(h.map((t=>en(e,Ii,"readContract")({abi:_n,address:p,args:[t],blockNumber:a,blockTag:o,functionName:"aggregate3",stateOverride:l})))),w=[];for(let c=0;c<g.length;c++){const e=g[c];if("rejected"===e.status){if(!i)throw e.reason;for(let t=0;t<h[c].length;t++)w.push({status:"failure",error:e.reason,result:void 0});continue}const t=e.value;for(let n=0;n<t.length;n++){const{returnData:e,success:r}=t[n],{callData:a}=h[c][n],{abi:o,address:s,functionName:l,args:d}=u[w.length];try{if("0x"===a)throw new W;if(!r)throw new mi({data:e});const t=Xn({abi:o,args:d,data:e,functionName:l});w.push(i?{result:t,status:"success"}:t)}catch(y){const e=Ci(y,{abi:o,address:s,args:d,docsPath:"/docs/contract/multicall",functionName:l});if(!i)throw e;w.push({error:e,result:void 0,status:"failure"})}}}if(w.length!==u.length)throw new c("multicall results mismatch");return w}function Sr(e,{emitOnBegin:t=!1,emitMissed:n=!1,onBlockNumber:i,onError:r,poll:a,pollingInterval:o=e.pollingInterval}){let s;return(void 0!==a?a:"webSocket"!==e.transport.type)?nr(Et(["watchBlockNumber",e.uid,t,n,o]),{onBlockNumber:i,onError:r},(i=>function(e,{emitOnBegin:t,initialWaitTime:n,interval:i}){let r=!0;const a=()=>r=!1;return(async()=>{let o;t&&(o=await e({unpoll:a}));const s=await(null==n?void 0:n(o))??i;await ir(s);const l=async()=>{r&&(await e({unpoll:a}),await ir(i),l())};l()})(),a}((async()=>{var t;try{const t=await en(e,Ji,"getBlockNumber")({cacheTime:0});if(s){if(t===s)return;if(t-s>1&&n)for(let e=s+1n;e<t;e++)i.onBlockNumber(e,s),s=e}(!s||t>s)&&(i.onBlockNumber(t,s),s=t)}catch(r){null==(t=i.onError)||t.call(i,r)}}),{emitOnBegin:t,interval:o}))):(()=>{let t=!0,n=()=>t=!1;return(async()=>{try{const{unsubscribe:a}=await e.transport.subscribe({params:["newHeads"],onData(e){var n;if(!t)return;const r=P(null==(n=e.result)?void 0:n.number);i(r,s),s=r},onError(e){null==r||r(e)}});n=a,t||n()}catch(a){null==r||r(a)}})(),n})()}async function Rr(e,{confirmations:t=1,hash:n,onReplaced:i,pollingInterval:r=e.pollingInterval,retryCount:a=6,retryDelay:o=(({count:e})=>200*~~(1<<e)),timeout:s}){const l=Et(["waitForTransactionReceipt",e.uid,n]);let c,u,d,p=!1;return new Promise(((h,f)=>{s&&setTimeout((()=>f(new _t({hash:n}))),s);const m=nr(l,{onReplaced:i,resolve:h,reject:f},(i=>{const s=en(e,Sr,"watchBlockNumber")({emitMissed:!0,emitOnBegin:!0,poll:!0,pollingInterval:r,async onBlockNumber(r){if(p)return;let l=r;const h=e=>{s(),e(),m()};try{if(d){if(t>1&&(!d.blockNumber||l-d.blockNumber+1n<t))return;return void h((()=>i.resolve(d)))}if(c||(p=!0,await ur((async()=>{c=await en(e,$r,"getTransaction")({hash:n}),c.blockNumber&&(l=c.blockNumber)}),{delay:o,retryCount:a}),p=!1),d=await en(e,Ir,"getTransactionReceipt")({hash:n}),t>1&&(!d.blockNumber||l-d.blockNumber+1n<t))return;h((()=>i.resolve(d)))}catch(f){if(f instanceof xt||f instanceof Ct){if(!c)return void(p=!1);try{u=c,p=!0;const n=await ur((()=>en(e,hn,"getBlock")({blockNumber:l,includeTransactions:!0})),{delay:o,retryCount:a,shouldRetry:({error:e})=>e instanceof sn});p=!1;const r=n.transactions.find((({from:e,nonce:t})=>e===u.from&&t===u.nonce));if(!r)return;if(d=await en(e,Ir,"getTransactionReceipt")({hash:r.hash}),t>1&&(!d.blockNumber||l-d.blockNumber+1n<t))return;let s="replaced";r.to===u.to&&r.value===u.value?s="repriced":r.from===r.to&&0n===r.value&&(s="cancelled"),h((()=>{var e;null==(e=i.onReplaced)||e.call(i,{reason:s,replacedTransaction:u,transaction:r,transactionReceipt:d}),i.resolve(d)}))}catch(g){h((()=>i.reject(g)))}}else h((()=>i.reject(f)))}}})}))}))}async function Or(e,{account:t=e.account,message:n}){if(!t)throw new Ze({docsPath:"/docs/actions/wallet/signMessage"});const i=He(t);if("local"===i.type)return i.signMessage({message:n});const r="string"==typeof n?B(n):n.raw instanceof Uint8Array?N(n.raw):n.raw;return e.request({method:"personal_sign",params:[r,i.address]},{retryCount:0})}function Nr(){const e=new Set;let t=[];const n=()=>function(e){const t=t=>e(t.detail);return window.addEventListener("eip6963:announceProvider",t),window.dispatchEvent(new CustomEvent("eip6963:requestProvider")),()=>window.removeEventListener("eip6963:announceProvider",t)}((n=>{t.some((({info:e})=>e.uuid===n.info.uuid))||(t=[...t,n],e.forEach((e=>e(t,{added:[n]}))))}));let i=n();return{_listeners:()=>e,clear(){e.forEach((e=>e([],{removed:[...t]}))),t=[]},destroy(){this.clear(),e.clear(),i()},findProvider:({rdns:e})=>t.find((t=>t.info.rdns===e)),getProviders:()=>t,reset(){this.clear(),i(),i=n()},subscribe:(n,{emitImmediately:i}={})=>(e.add(n),i&&n(t,{added:t}),()=>e.delete(n))}}var Mr={BASE_URL:"./",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const jr=e=>(t,n,i)=>{const r=i.subscribe;i.subscribe=(e,t,n)=>{let a=e;if(t){const r=(null==n?void 0:n.equalityFn)||Object.is;let o=e(i.getState());a=n=>{const i=e(n);if(!r(o,i)){const e=o;t(o=i,e)}},(null==n?void 0:n.fireImmediately)&&t(o,o)}return r(a)};return e(t,n,i)};function Ur(e,t){let n;try{n=e()}catch(i){return}return{getItem:e=>{var i;const r=e=>null===e?null:JSON.parse(e,null==t?void 0:t.reviver),a=null!=(i=n.getItem(e))?i:null;return a instanceof Promise?a.then(r):r(a)},setItem:(e,i)=>n.setItem(e,JSON.stringify(i,null==t?void 0:t.replacer)),removeItem:e=>n.removeItem(e)}}const Dr=e=>t=>{try{const n=e(t);return n instanceof Promise?n:{then:e=>Dr(e)(n),catch(e){return this}}}catch(n){return{then(e){return this},catch:e=>Dr(e)(n)}}},Br=(e,t)=>"getStorage"in t||"serialize"in t||"deserialize"in t?("production"!==(Mr?"production":void 0)&&console.warn("[DEPRECATED] `getStorage`, `serialize` and `deserialize` options are deprecated. Use `storage` option instead."),((e,t)=>(n,i,r)=>{let a={getStorage:()=>localStorage,serialize:JSON.stringify,deserialize:JSON.parse,partialize:e=>e,version:0,merge:(e,t)=>({...t,...e}),...t},o=!1;const s=new Set,l=new Set;let c;try{c=a.getStorage()}catch(g){}if(!c)return e(((...e)=>{console.warn(`[zustand persist middleware] Unable to update item '${a.name}', the given storage is currently unavailable.`),n(...e)}),i,r);const u=Dr(a.serialize),d=()=>{const e=a.partialize({...i()});let t;const n=u({state:e,version:a.version}).then((e=>c.setItem(a.name,e))).catch((e=>{t=e}));if(t)throw t;return n},p=r.setState;r.setState=(e,t)=>{p(e,t),d()};const h=e(((...e)=>{n(...e),d()}),i,r);let f;const m=()=>{var e;if(!c)return;o=!1,s.forEach((e=>e(i())));const t=(null==(e=a.onRehydrateStorage)?void 0:e.call(a,i()))||void 0;return Dr(c.getItem.bind(c))(a.name).then((e=>{if(e)return a.deserialize(e)})).then((e=>{if(e){if("number"!=typeof e.version||e.version===a.version)return e.state;if(a.migrate)return a.migrate(e.state,e.version);console.error("State loaded from storage couldn't be migrated since no migrate function was provided")}})).then((e=>{var t;return f=a.merge(e,null!=(t=i())?t:h),n(f,!0),d()})).then((()=>{null==t||t(f,void 0),o=!0,l.forEach((e=>e(f)))})).catch((e=>{null==t||t(void 0,e)}))};return r.persist={setOptions:e=>{a={...a,...e},e.getStorage&&(c=e.getStorage())},clearStorage:()=>{null==c||c.removeItem(a.name)},getOptions:()=>a,rehydrate:()=>m(),hasHydrated:()=>o,onHydrate:e=>(s.add(e),()=>{s.delete(e)}),onFinishHydration:e=>(l.add(e),()=>{l.delete(e)})},m(),f||h})(e,t)):((e,t)=>(n,i,r)=>{let a={storage:Ur((()=>localStorage)),partialize:e=>e,version:0,merge:(e,t)=>({...t,...e}),...t},o=!1;const s=new Set,l=new Set;let c=a.storage;if(!c)return e(((...e)=>{console.warn(`[zustand persist middleware] Unable to update item '${a.name}', the given storage is currently unavailable.`),n(...e)}),i,r);const u=()=>{const e=a.partialize({...i()});return c.setItem(a.name,{state:e,version:a.version})},d=r.setState;r.setState=(e,t)=>{d(e,t),u()};const p=e(((...e)=>{n(...e),u()}),i,r);let h;const f=()=>{var e,t;if(!c)return;o=!1,s.forEach((e=>{var t;return e(null!=(t=i())?t:p)}));const r=(null==(t=a.onRehydrateStorage)?void 0:t.call(a,null!=(e=i())?e:p))||void 0;return Dr(c.getItem.bind(c))(a.name).then((e=>{if(e){if("number"!=typeof e.version||e.version===a.version)return e.state;if(a.migrate)return a.migrate(e.state,e.version);console.error("State loaded from storage couldn't be migrated since no migrate function was provided")}})).then((e=>{var t;return h=a.merge(e,null!=(t=i())?t:p),n(h,!0),u()})).then((()=>{null==r||r(h,void 0),h=i(),o=!0,l.forEach((e=>e(h)))})).catch((e=>{null==r||r(void 0,e)}))};return r.persist={setOptions:e=>{a={...a,...e},e.storage&&(c=e.storage)},clearStorage:()=>{null==c||c.removeItem(a.name)},getOptions:()=>a,rehydrate:()=>f(),hasHydrated:()=>o,onHydrate:e=>(s.add(e),()=>{s.delete(e)}),onFinishHydration:e=>(l.add(e),()=>{l.delete(e)})},a.skipHydration||f(),h||p})(e,t);var Lr={BASE_URL:"./",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const zr=e=>{let t;const n=new Set,i=(e,i)=>{const r="function"==typeof e?e(t):e;if(!Object.is(r,t)){const e=t;t=(null!=i?i:"object"!=typeof r)?r:Object.assign({},t,r),n.forEach((n=>n(t,e)))}},r=()=>t,a={setState:i,getState:r,subscribe:e=>(n.add(e),()=>n.delete(e)),destroy:()=>{"production"!==(Lr?"production":void 0)&&console.warn("[DEPRECATED] The `destroy` method will be unsupported in a future version. Instead use unsubscribe function returned by subscribe. Everything will be garbage-collected if store is garbage-collected."),n.clear()}};return t=e(i,r,a),a},Fr=e=>e?zr(e):zr;var Wr={exports:{}};!function(e){var t=Object.prototype.hasOwnProperty,n="~";function i(){}function r(e,t,n){this.fn=e,this.context=t,this.once=n||!1}function a(e,t,i,a,o){if("function"!=typeof i)throw new TypeError("The listener must be a function");var s=new r(i,a||e,o),l=n?n+t:t;return e._events[l]?e._events[l].fn?e._events[l]=[e._events[l],s]:e._events[l].push(s):(e._events[l]=s,e._eventsCount++),e}function o(e,t){0==--e._eventsCount?e._events=new i:delete e._events[t]}function s(){this._events=new i,this._eventsCount=0}Object.create&&(i.prototype=Object.create(null),(new i).__proto__||(n=!1)),s.prototype.eventNames=function(){var e,i,r=[];if(0===this._eventsCount)return r;for(i in e=this._events)t.call(e,i)&&r.push(n?i.slice(1):i);return Object.getOwnPropertySymbols?r.concat(Object.getOwnPropertySymbols(e)):r},s.prototype.listeners=function(e){var t=n?n+e:e,i=this._events[t];if(!i)return[];if(i.fn)return[i.fn];for(var r=0,a=i.length,o=new Array(a);r<a;r++)o[r]=i[r].fn;return o},s.prototype.listenerCount=function(e){var t=n?n+e:e,i=this._events[t];return i?i.fn?1:i.length:0},s.prototype.emit=function(e,t,i,r,a,o){var s=n?n+e:e;if(!this._events[s])return!1;var l,c,u=this._events[s],d=arguments.length;if(u.fn){switch(u.once&&this.removeListener(e,u.fn,void 0,!0),d){case 1:return u.fn.call(u.context),!0;case 2:return u.fn.call(u.context,t),!0;case 3:return u.fn.call(u.context,t,i),!0;case 4:return u.fn.call(u.context,t,i,r),!0;case 5:return u.fn.call(u.context,t,i,r,a),!0;case 6:return u.fn.call(u.context,t,i,r,a,o),!0}for(c=1,l=new Array(d-1);c<d;c++)l[c-1]=arguments[c];u.fn.apply(u.context,l)}else{var p,h=u.length;for(c=0;c<h;c++)switch(u[c].once&&this.removeListener(e,u[c].fn,void 0,!0),d){case 1:u[c].fn.call(u[c].context);break;case 2:u[c].fn.call(u[c].context,t);break;case 3:u[c].fn.call(u[c].context,t,i);break;case 4:u[c].fn.call(u[c].context,t,i,r);break;default:if(!l)for(p=1,l=new Array(d-1);p<d;p++)l[p-1]=arguments[p];u[c].fn.apply(u[c].context,l)}}return!0},s.prototype.on=function(e,t,n){return a(this,e,t,n,!1)},s.prototype.once=function(e,t,n){return a(this,e,t,n,!0)},s.prototype.removeListener=function(e,t,i,r){var a=n?n+e:e;if(!this._events[a])return this;if(!t)return o(this,a),this;var s=this._events[a];if(s.fn)s.fn!==t||r&&!s.once||i&&s.context!==i||o(this,a);else{for(var l=0,c=[],u=s.length;l<u;l++)(s[l].fn!==t||r&&!s[l].once||i&&s[l].context!==i)&&c.push(s[l]);c.length?this._events[a]=1===c.length?c[0]:c:o(this,a)}return this},s.prototype.removeAllListeners=function(e){var t;return e?(t=n?n+e:e,this._events[t]&&o(this,t)):(this._events=new i,this._eventsCount=0),this},s.prototype.off=s.prototype.removeListener,s.prototype.addListener=s.prototype.on,s.prefixed=n,s.EventEmitter=s,e.exports=s}(Wr);const Hr=o(Wr.exports);var Zr,Vr=function(e,t,n,i){if("a"===n&&!i)throw new TypeError("Private accessor was defined without a getter");if("function"==typeof t?e!==t||!i:!t.has(e))throw new TypeError("Cannot read private member from an object whose class did not declare it");return"m"===n?i:"a"===n?i.call(e):i?i.value:t.get(e)};class Gr{constructor(e){Object.defineProperty(this,"uid",{enumerable:!0,configurable:!0,writable:!0,value:e}),Zr.set(this,new Hr)}on(e,t){Vr(this,Zr,"f").on(e,t)}once(e,t){Vr(this,Zr,"f").once(e,t)}off(e,t){Vr(this,Zr,"f").off(e,t)}emit(e,...t){const n=t[0];Vr(this,Zr,"f").emit(e,{uid:this.uid,...n})}listenerCount(e){return Vr(this,Zr,"f").listenerCount(e)}}function qr(e,t){return JSON.parse(e,((e,n)=>{let i=n;return"bigint"===(null==i?void 0:i.__type)&&(i=BigInt(i.value)),"Map"===(null==i?void 0:i.__type)&&(i=new Map(i.value)),(null==t?void 0:t(e,i))??i}))}function Kr(e,t){return e.slice(0,t).join(".")||"."}function Yr(e,t){const{length:n}=e;for(let i=0;i<n;++i)if(e[i]===t)return i+1;return 0}function Jr(e,t,n,i){return JSON.stringify(e,function(e,t){const n="function"==typeof e,i="function"==typeof t,r=[],a=[];return function(o,s){if("object"==typeof s)if(r.length){const e=Yr(r,this);0===e?r[r.length]=this:(r.splice(e),a.splice(e)),a[a.length]=o;const n=Yr(r,s);if(0!==n)return i?t.call(this,o,s,Kr(a,n)):`[ref=${Kr(a,n)}]`}else r[0]=s,a[0]=o;return n?e.call(this,o,s):s}}(((e,n)=>{let i=n;return"bigint"==typeof i&&(i={__type:"bigint",value:n.toString()}),i instanceof Map&&(i={__type:"Map",value:Array.from(n.entries())}),(null==t?void 0:t(e,i))??i}),i),n??void 0)}function Qr(e){const{deserialize:t=qr,key:n="wagmi",serialize:i=Jr,storage:r=Xr}=e;function a(e){return e instanceof Promise?e.then((e=>e)).catch((()=>null)):e}return{...r,key:n,async getItem(e,i){const o=r.getItem(`${n}.${e}`),s=await a(o);return s?t(s)??null:i??null},async setItem(e,t){const o=`${n}.${e}`;null===t?await a(r.removeItem(o)):await a(r.setItem(o,i(t)))},async removeItem(e){await a(r.removeItem(`${n}.${e}`))}}}Zr=new WeakMap;const Xr={getItem:()=>null,setItem:()=>{},removeItem:()=>{}};const ea="2.6.5";var ta,na,ia=function(e,t,n,i){if("a"===n&&!i)throw new TypeError("Private accessor was defined without a getter");if("function"==typeof t?e!==t||!i:!t.has(e))throw new TypeError("Cannot read private member from an object whose class did not declare it");return"m"===n?i:"a"===n?i.call(e):i?i.value:t.get(e)};class ra extends Error{get docsBaseUrl(){return"https://wagmi.sh/core"}get version(){return`@wagmi/core@${ea}`}constructor(e,t={}){var n;super(),ta.add(this),Object.defineProperty(this,"details",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"docsPath",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"metaMessages",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"shortMessage",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"WagmiCoreError"});const i=t.cause instanceof ra?t.cause.details:(null==(n=t.cause)?void 0:n.message)?t.cause.message:t.details,r=t.cause instanceof ra&&t.cause.docsPath||t.docsPath;this.message=[e||"An error occurred.","",...t.metaMessages?[...t.metaMessages,""]:[],...r?[`Docs: ${this.docsBaseUrl}${r}.html${t.docsSlug?`#${t.docsSlug}`:""}`]:[],...i?[`Details: ${i}`]:[],`Version: ${this.version}`].join("\n"),t.cause&&(this.cause=t.cause),this.details=i,this.docsPath=r,this.metaMessages=t.metaMessages,this.shortMessage=e}walk(e){return ia(this,ta,"m",na).call(this,this,e)}}ta=new WeakSet,na=function e(t,n){return(null==n?void 0:n(t))?t:t.cause?ia(this,ta,"m",e).call(this,t.cause,n):t};class aa extends ra{constructor(){super("Chain not configured."),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ChainNotConfiguredError"})}}class oa extends ra{constructor(){super("Connector already connected."),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ConnectorAlreadyConnectedError"})}}class sa extends ra{constructor(){super("Connector not connected."),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ConnectorNotConnectedError"})}}class la extends ra{constructor({address:e,connector:t}){super(`Account "${e}" not found for connector "${t.name}".`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ConnectorAccountNotFoundError"})}}class ua extends ra{constructor(){super("Provider not found."),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ProviderNotFoundError"})}}class da extends ra{constructor({connector:e}){super(`"${e.name}" does not support programmatic chain switching.`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"SwitchChainNotSupportedError"})}}function pa(e){if("string"==typeof e)return Number.parseInt(e,"0x"===e.trim().substring(0,2)?16:10);if("bigint"==typeof e)return Number(e);if("number"==typeof e)return e;throw new Error(`Cannot normalize chainId "${e}" of type "${typeof e}"`)}const ha={coinbaseWallet:{id:"coinbaseWallet",name:"Coinbase Wallet",provider:e=>(null==e?void 0:e.coinbaseWalletExtension)?e.coinbaseWalletExtension:ma(e,"isCoinbaseWallet")},metaMask:{id:"metaMask",name:"MetaMask",provider:e=>ma(e,(e=>{if(!e.isMetaMask)return!1;if(e.isBraveWallet&&!e._events&&!e._state)return!1;const t=["isApexWallet","isAvalanche","isBitKeep","isBlockWallet","isKuCoinWallet","isMathWallet","isOkxWallet","isOKExWallet","isOneInchIOSWallet","isOneInchAndroidWallet","isOpera","isPortal","isRabby","isTokenPocket","isTokenary","isZerion"];for(const n of t)if(e[n])return!1;return!0}))},phantom:{id:"phantom",name:"Phantom",provider(e){var t,n;return(null==(t=null==e?void 0:e.phantom)?void 0:t.ethereum)?null==(n=e.phantom)?void 0:n.ethereum:ma(e,"isPhantom")}}};function fa(e={}){const{shimDisconnect:t=!0,unstable_shimAsyncInject:n}=e;function i(){const t=e.target;if("function"==typeof t){const e=t();if(e)return e}return"object"==typeof t?t:"string"==typeof t?{...ha[t]??{id:t,name:`${t[0].toUpperCase()}${t.slice(1)}`,provider:`is${t[0].toUpperCase()}${t.slice(1)}`}}:{id:"injected",name:"Injected",provider:e=>null==e?void 0:e.ethereum}}return r=>({get icon(){return i().icon},get id(){return i().id},get name(){return i().name},type:fa.type,async setup(){const t=await this.getProvider();t&&e.target&&t.on("connect",this.onConnect.bind(this))},async connect({chainId:n,isReconnecting:i}={}){var a,o,s,l,c,u;const d=await this.getProvider();if(!d)throw new ua;let p=null;if(!i){p=await this.getAccounts().catch((()=>null));if(!!(null==p?void 0:p.length))try{p=null==(l=null==(s=null==(o=null==(a=(await d.request({method:"wallet_requestPermissions",params:[{eth_accounts:{}}]}))[0])?void 0:a.caveats)?void 0:o[0])?void 0:s.value)?void 0:l.map((e=>Re(e)))}catch(h){const e=h;if(e.code===Ft.code)throw new Ft(e);if(e.code===Ut.code)throw e}}try{if(!(null==p?void 0:p.length)){p=(await d.request({method:"eth_requestAccounts"})).map((e=>Re(e)))}d.removeListener("connect",this.onConnect.bind(this)),d.on("accountsChanged",this.onAccountsChanged.bind(this)),d.on("chainChanged",this.onChainChanged),d.on("disconnect",this.onDisconnect.bind(this));let i=await this.getChainId();if(n&&i!==n){const e=await this.switchChain({chainId:n}).catch((e=>{if(e.code===Ft.code)throw e;return{id:i}}));i=(null==e?void 0:e.id)??i}return t&&(await(null==(c=r.storage)?void 0:c.removeItem(`${this.id}.disconnected`)),e.target||await(null==(u=r.storage)?void 0:u.setItem("injected.connected",!0))),{accounts:p,chainId:i}}catch(h){const e=h;if(e.code===Ft.code)throw new Ft(e);if(e.code===Ut.code)throw new Ut(e);throw e}},async disconnect(){var n,i;const a=await this.getProvider();if(!a)throw new ua;a.removeListener("accountsChanged",this.onAccountsChanged.bind(this)),a.removeListener("chainChanged",this.onChainChanged),a.removeListener("disconnect",this.onDisconnect.bind(this)),a.on("connect",this.onConnect.bind(this)),t&&(await(null==(n=r.storage)?void 0:n.setItem(`${this.id}.disconnected`,!0)),e.target||await(null==(i=r.storage)?void 0:i.removeItem("injected.connected")))},async getAccounts(){const e=await this.getProvider();if(!e)throw new ua;return(await e.request({method:"eth_accounts"})).map((e=>Re(e)))},async getChainId(){const e=await this.getProvider();if(!e)throw new ua;return pa(await e.request({method:"eth_chainId"}))},async getProvider(){if("undefined"==typeof window)return;let e;const t=i();return e="function"==typeof t.provider?t.provider(window):"string"==typeof t.provider?ma(window,t.provider):t.provider,e&&!e.removeListener&&("off"in e&&"function"==typeof e.off?e.removeListener=e.off:e.removeListener=()=>{}),e},async isAuthorized(){var i,a;try{if(t&&await(null==(i=r.storage)?void 0:i.getItem(`${this.id}.disconnected`)))return!1;if(!e.target){if(!(await(null==(a=r.storage)?void 0:a.getItem("injected.connected"))))return!1}if(!(await this.getProvider())){if(void 0!==n&&!1!==n){const e=async()=>{"undefined"!=typeof window&&window.removeEventListener("ethereum#initialized",e);return!!(await this.getProvider())},t="number"==typeof n?n:1e3;if(await Promise.race([..."undefined"!=typeof window?[new Promise((t=>window.addEventListener("ethereum#initialized",(()=>t(e())),{once:!0})))]:[],new Promise((n=>setTimeout((()=>n(e())),t)))]))return!0}throw new ua}return!!(await ur((()=>fr((()=>this.getAccounts()),{timeout:100})))).length}catch{return!1}},async switchChain({chainId:e}){var t,n,i;const a=await this.getProvider();if(!a)throw new ua;const o=r.chains.find((t=>t.id===e));if(!o)throw new Gt(new aa);try{return await Promise.all([a.request({method:"wallet_switchEthereumChain",params:[{chainId:U(e)}]}),new Promise((t=>r.emitter.once("change",(({chainId:n})=>{n===e&&t()}))))]),o}catch(s){const r=s;if(4902===r.code||4902===(null==(n=null==(t=null==r?void 0:r.data)?void 0:t.originalError)?void 0:n.code))try{const{default:t,...n}=o.blockExplorers??{};let r=[];t&&(r=[t.url,...Object.values(n).map((e=>e.url))]),await a.request({method:"wallet_addEthereumChain",params:[{chainId:U(e),chainName:o.name,nativeCurrency:o.nativeCurrency,rpcUrls:[(null==(i=o.rpcUrls.default)?void 0:i.http[0])??""],blockExplorerUrls:r}]});if(await this.getChainId()!==e)throw new Ft(new Error("User rejected switch after adding network."));return o}catch(l){throw new Ft(l)}if(r.code===Ft.code)throw new Ft(r);throw new Gt(r)}},async onAccountsChanged(e){var n;if(0===e.length)this.onDisconnect();else if(r.emitter.listenerCount("connect")){const e=(await this.getChainId()).toString();this.onConnect({chainId:e}),t&&await(null==(n=r.storage)?void 0:n.removeItem(`${this.id}.disconnected`))}else r.emitter.emit("change",{accounts:e.map((e=>Re(e)))})},onChainChanged(e){const t=pa(e);r.emitter.emit("change",{chainId:t})},async onConnect(e){const t=await this.getAccounts();if(0===t.length)return;const n=pa(e.chainId);r.emitter.emit("connect",{accounts:t,chainId:n});const i=await this.getProvider();i&&(i.removeListener("connect",this.onConnect.bind(this)),i.on("accountsChanged",this.onAccountsChanged.bind(this)),i.on("chainChanged",this.onChainChanged),i.on("disconnect",this.onDisconnect.bind(this)))},async onDisconnect(e){const t=await this.getProvider();e&&1013===e.code&&t&&(await this.getAccounts()).length||(r.emitter.emit("disconnect"),t&&(t.removeListener("accountsChanged",this.onAccountsChanged.bind(this)),t.removeListener("chainChanged",this.onChainChanged),t.removeListener("disconnect",this.onDisconnect.bind(this)),t.on("connect",this.onConnect.bind(this))))}})}function ma(e,t){function n(e){return"function"==typeof t?t(e):"string"!=typeof t||e[t]}const i=e.ethereum;return(null==i?void 0:i.providers)?i.providers.find((e=>n(e))):i&&n(i)?i:void 0}fa.type="injected";const ga=256;let wa,ya=ga;function va(e){const{multiInjectedProviderDiscovery:t=!0,storage:n=Qr({storage:"undefined"!=typeof window&&window.localStorage?window.localStorage:Xr}),syncConnectedChain:i=!0,ssr:r,...a}=e,o="undefined"!=typeof window&&t?Nr():void 0,s=Fr((()=>a.chains)),l=Fr((()=>[...a.connectors??[],...r?[]:(null==o?void 0:o.getProviders().map(u))??[]].map(c)));function c(e){var t;const i=(r=function(e=11){if(!wa||ya+e>2*ga){wa="",ya=0;for(let e=0;e<ga;e++)wa+=(256+256*Math.random()|0).toString(16).substring(1)}return wa.substring(ya,ya+++e)}(),new Gr(r));var r;const a={...e({emitter:i,chains:s.getState(),storage:n}),emitter:i,uid:i.uid};return i.on("connect",w),null==(t=a.setup)||t.call(a),a}function u(e){const{info:t}=e,n=e.provider;return fa({target:{...t,id:t.rdns,provider:n}})}const d=new Map;function p(){return{chainId:s.getState()[0].id,connections:new Map,current:void 0,status:"disconnected"}}let h;const f="0.0.0-canary-";h=ea.startsWith(f)?parseInt(ea.replace(f,"")):parseInt(ea.split(".")[0]??"0");const m=Fr(jr(n?Br(p,{migrate(e,t){if(t===h)return e;const n=p(),i=e&&"object"==typeof e&&"chainId"in e&&"number"==typeof e.chainId?e.chainId:n.chainId;return{...n,chainId:i}},name:"store",partialize:e=>({connections:{__type:"Map",value:Array.from(e.connections.entries()).map((([e,t])=>{const{id:n,name:i,type:r,uid:a}=t.connector,o={id:n,name:i,type:r,uid:a};return[e,{...t,connector:o}]}))},chainId:e.chainId,current:e.current}),skipHydration:r,storage:n,version:h}):p));function g(e){m.setState((t=>{const n=t.connections.get(e.uid);return n?{...t,connections:new Map(t.connections).set(e.uid,{accounts:e.accounts??n.accounts,chainId:e.chainId??n.chainId,connector:n.connector})}:t}))}function w(e){"connecting"!==m.getState().status&&"reconnecting"!==m.getState().status&&m.setState((t=>{const n=l.getState().find((t=>t.uid===e.uid));return n?{...t,connections:new Map(t.connections).set(e.uid,{accounts:e.accounts,chainId:e.chainId,connector:n}),current:e.uid,status:"connected"}:t}))}return i&&m.subscribe((({connections:e,current:t})=>{var n;return t?null==(n=e.get(t))?void 0:n.chainId:void 0}),(e=>{if(s.getState().some((t=>t.id===e)))return m.setState((t=>({...t,chainId:e??t.chainId})))})),null==o||o.subscribe((e=>{const t=new Map;for(const i of l.getState())t.set(i.id,!0);const n=[];for(const i of e){const e=c(u(i));t.has(e.id)||n.push(e)}l.setState((e=>[...e,...n]),!0)})),{get chains(){return s.getState()},get connectors(){return l.getState()},storage:n,getClient:function(e={}){const t=e.chainId??m.getState().chainId,n=s.getState().find((e=>e.id===t));if(e.chainId&&!n)throw new aa;{const e=d.get(m.getState().chainId);if(e&&!n)return e;if(!n)throw new aa}{const e=d.get(t);if(e)return e}let i;if(a.client)i=a.client({chain:n});else{const e=n.id,t=s.getState().map((e=>e.id)),r={},o=Object.entries(a);for(const[n,i]of o)if("chains"!==n&&"client"!==n&&"connectors"!==n&&"transports"!==n)if("object"==typeof i)if(e in i)r[n]=i[e];else{if(t.some((e=>e in i)))continue;r[n]=i}else r[n]=i;i=cr({...r,chain:n,batch:r.batch??{multicall:!0},transport:t=>a.transports[e]({...t,connectors:l})})}return d.set(t,i),i},get state(){return m.getState()},setState(e){let t;t="function"==typeof e?e(m.getState()):e;const n=p();"object"!=typeof t&&(t=n);Object.keys(n).some((e=>!(e in t)))&&(t=n),m.setState(t,!0)},subscribe:(e,t,n)=>m.subscribe(e,t,n?{...n,fireImmediately:n.emitImmediately}:void 0),_internal:{mipd:o,store:m,ssr:Boolean(r),syncConnectedChain:i,transports:a.transports,chains:{setState(e){const t="function"==typeof e?e(s.getState()):e;if(0!==t.length)return s.setState(t,!0)},subscribe:e=>s.subscribe(e)},connectors:{providerDetailToConnector:u,setup:c,setState:e=>l.setState("function"==typeof e?e(l.getState()):e,!0),subscribe:e=>l.subscribe(e)},events:{change:g,connect:w,disconnect:function e(t){m.setState((n=>{const i=n.connections.get(t.uid);if(i&&(i.connector.emitter.off("change",g),i.connector.emitter.off("disconnect",e),i.connector.emitter.on("connect",w)),n.connections.delete(t.uid),0===n.connections.size)return{...n,connections:new Map,current:void 0,status:"disconnected"};const r=n.connections.values().next().value;return{...n,connections:new Map(n.connections),current:r.connector.uid}}))}}}}}function ba(e,t,n){const i=e[t.name??n];return"function"==typeof i?i:n=>t(e,n)}async function xa(e,t){var n;let i;if(i="function"==typeof t.connector?e._internal.connectors.setup(t.connector):t.connector,i.uid===e.state.current)throw new oa;try{e.setState((e=>({...e,status:"connecting"}))),i.emitter.emit("message",{type:"connecting"});const r=await i.connect({chainId:t.chainId}),a=r.accounts;return i.emitter.off("connect",e._internal.events.connect),i.emitter.on("change",e._internal.events.change),i.emitter.on("disconnect",e._internal.events.disconnect),await(null==(n=e.storage)?void 0:n.setItem("recentConnectorId",i.id)),e.setState((e=>({...e,connections:new Map(e.connections).set(i.uid,{accounts:a,chainId:r.chainId,connector:i}),current:i.uid,status:"connected"}))),{accounts:a,chainId:r.chainId}}catch(r){throw e.setState((e=>({...e,status:e.current?"connected":"disconnected"}))),r}}async function Ca(e,t={}){let n;if(t.connector){const{connector:e}=t,[i,r]=await Promise.all([e.getAccounts(),e.getChainId()]);n={accounts:i,chainId:r,connector:e}}else n=e.state.connections.get(e.state.current);if(!n)throw new sa;const i=t.chainId??n.chainId,r=n.connector;if(r.getClient)return r.getClient({chainId:i});const a=He(t.account??n.accounts[0]),o=e.chains.find((e=>e.id===i)),s=await n.connector.getProvider({chainId:i});if(t.account&&!n.accounts.includes(a.address))throw new la({address:a.address,connector:r});return cr({account:a,chain:o,name:"Connector Client",transport:e=>function(e,t={}){const{key:n="custom",name:i="Custom Provider",retryDelay:r}=t;return({retryCount:a})=>pr({key:n,name:i,request:e.request.bind(e),retryCount:t.retryCount??a,retryDelay:r,type:"custom"})}(s)({...e,retryCount:0})})}function _a(e){return"number"==typeof e?e:"wei"===e?0:Math.abs(Xe[e])}function Ea(e){const t=e.state.current,n=e.state.connections.get(t),i=null==n?void 0:n.accounts,r=null==i?void 0:i[0],a=e.chains.find((e=>e.id===(null==n?void 0:n.chainId))),o=e.state.status;switch(o){case"connected":return{address:r,addresses:i,chain:a,chainId:null==n?void 0:n.chainId,connector:null==n?void 0:n.connector,isConnected:!0,isConnecting:!1,isDisconnected:!1,isReconnecting:!1,status:o};case"reconnecting":return{address:r,addresses:i,chain:a,chainId:null==n?void 0:n.chainId,connector:null==n?void 0:n.connector,isConnected:!!r,isConnecting:!1,isDisconnected:!1,isReconnecting:!0,status:o};case"connecting":return{address:r,addresses:i,chain:a,chainId:null==n?void 0:n.chainId,connector:null==n?void 0:n.connector,isConnected:!1,isConnecting:!0,isDisconnected:!1,isReconnecting:!1,status:o};case"disconnected":return{address:void 0,addresses:void 0,chain:void 0,chainId:void 0,connector:void 0,isConnected:!1,isConnecting:!1,isDisconnected:!0,isReconnecting:!1,status:o}}}function ka(e,t){const{chainId:n,...i}=t;return ba(e.getClient({chainId:n}),Ii,"readContract")(i)}async function Ta(e,t){const{allowFailure:n=!0,blockNumber:i,blockTag:r,...a}=t,o=t.contracts;try{const t=o.reduce(((t,n,i)=>{const r=n.chainId??e.state.chainId;return{...t,[r]:[...t[r]||[],{contract:n,index:i}]}}),{}),s=()=>Object.entries(t).map((([t,o])=>async function(e,t){const{allowFailure:n=!0,chainId:i,contracts:r,...a}=t;return ba(e.getClient({chainId:i}),Pr,"multicall")({allowFailure:n,contracts:r,...a})}(e,{...a,allowFailure:n,blockNumber:i,blockTag:r,chainId:parseInt(t),contracts:o.map((({contract:e})=>e))}))),l=(await Promise.all(s())).flat(),c=Object.values(t).flatMap((e=>e.map((({index:e})=>e))));return l.reduce(((e,t,n)=>(e&&(e[c[n]]=t),e)),[])}catch(s){if(s instanceof pi)throw s;const t=()=>o.map((t=>ka(e,{...t,blockNumber:i,blockTag:r})));return n?(await Promise.allSettled(t())).map((e=>"fulfilled"===e.status?{result:e.value,status:"success"}:{error:e.reason,result:void 0,status:"failure"})):await Promise.all(t())}}async function Aa(e,t){const{balanceAddress:n,chainId:i,symbolType:r,tokenAddress:a,unit:o}=t,s={abi:[{type:"function",name:"balanceOf",stateMutability:"view",inputs:[{type:"address"}],outputs:[{type:"uint256"}]},{type:"function",name:"decimals",stateMutability:"view",inputs:[],outputs:[{type:"uint8"}]},{type:"function",name:"symbol",stateMutability:"view",inputs:[],outputs:[{type:r}]}],address:a},[l,c,u]=await Ta(e,{allowFailure:!1,contracts:[{...s,functionName:"balanceOf",args:[n],chainId:i},{...s,functionName:"decimals",chainId:i},{...s,functionName:"symbol",chainId:i}]});return{decimals:c,formatted:et(l??"0",_a(o??c)),symbol:u,value:l}}function $a(e,t){if(e===t)return!0;if(e&&t&&"object"==typeof e&&"object"==typeof t){if(e.constructor!==t.constructor)return!1;let n,i;if(Array.isArray(e)&&Array.isArray(t)){if(n=e.length,n!==t.length)return!1;for(i=n;0!=i--;)if(!$a(e[i],t[i]))return!1;return!0}if(e.valueOf!==Object.prototype.valueOf)return e.valueOf()===t.valueOf();if(e.toString!==Object.prototype.toString)return e.toString()===t.toString();const r=Object.keys(e);if(n=r.length,n!==Object.keys(t).length)return!1;for(i=n;0!=i--;)if(!Object.prototype.hasOwnProperty.call(t,r[i]))return!1;for(i=n;0!=i--;){const n=r[i];if(n&&!$a(e[n],t[n]))return!1}return!0}return e!=e&&t!=t}let Ia=!1;async function Pa(e,t){const{abi:n,chainId:i,connector:r,...a}=t;let o;if(t.account)o=t.account;else{o=(await Ca(e,{chainId:i,connector:r})).account}const s=e.getClient({chainId:i}),l=ba(s,Qi,"simulateContract"),{result:c,request:u}=await l({...a,abi:n,account:o});return{chainId:s.chain.id,result:c,request:{__mode:"prepared",...u,chainId:i}}}async function Sa(e,t){var n;const{chainId:i}=t,r=e.state.connections.get((null==(n=t.connector)?void 0:n.uid)??e.state.current);if(r){const e=r.connector;if(!e.switchChain)throw new da({connector:e});return await e.switchChain({chainId:i})}const a=e.chains.find((e=>e.id===i));if(!a)throw new aa;return e.setState((e=>({...e,chainId:i}))),a}function Ra(e,t){const{onChange:n}=t;return e.subscribe((()=>Ea(e)),n,{equalityFn(e,t){const{connector:n,...i}=e,{connector:r,...a}=t;return $a(i,a)&&(null==n?void 0:n.id)===(null==r?void 0:r.id)&&(null==n?void 0:n.uid)===(null==r?void 0:r.uid)}})}async function Oa(e,t){const{chainId:n,timeout:i=0,...r}=t,a=e.getClient({chainId:n}),o=ba(a,Rr,"waitForTransactionReceipt"),s=await o({...r,timeout:i});if("reverted"===s.status){const e=ba(a,$r,"getTransaction"),t=await e({hash:s.transactionHash}),n=ba(a,Ti,"call"),i=R(`0x${(await n({...t,gasPrice:"eip1559"!==t.type?t.gasPrice:void 0,maxFeePerGas:"eip1559"===t.type?t.maxFeePerGas:void 0,maxPriorityFeePerGas:"eip1559"===t.type?t.maxPriorityFeePerGas:void 0})).substring(138)}`);throw new Error(i)}return{...s,chainId:a.chain.id}}async function Na(e,t){const{account:n,chainId:i,connector:r,__mode:a,...o}=t;let s,l;if(s="object"==typeof n&&"local"===n.type?e.getClient({chainId:i}):await Ca(e,{account:n,chainId:i,connector:r}),"prepared"===a)l=o;else{const{request:t}=await Pa(e,{...o,account:n});l=t}const c=ba(s,rr,"writeContract");return await c({...l,...n?{account:n}:{},chain:i?{id:i}:null})}const Ma={contracts:{gasPriceOracle:{address:"0x420000000000000000000000000000000000000F"},l1Block:{address:"0x4200000000000000000000000000000000000015"},l2CrossDomainMessenger:{address:"0x4200000000000000000000000000000000000007"},l2Erc721Bridge:{address:"0x4200000000000000000000000000000000000014"},l2StandardBridge:{address:"0x4200000000000000000000000000000000000010"},l2ToL1MessagePasser:{address:"0x4200000000000000000000000000000000000016"}},formatters:{block:pn({format(e){var t;return{transactions:null==(t=e.transactions)?void 0:t.map((e=>{if("string"==typeof e)return e;const t=cn(e);return"0x7e"===t.typeHex&&(t.isSystemTx=e.isSystemTx,t.mint=e.mint?P(e.mint):void 0,t.sourceHash=e.sourceHash,t.type="deposit"),t})),stateRoot:e.stateRoot}}}),transaction:un({format(e){const t={};return"0x7e"===e.type&&(t.isSystemTx=e.isSystemTx,t.mint=e.mint?P(e.mint):void 0,t.sourceHash=e.sourceHash,t.type="deposit"),t}}),transactionReceipt:Er({format:e=>({l1GasPrice:e.l1GasPrice?P(e.l1GasPrice):null,l1GasUsed:e.l1GasUsed?P(e.l1GasUsed):null,l1Fee:e.l1Fee?P(e.l1Fee):null,l1FeeScalar:e.l1FeeScalar?Number(e.l1FeeScalar):null})})},serializers:{transaction:(e,t)=>function(e){return"deposit"===e.type||void 0!==e.sourceHash}(e)?function(e){!function(e){const{from:t,to:n}=e;if(t&&!Me(t))throw new ie({address:t});if(n&&!Me(n))throw new ie({address:n})}(e);const{sourceHash:t,data:n,from:i,gas:r,isSystemTx:a,mint:o,to:s,value:l}=e;return ne(["0x7e",vr([t,i,s??"0x",o?N(o):"0x",l?N(l):"0x",r?N(r):"0x",a?"0x1":"0x",n??"0x"])])}(e):Tr(e,t)}},ja=yr({id:42161,name:"Arbitrum One",nativeCurrency:{name:"Ether",symbol:"ETH",decimals:18},rpcUrls:{default:{http:["https://arb1.arbitrum.io/rpc"]}},blockExplorers:{default:{name:"Arbiscan",url:"https://arbiscan.io",apiUrl:"https://api.arbiscan.io/api"}},contracts:{multicall3:{address:"0xca11bde05977b3631167028862be2a173976ca11",blockCreated:7654707}}}),Ua=yr({id:43114,name:"Avalanche",nativeCurrency:{decimals:18,name:"Avalanche",symbol:"AVAX"},rpcUrls:{default:{http:["https://api.avax.network/ext/bc/C/rpc"]}},blockExplorers:{default:{name:"SnowScan",url:"https://snowscan.xyz",apiUrl:"https://api.snowscan.xyz/api"}},contracts:{multicall3:{address:"0xca11bde05977b3631167028862be2a173976ca11",blockCreated:11907934}}}),Da=yr({...Ma,id:8453,name:"Base",nativeCurrency:{name:"Ether",symbol:"ETH",decimals:18},rpcUrls:{default:{http:["https://mainnet.base.org"]}},blockExplorers:{default:{name:"Basescan",url:"https://basescan.org",apiUrl:"https://api.basescan.org/api"}},contracts:{...Ma.contracts,l2OutputOracle:{1:{address:"0x56315b90c40730925ec5485cf004d835058518A0"}},multicall3:{address:"0xca11bde05977b3631167028862be2a173976ca11",blockCreated:5022},portal:{1:{address:"0x49048044D57e1C92A77f79988d21Fa8fAF74E97e",blockCreated:17482143}},l1StandardBridge:{1:{address:"0x3154Cf16ccdb4C6d922629664174b904d80F2C35",blockCreated:17482143}}},sourceId:1}),Ba=yr({id:56,name:"BNB Smart Chain",nativeCurrency:{decimals:18,name:"BNB",symbol:"BNB"},rpcUrls:{default:{http:["https://rpc.ankr.com/bsc"]}},blockExplorers:{default:{name:"BscScan",url:"https://bscscan.com",apiUrl:"https://api.bscscan.com/api"}},contracts:{multicall3:{address:"0xca11bde05977b3631167028862be2a173976ca11",blockCreated:15921452}}}),La=yr({id:97,name:"Binance Smart Chain Testnet",nativeCurrency:{decimals:18,name:"BNB",symbol:"tBNB"},rpcUrls:{default:{http:["https://data-seed-prebsc-1-s1.bnbchain.org:8545"]}},blockExplorers:{default:{name:"BscScan",url:"https://testnet.bscscan.com",apiUrl:"https://testnet.bscscan.com/api"}},contracts:{multicall3:{address:"0xca11bde05977b3631167028862be2a173976ca11",blockCreated:17422483}},testnet:!0}),za=yr({id:2e3,name:"Dogechain",nativeCurrency:{decimals:18,name:"Dogechain",symbol:"DC"},rpcUrls:{default:{http:["https://rpc.dogechain.dog"]}},blockExplorers:{default:{name:"DogeChainExplorer",url:"https://explorer.dogechain.dog",apiUrl:"https://explorer.dogechain.dog/api"}}}),Fa=yr({id:59144,name:"Linea Mainnet",nativeCurrency:{name:"Linea Ether",symbol:"ETH",decimals:18},rpcUrls:{default:{http:["https://rpc.linea.build"],webSocket:["wss://rpc.linea.build"]}},blockExplorers:{default:{name:"Etherscan",url:"https://lineascan.build",apiUrl:"https://api.lineascan.build/api"}},contracts:{multicall3:{address:"0xcA11bde05977b3631167028862bE2a173976CA11",blockCreated:42}},testnet:!1}),Wa=yr({id:1,name:"Ethereum",nativeCurrency:{name:"Ether",symbol:"ETH",decimals:18},rpcUrls:{default:{http:["https://cloudflare-eth.com"]}},blockExplorers:{default:{name:"Etherscan",url:"https://etherscan.io",apiUrl:"https://api.etherscan.io/api"}},contracts:{ensRegistry:{address:"0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e"},ensUniversalResolver:{address:"0x8cab227b1162f03b8338331adaad7aadc83b895e",blockCreated:18958930},multicall3:{address:"0xca11bde05977b3631167028862be2a173976ca11",blockCreated:14353601}}}),Ha=yr({id:137,name:"Polygon",nativeCurrency:{name:"MATIC",symbol:"MATIC",decimals:18},rpcUrls:{default:{http:["https://polygon-rpc.com"]}},blockExplorers:{default:{name:"PolygonScan",url:"https://polygonscan.com",apiUrl:"https://api.polygonscan.com/api"}},contracts:{multicall3:{address:"0xca11bde05977b3631167028862be2a173976ca11",blockCreated:25770160}}}),Za=yr({id:1101,name:"Polygon zkEVM",nativeCurrency:{name:"Ether",symbol:"ETH",decimals:18},rpcUrls:{default:{http:["https://zkevm-rpc.com"]}},blockExplorers:{default:{name:"PolygonScan",url:"https://zkevm.polygonscan.com",apiUrl:"https://api-zkevm.polygonscan.com/api"}},contracts:{multicall3:{address:"0xca11bde05977b3631167028862be2a173976ca11",blockCreated:57746}}}),Va=yr({id:11155111,name:"Sepolia",nativeCurrency:{name:"Sepolia Ether",symbol:"SEP",decimals:18},rpcUrls:{default:{http:["https://rpc.sepolia.org"]}},blockExplorers:{default:{name:"Etherscan",url:"https://sepolia.etherscan.io",apiUrl:"https://api-sepolia.etherscan.io/api"}},contracts:{multicall3:{address:"0xca11bde05977b3631167028862be2a173976ca11",blockCreated:751532},ensRegistry:{address:"0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e"},ensUniversalResolver:{address:"0xBaBC7678D7A63104f1658c11D6AE9A21cdA09725",blockCreated:5043334}},testnet:!0}),Ga=Symbol(),qa=Object.getPrototypeOf,Ka=new WeakMap,Ya=e=>(e=>e&&(Ka.has(e)?Ka.get(e):qa(e)===Object.prototype||qa(e)===Array.prototype))(e)&&e[Ga]||null,Ja=(e,t=!0)=>{Ka.set(e,t)};var Qa={BASE_URL:"./",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const Xa=e=>"object"==typeof e&&null!==e,eo=new WeakMap,to=new WeakSet,[no]=((e=Object.is,t=((e,t)=>new Proxy(e,t)),n=(e=>Xa(e)&&!to.has(e)&&(Array.isArray(e)||!(Symbol.iterator in e))&&!(e instanceof WeakMap)&&!(e instanceof WeakSet)&&!(e instanceof Error)&&!(e instanceof Number)&&!(e instanceof Date)&&!(e instanceof String)&&!(e instanceof RegExp)&&!(e instanceof ArrayBuffer)),i=(e=>{switch(e.status){case"fulfilled":return e.value;case"rejected":throw e.reason;default:throw e}}),r=new WeakMap,a=((e,t,n=i)=>{const o=r.get(e);if((null==o?void 0:o[0])===t)return o[1];const s=Array.isArray(e)?[]:Object.create(Object.getPrototypeOf(e));return Ja(s,!0),r.set(e,[t,s]),Reflect.ownKeys(e).forEach((t=>{if(Object.getOwnPropertyDescriptor(s,t))return;const i=Reflect.get(e,t),r={value:i,enumerable:!0,configurable:!0};if(to.has(i))Ja(i,!1);else if(i instanceof Promise)delete r.value,r.get=()=>n(i);else if(eo.has(i)){const[e,t]=eo.get(i);r.value=a(e,t(),n)}Object.defineProperty(s,t,r)})),Object.preventExtensions(s)}),o=new WeakMap,s=[1,1],l=(i=>{if(!Xa(i))throw new Error("object required");const r=o.get(i);if(r)return r;let c=s[0];const u=new Set,d=(e,t=++s[0])=>{c!==t&&(c=t,u.forEach((n=>n(e,t))))};let p=s[1];const h=e=>(t,n)=>{const i=[...t];i[1]=[e,...i[1]],d(i,n)},f=new Map,m=e=>{var t;const n=f.get(e);n&&(f.delete(e),null==(t=n[1])||t.call(n))},g=Array.isArray(i)?[]:Object.create(Object.getPrototypeOf(i)),w=t(g,{deleteProperty(e,t){const n=Reflect.get(e,t);m(t);const i=Reflect.deleteProperty(e,t);return i&&d(["delete",[t],n]),i},set(t,i,r,a){const s=Reflect.has(t,i),c=Reflect.get(t,i,a);if(s&&(e(c,r)||o.has(r)&&e(c,o.get(r))))return!0;m(i),Xa(r)&&(r=Ya(r)||r);let p=r;if(r instanceof Promise)r.then((e=>{r.status="fulfilled",r.value=e,d(["resolve",[i],e])})).catch((e=>{r.status="rejected",r.reason=e,d(["reject",[i],e])}));else{!eo.has(r)&&n(r)&&(p=l(r));const e=!to.has(p)&&eo.get(p);e&&((e,t)=>{if("production"!==(Qa?"production":void 0)&&f.has(e))throw new Error("prop listener already exists");if(u.size){const n=t[3](h(e));f.set(e,[t,n])}else f.set(e,[t])})(i,e)}return Reflect.set(t,i,p,a),d(["set",[i],r,c]),!0}});o.set(i,w);const y=[g,(e=++s[1])=>(p===e||u.size||(p=e,f.forEach((([t])=>{const n=t[1](e);n>c&&(c=n)}))),c),a,e=>{u.add(e),1===u.size&&f.forEach((([e,t],n)=>{if("production"!==(Qa?"production":void 0)&&t)throw new Error("remove already exists");const i=e[3](h(n));f.set(n,[e,i])}));return()=>{u.delete(e),0===u.size&&f.forEach((([e,t],n)=>{t&&(t(),f.set(n,[e]))}))}}];return eo.set(w,y),Reflect.ownKeys(i).forEach((e=>{const t=Object.getOwnPropertyDescriptor(i,e);"value"in t&&(w[e]=i[e],delete t.value,delete t.writable),Object.defineProperty(g,e,t)})),w}))=>[l,eo,to,e,t,n,i,r,a,o,s])();function io(e={}){return no(e)}function ro(e,t,n){const i=eo.get(e);let r;"production"===(Qa?"production":void 0)||i||console.warn("Please use proxy object");const a=[],o=i[3];let s=!1;const l=o((e=>{a.push(e),n?t(a.splice(0)):r||(r=Promise.resolve().then((()=>{r=void 0,s&&t(a.splice(0))})))}));return s=!0,()=>{s=!1,l()}}function ao(e,t){const n=eo.get(e);"production"===(Qa?"production":void 0)||n||console.warn("Please use proxy object");const[i,r,a]=n;return a(i,r(),t)}function oo(e){return to.add(e),e}function so(e,t,n,i){let r=e[t];return ro(e,(()=>{const i=e[t];Object.is(r,i)||n(r=i)}),i)}const lo="https://secure.walletconnect.com",co=[{label:"Coinbase",name:"coinbase",feeRange:"1-2%",url:""}],uo={FOUR_MINUTES_MS:24e4,TEN_SEC_MS:1e4,ONE_SEC_MS:1e3,SECURE_SITE:lo,SECURE_SITE_DASHBOARD:`${lo}/dashboard`,SECURE_SITE_FAVICON:`${lo}/images/favicon.png`,RESTRICTED_TIMEZONES:["ASIA/SHANGHAI","ASIA/URUMQI","ASIA/CHONGQING","ASIA/HARBIN","ASIA/KASHGAR","ASIA/MACAU","ASIA/HONG_KONG","ASIA/MACAO","ASIA/BEIJING","ASIA/HARBIN"],CONNECTOR_RDNS_MAP:{coinbaseWallet:"com.coinbase.wallet"},WC_COINBASE_PAY_SDK_CHAINS:["ethereum","arbitrum","polygon","avalanche-c-chain","optimism","celo","base"],WC_COINBASE_PAY_SDK_FALLBACK_CHAIN:"ethereum",WC_COINBASE_PAY_SDK_CHAIN_NAME_MAP:{Ethereum:"ethereum","Arbitrum One":"arbitrum",Polygon:"polygon",Avalanche:"avalanche-c-chain","OP Mainnet":"optimism",Celo:"celo",Base:"base"},WC_COINBASE_ONRAMP_APP_ID:"bf18c88d-495a-463b-b249-0b9d3656cf5e"},po={isMobile:()=>"undefined"!=typeof window&&Boolean(window.matchMedia("(pointer:coarse)").matches||/Android|webOS|iPhone|iPad|iPod|BlackBerry|Opera Mini/u.test(navigator.userAgent)),isAndroid(){const e=window.navigator.userAgent.toLowerCase();return po.isMobile()&&e.includes("android")},isIos(){const e=window.navigator.userAgent.toLowerCase();return po.isMobile()&&(e.includes("iphone")||e.includes("ipad"))},isClient:()=>"undefined"!=typeof window,isPairingExpired:e=>!e||e-Date.now()<=uo.TEN_SEC_MS,isAllowedRetry:e=>Date.now()-e>=uo.ONE_SEC_MS,copyToClopboard(e){navigator.clipboard.writeText(e)},getPairingExpiry:()=>Date.now()+uo.FOUR_MINUTES_MS,getPlainAddress:e=>e.split(":")[2],wait:async e=>new Promise((t=>{setTimeout(t,e)})),debounce(e,t=500){let n;return(...i)=>{n&&clearTimeout(n),n=setTimeout((function(){e(...i)}),t)}},isHttpUrl:e=>e.startsWith("http://")||e.startsWith("https://"),formatNativeUrl(e,t){if(po.isHttpUrl(e))return this.formatUniversalUrl(e,t);let n=e;n.includes("://")||(n=e.replaceAll("/","").replaceAll(":",""),n=`${n}://`),n.endsWith("/")||(n=`${n}/`);return{redirect:`${n}wc?uri=${encodeURIComponent(t)}`,href:n}},formatUniversalUrl(e,t){if(!po.isHttpUrl(e))return this.formatNativeUrl(e,t);let n=e;n.endsWith("/")||(n=`${n}/`);return{redirect:`${n}wc?uri=${encodeURIComponent(t)}`,href:n}},openHref(e,t,n){window.open(e,t,n||"noreferrer noopener")},async preloadImage(e){const t=new Promise(((t,n)=>{const i=new Image;i.onload=t,i.onerror=n,i.crossOrigin="anonymous",i.src=e}));return Promise.race([t,po.wait(2e3)])},formatBalance(e,t){var n;let i;if("0"===e)i="0.000";else if("string"==typeof e){const t=Number(e);t&&(i=null==(n=t.toString().match(/^-?\d+(?:\.\d{0,3})?/u))?void 0:n[0])}return i?`${i} ${t??""}`:`0.000 ${t??""}`},formatBalance2(e,t){var n;let i;if("0"===e)i="0";else if("string"==typeof e){const t=Number(e);t&&(i=null==(n=t.toString().match(/^-?\d+(?:\.\d{0,3})?/u))?void 0:n[0])}return{value:i??"0",rest:"0"===i?"000":"",symbol:t}},isRestrictedRegion(){try{const{timeZone:e}=(new Intl.DateTimeFormat).resolvedOptions(),t=e.toUpperCase();return uo.RESTRICTED_TIMEZONES.includes(t)}catch{return!1}},getApiUrl:()=>po.isRestrictedRegion()?"https://api.web3modal.org":"https://api.web3modal.com",getBlockchainApiUrl:()=>po.isRestrictedRegion()?"https://rpc.walletconnect.org":"https://rpc.walletconnect.com",getAnalyticsUrl:()=>po.isRestrictedRegion()?"https://pulse.walletconnect.org":"https://pulse.walletconnect.com",getUUID:()=>(null==crypto?void 0:crypto.randomUUID)?crypto.randomUUID():"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/gu,(e=>{const t=16*Math.random()|0;return("x"===e?t:3&t|8).toString(16)})),parseError(e){var t,n;return"string"==typeof e?e:"string"==typeof(null==(n=null==(t=null==e?void 0:e.issues)?void 0:t[0])?void 0:n.message)?e.issues[0].message:e instanceof Error?e.message:"Unknown error"},sortRequestedNetworks(e,t=[]){const n={};return t&&e&&(e.forEach(((e,t)=>{n[e]=t})),t.sort(((e,t)=>{const i=n[e.id],r=n[t.id];return void 0!==i&&void 0!==r?i-r:void 0!==i?-1:void 0!==r?1:0}))),t}},ho=io({isConnected:!1}),fo={state:ho,subscribe:e=>ro(ho,(()=>e(ho))),subscribeKey:(e,t)=>so(ho,e,t),setIsConnected(e){ho.isConnected=e},setCaipAddress(e){ho.caipAddress=e,ho.address=e?po.getPlainAddress(e):void 0},setBalance(e,t){ho.balance=e,ho.balanceSymbol=t},setProfileName(e){ho.profileName=e},setProfileImage(e){ho.profileImage=e},setAddressExplorerUrl(e){ho.addressExplorerUrl=e},setSmartAccountDeployed(e){ho.smartAccountDeployed=e},resetAccount(){ho.isConnected=!1,ho.caipAddress=void 0,ho.address=void 0,ho.balance=void 0,ho.balanceSymbol=void 0,ho.profileName=void 0,ho.profileImage=void 0,ho.addressExplorerUrl=void 0,ho.smartAccountDeployed=void 0}};class mo{constructor({baseUrl:e}){this.baseUrl=e}async get({headers:e,signal:t,...n}){const i=this.createUrl(n);return(await fetch(i,{method:"GET",headers:e,signal:t,cache:"no-cache"})).json()}async getBlob({headers:e,signal:t,...n}){const i=this.createUrl(n);return(await fetch(i,{method:"GET",headers:e,signal:t})).blob()}async post({body:e,headers:t,signal:n,...i}){const r=this.createUrl(i);return(await fetch(r,{method:"POST",headers:t,body:e?JSON.stringify(e):void 0,signal:n})).json()}async put({body:e,headers:t,signal:n,...i}){const r=this.createUrl(i);return(await fetch(r,{method:"PUT",headers:t,body:e?JSON.stringify(e):void 0,signal:n})).json()}async delete({body:e,headers:t,signal:n,...i}){const r=this.createUrl(i);return(await fetch(r,{method:"DELETE",headers:t,body:e?JSON.stringify(e):void 0,signal:n})).json()}createUrl({path:e,params:t}){const n=new URL(e,this.baseUrl);return t&&Object.entries(t).forEach((([e,t])=>{t&&n.searchParams.append(e,t)})),n}}const go="WALLETCONNECT_DEEPLINK_CHOICE",wo="@w3m/recent",yo="@w3m/connected_wallet_image_url",vo="@w3m/connected_connector",bo={setWalletConnectDeepLink({href:e,name:t}){try{localStorage.setItem(go,JSON.stringify({href:e,name:t}))}catch{console.info("Unable to set WalletConnect deep link")}},getWalletConnectDeepLink(){try{const e=localStorage.getItem(go);if(e)return JSON.parse(e)}catch{console.info("Unable to get WalletConnect deep link")}},deleteWalletConnectDeepLink(){try{localStorage.removeItem(go)}catch{console.info("Unable to delete WalletConnect deep link")}},setWeb3ModalRecent(e){try{const t=bo.getRecentWallets();t.find((t=>t.id===e.id))||(t.unshift(e),t.length>2&&t.pop(),localStorage.setItem(wo,JSON.stringify(t)))}catch{console.info("Unable to set Web3Modal recent")}},getRecentWallets(){try{const e=localStorage.getItem(wo);return e?JSON.parse(e):[]}catch{console.info("Unable to get Web3Modal recent")}return[]},setConnectedWalletImageUrl(e){try{localStorage.setItem(yo,e)}catch{console.info("Unable to set Connected Wallet Image Url")}},getConnectedWalletImageUrl(){try{return localStorage.getItem(yo)}catch{console.info("Unable to set Connected Wallet Image Url")}},setConnectedConnector(e){try{localStorage.setItem(vo,e)}catch{console.info("Unable to set Connected Connector")}},getConnectedConnector(){try{return localStorage.getItem(vo)}catch{console.info("Unable to get Connected Connector")}}},xo=io({walletImages:{},networkImages:{},connectorImages:{},tokenImages:{},currencyImages:{}}),Co={state:xo,subscribeNetworkImages:e=>ro(xo.networkImages,(()=>e(xo.networkImages))),subscribeKey:(e,t)=>so(xo,e,t),subscribe:e=>ro(xo,(()=>e(xo))),setWalletImage(e,t){xo.walletImages[e]=t},setNetworkImage(e,t){xo.networkImages[e]=t},setConnectorImage(e,t){xo.connectorImages[e]=t},setTokenImage(e,t){xo.tokenImages[e]=t},setCurrencyImage(e,t){xo.currencyImages[e]=t}},_o=io({projectId:"",sdkType:"w3m",sdkVersion:"html-wagmi-undefined"}),Eo={state:_o,subscribeKey:(e,t)=>so(_o,e,t),setProjectId(e){_o.projectId=e},setAllWallets(e){_o.allWallets=e},setIncludeWalletIds(e){_o.includeWalletIds=e},setExcludeWalletIds(e){_o.excludeWalletIds=e},setFeaturedWalletIds(e){_o.featuredWalletIds=e},setTokens(e){_o.tokens=e},setTermsConditionsUrl(e){_o.termsConditionsUrl=e},setPrivacyPolicyUrl(e){_o.privacyPolicyUrl=e},setCustomWallets(e){_o.customWallets=e},setIsSiweEnabled(e){_o.isSiweEnabled=e},setEnableAnalytics(e){_o.enableAnalytics=e},setSdkVersion(e){_o.sdkVersion=e},setMetadata(e){_o.metadata=e},setOnrampEnabled(e){_o.enableOnramp=e},setWalletFeaturesEnabled(e){_o.enableWalletFeatures=e}},ko=io({themeMode:"dark",themeVariables:{}}),To={state:ko,subscribe:e=>ro(ko,(()=>e(ko))),setThemeMode(e){ko.themeMode=e;try{const e=$o.getEmailConnector();e&&e.provider.syncTheme({themeMode:To.getSnapshot().themeMode})}catch{console.info("Unable to sync theme to email connector")}},setThemeVariables(e){ko.themeVariables={...ko.themeVariables,...e};try{const e=$o.getEmailConnector();e&&e.provider.syncTheme({themeVariables:To.getSnapshot().themeVariables})}catch{console.info("Unable to sync theme to email connector")}},getSnapshot:()=>ao(ko)},Ao=io({connectors:[]}),$o={state:Ao,subscribeKey:(e,t)=>so(Ao,e,t),setConnectors(e){Ao.connectors=e.map((e=>oo(e)))},addConnector(e){var t,n;if(Ao.connectors.push(oo(e)),"w3mEmail"===e.id){const i=e,r=ao(Eo.state);null==(n=null==(t=null==i?void 0:i.provider)?void 0:t.syncDappData)||n.call(t,{metadata:r.metadata,sdkVersion:r.sdkVersion,projectId:r.projectId}),i.provider.syncTheme({themeMode:To.getSnapshot().themeMode,themeVariables:To.getSnapshot().themeVariables})}},getEmailConnector:()=>Ao.connectors.find((e=>"EMAIL"===e.type)),getAnnouncedConnectorRdns:()=>Ao.connectors.filter((e=>"ANNOUNCED"===e.type)).map((e=>{var t;return null==(t=e.info)?void 0:t.rdns})),getConnectors:()=>Ao.connectors},Io=io({open:!1,selectedNetworkId:void 0}),Po={state:Io,subscribe:e=>ro(Io,(()=>e(Io))),set(e){Object.assign(Io,{...Io,...e})}},So=new mo({baseUrl:po.getAnalyticsUrl()}),Ro=["MODAL_CREATED"],Oo=io({timestamp:Date.now(),data:{type:"track",event:"MODAL_CREATED"}}),No={state:Oo,subscribe:e=>ro(Oo,(()=>e(Oo))),_getApiHeaders(){const{projectId:e,sdkType:t,sdkVersion:n}=Eo.state;return{"x-project-id":e,"x-sdk-type":t,"x-sdk-version":n}},async _sendAnalyticsEvent(e){try{if(Ro.includes(e.data.event)||"undefined"==typeof window)return;await So.post({path:"/e",headers:No._getApiHeaders(),body:{eventId:po.getUUID(),url:window.location.href,domain:window.location.hostname,timestamp:e.timestamp,props:e.data}})}catch{}},sendEvent(e){Oo.timestamp=Date.now(),Oo.data=e,Eo.state.enableAnalytics&&No._sendAnalyticsEvent(Oo)}},Mo=io({supportsAllNetworks:!0,isDefaultCaipNetwork:!1}),jo={state:Mo,subscribeKey:(e,t)=>so(Mo,e,t),_getClient(){if(!Mo._client)throw new Error("NetworkController client not set");return Mo._client},setClient(e){Mo._client=oo(e)},setCaipNetwork(e){Mo.caipNetwork=e,Po.set({selectedNetworkId:null==e?void 0:e.id}),this.state.allowUnsupportedChain||this.checkIfSupportedNetwork()},setDefaultCaipNetwork(e){Mo.caipNetwork=e,Po.set({selectedNetworkId:null==e?void 0:e.id}),Mo.isDefaultCaipNetwork=!0},setRequestedCaipNetworks(e){Mo.requestedCaipNetworks=e},setAllowUnsupportedChain(e){Mo.allowUnsupportedChain=e},getRequestedCaipNetworks(){const{approvedCaipNetworkIds:e,requestedCaipNetworks:t}=Mo,n=e,i=t;return po.sortRequestedNetworks(n,i)},async getApprovedCaipNetworksData(){const e=await this._getClient().getApprovedCaipNetworksData();Mo.supportsAllNetworks=e.supportsAllNetworks,Mo.approvedCaipNetworkIds=e.approvedCaipNetworkIds},async switchActiveNetwork(e){await this._getClient().switchCaipNetwork(e),Mo.caipNetwork=e,e&&No.sendEvent({type:"track",event:"SWITCH_NETWORK",properties:{network:e.id}})},checkIfSupportedNetwork(){var e;Mo.isUnsupportedChain=!(null==(e=Mo.requestedCaipNetworks)?void 0:e.some((e=>{var t;return e.id===(null==(t=Mo.caipNetwork)?void 0:t.id)}))),Mo.isUnsupportedChain&&this.showUnsupportedChainUI()},resetNetwork(){Mo.isDefaultCaipNetwork||(Mo.caipNetwork=void 0),Mo.approvedCaipNetworkIds=void 0,Mo.supportsAllNetworks=!0},showUnsupportedChainUI(){setTimeout((()=>{Wo.open({view:"UnsupportedChain"})}),300)}},Uo=new mo({baseUrl:po.getApiUrl()}),Do=io({page:1,count:0,featured:[],recommended:[],wallets:[],search:[],isAnalyticsEnabled:!1}),Bo={state:Do,subscribeKey:(e,t)=>so(Do,e,t),_getApiHeaders(){const{projectId:e,sdkType:t,sdkVersion:n}=Eo.state;return{"x-project-id":e,"x-sdk-type":t,"x-sdk-version":n}},async _fetchWalletImage(e){const t=`${Uo.baseUrl}/getWalletImage/${e}`,n=await Uo.getBlob({path:t,headers:Bo._getApiHeaders()});Co.setWalletImage(e,URL.createObjectURL(n))},async _fetchNetworkImage(e){const t=`${Uo.baseUrl}/public/getAssetImage/${e}`,n=await Uo.getBlob({path:t,headers:Bo._getApiHeaders()});Co.setNetworkImage(e,URL.createObjectURL(n))},async _fetchConnectorImage(e){const t=`${Uo.baseUrl}/public/getAssetImage/${e}`,n=await Uo.getBlob({path:t,headers:Bo._getApiHeaders()});Co.setConnectorImage(e,URL.createObjectURL(n))},async _fetchCurrencyImage(e){const t=`${Uo.baseUrl}/public/getCurrencyImage/${e}`,n=await Uo.getBlob({path:t,headers:Bo._getApiHeaders()});Co.setCurrencyImage(e,URL.createObjectURL(n))},async _fetchTokenImage(e){const t=`${Uo.baseUrl}/public/getTokenImage/${e}`,n=await Uo.getBlob({path:t,headers:Bo._getApiHeaders()});Co.setTokenImage(e,URL.createObjectURL(n))},async fetchNetworkImages(){const{requestedCaipNetworks:e}=jo.state,t=null==e?void 0:e.map((({imageId:e})=>e)).filter(Boolean);t&&await Promise.allSettled(t.map((e=>Bo._fetchNetworkImage(e))))},async fetchConnectorImages(){const{connectors:e}=$o.state,t=e.map((({imageId:e})=>e)).filter(Boolean);await Promise.allSettled(t.map((e=>Bo._fetchConnectorImage(e))))},async fetchCurrencyImages(e=[]){await Promise.allSettled(e.map((e=>Bo._fetchCurrencyImage(e))))},async fetchTokenImages(e=[]){await Promise.allSettled(e.map((e=>Bo._fetchTokenImage(e))))},async fetchFeaturedWallets(){const{featuredWalletIds:e}=Eo.state;if(null==e?void 0:e.length){const{data:t}=await Uo.get({path:"/getWallets",headers:Bo._getApiHeaders(),params:{page:"1",entries:(null==e?void 0:e.length)?String(e.length):"4",include:null==e?void 0:e.join(",")}});t.sort(((t,n)=>e.indexOf(t.id)-e.indexOf(n.id)));const n=t.map((e=>e.image_id)).filter(Boolean);await Promise.allSettled(n.map((e=>Bo._fetchWalletImage(e)))),Do.featured=t}},async fetchRecommendedWallets(){const{includeWalletIds:e,excludeWalletIds:t,featuredWalletIds:n}=Eo.state,i=[...t??[],...n??[]].filter(Boolean),{data:r,count:a}=await Uo.get({path:"/getWallets",headers:Bo._getApiHeaders(),params:{page:"1",entries:"4",include:null==e?void 0:e.join(","),exclude:null==i?void 0:i.join(",")}}),o=bo.getRecentWallets(),s=r.map((e=>e.image_id)).filter(Boolean),l=o.map((e=>e.image_id)).filter(Boolean);await Promise.allSettled([...s,...l].map((e=>Bo._fetchWalletImage(e)))),Do.recommended=r,Do.count=a??0},async fetchWallets({page:e}){const{includeWalletIds:t,excludeWalletIds:n,featuredWalletIds:i}=Eo.state,r=[...Do.recommended.map((({id:e})=>e)),...n??[],...i??[]].filter(Boolean),{data:a,count:o}=await Uo.get({path:"/getWallets",headers:Bo._getApiHeaders(),params:{page:String(e),entries:"40",include:null==t?void 0:t.join(","),exclude:r.join(",")}}),s=a.map((e=>e.image_id)).filter(Boolean);await Promise.allSettled([...s.map((e=>Bo._fetchWalletImage(e))),po.wait(300)]),Do.wallets=[...Do.wallets,...a],Do.count=o>Do.count?o:Do.count,Do.page=e},async searchWallet({search:e}){const{includeWalletIds:t,excludeWalletIds:n}=Eo.state;Do.search=[];const{data:i}=await Uo.get({path:"/getWallets",headers:Bo._getApiHeaders(),params:{page:"1",entries:"100",search:e,include:null==t?void 0:t.join(","),exclude:null==n?void 0:n.join(",")}}),r=i.map((e=>e.image_id)).filter(Boolean);await Promise.allSettled([...r.map((e=>Bo._fetchWalletImage(e))),po.wait(300)]),Do.search=i},prefetch(){const e=[Bo.fetchFeaturedWallets(),Bo.fetchRecommendedWallets(),Bo.fetchNetworkImages(),Bo.fetchConnectorImages()];void 0===Eo.state.enableAnalytics&&e.push(Bo.fetchAnalyticsConfig()),Do.prefetchPromise=Promise.race([Promise.allSettled(e),po.wait(3e3)])},async fetchAnalyticsConfig(){const{isAnalyticsEnabled:e}=await Uo.get({path:"/getAnalyticsConfig",headers:Bo._getApiHeaders()});Eo.setEnableAnalytics(e)}},Lo=io({view:"Connect",history:["Connect"]}),zo={state:Lo,subscribeKey:(e,t)=>so(Lo,e,t),push(e,t){e!==Lo.view&&(Lo.view=e,Lo.history.push(e),Lo.data=t)},reset(e){Lo.view=e,Lo.history=[e]},replace(e,t){Lo.history.length>1&&Lo.history.at(-1)!==e&&(Lo.view=e,Lo.history[Lo.history.length-1]=e,Lo.data=t)},goBack(){if(Lo.history.length>1){Lo.history.pop();const[e]=Lo.history.slice(-1);e&&(Lo.view=e)}},goBackToIndex(e){if(Lo.history.length>1){Lo.history=Lo.history.slice(0,e+1);const[t]=Lo.history.slice(-1);t&&(Lo.view=t)}}},Fo=io({loading:!1,open:!1}),Wo={state:Fo,subscribe:e=>ro(Fo,(()=>e(Fo))),subscribeKey:(e,t)=>so(Fo,e,t),async open(e){await Bo.state.prefetchPromise;const t=fo.state.isConnected;(null==e?void 0:e.view)?zo.reset(e.view):t?zo.reset("Account"):zo.reset("Connect"),Fo.open=!0,Po.set({open:!0}),No.sendEvent({type:"track",event:"MODAL_OPEN",properties:{connected:t}})},close(){const e=fo.state.isConnected;Fo.open=!1,Po.set({open:!1}),No.sendEvent({type:"track",event:"MODAL_CLOSE",properties:{connected:e}})},setLoading(e){Fo.loading=e}},Ho={purchaseCurrencies:[{id:"2b92315d-eab7-5bef-84fa-089a131333f5",name:"USD Coin",symbol:"USDC",networks:[{name:"ethereum-mainnet",display_name:"Ethereum",chain_id:"1",contract_address:"0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48"},{name:"polygon-mainnet",display_name:"Polygon",chain_id:"137",contract_address:"0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174"}]},{id:"2b92315d-eab7-5bef-84fa-089a131333f5",name:"Ether",symbol:"ETH",networks:[{name:"ethereum-mainnet",display_name:"Ethereum",chain_id:"1",contract_address:"0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48"},{name:"polygon-mainnet",display_name:"Polygon",chain_id:"137",contract_address:"0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174"}]}],paymentCurrencies:[{id:"USD",payment_method_limits:[{id:"card",min:"10.00",max:"7500.00"},{id:"ach_bank_account",min:"10.00",max:"25000.00"}]},{id:"EUR",payment_method_limits:[{id:"card",min:"10.00",max:"7500.00"},{id:"ach_bank_account",min:"10.00",max:"25000.00"}]}]},Zo=new mo({baseUrl:po.getBlockchainApiUrl()}),Vo={fetchIdentity:({caipChainId:e,address:t})=>Zo.get({path:`/v1/identity/${t}`,params:{chainId:e,projectId:Eo.state.projectId}}),fetchTransactions({account:e,projectId:t,cursor:n,onramp:i,signal:r}){const a=n?{cursor:n}:{};return Zo.get({path:`/v1/account/${e}/history?projectId=${t}${i?`&onramp=${i}`:""}`,params:a,signal:r})},generateOnRampURL:async({destinationWallets:e,partnerUserId:t,defaultNetwork:n,purchaseAmount:i,paymentAmount:r})=>(await Zo.post({path:`/v1/generators/onrampurl?projectId=${Eo.state.projectId}`,body:{destinationWallets:e,defaultNetwork:n,partnerUserId:t,defaultExperience:"buy",presetCryptoAmount:i,presetFiatAmount:r}})).url,async getOnrampOptions(){try{return await Zo.get({path:`/v1/onramp/options?projectId=${Eo.state.projectId}`})}catch(e){return Ho}},async getOnrampQuote({purchaseCurrency:e,paymentCurrency:t,amount:n,network:i}){try{return await Zo.post({path:`/v1/onramp/quote?projectId=${Eo.state.projectId}`,body:{purchaseCurrency:e,paymentCurrency:t,amount:n,network:i}})}catch(r){return{coinbaseFee:{amount:n,currency:t.id},networkFee:{amount:n,currency:t.id},paymentSubtotal:{amount:n,currency:t.id},paymentTotal:{amount:n,currency:t.id},purchaseAmount:{amount:n,currency:t.id},quoteId:"mocked-quote-id"}}}},Go={id:"2b92315d-eab7-5bef-84fa-089a131333f5",name:"USD Coin",symbol:"USDC",networks:[{name:"ethereum-mainnet",display_name:"Ethereum",chain_id:"1",contract_address:"0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48"},{name:"polygon-mainnet",display_name:"Polygon",chain_id:"137",contract_address:"0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174"}]},qo={id:"USD",payment_method_limits:[{id:"card",min:"10.00",max:"7500.00"},{id:"ach_bank_account",min:"10.00",max:"25000.00"}]},Ko=io({providers:co,selectedProvider:null,error:null,purchaseCurrency:Go,paymentCurrency:qo,purchaseCurrencies:[Go],paymentCurrencies:[],quotesLoading:!1}),Yo={state:Ko,subscribe:e=>ro(Ko,(()=>e(Ko))),subscribeKey:(e,t)=>so(Ko,e,t),setSelectedProvider(e){Ko.selectedProvider=e},setPurchaseCurrency(e){Ko.purchaseCurrency=e},setPaymentCurrency(e){Ko.paymentCurrency=e},setPurchaseAmount(e){this.state.purchaseAmount=e},setPaymentAmount(e){this.state.paymentAmount=e},async getAvailableCurrencies(){const e=await Vo.getOnrampOptions();Ko.purchaseCurrencies=e.purchaseCurrencies,Ko.paymentCurrencies=e.paymentCurrencies,Ko.paymentCurrency=e.paymentCurrencies[0]||qo,Ko.purchaseCurrency=e.purchaseCurrencies[0]||Go,await Bo.fetchCurrencyImages(e.paymentCurrencies.map((e=>e.id))),await Bo.fetchTokenImages(e.purchaseCurrencies.map((e=>e.symbol)))},async getQuote(){var e,t;Ko.quotesLoading=!0;try{const n=await Vo.getOnrampQuote({purchaseCurrency:Ko.purchaseCurrency,paymentCurrency:Ko.paymentCurrency,amount:(null==(e=Ko.paymentAmount)?void 0:e.toString())||"0",network:null==(t=Ko.purchaseCurrency)?void 0:t.symbol});return Ko.quotesLoading=!1,Ko.purchaseAmount=Number(n.purchaseAmount.amount),n}catch(n){return Ko.error=n.message,Ko.quotesLoading=!1,null}finally{Ko.quotesLoading=!1}},resetState(){Ko.providers=co,Ko.selectedProvider=null,Ko.error=null,Ko.purchaseCurrency=Go,Ko.paymentCurrency=qo,Ko.purchaseCurrencies=[Go],Ko.paymentCurrencies=[],Ko.paymentAmount=void 0,Ko.purchaseAmount=void 0,Ko.quotesLoading=!1}},Jo=io({message:"",variant:"success",open:!1}),Qo={state:Jo,subscribeKey:(e,t)=>so(Jo,e,t),showSuccess(e){Jo.message=e,Jo.variant="success",Jo.open=!0},showError(e){const t=po.parseError(e);Jo.message=t,Jo.variant="error",Jo.open=!0},hide(){Jo.open=!1}},Xo=io({transactions:[],coinbaseTransactions:{},transactionsByYear:{},loading:!1,empty:!1,next:void 0}),es={state:Xo,subscribe:e=>ro(Xo,(()=>e(Xo))),async fetchTransactions(e,t){const{projectId:n}=Eo.state;if(!n||!e)throw new Error("Transactions can't be fetched without a projectId and an accountAddress");Xo.loading=!0;try{const i=await Vo.fetchTransactions({account:e,projectId:n,cursor:Xo.next,onramp:t}),r=this.filterSpamTransactions(i.data),a=[...Xo.transactions,...r];Xo.loading=!1,"coinbase"===t?Xo.coinbaseTransactions=this.groupTransactionsByYearAndMonth(Xo.coinbaseTransactions,i.data):(Xo.transactions=a,Xo.transactionsByYear=this.groupTransactionsByYearAndMonth(Xo.transactionsByYear,r)),Xo.empty=0===a.length,Xo.next=i.next?i.next:void 0}catch(i){No.sendEvent({type:"track",event:"ERROR_FETCH_TRANSACTIONS",properties:{address:e,projectId:n,cursor:Xo.next}}),Qo.showError("Failed to fetch transactions"),Xo.loading=!1,Xo.empty=!0}},groupTransactionsByYearAndMonth(e={},t=[]){const n=e;return t.forEach((e=>{const t=new Date(e.metadata.minedAt).getFullYear(),i=new Date(e.metadata.minedAt).getMonth(),r=n[t]??{},a=(r[i]??[]).filter((t=>t.id!==e.id));n[t]={...r,[i]:[...a,e].sort(((e,t)=>new Date(t.metadata.minedAt).getTime()-new Date(e.metadata.minedAt).getTime()))}})),n},filterSpamTransactions:e=>e.filter((e=>!e.transfers.every((e=>{var t;return!0===(null==(t=e.nft_info)?void 0:t.flags.is_spam)})))),resetTransactions(){Xo.transactions=[],Xo.transactionsByYear={},Xo.loading=!1,Xo.empty=!1,Xo.next=void 0}},ts=io({wcError:!1,buffering:!1}),ns={state:ts,subscribeKey:(e,t)=>so(ts,e,t),_getClient(){if(!ts._client)throw new Error("ConnectionController client not set");return ts._client},setClient(e){ts._client=oo(e)},connectWalletConnect(){ts.wcPromise=this._getClient().connectWalletConnect((e=>{ts.wcUri=e,ts.wcPairingExpiry=po.getPairingExpiry()})),bo.setConnectedConnector("WALLET_CONNECT")},async connectExternal(e){var t,n;await(null==(n=(t=this._getClient()).connectExternal)?void 0:n.call(t,e)),bo.setConnectedConnector(e.type)},async signMessage(e){return this._getClient().signMessage(e)},checkInstalled(e){var t,n;return null==(n=(t=this._getClient()).checkInstalled)?void 0:n.call(t,e)},resetWcConnection(){ts.wcUri=void 0,ts.wcPairingExpiry=void 0,ts.wcPromise=void 0,ts.wcLinking=void 0,ts.recentWallet=void 0,es.resetTransactions(),bo.deleteWalletConnectDeepLink()},setWcLinking(e){ts.wcLinking=e},setWcError(e){ts.wcError=e,ts.buffering=!1},setRecentWallet(e){ts.recentWallet=e},setBuffering(e){ts.buffering=e},async disconnect(){await this._getClient().disconnect(),this.resetWcConnection()}},is={getWalletImage:e=>(null==e?void 0:e.image_url)?null==e?void 0:e.image_url:(null==e?void 0:e.image_id)?Co.state.walletImages[e.image_id]:void 0,getNetworkImage:e=>(null==e?void 0:e.imageUrl)?null==e?void 0:e.imageUrl:(null==e?void 0:e.imageId)?Co.state.networkImages[e.imageId]:void 0,getConnectorImage:e=>(null==e?void 0:e.imageUrl)?e.imageUrl:(null==e?void 0:e.imageId)?Co.state.connectorImages[e.imageId]:void 0},rs={goBackOrCloseModal(){zo.state.history.length>1?zo.goBack():Wo.close()},navigateAfterNetworkSwitch(){const{history:e}=zo.state,t=e.findIndex((e=>"Networks"===e));t>=1?zo.goBackToIndex(t-1):Wo.close()}},as=globalThis,os=as.ShadowRoot&&(void 0===as.ShadyCSS||as.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,ss=Symbol(),ls=new WeakMap;let cs=class{constructor(e,t,n){if(this._$cssResult$=!0,n!==ss)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(os&&void 0===e){const n=void 0!==t&&1===t.length;n&&(e=ls.get(t)),void 0===e&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),n&&ls.set(t,e))}return e}toString(){return this.cssText}};const us=e=>new cs("string"==typeof e?e:e+"",void 0,ss),ds=(e,...t)=>{const n=1===e.length?e[0]:t.reduce(((t,n,i)=>t+(e=>{if(!0===e._$cssResult$)return e.cssText;if("number"==typeof e)return e;throw Error("Value passed to 'css' function must be a 'css' function result: "+e+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(n)+e[i+1]),e[0]);return new cs(n,e,ss)},ps=os?e=>e:e=>e instanceof CSSStyleSheet?(e=>{let t="";for(const n of e.cssRules)t+=n.cssText;return us(t)})(e):e
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */,{is:hs,defineProperty:fs,getOwnPropertyDescriptor:ms,getOwnPropertyNames:gs,getOwnPropertySymbols:ws,getPrototypeOf:ys}=Object,vs=globalThis,bs=vs.trustedTypes,xs=bs?bs.emptyScript:"",Cs=vs.reactiveElementPolyfillSupport,_s=(e,t)=>e,Es={toAttribute(e,t){switch(t){case Boolean:e=e?xs:null;break;case Object:case Array:e=null==e?e:JSON.stringify(e)}return e},fromAttribute(e,t){let n=e;switch(t){case Boolean:n=null!==e;break;case Number:n=null===e?null:Number(e);break;case Object:case Array:try{n=JSON.parse(e)}catch(i){n=null}}return n}},ks=(e,t)=>!hs(e,t),Ts={attribute:!0,type:String,converter:Es,reflect:!1,hasChanged:ks};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),vs.litPropertyMetadata??(vs.litPropertyMetadata=new WeakMap);let As=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??(this.l=[])).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=Ts){if(t.state&&(t.attribute=!1),this._$Ei(),this.elementProperties.set(e,t),!t.noAccessor){const n=Symbol(),i=this.getPropertyDescriptor(e,n,t);void 0!==i&&fs(this.prototype,e,i)}}static getPropertyDescriptor(e,t,n){const{get:i,set:r}=ms(this.prototype,e)??{get(){return this[t]},set(e){this[t]=e}};return{get(){return null==i?void 0:i.call(this)},set(t){const a=null==i?void 0:i.call(this);r.call(this,t),this.requestUpdate(e,a,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??Ts}static _$Ei(){if(this.hasOwnProperty(_s("elementProperties")))return;const e=ys(this);e.finalize(),void 0!==e.l&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(_s("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(_s("properties"))){const e=this.properties,t=[...gs(e),...ws(e)];for(const n of t)this.createProperty(n,e[n])}const e=this[Symbol.metadata];if(null!==e){const t=litPropertyMetadata.get(e);if(void 0!==t)for(const[e,n]of t)this.elementProperties.set(e,n)}this._$Eh=new Map;for(const[t,n]of this.elementProperties){const e=this._$Eu(t,n);void 0!==e&&this._$Eh.set(e,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const n=new Set(e.flat(1/0).reverse());for(const e of n)t.unshift(ps(e))}else void 0!==e&&t.push(ps(e));return t}static _$Eu(e,t){const n=t.attribute;return!1===n?void 0:"string"==typeof n?n:"string"==typeof e?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var e;this._$ES=new Promise((e=>this.enableUpdating=e)),this._$AL=new Map,this._$E_(),this.requestUpdate(),null==(e=this.constructor.l)||e.forEach((e=>e(this)))}addController(e){var t;(this._$EO??(this._$EO=new Set)).add(e),void 0!==this.renderRoot&&this.isConnected&&(null==(t=e.hostConnected)||t.call(e))}removeController(e){var t;null==(t=this._$EO)||t.delete(e)}_$E_(){const e=new Map,t=this.constructor.elementProperties;for(const n of t.keys())this.hasOwnProperty(n)&&(e.set(n,this[n]),delete this[n]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return((e,t)=>{if(os)e.adoptedStyleSheets=t.map((e=>e instanceof CSSStyleSheet?e:e.styleSheet));else for(const n of t){const t=document.createElement("style"),i=as.litNonce;void 0!==i&&t.setAttribute("nonce",i),t.textContent=n.cssText,e.appendChild(t)}})(e,this.constructor.elementStyles),e}connectedCallback(){var e;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null==(e=this._$EO)||e.forEach((e=>{var t;return null==(t=e.hostConnected)?void 0:t.call(e)}))}enableUpdating(e){}disconnectedCallback(){var e;null==(e=this._$EO)||e.forEach((e=>{var t;return null==(t=e.hostDisconnected)?void 0:t.call(e)}))}attributeChangedCallback(e,t,n){this._$AK(e,n)}_$EC(e,t){var n;const i=this.constructor.elementProperties.get(e),r=this.constructor._$Eu(e,i);if(void 0!==r&&!0===i.reflect){const a=(void 0!==(null==(n=i.converter)?void 0:n.toAttribute)?i.converter:Es).toAttribute(t,i.type);this._$Em=e,null==a?this.removeAttribute(r):this.setAttribute(r,a),this._$Em=null}}_$AK(e,t){var n;const i=this.constructor,r=i._$Eh.get(e);if(void 0!==r&&this._$Em!==r){const e=i.getPropertyOptions(r),a="function"==typeof e.converter?{fromAttribute:e.converter}:void 0!==(null==(n=e.converter)?void 0:n.fromAttribute)?e.converter:Es;this._$Em=r,this[r]=a.fromAttribute(t,e.type),this._$Em=null}}requestUpdate(e,t,n){if(void 0!==e){if(n??(n=this.constructor.getPropertyOptions(e)),!(n.hasChanged??ks)(this[e],t))return;this.P(e,t,n)}!1===this.isUpdatePending&&(this._$ES=this._$ET())}P(e,t,n){this._$AL.has(e)||this._$AL.set(e,t),!0===n.reflect&&this._$Em!==e&&(this._$Ej??(this._$Ej=new Set)).add(e)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const e=this.scheduleUpdate();return null!=e&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var e;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[e,t]of this._$Ep)this[e]=t;this._$Ep=void 0}const e=this.constructor.elementProperties;if(e.size>0)for(const[t,n]of e)!0!==n.wrapped||this._$AL.has(t)||void 0===this[t]||this.P(t,this[t],n)}let t=!1;const n=this._$AL;try{t=this.shouldUpdate(n),t?(this.willUpdate(n),null==(e=this._$EO)||e.forEach((e=>{var t;return null==(t=e.hostUpdate)?void 0:t.call(e)})),this.update(n)):this._$EU()}catch(i){throw t=!1,this._$EU(),i}t&&this._$AE(n)}willUpdate(e){}_$AE(e){var t;null==(t=this._$EO)||t.forEach((e=>{var t;return null==(t=e.hostUpdated)?void 0:t.call(e)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Ej&&(this._$Ej=this._$Ej.forEach((e=>this._$EC(e,this[e])))),this._$EU()}updated(e){}firstUpdated(e){}};As.elementStyles=[],As.shadowRootOptions={mode:"open"},As[_s("elementProperties")]=new Map,As[_s("finalized")]=new Map,null==Cs||Cs({ReactiveElement:As}),(vs.reactiveElementVersions??(vs.reactiveElementVersions=[])).push("2.0.4");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const $s=globalThis,Is=$s.trustedTypes,Ps=Is?Is.createPolicy("lit-html",{createHTML:e=>e}):void 0,Ss="$lit$",Rs=`lit$${(Math.random()+"").slice(9)}$`,Os="?"+Rs,Ns=`<${Os}>`,Ms=document,js=()=>Ms.createComment(""),Us=e=>null===e||"object"!=typeof e&&"function"!=typeof e,Ds=Array.isArray,Bs="[ \t\n\f\r]",Ls=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,zs=/-->/g,Fs=/>/g,Ws=RegExp(`>|${Bs}(?:([^\\s"'>=/]+)(${Bs}*=${Bs}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),Hs=/'/g,Zs=/"/g,Vs=/^(?:script|style|textarea|title)$/i,Gs=e=>(t,...n)=>({_$litType$:e,strings:t,values:n}),qs=Gs(1),Ks=Gs(2),Ys=Symbol.for("lit-noChange"),Js=Symbol.for("lit-nothing"),Qs=new WeakMap,Xs=Ms.createTreeWalker(Ms,129);function el(e,t){if(!Array.isArray(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==Ps?Ps.createHTML(t):t}let tl=class e{constructor({strings:t,_$litType$:n},i){let r;this.parts=[];let a=0,o=0;const s=t.length-1,l=this.parts,[c,u]=((e,t)=>{const n=e.length-1,i=[];let r,a=2===t?"<svg>":"",o=Ls;for(let s=0;s<n;s++){const t=e[s];let n,l,c=-1,u=0;for(;u<t.length&&(o.lastIndex=u,l=o.exec(t),null!==l);)u=o.lastIndex,o===Ls?"!--"===l[1]?o=zs:void 0!==l[1]?o=Fs:void 0!==l[2]?(Vs.test(l[2])&&(r=RegExp("</"+l[2],"g")),o=Ws):void 0!==l[3]&&(o=Ws):o===Ws?">"===l[0]?(o=r??Ls,c=-1):void 0===l[1]?c=-2:(c=o.lastIndex-l[2].length,n=l[1],o=void 0===l[3]?Ws:'"'===l[3]?Zs:Hs):o===Zs||o===Hs?o=Ws:o===zs||o===Fs?o=Ls:(o=Ws,r=void 0);const d=o===Ws&&e[s+1].startsWith("/>")?" ":"";a+=o===Ls?t+Ns:c>=0?(i.push(n),t.slice(0,c)+Ss+t.slice(c)+Rs+d):t+Rs+(-2===c?s:d)}return[el(e,a+(e[n]||"<?>")+(2===t?"</svg>":"")),i]})(t,n);if(this.el=e.createElement(c,i),Xs.currentNode=this.el.content,2===n){const e=this.el.content.firstChild;e.replaceWith(...e.childNodes)}for(;null!==(r=Xs.nextNode())&&l.length<s;){if(1===r.nodeType){if(r.hasAttributes())for(const e of r.getAttributeNames())if(e.endsWith(Ss)){const t=u[o++],n=r.getAttribute(e).split(Rs),i=/([.?@])?(.*)/.exec(t);l.push({type:1,index:a,name:i[2],strings:n,ctor:"."===i[1]?ol:"?"===i[1]?sl:"@"===i[1]?ll:al}),r.removeAttribute(e)}else e.startsWith(Rs)&&(l.push({type:6,index:a}),r.removeAttribute(e));if(Vs.test(r.tagName)){const e=r.textContent.split(Rs),t=e.length-1;if(t>0){r.textContent=Is?Is.emptyScript:"";for(let n=0;n<t;n++)r.append(e[n],js()),Xs.nextNode(),l.push({type:2,index:++a});r.append(e[t],js())}}}else if(8===r.nodeType)if(r.data===Os)l.push({type:2,index:a});else{let e=-1;for(;-1!==(e=r.data.indexOf(Rs,e+1));)l.push({type:7,index:a}),e+=Rs.length-1}a++}}static createElement(e,t){const n=Ms.createElement("template");return n.innerHTML=e,n}};function nl(e,t,n=e,i){var r,a;if(t===Ys)return t;let o=void 0!==i?null==(r=n._$Co)?void 0:r[i]:n._$Cl;const s=Us(t)?void 0:t._$litDirective$;return(null==o?void 0:o.constructor)!==s&&(null==(a=null==o?void 0:o._$AO)||a.call(o,!1),void 0===s?o=void 0:(o=new s(e),o._$AT(e,n,i)),void 0!==i?(n._$Co??(n._$Co=[]))[i]=o:n._$Cl=o),void 0!==o&&(t=nl(e,o._$AS(e,t.values),o,i)),t}let il=class{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:t},parts:n}=this._$AD,i=((null==e?void 0:e.creationScope)??Ms).importNode(t,!0);Xs.currentNode=i;let r=Xs.nextNode(),a=0,o=0,s=n[0];for(;void 0!==s;){if(a===s.index){let t;2===s.type?t=new rl(r,r.nextSibling,this,e):1===s.type?t=new s.ctor(r,s.name,s.strings,this,e):6===s.type&&(t=new cl(r,this,e)),this._$AV.push(t),s=n[++o]}a!==(null==s?void 0:s.index)&&(r=Xs.nextNode(),a++)}return Xs.currentNode=Ms,i}p(e){let t=0;for(const n of this._$AV)void 0!==n&&(void 0!==n.strings?(n._$AI(e,n,t),t+=n.strings.length-2):n._$AI(e[t])),t++}},rl=class e{get _$AU(){var e;return(null==(e=this._$AM)?void 0:e._$AU)??this._$Cv}constructor(e,t,n,i){this.type=2,this._$AH=Js,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=n,this.options=i,this._$Cv=(null==i?void 0:i.isConnected)??!0}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return void 0!==t&&11===(null==e?void 0:e.nodeType)&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=nl(this,e,t),Us(e)?e===Js||null==e||""===e?(this._$AH!==Js&&this._$AR(),this._$AH=Js):e!==this._$AH&&e!==Ys&&this._(e):void 0!==e._$litType$?this.$(e):void 0!==e.nodeType?this.T(e):(e=>Ds(e)||"function"==typeof(null==e?void 0:e[Symbol.iterator]))(e)?this.k(e):this._(e)}S(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.S(e))}_(e){this._$AH!==Js&&Us(this._$AH)?this._$AA.nextSibling.data=e:this.T(Ms.createTextNode(e)),this._$AH=e}$(e){var t;const{values:n,_$litType$:i}=e,r="number"==typeof i?this._$AC(e):(void 0===i.el&&(i.el=tl.createElement(el(i.h,i.h[0]),this.options)),i);if((null==(t=this._$AH)?void 0:t._$AD)===r)this._$AH.p(n);else{const e=new il(r,this),t=e.u(this.options);e.p(n),this.T(t),this._$AH=e}}_$AC(e){let t=Qs.get(e.strings);return void 0===t&&Qs.set(e.strings,t=new tl(e)),t}k(t){Ds(this._$AH)||(this._$AH=[],this._$AR());const n=this._$AH;let i,r=0;for(const a of t)r===n.length?n.push(i=new e(this.S(js()),this.S(js()),this,this.options)):i=n[r],i._$AI(a),r++;r<n.length&&(this._$AR(i&&i._$AB.nextSibling,r),n.length=r)}_$AR(e=this._$AA.nextSibling,t){var n;for(null==(n=this._$AP)||n.call(this,!1,!0,t);e&&e!==this._$AB;){const t=e.nextSibling;e.remove(),e=t}}setConnected(e){var t;void 0===this._$AM&&(this._$Cv=e,null==(t=this._$AP)||t.call(this,e))}},al=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,n,i,r){this.type=1,this._$AH=Js,this._$AN=void 0,this.element=e,this.name=t,this._$AM=i,this.options=r,n.length>2||""!==n[0]||""!==n[1]?(this._$AH=Array(n.length-1).fill(new String),this.strings=n):this._$AH=Js}_$AI(e,t=this,n,i){const r=this.strings;let a=!1;if(void 0===r)e=nl(this,e,t,0),a=!Us(e)||e!==this._$AH&&e!==Ys,a&&(this._$AH=e);else{const i=e;let o,s;for(e=r[0],o=0;o<r.length-1;o++)s=nl(this,i[n+o],t,o),s===Ys&&(s=this._$AH[o]),a||(a=!Us(s)||s!==this._$AH[o]),s===Js?e=Js:e!==Js&&(e+=(s??"")+r[o+1]),this._$AH[o]=s}a&&!i&&this.j(e)}j(e){e===Js?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}},ol=class extends al{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===Js?void 0:e}},sl=class extends al{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==Js)}},ll=class extends al{constructor(e,t,n,i,r){super(e,t,n,i,r),this.type=5}_$AI(e,t=this){if((e=nl(this,e,t,0)??Js)===Ys)return;const n=this._$AH,i=e===Js&&n!==Js||e.capture!==n.capture||e.once!==n.once||e.passive!==n.passive,r=e!==Js&&(n===Js||i);i&&this.element.removeEventListener(this.name,this,n),r&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t;"function"==typeof this._$AH?this._$AH.call((null==(t=this.options)?void 0:t.host)??this.element,e):this._$AH.handleEvent(e)}},cl=class{constructor(e,t,n){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(e){nl(this,e)}};const ul=$s.litHtmlPolyfillSupport;null==ul||ul(tl,rl),($s.litHtmlVersions??($s.litHtmlVersions=[])).push("3.1.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
let dl=class extends As{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var e;const t=super.createRenderRoot();return(e=this.renderOptions).renderBefore??(e.renderBefore=t.firstChild),t}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=((e,t,n)=>{const i=(null==n?void 0:n.renderBefore)??t;let r=i._$litPart$;if(void 0===r){const e=(null==n?void 0:n.renderBefore)??null;i._$litPart$=r=new rl(t.insertBefore(js(),e),e,void 0,n??{})}return r._$AI(e),r})(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),null==(e=this._$Do)||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),null==(e=this._$Do)||e.setConnected(!1)}render(){return Ys}};dl._$litElement$=!0,dl.finalized=!0,null==(e=globalThis.litElementHydrateSupport)||e.call(globalThis,{LitElement:dl});const pl=globalThis.litElementPolyfillSupport;let hl,fl,ml;function gl(e,t){hl=document.createElement("style"),fl=document.createElement("style"),ml=document.createElement("style"),hl.textContent=vl(e).core.cssText,fl.textContent=vl(e).dark.cssText,ml.textContent=vl(e).light.cssText,document.head.appendChild(hl),document.head.appendChild(fl),document.head.appendChild(ml),wl(t)}function wl(e){fl&&ml&&("light"===e?(fl.removeAttribute("media"),ml.media="enabled"):(ml.removeAttribute("media"),fl.media="enabled"))}function yl(e){hl&&fl&&ml&&(hl.textContent=vl(e).core.cssText,fl.textContent=vl(e).dark.cssText,ml.textContent=vl(e).light.cssText)}function vl(e){return{core:ds`
      @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');
      :root {
        --w3m-color-mix-strength: ${us((null==e?void 0:e["--w3m-color-mix-strength"])?`${e["--w3m-color-mix-strength"]}%`:"0%")};
        --w3m-font-family: ${us((null==e?void 0:e["--w3m-font-family"])||"Inter, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;")};
        --w3m-font-size-master: ${us((null==e?void 0:e["--w3m-font-size-master"])||"10px")};
        --w3m-border-radius-master: ${us((null==e?void 0:e["--w3m-border-radius-master"])||"4px")};
        --w3m-z-index: ${us((null==e?void 0:e["--w3m-z-index"])||100)};

        --wui-font-family: var(--w3m-font-family);

        --wui-font-size-micro: var(--w3m-font-size-master);
        --wui-font-size-tiny: calc(var(--w3m-font-size-master) * 1.2);
        --wui-font-size-small: calc(var(--w3m-font-size-master) * 1.4);
        --wui-font-size-paragraph: calc(var(--w3m-font-size-master) * 1.6);
        --wui-font-size-medium: calc(var(--w3m-font-size-master) * 1.8);
        --wui-font-size-large: calc(var(--w3m-font-size-master) * 2);
        --wui-font-size-medium-title: calc(var(--w3m-font-size-master) * 2.4);
        --wui-font-size-2xl: calc(var(--w3m-font-size-master) * 4);

        --wui-border-radius-5xs: var(--w3m-border-radius-master);
        --wui-border-radius-4xs: calc(var(--w3m-border-radius-master) * 1.5);
        --wui-border-radius-3xs: calc(var(--w3m-border-radius-master) * 2);
        --wui-border-radius-xxs: calc(var(--w3m-border-radius-master) * 3);
        --wui-border-radius-xs: calc(var(--w3m-border-radius-master) * 4);
        --wui-border-radius-s: calc(var(--w3m-border-radius-master) * 5);
        --wui-border-radius-m: calc(var(--w3m-border-radius-master) * 7);
        --wui-border-radius-l: calc(var(--w3m-border-radius-master) * 9);
        --wui-border-radius-3xl: calc(var(--w3m-border-radius-master) * 20);

        --wui-font-weight-light: 400;
        --wui-font-weight-regular: 500;
        --wui-font-weight-medium: 600;
        --wui-font-weight-bold: 700;

        --wui-letter-spacing-2xl: -1.6px;
        --wui-letter-spacing-medium-title: -0.96px;
        --wui-letter-spacing-large: -0.8px;
        --wui-letter-spacing-medium: -0.72px;
        --wui-letter-spacing-paragraph: -0.64px;
        --wui-letter-spacing-small: -0.56px;
        --wui-letter-spacing-tiny: -0.48px;
        --wui-letter-spacing-micro: -0.2px;

        --wui-spacing-0: 0px;
        --wui-spacing-4xs: 2px;
        --wui-spacing-3xs: 4px;
        --wui-spacing-xxs: 6px;
        --wui-spacing-2xs: 7px;
        --wui-spacing-xs: 8px;
        --wui-spacing-1xs: 10px;
        --wui-spacing-s: 12px;
        --wui-spacing-m: 14px;
        --wui-spacing-l: 16px;
        --wui-spacing-2l: 18px;
        --wui-spacing-xl: 20px;
        --wui-spacing-xxl: 24px;
        --wui-spacing-2xl: 32px;
        --wui-spacing-3xl: 40px;
        --wui-spacing-4xl: 90px;

        --wui-icon-box-size-xxs: 14px;
        --wui-icon-box-size-xs: 20px;
        --wui-icon-box-size-sm: 24px;
        --wui-icon-box-size-md: 32px;
        --wui-icon-box-size-lg: 40px;
        --wui-icon-box-size-xl: 64px;

        --wui-icon-size-inherit: inherit;
        --wui-icon-size-xxs: 10px;
        --wui-icon-size-xs: 12px;
        --wui-icon-size-sm: 14px;
        --wui-icon-size-md: 16px;
        --wui-icon-size-mdl: 18px;
        --wui-icon-size-lg: 20px;
        --wui-icon-size-xl: 24px;

        --wui-wallet-image-size-inherit: inherit;
        --wui-wallet-image-size-sm: 40px;
        --wui-wallet-image-size-md: 56px;
        --wui-wallet-image-size-lg: 80px;

        --wui-visual-size-size-inherit: inherit;
        --wui-visual-size-sm: 40px;
        --wui-visual-size-md: 55px;
        --wui-visual-size-lg: 80px;

        --wui-box-size-md: 100px;
        --wui-box-size-lg: 120px;

        --wui-ease-out-power-2: cubic-bezier(0, 0, 0.22, 1);
        --wui-ease-out-power-1: cubic-bezier(0, 0, 0.55, 1);

        --wui-ease-in-power-3: cubic-bezier(0.66, 0, 1, 1);
        --wui-ease-in-power-2: cubic-bezier(0.45, 0, 1, 1);
        --wui-ease-in-power-1: cubic-bezier(0.3, 0, 1, 1);

        --wui-ease-inout-power-1: cubic-bezier(0.45, 0, 0.55, 1);

        --wui-duration-lg: 200ms;
        --wui-duration-md: 125ms;
        --wui-duration-sm: 75ms;

        --wui-path-network-sm: path(
          'M15.4 2.1a5.21 5.21 0 0 1 5.2 0l11.61 6.7a5.21 5.21 0 0 1 2.61 4.52v13.4c0 1.87-1 3.59-2.6 4.52l-11.61 6.7c-1.62.93-3.6.93-5.22 0l-11.6-6.7a5.21 5.21 0 0 1-2.61-4.51v-13.4c0-1.87 1-3.6 2.6-4.52L15.4 2.1Z'
        );

        --wui-path-network-md: path(
          'M43.4605 10.7248L28.0485 1.61089C25.5438 0.129705 22.4562 0.129705 19.9515 1.61088L4.53951 10.7248C2.03626 12.2051 0.5 14.9365 0.5 17.886V36.1139C0.5 39.0635 2.03626 41.7949 4.53951 43.2752L19.9515 52.3891C22.4562 53.8703 25.5438 53.8703 28.0485 52.3891L43.4605 43.2752C45.9637 41.7949 47.5 39.0635 47.5 36.114V17.8861C47.5 14.9365 45.9637 12.2051 43.4605 10.7248Z'
        );

        --wui-path-network-lg: path(
          'M78.3244 18.926L50.1808 2.45078C45.7376 -0.150261 40.2624 -0.150262 35.8192 2.45078L7.6756 18.926C3.23322 21.5266 0.5 26.3301 0.5 31.5248V64.4752C0.5 69.6699 3.23322 74.4734 7.6756 77.074L35.8192 93.5492C40.2624 96.1503 45.7376 96.1503 50.1808 93.5492L78.3244 77.074C82.7668 74.4734 85.5 69.6699 85.5 64.4752V31.5248C85.5 26.3301 82.7668 21.5266 78.3244 18.926Z'
        );

        --wui-width-network-sm: 36px;
        --wui-width-network-md: 48px;
        --wui-width-network-lg: 86px;

        --wui-height-network-sm: 40px;
        --wui-height-network-md: 54px;
        --wui-height-network-lg: 96px;

        --wui-icon-size-network-xs: 12px;
        --wui-icon-size-network-sm: 16px;
        --wui-icon-size-network-md: 24px;
        --wui-icon-size-network-lg: 42px;

        --wui-color-inherit: inherit;

        --wui-color-inverse-100: #fff;
        --wui-color-inverse-000: #000;

        --wui-cover: rgba(20, 20, 20, 0.8);

        --wui-color-modal-bg: var(--wui-color-modal-bg-base);

        --wui-color-blue-100: var(--wui-color-blue-base-100);

        --wui-color-accent-100: var(--wui-color-accent-base-100);
        --wui-color-accent-090: var(--wui-color-accent-base-090);
        --wui-color-accent-080: var(--wui-color-accent-base-080);

        --wui-accent-glass-090: var(--wui-accent-glass-base-090);
        --wui-accent-glass-080: var(--wui-accent-glass-base-080);
        --wui-accent-glass-020: var(--wui-accent-glass-base-020);
        --wui-accent-glass-015: var(--wui-accent-glass-base-015);
        --wui-accent-glass-010: var(--wui-accent-glass-base-010);
        --wui-accent-glass-005: var(--wui-accent-glass-base-005);
        --wui-accent-glass-002: var(--wui-accent-glass-base-002);

        --wui-color-fg-100: var(--wui-color-fg-base-100);
        --wui-color-fg-125: var(--wui-color-fg-base-125);
        --wui-color-fg-150: var(--wui-color-fg-base-150);
        --wui-color-fg-175: var(--wui-color-fg-base-175);
        --wui-color-fg-200: var(--wui-color-fg-base-200);
        --wui-color-fg-225: var(--wui-color-fg-base-225);
        --wui-color-fg-250: var(--wui-color-fg-base-250);
        --wui-color-fg-275: var(--wui-color-fg-base-275);
        --wui-color-fg-300: var(--wui-color-fg-base-300);

        --wui-color-bg-100: var(--wui-color-bg-base-100);
        --wui-color-bg-125: var(--wui-color-bg-base-125);
        --wui-color-bg-150: var(--wui-color-bg-base-150);
        --wui-color-bg-175: var(--wui-color-bg-base-175);
        --wui-color-bg-200: var(--wui-color-bg-base-200);
        --wui-color-bg-225: var(--wui-color-bg-base-225);
        --wui-color-bg-250: var(--wui-color-bg-base-250);
        --wui-color-bg-275: var(--wui-color-bg-base-275);
        --wui-color-bg-300: var(--wui-color-bg-base-300);

        --wui-color-success-100: var(--wui-color-success-base-100);
        --wui-color-error-100: var(--wui-color-error-base-100);

        --wui-icon-box-bg-error-100: var(--wui-icon-box-bg-error-base-100);
        --wui-icon-box-bg-blue-100: var(--wui-icon-box-bg-blue-base-100);
        --wui-icon-box-bg-success-100: var(--wui-icon-box-bg-success-base-100);
        --wui-icon-box-bg-inverse-100: var(--wui-icon-box-bg-inverse-base-100);

        --wui-all-wallets-bg-100: var(--wui-all-wallets-bg-base-100);

        --wui-avatar-border: var(--wui-avatar-border-base);

        --wui-thumbnail-border: var(--wui-thumbnail-border-base);

        --wui-box-shadow-blue: rgba(71, 161, 255, 0.16);
      }

      @supports (background: color-mix(in srgb, white 50%, black)) {
        :root {
          --wui-color-modal-bg: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-modal-bg-base)
          );

          --wui-box-shadow-blue: color-mix(in srgb, var(--wui-color-accent-100) 16%, transparent);

          --wui-color-accent-090: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 90%,
            var(--w3m-default)
          );
          --wui-color-accent-080: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 80%,
            var(--w3m-default)
          );

          --wui-color-accent-090: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 90%,
            transparent
          );
          --wui-color-accent-080: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 80%,
            transparent
          );

          --wui-accent-glass-090: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 90%,
            transparent
          );
          --wui-accent-glass-080: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 80%,
            transparent
          );
          --wui-accent-glass-020: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 20%,
            transparent
          );
          --wui-accent-glass-015: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 15%,
            transparent
          );
          --wui-accent-glass-010: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 10%,
            transparent
          );
          --wui-accent-glass-005: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 5%,
            transparent
          );
          --wui-color-accent-002: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 2%,
            transparent
          );

          --wui-color-fg-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-base-100)
          );
          --wui-color-fg-125: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-base-125)
          );
          --wui-color-fg-150: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-base-150)
          );
          --wui-color-fg-175: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-base-175)
          );
          --wui-color-fg-200: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-base-200)
          );
          --wui-color-fg-225: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-base-225)
          );
          --wui-color-fg-250: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-base-250)
          );
          --wui-color-fg-275: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-base-275)
          );
          --wui-color-fg-300: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-base-300)
          );

          --wui-color-bg-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-base-100)
          );
          --wui-color-bg-125: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-base-125)
          );
          --wui-color-bg-150: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-base-150)
          );
          --wui-color-bg-175: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-base-175)
          );
          --wui-color-bg-200: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-base-200)
          );
          --wui-color-bg-225: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-base-225)
          );
          --wui-color-bg-250: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-base-250)
          );
          --wui-color-bg-275: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-base-275)
          );
          --wui-color-bg-300: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-base-300)
          );

          --wui-color-success-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-success-base-100)
          );
          --wui-color-error-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-error-base-100)
          );

          --wui-icon-box-bg-error-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-icon-box-bg-error-base-100)
          );
          --wui-icon-box-bg-accent-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-icon-box-bg-blue-base-100)
          );
          --wui-icon-box-bg-success-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-icon-box-bg-success-base-100)
          );
          --wui-icon-box-bg-inverse-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-icon-box-bg-inverse-base-100)
          );

          --wui-all-wallets-bg-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-all-wallets-bg-base-100)
          );

          --wui-avatar-border: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-avatar-border-base)
          );

          --wui-thumbnail-border: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-thumbnail-border-base)
          );
        }
      }
    `,light:ds`
      :root {
        --w3m-color-mix: ${us((null==e?void 0:e["--w3m-color-mix"])||"#fff")};
        --w3m-accent: ${us((null==e?void 0:e["--w3m-accent"])||"#47a1ff")};
        --w3m-default: #fff;

        --wui-color-modal-bg-base: #191a1a;

        --wui-color-blue-base-100: #47a1ff;

        --wui-color-accent-base-100: var(--w3m-accent);
        --wui-color-accent-base-090: #59aaff;
        --wui-color-accent-base-080: #6cb4ff;

        --wui-accent-glass-base-090: rgba(71, 161, 255, 0.9);
        --wui-accent-glass-base-080: rgba(71, 161, 255, 0.8);
        --wui-accent-glass-base-020: rgba(71, 161, 255, 0.2);
        --wui-accent-glass-base-015: rgba(71, 161, 255, 0.15);
        --wui-accent-glass-base-010: rgba(71, 161, 255, 0.1);
        --wui-accent-glass-base-005: rgba(71, 161, 255, 0.05);
        --wui-accent-glass-base-002: rgba(71, 161, 255, 0.02);

        --wui-color-fg-base-100: #e4e7e7;
        --wui-color-fg-base-125: #d0d5d5;
        --wui-color-fg-base-150: #a8b1b1;
        --wui-color-fg-base-175: #a8b0b0;
        --wui-color-fg-base-200: #949e9e;
        --wui-color-fg-base-225: #868f8f;
        --wui-color-fg-base-250: #788080;
        --wui-color-fg-base-275: #788181;
        --wui-color-fg-base-300: #6e7777;

        --wui-color-bg-base-100: #141414;
        --wui-color-bg-base-125: #191a1a;
        --wui-color-bg-base-150: #1e1f1f;
        --wui-color-bg-base-175: #222525;
        --wui-color-bg-base-200: #272a2a;
        --wui-color-bg-base-225: #2c3030;
        --wui-color-bg-base-250: #313535;
        --wui-color-bg-base-275: #363b3b;
        --wui-color-bg-base-300: #3b4040;

        --wui-color-success-base-100: #26d962;
        --wui-color-error-base-100: #f25a67;

        --wui-success-glass-001: rgba(38, 217, 98, 0.01);
        --wui-success-glass-002: rgba(38, 217, 98, 0.02);
        --wui-success-glass-005: rgba(38, 217, 98, 0.05);
        --wui-success-glass-010: rgba(38, 217, 98, 0.1);
        --wui-success-glass-015: rgba(38, 217, 98, 0.15);
        --wui-success-glass-020: rgba(38, 217, 98, 0.2);
        --wui-success-glass-025: rgba(38, 217, 98, 0.25);
        --wui-success-glass-030: rgba(38, 217, 98, 0.3);
        --wui-success-glass-060: rgba(38, 217, 98, 0.6);
        --wui-success-glass-080: rgba(38, 217, 98, 0.8);

        --wui-error-glass-001: rgba(242, 90, 103, 0.01);
        --wui-error-glass-002: rgba(242, 90, 103, 0.02);
        --wui-error-glass-005: rgba(242, 90, 103, 0.05);
        --wui-error-glass-010: rgba(242, 90, 103, 0.1);
        --wui-error-glass-015: rgba(242, 90, 103, 0.15);
        --wui-error-glass-020: rgba(242, 90, 103, 0.2);
        --wui-error-glass-025: rgba(242, 90, 103, 0.25);
        --wui-error-glass-030: rgba(242, 90, 103, 0.3);
        --wui-error-glass-060: rgba(242, 90, 103, 0.6);
        --wui-error-glass-080: rgba(242, 90, 103, 0.8);

        --wui-icon-box-bg-error-base-100: #3c2426;
        --wui-icon-box-bg-blue-base-100: #20303f;
        --wui-icon-box-bg-success-base-100: #1f3a28;
        --wui-icon-box-bg-inverse-base-100: #243240;

        --wui-all-wallets-bg-base-100: #222b35;

        --wui-avatar-border-base: #252525;

        --wui-thumbnail-border-base: #252525;

        --wui-gray-glass-001: rgba(255, 255, 255, 0.01);
        --wui-gray-glass-002: rgba(255, 255, 255, 0.02);
        --wui-gray-glass-005: rgba(255, 255, 255, 0.05);
        --wui-gray-glass-010: rgba(255, 255, 255, 0.1);
        --wui-gray-glass-015: rgba(255, 255, 255, 0.15);
        --wui-gray-glass-020: rgba(255, 255, 255, 0.2);
        --wui-gray-glass-025: rgba(255, 255, 255, 0.25);
        --wui-gray-glass-030: rgba(255, 255, 255, 0.3);
        --wui-gray-glass-060: rgba(255, 255, 255, 0.6);
        --wui-gray-glass-080: rgba(255, 255, 255, 0.8);
        --wui-gray-glass-090: rgba(255, 255, 255, 0.9);
      }
    `,dark:ds`
      :root {
        --w3m-color-mix: ${us((null==e?void 0:e["--w3m-color-mix"])||"#000")};
        --w3m-accent: ${us((null==e?void 0:e["--w3m-accent"])||"#3396ff")};
        --w3m-default: #000;

        --wui-color-modal-bg-base: #fff;

        --wui-color-blue-base-100: #3396ff;

        --wui-color-accent-base-100: var(--w3m-accent);
        --wui-color-accent-base-090: #2d7dd2;
        --wui-color-accent-base-080: #2978cc;

        --wui-accent-glass-base-090: rgba(51, 150, 255, 0.9);
        --wui-accent-glass-base-080: rgba(51, 150, 255, 0.8);
        --wui-accent-glass-base-020: rgba(51, 150, 255, 0.2);
        --wui-accent-glass-base-015: rgba(51, 150, 255, 0.15);
        --wui-accent-glass-base-010: rgba(51, 150, 255, 0.1);
        --wui-accent-glass-base-005: rgba(51, 150, 255, 0.05);
        --wui-accent-glass-base-002: rgba(51, 150, 255, 0.02);

        --wui-color-fg-base-100: #141414;
        --wui-color-fg-base-125: #2d3131;
        --wui-color-fg-base-150: #474d4d;
        --wui-color-fg-base-175: #636d6d;
        --wui-color-fg-base-200: #798686;
        --wui-color-fg-base-225: #828f8f;
        --wui-color-fg-base-250: #8b9797;
        --wui-color-fg-base-275: #95a0a0;
        --wui-color-fg-base-300: #9ea9a9;

        --wui-color-bg-base-100: #ffffff;
        --wui-color-bg-base-125: #f5fafa;
        --wui-color-bg-base-150: #f3f8f8;
        --wui-color-bg-base-175: #eef4f4;
        --wui-color-bg-base-200: #eaf1f1;
        --wui-color-bg-base-225: #e5eded;
        --wui-color-bg-base-250: #e1e9e9;
        --wui-color-bg-base-275: #dce7e7;
        --wui-color-bg-base-300: #d8e3e3;

        --wui-color-success-base-100: #26b562;
        --wui-color-error-base-100: #f05142;

        --wui-success-glass-001: rgba(38, 181, 98, 0.01);
        --wui-success-glass-002: rgba(38, 181, 98, 0.02);
        --wui-success-glass-005: rgba(38, 181, 98, 0.05);
        --wui-success-glass-010: rgba(38, 181, 98, 0.1);
        --wui-success-glass-015: rgba(38, 181, 98, 0.15);
        --wui-success-glass-020: rgba(38, 181, 98, 0.2);
        --wui-success-glass-025: rgba(38, 181, 98, 0.25);
        --wui-success-glass-030: rgba(38, 181, 98, 0.3);
        --wui-success-glass-060: rgba(38, 181, 98, 0.6);
        --wui-success-glass-080: rgba(38, 181, 98, 0.8);

        --wui-error-glass-001: rgba(240, 81, 66, 0.01);
        --wui-error-glass-002: rgba(240, 81, 66, 0.02);
        --wui-error-glass-005: rgba(240, 81, 66, 0.05);
        --wui-error-glass-010: rgba(240, 81, 66, 0.1);
        --wui-error-glass-015: rgba(240, 81, 66, 0.15);
        --wui-error-glass-020: rgba(240, 81, 66, 0.2);
        --wui-error-glass-025: rgba(240, 81, 66, 0.25);
        --wui-error-glass-030: rgba(240, 81, 66, 0.3);
        --wui-error-glass-060: rgba(240, 81, 66, 0.6);
        --wui-error-glass-080: rgba(240, 81, 66, 0.8);

        --wui-icon-box-bg-error-base-100: #f4dfdd;
        --wui-icon-box-bg-blue-base-100: #d9ecfb;
        --wui-icon-box-bg-success-base-100: #daf0e4;
        --wui-icon-box-bg-inverse-base-100: #dcecfc;

        --wui-all-wallets-bg-base-100: #e8f1fa;

        --wui-avatar-border-base: #f3f4f4;

        --wui-thumbnail-border-base: #eaefef;

        --wui-gray-glass-001: rgba(0, 0, 0, 0.01);
        --wui-gray-glass-002: rgba(0, 0, 0, 0.02);
        --wui-gray-glass-005: rgba(0, 0, 0, 0.05);
        --wui-gray-glass-010: rgba(0, 0, 0, 0.1);
        --wui-gray-glass-015: rgba(0, 0, 0, 0.15);
        --wui-gray-glass-020: rgba(0, 0, 0, 0.2);
        --wui-gray-glass-025: rgba(0, 0, 0, 0.25);
        --wui-gray-glass-030: rgba(0, 0, 0, 0.3);
        --wui-gray-glass-060: rgba(0, 0, 0, 0.6);
        --wui-gray-glass-080: rgba(0, 0, 0, 0.8);
        --wui-gray-glass-090: rgba(0, 0, 0, 0.9);
      }
    `}}null==pl||pl({LitElement:dl}),(globalThis.litElementVersions??(globalThis.litElementVersions=[])).push("4.0.4");const bl=ds`
  *,
  *::after,
  *::before,
  :host {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-style: normal;
    text-rendering: optimizeSpeed;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-tap-highlight-color: transparent;
    font-family: var(--wui-font-family);
    backface-visibility: hidden;
  }
`,xl=ds`
  button,
  a {
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    transition: all var(--wui-ease-out-power-1) var(--wui-duration-lg);
    outline: none;
    border: 1px solid transparent;
    column-gap: var(--wui-spacing-3xs);
    background-color: transparent;
    text-decoration: none;
  }

  @media (hover: hover) and (pointer: fine) {
    button:hover:enabled {
      background-color: var(--wui-gray-glass-005);
    }

    button:active:enabled {
      transition: all var(--wui-ease-out-power-2) var(--wui-duration-sm);
      background-color: var(--wui-gray-glass-010);
    }

    button[data-variant='fill']:hover:enabled {
      background-color: var(--wui-color-accent-090);
    }

    button[data-variant='accentBg']:hover:enabled {
      background: var(--wui-accent-glass-015);
    }

    button[data-variant='accentBg']:active:enabled {
      background: var(--wui-accent-glass-020);
    }
  }

  button:disabled {
    cursor: not-allowed;
    background-color: var(--wui-gray-glass-005);
  }

  button[data-variant='shade']:disabled,
  button[data-variant='accent']:disabled,
  button[data-variant='accentBg']:disabled {
    background-color: var(--wui-gray-glass-010);
    color: var(--wui-gray-glass-015);
    filter: grayscale(1);
  }

  button:disabled > wui-wallet-image,
  button:disabled > wui-all-wallets-image,
  button:disabled > wui-network-image,
  button:disabled > wui-image,
  button:disabled > wui-icon-box,
  button:disabled > wui-transaction-visual,
  button:disabled > wui-logo {
    filter: grayscale(1);
  }

  button:focus-visible,
  a:focus-visible {
    border: 1px solid var(--wui-color-accent-100);
    background-color: var(--wui-gray-glass-005);
    -webkit-box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
    -moz-box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
    box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
  }

  button[data-variant='fill']:focus-visible {
    background-color: var(--wui-color-accent-090);
  }

  button[data-variant='fill'] {
    color: var(--wui-color-inverse-100);
    background-color: var(--wui-color-accent-100);
  }

  button[data-variant='fill']:disabled {
    color: var(--wui-gray-glass-015);
    background-color: var(--wui-gray-glass-015);
  }

  button[data-variant='fill']:disabled > wui-icon {
    color: var(--wui-gray-glass-015);
  }

  button[data-variant='shade'] {
    color: var(--wui-color-fg-200);
  }

  button[data-variant='accent'],
  button[data-variant='accentBg'] {
    color: var(--wui-color-accent-100);
  }

  button[data-variant='accentBg'] {
    background: var(--wui-accent-glass-010);
    border: 1px solid var(--wui-accent-glass-010);
  }

  button[data-variant='fullWidth'] {
    width: 100%;
    border-radius: var(--wui-border-radius-xs);
    height: 56px;
    border: none;
    background-color: var(--wui-gray-glass-002);
    color: var(--wui-color-fg-200);
    gap: var(--wui-spacing-xs);
  }

  button:active:enabled {
    background-color: var(--wui-gray-glass-010);
  }

  button[data-variant='fill']:active:enabled {
    background-color: var(--wui-color-accent-080);
    border: 1px solid var(--wui-gray-glass-010);
  }

  input {
    border: none;
    outline: none;
    appearance: none;
  }
`,Cl=ds`
  .wui-color-inherit {
    color: var(--wui-color-inherit);
  }

  .wui-color-accent-100 {
    color: var(--wui-color-accent-100);
  }

  .wui-color-error-100 {
    color: var(--wui-color-error-100);
  }

  .wui-color-success-100 {
    color: var(--wui-color-success-100);
  }

  .wui-color-inverse-100 {
    color: var(--wui-color-inverse-100);
  }

  .wui-color-inverse-000 {
    color: var(--wui-color-inverse-000);
  }

  .wui-color-fg-100 {
    color: var(--wui-color-fg-100);
  }

  .wui-color-fg-200 {
    color: var(--wui-color-fg-200);
  }

  .wui-color-fg-300 {
    color: var(--wui-color-fg-300);
  }

  .wui-bg-color-inherit {
    background-color: var(--wui-color-inherit);
  }

  .wui-bg-color-blue-100 {
    background-color: var(--wui-color-accent-100);
  }

  .wui-bg-color-error-100 {
    background-color: var(--wui-color-error-100);
  }

  .wui-bg-color-success-100 {
    background-color: var(--wui-color-success-100);
  }

  .wui-bg-color-inverse-100 {
    background-color: var(--wui-color-inverse-100);
  }

  .wui-bg-color-inverse-000 {
    background-color: var(--wui-color-inverse-000);
  }

  .wui-bg-color-fg-100 {
    background-color: var(--wui-color-fg-100);
  }

  .wui-bg-color-fg-200 {
    background-color: var(--wui-color-fg-200);
  }

  .wui-bg-color-fg-300 {
    background-color: var(--wui-color-fg-300);
  }
`;function _l(e){return function(t){return"function"==typeof t?function(e,t){return customElements.get(e)||customElements.define(e,t),t}(e,t):function(e,t){const{kind:n,elements:i}=t;return{kind:n,elements:i,finisher(t){customElements.get(e)||customElements.define(e,t)}}}(e,t)}}const El=ds`
  :host {
    display: block;
    border-radius: clamp(0px, var(--wui-border-radius-l), 44px);
    box-shadow: 0 0 0 1px var(--wui-gray-glass-005);
    background-color: var(--wui-color-modal-bg);
    overflow: hidden;
  }
`;let kl=class extends dl{render(){return qs`<slot></slot>`}};kl.styles=[bl,El],kl=function(e,t,n,i){var r,a=arguments.length,o=a<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,n,i);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(o=(a<3?r(o):a>3?r(t,n,o):r(t,n))||o);return a>3&&o&&Object.defineProperty(t,n,o),o}([_l("wui-card")],kl);
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const Tl={attribute:!0,type:String,converter:Es,reflect:!1,hasChanged:ks},Al=(e=Tl,t,n)=>{const{kind:i,metadata:r}=n;let a=globalThis.litPropertyMetadata.get(r);if(void 0===a&&globalThis.litPropertyMetadata.set(r,a=new Map),a.set(n.name,e),"accessor"===i){const{name:i}=n;return{set(n){const r=t.get.call(this);t.set.call(this,n),this.requestUpdate(i,r,e)},init(t){return void 0!==t&&this.P(i,void 0,e),t}}}if("setter"===i){const{name:i}=n;return function(n){const r=this[i];t.call(this,n),this.requestUpdate(i,r,e)}}throw Error("Unsupported decorator location: "+i)};function $l(e){return(t,n)=>"object"==typeof n?Al(e,t,n):((e,t,n)=>{const i=t.hasOwnProperty(n);return t.constructor.createProperty(n,i?{...e,wrapped:!0}:e),i?Object.getOwnPropertyDescriptor(t,n):void 0})(e,t,n)}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Il(e){return $l({...e,state:!0,attribute:!1})}const Pl=ds`
  :host {
    display: flex;
    aspect-ratio: 1 / 1;
    color: var(--local-color);
    width: var(--local-width);
  }

  svg {
    width: inherit;
    height: inherit;
    object-fit: contain;
    object-position: center;
  }
`,Sl=Ks`<svg fill="none" viewBox="0 0 24 24">
  <path
    style="fill: var(--wui-color-accent-100);"
    d="M10.2 6.6a3.6 3.6 0 1 1-7.2 0 3.6 3.6 0 0 1 7.2 0ZM21 6.6a3.6 3.6 0 1 1-7.2 0 3.6 3.6 0 0 1 7.2 0ZM10.2 17.4a3.6 3.6 0 1 1-7.2 0 3.6 3.6 0 0 1 7.2 0ZM21 17.4a3.6 3.6 0 1 1-7.2 0 3.6 3.6 0 0 1 7.2 0Z"
  />
</svg>`,Rl=Ks`<svg
  fill="none"
  viewBox="0 0 21 20"
>
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M10.5 2.42908C6.31875 2.42908 2.92859 5.81989 2.92859 10.0034C2.92859 14.1869 6.31875 17.5777 10.5 17.5777C14.6813 17.5777 18.0714 14.1869 18.0714 10.0034C18.0714 5.81989 14.6813 2.42908 10.5 2.42908ZM0.928589 10.0034C0.928589 4.71596 5.21355 0.429077 10.5 0.429077C15.7865 0.429077 20.0714 4.71596 20.0714 10.0034C20.0714 15.2908 15.7865 19.5777 10.5 19.5777C5.21355 19.5777 0.928589 15.2908 0.928589 10.0034ZM10.5 5.75003C11.0523 5.75003 11.5 6.19774 11.5 6.75003L11.5 10.8343L12.7929 9.54137C13.1834 9.15085 13.8166 9.15085 14.2071 9.54137C14.5976 9.9319 14.5976 10.5651 14.2071 10.9556L11.2071 13.9556C10.8166 14.3461 10.1834 14.3461 9.79291 13.9556L6.79291 10.9556C6.40239 10.5651 6.40239 9.9319 6.79291 9.54137C7.18343 9.15085 7.8166 9.15085 8.20712 9.54137L9.50002 10.8343L9.50002 6.75003C9.50002 6.19774 9.94773 5.75003 10.5 5.75003Z"
    clip-rule="evenodd"
  /></svg
>`,Ol=Ks`
<svg width="36" height="36">
  <path
    d="M28.724 0H7.271A7.269 7.269 0 0 0 0 7.272v21.46A7.268 7.268 0 0 0 7.271 36H28.73A7.272 7.272 0 0 0 36 28.728V7.272A7.275 7.275 0 0 0 28.724 0Z"
    fill="url(#a)"
  />
  <path
    d="m17.845 8.271.729-1.26a1.64 1.64 0 1 1 2.843 1.638l-7.023 12.159h5.08c1.646 0 2.569 1.935 1.853 3.276H6.434a1.632 1.632 0 0 1-1.638-1.638c0-.909.73-1.638 1.638-1.638h4.176l5.345-9.265-1.67-2.898a1.642 1.642 0 0 1 2.844-1.638l.716 1.264Zm-6.317 17.5-1.575 2.732a1.64 1.64 0 1 1-2.844-1.638l1.17-2.025c1.323-.41 2.398-.095 3.249.931Zm13.56-4.954h4.262c.909 0 1.638.729 1.638 1.638 0 .909-.73 1.638-1.638 1.638h-2.367l1.597 2.772c.45.788.185 1.782-.602 2.241a1.642 1.642 0 0 1-2.241-.603c-2.69-4.666-4.711-8.159-6.052-10.485-1.372-2.367-.391-4.743.576-5.549 1.075 1.846 2.682 4.631 4.828 8.348Z"
    fill="#fff"
  />
  <defs>
    <linearGradient id="a" x1="18" y1="0" x2="18" y2="36" gradientUnits="userSpaceOnUse">
      <stop stop-color="#18BFFB" />
      <stop offset="1" stop-color="#2072F3" />
    </linearGradient>
  </defs>
</svg>`,Nl=Ks`<svg fill="none" viewBox="0 0 40 40">
  <g clip-path="url(#a)">
    <g clip-path="url(#b)">
      <circle cx="20" cy="19.89" r="20" fill="#000" />
      <g clip-path="url(#c)">
        <path
          fill="#fff"
          d="M28.77 23.3c-.69 1.99-2.75 5.52-4.87 5.56-1.4.03-1.86-.84-3.46-.84-1.61 0-2.12.81-3.45.86-2.25.1-5.72-5.1-5.72-9.62 0-4.15 2.9-6.2 5.42-6.25 1.36-.02 2.64.92 3.47.92.83 0 2.38-1.13 4.02-.97.68.03 2.6.28 3.84 2.08-3.27 2.14-2.76 6.61.75 8.25ZM24.2 7.88c-2.47.1-4.49 2.69-4.2 4.84 2.28.17 4.47-2.39 4.2-4.84Z"
        />
      </g>
    </g>
  </g>
  <defs>
    <clipPath id="a"><rect width="40" height="40" fill="#fff" rx="20" /></clipPath>
    <clipPath id="b"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath>
    <clipPath id="c"><path fill="#fff" d="M8 7.89h24v24H8z" /></clipPath>
  </defs>
</svg>`,Ml=Ks`<svg fill="none" viewBox="0 0 14 15">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M7 1.99a1 1 0 0 1 1 1v7.58l2.46-2.46a1 1 0 0 1 1.41 1.42L7.7 13.69a1 1 0 0 1-1.41 0L2.12 9.53A1 1 0 0 1 3.54 8.1L6 10.57V3a1 1 0 0 1 1-1Z"
    clip-rule="evenodd"
  />
</svg>`,jl=Ks`<svg fill="none" viewBox="0 0 14 15">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M13 7.99a1 1 0 0 1-1 1H4.4l2.46 2.46a1 1 0 1 1-1.41 1.41L1.29 8.7a1 1 0 0 1 0-1.41L5.46 3.1a1 1 0 0 1 1.41 1.42L4.41 6.99H12a1 1 0 0 1 1 1Z"
    clip-rule="evenodd"
  />
</svg>`,Ul=Ks`<svg fill="none" viewBox="0 0 14 15">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M1 7.99a1 1 0 0 1 1-1h7.58L7.12 4.53A1 1 0 1 1 8.54 3.1l4.16 4.17a1 1 0 0 1 0 1.41l-4.16 4.17a1 1 0 1 1-1.42-1.41l2.46-2.46H2a1 1 0 0 1-1-1Z"
    clip-rule="evenodd"
  />
</svg>`,Dl=Ks`<svg fill="none" viewBox="0 0 14 15">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M7 13.99a1 1 0 0 1-1-1V5.4L3.54 7.86a1 1 0 0 1-1.42-1.41L6.3 2.28a1 1 0 0 1 1.41 0l4.17 4.17a1 1 0 1 1-1.41 1.41L8 5.4v7.59a1 1 0 0 1-1 1Z"
    clip-rule="evenodd"
  />
</svg>`,Bl=Ks`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M4 6.4a1 1 0 0 1-.46.89 6.98 6.98 0 0 0 .38 6.18A7 7 0 0 0 16.46 7.3a1 1 0 0 1-.47-.92 7 7 0 0 0-12 .03Zm-2.02-.5a9 9 0 1 1 16.03 8.2A9 9 0 0 1 1.98 5.9Z"
    clip-rule="evenodd"
  />
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M6.03 8.63c-1.46-.3-2.72-.75-3.6-1.35l-.02-.01-.14-.11a1 1 0 0 1 1.2-1.6l.1.08c.6.4 1.52.74 2.69 1 .16-.99.39-1.88.67-2.65.3-.79.68-1.5 1.15-2.02A2.58 2.58 0 0 1 9.99 1c.8 0 1.45.44 1.92.97.47.52.84 1.23 1.14 2.02.29.77.52 1.66.68 2.64a8 8 0 0 0 2.7-1l.26-.18h.48a1 1 0 0 1 .12 2c-.86.51-2.01.91-3.34 1.18a22.24 22.24 0 0 1-.03 3.19c1.45.29 2.7.73 3.58 1.31a1 1 0 0 1-1.1 1.68c-.6-.4-1.56-.76-2.75-1-.15.8-.36 1.55-.6 2.2-.3.79-.67 1.5-1.14 2.02-.47.53-1.12.97-1.92.97-.8 0-1.45-.44-1.91-.97a6.51 6.51 0 0 1-1.15-2.02c-.24-.65-.44-1.4-.6-2.2-1.18.24-2.13.6-2.73.99a1 1 0 1 1-1.1-1.67c.88-.58 2.12-1.03 3.57-1.31a22.03 22.03 0 0 1-.04-3.2Zm2.2-1.7c.15-.86.34-1.61.58-2.24.24-.65.51-1.12.76-1.4.25-.28.4-.29.42-.29.03 0 .17.01.42.3.25.27.52.74.77 1.4.23.62.43 1.37.57 2.22a19.96 19.96 0 0 1-3.52 0Zm-.18 4.6a20.1 20.1 0 0 1-.03-2.62 21.95 21.95 0 0 0 3.94 0 20.4 20.4 0 0 1-.03 2.63 21.97 21.97 0 0 0-3.88 0Zm.27 2c.13.66.3 1.26.49 1.78.24.65.51 1.12.76 1.4.25.28.4.29.42.29.03 0 .17-.01.42-.3.25-.27.52-.74.77-1.4.19-.5.36-1.1.49-1.78a20.03 20.03 0 0 0-3.35 0Z"
    clip-rule="evenodd"
  />
</svg>`,Ll=Ks`<svg
  xmlns="http://www.w3.org/2000/svg"
  width="12"
  height="12"
  viewBox="0 0 12 12"
  fill="none"
>
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M10.537 2.34245C10.8997 2.64654 10.9471 3.187 10.6429 3.54959L5.61072 9.54757C5.45645 9.73144 5.23212 9.84222 4.99229 9.85295C4.75247 9.86368 4.51914 9.77337 4.34906 9.60401L1.40881 6.6761C1.07343 6.34213 1.07238 5.7996 1.40647 5.46433C1.74055 5.12906 2.28326 5.12801 2.61865 5.46198L4.89731 7.73108L9.32942 2.44834C9.63362 2.08576 10.1743 2.03835 10.537 2.34245Z"
    fill="currentColor"
  /></svg
>`,zl=Ks`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M1.46 4.96a1 1 0 0 1 1.41 0L8 10.09l5.13-5.13a1 1 0 1 1 1.41 1.41l-5.83 5.84a1 1 0 0 1-1.42 0L1.46 6.37a1 1 0 0 1 0-1.41Z"
    clip-rule="evenodd"
  />
</svg>`,Fl=Ks`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M11.04 1.46a1 1 0 0 1 0 1.41L5.91 8l5.13 5.13a1 1 0 1 1-1.41 1.41L3.79 8.71a1 1 0 0 1 0-1.42l5.84-5.83a1 1 0 0 1 1.41 0Z"
    clip-rule="evenodd"
  />
</svg>`,Wl=Ks`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M4.96 14.54a1 1 0 0 1 0-1.41L10.09 8 4.96 2.87a1 1 0 0 1 1.41-1.41l5.84 5.83a1 1 0 0 1 0 1.42l-5.84 5.83a1 1 0 0 1-1.41 0Z"
    clip-rule="evenodd"
  />
</svg>`,Hl=Ks`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M14.54 11.04a1 1 0 0 1-1.41 0L8 5.92l-5.13 5.12a1 1 0 1 1-1.41-1.41l5.83-5.84a1 1 0 0 1 1.42 0l5.83 5.84a1 1 0 0 1 0 1.41Z"
    clip-rule="evenodd"
  />
</svg>`,Zl=Ks`<svg width="36" height="36" fill="none">
  <path
    fill="#fff"
    fill-opacity=".05"
    d="M0 14.94c0-5.55 0-8.326 1.182-10.4a9 9 0 0 1 3.359-3.358C6.614 0 9.389 0 14.94 0h6.12c5.55 0 8.326 0 10.4 1.182a9 9 0 0 1 3.358 3.359C36 6.614 36 9.389 36 14.94v6.12c0 5.55 0 8.326-1.182 10.4a9 9 0 0 1-3.359 3.358C29.386 36 26.611 36 21.06 36h-6.12c-5.55 0-8.326 0-10.4-1.182a9 9 0 0 1-3.358-3.359C0 29.386 0 26.611 0 21.06v-6.12Z"
  />
  <path
    stroke="#fff"
    stroke-opacity=".05"
    d="M14.94.5h6.12c2.785 0 4.84 0 6.46.146 1.612.144 2.743.43 3.691.97a8.5 8.5 0 0 1 3.172 3.173c.541.948.826 2.08.971 3.692.145 1.62.146 3.675.146 6.459v6.12c0 2.785 0 4.84-.146 6.46-.145 1.612-.43 2.743-.97 3.691a8.5 8.5 0 0 1-3.173 3.172c-.948.541-2.08.826-3.692.971-1.62.145-3.674.146-6.459.146h-6.12c-2.784 0-4.84 0-6.46-.146-1.612-.145-2.743-.43-3.691-.97a8.5 8.5 0 0 1-3.172-3.173c-.541-.948-.827-2.08-.971-3.692C.5 25.9.5 23.845.5 21.06v-6.12c0-2.784 0-4.84.146-6.46.144-1.612.43-2.743.97-3.691A8.5 8.5 0 0 1 4.79 1.617C5.737 1.076 6.869.79 8.48.646 10.1.5 12.156.5 14.94.5Z"
  />
  <path
    fill="url(#a)"
    d="M17.998 10.8h12.469a14.397 14.397 0 0 0-24.938.001l6.234 10.798.006-.001a7.19 7.19 0 0 1 6.23-10.799Z"
  />
  <path
    fill="url(#b)"
    d="m24.237 21.598-6.234 10.798A14.397 14.397 0 0 0 30.47 10.798H18.002l-.002.006a7.191 7.191 0 0 1 6.237 10.794Z"
  />
  <path
    fill="url(#c)"
    d="M11.765 21.601 5.531 10.803A14.396 14.396 0 0 0 18.001 32.4l6.235-10.798-.004-.004a7.19 7.19 0 0 1-12.466.004Z"
  />
  <path fill="#fff" d="M18 25.2a7.2 7.2 0 1 0 0-14.4 7.2 7.2 0 0 0 0 14.4Z" />
  <path fill="#1A73E8" d="M18 23.7a5.7 5.7 0 1 0 0-11.4 5.7 5.7 0 0 0 0 11.4Z" />
  <defs>
    <linearGradient
      id="a"
      x1="6.294"
      x2="41.1"
      y1="5.995"
      y2="5.995"
      gradientUnits="userSpaceOnUse"
    >
      <stop stop-color="#D93025" />
      <stop offset="1" stop-color="#EA4335" />
    </linearGradient>
    <linearGradient
      id="b"
      x1="20.953"
      x2="37.194"
      y1="32.143"
      y2="2.701"
      gradientUnits="userSpaceOnUse"
    >
      <stop stop-color="#FCC934" />
      <stop offset="1" stop-color="#FBBC04" />
    </linearGradient>
    <linearGradient
      id="c"
      x1="25.873"
      x2="9.632"
      y1="31.2"
      y2="1.759"
      gradientUnits="userSpaceOnUse"
    >
      <stop stop-color="#1E8E3E" />
      <stop offset="1" stop-color="#34A853" />
    </linearGradient>
  </defs>
</svg>`,Vl=Ks`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M7 2.99a5 5 0 1 0 0 10 5 5 0 0 0 0-10Zm-7 5a7 7 0 1 1 14 0 7 7 0 0 1-14 0Zm7-4a1 1 0 0 1 1 1v2.58l1.85 1.85a1 1 0 0 1-1.41 1.42L6.29 8.69A1 1 0 0 1 6 8v-3a1 1 0 0 1 1-1Z"
    clip-rule="evenodd"
  />
</svg>`,Gl=Ks`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M2.54 2.54a1 1 0 0 1 1.42 0L8 6.6l4.04-4.05a1 1 0 1 1 1.42 1.42L9.4 8l4.05 4.04a1 1 0 0 1-1.42 1.42L8 9.4l-4.04 4.05a1 1 0 0 1-1.42-1.42L6.6 8 2.54 3.96a1 1 0 0 1 0-1.42Z"
    clip-rule="evenodd"
  />
</svg>`,ql=Ks`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M10 3a7 7 0 0 0-6.85 8.44l8.29-8.3C10.97 3.06 10.49 3 10 3Zm3.49.93-9.56 9.56c.32.55.71 1.06 1.16 1.5L15 5.1a7.03 7.03 0 0 0-1.5-1.16Zm2.7 2.8-9.46 9.46a7 7 0 0 0 9.46-9.46ZM1.99 5.9A9 9 0 1 1 18 14.09 9 9 0 0 1 1.98 5.91Z"
    clip-rule="evenodd"
  />
</svg>`,Kl=Ks`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M8 2a6 6 0 1 0 0 12A6 6 0 0 0 8 2ZM0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8Zm10.66-2.65a1 1 0 0 1 .23 1.06L9.83 9.24a1 1 0 0 1-.59.58l-2.83 1.06A1 1 0 0 1 5.13 9.6l1.06-2.82a1 1 0 0 1 .58-.59L9.6 5.12a1 1 0 0 1 1.06.23ZM7.9 7.89l-.13.35.35-.13.12-.35-.34.13Z"
    clip-rule="evenodd"
  />
</svg>`,Yl=Ks`<svg
  xmlns="http://www.w3.org/2000/svg"
  width="16"
  height="16"
  viewBox="0 0 16 16"
  fill="none"
>
  <path
    fill="currentColor"
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M9.21498 1.28565H10.5944C11.1458 1.28562 11.6246 1.2856 12.0182 1.32093C12.4353 1.35836 12.853 1.44155 13.2486 1.66724C13.7005 1.92498 14.0749 2.29935 14.3326 2.75122C14.5583 3.14689 14.6415 3.56456 14.6789 3.9817C14.7143 4.37531 14.7142 4.85403 14.7142 5.40545V6.78489C14.7142 7.33631 14.7143 7.81503 14.6789 8.20865C14.6415 8.62578 14.5583 9.04345 14.3326 9.43912C14.0749 9.89099 13.7005 10.2654 13.2486 10.5231C12.853 10.7488 12.4353 10.832 12.0182 10.8694C11.7003 10.8979 11.3269 10.9034 10.9045 10.9045C10.9034 11.3269 10.8979 11.7003 10.8694 12.0182C10.832 12.4353 10.7488 12.853 10.5231 13.2486C10.2654 13.7005 9.89099 14.0749 9.43912 14.3326C9.04345 14.5583 8.62578 14.6415 8.20865 14.6789C7.81503 14.7143 7.33631 14.7142 6.78489 14.7142H5.40545C4.85403 14.7142 4.37531 14.7143 3.9817 14.6789C3.56456 14.6415 3.14689 14.5583 2.75122 14.3326C2.29935 14.0749 1.92498 13.7005 1.66724 13.2486C1.44155 12.853 1.35836 12.4353 1.32093 12.0182C1.2856 11.6246 1.28562 11.1458 1.28565 10.5944V9.21498C1.28562 8.66356 1.2856 8.18484 1.32093 7.79122C1.35836 7.37409 1.44155 6.95642 1.66724 6.56074C1.92498 6.10887 2.29935 5.73451 2.75122 5.47677C3.14689 5.25108 3.56456 5.16789 3.9817 5.13045C4.2996 5.10192 4.67301 5.09645 5.09541 5.09541C5.09645 4.67302 5.10192 4.2996 5.13045 3.9817C5.16789 3.56456 5.25108 3.14689 5.47676 2.75122C5.73451 2.29935 6.10887 1.92498 6.56074 1.66724C6.95642 1.44155 7.37409 1.35836 7.79122 1.32093C8.18484 1.2856 8.66356 1.28562 9.21498 1.28565ZM5.09541 7.09552C4.68397 7.09667 4.39263 7.10161 4.16046 7.12245C3.88053 7.14757 3.78516 7.18949 3.74214 7.21403C3.60139 7.29431 3.48478 7.41091 3.4045 7.55166C3.37997 7.59468 3.33804 7.69005 3.31292 7.96999C3.28659 8.26345 3.28565 8.65147 3.28565 9.25708V10.5523C3.28565 11.1579 3.28659 11.5459 3.31292 11.8394C3.33804 12.1193 3.37997 12.2147 3.4045 12.2577C3.48478 12.3985 3.60139 12.5151 3.74214 12.5954C3.78516 12.6199 3.88053 12.6618 4.16046 12.6869C4.45393 12.7133 4.84195 12.7142 5.44755 12.7142H6.74279C7.3484 12.7142 7.73641 12.7133 8.02988 12.6869C8.30981 12.6618 8.40518 12.6199 8.44821 12.5954C8.58895 12.5151 8.70556 12.3985 8.78584 12.2577C8.81038 12.2147 8.8523 12.1193 8.87742 11.8394C8.89825 11.6072 8.90319 11.3159 8.90435 10.9045C8.48219 10.9034 8.10898 10.8979 7.79122 10.8694C7.37409 10.832 6.95641 10.7488 6.56074 10.5231C6.10887 10.2654 5.73451 9.89099 5.47676 9.43912C5.25108 9.04345 5.16789 8.62578 5.13045 8.20865C5.10194 7.89089 5.09645 7.51767 5.09541 7.09552ZM7.96999 3.31292C7.69005 3.33804 7.59468 3.37997 7.55166 3.4045C7.41091 3.48478 7.29431 3.60139 7.21403 3.74214C7.18949 3.78516 7.14757 3.88053 7.12245 4.16046C7.09611 4.45393 7.09517 4.84195 7.09517 5.44755V6.74279C7.09517 7.3484 7.09611 7.73641 7.12245 8.02988C7.14757 8.30981 7.18949 8.40518 7.21403 8.4482C7.29431 8.58895 7.41091 8.70556 7.55166 8.78584C7.59468 8.81038 7.69005 8.8523 7.96999 8.87742C8.26345 8.90376 8.65147 8.9047 9.25708 8.9047H10.5523C11.1579 8.9047 11.5459 8.90376 11.8394 8.87742C12.1193 8.8523 12.2147 8.81038 12.2577 8.78584C12.3985 8.70556 12.5151 8.58895 12.5954 8.4482C12.6199 8.40518 12.6618 8.30981 12.6869 8.02988C12.7133 7.73641 12.7142 7.3484 12.7142 6.74279V5.44755C12.7142 4.84195 12.7133 4.45393 12.6869 4.16046C12.6618 3.88053 12.6199 3.78516 12.5954 3.74214C12.5151 3.60139 12.3985 3.48478 12.2577 3.4045C12.2147 3.37997 12.1193 3.33804 11.8394 3.31292C11.5459 3.28659 11.1579 3.28565 10.5523 3.28565H9.25708C8.65147 3.28565 8.26345 3.28659 7.96999 3.31292Z"
    fill="#788181"
  /></svg
>`,Jl=Ks`<svg
  width="14"
  height="14"
  viewBox="0 0 14 14"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    fill="currentColor"
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M7.0023 0.875C7.48571 0.875 7.8776 1.26675 7.8776 1.75V6.125H12.2541C12.7375 6.125 13.1294 6.51675 13.1294 7C13.1294 7.48325 12.7375 7.875 12.2541 7.875H7.8776V12.25C7.8776 12.7332 7.48571 13.125 7.0023 13.125C6.51889 13.125 6.12701 12.7332 6.12701 12.25V7.875H1.75054C1.26713 7.875 0.875244 7.48325 0.875244 7C0.875244 6.51675 1.26713 6.125 1.75054 6.125H6.12701V1.75C6.12701 1.26675 6.51889 0.875 7.0023 0.875Z"
    fill="#47A1FF"
  /></svg
>`,Ql=Ks` <svg fill="none" viewBox="0 0 13 4">
  <path fill="currentColor" d="M.5 0h12L8.9 3.13a3.76 3.76 0 0 1-4.8 0L.5 0Z" />
</svg>`,Xl=Ks`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M13.66 2H6.34c-1.07 0-1.96 0-2.68.08-.74.08-1.42.25-2.01.68a4 4 0 0 0-.89.89c-.43.6-.6 1.27-.68 2.01C0 6.38 0 7.26 0 8.34v.89c0 1.07 0 1.96.08 2.68.08.74.25 1.42.68 2.01a4 4 0 0 0 .89.89c.6.43 1.27.6 2.01.68a27 27 0 0 0 2.68.08h7.32a27 27 0 0 0 2.68-.08 4.03 4.03 0 0 0 2.01-.68 4 4 0 0 0 .89-.89c.43-.6.6-1.27.68-2.01.08-.72.08-1.6.08-2.68v-.89c0-1.07 0-1.96-.08-2.68a4.04 4.04 0 0 0-.68-2.01 4 4 0 0 0-.89-.89c-.6-.43-1.27-.6-2.01-.68C15.62 2 14.74 2 13.66 2ZM2.82 4.38c.2-.14.48-.25 1.06-.31C4.48 4 5.25 4 6.4 4h7.2c1.15 0 1.93 0 2.52.07.58.06.86.17 1.06.31a2 2 0 0 1 .44.44c.14.2.25.48.31 1.06.07.6.07 1.37.07 2.52v.77c0 1.15 0 1.93-.07 2.52-.06.58-.17.86-.31 1.06a2 2 0 0 1-.44.44c-.2.14-.48.25-1.06.32-.6.06-1.37.06-2.52.06H6.4c-1.15 0-1.93 0-2.52-.06-.58-.07-.86-.18-1.06-.32a2 2 0 0 1-.44-.44c-.14-.2-.25-.48-.31-1.06C2 11.1 2 10.32 2 9.17V8.4c0-1.15 0-1.93.07-2.52.06-.58.17-.86.31-1.06a2 2 0 0 1 .44-.44Z"
    clip-rule="evenodd"
  />
  <path fill="currentColor" d="M6.14 17.57a1 1 0 1 0 0 2h7.72a1 1 0 1 0 0-2H6.14Z" />
</svg>`,ec=Ks`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M6.07 1h.57a1 1 0 0 1 0 2h-.52c-.98 0-1.64 0-2.14.06-.48.05-.7.14-.84.24-.13.1-.25.22-.34.35-.1.14-.2.35-.25.83-.05.5-.05 1.16-.05 2.15v2.74c0 .99 0 1.65.05 2.15.05.48.14.7.25.83.1.14.2.25.34.35.14.1.36.2.84.25.5.05 1.16.05 2.14.05h.52a1 1 0 0 1 0 2h-.57c-.92 0-1.69 0-2.3-.07a3.6 3.6 0 0 1-1.8-.61c-.3-.22-.57-.49-.8-.8a3.6 3.6 0 0 1-.6-1.79C.5 11.11.5 10.35.5 9.43V6.58c0-.92 0-1.7.06-2.31a3.6 3.6 0 0 1 .62-1.8c.22-.3.48-.57.79-.79a3.6 3.6 0 0 1 1.8-.61C4.37 1 5.14 1 6.06 1ZM9.5 3a1 1 0 0 1 1.42 0l4.28 4.3a1 1 0 0 1 0 1.4L10.93 13a1 1 0 0 1-1.42-1.42L12.1 9H6.8a1 1 0 1 1 0-2h5.3L9.51 4.42a1 1 0 0 1 0-1.41Z"
    clip-rule="evenodd"
  />
</svg>`,tc=Ks`<svg fill="none" viewBox="0 0 40 40">
  <g clip-path="url(#a)">
    <g clip-path="url(#b)">
      <circle cx="20" cy="19.89" r="20" fill="#5865F2" />
      <path
        fill="#fff"
        fill-rule="evenodd"
        d="M25.71 28.15C30.25 28 32 25.02 32 25.02c0-6.61-2.96-11.98-2.96-11.98-2.96-2.22-5.77-2.15-5.77-2.15l-.29.32c3.5 1.07 5.12 2.61 5.12 2.61a16.75 16.75 0 0 0-10.34-1.93l-.35.04a15.43 15.43 0 0 0-5.88 1.9s1.71-1.63 5.4-2.7l-.2-.24s-2.81-.07-5.77 2.15c0 0-2.96 5.37-2.96 11.98 0 0 1.73 2.98 6.27 3.13l1.37-1.7c-2.6-.79-3.6-2.43-3.6-2.43l.58.35.09.06.08.04.02.01.08.05a17.25 17.25 0 0 0 4.52 1.58 14.4 14.4 0 0 0 8.3-.86c.72-.27 1.52-.66 2.37-1.21 0 0-1.03 1.68-3.72 2.44.61.78 1.35 1.67 1.35 1.67Zm-9.55-9.6c-1.17 0-2.1 1.03-2.1 2.28 0 1.25.95 2.28 2.1 2.28 1.17 0 2.1-1.03 2.1-2.28.01-1.25-.93-2.28-2.1-2.28Zm7.5 0c-1.17 0-2.1 1.03-2.1 2.28 0 1.25.95 2.28 2.1 2.28 1.17 0 2.1-1.03 2.1-2.28 0-1.25-.93-2.28-2.1-2.28Z"
        clip-rule="evenodd"
      />
    </g>
  </g>
  <defs>
    <clipPath id="a"><rect width="40" height="40" fill="#fff" rx="20" /></clipPath>
    <clipPath id="b"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath>
  </defs>
</svg>`,nc=Ks`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    d="M4.25 7a.63.63 0 0 0-.63.63v3.97c0 .28-.2.51-.47.54l-.75.07a.93.93 0 0 1-.9-.47A7.51 7.51 0 0 1 5.54.92a7.5 7.5 0 0 1 9.54 4.62c.12.35.06.72-.16 1-.74.97-1.68 1.78-2.6 2.44V4.44a.64.64 0 0 0-.63-.64h-1.06c-.35 0-.63.3-.63.64v5.5c0 .23-.12.42-.32.5l-.52.23V6.05c0-.36-.3-.64-.64-.64H7.45c-.35 0-.64.3-.64.64v4.97c0 .25-.17.46-.4.52a5.8 5.8 0 0 0-.45.11v-4c0-.36-.3-.65-.64-.65H4.25ZM14.07 12.4A7.49 7.49 0 0 1 3.6 14.08c4.09-.58 9.14-2.5 11.87-6.6v.03a7.56 7.56 0 0 1-1.41 4.91Z"
  />
</svg>`,ic=Ks`<svg fill="none" viewBox="0 0 14 15">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M6.71 2.99a.57.57 0 0 0-.57.57 1 1 0 0 1-1 1c-.58 0-.96 0-1.24.03-.27.03-.37.07-.42.1a.97.97 0 0 0-.36.35c-.04.08-.09.21-.11.67a2.57 2.57 0 0 1 0 5.13c.02.45.07.6.11.66.09.15.21.28.36.36.07.04.21.1.67.12a2.57 2.57 0 0 1 5.12 0c.46-.03.6-.08.67-.12a.97.97 0 0 0 .36-.36c.03-.04.07-.14.1-.41.02-.29.03-.66.03-1.24a1 1 0 0 1 1-1 .57.57 0 0 0 0-1.15 1 1 0 0 1-1-1c0-.58 0-.95-.03-1.24a1.04 1.04 0 0 0-.1-.42.97.97 0 0 0-.36-.36 1.04 1.04 0 0 0-.42-.1c-.28-.02-.65-.02-1.24-.02a1 1 0 0 1-1-1 .57.57 0 0 0-.57-.57ZM5.15 13.98a1 1 0 0 0 .99-1v-.78a.57.57 0 0 1 1.14 0v.78a1 1 0 0 0 .99 1H8.36a66.26 66.26 0 0 0 .73 0 3.78 3.78 0 0 0 1.84-.38c.46-.26.85-.64 1.1-1.1.23-.4.32-.8.36-1.22.02-.2.03-.4.03-.63a2.57 2.57 0 0 0 0-4.75c0-.23-.01-.44-.03-.63a2.96 2.96 0 0 0-.35-1.22 2.97 2.97 0 0 0-1.1-1.1c-.4-.22-.8-.31-1.22-.35a8.7 8.7 0 0 0-.64-.04 2.57 2.57 0 0 0-4.74 0c-.23 0-.44.02-.63.04-.42.04-.83.13-1.22.35-.46.26-.84.64-1.1 1.1-.33.57-.37 1.2-.39 1.84a21.39 21.39 0 0 0 0 .72v.1a1 1 0 0 0 1 .99h.78a.57.57 0 0 1 0 1.15h-.77a1 1 0 0 0-1 .98v.1a63.87 63.87 0 0 0 0 .73c0 .64.05 1.27.38 1.83.26.47.64.85 1.1 1.11.56.32 1.2.37 1.84.38a20.93 20.93 0 0 0 .72 0h.1Z"
    clip-rule="evenodd"
  />
</svg>`,rc=Ks`<svg fill="none" viewBox="0 0 14 15">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M3.74 3.99a1 1 0 0 1 1-1H11a1 1 0 0 1 1 1v6.26a1 1 0 0 1-2 0V6.4l-6.3 6.3a1 1 0 0 1-1.4-1.42l6.29-6.3H4.74a1 1 0 0 1-1-1Z"
    clip-rule="evenodd"
  />
</svg>`,ac=Ks`<svg fill="none" viewBox="0 0 40 40">
  <g clip-path="url(#a)">
    <g clip-path="url(#b)">
      <circle cx="20" cy="19.89" r="20" fill="#1877F2" />
      <g clip-path="url(#c)">
        <path
          fill="#fff"
          d="M26 12.38h-2.89c-.92 0-1.61.38-1.61 1.34v1.66H26l-.36 4.5H21.5v12H17v-12h-3v-4.5h3V12.5c0-3.03 1.6-4.62 5.2-4.62H26v4.5Z"
        />
      </g>
    </g>
    <path
      fill="#1877F2"
      d="M40 20a20 20 0 1 0-23.13 19.76V25.78H11.8V20h5.07v-4.4c0-5.02 3-7.79 7.56-7.79 2.19 0 4.48.4 4.48.4v4.91h-2.53c-2.48 0-3.25 1.55-3.25 3.13V20h5.54l-.88 5.78h-4.66v13.98A20 20 0 0 0 40 20Z"
    />
    <path
      fill="#fff"
      d="m27.79 25.78.88-5.78h-5.55v-3.75c0-1.58.78-3.13 3.26-3.13h2.53V8.2s-2.3-.39-4.48-.39c-4.57 0-7.55 2.77-7.55 7.78V20H11.8v5.78h5.07v13.98a20.15 20.15 0 0 0 6.25 0V25.78h4.67Z"
    />
  </g>
  <defs>
    <clipPath id="a"><rect width="40" height="40" fill="#fff" rx="20" /></clipPath>
    <clipPath id="b"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath>
    <clipPath id="c"><path fill="#fff" d="M8 7.89h24v24H8z" /></clipPath>
  </defs>
</svg>`,oc=Ks`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M0 3a1 1 0 0 1 1-1h14a1 1 0 1 1 0 2H1a1 1 0 0 1-1-1Zm2.63 5.25a1 1 0 0 1 1-1h8.75a1 1 0 1 1 0 2H3.63a1 1 0 0 1-1-1Zm2.62 5.25a1 1 0 0 1 1-1h3.5a1 1 0 0 1 0 2h-3.5a1 1 0 0 1-1-1Z"
    clip-rule="evenodd"
  />
</svg>`,sc=Ks`<svg fill="none" viewBox="0 0 40 40">
  <g clip-path="url(#a)">
    <g clip-path="url(#b)">
      <circle cx="20" cy="19.89" r="20" fill="#1B1F23" />
      <g clip-path="url(#c)">
        <path
          fill="#fff"
          d="M8 19.89a12 12 0 1 1 15.8 11.38c-.6.12-.8-.26-.8-.57v-3.3c0-1.12-.4-1.85-.82-2.22 2.67-.3 5.48-1.31 5.48-5.92 0-1.31-.47-2.38-1.24-3.22.13-.3.54-1.52-.12-3.18 0 0-1-.32-3.3 1.23a11.54 11.54 0 0 0-6 0c-2.3-1.55-3.3-1.23-3.3-1.23a4.32 4.32 0 0 0-.12 3.18 4.64 4.64 0 0 0-1.24 3.22c0 4.6 2.8 5.63 5.47 5.93-.34.3-.65.83-.76 1.6-.69.31-2.42.84-3.5-1 0 0-.63-1.15-1.83-1.23 0 0-1.18-.02-.09.73 0 0 .8.37 1.34 1.76 0 0 .7 2.14 4.03 1.41v2.24c0 .31-.2.68-.8.57A12 12 0 0 1 8 19.9Z"
        />
      </g>
    </g>
  </g>
  <defs>
    <clipPath id="a"><rect width="40" height="40" fill="#fff" rx="20" /></clipPath>
    <clipPath id="b"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath>
    <clipPath id="c"><path fill="#fff" d="M8 7.89h24v24H8z" /></clipPath>
  </defs>
</svg>`,lc=Ks`<svg fill="none" viewBox="0 0 40 40">
  <g clip-path="url(#a)">
    <g clip-path="url(#b)">
      <circle cx="20" cy="19.89" r="20" fill="#fff" fill-opacity=".05" />
      <g clip-path="url(#c)">
        <path
          fill="#4285F4"
          d="M20 17.7v4.65h6.46a5.53 5.53 0 0 1-2.41 3.61l3.9 3.02c2.26-2.09 3.57-5.17 3.57-8.82 0-.85-.08-1.67-.22-2.46H20Z"
        />
        <path
          fill="#34A853"
          d="m13.27 22.17-.87.67-3.11 2.42A12 12 0 0 0 20 31.9c3.24 0 5.96-1.07 7.94-2.9l-3.9-3.03A7.15 7.15 0 0 1 20 27.12a7.16 7.16 0 0 1-6.72-4.94v-.01Z"
        />
        <path
          fill="#FBBC05"
          d="M9.29 14.5a11.85 11.85 0 0 0 0 10.76l3.99-3.1a7.19 7.19 0 0 1 0-4.55l-4-3.1Z"
        />
        <path
          fill="#EA4335"
          d="M20 12.66c1.77 0 3.34.61 4.6 1.8l3.43-3.44A11.51 11.51 0 0 0 20 7.89c-4.7 0-8.74 2.69-10.71 6.62l3.99 3.1A7.16 7.16 0 0 1 20 12.66Z"
        />
      </g>
    </g>
  </g>
  <defs>
    <clipPath id="a"><rect width="40" height="40" fill="#fff" rx="20" /></clipPath>
    <clipPath id="b"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath>
    <clipPath id="c"><path fill="#fff" d="M8 7.89h24v24H8z" /></clipPath>
  </defs>
</svg>`,cc=Ks`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    d="M8.51 5.66a.83.83 0 0 0-.57-.2.83.83 0 0 0-.52.28.8.8 0 0 0-.25.52 1 1 0 0 1-2 0c0-.75.34-1.43.81-1.91a2.75 2.75 0 0 1 4.78 1.92c0 1.24-.8 1.86-1.25 2.2l-.04.03c-.47.36-.5.43-.5.65a1 1 0 1 1-2 0c0-1.25.8-1.86 1.24-2.2l.04-.04c.47-.36.5-.43.5-.65 0-.3-.1-.49-.24-.6ZM9.12 11.87a1.13 1.13 0 1 1-2.25 0 1.13 1.13 0 0 1 2.25 0Z"
  />
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8Zm8-6a6 6 0 1 0 0 12A6 6 0 0 0 8 2Z"
    clip-rule="evenodd"
  />
</svg>`,uc=Ks`<svg fill="none" viewBox="0 0 14 15">
  <path
    fill="currentColor"
    d="M6 10.49a1 1 0 1 0 2 0v-2a1 1 0 0 0-2 0v2ZM7 4.49a1 1 0 1 0 0 2 1 1 0 0 0 0-2Z"
  />
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M7 14.99a7 7 0 1 0 0-14 7 7 0 0 0 0 14Zm5-7a5 5 0 1 1-10 0 5 5 0 0 1 10 0Z"
    clip-rule="evenodd"
  />
</svg>`,dc=Ks`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M4.83 1.34h6.34c.68 0 1.26 0 1.73.04.5.05.97.15 1.42.4.52.3.95.72 1.24 1.24.26.45.35.92.4 1.42.04.47.04 1.05.04 1.73v3.71c0 .69 0 1.26-.04 1.74-.05.5-.14.97-.4 1.41-.3.52-.72.95-1.24 1.25-.45.25-.92.35-1.42.4-.47.03-1.05.03-1.73.03H4.83c-.68 0-1.26 0-1.73-.04-.5-.04-.97-.14-1.42-.4-.52-.29-.95-.72-1.24-1.24a3.39 3.39 0 0 1-.4-1.41A20.9 20.9 0 0 1 0 9.88v-3.7c0-.7 0-1.27.04-1.74.05-.5.14-.97.4-1.42.3-.52.72-.95 1.24-1.24.45-.25.92-.35 1.42-.4.47-.04 1.05-.04 1.73-.04ZM3.28 3.38c-.36.03-.51.08-.6.14-.21.11-.39.29-.5.5a.8.8 0 0 0-.08.19l5.16 3.44c.45.3 1.03.3 1.48 0L13.9 4.2a.79.79 0 0 0-.08-.2c-.11-.2-.29-.38-.5-.5-.09-.05-.24-.1-.6-.13-.37-.04-.86-.04-1.6-.04H4.88c-.73 0-1.22 0-1.6.04ZM14 6.54 9.85 9.31a3.33 3.33 0 0 1-3.7 0L2 6.54v3.3c0 .74 0 1.22.03 1.6.04.36.1.5.15.6.11.2.29.38.5.5.09.05.24.1.6.14.37.03.86.03 1.6.03h6.25c.73 0 1.22 0 1.6-.03.35-.03.5-.09.6-.14.2-.12.38-.3.5-.5.05-.1.1-.24.14-.6.03-.38.03-.86.03-1.6v-3.3Z"
    clip-rule="evenodd"
  />
</svg>`,pc=Ks`<svg fill="none" viewBox="0 0 20 20">
  <path fill="currentColor" d="M10.81 5.81a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z" />
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M3 4.75A4.75 4.75 0 0 1 7.75 0h4.5A4.75 4.75 0 0 1 17 4.75v10.5A4.75 4.75 0 0 1 12.25 20h-4.5A4.75 4.75 0 0 1 3 15.25V4.75ZM7.75 2A2.75 2.75 0 0 0 5 4.75v10.5A2.75 2.75 0 0 0 7.75 18h4.5A2.75 2.75 0 0 0 15 15.25V4.75A2.75 2.75 0 0 0 12.25 2h-4.5Z"
    clip-rule="evenodd"
  />
</svg>`,hc=Ks`<svg fill="none" viewBox="0 0 22 20">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M16.32 13.62a3.14 3.14 0 1 1-.99 1.72l-1.6-.93a3.83 3.83 0 0 1-3.71 1 3.66 3.66 0 0 1-1.74-1l-1.6.94a3.14 3.14 0 1 1-1-1.73l1.6-.94a3.7 3.7 0 0 1 0-2 3.81 3.81 0 0 1 1.8-2.33c.29-.17.6-.3.92-.38V6.1a3.14 3.14 0 1 1 2 0l-.01.02v1.85H12a3.82 3.82 0 0 1 2.33 1.8 3.7 3.7 0 0 1 .39 2.91l1.6.93ZM2.6 16.54a1.14 1.14 0 0 0 1.98-1.14 1.14 1.14 0 0 0-1.98 1.14ZM11 2.01a1.14 1.14 0 1 0 0 2.28 1.14 1.14 0 0 0 0-2.28Zm1.68 10.45c.08-.19.14-.38.16-.58v-.05l.02-.13v-.13a1.92 1.92 0 0 0-.24-.8l-.11-.15a1.89 1.89 0 0 0-.74-.6 1.86 1.86 0 0 0-.77-.17h-.19a1.97 1.97 0 0 0-.89.34 1.98 1.98 0 0 0-.61.74 1.99 1.99 0 0 0-.16.9v.05a1.87 1.87 0 0 0 .24.74l.1.15c.12.16.26.3.42.42l.16.1.13.07.04.02a1.84 1.84 0 0 0 .76.17h.17a2 2 0 0 0 .91-.35 1.78 1.78 0 0 0 .52-.58l.03-.05a.84.84 0 0 0 .05-.11Zm5.15 4.5a1.14 1.14 0 0 0 1.14-1.97 1.13 1.13 0 0 0-1.55.41c-.32.55-.13 1.25.41 1.56Z"
    clip-rule="evenodd"
  />
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M4.63 9.43a1.5 1.5 0 1 0 1.5-2.6 1.5 1.5 0 0 0-1.5 2.6Zm.32-1.55a.5.5 0 0 1 .68-.19.5.5 0 0 1 .18.68.5.5 0 0 1-.68.19.5.5 0 0 1-.18-.68ZM17.94 8.88a1.5 1.5 0 1 1-2.6-1.5 1.5 1.5 0 1 1 2.6 1.5ZM16.9 7.69a.5.5 0 0 0-.68.19.5.5 0 0 0 .18.68.5.5 0 0 0 .68-.19.5.5 0 0 0-.18-.68ZM9.75 17.75a1.5 1.5 0 1 1 2.6 1.5 1.5 1.5 0 1 1-2.6-1.5Zm1.05 1.18a.5.5 0 0 0 .68-.18.5.5 0 0 0-.18-.68.5.5 0 0 0-.68.18.5.5 0 0 0 .18.68Z"
    clip-rule="evenodd"
  />
</svg>`,fc=Ks`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M9.13 1h1.71c1.46 0 2.63 0 3.56.1.97.1 1.8.33 2.53.85a5 5 0 0 1 1.1 1.11c.53.73.75 1.56.86 2.53.1.93.1 2.1.1 3.55v1.72c0 1.45 0 2.62-.1 3.55-.1.97-.33 1.8-.86 2.53a5 5 0 0 1-1.1 1.1c-.73.53-1.56.75-2.53.86-.93.1-2.1.1-3.55.1H9.13c-1.45 0-2.62 0-3.56-.1-.96-.1-1.8-.33-2.52-.85a5 5 0 0 1-1.1-1.11 5.05 5.05 0 0 1-.86-2.53c-.1-.93-.1-2.1-.1-3.55V9.14c0-1.45 0-2.62.1-3.55.1-.97.33-1.8.85-2.53a5 5 0 0 1 1.1-1.1 5.05 5.05 0 0 1 2.53-.86C6.51 1 7.67 1 9.13 1ZM5.79 3.09a3.1 3.1 0 0 0-1.57.48 3 3 0 0 0-.66.67c-.24.32-.4.77-.48 1.56-.1.82-.1 1.88-.1 3.4v1.6c0 1.15 0 2.04.05 2.76l.41-.42c.5-.5.93-.92 1.32-1.24.41-.33.86-.6 1.43-.7a3 3 0 0 1 .94 0c.35.06.66.2.95.37a17.11 17.11 0 0 0 .8.45c.1-.08.2-.2.41-.4l.04-.03a27 27 0 0 1 1.95-1.84 4.03 4.03 0 0 1 1.91-.94 4 4 0 0 1 1.25 0c.73.11 1.33.46 1.91.94l.64.55V9.2c0-1.52 0-2.58-.1-3.4a3.1 3.1 0 0 0-.48-1.56 3 3 0 0 0-.66-.67 3.1 3.1 0 0 0-1.56-.48C13.37 3 12.3 3 10.79 3h-1.6c-1.52 0-2.59 0-3.4.09Zm11.18 10-.04-.05a26.24 26.24 0 0 0-1.83-1.74c-.45-.36-.73-.48-.97-.52a2 2 0 0 0-.63 0c-.24.04-.51.16-.97.52-.46.38-1.01.93-1.83 1.74l-.02.02c-.17.18-.34.34-.49.47a2.04 2.04 0 0 1-1.08.5 1.97 1.97 0 0 1-1.25-.27l-.79-.46-.02-.02a.65.65 0 0 0-.24-.1 1 1 0 0 0-.31 0c-.08.02-.21.06-.49.28-.3.24-.65.59-1.2 1.14l-.56.56-.65.66a3 3 0 0 0 .62.6c.33.24.77.4 1.57.49.81.09 1.88.09 3.4.09h1.6c1.52 0 2.58 0 3.4-.09a3.1 3.1 0 0 0 1.56-.48 3 3 0 0 0 .66-.67c.24-.32.4-.77.49-1.56l.07-1.12Zm-8.02-1.03ZM4.99 7a2 2 0 1 1 4 0 2 2 0 0 1-4 0Z"
    clip-rule="evenodd"
  />
</svg>`,mc=Ks`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M8 0a1 1 0 0 1 1 1v5.38a1 1 0 0 1-2 0V1a1 1 0 0 1 1-1ZM5.26 2.6a1 1 0 0 1-.28 1.39 5.46 5.46 0 1 0 6.04 0 1 1 0 1 1 1.1-1.67 7.46 7.46 0 1 1-8.25 0 1 1 0 0 1 1.4.28Z"
    clip-rule="evenodd"
  />
</svg>`,gc=Ks` <svg
  width="36"
  height="36"
  fill="none"
>
  <path
    d="M0 8a8 8 0 0 1 8-8h20a8 8 0 0 1 8 8v20a8 8 0 0 1-8 8H8a8 8 0 0 1-8-8V8Z"
    fill="#fff"
    fill-opacity=".05"
  />
  <path
    d="m18.262 17.513-8.944 9.49v.01a2.417 2.417 0 0 0 3.56 1.452l.026-.017 10.061-5.803-4.703-5.132Z"
    fill="#EA4335"
  />
  <path
    d="m27.307 15.9-.008-.008-4.342-2.52-4.896 4.36 4.913 4.912 4.325-2.494a2.42 2.42 0 0 0 .008-4.25Z"
    fill="#FBBC04"
  />
  <path
    d="M9.318 8.997c-.05.202-.084.403-.084.622V26.39c0 .218.025.42.084.621l9.246-9.247-9.246-8.768Z"
    fill="#4285F4"
  />
  <path
    d="m18.33 18 4.627-4.628-10.053-5.828a2.427 2.427 0 0 0-3.586 1.444L18.329 18Z"
    fill="#34A853"
  />
  <path
    d="M8 .5h20A7.5 7.5 0 0 1 35.5 8v20a7.5 7.5 0 0 1-7.5 7.5H8A7.5 7.5 0 0 1 .5 28V8A7.5 7.5 0 0 1 8 .5Z"
    stroke="#fff"
    stroke-opacity=".05"
  />
</svg>`,wc=Ks`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    d="M3 6a3 3 0 0 1 3-3h1a1 1 0 1 0 0-2H6a5 5 0 0 0-5 5v1a1 1 0 0 0 2 0V6ZM13 1a1 1 0 1 0 0 2h1a3 3 0 0 1 3 3v1a1 1 0 1 0 2 0V6a5 5 0 0 0-5-5h-1ZM3 13a1 1 0 1 0-2 0v1a5 5 0 0 0 5 5h1a1 1 0 1 0 0-2H6a3 3 0 0 1-3-3v-1ZM19 13a1 1 0 1 0-2 0v1a3 3 0 0 1-3 3h-1a1 1 0 1 0 0 2h1.01a5 5 0 0 0 5-5v-1ZM5.3 6.36c-.04.2-.04.43-.04.89s0 .7.05.89c.14.52.54.92 1.06 1.06.19.05.42.05.89.05.46 0 .7 0 .88-.05A1.5 1.5 0 0 0 9.2 8.14c.06-.2.06-.43.06-.89s0-.7-.06-.89A1.5 1.5 0 0 0 8.14 5.3c-.19-.05-.42-.05-.88-.05-.47 0-.7 0-.9.05a1.5 1.5 0 0 0-1.05 1.06ZM10.8 6.36c-.04.2-.04.43-.04.89s0 .7.05.89c.14.52.54.92 1.06 1.06.19.05.42.05.89.05.46 0 .7 0 .88-.05a1.5 1.5 0 0 0 1.06-1.06c.06-.2.06-.43.06-.89s0-.7-.06-.89a1.5 1.5 0 0 0-1.06-1.06c-.19-.05-.42-.05-.88-.05-.47 0-.7 0-.9.05a1.5 1.5 0 0 0-1.05 1.06ZM5.26 12.75c0-.46 0-.7.05-.89a1.5 1.5 0 0 1 1.06-1.06c.19-.05.42-.05.89-.05.46 0 .7 0 .88.05.52.14.93.54 1.06 1.06.06.2.06.43.06.89s0 .7-.06.89a1.5 1.5 0 0 1-1.06 1.06c-.19.05-.42.05-.88.05-.47 0-.7 0-.9-.05a1.5 1.5 0 0 1-1.05-1.06c-.05-.2-.05-.43-.05-.89ZM10.8 11.86c-.04.2-.04.43-.04.89s0 .7.05.89c.14.52.54.92 1.06 1.06.19.05.42.05.89.05.46 0 .7 0 .88-.05a1.5 1.5 0 0 0 1.06-1.06c.06-.2.06-.43.06-.89s0-.7-.06-.89a1.5 1.5 0 0 0-1.06-1.06c-.19-.05-.42-.05-.88-.05-.47 0-.7 0-.9.05a1.5 1.5 0 0 0-1.05 1.06Z"
  />
</svg>`,yc=Ks`<svg fill="none" viewBox="0 0 14 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M3.94 1.04a1 1 0 0 1 .7 1.23l-.48 1.68a5.85 5.85 0 0 1 8.53 4.32 5.86 5.86 0 0 1-11.4 2.56 1 1 0 0 1 1.9-.57 3.86 3.86 0 1 0 1.83-4.5l1.87.53a1 1 0 0 1-.55 1.92l-4.1-1.15a1 1 0 0 1-.69-1.23l1.16-4.1a1 1 0 0 1 1.23-.7Z"
    clip-rule="evenodd"
  />
</svg>`,vc=Ks`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M9.36 4.21a5.14 5.14 0 1 0 0 10.29 5.14 5.14 0 0 0 0-10.29ZM1.64 9.36a7.71 7.71 0 1 1 14 4.47l2.52 2.5a1.29 1.29 0 1 1-1.82 1.83l-2.51-2.51A7.71 7.71 0 0 1 1.65 9.36Z"
    clip-rule="evenodd"
  />
</svg>`,bc=Ks`<svg fill="none" viewBox="0 0 21 20">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M14.3808 4.34812C13.72 4.47798 12.8501 4.7587 11.5748 5.17296L9.00869 6.00646C6.90631 6.68935 5.40679 7.17779 4.38121 7.63178C3.87166 7.85734 3.5351 8.05091 3.32022 8.22035C3.11183 8.38466 3.07011 8.48486 3.05969 8.51817C2.98058 8.77103 2.98009 9.04195 3.05831 9.29509C3.06861 9.32844 3.10998 9.42878 3.31777 9.59384C3.53205 9.76404 3.86792 9.95881 4.37667 10.1862C5.29287 10.5957 6.58844 11.0341 8.35529 11.6164L10.8876 8.59854C11.2426 8.17547 11.8733 8.12028 12.2964 8.47528C12.7195 8.83029 12.7746 9.46104 12.4196 9.88412L9.88738 12.9019C10.7676 14.5408 11.4244 15.7406 11.9867 16.5718C12.299 17.0333 12.5491 17.3303 12.7539 17.5117C12.9526 17.6877 13.0586 17.711 13.0932 17.7154C13.3561 17.7484 13.6228 17.7009 13.8581 17.5791C13.8891 17.563 13.9805 17.5046 14.1061 17.2708C14.2357 17.0298 14.3679 16.6647 14.5015 16.1237C14.7705 15.0349 14.9912 13.4733 15.2986 11.2843L15.6738 8.61249C15.8603 7.28456 15.9857 6.37917 15.9989 5.7059C16.012 5.03702 15.9047 4.8056 15.8145 4.69183C15.7044 4.55297 15.5673 4.43792 15.4114 4.35365C15.2837 4.28459 15.0372 4.2191 14.3808 4.34812ZM7.99373 13.603C6.11919 12.9864 4.6304 12.4902 3.5606 12.0121C2.98683 11.7557 2.4778 11.4808 2.07383 11.1599C1.66337 10.8339 1.31312 10.4217 1.14744 9.88551C0.949667 9.24541 0.950886 8.56035 1.15094 7.92096C1.31852 7.38534 1.67024 6.97442 2.08185 6.64985C2.48697 6.33041 2.99697 6.05734 3.57166 5.80295C4.70309 5.3021 6.30179 4.78283 8.32903 4.12437L11.0196 3.25042C12.2166 2.86159 13.2017 2.54158 13.9951 2.38566C14.8065 2.22618 15.6202 2.19289 16.3627 2.59437C16.7568 2.80747 17.1035 3.09839 17.3818 3.4495C17.9062 4.111 18.0147 4.91815 17.9985 5.74496C17.9827 6.55332 17.8386 7.57903 17.6636 8.82534L17.2701 11.6268C16.9737 13.7376 16.7399 15.4022 16.4432 16.6034C16.2924 17.2135 16.1121 17.7632 15.8678 18.2176C15.6197 18.6794 15.2761 19.0971 14.7777 19.3551C14.1827 19.6632 13.5083 19.7833 12.8436 19.6997C12.2867 19.6297 11.82 19.3563 11.4277 19.0087C11.0415 18.6666 10.6824 18.213 10.3302 17.6925C9.67361 16.722 8.92648 15.342 7.99373 13.603Z"
    clip-rule="evenodd"
  />
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="21"
    height="20"
    viewBox="0 0 21 20"
    fill="none"
  ></svg></svg
>`,xc=Ks`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M6.76.3a1 1 0 0 1 0 1.4L4.07 4.4h9a1 1 0 1 1 0 2h-9l2.69 2.68a1 1 0 1 1-1.42 1.42L.95 6.09a1 1 0 0 1 0-1.4l4.4-4.4a1 1 0 0 1 1.4 0Zm6.49 9.21a1 1 0 0 1 1.41 0l4.39 4.4a1 1 0 0 1 0 1.4l-4.39 4.4a1 1 0 0 1-1.41-1.42l2.68-2.68h-9a1 1 0 0 1 0-2h9l-2.68-2.68a1 1 0 0 1 0-1.42Z"
    clip-rule="evenodd"
  />
</svg>`,Cc=Ks`<svg width="10" height="10" viewBox="0 0 10 10">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M3.77986 0.566631C4.0589 0.845577 4.0589 1.29784 3.77986 1.57678L3.08261 2.2738H6.34184C6.73647 2.2738 7.05637 2.5936 7.05637 2.98808C7.05637 3.38257 6.73647 3.70237 6.34184 3.70237H3.08261L3.77986 4.39938C4.0589 4.67833 4.0589 5.13059 3.77986 5.40954C3.50082 5.68848 3.04841 5.68848 2.76937 5.40954L0.852346 3.49316C0.573306 3.21421 0.573306 2.76195 0.852346 2.48301L2.76937 0.566631C3.04841 0.287685 3.50082 0.287685 3.77986 0.566631ZM6.22 4.59102C6.49904 4.31208 6.95145 4.31208 7.23049 4.59102L9.14751 6.5074C9.42655 6.78634 9.42655 7.23861 9.14751 7.51755L7.23049 9.43393C6.95145 9.71287 6.49904 9.71287 6.22 9.43393C5.94096 9.15498 5.94096 8.70272 6.22 8.42377L6.91725 7.72676L3.65802 7.72676C3.26339 7.72676 2.94349 7.40696 2.94349 7.01247C2.94349 6.61798 3.26339 6.29819 3.65802 6.29819L6.91725 6.29819L6.22 5.60117C5.94096 5.32223 5.94096 4.86997 6.22 4.59102Z"
    clip-rule="evenodd"
  />
</svg>`,_c=Ks`<svg
  width="14"
  height="14"
  viewBox="0 0 14 14"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M13.7306 3.24213C14.0725 3.58384 14.0725 4.13786 13.7306 4.47957L10.7418 7.46737C10.4 7.80908 9.84581 7.80908 9.50399 7.46737C9.16216 7.12567 9.16216 6.57165 9.50399 6.22994L10.9986 4.73585H5.34082C4.85741 4.73585 4.46553 4.3441 4.46553 3.86085C4.46553 3.3776 4.85741 2.98585 5.34082 2.98585L10.9986 2.98585L9.50399 1.49177C9.16216 1.15006 9.16216 0.596037 9.50399 0.254328C9.84581 -0.0873803 10.4 -0.0873803 10.7418 0.254328L13.7306 3.24213ZM9.52515 10.1352C9.52515 10.6185 9.13327 11.0102 8.64986 11.0102L2.9921 11.0102L4.48669 12.5043C4.82852 12.846 4.82852 13.4001 4.48669 13.7418C4.14487 14.0835 3.59066 14.0835 3.24884 13.7418L0.26003 10.754C0.0958806 10.5899 0.0036621 10.3673 0.00366211 10.1352C0.00366212 9.90318 0.0958806 9.68062 0.26003 9.51652L3.24884 6.52872C3.59066 6.18701 4.14487 6.18701 4.48669 6.52872C4.82851 6.87043 4.82851 7.42445 4.48669 7.76616L2.9921 9.26024L8.64986 9.26024C9.13327 9.26024 9.52515 9.65199 9.52515 10.1352Z"
    fill="currentColor"
  />
</svg>

`,Ec=Ks`<svg fill="none" viewBox="0 0 14 14">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M3.48 2.18a1 1 0 0 1 1.41 0l2.68 2.68a1 1 0 1 1-1.41 1.42l-.98-.98v4.56a1 1 0 0 1-2 0V5.3l-.97.98A1 1 0 0 1 .79 4.86l2.69-2.68Zm6.34 2.93a1 1 0 0 1 1 1v4.56l.97-.98a1 1 0 1 1 1.42 1.42l-2.69 2.68a1 1 0 0 1-1.41 0l-2.68-2.68a1 1 0 0 1 1.41-1.42l.98.98V6.1a1 1 0 0 1 1-1Z"
    clip-rule="evenodd"
  />
</svg>`,kc=Ks`<svg fill="none" viewBox="0 0 40 40">
  <g clip-path="url(#a)">
    <g clip-path="url(#b)">
      <circle cx="20" cy="19.89" r="20" fill="#5865F2" />
      <path
        fill="#fff"
        fill-rule="evenodd"
        d="M25.71 28.15C30.25 28 32 25.02 32 25.02c0-6.61-2.96-11.98-2.96-11.98-2.96-2.22-5.77-2.15-5.77-2.15l-.29.32c3.5 1.07 5.12 2.61 5.12 2.61a16.75 16.75 0 0 0-10.34-1.93l-.35.04a15.43 15.43 0 0 0-5.88 1.9s1.71-1.63 5.4-2.7l-.2-.24s-2.81-.07-5.77 2.15c0 0-2.96 5.37-2.96 11.98 0 0 1.73 2.98 6.27 3.13l1.37-1.7c-2.6-.79-3.6-2.43-3.6-2.43l.58.35.09.06.08.04.02.01.08.05a17.25 17.25 0 0 0 4.52 1.58 14.4 14.4 0 0 0 8.3-.86c.72-.27 1.52-.66 2.37-1.21 0 0-1.03 1.68-3.72 2.44.61.78 1.35 1.67 1.35 1.67Zm-9.55-9.6c-1.17 0-2.1 1.03-2.1 2.28 0 1.25.95 2.28 2.1 2.28 1.17 0 2.1-1.03 2.1-2.28.01-1.25-.93-2.28-2.1-2.28Zm7.5 0c-1.17 0-2.1 1.03-2.1 2.28 0 1.25.95 2.28 2.1 2.28 1.17 0 2.1-1.03 2.1-2.28 0-1.25-.93-2.28-2.1-2.28Z"
        clip-rule="evenodd"
      />
    </g>
  </g>
  <defs>
    <clipPath id="a"><rect width="40" height="40" fill="#fff" rx="20" /></clipPath>
    <clipPath id="b"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath>
  </defs>
</svg> `,Tc=Ks`<svg fill="none" viewBox="0 0 40 40">
  <g clip-path="url(#a)">
    <g clip-path="url(#b)">
      <circle cx="20" cy="19.89" r="20" fill="#5A3E85" />
      <g clip-path="url(#c)">
        <path
          fill="#fff"
          d="M18.22 25.7 20 23.91h3.34l2.1-2.1v-6.68H15.4v8.78h2.82v1.77Zm3.87-8.16h1.25v3.66H22.1v-3.66Zm-3.34 0H20v3.66h-1.25v-3.66ZM20 7.9a12 12 0 1 0 0 24 12 12 0 0 0 0-24Zm6.69 14.56-3.66 3.66h-2.72l-1.77 1.78h-1.88V26.1H13.3v-9.82l.94-2.4H26.7v8.56Z"
        />
      </g>
    </g>
  </g>
  <defs>
    <clipPath id="a"><rect width="40" height="40" fill="#fff" rx="20" /></clipPath>
    <clipPath id="b"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath>
    <clipPath id="c"><path fill="#fff" d="M8 7.89h24v24H8z" /></clipPath>
  </defs>
</svg>`,Ac=Ks`<svg fill="none" viewBox="0 0 40 40">
  <g clip-path="url(#a)">
    <g clip-path="url(#b)">
      <circle cx="20" cy="19.89" r="20" fill="#1D9BF0" />
      <path
        fill="#fff"
        d="M30 13.81c-.74.33-1.53.55-2.36.65.85-.51 1.5-1.32 1.8-2.27-.79.47-1.66.8-2.6 1a4.1 4.1 0 0 0-7 3.73c-3.4-.17-6.42-1.8-8.45-4.28a4.1 4.1 0 0 0 1.27 5.47c-.67-.02-1.3-.2-1.86-.5a4.1 4.1 0 0 0 3.3 4.07c-.58.15-1.21.19-1.86.07a4.1 4.1 0 0 0 3.83 2.85A8.25 8.25 0 0 1 10 26.3a11.62 11.62 0 0 0 6.29 1.84c7.62 0 11.92-6.44 11.66-12.2.8-.59 1.5-1.3 2.05-2.13Z"
      />
    </g>
  </g>
  <defs>
    <clipPath id="a"><rect width="40" height="40" fill="#fff" rx="20" /></clipPath>
    <clipPath id="b"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath>
  </defs>
</svg>`,$c=Ks`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    d="m14.36 4.74.01.42c0 4.34-3.3 9.34-9.34 9.34A9.3 9.3 0 0 1 0 13.03a6.6 6.6 0 0 0 4.86-1.36 3.29 3.29 0 0 1-3.07-2.28c.5.1 1 .07 1.48-.06A3.28 3.28 0 0 1 .64 6.11v-.04c.46.26.97.4 1.49.41A3.29 3.29 0 0 1 1.11 2.1a9.32 9.32 0 0 0 6.77 3.43 3.28 3.28 0 0 1 5.6-3 6.59 6.59 0 0 0 2.08-.8 3.3 3.3 0 0 1-1.45 1.82A6.53 6.53 0 0 0 16 3.04c-.44.66-1 1.23-1.64 1.7Z"
  />
</svg>`,Ic=Ks`<svg fill="none" viewBox="0 0 28 28">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M18.1 4.76c-.42-.73-1.33-1.01-2.09-.66l-1.42.66c-.37.18-.8.18-1.18 0l-1.4-.65a1.63 1.63 0 0 0-2.1.66l-.84 1.45c-.2.34-.53.59-.92.67l-1.7.35c-.83.17-1.39.94-1.3 1.78l.19 1.56c.04.39-.08.78-.33 1.07l-1.12 1.3c-.52.6-.52 1.5 0 2.11L5 16.38c.25.3.37.68.33 1.06l-.18 1.57c-.1.83.46 1.6 1.28 1.78l1.7.35c.4.08.73.32.93.66l.84 1.43a1.63 1.63 0 0 0 2.09.66l1.41-.66c.37-.17.8-.17 1.18 0l1.43.67c.76.35 1.66.07 2.08-.65l.86-1.45c.2-.34.54-.58.92-.66l1.68-.35A1.63 1.63 0 0 0 22.84 19l-.18-1.57a1.4 1.4 0 0 1 .33-1.06l1.12-1.32c.52-.6.52-1.5 0-2.11l-1.12-1.3a1.4 1.4 0 0 1-.33-1.07l.18-1.57c.1-.83-.46-1.6-1.28-1.77l-1.68-.35a1.4 1.4 0 0 1-.92-.66l-.86-1.47Zm-3.27-3.2a4.43 4.43 0 0 1 5.69 1.78l.54.93 1.07.22a4.43 4.43 0 0 1 3.5 4.84l-.11.96.7.83a4.43 4.43 0 0 1 .02 5.76l-.72.85.1.96a4.43 4.43 0 0 1-3.5 4.84l-1.06.22-.54.92a4.43 4.43 0 0 1-5.68 1.77l-.84-.4-.82.39a4.43 4.43 0 0 1-5.7-1.79l-.51-.89-1.09-.22a4.43 4.43 0 0 1-3.5-4.84l.1-.96-.72-.85a4.43 4.43 0 0 1 .01-5.76l.71-.83-.1-.95a4.43 4.43 0 0 1 3.5-4.84l1.08-.23.53-.9a4.43 4.43 0 0 1 5.7-1.8l.81.38.83-.39ZM18.2 9.4c.65.42.84 1.28.42 1.93l-4.4 6.87a1.4 1.4 0 0 1-2.26.14L9.5 15.39a1.4 1.4 0 0 1 2.15-1.8l1.23 1.48 3.38-5.26a1.4 1.4 0 0 1 1.93-.42Z"
    clip-rule="evenodd"
  />
</svg>`,Pc=Ks`<svg fill="none" viewBox="0 0 14 14">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="m4.1 12.43-.45-.78-.93-.2a1.65 1.65 0 0 1-1.31-1.8l.1-.86-.61-.71a1.65 1.65 0 0 1 0-2.16l.6-.7-.09-.85c-.1-.86.47-1.64 1.3-1.81l.94-.2.45-.78A1.65 1.65 0 0 1 6.23.9l.77.36.78-.36c.77-.36 1.69-.07 2.12.66l.47.8.91.2c.84.17 1.4.95 1.31 1.8l-.1.86.6.7c.54.62.54 1.54.01 2.16l-.6.71.09.86c.1.85-.47 1.63-1.3 1.8l-.92.2-.47.79a1.65 1.65 0 0 1-2.12.66L7 12.74l-.77.36c-.78.35-1.7.07-2.13-.67Zm5.74-6.9a1 1 0 1 0-1.68-1.07L6.32 7.3l-.55-.66a1 1 0 0 0-1.54 1.28l1.43 1.71a1 1 0 0 0 1.61-.1l2.57-4Z"
    clip-rule="evenodd"
  />
</svg>`,Sc=Ks`
  <svg fill="none" viewBox="0 0 48 44">
    <path
      style="fill: var(--wui-color-bg-300);"
      d="M4.56 8.64c-1.23 1.68-1.23 4.08-1.23 8.88v8.96c0 4.8 0 7.2 1.23 8.88.39.55.87 1.02 1.41 1.42C7.65 38 10.05 38 14.85 38h14.3c4.8 0 7.2 0 8.88-1.22a6.4 6.4 0 0 0 1.41-1.42c.83-1.14 1.1-2.6 1.19-4.92a6.4 6.4 0 0 0 5.16-4.65c.21-.81.21-1.8.21-3.79 0-1.98 0-2.98-.22-3.79a6.4 6.4 0 0 0-5.15-4.65c-.1-2.32-.36-3.78-1.19-4.92a6.4 6.4 0 0 0-1.41-1.42C36.35 6 33.95 6 29.15 6h-14.3c-4.8 0-7.2 0-8.88 1.22a6.4 6.4 0 0 0-1.41 1.42Z"
    />
    <path
      style="fill: var(--wui-color-fg-200);"
      fill-rule="evenodd"
      d="M2.27 11.33a6.4 6.4 0 0 1 6.4-6.4h26.66a6.4 6.4 0 0 1 6.4 6.4v1.7a6.4 6.4 0 0 1 5.34 6.3v5.34a6.4 6.4 0 0 1-5.34 6.3v1.7a6.4 6.4 0 0 1-6.4 6.4H8.67a6.4 6.4 0 0 1-6.4-6.4V11.33ZM39.6 31.07h-6.93a9.07 9.07 0 1 1 0-18.14h6.93v-1.6a4.27 4.27 0 0 0-4.27-4.26H8.67a4.27 4.27 0 0 0-4.27 4.26v21.34a4.27 4.27 0 0 0 4.27 4.26h26.66a4.27 4.27 0 0 0 4.27-4.26v-1.6Zm-6.93-16a6.93 6.93 0 0 0 0 13.86h8a4.27 4.27 0 0 0 4.26-4.26v-5.34a4.27 4.27 0 0 0-4.26-4.26h-8Z"
      clip-rule="evenodd"
    />
  </svg>
`,Rc=Ks`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M0 5.5c0-1.8 1.46-3.25 3.25-3.25H14.5c1.8 0 3.25 1.46 3.25 3.25v.28A3.25 3.25 0 0 1 20 8.88v2.24c0 1.45-.94 2.68-2.25 3.1v.28c0 1.8-1.46 3.25-3.25 3.25H3.25A3.25 3.25 0 0 1 0 14.5v-9Zm15.75 8.88h-2.38a4.38 4.38 0 0 1 0-8.76h2.38V5.5c0-.69-.56-1.25-1.25-1.25H3.25C2.56 4.25 2 4.81 2 5.5v9c0 .69.56 1.25 1.25 1.25H14.5c.69 0 1.25-.56 1.25-1.25v-.13Zm-2.38-6.76a2.37 2.37 0 1 0 0 4.75h3.38c.69 0 1.25-.55 1.25-1.24V8.87c0-.69-.56-1.24-1.25-1.24h-3.38Z"
    clip-rule="evenodd"
  />
</svg>`,Oc=Ks`<svg fill="none" viewBox="0 0 96 67">
  <path
    fill="currentColor"
    d="M25.32 18.8a32.56 32.56 0 0 1 45.36 0l1.5 1.47c.63.62.63 1.61 0 2.22l-5.15 5.05c-.31.3-.82.3-1.14 0l-2.07-2.03a22.71 22.71 0 0 0-31.64 0l-2.22 2.18c-.31.3-.82.3-1.14 0l-5.15-5.05a1.55 1.55 0 0 1 0-2.22l1.65-1.62Zm56.02 10.44 4.59 4.5c.63.6.63 1.6 0 2.21l-20.7 20.26c-.62.61-1.63.61-2.26 0L48.28 41.83a.4.4 0 0 0-.56 0L33.03 56.21c-.63.61-1.64.61-2.27 0L10.07 35.95a1.55 1.55 0 0 1 0-2.22l4.59-4.5a1.63 1.63 0 0 1 2.27 0L31.6 43.63a.4.4 0 0 0 .57 0l14.69-14.38a1.63 1.63 0 0 1 2.26 0l14.69 14.38a.4.4 0 0 0 .57 0l14.68-14.38a1.63 1.63 0 0 1 2.27 0Z"
  />
  <path
    stroke="#000"
    stroke-opacity=".1"
    d="M25.67 19.15a32.06 32.06 0 0 1 44.66 0l1.5 1.48c.43.42.43 1.09 0 1.5l-5.15 5.05a.31.31 0 0 1-.44 0l-2.07-2.03a23.21 23.21 0 0 0-32.34 0l-2.22 2.18a.31.31 0 0 1-.44 0l-5.15-5.05a1.05 1.05 0 0 1 0-1.5l1.65-1.63ZM81 29.6l4.6 4.5c.42.41.42 1.09 0 1.5l-20.7 20.26c-.43.43-1.14.43-1.57 0L48.63 41.47a.9.9 0 0 0-1.26 0L32.68 55.85c-.43.43-1.14.43-1.57 0L10.42 35.6a1.05 1.05 0 0 1 0-1.5l4.59-4.5a1.13 1.13 0 0 1 1.57 0l14.68 14.38a.9.9 0 0 0 1.27 0l-.35-.35.35.35L47.22 29.6a1.13 1.13 0 0 1 1.56 0l14.7 14.38a.9.9 0 0 0 1.26 0L79.42 29.6a1.13 1.13 0 0 1 1.57 0Z"
  />
</svg>`,Nc=Ks`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    d="M11 6.67a1 1 0 1 0-2 0v2.66a1 1 0 0 0 2 0V6.67ZM10 14.5a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5Z"
  />
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M10 1a9 9 0 1 0 0 18 9 9 0 0 0 0-18Zm-7 9a7 7 0 1 1 14 0 7 7 0 0 1-14 0Z"
    clip-rule="evenodd"
  />
</svg>`,Mc=Ks`<svg
  fill="none"
  viewBox="0 0 21 20"
>
  <path
    fill="currentColor"
    d="M8.8071 0.292893C9.19763 0.683417 9.19763 1.31658 8.8071 1.70711L6.91421 3.6H11.8404C14.3368 3.6 16.5533 5.1975 17.3427 7.56588L17.4487 7.88377C17.6233 8.40772 17.3402 8.97404 16.8162 9.14868C16.2923 9.32333 15.726 9.04017 15.5513 8.51623L15.4453 8.19834C14.9281 6.64664 13.476 5.6 11.8404 5.6H6.91421L8.8071 7.49289C9.19763 7.88342 9.19763 8.51658 8.8071 8.90711C8.41658 9.29763 7.78341 9.29763 7.39289 8.90711L3.79289 5.30711C3.40236 4.91658 3.40236 4.28342 3.79289 3.89289L7.39289 0.292893C7.78341 -0.0976311 8.41658 -0.0976311 8.8071 0.292893ZM4.18377 10.8513C4.70771 10.6767 5.27403 10.9598 5.44868 11.4838L5.55464 11.8017C6.07188 13.3534 7.52401 14.4 9.15964 14.4L14.0858 14.4L12.1929 12.5071C11.8024 12.1166 11.8024 11.4834 12.1929 11.0929C12.5834 10.7024 13.2166 10.7024 13.6071 11.0929L17.2071 14.6929C17.5976 15.0834 17.5976 15.7166 17.2071 16.1071L13.6071 19.7071C13.2166 20.0976 12.5834 20.0976 12.1929 19.7071C11.8024 19.3166 11.8024 18.6834 12.1929 18.2929L14.0858 16.4L9.15964 16.4C6.66314 16.4 4.44674 14.8025 3.65728 12.4341L3.55131 12.1162C3.37667 11.5923 3.65983 11.026 4.18377 10.8513Z"
  /></svg
>`,jc=Ks`<svg
  xmlns="http://www.w3.org/2000/svg"
  width="12"
  height="13"
  viewBox="0 0 12 13"
  fill="none"
>
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M5.61391 1.57124C5.85142 1.42873 6.14813 1.42873 6.38564 1.57124L11.0793 4.38749C11.9179 4.89067 11.5612 6.17864 10.5832 6.17864H9.96398V10.0358H10.2854C10.6996 10.0358 11.0354 10.3716 11.0354 10.7858C11.0354 11.2 10.6996 11.5358 10.2854 11.5358H1.71416C1.29995 11.5358 0.964172 11.2 0.964172 10.7858C0.964172 10.3716 1.29995 10.0358 1.71416 10.0358H2.03558L2.03558 6.17864H1.41637C0.438389 6.17864 0.0816547 4.89066 0.920263 4.38749L5.61391 1.57124ZM3.53554 6.17864V10.0358H5.24979V6.17864H3.53554ZM6.74976 6.17864V10.0358H8.46401V6.17864H6.74976ZM8.64913 4.67864H3.35043L5.99978 3.089L8.64913 4.67864Z"
    fill="currentColor"
  /></svg
>`,Uc=Ks`<svg
  xmlns="http://www.w3.org/2000/svg"
  width="12"
  height="13"
  viewBox="0 0 12 13"
  fill="none"
>
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M4.16072 2C4.17367 2 4.18665 2 4.19968 2L7.83857 2C8.36772 1.99998 8.82398 1.99996 9.19518 2.04018C9.5895 2.0829 9.97577 2.17811 10.3221 2.42971C10.5131 2.56849 10.6811 2.73647 10.8198 2.92749C11.0714 3.27379 11.1666 3.66007 11.2094 4.0544C11.2496 4.42561 11.2496 4.88188 11.2495 5.41105V7.58896C11.2496 8.11812 11.2496 8.57439 11.2094 8.94561C11.1666 9.33994 11.0714 9.72621 10.8198 10.0725C10.6811 10.2635 10.5131 10.4315 10.3221 10.5703C9.97577 10.8219 9.5895 10.9171 9.19518 10.9598C8.82398 11 8.36772 11 7.83856 11H4.16073C3.63157 11 3.17531 11 2.80411 10.9598C2.40979 10.9171 2.02352 10.8219 1.67722 10.5703C1.48621 10.4315 1.31824 10.2635 1.17946 10.0725C0.927858 9.72621 0.832652 9.33994 0.78993 8.94561C0.749713 8.5744 0.749733 8.11813 0.749757 7.58896L0.749758 5.45C0.749758 5.43697 0.749758 5.42399 0.749757 5.41104C0.749733 4.88188 0.749713 4.42561 0.78993 4.0544C0.832652 3.66007 0.927858 3.27379 1.17946 2.92749C1.31824 2.73647 1.48621 2.56849 1.67722 2.42971C2.02352 2.17811 2.40979 2.0829 2.80411 2.04018C3.17531 1.99996 3.63157 1.99998 4.16072 2ZM2.96567 3.53145C2.69897 3.56034 2.60687 3.60837 2.55888 3.64324C2.49521 3.6895 2.43922 3.74549 2.39296 3.80916C2.35809 3.85715 2.31007 3.94926 2.28117 4.21597C2.26629 4.35335 2.25844 4.51311 2.25431 4.70832H9.74498C9.74085 4.51311 9.733 4.35335 9.71812 4.21597C9.68922 3.94926 9.6412 3.85715 9.60633 3.80916C9.56007 3.74549 9.50408 3.6895 9.44041 3.64324C9.39242 3.60837 9.30031 3.56034 9.03362 3.53145C8.75288 3.50103 8.37876 3.5 7.79961 3.5H4.19968C3.62053 3.5 3.24641 3.50103 2.96567 3.53145ZM9.74956 6.20832H2.24973V7.55C2.24973 8.12917 2.25076 8.5033 2.28117 8.78404C2.31007 9.05074 2.35809 9.14285 2.39296 9.19084C2.43922 9.25451 2.49521 9.31051 2.55888 9.35677C2.60687 9.39163 2.69897 9.43966 2.96567 9.46856C3.24641 9.49897 3.62053 9.5 4.19968 9.5H7.79961C8.37876 9.5 8.75288 9.49897 9.03362 9.46856C9.30032 9.43966 9.39242 9.39163 9.44041 9.35677C9.50408 9.31051 9.56007 9.25451 9.60633 9.19084C9.6412 9.14285 9.68922 9.05075 9.71812 8.78404C9.74854 8.5033 9.74956 8.12917 9.74956 7.55V6.20832ZM6.74963 8C6.74963 7.58579 7.08541 7.25 7.49961 7.25H8.2496C8.6638 7.25 8.99958 7.58579 8.99958 8C8.99958 8.41422 8.6638 8.75 8.2496 8.75H7.49961C7.08541 8.75 6.74963 8.41422 6.74963 8Z"
    fill="currentColor"
  /></svg
>`,Dc=Ks`<svg
  width="13"
  height="12"
  viewBox="0 0 13 12"
  fill="none"
>
  <path
    fill="currentColor"
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M0.794373 5.99982C0.794373 5.52643 1.17812 5.14268 1.6515 5.14268H5.643V1.15109C5.643 0.677701 6.02675 0.293946 6.50012 0.293945C6.9735 0.293946 7.35725 0.677701 7.35725 1.15109V5.14268H11.3488C11.8221 5.14268 12.2059 5.52643 12.2059 5.99982C12.2059 6.47321 11.8221 6.85696 11.3488 6.85696H7.35725V10.8486C7.35725 11.3219 6.9735 11.7057 6.50012 11.7057C6.02675 11.7057 5.643 11.3219 5.643 10.8486V6.85696H1.6515C1.17812 6.85696 0.794373 6.47321 0.794373 5.99982Z"
  /></svg
>`;var Bc=function(e,t,n,i){var r,a=arguments.length,o=a<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,n,i);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(o=(a<3?r(o):a>3?r(t,n,o):r(t,n))||o);return a>3&&o&&Object.defineProperty(t,n,o),o};const Lc={add:Jl,allWallets:Sl,arrowBottomCircle:Rl,appStore:Ol,apple:Nl,arrowBottom:Ml,arrowLeft:jl,arrowRight:Ul,arrowTop:Dl,bank:jc,browser:Bl,card:Uc,checkmark:Ll,chevronBottom:zl,chevronLeft:Fl,chevronRight:Wl,chevronTop:Hl,chromeStore:Zl,clock:Vl,close:Gl,compass:Kl,coinPlaceholder:ql,copy:Yl,cursor:Ql,cursorTransparent:Ks`<svg fill="none" viewBox="0 0 14 6">
  <path style="fill: var(--wui-color-bg-150);" d="M0 1h14L9.21 5.12a3.31 3.31 0 0 1-4.49 0L0 1Z" />
  <path
    style="stroke: var(--wui-color-inverse-100);"
    stroke-opacity=".05"
    d="M1.33 1.5h11.32L8.88 4.75l-.01.01a2.81 2.81 0 0 1-3.8 0l-.02-.01L1.33 1.5Z"
  />
  <path
    style="fill: var(--wui-color-bg-150);"
    d="M1.25.71h11.5L9.21 3.88a3.31 3.31 0 0 1-4.49 0L1.25.71Z"
  />
</svg> `,desktop:Xl,disconnect:ec,discord:tc,etherscan:nc,extension:ic,externalLink:rc,facebook:ac,filters:oc,github:sc,google:lc,helpCircle:cc,infoCircle:uc,mail:dc,mobile:pc,networkPlaceholder:hc,nftPlaceholder:fc,off:mc,playStore:gc,plus:Dc,qrCode:wc,recycleHorizontal:Mc,refresh:yc,search:vc,send:bc,swapHorizontal:xc,swapHorizontalMedium:_c,swapHorizontalBold:Cc,swapVertical:Ec,telegram:kc,twitch:Tc,twitter:Ac,twitterIcon:$c,verify:Ic,verifyFilled:Pc,wallet:Rc,walletConnect:Oc,walletPlaceholder:Sc,warningCircle:Nc};let zc=class extends dl{constructor(){super(...arguments),this.size="md",this.name="copy",this.color="fg-300"}render(){return this.style.cssText=`\n      --local-color: var(--wui-color-${this.color});\n      --local-width: var(--wui-icon-size-${this.size});\n    `,qs`${Lc[this.name]}`}};zc.styles=[bl,Cl,Pl],Bc([$l()],zc.prototype,"size",void 0),Bc([$l()],zc.prototype,"name",void 0),Bc([$l()],zc.prototype,"color",void 0),zc=Bc([_l("wui-icon")],zc);const Fc=ds`
  :host {
    display: block;
    width: 100%;
    height: 100%;
  }

  img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center center;
    border-radius: inherit;
  }
`;var Wc=function(e,t,n,i){var r,a=arguments.length,o=a<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,n,i);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(o=(a<3?r(o):a>3?r(t,n,o):r(t,n))||o);return a>3&&o&&Object.defineProperty(t,n,o),o};let Hc=class extends dl{constructor(){super(...arguments),this.src="./path/to/image.jpg",this.alt="Image"}render(){return qs`<img src=${this.src} alt=${this.alt} />`}};Hc.styles=[bl,Cl,Fc],Wc([$l()],Hc.prototype,"src",void 0),Wc([$l()],Hc.prototype,"alt",void 0),Hc=Wc([_l("wui-image")],Hc);const Zc=ds`
  :host {
    display: block;
    width: var(--wui-box-size-lg);
    height: var(--wui-box-size-lg);
  }

  svg {
    width: var(--wui-box-size-lg);
    height: var(--wui-box-size-lg);
    fill: none;
    stroke: transparent;
    stroke-linecap: round;
    transition: all var(--wui-ease-in-power-3) var(--wui-duration-lg);
  }

  use {
    stroke: var(--wui-color-accent-100);
    stroke-width: 2px;
    stroke-dasharray: 54, 118;
    stroke-dashoffset: 172;
    animation: dash 1s linear infinite;
  }

  @keyframes dash {
    to {
      stroke-dashoffset: 0px;
    }
  }
`;let Vc=class extends dl{render(){return qs`
      <svg viewBox="0 0 54 59">
        <path
          id="wui-loader-path"
          d="M17.22 5.295c3.877-2.277 5.737-3.363 7.72-3.726a11.44 11.44 0 0 1 4.12 0c1.983.363 3.844 1.45 7.72 3.726l6.065 3.562c3.876 2.276 5.731 3.372 7.032 4.938a11.896 11.896 0 0 1 2.06 3.63c.683 1.928.688 4.11.688 8.663v7.124c0 4.553-.005 6.735-.688 8.664a11.896 11.896 0 0 1-2.06 3.63c-1.3 1.565-3.156 2.66-7.032 4.937l-6.065 3.563c-3.877 2.276-5.737 3.362-7.72 3.725a11.46 11.46 0 0 1-4.12 0c-1.983-.363-3.844-1.449-7.72-3.726l-6.065-3.562c-3.876-2.276-5.731-3.372-7.032-4.938a11.885 11.885 0 0 1-2.06-3.63c-.682-1.928-.688-4.11-.688-8.663v-7.124c0-4.553.006-6.735.688-8.664a11.885 11.885 0 0 1 2.06-3.63c1.3-1.565 3.156-2.66 7.032-4.937l6.065-3.562Z"
        />
        <use xlink:href="#wui-loader-path"></use>
      </svg>
    `}};Vc.styles=[bl,Zc],Vc=function(e,t,n,i){var r,a=arguments.length,o=a<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,n,i);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(o=(a<3?r(o):a>3?r(t,n,o):r(t,n))||o);return a>3&&o&&Object.defineProperty(t,n,o),o}([_l("wui-loading-hexagon")],Vc);const Gc=ds`
  :host {
    display: flex;
  }

  :host([data-size='sm']) > svg {
    width: 12px;
    height: 12px;
  }

  :host([data-size='md']) > svg {
    width: 16px;
    height: 16px;
  }

  :host([data-size='lg']) > svg {
    width: 24px;
    height: 24px;
  }

  :host([data-size='xl']) > svg {
    width: 32px;
    height: 32px;
  }

  svg {
    animation: rotate 2s linear infinite;
    transition: all var(--wui-ease-in-power-3) var(--wui-duration-lg);
  }

  circle {
    fill: none;
    stroke: var(--local-color);
    stroke-width: 4px;
    stroke-dasharray: 1, 124;
    stroke-dashoffset: 0;
    stroke-linecap: round;
    animation: dash 1.5s ease-in-out infinite;
  }

  :host([data-size='md']) > svg > circle {
    stroke-width: 6px;
  }

  :host([data-size='sm']) > svg > circle {
    stroke-width: 8px;
  }

  @keyframes rotate {
    100% {
      transform: rotate(360deg);
    }
  }

  @keyframes dash {
    0% {
      stroke-dasharray: 1, 124;
      stroke-dashoffset: 0;
    }

    50% {
      stroke-dasharray: 90, 124;
      stroke-dashoffset: -35;
    }

    100% {
      stroke-dashoffset: -125;
    }
  }
`;var qc=function(e,t,n,i){var r,a=arguments.length,o=a<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,n,i);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(o=(a<3?r(o):a>3?r(t,n,o):r(t,n))||o);return a>3&&o&&Object.defineProperty(t,n,o),o};let Kc=class extends dl{constructor(){super(...arguments),this.color="accent-100",this.size="lg"}render(){return this.style.cssText=`--local-color: var(--wui-color-${this.color});`,this.dataset.size=this.size,qs`<svg viewBox="25 25 50 50">
      <circle r="20" cy="50" cx="50"></circle>
    </svg>`}};Kc.styles=[bl,Gc],qc([$l()],Kc.prototype,"color",void 0),qc([$l()],Kc.prototype,"size",void 0),Kc=qc([_l("wui-loading-spinner")],Kc);const Yc=ds`
  :host {
    display: block;
    width: var(--wui-box-size-md);
    height: var(--wui-box-size-md);
  }

  svg {
    width: var(--wui-box-size-md);
    height: var(--wui-box-size-md);
    transition: all var(--wui-ease-in-power-3) var(--wui-duration-lg);
  }

  rect {
    fill: none;
    stroke: var(--wui-color-accent-100);
    stroke-width: 4px;
    stroke-linecap: round;
    animation: dash 1s linear infinite;
  }

  @keyframes dash {
    to {
      stroke-dashoffset: 0px;
    }
  }
`;var Jc=function(e,t,n,i){var r,a=arguments.length,o=a<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,n,i);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(o=(a<3?r(o):a>3?r(t,n,o):r(t,n))||o);return a>3&&o&&Object.defineProperty(t,n,o),o};let Qc=class extends dl{constructor(){super(...arguments),this.radius=36}render(){return this.svgLoaderTemplate()}svgLoaderTemplate(){const e=this.radius>50?50:this.radius,t=36-e;return qs`
      <svg viewBox="0 0 110 110" width="110" height="110">
        <rect
          x="2"
          y="2"
          width="106"
          height="106"
          rx=${e}
          stroke-dasharray="${116+t} ${245+t}"
          stroke-dashoffset=${360+1.75*t}
        />
      </svg>
    `}};Qc.styles=[bl,Yc],Jc([$l({type:Number})],Qc.prototype,"radius",void 0),Qc=Jc([_l("wui-loading-thumbnail")],Qc);const Xc=ds`
  :host {
    display: block;
    box-shadow: inset 0 0 0 1px var(--wui-gray-glass-005);
    background: linear-gradient(
      120deg,
      var(--wui-color-bg-200) 5%,
      var(--wui-color-bg-200) 48%,
      var(--wui-color-bg-300) 55%,
      var(--wui-color-bg-300) 60%,
      var(--wui-color-bg-300) calc(60% + 10px),
      var(--wui-color-bg-200) calc(60% + 12px),
      var(--wui-color-bg-200) 100%
    );
    background-size: 250%;
    animation: shimmer 3s linear infinite reverse;
  }

  @keyframes shimmer {
    from {
      background-position: -250% 0;
    }
    to {
      background-position: 250% 0;
    }
  }
`;var eu=function(e,t,n,i){var r,a=arguments.length,o=a<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,n,i);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(o=(a<3?r(o):a>3?r(t,n,o):r(t,n))||o);return a>3&&o&&Object.defineProperty(t,n,o),o};let tu=class extends dl{constructor(){super(...arguments),this.width="",this.height="",this.borderRadius="m"}render(){return this.style.cssText=`\n      width: ${this.width};\n      height: ${this.height};\n      border-radius: clamp(0px,var(--wui-border-radius-${this.borderRadius}), 40px);\n    `,qs`<slot></slot>`}};tu.styles=[Xc],eu([$l()],tu.prototype,"width",void 0),eu([$l()],tu.prototype,"height",void 0),eu([$l()],tu.prototype,"borderRadius",void 0),tu=eu([_l("wui-shimmer")],tu);
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const nu=1,iu=2,ru=e=>(...t)=>({_$litDirective$:e,values:t});let au=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,n){this._$Ct=e,this._$AM=t,this._$Ci=n}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}};
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ou=ru(class extends au{constructor(e){var t;if(super(e),e.type!==nu||"class"!==e.name||(null==(t=e.strings)?void 0:t.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return" "+Object.keys(e).filter((t=>e[t])).join(" ")+" "}update(e,[t]){var n,i;if(void 0===this.st){this.st=new Set,void 0!==e.strings&&(this.nt=new Set(e.strings.join(" ").split(/\s/).filter((e=>""!==e))));for(const e in t)t[e]&&!(null==(n=this.nt)?void 0:n.has(e))&&this.st.add(e);return this.render(t)}const r=e.element.classList;for(const a of this.st)a in t||(r.remove(a),this.st.delete(a));for(const a in t){const e=!!t[a];e===this.st.has(a)||(null==(i=this.nt)?void 0:i.has(a))||(e?(r.add(a),this.st.add(a)):(r.remove(a),this.st.delete(a)))}return Ys}}),su=ds`
  :host {
    display: inline-flex !important;
  }

  slot {
    display: inline-block;
    font-style: normal;
    font-family: var(--wui-font-family);
    font-feature-settings:
      'tnum' on,
      'lnum' on,
      'case' on;
    line-height: 130%;
    font-weight: var(--wui-font-weight-regular);
    overflow: inherit;
    text-overflow: inherit;
    text-align: var(--local-align);
    color: var(--local-color);
  }

  .wui-font-medium-600 {
    font-size: var(--wui-font-size-medium);
    letter-spacing: var(--wui-letter-spacing-medium);
  }

  .wui-font-medium-title-600 {
    font-size: var(--wui-font-size-medium-title);
    letter-spacing: var(--wui-letter-spacing-medium-title);
  }

  .wui-font-large-500,
  .wui-font-large-600,
  .wui-font-large-700 {
    font-size: var(--wui-font-size-large);
    letter-spacing: var(--wui-letter-spacing-large);
  }

  .wui-font-2xl-500,
  .wui-font-2xl-600,
  .wui-font-2xl-700 {
    font-size: var(--wui-font-size-2xl);
    letter-spacing: var(--wui-letter-spacing-2xl);
  }

  .wui-font-paragraph-500,
  .wui-font-paragraph-600,
  .wui-font-paragraph-700 {
    font-size: var(--wui-font-size-paragraph);
    letter-spacing: var(--wui-letter-spacing-paragraph);
  }

  .wui-font-small-400,
  .wui-font-small-500,
  .wui-font-small-600 {
    font-size: var(--wui-font-size-small);
    letter-spacing: var(--wui-letter-spacing-small);
  }

  .wui-font-tiny-400,
  .wui-font-tiny-500,
  .wui-font-tiny-600 {
    font-size: var(--wui-font-size-tiny);
    letter-spacing: var(--wui-letter-spacing-tiny);
  }

  .wui-font-micro-700,
  .wui-font-micro-600 {
    font-size: var(--wui-font-size-micro);
    letter-spacing: var(--wui-letter-spacing-micro);
    text-transform: uppercase;
  }

  .wui-font-tiny-400,
  .wui-font-small-400,
  .wui-font-paragraph-400 {
    font-weight: var(--wui-font-weight-light);
  }

  .wui-font-large-700,
  .wui-font-paragraph-700,
  .wui-font-micro-700 {
    font-weight: var(--wui-font-weight-bold);
  }

  .wui-font-medium-600,
  .wui-font-medium-title-600,
  .wui-font-large-600,
  .wui-font-paragraph-600,
  .wui-font-small-600,
  .wui-font-tiny-600,
  .wui-font-micro-600 {
    font-weight: var(--wui-font-weight-medium);
  }
`;var lu=function(e,t,n,i){var r,a=arguments.length,o=a<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,n,i);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(o=(a<3?r(o):a>3?r(t,n,o):r(t,n))||o);return a>3&&o&&Object.defineProperty(t,n,o),o};let cu=class extends dl{constructor(){super(...arguments),this.variant="paragraph-500",this.color="fg-300",this.align="left"}render(){const e={[`wui-font-${this.variant}`]:!0,[`wui-color-${this.color}`]:!0};return this.style.cssText=`\n      --local-align: ${this.align};\n      --local-color: var(--wui-color-${this.color});\n    `,qs`<slot class=${ou(e)}></slot>`}};cu.styles=[bl,su],lu([$l()],cu.prototype,"variant",void 0),lu([$l()],cu.prototype,"color",void 0),lu([$l()],cu.prototype,"align",void 0),cu=lu([_l("wui-text")],cu);const uu=Ks`<svg fill="none" viewBox="0 0 60 60">
  <rect width="60" height="60" fill="#1DC956" rx="30" />
  <circle cx="30" cy="30" r="3" fill="#fff" />
  <path
    fill="#2BEE6C"
    stroke="#fff"
    stroke-width="2"
    d="m45.32 17.9-.88-.42.88.42.02-.05c.1-.2.21-.44.26-.7l-.82-.15.82.16a2 2 0 0 0-.24-1.4c-.13-.23-.32-.42-.47-.57a8.42 8.42 0 0 1-.04-.04l-.04-.04a2.9 2.9 0 0 0-.56-.47l-.51.86.5-.86a2 2 0 0 0-1.4-.24c-.26.05-.5.16-.69.26l-.05.02-15.05 7.25-.1.05c-1.14.55-1.85.89-2.46 1.37a7 7 0 0 0-1.13 1.14c-.5.6-.83 1.32-1.38 2.45l-.05.11-7.25 15.05-.02.05c-.1.2-.21.43-.26.69a2 2 0 0 0 .24 1.4l.85-.5-.85.5c.13.23.32.42.47.57l.04.04.04.04c.15.15.34.34.56.47a2 2 0 0 0 1.41.24l-.2-.98.2.98c.25-.05.5-.17.69-.26l.05-.02-.42-.87.42.87 15.05-7.25.1-.05c1.14-.55 1.85-.89 2.46-1.38a7 7 0 0 0 1.13-1.13 12.87 12.87 0 0 0 1.43-2.56l7.25-15.05Z"
  />
  <path
    fill="#1DC956"
    d="M33.38 32.72 30.7 29.3 15.86 44.14l.2.2a1 1 0 0 0 1.14.2l15.1-7.27a3 3 0 0 0 1.08-4.55Z"
  />
  <path
    fill="#86F999"
    d="m26.62 27.28 2.67 3.43 14.85-14.85-.2-.2a1 1 0 0 0-1.14-.2l-15.1 7.27a3 3 0 0 0-1.08 4.55Z"
  />
  <circle cx="30" cy="30" r="3" fill="#fff" transform="rotate(45 30 30)" />
  <rect width="59" height="59" x=".5" y=".5" stroke="#062B2B" stroke-opacity=".1" rx="29.5" />
</svg> `,du=Ks`<svg viewBox="0 0 60 60" fill="none">
  <g clip-path="url(#clip0_7734_50402)">
    <path
      d="M0 24.9C0 15.6485 0 11.0228 1.97053 7.56812C3.3015 5.23468 5.23468 3.3015 7.56812 1.97053C11.0228 0 15.6485 0 24.9 0H35.1C44.3514 0 48.9772 0 52.4319 1.97053C54.7653 3.3015 56.6985 5.23468 58.0295 7.56812C60 11.0228 60 15.6485 60 24.9V35.1C60 44.3514 60 48.9772 58.0295 52.4319C56.6985 54.7653 54.7653 56.6985 52.4319 58.0295C48.9772 60 44.3514 60 35.1 60H24.9C15.6485 60 11.0228 60 7.56812 58.0295C5.23468 56.6985 3.3015 54.7653 1.97053 52.4319C0 48.9772 0 44.3514 0 35.1V24.9Z"
      fill="#EB8B47"
    />
    <path
      d="M0.5 24.9C0.5 20.2652 0.50047 16.8221 0.744315 14.105C0.987552 11.3946 1.46987 9.45504 2.40484 7.81585C3.69145 5.56019 5.56019 3.69145 7.81585 2.40484C9.45504 1.46987 11.3946 0.987552 14.105 0.744315C16.8221 0.50047 20.2652 0.5 24.9 0.5H35.1C39.7348 0.5 43.1779 0.50047 45.895 0.744315C48.6054 0.987552 50.545 1.46987 52.1841 2.40484C54.4398 3.69145 56.3086 5.56019 57.5952 7.81585C58.5301 9.45504 59.0124 11.3946 59.2557 14.105C59.4995 16.8221 59.5 20.2652 59.5 24.9V35.1C59.5 39.7348 59.4995 43.1779 59.2557 45.895C59.0124 48.6054 58.5301 50.545 57.5952 52.1841C56.3086 54.4398 54.4398 56.3086 52.1841 57.5952C50.545 58.5301 48.6054 59.0124 45.895 59.2557C43.1779 59.4995 39.7348 59.5 35.1 59.5H24.9C20.2652 59.5 16.8221 59.4995 14.105 59.2557C11.3946 59.0124 9.45504 58.5301 7.81585 57.5952C5.56019 56.3086 3.69145 54.4398 2.40484 52.1841C1.46987 50.545 0.987552 48.6054 0.744315 45.895C0.50047 43.1779 0.5 39.7348 0.5 35.1V24.9Z"
      stroke="#062B2B"
      stroke-opacity="0.1"
    />
    <path
      d="M19 52C24.5228 52 29 47.5228 29 42C29 36.4772 24.5228 32 19 32C13.4772 32 9 36.4772 9 42C9 47.5228 13.4772 52 19 52Z"
      fill="#FF974C"
      stroke="white"
      stroke-width="2"
    />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M42.8437 8.3264C42.4507 7.70891 41.5493 7.70891 41.1564 8.32641L28.978 27.4638C28.5544 28.1295 29.0326 29.0007 29.8217 29.0007H54.1783C54.9674 29.0007 55.4456 28.1295 55.022 27.4638L42.8437 8.3264Z"
      fill="white"
    />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M42.3348 11.6456C42.659 11.7608 42.9061 12.1492 43.4005 12.926L50.7332 24.4488C51.2952 25.332 51.5763 25.7737 51.5254 26.1382C51.4915 26.3808 51.3698 26.6026 51.1833 26.7614C50.9031 27 50.3796 27 49.3327 27H34.6673C33.6204 27 33.0969 27 32.8167 26.7614C32.6302 26.6026 32.5085 26.3808 32.4746 26.1382C32.4237 25.7737 32.7048 25.332 33.2669 24.4488L40.5995 12.926C41.0939 12.1492 41.341 11.7608 41.6652 11.6456C41.8818 11.5687 42.1182 11.5687 42.3348 11.6456ZM35.0001 26.999C38.8661 26.999 42.0001 23.865 42.0001 19.999C42.0001 23.865 45.1341 26.999 49.0001 26.999H35.0001Z"
      fill="#FF974C"
    />
    <path
      d="M10.1061 9.35712C9.9973 9.67775 9.99867 10.0388 9.99978 10.3323C9.99989 10.3611 10 10.3893 10 10.4167V25.5833C10 25.6107 9.99989 25.6389 9.99978 25.6677C9.99867 25.9612 9.9973 26.3222 10.1061 26.6429C10.306 27.2317 10.7683 27.694 11.3571 27.8939C11.6777 28.0027 12.0388 28.0013 12.3323 28.0002C12.3611 28.0001 12.3893 28 12.4167 28H19C24.5228 28 29 23.5228 29 18C29 12.4772 24.5228 8 19 8H12.4167C12.3893 8 12.3611 7.99989 12.3323 7.99978C12.0388 7.99867 11.6778 7.9973 11.3571 8.10614C10.7683 8.306 10.306 8.76834 10.1061 9.35712Z"
      fill="#FF974C"
      stroke="white"
      stroke-width="2"
    />
    <circle cx="19" cy="18" r="4" fill="#EB8B47" stroke="white" stroke-width="2" />
    <circle cx="19" cy="42" r="4" fill="#EB8B47" stroke="white" stroke-width="2" />
  </g>
  <defs>
    <clipPath id="clip0_7734_50402">
      <rect width="60" height="60" fill="white" />
    </clipPath>
  </defs>
</svg> `,pu=Ks`<svg fill="none" viewBox="0 0 60 60">
  <g clip-path="url(#a)">
    <path
      fill="#1DC956"
      d="M0 25.01c0-9.25 0-13.88 1.97-17.33a15 15 0 0 1 5.6-5.6C11.02.11 15.65.11 24.9.11h10.2c9.25 0 13.88 0 17.33 1.97a15 15 0 0 1 5.6 5.6C60 11.13 60 15.76 60 25v10.2c0 9.25 0 13.88-1.97 17.33a15 15 0 0 1-5.6 5.6c-3.45 1.97-8.08 1.97-17.33 1.97H24.9c-9.25 0-13.88 0-17.33-1.97a15 15 0 0 1-5.6-5.6C0 49.1 0 44.46 0 35.21v-10.2Z"
    />
    <path
      fill="#2BEE6C"
      d="M16.1 60c-3.82-.18-6.4-.64-8.53-1.86a15 15 0 0 1-5.6-5.6C.55 50.06.16 46.97.04 41.98L4.2 40.6a4 4 0 0 0 2.48-2.39l4.65-12.4a2 2 0 0 1 2.5-1.2l2.53.84a2 2 0 0 0 2.43-1l2.96-5.94a2 2 0 0 1 3.7.32l3.78 12.58a2 2 0 0 0 3.03 1.09l3.34-2.23a2 2 0 0 0 .65-.7l5.3-9.72a2 2 0 0 1 1.42-1.01l4.14-.69a2 2 0 0 1 1.6.44l3.9 3.24a2 2 0 0 0 2.7-.12l4.62-4.63c.08 2.2.08 4.8.08 7.93v10.2c0 9.25 0 13.88-1.97 17.33a15 15 0 0 1-5.6 5.6c-2.13 1.22-4.7 1.68-8.54 1.86H16.11Z"
    />
    <path
      fill="#fff"
      d="m.07 43.03-.05-2.1 3.85-1.28a3 3 0 0 0 1.86-1.79l4.66-12.4a3 3 0 0 1 3.75-1.8l2.53.84a1 1 0 0 0 1.21-.5l2.97-5.94a3 3 0 0 1 5.56.48l3.77 12.58a1 1 0 0 0 1.51.55l3.34-2.23a1 1 0 0 0 .33-.35l5.3-9.71a3 3 0 0 1 2.14-1.53l4.13-.69a3 3 0 0 1 2.41.66l3.9 3.24a1 1 0 0 0 1.34-.06l5.28-5.28c.05.85.08 1.75.1 2.73L56 22.41a3 3 0 0 1-4.04.19l-3.9-3.25a1 1 0 0 0-.8-.21l-4.13.69a1 1 0 0 0-.72.5l-5.3 9.72a3 3 0 0 1-.97 1.05l-3.34 2.23a3 3 0 0 1-4.53-1.63l-3.78-12.58a1 1 0 0 0-1.85-.16l-2.97 5.94a3 3 0 0 1-3.63 1.5l-2.53-.84a1 1 0 0 0-1.25.6l-4.65 12.4a5 5 0 0 1-3.1 3L.07 43.02Z"
    />
    <path
      fill="#fff"
      fill-rule="evenodd"
      d="M49.5 19a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0Z"
      clip-rule="evenodd"
    />
    <path fill="#fff" d="M45 .28v59.66l-2 .1V.19c.7.02 1.37.05 2 .1Z" />
    <path fill="#2BEE6C" d="M47.5 19a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" />
    <path
      stroke="#fff"
      stroke-opacity=".1"
      d="M.5 25.01c0-4.63 0-8.08.24-10.8.25-2.7.73-4.64 1.66-6.28a14.5 14.5 0 0 1 5.42-5.41C9.46 1.58 11.39 1.1 14.1.85A133 133 0 0 1 24.9.61h10.2c4.63 0 8.08 0 10.8.24 2.7.25 4.65.73 6.28 1.67a14.5 14.5 0 0 1 5.42 5.4c.93 1.65 1.41 3.58 1.66 6.3.24 2.71.24 6.16.24 10.79v10.2c0 4.64 0 8.08-.24 10.8-.25 2.7-.73 4.65-1.66 6.28a14.5 14.5 0 0 1-5.42 5.42c-1.63.93-3.57 1.41-6.28 1.66-2.72.24-6.17.24-10.8.24H24.9c-4.63 0-8.08 0-10.8-.24-2.7-.25-4.64-.73-6.28-1.66a14.5 14.5 0 0 1-5.42-5.42C1.47 50.66 1 48.72.74 46.01A133 133 0 0 1 .5 35.2v-10.2Z"
    />
  </g>
  <defs>
    <clipPath id="a"><path fill="#fff" d="M0 0h60v60H0z" /></clipPath>
  </defs>
</svg>`,hu=Ks`<svg fill="none" viewBox="0 0 60 60">
  <g clip-path="url(#a)">
    <rect width="60" height="60" fill="#C653C6" rx="30" />
    <path
      fill="#E87DE8"
      d="M57.98.01v19.5a4.09 4.09 0 0 0-2.63 2.29L50.7 34.2a2 2 0 0 1-2.5 1.2l-2.53-.84a2 2 0 0 0-2.42 1l-2.97 5.94a2 2 0 0 1-3.7-.32L32.8 28.6a2 2 0 0 0-3.02-1.09l-3.35 2.23a2 2 0 0 0-.64.7l-5.3 9.72a2 2 0 0 1-1.43 1.01l-4.13.69a2 2 0 0 1-1.61-.44l-3.9-3.24a2 2 0 0 0-2.69.12L2.1 42.93.02 43V.01h57.96Z"
    />
    <path
      fill="#fff"
      d="m61.95 16.94.05 2.1-3.85 1.28a3 3 0 0 0-1.86 1.79l-4.65 12.4a3 3 0 0 1-3.76 1.8l-2.53-.84a1 1 0 0 0-1.2.5l-2.98 5.94a3 3 0 0 1-5.55-.48l-3.78-12.58a1 1 0 0 0-1.5-.55l-3.35 2.23a1 1 0 0 0-.32.35l-5.3 9.72a3 3 0 0 1-2.14 1.52l-4.14.69a3 3 0 0 1-2.41-.66l-3.9-3.24a1 1 0 0 0-1.34.06l-5.28 5.28c-.05-.84-.08-1.75-.1-2.73l3.97-3.96a3 3 0 0 1 4.04-.19l3.89 3.25a1 1 0 0 0 .8.21l4.14-.68a1 1 0 0 0 .71-.51l5.3-9.71a3 3 0 0 1 .97-1.06l3.34-2.23a3 3 0 0 1 4.54 1.63l3.77 12.58a1 1 0 0 0 1.86.16l2.96-5.93a3 3 0 0 1 3.64-1.5l2.52.83a1 1 0 0 0 1.25-.6l4.66-12.4a5 5 0 0 1 3.1-2.99l4.43-1.48Z"
    />
    <path
      fill="#fff"
      fill-rule="evenodd"
      d="M35.5 27a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0Z"
      clip-rule="evenodd"
    />
    <path fill="#fff" d="M31 0v60h-2V0h2Z" />
    <path fill="#E87DE8" d="M33.5 27a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" />
  </g>
  <rect width="59" height="59" x=".5" y=".5" stroke="#fff" stroke-opacity=".1" rx="29.5" />
  <defs>
    <clipPath id="a"><rect width="60" height="60" fill="#fff" rx="30" /></clipPath>
  </defs>
</svg> `,fu=Ks`<svg fill="none" viewBox="0 0 60 60">
  <g clip-path="url(#a)">
    <rect width="60" height="60" fill="#987DE8" rx="30" />
    <path
      fill="#fff"
      fill-rule="evenodd"
      d="m15.48 28.37 11.97-19.3a3 3 0 0 1 5.1 0l11.97 19.3a6 6 0 0 1 .9 3.14v.03a6 6 0 0 1-1.16 3.56L33.23 50.2a4 4 0 0 1-6.46 0L15.73 35.1a6 6 0 0 1-1.15-3.54v-.03a6 6 0 0 1 .9-3.16Z"
      clip-rule="evenodd"
    />
    <path
      fill="#643CDD"
      d="M30.84 10.11a1 1 0 0 0-.84-.46V24.5l12.6 5.53a2 2 0 0 0-.28-1.4L30.84 10.11Z"
    />
    <path
      fill="#BDADEB"
      d="M30 9.65a1 1 0 0 0-.85.46L17.66 28.64a2 2 0 0 0-.26 1.39L30 24.5V9.65Z"
    />
    <path
      fill="#643CDD"
      d="M30 50.54a1 1 0 0 0 .8-.4l11.24-15.38c.3-.44-.2-1-.66-.73l-9.89 5.68a3 3 0 0 1-1.5.4v10.43Z"
    />
    <path
      fill="#BDADEB"
      d="m17.97 34.76 11.22 15.37c.2.28.5.41.8.41V40.11a3 3 0 0 1-1.49-.4l-9.88-5.68c-.47-.27-.97.3-.65.73Z"
    />
    <path
      fill="#401AB3"
      d="M42.6 30.03 30 24.5v13.14a3 3 0 0 0 1.5-.4l10.14-5.83a2 2 0 0 0 .95-1.38Z"
    />
    <path
      fill="#7C5AE2"
      d="M30 37.64V24.46l-12.6 5.57a2 2 0 0 0 .97 1.39l10.13 5.82a3 3 0 0 0 1.5.4Z"
    />
  </g>
  <rect width="59" height="59" x=".5" y=".5" stroke="#fff" stroke-opacity=".1" rx="29.5" />
  <defs>
    <clipPath id="a"><rect width="60" height="60" fill="#fff" rx="30" /></clipPath>
  </defs>
</svg> `,mu=Ks`<svg fill="none" viewBox="0 0 60 60">
  <rect width="60" height="60" fill="#1DC956" rx="3" />
  <path
    fill="#1FAD7E"
    stroke="#fff"
    stroke-width="2"
    d="m30.49 29.13-.49-.27-.49.27-12.77 7.1-.05.02c-.86.48-1.58.88-2.1 1.24-.54.37-1.04.81-1.28 1.45a3 3 0 0 0 0 2.12c.24.63.74 1.08 1.27 1.45.53.36 1.25.76 2.11 1.24l.05.03 6.33 3.51.17.1c2.33 1.3 3.72 2.06 5.22 2.32a9 9 0 0 0 3.08 0c1.5-.26 2.9-1.03 5.22-2.32l.18-.1 6.32-3.51.05-.03a26.9 26.9 0 0 0 2.1-1.24 3.21 3.21 0 0 0 1.28-1.45l-.94-.35.94.35a3 3 0 0 0 0-2.12l-.94.35.94-.35a3.21 3.21 0 0 0-1.27-1.45c-.53-.36-1.25-.76-2.11-1.24l-.05-.03-12.77-7.1Z"
  />
  <path
    fill="#2BEE6C"
    stroke="#fff"
    stroke-width="2"
    d="m30.49 19.13-.49-.27-.49.27-12.77 7.1-.05.02c-.86.48-1.58.88-2.1 1.24-.54.37-1.04.81-1.28 1.45a3 3 0 0 0 0 2.12c.24.63.74 1.08 1.27 1.45.53.36 1.25.76 2.11 1.24l.05.03 6.33 3.51.17.1c2.33 1.3 3.72 2.06 5.22 2.32a9 9 0 0 0 3.08 0c1.5-.26 2.9-1.03 5.22-2.32l.18-.1 6.32-3.51.05-.03a26.9 26.9 0 0 0 2.1-1.24 3.21 3.21 0 0 0 1.28-1.45l-.94-.35.94.35a3 3 0 0 0 0-2.12l-.94.35.94-.35a3.21 3.21 0 0 0-1.27-1.45c-.53-.36-1.25-.76-2.11-1.24l-.05-.03-12.77-7.1Z"
  />
  <path
    fill="#86F999"
    stroke="#fff"
    stroke-width="2"
    d="m46.69 21.06-.94-.35.94.35a3 3 0 0 0 0-2.12l-.94.35.94-.35a3.21 3.21 0 0 0-1.27-1.45c-.53-.36-1.25-.76-2.11-1.24l-.05-.03-6.32-3.51-.18-.1c-2.33-1.3-3.72-2.06-5.22-2.33a9 9 0 0 0-3.08 0c-1.5.27-2.9 1.04-5.22 2.33l-.17.1-6.33 3.51-.05.03c-.86.48-1.58.88-2.1 1.24-.54.37-1.04.81-1.28 1.45a3 3 0 0 0 0 2.12c.24.63.74 1.08 1.27 1.45.53.36 1.25.76 2.11 1.24l.05.03 6.33 3.51.17.1c2.33 1.3 3.72 2.06 5.22 2.32a9 9 0 0 0 3.08 0c1.5-.26 2.9-1.03 5.22-2.32l.18-.1 6.32-3.51.05-.03a26.9 26.9 0 0 0 2.1-1.24 3.21 3.21 0 0 0 1.28-1.45Z"
  />
  <rect width="59" height="59" x=".5" y=".5" stroke="#fff" stroke-opacity=".1" rx="2.5" />
</svg>`,gu=Ks`<svg fill="none" viewBox="0 0 60 60">
  <rect width="60" height="60" fill="#C653C6" rx="3" />
  <path
    fill="#fff"
    d="M20.03 15.22C20 15.6 20 16.07 20 17v2.8c0 1.14 0 1.7-.2 2.12-.15.31-.3.5-.58.71-.37.28-1.06.42-2.43.7-.59.12-1.11.29-1.6.51a9 9 0 0 0-4.35 4.36C10 30 10 32.34 10 37c0 4.66 0 7 .84 8.8a9 9 0 0 0 4.36 4.36C17 51 19.34 51 24 51h12c4.66 0 7 0 8.8-.84a9 9 0 0 0 4.36-4.36C50 44 50 41.66 50 37c0-4.66 0-7-.84-8.8a9 9 0 0 0-4.36-4.36c-.48-.22-1-.39-1.6-.5-1.36-.29-2.05-.43-2.42-.7-.27-.22-.43-.4-.58-.72-.2-.42-.2-.98-.2-2.11V17c0-.93 0-1.4-.03-1.78a9 9 0 0 0-8.19-8.19C31.4 7 30.93 7 30 7s-1.4 0-1.78.03a9 9 0 0 0-8.19 8.19Z"
  />
  <path
    fill="#E87DE8"
    d="M22 17c0-.93 0-1.4.04-1.78a7 7 0 0 1 6.18-6.18C28.6 9 29.07 9 30 9s1.4 0 1.78.04a7 7 0 0 1 6.18 6.18c.04.39.04.85.04 1.78v4.5a1.5 1.5 0 0 1-3 0V17c0-.93 0-1.4-.08-1.78a4 4 0 0 0-3.14-3.14C31.39 12 30.93 12 30 12s-1.4 0-1.78.08a4 4 0 0 0-3.14 3.14c-.08.39-.08.85-.08 1.78v4.5a1.5 1.5 0 0 1-3 0V17Z"
  />
  <path
    fill="#E87DE8"
    fill-rule="evenodd"
    d="M12 36.62c0-4.32 0-6.48.92-8.09a7 7 0 0 1 2.61-2.61C17.14 25 19.3 25 23.62 25h6.86c.46 0 .7 0 .9.02 2.73.22 4.37 2.43 4.62 4.98.27-2.7 2.11-5 5.02-5A6.98 6.98 0 0 1 48 31.98v5.4c0 4.32 0 6.48-.92 8.09a7 7 0 0 1-2.61 2.61c-1.61.92-3.77.92-8.09.92h-5.86c-.46 0-.7 0-.9-.02-2.73-.22-4.37-2.43-4.62-4.98-.26 2.58-1.94 4.82-4.71 4.99l-.7.01c-.55 0-.82 0-1.05-.02a7 7 0 0 1-6.52-6.52c-.02-.23-.02-.5-.02-1.05v-4.79Zm21.24-.27a4 4 0 1 0-6.48 0 31.28 31.28 0 0 1 1.57 2.23c.17.4.17.81.17 1.24V42.5a1.5 1.5 0 0 0 3 0V39.82c0-.43 0-.85.17-1.24.09-.2.58-.87 1.57-2.23Z"
    clip-rule="evenodd"
  />
  <rect width="59" height="59" x=".5" y=".5" stroke="#fff" stroke-opacity=".1" rx="2.5" />
</svg>`,wu=Ks`<svg fill="none" viewBox="0 0 60 60">
  <g clip-path="url(#a)">
    <path
      fill="#EB8B47"
      d="M0 24.9c0-9.25 0-13.88 1.97-17.33a15 15 0 0 1 5.6-5.6C11.02 0 15.65 0 24.9 0h10.2c9.25 0 13.88 0 17.33 1.97a15 15 0 0 1 5.6 5.6C60 11.02 60 15.65 60 24.9v10.2c0 9.25 0 13.88-1.97 17.33a15 15 0 0 1-5.6 5.6C48.98 60 44.35 60 35.1 60H24.9c-9.25 0-13.88 0-17.33-1.97a15 15 0 0 1-5.6-5.6C0 48.98 0 44.35 0 35.1V24.9Z"
    />
    <path
      stroke="#062B2B"
      stroke-opacity=".1"
      d="M.5 24.9c0-4.64 0-8.08.24-10.8.25-2.7.73-4.65 1.66-6.28A14.5 14.5 0 0 1 7.82 2.4C9.46 1.47 11.39 1 14.1.74A133 133 0 0 1 24.9.5h10.2c4.63 0 8.08 0 10.8.24 2.7.25 4.65.73 6.28 1.66a14.5 14.5 0 0 1 5.42 5.42c.93 1.63 1.41 3.57 1.66 6.28.24 2.72.24 6.16.24 10.8v10.2c0 4.63 0 8.08-.24 10.8-.25 2.7-.73 4.64-1.66 6.28a14.5 14.5 0 0 1-5.42 5.41c-1.63.94-3.57 1.42-6.28 1.67-2.72.24-6.17.24-10.8.24H24.9c-4.63 0-8.08 0-10.8-.24-2.7-.25-4.64-.73-6.28-1.67a14.5 14.5 0 0 1-5.42-5.4C1.47 50.53 1 48.6.74 45.88A133 133 0 0 1 .5 35.1V24.9Z"
    />
    <path
      fill="#FF974C"
      stroke="#fff"
      stroke-width="2"
      d="M39.2 29.2a13 13 0 1 0-18.4 0l1.3 1.28a12.82 12.82 0 0 1 2.1 2.39 6 6 0 0 1 .6 1.47c.2.76.2 1.56.2 3.17v11.24c0 1.08 0 1.61.13 2.12a4 4 0 0 0 .41.98c.26.45.64.83 1.4 1.6l.3.29c.65.65.98.98 1.36 1.09.26.07.54.07.8 0 .38-.11.7-.44 1.36-1.1l3.48-3.47c.65-.65.98-.98 1.09-1.36a1.5 1.5 0 0 0 0-.8c-.1-.38-.44-.7-1.1-1.36l-.47-.48c-.65-.65-.98-.98-1.09-1.36a1.5 1.5 0 0 1 0-.8c.1-.38.44-.7 1.1-1.36l.47-.48c.65-.65.98-.98 1.09-1.36a1.5 1.5 0 0 0 0-.8c-.1-.38-.44-.7-1.1-1.36l-.48-.5c-.65-.64-.98-.97-1.08-1.35a1.5 1.5 0 0 1 0-.79c.1-.38.42-.7 1.06-1.36l5.46-5.55Z"
    />
    <circle cx="30" cy="17" r="4" fill="#EB8B47" stroke="#fff" stroke-width="2" />
  </g>
  <defs>
    <clipPath id="a"><path fill="#fff" d="M0 0h60v60H0z" /></clipPath>
  </defs>
</svg> `,yu=Ks`<svg fill="none" viewBox="0 0 60 60">
  <g clip-path="url(#a)">
    <rect width="60" height="60" fill="#00ACE6" rx="30" />
    <circle cx="64" cy="39" r="50" fill="#1AC6FF" stroke="#fff" stroke-width="2" />
    <circle cx="78" cy="30" r="50" fill="#4DD2FF" stroke="#fff" stroke-width="2" />
    <circle cx="72" cy="15" r="35" fill="#80DFFF" stroke="#fff" stroke-width="2" />
    <circle cx="34" cy="-17" r="45" stroke="#fff" stroke-width="2" />
    <circle cx="34" cy="-5" r="50" stroke="#fff" stroke-width="2" />
    <circle cx="30" cy="45" r="4" fill="#4DD2FF" stroke="#fff" stroke-width="2" />
    <circle cx="39.5" cy="27.5" r="4" fill="#80DFFF" stroke="#fff" stroke-width="2" />
    <circle cx="16" cy="24" r="4" fill="#19C6FF" stroke="#fff" stroke-width="2" />
  </g>
  <rect width="59" height="59" x=".5" y=".5" stroke="#062B2B" stroke-opacity=".1" rx="29.5" />
  <defs>
    <clipPath id="a"><rect width="60" height="60" fill="#fff" rx="30" /></clipPath>
  </defs>
</svg>`,vu=Ks`<svg fill="none" viewBox="0 0 60 60">
  <g clip-path="url(#a)">
    <rect width="60" height="60" fill="#C653C6" rx="3" />
    <path
      fill="#E87DE8"
      stroke="#fff"
      stroke-width="2"
      d="M52.1 47.34c0-4.24-1.44-9.55-5.9-12.4a2.86 2.86 0 0 0-1.6-3.89v-.82c0-1.19-.52-2.26-1.35-3a4.74 4.74 0 0 0-2.4-6.26v-5.5a11.31 11.31 0 1 0-22.63 0v2.15a3.34 3.34 0 0 0-1.18 5.05 4.74 4.74 0 0 0-.68 6.44A5.22 5.22 0 0 0 14 35.92c-3.06 4.13-6.1 8.3-6.1 15.64 0 2.67.37 4.86.74 6.39a20.3 20.3 0 0 0 .73 2.39l.02.04v.01l.92-.39-.92.4.26.6h38.26l.3-.49-.87-.51.86.5.02-.01.03-.07a16.32 16.32 0 0 0 .57-1.05c.36-.72.85-1.74 1.33-2.96a25.51 25.51 0 0 0 1.94-9.07Z"
    />
    <path
      fill="#fff"
      fill-rule="evenodd"
      d="M26.5 29.5c-3-.5-5.5-3-5.5-7v-7c0-.47 0-.7.03-.9a3 3 0 0 1 2.58-2.57c.2-.03.42-.03.89-.03 2 0 2.5-2.5 2.5-2.5s0 2.5 2.5 2.5c1.4 0 2.1 0 2.65.23a3 3 0 0 1 1.62 1.62c.23.55.23 1.25.23 2.65v6c0 4-3 7-6.5 7 1.35.23 4 0 6.5-2v9.53C34 38.5 31.5 40 28 40s-6-1.5-6-2.97L24 34l2.5 1.5v-6ZM26 47h4.5c2.5 0 3 4 3 5.5h-3l-1-1.5H26v-4Zm-6.25 5.5H24V57h-8c0-1 1-4.5 3.75-4.5Z"
      clip-rule="evenodd"
    />
  </g>
  <rect width="59" height="59" x=".5" y=".5" stroke="#fff" stroke-opacity=".1" rx="2.5" />
  <defs>
    <clipPath id="a"><rect width="60" height="60" fill="#fff" rx="3" /></clipPath>
  </defs>
</svg> `,bu=Ks`<svg fill="none" viewBox="0 0 60 60">
  <rect width="60" height="60" fill="#794CFF" rx="3" />
  <path
    fill="#987DE8"
    stroke="#fff"
    stroke-width="2"
    d="M33 22.5v-1H16v5H8.5V36H13v-5h3v7.5h17V31h1v7.5h17v-17H34v5h-1v-4Z"
  />
  <path fill="#fff" d="M37.5 25h10v10h-10z" />
  <path fill="#4019B2" d="M42.5 25h5v10h-5z" />
  <path fill="#fff" d="M19.5 25h10v10h-10z" />
  <path fill="#4019B2" d="M24.5 25h5v10h-5z" />
  <path fill="#fff" d="M12 30.5h4V37h-4v-6.5Z" />
  <rect width="59" height="59" x=".5" y=".5" stroke="#fff" stroke-opacity=".1" rx="2.5" />
</svg>`,xu=Ks`<svg
  viewBox="0 0 60 60"
  fill="none"
>
  <g clip-path="url(#1)">
    <rect width="60" height="60" rx="30" fill="#00ACE6" />
    <path
      d="M59 73C59 89.0163 46.0163 102 30 102C13.9837 102 1 89.0163 1 73C1 56.9837 12 44 30 44C48 44 59 56.9837 59 73Z"
      fill="#1AC6FF"
      stroke="white"
      stroke-width="2"
    />
    <path
      d="M18.6904 19.9015C19.6264 15.3286 23.3466 11.8445 27.9708 11.2096C29.3231 11.024 30.6751 11.0238 32.0289 11.2096C36.6532 11.8445 40.3733 15.3286 41.3094 19.9015C41.4868 20.7681 41.6309 21.6509 41.7492 22.5271C41.8811 23.5041 41.8811 24.4944 41.7492 25.4715C41.6309 26.3476 41.4868 27.2304 41.3094 28.097C40.3733 32.6699 36.6532 36.154 32.0289 36.7889C30.6772 36.9744 29.3216 36.9743 27.9708 36.7889C23.3466 36.154 19.6264 32.6699 18.6904 28.097C18.513 27.2304 18.3689 26.3476 18.2506 25.4715C18.1186 24.4944 18.1186 23.5041 18.2506 22.5271C18.3689 21.6509 18.513 20.7681 18.6904 19.9015Z"
      fill="#1AC6FF"
      stroke="white"
      stroke-width="2"
    />
    <circle cx="24.5" cy="23.5" r="1.5" fill="white" />
    <circle cx="35.5" cy="23.5" r="1.5" fill="white" />
    <path
      d="M31 20L28 28H32"
      stroke="white"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </g>
  <rect x="0.5" y="0.5" width="59" height="59" rx="29.5" stroke="white" stroke-opacity="0.1" />
  <defs>
    <clipPath id="1">
      <rect width="60" height="60" rx="30" fill="white" />
    </clipPath>
  </defs>
</svg> `,Cu=Ks`<svg viewBox="0 0 60 60" fill="none">
  <g clip-path="url(#1)">
    <path
      d="M0 24.9C0 15.6485 0 11.0228 1.97053 7.56812C3.3015 5.23468 5.23468 3.3015 7.56812 1.97053C11.0228 0 15.6485 0 24.9 0H35.1C44.3514 0 48.9772 0 52.4319 1.97053C54.7653 3.3015 56.6985 5.23468 58.0295 7.56812C60 11.0228 60 15.6485 60 24.9V35.1C60 44.3514 60 48.9772 58.0295 52.4319C56.6985 54.7653 54.7653 56.6985 52.4319 58.0295C48.9772 60 44.3514 60 35.1 60H24.9C15.6485 60 11.0228 60 7.56812 58.0295C5.23468 56.6985 3.3015 54.7653 1.97053 52.4319C0 48.9772 0 44.3514 0 35.1V24.9Z"
      fill="#794CFF"
    />
    <path
      d="M0.5 24.9C0.5 20.2652 0.50047 16.8221 0.744315 14.105C0.987552 11.3946 1.46987 9.45504 2.40484 7.81585C3.69145 5.56019 5.56019 3.69145 7.81585 2.40484C9.45504 1.46987 11.3946 0.987552 14.105 0.744315C16.8221 0.50047 20.2652 0.5 24.9 0.5H35.1C39.7348 0.5 43.1779 0.50047 45.895 0.744315C48.6054 0.987552 50.545 1.46987 52.1841 2.40484C54.4398 3.69145 56.3086 5.56019 57.5952 7.81585C58.5301 9.45504 59.0124 11.3946 59.2557 14.105C59.4995 16.8221 59.5 20.2652 59.5 24.9V35.1C59.5 39.7348 59.4995 43.1779 59.2557 45.895C59.0124 48.6054 58.5301 50.545 57.5952 52.1841C56.3086 54.4398 54.4398 56.3086 52.1841 57.5952C50.545 58.5301 48.6054 59.0124 45.895 59.2557C43.1779 59.4995 39.7348 59.5 35.1 59.5H24.9C20.2652 59.5 16.8221 59.4995 14.105 59.2557C11.3946 59.0124 9.45504 58.5301 7.81585 57.5952C5.56019 56.3086 3.69145 54.4398 2.40484 52.1841C1.46987 50.545 0.987552 48.6054 0.744315 45.895C0.50047 43.1779 0.5 39.7348 0.5 35.1V24.9Z"
      stroke="#062B2B"
      stroke-opacity="0.1"
    />
    <path
      d="M35.1403 31.5016C35.1193 30.9637 35.388 30.4558 35.8446 30.1707C36.1207 29.9982 36.4761 29.8473 36.7921 29.7685C37.3143 29.6382 37.8664 29.7977 38.2386 30.1864C38.8507 30.8257 39.3004 31.6836 39.8033 32.408C40.2796 33.0942 41.4695 33.2512 41.9687 32.5047C42.4839 31.7341 42.9405 30.8229 43.572 30.1399C43.9375 29.7447 44.4866 29.5756 45.0111 29.6967C45.3283 29.7701 45.6863 29.9147 45.9655 30.0823C46.4269 30.3595 46.7045 30.8626 46.6928 31.4008C46.6731 32.3083 46.3764 33.2571 46.2158 34.1473C46.061 35.0048 46.9045 35.8337 47.7592 35.664C48.6464 35.4878 49.5899 35.1747 50.497 35.1391C51.0348 35.1181 51.5427 35.3868 51.8279 35.8433C52.0004 36.1195 52.1513 36.4749 52.2301 36.7908C52.3604 37.3131 52.2009 37.8651 51.8121 38.2374C51.1729 38.8495 50.3151 39.2991 49.5908 39.8019C48.9046 40.2782 48.7473 41.4683 49.4939 41.9675C50.2644 42.4827 51.1757 42.9393 51.8587 43.5708C52.2539 43.9362 52.423 44.4854 52.3018 45.0099C52.2285 45.3271 52.0839 45.6851 51.9162 45.9642C51.6391 46.4257 51.1359 46.7032 50.5978 46.6916C49.6903 46.6719 48.7417 46.3753 47.8516 46.2146C46.9939 46.0598 46.1648 46.9035 46.3346 47.7583C46.5108 48.6454 46.8239 49.5888 46.8594 50.4958C46.8805 51.0336 46.6117 51.5415 46.1552 51.8267C45.879 51.9992 45.5236 52.15 45.2077 52.2289C44.6854 52.3592 44.1334 52.1997 43.7611 51.8109C43.1491 51.1718 42.6996 50.314 42.1968 49.5897C41.7203 48.9034 40.5301 48.7463 40.0309 49.493C39.5157 50.2634 39.0592 51.1746 38.4278 51.8574C38.0623 52.2527 37.5132 52.4218 36.9887 52.3006C36.6715 52.2273 36.3135 52.0826 36.0343 51.915C35.5729 51.6379 35.2953 51.1347 35.307 50.5966C35.3267 49.6891 35.6233 48.7405 35.7839 47.8505C35.9388 46.9928 35.0951 46.1636 34.2402 46.3334C33.3531 46.5096 32.4098 46.8227 31.5028 46.8582C30.9649 46.8793 30.457 46.6105 30.1719 46.154C29.9994 45.8778 29.8485 45.5224 29.7697 45.2065C29.6394 44.6842 29.7989 44.1322 30.1877 43.7599C30.8269 43.1479 31.6847 42.6982 32.4091 42.1954C33.0954 41.7189 33.2522 40.5289 32.5056 40.0297C31.7351 39.5145 30.824 39.058 30.1411 38.4265C29.7459 38.0611 29.5768 37.5119 29.698 36.9875C29.7713 36.6702 29.9159 36.3122 30.0836 36.0331C30.3607 35.5717 30.8638 35.2941 31.402 35.3058C32.3095 35.3255 33.2583 35.6221 34.1485 35.7828C35.006 35.9376 35.8349 35.094 35.6652 34.2393C35.489 33.3521 35.1759 32.4087 35.1403 31.5016Z"
      fill="#906EF7"
      stroke="white"
      stroke-width="2"
    />
    <path
      d="M20.7706 8.22357C20.9036 7.51411 21.5231 7 22.2449 7H23.7551C24.4769 7 25.0964 7.51411 25.2294 8.22357C25.5051 9.69403 25.4829 11.6321 27.1202 12.2606C27.3092 12.3331 27.4958 12.4105 27.6798 12.4926C29.2818 13.2072 30.6374 11.8199 31.8721 10.9752C32.4678 10.5676 33.2694 10.6421 33.7798 11.1525L34.8477 12.2204C35.3581 12.7308 35.4326 13.5323 35.025 14.128C34.1802 15.3627 32.7931 16.7183 33.5077 18.3202C33.5898 18.5043 33.6672 18.6909 33.7398 18.88C34.3683 20.5171 36.3061 20.4949 37.7764 20.7706C38.4859 20.9036 39 21.5231 39 22.2449V23.7551C39 24.4769 38.4859 25.0964 37.7764 25.2294C36.3061 25.5051 34.3685 25.483 33.7401 27.1201C33.6675 27.3093 33.59 27.4961 33.5079 27.6803C32.7934 29.282 34.1803 30.6374 35.025 31.8719C35.4326 32.4677 35.3581 33.2692 34.8477 33.7796L33.7798 34.8475C33.2694 35.3579 32.4678 35.4324 31.8721 35.0248C30.6376 34.1801 29.2823 32.7934 27.6806 33.508C27.4962 33.5903 27.3093 33.6678 27.12 33.7405C25.483 34.3688 25.5051 36.3062 25.2294 37.7764C25.0964 38.4859 24.4769 39 23.7551 39H22.2449C21.5231 39 20.9036 38.4859 20.7706 37.7764C20.4949 36.3062 20.517 34.3688 18.88 33.7405C18.6908 33.6678 18.5039 33.5903 18.3196 33.5081C16.7179 32.7936 15.3625 34.1804 14.1279 35.0251C13.5322 35.4327 12.7307 35.3582 12.2203 34.8478L11.1524 33.7799C10.642 33.2695 10.5675 32.4679 10.9751 31.8722C11.8198 30.6376 13.2067 29.2822 12.4922 27.6804C12.41 27.4962 12.3325 27.3093 12.2599 27.1201C11.6315 25.483 9.69392 25.5051 8.22357 25.2294C7.51411 25.0964 7 24.4769 7 23.7551V22.2449C7 21.5231 7.51411 20.9036 8.22357 20.7706C9.69394 20.4949 11.6317 20.5171 12.2602 18.88C12.3328 18.6909 12.4103 18.5042 12.4924 18.3201C13.207 16.7181 11.8198 15.3625 10.975 14.1278C10.5674 13.5321 10.6419 12.7305 11.1523 12.2201L12.2202 11.1522C12.7306 10.6418 13.5322 10.5673 14.1279 10.9749C15.3626 11.8197 16.7184 13.2071 18.3204 12.4925C18.5044 12.4105 18.6909 12.3331 18.8799 12.2606C20.5171 11.6321 20.4949 9.69403 20.7706 8.22357Z"
      fill="#906EF7"
      stroke="white"
      stroke-width="2"
    />
    <circle cx="23" cy="23" r="6" fill="#794CFF" stroke="white" stroke-width="2" />
    <circle cx="41" cy="41" r="4" fill="#794CFF" stroke="white" stroke-width="2" />
  </g>
  <defs>
    <clipPath id="1">
      <rect width="60" height="60" fill="white" />
    </clipPath>
  </defs>
</svg> `,_u=Ks`<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
  <g clip-path="url(#clip0_187_29)">
    <path d="M1.18187e-05 15.8055C1.18187e-05 9.8015 -5.19442e-07 6.91338 1.69991e-08 0C4.5 3.72236e-05 9.62249 0 16.5 0L23.5 4.31399e-05C29.9349 4.31399e-05 35.5 0.000206332 40 3.73468e-05C40 2.77754 40 9.36708 40 15.8055V22.8364C40 29.2647 40 33.7962 40 40C31.5 40 29.8337 40 23.4 40H16.6C10.5092 40 6.50004 40 4.04289e-05 40C3.05176e-05 32.2453 1.18187e-05 29.6382 1.18187e-05 22.8364V15.8055Z" fill="#0052FF"/>
    <path d="M20.0236 26.5C16.4342 26.5 13.5236 23.5931 13.5236 20C13.5236 16.4069 16.4342 13.5 20.0236 13.5C23.2411 13.5 25.9134 15.8472 26.4261 18.9167H32.9731C32.4206 12.2433 26.8342 7 20.02 7C12.8411 7 7.02002 12.8211 7.02002 20C7.02002 27.1789 12.8411 33 20.02 33C26.8342 33 32.4206 27.7567 32.9731 21.0833H26.4225C25.9061 24.1528 23.2411 26.5 20.0236 26.5Z" fill="white"/>
  </g>
  <defs>
    <clipPath id="clip0_187_29">
      <rect width="40" height="40" fill="white"/>
    </clipPath>
  </defs>
</svg>`,Eu=Ks`
  <svg width="40" height="40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clip-path="url(#a)">
      <path
        d="M0 16.6c0-6.168 0-9.251 1.314-11.555a10 10 0 0 1 3.731-3.731C7.35 0 10.432 0 16.6 0h6.8c6.168 0 9.252 0 11.555 1.314a10 10 0 0 1 3.731 3.731C40 7.35 40 10.432 40 16.6v6.8c0 6.168 0 9.252-1.314 11.555a10 10 0 0 1-3.731 3.731C32.652 40 29.568 40 23.4 40h-6.8c-6.168 0-9.251 0-11.555-1.314a10 10 0 0 1-3.731-3.731C0 32.652 0 29.568 0 23.4v-6.8Z"
        fill="#7D00FF"
      />
      <path
        d="M.5 16.6c0-3.093 0-5.38.162-7.182.161-1.795.48-3.061 1.086-4.125a9.5 9.5 0 0 1 3.545-3.545C6.357 1.141 7.623.823 9.418.662 11.221.5 13.508.5 16.6.5h6.8c3.093 0 5.38 0 7.182.162 1.795.161 3.062.48 4.125 1.086a9.5 9.5 0 0 1 3.545 3.545c.607 1.064.925 2.33 1.086 4.125.161 1.803.162 4.09.162 7.182v6.8c0 3.093 0 5.38-.162 7.182-.161 1.795-.48 3.062-1.086 4.125a9.5 9.5 0 0 1-3.545 3.545c-1.063.607-2.33.925-4.125 1.086-1.803.161-4.09.162-7.182.162h-6.8c-3.093 0-5.38 0-7.182-.162-1.795-.161-3.061-.48-4.125-1.086a9.5 9.5 0 0 1-3.545-3.545c-.607-1.063-.925-2.33-1.086-4.125C.5 28.779.5 26.492.5 23.4v-6.8Z"
        stroke="#fff"
        stroke-opacity=".05"
      />
      <path
        d="M28.306 15.381a3.69 3.69 0 1 0 0-7.381 3.69 3.69 0 0 0 0 7.381ZM16.987 32a8.991 8.991 0 1 1 .016-17.983A8.991 8.991 0 0 1 16.988 32Z"
        fill="#fff"
      />
    </g>
    <defs>
      <clipPath id="a"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath>
    </defs>
  </svg>
`,ku=Ks`
  <svg width="40" height="40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clip-path="url(#a)">
      <path
        d="M0 16.6c0-6.168 0-9.251 1.314-11.555a10 10 0 0 1 3.731-3.731C7.35 0 10.432 0 16.6 0h6.8c6.168 0 9.252 0 11.555 1.314a10 10 0 0 1 3.731 3.731C40 7.35 40 10.432 40 16.6v6.8c0 6.168 0 9.252-1.314 11.555a10 10 0 0 1-3.731 3.731C32.652 40 29.568 40 23.4 40h-6.8c-6.168 0-9.251 0-11.555-1.314a10 10 0 0 1-3.731-3.731C0 32.652 0 29.568 0 23.4v-6.8Z"
        fill="#635BFF"
      />
      <path
        d="M.5 16.6c0-3.093 0-5.38.162-7.182.161-1.795.48-3.061 1.086-4.125a9.5 9.5 0 0 1 3.545-3.545C6.357 1.141 7.623.823 9.418.662 11.221.5 13.508.5 16.6.5h6.8c3.093 0 5.38 0 7.182.162 1.795.161 3.062.48 4.125 1.086a9.5 9.5 0 0 1 3.545 3.545c.607 1.064.925 2.33 1.086 4.125.161 1.803.162 4.09.162 7.182v6.8c0 3.093 0 5.38-.162 7.182-.161 1.795-.48 3.062-1.086 4.125a9.5 9.5 0 0 1-3.545 3.545c-1.063.607-2.33.925-4.125 1.086-1.803.161-4.09.162-7.182.162h-6.8c-3.093 0-5.38 0-7.182-.162-1.795-.161-3.061-.48-4.125-1.086a9.5 9.5 0 0 1-3.545-3.545c-.607-1.063-.925-2.33-1.086-4.125C.5 28.779.5 26.492.5 23.4v-6.8Z"
        stroke="#fff"
        stroke-opacity=".05"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M18.299 15.147c0-1.028.844-1.424 2.242-1.424 2.004 0 4.536.607 6.54 1.688V9.213C24.892 8.343 22.73 8 20.541 8c-5.354 0-8.915 2.796-8.915 7.464 0 7.279 10.022 6.118 10.022 9.257 0 1.213-1.055 1.609-2.531 1.609-2.19 0-4.985-.897-7.2-2.11v6.277a18.283 18.283 0 0 0 7.2 1.503c5.485 0 9.257-2.716 9.257-7.437-.027-7.86-10.075-6.462-10.075-9.416Z"
        fill="#fff"
      />
    </g>
    <defs>
      <clipPath id="a"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath>
    </defs>
  </svg>
`,Tu=Ks`
  <svg width="40" height="40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clip-path="url(#a)">
      <path
        d="M0 16.6c0-6.168 0-9.251 1.314-11.555a10 10 0 0 1 3.731-3.731C7.35 0 10.432 0 16.6 0h6.8c6.168 0 9.252 0 11.555 1.314a10 10 0 0 1 3.731 3.731C40 7.35 40 10.432 40 16.6v6.8c0 6.168 0 9.252-1.314 11.555a10 10 0 0 1-3.731 3.731C32.652 40 29.568 40 23.4 40h-6.8c-6.168 0-9.251 0-11.555-1.314a10 10 0 0 1-3.731-3.731C0 32.652 0 29.568 0 23.4v-6.8Z"
        fill="#fff"
      />
      <path
        d="M.5 16.6c0-3.093 0-5.38.162-7.182.161-1.795.48-3.061 1.086-4.125a9.5 9.5 0 0 1 3.545-3.545C6.357 1.141 7.623.823 9.418.662 11.221.5 13.508.5 16.6.5h6.8c3.093 0 5.38 0 7.182.162 1.795.161 3.062.48 4.125 1.086a9.5 9.5 0 0 1 3.545 3.545c.607 1.064.925 2.33 1.086 4.125.161 1.803.162 4.09.162 7.182v6.8c0 3.093 0 5.38-.162 7.182-.161 1.795-.48 3.062-1.086 4.125a9.5 9.5 0 0 1-3.545 3.545c-1.063.607-2.33.925-4.125 1.086-1.803.161-4.09.162-7.182.162h-6.8c-3.093 0-5.38 0-7.182-.162-1.795-.161-3.061-.48-4.125-1.086a9.5 9.5 0 0 1-3.545-3.545c-.607-1.063-.925-2.33-1.086-4.125C.5 28.779.5 26.492.5 23.4v-6.8Z"
        stroke="#fff"
        stroke-opacity=".05"
      />
      <path
        d="M18.606 12.642a.781.781 0 0 0-.771.66l-1.281 8.125a.78.78 0 0 1 .77-.66h3.755a7.668 7.668 0 0 0 7.57-6.49 6.26 6.26 0 0 0 .075-.843c-.96-.504-2.089-.792-3.325-.792h-6.793Z"
        fill="#001C64"
      />
      <path
        d="M28.724 13.434c-.006.282-.03.564-.075.843a7.668 7.668 0 0 1-7.57 6.491h-3.754a.78.78 0 0 0-.771.66l-1.916 12.15a.634.634 0 0 0 .626.734h4.075a.781.781 0 0 0 .77-.66l1.074-6.807a.781.781 0 0 1 .772-.66h2.4a7.668 7.668 0 0 0 7.57-6.491c.415-2.651-.92-5.064-3.201-6.26Z"
        fill="#0070E0"
      />
      <path
        d="M13.977 7.226a.78.78 0 0 0-.771.658l-3.198 20.277a.634.634 0 0 0 .626.733h4.742l1.178-7.467 1.281-8.125a.782.782 0 0 1 .771-.66H25.4c1.237 0 2.364.289 3.325.792.065-3.4-2.74-6.208-6.599-6.208h-8.148Z"
        fill="#003087"
      />
    </g>
    <defs>
      <clipPath id="a"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath>
    </defs>
  </svg>
`,Au=Ks`<svg width="60" height="60" viewBox="0 0 60 60" fill="none">
<g clip-path="url(#clip0_13859_31161)">
  <path d="M0 24.8995C0 15.6481 0 11.0223 1.97053 7.56763C3.3015 5.2342 5.23468 3.30101 7.56812 1.97004C11.0228 -0.000488281 15.6485 -0.000488281 24.9 -0.000488281H35.1C44.3514 -0.000488281 48.9772 -0.000488281 52.4319 1.97004C54.7653 3.30101 56.6985 5.2342 58.0295 7.56763C60 11.0223 60 15.6481 60 24.8995V35.0995C60 44.351 60 48.9767 58.0295 52.4314C56.6985 54.7648 54.7653 56.698 52.4319 58.029C48.9772 59.9995 44.3514 59.9995 35.1 59.9995H24.9C15.6485 59.9995 11.0228 59.9995 7.56812 58.029C5.23468 56.698 3.3015 54.7648 1.97053 52.4314C0 48.9767 0 44.351 0 35.0995V24.8995Z" fill="#EB8B47"/>
  <path d="M0.5 24.8995C0.5 20.2647 0.50047 16.8216 0.744315 14.1045C0.987552 11.3941 1.46987 9.45455 2.40484 7.81536C3.69145 5.55971 5.56019 3.69096 7.81585 2.40435C9.45504 1.46938 11.3946 0.987064 14.105 0.743826C16.8221 0.499981 20.2652 0.499512 24.9 0.499512H35.1C39.7348 0.499512 43.1779 0.499981 45.895 0.743826C48.6054 0.987064 50.545 1.46938 52.1841 2.40435C54.4398 3.69096 56.3086 5.55971 57.5952 7.81536C58.5301 9.45455 59.0124 11.3941 59.2557 14.1045C59.4995 16.8216 59.5 20.2647 59.5 24.8995V35.0995C59.5 39.7343 59.4995 43.1774 59.2557 45.8945C59.0124 48.6049 58.5301 50.5445 57.5952 52.1837C56.3086 54.4393 54.4398 56.3081 52.1841 57.5947C50.545 58.5296 48.6054 59.012 45.895 59.2552C43.1779 59.499 39.7348 59.4995 35.1 59.4995H24.9C20.2652 59.4995 16.8221 59.499 14.105 59.2552C11.3946 59.012 9.45504 58.5296 7.81585 57.5947C5.56019 56.3081 3.69145 54.4393 2.40484 52.1837C1.46987 50.5445 0.987552 48.6049 0.744315 45.8945C0.50047 43.1774 0.5 39.7343 0.5 35.0995V24.8995Z" stroke="#141414" stroke-opacity="0.1"/>
  <path d="M13 26.0335C13 21.7838 13 19.659 14.0822 18.1694C14.4318 17.6883 14.8548 17.2653 15.3359 16.9157C16.8255 15.8335 18.9503 15.8335 23.2 15.8335H36.8C41.0497 15.8335 43.1745 15.8335 44.6641 16.9157C45.1452 17.2653 45.5682 17.6883 45.9178 18.1694C47 19.659 47 21.7838 47 26.0335V33.9668C47 38.2165 47 40.3414 45.9178 41.831C45.5682 42.312 45.1452 42.7351 44.6641 43.0846C43.1745 44.1668 41.0497 44.1668 36.8 44.1668H23.2C18.9503 44.1668 16.8255 44.1668 15.3359 43.0846C14.8548 42.7351 14.4318 42.312 14.0822 41.831C13 40.3414 13 38.2165 13 33.9668V26.0335Z" fill="#FF974C" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M39.5 36.667H36.6666" stroke="white" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M45.2 23.0645H14.8C14.0501 23.0645 13.6751 23.0645 13.4122 23.2554C13.3273 23.3171 13.2527 23.3918 13.191 23.4767C13 23.7395 13 24.1145 13 24.8645V27.2645C13 28.0144 13 28.3894 13.191 28.6522C13.2527 28.7371 13.3273 28.8118 13.4122 28.8735C13.6751 29.0645 14.0501 29.0645 14.8 29.0645H45.2C45.9499 29.0645 46.3249 29.0645 46.5878 28.8735C46.6727 28.8118 46.7473 28.7371 46.809 28.6522C47 28.3894 47 28.0144 47 27.2645V24.8645C47 24.1145 47 23.7395 46.809 23.4767C46.7473 23.3918 46.6727 23.3171 46.5878 23.2554C46.3249 23.0645 45.9499 23.0645 45.2 23.0645Z" fill="white" fill-opacity="0.4" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<defs>
  <clipPath id="clip0_13859_31161">
    <rect width="60" height="60" fill="white"/>
  </clipPath>
</defs>
</svg>`,$u=ds`
  :host {
    display: block;
    width: var(--local-size);
    height: var(--local-size);
  }

  :host svg {
    width: 100%;
    height: 100%;
  }
`;var Iu=function(e,t,n,i){var r,a=arguments.length,o=a<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,n,i);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(o=(a<3?r(o):a>3?r(t,n,o):r(t,n))||o);return a>3&&o&&Object.defineProperty(t,n,o),o};const Pu={browser:uu,dao:du,defi:pu,defiAlt:hu,eth:fu,layers:mu,lock:gu,login:wu,network:yu,nft:vu,noun:bu,profile:xu,system:Cu,coinbase:_u,onrampCard:Au,moonpay:Eu,stripe:ku,paypal:Tu};let Su=class extends dl{constructor(){super(...arguments),this.name="browser",this.size="md"}render(){return this.style.cssText=`\n       --local-size: var(--wui-visual-size-${this.size});\n   `,qs`${Pu[this.name]}`}};Su.styles=[bl,$u],Iu([$l()],Su.prototype,"name",void 0),Iu([$l()],Su.prototype,"size",void 0),Su=Iu([_l("wui-visual")],Su);
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const Ru=e=>e??Js,Ou={getSpacingStyles:(e,t)=>Array.isArray(e)?e[t]?`var(--wui-spacing-${e[t]})`:void 0:"string"==typeof e?`var(--wui-spacing-${e})`:void 0,getFormattedDate:e=>new Intl.DateTimeFormat("en-US",{month:"short",day:"numeric"}).format(e),getHostName:e=>new URL(e).hostname,getTruncateString:({string:e,charsStart:t,charsEnd:n,truncate:i})=>e.length<=t+n?e:"end"===i?`${e.substring(0,t)}...`:"start"===i?`...${e.substring(e.length-n)}`:`${e.substring(0,Math.floor(t))}...${e.substring(e.length-Math.floor(n))}`,generateAvatarColors(e){const t=e.toLowerCase().replace(/^0x/iu,"").substring(0,6),n=this.hexToRgb(t),i=getComputedStyle(document.documentElement).getPropertyValue("--w3m-border-radius-master"),r=100-3*Number(null==i?void 0:i.replace("px","")),a=`${r}% ${r}% at 65% 40%`,o=[];for(let s=0;s<5;s+=1){const e=this.tintColor(n,.15*s);o.push(`rgb(${e[0]}, ${e[1]}, ${e[2]})`)}return`\n    --local-color-1: ${o[0]};\n    --local-color-2: ${o[1]};\n    --local-color-3: ${o[2]};\n    --local-color-4: ${o[3]};\n    --local-color-5: ${o[4]};\n    --local-radial-circle: ${a}\n   `},hexToRgb(e){const t=parseInt(e,16);return[t>>16&255,t>>8&255,255&t]},tintColor(e,t){const[n,i,r]=e;return[Math.round(n+(255-n)*t),Math.round(i+(255-i)*t),Math.round(r+(255-r)*t)]},isNumber:e=>/^[0-9]+$/u.test(e),getColorTheme:e=>e||("undefined"!=typeof window&&window.matchMedia?window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light":"dark"),splitBalance(e){const t=e.split(".");return 2===t.length?[t[0],t[1]]:["0","00"]}},Nu=ds`
  :host {
    display: flex;
    width: inherit;
    height: inherit;
  }
`;var Mu=function(e,t,n,i){var r,a=arguments.length,o=a<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,n,i);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(o=(a<3?r(o):a>3?r(t,n,o):r(t,n))||o);return a>3&&o&&Object.defineProperty(t,n,o),o};let ju=class extends dl{render(){return this.style.cssText=`\n      flex-direction: ${this.flexDirection};\n      flex-wrap: ${this.flexWrap};\n      flex-basis: ${this.flexBasis};\n      flex-grow: ${this.flexGrow};\n      flex-shrink: ${this.flexShrink};\n      align-items: ${this.alignItems};\n      justify-content: ${this.justifyContent};\n      column-gap: ${this.columnGap&&`var(--wui-spacing-${this.columnGap})`};\n      row-gap: ${this.rowGap&&`var(--wui-spacing-${this.rowGap})`};\n      gap: ${this.gap&&`var(--wui-spacing-${this.gap})`};\n      padding-top: ${this.padding&&Ou.getSpacingStyles(this.padding,0)};\n      padding-right: ${this.padding&&Ou.getSpacingStyles(this.padding,1)};\n      padding-bottom: ${this.padding&&Ou.getSpacingStyles(this.padding,2)};\n      padding-left: ${this.padding&&Ou.getSpacingStyles(this.padding,3)};\n      margin-top: ${this.margin&&Ou.getSpacingStyles(this.margin,0)};\n      margin-right: ${this.margin&&Ou.getSpacingStyles(this.margin,1)};\n      margin-bottom: ${this.margin&&Ou.getSpacingStyles(this.margin,2)};\n      margin-left: ${this.margin&&Ou.getSpacingStyles(this.margin,3)};\n    `,qs`<slot></slot>`}};ju.styles=[bl,Nu],Mu([$l()],ju.prototype,"flexDirection",void 0),Mu([$l()],ju.prototype,"flexWrap",void 0),Mu([$l()],ju.prototype,"flexBasis",void 0),Mu([$l()],ju.prototype,"flexGrow",void 0),Mu([$l()],ju.prototype,"flexShrink",void 0),Mu([$l()],ju.prototype,"alignItems",void 0),Mu([$l()],ju.prototype,"justifyContent",void 0),Mu([$l()],ju.prototype,"columnGap",void 0),Mu([$l()],ju.prototype,"rowGap",void 0),Mu([$l()],ju.prototype,"gap",void 0),Mu([$l()],ju.prototype,"padding",void 0),Mu([$l()],ju.prototype,"margin",void 0),ju=Mu([_l("wui-flex")],ju);const Uu=ds`
  :host {
    display: block;
    width: var(--wui-icon-box-size-xl);
    height: var(--wui-icon-box-size-xl);
    border-radius: var(--wui-border-radius-3xl);
    box-shadow: 0 0 0 8px var(--wui-gray-glass-005);
    overflow: hidden;
    position: relative;
  }

  :host([data-variant='generated']) {
    --mixed-local-color-1: var(--local-color-1);
    --mixed-local-color-2: var(--local-color-2);
    --mixed-local-color-3: var(--local-color-3);
    --mixed-local-color-4: var(--local-color-4);
    --mixed-local-color-5: var(--local-color-5);
  }

  @supports (background: color-mix(in srgb, white 50%, black)) {
    :host([data-variant='generated']) {
      --mixed-local-color-1: color-mix(
        in srgb,
        var(--w3m-color-mix) var(--w3m-color-mix-strength),
        var(--local-color-1)
      );
      --mixed-local-color-2: color-mix(
        in srgb,
        var(--w3m-color-mix) var(--w3m-color-mix-strength),
        var(--local-color-2)
      );
      --mixed-local-color-3: color-mix(
        in srgb,
        var(--w3m-color-mix) var(--w3m-color-mix-strength),
        var(--local-color-3)
      );
      --mixed-local-color-4: color-mix(
        in srgb,
        var(--w3m-color-mix) var(--w3m-color-mix-strength),
        var(--local-color-4)
      );
      --mixed-local-color-5: color-mix(
        in srgb,
        var(--w3m-color-mix) var(--w3m-color-mix-strength),
        var(--local-color-5)
      );
    }
  }

  :host([data-variant='generated']) {
    box-shadow: 0 0 0 8px var(--wui-gray-glass-005);
    background: radial-gradient(
      var(--local-radial-circle),
      #fff 0.52%,
      var(--mixed-local-color-5) 31.25%,
      var(--mixed-local-color-3) 51.56%,
      var(--mixed-local-color-2) 65.63%,
      var(--mixed-local-color-1) 82.29%,
      var(--mixed-local-color-4) 100%
    );
  }

  :host([data-variant='default']) {
    box-shadow: 0 0 0 8px var(--wui-gray-glass-005);
    background: radial-gradient(
      75.29% 75.29% at 64.96% 24.36%,
      #fff 0.52%,
      #f5ccfc 31.25%,
      #dba4f5 51.56%,
      #9a8ee8 65.63%,
      #6493da 82.29%,
      #6ebdea 100%
    );
  }
`;var Du=function(e,t,n,i){var r,a=arguments.length,o=a<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,n,i);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(o=(a<3?r(o):a>3?r(t,n,o):r(t,n))||o);return a>3&&o&&Object.defineProperty(t,n,o),o};let Bu=class extends dl{constructor(){super(...arguments),this.imageSrc=void 0,this.alt=void 0,this.address=void 0}render(){return qs`${this.visualTemplate()}`}visualTemplate(){if(this.imageSrc)return this.dataset.variant="image",qs`<wui-image src=${this.imageSrc} alt=${this.alt??"avatar"}></wui-image>`;if(this.address){this.dataset.variant="generated";const e=Ou.generateAvatarColors(this.address);return this.style.cssText=e,null}return this.dataset.variant="default",null}};Bu.styles=[bl,Uu],Du([$l()],Bu.prototype,"imageSrc",void 0),Du([$l()],Bu.prototype,"alt",void 0),Du([$l()],Bu.prototype,"address",void 0),Bu=Du([_l("wui-avatar")],Bu);const Lu=ds`
  :host {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    position: relative;
    overflow: hidden;
    background-color: var(--wui-gray-glass-020);
    border-radius: var(--local-border-radius);
    border: var(--local-border);
    box-sizing: content-box;
    width: var(--local-size);
    height: var(--local-size);
    min-height: var(--local-size);
    min-width: var(--local-size);
  }

  @supports (background: color-mix(in srgb, white 50%, black)) {
    :host {
      background-color: color-mix(in srgb, var(--local-bg-value) var(--local-bg-mix), transparent);
    }
  }
`;var zu=function(e,t,n,i){var r,a=arguments.length,o=a<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,n,i);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(o=(a<3?r(o):a>3?r(t,n,o):r(t,n))||o);return a>3&&o&&Object.defineProperty(t,n,o),o};let Fu=class extends dl{constructor(){super(...arguments),this.size="md",this.backgroundColor="accent-100",this.iconColor="accent-100",this.background="transparent",this.border=!1,this.borderColor="wui-color-bg-125",this.icon="copy"}render(){const e=this.iconSize||this.size,t="lg"===this.size,n="xl"===this.size,i=t?"12%":"16%",r=t?"xxs":n?"s":"3xl",a="gray"===this.background,o="opaque"===this.background,s="accent-100"===this.backgroundColor&&o||"success-100"===this.backgroundColor&&o||"error-100"===this.backgroundColor&&o||"inverse-100"===this.backgroundColor&&o;let l=`var(--wui-color-${this.backgroundColor})`;return s?l=`var(--wui-icon-box-bg-${this.backgroundColor})`:a&&(l=`var(--wui-gray-${this.backgroundColor})`),this.style.cssText=`\n       --local-bg-value: ${l};\n       --local-bg-mix: ${s||a?"100%":i};\n       --local-border-radius: var(--wui-border-radius-${r});\n       --local-size: var(--wui-icon-box-size-${this.size});\n       --local-border: ${"wui-color-bg-125"===this.borderColor?"2px":"1px"} solid ${this.border?`var(--${this.borderColor})`:"transparent"}\n   `,qs` <wui-icon color=${this.iconColor} size=${e} name=${this.icon}></wui-icon> `}};Fu.styles=[bl,xl,Lu],zu([$l()],Fu.prototype,"size",void 0),zu([$l()],Fu.prototype,"backgroundColor",void 0),zu([$l()],Fu.prototype,"iconColor",void 0),zu([$l()],Fu.prototype,"iconSize",void 0),zu([$l()],Fu.prototype,"background",void 0),zu([$l({type:Boolean})],Fu.prototype,"border",void 0),zu([$l()],Fu.prototype,"borderColor",void 0),zu([$l()],Fu.prototype,"icon",void 0),Fu=zu([_l("wui-icon-box")],Fu);const Wu=ds`
  :host {
    display: block;
  }

  button {
    border-radius: var(--wui-border-radius-3xl);
    background: var(--wui-gray-glass-002);
    display: flex;
    gap: var(--wui-spacing-xs);
    padding: var(--wui-spacing-3xs) var(--wui-spacing-xs) var(--wui-spacing-3xs)
      var(--wui-spacing-xs);
    border: 1px solid var(--wui-gray-glass-005);
  }

  button:disabled {
    background: var(--wui-gray-glass-015);
  }

  button:disabled > wui-text {
    color: var(--wui-gray-glass-015);
  }

  button:disabled > wui-flex > wui-text {
    color: var(--wui-gray-glass-015);
  }

  button:disabled > wui-image,
  button:disabled > wui-icon-box,
  button:disabled > wui-flex > wui-avatar {
    filter: grayscale(1);
  }

  button:has(wui-image) {
    padding: var(--wui-spacing-3xs) var(--wui-spacing-3xs) var(--wui-spacing-3xs)
      var(--wui-spacing-xs);
  }

  wui-text {
    color: var(--wui-color-fg-100);
  }

  wui-flex > wui-text {
    color: var(--wui-color-fg-200);
    transition: all var(--wui-ease-out-power-1) var(--wui-duration-lg);
  }

  wui-image,
  wui-icon-box {
    border-radius: var(--wui-border-radius-3xl);
    width: 24px;
    height: 24px;
    box-shadow: 0 0 0 2px var(--wui-gray-glass-005);
  }

  wui-flex {
    border-radius: var(--wui-border-radius-3xl);
    border: 1px solid var(--wui-gray-glass-005);
    background: var(--wui-gray-glass-005);
    padding: 4px var(--wui-spacing-m) 4px var(--wui-spacing-xxs);
  }

  button.local-no-balance {
    border-radius: 0px;
    border: none;
    background: transparent;
  }

  wui-avatar {
    width: 20px;
    height: 20px;
    box-shadow: 0 0 0 2px var(--wui-accent-glass-010);
  }

  @media (max-width: 500px) {
    button {
      gap: 0px;
      padding: var(--wui-spacing-3xs) var(--wui-spacing-xs) !important;
      height: 32px;
    }
    wui-image,
    wui-icon-box,
    button > wui-text {
      visibility: hidden;
      width: 0px;
      height: 0px;
    }
    button {
      border-radius: 0px;
      border: none;
      background: transparent;
      padding: 0px;
    }
  }

  @media (hover: hover) and (pointer: fine) {
    button:hover:enabled > wui-flex > wui-text {
      color: var(--wui-color-fg-175);
    }

    button:active:enabled > wui-flex > wui-text {
      color: var(--wui-color-fg-175);
    }
  }
`;var Hu=function(e,t,n,i){var r,a=arguments.length,o=a<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,n,i);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(o=(a<3?r(o):a>3?r(t,n,o):r(t,n))||o);return a>3&&o&&Object.defineProperty(t,n,o),o};let Zu=class extends dl{constructor(){super(...arguments),this.networkSrc=void 0,this.avatarSrc=void 0,this.balance=void 0,this.isUnsupportedChain=void 0,this.disabled=!1,this.isProfileName=!1,this.address="",this.charsStart=4,this.charsEnd=6}render(){return qs`
      <button
        ?disabled=${this.disabled}
        class=${Ru(this.balance?void 0:"local-no-balance")}
      >
        ${this.balanceTemplate()}
        <wui-flex gap="xxs" alignItems="center">
          <wui-avatar
            .imageSrc=${this.avatarSrc}
            alt=${this.address}
            address=${this.address}
          ></wui-avatar>
          <wui-text variant="paragraph-600" color="inherit">
            ${Ou.getTruncateString({string:this.address,charsStart:this.isProfileName?18:this.charsStart,charsEnd:this.isProfileName?0:this.charsEnd,truncate:this.isProfileName?"end":"middle"})}
          </wui-text>
        </wui-flex>
      </button>
    `}balanceTemplate(){if(this.isUnsupportedChain)return qs` <wui-icon-box
          size="sm"
          iconColor="error-100"
          backgroundColor="error-100"
          icon="warningCircle"
        ></wui-icon-box>
        <wui-text variant="paragraph-600" color="inherit"> Switch Network</wui-text>`;if(this.balance){const e=this.networkSrc?qs`<wui-image src=${this.networkSrc}></wui-image>`:qs`
            <wui-icon-box
              size="sm"
              iconColor="fg-200"
              backgroundColor="fg-300"
              icon="networkPlaceholder"
            ></wui-icon-box>
          `;return qs`
        ${e}
        <wui-text variant="paragraph-600" color="inherit"> ${this.balance} </wui-text>
      `}return null}};Zu.styles=[bl,xl,Wu],Hu([$l()],Zu.prototype,"networkSrc",void 0),Hu([$l()],Zu.prototype,"avatarSrc",void 0),Hu([$l()],Zu.prototype,"balance",void 0),Hu([$l({type:Boolean})],Zu.prototype,"isUnsupportedChain",void 0),Hu([$l({type:Boolean})],Zu.prototype,"disabled",void 0),Hu([$l({type:Boolean})],Zu.prototype,"isProfileName",void 0),Hu([$l()],Zu.prototype,"address",void 0),Hu([$l()],Zu.prototype,"charsStart",void 0),Hu([$l()],Zu.prototype,"charsEnd",void 0),Zu=Hu([_l("wui-account-button")],Zu);const Vu=ds`
  :host {
    position: relative;
    background-color: var(--wui-gray-glass-002);
    display: flex;
    justify-content: center;
    align-items: center;
    width: var(--local-size);
    height: var(--local-size);
    border-radius: inherit;
    border-radius: var(--local-border-radius);
  }

  :host > wui-flex {
    overflow: hidden;
    border-radius: inherit;
    border-radius: var(--local-border-radius);
  }

  :host::after {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    border-radius: inherit;
    border: 1px solid var(--wui-gray-glass-010);
    pointer-events: none;
  }

  :host([name='Extension'])::after {
    border: 1px solid var(--wui-accent-glass-010);
  }

  :host([data-wallet-icon='allWallets']) {
    background-color: var(--wui-all-wallets-bg-100);
  }

  :host([data-wallet-icon='allWallets'])::after {
    border: 1px solid var(--wui-accent-glass-010);
  }

  wui-icon[data-parent-size='inherit'] {
    width: 75%;
    height: 75%;
    align-items: center;
  }

  wui-icon[data-parent-size='sm'] {
    width: 18px;
    height: 18px;
  }

  wui-icon[data-parent-size='md'] {
    width: 24px;
    height: 24px;
  }

  wui-icon[data-parent-size='lg'] {
    width: 42px;
    height: 42px;
  }

  wui-icon[data-parent-size='full'] {
    width: 100%;
    height: 100%;
  }

  :host > wui-icon-box {
    position: absolute;
    overflow: hidden;
    right: -1px;
    bottom: -2px;
    z-index: 1;
    border: 2px solid var(--wui-color-bg-base-150, #1e1f1f);
    padding: 1px;
  }
`;var Gu=function(e,t,n,i){var r,a=arguments.length,o=a<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,n,i);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(o=(a<3?r(o):a>3?r(t,n,o):r(t,n))||o);return a>3&&o&&Object.defineProperty(t,n,o),o};let qu=class extends dl{constructor(){super(...arguments),this.size="md",this.name="",this.installed=!1,this.badgeSize="xs"}render(){let e="xxs";return e="lg"===this.size?"m":"md"===this.size?"xs":"xxs",this.style.cssText=`\n       --local-border-radius: var(--wui-border-radius-${e});\n       --local-size: var(--wui-wallet-image-size-${this.size});\n   `,this.walletIcon&&(this.dataset.walletIcon=this.walletIcon),qs`
      <wui-flex justifyContent="center" alignItems="center"> ${this.templateVisual()} </wui-flex>
    `}templateVisual(){return this.imageSrc?qs`<wui-image src=${this.imageSrc} alt=${this.name}></wui-image>`:this.walletIcon?qs`<wui-icon
        data-parent-size="md"
        size="md"
        color="inherit"
        name=${this.walletIcon}
      ></wui-icon>`:qs`<wui-icon
      data-parent-size=${this.size}
      size="inherit"
      color="inherit"
      name="walletPlaceholder"
    ></wui-icon>`}};qu.styles=[bl,Vu],Gu([$l()],qu.prototype,"size",void 0),Gu([$l()],qu.prototype,"name",void 0),Gu([$l()],qu.prototype,"imageSrc",void 0),Gu([$l()],qu.prototype,"walletIcon",void 0),Gu([$l({type:Boolean})],qu.prototype,"installed",void 0),Gu([$l()],qu.prototype,"badgeSize",void 0),qu=Gu([_l("wui-wallet-image")],qu);const Ku=ds`
  :host {
    position: relative;
    border-radius: var(--wui-border-radius-xxs);
    width: 40px;
    height: 40px;
    overflow: hidden;
    background: var(--wui-gray-glass-002);
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: var(--wui-spacing-4xs);
    padding: 3.75px !important;
  }

  :host::after {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    border-radius: inherit;
    border: 1px solid var(--wui-gray-glass-010);
    pointer-events: none;
  }

  :host > wui-wallet-image {
    width: 14px;
    height: 14px;
    border-radius: var(--wui-border-radius-5xs);
  }

  :host > wui-flex {
    padding: 2px;
    position: fixed;
    overflow: hidden;
    left: 34px;
    bottom: 8px;
    background: var(--dark-background-150, #1e1f1f);
    border-radius: 50%;
    z-index: 2;
    display: flex;
  }
`;var Yu=function(e,t,n,i){var r,a=arguments.length,o=a<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,n,i);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(o=(a<3?r(o):a>3?r(t,n,o):r(t,n))||o);return a>3&&o&&Object.defineProperty(t,n,o),o};let Ju=class extends dl{constructor(){super(...arguments),this.walletImages=[]}render(){const e=this.walletImages.length<4;return qs`${this.walletImages.slice(0,4).map((({src:e,walletName:t})=>qs`
            <wui-wallet-image
              size="inherit"
              imageSrc=${e}
              name=${Ru(t)}
            ></wui-wallet-image>
          `))}
      ${e?[...Array(4-this.walletImages.length)].map((()=>qs` <wui-wallet-image size="inherit" name=""></wui-wallet-image>`)):null}
      <wui-flex>
        <wui-icon-box
          size="xxs"
          iconSize="xxs"
          iconcolor="success-100"
          backgroundcolor="success-100"
          icon="checkmark"
          background="opaque"
        ></wui-icon-box>
      </wui-flex>`}};Ju.styles=[bl,Ku],Yu([$l({type:Array})],Ju.prototype,"walletImages",void 0),Ju=Yu([_l("wui-all-wallets-image")],Ju);const Qu=ds`
  :host {
    width: var(--local-width);
    position: relative;
  }

  button {
    border: 1px solid var(--wui-gray-glass-010);
    border-radius: var(--local-border-radius);
    width: var(--local-width);
  }

  button:disabled {
    border: 1px solid var(--wui-gray-glass-010);
  }

  /* xs settings */
  button[data-size='xs'] {
    padding: var(--wui-spacing-xs) var(--wui-spacing-1xs);
  }

  button[data-size='xs'][data-icon-left='true'][data-icon-right='false'] {
    padding-left: var(--wui-spacing-xxs);
  }

  button[data-size='xs'][data-icon-right='true'][data-icon-left='false'] {
    padding-right: var(--wui-spacing-xxs);
  }

  /* sm settings */
  button[data-size='sm'] {
    padding: var(--wui-spacing-xxs) var(--wui-spacing-s);
  }

  button[data-size='sm'][data-icon-left='true'][data-icon-right='false'] {
    padding: var(--wui-spacing-xxs) var(--wui-spacing-s) var(--wui-spacing-xxs)
      var(--wui-spacing-xs);
  }

  button[data-size='sm'][data-icon-right='true'][data-icon-left='false'] {
    padding: var(--wui-spacing-xxs) var(--wui-spacing-xs) var(--wui-spacing-xxs)
      var(--wui-spacing-s);
  }

  /* md settings */
  button[data-size='md'] {
    padding: 8.2px var(--wui-spacing-l) 9px var(--wui-spacing-l);
  }

  button[data-size='md'][data-icon-left='true'][data-icon-right='false'] {
    padding: 8.2px var(--wui-spacing-l) 9px var(--wui-spacing-s);
  }

  button[data-size='md'][data-icon-right='true'][data-icon-left='false'] {
    padding: 8.2px var(--wui-spacing-s) 9px var(--wui-spacing-l);
  }

  /* lg settings */
  button[data-size='lg'] {
    padding: var(--wui-spacing-m) var(--wui-spacing-2l);
  }

  button[data-size='lg'][data-icon-left='true'][data-icon-right='false'] {
    padding-left: var(--wui-spacing-m);
  }

  button[data-size='lg'][data-icon-right='true'][data-icon-left='false'] {
    padding-right: var(--wui-spacing-m);
  }

  button > wui-text {
    transition: opacity 200ms ease-in-out;
    opacity: var(--local-opacity-100);
  }

  ::slotted(*) {
    transition: opacity 200ms ease-in-out;
    opacity: var(--local-opacity-100);
  }

  wui-loading-spinner {
    position: absolute;
    left: 50%;
    top: 50%;
    transition: all 200ms ease-in-out;
    transform: translate(-50%, -50%);
    opacity: var(--local-opacity-000);
  }
`;var Xu=function(e,t,n,i){var r,a=arguments.length,o=a<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,n,i);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(o=(a<3?r(o):a>3?r(t,n,o):r(t,n))||o);return a>3&&o&&Object.defineProperty(t,n,o),o};const ed={xs:"small-600",sm:"paragraph-600",md:"small-600",mdl:"small-600",lg:"paragraph-600"};let td=class extends dl{constructor(){super(...arguments),this.size="md",this.disabled=!1,this.fullWidth=!1,this.loading=!1,this.variant="fill",this.hasIconLeft=!1,this.hasIconRight=!1,this.borderRadius="m"}render(){this.style.cssText=`\n    --local-width: ${this.fullWidth?"100%":"auto"};\n    --local-opacity-100: ${this.loading?0:1};\n    --local-opacity-000: ${this.loading?1:0};\n    --local-border-radius: var(--wui-border-radius-${this.borderRadius});\n    `;const e=this.textVariant??ed[this.size];return qs`
      <button
        data-variant=${this.variant}
        data-icon-left=${this.hasIconLeft}
        data-icon-right=${this.hasIconRight}
        data-size=${this.size}
        ?disabled=${this.disabled||this.loading}
        ontouchstart
      >
        ${this.loadingTemplate()}
        <slot name="iconLeft" @slotchange=${()=>this.handleSlotLeftChange()}></slot>
        <wui-text variant=${e} color="inherit">
          <slot></slot>
        </wui-text>
        <slot name="iconRight" @slotchange=${()=>this.handleSlotRightChange()}></slot>
      </button>
    `}handleSlotLeftChange(){this.hasIconLeft=!0}handleSlotRightChange(){this.hasIconRight=!0}loadingTemplate(){return this.loading?qs`<wui-loading-spinner color="fg-300"></wui-loading-spinner>`:qs``}};td.styles=[bl,xl,Qu],Xu([$l()],td.prototype,"size",void 0),Xu([$l({type:Boolean})],td.prototype,"disabled",void 0),Xu([$l({type:Boolean})],td.prototype,"fullWidth",void 0),Xu([$l({type:Boolean})],td.prototype,"loading",void 0),Xu([$l()],td.prototype,"variant",void 0),Xu([$l({type:Boolean})],td.prototype,"hasIconLeft",void 0),Xu([$l({type:Boolean})],td.prototype,"hasIconRight",void 0),Xu([$l()],td.prototype,"borderRadius",void 0),Xu([$l()],td.prototype,"textVariant",void 0),td=Xu([_l("wui-button")],td);const nd=Ks`<svg  viewBox="0 0 48 54" fill="none">
  <path
    d="M43.4605 10.7248L28.0485 1.61089C25.5438 0.129705 22.4562 0.129705 19.9515 1.61088L4.53951 10.7248C2.03626 12.2051 0.5 14.9365 0.5 17.886V36.1139C0.5 39.0635 2.03626 41.7949 4.53951 43.2752L19.9515 52.3891C22.4562 53.8703 25.5438 53.8703 28.0485 52.3891L43.4605 43.2752C45.9637 41.7949 47.5 39.0635 47.5 36.114V17.8861C47.5 14.9365 45.9637 12.2051 43.4605 10.7248Z"
  />
</svg>`,id=ds`
  :host {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 76px;
    row-gap: var(--wui-spacing-xs);
    padding: var(--wui-spacing-xs) 10px;
    background-color: var(--wui-gray-glass-002);
    border-radius: clamp(0px, var(--wui-border-radius-xs), 20px);
    position: relative;
  }

  wui-shimmer[data-type='network'] {
    border: none;
    -webkit-clip-path: var(--wui-path-network);
    clip-path: var(--wui-path-network);
  }

  svg {
    position: absolute;
    width: 48px;
    height: 54px;
    z-index: 1;
  }

  svg > path {
    stroke: var(--wui-gray-glass-010);
    stroke-width: 1px;
  }
`;var rd=function(e,t,n,i){var r,a=arguments.length,o=a<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,n,i);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(o=(a<3?r(o):a>3?r(t,n,o):r(t,n))||o);return a>3&&o&&Object.defineProperty(t,n,o),o};let ad=class extends dl{constructor(){super(...arguments),this.type="wallet"}render(){return qs`
      ${this.shimmerTemplate()}
      <wui-shimmer width="56px" height="20px" borderRadius="xs"></wui-shimmer>
    `}shimmerTemplate(){return"network"===this.type?qs` <wui-shimmer
          data-type=${this.type}
          width="48px"
          height="54px"
          borderRadius="xs"
        ></wui-shimmer>
        ${nd}`:qs`<wui-shimmer width="56px" height="56px" borderRadius="xs"></wui-shimmer>`}};ad.styles=[bl,xl,id],rd([$l()],ad.prototype,"type",void 0),ad=rd([_l("wui-card-select-loader")],ad);const od=Ks`
  <svg fill="none" viewBox="0 0 36 40">
    <path
      d="M15.4 2.1a5.21 5.21 0 0 1 5.2 0l11.61 6.7a5.21 5.21 0 0 1 2.61 4.52v13.4c0 1.87-1 3.59-2.6 4.52l-11.61 6.7c-1.62.93-3.6.93-5.22 0l-11.6-6.7a5.21 5.21 0 0 1-2.61-4.51v-13.4c0-1.87 1-3.6 2.6-4.52L15.4 2.1Z"
    />
  </svg>
`,sd=Ks`<svg width="86" height="96" fill="none">
  <path
    d="M78.3244 18.926L50.1808 2.45078C45.7376 -0.150261 40.2624 -0.150262 35.8192 2.45078L7.6756 18.926C3.23322 21.5266 0.5 26.3301 0.5 31.5248V64.4752C0.5 69.6699 3.23322 74.4734 7.6756 77.074L35.8192 93.5492C40.2624 96.1503 45.7376 96.1503 50.1808 93.5492L78.3244 77.074C82.7668 74.4734 85.5 69.6699 85.5 64.4752V31.5248C85.5 26.3301 82.7668 21.5266 78.3244 18.926Z"
  />
</svg>`,ld=ds`
  :host {
    position: relative;
    border-radius: inherit;
    display: flex;
    justify-content: center;
    align-items: center;
    width: var(--local-width);
    height: var(--local-height);
  }

  svg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    fill: var(--wui-gray-glass-002);
  }

  svg > path {
    stroke: var(--local-stroke);
    transition: stroke var(--wui-ease-out-power-1) var(--wui-duration-lg);
  }

  wui-image {
    width: 100%;
    height: 100%;
    -webkit-clip-path: var(--local-path);
    clip-path: var(--local-path);
    background: var(--wui-gray-glass-002);
  }

  wui-icon {
    transform: translateY(-5%);
    width: var(--local-icon-size);
    height: var(--local-icon-size);
  }
`;var cd=function(e,t,n,i){var r,a=arguments.length,o=a<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,n,i);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(o=(a<3?r(o):a>3?r(t,n,o):r(t,n))||o);return a>3&&o&&Object.defineProperty(t,n,o),o};let ud=class extends dl{constructor(){super(...arguments),this.size="md",this.name="uknown",this.selected=!1}render(){const e={sm:od,md:nd,lg:sd};return this.style.cssText=`\n      --local-stroke: ${this.selected?"var(--wui-color-accent-100)":"var(--wui-gray-glass-010)"};\n      --local-path: var(--wui-path-network-${this.size});\n      --local-width:  var(--wui-width-network-${this.size});\n      --local-height:  var(--wui-height-network-${this.size});\n      --local-icon-size:  var(--wui-icon-size-network-${this.size});\n    `,qs`${this.templateVisual()} ${e[this.size]}`}templateVisual(){return this.imageSrc?qs`<wui-image src=${this.imageSrc} alt=${this.name}></wui-image>`:qs`<wui-icon size="inherit" color="fg-200" name="networkPlaceholder"></wui-icon>`}};ud.styles=[bl,ld],cd([$l()],ud.prototype,"size",void 0),cd([$l()],ud.prototype,"name",void 0),cd([$l()],ud.prototype,"imageSrc",void 0),cd([$l({type:Boolean})],ud.prototype,"selected",void 0),ud=cd([_l("wui-network-image")],ud);const dd=ds`
  button {
    flex-direction: column;
    width: 76px;
    row-gap: var(--wui-spacing-xs);
    padding: var(--wui-spacing-xs) var(--wui-spacing-0);
    background-color: var(--wui-gray-glass-002);
    border-radius: clamp(0px, var(--wui-border-radius-xs), 20px);
  }

  button > wui-text {
    color: var(--wui-color-fg-100);
    max-width: var(--wui-icon-box-size-xl);
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    justify-content: center;
  }

  button:disabled > wui-text {
    color: var(--wui-gray-glass-015);
  }

  [data-selected='true'] {
    background-color: var(--wui-accent-glass-020);
  }

  @media (hover: hover) and (pointer: fine) {
    [data-selected='true']:hover:enabled {
      background-color: var(--wui-accent-glass-015);
    }
  }

  [data-selected='true']:active:enabled {
    background-color: var(--wui-accent-glass-010);
  }
`;var pd=function(e,t,n,i){var r,a=arguments.length,o=a<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,n,i);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(o=(a<3?r(o):a>3?r(t,n,o):r(t,n))||o);return a>3&&o&&Object.defineProperty(t,n,o),o};let hd=class extends dl{constructor(){super(...arguments),this.name="Unknown",this.type="wallet",this.imageSrc=void 0,this.disabled=!1,this.selected=!1,this.installed=!1}render(){return qs`
      <button data-selected=${Ru(this.selected)} ?disabled=${this.disabled} ontouchstart>
        ${this.imageTemplate()}
        <wui-text variant="tiny-500" color=${this.selected?"accent-100":"inherit"}>
          ${this.name}
        </wui-text>
      </button>
    `}imageTemplate(){return"network"===this.type?qs`
        <wui-network-image
          .selected=${this.selected}
          imageSrc=${Ru(this.imageSrc)}
          name=${this.name}
        >
        </wui-network-image>
      `:qs`
      <wui-wallet-image
        size="md"
        imageSrc=${Ru(this.imageSrc)}
        name=${this.name}
        .installed=${this.installed}
        badgeSize="sm"
      >
      </wui-wallet-image>
    `}};hd.styles=[bl,xl,dd],pd([$l()],hd.prototype,"name",void 0),pd([$l()],hd.prototype,"type",void 0),pd([$l()],hd.prototype,"imageSrc",void 0),pd([$l({type:Boolean})],hd.prototype,"disabled",void 0),pd([$l({type:Boolean})],hd.prototype,"selected",void 0),pd([$l({type:Boolean})],hd.prototype,"installed",void 0),hd=pd([_l("wui-card-select")],hd);const fd=ds`
  a {
    border: 1px solid var(--wui-gray-glass-010);
    border-radius: var(--wui-border-radius-3xl);
  }

  wui-image {
    border-radius: var(--wui-border-radius-3xl);
    overflow: hidden;
  }

  a.disabled > wui-icon,
  a.disabled > wui-image {
    filter: grayscale(1);
  }

  a[data-variant='fill'] {
    color: var(--wui-color-inverse-100);
    background-color: var(--wui-color-accent-100);
  }

  a[data-variant='shade'],
  a[data-variant='shadeSmall'] {
    background-color: transparent;
    background-color: var(--wui-gray-glass-010);
    color: var(--wui-color-fg-200);
  }

  a[data-variant='success'] {
    column-gap: var(--wui-spacing-xxs);
    border: 1px solid var(--wui-success-glass-010);
    background-color: var(--wui-success-glass-010);
    color: var(--wui-color-success-100);
  }

  a[data-variant='error'] {
    column-gap: var(--wui-spacing-xxs);
    border: 1px solid var(--wui-error-glass-010);
    background-color: var(--wui-error-glass-010);
    color: var(--wui-color-error-100);
  }

  a[data-variant='transparent'] {
    column-gap: var(--wui-spacing-xxs);
    background-color: transparent;
    color: var(--wui-color-fg-150);
  }

  a[data-variant='transparent'],
  a[data-variant='success'],
  a[data-variant='shadeSmall'],
  a[data-variant='error'] {
    padding: 7px var(--wui-spacing-s) 7px 10px;
  }

  a[data-variant='transparent']:has(wui-text:first-child),
  a[data-variant='success']:has(wui-text:first-child),
  a[data-variant='shadeSmall']:has(wui-text:first-child),
  a[data-variant='error']:has(wui-text:first-child) {
    padding: 7px var(--wui-spacing-s);
  }

  a[data-variant='fill'],
  a[data-variant='shade'] {
    column-gap: var(--wui-spacing-xs);
    padding: var(--wui-spacing-xxs) var(--wui-spacing-m) var(--wui-spacing-xxs)
      var(--wui-spacing-xs);
  }

  a[data-variant='fill']:has(wui-text:first-child),
  a[data-variant='shade']:has(wui-text:first-child) {
    padding: 9px var(--wui-spacing-m) 9px var(--wui-spacing-m);
  }

  a[data-variant='fill'] > wui-image,
  a[data-variant='shade'] > wui-image {
    width: 24px;
    height: 24px;
  }

  a[data-variant='fill'] > wui-image {
    box-shadow: inset 0 0 0 1px var(--wui-color-accent-090);
  }

  a[data-variant='shade'] > wui-image,
  a[data-variant='shadeSmall'] > wui-image {
    box-shadow: inset 0 0 0 1px var(--wui-gray-glass-010);
  }

  a[data-variant='fill'] > wui-icon,
  a[data-variant='shade'] > wui-icon {
    width: 14px;
    height: 14px;
  }

  a[data-variant='transparent'] > wui-image,
  a[data-variant='success'] > wui-image,
  a[data-variant='shadeSmall'] > wui-image,
  a[data-variant='error'] > wui-image {
    width: 14px;
    height: 14px;
  }

  a[data-variant='transparent'] > wui-icon,
  a[data-variant='success'] > wui-icon,
  a[data-variant='shadeSmall'] > wui-icon,
  a[data-variant='error'] > wui-icon {
    width: 12px;
    height: 12px;
  }

  a[data-variant='fill']:focus-visible {
    background-color: var(--wui-color-accent-090);
  }

  a[data-variant='shade']:focus-visible,
  a[data-variant='shadeSmall']:focus-visible {
    background-color: var(--wui-gray-glass-015);
  }

  a[data-variant='transparent']:focus-visible {
    background-color: var(--wui-gray-glass-005);
  }

  a[data-variant='success']:focus-visible {
    background-color: var(--wui-success-glass-015);
  }

  a[data-variant='error']:focus-visible {
    background-color: var(--wui-error-glass-015);
  }

  a.disabled {
    color: var(--wui-gray-glass-015);
    background-color: var(--wui-gray-glass-015);
    pointer-events: none;
  }

  @media (hover: hover) and (pointer: fine) {
    a[data-variant='fill']:hover {
      background-color: var(--wui-color-accent-090);
    }

    a[data-variant='shade']:hover,
    a[data-variant='shadeSmall']:hover {
      background-color: var(--wui-gray-glass-015);
    }

    a[data-variant='transparent']:hover {
      background-color: var(--wui-gray-glass-005);
    }

    a[data-variant='success']:hover {
      background-color: var(--wui-success-glass-015);
    }

    a[data-variant='error']:hover {
      background-color: var(--wui-error-glass-015);
    }
  }

  a[data-variant='fill']:active {
    background-color: var(--wui-color-accent-080);
  }

  a[data-variant='shade']:active,
  a[data-variant='shadeSmall']:active {
    background-color: var(--wui-gray-glass-020);
  }

  a[data-variant='transparent']:active {
    background-color: var(--wui-gray-glass-010);
  }

  a[data-variant='success']:active {
    background-color: var(--wui-success-glass-020);
  }

  a[data-variant='error']:active {
    background-color: var(--wui-error-glass-020);
  }
`;var md=function(e,t,n,i){var r,a=arguments.length,o=a<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,n,i);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(o=(a<3?r(o):a>3?r(t,n,o):r(t,n))||o);return a>3&&o&&Object.defineProperty(t,n,o),o};let gd=class extends dl{constructor(){super(...arguments),this.variant="fill",this.imageSrc=void 0,this.disabled=!1,this.icon="externalLink",this.href="",this.text=void 0}render(){const e="success"===this.variant||"transparent"===this.variant||"shadeSmall"===this.variant?"small-600":"paragraph-600";return qs`
      <a
        rel="noreferrer"
        target="_blank"
        href=${this.href}
        class=${this.disabled?"disabled":""}
        data-variant=${this.variant}
      >
        ${this.imageTemplate()}
        <wui-text variant=${e} color="inherit">
          ${this.title?this.title:Ou.getHostName(this.href)}
        </wui-text>
        <wui-icon name=${this.icon} color="inherit" size="inherit"></wui-icon>
      </a>
    `}imageTemplate(){return this.imageSrc?qs`<wui-image src=${this.imageSrc}></wui-image>`:null}};gd.styles=[bl,xl,fd],md([$l()],gd.prototype,"variant",void 0),md([$l()],gd.prototype,"imageSrc",void 0),md([$l({type:Boolean})],gd.prototype,"disabled",void 0),md([$l()],gd.prototype,"icon",void 0),md([$l()],gd.prototype,"href",void 0),md([$l()],gd.prototype,"text",void 0),gd=md([_l("wui-chip")],gd);const wd=ds`
  :host {
    position: relative;
    display: block;
  }

  button {
    background: var(--wui-color-accent-100);
    border: 1px solid var(--wui-gray-glass-010);
    border-radius: var(--wui-border-radius-m);
    gap: var(--wui-spacing-xs);
  }

  button.loading {
    background: var(--wui-gray-glass-010);
    border: 1px solid var(--wui-gray-glass-010);
    pointer-events: none;
  }

  button:disabled {
    background-color: var(--wui-gray-glass-015);
    border: 1px solid var(--wui-gray-glass-010);
  }

  button:disabled > wui-text {
    color: var(--wui-gray-glass-015);
  }

  @media (hover: hover) and (pointer: fine) {
    button:hover:enabled {
      background-color: var(--wui-color-accent-090);
    }

    button:active:enabled {
      background-color: var(--wui-color-accent-080);
    }
  }

  button:focus-visible {
    border: 1px solid var(--wui-gray-glass-010);
    background-color: var(--wui-color-accent-090);
    -webkit-box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
    -moz-box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
    box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
  }

  button[data-size='sm'] {
    padding: 6.75px 10px 7.25px;
  }

  ::slotted(*) {
    transition: opacity 200ms ease-in-out;
    opacity: var(--local-opacity-100);
  }

  button > wui-text {
    transition: opacity 200ms ease-in-out;
    opacity: var(--local-opacity-100);
    color: var(--wui-color-inverse-100);
  }

  button[data-size='md'] {
    padding: 9px var(--wui-spacing-l) 9px var(--wui-spacing-l);
  }

  button[data-size='md'] + wui-text {
    padding-left: var(--wui-spacing-3xs);
  }

  @media (max-width: 500px) {
    button[data-size='md'] {
      height: 32px;
      padding: 5px 12px;
    }

    button[data-size='md'] > wui-text > slot {
      font-size: 14px !important;
    }
  }

  wui-loading-spinner {
    width: 14px;
    height: 14px;
  }

  wui-loading-spinner::slotted(svg) {
    width: 10px !important;
    height: 10px !important;
  }

  button[data-size='sm'] > wui-loading-spinner {
    width: 12px;
    height: 12px;
  }
`;var yd=function(e,t,n,i){var r,a=arguments.length,o=a<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,n,i);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(o=(a<3?r(o):a>3?r(t,n,o):r(t,n))||o);return a>3&&o&&Object.defineProperty(t,n,o),o};let vd=class extends dl{constructor(){super(...arguments),this.size="md",this.loading=!1}render(){const e="md"===this.size?"paragraph-600":"small-600";return qs`
      <button data-size=${this.size} ?disabled=${this.loading} ontouchstart>
        ${this.loadingTemplate()}
        <wui-text variant=${e} color=${this.loading?"accent-100":"inherit"}>
          <slot></slot>
        </wui-text>
      </button>
    `}loadingTemplate(){return this.loading?qs`<wui-loading-spinner size=${this.size} color="accent-100"></wui-loading-spinner>`:null}};vd.styles=[bl,xl,wd],yd([$l()],vd.prototype,"size",void 0),yd([$l({type:Boolean})],vd.prototype,"loading",void 0),vd=yd([_l("wui-connect-button")],vd);const bd=ds`
  wui-flex {
    width: 100%;
    background-color: var(--wui-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
  }
`;var xd=function(e,t,n,i){var r,a=arguments.length,o=a<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,n,i);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(o=(a<3?r(o):a>3?r(t,n,o):r(t,n))||o);return a>3&&o&&Object.defineProperty(t,n,o),o};let Cd=class extends dl{constructor(){super(...arguments),this.disabled=!1,this.label="",this.buttonLabel=""}render(){return qs`
      <wui-flex
        justifyContent="space-between"
        alignItems="center"
        .padding=${["1xs","2l","1xs","2l"]}
      >
        <wui-text variant="paragraph-500" color="fg-200">${this.label}</wui-text>
        <wui-button size="sm" variant="accent">
          ${this.buttonLabel}
          <wui-icon size="xs" color="inherit" slot="iconRight" name="chevronRight"></wui-icon>
        </wui-button>
      </wui-flex>
    `}};Cd.styles=[bl,xl,bd],xd([$l({type:Boolean})],Cd.prototype,"disabled",void 0),xd([$l()],Cd.prototype,"label",void 0),xd([$l()],Cd.prototype,"buttonLabel",void 0),Cd=xd([_l("wui-cta-button")],Cd);
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const _d=(e,t)=>{var n;const i=e._$AN;if(void 0===i)return!1;for(const r of i)null==(n=r._$AO)||n.call(r,t,!1),_d(r,t);return!0},Ed=e=>{let t,n;do{if(void 0===(t=e._$AM))break;n=t._$AN,n.delete(e),e=t}while(0===(null==n?void 0:n.size))},kd=e=>{for(let t;t=e._$AM;e=t){let n=t._$AN;if(void 0===n)t._$AN=n=new Set;else if(n.has(e))break;n.add(e),$d(t)}};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Td(e){void 0!==this._$AN?(Ed(this),this._$AM=e,kd(this)):this._$AM=e}function Ad(e,t=!1,n=0){const i=this._$AH,r=this._$AN;if(void 0!==r&&0!==r.size)if(t)if(Array.isArray(i))for(let a=n;a<i.length;a++)_d(i[a],!1),Ed(i[a]);else null!=i&&(_d(i,!1),Ed(i));else _d(this,e)}const $d=e=>{e.type==iu&&(e._$AP??(e._$AP=Ad),e._$AQ??(e._$AQ=Td))};let Id=class extends au{constructor(){super(...arguments),this._$AN=void 0}_$AT(e,t,n){super._$AT(e,t,n),kd(this),this.isConnected=e._$AU}_$AO(e,t=!0){var n,i;e!==this.isConnected&&(this.isConnected=e,e?null==(n=this.reconnected)||n.call(this):null==(i=this.disconnected)||i.call(this)),t&&(_d(this,e),Ed(this))}setValue(e){if(void 0===this._$Ct.strings)this._$Ct._$AI(e,this);else{const t=[...this._$Ct._$AH];t[this._$Ci]=e,this._$Ct._$AI(t,this,0)}}disconnected(){}reconnected(){}};
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Pd=()=>new Sd;let Sd=class{};const Rd=new WeakMap,Od=ru(class extends Id{render(e){return Js}update(e,[t]){var n;const i=t!==this.Y;return i&&void 0!==this.Y&&this.rt(void 0),(i||this.lt!==this.ct)&&(this.Y=t,this.ht=null==(n=e.options)?void 0:n.host,this.rt(this.ct=e.element)),Js}rt(e){if("function"==typeof this.Y){const t=this.ht??globalThis;let n=Rd.get(t);void 0===n&&(n=new WeakMap,Rd.set(t,n)),void 0!==n.get(this.Y)&&this.Y.call(this.ht,void 0),n.set(this.Y,e),void 0!==e&&this.Y.call(this.ht,e)}else this.Y.value=e}get lt(){var e,t;return"function"==typeof this.Y?null==(e=Rd.get(this.ht??globalThis))?void 0:e.get(this.Y):null==(t=this.Y)?void 0:t.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}}),Nd=ds`
  :host {
    position: relative;
    width: 100%;
    display: inline-block;
    color: var(--wui-color-fg-275);
  }

  input {
    width: 100%;
    border-radius: var(--wui-border-radius-xs);
    border: 1px solid var(--wui-gray-glass-005);
    background: var(--wui-gray-glass-005);
    font-size: var(--wui-font-size-paragraph);
    font-weight: var(--wui-font-weight-light);
    letter-spacing: var(--wui-letter-spacing-paragraph);
    color: var(--wui-color-fg-100);
    transition: all var(--wui-ease-inout-power-1) var(--wui-duration-lg);
    caret-color: var(--wui-color-accent-100);
  }

  input:disabled {
    cursor: not-allowed;
    border: 1px solid var(--wui-gray-glass-010);
  }

  input:disabled::placeholder,
  input:disabled + wui-icon {
    color: var(--wui-color-fg-300);
  }

  input::placeholder {
    color: var(--wui-color-fg-275);
  }

  input:focus:enabled {
    transition: all var(--wui-ease-out-power-2) var(--wui-duration-sm);
    background-color: var(--wui-gray-glass-010);
    border: 1px solid var(--wui-color-accent-100);
    -webkit-box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
    -moz-box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
    box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
  }

  input:hover:enabled {
    background-color: var(--wui-gray-glass-010);
  }

  wui-icon {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    pointer-events: none;
  }

  .wui-size-sm {
    padding: 9px var(--wui-spacing-m) 10px var(--wui-spacing-s);
  }

  wui-icon + .wui-size-sm {
    padding: 9px var(--wui-spacing-m) 10px 36px;
  }

  wui-icon[data-input='sm'] {
    left: var(--wui-spacing-s);
  }

  .wui-size-md {
    padding: 15px var(--wui-spacing-m) var(--wui-spacing-l) var(--wui-spacing-m);
  }

  wui-icon + .wui-size-md,
  wui-loading-spinner + .wui-size-md {
    padding: 10.5px var(--wui-spacing-3xl) 10.5px 40px;
  }

  wui-icon[data-input='md'] {
    left: var(--wui-spacing-l);
  }

  .wui-size-lg {
    padding: var(--wui-spacing-s) var(--wui-spacing-s) var(--wui-spacing-s) var(--wui-spacing-l);
    letter-spacing: var(--wui-letter-spacing-medium-title);
    font-size: var(--wui-font-size-medium-title);
    font-weight: var(--wui-font-weight-light);
    line-height: 130%;
    color: var(--wui-color-fg-100);
    height: 64px;
  }

  wui-icon + .wui-size-lg,
  wui-loading-spinner + .wui-size-lg {
    padding-left: 50px;
  }

  wui-icon[data-input='lg'] {
    left: var(--wui-spacing-l);
  }

  input:placeholder-shown ~ ::slotted(wui-input-element),
  input:placeholder-shown ~ ::slotted(wui-icon) {
    opacity: 0;
    pointer-events: none;
  }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  input[type='number'] {
    -moz-appearance: textfield;
  }

  ::slotted(wui-input-element),
  ::slotted(wui-icon) {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    transition: all var(--wui-ease-in-power-2) var(--wui-duration-md);
  }

  ::slotted(wui-input-element) {
    right: var(--wui-spacing-m);
  }

  ::slotted(wui-icon) {
    right: 0px;
  }
`;var Md=function(e,t,n,i){var r,a=arguments.length,o=a<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,n,i);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(o=(a<3?r(o):a>3?r(t,n,o):r(t,n))||o);return a>3&&o&&Object.defineProperty(t,n,o),o};let jd=class extends dl{constructor(){super(...arguments),this.inputElementRef=Pd(),this.size="md",this.disabled=!1,this.placeholder="",this.type="text"}render(){const e=`wui-size-${this.size}`;return qs` ${this.templateIcon()}
      <input
        ${Od(this.inputElementRef)}
        class=${e}
        type=${this.type}
        enterkeyhint=${Ru(this.enterKeyHint)}
        ?disabled=${this.disabled}
        placeholder=${this.placeholder}
        @input=${this.dispatchInputChangeEvent.bind(this)}
        value=${Ru(this.value)}
        .value=${this.value||""}
      />
      <slot></slot>`}templateIcon(){return this.icon?qs`<wui-icon
        data-input=${this.size}
        size=${this.size}
        color="inherit"
        name=${this.icon}
      ></wui-icon>`:null}dispatchInputChangeEvent(){var e;this.dispatchEvent(new CustomEvent("inputChange",{detail:null==(e=this.inputElementRef.value)?void 0:e.value,bubbles:!0,composed:!0}))}};jd.styles=[bl,xl,Nd],Md([$l()],jd.prototype,"size",void 0),Md([$l()],jd.prototype,"icon",void 0),Md([$l({type:Boolean})],jd.prototype,"disabled",void 0),Md([$l()],jd.prototype,"placeholder",void 0),Md([$l()],jd.prototype,"type",void 0),Md([$l()],jd.prototype,"keyHint",void 0),Md([$l()],jd.prototype,"value",void 0),jd=Md([_l("wui-input-text")],jd);const Ud=ds`
  :host {
    position: relative;
    display: inline-block;
  }

  wui-text {
    margin: var(--wui-spacing-xxs) var(--wui-spacing-m) var(--wui-spacing-0) var(--wui-spacing-m);
  }
`;var Dd=function(e,t,n,i){var r,a=arguments.length,o=a<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,n,i);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(o=(a<3?r(o):a>3?r(t,n,o):r(t,n))||o);return a>3&&o&&Object.defineProperty(t,n,o),o};let Bd=class extends dl{constructor(){super(...arguments),this.disabled=!1}render(){return qs`
      <wui-input-text
        placeholder="Email"
        icon="mail"
        size="md"
        .disabled=${this.disabled}
        .value=${this.value}
        data-testid="wui-email-input"
      ></wui-input-text>
      ${this.templateError()}
    `}templateError(){return this.errorMessage?qs`<wui-text variant="tiny-500" color="error-100">${this.errorMessage}</wui-text>`:null}};Bd.styles=[bl,Ud],Dd([$l()],Bd.prototype,"errorMessage",void 0),Dd([$l({type:Boolean})],Bd.prototype,"disabled",void 0),Dd([$l()],Bd.prototype,"value",void 0),Bd=Dd([_l("wui-email-input")],Bd);const Ld=ds`
  button {
    border-radius: var(--local-border-radius);
    color: var(--wui-color-fg-100);
    padding: var(--local-padding);
  }

  @media (max-width: 700px) {
    button {
      padding: var(--wui-spacing-s);
    }
  }

  button > wui-icon {
    pointer-events: none;
  }

  button:disabled > wui-icon {
    color: var(--wui-color-bg-300) !important;
  }

  button:disabled {
    background-color: transparent;
  }
`;var zd=function(e,t,n,i){var r,a=arguments.length,o=a<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,n,i);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(o=(a<3?r(o):a>3?r(t,n,o):r(t,n))||o);return a>3&&o&&Object.defineProperty(t,n,o),o};let Fd=class extends dl{constructor(){super(...arguments),this.size="md",this.disabled=!1,this.icon="copy",this.iconColor="inherit"}render(){const e="lg"===this.size?"--wui-border-radius-xs":"--wui-border-radius-xxs",t="lg"===this.size?"--wui-spacing-1xs":"--wui-spacing-2xs";return this.style.cssText=`\n    --local-border-radius: var(${e});\n    --local-padding: var(${t});\n`,qs`
      <button ?disabled=${this.disabled} ontouchstart>
        <wui-icon color=${this.iconColor} size=${this.size} name=${this.icon}></wui-icon>
      </button>
    `}};Fd.styles=[bl,xl,Cl,Ld],zd([$l()],Fd.prototype,"size",void 0),zd([$l({type:Boolean})],Fd.prototype,"disabled",void 0),zd([$l()],Fd.prototype,"icon",void 0),zd([$l()],Fd.prototype,"iconColor",void 0),Fd=zd([_l("wui-icon-link")],Fd);const Wd=ds`
  button {
    background-color: var(--wui-color-fg-300);
    border-radius: var(--wui-border-radius-4xs);
    width: 16px;
    height: 16px;
  }

  button:disabled {
    background-color: var(--wui-color-bg-300);
  }

  wui-icon {
    color: var(--wui-color-bg-200) !important;
  }

  button:focus-visible {
    background-color: var(--wui-color-fg-250);
    border: 1px solid var(--wui-color-accent-100);
  }

  button:active:enabled {
    background-color: var(--wui-color-fg-225);
  }

  @media (hover: hover) and (pointer: fine) {
    button:hover:enabled {
      background-color: var(--wui-color-fg-250);
    }
  }
`;var Hd=function(e,t,n,i){var r,a=arguments.length,o=a<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,n,i);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(o=(a<3?r(o):a>3?r(t,n,o):r(t,n))||o);return a>3&&o&&Object.defineProperty(t,n,o),o};let Zd=class extends dl{constructor(){super(...arguments),this.icon="copy"}render(){return qs`
      <button>
        <wui-icon color="inherit" size="xxs" name=${this.icon}></wui-icon>
      </button>
    `}};Zd.styles=[bl,xl,Wd],Hd([$l()],Zd.prototype,"icon",void 0),Zd=Hd([_l("wui-input-element")],Zd);const Vd=ds`
  :host {
    position: relative;
    display: inline-block;
  }

  input {
    width: 50px;
    height: 50px;
    background: var(--wui-gray-glass-010);
    border-radius: var(--wui-border-radius-xs);
    border: 1px solid var(--wui-gray-glass-005);
    font-family: var(--wui-font-family);
    font-size: var(--wui-font-size-large);
    font-weight: var(--wui-font-weight-regular);
    letter-spacing: var(--wui-letter-spacing-large);
    text-align: center;
    color: var(--wui-color-fg-100);
    caret-color: var(--wui-color-accent-100);
    transition: all var(--wui-ease-inout-power-1) var(--wui-duration-lg);
    box-sizing: border-box;
    -webkit-appearance: none;
    -moz-appearance: textfield;
    padding: 0px;
  }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  input[type='number'] {
    -moz-appearance: textfield;
  }

  input:disabled {
    cursor: not-allowed;
    border: 1px solid var(--wui-gray-glass-010);
    background: var(--wui-gray-glass-005);
  }

  input:focus:enabled {
    transition: all var(--wui-ease-out-power-2) var(--wui-duration-sm);
    background-color: var(--wui-gray-glass-015);
    border: 1px solid var(--wui-color-accent-100);
    -webkit-box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
    -moz-box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
    box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
  }
  @media (hover: hover) and (pointer: fine) {
    input:hover:enabled {
      background-color: var(--wui-gray-glass-015);
    }
  }
`;var Gd=function(e,t,n,i){var r,a=arguments.length,o=a<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,n,i);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(o=(a<3?r(o):a>3?r(t,n,o):r(t,n))||o);return a>3&&o&&Object.defineProperty(t,n,o),o};let qd=class extends dl{constructor(){super(...arguments),this.disabled=!1,this.value=""}render(){return qs`<input
      type="number"
      maxlength="1"
      inputmode="numeric"
      autofocus
      ?disabled=${this.disabled}
      value=${this.value}
    /> `}};qd.styles=[bl,xl,Vd],Gd([$l({type:Boolean})],qd.prototype,"disabled",void 0),Gd([$l({type:String})],qd.prototype,"value",void 0),qd=Gd([_l("wui-input-numeric")],qd);const Kd=ds`
  button {
    padding: var(--wui-spacing-4xs) var(--wui-spacing-xxs);
    border-radius: var(--wui-border-radius-3xs);
    background-color: transparent;
    color: var(--wui-color-accent-100);
  }

  button:disabled {
    background-color: transparent;
    color: var(--wui-gray-glass-015);
  }
`;var Yd=function(e,t,n,i){var r,a=arguments.length,o=a<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,n,i);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(o=(a<3?r(o):a>3?r(t,n,o):r(t,n))||o);return a>3&&o&&Object.defineProperty(t,n,o),o};let Jd=class extends dl{constructor(){super(...arguments),this.disabled=!1,this.color="inherit"}render(){return qs`
      <button ?disabled=${this.disabled} ontouchstart>
        <slot name="iconLeft"></slot>
        <wui-text variant="small-600" color=${this.color}>
          <slot></slot>
        </wui-text>
        <slot name="iconRight"></slot>
      </button>
    `}};Jd.styles=[bl,xl,Kd],Yd([$l({type:Boolean})],Jd.prototype,"disabled",void 0),Yd([$l()],Jd.prototype,"color",void 0),Jd=Yd([_l("wui-link")],Jd);const Qd=ds`
  button {
    column-gap: var(--wui-spacing-s);
    padding: 11px 18px 11px var(--wui-spacing-s);
    width: 100%;
    background-color: var(--wui-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
    color: var(--wui-color-fg-250);
  }

  button[data-iconvariant='square'],
  button[data-iconvariant='square-blue'] {
    padding: 6px 18px 6px 9px;
  }

  button > wui-flex {
    flex: 1;
  }

  button > wui-image {
    width: 32px;
    height: 32px;
    box-shadow: 0 0 0 2px var(--wui-gray-glass-005);
    border-radius: var(--wui-border-radius-3xl);
  }

  button > wui-icon {
    width: 36px;
    height: 36px;
  }

  button > wui-icon-box[data-variant='blue'] {
    box-shadow: 0 0 0 2px var(--wui-accent-glass-005);
  }

  button > wui-icon-box[data-variant='overlay'] {
    box-shadow: 0 0 0 2px var(--wui-gray-glass-005);
  }

  button > wui-icon-box[data-variant='square-blue'] {
    border-radius: var(--wui-border-radius-3xs);
    position: relative;
    border: none;
    width: 36px;
    height: 36px;
  }

  button > wui-icon-box[data-variant='square-blue']::after {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    border-radius: inherit;
    border: 1px solid var(--wui-accent-glass-010);
    pointer-events: none;
  }

  button > wui-icon:last-child {
    width: 14px;
    height: 14px;
  }

  button:disabled {
    background-color: var(--wui-gray-glass-015);
    color: var(--wui-gray-glass-015);
  }

  button[data-loading='true'] > wui-icon {
    transition: opacity 200ms ease-in-out;
    opacity: 0;
  }

  wui-loading-spinner {
    position: absolute;
    right: 18px;
    top: 50%;
    transform: translateY(-50%);
  }
`;var Xd=function(e,t,n,i){var r,a=arguments.length,o=a<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,n,i);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(o=(a<3?r(o):a>3?r(t,n,o):r(t,n))||o);return a>3&&o&&Object.defineProperty(t,n,o),o};let ep=class extends dl{constructor(){super(...arguments),this.variant="icon",this.disabled=!1,this.imageSrc=void 0,this.alt=void 0,this.chevron=!1,this.loading=!1}render(){return qs`
      <button
        ?disabled=${!!this.loading||Boolean(this.disabled)}
        data-loading=${this.loading}
        data-iconvariant=${Ru(this.iconVariant)}
        ontouchstart
      >
        ${this.loadingTemplate()} ${this.visualTemplate()}
        <wui-flex gap="3xs">
          <slot></slot>
        </wui-flex>
        ${this.chevronTemplate()}
      </button>
    `}visualTemplate(){if("image"===this.variant&&this.imageSrc)return qs`<wui-image src=${this.imageSrc} alt=${this.alt??"list item"}></wui-image>`;if("square"===this.iconVariant&&this.icon&&"icon"===this.variant)return qs`<wui-icon name=${this.icon}></wui-icon>`;if("icon"===this.variant&&this.icon&&this.iconVariant){const e=["blue","square-blue"].includes(this.iconVariant)?"accent-100":"fg-200",t="square-blue"===this.iconVariant?"mdl":"md",n=this.iconSize?this.iconSize:t;return qs`
        <wui-icon-box
          data-variant=${this.iconVariant}
          icon=${this.icon}
          iconSize=${n}
          background="transparent"
          iconColor=${e}
          backgroundColor=${e}
          size=${t}
        ></wui-icon-box>
      `}return null}loadingTemplate(){return this.loading?qs`<wui-loading-spinner color="fg-300"></wui-loading-spinner>`:qs``}chevronTemplate(){return this.chevron?qs`<wui-icon size="inherit" color="fg-200" name="chevronRight"></wui-icon>`:null}};var tp,np;ep.styles=[bl,xl,Qd],Xd([$l()],ep.prototype,"icon",void 0),Xd([$l()],ep.prototype,"iconSize",void 0),Xd([$l()],ep.prototype,"variant",void 0),Xd([$l()],ep.prototype,"iconVariant",void 0),Xd([$l({type:Boolean})],ep.prototype,"disabled",void 0),Xd([$l()],ep.prototype,"imageSrc",void 0),Xd([$l()],ep.prototype,"alt",void 0),Xd([$l({type:Boolean})],ep.prototype,"chevron",void 0),Xd([$l({type:Boolean})],ep.prototype,"loading",void 0),ep=Xd([_l("wui-list-item")],ep),(np=tp||(tp={})).approve="approved",np.bought="bought",np.borrow="borrowed",np.burn="burnt",np.cancel="canceled",np.claim="claimed",np.deploy="deployed",np.deposit="deposited",np.execute="executed",np.mint="minted",np.receive="received",np.repay="repaid",np.send="sent",np.sell="sold",np.stake="staked",np.trade="swapped",np.unstake="unstaked",np.withdraw="withdrawn";const ip=ds`
  :host > wui-flex {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    width: 40px;
    height: 40px;
    box-shadow: inset 0 0 0 1px var(--wui-gray-glass-005);
    background-color: var(--wui-gray-glass-005);
  }

  :host > wui-flex wui-image {
    display: block;
  }

  :host > wui-flex,
  :host > wui-flex wui-image,
  .swap-images-container,
  .swap-images-container.nft,
  wui-image.nft {
    border-top-left-radius: var(--local-left-border-radius);
    border-top-right-radius: var(--local-right-border-radius);
    border-bottom-left-radius: var(--local-left-border-radius);
    border-bottom-right-radius: var(--local-right-border-radius);
  }

  wui-icon {
    width: 20px;
    height: 20px;
  }

  wui-icon-box {
    position: absolute;
    right: 0;
    bottom: 0;
    transform: translate(20%, 20%);
  }

  .swap-images-container {
    position: relative;
    width: 40px;
    height: 40px;
    overflow: hidden;
  }

  .swap-images-container wui-image:first-child {
    position: absolute;
    width: 40px;
    height: 40px;
    top: 0;
    left: 0%;
    clip-path: inset(0px calc(50% + 2px) 0px 0%);
  }

  .swap-images-container wui-image:last-child {
    clip-path: inset(0px 0px 0px calc(50% + 2px));
  }
`;var rp=function(e,t,n,i){var r,a=arguments.length,o=a<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,n,i);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(o=(a<3?r(o):a>3?r(t,n,o):r(t,n))||o);return a>3&&o&&Object.defineProperty(t,n,o),o};let ap=class extends dl{constructor(){super(...arguments),this.images=[],this.secondImage={type:void 0,url:""}}render(){const[e,t]=this.images,n="NFT"===(null==e?void 0:e.type),i=n?"var(--wui-border-radius-xxs)":"var(--wui-border-radius-s)",r=((null==t?void 0:t.url)?"NFT"===t.type:n)?"var(--wui-border-radius-xxs)":"var(--wui-border-radius-s)";return this.style.cssText=`\n    --local-left-border-radius: ${i};\n    --local-right-border-radius: ${r};\n    `,qs`<wui-flex> ${this.templateVisual()} ${this.templateIcon()} </wui-flex>`}templateVisual(){const[e,t]=this.images,n=null==e?void 0:e.type;return 2===this.images.length&&((null==e?void 0:e.url)||(null==t?void 0:t.url))?qs`<div class="swap-images-container">
        ${(null==e?void 0:e.url)?qs`<wui-image src=${e.url} alt="Transaction image"></wui-image>`:null}
        ${(null==t?void 0:t.url)?qs`<wui-image src=${t.url} alt="Transaction image"></wui-image>`:null}
      </div>`:(null==e?void 0:e.url)?qs`<wui-image src=${e.url} alt="Transaction image"></wui-image>`:"NFT"===n?qs`<wui-icon size="inherit" color="fg-200" name="nftPlaceholder"></wui-icon>`:qs`<wui-icon size="inherit" color="fg-200" name="coinPlaceholder"></wui-icon>`}templateIcon(){let e,t="accent-100";return e=this.getIcon(),this.status&&(t=this.getStatusColor()),e?qs`
      <wui-icon-box
        size="xxs"
        iconColor=${t}
        backgroundColor=${t}
        background="opaque"
        icon=${e}
        ?border=${!0}
        borderColor="wui-color-bg-125"
      ></wui-icon-box>
    `:null}getDirectionIcon(){switch(this.direction){case"in":return"arrowBottom";case"out":return"arrowTop";default:return}}getIcon(){return this.onlyDirectionIcon?this.getDirectionIcon():"trade"===this.type?"swapHorizontalBold":"approve"===this.type?"checkmark":"cancel"===this.type?"close":this.getDirectionIcon()}getStatusColor(){switch(this.status){case"confirmed":return"success-100";case"failed":return"error-100";case"pending":return"inverse-100";default:return"accent-100"}}};ap.styles=[ip],rp([$l()],ap.prototype,"type",void 0),rp([$l()],ap.prototype,"status",void 0),rp([$l()],ap.prototype,"direction",void 0),rp([$l({type:Boolean})],ap.prototype,"onlyDirectionIcon",void 0),rp([$l({type:Array})],ap.prototype,"images",void 0),rp([$l({type:Object})],ap.prototype,"secondImage",void 0),ap=rp([_l("wui-transaction-visual")],ap);const op=ds`
  :host > wui-flex:first-child {
    align-items: center;
    column-gap: var(--wui-spacing-s);
    padding: 6.5px var(--wui-spacing-xs) 6.5px var(--wui-spacing-xs);
    width: 100%;
  }

  :host > wui-flex:first-child wui-text:nth-child(1) {
    text-transform: capitalize;
  }

  wui-transaction-visual {
    width: 40px;
    height: 40px;
  }

  wui-flex {
    flex: 1;
  }

  :host wui-flex wui-flex {
    overflow: hidden;
  }

  :host .description-container wui-text span {
    word-break: break-all;
  }

  :host .description-container wui-text {
    overflow: hidden;
  }

  :host .description-separator-icon {
    margin: 0px 6px;
  }

  :host wui-text > span {
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
  }
`;var sp=function(e,t,n,i){var r,a=arguments.length,o=a<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,n,i);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(o=(a<3?r(o):a>3?r(t,n,o):r(t,n))||o);return a>3&&o&&Object.defineProperty(t,n,o),o};let lp=class extends dl{constructor(){super(...arguments),this.type="approve",this.onlyDirectionIcon=!1,this.images=[],this.price=[],this.amount=[],this.symbol=[]}render(){return qs`
      <wui-flex>
        <wui-transaction-visual
          .status=${this.status}
          direction=${Ru(this.direction)}
          type=${this.type}
          onlyDirectionIcon=${Ru(this.onlyDirectionIcon)}
          .images=${this.images}
        ></wui-transaction-visual>
        <wui-flex flexDirection="column" gap="3xs">
          <wui-text variant="paragraph-600" color="fg-100">
            ${tp[this.type]||this.type}
          </wui-text>
          <wui-flex class="description-container">
            ${this.templateDescription()} ${this.templateSecondDescription()}
          </wui-flex>
        </wui-flex>
        <wui-text variant="micro-700" color="fg-300"><span>${this.date}</span></wui-text>
      </wui-flex>
    `}templateDescription(){var e;const t=null==(e=this.descriptions)?void 0:e[0];return t?qs`
          <wui-text variant="small-500" color="fg-200">
            <span>${t}</span>
          </wui-text>
        `:null}templateSecondDescription(){var e;const t=null==(e=this.descriptions)?void 0:e[1];return t?qs`
          <wui-icon class="description-separator-icon" size="xxs" name="arrowRight"></wui-icon>
          <wui-text variant="small-400" color="fg-200">
            <span>${t}</span>
          </wui-text>
        `:null}};lp.styles=[bl,op],sp([$l()],lp.prototype,"type",void 0),sp([$l({type:Array})],lp.prototype,"descriptions",void 0),sp([$l()],lp.prototype,"date",void 0),sp([$l({type:Boolean})],lp.prototype,"onlyDirectionIcon",void 0),sp([$l()],lp.prototype,"status",void 0),sp([$l()],lp.prototype,"direction",void 0),sp([$l({type:Array})],lp.prototype,"images",void 0),sp([$l({type:Array})],lp.prototype,"price",void 0),sp([$l({type:Array})],lp.prototype,"amount",void 0),sp([$l({type:Array})],lp.prototype,"symbol",void 0),lp=sp([_l("wui-transaction-list-item")],lp);const cp=ds`
  :host > wui-flex:first-child {
    column-gap: var(--wui-spacing-s);
    padding: 7px var(--wui-spacing-l) 7px var(--wui-spacing-xs);
    width: 100%;
  }

  wui-flex {
    display: flex;
    flex: 1;
  }
`;let up=class extends dl{render(){return qs`
      <wui-flex alignItems="center">
        <wui-shimmer width="40px" height="40px"></wui-shimmer>
        <wui-flex flexDirection="column" gap="2xs">
          <wui-shimmer width="72px" height="16px" borderRadius="4xs"></wui-shimmer>
          <wui-shimmer width="148px" height="14px" borderRadius="4xs"></wui-shimmer>
        </wui-flex>
        <wui-shimmer width="24px" height="12px" borderRadius="5xs"></wui-shimmer>
      </wui-flex>
    `}};up.styles=[bl,cp],up=function(e,t,n,i){var r,a=arguments.length,o=a<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,n,i);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(o=(a<3?r(o):a>3?r(t,n,o):r(t,n))||o);return a>3&&o&&Object.defineProperty(t,n,o),o}([_l("wui-transaction-list-item-loader")],up);const dp=ds`
  :host {
    display: block;
    padding: 3.5px 5px !important;
    border-radius: var(--wui-border-radius-5xs);
  }

  :host([data-variant='main']) {
    background-color: var(--wui-accent-glass-015);
    color: var(--wui-color-accent-100);
  }

  :host([data-variant='shade']) {
    background-color: var(--wui-gray-glass-010);
    color: var(--wui-color-fg-200);
  }

  :host([data-variant='success']) {
    background-color: var(--wui-icon-box-bg-success-100);
    color: var(--wui-color-success-100);
  }

  :host([data-variant='error']) {
    background-color: var(--wui-icon-box-bg-error-100);
    color: var(--wui-color-error-100);
  }
`;var pp=function(e,t,n,i){var r,a=arguments.length,o=a<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,n,i);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(o=(a<3?r(o):a>3?r(t,n,o):r(t,n))||o);return a>3&&o&&Object.defineProperty(t,n,o),o};let hp=class extends dl{constructor(){super(...arguments),this.variant="main"}render(){return this.dataset.variant=this.variant,qs`
      <wui-text data-variant=${this.variant} variant="micro-700" color="inherit">
        <slot></slot>
      </wui-text>
    `}};hp.styles=[bl,dp],pp([$l()],hp.prototype,"variant",void 0),hp=pp([_l("wui-tag")],hp);const fp=ds`
  button {
    column-gap: var(--wui-spacing-s);
    padding: 7px var(--wui-spacing-l) 7px var(--wui-spacing-xs);
    width: 100%;
    background-color: var(--wui-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
    color: var(--wui-color-fg-100);
  }

  button > wui-text:nth-child(2) {
    display: flex;
    flex: 1;
  }

  wui-icon {
    color: var(--wui-color-fg-200) !important;
  }

  button:disabled {
    background-color: var(--wui-gray-glass-015);
    color: var(--wui-gray-glass-015);
  }

  button:disabled > wui-tag {
    background-color: var(--wui-gray-glass-010);
    color: var(--wui-color-fg-300);
  }
`;var mp=function(e,t,n,i){var r,a=arguments.length,o=a<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,n,i);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(o=(a<3?r(o):a>3?r(t,n,o):r(t,n))||o);return a>3&&o&&Object.defineProperty(t,n,o),o};let gp=class extends dl{constructor(){super(...arguments),this.walletImages=[],this.imageSrc="",this.name="",this.installed=!1,this.disabled=!1,this.showAllWallets=!1}render(){return qs`
      <button ?disabled=${this.disabled} ontouchstart>
        ${this.templateAllWallets()} ${this.templateWalletImage()}
        <wui-text variant="paragraph-500" color="inherit">${this.name}</wui-text>
        ${this.templateStatus()}
      </button>
    `}templateAllWallets(){return this.showAllWallets&&this.imageSrc?qs` <wui-all-wallets-image .imageeSrc=${this.imageSrc}> </wui-all-wallets-image> `:this.showAllWallets&&this.walletIcon?qs` <wui-wallet-image .walletIcon=${this.walletIcon} size="sm"> </wui-wallet-image> `:null}templateWalletImage(){return!this.showAllWallets&&this.imageSrc?qs`<wui-wallet-image
        size="sm"
        imageSrc=${this.imageSrc}
        name=${this.name}
        .installed=${this.installed}
      ></wui-wallet-image>`:this.showAllWallets||this.imageSrc?null:qs`<wui-wallet-image size="sm" name=${this.name}></wui-wallet-image>`}templateStatus(){return this.tagLabel&&this.tagVariant?qs`<wui-tag variant=${this.tagVariant}>${this.tagLabel}</wui-tag>`:this.icon?qs`<wui-icon color="inherit" size="sm" name=${this.icon}></wui-icon>`:null}};gp.styles=[bl,xl,fp],mp([$l({type:Array})],gp.prototype,"walletImages",void 0),mp([$l()],gp.prototype,"imageSrc",void 0),mp([$l()],gp.prototype,"name",void 0),mp([$l()],gp.prototype,"tagLabel",void 0),mp([$l()],gp.prototype,"tagVariant",void 0),mp([$l()],gp.prototype,"icon",void 0),mp([$l()],gp.prototype,"walletIcon",void 0),mp([$l({type:Boolean})],gp.prototype,"installed",void 0),mp([$l({type:Boolean})],gp.prototype,"disabled",void 0),mp([$l({type:Boolean})],gp.prototype,"showAllWallets",void 0),gp=mp([_l("wui-list-wallet")],gp);const wp=ds`
  :host {
    display: block;
    width: 40px;
    height: 40px;
    border-radius: var(--wui-border-radius-3xl);
    border: 1px solid var(--wui-gray-glass-010);
    overflow: hidden;
  }

  wui-icon {
    width: 100%;
    height: 100%;
  }
`;var yp=function(e,t,n,i){var r,a=arguments.length,o=a<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,n,i);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(o=(a<3?r(o):a>3?r(t,n,o):r(t,n))||o);return a>3&&o&&Object.defineProperty(t,n,o),o};let vp=class extends dl{constructor(){super(...arguments),this.logo="google"}render(){return qs`<wui-icon color="inherit" size="inherit" name=${this.logo}></wui-icon> `}};vp.styles=[bl,wp],yp([$l()],vp.prototype,"logo",void 0),vp=yp([_l("wui-logo")],vp);const bp=ds`
  :host {
    display: block;
  }

  button {
    width: 50px;
    height: 50px;
    background: var(--wui-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
  }
`;var xp=function(e,t,n,i){var r,a=arguments.length,o=a<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,n,i);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(o=(a<3?r(o):a>3?r(t,n,o):r(t,n))||o);return a>3&&o&&Object.defineProperty(t,n,o),o};let Cp=class extends dl{constructor(){super(...arguments),this.logo="google",this.disabled=!1}render(){return qs`
      <button ?disabled=${this.disabled} ontouchstart>
        <wui-logo logo=${this.logo}></wui-logo>
      </button>
    `}};Cp.styles=[bl,xl,bp],xp([$l()],Cp.prototype,"logo",void 0),xp([$l({type:Boolean})],Cp.prototype,"disabled",void 0),Cp=xp([_l("wui-logo-select")],Cp);const _p=ds`
  :host {
    display: block;
  }

  button {
    border-radius: var(--wui-border-radius-3xl);
    display: flex;
    gap: var(--wui-spacing-xs);
    padding: var(--wui-spacing-2xs) var(--wui-spacing-s) var(--wui-spacing-2xs)
      var(--wui-spacing-xs);
    border: 1px solid var(--wui-gray-glass-010);
    background-color: var(--wui-gray-glass-005);
    color: var(--wui-color-fg-100);
  }

  button:disabled {
    border: 1px solid var(--wui-gray-glass-005);
    background-color: var(--wui-gray-glass-015);
    color: var(--wui-gray-glass-015);
  }

  @media (hover: hover) and (pointer: fine) {
    button:hover:enabled {
      background-color: var(--wui-gray-glass-010);
    }

    button:active:enabled {
      background-color: var(--wui-gray-glass-015);
    }
  }

  wui-image,
  wui-icon-box {
    border-radius: var(--wui-border-radius-3xl);
    width: 24px;
    height: 24px;
    box-shadow: 0 0 0 2px var(--wui-gray-glass-005);
  }
`;var Ep=function(e,t,n,i){var r,a=arguments.length,o=a<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,n,i);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(o=(a<3?r(o):a>3?r(t,n,o):r(t,n))||o);return a>3&&o&&Object.defineProperty(t,n,o),o};let kp=class extends dl{constructor(){super(...arguments),this.imageSrc=void 0,this.isUnsupportedChain=void 0,this.disabled=!1}render(){return qs`
      <button ?disabled=${this.disabled}>
        ${this.visualTemplate()}
        <wui-text variant="paragraph-600" color="inherit">
          <slot></slot>
        </wui-text>
      </button>
    `}visualTemplate(){return this.isUnsupportedChain?qs`
        <wui-icon-box
          size="sm"
          iconColor="error-100"
          backgroundColor="error-100"
          icon="warningCircle"
        ></wui-icon-box>
      `:this.imageSrc?qs`<wui-image src=${this.imageSrc}></wui-image>`:qs`
      <wui-icon-box
        size="sm"
        iconColor="inverse-100"
        backgroundColor="fg-100"
        icon="networkPlaceholder"
      ></wui-icon-box>
    `}};kp.styles=[bl,xl,_p],Ep([$l()],kp.prototype,"imageSrc",void 0),Ep([$l({type:Boolean})],kp.prototype,"isUnsupportedChain",void 0),Ep([$l({type:Boolean})],kp.prototype,"disabled",void 0),kp=Ep([_l("wui-network-button")],kp);const Tp=ds`
  :host {
    position: relative;
    display: block;
  }
`;var Ap=function(e,t,n,i){var r,a=arguments.length,o=a<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,n,i);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(o=(a<3?r(o):a>3?r(t,n,o):r(t,n))||o);return a>3&&o&&Object.defineProperty(t,n,o),o};let $p=class extends dl{constructor(){super(...arguments),this.length=6,this.otp="",this.values=Array.from({length:this.length}).map((()=>"")),this.numerics=[],this.shouldInputBeEnabled=e=>this.values.slice(0,e).every((e=>""!==e)),this.handleKeyDown=(e,t)=>{const n=e.target,i=this.getInputElement(n);if(!i)return;["ArrowLeft","ArrowRight","Shift","Delete"].includes(e.key)&&e.preventDefault();const r=i.selectionStart;switch(e.key){case"ArrowLeft":r&&i.setSelectionRange(r+1,r+1),this.focusInputField("prev",t);break;case"ArrowRight":case"Shift":this.focusInputField("next",t);break;case"Delete":case"Backspace":""===i.value?this.focusInputField("prev",t):this.updateInput(i,t,"")}},this.focusInputField=(e,t)=>{if("next"===e){const e=t+1;if(!this.shouldInputBeEnabled(e))return;const n=this.numerics[e<this.length?e:t],i=n?this.getInputElement(n):void 0;i&&(i.disabled=!1,i.focus())}if("prev"===e){const e=t-1,n=this.numerics[e>-1?e:t],i=n?this.getInputElement(n):void 0;i&&i.focus()}}}firstUpdated(){var e,t;this.otp&&(this.values=this.otp.split(""));const n=null==(e=this.shadowRoot)?void 0:e.querySelectorAll("wui-input-numeric");n&&(this.numerics=Array.from(n)),null==(t=this.numerics[0])||t.focus()}render(){return qs`
      <wui-flex gap="xxs" data-testid="wui-otp-input">
        ${Array.from({length:this.length}).map(((e,t)=>qs`
            <wui-input-numeric
              @input=${e=>this.handleInput(e,t)}
              @click=${e=>this.selectInput(e)}
              @keydown=${e=>this.handleKeyDown(e,t)}
              .disabled=${!this.shouldInputBeEnabled(t)}
              .value=${this.values[t]||""}
            >
            </wui-input-numeric>
          `))}
      </wui-flex>
    `}updateInput(e,t,n){const i=this.numerics[t],r=e||(i?this.getInputElement(i):void 0);r&&(r.value=n,this.values=this.values.map(((e,i)=>i===t?n:e)))}selectInput(e){const t=e.target;if(t){const e=this.getInputElement(t);null==e||e.select()}}handleInput(e,t){const n=e.target,i=this.getInputElement(n);if(i){const n=i.value;if("insertFromPaste"===e.inputType)this.handlePaste(i,n,t);else{Ou.isNumber(n)&&e.data?(this.updateInput(i,t,e.data),this.focusInputField("next",t)):this.updateInput(i,t,"")}}this.dispatchInputChangeEvent()}handlePaste(e,t,n){const i=t[0];if(i&&Ou.isNumber(i)){this.updateInput(e,n,i);const r=t.substring(1);if(n+1<this.length&&r.length){const e=this.numerics[n+1],t=e?this.getInputElement(e):void 0;t&&this.handlePaste(t,r,n+1)}else this.focusInputField("next",n)}else this.updateInput(e,n,"")}getInputElement(e){var t;return(null==(t=e.shadowRoot)?void 0:t.querySelector("input"))?e.shadowRoot.querySelector("input"):null}dispatchInputChangeEvent(){const e=this.values.join("");this.dispatchEvent(new CustomEvent("inputChange",{detail:e,bubbles:!0,composed:!0}))}};$p.styles=[bl,Tp],Ap([$l({type:Number})],$p.prototype,"length",void 0),Ap([$l({type:String})],$p.prototype,"otp",void 0),Ap([Il()],$p.prototype,"values",void 0),$p=Ap([_l("wui-otp")],$p);var Ip={},Pp={},Sp={};let Rp;const Op=[0,26,44,70,100,134,172,196,242,292,346,404,466,532,581,655,733,815,901,991,1085,1156,1258,1364,1474,1588,1706,1828,1921,2051,2185,2323,2465,2611,2761,2876,3034,3196,3362,3532,3706];Sp.getSymbolSize=function(e){if(!e)throw new Error('"version" cannot be null or undefined');if(e<1||e>40)throw new Error('"version" should be in range from 1 to 40');return 4*e+17},Sp.getSymbolTotalCodewords=function(e){return Op[e]},Sp.getBCHDigit=function(e){let t=0;for(;0!==e;)t++,e>>>=1;return t},Sp.setToSJISFunction=function(e){if("function"!=typeof e)throw new Error('"toSJISFunc" is not a valid function.');Rp=e},Sp.isKanjiModeEnabled=function(){return void 0!==Rp},Sp.toSJIS=function(e){return Rp(e)};var Np,Mp={};function jp(){this.buffer=[],this.length=0}(Np=Mp).L={bit:1},Np.M={bit:0},Np.Q={bit:3},Np.H={bit:2},Np.isValid=function(e){return e&&void 0!==e.bit&&e.bit>=0&&e.bit<4},Np.from=function(e,t){if(Np.isValid(e))return e;try{return function(e){if("string"!=typeof e)throw new Error("Param is not a string");switch(e.toLowerCase()){case"l":case"low":return Np.L;case"m":case"medium":return Np.M;case"q":case"quartile":return Np.Q;case"h":case"high":return Np.H;default:throw new Error("Unknown EC Level: "+e)}}(e)}catch(n){return t}},jp.prototype={get:function(e){const t=Math.floor(e/8);return 1==(this.buffer[t]>>>7-e%8&1)},put:function(e,t){for(let n=0;n<t;n++)this.putBit(1==(e>>>t-n-1&1))},getLengthInBits:function(){return this.length},putBit:function(e){const t=Math.floor(this.length/8);this.buffer.length<=t&&this.buffer.push(0),e&&(this.buffer[t]|=128>>>this.length%8),this.length++}};var Up=jp;function Dp(e){if(!e||e<1)throw new Error("BitMatrix size must be defined and greater than 0");this.size=e,this.data=new Uint8Array(e*e),this.reservedBit=new Uint8Array(e*e)}Dp.prototype.set=function(e,t,n,i){const r=e*this.size+t;this.data[r]=n,i&&(this.reservedBit[r]=!0)},Dp.prototype.get=function(e,t){return this.data[e*this.size+t]},Dp.prototype.xor=function(e,t,n){this.data[e*this.size+t]^=n},Dp.prototype.isReserved=function(e,t){return this.reservedBit[e*this.size+t]};var Bp=Dp,Lp={};!function(e){const t=Sp.getSymbolSize;e.getRowColCoords=function(e){if(1===e)return[];const n=Math.floor(e/7)+2,i=t(e),r=145===i?26:2*Math.ceil((i-13)/(2*n-2)),a=[i-7];for(let t=1;t<n-1;t++)a[t]=a[t-1]-r;return a.push(6),a.reverse()},e.getPositions=function(t){const n=[],i=e.getRowColCoords(t),r=i.length;for(let e=0;e<r;e++)for(let t=0;t<r;t++)0===e&&0===t||0===e&&t===r-1||e===r-1&&0===t||n.push([i[e],i[t]]);return n}}(Lp);var zp={};const Fp=Sp.getSymbolSize;zp.getPositions=function(e){const t=Fp(e);return[[0,0],[t-7,0],[0,t-7]]};var Wp={};!function(e){e.Patterns={PATTERN000:0,PATTERN001:1,PATTERN010:2,PATTERN011:3,PATTERN100:4,PATTERN101:5,PATTERN110:6,PATTERN111:7};const t=3,n=3,i=40,r=10;function a(t,n,i){switch(t){case e.Patterns.PATTERN000:return(n+i)%2==0;case e.Patterns.PATTERN001:return n%2==0;case e.Patterns.PATTERN010:return i%3==0;case e.Patterns.PATTERN011:return(n+i)%3==0;case e.Patterns.PATTERN100:return(Math.floor(n/2)+Math.floor(i/3))%2==0;case e.Patterns.PATTERN101:return n*i%2+n*i%3==0;case e.Patterns.PATTERN110:return(n*i%2+n*i%3)%2==0;case e.Patterns.PATTERN111:return(n*i%3+(n+i)%2)%2==0;default:throw new Error("bad maskPattern:"+t)}}e.isValid=function(e){return null!=e&&""!==e&&!isNaN(e)&&e>=0&&e<=7},e.from=function(t){return e.isValid(t)?parseInt(t,10):void 0},e.getPenaltyN1=function(e){const n=e.size;let i=0,r=0,a=0,o=null,s=null;for(let l=0;l<n;l++){r=a=0,o=s=null;for(let c=0;c<n;c++){let n=e.get(l,c);n===o?r++:(r>=5&&(i+=t+(r-5)),o=n,r=1),n=e.get(c,l),n===s?a++:(a>=5&&(i+=t+(a-5)),s=n,a=1)}r>=5&&(i+=t+(r-5)),a>=5&&(i+=t+(a-5))}return i},e.getPenaltyN2=function(e){const t=e.size;let i=0;for(let n=0;n<t-1;n++)for(let r=0;r<t-1;r++){const t=e.get(n,r)+e.get(n,r+1)+e.get(n+1,r)+e.get(n+1,r+1);4!==t&&0!==t||i++}return i*n},e.getPenaltyN3=function(e){const t=e.size;let n=0,r=0,a=0;for(let i=0;i<t;i++){r=a=0;for(let o=0;o<t;o++)r=r<<1&2047|e.get(i,o),o>=10&&(1488===r||93===r)&&n++,a=a<<1&2047|e.get(o,i),o>=10&&(1488===a||93===a)&&n++}return n*i},e.getPenaltyN4=function(e){let t=0;const n=e.data.length;for(let i=0;i<n;i++)t+=e.data[i];return Math.abs(Math.ceil(100*t/n/5)-10)*r},e.applyMask=function(e,t){const n=t.size;for(let i=0;i<n;i++)for(let r=0;r<n;r++)t.isReserved(r,i)||t.xor(r,i,a(e,r,i))},e.getBestMask=function(t,n){const i=Object.keys(e.Patterns).length;let r=0,a=1/0;for(let o=0;o<i;o++){n(o),e.applyMask(o,t);const i=e.getPenaltyN1(t)+e.getPenaltyN2(t)+e.getPenaltyN3(t)+e.getPenaltyN4(t);e.applyMask(o,t),i<a&&(a=i,r=o)}return r}}(Wp);var Hp={};const Zp=Mp,Vp=[1,1,1,1,1,1,1,1,1,1,2,2,1,2,2,4,1,2,4,4,2,4,4,4,2,4,6,5,2,4,6,6,2,5,8,8,4,5,8,8,4,5,8,11,4,8,10,11,4,9,12,16,4,9,16,16,6,10,12,18,6,10,17,16,6,11,16,19,6,13,18,21,7,14,21,25,8,16,20,25,8,17,23,25,9,17,23,34,9,18,25,30,10,20,27,32,12,21,29,35,12,23,34,37,12,25,34,40,13,26,35,42,14,28,38,45,15,29,40,48,16,31,43,51,17,33,45,54,18,35,48,57,19,37,51,60,19,38,53,63,20,40,56,66,21,43,59,70,22,45,62,74,24,47,65,77,25,49,68,81],Gp=[7,10,13,17,10,16,22,28,15,26,36,44,20,36,52,64,26,48,72,88,36,64,96,112,40,72,108,130,48,88,132,156,60,110,160,192,72,130,192,224,80,150,224,264,96,176,260,308,104,198,288,352,120,216,320,384,132,240,360,432,144,280,408,480,168,308,448,532,180,338,504,588,196,364,546,650,224,416,600,700,224,442,644,750,252,476,690,816,270,504,750,900,300,560,810,960,312,588,870,1050,336,644,952,1110,360,700,1020,1200,390,728,1050,1260,420,784,1140,1350,450,812,1200,1440,480,868,1290,1530,510,924,1350,1620,540,980,1440,1710,570,1036,1530,1800,570,1064,1590,1890,600,1120,1680,1980,630,1204,1770,2100,660,1260,1860,2220,720,1316,1950,2310,750,1372,2040,2430];Hp.getBlocksCount=function(e,t){switch(t){case Zp.L:return Vp[4*(e-1)+0];case Zp.M:return Vp[4*(e-1)+1];case Zp.Q:return Vp[4*(e-1)+2];case Zp.H:return Vp[4*(e-1)+3];default:return}},Hp.getTotalCodewordsCount=function(e,t){switch(t){case Zp.L:return Gp[4*(e-1)+0];case Zp.M:return Gp[4*(e-1)+1];case Zp.Q:return Gp[4*(e-1)+2];case Zp.H:return Gp[4*(e-1)+3];default:return}};var qp={},Kp={};const Yp=new Uint8Array(512),Jp=new Uint8Array(256);!function(){let e=1;for(let t=0;t<255;t++)Yp[t]=e,Jp[e]=t,e<<=1,256&e&&(e^=285);for(let t=255;t<512;t++)Yp[t]=Yp[t-255]}(),Kp.log=function(e){if(e<1)throw new Error("log("+e+")");return Jp[e]},Kp.exp=function(e){return Yp[e]},Kp.mul=function(e,t){return 0===e||0===t?0:Yp[Jp[e]+Jp[t]]},function(e){const t=Kp;e.mul=function(e,n){const i=new Uint8Array(e.length+n.length-1);for(let r=0;r<e.length;r++)for(let a=0;a<n.length;a++)i[r+a]^=t.mul(e[r],n[a]);return i},e.mod=function(e,n){let i=new Uint8Array(e);for(;i.length-n.length>=0;){const e=i[0];for(let a=0;a<n.length;a++)i[a]^=t.mul(n[a],e);let r=0;for(;r<i.length&&0===i[r];)r++;i=i.slice(r)}return i},e.generateECPolynomial=function(n){let i=new Uint8Array([1]);for(let r=0;r<n;r++)i=e.mul(i,new Uint8Array([1,t.exp(r)]));return i}}(qp);const Qp=qp;function Xp(e){this.genPoly=void 0,this.degree=e,this.degree&&this.initialize(this.degree)}Xp.prototype.initialize=function(e){this.degree=e,this.genPoly=Qp.generateECPolynomial(this.degree)},Xp.prototype.encode=function(e){if(!this.genPoly)throw new Error("Encoder not initialized");const t=new Uint8Array(e.length+this.degree);t.set(e);const n=Qp.mod(t,this.genPoly),i=this.degree-n.length;if(i>0){const e=new Uint8Array(this.degree);return e.set(n,i),e}return n};var eh=Xp,th={},nh={},ih={isValid:function(e){return!isNaN(e)&&e>=1&&e<=40}},rh={};const ah="[0-9]+";let oh="(?:[u3000-u303F]|[u3040-u309F]|[u30A0-u30FF]|[uFF00-uFFEF]|[u4E00-u9FAF]|[u2605-u2606]|[u2190-u2195]|u203B|[u2010u2015u2018u2019u2025u2026u201Cu201Du2225u2260]|[u0391-u0451]|[u00A7u00A8u00B1u00B4u00D7u00F7])+";oh=oh.replace(/u/g,"\\u");const sh="(?:(?![A-Z0-9 $%*+\\-./:]|"+oh+")(?:.|[\r\n]))+";rh.KANJI=new RegExp(oh,"g"),rh.BYTE_KANJI=new RegExp("[^A-Z0-9 $%*+\\-./:]+","g"),rh.BYTE=new RegExp(sh,"g"),rh.NUMERIC=new RegExp(ah,"g"),rh.ALPHANUMERIC=new RegExp("[A-Z $%*+\\-./:]+","g");const lh=new RegExp("^"+oh+"$"),ch=new RegExp("^"+ah+"$"),uh=new RegExp("^[A-Z0-9 $%*+\\-./:]+$");rh.testKanji=function(e){return lh.test(e)},rh.testNumeric=function(e){return ch.test(e)},rh.testAlphanumeric=function(e){return uh.test(e)},function(e){const t=ih,n=rh;e.NUMERIC={id:"Numeric",bit:1,ccBits:[10,12,14]},e.ALPHANUMERIC={id:"Alphanumeric",bit:2,ccBits:[9,11,13]},e.BYTE={id:"Byte",bit:4,ccBits:[8,16,16]},e.KANJI={id:"Kanji",bit:8,ccBits:[8,10,12]},e.MIXED={bit:-1},e.getCharCountIndicator=function(e,n){if(!e.ccBits)throw new Error("Invalid mode: "+e);if(!t.isValid(n))throw new Error("Invalid version: "+n);return n>=1&&n<10?e.ccBits[0]:n<27?e.ccBits[1]:e.ccBits[2]},e.getBestModeForData=function(t){return n.testNumeric(t)?e.NUMERIC:n.testAlphanumeric(t)?e.ALPHANUMERIC:n.testKanji(t)?e.KANJI:e.BYTE},e.toString=function(e){if(e&&e.id)return e.id;throw new Error("Invalid mode")},e.isValid=function(e){return e&&e.bit&&e.ccBits},e.from=function(t,n){if(e.isValid(t))return t;try{return function(t){if("string"!=typeof t)throw new Error("Param is not a string");switch(t.toLowerCase()){case"numeric":return e.NUMERIC;case"alphanumeric":return e.ALPHANUMERIC;case"kanji":return e.KANJI;case"byte":return e.BYTE;default:throw new Error("Unknown mode: "+t)}}(t)}catch(i){return n}}}(nh),function(e){const t=Sp,n=Hp,i=Mp,r=nh,a=ih,o=t.getBCHDigit(7973);function s(e,t){return r.getCharCountIndicator(e,t)+4}function l(e,t){let n=0;return e.forEach((function(e){const i=s(e.mode,t);n+=i+e.getBitsLength()})),n}e.from=function(e,t){return a.isValid(e)?parseInt(e,10):t},e.getCapacity=function(e,i,o){if(!a.isValid(e))throw new Error("Invalid QR Code version");void 0===o&&(o=r.BYTE);const l=8*(t.getSymbolTotalCodewords(e)-n.getTotalCodewordsCount(e,i));if(o===r.MIXED)return l;const c=l-s(o,e);switch(o){case r.NUMERIC:return Math.floor(c/10*3);case r.ALPHANUMERIC:return Math.floor(c/11*2);case r.KANJI:return Math.floor(c/13);case r.BYTE:default:return Math.floor(c/8)}},e.getBestVersionForData=function(t,n){let a;const o=i.from(n,i.M);if(Array.isArray(t)){if(t.length>1)return function(t,n){for(let i=1;i<=40;i++)if(l(t,i)<=e.getCapacity(i,n,r.MIXED))return i}(t,o);if(0===t.length)return 1;a=t[0]}else a=t;return function(t,n,i){for(let r=1;r<=40;r++)if(n<=e.getCapacity(r,i,t))return r}(a.mode,a.getLength(),o)},e.getEncodedBits=function(e){if(!a.isValid(e)||e<7)throw new Error("Invalid QR Code version");let n=e<<12;for(;t.getBCHDigit(n)-o>=0;)n^=7973<<t.getBCHDigit(n)-o;return e<<12|n}}(th);var dh={};const ph=Sp,hh=ph.getBCHDigit(1335);dh.getEncodedBits=function(e,t){const n=e.bit<<3|t;let i=n<<10;for(;ph.getBCHDigit(i)-hh>=0;)i^=1335<<ph.getBCHDigit(i)-hh;return 21522^(n<<10|i)};var fh={};const mh=nh;function gh(e){this.mode=mh.NUMERIC,this.data=e.toString()}gh.getBitsLength=function(e){return 10*Math.floor(e/3)+(e%3?e%3*3+1:0)},gh.prototype.getLength=function(){return this.data.length},gh.prototype.getBitsLength=function(){return gh.getBitsLength(this.data.length)},gh.prototype.write=function(e){let t,n,i;for(t=0;t+3<=this.data.length;t+=3)n=this.data.substr(t,3),i=parseInt(n,10),e.put(i,10);const r=this.data.length-t;r>0&&(n=this.data.substr(t),i=parseInt(n,10),e.put(i,3*r+1))};var wh=gh;const yh=nh,vh=["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"," ","$","%","*","+","-",".","/",":"];function bh(e){this.mode=yh.ALPHANUMERIC,this.data=e}bh.getBitsLength=function(e){return 11*Math.floor(e/2)+e%2*6},bh.prototype.getLength=function(){return this.data.length},bh.prototype.getBitsLength=function(){return bh.getBitsLength(this.data.length)},bh.prototype.write=function(e){let t;for(t=0;t+2<=this.data.length;t+=2){let n=45*vh.indexOf(this.data[t]);n+=vh.indexOf(this.data[t+1]),e.put(n,11)}this.data.length%2&&e.put(vh.indexOf(this.data[t]),6)};var xh=bh;const Ch=function(e){for(var t=[],n=e.length,i=0;i<n;i++){var r=e.charCodeAt(i);if(r>=55296&&r<=56319&&n>i+1){var a=e.charCodeAt(i+1);a>=56320&&a<=57343&&(r=1024*(r-55296)+a-56320+65536,i+=1)}r<128?t.push(r):r<2048?(t.push(r>>6|192),t.push(63&r|128)):r<55296||r>=57344&&r<65536?(t.push(r>>12|224),t.push(r>>6&63|128),t.push(63&r|128)):r>=65536&&r<=1114111?(t.push(r>>18|240),t.push(r>>12&63|128),t.push(r>>6&63|128),t.push(63&r|128)):t.push(239,191,189)}return new Uint8Array(t).buffer},_h=nh;function Eh(e){this.mode=_h.BYTE,"string"==typeof e&&(e=Ch(e)),this.data=new Uint8Array(e)}Eh.getBitsLength=function(e){return 8*e},Eh.prototype.getLength=function(){return this.data.length},Eh.prototype.getBitsLength=function(){return Eh.getBitsLength(this.data.length)},Eh.prototype.write=function(e){for(let t=0,n=this.data.length;t<n;t++)e.put(this.data[t],8)};var kh=Eh;const Th=nh,Ah=Sp;function $h(e){this.mode=Th.KANJI,this.data=e}$h.getBitsLength=function(e){return 13*e},$h.prototype.getLength=function(){return this.data.length},$h.prototype.getBitsLength=function(){return $h.getBitsLength(this.data.length)},$h.prototype.write=function(e){let t;for(t=0;t<this.data.length;t++){let n=Ah.toSJIS(this.data[t]);if(n>=33088&&n<=40956)n-=33088;else{if(!(n>=57408&&n<=60351))throw new Error("Invalid SJIS character: "+this.data[t]+"\nMake sure your charset is UTF-8");n-=49472}n=192*(n>>>8&255)+(255&n),e.put(n,13)}};var Ih,Ph=$h,Sh={exports:{}};Ih={single_source_shortest_paths:function(e,t,n){var i={},r={};r[t]=0;var a,o,s,l,c,u,d,p=Ih.PriorityQueue.make();for(p.push(t,0);!p.empty();)for(s in o=(a=p.pop()).value,l=a.cost,c=e[o]||{})c.hasOwnProperty(s)&&(u=l+c[s],d=r[s],(void 0===r[s]||d>u)&&(r[s]=u,p.push(s,u),i[s]=o));if(void 0!==n&&void 0===r[n]){var h=["Could not find a path from ",t," to ",n,"."].join("");throw new Error(h)}return i},extract_shortest_path_from_predecessor_list:function(e,t){for(var n=[],i=t;i;)n.push(i),e[i],i=e[i];return n.reverse(),n},find_path:function(e,t,n){var i=Ih.single_source_shortest_paths(e,t,n);return Ih.extract_shortest_path_from_predecessor_list(i,n)},PriorityQueue:{make:function(e){var t,n=Ih.PriorityQueue,i={};for(t in e=e||{},n)n.hasOwnProperty(t)&&(i[t]=n[t]);return i.queue=[],i.sorter=e.sorter||n.default_sorter,i},default_sorter:function(e,t){return e.cost-t.cost},push:function(e,t){var n={value:e,cost:t};this.queue.push(n),this.queue.sort(this.sorter)},pop:function(){return this.queue.shift()},empty:function(){return 0===this.queue.length}}};var Rh=Sh.exports=Ih;!function(e){const t=nh,n=wh,i=xh,r=kh,a=Ph,o=rh,s=Sp,l=Rh;function c(e){return unescape(encodeURIComponent(e)).length}function u(e,t,n){const i=[];let r;for(;null!==(r=e.exec(n));)i.push({data:r[0],index:r.index,mode:t,length:r[0].length});return i}function d(e){const n=u(o.NUMERIC,t.NUMERIC,e),i=u(o.ALPHANUMERIC,t.ALPHANUMERIC,e);let r,a;s.isKanjiModeEnabled()?(r=u(o.BYTE,t.BYTE,e),a=u(o.KANJI,t.KANJI,e)):(r=u(o.BYTE_KANJI,t.BYTE,e),a=[]);return n.concat(i,r,a).sort((function(e,t){return e.index-t.index})).map((function(e){return{data:e.data,mode:e.mode,length:e.length}}))}function p(e,o){switch(o){case t.NUMERIC:return n.getBitsLength(e);case t.ALPHANUMERIC:return i.getBitsLength(e);case t.KANJI:return a.getBitsLength(e);case t.BYTE:return r.getBitsLength(e)}}function h(e,o){let l;const c=t.getBestModeForData(e);if(l=t.from(o,c),l!==t.BYTE&&l.bit<c.bit)throw new Error('"'+e+'" cannot be encoded with mode '+t.toString(l)+".\n Suggested mode is: "+t.toString(c));switch(l!==t.KANJI||s.isKanjiModeEnabled()||(l=t.BYTE),l){case t.NUMERIC:return new n(e);case t.ALPHANUMERIC:return new i(e);case t.KANJI:return new a(e);case t.BYTE:return new r(e)}}e.fromArray=function(e){return e.reduce((function(e,t){return"string"==typeof t?e.push(h(t,null)):t.data&&e.push(h(t.data,t.mode)),e}),[])},e.fromString=function(n,i){const r=function(e){const n=[];for(let i=0;i<e.length;i++){const r=e[i];switch(r.mode){case t.NUMERIC:n.push([r,{data:r.data,mode:t.ALPHANUMERIC,length:r.length},{data:r.data,mode:t.BYTE,length:r.length}]);break;case t.ALPHANUMERIC:n.push([r,{data:r.data,mode:t.BYTE,length:r.length}]);break;case t.KANJI:n.push([r,{data:r.data,mode:t.BYTE,length:c(r.data)}]);break;case t.BYTE:n.push([{data:r.data,mode:t.BYTE,length:c(r.data)}])}}return n}(d(n,s.isKanjiModeEnabled())),a=function(e,n){const i={},r={start:{}};let a=["start"];for(let o=0;o<e.length;o++){const s=e[o],l=[];for(let e=0;e<s.length;e++){const c=s[e],u=""+o+e;l.push(u),i[u]={node:c,lastCount:0},r[u]={};for(let e=0;e<a.length;e++){const o=a[e];i[o]&&i[o].node.mode===c.mode?(r[o][u]=p(i[o].lastCount+c.length,c.mode)-p(i[o].lastCount,c.mode),i[o].lastCount+=c.length):(i[o]&&(i[o].lastCount=c.length),r[o][u]=p(c.length,c.mode)+4+t.getCharCountIndicator(c.mode,n))}}a=l}for(let t=0;t<a.length;t++)r[a[t]].end=0;return{map:r,table:i}}(r,i),o=l.find_path(a.map,"start","end"),u=[];for(let e=1;e<o.length-1;e++)u.push(a.table[o[e]].node);return e.fromArray(function(e){return e.reduce((function(e,t){const n=e.length-1>=0?e[e.length-1]:null;return n&&n.mode===t.mode?(e[e.length-1].data+=t.data,e):(e.push(t),e)}),[])}(u))},e.rawSplit=function(t){return e.fromArray(d(t,s.isKanjiModeEnabled()))}}(fh);const Oh=Sp,Nh=Mp,Mh=Up,jh=Bp,Uh=Lp,Dh=zp,Bh=Wp,Lh=Hp,zh=eh,Fh=th,Wh=dh,Hh=nh,Zh=fh;function Vh(e,t,n){const i=e.size,r=Wh.getEncodedBits(t,n);let a,o;for(a=0;a<15;a++)o=1==(r>>a&1),a<6?e.set(a,8,o,!0):a<8?e.set(a+1,8,o,!0):e.set(i-15+a,8,o,!0),a<8?e.set(8,i-a-1,o,!0):a<9?e.set(8,15-a-1+1,o,!0):e.set(8,15-a-1,o,!0);e.set(i-8,8,1,!0)}function Gh(e,t,n){const i=new Mh;n.forEach((function(t){i.put(t.mode.bit,4),i.put(t.getLength(),Hh.getCharCountIndicator(t.mode,e)),t.write(i)}));const r=8*(Oh.getSymbolTotalCodewords(e)-Lh.getTotalCodewordsCount(e,t));for(i.getLengthInBits()+4<=r&&i.put(0,4);i.getLengthInBits()%8!=0;)i.putBit(0);const a=(r-i.getLengthInBits())/8;for(let o=0;o<a;o++)i.put(o%2?17:236,8);return function(e,t,n){const i=Oh.getSymbolTotalCodewords(t),r=Lh.getTotalCodewordsCount(t,n),a=i-r,o=Lh.getBlocksCount(t,n),s=i%o,l=o-s,c=Math.floor(i/o),u=Math.floor(a/o),d=u+1,p=c-u,h=new zh(p);let f=0;const m=new Array(o),g=new Array(o);let w=0;const y=new Uint8Array(e.buffer);for(let _=0;_<o;_++){const e=_<l?u:d;m[_]=y.slice(f,f+e),g[_]=h.encode(m[_]),f+=e,w=Math.max(w,e)}const v=new Uint8Array(i);let b,x,C=0;for(b=0;b<w;b++)for(x=0;x<o;x++)b<m[x].length&&(v[C++]=m[x][b]);for(b=0;b<p;b++)for(x=0;x<o;x++)v[C++]=g[x][b];return v}(i,e,t)}function qh(e,t,n,i){let r;if(Array.isArray(e))r=Zh.fromArray(e);else{if("string"!=typeof e)throw new Error("Invalid data");{let i=t;if(!i){const t=Zh.rawSplit(e);i=Fh.getBestVersionForData(t,n)}r=Zh.fromString(e,i||40)}}const a=Fh.getBestVersionForData(r,n);if(!a)throw new Error("The amount of data is too big to be stored in a QR Code");if(t){if(t<a)throw new Error("\nThe chosen QR Code version cannot contain this amount of data.\nMinimum version required to store current data is: "+a+".\n")}else t=a;const o=Gh(t,n,r),s=Oh.getSymbolSize(t),l=new jh(s);return function(e,t){const n=e.size,i=Dh.getPositions(t);for(let r=0;r<i.length;r++){const t=i[r][0],a=i[r][1];for(let i=-1;i<=7;i++)if(!(t+i<=-1||n<=t+i))for(let r=-1;r<=7;r++)a+r<=-1||n<=a+r||(i>=0&&i<=6&&(0===r||6===r)||r>=0&&r<=6&&(0===i||6===i)||i>=2&&i<=4&&r>=2&&r<=4?e.set(t+i,a+r,!0,!0):e.set(t+i,a+r,!1,!0))}}(l,t),function(e){const t=e.size;for(let n=8;n<t-8;n++){const t=n%2==0;e.set(n,6,t,!0),e.set(6,n,t,!0)}}(l),function(e,t){const n=Uh.getPositions(t);for(let i=0;i<n.length;i++){const t=n[i][0],r=n[i][1];for(let n=-2;n<=2;n++)for(let i=-2;i<=2;i++)-2===n||2===n||-2===i||2===i||0===n&&0===i?e.set(t+n,r+i,!0,!0):e.set(t+n,r+i,!1,!0)}}(l,t),Vh(l,n,0),t>=7&&function(e,t){const n=e.size,i=Fh.getEncodedBits(t);let r,a,o;for(let s=0;s<18;s++)r=Math.floor(s/3),a=s%3+n-8-3,o=1==(i>>s&1),e.set(r,a,o,!0),e.set(a,r,o,!0)}(l,t),function(e,t){const n=e.size;let i=-1,r=n-1,a=7,o=0;for(let s=n-1;s>0;s-=2)for(6===s&&s--;;){for(let n=0;n<2;n++)if(!e.isReserved(r,s-n)){let i=!1;o<t.length&&(i=1==(t[o]>>>a&1)),e.set(r,s-n,i),a--,-1===a&&(o++,a=7)}if(r+=i,r<0||n<=r){r-=i,i=-i;break}}}(l,o),isNaN(i)&&(i=Bh.getBestMask(l,Vh.bind(null,l,n))),Bh.applyMask(i,l),Vh(l,n,i),{modules:l,version:t,errorCorrectionLevel:n,maskPattern:i,segments:r}}Pp.create=function(e,t){if(void 0===e||""===e)throw new Error("No input text");let n,i,r=Nh.M;return void 0!==t&&(r=Nh.from(t.errorCorrectionLevel,Nh.M),n=Fh.from(t.version),i=Bh.from(t.maskPattern),t.toSJISFunc&&Oh.setToSJISFunction(t.toSJISFunc)),qh(e,n,r,i)};var Kh={},Yh={};!function(e){function t(e){if("number"==typeof e&&(e=e.toString()),"string"!=typeof e)throw new Error("Color should be defined as hex string");let t=e.slice().replace("#","").split("");if(t.length<3||5===t.length||t.length>8)throw new Error("Invalid hex color: "+e);3!==t.length&&4!==t.length||(t=Array.prototype.concat.apply([],t.map((function(e){return[e,e]})))),6===t.length&&t.push("F","F");const n=parseInt(t.join(""),16);return{r:n>>24&255,g:n>>16&255,b:n>>8&255,a:255&n,hex:"#"+t.slice(0,6).join("")}}e.getOptions=function(e){e||(e={}),e.color||(e.color={});const n=void 0===e.margin||null===e.margin||e.margin<0?4:e.margin,i=e.width&&e.width>=21?e.width:void 0,r=e.scale||4;return{width:i,scale:i?4:r,margin:n,color:{dark:t(e.color.dark||"#000000ff"),light:t(e.color.light||"#ffffffff")},type:e.type,rendererOpts:e.rendererOpts||{}}},e.getScale=function(e,t){return t.width&&t.width>=e+2*t.margin?t.width/(e+2*t.margin):t.scale},e.getImageWidth=function(t,n){const i=e.getScale(t,n);return Math.floor((t+2*n.margin)*i)},e.qrToImageData=function(t,n,i){const r=n.modules.size,a=n.modules.data,o=e.getScale(r,i),s=Math.floor((r+2*i.margin)*o),l=i.margin*o,c=[i.color.light,i.color.dark];for(let e=0;e<s;e++)for(let n=0;n<s;n++){let u=4*(e*s+n),d=i.color.light;if(e>=l&&n>=l&&e<s-l&&n<s-l){d=c[a[Math.floor((e-l)/o)*r+Math.floor((n-l)/o)]?1:0]}t[u++]=d.r,t[u++]=d.g,t[u++]=d.b,t[u]=d.a}}}(Yh),function(e){const t=Yh;e.render=function(e,n,i){let r=i,a=n;void 0!==r||n&&n.getContext||(r=n,n=void 0),n||(a=function(){try{return document.createElement("canvas")}catch(e){throw new Error("You need to specify a canvas element")}}()),r=t.getOptions(r);const o=t.getImageWidth(e.modules.size,r),s=a.getContext("2d"),l=s.createImageData(o,o);return t.qrToImageData(l.data,e,r),function(e,t,n){e.clearRect(0,0,t.width,t.height),t.style||(t.style={}),t.height=n,t.width=n,t.style.height=n+"px",t.style.width=n+"px"}(s,a,o),s.putImageData(l,0,0),a},e.renderToDataURL=function(t,n,i){let r=i;void 0!==r||n&&n.getContext||(r=n,n=void 0),r||(r={});const a=e.render(t,n,r),o=r.type||"image/png",s=r.rendererOpts||{};return a.toDataURL(o,s.quality)}}(Kh);var Jh={};const Qh=Yh;function Xh(e,t){const n=e.a/255,i=t+'="'+e.hex+'"';return n<1?i+" "+t+'-opacity="'+n.toFixed(2).slice(1)+'"':i}function ef(e,t,n){let i=e+t;return void 0!==n&&(i+=" "+n),i}Jh.render=function(e,t,n){const i=Qh.getOptions(t),r=e.modules.size,a=e.modules.data,o=r+2*i.margin,s=i.color.light.a?"<path "+Xh(i.color.light,"fill")+' d="M0 0h'+o+"v"+o+'H0z"/>':"",l="<path "+Xh(i.color.dark,"stroke")+' d="'+function(e,t,n){let i="",r=0,a=!1,o=0;for(let s=0;s<e.length;s++){const l=Math.floor(s%t),c=Math.floor(s/t);l||a||(a=!0),e[s]?(o++,s>0&&l>0&&e[s-1]||(i+=a?ef("M",l+n,.5+c+n):ef("m",r,0),r=0,a=!1),l+1<t&&e[s+1]||(i+=ef("h",o),o=0)):r++}return i}(a,r,i.margin)+'"/>',c='viewBox="0 0 '+o+" "+o+'"',u='<svg xmlns="http://www.w3.org/2000/svg" '+(i.width?'width="'+i.width+'" height="'+i.width+'" ':"")+c+' shape-rendering="crispEdges">'+s+l+"</svg>\n";return"function"==typeof n&&n(null,u),u};const tf=function(){return"function"==typeof Promise&&Promise.prototype&&Promise.prototype.then},nf=Pp,rf=Kh,af=Jh;function of(e,t,n,i,r){const a=[].slice.call(arguments,1),o=a.length,s="function"==typeof a[o-1];if(!s&&!tf())throw new Error("Callback required as last argument");if(!s){if(o<1)throw new Error("Too few arguments provided");return 1===o?(n=t,t=i=void 0):2!==o||t.getContext||(i=n,n=t,t=void 0),new Promise((function(r,a){try{const a=nf.create(n,i);r(e(a,t,i))}catch(o){a(o)}}))}if(o<2)throw new Error("Too few arguments provided");2===o?(r=n,n=t,t=i=void 0):3===o&&(t.getContext&&void 0===r?(r=i,i=void 0):(r=i,i=n,n=t,t=void 0));try{const a=nf.create(n,i);r(null,e(a,t,i))}catch(l){r(l)}}Ip.create=nf.create,Ip.toCanvas=of.bind(null,rf.render),Ip.toDataURL=of.bind(null,rf.renderToDataURL),Ip.toString=of.bind(null,(function(e,t,n){return af.render(e,n)}));function sf(e,t,n){if(e===t)return!1;return(e-t<0?t-e:e-t)<=n+.1}const lf={generate(e,t,n){const i="#141414",r=[],a=function(e,t){const n=Array.prototype.slice.call(Ip.create(e,{errorCorrectionLevel:t}).modules.data,0),i=Math.sqrt(n.length);return n.reduce(((e,t,n)=>(n%i==0?e.push([t]):e[e.length-1].push(t))&&e),[])}(e,"Q"),o=t/a.length,s=[{x:0,y:0},{x:1,y:0},{x:0,y:1}];s.forEach((({x:e,y:t})=>{const n=(a.length-7)*o*e,l=(a.length-7)*o*t,c=.45;for(let a=0;a<s.length;a+=1){const e=o*(7-2*a);r.push(Ks`
            <rect
              fill=${2===a?i:"transparent"}
              width=${0===a?e-5:e}
              rx= ${0===a?(e-5)*c:e*c}
              ry= ${0===a?(e-5)*c:e*c}
              stroke=${i}
              stroke-width=${0===a?5:0}
              height=${0===a?e-5:e}
              x= ${0===a?l+o*a+2.5:l+o*a}
              y= ${0===a?n+o*a+2.5:n+o*a}
            />
          `)}}));const l=Math.floor((n+25)/o),c=a.length/2-l/2,u=a.length/2+l/2-1,d=[];a.forEach(((e,t)=>{e.forEach(((e,n)=>{if(a[t][n]&&!(t<7&&n<7||t>a.length-8&&n<7||t<7&&n>a.length-8||t>c&&t<u&&n>c&&n<u)){const e=t*o+o/2,i=n*o+o/2;d.push([e,i])}}))}));const p={};return d.forEach((([e,t])=>{var n;p[e]?null==(n=p[e])||n.push(t):p[e]=[t]})),Object.entries(p).map((([e,t])=>{const n=t.filter((e=>t.every((t=>!sf(e,t,o)))));return[Number(e),n]})).forEach((([e,t])=>{t.forEach((t=>{r.push(Ks`<circle cx=${e} cy=${t} fill=${i} r=${o/2.5} />`)}))})),Object.entries(p).filter((([e,t])=>t.length>1)).map((([e,t])=>{const n=t.filter((e=>t.some((t=>sf(e,t,o)))));return[Number(e),n]})).map((([e,t])=>{t.sort(((e,t)=>e<t?-1:1));const n=[];for(const i of t){const e=n.find((e=>e.some((e=>sf(i,e,o)))));e?e.push(i):n.push([i])}return[e,n.map((e=>[e[0],e[e.length-1]]))]})).forEach((([e,t])=>{t.forEach((([t,n])=>{r.push(Ks`
              <line
                x1=${e}
                x2=${e}
                y1=${t}
                y2=${n}
                stroke=${i}
                stroke-width=${o/1.25}
                stroke-linecap="round"
              />
            `)}))})),r}},cf=ds`
  :host {
    position: relative;
    user-select: none;
    display: block;
    overflow: hidden;
    aspect-ratio: 1 / 1;
    width: var(--local-size);
  }

  :host([data-theme='dark']) {
    border-radius: clamp(0px, var(--wui-border-radius-l), 40px);
    background-color: var(--wui-color-inverse-100);
    padding: var(--wui-spacing-l);
  }

  :host([data-theme='light']) {
    box-shadow: 0 0 0 1px var(--wui-color-bg-125);
    background-color: var(--wui-color-bg-125);
  }

  :host([data-clear='true']) > wui-icon {
    display: none;
  }

  svg:first-child,
  wui-image,
  wui-icon {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateY(-50%) translateX(-50%);
  }

  wui-image {
    width: 25%;
    height: 25%;
    border-radius: var(--wui-border-radius-xs);
  }

  wui-icon {
    width: 100%;
    height: 100%;
    color: #3396ff !important;
    transform: translateY(-50%) translateX(-50%) scale(0.25);
  }
`;var uf=function(e,t,n,i){var r,a=arguments.length,o=a<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,n,i);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(o=(a<3?r(o):a>3?r(t,n,o):r(t,n))||o);return a>3&&o&&Object.defineProperty(t,n,o),o};let df=class extends dl{constructor(){super(...arguments),this.uri="",this.size=0,this.theme="dark",this.imageSrc=void 0,this.alt=void 0,this.arenaClear=void 0}render(){return this.dataset.theme=this.theme,this.dataset.clear=String(this.arenaClear),this.style.cssText=`--local-size: ${this.size}px`,qs`${this.templateVisual()} ${this.templateSvg()}`}templateSvg(){const e="light"===this.theme?this.size:this.size-32;return Ks`
      <svg height=${e} width=${e}>
        ${lf.generate(this.uri,e,this.arenaClear?0:e/4)}
      </svg>
    `}templateVisual(){return this.imageSrc?qs`<wui-image src=${this.imageSrc} alt=${this.alt??"logo"}></wui-image>`:qs`<wui-icon size="inherit" color="inherit" name="walletConnect"></wui-icon>`}};df.styles=[bl,cf],uf([$l()],df.prototype,"uri",void 0),uf([$l({type:Number})],df.prototype,"size",void 0),uf([$l()],df.prototype,"theme",void 0),uf([$l()],df.prototype,"imageSrc",void 0),uf([$l()],df.prototype,"alt",void 0),uf([$l({type:Boolean})],df.prototype,"arenaClear",void 0),df=uf([_l("wui-qr-code")],df);const pf=ds`
  :host {
    position: relative;
    display: inline-block;
    width: 100%;
  }
`;let hf=class extends dl{constructor(){super(...arguments),this.inputComponentRef=Pd()}render(){return qs`
      <wui-input-text
        ${Od(this.inputComponentRef)}
        placeholder="Search wallet"
        icon="search"
        type="search"
        enterKeyHint="search"
        size="sm"
      >
        <wui-input-element @click=${this.clearValue} icon="close"></wui-input-element>
      </wui-input-text>
    `}clearValue(){const e=this.inputComponentRef.value,t=null==e?void 0:e.inputElementRef.value;t&&(t.value="",t.focus(),t.dispatchEvent(new Event("input")))}};hf.styles=[bl,pf],hf=function(e,t,n,i){var r,a=arguments.length,o=a<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,n,i);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(o=(a<3?r(o):a>3?r(t,n,o):r(t,n))||o);return a>3&&o&&Object.defineProperty(t,n,o),o}([_l("wui-search-bar")],hf);const ff=ds`
  :host {
    display: flex;
    column-gap: var(--wui-spacing-xs);
    align-items: center;
    padding: var(--wui-spacing-xs) var(--wui-spacing-m) var(--wui-spacing-xs) var(--wui-spacing-xs);
    border-radius: var(--wui-border-radius-3xl);
    border: 1px solid var(--wui-gray-glass-005);
    box-sizing: border-box;
    max-height: 40px;
    background-color: var(--wui-color-bg-175);
    box-shadow:
      0px 14px 64px -4px rgba(0, 0, 0, 0.15),
      0px 8px 22px -6px rgba(0, 0, 0, 0.15);
  }
`;var mf=function(e,t,n,i){var r,a=arguments.length,o=a<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,n,i);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(o=(a<3?r(o):a>3?r(t,n,o):r(t,n))||o);return a>3&&o&&Object.defineProperty(t,n,o),o};let gf=class extends dl{constructor(){super(...arguments),this.backgroundColor="accent-100",this.iconColor="accent-100",this.icon="checkmark",this.message=""}render(){return qs`
      <wui-icon-box
        size="sm"
        iconSize="xs"
        iconColor=${this.iconColor}
        backgroundColor=${this.backgroundColor}
        icon=${this.icon}
        background="opaque"
      ></wui-icon-box>
      <wui-text variant="paragraph-500" color="fg-100">${this.message}</wui-text>
    `}};gf.styles=[bl,ff],mf([$l()],gf.prototype,"backgroundColor",void 0),mf([$l()],gf.prototype,"iconColor",void 0),mf([$l()],gf.prototype,"icon",void 0),mf([$l()],gf.prototype,"message",void 0),gf=mf([_l("wui-snackbar")],gf);const wf=ds`
  :host {
    display: inline-flex;
    background-color: var(--wui-gray-glass-002);
    border-radius: var(--wui-border-radius-3xl);
    padding: var(--wui-spacing-3xs);
    position: relative;
    height: 36px;
    overflow: hidden;
  }

  :host::before {
    content: '';
    position: absolute;
    pointer-events: none;
    top: 4px;
    left: 4px;
    display: block;
    width: var(--local-tab-width);
    height: 28px;
    border-radius: var(--wui-border-radius-3xl);
    background-color: var(--wui-gray-glass-002);
    box-shadow: inset 0 0 0 1px var(--wui-gray-glass-002);
    transform: translateX(calc(var(--local-tab) * var(--local-tab-width)));
    transition: transform var(--wui-ease-out-power-2) var(--wui-duration-lg);
  }

  :host([data-type='flex'])::before {
    left: 3px;
    transform: translateX(calc((var(--local-tab) * 34px) + (var(--local-tab) * 4px)));
  }

  :host([data-type='flex']) {
    display: flex;
    padding: 0px 0px 0px 12px;
    gap: 4px;
  }

  :host([data-type='flex']) > button > wui-text {
    position: absolute;
    left: 18px;
    opacity: 0;
  }

  button[data-active='true'] > wui-icon,
  button[data-active='true'] > wui-text {
    color: var(--wui-color-fg-100);
  }

  button[data-active='false'] > wui-icon,
  button[data-active='false'] > wui-text {
    color: var(--wui-color-fg-200);
  }

  button[data-active='true']:disabled,
  button[data-active='false']:disabled {
    background-color: transparent;
    opacity: 0.5;
    cursor: not-allowed;
  }

  button[data-active='true']:disabled > wui-text {
    color: var(--wui-color-fg-200);
  }

  button[data-active='false']:disabled > wui-text {
    color: var(--wui-color-fg-300);
  }

  button > wui-icon,
  button > wui-text {
    pointer-events: none;
    transition: all var(--wui-ease-out-power-2) var(--wui-duration-lg);
  }

  button {
    width: var(--local-tab-width);
  }

  :host([data-type='flex']) > button {
    width: 34px;
    position: relative;
    display: flex;
    justify-content: flex-start;
  }

  button:hover:enabled,
  button:active:enabled {
    background-color: transparent !important;
  }

  button:hover:enabled > wui-icon,
  button:active:enabled > wui-icon {
    color: var(--wui-color-fg-125);
  }

  button:hover:enabled > wui-text,
  button:active:enabled > wui-text {
    color: var(--wui-color-fg-125);
  }

  button {
    border-radius: var(--wui-border-radius-3xl);
  }
`;var yf=function(e,t,n,i){var r,a=arguments.length,o=a<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,n,i);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(o=(a<3?r(o):a>3?r(t,n,o):r(t,n))||o);return a>3&&o&&Object.defineProperty(t,n,o),o};let vf=class extends dl{constructor(){super(...arguments),this.tabs=[],this.onTabChange=()=>null,this.buttons=[],this.disabled=!1,this.activeTab=0,this.localTabWidth="100px",this.isDense=!1}render(){return this.isDense=this.tabs.length>3,this.style.cssText=`\n      --local-tab: ${this.activeTab};\n      --local-tab-width: ${this.localTabWidth};\n    `,this.dataset.type=this.isDense?"flex":"block",this.tabs.map(((e,t)=>{var n;const i=t===this.activeTab;return qs`
        <button
          ?disabled=${this.disabled}
          @click=${()=>this.onTabClick(t)}
          data-active=${i}
          data-testid="tab-${null==(n=e.label)?void 0:n.toLowerCase()}"
        >
          <wui-icon size="xs" color="inherit" name=${e.icon}></wui-icon>
          <wui-text variant="small-600" color="inherit"> ${e.label} </wui-text>
        </button>
      `}))}firstUpdated(){this.shadowRoot&&this.isDense&&(this.buttons=[...this.shadowRoot.querySelectorAll("button")],setTimeout((()=>{this.animateTabs(0,!0)}),0))}onTabClick(e){this.buttons&&this.animateTabs(e,!1),this.activeTab=e,this.onTabChange(e)}animateTabs(e,t){const n=this.buttons[this.activeTab],i=this.buttons[e],r=null==n?void 0:n.querySelector("wui-text"),a=null==i?void 0:i.querySelector("wui-text"),o=null==i?void 0:i.getBoundingClientRect(),s=null==a?void 0:a.getBoundingClientRect();n&&r&&!t&&e!==this.activeTab&&(r.animate([{opacity:0}],{duration:50,easing:"ease",fill:"forwards"}),n.animate([{width:"34px"}],{duration:500,easing:"ease",fill:"forwards"})),i&&o&&s&&a&&(e!==this.activeTab||t)&&(this.localTabWidth=`${Math.round(o.width+s.width)+6}px`,i.animate([{width:`${o.width+s.width}px`}],{duration:t?0:500,fill:"forwards",easing:"ease"}),a.animate([{opacity:1}],{duration:t?0:125,delay:t?0:200,fill:"forwards",easing:"ease"}))}};vf.styles=[bl,xl,wf],yf([$l({type:Array})],vf.prototype,"tabs",void 0),yf([$l()],vf.prototype,"onTabChange",void 0),yf([$l({type:Array})],vf.prototype,"buttons",void 0),yf([$l({type:Boolean})],vf.prototype,"disabled",void 0),yf([Il()],vf.prototype,"activeTab",void 0),yf([Il()],vf.prototype,"localTabWidth",void 0),yf([Il()],vf.prototype,"isDense",void 0),vf=yf([_l("wui-tabs")],vf);const bf=ds`
  :host {
    display: block;
    padding: 9px var(--wui-spacing-s) 10px var(--wui-spacing-s);
    border-radius: var(--wui-border-radius-xxs);

    color: var(--wui-color-bg-100);
    position: relative;
  }

  :host([data-variant='shade']) {
    background-color: var(--wui-color-bg-150);
    border: 1px solid var(--wui-gray-glass-005);
  }

  :host([data-variant='shade']) > wui-text {
    color: var(--wui-color-fg-150);
  }

  :host([data-variant='fill']) {
    background-color: var(--wui-color-fg-100);
    border: none;
  }

  wui-icon {
    position: absolute;
    width: 12px !important;
    height: 4px !important;
  }

  wui-icon[data-placement='top'] {
    bottom: 0px;
    left: 50%;
    transform: translate(-50%, 95%);
  }

  wui-icon[data-placement='bottom'] {
    top: 0;
    left: 50%;
    transform: translate(-50%, -95%) rotate(180deg);
  }

  wui-icon[data-placement='right'] {
    top: 50%;
    left: 0;
    transform: translate(-65%, -50%) rotate(90deg);
  }

  wui-icon[data-placement='left'] {
    top: 50%;
    right: 0%;
    transform: translate(65%, -50%) rotate(270deg);
  }
`;var xf=function(e,t,n,i){var r,a=arguments.length,o=a<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,n,i);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(o=(a<3?r(o):a>3?r(t,n,o):r(t,n))||o);return a>3&&o&&Object.defineProperty(t,n,o),o};let Cf=class extends dl{constructor(){super(...arguments),this.placement="top",this.variant="fill",this.message=""}render(){return this.dataset.variant=this.variant,qs`<wui-icon
        data-placement=${this.placement}
        color="fg-100"
        size="inherit"
        name=${"fill"===this.variant?"cursor":"cursorTransparent"}
      ></wui-icon>
      <wui-text color="inherit" variant="small-500">${this.message}</wui-text>`}};Cf.styles=[bl,xl,bf],xf([$l()],Cf.prototype,"placement",void 0),xf([$l()],Cf.prototype,"variant",void 0),xf([$l()],Cf.prototype,"message",void 0),Cf=xf([_l("wui-tooltip")],Cf);const _f=ds`
  :host {
    display: flex;
    justify-content: center;
    align-items: center;
    width: var(--wui-icon-box-size-xl);
    height: var(--wui-icon-box-size-xl);
    box-shadow: 0 0 0 8px var(--wui-thumbnail-border);
    border-radius: var(--local-border-radius);
    overflow: hidden;
  }

  wui-icon {
    width: 32px;
    height: 32px;
  }
`;var Ef=function(e,t,n,i){var r,a=arguments.length,o=a<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,n,i);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(o=(a<3?r(o):a>3?r(t,n,o):r(t,n))||o);return a>3&&o&&Object.defineProperty(t,n,o),o};let kf=class extends dl{render(){return this.style.cssText=`--local-border-radius: ${this.borderRadiusFull?"1000px":"20px"};`,qs`${this.templateVisual()}`}templateVisual(){return this.imageSrc?qs`<wui-image src=${this.imageSrc} alt=${this.alt??""}></wui-image>`:qs`<wui-icon
      data-parent-size="md"
      size="inherit"
      color="inherit"
      name="walletPlaceholder"
    ></wui-icon>`}};kf.styles=[bl,_f],Ef([$l()],kf.prototype,"imageSrc",void 0),Ef([$l()],kf.prototype,"alt",void 0),Ef([$l({type:Boolean})],kf.prototype,"borderRadiusFull",void 0),kf=Ef([_l("wui-visual-thumbnail")],kf);const Tf=ds`
  :host {
    display: block;
  }

  button {
    width: 100%;
    display: block;
    padding-top: var(--wui-spacing-l);
    padding-bottom: var(--wui-spacing-l);
    padding-left: var(--wui-spacing-s);
    padding-right: var(--wui-spacing-2l);
    border-radius: var(--wui-border-radius-s);
    background-color: var(--wui-accent-glass-015);
  }

  button:hover {
    background-color: var(--wui-accent-glass-010) !important;
  }

  button:active {
    background-color: var(--wui-accent-glass-020) !important;
  }
`;var Af=function(e,t,n,i){var r,a=arguments.length,o=a<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,n,i);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(o=(a<3?r(o):a>3?r(t,n,o):r(t,n))||o);return a>3&&o&&Object.defineProperty(t,n,o),o};let $f=class extends dl{constructor(){super(...arguments),this.label="",this.description="",this.icon="wallet"}render(){return qs`
      <button>
        <wui-flex gap="m" alignItems="center" justifyContent="space-between">
          <wui-icon-box
            size="lg"
            iconcolor="accent-100"
            backgroundcolor="accent-100"
            icon=${this.icon}
            background="transparent"
          ></wui-icon-box>

          <wui-flex flexDirection="column" gap="3xs">
            <wui-text variant="paragraph-500" color="fg-100">${this.label}</wui-text>
            <wui-text variant="small-400" color="fg-200">${this.description}</wui-text>
          </wui-flex>

          <wui-icon size="md" color="fg-200" name="chevronRight"></wui-icon>
        </wui-flex>
      </button>
    `}};$f.styles=[bl,xl,Tf],Af([$l()],$f.prototype,"label",void 0),Af([$l()],$f.prototype,"description",void 0),Af([$l()],$f.prototype,"icon",void 0),$f=Af([_l("wui-notice-card")],$f);const If=ds`
  button {
    height: auto;
    position: relative;
    flex-direction: column;
    gap: var(--wui-spacing-s);
    padding: 17px 18px 17px var(--wui-spacing-m);
    width: 100%;
    background-color: var(--wui-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
    color: var(--wui-color-fg-250);
  }

  .overflowedContent {
    width: 100%;
    overflow: hidden;
  }

  .overflowedContent[data-active='false']:after {
    content: '';
    position: absolute;
    top: 50%;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(to top, var(--wui-color-bg-200), transparent);
    border-bottom-left-radius: var(--wui-border-radius-xs);
    border-bottom-right-radius: var(--wui-border-radius-xs);
  }

  .heightContent {
    max-height: 100px;
  }

  pre {
    text-align: left;
    white-space: pre-wrap;
    height: auto;
    overflow-x: auto;
    overflow-wrap: anywhere;
  }
`;var Pf=function(e,t,n,i){var r,a=arguments.length,o=a<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,n,i);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(o=(a<3?r(o):a>3?r(t,n,o):r(t,n))||o);return a>3&&o&&Object.defineProperty(t,n,o),o};let Sf=class extends dl{constructor(){super(...arguments),this.textTitle="",this.overflowedContent="",this.toggled=!1,this.enableAccordion=!1,this.scrollElement=void 0,this.scrollHeightElement=0}updated(e){super.updated(e),(e.has("textTitle")||e.has("overflowedContent"))&&setTimeout((()=>{this.checkHeight()}),1)}checkHeight(){this.updateComplete.then((()=>{var e,t;const n=null==(e=this.shadowRoot)?void 0:e.querySelector(".heightContent"),i=null==(t=this.shadowRoot)?void 0:t.querySelector(".textContent");if(n&&i){this.scrollElement=n;const e=null==i?void 0:i.scrollHeight;e&&e>100&&(this.enableAccordion=!0,this.scrollHeightElement=e,this.requestUpdate())}}))}render(){return qs`
      <button ontouchstart @click=${()=>this.onClick()}>
        <wui-flex justifyContent="space-between" alignItems="center">
          <wui-text variant="paragraph-500" color="fg-100">${this.textTitle}</wui-text>
          ${this.chevronTemplate()}
        </wui-flex>
        <div
          data-active=${!this.enableAccordion||Boolean(this.toggled)}
          class="overflowedContent"
        >
          <div class="heightContent">
            <wui-text class="textContent" variant="paragraph-400" color="fg-200">
              <pre>${this.overflowedContent}</pre>
            </wui-text>
          </div>
        </div>
      </button>
    `}onClick(){var e;const t=null==(e=this.shadowRoot)?void 0:e.querySelector("wui-icon");this.enableAccordion&&(this.toggled=!this.toggled,this.requestUpdate(),this.scrollElement&&this.scrollElement.animate([{maxHeight:this.toggled?"100px":`${this.scrollHeightElement}px`},{maxHeight:this.toggled?`${this.scrollHeightElement}px`:"100px"}],{duration:300,fill:"forwards",easing:"ease"}),t&&t.animate([{transform:this.toggled?"rotate(0deg)":"rotate(180deg)"},{transform:this.toggled?"rotate(180deg)":"rotate(0deg)"}],{duration:300,fill:"forwards",easing:"ease"}))}chevronTemplate(){return this.enableAccordion?qs` <wui-icon color="fg-100" size="sm" name="chevronBottom"></wui-icon>`:null}};Sf.styles=[bl,xl,If],Pf([$l()],Sf.prototype,"textTitle",void 0),Pf([$l()],Sf.prototype,"overflowedContent",void 0),Sf=Pf([_l("wui-list-accordion")],Sf);const Rf=ds`
  :host {
    display: flex;
    column-gap: var(--wui-spacing-s);
    padding: 17px 18px 17px var(--wui-spacing-m);
    width: 100%;
    background-color: var(--wui-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
    color: var(--wui-color-fg-250);
  }

  wui-image {
    width: var(--wui-icon-size-lg);
    height: var(--wui-icon-size-lg);
    border-radius: var(--wui-border-radius-3xl);
  }

  wui-icon {
    width: var(--wui-icon-size-lg);
    height: var(--wui-icon-size-lg);
  }
`;var Of=function(e,t,n,i){var r,a=arguments.length,o=a<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,n,i);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(o=(a<3?r(o):a>3?r(t,n,o):r(t,n))||o);return a>3&&o&&Object.defineProperty(t,n,o),o};let Nf=class extends dl{constructor(){super(...arguments),this.imageSrc=void 0,this.textTitle="",this.textValue=void 0}render(){return qs`
      <wui-flex justifyContent="space-between" alignItems="center">
        <wui-text variant="paragraph-500" color=${this.textValue?"fg-200":"fg-100"}>
          ${this.textTitle}
        </wui-text>
        ${this.templateContent()}
      </wui-flex>
    `}templateContent(){return this.imageSrc?qs`<wui-image src=${this.imageSrc} alt=${this.textTitle}></wui-image>`:this.textValue?qs` <wui-text variant="paragraph-400" color="fg-100"> ${this.textValue} </wui-text>`:qs`<wui-icon size="inherit" color="fg-200" name="networkPlaceholder"></wui-icon>`}};Nf.styles=[bl,xl,Rf],Of([$l()],Nf.prototype,"imageSrc",void 0),Of([$l()],Nf.prototype,"textTitle",void 0),Of([$l()],Nf.prototype,"textValue",void 0),Nf=Of([_l("wui-list-content")],Nf);const Mf=ds`
  button {
    column-gap: var(--wui-spacing-s);
    padding: 7px var(--wui-spacing-l) 7px var(--wui-spacing-xs);
    width: 100%;
    background-color: var(--wui-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
    color: var(--wui-color-fg-100);
  }

  button > wui-text:nth-child(2) {
    display: flex;
    flex: 1;
  }

  button[data-transparent='true'] {
    pointer-events: none;
    background-color: transparent;
  }

  wui-icon {
    color: var(--wui-color-fg-200) !important;
  }

  button:disabled {
    background-color: var(--wui-gray-glass-015);
    color: var(--wui-gray-glass-015);
  }

  button:disabled > wui-tag {
    background-color: var(--wui-gray-glass-010);
    color: var(--wui-color-fg-300);
  }
`;var jf=function(e,t,n,i){var r,a=arguments.length,o=a<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,n,i);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(o=(a<3?r(o):a>3?r(t,n,o):r(t,n))||o);return a>3&&o&&Object.defineProperty(t,n,o),o};let Uf=class extends dl{constructor(){super(...arguments),this.imageSrc="",this.name="",this.disabled=!1,this.transparent=!1}render(){return qs`
      <button data-transparent=${this.transparent} ?disabled=${this.disabled} ontouchstart>
        ${this.templateNetworkImage()}
        <wui-text variant="paragraph-500" color="inherit">${this.name}</wui-text>
      </button>
    `}templateNetworkImage(){return this.imageSrc?qs`<wui-network-image
        size="sm"
        imageSrc=${this.imageSrc}
        name=${this.name}
      ></wui-network-image>`:this.imageSrc?null:qs`<wui-network-image size="sm" name=${this.name}></wui-network-image>`}};Uf.styles=[bl,xl,Mf],jf([$l()],Uf.prototype,"imageSrc",void 0),jf([$l()],Uf.prototype,"name",void 0),jf([$l({type:Boolean})],Uf.prototype,"disabled",void 0),jf([$l({type:Boolean})],Uf.prototype,"transparent",void 0),Uf=jf([_l("wui-list-network")],Uf);const Df=ds`
  :host {
    display: flex;
    flex-direction: column;
    gap: var(--wui-spacing-l);
    padding: 17px 18px 17px var(--wui-spacing-m);
    width: 100%;
    background-color: var(--wui-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
    color: var(--wui-color-fg-250);
  }

  wui-image {
    width: var(--wui-icon-size-lg);
    height: var(--wui-icon-size-lg);
    border-radius: var(--wui-border-radius-3xl);
  }

  wui-icon {
    width: var(--wui-icon-size-lg);
    height: var(--wui-icon-size-lg);
  }
`;var Bf=function(e,t,n,i){var r,a=arguments.length,o=a<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,n,i);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(o=(a<3?r(o):a>3?r(t,n,o):r(t,n))||o);return a>3&&o&&Object.defineProperty(t,n,o),o};let Lf=class extends dl{constructor(){super(...arguments),this.amount="",this.networkCurreny="",this.networkImageUrl="",this.receiverAddress="",this.addressExplorerUrl=""}render(){return qs`
      <wui-flex justifyContent="space-between" alignItems="center">
        <wui-text variant="paragraph-500" color="fg-200">Sending</wui-text>
        <wui-flex gap="xs" alignItems="center">
          <wui-text variant="paragraph-400" color="fg-100">
            ${this.amount} ${this.networkCurreny}
          </wui-text>
          ${this.templateNetworkVisual()}
        </wui-flex>
      </wui-flex>
      <wui-flex justifyContent="space-between" alignItems="center">
        <wui-text variant="paragraph-500" color="fg-200">To</wui-text>
        <wui-chip
          icon="externalLink"
          variant="shadeSmall"
          href=${this.addressExplorerUrl}
          title=${this.receiverAddress}
        ></wui-chip>
      </wui-flex>
    `}templateNetworkVisual(){return this.networkImageUrl?qs`<wui-image src=${this.networkImageUrl} alt="Network Image"></wui-image>`:qs`<wui-icon size="inherit" color="fg-200" name="networkPlaceholder"></wui-icon>`}};Lf.styles=[bl,xl,Df],Bf([$l()],Lf.prototype,"amount",void 0),Bf([$l()],Lf.prototype,"networkCurreny",void 0),Bf([$l()],Lf.prototype,"networkImageUrl",void 0),Bf([$l()],Lf.prototype,"receiverAddress",void 0),Bf([$l()],Lf.prototype,"addressExplorerUrl",void 0),Lf=Bf([_l("wui-list-wallet-transaction")],Lf);const zf=ds`
  :host {
    width: 100%;
  }

  :host > wui-flex {
    width: 100%;
    padding: var(--wui-spacing-s);
    border-radius: var(--wui-border-radius-xs);
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: var(--wui-spacing-s);
  }

  :host > wui-flex:hover {
    background-color: var(--wui-gray-glass-002);
  }

  .purchase-image-container {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    width: var(--wui-icon-box-size-lg);
    height: var(--wui-icon-box-size-lg);
  }

  .purchase-image-container wui-image {
    width: 100%;
    height: 100%;
    position: relative;
    border-radius: calc(var(--wui-icon-box-size-lg) / 2);
  }

  .purchase-image-container wui-image::after {
    content: '';
    display: block;
    width: 100%;
    height: 100%;
    position: absolute;
    inset: 0;
    border-radius: calc(var(--wui-icon-box-size-lg) / 2);
    box-shadow: inset 0 0 0 1px var(--wui-gray-glass-005);
  }

  .purchase-image-container wui-icon-box {
    position: absolute;
    right: 0;
    bottom: 0;
    transform: translate(20%, 20%);
  }
`;var Ff=function(e,t,n,i){var r,a=arguments.length,o=a<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,n,i);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(o=(a<3?r(o):a>3?r(t,n,o):r(t,n))||o);return a>3&&o&&Object.defineProperty(t,n,o),o};let Wf=class extends dl{constructor(){super(...arguments),this.disabled=!1,this.color="inherit",this.label="Bought",this.purchaseValue="",this.purchaseCurrency="",this.date="",this.completed=!1,this.inProgress=!1,this.failed=!1,this.onClick=null,this.symbol=""}firstUpdated(){this.icon||this.fetchTokenImage()}render(){return qs`
      <wui-flex>
        ${this.imageTemplate()}
        <wui-flex flexDirection="column" gap="4xs" flexGrow="1">
          <wui-flex gap="xxs" alignItems="center" justifyContent="flex-start">
            ${this.statusIconTemplate()}
            <wui-text variant="paragraph-500" color="fg-100"> ${this.label}</wui-text>
          </wui-flex>
          <wui-text variant="small-400" color="fg-200">
            + ${this.purchaseValue} ${this.purchaseCurrency}
          </wui-text>
        </wui-flex>
        ${this.inProgress?qs`<wui-loading-spinner color="fg-200" size="md"></wui-loading-spinner>`:qs`<wui-text variant="micro-700" color="fg-300"><span>${this.date}</span></wui-text>`}
      </wui-flex>
    `}async fetchTokenImage(){await Bo._fetchTokenImage(this.purchaseCurrency)}statusIconTemplate(){return this.inProgress?null:this.completed?this.boughtIconTemplate():this.errorIconTemplate()}errorIconTemplate(){return qs`<wui-icon-box
      size="xxs"
      iconColor="error-100"
      backgroundColor="error-100"
      background="opaque"
      icon="close"
      borderColor="wui-color-bg-125"
    ></wui-icon-box>`}imageTemplate(){const e=this.icon||`https://avatar.vercel.sh/andrew.svg?size=50&text=${this.symbol}`;return qs`<wui-flex class="purchase-image-container">
      <wui-image src=${e}></wui-image>
    </wui-flex>`}boughtIconTemplate(){return qs`<wui-icon-box
      size="xxs"
      iconColor="success-100"
      backgroundColor="success-100"
      background="opaque"
      icon="arrowBottom"
      borderColor="wui-color-bg-125"
    ></wui-icon-box>`}};Wf.styles=[bl,xl,zf],Ff([$l({type:Boolean})],Wf.prototype,"disabled",void 0),Ff([$l()],Wf.prototype,"color",void 0),Ff([$l()],Wf.prototype,"label",void 0),Ff([$l()],Wf.prototype,"purchaseValue",void 0),Ff([$l()],Wf.prototype,"purchaseCurrency",void 0),Ff([$l()],Wf.prototype,"date",void 0),Ff([$l({type:Boolean})],Wf.prototype,"completed",void 0),Ff([$l({type:Boolean})],Wf.prototype,"inProgress",void 0),Ff([$l({type:Boolean})],Wf.prototype,"failed",void 0),Ff([$l()],Wf.prototype,"onClick",void 0),Ff([$l()],Wf.prototype,"symbol",void 0),Ff([$l()],Wf.prototype,"icon",void 0),Wf=Ff([_l("wui-onramp-activity-item")],Wf);const Hf=ds`
  button {
    padding: var(--wui-spacing-s);
    border-radius: var(--wui-border-radius-xs);
    background-color: var(--wui-gray-glass-002);
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: var(--wui-spacing-s);
    transition: background-color 0.2s linear;
  }

  button:hover {
    background-color: var(--wui-gray-glass-005);
  }

  .provider-image {
    width: var(--wui-spacing-3xl);
    min-width: var(--wui-spacing-3xl);
    height: var(--wui-spacing-3xl);
    border-radius: calc(var(--wui-border-radius-xs) - calc(var(--wui-spacing-s) / 2));
    position: relative;
    overflow: hidden;
  }

  .provider-image::after {
    content: '';
    display: block;
    width: 100%;
    height: 100%;
    position: absolute;
    inset: 0;
    border-radius: calc(var(--wui-border-radius-xs) - calc(var(--wui-spacing-s) / 2));
    box-shadow: inset 0 0 0 1px var(--wui-gray-glass-005);
  }

  .network-icon {
    width: var(--wui-spacing-m);
    height: var(--wui-spacing-m);
    border-radius: calc(var(--wui-spacing-m) / 2);
    overflow: hidden;
    box-shadow:
      0 0 0 3px var(--wui-gray-glass-002),
      0 0 0 3px var(--wui-color-modal-bg);
    transition: box-shadow 0.2s linear;
  }

  button:hover .network-icon {
    box-shadow:
      0 0 0 3px var(--wui-gray-glass-005),
      0 0 0 3px var(--wui-color-modal-bg);
  }
`;var Zf=function(e,t,n,i){var r,a=arguments.length,o=a<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,n,i);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(o=(a<3?r(o):a>3?r(t,n,o):r(t,n))||o);return a>3&&o&&Object.defineProperty(t,n,o),o};let Vf=class extends dl{constructor(){super(...arguments),this.disabled=!1,this.color="inherit",this.label="",this.feeRange="",this.loading=!1,this.onClick=null}render(){return qs`
      <button ?disabled=${this.disabled} ontouchstart>
        <wui-visual name=${Ru(this.name)} class="provider-image"></wui-visual>
        <wui-flex flexDirection="column" gap="4xs">
          <wui-text variant="paragraph-500" color="fg-100">${this.label}</wui-text>
          <wui-flex alignItems="center" justifyContent="flex-start" gap="l">
            <wui-text variant="tiny-500" color="fg-100">
              <wui-text variant="tiny-400" color="fg-200">Fees</wui-text>
              ${this.feeRange}
            </wui-text>
            <wui-flex gap="xxs">
              <wui-icon name="bank" size="xs" color="fg-150"></wui-icon>
              <wui-icon name="card" size="xs" color="fg-150"></wui-icon>
            </wui-flex>
            ${this.networksTemplate()}
          </wui-flex>
        </wui-flex>
        ${this.loading?qs`<wui-loading-spinner color="fg-200" size="md"></wui-loading-spinner>`:qs`<wui-icon name="chevronRight" color="fg-200" size="sm"></wui-icon>`}
      </button>
    `}networksTemplate(){var e;const t=jo.getRequestedCaipNetworks(),n=null==(e=null==t?void 0:t.filter((e=>null==e?void 0:e.imageId)))?void 0:e.slice(0,5);return qs`
      <wui-flex class="networks">
        ${null==n?void 0:n.map((e=>qs`
            <wui-flex class="network-icon">
              <wui-image src=${Ru(is.getNetworkImage(e))}></wui-image>
            </wui-flex>
          `))}
      </wui-flex>
    `}};Vf.styles=[bl,xl,Hf],Zf([$l({type:Boolean})],Vf.prototype,"disabled",void 0),Zf([$l()],Vf.prototype,"color",void 0),Zf([$l()],Vf.prototype,"name",void 0),Zf([$l()],Vf.prototype,"label",void 0),Zf([$l()],Vf.prototype,"feeRange",void 0),Zf([$l({type:Boolean})],Vf.prototype,"loading",void 0),Zf([$l()],Vf.prototype,"onClick",void 0),Vf=Zf([_l("wui-onramp-provider-item")],Vf);const Gf=ds`
  button {
    display: flex;
    gap: var(--wui-spacing-3xs);
    align-items: center;
    padding: 6.25px var(--wui-spacing-xs) 7.25px var(--wui-spacing-s);
    background-color: var(--wui-gray-glass-090);
    border-radius: var(--wui-border-radius-3xl);
    border: 1px solid var(--wui-gray-glass-060);
  }

  @media (hover: hover) and (pointer: fine) {
    button:hover:enabled {
      background-color: var(--wui-gray-glass-080);
    }

    button:active:enabled {
      transition: all var(--wui-ease-out-power-2) var(--wui-duration-sm);
      background-color: var(--wui-gray-glass-060);
    }
  }
`;var qf=function(e,t,n,i){var r,a=arguments.length,o=a<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,n,i);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(o=(a<3?r(o):a>3?r(t,n,o):r(t,n))||o);return a>3&&o&&Object.defineProperty(t,n,o),o};let Kf=class extends dl{constructor(){super(...arguments),this.text=""}render(){return qs`<button ontouchstart>
      <wui-text variant="small-600" color="bg-100">${this.text}</wui-text>
      <wui-icon color="bg-100" size="xs" name="arrowRight"></wui-icon>
    </button>`}};Kf.styles=[bl,xl,Gf],qf([$l()],Kf.prototype,"text",void 0),Kf=qf([_l("wui-promo")],Kf);const Yf=ds`
  :host {
    position: relative;
  }
  button {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 48px;
    width: 100%;
    background-color: var(--wui-accent-glass-010);
    border-radius: var(--wui-border-radius-xs);
    border: 1px solid var(--wui-accent-glass-010);
  }

  wui-tooltip {
    padding: 7px var(--wui-spacing-s) 8px var(--wui-spacing-s);
    position: absolute;
    top: -8px;
    left: 50%;
    transform: translate(-50%, -100%);
    opacity: 0;
  }

  @media (hover: hover) and (pointer: fine) {
    button:hover:enabled {
      background-color: var(--wui-accent-glass-015);
    }

    button:active:enabled {
      background-color: var(--wui-accent-glass-020);
      transition: all var(--wui-ease-out-power-2) var(--wui-duration-sm);
    }
  }
`;var Jf=function(e,t,n,i){var r,a=arguments.length,o=a<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,n,i);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(o=(a<3?r(o):a>3?r(t,n,o):r(t,n))||o);return a>3&&o&&Object.defineProperty(t,n,o),o};let Qf=class extends dl{constructor(){super(...arguments),this.text="",this.icon="card"}render(){return qs`<button
        @mouseenter=${this.onMouseEnter.bind(this)}
        @mouseleave=${this.onMouseLeave.bind(this)}
        ontouchstart
      >
        <wui-icon color="accent-100" name=${this.icon} size="lg"></wui-icon>
      </button>
      <wui-tooltip variant="shade" message=${this.text} placement="top"></wui-tooltip>`}onMouseEnter(){var e;const t=null==(e=this.shadowRoot)?void 0:e.querySelector("wui-tooltip");t&&(null==t||t.animate([{opacity:0},{opacity:1}],{fill:"forwards",easing:"ease",duration:250}))}onMouseLeave(){var e;const t=null==(e=this.shadowRoot)?void 0:e.querySelector("wui-tooltip");t&&(null==t||t.animate([{opacity:1},{opacity:0}],{fill:"forwards",easing:"ease",duration:200}))}};Qf.styles=[bl,xl,Yf],Jf([$l()],Qf.prototype,"text",void 0),Jf([$l()],Qf.prototype,"icon",void 0),Qf=Jf([_l("wui-tooltip-select")],Qf);const Xf=ds`
  span {
    font-weight: 500;
    font-size: 40px;
    color: var(--wui-color-fg-100);
    line-height: 130%; /* 52px */
    letter-spacing: -1.6px;
    text-align: center;
  }

  .pennies {
    color: var(--wui-color-fg-200);
  }
`;var em=function(e,t,n,i){var r,a=arguments.length,o=a<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,n,i);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(o=(a<3?r(o):a>3?r(t,n,o):r(t,n))||o);return a>3&&o&&Object.defineProperty(t,n,o),o};let tm=class extends dl{constructor(){super(...arguments),this.dollars="0",this.pennies="00"}render(){return qs`<span>$${this.dollars}<span class="pennies">.${this.pennies}</span></span>`}};tm.styles=[bl,Xf],em([$l()],tm.prototype,"dollars",void 0),em([$l()],tm.prototype,"pennies",void 0),tm=em([_l("wui-balance")],tm);const nm=ds`
  button {
    background-color: var(--wui-gray-glass-002);
    border-radius: var(--wui-border-radius-3xl);
    border: 1px solid var(--wui-gray-glass-002);
    padding: var(--wui-spacing-xs) var(--wui-spacing-s) var(--wui-spacing-xs) var(--wui-spacing-xs);
    position: relative;
  }

  wui-avatar {
    width: 32px;
    height: 32px;
    box-shadow: 0 0 0 0;
    outline: 3px solid var(--wui-gray-glass-005);
  }

  wui-icon-box,
  wui-image {
    width: 16px;
    height: 16px;
    border-radius: var(--wui-border-radius-3xl);
    position: absolute;
    left: 26px;
    top: 24px;
  }

  wui-image {
    outline: 2px solid var(--wui-color-bg-125);
  }

  wui-icon-box {
    outline: 2px solid var(--wui-color-bg-200);
    background-color: var(--wui-color-bg-250);
  }
`;var im=function(e,t,n,i){var r,a=arguments.length,o=a<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,n,i);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(o=(a<3?r(o):a>3?r(t,n,o):r(t,n))||o);return a>3&&o&&Object.defineProperty(t,n,o),o};let rm=class extends dl{constructor(){super(...arguments),this.networkSrc=void 0,this.avatarSrc=void 0,this.isProfileName=!1,this.address="",this.icon="chevronBottom"}render(){return qs` <button ontouchstart>
      <wui-flex gap="xs" alignItems="center">
        <wui-avatar
          .imageSrc=${this.avatarSrc}
          alt=${this.address}
          address=${this.address}
        ></wui-avatar>
        ${this.networkImageTemplate()}
        <wui-flex gap="xs" alignItems="center">
          <wui-text variant="large-600" color="fg-100">
            ${Ou.getTruncateString({string:this.address,charsStart:this.isProfileName?18:4,charsEnd:this.isProfileName?0:4,truncate:this.isProfileName?"end":"middle"})}
          </wui-text>
          <wui-icon size="sm" color="fg-200" name=${this.icon}></wui-icon>
        </wui-flex>
      </wui-flex>
    </button>`}networkImageTemplate(){return this.networkSrc?qs`<wui-image src=${this.networkSrc}></wui-image>`:qs`
      <wui-icon-box
        size="xxs"
        iconColor="fg-200"
        backgroundColor="bg-100"
        icon="networkPlaceholder"
      ></wui-icon-box>
    `}};rm.styles=[bl,xl,nm],im([$l()],rm.prototype,"networkSrc",void 0),im([$l()],rm.prototype,"avatarSrc",void 0),im([$l({type:Boolean})],rm.prototype,"isProfileName",void 0),im([$l()],rm.prototype,"address",void 0),im([$l()],rm.prototype,"icon",void 0),rm=im([_l("wui-profile-button")],rm);const am=ds`
  button {
    border: 1px solid var(--wui-gray-glass-010);
    border-radius: var(--wui-border-radius-3xl);
  }

  wui-image {
    border-radius: var(--wui-border-radius-3xl);
    overflow: hidden;
  }

  button.disabled > wui-icon,
  button.disabled > wui-image {
    filter: grayscale(1);
  }

  button[data-variant='fill'] {
    color: var(--wui-color-inverse-100);
    background-color: var(--wui-color-accent-100);
  }

  button[data-variant='shade'],
  button[data-variant='shadeSmall'] {
    background-color: transparent;
    background-color: var(--wui-gray-glass-010);
    color: var(--wui-color-fg-200);
  }

  button[data-variant='success'] {
    column-gap: var(--wui-spacing-xxs);
    border: 1px solid var(--wui-success-glass-010);
    background-color: var(--wui-success-glass-010);
    color: var(--wui-color-success-100);
  }

  button[data-variant='error'] {
    column-gap: var(--wui-spacing-xxs);
    border: 1px solid var(--wui-error-glass-010);
    background-color: var(--wui-error-glass-010);
    color: var(--wui-color-error-100);
  }

  button[data-variant='transparent'] {
    column-gap: var(--wui-spacing-xxs);
    background-color: transparent;
    color: var(--wui-color-fg-150);
  }

  button[data-variant='transparent'],
  button[data-variant='success'],
  button[data-variant='shadeSmall'],
  button[data-variant='error'] {
    padding: 7px var(--wui-spacing-s) 7px 8px;
  }

  button[data-variant='transparent']:has(wui-text:first-child),
  button[data-variant='success']:has(wui-text:first-child),
  button[data-variant='shadeSmall']:has(wui-text:first-child),
  button[data-variant='error']:has(wui-text:first-child) {
    padding: 7px var(--wui-spacing-s);
  }

  button[data-variant='fill'],
  button[data-variant='shade'] {
    column-gap: var(--wui-spacing-xs);
    padding: var(--wui-spacing-xxs) var(--wui-spacing-m) var(--wui-spacing-xxs)
      var(--wui-spacing-xs);
  }

  button[data-variant='fill']:has(wui-text:first-child),
  button[data-variant='shade']:has(wui-text:first-child) {
    padding: 9px var(--wui-spacing-m) 9px var(--wui-spacing-m);
  }

  button[data-variant='fill'] > wui-image,
  button[data-variant='shade'] > wui-image {
    width: 24px;
    height: 24px;
  }

  button[data-variant='fill'] > wui-image {
    box-shadow: inset 0 0 0 1px var(--wui-color-accent-090);
  }

  button[data-variant='shade'] > wui-image,
  button[data-variant='shadeSmall'] > wui-image {
    box-shadow: inset 0 0 0 1px var(--wui-gray-glass-010);
  }

  button[data-variant='fill'] > wui-icon,
  button[data-variant='shade'] > wui-icon {
    width: 14px;
    height: 14px;
  }

  button[data-variant='transparent'] > wui-image,
  button[data-variant='success'] > wui-image,
  button[data-variant='shadeSmall'] > wui-image,
  button[data-variant='error'] > wui-image {
    width: 14px;
    height: 14px;
  }

  button[data-variant='transparent'] > wui-icon,
  button[data-variant='success'] > wui-icon,
  button[data-variant='shadeSmall'] > wui-icon,
  button[data-variant='error'] > wui-icon {
    width: 12px;
    height: 12px;
  }

  button[data-variant='fill']:focus-visible {
    background-color: var(--wui-color-accent-090);
  }

  button[data-variant='shade']:focus-visible,
  button[data-variant='shadeSmall']:focus-visible {
    background-color: var(--wui-gray-glass-015);
  }

  button[data-variant='transparent']:focus-visible {
    background-color: var(--wui-gray-glass-005);
  }

  button[data-variant='success']:focus-visible {
    background-color: var(--wui-success-glass-015);
  }

  button[data-variant='error']:focus-visible {
    background-color: var(--wui-error-glass-015);
  }

  button.disabled {
    color: var(--wui-gray-glass-015);
    background-color: var(--wui-gray-glass-015);
    pointer-events: none;
  }

  @media (hover: hover) and (pointer: fine) {
    button[data-variant='fill']:hover {
      background-color: var(--wui-color-accent-090);
    }

    button[data-variant='shade']:hover,
    button[data-variant='shadeSmall']:hover {
      background-color: var(--wui-gray-glass-015);
    }

    button[data-variant='transparent']:hover {
      background-color: var(--wui-gray-glass-005);
    }

    button[data-variant='success']:hover {
      background-color: var(--wui-success-glass-015);
    }

    button[data-variant='error']:hover {
      background-color: var(--wui-error-glass-015);
    }
  }

  button[data-variant='fill']:active {
    background-color: var(--wui-color-accent-080);
  }

  button[data-variant='shade']:active,
  button[data-variant='shadeSmall']:active {
    background-color: var(--wui-gray-glass-020);
  }

  button[data-variant='transparent']:active {
    background-color: var(--wui-gray-glass-010);
  }

  button[data-variant='success']:active {
    background-color: var(--wui-success-glass-020);
  }

  button[data-variant='error']:active {
    background-color: var(--wui-error-glass-020);
  }
`;var om=function(e,t,n,i){var r,a=arguments.length,o=a<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,n,i);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(o=(a<3?r(o):a>3?r(t,n,o):r(t,n))||o);return a>3&&o&&Object.defineProperty(t,n,o),o};let sm=class extends dl{constructor(){super(...arguments),this.variant="fill",this.imageSrc="",this.disabled=!1,this.icon="externalLink",this.text=""}render(){const e="success"===this.variant||"transparent"===this.variant||"shadeSmall"===this.variant?"small-600":"paragraph-600";return qs`
      <button class=${this.disabled?"disabled":""} data-variant=${this.variant}>
        <wui-image src=${this.imageSrc}></wui-image>
        <wui-text variant=${e} color="inherit"> ${this.text} </wui-text>
        <wui-icon name=${this.icon} color="inherit" size="inherit"></wui-icon>
      </button>
    `}};sm.styles=[bl,xl,am],om([$l()],sm.prototype,"variant",void 0),om([$l()],sm.prototype,"imageSrc",void 0),om([$l({type:Boolean})],sm.prototype,"disabled",void 0),om([$l()],sm.prototype,"icon",void 0),om([$l()],sm.prototype,"text",void 0),sm=om([_l("wui-chip-button")],sm);const lm=ds`
  button {
    display: flex;
    gap: var(--wui-spacing-xl);
    width: 100%;
    background-color: var(--wui-gray-glass-002);
    border-radius: var(--wui-border-radius-xxs);
    padding: var(--wui-spacing-m) var(--wui-spacing-s);
  }

  wui-text {
    width: 100%;
  }

  wui-flex {
    width: auto;
  }

  .network-icon {
    width: var(--wui-spacing-2l);
    height: var(--wui-spacing-2l);
    border-radius: calc(var(--wui-spacing-2l) / 2);
    overflow: hidden;
    box-shadow:
      0 0 0 3px var(--wui-gray-glass-002),
      0 0 0 3px var(--wui-color-modal-bg);
  }
`;var cm=function(e,t,n,i){var r,a=arguments.length,o=a<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,n,i);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(o=(a<3?r(o):a>3?r(t,n,o):r(t,n))||o);return a>3&&o&&Object.defineProperty(t,n,o),o};let um=class extends dl{constructor(){super(...arguments),this.networkImages=[""],this.text=""}render(){return qs`
      <button ontouchstart>
        <wui-text variant="small-400" color="fg-200">${this.text}</wui-text>
        <wui-flex gap="3xs" alignItems="center">
          ${this.networksTemplate()}
          <wui-icon name="chevronRight" size="sm" color="fg-200"></wui-icon>
        </wui-flex>
      </button>
    `}networksTemplate(){const e=this.networkImages.slice(0,5);return qs` <wui-flex class="networks">
      ${null==e?void 0:e.map((e=>qs` <wui-flex class="network-icon"> <wui-image src=${e}></wui-image> </wui-flex>`))}
    </wui-flex>`}};um.styles=[bl,xl,lm],cm([$l({type:Array})],um.prototype,"networkImages",void 0),cm([$l()],um.prototype,"text",void 0),um=cm([_l("wui-compatible-network")],um);const dm=ds`
  wui-flex {
    width: 100%;
    background-color: var(--wui-gray-glass-005);
    border-radius: var(--wui-border-radius-s);
    padding: var(--wui-spacing-1xs) var(--wui-spacing-s) var(--wui-spacing-1xs)
      var(--wui-spacing-1xs);
  }
`;var pm=function(e,t,n,i){var r,a=arguments.length,o=a<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,n,i);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(o=(a<3?r(o):a>3?r(t,n,o):r(t,n))||o);return a>3&&o&&Object.defineProperty(t,n,o),o};let hm=class extends dl{constructor(){super(...arguments),this.icon="externalLink",this.text=""}render(){return qs`
      <wui-flex gap="1xs" alignItems="center">
        <wui-icon-box
          size="sm"
          iconcolor="fg-200"
          backgroundcolor="fg-200"
          icon=${this.icon}
          background="transparent"
        ></wui-icon-box>
        <wui-text variant="small-400" color="fg-200">${this.text}</wui-text>
      </wui-flex>
    `}};hm.styles=[bl,xl,dm],pm([$l()],hm.prototype,"icon",void 0),pm([$l()],hm.prototype,"text",void 0),hm=pm([_l("wui-banner")],hm);const fm=ds`
  :host {
    display: grid;
    width: inherit;
    height: inherit;
  }
`;var mm=function(e,t,n,i){var r,a=arguments.length,o=a<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,n,i);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(o=(a<3?r(o):a>3?r(t,n,o):r(t,n))||o);return a>3&&o&&Object.defineProperty(t,n,o),o};let gm=class extends dl{render(){return this.style.cssText=`\n      grid-template-rows: ${this.gridTemplateRows};\n      grid-template-columns: ${this.gridTemplateColumns};\n      justify-items: ${this.justifyItems};\n      align-items: ${this.alignItems};\n      justify-content: ${this.justifyContent};\n      align-content: ${this.alignContent};\n      column-gap: ${this.columnGap&&`var(--wui-spacing-${this.columnGap})`};\n      row-gap: ${this.rowGap&&`var(--wui-spacing-${this.rowGap})`};\n      gap: ${this.gap&&`var(--wui-spacing-${this.gap})`};\n      padding-top: ${this.padding&&Ou.getSpacingStyles(this.padding,0)};\n      padding-right: ${this.padding&&Ou.getSpacingStyles(this.padding,1)};\n      padding-bottom: ${this.padding&&Ou.getSpacingStyles(this.padding,2)};\n      padding-left: ${this.padding&&Ou.getSpacingStyles(this.padding,3)};\n      margin-top: ${this.margin&&Ou.getSpacingStyles(this.margin,0)};\n      margin-right: ${this.margin&&Ou.getSpacingStyles(this.margin,1)};\n      margin-bottom: ${this.margin&&Ou.getSpacingStyles(this.margin,2)};\n      margin-left: ${this.margin&&Ou.getSpacingStyles(this.margin,3)};\n    `,qs`<slot></slot>`}};gm.styles=[bl,fm],mm([$l()],gm.prototype,"gridTemplateRows",void 0),mm([$l()],gm.prototype,"gridTemplateColumns",void 0),mm([$l()],gm.prototype,"justifyItems",void 0),mm([$l()],gm.prototype,"alignItems",void 0),mm([$l()],gm.prototype,"justifyContent",void 0),mm([$l()],gm.prototype,"alignContent",void 0),mm([$l()],gm.prototype,"columnGap",void 0),mm([$l()],gm.prototype,"rowGap",void 0),mm([$l()],gm.prototype,"gap",void 0),mm([$l()],gm.prototype,"padding",void 0),mm([$l()],gm.prototype,"margin",void 0),gm=mm([_l("wui-grid")],gm);const wm=ds`
  :host {
    position: relative;
    display: flex;
    width: 100%;
    height: 1px;
    background-color: var(--wui-gray-glass-005);
    justify-content: center;
    align-items: center;
  }

  :host > wui-text {
    position: absolute;
    padding: 0px 10px;
    background-color: var(--wui-color-modal-bg);
  }
`;var ym=function(e,t,n,i){var r,a=arguments.length,o=a<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,n,i);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(o=(a<3?r(o):a>3?r(t,n,o):r(t,n))||o);return a>3&&o&&Object.defineProperty(t,n,o),o};let vm=class extends dl{constructor(){super(...arguments),this.text=""}render(){return qs`${this.template()}`}template(){return this.text?qs`<wui-text variant="small-500" color="fg-200">${this.text}</wui-text>`:null}};vm.styles=[bl,wm],ym([$l()],vm.prototype,"text",void 0),vm=ym([_l("wui-separator")],vm);var bm={exports:{}};bm.exports=function(){var e=1e3,t=6e4,n=36e5,i="millisecond",r="second",a="minute",o="hour",s="day",l="week",c="month",u="quarter",d="year",p="date",h="Invalid Date",f=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,m=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,g={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(e){var t=["th","st","nd","rd"],n=e%100;return"["+e+(t[(n-20)%10]||t[n]||t[0])+"]"}},w=function(e,t,n){var i=String(e);return!i||i.length>=t?e:""+Array(t+1-i.length).join(n)+e},y={s:w,z:function(e){var t=-e.utcOffset(),n=Math.abs(t),i=Math.floor(n/60),r=n%60;return(t<=0?"+":"-")+w(i,2,"0")+":"+w(r,2,"0")},m:function e(t,n){if(t.date()<n.date())return-e(n,t);var i=12*(n.year()-t.year())+(n.month()-t.month()),r=t.clone().add(i,c),a=n-r<0,o=t.clone().add(i+(a?-1:1),c);return+(-(i+(n-r)/(a?r-o:o-r))||0)},a:function(e){return e<0?Math.ceil(e)||0:Math.floor(e)},p:function(e){return{M:c,y:d,w:l,d:s,D:p,h:o,m:a,s:r,ms:i,Q:u}[e]||String(e||"").toLowerCase().replace(/s$/,"")},u:function(e){return void 0===e}},v="en",b={};b[v]=g;var x="$isDayjsObject",C=function(e){return e instanceof T||!(!e||!e[x])},_=function e(t,n,i){var r;if(!t)return v;if("string"==typeof t){var a=t.toLowerCase();b[a]&&(r=a),n&&(b[a]=n,r=a);var o=t.split("-");if(!r&&o.length>1)return e(o[0])}else{var s=t.name;b[s]=t,r=s}return!i&&r&&(v=r),r||!i&&v},E=function(e,t){if(C(e))return e.clone();var n="object"==typeof t?t:{};return n.date=e,n.args=arguments,new T(n)},k=y;k.l=_,k.i=C,k.w=function(e,t){return E(e,{locale:t.$L,utc:t.$u,x:t.$x,$offset:t.$offset})};var T=function(){function g(e){this.$L=_(e.locale,null,!0),this.parse(e),this.$x=this.$x||e.x||{},this[x]=!0}var w=g.prototype;return w.parse=function(e){this.$d=function(e){var t=e.date,n=e.utc;if(null===t)return new Date(NaN);if(k.u(t))return new Date;if(t instanceof Date)return new Date(t);if("string"==typeof t&&!/Z$/i.test(t)){var i=t.match(f);if(i){var r=i[2]-1||0,a=(i[7]||"0").substring(0,3);return n?new Date(Date.UTC(i[1],r,i[3]||1,i[4]||0,i[5]||0,i[6]||0,a)):new Date(i[1],r,i[3]||1,i[4]||0,i[5]||0,i[6]||0,a)}}return new Date(t)}(e),this.init()},w.init=function(){var e=this.$d;this.$y=e.getFullYear(),this.$M=e.getMonth(),this.$D=e.getDate(),this.$W=e.getDay(),this.$H=e.getHours(),this.$m=e.getMinutes(),this.$s=e.getSeconds(),this.$ms=e.getMilliseconds()},w.$utils=function(){return k},w.isValid=function(){return!(this.$d.toString()===h)},w.isSame=function(e,t){var n=E(e);return this.startOf(t)<=n&&n<=this.endOf(t)},w.isAfter=function(e,t){return E(e)<this.startOf(t)},w.isBefore=function(e,t){return this.endOf(t)<E(e)},w.$g=function(e,t,n){return k.u(e)?this[t]:this.set(n,e)},w.unix=function(){return Math.floor(this.valueOf()/1e3)},w.valueOf=function(){return this.$d.getTime()},w.startOf=function(e,t){var n=this,i=!!k.u(t)||t,u=k.p(e),h=function(e,t){var r=k.w(n.$u?Date.UTC(n.$y,t,e):new Date(n.$y,t,e),n);return i?r:r.endOf(s)},f=function(e,t){return k.w(n.toDate()[e].apply(n.toDate("s"),(i?[0,0,0,0]:[23,59,59,999]).slice(t)),n)},m=this.$W,g=this.$M,w=this.$D,y="set"+(this.$u?"UTC":"");switch(u){case d:return i?h(1,0):h(31,11);case c:return i?h(1,g):h(0,g+1);case l:var v=this.$locale().weekStart||0,b=(m<v?m+7:m)-v;return h(i?w-b:w+(6-b),g);case s:case p:return f(y+"Hours",0);case o:return f(y+"Minutes",1);case a:return f(y+"Seconds",2);case r:return f(y+"Milliseconds",3);default:return this.clone()}},w.endOf=function(e){return this.startOf(e,!1)},w.$set=function(e,t){var n,l=k.p(e),u="set"+(this.$u?"UTC":""),h=(n={},n[s]=u+"Date",n[p]=u+"Date",n[c]=u+"Month",n[d]=u+"FullYear",n[o]=u+"Hours",n[a]=u+"Minutes",n[r]=u+"Seconds",n[i]=u+"Milliseconds",n)[l],f=l===s?this.$D+(t-this.$W):t;if(l===c||l===d){var m=this.clone().set(p,1);m.$d[h](f),m.init(),this.$d=m.set(p,Math.min(this.$D,m.daysInMonth())).$d}else h&&this.$d[h](f);return this.init(),this},w.set=function(e,t){return this.clone().$set(e,t)},w.get=function(e){return this[k.p(e)]()},w.add=function(i,u){var p,h=this;i=Number(i);var f=k.p(u),m=function(e){var t=E(h);return k.w(t.date(t.date()+Math.round(e*i)),h)};if(f===c)return this.set(c,this.$M+i);if(f===d)return this.set(d,this.$y+i);if(f===s)return m(1);if(f===l)return m(7);var g=(p={},p[a]=t,p[o]=n,p[r]=e,p)[f]||1,w=this.$d.getTime()+i*g;return k.w(w,this)},w.subtract=function(e,t){return this.add(-1*e,t)},w.format=function(e){var t=this,n=this.$locale();if(!this.isValid())return n.invalidDate||h;var i=e||"YYYY-MM-DDTHH:mm:ssZ",r=k.z(this),a=this.$H,o=this.$m,s=this.$M,l=n.weekdays,c=n.months,u=n.meridiem,d=function(e,n,r,a){return e&&(e[n]||e(t,i))||r[n].slice(0,a)},p=function(e){return k.s(a%12||12,e,"0")},f=u||function(e,t,n){var i=e<12?"AM":"PM";return n?i.toLowerCase():i};return i.replace(m,(function(e,i){return i||function(e){switch(e){case"YY":return String(t.$y).slice(-2);case"YYYY":return k.s(t.$y,4,"0");case"M":return s+1;case"MM":return k.s(s+1,2,"0");case"MMM":return d(n.monthsShort,s,c,3);case"MMMM":return d(c,s);case"D":return t.$D;case"DD":return k.s(t.$D,2,"0");case"d":return String(t.$W);case"dd":return d(n.weekdaysMin,t.$W,l,2);case"ddd":return d(n.weekdaysShort,t.$W,l,3);case"dddd":return l[t.$W];case"H":return String(a);case"HH":return k.s(a,2,"0");case"h":return p(1);case"hh":return p(2);case"a":return f(a,o,!0);case"A":return f(a,o,!1);case"m":return String(o);case"mm":return k.s(o,2,"0");case"s":return String(t.$s);case"ss":return k.s(t.$s,2,"0");case"SSS":return k.s(t.$ms,3,"0");case"Z":return r}return null}(e)||r.replace(":","")}))},w.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},w.diff=function(i,p,h){var f,m=this,g=k.p(p),w=E(i),y=(w.utcOffset()-this.utcOffset())*t,v=this-w,b=function(){return k.m(m,w)};switch(g){case d:f=b()/12;break;case c:f=b();break;case u:f=b()/3;break;case l:f=(v-y)/6048e5;break;case s:f=(v-y)/864e5;break;case o:f=v/n;break;case a:f=v/t;break;case r:f=v/e;break;default:f=v}return h?f:k.a(f)},w.daysInMonth=function(){return this.endOf(c).$D},w.$locale=function(){return b[this.$L]},w.locale=function(e,t){if(!e)return this.$L;var n=this.clone(),i=_(e,t,!0);return i&&(n.$L=i),n},w.clone=function(){return k.w(this.$d,this)},w.toDate=function(){return new Date(this.valueOf())},w.toJSON=function(){return this.isValid()?this.toISOString():null},w.toISOString=function(){return this.$d.toISOString()},w.toString=function(){return this.$d.toUTCString()},g}(),A=T.prototype;return E.prototype=A,[["$ms",i],["$s",r],["$m",a],["$H",o],["$W",s],["$M",c],["$y",d],["$D",p]].forEach((function(e){A[e[1]]=function(t){return this.$g(t,e[0],e[1])}})),E.extend=function(e,t){return e.$i||(e(t,T,E),e.$i=!0),E},E.locale=_,E.isDayjs=C,E.unix=function(e){return E(1e3*e)},E.en=b[v],E.Ls=b,E.p={},E}();const xm=o(bm.exports);var Cm={exports:{}};Cm.exports=function(e,t,n){n.updateLocale=function(e,t){var i=n.Ls[e];if(i)return(t?Object.keys(t):[]).forEach((function(e){i[e]=t[e]})),i}};const _m=o(Cm.exports);var Em={exports:{}};Em.exports=function(e,t,n){e=e||{};var i=t.prototype,r={future:"in %s",past:"%s ago",s:"a few seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"};function a(e,t,n,r){return i.fromToBase(e,t,n,r)}n.en.relativeTime=r,i.fromToBase=function(t,i,a,o,s){for(var l,c,u,d=a.$locale().relativeTime||r,p=e.thresholds||[{l:"s",r:44,d:"second"},{l:"m",r:89},{l:"mm",r:44,d:"minute"},{l:"h",r:89},{l:"hh",r:21,d:"hour"},{l:"d",r:35},{l:"dd",r:25,d:"day"},{l:"M",r:45},{l:"MM",r:10,d:"month"},{l:"y",r:17},{l:"yy",d:"year"}],h=p.length,f=0;f<h;f+=1){var m=p[f];m.d&&(l=o?n(t).diff(a,m.d,!0):a.diff(t,m.d,!0));var g=(e.rounding||Math.round)(Math.abs(l));if(u=l>0,g<=m.r||!m.r){g<=1&&f>0&&(m=p[f-1]);var w=d[m.l];s&&(g=s(""+g)),c="string"==typeof w?w.replace("%d",g):w(g,i,m.l,u);break}}if(i)return c;var y=u?d.future:d.past;return"function"==typeof y?y(c):y.replace("%s",c)},i.to=function(e,t){return a(e,t,this,!0)},i.from=function(e,t){return a(e,t,this)};var o=function(e){return e.$u?n.utc():n()};i.toNow=function(e){return this.to(o(this),e)},i.fromNow=function(e){return this.from(o(this),e)}};const km=o(Em.exports);xm.extend(km),xm.extend(_m),xm.updateLocale("en",{relativeTime:{future:"in %s",past:"%s ago",s:"%s sec",m:"1 min",mm:"%d min",h:"1 hr",hh:"%d hrs",d:"1 d",dd:"%d d",M:"1 mo",MM:"%d mo",y:"1 yr",yy:"%d yr"}});const Tm={getYear:(e=(new Date).toISOString())=>xm(e).year(),getRelativeDateFromNow:e=>xm(e).fromNow(!0),formatDate:(e,t="DD MMM")=>xm(e).format(t)},Am=["receive","deposit","borrow","claim"],$m=["withdraw","repay","burn"],Im={getMonthName(e){const t=new Date;return t.setMonth(e),t.toLocaleString("en-US",{month:"long"})},getTransactionGroupTitle(e,t){const n=Tm.getYear(),i=this.getMonthName(t);return e===n?i:`${i} ${e}`},getTransactionImages(e){const[t,n]=e,i=Boolean(t)&&(null==e?void 0:e.every((e=>Boolean(e.nft_info)))),r=(null==e?void 0:e.length)>1;return 2===(null==e?void 0:e.length)&&!i?[this.getTransactionImage(t),this.getTransactionImage(n)]:r?e.map((e=>this.getTransactionImage(e))):[this.getTransactionImage(t)]},getTransactionImage:e=>({type:Im.getTransactionTransferTokenType(e),url:Im.getTransactionImageURL(e)}),getTransactionImageURL(e){var t,n,i,r,a;let o;const s=Boolean(null==e?void 0:e.nft_info),l=Boolean(null==e?void 0:e.fungible_info);return e&&s?o=null==(i=null==(n=null==(t=null==e?void 0:e.nft_info)?void 0:t.content)?void 0:n.preview)?void 0:i.url:e&&l&&(o=null==(a=null==(r=null==e?void 0:e.fungible_info)?void 0:r.icon)?void 0:a.url),o},getTransactionTransferTokenType:e=>(null==e?void 0:e.fungible_info)?"FUNGIBLE":(null==e?void 0:e.nft_info)?"NFT":void 0,getTransactionDescriptions(e){var t,n,i;const r=null==(t=null==e?void 0:e.metadata)?void 0:t.operationType,a=null==e?void 0:e.transfers,o=(null==(n=null==e?void 0:e.transfers)?void 0:n.length)>0,s=(null==(i=null==e?void 0:e.transfers)?void 0:i.length)>1,l=o&&(null==a?void 0:a.every((e=>Boolean(null==e?void 0:e.fungible_info)))),[c,u]=a;let d=this.getTransferDescription(c),p=this.getTransferDescription(u);if(!o){return("send"===r||"receive"===r)&&l?(d=Ou.getTruncateString({string:null==e?void 0:e.metadata.sentFrom,charsStart:4,charsEnd:6,truncate:"middle"}),p=Ou.getTruncateString({string:null==e?void 0:e.metadata.sentTo,charsStart:4,charsEnd:6,truncate:"middle"}),[d,p]):[e.metadata.status]}if(s)return a.map((e=>this.getTransferDescription(e)));let h="";return Am.includes(r)?h="+":$m.includes(r)&&(h="-"),d=h.concat(d),[d]},getTransferDescription(e){var t;let n="";return e?((null==e?void 0:e.nft_info)?n=(null==(t=null==e?void 0:e.nft_info)?void 0:t.name)||"-":(null==e?void 0:e.fungible_info)&&(n=this.getFungibleTransferDescription(e)||"-"),n):n},getFungibleTransferDescription(e){var t;if(!e)return null;return[this.getQuantityFixedValue(null==e?void 0:e.quantity.numeric),null==(t=null==e?void 0:e.fungible_info)?void 0:t.symbol].join(" ").trim()},getQuantityFixedValue(e){if(!e)return null;return parseFloat(e).toFixed(3)}},Pm=Object.freeze(Object.defineProperty({__proto__:null,TransactionUtil:Im,UiHelperUtil:Ou,get WuiAccountButton(){return Zu},get WuiAllWalletsImage(){return Ju},get WuiAvatar(){return Bu},get WuiBalance(){return tm},get WuiBanner(){return hm},get WuiButton(){return td},get WuiCard(){return kl},get WuiCardSelect(){return hd},get WuiCardSelectLoader(){return ad},get WuiChip(){return gd},get WuiChipButton(){return sm},get WuiCompatibleNetwork(){return um},get WuiConnectButton(){return vd},get WuiCtaButton(){return Cd},get WuiEmailInput(){return Bd},get WuiFlex(){return ju},get WuiGrid(){return gm},get WuiIcon(){return zc},get WuiIconBox(){return Fu},get WuiIconLink(){return Fd},get WuiImage(){return Hc},get WuiInputElement(){return Zd},get WuiInputNumeric(){return qd},get WuiInputText(){return jd},get WuiLink(){return Jd},get WuiListAccordion(){return Sf},get WuiListContent(){return Nf},get WuiListItem(){return ep},get WuiListNetwork(){return Uf},get WuiListWallet(){return gp},get WuiListWalletTransaction(){return Lf},get WuiLoadingHexagon(){return Vc},get WuiLoadingSpinner(){return Kc},get WuiLoadingThumbnail(){return Qc},get WuiLogo(){return vp},get WuiLogoSelect(){return Cp},get WuiNetworkButton(){return kp},get WuiNetworkImage(){return ud},get WuiNoticeCard(){return $f},get WuiOnRampActivityItem(){return Wf},get WuiOnRampProviderItem(){return Vf},get WuiOtp(){return $p},get WuiProfileButton(){return rm},get WuiPromo(){return Kf},get WuiQrCode(){return df},get WuiSearchBar(){return hf},get WuiSeparator(){return vm},get WuiShimmer(){return tu},get WuiSnackbar(){return gf},get WuiTabs(){return vf},get WuiTag(){return hp},get WuiText(){return cu},get WuiTooltip(){return Cf},get WuiTooltipSelect(){return Qf},get WuiTransactionListItem(){return lp},get WuiTransactionListItemLoader(){return up},get WuiTransactionVisual(){return ap},get WuiVisual(){return Su},get WuiVisualThumbnail(){return kf},get WuiWalletImage(){return qu},customElement:_l,initializeTheming:gl,setColorTheme:wl,setThemeVariables:yl},Symbol.toStringTag,{value:"Module"})),Sm=globalThis,Rm=Sm.ShadowRoot&&(void 0===Sm.ShadyCSS||Sm.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Om=Symbol(),Nm=new WeakMap;let Mm=class{constructor(e,t,n){if(this._$cssResult$=!0,n!==Om)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(Rm&&void 0===e){const n=void 0!==t&&1===t.length;n&&(e=Nm.get(t)),void 0===e&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),n&&Nm.set(t,e))}return e}toString(){return this.cssText}};const jm=(e,...t)=>{const n=1===e.length?e[0]:t.reduce(((t,n,i)=>t+(e=>{if(!0===e._$cssResult$)return e.cssText;if("number"==typeof e)return e;throw Error("Value passed to 'css' function must be a 'css' function result: "+e+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(n)+e[i+1]),e[0]);return new Mm(n,e,Om)},Um=Rm?e=>e:e=>e instanceof CSSStyleSheet?(e=>{let t="";for(const n of e.cssRules)t+=n.cssText;return(e=>new Mm("string"==typeof e?e:e+"",void 0,Om))(t)})(e):e
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */,{is:Dm,defineProperty:Bm,getOwnPropertyDescriptor:Lm,getOwnPropertyNames:zm,getOwnPropertySymbols:Fm,getPrototypeOf:Wm}=Object,Hm=globalThis,Zm=Hm.trustedTypes,Vm=Zm?Zm.emptyScript:"",Gm=Hm.reactiveElementPolyfillSupport,qm=(e,t)=>e,Km={toAttribute(e,t){switch(t){case Boolean:e=e?Vm:null;break;case Object:case Array:e=null==e?e:JSON.stringify(e)}return e},fromAttribute(e,t){let n=e;switch(t){case Boolean:n=null!==e;break;case Number:n=null===e?null:Number(e);break;case Object:case Array:try{n=JSON.parse(e)}catch(i){n=null}}return n}},Ym=(e,t)=>!Dm(e,t),Jm={attribute:!0,type:String,converter:Km,reflect:!1,hasChanged:Ym};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),Hm.litPropertyMetadata??(Hm.litPropertyMetadata=new WeakMap);class Qm extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??(this.l=[])).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=Jm){if(t.state&&(t.attribute=!1),this._$Ei(),this.elementProperties.set(e,t),!t.noAccessor){const n=Symbol(),i=this.getPropertyDescriptor(e,n,t);void 0!==i&&Bm(this.prototype,e,i)}}static getPropertyDescriptor(e,t,n){const{get:i,set:r}=Lm(this.prototype,e)??{get(){return this[t]},set(e){this[t]=e}};return{get(){return null==i?void 0:i.call(this)},set(t){const a=null==i?void 0:i.call(this);r.call(this,t),this.requestUpdate(e,a,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??Jm}static _$Ei(){if(this.hasOwnProperty(qm("elementProperties")))return;const e=Wm(this);e.finalize(),void 0!==e.l&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(qm("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(qm("properties"))){const e=this.properties,t=[...zm(e),...Fm(e)];for(const n of t)this.createProperty(n,e[n])}const e=this[Symbol.metadata];if(null!==e){const t=litPropertyMetadata.get(e);if(void 0!==t)for(const[e,n]of t)this.elementProperties.set(e,n)}this._$Eh=new Map;for(const[t,n]of this.elementProperties){const e=this._$Eu(t,n);void 0!==e&&this._$Eh.set(e,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const n=new Set(e.flat(1/0).reverse());for(const e of n)t.unshift(Um(e))}else void 0!==e&&t.push(Um(e));return t}static _$Eu(e,t){const n=t.attribute;return!1===n?void 0:"string"==typeof n?n:"string"==typeof e?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var e;this._$ES=new Promise((e=>this.enableUpdating=e)),this._$AL=new Map,this._$E_(),this.requestUpdate(),null==(e=this.constructor.l)||e.forEach((e=>e(this)))}addController(e){var t;(this._$EO??(this._$EO=new Set)).add(e),void 0!==this.renderRoot&&this.isConnected&&(null==(t=e.hostConnected)||t.call(e))}removeController(e){var t;null==(t=this._$EO)||t.delete(e)}_$E_(){const e=new Map,t=this.constructor.elementProperties;for(const n of t.keys())this.hasOwnProperty(n)&&(e.set(n,this[n]),delete this[n]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return((e,t)=>{if(Rm)e.adoptedStyleSheets=t.map((e=>e instanceof CSSStyleSheet?e:e.styleSheet));else for(const n of t){const t=document.createElement("style"),i=Sm.litNonce;void 0!==i&&t.setAttribute("nonce",i),t.textContent=n.cssText,e.appendChild(t)}})(e,this.constructor.elementStyles),e}connectedCallback(){var e;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null==(e=this._$EO)||e.forEach((e=>{var t;return null==(t=e.hostConnected)?void 0:t.call(e)}))}enableUpdating(e){}disconnectedCallback(){var e;null==(e=this._$EO)||e.forEach((e=>{var t;return null==(t=e.hostDisconnected)?void 0:t.call(e)}))}attributeChangedCallback(e,t,n){this._$AK(e,n)}_$EC(e,t){var n;const i=this.constructor.elementProperties.get(e),r=this.constructor._$Eu(e,i);if(void 0!==r&&!0===i.reflect){const a=(void 0!==(null==(n=i.converter)?void 0:n.toAttribute)?i.converter:Km).toAttribute(t,i.type);this._$Em=e,null==a?this.removeAttribute(r):this.setAttribute(r,a),this._$Em=null}}_$AK(e,t){var n;const i=this.constructor,r=i._$Eh.get(e);if(void 0!==r&&this._$Em!==r){const e=i.getPropertyOptions(r),a="function"==typeof e.converter?{fromAttribute:e.converter}:void 0!==(null==(n=e.converter)?void 0:n.fromAttribute)?e.converter:Km;this._$Em=r,this[r]=a.fromAttribute(t,e.type),this._$Em=null}}requestUpdate(e,t,n){if(void 0!==e){if(n??(n=this.constructor.getPropertyOptions(e)),!(n.hasChanged??Ym)(this[e],t))return;this.P(e,t,n)}!1===this.isUpdatePending&&(this._$ES=this._$ET())}P(e,t,n){this._$AL.has(e)||this._$AL.set(e,t),!0===n.reflect&&this._$Em!==e&&(this._$Ej??(this._$Ej=new Set)).add(e)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const e=this.scheduleUpdate();return null!=e&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var e;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[e,t]of this._$Ep)this[e]=t;this._$Ep=void 0}const e=this.constructor.elementProperties;if(e.size>0)for(const[t,n]of e)!0!==n.wrapped||this._$AL.has(t)||void 0===this[t]||this.P(t,this[t],n)}let t=!1;const n=this._$AL;try{t=this.shouldUpdate(n),t?(this.willUpdate(n),null==(e=this._$EO)||e.forEach((e=>{var t;return null==(t=e.hostUpdate)?void 0:t.call(e)})),this.update(n)):this._$EU()}catch(i){throw t=!1,this._$EU(),i}t&&this._$AE(n)}willUpdate(e){}_$AE(e){var t;null==(t=this._$EO)||t.forEach((e=>{var t;return null==(t=e.hostUpdated)?void 0:t.call(e)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Ej&&(this._$Ej=this._$Ej.forEach((e=>this._$EC(e,this[e])))),this._$EU()}updated(e){}firstUpdated(e){}}Qm.elementStyles=[],Qm.shadowRootOptions={mode:"open"},Qm[qm("elementProperties")]=new Map,Qm[qm("finalized")]=new Map,null==Gm||Gm({ReactiveElement:Qm}),(Hm.reactiveElementVersions??(Hm.reactiveElementVersions=[])).push("2.0.4");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const Xm=globalThis,eg=Xm.trustedTypes,tg=eg?eg.createPolicy("lit-html",{createHTML:e=>e}):void 0,ng="$lit$",ig=`lit$${(Math.random()+"").slice(9)}$`,rg="?"+ig,ag=`<${rg}>`,og=document,sg=()=>og.createComment(""),lg=e=>null===e||"object"!=typeof e&&"function"!=typeof e,cg=Array.isArray,ug="[ \t\n\f\r]",dg=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,pg=/-->/g,hg=/>/g,fg=RegExp(`>|${ug}(?:([^\\s"'>=/]+)(${ug}*=${ug}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),mg=/'/g,gg=/"/g,wg=/^(?:script|style|textarea|title)$/i,yg=(_g=1,(e,...t)=>({_$litType$:_g,strings:e,values:t})),vg=Symbol.for("lit-noChange"),bg=Symbol.for("lit-nothing"),xg=new WeakMap,Cg=og.createTreeWalker(og,129);var _g;function Eg(e,t){if(!Array.isArray(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==tg?tg.createHTML(t):t}class kg{constructor({strings:e,_$litType$:t},n){let i;this.parts=[];let r=0,a=0;const o=e.length-1,s=this.parts,[l,c]=((e,t)=>{const n=e.length-1,i=[];let r,a=2===t?"<svg>":"",o=dg;for(let s=0;s<n;s++){const t=e[s];let n,l,c=-1,u=0;for(;u<t.length&&(o.lastIndex=u,l=o.exec(t),null!==l);)u=o.lastIndex,o===dg?"!--"===l[1]?o=pg:void 0!==l[1]?o=hg:void 0!==l[2]?(wg.test(l[2])&&(r=RegExp("</"+l[2],"g")),o=fg):void 0!==l[3]&&(o=fg):o===fg?">"===l[0]?(o=r??dg,c=-1):void 0===l[1]?c=-2:(c=o.lastIndex-l[2].length,n=l[1],o=void 0===l[3]?fg:'"'===l[3]?gg:mg):o===gg||o===mg?o=fg:o===pg||o===hg?o=dg:(o=fg,r=void 0);const d=o===fg&&e[s+1].startsWith("/>")?" ":"";a+=o===dg?t+ag:c>=0?(i.push(n),t.slice(0,c)+ng+t.slice(c)+ig+d):t+ig+(-2===c?s:d)}return[Eg(e,a+(e[n]||"<?>")+(2===t?"</svg>":"")),i]})(e,t);if(this.el=kg.createElement(l,n),Cg.currentNode=this.el.content,2===t){const e=this.el.content.firstChild;e.replaceWith(...e.childNodes)}for(;null!==(i=Cg.nextNode())&&s.length<o;){if(1===i.nodeType){if(i.hasAttributes())for(const e of i.getAttributeNames())if(e.endsWith(ng)){const t=c[a++],n=i.getAttribute(e).split(ig),o=/([.?@])?(.*)/.exec(t);s.push({type:1,index:r,name:o[2],strings:n,ctor:"."===o[1]?Pg:"?"===o[1]?Sg:"@"===o[1]?Rg:Ig}),i.removeAttribute(e)}else e.startsWith(ig)&&(s.push({type:6,index:r}),i.removeAttribute(e));if(wg.test(i.tagName)){const e=i.textContent.split(ig),t=e.length-1;if(t>0){i.textContent=eg?eg.emptyScript:"";for(let n=0;n<t;n++)i.append(e[n],sg()),Cg.nextNode(),s.push({type:2,index:++r});i.append(e[t],sg())}}}else if(8===i.nodeType)if(i.data===rg)s.push({type:2,index:r});else{let e=-1;for(;-1!==(e=i.data.indexOf(ig,e+1));)s.push({type:7,index:r}),e+=ig.length-1}r++}}static createElement(e,t){const n=og.createElement("template");return n.innerHTML=e,n}}function Tg(e,t,n=e,i){var r,a;if(t===vg)return t;let o=void 0!==i?null==(r=n._$Co)?void 0:r[i]:n._$Cl;const s=lg(t)?void 0:t._$litDirective$;return(null==o?void 0:o.constructor)!==s&&(null==(a=null==o?void 0:o._$AO)||a.call(o,!1),void 0===s?o=void 0:(o=new s(e),o._$AT(e,n,i)),void 0!==i?(n._$Co??(n._$Co=[]))[i]=o:n._$Cl=o),void 0!==o&&(t=Tg(e,o._$AS(e,t.values),o,i)),t}class Ag{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:t},parts:n}=this._$AD,i=((null==e?void 0:e.creationScope)??og).importNode(t,!0);Cg.currentNode=i;let r=Cg.nextNode(),a=0,o=0,s=n[0];for(;void 0!==s;){if(a===s.index){let t;2===s.type?t=new $g(r,r.nextSibling,this,e):1===s.type?t=new s.ctor(r,s.name,s.strings,this,e):6===s.type&&(t=new Og(r,this,e)),this._$AV.push(t),s=n[++o]}a!==(null==s?void 0:s.index)&&(r=Cg.nextNode(),a++)}return Cg.currentNode=og,i}p(e){let t=0;for(const n of this._$AV)void 0!==n&&(void 0!==n.strings?(n._$AI(e,n,t),t+=n.strings.length-2):n._$AI(e[t])),t++}}class $g{get _$AU(){var e;return(null==(e=this._$AM)?void 0:e._$AU)??this._$Cv}constructor(e,t,n,i){this.type=2,this._$AH=bg,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=n,this.options=i,this._$Cv=(null==i?void 0:i.isConnected)??!0}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return void 0!==t&&11===(null==e?void 0:e.nodeType)&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=Tg(this,e,t),lg(e)?e===bg||null==e||""===e?(this._$AH!==bg&&this._$AR(),this._$AH=bg):e!==this._$AH&&e!==vg&&this._(e):void 0!==e._$litType$?this.$(e):void 0!==e.nodeType?this.T(e):(e=>cg(e)||"function"==typeof(null==e?void 0:e[Symbol.iterator]))(e)?this.k(e):this._(e)}S(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.S(e))}_(e){this._$AH!==bg&&lg(this._$AH)?this._$AA.nextSibling.data=e:this.T(og.createTextNode(e)),this._$AH=e}$(e){var t;const{values:n,_$litType$:i}=e,r="number"==typeof i?this._$AC(e):(void 0===i.el&&(i.el=kg.createElement(Eg(i.h,i.h[0]),this.options)),i);if((null==(t=this._$AH)?void 0:t._$AD)===r)this._$AH.p(n);else{const e=new Ag(r,this),t=e.u(this.options);e.p(n),this.T(t),this._$AH=e}}_$AC(e){let t=xg.get(e.strings);return void 0===t&&xg.set(e.strings,t=new kg(e)),t}k(e){cg(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let n,i=0;for(const r of e)i===t.length?t.push(n=new $g(this.S(sg()),this.S(sg()),this,this.options)):n=t[i],n._$AI(r),i++;i<t.length&&(this._$AR(n&&n._$AB.nextSibling,i),t.length=i)}_$AR(e=this._$AA.nextSibling,t){var n;for(null==(n=this._$AP)||n.call(this,!1,!0,t);e&&e!==this._$AB;){const t=e.nextSibling;e.remove(),e=t}}setConnected(e){var t;void 0===this._$AM&&(this._$Cv=e,null==(t=this._$AP)||t.call(this,e))}}class Ig{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,n,i,r){this.type=1,this._$AH=bg,this._$AN=void 0,this.element=e,this.name=t,this._$AM=i,this.options=r,n.length>2||""!==n[0]||""!==n[1]?(this._$AH=Array(n.length-1).fill(new String),this.strings=n):this._$AH=bg}_$AI(e,t=this,n,i){const r=this.strings;let a=!1;if(void 0===r)e=Tg(this,e,t,0),a=!lg(e)||e!==this._$AH&&e!==vg,a&&(this._$AH=e);else{const i=e;let o,s;for(e=r[0],o=0;o<r.length-1;o++)s=Tg(this,i[n+o],t,o),s===vg&&(s=this._$AH[o]),a||(a=!lg(s)||s!==this._$AH[o]),s===bg?e=bg:e!==bg&&(e+=(s??"")+r[o+1]),this._$AH[o]=s}a&&!i&&this.j(e)}j(e){e===bg?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class Pg extends Ig{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===bg?void 0:e}}class Sg extends Ig{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==bg)}}class Rg extends Ig{constructor(e,t,n,i,r){super(e,t,n,i,r),this.type=5}_$AI(e,t=this){if((e=Tg(this,e,t,0)??bg)===vg)return;const n=this._$AH,i=e===bg&&n!==bg||e.capture!==n.capture||e.once!==n.once||e.passive!==n.passive,r=e!==bg&&(n===bg||i);i&&this.element.removeEventListener(this.name,this,n),r&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t;"function"==typeof this._$AH?this._$AH.call((null==(t=this.options)?void 0:t.host)??this.element,e):this._$AH.handleEvent(e)}}class Og{constructor(e,t,n){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(e){Tg(this,e)}}const Ng=Xm.litHtmlPolyfillSupport;null==Ng||Ng(kg,$g),(Xm.litHtmlVersions??(Xm.litHtmlVersions=[])).push("3.1.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
let Mg=class extends Qm{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var e;const t=super.createRenderRoot();return(e=this.renderOptions).renderBefore??(e.renderBefore=t.firstChild),t}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=((e,t,n)=>{const i=(null==n?void 0:n.renderBefore)??t;let r=i._$litPart$;if(void 0===r){const e=(null==n?void 0:n.renderBefore)??null;i._$litPart$=r=new $g(t.insertBefore(sg(),e),e,void 0,n??{})}return r._$AI(e),r})(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),null==(e=this._$Do)||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),null==(e=this._$Do)||e.setConnected(!1)}render(){return vg}};Mg._$litElement$=!0,Mg.finalized=!0,null==(t=globalThis.litElementHydrateSupport)||t.call(globalThis,{LitElement:Mg});const jg=globalThis.litElementPolyfillSupport;null==jg||jg({LitElement:Mg}),(globalThis.litElementVersions??(globalThis.litElementVersions=[])).push("4.0.4");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const Ug={attribute:!0,type:String,converter:Km,reflect:!1,hasChanged:Ym},Dg=(e=Ug,t,n)=>{const{kind:i,metadata:r}=n;let a=globalThis.litPropertyMetadata.get(r);if(void 0===a&&globalThis.litPropertyMetadata.set(r,a=new Map),a.set(n.name,e),"accessor"===i){const{name:i}=n;return{set(n){const r=t.get.call(this);t.set.call(this,n),this.requestUpdate(i,r,e)},init(t){return void 0!==t&&this.P(i,void 0,e),t}}}if("setter"===i){const{name:i}=n;return function(n){const r=this[i];t.call(this,n),this.requestUpdate(i,r,e)}}throw Error("Unsupported decorator location: "+i)};function Bg(e){return(t,n)=>"object"==typeof n?Dg(e,t,n):((e,t,n)=>{const i=t.hasOwnProperty(n);return t.constructor.createProperty(n,i?{...e,wrapped:!0}:e),i?Object.getOwnPropertyDescriptor(t,n):void 0})(e,t,n)}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Lg(e){return Bg({...e,state:!0,attribute:!1})}
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const zg=e=>e??bg;var Fg=function(e,t,n,i){var r,a=arguments.length,o=a<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,n,i);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(o=(a<3?r(o):a>3?r(t,n,o):r(t,n))||o);return a>3&&o&&Object.defineProperty(t,n,o),o};let Wg=class extends Mg{constructor(){super(),this.unsubscribe=[],this.disabled=!1,this.balance="show",this.charsStart=4,this.charsEnd=6,this.address=fo.state.address,this.balanceVal=fo.state.balance,this.balanceSymbol=fo.state.balanceSymbol,this.profileName=fo.state.profileName,this.profileImage=fo.state.profileImage,this.network=jo.state.caipNetwork,this.isUnsupportedChain=jo.state.isUnsupportedChain,this.unsubscribe.push(fo.subscribe((e=>{e.isConnected?(this.address=e.address,this.balanceVal=e.balance,this.profileName=e.profileName,this.profileImage=e.profileImage,this.balanceSymbol=e.balanceSymbol):(this.address="",this.balanceVal="",this.profileName="",this.profileImage="",this.balanceSymbol="")})),jo.subscribeKey("caipNetwork",(e=>this.network=e)),jo.subscribeKey("isUnsupportedChain",(e=>this.isUnsupportedChain=e)))}disconnectedCallback(){this.unsubscribe.forEach((e=>e()))}render(){const e=is.getNetworkImage(this.network),t="show"===this.balance;return yg`
      <wui-account-button
        .disabled=${Boolean(this.disabled)}
        .isUnsupportedChain=${this.isUnsupportedChain}
        address=${zg(this.profileName??this.address)}
        ?isProfileName=${Boolean(this.profileName)}
        networkSrc=${zg(e)}
        avatarSrc=${zg(this.profileImage)}
        balance=${t?po.formatBalance(this.balanceVal,this.balanceSymbol):""}
        @click=${this.onClick.bind(this)}
        data-testid="account-button"
        .charsStart=${this.charsStart}
        .charsEnd=${this.charsEnd}
      >
      </wui-account-button>
    `}onClick(){this.isUnsupportedChain?Wo.open({view:"UnsupportedChain"}):Wo.open()}};Fg([Bg({type:Boolean})],Wg.prototype,"disabled",void 0),Fg([Bg()],Wg.prototype,"balance",void 0),Fg([Bg()],Wg.prototype,"charsStart",void 0),Fg([Bg()],Wg.prototype,"charsEnd",void 0),Fg([Lg()],Wg.prototype,"address",void 0),Fg([Lg()],Wg.prototype,"balanceVal",void 0),Fg([Lg()],Wg.prototype,"balanceSymbol",void 0),Fg([Lg()],Wg.prototype,"profileName",void 0),Fg([Lg()],Wg.prototype,"profileImage",void 0),Fg([Lg()],Wg.prototype,"network",void 0),Fg([Lg()],Wg.prototype,"isUnsupportedChain",void 0),Wg=Fg([_l("w3m-account-button")],Wg);const Hg=jm`
  :host {
    display: block;
    width: max-content;
  }
`;var Zg=function(e,t,n,i){var r,a=arguments.length,o=a<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,n,i);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(o=(a<3?r(o):a>3?r(t,n,o):r(t,n))||o);return a>3&&o&&Object.defineProperty(t,n,o),o};let Vg=class extends Mg{constructor(){super(),this.unsubscribe=[],this.disabled=!1,this.balance=void 0,this.size=void 0,this.label=void 0,this.loadingLabel=void 0,this.charsStart=4,this.charsEnd=6,this.isAccount=fo.state.isConnected,this.unsubscribe.push(fo.subscribeKey("isConnected",(e=>{this.isAccount=e})))}disconnectedCallback(){this.unsubscribe.forEach((e=>e()))}render(){return this.isAccount?yg`
          <w3m-account-button
            .disabled=${Boolean(this.disabled)}
            balance=${zg(this.balance)}
            .charsStart=${zg(this.charsStart)}
            .charsEnd=${zg(this.charsEnd)}
          >
          </w3m-account-button>
        `:yg`
          <w3m-connect-button
            size=${zg(this.size)}
            label=${zg(this.label)}
            loadingLabel=${zg(this.loadingLabel)}
          ></w3m-connect-button>
        `}};Vg.styles=Hg,Zg([Bg({type:Boolean})],Vg.prototype,"disabled",void 0),Zg([Bg()],Vg.prototype,"balance",void 0),Zg([Bg()],Vg.prototype,"size",void 0),Zg([Bg()],Vg.prototype,"label",void 0),Zg([Bg()],Vg.prototype,"loadingLabel",void 0),Zg([Bg()],Vg.prototype,"charsStart",void 0),Zg([Bg()],Vg.prototype,"charsEnd",void 0),Zg([Lg()],Vg.prototype,"isAccount",void 0),Vg=Zg([_l("w3m-button")],Vg);var Gg=function(e,t,n,i){var r,a=arguments.length,o=a<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,n,i);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(o=(a<3?r(o):a>3?r(t,n,o):r(t,n))||o);return a>3&&o&&Object.defineProperty(t,n,o),o};let qg=class extends Mg{constructor(){super(),this.unsubscribe=[],this.size="md",this.label="Connect Wallet",this.loadingLabel="Connecting...",this.open=Wo.state.open,this.loading=Wo.state.loading,this.unsubscribe.push(Wo.subscribe((e=>{this.open=e.open,this.loading=e.loading})))}disconnectedCallback(){this.unsubscribe.forEach((e=>e()))}render(){const e=this.loading||this.open;return yg`
      <wui-connect-button
        size=${zg(this.size)}
        .loading=${e}
        @click=${this.onClick.bind(this)}
        data-testid="connect-button"
      >
        ${e?this.loadingLabel:this.label}
      </wui-connect-button>
    `}onClick(){this.open?Wo.close():this.loading||Wo.open()}};Gg([Bg()],qg.prototype,"size",void 0),Gg([Bg()],qg.prototype,"label",void 0),Gg([Bg()],qg.prototype,"loadingLabel",void 0),Gg([Lg()],qg.prototype,"open",void 0),Gg([Lg()],qg.prototype,"loading",void 0),qg=Gg([_l("w3m-connect-button")],qg);const Kg=jm`
  :host {
    z-index: var(--w3m-z-index);
    display: block;
    backface-visibility: hidden;
    will-change: opacity;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    pointer-events: none;
    opacity: 0;
    background-color: var(--wui-cover);
  }

  @keyframes zoom-in {
    0% {
      transform: scale(0.95) translateY(0);
    }
    100% {
      transform: scale(1) translateY(0);
    }
  }

  @keyframes slide-in {
    0% {
      transform: scale(1) translateY(50px);
    }
    100% {
      transform: scale(1) translateY(0);
    }
  }

  wui-card {
    max-width: 360px;
    width: 100%;
    position: relative;
    animation-delay: 0.3s;
    animation-duration: 0.2s;
    animation-name: zoom-in;
    animation-fill-mode: backwards;
    animation-timing-function: var(--wui-ease-out-power-2);
    outline: none;
  }

  wui-flex {
    overflow-x: hidden;
    overflow-y: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  @media (max-height: 700px) and (min-width: 431px) {
    wui-flex {
      align-items: flex-start;
    }

    wui-card {
      margin: var(--wui-spacing-xxl) 0px;
    }
  }

  @media (max-width: 430px) {
    wui-flex {
      align-items: flex-end;
    }

    wui-card {
      max-width: 100%;
      border-bottom-left-radius: 0;
      border-bottom-right-radius: 0;
      border-bottom: none;
      animation-name: slide-in;
    }
  }
`;var Yg=function(e,t,n,i){var r,a=arguments.length,o=a<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,n,i);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(o=(a<3?r(o):a>3?r(t,n,o):r(t,n))||o);return a>3&&o&&Object.defineProperty(t,n,o),o};const Jg="scroll-lock";let Qg=class extends Mg{constructor(){super(),this.unsubscribe=[],this.abortController=void 0,this.open=Wo.state.open,this.caipAddress=fo.state.caipAddress,this.isSiweEnabled=Eo.state.isSiweEnabled,this.initializeTheming(),Bo.prefetch(),this.unsubscribe.push(Wo.subscribeKey("open",(e=>e?this.onOpen():this.onClose())),fo.subscribe((e=>this.onNewAccountState(e)))),No.sendEvent({type:"track",event:"MODAL_LOADED"})}disconnectedCallback(){this.unsubscribe.forEach((e=>e())),this.onRemoveKeyboardListener()}render(){return this.open?yg`
          <wui-flex @click=${this.onOverlayClick.bind(this)}>
            <wui-card role="alertdialog" aria-modal="true" tabindex="0">
              <w3m-header></w3m-header>
              <w3m-router></w3m-router>
              <w3m-snackbar></w3m-snackbar>
            </wui-card>
          </wui-flex>
        `:null}async onOverlayClick(e){e.target===e.currentTarget&&await this.handleClose()}async handleClose(){if(this.isSiweEnabled){const{SIWEController:e}=await r((()=>import("./index-Bl-upnK5.js")),__vite__mapDeps([]),import.meta.url);"success"!==e.state.status&&await ns.disconnect()}Wo.close()}initializeTheming(){const{themeVariables:e,themeMode:t}=To.state;gl(e,Ou.getColorTheme(t))}async onClose(){this.onScrollUnlock(),await this.animate([{opacity:1},{opacity:0}],{duration:200,easing:"ease",fill:"forwards"}).finished,Qo.hide(),this.open=!1,this.onRemoveKeyboardListener()}async onOpen(){this.onScrollLock(),this.open=!0,await this.animate([{opacity:0},{opacity:1}],{duration:200,easing:"ease",fill:"forwards",delay:300}).finished,this.onAddKeyboardListener()}onScrollLock(){const e=document.createElement("style");e.dataset.w3m=Jg,e.textContent="\n      html, body {\n        touch-action: none;\n        overflow: hidden;\n        overscroll-behavior: contain;\n      }\n      w3m-modal {\n        pointer-events: auto;\n      }\n    ",document.head.appendChild(e)}onScrollUnlock(){const e=document.head.querySelector(`style[data-w3m="${Jg}"]`);e&&e.remove()}onAddKeyboardListener(){var e;this.abortController=new AbortController;const t=null==(e=this.shadowRoot)?void 0:e.querySelector("wui-card");null==t||t.focus(),window.addEventListener("keydown",(e=>{if("Escape"===e.key)this.handleClose();else if("Tab"===e.key){const{tagName:n}=e.target;!n||n.includes("W3M-")||n.includes("WUI-")||null==t||t.focus()}}),this.abortController)}onRemoveKeyboardListener(){var e;null==(e=this.abortController)||e.abort(),this.abortController=void 0}async onNewAccountState(e){const{isConnected:t,caipAddress:n}=e;if(this.isSiweEnabled){const{SIWEController:e}=await r((()=>import("./index-Bl-upnK5.js")),__vite__mapDeps([]),import.meta.url);t&&!this.caipAddress&&(this.caipAddress=n),t&&n&&this.caipAddress!==n&&(await e.signOut(),this.onSiweNavigation(),this.caipAddress=n);try{const n=await e.getSession();n&&!t?await e.signOut():t&&!n&&this.onSiweNavigation()}catch(i){t&&this.onSiweNavigation()}}}onSiweNavigation(){this.open?zo.push("ConnectingSiwe"):Wo.open({view:"ConnectingSiwe"})}};Qg.styles=Kg,Yg([Lg()],Qg.prototype,"open",void 0),Yg([Lg()],Qg.prototype,"caipAddress",void 0),Yg([Lg()],Qg.prototype,"isSiweEnabled",void 0),Qg=Yg([_l("w3m-modal")],Qg);const Xg=Object.freeze(Object.defineProperty({__proto__:null,get W3mModal(){return Qg}},Symbol.toStringTag,{value:"Module"})),ew=jm`
  :host {
    display: block;
    width: max-content;
  }
`;var tw=function(e,t,n,i){var r,a=arguments.length,o=a<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,n,i);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(o=(a<3?r(o):a>3?r(t,n,o):r(t,n))||o);return a>3&&o&&Object.defineProperty(t,n,o),o};let nw=class extends Mg{constructor(){super(),this.unsubscribe=[],this.disabled=!1,this.network=jo.state.caipNetwork,this.connected=fo.state.isConnected,this.loading=Wo.state.loading,this.isUnsupportedChain=jo.state.isUnsupportedChain,this.unsubscribe.push(jo.subscribeKey("caipNetwork",(e=>this.network=e)),fo.subscribeKey("isConnected",(e=>this.connected=e)),Wo.subscribeKey("loading",(e=>this.loading=e)),jo.subscribeKey("isUnsupportedChain",(e=>this.isUnsupportedChain=e)))}disconnectedCallback(){this.unsubscribe.forEach((e=>e()))}render(){var e;return yg`
      <wui-network-button
        .disabled=${Boolean(this.disabled||this.loading)}
        .isUnsupportedChain=${this.isUnsupportedChain}
        imageSrc=${zg(is.getNetworkImage(this.network))}
        @click=${this.onClick.bind(this)}
      >
        ${this.isUnsupportedChain?"Switch Network":(null==(e=this.network)?void 0:e.name)??(this.connected?"Unknown Network":"Select Network")}
      </wui-network-button>
    `}onClick(){this.loading||(No.sendEvent({type:"track",event:"CLICK_NETWORKS"}),Wo.open({view:"Networks"}))}};nw.styles=ew,tw([Bg({type:Boolean})],nw.prototype,"disabled",void 0),tw([Lg()],nw.prototype,"network",void 0),tw([Lg()],nw.prototype,"connected",void 0),tw([Lg()],nw.prototype,"loading",void 0),tw([Lg()],nw.prototype,"isUnsupportedChain",void 0),nw=tw([_l("w3m-network-button")],nw);const iw=jm`
  :host {
    display: block;
    will-change: transform, opacity;
  }
`;var rw=function(e,t,n,i){var r,a=arguments.length,o=a<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,n,i);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(o=(a<3?r(o):a>3?r(t,n,o):r(t,n))||o);return a>3&&o&&Object.defineProperty(t,n,o),o};let aw=class extends Mg{constructor(){super(),this.resizeObserver=void 0,this.prevHeight="0px",this.prevHistoryLength=1,this.unsubscribe=[],this.view=zo.state.view,this.unsubscribe.push(zo.subscribeKey("view",(e=>this.onViewChange(e))))}firstUpdated(){this.resizeObserver=new ResizeObserver((async([e])=>{const t=`${null==e?void 0:e.contentRect.height}px`;"0px"!==this.prevHeight&&(await this.animate([{height:this.prevHeight},{height:t}],{duration:150,easing:"ease",fill:"forwards"}).finished,this.style.height="auto"),this.prevHeight=t})),this.resizeObserver.observe(this.getWrapper())}disconnectedCallback(){var e;null==(e=this.resizeObserver)||e.unobserve(this.getWrapper()),this.unsubscribe.forEach((e=>e()))}render(){return yg`<div>${this.viewTemplate()}</div>`}viewTemplate(){switch(this.view){case"Connect":default:return yg`<w3m-connect-view></w3m-connect-view>`;case"ConnectingWalletConnect":return yg`<w3m-connecting-wc-view></w3m-connecting-wc-view>`;case"ConnectingExternal":return yg`<w3m-connecting-external-view></w3m-connecting-external-view>`;case"ConnectingSiwe":return yg`<w3m-connecting-siwe-view></w3m-connecting-siwe-view>`;case"AllWallets":return yg`<w3m-all-wallets-view></w3m-all-wallets-view>`;case"Networks":return yg`<w3m-networks-view></w3m-networks-view>`;case"SwitchNetwork":return yg`<w3m-network-switch-view></w3m-network-switch-view>`;case"Account":return yg`<w3m-account-view></w3m-account-view>`;case"AccountSettings":return yg`<w3m-account-settings-view></w3m-account-settings-view>`;case"WhatIsAWallet":return yg`<w3m-what-is-a-wallet-view></w3m-what-is-a-wallet-view>`;case"WhatIsANetwork":return yg`<w3m-what-is-a-network-view></w3m-what-is-a-network-view>`;case"GetWallet":return yg`<w3m-get-wallet-view></w3m-get-wallet-view>`;case"Downloads":return yg`<w3m-downloads-view></w3m-downloads-view>`;case"EmailVerifyOtp":return yg`<w3m-email-verify-otp-view></w3m-email-verify-otp-view>`;case"EmailVerifyDevice":return yg`<w3m-email-verify-device-view></w3m-email-verify-device-view>`;case"ApproveTransaction":return yg`<w3m-approve-transaction-view></w3m-approve-transaction-view>`;case"Transactions":return yg`<w3m-transactions-view></w3m-transactions-view>`;case"UpgradeEmailWallet":return yg`<w3m-upgrade-wallet-view></w3m-upgrade-wallet-view>`;case"UpgradeToSmartAccount":return yg`<w3m-upgrade-to-smart-account-view></w3m-upgrade-to-smart-account-view>`;case"UpdateEmailWallet":return yg`<w3m-update-email-wallet-view></w3m-update-email-wallet-view>`;case"UpdateEmailPrimaryOtp":return yg`<w3m-update-email-primary-otp-view></w3m-update-email-primary-otp-view>`;case"UpdateEmailSecondaryOtp":return yg`<w3m-update-email-secondary-otp-view></w3m-update-email-secondary-otp-view>`;case"UnsupportedChain":return yg`<w3m-unsupported-chain-view></w3m-unsupported-chain-view>`;case"OnRampProviders":return yg`<w3m-onramp-providers-view></w3m-onramp-providers-view>`;case"OnRampActivity":return yg`<w3m-onramp-activity-view></w3m-onramp-activity-view>`;case"OnRampTokenSelect":return yg`<w3m-onramp-token-select-view></w3m-onramp-token-select-view>`;case"OnRampFiatSelect":return yg`<w3m-onramp-fiat-select-view></w3m-onramp-fiat-select-view>`;case"WhatIsABuy":return yg`<w3m-what-is-a-buy-view></w3m-what-is-a-buy-view>`;case"BuyInProgress":return yg`<w3m-buy-in-progress-view></w3m-buy-in-progress-view>`;case"WalletReceive":return yg`<w3m-wallet-receive-view></w3m-wallet-receive-view>`;case"WalletCompatibleNetworks":return yg`<w3m-wallet-compatible-networks-view></w3m-wallet-compatible-networks-view>`}}async onViewChange(e){const{history:t}=zo.state;let n=-10,i=10;t.length<this.prevHistoryLength&&(n=10,i=-10),this.prevHistoryLength=t.length,await this.animate([{opacity:1,transform:"translateX(0px)"},{opacity:0,transform:`translateX(${n}px)`}],{duration:150,easing:"ease",fill:"forwards"}).finished,this.view=e,await this.animate([{opacity:0,transform:`translateX(${i}px)`},{opacity:1,transform:"translateX(0px)"}],{duration:150,easing:"ease",fill:"forwards",delay:50}).finished}getWrapper(){var e;return null==(e=this.shadowRoot)?void 0:e.querySelector("div")}};aw.styles=iw,rw([Lg()],aw.prototype,"view",void 0),aw=rw([_l("w3m-router")],aw);const ow=jm`
  :host > wui-flex {
    width: 100%;
    max-width: 360px;
  }

  :host > wui-flex > wui-flex {
    border-radius: var(--wui-border-radius-l);
    width: 100%;
  }

  .amounts-container {
    width: 100%;
  }
`;var sw=function(e,t,n,i){var r,a=arguments.length,o=a<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,n,i);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(o=(a<3?r(o):a>3?r(t,n,o):r(t,n))||o);return a>3&&o&&Object.defineProperty(t,n,o),o};const lw={USD:"$",EUR:"€",GBP:"£"},cw=[100,250,500,1e3];let uw=class extends Mg{constructor(){super(),this.unsubscribe=[],this.disabled=!1,this.connected=fo.state.isConnected,this.loading=Wo.state.loading,this.paymentCurrency=Yo.state.paymentCurrency,this.paymentAmount=Yo.state.paymentAmount,this.purchaseAmount=Yo.state.purchaseAmount,this.quoteLoading=Yo.state.quotesLoading,this.unsubscribe.push(fo.subscribeKey("isConnected",(e=>{this.connected=e})),Wo.subscribeKey("loading",(e=>{this.loading=e})),Yo.subscribe((e=>{this.paymentCurrency=e.paymentCurrency,this.paymentAmount=e.paymentAmount,this.purchaseAmount=e.purchaseAmount,this.quoteLoading=e.quotesLoading})))}disconnectedCallback(){this.unsubscribe.forEach((e=>e()))}render(){return yg`
      <wui-flex flexDirection="column" justifyContent="center" alignItems="center">
        <wui-flex flexDirection="column" alignItems="center" gap="xs">
          <w3m-swap-input
            type="Fiat"
            @inputChange=${this.onPaymentAmountChange.bind(this)}
            .value=${this.paymentAmount||0}
          ></w3m-swap-input>
          <w3m-swap-input
            type="Token"
            .value=${this.purchaseAmount||0}
            .loading=${this.quoteLoading}
          ></w3m-swap-input>
          <wui-flex justifyContent="space-evenly" class="amounts-container" gap="xs">
            ${cw.map((e=>{var t;return yg`<wui-button
                  variant=${this.paymentAmount===e?"accentBg":"shade"}
                  size="xs"
                  textVariant="paragraph-600"
                  fullWidth
                  @click=${()=>this.selectPresetAmount(e)}
                  >${`${lw[(null==(t=this.paymentCurrency)?void 0:t.id)||"USD"]} ${e}`}</wui-button
                >`}))}
          </wui-flex>
          ${this.templateButton()}
        </wui-flex>
      </wui-flex>
    `}templateButton(){return this.connected?yg`<wui-button
          @click=${this.getQuotes.bind(this)}
          variant="fill"
          fullWidth
          size="lg"
          borderRadius="xs"
        >
          Get quotes
        </wui-button>`:yg`<wui-button
          @click=${this.openModal.bind(this)}
          variant="accentBg"
          fullWidth
          size="lg"
          borderRadius="xs"
        >
          Connect wallet
        </wui-button>`}getQuotes(){this.loading||Wo.open({view:"OnRampProviders"})}openModal(){Wo.open({view:"Connect"})}async onPaymentAmountChange(e){Yo.setPaymentAmount(Number(e.detail)),await Yo.getQuote()}async selectPresetAmount(e){Yo.setPaymentAmount(e),await Yo.getQuote()}};uw.styles=ow,sw([Bg({type:Boolean})],uw.prototype,"disabled",void 0),sw([Lg()],uw.prototype,"connected",void 0),sw([Lg()],uw.prototype,"loading",void 0),sw([Lg()],uw.prototype,"paymentCurrency",void 0),sw([Lg()],uw.prototype,"paymentAmount",void 0),sw([Lg()],uw.prototype,"purchaseAmount",void 0),sw([Lg()],uw.prototype,"quoteLoading",void 0),uw=sw([_l("w3m-onramp-widget")],uw);const dw=jm`
  wui-flex {
    width: 100%;
  }

  wui-icon-link {
    margin-right: calc(var(--wui-icon-box-size-md) * -1);
  }

  .account-links {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .account-links wui-flex {
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1;
    background: red;
    align-items: center;
    justify-content: center;
    height: 48px;
    padding: 10px;
    flex: 1 0 0;

    border-radius: var(--XS, 16px);
    border: 1px solid var(--dark-accent-glass-010, rgba(71, 161, 255, 0.1));
    background: var(--dark-accent-glass-010, rgba(71, 161, 255, 0.1));
    transition: background 0.2s linear;
  }

  .account-links wui-flex:hover {
    background: var(--dark-accent-glass-015, rgba(71, 161, 255, 0.15));
  }

  .account-links wui-flex wui-icon {
    width: var(--S, 20px);
    height: var(--S, 20px);
  }

  .account-links wui-flex wui-icon svg path {
    stroke: #47a1ff;
  }
`;var pw=function(e,t,n,i){var r,a=arguments.length,o=a<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,n,i);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(o=(a<3?r(o):a>3?r(t,n,o):r(t,n))||o);return a>3&&o&&Object.defineProperty(t,n,o),o};let hw=class extends Mg{constructor(){super(),this.usubscribe=[],this.networkImages=Co.state.networkImages,this.address=fo.state.address,this.profileImage=fo.state.profileImage,this.profileName=fo.state.profileName,this.network=jo.state.caipNetwork,this.disconnecting=!1,this.usubscribe.push(fo.subscribe((e=>{e.address?(this.address=e.address,this.profileImage=e.profileImage,this.profileName=e.profileName):Wo.close()})),jo.subscribeKey("caipNetwork",(e=>{(null==e?void 0:e.id)&&(this.network=e)})))}disconnectedCallback(){this.usubscribe.forEach((e=>e()))}render(){var e,t;if(!this.address)throw new Error("w3m-account-settings-view: No account provided");const n=this.networkImages[(null==(e=this.network)?void 0:e.imageId)??""];return yg`
      <wui-flex
        flexDirection="column"
        .padding=${["0","xl","m","xl"]}
        alignItems="center"
        gap="l"
      >
        <wui-avatar
          alt=${this.address}
          address=${this.address}
          imageSrc=${zg(this.profileImage)}
        ></wui-avatar>
        <wui-flex flexDirection="column" alignItems="center">
          <wui-flex gap="3xs" alignItems="center" justifyContent="center">
            <wui-text variant="large-600" color="fg-100">
              ${this.profileName?Ou.getTruncateString({string:this.profileName,charsStart:20,charsEnd:0,truncate:"end"}):Ou.getTruncateString({string:this.address,charsStart:4,charsEnd:6,truncate:"middle"})}
            </wui-text>
            <wui-icon-link
              size="md"
              icon="copy"
              iconColor="fg-200"
              @click=${this.onCopyAddress}
            ></wui-icon-link>
          </wui-flex>
        </wui-flex>
      </wui-flex>

      <wui-flex flexDirection="column" gap="m">
        <wui-flex flexDirection="column" gap="xs" .padding=${["0","xl","m","xl"]}>
          ${this.emailBtnTemplate()}
          <wui-list-item
            .variant=${n?"image":"icon"}
            iconVariant="overlay"
            icon="networkPlaceholder"
            imageSrc=${zg(n)}
            ?chevron=${this.isAllowedNetworkSwitch()}
            @click=${this.onNetworks.bind(this)}
          >
            <wui-text variant="paragraph-500" color="fg-100">
              ${(null==(t=this.network)?void 0:t.name)??"Unknown"}
            </wui-text>
          </wui-list-item>
          <wui-list-item
            variant="icon"
            iconVariant="overlay"
            icon="disconnect"
            ?chevron=${!1}
            .loading=${this.disconnecting}
            @click=${this.onDisconnect.bind(this)}
            data-testid="disconnect-button"
          >
            <wui-text variant="paragraph-500" color="fg-200">Disconnect</wui-text>
          </wui-list-item>
        </wui-flex>
      </wui-flex>
    `}isAllowedNetworkSwitch(){const{requestedCaipNetworks:e}=jo.state,t=!!e&&e.length>1,n=null==e?void 0:e.find((({id:e})=>{var t;return e===(null==(t=this.network)?void 0:t.id)}));return t||!n}onCopyAddress(){try{this.address&&(po.copyToClopboard(this.address),Qo.showSuccess("Address copied"))}catch{Qo.showError("Failed to copy")}}emailBtnTemplate(){const e=bo.getConnectedConnector(),t=$o.getEmailConnector();if(!t||"EMAIL"!==e)return null;const n=t.provider.getEmail()??"";return yg`
      <wui-list-item
        variant="icon"
        iconVariant="overlay"
        icon="mail"
        iconSize="sm"
        ?chevron=${!0}
        @click=${()=>this.onGoToUpdateEmail(n)}
      >
        <wui-text variant="paragraph-500" color="fg-100">${n}</wui-text>
      </wui-list-item>
    `}onGoToUpdateEmail(e){zo.push("UpdateEmailWallet",{email:e})}onNetworks(){this.isAllowedNetworkSwitch()&&zo.push("Networks")}async onDisconnect(){try{this.disconnecting=!0,await ns.disconnect(),No.sendEvent({type:"track",event:"DISCONNECT_SUCCESS"}),Wo.close()}catch{No.sendEvent({type:"track",event:"DISCONNECT_ERROR"}),Qo.showError("Failed to disconnect")}finally{this.disconnecting=!1}}};hw.styles=dw,pw([Lg()],hw.prototype,"address",void 0),pw([Lg()],hw.prototype,"profileImage",void 0),pw([Lg()],hw.prototype,"profileName",void 0),pw([Lg()],hw.prototype,"network",void 0),pw([Lg()],hw.prototype,"disconnecting",void 0),hw=pw([_l("w3m-account-settings-view")],hw);let fw=class extends Mg{render(){const e=bo.getConnectedConnector();return yg`
      ${Eo.state.enableWalletFeatures&&"EMAIL"===e?this.walletFeaturesTemplate():this.defaultTemplate()}
    `}walletFeaturesTemplate(){return yg`<w3m-account-wallet-features-widget></w3m-account-wallet-features-widget>`}defaultTemplate(){return yg`<w3m-account-default-widget></w3m-account-default-widget>`}};fw=function(e,t,n,i){var r,a=arguments.length,o=a<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,n,i);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(o=(a<3?r(o):a>3?r(t,n,o):r(t,n))||o);return a>3&&o&&Object.defineProperty(t,n,o),o}([_l("w3m-account-view")],fw);var mw=function(e,t,n,i){var r,a=arguments.length,o=a<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,n,i);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(o=(a<3?r(o):a>3?r(t,n,o):r(t,n))||o);return a>3&&o&&Object.defineProperty(t,n,o),o};let gw=class extends Mg{constructor(){super(...arguments),this.search="",this.onDebouncedSearch=po.debounce((e=>{this.search=e}))}render(){const e=this.search.length>=2;return yg`
      <wui-flex padding="s" gap="s">
        <wui-search-bar @inputChange=${this.onInputChange.bind(this)}></wui-search-bar>
        ${this.qrButtonTemplate()}
      </wui-flex>
      ${e?yg`<w3m-all-wallets-search query=${this.search}></w3m-all-wallets-search>`:yg`<w3m-all-wallets-list></w3m-all-wallets-list>`}
    `}onInputChange(e){this.onDebouncedSearch(e.detail)}qrButtonTemplate(){return po.isMobile()?yg`
        <wui-icon-box
          size="lg"
          iconSize="xl"
          iconColor="accent-100"
          backgroundColor="accent-100"
          icon="qrCode"
          background="transparent"
          border
          borderColor="wui-accent-glass-010"
          @click=${this.onWalletConnectQr.bind(this)}
        ></wui-icon-box>
      `:null}onWalletConnectQr(){zo.push("ConnectingWalletConnect")}};mw([Lg()],gw.prototype,"search",void 0),gw=mw([_l("w3m-all-wallets-view")],gw);const ww=jm`
  @keyframes shake {
    0% {
      transform: translateX(0);
    }
    25% {
      transform: translateX(3px);
    }
    50% {
      transform: translateX(-3px);
    }
    75% {
      transform: translateX(3px);
    }
    100% {
      transform: translateX(0);
    }
  }

  wui-flex:first-child:not(:only-child) {
    position: relative;
  }

  wui-loading-thumbnail {
    position: absolute;
  }

  wui-visual {
    width: var(--wui-wallet-image-size-lg);
    height: var(--wui-wallet-image-size-lg);
    border-radius: calc(var(--wui-border-radius-5xs) * 9 - var(--wui-border-radius-xxs));
    position: relative;
    overflow: hidden;
  }

  wui-visual::after {
    content: '';
    display: block;
    width: 100%;
    height: 100%;
    position: absolute;
    inset: 0;
    border-radius: calc(var(--wui-border-radius-5xs) * 9 - var(--wui-border-radius-xxs));
    box-shadow: inset 0 0 0 1px var(--wui-gray-glass-005);
  }

  wui-icon-box {
    position: absolute;
    right: calc(var(--wui-spacing-3xs) * -1);
    bottom: calc(var(--wui-spacing-3xs) * -1);
    opacity: 0;
    transform: scale(0.5);
    transition: all var(--wui-ease-out-power-2) var(--wui-duration-lg);
  }

  wui-text[align='center'] {
    width: 100%;
    padding: 0px var(--wui-spacing-l);
  }

  [data-error='true'] wui-icon-box {
    opacity: 1;
    transform: scale(1);
  }

  [data-error='true'] > wui-flex:first-child {
    animation: shake 250ms cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
  }

  [data-retry='false'] wui-link {
    display: none;
  }

  [data-retry='true'] wui-link {
    display: block;
    opacity: 1;
  }

  wui-link {
    padding: var(--wui-spacing-4xs) var(--wui-spacing-xxs);
  }
`;var yw=function(e,t,n,i){var r,a=arguments.length,o=a<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,n,i);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(o=(a<3?r(o):a>3?r(t,n,o):r(t,n))||o);return a>3&&o&&Object.defineProperty(t,n,o),o};let vw=class extends Mg{constructor(){super(),this.unsubscribe=[],this.selectedOnRampProvider=Yo.state.selectedProvider,this.uri=ns.state.wcUri,this.ready=!1,this.showRetry=!1,this.buffering=!1,this.error=!1,this.startTime=null,this.isMobile=!1,this.onRetry=void 0,this.unsubscribe.push(Yo.subscribeKey("selectedProvider",(e=>{this.selectedOnRampProvider=e}))),this.watchTransactions()}disconnectedCallback(){this.intervalId&&clearInterval(this.intervalId)}render(){var e,t;let n="Continue in external window";this.error?n="Buy failed":this.selectedOnRampProvider&&(n=`Buy in ${null==(e=this.selectedOnRampProvider)?void 0:e.label}`);const i=this.error?"Buy can be declined from your side or due to and error on the provider app":"We’ll notify you once your Buy is processed";return yg`
      <wui-flex
        data-error=${zg(this.error)}
        data-retry=${this.showRetry}
        flexDirection="column"
        alignItems="center"
        .padding=${["3xl","xl","xl","xl"]}
        gap="xl"
      >
        <wui-flex justifyContent="center" alignItems="center">
          <wui-visual
            name=${zg(null==(t=this.selectedOnRampProvider)?void 0:t.name)}
            size="lg"
            class="provider-image"
          >
          </wui-visual>

          ${this.error?null:this.loaderTemplate()}

          <wui-icon-box
            backgroundColor="error-100"
            background="opaque"
            iconColor="error-100"
            icon="close"
            size="sm"
            border
            borderColor="wui-color-bg-125"
          ></wui-icon-box>
        </wui-flex>

        <wui-flex flexDirection="column" alignItems="center" gap="xs">
          <wui-text variant="paragraph-500" color=${this.error?"error-100":"fg-100"}>
            ${n}
          </wui-text>
          <wui-text align="center" variant="small-500" color="fg-200">${i}</wui-text>
        </wui-flex>

        ${this.error?this.tryAgainTemplate():null}
      </wui-flex>

      <wui-flex .padding=${["0","xl","xl","xl"]} justifyContent="center">
        <wui-link @click=${this.onCopyUri} color="fg-200">
          <wui-icon size="xs" color="fg-200" slot="iconLeft" name="copy"></wui-icon>
          Copy link
        </wui-link>
      </wui-flex>
    `}watchTransactions(){if(this.selectedOnRampProvider&&"coinbase"===this.selectedOnRampProvider.name)this.startTime=Date.now(),this.initializeCoinbaseTransactions()}async initializeCoinbaseTransactions(){await this.watchCoinbaseTransactions(),this.intervalId=setInterval((()=>this.watchCoinbaseTransactions()),4e3)}async watchCoinbaseTransactions(){try{const e=fo.state.address,t=Eo.state.projectId;if(!e)throw new Error("No address found");const n=await Vo.fetchTransactions({account:e,onramp:"coinbase",projectId:t});n.data.filter((e=>new Date(e.metadata.minedAt)>new Date(this.startTime)||"ONRAMP_TRANSACTION_STATUS_IN_PROGRESS"===e.metadata.status)).length?(clearInterval(this.intervalId),zo.replace("OnRampActivity")):this.startTime&&Date.now()-this.startTime>=18e4&&(clearInterval(this.intervalId),this.error=!0)}catch(e){Qo.showError(e)}}onTryAgain(){this.selectedOnRampProvider&&(this.error=!1,po.openHref(this.selectedOnRampProvider.url,"popupWindow","width=600,height=800,scrollbars=yes"))}tryAgainTemplate(){var e;return(null==(e=this.selectedOnRampProvider)?void 0:e.url)?yg`<wui-button variant="accent" @click=${this.onTryAgain.bind(this)}>
      <wui-icon color="inherit" slot="iconLeft" name="refresh"></wui-icon>
      Try again
    </wui-button>`:null}loaderTemplate(){const e=To.state.themeVariables["--w3m-border-radius-master"],t=e?parseInt(e.replace("px",""),10):4;return yg`<wui-loading-thumbnail radius=${9*t}></wui-loading-thumbnail>`}onCopyUri(){var e;if(!(null==(e=this.selectedOnRampProvider)?void 0:e.url))return Qo.showError("No link found"),void zo.goBack();try{po.copyToClopboard(this.selectedOnRampProvider.url),Qo.showSuccess("Link copied")}catch{Qo.showError("Failed to copy")}}};vw.styles=ww,yw([Lg()],vw.prototype,"selectedOnRampProvider",void 0),yw([Lg()],vw.prototype,"uri",void 0),yw([Lg()],vw.prototype,"ready",void 0),yw([Lg()],vw.prototype,"showRetry",void 0),yw([Lg()],vw.prototype,"buffering",void 0),yw([Lg()],vw.prototype,"error",void 0),yw([Lg()],vw.prototype,"intervalId",void 0),yw([Lg()],vw.prototype,"startTime",void 0),yw([Bg({type:Boolean})],vw.prototype,"isMobile",void 0),yw([Bg()],vw.prototype,"onRetry",void 0),vw=yw([_l("w3m-buy-in-progress-view")],vw);const bw=jm`
  wui-flex {
    max-height: clamp(360px, 540px, 80vh);
    overflow: scroll;
    scrollbar-width: none;
  }

  wui-flex::-webkit-scrollbar {
    display: none;
  }
`;var xw=function(e,t,n,i){var r,a=arguments.length,o=a<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,n,i);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(o=(a<3?r(o):a>3?r(t,n,o):r(t,n))||o);return a>3&&o&&Object.defineProperty(t,n,o),o};let Cw=class extends Mg{constructor(){super(),this.unsubscribe=[],this.connectors=$o.state.connectors,this.unsubscribe.push($o.subscribeKey("connectors",(e=>this.connectors=e)))}disconnectedCallback(){this.unsubscribe.forEach((e=>e()))}render(){return yg`
      <wui-flex flexDirection="column" padding="s" gap="xs">
        <w3m-email-login-widget></w3m-email-login-widget>

        ${this.walletConnectConnectorTemplate()} ${this.recentTemplate()}
        ${this.announcedTemplate()} ${this.injectedTemplate()} ${this.featuredTemplate()}
        ${this.customTemplate()} ${this.recommendedTemplate()} ${this.externalTemplate()}
        ${this.allWalletsTemplate()}
      </wui-flex>
      <w3m-legal-footer></w3m-legal-footer>
    `}walletConnectConnectorTemplate(){if(po.isMobile())return null;const e=this.connectors.find((e=>"WALLET_CONNECT"===e.type));return e?yg`
      <wui-list-wallet
        imageSrc=${zg(is.getConnectorImage(e))}
        name=${e.name??"Unknown"}
        @click=${()=>this.onConnector(e)}
        tagLabel="qr code"
        tagVariant="main"
        data-testid="wallet-selector-walletconnect"
      >
      </wui-list-wallet>
    `:null}customTemplate(){const{customWallets:e}=Eo.state;if(!(null==e?void 0:e.length))return null;return this.filterOutDuplicateWallets(e).map((e=>yg`
        <wui-list-wallet
          imageSrc=${zg(is.getWalletImage(e))}
          name=${e.name??"Unknown"}
          @click=${()=>this.onConnectWallet(e)}
          data-testid=${`wallet-selector-${e.id}`}
        >
        </wui-list-wallet>
      `))}featuredTemplate(){if(!this.connectors.find((e=>"WALLET_CONNECT"===e.type)))return null;const{featured:e}=Bo.state;if(!e.length)return null;return this.filterOutDuplicateWallets(e).map((e=>yg`
        <wui-list-wallet
          imageSrc=${zg(is.getWalletImage(e))}
          name=${e.name??"Unknown"}
          @click=${()=>this.onConnectWallet(e)}
        >
        </wui-list-wallet>
      `))}recentTemplate(){return bo.getRecentWallets().map((e=>yg`
        <wui-list-wallet
          imageSrc=${zg(is.getWalletImage(e))}
          name=${e.name??"Unknown"}
          @click=${()=>this.onConnectWallet(e)}
          tagLabel="recent"
          tagVariant="shade"
        >
        </wui-list-wallet>
      `))}announcedTemplate(){return this.connectors.map((e=>"ANNOUNCED"!==e.type?null:yg`
        <wui-list-wallet
          imageSrc=${zg(is.getConnectorImage(e))}
          name=${e.name??"Unknown"}
          @click=${()=>this.onConnector(e)}
          tagVariant="success"
          .installed=${!0}
        >
        </wui-list-wallet>
      `))}injectedTemplate(){return this.connectors.map((e=>"INJECTED"!==e.type?null:ns.checkInstalled()?yg`
        <wui-list-wallet
          imageSrc=${zg(is.getConnectorImage(e))}
          .installed=${!0}
          name=${e.name??"Unknown"}
          @click=${()=>this.onConnector(e)}
        >
        </wui-list-wallet>
      `:null))}externalTemplate(){const e=$o.getAnnouncedConnectorRdns();return this.connectors.map((t=>["WALLET_CONNECT","INJECTED","ANNOUNCED","EMAIL"].includes(t.type)||e.includes(uo.CONNECTOR_RDNS_MAP[t.id])?null:yg`
        <wui-list-wallet
          imageSrc=${zg(is.getConnectorImage(t))}
          name=${t.name??"Unknown"}
          @click=${()=>this.onConnector(t)}
        >
        </wui-list-wallet>
      `))}allWalletsTemplate(){const e=this.connectors.find((e=>"WALLET_CONNECT"===e.type)),{allWallets:t}=Eo.state;if(!e||"HIDE"===t)return null;if("ONLY_MOBILE"===t&&!po.isMobile())return null;const n=Bo.state.count+Bo.state.featured.length,i=n<10?n:10*Math.floor(n/10),r=i<n?`${i}+`:`${i}`;return yg`
      <wui-list-wallet
        name="All Wallets"
        walletIcon="allWallets"
        showAllWallets
        @click=${this.onAllWallets.bind(this)}
        tagLabel=${r}
        tagVariant="shade"
        data-testid="all-wallets"
      ></wui-list-wallet>
    `}recommendedTemplate(){if(!this.connectors.find((e=>"WALLET_CONNECT"===e.type)))return null;const{recommended:e}=Bo.state,{customWallets:t,featuredWalletIds:n}=Eo.state,{connectors:i}=$o.state,r=bo.getRecentWallets(),a=i.filter((e=>"INJECTED"===e.type)).filter((e=>"Browser Wallet"!==e.name));if(n||t||!e.length)return null;const o=a.length+r.length,s=Math.max(0,2-o);return this.filterOutDuplicateWallets(e).slice(0,s).map((e=>yg`
        <wui-list-wallet
          imageSrc=${zg(is.getWalletImage(e))}
          name=${(null==e?void 0:e.name)??"Unknown"}
          @click=${()=>this.onConnectWallet(e)}
        >
        </wui-list-wallet>
      `))}onConnector(e){"WALLET_CONNECT"===e.type?po.isMobile()?zo.push("AllWallets"):zo.push("ConnectingWalletConnect"):zo.push("ConnectingExternal",{connector:e})}filterOutDuplicateWallets(e){const t=bo.getRecentWallets().map((e=>e.id));return e.filter((e=>!t.includes(e.id)))}onAllWallets(){No.sendEvent({type:"track",event:"CLICK_ALL_WALLETS"}),zo.push("AllWallets")}onConnectWallet(e){zo.push("ConnectingWalletConnect",{wallet:e})}};Cw.styles=bw,xw([Lg()],Cw.prototype,"connectors",void 0),Cw=xw([_l("w3m-connect-view")],Cw);const _w=jm`
  @keyframes shake {
    0% {
      transform: translateX(0);
    }
    25% {
      transform: translateX(3px);
    }
    50% {
      transform: translateX(-3px);
    }
    75% {
      transform: translateX(3px);
    }
    100% {
      transform: translateX(0);
    }
  }

  wui-flex:first-child:not(:only-child) {
    position: relative;
  }

  wui-loading-thumbnail {
    position: absolute;
  }

  wui-icon-box {
    position: absolute;
    right: calc(var(--wui-spacing-3xs) * -1);
    bottom: calc(var(--wui-spacing-3xs) * -1);
    opacity: 0;
    transform: scale(0.5);
    transition: all var(--wui-ease-out-power-2) var(--wui-duration-lg);
  }

  wui-text[align='center'] {
    width: 100%;
    padding: 0px var(--wui-spacing-l);
  }

  [data-error='true'] wui-icon-box {
    opacity: 1;
    transform: scale(1);
  }

  [data-error='true'] > wui-flex:first-child {
    animation: shake 250ms cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
  }

  [data-retry='false'] wui-link {
    display: none;
  }

  [data-retry='true'] wui-link {
    display: block;
    opacity: 1;
  }
`;var Ew=function(e,t,n,i){var r,a=arguments.length,o=a<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,n,i);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(o=(a<3?r(o):a>3?r(t,n,o):r(t,n))||o);return a>3&&o&&Object.defineProperty(t,n,o),o};class kw extends Mg{constructor(){var e,t,n,i;super(),this.wallet=null==(e=zo.state.data)?void 0:e.wallet,this.connector=null==(t=zo.state.data)?void 0:t.connector,this.timeout=void 0,this.secondaryBtnLabel="Try again",this.secondaryBtnIcon="refresh",this.secondaryLabel="Accept connection request in the wallet",this.onConnect=void 0,this.onRender=void 0,this.onAutoConnect=void 0,this.isWalletConnect=!0,this.unsubscribe=[],this.imageSrc=is.getWalletImage(this.wallet)??is.getConnectorImage(this.connector),this.name=(null==(n=this.wallet)?void 0:n.name)??(null==(i=this.connector)?void 0:i.name)??"Wallet",this.isRetrying=!1,this.uri=ns.state.wcUri,this.error=ns.state.wcError,this.ready=!1,this.showRetry=!1,this.buffering=!1,this.isMobile=!1,this.onRetry=void 0,this.unsubscribe.push(ns.subscribeKey("wcUri",(e=>{var t;this.uri=e,this.isRetrying&&this.onRetry&&(this.isRetrying=!1,null==(t=this.onConnect)||t.call(this))})),ns.subscribeKey("wcError",(e=>this.error=e)),ns.subscribeKey("buffering",(e=>this.buffering=e)))}firstUpdated(){var e;null==(e=this.onAutoConnect)||e.call(this),this.showRetry=!this.onAutoConnect}disconnectedCallback(){this.unsubscribe.forEach((e=>e())),clearTimeout(this.timeout)}render(){var e;null==(e=this.onRender)||e.call(this),this.onShowRetry();const t=this.error?"Connection can be declined if a previous request is still active":this.secondaryLabel;let n=`Continue in ${this.name}`;return this.buffering&&(n="Connecting..."),this.error&&(n="Connection declined"),yg`
      <wui-flex
        data-error=${zg(this.error)}
        data-retry=${this.showRetry}
        flexDirection="column"
        alignItems="center"
        .padding=${["3xl","xl","xl","xl"]}
        gap="xl"
      >
        <wui-flex justifyContent="center" alignItems="center">
          <wui-wallet-image size="lg" imageSrc=${zg(this.imageSrc)}></wui-wallet-image>

          ${this.error?null:this.loaderTemplate()}

          <wui-icon-box
            backgroundColor="error-100"
            background="opaque"
            iconColor="error-100"
            icon="close"
            size="sm"
            border
            borderColor="wui-color-bg-125"
          ></wui-icon-box>
        </wui-flex>

        <wui-flex flexDirection="column" alignItems="center" gap="xs">
          <wui-text variant="paragraph-500" color=${this.error?"error-100":"fg-100"}>
            ${n}
          </wui-text>
          <wui-text align="center" variant="small-500" color="fg-200">${t}</wui-text>
        </wui-flex>

        <wui-button
          variant="accent"
          ?disabled=${!this.error&&this.buffering}
          @click=${this.onTryAgain.bind(this)}
        >
          <wui-icon color="inherit" slot="iconLeft" name=${this.secondaryBtnIcon}></wui-icon>
          ${this.secondaryBtnLabel}
        </wui-button>
      </wui-flex>

      ${this.isWalletConnect?yg`
            <wui-flex .padding=${["0","xl","xl","xl"]} justifyContent="center">
              <wui-link @click=${this.onCopyUri} color="fg-200">
                <wui-icon size="xs" color="fg-200" slot="iconLeft" name="copy"></wui-icon>
                Copy link
              </wui-link>
            </wui-flex>
          `:null}

      <w3m-mobile-download-links .wallet=${this.wallet}></w3m-mobile-download-links>
    `}onShowRetry(){var e;if(this.error&&!this.showRetry){this.showRetry=!0;const t=null==(e=this.shadowRoot)?void 0:e.querySelector("wui-button");null==t||t.animate([{opacity:0},{opacity:1}],{fill:"forwards",easing:"ease"})}}onTryAgain(){var e,t;this.buffering||(ns.setWcError(!1),this.onRetry?(this.isRetrying=!0,null==(e=this.onRetry)||e.call(this)):null==(t=this.onConnect)||t.call(this))}loaderTemplate(){const e=To.state.themeVariables["--w3m-border-radius-master"],t=e?parseInt(e.replace("px",""),10):4;return yg`<wui-loading-thumbnail radius=${9*t}></wui-loading-thumbnail>`}onCopyUri(){try{this.uri&&(po.copyToClopboard(this.uri),Qo.showSuccess("Link copied"))}catch{Qo.showError("Failed to copy")}}}kw.styles=_w,Ew([Lg()],kw.prototype,"uri",void 0),Ew([Lg()],kw.prototype,"error",void 0),Ew([Lg()],kw.prototype,"ready",void 0),Ew([Lg()],kw.prototype,"showRetry",void 0),Ew([Lg()],kw.prototype,"buffering",void 0),Ew([Bg({type:Boolean})],kw.prototype,"isMobile",void 0),Ew([Bg()],kw.prototype,"onRetry",void 0);let Tw=class extends kw{constructor(){if(super(),!this.connector)throw new Error("w3m-connecting-view: No connector provided");No.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.connector.name??"Unknown",platform:"browser"}}),this.onConnect=this.onConnectProxy.bind(this),this.onAutoConnect=this.onConnectProxy.bind(this),this.isWalletConnect=!1}async onConnectProxy(){try{this.error=!1,this.connector&&(this.connector.imageUrl&&bo.setConnectedWalletImageUrl(this.connector.imageUrl),await ns.connectExternal(this.connector),Eo.state.isSiweEnabled?zo.push("ConnectingSiwe"):Wo.close(),No.sendEvent({type:"track",event:"CONNECT_SUCCESS",properties:{method:"browser",name:this.connector.name||"Unknown"}}))}catch(e){No.sendEvent({type:"track",event:"CONNECT_ERROR",properties:{message:(null==e?void 0:e.message)??"Unknown"}}),this.error=!0}}};Tw=function(e,t,n,i){var r,a=arguments.length,o=a<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,n,i);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(o=(a<3?r(o):a>3?r(t,n,o):r(t,n))||o);return a>3&&o&&Object.defineProperty(t,n,o),o}([_l("w3m-connecting-external-view")],Tw);var Aw=function(e,t,n,i){var r,a=arguments.length,o=a<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,n,i);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(o=(a<3?r(o):a>3?r(t,n,o):r(t,n))||o);return a>3&&o&&Object.defineProperty(t,n,o),o};let $w=class extends Mg{constructor(){var e;super(),this.interval=void 0,this.lastRetry=Date.now(),this.wallet=null==(e=zo.state.data)?void 0:e.wallet,this.platform=void 0,this.platforms=[],this.initializeConnection(),this.interval=setInterval(this.initializeConnection.bind(this),uo.TEN_SEC_MS)}disconnectedCallback(){clearTimeout(this.interval)}render(){return this.wallet?(this.determinePlatforms(),yg`
      ${this.headerTemplate()}
      <div>${this.platformTemplate()}</div>
    `):yg`<w3m-connecting-wc-qrcode></w3m-connecting-wc-qrcode>`}async initializeConnection(e=!1){try{const{wcPairingExpiry:t}=ns.state;if(e||po.isPairingExpired(t)){if(ns.connectWalletConnect(),this.wallet){const e=is.getWalletImage(this.wallet);e&&bo.setConnectedWalletImageUrl(e)}else{const e=$o.state.connectors.find((e=>"WALLET_CONNECT"===e.type)),t=is.getConnectorImage(e);t&&bo.setConnectedWalletImageUrl(t)}await ns.state.wcPromise,this.finalizeConnection(),Eo.state.isSiweEnabled?zo.push("ConnectingSiwe"):Wo.close()}}catch(t){No.sendEvent({type:"track",event:"CONNECT_ERROR",properties:{message:(null==t?void 0:t.message)??"Unknown"}}),ns.setWcError(!0),po.isAllowedRetry(this.lastRetry)&&(Qo.showError("Declined"),this.lastRetry=Date.now(),this.initializeConnection(!0))}}finalizeConnection(){var e;const{wcLinking:t,recentWallet:n}=ns.state;t&&bo.setWalletConnectDeepLink(t),n&&bo.setWeb3ModalRecent(n),No.sendEvent({type:"track",event:"CONNECT_SUCCESS",properties:{method:t?"mobile":"qrcode",name:(null==(e=this.wallet)?void 0:e.name)||"Unknown"}})}determinePlatforms(){if(!this.wallet)throw new Error("w3m-connecting-wc-view:determinePlatforms No wallet");if(this.platform)return;const{mobile_link:e,desktop_link:t,webapp_link:n,injected:i,rdns:r}=this.wallet,a=null==i?void 0:i.map((({injected_id:e})=>e)).filter(Boolean),o=r?[r]:a??[],s=o.length,l=e,c=n,u=ns.checkInstalled(o),d=s&&u,p=t&&!po.isMobile();d&&this.platforms.push("browser"),l&&this.platforms.push(po.isMobile()?"mobile":"qrcode"),c&&this.platforms.push("web"),p&&this.platforms.push("desktop"),!d&&s&&this.platforms.push("unsupported"),this.platform=this.platforms[0]}platformTemplate(){switch(this.platform){case"browser":return yg`<w3m-connecting-wc-browser></w3m-connecting-wc-browser>`;case"desktop":return yg`
          <w3m-connecting-wc-desktop .onRetry=${()=>this.initializeConnection(!0)}>
          </w3m-connecting-wc-desktop>
        `;case"web":return yg`
          <w3m-connecting-wc-web .onRetry=${()=>this.initializeConnection(!0)}>
          </w3m-connecting-wc-web>
        `;case"mobile":return yg`
          <w3m-connecting-wc-mobile isMobile .onRetry=${()=>this.initializeConnection(!0)}>
          </w3m-connecting-wc-mobile>
        `;case"qrcode":return yg`<w3m-connecting-wc-qrcode></w3m-connecting-wc-qrcode>`;default:return yg`<w3m-connecting-wc-unsupported></w3m-connecting-wc-unsupported>`}}headerTemplate(){return this.platforms.length>1?yg`
      <w3m-connecting-header
        .platforms=${this.platforms}
        .onSelectPlatfrom=${this.onSelectPlatform.bind(this)}
      >
      </w3m-connecting-header>
    `:null}async onSelectPlatform(e){var t;const n=null==(t=this.shadowRoot)?void 0:t.querySelector("div");n&&(await n.animate([{opacity:1},{opacity:0}],{duration:200,fill:"forwards",easing:"ease"}).finished,this.platform=e,n.animate([{opacity:0},{opacity:1}],{duration:200,fill:"forwards",easing:"ease"}))}};Aw([Lg()],$w.prototype,"platform",void 0),Aw([Lg()],$w.prototype,"platforms",void 0),$w=Aw([_l("w3m-connecting-wc-view")],$w);let Iw=class extends Mg{constructor(){var e;super(...arguments),this.wallet=null==(e=zo.state.data)?void 0:e.wallet}render(){if(!this.wallet)throw new Error("w3m-downloads-view");return yg`
      <wui-flex gap="xs" flexDirection="column" .padding=${["s","s","l","s"]}>
        ${this.chromeTemplate()} ${this.iosTemplate()} ${this.androidTemplate()}
        ${this.homepageTemplate()}
      </wui-flex>
    `}chromeTemplate(){var e;return(null==(e=this.wallet)?void 0:e.chrome_store)?yg`<wui-list-item
      variant="icon"
      icon="chromeStore"
      iconVariant="square"
      @click=${this.onChromeStore.bind(this)}
      chevron
    >
      <wui-text variant="paragraph-500" color="fg-100">Chrome Extension</wui-text>
    </wui-list-item>`:null}iosTemplate(){var e;return(null==(e=this.wallet)?void 0:e.app_store)?yg`<wui-list-item
      variant="icon"
      icon="appStore"
      iconVariant="square"
      @click=${this.onAppStore.bind(this)}
      chevron
    >
      <wui-text variant="paragraph-500" color="fg-100">iOS App</wui-text>
    </wui-list-item>`:null}androidTemplate(){var e;return(null==(e=this.wallet)?void 0:e.play_store)?yg`<wui-list-item
      variant="icon"
      icon="playStore"
      iconVariant="square"
      @click=${this.onPlayStore.bind(this)}
      chevron
    >
      <wui-text variant="paragraph-500" color="fg-100">Android App</wui-text>
    </wui-list-item>`:null}homepageTemplate(){var e;return(null==(e=this.wallet)?void 0:e.homepage)?yg`
      <wui-list-item
        variant="icon"
        icon="browser"
        iconVariant="square-blue"
        @click=${this.onHomePage.bind(this)}
        chevron
      >
        <wui-text variant="paragraph-500" color="fg-100">Website</wui-text>
      </wui-list-item>
    `:null}onChromeStore(){var e;(null==(e=this.wallet)?void 0:e.chrome_store)&&po.openHref(this.wallet.chrome_store,"_blank")}onAppStore(){var e;(null==(e=this.wallet)?void 0:e.app_store)&&po.openHref(this.wallet.app_store,"_blank")}onPlayStore(){var e;(null==(e=this.wallet)?void 0:e.play_store)&&po.openHref(this.wallet.play_store,"_blank")}onHomePage(){var e;(null==(e=this.wallet)?void 0:e.homepage)&&po.openHref(this.wallet.homepage,"_blank")}};Iw=function(e,t,n,i){var r,a=arguments.length,o=a<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,n,i);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(o=(a<3?r(o):a>3?r(t,n,o):r(t,n))||o);return a>3&&o&&Object.defineProperty(t,n,o),o}([_l("w3m-downloads-view")],Iw);let Pw=class extends Mg{render(){return yg`
      <wui-flex flexDirection="column" padding="s" gap="xs">
        ${this.recommendedWalletsTemplate()}
        <wui-list-wallet
          name="Explore all"
          showAllWallets
          walletIcon="allWallets"
          icon="externalLink"
          @click=${()=>{po.openHref("https://walletconnect.com/explorer?type=wallet","_blank")}}
        ></wui-list-wallet>
      </wui-flex>
    `}recommendedWalletsTemplate(){const{recommended:e,featured:t}=Bo.state,{customWallets:n}=Eo.state;return[...t,...n??[],...e].slice(0,4).map((e=>yg`
        <wui-list-wallet
          name=${e.name??"Unknown"}
          tagVariant="main"
          imageSrc=${zg(is.getWalletImage(e))}
          @click=${()=>{po.openHref(e.homepage??"https://walletconnect.com/explorer","_blank")}}
        ></wui-list-wallet>
      `))}};Pw=function(e,t,n,i){var r,a=arguments.length,o=a<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,n,i);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(o=(a<3?r(o):a>3?r(t,n,o):r(t,n))||o);return a>3&&o&&Object.defineProperty(t,n,o),o}([_l("w3m-get-wallet-view")],Pw);const Sw=jm`
  @keyframes shake {
    0% {
      transform: translateX(0);
    }
    25% {
      transform: translateX(3px);
    }
    50% {
      transform: translateX(-3px);
    }
    75% {
      transform: translateX(3px);
    }
    100% {
      transform: translateX(0);
    }
  }

  wui-flex:first-child:not(:only-child) {
    position: relative;
  }

  wui-loading-hexagon {
    position: absolute;
  }

  wui-icon-box {
    position: absolute;
    right: 4px;
    bottom: 0;
    opacity: 0;
    transform: scale(0.5);
    z-index: 1;
    transition: all var(--wui-ease-out-power-2) var(--wui-duration-lg);
  }

  wui-button {
    display: none;
  }

  [data-error='true'] wui-icon-box {
    opacity: 1;
    transform: scale(1);
  }

  [data-error='true'] > wui-flex:first-child {
    animation: shake 250ms cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
  }

  wui-button[data-retry='true'] {
    display: block;
    opacity: 1;
  }
`;var Rw=function(e,t,n,i){var r,a=arguments.length,o=a<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,n,i);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(o=(a<3?r(o):a>3?r(t,n,o):r(t,n))||o);return a>3&&o&&Object.defineProperty(t,n,o),o};let Ow=class extends Mg{constructor(){var e;super(),this.network=null==(e=zo.state.data)?void 0:e.network,this.unsubscribe=[],this.showRetry=!1,this.error=!1}disconnectedCallback(){this.unsubscribe.forEach((e=>e()))}firstUpdated(){this.onSwitchNetwork()}render(){if(!this.network)throw new Error("w3m-network-switch-view: No network provided");this.onShowRetry();const e=this.error?"Switch declined":"Approve in wallet",t=this.error?"Switch can be declined if chain is not supported by a wallet or previous request is still active":"Accept connection request in your wallet";return yg`
      <wui-flex
        data-error=${this.error}
        flexDirection="column"
        alignItems="center"
        .padding=${["3xl","xl","3xl","xl"]}
        gap="xl"
      >
        <wui-flex justifyContent="center" alignItems="center">
          <wui-network-image
            size="lg"
            imageSrc=${zg(is.getNetworkImage(this.network))}
          ></wui-network-image>

          ${this.error?null:yg`<wui-loading-hexagon></wui-loading-hexagon>`}

          <wui-icon-box
            backgroundColor="error-100"
            background="opaque"
            iconColor="error-100"
            icon="close"
            size="sm"
            ?border=${!0}
            borderColor="wui-color-bg-125"
          ></wui-icon-box>
        </wui-flex>

        <wui-flex flexDirection="column" alignItems="center" gap="xs">
          <wui-text align="center" variant="paragraph-500" color="fg-100">${e}</wui-text>
          <wui-text align="center" variant="small-500" color="fg-200">${t}</wui-text>
        </wui-flex>

        <wui-button
          data-retry=${this.showRetry}
          variant="fill"
          .disabled=${!this.error}
          @click=${this.onSwitchNetwork.bind(this)}
        >
          <wui-icon color="inherit" slot="iconLeft" name="refresh"></wui-icon>
          Try again
        </wui-button>
      </wui-flex>
    `}onShowRetry(){var e;if(this.error&&!this.showRetry){this.showRetry=!0;const t=null==(e=this.shadowRoot)?void 0:e.querySelector("wui-button");null==t||t.animate([{opacity:0},{opacity:1}],{fill:"forwards",easing:"ease"})}}async onSwitchNetwork(){try{this.error=!1,this.network&&(await jo.switchActiveNetwork(this.network),Eo.state.isSiweEnabled||rs.navigateAfterNetworkSwitch())}catch{this.error=!0}}};Ow.styles=Sw,Rw([Lg()],Ow.prototype,"showRetry",void 0),Rw([Lg()],Ow.prototype,"error",void 0),Ow=Rw([_l("w3m-network-switch-view")],Ow);const Nw=jm`
  :host > wui-grid {
    max-height: 360px;
    overflow: auto;
  }

  wui-grid::-webkit-scrollbar {
    display: none;
  }
`;var Mw=function(e,t,n,i){var r,a=arguments.length,o=a<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,n,i);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(o=(a<3?r(o):a>3?r(t,n,o):r(t,n))||o);return a>3&&o&&Object.defineProperty(t,n,o),o};let jw=class extends Mg{constructor(){super(),this.unsubscribe=[],this.caipNetwork=jo.state.caipNetwork,this.unsubscribe.push(jo.subscribeKey("caipNetwork",(e=>this.caipNetwork=e)))}disconnectedCallback(){this.unsubscribe.forEach((e=>e()))}render(){return yg`
      <wui-grid padding="s" gridTemplateColumns="repeat(4, 1fr)" rowGap="l" columnGap="xs">
        ${this.networksTemplate()}
      </wui-grid>

      <wui-separator></wui-separator>

      <wui-flex padding="s" flexDirection="column" gap="m" alignItems="center">
        <wui-text variant="small-400" color="fg-300" align="center">
          Your connected wallet may not support some of the networks available for this dApp
        </wui-text>
        <wui-link @click=${this.onNetworkHelp.bind(this)}>
          <wui-icon size="xs" color="accent-100" slot="iconLeft" name="helpCircle"></wui-icon>
          What is a network
        </wui-link>
      </wui-flex>
    `}onNetworkHelp(){No.sendEvent({type:"track",event:"CLICK_NETWORK_HELP"}),zo.push("WhatIsANetwork")}networksTemplate(){const{approvedCaipNetworkIds:e,requestedCaipNetworks:t,supportsAllNetworks:n}=jo.state,i=po.sortRequestedNetworks(e,t);return null==i?void 0:i.map((t=>{var i;return yg`
        <wui-card-select
          .selected=${(null==(i=this.caipNetwork)?void 0:i.id)===t.id}
          imageSrc=${zg(is.getNetworkImage(t))}
          type="network"
          name=${t.name??t.id}
          @click=${()=>this.onSwitchNetwork(t)}
          .disabled=${!n&&!(null==e?void 0:e.includes(t.id))}
          data-testid=${`w3m-network-switch-${t.name??t.id}`}
        ></wui-card-select>
      `}))}async onSwitchNetwork(e){const{isConnected:t}=fo.state,{approvedCaipNetworkIds:n,supportsAllNetworks:i,caipNetwork:r}=jo.state,{data:a}=zo.state;t&&(null==r?void 0:r.id)!==e.id?(null==n?void 0:n.includes(e.id))?(await jo.switchActiveNetwork(e),rs.navigateAfterNetworkSwitch()):i&&zo.push("SwitchNetwork",{...a,network:e}):t||(jo.setCaipNetwork(e),zo.push("Connect"))}};jw.styles=Nw,Mw([Lg()],jw.prototype,"caipNetwork",void 0),jw=Mw([_l("w3m-networks-view")],jw);const Uw=jm`
  :host > wui-flex {
    height: 500px;
    overflow-y: auto;
    overflow-x: hidden;
    scrollbar-width: none;
    padding: var(--wui-spacing-m);
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: flex-start;
  }

  :host > wui-flex > wui-flex {
    width: 100%;
  }

  wui-transaction-list-item-loader {
    width: 100%;
  }
`;var Dw=function(e,t,n,i){var r,a=arguments.length,o=a<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,n,i);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(o=(a<3?r(o):a>3?r(t,n,o):r(t,n))||o);return a>3&&o&&Object.defineProperty(t,n,o),o};let Bw=class extends Mg{constructor(){super(),this.unsubscribe=[],this.refetchTimeout=void 0,this.selectedOnRampProvider=Yo.state.selectedProvider,this.loading=!1,this.coinbaseTransactions=es.state.coinbaseTransactions,this.tokenImages=Co.state.tokenImages,this.unsubscribe.push(Yo.subscribeKey("selectedProvider",(e=>{this.selectedOnRampProvider=e})),Co.subscribeKey("tokenImages",(e=>this.tokenImages=e)),(()=>{clearTimeout(this.refetchTimeout)}),es.subscribe((e=>{this.coinbaseTransactions={...e.coinbaseTransactions}}))),this.fetchTransactions()}render(){return yg`
      <wui-flex flexDirection="column" padding="s" gap="xs">
        ${this.loading?this.templateLoading():this.templateTransactionsByYear()}
      </wui-flex>
    `}templateTransactions(e){return null==e?void 0:e.map((e=>{var t,n,i;const r=Tm.formatDate(null==(t=null==e?void 0:e.metadata)?void 0:t.minedAt),a=e.transfers[0],o=null==a?void 0:a.fungible_info;if(!o)return null;const s=(null==(n=null==o?void 0:o.icon)?void 0:n.url)||(null==(i=this.tokenImages)?void 0:i[o.symbol||""]);return yg`
        <wui-onramp-activity-item
          label="Bought"
          .completed=${"ONRAMP_TRANSACTION_STATUS_SUCCESS"===e.metadata.status}
          .inProgress=${"ONRAMP_TRANSACTION_STATUS_IN_PROGRESS"===e.metadata.status}
          .failed=${"ONRAMP_TRANSACTION_STATUS_FAILED"===e.metadata.status}
          purchaseCurrency=${zg(o.symbol)}
          purchaseValue=${a.quantity.numeric}
          date=${r}
          icon=${zg(s)}
          symbol=${zg(o.symbol)}
        ></wui-onramp-activity-item>
      `}))}templateTransactionsByYear(){return Object.keys(this.coinbaseTransactions).sort().reverse().map((e=>{const t=parseInt(e,10);return new Array(12).fill(null).map(((e,t)=>t)).reverse().map((e=>{var n;const i=Im.getTransactionGroupTitle(t,e),r=null==(n=this.coinbaseTransactions[t])?void 0:n[e];return r?yg`
          <wui-flex flexDirection="column">
            <wui-flex
              alignItems="center"
              flexDirection="row"
              .padding=${["xs","s","s","s"]}
            >
              <wui-text variant="paragraph-500" color="fg-200">${i}</wui-text>
            </wui-flex>
            <wui-flex flexDirection="column" gap="xs">
              ${this.templateTransactions(r)}
            </wui-flex>
          </wui-flex>
        `:null}))}))}async fetchTransactions(){await this.fetchCoinbaseTransactions()}async fetchCoinbaseTransactions(){const e=fo.state.address,t=Eo.state.projectId;if(!e)throw new Error("No address found");if(!t)throw new Error("No projectId found");this.loading=!0,await es.fetchTransactions(e,"coinbase"),this.loading=!1,this.refetchLoadingTransactions()}refetchLoadingTransactions(){var e;const t=new Date;0!==((null==(e=this.coinbaseTransactions[t.getFullYear()])?void 0:e[t.getMonth()])||[]).filter((e=>"ONRAMP_TRANSACTION_STATUS_IN_PROGRESS"===e.metadata.status)).length?this.refetchTimeout=setTimeout((async()=>{const e=fo.state.address;await es.fetchTransactions(e,"coinbase"),this.refetchLoadingTransactions()}),3e3):clearTimeout(this.refetchTimeout)}templateLoading(){return Array(7).fill(yg` <wui-transaction-list-item-loader></wui-transaction-list-item-loader> `).map((e=>e))}};Bw.styles=Uw,Dw([Lg()],Bw.prototype,"selectedOnRampProvider",void 0),Dw([Lg()],Bw.prototype,"loading",void 0),Dw([Lg()],Bw.prototype,"coinbaseTransactions",void 0),Dw([Lg()],Bw.prototype,"tokenImages",void 0),Bw=Dw([_l("w3m-onramp-activity-view")],Bw);const Lw=jm`
  :host > wui-grid {
    max-height: 360px;
    overflow: auto;
  }

  wui-grid::-webkit-scrollbar {
    display: none;
  }
`;var zw=function(e,t,n,i){var r,a=arguments.length,o=a<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,n,i);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(o=(a<3?r(o):a>3?r(t,n,o):r(t,n))||o);return a>3&&o&&Object.defineProperty(t,n,o),o};let Fw=class extends Mg{constructor(){super(),this.unsubscribe=[],this.selectedCurrency=Yo.state.paymentCurrency,this.currencies=Yo.state.paymentCurrencies,this.currencyImages=Co.state.currencyImages,this.unsubscribe.push(Yo.subscribe((e=>{this.selectedCurrency=e.paymentCurrency,this.currencies=e.paymentCurrencies})),Co.subscribeKey("currencyImages",(e=>this.currencyImages=e)))}disconnectedCallback(){this.unsubscribe.forEach((e=>e()))}render(){return yg`
      <wui-flex flexDirection="column" padding="s" gap="xs">
        ${this.currenciesTemplate()}
      </wui-flex>
      <w3m-legal-footer></w3m-legal-footer>
    `}currenciesTemplate(){return this.currencies.map((e=>{var t;return yg`
        <wui-list-item
          imageSrc=${zg(null==(t=this.currencyImages)?void 0:t[e.id])}
          @click=${()=>this.selectCurrency(e)}
          variant="image"
        >
          <wui-text variant="paragraph-500" color="fg-100">${e.id}</wui-text>
        </wui-list-item>
      `}))}selectCurrency(e){e&&(Yo.setPaymentCurrency(e),Wo.close())}};Fw.styles=Lw,zw([Lg()],Fw.prototype,"selectedCurrency",void 0),zw([Lg()],Fw.prototype,"currencies",void 0),zw([Lg()],Fw.prototype,"currencyImages",void 0),Fw=zw([_l("w3m-onramp-fiat-select-view")],Fw);var Ww=function(e,t,n,i){var r,a=arguments.length,o=a<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,n,i);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(o=(a<3?r(o):a>3?r(t,n,o):r(t,n))||o);return a>3&&o&&Object.defineProperty(t,n,o),o};let Hw=class extends Mg{constructor(){super(),this.unsubscribe=[],this.providers=Yo.state.providers,this.unsubscribe.push(Yo.subscribeKey("providers",(e=>{this.providers=e})))}firstUpdated(){const e=this.providers.map((async e=>"coinbase"===e.name?await this.getCoinbaseOnRampURL():Promise.resolve(null==e?void 0:e.url)));Promise.all(e).then((e=>{this.providers=this.providers.map(((t,n)=>({...t,url:e[n]||""})))}))}render(){return yg`
      <wui-flex flexDirection="column" padding="s" gap="xs">
        ${this.onRampProvidersTemplate()}
      </wui-flex>
      <w3m-onramp-providers-footer></w3m-onramp-providers-footer>
    `}onRampProvidersTemplate(){return this.providers.map((e=>yg`
        <wui-onramp-provider-item
          label=${e.label}
          name=${e.name}
          feeRange=${e.feeRange}
          @click=${()=>{this.onClickProvider(e)}}
          ?disabled=${!e.url}
        ></wui-onramp-provider-item>
      `))}onClickProvider(e){Yo.setSelectedProvider(e),zo.push("BuyInProgress"),po.openHref(e.url,"popupWindow","width=600,height=800,scrollbars=yes")}async getCoinbaseOnRampURL(){const e=fo.state.address,t=jo.state.caipNetwork;if(!e)throw new Error("No address found");if(!(null==t?void 0:t.name))throw new Error("No network found");const n=uo.WC_COINBASE_PAY_SDK_CHAIN_NAME_MAP[t.name]??uo.WC_COINBASE_PAY_SDK_FALLBACK_CHAIN,i=Yo.state.purchaseCurrency,r=i?[i.symbol]:Yo.state.purchaseCurrencies.map((e=>e.symbol));return await Vo.generateOnRampURL({defaultNetwork:n,destinationWallets:[{address:e,blockchains:uo.WC_COINBASE_PAY_SDK_CHAINS,assets:r}],partnerUserId:e,purchaseAmount:Yo.state.purchaseAmount})}};Ww([Lg()],Hw.prototype,"providers",void 0),Hw=Ww([_l("w3m-onramp-providers-view")],Hw);const Zw=jm`
  :host > wui-grid {
    max-height: 360px;
    overflow: auto;
  }

  wui-grid::-webkit-scrollbar {
    display: none;
  }
`;var Vw=function(e,t,n,i){var r,a=arguments.length,o=a<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,n,i);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(o=(a<3?r(o):a>3?r(t,n,o):r(t,n))||o);return a>3&&o&&Object.defineProperty(t,n,o),o};let Gw=class extends Mg{constructor(){super(),this.unsubscribe=[],this.selectedCurrency=Yo.state.purchaseCurrencies,this.tokens=Yo.state.purchaseCurrencies,this.tokenImages=Co.state.tokenImages,this.unsubscribe.push(Yo.subscribe((e=>{this.selectedCurrency=e.purchaseCurrencies,this.tokens=e.purchaseCurrencies})),Co.subscribeKey("tokenImages",(e=>this.tokenImages=e)))}disconnectedCallback(){this.unsubscribe.forEach((e=>e()))}render(){return yg`
      <wui-flex flexDirection="column" padding="s" gap="xs">
        ${this.currenciesTemplate()}
      </wui-flex>
      <w3m-legal-footer></w3m-legal-footer>
    `}currenciesTemplate(){return this.tokens.map((e=>{var t;return yg`
        <wui-list-item
          imageSrc=${zg(null==(t=this.tokenImages)?void 0:t[e.symbol])}
          @click=${()=>this.selectToken(e)}
          variant="image"
        >
          <wui-flex gap="3xs" alignItems="center">
            <wui-text variant="paragraph-500" color="fg-100">${e.name}</wui-text>
            <wui-text variant="small-400" color="fg-200">${e.symbol}</wui-text>
          </wui-flex>
        </wui-list-item>
      `}))}selectToken(e){e&&(Yo.setPurchaseCurrency(e),Wo.close())}};Gw.styles=Zw,Vw([Lg()],Gw.prototype,"selectedCurrency",void 0),Vw([Lg()],Gw.prototype,"tokens",void 0),Vw([Lg()],Gw.prototype,"tokenImages",void 0),Gw=Vw([_l("w3m-onramp-token-select-view")],Gw);const qw=jm`
  :host > wui-flex:first-child {
    height: 500px;
    overflow-y: auto;
    overflow-x: hidden;
    scrollbar-width: none;
    padding: var(--wui-spacing-m);
  }

  :host > wui-flex:first-child::-webkit-scrollbar {
    display: none;
  }
`;var Kw=function(e,t,n,i){var r,a=arguments.length,o=a<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,n,i);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(o=(a<3?r(o):a>3?r(t,n,o):r(t,n))||o);return a>3&&o&&Object.defineProperty(t,n,o),o};const Yw="last-transaction";let Jw=class extends Mg{constructor(){super(),this.unsubscribe=[],this.paginationObserver=void 0,this.address=fo.state.address,this.transactionsByYear=es.state.transactionsByYear,this.loading=es.state.loading,this.empty=es.state.empty,this.next=es.state.next,this.unsubscribe.push(fo.subscribe((e=>{e.isConnected&&this.address!==e.address&&(this.address=e.address,es.resetTransactions(),es.fetchTransactions(e.address))})),es.subscribe((e=>{this.transactionsByYear=e.transactionsByYear,this.loading=e.loading,this.empty=e.empty,this.next=e.next})))}firstUpdated(){es.fetchTransactions(this.address),this.createPaginationObserver()}updated(){this.setPaginationObserver()}disconnectedCallback(){this.unsubscribe.forEach((e=>e()))}render(){return yg`
      <wui-flex flexDirection="column" gap="s">
        ${this.empty?null:this.templateTransactionsByYear()}
        ${this.loading?this.templateLoading():null}
        ${!this.loading&&this.empty?this.templateEmpty():null}
      </wui-flex>
    `}templateTransactionsByYear(){const e=Object.keys(this.transactionsByYear).sort().reverse();return e.map(((t,n)=>{const i=n===e.length-1,r=parseInt(t,10);return new Array(12).fill(null).map(((e,t)=>t)).reverse().map((e=>{var t;const n=Im.getTransactionGroupTitle(r,e),a=null==(t=this.transactionsByYear[r])?void 0:t[e];return a?yg`
          <wui-flex flexDirection="column">
            <wui-flex
              alignItems="center"
              flexDirection="row"
              .padding=${["xs","s","s","s"]}
            >
              <wui-text variant="paragraph-500" color="fg-200">${n}</wui-text>
            </wui-flex>
            <wui-flex flexDirection="column" gap="xs">
              ${this.templateTransactions(a,i)}
            </wui-flex>
          </wui-flex>
        `:null}))}))}templateRenderTransaction(e,t){const{date:n,descriptions:i,direction:r,isAllNFT:a,images:o,status:s,transfers:l,type:c}=this.getTransactionListItemProps(e),u=(null==l?void 0:l.length)>1;return 2===(null==l?void 0:l.length)&&!a?yg`
        <wui-transaction-list-item
          date=${n}
          .direction=${r}
          id=${t&&this.next?Yw:""}
          status=${s}
          type=${c}
          .images=${o}
          .descriptions=${i}
        ></wui-transaction-list-item>
      `:u?l.map(((e,i)=>{const r=Im.getTransferDescription(e),a=t&&i===l.length-1;return yg` <wui-transaction-list-item
          date=${n}
          direction=${e.direction}
          id=${a&&this.next?Yw:""}
          status=${s}
          type=${c}
          .onlyDirectionIcon=${!0}
          .images=${[o[i]]}
          .descriptions=${[r]}
        ></wui-transaction-list-item>`})):yg`
      <wui-transaction-list-item
        date=${n}
        .direction=${r}
        id=${t&&this.next?Yw:""}
        status=${s}
        type=${c}
        .images=${o}
        .descriptions=${i}
      ></wui-transaction-list-item>
    `}templateTransactions(e,t){return e.map(((n,i)=>{const r=t&&i===e.length-1;return yg`${this.templateRenderTransaction(n,r)}`}))}templateEmpty(){return yg`
      <wui-flex
        flexGrow="1"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        .padding=${["3xl","xl","3xl","xl"]}
        gap="xl"
      >
        <wui-icon-box
          backgroundColor="glass-005"
          background="gray"
          iconColor="fg-200"
          icon="wallet"
          size="lg"
          ?border=${!0}
          borderColor="wui-color-bg-125"
        ></wui-icon-box>
        <wui-flex flexDirection="column" alignItems="center" gap="xs">
          <wui-text align="center" variant="paragraph-500" color="fg-100"
            >No Transactions yet</wui-text
          >
          <wui-text align="center" variant="small-500" color="fg-200"
            >Start trading on dApps <br />
            to grow your wallet!</wui-text
          >
        </wui-flex>
      </wui-flex>
    `}templateLoading(){return Array(7).fill(yg` <wui-transaction-list-item-loader></wui-transaction-list-item-loader> `).map((e=>e))}createPaginationObserver(){const{projectId:e}=Eo.state;this.paginationObserver=new IntersectionObserver((([t])=>{(null==t?void 0:t.isIntersecting)&&!this.loading&&(es.fetchTransactions(this.address),No.sendEvent({type:"track",event:"LOAD_MORE_TRANSACTIONS",properties:{address:this.address,projectId:e,cursor:this.next}}))}),{}),this.setPaginationObserver()}setPaginationObserver(){var e,t,n;null==(e=this.paginationObserver)||e.disconnect();const i=null==(t=this.shadowRoot)?void 0:t.querySelector(`#${Yw}`);i&&(null==(n=this.paginationObserver)||n.observe(i))}getTransactionListItemProps(e){var t,n,i,r,a;const o=Tm.formatDate(null==(t=null==e?void 0:e.metadata)?void 0:t.minedAt),s=Im.getTransactionDescriptions(e),l=null==e?void 0:e.transfers,c=null==(n=null==e?void 0:e.transfers)?void 0:n[0],u=Boolean(c)&&(null==(i=null==e?void 0:e.transfers)?void 0:i.every((e=>Boolean(e.nft_info)))),d=Im.getTransactionImages(l);return{date:o,direction:null==c?void 0:c.direction,descriptions:s,isAllNFT:u,images:d,status:null==(r=e.metadata)?void 0:r.status,transfers:l,type:null==(a=e.metadata)?void 0:a.operationType}}};Jw.styles=qw,Kw([Lg()],Jw.prototype,"address",void 0),Kw([Lg()],Jw.prototype,"transactionsByYear",void 0),Kw([Lg()],Jw.prototype,"loading",void 0),Kw([Lg()],Jw.prototype,"empty",void 0),Kw([Lg()],Jw.prototype,"next",void 0),Jw=Kw([_l("w3m-transactions-view")],Jw);const Qw=[{images:["network","layers","system"],title:"The system’s nuts and bolts",text:"A network is what brings the blockchain to life, as this technical infrastructure allows apps to access the ledger and smart contract services."},{images:["noun","defiAlt","dao"],title:"Designed for different uses",text:"Each network is designed differently, and may therefore suit certain apps and experiences."}];let Xw=class extends Mg{render(){return yg`
      <wui-flex
        flexDirection="column"
        .padding=${["xxl","xl","xl","xl"]}
        alignItems="center"
        gap="xl"
      >
        <w3m-help-widget .data=${Qw}></w3m-help-widget>
        <wui-button
          variant="fill"
          size="sm"
          @click=${()=>{po.openHref("https://ethereum.org/en/developers/docs/networks/","_blank")}}
        >
          Learn more
          <wui-icon color="inherit" slot="iconRight" name="externalLink"></wui-icon>
        </wui-button>
      </wui-flex>
    `}};Xw=function(e,t,n,i){var r,a=arguments.length,o=a<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,n,i);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(o=(a<3?r(o):a>3?r(t,n,o):r(t,n))||o);return a>3&&o&&Object.defineProperty(t,n,o),o}([_l("w3m-what-is-a-network-view")],Xw);const ey=[{images:["login","profile","lock"],title:"One login for all of web3",text:"Log in to any app by connecting your wallet. Say goodbye to countless passwords!"},{images:["defi","nft","eth"],title:"A home for your digital assets",text:"A wallet lets you store, send and receive digital assets like cryptocurrencies and NFTs."},{images:["browser","noun","dao"],title:"Your gateway to a new web",text:"With your wallet, you can explore and interact with DeFi, NFTs, DAOs, and much more."}];let ty=class extends Mg{render(){return yg`
      <wui-flex
        flexDirection="column"
        .padding=${["xxl","xl","xl","xl"]}
        alignItems="center"
        gap="xl"
      >
        <w3m-help-widget .data=${ey}></w3m-help-widget>
        <wui-button variant="fill" size="sm" @click=${this.onGetWallet.bind(this)}>
          <wui-icon color="inherit" slot="iconLeft" name="wallet"></wui-icon>
          Get a wallet
        </wui-button>
      </wui-flex>
    `}onGetWallet(){No.sendEvent({type:"track",event:"CLICK_GET_WALLET"}),zo.push("GetWallet")}};ty=function(e,t,n,i){var r,a=arguments.length,o=a<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,n,i);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(o=(a<3?r(o):a>3?r(t,n,o):r(t,n))||o);return a>3&&o&&Object.defineProperty(t,n,o),o}([_l("w3m-what-is-a-wallet-view")],ty);let ny=class extends Mg{render(){return yg`
      <wui-flex
        flexDirection="column"
        .padding=${["xxl","3xl","xl","3xl"]}
        alignItems="center"
        gap="xl"
      >
        <wui-visual name="onrampCard"></wui-visual>
        <wui-flex flexDirection="column" gap="xs" alignItems="center">
          <wui-text align="center" variant="paragraph-500" color="fg-100">
            Quickly and easily buy digital assets!
          </wui-text>
          <wui-text align="center" variant="small-400" color="fg-200">
            Simply select your preferred onramp provider and add digital assets to your account
            using your credit card or bank transfer
          </wui-text>
        </wui-flex>
        <wui-button @click=${zo.goBack}>
          <wui-icon size="sm" color="inherit" name="add" slot="iconLeft"></wui-icon>
          Buy
        </wui-button>
      </wui-flex>
    `}};ny=function(e,t,n,i){var r,a=arguments.length,o=a<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,n,i);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(o=(a<3?r(o):a>3?r(t,n,o):r(t,n))||o);return a>3&&o&&Object.defineProperty(t,n,o),o}([_l("w3m-what-is-a-buy-view")],ny);const iy=jm`
  wui-loading-spinner {
    margin: 9px auto;
  }
`,ry={SECURE_SITE_SDK:"https://secure.walletconnect.com/sdk",APP_EVENT_KEY:"@w3m-app/",FRAME_EVENT_KEY:"@w3m-frame/",RPC_METHOD_KEY:"RPC_",STORAGE_KEY:"@w3m-storage/",SESSION_TOKEN_KEY:"SESSION_TOKEN_KEY",EMAIL_LOGIN_USED_KEY:"EMAIL_LOGIN_USED_KEY",LAST_USED_CHAIN_KEY:"LAST_USED_CHAIN_KEY",LAST_EMAIL_LOGIN_TIME:"LAST_EMAIL_LOGIN_TIME",EMAIL:"EMAIL",PREFERRED_ACCOUNT_TYPE:"PREFERRED_ACCOUNT_TYPE",APP_SWITCH_NETWORK:"@w3m-app/SWITCH_NETWORK",APP_CONNECT_EMAIL:"@w3m-app/CONNECT_EMAIL",APP_CONNECT_DEVICE:"@w3m-app/CONNECT_DEVICE",APP_CONNECT_OTP:"@w3m-app/CONNECT_OTP",APP_GET_USER:"@w3m-app/GET_USER",APP_SIGN_OUT:"@w3m-app/SIGN_OUT",APP_IS_CONNECTED:"@w3m-app/IS_CONNECTED",APP_GET_CHAIN_ID:"@w3m-app/GET_CHAIN_ID",APP_RPC_REQUEST:"@w3m-app/RPC_REQUEST",APP_UPDATE_EMAIL:"@w3m-app/UPDATE_EMAIL",APP_UPDATE_EMAIL_PRIMARY_OTP:"@w3m-app/UPDATE_EMAIL_PRIMARY_OTP",APP_UPDATE_EMAIL_SECONDARY_OTP:"@w3m-app/UPDATE_EMAIL_SECONDARY_OTP",APP_AWAIT_UPDATE_EMAIL:"@w3m-app/AWAIT_UPDATE_EMAIL",APP_SYNC_THEME:"@w3m-app/SYNC_THEME",APP_SYNC_DAPP_DATA:"@w3m-app/SYNC_DAPP_DATA",APP_GET_SMART_ACCOUNT_ENABLED_NETWORKS:"@w3m-app/GET_SMART_ACCOUNT_ENABLED_NETWORKS",APP_INIT_SMART_ACCOUNT:"@w3m-app/INIT_SMART_ACCOUNT",APP_SET_PREFERRED_ACCOUNT:"@w3m-app/SET_PREFERRED_ACCOUNT",FRAME_SWITCH_NETWORK_ERROR:"@w3m-frame/SWITCH_NETWORK_ERROR",FRAME_SWITCH_NETWORK_SUCCESS:"@w3m-frame/SWITCH_NETWORK_SUCCESS",FRAME_CONNECT_EMAIL_ERROR:"@w3m-frame/CONNECT_EMAIL_ERROR",FRAME_CONNECT_EMAIL_SUCCESS:"@w3m-frame/CONNECT_EMAIL_SUCCESS",FRAME_CONNECT_DEVICE_ERROR:"@w3m-frame/CONNECT_DEVICE_ERROR",FRAME_CONNECT_DEVICE_SUCCESS:"@w3m-frame/CONNECT_DEVICE_SUCCESS",FRAME_CONNECT_OTP_SUCCESS:"@w3m-frame/CONNECT_OTP_SUCCESS",FRAME_CONNECT_OTP_ERROR:"@w3m-frame/CONNECT_OTP_ERROR",FRAME_GET_USER_SUCCESS:"@w3m-frame/GET_USER_SUCCESS",FRAME_GET_USER_ERROR:"@w3m-frame/GET_USER_ERROR",FRAME_SIGN_OUT_SUCCESS:"@w3m-frame/SIGN_OUT_SUCCESS",FRAME_SIGN_OUT_ERROR:"@w3m-frame/SIGN_OUT_ERROR",FRAME_IS_CONNECTED_SUCCESS:"@w3m-frame/IS_CONNECTED_SUCCESS",FRAME_IS_CONNECTED_ERROR:"@w3m-frame/IS_CONNECTED_ERROR",FRAME_GET_CHAIN_ID_SUCCESS:"@w3m-frame/GET_CHAIN_ID_SUCCESS",FRAME_GET_CHAIN_ID_ERROR:"@w3m-frame/GET_CHAIN_ID_ERROR",FRAME_RPC_REQUEST_SUCCESS:"@w3m-frame/RPC_REQUEST_SUCCESS",FRAME_RPC_REQUEST_ERROR:"@w3m-frame/RPC_REQUEST_ERROR",FRAME_SESSION_UPDATE:"@w3m-frame/SESSION_UPDATE",FRAME_UPDATE_EMAIL_SUCCESS:"@w3m-frame/UPDATE_EMAIL_SUCCESS",FRAME_UPDATE_EMAIL_ERROR:"@w3m-frame/UPDATE_EMAIL_ERROR",FRAME_UPDATE_EMAIL_PRIMARY_OTP_SUCCESS:"@w3m-frame/UPDATE_EMAIL_PRIMARY_OTP_SUCCESS",FRAME_UPDATE_EMAIL_PRIMARY_OTP_ERROR:"@w3m-frame/UPDATE_EMAIL_PRIMARY_OTP_ERROR",FRAME_UPDATE_EMAIL_SECONDARY_OTP_SUCCESS:"@w3m-frame/UPDATE_EMAIL_SECONDARY_OTP_SUCCESS",FRAME_UPDATE_EMAIL_SECONDARY_OTP_ERROR:"@w3m-frame/UPDATE_EMAIL_SECONDARY_OTP_ERROR",FRAME_SYNC_THEME_SUCCESS:"@w3m-frame/SYNC_THEME_SUCCESS",FRAME_SYNC_THEME_ERROR:"@w3m-frame/SYNC_THEME_ERROR",FRAME_SYNC_DAPP_DATA_SUCCESS:"@w3m-frame/SYNC_DAPP_DATA_SUCCESS",FRAME_SYNC_DAPP_DATA_ERROR:"@w3m-frame/SYNC_DAPP_DATA_ERROR",FRAME_GET_SMART_ACCOUNT_ENABLED_NETWORKS_SUCCESS:"@w3m-frame/GET_SMART_ACCOUNT_ENABLED_NETWORKS_SUCCESS",FRAME_GET_SMART_ACCOUNT_ENABLED_NETWORKS_ERROR:"@w3m-frame/GET_SMART_ACCOUNT_ENABLED_NETWORKS_ERROR",FRAME_INIT_SMART_ACCOUNT_SUCCESS:"@w3m-frame/INIT_SMART_ACCOUNT_SUCCESS",FRAME_INIT_SMART_ACCOUNT_ERROR:"@w3m-frame/INIT_SMART_ACCOUNT_ERROR",FRAME_SET_PREFERRED_ACCOUNT_SUCCESS:"@w3m-frame/SET_PREFERRED_ACCOUNT_SUCCESS",FRAME_SET_PREFERRED_ACCOUNT_ERROR:"@w3m-frame/SET_PREFERRED_ACCOUNT_ERROR"},ay={SAFE_RPC_METHODS:["eth_accounts","eth_blockNumber","eth_call","eth_chainId","eth_estimateGas","eth_feeHistory","eth_gasPrice","eth_getAccount","eth_getBalance","eth_getBlockByHash","eth_getBlockByNumber","eth_getBlockReceipts","eth_getBlockTransactionCountByHash","eth_getBlockTransactionCountByNumber","eth_getCode","eth_getFilterChanges","eth_getFilterLogs","eth_getLogs","eth_getProof","eth_getStorageAt","eth_getTransactionByBlockHashAndIndex","eth_getTransactionByBlockNumberAndIndex","eth_getTransactionByHash","eth_getTransactionCount","eth_getTransactionReceipt","eth_getUncleCountByBlockHash","eth_getUncleCountByBlockNumber","eth_maxPriorityFeePerGas","eth_newBlockFilter","eth_newFilter","eth_newPendingTransactionFilter","eth_sendRawTransaction","eth_syncing","eth_uninstallFilter"],NOT_SAFE_RPC_METHODS:["personal_sign","eth_signTypedData_v4","eth_sendTransaction"],GET_CHAIN_ID:"eth_chainId",RPC_METHOD_NOT_ALLOWED_MESSAGE:"Requested RPC call is not allowed",RPC_METHOD_NOT_ALLOWED_UI_MESSAGE:"Action not allowed"};var oy,sy,ly;(sy=oy||(oy={})).assertEqual=e=>e,sy.assertIs=function(e){},sy.assertNever=function(e){throw new Error},sy.arrayToEnum=e=>{const t={};for(const n of e)t[n]=n;return t},sy.getValidEnumValues=e=>{const t=sy.objectKeys(e).filter((t=>"number"!=typeof e[e[t]])),n={};for(const i of t)n[i]=e[i];return sy.objectValues(n)},sy.objectValues=e=>sy.objectKeys(e).map((function(t){return e[t]})),sy.objectKeys="function"==typeof Object.keys?e=>Object.keys(e):e=>{const t=[];for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.push(n);return t},sy.find=(e,t)=>{for(const n of e)if(t(n))return n},sy.isInteger="function"==typeof Number.isInteger?e=>Number.isInteger(e):e=>"number"==typeof e&&isFinite(e)&&Math.floor(e)===e,sy.joinValues=function(e,t=" | "){return e.map((e=>"string"==typeof e?`'${e}'`:e)).join(t)},sy.jsonStringifyReplacer=(e,t)=>"bigint"==typeof t?t.toString():t,(ly||(ly={})).mergeShapes=(e,t)=>({...e,...t});const cy=oy.arrayToEnum(["string","nan","number","integer","float","boolean","date","bigint","symbol","function","undefined","null","array","object","unknown","promise","void","never","map","set"]),uy=e=>{switch(typeof e){case"undefined":return cy.undefined;case"string":return cy.string;case"number":return isNaN(e)?cy.nan:cy.number;case"boolean":return cy.boolean;case"function":return cy.function;case"bigint":return cy.bigint;case"symbol":return cy.symbol;case"object":return Array.isArray(e)?cy.array:null===e?cy.null:e.then&&"function"==typeof e.then&&e.catch&&"function"==typeof e.catch?cy.promise:"undefined"!=typeof Map&&e instanceof Map?cy.map:"undefined"!=typeof Set&&e instanceof Set?cy.set:"undefined"!=typeof Date&&e instanceof Date?cy.date:cy.object;default:return cy.unknown}},dy=oy.arrayToEnum(["invalid_type","invalid_literal","custom","invalid_union","invalid_union_discriminator","invalid_enum_value","unrecognized_keys","invalid_arguments","invalid_return_type","invalid_date","invalid_string","too_small","too_big","invalid_intersection_types","not_multiple_of","not_finite"]);class py extends Error{constructor(e){super(),this.issues=[],this.addIssue=e=>{this.issues=[...this.issues,e]},this.addIssues=(e=[])=>{this.issues=[...this.issues,...e]};const t=new.target.prototype;Object.setPrototypeOf?Object.setPrototypeOf(this,t):this.__proto__=t,this.name="ZodError",this.issues=e}get errors(){return this.issues}format(e){const t=e||function(e){return e.message},n={_errors:[]},i=e=>{for(const r of e.issues)if("invalid_union"===r.code)r.unionErrors.map(i);else if("invalid_return_type"===r.code)i(r.returnTypeError);else if("invalid_arguments"===r.code)i(r.argumentsError);else if(0===r.path.length)n._errors.push(t(r));else{let e=n,i=0;for(;i<r.path.length;){const n=r.path[i];i===r.path.length-1?(e[n]=e[n]||{_errors:[]},e[n]._errors.push(t(r))):e[n]=e[n]||{_errors:[]},e=e[n],i++}}};return i(this),n}toString(){return this.message}get message(){return JSON.stringify(this.issues,oy.jsonStringifyReplacer,2)}get isEmpty(){return 0===this.issues.length}flatten(e=(e=>e.message)){const t={},n=[];for(const i of this.issues)i.path.length>0?(t[i.path[0]]=t[i.path[0]]||[],t[i.path[0]].push(e(i))):n.push(e(i));return{formErrors:n,fieldErrors:t}}get formErrors(){return this.flatten()}}py.create=e=>new py(e);const hy=(e,t)=>{let n;switch(e.code){case dy.invalid_type:n=e.received===cy.undefined?"Required":`Expected ${e.expected}, received ${e.received}`;break;case dy.invalid_literal:n=`Invalid literal value, expected ${JSON.stringify(e.expected,oy.jsonStringifyReplacer)}`;break;case dy.unrecognized_keys:n=`Unrecognized key(s) in object: ${oy.joinValues(e.keys,", ")}`;break;case dy.invalid_union:n="Invalid input";break;case dy.invalid_union_discriminator:n=`Invalid discriminator value. Expected ${oy.joinValues(e.options)}`;break;case dy.invalid_enum_value:n=`Invalid enum value. Expected ${oy.joinValues(e.options)}, received '${e.received}'`;break;case dy.invalid_arguments:n="Invalid function arguments";break;case dy.invalid_return_type:n="Invalid function return type";break;case dy.invalid_date:n="Invalid date";break;case dy.invalid_string:"object"==typeof e.validation?"includes"in e.validation?(n=`Invalid input: must include "${e.validation.includes}"`,"number"==typeof e.validation.position&&(n=`${n} at one or more positions greater than or equal to ${e.validation.position}`)):"startsWith"in e.validation?n=`Invalid input: must start with "${e.validation.startsWith}"`:"endsWith"in e.validation?n=`Invalid input: must end with "${e.validation.endsWith}"`:oy.assertNever(e.validation):n="regex"!==e.validation?`Invalid ${e.validation}`:"Invalid";break;case dy.too_small:n="array"===e.type?`Array must contain ${e.exact?"exactly":e.inclusive?"at least":"more than"} ${e.minimum} element(s)`:"string"===e.type?`String must contain ${e.exact?"exactly":e.inclusive?"at least":"over"} ${e.minimum} character(s)`:"number"===e.type?`Number must be ${e.exact?"exactly equal to ":e.inclusive?"greater than or equal to ":"greater than "}${e.minimum}`:"date"===e.type?`Date must be ${e.exact?"exactly equal to ":e.inclusive?"greater than or equal to ":"greater than "}${new Date(Number(e.minimum))}`:"Invalid input";break;case dy.too_big:n="array"===e.type?`Array must contain ${e.exact?"exactly":e.inclusive?"at most":"less than"} ${e.maximum} element(s)`:"string"===e.type?`String must contain ${e.exact?"exactly":e.inclusive?"at most":"under"} ${e.maximum} character(s)`:"number"===e.type?`Number must be ${e.exact?"exactly":e.inclusive?"less than or equal to":"less than"} ${e.maximum}`:"bigint"===e.type?`BigInt must be ${e.exact?"exactly":e.inclusive?"less than or equal to":"less than"} ${e.maximum}`:"date"===e.type?`Date must be ${e.exact?"exactly":e.inclusive?"smaller than or equal to":"smaller than"} ${new Date(Number(e.maximum))}`:"Invalid input";break;case dy.custom:n="Invalid input";break;case dy.invalid_intersection_types:n="Intersection results could not be merged";break;case dy.not_multiple_of:n=`Number must be a multiple of ${e.multipleOf}`;break;case dy.not_finite:n="Number must be finite";break;default:n=t.defaultError,oy.assertNever(e)}return{message:n}};let fy=hy;function my(){return fy}const gy=e=>{const{data:t,path:n,errorMaps:i,issueData:r}=e,a=[...n,...r.path||[]],o={...r,path:a};let s="";const l=i.filter((e=>!!e)).slice().reverse();for(const c of l)s=c(o,{data:t,defaultError:s}).message;return{...r,path:a,message:r.message||s}};function wy(e,t){const n=gy({issueData:t,data:e.data,path:e.path,errorMaps:[e.common.contextualErrorMap,e.schemaErrorMap,my(),hy].filter((e=>!!e))});e.common.issues.push(n)}class yy{constructor(){this.value="valid"}dirty(){"valid"===this.value&&(this.value="dirty")}abort(){"aborted"!==this.value&&(this.value="aborted")}static mergeArray(e,t){const n=[];for(const i of t){if("aborted"===i.status)return vy;"dirty"===i.status&&e.dirty(),n.push(i.value)}return{status:e.value,value:n}}static async mergeObjectAsync(e,t){const n=[];for(const i of t)n.push({key:await i.key,value:await i.value});return yy.mergeObjectSync(e,n)}static mergeObjectSync(e,t){const n={};for(const i of t){const{key:t,value:r}=i;if("aborted"===t.status)return vy;if("aborted"===r.status)return vy;"dirty"===t.status&&e.dirty(),"dirty"===r.status&&e.dirty(),"__proto__"===t.value||void 0===r.value&&!i.alwaysSet||(n[t.value]=r.value)}return{status:e.value,value:n}}}const vy=Object.freeze({status:"aborted"}),by=e=>({status:"dirty",value:e}),xy=e=>({status:"valid",value:e}),Cy=e=>"aborted"===e.status,_y=e=>"dirty"===e.status,Ey=e=>"valid"===e.status,ky=e=>"undefined"!=typeof Promise&&e instanceof Promise;var Ty,Ay;(Ay=Ty||(Ty={})).errToObj=e=>"string"==typeof e?{message:e}:e||{},Ay.toString=e=>"string"==typeof e?e:null==e?void 0:e.message;class $y{constructor(e,t,n,i){this._cachedPath=[],this.parent=e,this.data=t,this._path=n,this._key=i}get path(){return this._cachedPath.length||(this._key instanceof Array?this._cachedPath.push(...this._path,...this._key):this._cachedPath.push(...this._path,this._key)),this._cachedPath}}const Iy=(e,t)=>{if(Ey(t))return{success:!0,data:t.value};if(!e.common.issues.length)throw new Error("Validation failed but no issues detected.");return{success:!1,get error(){if(this._error)return this._error;const t=new py(e.common.issues);return this._error=t,this._error}}};function Py(e){if(!e)return{};const{errorMap:t,invalid_type_error:n,required_error:i,description:r}=e;if(t&&(n||i))throw new Error('Can\'t use "invalid_type_error" or "required_error" in conjunction with custom error map.');if(t)return{errorMap:t,description:r};return{errorMap:(e,t)=>"invalid_type"!==e.code?{message:t.defaultError}:void 0===t.data?{message:null!=i?i:t.defaultError}:{message:null!=n?n:t.defaultError},description:r}}class Sy{constructor(e){this.spa=this.safeParseAsync,this._def=e,this.parse=this.parse.bind(this),this.safeParse=this.safeParse.bind(this),this.parseAsync=this.parseAsync.bind(this),this.safeParseAsync=this.safeParseAsync.bind(this),this.spa=this.spa.bind(this),this.refine=this.refine.bind(this),this.refinement=this.refinement.bind(this),this.superRefine=this.superRefine.bind(this),this.optional=this.optional.bind(this),this.nullable=this.nullable.bind(this),this.nullish=this.nullish.bind(this),this.array=this.array.bind(this),this.promise=this.promise.bind(this),this.or=this.or.bind(this),this.and=this.and.bind(this),this.transform=this.transform.bind(this),this.brand=this.brand.bind(this),this.default=this.default.bind(this),this.catch=this.catch.bind(this),this.describe=this.describe.bind(this),this.pipe=this.pipe.bind(this),this.readonly=this.readonly.bind(this),this.isNullable=this.isNullable.bind(this),this.isOptional=this.isOptional.bind(this)}get description(){return this._def.description}_getType(e){return uy(e.data)}_getOrReturnCtx(e,t){return t||{common:e.parent.common,data:e.data,parsedType:uy(e.data),schemaErrorMap:this._def.errorMap,path:e.path,parent:e.parent}}_processInputParams(e){return{status:new yy,ctx:{common:e.parent.common,data:e.data,parsedType:uy(e.data),schemaErrorMap:this._def.errorMap,path:e.path,parent:e.parent}}}_parseSync(e){const t=this._parse(e);if(ky(t))throw new Error("Synchronous parse encountered promise.");return t}_parseAsync(e){const t=this._parse(e);return Promise.resolve(t)}parse(e,t){const n=this.safeParse(e,t);if(n.success)return n.data;throw n.error}safeParse(e,t){var n;const i={common:{issues:[],async:null!==(n=null==t?void 0:t.async)&&void 0!==n&&n,contextualErrorMap:null==t?void 0:t.errorMap},path:(null==t?void 0:t.path)||[],schemaErrorMap:this._def.errorMap,parent:null,data:e,parsedType:uy(e)},r=this._parseSync({data:e,path:i.path,parent:i});return Iy(i,r)}async parseAsync(e,t){const n=await this.safeParseAsync(e,t);if(n.success)return n.data;throw n.error}async safeParseAsync(e,t){const n={common:{issues:[],contextualErrorMap:null==t?void 0:t.errorMap,async:!0},path:(null==t?void 0:t.path)||[],schemaErrorMap:this._def.errorMap,parent:null,data:e,parsedType:uy(e)},i=this._parse({data:e,path:n.path,parent:n}),r=await(ky(i)?i:Promise.resolve(i));return Iy(n,r)}refine(e,t){const n=e=>"string"==typeof t||void 0===t?{message:t}:"function"==typeof t?t(e):t;return this._refinement(((t,i)=>{const r=e(t),a=()=>i.addIssue({code:dy.custom,...n(t)});return"undefined"!=typeof Promise&&r instanceof Promise?r.then((e=>!!e||(a(),!1))):!!r||(a(),!1)}))}refinement(e,t){return this._refinement(((n,i)=>!!e(n)||(i.addIssue("function"==typeof t?t(n,i):t),!1)))}_refinement(e){return new yv({schema:this,typeName:Pv.ZodEffects,effect:{type:"refinement",refinement:e}})}superRefine(e){return this._refinement(e)}optional(){return vv.create(this,this._def)}nullable(){return bv.create(this,this._def)}nullish(){return this.nullable().optional()}array(){return Xy.create(this,this._def)}promise(){return wv.create(this,this._def)}or(e){return nv.create([this,e],this._def)}and(e){return ov.create(this,e,this._def)}transform(e){return new yv({...Py(this._def),schema:this,typeName:Pv.ZodEffects,effect:{type:"transform",transform:e}})}default(e){const t="function"==typeof e?e:()=>e;return new xv({...Py(this._def),innerType:this,defaultValue:t,typeName:Pv.ZodDefault})}brand(){return new kv({typeName:Pv.ZodBranded,type:this,...Py(this._def)})}catch(e){const t="function"==typeof e?e:()=>e;return new Cv({...Py(this._def),innerType:this,catchValue:t,typeName:Pv.ZodCatch})}describe(e){return new(0,this.constructor)({...this._def,description:e})}pipe(e){return Tv.create(this,e)}readonly(){return Av.create(this)}isOptional(){return this.safeParse(void 0).success}isNullable(){return this.safeParse(null).success}}const Ry=/^c[^\s-]{8,}$/i,Oy=/^[a-z][a-z0-9]*$/,Ny=/^[0-9A-HJKMNP-TV-Z]{26}$/,My=/^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/i,jy=/^(?!\.)(?!.*\.\.)([A-Z0-9_+-\.]*)[A-Z0-9_+-]@([A-Z0-9][A-Z0-9\-]*\.)+[A-Z]{2,}$/i;let Uy;const Dy=/^(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))$/,By=/^(([a-f0-9]{1,4}:){7}|::([a-f0-9]{1,4}:){0,6}|([a-f0-9]{1,4}:){1}:([a-f0-9]{1,4}:){0,5}|([a-f0-9]{1,4}:){2}:([a-f0-9]{1,4}:){0,4}|([a-f0-9]{1,4}:){3}:([a-f0-9]{1,4}:){0,3}|([a-f0-9]{1,4}:){4}:([a-f0-9]{1,4}:){0,2}|([a-f0-9]{1,4}:){5}:([a-f0-9]{1,4}:){0,1})([a-f0-9]{1,4}|(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2})))$/;class Ly extends Sy{_parse(e){this._def.coerce&&(e.data=String(e.data));if(this._getType(e)!==cy.string){const t=this._getOrReturnCtx(e);return wy(t,{code:dy.invalid_type,expected:cy.string,received:t.parsedType}),vy}const t=new yy;let n;for(const s of this._def.checks)if("min"===s.kind)e.data.length<s.value&&(n=this._getOrReturnCtx(e,n),wy(n,{code:dy.too_small,minimum:s.value,type:"string",inclusive:!0,exact:!1,message:s.message}),t.dirty());else if("max"===s.kind)e.data.length>s.value&&(n=this._getOrReturnCtx(e,n),wy(n,{code:dy.too_big,maximum:s.value,type:"string",inclusive:!0,exact:!1,message:s.message}),t.dirty());else if("length"===s.kind){const i=e.data.length>s.value,r=e.data.length<s.value;(i||r)&&(n=this._getOrReturnCtx(e,n),i?wy(n,{code:dy.too_big,maximum:s.value,type:"string",inclusive:!0,exact:!0,message:s.message}):r&&wy(n,{code:dy.too_small,minimum:s.value,type:"string",inclusive:!0,exact:!0,message:s.message}),t.dirty())}else if("email"===s.kind)jy.test(e.data)||(n=this._getOrReturnCtx(e,n),wy(n,{validation:"email",code:dy.invalid_string,message:s.message}),t.dirty());else if("emoji"===s.kind)Uy||(Uy=new RegExp("^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$","u")),Uy.test(e.data)||(n=this._getOrReturnCtx(e,n),wy(n,{validation:"emoji",code:dy.invalid_string,message:s.message}),t.dirty());else if("uuid"===s.kind)My.test(e.data)||(n=this._getOrReturnCtx(e,n),wy(n,{validation:"uuid",code:dy.invalid_string,message:s.message}),t.dirty());else if("cuid"===s.kind)Ry.test(e.data)||(n=this._getOrReturnCtx(e,n),wy(n,{validation:"cuid",code:dy.invalid_string,message:s.message}),t.dirty());else if("cuid2"===s.kind)Oy.test(e.data)||(n=this._getOrReturnCtx(e,n),wy(n,{validation:"cuid2",code:dy.invalid_string,message:s.message}),t.dirty());else if("ulid"===s.kind)Ny.test(e.data)||(n=this._getOrReturnCtx(e,n),wy(n,{validation:"ulid",code:dy.invalid_string,message:s.message}),t.dirty());else if("url"===s.kind)try{new URL(e.data)}catch(o){n=this._getOrReturnCtx(e,n),wy(n,{validation:"url",code:dy.invalid_string,message:s.message}),t.dirty()}else if("regex"===s.kind){s.regex.lastIndex=0;s.regex.test(e.data)||(n=this._getOrReturnCtx(e,n),wy(n,{validation:"regex",code:dy.invalid_string,message:s.message}),t.dirty())}else if("trim"===s.kind)e.data=e.data.trim();else if("includes"===s.kind)e.data.includes(s.value,s.position)||(n=this._getOrReturnCtx(e,n),wy(n,{code:dy.invalid_string,validation:{includes:s.value,position:s.position},message:s.message}),t.dirty());else if("toLowerCase"===s.kind)e.data=e.data.toLowerCase();else if("toUpperCase"===s.kind)e.data=e.data.toUpperCase();else if("startsWith"===s.kind)e.data.startsWith(s.value)||(n=this._getOrReturnCtx(e,n),wy(n,{code:dy.invalid_string,validation:{startsWith:s.value},message:s.message}),t.dirty());else if("endsWith"===s.kind)e.data.endsWith(s.value)||(n=this._getOrReturnCtx(e,n),wy(n,{code:dy.invalid_string,validation:{endsWith:s.value},message:s.message}),t.dirty());else if("datetime"===s.kind){((a=s).precision?a.offset?new RegExp(`^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\.\\d{${a.precision}}(([+-]\\d{2}(:?\\d{2})?)|Z)$`):new RegExp(`^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\.\\d{${a.precision}}Z$`):0===a.precision?a.offset?new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(([+-]\\d{2}(:?\\d{2})?)|Z)$"):new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}Z$"):a.offset?new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?(([+-]\\d{2}(:?\\d{2})?)|Z)$"):new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?Z$")).test(e.data)||(n=this._getOrReturnCtx(e,n),wy(n,{code:dy.invalid_string,validation:"datetime",message:s.message}),t.dirty())}else"ip"===s.kind?(i=e.data,("v4"!==(r=s.version)&&r||!Dy.test(i))&&("v6"!==r&&r||!By.test(i))&&(n=this._getOrReturnCtx(e,n),wy(n,{validation:"ip",code:dy.invalid_string,message:s.message}),t.dirty())):oy.assertNever(s);var i,r,a;return{status:t.value,value:e.data}}_regex(e,t,n){return this.refinement((t=>e.test(t)),{validation:t,code:dy.invalid_string,...Ty.errToObj(n)})}_addCheck(e){return new Ly({...this._def,checks:[...this._def.checks,e]})}email(e){return this._addCheck({kind:"email",...Ty.errToObj(e)})}url(e){return this._addCheck({kind:"url",...Ty.errToObj(e)})}emoji(e){return this._addCheck({kind:"emoji",...Ty.errToObj(e)})}uuid(e){return this._addCheck({kind:"uuid",...Ty.errToObj(e)})}cuid(e){return this._addCheck({kind:"cuid",...Ty.errToObj(e)})}cuid2(e){return this._addCheck({kind:"cuid2",...Ty.errToObj(e)})}ulid(e){return this._addCheck({kind:"ulid",...Ty.errToObj(e)})}ip(e){return this._addCheck({kind:"ip",...Ty.errToObj(e)})}datetime(e){var t;return"string"==typeof e?this._addCheck({kind:"datetime",precision:null,offset:!1,message:e}):this._addCheck({kind:"datetime",precision:void 0===(null==e?void 0:e.precision)?null:null==e?void 0:e.precision,offset:null!==(t=null==e?void 0:e.offset)&&void 0!==t&&t,...Ty.errToObj(null==e?void 0:e.message)})}regex(e,t){return this._addCheck({kind:"regex",regex:e,...Ty.errToObj(t)})}includes(e,t){return this._addCheck({kind:"includes",value:e,position:null==t?void 0:t.position,...Ty.errToObj(null==t?void 0:t.message)})}startsWith(e,t){return this._addCheck({kind:"startsWith",value:e,...Ty.errToObj(t)})}endsWith(e,t){return this._addCheck({kind:"endsWith",value:e,...Ty.errToObj(t)})}min(e,t){return this._addCheck({kind:"min",value:e,...Ty.errToObj(t)})}max(e,t){return this._addCheck({kind:"max",value:e,...Ty.errToObj(t)})}length(e,t){return this._addCheck({kind:"length",value:e,...Ty.errToObj(t)})}nonempty(e){return this.min(1,Ty.errToObj(e))}trim(){return new Ly({...this._def,checks:[...this._def.checks,{kind:"trim"}]})}toLowerCase(){return new Ly({...this._def,checks:[...this._def.checks,{kind:"toLowerCase"}]})}toUpperCase(){return new Ly({...this._def,checks:[...this._def.checks,{kind:"toUpperCase"}]})}get isDatetime(){return!!this._def.checks.find((e=>"datetime"===e.kind))}get isEmail(){return!!this._def.checks.find((e=>"email"===e.kind))}get isURL(){return!!this._def.checks.find((e=>"url"===e.kind))}get isEmoji(){return!!this._def.checks.find((e=>"emoji"===e.kind))}get isUUID(){return!!this._def.checks.find((e=>"uuid"===e.kind))}get isCUID(){return!!this._def.checks.find((e=>"cuid"===e.kind))}get isCUID2(){return!!this._def.checks.find((e=>"cuid2"===e.kind))}get isULID(){return!!this._def.checks.find((e=>"ulid"===e.kind))}get isIP(){return!!this._def.checks.find((e=>"ip"===e.kind))}get minLength(){let e=null;for(const t of this._def.checks)"min"===t.kind&&(null===e||t.value>e)&&(e=t.value);return e}get maxLength(){let e=null;for(const t of this._def.checks)"max"===t.kind&&(null===e||t.value<e)&&(e=t.value);return e}}function zy(e,t){const n=(e.toString().split(".")[1]||"").length,i=(t.toString().split(".")[1]||"").length,r=n>i?n:i;return parseInt(e.toFixed(r).replace(".",""))%parseInt(t.toFixed(r).replace(".",""))/Math.pow(10,r)}Ly.create=e=>{var t;return new Ly({checks:[],typeName:Pv.ZodString,coerce:null!==(t=null==e?void 0:e.coerce)&&void 0!==t&&t,...Py(e)})};class Fy extends Sy{constructor(){super(...arguments),this.min=this.gte,this.max=this.lte,this.step=this.multipleOf}_parse(e){this._def.coerce&&(e.data=Number(e.data));if(this._getType(e)!==cy.number){const t=this._getOrReturnCtx(e);return wy(t,{code:dy.invalid_type,expected:cy.number,received:t.parsedType}),vy}let t;const n=new yy;for(const i of this._def.checks)if("int"===i.kind)oy.isInteger(e.data)||(t=this._getOrReturnCtx(e,t),wy(t,{code:dy.invalid_type,expected:"integer",received:"float",message:i.message}),n.dirty());else if("min"===i.kind){(i.inclusive?e.data<i.value:e.data<=i.value)&&(t=this._getOrReturnCtx(e,t),wy(t,{code:dy.too_small,minimum:i.value,type:"number",inclusive:i.inclusive,exact:!1,message:i.message}),n.dirty())}else if("max"===i.kind){(i.inclusive?e.data>i.value:e.data>=i.value)&&(t=this._getOrReturnCtx(e,t),wy(t,{code:dy.too_big,maximum:i.value,type:"number",inclusive:i.inclusive,exact:!1,message:i.message}),n.dirty())}else"multipleOf"===i.kind?0!==zy(e.data,i.value)&&(t=this._getOrReturnCtx(e,t),wy(t,{code:dy.not_multiple_of,multipleOf:i.value,message:i.message}),n.dirty()):"finite"===i.kind?Number.isFinite(e.data)||(t=this._getOrReturnCtx(e,t),wy(t,{code:dy.not_finite,message:i.message}),n.dirty()):oy.assertNever(i);return{status:n.value,value:e.data}}gte(e,t){return this.setLimit("min",e,!0,Ty.toString(t))}gt(e,t){return this.setLimit("min",e,!1,Ty.toString(t))}lte(e,t){return this.setLimit("max",e,!0,Ty.toString(t))}lt(e,t){return this.setLimit("max",e,!1,Ty.toString(t))}setLimit(e,t,n,i){return new Fy({...this._def,checks:[...this._def.checks,{kind:e,value:t,inclusive:n,message:Ty.toString(i)}]})}_addCheck(e){return new Fy({...this._def,checks:[...this._def.checks,e]})}int(e){return this._addCheck({kind:"int",message:Ty.toString(e)})}positive(e){return this._addCheck({kind:"min",value:0,inclusive:!1,message:Ty.toString(e)})}negative(e){return this._addCheck({kind:"max",value:0,inclusive:!1,message:Ty.toString(e)})}nonpositive(e){return this._addCheck({kind:"max",value:0,inclusive:!0,message:Ty.toString(e)})}nonnegative(e){return this._addCheck({kind:"min",value:0,inclusive:!0,message:Ty.toString(e)})}multipleOf(e,t){return this._addCheck({kind:"multipleOf",value:e,message:Ty.toString(t)})}finite(e){return this._addCheck({kind:"finite",message:Ty.toString(e)})}safe(e){return this._addCheck({kind:"min",inclusive:!0,value:Number.MIN_SAFE_INTEGER,message:Ty.toString(e)})._addCheck({kind:"max",inclusive:!0,value:Number.MAX_SAFE_INTEGER,message:Ty.toString(e)})}get minValue(){let e=null;for(const t of this._def.checks)"min"===t.kind&&(null===e||t.value>e)&&(e=t.value);return e}get maxValue(){let e=null;for(const t of this._def.checks)"max"===t.kind&&(null===e||t.value<e)&&(e=t.value);return e}get isInt(){return!!this._def.checks.find((e=>"int"===e.kind||"multipleOf"===e.kind&&oy.isInteger(e.value)))}get isFinite(){let e=null,t=null;for(const n of this._def.checks){if("finite"===n.kind||"int"===n.kind||"multipleOf"===n.kind)return!0;"min"===n.kind?(null===t||n.value>t)&&(t=n.value):"max"===n.kind&&(null===e||n.value<e)&&(e=n.value)}return Number.isFinite(t)&&Number.isFinite(e)}}Fy.create=e=>new Fy({checks:[],typeName:Pv.ZodNumber,coerce:(null==e?void 0:e.coerce)||!1,...Py(e)});class Wy extends Sy{constructor(){super(...arguments),this.min=this.gte,this.max=this.lte}_parse(e){this._def.coerce&&(e.data=BigInt(e.data));if(this._getType(e)!==cy.bigint){const t=this._getOrReturnCtx(e);return wy(t,{code:dy.invalid_type,expected:cy.bigint,received:t.parsedType}),vy}let t;const n=new yy;for(const i of this._def.checks)if("min"===i.kind){(i.inclusive?e.data<i.value:e.data<=i.value)&&(t=this._getOrReturnCtx(e,t),wy(t,{code:dy.too_small,type:"bigint",minimum:i.value,inclusive:i.inclusive,message:i.message}),n.dirty())}else if("max"===i.kind){(i.inclusive?e.data>i.value:e.data>=i.value)&&(t=this._getOrReturnCtx(e,t),wy(t,{code:dy.too_big,type:"bigint",maximum:i.value,inclusive:i.inclusive,message:i.message}),n.dirty())}else"multipleOf"===i.kind?e.data%i.value!==BigInt(0)&&(t=this._getOrReturnCtx(e,t),wy(t,{code:dy.not_multiple_of,multipleOf:i.value,message:i.message}),n.dirty()):oy.assertNever(i);return{status:n.value,value:e.data}}gte(e,t){return this.setLimit("min",e,!0,Ty.toString(t))}gt(e,t){return this.setLimit("min",e,!1,Ty.toString(t))}lte(e,t){return this.setLimit("max",e,!0,Ty.toString(t))}lt(e,t){return this.setLimit("max",e,!1,Ty.toString(t))}setLimit(e,t,n,i){return new Wy({...this._def,checks:[...this._def.checks,{kind:e,value:t,inclusive:n,message:Ty.toString(i)}]})}_addCheck(e){return new Wy({...this._def,checks:[...this._def.checks,e]})}positive(e){return this._addCheck({kind:"min",value:BigInt(0),inclusive:!1,message:Ty.toString(e)})}negative(e){return this._addCheck({kind:"max",value:BigInt(0),inclusive:!1,message:Ty.toString(e)})}nonpositive(e){return this._addCheck({kind:"max",value:BigInt(0),inclusive:!0,message:Ty.toString(e)})}nonnegative(e){return this._addCheck({kind:"min",value:BigInt(0),inclusive:!0,message:Ty.toString(e)})}multipleOf(e,t){return this._addCheck({kind:"multipleOf",value:e,message:Ty.toString(t)})}get minValue(){let e=null;for(const t of this._def.checks)"min"===t.kind&&(null===e||t.value>e)&&(e=t.value);return e}get maxValue(){let e=null;for(const t of this._def.checks)"max"===t.kind&&(null===e||t.value<e)&&(e=t.value);return e}}Wy.create=e=>{var t;return new Wy({checks:[],typeName:Pv.ZodBigInt,coerce:null!==(t=null==e?void 0:e.coerce)&&void 0!==t&&t,...Py(e)})};class Hy extends Sy{_parse(e){this._def.coerce&&(e.data=Boolean(e.data));if(this._getType(e)!==cy.boolean){const t=this._getOrReturnCtx(e);return wy(t,{code:dy.invalid_type,expected:cy.boolean,received:t.parsedType}),vy}return xy(e.data)}}Hy.create=e=>new Hy({typeName:Pv.ZodBoolean,coerce:(null==e?void 0:e.coerce)||!1,...Py(e)});class Zy extends Sy{_parse(e){this._def.coerce&&(e.data=new Date(e.data));if(this._getType(e)!==cy.date){const t=this._getOrReturnCtx(e);return wy(t,{code:dy.invalid_type,expected:cy.date,received:t.parsedType}),vy}if(isNaN(e.data.getTime())){return wy(this._getOrReturnCtx(e),{code:dy.invalid_date}),vy}const t=new yy;let n;for(const i of this._def.checks)"min"===i.kind?e.data.getTime()<i.value&&(n=this._getOrReturnCtx(e,n),wy(n,{code:dy.too_small,message:i.message,inclusive:!0,exact:!1,minimum:i.value,type:"date"}),t.dirty()):"max"===i.kind?e.data.getTime()>i.value&&(n=this._getOrReturnCtx(e,n),wy(n,{code:dy.too_big,message:i.message,inclusive:!0,exact:!1,maximum:i.value,type:"date"}),t.dirty()):oy.assertNever(i);return{status:t.value,value:new Date(e.data.getTime())}}_addCheck(e){return new Zy({...this._def,checks:[...this._def.checks,e]})}min(e,t){return this._addCheck({kind:"min",value:e.getTime(),message:Ty.toString(t)})}max(e,t){return this._addCheck({kind:"max",value:e.getTime(),message:Ty.toString(t)})}get minDate(){let e=null;for(const t of this._def.checks)"min"===t.kind&&(null===e||t.value>e)&&(e=t.value);return null!=e?new Date(e):null}get maxDate(){let e=null;for(const t of this._def.checks)"max"===t.kind&&(null===e||t.value<e)&&(e=t.value);return null!=e?new Date(e):null}}Zy.create=e=>new Zy({checks:[],coerce:(null==e?void 0:e.coerce)||!1,typeName:Pv.ZodDate,...Py(e)});class Vy extends Sy{_parse(e){if(this._getType(e)!==cy.symbol){const t=this._getOrReturnCtx(e);return wy(t,{code:dy.invalid_type,expected:cy.symbol,received:t.parsedType}),vy}return xy(e.data)}}Vy.create=e=>new Vy({typeName:Pv.ZodSymbol,...Py(e)});class Gy extends Sy{_parse(e){if(this._getType(e)!==cy.undefined){const t=this._getOrReturnCtx(e);return wy(t,{code:dy.invalid_type,expected:cy.undefined,received:t.parsedType}),vy}return xy(e.data)}}Gy.create=e=>new Gy({typeName:Pv.ZodUndefined,...Py(e)});class qy extends Sy{_parse(e){if(this._getType(e)!==cy.null){const t=this._getOrReturnCtx(e);return wy(t,{code:dy.invalid_type,expected:cy.null,received:t.parsedType}),vy}return xy(e.data)}}qy.create=e=>new qy({typeName:Pv.ZodNull,...Py(e)});class Ky extends Sy{constructor(){super(...arguments),this._any=!0}_parse(e){return xy(e.data)}}Ky.create=e=>new Ky({typeName:Pv.ZodAny,...Py(e)});class Yy extends Sy{constructor(){super(...arguments),this._unknown=!0}_parse(e){return xy(e.data)}}Yy.create=e=>new Yy({typeName:Pv.ZodUnknown,...Py(e)});class Jy extends Sy{_parse(e){const t=this._getOrReturnCtx(e);return wy(t,{code:dy.invalid_type,expected:cy.never,received:t.parsedType}),vy}}Jy.create=e=>new Jy({typeName:Pv.ZodNever,...Py(e)});class Qy extends Sy{_parse(e){if(this._getType(e)!==cy.undefined){const t=this._getOrReturnCtx(e);return wy(t,{code:dy.invalid_type,expected:cy.void,received:t.parsedType}),vy}return xy(e.data)}}Qy.create=e=>new Qy({typeName:Pv.ZodVoid,...Py(e)});class Xy extends Sy{_parse(e){const{ctx:t,status:n}=this._processInputParams(e),i=this._def;if(t.parsedType!==cy.array)return wy(t,{code:dy.invalid_type,expected:cy.array,received:t.parsedType}),vy;if(null!==i.exactLength){const e=t.data.length>i.exactLength.value,r=t.data.length<i.exactLength.value;(e||r)&&(wy(t,{code:e?dy.too_big:dy.too_small,minimum:r?i.exactLength.value:void 0,maximum:e?i.exactLength.value:void 0,type:"array",inclusive:!0,exact:!0,message:i.exactLength.message}),n.dirty())}if(null!==i.minLength&&t.data.length<i.minLength.value&&(wy(t,{code:dy.too_small,minimum:i.minLength.value,type:"array",inclusive:!0,exact:!1,message:i.minLength.message}),n.dirty()),null!==i.maxLength&&t.data.length>i.maxLength.value&&(wy(t,{code:dy.too_big,maximum:i.maxLength.value,type:"array",inclusive:!0,exact:!1,message:i.maxLength.message}),n.dirty()),t.common.async)return Promise.all([...t.data].map(((e,n)=>i.type._parseAsync(new $y(t,e,t.path,n))))).then((e=>yy.mergeArray(n,e)));const r=[...t.data].map(((e,n)=>i.type._parseSync(new $y(t,e,t.path,n))));return yy.mergeArray(n,r)}get element(){return this._def.type}min(e,t){return new Xy({...this._def,minLength:{value:e,message:Ty.toString(t)}})}max(e,t){return new Xy({...this._def,maxLength:{value:e,message:Ty.toString(t)}})}length(e,t){return new Xy({...this._def,exactLength:{value:e,message:Ty.toString(t)}})}nonempty(e){return this.min(1,e)}}function ev(e){if(e instanceof tv){const t={};for(const n in e.shape){const i=e.shape[n];t[n]=vv.create(ev(i))}return new tv({...e._def,shape:()=>t})}return e instanceof Xy?new Xy({...e._def,type:ev(e.element)}):e instanceof vv?vv.create(ev(e.unwrap())):e instanceof bv?bv.create(ev(e.unwrap())):e instanceof sv?sv.create(e.items.map((e=>ev(e)))):e}Xy.create=(e,t)=>new Xy({type:e,minLength:null,maxLength:null,exactLength:null,typeName:Pv.ZodArray,...Py(t)});class tv extends Sy{constructor(){super(...arguments),this._cached=null,this.nonstrict=this.passthrough,this.augment=this.extend}_getCached(){if(null!==this._cached)return this._cached;const e=this._def.shape(),t=oy.objectKeys(e);return this._cached={shape:e,keys:t}}_parse(e){if(this._getType(e)!==cy.object){const t=this._getOrReturnCtx(e);return wy(t,{code:dy.invalid_type,expected:cy.object,received:t.parsedType}),vy}const{status:t,ctx:n}=this._processInputParams(e),{shape:i,keys:r}=this._getCached(),a=[];if(!(this._def.catchall instanceof Jy&&"strip"===this._def.unknownKeys))for(const s in n.data)r.includes(s)||a.push(s);const o=[];for(const s of r){const e=i[s],t=n.data[s];o.push({key:{status:"valid",value:s},value:e._parse(new $y(n,t,n.path,s)),alwaysSet:s in n.data})}if(this._def.catchall instanceof Jy){const e=this._def.unknownKeys;if("passthrough"===e)for(const t of a)o.push({key:{status:"valid",value:t},value:{status:"valid",value:n.data[t]}});else if("strict"===e)a.length>0&&(wy(n,{code:dy.unrecognized_keys,keys:a}),t.dirty());else if("strip"!==e)throw new Error("Internal ZodObject error: invalid unknownKeys value.")}else{const e=this._def.catchall;for(const t of a){const i=n.data[t];o.push({key:{status:"valid",value:t},value:e._parse(new $y(n,i,n.path,t)),alwaysSet:t in n.data})}}return n.common.async?Promise.resolve().then((async()=>{const e=[];for(const t of o){const n=await t.key;e.push({key:n,value:await t.value,alwaysSet:t.alwaysSet})}return e})).then((e=>yy.mergeObjectSync(t,e))):yy.mergeObjectSync(t,o)}get shape(){return this._def.shape()}strict(e){return Ty.errToObj,new tv({...this._def,unknownKeys:"strict",...void 0!==e?{errorMap:(t,n)=>{var i,r,a,o;const s=null!==(a=null===(r=(i=this._def).errorMap)||void 0===r?void 0:r.call(i,t,n).message)&&void 0!==a?a:n.defaultError;return"unrecognized_keys"===t.code?{message:null!==(o=Ty.errToObj(e).message)&&void 0!==o?o:s}:{message:s}}}:{}})}strip(){return new tv({...this._def,unknownKeys:"strip"})}passthrough(){return new tv({...this._def,unknownKeys:"passthrough"})}extend(e){return new tv({...this._def,shape:()=>({...this._def.shape(),...e})})}merge(e){return new tv({unknownKeys:e._def.unknownKeys,catchall:e._def.catchall,shape:()=>({...this._def.shape(),...e._def.shape()}),typeName:Pv.ZodObject})}setKey(e,t){return this.augment({[e]:t})}catchall(e){return new tv({...this._def,catchall:e})}pick(e){const t={};return oy.objectKeys(e).forEach((n=>{e[n]&&this.shape[n]&&(t[n]=this.shape[n])})),new tv({...this._def,shape:()=>t})}omit(e){const t={};return oy.objectKeys(this.shape).forEach((n=>{e[n]||(t[n]=this.shape[n])})),new tv({...this._def,shape:()=>t})}deepPartial(){return ev(this)}partial(e){const t={};return oy.objectKeys(this.shape).forEach((n=>{const i=this.shape[n];e&&!e[n]?t[n]=i:t[n]=i.optional()})),new tv({...this._def,shape:()=>t})}required(e){const t={};return oy.objectKeys(this.shape).forEach((n=>{if(e&&!e[n])t[n]=this.shape[n];else{let e=this.shape[n];for(;e instanceof vv;)e=e._def.innerType;t[n]=e}})),new tv({...this._def,shape:()=>t})}keyof(){return fv(oy.objectKeys(this.shape))}}tv.create=(e,t)=>new tv({shape:()=>e,unknownKeys:"strip",catchall:Jy.create(),typeName:Pv.ZodObject,...Py(t)}),tv.strictCreate=(e,t)=>new tv({shape:()=>e,unknownKeys:"strict",catchall:Jy.create(),typeName:Pv.ZodObject,...Py(t)}),tv.lazycreate=(e,t)=>new tv({shape:e,unknownKeys:"strip",catchall:Jy.create(),typeName:Pv.ZodObject,...Py(t)});class nv extends Sy{_parse(e){const{ctx:t}=this._processInputParams(e),n=this._def.options;if(t.common.async)return Promise.all(n.map((async e=>{const n={...t,common:{...t.common,issues:[]},parent:null};return{result:await e._parseAsync({data:t.data,path:t.path,parent:n}),ctx:n}}))).then((function(e){for(const t of e)if("valid"===t.result.status)return t.result;for(const i of e)if("dirty"===i.result.status)return t.common.issues.push(...i.ctx.common.issues),i.result;const n=e.map((e=>new py(e.ctx.common.issues)));return wy(t,{code:dy.invalid_union,unionErrors:n}),vy}));{let e;const i=[];for(const a of n){const n={...t,common:{...t.common,issues:[]},parent:null},r=a._parseSync({data:t.data,path:t.path,parent:n});if("valid"===r.status)return r;"dirty"!==r.status||e||(e={result:r,ctx:n}),n.common.issues.length&&i.push(n.common.issues)}if(e)return t.common.issues.push(...e.ctx.common.issues),e.result;const r=i.map((e=>new py(e)));return wy(t,{code:dy.invalid_union,unionErrors:r}),vy}}get options(){return this._def.options}}nv.create=(e,t)=>new nv({options:e,typeName:Pv.ZodUnion,...Py(t)});const iv=e=>e instanceof pv?iv(e.schema):e instanceof yv?iv(e.innerType()):e instanceof hv?[e.value]:e instanceof mv?e.options:e instanceof gv?Object.keys(e.enum):e instanceof xv?iv(e._def.innerType):e instanceof Gy?[void 0]:e instanceof qy?[null]:null;class rv extends Sy{_parse(e){const{ctx:t}=this._processInputParams(e);if(t.parsedType!==cy.object)return wy(t,{code:dy.invalid_type,expected:cy.object,received:t.parsedType}),vy;const n=this.discriminator,i=t.data[n],r=this.optionsMap.get(i);return r?t.common.async?r._parseAsync({data:t.data,path:t.path,parent:t}):r._parseSync({data:t.data,path:t.path,parent:t}):(wy(t,{code:dy.invalid_union_discriminator,options:Array.from(this.optionsMap.keys()),path:[n]}),vy)}get discriminator(){return this._def.discriminator}get options(){return this._def.options}get optionsMap(){return this._def.optionsMap}static create(e,t,n){const i=new Map;for(const r of t){const t=iv(r.shape[e]);if(!t)throw new Error(`A discriminator value for key \`${e}\` could not be extracted from all schema options`);for(const n of t){if(i.has(n))throw new Error(`Discriminator property ${String(e)} has duplicate value ${String(n)}`);i.set(n,r)}}return new rv({typeName:Pv.ZodDiscriminatedUnion,discriminator:e,options:t,optionsMap:i,...Py(n)})}}function av(e,t){const n=uy(e),i=uy(t);if(e===t)return{valid:!0,data:e};if(n===cy.object&&i===cy.object){const n=oy.objectKeys(t),i=oy.objectKeys(e).filter((e=>-1!==n.indexOf(e))),r={...e,...t};for(const a of i){const n=av(e[a],t[a]);if(!n.valid)return{valid:!1};r[a]=n.data}return{valid:!0,data:r}}if(n===cy.array&&i===cy.array){if(e.length!==t.length)return{valid:!1};const n=[];for(let i=0;i<e.length;i++){const r=av(e[i],t[i]);if(!r.valid)return{valid:!1};n.push(r.data)}return{valid:!0,data:n}}return n===cy.date&&i===cy.date&&+e==+t?{valid:!0,data:e}:{valid:!1}}class ov extends Sy{_parse(e){const{status:t,ctx:n}=this._processInputParams(e),i=(e,i)=>{if(Cy(e)||Cy(i))return vy;const r=av(e.value,i.value);return r.valid?((_y(e)||_y(i))&&t.dirty(),{status:t.value,value:r.data}):(wy(n,{code:dy.invalid_intersection_types}),vy)};return n.common.async?Promise.all([this._def.left._parseAsync({data:n.data,path:n.path,parent:n}),this._def.right._parseAsync({data:n.data,path:n.path,parent:n})]).then((([e,t])=>i(e,t))):i(this._def.left._parseSync({data:n.data,path:n.path,parent:n}),this._def.right._parseSync({data:n.data,path:n.path,parent:n}))}}ov.create=(e,t,n)=>new ov({left:e,right:t,typeName:Pv.ZodIntersection,...Py(n)});class sv extends Sy{_parse(e){const{status:t,ctx:n}=this._processInputParams(e);if(n.parsedType!==cy.array)return wy(n,{code:dy.invalid_type,expected:cy.array,received:n.parsedType}),vy;if(n.data.length<this._def.items.length)return wy(n,{code:dy.too_small,minimum:this._def.items.length,inclusive:!0,exact:!1,type:"array"}),vy;!this._def.rest&&n.data.length>this._def.items.length&&(wy(n,{code:dy.too_big,maximum:this._def.items.length,inclusive:!0,exact:!1,type:"array"}),t.dirty());const i=[...n.data].map(((e,t)=>{const i=this._def.items[t]||this._def.rest;return i?i._parse(new $y(n,e,n.path,t)):null})).filter((e=>!!e));return n.common.async?Promise.all(i).then((e=>yy.mergeArray(t,e))):yy.mergeArray(t,i)}get items(){return this._def.items}rest(e){return new sv({...this._def,rest:e})}}sv.create=(e,t)=>{if(!Array.isArray(e))throw new Error("You must pass an array of schemas to z.tuple([ ... ])");return new sv({items:e,typeName:Pv.ZodTuple,rest:null,...Py(t)})};class lv extends Sy{get keySchema(){return this._def.keyType}get valueSchema(){return this._def.valueType}_parse(e){const{status:t,ctx:n}=this._processInputParams(e);if(n.parsedType!==cy.object)return wy(n,{code:dy.invalid_type,expected:cy.object,received:n.parsedType}),vy;const i=[],r=this._def.keyType,a=this._def.valueType;for(const o in n.data)i.push({key:r._parse(new $y(n,o,n.path,o)),value:a._parse(new $y(n,n.data[o],n.path,o))});return n.common.async?yy.mergeObjectAsync(t,i):yy.mergeObjectSync(t,i)}get element(){return this._def.valueType}static create(e,t,n){return new lv(t instanceof Sy?{keyType:e,valueType:t,typeName:Pv.ZodRecord,...Py(n)}:{keyType:Ly.create(),valueType:e,typeName:Pv.ZodRecord,...Py(t)})}}class cv extends Sy{get keySchema(){return this._def.keyType}get valueSchema(){return this._def.valueType}_parse(e){const{status:t,ctx:n}=this._processInputParams(e);if(n.parsedType!==cy.map)return wy(n,{code:dy.invalid_type,expected:cy.map,received:n.parsedType}),vy;const i=this._def.keyType,r=this._def.valueType,a=[...n.data.entries()].map((([e,t],a)=>({key:i._parse(new $y(n,e,n.path,[a,"key"])),value:r._parse(new $y(n,t,n.path,[a,"value"]))})));if(n.common.async){const e=new Map;return Promise.resolve().then((async()=>{for(const n of a){const i=await n.key,r=await n.value;if("aborted"===i.status||"aborted"===r.status)return vy;"dirty"!==i.status&&"dirty"!==r.status||t.dirty(),e.set(i.value,r.value)}return{status:t.value,value:e}}))}{const e=new Map;for(const n of a){const i=n.key,r=n.value;if("aborted"===i.status||"aborted"===r.status)return vy;"dirty"!==i.status&&"dirty"!==r.status||t.dirty(),e.set(i.value,r.value)}return{status:t.value,value:e}}}}cv.create=(e,t,n)=>new cv({valueType:t,keyType:e,typeName:Pv.ZodMap,...Py(n)});class uv extends Sy{_parse(e){const{status:t,ctx:n}=this._processInputParams(e);if(n.parsedType!==cy.set)return wy(n,{code:dy.invalid_type,expected:cy.set,received:n.parsedType}),vy;const i=this._def;null!==i.minSize&&n.data.size<i.minSize.value&&(wy(n,{code:dy.too_small,minimum:i.minSize.value,type:"set",inclusive:!0,exact:!1,message:i.minSize.message}),t.dirty()),null!==i.maxSize&&n.data.size>i.maxSize.value&&(wy(n,{code:dy.too_big,maximum:i.maxSize.value,type:"set",inclusive:!0,exact:!1,message:i.maxSize.message}),t.dirty());const r=this._def.valueType;function a(e){const n=new Set;for(const i of e){if("aborted"===i.status)return vy;"dirty"===i.status&&t.dirty(),n.add(i.value)}return{status:t.value,value:n}}const o=[...n.data.values()].map(((e,t)=>r._parse(new $y(n,e,n.path,t))));return n.common.async?Promise.all(o).then((e=>a(e))):a(o)}min(e,t){return new uv({...this._def,minSize:{value:e,message:Ty.toString(t)}})}max(e,t){return new uv({...this._def,maxSize:{value:e,message:Ty.toString(t)}})}size(e,t){return this.min(e,t).max(e,t)}nonempty(e){return this.min(1,e)}}uv.create=(e,t)=>new uv({valueType:e,minSize:null,maxSize:null,typeName:Pv.ZodSet,...Py(t)});class dv extends Sy{constructor(){super(...arguments),this.validate=this.implement}_parse(e){const{ctx:t}=this._processInputParams(e);if(t.parsedType!==cy.function)return wy(t,{code:dy.invalid_type,expected:cy.function,received:t.parsedType}),vy;function n(e,n){return gy({data:e,path:t.path,errorMaps:[t.common.contextualErrorMap,t.schemaErrorMap,my(),hy].filter((e=>!!e)),issueData:{code:dy.invalid_arguments,argumentsError:n}})}function i(e,n){return gy({data:e,path:t.path,errorMaps:[t.common.contextualErrorMap,t.schemaErrorMap,my(),hy].filter((e=>!!e)),issueData:{code:dy.invalid_return_type,returnTypeError:n}})}const r={errorMap:t.common.contextualErrorMap},a=t.data;if(this._def.returns instanceof wv){const e=this;return xy((async function(...t){const o=new py([]),s=await e._def.args.parseAsync(t,r).catch((e=>{throw o.addIssue(n(t,e)),o})),l=await Reflect.apply(a,this,s);return await e._def.returns._def.type.parseAsync(l,r).catch((e=>{throw o.addIssue(i(l,e)),o}))}))}{const e=this;return xy((function(...t){const o=e._def.args.safeParse(t,r);if(!o.success)throw new py([n(t,o.error)]);const s=Reflect.apply(a,this,o.data),l=e._def.returns.safeParse(s,r);if(!l.success)throw new py([i(s,l.error)]);return l.data}))}}parameters(){return this._def.args}returnType(){return this._def.returns}args(...e){return new dv({...this._def,args:sv.create(e).rest(Yy.create())})}returns(e){return new dv({...this._def,returns:e})}implement(e){return this.parse(e)}strictImplement(e){return this.parse(e)}static create(e,t,n){return new dv({args:e||sv.create([]).rest(Yy.create()),returns:t||Yy.create(),typeName:Pv.ZodFunction,...Py(n)})}}class pv extends Sy{get schema(){return this._def.getter()}_parse(e){const{ctx:t}=this._processInputParams(e);return this._def.getter()._parse({data:t.data,path:t.path,parent:t})}}pv.create=(e,t)=>new pv({getter:e,typeName:Pv.ZodLazy,...Py(t)});class hv extends Sy{_parse(e){if(e.data!==this._def.value){const t=this._getOrReturnCtx(e);return wy(t,{received:t.data,code:dy.invalid_literal,expected:this._def.value}),vy}return{status:"valid",value:e.data}}get value(){return this._def.value}}function fv(e,t){return new mv({values:e,typeName:Pv.ZodEnum,...Py(t)})}hv.create=(e,t)=>new hv({value:e,typeName:Pv.ZodLiteral,...Py(t)});class mv extends Sy{_parse(e){if("string"!=typeof e.data){const t=this._getOrReturnCtx(e),n=this._def.values;return wy(t,{expected:oy.joinValues(n),received:t.parsedType,code:dy.invalid_type}),vy}if(-1===this._def.values.indexOf(e.data)){const t=this._getOrReturnCtx(e),n=this._def.values;return wy(t,{received:t.data,code:dy.invalid_enum_value,options:n}),vy}return xy(e.data)}get options(){return this._def.values}get enum(){const e={};for(const t of this._def.values)e[t]=t;return e}get Values(){const e={};for(const t of this._def.values)e[t]=t;return e}get Enum(){const e={};for(const t of this._def.values)e[t]=t;return e}extract(e){return mv.create(e)}exclude(e){return mv.create(this.options.filter((t=>!e.includes(t))))}}mv.create=fv;class gv extends Sy{_parse(e){const t=oy.getValidEnumValues(this._def.values),n=this._getOrReturnCtx(e);if(n.parsedType!==cy.string&&n.parsedType!==cy.number){const e=oy.objectValues(t);return wy(n,{expected:oy.joinValues(e),received:n.parsedType,code:dy.invalid_type}),vy}if(-1===t.indexOf(e.data)){const e=oy.objectValues(t);return wy(n,{received:n.data,code:dy.invalid_enum_value,options:e}),vy}return xy(e.data)}get enum(){return this._def.values}}gv.create=(e,t)=>new gv({values:e,typeName:Pv.ZodNativeEnum,...Py(t)});class wv extends Sy{unwrap(){return this._def.type}_parse(e){const{ctx:t}=this._processInputParams(e);if(t.parsedType!==cy.promise&&!1===t.common.async)return wy(t,{code:dy.invalid_type,expected:cy.promise,received:t.parsedType}),vy;const n=t.parsedType===cy.promise?t.data:Promise.resolve(t.data);return xy(n.then((e=>this._def.type.parseAsync(e,{path:t.path,errorMap:t.common.contextualErrorMap}))))}}wv.create=(e,t)=>new wv({type:e,typeName:Pv.ZodPromise,...Py(t)});class yv extends Sy{innerType(){return this._def.schema}sourceType(){return this._def.schema._def.typeName===Pv.ZodEffects?this._def.schema.sourceType():this._def.schema}_parse(e){const{status:t,ctx:n}=this._processInputParams(e),i=this._def.effect||null,r={addIssue:e=>{wy(n,e),e.fatal?t.abort():t.dirty()},get path(){return n.path}};if(r.addIssue=r.addIssue.bind(r),"preprocess"===i.type){const e=i.transform(n.data,r);return n.common.issues.length?{status:"dirty",value:n.data}:n.common.async?Promise.resolve(e).then((e=>this._def.schema._parseAsync({data:e,path:n.path,parent:n}))):this._def.schema._parseSync({data:e,path:n.path,parent:n})}if("refinement"===i.type){const e=e=>{const t=i.refinement(e,r);if(n.common.async)return Promise.resolve(t);if(t instanceof Promise)throw new Error("Async refinement encountered during synchronous parse operation. Use .parseAsync instead.");return e};if(!1===n.common.async){const i=this._def.schema._parseSync({data:n.data,path:n.path,parent:n});return"aborted"===i.status?vy:("dirty"===i.status&&t.dirty(),e(i.value),{status:t.value,value:i.value})}return this._def.schema._parseAsync({data:n.data,path:n.path,parent:n}).then((n=>"aborted"===n.status?vy:("dirty"===n.status&&t.dirty(),e(n.value).then((()=>({status:t.value,value:n.value}))))))}if("transform"===i.type){if(!1===n.common.async){const e=this._def.schema._parseSync({data:n.data,path:n.path,parent:n});if(!Ey(e))return e;const a=i.transform(e.value,r);if(a instanceof Promise)throw new Error("Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.");return{status:t.value,value:a}}return this._def.schema._parseAsync({data:n.data,path:n.path,parent:n}).then((e=>Ey(e)?Promise.resolve(i.transform(e.value,r)).then((e=>({status:t.value,value:e}))):e))}oy.assertNever(i)}}yv.create=(e,t,n)=>new yv({schema:e,typeName:Pv.ZodEffects,effect:t,...Py(n)}),yv.createWithPreprocess=(e,t,n)=>new yv({schema:t,effect:{type:"preprocess",transform:e},typeName:Pv.ZodEffects,...Py(n)});class vv extends Sy{_parse(e){return this._getType(e)===cy.undefined?xy(void 0):this._def.innerType._parse(e)}unwrap(){return this._def.innerType}}vv.create=(e,t)=>new vv({innerType:e,typeName:Pv.ZodOptional,...Py(t)});class bv extends Sy{_parse(e){return this._getType(e)===cy.null?xy(null):this._def.innerType._parse(e)}unwrap(){return this._def.innerType}}bv.create=(e,t)=>new bv({innerType:e,typeName:Pv.ZodNullable,...Py(t)});class xv extends Sy{_parse(e){const{ctx:t}=this._processInputParams(e);let n=t.data;return t.parsedType===cy.undefined&&(n=this._def.defaultValue()),this._def.innerType._parse({data:n,path:t.path,parent:t})}removeDefault(){return this._def.innerType}}xv.create=(e,t)=>new xv({innerType:e,typeName:Pv.ZodDefault,defaultValue:"function"==typeof t.default?t.default:()=>t.default,...Py(t)});class Cv extends Sy{_parse(e){const{ctx:t}=this._processInputParams(e),n={...t,common:{...t.common,issues:[]}},i=this._def.innerType._parse({data:n.data,path:n.path,parent:{...n}});return ky(i)?i.then((e=>({status:"valid",value:"valid"===e.status?e.value:this._def.catchValue({get error(){return new py(n.common.issues)},input:n.data})}))):{status:"valid",value:"valid"===i.status?i.value:this._def.catchValue({get error(){return new py(n.common.issues)},input:n.data})}}removeCatch(){return this._def.innerType}}Cv.create=(e,t)=>new Cv({innerType:e,typeName:Pv.ZodCatch,catchValue:"function"==typeof t.catch?t.catch:()=>t.catch,...Py(t)});class _v extends Sy{_parse(e){if(this._getType(e)!==cy.nan){const t=this._getOrReturnCtx(e);return wy(t,{code:dy.invalid_type,expected:cy.nan,received:t.parsedType}),vy}return{status:"valid",value:e.data}}}_v.create=e=>new _v({typeName:Pv.ZodNaN,...Py(e)});const Ev=Symbol("zod_brand");class kv extends Sy{_parse(e){const{ctx:t}=this._processInputParams(e),n=t.data;return this._def.type._parse({data:n,path:t.path,parent:t})}unwrap(){return this._def.type}}class Tv extends Sy{_parse(e){const{status:t,ctx:n}=this._processInputParams(e);if(n.common.async){return(async()=>{const e=await this._def.in._parseAsync({data:n.data,path:n.path,parent:n});return"aborted"===e.status?vy:"dirty"===e.status?(t.dirty(),by(e.value)):this._def.out._parseAsync({data:e.value,path:n.path,parent:n})})()}{const e=this._def.in._parseSync({data:n.data,path:n.path,parent:n});return"aborted"===e.status?vy:"dirty"===e.status?(t.dirty(),{status:"dirty",value:e.value}):this._def.out._parseSync({data:e.value,path:n.path,parent:n})}}static create(e,t){return new Tv({in:e,out:t,typeName:Pv.ZodPipeline})}}class Av extends Sy{_parse(e){const t=this._def.innerType._parse(e);return Ey(t)&&(t.value=Object.freeze(t.value)),t}}Av.create=(e,t)=>new Av({innerType:e,typeName:Pv.ZodReadonly,...Py(t)});const $v=(e,t={},n)=>e?Ky.create().superRefine(((i,r)=>{var a,o;if(!e(i)){const e="function"==typeof t?t(i):"string"==typeof t?{message:t}:t,s=null===(o=null!==(a=e.fatal)&&void 0!==a?a:n)||void 0===o||o,l="string"==typeof e?{message:e}:e;r.addIssue({code:"custom",...l,fatal:s})}})):Ky.create(),Iv={object:tv.lazycreate};var Pv,Sv;(Sv=Pv||(Pv={})).ZodString="ZodString",Sv.ZodNumber="ZodNumber",Sv.ZodNaN="ZodNaN",Sv.ZodBigInt="ZodBigInt",Sv.ZodBoolean="ZodBoolean",Sv.ZodDate="ZodDate",Sv.ZodSymbol="ZodSymbol",Sv.ZodUndefined="ZodUndefined",Sv.ZodNull="ZodNull",Sv.ZodAny="ZodAny",Sv.ZodUnknown="ZodUnknown",Sv.ZodNever="ZodNever",Sv.ZodVoid="ZodVoid",Sv.ZodArray="ZodArray",Sv.ZodObject="ZodObject",Sv.ZodUnion="ZodUnion",Sv.ZodDiscriminatedUnion="ZodDiscriminatedUnion",Sv.ZodIntersection="ZodIntersection",Sv.ZodTuple="ZodTuple",Sv.ZodRecord="ZodRecord",Sv.ZodMap="ZodMap",Sv.ZodSet="ZodSet",Sv.ZodFunction="ZodFunction",Sv.ZodLazy="ZodLazy",Sv.ZodLiteral="ZodLiteral",Sv.ZodEnum="ZodEnum",Sv.ZodEffects="ZodEffects",Sv.ZodNativeEnum="ZodNativeEnum",Sv.ZodOptional="ZodOptional",Sv.ZodNullable="ZodNullable",Sv.ZodDefault="ZodDefault",Sv.ZodCatch="ZodCatch",Sv.ZodPromise="ZodPromise",Sv.ZodBranded="ZodBranded",Sv.ZodPipeline="ZodPipeline",Sv.ZodReadonly="ZodReadonly";const Rv=Ly.create,Ov=Fy.create,Nv=_v.create,Mv=Wy.create,jv=Hy.create,Uv=Zy.create,Dv=Vy.create,Bv=Gy.create,Lv=qy.create,zv=Ky.create,Fv=Yy.create,Wv=Jy.create,Hv=Qy.create,Zv=Xy.create,Vv=tv.create,Gv=tv.strictCreate,qv=nv.create,Kv=rv.create,Yv=ov.create,Jv=sv.create,Qv=lv.create,Xv=cv.create,eb=uv.create,tb=dv.create,nb=pv.create,ib=hv.create,rb=mv.create,ab=gv.create,ob=wv.create,sb=yv.create,lb=vv.create,cb=bv.create,ub=yv.createWithPreprocess,db=Tv.create,pb={string:e=>Ly.create({...e,coerce:!0}),number:e=>Fy.create({...e,coerce:!0}),boolean:e=>Hy.create({...e,coerce:!0}),bigint:e=>Wy.create({...e,coerce:!0}),date:e=>Zy.create({...e,coerce:!0})},hb=vy;var fb=Object.freeze({__proto__:null,defaultErrorMap:hy,setErrorMap:function(e){fy=e},getErrorMap:my,makeIssue:gy,EMPTY_PATH:[],addIssueToContext:wy,ParseStatus:yy,INVALID:vy,DIRTY:by,OK:xy,isAborted:Cy,isDirty:_y,isValid:Ey,isAsync:ky,get util(){return oy},get objectUtil(){return ly},ZodParsedType:cy,getParsedType:uy,ZodType:Sy,ZodString:Ly,ZodNumber:Fy,ZodBigInt:Wy,ZodBoolean:Hy,ZodDate:Zy,ZodSymbol:Vy,ZodUndefined:Gy,ZodNull:qy,ZodAny:Ky,ZodUnknown:Yy,ZodNever:Jy,ZodVoid:Qy,ZodArray:Xy,ZodObject:tv,ZodUnion:nv,ZodDiscriminatedUnion:rv,ZodIntersection:ov,ZodTuple:sv,ZodRecord:lv,ZodMap:cv,ZodSet:uv,ZodFunction:dv,ZodLazy:pv,ZodLiteral:hv,ZodEnum:mv,ZodNativeEnum:gv,ZodPromise:wv,ZodEffects:yv,ZodTransformer:yv,ZodOptional:vv,ZodNullable:bv,ZodDefault:xv,ZodCatch:Cv,ZodNaN:_v,BRAND:Ev,ZodBranded:kv,ZodPipeline:Tv,ZodReadonly:Av,custom:$v,Schema:Sy,ZodSchema:Sy,late:Iv,get ZodFirstPartyTypeKind(){return Pv},coerce:pb,any:zv,array:Zv,bigint:Mv,boolean:jv,date:Uv,discriminatedUnion:Kv,effect:sb,enum:rb,function:tb,instanceof:(e,t={message:`Input not instance of ${e.name}`})=>$v((t=>t instanceof e),t),intersection:Yv,lazy:nb,literal:ib,map:Xv,nan:Nv,nativeEnum:ab,never:Wv,null:Lv,nullable:cb,number:Ov,object:Vv,oboolean:()=>jv().optional(),onumber:()=>Ov().optional(),optional:lb,ostring:()=>Rv().optional(),pipeline:db,preprocess:ub,promise:ob,record:Qv,set:eb,strictObject:Gv,string:Rv,symbol:Dv,transformer:sb,tuple:Jv,undefined:Bv,union:qv,unknown:Fv,void:Hv,NEVER:hb,ZodIssueCode:dy,quotelessJson:e=>JSON.stringify(e,null,2).replace(/"([^"]+)":/g,"$1:"),ZodError:py});const mb=fb.object({message:fb.string()});function gb(e){return fb.literal(ry[e])}fb.object({accessList:fb.array(fb.string()),blockHash:fb.string().nullable(),blockNumber:fb.string().nullable(),chainId:fb.string(),from:fb.string(),gas:fb.string(),hash:fb.string(),input:fb.string().nullable(),maxFeePerGas:fb.string(),maxPriorityFeePerGas:fb.string(),nonce:fb.string(),r:fb.string(),s:fb.string(),to:fb.string(),transactionIndex:fb.string().nullable(),type:fb.string(),v:fb.string(),value:fb.string()});const wb=fb.object({chainId:fb.number()}),yb=fb.object({email:fb.string().email()}),vb=fb.object({otp:fb.string()}),bb=fb.object({chainId:fb.optional(fb.number())}),xb=fb.object({email:fb.string().email()}),Cb=fb.object({otp:fb.string()}),_b=fb.object({otp:fb.string()}),Eb=fb.object({themeMode:fb.optional(fb.enum(["light","dark"])),themeVariables:fb.optional(fb.record(fb.string(),fb.string().or(fb.number())))}),kb=fb.object({metadata:fb.object({name:fb.string(),description:fb.string(),url:fb.string(),icons:fb.array(fb.string())}).optional(),sdkVersion:fb.string(),projectId:fb.string()}),Tb=fb.object({type:fb.string()}),Ab=fb.object({action:fb.enum(["VERIFY_DEVICE","VERIFY_OTP"])}),$b=fb.object({email:fb.string().email(),address:fb.string(),chainId:fb.number()}),Ib=fb.object({isConnected:fb.boolean()}),Pb=fb.object({chainId:fb.number()}),Sb=fb.object({chainId:fb.number()}),Rb=fb.object({newEmail:fb.string().email()}),Ob=fb.object({smartAccountEnabledNetworks:fb.array(fb.number())}),Nb=fb.object({address:fb.string(),isDeployed:fb.boolean()}),Mb=fb.object({type:fb.string()}),jb=fb.any(),Ub=fb.object({method:fb.literal("eth_accounts")}),Db=fb.object({method:fb.literal("eth_blockNumber")}),Bb=fb.object({method:fb.literal("eth_call"),params:fb.array(fb.any())}),Lb=fb.object({method:fb.literal("eth_chainId")}),zb=fb.object({method:fb.literal("eth_estimateGas"),params:fb.array(fb.any())}),Fb=fb.object({method:fb.literal("eth_feeHistory"),params:fb.array(fb.any())}),Wb=fb.object({method:fb.literal("eth_gasPrice")}),Hb=fb.object({method:fb.literal("eth_getAccount"),params:fb.array(fb.any())}),Zb=fb.object({method:fb.literal("eth_getBalance"),params:fb.array(fb.any())}),Vb=fb.object({method:fb.literal("eth_getBlockByHash"),params:fb.array(fb.any())}),Gb=fb.object({method:fb.literal("eth_getBlockByNumber"),params:fb.array(fb.any())}),qb=fb.object({method:fb.literal("eth_getBlockReceipts"),params:fb.array(fb.any())}),Kb=fb.object({method:fb.literal("eth_getBlockTransactionCountByHash"),params:fb.array(fb.any())}),Yb=fb.object({method:fb.literal("eth_getBlockTransactionCountByNumber"),params:fb.array(fb.any())}),Jb=fb.object({method:fb.literal("eth_getCode"),params:fb.array(fb.any())}),Qb=fb.object({method:fb.literal("eth_getFilterChanges"),params:fb.array(fb.any())}),Xb=fb.object({method:fb.literal("eth_getFilterLogs"),params:fb.array(fb.any())}),ex=fb.object({method:fb.literal("eth_getLogs"),params:fb.array(fb.any())}),tx=fb.object({method:fb.literal("eth_getProof"),params:fb.array(fb.any())}),nx=fb.object({method:fb.literal("eth_getStorageAt"),params:fb.array(fb.any())}),ix=fb.object({method:fb.literal("eth_getTransactionByBlockHashAndIndex"),params:fb.array(fb.any())}),rx=fb.object({method:fb.literal("eth_getTransactionByBlockNumberAndIndex"),params:fb.array(fb.any())}),ax=fb.object({method:fb.literal("eth_getTransactionByHash"),params:fb.array(fb.any())}),ox=fb.object({method:fb.literal("eth_getTransactionCount"),params:fb.array(fb.any())}),sx=fb.object({method:fb.literal("eth_getTransactionReceipt"),params:fb.array(fb.any())}),lx=fb.object({method:fb.literal("eth_getUncleCountByBlockHash"),params:fb.array(fb.any())}),cx=fb.object({method:fb.literal("eth_getUncleCountByBlockNumber"),params:fb.array(fb.any())}),ux=fb.object({method:fb.literal("eth_maxPriorityFeePerGas")}),dx=fb.object({method:fb.literal("eth_newBlockFilter")}),px=fb.object({method:fb.literal("eth_newFilter"),params:fb.array(fb.any())}),hx=fb.object({method:fb.literal("eth_newPendingTransactionFilter")}),fx=fb.object({method:fb.literal("eth_sendRawTransaction"),params:fb.array(fb.any())}),mx=fb.object({method:fb.literal("eth_syncing"),params:fb.array(fb.any())}),gx=fb.object({method:fb.literal("eth_uninstallFilter"),params:fb.array(fb.any())}),wx=fb.object({method:fb.literal("personal_sign"),params:fb.array(fb.any())}),yx=fb.object({method:fb.literal("eth_signTypedData_v4"),params:fb.array(fb.any())}),vx=fb.object({method:fb.literal("eth_sendTransaction"),params:fb.array(fb.any())}),bx=fb.object({token:fb.string()}),xx={appEvent:fb.object({type:gb("APP_SWITCH_NETWORK"),payload:wb}).or(fb.object({type:gb("APP_CONNECT_EMAIL"),payload:yb})).or(fb.object({type:gb("APP_CONNECT_DEVICE")})).or(fb.object({type:gb("APP_CONNECT_OTP"),payload:vb})).or(fb.object({type:gb("APP_GET_USER"),payload:fb.optional(bb)})).or(fb.object({type:gb("APP_SIGN_OUT")})).or(fb.object({type:gb("APP_IS_CONNECTED"),payload:fb.optional(bx)})).or(fb.object({type:gb("APP_GET_CHAIN_ID")})).or(fb.object({type:gb("APP_GET_SMART_ACCOUNT_ENABLED_NETWORKS")})).or(fb.object({type:gb("APP_INIT_SMART_ACCOUNT")})).or(fb.object({type:gb("APP_SET_PREFERRED_ACCOUNT"),payload:Tb})).or(fb.object({type:gb("APP_RPC_REQUEST"),payload:wx.or(vx).or(Ub).or(Db).or(Bb).or(Lb).or(zb).or(Fb).or(Wb).or(Hb).or(Zb).or(Vb).or(Gb).or(qb).or(Kb).or(Yb).or(Jb).or(Qb).or(Xb).or(ex).or(tx).or(nx).or(ix).or(rx).or(ax).or(ox).or(sx).or(lx).or(cx).or(ux).or(dx).or(px).or(hx).or(fx).or(mx).or(gx).or(wx).or(yx).or(vx)})).or(fb.object({type:gb("APP_UPDATE_EMAIL"),payload:xb})).or(fb.object({type:gb("APP_UPDATE_EMAIL_PRIMARY_OTP"),payload:Cb})).or(fb.object({type:gb("APP_UPDATE_EMAIL_SECONDARY_OTP"),payload:_b})).or(fb.object({type:gb("APP_SYNC_THEME"),payload:Eb})).or(fb.object({type:gb("APP_SYNC_DAPP_DATA"),payload:kb})),frameEvent:fb.object({type:gb("FRAME_SWITCH_NETWORK_ERROR"),payload:mb}).or(fb.object({type:gb("FRAME_SWITCH_NETWORK_SUCCESS"),payload:Sb})).or(fb.object({type:gb("FRAME_CONNECT_EMAIL_ERROR"),payload:mb})).or(fb.object({type:gb("FRAME_CONNECT_EMAIL_SUCCESS"),payload:Ab})).or(fb.object({type:gb("FRAME_CONNECT_OTP_ERROR"),payload:mb})).or(fb.object({type:gb("FRAME_CONNECT_OTP_SUCCESS")})).or(fb.object({type:gb("FRAME_CONNECT_DEVICE_ERROR"),payload:mb})).or(fb.object({type:gb("FRAME_CONNECT_DEVICE_SUCCESS")})).or(fb.object({type:gb("FRAME_GET_USER_ERROR"),payload:mb})).or(fb.object({type:gb("FRAME_GET_USER_SUCCESS"),payload:$b})).or(fb.object({type:gb("FRAME_SIGN_OUT_ERROR"),payload:mb})).or(fb.object({type:gb("FRAME_SIGN_OUT_SUCCESS")})).or(fb.object({type:gb("FRAME_IS_CONNECTED_ERROR"),payload:mb})).or(fb.object({type:gb("FRAME_IS_CONNECTED_SUCCESS"),payload:Ib})).or(fb.object({type:gb("FRAME_GET_CHAIN_ID_ERROR"),payload:mb})).or(fb.object({type:gb("FRAME_GET_CHAIN_ID_SUCCESS"),payload:Pb})).or(fb.object({type:gb("FRAME_RPC_REQUEST_ERROR"),payload:mb})).or(fb.object({type:gb("FRAME_RPC_REQUEST_SUCCESS"),payload:jb})).or(fb.object({type:gb("FRAME_SESSION_UPDATE"),payload:bx})).or(fb.object({type:gb("FRAME_UPDATE_EMAIL_ERROR"),payload:mb})).or(fb.object({type:gb("FRAME_UPDATE_EMAIL_SUCCESS")})).or(fb.object({type:gb("FRAME_UPDATE_EMAIL_PRIMARY_OTP_ERROR"),payload:mb})).or(fb.object({type:gb("FRAME_UPDATE_EMAIL_PRIMARY_OTP_SUCCESS")})).or(fb.object({type:gb("FRAME_UPDATE_EMAIL_SECONDARY_OTP_ERROR"),payload:mb})).or(fb.object({type:gb("FRAME_UPDATE_EMAIL_SECONDARY_OTP_SUCCESS"),payload:Rb})).or(fb.object({type:gb("FRAME_SYNC_THEME_ERROR"),payload:mb})).or(fb.object({type:gb("FRAME_SYNC_THEME_SUCCESS")})).or(fb.object({type:gb("FRAME_SYNC_DAPP_DATA_ERROR"),payload:mb})).or(fb.object({type:gb("FRAME_SYNC_DAPP_DATA_SUCCESS")})).or(fb.object({type:gb("FRAME_GET_SMART_ACCOUNT_ENABLED_NETWORKS_SUCCESS"),payload:Ob})).or(fb.object({type:gb("FRAME_GET_SMART_ACCOUNT_ENABLED_NETWORKS_ERROR"),payload:mb})).or(fb.object({type:gb("FRAME_INIT_SMART_ACCOUNT_SUCCESS"),payload:Nb})).or(fb.object({type:gb("FRAME_INIT_SMART_ACCOUNT_ERROR"),payload:mb})).or(fb.object({type:gb("FRAME_SET_PREFERRED_ACCOUNT_SUCCESS"),payload:Mb})).or(fb.object({type:gb("FRAME_SET_PREFERRED_ACCOUNT_ERROR"),payload:mb}))},Cx={set(e,t){kx.isClient&&localStorage.setItem(`${ry.STORAGE_KEY}${e}`,t)},get:e=>kx.isClient?localStorage.getItem(`${ry.STORAGE_KEY}${e}`):null,delete(e){kx.isClient&&localStorage.removeItem(`${ry.STORAGE_KEY}${e}`)}},_x=["ASIA/SHANGHAI","ASIA/URUMQI","ASIA/CHONGQING","ASIA/HARBIN","ASIA/KASHGAR","ASIA/MACAU","ASIA/HONG_KONG","ASIA/MACAO","ASIA/BEIJING","ASIA/HARBIN"],Ex=3e4,kx={getBlockchainApiUrl(){try{const{timeZone:e}=(new Intl.DateTimeFormat).resolvedOptions(),t=e.toUpperCase();return _x.includes(t)?"https://rpc.walletconnect.org":"https://rpc.walletconnect.com"}catch{return!1}},checkIfAllowedToTriggerEmail(){const e=Cx.get(ry.LAST_EMAIL_LOGIN_TIME);if(e){const t=Date.now()-Number(e);if(t<Ex){const e=Math.ceil((Ex-t)/1e3);throw new Error(`Please try again after ${e} seconds`)}}},getTimeToNextEmailLogin(){const e=Cx.get(ry.LAST_EMAIL_LOGIN_TIME);if(e){const t=Date.now()-Number(e);if(t<Ex)return Math.ceil((Ex-t)/1e3)}return 0},checkIfRequestExists(e){const t=this.getRequestMethod(e);return ay.NOT_SAFE_RPC_METHODS.includes(t)||ay.SAFE_RPC_METHODS.includes(t)},getRequestMethod(e){var t;return null==(t=null==e?void 0:e.payload)?void 0:t.method},checkIfRequestIsAllowed(e){const t=this.getRequestMethod(e);return ay.SAFE_RPC_METHODS.includes(t)},isClient:"undefined"!=typeof window};class Tx{constructor(e,t=!1){if(this.iframe=null,this.rpcUrl=kx.getBlockchainApiUrl(),this.events={onFrameEvent:e=>{kx.isClient&&window.addEventListener("message",(({data:t})=>{var n;if(!(null==(n=t.type)?void 0:n.includes(ry.FRAME_EVENT_KEY)))return;const i=xx.frameEvent.parse(t);e(i)}))},onAppEvent:e=>{kx.isClient&&window.addEventListener("message",(({data:t})=>{var n;if(!(null==(n=t.type)?void 0:n.includes(ry.APP_EVENT_KEY)))return;const i=xx.appEvent.parse(t);e(i)}))},postAppEvent:e=>{var t;if(kx.isClient){if(!(null==(t=this.iframe)?void 0:t.contentWindow))throw new Error("W3mFrame: iframe is not set");xx.appEvent.parse(e),window.postMessage(e),this.iframe.contentWindow.postMessage(e,"*")}},postFrameEvent:e=>{if(kx.isClient){if(!parent)throw new Error("W3mFrame: parent is not set");xx.frameEvent.parse(e),parent.postMessage(e,"*")}}},this.projectId=e,this.frameLoadPromise=new Promise(((e,t)=>{this.frameLoadPromiseResolver={resolve:e,reject:t}})),t&&(this.frameLoadPromise=new Promise(((e,t)=>{this.frameLoadPromiseResolver={resolve:e,reject:t}})),kx.isClient)){const t=document.createElement("iframe");t.id="w3m-iframe",t.src=`${ry.SECURE_SITE_SDK}?projectId=${e}`,t.style.position="fixed",t.style.zIndex="999999",t.style.display="none",t.style.opacity="0",t.style.borderRadius="clamp(0px, var(--wui-border-radius-l), 44px)",document.body.appendChild(t),this.iframe=t,this.iframe.onload=()=>{var e;null==(e=this.frameLoadPromiseResolver)||e.resolve(void 0)},this.iframe.onerror=()=>{var e;null==(e=this.frameLoadPromiseResolver)||e.reject("Unable to load email login dependency")}}}get networks(){const e=[1,5,11155111,10,420,42161,421613,137,80001,42220,1313161554,1313161555,56,97,43114,43113,324,280,100,8453,84531,7777777,999].map((e=>({[e]:{rpcUrl:`${this.rpcUrl}/v1/?chainId=eip155:${e}&projectId=${this.projectId}`,chainId:e}})));return Object.assign({},...e)}}class Ax{constructor(e){this.connectEmailResolver=void 0,this.connectDeviceResolver=void 0,this.connectOtpResolver=void 0,this.connectResolver=void 0,this.disconnectResolver=void 0,this.isConnectedResolver=void 0,this.getChainIdResolver=void 0,this.switchChainResolver=void 0,this.rpcRequestResolver=void 0,this.updateEmailResolver=void 0,this.updateEmailPrimaryOtpResolver=void 0,this.updateEmailSecondaryOtpResolver=void 0,this.syncThemeResolver=void 0,this.syncDappDataResolver=void 0,this.smartAccountEnabledNetworksResolver=void 0,this.initSmartAccountResolver=void 0,this.setPreferredAccountResolver=void 0,this.w3mFrame=new Tx(e,!0),this.w3mFrame.events.onFrameEvent((e=>{switch(console.log("💻 received",e),e.type){case ry.FRAME_CONNECT_EMAIL_SUCCESS:return this.onConnectEmailSuccess(e);case ry.FRAME_CONNECT_EMAIL_ERROR:return this.onConnectEmailError(e);case ry.FRAME_CONNECT_DEVICE_SUCCESS:return this.onConnectDeviceSuccess();case ry.FRAME_CONNECT_DEVICE_ERROR:return this.onConnectDeviceError(e);case ry.FRAME_CONNECT_OTP_SUCCESS:return this.onConnectOtpSuccess();case ry.FRAME_CONNECT_OTP_ERROR:return this.onConnectOtpError(e);case ry.FRAME_GET_USER_SUCCESS:return this.onConnectSuccess(e);case ry.FRAME_GET_USER_ERROR:return this.onConnectError(e);case ry.FRAME_IS_CONNECTED_SUCCESS:return this.onIsConnectedSuccess(e);case ry.FRAME_IS_CONNECTED_ERROR:return this.onIsConnectedError(e);case ry.FRAME_GET_CHAIN_ID_SUCCESS:return this.onGetChainIdSuccess(e);case ry.FRAME_GET_CHAIN_ID_ERROR:return this.onGetChainIdError(e);case ry.FRAME_SIGN_OUT_SUCCESS:return this.onSignOutSuccess();case ry.FRAME_SIGN_OUT_ERROR:return this.onSignOutError(e);case ry.FRAME_SWITCH_NETWORK_SUCCESS:return this.onSwitchChainSuccess(e);case ry.FRAME_SWITCH_NETWORK_ERROR:return this.onSwitchChainError(e);case ry.FRAME_RPC_REQUEST_SUCCESS:return this.onRpcRequestSuccess(e);case ry.FRAME_RPC_REQUEST_ERROR:return this.onRpcRequestError(e);case ry.FRAME_SESSION_UPDATE:return this.onSessionUpdate(e);case ry.FRAME_UPDATE_EMAIL_SUCCESS:return this.onUpdateEmailSuccess();case ry.FRAME_UPDATE_EMAIL_ERROR:return this.onUpdateEmailError(e);case ry.FRAME_UPDATE_EMAIL_PRIMARY_OTP_SUCCESS:return this.onUpdateEmailPrimaryOtpSuccess();case ry.FRAME_UPDATE_EMAIL_PRIMARY_OTP_ERROR:return this.onUpdateEmailPrimaryOtpError(e);case ry.FRAME_UPDATE_EMAIL_SECONDARY_OTP_SUCCESS:return this.onUpdateEmailSecondaryOtpSuccess(e);case ry.FRAME_UPDATE_EMAIL_SECONDARY_OTP_ERROR:return this.onUpdateEmailSecondaryOtpError(e);case ry.FRAME_SYNC_THEME_SUCCESS:return this.onSyncThemeSuccess();case ry.FRAME_SYNC_THEME_ERROR:return this.onSyncThemeError(e);case ry.FRAME_SYNC_DAPP_DATA_SUCCESS:return this.onSyncDappDataSuccess();case ry.FRAME_SYNC_DAPP_DATA_ERROR:return this.onSyncDappDataError(e);case ry.FRAME_GET_SMART_ACCOUNT_ENABLED_NETWORKS_SUCCESS:return this.onSmartAccountEnabledNetworksSuccess(e);case ry.FRAME_GET_SMART_ACCOUNT_ENABLED_NETWORKS_ERROR:return this.onSmartAccountEnabledNetworksError(e);case ry.FRAME_INIT_SMART_ACCOUNT_SUCCESS:return this.onInitSmartAccountSuccess(e);case ry.FRAME_INIT_SMART_ACCOUNT_ERROR:return this.onInitSmartAccountError(e);case ry.FRAME_SET_PREFERRED_ACCOUNT_SUCCESS:return this.onPreferSmartAccountSuccess(e);case ry.FRAME_SET_PREFERRED_ACCOUNT_ERROR:return this.onPreferSmartAccountError();default:return null}}))}getLoginEmailUsed(){return Boolean(Cx.get(ry.EMAIL_LOGIN_USED_KEY))}getEmail(){return Cx.get(ry.EMAIL)}rejectRpcRequest(){var e;null==(e=this.rpcRequestResolver)||e.reject()}async connectEmail(e){return await this.w3mFrame.frameLoadPromise,kx.checkIfAllowedToTriggerEmail(),this.w3mFrame.events.postAppEvent({type:ry.APP_CONNECT_EMAIL,payload:e}),new Promise(((e,t)=>{this.connectEmailResolver={resolve:e,reject:t}}))}async connectDevice(){return await this.w3mFrame.frameLoadPromise,this.w3mFrame.events.postAppEvent({type:ry.APP_CONNECT_DEVICE}),new Promise(((e,t)=>{this.connectDeviceResolver={resolve:e,reject:t}}))}async connectOtp(e){return await this.w3mFrame.frameLoadPromise,this.w3mFrame.events.postAppEvent({type:ry.APP_CONNECT_OTP,payload:e}),new Promise(((e,t)=>{this.connectOtpResolver={resolve:e,reject:t}}))}async isConnected(){return await this.w3mFrame.frameLoadPromise,this.w3mFrame.events.postAppEvent({type:ry.APP_IS_CONNECTED,payload:void 0}),new Promise(((e,t)=>{this.isConnectedResolver={resolve:e,reject:t}}))}async getChainId(){return await this.w3mFrame.frameLoadPromise,this.w3mFrame.events.postAppEvent({type:ry.APP_GET_CHAIN_ID}),new Promise(((e,t)=>{this.getChainIdResolver={resolve:e,reject:t}}))}async updateEmail(e){return await this.w3mFrame.frameLoadPromise,kx.checkIfAllowedToTriggerEmail(),this.w3mFrame.events.postAppEvent({type:ry.APP_UPDATE_EMAIL,payload:e}),new Promise(((e,t)=>{this.updateEmailResolver={resolve:e,reject:t}}))}async updateEmailPrimaryOtp(e){return await this.w3mFrame.frameLoadPromise,this.w3mFrame.events.postAppEvent({type:ry.APP_UPDATE_EMAIL_PRIMARY_OTP,payload:e}),new Promise(((e,t)=>{this.updateEmailPrimaryOtpResolver={resolve:e,reject:t}}))}async updateEmailSecondaryOtp(e){return await this.w3mFrame.frameLoadPromise,this.w3mFrame.events.postAppEvent({type:ry.APP_UPDATE_EMAIL_SECONDARY_OTP,payload:e}),new Promise(((e,t)=>{this.updateEmailSecondaryOtpResolver={resolve:e,reject:t}}))}async syncTheme(e){return await this.w3mFrame.frameLoadPromise,this.w3mFrame.events.postAppEvent({type:ry.APP_SYNC_THEME,payload:e}),new Promise(((e,t)=>{this.syncThemeResolver={resolve:e,reject:t}}))}async syncDappData(e){return await this.w3mFrame.frameLoadPromise,this.w3mFrame.events.postAppEvent({type:ry.APP_SYNC_DAPP_DATA,payload:e}),new Promise(((e,t)=>{this.syncDappDataResolver={resolve:e,reject:t}}))}async getSmartAccountEnabledNetworks(){return await this.w3mFrame.frameLoadPromise,this.w3mFrame.events.postAppEvent({type:ry.APP_GET_SMART_ACCOUNT_ENABLED_NETWORKS}),new Promise(((e,t)=>{this.smartAccountEnabledNetworksResolver={resolve:e,reject:t}}))}async initSmartAccount(){return await this.w3mFrame.frameLoadPromise,this.w3mFrame.events.postAppEvent({type:ry.APP_INIT_SMART_ACCOUNT}),new Promise(((e,t)=>{this.initSmartAccountResolver={resolve:e,reject:t}}))}async setPreferredAccount(e){return await this.w3mFrame.frameLoadPromise,this.w3mFrame.events.postAppEvent({type:ry.APP_SET_PREFERRED_ACCOUNT,payload:{type:e}}),new Promise(((e,t)=>{this.setPreferredAccountResolver={resolve:e,reject:t}}))}async connect(e){const t=(null==e?void 0:e.chainId)??this.getLastUsedChainId()??1;return await this.w3mFrame.frameLoadPromise,this.w3mFrame.events.postAppEvent({type:ry.APP_GET_USER,payload:{chainId:t}}),new Promise(((e,t)=>{this.connectResolver={resolve:e,reject:t}}))}async switchNetwork(e){return await this.w3mFrame.frameLoadPromise,this.w3mFrame.events.postAppEvent({type:ry.APP_SWITCH_NETWORK,payload:{chainId:e}}),new Promise(((e,t)=>{this.switchChainResolver={resolve:e,reject:t}}))}async disconnect(){return await this.w3mFrame.frameLoadPromise,this.w3mFrame.events.postAppEvent({type:ry.APP_SIGN_OUT}),new Promise(((e,t)=>{this.disconnectResolver={resolve:e,reject:t}}))}async request(e){return await this.w3mFrame.frameLoadPromise,ay.GET_CHAIN_ID===e.method?this.getLastUsedChainId():(this.w3mFrame.events.postAppEvent({type:ry.APP_RPC_REQUEST,payload:e}),new Promise(((e,t)=>{this.rpcRequestResolver={resolve:e,reject:t}})))}onRpcRequest(e){this.w3mFrame.events.onAppEvent((t=>{t.type.includes(ry.RPC_METHOD_KEY)&&e(t)}))}onRpcResponse(e){this.w3mFrame.events.onFrameEvent((t=>{t.type.includes(ry.RPC_METHOD_KEY)&&e(t)}))}onIsConnected(e){this.w3mFrame.events.onFrameEvent((t=>{t.type===ry.FRAME_GET_USER_SUCCESS&&e()}))}onNotConnected(e){this.w3mFrame.events.onFrameEvent((t=>{t.type===ry.FRAME_IS_CONNECTED_ERROR&&e(),t.type!==ry.FRAME_IS_CONNECTED_SUCCESS||t.payload.isConnected||e()}))}onInitSmartAccount(e){this.w3mFrame.events.onFrameEvent((t=>{t.type===ry.FRAME_INIT_SMART_ACCOUNT_SUCCESS?e(t.payload.isDeployed):t.type===ry.FRAME_INIT_SMART_ACCOUNT_ERROR&&e(!1)}))}onConnectEmailSuccess(e){var t;null==(t=this.connectEmailResolver)||t.resolve(e.payload),this.setNewLastEmailLoginTime()}onConnectEmailError(e){var t;null==(t=this.connectEmailResolver)||t.reject(e.payload.message)}onConnectDeviceSuccess(){var e;null==(e=this.connectDeviceResolver)||e.resolve(void 0)}onConnectDeviceError(e){var t;null==(t=this.connectDeviceResolver)||t.reject(e.payload.message)}onConnectOtpSuccess(){var e;null==(e=this.connectOtpResolver)||e.resolve(void 0)}onConnectOtpError(e){var t;null==(t=this.connectOtpResolver)||t.reject(e.payload.message)}onConnectSuccess(e){var t;this.setEmailLoginSuccess(e.payload.email),this.setLastUsedChainId(e.payload.chainId),null==(t=this.connectResolver)||t.resolve(e.payload)}onConnectError(e){var t;null==(t=this.connectResolver)||t.reject(e.payload.message)}onIsConnectedSuccess(e){var t;e.payload.isConnected||this.deleteEmailLoginCache(),null==(t=this.isConnectedResolver)||t.resolve(e.payload)}onIsConnectedError(e){var t;null==(t=this.isConnectedResolver)||t.reject(e.payload.message)}onGetChainIdSuccess(e){var t;this.setLastUsedChainId(e.payload.chainId),null==(t=this.getChainIdResolver)||t.resolve(e.payload)}onGetChainIdError(e){var t;null==(t=this.getChainIdResolver)||t.reject(e.payload.message)}onSignOutSuccess(){var e;null==(e=this.disconnectResolver)||e.resolve(void 0),this.deleteEmailLoginCache()}onSignOutError(e){var t;null==(t=this.disconnectResolver)||t.reject(e.payload.message)}onSwitchChainSuccess(e){var t;this.setLastUsedChainId(e.payload.chainId),null==(t=this.switchChainResolver)||t.resolve(e.payload)}onSwitchChainError(e){var t;null==(t=this.switchChainResolver)||t.reject(e.payload.message)}onRpcRequestSuccess(e){var t;null==(t=this.rpcRequestResolver)||t.resolve(e.payload)}onRpcRequestError(e){var t;null==(t=this.rpcRequestResolver)||t.reject(e.payload.message)}onSessionUpdate(e){}onUpdateEmailSuccess(){var e;null==(e=this.updateEmailResolver)||e.resolve(void 0),this.setNewLastEmailLoginTime()}onUpdateEmailError(e){var t;null==(t=this.updateEmailResolver)||t.reject(e.payload.message)}onUpdateEmailPrimaryOtpSuccess(){var e;null==(e=this.updateEmailPrimaryOtpResolver)||e.resolve(void 0)}onUpdateEmailPrimaryOtpError(e){var t;null==(t=this.updateEmailPrimaryOtpResolver)||t.reject(e.payload.message)}onUpdateEmailSecondaryOtpSuccess(e){var t;const{newEmail:n}=e.payload;this.setEmailLoginSuccess(n),null==(t=this.updateEmailSecondaryOtpResolver)||t.resolve({newEmail:n})}onUpdateEmailSecondaryOtpError(e){var t;null==(t=this.updateEmailSecondaryOtpResolver)||t.reject(e.payload.message)}onSyncThemeSuccess(){var e;null==(e=this.syncThemeResolver)||e.resolve(void 0)}onSyncThemeError(e){var t;null==(t=this.syncThemeResolver)||t.reject(e.payload.message)}onSyncDappDataSuccess(){var e;null==(e=this.syncDappDataResolver)||e.resolve(void 0)}onSyncDappDataError(e){var t;null==(t=this.syncDappDataResolver)||t.reject(e.payload.message)}onSmartAccountEnabledNetworksSuccess(e){var t;null==(t=this.smartAccountEnabledNetworksResolver)||t.resolve(e.payload)}onSmartAccountEnabledNetworksError(e){var t;null==(t=this.smartAccountEnabledNetworksResolver)||t.reject(e.payload.message)}onInitSmartAccountSuccess(e){var t;null==(t=this.initSmartAccountResolver)||t.resolve(e.payload)}onInitSmartAccountError(e){var t;null==(t=this.initSmartAccountResolver)||t.reject(e.payload.message)}onPreferSmartAccountSuccess(e){var t;this.persistPreferredAccount(e.payload.type),null==(t=this.setPreferredAccountResolver)||t.resolve(void 0)}onPreferSmartAccountError(){var e;null==(e=this.setPreferredAccountResolver)||e.reject()}setNewLastEmailLoginTime(){Cx.set(ry.LAST_EMAIL_LOGIN_TIME,Date.now().toString())}setEmailLoginSuccess(e){Cx.set(ry.EMAIL,e),Cx.set(ry.EMAIL_LOGIN_USED_KEY,"true"),Cx.delete(ry.LAST_EMAIL_LOGIN_TIME)}deleteEmailLoginCache(){Cx.delete(ry.EMAIL_LOGIN_USED_KEY),Cx.delete(ry.EMAIL),Cx.delete(ry.LAST_USED_CHAIN_KEY)}setLastUsedChainId(e){Cx.set(ry.LAST_USED_CHAIN_KEY,String(e))}getLastUsedChainId(){return Number(Cx.get(ry.LAST_USED_CHAIN_KEY))}persistPreferredAccount(e){Cx.set(ry.PREFERRED_ACCOUNT_TYPE,e)}}var $x=function(e,t,n,i){var r,a=arguments.length,o=a<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,n,i);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(o=(a<3?r(o):a>3?r(t,n,o):r(t,n))||o);return a>3&&o&&Object.defineProperty(t,n,o),o};let Ix=class extends Mg{firstUpdated(){this.startOTPTimeout()}disconnectedCallback(){clearTimeout(this.OTPTimeout)}constructor(){var e;super(),this.loading=!1,this.timeoutTimeLeft=kx.getTimeToNextEmailLogin(),this.error="",this.otp="",this.email=null==(e=zo.state.data)?void 0:e.email,this.emailConnector=$o.getEmailConnector()}render(){if(!this.email)throw new Error("w3m-email-otp-widget: No email provided");const e=Boolean(this.timeoutTimeLeft),t=this.getFooterLabels(e);return yg`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        .padding=${["l","0","l","0"]}
        gap="l"
      >
        <wui-flex flexDirection="column" alignItems="center">
          <wui-text variant="paragraph-400" color="fg-100">Enter the code we sent to</wui-text>
          <wui-text variant="paragraph-500" color="fg-100">${this.email}</wui-text>
        </wui-flex>

        <wui-text variant="small-400" color="fg-200">The code expires in 10 minutes</wui-text>

        ${this.loading?yg`<wui-loading-spinner size="xl" color="accent-100"></wui-loading-spinner>`:yg` <wui-flex flexDirection="column" alignItems="center" gap="xs">
              <wui-otp
                dissabled
                length="6"
                @inputChange=${this.onOtpInputChange.bind(this)}
                .otp=${this.otp}
              ></wui-otp>
              ${this.error?yg`
                    <wui-text variant="small-400" align="center" color="error-100">
                      ${this.error}. Try Again
                    </wui-text>
                  `:null}
            </wui-flex>`}

        <wui-flex alignItems="center">
          <wui-text variant="small-400" color="fg-200">${t.title}</wui-text>
          <wui-link @click=${this.onResendCode.bind(this)} .disabled=${e}>
            ${t.action}
          </wui-link>
        </wui-flex>
      </wui-flex>
    `}startOTPTimeout(){this.timeoutTimeLeft=kx.getTimeToNextEmailLogin(),this.OTPTimeout=setInterval((()=>{this.timeoutTimeLeft>0?this.timeoutTimeLeft=kx.getTimeToNextEmailLogin():clearInterval(this.OTPTimeout)}),1e3)}async onOtpInputChange(e){var t;try{this.loading||(this.otp=e.detail,this.emailConnector&&6===this.otp.length&&(this.loading=!0,await(null==(t=this.onOtpSubmit)?void 0:t.call(this,this.otp))))}catch(n){this.error=po.parseError(n),this.loading=!1}}async onResendCode(){try{if(this.onOtpResend){if(!this.loading&&!this.timeoutTimeLeft){this.error="",this.otp="";if(!$o.getEmailConnector()||!this.email)throw new Error("w3m-email-otp-widget: Unable to resend email");this.loading=!0,await this.onOtpResend(this.email),this.startOTPTimeout(),Qo.showSuccess("Code email resent")}}else this.onStartOver&&this.onStartOver()}catch(e){Qo.showError(e)}finally{this.loading=!1}}getFooterLabels(e){return this.onStartOver?{title:"Something wrong?",action:"Try again "+(e?`in ${this.timeoutTimeLeft}s`:"")}:{title:"Didn't receive it?",action:"Resend "+(e?`in ${this.timeoutTimeLeft}s`:"Code")}}};Ix.styles=iy,$x([Lg()],Ix.prototype,"loading",void 0),$x([Lg()],Ix.prototype,"timeoutTimeLeft",void 0),$x([Lg()],Ix.prototype,"error",void 0),Ix=$x([_l("w3m-email-otp-widget")],Ix);let Px=class extends Ix{constructor(){super(),this.onOtpSubmit=async e=>{try{this.emailConnector&&(await this.emailConnector.provider.connectOtp({otp:e}),No.sendEvent({type:"track",event:"EMAIL_VERIFICATION_CODE_PASS"}),await ns.connectExternal(this.emailConnector),Wo.close(),No.sendEvent({type:"track",event:"CONNECT_SUCCESS",properties:{method:"email",name:this.emailConnector.name||"Unknown"}}))}catch(t){throw No.sendEvent({type:"track",event:"EMAIL_VERIFICATION_CODE_FAIL"}),t}},this.onOtpResend=async e=>{this.emailConnector&&(await this.emailConnector.provider.connectEmail({email:e}),No.sendEvent({type:"track",event:"EMAIL_VERIFICATION_CODE_SENT"}))}}};Px=function(e,t,n,i){var r,a=arguments.length,o=a<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,n,i);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(o=(a<3?r(o):a>3?r(t,n,o):r(t,n))||o);return a>3&&o&&Object.defineProperty(t,n,o),o}([_l("w3m-email-verify-otp-view")],Px);const Sx=jm`
  wui-icon-box {
    height: var(--wui-icon-box-size-xl);
    width: var(--wui-icon-box-size-xl);
  }
`;var Rx=function(e,t,n,i){var r,a=arguments.length,o=a<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,n,i);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(o=(a<3?r(o):a>3?r(t,n,o):r(t,n))||o);return a>3&&o&&Object.defineProperty(t,n,o),o};let Ox=class extends Mg{constructor(){var e;super(),this.email=null==(e=zo.state.data)?void 0:e.email,this.emailConnector=$o.getEmailConnector(),this.loading=!1,this.listenForDeviceApproval()}render(){if(!this.email)throw new Error("w3m-email-verify-device-view: No email provided");if(!this.emailConnector)throw new Error("w3m-email-verify-device-view: No email connector provided");return yg`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        .padding=${["xxl","s","xxl","s"]}
        gap="l"
      >
        <wui-icon-box
          size="xl"
          iconcolor="accent-100"
          backgroundcolor="accent-100"
          icon="verify"
          background="opaque"
        ></wui-icon-box>

        <wui-flex flexDirection="column" alignItems="center" gap="s">
          <wui-flex flexDirection="column" alignItems="center">
            <wui-text variant="paragraph-400" color="fg-100">
              Approve the login link we sent to
            </wui-text>
            <wui-text variant="paragraph-400" color="fg-100"><b>${this.email}</b></wui-text>
          </wui-flex>

          <wui-text variant="small-400" color="fg-200" align="center">
            The code expires in 10 minutes
          </wui-text>

          <wui-flex alignItems="center" id="w3m-resend-section">
            <wui-text variant="small-400" color="fg-100" align="center">
              Didn't receive it?
            </wui-text>
            <wui-link @click=${this.onResendCode.bind(this)} .disabled=${this.loading}>
              Resend email
            </wui-link>
          </wui-flex>
        </wui-flex>
      </wui-flex>
    `}async listenForDeviceApproval(){if(this.emailConnector)try{await this.emailConnector.provider.connectDevice(),No.sendEvent({type:"track",event:"DEVICE_REGISTERED_FOR_EMAIL"}),No.sendEvent({type:"track",event:"EMAIL_VERIFICATION_CODE_SENT"}),zo.replace("EmailVerifyOtp",{email:this.email})}catch(e){zo.goBack()}}async onResendCode(){try{if(!this.loading){if(!this.emailConnector||!this.email)throw new Error("w3m-email-login-widget: Unable to resend email");this.loading=!0,await this.emailConnector.provider.connectEmail({email:this.email}),Qo.showSuccess("Code email resent")}}catch(e){Qo.showError(e)}finally{this.loading=!1}}};Ox.styles=Sx,Rx([Lg()],Ox.prototype,"loading",void 0),Ox=Rx([_l("w3m-email-verify-device-view")],Ox);const Nx=jm`
  div {
    width: 100%;
    height: 400px;
  }

  [data-ready='false'] {
    transform: scale(1.05);
  }

  @media (max-width: 430px) {
    [data-ready='false'] {
      transform: translateY(-50px);
    }
  }
`;var Mx=function(e,t,n,i){var r,a=arguments.length,o=a<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,n,i);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(o=(a<3?r(o):a>3?r(t,n,o):r(t,n))||o);return a>3&&o&&Object.defineProperty(t,n,o),o};let jx=class extends Mg{constructor(){super(),this.bodyObserver=void 0,this.unsubscribe=[],this.iframe=document.getElementById("w3m-iframe"),this.ready=!1,this.unsubscribe.push(Wo.subscribeKey("open",(e=>{e||this.onHideIframe()})))}disconnectedCallback(){var e;this.unsubscribe.forEach((e=>e())),null==(e=this.bodyObserver)||e.unobserve(window.document.body)}async firstUpdated(){await this.syncTheme(),this.iframe.style.display="block";const e=this.renderRoot.querySelector("div");this.bodyObserver=new ResizeObserver((()=>{const t=(null==e?void 0:e.getBoundingClientRect())??{left:0,top:0,width:0,height:0};this.iframe.style.width=`${t.width}px`,this.iframe.style.height=t.height-10+"px",this.iframe.style.left=`${t.left}px`,this.iframe.style.top=`${t.top+5}px`,this.ready=!0})),this.bodyObserver.observe(window.document.body)}render(){return this.ready&&this.onShowIframe(),yg`<div data-ready=${this.ready}></div>`}onShowIframe(){const e=window.innerWidth<=430;this.iframe.animate([{opacity:0,transform:e?"translateY(50px)":"scale(.95)"},{opacity:1,transform:e?"translateY(0)":"scale(1)"}],{duration:200,easing:"ease",fill:"forwards",delay:300})}async onHideIframe(){await this.iframe.animate([{opacity:1},{opacity:0}],{duration:200,easing:"ease",fill:"forwards"}).finished,this.iframe.style.display="none"}async syncTheme(){const e=$o.getEmailConnector();e&&await e.provider.syncTheme({themeVariables:To.getSnapshot().themeVariables})}};jx.styles=Nx,Mx([Lg()],jx.prototype,"ready",void 0),jx=Mx([_l("w3m-approve-transaction-view")],jx);let Ux=class extends Mg{render(){return yg`
      <wui-flex flexDirection="column" alignItems="center" gap="xl" padding="xl">
        <wui-text variant="paragraph-400" color="fg-100">Follow the instructions on</wui-text>
        <wui-chip
          icon="externalLink"
          variant="fill"
          href=${uo.SECURE_SITE_DASHBOARD}
          imageSrc=${uo.SECURE_SITE_FAVICON}
          data-testid="w3m-secure-website-button"
        >
        </wui-chip>
        <wui-text variant="small-400" color="fg-200">
          You will have to reconnect for security reasons
        </wui-text>
      </wui-flex>
    `}};Ux=function(e,t,n,i){var r,a=arguments.length,o=a<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,n,i);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(o=(a<3?r(o):a>3?r(t,n,o):r(t,n))||o);return a>3&&o&&Object.defineProperty(t,n,o),o}([_l("w3m-upgrade-wallet-view")],Ux);let Dx=class extends Mg{render(){return yg`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        gap="xxl"
        .padding=${["0","0","l","0"]}
      >
        ${this.onboardingTemplate()} ${this.buttonsTemplate()}
        <wui-link>
          Learn more
          <wui-icon color="inherit" slot="iconRight" name="externalLink"></wui-icon>
        </wui-link>
      </wui-flex>
    `}onboardingTemplate(){return yg` <wui-flex
      flexDirection="column"
      gap="xxl"
      alignItems="center"
      .padding=${["0","xxl","0","xxl"]}
    >
      <wui-flex gap="s" alignItems="center" justifyContent="center">
        <wui-visual name="onrampCard"></wui-visual>
        <wui-visual name="onrampCard"></wui-visual>
        <wui-visual name="onrampCard"></wui-visual>
      </wui-flex>
      <wui-flex flexDirection="column" alignItems="center" gap="s">
        <wui-text align="center" variant="medium-600" color="fg-100">
          Discover Smart Accounts
        </wui-text>
        <wui-text align="center" variant="paragraph-400" color="fg-100">
          Access advanced features such as username, social login, improved security and a smoother
          user experience!
        </wui-text>
      </wui-flex>
    </wui-flex>`}buttonsTemplate(){return yg`<wui-flex .padding=${["0","2l","0","2l"]} gap="s">
      <wui-button variant="accentBg" @click=${zo.goBack} size="lg" borderRadius="xs">
        Do it later
      </wui-button>
      <wui-button size="lg" borderRadius="xs"> Continue </wui-button>
    </wui-flex>`}};Dx=function(e,t,n,i){var r,a=arguments.length,o=a<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,n,i);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(o=(a<3?r(o):a>3?r(t,n,o):r(t,n))||o);return a>3&&o&&Object.defineProperty(t,n,o),o}([_l("w3m-upgrade-to-smart-account-view")],Dx);
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const Bx=2;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let Lx=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,n){this._$Ct=e,this._$AM=t,this._$Ci=n}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const zx=(e,t)=>{var n;const i=e._$AN;if(void 0===i)return!1;for(const r of i)null==(n=r._$AO)||n.call(r,t,!1),zx(r,t);return!0},Fx=e=>{let t,n;do{if(void 0===(t=e._$AM))break;n=t._$AN,n.delete(e),e=t}while(0===(null==n?void 0:n.size))},Wx=e=>{for(let t;t=e._$AM;e=t){let n=t._$AN;if(void 0===n)t._$AN=n=new Set;else if(n.has(e))break;n.add(e),Vx(t)}};function Hx(e){void 0!==this._$AN?(Fx(this),this._$AM=e,Wx(this)):this._$AM=e}function Zx(e,t=!1,n=0){const i=this._$AH,r=this._$AN;if(void 0!==r&&0!==r.size)if(t)if(Array.isArray(i))for(let a=n;a<i.length;a++)zx(i[a],!1),Fx(i[a]);else null!=i&&(zx(i,!1),Fx(i));else zx(this,e)}const Vx=e=>{e.type==Bx&&(e._$AP??(e._$AP=Zx),e._$AQ??(e._$AQ=Hx))};class Gx extends Lx{constructor(){super(...arguments),this._$AN=void 0}_$AT(e,t,n){super._$AT(e,t,n),Wx(this),this.isConnected=e._$AU}_$AO(e,t=!0){var n,i;e!==this.isConnected&&(this.isConnected=e,e?null==(n=this.reconnected)||n.call(this):null==(i=this.disconnected)||i.call(this)),t&&(zx(this,e),Fx(this))}setValue(e){if(void 0===this._$Ct.strings)this._$Ct._$AI(e,this);else{const t=[...this._$Ct._$AH];t[this._$Ci]=e,this._$Ct._$AI(t,this,0)}}disconnected(){}reconnected(){}}
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const qx=()=>new Kx;class Kx{}const Yx=new WeakMap,Jx=(e=>(...t)=>({_$litDirective$:e,values:t}))(class extends Gx{render(e){return bg}update(e,[t]){var n;const i=t!==this.Y;return i&&void 0!==this.Y&&this.rt(void 0),(i||this.lt!==this.ct)&&(this.Y=t,this.ht=null==(n=e.options)?void 0:n.host,this.rt(this.ct=e.element)),bg}rt(e){if("function"==typeof this.Y){const t=this.ht??globalThis;let n=Yx.get(t);void 0===n&&(n=new WeakMap,Yx.set(t,n)),void 0!==n.get(this.Y)&&this.Y.call(this.ht,void 0),n.set(this.Y,e),void 0!==e&&this.Y.call(this.ht,e)}else this.Y.value=e}get lt(){var e,t;return"function"==typeof this.Y?null==(e=Yx.get(this.ht??globalThis))?void 0:e.get(this.Y):null==(t=this.Y)?void 0:t.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}}),Qx=jm`
  wui-email-input {
    width: 100%;
  }

  form {
    width: 100%;
    display: block;
    position: relative;
  }
`;var Xx=function(e,t,n,i){var r,a=arguments.length,o=a<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,n,i);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(o=(a<3?r(o):a>3?r(t,n,o):r(t,n))||o);return a>3&&o&&Object.defineProperty(t,n,o),o};let eC=class extends Mg{constructor(){var e;super(...arguments),this.formRef=qx(),this.initialEmail=(null==(e=zo.state.data)?void 0:e.email)??"",this.email="",this.loading=!1}firstUpdated(){var e;null==(e=this.formRef.value)||e.addEventListener("keydown",(e=>{"Enter"===e.key&&this.onSubmitEmail(e)}))}render(){const e=!this.loading&&this.email.length>3&&this.email!==this.initialEmail;return yg`
      <wui-flex flexDirection="column" padding="m" gap="m">
        <form ${Jx(this.formRef)} @submit=${this.onSubmitEmail.bind(this)}>
          <wui-email-input
            value=${this.initialEmail}
            .disabled=${this.loading}
            @inputChange=${this.onEmailInputChange.bind(this)}
          >
          </wui-email-input>
          <input type="submit" hidden />
        </form>

        <wui-flex gap="s">
          <wui-button size="md" variant="shade" fullWidth @click=${zo.goBack}>
            Cancel
          </wui-button>

          <wui-button
            size="md"
            variant="fill"
            fullWidth
            @click=${this.onSubmitEmail.bind(this)}
            .disabled=${!e}
            .loading=${this.loading}
          >
            Save
          </wui-button>
        </wui-flex>
      </wui-flex>
    `}onEmailInputChange(e){this.email=e.detail}async onSubmitEmail(e){try{if(this.loading)return;this.loading=!0,e.preventDefault();const t=$o.getEmailConnector();if(!t)throw new Error("w3m-update-email-wallet: Email connector not found");await t.provider.updateEmail({email:this.email}),No.sendEvent({type:"track",event:"EMAIL_EDIT"}),zo.replace("UpdateEmailPrimaryOtp",{email:this.initialEmail,newEmail:this.email})}catch(t){Qo.showError(t),this.loading=!1}}};eC.styles=Qx,Xx([Lg()],eC.prototype,"email",void 0),Xx([Lg()],eC.prototype,"loading",void 0),eC=Xx([_l("w3m-update-email-wallet-view")],eC);let tC=class extends Ix{constructor(){var e;super(),this.email=null==(e=zo.state.data)?void 0:e.email,this.onOtpSubmit=async e=>{try{this.emailConnector&&(await this.emailConnector.provider.updateEmailPrimaryOtp({otp:e}),No.sendEvent({type:"track",event:"EMAIL_VERIFICATION_CODE_PASS"}),zo.replace("UpdateEmailSecondaryOtp",zo.state.data))}catch(t){throw No.sendEvent({type:"track",event:"EMAIL_VERIFICATION_CODE_FAIL"}),t}},this.onStartOver=()=>{zo.replace("UpdateEmailWallet",zo.state.data)}}};tC=function(e,t,n,i){var r,a=arguments.length,o=a<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,n,i);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(o=(a<3?r(o):a>3?r(t,n,o):r(t,n))||o);return a>3&&o&&Object.defineProperty(t,n,o),o}([_l("w3m-update-email-primary-otp-view")],tC);let nC=class extends Ix{constructor(){var e;super(),this.email=null==(e=zo.state.data)?void 0:e.newEmail,this.onOtpSubmit=async e=>{try{this.emailConnector&&(await this.emailConnector.provider.updateEmailSecondaryOtp({otp:e}),No.sendEvent({type:"track",event:"EMAIL_VERIFICATION_CODE_PASS"}),zo.reset("Account"))}catch(t){throw No.sendEvent({type:"track",event:"EMAIL_VERIFICATION_CODE_FAIL"}),t}},this.onStartOver=()=>{zo.replace("UpdateEmailWallet",zo.state.data)}}};nC=function(e,t,n,i){var r,a=arguments.length,o=a<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,n,i);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(o=(a<3?r(o):a>3?r(t,n,o):r(t,n))||o);return a>3&&o&&Object.defineProperty(t,n,o),o}([_l("w3m-update-email-secondary-otp-view")],nC);const iC=jm`
  :host > wui-flex {
    max-height: clamp(360px, 540px, 80vh);
    overflow: scroll;
    scrollbar-width: none;
  }

  :host > wui-flex::-webkit-scrollbar {
    display: none;
  }
`;var rC=function(e,t,n,i){var r,a=arguments.length,o=a<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,n,i);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(o=(a<3?r(o):a>3?r(t,n,o):r(t,n))||o);return a>3&&o&&Object.defineProperty(t,n,o),o};let aC=class extends Mg{constructor(){super(...arguments),this.disconecting=!1}render(){return yg`
      <wui-flex class="container" flexDirection="column" gap="0">
        <wui-flex
          class="container"
          flexDirection="column"
          .padding=${["m","xl","xs","xl"]}
          alignItems="center"
          gap="xl"
        >
          <wui-text variant="small-400" color="fg-200" align="center">
            This app doesn’t support your current network. Switch to an available option following
            to continue.
          </wui-text>
        </wui-flex>

        <wui-flex flexDirection="column" padding="s" gap="xs">
          ${this.networksTemplate()}
        </wui-flex>

        <wui-separator text="or"></wui-separator>
        <wui-flex flexDirection="column" padding="s" gap="xs">
          <wui-list-item
            variant="icon"
            iconVariant="overlay"
            icon="disconnect"
            ?chevron=${!1}
            .loading=${this.disconecting}
            @click=${this.onDisconnect.bind(this)}
            data-testid="disconnect-button"
          >
            <wui-text variant="paragraph-500" color="fg-200">Disconnect</wui-text>
          </wui-list-item>
        </wui-flex>
      </wui-flex>
    `}networksTemplate(){const{approvedCaipNetworkIds:e,requestedCaipNetworks:t}=jo.state;return po.sortRequestedNetworks(e,t).map((e=>yg`
        <wui-list-network
          imageSrc=${zg(is.getNetworkImage(e))}
          name=${e.name??"Unknown"}
          @click=${()=>this.onSwitchNetwork(e)}
        >
        </wui-list-network>
      `))}async onDisconnect(){try{this.disconecting=!0,await ns.disconnect(),No.sendEvent({type:"track",event:"DISCONNECT_SUCCESS"}),Wo.close()}catch{No.sendEvent({type:"track",event:"DISCONNECT_ERROR"}),Qo.showError("Failed to disconnect")}finally{this.disconecting=!1}}async onSwitchNetwork(e){const{isConnected:t}=fo.state,{approvedCaipNetworkIds:n,supportsAllNetworks:i,caipNetwork:r}=jo.state,{data:a}=zo.state;t&&(null==r?void 0:r.id)!==e.id?(null==n?void 0:n.includes(e.id))?(await jo.switchActiveNetwork(e),rs.navigateAfterNetworkSwitch()):i&&zo.push("SwitchNetwork",{...a,network:e}):t||(jo.setCaipNetwork(e),zo.push("Connect"))}};aC.styles=iC,rC([Lg()],aC.prototype,"disconecting",void 0),aC=rC([_l("w3m-unsupported-chain-view")],aC);const oC=jm`
  wui-compatible-network {
    margin-top: var(--wui-spacing-l);
  }
`;var sC=function(e,t,n,i){var r,a=arguments.length,o=a<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,n,i);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(o=(a<3?r(o):a>3?r(t,n,o):r(t,n))||o);return a>3&&o&&Object.defineProperty(t,n,o),o};let lC=class extends Mg{constructor(){super(),this.unsubscribe=[],this.address=fo.state.address,this.profileName=fo.state.profileName,this.network=jo.state.caipNetwork,this.unsubscribe.push(fo.subscribe((e=>{e.address?(this.address=e.address,this.profileName=e.profileName):Qo.showError("Account not found")})),jo.subscribeKey("caipNetwork",(e=>{(null==e?void 0:e.id)&&(this.network=e)})))}disconnectedCallback(){this.unsubscribe.forEach((e=>e()))}render(){if(!this.address)throw new Error("w3m-wallet-receive-view: No account provided");const e=is.getNetworkImage(this.network);return yg` <wui-flex
      flexDirection="column"
      .padding=${["xl","l","l","l"]}
      alignItems="center"
    >
      <wui-chip-button
        @click=${this.onCopyClick.bind(this)}
        text=${Ou.getTruncateString({string:this.address??"",charsStart:this.profileName?18:4,charsEnd:this.profileName?0:4,truncate:this.profileName?"end":"middle"})}
        icon="copy"
        imageSrc=${e||""}
        variant="shadeSmall"
      ></wui-chip-button>
      <wui-flex
        flexDirection="column"
        .padding=${["l","0","0","0"]}
        alignItems="center"
        gap="s"
      >
        <wui-qr-code
          size=${232}
          theme=${To.state.themeMode}
          uri=${this.address}
          ?arenaClear=${!0}
          data-testid="wui-qr-code"
        ></wui-qr-code>
        <wui-text variant="paragraph-500" color="fg-100" align="center">
          Copy your address or scan this QR code
        </wui-text>
      </wui-flex>
      ${this.networkTemplate()}
    </wui-flex>`}networkTemplate(){var e;const t=jo.getRequestedCaipNetworks(),n=(null==(e=null==t?void 0:t.filter((e=>null==e?void 0:e.imageId)))?void 0:e.slice(0,5)).map(is.getNetworkImage).filter(Boolean);return yg`<wui-compatible-network
      @click=${this.onReceiveClick.bind(this)}
      text="Only receive assets on these networks"
      .networkImages=${n}
    ></wui-compatible-network>`}onReceiveClick(){zo.push("WalletCompatibleNetworks")}onCopyClick(){try{this.address&&(po.copyToClopboard(this.address),Qo.showSuccess("Address copied"))}catch{Qo.showError("Failed to copy")}}};lC.styles=oC,sC([Lg()],lC.prototype,"address",void 0),sC([Lg()],lC.prototype,"profileName",void 0),sC([Lg()],lC.prototype,"network",void 0),lC=sC([_l("w3m-wallet-receive-view")],lC);const cC=jm`
  :host > wui-flex {
    max-height: clamp(360px, 540px, 80vh);
    overflow: scroll;
    scrollbar-width: none;
  }

  :host > wui-flex::-webkit-scrollbar {
    display: none;
  }
`;let uC=class extends Mg{render(){return yg` <wui-flex
      flexDirection="column"
      .padding=${["xs","s","m","s"]}
      gap="xs"
    >
      <wui-banner
        icon="warningCircle"
        text="You can only receive assets on these networks"
      ></wui-banner>
      ${this.networkTemplate()}
    </wui-flex>`}networkTemplate(){const{approvedCaipNetworkIds:e,requestedCaipNetworks:t}=jo.state;return po.sortRequestedNetworks(e,t).map((e=>yg`
        <wui-list-network
          imageSrc=${zg(is.getNetworkImage(e))}
          name=${e.name??"Unknown"}
          ?transparent=${!0}
        >
        </wui-list-network>
      `))}};uC.styles=cC,uC=function(e,t,n,i){var r,a=arguments.length,o=a<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,n,i);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(o=(a<3?r(o):a>3?r(t,n,o):r(t,n))||o);return a>3&&o&&Object.defineProperty(t,n,o),o}([_l("w3m-wallet-compatible-networks-view")],uC);const dC=jm`
  wui-grid {
    max-height: clamp(360px, 400px, 80vh);
    overflow: scroll;
    scrollbar-width: none;
    grid-auto-rows: min-content;
    grid-template-columns: repeat(auto-fill, 76px);
  }

  @media (max-width: 435px) {
    wui-grid {
      grid-template-columns: repeat(auto-fill, 77px);
    }
  }

  wui-grid[data-scroll='false'] {
    overflow: hidden;
  }

  wui-grid::-webkit-scrollbar {
    display: none;
  }

  wui-loading-spinner {
    padding-top: var(--wui-spacing-l);
    padding-bottom: var(--wui-spacing-l);
    justify-content: center;
    grid-column: 1 / span 4;
  }
`;function pC(e){const{connectors:t}=$o.state,n=t.filter((e=>"ANNOUNCED"===e.type)).reduce(((e,t)=>{var n;return(null==(n=t.info)?void 0:n.rdns)?(e[t.info.rdns]=!0,e):e}),{});return e.map((e=>({...e,installed:Boolean(e.rdns)&&Boolean(n[e.rdns??""])}))).sort(((e,t)=>Number(t.installed)-Number(e.installed)))}var hC=function(e,t,n,i){var r,a=arguments.length,o=a<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,n,i);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(o=(a<3?r(o):a>3?r(t,n,o):r(t,n))||o);return a>3&&o&&Object.defineProperty(t,n,o),o};const fC="local-paginator";let mC=class extends Mg{constructor(){super(),this.unsubscribe=[],this.paginationObserver=void 0,this.initial=!Bo.state.wallets.length,this.wallets=Bo.state.wallets,this.recommended=Bo.state.recommended,this.featured=Bo.state.featured,this.unsubscribe.push(Bo.subscribeKey("wallets",(e=>this.wallets=e)),Bo.subscribeKey("recommended",(e=>this.recommended=e)),Bo.subscribeKey("featured",(e=>this.featured=e)))}firstUpdated(){this.initialFetch(),this.createPaginationObserver()}disconnectedCallback(){var e;this.unsubscribe.forEach((e=>e())),null==(e=this.paginationObserver)||e.disconnect()}render(){return yg`
      <wui-grid
        data-scroll=${!this.initial}
        .padding=${["0","s","s","s"]}
        columnGap="xxs"
        rowGap="l"
        justifyContent="space-between"
      >
        ${this.initial?this.shimmerTemplate(16):this.walletsTemplate()}
        ${this.paginationLoaderTemplate()}
      </wui-grid>
    `}async initialFetch(){var e;const t=null==(e=this.shadowRoot)?void 0:e.querySelector("wui-grid");this.initial&&t&&(await Bo.fetchWallets({page:1}),await t.animate([{opacity:1},{opacity:0}],{duration:200,fill:"forwards",easing:"ease"}).finished,this.initial=!1,t.animate([{opacity:0},{opacity:1}],{duration:200,fill:"forwards",easing:"ease"}))}shimmerTemplate(e,t){return[...Array(e)].map((()=>yg`
        <wui-card-select-loader type="wallet" id=${zg(t)}></wui-card-select-loader>
      `))}walletsTemplate(){return pC([...this.featured,...this.recommended,...this.wallets]).map((e=>yg`
        <wui-card-select
          imageSrc=${zg(is.getWalletImage(e))}
          type="wallet"
          name=${e.name}
          @click=${()=>this.onConnectWallet(e)}
          .installed=${e.installed}
        ></wui-card-select>
      `))}paginationLoaderTemplate(){const{wallets:e,recommended:t,featured:n,count:i}=Bo.state,r=window.innerWidth<352?3:4,a=e.length+t.length;let o=Math.ceil(a/r)*r-a+r;return o-=e.length?n.length%r:0,0===i&&n.length>0?null:0===i||[...n,...e,...t].length<i?this.shimmerTemplate(o,fC):null}createPaginationObserver(){var e;const t=null==(e=this.shadowRoot)?void 0:e.querySelector(`#${fC}`);t&&(this.paginationObserver=new IntersectionObserver((([e])=>{if((null==e?void 0:e.isIntersecting)&&!this.initial){const{page:e,count:t,wallets:n}=Bo.state;n.length<t&&Bo.fetchWallets({page:e+1})}})),this.paginationObserver.observe(t))}onConnectWallet(e){const{connectors:t}=$o.state,n=t.find((({explorerId:t})=>t===e.id));n?zo.push("ConnectingExternal",{connector:n}):zo.push("ConnectingWalletConnect",{wallet:e})}};mC.styles=dC,hC([Lg()],mC.prototype,"initial",void 0),hC([Lg()],mC.prototype,"wallets",void 0),hC([Lg()],mC.prototype,"recommended",void 0),hC([Lg()],mC.prototype,"featured",void 0),mC=hC([_l("w3m-all-wallets-list")],mC);const gC=jm`
  wui-grid,
  wui-loading-spinner,
  wui-flex {
    height: 360px;
  }

  wui-grid {
    overflow: scroll;
    scrollbar-width: none;
    grid-auto-rows: min-content;
  }

  wui-grid[data-scroll='false'] {
    overflow: hidden;
  }

  wui-grid::-webkit-scrollbar {
    display: none;
  }

  wui-loading-spinner {
    justify-content: center;
    align-items: center;
  }
`;var wC=function(e,t,n,i){var r,a=arguments.length,o=a<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,n,i);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(o=(a<3?r(o):a>3?r(t,n,o):r(t,n))||o);return a>3&&o&&Object.defineProperty(t,n,o),o};let yC=class extends Mg{constructor(){super(...arguments),this.prevQuery="",this.loading=!0,this.query=""}render(){return this.onSearch(),this.loading?yg`<wui-loading-spinner color="accent-100"></wui-loading-spinner>`:this.walletsTemplate()}async onSearch(){this.query!==this.prevQuery&&(this.prevQuery=this.query,this.loading=!0,await Bo.searchWallet({search:this.query}),this.loading=!1)}walletsTemplate(){const{search:e}=Bo.state,t=pC(e);return e.length?yg`
      <wui-grid
        .padding=${["0","s","s","s"]}
        gridTemplateColumns="repeat(4, 1fr)"
        rowGap="l"
        columnGap="xs"
      >
        ${t.map((e=>yg`
            <wui-card-select
              imageSrc=${zg(is.getWalletImage(e))}
              type="wallet"
              name=${e.name}
              @click=${()=>this.onConnectWallet(e)}
              .installed=${e.installed}
            ></wui-card-select>
          `))}
      </wui-grid>
    `:yg`
        <wui-flex justifyContent="center" alignItems="center" gap="s" flexDirection="column">
          <wui-icon-box
            size="lg"
            iconColor="fg-200"
            backgroundColor="fg-300"
            icon="wallet"
            background="transparent"
          ></wui-icon-box>
          <wui-text color="fg-200" variant="paragraph-500">No Wallet found</wui-text>
        </wui-flex>
      `}onConnectWallet(e){const{connectors:t}=$o.state,n=t.find((({explorerId:t})=>t===e.id));n?zo.push("ConnectingExternal",{connector:n}):zo.push("ConnectingWalletConnect",{wallet:e})}};yC.styles=gC,wC([Lg()],yC.prototype,"loading",void 0),wC([Bg()],yC.prototype,"query",void 0),yC=wC([_l("w3m-all-wallets-search")],yC);var vC=function(e,t,n,i){var r,a=arguments.length,o=a<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,n,i);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(o=(a<3?r(o):a>3?r(t,n,o):r(t,n))||o);return a>3&&o&&Object.defineProperty(t,n,o),o};let bC=class extends Mg{constructor(){super(),this.platformTabs=[],this.unsubscribe=[],this.platforms=[],this.onSelectPlatfrom=void 0,this.buffering=!1,this.unsubscribe.push(ns.subscribeKey("buffering",(e=>this.buffering=e)))}disconnectCallback(){this.unsubscribe.forEach((e=>e()))}render(){const e=this.generateTabs();return yg`
      <wui-flex justifyContent="center" .padding=${["l","0","0","0"]}>
        <wui-tabs
          ?disabled=${this.buffering}
          .tabs=${e}
          .onTabChange=${this.onTabChange.bind(this)}
        ></wui-tabs>
      </wui-flex>
    `}generateTabs(){const e=this.platforms.map((e=>"browser"===e?{label:"Browser",icon:"extension",platform:"browser"}:"mobile"===e?{label:"Mobile",icon:"mobile",platform:"mobile"}:"qrcode"===e?{label:"Mobile",icon:"mobile",platform:"qrcode"}:"web"===e?{label:"Webapp",icon:"browser",platform:"web"}:"desktop"===e?{label:"Desktop",icon:"desktop",platform:"desktop"}:{label:"Browser",icon:"extension",platform:"unsupported"}));return this.platformTabs=e.map((({platform:e})=>e)),e}onTabChange(e){var t;const n=this.platformTabs[e];n&&(null==(t=this.onSelectPlatfrom)||t.call(this,n))}};vC([Bg({type:Array})],bC.prototype,"platforms",void 0),vC([Bg()],bC.prototype,"onSelectPlatfrom",void 0),vC([Lg()],bC.prototype,"buffering",void 0),bC=vC([_l("w3m-connecting-header")],bC);let xC=class extends kw{constructor(){if(super(),!this.wallet)throw new Error("w3m-connecting-wc-browser: No wallet provided");this.onConnect=this.onConnectProxy.bind(this),this.onAutoConnect=this.onConnectProxy.bind(this),No.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet.name,platform:"browser"}})}async onConnectProxy(){var e;try{this.error=!1;const{connectors:t}=$o.state,n=t.find((e=>{var t,n;return"ANNOUNCED"===e.type&&(null==(t=e.info)?void 0:t.rdns)===(null==(n=this.wallet)?void 0:n.rdns)})),i=t.find((e=>"INJECTED"===e.type));n?await ns.connectExternal(n):i&&await ns.connectExternal(i),Wo.close(),No.sendEvent({type:"track",event:"CONNECT_SUCCESS",properties:{method:"browser",name:(null==(e=this.wallet)?void 0:e.name)||"Unknown"}})}catch(t){No.sendEvent({type:"track",event:"CONNECT_ERROR",properties:{message:(null==t?void 0:t.message)??"Unknown"}}),this.error=!0}}};xC=function(e,t,n,i){var r,a=arguments.length,o=a<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,n,i);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(o=(a<3?r(o):a>3?r(t,n,o):r(t,n))||o);return a>3&&o&&Object.defineProperty(t,n,o),o}([_l("w3m-connecting-wc-browser")],xC);let CC=class extends kw{constructor(){if(super(),!this.wallet)throw new Error("w3m-connecting-wc-desktop: No wallet provided");this.onConnect=this.onConnectProxy.bind(this),this.onRender=this.onRenderProxy.bind(this),No.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet.name,platform:"desktop"}})}onRenderProxy(){!this.ready&&this.uri&&(this.ready=!0,this.timeout=setTimeout((()=>{var e;null==(e=this.onConnect)||e.call(this)}),200))}onConnectProxy(){var e;if((null==(e=this.wallet)?void 0:e.desktop_link)&&this.uri)try{this.error=!1;const{desktop_link:e,name:t}=this.wallet,{redirect:n,href:i}=po.formatNativeUrl(e,this.uri);ns.setWcLinking({name:t,href:i}),ns.setRecentWallet(this.wallet),po.openHref(n,"_blank")}catch{this.error=!0}}};CC=function(e,t,n,i){var r,a=arguments.length,o=a<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,n,i);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(o=(a<3?r(o):a>3?r(t,n,o):r(t,n))||o);return a>3&&o&&Object.defineProperty(t,n,o),o}([_l("w3m-connecting-wc-desktop")],CC);let _C=class extends kw{constructor(){if(super(),!this.wallet)throw new Error("w3m-connecting-wc-mobile: No wallet provided");this.onConnect=this.onConnectProxy.bind(this),this.onRender=this.onRenderProxy.bind(this),document.addEventListener("visibilitychange",this.onBuffering.bind(this)),No.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet.name,platform:"mobile"}})}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("visibilitychange",this.onBuffering.bind(this))}onRenderProxy(){var e;!this.ready&&this.uri&&(this.ready=!0,null==(e=this.onConnect)||e.call(this))}onConnectProxy(){var e;if((null==(e=this.wallet)?void 0:e.mobile_link)&&this.uri)try{this.error=!1;const{mobile_link:e,name:t}=this.wallet,{redirect:n,href:i}=po.formatNativeUrl(e,this.uri);ns.setWcLinking({name:t,href:i}),ns.setRecentWallet(this.wallet),po.openHref(n,"_self")}catch{this.error=!0}}onBuffering(){const e=po.isIos();"visible"===(null==document?void 0:document.visibilityState)&&!this.error&&e&&(ns.setBuffering(!0),setTimeout((()=>{ns.setBuffering(!1)}),5e3))}};_C=function(e,t,n,i){var r,a=arguments.length,o=a<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,n,i);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(o=(a<3?r(o):a>3?r(t,n,o):r(t,n))||o);return a>3&&o&&Object.defineProperty(t,n,o),o}([_l("w3m-connecting-wc-mobile")],_C);const EC=jm`
  @keyframes fadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  wui-shimmer {
    width: 100%;
    aspect-ratio: 1 / 1;
    border-radius: clamp(0px, var(--wui-border-radius-l), 40px) !important;
  }

  wui-qr-code {
    opacity: 0;
    animation-duration: 200ms;
    animation-timing-function: ease;
    animation-name: fadein;
    animation-fill-mode: forwards;
  }
`;let kC=class extends kw{constructor(){var e;super(),this.forceUpdate=()=>{this.requestUpdate()},window.addEventListener("resize",this.forceUpdate),No.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:(null==(e=this.wallet)?void 0:e.name)??"WalletConnect",platform:"qrcode"}})}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener("resize",this.forceUpdate)}render(){return this.onRenderProxy(),yg`
      <wui-flex padding="xl" flexDirection="column" gap="xl" alignItems="center">
        <wui-shimmer borderRadius="l" width="100%"> ${this.qrCodeTemplate()} </wui-shimmer>

        <wui-text variant="paragraph-500" color="fg-100">
          Scan this QR Code with your phone
        </wui-text>
        ${this.copyTemplate()}
      </wui-flex>

      <w3m-mobile-download-links .wallet=${this.wallet}></w3m-mobile-download-links>
    `}onRenderProxy(){!this.ready&&this.uri&&(this.timeout=setTimeout((()=>{this.ready=!0}),200))}qrCodeTemplate(){if(!this.uri||!this.ready)return null;const e=this.getBoundingClientRect().width-40,t=this.wallet?this.wallet.name:void 0;return ns.setWcLinking(void 0),ns.setRecentWallet(this.wallet),yg` <wui-qr-code
      size=${e}
      theme=${To.state.themeMode}
      uri=${this.uri}
      imageSrc=${zg(is.getWalletImage(this.wallet))}
      alt=${zg(t)}
      data-testid="wui-qr-code"
    ></wui-qr-code>`}copyTemplate(){const e=!this.uri||!this.ready;return yg`<wui-link
      .disabled=${e}
      @click=${this.onCopyUri}
      color="fg-200"
      data-testid="copy-wc2-uri"
    >
      <wui-icon size="xs" color="fg-200" slot="iconLeft" name="copy"></wui-icon>
      Copy link
    </wui-link>`}};kC.styles=EC,kC=function(e,t,n,i){var r,a=arguments.length,o=a<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,n,i);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(o=(a<3?r(o):a>3?r(t,n,o):r(t,n))||o);return a>3&&o&&Object.defineProperty(t,n,o),o}([_l("w3m-connecting-wc-qrcode")],kC);let TC=class extends Mg{constructor(){var e;if(super(),this.wallet=null==(e=zo.state.data)?void 0:e.wallet,!this.wallet)throw new Error("w3m-connecting-wc-unsupported: No wallet provided");No.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet.name,platform:"browser"}})}render(){return yg`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        .padding=${["3xl","xl","xl","xl"]}
        gap="xl"
      >
        <wui-wallet-image
          size="lg"
          imageSrc=${zg(is.getWalletImage(this.wallet))}
        ></wui-wallet-image>

        <wui-text variant="paragraph-500" color="fg-100">Not Detected</wui-text>
      </wui-flex>

      <w3m-mobile-download-links .wallet=${this.wallet}></w3m-mobile-download-links>
    `}};TC=function(e,t,n,i){var r,a=arguments.length,o=a<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,n,i);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(o=(a<3?r(o):a>3?r(t,n,o):r(t,n))||o);return a>3&&o&&Object.defineProperty(t,n,o),o}([_l("w3m-connecting-wc-unsupported")],TC);let AC=class extends kw{constructor(){if(super(),!this.wallet)throw new Error("w3m-connecting-wc-web: No wallet provided");this.onConnect=this.onConnectProxy.bind(this),this.secondaryBtnLabel="Open",this.secondaryLabel="Open and continue in a new browser tab",this.secondaryBtnIcon="externalLink",No.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet.name,platform:"web"}})}onConnectProxy(){var e;if((null==(e=this.wallet)?void 0:e.webapp_link)&&this.uri)try{this.error=!1;const{webapp_link:e,name:t}=this.wallet,{redirect:n,href:i}=po.formatUniversalUrl(e,this.uri);ns.setWcLinking({name:t,href:i}),ns.setRecentWallet(this.wallet),po.openHref(n,"_blank")}catch{this.error=!0}}};AC=function(e,t,n,i){var r,a=arguments.length,o=a<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,n,i);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(o=(a<3?r(o):a>3?r(t,n,o):r(t,n))||o);return a>3&&o&&Object.defineProperty(t,n,o),o}([_l("w3m-connecting-wc-web")],AC);const $C=jm`
  wui-icon-link[data-hidden='true'] {
    opacity: 0 !important;
    pointer-events: none;
  }
`;var IC=function(e,t,n,i){var r,a=arguments.length,o=a<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,n,i);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(o=(a<3?r(o):a>3?r(t,n,o):r(t,n))||o);return a>3&&o&&Object.defineProperty(t,n,o),o};function PC(){var e,t,n,i,r,a,o;const s=null==(t=null==(e=zo.state.data)?void 0:e.connector)?void 0:t.name,l=null==(i=null==(n=zo.state.data)?void 0:n.wallet)?void 0:i.name,c=null==(a=null==(r=zo.state.data)?void 0:r.network)?void 0:a.name,u=l??s,d=$o.getConnectors();return{Connect:`Connect ${1===d.length&&"w3m-email"===(null==(o=d[0])?void 0:o.id)?"Email":""} Wallet`,Account:void 0,AccountSettings:void 0,ConnectingExternal:u??"Connect Wallet",ConnectingWalletConnect:u??"WalletConnect",ConnectingSiwe:"Sign In",Networks:"Choose Network",SwitchNetwork:c??"Switch Network",AllWallets:"All Wallets",WhatIsANetwork:"What is a network?",WhatIsAWallet:"What is a wallet?",GetWallet:"Get a wallet",Downloads:u?`Get ${u}`:"Downloads",EmailVerifyOtp:"Confirm Email",EmailVerifyDevice:"Register Device",ApproveTransaction:"Approve Transaction",Transactions:"Activity",UpgradeEmailWallet:"Upgrade your Wallet",UpgradeToSmartAccount:void 0,UpdateEmailWallet:"Edit Email",UpdateEmailPrimaryOtp:"Confirm Current Email",UpdateEmailSecondaryOtp:"Confirm New Email",UnsupportedChain:"Switch Network",OnRampProviders:"Choose Provider",OnRampActivity:"Activity",WhatIsABuy:"What is Buy?",BuyInProgress:"Buy",OnRampTokenSelect:"Select Token",OnRampFiatSelect:"Select Currency",WalletReceive:"Receive",WalletCompatibleNetworks:"Compatible Networks"}}let SC=class extends Mg{constructor(){super(),this.unsubscribe=[],this.heading=PC()[zo.state.view],this.buffering=!1,this.showBack=!1,this.unsubscribe.push(zo.subscribeKey("view",(e=>{this.onViewChange(e),this.onHistoryChange()})),ns.subscribeKey("buffering",(e=>this.buffering=e)))}disconnectCallback(){this.unsubscribe.forEach((e=>e()))}render(){return yg`
      <wui-flex .padding=${this.getPadding()} justifyContent="space-between" alignItems="center">
        ${this.dynamicButtonTemplate()} ${this.titleTemplate()}
        <wui-icon-link
          ?disabled=${this.buffering}
          icon="close"
          @click=${this.onClose.bind(this)}
          data-testid="w3m-header-close"
        ></wui-icon-link>
      </wui-flex>
      ${this.separatorTemplate()}
    `}onWalletHelp(){No.sendEvent({type:"track",event:"CLICK_WALLET_HELP"}),zo.push("WhatIsAWallet")}async onClose(){if(Eo.state.isSiweEnabled){const{SIWEController:e}=await r((()=>import("./index-Bl-upnK5.js")),__vite__mapDeps([]),import.meta.url);"success"!==e.state.status&&await ns.disconnect()}Wo.close()}titleTemplate(){return yg`<wui-text variant="paragraph-700" color="fg-100">${this.heading}</wui-text>`}dynamicButtonTemplate(){const{view:e}=zo.state,t="Connect"===e,n="ApproveTransaction"===e||"UpgradeToSmartAccount"===e;return this.showBack&&!n?yg`<wui-icon-link
        id="dynamic"
        icon="chevronLeft"
        ?disabled=${this.buffering}
        @click=${this.onGoBack.bind(this)}
      ></wui-icon-link>`:yg`<wui-icon-link
      data-hidden=${!t}
      id="dynamic"
      icon="helpCircle"
      @click=${this.onWalletHelp.bind(this)}
    ></wui-icon-link>`}separatorTemplate(){return this.heading?yg`<wui-separator></wui-separator>`:null}getPadding(){return this.heading?["l","2l","l","2l"]:["l","2l","0","2l"]}async onViewChange(e){var t;const n=null==(t=this.shadowRoot)?void 0:t.querySelector("wui-text");if(n){const t=PC()[e];await n.animate([{opacity:1},{opacity:0}],{duration:200,fill:"forwards",easing:"ease"}).finished,this.heading=t,n.animate([{opacity:0},{opacity:1}],{duration:200,fill:"forwards",easing:"ease"})}}async onHistoryChange(){var e;const{history:t}=zo.state,n=null==(e=this.shadowRoot)?void 0:e.querySelector("#dynamic");t.length>1&&!this.showBack&&n?(await n.animate([{opacity:1},{opacity:0}],{duration:200,fill:"forwards",easing:"ease"}).finished,this.showBack=!0,n.animate([{opacity:0},{opacity:1}],{duration:200,fill:"forwards",easing:"ease"})):t.length<=1&&this.showBack&&n&&(await n.animate([{opacity:1},{opacity:0}],{duration:200,fill:"forwards",easing:"ease"}).finished,this.showBack=!1,n.animate([{opacity:0},{opacity:1}],{duration:200,fill:"forwards",easing:"ease"}))}onGoBack(){"ConnectingSiwe"===zo.state.view?zo.push("Connect"):zo.goBack()}};SC.styles=[$C],IC([Lg()],SC.prototype,"heading",void 0),IC([Lg()],SC.prototype,"buffering",void 0),IC([Lg()],SC.prototype,"showBack",void 0),SC=IC([_l("w3m-header")],SC);var RC=function(e,t,n,i){var r,a=arguments.length,o=a<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,n,i);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(o=(a<3?r(o):a>3?r(t,n,o):r(t,n))||o);return a>3&&o&&Object.defineProperty(t,n,o),o};let OC=class extends Mg{constructor(){super(...arguments),this.data=[]}render(){return yg`
      <wui-flex flexDirection="column" alignItems="center" gap="l">
        ${this.data.map((e=>yg`
            <wui-flex flexDirection="column" alignItems="center" gap="xl">
              <wui-flex flexDirection="row" justifyContent="center" gap="1xs">
                ${e.images.map((e=>yg`<wui-visual name=${e}></wui-visual>`))}
              </wui-flex>
            </wui-flex>
            <wui-flex flexDirection="column" alignItems="center" gap="xxs">
              <wui-text variant="paragraph-500" color="fg-100" align="center">
                ${e.title}
              </wui-text>
              <wui-text variant="small-500" color="fg-200" align="center">${e.text}</wui-text>
            </wui-flex>
          `))}
      </wui-flex>
    `}};RC([Bg({type:Array})],OC.prototype,"data",void 0),OC=RC([_l("w3m-help-widget")],OC);const NC=jm`
  :host {
    width: 100%;
  }

  wui-loading-spinner {
    position: absolute;
    top: 50%;
    right: 20px;
    transform: translateY(-50%);
  }

  .currency-container {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    transition: all var(--wui-ease-in-power-2) var(--wui-duration-md);
    right: var(--wui-spacing-1xs);
    height: 40px;
    padding: var(--wui-spacing-xs) var(--wui-spacing-1xs) var(--wui-spacing-xs)
      var(--wui-spacing-xs);
    min-width: 95px;
    border-radius: var(--FULL, 1000px);
    border: 1px solid var(--wui-gray-glass-002);
    background: var(--wui-gray-glass-002);
    cursor: pointer;
  }

  .currency-container > wui-image {
    height: 24px;
    width: 24px;
    border-radius: 50%;
  }
`;var MC=function(e,t,n,i){var r,a=arguments.length,o=a<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,n,i);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(o=(a<3?r(o):a>3?r(t,n,o):r(t,n))||o);return a>3&&o&&Object.defineProperty(t,n,o),o};let jC=class extends Mg{constructor(){var e;super(),this.unsubscribe=[],this.type="Token",this.value=0,this.currencies=[],this.selectedCurrency=null==(e=this.currencies)?void 0:e[0],this.currencyImages=Co.state.currencyImages,this.tokenImages=Co.state.tokenImages,this.unsubscribe.push(Yo.subscribeKey("purchaseCurrency",(e=>{e&&"Fiat"!==this.type&&(this.selectedCurrency=this.formatPurchaseCurrency(e))})),Yo.subscribeKey("paymentCurrency",(e=>{e&&"Token"!==this.type&&(this.selectedCurrency=this.formatPaymentCurrency(e))})),Yo.subscribe((e=>{"Fiat"===this.type?this.currencies=e.purchaseCurrencies.map(this.formatPurchaseCurrency):this.currencies=e.paymentCurrencies.map(this.formatPaymentCurrency)})),Co.subscribe((e=>{this.currencyImages={...e.currencyImages},this.tokenImages={...e.tokenImages}})))}firstUpdated(){Yo.getAvailableCurrencies()}disconnectedCallback(){this.unsubscribe.forEach((e=>e()))}render(){var e;const t=(null==(e=this.selectedCurrency)?void 0:e.symbol)||"",n=this.currencyImages[t]||this.tokenImages[t];return yg` <wui-input-text type="number" size="lg" value=${this.value}>
      ${this.selectedCurrency?yg` <wui-flex
            class="currency-container"
            justifyContent="space-between"
            alignItems="center"
            gap="xxs"
            @click=${()=>Wo.open({view:`OnRamp${this.type}Select`})}
          >
            <wui-image src=${zg(n)}></wui-image>
            <wui-text color="fg-100"> ${this.selectedCurrency.symbol} </wui-text>
          </wui-flex>`:yg`<wui-loading-spinner></wui-loading-spinner>`}
    </wui-input-text>`}formatPaymentCurrency(e){return{name:e.id,symbol:e.id}}formatPurchaseCurrency(e){return{name:e.name,symbol:e.symbol}}};jC.styles=NC,MC([Bg({type:String})],jC.prototype,"type",void 0),MC([Bg({type:Number})],jC.prototype,"value",void 0),MC([Lg()],jC.prototype,"currencies",void 0),MC([Lg()],jC.prototype,"selectedCurrency",void 0),MC([Lg()],jC.prototype,"currencyImages",void 0),MC([Lg()],jC.prototype,"tokenImages",void 0),jC=MC([_l("w3m-swap-input")],jC);const UC=jm`
  wui-flex {
    background-color: var(--wui-gray-glass-005);
  }

  a {
    text-decoration: none;
    color: var(--wui-color-fg-175);
    font-weight: 500;
  }
`;let DC=class extends Mg{render(){const{termsConditionsUrl:e,privacyPolicyUrl:t}=Eo.state;return e||t?yg`
      <wui-flex .padding=${["m","s","s","s"]} justifyContent="center">
        <wui-text color="fg-250" variant="small-400" align="center">
          By connecting your wallet, you agree to our <br />
          ${this.termsTemplate()} ${this.andTemplate()} ${this.privacyTemplate()}
        </wui-text>
      </wui-flex>
    `:null}andTemplate(){const{termsConditionsUrl:e,privacyPolicyUrl:t}=Eo.state;return e&&t?"and":""}termsTemplate(){const{termsConditionsUrl:e}=Eo.state;return e?yg`<a href=${e}>Terms of Service</a>`:null}privacyTemplate(){const{privacyPolicyUrl:e}=Eo.state;return e?yg`<a href=${e}>Privacy Policy</a>`:null}};DC.styles=[UC],DC=function(e,t,n,i){var r,a=arguments.length,o=a<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,n,i);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(o=(a<3?r(o):a>3?r(t,n,o):r(t,n))||o);return a>3&&o&&Object.defineProperty(t,n,o),o}([_l("w3m-legal-footer")],DC);const BC=jm`
  :host {
    display: block;
    padding: 0 var(--wui-spacing-xl) var(--wui-spacing-xl);
  }
`;var LC=function(e,t,n,i){var r,a=arguments.length,o=a<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,n,i);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(o=(a<3?r(o):a>3?r(t,n,o):r(t,n))||o);return a>3&&o&&Object.defineProperty(t,n,o),o};let zC=class extends Mg{constructor(){super(...arguments),this.wallet=void 0}render(){if(!this.wallet)return this.style.display="none",null;const{name:e,app_store:t,play_store:n,chrome_store:i,homepage:r}=this.wallet,a=po.isMobile(),o=po.isIos(),s=po.isAndroid(),l=[t,n,r,i].filter(Boolean).length>1,c=Ou.getTruncateString({string:e,charsStart:12,charsEnd:0,truncate:"end"});return l&&!a?yg`
        <wui-cta-button
          label=${`Don't have ${c}?`}
          buttonLabel="Get"
          @click=${()=>zo.push("Downloads",{wallet:this.wallet})}
        ></wui-cta-button>
      `:!l&&r?yg`
        <wui-cta-button
          label=${`Don't have ${c}?`}
          buttonLabel="Get"
          @click=${this.onHomePage.bind(this)}
        ></wui-cta-button>
      `:t&&o?yg`
        <wui-cta-button
          label=${`Don't have ${c}?`}
          buttonLabel="Get"
          @click=${this.onAppStore.bind(this)}
        ></wui-cta-button>
      `:n&&s?yg`
        <wui-cta-button
          label=${`Don't have ${c}?`}
          buttonLabel="Get"
          @click=${this.onPlayStore.bind(this)}
        ></wui-cta-button>
      `:(this.style.display="none",null)}onAppStore(){var e;(null==(e=this.wallet)?void 0:e.app_store)&&po.openHref(this.wallet.app_store,"_blank")}onPlayStore(){var e;(null==(e=this.wallet)?void 0:e.play_store)&&po.openHref(this.wallet.play_store,"_blank")}onHomePage(){var e;(null==(e=this.wallet)?void 0:e.homepage)&&po.openHref(this.wallet.homepage,"_blank")}};zC.styles=[BC],LC([Bg({type:Object})],zC.prototype,"wallet",void 0),zC=LC([_l("w3m-mobile-download-links")],zC);const FC=jm`
  wui-flex {
    border-top: 1px solid var(--wui-gray-glass-005);
  }

  a {
    text-decoration: none;
    color: var(--wui-color-fg-175);
    font-weight: 500;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: var(--wui-spacing-3xs);
  }
`;let WC=class extends Mg{render(){const{termsConditionsUrl:e,privacyPolicyUrl:t}=Eo.state;return e||t?yg`
      <wui-flex
        .padding=${["m","s","s","s"]}
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        gap="s"
      >
        <wui-text color="fg-250" variant="small-400" align="center">
          We work with the best providers to fit your buyer needs, region, and to get you the lowest
          fees
        </wui-text>

        ${this.whatIsBuyTemplate()}
      </wui-flex>
    `:null}whatIsBuyTemplate(){return yg` <wui-link @click=${this.onWhatIsBuy.bind(this)}>
      <wui-icon size="xs" color="accent-100" slot="iconLeft" name="helpCircle"></wui-icon>
      What is Buy
    </wui-link>`}onWhatIsBuy(){zo.push("WhatIsABuy")}};WC.styles=[FC],WC=function(e,t,n,i){var r,a=arguments.length,o=a<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,n,i);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(o=(a<3?r(o):a>3?r(t,n,o):r(t,n))||o);return a>3&&o&&Object.defineProperty(t,n,o),o}([_l("w3m-onramp-providers-footer")],WC);const HC=jm`
  :host {
    display: block;
    position: absolute;
    opacity: 0;
    pointer-events: none;
    top: 11px;
    left: 50%;
    width: max-content;
  }
`;var ZC=function(e,t,n,i){var r,a=arguments.length,o=a<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,n,i);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(o=(a<3?r(o):a>3?r(t,n,o):r(t,n))||o);return a>3&&o&&Object.defineProperty(t,n,o),o};const VC={success:{backgroundColor:"success-100",iconColor:"success-100",icon:"checkmark"},error:{backgroundColor:"error-100",iconColor:"error-100",icon:"close"}};let GC=class extends Mg{constructor(){super(),this.unsubscribe=[],this.timeout=void 0,this.open=Qo.state.open,this.unsubscribe.push(Qo.subscribeKey("open",(e=>{this.open=e,this.onOpen()})))}disconnectedCallback(){clearTimeout(this.timeout),this.unsubscribe.forEach((e=>e()))}render(){const{message:e,variant:t}=Qo.state,n=VC[t];return yg`
      <wui-snackbar
        message=${e}
        backgroundColor=${n.backgroundColor}
        iconColor=${n.iconColor}
        icon=${n.icon}
      ></wui-snackbar>
    `}onOpen(){clearTimeout(this.timeout),this.open?(this.animate([{opacity:0,transform:"translateX(-50%) scale(0.85)"},{opacity:1,transform:"translateX(-50%) scale(1)"}],{duration:150,fill:"forwards",easing:"ease"}),this.timeout=setTimeout((()=>Qo.hide()),2500)):this.animate([{opacity:1,transform:"translateX(-50%) scale(1)"},{opacity:0,transform:"translateX(-50%) scale(0.85)"}],{duration:150,fill:"forwards",easing:"ease"})}};GC.styles=HC,ZC([Lg()],GC.prototype,"open",void 0),GC=ZC([_l("w3m-snackbar")],GC);const qC=jm`
  wui-separator {
    margin: var(--wui-spacing-s) calc(var(--wui-spacing-s) * -1);
    width: calc(100% + var(--wui-spacing-s) * 2);
  }

  wui-email-input {
    width: 100%;
  }

  form {
    width: 100%;
    display: block;
    position: relative;
  }

  wui-icon-link,
  wui-loading-spinner {
    position: absolute;
    top: 21px;
    transform: translateY(-50%);
  }

  wui-icon-link {
    right: var(--wui-spacing-xs);
  }

  wui-loading-spinner {
    right: var(--wui-spacing-m);
  }

  .betaBanner {
    padding: 10px 12px 10px 10px;
    border-radius: var(--wui-border-radius-s);
    background: var(--wui-accent-glass-010);
    margin-bottom: var(--wui-spacing-s);
  }
`;var KC=function(e,t,n,i){var r,a=arguments.length,o=a<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,n,i);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(o=(a<3?r(o):a>3?r(t,n,o):r(t,n))||o);return a>3&&o&&Object.defineProperty(t,n,o),o};let YC=class extends Mg{constructor(){super(),this.unsubscribe=[],this.formRef=qx(),this.connectors=$o.state.connectors,this.email="",this.loading=!1,this.error="",this.unsubscribe.push($o.subscribeKey("connectors",(e=>this.connectors=e)))}disconnectedCallback(){this.unsubscribe.forEach((e=>e()))}firstUpdated(){var e;null==(e=this.formRef.value)||e.addEventListener("keydown",(e=>{"Enter"===e.key&&this.onSubmitEmail(e)}))}render(){const e=this.connectors.length>1;return this.connectors.find((e=>"EMAIL"===e.type))?yg`
      ${this.betaWarningTemplate()}
      <form ${Jx(this.formRef)} @submit=${this.onSubmitEmail.bind(this)}>
        <wui-email-input
          @focus=${this.onFocusEvent.bind(this)}
          .disabled=${this.loading}
          @inputChange=${this.onEmailInputChange.bind(this)}
          .errorMessage=${this.error}
        >
        </wui-email-input>

        ${this.submitButtonTemplate()}${this.loadingTemplate()}
        <input type="submit" hidden />
      </form>

      ${e?yg`<wui-separator text="or"></wui-separator>`:null}
    `:null}betaWarningTemplate(){return yg`
          <wui-flex class="betaBanner" gap="xs" alignItems="center" justifyContent="center">
            <wui-text variant="small-400" color="accent-100">Email login is in beta</wui-text>
          </wui-flex>
        `}submitButtonTemplate(){return!this.loading&&this.email.length>3?yg`
          <wui-icon-link
            size="sm"
            icon="chevronRight"
            iconcolor="accent-100"
            @click=${this.onSubmitEmail.bind(this)}
          >
          </wui-icon-link>
        `:null}loadingTemplate(){return this.loading?yg`<wui-loading-spinner size="md" color="accent-100"></wui-loading-spinner>`:null}onEmailInputChange(e){this.email=e.detail,this.error=""}async onSubmitEmail(e){try{if(this.loading)return;this.loading=!0,e.preventDefault();const t=$o.getEmailConnector();if(!t)throw new Error("w3m-email-login-widget: Email connector not found");const{action:n}=await t.provider.connectEmail({email:this.email});No.sendEvent({type:"track",event:"EMAIL_SUBMITTED"}),"VERIFY_OTP"===n?(No.sendEvent({type:"track",event:"EMAIL_VERIFICATION_CODE_SENT"}),zo.push("EmailVerifyOtp",{email:this.email})):"VERIFY_DEVICE"===n&&zo.push("EmailVerifyDevice",{email:this.email})}catch(t){const e=po.parseError(t);(null==e?void 0:e.includes("Invalid email"))?this.error="Invalid email. Try again.":Qo.showError(t)}finally{this.loading=!1}}onFocusEvent(){No.sendEvent({type:"track",event:"EMAIL_LOGIN_SELECTED"})}};YC.styles=qC,KC([Lg()],YC.prototype,"connectors",void 0),KC([Lg()],YC.prototype,"email",void 0),KC([Lg()],YC.prototype,"loading",void 0),KC([Lg()],YC.prototype,"error",void 0),YC=KC([_l("w3m-email-login-widget")],YC);const JC=jm`
  wui-flex {
    width: 100%;
  }

  :host > wui-flex:first-child {
    transform: translateY(calc(var(--wui-spacing-xxs) * -1));
  }

  wui-icon-link {
    margin-right: calc(var(--wui-icon-box-size-md) * -1);
  }

  wui-notice-card {
    margin-bottom: var(--wui-spacing-3xs);
  }

  w3m-transactions-view {
    max-height: 200px;
  }

  .tab-content-container {
    height: 300px;
    overflow-y: auto;
    overflow-x: hidden;
    scrollbar-width: none;
  }

  .account-button {
    width: auto;
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: var(--wui-spacing-s);
    height: 48px;
    padding: var(--wui-spacing-xs);
    padding-right: var(--wui-spacing-s);
    box-shadow: inset 0 0 0 1px var(--wui-gray-glass-002);
    background-color: var(--wui-gray-glass-002);
    border-radius: 24px;
    transaction: background-color 0.2s linear;
  }

  .account-button:hover {
    background-color: var(--wui-gray-glass-005);
  }

  .avatar-container {
    position: relative;
  }

  wui-avatar.avatar {
    width: 32px;
    height: 32px;
    box-shadow: 0 0 0 2px var(--wui-gray-glass-005);
  }

  wui-avatar.network-avatar {
    width: 16px;
    height: 16px;
    position: absolute;
    left: 100%;
    top: 100%;
    transform: translate(-75%, -75%);
    box-shadow: 0 0 0 2px var(--wui-gray-glass-005);
  }

  .account-links {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .account-links wui-flex {
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1;
    background: red;
    align-items: center;
    justify-content: center;
    height: 48px;
    padding: 10px;
    flex: 1 0 0;

    border-radius: var(--XS, 16px);
    border: 1px solid var(--dark-accent-glass-010, rgba(71, 161, 255, 0.1));
    background: var(--dark-accent-glass-010, rgba(71, 161, 255, 0.1));
    transition: background 0.2s linear;
  }

  .account-links wui-flex:hover {
    background: var(--dark-accent-glass-015, rgba(71, 161, 255, 0.15));
  }

  .account-links wui-flex wui-icon {
    width: var(--S, 20px);
    height: var(--S, 20px);
  }

  .account-links wui-flex wui-icon svg path {
    stroke: #47a1ff;
  }
`;var QC=function(e,t,n,i){var r,a=arguments.length,o=a<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,n,i);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(o=(a<3?r(o):a>3?r(t,n,o):r(t,n))||o);return a>3&&o&&Object.defineProperty(t,n,o),o};let XC=class extends Mg{constructor(){super(),this.unsubscribe=[],this.address=fo.state.address,this.profileImage=fo.state.profileImage,this.profileName=fo.state.profileName,this.network=jo.state.caipNetwork,this.disconnecting=!1,this.balance=fo.state.balance,this.balanceSymbol=fo.state.balanceSymbol,this.unsubscribe.push(fo.subscribe((e=>{e.address?(this.address=e.address,this.profileImage=e.profileImage,this.profileName=e.profileName,this.balance=e.balance,this.balanceSymbol=e.balanceSymbol):Qo.showError("Account not found")})),jo.subscribeKey("caipNetwork",(e=>{(null==e?void 0:e.id)&&(this.network=e)})))}disconnectedCallback(){this.unsubscribe.forEach((e=>e()))}render(){var e;if(!this.address)throw new Error("w3m-account-view: No account provided");const t=is.getNetworkImage(this.network);return yg`<wui-flex
        flexDirection="column"
        .padding=${["0","xl","m","xl"]}
        alignItems="center"
        gap="l"
      >
        <wui-avatar
          alt=${zg(this.address)}
          address=${zg(this.address)}
          imageSrc=${zg(null===this.profileImage?void 0:this.profileImage)}
        ></wui-avatar>
        <wui-flex flexDirection="column" alignItems="center">
          <wui-flex gap="3xs" alignItems="center" justifyContent="center">
            <wui-text variant="medium-title-600" color="fg-100">
              ${this.profileName?Ou.getTruncateString({string:this.profileName,charsStart:20,charsEnd:0,truncate:"end"}):Ou.getTruncateString({string:this.address?this.address:"",charsStart:4,charsEnd:4,truncate:"middle"})}
            </wui-text>
            <wui-icon-link
              size="md"
              icon="copy"
              iconColor="fg-200"
              @click=${this.onCopyAddress}
            ></wui-icon-link>
          </wui-flex>
          <wui-text variant="paragraph-500" color="fg-200"
            >${po.formatBalance(this.balance,this.balanceSymbol)}</wui-text
          >
        </wui-flex>
        ${this.explorerBtnTemplate()}
      </wui-flex>

      <wui-flex flexDirection="column" gap="xs" .padding=${["0","s","s","s"]}>
        ${this.emailCardTemplate()} ${this.emailBtnTemplate()}

        <wui-list-item
          .variant=${t?"image":"icon"}
          iconVariant="overlay"
          icon="networkPlaceholder"
          imageSrc=${zg(t)}
          ?chevron=${this.isAllowedNetworkSwitch()}
          @click=${this.onNetworks.bind(this)}
          data-testid="w3m-account-select-network"
        >
          <wui-text variant="paragraph-500" color="fg-100">
            ${(null==(e=this.network)?void 0:e.name)??"Unknown"}
          </wui-text>
        </wui-list-item>
        ${this.onrampTemplate()}
        <wui-list-item
          iconVariant="blue"
          icon="swapHorizontalMedium"
          iconSize="sm"
          ?chevron=${!0}
          @click=${this.onTransactions.bind(this)}
        >
          <wui-text variant="paragraph-500" color="fg-100">Activity</wui-text>
        </wui-list-item>
        <wui-list-item
          variant="icon"
          iconVariant="overlay"
          icon="disconnect"
          ?chevron=${!1}
          .loading=${this.disconnecting}
          @click=${this.onDisconnect.bind(this)}
          data-testid="disconnect-button"
        >
          <wui-text variant="paragraph-500" color="fg-200">Disconnect</wui-text>
        </wui-list-item>
      </wui-flex>`}onrampTemplate(){const{enableOnramp:e}=Eo.state;return e?yg`
      <wui-list-item
        iconVariant="blue"
        icon="card"
        ?chevron=${!0}
        @click=${this.handleClickPay.bind(this)}
      >
        <wui-text variant="paragraph-500" color="fg-100">Buy crypto</wui-text>
      </wui-list-item>
    `:null}emailCardTemplate(){const e=bo.getConnectedConnector(),t=$o.getEmailConnector(),{origin:n}=location;return!t||"EMAIL"!==e||n.includes(uo.SECURE_SITE)?null:yg`
      <wui-notice-card
        @click=${this.onGoToUpgradeView.bind(this)}
        label="Upgrade your wallet"
        description="Transition to a self-custodial wallet"
        icon="wallet"
        data-testid="w3m-wallet-upgrade-card"
      ></wui-notice-card>
    `}handleClickPay(){zo.push("OnRampProviders")}explorerBtnTemplate(){const{addressExplorerUrl:e}=fo.state;return e?yg`
      <wui-button size="sm" variant="shade" @click=${this.onExplorer.bind(this)}>
        <wui-icon size="sm" color="inherit" slot="iconLeft" name="compass"></wui-icon>
        Block Explorer
        <wui-icon size="sm" color="inherit" slot="iconRight" name="externalLink"></wui-icon>
      </wui-button>
    `:null}emailBtnTemplate(){const e=bo.getConnectedConnector(),t=$o.getEmailConnector();if(!t||"EMAIL"!==e)return null;const n=t.provider.getEmail()??"";return yg`
      <wui-list-item
        variant="icon"
        iconVariant="overlay"
        icon="mail"
        iconSize="sm"
        ?chevron=${!0}
        @click=${()=>this.onGoToUpdateEmail(n)}
      >
        <wui-text variant="paragraph-500" color="fg-100">${n}</wui-text>
      </wui-list-item>
    `}isAllowedNetworkSwitch(){const{requestedCaipNetworks:e}=jo.state,t=!!e&&e.length>1,n=null==e?void 0:e.find((({id:e})=>{var t;return e===(null==(t=this.network)?void 0:t.id)}));return t||!n}onCopyAddress(){try{this.address&&(po.copyToClopboard(this.address),Qo.showSuccess("Address copied"))}catch{Qo.showError("Failed to copy")}}onNetworks(){this.isAllowedNetworkSwitch()&&(No.sendEvent({type:"track",event:"CLICK_NETWORKS"}),zo.push("Networks"))}onTransactions(){No.sendEvent({type:"track",event:"CLICK_TRANSACTIONS"}),zo.push("Transactions")}async onDisconnect(){try{this.disconnecting=!0,await ns.disconnect(),No.sendEvent({type:"track",event:"DISCONNECT_SUCCESS"}),Wo.close()}catch{No.sendEvent({type:"track",event:"DISCONNECT_ERROR"}),Qo.showError("Failed to disconnect")}finally{this.disconnecting=!1}}onExplorer(){const{addressExplorerUrl:e}=fo.state;e&&po.openHref(e,"_blank")}onGoToUpgradeView(){No.sendEvent({type:"track",event:"EMAIL_UPGRADE_FROM_MODAL"}),zo.push("UpgradeEmailWallet")}onGoToUpdateEmail(e){zo.push("UpdateEmailWallet",{email:e})}};XC.styles=JC,QC([Lg()],XC.prototype,"address",void 0),QC([Lg()],XC.prototype,"profileImage",void 0),QC([Lg()],XC.prototype,"profileName",void 0),QC([Lg()],XC.prototype,"network",void 0),QC([Lg()],XC.prototype,"disconnecting",void 0),QC([Lg()],XC.prototype,"balance",void 0),QC([Lg()],XC.prototype,"balanceSymbol",void 0),XC=QC([_l("w3m-account-default-widget")],XC);const e_=jm`
  wui-flex {
    width: 100%;
  }

  wui-promo {
    position: absolute;
    top: -32px;
  }

  wui-profile-button {
    margin-top: var(--wui-spacing-2l);
  }

  wui-tooltip-select {
    width: 100%;
  }

  wui-tabs {
    width: 100%;
  }
`,t_=[{label:"Tokens"},{label:"NFTs"},{label:"Activity"}];var n_=function(e,t,n,i){var r,a=arguments.length,o=a<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,n,i);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(o=(a<3?r(o):a>3?r(t,n,o):r(t,n))||o);return a>3&&o&&Object.defineProperty(t,n,o),o};let i_=class extends Mg{constructor(){super(),this.unsubscribe=[],this.address=fo.state.address,this.profileImage=fo.state.profileImage,this.profileName=fo.state.profileName,this.network=jo.state.caipNetwork,this.unsubscribe.push(fo.subscribe((e=>{e.address?(this.address=e.address,this.profileImage=e.profileImage,this.profileName=e.profileName):Wo.close()})),jo.subscribeKey("caipNetwork",(e=>{(null==e?void 0:e.id)&&(this.network=e)})))}disconnectedCallback(){this.unsubscribe.forEach((e=>e()))}render(){if(!this.address)throw new Error("w3m-account-view: No account provided");const e=is.getNetworkImage(this.network);return yg`<wui-flex
      flexDirection="column"
      .padding=${["0","xl","m","xl"]}
      alignItems="center"
      gap="l"
    >
      ${this.activateAccountTemplate()}
      <wui-profile-button
        @click=${this.onProfileButtonClick.bind(this)}
        address=${zg(this.address)}
        networkSrc=${zg(e)}
        icon="chevronBottom"
        avatarSrc=${zg(this.profileImage?this.profileImage:void 0)}
        ?isprofilename=${Boolean(this.profileName)}
      ></wui-profile-button>
      <wui-balance dollars="0" pennies="00"></wui-balance>
      <wui-flex gap="s">
        <wui-tooltip-select
          @click=${this.onBuyClick.bind(this)}
          text="Buy"
          icon="card"
        ></wui-tooltip-select>
        <wui-tooltip-select text="Convert" icon="recycleHorizontal"></wui-tooltip-select>
        <wui-tooltip-select
          @click=${this.onReceiveClick.bind(this)}
          text="Receive"
          icon="arrowBottomCircle"
        ></wui-tooltip-select>
        <wui-tooltip-select text="Send" icon="send"></wui-tooltip-select>
      </wui-flex>

      <wui-tabs localTabWidth="120px" .tabs=${t_}></wui-tabs>
    </wui-flex>`}activateAccountTemplate(){return yg` <wui-promo text="Activate your account"></wui-promo>`}onProfileButtonClick(){zo.push("AccountSettings")}onBuyClick(){zo.push("OnRampProviders")}onReceiveClick(){zo.push("WalletReceive")}};i_.styles=e_,n_([Lg()],i_.prototype,"address",void 0),n_([Lg()],i_.prototype,"profileImage",void 0),n_([Lg()],i_.prototype,"profileName",void 0),n_([Lg()],i_.prototype,"network",void 0),i_=n_([_l("w3m-account-wallet-features-widget")],i_);let r_=!1;class a_{constructor(e){this.initPromise=void 0,this.setIsConnected=e=>{fo.setIsConnected(e)},this.setCaipAddress=e=>{fo.setCaipAddress(e)},this.setBalance=(e,t)=>{fo.setBalance(e,t)},this.setProfileName=e=>{fo.setProfileName(e)},this.setProfileImage=e=>{fo.setProfileImage(e)},this.resetAccount=()=>{fo.resetAccount()},this.setCaipNetwork=e=>{jo.setCaipNetwork(e)},this.getCaipNetwork=()=>jo.state.caipNetwork,this.setRequestedCaipNetworks=e=>{jo.setRequestedCaipNetworks(e)},this.getApprovedCaipNetworksData=()=>jo.getApprovedCaipNetworksData(),this.resetNetwork=()=>{jo.resetNetwork()},this.setConnectors=e=>{$o.setConnectors(e)},this.addConnector=e=>{$o.addConnector(e)},this.getConnectors=()=>$o.getConnectors(),this.resetWcConnection=()=>{ns.resetWcConnection()},this.fetchIdentity=e=>Vo.fetchIdentity(e),this.setAddressExplorerUrl=e=>{fo.setAddressExplorerUrl(e)},this.setSmartAccountDeployed=e=>{fo.setSmartAccountDeployed(e)},this.initControllers(e),this.initOrContinue()}async open(e){await this.initOrContinue(),Wo.open(e)}async close(){await this.initOrContinue(),Wo.close()}setLoading(e){Wo.setLoading(e)}getThemeMode(){return To.state.themeMode}getThemeVariables(){return To.state.themeVariables}setThemeMode(e){To.setThemeMode(e),wl(To.state.themeMode)}setThemeVariables(e){To.setThemeVariables(e),yl(To.state.themeVariables)}subscribeTheme(e){return To.subscribe(e)}getState(){return{...Po.state}}subscribeState(e){return Po.subscribe(e)}showErrorMessage(e){Qo.showError(e)}showSuccessMessage(e){Qo.showSuccess(e)}getEvent(){return{...No.state}}subscribeEvents(e){return No.subscribe(e)}async initControllers(e){if(jo.setClient(e.networkControllerClient),jo.setDefaultCaipNetwork(e.defaultChain),Eo.setProjectId(e.projectId),Eo.setAllWallets(e.allWallets),Eo.setIncludeWalletIds(e.includeWalletIds),Eo.setExcludeWalletIds(e.excludeWalletIds),Eo.setFeaturedWalletIds(e.featuredWalletIds),Eo.setTokens(e.tokens),Eo.setTermsConditionsUrl(e.termsConditionsUrl),Eo.setPrivacyPolicyUrl(e.privacyPolicyUrl),Eo.setCustomWallets(e.customWallets),Eo.setEnableAnalytics(e.enableAnalytics),Eo.setSdkVersion(e._sdkVersion),ns.setClient(e.connectionControllerClient),e.siweControllerClient){const{SIWEController:t}=await r((()=>import("./index-Bl-upnK5.js")),__vite__mapDeps([]),import.meta.url);t.setSIWEClient(e.siweControllerClient)}e.metadata&&Eo.setMetadata(e.metadata),e.themeMode&&To.setThemeMode(e.themeMode),e.themeVariables&&To.setThemeVariables(e.themeVariables),e.enableOnramp&&Eo.setOnrampEnabled(Boolean(e.enableOnramp)),e.enableWalletFeatures&&Eo.setWalletFeaturesEnabled(Boolean(e.enableWalletFeatures)),e.allowUnsupportedChain&&jo.setAllowUnsupportedChain(e.allowUnsupportedChain)}async initOrContinue(){return this.initPromise||r_||!po.isClient()||(r_=!0,this.initPromise=new Promise((async e=>{await Promise.all([r((()=>Promise.resolve().then((()=>Pm))),void 0,import.meta.url),r((()=>Promise.resolve().then((()=>Xg))),void 0,import.meta.url)]);const t=document.createElement("w3m-modal");document.body.insertAdjacentElement("beforeend",t),e()}))),this.initPromise}}const o_={WALLET_CONNECT_CONNECTOR_ID:"walletConnect",INJECTED_CONNECTOR_ID:"injected",COINBASE_CONNECTOR_ID:"coinbaseWallet",COINBASE_SDK_CONNECTOR_ID:"coinbaseWalletSDK",SAFE_CONNECTOR_ID:"safe",LEDGER_CONNECTOR_ID:"ledger",EIP6963_CONNECTOR_ID:"eip6963",EMAIL_CONNECTOR_ID:"w3mEmail",EIP155:"eip155",ADD_CHAIN_METHOD:"wallet_addEthereumChain",EIP6963_ANNOUNCE_EVENT:"eip6963:announceProvider",EIP6963_REQUEST_EVENT:"eip6963:requestProvider",VERSION:"4.0.13"},s_={ConnectorExplorerIds:{[o_.COINBASE_CONNECTOR_ID]:"fd20dc426fb37566d803205b19bbc1d4096b248ac04548e3cfb6b3a38bd033aa",[o_.SAFE_CONNECTOR_ID]:"225affb176778569276e484e1b92637ad061b01e13a048b35a9d280c3b58970f",[o_.LEDGER_CONNECTOR_ID]:"19177a98252e07ddfc9af2083ba8e07ef627cb6103467ffebb3f8f4205fd7927"},EIP155NetworkImageIds:{1:"692ed6ba-e569-459a-556a-776476829e00",42161:"3bff954d-5cb0-47a0-9a23-d20192e74600",43114:"30c46e53-e989-45fb-4549-be3bd4eb3b00",56:"93564157-2e8e-4ce7-81df-b264dbee9b00",250:"06b26297-fe0c-4733-5d6b-ffa5498aac00",10:"ab9c186a-c52f-464b-2906-ca59d760a400",137:"41d04d42-da3b-4453-8506-668cc0727900",100:"02b53f6a-e3d4-479e-1cb4-21178987d100",9001:"f926ff41-260d-4028-635e-91913fc28e00",324:"b310f07f-4ef7-49f3-7073-2a0a39685800",314:"5a73b3dd-af74-424e-cae0-0de859ee9400",4689:"34e68754-e536-40da-c153-6ef2e7188a00",1088:"3897a66d-40b9-4833-162f-a2c90531c900",1284:"161038da-44ae-4ec7-1208-0ea569454b00",1285:"f1d73bb6-5450-4e18-38f7-fb6484264a00",7777777:"845c60df-d429-4991-e687-91ae45791600",42220:"ab781bbc-ccc6-418d-d32d-789b15da1f00",8453:"7289c336-3981-4081-c5f4-efc26ac64a00",1313161554:"3ff73439-a619-4894-9262-4470c773a100",2020:"b8101fc0-9c19-4b6f-ec65-f6dfff106e00",2021:"b8101fc0-9c19-4b6f-ec65-f6dfff106e00"},ConnectorImageIds:{[o_.COINBASE_CONNECTOR_ID]:"0c2840c3-5b04-4c44-9661-fbd4b49e1800",[o_.COINBASE_SDK_CONNECTOR_ID]:"0c2840c3-5b04-4c44-9661-fbd4b49e1800",[o_.SAFE_CONNECTOR_ID]:"461db637-8616-43ce-035a-d89b8a1d5800",[o_.LEDGER_CONNECTOR_ID]:"54a1aa77-d202-4f8d-0fb2-5d2bb6db0300",[o_.WALLET_CONNECT_CONNECTOR_ID]:"ef1a1fcf-7fe8-4d69-bd6d-fda1345b4400",[o_.INJECTED_CONNECTOR_ID]:"07ba87ed-43aa-4adf-4540-9e6a2b9cae00"},ConnectorNamesMap:{[o_.INJECTED_CONNECTOR_ID]:"Browser Wallet",[o_.WALLET_CONNECT_CONNECTOR_ID]:"WalletConnect",[o_.COINBASE_CONNECTOR_ID]:"Coinbase",[o_.COINBASE_SDK_CONNECTOR_ID]:"Coinbase",[o_.LEDGER_CONNECTOR_ID]:"Ledger",[o_.SAFE_CONNECTOR_ID]:"Safe"},ConnectorTypesMap:{[o_.INJECTED_CONNECTOR_ID]:"INJECTED",[o_.WALLET_CONNECT_CONNECTOR_ID]:"WALLET_CONNECT",[o_.EIP6963_CONNECTOR_ID]:"ANNOUNCED",[o_.EMAIL_CONNECTOR_ID]:"EMAIL"},WalletConnectRpcChainIds:[1,5,11155111,10,420,42161,421613,137,80001,42220,1313161554,1313161555,56,97,43114,43113,100,8453,84531,7777777,999,324,280]},l_={caipNetworkIdToNumber:e=>e?Number(e.split(":")[1]):void 0,getCaipTokens(e){if(!e)return;const t={};return Object.entries(e).forEach((([e,n])=>{t[`${o_.EIP155}:${e}`]=n})),t}};function c_(e){if(e)return{id:`${o_.EIP155}:${e.id}`,name:e.name,imageId:s_.EIP155NetworkImageIds[e.id]}}function u_({chainId:e,projectId:t}){const n=po.getBlockchainApiUrl();return s_.WalletConnectRpcChainIds.includes(e)?wr(`${n}/v1/?chainId=${o_.EIP155}:${e}&projectId=${t}`):wr()}class d_ extends a_{constructor(e){const{wagmiConfig:t,siweConfig:n,defaultChain:i,tokens:r,_sdkVersion:a,...o}=e;if(!t)throw new Error("web3modal:constructor - wagmiConfig is undefined");if(!o.projectId)throw new Error("web3modal:constructor - projectId is undefined");super({networkControllerClient:{switchCaipNetwork:async e=>{const t=l_.caipNetworkIdToNumber(null==e?void 0:e.id);t&&await Sa(this.wagmiConfig,{chainId:t})},getApprovedCaipNetworksData:async()=>new Promise((e=>{var n,i;const r=new Map(t.state.connections).get(t.state.current||"");if((null==(n=null==r?void 0:r.connector)?void 0:n.id)===o_.EMAIL_CONNECTOR_ID)e({supportsAllNetworks:!1,approvedCaipNetworkIds:s_.WalletConnectRpcChainIds.map((e=>`${o_.EIP155}:${e}`))});else if((null==(i=null==r?void 0:r.connector)?void 0:i.id)===o_.WALLET_CONNECT_CONNECTOR_ID){e(async function(e){var t,n,i,r;if(!e)throw new Error("networkControllerClient:getApprovedCaipNetworks - connector is undefined");const a=await(null==e?void 0:e.getProvider()),o=null==(n=null==(t=null==a?void 0:a.signer)?void 0:t.session)?void 0:n.namespaces,s=null==(i=null==o?void 0:o[o_.EIP155])?void 0:i.methods,l=null==(r=null==o?void 0:o[o_.EIP155])?void 0:r.chains;return{supportsAllNetworks:Boolean(null==s?void 0:s.includes(o_.ADD_CHAIN_METHOD)),approvedCaipNetworkIds:l}}(t.connectors.find((e=>e.id===o_.WALLET_CONNECT_CONNECTOR_ID))))}e({approvedCaipNetworkIds:void 0,supportsAllNetworks:!0})}))},connectionControllerClient:{connectWalletConnect:async e=>{var n;const i=t.connectors.find((e=>e.id===o_.WALLET_CONNECT_CONNECTOR_ID));if(!i)throw new Error("connectionControllerClient:getWalletConnectUri - connector is undefined");(await i.getProvider()).on("display_uri",(t=>{e(t)}));const r=l_.caipNetworkIdToNumber(null==(n=this.getCaipNetwork())?void 0:n.id);await xa(this.wagmiConfig,{connector:i,chainId:r})},connectExternal:async({id:e,provider:n,info:i})=>{var r,a;const o=t.connectors.find((t=>t.id===e));if(!o)throw new Error("connectionControllerClient:connectExternal - connector is undefined");n&&i&&o.id===o_.EIP6963_CONNECTOR_ID&&(null==(r=o.setEip6963Wallet)||r.call(o,{provider:n,info:i}));const s=l_.caipNetworkIdToNumber(null==(a=this.getCaipNetwork())?void 0:a.id);await xa(this.wagmiConfig,{connector:o,chainId:s})},checkInstalled:e=>{const t=this.getConnectors().find((e=>"INJECTED"===e.type));return e?!!t&&(!!(null==window?void 0:window.ethereum)&&e.some((e=>{var t;return Boolean(null==(t=window.ethereum)?void 0:t[String(e)])}))):Boolean(window.ethereum)},disconnect:async()=>{var e;await async function(e,t={}){var n,i;let r;if(t.connector)r=t.connector;else{const{connections:t,current:n}=e.state,i=t.get(n);r=null==i?void 0:i.connector}const a=e.state.connections;r&&(await r.disconnect(),r.emitter.off("change",e._internal.events.change),r.emitter.off("disconnect",e._internal.events.disconnect),r.emitter.on("connect",e._internal.events.connect),a.delete(r.uid)),e.setState((e=>{if(0===a.size)return{...e,connections:new Map,current:void 0,status:"disconnected"};const t=a.values().next().value;return{...e,connections:new Map(a),current:t.connector.uid}}));{const t=e.state.current;if(!t)return;const r=null==(n=e.state.connections.get(t))?void 0:n.connector;if(!r)return;await(null==(i=e.storage)?void 0:i.setItem("recentConnectorId",r.id))}}(this.wagmiConfig),(null==(e=null==n?void 0:n.options)?void 0:e.signOutOnDisconnect)&&await n.signOut()},signMessage:async e=>async function(e,t){const{account:n,connector:i,...r}=t;let a;return a="object"==typeof n&&"local"===n.type?e.getClient():await Ca(e,{account:n,connector:i}),ba(a,Or,"signMessage")({...r,...n?{account:n}:{}})}(this.wagmiConfig,{message:e})},siweControllerClient:n,defaultChain:c_(i),tokens:l_.getCaipTokens(r),_sdkVersion:a??`html-wagmi-${o_.VERSION}`,...o}),this.hasSyncedConnectedAccount=!1,this.options=void 0,this.options=e,this.wagmiConfig=t,this.syncRequestedNetworks([...t.chains]),this.syncConnectors([...t.connectors]),function(e,t){const{onChange:n}=t;e._internal.connectors.subscribe(((e,t)=>{n(Object.values(e),t)}))}(this.wagmiConfig,{onChange:e=>this.syncConnectors(e)}),Ra(this.wagmiConfig,{onChange:e=>this.syncAccount({...e})})}getState(){const e=super.getState();return{...e,selectedNetworkId:l_.caipNetworkIdToNumber(e.selectedNetworkId)}}subscribeState(e){return super.subscribeState((t=>e({...t,selectedNetworkId:l_.caipNetworkIdToNumber(t.selectedNetworkId)})))}syncRequestedNetworks(e){const t=null==e?void 0:e.map((e=>{var t,n;return{id:`${o_.EIP155}:${e.id}`,name:e.name,imageId:s_.EIP155NetworkImageIds[e.id],imageUrl:null==(n=null==(t=this.options)?void 0:t.chainImages)?void 0:n[e.id]}}));this.setRequestedCaipNetworks(t??[])}async syncAccount({address:e,isConnected:t,chainId:n}){if(this.resetAccount(),this.syncNetwork(),t&&e&&n){const i=`${o_.EIP155}:${n}:${e}`;this.setIsConnected(t),this.setCaipAddress(i),await Promise.all([this.syncProfile(e,n),this.syncBalance(e,n),this.getApprovedCaipNetworksData()]),this.hasSyncedConnectedAccount=!0}else!t&&this.hasSyncedConnectedAccount&&(this.resetWcConnection(),this.resetNetwork())}async syncNetwork(){var e,t,n,i;const{address:r,isConnected:a,chainId:o}=Ea(this.wagmiConfig),s=this.wagmiConfig.chains.find((e=>e.id===o));if(s||o){const l=(null==s?void 0:s.name)??(null==o?void 0:o.toString()),c=Number((null==s?void 0:s.id)??o),u=`${o_.EIP155}:${c}`;if(this.setCaipNetwork({id:u,name:l,imageId:s_.EIP155NetworkImageIds[c],imageUrl:null==(t=null==(e=this.options)?void 0:e.chainImages)?void 0:t[c]}),a&&r&&o){const e=`${o_.EIP155}:${c}:${r}`;if(this.setCaipAddress(e),null==(i=null==(n=null==s?void 0:s.blockExplorers)?void 0:n.default)?void 0:i.url){const e=`${s.blockExplorers.default.url}/address/${r}`;this.setAddressExplorerUrl(e)}else this.setAddressExplorerUrl(void 0);this.hasSyncedConnectedAccount&&(await this.syncProfile(r,o),await this.syncBalance(r,o))}}}async syncProfile(e,t){if(t!==Wa.id)return this.setProfileName(null),void this.setProfileImage(null);try{const{name:n,avatar:i}=await this.fetchIdentity({caipChainId:`${o_.EIP155}:${t}`,address:e});this.setProfileName(n),this.setProfileImage(i)}catch{const n=await function(e,t){const{chainId:n,...i}=t;return ba(e.getClient({chainId:n}),Zi,"getEnsName")(i)}(this.wagmiConfig,{address:e,chainId:t});if(n){this.setProfileName(n);const e=await function(e,t){const{chainId:n,...i}=t;return ba(e.getClient({chainId:n}),Hi,"getEnsAvatar")(i)}(this.wagmiConfig,{name:n,chainId:t});e&&this.setProfileImage(e)}}}async syncBalance(e,t){var n,i,r;const a=this.wagmiConfig.chains.find((e=>e.id===t));if(a){const t=await async function(e,t){const{address:n,blockNumber:i,blockTag:r,chainId:a,token:o,unit:s="ether"}=t;if(o)try{return Aa(e,{balanceAddress:n,chainId:a,symbolType:"string",tokenAddress:o})}catch(p){if(p instanceof pi){const t=await Aa(e,{balanceAddress:n,chainId:a,symbolType:"bytes32",tokenAddress:o}),i=R(x(t.symbol,{dir:"right"}));return{...t,symbol:i}}throw p}const l=e.getClient({chainId:a}),c=ba(l,Vi,"getBalance"),u=await c(i?{address:n,blockNumber:i}:{address:n,blockTag:r}),d=e.chains.find((e=>e.id===a))??l.chain;return{decimals:d.nativeCurrency.decimals,formatted:et(u,_a(s)),symbol:d.nativeCurrency.symbol,value:u}}(this.wagmiConfig,{address:e,chainId:a.id,token:null==(r=null==(i=null==(n=this.options)?void 0:n.tokens)?void 0:i[a.id])?void 0:r.address});this.setBalance(t.formatted,t.symbol)}else this.setBalance(void 0,void 0)}syncConnectors(e){const t=new Set,n=e.filter((e=>!t.has(e.id)&&t.add(e.id))),i=[],r=o_.COINBASE_SDK_CONNECTOR_ID,a=n.find((e=>e.id===uo.CONNECTOR_RDNS_MAP[r]));n.forEach((({id:e,name:t,type:n,icon:o})=>{var s,l;a&&e===r||o_.EMAIL_CONNECTOR_ID===e||i.push({id:e,explorerId:s_.ConnectorExplorerIds[e],imageUrl:(null==(l=null==(s=this.options)?void 0:s.connectorImages)?void 0:l[e])??o,name:s_.ConnectorNamesMap[e]??t,imageId:s_.ConnectorImageIds[e],type:s_.ConnectorTypesMap[n]??"EXTERNAL"})})),this.setConnectors(i),this.syncEmailConnector(n)}async syncEmailConnector(e){const t=e.find((({id:e})=>e===o_.EMAIL_CONNECTOR_ID));if(t){const e=await t.getProvider();this.addConnector({id:o_.EMAIL_CONNECTOR_ID,type:"EMAIL",name:"Email",provider:e}),this.listenEmailConnector(t),this.listenModal(t)}}async listenEmailConnector(e){if("undefined"!=typeof window&&e){super.setLoading(!0);const t=await e.getProvider(),n=t.getLoginEmailUsed();super.setLoading(n),n&&this.setIsConnected(!1),t.onInitSmartAccount((e=>{this.setSmartAccountDeployed(e)})),t.onRpcRequest((e=>{if(kx.checkIfRequestExists(e))kx.checkIfRequestIsAllowed(e)||super.open({view:"ApproveTransaction"});else{super.open();const n=kx.getRequestMethod(e);console.error(ay.RPC_METHOD_NOT_ALLOWED_MESSAGE,{method:n}),setTimeout((()=>{this.showErrorMessage(ay.RPC_METHOD_NOT_ALLOWED_UI_MESSAGE)}),300),t.rejectRpcRequest()}})),t.onRpcResponse((()=>{super.close()})),t.onNotConnected((()=>{this.setIsConnected(!1),super.setLoading(!1)})),t.onIsConnected((()=>{this.setIsConnected(!0),super.setLoading(!1)}))}}async listenModal(e){const t=await e.getProvider();this.subscribeState((e=>{e.open||t.rejectRpcRequest()}))}}for(var p_={},h_={byteLength:function(e){var t=v_(e),n=t[0],i=t[1];return 3*(n+i)/4-i},toByteArray:function(e){var t,n,i=v_(e),r=i[0],a=i[1],o=new g_(function(e,t,n){return 3*(t+n)/4-n}(0,r,a)),s=0,l=a>0?r-4:r;for(n=0;n<l;n+=4)t=m_[e.charCodeAt(n)]<<18|m_[e.charCodeAt(n+1)]<<12|m_[e.charCodeAt(n+2)]<<6|m_[e.charCodeAt(n+3)],o[s++]=t>>16&255,o[s++]=t>>8&255,o[s++]=255&t;2===a&&(t=m_[e.charCodeAt(n)]<<2|m_[e.charCodeAt(n+1)]>>4,o[s++]=255&t);1===a&&(t=m_[e.charCodeAt(n)]<<10|m_[e.charCodeAt(n+1)]<<4|m_[e.charCodeAt(n+2)]>>2,o[s++]=t>>8&255,o[s++]=255&t);return o},fromByteArray:function(e){for(var t,n=e.length,i=n%3,r=[],a=16383,o=0,s=n-i;o<s;o+=a)r.push(b_(e,o,o+a>s?s:o+a));1===i?(t=e[n-1],r.push(f_[t>>2]+f_[t<<4&63]+"==")):2===i&&(t=(e[n-2]<<8)+e[n-1],r.push(f_[t>>10]+f_[t>>4&63]+f_[t<<2&63]+"="));return r.join("")}},f_=[],m_=[],g_="undefined"!=typeof Uint8Array?Uint8Array:Array,w_="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",y_=0;y_<64;++y_)f_[y_]=w_[y_],m_[w_.charCodeAt(y_)]=y_;function v_(e){var t=e.length;if(t%4>0)throw new Error("Invalid string. Length must be a multiple of 4");var n=e.indexOf("=");return-1===n&&(n=t),[n,n===t?0:4-n%4]}function b_(e,t,n){for(var i,r,a=[],o=t;o<n;o+=3)i=(e[o]<<16&16711680)+(e[o+1]<<8&65280)+(255&e[o+2]),a.push(f_[(r=i)>>18&63]+f_[r>>12&63]+f_[r>>6&63]+f_[63&r]);return a.join("")}m_["-".charCodeAt(0)]=62,m_["_".charCodeAt(0)]=63;var x_={};
/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */function C_(e){let t,n;return i=>({id:"coinbaseWalletSDK",name:"Coinbase Wallet",type:C_.type,async connect({chainId:e}={}){try{const t=await this.getProvider(),n=(await t.request({method:"eth_requestAccounts"})).map((e=>Re(e)));t.on("accountsChanged",this.onAccountsChanged),t.on("chainChanged",this.onChainChanged),t.on("disconnect",this.onDisconnect.bind(this));let i=await this.getChainId();if(e&&i!==e){const t=await this.switchChain({chainId:e}).catch((e=>{if(e.code===Ft.code)throw e;return{id:i}}));i=(null==t?void 0:t.id)??i}return{accounts:n,chainId:i}}catch(t){if(/(user closed modal|accounts received is empty|user denied account)/i.test(t.message))throw new Ft(t);throw t}},async disconnect(){const e=await this.getProvider();e.removeListener("accountsChanged",this.onAccountsChanged),e.removeListener("chainChanged",this.onChainChanged),e.removeListener("disconnect",this.onDisconnect.bind(this)),e.disconnect(),e.close()},async getAccounts(){const e=await this.getProvider();return(await e.request({method:"eth_accounts"})).map((e=>Re(e)))},async getChainId(){const e=await this.getProvider();return pa(await e.request({method:"eth_chainId"}))},async getProvider(){var a;if(!n){const{default:o}=await r((()=>import("./index-B8YrNbYv.js").then((e=>e.i))),__vite__mapDeps([0,1]),import.meta.url);let s;s="function"!=typeof o&&"function"==typeof o.default?o.default:o,t=new s({reloadOnDisconnect:false,...e});const l=null==(a=t.walletExtension)?void 0:a.getChainId(),c=i.chains.find((t=>e.chainId?t.id===e.chainId:t.id===l))||i.chains[0],u=e.chainId||(null==c?void 0:c.id),d=e.jsonRpcUrl||(null==c?void 0:c.rpcUrls.default.http[0]);n=t.makeWeb3Provider(d,u)}return n},async isAuthorized(){try{return!!(await this.getAccounts()).length}catch{return!1}},async switchChain({chainId:e}){var t,n;const r=i.chains.find((t=>t.id===e));if(!r)throw new Gt(new aa);const a=await this.getProvider(),o=U(r.id);try{return await a.request({method:"wallet_switchEthereumChain",params:[{chainId:o}]}),r}catch(s){if(4902===s.code)try{return await a.request({method:"wallet_addEthereumChain",params:[{chainId:o,chainName:r.name,nativeCurrency:r.nativeCurrency,rpcUrls:[(null==(t=r.rpcUrls.default)?void 0:t.http[0])??""],blockExplorerUrls:[null==(n=r.blockExplorers)?void 0:n.default.url]}]}),r}catch(l){throw new Ft(l)}throw new Gt(s)}},onAccountsChanged(e){0===e.length?i.emitter.emit("disconnect"):i.emitter.emit("change",{accounts:e.map((e=>Re(e)))})},onChainChanged(e){const t=pa(e);i.emitter.emit("change",{chainId:t})},async onDisconnect(e){i.emitter.emit("disconnect");const t=await this.getProvider();t.removeListener("accountsChanged",this.onAccountsChanged),t.removeListener("chainChanged",this.onChainChanged),t.removeListener("disconnect",this.onDisconnect.bind(this))}})}function __(e){const t=e.isNewChainsStale??!0;let n,i;const a="eip155";return o=>({id:"walletConnect",name:"WalletConnect",type:__.type,async setup(){const e=await this.getProvider().catch((()=>null));e&&(e.on("connect",this.onConnect.bind(this)),e.on("session_delete",this.onSessionDelete.bind(this)))},async connect({chainId:e,...t}={}){var n,i;try{const r=await this.getProvider();if(!r)throw new ua;r.on("display_uri",this.onDisplayUri);let a=e;if(!a){const e=await(null==(n=o.storage)?void 0:n.getItem("state"))??{},t=o.chains.some((t=>t.id===e.chainId));a=t?e.chainId:null==(i=o.chains[0])?void 0:i.id}if(!a)throw new Error("No chains found on connector.");const s=await this.isChainsStale();if(r.session&&s&&await r.disconnect(),!r.session||s){const e=o.chains.filter((e=>e.id!==a)).map((e=>e.id));await r.connect({optionalChains:[a,...e],..."pairingTopic"in t?{pairingTopic:t.pairingTopic}:{}}),this.setRequestedChainsIds(o.chains.map((e=>e.id)))}const l=(await r.enable()).map((e=>Re(e))),c=await this.getChainId();return r.removeListener("display_uri",this.onDisplayUri),r.removeListener("connect",this.onConnect.bind(this)),r.on("accountsChanged",this.onAccountsChanged.bind(this)),r.on("chainChanged",this.onChainChanged),r.on("disconnect",this.onDisconnect.bind(this)),r.on("session_delete",this.onSessionDelete.bind(this)),{accounts:l,chainId:c}}catch(r){if(/(user rejected|connection request reset)/i.test(null==r?void 0:r.message))throw new Ft(r);throw r}},async disconnect(){const e=await this.getProvider();try{await(null==e?void 0:e.disconnect())}catch(t){if(!/No matching key/i.test(t.message))throw t}finally{null==e||e.removeListener("accountsChanged",this.onAccountsChanged.bind(this)),null==e||e.removeListener("chainChanged",this.onChainChanged),null==e||e.removeListener("disconnect",this.onDisconnect.bind(this)),null==e||e.removeListener("session_delete",this.onSessionDelete.bind(this)),null==e||e.on("connect",this.onConnect.bind(this)),this.setRequestedChainsIds([])}},async getAccounts(){return(await this.getProvider()).accounts.map((e=>Re(e)))},async getProvider({chainId:t}={}){var a;return n||(i||(i=async function(){const t=o.chains.map((e=>e.id));if(!t.length)return;const{EthereumProvider:n}=await r((()=>import("./index.es-DRrlvpFG.js")),__vite__mapDeps([2,1]),import.meta.url);return await n.init({...e,disableProviderPing:!0,optionalChains:t,projectId:e.projectId,rpcMap:Object.fromEntries(o.chains.map((e=>[e.id,e.rpcUrls.default.http[0]]))),showQrModal:e.showQrModal??!0})}()),n=await i,null==n||n.events.setMaxListeners(1/0)),t&&await(null==(a=this.switchChain)?void 0:a.call(this,{chainId:t})),n},async getChainId(){return(await this.getProvider()).chainId},async isAuthorized(){try{const[e,t]=await Promise.all([this.getAccounts(),this.getProvider()]);if(!e.length)return!1;return!(await this.isChainsStale())||!t.session||(await t.disconnect().catch((()=>{})),!1)}catch{return!1}},async switchChain({chainId:e}){var t;const n=o.chains.find((t=>t.id===e));if(!n)throw new Gt(new aa);try{const i=await this.getProvider(),r=this.getNamespaceChainsIds(),a=this.getNamespaceMethods();if(!r.includes(e)&&a.includes("wallet_addEthereumChain")){await i.request({method:"wallet_addEthereumChain",params:[{chainId:U(n.id),blockExplorerUrls:[null==(t=n.blockExplorers)?void 0:t.default.url],chainName:n.name,nativeCurrency:n.nativeCurrency,rpcUrls:[...n.rpcUrls.default.http]}]});const r=await this.getRequestedChainsIds();this.setRequestedChainsIds([...r,e])}return await i.request({method:"wallet_switchEthereumChain",params:[{chainId:U(e)}]}),n}catch(i){const e="string"==typeof i?i:null==i?void 0:i.message;if(/user rejected request/i.test(e))throw new Ft(i);throw new Gt(i)}},onAccountsChanged(e){0===e.length?this.onDisconnect():o.emitter.emit("change",{accounts:e.map((e=>Re(e)))})},onChainChanged(e){const t=pa(e);o.emitter.emit("change",{chainId:t})},async onConnect(e){const t=pa(e.chainId),n=await this.getAccounts();o.emitter.emit("connect",{accounts:n,chainId:t})},async onDisconnect(e){this.setRequestedChainsIds([]),o.emitter.emit("disconnect");const t=await this.getProvider();t.removeListener("accountsChanged",this.onAccountsChanged.bind(this)),t.removeListener("chainChanged",this.onChainChanged),t.removeListener("disconnect",this.onDisconnect.bind(this)),t.removeListener("session_delete",this.onSessionDelete.bind(this)),t.on("connect",this.onConnect.bind(this))},onDisplayUri(e){o.emitter.emit("message",{type:"display_uri",data:e})},onSessionDelete(){this.onDisconnect()},getNamespaceChainsIds(){var e,t,i;if(!n)return[];return(null==(i=null==(t=null==(e=n.session)?void 0:e.namespaces[a])?void 0:t.chains)?void 0:i.map((e=>parseInt(e.split(":")[1]||""))))??[]},getNamespaceMethods(){var e,t;if(!n)return[];return(null==(t=null==(e=n.session)?void 0:e.namespaces[a])?void 0:t.methods)??[]},async getRequestedChainsIds(){var e;return await(null==(e=o.storage)?void 0:e.getItem(this.requestedChainsStorageKey))??[]},async isChainsStale(){if(this.getNamespaceMethods().includes("wallet_addEthereumChain"))return!1;if(!t)return!1;const e=o.chains.map((e=>e.id)),n=this.getNamespaceChainsIds();if(n.length&&!n.some((t=>e.includes(t))))return!1;const i=await this.getRequestedChainsIds();return!e.every((e=>i.includes(e)))},async setRequestedChainsIds(e){var t;await(null==(t=o.storage)?void 0:t.setItem(this.requestedChainsStorageKey,e))},get requestedChainsStorageKey(){return`${this.id}.requestedChains`}})}x_.read=function(e,t,n,i,r){var a,o,s=8*r-i-1,l=(1<<s)-1,c=l>>1,u=-7,d=n?r-1:0,p=n?-1:1,h=e[t+d];for(d+=p,a=h&(1<<-u)-1,h>>=-u,u+=s;u>0;a=256*a+e[t+d],d+=p,u-=8);for(o=a&(1<<-u)-1,a>>=-u,u+=i;u>0;o=256*o+e[t+d],d+=p,u-=8);if(0===a)a=1-c;else{if(a===l)return o?NaN:1/0*(h?-1:1);o+=Math.pow(2,i),a-=c}return(h?-1:1)*o*Math.pow(2,a-i)},x_.write=function(e,t,n,i,r,a){var o,s,l,c=8*a-r-1,u=(1<<c)-1,d=u>>1,p=23===r?Math.pow(2,-24)-Math.pow(2,-77):0,h=i?0:a-1,f=i?1:-1,m=t<0||0===t&&1/t<0?1:0;for(t=Math.abs(t),isNaN(t)||t===1/0?(s=isNaN(t)?1:0,o=u):(o=Math.floor(Math.log(t)/Math.LN2),t*(l=Math.pow(2,-o))<1&&(o--,l*=2),(t+=o+d>=1?p/l:p*Math.pow(2,1-d))*l>=2&&(o++,l/=2),o+d>=u?(s=0,o=u):o+d>=1?(s=(t*l-1)*Math.pow(2,r),o+=d):(s=t*Math.pow(2,d-1)*Math.pow(2,r),o=0));r>=8;e[n+h]=255&s,h+=f,s/=256,r-=8);for(o=o<<r|s,c+=r;c>0;e[n+h]=255&o,h+=f,o/=256,c-=8);e[n+h-f]|=128*m},
/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */
function(e){const t=h_,n=x_,i="function"==typeof Symbol&&"function"==typeof Symbol.for?Symbol.for("nodejs.util.inspect.custom"):null;e.Buffer=o,e.SlowBuffer=function(e){+e!=e&&(e=0);return o.alloc(+e)},e.INSPECT_MAX_BYTES=50;const r=2147483647;function a(e){if(e>r)throw new RangeError('The value "'+e+'" is invalid for option "size"');const t=new Uint8Array(e);return Object.setPrototypeOf(t,o.prototype),t}function o(e,t,n){if("number"==typeof e){if("string"==typeof t)throw new TypeError('The "string" argument must be of type string. Received type number');return c(e)}return s(e,t,n)}function s(e,t,n){if("string"==typeof e)return function(e,t){"string"==typeof t&&""!==t||(t="utf8");if(!o.isEncoding(t))throw new TypeError("Unknown encoding: "+t);const n=0|h(e,t);let i=a(n);const r=i.write(e,t);r!==n&&(i=i.slice(0,r));return i}(e,t);if(ArrayBuffer.isView(e))return function(e){if(G(e,Uint8Array)){const t=new Uint8Array(e);return d(t.buffer,t.byteOffset,t.byteLength)}return u(e)}(e);if(null==e)throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof e);if(G(e,ArrayBuffer)||e&&G(e.buffer,ArrayBuffer))return d(e,t,n);if("undefined"!=typeof SharedArrayBuffer&&(G(e,SharedArrayBuffer)||e&&G(e.buffer,SharedArrayBuffer)))return d(e,t,n);if("number"==typeof e)throw new TypeError('The "value" argument must not be of type number. Received type number');const i=e.valueOf&&e.valueOf();if(null!=i&&i!==e)return o.from(i,t,n);const r=function(e){if(o.isBuffer(e)){const t=0|p(e.length),n=a(t);return 0===n.length||e.copy(n,0,0,t),n}if(void 0!==e.length)return"number"!=typeof e.length||q(e.length)?a(0):u(e);if("Buffer"===e.type&&Array.isArray(e.data))return u(e.data)}(e);if(r)return r;if("undefined"!=typeof Symbol&&null!=Symbol.toPrimitive&&"function"==typeof e[Symbol.toPrimitive])return o.from(e[Symbol.toPrimitive]("string"),t,n);throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof e)}function l(e){if("number"!=typeof e)throw new TypeError('"size" argument must be of type number');if(e<0)throw new RangeError('The value "'+e+'" is invalid for option "size"')}function c(e){return l(e),a(e<0?0:0|p(e))}function u(e){const t=e.length<0?0:0|p(e.length),n=a(t);for(let i=0;i<t;i+=1)n[i]=255&e[i];return n}function d(e,t,n){if(t<0||e.byteLength<t)throw new RangeError('"offset" is outside of buffer bounds');if(e.byteLength<t+(n||0))throw new RangeError('"length" is outside of buffer bounds');let i;return i=void 0===t&&void 0===n?new Uint8Array(e):void 0===n?new Uint8Array(e,t):new Uint8Array(e,t,n),Object.setPrototypeOf(i,o.prototype),i}function p(e){if(e>=r)throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+r.toString(16)+" bytes");return 0|e}function h(e,t){if(o.isBuffer(e))return e.length;if(ArrayBuffer.isView(e)||G(e,ArrayBuffer))return e.byteLength;if("string"!=typeof e)throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type '+typeof e);const n=e.length,i=arguments.length>2&&!0===arguments[2];if(!i&&0===n)return 0;let r=!1;for(;;)switch(t){case"ascii":case"latin1":case"binary":return n;case"utf8":case"utf-8":return H(e).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return 2*n;case"hex":return n>>>1;case"base64":return Z(e).length;default:if(r)return i?-1:H(e).length;t=(""+t).toLowerCase(),r=!0}}function f(e,t,n){let i=!1;if((void 0===t||t<0)&&(t=0),t>this.length)return"";if((void 0===n||n>this.length)&&(n=this.length),n<=0)return"";if((n>>>=0)<=(t>>>=0))return"";for(e||(e="utf8");;)switch(e){case"hex":return $(this,t,n);case"utf8":case"utf-8":return E(this,t,n);case"ascii":return T(this,t,n);case"latin1":case"binary":return A(this,t,n);case"base64":return _(this,t,n);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return I(this,t,n);default:if(i)throw new TypeError("Unknown encoding: "+e);e=(e+"").toLowerCase(),i=!0}}function m(e,t,n){const i=e[t];e[t]=e[n],e[n]=i}function g(e,t,n,i,r){if(0===e.length)return-1;if("string"==typeof n?(i=n,n=0):n>2147483647?n=2147483647:n<-2147483648&&(n=-2147483648),q(n=+n)&&(n=r?0:e.length-1),n<0&&(n=e.length+n),n>=e.length){if(r)return-1;n=e.length-1}else if(n<0){if(!r)return-1;n=0}if("string"==typeof t&&(t=o.from(t,i)),o.isBuffer(t))return 0===t.length?-1:w(e,t,n,i,r);if("number"==typeof t)return t&=255,"function"==typeof Uint8Array.prototype.indexOf?r?Uint8Array.prototype.indexOf.call(e,t,n):Uint8Array.prototype.lastIndexOf.call(e,t,n):w(e,[t],n,i,r);throw new TypeError("val must be string, number or Buffer")}function w(e,t,n,i,r){let a,o=1,s=e.length,l=t.length;if(void 0!==i&&("ucs2"===(i=String(i).toLowerCase())||"ucs-2"===i||"utf16le"===i||"utf-16le"===i)){if(e.length<2||t.length<2)return-1;o=2,s/=2,l/=2,n/=2}function c(e,t){return 1===o?e[t]:e.readUInt16BE(t*o)}if(r){let i=-1;for(a=n;a<s;a++)if(c(e,a)===c(t,-1===i?0:a-i)){if(-1===i&&(i=a),a-i+1===l)return i*o}else-1!==i&&(a-=a-i),i=-1}else for(n+l>s&&(n=s-l),a=n;a>=0;a--){let n=!0;for(let i=0;i<l;i++)if(c(e,a+i)!==c(t,i)){n=!1;break}if(n)return a}return-1}function y(e,t,n,i){n=Number(n)||0;const r=e.length-n;i?(i=Number(i))>r&&(i=r):i=r;const a=t.length;let o;for(i>a/2&&(i=a/2),o=0;o<i;++o){const i=parseInt(t.substr(2*o,2),16);if(q(i))return o;e[n+o]=i}return o}function v(e,t,n,i){return V(H(t,e.length-n),e,n,i)}function b(e,t,n,i){return V(function(e){const t=[];for(let n=0;n<e.length;++n)t.push(255&e.charCodeAt(n));return t}(t),e,n,i)}function x(e,t,n,i){return V(Z(t),e,n,i)}function C(e,t,n,i){return V(function(e,t){let n,i,r;const a=[];for(let o=0;o<e.length&&!((t-=2)<0);++o)n=e.charCodeAt(o),i=n>>8,r=n%256,a.push(r),a.push(i);return a}(t,e.length-n),e,n,i)}function _(e,n,i){return 0===n&&i===e.length?t.fromByteArray(e):t.fromByteArray(e.slice(n,i))}function E(e,t,n){n=Math.min(e.length,n);const i=[];let r=t;for(;r<n;){const t=e[r];let a=null,o=t>239?4:t>223?3:t>191?2:1;if(r+o<=n){let n,i,s,l;switch(o){case 1:t<128&&(a=t);break;case 2:n=e[r+1],128==(192&n)&&(l=(31&t)<<6|63&n,l>127&&(a=l));break;case 3:n=e[r+1],i=e[r+2],128==(192&n)&&128==(192&i)&&(l=(15&t)<<12|(63&n)<<6|63&i,l>2047&&(l<55296||l>57343)&&(a=l));break;case 4:n=e[r+1],i=e[r+2],s=e[r+3],128==(192&n)&&128==(192&i)&&128==(192&s)&&(l=(15&t)<<18|(63&n)<<12|(63&i)<<6|63&s,l>65535&&l<1114112&&(a=l))}}null===a?(a=65533,o=1):a>65535&&(a-=65536,i.push(a>>>10&1023|55296),a=56320|1023&a),i.push(a),r+=o}return function(e){const t=e.length;if(t<=k)return String.fromCharCode.apply(String,e);let n="",i=0;for(;i<t;)n+=String.fromCharCode.apply(String,e.slice(i,i+=k));return n}(i)}e.kMaxLength=r,o.TYPED_ARRAY_SUPPORT=function(){try{const e=new Uint8Array(1),t={foo:function(){return 42}};return Object.setPrototypeOf(t,Uint8Array.prototype),Object.setPrototypeOf(e,t),42===e.foo()}catch(e){return!1}}(),o.TYPED_ARRAY_SUPPORT||"undefined"==typeof console||"function"!=typeof console.error||console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support."),Object.defineProperty(o.prototype,"parent",{enumerable:!0,get:function(){if(o.isBuffer(this))return this.buffer}}),Object.defineProperty(o.prototype,"offset",{enumerable:!0,get:function(){if(o.isBuffer(this))return this.byteOffset}}),o.poolSize=8192,o.from=function(e,t,n){return s(e,t,n)},Object.setPrototypeOf(o.prototype,Uint8Array.prototype),Object.setPrototypeOf(o,Uint8Array),o.alloc=function(e,t,n){return function(e,t,n){return l(e),e<=0?a(e):void 0!==t?"string"==typeof n?a(e).fill(t,n):a(e).fill(t):a(e)}(e,t,n)},o.allocUnsafe=function(e){return c(e)},o.allocUnsafeSlow=function(e){return c(e)},o.isBuffer=function(e){return null!=e&&!0===e._isBuffer&&e!==o.prototype},o.compare=function(e,t){if(G(e,Uint8Array)&&(e=o.from(e,e.offset,e.byteLength)),G(t,Uint8Array)&&(t=o.from(t,t.offset,t.byteLength)),!o.isBuffer(e)||!o.isBuffer(t))throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');if(e===t)return 0;let n=e.length,i=t.length;for(let r=0,a=Math.min(n,i);r<a;++r)if(e[r]!==t[r]){n=e[r],i=t[r];break}return n<i?-1:i<n?1:0},o.isEncoding=function(e){switch(String(e).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}},o.concat=function(e,t){if(!Array.isArray(e))throw new TypeError('"list" argument must be an Array of Buffers');if(0===e.length)return o.alloc(0);let n;if(void 0===t)for(t=0,n=0;n<e.length;++n)t+=e[n].length;const i=o.allocUnsafe(t);let r=0;for(n=0;n<e.length;++n){let t=e[n];if(G(t,Uint8Array))r+t.length>i.length?(o.isBuffer(t)||(t=o.from(t)),t.copy(i,r)):Uint8Array.prototype.set.call(i,t,r);else{if(!o.isBuffer(t))throw new TypeError('"list" argument must be an Array of Buffers');t.copy(i,r)}r+=t.length}return i},o.byteLength=h,o.prototype._isBuffer=!0,o.prototype.swap16=function(){const e=this.length;if(e%2!=0)throw new RangeError("Buffer size must be a multiple of 16-bits");for(let t=0;t<e;t+=2)m(this,t,t+1);return this},o.prototype.swap32=function(){const e=this.length;if(e%4!=0)throw new RangeError("Buffer size must be a multiple of 32-bits");for(let t=0;t<e;t+=4)m(this,t,t+3),m(this,t+1,t+2);return this},o.prototype.swap64=function(){const e=this.length;if(e%8!=0)throw new RangeError("Buffer size must be a multiple of 64-bits");for(let t=0;t<e;t+=8)m(this,t,t+7),m(this,t+1,t+6),m(this,t+2,t+5),m(this,t+3,t+4);return this},o.prototype.toString=function(){const e=this.length;return 0===e?"":0===arguments.length?E(this,0,e):f.apply(this,arguments)},o.prototype.toLocaleString=o.prototype.toString,o.prototype.equals=function(e){if(!o.isBuffer(e))throw new TypeError("Argument must be a Buffer");return this===e||0===o.compare(this,e)},o.prototype.inspect=function(){let t="";const n=e.INSPECT_MAX_BYTES;return t=this.toString("hex",0,n).replace(/(.{2})/g,"$1 ").trim(),this.length>n&&(t+=" ... "),"<Buffer "+t+">"},i&&(o.prototype[i]=o.prototype.inspect),o.prototype.compare=function(e,t,n,i,r){if(G(e,Uint8Array)&&(e=o.from(e,e.offset,e.byteLength)),!o.isBuffer(e))throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type '+typeof e);if(void 0===t&&(t=0),void 0===n&&(n=e?e.length:0),void 0===i&&(i=0),void 0===r&&(r=this.length),t<0||n>e.length||i<0||r>this.length)throw new RangeError("out of range index");if(i>=r&&t>=n)return 0;if(i>=r)return-1;if(t>=n)return 1;if(this===e)return 0;let a=(r>>>=0)-(i>>>=0),s=(n>>>=0)-(t>>>=0);const l=Math.min(a,s),c=this.slice(i,r),u=e.slice(t,n);for(let o=0;o<l;++o)if(c[o]!==u[o]){a=c[o],s=u[o];break}return a<s?-1:s<a?1:0},o.prototype.includes=function(e,t,n){return-1!==this.indexOf(e,t,n)},o.prototype.indexOf=function(e,t,n){return g(this,e,t,n,!0)},o.prototype.lastIndexOf=function(e,t,n){return g(this,e,t,n,!1)},o.prototype.write=function(e,t,n,i){if(void 0===t)i="utf8",n=this.length,t=0;else if(void 0===n&&"string"==typeof t)i=t,n=this.length,t=0;else{if(!isFinite(t))throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");t>>>=0,isFinite(n)?(n>>>=0,void 0===i&&(i="utf8")):(i=n,n=void 0)}const r=this.length-t;if((void 0===n||n>r)&&(n=r),e.length>0&&(n<0||t<0)||t>this.length)throw new RangeError("Attempt to write outside buffer bounds");i||(i="utf8");let a=!1;for(;;)switch(i){case"hex":return y(this,e,t,n);case"utf8":case"utf-8":return v(this,e,t,n);case"ascii":case"latin1":case"binary":return b(this,e,t,n);case"base64":return x(this,e,t,n);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return C(this,e,t,n);default:if(a)throw new TypeError("Unknown encoding: "+i);i=(""+i).toLowerCase(),a=!0}},o.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}};const k=4096;function T(e,t,n){let i="";n=Math.min(e.length,n);for(let r=t;r<n;++r)i+=String.fromCharCode(127&e[r]);return i}function A(e,t,n){let i="";n=Math.min(e.length,n);for(let r=t;r<n;++r)i+=String.fromCharCode(e[r]);return i}function $(e,t,n){const i=e.length;(!t||t<0)&&(t=0),(!n||n<0||n>i)&&(n=i);let r="";for(let a=t;a<n;++a)r+=K[e[a]];return r}function I(e,t,n){const i=e.slice(t,n);let r="";for(let a=0;a<i.length-1;a+=2)r+=String.fromCharCode(i[a]+256*i[a+1]);return r}function P(e,t,n){if(e%1!=0||e<0)throw new RangeError("offset is not uint");if(e+t>n)throw new RangeError("Trying to access beyond buffer length")}function S(e,t,n,i,r,a){if(!o.isBuffer(e))throw new TypeError('"buffer" argument must be a Buffer instance');if(t>r||t<a)throw new RangeError('"value" argument is out of bounds');if(n+i>e.length)throw new RangeError("Index out of range")}function R(e,t,n,i,r){L(t,i,r,e,n,7);let a=Number(t&BigInt(4294967295));e[n++]=a,a>>=8,e[n++]=a,a>>=8,e[n++]=a,a>>=8,e[n++]=a;let o=Number(t>>BigInt(32)&BigInt(4294967295));return e[n++]=o,o>>=8,e[n++]=o,o>>=8,e[n++]=o,o>>=8,e[n++]=o,n}function O(e,t,n,i,r){L(t,i,r,e,n,7);let a=Number(t&BigInt(4294967295));e[n+7]=a,a>>=8,e[n+6]=a,a>>=8,e[n+5]=a,a>>=8,e[n+4]=a;let o=Number(t>>BigInt(32)&BigInt(4294967295));return e[n+3]=o,o>>=8,e[n+2]=o,o>>=8,e[n+1]=o,o>>=8,e[n]=o,n+8}function N(e,t,n,i,r,a){if(n+i>e.length)throw new RangeError("Index out of range");if(n<0)throw new RangeError("Index out of range")}function M(e,t,i,r,a){return t=+t,i>>>=0,a||N(e,0,i,4),n.write(e,t,i,r,23,4),i+4}function j(e,t,i,r,a){return t=+t,i>>>=0,a||N(e,0,i,8),n.write(e,t,i,r,52,8),i+8}o.prototype.slice=function(e,t){const n=this.length;(e=~~e)<0?(e+=n)<0&&(e=0):e>n&&(e=n),(t=void 0===t?n:~~t)<0?(t+=n)<0&&(t=0):t>n&&(t=n),t<e&&(t=e);const i=this.subarray(e,t);return Object.setPrototypeOf(i,o.prototype),i},o.prototype.readUintLE=o.prototype.readUIntLE=function(e,t,n){e>>>=0,t>>>=0,n||P(e,t,this.length);let i=this[e],r=1,a=0;for(;++a<t&&(r*=256);)i+=this[e+a]*r;return i},o.prototype.readUintBE=o.prototype.readUIntBE=function(e,t,n){e>>>=0,t>>>=0,n||P(e,t,this.length);let i=this[e+--t],r=1;for(;t>0&&(r*=256);)i+=this[e+--t]*r;return i},o.prototype.readUint8=o.prototype.readUInt8=function(e,t){return e>>>=0,t||P(e,1,this.length),this[e]},o.prototype.readUint16LE=o.prototype.readUInt16LE=function(e,t){return e>>>=0,t||P(e,2,this.length),this[e]|this[e+1]<<8},o.prototype.readUint16BE=o.prototype.readUInt16BE=function(e,t){return e>>>=0,t||P(e,2,this.length),this[e]<<8|this[e+1]},o.prototype.readUint32LE=o.prototype.readUInt32LE=function(e,t){return e>>>=0,t||P(e,4,this.length),(this[e]|this[e+1]<<8|this[e+2]<<16)+16777216*this[e+3]},o.prototype.readUint32BE=o.prototype.readUInt32BE=function(e,t){return e>>>=0,t||P(e,4,this.length),16777216*this[e]+(this[e+1]<<16|this[e+2]<<8|this[e+3])},o.prototype.readBigUInt64LE=Y((function(e){z(e>>>=0,"offset");const t=this[e],n=this[e+7];void 0!==t&&void 0!==n||F(e,this.length-8);const i=t+256*this[++e]+65536*this[++e]+this[++e]*2**24,r=this[++e]+256*this[++e]+65536*this[++e]+n*2**24;return BigInt(i)+(BigInt(r)<<BigInt(32))})),o.prototype.readBigUInt64BE=Y((function(e){z(e>>>=0,"offset");const t=this[e],n=this[e+7];void 0!==t&&void 0!==n||F(e,this.length-8);const i=t*2**24+65536*this[++e]+256*this[++e]+this[++e],r=this[++e]*2**24+65536*this[++e]+256*this[++e]+n;return(BigInt(i)<<BigInt(32))+BigInt(r)})),o.prototype.readIntLE=function(e,t,n){e>>>=0,t>>>=0,n||P(e,t,this.length);let i=this[e],r=1,a=0;for(;++a<t&&(r*=256);)i+=this[e+a]*r;return r*=128,i>=r&&(i-=Math.pow(2,8*t)),i},o.prototype.readIntBE=function(e,t,n){e>>>=0,t>>>=0,n||P(e,t,this.length);let i=t,r=1,a=this[e+--i];for(;i>0&&(r*=256);)a+=this[e+--i]*r;return r*=128,a>=r&&(a-=Math.pow(2,8*t)),a},o.prototype.readInt8=function(e,t){return e>>>=0,t||P(e,1,this.length),128&this[e]?-1*(255-this[e]+1):this[e]},o.prototype.readInt16LE=function(e,t){e>>>=0,t||P(e,2,this.length);const n=this[e]|this[e+1]<<8;return 32768&n?4294901760|n:n},o.prototype.readInt16BE=function(e,t){e>>>=0,t||P(e,2,this.length);const n=this[e+1]|this[e]<<8;return 32768&n?4294901760|n:n},o.prototype.readInt32LE=function(e,t){return e>>>=0,t||P(e,4,this.length),this[e]|this[e+1]<<8|this[e+2]<<16|this[e+3]<<24},o.prototype.readInt32BE=function(e,t){return e>>>=0,t||P(e,4,this.length),this[e]<<24|this[e+1]<<16|this[e+2]<<8|this[e+3]},o.prototype.readBigInt64LE=Y((function(e){z(e>>>=0,"offset");const t=this[e],n=this[e+7];void 0!==t&&void 0!==n||F(e,this.length-8);const i=this[e+4]+256*this[e+5]+65536*this[e+6]+(n<<24);return(BigInt(i)<<BigInt(32))+BigInt(t+256*this[++e]+65536*this[++e]+this[++e]*2**24)})),o.prototype.readBigInt64BE=Y((function(e){z(e>>>=0,"offset");const t=this[e],n=this[e+7];void 0!==t&&void 0!==n||F(e,this.length-8);const i=(t<<24)+65536*this[++e]+256*this[++e]+this[++e];return(BigInt(i)<<BigInt(32))+BigInt(this[++e]*2**24+65536*this[++e]+256*this[++e]+n)})),o.prototype.readFloatLE=function(e,t){return e>>>=0,t||P(e,4,this.length),n.read(this,e,!0,23,4)},o.prototype.readFloatBE=function(e,t){return e>>>=0,t||P(e,4,this.length),n.read(this,e,!1,23,4)},o.prototype.readDoubleLE=function(e,t){return e>>>=0,t||P(e,8,this.length),n.read(this,e,!0,52,8)},o.prototype.readDoubleBE=function(e,t){return e>>>=0,t||P(e,8,this.length),n.read(this,e,!1,52,8)},o.prototype.writeUintLE=o.prototype.writeUIntLE=function(e,t,n,i){if(e=+e,t>>>=0,n>>>=0,!i){S(this,e,t,n,Math.pow(2,8*n)-1,0)}let r=1,a=0;for(this[t]=255&e;++a<n&&(r*=256);)this[t+a]=e/r&255;return t+n},o.prototype.writeUintBE=o.prototype.writeUIntBE=function(e,t,n,i){if(e=+e,t>>>=0,n>>>=0,!i){S(this,e,t,n,Math.pow(2,8*n)-1,0)}let r=n-1,a=1;for(this[t+r]=255&e;--r>=0&&(a*=256);)this[t+r]=e/a&255;return t+n},o.prototype.writeUint8=o.prototype.writeUInt8=function(e,t,n){return e=+e,t>>>=0,n||S(this,e,t,1,255,0),this[t]=255&e,t+1},o.prototype.writeUint16LE=o.prototype.writeUInt16LE=function(e,t,n){return e=+e,t>>>=0,n||S(this,e,t,2,65535,0),this[t]=255&e,this[t+1]=e>>>8,t+2},o.prototype.writeUint16BE=o.prototype.writeUInt16BE=function(e,t,n){return e=+e,t>>>=0,n||S(this,e,t,2,65535,0),this[t]=e>>>8,this[t+1]=255&e,t+2},o.prototype.writeUint32LE=o.prototype.writeUInt32LE=function(e,t,n){return e=+e,t>>>=0,n||S(this,e,t,4,4294967295,0),this[t+3]=e>>>24,this[t+2]=e>>>16,this[t+1]=e>>>8,this[t]=255&e,t+4},o.prototype.writeUint32BE=o.prototype.writeUInt32BE=function(e,t,n){return e=+e,t>>>=0,n||S(this,e,t,4,4294967295,0),this[t]=e>>>24,this[t+1]=e>>>16,this[t+2]=e>>>8,this[t+3]=255&e,t+4},o.prototype.writeBigUInt64LE=Y((function(e,t=0){return R(this,e,t,BigInt(0),BigInt("0xffffffffffffffff"))})),o.prototype.writeBigUInt64BE=Y((function(e,t=0){return O(this,e,t,BigInt(0),BigInt("0xffffffffffffffff"))})),o.prototype.writeIntLE=function(e,t,n,i){if(e=+e,t>>>=0,!i){const i=Math.pow(2,8*n-1);S(this,e,t,n,i-1,-i)}let r=0,a=1,o=0;for(this[t]=255&e;++r<n&&(a*=256);)e<0&&0===o&&0!==this[t+r-1]&&(o=1),this[t+r]=(e/a>>0)-o&255;return t+n},o.prototype.writeIntBE=function(e,t,n,i){if(e=+e,t>>>=0,!i){const i=Math.pow(2,8*n-1);S(this,e,t,n,i-1,-i)}let r=n-1,a=1,o=0;for(this[t+r]=255&e;--r>=0&&(a*=256);)e<0&&0===o&&0!==this[t+r+1]&&(o=1),this[t+r]=(e/a>>0)-o&255;return t+n},o.prototype.writeInt8=function(e,t,n){return e=+e,t>>>=0,n||S(this,e,t,1,127,-128),e<0&&(e=255+e+1),this[t]=255&e,t+1},o.prototype.writeInt16LE=function(e,t,n){return e=+e,t>>>=0,n||S(this,e,t,2,32767,-32768),this[t]=255&e,this[t+1]=e>>>8,t+2},o.prototype.writeInt16BE=function(e,t,n){return e=+e,t>>>=0,n||S(this,e,t,2,32767,-32768),this[t]=e>>>8,this[t+1]=255&e,t+2},o.prototype.writeInt32LE=function(e,t,n){return e=+e,t>>>=0,n||S(this,e,t,4,2147483647,-2147483648),this[t]=255&e,this[t+1]=e>>>8,this[t+2]=e>>>16,this[t+3]=e>>>24,t+4},o.prototype.writeInt32BE=function(e,t,n){return e=+e,t>>>=0,n||S(this,e,t,4,2147483647,-2147483648),e<0&&(e=4294967295+e+1),this[t]=e>>>24,this[t+1]=e>>>16,this[t+2]=e>>>8,this[t+3]=255&e,t+4},o.prototype.writeBigInt64LE=Y((function(e,t=0){return R(this,e,t,-BigInt("0x8000000000000000"),BigInt("0x7fffffffffffffff"))})),o.prototype.writeBigInt64BE=Y((function(e,t=0){return O(this,e,t,-BigInt("0x8000000000000000"),BigInt("0x7fffffffffffffff"))})),o.prototype.writeFloatLE=function(e,t,n){return M(this,e,t,!0,n)},o.prototype.writeFloatBE=function(e,t,n){return M(this,e,t,!1,n)},o.prototype.writeDoubleLE=function(e,t,n){return j(this,e,t,!0,n)},o.prototype.writeDoubleBE=function(e,t,n){return j(this,e,t,!1,n)},o.prototype.copy=function(e,t,n,i){if(!o.isBuffer(e))throw new TypeError("argument should be a Buffer");if(n||(n=0),i||0===i||(i=this.length),t>=e.length&&(t=e.length),t||(t=0),i>0&&i<n&&(i=n),i===n)return 0;if(0===e.length||0===this.length)return 0;if(t<0)throw new RangeError("targetStart out of bounds");if(n<0||n>=this.length)throw new RangeError("Index out of range");if(i<0)throw new RangeError("sourceEnd out of bounds");i>this.length&&(i=this.length),e.length-t<i-n&&(i=e.length-t+n);const r=i-n;return this===e&&"function"==typeof Uint8Array.prototype.copyWithin?this.copyWithin(t,n,i):Uint8Array.prototype.set.call(e,this.subarray(n,i),t),r},o.prototype.fill=function(e,t,n,i){if("string"==typeof e){if("string"==typeof t?(i=t,t=0,n=this.length):"string"==typeof n&&(i=n,n=this.length),void 0!==i&&"string"!=typeof i)throw new TypeError("encoding must be a string");if("string"==typeof i&&!o.isEncoding(i))throw new TypeError("Unknown encoding: "+i);if(1===e.length){const t=e.charCodeAt(0);("utf8"===i&&t<128||"latin1"===i)&&(e=t)}}else"number"==typeof e?e&=255:"boolean"==typeof e&&(e=Number(e));if(t<0||this.length<t||this.length<n)throw new RangeError("Out of range index");if(n<=t)return this;let r;if(t>>>=0,n=void 0===n?this.length:n>>>0,e||(e=0),"number"==typeof e)for(r=t;r<n;++r)this[r]=e;else{const a=o.isBuffer(e)?e:o.from(e,i),s=a.length;if(0===s)throw new TypeError('The value "'+e+'" is invalid for argument "value"');for(r=0;r<n-t;++r)this[r+t]=a[r%s]}return this};const U={};function D(e,t,n){U[e]=class extends n{constructor(){super(),Object.defineProperty(this,"message",{value:t.apply(this,arguments),writable:!0,configurable:!0}),this.name=`${this.name} [${e}]`,this.stack,delete this.name}get code(){return e}set code(e){Object.defineProperty(this,"code",{configurable:!0,enumerable:!0,value:e,writable:!0})}toString(){return`${this.name} [${e}]: ${this.message}`}}}function B(e){let t="",n=e.length;const i="-"===e[0]?1:0;for(;n>=i+4;n-=3)t=`_${e.slice(n-3,n)}${t}`;return`${e.slice(0,n)}${t}`}function L(e,t,n,i,r,a){if(e>n||e<t){const i="bigint"==typeof t?"n":"";let r;throw r=a>3?0===t||t===BigInt(0)?`>= 0${i} and < 2${i} ** ${8*(a+1)}${i}`:`>= -(2${i} ** ${8*(a+1)-1}${i}) and < 2 ** ${8*(a+1)-1}${i}`:`>= ${t}${i} and <= ${n}${i}`,new U.ERR_OUT_OF_RANGE("value",r,e)}!function(e,t,n){z(t,"offset"),void 0!==e[t]&&void 0!==e[t+n]||F(t,e.length-(n+1))}(i,r,a)}function z(e,t){if("number"!=typeof e)throw new U.ERR_INVALID_ARG_TYPE(t,"number",e)}function F(e,t,n){if(Math.floor(e)!==e)throw z(e,n),new U.ERR_OUT_OF_RANGE(n||"offset","an integer",e);if(t<0)throw new U.ERR_BUFFER_OUT_OF_BOUNDS;throw new U.ERR_OUT_OF_RANGE(n||"offset",`>= ${n?1:0} and <= ${t}`,e)}D("ERR_BUFFER_OUT_OF_BOUNDS",(function(e){return e?`${e} is outside of buffer bounds`:"Attempt to access memory outside buffer bounds"}),RangeError),D("ERR_INVALID_ARG_TYPE",(function(e,t){return`The "${e}" argument must be of type number. Received type ${typeof t}`}),TypeError),D("ERR_OUT_OF_RANGE",(function(e,t,n){let i=`The value of "${e}" is out of range.`,r=n;return Number.isInteger(n)&&Math.abs(n)>2**32?r=B(String(n)):"bigint"==typeof n&&(r=String(n),(n>BigInt(2)**BigInt(32)||n<-(BigInt(2)**BigInt(32)))&&(r=B(r)),r+="n"),i+=` It must be ${t}. Received ${r}`,i}),RangeError);const W=/[^+/0-9A-Za-z-_]/g;function H(e,t){let n;t=t||1/0;const i=e.length;let r=null;const a=[];for(let o=0;o<i;++o){if(n=e.charCodeAt(o),n>55295&&n<57344){if(!r){if(n>56319){(t-=3)>-1&&a.push(239,191,189);continue}if(o+1===i){(t-=3)>-1&&a.push(239,191,189);continue}r=n;continue}if(n<56320){(t-=3)>-1&&a.push(239,191,189),r=n;continue}n=65536+(r-55296<<10|n-56320)}else r&&(t-=3)>-1&&a.push(239,191,189);if(r=null,n<128){if((t-=1)<0)break;a.push(n)}else if(n<2048){if((t-=2)<0)break;a.push(n>>6|192,63&n|128)}else if(n<65536){if((t-=3)<0)break;a.push(n>>12|224,n>>6&63|128,63&n|128)}else{if(!(n<1114112))throw new Error("Invalid code point");if((t-=4)<0)break;a.push(n>>18|240,n>>12&63|128,n>>6&63|128,63&n|128)}}return a}function Z(e){return t.toByteArray(function(e){if((e=(e=e.split("=")[0]).trim().replace(W,"")).length<2)return"";for(;e.length%4!=0;)e+="=";return e}(e))}function V(e,t,n,i){let r;for(r=0;r<i&&!(r+n>=t.length||r>=e.length);++r)t[r+n]=e[r];return r}function G(e,t){return e instanceof t||null!=e&&null!=e.constructor&&null!=e.constructor.name&&e.constructor.name===t.name}function q(e){return e!=e}const K=function(){const e="0123456789abcdef",t=new Array(256);for(let n=0;n<16;++n){const i=16*n;for(let r=0;r<16;++r)t[i+r]=e[n]+e[r]}return t}();function Y(e){return"undefined"==typeof BigInt?J:e}function J(){throw new Error("BigInt not supported")}}(p_),"undefined"!=typeof window&&(window.Buffer||(window.Buffer=p_.Buffer),window.global||(window.global=window),window.process||(window.process={}),(null==(n=window.process)?void 0:n.env)||(window.process={env:{}})),C_.type="coinbaseWallet",__.type="walletConnect";const E_=function({projectId:e,chains:t,metadata:n,enableInjected:i,enableCoinbase:r,enableEmail:a,enableWalletConnect:o,enableEIP6963:s,enableSmartAccounts:l,...c}){const u=[],d=t.map((t=>[t.id,u_({chainId:t.id,projectId:e})])),p=Object.fromEntries(d);var h;return!1!==o&&u.push(__({projectId:e,metadata:n,showQrModal:!1})),!1!==i&&u.push(fa({shimDisconnect:!0})),!1!==r&&u.push(C_({appName:(null==n?void 0:n.name)??"Unknown",appLogoUrl:(null==n?void 0:n.icons[0])??"Unknown",enableMobileWalletLink:!0})),!0===a&&u.push((h={chains:[...t],options:{projectId:e,enableSmartAccounts:l}},e=>({id:o_.EMAIL_CONNECTOR_ID,name:"Web3Modal Email",type:"w3mEmail",async connect(e={}){const t=await this.getProvider(),{address:n,chainId:i}=await t.connect({chainId:e.chainId}),{isDeployed:r,address:a}=await this.initSmartAccount();return r&&a?{accounts:[a],account:a,chainId:i,chain:{id:i,unsuported:!1}}:{accounts:[n],account:n,chainId:i,chain:{id:i,unsuported:!1}}},async initSmartAccount(){if(!h.options.enableSmartAccounts)return{isDeployed:!1};const e=await this.getProvider(),t=await this.getChainId(),{smartAccountEnabledNetworks:n}=await e.getSmartAccountEnabledNetworks();return n.includes(t)?await e.initSmartAccount():{isDeployed:!1}},async disconnect(){const e=await this.getProvider();await e.disconnect()},async getAccounts(){const e=await this.getProvider(),{address:t}=await e.connect();return[t]},async getProvider(){return this.provider||(this.provider=new Ax(h.options.projectId)),Promise.resolve(this.provider)},async getChainId(){const e=await this.getProvider(),{chainId:t}=await e.getChainId();return t},async isAuthorized(){const e=await this.getProvider(),{isConnected:t}=await e.isConnected();return t},async switchChain({chainId:t}){try{const n=e.chains.find((e=>e.id===t));if(!n)throw new Gt(new Error("chain not found on connector."));const i=await this.getProvider();return await i.switchNetwork(t),e.emitter.emit("change",{chainId:pa(t)}),n}catch(n){if(n instanceof Error)throw new Gt(n);throw n}},onAccountsChanged(t){0===t.length?this.onDisconnect():e.emitter.emit("change",{accounts:t.map(Re)})},onChainChanged(t){const n=pa(t);e.emitter.emit("change",{chainId:n})},async onConnect(t){const n=pa(t.chainId),i=await this.getAccounts();e.emitter.emit("connect",{accounts:i,chainId:n})},async onDisconnect(e){const t=await this.getProvider();await t.disconnect()}}))),va({chains:t,multiInjectedProviderDiscovery:!1!==s,transports:p,...c,connectors:u})}({chains:[Wa,Ba,Fa,Ua,Ha,Za,ja,Da,za,La,Va],projectId:projectId,metadata:metadata});var k_;!async function(e,t={}){var n,i;if(Ia)return[];Ia=!0,e.setState((e=>({...e,status:e.current?"reconnecting":"connecting"})));const r=[];if(null==(n=t.connectors)?void 0:n.length)for(const d of t.connectors){let t;t="function"==typeof d?e._internal.connectors.setup(d):d,r.push(t)}else r.push(...e.connectors);let a;try{a=await(null==(i=e.storage)?void 0:i.getItem("recentConnectorId"))}catch{}const o={};for(const[,d]of e.state.connections)o[d.connector.id]=1;a&&(o[a]=0);const s=Object.keys(o).length>0?[...r].sort(((e,t)=>(o[e.id]??10)-(o[t.id]??10))):r;let l=!1;const c=[],u=[];for(const d of s){const t=await d.getProvider();if(!t)continue;if(u.some((e=>e===t)))continue;if(!(await d.isAuthorized()))continue;const n=await d.connect({isReconnecting:!0}).catch((()=>null));n&&(d.emitter.off("connect",e._internal.events.connect),d.emitter.on("change",e._internal.events.change),d.emitter.on("disconnect",e._internal.events.disconnect),e.setState((e=>{const t=new Map(l?e.connections:new Map).set(d.uid,{accounts:n.accounts,chainId:n.chainId,connector:d});return{...e,current:l?e.current:d.uid,connections:t}})),c.push({accounts:n.accounts,chainId:n.chainId,connector:d}),u.push(t),l=!0)}l?e.setState((e=>({...e,status:"connected"}))):e.setState((e=>({...e,connections:new Map,current:void 0,status:"disconnected"}))),Ia=!1}(E_),k_={wagmiConfig:E_,projectId:projectId},new d_({...k_,_sdkVersion:`html-wagmi-${o_.VERSION}`});var T_,A_,$_,I_="0x0000000000000000000000000000000000000000",P_={1:{0:[{inputs:[{internalType:"string",name:"_name",type:"string"},{internalType:"string",name:"_symbol",type:"string"},{internalType:"uint256[]",name:"_numbers",type:"uint256[]"}],stateMutability:"nonpayable",type:"constructor"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"owner",type:"address"},{indexed:!0,internalType:"address",name:"spender",type:"address"},{indexed:!1,internalType:"uint256",name:"value",type:"uint256"}],name:"Approval",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"from",type:"address"},{indexed:!0,internalType:"address",name:"to",type:"address"},{indexed:!1,internalType:"uint256",name:"value",type:"uint256"}],name:"Transfer",type:"event"},{inputs:[{internalType:"address",name:"_owner",type:"address"},{internalType:"address",name:"_spender",type:"address"}],name:"allowance",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"_spender",type:"address"},{internalType:"uint256",name:"_value",type:"uint256"}],name:"approve",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"_owner",type:"address"}],name:"balanceOf",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"decimals",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"name",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"},{inputs:[],name:"symbol",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"},{inputs:[],name:"totalSupply",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"_to",type:"address"},{internalType:"uint256",name:"_value",type:"uint256"}],name:"transfer",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"_from",type:"address"},{internalType:"address",name:"_to",type:"address"},{internalType:"uint256",name:"_value",type:"uint256"}],name:"transferFrom",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"nonpayable",type:"function"}],1:[{inputs:[{internalType:"string",name:"_name",type:"string"},{internalType:"string",name:"_symbol",type:"string"},{internalType:"uint256[]",name:"_numbers",type:"uint256[]"}],stateMutability:"nonpayable",type:"constructor"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"owner",type:"address"},{indexed:!0,internalType:"address",name:"spender",type:"address"},{indexed:!1,internalType:"uint256",name:"value",type:"uint256"}],name:"Approval",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"from",type:"address"},{indexed:!0,internalType:"address",name:"to",type:"address"},{indexed:!1,internalType:"uint256",name:"value",type:"uint256"}],name:"Transfer",type:"event"},{inputs:[{internalType:"address",name:"_owner",type:"address"},{internalType:"address",name:"_spender",type:"address"}],name:"allowance",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"_spender",type:"address"},{internalType:"uint256",name:"_value",type:"uint256"}],name:"approve",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"_owner",type:"address"}],name:"balanceOf",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"decimals",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"name",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"},{inputs:[],name:"symbol",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"},{inputs:[],name:"totalSupply",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"_to",type:"address"},{internalType:"uint256",name:"_value",type:"uint256"}],name:"transfer",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"_from",type:"address"},{internalType:"address",name:"_to",type:"address"},{internalType:"uint256",name:"_value",type:"uint256"}],name:"transferFrom",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"nonpayable",type:"function"}],2:[{inputs:[{internalType:"string",name:"_name",type:"string"},{internalType:"string",name:"_symbol",type:"string"},{internalType:"uint256[]",name:"_numbers",type:"uint256[]"},{internalType:"address[]",name:"_addresses",type:"address[]"}],stateMutability:"nonpayable",type:"constructor"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"owner",type:"address"},{indexed:!0,internalType:"address",name:"spender",type:"address"},{indexed:!1,internalType:"uint256",name:"value",type:"uint256"}],name:"Approval",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"from",type:"address"},{indexed:!0,internalType:"address",name:"to",type:"address"},{indexed:!1,internalType:"uint256",name:"value",type:"uint256"}],name:"Transfer",type:"event"},{inputs:[{internalType:"address",name:"_owner",type:"address"},{internalType:"address",name:"_spender",type:"address"}],name:"allowance",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"_spender",type:"address"},{internalType:"uint256",name:"_value",type:"uint256"}],name:"approve",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"_owner",type:"address"}],name:"balanceOf",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"_amount",type:"uint256"}],name:"burn",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"_from",type:"address"},{internalType:"uint256",name:"_amount",type:"uint256"}],name:"burnFrom",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"decimals",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"name",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"},{inputs:[],name:"symbol",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"},{inputs:[],name:"totalSupply",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"_to",type:"address"},{internalType:"uint256",name:"_value",type:"uint256"}],name:"transfer",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"_from",type:"address"},{internalType:"address",name:"_to",type:"address"},{internalType:"uint256",name:"_value",type:"uint256"}],name:"transferFrom",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"nonpayable",type:"function"}],3:[{inputs:[{internalType:"string",name:"_name",type:"string"},{internalType:"string",name:"_symbol",type:"string"},{internalType:"uint256[]",name:"_numbers",type:"uint256[]"},{internalType:"address[]",name:"_addresses",type:"address[]"}],stateMutability:"nonpayable",type:"constructor"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"owner",type:"address"},{indexed:!0,internalType:"address",name:"spender",type:"address"},{indexed:!1,internalType:"uint256",name:"value",type:"uint256"}],name:"Approval",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"previousOwner",type:"address"},{indexed:!0,internalType:"address",name:"newOwner",type:"address"}],name:"OwnershipTransferred",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"from",type:"address"},{indexed:!0,internalType:"address",name:"to",type:"address"},{indexed:!1,internalType:"uint256",name:"value",type:"uint256"}],name:"Transfer",type:"event"},{inputs:[{internalType:"address",name:"_owner",type:"address"},{internalType:"address",name:"_spender",type:"address"}],name:"allowance",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"_spender",type:"address"},{internalType:"uint256",name:"_value",type:"uint256"}],name:"approve",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"_owner",type:"address"}],name:"balanceOf",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"_amount",type:"uint256"}],name:"burn",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"_from",type:"address"},{internalType:"uint256",name:"_amount",type:"uint256"}],name:"burnFrom",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"decimals",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"getUnlockTime",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"_duration",type:"uint256"}],name:"lockOwnership",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"_to",type:"address"},{internalType:"uint256",name:"_amount",type:"uint256"}],name:"mint",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"name",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"},{inputs:[],name:"owner",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[],name:"ownershipRenounced",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[],name:"renounceOwnership",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"symbol",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"},{inputs:[],name:"totalSupply",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"_to",type:"address"},{internalType:"uint256",name:"_value",type:"uint256"}],name:"transfer",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"_from",type:"address"},{internalType:"address",name:"_to",type:"address"},{internalType:"uint256",name:"_value",type:"uint256"}],name:"transferFrom",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"_newOwner",type:"address"}],name:"transferOwnership",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"unlockOwnership",outputs:[],stateMutability:"nonpayable",type:"function"}],4:[{inputs:[{internalType:"string",name:"_name",type:"string"},{internalType:"string",name:"_symbol",type:"string"},{internalType:"uint256[]",name:"_numbers",type:"uint256[]"},{internalType:"address[]",name:"_addresses",type:"address[]"}],stateMutability:"nonpayable",type:"constructor"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"owner",type:"address"},{indexed:!0,internalType:"address",name:"spender",type:"address"},{indexed:!1,internalType:"uint256",name:"value",type:"uint256"}],name:"Approval",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"previousOwner",type:"address"},{indexed:!0,internalType:"address",name:"newOwner",type:"address"}],name:"OwnershipTransferred",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"from",type:"address"},{indexed:!0,internalType:"address",name:"to",type:"address"},{indexed:!1,internalType:"uint256",name:"value",type:"uint256"}],name:"Transfer",type:"event"},{inputs:[{internalType:"address",name:"_owner",type:"address"},{internalType:"address",name:"_spender",type:"address"}],name:"allowance",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"_spender",type:"address"},{internalType:"uint256",name:"_value",type:"uint256"}],name:"approve",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"_owner",type:"address"}],name:"balanceOf",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"_amount",type:"uint256"}],name:"burn",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"_from",type:"address"},{internalType:"uint256",name:"_amount",type:"uint256"}],name:"burnFrom",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"cap",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"decimals",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"getUnlockTime",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"_duration",type:"uint256"}],name:"lockOwnership",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"_to",type:"address"},{internalType:"uint256",name:"_amount",type:"uint256"}],name:"mint",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"name",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"},{inputs:[],name:"owner",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[],name:"ownershipRenounced",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[],name:"renounceOwnership",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"symbol",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"},{inputs:[],name:"totalSupply",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"_to",type:"address"},{internalType:"uint256",name:"_value",type:"uint256"}],name:"transfer",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"_from",type:"address"},{internalType:"address",name:"_to",type:"address"},{internalType:"uint256",name:"_value",type:"uint256"}],name:"transferFrom",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"_newOwner",type:"address"}],name:"transferOwnership",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"unlockOwnership",outputs:[],stateMutability:"nonpayable",type:"function"}],5:[{inputs:[{internalType:"string",name:"_name",type:"string"},{internalType:"string",name:"_symbol",type:"string"},{internalType:"uint256[]",name:"_numbers",type:"uint256[]"},{internalType:"address[]",name:"_addresses",type:"address[]"}],stateMutability:"nonpayable",type:"constructor"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"owner",type:"address"},{indexed:!0,internalType:"address",name:"spender",type:"address"},{indexed:!1,internalType:"uint256",name:"value",type:"uint256"}],name:"Approval",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"previousOwner",type:"address"},{indexed:!0,internalType:"address",name:"newOwner",type:"address"}],name:"OwnershipTransferred",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"from",type:"address"},{indexed:!0,internalType:"address",name:"to",type:"address"},{indexed:!1,internalType:"uint256",name:"value",type:"uint256"}],name:"Transfer",type:"event"},{inputs:[{internalType:"address",name:"_owner",type:"address"},{internalType:"address",name:"_spender",type:"address"}],name:"allowance",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"_spender",type:"address"},{internalType:"uint256",name:"_value",type:"uint256"}],name:"approve",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"_owner",type:"address"}],name:"balanceOf",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"_amount",type:"uint256"}],name:"burn",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"_from",type:"address"},{internalType:"uint256",name:"_amount",type:"uint256"}],name:"burnFrom",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"decimals",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"deflationOff",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"deflationOn",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"deflationPercent",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"deflationStatus",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[],name:"deflationTotal",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"_account",type:"address"}],name:"excludeFromFee",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"getUnlockTime",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"_account",type:"address"}],name:"includeInFee",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"_account",type:"address"}],name:"isExcludedFromFee",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"_duration",type:"uint256"}],name:"lockOwnership",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"name",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"},{inputs:[],name:"owner",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[],name:"ownershipRenounced",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[],name:"renounceOwnership",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"symbol",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"},{inputs:[],name:"totalSupply",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"_to",type:"address"},{internalType:"uint256",name:"_value",type:"uint256"}],name:"transfer",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"_from",type:"address"},{internalType:"address",name:"_to",type:"address"},{internalType:"uint256",name:"_value",type:"uint256"}],name:"transferFrom",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"_newOwner",type:"address"}],name:"transferOwnership",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"unlockOwnership",outputs:[],stateMutability:"nonpayable",type:"function"}],6:[{inputs:[{internalType:"string",name:"_name",type:"string"},{internalType:"string",name:"_symbol",type:"string"},{internalType:"uint256[]",name:"_numbers",type:"uint256[]"},{internalType:"address[]",name:"_addresses",type:"address[]"}],stateMutability:"nonpayable",type:"constructor"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"owner",type:"address"},{indexed:!0,internalType:"address",name:"spender",type:"address"},{indexed:!1,internalType:"uint256",name:"value",type:"uint256"}],name:"Approval",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"previousOwner",type:"address"},{indexed:!0,internalType:"address",name:"newOwner",type:"address"}],name:"OwnershipTransferred",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"from",type:"address"},{indexed:!0,internalType:"address",name:"to",type:"address"},{indexed:!1,internalType:"uint256",name:"value",type:"uint256"}],name:"Transfer",type:"event"},{inputs:[{internalType:"address",name:"_owner",type:"address"},{internalType:"address",name:"_spender",type:"address"}],name:"allowance",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"_spender",type:"address"},{internalType:"uint256",name:"_value",type:"uint256"}],name:"approve",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"_owner",type:"address"}],name:"balanceOf",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"_amount",type:"uint256"}],name:"burn",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"_from",type:"address"},{internalType:"uint256",name:"_amount",type:"uint256"}],name:"burnFrom",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"decimals",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"deflationOff",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"deflationOn",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"deflationPercent",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"deflationStatus",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[],name:"deflationTotal",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"_account",type:"address"}],name:"excludeFromFee",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"getUnlockTime",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"_account",type:"address"}],name:"includeInFee",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"_account",type:"address"}],name:"isExcludedFromFee",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"_duration",type:"uint256"}],name:"lockOwnership",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"name",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"},{inputs:[],name:"owner",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[],name:"ownershipRenounced",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[],name:"renounceOwnership",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"bool",name:"_on",type:"bool"}],name:"setAllTaxesStatus",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"bool",name:"_on",type:"bool"}],name:"setTax1Status",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"bool",name:"_on",type:"bool"}],name:"setTax2Status",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"bool",name:"_on",type:"bool"}],name:"setTax3Status",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"symbol",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"},{inputs:[],name:"tax1Address",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[],name:"tax1Percent",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"tax1Status",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[],name:"tax1Total",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"tax2Address",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[],name:"tax2Percent",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"tax2Status",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[],name:"tax2Total",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"tax3Address",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[],name:"tax3Percent",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"tax3Status",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[],name:"tax3Total",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"totalSupply",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"_to",type:"address"},{internalType:"uint256",name:"_value",type:"uint256"}],name:"transfer",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"_from",type:"address"},{internalType:"address",name:"_to",type:"address"},{internalType:"uint256",name:"_value",type:"uint256"}],name:"transferFrom",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"_newOwner",type:"address"}],name:"transferOwnership",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"unlockOwnership",outputs:[],stateMutability:"nonpayable",type:"function"}]},2:{1:[{inputs:[{internalType:"address[]",name:"_addresses",type:"address[]"},{internalType:"uint256[]",name:"_uints",type:"uint256[]"},{internalType:"string[]",name:"_strings",type:"string[]"},{internalType:"bool[]",name:"_bools",type:"bool[]"},{internalType:"uint256",name:"_fee",type:"uint256"}],stateMutability:"nonpayable",type:"constructor"},{anonymous:!1,inputs:[{indexed:!1,internalType:"uint256",name:"time",type:"uint256"}],name:"Canceled",type:"event"},{anonymous:!1,inputs:[{indexed:!1,internalType:"address",name:"buyer",type:"address"},{indexed:!1,internalType:"uint256",name:"amount",type:"uint256"}],name:"Contribution",type:"event"},{inputs:[],name:"allowEmergencyWithdrawal",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"_owner",type:"address"}],name:"availableForClaim",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"",type:"address"}],name:"balances",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"_amount",type:"uint256"},{internalType:"address",name:"_ref",type:"address"}],name:"buyToken",outputs:[],stateMutability:"payable",type:"function"},{inputs:[],name:"canClaim",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[],name:"canEmergencyRefund",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[],name:"canRefund",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[],name:"cancel",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"canceled",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"string[]",name:"_newDescriptions",type:"string[]"}],name:"changeDescriptions",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"_qty",type:"uint256"}],name:"checkAmount",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"_payment",type:"uint256"}],name:"checkChange",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"_payment",type:"uint256"}],name:"checkQty",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"checkStatus",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"claim",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"claimRef",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"claimStart",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"",type:"address"}],name:"claimed",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"currency",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[],name:"dbFee",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"earlyFee",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"earlyMinutes",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"endTime",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"exactType",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"getDescriptions",outputs:[{internalType:"string[]",name:"",type:"string[]"}],stateMutability:"view",type:"function"},{inputs:[],name:"hardcap",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"noCancel",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[],name:"owner",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[],name:"payRefInTokens",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[],name:"purchaseMax",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"purchaseMin",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"rate",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"",type:"address"}],name:"refBalances",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"",type:"address"}],name:"refEarnings",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"refPercent",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"refTotal",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"refund",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"refundWithPenalty",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"release",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"remaining",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"_buyer",type:"address"}],name:"remainingLimit",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"softCapFilled",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[],name:"softcap",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"",type:"address"}],name:"spendings",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"",type:"address"}],name:"spendingsAfterFee",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"startTime",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"tokenAddress",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[],name:"tokenBalance",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"totalRaised",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"totalRaisedAfterFee",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"totalSold",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"unclaimed",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"unpaidRef",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"useClaim",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[],name:"useClaimTime",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[],name:"useDate",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[],name:"useMinMax",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[],name:"useRate",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[],name:"useReferral",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[],name:"useScHc",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[],name:"vesting",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"withdrawBNB",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"_address",type:"address"}],name:"withdrawCustomToken",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"withdrawPaymentToken",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"_quantity",type:"uint256"}],name:"withdrawTokens",outputs:[],stateMutability:"nonpayable",type:"function"},{stateMutability:"payable",type:"receive"}]},3:{1:[{inputs:[{internalType:"address[]",name:"_addresses",type:"address[]"},{internalType:"uint256[]",name:"_uints",type:"uint256[]"},{internalType:"string[]",name:"_strings",type:"string[]"},{internalType:"bool[]",name:"_bools",type:"bool[]"}],stateMutability:"nonpayable",type:"constructor"},{anonymous:!1,inputs:[{indexed:!1,internalType:"uint256",name:"amount",type:"uint256"}],name:"Withdrawal",type:"event"},{inputs:[],name:"availableNow",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"checkStatus",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"description",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"},{inputs:[],name:"exactType",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"lockQty",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"lockedNow",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"owner",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[],name:"tokenAddress",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[],name:"tokenBalance",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"unlockAll",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[],name:"unlockPercent",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"unlockTime",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"vesting",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"withdraw",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"_address",type:"address"}],name:"withdrawCustomToken",outputs:[],stateMutability:"nonpayable",type:"function"}]}};function S_(e){var t=e%864e5,n=e%36e5,i=e%6e4;return Math.floor(e/864e5)+"d "+Math.floor(t/36e5)+"h "+Math.floor(n/6e4)+"m "+Math.floor(i/1e3)+"s"}$((function(){$('[data-toggle="tooltip"]').tooltip(),async function(){$("#loadmain").fadeIn(1e3),$("#amount").prop("disabled",!0),$(".butns").prop("disabled",!0),R_=await ka(E_,{address:ca,abi:P_[2][1],functionName:"exactType",chainId:net}),(O_=await ka(E_,{address:ca,abi:P_[2][R_],functionName:"currency",chainId:net,enabled:Boolean(R_)}))&&O_!=I_&&(N_=await ka(E_,{address:O_,abi:P_[1][1],functionName:"decimals",chainId:net,enabled:Boolean(O_&&O_!=I_)}));M_=await ka(E_,{address:ca,abi:P_[2][R_],functionName:"tokenAddress",chainId:net}),j_=await ka(E_,{address:M_,abi:P_[1][1],functionName:"decimals",chainId:net,enabled:Boolean(M_)});const e=await ka(E_,{address:ca,abi:P_[2][R_],functionName:"getDescriptions",chainId:net,enabled:Boolean(R_&&M_)});if(e&&e[0]&&""!=e[0]&&null!=e[0].match(/\.(jpeg|jpg|gif|png|svg)$/)){var t=new Image;t.onload=function(){$(".projectlogo").attr("src",e[0])},t.onerror=function(){$(".projectlogo").attr("src","https://bsctokensale.com/images/defaultlogo.png")},t.src=e[0]}else $(".projectlogo").attr("src","https://bsctokensale.com/images/defaultlogo.png");$("#desc").html(e[1]),e&&e[2]&&""!=e[2]&&($("#wwwlink").attr("href",e[2]),$("#www").show());e&&e[3]&&""!=e[3]&&($("#fblink").attr("href",e[3]),$("#fb").show());e&&e[4]&&""!=e[4]&&($("#tglink").attr("href",e[4]),$("#tg").show());e&&e[5]&&""!=e[5]&&($("#twlink").attr("href",e[5]),$("#tw").show());e&&e[6]&&""!=e[6]&&($("#instalink").attr("href",e[6]),$("#insta").show());e&&e[7]&&""!=e[7]&&($("#githublink").attr("href",e[7]),$("#github").show());e&&e[8]&&""!=e[8]&&($("#ytlink").attr("href",e[8]),$("#yt").show());e&&e[9]&&""!=e[9]&&($("#link1link").attr("href",e[9]),$("#link1").show());e&&e[10]&&""!=e[10]&&($("#link2link").attr("href",e[10]),$("#link2").show());Z_=await ka(E_,{address:ca,abi:P_[2][R_],functionName:"useDate",chainId:net,enabled:Boolean(R_)}),Y_=await ka(E_,{address:ca,abi:P_[2][R_],functionName:"startTime",chainId:net,enabled:Boolean(R_&&Z_)}),J_=await ka(E_,{address:ca,abi:P_[2][R_],functionName:"endTime",chainId:net,enabled:Boolean(R_&&Z_)}),V_=await ka(E_,{address:ca,abi:P_[2][R_],functionName:"useScHc",chainId:net,enabled:Boolean(R_)}),await ka(E_,{address:ca,abi:P_[2][R_],functionName:"softcap",chainId:net,enabled:Boolean(R_&&V_)}),G_=await ka(E_,{address:ca,abi:P_[2][R_],functionName:"hardcap",chainId:net,enabled:Boolean(R_&&V_)}),D_=await ka(E_,{address:ca,abi:P_[2][R_],functionName:"useMinMax",chainId:net,enabled:Boolean(R_)}),B_=await ka(E_,{address:ca,abi:P_[2][R_],functionName:"purchaseMin",chainId:net,enabled:Boolean(R_&&D_)}),L_=await ka(E_,{address:ca,abi:P_[2][R_],functionName:"purchaseMax",chainId:net,enabled:Boolean(R_&&D_)}),q_=await ka(E_,{address:ca,abi:P_[2][R_],functionName:"useClaim",chainId:net,enabled:Boolean(R_)}),Q_=await ka(E_,{address:ca,abi:P_[2][R_],functionName:"useClaimTime",chainId:net,enabled:Boolean(R_&&q_)}),X_=await ka(E_,{address:ca,abi:P_[2][R_],functionName:"claimStart",chainId:net,enabled:Boolean(R_&&q_&&Q_)}),H_=await ka(E_,{address:ca,abi:P_[2][R_],functionName:"useReferral",chainId:net,enabled:Boolean(R_)}),K_=await ka(E_,{address:ca,abi:P_[2][R_],functionName:"payRefInTokens",chainId:net,enabled:Boolean(R_&&H_)}),H_&&(wE(),function(){var e=new URLSearchParams(window.location.search);uE=!0===e.has("ref")&&""!==e.get("ref")&&Me(e.get("ref"))?e.get("ref"):I_;console.log("Referrer: ",uE)}());W_=await ka(E_,{address:ca,abi:P_[2][R_],functionName:"allowEmergencyWithdrawal",chainId:net,enabled:Boolean(R_&&q_)}),await pE(),$("#amount").prop("disabled",!1),$("#loadmain").fadeOut(1e3)}()})),$("#copy").click((function(){navigator.clipboard.writeText($("#address").text()).then((()=>{$(this).tooltip("hide").attr("data-original-title","Copied!").tooltip("show"),setTimeout((()=>{$(this).tooltip("hide")}),2e3)})).catch((e=>{console.error("Error copying text: ",e)}))})),$("#copy2").click((function(){navigator.clipboard.writeText($("#address2").text()).then((()=>{$(this).tooltip("hide").attr("data-original-title","Copied!").tooltip("show"),setTimeout((()=>{$(this).tooltip("hide")}),2e3)})).catch((e=>{console.error("Error copying text: ",e)}))})),$("#copy3").click((function(){navigator.clipboard.writeText($("#reflink").text()).then((()=>{$(this).tooltip("hide").attr("data-original-title","Copied!").tooltip("show"),setTimeout((()=>{$(this).tooltip("hide")}),2e3)})).catch((e=>{console.error("Error copying text: ",e)}))}));var R_,O_,N_,M_,j_,U_,D_,B_,L_,z_,F_,W_,H_,Z_,V_,G_,q_,K_,Y_,J_,Q_,X_,eE,tE,nE,iE,rE,aE,oE,sE,lE,cE,uE=I_;const dE=async e=>{if(O_){if(O_==I_)return function(e,t="wei"){return Ar(e,Je[t])}(e);if(N_)return Ar(e,Number(N_))}};async function pE(){if(0==(U_=await ka(E_,{address:ca,abi:P_[2][R_],functionName:"checkStatus",chainId:net,enabled:Boolean(R_)}))?($(".statuses").hide(),$("#cancel").show()):1==U_?($(".statuses").hide(),$("#fail").show()):2==U_?($(".statuses").hide(),$("#success").show()):3==U_?($(".statuses").hide(),$("#finish").show()):4==U_?($(".statuses").hide(),$("#upcoming").show()):5==U_?($(".statuses").hide(),$("#live").show()):($(".statuses").hide(),$("#loading").show()),V_){const e=await ka(E_,{address:ca,abi:P_[2][R_],functionName:"softCapFilled",chainId:net,enabled:Boolean(R_&&V_)});5==U_&&e&&$("#scfilled").show()}if(eE=await ka(E_,{address:ca,abi:P_[2][R_],functionName:"totalRaised",chainId:net,enabled:Boolean(R_)}),$("#raised").html(hE(eE)),tE=await ka(E_,{address:ca,abi:P_[2][R_],functionName:"totalSold",chainId:net,enabled:Boolean(R_)}),Z_&&4==U_)var e=setInterval((function(){var t=1e3*Number(Y_)-Date.now(),n=S_(t);$("#timer").html(n),t<0&&(clearInterval(e),$("#timer").html("Started!"),pE())}),1e3);if(Z_&&5==U_){e=setInterval((function(){var t=1e3*Number(J_)-Date.now(),n=S_(t);$("#timer2").html(n),t<0&&(clearInterval(e),$("#timer2").html("Ended!"),$("#livetime").hide(),pE())}),1e3);$("#livetime").show()}if(V_&&G_>0){var t=Number(G_)/100,n=Number(eE)/t;$("#progress-inner").css("width",n+"%"),$("#progress-outer").show()}if(z_=await ka(E_,{address:ca,abi:P_[2][R_],functionName:"canClaim",chainId:net,enabled:Boolean(R_&&q_)}),F_=await ka(E_,{address:ca,abi:P_[2][R_],functionName:"canRefund",chainId:net,enabled:Boolean(R_&&q_)}),q_&&($(".btns").hide(),F_?($("#refundbtn").show(),$("#claimbtn").hide()):($("#claimbtn").show(),$("#refundbtn").hide(),z_?$("#claimbtn").prop("disabled",!1):$("#claimbtn").prop("disabled",!0))),q_&&Q_&&U_>1&&1e3*Number(X_)>Date.now())e=setInterval((function(){var t=1e3*Number(X_)-Date.now(),n=S_(t);$("#timerclaim").html(" in "+n),t<0&&(clearInterval(e),$("#timerclaim").html(""),pE())}),1e3);W_&&(await ka(E_,{address:ca,abi:P_[2][R_],functionName:"canEmergencyRefund",chainId:net,enabled:Boolean(R_&&q_&&W_)})?($("#refundok").show(),$("#emerrefundbtn").prop("disabled",!1)):($("#refundno").show(),$("#emerrefundbtn").prop("disabled",!0))),await yE(),bE(),async function(){if(Number(U_)>3){var e=await ka(E_,{address:ca,abi:P_[2][R_],functionName:"tokenBalance",chainId:net,enabled:Boolean(R_)});if(V_&&Number(G_)>0&&q_){var t=await ka(E_,{address:ca,abi:P_[2][R_],functionName:"checkQty",args:[G_],chainId:net,enabled:Boolean(R_)}),n=await ka(E_,{address:ca,abi:P_[2][R_],functionName:"unclaimed",chainId:net,enabled:Boolean(R_)}),i=Number(tE)-Number(n),r=Number(t)-Number(i);Number(r)>Number(e)?$("#supply").show():$("#supply").hide()}else Number(e)<=0?$("#supply").show():$("#supply").hide()}}()}const hE=e=>{if(O_){if(O_==I_)return ft(e);if(N_)return et(e,Number(N_))}};async function fE(){if($_&&Me(T_)&&Me(O_)&&O_!=I_){cE=await ka(E_,{address:O_,abi:P_[1][1],functionName:"allowance",args:[T_,ca],chainId:net});var e=$("#amount").val(),t=await dE(e);Number(t)>Number(cE)?($("#buybtn").hide(),$("#approvebtn").show()):($("#approvebtn").hide(),$("#buybtn").show())}else $("#approvebtn").hide(),$("#buybtn").show()}async function mE(){$_&&Me(T_)&&5==Number(U_)&&$("#amount").val()>0?($("#buybtn").prop("disabled",!1),$("#approvebtn").prop("disabled",!1)):($("#buybtn").prop("disabled",!0),$("#approvebtn").prop("disabled",!0)),$_&&Me(T_)&&z_?$("#claimbtn").prop("disabled",!1):$("#claimbtn").prop("disabled",!0)}async function gE(){var e=$("#amount").val(),t=await dE(e),n=await ka(E_,{address:ca,abi:P_[2][R_],functionName:"checkQty",args:[t],chainId:net,enabled:Boolean(R_&&e&&t)});$("#qty").html(et(n,Number(j_)))}function wE(){var e=window.location.href.split("?")[0].split("#")[0];T_?$("#reflink").html(e+"?ref="+T_):$("#reflink").html(e+"?ref=YOUR_WALLET_ADDRESS")}async function yE(){console.log("...updating user data...."),await async function(){T_=await Ea(E_).address,A_=await Ea(E_).chainId,$_=await Ea(E_).isConnected}(),wE(),$_&&Me(T_)?($(".disconnected").hide(),$(".connected").show(),nE=await ka(E_,{address:ca,abi:P_[2][1],functionName:"spendings",args:[T_],chainId:net,enabled:Boolean(R_&&T_&&$_)}),iE=await ka(E_,{address:ca,abi:P_[2][1],functionName:"balances",args:[T_],chainId:net,enabled:Boolean(R_&&T_&&$_)}),rE=await ka(E_,{address:ca,abi:P_[2][R_],functionName:"remainingLimit",args:[T_],chainId:net,enabled:Boolean(R_&&T_&&$_)}),D_&&$("#mymax").html(" (max. "+Number(hE(rE)).toFixed(4)+")"),H_&&(aE=await ka(E_,{address:ca,abi:P_[2][R_],functionName:"refEarnings",args:[T_],chainId:net,enabled:Boolean(R_&&T_&&H_&&$_)}),K_?$("#myref").html(et(aE,Number(j_))):($("#myref").html(hE(aE)),oE=await ka(E_,{address:ca,abi:P_[2][R_],functionName:"refBalances",args:[T_],chainId:net,enabled:Boolean(R_&&T_&&H_&&q_&&$_&&!K_)}),$("#myrefunclaimed").html(hE(oE)))),q_&&(sE=await ka(E_,{address:ca,abi:P_[2][R_],functionName:"claimed",args:[T_],chainId:net,enabled:Boolean(R_&&T_&&q_&&$_)}),$("#myclaimed").html(Number(et(sE,Number(j_))).toFixed(3)),lE=await ka(E_,{address:ca,abi:P_[2][R_],functionName:"availableForClaim",args:[T_],chainId:net,enabled:Boolean(R_&&T_&&q_&&$_)}),$("#myavailable").html(Number(et(lE,Number(j_))).toFixed(3))),null!=O_&&O_!=I_&&(cE=await ka(E_,{address:O_,abi:P_[1][1],functionName:"allowance",args:[T_,ca],chainId:net})),null!=j_&&($("#myinvested").html(Number(hE(nE)).toFixed(3)),$(".mypurchased").html(Number(et(iE,Number(j_))).toFixed(3))),await vE()):($("#wrongnetmain").hide(),$(".connected").hide(),$(".disconnected").show(),$("#myinvested").html("..."),$(".mypurchased").html("..."),$("#myclaimed").html("..."),$("#myref").html("..."),$("#myrefunclaimed").html("..."),$("#myavailable").html("..."),$("#mymax").html(""),cE=0),fE(),mE()}async function vE(){A_!==net?$("#wrongnetmain").show():$("#wrongnetmain").hide()}async function bE(){var e=$("#amount").val();if(e<0&&(e=0),D_){var t=await hE(B_),n=await hE(L_);e<Number(t)&&(e=Number(t)),Number(n)>0&&e>Number(n)&&(e=Number(n))}if(1==$_&&Me(T_)&&null!=rE){var i=await hE(rE);e>Number(i)&&(e=Number(i))}$("#amount").val(e),gE(),fE(),mE()}$("#approvebtn").click((async function(){A_!==net&&($("#wrongnetbuy").fadeIn(1e3).fadeOut(1e3),await Sa(E_,{chainId:net}));var e=$("#amount").val(),t=await dE(e);try{const{request:e}=await Pa(E_,{address:O_,abi:P_[1][0],functionName:"approve",args:[ca,t]}),n=await Na(E_,e);await Oa(E_,{hash:n});fE()}catch(n){console.log(n.message)}})),$("#buybtn").click((async function(){A_!==net&&($("#wrongnetbuy").fadeIn(1e3).fadeOut(1e3),await Sa(E_,{chainId:net}));var e=$("#amount").val(),t=await dE(e);try{const{request:n}=await Pa(E_,{address:ca,abi:P_[2][R_],functionName:"buyToken",args:[t,uE],value:O_==I_&&Number(e)>0?t:0,chainId:net}),i=await Na(E_,n);await Oa(E_,{hash:i});pE(),yE()}catch(n){console.log(n.message)}})),$("#claimbtn").click((async function(){A_!==net&&($("#wrongnetclaim").fadeIn(1e3).fadeOut(1e3),await Sa(E_,{chainId:net}));try{const{request:e}=await Pa(E_,{address:ca,abi:P_[2][R_],functionName:"claim",chainId:net}),t=await Na(E_,e);await Oa(E_,{hash:t});yE()}catch(e){console.log(e.message)}})),$("#claimrefbtn").click((async function(){A_!==net&&($("#wrongnetclaimref").fadeIn(1e3).fadeOut(1e3),await Sa(E_,{chainId:net}));try{const{request:e}=await Pa(E_,{address:ca,abi:P_[2][R_],functionName:"claimRef",chainId:net}),t=await Na(E_,e);await Oa(E_,{hash:t});yE()}catch(e){console.log(e.message)}})),$("#refundbtn").click((async function(){A_!==net&&($("#wrongnetclaim").fadeIn(1e3).fadeOut(1e3),await Sa(E_,{chainId:net}));try{const{request:e}=await Pa(E_,{address:ca,abi:P_[2][R_],functionName:"refund",chainId:net}),t=await Na(E_,e);await Oa(E_,{hash:t});pE(),yE()}catch(e){console.log(e.message)}})),$("#emerrefundbtn").click((async function(){A_!==net&&($("#wrongneterefund").fadeIn(1e3).fadeOut(1e3),await Sa(E_,{chainId:net}));try{const{request:e}=await Pa(E_,{address:ca,abi:P_[2][R_],functionName:"refundWithPenalty",chainId:net}),t=await Na(E_,e);await Oa(E_,{hash:t});pE(),yE()}catch(e){console.log(e.message)}})),$("#switch").click((async function(){await Sa(E_,{chainId:net}),vE()})),$("#amount").on("change",bE),$("#amount").on("keyup input",gE),Ra(E_,{onChange(e){e.isConnected?(console.log(".....connected....."),yE()):(console.log(".....disconnected....."),yE())}});export{fo as A,c as B,ns as C,p_ as D,No as E,kt as H,ie as I,Wo as M,jo as N,Eo as O,rs as R,bo as S,r as _,ao as a,Et as b,Ti as c,oi as d,te as e,Le as f,l as g,v as h,Me as i,o as j,s as k,l_ as l,so as m,jm as n,Mg as o,io as p,_l as q,oo as r,ro as s,Qo as t,zo as u,Lg as v,Ip as w,yg as x,a as y,Hr as z};
