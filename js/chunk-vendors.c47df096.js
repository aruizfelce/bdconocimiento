(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-vendors"],{"00b4":function(t,e,n){"use strict";n("ac1f");var i=n("23e7"),r=n("da84"),s=n("c65b"),o=n("e330"),a=n("1626"),c=n("861d"),u=function(){var t=!1,e=/[ac]/;return e.exec=function(){return t=!0,/./.exec.apply(this,arguments)},!0===e.test("abc")&&t}(),l=r.Error,h=o(/./.test);i({target:"RegExp",proto:!0,forced:!u},{test:function(t){var e=this.exec;if(!a(e))return h(this,t);var n=s(e,this,t);if(null!==n&&!c(n))throw new l("RegExp exec method returned something other than an Object or null");return!!n}})},"00ee":function(t,e,n){var i=n("b622"),r=i("toStringTag"),s={};s[r]="z",t.exports="[object z]"===String(s)},"01b4":function(t,e){var n=function(){this.head=null,this.tail=null};n.prototype={add:function(t){var e={item:t,next:null};this.head?this.tail.next=e:this.head=e,this.tail=e},get:function(){var t=this.head;if(t)return this.head=t.next,this.tail===t&&(this.tail=null),t.item}},t.exports=n},"0366":function(t,e,n){var i=n("e330"),r=n("59ed"),s=n("40d5"),o=i(i.bind);t.exports=function(t,e){return r(t),void 0===e?t:s?o(t,e):function(){return t.apply(e,arguments)}}},"0481":function(t,e,n){"use strict";var i=n("23e7"),r=n("a2bf"),s=n("7b0b"),o=n("07fa"),a=n("5926"),c=n("65f0");i({target:"Array",proto:!0},{flat:function(){var t=arguments.length?arguments[0]:void 0,e=s(this),n=o(e),i=c(e,0);return i.length=r(i,e,e,n,0,void 0===t?1:a(t)),i}})},"04d1":function(t,e,n){var i=n("342f"),r=i.match(/firefox\/(\d+)/i);t.exports=!!r&&+r[1]},"0538":function(t,e,n){"use strict";var i=n("da84"),r=n("e330"),s=n("59ed"),o=n("861d"),a=n("1a2d"),c=n("f36a"),u=n("40d5"),l=i.Function,h=r([].concat),d=r([].join),f={},p=function(t,e,n){if(!a(f,e)){for(var i=[],r=0;r<e;r++)i[r]="a["+r+"]";f[e]=l("C,a","return new C("+d(i,",")+")")}return f[e](t,n)};t.exports=u?l.bind:function(t){var e=s(this),n=e.prototype,i=c(arguments,1),r=function(){var n=h(i,c(arguments));return this instanceof r?p(e,n.length,n):e.apply(t,n)};return o(n)&&(r.prototype=n),r}},"057f":function(t,e,n){var i=n("c6b6"),r=n("fc6a"),s=n("241c").f,o=n("4dae"),a="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],c=function(t){try{return s(t)}catch(e){return o(a)}};t.exports.f=function(t){return a&&"Window"==i(t)?c(t):s(r(t))}},"06c5":function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));n("fb6a"),n("d3b7"),n("b0c0"),n("a630"),n("3ca3"),n("ac1f"),n("00b4");var i=n("6b75");function r(t,e){if(t){if("string"===typeof t)return Object(i["a"])(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?Object(i["a"])(t,e):void 0}}},"06cf":function(t,e,n){var i=n("83ab"),r=n("c65b"),s=n("d1e7"),o=n("5c6c"),a=n("fc6a"),c=n("a04b"),u=n("1a2d"),l=n("0cfb"),h=Object.getOwnPropertyDescriptor;e.f=i?h:function(t,e){if(t=a(t),e=c(e),l)try{return h(t,e)}catch(n){}if(u(t,e))return o(!r(s.f,t,e),t[e])}},"0789":function(t,e,n){"use strict";n.d(e,"c",(function(){return l})),n.d(e,"d",(function(){return h})),n.d(e,"a",(function(){return d})),n.d(e,"b",(function(){return f}));n("99af");var i=n("d9f7");function r(){for(var t,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],n=arguments.length,i=new Array(n>1?n-1:0),r=1;r<n;r++)i[r-1]=arguments[r];return(t=Array()).concat.apply(t,[e].concat(i))}function s(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"top center 0",n=arguments.length>2?arguments[2]:void 0;return{name:t,functional:!0,props:{group:{type:Boolean,default:!1},hideOnLeave:{type:Boolean,default:!1},leaveAbsolute:{type:Boolean,default:!1},mode:{type:String,default:n},origin:{type:String,default:e}},render:function(e,n){var s="transition".concat(n.props.group?"-group":""),o={props:{name:t,mode:n.props.mode},on:{beforeEnter:function(t){t.style.transformOrigin=n.props.origin,t.style.webkitTransformOrigin=n.props.origin}}};return n.props.leaveAbsolute&&(o.on.leave=r(o.on.leave,(function(t){var e=t.offsetTop,n=t.offsetLeft,i=t.offsetWidth,r=t.offsetHeight;t._transitionInitialStyles={position:t.style.position,top:t.style.top,left:t.style.left,width:t.style.width,height:t.style.height},t.style.position="absolute",t.style.top=e+"px",t.style.left=n+"px",t.style.width=i+"px",t.style.height=r+"px"})),o.on.afterLeave=r(o.on.afterLeave,(function(t){if(t&&t._transitionInitialStyles){var e=t._transitionInitialStyles,n=e.position,i=e.top,r=e.left,s=e.width,o=e.height;delete t._transitionInitialStyles,t.style.position=n||"",t.style.top=i||"",t.style.left=r||"",t.style.width=s||"",t.style.height=o||""}}))),n.props.hideOnLeave&&(o.on.leave=r(o.on.leave,(function(t){t.style.setProperty("display","none","important")}))),e(s,Object(i["a"])(n.data,o),n.children)}}}function o(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"in-out";return{name:t,functional:!0,props:{mode:{type:String,default:n}},render:function(n,r){return n("transition",Object(i["a"])(r.data,{props:{name:t},on:e}),r.children)}}}var a=n("ade3"),c=n("80d2"),u=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=e?"width":"height",i="offset".concat(Object(c["E"])(n));return{beforeEnter:function(t){t._parent=t.parentNode,t._initialStyle=Object(a["a"])({transition:t.style.transition,overflow:t.style.overflow},n,t.style[n])},enter:function(e){var r=e._initialStyle;e.style.setProperty("transition","none","important"),e.style.overflow="hidden";var s="".concat(e[i],"px");e.style[n]="0",e.offsetHeight,e.style.transition=r.transition,t&&e._parent&&e._parent.classList.add(t),requestAnimationFrame((function(){e.style[n]=s}))},afterEnter:s,enterCancelled:s,leave:function(t){t._initialStyle=Object(a["a"])({transition:"",overflow:t.style.overflow},n,t.style[n]),t.style.overflow="hidden",t.style[n]="".concat(t[i],"px"),t.offsetHeight,requestAnimationFrame((function(){return t.style[n]="0"}))},afterLeave:r,leaveCancelled:r};function r(e){t&&e._parent&&e._parent.classList.remove(t),s(e)}function s(t){var e=t._initialStyle[n];t.style.overflow=t._initialStyle.overflow,null!=e&&(t.style[n]=e),delete t._initialStyle}},l=(s("carousel-transition"),s("carousel-reverse-transition"),s("tab-transition"),s("tab-reverse-transition"),s("menu-transition"),s("fab-transition","center center","out-in"),s("dialog-transition"),s("dialog-bottom-transition"),s("dialog-top-transition"),s("fade-transition")),h=(s("scale-transition"),s("scroll-x-transition"),s("scroll-x-reverse-transition"),s("scroll-y-transition"),s("scroll-y-reverse-transition"),s("slide-x-transition")),d=(s("slide-x-reverse-transition"),s("slide-y-transition"),s("slide-y-reverse-transition"),o("expand-transition",u())),f=o("expand-x-transition",u("",!0))},"07ac":function(t,e,n){var i=n("23e7"),r=n("6f53").values;i({target:"Object",stat:!0},{values:function(t){return r(t)}})},"07fa":function(t,e,n){var i=n("50c4");t.exports=function(t){return i(t.length)}},"0829":function(t,e,n){"use strict";(function(t){n.d(e,"a",(function(){return Nu})),n.d(e,"b",(function(){return Ac})),n.d(e,"c",(function(){return mc})),n.d(e,"d",(function(){return rc})),n.d(e,"e",(function(){return uu})),n.d(e,"f",(function(){return Cc})),n.d(e,"g",(function(){return I})),n.d(e,"h",(function(){return Rc})),n.d(e,"i",(function(){return lu})),n.d(e,"j",(function(){return hu})),n.d(e,"k",(function(){return F})),n.d(e,"l",(function(){return Mu})),n.d(e,"m",(function(){return Wa})),n.d(e,"n",(function(){return at})),n.d(e,"o",(function(){return G})),n.d(e,"p",(function(){return Za})),n.d(e,"q",(function(){return w})),n.d(e,"r",(function(){return Y})),n.d(e,"s",(function(){return g})),n.d(e,"t",(function(){return Ya})),n.d(e,"u",(function(){return Yu})),n.d(e,"v",(function(){return sl})),n.d(e,"w",(function(){return rl})),n.d(e,"x",(function(){return Oc})),n.d(e,"y",(function(){return ac})),n.d(e,"z",(function(){return cc})),n.d(e,"A",(function(){return ic})),n.d(e,"B",(function(){return Ku})),n.d(e,"C",(function(){return nl})),n.d(e,"D",(function(){return kc})),n.d(e,"E",(function(){return uc})),n.d(e,"F",(function(){return bc})),n.d(e,"G",(function(){return wc})),n.d(e,"H",(function(){return Sc})),n.d(e,"I",(function(){return Cu})),n.d(e,"J",(function(){return xu})),n.d(e,"K",(function(){return vc})),n.d(e,"L",(function(){return Ju})),n.d(e,"M",(function(){return Fu})),n.d(e,"N",(function(){return Vu})),n.d(e,"O",(function(){return Uu})),n.d(e,"P",(function(){return qu})),n.d(e,"Q",(function(){return zu})),n.d(e,"R",(function(){return Hu})),n.d(e,"S",(function(){return ol})),n.d(e,"T",(function(){return Ou})),n.d(e,"U",(function(){return Iu})),n.d(e,"V",(function(){return Tc})),n.d(e,"W",(function(){return Ec})),n.d(e,"X",(function(){return Xu})),n.d(e,"Y",(function(){return Qu})),n.d(e,"Z",(function(){return wu})),n.d(e,"ab",(function(){return gu})),n.d(e,"bb",(function(){return hc})),n.d(e,"cb",(function(){return lc})),n.d(e,"db",(function(){return el})),n.d(e,"eb",(function(){return il})),n.d(e,"fb",(function(){return Wu})),n.d(e,"gb",(function(){return f})),n.d(e,"hb",(function(){return fu})),n.d(e,"ib",(function(){return Tu})),n.d(e,"jb",(function(){return ku})),n.d(e,"kb",(function(){return Gu})),n.d(e,"lb",(function(){return Ic})),n.d(e,"mb",(function(){return yu}));var i=n("589b"),r=n("22e5"),s=n("e691"),o=n("1fd5"),a=n("8f6b");const c="@firebase/firestore";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class u{constructor(t){this.uid=t}isAuthenticated(){return null!=this.uid}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}u.UNAUTHENTICATED=new u(null),u.GOOGLE_CREDENTIALS=new u("google-credentials-uid"),u.FIRST_PARTY=new u("first-party-uid"),u.MOCK_USER=new u("mock-user");
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
let l="9.6.5";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const h=new s["b"]("@firebase/firestore");function d(){return h.logLevel}function f(t){h.setLogLevel(t)}function p(t,...e){if(h.logLevel<=s["a"].DEBUG){const n=e.map(v);h.debug(`Firestore (${l}): ${t}`,...n)}}function m(t,...e){if(h.logLevel<=s["a"].ERROR){const n=e.map(v);h.error(`Firestore (${l}): ${t}`,...n)}}function g(t,...e){if(h.logLevel<=s["a"].WARN){const n=e.map(v);h.warn(`Firestore (${l}): ${t}`,...n)}}function v(t){if("string"==typeof t)return t;try{return e=t,JSON.stringify(e)}catch(e){return t}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function y(t="Unexpected state"){const e=`FIRESTORE (${l}) INTERNAL ASSERTION FAILED: `+t;throw m(e),new Error(e)}function b(t,e){t||y()}function w(t,e){t||y()}function _(t,e){return t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const O={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class I extends o["c"]{constructor(t,e){super(t,e),this.code=t,this.message=e,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class S{constructor(){this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class k{constructor(t,e){this.user=e,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization","Bearer "+t)}}class T{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,e){t.enqueueRetryable(()=>e(u.UNAUTHENTICATED))}shutdown(){}}class E{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,e){this.changeListener=e,t.enqueueRetryable(()=>e(this.token.user))}shutdown(){this.changeListener=null}}class x{constructor(t){this.t=t,this.currentUser=u.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,e){let n=this.i;const i=t=>this.i!==n?(n=this.i,e(t)):Promise.resolve();let r=new S;this.o=()=>{this.i++,this.currentUser=this.u(),r.resolve(),r=new S,t.enqueueRetryable(()=>i(this.currentUser))};const s=()=>{const e=r;t.enqueueRetryable(async()=>{await e.promise,await i(this.currentUser)})},o=t=>{p("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=t,this.auth.addAuthTokenListener(this.o),s()};this.t.onInit(t=>o(t)),setTimeout(()=>{if(!this.auth){const t=this.t.getImmediate({optional:!0});t?o(t):(p("FirebaseAuthCredentialsProvider","Auth not yet detected"),r.resolve(),r=new S)}},0),s()}getToken(){const t=this.i,e=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(e).then(e=>this.i!==t?(p("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):e?(b("string"==typeof e.accessToken),new k(e.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const t=this.auth&&this.auth.getUid();return b(null===t||"string"==typeof t),new u(t)}}class C{constructor(t,e,n){this.type="FirstParty",this.user=u.FIRST_PARTY,this.headers=new Map,this.headers.set("X-Goog-AuthUser",e);const i=t.auth.getAuthHeaderValueForFirstParty([]);i&&this.headers.set("Authorization",i),n&&this.headers.set("X-Goog-Iam-Authorization-Token",n)}}class A{constructor(t,e,n){this.h=t,this.l=e,this.m=n}getToken(){return Promise.resolve(new C(this.h,this.l,this.m))}start(t,e){t.enqueueRetryable(()=>e(u.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class j{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class R{constructor(t){this.g=t,this.forceRefresh=!1,this.appCheck=null}start(t,e){this.o=n=>{t.enqueueRetryable(()=>(t=>(null!=t.error&&p("FirebaseAppCheckTokenProvider","Error getting App Check token; using placeholder token instead. Error: "+t.error.message),e(t.token)))(n))};const n=t=>{p("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=t,this.appCheck.addTokenListener(this.o)};this.g.onInit(t=>n(t)),setTimeout(()=>{if(!this.appCheck){const t=this.g.getImmediate({optional:!0});t?n(t):p("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(t=>t?(b("string"==typeof t.token),new j(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class L{constructor(t,e){this.previousValue=t,e&&(e.sequenceNumberHandler=t=>this.p(t),this.T=t=>e.writeSequenceNumber(t))}p(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.T&&this.T(t),t}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function N(t){const e="undefined"!=typeof self&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&"function"==typeof e.getRandomValues)e.getRandomValues(n);else for(let i=0;i<t;i++)n[i]=Math.floor(256*Math.random());return n}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */L.I=-1;class D{static A(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=Math.floor(256/t.length)*t.length;let n="";for(;n.length<20;){const i=N(40);for(let r=0;r<i.length;++r)n.length<20&&i[r]<e&&(n+=t.charAt(i[r]%t.length))}return n}}function P(t,e){return t<e?-1:t>e?1:0}function M(t,e,n){return t.length===e.length&&t.every((t,i)=>n(t,e[i]))}function $(t){return t+"\0"}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class F{constructor(t,e){if(this.seconds=t,this.nanoseconds=e,e<0)throw new I(O.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(e>=1e9)throw new I(O.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(t<-62135596800)throw new I(O.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new I(O.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}static now(){return F.fromMillis(Date.now())}static fromDate(t){return F.fromMillis(t.getTime())}static fromMillis(t){const e=Math.floor(t/1e3),n=Math.floor(1e6*(t-1e3*e));return new F(e,n)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(t){return this.seconds===t.seconds?P(this.nanoseconds,t.nanoseconds):P(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds- -62135596800;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class B{constructor(t){this.timestamp=t}static fromTimestamp(t){return new B(t)}static min(){return new B(new F(0,0))}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function V(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function U(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function q(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class z{constructor(t,e,n){void 0===e?e=0:e>t.length&&y(),void 0===n?n=t.length-e:n>t.length-e&&y(),this.segments=t,this.offset=e,this.len=n}get length(){return this.len}isEqual(t){return 0===z.comparator(this,t)}child(t){const e=this.segments.slice(this.offset,this.limit());return t instanceof z?t.forEach(t=>{e.push(t)}):e.push(t),this.construct(e)}limit(){return this.offset+this.length}popFirst(t){return t=void 0===t?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return 0===this.length}isPrefixOf(t){if(t.length<this.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}forEach(t){for(let e=this.offset,n=this.limit();e<n;e++)t(this.segments[e])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,e){const n=Math.min(t.length,e.length);for(let i=0;i<n;i++){const n=t.get(i),r=e.get(i);if(n<r)return-1;if(n>r)return 1}return t.length<e.length?-1:t.length>e.length?1:0}}class H extends z{construct(t,e,n){return new H(t,e,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...t){const e=[];for(const n of t){if(n.indexOf("//")>=0)throw new I(O.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);e.push(...n.split("/").filter(t=>t.length>0))}return new H(e)}static emptyPath(){return new H([])}}const W=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class G extends z{construct(t,e,n){return new G(t,e,n)}static isValidIdentifier(t){return W.test(t)}canonicalString(){return this.toArray().map(t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),G.isValidIdentifier(t)||(t="`"+t+"`"),t)).join(".")}toString(){return this.canonicalString()}isKeyField(){return 1===this.length&&"__name__"===this.get(0)}static keyField(){return new G(["__name__"])}static fromServerFormat(t){const e=[];let n="",i=0;const r=()=>{if(0===n.length)throw new I(O.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);e.push(n),n=""};let s=!1;for(;i<t.length;){const e=t[i];if("\\"===e){if(i+1===t.length)throw new I(O.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const e=t[i+1];if("\\"!==e&&"."!==e&&"`"!==e)throw new I(O.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);n+=e,i+=2}else"`"===e?(s=!s,i++):"."!==e||s?(n+=e,i++):(r(),i++)}if(r(),s)throw new I(O.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new G(e)}static emptyPath(){return new G([])}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class K{constructor(t){this.fields=t,t.sort(G.comparator)}covers(t){for(const e of this.fields)if(e.isPrefixOf(t))return!0;return!1}isEqual(t){return M(this.fields,t.fields,(t,e)=>t.isEqual(e))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Y(){return"undefined"!=typeof atob}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class X{constructor(t){this.binaryString=t}static fromBase64String(t){const e=atob(t);return new X(e)}static fromUint8Array(t){const e=function(t){let e="";for(let n=0;n<t.length;++n)e+=String.fromCharCode(t[n]);return e}(t);return new X(e)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return t=this.binaryString,btoa(t);var t}toUint8Array(){return function(t){const e=new Uint8Array(t.length);for(let n=0;n<t.length;n++)e[n]=t.charCodeAt(n);return e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return P(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}X.EMPTY_BYTE_STRING=new X("");const Q=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function J(t){if(b(!!t),"string"==typeof t){let e=0;const n=Q.exec(t);if(b(!!n),n[1]){let t=n[1];t=(t+"000000000").substr(0,9),e=Number(t)}const i=new Date(t);return{seconds:Math.floor(i.getTime()/1e3),nanos:e}}return{seconds:Z(t.seconds),nanos:Z(t.nanos)}}function Z(t){return"number"==typeof t?t:"string"==typeof t?Number(t):0}function tt(t){return"string"==typeof t?X.fromBase64String(t):X.fromUint8Array(t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function et(t){var e,n;return"server_timestamp"===(null===(n=((null===(e=null==t?void 0:t.mapValue)||void 0===e?void 0:e.fields)||{}).__type__)||void 0===n?void 0:n.stringValue)}function nt(t){const e=t.mapValue.fields.__previous_value__;return et(e)?nt(e):e}function it(t){const e=J(t.mapValue.fields.__local_write_time__.timestampValue);return new F(e.seconds,e.nanos)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rt(t){return null==t}function st(t){return 0===t&&1/t==-1/0}function ot(t){return"number"==typeof t&&Number.isInteger(t)&&!st(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class at{constructor(t){this.path=t}static fromPath(t){return new at(H.fromString(t))}static fromName(t){return new at(H.fromString(t).popFirst(5))}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}isEqual(t){return null!==t&&0===H.comparator(this.path,t.path)}toString(){return this.path.toString()}static comparator(t,e){return H.comparator(t.path,e.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new at(new H(t.slice()))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ct(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?et(t)?4:10:y()}function ut(t,e){if(t===e)return!0;const n=ct(t);if(n!==ct(e))return!1;switch(n){case 0:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return it(t).isEqual(it(e));case 3:return function(t,e){if("string"==typeof t.timestampValue&&"string"==typeof e.timestampValue&&t.timestampValue.length===e.timestampValue.length)return t.timestampValue===e.timestampValue;const n=J(t.timestampValue),i=J(e.timestampValue);return n.seconds===i.seconds&&n.nanos===i.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(t,e){return tt(t.bytesValue).isEqual(tt(e.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(t,e){return Z(t.geoPointValue.latitude)===Z(e.geoPointValue.latitude)&&Z(t.geoPointValue.longitude)===Z(e.geoPointValue.longitude)}(t,e);case 2:return function(t,e){if("integerValue"in t&&"integerValue"in e)return Z(t.integerValue)===Z(e.integerValue);if("doubleValue"in t&&"doubleValue"in e){const n=Z(t.doubleValue),i=Z(e.doubleValue);return n===i?st(n)===st(i):isNaN(n)&&isNaN(i)}return!1}(t,e);case 9:return M(t.arrayValue.values||[],e.arrayValue.values||[],ut);case 10:return function(t,e){const n=t.mapValue.fields||{},i=e.mapValue.fields||{};if(V(n)!==V(i))return!1;for(const r in n)if(n.hasOwnProperty(r)&&(void 0===i[r]||!ut(n[r],i[r])))return!1;return!0}(t,e);default:return y()}}function lt(t,e){return void 0!==(t.values||[]).find(t=>ut(t,e))}function ht(t,e){if(t===e)return 0;const n=ct(t),i=ct(e);if(n!==i)return P(n,i);switch(n){case 0:return 0;case 1:return P(t.booleanValue,e.booleanValue);case 2:return function(t,e){const n=Z(t.integerValue||t.doubleValue),i=Z(e.integerValue||e.doubleValue);return n<i?-1:n>i?1:n===i?0:isNaN(n)?isNaN(i)?0:-1:1}(t,e);case 3:return dt(t.timestampValue,e.timestampValue);case 4:return dt(it(t),it(e));case 5:return P(t.stringValue,e.stringValue);case 6:return function(t,e){const n=tt(t),i=tt(e);return n.compareTo(i)}(t.bytesValue,e.bytesValue);case 7:return function(t,e){const n=t.split("/"),i=e.split("/");for(let r=0;r<n.length&&r<i.length;r++){const t=P(n[r],i[r]);if(0!==t)return t}return P(n.length,i.length)}(t.referenceValue,e.referenceValue);case 8:return function(t,e){const n=P(Z(t.latitude),Z(e.latitude));return 0!==n?n:P(Z(t.longitude),Z(e.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(t,e){const n=t.values||[],i=e.values||[];for(let r=0;r<n.length&&r<i.length;++r){const t=ht(n[r],i[r]);if(t)return t}return P(n.length,i.length)}(t.arrayValue,e.arrayValue);case 10:return function(t,e){const n=t.fields||{},i=Object.keys(n),r=e.fields||{},s=Object.keys(r);i.sort(),s.sort();for(let o=0;o<i.length&&o<s.length;++o){const t=P(i[o],s[o]);if(0!==t)return t;const e=ht(n[i[o]],r[s[o]]);if(0!==e)return e}return P(i.length,s.length)}(t.mapValue,e.mapValue);default:throw y()}}function dt(t,e){if("string"==typeof t&&"string"==typeof e&&t.length===e.length)return P(t,e);const n=J(t),i=J(e),r=P(n.seconds,i.seconds);return 0!==r?r:P(n.nanos,i.nanos)}function ft(t){return pt(t)}function pt(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(t){const e=J(t);return`time(${e.seconds},${e.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?tt(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,at.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(t){let e="[",n=!0;for(const i of t.values||[])n?n=!1:e+=",",e+=pt(i);return e+"]"}(t.arrayValue):"mapValue"in t?function(t){const e=Object.keys(t.fields||{}).sort();let n="{",i=!0;for(const r of e)i?i=!1:n+=",",n+=`${r}:${pt(t.fields[r])}`;return n+"}"}(t.mapValue):y();var e,n}function mt(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function gt(t){return!!t&&"integerValue"in t}function vt(t){return!!t&&"arrayValue"in t}function yt(t){return!!t&&"nullValue"in t}function bt(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function wt(t){return!!t&&"mapValue"in t}function _t(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&"object"==typeof t.timestampValue)return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return U(t.mapValue.fields,(t,n)=>e.mapValue.fields[t]=_t(n)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=_t(t.arrayValue.values[n]);return e}return Object.assign({},t)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ot{constructor(t){this.value=t}static empty(){return new Ot({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let e=this.value;for(let n=0;n<t.length-1;++n)if(e=(e.mapValue.fields||{})[t.get(n)],!wt(e))return null;return e=(e.mapValue.fields||{})[t.lastSegment()],e||null}}set(t,e){this.getFieldsMap(t.popLast())[t.lastSegment()]=_t(e)}setAll(t){let e=G.emptyPath(),n={},i=[];t.forEach((t,r)=>{if(!e.isImmediateParentOf(r)){const t=this.getFieldsMap(e);this.applyChanges(t,n,i),n={},i=[],e=r.popLast()}t?n[r.lastSegment()]=_t(t):i.push(r.lastSegment())});const r=this.getFieldsMap(e);this.applyChanges(r,n,i)}delete(t){const e=this.field(t.popLast());wt(e)&&e.mapValue.fields&&delete e.mapValue.fields[t.lastSegment()]}isEqual(t){return ut(this.value,t.value)}getFieldsMap(t){let e=this.value;e.mapValue.fields||(e.mapValue={fields:{}});for(let n=0;n<t.length;++n){let i=e.mapValue.fields[t.get(n)];wt(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},e.mapValue.fields[t.get(n)]=i),e=i}return e.mapValue.fields}applyChanges(t,e,n){U(e,(e,n)=>t[e]=n);for(const i of n)delete t[i]}clone(){return new Ot(_t(this.value))}}function It(t){const e=[];return U(t.fields,(t,n)=>{const i=new G([t]);if(wt(n)){const t=It(n.mapValue).fields;if(0===t.length)e.push(i);else for(const n of t)e.push(i.child(n))}else e.push(i)}),new K(e)
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}class St{constructor(t,e,n,i,r){this.key=t,this.documentType=e,this.version=n,this.data=i,this.documentState=r}static newInvalidDocument(t){return new St(t,0,B.min(),Ot.empty(),0)}static newFoundDocument(t,e,n){return new St(t,1,e,n,0)}static newNoDocument(t,e){return new St(t,2,e,Ot.empty(),0)}static newUnknownDocument(t,e){return new St(t,3,e,Ot.empty(),2)}convertToFoundDocument(t,e){return this.version=t,this.documentType=1,this.data=e,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=Ot.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=Ot.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this}get hasLocalMutations(){return 1===this.documentState}get hasCommittedMutations(){return 2===this.documentState}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return 0!==this.documentType}isFoundDocument(){return 1===this.documentType}isNoDocument(){return 2===this.documentType}isUnknownDocument(){return 3===this.documentType}isEqual(t){return t instanceof St&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new St(this.key,this.documentType,this.version,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kt{constructor(t,e=null,n=[],i=[],r=null,s=null,o=null){this.path=t,this.collectionGroup=e,this.orderBy=n,this.filters=i,this.limit=r,this.startAt=s,this.endAt=o,this.R=null}}function Tt(t,e=null,n=[],i=[],r=null,s=null,o=null){return new kt(t,e,n,i,r,s,o)}function Et(t){const e=_(t);if(null===e.R){let t=e.path.canonicalString();null!==e.collectionGroup&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(t=>Rt(t)).join(","),t+="|ob:",t+=e.orderBy.map(t=>function(t){return t.field.canonicalString()+t.dir}(t)).join(","),rt(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=Ut(e.startAt)),e.endAt&&(t+="|ub:",t+=Ut(e.endAt)),e.R=t}return e.R}function xt(t){let e=t.path.canonicalString();return null!==t.collectionGroup&&(e+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(e+=`, filters: [${t.filters.map(t=>{return`${(e=t).field.canonicalString()} ${e.op} ${ft(e.value)}`;var e}).join(", ")}]`),rt(t.limit)||(e+=", limit: "+t.limit),t.orderBy.length>0&&(e+=`, orderBy: [${t.orderBy.map(t=>function(t){return`${t.field.canonicalString()} (${t.dir})`}(t)).join(", ")}]`),t.startAt&&(e+=", startAt: "+Ut(t.startAt)),t.endAt&&(e+=", endAt: "+Ut(t.endAt)),`Target(${e})`}function Ct(t,e){if(t.limit!==e.limit)return!1;if(t.orderBy.length!==e.orderBy.length)return!1;for(let r=0;r<t.orderBy.length;r++)if(!zt(t.orderBy[r],e.orderBy[r]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let r=0;r<t.filters.length;r++)if(n=t.filters[r],i=e.filters[r],n.op!==i.op||!n.field.isEqual(i.field)||!ut(n.value,i.value))return!1;var n,i;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Wt(t.startAt,e.startAt)&&Wt(t.endAt,e.endAt)}function At(t){return at.isDocumentKey(t.path)&&null===t.collectionGroup&&0===t.filters.length}class jt extends class{}{constructor(t,e,n){super(),this.field=t,this.op=e,this.value=n}static create(t,e,n){return t.isKeyField()?"in"===e||"not-in"===e?this.P(t,e,n):new Lt(t,e,n):"array-contains"===e?new Mt(t,n):"in"===e?new $t(t,n):"not-in"===e?new Ft(t,n):"array-contains-any"===e?new Bt(t,n):new jt(t,e,n)}static P(t,e,n){return"in"===e?new Nt(t,n):new Dt(t,n)}matches(t){const e=t.data.field(this.field);return"!="===this.op?null!==e&&this.v(ht(e,this.value)):null!==e&&ct(this.value)===ct(e)&&this.v(ht(e,this.value))}v(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return 0===t;case"!=":return 0!==t;case">":return t>0;case">=":return t>=0;default:return y()}}V(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}}function Rt(t){return t.field.canonicalString()+t.op.toString()+ft(t.value)}class Lt extends jt{constructor(t,e,n){super(t,e,n),this.key=at.fromName(n.referenceValue)}matches(t){const e=at.comparator(t.key,this.key);return this.v(e)}}class Nt extends jt{constructor(t,e){super(t,"in",e),this.keys=Pt("in",e)}matches(t){return this.keys.some(e=>e.isEqual(t.key))}}class Dt extends jt{constructor(t,e){super(t,"not-in",e),this.keys=Pt("not-in",e)}matches(t){return!this.keys.some(e=>e.isEqual(t.key))}}function Pt(t,e){var n;return((null===(n=e.arrayValue)||void 0===n?void 0:n.values)||[]).map(t=>at.fromName(t.referenceValue))}class Mt extends jt{constructor(t,e){super(t,"array-contains",e)}matches(t){const e=t.data.field(this.field);return vt(e)&&lt(e.arrayValue,this.value)}}class $t extends jt{constructor(t,e){super(t,"in",e)}matches(t){const e=t.data.field(this.field);return null!==e&&lt(this.value.arrayValue,e)}}class Ft extends jt{constructor(t,e){super(t,"not-in",e)}matches(t){if(lt(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const e=t.data.field(this.field);return null!==e&&!lt(this.value.arrayValue,e)}}class Bt extends jt{constructor(t,e){super(t,"array-contains-any",e)}matches(t){const e=t.data.field(this.field);return!(!vt(e)||!e.arrayValue.values)&&e.arrayValue.values.some(t=>lt(this.value.arrayValue,t))}}class Vt{constructor(t,e){this.position=t,this.before=e}}function Ut(t){return`${t.before?"b":"a"}:${t.position.map(t=>ft(t)).join(",")}`}class qt{constructor(t,e="asc"){this.field=t,this.dir=e}}function zt(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}function Ht(t,e,n){let i=0;for(let r=0;r<t.position.length;r++){const s=e[r],o=t.position[r];if(i=s.field.isKeyField()?at.comparator(at.fromName(o.referenceValue),n.key):ht(o,n.data.field(s.field)),"desc"===s.dir&&(i*=-1),0!==i)break}return t.before?i<=0:i<0}function Wt(t,e){if(null===t)return null===e;if(null===e)return!1;if(t.before!==e.before||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!ut(t.position[n],e.position[n]))return!1;return!0}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gt{constructor(t,e=null,n=[],i=[],r=null,s="F",o=null,a=null){this.path=t,this.collectionGroup=e,this.explicitOrderBy=n,this.filters=i,this.limit=r,this.limitType=s,this.startAt=o,this.endAt=a,this.S=null,this.D=null,this.startAt,this.endAt}}function Kt(t,e,n,i,r,s,o,a){return new Gt(t,e,n,i,r,s,o,a)}function Yt(t){return new Gt(t)}function Xt(t){return!rt(t.limit)&&"F"===t.limitType}function Qt(t){return!rt(t.limit)&&"L"===t.limitType}function Jt(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function Zt(t){for(const e of t.filters)if(e.V())return e.field;return null}function te(t){return null!==t.collectionGroup}function ee(t){const e=_(t);if(null===e.S){e.S=[];const t=Zt(e),n=Jt(e);if(null!==t&&null===n)t.isKeyField()||e.S.push(new qt(t)),e.S.push(new qt(G.keyField(),"asc"));else{let t=!1;for(const n of e.explicitOrderBy)e.S.push(n),n.field.isKeyField()&&(t=!0);if(!t){const t=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.S.push(new qt(G.keyField(),t))}}}return e.S}function ne(t){const e=_(t);if(!e.D)if("F"===e.limitType)e.D=Tt(e.path,e.collectionGroup,ee(e),e.filters,e.limit,e.startAt,e.endAt);else{const t=[];for(const r of ee(e)){const e="desc"===r.dir?"asc":"desc";t.push(new qt(r.field,e))}const n=e.endAt?new Vt(e.endAt.position,!e.endAt.before):null,i=e.startAt?new Vt(e.startAt.position,!e.startAt.before):null;e.D=Tt(e.path,e.collectionGroup,t,e.filters,e.limit,n,i)}return e.D}function ie(t,e,n){return new Gt(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function re(t,e){return Ct(ne(t),ne(e))&&t.limitType===e.limitType}function se(t){return`${Et(ne(t))}|lt:${t.limitType}`}function oe(t){return`Query(target=${xt(ne(t))}; limitType=${t.limitType})`}function ae(t,e){return e.isFoundDocument()&&function(t,e){const n=e.key.path;return null!==t.collectionGroup?e.key.hasCollectionId(t.collectionGroup)&&t.path.isPrefixOf(n):at.isDocumentKey(t.path)?t.path.isEqual(n):t.path.isImmediateParentOf(n)}(t,e)&&function(t,e){for(const n of t.explicitOrderBy)if(!n.field.isKeyField()&&null===e.data.field(n.field))return!1;return!0}(t,e)&&function(t,e){for(const n of t.filters)if(!n.matches(e))return!1;return!0}(t,e)&&function(t,e){return!(t.startAt&&!Ht(t.startAt,ee(t),e))&&(!t.endAt||!Ht(t.endAt,ee(t),e))}(t,e)}function ce(t){return(e,n)=>{let i=!1;for(const r of ee(t)){const t=ue(r,e,n);if(0!==t)return t;i=i||r.field.isKeyField()}return 0}}function ue(t,e,n){const i=t.field.isKeyField()?at.comparator(e.key,n.key):function(t,e,n){const i=e.data.field(t),r=n.data.field(t);return null!==i&&null!==r?ht(i,r):y()}(t.field,e,n);switch(t.dir){case"asc":return i;case"desc":return-1*i;default:return y()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function le(t,e){if(t.C){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:st(e)?"-0":e}}function he(t){return{integerValue:""+t}}function de(t,e){return ot(e)?he(e):le(t,e)}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fe{constructor(){this._=void 0}}function pe(t,e,n){return t instanceof ve?function(t,e){const n={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:t.seconds,nanos:t.nanoseconds}}}};return e&&(n.fields.__previous_value__=e),{mapValue:n}}(n,e):t instanceof ye?be(t,e):t instanceof we?_e(t,e):function(t,e){const n=ge(t,e),i=Ie(n)+Ie(t.N);return gt(n)&&gt(t.N)?he(i):le(t.k,i)}(t,e)}function me(t,e,n){return t instanceof ye?be(t,e):t instanceof we?_e(t,e):n}function ge(t,e){return t instanceof Oe?gt(n=e)||function(t){return!!t&&"doubleValue"in t}(n)?e:{integerValue:0}:null;var n}class ve extends fe{}class ye extends fe{constructor(t){super(),this.elements=t}}function be(t,e){const n=Se(e);for(const i of t.elements)n.some(t=>ut(t,i))||n.push(i);return{arrayValue:{values:n}}}class we extends fe{constructor(t){super(),this.elements=t}}function _e(t,e){let n=Se(e);for(const i of t.elements)n=n.filter(t=>!ut(t,i));return{arrayValue:{values:n}}}class Oe extends fe{constructor(t,e){super(),this.k=t,this.N=e}}function Ie(t){return Z(t.integerValue||t.doubleValue)}function Se(t){return vt(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ke{constructor(t,e){this.field=t,this.transform=e}}function Te(t,e){return t.field.isEqual(e.field)&&function(t,e){return t instanceof ye&&e instanceof ye||t instanceof we&&e instanceof we?M(t.elements,e.elements,ut):t instanceof Oe&&e instanceof Oe?ut(t.N,e.N):t instanceof ve&&e instanceof ve}(t.transform,e.transform)}class Ee{constructor(t,e){this.version=t,this.transformResults=e}}class xe{constructor(t,e){this.updateTime=t,this.exists=e}static none(){return new xe}static exists(t){return new xe(void 0,t)}static updateTime(t){return new xe(t)}get isNone(){return void 0===this.updateTime&&void 0===this.exists}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function Ce(t,e){return void 0!==t.updateTime?e.isFoundDocument()&&e.version.isEqual(t.updateTime):void 0===t.exists||t.exists===e.isFoundDocument()}class Ae{}function je(t,e,n){t instanceof Pe?function(t,e,n){const i=t.value.clone(),r=Fe(t.fieldTransforms,e,n.transformResults);i.setAll(r),e.convertToFoundDocument(n.version,i).setHasCommittedMutations()}(t,e,n):t instanceof Me?function(t,e,n){if(!Ce(t.precondition,e))return void e.convertToUnknownDocument(n.version);const i=Fe(t.fieldTransforms,e,n.transformResults),r=e.data;r.setAll($e(t)),r.setAll(i),e.convertToFoundDocument(n.version,r).setHasCommittedMutations()}(t,e,n):function(t,e,n){e.convertToNoDocument(n.version).setHasCommittedMutations()}(0,e,n)}function Re(t,e,n){t instanceof Pe?function(t,e,n){if(!Ce(t.precondition,e))return;const i=t.value.clone(),r=Be(t.fieldTransforms,n,e);i.setAll(r),e.convertToFoundDocument(De(e),i).setHasLocalMutations()}(t,e,n):t instanceof Me?function(t,e,n){if(!Ce(t.precondition,e))return;const i=Be(t.fieldTransforms,n,e),r=e.data;r.setAll($e(t)),r.setAll(i),e.convertToFoundDocument(De(e),r).setHasLocalMutations()}(t,e,n):function(t,e){Ce(t.precondition,e)&&e.convertToNoDocument(B.min())}(t,e)}function Le(t,e){let n=null;for(const i of t.fieldTransforms){const t=e.data.field(i.field),r=ge(i.transform,t||null);null!=r&&(null==n&&(n=Ot.empty()),n.set(i.field,r))}return n||null}function Ne(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(t,e){return void 0===t&&void 0===e||!(!t||!e)&&M(t,e,(t,e)=>Te(t,e))}(t.fieldTransforms,e.fieldTransforms)&&(0===t.type?t.value.isEqual(e.value):1!==t.type||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}function De(t){return t.isFoundDocument()?t.version:B.min()}class Pe extends Ae{constructor(t,e,n,i=[]){super(),this.key=t,this.value=e,this.precondition=n,this.fieldTransforms=i,this.type=0}}class Me extends Ae{constructor(t,e,n,i,r=[]){super(),this.key=t,this.data=e,this.fieldMask=n,this.precondition=i,this.fieldTransforms=r,this.type=1}}function $e(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const i=t.data.field(n);e.set(n,i)}}),e}function Fe(t,e,n){const i=new Map;b(t.length===n.length);for(let r=0;r<n.length;r++){const s=t[r],o=s.transform,a=e.data.field(s.field);i.set(s.field,me(o,a,n[r]))}return i}function Be(t,e,n){const i=new Map;for(const r of t){const t=r.transform,s=n.data.field(r.field);i.set(r.field,pe(t,s,e))}return i}class Ve extends Ae{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=2,this.fieldTransforms=[]}}class Ue extends Ae{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=3,this.fieldTransforms=[]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qe{constructor(t){this.count=t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ze,He;function We(t){switch(t){default:return y();case O.CANCELLED:case O.UNKNOWN:case O.DEADLINE_EXCEEDED:case O.RESOURCE_EXHAUSTED:case O.INTERNAL:case O.UNAVAILABLE:case O.UNAUTHENTICATED:return!1;case O.INVALID_ARGUMENT:case O.NOT_FOUND:case O.ALREADY_EXISTS:case O.PERMISSION_DENIED:case O.FAILED_PRECONDITION:case O.ABORTED:case O.OUT_OF_RANGE:case O.UNIMPLEMENTED:case O.DATA_LOSS:return!0}}function Ge(t){if(void 0===t)return m("GRPC error has no .code"),O.UNKNOWN;switch(t){case ze.OK:return O.OK;case ze.CANCELLED:return O.CANCELLED;case ze.UNKNOWN:return O.UNKNOWN;case ze.DEADLINE_EXCEEDED:return O.DEADLINE_EXCEEDED;case ze.RESOURCE_EXHAUSTED:return O.RESOURCE_EXHAUSTED;case ze.INTERNAL:return O.INTERNAL;case ze.UNAVAILABLE:return O.UNAVAILABLE;case ze.UNAUTHENTICATED:return O.UNAUTHENTICATED;case ze.INVALID_ARGUMENT:return O.INVALID_ARGUMENT;case ze.NOT_FOUND:return O.NOT_FOUND;case ze.ALREADY_EXISTS:return O.ALREADY_EXISTS;case ze.PERMISSION_DENIED:return O.PERMISSION_DENIED;case ze.FAILED_PRECONDITION:return O.FAILED_PRECONDITION;case ze.ABORTED:return O.ABORTED;case ze.OUT_OF_RANGE:return O.OUT_OF_RANGE;case ze.UNIMPLEMENTED:return O.UNIMPLEMENTED;case ze.DATA_LOSS:return O.DATA_LOSS;default:return y()}}(He=ze||(ze={}))[He.OK=0]="OK",He[He.CANCELLED=1]="CANCELLED",He[He.UNKNOWN=2]="UNKNOWN",He[He.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",He[He.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",He[He.NOT_FOUND=5]="NOT_FOUND",He[He.ALREADY_EXISTS=6]="ALREADY_EXISTS",He[He.PERMISSION_DENIED=7]="PERMISSION_DENIED",He[He.UNAUTHENTICATED=16]="UNAUTHENTICATED",He[He.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",He[He.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",He[He.ABORTED=10]="ABORTED",He[He.OUT_OF_RANGE=11]="OUT_OF_RANGE",He[He.UNIMPLEMENTED=12]="UNIMPLEMENTED",He[He.INTERNAL=13]="INTERNAL",He[He.UNAVAILABLE=14]="UNAVAILABLE",He[He.DATA_LOSS=15]="DATA_LOSS";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ke{constructor(t,e){this.comparator=t,this.root=e||Xe.EMPTY}insert(t,e){return new Ke(this.comparator,this.root.insert(t,e,this.comparator).copy(null,null,Xe.BLACK,null,null))}remove(t){return new Ke(this.comparator,this.root.remove(t,this.comparator).copy(null,null,Xe.BLACK,null,null))}get(t){let e=this.root;for(;!e.isEmpty();){const n=this.comparator(t,e.key);if(0===n)return e.value;n<0?e=e.left:n>0&&(e=e.right)}return null}indexOf(t){let e=0,n=this.root;for(;!n.isEmpty();){const i=this.comparator(t,n.key);if(0===i)return e+n.left.size;i<0?n=n.left:(e+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal((e,n)=>(t(e,n),!1))}toString(){const t=[];return this.inorderTraversal((e,n)=>(t.push(`${e}:${n}`),!1)),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new Ye(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new Ye(this.root,t,this.comparator,!1)}getReverseIterator(){return new Ye(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new Ye(this.root,t,this.comparator,!0)}}class Ye{constructor(t,e,n,i){this.isReverse=i,this.nodeStack=[];let r=1;for(;!t.isEmpty();)if(r=e?n(t.key,e):1,i&&(r*=-1),r<0)t=this.isReverse?t.left:t.right;else{if(0===r){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const e={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return e}hasNext(){return this.nodeStack.length>0}peek(){if(0===this.nodeStack.length)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class Xe{constructor(t,e,n,i,r){this.key=t,this.value=e,this.color=null!=n?n:Xe.RED,this.left=null!=i?i:Xe.EMPTY,this.right=null!=r?r:Xe.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,e,n,i,r){return new Xe(null!=t?t:this.key,null!=e?e:this.value,null!=n?n:this.color,null!=i?i:this.left,null!=r?r:this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,n){let i=this;const r=n(t,i.key);return i=r<0?i.copy(null,null,null,i.left.insert(t,e,n),null):0===r?i.copy(null,e,null,null,null):i.copy(null,null,null,null,i.right.insert(t,e,n)),i.fixUp()}removeMin(){if(this.left.isEmpty())return Xe.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,e){let n,i=this;if(e(t,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(t,e),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),0===e(t,i.key)){if(i.right.isEmpty())return Xe.EMPTY;n=i.right.min(),i=i.copy(n.key,n.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(t,e))}return i.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,Xe.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,Xe.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw y();if(this.right.isRed())throw y();const t=this.left.check();if(t!==this.right.check())throw y();return t+(this.isRed()?0:1)}}Xe.EMPTY=null,Xe.RED=!0,Xe.BLACK=!1,Xe.EMPTY=new class{constructor(){this.size=0}get key(){throw y()}get value(){throw y()}get color(){throw y()}get left(){throw y()}get right(){throw y()}copy(t,e,n,i,r){return this}insert(t,e,n){return new Xe(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Qe{constructor(t){this.comparator=t,this.data=new Ke(this.comparator)}has(t){return null!==this.data.get(t)}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal((e,n)=>(t(e),!1))}forEachInRange(t,e){const n=this.data.getIteratorFrom(t[0]);for(;n.hasNext();){const i=n.getNext();if(this.comparator(i.key,t[1])>=0)return;e(i.key)}}forEachWhile(t,e){let n;for(n=void 0!==e?this.data.getIteratorFrom(e):this.data.getIterator();n.hasNext();)if(!t(n.getNext().key))return}firstAfterOrEqual(t){const e=this.data.getIteratorFrom(t);return e.hasNext()?e.getNext().key:null}getIterator(){return new Je(this.data.getIterator())}getIteratorFrom(t){return new Je(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let e=this;return e.size<t.size&&(e=t,t=this),t.forEach(t=>{e=e.add(t)}),e}isEqual(t){if(!(t instanceof Qe))return!1;if(this.size!==t.size)return!1;const e=this.data.getIterator(),n=t.data.getIterator();for(;e.hasNext();){const t=e.getNext().key,i=n.getNext().key;if(0!==this.comparator(t,i))return!1}return!0}toArray(){const t=[];return this.forEach(e=>{t.push(e)}),t}toString(){const t=[];return this.forEach(e=>t.push(e)),"SortedSet("+t.toString()+")"}copy(t){const e=new Qe(this.comparator);return e.data=t,e}}class Je{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ze=new Ke(at.comparator);function tn(){return Ze}const en=new Ke(at.comparator);function nn(){return en}const rn=new Ke(at.comparator);function sn(){return rn}const on=new Qe(at.comparator);function an(...t){let e=on;for(const n of t)e=e.add(n);return e}const cn=new Qe(P);function un(){return cn}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ln{constructor(t,e,n,i,r){this.snapshotVersion=t,this.targetChanges=e,this.targetMismatches=n,this.documentUpdates=i,this.resolvedLimboDocuments=r}static createSynthesizedRemoteEventForCurrentChange(t,e){const n=new Map;return n.set(t,hn.createSynthesizedTargetChangeForCurrentChange(t,e)),new ln(B.min(),n,un(),tn(),an())}}class hn{constructor(t,e,n,i,r){this.resumeToken=t,this.current=e,this.addedDocuments=n,this.modifiedDocuments=i,this.removedDocuments=r}static createSynthesizedTargetChangeForCurrentChange(t,e){return new hn(X.EMPTY_BYTE_STRING,e,an(),an(),an())}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dn{constructor(t,e,n,i){this.$=t,this.removedTargetIds=e,this.key=n,this.O=i}}class fn{constructor(t,e){this.targetId=t,this.M=e}}class pn{constructor(t,e,n=X.EMPTY_BYTE_STRING,i=null){this.state=t,this.targetIds=e,this.resumeToken=n,this.cause=i}}class mn{constructor(){this.F=0,this.L=yn(),this.B=X.EMPTY_BYTE_STRING,this.U=!1,this.q=!0}get current(){return this.U}get resumeToken(){return this.B}get K(){return 0!==this.F}get j(){return this.q}W(t){t.approximateByteSize()>0&&(this.q=!0,this.B=t)}G(){let t=an(),e=an(),n=an();return this.L.forEach((i,r)=>{switch(r){case 0:t=t.add(i);break;case 2:e=e.add(i);break;case 1:n=n.add(i);break;default:y()}}),new hn(this.B,this.U,t,e,n)}H(){this.q=!1,this.L=yn()}J(t,e){this.q=!0,this.L=this.L.insert(t,e)}Y(t){this.q=!0,this.L=this.L.remove(t)}X(){this.F+=1}Z(){this.F-=1}tt(){this.q=!0,this.U=!0}}class gn{constructor(t){this.et=t,this.nt=new Map,this.st=tn(),this.it=vn(),this.rt=new Qe(P)}ot(t){for(const e of t.$)t.O&&t.O.isFoundDocument()?this.ct(e,t.O):this.at(e,t.key,t.O);for(const e of t.removedTargetIds)this.at(e,t.key,t.O)}ut(t){this.forEachTarget(t,e=>{const n=this.ht(e);switch(t.state){case 0:this.lt(e)&&n.W(t.resumeToken);break;case 1:n.Z(),n.K||n.H(),n.W(t.resumeToken);break;case 2:n.Z(),n.K||this.removeTarget(e);break;case 3:this.lt(e)&&(n.tt(),n.W(t.resumeToken));break;case 4:this.lt(e)&&(this.ft(e),n.W(t.resumeToken));break;default:y()}})}forEachTarget(t,e){t.targetIds.length>0?t.targetIds.forEach(e):this.nt.forEach((t,n)=>{this.lt(n)&&e(n)})}dt(t){const e=t.targetId,n=t.M.count,i=this.wt(e);if(i){const t=i.target;if(At(t))if(0===n){const n=new at(t.path);this.at(e,n,St.newNoDocument(n,B.min()))}else b(1===n);else this._t(e)!==n&&(this.ft(e),this.rt=this.rt.add(e))}}gt(t){const e=new Map;this.nt.forEach((n,i)=>{const r=this.wt(i);if(r){if(n.current&&At(r.target)){const e=new at(r.target.path);null!==this.st.get(e)||this.yt(i,e)||this.at(i,e,St.newNoDocument(e,t))}n.j&&(e.set(i,n.G()),n.H())}});let n=an();this.it.forEach((t,e)=>{let i=!0;e.forEachWhile(t=>{const e=this.wt(t);return!e||2===e.purpose||(i=!1,!1)}),i&&(n=n.add(t))});const i=new ln(t,e,this.rt,this.st,n);return this.st=tn(),this.it=vn(),this.rt=new Qe(P),i}ct(t,e){if(!this.lt(t))return;const n=this.yt(t,e.key)?2:0;this.ht(t).J(e.key,n),this.st=this.st.insert(e.key,e),this.it=this.it.insert(e.key,this.Tt(e.key).add(t))}at(t,e,n){if(!this.lt(t))return;const i=this.ht(t);this.yt(t,e)?i.J(e,1):i.Y(e),this.it=this.it.insert(e,this.Tt(e).delete(t)),n&&(this.st=this.st.insert(e,n))}removeTarget(t){this.nt.delete(t)}_t(t){const e=this.ht(t).G();return this.et.getRemoteKeysForTarget(t).size+e.addedDocuments.size-e.removedDocuments.size}X(t){this.ht(t).X()}ht(t){let e=this.nt.get(t);return e||(e=new mn,this.nt.set(t,e)),e}Tt(t){let e=this.it.get(t);return e||(e=new Qe(P),this.it=this.it.insert(t,e)),e}lt(t){const e=null!==this.wt(t);return e||p("WatchChangeAggregator","Detected inactive target",t),e}wt(t){const e=this.nt.get(t);return e&&e.K?null:this.et.Et(t)}ft(t){this.nt.set(t,new mn),this.et.getRemoteKeysForTarget(t).forEach(e=>{this.at(t,e,null)})}yt(t,e){return this.et.getRemoteKeysForTarget(t).has(e)}}function vn(){return new Ke(at.comparator)}function yn(){return new Ke(at.comparator)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bn=(()=>{const t={asc:"ASCENDING",desc:"DESCENDING"};return t})(),wn=(()=>{const t={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"};return t})();class _n{constructor(t,e){this.databaseId=t,this.C=e}}function On(t,e){return t.C?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function In(t,e){return t.C?e.toBase64():e.toUint8Array()}function Sn(t,e){return On(t,e.toTimestamp())}function kn(t){return b(!!t),B.fromTimestamp(function(t){const e=J(t);return new F(e.seconds,e.nanos)}(t))}function Tn(t,e){return function(t){return new H(["projects",t.projectId,"databases",t.database])}(t).child("documents").child(e).canonicalString()}function En(t){const e=H.fromString(t);return b(ei(e)),e}function xn(t,e){return Tn(t.databaseId,e.path)}function Cn(t,e){const n=En(e);if(n.get(1)!==t.databaseId.projectId)throw new I(O.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new I(O.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new at(Ln(n))}function An(t,e){return Tn(t.databaseId,e)}function jn(t){const e=En(t);return 4===e.length?H.emptyPath():Ln(e)}function Rn(t){return new H(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function Ln(t){return b(t.length>4&&"documents"===t.get(4)),t.popFirst(5)}function Nn(t,e,n){return{name:xn(t,e),fields:n.value.mapValue.fields}}function Dn(t,e,n){const i=Cn(t,e.name),r=kn(e.updateTime),s=new Ot({mapValue:{fields:e.fields}}),o=St.newFoundDocument(i,r,s);return n&&o.setHasCommittedMutations(),n?o.setHasCommittedMutations():o}function Pn(t,e){return"found"in e?function(t,e){b(!!e.found),e.found.name,e.found.updateTime;const n=Cn(t,e.found.name),i=kn(e.found.updateTime),r=new Ot({mapValue:{fields:e.found.fields}});return St.newFoundDocument(n,i,r)}(t,e):"missing"in e?function(t,e){b(!!e.missing),b(!!e.readTime);const n=Cn(t,e.missing),i=kn(e.readTime);return St.newNoDocument(n,i)}(t,e):y()}function Mn(t,e){let n;if("targetChange"in e){e.targetChange;const i=function(t){return"NO_CHANGE"===t?0:"ADD"===t?1:"REMOVE"===t?2:"CURRENT"===t?3:"RESET"===t?4:y()}(e.targetChange.targetChangeType||"NO_CHANGE"),r=e.targetChange.targetIds||[],s=function(t,e){return t.C?(b(void 0===e||"string"==typeof e),X.fromBase64String(e||"")):(b(void 0===e||e instanceof Uint8Array),X.fromUint8Array(e||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(t){const e=void 0===t.code?O.UNKNOWN:Ge(t.code);return new I(e,t.message||"")}(o);n=new pn(i,r,s,a||null)}else if("documentChange"in e){e.documentChange;const i=e.documentChange;i.document,i.document.name,i.document.updateTime;const r=Cn(t,i.document.name),s=kn(i.document.updateTime),o=new Ot({mapValue:{fields:i.document.fields}}),a=St.newFoundDocument(r,s,o),c=i.targetIds||[],u=i.removedTargetIds||[];n=new dn(c,u,a.key,a)}else if("documentDelete"in e){e.documentDelete;const i=e.documentDelete;i.document;const r=Cn(t,i.document),s=i.readTime?kn(i.readTime):B.min(),o=St.newNoDocument(r,s),a=i.removedTargetIds||[];n=new dn([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const i=e.documentRemove;i.document;const r=Cn(t,i.document),s=i.removedTargetIds||[];n=new dn([],s,r,null)}else{if(!("filter"in e))return y();{e.filter;const t=e.filter;t.targetId;const i=t.count||0,r=new qe(i),s=t.targetId;n=new fn(s,r)}}return n}function $n(t,e){let n;if(e instanceof Pe)n={update:Nn(t,e.key,e.value)};else if(e instanceof Ve)n={delete:xn(t,e.key)};else if(e instanceof Me)n={update:Nn(t,e.key,e.data),updateMask:ti(e.fieldMask)};else{if(!(e instanceof Ue))return y();n={verify:xn(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(t=>function(t,e){const n=e.transform;if(n instanceof ve)return{fieldPath:e.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(n instanceof ye)return{fieldPath:e.field.canonicalString(),appendMissingElements:{values:n.elements}};if(n instanceof we)return{fieldPath:e.field.canonicalString(),removeAllFromArray:{values:n.elements}};if(n instanceof Oe)return{fieldPath:e.field.canonicalString(),increment:n.N};throw y()}(0,t))),e.precondition.isNone||(n.currentDocument=function(t,e){return void 0!==e.updateTime?{updateTime:Sn(t,e.updateTime)}:void 0!==e.exists?{exists:e.exists}:y()}(t,e.precondition)),n}function Fn(t,e){const n=e.currentDocument?function(t){return void 0!==t.updateTime?xe.updateTime(kn(t.updateTime)):void 0!==t.exists?xe.exists(t.exists):xe.none()}(e.currentDocument):xe.none(),i=e.updateTransforms?e.updateTransforms.map(e=>function(t,e){let n=null;if("setToServerValue"in e)b("REQUEST_TIME"===e.setToServerValue),n=new ve;else if("appendMissingElements"in e){const t=e.appendMissingElements.values||[];n=new ye(t)}else if("removeAllFromArray"in e){const t=e.removeAllFromArray.values||[];n=new we(t)}else"increment"in e?n=new Oe(t,e.increment):y();const i=G.fromServerFormat(e.fieldPath);return new ke(i,n)}(t,e)):[];if(e.update){e.update.name;const r=Cn(t,e.update.name),s=new Ot({mapValue:{fields:e.update.fields}});if(e.updateMask){const t=function(t){const e=t.fieldPaths||[];return new K(e.map(t=>G.fromServerFormat(t)))}(e.updateMask);return new Me(r,s,t,n,i)}return new Pe(r,s,n,i)}if(e.delete){const i=Cn(t,e.delete);return new Ve(i,n)}if(e.verify){const i=Cn(t,e.verify);return new Ue(i,n)}return y()}function Bn(t,e){return t&&t.length>0?(b(void 0!==e),t.map(t=>function(t,e){let n=t.updateTime?kn(t.updateTime):kn(e);return n.isEqual(B.min())&&(n=kn(e)),new Ee(n,t.transformResults||[])}(t,e))):[]}function Vn(t,e){return{documents:[An(t,e.path)]}}function Un(t,e){const n={structuredQuery:{}},i=e.path;null!==e.collectionGroup?(n.parent=An(t,i),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=An(t,i.popLast()),n.structuredQuery.from=[{collectionId:i.lastSegment()}]);const r=function(t){if(0===t.length)return;const e=t.map(t=>function(t){if("=="===t.op){if(bt(t.value))return{unaryFilter:{field:Xn(t.field),op:"IS_NAN"}};if(yt(t.value))return{unaryFilter:{field:Xn(t.field),op:"IS_NULL"}}}else if("!="===t.op){if(bt(t.value))return{unaryFilter:{field:Xn(t.field),op:"IS_NOT_NAN"}};if(yt(t.value))return{unaryFilter:{field:Xn(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Xn(t.field),op:Yn(t.op),value:t.value}}}(t));return 1===e.length?e[0]:{compositeFilter:{op:"AND",filters:e}}}(e.filters);r&&(n.structuredQuery.where=r);const s=function(t){if(0!==t.length)return t.map(t=>function(t){return{field:Xn(t.field),direction:Kn(t.dir)}}(t))}(e.orderBy);s&&(n.structuredQuery.orderBy=s);const o=function(t,e){return t.C||rt(e)?e:{value:e}}(t,e.limit);return null!==o&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt=Wn(e.startAt)),e.endAt&&(n.structuredQuery.endAt=Wn(e.endAt)),n}function qn(t){let e=jn(t.parent);const n=t.structuredQuery,i=n.from?n.from.length:0;let r=null;if(i>0){b(1===i);const t=n.from[0];t.allDescendants?r=t.collectionId:e=e.child(t.collectionId)}let s=[];n.where&&(s=Hn(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(t=>function(t){return new qt(Qn(t.field),function(t){switch(t){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(t.direction))}(t)));let a=null;n.limit&&(a=function(t){let e;return e="object"==typeof t?t.value:t,rt(e)?null:e}(n.limit));let c=null;n.startAt&&(c=Gn(n.startAt));let u=null;return n.endAt&&(u=Gn(n.endAt)),Kt(e,r,o,s,a,"F",c,u)}function zn(t,e){const n=function(t,e){switch(e){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return y()}}(0,e.purpose);return null==n?null:{"goog-listen-tags":n}}function Hn(t){return t?void 0!==t.unaryFilter?[Zn(t)]:void 0!==t.fieldFilter?[Jn(t)]:void 0!==t.compositeFilter?t.compositeFilter.filters.map(t=>Hn(t)).reduce((t,e)=>t.concat(e)):y():[]}function Wn(t){return{before:t.before,values:t.position}}function Gn(t){const e=!!t.before,n=t.values||[];return new Vt(n,e)}function Kn(t){return bn[t]}function Yn(t){return wn[t]}function Xn(t){return{fieldPath:t.canonicalString()}}function Qn(t){return G.fromServerFormat(t.fieldPath)}function Jn(t){return jt.create(Qn(t.fieldFilter.field),function(t){switch(t){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return y()}}(t.fieldFilter.op),t.fieldFilter.value)}function Zn(t){switch(t.unaryFilter.op){case"IS_NAN":const e=Qn(t.unaryFilter.field);return jt.create(e,"==",{doubleValue:NaN});case"IS_NULL":const n=Qn(t.unaryFilter.field);return jt.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=Qn(t.unaryFilter.field);return jt.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const r=Qn(t.unaryFilter.field);return jt.create(r,"!=",{nullValue:"NULL_VALUE"});default:return y()}}function ti(t){const e=[];return t.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function ei(t){return t.length>=4&&"projects"===t.get(0)&&"databases"===t.get(2)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ni(t){let e="";for(let n=0;n<t.length;n++)e.length>0&&(e=ri(e)),e=ii(t.get(n),e);return ri(e)}function ii(t,e){let n=e;const i=t.length;for(let r=0;r<i;r++){const e=t.charAt(r);switch(e){case"\0":n+="";break;case"":n+="";break;default:n+=e}}return n}function ri(t){return t+""}function si(t){const e=t.length;if(b(e>=2),2===e)return b(""===t.charAt(0)&&""===t.charAt(1)),H.emptyPath();const n=e-2,i=[];let r="";for(let s=0;s<e;){const e=t.indexOf("",s);switch((e<0||e>n)&&y(),t.charAt(e+1)){case"":const n=t.substring(s,e);let o;0===r.length?o=n:(r+=n,o=r,r=""),i.push(o);break;case"":r+=t.substring(s,e),r+="\0";break;case"":r+=t.substring(s,e+1);break;default:y()}s=e+2}return new H(i)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oi{constructor(t,e){this.seconds=t,this.nanoseconds=e}}class ai{constructor(t,e,n){this.ownerId=t,this.allowTabSynchronization=e,this.leaseTimestampMs=n}}ai.store="owner",ai.key="owner";class ci{constructor(t,e,n){this.userId=t,this.lastAcknowledgedBatchId=e,this.lastStreamToken=n}}ci.store="mutationQueues",ci.keyPath="userId";class ui{constructor(t,e,n,i,r){this.userId=t,this.batchId=e,this.localWriteTimeMs=n,this.baseMutations=i,this.mutations=r}}ui.store="mutations",ui.keyPath="batchId",ui.userMutationsIndex="userMutationsIndex",ui.userMutationsKeyPath=["userId","batchId"];class li{constructor(){}static prefixForUser(t){return[t]}static prefixForPath(t,e){return[t,ni(e)]}static key(t,e,n){return[t,ni(e),n]}}li.store="documentMutations",li.PLACEHOLDER=new li;class hi{constructor(t,e){this.path=t,this.readTime=e}}class di{constructor(t,e){this.path=t,this.version=e}}class fi{constructor(t,e,n,i,r,s){this.unknownDocument=t,this.noDocument=e,this.document=n,this.hasCommittedMutations=i,this.readTime=r,this.parentPath=s}}fi.store="remoteDocuments",fi.readTimeIndex="readTimeIndex",fi.readTimeIndexPath="readTime",fi.collectionReadTimeIndex="collectionReadTimeIndex",fi.collectionReadTimeIndexPath=["parentPath","readTime"];class pi{constructor(t){this.byteSize=t}}pi.store="remoteDocumentGlobal",pi.key="remoteDocumentGlobalKey";class mi{constructor(t,e,n,i,r,s,o){this.targetId=t,this.canonicalId=e,this.readTime=n,this.resumeToken=i,this.lastListenSequenceNumber=r,this.lastLimboFreeSnapshotVersion=s,this.query=o}}mi.store="targets",mi.keyPath="targetId",mi.queryTargetsIndexName="queryTargetsIndex",mi.queryTargetsKeyPath=["canonicalId","targetId"];class gi{constructor(t,e,n){this.targetId=t,this.path=e,this.sequenceNumber=n}}gi.store="targetDocuments",gi.keyPath=["targetId","path"],gi.documentTargetsIndex="documentTargetsIndex",gi.documentTargetsKeyPath=["path","targetId"];class vi{constructor(t,e,n,i){this.highestTargetId=t,this.highestListenSequenceNumber=e,this.lastRemoteSnapshotVersion=n,this.targetCount=i}}vi.key="targetGlobalKey",vi.store="targetGlobal";class yi{constructor(t,e){this.collectionId=t,this.parent=e}}yi.store="collectionParents",yi.keyPath=["collectionId","parent"];class bi{constructor(t,e,n,i){this.clientId=t,this.updateTimeMs=e,this.networkEnabled=n,this.inForeground=i}}bi.store="clientMetadata",bi.keyPath="clientId";class wi{constructor(t,e,n){this.bundleId=t,this.createTime=e,this.version=n}}wi.store="bundles",wi.keyPath="bundleId";class _i{constructor(t,e,n){this.name=t,this.readTime=e,this.bundledQuery=n}}_i.store="namedQueries",_i.keyPath="name";const Oi=[ci.store,ui.store,li.store,fi.store,mi.store,ai.store,vi.store,gi.store,bi.store,pi.store,yi.store,wi.store,_i.store],Ii="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Si{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(t=>t())}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ki{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(t){return this.next(void 0,t)}next(t,e){return this.callbackAttached&&y(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(e,this.error):this.wrapSuccess(t,this.result):new ki((n,i)=>{this.nextCallback=e=>{this.wrapSuccess(t,e).next(n,i)},this.catchCallback=t=>{this.wrapFailure(e,t).next(n,i)}})}toPromise(){return new Promise((t,e)=>{this.next(t,e)})}wrapUserFunction(t){try{const e=t();return e instanceof ki?e:ki.resolve(e)}catch(t){return ki.reject(t)}}wrapSuccess(t,e){return t?this.wrapUserFunction(()=>t(e)):ki.resolve(e)}wrapFailure(t,e){return t?this.wrapUserFunction(()=>t(e)):ki.reject(e)}static resolve(t){return new ki((e,n)=>{e(t)})}static reject(t){return new ki((e,n)=>{n(t)})}static waitFor(t){return new ki((e,n)=>{let i=0,r=0,s=!1;t.forEach(t=>{++i,t.next(()=>{++r,s&&r===i&&e()},t=>n(t))}),s=!0,r===i&&e()})}static or(t){let e=ki.resolve(!1);for(const n of t)e=e.next(t=>t?ki.resolve(t):n());return e}static forEach(t,e){const n=[];return t.forEach((t,i)=>{n.push(e.call(this,t,i))}),this.waitFor(n)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ti{constructor(t,e){this.action=t,this.transaction=e,this.aborted=!1,this.It=new S,this.transaction.oncomplete=()=>{this.It.resolve()},this.transaction.onabort=()=>{e.error?this.It.reject(new Ci(t,e.error)):this.It.resolve()},this.transaction.onerror=e=>{const n=Ni(e.target.error);this.It.reject(new Ci(t,n))}}static open(t,e,n,i){try{return new Ti(e,t.transaction(i,n))}catch(t){throw new Ci(e,t)}}get At(){return this.It.promise}abort(t){t&&this.It.reject(t),this.aborted||(p("SimpleDb","Aborting transaction:",t?t.message:"Client-initiated abort"),this.aborted=!0,this.transaction.abort())}store(t){const e=this.transaction.objectStore(t);return new ji(e)}}class Ei{constructor(t,e,n){this.name=t,this.version=e,this.Rt=n,12.2===Ei.bt(Object(o["l"])())&&m("Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.")}static delete(t){return p("SimpleDb","Removing database:",t),Ri(window.indexedDB.deleteDatabase(t)).toPromise()}static Pt(){if(!Object(o["r"])())return!1;if(Ei.vt())return!0;const t=Object(o["l"])(),e=Ei.bt(t),n=0<e&&e<10,i=Ei.Vt(t),r=0<i&&i<4.5;return!(t.indexOf("MSIE ")>0||t.indexOf("Trident/")>0||t.indexOf("Edge/")>0||n||r)}static vt(){var e;return"undefined"!=typeof t&&"YES"===(null===(e=Object({NODE_ENV:"production",BASE_URL:"/bdconocimiento/"}))||void 0===e?void 0:e.St)}static Dt(t,e){return t.store(e)}static bt(t){const e=t.match(/i(?:phone|pad|pod) os ([\d_]+)/i),n=e?e[1].split("_").slice(0,2).join("."):"-1";return Number(n)}static Vt(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}async Ct(t){return this.db||(p("SimpleDb","Opening database:",this.name),this.db=await new Promise((e,n)=>{const i=indexedDB.open(this.name,this.version);i.onsuccess=t=>{const n=t.target.result;e(n)},i.onblocked=()=>{n(new Ci(t,"Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed."))},i.onerror=e=>{const i=e.target.error;"VersionError"===i.name?n(new I(O.FAILED_PRECONDITION,"A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh.")):"InvalidStateError"===i.name?n(new I(O.FAILED_PRECONDITION,"Unable to open an IndexedDB connection. This could be due to running in a private browsing session on a browser whose private browsing sessions do not support IndexedDB: "+i)):n(new Ci(t,i))},i.onupgradeneeded=t=>{p("SimpleDb",'Database "'+this.name+'" requires upgrade from version:',t.oldVersion);const e=t.target.result;this.Rt.Nt(e,i.transaction,t.oldVersion,this.version).next(()=>{p("SimpleDb","Database upgrade to version "+this.version+" complete")})}})),this.kt&&(this.db.onversionchange=t=>this.kt(t)),this.db}xt(t){this.kt=t,this.db&&(this.db.onversionchange=e=>t(e))}async runTransaction(t,e,n,i){const r="readonly"===e;let s=0;for(;;){++s;try{this.db=await this.Ct(t);const e=Ti.open(this.db,t,r?"readonly":"readwrite",n),s=i(e).catch(t=>(e.abort(t),ki.reject(t))).toPromise();return s.catch(()=>{}),await e.At,s}catch(t){const e="FirebaseError"!==t.name&&s<3;if(p("SimpleDb","Transaction failed with error:",t.message,"Retrying:",e),this.close(),!e)return Promise.reject(t)}}}close(){this.db&&this.db.close(),this.db=void 0}}class xi{constructor(t){this.$t=t,this.Ot=!1,this.Mt=null}get isDone(){return this.Ot}get Ft(){return this.Mt}set cursor(t){this.$t=t}done(){this.Ot=!0}Lt(t){this.Mt=t}delete(){return Ri(this.$t.delete())}}class Ci extends I{constructor(t,e){super(O.UNAVAILABLE,`IndexedDB transaction '${t}' failed: ${e}`),this.name="IndexedDbTransactionError"}}function Ai(t){return"IndexedDbTransactionError"===t.name}class ji{constructor(t){this.store=t}put(t,e){let n;return void 0!==e?(p("SimpleDb","PUT",this.store.name,t,e),n=this.store.put(e,t)):(p("SimpleDb","PUT",this.store.name,"<auto-key>",t),n=this.store.put(t)),Ri(n)}add(t){return p("SimpleDb","ADD",this.store.name,t,t),Ri(this.store.add(t))}get(t){return Ri(this.store.get(t)).next(e=>(void 0===e&&(e=null),p("SimpleDb","GET",this.store.name,t,e),e))}delete(t){return p("SimpleDb","DELETE",this.store.name,t),Ri(this.store.delete(t))}count(){return p("SimpleDb","COUNT",this.store.name),Ri(this.store.count())}Bt(t,e){const n=this.cursor(this.options(t,e)),i=[];return this.Ut(n,(t,e)=>{i.push(e)}).next(()=>i)}qt(t,e){p("SimpleDb","DELETE ALL",this.store.name);const n=this.options(t,e);n.Kt=!1;const i=this.cursor(n);return this.Ut(i,(t,e,n)=>n.delete())}jt(t,e){let n;e?n=t:(n={},e=t);const i=this.cursor(n);return this.Ut(i,e)}Qt(t){const e=this.cursor({});return new ki((n,i)=>{e.onerror=t=>{const e=Ni(t.target.error);i(e)},e.onsuccess=e=>{const i=e.target.result;i?t(i.primaryKey,i.value).next(t=>{t?i.continue():n()}):n()}})}Ut(t,e){const n=[];return new ki((i,r)=>{t.onerror=t=>{r(t.target.error)},t.onsuccess=t=>{const r=t.target.result;if(!r)return void i();const s=new xi(r),o=e(r.primaryKey,r.value,s);if(o instanceof ki){const t=o.catch(t=>(s.done(),ki.reject(t)));n.push(t)}s.isDone?i():null===s.Ft?r.continue():r.continue(s.Ft)}}).next(()=>ki.waitFor(n))}options(t,e){let n;return void 0!==t&&("string"==typeof t?n=t:e=t),{index:n,range:e}}cursor(t){let e="next";if(t.reverse&&(e="prev"),t.index){const n=this.store.index(t.index);return t.Kt?n.openKeyCursor(t.range,e):n.openCursor(t.range,e)}return this.store.openCursor(t.range,e)}}function Ri(t){return new ki((e,n)=>{t.onsuccess=t=>{const n=t.target.result;e(n)},t.onerror=t=>{const e=Ni(t.target.error);n(e)}})}let Li=!1;function Ni(t){const e=Ei.bt(Object(o["l"])());if(e>=12.2&&e<13){const e="An internal error was encountered in the Indexed Database server";if(t.message.indexOf(e)>=0){const t=new I("internal",`IOS_INDEXEDDB_BUG1: IndexedDb has thrown '${e}'. This is likely due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.`);return Li||(Li=!0,setTimeout(()=>{throw t},0)),t}}return t}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Di extends Si{constructor(t,e){super(),this.Wt=t,this.currentSequenceNumber=e}}function Pi(t,e){const n=_(t);return Ei.Dt(n.Wt,e)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mi{constructor(t,e,n,i){this.batchId=t,this.localWriteTime=e,this.baseMutations=n,this.mutations=i}applyToRemoteDocument(t,e){const n=e.mutationResults;for(let i=0;i<this.mutations.length;i++){const e=this.mutations[i];e.key.isEqual(t.key)&&je(e,t,n[i])}}applyToLocalView(t){for(const e of this.baseMutations)e.key.isEqual(t.key)&&Re(e,t,this.localWriteTime);for(const e of this.mutations)e.key.isEqual(t.key)&&Re(e,t,this.localWriteTime)}applyToLocalDocumentSet(t){this.mutations.forEach(e=>{const n=t.get(e.key),i=n;this.applyToLocalView(i),n.isValidDocument()||i.convertToNoDocument(B.min())})}keys(){return this.mutations.reduce((t,e)=>t.add(e.key),an())}isEqual(t){return this.batchId===t.batchId&&M(this.mutations,t.mutations,(t,e)=>Ne(t,e))&&M(this.baseMutations,t.baseMutations,(t,e)=>Ne(t,e))}}class $i{constructor(t,e,n,i){this.batch=t,this.commitVersion=e,this.mutationResults=n,this.docVersions=i}static from(t,e,n){b(t.mutations.length===n.length);let i=sn();const r=t.mutations;for(let s=0;s<r.length;s++)i=i.insert(r[s].key,n[s].version);return new $i(t,e,n,i)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fi{constructor(t,e,n,i,r=B.min(),s=B.min(),o=X.EMPTY_BYTE_STRING){this.target=t,this.targetId=e,this.purpose=n,this.sequenceNumber=i,this.snapshotVersion=r,this.lastLimboFreeSnapshotVersion=s,this.resumeToken=o}withSequenceNumber(t){return new Fi(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(t,e){return new Fi(this.target,this.targetId,this.purpose,this.sequenceNumber,e,this.lastLimboFreeSnapshotVersion,t)}withLastLimboFreeSnapshotVersion(t){return new Fi(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bi{constructor(t){this.Gt=t}}function Vi(t,e){if(e.document)return Dn(t.Gt,e.document,!!e.hasCommittedMutations);if(e.noDocument){const t=at.fromSegments(e.noDocument.path),n=Wi(e.noDocument.readTime),i=St.newNoDocument(t,n);return e.hasCommittedMutations?i.setHasCommittedMutations():i}if(e.unknownDocument){const t=at.fromSegments(e.unknownDocument.path),n=Wi(e.unknownDocument.version);return St.newUnknownDocument(t,n)}return y()}function Ui(t,e,n){const i=qi(n),r=e.key.path.popLast().toArray();if(e.isFoundDocument()){const n=function(t,e){return{name:xn(t,e.key),fields:e.data.value.mapValue.fields,updateTime:On(t,e.version.toTimestamp())}}(t.Gt,e),s=e.hasCommittedMutations;return new fi(null,null,n,s,i,r)}if(e.isNoDocument()){const t=e.key.path.toArray(),n=Hi(e.version),s=e.hasCommittedMutations;return new fi(null,new hi(t,n),null,s,i,r)}if(e.isUnknownDocument()){const t=e.key.path.toArray(),n=Hi(e.version);return new fi(new di(t,n),null,null,!0,i,r)}return y()}function qi(t){const e=t.toTimestamp();return[e.seconds,e.nanoseconds]}function zi(t){const e=new F(t[0],t[1]);return B.fromTimestamp(e)}function Hi(t){const e=t.toTimestamp();return new oi(e.seconds,e.nanoseconds)}function Wi(t){const e=new F(t.seconds,t.nanoseconds);return B.fromTimestamp(e)}function Gi(t,e){const n=(e.baseMutations||[]).map(e=>Fn(t.Gt,e));for(let s=0;s<e.mutations.length-1;++s){const t=e.mutations[s];if(s+1<e.mutations.length&&void 0!==e.mutations[s+1].transform){const n=e.mutations[s+1];t.updateTransforms=n.transform.fieldTransforms,e.mutations.splice(s+1,1),++s}}const i=e.mutations.map(e=>Fn(t.Gt,e)),r=F.fromMillis(e.localWriteTimeMs);return new Mi(e.batchId,r,n,i)}function Ki(t){const e=Wi(t.readTime),n=void 0!==t.lastLimboFreeSnapshotVersion?Wi(t.lastLimboFreeSnapshotVersion):B.min();let i;var r;return void 0!==t.query.documents?(b(1===(r=t.query).documents.length),i=ne(Yt(jn(r.documents[0])))):i=function(t){return ne(qn(t))}(t.query),new Fi(i,t.targetId,0,t.lastListenSequenceNumber,e,n,X.fromBase64String(t.resumeToken))}function Yi(t,e){const n=Hi(e.snapshotVersion),i=Hi(e.lastLimboFreeSnapshotVersion);let r;r=At(e.target)?Vn(t.Gt,e.target):Un(t.Gt,e.target);const s=e.resumeToken.toBase64();return new mi(e.targetId,Et(e.target),n,s,e.sequenceNumber,i,r)}function Xi(t){const e=qn({parent:t.parent,structuredQuery:t.structuredQuery});return"LAST"===t.limitType?ie(e,e.limit,"L"):e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qi{getBundleMetadata(t,e){return Ji(t).get(e).next(t=>{if(t)return{id:(e=t).bundleId,createTime:Wi(e.createTime),version:e.version};var e})}saveBundleMetadata(t,e){return Ji(t).put({bundleId:(n=e).id,createTime:Hi(kn(n.createTime)),version:n.version});var n}getNamedQuery(t,e){return Zi(t).get(e).next(t=>{if(t)return{name:(e=t).name,query:Xi(e.bundledQuery),readTime:Wi(e.readTime)};var e})}saveNamedQuery(t,e){return Zi(t).put(function(t){return{name:t.name,readTime:Hi(kn(t.readTime)),bundledQuery:t.bundledQuery}}(e))}}function Ji(t){return Pi(t,wi.store)}function Zi(t){return Pi(t,_i.store)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tr{constructor(){this.zt=new er}addToCollectionParentIndex(t,e){return this.zt.add(e),ki.resolve()}getCollectionParents(t,e){return ki.resolve(this.zt.getEntries(e))}}class er{constructor(){this.index={}}add(t){const e=t.lastSegment(),n=t.popLast(),i=this.index[e]||new Qe(H.comparator),r=!i.has(n);return this.index[e]=i.add(n),r}has(t){const e=t.lastSegment(),n=t.popLast(),i=this.index[e];return i&&i.has(n)}getEntries(t){return(this.index[t]||new Qe(H.comparator)).toArray()}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nr{constructor(){this.Ht=new er}addToCollectionParentIndex(t,e){if(!this.Ht.has(e)){const n=e.lastSegment(),i=e.popLast();t.addOnCommittedListener(()=>{this.Ht.add(e)});const r={collectionId:n,parent:ni(i)};return ir(t).put(r)}return ki.resolve()}getCollectionParents(t,e){const n=[],i=IDBKeyRange.bound([e,""],[$(e),""],!1,!0);return ir(t).Bt(i).next(t=>{for(const i of t){if(i.collectionId!==e)break;n.push(si(i.parent))}return n})}}function ir(t){return Pi(t,yi.store)}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rr={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0};class sr{constructor(t,e,n){this.cacheSizeCollectionThreshold=t,this.percentileToCollect=e,this.maximumSequenceNumbersToCollect=n}static withCacheSize(t){return new sr(t,sr.DEFAULT_COLLECTION_PERCENTILE,sr.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function or(t,e,n){const i=t.store(ui.store),r=t.store(li.store),s=[],o=IDBKeyRange.only(n.batchId);let a=0;const c=i.jt({range:o},(t,e,n)=>(a++,n.delete()));s.push(c.next(()=>{b(1===a)}));const u=[];for(const l of n.mutations){const t=li.key(e,l.key.path,n.batchId);s.push(r.delete(t)),u.push(l.key)}return ki.waitFor(s).next(()=>u)}function ar(t){if(!t)return 0;let e;if(t.document)e=t.document;else if(t.unknownDocument)e=t.unknownDocument;else{if(!t.noDocument)throw y();e=t.noDocument}return JSON.stringify(e).length}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */sr.DEFAULT_COLLECTION_PERCENTILE=10,sr.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,sr.DEFAULT=new sr(41943040,sr.DEFAULT_COLLECTION_PERCENTILE,sr.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),sr.DISABLED=new sr(-1,0,0);class cr{constructor(t,e,n,i){this.userId=t,this.k=e,this.Jt=n,this.referenceDelegate=i,this.Yt={}}static Xt(t,e,n,i){b(""!==t.uid);const r=t.isAuthenticated()?t.uid:"";return new cr(r,e,n,i)}checkEmpty(t){let e=!0;const n=IDBKeyRange.bound([this.userId,Number.NEGATIVE_INFINITY],[this.userId,Number.POSITIVE_INFINITY]);return lr(t).jt({index:ui.userMutationsIndex,range:n},(t,n,i)=>{e=!1,i.done()}).next(()=>e)}addMutationBatch(t,e,n,i){const r=hr(t),s=lr(t);return s.add({}).next(o=>{b("number"==typeof o);const a=new Mi(o,e,n,i),c=function(t,e,n){const i=n.baseMutations.map(e=>$n(t.Gt,e)),r=n.mutations.map(e=>$n(t.Gt,e));return new ui(e,n.batchId,n.localWriteTime.toMillis(),i,r)}(this.k,this.userId,a),u=[];let l=new Qe((t,e)=>P(t.canonicalString(),e.canonicalString()));for(const t of i){const e=li.key(this.userId,t.key.path,o);l=l.add(t.key.path.popLast()),u.push(s.put(c)),u.push(r.put(e,li.PLACEHOLDER))}return l.forEach(e=>{u.push(this.Jt.addToCollectionParentIndex(t,e))}),t.addOnCommittedListener(()=>{this.Yt[o]=a.keys()}),ki.waitFor(u).next(()=>a)})}lookupMutationBatch(t,e){return lr(t).get(e).next(t=>t?(b(t.userId===this.userId),Gi(this.k,t)):null)}Zt(t,e){return this.Yt[e]?ki.resolve(this.Yt[e]):this.lookupMutationBatch(t,e).next(t=>{if(t){const n=t.keys();return this.Yt[e]=n,n}return null})}getNextMutationBatchAfterBatchId(t,e){const n=e+1,i=IDBKeyRange.lowerBound([this.userId,n]);let r=null;return lr(t).jt({index:ui.userMutationsIndex,range:i},(t,e,i)=>{e.userId===this.userId&&(b(e.batchId>=n),r=Gi(this.k,e)),i.done()}).next(()=>r)}getHighestUnacknowledgedBatchId(t){const e=IDBKeyRange.upperBound([this.userId,Number.POSITIVE_INFINITY]);let n=-1;return lr(t).jt({index:ui.userMutationsIndex,range:e,reverse:!0},(t,e,i)=>{n=e.batchId,i.done()}).next(()=>n)}getAllMutationBatches(t){const e=IDBKeyRange.bound([this.userId,-1],[this.userId,Number.POSITIVE_INFINITY]);return lr(t).Bt(ui.userMutationsIndex,e).next(t=>t.map(t=>Gi(this.k,t)))}getAllMutationBatchesAffectingDocumentKey(t,e){const n=li.prefixForPath(this.userId,e.path),i=IDBKeyRange.lowerBound(n),r=[];return hr(t).jt({range:i},(n,i,s)=>{const[o,a,c]=n,u=si(a);if(o===this.userId&&e.path.isEqual(u))return lr(t).get(c).next(t=>{if(!t)throw y();b(t.userId===this.userId),r.push(Gi(this.k,t))});s.done()}).next(()=>r)}getAllMutationBatchesAffectingDocumentKeys(t,e){let n=new Qe(P);const i=[];return e.forEach(e=>{const r=li.prefixForPath(this.userId,e.path),s=IDBKeyRange.lowerBound(r),o=hr(t).jt({range:s},(t,i,r)=>{const[s,o,a]=t,c=si(o);s===this.userId&&e.path.isEqual(c)?n=n.add(a):r.done()});i.push(o)}),ki.waitFor(i).next(()=>this.te(t,n))}getAllMutationBatchesAffectingQuery(t,e){const n=e.path,i=n.length+1,r=li.prefixForPath(this.userId,n),s=IDBKeyRange.lowerBound(r);let o=new Qe(P);return hr(t).jt({range:s},(t,e,r)=>{const[s,a,c]=t,u=si(a);s===this.userId&&n.isPrefixOf(u)?u.length===i&&(o=o.add(c)):r.done()}).next(()=>this.te(t,o))}te(t,e){const n=[],i=[];return e.forEach(e=>{i.push(lr(t).get(e).next(t=>{if(null===t)throw y();b(t.userId===this.userId),n.push(Gi(this.k,t))}))}),ki.waitFor(i).next(()=>n)}removeMutationBatch(t,e){return or(t.Wt,this.userId,e).next(n=>(t.addOnCommittedListener(()=>{this.ee(e.batchId)}),ki.forEach(n,e=>this.referenceDelegate.markPotentiallyOrphaned(t,e))))}ee(t){delete this.Yt[t]}performConsistencyCheck(t){return this.checkEmpty(t).next(e=>{if(!e)return ki.resolve();const n=IDBKeyRange.lowerBound(li.prefixForUser(this.userId)),i=[];return hr(t).jt({range:n},(t,e,n)=>{if(t[0]===this.userId){const e=si(t[1]);i.push(e)}else n.done()}).next(()=>{b(0===i.length)})})}containsKey(t,e){return ur(t,this.userId,e)}ne(t){return dr(t).get(this.userId).next(t=>t||new ci(this.userId,-1,""))}}function ur(t,e,n){const i=li.prefixForPath(e,n.path),r=i[1],s=IDBKeyRange.lowerBound(i);let o=!1;return hr(t).jt({range:s,Kt:!0},(t,n,i)=>{const[s,a,c]=t;s===e&&a===r&&(o=!0),i.done()}).next(()=>o)}function lr(t){return Pi(t,ui.store)}function hr(t){return Pi(t,li.store)}function dr(t){return Pi(t,ci.store)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fr{constructor(t){this.se=t}next(){return this.se+=2,this.se}static ie(){return new fr(0)}static re(){return new fr(-1)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pr{constructor(t,e){this.referenceDelegate=t,this.k=e}allocateTargetId(t){return this.oe(t).next(e=>{const n=new fr(e.highestTargetId);return e.highestTargetId=n.next(),this.ce(t,e).next(()=>e.highestTargetId)})}getLastRemoteSnapshotVersion(t){return this.oe(t).next(t=>B.fromTimestamp(new F(t.lastRemoteSnapshotVersion.seconds,t.lastRemoteSnapshotVersion.nanoseconds)))}getHighestSequenceNumber(t){return this.oe(t).next(t=>t.highestListenSequenceNumber)}setTargetsMetadata(t,e,n){return this.oe(t).next(i=>(i.highestListenSequenceNumber=e,n&&(i.lastRemoteSnapshotVersion=n.toTimestamp()),e>i.highestListenSequenceNumber&&(i.highestListenSequenceNumber=e),this.ce(t,i)))}addTargetData(t,e){return this.ae(t,e).next(()=>this.oe(t).next(n=>(n.targetCount+=1,this.ue(e,n),this.ce(t,n))))}updateTargetData(t,e){return this.ae(t,e)}removeTargetData(t,e){return this.removeMatchingKeysForTargetId(t,e.targetId).next(()=>mr(t).delete(e.targetId)).next(()=>this.oe(t)).next(e=>(b(e.targetCount>0),e.targetCount-=1,this.ce(t,e)))}removeTargets(t,e,n){let i=0;const r=[];return mr(t).jt((s,o)=>{const a=Ki(o);a.sequenceNumber<=e&&null===n.get(a.targetId)&&(i++,r.push(this.removeTargetData(t,a)))}).next(()=>ki.waitFor(r)).next(()=>i)}forEachTarget(t,e){return mr(t).jt((t,n)=>{const i=Ki(n);e(i)})}oe(t){return gr(t).get(vi.key).next(t=>(b(null!==t),t))}ce(t,e){return gr(t).put(vi.key,e)}ae(t,e){return mr(t).put(Yi(this.k,e))}ue(t,e){let n=!1;return t.targetId>e.highestTargetId&&(e.highestTargetId=t.targetId,n=!0),t.sequenceNumber>e.highestListenSequenceNumber&&(e.highestListenSequenceNumber=t.sequenceNumber,n=!0),n}getTargetCount(t){return this.oe(t).next(t=>t.targetCount)}getTargetData(t,e){const n=Et(e),i=IDBKeyRange.bound([n,Number.NEGATIVE_INFINITY],[n,Number.POSITIVE_INFINITY]);let r=null;return mr(t).jt({range:i,index:mi.queryTargetsIndexName},(t,n,i)=>{const s=Ki(n);Ct(e,s.target)&&(r=s,i.done())}).next(()=>r)}addMatchingKeys(t,e,n){const i=[],r=vr(t);return e.forEach(e=>{const s=ni(e.path);i.push(r.put(new gi(n,s))),i.push(this.referenceDelegate.addReference(t,n,e))}),ki.waitFor(i)}removeMatchingKeys(t,e,n){const i=vr(t);return ki.forEach(e,e=>{const r=ni(e.path);return ki.waitFor([i.delete([n,r]),this.referenceDelegate.removeReference(t,n,e)])})}removeMatchingKeysForTargetId(t,e){const n=vr(t),i=IDBKeyRange.bound([e],[e+1],!1,!0);return n.delete(i)}getMatchingKeysForTargetId(t,e){const n=IDBKeyRange.bound([e],[e+1],!1,!0),i=vr(t);let r=an();return i.jt({range:n,Kt:!0},(t,e,n)=>{const i=si(t[1]),s=new at(i);r=r.add(s)}).next(()=>r)}containsKey(t,e){const n=ni(e.path),i=IDBKeyRange.bound([n],[$(n)],!1,!0);let r=0;return vr(t).jt({index:gi.documentTargetsIndex,Kt:!0,range:i},([t,e],n,i)=>{0!==t&&(r++,i.done())}).next(()=>r>0)}Et(t,e){return mr(t).get(e).next(t=>t?Ki(t):null)}}function mr(t){return Pi(t,mi.store)}function gr(t){return Pi(t,vi.store)}function vr(t){return Pi(t,gi.store)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function yr(t){if(t.code!==O.FAILED_PRECONDITION||t.message!==Ii)throw t;p("LocalStore","Unexpectedly lost primary lease")}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function br([t,e],[n,i]){const r=P(t,n);return 0===r?P(e,i):r}class wr{constructor(t){this.he=t,this.buffer=new Qe(br),this.le=0}fe(){return++this.le}de(t){const e=[t,this.fe()];if(this.buffer.size<this.he)this.buffer=this.buffer.add(e);else{const t=this.buffer.last();br(e,t)<0&&(this.buffer=this.buffer.delete(t).add(e))}}get maxValue(){return this.buffer.last()[0]}}class _r{constructor(t,e){this.garbageCollector=t,this.asyncQueue=e,this.we=!1,this._e=null}start(t){-1!==this.garbageCollector.params.cacheSizeCollectionThreshold&&this.me(t)}stop(){this._e&&(this._e.cancel(),this._e=null)}get started(){return null!==this._e}me(t){const e=this.we?3e5:6e4;p("LruGarbageCollector",`Garbage collection scheduled in ${e}ms`),this._e=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this._e=null,this.we=!0;try{await t.collectGarbage(this.garbageCollector)}catch(t){Ai(t)?p("LruGarbageCollector","Ignoring IndexedDB error during garbage collection: ",t):await yr(t)}await this.me(t)})}}class Or{constructor(t,e){this.ge=t,this.params=e}calculateTargetCount(t,e){return this.ge.ye(t).next(t=>Math.floor(e/100*t))}nthSequenceNumber(t,e){if(0===e)return ki.resolve(L.I);const n=new wr(e);return this.ge.forEachTarget(t,t=>n.de(t.sequenceNumber)).next(()=>this.ge.pe(t,t=>n.de(t))).next(()=>n.maxValue)}removeTargets(t,e,n){return this.ge.removeTargets(t,e,n)}removeOrphanedDocuments(t,e){return this.ge.removeOrphanedDocuments(t,e)}collect(t,e){return-1===this.params.cacheSizeCollectionThreshold?(p("LruGarbageCollector","Garbage collection skipped; disabled"),ki.resolve(rr)):this.getCacheSize(t).next(n=>n<this.params.cacheSizeCollectionThreshold?(p("LruGarbageCollector",`Garbage collection skipped; Cache size ${n} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),rr):this.Te(t,e))}getCacheSize(t){return this.ge.getCacheSize(t)}Te(t,e){let n,i,r,o,a,c,u;const l=Date.now();return this.calculateTargetCount(t,this.params.percentileToCollect).next(e=>(e>this.params.maximumSequenceNumbersToCollect?(p("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${e}`),i=this.params.maximumSequenceNumbersToCollect):i=e,o=Date.now(),this.nthSequenceNumber(t,i))).next(i=>(n=i,a=Date.now(),this.removeTargets(t,n,e))).next(e=>(r=e,c=Date.now(),this.removeOrphanedDocuments(t,n))).next(t=>(u=Date.now(),d()<=s["a"].DEBUG&&p("LruGarbageCollector",`LRU Garbage Collection\n\tCounted targets in ${o-l}ms\n\tDetermined least recently used ${i} in `+(a-o)+"ms\n"+`\tRemoved ${r} targets in `+(c-a)+"ms\n"+`\tRemoved ${t} documents in `+(u-c)+"ms\n"+`Total Duration: ${u-l}ms`),ki.resolve({didRun:!0,sequenceNumbersCollected:i,targetsRemoved:r,documentsRemoved:t})))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ir{constructor(t,e){this.db=t,this.garbageCollector=function(t,e){return new Or(t,e)}(this,e)}ye(t){const e=this.Ee(t);return this.db.getTargetCache().getTargetCount(t).next(t=>e.next(e=>t+e))}Ee(t){let e=0;return this.pe(t,t=>{e++}).next(()=>e)}forEachTarget(t,e){return this.db.getTargetCache().forEachTarget(t,e)}pe(t,e){return this.Ie(t,(t,n)=>e(n))}addReference(t,e,n){return Sr(t,n)}removeReference(t,e,n){return Sr(t,n)}removeTargets(t,e,n){return this.db.getTargetCache().removeTargets(t,e,n)}markPotentiallyOrphaned(t,e){return Sr(t,e)}Ae(t,e){return function(t,e){let n=!1;return dr(t).Qt(i=>ur(t,i,e).next(t=>(t&&(n=!0),ki.resolve(!t)))).next(()=>n)}(t,e)}removeOrphanedDocuments(t,e){const n=this.db.getRemoteDocumentCache().newChangeBuffer(),i=[];let r=0;return this.Ie(t,(s,o)=>{if(o<=e){const e=this.Ae(t,s).next(e=>{if(!e)return r++,n.getEntry(t,s).next(()=>(n.removeEntry(s),vr(t).delete([0,ni(s.path)])))});i.push(e)}}).next(()=>ki.waitFor(i)).next(()=>n.apply(t)).next(()=>r)}removeTarget(t,e){const n=e.withSequenceNumber(t.currentSequenceNumber);return this.db.getTargetCache().updateTargetData(t,n)}updateLimboDocument(t,e){return Sr(t,e)}Ie(t,e){const n=vr(t);let i,r=L.I;return n.jt({index:gi.documentTargetsIndex},([t,n],{path:s,sequenceNumber:o})=>{0===t?(r!==L.I&&e(new at(si(i)),r),r=o,i=s):r=L.I}).next(()=>{r!==L.I&&e(new at(si(i)),r)})}getCacheSize(t){return this.db.getRemoteDocumentCache().getSize(t)}}function Sr(t,e){return vr(t).put(function(t,e){return new gi(0,ni(t.path),e)}(e,t.currentSequenceNumber))}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kr{constructor(t,e){this.mapKeyFn=t,this.equalsFn=e,this.inner={}}get(t){const e=this.mapKeyFn(t),n=this.inner[e];if(void 0!==n)for(const[i,r]of n)if(this.equalsFn(i,t))return r}has(t){return void 0!==this.get(t)}set(t,e){const n=this.mapKeyFn(t),i=this.inner[n];if(void 0!==i){for(let n=0;n<i.length;n++)if(this.equalsFn(i[n][0],t))return void(i[n]=[t,e]);i.push([t,e])}else this.inner[n]=[[t,e]]}delete(t){const e=this.mapKeyFn(t),n=this.inner[e];if(void 0===n)return!1;for(let i=0;i<n.length;i++)if(this.equalsFn(n[i][0],t))return 1===n.length?delete this.inner[e]:n.splice(i,1),!0;return!1}forEach(t){U(this.inner,(e,n)=>{for(const[i,r]of n)t(i,r)})}isEmpty(){return q(this.inner)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tr{constructor(){this.changes=new kr(t=>t.toString(),(t,e)=>t.isEqual(e)),this.changesApplied=!1}getReadTime(t){const e=this.changes.get(t);return e?e.readTime:B.min()}addEntry(t,e){this.assertNotApplied(),this.changes.set(t.key,{document:t,readTime:e})}removeEntry(t,e=null){this.assertNotApplied(),this.changes.set(t,{document:St.newInvalidDocument(t),readTime:e})}getEntry(t,e){this.assertNotApplied();const n=this.changes.get(e);return void 0!==n?ki.resolve(n.document):this.getFromCache(t,e)}getEntries(t,e){return this.getAllFromCache(t,e)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Er{constructor(t,e){this.k=t,this.Jt=e}addEntry(t,e,n){return Ar(t).put(jr(e),n)}removeEntry(t,e){const n=Ar(t),i=jr(e);return n.delete(i)}updateMetadata(t,e){return this.getMetadata(t).next(n=>(n.byteSize+=e,this.Re(t,n)))}getEntry(t,e){return Ar(t).get(jr(e)).next(t=>this.be(e,t))}Pe(t,e){return Ar(t).get(jr(e)).next(t=>({document:this.be(e,t),size:ar(t)}))}getEntries(t,e){let n=tn();return this.ve(t,e,(t,e)=>{const i=this.be(t,e);n=n.insert(t,i)}).next(()=>n)}Ve(t,e){let n=tn(),i=new Ke(at.comparator);return this.ve(t,e,(t,e)=>{const r=this.be(t,e);n=n.insert(t,r),i=i.insert(t,ar(e))}).next(()=>({documents:n,Se:i}))}ve(t,e,n){if(e.isEmpty())return ki.resolve();const i=IDBKeyRange.bound(e.first().path.toArray(),e.last().path.toArray()),r=e.getIterator();let s=r.getNext();return Ar(t).jt({range:i},(t,e,i)=>{const o=at.fromSegments(t);for(;s&&at.comparator(s,o)<0;)n(s,null),s=r.getNext();s&&s.isEqual(o)&&(n(s,e),s=r.hasNext()?r.getNext():null),s?i.Lt(s.path.toArray()):i.done()}).next(()=>{for(;s;)n(s,null),s=r.hasNext()?r.getNext():null})}getDocumentsMatchingQuery(t,e,n){let i=tn();const r=e.path.length+1,s={};if(n.isEqual(B.min())){const t=e.path.toArray();s.range=IDBKeyRange.lowerBound(t)}else{const t=e.path.toArray(),i=qi(n);s.range=IDBKeyRange.lowerBound([t,i],!0),s.index=fi.collectionReadTimeIndex}return Ar(t).jt(s,(t,n,s)=>{if(t.length!==r)return;const o=Vi(this.k,n);e.path.isPrefixOf(o.key.path)?ae(e,o)&&(i=i.insert(o.key,o)):s.done()}).next(()=>i)}newChangeBuffer(t){return new xr(this,!!t&&t.trackRemovals)}getSize(t){return this.getMetadata(t).next(t=>t.byteSize)}getMetadata(t){return Cr(t).get(pi.key).next(t=>(b(!!t),t))}Re(t,e){return Cr(t).put(pi.key,e)}be(t,e){if(e){const t=Vi(this.k,e);if(!t.isNoDocument()||!t.version.isEqual(B.min()))return t}return St.newInvalidDocument(t)}}class xr extends Tr{constructor(t,e){super(),this.De=t,this.trackRemovals=e,this.Ce=new kr(t=>t.toString(),(t,e)=>t.isEqual(e))}applyChanges(t){const e=[];let n=0,i=new Qe((t,e)=>P(t.canonicalString(),e.canonicalString()));return this.changes.forEach((r,s)=>{const o=this.Ce.get(r);if(s.document.isValidDocument()){const a=Ui(this.De.k,s.document,this.getReadTime(r));i=i.add(r.path.popLast());const c=ar(a);n+=c-o,e.push(this.De.addEntry(t,r,a))}else if(n-=o,this.trackRemovals){const n=Ui(this.De.k,St.newNoDocument(r,B.min()),this.getReadTime(r));e.push(this.De.addEntry(t,r,n))}else e.push(this.De.removeEntry(t,r))}),i.forEach(n=>{e.push(this.De.Jt.addToCollectionParentIndex(t,n))}),e.push(this.De.updateMetadata(t,n)),ki.waitFor(e)}getFromCache(t,e){return this.De.Pe(t,e).next(t=>(this.Ce.set(e,t.size),t.document))}getAllFromCache(t,e){return this.De.Ve(t,e).next(({documents:t,Se:e})=>(e.forEach((t,e)=>{this.Ce.set(t,e)}),t))}}function Cr(t){return Pi(t,pi.store)}function Ar(t){return Pi(t,fi.store)}function jr(t){return t.path.toArray()}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rr{constructor(t){this.k=t}Nt(t,e,n,i){b(n<i&&n>=0&&i<=11);const r=new Ti("createOrUpgrade",e);n<1&&i>=1&&(function(t){t.createObjectStore(ai.store)}(t),function(t){t.createObjectStore(ci.store,{keyPath:ci.keyPath}),t.createObjectStore(ui.store,{keyPath:ui.keyPath,autoIncrement:!0}).createIndex(ui.userMutationsIndex,ui.userMutationsKeyPath,{unique:!0}),t.createObjectStore(li.store)}(t),Lr(t),function(t){t.createObjectStore(fi.store)}(t));let s=ki.resolve();return n<3&&i>=3&&(0!==n&&(function(t){t.deleteObjectStore(gi.store),t.deleteObjectStore(mi.store),t.deleteObjectStore(vi.store)}(t),Lr(t)),s=s.next(()=>function(t){const e=t.store(vi.store),n=new vi(0,0,B.min().toTimestamp(),0);return e.put(vi.key,n)}(r))),n<4&&i>=4&&(0!==n&&(s=s.next(()=>function(t,e){return e.store(ui.store).Bt().next(n=>{t.deleteObjectStore(ui.store),t.createObjectStore(ui.store,{keyPath:ui.keyPath,autoIncrement:!0}).createIndex(ui.userMutationsIndex,ui.userMutationsKeyPath,{unique:!0});const i=e.store(ui.store),r=n.map(t=>i.put(t));return ki.waitFor(r)})}(t,r))),s=s.next(()=>{!function(t){t.createObjectStore(bi.store,{keyPath:bi.keyPath})}(t)})),n<5&&i>=5&&(s=s.next(()=>this.Ne(r))),n<6&&i>=6&&(s=s.next(()=>(function(t){t.createObjectStore(pi.store)}(t),this.ke(r)))),n<7&&i>=7&&(s=s.next(()=>this.xe(r))),n<8&&i>=8&&(s=s.next(()=>this.$e(t,r))),n<9&&i>=9&&(s=s.next(()=>{!function(t){t.objectStoreNames.contains("remoteDocumentChanges")&&t.deleteObjectStore("remoteDocumentChanges")}(t),function(t){const e=t.objectStore(fi.store);e.createIndex(fi.readTimeIndex,fi.readTimeIndexPath,{unique:!1}),e.createIndex(fi.collectionReadTimeIndex,fi.collectionReadTimeIndexPath,{unique:!1})}(e)})),n<10&&i>=10&&(s=s.next(()=>this.Oe(r))),n<11&&i>=11&&(s=s.next(()=>{!function(t){t.createObjectStore(wi.store,{keyPath:wi.keyPath})}(t),function(t){t.createObjectStore(_i.store,{keyPath:_i.keyPath})}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t)})),s}ke(t){let e=0;return t.store(fi.store).jt((t,n)=>{e+=ar(n)}).next(()=>{const n=new pi(e);return t.store(pi.store).put(pi.key,n)})}Ne(t){const e=t.store(ci.store),n=t.store(ui.store);return e.Bt().next(e=>ki.forEach(e,e=>{const i=IDBKeyRange.bound([e.userId,-1],[e.userId,e.lastAcknowledgedBatchId]);return n.Bt(ui.userMutationsIndex,i).next(n=>ki.forEach(n,n=>{b(n.userId===e.userId);const i=Gi(this.k,n);return or(t,e.userId,i).next(()=>{})}))}))}xe(t){const e=t.store(gi.store),n=t.store(fi.store);return t.store(vi.store).get(vi.key).next(t=>{const i=[];return n.jt((n,r)=>{const s=new H(n),o=function(t){return[0,ni(t)]}(s);i.push(e.get(o).next(n=>n?ki.resolve():(n=>e.put(new gi(0,ni(n),t.highestListenSequenceNumber)))(s)))}).next(()=>ki.waitFor(i))})}$e(t,e){t.createObjectStore(yi.store,{keyPath:yi.keyPath});const n=e.store(yi.store),i=new er,r=t=>{if(i.add(t)){const e=t.lastSegment(),i=t.popLast();return n.put({collectionId:e,parent:ni(i)})}};return e.store(fi.store).jt({Kt:!0},(t,e)=>{const n=new H(t);return r(n.popLast())}).next(()=>e.store(li.store).jt({Kt:!0},([t,e,n],i)=>{const s=si(e);return r(s.popLast())}))}Oe(t){const e=t.store(mi.store);return e.jt((t,n)=>{const i=Ki(n),r=Yi(this.k,i);return e.put(r)})}}function Lr(t){t.createObjectStore(gi.store,{keyPath:gi.keyPath}).createIndex(gi.documentTargetsIndex,gi.documentTargetsKeyPath,{unique:!0}),t.createObjectStore(mi.store,{keyPath:mi.keyPath}).createIndex(mi.queryTargetsIndexName,mi.queryTargetsKeyPath,{unique:!0}),t.createObjectStore(vi.store)}const Nr="Failed to obtain exclusive access to the persistence layer. To allow shared access, multi-tab synchronization has to be enabled in all tabs. If you are using `experimentalForceOwningTab:true`, make sure that only one tab has persistence enabled at any given time.";class Dr{constructor(t,e,n,i,r,s,o,a,c,u){if(this.allowTabSynchronization=t,this.persistenceKey=e,this.clientId=n,this.Me=r,this.window=s,this.document=o,this.Fe=c,this.Le=u,this.Be=null,this.Ue=!1,this.isPrimary=!1,this.networkEnabled=!0,this.qe=null,this.inForeground=!1,this.Ke=null,this.je=null,this.Qe=Number.NEGATIVE_INFINITY,this.We=t=>Promise.resolve(),!Dr.Pt())throw new I(O.UNIMPLEMENTED,"This platform is either missing IndexedDB or is known to have an incomplete implementation. Offline persistence has been disabled.");this.referenceDelegate=new Ir(this,i),this.Ge=e+"main",this.k=new Bi(a),this.ze=new Ei(this.Ge,11,new Rr(this.k)),this.He=new pr(this.referenceDelegate,this.k),this.Jt=new nr,this.Je=function(t,e){return new Er(t,e)}(this.k,this.Jt),this.Ye=new Qi,this.window&&this.window.localStorage?this.Xe=this.window.localStorage:(this.Xe=null,!1===u&&m("IndexedDbPersistence","LocalStorage is unavailable. As a result, persistence may not work reliably. In particular enablePersistence() could fail immediately after refreshing the page."))}start(){return this.Ze().then(()=>{if(!this.isPrimary&&!this.allowTabSynchronization)throw new I(O.FAILED_PRECONDITION,Nr);return this.tn(),this.en(),this.nn(),this.runTransaction("getHighestListenSequenceNumber","readonly",t=>this.He.getHighestSequenceNumber(t))}).then(t=>{this.Be=new L(t,this.Fe)}).then(()=>{this.Ue=!0}).catch(t=>(this.ze&&this.ze.close(),Promise.reject(t)))}sn(t){return this.We=async e=>{if(this.started)return t(e)},t(this.isPrimary)}setDatabaseDeletedListener(t){this.ze.xt(async e=>{null===e.newVersion&&await t()})}setNetworkEnabled(t){this.networkEnabled!==t&&(this.networkEnabled=t,this.Me.enqueueAndForget(async()=>{this.started&&await this.Ze()}))}Ze(){return this.runTransaction("updateClientMetadataAndTryBecomePrimary","readwrite",t=>Mr(t).put(new bi(this.clientId,Date.now(),this.networkEnabled,this.inForeground)).next(()=>{if(this.isPrimary)return this.rn(t).next(t=>{t||(this.isPrimary=!1,this.Me.enqueueRetryable(()=>this.We(!1)))})}).next(()=>this.on(t)).next(e=>this.isPrimary&&!e?this.cn(t).next(()=>!1):!!e&&this.an(t).next(()=>!0))).catch(t=>{if(Ai(t))return p("IndexedDbPersistence","Failed to extend owner lease: ",t),this.isPrimary;if(!this.allowTabSynchronization)throw t;return p("IndexedDbPersistence","Releasing owner lease after error during lease refresh",t),!1}).then(t=>{this.isPrimary!==t&&this.Me.enqueueRetryable(()=>this.We(t)),this.isPrimary=t})}rn(t){return Pr(t).get(ai.key).next(t=>ki.resolve(this.un(t)))}hn(t){return Mr(t).delete(this.clientId)}async ln(){if(this.isPrimary&&!this.fn(this.Qe,18e5)){this.Qe=Date.now();const t=await this.runTransaction("maybeGarbageCollectMultiClientState","readwrite-primary",t=>{const e=Pi(t,bi.store);return e.Bt().next(t=>{const n=this.dn(t,18e5),i=t.filter(t=>-1===n.indexOf(t));return ki.forEach(i,t=>e.delete(t.clientId)).next(()=>i)})}).catch(()=>[]);if(this.Xe)for(const e of t)this.Xe.removeItem(this.wn(e.clientId))}}nn(){this.je=this.Me.enqueueAfterDelay("client_metadata_refresh",4e3,()=>this.Ze().then(()=>this.ln()).then(()=>this.nn()))}un(t){return!!t&&t.ownerId===this.clientId}on(t){return this.Le?ki.resolve(!0):Pr(t).get(ai.key).next(e=>{if(null!==e&&this.fn(e.leaseTimestampMs,5e3)&&!this._n(e.ownerId)){if(this.un(e)&&this.networkEnabled)return!0;if(!this.un(e)){if(!e.allowTabSynchronization)throw new I(O.FAILED_PRECONDITION,Nr);return!1}}return!(!this.networkEnabled||!this.inForeground)||Mr(t).Bt().next(t=>void 0===this.dn(t,5e3).find(t=>{if(this.clientId!==t.clientId){const e=!this.networkEnabled&&t.networkEnabled,n=!this.inForeground&&t.inForeground,i=this.networkEnabled===t.networkEnabled;if(e||n&&i)return!0}return!1}))}).next(t=>(this.isPrimary!==t&&p("IndexedDbPersistence",`Client ${t?"is":"is not"} eligible for a primary lease.`),t))}async shutdown(){this.Ue=!1,this.mn(),this.je&&(this.je.cancel(),this.je=null),this.gn(),this.yn(),await this.ze.runTransaction("shutdown","readwrite",[ai.store,bi.store],t=>{const e=new Di(t,L.I);return this.cn(e).next(()=>this.hn(e))}),this.ze.close(),this.pn()}dn(t,e){return t.filter(t=>this.fn(t.updateTimeMs,e)&&!this._n(t.clientId))}Tn(){return this.runTransaction("getActiveClients","readonly",t=>Mr(t).Bt().next(t=>this.dn(t,18e5).map(t=>t.clientId)))}get started(){return this.Ue}getMutationQueue(t){return cr.Xt(t,this.k,this.Jt,this.referenceDelegate)}getTargetCache(){return this.He}getRemoteDocumentCache(){return this.Je}getIndexManager(){return this.Jt}getBundleCache(){return this.Ye}runTransaction(t,e,n){p("IndexedDbPersistence","Starting transaction:",t);const i="readonly"===e?"readonly":"readwrite";let r;return this.ze.runTransaction(t,i,Oi,i=>(r=new Di(i,this.Be?this.Be.next():L.I),"readwrite-primary"===e?this.rn(r).next(t=>!!t||this.on(r)).next(e=>{if(!e)throw m(`Failed to obtain primary lease for action '${t}'.`),this.isPrimary=!1,this.Me.enqueueRetryable(()=>this.We(!1)),new I(O.FAILED_PRECONDITION,Ii);return n(r)}).next(t=>this.an(r).next(()=>t)):this.En(r).next(()=>n(r)))).then(t=>(r.raiseOnCommittedEvent(),t))}En(t){return Pr(t).get(ai.key).next(t=>{if(null!==t&&this.fn(t.leaseTimestampMs,5e3)&&!this._n(t.ownerId)&&!this.un(t)&&!(this.Le||this.allowTabSynchronization&&t.allowTabSynchronization))throw new I(O.FAILED_PRECONDITION,Nr)})}an(t){const e=new ai(this.clientId,this.allowTabSynchronization,Date.now());return Pr(t).put(ai.key,e)}static Pt(){return Ei.Pt()}cn(t){const e=Pr(t);return e.get(ai.key).next(t=>this.un(t)?(p("IndexedDbPersistence","Releasing primary lease."),e.delete(ai.key)):ki.resolve())}fn(t,e){const n=Date.now();return!(t<n-e)&&(!(t>n)||(m(`Detected an update time that is in the future: ${t} > ${n}`),!1))}tn(){null!==this.document&&"function"==typeof this.document.addEventListener&&(this.Ke=()=>{this.Me.enqueueAndForget(()=>(this.inForeground="visible"===this.document.visibilityState,this.Ze()))},this.document.addEventListener("visibilitychange",this.Ke),this.inForeground="visible"===this.document.visibilityState)}gn(){this.Ke&&(this.document.removeEventListener("visibilitychange",this.Ke),this.Ke=null)}en(){var t;"function"==typeof(null===(t=this.window)||void 0===t?void 0:t.addEventListener)&&(this.qe=()=>{this.mn(),Object(o["v"])()&&navigator.appVersion.match(/Version\/1[45]/)&&this.Me.enterRestrictedMode(!0),this.Me.enqueueAndForget(()=>this.shutdown())},this.window.addEventListener("pagehide",this.qe))}yn(){this.qe&&(this.window.removeEventListener("pagehide",this.qe),this.qe=null)}_n(t){var e;try{const n=null!==(null===(e=this.Xe)||void 0===e?void 0:e.getItem(this.wn(t)));return p("IndexedDbPersistence",`Client '${t}' ${n?"is":"is not"} zombied in LocalStorage`),n}catch(t){return m("IndexedDbPersistence","Failed to get zombied client id.",t),!1}}mn(){if(this.Xe)try{this.Xe.setItem(this.wn(this.clientId),String(Date.now()))}catch(t){m("Failed to set zombie client id.",t)}}pn(){if(this.Xe)try{this.Xe.removeItem(this.wn(this.clientId))}catch(t){}}wn(t){return`firestore_zombie_${this.persistenceKey}_${t}`}}function Pr(t){return Pi(t,ai.store)}function Mr(t){return Pi(t,bi.store)}function $r(t,e){let n=t.projectId;return t.isDefaultDatabase||(n+="."+t.database),"firestore/"+e+"/"+n+"/"
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}class Fr{constructor(t,e){this.progress=t,this.In=e}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Br{constructor(t,e,n){this.Je=t,this.An=e,this.Jt=n}Rn(t,e){return this.An.getAllMutationBatchesAffectingDocumentKey(t,e).next(n=>this.bn(t,e,n))}bn(t,e,n){return this.Je.getEntry(t,e).next(t=>{for(const e of n)e.applyToLocalView(t);return t})}Pn(t,e){t.forEach((t,n)=>{for(const i of e)i.applyToLocalView(n)})}vn(t,e){return this.Je.getEntries(t,e).next(e=>this.Vn(t,e).next(()=>e))}Vn(t,e){return this.An.getAllMutationBatchesAffectingDocumentKeys(t,e).next(t=>this.Pn(e,t))}getDocumentsMatchingQuery(t,e,n){return function(t){return at.isDocumentKey(t.path)&&null===t.collectionGroup&&0===t.filters.length}(e)?this.Sn(t,e.path):te(e)?this.Dn(t,e,n):this.Cn(t,e,n)}Sn(t,e){return this.Rn(t,new at(e)).next(t=>{let e=nn();return t.isFoundDocument()&&(e=e.insert(t.key,t)),e})}Dn(t,e,n){const i=e.collectionGroup;let r=nn();return this.Jt.getCollectionParents(t,i).next(s=>ki.forEach(s,s=>{const o=function(t,e){return new Gt(e,null,t.explicitOrderBy.slice(),t.filters.slice(),t.limit,t.limitType,t.startAt,t.endAt)}(e,s.child(i));return this.Cn(t,o,n).next(t=>{t.forEach((t,e)=>{r=r.insert(t,e)})})}).next(()=>r))}Cn(t,e,n){let i,r;return this.Je.getDocumentsMatchingQuery(t,e,n).next(n=>(i=n,this.An.getAllMutationBatchesAffectingQuery(t,e))).next(e=>(r=e,this.Nn(t,r,i).next(t=>{i=t;for(const e of r)for(const t of e.mutations){const n=t.key;let r=i.get(n);null==r&&(r=St.newInvalidDocument(n),i=i.insert(n,r)),Re(t,r,e.localWriteTime),r.isFoundDocument()||(i=i.remove(n))}}))).next(()=>(i.forEach((t,n)=>{ae(e,n)||(i=i.remove(t))}),i))}Nn(t,e,n){let i=an();for(const s of e)for(const t of s.mutations)t instanceof Me&&null===n.get(t.key)&&(i=i.add(t.key));let r=n;return this.Je.getEntries(t,i).next(t=>(t.forEach((t,e)=>{e.isFoundDocument()&&(r=r.insert(t,e))}),r))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vr{constructor(t,e,n,i){this.targetId=t,this.fromCache=e,this.kn=n,this.xn=i}static $n(t,e){let n=an(),i=an();for(const r of e.docChanges)switch(r.type){case 0:n=n.add(r.doc.key);break;case 1:i=i.add(r.doc.key)}return new Vr(t,e.fromCache,n,i)}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ur{On(t){this.Mn=t}getDocumentsMatchingQuery(t,e,n,i){return function(t){return 0===t.filters.length&&null===t.limit&&null==t.startAt&&null==t.endAt&&(0===t.explicitOrderBy.length||1===t.explicitOrderBy.length&&t.explicitOrderBy[0].field.isKeyField())}(e)||n.isEqual(B.min())?this.Fn(t,e):this.Mn.vn(t,i).next(r=>{const o=this.Ln(e,r);return(Xt(e)||Qt(e))&&this.Bn(e.limitType,o,i,n)?this.Fn(t,e):(d()<=s["a"].DEBUG&&p("QueryEngine","Re-using previous result from %s to execute query: %s",n.toString(),oe(e)),this.Mn.getDocumentsMatchingQuery(t,e,n).next(t=>(o.forEach(e=>{t=t.insert(e.key,e)}),t)))})}Ln(t,e){let n=new Qe(ce(t));return e.forEach((e,i)=>{ae(t,i)&&(n=n.add(i))}),n}Bn(t,e,n,i){if(n.size!==e.size)return!0;const r="F"===t?e.last():e.first();return!!r&&(r.hasPendingWrites||r.version.compareTo(i)>0)}Fn(t,e){return d()<=s["a"].DEBUG&&p("QueryEngine","Using full collection scan to execute query:",oe(e)),this.Mn.getDocumentsMatchingQuery(t,e,B.min())}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qr{constructor(t,e,n,i){this.persistence=t,this.Un=e,this.k=i,this.qn=new Ke(P),this.Kn=new kr(t=>Et(t),Ct),this.jn=B.min(),this.An=t.getMutationQueue(n),this.Qn=t.getRemoteDocumentCache(),this.He=t.getTargetCache(),this.Wn=new Br(this.Qn,this.An,this.persistence.getIndexManager()),this.Ye=t.getBundleCache(),this.Un.On(this.Wn)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",e=>t.collect(e,this.qn))}}function zr(t,e,n,i){return new qr(t,e,n,i)}async function Hr(t,e){const n=_(t);let i=n.An,r=n.Wn;const s=await n.persistence.runTransaction("Handle user change","readonly",t=>{let s;return n.An.getAllMutationBatches(t).next(o=>(s=o,i=n.persistence.getMutationQueue(e),r=new Br(n.Qn,i,n.persistence.getIndexManager()),i.getAllMutationBatches(t))).next(e=>{const n=[],i=[];let o=an();for(const t of s){n.push(t.batchId);for(const e of t.mutations)o=o.add(e.key)}for(const t of e){i.push(t.batchId);for(const e of t.mutations)o=o.add(e.key)}return r.vn(t,o).next(t=>({Gn:t,removedBatchIds:n,addedBatchIds:i}))})});return n.An=i,n.Wn=r,n.Un.On(n.Wn),s}function Wr(t,e){const n=_(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",t=>{const i=e.batch.keys(),r=n.Qn.newChangeBuffer({trackRemovals:!0});return function(t,e,n,i){const r=n.batch,s=r.keys();let o=ki.resolve();return s.forEach(t=>{o=o.next(()=>i.getEntry(e,t)).next(e=>{const s=n.docVersions.get(t);b(null!==s),e.version.compareTo(s)<0&&(r.applyToRemoteDocument(e,n),e.isValidDocument()&&i.addEntry(e,n.commitVersion))})}),o.next(()=>t.An.removeMutationBatch(e,r))}(n,t,e,r).next(()=>r.apply(t)).next(()=>n.An.performConsistencyCheck(t)).next(()=>n.Wn.vn(t,i))})}function Gr(t){const e=_(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.He.getLastRemoteSnapshotVersion(t))}function Kr(t,e){const n=_(t),i=e.snapshotVersion;let r=n.qn;return n.persistence.runTransaction("Apply remote event","readwrite-primary",t=>{const s=n.Qn.newChangeBuffer({trackRemovals:!0});r=n.qn;const o=[];e.targetChanges.forEach((s,a)=>{const c=r.get(a);if(!c)return;o.push(n.He.removeMatchingKeys(t,s.removedDocuments,a).next(()=>n.He.addMatchingKeys(t,s.addedDocuments,a)));let u=c.withSequenceNumber(t.currentSequenceNumber);e.targetMismatches.has(a)?u=u.withResumeToken(X.EMPTY_BYTE_STRING,B.min()).withLastLimboFreeSnapshotVersion(B.min()):s.resumeToken.approximateByteSize()>0&&(u=u.withResumeToken(s.resumeToken,i)),r=r.insert(a,u),function(t,e,n){return 0===t.resumeToken.approximateByteSize()||(e.snapshotVersion.toMicroseconds()-t.snapshotVersion.toMicroseconds()>=3e8||n.addedDocuments.size+n.modifiedDocuments.size+n.removedDocuments.size>0)}(c,u,s)&&o.push(n.He.updateTargetData(t,u))});let a=tn();if(e.documentUpdates.forEach((i,r)=>{e.resolvedLimboDocuments.has(i)&&o.push(n.persistence.referenceDelegate.updateLimboDocument(t,i))}),o.push(Yr(t,s,e.documentUpdates,i,void 0).next(t=>{a=t})),!i.isEqual(B.min())){const e=n.He.getLastRemoteSnapshotVersion(t).next(e=>n.He.setTargetsMetadata(t,t.currentSequenceNumber,i));o.push(e)}return ki.waitFor(o).next(()=>s.apply(t)).next(()=>n.Wn.Vn(t,a)).next(()=>a)}).then(t=>(n.qn=r,t))}function Yr(t,e,n,i,r){let s=an();return n.forEach(t=>s=s.add(t)),e.getEntries(t,s).next(t=>{let s=tn();return n.forEach((n,o)=>{const a=t.get(n),c=(null==r?void 0:r.get(n))||i;o.isNoDocument()&&o.version.isEqual(B.min())?(e.removeEntry(n,c),s=s.insert(n,o)):!a.isValidDocument()||o.version.compareTo(a.version)>0||0===o.version.compareTo(a.version)&&a.hasPendingWrites?(e.addEntry(o,c),s=s.insert(n,o)):p("LocalStore","Ignoring outdated watch update for ",n,". Current version:",a.version," Watch version:",o.version)}),s})}function Xr(t,e){const n=_(t);return n.persistence.runTransaction("Get next mutation batch","readonly",t=>(void 0===e&&(e=-1),n.An.getNextMutationBatchAfterBatchId(t,e)))}function Qr(t,e){const n=_(t);return n.persistence.runTransaction("Allocate target","readwrite",t=>{let i;return n.He.getTargetData(t,e).next(r=>r?(i=r,ki.resolve(i)):n.He.allocateTargetId(t).next(r=>(i=new Fi(e,r,0,t.currentSequenceNumber),n.He.addTargetData(t,i).next(()=>i))))}).then(t=>{const i=n.qn.get(t.targetId);return(null===i||t.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.qn=n.qn.insert(t.targetId,t),n.Kn.set(e,t.targetId)),t})}async function Jr(t,e,n){const i=_(t),r=i.qn.get(e),s=n?"readwrite":"readwrite-primary";try{n||await i.persistence.runTransaction("Release target",s,t=>i.persistence.referenceDelegate.removeTarget(t,r))}catch(t){if(!Ai(t))throw t;p("LocalStore",`Failed to update sequence numbers for target ${e}: ${t}`)}i.qn=i.qn.remove(e),i.Kn.delete(r.target)}function Zr(t,e,n){const i=_(t);let r=B.min(),s=an();return i.persistence.runTransaction("Execute query","readonly",t=>function(t,e,n){const i=_(t),r=i.Kn.get(n);return void 0!==r?ki.resolve(i.qn.get(r)):i.He.getTargetData(e,n)}(i,t,ne(e)).next(e=>{if(e)return r=e.lastLimboFreeSnapshotVersion,i.He.getMatchingKeysForTargetId(t,e.targetId).next(t=>{s=t})}).next(()=>i.Un.getDocumentsMatchingQuery(t,e,n?r:B.min(),n?s:an())).next(t=>({documents:t,zn:s})))}function ts(t,e){const n=_(t),i=_(n.He),r=n.qn.get(e);return r?Promise.resolve(r.target):n.persistence.runTransaction("Get target data","readonly",t=>i.Et(t,e).next(t=>t?t.target:null))}function es(t){const e=_(t);return e.persistence.runTransaction("Get new document changes","readonly",t=>function(t,e,n){const i=_(t);let r=tn(),s=qi(n);const o=Ar(e),a=IDBKeyRange.lowerBound(s,!0);return o.jt({index:fi.readTimeIndex,range:a},(t,e)=>{const n=Vi(i.k,e);r=r.insert(n.key,n),s=e.readTime}).next(()=>({In:r,readTime:zi(s)}))}(e.Qn,t,e.jn)).then(({In:t,readTime:n})=>(e.jn=n,t))}async function ns(t){const e=_(t);return e.persistence.runTransaction("Synchronize last document change read time","readonly",t=>function(t){const e=Ar(t);let n=B.min();return e.jt({index:fi.readTimeIndex,reverse:!0},(t,e,i)=>{e.readTime&&(n=zi(e.readTime)),i.done()}).next(()=>n)}(t)).then(t=>{e.jn=t})}async function is(t,e,n,i){const r=_(t);let s=an(),o=tn(),a=sn();for(const l of n){const t=e.Hn(l.metadata.name);l.document&&(s=s.add(t)),o=o.insert(t,e.Jn(l)),a=a.insert(t,e.Yn(l.metadata.readTime))}const c=r.Qn.newChangeBuffer({trackRemovals:!0}),u=await Qr(r,function(t){return ne(Yt(H.fromString("__bundle__/docs/"+t)))}(i));return r.persistence.runTransaction("Apply bundle documents","readwrite",t=>Yr(t,c,o,B.min(),a).next(e=>(c.apply(t),e)).next(e=>r.He.removeMatchingKeysForTargetId(t,u.targetId).next(()=>r.He.addMatchingKeys(t,s,u.targetId)).next(()=>r.Wn.Vn(t,e)).next(()=>e)))}async function rs(t,e,n=an()){const i=await Qr(t,ne(Xi(e.bundledQuery))),r=_(t);return r.persistence.runTransaction("Save named query","readwrite",t=>{const s=kn(e.readTime);if(i.snapshotVersion.compareTo(s)>=0)return r.Ye.saveNamedQuery(t,e);const o=i.withResumeToken(X.EMPTY_BYTE_STRING,s);return r.qn=r.qn.insert(o.targetId,o),r.He.updateTargetData(t,o).next(()=>r.He.removeMatchingKeysForTargetId(t,i.targetId)).next(()=>r.He.addMatchingKeys(t,n,i.targetId)).next(()=>r.Ye.saveNamedQuery(t,e))})}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ss{constructor(t){this.k=t,this.Xn=new Map,this.Zn=new Map}getBundleMetadata(t,e){return ki.resolve(this.Xn.get(e))}saveBundleMetadata(t,e){var n;return this.Xn.set(e.id,{id:(n=e).id,version:n.version,createTime:kn(n.createTime)}),ki.resolve()}getNamedQuery(t,e){return ki.resolve(this.Zn.get(e))}saveNamedQuery(t,e){return this.Zn.set(e.name,function(t){return{name:t.name,query:Xi(t.bundledQuery),readTime:kn(t.readTime)}}(e)),ki.resolve()}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class os{constructor(){this.ts=new Qe(as.es),this.ns=new Qe(as.ss)}isEmpty(){return this.ts.isEmpty()}addReference(t,e){const n=new as(t,e);this.ts=this.ts.add(n),this.ns=this.ns.add(n)}rs(t,e){t.forEach(t=>this.addReference(t,e))}removeReference(t,e){this.os(new as(t,e))}cs(t,e){t.forEach(t=>this.removeReference(t,e))}us(t){const e=new at(new H([])),n=new as(e,t),i=new as(e,t+1),r=[];return this.ns.forEachInRange([n,i],t=>{this.os(t),r.push(t.key)}),r}hs(){this.ts.forEach(t=>this.os(t))}os(t){this.ts=this.ts.delete(t),this.ns=this.ns.delete(t)}ls(t){const e=new at(new H([])),n=new as(e,t),i=new as(e,t+1);let r=an();return this.ns.forEachInRange([n,i],t=>{r=r.add(t.key)}),r}containsKey(t){const e=new as(t,0),n=this.ts.firstAfterOrEqual(e);return null!==n&&t.isEqual(n.key)}}class as{constructor(t,e){this.key=t,this.fs=e}static es(t,e){return at.comparator(t.key,e.key)||P(t.fs,e.fs)}static ss(t,e){return P(t.fs,e.fs)||at.comparator(t.key,e.key)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cs{constructor(t,e){this.Jt=t,this.referenceDelegate=e,this.An=[],this.ds=1,this.ws=new Qe(as.es)}checkEmpty(t){return ki.resolve(0===this.An.length)}addMutationBatch(t,e,n,i){const r=this.ds;this.ds++,this.An.length>0&&this.An[this.An.length-1];const s=new Mi(r,e,n,i);this.An.push(s);for(const o of i)this.ws=this.ws.add(new as(o.key,r)),this.Jt.addToCollectionParentIndex(t,o.key.path.popLast());return ki.resolve(s)}lookupMutationBatch(t,e){return ki.resolve(this._s(e))}getNextMutationBatchAfterBatchId(t,e){const n=e+1,i=this.gs(n),r=i<0?0:i;return ki.resolve(this.An.length>r?this.An[r]:null)}getHighestUnacknowledgedBatchId(){return ki.resolve(0===this.An.length?-1:this.ds-1)}getAllMutationBatches(t){return ki.resolve(this.An.slice())}getAllMutationBatchesAffectingDocumentKey(t,e){const n=new as(e,0),i=new as(e,Number.POSITIVE_INFINITY),r=[];return this.ws.forEachInRange([n,i],t=>{const e=this._s(t.fs);r.push(e)}),ki.resolve(r)}getAllMutationBatchesAffectingDocumentKeys(t,e){let n=new Qe(P);return e.forEach(t=>{const e=new as(t,0),i=new as(t,Number.POSITIVE_INFINITY);this.ws.forEachInRange([e,i],t=>{n=n.add(t.fs)})}),ki.resolve(this.ys(n))}getAllMutationBatchesAffectingQuery(t,e){const n=e.path,i=n.length+1;let r=n;at.isDocumentKey(r)||(r=r.child(""));const s=new as(new at(r),0);let o=new Qe(P);return this.ws.forEachWhile(t=>{const e=t.key.path;return!!n.isPrefixOf(e)&&(e.length===i&&(o=o.add(t.fs)),!0)},s),ki.resolve(this.ys(o))}ys(t){const e=[];return t.forEach(t=>{const n=this._s(t);null!==n&&e.push(n)}),e}removeMutationBatch(t,e){b(0===this.ps(e.batchId,"removed")),this.An.shift();let n=this.ws;return ki.forEach(e.mutations,i=>{const r=new as(i.key,e.batchId);return n=n.delete(r),this.referenceDelegate.markPotentiallyOrphaned(t,i.key)}).next(()=>{this.ws=n})}ee(t){}containsKey(t,e){const n=new as(e,0),i=this.ws.firstAfterOrEqual(n);return ki.resolve(e.isEqual(i&&i.key))}performConsistencyCheck(t){return this.An.length,ki.resolve()}ps(t,e){return this.gs(t)}gs(t){return 0===this.An.length?0:t-this.An[0].batchId}_s(t){const e=this.gs(t);return e<0||e>=this.An.length?null:this.An[e]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class us{constructor(t,e){this.Jt=t,this.Ts=e,this.docs=new Ke(at.comparator),this.size=0}addEntry(t,e,n){const i=e.key,r=this.docs.get(i),s=r?r.size:0,o=this.Ts(e);return this.docs=this.docs.insert(i,{document:e.mutableCopy(),size:o,readTime:n}),this.size+=o-s,this.Jt.addToCollectionParentIndex(t,i.path.popLast())}removeEntry(t){const e=this.docs.get(t);e&&(this.docs=this.docs.remove(t),this.size-=e.size)}getEntry(t,e){const n=this.docs.get(e);return ki.resolve(n?n.document.mutableCopy():St.newInvalidDocument(e))}getEntries(t,e){let n=tn();return e.forEach(t=>{const e=this.docs.get(t);n=n.insert(t,e?e.document.mutableCopy():St.newInvalidDocument(t))}),ki.resolve(n)}getDocumentsMatchingQuery(t,e,n){let i=tn();const r=new at(e.path.child("")),s=this.docs.getIteratorFrom(r);for(;s.hasNext();){const{key:t,value:{document:r,readTime:o}}=s.getNext();if(!e.path.isPrefixOf(t.path))break;o.compareTo(n)<=0||ae(e,r)&&(i=i.insert(r.key,r.mutableCopy()))}return ki.resolve(i)}Es(t,e){return ki.forEach(this.docs,t=>e(t))}newChangeBuffer(t){return new ls(this)}getSize(t){return ki.resolve(this.size)}}class ls extends Tr{constructor(t){super(),this.De=t}applyChanges(t){const e=[];return this.changes.forEach((n,i)=>{i.document.isValidDocument()?e.push(this.De.addEntry(t,i.document,this.getReadTime(n))):this.De.removeEntry(n)}),ki.waitFor(e)}getFromCache(t,e){return this.De.getEntry(t,e)}getAllFromCache(t,e){return this.De.getEntries(t,e)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hs{constructor(t){this.persistence=t,this.Is=new kr(t=>Et(t),Ct),this.lastRemoteSnapshotVersion=B.min(),this.highestTargetId=0,this.As=0,this.Rs=new os,this.targetCount=0,this.bs=fr.ie()}forEachTarget(t,e){return this.Is.forEach((t,n)=>e(n)),ki.resolve()}getLastRemoteSnapshotVersion(t){return ki.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return ki.resolve(this.As)}allocateTargetId(t){return this.highestTargetId=this.bs.next(),ki.resolve(this.highestTargetId)}setTargetsMetadata(t,e,n){return n&&(this.lastRemoteSnapshotVersion=n),e>this.As&&(this.As=e),ki.resolve()}ae(t){this.Is.set(t.target,t);const e=t.targetId;e>this.highestTargetId&&(this.bs=new fr(e),this.highestTargetId=e),t.sequenceNumber>this.As&&(this.As=t.sequenceNumber)}addTargetData(t,e){return this.ae(e),this.targetCount+=1,ki.resolve()}updateTargetData(t,e){return this.ae(e),ki.resolve()}removeTargetData(t,e){return this.Is.delete(e.target),this.Rs.us(e.targetId),this.targetCount-=1,ki.resolve()}removeTargets(t,e,n){let i=0;const r=[];return this.Is.forEach((s,o)=>{o.sequenceNumber<=e&&null===n.get(o.targetId)&&(this.Is.delete(s),r.push(this.removeMatchingKeysForTargetId(t,o.targetId)),i++)}),ki.waitFor(r).next(()=>i)}getTargetCount(t){return ki.resolve(this.targetCount)}getTargetData(t,e){const n=this.Is.get(e)||null;return ki.resolve(n)}addMatchingKeys(t,e,n){return this.Rs.rs(e,n),ki.resolve()}removeMatchingKeys(t,e,n){this.Rs.cs(e,n);const i=this.persistence.referenceDelegate,r=[];return i&&e.forEach(e=>{r.push(i.markPotentiallyOrphaned(t,e))}),ki.waitFor(r)}removeMatchingKeysForTargetId(t,e){return this.Rs.us(e),ki.resolve()}getMatchingKeysForTargetId(t,e){const n=this.Rs.ls(e);return ki.resolve(n)}containsKey(t,e){return ki.resolve(this.Rs.containsKey(e))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ds{constructor(t,e){this.Ps={},this.Be=new L(0),this.Ue=!1,this.Ue=!0,this.referenceDelegate=t(this),this.He=new hs(this),this.Jt=new tr,this.Je=function(t,e){return new us(t,e)}(this.Jt,t=>this.referenceDelegate.vs(t)),this.k=new Bi(e),this.Ye=new ss(this.k)}start(){return Promise.resolve()}shutdown(){return this.Ue=!1,Promise.resolve()}get started(){return this.Ue}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(){return this.Jt}getMutationQueue(t){let e=this.Ps[t.toKey()];return e||(e=new cs(this.Jt,this.referenceDelegate),this.Ps[t.toKey()]=e),e}getTargetCache(){return this.He}getRemoteDocumentCache(){return this.Je}getBundleCache(){return this.Ye}runTransaction(t,e,n){p("MemoryPersistence","Starting transaction:",t);const i=new fs(this.Be.next());return this.referenceDelegate.Vs(),n(i).next(t=>this.referenceDelegate.Ss(i).next(()=>t)).toPromise().then(t=>(i.raiseOnCommittedEvent(),t))}Ds(t,e){return ki.or(Object.values(this.Ps).map(n=>()=>n.containsKey(t,e)))}}class fs extends Si{constructor(t){super(),this.currentSequenceNumber=t}}class ps{constructor(t){this.persistence=t,this.Cs=new os,this.Ns=null}static ks(t){return new ps(t)}get xs(){if(this.Ns)return this.Ns;throw y()}addReference(t,e,n){return this.Cs.addReference(n,e),this.xs.delete(n.toString()),ki.resolve()}removeReference(t,e,n){return this.Cs.removeReference(n,e),this.xs.add(n.toString()),ki.resolve()}markPotentiallyOrphaned(t,e){return this.xs.add(e.toString()),ki.resolve()}removeTarget(t,e){this.Cs.us(e.targetId).forEach(t=>this.xs.add(t.toString()));const n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(t,e.targetId).next(t=>{t.forEach(t=>this.xs.add(t.toString()))}).next(()=>n.removeTargetData(t,e))}Vs(){this.Ns=new Set}Ss(t){const e=this.persistence.getRemoteDocumentCache().newChangeBuffer();return ki.forEach(this.xs,n=>{const i=at.fromPath(n);return this.$s(t,i).next(t=>{t||e.removeEntry(i)})}).next(()=>(this.Ns=null,e.apply(t)))}updateLimboDocument(t,e){return this.$s(t,e).next(t=>{t?this.xs.delete(e.toString()):this.xs.add(e.toString())})}vs(t){return 0}$s(t,e){return ki.or([()=>ki.resolve(this.Cs.containsKey(e)),()=>this.persistence.getTargetCache().containsKey(t,e),()=>this.persistence.Ds(t,e)])}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ms(t,e){return`firestore_clients_${t}_${e}`}function gs(t,e,n){let i=`firestore_mutations_${t}_${n}`;return e.isAuthenticated()&&(i+="_"+e.uid),i}function vs(t,e){return`firestore_targets_${t}_${e}`}class ys{constructor(t,e,n,i){this.user=t,this.batchId=e,this.state=n,this.error=i}static Os(t,e,n){const i=JSON.parse(n);let r,s="object"==typeof i&&-1!==["pending","acknowledged","rejected"].indexOf(i.state)&&(void 0===i.error||"object"==typeof i.error);return s&&i.error&&(s="string"==typeof i.error.message&&"string"==typeof i.error.code,s&&(r=new I(i.error.code,i.error.message))),s?new ys(t,e,i.state,r):(m("SharedClientState",`Failed to parse mutation state for ID '${e}': ${n}`),null)}Ms(){const t={state:this.state,updateTimeMs:Date.now()};return this.error&&(t.error={code:this.error.code,message:this.error.message}),JSON.stringify(t)}}class bs{constructor(t,e,n){this.targetId=t,this.state=e,this.error=n}static Os(t,e){const n=JSON.parse(e);let i,r="object"==typeof n&&-1!==["not-current","current","rejected"].indexOf(n.state)&&(void 0===n.error||"object"==typeof n.error);return r&&n.error&&(r="string"==typeof n.error.message&&"string"==typeof n.error.code,r&&(i=new I(n.error.code,n.error.message))),r?new bs(t,n.state,i):(m("SharedClientState",`Failed to parse target state for ID '${t}': ${e}`),null)}Ms(){const t={state:this.state,updateTimeMs:Date.now()};return this.error&&(t.error={code:this.error.code,message:this.error.message}),JSON.stringify(t)}}class ws{constructor(t,e){this.clientId=t,this.activeTargetIds=e}static Os(t,e){const n=JSON.parse(e);let i="object"==typeof n&&n.activeTargetIds instanceof Array,r=un();for(let s=0;i&&s<n.activeTargetIds.length;++s)i=ot(n.activeTargetIds[s]),r=r.add(n.activeTargetIds[s]);return i?new ws(t,r):(m("SharedClientState",`Failed to parse client data for instance '${t}': ${e}`),null)}}class _s{constructor(t,e){this.clientId=t,this.onlineState=e}static Os(t){const e=JSON.parse(t);return"object"==typeof e&&-1!==["Unknown","Online","Offline"].indexOf(e.onlineState)&&"string"==typeof e.clientId?new _s(e.clientId,e.onlineState):(m("SharedClientState","Failed to parse online state: "+t),null)}}class Os{constructor(){this.activeTargetIds=un()}Fs(t){this.activeTargetIds=this.activeTargetIds.add(t)}Ls(t){this.activeTargetIds=this.activeTargetIds.delete(t)}Ms(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class Is{constructor(t,e,n,i,r){this.window=t,this.Me=e,this.persistenceKey=n,this.Bs=i,this.syncEngine=null,this.onlineStateHandler=null,this.sequenceNumberHandler=null,this.Us=this.qs.bind(this),this.Ks=new Ke(P),this.started=!1,this.js=[];const s=n.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");this.storage=this.window.localStorage,this.currentUser=r,this.Qs=ms(this.persistenceKey,this.Bs),this.Ws=function(t){return"firestore_sequence_number_"+t}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(this.persistenceKey),this.Ks=this.Ks.insert(this.Bs,new Os),this.Gs=new RegExp(`^firestore_clients_${s}_([^_]*)$`),this.zs=new RegExp(`^firestore_mutations_${s}_(\\d+)(?:_(.*))?$`),this.Hs=new RegExp(`^firestore_targets_${s}_(\\d+)$`),this.Js=function(t){return"firestore_online_state_"+t}(this.persistenceKey),this.Ys=function(t){return"firestore_bundle_loaded_"+t}(this.persistenceKey),this.window.addEventListener("storage",this.Us)}static Pt(t){return!(!t||!t.localStorage)}async start(){const t=await this.syncEngine.Tn();for(const n of t){if(n===this.Bs)continue;const t=this.getItem(ms(this.persistenceKey,n));if(t){const e=ws.Os(n,t);e&&(this.Ks=this.Ks.insert(e.clientId,e))}}this.Xs();const e=this.storage.getItem(this.Js);if(e){const t=this.Zs(e);t&&this.ti(t)}for(const n of this.js)this.qs(n);this.js=[],this.window.addEventListener("pagehide",()=>this.shutdown()),this.started=!0}writeSequenceNumber(t){this.setItem(this.Ws,JSON.stringify(t))}getAllActiveQueryTargets(){return this.ei(this.Ks)}isActiveQueryTarget(t){let e=!1;return this.Ks.forEach((n,i)=>{i.activeTargetIds.has(t)&&(e=!0)}),e}addPendingMutation(t){this.ni(t,"pending")}updateMutationState(t,e,n){this.ni(t,e,n),this.si(t)}addLocalQueryTarget(t){let e="not-current";if(this.isActiveQueryTarget(t)){const n=this.storage.getItem(vs(this.persistenceKey,t));if(n){const i=bs.Os(t,n);i&&(e=i.state)}}return this.ii.Fs(t),this.Xs(),e}removeLocalQueryTarget(t){this.ii.Ls(t),this.Xs()}isLocalQueryTarget(t){return this.ii.activeTargetIds.has(t)}clearQueryState(t){this.removeItem(vs(this.persistenceKey,t))}updateQueryState(t,e,n){this.ri(t,e,n)}handleUserChange(t,e,n){e.forEach(t=>{this.si(t)}),this.currentUser=t,n.forEach(t=>{this.addPendingMutation(t)})}setOnlineState(t){this.oi(t)}notifyBundleLoaded(){this.ci()}shutdown(){this.started&&(this.window.removeEventListener("storage",this.Us),this.removeItem(this.Qs),this.started=!1)}getItem(t){const e=this.storage.getItem(t);return p("SharedClientState","READ",t,e),e}setItem(t,e){p("SharedClientState","SET",t,e),this.storage.setItem(t,e)}removeItem(t){p("SharedClientState","REMOVE",t),this.storage.removeItem(t)}qs(t){const e=t;if(e.storageArea===this.storage){if(p("SharedClientState","EVENT",e.key,e.newValue),e.key===this.Qs)return void m("Received WebStorage notification for local change. Another client might have garbage-collected our state");this.Me.enqueueRetryable(async()=>{if(this.started){if(null!==e.key)if(this.Gs.test(e.key)){if(null==e.newValue){const t=this.ai(e.key);return this.ui(t,null)}{const t=this.hi(e.key,e.newValue);if(t)return this.ui(t.clientId,t)}}else if(this.zs.test(e.key)){if(null!==e.newValue){const t=this.li(e.key,e.newValue);if(t)return this.fi(t)}}else if(this.Hs.test(e.key)){if(null!==e.newValue){const t=this.di(e.key,e.newValue);if(t)return this.wi(t)}}else if(e.key===this.Js){if(null!==e.newValue){const t=this.Zs(e.newValue);if(t)return this.ti(t)}}else if(e.key===this.Ws){const t=function(t){let e=L.I;if(null!=t)try{const n=JSON.parse(t);b("number"==typeof n),e=n}catch(t){m("SharedClientState","Failed to read sequence number from WebStorage",t)}return e}(e.newValue);t!==L.I&&this.sequenceNumberHandler(t)}else if(e.key===this.Ys)return this.syncEngine._i()}else this.js.push(e)})}}get ii(){return this.Ks.get(this.Bs)}Xs(){this.setItem(this.Qs,this.ii.Ms())}ni(t,e,n){const i=new ys(this.currentUser,t,e,n),r=gs(this.persistenceKey,this.currentUser,t);this.setItem(r,i.Ms())}si(t){const e=gs(this.persistenceKey,this.currentUser,t);this.removeItem(e)}oi(t){const e={clientId:this.Bs,onlineState:t};this.storage.setItem(this.Js,JSON.stringify(e))}ri(t,e,n){const i=vs(this.persistenceKey,t),r=new bs(t,e,n);this.setItem(i,r.Ms())}ci(){this.setItem(this.Ys,"value-not-used")}ai(t){const e=this.Gs.exec(t);return e?e[1]:null}hi(t,e){const n=this.ai(t);return ws.Os(n,e)}li(t,e){const n=this.zs.exec(t),i=Number(n[1]),r=void 0!==n[2]?n[2]:null;return ys.Os(new u(r),i,e)}di(t,e){const n=this.Hs.exec(t),i=Number(n[1]);return bs.Os(i,e)}Zs(t){return _s.Os(t)}async fi(t){if(t.user.uid===this.currentUser.uid)return this.syncEngine.mi(t.batchId,t.state,t.error);p("SharedClientState","Ignoring mutation for non-active user "+t.user.uid)}wi(t){return this.syncEngine.gi(t.targetId,t.state,t.error)}ui(t,e){const n=e?this.Ks.insert(t,e):this.Ks.remove(t),i=this.ei(this.Ks),r=this.ei(n),s=[],o=[];return r.forEach(t=>{i.has(t)||s.push(t)}),i.forEach(t=>{r.has(t)||o.push(t)}),this.syncEngine.yi(s,o).then(()=>{this.Ks=n})}ti(t){this.Ks.get(t.clientId)&&this.onlineStateHandler(t.onlineState)}ei(t){let e=un();return t.forEach((t,n)=>{e=e.unionWith(n.activeTargetIds)}),e}}class Ss{constructor(){this.pi=new Os,this.Ti={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,e,n){}addLocalQueryTarget(t){return this.pi.Fs(t),this.Ti[t]||"not-current"}updateQueryState(t,e,n){this.Ti[t]=e}removeLocalQueryTarget(t){this.pi.Ls(t)}isLocalQueryTarget(t){return this.pi.activeTargetIds.has(t)}clearQueryState(t){delete this.Ti[t]}getAllActiveQueryTargets(){return this.pi.activeTargetIds}isActiveQueryTarget(t){return this.pi.activeTargetIds.has(t)}start(){return this.pi=new Os,Promise.resolve()}handleUserChange(t,e,n){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(){}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ks{Ei(t){}shutdown(){}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ts{constructor(){this.Ii=()=>this.Ai(),this.Ri=()=>this.bi(),this.Pi=[],this.vi()}Ei(t){this.Pi.push(t)}shutdown(){window.removeEventListener("online",this.Ii),window.removeEventListener("offline",this.Ri)}vi(){window.addEventListener("online",this.Ii),window.addEventListener("offline",this.Ri)}Ai(){p("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const t of this.Pi)t(0)}bi(){p("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const t of this.Pi)t(1)}static Pt(){return"undefined"!=typeof window&&void 0!==window.addEventListener&&void 0!==window.removeEventListener}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Es={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery"};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xs{constructor(t){this.Vi=t.Vi,this.Si=t.Si}Di(t){this.Ci=t}Ni(t){this.ki=t}onMessage(t){this.xi=t}close(){this.Si()}send(t){this.Vi(t)}$i(){this.Ci()}Oi(t){this.ki(t)}Mi(t){this.xi(t)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cs extends class{constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const e=t.ssl?"https":"http";this.Fi=e+"://"+t.host,this.Li="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}Bi(t,e,n,i,r){const s=this.Ui(t,e);p("RestConnection","Sending: ",s,n);const o={};return this.qi(o,i,r),this.Ki(t,s,o,n).then(t=>(p("RestConnection","Received: ",t),t),e=>{throw g("RestConnection",t+" failed with error: ",e,"url: ",s,"request:",n),e})}ji(t,e,n,i,r){return this.Bi(t,e,n,i,r)}qi(t,e,n){t["X-Goog-Api-Client"]="gl-js/ fire/"+l,t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),e&&e.headers.forEach((e,n)=>t[n]=e),n&&n.headers.forEach((e,n)=>t[n]=e)}Ui(t,e){const n=Es[t];return`${this.Fi}/v1/${e}:${n}`}}{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams}Ki(t,e,n,i){return new Promise((r,s)=>{const o=new a["g"];o.listenOnce(a["c"].COMPLETE,()=>{try{switch(o.getLastErrorCode()){case a["a"].NO_ERROR:const e=o.getResponseJson();p("Connection","XHR received:",JSON.stringify(e)),r(e);break;case a["a"].TIMEOUT:p("Connection",'RPC "'+t+'" timed out'),s(new I(O.DEADLINE_EXCEEDED,"Request time out"));break;case a["a"].HTTP_ERROR:const n=o.getStatus();if(p("Connection",'RPC "'+t+'" failed with status:',n,"response text:",o.getResponseText()),n>0){const t=o.getResponseJson().error;if(t&&t.status&&t.message){const e=function(t){const e=t.toLowerCase().replace(/_/g,"-");return Object.values(O).indexOf(e)>=0?e:O.UNKNOWN}(t.status);s(new I(e,t.message))}else s(new I(O.UNKNOWN,"Server responded with status "+o.getStatus()))}else s(new I(O.UNAVAILABLE,"Connection failed."));break;default:y()}}finally{p("Connection",'RPC "'+t+'" completed.')}});const c=JSON.stringify(i);o.send(e,"POST",c,n,15)})}Qi(t,e,n){const i=[this.Fi,"/","google.firestore.v1.Firestore","/",t,"/channel"],r=Object(a["h"])(),s=Object(a["i"])(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(c.xmlHttpFactory=new a["d"]({})),this.qi(c.initMessageHeaders,e,n),Object(o["s"])()||Object(o["u"])()||Object(o["o"])()||Object(o["q"])()||Object(o["w"])()||Object(o["n"])()||(c.httpHeadersOverwriteParam="$httpHeaders");const u=i.join("");p("Connection","Creating WebChannel: "+u,c);const l=r.createWebChannel(u,c);let h=!1,d=!1;const f=new xs({Vi:t=>{d?p("Connection","Not sending because WebChannel is closed:",t):(h||(p("Connection","Opening WebChannel transport."),l.open(),h=!0),p("Connection","WebChannel sending:",t),l.send(t))},Si:()=>l.close()}),m=(t,e,n)=>{t.listen(e,t=>{try{n(t)}catch(t){setTimeout(()=>{throw t},0)}})};return m(l,a["f"].EventType.OPEN,()=>{d||p("Connection","WebChannel transport opened.")}),m(l,a["f"].EventType.CLOSE,()=>{d||(d=!0,p("Connection","WebChannel transport closed"),f.Oi())}),m(l,a["f"].EventType.ERROR,t=>{d||(d=!0,g("Connection","WebChannel transport errored:",t),f.Oi(new I(O.UNAVAILABLE,"The operation could not be completed")))}),m(l,a["f"].EventType.MESSAGE,t=>{var e;if(!d){const n=t.data[0];b(!!n);const i=n,r=i.error||(null===(e=i[0])||void 0===e?void 0:e.error);if(r){p("Connection","WebChannel received error:",r);const t=r.status;let e=function(t){const e=ze[t];if(void 0!==e)return Ge(e)}(t),n=r.message;void 0===e&&(e=O.INTERNAL,n="Unknown error status: "+t+" with message "+r.message),d=!0,f.Oi(new I(e,n)),l.close()}else p("Connection","WebChannel received:",n),f.Mi(n)}}),m(s,a["b"].STAT_EVENT,t=>{t.stat===a["e"].PROXY?p("Connection","Detected buffering proxy"):t.stat===a["e"].NOPROXY&&p("Connection","Detected no buffering proxy")}),setTimeout(()=>{f.$i()},0),f}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function As(){return"undefined"!=typeof window?window:null}function js(){return"undefined"!=typeof document?document:null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rs(t){return new _n(t,!0)}class Ls{constructor(t,e,n=1e3,i=1.5,r=6e4){this.Me=t,this.timerId=e,this.Wi=n,this.Gi=i,this.zi=r,this.Hi=0,this.Ji=null,this.Yi=Date.now(),this.reset()}reset(){this.Hi=0}Xi(){this.Hi=this.zi}Zi(t){this.cancel();const e=Math.floor(this.Hi+this.tr()),n=Math.max(0,Date.now()-this.Yi),i=Math.max(0,e-n);i>0&&p("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Hi} ms, delay with jitter: ${e} ms, last attempt: ${n} ms ago)`),this.Ji=this.Me.enqueueAfterDelay(this.timerId,i,()=>(this.Yi=Date.now(),t())),this.Hi*=this.Gi,this.Hi<this.Wi&&(this.Hi=this.Wi),this.Hi>this.zi&&(this.Hi=this.zi)}er(){null!==this.Ji&&(this.Ji.skipDelay(),this.Ji=null)}cancel(){null!==this.Ji&&(this.Ji.cancel(),this.Ji=null)}tr(){return(Math.random()-.5)*this.Hi}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ns{constructor(t,e,n,i,r,s,o,a){this.Me=t,this.nr=n,this.sr=i,this.ir=r,this.authCredentialsProvider=s,this.appCheckCredentialsProvider=o,this.listener=a,this.state=0,this.rr=0,this.cr=null,this.ar=null,this.stream=null,this.ur=new Ls(t,e)}hr(){return 1===this.state||5===this.state||this.lr()}lr(){return 2===this.state||3===this.state}start(){4!==this.state?this.auth():this.dr()}async stop(){this.hr()&&await this.close(0)}wr(){this.state=0,this.ur.reset()}_r(){this.lr()&&null===this.cr&&(this.cr=this.Me.enqueueAfterDelay(this.nr,6e4,()=>this.mr()))}gr(t){this.yr(),this.stream.send(t)}async mr(){if(this.lr())return this.close(0)}yr(){this.cr&&(this.cr.cancel(),this.cr=null)}pr(){this.ar&&(this.ar.cancel(),this.ar=null)}async close(t,e){this.yr(),this.pr(),this.ur.cancel(),this.rr++,4!==t?this.ur.reset():e&&e.code===O.RESOURCE_EXHAUSTED?(m(e.toString()),m("Using maximum backoff delay to prevent overloading the backend."),this.ur.Xi()):e&&e.code===O.UNAUTHENTICATED&&3!==this.state&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),null!==this.stream&&(this.Tr(),this.stream.close(),this.stream=null),this.state=t,await this.listener.Ni(e)}Tr(){}auth(){this.state=1;const t=this.Er(this.rr),e=this.rr;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([t,n])=>{this.rr===e&&this.Ir(t,n)},e=>{t(()=>{const t=new I(O.UNKNOWN,"Fetching auth token failed: "+e.message);return this.Ar(t)})})}Ir(t,e){const n=this.Er(this.rr);this.stream=this.Rr(t,e),this.stream.Di(()=>{n(()=>(this.state=2,this.ar=this.Me.enqueueAfterDelay(this.sr,1e4,()=>(this.lr()&&(this.state=3),Promise.resolve())),this.listener.Di()))}),this.stream.Ni(t=>{n(()=>this.Ar(t))}),this.stream.onMessage(t=>{n(()=>this.onMessage(t))})}dr(){this.state=5,this.ur.Zi(async()=>{this.state=0,this.start()})}Ar(t){return p("PersistentStream","close with error: "+t),this.stream=null,this.close(4,t)}Er(t){return e=>{this.Me.enqueueAndForget(()=>this.rr===t?e():(p("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class Ds extends Ns{constructor(t,e,n,i,r,s){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",e,n,i,s),this.k=r}Rr(t,e){return this.ir.Qi("Listen",t,e)}onMessage(t){this.ur.reset();const e=Mn(this.k,t),n=function(t){if(!("targetChange"in t))return B.min();const e=t.targetChange;return e.targetIds&&e.targetIds.length?B.min():e.readTime?kn(e.readTime):B.min()}(t);return this.listener.br(e,n)}Pr(t){const e={};e.database=Rn(this.k),e.addTarget=function(t,e){let n;const i=e.target;return n=At(i)?{documents:Vn(t,i)}:{query:Un(t,i)},n.targetId=e.targetId,e.resumeToken.approximateByteSize()>0?n.resumeToken=In(t,e.resumeToken):e.snapshotVersion.compareTo(B.min())>0&&(n.readTime=On(t,e.snapshotVersion.toTimestamp())),n}(this.k,t);const n=zn(this.k,t);n&&(e.labels=n),this.gr(e)}vr(t){const e={};e.database=Rn(this.k),e.removeTarget=t,this.gr(e)}}class Ps extends Ns{constructor(t,e,n,i,r,s){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",e,n,i,s),this.k=r,this.Vr=!1}get Sr(){return this.Vr}start(){this.Vr=!1,this.lastStreamToken=void 0,super.start()}Tr(){this.Vr&&this.Dr([])}Rr(t,e){return this.ir.Qi("Write",t,e)}onMessage(t){if(b(!!t.streamToken),this.lastStreamToken=t.streamToken,this.Vr){this.ur.reset();const e=Bn(t.writeResults,t.commitTime),n=kn(t.commitTime);return this.listener.Cr(n,e)}return b(!t.writeResults||0===t.writeResults.length),this.Vr=!0,this.listener.Nr()}kr(){const t={};t.database=Rn(this.k),this.gr(t)}Dr(t){const e={streamToken:this.lastStreamToken,writes:t.map(t=>$n(this.k,t))};this.gr(e)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ms extends class{}{constructor(t,e,n,i){super(),this.authCredentials=t,this.appCheckCredentials=e,this.ir=n,this.k=i,this.$r=!1}Or(){if(this.$r)throw new I(O.FAILED_PRECONDITION,"The client has already been terminated.")}Bi(t,e,n){return this.Or(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,r])=>this.ir.Bi(t,e,n,i,r)).catch(t=>{throw"FirebaseError"===t.name?(t.code===O.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),t):new I(O.UNKNOWN,t.toString())})}ji(t,e,n){return this.Or(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,r])=>this.ir.ji(t,e,n,i,r)).catch(t=>{throw"FirebaseError"===t.name?(t.code===O.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),t):new I(O.UNKNOWN,t.toString())})}terminate(){this.$r=!0}}class $s{constructor(t,e){this.asyncQueue=t,this.onlineStateHandler=e,this.state="Unknown",this.Mr=0,this.Fr=null,this.Lr=!0}Br(){0===this.Mr&&(this.Ur("Unknown"),this.Fr=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.Fr=null,this.qr("Backend didn't respond within 10 seconds."),this.Ur("Offline"),Promise.resolve())))}Kr(t){"Online"===this.state?this.Ur("Unknown"):(this.Mr++,this.Mr>=1&&(this.jr(),this.qr("Connection failed 1 times. Most recent error: "+t.toString()),this.Ur("Offline")))}set(t){this.jr(),this.Mr=0,"Online"===t&&(this.Lr=!1),this.Ur(t)}Ur(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}qr(t){const e=`Could not reach Cloud Firestore backend. ${t}\nThis typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.Lr?(m(e),this.Lr=!1):p("OnlineStateTracker",e)}jr(){null!==this.Fr&&(this.Fr.cancel(),this.Fr=null)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fs{constructor(t,e,n,i,r){this.localStore=t,this.datastore=e,this.asyncQueue=n,this.remoteSyncer={},this.Qr=[],this.Wr=new Map,this.Gr=new Set,this.zr=[],this.Hr=r,this.Hr.Ei(t=>{n.enqueueAndForget(async()=>{Ks(this)&&(p("RemoteStore","Restarting streams for network reachability change."),await async function(t){const e=_(t);e.Gr.add(4),await Vs(e),e.Jr.set("Unknown"),e.Gr.delete(4),await Bs(e)}(this))})}),this.Jr=new $s(n,i)}}async function Bs(t){if(Ks(t))for(const e of t.zr)await e(!0)}async function Vs(t){for(const e of t.zr)await e(!1)}function Us(t,e){const n=_(t);n.Wr.has(e.targetId)||(n.Wr.set(e.targetId,e),Gs(n)?Ws(n):fo(n).lr()&&zs(n,e))}function qs(t,e){const n=_(t),i=fo(n);n.Wr.delete(e),i.lr()&&Hs(n,e),0===n.Wr.size&&(i.lr()?i._r():Ks(n)&&n.Jr.set("Unknown"))}function zs(t,e){t.Yr.X(e.targetId),fo(t).Pr(e)}function Hs(t,e){t.Yr.X(e),fo(t).vr(e)}function Ws(t){t.Yr=new gn({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),Et:e=>t.Wr.get(e)||null}),fo(t).start(),t.Jr.Br()}function Gs(t){return Ks(t)&&!fo(t).hr()&&t.Wr.size>0}function Ks(t){return 0===_(t).Gr.size}function Ys(t){t.Yr=void 0}async function Xs(t){t.Wr.forEach((e,n)=>{zs(t,e)})}async function Qs(t,e){Ys(t),Gs(t)?(t.Jr.Kr(e),Ws(t)):t.Jr.set("Unknown")}async function Js(t,e,n){if(t.Jr.set("Online"),e instanceof pn&&2===e.state&&e.cause)try{await async function(t,e){const n=e.cause;for(const i of e.targetIds)t.Wr.has(i)&&(await t.remoteSyncer.rejectListen(i,n),t.Wr.delete(i),t.Yr.removeTarget(i))}(t,e)}catch(n){p("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),n),await Zs(t,n)}else if(e instanceof dn?t.Yr.ot(e):e instanceof fn?t.Yr.dt(e):t.Yr.ut(e),!n.isEqual(B.min()))try{const e=await Gr(t.localStore);n.compareTo(e)>=0&&await function(t,e){const n=t.Yr.gt(e);return n.targetChanges.forEach((n,i)=>{if(n.resumeToken.approximateByteSize()>0){const r=t.Wr.get(i);r&&t.Wr.set(i,r.withResumeToken(n.resumeToken,e))}}),n.targetMismatches.forEach(e=>{const n=t.Wr.get(e);if(!n)return;t.Wr.set(e,n.withResumeToken(X.EMPTY_BYTE_STRING,n.snapshotVersion)),Hs(t,e);const i=new Fi(n.target,e,1,n.sequenceNumber);zs(t,i)}),t.remoteSyncer.applyRemoteEvent(n)}(t,n)}catch(e){p("RemoteStore","Failed to raise snapshot:",e),await Zs(t,e)}}async function Zs(t,e,n){if(!Ai(e))throw e;t.Gr.add(1),await Vs(t),t.Jr.set("Offline"),n||(n=()=>Gr(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{p("RemoteStore","Retrying IndexedDB access"),await n(),t.Gr.delete(1),await Bs(t)})}function to(t,e){return e().catch(n=>Zs(t,n,e))}async function eo(t){const e=_(t),n=po(e);let i=e.Qr.length>0?e.Qr[e.Qr.length-1].batchId:-1;for(;no(e);)try{const t=await Xr(e.localStore,i);if(null===t){0===e.Qr.length&&n._r();break}i=t.batchId,io(e,t)}catch(t){await Zs(e,t)}ro(e)&&so(e)}function no(t){return Ks(t)&&t.Qr.length<10}function io(t,e){t.Qr.push(e);const n=po(t);n.lr()&&n.Sr&&n.Dr(e.mutations)}function ro(t){return Ks(t)&&!po(t).hr()&&t.Qr.length>0}function so(t){po(t).start()}async function oo(t){po(t).kr()}async function ao(t){const e=po(t);for(const n of t.Qr)e.Dr(n.mutations)}async function co(t,e,n){const i=t.Qr.shift(),r=$i.from(i,e,n);await to(t,()=>t.remoteSyncer.applySuccessfulWrite(r)),await eo(t)}async function uo(t,e){e&&po(t).Sr&&await async function(t,e){if(n=e.code,We(n)&&n!==O.ABORTED){const n=t.Qr.shift();po(t).wr(),await to(t,()=>t.remoteSyncer.rejectFailedWrite(n.batchId,e)),await eo(t)}var n}(t,e),ro(t)&&so(t)}async function lo(t,e){const n=_(t);n.asyncQueue.verifyOperationInProgress(),p("RemoteStore","RemoteStore received new credentials");const i=Ks(n);n.Gr.add(3),await Vs(n),i&&n.Jr.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.Gr.delete(3),await Bs(n)}async function ho(t,e){const n=_(t);e?(n.Gr.delete(2),await Bs(n)):e||(n.Gr.add(2),await Vs(n),n.Jr.set("Unknown"))}function fo(t){return t.Xr||(t.Xr=function(t,e,n){const i=_(t);return i.Or(),new Ds(e,i.ir,i.authCredentials,i.appCheckCredentials,i.k,n)
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}(t.datastore,t.asyncQueue,{Di:Xs.bind(null,t),Ni:Qs.bind(null,t),br:Js.bind(null,t)}),t.zr.push(async e=>{e?(t.Xr.wr(),Gs(t)?Ws(t):t.Jr.set("Unknown")):(await t.Xr.stop(),Ys(t))})),t.Xr}function po(t){return t.Zr||(t.Zr=function(t,e,n){const i=_(t);return i.Or(),new Ps(e,i.ir,i.authCredentials,i.appCheckCredentials,i.k,n)}(t.datastore,t.asyncQueue,{Di:oo.bind(null,t),Ni:uo.bind(null,t),Nr:ao.bind(null,t),Cr:co.bind(null,t)}),t.zr.push(async e=>{e?(t.Zr.wr(),await eo(t)):(await t.Zr.stop(),t.Qr.length>0&&(p("RemoteStore",`Stopping write stream with ${t.Qr.length} pending writes`),t.Qr=[]))})),t.Zr
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}class mo{constructor(t,e,n,i,r){this.asyncQueue=t,this.timerId=e,this.targetTimeMs=n,this.op=i,this.removalCallback=r,this.deferred=new S,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(t=>{})}static createAndSchedule(t,e,n,i,r){const s=Date.now()+n,o=new mo(t,e,s,i,r);return o.start(n),o}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){null!==this.timerHandle&&(this.clearTimeout(),this.deferred.reject(new I(O.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>null!==this.timerHandle?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){null!==this.timerHandle&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function go(t,e){if(m("AsyncQueue",`${e}: ${t}`),Ai(t))return new I(O.UNAVAILABLE,`${e}: ${t}`);throw t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vo{constructor(t){this.comparator=t?(e,n)=>t(e,n)||at.comparator(e.key,n.key):(t,e)=>at.comparator(t.key,e.key),this.keyedMap=nn(),this.sortedSet=new Ke(this.comparator)}static emptySet(t){return new vo(t.comparator)}has(t){return null!=this.keyedMap.get(t)}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const e=this.keyedMap.get(t);return e?this.sortedSet.indexOf(e):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal((e,n)=>(t(e),!1))}add(t){const e=this.delete(t.key);return e.copy(e.keyedMap.insert(t.key,t),e.sortedSet.insert(t,null))}delete(t){const e=this.get(t);return e?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(e)):this}isEqual(t){if(!(t instanceof vo))return!1;if(this.size!==t.size)return!1;const e=this.sortedSet.getIterator(),n=t.sortedSet.getIterator();for(;e.hasNext();){const t=e.getNext().key,i=n.getNext().key;if(!t.isEqual(i))return!1}return!0}toString(){const t=[];return this.forEach(e=>{t.push(e.toString())}),0===t.length?"DocumentSet ()":"DocumentSet (\n  "+t.join("  \n")+"\n)"}copy(t,e){const n=new vo;return n.comparator=this.comparator,n.keyedMap=t,n.sortedSet=e,n}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yo{constructor(){this.eo=new Ke(at.comparator)}track(t){const e=t.doc.key,n=this.eo.get(e);n?0!==t.type&&3===n.type?this.eo=this.eo.insert(e,t):3===t.type&&1!==n.type?this.eo=this.eo.insert(e,{type:n.type,doc:t.doc}):2===t.type&&2===n.type?this.eo=this.eo.insert(e,{type:2,doc:t.doc}):2===t.type&&0===n.type?this.eo=this.eo.insert(e,{type:0,doc:t.doc}):1===t.type&&0===n.type?this.eo=this.eo.remove(e):1===t.type&&2===n.type?this.eo=this.eo.insert(e,{type:1,doc:n.doc}):0===t.type&&1===n.type?this.eo=this.eo.insert(e,{type:2,doc:t.doc}):y():this.eo=this.eo.insert(e,t)}no(){const t=[];return this.eo.inorderTraversal((e,n)=>{t.push(n)}),t}}class bo{constructor(t,e,n,i,r,s,o,a){this.query=t,this.docs=e,this.oldDocs=n,this.docChanges=i,this.mutatedKeys=r,this.fromCache=s,this.syncStateChanged=o,this.excludesMetadataChanges=a}static fromInitialDocuments(t,e,n,i){const r=[];return e.forEach(t=>{r.push({type:0,doc:t})}),new bo(t,e,vo.emptySet(e),r,n,i,!0,!1)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&re(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const e=this.docChanges,n=t.docChanges;if(e.length!==n.length)return!1;for(let i=0;i<e.length;i++)if(e[i].type!==n[i].type||!e[i].doc.isEqual(n[i].doc))return!1;return!0}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wo{constructor(){this.so=void 0,this.listeners=[]}}class _o{constructor(){this.queries=new kr(t=>se(t),re),this.onlineState="Unknown",this.io=new Set}}async function Oo(t,e){const n=_(t),i=e.query;let r=!1,s=n.queries.get(i);if(s||(r=!0,s=new wo),r)try{s.so=await n.onListen(i)}catch(t){const n=go(t,`Initialization of query '${oe(e.query)}' failed`);return void e.onError(n)}n.queries.set(i,s),s.listeners.push(e),e.ro(n.onlineState),s.so&&e.oo(s.so)&&To(n)}async function Io(t,e){const n=_(t),i=e.query;let r=!1;const s=n.queries.get(i);if(s){const t=s.listeners.indexOf(e);t>=0&&(s.listeners.splice(t,1),r=0===s.listeners.length)}if(r)return n.queries.delete(i),n.onUnlisten(i)}function So(t,e){const n=_(t);let i=!1;for(const r of e){const t=r.query,e=n.queries.get(t);if(e){for(const t of e.listeners)t.oo(r)&&(i=!0);e.so=r}}i&&To(n)}function ko(t,e,n){const i=_(t),r=i.queries.get(e);if(r)for(const s of r.listeners)s.onError(n);i.queries.delete(e)}function To(t){t.io.forEach(t=>{t.next()})}class Eo{constructor(t,e,n){this.query=t,this.co=e,this.ao=!1,this.uo=null,this.onlineState="Unknown",this.options=n||{}}oo(t){if(!this.options.includeMetadataChanges){const e=[];for(const n of t.docChanges)3!==n.type&&e.push(n);t=new bo(t.query,t.docs,t.oldDocs,e,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0)}let e=!1;return this.ao?this.ho(t)&&(this.co.next(t),e=!0):this.lo(t,this.onlineState)&&(this.fo(t),e=!0),this.uo=t,e}onError(t){this.co.error(t)}ro(t){this.onlineState=t;let e=!1;return this.uo&&!this.ao&&this.lo(this.uo,t)&&(this.fo(this.uo),e=!0),e}lo(t,e){if(!t.fromCache)return!0;const n="Offline"!==e;return(!this.options.wo||!n)&&(!t.docs.isEmpty()||"Offline"===e)}ho(t){if(t.docChanges.length>0)return!0;const e=this.uo&&this.uo.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!e)&&!0===this.options.includeMetadataChanges}fo(t){t=bo.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache),this.ao=!0,this.co.next(t)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xo{constructor(t,e){this.payload=t,this.byteLength=e}_o(){return"metadata"in this.payload}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Co{constructor(t){this.k=t}Hn(t){return Cn(this.k,t)}Jn(t){return t.metadata.exists?Dn(this.k,t.document,!1):St.newNoDocument(this.Hn(t.metadata.name),this.Yn(t.metadata.readTime))}Yn(t){return kn(t)}}class Ao{constructor(t,e,n){this.mo=t,this.localStore=e,this.k=n,this.queries=[],this.documents=[],this.progress=jo(t)}yo(t){this.progress.bytesLoaded+=t.byteLength;let e=this.progress.documentsLoaded;return t.payload.namedQuery?this.queries.push(t.payload.namedQuery):t.payload.documentMetadata?(this.documents.push({metadata:t.payload.documentMetadata}),t.payload.documentMetadata.exists||++e):t.payload.document&&(this.documents[this.documents.length-1].document=t.payload.document,++e),e!==this.progress.documentsLoaded?(this.progress.documentsLoaded=e,Object.assign({},this.progress)):null}po(t){const e=new Map,n=new Co(this.k);for(const i of t)if(i.metadata.queries){const t=n.Hn(i.metadata.name);for(const n of i.metadata.queries){const i=(e.get(n)||an()).add(t);e.set(n,i)}}return e}async complete(){const t=await is(this.localStore,new Co(this.k),this.documents,this.mo.id),e=this.po(this.documents);for(const n of this.queries)await rs(this.localStore,n,e.get(n.name));return this.progress.taskState="Success",new Fr(Object.assign({},this.progress),t)}}function jo(t){return{taskState:"Running",documentsLoaded:0,bytesLoaded:0,totalDocuments:t.totalDocuments,totalBytes:t.totalBytes}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ro{constructor(t){this.key=t}}class Lo{constructor(t){this.key=t}}class No{constructor(t,e){this.query=t,this.To=e,this.Eo=null,this.current=!1,this.Io=an(),this.mutatedKeys=an(),this.Ao=ce(t),this.Ro=new vo(this.Ao)}get bo(){return this.To}Po(t,e){const n=e?e.vo:new yo,i=e?e.Ro:this.Ro;let r=e?e.mutatedKeys:this.mutatedKeys,s=i,o=!1;const a=Xt(this.query)&&i.size===this.query.limit?i.last():null,c=Qt(this.query)&&i.size===this.query.limit?i.first():null;if(t.inorderTraversal((t,e)=>{const u=i.get(t),l=ae(this.query,e)?e:null,h=!!u&&this.mutatedKeys.has(u.key),d=!!l&&(l.hasLocalMutations||this.mutatedKeys.has(l.key)&&l.hasCommittedMutations);let f=!1;u&&l?u.data.isEqual(l.data)?h!==d&&(n.track({type:3,doc:l}),f=!0):this.Vo(u,l)||(n.track({type:2,doc:l}),f=!0,(a&&this.Ao(l,a)>0||c&&this.Ao(l,c)<0)&&(o=!0)):!u&&l?(n.track({type:0,doc:l}),f=!0):u&&!l&&(n.track({type:1,doc:u}),f=!0,(a||c)&&(o=!0)),f&&(l?(s=s.add(l),r=d?r.add(t):r.delete(t)):(s=s.delete(t),r=r.delete(t)))}),Xt(this.query)||Qt(this.query))for(;s.size>this.query.limit;){const t=Xt(this.query)?s.last():s.first();s=s.delete(t.key),r=r.delete(t.key),n.track({type:1,doc:t})}return{Ro:s,vo:n,Bn:o,mutatedKeys:r}}Vo(t,e){return t.hasLocalMutations&&e.hasCommittedMutations&&!e.hasLocalMutations}applyChanges(t,e,n){const i=this.Ro;this.Ro=t.Ro,this.mutatedKeys=t.mutatedKeys;const r=t.vo.no();r.sort((t,e)=>function(t,e){const n=t=>{switch(t){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return y()}};return n(t)-n(e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t.type,e.type)||this.Ao(t.doc,e.doc)),this.So(n);const s=e?this.Do():[],o=0===this.Io.size&&this.current?1:0,a=o!==this.Eo;return this.Eo=o,0!==r.length||a?{snapshot:new bo(this.query,t.Ro,i,r,t.mutatedKeys,0===o,a,!1),Co:s}:{Co:s}}ro(t){return this.current&&"Offline"===t?(this.current=!1,this.applyChanges({Ro:this.Ro,vo:new yo,mutatedKeys:this.mutatedKeys,Bn:!1},!1)):{Co:[]}}No(t){return!this.To.has(t)&&!!this.Ro.has(t)&&!this.Ro.get(t).hasLocalMutations}So(t){t&&(t.addedDocuments.forEach(t=>this.To=this.To.add(t)),t.modifiedDocuments.forEach(t=>{}),t.removedDocuments.forEach(t=>this.To=this.To.delete(t)),this.current=t.current)}Do(){if(!this.current)return[];const t=this.Io;this.Io=an(),this.Ro.forEach(t=>{this.No(t.key)&&(this.Io=this.Io.add(t.key))});const e=[];return t.forEach(t=>{this.Io.has(t)||e.push(new Lo(t))}),this.Io.forEach(n=>{t.has(n)||e.push(new Ro(n))}),e}ko(t){this.To=t.zn,this.Io=an();const e=this.Po(t.documents);return this.applyChanges(e,!0)}xo(){return bo.fromInitialDocuments(this.query,this.Ro,this.mutatedKeys,0===this.Eo)}}class Do{constructor(t,e,n){this.query=t,this.targetId=e,this.view=n}}class Po{constructor(t){this.key=t,this.$o=!1}}class Mo{constructor(t,e,n,i,r,s){this.localStore=t,this.remoteStore=e,this.eventManager=n,this.sharedClientState=i,this.currentUser=r,this.maxConcurrentLimboResolutions=s,this.Oo={},this.Mo=new kr(t=>se(t),re),this.Fo=new Map,this.Lo=new Set,this.Bo=new Ke(at.comparator),this.Uo=new Map,this.qo=new os,this.Ko={},this.jo=new Map,this.Qo=fr.re(),this.onlineState="Unknown",this.Wo=void 0}get isPrimaryClient(){return!0===this.Wo}}async function $o(t,e){const n=fa(t);let i,r;const s=n.Mo.get(e);if(s)i=s.targetId,n.sharedClientState.addLocalQueryTarget(i),r=s.view.xo();else{const t=await Qr(n.localStore,ne(e)),s=n.sharedClientState.addLocalQueryTarget(t.targetId);i=t.targetId,r=await Fo(n,e,i,"current"===s),n.isPrimaryClient&&Us(n.remoteStore,t)}return r}async function Fo(t,e,n,i){t.Go=(e,n,i)=>async function(t,e,n,i){let r=e.view.Po(n);r.Bn&&(r=await Zr(t.localStore,e.query,!1).then(({documents:t})=>e.view.Po(t,r)));const s=i&&i.targetChanges.get(e.targetId),o=e.view.applyChanges(r,t.isPrimaryClient,s);return Jo(t,e.targetId,o.Co),o.snapshot}(t,e,n,i);const r=await Zr(t.localStore,e,!0),s=new No(e,r.zn),o=s.Po(r.documents),a=hn.createSynthesizedTargetChangeForCurrentChange(n,i&&"Offline"!==t.onlineState),c=s.applyChanges(o,t.isPrimaryClient,a);Jo(t,n,c.Co);const u=new Do(e,n,s);return t.Mo.set(e,u),t.Fo.has(n)?t.Fo.get(n).push(e):t.Fo.set(n,[e]),c.snapshot}async function Bo(t,e){const n=_(t),i=n.Mo.get(e),r=n.Fo.get(i.targetId);if(r.length>1)return n.Fo.set(i.targetId,r.filter(t=>!re(t,e))),void n.Mo.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(i.targetId),n.sharedClientState.isActiveQueryTarget(i.targetId)||await Jr(n.localStore,i.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(i.targetId),qs(n.remoteStore,i.targetId),Xo(n,i.targetId)}).catch(yr)):(Xo(n,i.targetId),await Jr(n.localStore,i.targetId,!0))}async function Vo(t,e,n){const i=pa(t);try{const t=await function(t,e){const n=_(t),i=F.now(),r=e.reduce((t,e)=>t.add(e.key),an());let s;return n.persistence.runTransaction("Locally write mutations","readwrite",t=>n.Wn.vn(t,r).next(r=>{s=r;const o=[];for(const t of e){const e=Le(t,s.get(t.key));null!=e&&o.push(new Me(t.key,e,It(e.value.mapValue),xe.exists(!0)))}return n.An.addMutationBatch(t,i,o,e)})).then(t=>(t.applyToLocalDocumentSet(s),{batchId:t.batchId,changes:s}))}(i.localStore,e);i.sharedClientState.addPendingMutation(t.batchId),function(t,e,n){let i=t.Ko[t.currentUser.toKey()];i||(i=new Ke(P)),i=i.insert(e,n),t.Ko[t.currentUser.toKey()]=i}(i,t.batchId,n),await ea(i,t.changes),await eo(i.remoteStore)}catch(t){const e=go(t,"Failed to persist write");n.reject(e)}}async function Uo(t,e){const n=_(t);try{const t=await Kr(n.localStore,e);e.targetChanges.forEach((t,e)=>{const i=n.Uo.get(e);i&&(b(t.addedDocuments.size+t.modifiedDocuments.size+t.removedDocuments.size<=1),t.addedDocuments.size>0?i.$o=!0:t.modifiedDocuments.size>0?b(i.$o):t.removedDocuments.size>0&&(b(i.$o),i.$o=!1))}),await ea(n,t,e)}catch(t){await yr(t)}}function qo(t,e,n){const i=_(t);if(i.isPrimaryClient&&0===n||!i.isPrimaryClient&&1===n){const t=[];i.Mo.forEach((n,i)=>{const r=i.view.ro(e);r.snapshot&&t.push(r.snapshot)}),function(t,e){const n=_(t);n.onlineState=e;let i=!1;n.queries.forEach((t,n)=>{for(const r of n.listeners)r.ro(e)&&(i=!0)}),i&&To(n)}(i.eventManager,e),t.length&&i.Oo.br(t),i.onlineState=e,i.isPrimaryClient&&i.sharedClientState.setOnlineState(e)}}async function zo(t,e,n){const i=_(t);i.sharedClientState.updateQueryState(e,"rejected",n);const r=i.Uo.get(e),s=r&&r.key;if(s){let t=new Ke(at.comparator);t=t.insert(s,St.newNoDocument(s,B.min()));const n=an().add(s),r=new ln(B.min(),new Map,new Qe(P),t,n);await Uo(i,r),i.Bo=i.Bo.remove(s),i.Uo.delete(e),ta(i)}else await Jr(i.localStore,e,!1).then(()=>Xo(i,e,n)).catch(yr)}async function Ho(t,e){const n=_(t),i=e.batch.batchId;try{const t=await Wr(n.localStore,e);Yo(n,i,null),Ko(n,i),n.sharedClientState.updateMutationState(i,"acknowledged"),await ea(n,t)}catch(t){await yr(t)}}async function Wo(t,e,n){const i=_(t);try{const t=await function(t,e){const n=_(t);return n.persistence.runTransaction("Reject batch","readwrite-primary",t=>{let i;return n.An.lookupMutationBatch(t,e).next(e=>(b(null!==e),i=e.keys(),n.An.removeMutationBatch(t,e))).next(()=>n.An.performConsistencyCheck(t)).next(()=>n.Wn.vn(t,i))})}(i.localStore,e);Yo(i,e,n),Ko(i,e),i.sharedClientState.updateMutationState(e,"rejected",n),await ea(i,t)}catch(n){await yr(n)}}async function Go(t,e){const n=_(t);Ks(n.remoteStore)||p("SyncEngine","The network is disabled. The task returned by 'awaitPendingWrites()' will not complete until the network is enabled.");try{const t=await function(t){const e=_(t);return e.persistence.runTransaction("Get highest unacknowledged batch id","readonly",t=>e.An.getHighestUnacknowledgedBatchId(t))}(n.localStore);if(-1===t)return void e.resolve();const i=n.jo.get(t)||[];i.push(e),n.jo.set(t,i)}catch(t){const n=go(t,"Initialization of waitForPendingWrites() operation failed");e.reject(n)}}function Ko(t,e){(t.jo.get(e)||[]).forEach(t=>{t.resolve()}),t.jo.delete(e)}function Yo(t,e,n){const i=_(t);let r=i.Ko[i.currentUser.toKey()];if(r){const t=r.get(e);t&&(n?t.reject(n):t.resolve(),r=r.remove(e)),i.Ko[i.currentUser.toKey()]=r}}function Xo(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const i of t.Fo.get(e))t.Mo.delete(i),n&&t.Oo.zo(i,n);t.Fo.delete(e),t.isPrimaryClient&&t.qo.us(e).forEach(e=>{t.qo.containsKey(e)||Qo(t,e)})}function Qo(t,e){t.Lo.delete(e.path.canonicalString());const n=t.Bo.get(e);null!==n&&(qs(t.remoteStore,n),t.Bo=t.Bo.remove(e),t.Uo.delete(n),ta(t))}function Jo(t,e,n){for(const i of n)i instanceof Ro?(t.qo.addReference(i.key,e),Zo(t,i)):i instanceof Lo?(p("SyncEngine","Document no longer in limbo: "+i.key),t.qo.removeReference(i.key,e),t.qo.containsKey(i.key)||Qo(t,i.key)):y()}function Zo(t,e){const n=e.key,i=n.path.canonicalString();t.Bo.get(n)||t.Lo.has(i)||(p("SyncEngine","New document in limbo: "+n),t.Lo.add(i),ta(t))}function ta(t){for(;t.Lo.size>0&&t.Bo.size<t.maxConcurrentLimboResolutions;){const e=t.Lo.values().next().value;t.Lo.delete(e);const n=new at(H.fromString(e)),i=t.Qo.next();t.Uo.set(i,new Po(n)),t.Bo=t.Bo.insert(n,i),Us(t.remoteStore,new Fi(ne(Yt(n.path)),i,2,L.I))}}async function ea(t,e,n){const i=_(t),r=[],s=[],o=[];i.Mo.isEmpty()||(i.Mo.forEach((t,a)=>{o.push(i.Go(a,e,n).then(t=>{if(t){i.isPrimaryClient&&i.sharedClientState.updateQueryState(a.targetId,t.fromCache?"not-current":"current"),r.push(t);const e=Vr.$n(a.targetId,t);s.push(e)}}))}),await Promise.all(o),i.Oo.br(r),await async function(t,e){const n=_(t);try{await n.persistence.runTransaction("notifyLocalViewChanges","readwrite",t=>ki.forEach(e,e=>ki.forEach(e.kn,i=>n.persistence.referenceDelegate.addReference(t,e.targetId,i)).next(()=>ki.forEach(e.xn,i=>n.persistence.referenceDelegate.removeReference(t,e.targetId,i)))))}catch(t){if(!Ai(t))throw t;p("LocalStore","Failed to update sequence numbers: "+t)}for(const i of e){const t=i.targetId;if(!i.fromCache){const e=n.qn.get(t),i=e.snapshotVersion,r=e.withLastLimboFreeSnapshotVersion(i);n.qn=n.qn.insert(t,r)}}}(i.localStore,s))}async function na(t,e){const n=_(t);if(!n.currentUser.isEqual(e)){p("SyncEngine","User change. New user:",e.toKey());const t=await Hr(n.localStore,e);n.currentUser=e,function(t,e){t.jo.forEach(t=>{t.forEach(t=>{t.reject(new I(O.CANCELLED,e))})}),t.jo.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,t.removedBatchIds,t.addedBatchIds),await ea(n,t.Gn)}}function ia(t,e){const n=_(t),i=n.Uo.get(e);if(i&&i.$o)return an().add(i.key);{let t=an();const i=n.Fo.get(e);if(!i)return t;for(const e of i){const i=n.Mo.get(e);t=t.unionWith(i.view.bo)}return t}}async function ra(t,e){const n=_(t),i=await Zr(n.localStore,e.query,!0),r=e.view.ko(i);return n.isPrimaryClient&&Jo(n,e.targetId,r.Co),r}async function sa(t){const e=_(t);return es(e.localStore).then(t=>ea(e,t))}async function oa(t,e,n,i){const r=_(t),s=await function(t,e){const n=_(t),i=_(n.An);return n.persistence.runTransaction("Lookup mutation documents","readonly",t=>i.Zt(t,e).next(e=>e?n.Wn.vn(t,e):ki.resolve(null)))}(r.localStore,e);null!==s?("pending"===n?await eo(r.remoteStore):"acknowledged"===n||"rejected"===n?(Yo(r,e,i||null),Ko(r,e),function(t,e){_(_(t).An).ee(e)}(r.localStore,e)):y(),await ea(r,s)):p("SyncEngine","Cannot apply mutation batch with id: "+e)}async function aa(t,e){const n=_(t);if(fa(n),pa(n),!0===e&&!0!==n.Wo){const t=n.sharedClientState.getAllActiveQueryTargets(),e=await ca(n,t.toArray());n.Wo=!0,await ho(n.remoteStore,!0);for(const i of e)Us(n.remoteStore,i)}else if(!1===e&&!1!==n.Wo){const t=[];let e=Promise.resolve();n.Fo.forEach((i,r)=>{n.sharedClientState.isLocalQueryTarget(r)?t.push(r):e=e.then(()=>(Xo(n,r),Jr(n.localStore,r,!0))),qs(n.remoteStore,r)}),await e,await ca(n,t),function(t){const e=_(t);e.Uo.forEach((t,n)=>{qs(e.remoteStore,n)}),e.qo.hs(),e.Uo=new Map,e.Bo=new Ke(at.comparator)}(n),n.Wo=!1,await ho(n.remoteStore,!1)}}async function ca(t,e,n){const i=_(t),r=[],s=[];for(const o of e){let t;const e=i.Fo.get(o);if(e&&0!==e.length){t=await Qr(i.localStore,ne(e[0]));for(const t of e){const e=i.Mo.get(t),n=await ra(i,e);n.snapshot&&s.push(n.snapshot)}}else{const e=await ts(i.localStore,o);t=await Qr(i.localStore,e),await Fo(i,ua(e),o,!1)}r.push(t)}return i.Oo.br(s),r}function ua(t){return Kt(t.path,t.collectionGroup,t.orderBy,t.filters,t.limit,"F",t.startAt,t.endAt)}function la(t){const e=_(t);return _(_(e.localStore).persistence).Tn()}async function ha(t,e,n,i){const r=_(t);if(r.Wo)p("SyncEngine","Ignoring unexpected query state notification.");else if(r.Fo.has(e))switch(n){case"current":case"not-current":{const t=await es(r.localStore),i=ln.createSynthesizedRemoteEventForCurrentChange(e,"current"===n);await ea(r,t,i);break}case"rejected":await Jr(r.localStore,e,!0),Xo(r,e,i);break;default:y()}}async function da(t,e,n){const i=fa(t);if(i.Wo){for(const t of e){if(i.Fo.has(t)){p("SyncEngine","Adding an already active target "+t);continue}const e=await ts(i.localStore,t),n=await Qr(i.localStore,e);await Fo(i,ua(e),n.targetId,!1),Us(i.remoteStore,n)}for(const t of n)i.Fo.has(t)&&await Jr(i.localStore,t,!1).then(()=>{qs(i.remoteStore,t),Xo(i,t)}).catch(yr)}}function fa(t){const e=_(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=Uo.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=ia.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=zo.bind(null,e),e.Oo.br=So.bind(null,e.eventManager),e.Oo.zo=ko.bind(null,e.eventManager),e}function pa(t){const e=_(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=Ho.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=Wo.bind(null,e),e}function ma(t,e,n){const i=_(t);(async function(t,e,n){try{const i=await e.getMetadata();if(await function(t,e){const n=_(t),i=kn(e.createTime);return n.persistence.runTransaction("hasNewerBundle","readonly",t=>n.Ye.getBundleMetadata(t,e.id)).then(t=>!!t&&t.createTime.compareTo(i)>=0)}(t.localStore,i))return await e.close(),void n._completeWith(function(t){return{taskState:"Success",documentsLoaded:t.totalDocuments,bytesLoaded:t.totalBytes,totalDocuments:t.totalDocuments,totalBytes:t.totalBytes}}(i));n._updateProgress(jo(i));const r=new Ao(i,t.localStore,e.k);let s=await e.Ho();for(;s;){const t=await r.yo(s);t&&n._updateProgress(t),s=await e.Ho()}const o=await r.complete();await ea(t,o.In,void 0),await function(t,e){const n=_(t);return n.persistence.runTransaction("Save bundle","readwrite",t=>n.Ye.saveBundleMetadata(t,e))}(t.localStore,i),n._completeWith(o.progress)}catch(t){g("SyncEngine","Loading bundle failed with "+t),n._failWith(t)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */)(i,e,n).then(()=>{i.sharedClientState.notifyBundleLoaded()})}class ga{constructor(){this.synchronizeTabs=!1}async initialize(t){this.k=Rs(t.databaseInfo.databaseId),this.sharedClientState=this.Jo(t),this.persistence=this.Yo(t),await this.persistence.start(),this.gcScheduler=this.Xo(t),this.localStore=this.Zo(t)}Xo(t){return null}Zo(t){return zr(this.persistence,new Ur,t.initialUser,this.k)}Yo(t){return new ds(ps.ks,this.k)}Jo(t){return new Ss}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class va extends ga{constructor(t,e,n){super(),this.tc=t,this.cacheSizeBytes=e,this.forceOwnership=n,this.synchronizeTabs=!1}async initialize(t){await super.initialize(t),await ns(this.localStore),await this.tc.initialize(this,t),await pa(this.tc.syncEngine),await eo(this.tc.remoteStore),await this.persistence.sn(()=>(this.gcScheduler&&!this.gcScheduler.started&&this.gcScheduler.start(this.localStore),Promise.resolve()))}Zo(t){return zr(this.persistence,new Ur,t.initialUser,this.k)}Xo(t){const e=this.persistence.referenceDelegate.garbageCollector;return new _r(e,t.asyncQueue)}Yo(t){const e=$r(t.databaseInfo.databaseId,t.databaseInfo.persistenceKey),n=void 0!==this.cacheSizeBytes?sr.withCacheSize(this.cacheSizeBytes):sr.DEFAULT;return new Dr(this.synchronizeTabs,e,t.clientId,n,t.asyncQueue,As(),js(),this.k,this.sharedClientState,!!this.forceOwnership)}Jo(t){return new Ss}}class ya extends va{constructor(t,e){super(t,e,!1),this.tc=t,this.cacheSizeBytes=e,this.synchronizeTabs=!0}async initialize(t){await super.initialize(t);const e=this.tc.syncEngine;this.sharedClientState instanceof Is&&(this.sharedClientState.syncEngine={mi:oa.bind(null,e),gi:ha.bind(null,e),yi:da.bind(null,e),Tn:la.bind(null,e),_i:sa.bind(null,e)},await this.sharedClientState.start()),await this.persistence.sn(async t=>{await aa(this.tc.syncEngine,t),this.gcScheduler&&(t&&!this.gcScheduler.started?this.gcScheduler.start(this.localStore):t||this.gcScheduler.stop())})}Jo(t){const e=As();if(!Is.Pt(e))throw new I(O.UNIMPLEMENTED,"IndexedDB persistence is only available on platforms that support LocalStorage.");const n=$r(t.databaseInfo.databaseId,t.databaseInfo.persistenceKey);return new Is(e,t.asyncQueue,n,t.clientId,t.initialUser)}}class ba{async initialize(t,e){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(e),this.remoteStore=this.createRemoteStore(e),this.eventManager=this.createEventManager(e),this.syncEngine=this.createSyncEngine(e,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=t=>qo(this.syncEngine,t,1),this.remoteStore.remoteSyncer.handleCredentialChange=na.bind(null,this.syncEngine),await ho(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return new _o}createDatastore(t){const e=Rs(t.databaseInfo.databaseId),n=(i=t.databaseInfo,new Cs(i));var i;return function(t,e,n,i){return new Ms(t,e,n,i)}(t.authCredentials,t.appCheckCredentials,n,e)}createRemoteStore(t){return e=this.localStore,n=this.datastore,i=t.asyncQueue,r=t=>qo(this.syncEngine,t,0),s=Ts.Pt()?new Ts:new ks,new Fs(e,n,i,r,s);var e,n,i,r,s}createSyncEngine(t,e){return function(t,e,n,i,r,s,o){const a=new Mo(t,e,n,i,r,s);return o&&(a.Wo=!0),a}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,e)}terminate(){return async function(t){const e=_(t);p("RemoteStore","RemoteStore shutting down."),e.Gr.add(5),await Vs(e),e.Hr.shutdown(),e.Jr.set("Unknown")}(this.remoteStore)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wa(t,e=10240){let n=0;return{async read(){if(n<t.byteLength){const i={value:t.slice(n,n+e),done:!1};return n+=e,i}return{done:!0}},async cancel(){},releaseLock(){},closed:Promise.reject("unimplemented")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _a{constructor(t){this.observer=t,this.muted=!1}next(t){this.observer.next&&this.ec(this.observer.next,t)}error(t){this.observer.error?this.ec(this.observer.error,t):console.error("Uncaught Error in snapshot listener:",t)}nc(){this.muted=!0}ec(t,e){this.muted||setTimeout(()=>{this.muted||t(e)},0)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oa{constructor(t,e){this.sc=t,this.k=e,this.metadata=new S,this.buffer=new Uint8Array,this.ic=new TextDecoder("utf-8"),this.rc().then(t=>{t&&t._o()?this.metadata.resolve(t.payload.metadata):this.metadata.reject(new Error("The first element of the bundle is not a metadata, it is\n             "+JSON.stringify(null==t?void 0:t.payload)))},t=>this.metadata.reject(t))}close(){return this.sc.cancel()}async getMetadata(){return this.metadata.promise}async Ho(){return await this.getMetadata(),this.rc()}async rc(){const t=await this.oc();if(null===t)return null;const e=this.ic.decode(t),n=Number(e);isNaN(n)&&this.cc(`length string (${e}) is not valid number`);const i=await this.ac(n);return new xo(JSON.parse(i),t.length+n)}uc(){return this.buffer.findIndex(t=>t==="{".charCodeAt(0))}async oc(){for(;this.uc()<0;)if(await this.hc())break;if(0===this.buffer.length)return null;const t=this.uc();t<0&&this.cc("Reached the end of bundle when a length string is expected.");const e=this.buffer.slice(0,t);return this.buffer=this.buffer.slice(t),e}async ac(t){for(;this.buffer.length<t;)await this.hc()&&this.cc("Reached the end of bundle when more is expected.");const e=this.ic.decode(this.buffer.slice(0,t));return this.buffer=this.buffer.slice(t),e}cc(t){throw this.sc.cancel(),new Error("Invalid bundle format: "+t)}async hc(){const t=await this.sc.read();if(!t.done){const e=new Uint8Array(this.buffer.length+t.value.length);e.set(this.buffer),e.set(t.value,this.buffer.length),this.buffer=e}return t.done}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ia{constructor(t){this.datastore=t,this.readVersions=new Map,this.mutations=[],this.committed=!1,this.lastWriteError=null,this.writtenDocs=new Set}async lookup(t){if(this.ensureCommitNotCalled(),this.mutations.length>0)throw new I(O.INVALID_ARGUMENT,"Firestore transactions require all reads to be executed before all writes.");const e=await async function(t,e){const n=_(t),i=Rn(n.k)+"/documents",r={documents:e.map(t=>xn(n.k,t))},s=await n.ji("BatchGetDocuments",i,r),o=new Map;s.forEach(t=>{const e=Pn(n.k,t);o.set(e.key.toString(),e)});const a=[];return e.forEach(t=>{const e=o.get(t.toString());b(!!e),a.push(e)}),a}(this.datastore,t);return e.forEach(t=>this.recordVersion(t)),e}set(t,e){this.write(e.toMutation(t,this.precondition(t))),this.writtenDocs.add(t.toString())}update(t,e){try{this.write(e.toMutation(t,this.preconditionForUpdate(t)))}catch(t){this.lastWriteError=t}this.writtenDocs.add(t.toString())}delete(t){this.write(new Ve(t,this.precondition(t))),this.writtenDocs.add(t.toString())}async commit(){if(this.ensureCommitNotCalled(),this.lastWriteError)throw this.lastWriteError;const t=this.readVersions;this.mutations.forEach(e=>{t.delete(e.key.toString())}),t.forEach((t,e)=>{const n=at.fromPath(e);this.mutations.push(new Ue(n,this.precondition(n)))}),await async function(t,e){const n=_(t),i=Rn(n.k)+"/documents",r={writes:e.map(t=>$n(n.k,t))};await n.Bi("Commit",i,r)}(this.datastore,this.mutations),this.committed=!0}recordVersion(t){let e;if(t.isFoundDocument())e=t.version;else{if(!t.isNoDocument())throw y();e=B.min()}const n=this.readVersions.get(t.key.toString());if(n){if(!e.isEqual(n))throw new I(O.ABORTED,"Document version changed between two reads.")}else this.readVersions.set(t.key.toString(),e)}precondition(t){const e=this.readVersions.get(t.toString());return!this.writtenDocs.has(t.toString())&&e?xe.updateTime(e):xe.none()}preconditionForUpdate(t){const e=this.readVersions.get(t.toString());if(!this.writtenDocs.has(t.toString())&&e){if(e.isEqual(B.min()))throw new I(O.INVALID_ARGUMENT,"Can't update a document that doesn't exist.");return xe.updateTime(e)}return xe.exists(!0)}write(t){this.ensureCommitNotCalled(),this.mutations.push(t)}ensureCommitNotCalled(){}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sa{constructor(t,e,n,i){this.asyncQueue=t,this.datastore=e,this.updateFunction=n,this.deferred=i,this.lc=5,this.ur=new Ls(this.asyncQueue,"transaction_retry")}run(){this.lc-=1,this.fc()}fc(){this.ur.Zi(async()=>{const t=new Ia(this.datastore),e=this.dc(t);e&&e.then(e=>{this.asyncQueue.enqueueAndForget(()=>t.commit().then(()=>{this.deferred.resolve(e)}).catch(t=>{this.wc(t)}))}).catch(t=>{this.wc(t)})})}dc(t){try{const e=this.updateFunction(t);return!rt(e)&&e.catch&&e.then?e:(this.deferred.reject(Error("Transaction callback must return a Promise")),null)}catch(t){return this.deferred.reject(t),null}}wc(t){this.lc>0&&this._c(t)?(this.lc-=1,this.asyncQueue.enqueueAndForget(()=>(this.fc(),Promise.resolve()))):this.deferred.reject(t)}_c(t){if("FirebaseError"===t.name){const e=t.code;return"aborted"===e||"failed-precondition"===e||!We(e)}return!1}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ka{constructor(t,e,n,i){this.authCredentials=t,this.appCheckCredentials=e,this.asyncQueue=n,this.databaseInfo=i,this.user=u.UNAUTHENTICATED,this.clientId=D.A(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(n,async t=>{p("FirestoreClient","Received user=",t.uid),await this.authCredentialListener(t),this.user=t}),this.appCheckCredentials.start(n,t=>(p("FirestoreClient","Received new app check token=",t),this.appCheckCredentialListener(t,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new I(O.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const t=new S;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(e){const n=go(e,"Failed to shutdown persistence");t.reject(n)}}),t.promise}}async function Ta(t,e){t.asyncQueue.verifyOperationInProgress(),p("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let i=n.initialUser;t.setCredentialChangeListener(async t=>{i.isEqual(t)||(await Hr(e.localStore,t),i=t)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t.offlineComponents=e}async function Ea(t,e){t.asyncQueue.verifyOperationInProgress();const n=await xa(t);p("FirestoreClient","Initializing OnlineComponentProvider");const i=await t.getConfiguration();await e.initialize(n,i),t.setCredentialChangeListener(t=>lo(e.remoteStore,t)),t.setAppCheckTokenChangeListener((t,n)=>lo(e.remoteStore,n)),t.onlineComponents=e}async function xa(t){return t.offlineComponents||(p("FirestoreClient","Using default OfflineComponentProvider"),await Ta(t,new ga)),t.offlineComponents}async function Ca(t){return t.onlineComponents||(p("FirestoreClient","Using default OnlineComponentProvider"),await Ea(t,new ba)),t.onlineComponents}function Aa(t){return xa(t).then(t=>t.persistence)}function ja(t){return xa(t).then(t=>t.localStore)}function Ra(t){return Ca(t).then(t=>t.remoteStore)}function La(t){return Ca(t).then(t=>t.syncEngine)}async function Na(t){const e=await Ca(t),n=e.eventManager;return n.onListen=$o.bind(null,e.syncEngine),n.onUnlisten=Bo.bind(null,e.syncEngine),n}function Da(t){return t.asyncQueue.enqueue(async()=>{const e=await Aa(t),n=await Ra(t);return e.setNetworkEnabled(!0),function(t){const e=_(t);return e.Gr.delete(0),Bs(e)}(n)})}function Pa(t){return t.asyncQueue.enqueue(async()=>{const e=await Aa(t),n=await Ra(t);return e.setNetworkEnabled(!1),async function(t){const e=_(t);e.Gr.add(0),await Vs(e),e.Jr.set("Offline")}(n)})}function Ma(t,e){const n=new S;return t.asyncQueue.enqueueAndForget(async()=>async function(t,e,n){try{const i=await function(t,e){const n=_(t);return n.persistence.runTransaction("read document","readonly",t=>n.Wn.Rn(t,e))}(t,e);i.isFoundDocument()?n.resolve(i):i.isNoDocument()?n.resolve(null):n.reject(new I(O.UNAVAILABLE,"Failed to get document from cache. (However, this document may exist on the server. Run again without setting 'source' in the GetOptions to attempt to retrieve the document from the server.)"))}catch(t){const i=go(t,`Failed to get document '${e} from cache`);n.reject(i)}}(await ja(t),e,n)),n.promise}function $a(t,e,n={}){const i=new S;return t.asyncQueue.enqueueAndForget(async()=>function(t,e,n,i,r){const s=new _a({next:s=>{e.enqueueAndForget(()=>Io(t,o));const a=s.docs.has(n);!a&&s.fromCache?r.reject(new I(O.UNAVAILABLE,"Failed to get document because the client is offline.")):a&&s.fromCache&&i&&"server"===i.source?r.reject(new I(O.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):r.resolve(s)},error:t=>r.reject(t)}),o=new Eo(Yt(n.path),s,{includeMetadataChanges:!0,wo:!0});return Oo(t,o)}(await Na(t),t.asyncQueue,e,n,i)),i.promise}function Fa(t,e){const n=new S;return t.asyncQueue.enqueueAndForget(async()=>async function(t,e,n){try{const i=await Zr(t,e,!0),r=new No(e,i.zn),s=r.Po(i.documents),o=r.applyChanges(s,!1);n.resolve(o.snapshot)}catch(t){const i=go(t,`Failed to execute query '${e} against cache`);n.reject(i)}}(await ja(t),e,n)),n.promise}function Ba(t,e,n={}){const i=new S;return t.asyncQueue.enqueueAndForget(async()=>function(t,e,n,i,r){const s=new _a({next:n=>{e.enqueueAndForget(()=>Io(t,o)),n.fromCache&&"server"===i.source?r.reject(new I(O.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):r.resolve(n)},error:t=>r.reject(t)}),o=new Eo(n,s,{includeMetadataChanges:!0,wo:!0});return Oo(t,o)}(await Na(t),t.asyncQueue,e,n,i)),i.promise}function Va(t,e){const n=new _a(e);return t.asyncQueue.enqueueAndForget(async()=>function(t,e){_(t).io.add(e),e.next()}(await Na(t),n)),()=>{n.nc(),t.asyncQueue.enqueueAndForget(async()=>function(t,e){_(t).io.delete(e)}(await Na(t),n))}}function Ua(t,e){const n=new S;return t.asyncQueue.enqueueAndForget(async()=>{const i=await function(t){return Ca(t).then(t=>t.datastore)}(t);new Sa(t.asyncQueue,i,e,n).run()}),n.promise}function qa(t,e,n,i){const r=function(t,e){let n;return n="string"==typeof t?(new TextEncoder).encode(t):t,function(t,e){return new Oa(t,e)}(function(t,e){if(t instanceof Uint8Array)return wa(t,e);if(t instanceof ArrayBuffer)return wa(new Uint8Array(t),e);if(t instanceof ReadableStream)return t.getReader();throw new Error("Source of `toByteStreamReader` has to be a ArrayBuffer or ReadableStream")}(n),e)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(n,Rs(e));t.asyncQueue.enqueueAndForget(async()=>{ma(await La(t),r,i)})}function za(t,e){return t.asyncQueue.enqueue(async()=>function(t,e){const n=_(t);return n.persistence.runTransaction("Get named query","readonly",t=>n.Ye.getNamedQuery(t,e))}(await ja(t),e))}class Ha{constructor(t,e,n,i,r,s,o,a){this.databaseId=t,this.appId=e,this.persistenceKey=n,this.host=i,this.ssl=r,this.forceLongPolling=s,this.autoDetectLongPolling=o,this.useFetchStreams=a}}class Wa{constructor(t,e){this.projectId=t,this.database=e||"(default)"}get isDefaultDatabase(){return"(default)"===this.database}isEqual(t){return t instanceof Wa&&t.projectId===this.projectId&&t.database===this.database}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ga=new Map;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ka(t,e,n){if(!n)throw new I(O.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function Ya(t,e,n,i){if(!0===e&&!0===i)throw new I(O.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Xa(t){if(!at.isDocumentKey(t))throw new I(O.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Qa(t){if(at.isDocumentKey(t))throw new I(O.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Ja(t){if(void 0===t)return"undefined";if(null===t)return"null";if("string"==typeof t)return t.length>20&&(t=t.substring(0,20)+"..."),JSON.stringify(t);if("number"==typeof t||"boolean"==typeof t)return""+t;if("object"==typeof t){if(t instanceof Array)return"an array";{const e=function(t){return t.constructor?t.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return"function"==typeof t?"a function":y()}function Za(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new I(O.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Ja(t);throw new I(O.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}function tc(t,e){if(e<=0)throw new I(O.INVALID_ARGUMENT,`Function ${t}() requires a positive number, but it was: ${e}.`)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ec{constructor(t){var e;if(void 0===t.host){if(void 0!==t.ssl)throw new I(O.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=null===(e=t.ssl)||void 0===e||e;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,void 0===t.cacheSizeBytes)this.cacheSizeBytes=41943040;else{if(-1!==t.cacheSizeBytes&&t.cacheSizeBytes<1048576)throw new I(O.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.useFetchStreams=!!t.useFetchStreams,Ya("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling)}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nc{constructor(t,e,n){this._authCredentials=e,this._appCheckCredentials=n,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new ec({}),this._settingsFrozen=!1,t instanceof Wa?this._databaseId=t:(this._app=t,this._databaseId=function(t){if(!Object.prototype.hasOwnProperty.apply(t.options,["projectId"]))throw new I(O.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Wa(t.options.projectId)}(t))}get app(){if(!this._app)throw new I(O.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return void 0!==this._terminateTask}_setSettings(t){if(this._settingsFrozen)throw new I(O.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new ec(t),void 0!==t.credentials&&(this._authCredentials=function(t){if(!t)return new T;switch(t.type){case"gapi":const e=t.client;return b(!("object"!=typeof e||null===e||!e.auth||!e.auth.getAuthHeaderValueForFirstParty)),new A(e,t.sessionIndex||"0",t.iamToken||null);case"provider":return t.client;default:throw new I(O.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const e=Ga.get(t);e&&(p("ComponentProvider","Removing Datastore"),Ga.delete(t),e.terminate())}(this),Promise.resolve()}}function ic(t,e,n,i={}){var r;const s=(t=Za(t,nc))._getSettings();if("firestore.googleapis.com"!==s.host&&s.host!==e&&g("Host has been set in both settings() and useEmulator(), emulator host will be used"),t._setSettings(Object.assign(Object.assign({},s),{host:`${e}:${n}`,ssl:!1})),i.mockUserToken){let e,n;if("string"==typeof i.mockUserToken)e=i.mockUserToken,n=u.MOCK_USER;else{e=Object(o["f"])(i.mockUserToken,null===(r=t._app)||void 0===r?void 0:r.options.projectId);const s=i.mockUserToken.sub||i.mockUserToken.user_id;if(!s)throw new I(O.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");n=new u(s)}t._authCredentials=new E(new k(e,n))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rc{constructor(t,e,n){this.converter=e,this._key=n,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new oc(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new rc(this.firestore,t,this._key)}}class sc{constructor(t,e,n){this.converter=e,this._query=n,this.type="query",this.firestore=t}withConverter(t){return new sc(this.firestore,t,this._query)}}class oc extends sc{constructor(t,e,n){super(t,e,Yt(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new rc(this.firestore,null,new at(t))}withConverter(t){return new oc(this.firestore,t,this._path)}}function ac(t,e,...n){if(t=Object(o["k"])(t),Ka("collection","path",e),t instanceof nc){const i=H.fromString(e,...n);return Qa(i),new oc(t,null,i)}{if(!(t instanceof rc||t instanceof oc))throw new I(O.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=t._path.child(H.fromString(e,...n));return Qa(i),new oc(t.firestore,null,i)}}function cc(t,e){if(t=Za(t,nc),Ka("collectionGroup","collection id",e),e.indexOf("/")>=0)throw new I(O.INVALID_ARGUMENT,`Invalid collection ID '${e}' passed to function collectionGroup(). Collection IDs must not contain '/'.`);return new sc(t,null,function(t){return new Gt(H.emptyPath(),t)}(e))}function uc(t,e,...n){if(t=Object(o["k"])(t),1===arguments.length&&(e=D.A()),Ka("doc","path",e),t instanceof nc){const i=H.fromString(e,...n);return Xa(i),new rc(t,null,new at(i))}{if(!(t instanceof rc||t instanceof oc))throw new I(O.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=t._path.child(H.fromString(e,...n));return Xa(i),new rc(t.firestore,t instanceof oc?t.converter:null,new at(i))}}function lc(t,e){return t=Object(o["k"])(t),e=Object(o["k"])(e),(t instanceof rc||t instanceof oc)&&(e instanceof rc||e instanceof oc)&&t.firestore===e.firestore&&t.path===e.path&&t.converter===e.converter}function hc(t,e){return t=Object(o["k"])(t),e=Object(o["k"])(e),t instanceof sc&&e instanceof sc&&t.firestore===e.firestore&&re(t._query,e._query)&&t.converter===e.converter
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}class dc{constructor(){this.mc=Promise.resolve(),this.gc=[],this.yc=!1,this.Tc=[],this.Ec=null,this.Ic=!1,this.Ac=!1,this.Rc=[],this.ur=new Ls(this,"async_queue_retry"),this.bc=()=>{const t=js();t&&p("AsyncQueue","Visibility state changed to "+t.visibilityState),this.ur.er()};const t=js();t&&"function"==typeof t.addEventListener&&t.addEventListener("visibilitychange",this.bc)}get isShuttingDown(){return this.yc}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.Pc(),this.vc(t)}enterRestrictedMode(t){if(!this.yc){this.yc=!0,this.Ac=t||!1;const e=js();e&&"function"==typeof e.removeEventListener&&e.removeEventListener("visibilitychange",this.bc)}}enqueue(t){if(this.Pc(),this.yc)return new Promise(()=>{});const e=new S;return this.vc(()=>this.yc&&this.Ac?Promise.resolve():(t().then(e.resolve,e.reject),e.promise)).then(()=>e.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.gc.push(t),this.Vc()))}async Vc(){if(0!==this.gc.length){try{await this.gc[0](),this.gc.shift(),this.ur.reset()}catch(t){if(!Ai(t))throw t;p("AsyncQueue","Operation failed with retryable error: "+t)}this.gc.length>0&&this.ur.Zi(()=>this.Vc())}}vc(t){const e=this.mc.then(()=>(this.Ic=!0,t().catch(t=>{this.Ec=t,this.Ic=!1;const e=function(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+"\n"+t.stack),e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t);throw m("INTERNAL UNHANDLED ERROR: ",e),t}).then(t=>(this.Ic=!1,t))));return this.mc=e,e}enqueueAfterDelay(t,e,n){this.Pc(),this.Rc.indexOf(t)>-1&&(e=0);const i=mo.createAndSchedule(this,t,e,n,t=>this.Sc(t));return this.Tc.push(i),i}Pc(){this.Ec&&y()}verifyOperationInProgress(){}async Dc(){let t;do{t=this.mc,await t}while(t!==this.mc)}Cc(t){for(const e of this.Tc)if(e.timerId===t)return!0;return!1}Nc(t){return this.Dc().then(()=>{this.Tc.sort((t,e)=>t.targetTimeMs-e.targetTimeMs);for(const e of this.Tc)if(e.skipDelay(),"all"!==t&&e.timerId===t)break;return this.Dc()})}kc(t){this.Rc.push(t)}Sc(t){const e=this.Tc.indexOf(t);this.Tc.splice(e,1)}}function fc(t){return function(t,e){if("object"!=typeof t||null===t)return!1;const n=t;for(const i of e)if(i in n&&"function"==typeof n[i])return!0;return!1}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t,["next","error","complete"])}class pc{constructor(){this._progressObserver={},this._taskCompletionResolver=new S,this._lastProgress={taskState:"Running",totalBytes:0,totalDocuments:0,bytesLoaded:0,documentsLoaded:0}}onProgress(t,e,n){this._progressObserver={next:t,error:e,complete:n}}catch(t){return this._taskCompletionResolver.promise.catch(t)}then(t,e){return this._taskCompletionResolver.promise.then(t,e)}_completeWith(t){this._updateProgress(t),this._progressObserver.complete&&this._progressObserver.complete(),this._taskCompletionResolver.resolve(t)}_failWith(t){this._lastProgress.taskState="Error",this._progressObserver.next&&this._progressObserver.next(this._lastProgress),this._progressObserver.error&&this._progressObserver.error(t),this._taskCompletionResolver.reject(t)}_updateProgress(t){this._lastProgress=t,this._progressObserver.next&&this._progressObserver.next(t)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mc=-1;class gc extends nc{constructor(t,e,n){super(t,e,n),this.type="firestore",this._queue=new dc,this._persistenceKey="name"in t?t.name:"[DEFAULT]"}_terminate(){return this._firestoreClient||yc(this),this._firestoreClient.terminate()}}function vc(t){return t._firestoreClient||yc(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function yc(t){var e;const n=t._freezeSettings(),i=function(t,e,n,i){return new Ha(t,e,n,i.host,i.ssl,i.experimentalForceLongPolling,i.experimentalAutoDetectLongPolling,i.useFetchStreams)}(t._databaseId,(null===(e=t._app)||void 0===e?void 0:e.options.appId)||"",t._persistenceKey,n);t._firestoreClient=new ka(t._authCredentials,t._appCheckCredentials,t._queue,i)}function bc(t,e){xc(t=Za(t,gc));const n=vc(t),i=t._freezeSettings(),r=new ba;return _c(n,r,new va(r,i.cacheSizeBytes,null==e?void 0:e.forceOwnership))}function wc(t){xc(t=Za(t,gc));const e=vc(t),n=t._freezeSettings(),i=new ba;return _c(e,i,new ya(i,n.cacheSizeBytes))}function _c(t,e,n){const i=new S;return t.asyncQueue.enqueue(async()=>{try{await Ta(t,n),await Ea(t,e),i.resolve()}catch(t){if(!function(t){return"FirebaseError"===t.name?t.code===O.FAILED_PRECONDITION||t.code===O.UNIMPLEMENTED:!("undefined"!=typeof DOMException&&t instanceof DOMException)||(22===t.code||20===t.code||11===t.code)}(t))throw t;console.warn("Error enabling offline persistence. Falling back to persistence disabled: "+t),i.reject(t)}}).then(()=>i.promise)}function Oc(t){if(t._initialized&&!t._terminated)throw new I(O.FAILED_PRECONDITION,"Persistence can only be cleared before a Firestore instance is initialized or after it is terminated.");const e=new S;return t._queue.enqueueAndForgetEvenWhileRestricted(async()=>{try{await async function(t){if(!Ei.Pt())return Promise.resolve();const e=t+"main";await Ei.delete(e)}($r(t._databaseId,t._persistenceKey)),e.resolve()}catch(t){e.reject(t)}}),e.promise}function Ic(t){return function(t){const e=new S;return t.asyncQueue.enqueueAndForget(async()=>Go(await La(t),e)),e.promise}(vc(t=Za(t,gc)))}function Sc(t){return Da(vc(t=Za(t,gc)))}function kc(t){return Pa(vc(t=Za(t,gc)))}function Tc(t,e){const n=vc(t=Za(t,gc)),i=new pc;return qa(n,t._databaseId,e,i),i}function Ec(t,e){return za(vc(t=Za(t,gc)),e).then(e=>e?new sc(t,null,e.query):null)}function xc(t){if(t._initialized||t._terminated)throw new I(O.FAILED_PRECONDITION,"Firestore has already been started and persistence can no longer be enabled. You can only enable persistence before calling any other methods on a Firestore object.")}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cc{constructor(...t){for(let e=0;e<t.length;++e)if(0===t[e].length)throw new I(O.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new G(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ac{constructor(t){this._byteString=t}static fromBase64String(t){try{return new Ac(X.fromBase64String(t))}catch(t){throw new I(O.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(t){return new Ac(X.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jc{constructor(t){this._methodName=t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rc{constructor(t,e){if(!isFinite(t)||t<-90||t>90)throw new I(O.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(e)||e<-180||e>180)throw new I(O.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+e);this._lat=t,this._long=e}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return P(this._lat,t._lat)||P(this._long,t._long)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lc=/^__.*__$/;class Nc{constructor(t,e,n){this.data=t,this.fieldMask=e,this.fieldTransforms=n}toMutation(t,e){return null!==this.fieldMask?new Me(t,this.data,this.fieldMask,e,this.fieldTransforms):new Pe(t,this.data,e,this.fieldTransforms)}}class Dc{constructor(t,e,n){this.data=t,this.fieldMask=e,this.fieldTransforms=n}toMutation(t,e){return new Me(t,this.data,this.fieldMask,e,this.fieldTransforms)}}function Pc(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw y()}}class Mc{constructor(t,e,n,i,r,s){this.settings=t,this.databaseId=e,this.k=n,this.ignoreUndefinedProperties=i,void 0===r&&this.xc(),this.fieldTransforms=r||[],this.fieldMask=s||[]}get path(){return this.settings.path}get $c(){return this.settings.$c}Oc(t){return new Mc(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.k,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Mc(t){var e;const n=null===(e=this.path)||void 0===e?void 0:e.child(t),i=this.Oc({path:n,Fc:!1});return i.Lc(t),i}Bc(t){var e;const n=null===(e=this.path)||void 0===e?void 0:e.child(t),i=this.Oc({path:n,Fc:!1});return i.xc(),i}Uc(t){return this.Oc({path:void 0,Fc:!0})}qc(t){return iu(t,this.settings.methodName,this.settings.Kc||!1,this.path,this.settings.jc)}contains(t){return void 0!==this.fieldMask.find(e=>t.isPrefixOf(e))||void 0!==this.fieldTransforms.find(e=>t.isPrefixOf(e.field))}xc(){if(this.path)for(let t=0;t<this.path.length;t++)this.Lc(this.path.get(t))}Lc(t){if(0===t.length)throw this.qc("Document fields must not be empty");if(Pc(this.$c)&&Lc.test(t))throw this.qc('Document fields cannot begin and end with "__"')}}class $c{constructor(t,e,n){this.databaseId=t,this.ignoreUndefinedProperties=e,this.k=n||Rs(t)}Qc(t,e,n,i=!1){return new Mc({$c:t,methodName:e,jc:n,path:G.emptyPath(),Fc:!1,Kc:i},this.databaseId,this.k,this.ignoreUndefinedProperties)}}function Fc(t){const e=t._freezeSettings(),n=Rs(t._databaseId);return new $c(t._databaseId,!!e.ignoreUndefinedProperties,n)}function Bc(t,e,n,i,r,s={}){const o=t.Qc(s.merge||s.mergeFields?2:0,e,n,r);Zc("Data must be an object, but it was:",o,i);const a=Qc(i,o);let c,u;if(s.merge)c=new K(o.fieldMask),u=o.fieldTransforms;else if(s.mergeFields){const t=[];for(const i of s.mergeFields){const r=tu(e,i,n);if(!o.contains(r))throw new I(O.INVALID_ARGUMENT,`Field '${r}' is specified in your field mask but missing from your input data.`);ru(t,r)||t.push(r)}c=new K(t),u=o.fieldTransforms.filter(t=>c.covers(t.field))}else c=null,u=o.fieldTransforms;return new Nc(new Ot(a),c,u)}class Vc extends jc{_toFieldTransform(t){if(2!==t.$c)throw 1===t.$c?t.qc(this._methodName+"() can only appear at the top level of your update data"):t.qc(this._methodName+"() cannot be used with set() unless you pass {merge:true}");return t.fieldMask.push(t.path),null}isEqual(t){return t instanceof Vc}}function Uc(t,e,n){return new Mc({$c:3,jc:e.settings.jc,methodName:t._methodName,Fc:n},e.databaseId,e.k,e.ignoreUndefinedProperties)}class qc extends jc{_toFieldTransform(t){return new ke(t.path,new ve)}isEqual(t){return t instanceof qc}}class zc extends jc{constructor(t,e){super(t),this.Wc=e}_toFieldTransform(t){const e=Uc(this,t,!0),n=this.Wc.map(t=>Xc(t,e)),i=new ye(n);return new ke(t.path,i)}isEqual(t){return this===t}}class Hc extends jc{constructor(t,e){super(t),this.Wc=e}_toFieldTransform(t){const e=Uc(this,t,!0),n=this.Wc.map(t=>Xc(t,e)),i=new we(n);return new ke(t.path,i)}isEqual(t){return this===t}}class Wc extends jc{constructor(t,e){super(t),this.Gc=e}_toFieldTransform(t){const e=new Oe(t.k,de(t.k,this.Gc));return new ke(t.path,e)}isEqual(t){return this===t}}function Gc(t,e,n,i){const r=t.Qc(1,e,n);Zc("Data must be an object, but it was:",r,i);const s=[],a=Ot.empty();U(i,(t,i)=>{const c=nu(e,t,n);i=Object(o["k"])(i);const u=r.Bc(c);if(i instanceof Vc)s.push(c);else{const t=Xc(i,u);null!=t&&(s.push(c),a.set(c,t))}});const c=new K(s);return new Dc(a,c,r.fieldTransforms)}function Kc(t,e,n,i,r,s){const a=t.Qc(1,e,n),c=[tu(e,i,n)],u=[r];if(s.length%2!=0)throw new I(O.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let o=0;o<s.length;o+=2)c.push(tu(e,s[o])),u.push(s[o+1]);const l=[],h=Ot.empty();for(let f=c.length-1;f>=0;--f)if(!ru(l,c[f])){const t=c[f];let e=u[f];e=Object(o["k"])(e);const n=a.Bc(t);if(e instanceof Vc)l.push(t);else{const i=Xc(e,n);null!=i&&(l.push(t),h.set(t,i))}}const d=new K(l);return new Dc(h,d,a.fieldTransforms)}function Yc(t,e,n,i=!1){return Xc(n,t.Qc(i?4:3,e))}function Xc(t,e){if(Jc(t=Object(o["k"])(t)))return Zc("Unsupported field value:",e,t),Qc(t,e);if(t instanceof jc)return function(t,e){if(!Pc(e.$c))throw e.qc(t._methodName+"() can only be used with update() and set()");if(!e.path)throw e.qc(t._methodName+"() is not currently supported inside arrays");const n=t._toFieldTransform(e);n&&e.fieldTransforms.push(n)}(t,e),null;if(void 0===t&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.Fc&&4!==e.$c)throw e.qc("Nested arrays are not supported");return function(t,e){const n=[];let i=0;for(const r of t){let t=Xc(r,e.Uc(i));null==t&&(t={nullValue:"NULL_VALUE"}),n.push(t),i++}return{arrayValue:{values:n}}}(t,e)}return function(t,e){if(null===(t=Object(o["k"])(t)))return{nullValue:"NULL_VALUE"};if("number"==typeof t)return de(e.k,t);if("boolean"==typeof t)return{booleanValue:t};if("string"==typeof t)return{stringValue:t};if(t instanceof Date){const n=F.fromDate(t);return{timestampValue:On(e.k,n)}}if(t instanceof F){const n=new F(t.seconds,1e3*Math.floor(t.nanoseconds/1e3));return{timestampValue:On(e.k,n)}}if(t instanceof Rc)return{geoPointValue:{latitude:t.latitude,longitude:t.longitude}};if(t instanceof Ac)return{bytesValue:In(e.k,t._byteString)};if(t instanceof rc){const n=e.databaseId,i=t.firestore._databaseId;if(!i.isEqual(n))throw e.qc(`Document reference is for database ${i.projectId}/${i.database} but should be for database ${n.projectId}/${n.database}`);return{referenceValue:Tn(t.firestore._databaseId||e.databaseId,t._key.path)}}throw e.qc("Unsupported field value: "+Ja(t))}(t,e)}function Qc(t,e){const n={};return q(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):U(t,(t,i)=>{const r=Xc(i,e.Mc(t));null!=r&&(n[t]=r)}),{mapValue:{fields:n}}}function Jc(t){return!("object"!=typeof t||null===t||t instanceof Array||t instanceof Date||t instanceof F||t instanceof Rc||t instanceof Ac||t instanceof rc||t instanceof jc)}function Zc(t,e,n){if(!Jc(n)||!function(t){return"object"==typeof t&&null!==t&&(Object.getPrototypeOf(t)===Object.prototype||null===Object.getPrototypeOf(t))}(n)){const i=Ja(n);throw"an object"===i?e.qc(t+" a custom object"):e.qc(t+" "+i)}}function tu(t,e,n){if((e=Object(o["k"])(e))instanceof Cc)return e._internalPath;if("string"==typeof e)return nu(t,e);throw iu("Field path arguments must be of type string or ",t,!1,void 0,n)}const eu=new RegExp("[~\\*/\\[\\]]");function nu(t,e,n){if(e.search(eu)>=0)throw iu(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Cc(...e.split("."))._internalPath}catch(i){throw iu(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function iu(t,e,n,i,r){const s=i&&!i.isEmpty(),o=void 0!==r;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(s||o)&&(c+=" (found",s&&(c+=" in field "+i),o&&(c+=" in document "+r),c+=")"),new I(O.INVALID_ARGUMENT,a+t+c)}function ru(t,e){return t.some(t=>t.isEqual(e))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class su{constructor(t,e,n,i,r){this._firestore=t,this._userDataWriter=e,this._key=n,this._document=i,this._converter=r}get id(){return this._key.path.lastSegment()}get ref(){return new rc(this._firestore,this._converter,this._key)}exists(){return null!==this._document}data(){if(this._document){if(this._converter){const t=new ou(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const e=this._document.data.field(au("DocumentSnapshot.get",t));if(null!==e)return this._userDataWriter.convertValue(e)}}}class ou extends su{data(){return super.data()}}function au(t,e){return"string"==typeof e?nu(t,e):e instanceof Cc?e._internalPath:e._delegate._internalPath}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cu{constructor(t,e){this.hasPendingWrites=t,this.fromCache=e}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class uu extends su{constructor(t,e,n,i,r,s){super(t,e,n,i,s),this._firestore=t,this._firestoreImpl=t,this.metadata=r}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const e=new lu(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(e,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,e={}){if(this._document){const n=this._document.data.field(au("DocumentSnapshot.get",t));if(null!==n)return this._userDataWriter.convertValue(n,e.serverTimestamps)}}}class lu extends uu{data(t={}){return super.data(t)}}class hu{constructor(t,e,n,i){this._firestore=t,this._userDataWriter=e,this._snapshot=i,this.metadata=new cu(i.hasPendingWrites,i.fromCache),this.query=n}get docs(){const t=[];return this.forEach(e=>t.push(e)),t}get size(){return this._snapshot.docs.size}get empty(){return 0===this.size}forEach(t,e){this._snapshot.docs.forEach(n=>{t.call(e,new lu(this._firestore,this._userDataWriter,n.key,n,new cu(this._snapshot.mutatedKeys.has(n.key),this._snapshot.fromCache),this.query.converter))})}docChanges(t={}){const e=!!t.includeMetadataChanges;if(e&&this._snapshot.excludesMetadataChanges)throw new I(O.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===e||(this._cachedChanges=function(t,e){if(t._snapshot.oldDocs.isEmpty()){let e=0;return t._snapshot.docChanges.map(n=>({type:"added",doc:new lu(t._firestore,t._userDataWriter,n.doc.key,n.doc,new cu(t._snapshot.mutatedKeys.has(n.doc.key),t._snapshot.fromCache),t.query.converter),oldIndex:-1,newIndex:e++}))}{let n=t._snapshot.oldDocs;return t._snapshot.docChanges.filter(t=>e||3!==t.type).map(e=>{const i=new lu(t._firestore,t._userDataWriter,e.doc.key,e.doc,new cu(t._snapshot.mutatedKeys.has(e.doc.key),t._snapshot.fromCache),t.query.converter);let r=-1,s=-1;return 0!==e.type&&(r=n.indexOf(e.doc.key),n=n.delete(e.doc.key)),1!==e.type&&(n=n.add(e.doc),s=n.indexOf(e.doc.key)),{type:du(e.type),doc:i,oldIndex:r,newIndex:s}})}}(this,e),this._cachedChangesIncludeMetadataChanges=e),this._cachedChanges}}function du(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return y()}}function fu(t,e){return t instanceof uu&&e instanceof uu?t._firestore===e._firestore&&t._key.isEqual(e._key)&&(null===t._document?null===e._document:t._document.isEqual(e._document))&&t._converter===e._converter:t instanceof hu&&e instanceof hu&&t._firestore===e._firestore&&hc(t.query,e.query)&&t.metadata.isEqual(e.metadata)&&t._snapshot.isEqual(e._snapshot)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pu(t){if(Qt(t)&&0===t.explicitOrderBy.length)throw new I(O.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class mu{}function gu(t,...e){for(const n of e)t=n._apply(t);return t}class vu extends mu{constructor(t,e,n){super(),this.zc=t,this.Hc=e,this.Jc=n,this.type="where"}_apply(t){const e=Fc(t.firestore),n=function(t,e,n,i,r,s,o){let a;if(r.isKeyField()){if("array-contains"===s||"array-contains-any"===s)throw new I(O.INVALID_ARGUMENT,`Invalid Query. You can't perform '${s}' queries on documentId().`);if("in"===s||"not-in"===s){Ru(o,s);const e=[];for(const n of o)e.push(ju(i,t,n));a={arrayValue:{values:e}}}else a=ju(i,t,o)}else"in"!==s&&"not-in"!==s&&"array-contains-any"!==s||Ru(o,s),a=Yc(n,e,o,"in"===s||"not-in"===s);const c=jt.create(r,s,a);return function(t,e){if(e.V()){const n=Zt(t);if(null!==n&&!n.isEqual(e.field))throw new I(O.INVALID_ARGUMENT,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${n.toString()}' and '${e.field.toString()}'`);const i=Jt(t);null!==i&&Lu(t,e.field,i)}const n=function(t,e){for(const n of t.filters)if(e.indexOf(n.op)>=0)return n.op;return null}(t,function(t){switch(t){case"!=":return["!=","not-in"];case"array-contains":return["array-contains","array-contains-any","not-in"];case"in":return["array-contains-any","in","not-in"];case"array-contains-any":return["array-contains","array-contains-any","in","not-in"];case"not-in":return["array-contains","array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(null!==n)throw n===e.op?new I(O.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new I(O.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}(t,c),c}(t._query,"where",e,t.firestore._databaseId,this.zc,this.Hc,this.Jc);return new sc(t.firestore,t.converter,function(t,e){const n=t.filters.concat([e]);return new Gt(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}(t._query,n))}}function yu(t,e,n){const i=e,r=au("where",t);return new vu(r,i,n)}class bu extends mu{constructor(t,e){super(),this.zc=t,this.Yc=e,this.type="orderBy"}_apply(t){const e=function(t,e,n){if(null!==t.startAt)throw new I(O.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(null!==t.endAt)throw new I(O.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");const i=new qt(e,n);return function(t,e){if(null===Jt(t)){const n=Zt(t);null!==n&&Lu(t,n,e.field)}}(t,i),i}(t._query,this.zc,this.Yc);return new sc(t.firestore,t.converter,function(t,e){const n=t.explicitOrderBy.concat([e]);return new Gt(t.path,t.collectionGroup,n,t.filters.slice(),t.limit,t.limitType,t.startAt,t.endAt)}(t._query,e))}}function wu(t,e="asc"){const n=e,i=au("orderBy",t);return new bu(i,n)}class _u extends mu{constructor(t,e,n){super(),this.type=t,this.Xc=e,this.Zc=n}_apply(t){return new sc(t.firestore,t.converter,ie(t._query,this.Xc,this.Zc))}}function Ou(t){return tc("limit",t),new _u("limit",t,"F")}function Iu(t){return tc("limitToLast",t),new _u("limitToLast",t,"L")}class Su extends mu{constructor(t,e,n){super(),this.type=t,this.ta=e,this.ea=n}_apply(t){const e=Au(t,this.type,this.ta,this.ea);return new sc(t.firestore,t.converter,function(t,e){return new Gt(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),t.limit,t.limitType,e,t.endAt)}(t._query,e))}}function ku(...t){return new Su("startAt",t,!0)}function Tu(...t){return new Su("startAfter",t,!1)}class Eu extends mu{constructor(t,e,n){super(),this.type=t,this.ta=e,this.ea=n}_apply(t){const e=Au(t,this.type,this.ta,this.ea);return new sc(t.firestore,t.converter,function(t,e){return new Gt(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),t.limit,t.limitType,t.startAt,e)}(t._query,e))}}function xu(...t){return new Eu("endBefore",t,!0)}function Cu(...t){return new Eu("endAt",t,!1)}function Au(t,e,n,i){if(n[0]=Object(o["k"])(n[0]),n[0]instanceof su)return function(t,e,n,i,r){if(!i)throw new I(O.NOT_FOUND,`Can't use a DocumentSnapshot that doesn't exist for ${n}().`);const s=[];for(const o of ee(t))if(o.field.isKeyField())s.push(mt(e,i.key));else{const t=i.data.field(o.field);if(et(t))throw new I(O.INVALID_ARGUMENT,'Invalid query. You are trying to start or end a query using a document for which the field "'+o.field+'" is an uncommitted server timestamp. (Since the value of this field is unknown, you cannot start/end a query with it.)');if(null===t){const t=o.field.canonicalString();throw new I(O.INVALID_ARGUMENT,`Invalid query. You are trying to start or end a query using a document for which the field '${t}' (used as the orderBy) does not exist.`)}s.push(t)}return new Vt(s,r)}(t._query,t.firestore._databaseId,e,n[0]._document,i);{const r=Fc(t.firestore);return function(t,e,n,i,r,s){const o=t.explicitOrderBy;if(r.length>o.length)throw new I(O.INVALID_ARGUMENT,`Too many arguments provided to ${i}(). The number of arguments must be less than or equal to the number of orderBy() clauses`);const a=[];for(let c=0;c<r.length;c++){const s=r[c];if(o[c].field.isKeyField()){if("string"!=typeof s)throw new I(O.INVALID_ARGUMENT,`Invalid query. Expected a string for document ID in ${i}(), but got a ${typeof s}`);if(!te(t)&&-1!==s.indexOf("/"))throw new I(O.INVALID_ARGUMENT,`Invalid query. When querying a collection and ordering by documentId(), the value passed to ${i}() must be a plain document ID, but '${s}' contains a slash.`);const n=t.path.child(H.fromString(s));if(!at.isDocumentKey(n))throw new I(O.INVALID_ARGUMENT,`Invalid query. When querying a collection group and ordering by documentId(), the value passed to ${i}() must result in a valid document path, but '${n}' is not because it contains an odd number of segments.`);const r=new at(n);a.push(mt(e,r))}else{const t=Yc(n,i,s);a.push(t)}}return new Vt(a,s)}(t._query,t.firestore._databaseId,r,e,n,i)}}function ju(t,e,n){if("string"==typeof(n=Object(o["k"])(n))){if(""===n)throw new I(O.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!te(e)&&-1!==n.indexOf("/"))throw new I(O.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const i=e.path.child(H.fromString(n));if(!at.isDocumentKey(i))throw new I(O.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${i}' is not because it has an odd number of segments (${i.length}).`);return mt(t,new at(i))}if(n instanceof rc)return mt(t,n._key);throw new I(O.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Ja(n)}.`)}function Ru(t,e){if(!Array.isArray(t)||0===t.length)throw new I(O.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`);if(t.length>10)throw new I(O.INVALID_ARGUMENT,`Invalid Query. '${e.toString()}' filters support a maximum of 10 elements in the value array.`)}function Lu(t,e,n){if(!n.isEqual(e))throw new I(O.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${e.toString()}' and so you must also use '${e.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${n.toString()}' instead.`)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nu{convertValue(t,e="none"){switch(ct(t)){case 0:return null;case 1:return t.booleanValue;case 2:return Z(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,e);case 5:return t.stringValue;case 6:return this.convertBytes(tt(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,e);case 10:return this.convertObject(t.mapValue,e);default:throw y()}}convertObject(t,e){const n={};return U(t.fields,(t,i)=>{n[t]=this.convertValue(i,e)}),n}convertGeoPoint(t){return new Rc(Z(t.latitude),Z(t.longitude))}convertArray(t,e){return(t.values||[]).map(t=>this.convertValue(t,e))}convertServerTimestamp(t,e){switch(e){case"previous":const n=nt(t);return null==n?null:this.convertValue(n,e);case"estimate":return this.convertTimestamp(it(t));default:return null}}convertTimestamp(t){const e=J(t);return new F(e.seconds,e.nanos)}convertDocumentKey(t,e){const n=H.fromString(t);b(ei(n));const i=new Wa(n.get(1),n.get(3)),r=new at(n.popFirst(5));return i.isEqual(e)||m(`Document ${r} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${e.projectId}/${e.database}) instead.`),r}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Du(t,e,n){let i;return i=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,i}class Pu extends Nu{constructor(t){super(),this.firestore=t}convertBytes(t){return new Ac(t)}convertReference(t){const e=this.convertDocumentKey(t,this.firestore._databaseId);return new rc(this.firestore,null,e)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mu{constructor(t,e){this._firestore=t,this._commitHandler=e,this._mutations=[],this._committed=!1,this._dataReader=Fc(t)}set(t,e,n){this._verifyNotCommitted();const i=$u(t,this._firestore),r=Du(i.converter,e,n),s=Bc(this._dataReader,"WriteBatch.set",i._key,r,null!==i.converter,n);return this._mutations.push(s.toMutation(i._key,xe.none())),this}update(t,e,n,...i){this._verifyNotCommitted();const r=$u(t,this._firestore);let s;return s="string"==typeof(e=Object(o["k"])(e))||e instanceof Cc?Kc(this._dataReader,"WriteBatch.update",r._key,e,n,i):Gc(this._dataReader,"WriteBatch.update",r._key,e),this._mutations.push(s.toMutation(r._key,xe.exists(!0))),this}delete(t){this._verifyNotCommitted();const e=$u(t,this._firestore);return this._mutations=this._mutations.concat(new Ve(e._key,xe.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new I(O.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}}function $u(t,e){if((t=Object(o["k"])(t)).firestore!==e)throw new I(O.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return t}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fu(t){t=Za(t,rc);const e=Za(t.firestore,gc);return $a(vc(e),t._key).then(n=>Zu(e,t,n))}class Bu extends Nu{constructor(t){super(),this.firestore=t}convertBytes(t){return new Ac(t)}convertReference(t){const e=this.convertDocumentKey(t,this.firestore._databaseId);return new rc(this.firestore,null,e)}}function Vu(t){t=Za(t,rc);const e=Za(t.firestore,gc),n=vc(e),i=new Bu(e);return Ma(n,t._key).then(n=>new uu(e,i,t._key,n,new cu(null!==n&&n.hasLocalMutations,!0),t.converter))}function Uu(t){t=Za(t,rc);const e=Za(t.firestore,gc);return $a(vc(e),t._key,{source:"server"}).then(n=>Zu(e,t,n))}function qu(t){t=Za(t,sc);const e=Za(t.firestore,gc),n=vc(e),i=new Bu(e);return pu(t._query),Ba(n,t._query).then(n=>new hu(e,i,t,n))}function zu(t){t=Za(t,sc);const e=Za(t.firestore,gc),n=vc(e),i=new Bu(e);return Fa(n,t._query).then(n=>new hu(e,i,t,n))}function Hu(t){t=Za(t,sc);const e=Za(t.firestore,gc),n=vc(e),i=new Bu(e);return Ba(n,t._query,{source:"server"}).then(n=>new hu(e,i,t,n))}function Wu(t,e,n){t=Za(t,rc);const i=Za(t.firestore,gc),r=Du(t.converter,e,n);return Ju(i,[Bc(Fc(i),"setDoc",t._key,r,null!==t.converter,n).toMutation(t._key,xe.none())])}function Gu(t,e,n,...i){t=Za(t,rc);const r=Za(t.firestore,gc),s=Fc(r);let a;return a="string"==typeof(e=Object(o["k"])(e))||e instanceof Cc?Kc(s,"updateDoc",t._key,e,n,i):Gc(s,"updateDoc",t._key,e),Ju(r,[a.toMutation(t._key,xe.exists(!0))])}function Ku(t){return Ju(Za(t.firestore,gc),[new Ve(t._key,xe.none())])}function Yu(t,e){const n=Za(t.firestore,gc),i=uc(t),r=Du(t.converter,e);return Ju(n,[Bc(Fc(t.firestore),"addDoc",i._key,r,null!==t.converter,{}).toMutation(i._key,xe.exists(!1))]).then(()=>i)}function Xu(t,...e){var n,i,r;t=Object(o["k"])(t);let s={includeMetadataChanges:!1},a=0;"object"!=typeof e[a]||fc(e[a])||(s=e[a],a++);const c={includeMetadataChanges:s.includeMetadataChanges};if(fc(e[a])){const t=e[a];e[a]=null===(n=t.next)||void 0===n?void 0:n.bind(t),e[a+1]=null===(i=t.error)||void 0===i?void 0:i.bind(t),e[a+2]=null===(r=t.complete)||void 0===r?void 0:r.bind(t)}let u,l,h;if(t instanceof rc)l=Za(t.firestore,gc),h=Yt(t._key.path),u={next:n=>{e[a]&&e[a](Zu(l,t,n))},error:e[a+1],complete:e[a+2]};else{const n=Za(t,sc);l=Za(n.firestore,gc),h=n._query;const i=new Bu(l);u={next:t=>{e[a]&&e[a](new hu(l,i,n,t))},error:e[a+1],complete:e[a+2]},pu(t._query)}return function(t,e,n,i){const r=new _a(i),s=new Eo(e,r,n);return t.asyncQueue.enqueueAndForget(async()=>Oo(await Na(t),s)),()=>{r.nc(),t.asyncQueue.enqueueAndForget(async()=>Io(await Na(t),s))}}(vc(l),h,c,u)}function Qu(t,e){return Va(vc(t=Za(t,gc)),fc(e)?e:{next:e})}function Ju(t,e){return function(t,e){const n=new S;return t.asyncQueue.enqueueAndForget(async()=>Vo(await La(t),e,n)),n.promise}(vc(t),e)}function Zu(t,e,n){const i=n.docs.get(e._key),r=new Bu(t);return new uu(t,r,e._key,i,new cu(n.hasPendingWrites,n.fromCache),e.converter)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tl extends class{constructor(t,e){this._firestore=t,this._transaction=e,this._dataReader=Fc(t)}get(t){const e=$u(t,this._firestore),n=new Pu(this._firestore);return this._transaction.lookup([e._key]).then(t=>{if(!t||1!==t.length)return y();const i=t[0];if(i.isFoundDocument())return new su(this._firestore,n,i.key,i,e.converter);if(i.isNoDocument())return new su(this._firestore,n,e._key,null,e.converter);throw y()})}set(t,e,n){const i=$u(t,this._firestore),r=Du(i.converter,e,n),s=Bc(this._dataReader,"Transaction.set",i._key,r,null!==i.converter,n);return this._transaction.set(i._key,s),this}update(t,e,n,...i){const r=$u(t,this._firestore);let s;return s="string"==typeof(e=Object(o["k"])(e))||e instanceof Cc?Kc(this._dataReader,"Transaction.update",r._key,e,n,i):Gc(this._dataReader,"Transaction.update",r._key,e),this._transaction.update(r._key,s),this}delete(t){const e=$u(t,this._firestore);return this._transaction.delete(e._key),this}}{constructor(t,e){super(t,e),this._firestore=t}get(t){const e=$u(t,this._firestore),n=new Bu(this._firestore);return super.get(t).then(t=>new uu(this._firestore,n,e._key,t._document,new cu(!1,!1),e.converter))}}function el(t,e){return Ua(vc(t=Za(t,gc)),n=>e(new tl(t,n)))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nl(){return new Vc("deleteField")}function il(){return new qc("serverTimestamp")}function rl(...t){return new zc("arrayUnion",t)}function sl(...t){return new Hc("arrayRemove",t)}function ol(t){return new Wc("increment",t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */!function(t,e=!0){!function(t){l=t}(i["SDK_VERSION"]),Object(i["_registerComponent"])(new r["a"]("firestore",(t,{options:n})=>{const i=t.getProvider("app").getImmediate(),r=new gc(i,new x(t.getProvider("auth-internal")),new R(t.getProvider("app-check-internal")));return n=Object.assign({useFetchStreams:e},n),r._setSettings(n),r},"PUBLIC")),Object(i["registerVersion"])(c,"3.4.4",t),Object(i["registerVersion"])(c,"3.4.4","esm2017")}()}).call(this,n("4362"))},"0b42":function(t,e,n){var i=n("da84"),r=n("e8b5"),s=n("68ee"),o=n("861d"),a=n("b622"),c=a("species"),u=i.Array;t.exports=function(t){var e;return r(t)&&(e=t.constructor,s(e)&&(e===u||r(e.prototype))?e=void 0:o(e)&&(e=e[c],null===e&&(e=void 0))),void 0===e?u:e}},"0bc6":function(t,e,n){},"0cb2":function(t,e,n){var i=n("e330"),r=n("7b0b"),s=Math.floor,o=i("".charAt),a=i("".replace),c=i("".slice),u=/\$([$&'`]|\d{1,2}|<[^>]*>)/g,l=/\$([$&'`]|\d{1,2})/g;t.exports=function(t,e,n,i,h,d){var f=n+t.length,p=i.length,m=l;return void 0!==h&&(h=r(h),m=u),a(d,m,(function(r,a){var u;switch(o(a,0)){case"$":return"$";case"&":return t;case"`":return c(e,0,n);case"'":return c(e,f);case"<":u=h[c(a,1,-1)];break;default:var l=+a;if(0===l)return r;if(l>p){var d=s(l/10);return 0===d?r:d<=p?void 0===i[d-1]?o(a,1):i[d-1]+o(a,1):r}u=i[l-1]}return void 0===u?"":u}))}},"0cfb":function(t,e,n){var i=n("83ab"),r=n("d039"),s=n("cc12");t.exports=!i&&!r((function(){return 7!=Object.defineProperty(s("div"),"a",{get:function(){return 7}}).a}))},"0d51":function(t,e,n){var i=n("da84"),r=i.String;t.exports=function(t){try{return r(t)}catch(e){return"Object"}}},"0fd9":function(t,e,n){"use strict";var i=n("ade3"),r=n("5530"),s=(n("d3b7"),n("caad"),n("2532"),n("99af"),n("b64b"),n("ac1f"),n("5319"),n("4ec9"),n("3ca3"),n("ddb0"),n("159b"),n("4b85"),n("2b0e")),o=n("d9f7"),a=n("80d2"),c=["sm","md","lg","xl"],u=["start","end","center"];function l(t,e){return c.reduce((function(n,i){return n[t+Object(a["E"])(i)]=e(),n}),{})}var h=function(t){return[].concat(u,["baseline","stretch"]).includes(t)},d=l("align",(function(){return{type:String,default:null,validator:h}})),f=function(t){return[].concat(u,["space-between","space-around"]).includes(t)},p=l("justify",(function(){return{type:String,default:null,validator:f}})),m=function(t){return[].concat(u,["space-between","space-around","stretch"]).includes(t)},g=l("alignContent",(function(){return{type:String,default:null,validator:m}})),v={align:Object.keys(d),justify:Object.keys(p),alignContent:Object.keys(g)},y={align:"align",justify:"justify",alignContent:"align-content"};function b(t,e,n){var i=y[t];if(null!=n){if(e){var r=e.replace(t,"");i+="-".concat(r)}return i+="-".concat(n),i.toLowerCase()}}var w=new Map;e["a"]=s["a"].extend({name:"v-row",functional:!0,props:Object(r["a"])(Object(r["a"])(Object(r["a"])({tag:{type:String,default:"div"},dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:h}},d),{},{justify:{type:String,default:null,validator:f}},p),{},{alignContent:{type:String,default:null,validator:m}},g),render:function(t,e){var n=e.props,r=e.data,s=e.children,a="";for(var c in n)a+=String(n[c]);var u=w.get(a);return u||function(){var t,e;for(e in u=[],v)v[e].forEach((function(t){var i=n[t],r=b(e,t,i);r&&u.push(r)}));u.push((t={"no-gutters":n.noGutters,"row--dense":n.dense},Object(i["a"])(t,"align-".concat(n.align),n.align),Object(i["a"])(t,"justify-".concat(n.justify),n.justify),Object(i["a"])(t,"align-content-".concat(n.alignContent),n.alignContent),t)),w.set(a,u)}(),t(n.tag,Object(o["a"])(r,{staticClass:"row",class:u}),s)}})},"107c":function(t,e,n){var i=n("d039"),r=n("da84"),s=r.RegExp;t.exports=i((function(){var t=s("(?<a>b)","g");return"b"!==t.exec("b").groups.a||"bc"!=="b".replace(t,"$<a>c")}))},"10d2":function(t,e,n){"use strict";var i=n("8dd9");e["a"]=i["a"]},1148:function(t,e,n){"use strict";var i=n("da84"),r=n("5926"),s=n("577e"),o=n("1d80"),a=i.RangeError;t.exports=function(t){var e=s(o(this)),n="",i=r(t);if(i<0||i==1/0)throw a("Wrong number of repetitions");for(;i>0;(i>>>=1)&&(e+=e))1&i&&(n+=e);return n}},1276:function(t,e,n){"use strict";var i=n("2ba4"),r=n("c65b"),s=n("e330"),o=n("d784"),a=n("44e7"),c=n("825a"),u=n("1d80"),l=n("4840"),h=n("8aa5"),d=n("50c4"),f=n("577e"),p=n("dc4a"),m=n("4dae"),g=n("14c3"),v=n("9263"),y=n("9f7f"),b=n("d039"),w=y.UNSUPPORTED_Y,_=4294967295,O=Math.min,I=[].push,S=s(/./.exec),k=s(I),T=s("".slice),E=!b((function(){var t=/(?:)/,e=t.exec;t.exec=function(){return e.apply(this,arguments)};var n="ab".split(t);return 2!==n.length||"a"!==n[0]||"b"!==n[1]}));o("split",(function(t,e,n){var s;return s="c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1).length||2!="ab".split(/(?:ab)*/).length||4!=".".split(/(.?)(.?)/).length||".".split(/()()/).length>1||"".split(/.?/).length?function(t,n){var s=f(u(this)),o=void 0===n?_:n>>>0;if(0===o)return[];if(void 0===t)return[s];if(!a(t))return r(e,s,t,o);var c,l,h,d=[],p=(t.ignoreCase?"i":"")+(t.multiline?"m":"")+(t.unicode?"u":"")+(t.sticky?"y":""),g=0,y=new RegExp(t.source,p+"g");while(c=r(v,y,s)){if(l=y.lastIndex,l>g&&(k(d,T(s,g,c.index)),c.length>1&&c.index<s.length&&i(I,d,m(c,1)),h=c[0].length,g=l,d.length>=o))break;y.lastIndex===c.index&&y.lastIndex++}return g===s.length?!h&&S(y,"")||k(d,""):k(d,T(s,g)),d.length>o?m(d,0,o):d}:"0".split(void 0,0).length?function(t,n){return void 0===t&&0===n?[]:r(e,this,t,n)}:e,[function(e,n){var i=u(this),o=void 0==e?void 0:p(e,t);return o?r(o,e,i,n):r(s,f(i),e,n)},function(t,i){var r=c(this),o=f(t),a=n(s,r,o,i,s!==e);if(a.done)return a.value;var u=l(r,RegExp),p=r.unicode,m=(r.ignoreCase?"i":"")+(r.multiline?"m":"")+(r.unicode?"u":"")+(w?"g":"y"),v=new u(w?"^(?:"+r.source+")":r,m),y=void 0===i?_:i>>>0;if(0===y)return[];if(0===o.length)return null===g(v,o)?[o]:[];var b=0,I=0,S=[];while(I<o.length){v.lastIndex=w?0:I;var E,x=g(v,w?T(o,I):o);if(null===x||(E=O(d(v.lastIndex+(w?I:0)),o.length))===b)I=h(o,I,p);else{if(k(S,T(o,b,I)),S.length===y)return S;for(var C=1;C<=x.length-1;C++)if(k(S,x[C]),S.length===y)return S;I=b=E}}return k(S,T(o,b)),S}]}),!E,w)},"129f":function(t,e){t.exports=Object.is||function(t,e){return t===e?0!==t||1/t===1/e:t!=t&&e!=e}},"132d":function(t,e,n){"use strict";var i,r=n("5530"),s=(n("c96a"),n("d3b7"),n("caad"),n("2532"),n("ac1f"),n("00b4"),n("a9e3"),n("498a"),n("7db0"),n("fb6a"),n("4804"),n("7e2b")),o=n("a9ad"),a=n("af2b"),c=n("7560"),u=n("80d2"),l=n("2b0e"),h=n("58df");function d(t){return["fas","far","fal","fab","fad","fak"].some((function(e){return t.includes(e)}))}function f(t){return/^[mzlhvcsqta]\s*[-+.0-9][^mlhvzcsqta]+/i.test(t)&&/[\dz]$/i.test(t)&&t.length>4}(function(t){t["xSmall"]="12px",t["small"]="16px",t["default"]="24px",t["medium"]="28px",t["large"]="36px",t["xLarge"]="40px"})(i||(i={}));var p=Object(h["a"])(s["a"],o["a"],a["a"],c["a"]).extend({name:"v-icon",props:{dense:Boolean,disabled:Boolean,left:Boolean,right:Boolean,size:[Number,String],tag:{type:String,required:!1,default:"i"}},computed:{medium:function(){return!1},hasClickListener:function(){return Boolean(this.listeners$.click||this.listeners$["!click"])}},methods:{getIcon:function(){var t="";return this.$slots.default&&(t=this.$slots.default[0].text.trim()),Object(u["B"])(this,t)},getSize:function(){var t={xSmall:this.xSmall,small:this.small,medium:this.medium,large:this.large,xLarge:this.xLarge},e=Object(u["y"])(t).find((function(e){return t[e]}));return e&&i[e]||Object(u["h"])(this.size)},getDefaultData:function(){return{staticClass:"v-icon notranslate",class:{"v-icon--disabled":this.disabled,"v-icon--left":this.left,"v-icon--link":this.hasClickListener,"v-icon--right":this.right,"v-icon--dense":this.dense},attrs:Object(r["a"])({"aria-hidden":!this.hasClickListener,disabled:this.hasClickListener&&this.disabled,type:this.hasClickListener?"button":void 0},this.attrs$),on:this.listeners$}},getSvgWrapperData:function(){var t=this.getSize(),e=Object(r["a"])(Object(r["a"])({},this.getDefaultData()),{},{style:t?{fontSize:t,height:t,width:t}:void 0});return this.applyColors(e),e},applyColors:function(t){t.class=Object(r["a"])(Object(r["a"])({},t.class),this.themeClasses),this.setTextColor(this.color,t)},renderFontIcon:function(t,e){var n=[],i=this.getDefaultData(),r="material-icons",s=t.indexOf("-"),o=s<=-1;o?n.push(t):(r=t.slice(0,s),d(r)&&(r="")),i.class[r]=!0,i.class[t]=!o;var a=this.getSize();return a&&(i.style={fontSize:a}),this.applyColors(i),e(this.hasClickListener?"button":this.tag,i,n)},renderSvgIcon:function(t,e){var n={class:"v-icon__svg",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",role:"img","aria-hidden":!0}},i=this.getSize();return i&&(n.style={fontSize:i,height:i,width:i}),e(this.hasClickListener?"button":"span",this.getSvgWrapperData(),[e("svg",n,[e("path",{attrs:{d:t}})])])},renderSvgIconComponent:function(t,e){var n={class:{"v-icon__component":!0}},i=this.getSize();i&&(n.style={fontSize:i,height:i,width:i}),this.applyColors(n);var r=t.component;return n.props=t.props,n.nativeOn=n.on,e(this.hasClickListener?"button":"span",this.getSvgWrapperData(),[e(r,n)])}},render:function(t){var e=this.getIcon();return"string"===typeof e?f(e)?this.renderSvgIcon(e,t):this.renderFontIcon(e,t):this.renderSvgIconComponent(e,t)}});e["a"]=l["a"].extend({name:"v-icon",$_wrapperFor:p,functional:!0,render:function(t,e){var n=e.data,i=e.children,r="";return n.domProps&&(r=n.domProps.textContent||n.domProps.innerHTML||r,delete n.domProps.textContent,delete n.domProps.innerHTML),t(p,n,r?[r]:i)}})},"14c3":function(t,e,n){var i=n("da84"),r=n("c65b"),s=n("825a"),o=n("1626"),a=n("c6b6"),c=n("9263"),u=i.TypeError;t.exports=function(t,e){var n=t.exec;if(o(n)){var i=r(n,t,e);return null!==i&&s(i),i}if("RegExp"===a(t))return r(c,t,e);throw u("RegExp#exec called on incompatible receiver")}},"159b":function(t,e,n){var i=n("da84"),r=n("fdbc"),s=n("785a"),o=n("17c2"),a=n("9112"),c=function(t){if(t&&t.forEach!==o)try{a(t,"forEach",o)}catch(e){t.forEach=o}};for(var u in r)r[u]&&c(i[u]&&i[u].prototype);c(s)},"15fd":function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));n("a4d3"),n("b64b");function i(t,e){if(null==t)return{};var n,i,r={},s=Object.keys(t);for(i=0;i<s.length;i++)n=s[i],e.indexOf(n)>=0||(r[n]=t[n]);return r}function r(t,e){if(null==t)return{};var n,r,s=i(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(s[n]=t[n])}return s}},1626:function(t,e){t.exports=function(t){return"function"==typeof t}},"166a":function(t,e,n){},"169a":function(t,e,n){"use strict";var i=n("5530"),r=n("2909"),s=n("ade3"),o=(n("a9e3"),n("498a"),n("caad"),n("2532"),n("d3b7"),n("7db0"),n("368e"),n("480e")),a=n("4ad4"),c=n("b848"),u=n("75eb"),l=n("e707"),h=n("e4d3"),d=n("21be"),f=n("f2e7"),p=n("a293"),m=n("58df"),g=n("d9bd"),v=n("80d2"),y=Object(m["a"])(a["a"],c["a"],u["a"],l["a"],h["a"],d["a"],f["a"]);e["a"]=y.extend({name:"v-dialog",directives:{ClickOutside:p["a"]},props:{dark:Boolean,disabled:Boolean,fullscreen:Boolean,light:Boolean,maxWidth:[String,Number],noClickAnimation:Boolean,origin:{type:String,default:"center center"},persistent:Boolean,retainFocus:{type:Boolean,default:!0},scrollable:Boolean,transition:{type:[String,Boolean],default:"dialog-transition"},width:[String,Number]},data:function(){return{activatedBy:null,animate:!1,animateTimeout:-1,isActive:!!this.value,stackMinZIndex:200,previousActiveElement:null}},computed:{classes:function(){var t;return t={},Object(s["a"])(t,"v-dialog ".concat(this.contentClass).trim(),!0),Object(s["a"])(t,"v-dialog--active",this.isActive),Object(s["a"])(t,"v-dialog--persistent",this.persistent),Object(s["a"])(t,"v-dialog--fullscreen",this.fullscreen),Object(s["a"])(t,"v-dialog--scrollable",this.scrollable),Object(s["a"])(t,"v-dialog--animated",this.animate),t},contentClasses:function(){return{"v-dialog__content":!0,"v-dialog__content--active":this.isActive}},hasActivator:function(){return Boolean(!!this.$slots.activator||!!this.$scopedSlots.activator)}},watch:{isActive:function(t){var e;t?(this.show(),this.hideScroll()):(this.removeOverlay(),this.unbind(),null==(e=this.previousActiveElement)||e.focus())},fullscreen:function(t){this.isActive&&(t?(this.hideScroll(),this.removeOverlay(!1)):(this.showScroll(),this.genOverlay()))}},created:function(){this.$attrs.hasOwnProperty("full-width")&&Object(g["e"])("full-width",this)},beforeMount:function(){var t=this;this.$nextTick((function(){t.isBooted=t.isActive,t.isActive&&t.show()}))},beforeDestroy:function(){"undefined"!==typeof window&&this.unbind()},methods:{animateClick:function(){var t=this;this.animate=!1,this.$nextTick((function(){t.animate=!0,window.clearTimeout(t.animateTimeout),t.animateTimeout=window.setTimeout((function(){return t.animate=!1}),150)}))},closeConditional:function(t){var e=t.target;return!(this._isDestroyed||!this.isActive||this.$refs.content.contains(e)||this.overlay&&e&&!this.overlay.$el.contains(e))&&this.activeZIndex>=this.getMaxZIndex()},hideScroll:function(){this.fullscreen?document.documentElement.classList.add("overflow-y-hidden"):l["a"].options.methods.hideScroll.call(this)},show:function(){var t=this;!this.fullscreen&&!this.hideOverlay&&this.genOverlay(),this.$nextTick((function(){t.$nextTick((function(){t.$refs.content.contains(document.activeElement)||(t.previousActiveElement=document.activeElement,t.$refs.content.focus()),t.bind()}))}))},bind:function(){window.addEventListener("focusin",this.onFocusin)},unbind:function(){window.removeEventListener("focusin",this.onFocusin)},onClickOutside:function(t){this.$emit("click:outside",t),this.persistent?this.noClickAnimation||this.animateClick():this.isActive=!1},onKeydown:function(t){if(t.keyCode===v["x"].esc&&!this.getOpenDependents().length)if(this.persistent)this.noClickAnimation||this.animateClick();else{this.isActive=!1;var e=this.getActivator();this.$nextTick((function(){return e&&e.focus()}))}this.$emit("keydown",t)},onFocusin:function(t){if(t&&this.retainFocus){var e=t.target;if(e&&![document,this.$refs.content].includes(e)&&!this.$refs.content.contains(e)&&this.activeZIndex>=this.getMaxZIndex()&&!this.getOpenDependentElements().some((function(t){return t.contains(e)}))){var n=this.$refs.content.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'),i=Object(r["a"])(n).find((function(t){return!t.hasAttribute("disabled")}));i&&i.focus()}}},genContent:function(){var t=this;return this.showLazyContent((function(){return[t.$createElement(o["a"],{props:{root:!0,light:t.light,dark:t.dark}},[t.$createElement("div",{class:t.contentClasses,attrs:Object(i["a"])({role:"dialog",tabindex:t.isActive?0:void 0,"aria-modal":t.hideOverlay?void 0:"true"},t.getScopeIdAttrs()),on:{keydown:t.onKeydown},style:{zIndex:t.activeZIndex},ref:"content"},[t.genTransition()])])]}))},genTransition:function(){var t=this.genInnerContent();return this.transition?this.$createElement("transition",{props:{name:this.transition,origin:this.origin,appear:!0}},[t]):t},genInnerContent:function(){var t={class:this.classes,ref:"dialog",directives:[{name:"click-outside",value:{handler:this.onClickOutside,closeConditional:this.closeConditional,include:this.getOpenDependentElements}},{name:"show",value:this.isActive}],style:{transformOrigin:this.origin}};return this.fullscreen||(t.style=Object(i["a"])(Object(i["a"])({},t.style),{},{maxWidth:Object(v["h"])(this.maxWidth),width:Object(v["h"])(this.width)})),this.$createElement("div",t,this.getContentSlot())}},render:function(t){return t("div",{staticClass:"v-dialog__container",class:{"v-dialog__container--attached":""===this.attach||!0===this.attach||"attach"===this.attach}},[this.genActivator(),this.genContent()])}})},"16b7":function(t,e,n){"use strict";n("a9e3");var i=n("2b0e");e["a"]=i["a"].extend().extend({name:"delayable",props:{openDelay:{type:[Number,String],default:0},closeDelay:{type:[Number,String],default:0}},data:function(){return{openTimeout:void 0,closeTimeout:void 0}},methods:{clearDelay:function(){clearTimeout(this.openTimeout),clearTimeout(this.closeTimeout)},runDelay:function(t,e){var n=this;this.clearDelay();var i=parseInt(this["".concat(t,"Delay")],10);this["".concat(t,"Timeout")]=setTimeout(e||function(){n.isActive={open:!0,close:!1}[t]},i)}}})},"17c2":function(t,e,n){"use strict";var i=n("b727").forEach,r=n("a640"),s=r("forEach");t.exports=s?[].forEach:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0)}},1800:function(t,e,n){"use strict";n("4de4"),n("d3b7");var i=n("2b0e");e["a"]=i["a"].extend({name:"v-list-item-action",functional:!0,render:function(t,e){var n=e.data,i=e.children,r=void 0===i?[]:i;n.staticClass=n.staticClass?"v-list-item__action ".concat(n.staticClass):"v-list-item__action";var s=r.filter((function(t){return!1===t.isComment&&" "!==t.text}));return s.length>1&&(n.staticClass+=" v-list-item__action--stack"),t("div",n,r)}})},1862:function(t,e,n){"use strict";var i=n("7ded"),r=n("0829"),s=n("1fd5"),o=n("22e5");const a="@firebase/firestore-compat",c="0.1.13";
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function u(t,e){if(void 0===e)return{merge:!1};if(void 0!==e.mergeFields&&void 0!==e.merge)throw new r["g"]("invalid-argument",`Invalid options passed to function ${t}(): You cannot specify both "merge" and "mergeFields".`);return e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function l(){if("undefined"===typeof Uint8Array)throw new r["g"]("unimplemented","Uint8Arrays are not available in this environment.")}function h(){if(!Object(r["r"])())throw new r["g"]("unimplemented","Blobs are unavailable in Firestore in this environment.")}class d{constructor(t){this._delegate=t}static fromBase64String(t){return h(),new d(r["b"].fromBase64String(t))}static fromUint8Array(t){return l(),new d(r["b"].fromUint8Array(t))}toBase64(){return h(),this._delegate.toBase64()}toUint8Array(){return l(),this._delegate.toUint8Array()}isEqual(t){return this._delegate.isEqual(t._delegate)}toString(){return"Blob(base64: "+this.toBase64()+")"}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function f(t){return p(t,["next","error","complete"])}function p(t,e){if("object"!==typeof t||null===t)return!1;const n=t;for(const i of e)if(i in n&&"function"===typeof n[i])return!0;return!1}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class m{enableIndexedDbPersistence(t,e){return Object(r["F"])(t._delegate,{forceOwnership:e})}enableMultiTabIndexedDbPersistence(t){return Object(r["G"])(t._delegate)}clearIndexedDbPersistence(t){return Object(r["x"])(t._delegate)}}class g{constructor(t,e,n){this._delegate=e,this._persistenceProvider=n,this.INTERNAL={delete:()=>this.terminate()},t instanceof r["m"]||(this._appCompat=t)}get _databaseId(){return this._delegate._databaseId}settings(t){const e=this._delegate._getSettings();t.merge||e.host===t.host||Object(r["s"])("You are overriding the original host. If you did not intend to override your settings, use {merge: true}."),t.merge&&(t=Object.assign(Object.assign({},e),t),delete t.merge),this._delegate._setSettings(t)}useEmulator(t,e,n={}){Object(r["A"])(this._delegate,t,e,n)}enableNetwork(){return Object(r["H"])(this._delegate)}disableNetwork(){return Object(r["D"])(this._delegate)}enablePersistence(t){let e=!1,n=!1;return t&&(e=!!t.synchronizeTabs,n=!!t.experimentalForceOwningTab,Object(r["t"])("synchronizeTabs",e,"experimentalForceOwningTab",n)),e?this._persistenceProvider.enableMultiTabIndexedDbPersistence(this):this._persistenceProvider.enableIndexedDbPersistence(this,n)}clearPersistence(){return this._persistenceProvider.clearIndexedDbPersistence(this)}terminate(){return this._appCompat&&(this._appCompat._removeServiceInstance("firestore-compat"),this._appCompat._removeServiceInstance("firestore")),this._delegate._delete()}waitForPendingWrites(){return Object(r["lb"])(this._delegate)}onSnapshotsInSync(t){return Object(r["Y"])(this._delegate,t)}get app(){if(!this._appCompat)throw new r["g"]("failed-precondition","Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._appCompat}collection(t){try{return new j(this,Object(r["y"])(this._delegate,t))}catch(e){throw I(e,"collection()","Firestore.collection()")}}doc(t){try{return new O(this,Object(r["E"])(this._delegate,t))}catch(e){throw I(e,"doc()","Firestore.doc()")}}collectionGroup(t){try{return new x(this,Object(r["z"])(this._delegate,t))}catch(e){throw I(e,"collectionGroup()","Firestore.collectionGroup()")}}runTransaction(t){return Object(r["db"])(this._delegate,e=>t(new b(this,e)))}batch(){return Object(r["K"])(this._delegate),new w(new r["l"](this._delegate,t=>Object(r["L"])(this._delegate,t)))}loadBundle(t){return Object(r["V"])(this._delegate,t)}namedQuery(t){return Object(r["W"])(this._delegate,t).then(t=>t?new x(this,t):null)}}class v extends r["a"]{constructor(t){super(),this.firestore=t}convertBytes(t){return new d(new r["b"](t))}convertReference(t){const e=this.convertDocumentKey(t,this.firestore._databaseId);return O.forKey(e,this.firestore,null)}}function y(t){Object(r["gb"])(t)}class b{constructor(t,e){this._firestore=t,this._delegate=e,this._userDataWriter=new v(t)}get(t){const e=R(t);return this._delegate.get(e).then(t=>new T(this._firestore,new r["e"](this._firestore._delegate,this._userDataWriter,t._key,t._document,t.metadata,e.converter)))}set(t,e,n){const i=R(t);return n?(u("Transaction.set",n),this._delegate.set(i,e,n)):this._delegate.set(i,e),this}update(t,e,n,...i){const r=R(t);return 2===arguments.length?this._delegate.update(r,e):this._delegate.update(r,e,n,...i),this}delete(t){const e=R(t);return this._delegate.delete(e),this}}class w{constructor(t){this._delegate=t}set(t,e,n){const i=R(t);return n?(u("WriteBatch.set",n),this._delegate.set(i,e,n)):this._delegate.set(i,e),this}update(t,e,n,...i){const r=R(t);return 2===arguments.length?this._delegate.update(r,e):this._delegate.update(r,e,n,...i),this}delete(t){const e=R(t);return this._delegate.delete(e),this}commit(){return this._delegate.commit()}}class _{constructor(t,e,n){this._firestore=t,this._userDataWriter=e,this._delegate=n}fromFirestore(t,e){const n=new r["i"](this._firestore._delegate,this._userDataWriter,t._key,t._document,t.metadata,null);return this._delegate.fromFirestore(new E(this._firestore,n),null!==e&&void 0!==e?e:{})}toFirestore(t,e){return e?this._delegate.toFirestore(t,e):this._delegate.toFirestore(t)}static getInstance(t,e){const n=_.INSTANCES;let i=n.get(t);i||(i=new WeakMap,n.set(t,i));let r=i.get(e);return r||(r=new _(t,new v(t),e),i.set(e,r)),r}}_.INSTANCES=new WeakMap;class O{constructor(t,e){this.firestore=t,this._delegate=e,this._userDataWriter=new v(t)}static forPath(t,e,n){if(t.length%2!==0)throw new r["g"]("invalid-argument",`Invalid document reference. Document references must have an even number of segments, but ${t.canonicalString()} has ${t.length}`);return new O(e,new r["d"](e._delegate,n,new r["n"](t)))}static forKey(t,e,n){return new O(e,new r["d"](e._delegate,n,t))}get id(){return this._delegate.id}get parent(){return new j(this.firestore,this._delegate.parent)}get path(){return this._delegate.path}collection(t){try{return new j(this.firestore,Object(r["y"])(this._delegate,t))}catch(e){throw I(e,"collection()","DocumentReference.collection()")}}isEqual(t){return t=Object(s["k"])(t),t instanceof r["d"]&&Object(r["cb"])(this._delegate,t)}set(t,e){e=u("DocumentReference.set",e);try{return e?Object(r["fb"])(this._delegate,t,e):Object(r["fb"])(this._delegate,t)}catch(n){throw I(n,"setDoc()","DocumentReference.set()")}}update(t,e,...n){try{return 1===arguments.length?Object(r["kb"])(this._delegate,t):Object(r["kb"])(this._delegate,t,e,...n)}catch(i){throw I(i,"updateDoc()","DocumentReference.update()")}}delete(){return Object(r["B"])(this._delegate)}onSnapshot(...t){const e=S(t),n=k(t,t=>new T(this.firestore,new r["e"](this.firestore._delegate,this._userDataWriter,t._key,t._document,t.metadata,this._delegate.converter)));return Object(r["X"])(this._delegate,e,n)}get(t){let e;return e="cache"===(null===t||void 0===t?void 0:t.source)?Object(r["N"])(this._delegate):"server"===(null===t||void 0===t?void 0:t.source)?Object(r["O"])(this._delegate):Object(r["M"])(this._delegate),e.then(t=>new T(this.firestore,new r["e"](this.firestore._delegate,this._userDataWriter,t._key,t._document,t.metadata,this._delegate.converter)))}withConverter(t){return new O(this.firestore,t?this._delegate.withConverter(_.getInstance(this.firestore,t)):this._delegate.withConverter(null))}}function I(t,e,n){return t.message=t.message.replace(e,n),t}function S(t){for(const e of t)if("object"===typeof e&&!f(e))return e;return{}}function k(t,e){var n,i;let r;return r=f(t[0])?t[0]:f(t[1])?t[1]:"function"===typeof t[0]?{next:t[0],error:t[1],complete:t[2]}:{next:t[1],error:t[2],complete:t[3]},{next:t=>{r.next&&r.next(e(t))},error:null===(n=r.error)||void 0===n?void 0:n.bind(r),complete:null===(i=r.complete)||void 0===i?void 0:i.bind(r)}}class T{constructor(t,e){this._firestore=t,this._delegate=e}get ref(){return new O(this._firestore,this._delegate.ref)}get id(){return this._delegate.id}get metadata(){return this._delegate.metadata}get exists(){return this._delegate.exists()}data(t){return this._delegate.data(t)}get(t,e){return this._delegate.get(t,e)}isEqual(t){return Object(r["hb"])(this._delegate,t._delegate)}}class E extends T{data(t){const e=this._delegate.data(t);return Object(r["q"])(void 0!==e,"Document in a QueryDocumentSnapshot should exist"),e}}class x{constructor(t,e){this.firestore=t,this._delegate=e,this._userDataWriter=new v(t)}where(t,e,n){try{return new x(this.firestore,Object(r["ab"])(this._delegate,Object(r["mb"])(t,e,n)))}catch(i){throw I(i,/(orderBy|where)\(\)/,"Query.$1()")}}orderBy(t,e){try{return new x(this.firestore,Object(r["ab"])(this._delegate,Object(r["Z"])(t,e)))}catch(n){throw I(n,/(orderBy|where)\(\)/,"Query.$1()")}}limit(t){try{return new x(this.firestore,Object(r["ab"])(this._delegate,Object(r["T"])(t)))}catch(e){throw I(e,"limit()","Query.limit()")}}limitToLast(t){try{return new x(this.firestore,Object(r["ab"])(this._delegate,Object(r["U"])(t)))}catch(e){throw I(e,"limitToLast()","Query.limitToLast()")}}startAt(...t){try{return new x(this.firestore,Object(r["ab"])(this._delegate,Object(r["jb"])(...t)))}catch(e){throw I(e,"startAt()","Query.startAt()")}}startAfter(...t){try{return new x(this.firestore,Object(r["ab"])(this._delegate,Object(r["ib"])(...t)))}catch(e){throw I(e,"startAfter()","Query.startAfter()")}}endBefore(...t){try{return new x(this.firestore,Object(r["ab"])(this._delegate,Object(r["J"])(...t)))}catch(e){throw I(e,"endBefore()","Query.endBefore()")}}endAt(...t){try{return new x(this.firestore,Object(r["ab"])(this._delegate,Object(r["I"])(...t)))}catch(e){throw I(e,"endAt()","Query.endAt()")}}isEqual(t){return Object(r["bb"])(this._delegate,t._delegate)}get(t){let e;return e="cache"===(null===t||void 0===t?void 0:t.source)?Object(r["Q"])(this._delegate):"server"===(null===t||void 0===t?void 0:t.source)?Object(r["R"])(this._delegate):Object(r["P"])(this._delegate),e.then(t=>new A(this.firestore,new r["j"](this.firestore._delegate,this._userDataWriter,this._delegate,t._snapshot)))}onSnapshot(...t){const e=S(t),n=k(t,t=>new A(this.firestore,new r["j"](this.firestore._delegate,this._userDataWriter,this._delegate,t._snapshot)));return Object(r["X"])(this._delegate,e,n)}withConverter(t){return new x(this.firestore,t?this._delegate.withConverter(_.getInstance(this.firestore,t)):this._delegate.withConverter(null))}}class C{constructor(t,e){this._firestore=t,this._delegate=e}get type(){return this._delegate.type}get doc(){return new E(this._firestore,this._delegate.doc)}get oldIndex(){return this._delegate.oldIndex}get newIndex(){return this._delegate.newIndex}}class A{constructor(t,e){this._firestore=t,this._delegate=e}get query(){return new x(this._firestore,this._delegate.query)}get metadata(){return this._delegate.metadata}get size(){return this._delegate.size}get empty(){return this._delegate.empty}get docs(){return this._delegate.docs.map(t=>new E(this._firestore,t))}docChanges(t){return this._delegate.docChanges(t).map(t=>new C(this._firestore,t))}forEach(t,e){this._delegate.forEach(n=>{t.call(e,new E(this._firestore,n))})}isEqual(t){return Object(r["hb"])(this._delegate,t._delegate)}}class j extends x{constructor(t,e){super(t,e),this.firestore=t,this._delegate=e}get id(){return this._delegate.id}get path(){return this._delegate.path}get parent(){const t=this._delegate.parent;return t?new O(this.firestore,t):null}doc(t){try{return new O(this.firestore,void 0===t?Object(r["E"])(this._delegate):Object(r["E"])(this._delegate,t))}catch(e){throw I(e,"doc()","CollectionReference.doc()")}}add(t){return Object(r["u"])(this._delegate,t).then(t=>new O(this.firestore,t))}isEqual(t){return Object(r["cb"])(this._delegate,t._delegate)}withConverter(t){return new j(this.firestore,t?this._delegate.withConverter(_.getInstance(this.firestore,t)):this._delegate.withConverter(null))}}function R(t){return Object(r["p"])(t,r["d"])}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class L{constructor(...t){this._delegate=new r["f"](...t)}static documentId(){return new L(r["o"].keyField().canonicalString())}isEqual(t){return t=Object(s["k"])(t),t instanceof r["f"]&&this._delegate._internalPath.isEqual(t._internalPath)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class N{constructor(t){this._delegate=t}static serverTimestamp(){const t=Object(r["eb"])();return t._methodName="FieldValue.serverTimestamp",new N(t)}static delete(){const t=Object(r["C"])();return t._methodName="FieldValue.delete",new N(t)}static arrayUnion(...t){const e=Object(r["w"])(...t);return e._methodName="FieldValue.arrayUnion",new N(e)}static arrayRemove(...t){const e=Object(r["v"])(...t);return e._methodName="FieldValue.arrayRemove",new N(e)}static increment(t){const e=Object(r["S"])(t);return e._methodName="FieldValue.increment",new N(e)}isEqual(t){return this._delegate.isEqual(t._delegate)}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const D={Firestore:g,GeoPoint:r["h"],Timestamp:r["k"],Blob:d,Transaction:b,WriteBatch:w,DocumentReference:O,DocumentSnapshot:T,Query:x,QueryDocumentSnapshot:E,QuerySnapshot:A,CollectionReference:j,FieldPath:L,FieldValue:N,setLogLevel:y,CACHE_SIZE_UNLIMITED:r["c"]};function P(t,e){t.INTERNAL.registerComponent(new o["a"]("firestore-compat",t=>{const n=t.getProvider("app-compat").getImmediate(),i=t.getProvider("firestore").getImmediate();return e(n,i)},"PUBLIC").setServiceProps(Object.assign({},D)))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function M(t){P(t,(t,e)=>new g(t,e,new m)),t.registerVersion(a,c)}M(i["a"])},"18a5":function(t,e,n){"use strict";var i=n("23e7"),r=n("857a"),s=n("af03");i({target:"String",proto:!0,forced:s("anchor")},{anchor:function(t){return r(this,"a","name",t)}})},"19aa":function(t,e,n){var i=n("da84"),r=n("3a9b"),s=i.TypeError;t.exports=function(t,e){if(r(e,t))return t;throw s("Incorrect invocation")}},"1a2d":function(t,e,n){var i=n("e330"),r=n("7b0b"),s=i({}.hasOwnProperty);t.exports=Object.hasOwn||function(t,e){return s(r(t),e)}},"1b2c":function(t,e,n){},"1baa":function(t,e,n){"use strict";var i=n("5530"),r=(n("899c"),n("a9e3"),n("4de4"),n("d3b7"),n("a434"),n("159b"),n("fb6a"),n("7db0"),n("c740"),n("166a"),n("8547")),s=n("a452"),o=n("7560"),a=n("58df"),c=n("d9bd"),u=Object(a["a"])(r["a"],s["a"],o["a"]).extend({name:"base-item-group",props:{activeClass:{type:String,default:"v-item--active"},mandatory:Boolean,max:{type:[Number,String],default:null},multiple:Boolean,tag:{type:String,default:"div"}},data:function(){return{internalLazyValue:void 0!==this.value?this.value:this.multiple?[]:void 0,items:[]}},computed:{classes:function(){return Object(i["a"])({"v-item-group":!0},this.themeClasses)},selectedIndex:function(){return this.selectedItem&&this.items.indexOf(this.selectedItem)||-1},selectedItem:function(){if(!this.multiple)return this.selectedItems[0]},selectedItems:function(){var t=this;return this.items.filter((function(e,n){return t.toggleMethod(t.getValue(e,n))}))},selectedValues:function(){return null==this.internalValue?[]:Array.isArray(this.internalValue)?this.internalValue:[this.internalValue]},toggleMethod:function(){var t=this;if(!this.multiple)return function(e){return t.valueComparator(t.internalValue,e)};var e=this.internalValue;return Array.isArray(e)?function(n){return e.some((function(e){return t.valueComparator(e,n)}))}:function(){return!1}}},watch:{internalValue:"updateItemsState",items:"updateItemsState"},created:function(){this.multiple&&!Array.isArray(this.internalValue)&&Object(c["c"])("Model must be bound to an array if the multiple property is true.",this)},methods:{genData:function(){return{class:this.classes}},getValue:function(t,e){return void 0===t.value?e:t.value},onClick:function(t){this.updateInternalValue(this.getValue(t,this.items.indexOf(t)))},register:function(t){var e=this,n=this.items.push(t)-1;t.$on("change",(function(){return e.onClick(t)})),this.mandatory&&!this.selectedValues.length&&this.updateMandatory(),this.updateItem(t,n)},unregister:function(t){if(!this._isDestroyed){var e=this.items.indexOf(t),n=this.getValue(t,e);this.items.splice(e,1);var i=this.selectedValues.indexOf(n);if(!(i<0)){if(!this.mandatory)return this.updateInternalValue(n);this.multiple&&Array.isArray(this.internalValue)?this.internalValue=this.internalValue.filter((function(t){return t!==n})):this.internalValue=void 0,this.selectedItems.length||this.updateMandatory(!0)}}},updateItem:function(t,e){var n=this.getValue(t,e);t.isActive=this.toggleMethod(n)},updateItemsState:function(){var t=this;this.$nextTick((function(){if(t.mandatory&&!t.selectedItems.length)return t.updateMandatory();t.items.forEach(t.updateItem)}))},updateInternalValue:function(t){this.multiple?this.updateMultiple(t):this.updateSingle(t)},updateMandatory:function(t){if(this.items.length){var e=this.items.slice();t&&e.reverse();var n=e.find((function(t){return!t.disabled}));if(n){var i=this.items.indexOf(n);this.updateInternalValue(this.getValue(n,i))}}},updateMultiple:function(t){var e=Array.isArray(this.internalValue)?this.internalValue:[],n=e.slice(),i=n.findIndex((function(e){return e===t}));this.mandatory&&i>-1&&n.length-1<1||null!=this.max&&i<0&&n.length+1>this.max||(i>-1?n.splice(i,1):n.push(t),this.internalValue=n)},updateSingle:function(t){var e=t===this.internalValue;this.mandatory&&e||(this.internalValue=e?void 0:t)}},render:function(t){return t(this.tag,this.genData(),this.$slots.default)}}),l=(u.extend({name:"v-item-group",provide:function(){return{itemGroup:this}}}),n("a9ad"));e["a"]=Object(a["a"])(u,l["a"]).extend({name:"v-list-item-group",provide:function(){return{isInGroup:!0,listItemGroup:this}},computed:{classes:function(){return Object(i["a"])(Object(i["a"])({},u.options.computed.classes.call(this)),{},{"v-list-item-group":!0})}},methods:{genData:function(){return this.setTextColor(this.color,Object(i["a"])(Object(i["a"])({},u.options.methods.genData.call(this)),{},{attrs:{role:"listbox"}}))}}})},"1be4":function(t,e,n){var i=n("d066");t.exports=i("document","documentElement")},"1c7e":function(t,e,n){var i=n("b622"),r=i("iterator"),s=!1;try{var o=0,a={next:function(){return{done:!!o++}},return:function(){s=!0}};a[r]=function(){return this},Array.from(a,(function(){throw 2}))}catch(c){}t.exports=function(t,e){if(!e&&!s)return!1;var n=!1;try{var i={};i[r]=function(){return{next:function(){return{done:n=!0}}}},t(i)}catch(c){}return n}},"1c87":function(t,e,n){"use strict";var i=n("ade3"),r=n("5530"),s=(n("9911"),n("498a"),n("99af"),n("ac1f"),n("5319"),n("2b0e")),o=n("5607"),a=n("80d2");e["a"]=s["a"].extend({name:"routable",directives:{Ripple:o["a"]},props:{activeClass:String,append:Boolean,disabled:Boolean,exact:{type:Boolean,default:void 0},exactPath:Boolean,exactActiveClass:String,link:Boolean,href:[String,Object],to:[String,Object],nuxt:Boolean,replace:Boolean,ripple:{type:[Boolean,Object],default:null},tag:String,target:String},data:function(){return{isActive:!1,proxyClass:""}},computed:{classes:function(){var t={};return this.to||(this.activeClass&&(t[this.activeClass]=this.isActive),this.proxyClass&&(t[this.proxyClass]=this.isActive)),t},computedRipple:function(){var t;return null!=(t=this.ripple)?t:!this.disabled&&this.isClickable},isClickable:function(){return!this.disabled&&Boolean(this.isLink||this.$listeners.click||this.$listeners["!click"]||this.$attrs.tabindex)},isLink:function(){return this.to||this.href||this.link},styles:function(){return{}}},watch:{$route:"onRouteChange"},mounted:function(){this.onRouteChange()},methods:{generateRouteLink:function(){var t,e,n=this.exact,s=(t={attrs:{tabindex:"tabindex"in this.$attrs?this.$attrs.tabindex:void 0},class:this.classes,style:this.styles,props:{},directives:[{name:"ripple",value:this.computedRipple}]},Object(i["a"])(t,this.to?"nativeOn":"on",Object(r["a"])(Object(r["a"])({},this.$listeners),"click"in this?{click:this.click}:void 0)),Object(i["a"])(t,"ref","link"),t);if("undefined"===typeof this.exact&&(n="/"===this.to||this.to===Object(this.to)&&"/"===this.to.path),this.to){var o=this.activeClass,a=this.exactActiveClass||o;this.proxyClass&&(o="".concat(o," ").concat(this.proxyClass).trim(),a="".concat(a," ").concat(this.proxyClass).trim()),e=this.nuxt?"nuxt-link":"router-link",Object.assign(s.props,{to:this.to,exact:n,exactPath:this.exactPath,activeClass:o,exactActiveClass:a,append:this.append,replace:this.replace})}else e=(this.href?"a":this.tag)||"div","a"===e&&this.href&&(s.attrs.href=this.href);return this.target&&(s.attrs.target=this.target),{tag:e,data:s}},onRouteChange:function(){var t=this;if(this.to&&this.$refs.link&&this.$route){var e="".concat(this.activeClass||""," ").concat(this.proxyClass||"").trim(),n="".concat(this.exactActiveClass||""," ").concat(this.proxyClass||"").trim()||e,i="_vnode.data.class."+(this.exact?n:e);this.$nextTick((function(){!Object(a["p"])(t.$refs.link,i)===t.isActive&&t.toggle()}))}},toggle:function(){this.isActive=!this.isActive}}})},"1cdc":function(t,e,n){var i=n("342f");t.exports=/(?:ipad|iphone|ipod).*applewebkit/i.test(i)},"1d80":function(t,e,n){var i=n("da84"),r=i.TypeError;t.exports=function(t){if(void 0==t)throw r("Can't call method on "+t);return t}},"1da1":function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));n("d3b7");function i(t,e,n,i,r,s,o){try{var a=t[s](o),c=a.value}catch(u){return void n(u)}a.done?e(c):Promise.resolve(c).then(i,r)}function r(t){return function(){var e=this,n=arguments;return new Promise((function(r,s){var o=t.apply(e,n);function a(t){i(o,r,s,a,c,"next",t)}function c(t){i(o,r,s,a,c,"throw",t)}a(void 0)}))}}},"1dde":function(t,e,n){var i=n("d039"),r=n("b622"),s=n("2d00"),o=r("species");t.exports=function(t){return s>=51||!i((function(){var e=[],n=e.constructor={};return n[o]=function(){return{foo:1}},1!==e[t](Boolean).foo}))}},"1f5a":function(t,e,n){"use strict";n.d(e,"a",(function(){return u})),n.d(e,"b",(function(){return $t})),n.d(e,"c",(function(){return ue})),n.d(e,"d",(function(){return fe})),n.d(e,"e",(function(){return me})),n.d(e,"f",(function(){return pe})),n.d(e,"g",(function(){return Zt})),n.d(e,"h",(function(){return de})),n.d(e,"i",(function(){return Ri})),n.d(e,"j",(function(){return Wr})),n.d(e,"k",(function(){return c})),n.d(e,"l",(function(){return Si})),n.d(e,"m",(function(){return ve})),n.d(e,"n",(function(){return be})),n.d(e,"o",(function(){return we})),n.d(e,"p",(function(){return O})),n.d(e,"q",(function(){return jt})),n.d(e,"r",(function(){return v})),n.d(e,"s",(function(){return Dn})),n.d(e,"t",(function(){return T})),n.d(e,"u",(function(){return sr})),n.d(e,"v",(function(){return ft})),n.d(e,"x",(function(){return qe})),n.d(e,"y",(function(){return An})),n.d(e,"z",(function(){return qr})),n.d(e,"A",(function(){return Rn})),n.d(e,"B",(function(){return ze})),n.d(e,"C",(function(){return Ue})),n.d(e,"D",(function(){return Lt})),n.d(e,"F",(function(){return We})),n.d(e,"G",(function(){return d})),n.d(e,"H",(function(){return Je})),n.d(e,"I",(function(){return pn})),n.d(e,"J",(function(){return vn})),n.d(e,"K",(function(){return rr})),n.d(e,"L",(function(){return dt})),n.d(e,"M",(function(){return ii})),n.d(e,"N",(function(){return Ye})),n.d(e,"O",(function(){return Ne})),n.d(e,"P",(function(){return xi})),n.d(e,"Q",(function(){return Ui})),n.d(e,"R",(function(){return nr})),n.d(e,"S",(function(){return In})),n.d(e,"T",(function(){return De})),n.d(e,"U",(function(){return Ci})),n.d(e,"V",(function(){return Vi})),n.d(e,"W",(function(){return tr})),n.d(e,"X",(function(){return Ze})),n.d(e,"Y",(function(){return Ve})),n.d(e,"Z",(function(){return Ke})),n.d(e,"ab",(function(){return Se})),n.d(e,"bb",(function(){return Le})),n.d(e,"cb",(function(){return Me})),n.d(e,"db",(function(){return Ge})),n.d(e,"eb",(function(){return Xe})),n.d(e,"fb",(function(){return Ei})),n.d(e,"gb",(function(){return Bi})),n.d(e,"hb",(function(){return Ji})),n.d(e,"ib",(function(){return xe})),n.d(e,"jb",(function(){return rn})),n.d(e,"kb",(function(){return sn})),n.d(e,"lb",(function(){return ji})),n.d(e,"mb",(function(){return nn})),n.d(e,"nb",(function(){return tn})),n.d(e,"ob",(function(){return He})),n.d(e,"w",(function(){return Is})),n.d(e,"E",(function(){return _s}));var i=n("1fd5"),r=n("589b");function s(t,e){var n={};for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&e.indexOf(i)<0&&(n[i]=t[i]);if(null!=t&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(i=Object.getOwnPropertySymbols(t);r<i.length;r++)e.indexOf(i[r])<0&&Object.prototype.propertyIsEnumerable.call(t,i[r])&&(n[i[r]]=t[i[r]])}return n}Object.create;Object.create;var o=n("e691"),a=n("22e5");
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const c={FACEBOOK:"facebook.com",GITHUB:"github.com",GOOGLE:"google.com",PASSWORD:"password",PHONE:"phone",TWITTER:"twitter.com"},u={EMAIL_SIGNIN:"EMAIL_SIGNIN",PASSWORD_RESET:"PASSWORD_RESET",RECOVER_EMAIL:"RECOVER_EMAIL",REVERT_SECOND_FACTOR_ADDITION:"REVERT_SECOND_FACTOR_ADDITION",VERIFY_AND_CHANGE_EMAIL:"VERIFY_AND_CHANGE_EMAIL",VERIFY_EMAIL:"VERIFY_EMAIL"};
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function l(){return{["admin-restricted-operation"]:"This operation is restricted to administrators only.",["argument-error"]:"",["app-not-authorized"]:"This app, identified by the domain where it's hosted, is not authorized to use Firebase Authentication with the provided API key. Review your key configuration in the Google API console.",["app-not-installed"]:"The requested mobile application corresponding to the identifier (Android package name or iOS bundle ID) provided is not installed on this device.",["captcha-check-failed"]:"The reCAPTCHA response token provided is either invalid, expired, already used or the domain associated with it does not match the list of whitelisted domains.",["code-expired"]:"The SMS code has expired. Please re-send the verification code to try again.",["cordova-not-ready"]:"Cordova framework is not ready.",["cors-unsupported"]:"This browser is not supported.",["credential-already-in-use"]:"This credential is already associated with a different user account.",["custom-token-mismatch"]:"The custom token corresponds to a different audience.",["requires-recent-login"]:"This operation is sensitive and requires recent authentication. Log in again before retrying this request.",["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK.",["dynamic-link-not-activated"]:"Please activate Dynamic Links in the Firebase Console and agree to the terms and conditions.",["email-change-needs-verification"]:"Multi-factor users must always have a verified email.",["email-already-in-use"]:"The email address is already in use by another account.",["emulator-config-failed"]:'Auth instance has already been used to make a network call. Auth can no longer be configured to use the emulator. Try calling "connectAuthEmulator()" sooner.',["expired-action-code"]:"The action code has expired.",["cancelled-popup-request"]:"This operation has been cancelled due to another conflicting popup being opened.",["internal-error"]:"An internal AuthError has occurred.",["invalid-app-credential"]:"The phone verification request contains an invalid application verifier. The reCAPTCHA token response is either invalid or expired.",["invalid-app-id"]:"The mobile app identifier is not registed for the current project.",["invalid-user-token"]:"This user's credential isn't valid for this project. This can happen if the user's token has been tampered with, or if the user isn't for the project associated with this API key.",["invalid-auth-event"]:"An internal AuthError has occurred.",["invalid-verification-code"]:"The SMS verification code used to create the phone auth credential is invalid. Please resend the verification code sms and be sure to use the verification code provided by the user.",["invalid-continue-uri"]:"The continue URL provided in the request is invalid.",["invalid-cordova-configuration"]:"The following Cordova plugins must be installed to enable OAuth sign-in: cordova-plugin-buildinfo, cordova-universal-links-plugin, cordova-plugin-browsertab, cordova-plugin-inappbrowser and cordova-plugin-customurlscheme.",["invalid-custom-token"]:"The custom token format is incorrect. Please check the documentation.",["invalid-dynamic-link-domain"]:"The provided dynamic link domain is not configured or authorized for the current project.",["invalid-email"]:"The email address is badly formatted.",["invalid-emulator-scheme"]:"Emulator URL must start with a valid scheme (http:// or https://).",["invalid-api-key"]:"Your API key is invalid, please check you have copied it correctly.",["invalid-cert-hash"]:"The SHA-1 certificate hash provided is invalid.",["invalid-credential"]:"The supplied auth credential is malformed or has expired.",["invalid-message-payload"]:"The email template corresponding to this action contains invalid characters in its message. Please fix by going to the Auth email templates section in the Firebase Console.",["invalid-multi-factor-session"]:"The request does not contain a valid proof of first factor successful sign-in.",["invalid-oauth-provider"]:"EmailAuthProvider is not supported for this operation. This operation only supports OAuth providers.",["invalid-oauth-client-id"]:"The OAuth client ID provided is either invalid or does not match the specified API key.",["unauthorized-domain"]:"This domain is not authorized for OAuth operations for your Firebase project. Edit the list of authorized domains from the Firebase console.",["invalid-action-code"]:"The action code is invalid. This can happen if the code is malformed, expired, or has already been used.",["wrong-password"]:"The password is invalid or the user does not have a password.",["invalid-persistence-type"]:"The specified persistence type is invalid. It can only be local, session or none.",["invalid-phone-number"]:"The format of the phone number provided is incorrect. Please enter the phone number in a format that can be parsed into E.164 format. E.164 phone numbers are written in the format [+][country code][subscriber number including area code].",["invalid-provider-id"]:"The specified provider ID is invalid.",["invalid-recipient-email"]:"The email corresponding to this action failed to send as the provided recipient email address is invalid.",["invalid-sender"]:"The email template corresponding to this action contains an invalid sender email or name. Please fix by going to the Auth email templates section in the Firebase Console.",["invalid-verification-id"]:"The verification ID used to create the phone auth credential is invalid.",["invalid-tenant-id"]:"The Auth instance's tenant ID is invalid.",["missing-android-pkg-name"]:"An Android Package Name must be provided if the Android App is required to be installed.",["auth-domain-config-required"]:"Be sure to include authDomain when calling firebase.initializeApp(), by following the instructions in the Firebase console.",["missing-app-credential"]:"The phone verification request is missing an application verifier assertion. A reCAPTCHA response token needs to be provided.",["missing-verification-code"]:"The phone auth credential was created with an empty SMS verification code.",["missing-continue-uri"]:"A continue URL must be provided in the request.",["missing-iframe-start"]:"An internal AuthError has occurred.",["missing-ios-bundle-id"]:"An iOS Bundle ID must be provided if an App Store ID is provided.",["missing-or-invalid-nonce"]:"The request does not contain a valid nonce. This can occur if the SHA-256 hash of the provided raw nonce does not match the hashed nonce in the ID token payload.",["missing-multi-factor-info"]:"No second factor identifier is provided.",["missing-multi-factor-session"]:"The request is missing proof of first factor successful sign-in.",["missing-phone-number"]:"To send verification codes, provide a phone number for the recipient.",["missing-verification-id"]:"The phone auth credential was created with an empty verification ID.",["app-deleted"]:"This instance of FirebaseApp has been deleted.",["multi-factor-info-not-found"]:"The user does not have a second factor matching the identifier provided.",["multi-factor-auth-required"]:"Proof of ownership of a second factor is required to complete sign-in.",["account-exists-with-different-credential"]:"An account already exists with the same email address but different sign-in credentials. Sign in using a provider associated with this email address.",["network-request-failed"]:"A network AuthError (such as timeout, interrupted connection or unreachable host) has occurred.",["no-auth-event"]:"An internal AuthError has occurred.",["no-such-provider"]:"User was not linked to an account with the given provider.",["null-user"]:"A null user object was provided as the argument for an operation which requires a non-null user object.",["operation-not-allowed"]:"The given sign-in provider is disabled for this Firebase project. Enable it in the Firebase console, under the sign-in method tab of the Auth section.",["operation-not-supported-in-this-environment"]:'This operation is not supported in the environment this application is running on. "location.protocol" must be http, https or chrome-extension and web storage must be enabled.',["popup-blocked"]:"Unable to establish a connection with the popup. It may have been blocked by the browser.",["popup-closed-by-user"]:"The popup has been closed by the user before finalizing the operation.",["provider-already-linked"]:"User can only be linked to one identity for the given provider.",["quota-exceeded"]:"The project's quota for this operation has been exceeded.",["redirect-cancelled-by-user"]:"The redirect operation has been cancelled by the user before finalizing.",["redirect-operation-pending"]:"A redirect sign-in operation is already pending.",["rejected-credential"]:"The request contains malformed or mismatching credentials.",["second-factor-already-in-use"]:"The second factor is already enrolled on this account.",["maximum-second-factor-count-exceeded"]:"The maximum allowed number of second factors on a user has been exceeded.",["tenant-id-mismatch"]:"The provided tenant ID does not match the Auth instance's tenant ID",["timeout"]:"The operation has timed out.",["user-token-expired"]:"The user's credential is no longer valid. The user must sign in again.",["too-many-requests"]:"We have blocked all requests from this device due to unusual activity. Try again later.",["unauthorized-continue-uri"]:"The domain of the continue URL is not whitelisted.  Please whitelist the domain in the Firebase console.",["unsupported-first-factor"]:"Enrolling a second factor or signing in with a multi-factor account requires sign-in with a supported first factor.",["unsupported-persistence-type"]:"The current environment does not support the specified persistence type.",["unsupported-tenant-operation"]:"This operation is not supported in a multi-tenant context.",["unverified-email"]:"The operation requires a verified email.",["user-cancelled"]:"The user did not grant your application the permissions it requested.",["user-not-found"]:"There is no user record corresponding to this identifier. The user may have been deleted.",["user-disabled"]:"The user account has been disabled by an administrator.",["user-mismatch"]:"The supplied credentials do not correspond to the previously signed in user.",["user-signed-out"]:"",["weak-password"]:"The password must be 6 characters long or more.",["web-storage-unsupported"]:"This browser is not supported or 3rd party cookies and data may be disabled.",["already-initialized"]:"initializeAuth() has already been called with different options. To avoid this error, call initializeAuth() with the same options as when it was originally called, or call getAuth() to return the already initialized instance."}}function h(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const d=l,f=h,p=new i["b"]("auth","Firebase",h()),m=new o["b"]("@firebase/auth");function g(t,...e){m.logLevel<=o["a"].ERROR&&m.error(`Auth (${r["SDK_VERSION"]}): ${t}`,...e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function v(t,...e){throw _(t,...e)}function y(t,...e){return _(t,...e)}function b(t,e,n){const r=Object.assign(Object.assign({},f()),{[e]:n}),s=new i["b"]("auth","Firebase",r);return s.create(e,{appName:t.name})}function w(t,e,n){const i=n;if(!(e instanceof i))throw i.name!==e.constructor.name&&v(t,"argument-error"),b(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function _(t,...e){if("string"!==typeof t){const n=e[0],i=[...e.slice(1)];return i[0]&&(i[0].appName=t.name),t._errorFactory.create(n,...i)}return p.create(t,...e)}function O(t,e,...n){if(!t)throw _(e,...n)}function I(t){const e="INTERNAL ASSERTION FAILED: "+t;throw g(e),new Error(e)}function S(t,e){t||I(e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const k=new Map;function T(t){S(t instanceof Function,"Expected a class definition");let e=k.get(t);return e?(S(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,k.set(t,e),e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function E(t,e){const n=(null===e||void 0===e?void 0:e.persistence)||[],i=(Array.isArray(n)?n:[n]).map(T);(null===e||void 0===e?void 0:e.errorMap)&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(i,null===e||void 0===e?void 0:e.popupRedirectResolver)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function x(){var t;return"undefined"!==typeof self&&(null===(t=self.location)||void 0===t?void 0:t.href)||""}function C(){return"http:"===A()||"https:"===A()}function A(){var t;return"undefined"!==typeof self&&(null===(t=self.location)||void 0===t?void 0:t.protocol)||null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function j(){return!("undefined"!==typeof navigator&&navigator&&"onLine"in navigator&&"boolean"===typeof navigator.onLine&&(C()||Object(i["n"])()||"connection"in navigator))||navigator.onLine}function R(){if("undefined"===typeof navigator)return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class L{constructor(t,e){this.shortDelay=t,this.longDelay=e,S(e>t,"Short delay should be less than long delay!"),this.isMobile=Object(i["s"])()||Object(i["u"])()}get(){return j()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function N(t,e){S(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class D{static initialize(t,e,n){this.fetchImpl=t,e&&(this.headersImpl=e),n&&(this.responseImpl=n)}static fetch(){return this.fetchImpl?this.fetchImpl:"undefined"!==typeof self&&"fetch"in self?self.fetch:void I("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){return this.headersImpl?this.headersImpl:"undefined"!==typeof self&&"Headers"in self?self.Headers:void I("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){return this.responseImpl?this.responseImpl:"undefined"!==typeof self&&"Response"in self?self.Response:void I("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const P={["CREDENTIAL_MISMATCH"]:"custom-token-mismatch",["MISSING_CUSTOM_TOKEN"]:"internal-error",["INVALID_IDENTIFIER"]:"invalid-email",["MISSING_CONTINUE_URI"]:"internal-error",["INVALID_PASSWORD"]:"wrong-password",["MISSING_PASSWORD"]:"internal-error",["EMAIL_EXISTS"]:"email-already-in-use",["PASSWORD_LOGIN_DISABLED"]:"operation-not-allowed",["INVALID_IDP_RESPONSE"]:"invalid-credential",["INVALID_PENDING_TOKEN"]:"invalid-credential",["FEDERATED_USER_ID_ALREADY_LINKED"]:"credential-already-in-use",["MISSING_REQ_TYPE"]:"internal-error",["EMAIL_NOT_FOUND"]:"user-not-found",["RESET_PASSWORD_EXCEED_LIMIT"]:"too-many-requests",["EXPIRED_OOB_CODE"]:"expired-action-code",["INVALID_OOB_CODE"]:"invalid-action-code",["MISSING_OOB_CODE"]:"internal-error",["CREDENTIAL_TOO_OLD_LOGIN_AGAIN"]:"requires-recent-login",["INVALID_ID_TOKEN"]:"invalid-user-token",["TOKEN_EXPIRED"]:"user-token-expired",["USER_NOT_FOUND"]:"user-token-expired",["TOO_MANY_ATTEMPTS_TRY_LATER"]:"too-many-requests",["INVALID_CODE"]:"invalid-verification-code",["INVALID_SESSION_INFO"]:"invalid-verification-id",["INVALID_TEMPORARY_PROOF"]:"invalid-credential",["MISSING_SESSION_INFO"]:"missing-verification-id",["SESSION_EXPIRED"]:"code-expired",["MISSING_ANDROID_PACKAGE_NAME"]:"missing-android-pkg-name",["UNAUTHORIZED_DOMAIN"]:"unauthorized-continue-uri",["INVALID_OAUTH_CLIENT_ID"]:"invalid-oauth-client-id",["ADMIN_ONLY_OPERATION"]:"admin-restricted-operation",["INVALID_MFA_PENDING_CREDENTIAL"]:"invalid-multi-factor-session",["MFA_ENROLLMENT_NOT_FOUND"]:"multi-factor-info-not-found",["MISSING_MFA_ENROLLMENT_ID"]:"missing-multi-factor-info",["MISSING_MFA_PENDING_CREDENTIAL"]:"missing-multi-factor-session",["SECOND_FACTOR_EXISTS"]:"second-factor-already-in-use",["SECOND_FACTOR_LIMIT_EXCEEDED"]:"maximum-second-factor-count-exceeded",["BLOCKING_FUNCTION_ERROR_RESPONSE"]:"internal-error"},M=new L(3e4,6e4);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function F(t,e,n,r,s={}){return B(t,s,async()=>{let s={},o={};r&&("GET"===e?o=r:s={body:JSON.stringify(r)});const a=Object(i["x"])(Object.assign({key:t.config.apiKey},o)).slice(1),c=await t._getAdditionalHeaders();return c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode),D.fetch()(U(t,t.config.apiHost,n,a),Object.assign({method:e,headers:c,referrerPolicy:"no-referrer"},s))})}async function B(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},P),e);try{const e=new q(t),i=await Promise.race([n(),e.promise]);e.clearNetworkTimeout();const s=await i.json();if("needConfirmation"in s)throw z(t,"account-exists-with-different-credential",s);if(i.ok&&!("errorMessage"in s))return s;{const e=i.ok?s.errorMessage:s.error.message,[n,o]=e.split(" : ");if("FEDERATED_USER_ID_ALREADY_LINKED"===n)throw z(t,"credential-already-in-use",s);if("EMAIL_EXISTS"===n)throw z(t,"email-already-in-use",s);const a=r[n]||n.toLowerCase().replace(/[_\s]+/g,"-");if(o)throw b(t,a,o);v(t,a)}}catch(s){if(s instanceof i["c"])throw s;v(t,"network-request-failed")}}async function V(t,e,n,i,r={}){const s=await F(t,e,n,i,r);return"mfaPendingCredential"in s&&v(t,"multi-factor-auth-required",{_serverResponse:s}),s}function U(t,e,n,i){const r=`${e}${n}?${i}`;return t.config.emulator?N(t.config,r):`${t.config.apiScheme}://${r}`}class q{constructor(t){this.auth=t,this.timer=null,this.promise=new Promise((t,e)=>{this.timer=setTimeout(()=>e(y(this.auth,"network-request-failed")),M.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function z(t,e,n){const i={appName:t.name};n.email&&(i.email=n.email),n.phoneNumber&&(i.phoneNumber=n.phoneNumber);const r=y(t,e,i);return r.customData._tokenResponse=n,r}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function H(t,e){return F(t,"POST","/v1/accounts:delete",e)}async function W(t,e){return F(t,"POST","/v1/accounts:update",e)}async function G(t,e){return F(t,"POST","/v1/accounts:lookup",e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function K(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch(e){}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Y(t,e=!1){const n=Object(i["k"])(t),r=await n.getIdToken(e),s=Q(r);O(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const o="object"===typeof s.firebase?s.firebase:void 0,a=null===o||void 0===o?void 0:o["sign_in_provider"];return{claims:s,token:r,authTime:K(X(s.auth_time)),issuedAtTime:K(X(s.iat)),expirationTime:K(X(s.exp)),signInProvider:a||null,signInSecondFactor:(null===o||void 0===o?void 0:o["sign_in_second_factor"])||null}}function X(t){return 1e3*Number(t)}function Q(t){const[e,n,r]=t.split(".");if(void 0===e||void 0===n||void 0===r)return g("JWT malformed, contained fewer than 3 sections"),null;try{const t=Object(i["d"])(n);return t?JSON.parse(t):(g("Failed to decode base64 JWT payload"),null)}catch(s){return g("Caught error parsing JWT payload as JSON",s),null}}function J(t){const e=Q(t);return O(e,"internal-error"),O("undefined"!==typeof e.exp,"internal-error"),O("undefined"!==typeof e.iat,"internal-error"),Number(e.exp)-Number(e.iat)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Z(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof i["c"]&&tt(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function tt({code:t}){return"auth/user-disabled"===t||"auth/user-token-expired"===t}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class et{constructor(t){this.user=t,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,null!==this.timerId&&clearTimeout(this.timerId))}getInterval(t){var e;if(t){const t=this.errorBackoff;return this.errorBackoff=Math.min(2*this.errorBackoff,96e4),t}{this.errorBackoff=3e4;const t=null!==(e=this.user.stsTokenManager.expirationTime)&&void 0!==e?e:0,n=t-Date.now()-3e5;return Math.max(0,n)}}schedule(t=!1){if(!this.isRunning)return;const e=this.getInterval(t);this.timerId=setTimeout(async()=>{await this.iteration()},e)}async iteration(){try{await this.user.getIdToken(!0)}catch(t){return void("auth/network-request-failed"===t.code&&this.schedule(!0))}this.schedule()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nt{constructor(t,e){this.createdAt=t,this.lastLoginAt=e,this._initializeTime()}_initializeTime(){this.lastSignInTime=K(this.lastLoginAt),this.creationTime=K(this.createdAt)}_copy(t){this.createdAt=t.createdAt,this.lastLoginAt=t.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function it(t){var e;const n=t.auth,i=await t.getIdToken(),r=await Z(t,G(n,{idToken:i}));O(null===r||void 0===r?void 0:r.users.length,n,"internal-error");const s=r.users[0];t._notifyReloadListener(s);const o=(null===(e=s.providerUserInfo)||void 0===e?void 0:e.length)?ot(s.providerUserInfo):[],a=st(t.providerData,o),c=t.isAnonymous,u=!(t.email&&s.passwordHash)&&!(null===a||void 0===a?void 0:a.length),l=!!c&&u,h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new nt(s.createdAt,s.lastLoginAt),isAnonymous:l};Object.assign(t,h)}async function rt(t){const e=Object(i["k"])(t);await it(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function st(t,e){const n=t.filter(t=>!e.some(e=>e.providerId===t.providerId));return[...n,...e]}function ot(t){return t.map(t=>{var{providerId:e}=t,n=s(t,["providerId"]);return{providerId:e,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}})}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function at(t,e){const n=await B(t,{},async()=>{const n=Object(i["x"])({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:r,apiKey:s}=t.config,o=U(t,r,"/v1/token","key="+s),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",D.fetch()(o,{method:"POST",headers:a,body:n})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ct{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(t){O(t.idToken,"internal-error"),O("undefined"!==typeof t.idToken,"internal-error"),O("undefined"!==typeof t.refreshToken,"internal-error");const e="expiresIn"in t&&"undefined"!==typeof t.expiresIn?Number(t.expiresIn):J(t.idToken);this.updateTokensAndExpiration(t.idToken,t.refreshToken,e)}async getToken(t,e=!1){return O(!this.accessToken||this.refreshToken,t,"user-token-expired"),e||!this.accessToken||this.isExpired?this.refreshToken?(await this.refresh(t,this.refreshToken),this.accessToken):null:this.accessToken}clearRefreshToken(){this.refreshToken=null}async refresh(t,e){const{accessToken:n,refreshToken:i,expiresIn:r}=await at(t,e);this.updateTokensAndExpiration(n,i,Number(r))}updateTokensAndExpiration(t,e,n){this.refreshToken=e||null,this.accessToken=t||null,this.expirationTime=Date.now()+1e3*n}static fromJSON(t,e){const{refreshToken:n,accessToken:i,expirationTime:r}=e,s=new ct;return n&&(O("string"===typeof n,"internal-error",{appName:t}),s.refreshToken=n),i&&(O("string"===typeof i,"internal-error",{appName:t}),s.accessToken=i),r&&(O("number"===typeof r,"internal-error",{appName:t}),s.expirationTime=r),s}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(t){this.accessToken=t.accessToken,this.refreshToken=t.refreshToken,this.expirationTime=t.expirationTime}_clone(){return Object.assign(new ct,this.toJSON())}_performRefresh(){return I("not implemented")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ut(t,e){O("string"===typeof t||"undefined"===typeof t,"internal-error",{appName:e})}class lt{constructor(t){var{uid:e,auth:n,stsTokenManager:i}=t,r=s(t,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.emailVerified=!1,this.isAnonymous=!1,this.tenantId=null,this.providerData=[],this.proactiveRefresh=new et(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=n,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=r.displayName||null,this.email=r.email||null,this.emailVerified=r.emailVerified||!1,this.phoneNumber=r.phoneNumber||null,this.photoURL=r.photoURL||null,this.isAnonymous=r.isAnonymous||!1,this.tenantId=r.tenantId||null,this.metadata=new nt(r.createdAt||void 0,r.lastLoginAt||void 0)}async getIdToken(t){const e=await Z(this,this.stsTokenManager.getToken(this.auth,t));return O(e,this.auth,"internal-error"),this.accessToken!==e&&(this.accessToken=e,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),e}getIdTokenResult(t){return Y(this,t)}reload(){return rt(this)}_assign(t){this!==t&&(O(this.uid===t.uid,this.auth,"internal-error"),this.displayName=t.displayName,this.photoURL=t.photoURL,this.email=t.email,this.emailVerified=t.emailVerified,this.phoneNumber=t.phoneNumber,this.isAnonymous=t.isAnonymous,this.tenantId=t.tenantId,this.providerData=t.providerData.map(t=>Object.assign({},t)),this.metadata._copy(t.metadata),this.stsTokenManager._assign(t.stsTokenManager))}_clone(t){return new lt(Object.assign(Object.assign({},this),{auth:t,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(t){O(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=t,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(t){this.reloadListener?this.reloadListener(t):this.reloadUserInfo=t}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(t,e=!1){let n=!1;t.idToken&&t.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(t),n=!0),e&&await it(this),await this.auth._persistUserIfCurrent(this),n&&this.auth._notifyListenersIfCurrent(this)}async delete(){const t=await this.getIdToken();return await Z(this,H(this.auth,{idToken:t})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(t=>Object.assign({},t)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(t,e){var n,i,r,s,o,a,c,u;const l=null!==(n=e.displayName)&&void 0!==n?n:void 0,h=null!==(i=e.email)&&void 0!==i?i:void 0,d=null!==(r=e.phoneNumber)&&void 0!==r?r:void 0,f=null!==(s=e.photoURL)&&void 0!==s?s:void 0,p=null!==(o=e.tenantId)&&void 0!==o?o:void 0,m=null!==(a=e._redirectEventId)&&void 0!==a?a:void 0,g=null!==(c=e.createdAt)&&void 0!==c?c:void 0,v=null!==(u=e.lastLoginAt)&&void 0!==u?u:void 0,{uid:y,emailVerified:b,isAnonymous:w,providerData:_,stsTokenManager:I}=e;O(y&&I,t,"internal-error");const S=ct.fromJSON(this.name,I);O("string"===typeof y,t,"internal-error"),ut(l,t.name),ut(h,t.name),O("boolean"===typeof b,t,"internal-error"),O("boolean"===typeof w,t,"internal-error"),ut(d,t.name),ut(f,t.name),ut(p,t.name),ut(m,t.name),ut(g,t.name),ut(v,t.name);const k=new lt({uid:y,auth:t,email:h,emailVerified:b,displayName:l,isAnonymous:w,photoURL:f,phoneNumber:d,tenantId:p,stsTokenManager:S,createdAt:g,lastLoginAt:v});return _&&Array.isArray(_)&&(k.providerData=_.map(t=>Object.assign({},t))),m&&(k._redirectEventId=m),k}static async _fromIdTokenResponse(t,e,n=!1){const i=new ct;i.updateFromServerResponse(e);const r=new lt({uid:e.localId,auth:t,stsTokenManager:i,isAnonymous:n});return await it(r),r}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ht{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(t,e){this.storage[t]=e}async _get(t){const e=this.storage[t];return void 0===e?null:e}async _remove(t){delete this.storage[t]}_addListener(t,e){}_removeListener(t,e){}}ht.type="NONE";const dt=ht;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ft(t,e,n){return`firebase:${t}:${e}:${n}`}class pt{constructor(t,e,n){this.persistence=t,this.auth=e,this.userKey=n;const{config:i,name:r}=this.auth;this.fullUserKey=ft(this.userKey,i.apiKey,r),this.fullPersistenceKey=ft("persistence",i.apiKey,r),this.boundEventHandler=e._onStorageEvent.bind(e),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(t){return this.persistence._set(this.fullUserKey,t.toJSON())}async getCurrentUser(){const t=await this.persistence._get(this.fullUserKey);return t?lt._fromJSON(this.auth,t):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(t){if(this.persistence===t)return;const e=await this.getCurrentUser();return await this.removeCurrentUser(),this.persistence=t,e?this.setCurrentUser(e):void 0}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(t,e,n="authUser"){if(!e.length)return new pt(T(dt),t,n);const i=(await Promise.all(e.map(async t=>{if(await t._isAvailable())return t}))).filter(t=>t);let r=i[0]||T(dt);const s=ft(n,t.config.apiKey,t.name);let o=null;for(const u of e)try{const e=await u._get(s);if(e){const n=lt._fromJSON(t,e);u!==r&&(o=n),r=u;break}}catch(c){}const a=i.filter(t=>t._shouldAllowMigration);return r._shouldAllowMigration&&a.length?(r=a[0],o&&await r._set(s,o.toJSON()),await Promise.all(e.map(async t=>{if(t!==r)try{await t._remove(s)}catch(c){}})),new pt(r,t,n)):new pt(r,t,n)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mt(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(bt(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(gt(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(_t(e))return"Blackberry";if(Ot(e))return"Webos";if(vt(e))return"Safari";if((e.includes("chrome/")||yt(e))&&!e.includes("edge/"))return"Chrome";if(wt(e))return"Android";{const e=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,n=t.match(e);if(2===(null===n||void 0===n?void 0:n.length))return n[1]}return"Other"}function gt(t=Object(i["l"])()){return/firefox\//i.test(t)}function vt(t=Object(i["l"])()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function yt(t=Object(i["l"])()){return/crios\//i.test(t)}function bt(t=Object(i["l"])()){return/iemobile/i.test(t)}function wt(t=Object(i["l"])()){return/android/i.test(t)}function _t(t=Object(i["l"])()){return/blackberry/i.test(t)}function Ot(t=Object(i["l"])()){return/webos/i.test(t)}function It(t=Object(i["l"])()){return/iphone|ipad|ipod/i.test(t)}function St(t=Object(i["l"])()){return/(iPad|iPhone|iPod).*OS 7_\d/i.test(t)||/(iPad|iPhone|iPod).*OS 8_\d/i.test(t)}function kt(t=Object(i["l"])()){var e;return It(t)&&!!(null===(e=window.navigator)||void 0===e?void 0:e.standalone)}function Tt(){return Object(i["q"])()&&10===document.documentMode}function Et(t=Object(i["l"])()){return It(t)||wt(t)||Ot(t)||_t(t)||/windows phone/i.test(t)||bt(t)}function xt(){try{return!(!window||window===window.top)}catch(t){return!1}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ct(t,e=[]){let n;switch(t){case"Browser":n=mt(Object(i["l"])());break;case"Worker":n=`${mt(Object(i["l"])())}-${t}`;break;default:n=t}const s=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${r["SDK_VERSION"]}/${s}`}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class At{constructor(t,e){this.app=t,this.config=e,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Rt(this),this.idTokenSubscription=new Rt(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=p,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=t.name,this.clientVersion=e.sdkClientVersion}_initializeWithPersistence(t,e){return e&&(this._popupRedirectResolver=T(e)),this._initializationPromise=this.queue(async()=>{var n,i;if(!this._deleted&&(this.persistenceManager=await pt.create(this,t),!this._deleted)){if(null===(n=this._popupRedirectResolver)||void 0===n?void 0:n._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch(r){}await this.initializeCurrentUser(e),this.lastNotifiedUid=(null===(i=this.currentUser)||void 0===i?void 0:i.uid)||null,this._deleted||(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const t=await this.assertedPersistence.getCurrentUser();return this.currentUser||t?this.currentUser&&t&&this.currentUser.uid===t.uid?(this._currentUser._assign(t),void await this.currentUser.getIdToken()):void await this._updateCurrentUser(t):void 0}async initializeCurrentUser(t){var e;let n=await this.assertedPersistence.getCurrentUser();if(t&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const i=null===(e=this.redirectUser)||void 0===e?void 0:e._redirectEventId,r=null===n||void 0===n?void 0:n._redirectEventId,s=await this.tryRedirectSignIn(t);i&&i!==r||!(null===s||void 0===s?void 0:s.user)||(n=s.user)}return n?n._redirectEventId?(O(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===n._redirectEventId?this.directlySetCurrentUser(n):this.reloadAndSetCurrentUserOrClear(n)):this.reloadAndSetCurrentUserOrClear(n):this.directlySetCurrentUser(null)}async tryRedirectSignIn(t){let e=null;try{e=await this._popupRedirectResolver._completeRedirectFn(this,t,!0)}catch(n){await this._setRedirectUser(null)}return e}async reloadAndSetCurrentUserOrClear(t){try{await it(t)}catch(e){if("auth/network-request-failed"!==e.code)return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(t)}useDeviceLanguage(){this.languageCode=R()}async _delete(){this._deleted=!0}async updateCurrentUser(t){const e=t?Object(i["k"])(t):null;return e&&O(e.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(e&&e._clone(this))}async _updateCurrentUser(t){if(!this._deleted)return t&&O(this.tenantId===t.tenantId,this,"tenant-id-mismatch"),this.queue(async()=>{await this.directlySetCurrentUser(t),this.notifyAuthListeners()})}async signOut(){return(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null)}setPersistence(t){return this.queue(async()=>{await this.assertedPersistence.setPersistence(T(t))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(t){this._errorFactory=new i["b"]("auth","Firebase",t())}onAuthStateChanged(t,e,n){return this.registerStateListener(this.authStateSubscription,t,e,n)}onIdTokenChanged(t,e,n){return this.registerStateListener(this.idTokenSubscription,t,e,n)}toJSON(){var t;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:null===(t=this._currentUser)||void 0===t?void 0:t.toJSON()}}async _setRedirectUser(t,e){const n=await this.getOrInitRedirectPersistenceManager(e);return null===t?n.removeCurrentUser():n.setCurrentUser(t)}async getOrInitRedirectPersistenceManager(t){if(!this.redirectPersistenceManager){const e=t&&T(t)||this._popupRedirectResolver;O(e,this,"argument-error"),this.redirectPersistenceManager=await pt.create(this,[T(e._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(t){var e,n;return this._isInitialized&&await this.queue(async()=>{}),(null===(e=this._currentUser)||void 0===e?void 0:e._redirectEventId)===t?this._currentUser:(null===(n=this.redirectUser)||void 0===n?void 0:n._redirectEventId)===t?this.redirectUser:null}async _persistUserIfCurrent(t){if(t===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(t))}_notifyListenersIfCurrent(t){t===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t,e;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const n=null!==(e=null===(t=this.currentUser)||void 0===t?void 0:t.uid)&&void 0!==e?e:null;this.lastNotifiedUid!==n&&(this.lastNotifiedUid=n,this.authStateSubscription.next(this.currentUser))}registerStateListener(t,e,n,i){if(this._deleted)return()=>{};const r="function"===typeof e?e:e.next.bind(e),s=this._isInitialized?Promise.resolve():this._initializationPromise;return O(s,this,"internal-error"),s.then(()=>r(this.currentUser)),"function"===typeof e?t.addObserver(e,n,i):t.addObserver(e)}async directlySetCurrentUser(t){this.currentUser&&this.currentUser!==t&&(this._currentUser._stopProactiveRefresh(),t&&this.isProactiveRefreshEnabled&&t._startProactiveRefresh()),this.currentUser=t,t?await this.assertedPersistence.setCurrentUser(t):await this.assertedPersistence.removeCurrentUser()}queue(t){return this.operations=this.operations.then(t,t),this.operations}get assertedPersistence(){return O(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(t){t&&!this.frameworks.includes(t)&&(this.frameworks.push(t),this.frameworks.sort(),this.clientVersion=Ct(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){const t={["X-Client-Version"]:this.clientVersion};return this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId),t}}function jt(t){return Object(i["k"])(t)}class Rt{constructor(t){this.auth=t,this.observer=null,this.addObserver=Object(i["g"])(t=>this.observer=t)}get next(){return O(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}function Lt(t,e,n){const i=jt(t);O(i._canInitEmulator,i,"emulator-config-failed"),O(/^https?:\/\//.test(e),i,"invalid-emulator-scheme");const r=!!(null===n||void 0===n?void 0:n.disableWarnings),s=Nt(e),{host:o,port:a}=Dt(e),c=null===a?"":":"+a;i.config.emulator={url:`${s}//${o}${c}/`},i.settings.appVerificationDisabledForTesting=!0,i.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:r})}),r||Mt()}function Nt(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function Dt(t){const e=Nt(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const i=n[2].split("@").pop()||"",r=/^(\[[^\]]+\])(:|$)/.exec(i);if(r){const t=r[1];return{host:t,port:Pt(i.substr(t.length+1))}}{const[t,e]=i.split(":");return{host:t,port:Pt(e)}}}function Pt(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function Mt(){function t(){const t=document.createElement("p"),e=t.style;t.innerText="Running in emulator mode. Do not use with production credentials.",e.position="fixed",e.width="100%",e.backgroundColor="#ffffff",e.border=".1em solid #000000",e.color="#b50000",e.bottom="0px",e.left="0px",e.margin="0px",e.zIndex="10000",e.textAlign="center",t.classList.add("firebase-emulator-warning"),document.body.appendChild(t)}"undefined"!==typeof console&&"function"===typeof console.info&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),"undefined"!==typeof window&&"undefined"!==typeof document&&("loading"===document.readyState?window.addEventListener("DOMContentLoaded",t):t())}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $t{constructor(t,e){this.providerId=t,this.signInMethod=e}toJSON(){return I("not implemented")}_getIdTokenResponse(t){return I("not implemented")}_linkToIdToken(t,e){return I("not implemented")}_getReauthenticationResolver(t){return I("not implemented")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ft(t,e){return F(t,"POST","/v1/accounts:resetPassword",$(t,e))}async function Bt(t,e){return F(t,"POST","/v1/accounts:update",e)}async function Vt(t,e){return F(t,"POST","/v1/accounts:update",$(t,e))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ut(t,e){return V(t,"POST","/v1/accounts:signInWithPassword",$(t,e))}async function qt(t,e){return F(t,"POST","/v1/accounts:sendOobCode",$(t,e))}async function zt(t,e){return qt(t,e)}async function Ht(t,e){return qt(t,e)}async function Wt(t,e){return qt(t,e)}async function Gt(t,e){return qt(t,e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Kt(t,e){return V(t,"POST","/v1/accounts:signInWithEmailLink",$(t,e))}async function Yt(t,e){return V(t,"POST","/v1/accounts:signInWithEmailLink",$(t,e))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xt extends $t{constructor(t,e,n,i=null){super("password",n),this._email=t,this._password=e,this._tenantId=i}static _fromEmailAndPassword(t,e){return new Xt(t,e,"password")}static _fromEmailAndCode(t,e,n=null){return new Xt(t,e,"emailLink",n)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(t){const e="string"===typeof t?JSON.parse(t):t;if((null===e||void 0===e?void 0:e.email)&&(null===e||void 0===e?void 0:e.password)){if("password"===e.signInMethod)return this._fromEmailAndPassword(e.email,e.password);if("emailLink"===e.signInMethod)return this._fromEmailAndCode(e.email,e.password,e.tenantId)}return null}async _getIdTokenResponse(t){switch(this.signInMethod){case"password":return Ut(t,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return Kt(t,{email:this._email,oobCode:this._password});default:v(t,"internal-error")}}async _linkToIdToken(t,e){switch(this.signInMethod){case"password":return Bt(t,{idToken:e,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return Yt(t,{idToken:e,email:this._email,oobCode:this._password});default:v(t,"internal-error")}}_getReauthenticationResolver(t){return this._getIdTokenResponse(t)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Qt(t,e){return V(t,"POST","/v1/accounts:signInWithIdp",$(t,e))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jt="http://localhost";class Zt extends $t{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(t){const e=new Zt(t.providerId,t.signInMethod);return t.idToken||t.accessToken?(t.idToken&&(e.idToken=t.idToken),t.accessToken&&(e.accessToken=t.accessToken),t.nonce&&!t.pendingToken&&(e.nonce=t.nonce),t.pendingToken&&(e.pendingToken=t.pendingToken)):t.oauthToken&&t.oauthTokenSecret?(e.accessToken=t.oauthToken,e.secret=t.oauthTokenSecret):v("argument-error"),e}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(t){const e="string"===typeof t?JSON.parse(t):t,{providerId:n,signInMethod:i}=e,r=s(e,["providerId","signInMethod"]);if(!n||!i)return null;const o=new Zt(n,i);return o.idToken=r.idToken||void 0,o.accessToken=r.accessToken||void 0,o.secret=r.secret,o.nonce=r.nonce,o.pendingToken=r.pendingToken||null,o}_getIdTokenResponse(t){const e=this.buildRequest();return Qt(t,e)}_linkToIdToken(t,e){const n=this.buildRequest();return n.idToken=e,Qt(t,n)}_getReauthenticationResolver(t){const e=this.buildRequest();return e.autoCreate=!1,Qt(t,e)}buildRequest(){const t={requestUri:Jt,returnSecureToken:!0};if(this.pendingToken)t.pendingToken=this.pendingToken;else{const e={};this.idToken&&(e["id_token"]=this.idToken),this.accessToken&&(e["access_token"]=this.accessToken),this.secret&&(e["oauth_token_secret"]=this.secret),e["providerId"]=this.providerId,this.nonce&&!this.pendingToken&&(e["nonce"]=this.nonce),t.postBody=Object(i["x"])(e)}return t}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function te(t,e){return F(t,"POST","/v1/accounts:sendVerificationCode",$(t,e))}async function ee(t,e){return V(t,"POST","/v1/accounts:signInWithPhoneNumber",$(t,e))}async function ne(t,e){const n=await V(t,"POST","/v1/accounts:signInWithPhoneNumber",$(t,e));if(n.temporaryProof)throw z(t,"account-exists-with-different-credential",n);return n}const ie={["USER_NOT_FOUND"]:"user-not-found"};async function re(t,e){const n=Object.assign(Object.assign({},e),{operation:"REAUTH"});return V(t,"POST","/v1/accounts:signInWithPhoneNumber",$(t,n),ie)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class se extends $t{constructor(t){super("phone","phone"),this.params=t}static _fromVerification(t,e){return new se({verificationId:t,verificationCode:e})}static _fromTokenResponse(t,e){return new se({phoneNumber:t,temporaryProof:e})}_getIdTokenResponse(t){return ee(t,this._makeVerificationRequest())}_linkToIdToken(t,e){return ne(t,Object.assign({idToken:e},this._makeVerificationRequest()))}_getReauthenticationResolver(t){return re(t,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:t,phoneNumber:e,verificationId:n,verificationCode:i}=this.params;return t&&e?{temporaryProof:t,phoneNumber:e}:{sessionInfo:n,code:i}}toJSON(){const t={providerId:this.providerId};return this.params.phoneNumber&&(t.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(t.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(t.verificationCode=this.params.verificationCode),this.params.verificationId&&(t.verificationId=this.params.verificationId),t}static fromJSON(t){"string"===typeof t&&(t=JSON.parse(t));const{verificationId:e,verificationCode:n,phoneNumber:i,temporaryProof:r}=t;return n||e||i||r?new se({verificationId:e,verificationCode:n,phoneNumber:i,temporaryProof:r}):null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oe(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function ae(t){const e=Object(i["y"])(Object(i["j"])(t))["link"],n=e?Object(i["y"])(Object(i["j"])(e))["deep_link_id"]:null,r=Object(i["y"])(Object(i["j"])(t))["deep_link_id"],s=r?Object(i["y"])(Object(i["j"])(r))["link"]:null;return s||r||n||e||t}class ce{constructor(t){var e,n,r,s,o,a;const c=Object(i["y"])(Object(i["j"])(t)),u=null!==(e=c["apiKey"])&&void 0!==e?e:null,l=null!==(n=c["oobCode"])&&void 0!==n?n:null,h=oe(null!==(r=c["mode"])&&void 0!==r?r:null);O(u&&l&&h,"argument-error"),this.apiKey=u,this.operation=h,this.code=l,this.continueUrl=null!==(s=c["continueUrl"])&&void 0!==s?s:null,this.languageCode=null!==(o=c["languageCode"])&&void 0!==o?o:null,this.tenantId=null!==(a=c["tenantId"])&&void 0!==a?a:null}static parseLink(t){const e=ae(t);try{return new ce(e)}catch(n){return null}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ue{constructor(){this.providerId=ue.PROVIDER_ID}static credential(t,e){return Xt._fromEmailAndPassword(t,e)}static credentialWithLink(t,e){const n=ce.parseLink(e);return O(n,"argument-error"),Xt._fromEmailAndCode(t,n.code,n.tenantId)}}ue.PROVIDER_ID="password",ue.EMAIL_PASSWORD_SIGN_IN_METHOD="password",ue.EMAIL_LINK_SIGN_IN_METHOD="emailLink";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class le{constructor(t){this.providerId=t,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(t){this.defaultLanguageCode=t}setCustomParameters(t){return this.customParameters=t,this}getCustomParameters(){return this.customParameters}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class he extends le{constructor(){super(...arguments),this.scopes=[]}addScope(t){return this.scopes.includes(t)||this.scopes.push(t),this}getScopes(){return[...this.scopes]}}class de extends he{static credentialFromJSON(t){const e="string"===typeof t?JSON.parse(t):t;return O("providerId"in e&&"signInMethod"in e,"argument-error"),Zt._fromParams(e)}credential(t){return this._credential(Object.assign(Object.assign({},t),{nonce:t.rawNonce}))}_credential(t){return O(t.idToken||t.accessToken,"argument-error"),Zt._fromParams(Object.assign(Object.assign({},t),{providerId:this.providerId,signInMethod:this.providerId}))}static credentialFromResult(t){return de.oauthCredentialFromTaggedObject(t)}static credentialFromError(t){return de.oauthCredentialFromTaggedObject(t.customData||{})}static oauthCredentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthIdToken:e,oauthAccessToken:n,oauthTokenSecret:i,pendingToken:r,nonce:s,providerId:o}=t;if(!n&&!i&&!e&&!r)return null;if(!o)return null;try{return new de(o)._credential({idToken:e,accessToken:n,nonce:s,pendingToken:r})}catch(a){return null}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fe extends he{constructor(){super("facebook.com")}static credential(t){return Zt._fromParams({providerId:fe.PROVIDER_ID,signInMethod:fe.FACEBOOK_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return fe.credentialFromTaggedObject(t)}static credentialFromError(t){return fe.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t))return null;if(!t.oauthAccessToken)return null;try{return fe.credential(t.oauthAccessToken)}catch(e){return null}}}fe.FACEBOOK_SIGN_IN_METHOD="facebook.com",fe.PROVIDER_ID="facebook.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class pe extends he{constructor(){super("google.com"),this.addScope("profile")}static credential(t,e){return Zt._fromParams({providerId:pe.PROVIDER_ID,signInMethod:pe.GOOGLE_SIGN_IN_METHOD,idToken:t,accessToken:e})}static credentialFromResult(t){return pe.credentialFromTaggedObject(t)}static credentialFromError(t){return pe.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthIdToken:e,oauthAccessToken:n}=t;if(!e&&!n)return null;try{return pe.credential(e,n)}catch(i){return null}}}pe.GOOGLE_SIGN_IN_METHOD="google.com",pe.PROVIDER_ID="google.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class me extends he{constructor(){super("github.com")}static credential(t){return Zt._fromParams({providerId:me.PROVIDER_ID,signInMethod:me.GITHUB_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return me.credentialFromTaggedObject(t)}static credentialFromError(t){return me.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t))return null;if(!t.oauthAccessToken)return null;try{return me.credential(t.oauthAccessToken)}catch(e){return null}}}me.GITHUB_SIGN_IN_METHOD="github.com",me.PROVIDER_ID="github.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const ge="http://localhost";class ve extends $t{constructor(t,e){super(t,t),this.pendingToken=e}_getIdTokenResponse(t){const e=this.buildRequest();return Qt(t,e)}_linkToIdToken(t,e){const n=this.buildRequest();return n.idToken=e,Qt(t,n)}_getReauthenticationResolver(t){const e=this.buildRequest();return e.autoCreate=!1,Qt(t,e)}toJSON(){return{signInMethod:this.signInMethod,providerId:this.providerId,pendingToken:this.pendingToken}}static fromJSON(t){const e="string"===typeof t?JSON.parse(t):t,{providerId:n,signInMethod:i,pendingToken:r}=e;return n&&i&&r&&n===i?new ve(n,r):null}static _create(t,e){return new ve(t,e)}buildRequest(){return{requestUri:ge,returnSecureToken:!0,pendingToken:this.pendingToken}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ye="saml.";class be extends le{constructor(t){O(t.startsWith(ye),"argument-error"),super(t)}static credentialFromResult(t){return be.samlCredentialFromTaggedObject(t)}static credentialFromError(t){return be.samlCredentialFromTaggedObject(t.customData||{})}static credentialFromJSON(t){const e=ve.fromJSON(t);return O(e,"argument-error"),e}static samlCredentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{pendingToken:e,providerId:n}=t;if(!e||!n)return null;try{return ve._create(n,e)}catch(i){return null}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class we extends he{constructor(){super("twitter.com")}static credential(t,e){return Zt._fromParams({providerId:we.PROVIDER_ID,signInMethod:we.TWITTER_SIGN_IN_METHOD,oauthToken:t,oauthTokenSecret:e})}static credentialFromResult(t){return we.credentialFromTaggedObject(t)}static credentialFromError(t){return we.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthAccessToken:e,oauthTokenSecret:n}=t;if(!e||!n)return null;try{return we.credential(e,n)}catch(i){return null}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function _e(t,e){return V(t,"POST","/v1/accounts:signUp",$(t,e))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */we.TWITTER_SIGN_IN_METHOD="twitter.com",we.PROVIDER_ID="twitter.com";class Oe{constructor(t){this.user=t.user,this.providerId=t.providerId,this._tokenResponse=t._tokenResponse,this.operationType=t.operationType}static async _fromIdTokenResponse(t,e,n,i=!1){const r=await lt._fromIdTokenResponse(t,n,i),s=Ie(n),o=new Oe({user:r,providerId:s,_tokenResponse:n,operationType:e});return o}static async _forOperation(t,e,n){await t._updateTokensIfNecessary(n,!0);const i=Ie(n);return new Oe({user:t,providerId:i,_tokenResponse:n,operationType:e})}}function Ie(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Se(t){var e;const n=jt(t);if(await n._initializationPromise,null===(e=n.currentUser)||void 0===e?void 0:e.isAnonymous)return new Oe({user:n.currentUser,providerId:null,operationType:"signIn"});const i=await _e(n,{returnSecureToken:!0}),r=await Oe._fromIdTokenResponse(n,"signIn",i,!0);return await n._updateCurrentUser(r.user),r}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ke extends i["c"]{constructor(t,e,n,i){var r;super(e.code,e.message),this.operationType=n,this.user=i,Object.setPrototypeOf(this,ke.prototype),this.customData={appName:t.name,tenantId:null!==(r=t.tenantId)&&void 0!==r?r:void 0,_serverResponse:e.customData._serverResponse,operationType:n}}static _fromErrorAndOperation(t,e,n,i){return new ke(t,e,n,i)}}function Te(t,e,n,i){const r="reauthenticate"===e?n._getReauthenticationResolver(t):n._getIdTokenResponse(t);return r.catch(n=>{if("auth/multi-factor-auth-required"===n.code)throw ke._fromErrorAndOperation(t,n,e,i);throw n})}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ee(t){return new Set(t.map(({providerId:t})=>t).filter(t=>!!t))}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xe(t,e){const n=Object(i["k"])(t);await Ae(!0,n,e);const{providerUserInfo:r}=await W(n.auth,{idToken:await n.getIdToken(),deleteProvider:[e]}),s=Ee(r||[]);return n.providerData=n.providerData.filter(t=>s.has(t.providerId)),s.has("phone")||(n.phoneNumber=null),await n.auth._persistUserIfCurrent(n),n}async function Ce(t,e,n=!1){const i=await Z(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Oe._forOperation(t,"link",i)}async function Ae(t,e,n){await it(e);const i=Ee(e.providerData),r=!1===t?"provider-already-linked":"no-such-provider";O(i.has(n)===t,e.auth,r)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function je(t,e,n=!1){const{auth:i}=t,r="reauthenticate";try{const s=await Z(t,Te(i,r,e,t),n);O(s.idToken,i,"internal-error");const o=Q(s.idToken);O(o,i,"internal-error");const{sub:a}=o;return O(t.uid===a,i,"user-mismatch"),Oe._forOperation(t,r,s)}catch(s){throw"auth/user-not-found"===(null===s||void 0===s?void 0:s.code)&&v(i,"user-mismatch"),s}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Re(t,e,n=!1){const i="signIn",r=await Te(t,i,e),s=await Oe._fromIdTokenResponse(t,i,r);return n||await t._updateCurrentUser(s.user),s}async function Le(t,e){return Re(jt(t),e)}async function Ne(t,e){const n=Object(i["k"])(t);return await Ae(!1,n,e.providerId),Ce(n,e)}async function De(t,e){return je(Object(i["k"])(t),e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Pe(t,e){return V(t,"POST","/v1/accounts:signInWithCustomToken",$(t,e))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Me(t,e){const n=jt(t),i=await Pe(n,{token:e,returnSecureToken:!0}),r=await Oe._fromIdTokenResponse(n,"signIn",i);return await n._updateCurrentUser(r.user),r}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $e{constructor(t,e){this.factorId=t,this.uid=e.mfaEnrollmentId,this.enrollmentTime=new Date(e.enrolledAt).toUTCString(),this.displayName=e.displayName}static _fromServerResponse(t,e){return"phoneInfo"in e?Fe._fromServerResponse(t,e):v(t,"internal-error")}}class Fe extends $e{constructor(t){super("phone",t),this.phoneNumber=t.phoneInfo}static _fromServerResponse(t,e){return new Fe(e)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Be(t,e,n){var i;O((null===(i=n.url)||void 0===i?void 0:i.length)>0,t,"invalid-continue-uri"),O("undefined"===typeof n.dynamicLinkDomain||n.dynamicLinkDomain.length>0,t,"invalid-dynamic-link-domain"),e.continueUrl=n.url,e.dynamicLinkDomain=n.dynamicLinkDomain,e.canHandleCodeInApp=n.handleCodeInApp,n.iOS&&(O(n.iOS.bundleId.length>0,t,"missing-ios-bundle-id"),e.iOSBundleId=n.iOS.bundleId),n.android&&(O(n.android.packageName.length>0,t,"missing-android-pkg-name"),e.androidInstallApp=n.android.installApp,e.androidMinimumVersionCode=n.android.minimumVersion,e.androidPackageName=n.android.packageName)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ve(t,e,n){const r=Object(i["k"])(t),s={requestType:"PASSWORD_RESET",email:e};n&&Be(r,s,n),await Ht(r,s)}async function Ue(t,e,n){await Ft(Object(i["k"])(t),{oobCode:e,newPassword:n})}async function qe(t,e){await Vt(Object(i["k"])(t),{oobCode:e})}async function ze(t,e){const n=Object(i["k"])(t),r=await Ft(n,{oobCode:e}),s=r.requestType;switch(O(s,n,"internal-error"),s){case"EMAIL_SIGNIN":break;case"VERIFY_AND_CHANGE_EMAIL":O(r.newEmail,n,"internal-error");break;case"REVERT_SECOND_FACTOR_ADDITION":O(r.mfaInfo,n,"internal-error");default:O(r.email,n,"internal-error")}let o=null;return r.mfaInfo&&(o=$e._fromServerResponse(jt(n),r.mfaInfo)),{data:{email:("VERIFY_AND_CHANGE_EMAIL"===r.requestType?r.newEmail:r.email)||null,previousEmail:("VERIFY_AND_CHANGE_EMAIL"===r.requestType?r.email:r.newEmail)||null,multiFactorInfo:o},operation:s}}async function He(t,e){const{data:n}=await ze(Object(i["k"])(t),e);return n.email}async function We(t,e,n){const i=jt(t),r=await _e(i,{returnSecureToken:!0,email:e,password:n}),s=await Oe._fromIdTokenResponse(i,"signIn",r);return await i._updateCurrentUser(s.user),s}function Ge(t,e,n){return Le(Object(i["k"])(t),ue.credential(e,n))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ke(t,e,n){const r=Object(i["k"])(t),s={requestType:"EMAIL_SIGNIN",email:e};O(n.handleCodeInApp,r,"argument-error"),n&&Be(r,s,n),await Wt(r,s)}function Ye(t,e){const n=ce.parseLink(e);return"EMAIL_SIGNIN"===(null===n||void 0===n?void 0:n.operation)}async function Xe(t,e,n){const r=Object(i["k"])(t),s=ue.credentialWithLink(e,n||x());return O(s._tenantId===(r.tenantId||null),r,"tenant-id-mismatch"),Le(r,s)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Qe(t,e){return F(t,"POST","/v1/accounts:createAuthUri",$(t,e))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Je(t,e){const n=C()?x():"http://localhost",r={identifier:e,continueUri:n},{signinMethods:s}=await Qe(Object(i["k"])(t),r);return s||[]}async function Ze(t,e){const n=Object(i["k"])(t),r=await t.getIdToken(),s={requestType:"VERIFY_EMAIL",idToken:r};e&&Be(n.auth,s,e);const{email:o}=await zt(n.auth,s);o!==t.email&&await t.reload()}async function tn(t,e,n){const r=Object(i["k"])(t),s=await t.getIdToken(),o={requestType:"VERIFY_AND_CHANGE_EMAIL",idToken:s,newEmail:e};n&&Be(r.auth,o,n);const{email:a}=await Gt(r.auth,o);a!==t.email&&await t.reload()}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function en(t,e){return F(t,"POST","/v1/accounts:update",e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function nn(t,{displayName:e,photoURL:n}){if(void 0===e&&void 0===n)return;const r=Object(i["k"])(t),s=await r.getIdToken(),o={idToken:s,displayName:e,photoUrl:n,returnSecureToken:!0},a=await Z(r,en(r.auth,o));r.displayName=a.displayName||null,r.photoURL=a.photoUrl||null;const c=r.providerData.find(({providerId:t})=>"password"===t);c&&(c.displayName=r.displayName,c.photoURL=r.photoURL),await r._updateTokensIfNecessary(a)}function rn(t,e){return on(Object(i["k"])(t),e,null)}function sn(t,e){return on(Object(i["k"])(t),null,e)}async function on(t,e,n){const{auth:i}=t,r=await t.getIdToken(),s={idToken:r,returnSecureToken:!0};e&&(s.email=e),n&&(s.password=n);const o=await Z(t,Bt(i,s));await t._updateTokensIfNecessary(o,!0)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function an(t){var e,n;if(!t)return null;const{providerId:i}=t,r=t.rawUserInfo?JSON.parse(t.rawUserInfo):{},s=t.isNewUser||"identitytoolkit#SignupNewUserResponse"===t.kind;if(!i&&(null===t||void 0===t?void 0:t.idToken)){const i=null===(n=null===(e=Q(t.idToken))||void 0===e?void 0:e.firebase)||void 0===n?void 0:n["sign_in_provider"];if(i){const t="anonymous"!==i&&"custom"!==i?i:null;return new cn(s,t)}}if(!i)return null;switch(i){case"facebook.com":return new ln(s,r);case"github.com":return new hn(s,r);case"google.com":return new dn(s,r);case"twitter.com":return new fn(s,r,t.screenName||null);case"custom":case"anonymous":return new cn(s,null);default:return new cn(s,i,r)}}class cn{constructor(t,e,n={}){this.isNewUser=t,this.providerId=e,this.profile=n}}class un extends cn{constructor(t,e,n,i){super(t,e,n),this.username=i}}class ln extends cn{constructor(t,e){super(t,"facebook.com",e)}}class hn extends un{constructor(t,e){super(t,"github.com",e,"string"===typeof(null===e||void 0===e?void 0:e.login)?null===e||void 0===e?void 0:e.login:null)}}class dn extends cn{constructor(t,e){super(t,"google.com",e)}}class fn extends un{constructor(t,e,n){super(t,"twitter.com",e,n)}}function pn(t){const{user:e,_tokenResponse:n}=t;return e.isAnonymous&&!n?{providerId:null,isNewUser:!1,profile:null}:an(n)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mn{constructor(t,e){this.type=t,this.credential=e}static _fromIdtoken(t){return new mn("enroll",t)}static _fromMfaPendingCredential(t){return new mn("signin",t)}toJSON(){const t="enroll"===this.type?"idToken":"pendingCredential";return{multiFactorSession:{[t]:this.credential}}}static fromJSON(t){var e,n;if(null===t||void 0===t?void 0:t.multiFactorSession){if(null===(e=t.multiFactorSession)||void 0===e?void 0:e.pendingCredential)return mn._fromMfaPendingCredential(t.multiFactorSession.pendingCredential);if(null===(n=t.multiFactorSession)||void 0===n?void 0:n.idToken)return mn._fromIdtoken(t.multiFactorSession.idToken)}return null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gn{constructor(t,e,n){this.session=t,this.hints=e,this.signInResolver=n}static _fromError(t,e){const n=jt(t),i=e.customData._serverResponse,r=(i.mfaInfo||[]).map(t=>$e._fromServerResponse(n,t));O(i.mfaPendingCredential,n,"internal-error");const s=mn._fromMfaPendingCredential(i.mfaPendingCredential);return new gn(s,r,async t=>{const r=await t._process(n,s);delete i.mfaInfo,delete i.mfaPendingCredential;const o=Object.assign(Object.assign({},i),{idToken:r.idToken,refreshToken:r.refreshToken});switch(e.operationType){case"signIn":const t=await Oe._fromIdTokenResponse(n,e.operationType,o);return await n._updateCurrentUser(t.user),t;case"reauthenticate":return O(e.user,n,"internal-error"),Oe._forOperation(e.user,e.operationType,o);default:v(n,"internal-error")}})}async resolveSignIn(t){const e=t;return this.signInResolver(e)}}function vn(t,e){var n;const r=Object(i["k"])(t),s=e;return O(e.customData.operationType,r,"argument-error"),O(null===(n=s.customData._serverResponse)||void 0===n?void 0:n.mfaPendingCredential,r,"argument-error"),gn._fromError(r,s)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yn(t,e){return F(t,"POST","/v2/accounts/mfaEnrollment:start",$(t,e))}function bn(t,e){return F(t,"POST","/v2/accounts/mfaEnrollment:finalize",$(t,e))}function wn(t,e){return F(t,"POST","/v2/accounts/mfaEnrollment:withdraw",$(t,e))}class _n{constructor(t){this.user=t,this.enrolledFactors=[],t._onReload(e=>{e.mfaInfo&&(this.enrolledFactors=e.mfaInfo.map(e=>$e._fromServerResponse(t.auth,e)))})}static _fromUser(t){return new _n(t)}async getSession(){return mn._fromIdtoken(await this.user.getIdToken())}async enroll(t,e){const n=t,i=await this.getSession(),r=await Z(this.user,n._process(this.user.auth,i,e));return await this.user._updateTokensIfNecessary(r),this.user.reload()}async unenroll(t){const e="string"===typeof t?t:t.uid,n=await this.user.getIdToken(),i=await Z(this.user,wn(this.user.auth,{idToken:n,mfaEnrollmentId:e}));this.enrolledFactors=this.enrolledFactors.filter(({uid:t})=>t!==e),await this.user._updateTokensIfNecessary(i);try{await this.user.reload()}catch(r){if("auth/user-token-expired"!==r.code)throw r}}}const On=new WeakMap;function In(t){const e=Object(i["k"])(t);return On.has(e)||On.set(e,_n._fromUser(e)),On.get(e)}const Sn="__sak";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kn{constructor(t,e){this.storageRetriever=t,this.type=e}_isAvailable(){try{return this.storage?(this.storage.setItem(Sn,"1"),this.storage.removeItem(Sn),Promise.resolve(!0)):Promise.resolve(!1)}catch(t){return Promise.resolve(!1)}}_set(t,e){return this.storage.setItem(t,JSON.stringify(e)),Promise.resolve()}_get(t){const e=this.storage.getItem(t);return Promise.resolve(e?JSON.parse(e):null)}_remove(t){return this.storage.removeItem(t),Promise.resolve()}get storage(){return this.storageRetriever()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tn(){const t=Object(i["l"])();return vt(t)||It(t)}const En=1e3,xn=10;class Cn extends kn{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(t,e)=>this.onStorageEvent(t,e),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=Tn()&&xt(),this.fallbackToPolling=Et(),this._shouldAllowMigration=!0}forAllChangedKeys(t){for(const e of Object.keys(this.listeners)){const n=this.storage.getItem(e),i=this.localCache[e];n!==i&&t(e,i,n)}}onStorageEvent(t,e=!1){if(!t.key)return void this.forAllChangedKeys((t,e,n)=>{this.notifyListeners(t,n)});const n=t.key;if(e?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const i=this.storage.getItem(n);if(t.newValue!==i)null!==t.newValue?this.storage.setItem(n,t.newValue):this.storage.removeItem(n);else if(this.localCache[n]===t.newValue&&!e)return}const i=()=>{const t=this.storage.getItem(n);(e||this.localCache[n]!==t)&&this.notifyListeners(n,t)},r=this.storage.getItem(n);Tt()&&r!==t.newValue&&t.newValue!==t.oldValue?setTimeout(i,xn):i()}notifyListeners(t,e){this.localCache[t]=e;const n=this.listeners[t];if(n)for(const i of Array.from(n))i(e?JSON.parse(e):e)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((t,e,n)=>{this.onStorageEvent(new StorageEvent("storage",{key:t,oldValue:e,newValue:n}),!0)})},En)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(t,e){0===Object.keys(this.listeners).length&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[t]||(this.listeners[t]=new Set,this.localCache[t]=this.storage.getItem(t)),this.listeners[t].add(e)}_removeListener(t,e){this.listeners[t]&&(this.listeners[t].delete(e),0===this.listeners[t].size&&delete this.listeners[t]),0===Object.keys(this.listeners).length&&(this.detachListener(),this.stopPolling())}async _set(t,e){await super._set(t,e),this.localCache[t]=JSON.stringify(e)}async _get(t){const e=await super._get(t);return this.localCache[t]=JSON.stringify(e),e}async _remove(t){await super._remove(t),delete this.localCache[t]}}Cn.type="LOCAL";const An=Cn;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jn extends kn{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(t,e){}_removeListener(t,e){}}jn.type="SESSION";const Rn=jn;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ln(t){return Promise.all(t.map(async t=>{try{const e=await t;return{fulfilled:!0,value:e}}catch(e){return{fulfilled:!1,reason:e}}}))}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nn{constructor(t){this.eventTarget=t,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(t){const e=this.receivers.find(e=>e.isListeningto(t));if(e)return e;const n=new Nn(t);return this.receivers.push(n),n}isListeningto(t){return this.eventTarget===t}async handleEvent(t){const e=t,{eventId:n,eventType:i,data:r}=e.data,s=this.handlersMap[i];if(!(null===s||void 0===s?void 0:s.size))return;e.ports[0].postMessage({status:"ack",eventId:n,eventType:i});const o=Array.from(s).map(async t=>t(e.origin,r)),a=await Ln(o);e.ports[0].postMessage({status:"done",eventId:n,eventType:i,response:a})}_subscribe(t,e){0===Object.keys(this.handlersMap).length&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[t]||(this.handlersMap[t]=new Set),this.handlersMap[t].add(e)}_unsubscribe(t,e){this.handlersMap[t]&&e&&this.handlersMap[t].delete(e),e&&0!==this.handlersMap[t].size||delete this.handlersMap[t],0===Object.keys(this.handlersMap).length&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Dn(t="",e=10){let n="";for(let i=0;i<e;i++)n+=Math.floor(10*Math.random());return t+n}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Nn.receivers=[];class Pn{constructor(t){this.target=t,this.handlers=new Set}removeMessageHandler(t){t.messageChannel&&(t.messageChannel.port1.removeEventListener("message",t.onMessage),t.messageChannel.port1.close()),this.handlers.delete(t)}async _send(t,e,n=50){const i="undefined"!==typeof MessageChannel?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let r,s;return new Promise((o,a)=>{const c=Dn("",20);i.port1.start();const u=setTimeout(()=>{a(new Error("unsupported_event"))},n);s={messageChannel:i,onMessage(t){const e=t;if(e.data.eventId===c)switch(e.data.status){case"ack":clearTimeout(u),r=setTimeout(()=>{a(new Error("timeout"))},3e3);break;case"done":clearTimeout(r),o(e.data.response);break;default:clearTimeout(u),clearTimeout(r),a(new Error("invalid_response"));break}}},this.handlers.add(s),i.port1.addEventListener("message",s.onMessage),this.target.postMessage({eventType:t,eventId:c,data:e},[i.port2])}).finally(()=>{s&&this.removeMessageHandler(s)})}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mn(){return window}function $n(t){Mn().location.href=t}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fn(){return"undefined"!==typeof Mn()["WorkerGlobalScope"]&&"function"===typeof Mn()["importScripts"]}async function Bn(){if(!(null===navigator||void 0===navigator?void 0:navigator.serviceWorker))return null;try{const t=await navigator.serviceWorker.ready;return t.active}catch(t){return null}}function Vn(){var t;return(null===(t=null===navigator||void 0===navigator?void 0:navigator.serviceWorker)||void 0===t?void 0:t.controller)||null}function Un(){return Fn()?self:null}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qn="firebaseLocalStorageDb",zn=1,Hn="firebaseLocalStorage",Wn="fbase_key";class Gn{constructor(t){this.request=t}toPromise(){return new Promise((t,e)=>{this.request.addEventListener("success",()=>{t(this.request.result)}),this.request.addEventListener("error",()=>{e(this.request.error)})})}}function Kn(t,e){return t.transaction([Hn],e?"readwrite":"readonly").objectStore(Hn)}function Yn(){const t=indexedDB.deleteDatabase(qn);return new Gn(t).toPromise()}function Xn(){const t=indexedDB.open(qn,zn);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const e=t.result;try{e.createObjectStore(Hn,{keyPath:Wn})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const n=t.result;n.objectStoreNames.contains(Hn)?e(n):(n.close(),await Yn(),e(await Xn()))})})}async function Qn(t,e,n){const i=Kn(t,!0).put({[Wn]:e,value:n});return new Gn(i).toPromise()}async function Jn(t,e){const n=Kn(t,!1).get(e),i=await new Gn(n).toPromise();return void 0===i?null:i.value}function Zn(t,e){const n=Kn(t,!0).delete(e);return new Gn(n).toPromise()}const ti=800,ei=3;class ni{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db||(this.db=await Xn()),this.db}async _withRetries(t){let e=0;while(1)try{const e=await this._openDb();return await t(e)}catch(n){if(e++>ei)throw n;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Fn()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Nn._getInstance(Un()),this.receiver._subscribe("keyChanged",async(t,e)=>{const n=await this._poll();return{keyProcessed:n.includes(e.key)}}),this.receiver._subscribe("ping",async(t,e)=>["keyChanged"])}async initializeSender(){var t,e;if(this.activeServiceWorker=await Bn(),!this.activeServiceWorker)return;this.sender=new Pn(this.activeServiceWorker);const n=await this.sender._send("ping",{},800);n&&(null===(t=n[0])||void 0===t?void 0:t.fulfilled)&&(null===(e=n[0])||void 0===e?void 0:e.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(t){if(this.sender&&this.activeServiceWorker&&Vn()===this.activeServiceWorker)try{await this.sender._send("keyChanged",{key:t},this.serviceWorkerReceiverAvailable?800:50)}catch(e){}}async _isAvailable(){try{if(!indexedDB)return!1;const t=await Xn();return await Qn(t,Sn,"1"),await Zn(t,Sn),!0}catch(t){}return!1}async _withPendingWrite(t){this.pendingWrites++;try{await t()}finally{this.pendingWrites--}}async _set(t,e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Qn(n,t,e)),this.localCache[t]=e,this.notifyServiceWorker(t)))}async _get(t){const e=await this._withRetries(e=>Jn(e,t));return this.localCache[t]=e,e}async _remove(t){return this._withPendingWrite(async()=>(await this._withRetries(e=>Zn(e,t)),delete this.localCache[t],this.notifyServiceWorker(t)))}async _poll(){const t=await this._withRetries(t=>{const e=Kn(t,!1).getAll();return new Gn(e).toPromise()});if(!t)return[];if(0!==this.pendingWrites)return[];const e=[],n=new Set;for(const{fbase_key:i,value:r}of t)n.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(r)&&(this.notifyListeners(i,r),e.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!n.has(i)&&(this.notifyListeners(i,null),e.push(i));return e}notifyListeners(t,e){this.localCache[t]=e;const n=this.listeners[t];if(n)for(const i of Array.from(n))i(e)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),ti)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(t,e){0===Object.keys(this.listeners).length&&this.startPolling(),this.listeners[t]||(this.listeners[t]=new Set,this._get(t)),this.listeners[t].add(e)}_removeListener(t,e){this.listeners[t]&&(this.listeners[t].delete(e),0===this.listeners[t].size&&delete this.listeners[t]),0===Object.keys(this.listeners).length&&this.stopPolling()}}ni.type="LOCAL";const ii=ni;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ri(t,e){return F(t,"POST","/v2/accounts/mfaSignIn:start",$(t,e))}function si(t,e){return F(t,"POST","/v2/accounts/mfaSignIn:finalize",$(t,e))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function oi(t){return(await F(t,"GET","/v1/recaptchaParams")).recaptchaSiteKey||""}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ai(){var t,e;return null!==(e=null===(t=document.getElementsByTagName("head"))||void 0===t?void 0:t[0])&&void 0!==e?e:document}function ci(t){return new Promise((e,n)=>{const i=document.createElement("script");i.setAttribute("src",t),i.onload=e,i.onerror=t=>{const e=y("internal-error");e.customData=t,n(e)},i.type="text/javascript",i.charset="UTF-8",ai().appendChild(i)})}function ui(t){return`__${t}${Math.floor(1e6*Math.random())}`}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const li=500,hi=6e4,di=1e12;class fi{constructor(t){this.auth=t,this.counter=di,this._widgets=new Map}render(t,e){const n=this.counter;return this._widgets.set(n,new pi(t,this.auth.name,e||{})),this.counter++,n}reset(t){var e;const n=t||di;null===(e=this._widgets.get(n))||void 0===e||e.delete(),this._widgets.delete(n)}getResponse(t){var e;const n=t||di;return(null===(e=this._widgets.get(n))||void 0===e?void 0:e.getResponse())||""}async execute(t){var e;const n=t||di;return null===(e=this._widgets.get(n))||void 0===e||e.execute(),""}}class pi{constructor(t,e,n){this.params=n,this.timerId=null,this.deleted=!1,this.responseToken=null,this.clickHandler=()=>{this.execute()};const i="string"===typeof t?document.getElementById(t):t;O(i,"argument-error",{appName:e}),this.container=i,this.isVisible="invisible"!==this.params.size,this.isVisible?this.execute():this.container.addEventListener("click",this.clickHandler)}getResponse(){return this.checkIfDeleted(),this.responseToken}delete(){this.checkIfDeleted(),this.deleted=!0,this.timerId&&(clearTimeout(this.timerId),this.timerId=null),this.container.removeEventListener("click",this.clickHandler)}execute(){this.checkIfDeleted(),this.timerId||(this.timerId=window.setTimeout(()=>{this.responseToken=mi(50);const{callback:t,"expired-callback":e}=this.params;if(t)try{t(this.responseToken)}catch(n){}this.timerId=window.setTimeout(()=>{if(this.timerId=null,this.responseToken=null,e)try{e()}catch(n){}this.isVisible&&this.execute()},hi)},li))}checkIfDeleted(){if(this.deleted)throw new Error("reCAPTCHA mock was already deleted!")}}function mi(t){const e=[],n="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let i=0;i<t;i++)e.push(n.charAt(Math.floor(Math.random()*n.length)));return e.join("")}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gi=ui("rcb"),vi=new L(3e4,6e4),yi="https://www.google.com/recaptcha/api.js?";class bi{constructor(){this.hostLanguage="",this.counter=0,this.librarySeparatelyLoaded=!!Mn().grecaptcha}load(t,e=""){return O(wi(e),t,"argument-error"),this.shouldResolveImmediately(e)?Promise.resolve(Mn().grecaptcha):new Promise((n,r)=>{const s=Mn().setTimeout(()=>{r(y(t,"network-request-failed"))},vi.get());Mn()[gi]=()=>{Mn().clearTimeout(s),delete Mn()[gi];const i=Mn().grecaptcha;if(!i)return void r(y(t,"internal-error"));const o=i.render;i.render=(t,e)=>{const n=o(t,e);return this.counter++,n},this.hostLanguage=e,n(i)};const o=`${yi}?${Object(i["x"])({onload:gi,render:"explicit",hl:e})}`;ci(o).catch(()=>{clearTimeout(s),r(y(t,"internal-error"))})})}clearedOneInstance(){this.counter--}shouldResolveImmediately(t){return!!Mn().grecaptcha&&(t===this.hostLanguage||this.counter>0||this.librarySeparatelyLoaded)}}function wi(t){return t.length<=6&&/^\s*[a-zA-Z0-9\-]*\s*$/.test(t)}class _i{async load(t){return new fi(t)}clearedOneInstance(){}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Oi="recaptcha",Ii={theme:"light",type:"image"};class Si{constructor(t,e=Object.assign({},Ii),n){this.parameters=e,this.type=Oi,this.destroyed=!1,this.widgetId=null,this.tokenChangeListeners=new Set,this.renderPromise=null,this.recaptcha=null,this.auth=jt(n),this.isInvisible="invisible"===this.parameters.size,O("undefined"!==typeof document,this.auth,"operation-not-supported-in-this-environment");const i="string"===typeof t?document.getElementById(t):t;O(i,this.auth,"argument-error"),this.container=i,this.parameters.callback=this.makeTokenCallback(this.parameters.callback),this._recaptchaLoader=this.auth.settings.appVerificationDisabledForTesting?new _i:new bi,this.validateStartingState()}async verify(){this.assertNotDestroyed();const t=await this.render(),e=this.getAssertedRecaptcha(),n=e.getResponse(t);return n||new Promise(n=>{const i=t=>{t&&(this.tokenChangeListeners.delete(i),n(t))};this.tokenChangeListeners.add(i),this.isInvisible&&e.execute(t)})}render(){try{this.assertNotDestroyed()}catch(t){return Promise.reject(t)}return this.renderPromise||(this.renderPromise=this.makeRenderPromise().catch(t=>{throw this.renderPromise=null,t})),this.renderPromise}_reset(){this.assertNotDestroyed(),null!==this.widgetId&&this.getAssertedRecaptcha().reset(this.widgetId)}clear(){this.assertNotDestroyed(),this.destroyed=!0,this._recaptchaLoader.clearedOneInstance(),this.isInvisible||this.container.childNodes.forEach(t=>{this.container.removeChild(t)})}validateStartingState(){O(!this.parameters.sitekey,this.auth,"argument-error"),O(this.isInvisible||!this.container.hasChildNodes(),this.auth,"argument-error"),O("undefined"!==typeof document,this.auth,"operation-not-supported-in-this-environment")}makeTokenCallback(t){return e=>{if(this.tokenChangeListeners.forEach(t=>t(e)),"function"===typeof t)t(e);else if("string"===typeof t){const n=Mn()[t];"function"===typeof n&&n(e)}}}assertNotDestroyed(){O(!this.destroyed,this.auth,"internal-error")}async makeRenderPromise(){if(await this.init(),!this.widgetId){let t=this.container;if(!this.isInvisible){const e=document.createElement("div");t.appendChild(e),t=e}this.widgetId=this.getAssertedRecaptcha().render(t,this.parameters)}return this.widgetId}async init(){O(C()&&!Fn(),this.auth,"internal-error"),await ki(),this.recaptcha=await this._recaptchaLoader.load(this.auth,this.auth.languageCode||void 0);const t=await oi(this.auth);O(t,this.auth,"internal-error"),this.parameters.sitekey=t}getAssertedRecaptcha(){return O(this.recaptcha,this.auth,"internal-error"),this.recaptcha}}function ki(){let t=null;return new Promise(e=>{"complete"!==document.readyState?(t=()=>e(),window.addEventListener("load",t)):e()}).catch(e=>{throw t&&window.removeEventListener("load",t),e})}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ti{constructor(t,e){this.verificationId=t,this.onConfirmation=e}confirm(t){const e=se._fromVerification(this.verificationId,t);return this.onConfirmation(e)}}async function Ei(t,e,n){const r=jt(t),s=await Ai(r,e,Object(i["k"])(n));return new Ti(s,t=>Le(r,t))}async function xi(t,e,n){const r=Object(i["k"])(t);await Ae(!1,r,"phone");const s=await Ai(r.auth,e,Object(i["k"])(n));return new Ti(s,t=>Ne(r,t))}async function Ci(t,e,n){const r=Object(i["k"])(t),s=await Ai(r.auth,e,Object(i["k"])(n));return new Ti(s,t=>De(r,t))}async function Ai(t,e,n){var i;const r=await n.verify();try{let s;if(O("string"===typeof r,t,"argument-error"),O(n.type===Oi,t,"argument-error"),s="string"===typeof e?{phoneNumber:e}:e,"session"in s){const e=s.session;if("phoneNumber"in s){O("enroll"===e.type,t,"internal-error");const n=await yn(t,{idToken:e.credential,phoneEnrollmentInfo:{phoneNumber:s.phoneNumber,recaptchaToken:r}});return n.phoneSessionInfo.sessionInfo}{O("signin"===e.type,t,"internal-error");const n=(null===(i=s.multiFactorHint)||void 0===i?void 0:i.uid)||s.multiFactorUid;O(n,t,"missing-multi-factor-info");const o=await ri(t,{mfaPendingCredential:e.credential,mfaEnrollmentId:n,phoneSignInInfo:{recaptchaToken:r}});return o.phoneResponseInfo.sessionInfo}}{const{sessionInfo:e}=await te(t,{phoneNumber:s.phoneNumber,recaptchaToken:r});return e}}finally{n._reset()}}async function ji(t,e){await Ce(Object(i["k"])(t),e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ri{constructor(t){this.providerId=Ri.PROVIDER_ID,this.auth=jt(t)}verifyPhoneNumber(t,e){return Ai(this.auth,t,Object(i["k"])(e))}static credential(t,e){return se._fromVerification(t,e)}static credentialFromResult(t){const e=t;return Ri.credentialFromTaggedObject(e)}static credentialFromError(t){return Ri.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{phoneNumber:e,temporaryProof:n}=t;return e&&n?se._fromTokenResponse(e,n):null}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Li(t,e){return e?T(e):(O(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Ri.PROVIDER_ID="phone",Ri.PHONE_SIGN_IN_METHOD="phone";class Ni extends $t{constructor(t){super("custom","custom"),this.params=t}_getIdTokenResponse(t){return Qt(t,this._buildIdpRequest())}_linkToIdToken(t,e){return Qt(t,this._buildIdpRequest(e))}_getReauthenticationResolver(t){return Qt(t,this._buildIdpRequest())}_buildIdpRequest(t){const e={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return t&&(e.idToken=t),e}}function Di(t){return Re(t.auth,new Ni(t),t.bypassAuthState)}function Pi(t){const{auth:e,user:n}=t;return O(n,e,"internal-error"),je(n,new Ni(t),t.bypassAuthState)}async function Mi(t){const{auth:e,user:n}=t;return O(n,e,"internal-error"),Ce(n,new Ni(t),t.bypassAuthState)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $i{constructor(t,e,n,i,r=!1){this.auth=t,this.resolver=n,this.user=i,this.bypassAuthState=r,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(e)?e:[e]}execute(){return new Promise(async(t,e)=>{this.pendingPromise={resolve:t,reject:e};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(n){this.reject(n)}})}async onAuthEvent(t){const{urlResponse:e,sessionId:n,postBody:i,tenantId:r,error:s,type:o}=t;if(s)return void this.reject(s);const a={auth:this.auth,requestUri:e,sessionId:n,tenantId:r||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(o)(a))}catch(c){this.reject(c)}}onError(t){this.reject(t)}getIdpTask(t){switch(t){case"signInViaPopup":case"signInViaRedirect":return Di;case"linkViaPopup":case"linkViaRedirect":return Mi;case"reauthViaPopup":case"reauthViaRedirect":return Pi;default:v(this.auth,"internal-error")}}resolve(t){S(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(t),this.unregisterAndCleanUp()}reject(t){S(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(t),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fi=new L(2e3,1e4);async function Bi(t,e,n){const i=jt(t);w(t,e,le);const r=Li(i,n),s=new qi(i,"signInViaPopup",e,r);return s.executeNotNull()}async function Vi(t,e,n){const r=Object(i["k"])(t);w(r.auth,e,le);const s=Li(r.auth,n),o=new qi(r.auth,"reauthViaPopup",e,s,r);return o.executeNotNull()}async function Ui(t,e,n){const r=Object(i["k"])(t);w(r.auth,e,le);const s=Li(r.auth,n),o=new qi(r.auth,"linkViaPopup",e,s,r);return o.executeNotNull()}class qi extends $i{constructor(t,e,n,i,r){super(t,e,i,r),this.provider=n,this.authWindow=null,this.pollId=null,qi.currentPopupAction&&qi.currentPopupAction.cancel(),qi.currentPopupAction=this}async executeNotNull(){const t=await this.execute();return O(t,this.auth,"internal-error"),t}async onExecution(){S(1===this.filter.length,"Popup operations only handle one event");const t=Dn();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],t),this.authWindow.associatedEvent=t,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(y(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var t;return(null===(t=this.authWindow)||void 0===t?void 0:t.associatedEvent)||null}cancel(){this.reject(y(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,qi.currentPopupAction=null}pollUserCancellation(){const t=()=>{var e,n;(null===(n=null===(e=this.authWindow)||void 0===e?void 0:e.window)||void 0===n?void 0:n.closed)?this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(y(this.auth,"popup-closed-by-user"))},2e3):this.pollId=window.setTimeout(t,Fi.get())};t()}}qi.currentPopupAction=null;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const zi="pendingRedirect",Hi=new Map;class Wi extends $i{constructor(t,e,n=!1){super(t,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],e,void 0,n),this.eventId=null}async execute(){let t=Hi.get(this.auth._key());if(!t){try{const e=await Gi(this.resolver,this.auth),n=e?await super.execute():null;t=()=>Promise.resolve(n)}catch(e){t=()=>Promise.reject(e)}Hi.set(this.auth._key(),t)}return this.bypassAuthState||Hi.set(this.auth._key(),()=>Promise.resolve(null)),t()}async onAuthEvent(t){if("signInViaRedirect"===t.type)return super.onAuthEvent(t);if("unknown"!==t.type){if(t.eventId){const e=await this.auth._redirectUserForId(t.eventId);if(e)return this.user=e,super.onAuthEvent(t);this.resolve(null)}}else this.resolve(null)}async onExecution(){}cleanUp(){}}async function Gi(t,e){const n=Qi(e),i=Xi(t);if(!await i._isAvailable())return!1;const r="true"===await i._get(n);return await i._remove(n),r}async function Ki(t,e){return Xi(t)._set(Qi(e),"true")}function Yi(){Hi.clear()}function Xi(t){return T(t._redirectPersistence)}function Qi(t){return ft(zi,t.config.apiKey,t.name)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ji(t,e,n){return Zi(t,e,n)}async function Zi(t,e,n){const i=jt(t);w(t,e,le);const r=Li(i,n);return await Ki(r,i),r._openRedirect(i,e,"signInViaRedirect")}function tr(t,e,n){return er(t,e,n)}async function er(t,e,n){const r=Object(i["k"])(t);w(r.auth,e,le);const s=Li(r.auth,n);await Ki(s,r.auth);const o=await or(r);return s._openRedirect(r.auth,e,"reauthViaRedirect",o)}function nr(t,e,n){return ir(t,e,n)}async function ir(t,e,n){const r=Object(i["k"])(t);w(r.auth,e,le);const s=Li(r.auth,n);await Ae(!1,r,e.providerId),await Ki(s,r.auth);const o=await or(r);return s._openRedirect(r.auth,e,"linkViaRedirect",o)}async function rr(t,e){return await jt(t)._initializationPromise,sr(t,e,!1)}async function sr(t,e,n=!1){const i=jt(t),r=Li(i,e),s=new Wi(i,r,n),o=await s.execute();return o&&!n&&(delete o.user._redirectEventId,await i._persistUserIfCurrent(o.user),await i._setRedirectUser(null,e)),o}async function or(t){const e=Dn(t.uid+":::");return t._redirectEventId=e,await t.auth._setRedirectUser(t),await t.auth._persistUserIfCurrent(t),e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ar=6e5;class cr{constructor(t){this.auth=t,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(t){this.consumers.add(t),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,t)&&(this.sendToConsumer(this.queuedRedirectEvent,t),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(t){this.consumers.delete(t)}onEvent(t){if(this.hasEventBeenHandled(t))return!1;let e=!1;return this.consumers.forEach(n=>{this.isEventForConsumer(t,n)&&(e=!0,this.sendToConsumer(t,n),this.saveEventToCache(t))}),this.hasHandledPotentialRedirect||!hr(t)||(this.hasHandledPotentialRedirect=!0,e||(this.queuedRedirectEvent=t,e=!0)),e}sendToConsumer(t,e){var n;if(t.error&&!lr(t)){const i=(null===(n=t.error.code)||void 0===n?void 0:n.split("auth/")[1])||"internal-error";e.onError(y(this.auth,i))}else e.onAuthEvent(t)}isEventForConsumer(t,e){const n=null===e.eventId||!!t.eventId&&t.eventId===e.eventId;return e.filter.includes(t.type)&&n}hasEventBeenHandled(t){return Date.now()-this.lastProcessedEventTime>=ar&&this.cachedEventUids.clear(),this.cachedEventUids.has(ur(t))}saveEventToCache(t){this.cachedEventUids.add(ur(t)),this.lastProcessedEventTime=Date.now()}}function ur(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(t=>t).join("-")}function lr({type:t,error:e}){return"unknown"===t&&"auth/no-auth-event"===(null===e||void 0===e?void 0:e.code)}function hr(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return lr(t);default:return!1}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function dr(t,e={}){return F(t,"GET","/v1/projects",e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fr=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,pr=/^https?/;async function mr(t){if(t.config.emulator)return;const{authorizedDomains:e}=await dr(t);for(const i of e)try{if(gr(i))return}catch(n){}v(t,"unauthorized-domain")}function gr(t){const e=x(),{protocol:n,hostname:i}=new URL(e);if(t.startsWith("chrome-extension://")){const r=new URL(t);return""===r.hostname&&""===i?"chrome-extension:"===n&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):"chrome-extension:"===n&&r.hostname===i}if(!pr.test(n))return!1;if(fr.test(t))return i===t;const r=t.replace(/\./g,"\\."),s=new RegExp("^(.+\\."+r+"|"+r+")$","i");return s.test(i)}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vr=new L(3e4,6e4);function yr(){const t=Mn().___jsl;if(null===t||void 0===t?void 0:t.H)for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}function br(t){return new Promise((e,n)=>{var i,r,s;function o(){yr(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{yr(),n(y(t,"network-request-failed"))},timeout:vr.get()})}if(null===(r=null===(i=Mn().gapi)||void 0===i?void 0:i.iframes)||void 0===r?void 0:r.Iframe)e(gapi.iframes.getContext());else{if(!(null===(s=Mn().gapi)||void 0===s?void 0:s.load)){const e=ui("iframefcb");return Mn()[e]=()=>{gapi.load?o():n(y(t,"network-request-failed"))},ci("https://apis.google.com/js/api.js?onload="+e).catch(t=>n(t))}o()}}).catch(t=>{throw wr=null,t})}let wr=null;function _r(t){return wr=wr||br(t),wr}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Or=new L(5e3,15e3),Ir="__/auth/iframe",Sr="emulator/auth/iframe",kr={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Tr=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Er(t){const e=t.config;O(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?N(e,Sr):`https://${t.config.authDomain}/${Ir}`,s={apiKey:e.apiKey,appName:t.name,v:r["SDK_VERSION"]},o=Tr.get(t.config.apiHost);o&&(s.eid=o);const a=t._getFrameworks();return a.length&&(s.fw=a.join(",")),`${n}?${Object(i["x"])(s).slice(1)}`}async function xr(t){const e=await _r(t),n=Mn().gapi;return O(n,t,"internal-error"),e.open({where:document.body,url:Er(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:kr,dontclear:!0},e=>new Promise(async(n,i)=>{await e.restyle({setHideOnLeave:!1});const r=y(t,"network-request-failed"),s=Mn().setTimeout(()=>{i(r)},Or.get());function o(){Mn().clearTimeout(s),n(e)}e.ping(o).then(o,()=>{i(r)})}))}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cr={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Ar=500,jr=600,Rr="_blank",Lr="http://localhost";class Nr{constructor(t){this.window=t,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch(t){}}}function Dr(t,e,n,r=Ar,s=jr){const o=Math.max((window.screen.availHeight-s)/2,0).toString(),a=Math.max((window.screen.availWidth-r)/2,0).toString();let c="";const u=Object.assign(Object.assign({},Cr),{width:r.toString(),height:s.toString(),top:o,left:a}),l=Object(i["l"])().toLowerCase();n&&(c=yt(l)?Rr:n),gt(l)&&(e=e||Lr,u.scrollbars="yes");const h=Object.entries(u).reduce((t,[e,n])=>`${t}${e}=${n},`,"");if(kt(l)&&"_self"!==c)return Pr(e||"",c),new Nr(null);const d=window.open(e||"",c,h);O(d,t,"popup-blocked");try{d.focus()}catch(f){}return new Nr(d)}function Pr(t,e){const n=document.createElement("a");n.href=t,n.target=e;const i=document.createEvent("MouseEvent");i.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(i)}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mr="__/auth/handler",$r="emulator/auth/handler";function Fr(t,e,n,s,o,a){O(t.config.authDomain,t,"auth-domain-config-required"),O(t.config.apiKey,t,"invalid-api-key");const c={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:s,v:r["SDK_VERSION"],eventId:o};if(e instanceof le){e.setDefaultLanguage(t.languageCode),c.providerId=e.providerId||"",Object(i["p"])(e.getCustomParameters())||(c.customParameters=JSON.stringify(e.getCustomParameters()));for(const[t,e]of Object.entries(a||{}))c[t]=e}if(e instanceof he){const t=e.getScopes().filter(t=>""!==t);t.length>0&&(c.scopes=t.join(","))}t.tenantId&&(c.tid=t.tenantId);const u=c;for(const i of Object.keys(u))void 0===u[i]&&delete u[i];return`${Br(t)}?${Object(i["x"])(u).slice(1)}`}function Br({config:t}){return t.emulator?N(t,$r):`https://${t.authDomain}/${Mr}`}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vr="webStorageSupport";class Ur{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Rn,this._completeRedirectFn=sr}async _openPopup(t,e,n,i){var r;S(null===(r=this.eventManagers[t._key()])||void 0===r?void 0:r.manager,"_initialize() not called before _openPopup()");const s=Fr(t,e,n,x(),i);return Dr(t,s,Dn())}async _openRedirect(t,e,n,i){return await this._originValidation(t),$n(Fr(t,e,n,x(),i)),new Promise(()=>{})}_initialize(t){const e=t._key();if(this.eventManagers[e]){const{manager:t,promise:n}=this.eventManagers[e];return t?Promise.resolve(t):(S(n,"If manager is not set, promise should be"),n)}const n=this.initAndGetManager(t);return this.eventManagers[e]={promise:n},n.catch(()=>{delete this.eventManagers[e]}),n}async initAndGetManager(t){const e=await xr(t),n=new cr(t);return e.register("authEvent",e=>{O(null===e||void 0===e?void 0:e.authEvent,t,"invalid-auth-event");const i=n.onEvent(e.authEvent);return{status:i?"ACK":"ERROR"}},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[t._key()]={manager:n},this.iframes[t._key()]=e,n}_isIframeWebStorageSupported(t,e){const n=this.iframes[t._key()];n.send(Vr,{type:Vr},n=>{var i;const r=null===(i=null===n||void 0===n?void 0:n[0])||void 0===i?void 0:i[Vr];void 0!==r&&e(!!r),v(t,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(t){const e=t._key();return this.originValidationPromises[e]||(this.originValidationPromises[e]=mr(t)),this.originValidationPromises[e]}get _shouldInitProactively(){return Et()||vt()||It()}}const qr=Ur;class zr{constructor(t){this.factorId=t}_process(t,e,n){switch(e.type){case"enroll":return this._finalizeEnroll(t,e.credential,n);case"signin":return this._finalizeSignIn(t,e.credential);default:return I("unexpected MultiFactorSessionType")}}}class Hr extends zr{constructor(t){super("phone"),this.credential=t}static _fromCredential(t){return new Hr(t)}_finalizeEnroll(t,e,n){return bn(t,{idToken:e,displayName:n,phoneVerificationInfo:this.credential._makeVerificationRequest()})}_finalizeSignIn(t,e){return si(t,{mfaPendingCredential:e,phoneVerificationInfo:this.credential._makeVerificationRequest()})}}class Wr{constructor(){}static assertion(t){return Hr._fromCredential(t)}}Wr.FACTOR_ID="phone";var Gr="@firebase/auth",Kr="0.19.7";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Yr{constructor(t){this.auth=t,this.internalListeners=new Map}getUid(){var t;return this.assertAuthConfigured(),(null===(t=this.auth.currentUser)||void 0===t?void 0:t.uid)||null}async getToken(t){if(this.assertAuthConfigured(),await this.auth._initializationPromise,!this.auth.currentUser)return null;const e=await this.auth.currentUser.getIdToken(t);return{accessToken:e}}addAuthTokenListener(t){if(this.assertAuthConfigured(),this.internalListeners.has(t))return;const e=this.auth.onIdTokenChanged(e=>{var n;t((null===(n=e)||void 0===n?void 0:n.stsTokenManager.accessToken)||null)});this.internalListeners.set(t,e),this.updateProactiveRefresh()}removeAuthTokenListener(t){this.assertAuthConfigured();const e=this.internalListeners.get(t);e&&(this.internalListeners.delete(t),e(),this.updateProactiveRefresh())}assertAuthConfigured(){O(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xr(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function Qr(t){Object(r["_registerComponent"])(new a["a"]("auth",(e,{options:n})=>{const i=e.getProvider("app").getImmediate(),{apiKey:r,authDomain:s}=i.options;return(e=>{O(r&&!r.includes(":"),"invalid-api-key",{appName:e.name}),O(!(null===s||void 0===s?void 0:s.includes(":")),"argument-error",{appName:e.name});const i={apiKey:r,authDomain:s,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Ct(t)},o=new At(e,i);return E(o,n),o})(i)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((t,e,n)=>{const i=t.getProvider("auth-internal");i.initialize()})),Object(r["_registerComponent"])(new a["a"]("auth-internal",t=>{const e=jt(t.getProvider("auth").getImmediate());return(t=>new Yr(t))(e)},"PRIVATE").setInstantiationMode("EXPLICIT")),Object(r["registerVersion"])(Gr,Kr,Xr(t)),Object(r["registerVersion"])(Gr,Kr,"esm2017")}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Jr(){return window}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Qr("Browser");const Zr=2e3;async function ts(t,e,n){var i;const{BuildInfo:r}=Jr();S(e.sessionId,"AuthEvent did not contain a session ID");const s=await ss(e.sessionId),o={};return It()?o["ibi"]=r.packageName:wt()?o["apn"]=r.packageName:v(t,"operation-not-supported-in-this-environment"),r.displayName&&(o["appDisplayName"]=r.displayName),o["sessionId"]=s,Fr(t,n,e.type,void 0,null!==(i=e.eventId)&&void 0!==i?i:void 0,o)}async function es(t){const{BuildInfo:e}=Jr(),n={};It()?n.iosBundleId=e.packageName:wt()?n.androidPackageName=e.packageName:v(t,"operation-not-supported-in-this-environment"),await dr(t,n)}function ns(t){const{cordova:e}=Jr();return new Promise(n=>{e.plugins.browsertab.isAvailable(i=>{let r=null;i?e.plugins.browsertab.openUrl(t):r=e.InAppBrowser.open(t,St()?"_blank":"_system","location=yes"),n(r)})})}async function is(t,e,n){const{cordova:i}=Jr();let r=()=>{};try{await new Promise((s,o)=>{let a=null;function c(){var t;s();const e=null===(t=i.plugins.browsertab)||void 0===t?void 0:t.close;"function"===typeof e&&e(),"function"===typeof(null===n||void 0===n?void 0:n.close)&&n.close()}function u(){a||(a=window.setTimeout(()=>{o(y(t,"redirect-cancelled-by-user"))},Zr))}function l(){"visible"===(null===document||void 0===document?void 0:document.visibilityState)&&u()}e.addPassiveListener(c),document.addEventListener("resume",u,!1),wt()&&document.addEventListener("visibilitychange",l,!1),r=()=>{e.removePassiveListener(c),document.removeEventListener("resume",u,!1),document.removeEventListener("visibilitychange",l,!1),a&&window.clearTimeout(a)}})}finally{r()}}function rs(t){var e,n,i,r,s,o,a,c,u,l;const h=Jr();O("function"===typeof(null===(e=null===h||void 0===h?void 0:h.universalLinks)||void 0===e?void 0:e.subscribe),t,"invalid-cordova-configuration",{missingPlugin:"cordova-universal-links-plugin-fix"}),O("undefined"!==typeof(null===(n=null===h||void 0===h?void 0:h.BuildInfo)||void 0===n?void 0:n.packageName),t,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-buildInfo"}),O("function"===typeof(null===(s=null===(r=null===(i=null===h||void 0===h?void 0:h.cordova)||void 0===i?void 0:i.plugins)||void 0===r?void 0:r.browsertab)||void 0===s?void 0:s.openUrl),t,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-browsertab"}),O("function"===typeof(null===(c=null===(a=null===(o=null===h||void 0===h?void 0:h.cordova)||void 0===o?void 0:o.plugins)||void 0===a?void 0:a.browsertab)||void 0===c?void 0:c.isAvailable),t,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-browsertab"}),O("function"===typeof(null===(l=null===(u=null===h||void 0===h?void 0:h.cordova)||void 0===u?void 0:u.InAppBrowser)||void 0===l?void 0:l.open),t,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-inappbrowser"})}async function ss(t){const e=os(t),n=await crypto.subtle.digest("SHA-256",e),i=Array.from(new Uint8Array(n));return i.map(t=>t.toString(16).padStart(2,"0")).join("")}function os(t){if(S(/[0-9a-zA-Z]+/.test(t),"Can only convert alpha-numeric strings"),"undefined"!==typeof TextEncoder)return(new TextEncoder).encode(t);const e=new ArrayBuffer(t.length),n=new Uint8Array(e);for(let i=0;i<t.length;i++)n[i]=t.charCodeAt(i);return n}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const as=20;class cs extends cr{constructor(){super(...arguments),this.passiveListeners=new Set,this.initPromise=new Promise(t=>{this.resolveInialized=t})}addPassiveListener(t){this.passiveListeners.add(t)}removePassiveListener(t){this.passiveListeners.delete(t)}resetRedirect(){this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1}onEvent(t){return this.resolveInialized(),this.passiveListeners.forEach(e=>e(t)),super.onEvent(t)}async initialized(){await this.initPromise}}function us(t,e,n=null){return{type:e,eventId:n,urlResponse:null,sessionId:fs(),postBody:null,tenantId:t.tenantId,error:y(t,"no-auth-event")}}function ls(t,e){return ps()._set(ms(t),e)}async function hs(t){const e=await ps()._get(ms(t));return e&&await ps()._remove(ms(t)),e}function ds(t,e){var n,i;const r=vs(e);if(r.includes("/__/auth/callback")){const e=ys(r),s=e["firebaseError"]?gs(decodeURIComponent(e["firebaseError"])):null,o=null===(i=null===(n=null===s||void 0===s?void 0:s["code"])||void 0===n?void 0:n.split("auth/"))||void 0===i?void 0:i[1],a=o?y(o):null;return a?{type:t.type,eventId:t.eventId,tenantId:t.tenantId,error:a,urlResponse:null,sessionId:null,postBody:null}:{type:t.type,eventId:t.eventId,tenantId:t.tenantId,sessionId:t.sessionId,urlResponse:r,postBody:null}}return null}function fs(){const t=[],e="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let n=0;n<as;n++){const n=Math.floor(Math.random()*e.length);t.push(e.charAt(n))}return t.join("")}function ps(){return T(An)}function ms(t){return ft("authEvent",t.config.apiKey,t.name)}function gs(t){try{return JSON.parse(t)}catch(e){return null}}function vs(t){const e=ys(t),n=e["link"]?decodeURIComponent(e["link"]):void 0,i=ys(n)["link"],r=e["deep_link_id"]?decodeURIComponent(e["deep_link_id"]):void 0,s=ys(r)["link"];return s||r||i||n||t}function ys(t){if(!(null===t||void 0===t?void 0:t.includes("?")))return{};const[e,...n]=t.split("?");return Object(i["y"])(n.join("?"))}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bs=500;class ws{constructor(){this._redirectPersistence=Rn,this._shouldInitProactively=!0,this.eventManagers=new Map,this.originValidationPromises={},this._completeRedirectFn=sr}async _initialize(t){const e=t._key();let n=this.eventManagers.get(e);return n||(n=new cs(t),this.eventManagers.set(e,n),this.attachCallbackListeners(t,n)),n}_openPopup(t){v(t,"operation-not-supported-in-this-environment")}async _openRedirect(t,e,n,i){rs(t);const r=await this._initialize(t);await r.initialized(),r.resetRedirect(),Yi(),await this._originValidation(t);const s=us(t,n,i);await ls(t,s);const o=await ts(t,s,e),a=await ns(o);return is(t,r,a)}_isIframeWebStorageSupported(t,e){throw new Error("Method not implemented.")}_originValidation(t){const e=t._key();return this.originValidationPromises[e]||(this.originValidationPromises[e]=es(t)),this.originValidationPromises[e]}attachCallbackListeners(t,e){const{universalLinks:n,handleOpenURL:i,BuildInfo:r}=Jr(),s=setTimeout(async()=>{await hs(t),e.onEvent(Os())},bs),o=async n=>{clearTimeout(s);const i=await hs(t);let r=null;i&&(null===n||void 0===n?void 0:n["url"])&&(r=ds(i,n["url"])),e.onEvent(r||Os())};"undefined"!==typeof n&&"function"===typeof n.subscribe&&n.subscribe(null,o);const a=i,c=r.packageName.toLowerCase()+"://";Jr().handleOpenURL=async t=>{if(t.toLowerCase().startsWith(c)&&o({url:t}),"function"===typeof a)try{a(t)}catch(e){console.error(e)}}}}const _s=ws;function Os(){return{type:"unknown",eventId:null,sessionId:null,urlResponse:null,postBody:null,tenantId:null,error:y("no-auth-event")}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Is(t,e){jt(t)._logFramework(e)}},"1fd5":function(t,e,n){"use strict";(function(t){n.d(e,"a",(function(){return h})),n.d(e,"b",(function(){return T})),n.d(e,"c",(function(){return k})),n.d(e,"d",(function(){return c})),n.d(e,"e",(function(){return C})),n.d(e,"f",(function(){return d})),n.d(e,"g",(function(){return P})),n.d(e,"h",(function(){return j})),n.d(e,"i",(function(){return u})),n.d(e,"j",(function(){return D})),n.d(e,"k",(function(){return B})),n.d(e,"l",(function(){return f})),n.d(e,"m",(function(){return g})),n.d(e,"n",(function(){return v})),n.d(e,"o",(function(){return b})),n.d(e,"p",(function(){return A})),n.d(e,"q",(function(){return w})),n.d(e,"r",(function(){return I})),n.d(e,"s",(function(){return p})),n.d(e,"t",(function(){return m})),n.d(e,"u",(function(){return y})),n.d(e,"v",(function(){return O})),n.d(e,"w",(function(){return _})),n.d(e,"x",(function(){return L})),n.d(e,"y",(function(){return N}));
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const i=function(t){const e=[];let n=0;for(let i=0;i<t.length;i++){let r=t.charCodeAt(i);r<128?e[n++]=r:r<2048?(e[n++]=r>>6|192,e[n++]=63&r|128):55296===(64512&r)&&i+1<t.length&&56320===(64512&t.charCodeAt(i+1))?(r=65536+((1023&r)<<10)+(1023&t.charCodeAt(++i)),e[n++]=r>>18|240,e[n++]=r>>12&63|128,e[n++]=r>>6&63|128,e[n++]=63&r|128):(e[n++]=r>>12|224,e[n++]=r>>6&63|128,e[n++]=63&r|128)}return e},r=function(t){const e=[];let n=0,i=0;while(n<t.length){const r=t[n++];if(r<128)e[i++]=String.fromCharCode(r);else if(r>191&&r<224){const s=t[n++];e[i++]=String.fromCharCode((31&r)<<6|63&s)}else if(r>239&&r<365){const s=t[n++],o=t[n++],a=t[n++],c=((7&r)<<18|(63&s)<<12|(63&o)<<6|63&a)-65536;e[i++]=String.fromCharCode(55296+(c>>10)),e[i++]=String.fromCharCode(56320+(1023&c))}else{const s=t[n++],o=t[n++];e[i++]=String.fromCharCode((15&r)<<12|(63&s)<<6|63&o)}}return e.join("")},s={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"===typeof atob,encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let r=0;r<t.length;r+=3){const e=t[r],s=r+1<t.length,o=s?t[r+1]:0,a=r+2<t.length,c=a?t[r+2]:0,u=e>>2,l=(3&e)<<4|o>>4;let h=(15&o)<<2|c>>6,d=63&c;a||(d=64,s||(h=64)),i.push(n[u],n[l],n[h],n[d])}return i.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(i(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):r(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let r=0;r<t.length;){const e=n[t.charAt(r++)],s=r<t.length,o=s?n[t.charAt(r)]:0;++r;const a=r<t.length,c=a?n[t.charAt(r)]:64;++r;const u=r<t.length,l=u?n[t.charAt(r)]:64;if(++r,null==e||null==o||null==c||null==l)throw Error();const h=e<<2|o>>4;if(i.push(h),64!==c){const t=o<<4&240|c>>2;if(i.push(t),64!==l){const t=c<<6&192|l;i.push(t)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},o=function(t){const e=i(t);return s.encodeByteArray(e,!0)},a=function(t){return o(t).replace(/\./g,"")},c=function(t){try{return s.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function u(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:void 0===t&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)e.hasOwnProperty(n)&&l(n)&&(t[n]=u(t[n],e[n]));return t}function l(t){return"__proto__"!==t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class h{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}wrapCallback(t){return(e,n)=>{e?this.reject(e):this.resolve(n),"function"===typeof t&&(this.promise.catch(()=>{}),1===t.length?t(e):t(e,n))}}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function d(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},i=e||"demo-project",r=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:"https://securetoken.google.com/"+i,aud:i,iat:r,exp:r+3600,auth_time:r,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t),c="";return[a(JSON.stringify(n)),a(JSON.stringify(o)),c].join(".")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function f(){return"undefined"!==typeof navigator&&"string"===typeof navigator["userAgent"]?navigator["userAgent"]:""}function p(){return"undefined"!==typeof window&&!!(window["cordova"]||window["phonegap"]||window["PhoneGap"])&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(f())}function m(){try{return"[object process]"===Object.prototype.toString.call(t.process)}catch(e){return!1}}function g(){return"object"===typeof self&&self.self===self}function v(){const t="object"===typeof chrome?chrome.runtime:"object"===typeof browser?browser.runtime:void 0;return"object"===typeof t&&void 0!==t.id}function y(){return"object"===typeof navigator&&"ReactNative"===navigator["product"]}function b(){return f().indexOf("Electron/")>=0}function w(){const t=f();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function _(){return f().indexOf("MSAppHost/")>=0}function O(){return!m()&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function I(){return"object"===typeof indexedDB}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const S="FirebaseError";class k extends Error{constructor(t,e,n){super(e),this.code=t,this.customData=n,this.name=S,Object.setPrototypeOf(this,k.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,T.prototype.create)}}class T{constructor(t,e,n){this.service=t,this.serviceName=e,this.errors=n}create(t,...e){const n=e[0]||{},i=`${this.service}/${t}`,r=this.errors[t],s=r?E(r,n):"Error",o=`${this.serviceName}: ${s} (${i}).`,a=new k(i,o,n);return a}}function E(t,e){return t.replace(x,(t,n)=>{const i=e[n];return null!=i?String(i):`<${n}?>`})}const x=/\{\$([^}]+)}/g;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function C(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function A(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function j(t,e){if(t===e)return!0;const n=Object.keys(t),i=Object.keys(e);for(const r of n){if(!i.includes(r))return!1;const n=t[r],s=e[r];if(R(n)&&R(s)){if(!j(n,s))return!1}else if(n!==s)return!1}for(const r of i)if(!n.includes(r))return!1;return!0}function R(t){return null!==t&&"object"===typeof t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function L(t){const e=[];for(const[n,i]of Object.entries(t))Array.isArray(i)?i.forEach(t=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(t))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(i));return e.length?"&"+e.join("&"):""}function N(t){const e={},n=t.replace(/^\?/,"").split("&");return n.forEach(t=>{if(t){const[n,i]=t.split("=");e[decodeURIComponent(n)]=decodeURIComponent(i)}}),e}function D(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function P(t,e){const n=new M(t,e);return n.subscribe.bind(n)}class M{constructor(t,e){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=e,this.task.then(()=>{t(this)}).catch(t=>{this.error(t)})}next(t){this.forEachObserver(e=>{e.next(t)})}error(t){this.forEachObserver(e=>{e.error(t)}),this.close(t)}complete(){this.forEachObserver(t=>{t.complete()}),this.close()}subscribe(t,e,n){let i;if(void 0===t&&void 0===e&&void 0===n)throw new Error("Missing Observer.");i=$(t,["next","error","complete"])?t:{next:t,error:e,complete:n},void 0===i.next&&(i.next=F),void 0===i.error&&(i.error=F),void 0===i.complete&&(i.complete=F);const r=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch(t){}}),this.observers.push(i),r}unsubscribeOne(t){void 0!==this.observers&&void 0!==this.observers[t]&&(delete this.observers[t],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))}forEachObserver(t){if(!this.finalized)for(let e=0;e<this.observers.length;e++)this.sendOne(e,t)}sendOne(t,e){this.task.then(()=>{if(void 0!==this.observers&&void 0!==this.observers[t])try{e(this.observers[t])}catch(n){"undefined"!==typeof console&&console.error&&console.error(n)}})}close(t){this.finalized||(this.finalized=!0,void 0!==t&&(this.finalError=t),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function $(t,e){if("object"!==typeof t||null===t)return!1;for(const n of e)if(n in t&&"function"===typeof t[n])return!0;return!1}function F(){}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function B(t){return t&&t._delegate?t._delegate:t}}).call(this,n("c8ba"))},"20f6":function(t,e,n){},"21be":function(t,e,n){"use strict";var i=n("2909"),r=(n("99af"),n("caad"),n("2532"),n("2b0e")),s=n("80d2");e["a"]=r["a"].extend().extend({name:"stackable",data:function(){return{stackElement:null,stackExclude:null,stackMinZIndex:0,isActive:!1}},computed:{activeZIndex:function(){if("undefined"===typeof window)return 0;var t=this.stackElement||this.$refs.content,e=this.isActive?this.getMaxZIndex(this.stackExclude||[t])+2:Object(s["u"])(t);return null==e?e:parseInt(e)}},methods:{getMaxZIndex:function(){for(var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],e=this.$el,n=[this.stackMinZIndex,Object(s["u"])(e)],r=[].concat(Object(i["a"])(document.getElementsByClassName("v-menu__content--active")),Object(i["a"])(document.getElementsByClassName("v-dialog__content--active"))),o=0;o<r.length;o++)t.includes(r[o])||n.push(Object(s["u"])(r[o]));return Math.max.apply(Math,n)}}})},2266:function(t,e,n){var i=n("da84"),r=n("0366"),s=n("c65b"),o=n("825a"),a=n("0d51"),c=n("e95a"),u=n("07fa"),l=n("3a9b"),h=n("9a1f"),d=n("35a1"),f=n("2a62"),p=i.TypeError,m=function(t,e){this.stopped=t,this.result=e},g=m.prototype;t.exports=function(t,e,n){var i,v,y,b,w,_,O,I=n&&n.that,S=!(!n||!n.AS_ENTRIES),k=!(!n||!n.IS_ITERATOR),T=!(!n||!n.INTERRUPTED),E=r(e,I),x=function(t){return i&&f(i,"normal",t),new m(!0,t)},C=function(t){return S?(o(t),T?E(t[0],t[1],x):E(t[0],t[1])):T?E(t,x):E(t)};if(k)i=t;else{if(v=d(t),!v)throw p(a(t)+" is not iterable");if(c(v)){for(y=0,b=u(t);b>y;y++)if(w=C(t[y]),w&&l(g,w))return w;return new m(!1)}i=h(t,v)}_=i.next;while(!(O=s(_,i)).done){try{w=C(O.value)}catch(A){f(i,"throw",A)}if("object"==typeof w&&w&&l(g,w))return w}return new m(!1)}},"22e5":function(t,e,n){"use strict";n.d(e,"a",(function(){return r})),n.d(e,"b",(function(){return u}));var i=n("1fd5");class r{constructor(t,e,n){this.name=t,this.instanceFactory=e,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const s="[DEFAULT]";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class o{constructor(t,e){this.name=t,this.container=e,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const e=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(e)){const t=new i["a"];if(this.instancesDeferred.set(e,t),this.isInitialized(e)||this.shouldAutoInitialize())try{const n=this.getOrInitializeService({instanceIdentifier:e});n&&t.resolve(n)}catch(n){}}return this.instancesDeferred.get(e).promise}getImmediate(t){var e;const n=this.normalizeInstanceIdentifier(null===t||void 0===t?void 0:t.identifier),i=null!==(e=null===t||void 0===t?void 0:t.optional)&&void 0!==e&&e;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(i)return null;throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(r){if(i)return null;throw r}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,this.shouldAutoInitialize()){if(c(t))try{this.getOrInitializeService({instanceIdentifier:s})}catch(e){}for(const[t,n]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(t);try{const t=this.getOrInitializeService({instanceIdentifier:i});n.resolve(t)}catch(e){}}}}clearInstance(t=s){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...t.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return null!=this.component}isInitialized(t=s){return this.instances.has(t)}getOptions(t=s){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:e={}}=t,n=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:n,options:e});for(const[r,s]of this.instancesDeferred.entries()){const t=this.normalizeInstanceIdentifier(r);n===t&&s.resolve(i)}return i}onInit(t,e){var n;const i=this.normalizeInstanceIdentifier(e),r=null!==(n=this.onInitCallbacks.get(i))&&void 0!==n?n:new Set;r.add(t),this.onInitCallbacks.set(i,r);const s=this.instances.get(i);return s&&t(s,i),()=>{r.delete(t)}}invokeOnInitCallbacks(t,e){const n=this.onInitCallbacks.get(e);if(n)for(const r of n)try{r(t,e)}catch(i){}}getOrInitializeService({instanceIdentifier:t,options:e={}}){let n=this.instances.get(t);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:a(t),options:e}),this.instances.set(t,n),this.instancesOptions.set(t,e),this.invokeOnInitCallbacks(n,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,n)}catch(i){}return n||null}normalizeInstanceIdentifier(t=s){return this.component?this.component.multipleInstances?t:s:t}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}function a(t){return t===s?void 0:t}function c(t){return"EAGER"===t.instantiationMode}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class u{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const e=this.getProvider(t.name);if(e.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);e.setComponent(t)}addOrOverwriteComponent(t){const e=this.getProvider(t.name);e.isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const e=new o(t,this);return this.providers.set(t,e),e}getProviders(){return Array.from(this.providers.values())}}},"23cb":function(t,e,n){var i=n("5926"),r=Math.max,s=Math.min;t.exports=function(t,e){var n=i(t);return n<0?r(n+e,0):s(n,e)}},"23e7":function(t,e,n){var i=n("da84"),r=n("06cf").f,s=n("9112"),o=n("6eeb"),a=n("ce4e"),c=n("e893"),u=n("94ca");t.exports=function(t,e){var n,l,h,d,f,p,m=t.target,g=t.global,v=t.stat;if(l=g?i:v?i[m]||a(m,{}):(i[m]||{}).prototype,l)for(h in e){if(f=e[h],t.noTargetGet?(p=r(l,h),d=p&&p.value):d=l[h],n=u(g?h:m+(v?".":"#")+h,t.forced),!n&&void 0!==d){if(typeof f==typeof d)continue;c(f,d)}(t.sham||d&&d.sham)&&s(f,"sham",!0),o(l,h,f,t)}}},"241c":function(t,e,n){var i=n("ca84"),r=n("7839"),s=r.concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return i(t,s)}},"24b2":function(t,e,n){"use strict";n("a9e3");var i=n("80d2"),r=n("2b0e");e["a"]=r["a"].extend({name:"measurable",props:{height:[Number,String],maxHeight:[Number,String],maxWidth:[Number,String],minHeight:[Number,String],minWidth:[Number,String],width:[Number,String]},computed:{measurableStyles:function(){var t={},e=Object(i["h"])(this.height),n=Object(i["h"])(this.minHeight),r=Object(i["h"])(this.minWidth),s=Object(i["h"])(this.maxHeight),o=Object(i["h"])(this.maxWidth),a=Object(i["h"])(this.width);return e&&(t.height=e),n&&(t.minHeight=n),r&&(t.minWidth=r),s&&(t.maxHeight=s),o&&(t.maxWidth=o),a&&(t.width=a),t}}})},"24ee":function(t,e,n){"use strict";var i=n("7ded"),r=n("589b"),s=n("1fd5"),o=n("22e5");
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const a="firebasestorage.googleapis.com",c="storageBucket",u=12e4,l=6e5;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class h extends s["c"]{constructor(t,e){super(d(t),`Firebase Storage: ${e} (${d(t)})`),this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,h.prototype)}_codeEquals(t){return d(t)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(t){this.customData.serverResponse=t,this.customData.serverResponse?this.message=`${this._baseMessage}\n${this.customData.serverResponse}`:this.message=this._baseMessage}}function d(t){return"storage/"+t}function f(){const t="An unknown error occurred, please check the error payload for server response.";return new h("unknown",t)}function p(t){return new h("object-not-found","Object '"+t+"' does not exist.")}function m(t){return new h("quota-exceeded","Quota for bucket '"+t+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function g(){const t="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new h("unauthenticated",t)}function v(){return new h("unauthorized-app","This app does not have permission to access Firebase Storage on this project.")}function y(t){return new h("unauthorized","User does not have permission to access '"+t+"'.")}function b(){return new h("retry-limit-exceeded","Max retry time for operation exceeded, please try again.")}function w(){return new h("canceled","User canceled the upload/download.")}function _(t){return new h("invalid-url","Invalid URL '"+t+"'.")}function O(t){return new h("invalid-default-bucket","Invalid default bucket '"+t+"'.")}function I(){return new h("no-default-bucket","No default bucket found. Did you set the '"+c+"' property when initializing the app?")}function S(){return new h("cannot-slice-blob","Cannot slice blob for upload. Please retry the upload.")}function k(){return new h("server-file-wrong-size","Server recorded incorrect upload file size, please retry the upload.")}function T(){return new h("no-download-url","The given file does not have any download URLs.")}function E(t){return new h("invalid-argument",t)}function x(){return new h("app-deleted","The Firebase app was deleted.")}function C(t){return new h("invalid-root-operation","The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function A(t,e){return new h("invalid-format","String does not match format '"+t+"': "+e)}function j(t){throw new h("internal-error","Internal error: "+t)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class R{constructor(t,e){this.bucket=t,this.path_=e}get path(){return this.path_}get isRoot(){return 0===this.path.length}fullServerUrl(){const t=encodeURIComponent;return"/b/"+t(this.bucket)+"/o/"+t(this.path)}bucketOnlyServerUrl(){const t=encodeURIComponent;return"/b/"+t(this.bucket)+"/o"}static makeFromBucketSpec(t,e){let n;try{n=R.makeFromUrl(t,e)}catch(i){return new R(t,"")}if(""===n.path)return n;throw O(t)}static makeFromUrl(t,e){let n=null;const i="([A-Za-z0-9.\\-_]+)";function r(t){"/"===t.path.charAt(t.path.length-1)&&(t.path_=t.path_.slice(0,-1))}const s="(/(.*))?$",o=new RegExp("^gs://"+i+s,"i"),c={bucket:1,path:3};function u(t){t.path_=decodeURIComponent(t.path)}const l="v[A-Za-z0-9_]+",h=e.replace(/[.]/g,"\\."),d="(/([^?#]*).*)?$",f=new RegExp(`^https?://${h}/${l}/b/${i}/o${d}`,"i"),p={bucket:1,path:3},m=e===a?"(?:storage.googleapis.com|storage.cloud.google.com)":e,g="([^?#]*)",v=new RegExp(`^https?://${m}/${i}/${g}`,"i"),y={bucket:1,path:2},b=[{regex:o,indices:c,postModify:r},{regex:f,indices:p,postModify:u},{regex:v,indices:y,postModify:u}];for(let a=0;a<b.length;a++){const e=b[a],i=e.regex.exec(t);if(i){const t=i[e.indices.bucket];let r=i[e.indices.path];r||(r=""),n=new R(t,r),e.postModify(n);break}}if(null==n)throw _(t);return n}}class L{constructor(t){this.promise_=Promise.reject(t)}getPromise(){return this.promise_}cancel(t=!1){}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function N(t,e,n){let i=1,r=null,s=null,o=!1,a=0;function c(){return 2===a}let u=!1;function l(...t){u||(u=!0,e.apply(null,t))}function h(e){r=setTimeout(()=>{r=null,t(f,c())},e)}function d(){s&&clearTimeout(s)}function f(t,...e){if(u)return void d();if(t)return d(),void l.call(null,t,...e);const n=c()||o;if(n)return d(),void l.call(null,t,...e);let r;i<64&&(i*=2),1===a?(a=2,r=0):r=1e3*(i+Math.random()),h(r)}let p=!1;function m(t){p||(p=!0,d(),u||(null!==r?(t||(a=2),clearTimeout(r),h(0)):t||(a=1)))}return h(0),s=setTimeout(()=>{o=!0,m(!0)},n),m}function D(t){t(!1)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function P(t){return void 0!==t}function M(t){return"function"===typeof t}function $(t){return"object"===typeof t&&!Array.isArray(t)}function F(t){return"string"===typeof t||t instanceof String}function B(t){return V()&&t instanceof Blob}function V(){return"undefined"!==typeof Blob}function U(t,e,n,i){if(i<e)throw E(`Invalid value for '${t}'. Expected ${e} or greater.`);if(i>n)throw E(`Invalid value for '${t}'. Expected ${n} or less.`)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function q(t,e,n){let i=e;return null==n&&(i="https://"+e),`${n}://${i}/v0${t}`}function z(t){const e=encodeURIComponent;let n="?";for(const i in t)if(t.hasOwnProperty(i)){const r=e(i)+"="+e(t[i]);n=n+r+"&"}return n=n.slice(0,-1),n}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var H;(function(t){t[t["NO_ERROR"]=0]="NO_ERROR",t[t["NETWORK_ERROR"]=1]="NETWORK_ERROR",t[t["ABORT"]=2]="ABORT"})(H||(H={}));
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class W{constructor(t,e,n,i,r,s,o,a,c,u,l){this.url_=t,this.method_=e,this.headers_=n,this.body_=i,this.successCodes_=r,this.additionalRetryCodes_=s,this.callback_=o,this.errorCallback_=a,this.timeout_=c,this.progressCallback_=u,this.connectionFactory_=l,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((t,e)=>{this.resolve_=t,this.reject_=e,this.start_()})}start_(){const t=(t,e)=>{if(e)return void t(!1,new G(!1,null,!0));const n=this.connectionFactory_();this.pendingConnection_=n;const i=t=>{const e=t.loaded,n=t.lengthComputable?t.total:-1;null!==this.progressCallback_&&this.progressCallback_(e,n)};null!==this.progressCallback_&&n.addUploadProgressListener(i),n.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{null!==this.progressCallback_&&n.removeUploadProgressListener(i),this.pendingConnection_=null;const e=n.getErrorCode()===H.NO_ERROR,r=n.getStatus();if(!e||this.isRetryStatusCode_(r)){const e=n.getErrorCode()===H.ABORT;return void t(!1,new G(!1,null,e))}const s=-1!==this.successCodes_.indexOf(r);t(!0,new G(s,n))})},e=(t,e)=>{const n=this.resolve_,i=this.reject_,r=e.connection;if(e.wasSuccessCode)try{const t=this.callback_(r,r.getResponse());P(t)?n(t):n()}catch(s){i(s)}else if(null!==r){const t=f();t.serverResponse=r.getErrorText(),this.errorCallback_?i(this.errorCallback_(r,t)):i(t)}else if(e.canceled){const t=this.appDelete_?x():w();i(t)}else{const t=b();i(t)}};this.canceled_?e(!1,new G(!1,null,!0)):this.backoffId_=N(t,e,this.timeout_)}getPromise(){return this.promise_}cancel(t){this.canceled_=!0,this.appDelete_=t||!1,null!==this.backoffId_&&D(this.backoffId_),null!==this.pendingConnection_&&this.pendingConnection_.abort()}isRetryStatusCode_(t){const e=t>=500&&t<600,n=[408,429],i=-1!==n.indexOf(t),r=-1!==this.additionalRetryCodes_.indexOf(t);return e||i||r}}class G{constructor(t,e,n){this.wasSuccessCode=t,this.connection=e,this.canceled=!!n}}function K(t,e){null!==e&&e.length>0&&(t["Authorization"]="Firebase "+e)}function Y(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(null!==e&&void 0!==e?e:"AppManager")}function X(t,e){e&&(t["X-Firebase-GMPID"]=e)}function Q(t,e){null!==e&&(t["X-Firebase-AppCheck"]=e)}function J(t,e,n,i,r,s){const o=z(t.urlParams),a=t.url+o,c=Object.assign({},t.headers);return X(c,e),K(c,n),Y(c,s),Q(c,i),new W(a,t.method,c,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,r)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Z(){return"undefined"!==typeof BlobBuilder?BlobBuilder:"undefined"!==typeof WebKitBlobBuilder?WebKitBlobBuilder:void 0}function tt(...t){const e=Z();if(void 0!==e){const n=new e;for(let e=0;e<t.length;e++)n.append(t[e]);return n.getBlob()}if(V())return new Blob(t);throw new h("unsupported-environment","This browser doesn't seem to support creating Blobs")}function et(t,e,n){return t.webkitSlice?t.webkitSlice(e,n):t.mozSlice?t.mozSlice(e,n):t.slice?t.slice(e,n):null}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nt(t){return atob(t)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const it={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class rt{constructor(t,e){this.data=t,this.contentType=e||null}}function st(t,e){switch(t){case it.RAW:return new rt(ot(e));case it.BASE64:case it.BASE64URL:return new rt(ct(t,e));case it.DATA_URL:return new rt(lt(e),ht(e))}throw f()}function ot(t){const e=[];for(let n=0;n<t.length;n++){let i=t.charCodeAt(n);if(i<=127)e.push(i);else if(i<=2047)e.push(192|i>>6,128|63&i);else if(55296===(64512&i)){const r=n<t.length-1&&56320===(64512&t.charCodeAt(n+1));if(r){const r=i,s=t.charCodeAt(++n);i=65536|(1023&r)<<10|1023&s,e.push(240|i>>18,128|i>>12&63,128|i>>6&63,128|63&i)}else e.push(239,191,189)}else 56320===(64512&i)?e.push(239,191,189):e.push(224|i>>12,128|i>>6&63,128|63&i)}return new Uint8Array(e)}function at(t){let e;try{e=decodeURIComponent(t)}catch(n){throw A(it.DATA_URL,"Malformed data URL.")}return ot(e)}function ct(t,e){switch(t){case it.BASE64:{const n=-1!==e.indexOf("-"),i=-1!==e.indexOf("_");if(n||i){const e=n?"-":"_";throw A(t,"Invalid character '"+e+"' found: is it base64url encoded?")}break}case it.BASE64URL:{const n=-1!==e.indexOf("+"),i=-1!==e.indexOf("/");if(n||i){const e=n?"+":"/";throw A(t,"Invalid character '"+e+"' found: is it base64 encoded?")}e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=nt(e)}catch(r){throw A(t,"Invalid character found")}const i=new Uint8Array(n.length);for(let s=0;s<n.length;s++)i[s]=n.charCodeAt(s);return i}class ut{constructor(t){this.base64=!1,this.contentType=null;const e=t.match(/^data:([^,]+)?,/);if(null===e)throw A(it.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const n=e[1]||null;null!=n&&(this.base64=dt(n,";base64"),this.contentType=this.base64?n.substring(0,n.length-";base64".length):n),this.rest=t.substring(t.indexOf(",")+1)}}function lt(t){const e=new ut(t);return e.base64?ct(it.BASE64,e.rest):at(e.rest)}function ht(t){const e=new ut(t);return e.contentType}function dt(t,e){const n=t.length>=e.length;return!!n&&t.substring(t.length-e.length)===e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ft{constructor(t,e){let n=0,i="";B(t)?(this.data_=t,n=t.size,i=t.type):t instanceof ArrayBuffer?(e?this.data_=new Uint8Array(t):(this.data_=new Uint8Array(t.byteLength),this.data_.set(new Uint8Array(t))),n=this.data_.length):t instanceof Uint8Array&&(e?this.data_=t:(this.data_=new Uint8Array(t.length),this.data_.set(t)),n=t.length),this.size_=n,this.type_=i}size(){return this.size_}type(){return this.type_}slice(t,e){if(B(this.data_)){const n=this.data_,i=et(n,t,e);return null===i?null:new ft(i)}{const n=new Uint8Array(this.data_.buffer,t,e-t);return new ft(n,!0)}}static getBlob(...t){if(V()){const e=t.map(t=>t instanceof ft?t.data_:t);return new ft(tt.apply(null,e))}{const e=t.map(t=>F(t)?st(it.RAW,t).data:t.data_);let n=0;e.forEach(t=>{n+=t.byteLength});const i=new Uint8Array(n);let r=0;return e.forEach(t=>{for(let e=0;e<t.length;e++)i[r++]=t[e]}),new ft(i,!0)}}uploadData(){return this.data_}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pt(t){let e;try{e=JSON.parse(t)}catch(n){return null}return $(e)?e:null}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mt(t){if(0===t.length)return null;const e=t.lastIndexOf("/");if(-1===e)return"";const n=t.slice(0,e);return n}function gt(t,e){const n=e.split("/").filter(t=>t.length>0).join("/");return 0===t.length?n:t+"/"+n}function vt(t){const e=t.lastIndexOf("/",t.length-2);return-1===e?t:t.slice(e+1)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yt(t,e){return e}class bt{constructor(t,e,n,i){this.server=t,this.local=e||t,this.writable=!!n,this.xform=i||yt}}let wt=null;function _t(t){return!F(t)||t.length<2?t:vt(t)}function Ot(){if(wt)return wt;const t=[];function e(t,e){return _t(e)}t.push(new bt("bucket")),t.push(new bt("generation")),t.push(new bt("metageneration")),t.push(new bt("name","fullPath",!0));const n=new bt("name");function i(t,e){return void 0!==e?Number(e):e}n.xform=e,t.push(n);const r=new bt("size");return r.xform=i,t.push(r),t.push(new bt("timeCreated")),t.push(new bt("updated")),t.push(new bt("md5Hash",null,!0)),t.push(new bt("cacheControl",null,!0)),t.push(new bt("contentDisposition",null,!0)),t.push(new bt("contentEncoding",null,!0)),t.push(new bt("contentLanguage",null,!0)),t.push(new bt("contentType",null,!0)),t.push(new bt("metadata","customMetadata",!0)),wt=t,wt}function It(t,e){function n(){const n=t["bucket"],i=t["fullPath"],r=new R(n,i);return e._makeStorageReference(r)}Object.defineProperty(t,"ref",{get:n})}function St(t,e,n){const i={type:"file"},r=n.length;for(let s=0;s<r;s++){const t=n[s];i[t.local]=t.xform(i,e[t.server])}return It(i,t),i}function kt(t,e,n){const i=pt(e);if(null===i)return null;const r=i;return St(t,r,n)}function Tt(t,e,n,i){const r=pt(e);if(null===r)return null;if(!F(r["downloadTokens"]))return null;const s=r["downloadTokens"];if(0===s.length)return null;const o=encodeURIComponent,a=s.split(","),c=a.map(e=>{const r=t["bucket"],s=t["fullPath"],a="/b/"+o(r)+"/o/"+o(s),c=q(a,n,i),u=z({alt:"media",token:e});return c+u});return c[0]}function Et(t,e){const n={},i=e.length;for(let r=0;r<i;r++){const i=e[r];i.writable&&(n[i.server]=t[i.local])}return JSON.stringify(n)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xt="prefixes",Ct="items";function At(t,e,n){const i={prefixes:[],items:[],nextPageToken:n["nextPageToken"]};if(n[xt])for(const r of n[xt]){const n=r.replace(/\/$/,""),s=t._makeStorageReference(new R(e,n));i.prefixes.push(s)}if(n[Ct])for(const r of n[Ct]){const n=t._makeStorageReference(new R(e,r["name"]));i.items.push(n)}return i}function jt(t,e,n){const i=pt(n);if(null===i)return null;const r=i;return At(t,e,r)}class Rt{constructor(t,e,n,i){this.url=t,this.method=e,this.handler=n,this.timeout=i,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lt(t){if(!t)throw f()}function Nt(t,e){function n(n,i){const r=kt(t,i,e);return Lt(null!==r),r}return n}function Dt(t,e){function n(n,i){const r=jt(t,e,i);return Lt(null!==r),r}return n}function Pt(t,e){function n(n,i){const r=kt(t,i,e);return Lt(null!==r),Tt(r,i,t.host,t._protocol)}return n}function Mt(t){function e(e,n){let i;return i=401===e.getStatus()?e.getErrorText().includes("Firebase App Check token is invalid")?v():g():402===e.getStatus()?m(t.bucket):403===e.getStatus()?y(t.path):n,i.serverResponse=n.serverResponse,i}return e}function $t(t){const e=Mt(t);function n(n,i){let r=e(n,i);return 404===n.getStatus()&&(r=p(t.path)),r.serverResponse=i.serverResponse,r}return n}function Ft(t,e,n){const i=e.fullServerUrl(),r=q(i,t.host,t._protocol),s="GET",o=t.maxOperationRetryTime,a=new Rt(r,s,Nt(t,n),o);return a.errorHandler=$t(e),a}function Bt(t,e,n,i,r){const s={};e.isRoot?s["prefix"]="":s["prefix"]=e.path+"/",n&&n.length>0&&(s["delimiter"]=n),i&&(s["pageToken"]=i),r&&(s["maxResults"]=r);const o=e.bucketOnlyServerUrl(),a=q(o,t.host,t._protocol),c="GET",u=t.maxOperationRetryTime,l=new Rt(a,c,Dt(t,e.bucket),u);return l.urlParams=s,l.errorHandler=Mt(e),l}function Vt(t,e,n){const i=e.fullServerUrl(),r=q(i,t.host,t._protocol),s="GET",o=t.maxOperationRetryTime,a=new Rt(r,s,Pt(t,n),o);return a.errorHandler=$t(e),a}function Ut(t,e,n,i){const r=e.fullServerUrl(),s=q(r,t.host,t._protocol),o="PATCH",a=Et(n,i),c={"Content-Type":"application/json; charset=utf-8"},u=t.maxOperationRetryTime,l=new Rt(s,o,Nt(t,i),u);return l.headers=c,l.body=a,l.errorHandler=$t(e),l}function qt(t,e){const n=e.fullServerUrl(),i=q(n,t.host,t._protocol),r="DELETE",s=t.maxOperationRetryTime;function o(t,e){}const a=new Rt(i,r,o,s);return a.successCodes=[200,204],a.errorHandler=$t(e),a}function zt(t,e){return t&&t["contentType"]||e&&e.type()||"application/octet-stream"}function Ht(t,e,n){const i=Object.assign({},n);return i["fullPath"]=t.path,i["size"]=e.size(),i["contentType"]||(i["contentType"]=zt(null,e)),i}function Wt(t,e,n,i,r){const s=e.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};function a(){let t="";for(let e=0;e<2;e++)t+=Math.random().toString().slice(2);return t}const c=a();o["Content-Type"]="multipart/related; boundary="+c;const u=Ht(e,i,r),l=Et(u,n),h="--"+c+"\r\nContent-Type: application/json; charset=utf-8\r\n\r\n"+l+"\r\n--"+c+"\r\nContent-Type: "+u["contentType"]+"\r\n\r\n",d="\r\n--"+c+"--",f=ft.getBlob(h,i,d);if(null===f)throw S();const p={name:u["fullPath"]},m=q(s,t.host,t._protocol),g="POST",v=t.maxUploadRetryTime,y=new Rt(m,g,Nt(t,n),v);return y.urlParams=p,y.headers=o,y.body=f.uploadData(),y.errorHandler=Mt(e),y}class Gt{constructor(t,e,n,i){this.current=t,this.total=e,this.finalized=!!n,this.metadata=i||null}}function Kt(t,e){let n=null;try{n=t.getResponseHeader("X-Goog-Upload-Status")}catch(r){Lt(!1)}const i=e||["active"];return Lt(!!n&&-1!==i.indexOf(n)),n}function Yt(t,e,n,i,r){const s=e.bucketOnlyServerUrl(),o=Ht(e,i,r),a={name:o["fullPath"]},c=q(s,t.host,t._protocol),u="POST",l={"X-Goog-Upload-Protocol":"resumable","X-Goog-Upload-Command":"start","X-Goog-Upload-Header-Content-Length":""+i.size(),"X-Goog-Upload-Header-Content-Type":o["contentType"],"Content-Type":"application/json; charset=utf-8"},h=Et(o,n),d=t.maxUploadRetryTime;function f(t){let e;Kt(t);try{e=t.getResponseHeader("X-Goog-Upload-URL")}catch(n){Lt(!1)}return Lt(F(e)),e}const p=new Rt(c,u,f,d);return p.urlParams=a,p.headers=l,p.body=h,p.errorHandler=Mt(e),p}function Xt(t,e,n,i){const r={"X-Goog-Upload-Command":"query"};function s(t){const e=Kt(t,["active","final"]);let n=null;try{n=t.getResponseHeader("X-Goog-Upload-Size-Received")}catch(s){Lt(!1)}n||Lt(!1);const r=Number(n);return Lt(!isNaN(r)),new Gt(r,i.size(),"final"===e)}const o="POST",a=t.maxUploadRetryTime,c=new Rt(n,o,s,a);return c.headers=r,c.errorHandler=Mt(e),c}const Qt=262144;function Jt(t,e,n,i,r,s,o,a){const c=new Gt(0,0);if(o?(c.current=o.current,c.total=o.total):(c.current=0,c.total=i.size()),i.size()!==c.total)throw k();const u=c.total-c.current;let l=u;r>0&&(l=Math.min(l,r));const h=c.current,d=h+l,f=l===u?"upload, finalize":"upload",p={"X-Goog-Upload-Command":f,"X-Goog-Upload-Offset":""+c.current},m=i.slice(h,d);if(null===m)throw S();function g(t,n){const r=Kt(t,["active","final"]),o=c.current+l,a=i.size();let u;return u="final"===r?Nt(e,s)(t,n):null,new Gt(o,a,"final"===r,u)}const v="POST",y=e.maxUploadRetryTime,b=new Rt(n,v,g,y);return b.headers=p,b.body=m.uploadData(),b.progressCallback=a||null,b.errorHandler=Mt(t),b}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zt={STATE_CHANGED:"state_changed"},te={RUNNING:"running",PAUSED:"paused",SUCCESS:"success",CANCELED:"canceled",ERROR:"error"};function ee(t){switch(t){case"running":case"pausing":case"canceling":return te.RUNNING;case"paused":return te.PAUSED;case"success":return te.SUCCESS;case"canceled":return te.CANCELED;case"error":return te.ERROR;default:return te.ERROR}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ne{constructor(t,e,n){const i=M(t)||null!=e||null!=n;if(i)this.next=t,this.error=null!==e&&void 0!==e?e:void 0,this.complete=null!==n&&void 0!==n?n:void 0;else{const e=t;this.next=e.next,this.error=e.error,this.complete=e.complete}}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ie(t){return(...e)=>{Promise.resolve().then(()=>t(...e))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let re=null;class se{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=H.NO_ERROR,this.sendPromise_=new Promise(t=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=H.ABORT,t()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=H.NETWORK_ERROR,t()}),this.xhr_.addEventListener("load",()=>{t()})})}send(t,e,n,i){if(this.sent_)throw j("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(e,t,!0),void 0!==i)for(const r in i)i.hasOwnProperty(r)&&this.xhr_.setRequestHeader(r,i[r].toString());return void 0!==n?this.xhr_.send(n):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw j("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw j("cannot .getStatus() before sending");try{return this.xhr_.status}catch(t){return-1}}getResponse(){if(!this.sent_)throw j("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw j("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(t){return this.xhr_.getResponseHeader(t)}addUploadProgressListener(t){null!=this.xhr_.upload&&this.xhr_.upload.addEventListener("progress",t)}removeUploadProgressListener(t){null!=this.xhr_.upload&&this.xhr_.upload.removeEventListener("progress",t)}}class oe extends se{initXhr(){this.xhr_.responseType="text"}}function ae(){return re?re():new oe}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ce{constructor(t,e,n=null){this._transferred=0,this._needToFetchStatus=!1,this._needToFetchMetadata=!1,this._observers=[],this._error=void 0,this._uploadUrl=void 0,this._request=void 0,this._chunkMultiplier=1,this._resolve=void 0,this._reject=void 0,this._ref=t,this._blob=e,this._metadata=n,this._mappings=Ot(),this._resumable=this._shouldDoResumable(this._blob),this._state="running",this._errorHandler=t=>{this._request=void 0,this._chunkMultiplier=1,t._codeEquals("canceled")?(this._needToFetchStatus=!0,this.completeTransitions_()):(this._error=t,this._transition("error"))},this._metadataErrorHandler=t=>{this._request=void 0,t._codeEquals("canceled")?this.completeTransitions_():(this._error=t,this._transition("error"))},this._promise=new Promise((t,e)=>{this._resolve=t,this._reject=e,this._start()}),this._promise.then(null,()=>{})}_makeProgressCallback(){const t=this._transferred;return e=>this._updateProgress(t+e)}_shouldDoResumable(t){return t.size()>262144}_start(){"running"===this._state&&void 0===this._request&&(this._resumable?void 0===this._uploadUrl?this._createResumable():this._needToFetchStatus?this._fetchStatus():this._needToFetchMetadata?this._fetchMetadata():this._continueUpload():this._oneShotUpload())}_resolveToken(t){Promise.all([this._ref.storage._getAuthToken(),this._ref.storage._getAppCheckToken()]).then(([e,n])=>{switch(this._state){case"running":t(e,n);break;case"canceling":this._transition("canceled");break;case"pausing":this._transition("paused");break}})}_createResumable(){this._resolveToken((t,e)=>{const n=Yt(this._ref.storage,this._ref._location,this._mappings,this._blob,this._metadata),i=this._ref.storage._makeRequest(n,ae,t,e);this._request=i,i.getPromise().then(t=>{this._request=void 0,this._uploadUrl=t,this._needToFetchStatus=!1,this.completeTransitions_()},this._errorHandler)})}_fetchStatus(){const t=this._uploadUrl;this._resolveToken((e,n)=>{const i=Xt(this._ref.storage,this._ref._location,t,this._blob),r=this._ref.storage._makeRequest(i,ae,e,n);this._request=r,r.getPromise().then(t=>{t=t,this._request=void 0,this._updateProgress(t.current),this._needToFetchStatus=!1,t.finalized&&(this._needToFetchMetadata=!0),this.completeTransitions_()},this._errorHandler)})}_continueUpload(){const t=Qt*this._chunkMultiplier,e=new Gt(this._transferred,this._blob.size()),n=this._uploadUrl;this._resolveToken((i,r)=>{let s;try{s=Jt(this._ref._location,this._ref.storage,n,this._blob,t,this._mappings,e,this._makeProgressCallback())}catch(a){return this._error=a,void this._transition("error")}const o=this._ref.storage._makeRequest(s,ae,i,r);this._request=o,o.getPromise().then(t=>{this._increaseMultiplier(),this._request=void 0,this._updateProgress(t.current),t.finalized?(this._metadata=t.metadata,this._transition("success")):this.completeTransitions_()},this._errorHandler)})}_increaseMultiplier(){const t=Qt*this._chunkMultiplier;t<33554432&&(this._chunkMultiplier*=2)}_fetchMetadata(){this._resolveToken((t,e)=>{const n=Ft(this._ref.storage,this._ref._location,this._mappings),i=this._ref.storage._makeRequest(n,ae,t,e);this._request=i,i.getPromise().then(t=>{this._request=void 0,this._metadata=t,this._transition("success")},this._metadataErrorHandler)})}_oneShotUpload(){this._resolveToken((t,e)=>{const n=Wt(this._ref.storage,this._ref._location,this._mappings,this._blob,this._metadata),i=this._ref.storage._makeRequest(n,ae,t,e);this._request=i,i.getPromise().then(t=>{this._request=void 0,this._metadata=t,this._updateProgress(this._blob.size()),this._transition("success")},this._errorHandler)})}_updateProgress(t){const e=this._transferred;this._transferred=t,this._transferred!==e&&this._notifyObservers()}_transition(t){if(this._state!==t)switch(t){case"canceling":this._state=t,void 0!==this._request&&this._request.cancel();break;case"pausing":this._state=t,void 0!==this._request&&this._request.cancel();break;case"running":const e="paused"===this._state;this._state=t,e&&(this._notifyObservers(),this._start());break;case"paused":this._state=t,this._notifyObservers();break;case"canceled":this._error=w(),this._state=t,this._notifyObservers();break;case"error":this._state=t,this._notifyObservers();break;case"success":this._state=t,this._notifyObservers();break}}completeTransitions_(){switch(this._state){case"pausing":this._transition("paused");break;case"canceling":this._transition("canceled");break;case"running":this._start();break}}get snapshot(){const t=ee(this._state);return{bytesTransferred:this._transferred,totalBytes:this._blob.size(),state:t,metadata:this._metadata,task:this,ref:this._ref}}on(t,e,n,i){const r=new ne(e||void 0,n||void 0,i||void 0);return this._addObserver(r),()=>{this._removeObserver(r)}}then(t,e){return this._promise.then(t,e)}catch(t){return this.then(null,t)}_addObserver(t){this._observers.push(t),this._notifyObserver(t)}_removeObserver(t){const e=this._observers.indexOf(t);-1!==e&&this._observers.splice(e,1)}_notifyObservers(){this._finishPromise();const t=this._observers.slice();t.forEach(t=>{this._notifyObserver(t)})}_finishPromise(){if(void 0!==this._resolve){let t=!0;switch(ee(this._state)){case te.SUCCESS:ie(this._resolve.bind(null,this.snapshot))();break;case te.CANCELED:case te.ERROR:const e=this._reject;ie(e.bind(null,this._error))();break;default:t=!1;break}t&&(this._resolve=void 0,this._reject=void 0)}}_notifyObserver(t){const e=ee(this._state);switch(e){case te.RUNNING:case te.PAUSED:t.next&&ie(t.next.bind(t,this.snapshot))();break;case te.SUCCESS:t.complete&&ie(t.complete.bind(t))();break;case te.CANCELED:case te.ERROR:t.error&&ie(t.error.bind(t,this._error))();break;default:t.error&&ie(t.error.bind(t,this._error))()}}resume(){const t="paused"===this._state||"pausing"===this._state;return t&&this._transition("running"),t}pause(){const t="running"===this._state;return t&&this._transition("pausing"),t}cancel(){const t="running"===this._state||"pausing"===this._state;return t&&this._transition("canceling"),t}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ue{constructor(t,e){this._service=t,this._location=e instanceof R?e:R.makeFromUrl(e,t.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(t,e){return new ue(t,e)}get root(){const t=new R(this._location.bucket,"");return this._newRef(this._service,t)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return vt(this._location.path)}get storage(){return this._service}get parent(){const t=mt(this._location.path);if(null===t)return null;const e=new R(this._location.bucket,t);return new ue(this._service,e)}_throwIfRoot(t){if(""===this._location.path)throw C(t)}}function le(t,e,n){return t._throwIfRoot("uploadBytesResumable"),new ce(t,new ft(e),n)}function he(t){const e={prefixes:[],items:[]};return de(t,e).then(()=>e)}async function de(t,e,n){const i={pageToken:n},r=await fe(t,i);e.prefixes.push(...r.prefixes),e.items.push(...r.items),null!=r.nextPageToken&&await de(t,e,r.nextPageToken)}function fe(t,e){null!=e&&"number"===typeof e.maxResults&&U("options.maxResults",1,1e3,e.maxResults);const n=e||{},i=Bt(t.storage,t._location,"/",n.pageToken,n.maxResults);return t.storage.makeRequestWithTokens(i,ae)}function pe(t){t._throwIfRoot("getMetadata");const e=Ft(t.storage,t._location,Ot());return t.storage.makeRequestWithTokens(e,ae)}function me(t,e){t._throwIfRoot("updateMetadata");const n=Ut(t.storage,t._location,e,Ot());return t.storage.makeRequestWithTokens(n,ae)}function ge(t){t._throwIfRoot("getDownloadURL");const e=Vt(t.storage,t._location,Ot());return t.storage.makeRequestWithTokens(e,ae).then(t=>{if(null===t)throw T();return t})}function ve(t){t._throwIfRoot("deleteObject");const e=qt(t.storage,t._location);return t.storage.makeRequestWithTokens(e,ae)}function ye(t,e){const n=gt(t._location.path,e),i=new R(t._location.bucket,n);return new ue(t.storage,i)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function be(t){return/^[A-Za-z]+:\/\//.test(t)}function we(t,e){return new ue(t,e)}function _e(t,e){if(t instanceof ke){const n=t;if(null==n._bucket)throw I();const i=new ue(n,n._bucket);return null!=e?_e(i,e):i}return void 0!==e?ye(t,e):t}function Oe(t,e){if(e&&be(e)){if(t instanceof ke)return we(t,e);throw E("To use ref(service, url), the first argument must be a Storage instance.")}return _e(t,e)}function Ie(t,e){const n=null===e||void 0===e?void 0:e[c];return null==n?null:R.makeFromBucketSpec(n,t)}function Se(t,e,n,i={}){t.host=`${e}:${n}`,t._protocol="http";const{mockUserToken:r}=i;r&&(t._overrideAuthToken="string"===typeof r?r:Object(s["f"])(r,t.app.options.projectId))}class ke{constructor(t,e,n,i,r){this.app=t,this._authProvider=e,this._appCheckProvider=n,this._url=i,this._firebaseVersion=r,this._bucket=null,this._host=a,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=u,this._maxUploadRetryTime=l,this._requests=new Set,this._bucket=null!=i?R.makeFromBucketSpec(i,this._host):Ie(this._host,this.app.options)}get host(){return this._host}set host(t){this._host=t,null!=this._url?this._bucket=R.makeFromBucketSpec(this._url,t):this._bucket=Ie(t,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(t){U("time",0,Number.POSITIVE_INFINITY,t),this._maxUploadRetryTime=t}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(t){U("time",0,Number.POSITIVE_INFINITY,t),this._maxOperationRetryTime=t}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const t=this._authProvider.getImmediate({optional:!0});if(t){const e=await t.getToken();if(null!==e)return e.accessToken}return null}async _getAppCheckToken(){const t=this._appCheckProvider.getImmediate({optional:!0});if(t){const e=await t.getToken();return e.token}return null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(t=>t.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(t){return new ue(this,t)}_makeRequest(t,e,n,i){if(this._deleted)return new L(x());{const r=J(t,this._appId,n,i,e,this._firebaseVersion);return this._requests.add(r),r.getPromise().then(()=>this._requests.delete(r),()=>this._requests.delete(r)),r}}async makeRequestWithTokens(t,e){const[n,i]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(t,e,n,i).getPromise()}}const Te="@firebase/storage",Ee="0.9.2",xe="storage";function Ce(t,e,n){return t=Object(s["k"])(t),le(t,e,n)}function Ae(t){return t=Object(s["k"])(t),pe(t)}function je(t,e){return t=Object(s["k"])(t),me(t,e)}function Re(t,e){return t=Object(s["k"])(t),fe(t,e)}function Le(t){return t=Object(s["k"])(t),he(t)}function Ne(t){return t=Object(s["k"])(t),ge(t)}function De(t){return t=Object(s["k"])(t),ve(t)}function Pe(t,e){return t=Object(s["k"])(t),Oe(t,e)}function Me(t,e){return ye(t,e)}function $e(t,e,n,i={}){Se(t,e,n,i)}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fe(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),i=t.getProvider("auth-internal"),s=t.getProvider("app-check-internal");return new ke(n,i,s,e,r["SDK_VERSION"])}function Be(){Object(r["_registerComponent"])(new o["a"](xe,Fe,"PUBLIC").setMultipleInstances(!0)),Object(r["registerVersion"])(Te,Ee,""),Object(r["registerVersion"])(Te,Ee,"esm2017")}Be();
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ve{constructor(t,e,n){this._delegate=t,this.task=e,this.ref=n}get bytesTransferred(){return this._delegate.bytesTransferred}get metadata(){return this._delegate.metadata}get state(){return this._delegate.state}get totalBytes(){return this._delegate.totalBytes}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ue{constructor(t,e){this._delegate=t,this._ref=e,this.cancel=this._delegate.cancel.bind(this._delegate),this.catch=this._delegate.catch.bind(this._delegate),this.pause=this._delegate.pause.bind(this._delegate),this.resume=this._delegate.resume.bind(this._delegate)}get snapshot(){return new Ve(this._delegate.snapshot,this,this._ref)}then(t,e){return this._delegate.then(e=>{if(t)return t(new Ve(e,this,this._ref))},e)}on(t,e,n,i){let r=void 0;return e&&(r="function"===typeof e?t=>e(new Ve(t,this,this._ref)):{next:e.next?t=>e.next(new Ve(t,this,this._ref)):void 0,complete:e.complete||void 0,error:e.error||void 0}),this._delegate.on(t,r,n||void 0,i||void 0)}}class qe{constructor(t,e){this._delegate=t,this._service=e}get prefixes(){return this._delegate.prefixes.map(t=>new ze(t,this._service))}get items(){return this._delegate.items.map(t=>new ze(t,this._service))}get nextPageToken(){return this._delegate.nextPageToken||null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *  http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ze{constructor(t,e){this._delegate=t,this.storage=e}get name(){return this._delegate.name}get bucket(){return this._delegate.bucket}get fullPath(){return this._delegate.fullPath}toString(){return this._delegate.toString()}child(t){const e=Me(this._delegate,t);return new ze(e,this.storage)}get root(){return new ze(this._delegate.root,this.storage)}get parent(){const t=this._delegate.parent;return null==t?null:new ze(t,this.storage)}put(t,e){return this._throwIfRoot("put"),new Ue(Ce(this._delegate,t,e),this)}putString(t,e=it.RAW,n){this._throwIfRoot("putString");const i=st(e,t),r=Object.assign({},n);return null==r["contentType"]&&null!=i.contentType&&(r["contentType"]=i.contentType),new Ue(new ce(this._delegate,new ft(i.data,!0),r),this)}listAll(){return Le(this._delegate).then(t=>new qe(t,this.storage))}list(t){return Re(this._delegate,t||void 0).then(t=>new qe(t,this.storage))}getMetadata(){return Ae(this._delegate)}updateMetadata(t){return je(this._delegate,t)}getDownloadURL(){return Ne(this._delegate)}delete(){return this._throwIfRoot("delete"),De(this._delegate)}_throwIfRoot(t){if(""===this._delegate._location.path)throw C(t)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class He{constructor(t,e){this.app=t,this._delegate=e}get maxOperationRetryTime(){return this._delegate.maxOperationRetryTime}get maxUploadRetryTime(){return this._delegate.maxUploadRetryTime}ref(t){if(We(t))throw E("ref() expected a child path but got a URL, use refFromURL instead.");return new ze(Pe(this._delegate,t),this)}refFromURL(t){if(!We(t))throw E("refFromURL() expected a full URL but got a child path, use ref() instead.");try{R.makeFromUrl(t,this._delegate.host)}catch(e){throw E("refFromUrl() expected a valid full URL but got an invalid one.")}return new ze(Pe(this._delegate,t),this)}setMaxUploadRetryTime(t){this._delegate.maxUploadRetryTime=t}setMaxOperationRetryTime(t){this._delegate.maxOperationRetryTime=t}useEmulator(t,e,n={}){$e(this._delegate,t,e,n)}}function We(t){return/^[A-Za-z]+:\/\//.test(t)}const Ge="@firebase/storage-compat",Ke="0.1.10",Ye="storage-compat";function Xe(t,{instanceIdentifier:e}){const n=t.getProvider("app-compat").getImmediate(),i=t.getProvider("storage").getImmediate({identifier:e}),r=new He(n,i);return r}function Qe(t){const e={TaskState:te,TaskEvent:Zt,StringFormat:it,Storage:He,Reference:ze};t.INTERNAL.registerComponent(new o["a"](Ye,Xe,"PUBLIC").setServiceProps(e).setMultipleInstances(!0)),t.registerVersion(Ge,Ke)}Qe(i["a"])},2532:function(t,e,n){"use strict";var i=n("23e7"),r=n("e330"),s=n("5a34"),o=n("1d80"),a=n("577e"),c=n("ab13"),u=r("".indexOf);i({target:"String",proto:!0,forced:!c("includes")},{includes:function(t){return!!~u(a(o(this)),a(s(t)),arguments.length>1?arguments[1]:void 0)}})},"256a":function(t,e,n){"use strict";n("5994")},"25a8":function(t,e,n){},"25ae":function(t,e,n){
/*! For license information please see ckeditor.js.LICENSE.txt */
/*!*
* @license Copyright (c) 2003-2021, CKSource - Frederico Knabben. All rights reserved.
* For licensing, see LICENSE.md.
*/
!function(e,n){t.exports=n()}(window,(function(){return function(t){var e={};function n(i){if(e[i])return e[i].exports;var r=e[i]={i:i,l:!1,exports:{}};return t[i].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=t,n.c=e,n.d=function(t,e,i){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)n.d(i,r,function(e){return t[e]}.bind(null,r));return i},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=0)}([function(t,e,n){t.exports=n(1)},function(t,e,n){"use strict";function i(t,e){t.onload=function(){this.onerror=this.onload=null,e(null,t)},t.onerror=function(){this.onerror=this.onload=null,e(new Error("Failed to load "+this.src),t)}}function r(t,e){t.onreadystatechange=function(){"complete"!=this.readyState&&"loaded"!=this.readyState||(this.onreadystatechange=null,e(null,t))}}var s;function o(t,e){return"CKEDITOR"in window?Promise.resolve(CKEDITOR):"string"!=typeof t||t.length<1?Promise.reject(new TypeError("CKEditor URL must be a non-empty string.")):(s||(s=o.scriptLoader(t).then((function(t){return e&&e(t),t}))),s)}n.r(e),o.scriptLoader=function(t){return new Promise((function(e,n){!function(t,e,n){var s=document.head||document.getElementsByTagName("head")[0],o=document.createElement("script");"function"==typeof e&&(n=e,e={}),e=e||{},n=n||function(){},o.type=e.type||"text/javascript",o.charset=e.charset||"utf8",o.async=!("async"in e)||!!e.async,o.src=t,e.attrs&&function(t,e){for(var n in e)t.setAttribute(n,e[n])}(o,e.attrs),e.text&&(o.text=String(e.text)),("onload"in o?i:r)(o,n),o.onload||i(o,n),s.appendChild(o)}(t,(function(t){return s=void 0,t?n(t):window.CKEDITOR?void e(CKEDITOR):n(new Error("Script loaded from editorUrl doesn't provide CKEDITOR namespace."))}))}))};var a={name:"ckeditor",render(t){return t("div",{},[t(this.tagName)])},props:{value:{type:String,default:""},type:{type:String,default:"classic",validator:t=>["classic","inline"].includes(t)},editorUrl:{type:String,default:"https://cdn.ckeditor.com/4.17.1/standard-all/ckeditor.js"},config:{type:Object,default:()=>{}},tagName:{type:String,default:"textarea"},readOnly:{type:Boolean,default:null},throttle:{type:Number,default:80}},mounted(){o(this.editorUrl,t=>{this.$emit("namespaceloaded",t)}).then(()=>{if(this.$_destroyed)return;const t=this.prepareConfig(),e="inline"===this.type?"inline":"replace",n=this.$el.firstElementChild;CKEDITOR[e](n,t)})},beforeDestroy(){this.instance&&this.instance.destroy(),this.$_destroyed=!0},watch:{value(t){this.instance&&this.instance.getData()!==t&&this.instance.setData(t)},readOnly(t){this.instance&&this.instance.setReadOnly(t)}},methods:{prepareConfig(){const t=this.config||{};t.on=t.on||{},void 0===t.delayIfDetached&&(t.delayIfDetached=!0),null!==this.readOnly&&(t.readOnly=this.readOnly);const e=t.on.instanceReady;return t.on.instanceReady=t=>{this.instance=t.editor,this.$nextTick().then(()=>{this.prepareComponentData(),e&&e(t)})},t},prepareComponentData(){const t=this.value;this.instance.fire("lockSnapshot"),this.instance.setData(t,{callback:()=>{this.$_setUpEditorEvents();const e=this.instance.getData();t!==e?(this.$once("input",()=>{this.$emit("ready",this.instance)}),this.$emit("input",e)):this.$emit("ready",this.instance),this.instance.fire("unlockSnapshot")}})},$_setUpEditorEvents(){const t=this.instance,e=function(t,e){var n,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return function(){clearTimeout(n);for(var r=arguments.length,s=new Array(r),o=0;o<r;o++)s[o]=arguments[o];n=setTimeout(t.bind.apply(t,[i].concat(s)),e)}}(e=>{const n=t.getData();this.value!==n&&this.$emit("input",n,e,t)},this.throttle);t.on("change",e),t.on("focus",e=>{this.$emit("focus",e,t)}),t.on("blur",e=>{this.$emit("blur",e,t)})}}};const c={install(t){t.component("ckeditor",a)},component:a};e.default=c}]).default}))},"25f0":function(t,e,n){"use strict";var i=n("e330"),r=n("5e77").PROPER,s=n("6eeb"),o=n("825a"),a=n("3a9b"),c=n("577e"),u=n("d039"),l=n("ad6d"),h="toString",d=RegExp.prototype,f=d[h],p=i(l),m=u((function(){return"/a/b"!=f.call({source:"a",flags:"b"})})),g=r&&f.name!=h;(m||g)&&s(RegExp.prototype,h,(function(){var t=o(this),e=c(t.source),n=t.flags,i=c(void 0===n&&a(d,t)&&!("flags"in d)?p(t):n);return"/"+e+"/"+i}),{unsafe:!0})},2626:function(t,e,n){"use strict";var i=n("d066"),r=n("9bf2"),s=n("b622"),o=n("83ab"),a=s("species");t.exports=function(t){var e=i(t),n=r.f;o&&e&&!e[a]&&n(e,a,{configurable:!0,get:function(){return this}})}},"262e":function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));n("d9e2");function i(t,e){return i=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},i(t,e)}function r(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&i(t,e)}},2877:function(t,e,n){"use strict";function i(t,e,n,i,r,s,o,a){var c,u="function"===typeof t?t.options:t;if(e&&(u.render=e,u.staticRenderFns=n,u._compiled=!0),i&&(u.functional=!0),s&&(u._scopeId="data-v-"+s),o?(c=function(t){t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,t||"undefined"===typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),r&&r.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(o)},u._ssrRegister=c):r&&(c=a?function(){r.call(this,(u.functional?this.parent:this).$root.$options.shadowRoot)}:r),c)if(u.functional){u._injectStyles=c;var l=u.render;u.render=function(t,e){return c.call(e),l(t,e)}}else{var h=u.beforeCreate;u.beforeCreate=h?[].concat(h,c):[c]}return{exports:t,options:u}}n.d(e,"a",(function(){return i}))},2909:function(t,e,n){"use strict";n.d(e,"a",(function(){return c}));var i=n("6b75");function r(t){if(Array.isArray(t))return Object(i["a"])(t)}n("a4d3"),n("e01a"),n("d3b7"),n("d28b"),n("3ca3"),n("ddb0"),n("a630");function s(t){if("undefined"!==typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}var o=n("06c5");n("d9e2");function a(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function c(t){return r(t)||s(t)||Object(o["a"])(t)||a()}},"297c":function(t,e,n){"use strict";n("a9e3");var i=n("2b0e"),r=n("5530"),s=n("ade3"),o=(n("c7cd"),n("6ece"),n("0789")),a=n("90a2"),c=n("a9ad"),u=n("fe6c"),l=n("a452"),h=n("7560"),d=n("80d2"),f=n("58df"),p=Object(f["a"])(c["a"],Object(u["b"])(["absolute","fixed","top","bottom"]),l["a"],h["a"]),m=p.extend({name:"v-progress-linear",directives:{intersect:a["a"]},props:{active:{type:Boolean,default:!0},backgroundColor:{type:String,default:null},backgroundOpacity:{type:[Number,String],default:null},bufferValue:{type:[Number,String],default:100},color:{type:String,default:"primary"},height:{type:[Number,String],default:4},indeterminate:Boolean,query:Boolean,reverse:Boolean,rounded:Boolean,stream:Boolean,striped:Boolean,value:{type:[Number,String],default:0}},data:function(){return{internalLazyValue:this.value||0,isVisible:!0}},computed:{__cachedBackground:function(){return this.$createElement("div",this.setBackgroundColor(this.backgroundColor||this.color,{staticClass:"v-progress-linear__background",style:this.backgroundStyle}))},__cachedBar:function(){return this.$createElement(this.computedTransition,[this.__cachedBarType])},__cachedBarType:function(){return this.indeterminate?this.__cachedIndeterminate:this.__cachedDeterminate},__cachedBuffer:function(){return this.$createElement("div",{staticClass:"v-progress-linear__buffer",style:this.styles})},__cachedDeterminate:function(){return this.$createElement("div",this.setBackgroundColor(this.color,{staticClass:"v-progress-linear__determinate",style:{width:Object(d["h"])(this.normalizedValue,"%")}}))},__cachedIndeterminate:function(){return this.$createElement("div",{staticClass:"v-progress-linear__indeterminate",class:{"v-progress-linear__indeterminate--active":this.active}},[this.genProgressBar("long"),this.genProgressBar("short")])},__cachedStream:function(){return this.stream?this.$createElement("div",this.setTextColor(this.color,{staticClass:"v-progress-linear__stream",style:{width:Object(d["h"])(100-this.normalizedBuffer,"%")}})):null},backgroundStyle:function(){var t,e=null==this.backgroundOpacity?this.backgroundColor?1:.3:parseFloat(this.backgroundOpacity);return t={opacity:e},Object(s["a"])(t,this.isReversed?"right":"left",Object(d["h"])(this.normalizedValue,"%")),Object(s["a"])(t,"width",Object(d["h"])(Math.max(0,this.normalizedBuffer-this.normalizedValue),"%")),t},classes:function(){return Object(r["a"])({"v-progress-linear--absolute":this.absolute,"v-progress-linear--fixed":this.fixed,"v-progress-linear--query":this.query,"v-progress-linear--reactive":this.reactive,"v-progress-linear--reverse":this.isReversed,"v-progress-linear--rounded":this.rounded,"v-progress-linear--striped":this.striped,"v-progress-linear--visible":this.isVisible},this.themeClasses)},computedTransition:function(){return this.indeterminate?o["c"]:o["d"]},isReversed:function(){return this.$vuetify.rtl!==this.reverse},normalizedBuffer:function(){return this.normalize(this.bufferValue)},normalizedValue:function(){return this.normalize(this.internalLazyValue)},reactive:function(){return Boolean(this.$listeners.change)},styles:function(){var t={};return this.active||(t.height=0),this.indeterminate||100===parseFloat(this.normalizedBuffer)||(t.width=Object(d["h"])(this.normalizedBuffer,"%")),t}},methods:{genContent:function(){var t=Object(d["s"])(this,"default",{value:this.internalLazyValue});return t?this.$createElement("div",{staticClass:"v-progress-linear__content"},t):null},genListeners:function(){var t=this.$listeners;return this.reactive&&(t.click=this.onClick),t},genProgressBar:function(t){return this.$createElement("div",this.setBackgroundColor(this.color,{staticClass:"v-progress-linear__indeterminate",class:Object(s["a"])({},t,!0)}))},onClick:function(t){if(this.reactive){var e=this.$el.getBoundingClientRect(),n=e.width;this.internalValue=t.offsetX/n*100}},onObserve:function(t,e,n){this.isVisible=n},normalize:function(t){return t<0?0:t>100?100:parseFloat(t)}},render:function(t){var e={staticClass:"v-progress-linear",attrs:{role:"progressbar","aria-valuemin":0,"aria-valuemax":this.normalizedBuffer,"aria-valuenow":this.indeterminate?void 0:this.normalizedValue},class:this.classes,directives:[{name:"intersect",value:this.onObserve}],style:{bottom:this.bottom?0:void 0,height:this.active?Object(d["h"])(this.height):0,top:this.top?0:void 0},on:this.genListeners()};return t("div",e,[this.__cachedStream,this.__cachedBackground,this.__cachedBuffer,this.__cachedBar,this.genContent()])}}),g=m;e["a"]=i["a"].extend().extend({name:"loadable",props:{loading:{type:[Boolean,String],default:!1},loaderHeight:{type:[Number,String],default:2}},methods:{genProgress:function(){return!1===this.loading?null:this.$slots.progress||this.$createElement(g,{props:{absolute:!0,color:!0===this.loading||""===this.loading?this.color||"primary":this.loading,height:this.loaderHeight,indeterminate:!0}})}}})},"2a62":function(t,e,n){var i=n("c65b"),r=n("825a"),s=n("dc4a");t.exports=function(t,e,n){var o,a;r(t);try{if(o=s(t,"return"),!o){if("throw"===e)throw n;return n}o=i(o,t)}catch(c){a=!0,o=c}if("throw"===e)throw n;if(a)throw o;return r(o),n}},"2a7f":function(t,e,n){"use strict";n.d(e,"a",(function(){return s}));var i=n("71d9"),r=n("80d2"),s=Object(r["i"])("v-toolbar__title"),o=Object(r["i"])("v-toolbar__items");i["a"]},"2b0e":function(t,e,n){"use strict";(function(t){
/*!
 * Vue.js v2.6.14
 * (c) 2014-2021 Evan You
 * Released under the MIT License.
 */
var n=Object.freeze({});function i(t){return void 0===t||null===t}function r(t){return void 0!==t&&null!==t}function s(t){return!0===t}function o(t){return!1===t}function a(t){return"string"===typeof t||"number"===typeof t||"symbol"===typeof t||"boolean"===typeof t}function c(t){return null!==t&&"object"===typeof t}var u=Object.prototype.toString;function l(t){return"[object Object]"===u.call(t)}function h(t){return"[object RegExp]"===u.call(t)}function d(t){var e=parseFloat(String(t));return e>=0&&Math.floor(e)===e&&isFinite(t)}function f(t){return r(t)&&"function"===typeof t.then&&"function"===typeof t.catch}function p(t){return null==t?"":Array.isArray(t)||l(t)&&t.toString===u?JSON.stringify(t,null,2):String(t)}function m(t){var e=parseFloat(t);return isNaN(e)?t:e}function g(t,e){for(var n=Object.create(null),i=t.split(","),r=0;r<i.length;r++)n[i[r]]=!0;return e?function(t){return n[t.toLowerCase()]}:function(t){return n[t]}}g("slot,component",!0);var v=g("key,ref,slot,slot-scope,is");function y(t,e){if(t.length){var n=t.indexOf(e);if(n>-1)return t.splice(n,1)}}var b=Object.prototype.hasOwnProperty;function w(t,e){return b.call(t,e)}function _(t){var e=Object.create(null);return function(n){var i=e[n];return i||(e[n]=t(n))}}var O=/-(\w)/g,I=_((function(t){return t.replace(O,(function(t,e){return e?e.toUpperCase():""}))})),S=_((function(t){return t.charAt(0).toUpperCase()+t.slice(1)})),k=/\B([A-Z])/g,T=_((function(t){return t.replace(k,"-$1").toLowerCase()}));function E(t,e){function n(n){var i=arguments.length;return i?i>1?t.apply(e,arguments):t.call(e,n):t.call(e)}return n._length=t.length,n}function x(t,e){return t.bind(e)}var C=Function.prototype.bind?x:E;function A(t,e){e=e||0;var n=t.length-e,i=new Array(n);while(n--)i[n]=t[n+e];return i}function j(t,e){for(var n in e)t[n]=e[n];return t}function R(t){for(var e={},n=0;n<t.length;n++)t[n]&&j(e,t[n]);return e}function L(t,e,n){}var N=function(t,e,n){return!1},D=function(t){return t};function P(t,e){if(t===e)return!0;var n=c(t),i=c(e);if(!n||!i)return!n&&!i&&String(t)===String(e);try{var r=Array.isArray(t),s=Array.isArray(e);if(r&&s)return t.length===e.length&&t.every((function(t,n){return P(t,e[n])}));if(t instanceof Date&&e instanceof Date)return t.getTime()===e.getTime();if(r||s)return!1;var o=Object.keys(t),a=Object.keys(e);return o.length===a.length&&o.every((function(n){return P(t[n],e[n])}))}catch(u){return!1}}function M(t,e){for(var n=0;n<t.length;n++)if(P(t[n],e))return n;return-1}function $(t){var e=!1;return function(){e||(e=!0,t.apply(this,arguments))}}var F="data-server-rendered",B=["component","directive","filter"],V=["beforeCreate","created","beforeMount","mounted","beforeUpdate","updated","beforeDestroy","destroyed","activated","deactivated","errorCaptured","serverPrefetch"],U={optionMergeStrategies:Object.create(null),silent:!1,productionTip:!1,devtools:!1,performance:!1,errorHandler:null,warnHandler:null,ignoredElements:[],keyCodes:Object.create(null),isReservedTag:N,isReservedAttr:N,isUnknownElement:N,getTagNamespace:L,parsePlatformTagName:D,mustUseProp:N,async:!0,_lifecycleHooks:V},q=/a-zA-Z\u00B7\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u037D\u037F-\u1FFF\u200C-\u200D\u203F-\u2040\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD/;function z(t){var e=(t+"").charCodeAt(0);return 36===e||95===e}function H(t,e,n,i){Object.defineProperty(t,e,{value:n,enumerable:!!i,writable:!0,configurable:!0})}var W=new RegExp("[^"+q.source+".$_\\d]");function G(t){if(!W.test(t)){var e=t.split(".");return function(t){for(var n=0;n<e.length;n++){if(!t)return;t=t[e[n]]}return t}}}var K,Y="__proto__"in{},X="undefined"!==typeof window,Q="undefined"!==typeof WXEnvironment&&!!WXEnvironment.platform,J=Q&&WXEnvironment.platform.toLowerCase(),Z=X&&window.navigator.userAgent.toLowerCase(),tt=Z&&/msie|trident/.test(Z),et=Z&&Z.indexOf("msie 9.0")>0,nt=Z&&Z.indexOf("edge/")>0,it=(Z&&Z.indexOf("android"),Z&&/iphone|ipad|ipod|ios/.test(Z)||"ios"===J),rt=(Z&&/chrome\/\d+/.test(Z),Z&&/phantomjs/.test(Z),Z&&Z.match(/firefox\/(\d+)/)),st={}.watch,ot=!1;if(X)try{var at={};Object.defineProperty(at,"passive",{get:function(){ot=!0}}),window.addEventListener("test-passive",null,at)}catch(So){}var ct=function(){return void 0===K&&(K=!X&&!Q&&"undefined"!==typeof t&&(t["process"]&&"server"===t["process"].env.VUE_ENV)),K},ut=X&&window.__VUE_DEVTOOLS_GLOBAL_HOOK__;function lt(t){return"function"===typeof t&&/native code/.test(t.toString())}var ht,dt="undefined"!==typeof Symbol&&lt(Symbol)&&"undefined"!==typeof Reflect&&lt(Reflect.ownKeys);ht="undefined"!==typeof Set&&lt(Set)?Set:function(){function t(){this.set=Object.create(null)}return t.prototype.has=function(t){return!0===this.set[t]},t.prototype.add=function(t){this.set[t]=!0},t.prototype.clear=function(){this.set=Object.create(null)},t}();var ft=L,pt=0,mt=function(){this.id=pt++,this.subs=[]};mt.prototype.addSub=function(t){this.subs.push(t)},mt.prototype.removeSub=function(t){y(this.subs,t)},mt.prototype.depend=function(){mt.target&&mt.target.addDep(this)},mt.prototype.notify=function(){var t=this.subs.slice();for(var e=0,n=t.length;e<n;e++)t[e].update()},mt.target=null;var gt=[];function vt(t){gt.push(t),mt.target=t}function yt(){gt.pop(),mt.target=gt[gt.length-1]}var bt=function(t,e,n,i,r,s,o,a){this.tag=t,this.data=e,this.children=n,this.text=i,this.elm=r,this.ns=void 0,this.context=s,this.fnContext=void 0,this.fnOptions=void 0,this.fnScopeId=void 0,this.key=e&&e.key,this.componentOptions=o,this.componentInstance=void 0,this.parent=void 0,this.raw=!1,this.isStatic=!1,this.isRootInsert=!0,this.isComment=!1,this.isCloned=!1,this.isOnce=!1,this.asyncFactory=a,this.asyncMeta=void 0,this.isAsyncPlaceholder=!1},wt={child:{configurable:!0}};wt.child.get=function(){return this.componentInstance},Object.defineProperties(bt.prototype,wt);var _t=function(t){void 0===t&&(t="");var e=new bt;return e.text=t,e.isComment=!0,e};function Ot(t){return new bt(void 0,void 0,void 0,String(t))}function It(t){var e=new bt(t.tag,t.data,t.children&&t.children.slice(),t.text,t.elm,t.context,t.componentOptions,t.asyncFactory);return e.ns=t.ns,e.isStatic=t.isStatic,e.key=t.key,e.isComment=t.isComment,e.fnContext=t.fnContext,e.fnOptions=t.fnOptions,e.fnScopeId=t.fnScopeId,e.asyncMeta=t.asyncMeta,e.isCloned=!0,e}var St=Array.prototype,kt=Object.create(St),Tt=["push","pop","shift","unshift","splice","sort","reverse"];Tt.forEach((function(t){var e=St[t];H(kt,t,(function(){var n=[],i=arguments.length;while(i--)n[i]=arguments[i];var r,s=e.apply(this,n),o=this.__ob__;switch(t){case"push":case"unshift":r=n;break;case"splice":r=n.slice(2);break}return r&&o.observeArray(r),o.dep.notify(),s}))}));var Et=Object.getOwnPropertyNames(kt),xt=!0;function Ct(t){xt=t}var At=function(t){this.value=t,this.dep=new mt,this.vmCount=0,H(t,"__ob__",this),Array.isArray(t)?(Y?jt(t,kt):Rt(t,kt,Et),this.observeArray(t)):this.walk(t)};function jt(t,e){t.__proto__=e}function Rt(t,e,n){for(var i=0,r=n.length;i<r;i++){var s=n[i];H(t,s,e[s])}}function Lt(t,e){var n;if(c(t)&&!(t instanceof bt))return w(t,"__ob__")&&t.__ob__ instanceof At?n=t.__ob__:xt&&!ct()&&(Array.isArray(t)||l(t))&&Object.isExtensible(t)&&!t._isVue&&(n=new At(t)),e&&n&&n.vmCount++,n}function Nt(t,e,n,i,r){var s=new mt,o=Object.getOwnPropertyDescriptor(t,e);if(!o||!1!==o.configurable){var a=o&&o.get,c=o&&o.set;a&&!c||2!==arguments.length||(n=t[e]);var u=!r&&Lt(n);Object.defineProperty(t,e,{enumerable:!0,configurable:!0,get:function(){var e=a?a.call(t):n;return mt.target&&(s.depend(),u&&(u.dep.depend(),Array.isArray(e)&&Mt(e))),e},set:function(e){var i=a?a.call(t):n;e===i||e!==e&&i!==i||a&&!c||(c?c.call(t,e):n=e,u=!r&&Lt(e),s.notify())}})}}function Dt(t,e,n){if(Array.isArray(t)&&d(e))return t.length=Math.max(t.length,e),t.splice(e,1,n),n;if(e in t&&!(e in Object.prototype))return t[e]=n,n;var i=t.__ob__;return t._isVue||i&&i.vmCount?n:i?(Nt(i.value,e,n),i.dep.notify(),n):(t[e]=n,n)}function Pt(t,e){if(Array.isArray(t)&&d(e))t.splice(e,1);else{var n=t.__ob__;t._isVue||n&&n.vmCount||w(t,e)&&(delete t[e],n&&n.dep.notify())}}function Mt(t){for(var e=void 0,n=0,i=t.length;n<i;n++)e=t[n],e&&e.__ob__&&e.__ob__.dep.depend(),Array.isArray(e)&&Mt(e)}At.prototype.walk=function(t){for(var e=Object.keys(t),n=0;n<e.length;n++)Nt(t,e[n])},At.prototype.observeArray=function(t){for(var e=0,n=t.length;e<n;e++)Lt(t[e])};var $t=U.optionMergeStrategies;function Ft(t,e){if(!e)return t;for(var n,i,r,s=dt?Reflect.ownKeys(e):Object.keys(e),o=0;o<s.length;o++)n=s[o],"__ob__"!==n&&(i=t[n],r=e[n],w(t,n)?i!==r&&l(i)&&l(r)&&Ft(i,r):Dt(t,n,r));return t}function Bt(t,e,n){return n?function(){var i="function"===typeof e?e.call(n,n):e,r="function"===typeof t?t.call(n,n):t;return i?Ft(i,r):r}:e?t?function(){return Ft("function"===typeof e?e.call(this,this):e,"function"===typeof t?t.call(this,this):t)}:e:t}function Vt(t,e){var n=e?t?t.concat(e):Array.isArray(e)?e:[e]:t;return n?Ut(n):n}function Ut(t){for(var e=[],n=0;n<t.length;n++)-1===e.indexOf(t[n])&&e.push(t[n]);return e}function qt(t,e,n,i){var r=Object.create(t||null);return e?j(r,e):r}$t.data=function(t,e,n){return n?Bt(t,e,n):e&&"function"!==typeof e?t:Bt(t,e)},V.forEach((function(t){$t[t]=Vt})),B.forEach((function(t){$t[t+"s"]=qt})),$t.watch=function(t,e,n,i){if(t===st&&(t=void 0),e===st&&(e=void 0),!e)return Object.create(t||null);if(!t)return e;var r={};for(var s in j(r,t),e){var o=r[s],a=e[s];o&&!Array.isArray(o)&&(o=[o]),r[s]=o?o.concat(a):Array.isArray(a)?a:[a]}return r},$t.props=$t.methods=$t.inject=$t.computed=function(t,e,n,i){if(!t)return e;var r=Object.create(null);return j(r,t),e&&j(r,e),r},$t.provide=Bt;var zt=function(t,e){return void 0===e?t:e};function Ht(t,e){var n=t.props;if(n){var i,r,s,o={};if(Array.isArray(n)){i=n.length;while(i--)r=n[i],"string"===typeof r&&(s=I(r),o[s]={type:null})}else if(l(n))for(var a in n)r=n[a],s=I(a),o[s]=l(r)?r:{type:r};else 0;t.props=o}}function Wt(t,e){var n=t.inject;if(n){var i=t.inject={};if(Array.isArray(n))for(var r=0;r<n.length;r++)i[n[r]]={from:n[r]};else if(l(n))for(var s in n){var o=n[s];i[s]=l(o)?j({from:s},o):{from:o}}else 0}}function Gt(t){var e=t.directives;if(e)for(var n in e){var i=e[n];"function"===typeof i&&(e[n]={bind:i,update:i})}}function Kt(t,e,n){if("function"===typeof e&&(e=e.options),Ht(e,n),Wt(e,n),Gt(e),!e._base&&(e.extends&&(t=Kt(t,e.extends,n)),e.mixins))for(var i=0,r=e.mixins.length;i<r;i++)t=Kt(t,e.mixins[i],n);var s,o={};for(s in t)a(s);for(s in e)w(t,s)||a(s);function a(i){var r=$t[i]||zt;o[i]=r(t[i],e[i],n,i)}return o}function Yt(t,e,n,i){if("string"===typeof n){var r=t[e];if(w(r,n))return r[n];var s=I(n);if(w(r,s))return r[s];var o=S(s);if(w(r,o))return r[o];var a=r[n]||r[s]||r[o];return a}}function Xt(t,e,n,i){var r=e[t],s=!w(n,t),o=n[t],a=ee(Boolean,r.type);if(a>-1)if(s&&!w(r,"default"))o=!1;else if(""===o||o===T(t)){var c=ee(String,r.type);(c<0||a<c)&&(o=!0)}if(void 0===o){o=Qt(i,r,t);var u=xt;Ct(!0),Lt(o),Ct(u)}return o}function Qt(t,e,n){if(w(e,"default")){var i=e.default;return t&&t.$options.propsData&&void 0===t.$options.propsData[n]&&void 0!==t._props[n]?t._props[n]:"function"===typeof i&&"Function"!==Zt(e.type)?i.call(t):i}}var Jt=/^\s*function (\w+)/;function Zt(t){var e=t&&t.toString().match(Jt);return e?e[1]:""}function te(t,e){return Zt(t)===Zt(e)}function ee(t,e){if(!Array.isArray(e))return te(e,t)?0:-1;for(var n=0,i=e.length;n<i;n++)if(te(e[n],t))return n;return-1}function ne(t,e,n){vt();try{if(e){var i=e;while(i=i.$parent){var r=i.$options.errorCaptured;if(r)for(var s=0;s<r.length;s++)try{var o=!1===r[s].call(i,t,e,n);if(o)return}catch(So){re(So,i,"errorCaptured hook")}}}re(t,e,n)}finally{yt()}}function ie(t,e,n,i,r){var s;try{s=n?t.apply(e,n):t.call(e),s&&!s._isVue&&f(s)&&!s._handled&&(s.catch((function(t){return ne(t,i,r+" (Promise/async)")})),s._handled=!0)}catch(So){ne(So,i,r)}return s}function re(t,e,n){if(U.errorHandler)try{return U.errorHandler.call(null,t,e,n)}catch(So){So!==t&&se(So,null,"config.errorHandler")}se(t,e,n)}function se(t,e,n){if(!X&&!Q||"undefined"===typeof console)throw t;console.error(t)}var oe,ae=!1,ce=[],ue=!1;function le(){ue=!1;var t=ce.slice(0);ce.length=0;for(var e=0;e<t.length;e++)t[e]()}if("undefined"!==typeof Promise&&lt(Promise)){var he=Promise.resolve();oe=function(){he.then(le),it&&setTimeout(L)},ae=!0}else if(tt||"undefined"===typeof MutationObserver||!lt(MutationObserver)&&"[object MutationObserverConstructor]"!==MutationObserver.toString())oe="undefined"!==typeof setImmediate&&lt(setImmediate)?function(){setImmediate(le)}:function(){setTimeout(le,0)};else{var de=1,fe=new MutationObserver(le),pe=document.createTextNode(String(de));fe.observe(pe,{characterData:!0}),oe=function(){de=(de+1)%2,pe.data=String(de)},ae=!0}function me(t,e){var n;if(ce.push((function(){if(t)try{t.call(e)}catch(So){ne(So,e,"nextTick")}else n&&n(e)})),ue||(ue=!0,oe()),!t&&"undefined"!==typeof Promise)return new Promise((function(t){n=t}))}var ge=new ht;function ve(t){ye(t,ge),ge.clear()}function ye(t,e){var n,i,r=Array.isArray(t);if(!(!r&&!c(t)||Object.isFrozen(t)||t instanceof bt)){if(t.__ob__){var s=t.__ob__.dep.id;if(e.has(s))return;e.add(s)}if(r){n=t.length;while(n--)ye(t[n],e)}else{i=Object.keys(t),n=i.length;while(n--)ye(t[i[n]],e)}}}var be=_((function(t){var e="&"===t.charAt(0);t=e?t.slice(1):t;var n="~"===t.charAt(0);t=n?t.slice(1):t;var i="!"===t.charAt(0);return t=i?t.slice(1):t,{name:t,once:n,capture:i,passive:e}}));function we(t,e){function n(){var t=arguments,i=n.fns;if(!Array.isArray(i))return ie(i,null,arguments,e,"v-on handler");for(var r=i.slice(),s=0;s<r.length;s++)ie(r[s],null,t,e,"v-on handler")}return n.fns=t,n}function _e(t,e,n,r,o,a){var c,u,l,h;for(c in t)u=t[c],l=e[c],h=be(c),i(u)||(i(l)?(i(u.fns)&&(u=t[c]=we(u,a)),s(h.once)&&(u=t[c]=o(h.name,u,h.capture)),n(h.name,u,h.capture,h.passive,h.params)):u!==l&&(l.fns=u,t[c]=l));for(c in e)i(t[c])&&(h=be(c),r(h.name,e[c],h.capture))}function Oe(t,e,n){var o;t instanceof bt&&(t=t.data.hook||(t.data.hook={}));var a=t[e];function c(){n.apply(this,arguments),y(o.fns,c)}i(a)?o=we([c]):r(a.fns)&&s(a.merged)?(o=a,o.fns.push(c)):o=we([a,c]),o.merged=!0,t[e]=o}function Ie(t,e,n){var s=e.options.props;if(!i(s)){var o={},a=t.attrs,c=t.props;if(r(a)||r(c))for(var u in s){var l=T(u);Se(o,c,u,l,!0)||Se(o,a,u,l,!1)}return o}}function Se(t,e,n,i,s){if(r(e)){if(w(e,n))return t[n]=e[n],s||delete e[n],!0;if(w(e,i))return t[n]=e[i],s||delete e[i],!0}return!1}function ke(t){for(var e=0;e<t.length;e++)if(Array.isArray(t[e]))return Array.prototype.concat.apply([],t);return t}function Te(t){return a(t)?[Ot(t)]:Array.isArray(t)?xe(t):void 0}function Ee(t){return r(t)&&r(t.text)&&o(t.isComment)}function xe(t,e){var n,o,c,u,l=[];for(n=0;n<t.length;n++)o=t[n],i(o)||"boolean"===typeof o||(c=l.length-1,u=l[c],Array.isArray(o)?o.length>0&&(o=xe(o,(e||"")+"_"+n),Ee(o[0])&&Ee(u)&&(l[c]=Ot(u.text+o[0].text),o.shift()),l.push.apply(l,o)):a(o)?Ee(u)?l[c]=Ot(u.text+o):""!==o&&l.push(Ot(o)):Ee(o)&&Ee(u)?l[c]=Ot(u.text+o.text):(s(t._isVList)&&r(o.tag)&&i(o.key)&&r(e)&&(o.key="__vlist"+e+"_"+n+"__"),l.push(o)));return l}function Ce(t){var e=t.$options.provide;e&&(t._provided="function"===typeof e?e.call(t):e)}function Ae(t){var e=je(t.$options.inject,t);e&&(Ct(!1),Object.keys(e).forEach((function(n){Nt(t,n,e[n])})),Ct(!0))}function je(t,e){if(t){for(var n=Object.create(null),i=dt?Reflect.ownKeys(t):Object.keys(t),r=0;r<i.length;r++){var s=i[r];if("__ob__"!==s){var o=t[s].from,a=e;while(a){if(a._provided&&w(a._provided,o)){n[s]=a._provided[o];break}a=a.$parent}if(!a)if("default"in t[s]){var c=t[s].default;n[s]="function"===typeof c?c.call(e):c}else 0}}return n}}function Re(t,e){if(!t||!t.length)return{};for(var n={},i=0,r=t.length;i<r;i++){var s=t[i],o=s.data;if(o&&o.attrs&&o.attrs.slot&&delete o.attrs.slot,s.context!==e&&s.fnContext!==e||!o||null==o.slot)(n.default||(n.default=[])).push(s);else{var a=o.slot,c=n[a]||(n[a]=[]);"template"===s.tag?c.push.apply(c,s.children||[]):c.push(s)}}for(var u in n)n[u].every(Le)&&delete n[u];return n}function Le(t){return t.isComment&&!t.asyncFactory||" "===t.text}function Ne(t){return t.isComment&&t.asyncFactory}function De(t,e,i){var r,s=Object.keys(e).length>0,o=t?!!t.$stable:!s,a=t&&t.$key;if(t){if(t._normalized)return t._normalized;if(o&&i&&i!==n&&a===i.$key&&!s&&!i.$hasNormal)return i;for(var c in r={},t)t[c]&&"$"!==c[0]&&(r[c]=Pe(e,c,t[c]))}else r={};for(var u in e)u in r||(r[u]=Me(e,u));return t&&Object.isExtensible(t)&&(t._normalized=r),H(r,"$stable",o),H(r,"$key",a),H(r,"$hasNormal",s),r}function Pe(t,e,n){var i=function(){var t=arguments.length?n.apply(null,arguments):n({});t=t&&"object"===typeof t&&!Array.isArray(t)?[t]:Te(t);var e=t&&t[0];return t&&(!e||1===t.length&&e.isComment&&!Ne(e))?void 0:t};return n.proxy&&Object.defineProperty(t,e,{get:i,enumerable:!0,configurable:!0}),i}function Me(t,e){return function(){return t[e]}}function $e(t,e){var n,i,s,o,a;if(Array.isArray(t)||"string"===typeof t)for(n=new Array(t.length),i=0,s=t.length;i<s;i++)n[i]=e(t[i],i);else if("number"===typeof t)for(n=new Array(t),i=0;i<t;i++)n[i]=e(i+1,i);else if(c(t))if(dt&&t[Symbol.iterator]){n=[];var u=t[Symbol.iterator](),l=u.next();while(!l.done)n.push(e(l.value,n.length)),l=u.next()}else for(o=Object.keys(t),n=new Array(o.length),i=0,s=o.length;i<s;i++)a=o[i],n[i]=e(t[a],a,i);return r(n)||(n=[]),n._isVList=!0,n}function Fe(t,e,n,i){var r,s=this.$scopedSlots[t];s?(n=n||{},i&&(n=j(j({},i),n)),r=s(n)||("function"===typeof e?e():e)):r=this.$slots[t]||("function"===typeof e?e():e);var o=n&&n.slot;return o?this.$createElement("template",{slot:o},r):r}function Be(t){return Yt(this.$options,"filters",t,!0)||D}function Ve(t,e){return Array.isArray(t)?-1===t.indexOf(e):t!==e}function Ue(t,e,n,i,r){var s=U.keyCodes[e]||n;return r&&i&&!U.keyCodes[e]?Ve(r,i):s?Ve(s,t):i?T(i)!==e:void 0===t}function qe(t,e,n,i,r){if(n)if(c(n)){var s;Array.isArray(n)&&(n=R(n));var o=function(o){if("class"===o||"style"===o||v(o))s=t;else{var a=t.attrs&&t.attrs.type;s=i||U.mustUseProp(e,a,o)?t.domProps||(t.domProps={}):t.attrs||(t.attrs={})}var c=I(o),u=T(o);if(!(c in s)&&!(u in s)&&(s[o]=n[o],r)){var l=t.on||(t.on={});l["update:"+o]=function(t){n[o]=t}}};for(var a in n)o(a)}else;return t}function ze(t,e){var n=this._staticTrees||(this._staticTrees=[]),i=n[t];return i&&!e||(i=n[t]=this.$options.staticRenderFns[t].call(this._renderProxy,null,this),We(i,"__static__"+t,!1)),i}function He(t,e,n){return We(t,"__once__"+e+(n?"_"+n:""),!0),t}function We(t,e,n){if(Array.isArray(t))for(var i=0;i<t.length;i++)t[i]&&"string"!==typeof t[i]&&Ge(t[i],e+"_"+i,n);else Ge(t,e,n)}function Ge(t,e,n){t.isStatic=!0,t.key=e,t.isOnce=n}function Ke(t,e){if(e)if(l(e)){var n=t.on=t.on?j({},t.on):{};for(var i in e){var r=n[i],s=e[i];n[i]=r?[].concat(r,s):s}}else;return t}function Ye(t,e,n,i){e=e||{$stable:!n};for(var r=0;r<t.length;r++){var s=t[r];Array.isArray(s)?Ye(s,e,n):s&&(s.proxy&&(s.fn.proxy=!0),e[s.key]=s.fn)}return i&&(e.$key=i),e}function Xe(t,e){for(var n=0;n<e.length;n+=2){var i=e[n];"string"===typeof i&&i&&(t[e[n]]=e[n+1])}return t}function Qe(t,e){return"string"===typeof t?e+t:t}function Je(t){t._o=He,t._n=m,t._s=p,t._l=$e,t._t=Fe,t._q=P,t._i=M,t._m=ze,t._f=Be,t._k=Ue,t._b=qe,t._v=Ot,t._e=_t,t._u=Ye,t._g=Ke,t._d=Xe,t._p=Qe}function Ze(t,e,i,r,o){var a,c=this,u=o.options;w(r,"_uid")?(a=Object.create(r),a._original=r):(a=r,r=r._original);var l=s(u._compiled),h=!l;this.data=t,this.props=e,this.children=i,this.parent=r,this.listeners=t.on||n,this.injections=je(u.inject,r),this.slots=function(){return c.$slots||De(t.scopedSlots,c.$slots=Re(i,r)),c.$slots},Object.defineProperty(this,"scopedSlots",{enumerable:!0,get:function(){return De(t.scopedSlots,this.slots())}}),l&&(this.$options=u,this.$slots=this.slots(),this.$scopedSlots=De(t.scopedSlots,this.$slots)),u._scopeId?this._c=function(t,e,n,i){var s=fn(a,t,e,n,i,h);return s&&!Array.isArray(s)&&(s.fnScopeId=u._scopeId,s.fnContext=r),s}:this._c=function(t,e,n,i){return fn(a,t,e,n,i,h)}}function tn(t,e,i,s,o){var a=t.options,c={},u=a.props;if(r(u))for(var l in u)c[l]=Xt(l,u,e||n);else r(i.attrs)&&nn(c,i.attrs),r(i.props)&&nn(c,i.props);var h=new Ze(i,c,o,s,t),d=a.render.call(null,h._c,h);if(d instanceof bt)return en(d,i,h.parent,a,h);if(Array.isArray(d)){for(var f=Te(d)||[],p=new Array(f.length),m=0;m<f.length;m++)p[m]=en(f[m],i,h.parent,a,h);return p}}function en(t,e,n,i,r){var s=It(t);return s.fnContext=n,s.fnOptions=i,e.slot&&((s.data||(s.data={})).slot=e.slot),s}function nn(t,e){for(var n in e)t[I(n)]=e[n]}Je(Ze.prototype);var rn={init:function(t,e){if(t.componentInstance&&!t.componentInstance._isDestroyed&&t.data.keepAlive){var n=t;rn.prepatch(n,n)}else{var i=t.componentInstance=an(t,jn);i.$mount(e?t.elm:void 0,e)}},prepatch:function(t,e){var n=e.componentOptions,i=e.componentInstance=t.componentInstance;Pn(i,n.propsData,n.listeners,e,n.children)},insert:function(t){var e=t.context,n=t.componentInstance;n._isMounted||(n._isMounted=!0,Bn(n,"mounted")),t.data.keepAlive&&(e._isMounted?Zn(n):$n(n,!0))},destroy:function(t){var e=t.componentInstance;e._isDestroyed||(t.data.keepAlive?Fn(e,!0):e.$destroy())}},sn=Object.keys(rn);function on(t,e,n,o,a){if(!i(t)){var u=n.$options._base;if(c(t)&&(t=u.extend(t)),"function"===typeof t){var l;if(i(t.cid)&&(l=t,t=In(l,u),void 0===t))return On(l,e,n,o,a);e=e||{},Oi(t),r(e.model)&&ln(t.options,e);var h=Ie(e,t,a);if(s(t.options.functional))return tn(t,h,e,n,o);var d=e.on;if(e.on=e.nativeOn,s(t.options.abstract)){var f=e.slot;e={},f&&(e.slot=f)}cn(e);var p=t.options.name||a,m=new bt("vue-component-"+t.cid+(p?"-"+p:""),e,void 0,void 0,void 0,n,{Ctor:t,propsData:h,listeners:d,tag:a,children:o},l);return m}}}function an(t,e){var n={_isComponent:!0,_parentVnode:t,parent:e},i=t.data.inlineTemplate;return r(i)&&(n.render=i.render,n.staticRenderFns=i.staticRenderFns),new t.componentOptions.Ctor(n)}function cn(t){for(var e=t.hook||(t.hook={}),n=0;n<sn.length;n++){var i=sn[n],r=e[i],s=rn[i];r===s||r&&r._merged||(e[i]=r?un(s,r):s)}}function un(t,e){var n=function(n,i){t(n,i),e(n,i)};return n._merged=!0,n}function ln(t,e){var n=t.model&&t.model.prop||"value",i=t.model&&t.model.event||"input";(e.attrs||(e.attrs={}))[n]=e.model.value;var s=e.on||(e.on={}),o=s[i],a=e.model.callback;r(o)?(Array.isArray(o)?-1===o.indexOf(a):o!==a)&&(s[i]=[a].concat(o)):s[i]=a}var hn=1,dn=2;function fn(t,e,n,i,r,o){return(Array.isArray(n)||a(n))&&(r=i,i=n,n=void 0),s(o)&&(r=dn),pn(t,e,n,i,r)}function pn(t,e,n,i,s){if(r(n)&&r(n.__ob__))return _t();if(r(n)&&r(n.is)&&(e=n.is),!e)return _t();var o,a,c;(Array.isArray(i)&&"function"===typeof i[0]&&(n=n||{},n.scopedSlots={default:i[0]},i.length=0),s===dn?i=Te(i):s===hn&&(i=ke(i)),"string"===typeof e)?(a=t.$vnode&&t.$vnode.ns||U.getTagNamespace(e),o=U.isReservedTag(e)?new bt(U.parsePlatformTagName(e),n,i,void 0,void 0,t):n&&n.pre||!r(c=Yt(t.$options,"components",e))?new bt(e,n,i,void 0,void 0,t):on(c,n,t,i,e)):o=on(e,n,t,i);return Array.isArray(o)?o:r(o)?(r(a)&&mn(o,a),r(n)&&gn(n),o):_t()}function mn(t,e,n){if(t.ns=e,"foreignObject"===t.tag&&(e=void 0,n=!0),r(t.children))for(var o=0,a=t.children.length;o<a;o++){var c=t.children[o];r(c.tag)&&(i(c.ns)||s(n)&&"svg"!==c.tag)&&mn(c,e,n)}}function gn(t){c(t.style)&&ve(t.style),c(t.class)&&ve(t.class)}function vn(t){t._vnode=null,t._staticTrees=null;var e=t.$options,i=t.$vnode=e._parentVnode,r=i&&i.context;t.$slots=Re(e._renderChildren,r),t.$scopedSlots=n,t._c=function(e,n,i,r){return fn(t,e,n,i,r,!1)},t.$createElement=function(e,n,i,r){return fn(t,e,n,i,r,!0)};var s=i&&i.data;Nt(t,"$attrs",s&&s.attrs||n,null,!0),Nt(t,"$listeners",e._parentListeners||n,null,!0)}var yn,bn=null;function wn(t){Je(t.prototype),t.prototype.$nextTick=function(t){return me(t,this)},t.prototype._render=function(){var t,e=this,n=e.$options,i=n.render,r=n._parentVnode;r&&(e.$scopedSlots=De(r.data.scopedSlots,e.$slots,e.$scopedSlots)),e.$vnode=r;try{bn=e,t=i.call(e._renderProxy,e.$createElement)}catch(So){ne(So,e,"render"),t=e._vnode}finally{bn=null}return Array.isArray(t)&&1===t.length&&(t=t[0]),t instanceof bt||(t=_t()),t.parent=r,t}}function _n(t,e){return(t.__esModule||dt&&"Module"===t[Symbol.toStringTag])&&(t=t.default),c(t)?e.extend(t):t}function On(t,e,n,i,r){var s=_t();return s.asyncFactory=t,s.asyncMeta={data:e,context:n,children:i,tag:r},s}function In(t,e){if(s(t.error)&&r(t.errorComp))return t.errorComp;if(r(t.resolved))return t.resolved;var n=bn;if(n&&r(t.owners)&&-1===t.owners.indexOf(n)&&t.owners.push(n),s(t.loading)&&r(t.loadingComp))return t.loadingComp;if(n&&!r(t.owners)){var o=t.owners=[n],a=!0,u=null,l=null;n.$on("hook:destroyed",(function(){return y(o,n)}));var h=function(t){for(var e=0,n=o.length;e<n;e++)o[e].$forceUpdate();t&&(o.length=0,null!==u&&(clearTimeout(u),u=null),null!==l&&(clearTimeout(l),l=null))},d=$((function(n){t.resolved=_n(n,e),a?o.length=0:h(!0)})),p=$((function(e){r(t.errorComp)&&(t.error=!0,h(!0))})),m=t(d,p);return c(m)&&(f(m)?i(t.resolved)&&m.then(d,p):f(m.component)&&(m.component.then(d,p),r(m.error)&&(t.errorComp=_n(m.error,e)),r(m.loading)&&(t.loadingComp=_n(m.loading,e),0===m.delay?t.loading=!0:u=setTimeout((function(){u=null,i(t.resolved)&&i(t.error)&&(t.loading=!0,h(!1))}),m.delay||200)),r(m.timeout)&&(l=setTimeout((function(){l=null,i(t.resolved)&&p(null)}),m.timeout)))),a=!1,t.loading?t.loadingComp:t.resolved}}function Sn(t){if(Array.isArray(t))for(var e=0;e<t.length;e++){var n=t[e];if(r(n)&&(r(n.componentOptions)||Ne(n)))return n}}function kn(t){t._events=Object.create(null),t._hasHookEvent=!1;var e=t.$options._parentListeners;e&&Cn(t,e)}function Tn(t,e){yn.$on(t,e)}function En(t,e){yn.$off(t,e)}function xn(t,e){var n=yn;return function i(){var r=e.apply(null,arguments);null!==r&&n.$off(t,i)}}function Cn(t,e,n){yn=t,_e(e,n||{},Tn,En,xn,t),yn=void 0}function An(t){var e=/^hook:/;t.prototype.$on=function(t,n){var i=this;if(Array.isArray(t))for(var r=0,s=t.length;r<s;r++)i.$on(t[r],n);else(i._events[t]||(i._events[t]=[])).push(n),e.test(t)&&(i._hasHookEvent=!0);return i},t.prototype.$once=function(t,e){var n=this;function i(){n.$off(t,i),e.apply(n,arguments)}return i.fn=e,n.$on(t,i),n},t.prototype.$off=function(t,e){var n=this;if(!arguments.length)return n._events=Object.create(null),n;if(Array.isArray(t)){for(var i=0,r=t.length;i<r;i++)n.$off(t[i],e);return n}var s,o=n._events[t];if(!o)return n;if(!e)return n._events[t]=null,n;var a=o.length;while(a--)if(s=o[a],s===e||s.fn===e){o.splice(a,1);break}return n},t.prototype.$emit=function(t){var e=this,n=e._events[t];if(n){n=n.length>1?A(n):n;for(var i=A(arguments,1),r='event handler for "'+t+'"',s=0,o=n.length;s<o;s++)ie(n[s],e,i,e,r)}return e}}var jn=null;function Rn(t){var e=jn;return jn=t,function(){jn=e}}function Ln(t){var e=t.$options,n=e.parent;if(n&&!e.abstract){while(n.$options.abstract&&n.$parent)n=n.$parent;n.$children.push(t)}t.$parent=n,t.$root=n?n.$root:t,t.$children=[],t.$refs={},t._watcher=null,t._inactive=null,t._directInactive=!1,t._isMounted=!1,t._isDestroyed=!1,t._isBeingDestroyed=!1}function Nn(t){t.prototype._update=function(t,e){var n=this,i=n.$el,r=n._vnode,s=Rn(n);n._vnode=t,n.$el=r?n.__patch__(r,t):n.__patch__(n.$el,t,e,!1),s(),i&&(i.__vue__=null),n.$el&&(n.$el.__vue__=n),n.$vnode&&n.$parent&&n.$vnode===n.$parent._vnode&&(n.$parent.$el=n.$el)},t.prototype.$forceUpdate=function(){var t=this;t._watcher&&t._watcher.update()},t.prototype.$destroy=function(){var t=this;if(!t._isBeingDestroyed){Bn(t,"beforeDestroy"),t._isBeingDestroyed=!0;var e=t.$parent;!e||e._isBeingDestroyed||t.$options.abstract||y(e.$children,t),t._watcher&&t._watcher.teardown();var n=t._watchers.length;while(n--)t._watchers[n].teardown();t._data.__ob__&&t._data.__ob__.vmCount--,t._isDestroyed=!0,t.__patch__(t._vnode,null),Bn(t,"destroyed"),t.$off(),t.$el&&(t.$el.__vue__=null),t.$vnode&&(t.$vnode.parent=null)}}}function Dn(t,e,n){var i;return t.$el=e,t.$options.render||(t.$options.render=_t),Bn(t,"beforeMount"),i=function(){t._update(t._render(),n)},new ii(t,i,L,{before:function(){t._isMounted&&!t._isDestroyed&&Bn(t,"beforeUpdate")}},!0),n=!1,null==t.$vnode&&(t._isMounted=!0,Bn(t,"mounted")),t}function Pn(t,e,i,r,s){var o=r.data.scopedSlots,a=t.$scopedSlots,c=!!(o&&!o.$stable||a!==n&&!a.$stable||o&&t.$scopedSlots.$key!==o.$key||!o&&t.$scopedSlots.$key),u=!!(s||t.$options._renderChildren||c);if(t.$options._parentVnode=r,t.$vnode=r,t._vnode&&(t._vnode.parent=r),t.$options._renderChildren=s,t.$attrs=r.data.attrs||n,t.$listeners=i||n,e&&t.$options.props){Ct(!1);for(var l=t._props,h=t.$options._propKeys||[],d=0;d<h.length;d++){var f=h[d],p=t.$options.props;l[f]=Xt(f,p,e,t)}Ct(!0),t.$options.propsData=e}i=i||n;var m=t.$options._parentListeners;t.$options._parentListeners=i,Cn(t,i,m),u&&(t.$slots=Re(s,r.context),t.$forceUpdate())}function Mn(t){while(t&&(t=t.$parent))if(t._inactive)return!0;return!1}function $n(t,e){if(e){if(t._directInactive=!1,Mn(t))return}else if(t._directInactive)return;if(t._inactive||null===t._inactive){t._inactive=!1;for(var n=0;n<t.$children.length;n++)$n(t.$children[n]);Bn(t,"activated")}}function Fn(t,e){if((!e||(t._directInactive=!0,!Mn(t)))&&!t._inactive){t._inactive=!0;for(var n=0;n<t.$children.length;n++)Fn(t.$children[n]);Bn(t,"deactivated")}}function Bn(t,e){vt();var n=t.$options[e],i=e+" hook";if(n)for(var r=0,s=n.length;r<s;r++)ie(n[r],t,null,t,i);t._hasHookEvent&&t.$emit("hook:"+e),yt()}var Vn=[],Un=[],qn={},zn=!1,Hn=!1,Wn=0;function Gn(){Wn=Vn.length=Un.length=0,qn={},zn=Hn=!1}var Kn=0,Yn=Date.now;if(X&&!tt){var Xn=window.performance;Xn&&"function"===typeof Xn.now&&Yn()>document.createEvent("Event").timeStamp&&(Yn=function(){return Xn.now()})}function Qn(){var t,e;for(Kn=Yn(),Hn=!0,Vn.sort((function(t,e){return t.id-e.id})),Wn=0;Wn<Vn.length;Wn++)t=Vn[Wn],t.before&&t.before(),e=t.id,qn[e]=null,t.run();var n=Un.slice(),i=Vn.slice();Gn(),ti(n),Jn(i),ut&&U.devtools&&ut.emit("flush")}function Jn(t){var e=t.length;while(e--){var n=t[e],i=n.vm;i._watcher===n&&i._isMounted&&!i._isDestroyed&&Bn(i,"updated")}}function Zn(t){t._inactive=!1,Un.push(t)}function ti(t){for(var e=0;e<t.length;e++)t[e]._inactive=!0,$n(t[e],!0)}function ei(t){var e=t.id;if(null==qn[e]){if(qn[e]=!0,Hn){var n=Vn.length-1;while(n>Wn&&Vn[n].id>t.id)n--;Vn.splice(n+1,0,t)}else Vn.push(t);zn||(zn=!0,me(Qn))}}var ni=0,ii=function(t,e,n,i,r){this.vm=t,r&&(t._watcher=this),t._watchers.push(this),i?(this.deep=!!i.deep,this.user=!!i.user,this.lazy=!!i.lazy,this.sync=!!i.sync,this.before=i.before):this.deep=this.user=this.lazy=this.sync=!1,this.cb=n,this.id=++ni,this.active=!0,this.dirty=this.lazy,this.deps=[],this.newDeps=[],this.depIds=new ht,this.newDepIds=new ht,this.expression="","function"===typeof e?this.getter=e:(this.getter=G(e),this.getter||(this.getter=L)),this.value=this.lazy?void 0:this.get()};ii.prototype.get=function(){var t;vt(this);var e=this.vm;try{t=this.getter.call(e,e)}catch(So){if(!this.user)throw So;ne(So,e,'getter for watcher "'+this.expression+'"')}finally{this.deep&&ve(t),yt(),this.cleanupDeps()}return t},ii.prototype.addDep=function(t){var e=t.id;this.newDepIds.has(e)||(this.newDepIds.add(e),this.newDeps.push(t),this.depIds.has(e)||t.addSub(this))},ii.prototype.cleanupDeps=function(){var t=this.deps.length;while(t--){var e=this.deps[t];this.newDepIds.has(e.id)||e.removeSub(this)}var n=this.depIds;this.depIds=this.newDepIds,this.newDepIds=n,this.newDepIds.clear(),n=this.deps,this.deps=this.newDeps,this.newDeps=n,this.newDeps.length=0},ii.prototype.update=function(){this.lazy?this.dirty=!0:this.sync?this.run():ei(this)},ii.prototype.run=function(){if(this.active){var t=this.get();if(t!==this.value||c(t)||this.deep){var e=this.value;if(this.value=t,this.user){var n='callback for watcher "'+this.expression+'"';ie(this.cb,this.vm,[t,e],this.vm,n)}else this.cb.call(this.vm,t,e)}}},ii.prototype.evaluate=function(){this.value=this.get(),this.dirty=!1},ii.prototype.depend=function(){var t=this.deps.length;while(t--)this.deps[t].depend()},ii.prototype.teardown=function(){if(this.active){this.vm._isBeingDestroyed||y(this.vm._watchers,this);var t=this.deps.length;while(t--)this.deps[t].removeSub(this);this.active=!1}};var ri={enumerable:!0,configurable:!0,get:L,set:L};function si(t,e,n){ri.get=function(){return this[e][n]},ri.set=function(t){this[e][n]=t},Object.defineProperty(t,n,ri)}function oi(t){t._watchers=[];var e=t.$options;e.props&&ai(t,e.props),e.methods&&mi(t,e.methods),e.data?ci(t):Lt(t._data={},!0),e.computed&&hi(t,e.computed),e.watch&&e.watch!==st&&gi(t,e.watch)}function ai(t,e){var n=t.$options.propsData||{},i=t._props={},r=t.$options._propKeys=[],s=!t.$parent;s||Ct(!1);var o=function(s){r.push(s);var o=Xt(s,e,n,t);Nt(i,s,o),s in t||si(t,"_props",s)};for(var a in e)o(a);Ct(!0)}function ci(t){var e=t.$options.data;e=t._data="function"===typeof e?ui(e,t):e||{},l(e)||(e={});var n=Object.keys(e),i=t.$options.props,r=(t.$options.methods,n.length);while(r--){var s=n[r];0,i&&w(i,s)||z(s)||si(t,"_data",s)}Lt(e,!0)}function ui(t,e){vt();try{return t.call(e,e)}catch(So){return ne(So,e,"data()"),{}}finally{yt()}}var li={lazy:!0};function hi(t,e){var n=t._computedWatchers=Object.create(null),i=ct();for(var r in e){var s=e[r],o="function"===typeof s?s:s.get;0,i||(n[r]=new ii(t,o||L,L,li)),r in t||di(t,r,s)}}function di(t,e,n){var i=!ct();"function"===typeof n?(ri.get=i?fi(e):pi(n),ri.set=L):(ri.get=n.get?i&&!1!==n.cache?fi(e):pi(n.get):L,ri.set=n.set||L),Object.defineProperty(t,e,ri)}function fi(t){return function(){var e=this._computedWatchers&&this._computedWatchers[t];if(e)return e.dirty&&e.evaluate(),mt.target&&e.depend(),e.value}}function pi(t){return function(){return t.call(this,this)}}function mi(t,e){t.$options.props;for(var n in e)t[n]="function"!==typeof e[n]?L:C(e[n],t)}function gi(t,e){for(var n in e){var i=e[n];if(Array.isArray(i))for(var r=0;r<i.length;r++)vi(t,n,i[r]);else vi(t,n,i)}}function vi(t,e,n,i){return l(n)&&(i=n,n=n.handler),"string"===typeof n&&(n=t[n]),t.$watch(e,n,i)}function yi(t){var e={get:function(){return this._data}},n={get:function(){return this._props}};Object.defineProperty(t.prototype,"$data",e),Object.defineProperty(t.prototype,"$props",n),t.prototype.$set=Dt,t.prototype.$delete=Pt,t.prototype.$watch=function(t,e,n){var i=this;if(l(e))return vi(i,t,e,n);n=n||{},n.user=!0;var r=new ii(i,t,e,n);if(n.immediate){var s='callback for immediate watcher "'+r.expression+'"';vt(),ie(e,i,[r.value],i,s),yt()}return function(){r.teardown()}}}var bi=0;function wi(t){t.prototype._init=function(t){var e=this;e._uid=bi++,e._isVue=!0,t&&t._isComponent?_i(e,t):e.$options=Kt(Oi(e.constructor),t||{},e),e._renderProxy=e,e._self=e,Ln(e),kn(e),vn(e),Bn(e,"beforeCreate"),Ae(e),oi(e),Ce(e),Bn(e,"created"),e.$options.el&&e.$mount(e.$options.el)}}function _i(t,e){var n=t.$options=Object.create(t.constructor.options),i=e._parentVnode;n.parent=e.parent,n._parentVnode=i;var r=i.componentOptions;n.propsData=r.propsData,n._parentListeners=r.listeners,n._renderChildren=r.children,n._componentTag=r.tag,e.render&&(n.render=e.render,n.staticRenderFns=e.staticRenderFns)}function Oi(t){var e=t.options;if(t.super){var n=Oi(t.super),i=t.superOptions;if(n!==i){t.superOptions=n;var r=Ii(t);r&&j(t.extendOptions,r),e=t.options=Kt(n,t.extendOptions),e.name&&(e.components[e.name]=t)}}return e}function Ii(t){var e,n=t.options,i=t.sealedOptions;for(var r in n)n[r]!==i[r]&&(e||(e={}),e[r]=n[r]);return e}function Si(t){this._init(t)}function ki(t){t.use=function(t){var e=this._installedPlugins||(this._installedPlugins=[]);if(e.indexOf(t)>-1)return this;var n=A(arguments,1);return n.unshift(this),"function"===typeof t.install?t.install.apply(t,n):"function"===typeof t&&t.apply(null,n),e.push(t),this}}function Ti(t){t.mixin=function(t){return this.options=Kt(this.options,t),this}}function Ei(t){t.cid=0;var e=1;t.extend=function(t){t=t||{};var n=this,i=n.cid,r=t._Ctor||(t._Ctor={});if(r[i])return r[i];var s=t.name||n.options.name;var o=function(t){this._init(t)};return o.prototype=Object.create(n.prototype),o.prototype.constructor=o,o.cid=e++,o.options=Kt(n.options,t),o["super"]=n,o.options.props&&xi(o),o.options.computed&&Ci(o),o.extend=n.extend,o.mixin=n.mixin,o.use=n.use,B.forEach((function(t){o[t]=n[t]})),s&&(o.options.components[s]=o),o.superOptions=n.options,o.extendOptions=t,o.sealedOptions=j({},o.options),r[i]=o,o}}function xi(t){var e=t.options.props;for(var n in e)si(t.prototype,"_props",n)}function Ci(t){var e=t.options.computed;for(var n in e)di(t.prototype,n,e[n])}function Ai(t){B.forEach((function(e){t[e]=function(t,n){return n?("component"===e&&l(n)&&(n.name=n.name||t,n=this.options._base.extend(n)),"directive"===e&&"function"===typeof n&&(n={bind:n,update:n}),this.options[e+"s"][t]=n,n):this.options[e+"s"][t]}}))}function ji(t){return t&&(t.Ctor.options.name||t.tag)}function Ri(t,e){return Array.isArray(t)?t.indexOf(e)>-1:"string"===typeof t?t.split(",").indexOf(e)>-1:!!h(t)&&t.test(e)}function Li(t,e){var n=t.cache,i=t.keys,r=t._vnode;for(var s in n){var o=n[s];if(o){var a=o.name;a&&!e(a)&&Ni(n,s,i,r)}}}function Ni(t,e,n,i){var r=t[e];!r||i&&r.tag===i.tag||r.componentInstance.$destroy(),t[e]=null,y(n,e)}wi(Si),yi(Si),An(Si),Nn(Si),wn(Si);var Di=[String,RegExp,Array],Pi={name:"keep-alive",abstract:!0,props:{include:Di,exclude:Di,max:[String,Number]},methods:{cacheVNode:function(){var t=this,e=t.cache,n=t.keys,i=t.vnodeToCache,r=t.keyToCache;if(i){var s=i.tag,o=i.componentInstance,a=i.componentOptions;e[r]={name:ji(a),tag:s,componentInstance:o},n.push(r),this.max&&n.length>parseInt(this.max)&&Ni(e,n[0],n,this._vnode),this.vnodeToCache=null}}},created:function(){this.cache=Object.create(null),this.keys=[]},destroyed:function(){for(var t in this.cache)Ni(this.cache,t,this.keys)},mounted:function(){var t=this;this.cacheVNode(),this.$watch("include",(function(e){Li(t,(function(t){return Ri(e,t)}))})),this.$watch("exclude",(function(e){Li(t,(function(t){return!Ri(e,t)}))}))},updated:function(){this.cacheVNode()},render:function(){var t=this.$slots.default,e=Sn(t),n=e&&e.componentOptions;if(n){var i=ji(n),r=this,s=r.include,o=r.exclude;if(s&&(!i||!Ri(s,i))||o&&i&&Ri(o,i))return e;var a=this,c=a.cache,u=a.keys,l=null==e.key?n.Ctor.cid+(n.tag?"::"+n.tag:""):e.key;c[l]?(e.componentInstance=c[l].componentInstance,y(u,l),u.push(l)):(this.vnodeToCache=e,this.keyToCache=l),e.data.keepAlive=!0}return e||t&&t[0]}},Mi={KeepAlive:Pi};function $i(t){var e={get:function(){return U}};Object.defineProperty(t,"config",e),t.util={warn:ft,extend:j,mergeOptions:Kt,defineReactive:Nt},t.set=Dt,t.delete=Pt,t.nextTick=me,t.observable=function(t){return Lt(t),t},t.options=Object.create(null),B.forEach((function(e){t.options[e+"s"]=Object.create(null)})),t.options._base=t,j(t.options.components,Mi),ki(t),Ti(t),Ei(t),Ai(t)}$i(Si),Object.defineProperty(Si.prototype,"$isServer",{get:ct}),Object.defineProperty(Si.prototype,"$ssrContext",{get:function(){return this.$vnode&&this.$vnode.ssrContext}}),Object.defineProperty(Si,"FunctionalRenderContext",{value:Ze}),Si.version="2.6.14";var Fi=g("style,class"),Bi=g("input,textarea,option,select,progress"),Vi=function(t,e,n){return"value"===n&&Bi(t)&&"button"!==e||"selected"===n&&"option"===t||"checked"===n&&"input"===t||"muted"===n&&"video"===t},Ui=g("contenteditable,draggable,spellcheck"),qi=g("events,caret,typing,plaintext-only"),zi=function(t,e){return Yi(e)||"false"===e?"false":"contenteditable"===t&&qi(e)?e:"true"},Hi=g("allowfullscreen,async,autofocus,autoplay,checked,compact,controls,declare,default,defaultchecked,defaultmuted,defaultselected,defer,disabled,enabled,formnovalidate,hidden,indeterminate,inert,ismap,itemscope,loop,multiple,muted,nohref,noresize,noshade,novalidate,nowrap,open,pauseonexit,readonly,required,reversed,scoped,seamless,selected,sortable,truespeed,typemustmatch,visible"),Wi="http://www.w3.org/1999/xlink",Gi=function(t){return":"===t.charAt(5)&&"xlink"===t.slice(0,5)},Ki=function(t){return Gi(t)?t.slice(6,t.length):""},Yi=function(t){return null==t||!1===t};function Xi(t){var e=t.data,n=t,i=t;while(r(i.componentInstance))i=i.componentInstance._vnode,i&&i.data&&(e=Qi(i.data,e));while(r(n=n.parent))n&&n.data&&(e=Qi(e,n.data));return Ji(e.staticClass,e.class)}function Qi(t,e){return{staticClass:Zi(t.staticClass,e.staticClass),class:r(t.class)?[t.class,e.class]:e.class}}function Ji(t,e){return r(t)||r(e)?Zi(t,tr(e)):""}function Zi(t,e){return t?e?t+" "+e:t:e||""}function tr(t){return Array.isArray(t)?er(t):c(t)?nr(t):"string"===typeof t?t:""}function er(t){for(var e,n="",i=0,s=t.length;i<s;i++)r(e=tr(t[i]))&&""!==e&&(n&&(n+=" "),n+=e);return n}function nr(t){var e="";for(var n in t)t[n]&&(e&&(e+=" "),e+=n);return e}var ir={svg:"http://www.w3.org/2000/svg",math:"http://www.w3.org/1998/Math/MathML"},rr=g("html,body,base,head,link,meta,style,title,address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,hgroup,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,rtc,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,menuitem,summary,content,element,shadow,template,blockquote,iframe,tfoot"),sr=g("svg,animate,circle,clippath,cursor,defs,desc,ellipse,filter,font-face,foreignobject,g,glyph,image,line,marker,mask,missing-glyph,path,pattern,polygon,polyline,rect,switch,symbol,text,textpath,tspan,use,view",!0),or=function(t){return rr(t)||sr(t)};function ar(t){return sr(t)?"svg":"math"===t?"math":void 0}var cr=Object.create(null);function ur(t){if(!X)return!0;if(or(t))return!1;if(t=t.toLowerCase(),null!=cr[t])return cr[t];var e=document.createElement(t);return t.indexOf("-")>-1?cr[t]=e.constructor===window.HTMLUnknownElement||e.constructor===window.HTMLElement:cr[t]=/HTMLUnknownElement/.test(e.toString())}var lr=g("text,number,password,search,email,tel,url");function hr(t){if("string"===typeof t){var e=document.querySelector(t);return e||document.createElement("div")}return t}function dr(t,e){var n=document.createElement(t);return"select"!==t||e.data&&e.data.attrs&&void 0!==e.data.attrs.multiple&&n.setAttribute("multiple","multiple"),n}function fr(t,e){return document.createElementNS(ir[t],e)}function pr(t){return document.createTextNode(t)}function mr(t){return document.createComment(t)}function gr(t,e,n){t.insertBefore(e,n)}function vr(t,e){t.removeChild(e)}function yr(t,e){t.appendChild(e)}function br(t){return t.parentNode}function wr(t){return t.nextSibling}function _r(t){return t.tagName}function Or(t,e){t.textContent=e}function Ir(t,e){t.setAttribute(e,"")}var Sr=Object.freeze({createElement:dr,createElementNS:fr,createTextNode:pr,createComment:mr,insertBefore:gr,removeChild:vr,appendChild:yr,parentNode:br,nextSibling:wr,tagName:_r,setTextContent:Or,setStyleScope:Ir}),kr={create:function(t,e){Tr(e)},update:function(t,e){t.data.ref!==e.data.ref&&(Tr(t,!0),Tr(e))},destroy:function(t){Tr(t,!0)}};function Tr(t,e){var n=t.data.ref;if(r(n)){var i=t.context,s=t.componentInstance||t.elm,o=i.$refs;e?Array.isArray(o[n])?y(o[n],s):o[n]===s&&(o[n]=void 0):t.data.refInFor?Array.isArray(o[n])?o[n].indexOf(s)<0&&o[n].push(s):o[n]=[s]:o[n]=s}}var Er=new bt("",{},[]),xr=["create","activate","update","remove","destroy"];function Cr(t,e){return t.key===e.key&&t.asyncFactory===e.asyncFactory&&(t.tag===e.tag&&t.isComment===e.isComment&&r(t.data)===r(e.data)&&Ar(t,e)||s(t.isAsyncPlaceholder)&&i(e.asyncFactory.error))}function Ar(t,e){if("input"!==t.tag)return!0;var n,i=r(n=t.data)&&r(n=n.attrs)&&n.type,s=r(n=e.data)&&r(n=n.attrs)&&n.type;return i===s||lr(i)&&lr(s)}function jr(t,e,n){var i,s,o={};for(i=e;i<=n;++i)s=t[i].key,r(s)&&(o[s]=i);return o}function Rr(t){var e,n,o={},c=t.modules,u=t.nodeOps;for(e=0;e<xr.length;++e)for(o[xr[e]]=[],n=0;n<c.length;++n)r(c[n][xr[e]])&&o[xr[e]].push(c[n][xr[e]]);function l(t){return new bt(u.tagName(t).toLowerCase(),{},[],void 0,t)}function h(t,e){function n(){0===--n.listeners&&d(t)}return n.listeners=e,n}function d(t){var e=u.parentNode(t);r(e)&&u.removeChild(e,t)}function f(t,e,n,i,o,a,c){if(r(t.elm)&&r(a)&&(t=a[c]=It(t)),t.isRootInsert=!o,!p(t,e,n,i)){var l=t.data,h=t.children,d=t.tag;r(d)?(t.elm=t.ns?u.createElementNS(t.ns,d):u.createElement(d,t),O(t),b(t,h,e),r(l)&&_(t,e),y(n,t.elm,i)):s(t.isComment)?(t.elm=u.createComment(t.text),y(n,t.elm,i)):(t.elm=u.createTextNode(t.text),y(n,t.elm,i))}}function p(t,e,n,i){var o=t.data;if(r(o)){var a=r(t.componentInstance)&&o.keepAlive;if(r(o=o.hook)&&r(o=o.init)&&o(t,!1),r(t.componentInstance))return m(t,e),y(n,t.elm,i),s(a)&&v(t,e,n,i),!0}}function m(t,e){r(t.data.pendingInsert)&&(e.push.apply(e,t.data.pendingInsert),t.data.pendingInsert=null),t.elm=t.componentInstance.$el,w(t)?(_(t,e),O(t)):(Tr(t),e.push(t))}function v(t,e,n,i){var s,a=t;while(a.componentInstance)if(a=a.componentInstance._vnode,r(s=a.data)&&r(s=s.transition)){for(s=0;s<o.activate.length;++s)o.activate[s](Er,a);e.push(a);break}y(n,t.elm,i)}function y(t,e,n){r(t)&&(r(n)?u.parentNode(n)===t&&u.insertBefore(t,e,n):u.appendChild(t,e))}function b(t,e,n){if(Array.isArray(e)){0;for(var i=0;i<e.length;++i)f(e[i],n,t.elm,null,!0,e,i)}else a(t.text)&&u.appendChild(t.elm,u.createTextNode(String(t.text)))}function w(t){while(t.componentInstance)t=t.componentInstance._vnode;return r(t.tag)}function _(t,n){for(var i=0;i<o.create.length;++i)o.create[i](Er,t);e=t.data.hook,r(e)&&(r(e.create)&&e.create(Er,t),r(e.insert)&&n.push(t))}function O(t){var e;if(r(e=t.fnScopeId))u.setStyleScope(t.elm,e);else{var n=t;while(n)r(e=n.context)&&r(e=e.$options._scopeId)&&u.setStyleScope(t.elm,e),n=n.parent}r(e=jn)&&e!==t.context&&e!==t.fnContext&&r(e=e.$options._scopeId)&&u.setStyleScope(t.elm,e)}function I(t,e,n,i,r,s){for(;i<=r;++i)f(n[i],s,t,e,!1,n,i)}function S(t){var e,n,i=t.data;if(r(i))for(r(e=i.hook)&&r(e=e.destroy)&&e(t),e=0;e<o.destroy.length;++e)o.destroy[e](t);if(r(e=t.children))for(n=0;n<t.children.length;++n)S(t.children[n])}function k(t,e,n){for(;e<=n;++e){var i=t[e];r(i)&&(r(i.tag)?(T(i),S(i)):d(i.elm))}}function T(t,e){if(r(e)||r(t.data)){var n,i=o.remove.length+1;for(r(e)?e.listeners+=i:e=h(t.elm,i),r(n=t.componentInstance)&&r(n=n._vnode)&&r(n.data)&&T(n,e),n=0;n<o.remove.length;++n)o.remove[n](t,e);r(n=t.data.hook)&&r(n=n.remove)?n(t,e):e()}else d(t.elm)}function E(t,e,n,s,o){var a,c,l,h,d=0,p=0,m=e.length-1,g=e[0],v=e[m],y=n.length-1,b=n[0],w=n[y],_=!o;while(d<=m&&p<=y)i(g)?g=e[++d]:i(v)?v=e[--m]:Cr(g,b)?(C(g,b,s,n,p),g=e[++d],b=n[++p]):Cr(v,w)?(C(v,w,s,n,y),v=e[--m],w=n[--y]):Cr(g,w)?(C(g,w,s,n,y),_&&u.insertBefore(t,g.elm,u.nextSibling(v.elm)),g=e[++d],w=n[--y]):Cr(v,b)?(C(v,b,s,n,p),_&&u.insertBefore(t,v.elm,g.elm),v=e[--m],b=n[++p]):(i(a)&&(a=jr(e,d,m)),c=r(b.key)?a[b.key]:x(b,e,d,m),i(c)?f(b,s,t,g.elm,!1,n,p):(l=e[c],Cr(l,b)?(C(l,b,s,n,p),e[c]=void 0,_&&u.insertBefore(t,l.elm,g.elm)):f(b,s,t,g.elm,!1,n,p)),b=n[++p]);d>m?(h=i(n[y+1])?null:n[y+1].elm,I(t,h,n,p,y,s)):p>y&&k(e,d,m)}function x(t,e,n,i){for(var s=n;s<i;s++){var o=e[s];if(r(o)&&Cr(t,o))return s}}function C(t,e,n,a,c,l){if(t!==e){r(e.elm)&&r(a)&&(e=a[c]=It(e));var h=e.elm=t.elm;if(s(t.isAsyncPlaceholder))r(e.asyncFactory.resolved)?R(t.elm,e,n):e.isAsyncPlaceholder=!0;else if(s(e.isStatic)&&s(t.isStatic)&&e.key===t.key&&(s(e.isCloned)||s(e.isOnce)))e.componentInstance=t.componentInstance;else{var d,f=e.data;r(f)&&r(d=f.hook)&&r(d=d.prepatch)&&d(t,e);var p=t.children,m=e.children;if(r(f)&&w(e)){for(d=0;d<o.update.length;++d)o.update[d](t,e);r(d=f.hook)&&r(d=d.update)&&d(t,e)}i(e.text)?r(p)&&r(m)?p!==m&&E(h,p,m,n,l):r(m)?(r(t.text)&&u.setTextContent(h,""),I(h,null,m,0,m.length-1,n)):r(p)?k(p,0,p.length-1):r(t.text)&&u.setTextContent(h,""):t.text!==e.text&&u.setTextContent(h,e.text),r(f)&&r(d=f.hook)&&r(d=d.postpatch)&&d(t,e)}}}function A(t,e,n){if(s(n)&&r(t.parent))t.parent.data.pendingInsert=e;else for(var i=0;i<e.length;++i)e[i].data.hook.insert(e[i])}var j=g("attrs,class,staticClass,staticStyle,key");function R(t,e,n,i){var o,a=e.tag,c=e.data,u=e.children;if(i=i||c&&c.pre,e.elm=t,s(e.isComment)&&r(e.asyncFactory))return e.isAsyncPlaceholder=!0,!0;if(r(c)&&(r(o=c.hook)&&r(o=o.init)&&o(e,!0),r(o=e.componentInstance)))return m(e,n),!0;if(r(a)){if(r(u))if(t.hasChildNodes())if(r(o=c)&&r(o=o.domProps)&&r(o=o.innerHTML)){if(o!==t.innerHTML)return!1}else{for(var l=!0,h=t.firstChild,d=0;d<u.length;d++){if(!h||!R(h,u[d],n,i)){l=!1;break}h=h.nextSibling}if(!l||h)return!1}else b(e,u,n);if(r(c)){var f=!1;for(var p in c)if(!j(p)){f=!0,_(e,n);break}!f&&c["class"]&&ve(c["class"])}}else t.data!==e.text&&(t.data=e.text);return!0}return function(t,e,n,a){if(!i(e)){var c=!1,h=[];if(i(t))c=!0,f(e,h);else{var d=r(t.nodeType);if(!d&&Cr(t,e))C(t,e,h,null,null,a);else{if(d){if(1===t.nodeType&&t.hasAttribute(F)&&(t.removeAttribute(F),n=!0),s(n)&&R(t,e,h))return A(e,h,!0),t;t=l(t)}var p=t.elm,m=u.parentNode(p);if(f(e,h,p._leaveCb?null:m,u.nextSibling(p)),r(e.parent)){var g=e.parent,v=w(e);while(g){for(var y=0;y<o.destroy.length;++y)o.destroy[y](g);if(g.elm=e.elm,v){for(var b=0;b<o.create.length;++b)o.create[b](Er,g);var _=g.data.hook.insert;if(_.merged)for(var O=1;O<_.fns.length;O++)_.fns[O]()}else Tr(g);g=g.parent}}r(m)?k([t],0,0):r(t.tag)&&S(t)}}return A(e,h,c),e.elm}r(t)&&S(t)}}var Lr={create:Nr,update:Nr,destroy:function(t){Nr(t,Er)}};function Nr(t,e){(t.data.directives||e.data.directives)&&Dr(t,e)}function Dr(t,e){var n,i,r,s=t===Er,o=e===Er,a=Mr(t.data.directives,t.context),c=Mr(e.data.directives,e.context),u=[],l=[];for(n in c)i=a[n],r=c[n],i?(r.oldValue=i.value,r.oldArg=i.arg,Fr(r,"update",e,t),r.def&&r.def.componentUpdated&&l.push(r)):(Fr(r,"bind",e,t),r.def&&r.def.inserted&&u.push(r));if(u.length){var h=function(){for(var n=0;n<u.length;n++)Fr(u[n],"inserted",e,t)};s?Oe(e,"insert",h):h()}if(l.length&&Oe(e,"postpatch",(function(){for(var n=0;n<l.length;n++)Fr(l[n],"componentUpdated",e,t)})),!s)for(n in a)c[n]||Fr(a[n],"unbind",t,t,o)}var Pr=Object.create(null);function Mr(t,e){var n,i,r=Object.create(null);if(!t)return r;for(n=0;n<t.length;n++)i=t[n],i.modifiers||(i.modifiers=Pr),r[$r(i)]=i,i.def=Yt(e.$options,"directives",i.name,!0);return r}function $r(t){return t.rawName||t.name+"."+Object.keys(t.modifiers||{}).join(".")}function Fr(t,e,n,i,r){var s=t.def&&t.def[e];if(s)try{s(n.elm,t,n,i,r)}catch(So){ne(So,n.context,"directive "+t.name+" "+e+" hook")}}var Br=[kr,Lr];function Vr(t,e){var n=e.componentOptions;if((!r(n)||!1!==n.Ctor.options.inheritAttrs)&&(!i(t.data.attrs)||!i(e.data.attrs))){var s,o,a,c=e.elm,u=t.data.attrs||{},l=e.data.attrs||{};for(s in r(l.__ob__)&&(l=e.data.attrs=j({},l)),l)o=l[s],a=u[s],a!==o&&Ur(c,s,o,e.data.pre);for(s in(tt||nt)&&l.value!==u.value&&Ur(c,"value",l.value),u)i(l[s])&&(Gi(s)?c.removeAttributeNS(Wi,Ki(s)):Ui(s)||c.removeAttribute(s))}}function Ur(t,e,n,i){i||t.tagName.indexOf("-")>-1?qr(t,e,n):Hi(e)?Yi(n)?t.removeAttribute(e):(n="allowfullscreen"===e&&"EMBED"===t.tagName?"true":e,t.setAttribute(e,n)):Ui(e)?t.setAttribute(e,zi(e,n)):Gi(e)?Yi(n)?t.removeAttributeNS(Wi,Ki(e)):t.setAttributeNS(Wi,e,n):qr(t,e,n)}function qr(t,e,n){if(Yi(n))t.removeAttribute(e);else{if(tt&&!et&&"TEXTAREA"===t.tagName&&"placeholder"===e&&""!==n&&!t.__ieph){var i=function(e){e.stopImmediatePropagation(),t.removeEventListener("input",i)};t.addEventListener("input",i),t.__ieph=!0}t.setAttribute(e,n)}}var zr={create:Vr,update:Vr};function Hr(t,e){var n=e.elm,s=e.data,o=t.data;if(!(i(s.staticClass)&&i(s.class)&&(i(o)||i(o.staticClass)&&i(o.class)))){var a=Xi(e),c=n._transitionClasses;r(c)&&(a=Zi(a,tr(c))),a!==n._prevClass&&(n.setAttribute("class",a),n._prevClass=a)}}var Wr,Gr={create:Hr,update:Hr},Kr="__r",Yr="__c";function Xr(t){if(r(t[Kr])){var e=tt?"change":"input";t[e]=[].concat(t[Kr],t[e]||[]),delete t[Kr]}r(t[Yr])&&(t.change=[].concat(t[Yr],t.change||[]),delete t[Yr])}function Qr(t,e,n){var i=Wr;return function r(){var s=e.apply(null,arguments);null!==s&&ts(t,r,n,i)}}var Jr=ae&&!(rt&&Number(rt[1])<=53);function Zr(t,e,n,i){if(Jr){var r=Kn,s=e;e=s._wrapper=function(t){if(t.target===t.currentTarget||t.timeStamp>=r||t.timeStamp<=0||t.target.ownerDocument!==document)return s.apply(this,arguments)}}Wr.addEventListener(t,e,ot?{capture:n,passive:i}:n)}function ts(t,e,n,i){(i||Wr).removeEventListener(t,e._wrapper||e,n)}function es(t,e){if(!i(t.data.on)||!i(e.data.on)){var n=e.data.on||{},r=t.data.on||{};Wr=e.elm,Xr(n),_e(n,r,Zr,ts,Qr,e.context),Wr=void 0}}var ns,is={create:es,update:es};function rs(t,e){if(!i(t.data.domProps)||!i(e.data.domProps)){var n,s,o=e.elm,a=t.data.domProps||{},c=e.data.domProps||{};for(n in r(c.__ob__)&&(c=e.data.domProps=j({},c)),a)n in c||(o[n]="");for(n in c){if(s=c[n],"textContent"===n||"innerHTML"===n){if(e.children&&(e.children.length=0),s===a[n])continue;1===o.childNodes.length&&o.removeChild(o.childNodes[0])}if("value"===n&&"PROGRESS"!==o.tagName){o._value=s;var u=i(s)?"":String(s);ss(o,u)&&(o.value=u)}else if("innerHTML"===n&&sr(o.tagName)&&i(o.innerHTML)){ns=ns||document.createElement("div"),ns.innerHTML="<svg>"+s+"</svg>";var l=ns.firstChild;while(o.firstChild)o.removeChild(o.firstChild);while(l.firstChild)o.appendChild(l.firstChild)}else if(s!==a[n])try{o[n]=s}catch(So){}}}}function ss(t,e){return!t.composing&&("OPTION"===t.tagName||os(t,e)||as(t,e))}function os(t,e){var n=!0;try{n=document.activeElement!==t}catch(So){}return n&&t.value!==e}function as(t,e){var n=t.value,i=t._vModifiers;if(r(i)){if(i.number)return m(n)!==m(e);if(i.trim)return n.trim()!==e.trim()}return n!==e}var cs={create:rs,update:rs},us=_((function(t){var e={},n=/;(?![^(]*\))/g,i=/:(.+)/;return t.split(n).forEach((function(t){if(t){var n=t.split(i);n.length>1&&(e[n[0].trim()]=n[1].trim())}})),e}));function ls(t){var e=hs(t.style);return t.staticStyle?j(t.staticStyle,e):e}function hs(t){return Array.isArray(t)?R(t):"string"===typeof t?us(t):t}function ds(t,e){var n,i={};if(e){var r=t;while(r.componentInstance)r=r.componentInstance._vnode,r&&r.data&&(n=ls(r.data))&&j(i,n)}(n=ls(t.data))&&j(i,n);var s=t;while(s=s.parent)s.data&&(n=ls(s.data))&&j(i,n);return i}var fs,ps=/^--/,ms=/\s*!important$/,gs=function(t,e,n){if(ps.test(e))t.style.setProperty(e,n);else if(ms.test(n))t.style.setProperty(T(e),n.replace(ms,""),"important");else{var i=ys(e);if(Array.isArray(n))for(var r=0,s=n.length;r<s;r++)t.style[i]=n[r];else t.style[i]=n}},vs=["Webkit","Moz","ms"],ys=_((function(t){if(fs=fs||document.createElement("div").style,t=I(t),"filter"!==t&&t in fs)return t;for(var e=t.charAt(0).toUpperCase()+t.slice(1),n=0;n<vs.length;n++){var i=vs[n]+e;if(i in fs)return i}}));function bs(t,e){var n=e.data,s=t.data;if(!(i(n.staticStyle)&&i(n.style)&&i(s.staticStyle)&&i(s.style))){var o,a,c=e.elm,u=s.staticStyle,l=s.normalizedStyle||s.style||{},h=u||l,d=hs(e.data.style)||{};e.data.normalizedStyle=r(d.__ob__)?j({},d):d;var f=ds(e,!0);for(a in h)i(f[a])&&gs(c,a,"");for(a in f)o=f[a],o!==h[a]&&gs(c,a,null==o?"":o)}}var ws={create:bs,update:bs},_s=/\s+/;function Os(t,e){if(e&&(e=e.trim()))if(t.classList)e.indexOf(" ")>-1?e.split(_s).forEach((function(e){return t.classList.add(e)})):t.classList.add(e);else{var n=" "+(t.getAttribute("class")||"")+" ";n.indexOf(" "+e+" ")<0&&t.setAttribute("class",(n+e).trim())}}function Is(t,e){if(e&&(e=e.trim()))if(t.classList)e.indexOf(" ")>-1?e.split(_s).forEach((function(e){return t.classList.remove(e)})):t.classList.remove(e),t.classList.length||t.removeAttribute("class");else{var n=" "+(t.getAttribute("class")||"")+" ",i=" "+e+" ";while(n.indexOf(i)>=0)n=n.replace(i," ");n=n.trim(),n?t.setAttribute("class",n):t.removeAttribute("class")}}function Ss(t){if(t){if("object"===typeof t){var e={};return!1!==t.css&&j(e,ks(t.name||"v")),j(e,t),e}return"string"===typeof t?ks(t):void 0}}var ks=_((function(t){return{enterClass:t+"-enter",enterToClass:t+"-enter-to",enterActiveClass:t+"-enter-active",leaveClass:t+"-leave",leaveToClass:t+"-leave-to",leaveActiveClass:t+"-leave-active"}})),Ts=X&&!et,Es="transition",xs="animation",Cs="transition",As="transitionend",js="animation",Rs="animationend";Ts&&(void 0===window.ontransitionend&&void 0!==window.onwebkittransitionend&&(Cs="WebkitTransition",As="webkitTransitionEnd"),void 0===window.onanimationend&&void 0!==window.onwebkitanimationend&&(js="WebkitAnimation",Rs="webkitAnimationEnd"));var Ls=X?window.requestAnimationFrame?window.requestAnimationFrame.bind(window):setTimeout:function(t){return t()};function Ns(t){Ls((function(){Ls(t)}))}function Ds(t,e){var n=t._transitionClasses||(t._transitionClasses=[]);n.indexOf(e)<0&&(n.push(e),Os(t,e))}function Ps(t,e){t._transitionClasses&&y(t._transitionClasses,e),Is(t,e)}function Ms(t,e,n){var i=Fs(t,e),r=i.type,s=i.timeout,o=i.propCount;if(!r)return n();var a=r===Es?As:Rs,c=0,u=function(){t.removeEventListener(a,l),n()},l=function(e){e.target===t&&++c>=o&&u()};setTimeout((function(){c<o&&u()}),s+1),t.addEventListener(a,l)}var $s=/\b(transform|all)(,|$)/;function Fs(t,e){var n,i=window.getComputedStyle(t),r=(i[Cs+"Delay"]||"").split(", "),s=(i[Cs+"Duration"]||"").split(", "),o=Bs(r,s),a=(i[js+"Delay"]||"").split(", "),c=(i[js+"Duration"]||"").split(", "),u=Bs(a,c),l=0,h=0;e===Es?o>0&&(n=Es,l=o,h=s.length):e===xs?u>0&&(n=xs,l=u,h=c.length):(l=Math.max(o,u),n=l>0?o>u?Es:xs:null,h=n?n===Es?s.length:c.length:0);var d=n===Es&&$s.test(i[Cs+"Property"]);return{type:n,timeout:l,propCount:h,hasTransform:d}}function Bs(t,e){while(t.length<e.length)t=t.concat(t);return Math.max.apply(null,e.map((function(e,n){return Vs(e)+Vs(t[n])})))}function Vs(t){return 1e3*Number(t.slice(0,-1).replace(",","."))}function Us(t,e){var n=t.elm;r(n._leaveCb)&&(n._leaveCb.cancelled=!0,n._leaveCb());var s=Ss(t.data.transition);if(!i(s)&&!r(n._enterCb)&&1===n.nodeType){var o=s.css,a=s.type,u=s.enterClass,l=s.enterToClass,h=s.enterActiveClass,d=s.appearClass,f=s.appearToClass,p=s.appearActiveClass,g=s.beforeEnter,v=s.enter,y=s.afterEnter,b=s.enterCancelled,w=s.beforeAppear,_=s.appear,O=s.afterAppear,I=s.appearCancelled,S=s.duration,k=jn,T=jn.$vnode;while(T&&T.parent)k=T.context,T=T.parent;var E=!k._isMounted||!t.isRootInsert;if(!E||_||""===_){var x=E&&d?d:u,C=E&&p?p:h,A=E&&f?f:l,j=E&&w||g,R=E&&"function"===typeof _?_:v,L=E&&O||y,N=E&&I||b,D=m(c(S)?S.enter:S);0;var P=!1!==o&&!et,M=Hs(R),F=n._enterCb=$((function(){P&&(Ps(n,A),Ps(n,C)),F.cancelled?(P&&Ps(n,x),N&&N(n)):L&&L(n),n._enterCb=null}));t.data.show||Oe(t,"insert",(function(){var e=n.parentNode,i=e&&e._pending&&e._pending[t.key];i&&i.tag===t.tag&&i.elm._leaveCb&&i.elm._leaveCb(),R&&R(n,F)})),j&&j(n),P&&(Ds(n,x),Ds(n,C),Ns((function(){Ps(n,x),F.cancelled||(Ds(n,A),M||(zs(D)?setTimeout(F,D):Ms(n,a,F)))}))),t.data.show&&(e&&e(),R&&R(n,F)),P||M||F()}}}function qs(t,e){var n=t.elm;r(n._enterCb)&&(n._enterCb.cancelled=!0,n._enterCb());var s=Ss(t.data.transition);if(i(s)||1!==n.nodeType)return e();if(!r(n._leaveCb)){var o=s.css,a=s.type,u=s.leaveClass,l=s.leaveToClass,h=s.leaveActiveClass,d=s.beforeLeave,f=s.leave,p=s.afterLeave,g=s.leaveCancelled,v=s.delayLeave,y=s.duration,b=!1!==o&&!et,w=Hs(f),_=m(c(y)?y.leave:y);0;var O=n._leaveCb=$((function(){n.parentNode&&n.parentNode._pending&&(n.parentNode._pending[t.key]=null),b&&(Ps(n,l),Ps(n,h)),O.cancelled?(b&&Ps(n,u),g&&g(n)):(e(),p&&p(n)),n._leaveCb=null}));v?v(I):I()}function I(){O.cancelled||(!t.data.show&&n.parentNode&&((n.parentNode._pending||(n.parentNode._pending={}))[t.key]=t),d&&d(n),b&&(Ds(n,u),Ds(n,h),Ns((function(){Ps(n,u),O.cancelled||(Ds(n,l),w||(zs(_)?setTimeout(O,_):Ms(n,a,O)))}))),f&&f(n,O),b||w||O())}}function zs(t){return"number"===typeof t&&!isNaN(t)}function Hs(t){if(i(t))return!1;var e=t.fns;return r(e)?Hs(Array.isArray(e)?e[0]:e):(t._length||t.length)>1}function Ws(t,e){!0!==e.data.show&&Us(e)}var Gs=X?{create:Ws,activate:Ws,remove:function(t,e){!0!==t.data.show?qs(t,e):e()}}:{},Ks=[zr,Gr,is,cs,ws,Gs],Ys=Ks.concat(Br),Xs=Rr({nodeOps:Sr,modules:Ys});et&&document.addEventListener("selectionchange",(function(){var t=document.activeElement;t&&t.vmodel&&ro(t,"input")}));var Qs={inserted:function(t,e,n,i){"select"===n.tag?(i.elm&&!i.elm._vOptions?Oe(n,"postpatch",(function(){Qs.componentUpdated(t,e,n)})):Js(t,e,n.context),t._vOptions=[].map.call(t.options,eo)):("textarea"===n.tag||lr(t.type))&&(t._vModifiers=e.modifiers,e.modifiers.lazy||(t.addEventListener("compositionstart",no),t.addEventListener("compositionend",io),t.addEventListener("change",io),et&&(t.vmodel=!0)))},componentUpdated:function(t,e,n){if("select"===n.tag){Js(t,e,n.context);var i=t._vOptions,r=t._vOptions=[].map.call(t.options,eo);if(r.some((function(t,e){return!P(t,i[e])}))){var s=t.multiple?e.value.some((function(t){return to(t,r)})):e.value!==e.oldValue&&to(e.value,r);s&&ro(t,"change")}}}};function Js(t,e,n){Zs(t,e,n),(tt||nt)&&setTimeout((function(){Zs(t,e,n)}),0)}function Zs(t,e,n){var i=e.value,r=t.multiple;if(!r||Array.isArray(i)){for(var s,o,a=0,c=t.options.length;a<c;a++)if(o=t.options[a],r)s=M(i,eo(o))>-1,o.selected!==s&&(o.selected=s);else if(P(eo(o),i))return void(t.selectedIndex!==a&&(t.selectedIndex=a));r||(t.selectedIndex=-1)}}function to(t,e){return e.every((function(e){return!P(e,t)}))}function eo(t){return"_value"in t?t._value:t.value}function no(t){t.target.composing=!0}function io(t){t.target.composing&&(t.target.composing=!1,ro(t.target,"input"))}function ro(t,e){var n=document.createEvent("HTMLEvents");n.initEvent(e,!0,!0),t.dispatchEvent(n)}function so(t){return!t.componentInstance||t.data&&t.data.transition?t:so(t.componentInstance._vnode)}var oo={bind:function(t,e,n){var i=e.value;n=so(n);var r=n.data&&n.data.transition,s=t.__vOriginalDisplay="none"===t.style.display?"":t.style.display;i&&r?(n.data.show=!0,Us(n,(function(){t.style.display=s}))):t.style.display=i?s:"none"},update:function(t,e,n){var i=e.value,r=e.oldValue;if(!i!==!r){n=so(n);var s=n.data&&n.data.transition;s?(n.data.show=!0,i?Us(n,(function(){t.style.display=t.__vOriginalDisplay})):qs(n,(function(){t.style.display="none"}))):t.style.display=i?t.__vOriginalDisplay:"none"}},unbind:function(t,e,n,i,r){r||(t.style.display=t.__vOriginalDisplay)}},ao={model:Qs,show:oo},co={name:String,appear:Boolean,css:Boolean,mode:String,type:String,enterClass:String,leaveClass:String,enterToClass:String,leaveToClass:String,enterActiveClass:String,leaveActiveClass:String,appearClass:String,appearActiveClass:String,appearToClass:String,duration:[Number,String,Object]};function uo(t){var e=t&&t.componentOptions;return e&&e.Ctor.options.abstract?uo(Sn(e.children)):t}function lo(t){var e={},n=t.$options;for(var i in n.propsData)e[i]=t[i];var r=n._parentListeners;for(var s in r)e[I(s)]=r[s];return e}function ho(t,e){if(/\d-keep-alive$/.test(e.tag))return t("keep-alive",{props:e.componentOptions.propsData})}function fo(t){while(t=t.parent)if(t.data.transition)return!0}function po(t,e){return e.key===t.key&&e.tag===t.tag}var mo=function(t){return t.tag||Ne(t)},go=function(t){return"show"===t.name},vo={name:"transition",props:co,abstract:!0,render:function(t){var e=this,n=this.$slots.default;if(n&&(n=n.filter(mo),n.length)){0;var i=this.mode;0;var r=n[0];if(fo(this.$vnode))return r;var s=uo(r);if(!s)return r;if(this._leaving)return ho(t,r);var o="__transition-"+this._uid+"-";s.key=null==s.key?s.isComment?o+"comment":o+s.tag:a(s.key)?0===String(s.key).indexOf(o)?s.key:o+s.key:s.key;var c=(s.data||(s.data={})).transition=lo(this),u=this._vnode,l=uo(u);if(s.data.directives&&s.data.directives.some(go)&&(s.data.show=!0),l&&l.data&&!po(s,l)&&!Ne(l)&&(!l.componentInstance||!l.componentInstance._vnode.isComment)){var h=l.data.transition=j({},c);if("out-in"===i)return this._leaving=!0,Oe(h,"afterLeave",(function(){e._leaving=!1,e.$forceUpdate()})),ho(t,r);if("in-out"===i){if(Ne(s))return u;var d,f=function(){d()};Oe(c,"afterEnter",f),Oe(c,"enterCancelled",f),Oe(h,"delayLeave",(function(t){d=t}))}}return r}}},yo=j({tag:String,moveClass:String},co);delete yo.mode;var bo={props:yo,beforeMount:function(){var t=this,e=this._update;this._update=function(n,i){var r=Rn(t);t.__patch__(t._vnode,t.kept,!1,!0),t._vnode=t.kept,r(),e.call(t,n,i)}},render:function(t){for(var e=this.tag||this.$vnode.data.tag||"span",n=Object.create(null),i=this.prevChildren=this.children,r=this.$slots.default||[],s=this.children=[],o=lo(this),a=0;a<r.length;a++){var c=r[a];if(c.tag)if(null!=c.key&&0!==String(c.key).indexOf("__vlist"))s.push(c),n[c.key]=c,(c.data||(c.data={})).transition=o;else;}if(i){for(var u=[],l=[],h=0;h<i.length;h++){var d=i[h];d.data.transition=o,d.data.pos=d.elm.getBoundingClientRect(),n[d.key]?u.push(d):l.push(d)}this.kept=t(e,null,u),this.removed=l}return t(e,null,s)},updated:function(){var t=this.prevChildren,e=this.moveClass||(this.name||"v")+"-move";t.length&&this.hasMove(t[0].elm,e)&&(t.forEach(wo),t.forEach(_o),t.forEach(Oo),this._reflow=document.body.offsetHeight,t.forEach((function(t){if(t.data.moved){var n=t.elm,i=n.style;Ds(n,e),i.transform=i.WebkitTransform=i.transitionDuration="",n.addEventListener(As,n._moveCb=function t(i){i&&i.target!==n||i&&!/transform$/.test(i.propertyName)||(n.removeEventListener(As,t),n._moveCb=null,Ps(n,e))})}})))},methods:{hasMove:function(t,e){if(!Ts)return!1;if(this._hasMove)return this._hasMove;var n=t.cloneNode();t._transitionClasses&&t._transitionClasses.forEach((function(t){Is(n,t)})),Os(n,e),n.style.display="none",this.$el.appendChild(n);var i=Fs(n);return this.$el.removeChild(n),this._hasMove=i.hasTransform}}};function wo(t){t.elm._moveCb&&t.elm._moveCb(),t.elm._enterCb&&t.elm._enterCb()}function _o(t){t.data.newPos=t.elm.getBoundingClientRect()}function Oo(t){var e=t.data.pos,n=t.data.newPos,i=e.left-n.left,r=e.top-n.top;if(i||r){t.data.moved=!0;var s=t.elm.style;s.transform=s.WebkitTransform="translate("+i+"px,"+r+"px)",s.transitionDuration="0s"}}var Io={Transition:vo,TransitionGroup:bo};Si.config.mustUseProp=Vi,Si.config.isReservedTag=or,Si.config.isReservedAttr=Fi,Si.config.getTagNamespace=ar,Si.config.isUnknownElement=ur,j(Si.options.directives,ao),j(Si.options.components,Io),Si.prototype.__patch__=X?Xs:L,Si.prototype.$mount=function(t,e){return t=t&&X?hr(t):void 0,Dn(this,t,e)},X&&setTimeout((function(){U.devtools&&ut&&ut.emit("init",Si)}),0),e["a"]=Si}).call(this,n("c8ba"))},"2b19":function(t,e,n){var i=n("23e7"),r=n("129f");i({target:"Object",stat:!0},{is:r})},"2ba4":function(t,e,n){var i=n("40d5"),r=Function.prototype,s=r.apply,o=r.call;t.exports="object"==typeof Reflect&&Reflect.apply||(i?o.bind(s):function(){return o.apply(s,arguments)})},"2c3e":function(t,e,n){var i=n("da84"),r=n("83ab"),s=n("9f7f").MISSED_STICKY,o=n("c6b6"),a=n("9bf2").f,c=n("69f3").get,u=RegExp.prototype,l=i.TypeError;r&&s&&a(u,"sticky",{configurable:!0,get:function(){if(this!==u){if("RegExp"===o(this))return!!c(this).sticky;throw l("Incompatible receiver, RegExp required")}}})},"2ca0":function(t,e,n){"use strict";var i=n("23e7"),r=n("e330"),s=n("06cf").f,o=n("50c4"),a=n("577e"),c=n("5a34"),u=n("1d80"),l=n("ab13"),h=n("c430"),d=r("".startsWith),f=r("".slice),p=Math.min,m=l("startsWith"),g=!h&&!m&&!!function(){var t=s(String.prototype,"startsWith");return t&&!t.writable}();i({target:"String",proto:!0,forced:!g&&!m},{startsWith:function(t){var e=a(u(this));c(t);var n=o(p(arguments.length>1?arguments[1]:void 0,e.length)),i=a(t);return d?d(e,i,n):f(e,n,n+i.length)===i}})},"2caf":function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));n("4ae1"),n("d3b7"),n("f8c9"),n("3410");function i(t){return i=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},i(t)}function r(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}var s=n("99de");function o(t){var e=r();return function(){var n,r=i(t);if(e){var o=i(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return Object(s["a"])(this,n)}}},"2cf4":function(t,e,n){var i,r,s,o,a=n("da84"),c=n("2ba4"),u=n("0366"),l=n("1626"),h=n("1a2d"),d=n("d039"),f=n("1be4"),p=n("f36a"),m=n("cc12"),g=n("1cdc"),v=n("605d"),y=a.setImmediate,b=a.clearImmediate,w=a.process,_=a.Dispatch,O=a.Function,I=a.MessageChannel,S=a.String,k=0,T={},E="onreadystatechange";try{i=a.location}catch(R){}var x=function(t){if(h(T,t)){var e=T[t];delete T[t],e()}},C=function(t){return function(){x(t)}},A=function(t){x(t.data)},j=function(t){a.postMessage(S(t),i.protocol+"//"+i.host)};y&&b||(y=function(t){var e=p(arguments,1);return T[++k]=function(){c(l(t)?t:O(t),void 0,e)},r(k),k},b=function(t){delete T[t]},v?r=function(t){w.nextTick(C(t))}:_&&_.now?r=function(t){_.now(C(t))}:I&&!g?(s=new I,o=s.port2,s.port1.onmessage=A,r=u(o.postMessage,o)):a.addEventListener&&l(a.postMessage)&&!a.importScripts&&i&&"file:"!==i.protocol&&!d(j)?(r=j,a.addEventListener("message",A,!1)):r=E in m("script")?function(t){f.appendChild(m("script"))[E]=function(){f.removeChild(this),x(t)}}:function(t){setTimeout(C(t),0)}),t.exports={set:y,clear:b}},"2d00":function(t,e,n){var i,r,s=n("da84"),o=n("342f"),a=s.process,c=s.Deno,u=a&&a.versions||c&&c.version,l=u&&u.v8;l&&(i=l.split("."),r=i[0]>0&&i[0]<4?1:+(i[0]+i[1])),!r&&o&&(i=o.match(/Edge\/(\d+)/),(!i||i[1]>=74)&&(i=o.match(/Chrome\/(\d+)/),i&&(r=+i[1]))),t.exports=r},"2db4":function(t,e,n){"use strict";var i=n("ade3"),r=(n("a9e3"),n("caad"),n("ca71"),n("8dd9")),s=n("a9ad"),o=n("7560"),a=n("f2e7"),c=n("fe6c"),u=n("58df"),l=n("80d2"),h=n("d9bd");e["a"]=Object(u["a"])(r["a"],s["a"],a["a"],Object(c["b"])(["absolute","bottom","left","right","top"])).extend({name:"v-snackbar",props:{app:Boolean,centered:Boolean,contentClass:{type:String,default:""},multiLine:Boolean,text:Boolean,timeout:{type:[Number,String],default:5e3},transition:{type:[Boolean,String],default:"v-snack-transition",validator:function(t){return"string"===typeof t||!1===t}},vertical:Boolean},data:function(){return{activeTimeout:-1}},computed:{classes:function(){return{"v-snack--absolute":this.absolute,"v-snack--active":this.isActive,"v-snack--bottom":this.bottom||!this.top,"v-snack--centered":this.centered,"v-snack--has-background":this.hasBackground,"v-snack--left":this.left,"v-snack--multi-line":this.multiLine&&!this.vertical,"v-snack--right":this.right,"v-snack--text":this.text,"v-snack--top":this.top,"v-snack--vertical":this.vertical}},hasBackground:function(){return!this.text&&!this.outlined},isDark:function(){return this.hasBackground?!this.light:o["a"].options.computed.isDark.call(this)},styles:function(){if(this.absolute||!this.app)return{};var t=this.$vuetify.application,e=t.bar,n=t.bottom,i=t.footer,r=t.insetFooter,s=t.left,o=t.right,a=t.top;return{paddingBottom:Object(l["h"])(n+i+r),paddingLeft:Object(l["h"])(s),paddingRight:Object(l["h"])(o),paddingTop:Object(l["h"])(e+a)}}},watch:{isActive:"setTimeout",timeout:"setTimeout"},mounted:function(){this.isActive&&this.setTimeout()},created:function(){this.$attrs.hasOwnProperty("auto-height")&&Object(h["e"])("auto-height",this),0==this.timeout&&Object(h["d"])('timeout="0"',"-1",this)},methods:{genActions:function(){return this.$createElement("div",{staticClass:"v-snack__action "},[Object(l["s"])(this,"action",{attrs:{class:"v-snack__btn"}})])},genContent:function(){return this.$createElement("div",{staticClass:"v-snack__content",class:Object(i["a"])({},this.contentClass,!0),attrs:{role:"status","aria-live":"polite"}},[Object(l["s"])(this)])},genWrapper:function(){var t=this,e=this.hasBackground?this.setBackgroundColor:this.setTextColor,n=e(this.color,{staticClass:"v-snack__wrapper",class:r["a"].options.computed.classes.call(this),style:r["a"].options.computed.styles.call(this),directives:[{name:"show",value:this.isActive}],on:{pointerenter:function(){return window.clearTimeout(t.activeTimeout)},pointerleave:this.setTimeout}});return this.$createElement("div",n,[this.genContent(),this.genActions()])},genTransition:function(){return this.$createElement("transition",{props:{name:this.transition}},[this.genWrapper()])},setTimeout:function(){var t=this;window.clearTimeout(this.activeTimeout);var e=Number(this.timeout);this.isActive&&![0,-1].includes(e)&&(this.activeTimeout=window.setTimeout((function(){t.isActive=!1}),e))}},render:function(t){return t("div",{staticClass:"v-snack",class:this.classes,style:this.styles},[!1!==this.transition?this.genTransition():this.genWrapper()])}})},"2f62":function(t,e,n){"use strict";(function(t){
/*!
 * vuex v3.6.2
 * (c) 2021 Evan You
 * @license MIT
 */
function i(t){var e=Number(t.version.split(".")[0]);if(e>=2)t.mixin({beforeCreate:i});else{var n=t.prototype._init;t.prototype._init=function(t){void 0===t&&(t={}),t.init=t.init?[i].concat(t.init):i,n.call(this,t)}}function i(){var t=this.$options;t.store?this.$store="function"===typeof t.store?t.store():t.store:t.parent&&t.parent.$store&&(this.$store=t.parent.$store)}}n.d(e,"b",(function(){return L}));var r="undefined"!==typeof window?window:"undefined"!==typeof t?t:{},s=r.__VUE_DEVTOOLS_GLOBAL_HOOK__;function o(t){s&&(t._devtoolHook=s,s.emit("vuex:init",t),s.on("vuex:travel-to-state",(function(e){t.replaceState(e)})),t.subscribe((function(t,e){s.emit("vuex:mutation",t,e)}),{prepend:!0}),t.subscribeAction((function(t,e){s.emit("vuex:action",t,e)}),{prepend:!0}))}function a(t,e){return t.filter(e)[0]}function c(t,e){if(void 0===e&&(e=[]),null===t||"object"!==typeof t)return t;var n=a(e,(function(e){return e.original===t}));if(n)return n.copy;var i=Array.isArray(t)?[]:{};return e.push({original:t,copy:i}),Object.keys(t).forEach((function(n){i[n]=c(t[n],e)})),i}function u(t,e){Object.keys(t).forEach((function(n){return e(t[n],n)}))}function l(t){return null!==t&&"object"===typeof t}function h(t){return t&&"function"===typeof t.then}function d(t,e){return function(){return t(e)}}var f=function(t,e){this.runtime=e,this._children=Object.create(null),this._rawModule=t;var n=t.state;this.state=("function"===typeof n?n():n)||{}},p={namespaced:{configurable:!0}};p.namespaced.get=function(){return!!this._rawModule.namespaced},f.prototype.addChild=function(t,e){this._children[t]=e},f.prototype.removeChild=function(t){delete this._children[t]},f.prototype.getChild=function(t){return this._children[t]},f.prototype.hasChild=function(t){return t in this._children},f.prototype.update=function(t){this._rawModule.namespaced=t.namespaced,t.actions&&(this._rawModule.actions=t.actions),t.mutations&&(this._rawModule.mutations=t.mutations),t.getters&&(this._rawModule.getters=t.getters)},f.prototype.forEachChild=function(t){u(this._children,t)},f.prototype.forEachGetter=function(t){this._rawModule.getters&&u(this._rawModule.getters,t)},f.prototype.forEachAction=function(t){this._rawModule.actions&&u(this._rawModule.actions,t)},f.prototype.forEachMutation=function(t){this._rawModule.mutations&&u(this._rawModule.mutations,t)},Object.defineProperties(f.prototype,p);var m=function(t){this.register([],t,!1)};function g(t,e,n){if(e.update(n),n.modules)for(var i in n.modules){if(!e.getChild(i))return void 0;g(t.concat(i),e.getChild(i),n.modules[i])}}m.prototype.get=function(t){return t.reduce((function(t,e){return t.getChild(e)}),this.root)},m.prototype.getNamespace=function(t){var e=this.root;return t.reduce((function(t,n){return e=e.getChild(n),t+(e.namespaced?n+"/":"")}),"")},m.prototype.update=function(t){g([],this.root,t)},m.prototype.register=function(t,e,n){var i=this;void 0===n&&(n=!0);var r=new f(e,n);if(0===t.length)this.root=r;else{var s=this.get(t.slice(0,-1));s.addChild(t[t.length-1],r)}e.modules&&u(e.modules,(function(e,r){i.register(t.concat(r),e,n)}))},m.prototype.unregister=function(t){var e=this.get(t.slice(0,-1)),n=t[t.length-1],i=e.getChild(n);i&&i.runtime&&e.removeChild(n)},m.prototype.isRegistered=function(t){var e=this.get(t.slice(0,-1)),n=t[t.length-1];return!!e&&e.hasChild(n)};var v;var y=function(t){var e=this;void 0===t&&(t={}),!v&&"undefined"!==typeof window&&window.Vue&&R(window.Vue);var n=t.plugins;void 0===n&&(n=[]);var i=t.strict;void 0===i&&(i=!1),this._committing=!1,this._actions=Object.create(null),this._actionSubscribers=[],this._mutations=Object.create(null),this._wrappedGetters=Object.create(null),this._modules=new m(t),this._modulesNamespaceMap=Object.create(null),this._subscribers=[],this._watcherVM=new v,this._makeLocalGettersCache=Object.create(null);var r=this,s=this,a=s.dispatch,c=s.commit;this.dispatch=function(t,e){return a.call(r,t,e)},this.commit=function(t,e,n){return c.call(r,t,e,n)},this.strict=i;var u=this._modules.root.state;I(this,u,[],this._modules.root),O(this,u),n.forEach((function(t){return t(e)}));var l=void 0!==t.devtools?t.devtools:v.config.devtools;l&&o(this)},b={state:{configurable:!0}};function w(t,e,n){return e.indexOf(t)<0&&(n&&n.prepend?e.unshift(t):e.push(t)),function(){var n=e.indexOf(t);n>-1&&e.splice(n,1)}}function _(t,e){t._actions=Object.create(null),t._mutations=Object.create(null),t._wrappedGetters=Object.create(null),t._modulesNamespaceMap=Object.create(null);var n=t.state;I(t,n,[],t._modules.root,!0),O(t,n,e)}function O(t,e,n){var i=t._vm;t.getters={},t._makeLocalGettersCache=Object.create(null);var r=t._wrappedGetters,s={};u(r,(function(e,n){s[n]=d(e,t),Object.defineProperty(t.getters,n,{get:function(){return t._vm[n]},enumerable:!0})}));var o=v.config.silent;v.config.silent=!0,t._vm=new v({data:{$$state:e},computed:s}),v.config.silent=o,t.strict&&C(t),i&&(n&&t._withCommit((function(){i._data.$$state=null})),v.nextTick((function(){return i.$destroy()})))}function I(t,e,n,i,r){var s=!n.length,o=t._modules.getNamespace(n);if(i.namespaced&&(t._modulesNamespaceMap[o],t._modulesNamespaceMap[o]=i),!s&&!r){var a=A(e,n.slice(0,-1)),c=n[n.length-1];t._withCommit((function(){v.set(a,c,i.state)}))}var u=i.context=S(t,o,n);i.forEachMutation((function(e,n){var i=o+n;T(t,i,e,u)})),i.forEachAction((function(e,n){var i=e.root?n:o+n,r=e.handler||e;E(t,i,r,u)})),i.forEachGetter((function(e,n){var i=o+n;x(t,i,e,u)})),i.forEachChild((function(i,s){I(t,e,n.concat(s),i,r)}))}function S(t,e,n){var i=""===e,r={dispatch:i?t.dispatch:function(n,i,r){var s=j(n,i,r),o=s.payload,a=s.options,c=s.type;return a&&a.root||(c=e+c),t.dispatch(c,o)},commit:i?t.commit:function(n,i,r){var s=j(n,i,r),o=s.payload,a=s.options,c=s.type;a&&a.root||(c=e+c),t.commit(c,o,a)}};return Object.defineProperties(r,{getters:{get:i?function(){return t.getters}:function(){return k(t,e)}},state:{get:function(){return A(t.state,n)}}}),r}function k(t,e){if(!t._makeLocalGettersCache[e]){var n={},i=e.length;Object.keys(t.getters).forEach((function(r){if(r.slice(0,i)===e){var s=r.slice(i);Object.defineProperty(n,s,{get:function(){return t.getters[r]},enumerable:!0})}})),t._makeLocalGettersCache[e]=n}return t._makeLocalGettersCache[e]}function T(t,e,n,i){var r=t._mutations[e]||(t._mutations[e]=[]);r.push((function(e){n.call(t,i.state,e)}))}function E(t,e,n,i){var r=t._actions[e]||(t._actions[e]=[]);r.push((function(e){var r=n.call(t,{dispatch:i.dispatch,commit:i.commit,getters:i.getters,state:i.state,rootGetters:t.getters,rootState:t.state},e);return h(r)||(r=Promise.resolve(r)),t._devtoolHook?r.catch((function(e){throw t._devtoolHook.emit("vuex:error",e),e})):r}))}function x(t,e,n,i){t._wrappedGetters[e]||(t._wrappedGetters[e]=function(t){return n(i.state,i.getters,t.state,t.getters)})}function C(t){t._vm.$watch((function(){return this._data.$$state}),(function(){0}),{deep:!0,sync:!0})}function A(t,e){return e.reduce((function(t,e){return t[e]}),t)}function j(t,e,n){return l(t)&&t.type&&(n=e,e=t,t=t.type),{type:t,payload:e,options:n}}function R(t){v&&t===v||(v=t,i(v))}b.state.get=function(){return this._vm._data.$$state},b.state.set=function(t){0},y.prototype.commit=function(t,e,n){var i=this,r=j(t,e,n),s=r.type,o=r.payload,a=(r.options,{type:s,payload:o}),c=this._mutations[s];c&&(this._withCommit((function(){c.forEach((function(t){t(o)}))})),this._subscribers.slice().forEach((function(t){return t(a,i.state)})))},y.prototype.dispatch=function(t,e){var n=this,i=j(t,e),r=i.type,s=i.payload,o={type:r,payload:s},a=this._actions[r];if(a){try{this._actionSubscribers.slice().filter((function(t){return t.before})).forEach((function(t){return t.before(o,n.state)}))}catch(u){0}var c=a.length>1?Promise.all(a.map((function(t){return t(s)}))):a[0](s);return new Promise((function(t,e){c.then((function(e){try{n._actionSubscribers.filter((function(t){return t.after})).forEach((function(t){return t.after(o,n.state)}))}catch(u){0}t(e)}),(function(t){try{n._actionSubscribers.filter((function(t){return t.error})).forEach((function(e){return e.error(o,n.state,t)}))}catch(u){0}e(t)}))}))}},y.prototype.subscribe=function(t,e){return w(t,this._subscribers,e)},y.prototype.subscribeAction=function(t,e){var n="function"===typeof t?{before:t}:t;return w(n,this._actionSubscribers,e)},y.prototype.watch=function(t,e,n){var i=this;return this._watcherVM.$watch((function(){return t(i.state,i.getters)}),e,n)},y.prototype.replaceState=function(t){var e=this;this._withCommit((function(){e._vm._data.$$state=t}))},y.prototype.registerModule=function(t,e,n){void 0===n&&(n={}),"string"===typeof t&&(t=[t]),this._modules.register(t,e),I(this,this.state,t,this._modules.get(t),n.preserveState),O(this,this.state)},y.prototype.unregisterModule=function(t){var e=this;"string"===typeof t&&(t=[t]),this._modules.unregister(t),this._withCommit((function(){var n=A(e.state,t.slice(0,-1));v.delete(n,t[t.length-1])})),_(this)},y.prototype.hasModule=function(t){return"string"===typeof t&&(t=[t]),this._modules.isRegistered(t)},y.prototype.hotUpdate=function(t){this._modules.update(t),_(this,!0)},y.prototype._withCommit=function(t){var e=this._committing;this._committing=!0,t(),this._committing=e},Object.defineProperties(y.prototype,b);var L=B((function(t,e){var n={};return $(e).forEach((function(e){var i=e.key,r=e.val;n[i]=function(){var e=this.$store.state,n=this.$store.getters;if(t){var i=V(this.$store,"mapState",t);if(!i)return;e=i.context.state,n=i.context.getters}return"function"===typeof r?r.call(this,e,n):e[r]},n[i].vuex=!0})),n})),N=B((function(t,e){var n={};return $(e).forEach((function(e){var i=e.key,r=e.val;n[i]=function(){var e=[],n=arguments.length;while(n--)e[n]=arguments[n];var i=this.$store.commit;if(t){var s=V(this.$store,"mapMutations",t);if(!s)return;i=s.context.commit}return"function"===typeof r?r.apply(this,[i].concat(e)):i.apply(this.$store,[r].concat(e))}})),n})),D=B((function(t,e){var n={};return $(e).forEach((function(e){var i=e.key,r=e.val;r=t+r,n[i]=function(){if(!t||V(this.$store,"mapGetters",t))return this.$store.getters[r]},n[i].vuex=!0})),n})),P=B((function(t,e){var n={};return $(e).forEach((function(e){var i=e.key,r=e.val;n[i]=function(){var e=[],n=arguments.length;while(n--)e[n]=arguments[n];var i=this.$store.dispatch;if(t){var s=V(this.$store,"mapActions",t);if(!s)return;i=s.context.dispatch}return"function"===typeof r?r.apply(this,[i].concat(e)):i.apply(this.$store,[r].concat(e))}})),n})),M=function(t){return{mapState:L.bind(null,t),mapGetters:D.bind(null,t),mapMutations:N.bind(null,t),mapActions:P.bind(null,t)}};function $(t){return F(t)?Array.isArray(t)?t.map((function(t){return{key:t,val:t}})):Object.keys(t).map((function(e){return{key:e,val:t[e]}})):[]}function F(t){return Array.isArray(t)||l(t)}function B(t){return function(e,n){return"string"!==typeof e?(n=e,e=""):"/"!==e.charAt(e.length-1)&&(e+="/"),t(e,n)}}function V(t,e,n){var i=t._modulesNamespaceMap[n];return i}function U(t){void 0===t&&(t={});var e=t.collapsed;void 0===e&&(e=!0);var n=t.filter;void 0===n&&(n=function(t,e,n){return!0});var i=t.transformer;void 0===i&&(i=function(t){return t});var r=t.mutationTransformer;void 0===r&&(r=function(t){return t});var s=t.actionFilter;void 0===s&&(s=function(t,e){return!0});var o=t.actionTransformer;void 0===o&&(o=function(t){return t});var a=t.logMutations;void 0===a&&(a=!0);var u=t.logActions;void 0===u&&(u=!0);var l=t.logger;return void 0===l&&(l=console),function(t){var h=c(t.state);"undefined"!==typeof l&&(a&&t.subscribe((function(t,s){var o=c(s);if(n(t,h,o)){var a=H(),u=r(t),d="mutation "+t.type+a;q(l,d,e),l.log("%c prev state","color: #9E9E9E; font-weight: bold",i(h)),l.log("%c mutation","color: #03A9F4; font-weight: bold",u),l.log("%c next state","color: #4CAF50; font-weight: bold",i(o)),z(l)}h=o})),u&&t.subscribeAction((function(t,n){if(s(t,n)){var i=H(),r=o(t),a="action "+t.type+i;q(l,a,e),l.log("%c action","color: #03A9F4; font-weight: bold",r),z(l)}})))}}function q(t,e,n){var i=n?t.groupCollapsed:t.group;try{i.call(t,e)}catch(r){t.log(e)}}function z(t){try{t.groupEnd()}catch(e){t.log("—— log end ——")}}function H(){var t=new Date;return" @ "+G(t.getHours(),2)+":"+G(t.getMinutes(),2)+":"+G(t.getSeconds(),2)+"."+G(t.getMilliseconds(),3)}function W(t,e){return new Array(e+1).join(t)}function G(t,e){return W("0",e-t.toString().length)+t}var K={Store:y,install:R,version:"3.6.2",mapState:L,mapMutations:N,mapGetters:D,mapActions:P,createNamespacedHelpers:M,createLogger:U};e["a"]=K}).call(this,n("c8ba"))},"2fa4":function(t,e,n){"use strict";n("20f6");var i=n("80d2");e["a"]=Object(i["i"])("spacer","div","v-spacer")},3206:function(t,e,n){"use strict";n.d(e,"a",(function(){return a})),n.d(e,"b",(function(){return c}));var i=n("ade3"),r=(n("99af"),n("2b0e")),s=n("d9bd");function o(t,e){return function(){return Object(s["c"])("The ".concat(t," component must be used inside a ").concat(e))}}function a(t,e,n){var s=e&&n?{register:o(e,n),unregister:o(e,n)}:null;return r["a"].extend({name:"registrable-inject",inject:Object(i["a"])({},t,{default:s})})}function c(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return r["a"].extend({name:"registrable-provide",provide:function(){return Object(i["a"])({},t,e?this:{register:this.register,unregister:this.unregister})}})}},3408:function(t,e,n){},3410:function(t,e,n){var i=n("23e7"),r=n("d039"),s=n("7b0b"),o=n("e163"),a=n("e177"),c=r((function(){o(1)}));i({target:"Object",stat:!0,forced:c,sham:!a},{getPrototypeOf:function(t){return o(s(t))}})},"342f":function(t,e,n){var i=n("d066");t.exports=i("navigator","userAgent")||""},"34c3":function(t,e,n){"use strict";n("498a");var i=n("2b0e");e["a"]=i["a"].extend({name:"v-list-item-icon",functional:!0,render:function(t,e){var n=e.data,i=e.children;return n.staticClass="v-list-item__icon ".concat(n.staticClass||"").trim(),t("div",n,i)}})},"34ef":function(t,e,n){"use strict";var i=n("3835"),r=n("5530"),s=(n("d3b7"),n("4de4"),n("8adc"),n("58df")),o=n("0789"),a=n("9d26"),c=n("a9ad"),u=n("4e82"),l=n("7560"),h=n("f2e7"),d=n("1c87"),f=n("af2b"),p=n("d9bd"),m=Object(s["a"])(c["a"],f["a"],d["a"],l["a"],Object(u["a"])("chipGroup"),Object(h["b"])("inputValue")).extend({name:"v-chip",props:{active:{type:Boolean,default:!0},activeClass:{type:String,default:function(){return this.chipGroup?this.chipGroup.activeClass:""}},close:Boolean,closeIcon:{type:String,default:"$delete"},closeLabel:{type:String,default:"$vuetify.close"},disabled:Boolean,draggable:Boolean,filter:Boolean,filterIcon:{type:String,default:"$complete"},label:Boolean,link:Boolean,outlined:Boolean,pill:Boolean,tag:{type:String,default:"span"},textColor:String,value:null},data:function(){return{proxyClass:"v-chip--active"}},computed:{classes:function(){return Object(r["a"])(Object(r["a"])(Object(r["a"])(Object(r["a"])({"v-chip":!0},d["a"].options.computed.classes.call(this)),{},{"v-chip--clickable":this.isClickable,"v-chip--disabled":this.disabled,"v-chip--draggable":this.draggable,"v-chip--label":this.label,"v-chip--link":this.isLink,"v-chip--no-color":!this.color,"v-chip--outlined":this.outlined,"v-chip--pill":this.pill,"v-chip--removable":this.hasClose},this.themeClasses),this.sizeableClasses),this.groupClasses)},hasClose:function(){return Boolean(this.close)},isClickable:function(){return Boolean(d["a"].options.computed.isClickable.call(this)||this.chipGroup)}},created:function(){var t=this,e=[["outline","outlined"],["selected","input-value"],["value","active"],["@input","@active.sync"]];e.forEach((function(e){var n=Object(i["a"])(e,2),r=n[0],s=n[1];t.$attrs.hasOwnProperty(r)&&Object(p["a"])(r,s,t)}))},methods:{click:function(t){this.$emit("click",t),this.chipGroup&&this.toggle()},genFilter:function(){var t=[];return this.isActive&&t.push(this.$createElement(a["a"],{staticClass:"v-chip__filter",props:{left:!0}},this.filterIcon)),this.$createElement(o["b"],t)},genClose:function(){var t=this;return this.$createElement(a["a"],{staticClass:"v-chip__close",props:{right:!0,size:18},attrs:{"aria-label":this.$vuetify.lang.t(this.closeLabel)},on:{click:function(e){e.stopPropagation(),e.preventDefault(),t.$emit("click:close"),t.$emit("update:active",!1)}}},this.closeIcon)},genContent:function(){return this.$createElement("span",{staticClass:"v-chip__content"},[this.filter&&this.genFilter(),this.$slots.default,this.hasClose&&this.genClose()])}},render:function(t){var e=[this.genContent()],n=this.generateRouteLink(),i=n.tag,s=n.data;s.attrs=Object(r["a"])(Object(r["a"])({},s.attrs),{},{draggable:this.draggable?"true":void 0,tabindex:this.chipGroup&&!this.disabled?0:s.attrs.tabindex}),s.directives.push({name:"show",value:this.active}),s=this.setBackgroundColor(this.color,s);var o=this.textColor||this.outlined&&this.color;return t(i,this.setTextColor(o,s),e)}});e["a"]=m},"35a1":function(t,e,n){var i=n("f5df"),r=n("dc4a"),s=n("3f8c"),o=n("b622"),a=o("iterator");t.exports=function(t){if(void 0!=t)return r(t,a)||r(t,"@@iterator")||s[i(t)]}},"368e":function(t,e,n){},"36a7":function(t,e,n){},"37e8":function(t,e,n){var i=n("83ab"),r=n("aed9"),s=n("9bf2"),o=n("825a"),a=n("fc6a"),c=n("df75");e.f=i&&!r?Object.defineProperties:function(t,e){o(t);var n,i=a(e),r=c(e),u=r.length,l=0;while(u>l)s.f(t,n=r[l++],i[n]);return t}},3835:function(t,e,n){"use strict";function i(t){if(Array.isArray(t))return t}n.d(e,"a",(function(){return a}));n("a4d3"),n("e01a"),n("d3b7"),n("d28b"),n("3ca3"),n("ddb0");function r(t,e){var n=null==t?null:"undefined"!==typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=n){var i,r,s=[],o=!0,a=!1;try{for(n=n.call(t);!(o=(i=n.next()).done);o=!0)if(s.push(i.value),e&&s.length===e)break}catch(c){a=!0,r=c}finally{try{o||null==n["return"]||n["return"]()}finally{if(a)throw r}}return s}}var s=n("06c5");n("d9e2");function o(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function a(t,e){return i(t)||r(t,e)||Object(s["a"])(t,e)||o()}},"38cb":function(t,e,n){"use strict";var i=n("53ca"),r=(n("a9e3"),n("fb6a"),n("a9ad")),s=n("7560"),o=n("3206"),a=n("80d2"),c=n("d9bd"),u=n("58df"),l=Object(u["a"])(r["a"],Object(o["a"])("form"),s["a"]);e["a"]=l.extend({name:"validatable",props:{disabled:Boolean,error:Boolean,errorCount:{type:[Number,String],default:1},errorMessages:{type:[String,Array],default:function(){return[]}},messages:{type:[String,Array],default:function(){return[]}},readonly:Boolean,rules:{type:Array,default:function(){return[]}},success:Boolean,successMessages:{type:[String,Array],default:function(){return[]}},validateOnBlur:Boolean,value:{required:!1}},data:function(){return{errorBucket:[],hasColor:!1,hasFocused:!1,hasInput:!1,isFocused:!1,isResetting:!1,lazyValue:this.value,valid:!1}},computed:{computedColor:function(){if(!this.isDisabled)return this.color?this.color:this.isDark&&!this.appIsDark?"white":"primary"},hasError:function(){return this.internalErrorMessages.length>0||this.errorBucket.length>0||this.error},hasSuccess:function(){return this.internalSuccessMessages.length>0||this.success},externalError:function(){return this.internalErrorMessages.length>0||this.error},hasMessages:function(){return this.validationTarget.length>0},hasState:function(){return!this.isDisabled&&(this.hasSuccess||this.shouldValidate&&this.hasError)},internalErrorMessages:function(){return this.genInternalMessages(this.errorMessages)},internalMessages:function(){return this.genInternalMessages(this.messages)},internalSuccessMessages:function(){return this.genInternalMessages(this.successMessages)},internalValue:{get:function(){return this.lazyValue},set:function(t){this.lazyValue=t,this.$emit("input",t)}},isDisabled:function(){return this.disabled||!!this.form&&this.form.disabled},isInteractive:function(){return!this.isDisabled&&!this.isReadonly},isReadonly:function(){return this.readonly||!!this.form&&this.form.readonly},shouldValidate:function(){return!!this.externalError||!this.isResetting&&(this.validateOnBlur?this.hasFocused&&!this.isFocused:this.hasInput||this.hasFocused)},validations:function(){return this.validationTarget.slice(0,Number(this.errorCount))},validationState:function(){if(!this.isDisabled)return this.hasError&&this.shouldValidate?"error":this.hasSuccess?"success":this.hasColor?this.computedColor:void 0},validationTarget:function(){return this.internalErrorMessages.length>0?this.internalErrorMessages:this.successMessages&&this.successMessages.length>0?this.internalSuccessMessages:this.messages&&this.messages.length>0?this.internalMessages:this.shouldValidate?this.errorBucket:[]}},watch:{rules:{handler:function(t,e){Object(a["j"])(t,e)||this.validate()},deep:!0},internalValue:function(){this.hasInput=!0,this.validateOnBlur||this.$nextTick(this.validate)},isFocused:function(t){t||this.isDisabled||(this.hasFocused=!0,this.validateOnBlur&&this.$nextTick(this.validate))},isResetting:function(){var t=this;setTimeout((function(){t.hasInput=!1,t.hasFocused=!1,t.isResetting=!1,t.validate()}),0)},hasError:function(t){this.shouldValidate&&this.$emit("update:error",t)},value:function(t){this.lazyValue=t}},beforeMount:function(){this.validate()},created:function(){this.form&&this.form.register(this)},beforeDestroy:function(){this.form&&this.form.unregister(this)},methods:{genInternalMessages:function(t){return t?Array.isArray(t)?t:[t]:[]},reset:function(){this.isResetting=!0,this.internalValue=Array.isArray(this.internalValue)?[]:null},resetValidation:function(){this.isResetting=!0},validate:function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0],e=arguments.length>1?arguments[1]:void 0,n=[];e=e||this.internalValue,t&&(this.hasInput=this.hasFocused=!0);for(var r=0;r<this.rules.length;r++){var s=this.rules[r],o="function"===typeof s?s(e):s;!1===o||"string"===typeof o?n.push(o||""):"boolean"!==typeof o&&Object(c["b"])("Rules should return a string or boolean, received '".concat(Object(i["a"])(o),"' instead"),this)}return this.errorBucket=n,this.valid=0===n.length,this.valid}}})},"38cf":function(t,e,n){var i=n("23e7"),r=n("1148");i({target:"String",proto:!0},{repeat:r})},"3a66":function(t,e,n){"use strict";n.d(e,"a",(function(){return s}));var i=n("fe6c"),r=n("58df");function s(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];return Object(r["a"])(Object(i["b"])(["absolute","fixed"])).extend({name:"applicationable",props:{app:Boolean},computed:{applicationProperty:function(){return t}},watch:{app:function(t,e){e?this.removeApplication(!0):this.callUpdate()},applicationProperty:function(t,e){this.$vuetify.application.unregister(this._uid,e)}},activated:function(){this.callUpdate()},created:function(){for(var t=0,n=e.length;t<n;t++)this.$watch(e[t],this.callUpdate);this.callUpdate()},mounted:function(){this.callUpdate()},deactivated:function(){this.removeApplication()},destroyed:function(){this.removeApplication()},methods:{callUpdate:function(){this.app&&this.$vuetify.application.register(this._uid,this.applicationProperty,this.updateApplication())},removeApplication:function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];(t||this.app)&&this.$vuetify.application.unregister(this._uid,this.applicationProperty)},updateApplication:function(){return 0}}})}},"3a9b":function(t,e,n){var i=n("e330");t.exports=i({}.isPrototypeOf)},"3ad0":function(t,e,n){},"3bbe":function(t,e,n){var i=n("da84"),r=n("1626"),s=i.String,o=i.TypeError;t.exports=function(t){if("object"==typeof t||r(t))return t;throw o("Can't set "+s(t)+" as a prototype")}},"3c93":function(t,e,n){},"3ca3":function(t,e,n){"use strict";var i=n("6547").charAt,r=n("577e"),s=n("69f3"),o=n("7dd0"),a="String Iterator",c=s.set,u=s.getterFor(a);o(String,"String",(function(t){c(this,{type:a,string:r(t),index:0})}),(function(){var t,e=u(this),n=e.string,r=e.index;return r>=n.length?{value:void 0,done:!0}:(t=i(n,r),e.index+=t.length,{value:t,done:!1})}))},"3ea3":function(t,e,n){var i=n("23e7"),r=n("f748"),s=Math.abs,o=Math.pow;i({target:"Math",stat:!0},{cbrt:function(t){return r(t=+t)*o(s(t),1/3)}})},"3f8c":function(t,e){t.exports={}},4069:function(t,e,n){var i=n("44d2");i("flat")},"408a":function(t,e,n){var i=n("e330");t.exports=i(1..valueOf)},"40d5":function(t,e,n){var i=n("d039");t.exports=!i((function(){var t=function(){}.bind();return"function"!=typeof t||t.hasOwnProperty("prototype")}))},"40dc":function(t,e,n){"use strict";var i=n("5530"),r=(n("c7cd"),n("a9e3"),n("8b0d"),n("71d9")),s=n("53ca");function o(t,e,n){var i=e.modifiers||{},r=i.self,o=void 0!==r&&r,a=e.value,c="object"===Object(s["a"])(a)&&a.options||{passive:!0},u="function"===typeof a||"handleEvent"in a?a:a.handler,l=o?t:e.arg?document.querySelector(e.arg):window;l&&(l.addEventListener("scroll",u,c),t._onScroll=Object(t._onScroll),t._onScroll[n.context._uid]={handler:u,options:c,target:o?void 0:l})}function a(t,e,n){var i;if(null!=(i=t._onScroll)&&i[n.context._uid]){var r=t._onScroll[n.context._uid],s=r.handler,o=r.options,a=r.target,c=void 0===a?t:a;c.removeEventListener("scroll",s,o),delete t._onScroll[n.context._uid]}}var c={inserted:o,unbind:a},u=c,l=n("3a66"),h=n("d9bd"),d=n("2b0e"),f=d["a"].extend({name:"scrollable",directives:{Scroll:c},props:{scrollTarget:String,scrollThreshold:[String,Number]},data:function(){return{currentScroll:0,currentThreshold:0,isActive:!1,isScrollingUp:!1,previousScroll:0,savedScroll:0,target:null}},computed:{canScroll:function(){return"undefined"!==typeof window},computedScrollThreshold:function(){return this.scrollThreshold?Number(this.scrollThreshold):300}},watch:{isScrollingUp:function(){this.savedScroll=this.savedScroll||this.currentScroll},isActive:function(){this.savedScroll=0}},mounted:function(){this.scrollTarget&&(this.target=document.querySelector(this.scrollTarget),this.target||Object(h["c"])("Unable to locate element with identifier ".concat(this.scrollTarget),this))},methods:{onScroll:function(){var t=this;this.canScroll&&(this.previousScroll=this.currentScroll,this.currentScroll=this.target?this.target.scrollTop:window.pageYOffset,this.isScrollingUp=this.currentScroll<this.previousScroll,this.currentThreshold=Math.abs(this.currentScroll-this.computedScrollThreshold),this.$nextTick((function(){Math.abs(t.currentScroll-t.savedScroll)>t.computedScrollThreshold&&t.thresholdMet()})))},thresholdMet:function(){}}}),p=n("d10f"),m=n("f2e7"),g=n("80d2"),v=n("58df"),y=Object(v["a"])(r["a"],f,p["a"],m["a"],Object(l["a"])("top",["clippedLeft","clippedRight","computedHeight","invertedScroll","isExtended","isProminent","value"]));e["a"]=y.extend({name:"v-app-bar",directives:{Scroll:u},provide:function(){return{VAppBar:this}},props:{clippedLeft:Boolean,clippedRight:Boolean,collapseOnScroll:Boolean,elevateOnScroll:Boolean,fadeImgOnScroll:Boolean,hideOnScroll:Boolean,invertedScroll:Boolean,scrollOffScreen:Boolean,shrinkOnScroll:Boolean,value:{type:Boolean,default:!0}},data:function(){return{isActive:this.value}},computed:{applicationProperty:function(){return this.bottom?"bottom":"top"},canScroll:function(){return f.options.computed.canScroll.call(this)&&(this.invertedScroll||this.elevateOnScroll||this.hideOnScroll||this.collapseOnScroll||this.isBooted||!this.value)},classes:function(){return Object(i["a"])(Object(i["a"])({},r["a"].options.computed.classes.call(this)),{},{"v-toolbar--collapse":this.collapse||this.collapseOnScroll,"v-app-bar":!0,"v-app-bar--clipped":this.clippedLeft||this.clippedRight,"v-app-bar--fade-img-on-scroll":this.fadeImgOnScroll,"v-app-bar--elevate-on-scroll":this.elevateOnScroll,"v-app-bar--fixed":!this.absolute&&(this.app||this.fixed),"v-app-bar--hide-shadow":this.hideShadow,"v-app-bar--is-scrolled":this.currentScroll>0,"v-app-bar--shrink-on-scroll":this.shrinkOnScroll})},scrollRatio:function(){var t=this.computedScrollThreshold;return Math.max((t-this.currentScroll)/t,0)},computedContentHeight:function(){if(!this.shrinkOnScroll)return r["a"].options.computed.computedContentHeight.call(this);var t=this.dense?48:56,e=this.computedOriginalHeight;return t+(e-t)*this.scrollRatio},computedFontSize:function(){if(this.isProminent){var t=1.25,e=1.5;return t+(e-t)*this.scrollRatio}},computedLeft:function(){return!this.app||this.clippedLeft?0:this.$vuetify.application.left},computedMarginTop:function(){return this.app?this.$vuetify.application.bar:0},computedOpacity:function(){if(this.fadeImgOnScroll)return this.scrollRatio},computedOriginalHeight:function(){var t=r["a"].options.computed.computedContentHeight.call(this);return this.isExtended&&(t+=parseInt(this.extensionHeight)),t},computedRight:function(){return!this.app||this.clippedRight?0:this.$vuetify.application.right},computedScrollThreshold:function(){return this.scrollThreshold?Number(this.scrollThreshold):this.computedOriginalHeight-(this.dense?48:56)},computedTransform:function(){if(!this.canScroll||this.elevateOnScroll&&0===this.currentScroll&&this.isActive)return 0;if(this.isActive)return 0;var t=this.scrollOffScreen?this.computedHeight:this.computedContentHeight;return this.bottom?t:-t},hideShadow:function(){return this.elevateOnScroll&&this.isExtended?this.currentScroll<this.computedScrollThreshold:this.elevateOnScroll?0===this.currentScroll||this.computedTransform<0:(!this.isExtended||this.scrollOffScreen)&&0!==this.computedTransform},isCollapsed:function(){return this.collapseOnScroll?this.currentScroll>0:r["a"].options.computed.isCollapsed.call(this)},isProminent:function(){return r["a"].options.computed.isProminent.call(this)||this.shrinkOnScroll},styles:function(){return Object(i["a"])(Object(i["a"])({},r["a"].options.computed.styles.call(this)),{},{fontSize:Object(g["h"])(this.computedFontSize,"rem"),marginTop:Object(g["h"])(this.computedMarginTop),transform:"translateY(".concat(Object(g["h"])(this.computedTransform),")"),left:Object(g["h"])(this.computedLeft),right:Object(g["h"])(this.computedRight)})}},watch:{canScroll:"onScroll",computedTransform:function(){this.canScroll&&(this.clippedLeft||this.clippedRight)&&this.callUpdate()},invertedScroll:function(t){this.isActive=!t||0!==this.currentScroll},hideOnScroll:function(t){this.isActive=!t||this.currentScroll<this.computedScrollThreshold}},created:function(){this.invertedScroll&&(this.isActive=!1)},methods:{genBackground:function(){var t=r["a"].options.methods.genBackground.call(this);return t.data=this._b(t.data||{},t.tag,{style:{opacity:this.computedOpacity}}),t},updateApplication:function(){return this.invertedScroll?0:this.computedHeight+this.computedTransform},thresholdMet:function(){this.invertedScroll?this.isActive=this.currentScroll>this.computedScrollThreshold:(this.hideOnScroll&&(this.isActive=this.isScrollingUp||this.currentScroll<this.computedScrollThreshold),this.currentThreshold<this.computedScrollThreshold||(this.savedScroll=this.currentScroll))}},render:function(t){var e=r["a"].options.render.call(this,t);return e.data=e.data||{},this.canScroll&&(e.data.directives=e.data.directives||[],e.data.directives.push({arg:this.scrollTarget,name:"scroll",value:this.onScroll})),e}})},"428f":function(t,e,n){var i=n("da84");t.exports=i},4362:function(t,e,n){e.nextTick=function(t){var e=Array.prototype.slice.call(arguments);e.shift(),setTimeout((function(){t.apply(null,e)}),0)},e.platform=e.arch=e.execPath=e.title="browser",e.pid=1,e.browser=!0,e.env={},e.argv=[],e.binding=function(t){throw new Error("No such module. (Possibly not yet loaded)")},function(){var t,i="/";e.cwd=function(){return i},e.chdir=function(e){t||(t=n("df7c")),i=t.resolve(e,i)}}(),e.exit=e.kill=e.umask=e.dlopen=e.uptime=e.memoryUsage=e.uvCounters=function(){},e.features={}},"44ad":function(t,e,n){var i=n("da84"),r=n("e330"),s=n("d039"),o=n("c6b6"),a=i.Object,c=r("".split);t.exports=s((function(){return!a("z").propertyIsEnumerable(0)}))?function(t){return"String"==o(t)?c(t,""):a(t)}:a},"44d2":function(t,e,n){var i=n("b622"),r=n("7c73"),s=n("9bf2"),o=i("unscopables"),a=Array.prototype;void 0==a[o]&&s.f(a,o,{configurable:!0,value:r(null)}),t.exports=function(t){a[o][t]=!0}},"44de":function(t,e,n){var i=n("da84");t.exports=function(t,e){var n=i.console;n&&n.error&&(1==arguments.length?n.error(t):n.error(t,e))}},"44e7":function(t,e,n){var i=n("861d"),r=n("c6b6"),s=n("b622"),o=s("match");t.exports=function(t){var e;return i(t)&&(void 0!==(e=t[o])?!!e:"RegExp"==r(t))}},"466d":function(t,e,n){"use strict";var i=n("c65b"),r=n("d784"),s=n("825a"),o=n("50c4"),a=n("577e"),c=n("1d80"),u=n("dc4a"),l=n("8aa5"),h=n("14c3");r("match",(function(t,e,n){return[function(e){var n=c(this),r=void 0==e?void 0:u(e,t);return r?i(r,e,n):new RegExp(e)[t](a(n))},function(t){var i=s(this),r=a(t),c=n(e,i,r);if(c.done)return c.value;if(!i.global)return h(i,r);var u=i.unicode;i.lastIndex=0;var d,f=[],p=0;while(null!==(d=h(i,r))){var m=a(d[0]);f[p]=m,""===m&&(i.lastIndex=l(r,o(i.lastIndex),u)),p++}return 0===p?null:f}]}))},4804:function(t,e,n){},"480e":function(t,e,n){"use strict";n("7db0"),n("d3b7");var i=n("7560");e["a"]=i["a"].extend({name:"v-theme-provider",props:{root:Boolean},computed:{isDark:function(){return this.root?this.rootIsDark:i["a"].options.computed.isDark.call(this)}},render:function(){return this.$slots.default&&this.$slots.default.find((function(t){return!t.isComment&&" "!==t.text}))}})},4840:function(t,e,n){var i=n("825a"),r=n("5087"),s=n("b622"),o=s("species");t.exports=function(t,e){var n,s=i(t).constructor;return void 0===s||void 0==(n=i(s)[o])?e:r(n)}},"485a":function(t,e,n){var i=n("da84"),r=n("c65b"),s=n("1626"),o=n("861d"),a=i.TypeError;t.exports=function(t,e){var n,i;if("string"===e&&s(n=t.toString)&&!o(i=r(n,t)))return i;if(s(n=t.valueOf)&&!o(i=r(n,t)))return i;if("string"!==e&&s(n=t.toString)&&!o(i=r(n,t)))return i;throw a("Can't convert object to primitive value")}},4930:function(t,e,n){var i=n("2d00"),r=n("d039");t.exports=!!Object.getOwnPropertySymbols&&!r((function(){var t=Symbol();return!String(t)||!(Object(t)instanceof Symbol)||!Symbol.sham&&i&&i<41}))},"495d":function(t,e,n){},"498a":function(t,e,n){"use strict";var i=n("23e7"),r=n("58a8").trim,s=n("c8d2");i({target:"String",proto:!0,forced:s("trim")},{trim:function(){return r(this)}})},"4ad4":function(t,e,n){"use strict";var i=n("53ca"),r=(n("caad"),n("b64b"),n("d3b7"),n("b0c0"),n("16b7")),s=n("f2e7"),o=n("58df"),a=n("80d2"),c=n("d9bd"),u=Object(o["a"])(r["a"],s["a"]);e["a"]=u.extend({name:"activatable",props:{activator:{default:null,validator:function(t){return["string","object"].includes(Object(i["a"])(t))}},disabled:Boolean,internalActivator:Boolean,openOnClick:{type:Boolean,default:!0},openOnHover:Boolean,openOnFocus:Boolean},data:function(){return{activatorElement:null,activatorNode:[],events:["click","mouseenter","mouseleave","focus"],listeners:{}}},watch:{activator:"resetActivator",openOnFocus:"resetActivator",openOnHover:"resetActivator"},mounted:function(){var t=Object(a["t"])(this,"activator",!0);t&&["v-slot","normal"].includes(t)&&Object(c["b"])('The activator slot must be bound, try \'<template v-slot:activator="{ on }"><v-btn v-on="on">\'',this),this.addActivatorEvents()},beforeDestroy:function(){this.removeActivatorEvents()},methods:{addActivatorEvents:function(){if(this.activator&&!this.disabled&&this.getActivator()){this.listeners=this.genActivatorListeners();for(var t=Object.keys(this.listeners),e=0,n=t;e<n.length;e++){var i=n[e];this.getActivator().addEventListener(i,this.listeners[i])}}},genActivator:function(){var t=Object(a["s"])(this,"activator",Object.assign(this.getValueProxy(),{on:this.genActivatorListeners(),attrs:this.genActivatorAttributes()}))||[];return this.activatorNode=t,t},genActivatorAttributes:function(){return{role:this.openOnClick&&!this.openOnHover?"button":void 0,"aria-haspopup":!0,"aria-expanded":String(this.isActive)}},genActivatorListeners:function(){var t=this;if(this.disabled)return{};var e={};return this.openOnHover?(e.mouseenter=function(e){t.getActivator(e),t.runDelay("open")},e.mouseleave=function(e){t.getActivator(e),t.runDelay("close")}):this.openOnClick&&(e.click=function(e){var n=t.getActivator(e);n&&n.focus(),e.stopPropagation(),t.isActive=!t.isActive}),this.openOnFocus&&(e.focus=function(e){t.getActivator(e),e.stopPropagation(),t.isActive=!t.isActive}),e},getActivator:function(t){var e;if(this.activatorElement)return this.activatorElement;var n=null;if(this.activator){var i=this.internalActivator?this.$el:document;n="string"===typeof this.activator?i.querySelector(this.activator):this.activator.$el?this.activator.$el:this.activator}else if(1===this.activatorNode.length||this.activatorNode.length&&!t){var r=this.activatorNode[0].componentInstance;n=r&&r.$options.mixins&&r.$options.mixins.some((function(t){return t.options&&["activatable","menuable"].includes(t.options.name)}))?r.getActivator():this.activatorNode[0].elm}else t&&(n=t.currentTarget||t.target);return this.activatorElement=(null==(e=n)?void 0:e.nodeType)===Node.ELEMENT_NODE?n:null,this.activatorElement},getContentSlot:function(){return Object(a["s"])(this,"default",this.getValueProxy(),!0)},getValueProxy:function(){var t=this;return{get value(){return t.isActive},set value(e){t.isActive=e}}},removeActivatorEvents:function(){if(this.activator&&this.activatorElement){for(var t=Object.keys(this.listeners),e=0,n=t;e<n.length;e++){var i=n[e];this.activatorElement.removeEventListener(i,this.listeners[i])}this.listeners={}}},resetActivator:function(){this.removeActivatorEvents(),this.activatorElement=null,this.getActivator(),this.addActivatorEvents()}}})},"4ae1":function(t,e,n){var i=n("23e7"),r=n("d066"),s=n("2ba4"),o=n("0538"),a=n("5087"),c=n("825a"),u=n("861d"),l=n("7c73"),h=n("d039"),d=r("Reflect","construct"),f=Object.prototype,p=[].push,m=h((function(){function t(){}return!(d((function(){}),[],t)instanceof t)})),g=!h((function(){d((function(){}))})),v=m||g;i({target:"Reflect",stat:!0,forced:v,sham:v},{construct:function(t,e){a(t),c(e);var n=arguments.length<3?t:a(arguments[2]);if(g&&!m)return d(t,e,n);if(t==n){switch(e.length){case 0:return new t;case 1:return new t(e[0]);case 2:return new t(e[0],e[1]);case 3:return new t(e[0],e[1],e[2]);case 4:return new t(e[0],e[1],e[2],e[3])}var i=[null];return s(p,i,e),new(s(o,t,i))}var r=n.prototype,h=l(u(r)?r:f),v=s(t,h,e);return u(v)?v:h}})},"4b85":function(t,e,n){},"4d63":function(t,e,n){var i=n("83ab"),r=n("da84"),s=n("e330"),o=n("94ca"),a=n("7156"),c=n("9112"),u=n("9bf2").f,l=n("241c").f,h=n("3a9b"),d=n("44e7"),f=n("577e"),p=n("ad6d"),m=n("9f7f"),g=n("6eeb"),v=n("d039"),y=n("1a2d"),b=n("69f3").enforce,w=n("2626"),_=n("b622"),O=n("fce3"),I=n("107c"),S=_("match"),k=r.RegExp,T=k.prototype,E=r.SyntaxError,x=s(p),C=s(T.exec),A=s("".charAt),j=s("".replace),R=s("".indexOf),L=s("".slice),N=/^\?<[^\s\d!#%&*+<=>@^][^\s!#%&*+<=>@^]*>/,D=/a/g,P=/a/g,M=new k(D)!==D,$=m.MISSED_STICKY,F=m.UNSUPPORTED_Y,B=i&&(!M||$||O||I||v((function(){return P[S]=!1,k(D)!=D||k(P)==P||"/a/i"!=k(D,"i")}))),V=function(t){for(var e,n=t.length,i=0,r="",s=!1;i<=n;i++)e=A(t,i),"\\"!==e?s||"."!==e?("["===e?s=!0:"]"===e&&(s=!1),r+=e):r+="[\\s\\S]":r+=e+A(t,++i);return r},U=function(t){for(var e,n=t.length,i=0,r="",s=[],o={},a=!1,c=!1,u=0,l="";i<=n;i++){if(e=A(t,i),"\\"===e)e+=A(t,++i);else if("]"===e)a=!1;else if(!a)switch(!0){case"["===e:a=!0;break;case"("===e:C(N,L(t,i+1))&&(i+=2,c=!0),r+=e,u++;continue;case">"===e&&c:if(""===l||y(o,l))throw new E("Invalid capture group name");o[l]=!0,s[s.length]=[l,u],c=!1,l="";continue}c?l+=e:r+=e}return[r,s]};if(o("RegExp",B)){for(var q=function(t,e){var n,i,r,s,o,u,l=h(T,this),p=d(t),m=void 0===e,g=[],v=t;if(!l&&p&&m&&t.constructor===q)return t;if((p||h(T,t))&&(t=t.source,m&&(e="flags"in v?v.flags:x(v))),t=void 0===t?"":f(t),e=void 0===e?"":f(e),v=t,O&&"dotAll"in D&&(i=!!e&&R(e,"s")>-1,i&&(e=j(e,/s/g,""))),n=e,$&&"sticky"in D&&(r=!!e&&R(e,"y")>-1,r&&F&&(e=j(e,/y/g,""))),I&&(s=U(t),t=s[0],g=s[1]),o=a(k(t,e),l?this:T,q),(i||r||g.length)&&(u=b(o),i&&(u.dotAll=!0,u.raw=q(V(t),n)),r&&(u.sticky=!0),g.length&&(u.groups=g)),t!==v)try{c(o,"source",""===v?"(?:)":v)}catch(y){}return o},z=function(t){t in q||u(q,t,{configurable:!0,get:function(){return k[t]},set:function(e){k[t]=e}})},H=l(k),W=0;H.length>W;)z(H[W++]);T.constructor=q,q.prototype=T,g(r,"RegExp",q)}w("RegExp")},"4d64":function(t,e,n){var i=n("fc6a"),r=n("23cb"),s=n("07fa"),o=function(t){return function(e,n,o){var a,c=i(e),u=s(c),l=r(o,u);if(t&&n!=n){while(u>l)if(a=c[l++],a!=a)return!0}else for(;u>l;l++)if((t||l in c)&&c[l]===n)return t||l||0;return!t&&-1}};t.exports={includes:o(!0),indexOf:o(!1)}},"4dae":function(t,e,n){var i=n("da84"),r=n("23cb"),s=n("07fa"),o=n("8418"),a=i.Array,c=Math.max;t.exports=function(t,e,n){for(var i=s(t),u=r(e,i),l=r(void 0===n?i:n,i),h=a(c(l-u,0)),d=0;u<l;u++,d++)o(h,d,t[u]);return h.length=d,h}},"4de4":function(t,e,n){"use strict";var i=n("23e7"),r=n("b727").filter,s=n("1dde"),o=s("filter");i({target:"Array",proto:!0,forced:!o},{filter:function(t){return r(this,t,arguments.length>1?arguments[1]:void 0)}})},"4df4":function(t,e,n){"use strict";var i=n("da84"),r=n("0366"),s=n("c65b"),o=n("7b0b"),a=n("9bdd"),c=n("e95a"),u=n("68ee"),l=n("07fa"),h=n("8418"),d=n("9a1f"),f=n("35a1"),p=i.Array;t.exports=function(t){var e=o(t),n=u(this),i=arguments.length,m=i>1?arguments[1]:void 0,g=void 0!==m;g&&(m=r(m,i>2?arguments[2]:void 0));var v,y,b,w,_,O,I=f(e),S=0;if(!I||this==p&&c(I))for(v=l(e),y=n?new this(v):p(v);v>S;S++)O=g?m(e[S],S):e[S],h(y,S,O);else for(w=d(e,I),_=w.next,y=n?new this:[];!(b=s(_,w)).done;S++)O=g?a(w,m,[b.value,S],!0):b.value,h(y,S,O);return y.length=S,y}},"4e82":function(t,e,n){"use strict";n.d(e,"a",(function(){return s}));var i=n("ade3"),r=n("3206");function s(t,e,n){return Object(r["a"])(t,e,n).extend({name:"groupable",props:{activeClass:{type:String,default:function(){if(this[t])return this[t].activeClass}},disabled:Boolean},data:function(){return{isActive:!1}},computed:{groupClasses:function(){return this.activeClass?Object(i["a"])({},this.activeClass,this.isActive):{}}},created:function(){this[t]&&this[t].register(this)},beforeDestroy:function(){this[t]&&this[t].unregister(this)},methods:{toggle:function(){this.$emit("change")}}})}s("itemGroup")},"4e827":function(t,e,n){"use strict";var i=n("23e7"),r=n("e330"),s=n("59ed"),o=n("7b0b"),a=n("07fa"),c=n("577e"),u=n("d039"),l=n("addb"),h=n("a640"),d=n("04d1"),f=n("d998"),p=n("2d00"),m=n("512c"),g=[],v=r(g.sort),y=r(g.push),b=u((function(){g.sort(void 0)})),w=u((function(){g.sort(null)})),_=h("sort"),O=!u((function(){if(p)return p<70;if(!(d&&d>3)){if(f)return!0;if(m)return m<603;var t,e,n,i,r="";for(t=65;t<76;t++){switch(e=String.fromCharCode(t),t){case 66:case 69:case 70:case 72:n=3;break;case 68:case 71:n=4;break;default:n=2}for(i=0;i<47;i++)g.push({k:e+i,v:n})}for(g.sort((function(t,e){return e.v-t.v})),i=0;i<g.length;i++)e=g[i].k.charAt(0),r.charAt(r.length-1)!==e&&(r+=e);return"DGBEFHACIJK"!==r}})),I=b||!w||!_||!O,S=function(t){return function(e,n){return void 0===n?-1:void 0===e?1:void 0!==t?+t(e,n)||0:c(e)>c(n)?1:-1}};i({target:"Array",proto:!0,forced:I},{sort:function(t){void 0!==t&&s(t);var e=o(this);if(O)return void 0===t?v(e):v(e,t);var n,i,r=[],c=a(e);for(i=0;i<c;i++)i in e&&y(r,e[i]);l(r,S(t)),n=r.length,i=0;while(i<n)e[i]=r[i++];while(i<c)delete e[i++];return e}})},"4ec9":function(t,e,n){"use strict";var i=n("6d61"),r=n("6566");i("Map",(function(t){return function(){return t(this,arguments.length?arguments[0]:void 0)}}),r)},"4f60":function(t,e,n){"use strict";var i=n("7ded");n.d(e,"a",(function(){return i["a"]}));var r="firebase",s="9.6.5";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
i["a"].registerVersion(r,s,"app-compat")},"4fad":function(t,e,n){var i=n("d039"),r=n("861d"),s=n("c6b6"),o=n("d86b"),a=Object.isExtensible,c=i((function(){a(1)}));t.exports=c||o?function(t){return!!r(t)&&((!o||"ArrayBuffer"!=s(t))&&(!a||a(t)))}:a},"4ff9":function(t,e,n){},5087:function(t,e,n){var i=n("da84"),r=n("68ee"),s=n("0d51"),o=i.TypeError;t.exports=function(t){if(r(t))return t;throw o(s(t)+" is not a constructor")}},"50c4":function(t,e,n){var i=n("5926"),r=Math.min;t.exports=function(t){return t>0?r(i(t),9007199254740991):0}},"512c":function(t,e,n){var i=n("342f"),r=i.match(/AppleWebKit\/(\d+)\./);t.exports=!!r&&+r[1]},5319:function(t,e,n){"use strict";var i=n("2ba4"),r=n("c65b"),s=n("e330"),o=n("d784"),a=n("d039"),c=n("825a"),u=n("1626"),l=n("5926"),h=n("50c4"),d=n("577e"),f=n("1d80"),p=n("8aa5"),m=n("dc4a"),g=n("0cb2"),v=n("14c3"),y=n("b622"),b=y("replace"),w=Math.max,_=Math.min,O=s([].concat),I=s([].push),S=s("".indexOf),k=s("".slice),T=function(t){return void 0===t?t:String(t)},E=function(){return"$0"==="a".replace(/./,"$0")}(),x=function(){return!!/./[b]&&""===/./[b]("a","$0")}(),C=!a((function(){var t=/./;return t.exec=function(){var t=[];return t.groups={a:"7"},t},"7"!=="".replace(t,"$<a>")}));o("replace",(function(t,e,n){var s=x?"$":"$0";return[function(t,n){var i=f(this),s=void 0==t?void 0:m(t,b);return s?r(s,t,i,n):r(e,d(i),t,n)},function(t,r){var o=c(this),a=d(t);if("string"==typeof r&&-1===S(r,s)&&-1===S(r,"$<")){var f=n(e,o,a,r);if(f.done)return f.value}var m=u(r);m||(r=d(r));var y=o.global;if(y){var b=o.unicode;o.lastIndex=0}var E=[];while(1){var x=v(o,a);if(null===x)break;if(I(E,x),!y)break;var C=d(x[0]);""===C&&(o.lastIndex=p(a,h(o.lastIndex),b))}for(var A="",j=0,R=0;R<E.length;R++){x=E[R];for(var L=d(x[0]),N=w(_(l(x.index),a.length),0),D=[],P=1;P<x.length;P++)I(D,T(x[P]));var M=x.groups;if(m){var $=O([L],D,N,a);void 0!==M&&I($,M);var F=d(i(r,void 0,$))}else F=g(L,a,N,D,M,r);N>=j&&(A+=k(a,j,N)+F,j=N+L.length)}return A+k(a,j)}]}),!C||!E||x)},"53ca":function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));n("a4d3"),n("e01a"),n("d3b7"),n("d28b"),n("3ca3"),n("ddb0");function i(t){return i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},i(t)}},5530:function(t,e,n){"use strict";n.d(e,"a",(function(){return s}));n("b64b"),n("a4d3"),n("4de4"),n("d3b7"),n("e439"),n("159b"),n("dbb4");var i=n("ade3");function r(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,i)}return n}function s(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?r(Object(n),!0).forEach((function(e){Object(i["a"])(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}},5607:function(t,e,n){"use strict";n("b0c0"),n("99af"),n("a9e3"),n("7435");var i=n("80d2"),r=80;function s(t,e){t.style.transform=e,t.style.webkitTransform=e}function o(t){return"TouchEvent"===t.constructor.name}function a(t){return"KeyboardEvent"===t.constructor.name}var c=function(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},i=0,r=0;if(!a(t)){var s=e.getBoundingClientRect(),c=o(t)?t.touches[t.touches.length-1]:t;i=c.clientX-s.left,r=c.clientY-s.top}var u=0,l=.3;e._ripple&&e._ripple.circle?(l=.15,u=e.clientWidth/2,u=n.center?u:u+Math.sqrt(Math.pow(i-u,2)+Math.pow(r-u,2))/4):u=Math.sqrt(Math.pow(e.clientWidth,2)+Math.pow(e.clientHeight,2))/2;var h="".concat((e.clientWidth-2*u)/2,"px"),d="".concat((e.clientHeight-2*u)/2,"px"),f=n.center?h:"".concat(i-u,"px"),p=n.center?d:"".concat(r-u,"px");return{radius:u,scale:l,x:f,y:p,centerX:h,centerY:d}},u={show:function(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if(e._ripple&&e._ripple.enabled){var i=document.createElement("span"),r=document.createElement("span");i.appendChild(r),i.className="v-ripple__container",n.class&&(i.className+=" ".concat(n.class));var o=c(t,e,n),a=o.radius,u=o.scale,l=o.x,h=o.y,d=o.centerX,f=o.centerY,p="".concat(2*a,"px");r.className="v-ripple__animation",r.style.width=p,r.style.height=p,e.appendChild(i);var m=window.getComputedStyle(e);m&&"static"===m.position&&(e.style.position="relative",e.dataset.previousPosition="static"),r.classList.add("v-ripple__animation--enter"),r.classList.add("v-ripple__animation--visible"),s(r,"translate(".concat(l,", ").concat(h,") scale3d(").concat(u,",").concat(u,",").concat(u,")")),r.dataset.activated=String(performance.now()),setTimeout((function(){r.classList.remove("v-ripple__animation--enter"),r.classList.add("v-ripple__animation--in"),s(r,"translate(".concat(d,", ").concat(f,") scale3d(1,1,1)"))}),0)}},hide:function(t){if(t&&t._ripple&&t._ripple.enabled){var e=t.getElementsByClassName("v-ripple__animation");if(0!==e.length){var n=e[e.length-1];if(!n.dataset.isHiding){n.dataset.isHiding="true";var i=performance.now()-Number(n.dataset.activated),r=Math.max(250-i,0);setTimeout((function(){n.classList.remove("v-ripple__animation--in"),n.classList.add("v-ripple__animation--out"),setTimeout((function(){var e=t.getElementsByClassName("v-ripple__animation");1===e.length&&t.dataset.previousPosition&&(t.style.position=t.dataset.previousPosition,delete t.dataset.previousPosition),n.parentNode&&t.removeChild(n.parentNode)}),300)}),r)}}}}};function l(t){return"undefined"===typeof t||!!t}function h(t){var e={},n=t.currentTarget;if(n&&n._ripple&&!n._ripple.touched&&!t.rippleStop){if(t.rippleStop=!0,o(t))n._ripple.touched=!0,n._ripple.isTouch=!0;else if(n._ripple.isTouch)return;if(e.center=n._ripple.centered||a(t),n._ripple.class&&(e.class=n._ripple.class),o(t)){if(n._ripple.showTimerCommit)return;n._ripple.showTimerCommit=function(){u.show(t,n,e)},n._ripple.showTimer=window.setTimeout((function(){n&&n._ripple&&n._ripple.showTimerCommit&&(n._ripple.showTimerCommit(),n._ripple.showTimerCommit=null)}),r)}else u.show(t,n,e)}}function d(t){var e=t.currentTarget;if(e&&e._ripple){if(window.clearTimeout(e._ripple.showTimer),"touchend"===t.type&&e._ripple.showTimerCommit)return e._ripple.showTimerCommit(),e._ripple.showTimerCommit=null,void(e._ripple.showTimer=setTimeout((function(){d(t)})));window.setTimeout((function(){e._ripple&&(e._ripple.touched=!1)})),u.hide(e)}}function f(t){var e=t.currentTarget;e&&e._ripple&&(e._ripple.showTimerCommit&&(e._ripple.showTimerCommit=null),window.clearTimeout(e._ripple.showTimer))}var p=!1;function m(t){p||t.keyCode!==i["x"].enter&&t.keyCode!==i["x"].space||(p=!0,h(t))}function g(t){p=!1,d(t)}function v(t){!0===p&&(p=!1,d(t))}function y(t,e,n){var i=l(e.value);i||u.hide(t),t._ripple=t._ripple||{},t._ripple.enabled=i;var r=e.value||{};r.center&&(t._ripple.centered=!0),r.class&&(t._ripple.class=e.value.class),r.circle&&(t._ripple.circle=r.circle),i&&!n?(t.addEventListener("touchstart",h,{passive:!0}),t.addEventListener("touchend",d,{passive:!0}),t.addEventListener("touchmove",f,{passive:!0}),t.addEventListener("touchcancel",d),t.addEventListener("mousedown",h),t.addEventListener("mouseup",d),t.addEventListener("mouseleave",d),t.addEventListener("keydown",m),t.addEventListener("keyup",g),t.addEventListener("blur",v),t.addEventListener("dragstart",d,{passive:!0})):!i&&n&&b(t)}function b(t){t.removeEventListener("mousedown",h),t.removeEventListener("touchstart",h),t.removeEventListener("touchend",d),t.removeEventListener("touchmove",f),t.removeEventListener("touchcancel",d),t.removeEventListener("mouseup",d),t.removeEventListener("mouseleave",d),t.removeEventListener("keydown",m),t.removeEventListener("keyup",g),t.removeEventListener("dragstart",d),t.removeEventListener("blur",v)}function w(t,e,n){y(t,e,!1)}function _(t){delete t._ripple,b(t)}function O(t,e){if(e.value!==e.oldValue){var n=l(e.oldValue);y(t,e,n)}}var I={bind:w,unbind:_,update:O};e["a"]=I},5692:function(t,e,n){var i=n("c430"),r=n("c6cd");(t.exports=function(t,e){return r[t]||(r[t]=void 0!==e?e:{})})("versions",[]).push({version:"3.20.3",mode:i?"pure":"global",copyright:"© 2014-2022 Denis Pushkarev (zloirock.ru)",license:"https://github.com/zloirock/core-js/blob/v3.20.3/LICENSE",source:"https://github.com/zloirock/core-js"})},"56ef":function(t,e,n){var i=n("d066"),r=n("e330"),s=n("241c"),o=n("7418"),a=n("825a"),c=r([].concat);t.exports=i("Reflect","ownKeys")||function(t){var e=s.f(a(t)),n=o.f;return n?c(e,n(t)):e}},"577e":function(t,e,n){var i=n("da84"),r=n("f5df"),s=i.String;t.exports=function(t){if("Symbol"===r(t))throw TypeError("Cannot convert a Symbol value to a string");return s(t)}},5899:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},"589b":function(t,e,n){"use strict";n.r(e),n.d(e,"SDK_VERSION",(function(){return Y})),n.d(e,"_DEFAULT_ENTRY_NAME",(function(){return P})),n.d(e,"_addComponent",(function(){return B})),n.d(e,"_addOrOverwriteComponent",(function(){return V})),n.d(e,"_apps",(function(){return $})),n.d(e,"_clearComponents",(function(){return H})),n.d(e,"_components",(function(){return F})),n.d(e,"_getProvider",(function(){return q})),n.d(e,"_registerComponent",(function(){return U})),n.d(e,"_removeServiceInstance",(function(){return z})),n.d(e,"deleteApp",(function(){return Z})),n.d(e,"getApp",(function(){return Q})),n.d(e,"getApps",(function(){return J})),n.d(e,"initializeApp",(function(){return X})),n.d(e,"onLog",(function(){return et})),n.d(e,"registerVersion",(function(){return tt})),n.d(e,"setLogLevel",(function(){return nt}));var i=n("22e5"),r=n("e691"),s=n("1fd5");n.d(e,"FirebaseError",(function(){return s["c"]}));
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class o{constructor(t){this.container=t}getPlatformInfoString(){const t=this.container.getProviders();return t.map(t=>{if(a(t)){const e=t.getImmediate();return`${e.library}/${e.version}`}return null}).filter(t=>t).join(" ")}}function a(t){const e=t.getComponent();return"VERSION"===(null===e||void 0===e?void 0:e.type)}const c="@firebase/app",u="0.7.15",l=new r["b"]("@firebase/app"),h="@firebase/app-compat",d="@firebase/analytics-compat",f="@firebase/analytics",p="@firebase/app-check-compat",m="@firebase/app-check",g="@firebase/auth",v="@firebase/auth-compat",y="@firebase/database",b="@firebase/database-compat",w="@firebase/functions",_="@firebase/functions-compat",O="@firebase/installations",I="@firebase/installations-compat",S="@firebase/messaging",k="@firebase/messaging-compat",T="@firebase/performance",E="@firebase/performance-compat",x="@firebase/remote-config",C="@firebase/remote-config-compat",A="@firebase/storage",j="@firebase/storage-compat",R="@firebase/firestore",L="@firebase/firestore-compat",N="firebase",D="9.6.5",P="[DEFAULT]",M={[c]:"fire-core",[h]:"fire-core-compat",[f]:"fire-analytics",[d]:"fire-analytics-compat",[m]:"fire-app-check",[p]:"fire-app-check-compat",[g]:"fire-auth",[v]:"fire-auth-compat",[y]:"fire-rtdb",[b]:"fire-rtdb-compat",[w]:"fire-fn",[_]:"fire-fn-compat",[O]:"fire-iid",[I]:"fire-iid-compat",[S]:"fire-fcm",[k]:"fire-fcm-compat",[T]:"fire-perf",[E]:"fire-perf-compat",[x]:"fire-rc",[C]:"fire-rc-compat",[A]:"fire-gcs",[j]:"fire-gcs-compat",[R]:"fire-fst",[L]:"fire-fst-compat","fire-js":"fire-js",[N]:"fire-js-all"},$=new Map,F=new Map;function B(t,e){try{t.container.addComponent(e)}catch(n){l.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function V(t,e){t.container.addOrOverwriteComponent(e)}function U(t){const e=t.name;if(F.has(e))return l.debug(`There were multiple attempts to register component ${e}.`),!1;F.set(e,t);for(const n of $.values())B(n,t);return!0}function q(t,e){return t.container.getProvider(e)}function z(t,e,n=P){q(t,e).clearInstance(n)}function H(){F.clear()}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const W={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function."},G=new s["b"]("app","Firebase",W);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class K{constructor(t,e,n){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},e),this._name=e.name,this._automaticDataCollectionEnabled=e.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new i["a"]("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw G.create("app-deleted",{appName:this._name})}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Y=D;function X(t,e={}){if("object"!==typeof e){const t=e;e={name:t}}const n=Object.assign({name:P,automaticDataCollectionEnabled:!1},e),r=n.name;if("string"!==typeof r||!r)throw G.create("bad-app-name",{appName:String(r)});const o=$.get(r);if(o){if(Object(s["h"])(t,o.options)&&Object(s["h"])(n,o.config))return o;throw G.create("duplicate-app",{appName:r})}const a=new i["b"](r);for(const i of F.values())a.addComponent(i);const c=new K(t,n,a);return $.set(r,c),c}function Q(t=P){const e=$.get(t);if(!e)throw G.create("no-app",{appName:t});return e}function J(){return Array.from($.values())}async function Z(t){const e=t.name;$.has(e)&&($.delete(e),await Promise.all(t.container.getProviders().map(t=>t.delete())),t.isDeleted=!0)}function tt(t,e,n){var r;let s=null!==(r=M[t])&&void 0!==r?r:t;n&&(s+="-"+n);const o=s.match(/\s|\//),a=e.match(/\s|\//);if(o||a){const t=[`Unable to register library "${s}" with version "${e}":`];return o&&t.push(`library name "${s}" contains illegal characters (whitespace or "/")`),o&&a&&t.push("and"),a&&t.push(`version name "${e}" contains illegal characters (whitespace or "/")`),void l.warn(t.join(" "))}U(new i["a"](s+"-version",()=>({library:s,version:e}),"VERSION"))}function et(t,e){if(null!==t&&"function"!==typeof t)throw G.create("invalid-log-argument");Object(r["d"])(t,e)}function nt(t){Object(r["c"])(t)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function it(t){U(new i["a"]("platform-logger",t=>new o(t),"PRIVATE")),tt(c,u,t),tt(c,u,"esm2017"),tt("fire-js","")}it("")},"58a8":function(t,e,n){var i=n("e330"),r=n("1d80"),s=n("577e"),o=n("5899"),a=i("".replace),c="["+o+"]",u=RegExp("^"+c+c+"*"),l=RegExp(c+c+"*$"),h=function(t){return function(e){var n=s(r(e));return 1&t&&(n=a(n,u,"")),2&t&&(n=a(n,l,"")),n}};t.exports={start:h(1),end:h(2),trim:h(3)}},"58df":function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));var i=n("2b0e");function r(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return i["a"].extend({mixins:e})}},5926:function(t,e){var n=Math.ceil,i=Math.floor;t.exports=function(t){var e=+t;return e!==e||0===e?0:(e>0?i:n)(e)}},5994:function(t,e,n){"use strict";(function(t){var e=n("7ded"),i=n("1f5a"),r=n("22e5"),s=n("1fd5"),o="@firebase/auth-compat",a="0.2.7";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const c=1e3;function u(){var t;return(null===(t=null===self||void 0===self?void 0:self.location)||void 0===t?void 0:t.protocol)||null}function l(){return"http:"===u()||"https:"===u()}function h(t=Object(s["l"])()){return!("file:"!==u()&&"ionic:"!==u()||!t.toLowerCase().match(/iphone|ipad|ipod|android/))}function d(){return Object(s["u"])()||Object(s["t"])()}function f(){return Object(s["q"])()&&11===(null===document||void 0===document?void 0:document.documentMode)}function p(t=Object(s["l"])()){return/Edge\/\d+/.test(t)}function m(t=Object(s["l"])()){return f()||p(t)}function g(){try{const t=self.localStorage,e=i["s"]();if(t)return t["setItem"](e,"1"),t["removeItem"](e),!m()||Object(s["r"])()}catch(t){return v()&&Object(s["r"])()}return!1}function v(){return"undefined"!==typeof t&&"WorkerGlobalScope"in t&&"importScripts"in t}function y(){return(l()||Object(s["n"])()||h())&&!d()&&g()&&!v()}function b(){return h()&&"undefined"!==typeof document}async function w(){return!!b()&&new Promise(t=>{const e=setTimeout(()=>{t(!1)},c);document.addEventListener("deviceready",()=>{clearTimeout(e),t(!0)})})}function _(){return"undefined"!==typeof window?window:null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const O={LOCAL:"local",NONE:"none",SESSION:"session"},I=i["p"],S="persistence";function k(t,e){I(Object.values(O).includes(e),t,"invalid-persistence-type"),Object(s["u"])()?I(e!==O.SESSION,t,"unsupported-persistence-type"):Object(s["t"])()?I(e===O.NONE,t,"unsupported-persistence-type"):v()?I(e===O.NONE||e===O.LOCAL&&Object(s["r"])(),t,"unsupported-persistence-type"):I(e===O.NONE||g(),t,"unsupported-persistence-type")}async function T(t){await t._initializationPromise;const e=x(),n=i["v"](S,t.config.apiKey,t.name);e&&e.setItem(n,t._getPersistence())}function E(t,e){const n=x();if(!n)return[];const r=i["v"](S,t,e),s=n.getItem(r);switch(s){case O.NONE:return[i["L"]];case O.LOCAL:return[i["M"],i["A"]];case O.SESSION:return[i["A"]];default:return[]}}function x(){var t;try{return(null===(t=_())||void 0===t?void 0:t.sessionStorage)||null}catch(e){return null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const C=i["p"];class A{constructor(){this.browserResolver=i["t"](i["z"]),this.cordovaResolver=i["t"](i["E"]),this.underlyingResolver=null,this._redirectPersistence=i["A"],this._completeRedirectFn=i["u"]}async _initialize(t){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._initialize(t)}async _openPopup(t,e,n,i){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._openPopup(t,e,n,i)}async _openRedirect(t,e,n,i){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._openRedirect(t,e,n,i)}_isIframeWebStorageSupported(t,e){this.assertedUnderlyingResolver._isIframeWebStorageSupported(t,e)}_originValidation(t){return this.assertedUnderlyingResolver._originValidation(t)}get _shouldInitProactively(){return b()||this.browserResolver._shouldInitProactively}get assertedUnderlyingResolver(){return C(this.underlyingResolver,"internal-error"),this.underlyingResolver}async selectUnderlyingResolver(){if(this.underlyingResolver)return;const t=await w();this.underlyingResolver=t?this.cordovaResolver:this.browserResolver}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function j(t){return t.unwrap()}function R(t){return t.wrapped()}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function L(t){return D(t)}function N(t,e){var n;const r=null===(n=e.customData)||void 0===n?void 0:n._tokenResponse;if("auth/multi-factor-auth-required"===e.code){const n=e;n.resolver=new $(t,i["J"](t,e))}else if(r){const t=D(e),n=e;t&&(n.credential=t,n.tenantId=r.tenantId||void 0,n.email=r.email||void 0,n.phoneNumber=r.phoneNumber||void 0)}}function D(t){const{_tokenResponse:e}=t instanceof s["c"]?t.customData:t;if(!e)return null;if(!(t instanceof s["c"])&&"temporaryProof"in e&&"phoneNumber"in e)return i["i"].credentialFromResult(t);const n=e.providerId;if(!n||n===i["k"].PASSWORD)return null;let r;switch(n){case i["k"].GOOGLE:r=i["f"];break;case i["k"].FACEBOOK:r=i["d"];break;case i["k"].GITHUB:r=i["e"];break;case i["k"].TWITTER:r=i["o"];break;default:const{oauthIdToken:t,oauthAccessToken:s,oauthTokenSecret:o,pendingToken:a,nonce:c}=e;return s||o||t||a?a?n.startsWith("saml.")?i["m"]._create(n,a):i["g"]._fromParams({providerId:n,signInMethod:n,pendingToken:a,idToken:t,accessToken:s}):new i["h"](n).credential({idToken:t,accessToken:s,rawNonce:c}):null}return t instanceof s["c"]?r.credentialFromError(t):r.credentialFromResult(t)}function P(t,e){return e.catch(e=>{throw e instanceof s["c"]&&N(t,e),e}).then(t=>{const e=t.operationType,n=t.user;return{operationType:e,credential:L(t),additionalUserInfo:i["I"](t),user:F.getOrCreate(n)}})}async function M(t,e){const n=await e;return{verificationId:n.verificationId,confirm:e=>P(t,n.confirm(e))}}class ${constructor(t,e){this.resolver=e,this.auth=R(t)}get session(){return this.resolver.session}get hints(){return this.resolver.hints}resolveSignIn(t){return P(j(this.auth),this.resolver.resolveSignIn(t))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class F{constructor(t){this._delegate=t,this.multiFactor=i["S"](t)}static getOrCreate(t){return F.USER_MAP.has(t)||F.USER_MAP.set(t,new F(t)),F.USER_MAP.get(t)}delete(){return this._delegate.delete()}reload(){return this._delegate.reload()}toJSON(){return this._delegate.toJSON()}getIdTokenResult(t){return this._delegate.getIdTokenResult(t)}getIdToken(t){return this._delegate.getIdToken(t)}linkAndRetrieveDataWithCredential(t){return this.linkWithCredential(t)}async linkWithCredential(t){return P(this.auth,i["O"](this._delegate,t))}async linkWithPhoneNumber(t,e){return M(this.auth,i["P"](this._delegate,t,e))}async linkWithPopup(t){return P(this.auth,i["Q"](this._delegate,t,A))}async linkWithRedirect(t){return await T(i["q"](this.auth)),i["R"](this._delegate,t,A)}reauthenticateAndRetrieveDataWithCredential(t){return this.reauthenticateWithCredential(t)}async reauthenticateWithCredential(t){return P(this.auth,i["T"](this._delegate,t))}reauthenticateWithPhoneNumber(t,e){return M(this.auth,i["U"](this._delegate,t,e))}reauthenticateWithPopup(t){return P(this.auth,i["V"](this._delegate,t,A))}async reauthenticateWithRedirect(t){return await T(i["q"](this.auth)),i["W"](this._delegate,t,A)}sendEmailVerification(t){return i["X"](this._delegate,t)}async unlink(t){return await i["ib"](this._delegate,t),this}updateEmail(t){return i["jb"](this._delegate,t)}updatePassword(t){return i["kb"](this._delegate,t)}updatePhoneNumber(t){return i["lb"](this._delegate,t)}updateProfile(t){return i["mb"](this._delegate,t)}verifyBeforeUpdateEmail(t,e){return i["nb"](this._delegate,t,e)}get emailVerified(){return this._delegate.emailVerified}get isAnonymous(){return this._delegate.isAnonymous}get metadata(){return this._delegate.metadata}get phoneNumber(){return this._delegate.phoneNumber}get providerData(){return this._delegate.providerData}get refreshToken(){return this._delegate.refreshToken}get tenantId(){return this._delegate.tenantId}get displayName(){return this._delegate.displayName}get email(){return this._delegate.email}get photoURL(){return this._delegate.photoURL}get providerId(){return this._delegate.providerId}get uid(){return this._delegate.uid}get auth(){return this._delegate.auth}}F.USER_MAP=new WeakMap;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const B=i["p"];class V{constructor(t,e){if(this.app=t,e.isInitialized())return this._delegate=e.getImmediate(),void this.linkUnderlyingAuth();const{apiKey:n}=t.options;B(n,"invalid-api-key",{appName:t.name}),B(n,"invalid-api-key",{appName:t.name});const r="undefined"!==typeof window?A:void 0;this._delegate=e.initialize({options:{persistence:q(n,t.name),popupRedirectResolver:r}}),this._delegate._updateErrorMap(i["G"]),this.linkUnderlyingAuth()}get emulatorConfig(){return this._delegate.emulatorConfig}get currentUser(){return this._delegate.currentUser?F.getOrCreate(this._delegate.currentUser):null}get languageCode(){return this._delegate.languageCode}set languageCode(t){this._delegate.languageCode=t}get settings(){return this._delegate.settings}get tenantId(){return this._delegate.tenantId}set tenantId(t){this._delegate.tenantId=t}useDeviceLanguage(){this._delegate.useDeviceLanguage()}signOut(){return this._delegate.signOut()}useEmulator(t,e){i["D"](this._delegate,t,e)}applyActionCode(t){return i["x"](this._delegate,t)}checkActionCode(t){return i["B"](this._delegate,t)}confirmPasswordReset(t,e){return i["C"](this._delegate,t,e)}async createUserWithEmailAndPassword(t,e){return P(this._delegate,i["F"](this._delegate,t,e))}fetchProvidersForEmail(t){return this.fetchSignInMethodsForEmail(t)}fetchSignInMethodsForEmail(t){return i["H"](this._delegate,t)}isSignInWithEmailLink(t){return i["N"](this._delegate,t)}async getRedirectResult(){B(y(),this._delegate,"operation-not-supported-in-this-environment");const t=await i["K"](this._delegate,A);return t?P(this._delegate,Promise.resolve(t)):{credential:null,user:null}}addFrameworkForLogging(t){i["w"](this._delegate,t)}onAuthStateChanged(t,e,n){const{next:i,error:r,complete:s}=U(t,e,n);return this._delegate.onAuthStateChanged(i,r,s)}onIdTokenChanged(t,e,n){const{next:i,error:r,complete:s}=U(t,e,n);return this._delegate.onIdTokenChanged(i,r,s)}sendSignInLinkToEmail(t,e){return i["Z"](this._delegate,t,e)}sendPasswordResetEmail(t,e){return i["Y"](this._delegate,t,e||void 0)}async setPersistence(t){let e;switch(k(this._delegate,t),t){case O.SESSION:e=i["A"];break;case O.LOCAL:const t=await i["t"](i["M"])._isAvailable();e=t?i["M"]:i["y"];break;case O.NONE:e=i["L"];break;default:return i["r"]("argument-error",{appName:this._delegate.name})}return this._delegate.setPersistence(e)}signInAndRetrieveDataWithCredential(t){return this.signInWithCredential(t)}signInAnonymously(){return P(this._delegate,i["ab"](this._delegate))}signInWithCredential(t){return P(this._delegate,i["bb"](this._delegate,t))}signInWithCustomToken(t){return P(this._delegate,i["cb"](this._delegate,t))}signInWithEmailAndPassword(t,e){return P(this._delegate,i["db"](this._delegate,t,e))}signInWithEmailLink(t,e){return P(this._delegate,i["eb"](this._delegate,t,e))}signInWithPhoneNumber(t,e){return M(this._delegate,i["fb"](this._delegate,t,e))}async signInWithPopup(t){return B(y(),this._delegate,"operation-not-supported-in-this-environment"),P(this._delegate,i["gb"](this._delegate,t,A))}async signInWithRedirect(t){return B(y(),this._delegate,"operation-not-supported-in-this-environment"),await T(this._delegate),i["hb"](this._delegate,t,A)}updateCurrentUser(t){return this._delegate.updateCurrentUser(t)}verifyPasswordResetCode(t){return i["ob"](this._delegate,t)}unwrap(){return this._delegate}_delete(){return this._delegate._delete()}linkUnderlyingAuth(){this._delegate.wrapped=()=>this}}function U(t,e,n){let i=t;"function"!==typeof t&&({next:i,error:e,complete:n}=t);const r=i,s=t=>r(t&&F.getOrCreate(t));return{next:s,error:e,complete:n}}function q(t,e){const n=E(t,e);if("undefined"===typeof self||n.includes(i["M"])||n.push(i["M"]),"undefined"!==typeof window)for(const r of[i["y"],i["A"]])n.includes(r)||n.push(r);return n.includes(i["L"])||n.push(i["L"]),n}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */V.Persistence=O;class z{constructor(){this.providerId="phone",this._delegate=new i["i"](j(e["a"].auth()))}static credential(t,e){return i["i"].credential(t,e)}verifyPhoneNumber(t,e){return this._delegate.verifyPhoneNumber(t,e)}unwrap(){return this._delegate}}z.PHONE_SIGN_IN_METHOD=i["i"].PHONE_SIGN_IN_METHOD,z.PROVIDER_ID=i["i"].PROVIDER_ID;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const H=i["p"];class W{constructor(t,n,r=e["a"].app()){var s;H(null===(s=r.options)||void 0===s?void 0:s.apiKey,"invalid-api-key",{appName:r.name}),this._delegate=new i["l"](t,n,r.auth()),this.type=this._delegate.type}clear(){this._delegate.clear()}render(){return this._delegate.render()}verify(){return this._delegate.verify()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const G="auth-compat";function K(t){t.INTERNAL.registerComponent(new r["a"](G,t=>{const e=t.getProvider("app-compat").getImmediate(),n=t.getProvider("auth");return new V(e,n)},"PUBLIC").setServiceProps({ActionCodeInfo:{Operation:{EMAIL_SIGNIN:i["a"].EMAIL_SIGNIN,PASSWORD_RESET:i["a"].PASSWORD_RESET,RECOVER_EMAIL:i["a"].RECOVER_EMAIL,REVERT_SECOND_FACTOR_ADDITION:i["a"].REVERT_SECOND_FACTOR_ADDITION,VERIFY_AND_CHANGE_EMAIL:i["a"].VERIFY_AND_CHANGE_EMAIL,VERIFY_EMAIL:i["a"].VERIFY_EMAIL}},EmailAuthProvider:i["c"],FacebookAuthProvider:i["d"],GithubAuthProvider:i["e"],GoogleAuthProvider:i["f"],OAuthProvider:i["h"],SAMLAuthProvider:i["n"],PhoneAuthProvider:z,PhoneMultiFactorGenerator:i["j"],RecaptchaVerifier:W,TwitterAuthProvider:i["o"],Auth:V,AuthCredential:i["b"],Error:s["c"]}).setInstantiationMode("LAZY").setMultipleInstances(!1)),t.registerVersion(o,a)}K(e["a"])}).call(this,n("c8ba"))},"59ed":function(t,e,n){var i=n("da84"),r=n("1626"),s=n("0d51"),o=i.TypeError;t.exports=function(t){if(r(t))return t;throw o(s(t)+" is not a function")}},"5a34":function(t,e,n){var i=n("da84"),r=n("44e7"),s=i.TypeError;t.exports=function(t){if(r(t))throw s("The method doesn't accept regular expressions");return t}},"5bc1":function(t,e,n){"use strict";var i=n("5530"),r=(n("498a"),n("9d26")),s=n("8336"),o=n("2b0e");e["a"]=o["a"].extend({name:"v-app-bar-nav-icon",functional:!0,render:function(t,e){var n=e.slots,o=e.listeners,a=e.props,c=e.data,u=Object.assign(c,{staticClass:"v-app-bar__nav-icon ".concat(c.staticClass||"").trim(),props:Object(i["a"])(Object(i["a"])({},a),{},{icon:!0}),on:o}),l=n().default;return t(s["a"],u,l||[t(r["a"],"$menu")])}})},"5c6c":function(t,e){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},"5d23":function(t,e,n){"use strict";n.d(e,"a",(function(){return x})),n.d(e,"b",(function(){return C}));var i=n("80d2"),r=n("8860"),s=n("5530"),o=n("ade3"),a=(n("4d63"),n("c607"),n("ac1f"),n("2c3e"),n("25f0"),n("466d"),n("db42"),n("9d26")),c=n("da13"),u=n("34c3"),l=n("7e2b"),h=n("9d65"),d=n("a9ad"),f=n("f2e7"),p=n("3206"),m=n("5607"),g=n("0789"),v=n("58df"),y=Object(v["a"])(l["a"],h["a"],d["a"],Object(p["a"])("list"),f["a"]),b=y.extend().extend({name:"v-list-group",directives:{ripple:m["a"]},props:{activeClass:{type:String,default:""},appendIcon:{type:String,default:"$expand"},color:{type:String,default:"primary"},disabled:Boolean,group:[String,RegExp],noAction:Boolean,prependIcon:String,ripple:{type:[Boolean,Object],default:!0},subGroup:Boolean},computed:{classes:function(){return{"v-list-group--active":this.isActive,"v-list-group--disabled":this.disabled,"v-list-group--no-action":this.noAction,"v-list-group--sub-group":this.subGroup}}},watch:{isActive:function(t){!this.subGroup&&t&&this.list&&this.list.listClick(this._uid)},$route:"onRouteChange"},created:function(){this.list&&this.list.register(this),this.group&&this.$route&&null==this.value&&(this.isActive=this.matchRoute(this.$route.path))},beforeDestroy:function(){this.list&&this.list.unregister(this)},methods:{click:function(t){var e=this;this.disabled||(this.isBooted=!0,this.$emit("click",t),this.$nextTick((function(){return e.isActive=!e.isActive})))},genIcon:function(t){return this.$createElement(a["a"],t)},genAppendIcon:function(){var t=!this.subGroup&&this.appendIcon;return t||this.$slots.appendIcon?this.$createElement(u["a"],{staticClass:"v-list-group__header__append-icon"},[this.$slots.appendIcon||this.genIcon(t)]):null},genHeader:function(){return this.$createElement(c["a"],{staticClass:"v-list-group__header",attrs:{"aria-expanded":String(this.isActive),role:"button"},class:Object(o["a"])({},this.activeClass,this.isActive),props:{inputValue:this.isActive},directives:[{name:"ripple",value:this.ripple}],on:Object(s["a"])(Object(s["a"])({},this.listeners$),{},{click:this.click})},[this.genPrependIcon(),this.$slots.activator,this.genAppendIcon()])},genItems:function(){var t=this;return this.showLazyContent((function(){return[t.$createElement("div",{staticClass:"v-list-group__items",directives:[{name:"show",value:t.isActive}]},Object(i["s"])(t))]}))},genPrependIcon:function(){var t=this.subGroup&&null==this.prependIcon?"$subgroup":this.prependIcon;return t||this.$slots.prependIcon?this.$createElement(u["a"],{staticClass:"v-list-group__header__prepend-icon"},[this.$slots.prependIcon||this.genIcon(t)]):null},onRouteChange:function(t){if(this.group){var e=this.matchRoute(t.path);e&&this.isActive!==e&&this.list&&this.list.listClick(this._uid),this.isActive=e}},toggle:function(t){var e=this,n=this._uid===t;n&&(this.isBooted=!0),this.$nextTick((function(){return e.isActive=n}))},matchRoute:function(t){return null!==t.match(this.group)}},render:function(t){return t("div",this.setTextColor(this.isActive&&this.color,{staticClass:"v-list-group",class:this.classes}),[this.genHeader(),t(g["a"],this.genItems())])}}),w=n("1baa"),_=n("1800"),O=(n("a9e3"),n("3408"),n("24b2")),I=n("a236"),S=Object(v["a"])(d["a"],O["a"],I["a"]).extend({name:"v-avatar",props:{left:Boolean,right:Boolean,size:{type:[Number,String],default:48}},computed:{classes:function(){return Object(s["a"])({"v-avatar--left":this.left,"v-avatar--right":this.right},this.roundedClasses)},styles:function(){return Object(s["a"])({height:Object(i["h"])(this.size),minWidth:Object(i["h"])(this.size),width:Object(i["h"])(this.size)},this.measurableStyles)}},render:function(t){var e={staticClass:"v-avatar",class:this.classes,style:this.styles,on:this.$listeners};return t("div",this.setBackgroundColor(this.color,e),this.$slots.default)}}),k=S,T=k.extend({name:"v-list-item-avatar",props:{horizontal:Boolean,size:{type:[Number,String],default:40}},computed:{classes:function(){return Object(s["a"])(Object(s["a"])({"v-list-item__avatar--horizontal":this.horizontal},k.options.computed.classes.call(this)),{},{"v-avatar--tile":this.tile||this.horizontal})}},render:function(t){var e=k.options.render.call(this,t);return e.data=e.data||{},e.data.staticClass+=" v-list-item__avatar",e}}),E=Object(i["i"])("v-list-item__action-text","span"),x=Object(i["i"])("v-list-item__content","div"),C=Object(i["i"])("v-list-item__title","div"),A=Object(i["i"])("v-list-item__subtitle","div");r["a"],c["a"],_["a"],w["a"],u["a"]},"5e23":function(t,e,n){},"5e77":function(t,e,n){var i=n("83ab"),r=n("1a2d"),s=Function.prototype,o=i&&Object.getOwnPropertyDescriptor,a=r(s,"name"),c=a&&"something"===function(){}.name,u=a&&(!i||i&&o(s,"name").configurable);t.exports={EXISTS:a,PROPER:c,CONFIGURABLE:u}},"605d":function(t,e,n){var i=n("c6b6"),r=n("da84");t.exports="process"==i(r.process)},6069:function(t,e){t.exports="object"==typeof window},"60da":function(t,e,n){"use strict";var i=n("83ab"),r=n("e330"),s=n("c65b"),o=n("d039"),a=n("df75"),c=n("7418"),u=n("d1e7"),l=n("7b0b"),h=n("44ad"),d=Object.assign,f=Object.defineProperty,p=r([].concat);t.exports=!d||o((function(){if(i&&1!==d({b:1},d(f({},"a",{enumerable:!0,get:function(){f(this,"b",{value:3,enumerable:!1})}}),{b:2})).b)return!0;var t={},e={},n=Symbol(),r="abcdefghijklmnopqrst";return t[n]=7,r.split("").forEach((function(t){e[t]=t})),7!=d({},t)[n]||a(d({},e)).join("")!=r}))?function(t,e){var n=l(t),r=arguments.length,o=1,d=c.f,f=u.f;while(r>o){var m,g=h(arguments[o++]),v=d?p(a(g),d(g)):a(g),y=v.length,b=0;while(y>b)m=v[b++],i&&!s(f,g,m)||(n[m]=g[m])}return n}:d},"615b":function(t,e,n){},"61d2":function(t,e,n){},"62ad":function(t,e,n){"use strict";var i=n("ade3"),r=n("5530"),s=(n("d3b7"),n("a9e3"),n("b64b"),n("ac1f"),n("5319"),n("4ec9"),n("3ca3"),n("ddb0"),n("caad"),n("159b"),n("2ca0"),n("4b85"),n("2b0e")),o=n("d9f7"),a=n("80d2"),c=["sm","md","lg","xl"],u=function(){return c.reduce((function(t,e){return t[e]={type:[Boolean,String,Number],default:!1},t}),{})}(),l=function(){return c.reduce((function(t,e){return t["offset"+Object(a["E"])(e)]={type:[String,Number],default:null},t}),{})}(),h=function(){return c.reduce((function(t,e){return t["order"+Object(a["E"])(e)]={type:[String,Number],default:null},t}),{})}(),d={col:Object.keys(u),offset:Object.keys(l),order:Object.keys(h)};function f(t,e,n){var i=t;if(null!=n&&!1!==n){if(e){var r=e.replace(t,"");i+="-".concat(r)}return"col"!==t||""!==n&&!0!==n?(i+="-".concat(n),i.toLowerCase()):i.toLowerCase()}}var p=new Map;e["a"]=s["a"].extend({name:"v-col",functional:!0,props:Object(r["a"])(Object(r["a"])(Object(r["a"])(Object(r["a"])({cols:{type:[Boolean,String,Number],default:!1}},u),{},{offset:{type:[String,Number],default:null}},l),{},{order:{type:[String,Number],default:null}},h),{},{alignSelf:{type:String,default:null,validator:function(t){return["auto","start","end","center","baseline","stretch"].includes(t)}},tag:{type:String,default:"div"}}),render:function(t,e){var n=e.props,r=e.data,s=e.children,a=(e.parent,"");for(var c in n)a+=String(n[c]);var u=p.get(a);return u||function(){var t,e;for(e in u=[],d)d[e].forEach((function(t){var i=n[t],r=f(e,t,i);r&&u.push(r)}));var r=u.some((function(t){return t.startsWith("col-")}));u.push((t={col:!r||!n.cols},Object(i["a"])(t,"col-".concat(n.cols),n.cols),Object(i["a"])(t,"offset-".concat(n.offset),n.offset),Object(i["a"])(t,"order-".concat(n.order),n.order),Object(i["a"])(t,"align-self-".concat(n.alignSelf),n.alignSelf),t)),p.set(a,u)}(),t(n.tag,Object(o["a"])(r,{class:u}),s)}})},6544:function(t,e){t.exports=function(t,e){var n="function"===typeof t.exports?t.exports.extendOptions:t.options;for(var i in"function"===typeof t.exports&&(n.components=t.exports.options.components),n.components=n.components||{},e)n.components[i]=n.components[i]||e[i]}},6547:function(t,e,n){var i=n("e330"),r=n("5926"),s=n("577e"),o=n("1d80"),a=i("".charAt),c=i("".charCodeAt),u=i("".slice),l=function(t){return function(e,n){var i,l,h=s(o(e)),d=r(n),f=h.length;return d<0||d>=f?t?"":void 0:(i=c(h,d),i<55296||i>56319||d+1===f||(l=c(h,d+1))<56320||l>57343?t?a(h,d):i:t?u(h,d,d+2):l-56320+(i-55296<<10)+65536)}};t.exports={codeAt:l(!1),charAt:l(!0)}},6566:function(t,e,n){"use strict";var i=n("9bf2").f,r=n("7c73"),s=n("e2cc"),o=n("0366"),a=n("19aa"),c=n("2266"),u=n("7dd0"),l=n("2626"),h=n("83ab"),d=n("f183").fastKey,f=n("69f3"),p=f.set,m=f.getterFor;t.exports={getConstructor:function(t,e,n,u){var l=t((function(t,i){a(t,f),p(t,{type:e,index:r(null),first:void 0,last:void 0,size:0}),h||(t.size=0),void 0!=i&&c(i,t[u],{that:t,AS_ENTRIES:n})})),f=l.prototype,g=m(e),v=function(t,e,n){var i,r,s=g(t),o=y(t,e);return o?o.value=n:(s.last=o={index:r=d(e,!0),key:e,value:n,previous:i=s.last,next:void 0,removed:!1},s.first||(s.first=o),i&&(i.next=o),h?s.size++:t.size++,"F"!==r&&(s.index[r]=o)),t},y=function(t,e){var n,i=g(t),r=d(e);if("F"!==r)return i.index[r];for(n=i.first;n;n=n.next)if(n.key==e)return n};return s(f,{clear:function(){var t=this,e=g(t),n=e.index,i=e.first;while(i)i.removed=!0,i.previous&&(i.previous=i.previous.next=void 0),delete n[i.index],i=i.next;e.first=e.last=void 0,h?e.size=0:t.size=0},delete:function(t){var e=this,n=g(e),i=y(e,t);if(i){var r=i.next,s=i.previous;delete n.index[i.index],i.removed=!0,s&&(s.next=r),r&&(r.previous=s),n.first==i&&(n.first=r),n.last==i&&(n.last=s),h?n.size--:e.size--}return!!i},forEach:function(t){var e,n=g(this),i=o(t,arguments.length>1?arguments[1]:void 0);while(e=e?e.next:n.first){i(e.value,e.key,this);while(e&&e.removed)e=e.previous}},has:function(t){return!!y(this,t)}}),s(f,n?{get:function(t){var e=y(this,t);return e&&e.value},set:function(t,e){return v(this,0===t?0:t,e)}}:{add:function(t){return v(this,t=0===t?0:t,t)}}),h&&i(f,"size",{get:function(){return g(this).size}}),l},setStrong:function(t,e,n){var i=e+" Iterator",r=m(e),s=m(i);u(t,e,(function(t,e){p(this,{type:i,target:t,state:r(t),kind:e,last:void 0})}),(function(){var t=s(this),e=t.kind,n=t.last;while(n&&n.removed)n=n.previous;return t.target&&(t.last=n=n?n.next:t.state.first)?"keys"==e?{value:n.key,done:!1}:"values"==e?{value:n.value,done:!1}:{value:[n.key,n.value],done:!1}:(t.target=void 0,{value:void 0,done:!0})}),n?"entries":"values",!n,!0),l(e)}}},"65f0":function(t,e,n){var i=n("0b42");t.exports=function(t,e){return new(i(t))(0===e?0:e)}},"68dd":function(t,e,n){},"68ee":function(t,e,n){var i=n("e330"),r=n("d039"),s=n("1626"),o=n("f5df"),a=n("d066"),c=n("8925"),u=function(){},l=[],h=a("Reflect","construct"),d=/^\s*(?:class|function)\b/,f=i(d.exec),p=!d.exec(u),m=function(t){if(!s(t))return!1;try{return h(u,l,t),!0}catch(e){return!1}},g=function(t){if(!s(t))return!1;switch(o(t)){case"AsyncFunction":case"GeneratorFunction":case"AsyncGeneratorFunction":return!1}try{return p||!!f(d,c(t))}catch(e){return!0}};g.sham=!0,t.exports=!h||r((function(){var t;return m(m.call)||!m(Object)||!m((function(){t=!0}))||t}))?g:m},"69f3":function(t,e,n){var i,r,s,o=n("7f9a"),a=n("da84"),c=n("e330"),u=n("861d"),l=n("9112"),h=n("1a2d"),d=n("c6cd"),f=n("f772"),p=n("d012"),m="Object already initialized",g=a.TypeError,v=a.WeakMap,y=function(t){return s(t)?r(t):i(t,{})},b=function(t){return function(e){var n;if(!u(e)||(n=r(e)).type!==t)throw g("Incompatible receiver, "+t+" required");return n}};if(o||d.state){var w=d.state||(d.state=new v),_=c(w.get),O=c(w.has),I=c(w.set);i=function(t,e){if(O(w,t))throw new g(m);return e.facade=t,I(w,t,e),e},r=function(t){return _(w,t)||{}},s=function(t){return O(w,t)}}else{var S=f("state");p[S]=!0,i=function(t,e){if(h(t,S))throw new g(m);return e.facade=t,l(t,S,e),e},r=function(t){return h(t,S)?t[S]:{}},s=function(t){return h(t,S)}}t.exports={set:i,get:r,has:s,enforce:y,getterFor:b}},"6b75":function(t,e,n){"use strict";function i(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,i=new Array(e);n<e;n++)i[n]=t[n];return i}n.d(e,"a",(function(){return i}))},"6d61":function(t,e,n){"use strict";var i=n("23e7"),r=n("da84"),s=n("e330"),o=n("94ca"),a=n("6eeb"),c=n("f183"),u=n("2266"),l=n("19aa"),h=n("1626"),d=n("861d"),f=n("d039"),p=n("1c7e"),m=n("d44e"),g=n("7156");t.exports=function(t,e,n){var v=-1!==t.indexOf("Map"),y=-1!==t.indexOf("Weak"),b=v?"set":"add",w=r[t],_=w&&w.prototype,O=w,I={},S=function(t){var e=s(_[t]);a(_,t,"add"==t?function(t){return e(this,0===t?0:t),this}:"delete"==t?function(t){return!(y&&!d(t))&&e(this,0===t?0:t)}:"get"==t?function(t){return y&&!d(t)?void 0:e(this,0===t?0:t)}:"has"==t?function(t){return!(y&&!d(t))&&e(this,0===t?0:t)}:function(t,n){return e(this,0===t?0:t,n),this})},k=o(t,!h(w)||!(y||_.forEach&&!f((function(){(new w).entries().next()}))));if(k)O=n.getConstructor(e,t,v,b),c.enable();else if(o(t,!0)){var T=new O,E=T[b](y?{}:-0,1)!=T,x=f((function(){T.has(1)})),C=p((function(t){new w(t)})),A=!y&&f((function(){var t=new w,e=5;while(e--)t[b](e,e);return!t.has(-0)}));C||(O=e((function(t,e){l(t,_);var n=g(new w,t,O);return void 0!=e&&u(e,n[b],{that:n,AS_ENTRIES:v}),n})),O.prototype=_,_.constructor=O),(x||A)&&(S("delete"),S("has"),v&&S("get")),(A||E)&&S(b),y&&_.clear&&delete _.clear}return I[t]=O,i({global:!0,forced:O!=w},I),m(O,t),y||n.setStrong(O,t,v),O}},"6ece":function(t,e,n){},"6eeb":function(t,e,n){var i=n("da84"),r=n("1626"),s=n("1a2d"),o=n("9112"),a=n("ce4e"),c=n("8925"),u=n("69f3"),l=n("5e77").CONFIGURABLE,h=u.get,d=u.enforce,f=String(String).split("String");(t.exports=function(t,e,n,c){var u,h=!!c&&!!c.unsafe,p=!!c&&!!c.enumerable,m=!!c&&!!c.noTargetGet,g=c&&void 0!==c.name?c.name:e;r(n)&&("Symbol("===String(g).slice(0,7)&&(g="["+String(g).replace(/^Symbol\(([^)]*)\)/,"$1")+"]"),(!s(n,"name")||l&&n.name!==g)&&o(n,"name",g),u=d(n),u.source||(u.source=f.join("string"==typeof g?g:""))),t!==i?(h?!m&&t[e]&&(p=!0):delete t[e],p?t[e]=n:o(t,e,n)):p?t[e]=n:a(e,n)})(Function.prototype,"toString",(function(){return r(this)&&h(this).source||c(this)}))},"6f53":function(t,e,n){var i=n("83ab"),r=n("e330"),s=n("df75"),o=n("fc6a"),a=n("d1e7").f,c=r(a),u=r([].push),l=function(t){return function(e){var n,r=o(e),a=s(r),l=a.length,h=0,d=[];while(l>h)n=a[h++],i&&!c(r,n)||u(d,t?[n,r[n]]:r[n]);return d}};t.exports={entries:l(!0),values:l(!1)}},7156:function(t,e,n){var i=n("1626"),r=n("861d"),s=n("d2bb");t.exports=function(t,e,n){var o,a;return s&&i(o=e.constructor)&&o!==n&&r(a=o.prototype)&&a!==n.prototype&&s(t,a),t}},"71d9":function(t,e,n){"use strict";var i=n("3835"),r=n("5530"),s=(n("a9e3"),n("0481"),n("4069"),n("d3b7"),n("5e23"),n("8dd9")),o=n("adda"),a=n("80d2"),c=n("d9bd");e["a"]=s["a"].extend({name:"v-toolbar",props:{absolute:Boolean,bottom:Boolean,collapse:Boolean,dense:Boolean,extended:Boolean,extensionHeight:{default:48,type:[Number,String]},flat:Boolean,floating:Boolean,prominent:Boolean,short:Boolean,src:{type:[String,Object],default:""},tag:{type:String,default:"header"}},data:function(){return{isExtended:!1}},computed:{computedHeight:function(){var t=this.computedContentHeight;if(!this.isExtended)return t;var e=parseInt(this.extensionHeight);return this.isCollapsed?t:t+(isNaN(e)?0:e)},computedContentHeight:function(){return this.height?parseInt(this.height):this.isProminent&&this.dense?96:this.isProminent&&this.short?112:this.isProminent?128:this.dense?48:this.short||this.$vuetify.breakpoint.smAndDown?56:64},classes:function(){return Object(r["a"])(Object(r["a"])({},s["a"].options.computed.classes.call(this)),{},{"v-toolbar":!0,"v-toolbar--absolute":this.absolute,"v-toolbar--bottom":this.bottom,"v-toolbar--collapse":this.collapse,"v-toolbar--collapsed":this.isCollapsed,"v-toolbar--dense":this.dense,"v-toolbar--extended":this.isExtended,"v-toolbar--flat":this.flat,"v-toolbar--floating":this.floating,"v-toolbar--prominent":this.isProminent})},isCollapsed:function(){return this.collapse},isProminent:function(){return this.prominent},styles:function(){return Object(r["a"])(Object(r["a"])({},this.measurableStyles),{},{height:Object(a["h"])(this.computedHeight)})}},created:function(){var t=this,e=[["app","<v-app-bar app>"],["manual-scroll",'<v-app-bar :value="false">'],["clipped-left","<v-app-bar clipped-left>"],["clipped-right","<v-app-bar clipped-right>"],["inverted-scroll","<v-app-bar inverted-scroll>"],["scroll-off-screen","<v-app-bar scroll-off-screen>"],["scroll-target","<v-app-bar scroll-target>"],["scroll-threshold","<v-app-bar scroll-threshold>"],["card","<v-app-bar flat>"]];e.forEach((function(e){var n=Object(i["a"])(e,2),r=n[0],s=n[1];t.$attrs.hasOwnProperty(r)&&Object(c["a"])(r,s,t)}))},methods:{genBackground:function(){var t={height:Object(a["h"])(this.computedHeight),src:this.src},e=this.$scopedSlots.img?this.$scopedSlots.img({props:t}):this.$createElement(o["a"],{props:t});return this.$createElement("div",{staticClass:"v-toolbar__image"},[e])},genContent:function(){return this.$createElement("div",{staticClass:"v-toolbar__content",style:{height:Object(a["h"])(this.computedContentHeight)}},Object(a["s"])(this))},genExtension:function(){return this.$createElement("div",{staticClass:"v-toolbar__extension",style:{height:Object(a["h"])(this.extensionHeight)}},Object(a["s"])(this,"extension"))}},render:function(t){this.isExtended=this.extended||!!this.$scopedSlots.extension;var e=[this.genContent()],n=this.setBackgroundColor(this.color,{class:this.classes,style:this.styles,on:this.$listeners});return this.isExtended&&e.push(this.genExtension()),(this.src||this.$scopedSlots.img)&&e.unshift(this.genBackground()),t(this.tag,n,e)}})},7418:function(t,e){e.f=Object.getOwnPropertySymbols},7435:function(t,e,n){},"746f":function(t,e,n){var i=n("428f"),r=n("1a2d"),s=n("e538"),o=n("9bf2").f;t.exports=function(t){var e=i.Symbol||(i.Symbol={});r(e,t)||o(e,t,{value:s.f(t)})}},7496:function(t,e,n){"use strict";var i=n("5530"),r=(n("d9e2"),n("df86"),n("7560")),s=n("58df");e["a"]=Object(s["a"])(r["a"]).extend({name:"v-app",props:{dark:{type:Boolean,default:void 0},id:{type:String,default:"app"},light:{type:Boolean,default:void 0}},computed:{isDark:function(){return this.$vuetify.theme.dark}},beforeCreate:function(){if(!this.$vuetify||this.$vuetify===this.$root)throw new Error("Vuetify is not properly initialized, see https://vuetifyjs.com/getting-started/quick-start#bootstrapping-the-vuetify-object")},render:function(t){var e=t("div",{staticClass:"v-application--wrap"},this.$slots.default);return t("div",{staticClass:"v-application",class:Object(i["a"])({"v-application--is-rtl":this.$vuetify.rtl,"v-application--is-ltr":!this.$vuetify.rtl},this.themeClasses),attrs:{"data-app":!0},domProps:{id:this.id}},[e])}})},7560:function(t,e,n){"use strict";n.d(e,"b",(function(){return o}));var i=n("5530"),r=n("2b0e"),s=r["a"].extend().extend({name:"themeable",provide:function(){return{theme:this.themeableProvide}},inject:{theme:{default:{isDark:!1}}},props:{dark:{type:Boolean,default:null},light:{type:Boolean,default:null}},data:function(){return{themeableProvide:{isDark:!1}}},computed:{appIsDark:function(){return this.$vuetify.theme.dark||!1},isDark:function(){return!0===this.dark||!0!==this.light&&this.theme.isDark},themeClasses:function(){return{"theme--dark":this.isDark,"theme--light":!this.isDark}},rootIsDark:function(){return!0===this.dark||!0!==this.light&&this.appIsDark},rootThemeClasses:function(){return{"theme--dark":this.rootIsDark,"theme--light":!this.rootIsDark}}},watch:{isDark:{handler:function(t,e){t!==e&&(this.themeableProvide.isDark=this.isDark)},immediate:!0}}});function o(t){var e=Object(i["a"])(Object(i["a"])({},t.props),t.injections),n=s.options.computed.isDark.call(e);return s.options.computed.themeClasses.call({isDark:n})}e["a"]=s},"75eb":function(t,e,n){"use strict";var i=n("ade3"),r=n("53ca"),s=(n("d3b7"),n("159b"),n("caad"),n("2532"),n("a630"),n("3ca3"),n("9d65")),o=n("80d2"),a=n("58df"),c=n("d9bd");function u(t){var e=Object(r["a"])(t);return"boolean"===e||"string"===e||t.nodeType===Node.ELEMENT_NODE}function l(t){t.forEach((function(t){t.elm&&t.elm.parentNode&&t.elm.parentNode.removeChild(t.elm)}))}e["a"]=Object(a["a"])(s["a"]).extend({name:"detachable",props:{attach:{default:!1,validator:u},contentClass:{type:String,default:""}},data:function(){return{activatorNode:null,hasDetached:!1}},watch:{attach:function(){this.hasDetached=!1,this.initDetach()},hasContent:function(){this.$nextTick(this.initDetach)}},beforeMount:function(){var t=this;this.$nextTick((function(){if(t.activatorNode){var e=Array.isArray(t.activatorNode)?t.activatorNode:[t.activatorNode];e.forEach((function(e){if(e.elm&&t.$el.parentNode){var n=t.$el===t.$el.parentNode.firstChild?t.$el:t.$el.nextSibling;t.$el.parentNode.insertBefore(e.elm,n)}}))}}))},mounted:function(){this.hasContent&&this.initDetach()},deactivated:function(){this.isActive=!1},beforeDestroy:function(){this.$refs.content&&this.$refs.content.parentNode&&this.$refs.content.parentNode.removeChild(this.$refs.content)},destroyed:function(){var t=this;if(this.activatorNode){var e=Array.isArray(this.activatorNode)?this.activatorNode:[this.activatorNode];if(this.$el.isConnected){var n=new MutationObserver((function(i){i.some((function(e){return Array.from(e.removedNodes).includes(t.$el)}))&&(n.disconnect(),l(e))}));n.observe(this.$el.parentNode,{subtree:!1,childList:!0})}else l(e)}},methods:{getScopeIdAttrs:function(){var t=Object(o["p"])(this.$vnode,"context.$options._scopeId");return t&&Object(i["a"])({},t,"")},initDetach:function(){var t;this._isDestroyed||!this.$refs.content||this.hasDetached||""===this.attach||!0===this.attach||"attach"===this.attach||(t=!1===this.attach?document.querySelector("[data-app]"):"string"===typeof this.attach?document.querySelector(this.attach):this.attach,t?(t.appendChild(this.$refs.content),this.hasDetached=!0):Object(c["c"])("Unable to locate target ".concat(this.attach||"[data-app]"),this))}}})},7839:function(t,e){t.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},"785a":function(t,e,n){var i=n("cc12"),r=i("span").classList,s=r&&r.constructor&&r.constructor.prototype;t.exports=s===Object.prototype?void 0:s},7958:function(t,e,n){},"7b0b":function(t,e,n){var i=n("da84"),r=n("1d80"),s=i.Object;t.exports=function(t){return s(r(t))}},"7bc6":function(t,e,n){"use strict";n.d(e,"d",(function(){return r})),n.d(e,"b",(function(){return s})),n.d(e,"c",(function(){return o})),n.d(e,"a",(function(){return a}));n("5530"),n("3835"),n("ac1f"),n("466d"),n("a15b"),n("d81d"),n("1276"),n("d9e2"),n("b0c0"),n("5319"),n("498a"),n("d3b7"),n("25f0"),n("38cf"),n("99af"),n("fb6a"),n("2ca0"),n("07ac");var i=n("d9bd");n("80d2"),n("8da5");function r(t){return!!t&&!!t.match(/^(#|var\(--|(rgb|hsl)a?\()/)}function s(t){var e;if("number"===typeof t)e=t;else{if("string"!==typeof t)throw new TypeError("Colors can only be numbers or strings, recieved ".concat(null==t?t:t.constructor.name," instead"));var n="#"===t[0]?t.substring(1):t;3===n.length&&(n=n.split("").map((function(t){return t+t})).join("")),6!==n.length&&Object(i["c"])("'".concat(t,"' is not a valid rgb color")),e=parseInt(n,16)}return e<0?(Object(i["c"])("Colors cannot be negative: '".concat(t,"'")),e=0):(e>16777215||isNaN(e))&&(Object(i["c"])("'".concat(t,"' is not a valid rgb color")),e=16777215),e}function o(t){var e=t.toString(16);return e.length<6&&(e="0".repeat(6-e.length)+e),"#"+e}function a(t){return o(s(t))}},"7c73":function(t,e,n){var i,r=n("825a"),s=n("37e8"),o=n("7839"),a=n("d012"),c=n("1be4"),u=n("cc12"),l=n("f772"),h=">",d="<",f="prototype",p="script",m=l("IE_PROTO"),g=function(){},v=function(t){return d+p+h+t+d+"/"+p+h},y=function(t){t.write(v("")),t.close();var e=t.parentWindow.Object;return t=null,e},b=function(){var t,e=u("iframe"),n="java"+p+":";return e.style.display="none",c.appendChild(e),e.src=String(n),t=e.contentWindow.document,t.open(),t.write(v("document.F=Object")),t.close(),t.F},w=function(){try{i=new ActiveXObject("htmlfile")}catch(e){}w="undefined"!=typeof document?document.domain&&i?y(i):b():y(i);var t=o.length;while(t--)delete w[f][o[t]];return w()};a[m]=!0,t.exports=Object.create||function(t,e){var n;return null!==t?(g[f]=r(t),n=new g,g[f]=null,n[m]=t):n=w(),void 0===e?n:s.f(n,e)}},"7d8f":function(t,e,n){"use strict";n.d(e,"b",(function(){return x})),n.d(e,"a",(function(){return C}));var i={};n.r(i),n.d(i,"linear",(function(){return h})),n.d(i,"easeInQuad",(function(){return d})),n.d(i,"easeOutQuad",(function(){return f})),n.d(i,"easeInOutQuad",(function(){return p})),n.d(i,"easeInCubic",(function(){return m})),n.d(i,"easeOutCubic",(function(){return g})),n.d(i,"easeInOutCubic",(function(){return v})),n.d(i,"easeInQuart",(function(){return y})),n.d(i,"easeOutQuart",(function(){return b})),n.d(i,"easeInOutQuart",(function(){return w})),n.d(i,"easeInQuint",(function(){return _})),n.d(i,"easeOutQuint",(function(){return O})),n.d(i,"easeInOutQuint",(function(){return I}));var r=n("bee2"),s=n("d4ec"),o=n("99de"),a=n("262e"),c=n("2caf"),u=n("5530"),l=(n("d3b7"),n("d9e2"),n("fff9")),h=function(t){return t},d=function(t){return Math.pow(t,2)},f=function(t){return t*(2-t)},p=function(t){return t<.5?2*Math.pow(t,2):(4-2*t)*t-1},m=function(t){return Math.pow(t,3)},g=function(t){return Math.pow(--t,3)+1},v=function(t){return t<.5?4*Math.pow(t,3):(t-1)*(2*t-2)*(2*t-2)+1},y=function(t){return Math.pow(t,4)},b=function(t){return 1-Math.pow(--t,4)},w=function(t){return t<.5?8*t*t*t*t:1-8*--t*t*t*t},_=function(t){return Math.pow(t,5)},O=function(t){return 1+Math.pow(--t,5)},I=function(t){return t<.5?16*Math.pow(t,5):1+16*Math.pow(--t,5)};n("b0c0");function S(t){if("number"===typeof t)return t;var e=E(t);if(!e)throw"string"===typeof t?new Error('Target element "'.concat(t,'" not found.')):new TypeError("Target must be a Number/Selector/HTMLElement/VueComponent, received ".concat(T(t)," instead."));var n=0;while(e)n+=e.offsetTop,e=e.offsetParent;return n}function k(t){var e=E(t);if(e)return e;throw"string"===typeof t?new Error('Container element "'.concat(t,'" not found.')):new TypeError("Container must be a Selector/HTMLElement/VueComponent, received ".concat(T(t)," instead."))}function T(t){return null==t?t:t.constructor.name}function E(t){return"string"===typeof t?document.querySelector(t):t&&t._isVue?t.$el:t instanceof HTMLElement?t:null}function x(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=Object(u["a"])({container:document.scrollingElement||document.body||document.documentElement,duration:500,offset:0,easing:"easeInOutCubic",appOffset:!0},e),r=k(n.container);if(n.appOffset&&x.framework.application){var s=r.classList.contains("v-navigation-drawer"),o=r.classList.contains("v-navigation-drawer--clipped"),a=x.framework.application,c=a.bar,l=a.top;n.offset+=c,s&&!o||(n.offset+=l)}var h,d=performance.now();h="number"===typeof t?S(t)-n.offset:S(t)-S(r)-n.offset;var f=r.scrollTop;if(h===f)return Promise.resolve(h);var p="function"===typeof n.easing?n.easing:i[n.easing];if(!p)throw new TypeError('Easing function "'.concat(n.easing,'" not found.'));return new Promise((function(t){return requestAnimationFrame((function e(i){var s=i-d,o=Math.abs(n.duration?Math.min(s/n.duration,1):1);r.scrollTop=Math.floor(f+(h-f)*p(o));var a=r===document.body?document.documentElement.clientHeight:r.clientHeight,c=a+r.scrollTop>=r.scrollHeight;if(1===o||h>r.scrollTop&&c)return t(h);requestAnimationFrame(e)}))}))}x.framework={},x.init=function(){};var C=function(t){Object(a["a"])(n,t);var e=Object(c["a"])(n);function n(){var t;return Object(s["a"])(this,n),t=e.call(this),Object(o["a"])(t,x)}return Object(r["a"])(n)}(l["a"]);C.property="goTo"},"7db0":function(t,e,n){"use strict";var i=n("23e7"),r=n("b727").find,s=n("44d2"),o="find",a=!0;o in[]&&Array(1)[o]((function(){a=!1})),i({target:"Array",proto:!0,forced:a},{find:function(t){return r(this,t,arguments.length>1?arguments[1]:void 0)}}),s(o)},"7dd0":function(t,e,n){"use strict";var i=n("23e7"),r=n("c65b"),s=n("c430"),o=n("5e77"),a=n("1626"),c=n("9ed3"),u=n("e163"),l=n("d2bb"),h=n("d44e"),d=n("9112"),f=n("6eeb"),p=n("b622"),m=n("3f8c"),g=n("ae93"),v=o.PROPER,y=o.CONFIGURABLE,b=g.IteratorPrototype,w=g.BUGGY_SAFARI_ITERATORS,_=p("iterator"),O="keys",I="values",S="entries",k=function(){return this};t.exports=function(t,e,n,o,p,g,T){c(n,e,o);var E,x,C,A=function(t){if(t===p&&D)return D;if(!w&&t in L)return L[t];switch(t){case O:return function(){return new n(this,t)};case I:return function(){return new n(this,t)};case S:return function(){return new n(this,t)}}return function(){return new n(this)}},j=e+" Iterator",R=!1,L=t.prototype,N=L[_]||L["@@iterator"]||p&&L[p],D=!w&&N||A(p),P="Array"==e&&L.entries||N;if(P&&(E=u(P.call(new t)),E!==Object.prototype&&E.next&&(s||u(E)===b||(l?l(E,b):a(E[_])||f(E,_,k)),h(E,j,!0,!0),s&&(m[j]=k))),v&&p==I&&N&&N.name!==I&&(!s&&y?d(L,"name",I):(R=!0,D=function(){return r(N,this)})),p)if(x={values:A(I),keys:g?D:A(O),entries:A(S)},T)for(C in x)(w||R||!(C in L))&&f(L,C,x[C]);else i({target:e,proto:!0,forced:w||R},x);return s&&!T||L[_]===D||f(L,_,D,{name:p}),m[e]=D,x}},"7ded":function(t,e,n){"use strict";n.d(e,"a",(function(){return v}));var i=n("1fd5"),r=n("22e5"),s=n("589b"),o=n("e691");
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class a{constructor(t,e){this._delegate=t,this.firebase=e,Object(s["_addComponent"])(t,new r["a"]("app-compat",()=>this,"PUBLIC")),this.container=t.container}get automaticDataCollectionEnabled(){return this._delegate.automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this._delegate.automaticDataCollectionEnabled=t}get name(){return this._delegate.name}get options(){return this._delegate.options}delete(){return new Promise(t=>{this._delegate.checkDestroyed(),t()}).then(()=>(this.firebase.INTERNAL.removeApp(this.name),Object(s["deleteApp"])(this._delegate)))}_getService(t,e=s["_DEFAULT_ENTRY_NAME"]){var n;this._delegate.checkDestroyed();const i=this._delegate.container.getProvider(t);return i.isInitialized()||"EXPLICIT"!==(null===(n=i.getComponent())||void 0===n?void 0:n.instantiationMode)||i.initialize(),i.getImmediate({identifier:e})}_removeServiceInstance(t,e=s["_DEFAULT_ENTRY_NAME"]){this._delegate.container.getProvider(t).clearInstance(e)}_addComponent(t){Object(s["_addComponent"])(this._delegate,t)}_addOrOverwriteComponent(t){Object(s["_addOrOverwriteComponent"])(this._delegate,t)}toJSON(){return{name:this.name,automaticDataCollectionEnabled:this.automaticDataCollectionEnabled,options:this.options}}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const c={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance."},u=new i["b"]("app-compat","Firebase",c);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function l(t){const e={},n={__esModule:!0,initializeApp:a,app:o,registerVersion:s["registerVersion"],setLogLevel:s["setLogLevel"],onLog:s["onLog"],apps:null,SDK_VERSION:s["SDK_VERSION"],INTERNAL:{registerComponent:l,removeApp:r,useAsService:h,modularAPIs:s}};function r(t){delete e[t]}function o(t){if(t=t||s["_DEFAULT_ENTRY_NAME"],!Object(i["e"])(e,t))throw u.create("no-app",{appName:t});return e[t]}function a(r,o={}){const a=s["initializeApp"](r,o);if(Object(i["e"])(e,a.name))return e[a.name];const c=new t(a,n);return e[a.name]=c,c}function c(){return Object.keys(e).map(t=>e[t])}function l(e){const r=e.name,a=r.replace("-compat","");if(s["_registerComponent"](e)&&"PUBLIC"===e.type){const s=(t=o())=>{if("function"!==typeof t[a])throw u.create("invalid-app-argument",{appName:r});return t[a]()};void 0!==e.serviceProps&&Object(i["i"])(s,e.serviceProps),n[a]=s,t.prototype[a]=function(...t){const n=this._getService.bind(this,r);return n.apply(this,e.multipleInstances?t:[])}}return"PUBLIC"===e.type?n[a]:null}function h(t,e){if("serverAuth"===e)return null;const n=e;return n}return n["default"]=n,Object.defineProperty(n,"apps",{get:c}),o["App"]=t,n}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function h(){const t=l(a);function e(e){Object(i["i"])(t,e)}return t.INTERNAL=Object.assign(Object.assign({},t.INTERNAL),{createFirebaseNamespace:h,extendNamespace:e,createSubscribe:i["g"],ErrorFactory:i["b"],deepExtend:i["i"]}),t}const d=h(),f=new o["b"]("@firebase/app-compat"),p="@firebase/app-compat",m="0.1.16";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function g(t){Object(s["registerVersion"])(p,m,t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */if(Object(i["m"])()&&void 0!==self.firebase){f.warn("\n    Warning: Firebase is already defined in the global scope. Please make sure\n    Firebase library is only loaded once.\n  ");const t=self.firebase.SDK_VERSION;t&&t.indexOf("LITE")>=0&&f.warn("\n    Warning: You are trying to load Firebase while using Firebase Performance standalone script.\n    You should load Firebase Performance with this instance of Firebase to avoid loading duplicate code.\n    ")}const v=d;g()},"7e2b":function(t,e,n){"use strict";var i=n("2b0e");function r(t){return function(e,n){for(var i in n)Object.prototype.hasOwnProperty.call(e,i)||this.$delete(this.$data[t],i);for(var r in e)this.$set(this.$data[t],r,e[r])}}e["a"]=i["a"].extend({data:function(){return{attrs$:{},listeners$:{}}},created:function(){this.$watch("$attrs",r("attrs$"),{immediate:!0}),this.$watch("$listeners",r("listeners$"),{immediate:!0})}})},"7f9a":function(t,e,n){var i=n("da84"),r=n("1626"),s=n("8925"),o=i.WeakMap;t.exports=r(o)&&/native code/.test(s(o))},"80d2":function(t,e,n){"use strict";n.d(e,"i",(function(){return o})),n.d(e,"a",(function(){return a})),n.d(e,"b",(function(){return l})),n.d(e,"o",(function(){return h})),n.d(e,"j",(function(){return d})),n.d(e,"p",(function(){return f})),n.d(e,"r",(function(){return p})),n.d(e,"u",(function(){return m})),n.d(e,"l",(function(){return v})),n.d(e,"n",(function(){return y})),n.d(e,"h",(function(){return b})),n.d(e,"w",(function(){return w})),n.d(e,"x",(function(){return O})),n.d(e,"B",(function(){return I})),n.d(e,"y",(function(){return S})),n.d(e,"c",(function(){return T})),n.d(e,"E",(function(){return E})),n.d(e,"v",(function(){return x})),n.d(e,"F",(function(){return C})),n.d(e,"D",(function(){return A})),n.d(e,"k",(function(){return j})),n.d(e,"C",(function(){return R})),n.d(e,"t",(function(){return L})),n.d(e,"q",(function(){return N})),n.d(e,"s",(function(){return D})),n.d(e,"f",(function(){return P})),n.d(e,"A",(function(){return M})),n.d(e,"e",(function(){return $})),n.d(e,"d",(function(){return F})),n.d(e,"z",(function(){return B})),n.d(e,"m",(function(){return V})),n.d(e,"g",(function(){return U}));var i=n("3835"),r=n("53ca"),s=(n("5530"),n("ac1f"),n("5319"),n("498a"),n("99af"),n("b64b"),n("d3b7"),n("1276"),n("a630"),n("3ca3"),n("a9e3"),n("dca8"),n("2ca0"),n("fb6a"),n("4e827"),n("d81d"),n("25f0"),n("4de4"),n("b0c0"),n("38cf"),n("b680"),n("cb29"),n("2b0e"));function o(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"div",n=arguments.length>2?arguments[2]:void 0;return s["a"].extend({name:n||t.replace(/__/g,"-"),functional:!0,props:{tag:{type:String,default:e}},render:function(e,n){var i=n.data,r=n.props,s=n.children;return i.staticClass="".concat(t," ").concat(i.staticClass||"").trim(),e(r.tag,i,s)}})}function a(t,e,n){var i=arguments.length>3&&void 0!==arguments[3]&&arguments[3],r=function r(s){n(s),t.removeEventListener(e,r,i)};t.addEventListener(e,r,i)}var c=!1;try{if("undefined"!==typeof window){var u=Object.defineProperty({},"passive",{get:function(){c=!0}});window.addEventListener("testListener",u,u),window.removeEventListener("testListener",u,u)}}catch(q){console.warn(q)}function l(t,e,n,i){t.addEventListener(e,n,!!c&&i)}function h(t,e,n){var i=e.length-1;if(i<0)return void 0===t?n:t;for(var r=0;r<i;r++){if(null==t)return n;t=t[e[r]]}return null==t||void 0===t[e[i]]?n:t[e[i]]}function d(t,e){if(t===e)return!0;if(t instanceof Date&&e instanceof Date&&t.getTime()!==e.getTime())return!1;if(t!==Object(t)||e!==Object(e))return!1;var n=Object.keys(t);return n.length===Object.keys(e).length&&n.every((function(n){return d(t[n],e[n])}))}function f(t,e,n){return null!=t&&e&&"string"===typeof e?void 0!==t[e]?t[e]:(e=e.replace(/\[(\w+)\]/g,".$1"),e=e.replace(/^\./,""),h(t,e.split("."),n)):n}function p(t,e,n){if(null==e)return void 0===t?n:t;if(t!==Object(t))return void 0===n?t:n;if("string"===typeof e)return f(t,e,n);if(Array.isArray(e))return h(t,e,n);if("function"!==typeof e)return n;var i=e(t,n);return"undefined"===typeof i?n:i}function m(t){if(!t||t.nodeType!==Node.ELEMENT_NODE)return 0;var e=+window.getComputedStyle(t).getPropertyValue("z-index");return e||m(t.parentNode)}var g={"&":"&amp;","<":"&lt;",">":"&gt;"};function v(t){return t.replace(/[&<>]/g,(function(t){return g[t]||t}))}function y(t,e){for(var n={},i=0;i<e.length;i++){var r=e[i];"undefined"!==typeof t[r]&&(n[r]=t[r])}return n}function b(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"px";return null==t||""===t?void 0:isNaN(+t)?String(t):"".concat(Number(t)).concat(e)}function w(t){return(t||"").replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase()}function _(t){return null!==t&&"object"===Object(r["a"])(t)}var O=Object.freeze({enter:13,tab:9,delete:46,esc:27,space:32,up:38,down:40,left:37,right:39,end:35,home:36,del:46,backspace:8,insert:45,pageup:33,pagedown:34,shift:16});function I(t,e){var n=t.$vuetify.icons.component;if(e.startsWith("$")){var i="$vuetify.icons.values.".concat(e.split("$").pop().split(".").pop()),r=f(t,i,e);if("string"!==typeof r)return r;e=r}return null==n?e:{component:n,props:{icon:e}}}function S(t){return Object.keys(t)}var k=/-(\w)/g,T=function(t){return t.replace(k,(function(t,e){return e?e.toUpperCase():""}))};function E(t){return t.charAt(0).toUpperCase()+t.slice(1)}function x(t,e,n){for(var i,r=e[0],s=[],o=0;o<t.length;o++){var a=t[o],c=f(a,r,null);i!==c&&(i=c,s.push({name:null!=c?c:"",items:[]})),s[s.length-1].items.push(a)}return s}function C(t){return null!=t?Array.isArray(t)?t:[t]:[]}function A(t,e,n,r,s){if(null===e||!e.length)return t;var o=new Intl.Collator(r,{sensitivity:"accent",usage:"sort"});return t.sort((function(t,r){for(var a=0;a<e.length;a++){var c=e[a],u=f(t,c),l=f(r,c);if(n[a]){var h=[l,u];u=h[0],l=h[1]}if(s&&s[c]){var d=s[c](u,l);if(!d)continue;return d}if(null!==u||null!==l){if(u instanceof Date&&l instanceof Date)return u.getTime()-l.getTime();var p=[u,l].map((function(t){return(t||"").toString().toLocaleLowerCase()})),m=Object(i["a"])(p,2);if(u=m[0],l=m[1],u!==l)return isNaN(u)||isNaN(l)?o.compare(u,l):Number(u)-Number(l)}}return 0}))}function j(t,e,n){return null!=t&&null!=e&&"boolean"!==typeof t&&-1!==t.toString().toLocaleLowerCase().indexOf(e.toLocaleLowerCase())}function R(t,e){return e?(e=e.toString().toLowerCase(),""===e.trim()?t:t.filter((function(t){return Object.keys(t).some((function(n){return j(f(t,n),e,t)}))}))):t}function L(t,e,n){return t.$slots.hasOwnProperty(e)&&t.$scopedSlots.hasOwnProperty(e)&&t.$scopedSlots[e].name?n?"v-slot":"scoped":t.$slots.hasOwnProperty(e)?"normal":t.$scopedSlots.hasOwnProperty(e)?"scoped":void 0}function N(t,e){return Object.keys(e).filter((function(e){return e.startsWith(t)})).reduce((function(n,i){return n[i.replace(t,"")]=e[i],n}),{})}function D(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"default",n=arguments.length>2?arguments[2]:void 0,i=arguments.length>3&&void 0!==arguments[3]&&arguments[3];return t.$scopedSlots.hasOwnProperty(e)?t.$scopedSlots[e](n instanceof Function?n():n):!t.$slots.hasOwnProperty(e)||n&&!i?void 0:t.$slots[e]}function P(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1;return Math.max(e,Math.min(n,t))}function M(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"0";return t+n.repeat(Math.max(0,e-t.length))}function $(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,n=[],i=0;while(i<t.length)n.push(t.substr(i,e)),i+=e;return n}function F(t){return t?Object.keys(t).reduce((function(e,n){return e[T(n)]=t[n],e}),{}):{}}function B(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};for(var n in e){var i=t[n],r=e[n];_(i)&&_(r)?t[n]=B(i,r):t[n]=r}return t}function V(t,e){return Array(t).fill(e)}function U(t){if(t.composedPath)return t.composedPath();var e=[],n=t.target;while(n){if(e.push(n),"HTML"===n.tagName)return e.push(document),e.push(window),e;n=n.parentElement}return e}},"81d5":function(t,e,n){"use strict";var i=n("7b0b"),r=n("23cb"),s=n("07fa");t.exports=function(t){var e=i(this),n=s(e),o=arguments.length,a=r(o>1?arguments[1]:void 0,n),c=o>2?arguments[2]:void 0,u=void 0===c?n:r(c,n);while(u>a)e[a++]=t;return e}},"825a":function(t,e,n){var i=n("da84"),r=n("861d"),s=i.String,o=i.TypeError;t.exports=function(t){if(r(t))return t;throw o(s(t)+" is not an object")}},8336:function(t,e,n){"use strict";var i=n("53ca"),r=n("3835"),s=n("5530"),o=(n("c7cd"),n("a9e3"),n("d3b7"),n("caad"),n("e9c4"),n("86cc"),n("10d2")),a=(n("99af"),n("8d4f"),n("90a2")),c=n("a9ad"),u=n("80d2"),l=c["a"].extend({name:"v-progress-circular",directives:{intersect:a["a"]},props:{button:Boolean,indeterminate:Boolean,rotate:{type:[Number,String],default:0},size:{type:[Number,String],default:32},width:{type:[Number,String],default:4},value:{type:[Number,String],default:0}},data:function(){return{radius:20,isVisible:!0}},computed:{calculatedSize:function(){return Number(this.size)+(this.button?8:0)},circumference:function(){return 2*Math.PI*this.radius},classes:function(){return{"v-progress-circular--visible":this.isVisible,"v-progress-circular--indeterminate":this.indeterminate,"v-progress-circular--button":this.button}},normalizedValue:function(){return this.value<0?0:this.value>100?100:parseFloat(this.value)},strokeDashArray:function(){return Math.round(1e3*this.circumference)/1e3},strokeDashOffset:function(){return(100-this.normalizedValue)/100*this.circumference+"px"},strokeWidth:function(){return Number(this.width)/+this.size*this.viewBoxSize*2},styles:function(){return{height:Object(u["h"])(this.calculatedSize),width:Object(u["h"])(this.calculatedSize)}},svgStyles:function(){return{transform:"rotate(".concat(Number(this.rotate),"deg)")}},viewBoxSize:function(){return this.radius/(1-Number(this.width)/+this.size)}},methods:{genCircle:function(t,e){return this.$createElement("circle",{class:"v-progress-circular__".concat(t),attrs:{fill:"transparent",cx:2*this.viewBoxSize,cy:2*this.viewBoxSize,r:this.radius,"stroke-width":this.strokeWidth,"stroke-dasharray":this.strokeDashArray,"stroke-dashoffset":e}})},genSvg:function(){var t=[this.indeterminate||this.genCircle("underlay",0),this.genCircle("overlay",this.strokeDashOffset)];return this.$createElement("svg",{style:this.svgStyles,attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"".concat(this.viewBoxSize," ").concat(this.viewBoxSize," ").concat(2*this.viewBoxSize," ").concat(2*this.viewBoxSize)}},t)},genInfo:function(){return this.$createElement("div",{staticClass:"v-progress-circular__info"},this.$slots.default)},onObserve:function(t,e,n){this.isVisible=n}},render:function(t){return t("div",this.setTextColor(this.color,{staticClass:"v-progress-circular",attrs:{role:"progressbar","aria-valuemin":0,"aria-valuemax":100,"aria-valuenow":this.indeterminate?void 0:this.normalizedValue},class:this.classes,directives:[{name:"intersect",value:this.onObserve}],style:this.styles,on:this.$listeners}),[this.genSvg(),this.genInfo()])}}),h=l,d=n("4e82"),f=n("f2e7"),p=n("c995"),m=n("fe6c"),g=n("1c87"),v=n("af2b"),y=n("58df"),b=n("d9bd"),w=Object(y["a"])(o["a"],g["a"],m["a"],v["a"],Object(d["a"])("btnToggle"),Object(f["b"])("inputValue"));e["a"]=w.extend().extend({name:"v-btn",props:{activeClass:{type:String,default:function(){return this.btnToggle?this.btnToggle.activeClass:""}},block:Boolean,depressed:Boolean,fab:Boolean,icon:Boolean,loading:Boolean,outlined:Boolean,plain:Boolean,retainFocusOnClick:Boolean,rounded:Boolean,tag:{type:String,default:"button"},text:Boolean,tile:Boolean,type:{type:String,default:"button"},value:null},data:function(){return{proxyClass:"v-btn--active"}},computed:{classes:function(){return Object(s["a"])(Object(s["a"])(Object(s["a"])(Object(s["a"])(Object(s["a"])({"v-btn":!0},g["a"].options.computed.classes.call(this)),{},{"v-btn--absolute":this.absolute,"v-btn--block":this.block,"v-btn--bottom":this.bottom,"v-btn--disabled":this.disabled,"v-btn--is-elevated":this.isElevated,"v-btn--fab":this.fab,"v-btn--fixed":this.fixed,"v-btn--has-bg":this.hasBg,"v-btn--icon":this.icon,"v-btn--left":this.left,"v-btn--loading":this.loading,"v-btn--outlined":this.outlined,"v-btn--plain":this.plain,"v-btn--right":this.right,"v-btn--round":this.isRound,"v-btn--rounded":this.rounded,"v-btn--router":this.to,"v-btn--text":this.text,"v-btn--tile":this.tile,"v-btn--top":this.top},this.themeClasses),this.groupClasses),this.elevationClasses),this.sizeableClasses)},computedElevation:function(){if(!this.disabled)return p["a"].options.computed.computedElevation.call(this)},computedRipple:function(){var t,e=!this.icon&&!this.fab||{circle:!0};return!this.disabled&&(null!=(t=this.ripple)?t:e)},hasBg:function(){return!this.text&&!this.plain&&!this.outlined&&!this.icon},isElevated:function(){return Boolean(!this.icon&&!this.text&&!this.outlined&&!this.depressed&&!this.disabled&&!this.plain&&(null==this.elevation||Number(this.elevation)>0))},isRound:function(){return Boolean(this.icon||this.fab)},styles:function(){return Object(s["a"])({},this.measurableStyles)}},created:function(){var t=this,e=[["flat","text"],["outline","outlined"],["round","rounded"]];e.forEach((function(e){var n=Object(r["a"])(e,2),i=n[0],s=n[1];t.$attrs.hasOwnProperty(i)&&Object(b["a"])(i,s,t)}))},methods:{click:function(t){!this.retainFocusOnClick&&!this.fab&&t.detail&&this.$el.blur(),this.$emit("click",t),this.btnToggle&&this.toggle()},genContent:function(){return this.$createElement("span",{staticClass:"v-btn__content"},this.$slots.default)},genLoader:function(){return this.$createElement("span",{class:"v-btn__loader"},this.$slots.loader||[this.$createElement(h,{props:{indeterminate:!0,size:23,width:2}})])}},render:function(t){var e=[this.genContent(),this.loading&&this.genLoader()],n=this.generateRouteLink(),r=n.tag,s=n.data,o=this.hasBg?this.setBackgroundColor:this.setTextColor;return"button"===r&&(s.attrs.type=this.type,s.attrs.disabled=this.disabled),s.attrs.value=["string","number"].includes(Object(i["a"])(this.value))?this.value:JSON.stringify(this.value),t(r,this.disabled?s:o(this.color,s),e)}})},"83ab":function(t,e,n){var i=n("d039");t.exports=!i((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}))},8418:function(t,e,n){"use strict";var i=n("a04b"),r=n("9bf2"),s=n("5c6c");t.exports=function(t,e,n){var o=i(e);o in t?r.f(t,o,s(0,n)):t[o]=n}},"841c":function(t,e,n){"use strict";var i=n("c65b"),r=n("d784"),s=n("825a"),o=n("1d80"),a=n("129f"),c=n("577e"),u=n("dc4a"),l=n("14c3");r("search",(function(t,e,n){return[function(e){var n=o(this),r=void 0==e?void 0:u(e,t);return r?i(r,e,n):new RegExp(e)[t](c(n))},function(t){var i=s(this),r=c(t),o=n(e,i,r);if(o.done)return o.value;var u=i.lastIndex;a(u,0)||(i.lastIndex=0);var h=l(i,r);return a(i.lastIndex,u)||(i.lastIndex=u),null===h?-1:h.index}]}))},8547:function(t,e,n){"use strict";var i=n("2b0e"),r=n("80d2");e["a"]=i["a"].extend({name:"comparable",props:{valueComparator:{type:Function,default:r["j"]}}})},"857a":function(t,e,n){var i=n("e330"),r=n("1d80"),s=n("577e"),o=/"/g,a=i("".replace);t.exports=function(t,e,n,i){var c=s(r(t)),u="<"+e;return""!==n&&(u+=" "+n+'="'+a(s(i),o,"&quot;")+'"'),u+">"+c+"</"+e+">"}},"861d":function(t,e,n){var i=n("1626");t.exports=function(t){return"object"==typeof t?null!==t:i(t)}},8654:function(t,e,n){"use strict";var i=n("15fd"),r=n("2909"),s=n("5530"),o=(n("a9e3"),n("0481"),n("4069"),n("d3b7"),n("25f0"),n("caad"),n("2b19"),n("4ff9"),n("c37a")),a=(n("99af"),n("e9b1"),n("7560")),c=n("58df"),u=Object(c["a"])(a["a"]).extend({name:"v-counter",functional:!0,props:{value:{type:[Number,String],default:""},max:[Number,String]},render:function(t,e){var n=e.props,i=parseInt(n.max,10),r=parseInt(n.value,10),o=i?"".concat(r," / ").concat(i):String(n.value),c=i&&r>i;return t("div",{staticClass:"v-counter",class:Object(s["a"])({"error--text":c},Object(a["b"])(e))},o)}}),l=u,h=n("ba87"),d=n("90a2"),f=n("d9bd"),p=n("2b0e");function m(t){return p["a"].extend({name:"intersectable",data:function(){return{isIntersecting:!1}},mounted:function(){d["a"].inserted(this.$el,{name:"intersect",value:this.onObserve},this.$vnode)},destroyed:function(){d["a"].unbind(this.$el,{name:"intersect",value:this.onObserve},this.$vnode)},methods:{onObserve:function(e,n,i){if(this.isIntersecting=i,i)for(var r=0,s=t.onVisible.length;r<s;r++){var o=this[t.onVisible[r]];"function"!==typeof o?Object(f["c"])(t.onVisible[r]+" method is not available on the instance but referenced in intersectable mixin options"):o()}}}})}var g=n("297c"),v=n("38cb"),y=n("dc22"),b=n("5607"),w=n("dd89"),_=n("80d2"),O=["title"],I=Object(c["a"])(o["a"],m({onVisible:["onResize","tryAutofocus"]}),g["a"]),S=["color","file","time","date","datetime-local","week","month"];e["a"]=I.extend().extend({name:"v-text-field",directives:{resize:y["a"],ripple:b["a"]},inheritAttrs:!1,props:{appendOuterIcon:String,autofocus:Boolean,clearable:Boolean,clearIcon:{type:String,default:"$clear"},counter:[Boolean,Number,String],counterValue:Function,filled:Boolean,flat:Boolean,fullWidth:Boolean,label:String,outlined:Boolean,placeholder:String,prefix:String,prependInnerIcon:String,persistentPlaceholder:Boolean,reverse:Boolean,rounded:Boolean,shaped:Boolean,singleLine:Boolean,solo:Boolean,soloInverted:Boolean,suffix:String,type:{type:String,default:"text"}},data:function(){return{badInput:!1,labelWidth:0,prefixWidth:0,prependWidth:0,initialValue:null,isBooted:!1,isClearing:!1}},computed:{classes:function(){return Object(s["a"])(Object(s["a"])({},o["a"].options.computed.classes.call(this)),{},{"v-text-field":!0,"v-text-field--full-width":this.fullWidth,"v-text-field--prefix":this.prefix,"v-text-field--single-line":this.isSingle,"v-text-field--solo":this.isSolo,"v-text-field--solo-inverted":this.soloInverted,"v-text-field--solo-flat":this.flat,"v-text-field--filled":this.filled,"v-text-field--is-booted":this.isBooted,"v-text-field--enclosed":this.isEnclosed,"v-text-field--reverse":this.reverse,"v-text-field--outlined":this.outlined,"v-text-field--placeholder":this.placeholder,"v-text-field--rounded":this.rounded,"v-text-field--shaped":this.shaped})},computedColor:function(){var t=v["a"].options.computed.computedColor.call(this);return this.soloInverted&&this.isFocused?this.color||"primary":t},computedCounterValue:function(){return"function"===typeof this.counterValue?this.counterValue(this.internalValue):Object(r["a"])((this.internalValue||"").toString()).length},hasCounter:function(){return!1!==this.counter&&null!=this.counter},hasDetails:function(){return o["a"].options.computed.hasDetails.call(this)||this.hasCounter},internalValue:{get:function(){return this.lazyValue},set:function(t){this.lazyValue=t,this.$emit("input",this.lazyValue)}},isDirty:function(){var t;return(null==(t=this.lazyValue)?void 0:t.toString().length)>0||this.badInput},isEnclosed:function(){return this.filled||this.isSolo||this.outlined},isLabelActive:function(){return this.isDirty||S.includes(this.type)},isSingle:function(){return this.isSolo||this.singleLine||this.fullWidth||this.filled&&!this.hasLabel},isSolo:function(){return this.solo||this.soloInverted},labelPosition:function(){var t=this.prefix&&!this.labelValue?this.prefixWidth:0;return this.labelValue&&this.prependWidth&&(t-=this.prependWidth),this.$vuetify.rtl===this.reverse?{left:t,right:"auto"}:{left:"auto",right:t}},showLabel:function(){return this.hasLabel&&!(this.isSingle&&this.labelValue)},labelValue:function(){return this.isFocused||this.isLabelActive||this.persistentPlaceholder}},watch:{outlined:"setLabelWidth",label:function(){this.$nextTick(this.setLabelWidth)},prefix:function(){this.$nextTick(this.setPrefixWidth)},isFocused:"updateValue",value:function(t){this.lazyValue=t}},created:function(){this.$attrs.hasOwnProperty("box")&&Object(f["a"])("box","filled",this),this.$attrs.hasOwnProperty("browser-autocomplete")&&Object(f["a"])("browser-autocomplete","autocomplete",this),this.shaped&&!(this.filled||this.outlined||this.isSolo)&&Object(f["c"])("shaped should be used with either filled or outlined",this)},mounted:function(){var t=this;this.$watch((function(){return t.labelValue}),this.setLabelWidth),this.autofocus&&this.tryAutofocus(),requestAnimationFrame((function(){t.isBooted=!0,requestAnimationFrame((function(){t.isIntersecting||t.onResize()}))}))},methods:{focus:function(){this.onFocus()},blur:function(t){var e=this;window.requestAnimationFrame((function(){e.$refs.input&&e.$refs.input.blur()}))},clearableCallback:function(){var t=this;this.$refs.input&&this.$refs.input.focus(),this.$nextTick((function(){return t.internalValue=null}))},genAppendSlot:function(){var t=[];return this.$slots["append-outer"]?t.push(this.$slots["append-outer"]):this.appendOuterIcon&&t.push(this.genIcon("appendOuter")),this.genSlot("append","outer",t)},genPrependInnerSlot:function(){var t=[];return this.$slots["prepend-inner"]?t.push(this.$slots["prepend-inner"]):this.prependInnerIcon&&t.push(this.genIcon("prependInner")),this.genSlot("prepend","inner",t)},genIconSlot:function(){var t=[];return this.$slots.append?t.push(this.$slots.append):this.appendIcon&&t.push(this.genIcon("append")),this.genSlot("append","inner",t)},genInputSlot:function(){var t=o["a"].options.methods.genInputSlot.call(this),e=this.genPrependInnerSlot();return e&&(t.children=t.children||[],t.children.unshift(e)),t},genClearIcon:function(){return this.clearable?this.isDirty?this.genSlot("append","inner",[this.genIcon("clear",this.clearableCallback)]):this.genSlot("append","inner",[this.$createElement("div")]):null},genCounter:function(){var t,e,n;if(!this.hasCounter)return null;var i=!0===this.counter?this.attrs$.maxlength:this.counter,r={dark:this.dark,light:this.light,max:i,value:this.computedCounterValue};return null!=(t=null==(e=(n=this.$scopedSlots).counter)?void 0:e.call(n,{props:r}))?t:this.$createElement(l,{props:r})},genControl:function(){return o["a"].options.methods.genControl.call(this)},genDefaultSlot:function(){return[this.genFieldset(),this.genTextFieldSlot(),this.genClearIcon(),this.genIconSlot(),this.genProgress()]},genFieldset:function(){return this.outlined?this.$createElement("fieldset",{attrs:{"aria-hidden":!0}},[this.genLegend()]):null},genLabel:function(){if(!this.showLabel)return null;var t={props:{absolute:!0,color:this.validationState,dark:this.dark,disabled:this.isDisabled,focused:!this.isSingle&&(this.isFocused||!!this.validationState),for:this.computedId,left:this.labelPosition.left,light:this.light,right:this.labelPosition.right,value:this.labelValue}};return this.$createElement(h["a"],t,this.$slots.label||this.label)},genLegend:function(){var t=this.singleLine||!this.labelValue&&!this.isDirty?0:this.labelWidth,e=this.$createElement("span",{domProps:{innerHTML:"&#8203;"},staticClass:"notranslate"});return this.$createElement("legend",{style:{width:this.isSingle?void 0:Object(_["h"])(t)}},[e])},genInput:function(){var t=Object.assign({},this.listeners$);delete t.change;var e=this.attrs$,n=(e.title,Object(i["a"])(e,O));return this.$createElement("input",{style:{},domProps:{value:"number"===this.type&&Object.is(this.lazyValue,-0)?"-0":this.lazyValue},attrs:Object(s["a"])(Object(s["a"])({},n),{},{autofocus:this.autofocus,disabled:this.isDisabled,id:this.computedId,placeholder:this.persistentPlaceholder||this.isFocused||!this.hasLabel?this.placeholder:void 0,readonly:this.isReadonly,type:this.type}),on:Object.assign(t,{blur:this.onBlur,input:this.onInput,focus:this.onFocus,keydown:this.onKeyDown}),ref:"input",directives:[{name:"resize",modifiers:{quiet:!0},value:this.onResize}]})},genMessages:function(){if(!this.showDetails)return null;var t=o["a"].options.methods.genMessages.call(this),e=this.genCounter();return this.$createElement("div",{staticClass:"v-text-field__details"},[t,e])},genTextFieldSlot:function(){return this.$createElement("div",{staticClass:"v-text-field__slot"},[this.genLabel(),this.prefix?this.genAffix("prefix"):null,this.genInput(),this.suffix?this.genAffix("suffix"):null])},genAffix:function(t){return this.$createElement("div",{class:"v-text-field__".concat(t),ref:t},this[t])},onBlur:function(t){var e=this;this.isFocused=!1,t&&this.$nextTick((function(){return e.$emit("blur",t)}))},onClick:function(){this.isFocused||this.isDisabled||!this.$refs.input||this.$refs.input.focus()},onFocus:function(t){if(this.$refs.input){var e=Object(w["a"])(this.$el);if(e)return e.activeElement!==this.$refs.input?this.$refs.input.focus():void(this.isFocused||(this.isFocused=!0,t&&this.$emit("focus",t)))}},onInput:function(t){var e=t.target;this.internalValue=e.value,this.badInput=e.validity&&e.validity.badInput},onKeyDown:function(t){t.keyCode===_["x"].enter&&this.lazyValue!==this.initialValue&&(this.initialValue=this.lazyValue,this.$emit("change",this.initialValue)),this.$emit("keydown",t)},onMouseDown:function(t){t.target!==this.$refs.input&&(t.preventDefault(),t.stopPropagation()),o["a"].options.methods.onMouseDown.call(this,t)},onMouseUp:function(t){this.hasMouseDown&&this.focus(),o["a"].options.methods.onMouseUp.call(this,t)},setLabelWidth:function(){this.outlined&&(this.labelWidth=this.$refs.label?Math.min(.75*this.$refs.label.scrollWidth+6,this.$el.offsetWidth-24):0)},setPrefixWidth:function(){this.$refs.prefix&&(this.prefixWidth=this.$refs.prefix.offsetWidth)},setPrependWidth:function(){this.outlined&&this.$refs["prepend-inner"]&&(this.prependWidth=this.$refs["prepend-inner"].offsetWidth)},tryAutofocus:function(){if(!this.autofocus||"undefined"===typeof document||!this.$refs.input)return!1;var t=Object(w["a"])(this.$el);return!(!t||t.activeElement===this.$refs.input)&&(this.$refs.input.focus(),!0)},updateValue:function(t){this.hasColor=t,t?this.initialValue=this.lazyValue:this.initialValue!==this.lazyValue&&this.$emit("change",this.lazyValue)},onResize:function(){this.setLabelWidth(),this.setPrefixWidth(),this.setPrependWidth()}}})},"86cc":function(t,e,n){},8860:function(t,e,n){"use strict";var i=n("b85c"),r=n("5530"),s=(n("0481"),n("4069"),n("c740"),n("a434"),n("3ad0"),n("8dd9"));e["a"]=s["a"].extend().extend({name:"v-list",provide:function(){return{isInList:!0,list:this}},inject:{isInMenu:{default:!1},isInNav:{default:!1}},props:{dense:Boolean,disabled:Boolean,expand:Boolean,flat:Boolean,nav:Boolean,rounded:Boolean,subheader:Boolean,threeLine:Boolean,twoLine:Boolean},data:function(){return{groups:[]}},computed:{classes:function(){return Object(r["a"])(Object(r["a"])({},s["a"].options.computed.classes.call(this)),{},{"v-list--dense":this.dense,"v-list--disabled":this.disabled,"v-list--flat":this.flat,"v-list--nav":this.nav,"v-list--rounded":this.rounded,"v-list--subheader":this.subheader,"v-list--two-line":this.twoLine,"v-list--three-line":this.threeLine})}},methods:{register:function(t){this.groups.push(t)},unregister:function(t){var e=this.groups.findIndex((function(e){return e._uid===t._uid}));e>-1&&this.groups.splice(e,1)},listClick:function(t){if(!this.expand){var e,n=Object(i["a"])(this.groups);try{for(n.s();!(e=n.n()).done;){var r=e.value;r.toggle(t)}}catch(s){n.e(s)}finally{n.f()}}}},render:function(t){var e={staticClass:"v-list",class:this.classes,style:this.styles,attrs:Object(r["a"])({role:this.isInNav||this.isInMenu?void 0:"list"},this.attrs$)};return t(this.tag,this.setBackgroundColor(this.color,e),[this.$slots.default])}})},8925:function(t,e,n){var i=n("e330"),r=n("1626"),s=n("c6cd"),o=i(Function.toString);r(s.inspectSource)||(s.inspectSource=function(t){return o(t)}),t.exports=s.inspectSource},"899c":function(t,e,n){},"8a79":function(t,e,n){"use strict";var i=n("23e7"),r=n("e330"),s=n("06cf").f,o=n("50c4"),a=n("577e"),c=n("5a34"),u=n("1d80"),l=n("ab13"),h=n("c430"),d=r("".endsWith),f=r("".slice),p=Math.min,m=l("endsWith"),g=!h&&!m&&!!function(){var t=s(String.prototype,"endsWith");return t&&!t.writable}();i({target:"String",proto:!0,forced:!g&&!m},{endsWith:function(t){var e=a(u(this));c(t);var n=arguments.length>1?arguments[1]:void 0,i=e.length,r=void 0===n?i:p(o(n),i),s=a(t);return d?d(e,s,r):f(e,r-s.length,r)===s}})},"8aa5":function(t,e,n){"use strict";var i=n("6547").charAt;t.exports=function(t,e,n){return e+(n?i(t,e).length:1)}},"8adc":function(t,e,n){},"8b0d":function(t,e,n){},"8b37":function(t,e,n){},"8c4f":function(t,e,n){"use strict";
/*!
  * vue-router v3.5.3
  * (c) 2021 Evan You
  * @license MIT
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const i=[];var r;(function(t){t[t["DEBUG"]=0]="DEBUG",t[t["VERBOSE"]=1]="VERBOSE",t[t["INFO"]=2]="INFO",t[t["WARN"]=3]="WARN",t[t["ERROR"]=4]="ERROR",t[t["SILENT"]=5]="SILENT"})(r||(r={}));const s={debug:r.DEBUG,verbose:r.VERBOSE,info:r.INFO,warn:r.WARN,error:r.ERROR,silent:r.SILENT},o=r.INFO,a={[r.DEBUG]:"log",[r.VERBOSE]:"log",[r.INFO]:"info",[r.WARN]:"warn",[r.ERROR]:"error"},c=(t,e,...n)=>{if(e<t.logLevel)return;const i=(new Date).toISOString(),r=a[e];if(!r)throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`);console[r](`[${i}]  ${t.name}:`,...n)};class u{constructor(t){this.name=t,this._logLevel=o,this._logHandler=c,this._userLogHandler=null,i.push(this)}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in r))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel="string"===typeof t?s[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if("function"!==typeof t)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,r.DEBUG,...t),this._logHandler(this,r.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,r.VERBOSE,...t),this._logHandler(this,r.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,r.INFO,...t),this._logHandler(this,r.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,r.WARN,...t),this._logHandler(this,r.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,r.ERROR,...t),this._logHandler(this,r.ERROR,...t)}}function l(t){i.forEach(e=>{e.setLogLevel(t)})}function h(t,e){for(const n of i){let i=null;e&&e.level&&(i=s[e.level]),n.userLogHandler=null===t?null:(e,n,...s)=>{const o=s.map(t=>{if(null==t)return null;if("string"===typeof t)return t;if("number"===typeof t||"boolean"===typeof t)return t.toString();if(t instanceof Error)return t.message;try{return JSON.stringify(t)}catch(e){return null}}).filter(t=>t).join(" ");n>=(null!==i&&void 0!==i?i:e.logLevel)&&t({level:r[n].toLowerCase(),message:o,args:s,type:e.name})}}}},e6cf:function(t,e,n){"use strict";var i,r,s,o,a=n("23e7"),c=n("c430"),u=n("da84"),l=n("d066"),h=n("c65b"),d=n("fea9"),f=n("6eeb"),p=n("e2cc"),m=n("d2bb"),g=n("d44e"),v=n("2626"),y=n("59ed"),b=n("1626"),w=n("861d"),_=n("19aa"),O=n("8925"),I=n("2266"),S=n("1c7e"),k=n("4840"),T=n("2cf4").set,E=n("b575"),x=n("cdf9"),C=n("44de"),A=n("f069"),j=n("e667"),R=n("01b4"),L=n("69f3"),N=n("94ca"),D=n("b622"),P=n("6069"),M=n("605d"),$=n("2d00"),F=D("species"),B="Promise",V=L.getterFor(B),U=L.set,q=L.getterFor(B),z=d&&d.prototype,H=d,W=z,G=u.TypeError,K=u.document,Y=u.process,X=A.f,Q=X,J=!!(K&&K.createEvent&&u.dispatchEvent),Z=b(u.PromiseRejectionEvent),tt="unhandledrejection",et="rejectionhandled",nt=0,it=1,rt=2,st=1,ot=2,at=!1,ct=N(B,(function(){var t=O(H),e=t!==String(H);if(!e&&66===$)return!0;if(c&&!W["finally"])return!0;if($>=51&&/native code/.test(t))return!1;var n=new H((function(t){t(1)})),i=function(t){t((function(){}),(function(){}))},r=n.constructor={};return r[F]=i,at=n.then((function(){}))instanceof i,!at||!e&&P&&!Z})),ut=ct||!S((function(t){H.all(t)["catch"]((function(){}))})),lt=function(t){var e;return!(!w(t)||!b(e=t.then))&&e},ht=function(t,e){var n,i,r,s=e.value,o=e.state==it,a=o?t.ok:t.fail,c=t.resolve,u=t.reject,l=t.domain;try{a?(o||(e.rejection===ot&&gt(e),e.rejection=st),!0===a?n=s:(l&&l.enter(),n=a(s),l&&(l.exit(),r=!0)),n===t.promise?u(G("Promise-chain cycle")):(i=lt(n))?h(i,n,c,u):c(n)):u(s)}catch(d){l&&!r&&l.exit(),u(d)}},dt=function(t,e){t.notified||(t.notified=!0,E((function(){var n,i=t.reactions;while(n=i.get())ht(n,t);t.notified=!1,e&&!t.rejection&&pt(t)})))},ft=function(t,e,n){var i,r;J?(i=K.createEvent("Event"),i.promise=e,i.reason=n,i.initEvent(t,!1,!0),u.dispatchEvent(i)):i={promise:e,reason:n},!Z&&(r=u["on"+t])?r(i):t===tt&&C("Unhandled promise rejection",n)},pt=function(t){h(T,u,(function(){var e,n=t.facade,i=t.value,r=mt(t);if(r&&(e=j((function(){M?Y.emit("unhandledRejection",i,n):ft(tt,n,i)})),t.rejection=M||mt(t)?ot:st,e.error))throw e.value}))},mt=function(t){return t.rejection!==st&&!t.parent},gt=function(t){h(T,u,(function(){var e=t.facade;M?Y.emit("rejectionHandled",e):ft(et,e,t.value)}))},vt=function(t,e,n){return function(i){t(e,i,n)}},yt=function(t,e,n){t.done||(t.done=!0,n&&(t=n),t.value=e,t.state=rt,dt(t,!0))},bt=function(t,e,n){if(!t.done){t.done=!0,n&&(t=n);try{if(t.facade===e)throw G("Promise can't be resolved itself");var i=lt(e);i?E((function(){var n={done:!1};try{h(i,e,vt(bt,n,t),vt(yt,n,t))}catch(r){yt(n,r,t)}})):(t.value=e,t.state=it,dt(t,!1))}catch(r){yt({done:!1},r,t)}}};if(ct&&(H=function(t){_(this,W),y(t),h(i,this);var e=V(this);try{t(vt(bt,e),vt(yt,e))}catch(n){yt(e,n)}},W=H.prototype,i=function(t){U(this,{type:B,done:!1,notified:!1,parent:!1,reactions:new R,rejection:!1,state:nt,value:void 0})},i.prototype=p(W,{then:function(t,e){var n=q(this),i=X(k(this,H));return n.parent=!0,i.ok=!b(t)||t,i.fail=b(e)&&e,i.domain=M?Y.domain:void 0,n.state==nt?n.reactions.add(i):E((function(){ht(i,n)})),i.promise},catch:function(t){return this.then(void 0,t)}}),r=function(){var t=new i,e=V(t);this.promise=t,this.resolve=vt(bt,e),this.reject=vt(yt,e)},A.f=X=function(t){return t===H||t===s?new r(t):Q(t)},!c&&b(d)&&z!==Object.prototype)){o=z.then,at||(f(z,"then",(function(t,e){var n=this;return new H((function(t,e){h(o,n,t,e)})).then(t,e)}),{unsafe:!0}),f(z,"catch",W["catch"],{unsafe:!0}));try{delete z.constructor}catch(wt){}m&&m(z,W)}a({global:!0,wrap:!0,forced:ct},{Promise:H}),g(H,B,!1,!0),v(B),s=l(B),a({target:B,stat:!0,forced:ct},{reject:function(t){var e=X(this);return h(e.reject,void 0,t),e.promise}}),a({target:B,stat:!0,forced:c||ct},{resolve:function(t){return x(c&&this===s?H:this,t)}}),a({target:B,stat:!0,forced:ut},{all:function(t){var e=this,n=X(e),i=n.resolve,r=n.reject,s=j((function(){var n=y(e.resolve),s=[],o=0,a=1;I(t,(function(t){var c=o++,u=!1;a++,h(n,e,t).then((function(t){u||(u=!0,s[c]=t,--a||i(s))}),r)})),--a||i(s)}));return s.error&&r(s.value),n.promise},race:function(t){var e=this,n=X(e),i=n.reject,r=j((function(){var r=y(e.resolve);I(t,(function(t){h(r,e,t).then(n.resolve,i)}))}));return r.error&&i(r.value),n.promise}})},e707:function(t,e,n){"use strict";n("a9e3"),n("caad"),n("2532");var i=n("5530"),r=(n("3c93"),n("a9ad")),s=n("7560"),o=n("f2e7"),a=n("58df"),c=Object(a["a"])(r["a"],s["a"],o["a"]).extend({name:"v-overlay",props:{absolute:Boolean,color:{type:String,default:"#212121"},dark:{type:Boolean,default:!0},opacity:{type:[Number,String],default:.46},value:{default:!0},zIndex:{type:[Number,String],default:5}},computed:{__scrim:function(){var t=this.setBackgroundColor(this.color,{staticClass:"v-overlay__scrim",style:{opacity:this.computedOpacity}});return this.$createElement("div",t)},classes:function(){return Object(i["a"])({"v-overlay--absolute":this.absolute,"v-overlay--active":this.isActive},this.themeClasses)},computedOpacity:function(){return Number(this.isActive?this.opacity:0)},styles:function(){return{zIndex:this.zIndex}}},methods:{genContent:function(){return this.$createElement("div",{staticClass:"v-overlay__content"},this.$slots.default)}},render:function(t){var e=[this.__scrim];return this.isActive&&e.push(this.genContent()),t("div",{staticClass:"v-overlay",on:this.$listeners,class:this.classes,style:this.styles},e)}}),u=c,l=n("80d2"),h=n("2b0e");e["a"]=h["a"].extend().extend({name:"overlayable",props:{hideOverlay:Boolean,overlayColor:String,overlayOpacity:[Number,String]},data:function(){return{animationFrame:0,overlay:null}},watch:{hideOverlay:function(t){this.isActive&&(t?this.removeOverlay():this.genOverlay())}},beforeDestroy:function(){this.removeOverlay()},methods:{createOverlay:function(){var t=new u({propsData:{absolute:this.absolute,value:!1,color:this.overlayColor,opacity:this.overlayOpacity}});t.$mount();var e=this.absolute?this.$el.parentNode:document.querySelector("[data-app]");e&&e.insertBefore(t.$el,e.firstChild),this.overlay=t},genOverlay:function(){var t=this;if(this.hideScroll(),!this.hideOverlay)return this.overlay||this.createOverlay(),this.animationFrame=requestAnimationFrame((function(){t.overlay&&(void 0!==t.activeZIndex?t.overlay.zIndex=String(t.activeZIndex-1):t.$el&&(t.overlay.zIndex=Object(l["u"])(t.$el)),t.overlay.value=!0)})),!0},removeOverlay:function(){var t=this,e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];this.overlay&&(Object(l["a"])(this.overlay.$el,"transitionend",(function(){t.overlay&&t.overlay.$el&&t.overlay.$el.parentNode&&!t.overlay.value&&!t.isActive&&(t.overlay.$el.parentNode.removeChild(t.overlay.$el),t.overlay.$destroy(),t.overlay=null)})),cancelAnimationFrame(this.animationFrame),this.overlay.value=!1),e&&this.showScroll()},scrollListener:function(t){if("keydown"===t.type){if(["INPUT","TEXTAREA","SELECT"].includes(t.target.tagName)||t.target.isContentEditable)return;var e=[l["x"].up,l["x"].pageup],n=[l["x"].down,l["x"].pagedown];if(e.includes(t.keyCode))t.deltaY=-1;else{if(!n.includes(t.keyCode))return;t.deltaY=1}}(t.target===this.overlay||"keydown"!==t.type&&t.target===document.body||this.checkPath(t))&&t.preventDefault()},hasScrollbar:function(t){if(!t||t.nodeType!==Node.ELEMENT_NODE)return!1;var e=window.getComputedStyle(t);return(["auto","scroll"].includes(e.overflowY)||"SELECT"===t.tagName)&&t.scrollHeight>t.clientHeight||["auto","scroll"].includes(e.overflowX)&&t.scrollWidth>t.clientWidth},shouldScroll:function(t,e){if(t.hasAttribute("data-app"))return!1;var n,i,r=e.shiftKey||e.deltaX?"x":"y",s="y"===r?e.deltaY:e.deltaX||e.deltaY;"y"===r?(n=0===t.scrollTop,i=t.scrollTop+t.clientHeight===t.scrollHeight):(n=0===t.scrollLeft,i=t.scrollLeft+t.clientWidth===t.scrollWidth);var o=s<0,a=s>0;return!(n||!o)||(!(i||!a)||!(!n&&!i)&&this.shouldScroll(t.parentNode,e))},isInside:function(t,e){return t===e||null!==t&&t!==document.body&&this.isInside(t.parentNode,e)},checkPath:function(t){var e=Object(l["g"])(t);if("keydown"===t.type&&e[0]===document.body){var n=this.$refs.dialog,i=window.getSelection().anchorNode;return!(n&&this.hasScrollbar(n)&&this.isInside(i,n))||!this.shouldScroll(n,t)}for(var r=0;r<e.length;r++){var s=e[r];if(s===document)return!0;if(s===document.documentElement)return!0;if(s===this.$refs.content)return!0;if(this.hasScrollbar(s))return!this.shouldScroll(s,t)}return!0},hideScroll:function(){this.$vuetify.breakpoint.smAndDown?document.documentElement.classList.add("overflow-y-hidden"):(Object(l["b"])(window,"wheel",this.scrollListener,{passive:!1}),window.addEventListener("keydown",this.scrollListener))},showScroll:function(){document.documentElement.classList.remove("overflow-y-hidden"),window.removeEventListener("wheel",this.scrollListener),window.removeEventListener("keydown",this.scrollListener)}}})},e893:function(t,e,n){var i=n("1a2d"),r=n("56ef"),s=n("06cf"),o=n("9bf2");t.exports=function(t,e,n){for(var a=r(e),c=o.f,u=s.f,l=0;l<a.length;l++){var h=a[l];i(t,h)||n&&i(n,h)||c(t,h,u(e,h))}}},e8b5:function(t,e,n){var i=n("c6b6");t.exports=Array.isArray||function(t){return"Array"==i(t)}},e95a:function(t,e,n){var i=n("b622"),r=n("3f8c"),s=i("iterator"),o=Array.prototype;t.exports=function(t){return void 0!==t&&(r.Array===t||o[s]===t)}},e9b1:function(t,e,n){},e9c4:function(t,e,n){var i=n("23e7"),r=n("da84"),s=n("d066"),o=n("2ba4"),a=n("e330"),c=n("d039"),u=r.Array,l=s("JSON","stringify"),h=a(/./.exec),d=a("".charAt),f=a("".charCodeAt),p=a("".replace),m=a(1..toString),g=/[\uD800-\uDFFF]/g,v=/^[\uD800-\uDBFF]$/,y=/^[\uDC00-\uDFFF]$/,b=function(t,e,n){var i=d(n,e-1),r=d(n,e+1);return h(v,t)&&!h(y,r)||h(y,t)&&!h(v,i)?"\\u"+m(f(t,0),16):t},w=c((function(){return'"\\udf06\\ud834"'!==l("\udf06\ud834")||'"\\udead"'!==l("\udead")}));l&&i({target:"JSON",stat:!0,forced:w},{stringify:function(t,e,n){for(var i=0,r=arguments.length,s=u(r);i<r;i++)s[i]=arguments[i];var a=o(l,null,s);return"string"==typeof a?p(a,g,b):a}})},ee6f:function(t,e,n){},f069:function(t,e,n){"use strict";var i=n("59ed"),r=function(t){var e,n;this.promise=new t((function(t,i){if(void 0!==e||void 0!==n)throw TypeError("Bad Promise constructor");e=t,n=i})),this.resolve=i(e),this.reject=i(n)};t.exports.f=function(t){return new r(t)}},f183:function(t,e,n){var i=n("23e7"),r=n("e330"),s=n("d012"),o=n("861d"),a=n("1a2d"),c=n("9bf2").f,u=n("241c"),l=n("057f"),h=n("4fad"),d=n("90e3"),f=n("bb2f"),p=!1,m=d("meta"),g=0,v=function(t){c(t,m,{value:{objectID:"O"+g++,weakData:{}}})},y=function(t,e){if(!o(t))return"symbol"==typeof t?t:("string"==typeof t?"S":"P")+t;if(!a(t,m)){if(!h(t))return"F";if(!e)return"E";v(t)}return t[m].objectID},b=function(t,e){if(!a(t,m)){if(!h(t))return!0;if(!e)return!1;v(t)}return t[m].weakData},w=function(t){return f&&p&&h(t)&&!a(t,m)&&v(t),t},_=function(){O.enable=function(){},p=!0;var t=u.f,e=r([].splice),n={};n[m]=1,t(n).length&&(u.f=function(n){for(var i=t(n),r=0,s=i.length;r<s;r++)if(i[r]===m){e(i,r,1);break}return i},i({target:"Object",stat:!0,forced:!0},{getOwnPropertyNames:l.f}))},O=t.exports={enable:_,fastKey:y,getWeakData:b,onFreeze:w};s[m]=!0},f2e7:function(t,e,n){"use strict";n.d(e,"b",(function(){return s}));var i=n("ade3"),r=n("2b0e");function s(){var t,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"value",n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"input";return r["a"].extend({name:"toggleable",model:{prop:e,event:n},props:Object(i["a"])({},e,{required:!1}),data:function(){return{isActive:!!this[e]}},watch:(t={},Object(i["a"])(t,e,(function(t){this.isActive=!!t})),Object(i["a"])(t,"isActive",(function(t){!!t!==this[e]&&this.$emit(n,t)})),t)})}var o=s();e["a"]=o},f309:function(t,e,n){"use strict";n.d(e,"a",(function(){return ot}));var i=n("d4ec"),r=n("bee2"),s=(n("d3b7"),n("159b"),n("caad"),n("2532"),n("2b0e")),o=n("d9bd");function a(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(!a.installed){a.installed=!0,s["a"]!==t&&Object(o["b"])("Multiple instances of Vue detected\nSee https://github.com/vuetifyjs/vuetify/issues/4068\n\nIf you're seeing \"$attrs is readonly\", it's caused by this");var n=e.components||{},i=e.directives||{};for(var r in i){var c=i[r];t.directive(r,c)}(function e(n){if(n){for(var i in n){var r=n[i];r&&!e(r.$_vuetify_subcomponents)&&t.component(i,r)}return!0}return!1})(n),t.$_vuetify_installed||(t.$_vuetify_installed=!0,t.mixin({beforeCreate:function(){var e=this.$options;e.vuetify?(e.vuetify.init(this,this.$ssrContext),this.$vuetify=t.observable(e.vuetify.framework)):this.$vuetify=e.parent&&e.parent.$vuetify||this},beforeMount:function(){this.$options.vuetify&&this.$el&&this.$el.hasAttribute("data-server-rendered")&&(this.$vuetify.isHydrating=!0,this.$vuetify.breakpoint.update(!0))},mounted:function(){this.$options.vuetify&&this.$vuetify.isHydrating&&(this.$vuetify.isHydrating=!1,this.$vuetify.breakpoint.update())}}))}}var c=n("15fd"),u=n("262e"),l=n("2caf"),h=(n("95ed"),{badge:"Badge",close:"Close",dataIterator:{noResultsText:"No matching records found",loadingText:"Loading items..."},dataTable:{itemsPerPageText:"Rows per page:",ariaLabel:{sortDescending:"Sorted descending.",sortAscending:"Sorted ascending.",sortNone:"Not sorted.",activateNone:"Activate to remove sorting.",activateDescending:"Activate to sort descending.",activateAscending:"Activate to sort ascending."},sortBy:"Sort by"},dataFooter:{itemsPerPageText:"Items per page:",itemsPerPageAll:"All",nextPage:"Next page",prevPage:"Previous page",firstPage:"First page",lastPage:"Last page",pageText:"{0}-{1} of {2}"},datePicker:{itemsSelected:"{0} selected",nextMonthAriaLabel:"Next month",nextYearAriaLabel:"Next year",prevMonthAriaLabel:"Previous month",prevYearAriaLabel:"Previous year"},noDataText:"No data available",carousel:{prev:"Previous visual",next:"Next visual",ariaLabel:{delimiter:"Carousel slide {0} of {1}"}},calendar:{moreEvents:"{0} more"},fileInput:{counter:"{0} files",counterSize:"{0} files ({1} in total)"},timePicker:{am:"AM",pm:"PM"},pagination:{ariaLabel:{wrapper:"Pagination Navigation",next:"Next page",previous:"Previous page",page:"Goto Page {0}",currentPage:"Current Page, Page {0}"}},rating:{ariaLabel:{icon:"Rating {0} of {1}"}}}),d={breakpoint:{mobileBreakpoint:1264,scrollBarWidth:16,thresholds:{xs:600,sm:960,md:1280,lg:1920}},icons:{iconfont:"mdi",values:{}},lang:{current:"en",locales:{en:h},t:void 0},rtl:!1,theme:{dark:!1,default:"light",disable:!1,options:{cspNonce:void 0,customProperties:void 0,minifyTheme:void 0,themeCache:void 0,variations:!0},themes:{light:{primary:"#1976D2",secondary:"#424242",accent:"#82B1FF",error:"#FF5252",info:"#2196F3",success:"#4CAF50",warning:"#FB8C00"},dark:{primary:"#2196F3",secondary:"#424242",accent:"#FF4081",error:"#FF5252",info:"#2196F3",success:"#4CAF50",warning:"#FB8C00"}}}},f=n("80d2"),p=n("fff9"),m=["preset"],g=function(t){Object(u["a"])(n,t);var e=Object(l["a"])(n);function n(t,r){var s;Object(i["a"])(this,n),s=e.call(this);var a=Object(f["z"])({},d),u=r.userPreset,l=u.preset,h=void 0===l?{}:l,p=Object(c["a"])(u,m);return null!=h.preset&&Object(o["c"])("Global presets do not support the **preset** option, it can be safely omitted"),r.preset=Object(f["z"])(Object(f["z"])(a,h),p),s}return Object(r["a"])(n)}(p["a"]);g.property="presets";n("07ac");var v=function(t){Object(u["a"])(n,t);var e=Object(l["a"])(n);function n(){var t;return Object(i["a"])(this,n),t=e.apply(this,arguments),t.bar=0,t.top=0,t.left=0,t.insetFooter=0,t.right=0,t.bottom=0,t.footer=0,t.application={bar:{},top:{},left:{},insetFooter:{},right:{},bottom:{},footer:{}},t}return Object(r["a"])(n,[{key:"register",value:function(t,e,n){this.application[e][t]=n,this.update(e)}},{key:"unregister",value:function(t,e){null!=this.application[e][t]&&(delete this.application[e][t],this.update(e))}},{key:"update",value:function(t){this[t]=Object.values(this.application[t]).reduce((function(t,e){return t+e}),0)}}]),n}(p["a"]);v.property="application";n("b0c0");var y=function(t){Object(u["a"])(n,t);var e=Object(l["a"])(n);function n(t){var r;Object(i["a"])(this,n),r=e.call(this),r.xs=!1,r.sm=!1,r.md=!1,r.lg=!1,r.xl=!1,r.xsOnly=!1,r.smOnly=!1,r.smAndDown=!1,r.smAndUp=!1,r.mdOnly=!1,r.mdAndDown=!1,r.mdAndUp=!1,r.lgOnly=!1,r.lgAndDown=!1,r.lgAndUp=!1,r.xlOnly=!1,r.name="xs",r.height=0,r.width=0,r.mobile=!0,r.resizeTimeout=0;var s=t[n.property],o=s.mobileBreakpoint,a=s.scrollBarWidth,c=s.thresholds;return r.mobileBreakpoint=o,r.scrollBarWidth=a,r.thresholds=c,r}return Object(r["a"])(n,[{key:"init",value:function(){this.update(),"undefined"!==typeof window&&window.addEventListener("resize",this.onResize.bind(this),{passive:!0})}},{key:"update",value:function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0],e=t?0:this.getClientHeight(),n=t?0:this.getClientWidth(),i=n<this.thresholds.xs,r=n<this.thresholds.sm&&!i,s=n<this.thresholds.md-this.scrollBarWidth&&!(r||i),o=n<this.thresholds.lg-this.scrollBarWidth&&!(s||r||i),a=n>=this.thresholds.lg-this.scrollBarWidth;switch(this.height=e,this.width=n,this.xs=i,this.sm=r,this.md=s,this.lg=o,this.xl=a,this.xsOnly=i,this.smOnly=r,this.smAndDown=(i||r)&&!(s||o||a),this.smAndUp=!i&&(r||s||o||a),this.mdOnly=s,this.mdAndDown=(i||r||s)&&!(o||a),this.mdAndUp=!(i||r)&&(s||o||a),this.lgOnly=o,this.lgAndDown=(i||r||s||o)&&!a,this.lgAndUp=!(i||r||s)&&(o||a),this.xlOnly=a,!0){case i:this.name="xs";break;case r:this.name="sm";break;case s:this.name="md";break;case o:this.name="lg";break;default:this.name="xl";break}if("number"!==typeof this.mobileBreakpoint){var c={xs:0,sm:1,md:2,lg:3,xl:4},u=c[this.name],l=c[this.mobileBreakpoint];this.mobile=u<=l}else this.mobile=n<parseInt(this.mobileBreakpoint,10)}},{key:"onResize",value:function(){clearTimeout(this.resizeTimeout),this.resizeTimeout=window.setTimeout(this.update.bind(this),200)}},{key:"getClientWidth",value:function(){return"undefined"===typeof document?0:Math.max(document.documentElement.clientWidth,window.innerWidth||0)}},{key:"getClientHeight",value:function(){return"undefined"===typeof document?0:Math.max(document.documentElement.clientHeight,window.innerHeight||0)}}]),n}(p["a"]);y.property="breakpoint";var b=n("7d8f"),w=(n("ddb0"),n("dca8"),{complete:"M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z",cancel:"M12,2C17.53,2 22,6.47 22,12C22,17.53 17.53,22 12,22C6.47,22 2,17.53 2,12C2,6.47 6.47,2 12,2M15.59,7L12,10.59L8.41,7L7,8.41L10.59,12L7,15.59L8.41,17L12,13.41L15.59,17L17,15.59L13.41,12L17,8.41L15.59,7Z",close:"M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z",delete:"M12,2C17.53,2 22,6.47 22,12C22,17.53 17.53,22 12,22C6.47,22 2,17.53 2,12C2,6.47 6.47,2 12,2M15.59,7L12,10.59L8.41,7L7,8.41L10.59,12L7,15.59L8.41,17L12,13.41L15.59,17L17,15.59L13.41,12L17,8.41L15.59,7Z",clear:"M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z",success:"M12,2C17.52,2 22,6.48 22,12C22,17.52 17.52,22 12,22C6.48,22 2,17.52 2,12C2,6.48 6.48,2 12,2M11,16.5L18,9.5L16.59,8.09L11,13.67L7.91,10.59L6.5,12L11,16.5Z",info:"M13,9H11V7H13M13,17H11V11H13M12,2C6.48,2 2,6.48 2,12C2,17.52 6.48,22 12,22C17.52,22 22,17.52 22,12C22,6.48 17.52,2 12,2Z",warning:"M11,4.5H13V15.5H11V4.5M13,17.5V19.5H11V17.5H13Z",error:"M13,14H11V10H13M13,18H11V16H13M1,21H23L12,2L1,21Z",prev:"M15.41,16.58L10.83,12L15.41,7.41L14,6L8,12L14,18L15.41,16.58Z",next:"M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z",checkboxOn:"M10,17L5,12L6.41,10.58L10,14.17L17.59,6.58L19,8M19,3H5C3.89,3 3,3.89 3,5V19C3,20.1 3.9,21 5,21H19C20.1,21 21,20.1 21,19V5C21,3.89 20.1,3 19,3Z",checkboxOff:"M19,3H5C3.89,3 3,3.89 3,5V19C3,20.1 3.9,21 5,21H19C20.1,21 21,20.1 21,19V5C21,3.89 20.1,3 19,3M19,5V19H5V5H19Z",checkboxIndeterminate:"M17,13H7V11H17M19,3H5C3.89,3 3,3.89 3,5V19C3,20.1 3.9,21 5,21H19C20.1,21 21,20.1 21,19V5C21,3.89 20.1,3 19,3Z",delimiter:"M12,2C6.48,2 2,6.48 2,12C2,17.52 6.48,22 12,22C17.52,22 22,17.52 22,12C22,6.48 17.52,2 12,2Z",sort:"M13,20H11V8L5.5,13.5L4.08,12.08L12,4.16L19.92,12.08L18.5,13.5L13,8V20Z",expand:"M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z",menu:"M3,6H21V8H3V6M3,11H21V13H3V11M3,16H21V18H3V16Z",subgroup:"M7,10L12,15L17,10H7Z",dropdown:"M7,10L12,15L17,10H7Z",radioOn:"M12,20C7.58,20 4,16.42 4,12C4,7.58 7.58,4 12,4C16.42,4 20,7.58 20,12C20,16.42 16.42,20 12,20M12,2C6.48,2 2,6.48 2,12C2,17.52 6.48,22 12,22C17.52,22 22,17.52 22,12C22,6.48 17.52,2 12,2M12,7C9.24,7 7,9.24 7,12C7,14.76 9.24,17 12,17C14.76,17 17,14.76 17,12C17,9.24 14.76,7 12,7Z",radioOff:"M12,20C7.58,20 4,16.42 4,12C4,7.58 7.58,4 12,4C16.42,4 20,7.58 20,12C20,16.42 16.42,20 12,20M12,2C6.48,2 2,6.48 2,12C2,17.52 6.48,22 12,22C17.52,22 22,17.52 22,12C22,6.48 17.52,2 12,2Z",edit:"M20.71,7.04C21.1,6.65 21.1,6 20.71,5.63L18.37,3.29C18,2.9 17.35,2.9 16.96,3.29L15.12,5.12L18.87,8.87M3,17.25V21H6.75L17.81,9.93L14.06,6.18L3,17.25Z",ratingEmpty:"M12,15.39L8.24,17.66L9.23,13.38L5.91,10.5L10.29,10.13L12,6.09L13.71,10.13L18.09,10.5L14.77,13.38L15.76,17.66M22,9.24L14.81,8.63L12,2L9.19,8.63L2,9.24L7.45,13.97L5.82,21L12,17.27L18.18,21L16.54,13.97L22,9.24Z",ratingFull:"M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z",ratingHalf:"M12,15.4V6.1L13.71,10.13L18.09,10.5L14.77,13.39L15.76,17.67M22,9.24L14.81,8.63L12,2L9.19,8.63L2,9.24L7.45,13.97L5.82,21L12,17.27L18.18,21L16.54,13.97L22,9.24Z",loading:"M19,8L15,12H18C18,15.31 15.31,18 12,18C11,18 10.03,17.75 9.2,17.3L7.74,18.76C8.97,19.54 10.43,20 12,20C16.42,20 20,16.42 20,12H23M6,12C6,8.69 8.69,6 12,6C13,6 13.97,6.25 14.8,6.7L16.26,5.24C15.03,4.46 13.57,4 12,4C7.58,4 4,7.58 4,12H1L5,16L9,12",first:"M18.41,16.59L13.82,12L18.41,7.41L17,6L11,12L17,18L18.41,16.59M6,6H8V18H6V6Z",last:"M5.59,7.41L10.18,12L5.59,16.59L7,18L13,12L7,6L5.59,7.41M16,6H18V18H16V6Z",unfold:"M12,18.17L8.83,15L7.42,16.41L12,21L16.59,16.41L15.17,15M12,5.83L15.17,9L16.58,7.59L12,3L7.41,7.59L8.83,9L12,5.83Z",file:"M16.5,6V17.5C16.5,19.71 14.71,21.5 12.5,21.5C10.29,21.5 8.5,19.71 8.5,17.5V5C8.5,3.62 9.62,2.5 11,2.5C12.38,2.5 13.5,3.62 13.5,5V15.5C13.5,16.05 13.05,16.5 12.5,16.5C11.95,16.5 11.5,16.05 11.5,15.5V6H10V15.5C10,16.88 11.12,18 12.5,18C13.88,18 15,16.88 15,15.5V5C15,2.79 13.21,1 11,1C8.79,1 7,2.79 7,5V17.5C7,20.54 9.46,23 12.5,23C15.54,23 18,20.54 18,17.5V6H16.5Z",plus:"M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z",minus:"M19,13H5V11H19V13Z"}),_=w,O={complete:"check",cancel:"cancel",close:"close",delete:"cancel",clear:"clear",success:"check_circle",info:"info",warning:"priority_high",error:"warning",prev:"chevron_left",next:"chevron_right",checkboxOn:"check_box",checkboxOff:"check_box_outline_blank",checkboxIndeterminate:"indeterminate_check_box",delimiter:"fiber_manual_record",sort:"arrow_upward",expand:"keyboard_arrow_down",menu:"menu",subgroup:"arrow_drop_down",dropdown:"arrow_drop_down",radioOn:"radio_button_checked",radioOff:"radio_button_unchecked",edit:"edit",ratingEmpty:"star_border",ratingFull:"star",ratingHalf:"star_half",loading:"cached",first:"first_page",last:"last_page",unfold:"unfold_more",file:"attach_file",plus:"add",minus:"remove"},I=O,S={complete:"mdi-check",cancel:"mdi-close-circle",close:"mdi-close",delete:"mdi-close-circle",clear:"mdi-close",success:"mdi-check-circle",info:"mdi-information",warning:"mdi-exclamation",error:"mdi-alert",prev:"mdi-chevron-left",next:"mdi-chevron-right",checkboxOn:"mdi-checkbox-marked",checkboxOff:"mdi-checkbox-blank-outline",checkboxIndeterminate:"mdi-minus-box",delimiter:"mdi-circle",sort:"mdi-arrow-up",expand:"mdi-chevron-down",menu:"mdi-menu",subgroup:"mdi-menu-down",dropdown:"mdi-menu-down",radioOn:"mdi-radiobox-marked",radioOff:"mdi-radiobox-blank",edit:"mdi-pencil",ratingEmpty:"mdi-star-outline",ratingFull:"mdi-star",ratingHalf:"mdi-star-half-full",loading:"mdi-cached",first:"mdi-page-first",last:"mdi-page-last",unfold:"mdi-unfold-more-horizontal",file:"mdi-paperclip",plus:"mdi-plus",minus:"mdi-minus"},k=S,T={complete:"fas fa-check",cancel:"fas fa-times-circle",close:"fas fa-times",delete:"fas fa-times-circle",clear:"fas fa-times-circle",success:"fas fa-check-circle",info:"fas fa-info-circle",warning:"fas fa-exclamation",error:"fas fa-exclamation-triangle",prev:"fas fa-chevron-left",next:"fas fa-chevron-right",checkboxOn:"fas fa-check-square",checkboxOff:"far fa-square",checkboxIndeterminate:"fas fa-minus-square",delimiter:"fas fa-circle",sort:"fas fa-sort-up",expand:"fas fa-chevron-down",menu:"fas fa-bars",subgroup:"fas fa-caret-down",dropdown:"fas fa-caret-down",radioOn:"far fa-dot-circle",radioOff:"far fa-circle",edit:"fas fa-edit",ratingEmpty:"far fa-star",ratingFull:"fas fa-star",ratingHalf:"fas fa-star-half",loading:"fas fa-sync",first:"fas fa-step-backward",last:"fas fa-step-forward",unfold:"fas fa-arrows-alt-v",file:"fas fa-paperclip",plus:"fas fa-plus",minus:"fas fa-minus"},E=T,x={complete:"fa fa-check",cancel:"fa fa-times-circle",close:"fa fa-times",delete:"fa fa-times-circle",clear:"fa fa-times-circle",success:"fa fa-check-circle",info:"fa fa-info-circle",warning:"fa fa-exclamation",error:"fa fa-exclamation-triangle",prev:"fa fa-chevron-left",next:"fa fa-chevron-right",checkboxOn:"fa fa-check-square",checkboxOff:"fa fa-square-o",checkboxIndeterminate:"fa fa-minus-square",delimiter:"fa fa-circle",sort:"fa fa-sort-up",expand:"fa fa-chevron-down",menu:"fa fa-bars",subgroup:"fa fa-caret-down",dropdown:"fa fa-caret-down",radioOn:"fa fa-dot-circle-o",radioOff:"fa fa-circle-o",edit:"fa fa-pencil",ratingEmpty:"fa fa-star-o",ratingFull:"fa fa-star",ratingHalf:"fa fa-star-half-o",loading:"fa fa-refresh",first:"fa fa-step-backward",last:"fa fa-step-forward",unfold:"fa fa-angle-double-down",file:"fa fa-paperclip",plus:"fa fa-plus",minus:"fa fa-minus"},C=x;n("ac1f"),n("1276");function A(t,e){var n={};for(var i in e)n[i]={component:t,props:{icon:e[i].split(" fa-")}};return n}var j=A("font-awesome-icon",E),R=Object.freeze({mdiSvg:_,md:I,mdi:k,fa:E,fa4:C,faSvg:j}),L=function(t){Object(u["a"])(n,t);var e=Object(l["a"])(n);function n(t){var r;Object(i["a"])(this,n),r=e.call(this);var s=t[n.property],o=s.iconfont,a=s.values,c=s.component;return r.component=c,r.iconfont=o,r.values=Object(f["z"])(R[o],a),r}return Object(r["a"])(n)}(p["a"]);L.property="icons";n("a4d3"),n("e01a"),n("5319"),n("2ca0"),n("99af");var N="$vuetify.",D=Symbol("Lang fallback");function P(t,e){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],i=arguments.length>3?arguments[3]:void 0,r=e.replace(N,""),s=Object(f["p"])(t,r,D);return s===D&&(n?(Object(o["b"])('Translation key "'.concat(r,'" not found in fallback')),s=e):(Object(o["c"])('Translation key "'.concat(r,'" not found, falling back to default')),s=P(i,e,!0,i))),s}var M=function(t){Object(u["a"])(n,t);var e=Object(l["a"])(n);function n(t){var r;Object(i["a"])(this,n),r=e.call(this),r.defaultLocale="en";var s=t[n.property],o=s.current,a=s.locales,c=s.t;return r.current=o,r.locales=a,r.translator=c||r.defaultTranslator,r}return Object(r["a"])(n,[{key:"currentLocale",value:function(t){var e=this.locales[this.current],n=this.locales[this.defaultLocale];return P(e,t,!1,n)}},{key:"t",value:function(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),i=1;i<e;i++)n[i-1]=arguments[i];return t.startsWith(N)?this.translator.apply(this,[t].concat(n)):this.replace(t,n)}},{key:"defaultTranslator",value:function(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),i=1;i<e;i++)n[i-1]=arguments[i];return this.replace(this.currentLocale(t),n)}},{key:"replace",value:function(t,e){return t.replace(/\{(\d+)\}/g,(function(t,n){return String(e[+n])}))}}]),n}(p["a"]);M.property="lang";var $=n("99de"),F=(n("7db0"),n("3835")),B=n("53ca"),V=(n("18a5"),n("b64b"),n("7bc6")),U=n("8da5"),q=(n("3ea3"),.20689655172413793),z=function(t){return t>Math.pow(q,3)?Math.cbrt(t):t/(3*Math.pow(q,2))+4/29},H=function(t){return t>q?Math.pow(t,3):3*Math.pow(q,2)*(t-4/29)};function W(t){var e=z,n=e(t[1]);return[116*n-16,500*(e(t[0]/.95047)-n),200*(n-e(t[2]/1.08883))]}function G(t){var e=H,n=(t[0]+16)/116;return[.95047*e(n+t[1]/500),e(n),1.08883*e(n-t[2]/200)]}var K=["anchor"],Y=["anchor"];function X(t){for(var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],i=t.anchor,r=Object(c["a"])(t,K),s=Object.keys(r),o={},a=0;a<s.length;++a){var u=s[a],l=t[u];null!=l&&(n?e?("base"===u||u.startsWith("lighten")||u.startsWith("darken"))&&(o[u]=Object(V["a"])(l)):"object"===Object(B["a"])(l)?o[u]=X(l,!0,n):o[u]=nt(u,Object(V["b"])(l)):o[u]={base:Object(V["c"])(Object(V["b"])(l))})}return e||(o.anchor=i||o.base||o.primary.base),o}var Q=function(t,e){return"\n.v-application .".concat(t," {\n  background-color: ").concat(e," !important;\n  border-color: ").concat(e," !important;\n}\n.v-application .").concat(t,"--text {\n  color: ").concat(e," !important;\n  caret-color: ").concat(e," !important;\n}")},J=function(t,e,n){var i=e.split(/(\d)/,2),r=Object(F["a"])(i,2),s=r[0],o=r[1];return"\n.v-application .".concat(t,".").concat(s,"-").concat(o," {\n  background-color: ").concat(n," !important;\n  border-color: ").concat(n," !important;\n}\n.v-application .").concat(t,"--text.text--").concat(s,"-").concat(o," {\n  color: ").concat(n," !important;\n  caret-color: ").concat(n," !important;\n}")},Z=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"base";return"--v-".concat(t,"-").concat(e)},tt=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"base";return"var(".concat(Z(t,e),")")};function et(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=t.anchor,i=Object(c["a"])(t,Y),r=Object.keys(i);if(!r.length)return"";var s="",o="",a=e?tt("anchor"):n;o+=".v-application a { color: ".concat(a,"; }"),e&&(s+="  ".concat(Z("anchor"),": ").concat(n,";\n"));for(var u=0;u<r.length;++u){var l=r[u],h=t[l];o+=Q(l,e?tt(l):h.base),e&&(s+="  ".concat(Z(l),": ").concat(h.base,";\n"));for(var d=Object(f["y"])(h),p=0;p<d.length;++p){var m=d[p],g=h[m];"base"!==m&&(o+=J(l,m,e?tt(l,m):g),e&&(s+="  ".concat(Z(l,m),": ").concat(g,";\n")))}}return e&&(s=":root {\n".concat(s,"}\n\n")),s+o}function nt(t,e){for(var n={base:Object(V["c"])(e)},i=5;i>0;--i)n["lighten".concat(i)]=Object(V["c"])(it(e,i));for(var r=1;r<=4;++r)n["darken".concat(r)]=Object(V["c"])(rt(e,r));return n}function it(t,e){var n=W(U["b"](t));return n[0]=n[0]+10*e,U["a"](G(n))}function rt(t,e){var n=W(U["b"](t));return n[0]=n[0]-10*e,U["a"](G(n))}var st=function(t){Object(u["a"])(n,t);var e=Object(l["a"])(n);function n(t){var r;Object(i["a"])(this,n),r=e.call(this),r.disabled=!1,r.isDark=null,r.unwatch=null,r.vueMeta=null;var s=t[n.property],o=s.dark,a=s.disable,c=s.options,u=s.themes;return r.dark=Boolean(o),r.defaults=r.themes=u,r.options=c,a?(r.disabled=!0,Object($["a"])(r)):(r.themes={dark:r.fillVariant(u.dark,!0),light:r.fillVariant(u.light,!1)},r)}return Object(r["a"])(n,[{key:"css",set:function(t){this.vueMeta?this.isVueMeta23&&this.applyVueMeta23():this.checkOrCreateStyleElement()&&(this.styleEl.innerHTML=t)}},{key:"dark",get:function(){return Boolean(this.isDark)},set:function(t){var e=this.isDark;this.isDark=t,null!=e&&this.applyTheme()}},{key:"applyTheme",value:function(){if(this.disabled)return this.clearCss();this.css=this.generatedStyles}},{key:"clearCss",value:function(){this.css=""}},{key:"init",value:function(t,e){this.disabled||(t.$meta?this.initVueMeta(t):e&&this.initSSR(e),this.initTheme(t))}},{key:"setTheme",value:function(t,e){this.themes[t]=Object.assign(this.themes[t],e),this.applyTheme()}},{key:"resetThemes",value:function(){this.themes.light=Object.assign({},this.defaults.light),this.themes.dark=Object.assign({},this.defaults.dark),this.applyTheme()}},{key:"checkOrCreateStyleElement",value:function(){return this.styleEl=document.getElementById("vuetify-theme-stylesheet"),!!this.styleEl||(this.genStyleElement(),Boolean(this.styleEl))}},{key:"fillVariant",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=arguments.length>1?arguments[1]:void 0,n=this.themes[e?"dark":"light"];return Object.assign({},n,t)}},{key:"genStyleElement",value:function(){"undefined"!==typeof document&&(this.styleEl=document.createElement("style"),this.styleEl.type="text/css",this.styleEl.id="vuetify-theme-stylesheet",this.options.cspNonce&&this.styleEl.setAttribute("nonce",this.options.cspNonce),document.head.appendChild(this.styleEl))}},{key:"initVueMeta",value:function(t){var e=this;if(this.vueMeta=t.$meta(),this.isVueMeta23)t.$nextTick((function(){e.applyVueMeta23()}));else{var n="function"===typeof this.vueMeta.getOptions?this.vueMeta.getOptions().keyName:"metaInfo",i=t.$options[n]||{};t.$options[n]=function(){i.style=i.style||[];var t=i.style.find((function(t){return"vuetify-theme-stylesheet"===t.id}));return t?t.cssText=e.generatedStyles:i.style.push({cssText:e.generatedStyles,type:"text/css",id:"vuetify-theme-stylesheet",nonce:(e.options||{}).cspNonce}),i}}}},{key:"applyVueMeta23",value:function(){var t=this.vueMeta.addApp("vuetify"),e=t.set;e({style:[{cssText:this.generatedStyles,type:"text/css",id:"vuetify-theme-stylesheet",nonce:this.options.cspNonce}]})}},{key:"initSSR",value:function(t){var e=this.options.cspNonce?' nonce="'.concat(this.options.cspNonce,'"'):"";t.head=t.head||"",t.head+='<style type="text/css" id="vuetify-theme-stylesheet"'.concat(e,">").concat(this.generatedStyles,"</style>")}},{key:"initTheme",value:function(t){var e=this;"undefined"!==typeof document&&(this.unwatch&&(this.unwatch(),this.unwatch=null),t.$once("hook:created",(function(){var n=s["a"].observable({themes:e.themes});e.unwatch=t.$watch((function(){return n.themes}),(function(){return e.applyTheme()}),{deep:!0})})),this.applyTheme())}},{key:"currentTheme",get:function(){var t=this.dark?"dark":"light";return this.themes[t]}},{key:"generatedStyles",get:function(){var t,e=this.parsedTheme,n=this.options||{};return null!=n.themeCache&&(t=n.themeCache.get(e),null!=t)||(t=et(e,n.customProperties),null!=n.minifyTheme&&(t=n.minifyTheme(t)),null!=n.themeCache&&n.themeCache.set(e,t)),t}},{key:"parsedTheme",get:function(){return X(this.currentTheme||{},void 0,Object(f["o"])(this.options,["variations"],!0))}},{key:"isVueMeta23",get:function(){return"function"===typeof this.vueMeta.addApp}}]),n}(p["a"]);st.property="theme";var ot=function(){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};Object(i["a"])(this,t),this.framework={isHydrating:!1},this.installed=[],this.preset={},this.userPreset={},this.userPreset=e,this.use(g),this.use(v),this.use(y),this.use(b["a"]),this.use(L),this.use(M),this.use(st)}return Object(r["a"])(t,[{key:"init",value:function(t,e){var n=this;this.installed.forEach((function(i){var r=n.framework[i];r.framework=n.framework,r.init(t,e)})),this.framework.rtl=Boolean(this.preset.rtl)}},{key:"use",value:function(t){var e=t.property;this.installed.includes(e)||(this.framework[e]=new t(this.preset,this),this.installed.push(e))}}]),t}();ot.install=a,ot.installed=!1,ot.version="2.6.3",ot.config={silent:!1}},f36a:function(t,e,n){var i=n("e330");t.exports=i([].slice)},f5df:function(t,e,n){var i=n("da84"),r=n("00ee"),s=n("1626"),o=n("c6b6"),a=n("b622"),c=a("toStringTag"),u=i.Object,l="Arguments"==o(function(){return arguments}()),h=function(t,e){try{return t[e]}catch(n){}};t.exports=r?o:function(t){var e,n,i;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(n=h(e=u(t),c))?n:l?o(e):"Object"==(i=o(e))&&s(e.callee)?"Arguments":i}},f6c4:function(t,e,n){"use strict";n("bd0c");var i=n("d10f");e["a"]=i["a"].extend({name:"v-main",props:{tag:{type:String,default:"main"}},computed:{styles:function(){var t=this.$vuetify.application,e=t.bar,n=t.top,i=t.right,r=t.footer,s=t.insetFooter,o=t.bottom,a=t.left;return{paddingTop:"".concat(n+e,"px"),paddingRight:"".concat(i,"px"),paddingBottom:"".concat(r+s+o,"px"),paddingLeft:"".concat(a,"px")}}},render:function(t){var e={staticClass:"v-main",style:this.styles,ref:"main"};return t(this.tag,e,[t("div",{staticClass:"v-main__wrap"},this.$slots.default)])}})},f748:function(t,e){t.exports=Math.sign||function(t){return 0==(t=+t)||t!=t?t:t<0?-1:1}},f772:function(t,e,n){var i=n("5692"),r=n("90e3"),s=i("keys");t.exports=function(t){return s[t]||(s[t]=r(t))}},f774:function(t,e,n){"use strict";var i=n("5530"),r=(n("a9e3"),n("c7cd"),n("99af"),n("7958"),n("adda")),s=n("3a66"),o=n("a9ad"),a=n("b848"),c=n("e4cd"),u=n("e707"),l=n("d10f"),h=n("7560"),d=n("a293"),f=n("dc22"),p=(n("d3b7"),n("159b"),n("80d2")),m=function(t){var e=t.touchstartX,n=t.touchendX,i=t.touchstartY,r=t.touchendY,s=.5,o=16;t.offsetX=n-e,t.offsetY=r-i,Math.abs(t.offsetY)<s*Math.abs(t.offsetX)&&(t.left&&n<e-o&&t.left(t),t.right&&n>e+o&&t.right(t)),Math.abs(t.offsetX)<s*Math.abs(t.offsetY)&&(t.up&&r<i-o&&t.up(t),t.down&&r>i+o&&t.down(t))};function g(t,e){var n=t.changedTouches[0];e.touchstartX=n.clientX,e.touchstartY=n.clientY,e.start&&e.start(Object.assign(t,e))}function v(t,e){var n=t.changedTouches[0];e.touchendX=n.clientX,e.touchendY=n.clientY,e.end&&e.end(Object.assign(t,e)),m(e)}function y(t,e){var n=t.changedTouches[0];e.touchmoveX=n.clientX,e.touchmoveY=n.clientY,e.move&&e.move(Object.assign(t,e))}function b(t){var e={touchstartX:0,touchstartY:0,touchendX:0,touchendY:0,touchmoveX:0,touchmoveY:0,offsetX:0,offsetY:0,left:t.left,right:t.right,up:t.up,down:t.down,start:t.start,move:t.move,end:t.end};return{touchstart:function(t){return g(t,e)},touchend:function(t){return v(t,e)},touchmove:function(t){return y(t,e)}}}function w(t,e,n){var i=e.value,r=i.parent?t.parentElement:t,s=i.options||{passive:!0};if(r){var o=b(e.value);r._touchHandlers=Object(r._touchHandlers),r._touchHandlers[n.context._uid]=o,Object(p["y"])(o).forEach((function(t){r.addEventListener(t,o[t],s)}))}}function _(t,e,n){var i=e.value.parent?t.parentElement:t;if(i&&i._touchHandlers){var r=i._touchHandlers[n.context._uid];Object(p["y"])(r).forEach((function(t){i.removeEventListener(t,r[t])})),delete i._touchHandlers[n.context._uid]}}var O={inserted:w,unbind:_},I=O,S=n("58df"),k=Object(S["a"])(Object(s["a"])("left",["isActive","isMobile","miniVariant","expandOnHover","permanent","right","temporary","width"]),o["a"],a["a"],c["a"],u["a"],l["a"],h["a"]);e["a"]=k.extend({name:"v-navigation-drawer",directives:{ClickOutside:d["a"],Resize:f["a"],Touch:I},provide:function(){return{isInNav:"nav"===this.tag}},props:{bottom:Boolean,clipped:Boolean,disableResizeWatcher:Boolean,disableRouteWatcher:Boolean,expandOnHover:Boolean,floating:Boolean,height:{type:[Number,String],default:function(){return this.app?"100vh":"100%"}},miniVariant:Boolean,miniVariantWidth:{type:[Number,String],default:56},permanent:Boolean,right:Boolean,src:{type:[String,Object],default:""},stateless:Boolean,tag:{type:String,default:function(){return this.app?"nav":"aside"}},temporary:Boolean,touchless:Boolean,width:{type:[Number,String],default:256},value:null},data:function(){return{isMouseover:!1,touchArea:{left:0,right:0},stackMinZIndex:6}},computed:{applicationProperty:function(){return this.right?"right":"left"},classes:function(){return Object(i["a"])({"v-navigation-drawer":!0,"v-navigation-drawer--absolute":this.absolute,"v-navigation-drawer--bottom":this.bottom,"v-navigation-drawer--clipped":this.clipped,"v-navigation-drawer--close":!this.isActive,"v-navigation-drawer--fixed":!this.absolute&&(this.app||this.fixed),"v-navigation-drawer--floating":this.floating,"v-navigation-drawer--is-mobile":this.isMobile,"v-navigation-drawer--is-mouseover":this.isMouseover,"v-navigation-drawer--mini-variant":this.isMiniVariant,"v-navigation-drawer--custom-mini-variant":56!==Number(this.miniVariantWidth),"v-navigation-drawer--open":this.isActive,"v-navigation-drawer--open-on-hover":this.expandOnHover,"v-navigation-drawer--right":this.right,"v-navigation-drawer--temporary":this.temporary},this.themeClasses)},computedMaxHeight:function(){if(!this.hasApp)return null;var t=this.$vuetify.application.bottom+this.$vuetify.application.footer+this.$vuetify.application.bar;return this.clipped?t+this.$vuetify.application.top:t},computedTop:function(){if(!this.hasApp)return 0;var t=this.$vuetify.application.bar;return t+=this.clipped?this.$vuetify.application.top:0,t},computedTransform:function(){return this.isActive?0:this.isBottom||this.right?100:-100},computedWidth:function(){return this.isMiniVariant?this.miniVariantWidth:this.width},hasApp:function(){return this.app&&!this.isMobile&&!this.temporary},isBottom:function(){return this.bottom&&this.isMobile},isMiniVariant:function(){return!this.expandOnHover&&this.miniVariant||this.expandOnHover&&!this.isMouseover},isMobile:function(){return!this.stateless&&!this.permanent&&c["a"].options.computed.isMobile.call(this)},reactsToClick:function(){return!this.stateless&&!this.permanent&&(this.isMobile||this.temporary)},reactsToMobile:function(){return this.app&&!this.disableResizeWatcher&&!this.permanent&&!this.stateless&&!this.temporary},reactsToResize:function(){return!this.disableResizeWatcher&&!this.stateless},reactsToRoute:function(){return!this.disableRouteWatcher&&!this.stateless&&(this.temporary||this.isMobile)},showOverlay:function(){return!this.hideOverlay&&this.isActive&&(this.isMobile||this.temporary)},styles:function(){var t=this.isBottom?"translateY":"translateX";return{height:Object(p["h"])(this.height),top:this.isBottom?"auto":Object(p["h"])(this.computedTop),maxHeight:null!=this.computedMaxHeight?"calc(100% - ".concat(Object(p["h"])(this.computedMaxHeight),")"):void 0,transform:"".concat(t,"(").concat(Object(p["h"])(this.computedTransform,"%"),")"),width:Object(p["h"])(this.computedWidth)}}},watch:{$route:"onRouteChange",isActive:function(t){this.$emit("input",t)},isMobile:function(t,e){!t&&this.isActive&&!this.temporary&&this.removeOverlay(),null!=e&&this.reactsToResize&&this.reactsToMobile&&(this.isActive=!t)},permanent:function(t){t&&(this.isActive=!0)},showOverlay:function(t){t?this.genOverlay():this.removeOverlay()},value:function(t){this.permanent||(null!=t?t!==this.isActive&&(this.isActive=t):this.init())},expandOnHover:"updateMiniVariant",isMouseover:function(t){this.updateMiniVariant(!t)}},beforeMount:function(){this.init()},methods:{calculateTouchArea:function(){var t=this.$el.parentNode;if(t){var e=t.getBoundingClientRect();this.touchArea={left:e.left+50,right:e.right-50}}},closeConditional:function(){return this.isActive&&!this._isDestroyed&&this.reactsToClick},genAppend:function(){return this.genPosition("append")},genBackground:function(){var t={height:"100%",width:"100%",src:this.src},e=this.$scopedSlots.img?this.$scopedSlots.img(t):this.$createElement(r["a"],{props:t});return this.$createElement("div",{staticClass:"v-navigation-drawer__image"},[e])},genDirectives:function(){var t=this,e=[{name:"click-outside",value:{handler:function(){t.isActive=!1},closeConditional:this.closeConditional,include:this.getOpenDependentElements}}];return this.touchless||this.stateless||e.push({name:"touch",value:{parent:!0,left:this.swipeLeft,right:this.swipeRight}}),e},genListeners:function(){var t=this,e={mouseenter:function(){return t.isMouseover=!0},mouseleave:function(){return t.isMouseover=!1},transitionend:function(e){if(e.target===e.currentTarget){t.$emit("transitionend",e);var n=document.createEvent("UIEvents");n.initUIEvent("resize",!0,!1,window,0),window.dispatchEvent(n)}}};return this.miniVariant&&(e.click=function(){return t.$emit("update:mini-variant",!1)}),e},genPosition:function(t){var e=Object(p["s"])(this,t);return e?this.$createElement("div",{staticClass:"v-navigation-drawer__".concat(t)},e):e},genPrepend:function(){return this.genPosition("prepend")},genContent:function(){return this.$createElement("div",{staticClass:"v-navigation-drawer__content"},this.$slots.default)},genBorder:function(){return this.$createElement("div",{staticClass:"v-navigation-drawer__border"})},init:function(){this.permanent?this.isActive=!0:this.stateless||null!=this.value?this.isActive=this.value:this.temporary||(this.isActive=!this.isMobile)},onRouteChange:function(){this.reactsToRoute&&this.closeConditional()&&(this.isActive=!1)},swipeLeft:function(t){this.isActive&&this.right||(this.calculateTouchArea(),Math.abs(t.touchendX-t.touchstartX)<100||(this.right&&t.touchstartX>=this.touchArea.right?this.isActive=!0:!this.right&&this.isActive&&(this.isActive=!1)))},swipeRight:function(t){this.isActive&&!this.right||(this.calculateTouchArea(),Math.abs(t.touchendX-t.touchstartX)<100||(!this.right&&t.touchstartX<=this.touchArea.left?this.isActive=!0:this.right&&this.isActive&&(this.isActive=!1)))},updateApplication:function(){if(!this.isActive||this.isMobile||this.temporary||!this.$el)return 0;var t=Number(this.miniVariant?this.miniVariantWidth:this.width);return isNaN(t)?this.$el.clientWidth:t},updateMiniVariant:function(t){this.expandOnHover&&this.miniVariant!==t&&this.$emit("update:mini-variant",t)}},render:function(t){var e=[this.genPrepend(),this.genContent(),this.genAppend(),this.genBorder()];return(this.src||Object(p["s"])(this,"img"))&&e.unshift(this.genBackground()),t(this.tag,this.setBackgroundColor(this.color,{class:this.classes,style:this.styles,directives:this.genDirectives(),on:this.genListeners()}),e)}})},f823:function(t,e,n){},f8c9:function(t,e,n){var i=n("23e7"),r=n("da84"),s=n("d44e");i({global:!0},{Reflect:{}}),s(r.Reflect,"Reflect",!0)},fb6a:function(t,e,n){"use strict";var i=n("23e7"),r=n("da84"),s=n("e8b5"),o=n("68ee"),a=n("861d"),c=n("23cb"),u=n("07fa"),l=n("fc6a"),h=n("8418"),d=n("b622"),f=n("1dde"),p=n("f36a"),m=f("slice"),g=d("species"),v=r.Array,y=Math.max;i({target:"Array",proto:!0,forced:!m},{slice:function(t,e){var n,i,r,d=l(this),f=u(d),m=c(t,f),b=c(void 0===e?f:e,f);if(s(d)&&(n=d.constructor,o(n)&&(n===v||s(n.prototype))?n=void 0:a(n)&&(n=n[g],null===n&&(n=void 0)),n===v||void 0===n))return p(d,m,b);for(i=new(void 0===n?v:n)(y(b-m,0)),r=0;m<b;m++,r++)m in d&&h(i,r,d[m]);return i.length=r,i}})},fc6a:function(t,e,n){var i=n("44ad"),r=n("1d80");t.exports=function(t){return i(r(t))}},fce3:function(t,e,n){var i=n("d039"),r=n("da84"),s=r.RegExp;t.exports=i((function(){var t=s(".","s");return!(t.dotAll&&t.exec("\n")&&"s"===t.flags)}))},fdbc:function(t,e){t.exports={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}},fdbf:function(t,e,n){var i=n("4930");t.exports=i&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},fe6c:function(t,e,n){"use strict";n.d(e,"b",(function(){return o}));var i=n("2b0e"),r=n("80d2"),s={absolute:Boolean,bottom:Boolean,fixed:Boolean,left:Boolean,right:Boolean,top:Boolean};function o(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return i["a"].extend({name:"positionable",props:t.length?Object(r["n"])(s,t):s})}e["a"]=o()},fea9:function(t,e,n){var i=n("da84");t.exports=i.Promise},fff9:function(t,e,n){"use strict";n.d(e,"a",(function(){return s}));var i=n("d4ec"),r=n("bee2"),s=function(){function t(){Object(i["a"])(this,t),this.framework={}}return Object(r["a"])(t,[{key:"init",value:function(t,e){}}]),t}()}}]);
//# sourceMappingURL=chunk-vendors.c47df096.js.map