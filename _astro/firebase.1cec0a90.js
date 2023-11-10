const Ca="documents",Iu="users",Tu="1111111111111",yy="pension-4all.com";/**
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
 *//**
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
 */const ba=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let i=e.charCodeAt(r);i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=i&63|128):(i&64512)===55296&&r+1<e.length&&(e.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(e.charCodeAt(++r)&1023),t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=i&63|128):(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=i&63|128)}return t},wu=function(e){const t=[];let n=0,r=0;for(;n<e.length;){const i=e[n++];if(i<128)t[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=e[n++];t[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=e[n++],o=e[n++],a=e[n++],c=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;t[r++]=String.fromCharCode(55296+(c>>10)),t[r++]=String.fromCharCode(56320+(c&1023))}else{const s=e[n++],o=e[n++];t[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return t.join("")},ka={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<e.length;i+=3){const s=e[i],o=i+1<e.length,a=o?e[i+1]:0,c=i+2<e.length,l=c?e[i+2]:0,u=s>>2,h=(s&3)<<4|a>>4;let f=(a&15)<<2|l>>6,m=l&63;c||(m=64,o||(f=64)),r.push(n[u],n[h],n[f],n[m])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(ba(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):wu(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<e.length;){const s=n[e.charAt(i++)],a=i<e.length?n[e.charAt(i)]:0;++i;const l=i<e.length?n[e.charAt(i)]:64;++i;const h=i<e.length?n[e.charAt(i)]:64;if(++i,s==null||a==null||l==null||h==null)throw new Au;const f=s<<2|a>>4;if(r.push(f),l!==64){const m=a<<4&240|l>>2;if(r.push(m),h!==64){const I=l<<6&192|h;r.push(I)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};class Au extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Ru=function(e){const t=ba(e);return ka.encodeByteArray(t,!0)},sr=function(e){return Ru(e).replace(/\./g,"")},Na=function(e){try{return ka.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pu(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Su=()=>Pu().__FIREBASE_DEFAULTS__,Cu=()=>{if(typeof process>"u"||typeof process.env>"u")return;const e={}.__FIREBASE_DEFAULTS__;if(e)return JSON.parse(e)},bu=()=>{if(typeof document>"u")return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=e&&Na(e[1]);return t&&JSON.parse(t)},es=()=>{try{return Su()||Cu()||bu()}catch(e){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);return}},Da=e=>{var t,n;return(n=(t=es())===null||t===void 0?void 0:t.emulatorHosts)===null||n===void 0?void 0:n[e]},ku=e=>{const t=Da(e);if(!t)return;const n=t.lastIndexOf(":");if(n<=0||n+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const r=parseInt(t.substring(n+1),10);return t[0]==="["?[t.substring(1,n-1),r]:[t.substring(0,n),r]},Va=()=>{var e;return(e=es())===null||e===void 0?void 0:e.config},Oa=e=>{var t;return(t=es())===null||t===void 0?void 0:t[`_${e}`]};/**
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
 */class Nu{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}wrapCallback(t){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(n):t(n,r))}}}/**
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
 */function Du(e,t){if(e.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=t||"demo-project",i=e.iat||0,s=e.sub||e.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},e),a="";return[sr(JSON.stringify(n)),sr(JSON.stringify(o)),a].join(".")}/**
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
 */function rt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Vu(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(rt())}function Ou(){const e=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof e=="object"&&e.id!==void 0}function Mu(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Lu(){const e=rt();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}function Fu(){try{return typeof indexedDB=="object"}catch{return!1}}function xu(){return new Promise((e,t)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;t(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){t(n)}})}/**
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
 */const Uu="FirebaseError";class kt extends Error{constructor(t,n,r){super(n),this.code=t,this.customData=r,this.name=Uu,Object.setPrototypeOf(this,kt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,vn.prototype.create)}}class vn{constructor(t,n,r){this.service=t,this.serviceName=n,this.errors=r}create(t,...n){const r=n[0]||{},i=`${this.service}/${t}`,s=this.errors[t],o=s?Bu(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new kt(i,a,r)}}function Bu(e,t){return e.replace(ju,(n,r)=>{const i=t[r];return i!=null?String(i):`<${r}?>`})}const ju=/\{\$([^}]+)}/g;function $u(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function or(e,t){if(e===t)return!0;const n=Object.keys(e),r=Object.keys(t);for(const i of n){if(!r.includes(i))return!1;const s=e[i],o=t[i];if(co(s)&&co(o)){if(!or(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function co(e){return e!==null&&typeof e=="object"}/**
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
 */function En(e){const t=[];for(const[n,r]of Object.entries(e))Array.isArray(r)?r.forEach(i=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):t.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return t.length?"&"+t.join("&"):""}function $e(e){const t={};return e.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");t[decodeURIComponent(i)]=decodeURIComponent(s)}}),t}function qe(e){const t=e.indexOf("?");if(!t)return"";const n=e.indexOf("#",t);return e.substring(t,n>0?n:void 0)}function qu(e,t){const n=new Hu(e,t);return n.subscribe.bind(n)}class Hu{constructor(t,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{t(this)}).catch(r=>{this.error(r)})}next(t){this.forEachObserver(n=>{n.next(t)})}error(t){this.forEachObserver(n=>{n.error(t)}),this.close(t)}complete(){this.forEachObserver(t=>{t.complete()}),this.close()}subscribe(t,n,r){let i;if(t===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");Gu(t,["next","error","complete"])?i=t:i={next:t,error:n,complete:r},i.next===void 0&&(i.next=ii),i.error===void 0&&(i.error=ii),i.complete===void 0&&(i.complete=ii);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(t){this.observers===void 0||this.observers[t]===void 0||(delete this.observers[t],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(t){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,t)}sendOne(t,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[t]!==void 0)try{n(this.observers[t])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(t){this.finalized||(this.finalized=!0,t!==void 0&&(this.finalError=t),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Gu(e,t){if(typeof e!="object"||e===null)return!1;for(const n of t)if(n in e&&typeof e[n]=="function")return!0;return!1}function ii(){}/**
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
 */function q(e){return e&&e._delegate?e._delegate:e}class re{constructor(t,n,r){this.name=t,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
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
 */const Yt="[DEFAULT]";/**
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
 */class zu{constructor(t,n){this.name=t,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const n=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(n)){const r=new Nu;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(t){var n;const r=this.normalizeInstanceIdentifier(t?.identifier),i=(n=t?.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(Ku(t))try{this.getOrInitializeService({instanceIdentifier:Yt})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(t=Yt){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...t.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=Yt){return this.instances.has(t)}getOptions(t=Yt){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:n={}}=t,r=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(t,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(t),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&t(o,i),()=>{s.delete(t)}}invokeOnInitCallbacks(t,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(t,n)}catch{}}getOrInitializeService({instanceIdentifier:t,options:n={}}){let r=this.instances.get(t);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Wu(t),options:n}),this.instances.set(t,r),this.instancesOptions.set(t,n),this.invokeOnInitCallbacks(r,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,r)}catch{}return r||null}normalizeInstanceIdentifier(t=Yt){return this.component?this.component.multipleInstances?t:Yt:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Wu(e){return e===Yt?void 0:e}function Ku(e){return e.instantiationMode==="EAGER"}/**
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
 */class Qu{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const n=this.getProvider(t.name);if(n.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);n.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const n=new zu(t,this);return this.providers.set(t,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var P;(function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"})(P||(P={}));const Ju={debug:P.DEBUG,verbose:P.VERBOSE,info:P.INFO,warn:P.WARN,error:P.ERROR,silent:P.SILENT},Yu=P.INFO,Xu={[P.DEBUG]:"log",[P.VERBOSE]:"log",[P.INFO]:"info",[P.WARN]:"warn",[P.ERROR]:"error"},Zu=(e,t,...n)=>{if(t<e.logLevel)return;const r=new Date().toISOString(),i=Xu[t];if(i)console[i](`[${r}]  ${e.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class ns{constructor(t){this.name=t,this._logLevel=Yu,this._logHandler=Zu,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in P))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?Ju[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,P.DEBUG,...t),this._logHandler(this,P.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,P.VERBOSE,...t),this._logHandler(this,P.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,P.INFO,...t),this._logHandler(this,P.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,P.WARN,...t),this._logHandler(this,P.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,P.ERROR,...t),this._logHandler(this,P.ERROR,...t)}}const th=(e,t)=>t.some(n=>e instanceof n);let lo,uo;function eh(){return lo||(lo=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function nh(){return uo||(uo=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Ma=new WeakMap,Si=new WeakMap,La=new WeakMap,si=new WeakMap,rs=new WeakMap;function rh(e){const t=new Promise((n,r)=>{const i=()=>{e.removeEventListener("success",s),e.removeEventListener("error",o)},s=()=>{n(Ft(e.result)),i()},o=()=>{r(e.error),i()};e.addEventListener("success",s),e.addEventListener("error",o)});return t.then(n=>{n instanceof IDBCursor&&Ma.set(n,e)}).catch(()=>{}),rs.set(t,e),t}function ih(e){if(Si.has(e))return;const t=new Promise((n,r)=>{const i=()=>{e.removeEventListener("complete",s),e.removeEventListener("error",o),e.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(e.error||new DOMException("AbortError","AbortError")),i()};e.addEventListener("complete",s),e.addEventListener("error",o),e.addEventListener("abort",o)});Si.set(e,t)}let Ci={get(e,t,n){if(e instanceof IDBTransaction){if(t==="done")return Si.get(e);if(t==="objectStoreNames")return e.objectStoreNames||La.get(e);if(t==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Ft(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in e}};function sh(e){Ci=e(Ci)}function oh(e){return e===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...n){const r=e.call(oi(this),t,...n);return La.set(r,t.sort?t.sort():[t]),Ft(r)}:nh().includes(e)?function(...t){return e.apply(oi(this),t),Ft(Ma.get(this))}:function(...t){return Ft(e.apply(oi(this),t))}}function ah(e){return typeof e=="function"?oh(e):(e instanceof IDBTransaction&&ih(e),th(e,eh())?new Proxy(e,Ci):e)}function Ft(e){if(e instanceof IDBRequest)return rh(e);if(si.has(e))return si.get(e);const t=ah(e);return t!==e&&(si.set(e,t),rs.set(t,e)),t}const oi=e=>rs.get(e);function ch(e,t,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(e,t),a=Ft(o);return r&&o.addEventListener("upgradeneeded",c=>{r(Ft(o.result),c.oldVersion,c.newVersion,Ft(o.transaction),c)}),n&&o.addEventListener("blocked",c=>n(c.oldVersion,c.newVersion,c)),a.then(c=>{s&&c.addEventListener("close",()=>s()),i&&c.addEventListener("versionchange",l=>i(l.oldVersion,l.newVersion,l))}).catch(()=>{}),a}const lh=["get","getKey","getAll","getAllKeys","count"],uh=["put","add","delete","clear"],ai=new Map;function ho(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&typeof t=="string"))return;if(ai.get(t))return ai.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,i=uh.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||lh.includes(n)))return;const s=async function(o,...a){const c=this.transaction(o,i?"readwrite":"readonly");let l=c.store;return r&&(l=l.index(a.shift())),(await Promise.all([l[n](...a),i&&c.done]))[0]};return ai.set(t,s),s}sh(e=>({...e,get:(t,n,r)=>ho(t,n)||e.get(t,n,r),has:(t,n)=>!!ho(t,n)||e.has(t,n)}));/**
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
 */class hh{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(dh(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function dh(e){const t=e.getComponent();return t?.type==="VERSION"}const bi="@firebase/app",fo="0.9.16";/**
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
 */const ie=new ns("@firebase/app"),fh="@firebase/app-compat",ph="@firebase/analytics-compat",gh="@firebase/analytics",mh="@firebase/app-check-compat",_h="@firebase/app-check",yh="@firebase/auth",vh="@firebase/auth-compat",Eh="@firebase/database",Ih="@firebase/database-compat",Th="@firebase/functions",wh="@firebase/functions-compat",Ah="@firebase/installations",Rh="@firebase/installations-compat",Ph="@firebase/messaging",Sh="@firebase/messaging-compat",Ch="@firebase/performance",bh="@firebase/performance-compat",kh="@firebase/remote-config",Nh="@firebase/remote-config-compat",Dh="@firebase/storage",Vh="@firebase/storage-compat",Oh="@firebase/firestore",Mh="@firebase/firestore-compat",Lh="firebase",Fh="10.2.0";/**
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
 */const ki="[DEFAULT]",xh={[bi]:"fire-core",[fh]:"fire-core-compat",[gh]:"fire-analytics",[ph]:"fire-analytics-compat",[_h]:"fire-app-check",[mh]:"fire-app-check-compat",[yh]:"fire-auth",[vh]:"fire-auth-compat",[Eh]:"fire-rtdb",[Ih]:"fire-rtdb-compat",[Th]:"fire-fn",[wh]:"fire-fn-compat",[Ah]:"fire-iid",[Rh]:"fire-iid-compat",[Ph]:"fire-fcm",[Sh]:"fire-fcm-compat",[Ch]:"fire-perf",[bh]:"fire-perf-compat",[kh]:"fire-rc",[Nh]:"fire-rc-compat",[Dh]:"fire-gcs",[Vh]:"fire-gcs-compat",[Oh]:"fire-fst",[Mh]:"fire-fst-compat","fire-js":"fire-js",[Lh]:"fire-js-all"};/**
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
 */const ar=new Map,Ni=new Map;function Uh(e,t){try{e.container.addComponent(t)}catch(n){ie.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function Te(e){const t=e.name;if(Ni.has(t))return ie.debug(`There were multiple attempts to register component ${t}.`),!1;Ni.set(t,e);for(const n of ar.values())Uh(n,e);return!0}function is(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}/**
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
 */const Bh={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},xt=new vn("app","Firebase",Bh);/**
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
 */class jh{constructor(t,n,r){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new re("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw xt.create("app-deleted",{appName:this._name})}}/**
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
 */const Ne=Fh;function Fa(e,t={}){let n=e;typeof t!="object"&&(t={name:t});const r=Object.assign({name:ki,automaticDataCollectionEnabled:!1},t),i=r.name;if(typeof i!="string"||!i)throw xt.create("bad-app-name",{appName:String(i)});if(n||(n=Va()),!n)throw xt.create("no-options");const s=ar.get(i);if(s){if(or(n,s.options)&&or(r,s.config))return s;throw xt.create("duplicate-app",{appName:i})}const o=new Qu(i);for(const c of Ni.values())o.addComponent(c);const a=new jh(n,r,o);return ar.set(i,a),a}function xa(e=ki){const t=ar.get(e);if(!t&&e===ki&&Va())return Fa();if(!t)throw xt.create("no-app",{appName:e});return t}function Ut(e,t,n){var r;let i=(r=xh[e])!==null&&r!==void 0?r:e;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=t.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${t}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${t}" contains illegal characters (whitespace or "/")`),ie.warn(a.join(" "));return}Te(new re(`${i}-version`,()=>({library:i,version:t}),"VERSION"))}/**
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
 */const $h="firebase-heartbeat-database",qh=1,Ze="firebase-heartbeat-store";let ci=null;function Ua(){return ci||(ci=ch($h,qh,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(Ze)}}}).catch(e=>{throw xt.create("idb-open",{originalErrorMessage:e.message})})),ci}async function Hh(e){try{return await(await Ua()).transaction(Ze).objectStore(Ze).get(Ba(e))}catch(t){if(t instanceof kt)ie.warn(t.message);else{const n=xt.create("idb-get",{originalErrorMessage:t?.message});ie.warn(n.message)}}}async function po(e,t){try{const r=(await Ua()).transaction(Ze,"readwrite");await r.objectStore(Ze).put(t,Ba(e)),await r.done}catch(n){if(n instanceof kt)ie.warn(n.message);else{const r=xt.create("idb-set",{originalErrorMessage:n?.message});ie.warn(r.message)}}}function Ba(e){return`${e.name}!${e.options.appId}`}/**
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
 */const Gh=1024,zh=30*24*60*60*1e3;class Wh{constructor(t){this.container=t,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Qh(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=go();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(i=>i.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const s=new Date(i.date).valueOf();return Date.now()-s<=zh}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const t=go(),{heartbeatsToSend:n,unsentEntries:r}=Kh(this._heartbeatsCache.heartbeats),i=sr(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=t,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function go(){return new Date().toISOString().substring(0,10)}function Kh(e,t=Gh){const n=[];let r=e.slice();for(const i of e){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),mo(n)>t){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),mo(n)>t){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class Qh{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Fu()?xu().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await Hh(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(t){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return po(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return po(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...t.heartbeats]})}else return}}function mo(e){return sr(JSON.stringify({version:2,heartbeats:e})).length}/**
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
 */function Jh(e){Te(new re("platform-logger",t=>new hh(t),"PRIVATE")),Te(new re("heartbeat",t=>new Wh(t),"PRIVATE")),Ut(bi,fo,e),Ut(bi,fo,"esm2017"),Ut("fire-js","")}Jh("");var Yh="firebase",Xh="10.2.0";/**
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
 */Ut(Yh,Xh,"app");function ss(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]]);return n}function _o(e){return e!==void 0&&e.enterprise!==void 0}class Zh{constructor(t){if(this.siteKey="",this.emailPasswordEnabled=!1,t.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=t.recaptchaKey.split("/")[3],this.emailPasswordEnabled=t.recaptchaEnforcementState.some(n=>n.provider==="EMAIL_PASSWORD_PROVIDER"&&n.enforcementState!=="OFF")}}function ja(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const td=ja,$a=new vn("auth","Firebase",ja());/**
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
 */const cr=new ns("@firebase/auth");function ed(e,...t){cr.logLevel<=P.WARN&&cr.warn(`Auth (${Ne}): ${e}`,...t)}function Xn(e,...t){cr.logLevel<=P.ERROR&&cr.error(`Auth (${Ne}): ${e}`,...t)}/**
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
 */function pt(e,...t){throw os(e,...t)}function Et(e,...t){return os(e,...t)}function nd(e,t,n){const r=Object.assign(Object.assign({},td()),{[t]:n});return new vn("auth","Firebase",r).create(t,{appName:e.name})}function os(e,...t){if(typeof e!="string"){const n=t[0],r=[...t.slice(1)];return r[0]&&(r[0].appName=e.name),e._errorFactory.create(n,...r)}return $a.create(e,...t)}function v(e,t,...n){if(!e)throw os(t,...n)}function At(e){const t="INTERNAL ASSERTION FAILED: "+e;throw Xn(t),new Error(t)}function St(e,t){e||At(t)}/**
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
 */function Di(){var e;return typeof self<"u"&&((e=self.location)===null||e===void 0?void 0:e.href)||""}function rd(){return yo()==="http:"||yo()==="https:"}function yo(){var e;return typeof self<"u"&&((e=self.location)===null||e===void 0?void 0:e.protocol)||null}/**
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
 */function id(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(rd()||Ou()||"connection"in navigator)?navigator.onLine:!0}function sd(){if(typeof navigator>"u")return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}/**
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
 */class In{constructor(t,n){this.shortDelay=t,this.longDelay=n,St(n>t,"Short delay should be less than long delay!"),this.isMobile=Vu()||Mu()}get(){return id()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function as(e,t){St(e.emulator,"Emulator should always be set here");const{url:n}=e.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}/**
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
 */class qa{static initialize(t,n,r){this.fetchImpl=t,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;At("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;At("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;At("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const od={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const ad=new In(3e4,6e4);function le(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}async function ue(e,t,n,r,i={}){return Ha(e,i,async()=>{let s={},o={};r&&(t==="GET"?o=r:s={body:JSON.stringify(r)});const a=En(Object.assign({key:e.config.apiKey},o)).slice(1),c=await e._getAdditionalHeaders();return c["Content-Type"]="application/json",e.languageCode&&(c["X-Firebase-Locale"]=e.languageCode),qa.fetch()(Ga(e,e.config.apiHost,n,a),Object.assign({method:t,headers:c,referrerPolicy:"no-referrer"},s))})}async function Ha(e,t,n){e._canInitEmulator=!1;const r=Object.assign(Object.assign({},od),t);try{const i=new cd(e),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw jn(e,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[c,l]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw jn(e,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw jn(e,"email-already-in-use",o);if(c==="USER_DISABLED")throw jn(e,"user-disabled",o);const u=r[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(l)throw nd(e,u,l);pt(e,u)}}catch(i){if(i instanceof kt)throw i;pt(e,"network-request-failed",{message:String(i)})}}async function Tn(e,t,n,r,i={}){const s=await ue(e,t,n,r,i);return"mfaPendingCredential"in s&&pt(e,"multi-factor-auth-required",{_serverResponse:s}),s}function Ga(e,t,n,r){const i=`${t}${n}?${r}`;return e.config.emulator?as(e.config,i):`${e.config.apiScheme}://${i}`}class cd{constructor(t){this.auth=t,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Et(this.auth,"network-request-failed")),ad.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function jn(e,t,n){const r={appName:e.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=Et(e,t,r);return i.customData._tokenResponse=n,i}async function ld(e,t){return ue(e,"GET","/v2/recaptchaConfig",le(e,t))}/**
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
 */async function ud(e,t){return ue(e,"POST","/v1/accounts:delete",t)}async function hd(e,t){return ue(e,"POST","/v1/accounts:lookup",t)}/**
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
 */function ze(e){if(e)try{const t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch{}}async function dd(e,t=!1){const n=q(e),r=await n.getIdToken(t),i=cs(r);v(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s?.sign_in_provider;return{claims:i,token:r,authTime:ze(li(i.auth_time)),issuedAtTime:ze(li(i.iat)),expirationTime:ze(li(i.exp)),signInProvider:o||null,signInSecondFactor:s?.sign_in_second_factor||null}}function li(e){return Number(e)*1e3}function cs(e){const[t,n,r]=e.split(".");if(t===void 0||n===void 0||r===void 0)return Xn("JWT malformed, contained fewer than 3 sections"),null;try{const i=Na(n);return i?JSON.parse(i):(Xn("Failed to decode base64 JWT payload"),null)}catch(i){return Xn("Caught error parsing JWT payload as JSON",i?.toString()),null}}function fd(e){const t=cs(e);return v(t,"internal-error"),v(typeof t.exp<"u","internal-error"),v(typeof t.iat<"u","internal-error"),Number(t.exp)-Number(t.iat)}/**
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
 */async function tn(e,t,n=!1){if(n)return t;try{return await t}catch(r){throw r instanceof kt&&pd(r)&&e.auth.currentUser===e&&await e.auth.signOut(),r}}function pd({code:e}){return e==="auth/user-disabled"||e==="auth/user-token-expired"}/**
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
 */class gd{constructor(t){this.user=t,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(t){var n;if(t){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(t=!1){if(!this.isRunning)return;const n=this.getInterval(t);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(t){t?.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class za{constructor(t,n){this.createdAt=t,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=ze(this.lastLoginAt),this.creationTime=ze(this.createdAt)}_copy(t){this.createdAt=t.createdAt,this.lastLoginAt=t.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function lr(e){var t;const n=e.auth,r=await e.getIdToken(),i=await tn(e,hd(n,{idToken:r}));v(i?.users.length,n,"internal-error");const s=i.users[0];e._notifyReloadListener(s);const o=!((t=s.providerUserInfo)===null||t===void 0)&&t.length?yd(s.providerUserInfo):[],a=_d(e.providerData,o),c=e.isAnonymous,l=!(e.email&&s.passwordHash)&&!a?.length,u=c?l:!1,h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new za(s.createdAt,s.lastLoginAt),isAnonymous:u};Object.assign(e,h)}async function md(e){const t=q(e);await lr(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}function _d(e,t){return[...e.filter(r=>!t.some(i=>i.providerId===r.providerId)),...t]}function yd(e){return e.map(t=>{var{providerId:n}=t,r=ss(t,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function vd(e,t){const n=await Ha(e,{},async()=>{const r=En({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:i,apiKey:s}=e.config,o=Ga(e,i,"/v1/token",`key=${s}`),a=await e._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",qa.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
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
 */class en{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(t){v(t.idToken,"internal-error"),v(typeof t.idToken<"u","internal-error"),v(typeof t.refreshToken<"u","internal-error");const n="expiresIn"in t&&typeof t.expiresIn<"u"?Number(t.expiresIn):fd(t.idToken);this.updateTokensAndExpiration(t.idToken,t.refreshToken,n)}async getToken(t,n=!1){return v(!this.accessToken||this.refreshToken,t,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(t,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(t,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await vd(t,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(t,n,r){this.refreshToken=n||null,this.accessToken=t||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(t,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new en;return r&&(v(typeof r=="string","internal-error",{appName:t}),o.refreshToken=r),i&&(v(typeof i=="string","internal-error",{appName:t}),o.accessToken=i),s&&(v(typeof s=="number","internal-error",{appName:t}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(t){this.accessToken=t.accessToken,this.refreshToken=t.refreshToken,this.expirationTime=t.expirationTime}_clone(){return Object.assign(new en,this.toJSON())}_performRefresh(){return At("not implemented")}}/**
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
 */function Nt(e,t){v(typeof e=="string"||typeof e>"u","internal-error",{appName:t})}class ee{constructor(t){var{uid:n,auth:r,stsTokenManager:i}=t,s=ss(t,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new gd(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new za(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(t){const n=await tn(this,this.stsTokenManager.getToken(this.auth,t));return v(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(t){return dd(this,t)}reload(){return md(this)}_assign(t){this!==t&&(v(this.uid===t.uid,this.auth,"internal-error"),this.displayName=t.displayName,this.photoURL=t.photoURL,this.email=t.email,this.emailVerified=t.emailVerified,this.phoneNumber=t.phoneNumber,this.isAnonymous=t.isAnonymous,this.tenantId=t.tenantId,this.providerData=t.providerData.map(n=>Object.assign({},n)),this.metadata._copy(t.metadata),this.stsTokenManager._assign(t.stsTokenManager))}_clone(t){const n=new ee(Object.assign(Object.assign({},this),{auth:t,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(t){v(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=t,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(t){this.reloadListener?this.reloadListener(t):this.reloadUserInfo=t}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(t,n=!1){let r=!1;t.idToken&&t.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(t),r=!0),n&&await lr(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const t=await this.getIdToken();return await tn(this,ud(this.auth,{idToken:t})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(t=>Object.assign({},t)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(t,n){var r,i,s,o,a,c,l,u;const h=(r=n.displayName)!==null&&r!==void 0?r:void 0,f=(i=n.email)!==null&&i!==void 0?i:void 0,m=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,I=(o=n.photoURL)!==null&&o!==void 0?o:void 0,S=(a=n.tenantId)!==null&&a!==void 0?a:void 0,w=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,L=(l=n.createdAt)!==null&&l!==void 0?l:void 0,O=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:z,emailVerified:mt,isAnonymous:Fe,providerData:Jt,stsTokenManager:xe}=n;v(z&&xe,t,"internal-error");const ao=en.fromJSON(this.name,xe);v(typeof z=="string",t,"internal-error"),Nt(h,t.name),Nt(f,t.name),v(typeof mt=="boolean",t,"internal-error"),v(typeof Fe=="boolean",t,"internal-error"),Nt(m,t.name),Nt(I,t.name),Nt(S,t.name),Nt(w,t.name),Nt(L,t.name),Nt(O,t.name);const Ue=new ee({uid:z,auth:t,email:f,emailVerified:mt,displayName:h,isAnonymous:Fe,photoURL:I,phoneNumber:m,tenantId:S,stsTokenManager:ao,createdAt:L,lastLoginAt:O});return Jt&&Array.isArray(Jt)&&(Ue.providerData=Jt.map(Bn=>Object.assign({},Bn))),w&&(Ue._redirectEventId=w),Ue}static async _fromIdTokenResponse(t,n,r=!1){const i=new en;i.updateFromServerResponse(n);const s=new ee({uid:n.localId,auth:t,stsTokenManager:i,isAnonymous:r});return await lr(s),s}}/**
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
 */const vo=new Map;function Rt(e){St(e instanceof Function,"Expected a class definition");let t=vo.get(e);return t?(St(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,vo.set(e,t),t)}/**
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
 */class Wa{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(t,n){this.storage[t]=n}async _get(t){const n=this.storage[t];return n===void 0?null:n}async _remove(t){delete this.storage[t]}_addListener(t,n){}_removeListener(t,n){}}Wa.type="NONE";const Eo=Wa;/**
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
 */function Zn(e,t,n){return`firebase:${e}:${t}:${n}`}class ye{constructor(t,n,r){this.persistence=t,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=Zn(this.userKey,i.apiKey,s),this.fullPersistenceKey=Zn("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(t){return this.persistence._set(this.fullUserKey,t.toJSON())}async getCurrentUser(){const t=await this.persistence._get(this.fullUserKey);return t?ee._fromJSON(this.auth,t):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(t){if(this.persistence===t)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=t,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(t,n,r="authUser"){if(!n.length)return new ye(Rt(Eo),t,r);const i=(await Promise.all(n.map(async l=>{if(await l._isAvailable())return l}))).filter(l=>l);let s=i[0]||Rt(Eo);const o=Zn(r,t.config.apiKey,t.name);let a=null;for(const l of n)try{const u=await l._get(o);if(u){const h=ee._fromJSON(t,u);l!==s&&(a=h),s=l;break}}catch{}const c=i.filter(l=>l._shouldAllowMigration);return!s._shouldAllowMigration||!c.length?new ye(s,t,r):(s=c[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async l=>{if(l!==s)try{await l._remove(o)}catch{}})),new ye(s,t,r))}}/**
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
 */function Io(e){const t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(Ja(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(Ka(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(Xa(t))return"Blackberry";if(Za(t))return"Webos";if(ls(t))return"Safari";if((t.includes("chrome/")||Qa(t))&&!t.includes("edge/"))return"Chrome";if(Ya(t))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=e.match(n);if(r?.length===2)return r[1]}return"Other"}function Ka(e=rt()){return/firefox\//i.test(e)}function ls(e=rt()){const t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function Qa(e=rt()){return/crios\//i.test(e)}function Ja(e=rt()){return/iemobile/i.test(e)}function Ya(e=rt()){return/android/i.test(e)}function Xa(e=rt()){return/blackberry/i.test(e)}function Za(e=rt()){return/webos/i.test(e)}function Pr(e=rt()){return/iphone|ipad|ipod/i.test(e)||/macintosh/i.test(e)&&/mobile/i.test(e)}function Ed(e=rt()){var t;return Pr(e)&&!!(!((t=window.navigator)===null||t===void 0)&&t.standalone)}function Id(){return Lu()&&document.documentMode===10}function tc(e=rt()){return Pr(e)||Ya(e)||Za(e)||Xa(e)||/windows phone/i.test(e)||Ja(e)}function Td(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function ec(e,t=[]){let n;switch(e){case"Browser":n=Io(rt());break;case"Worker":n=`${Io(rt())}-${e}`;break;default:n=e}const r=t.length?t.join(","):"FirebaseCore-web";return`${n}/JsCore/${Ne}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wd{constructor(t){this.auth=t,this.queue=[]}pushCallback(t,n){const r=s=>new Promise((o,a)=>{try{const c=t(s);o(c)}catch(c){a(c)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(t){if(this.auth.currentUser===t)return;const n=[];try{for(const r of this.queue)await r(t),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r?.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ad(e,t={}){return ue(e,"GET","/v2/passwordPolicy",le(e,t))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rd=6;class Pd{constructor(t){var n,r,i,s;const o=t.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:Rd,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=t.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=t.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=t.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=t.schemaVersion}validatePassword(t){var n,r,i,s,o,a;const c={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(t,c),this.validatePasswordCharacterOptions(t,c),c.isValid&&(c.isValid=(n=c.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),c.isValid&&(c.isValid=(r=c.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),c.isValid&&(c.isValid=(i=c.containsLowercaseLetter)!==null&&i!==void 0?i:!0),c.isValid&&(c.isValid=(s=c.containsUppercaseLetter)!==null&&s!==void 0?s:!0),c.isValid&&(c.isValid=(o=c.containsNumericCharacter)!==null&&o!==void 0?o:!0),c.isValid&&(c.isValid=(a=c.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),c}validatePasswordLengthOptions(t,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=t.length>=r),i&&(n.meetsMaxPasswordLength=t.length<=i)}validatePasswordCharacterOptions(t,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<t.length;i++)r=t.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(t,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(t.containsLowercaseLetter||(t.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(t.containsUppercaseLetter||(t.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(t.containsNumericCharacter||(t.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(t.containsNonAlphanumericCharacter||(t.containsNonAlphanumericCharacter=s))}}/**
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
 */class Sd{constructor(t,n,r,i){this.app=t,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new To(this),this.idTokenSubscription=new To(this),this.beforeStateQueue=new wd(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=$a,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=t.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(t,n){return n&&(this._popupRedirectResolver=Rt(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await ye.create(this,t),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const t=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!t)){if(this.currentUser&&t&&this.currentUser.uid===t.uid){this._currentUser._assign(t),await this.currentUser.getIdToken();return}await this._updateCurrentUser(t,!0)}}async initializeCurrentUser(t){var n;const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(t&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i?._redirectEventId,c=await this.tryRedirectSignIn(t);(!o||o===a)&&c?.user&&(i=c.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return v(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(t){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,t,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(t){try{await lr(t)}catch(n){if(n?.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(t)}useDeviceLanguage(){this.languageCode=sd()}async _delete(){this._deleted=!0}async updateCurrentUser(t){const n=t?q(t):null;return n&&v(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(t,n=!1){if(!this._deleted)return t&&v(this.tenantId===t.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(t),this.queue(async()=>{await this.directlySetCurrentUser(t),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(t){return this.queue(async()=>{await this.assertedPersistence.setPersistence(Rt(t))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(t){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(t)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const t=await Ad(this),n=new Pd(t);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(t){this._errorFactory=new vn("auth","Firebase",t())}onAuthStateChanged(t,n,r){return this.registerStateListener(this.authStateSubscription,t,n,r)}beforeAuthStateChanged(t,n){return this.beforeStateQueue.pushCallback(t,n)}onIdTokenChanged(t,n,r){return this.registerStateListener(this.idTokenSubscription,t,n,r)}authStateReady(){return new Promise((t,n)=>{if(this.currentUser)t();else{const r=this.onAuthStateChanged(()=>{r(),t()},n)}})}toJSON(){var t;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(t=this._currentUser)===null||t===void 0?void 0:t.toJSON()}}async _setRedirectUser(t,n){const r=await this.getOrInitRedirectPersistenceManager(n);return t===null?r.removeCurrentUser():r.setCurrentUser(t)}async getOrInitRedirectPersistenceManager(t){if(!this.redirectPersistenceManager){const n=t&&Rt(t)||this._popupRedirectResolver;v(n,this,"argument-error"),this.redirectPersistenceManager=await ye.create(this,[Rt(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(t){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===t?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===t?this.redirectUser:null}async _persistUserIfCurrent(t){if(t===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(t))}_notifyListenersIfCurrent(t){t===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(t=this.currentUser)===null||t===void 0?void 0:t.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(t,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(v(a,this,"internal-error"),a.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const c=t.addObserver(n,r,i);return()=>{o=!0,c()}}else{const c=t.addObserver(n);return()=>{o=!0,c()}}}async directlySetCurrentUser(t){this.currentUser&&this.currentUser!==t&&this._currentUser._stopProactiveRefresh(),t&&this.isProactiveRefreshEnabled&&t._startProactiveRefresh(),this.currentUser=t,t?await this.assertedPersistence.setCurrentUser(t):await this.assertedPersistence.removeCurrentUser()}queue(t){return this.operations=this.operations.then(t,t),this.operations}get assertedPersistence(){return v(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(t){!t||this.frameworks.includes(t)||(this.frameworks.push(t),this.frameworks.sort(),this.clientVersion=ec(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var t;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((t=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||t===void 0?void 0:t.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var t;const n=await((t=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||t===void 0?void 0:t.getToken());return n?.error&&ed(`Error while retrieving App Check token: ${n.error}`),n?.token}}function he(e){return q(e)}class To{constructor(t){this.auth=t,this.observer=null,this.addObserver=qu(n=>this.observer=n)}get next(){return v(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */function Cd(){var e,t;return(t=(e=document.getElementsByTagName("head"))===null||e===void 0?void 0:e[0])!==null&&t!==void 0?t:document}function nc(e){return new Promise((t,n)=>{const r=document.createElement("script");r.setAttribute("src",e),r.onload=t,r.onerror=i=>{const s=Et("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",Cd().appendChild(r)})}function bd(e){return`__${e}${Math.floor(Math.random()*1e6)}`}const kd="https://www.google.com/recaptcha/enterprise.js?render=",Nd="recaptcha-enterprise",Dd="NO_RECAPTCHA";class Vd{constructor(t){this.type=Nd,this.auth=he(t)}async verify(t="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,a)=>{ld(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(c=>{if(c.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const l=new Zh(c);return s.tenantId==null?s._agentRecaptchaConfig=l:s._tenantRecaptchaConfigs[s.tenantId]=l,o(l.siteKey)}}).catch(c=>{a(c)})})}function i(s,o,a){const c=window.grecaptcha;_o(c)?c.enterprise.ready(()=>{c.enterprise.execute(s,{action:t}).then(l=>{o(l)}).catch(()=>{o(Dd)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((s,o)=>{r(this.auth).then(a=>{if(!n&&_o(window.grecaptcha))i(a,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}nc(kd+a).then(()=>{i(a,s,o)}).catch(c=>{o(c)})}}).catch(a=>{o(a)})})}}async function wo(e,t,n,r=!1){const i=new Vd(e);let s;try{s=await i.verify(n)}catch{s=await i.verify(n,!0)}const o=Object.assign({},t);return r?Object.assign(o,{captchaResp:s}):Object.assign(o,{captchaResponse:s}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}/**
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
 */function Od(e,t){const n=is(e,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(or(s,t??{}))return i;pt(i,"already-initialized")}return n.initialize({options:t})}function Md(e,t){const n=t?.persistence||[],r=(Array.isArray(n)?n:[n]).map(Rt);t?.errorMap&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(r,t?.popupRedirectResolver)}function Ld(e,t,n){const r=he(e);v(r._canInitEmulator,r,"emulator-config-failed"),v(/^https?:\/\//.test(t),r,"invalid-emulator-scheme");const i=!!n?.disableWarnings,s=rc(t),{host:o,port:a}=Fd(t),c=a===null?"":`:${a}`;r.config.emulator={url:`${s}//${o}${c}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||xd()}function rc(e){const t=e.indexOf(":");return t<0?"":e.substr(0,t+1)}function Fd(e){const t=rc(e),n=/(\/\/)?([^?#/]+)/.exec(e.substr(t.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:Ao(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:Ao(o)}}}function Ao(e){if(!e)return null;const t=Number(e);return isNaN(t)?null:t}function xd(){function e(){const t=document.createElement("p"),n=t.style;t.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",t.classList.add("firebase-emulator-warning"),document.body.appendChild(t)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",e):e())}/**
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
 */class us{constructor(t,n){this.providerId=t,this.signInMethod=n}toJSON(){return At("not implemented")}_getIdTokenResponse(t){return At("not implemented")}_linkToIdToken(t,n){return At("not implemented")}_getReauthenticationResolver(t){return At("not implemented")}}async function Ud(e,t){return ue(e,"POST","/v1/accounts:update",t)}/**
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
 */async function ui(e,t){return Tn(e,"POST","/v1/accounts:signInWithPassword",le(e,t))}/**
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
 */async function Bd(e,t){return Tn(e,"POST","/v1/accounts:signInWithEmailLink",le(e,t))}async function jd(e,t){return Tn(e,"POST","/v1/accounts:signInWithEmailLink",le(e,t))}/**
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
 */class nn extends us{constructor(t,n,r,i=null){super("password",r),this._email=t,this._password=n,this._tenantId=i}static _fromEmailAndPassword(t,n){return new nn(t,n,"password")}static _fromEmailAndCode(t,n,r=null){return new nn(t,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(t){const n=typeof t=="string"?JSON.parse(t):t;if(n?.email&&n?.password){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(t){var n;switch(this.signInMethod){case"password":const r={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};if(!((n=t._getRecaptchaConfig())===null||n===void 0)&&n.emailPasswordEnabled){const i=await wo(t,r,"signInWithPassword");return ui(t,i)}else return ui(t,r).catch(async i=>{if(i.code==="auth/missing-recaptcha-token"){console.log("Sign-in with email address and password is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-in flow.");const s=await wo(t,r,"signInWithPassword");return ui(t,s)}else return Promise.reject(i)});case"emailLink":return Bd(t,{email:this._email,oobCode:this._password});default:pt(t,"internal-error")}}async _linkToIdToken(t,n){switch(this.signInMethod){case"password":return Ud(t,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return jd(t,{idToken:n,email:this._email,oobCode:this._password});default:pt(t,"internal-error")}}_getReauthenticationResolver(t){return this._getIdTokenResponse(t)}}/**
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
 */async function ve(e,t){return Tn(e,"POST","/v1/accounts:signInWithIdp",le(e,t))}/**
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
 */const $d="http://localhost";class se extends us{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(t){const n=new se(t.providerId,t.signInMethod);return t.idToken||t.accessToken?(t.idToken&&(n.idToken=t.idToken),t.accessToken&&(n.accessToken=t.accessToken),t.nonce&&!t.pendingToken&&(n.nonce=t.nonce),t.pendingToken&&(n.pendingToken=t.pendingToken)):t.oauthToken&&t.oauthTokenSecret?(n.accessToken=t.oauthToken,n.secret=t.oauthTokenSecret):pt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(t){const n=typeof t=="string"?JSON.parse(t):t,{providerId:r,signInMethod:i}=n,s=ss(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new se(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(t){const n=this.buildRequest();return ve(t,n)}_linkToIdToken(t,n){const r=this.buildRequest();return r.idToken=n,ve(t,r)}_getReauthenticationResolver(t){const n=this.buildRequest();return n.autoCreate=!1,ve(t,n)}buildRequest(){const t={requestUri:$d,returnSecureToken:!0};if(this.pendingToken)t.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),t.postBody=En(n)}return t}}/**
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
 */function qd(e){switch(e){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function Hd(e){const t=$e(qe(e)).link,n=t?$e(qe(t)).deep_link_id:null,r=$e(qe(e)).deep_link_id;return(r?$e(qe(r)).link:null)||r||n||t||e}class hs{constructor(t){var n,r,i,s,o,a;const c=$e(qe(t)),l=(n=c.apiKey)!==null&&n!==void 0?n:null,u=(r=c.oobCode)!==null&&r!==void 0?r:null,h=qd((i=c.mode)!==null&&i!==void 0?i:null);v(l&&u&&h,"argument-error"),this.apiKey=l,this.operation=h,this.code=u,this.continueUrl=(s=c.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=c.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=c.tenantId)!==null&&a!==void 0?a:null}static parseLink(t){const n=Hd(t);try{return new hs(n)}catch{return null}}}/**
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
 */class De{constructor(){this.providerId=De.PROVIDER_ID}static credential(t,n){return nn._fromEmailAndPassword(t,n)}static credentialWithLink(t,n){const r=hs.parseLink(n);return v(r,"argument-error"),nn._fromEmailAndCode(t,r.code,r.tenantId)}}De.PROVIDER_ID="password";De.EMAIL_PASSWORD_SIGN_IN_METHOD="password";De.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class ic{constructor(t){this.providerId=t,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(t){this.defaultLanguageCode=t}setCustomParameters(t){return this.customParameters=t,this}getCustomParameters(){return this.customParameters}}/**
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
 */class wn extends ic{constructor(){super(...arguments),this.scopes=[]}addScope(t){return this.scopes.includes(t)||this.scopes.push(t),this}getScopes(){return[...this.scopes]}}/**
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
 */class Dt extends wn{constructor(){super("facebook.com")}static credential(t){return se._fromParams({providerId:Dt.PROVIDER_ID,signInMethod:Dt.FACEBOOK_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return Dt.credentialFromTaggedObject(t)}static credentialFromError(t){return Dt.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return Dt.credential(t.oauthAccessToken)}catch{return null}}}Dt.FACEBOOK_SIGN_IN_METHOD="facebook.com";Dt.PROVIDER_ID="facebook.com";/**
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
 */class Vt extends wn{constructor(){super("google.com"),this.addScope("profile")}static credential(t,n){return se._fromParams({providerId:Vt.PROVIDER_ID,signInMethod:Vt.GOOGLE_SIGN_IN_METHOD,idToken:t,accessToken:n})}static credentialFromResult(t){return Vt.credentialFromTaggedObject(t)}static credentialFromError(t){return Vt.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthIdToken:n,oauthAccessToken:r}=t;if(!n&&!r)return null;try{return Vt.credential(n,r)}catch{return null}}}Vt.GOOGLE_SIGN_IN_METHOD="google.com";Vt.PROVIDER_ID="google.com";/**
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
 */class Ot extends wn{constructor(){super("github.com")}static credential(t){return se._fromParams({providerId:Ot.PROVIDER_ID,signInMethod:Ot.GITHUB_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return Ot.credentialFromTaggedObject(t)}static credentialFromError(t){return Ot.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return Ot.credential(t.oauthAccessToken)}catch{return null}}}Ot.GITHUB_SIGN_IN_METHOD="github.com";Ot.PROVIDER_ID="github.com";/**
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
 */class Mt extends wn{constructor(){super("twitter.com")}static credential(t,n){return se._fromParams({providerId:Mt.PROVIDER_ID,signInMethod:Mt.TWITTER_SIGN_IN_METHOD,oauthToken:t,oauthTokenSecret:n})}static credentialFromResult(t){return Mt.credentialFromTaggedObject(t)}static credentialFromError(t){return Mt.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=t;if(!n||!r)return null;try{return Mt.credential(n,r)}catch{return null}}}Mt.TWITTER_SIGN_IN_METHOD="twitter.com";Mt.PROVIDER_ID="twitter.com";/**
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
 */async function Gd(e,t){return Tn(e,"POST","/v1/accounts:signUp",le(e,t))}/**
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
 */class $t{constructor(t){this.user=t.user,this.providerId=t.providerId,this._tokenResponse=t._tokenResponse,this.operationType=t.operationType}static async _fromIdTokenResponse(t,n,r,i=!1){const s=await ee._fromIdTokenResponse(t,r,i),o=Ro(r);return new $t({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(t,n,r){await t._updateTokensIfNecessary(r,!0);const i=Ro(r);return new $t({user:t,providerId:i,_tokenResponse:r,operationType:n})}}function Ro(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}/**
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
 */async function zd(e){var t;const n=he(e);if(await n._initializationPromise,!((t=n.currentUser)===null||t===void 0)&&t.isAnonymous)return new $t({user:n.currentUser,providerId:null,operationType:"signIn"});const r=await Gd(n,{returnSecureToken:!0}),i=await $t._fromIdTokenResponse(n,"signIn",r,!0);return await n._updateCurrentUser(i.user),i}/**
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
 */class ur extends kt{constructor(t,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,ur.prototype),this.customData={appName:t.name,tenantId:(s=t.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(t,n,r,i){return new ur(t,n,r,i)}}function sc(e,t,n,r){return(t==="reauthenticate"?n._getReauthenticationResolver(e):n._getIdTokenResponse(e)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?ur._fromErrorAndOperation(e,s,t,r):s})}async function Wd(e,t,n=!1){const r=await tn(e,t._linkToIdToken(e.auth,await e.getIdToken()),n);return $t._forOperation(e,"link",r)}/**
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
 */async function Kd(e,t,n=!1){const{auth:r}=e,i="reauthenticate";try{const s=await tn(e,sc(r,i,t,e),n);v(s.idToken,r,"internal-error");const o=cs(s.idToken);v(o,r,"internal-error");const{sub:a}=o;return v(e.uid===a,r,"user-mismatch"),$t._forOperation(e,i,s)}catch(s){throw s?.code==="auth/user-not-found"&&pt(r,"user-mismatch"),s}}/**
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
 */async function oc(e,t,n=!1){const r="signIn",i=await sc(e,r,t),s=await $t._fromIdTokenResponse(e,r,i);return n||await e._updateCurrentUser(s.user),s}async function Qd(e,t){return oc(he(e),t)}/**
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
 */async function Jd(e){const t=he(e);t._getPasswordPolicyInternal()&&await t._updatePasswordPolicy()}function Yd(e,t,n){return Qd(q(e),De.credential(t,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&Jd(e),r})}function Xd(e,t,n,r){return q(e).onIdTokenChanged(t,n,r)}function Zd(e,t,n){return q(e).beforeAuthStateChanged(t,n)}function tf(e,t,n,r){return q(e).onAuthStateChanged(t,n,r)}const hr="__sak";/**
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
 */class ac{constructor(t,n){this.storageRetriever=t,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(hr,"1"),this.storage.removeItem(hr),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(t,n){return this.storage.setItem(t,JSON.stringify(n)),Promise.resolve()}_get(t){const n=this.storage.getItem(t);return Promise.resolve(n?JSON.parse(n):null)}_remove(t){return this.storage.removeItem(t),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function ef(){const e=rt();return ls(e)||Pr(e)}const nf=1e3,rf=10;class cc extends ac{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(t,n)=>this.onStorageEvent(t,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=ef()&&Td(),this.fallbackToPolling=tc(),this._shouldAllowMigration=!0}forAllChangedKeys(t){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&t(n,i,r)}}onStorageEvent(t,n=!1){if(!t.key){this.forAllChangedKeys((o,a,c)=>{this.notifyListeners(o,c)});return}const r=t.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(t.newValue!==o)t.newValue!==null?this.storage.setItem(r,t.newValue):this.storage.removeItem(r);else if(this.localCache[r]===t.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);Id()&&s!==t.newValue&&t.newValue!==t.oldValue?setTimeout(i,rf):i()}notifyListeners(t,n){this.localCache[t]=n;const r=this.listeners[t];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((t,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:t,oldValue:n,newValue:r}),!0)})},nf)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(t,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[t]||(this.listeners[t]=new Set,this.localCache[t]=this.storage.getItem(t)),this.listeners[t].add(n)}_removeListener(t,n){this.listeners[t]&&(this.listeners[t].delete(n),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(t,n){await super._set(t,n),this.localCache[t]=JSON.stringify(n)}async _get(t){const n=await super._get(t);return this.localCache[t]=JSON.stringify(n),n}async _remove(t){await super._remove(t),delete this.localCache[t]}}cc.type="LOCAL";const sf=cc;/**
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
 */class lc extends ac{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(t,n){}_removeListener(t,n){}}lc.type="SESSION";const uc=lc;/**
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
 */function of(e){return Promise.all(e.map(async t=>{try{return{fulfilled:!0,value:await t}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class Sr{constructor(t){this.eventTarget=t,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(t){const n=this.receivers.find(i=>i.isListeningto(t));if(n)return n;const r=new Sr(t);return this.receivers.push(r),r}isListeningto(t){return this.eventTarget===t}async handleEvent(t){const n=t,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!o?.size)return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async l=>l(n.origin,s)),c=await of(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:c})}_subscribe(t,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[t]||(this.handlersMap[t]=new Set),this.handlersMap[t].add(n)}_unsubscribe(t,n){this.handlersMap[t]&&n&&this.handlersMap[t].delete(n),(!n||this.handlersMap[t].size===0)&&delete this.handlersMap[t],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Sr.receivers=[];/**
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
 */function ds(e="",t=10){let n="";for(let r=0;r<t;r++)n+=Math.floor(Math.random()*10);return e+n}/**
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
 */class af{constructor(t){this.target=t,this.handlers=new Set}removeMessageHandler(t){t.messageChannel&&(t.messageChannel.port1.removeEventListener("message",t.onMessage),t.messageChannel.port1.close()),this.handlers.delete(t)}async _send(t,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,c)=>{const l=ds("",20);i.port1.start();const u=setTimeout(()=>{c(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(h){const f=h;if(f.data.eventId===l)switch(f.data.status){case"ack":clearTimeout(u),s=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(f.data.response);break;default:clearTimeout(u),clearTimeout(s),c(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:t,eventId:l,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function It(){return window}function cf(e){It().location.href=e}/**
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
 */function hc(){return typeof It().WorkerGlobalScope<"u"&&typeof It().importScripts=="function"}async function lf(){if(!navigator?.serviceWorker)return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function uf(){var e;return((e=navigator?.serviceWorker)===null||e===void 0?void 0:e.controller)||null}function hf(){return hc()?self:null}/**
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
 */const dc="firebaseLocalStorageDb",df=1,dr="firebaseLocalStorage",fc="fbase_key";class An{constructor(t){this.request=t}toPromise(){return new Promise((t,n)=>{this.request.addEventListener("success",()=>{t(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Cr(e,t){return e.transaction([dr],t?"readwrite":"readonly").objectStore(dr)}function ff(){const e=indexedDB.deleteDatabase(dc);return new An(e).toPromise()}function Vi(){const e=indexedDB.open(dc,df);return new Promise((t,n)=>{e.addEventListener("error",()=>{n(e.error)}),e.addEventListener("upgradeneeded",()=>{const r=e.result;try{r.createObjectStore(dr,{keyPath:fc})}catch(i){n(i)}}),e.addEventListener("success",async()=>{const r=e.result;r.objectStoreNames.contains(dr)?t(r):(r.close(),await ff(),t(await Vi()))})})}async function Po(e,t,n){const r=Cr(e,!0).put({[fc]:t,value:n});return new An(r).toPromise()}async function pf(e,t){const n=Cr(e,!1).get(t),r=await new An(n).toPromise();return r===void 0?null:r.value}function So(e,t){const n=Cr(e,!0).delete(t);return new An(n).toPromise()}const gf=800,mf=3;class pc{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Vi(),this.db)}async _withRetries(t){let n=0;for(;;)try{const r=await this._openDb();return await t(r)}catch(r){if(n++>mf)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return hc()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Sr._getInstance(hf()),this.receiver._subscribe("keyChanged",async(t,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(t,n)=>["keyChanged"])}async initializeSender(){var t,n;if(this.activeServiceWorker=await lf(),!this.activeServiceWorker)return;this.sender=new af(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((t=r[0])===null||t===void 0)&&t.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(t){if(!(!this.sender||!this.activeServiceWorker||uf()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:t},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const t=await Vi();return await Po(t,hr,"1"),await So(t,hr),!0}catch{}return!1}async _withPendingWrite(t){this.pendingWrites++;try{await t()}finally{this.pendingWrites--}}async _set(t,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Po(r,t,n)),this.localCache[t]=n,this.notifyServiceWorker(t)))}async _get(t){const n=await this._withRetries(r=>pf(r,t));return this.localCache[t]=n,n}async _remove(t){return this._withPendingWrite(async()=>(await this._withRetries(n=>So(n,t)),delete this.localCache[t],this.notifyServiceWorker(t)))}async _poll(){const t=await this._withRetries(i=>{const s=Cr(i,!1).getAll();return new An(s).toPromise()});if(!t)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:i,value:s}of t)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(t,n){this.localCache[t]=n;const r=this.listeners[t];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),gf)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(t,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[t]||(this.listeners[t]=new Set,this._get(t)),this.listeners[t].add(n)}_removeListener(t,n){this.listeners[t]&&(this.listeners[t].delete(n),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&this.stopPolling()}}pc.type="LOCAL";const _f=pc;new In(3e4,6e4);/**
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
 */function yf(e,t){return t?Rt(t):(v(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}/**
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
 */class fs extends us{constructor(t){super("custom","custom"),this.params=t}_getIdTokenResponse(t){return ve(t,this._buildIdpRequest())}_linkToIdToken(t,n){return ve(t,this._buildIdpRequest(n))}_getReauthenticationResolver(t){return ve(t,this._buildIdpRequest())}_buildIdpRequest(t){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return t&&(n.idToken=t),n}}function vf(e){return oc(e.auth,new fs(e),e.bypassAuthState)}function Ef(e){const{auth:t,user:n}=e;return v(n,t,"internal-error"),Kd(n,new fs(e),e.bypassAuthState)}async function If(e){const{auth:t,user:n}=e;return v(n,t,"internal-error"),Wd(n,new fs(e),e.bypassAuthState)}/**
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
 */class gc{constructor(t,n,r,i,s=!1){this.auth=t,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(t,n)=>{this.pendingPromise={resolve:t,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(t){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=t;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(c))}catch(l){this.reject(l)}}onError(t){this.reject(t)}getIdpTask(t){switch(t){case"signInViaPopup":case"signInViaRedirect":return vf;case"linkViaPopup":case"linkViaRedirect":return If;case"reauthViaPopup":case"reauthViaRedirect":return Ef;default:pt(this.auth,"internal-error")}}resolve(t){St(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(t),this.unregisterAndCleanUp()}reject(t){St(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(t),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const Tf=new In(2e3,1e4);class me extends gc{constructor(t,n,r,i,s){super(t,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,me.currentPopupAction&&me.currentPopupAction.cancel(),me.currentPopupAction=this}async executeNotNull(){const t=await this.execute();return v(t,this.auth,"internal-error"),t}async onExecution(){St(this.filter.length===1,"Popup operations only handle one event");const t=ds();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],t),this.authWindow.associatedEvent=t,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Et(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var t;return((t=this.authWindow)===null||t===void 0?void 0:t.associatedEvent)||null}cancel(){this.reject(Et(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,me.currentPopupAction=null}pollUserCancellation(){const t=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Et(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(t,Tf.get())};t()}}me.currentPopupAction=null;/**
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
 */const wf="pendingRedirect",tr=new Map;class Af extends gc{constructor(t,n,r=!1){super(t,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let t=tr.get(this.auth._key());if(!t){try{const r=await Rf(this.resolver,this.auth)?await super.execute():null;t=()=>Promise.resolve(r)}catch(n){t=()=>Promise.reject(n)}tr.set(this.auth._key(),t)}return this.bypassAuthState||tr.set(this.auth._key(),()=>Promise.resolve(null)),t()}async onAuthEvent(t){if(t.type==="signInViaRedirect")return super.onAuthEvent(t);if(t.type==="unknown"){this.resolve(null);return}if(t.eventId){const n=await this.auth._redirectUserForId(t.eventId);if(n)return this.user=n,super.onAuthEvent(t);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Rf(e,t){const n=Cf(t),r=Sf(e);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function Pf(e,t){tr.set(e._key(),t)}function Sf(e){return Rt(e._redirectPersistence)}function Cf(e){return Zn(wf,e.config.apiKey,e.name)}async function bf(e,t,n=!1){const r=he(e),i=yf(r,t),o=await new Af(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,t)),o}/**
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
 */const kf=10*60*1e3;class Nf{constructor(t){this.auth=t,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(t){this.consumers.add(t),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,t)&&(this.sendToConsumer(this.queuedRedirectEvent,t),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(t){this.consumers.delete(t)}onEvent(t){if(this.hasEventBeenHandled(t))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(t,r)&&(n=!0,this.sendToConsumer(t,r),this.saveEventToCache(t))}),this.hasHandledPotentialRedirect||!Df(t)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=t,n=!0)),n}sendToConsumer(t,n){var r;if(t.error&&!mc(t)){const i=((r=t.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(Et(this.auth,i))}else n.onAuthEvent(t)}isEventForConsumer(t,n){const r=n.eventId===null||!!t.eventId&&t.eventId===n.eventId;return n.filter.includes(t.type)&&r}hasEventBeenHandled(t){return Date.now()-this.lastProcessedEventTime>=kf&&this.cachedEventUids.clear(),this.cachedEventUids.has(Co(t))}saveEventToCache(t){this.cachedEventUids.add(Co(t)),this.lastProcessedEventTime=Date.now()}}function Co(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter(t=>t).join("-")}function mc({type:e,error:t}){return e==="unknown"&&t?.code==="auth/no-auth-event"}function Df(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return mc(e);default:return!1}}/**
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
 */async function Vf(e,t={}){return ue(e,"GET","/v1/projects",t)}/**
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
 */const Of=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Mf=/^https?/;async function Lf(e){if(e.config.emulator)return;const{authorizedDomains:t}=await Vf(e);for(const n of t)try{if(Ff(n))return}catch{}pt(e,"unauthorized-domain")}function Ff(e){const t=Di(),{protocol:n,hostname:r}=new URL(t);if(e.startsWith("chrome-extension://")){const o=new URL(e);return o.hostname===""&&r===""?n==="chrome-extension:"&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!Mf.test(n))return!1;if(Of.test(e))return r===e;const i=e.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const xf=new In(3e4,6e4);function bo(){const e=It().___jsl;if(e?.H){for(const t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let n=0;n<e.CP.length;n++)e.CP[n]=null}}function Uf(e){return new Promise((t,n)=>{var r,i,s;function o(){bo(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{bo(),n(Et(e,"network-request-failed"))},timeout:xf.get()})}if(!((i=(r=It().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)t(gapi.iframes.getContext());else if(!((s=It().gapi)===null||s===void 0)&&s.load)o();else{const a=bd("iframefcb");return It()[a]=()=>{gapi.load?o():n(Et(e,"network-request-failed"))},nc(`https://apis.google.com/js/api.js?onload=${a}`).catch(c=>n(c))}}).catch(t=>{throw er=null,t})}let er=null;function Bf(e){return er=er||Uf(e),er}/**
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
 */const jf=new In(5e3,15e3),$f="__/auth/iframe",qf="emulator/auth/iframe",Hf={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Gf=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function zf(e){const t=e.config;v(t.authDomain,e,"auth-domain-config-required");const n=t.emulator?as(t,qf):`https://${e.config.authDomain}/${$f}`,r={apiKey:t.apiKey,appName:e.name,v:Ne},i=Gf.get(e.config.apiHost);i&&(r.eid=i);const s=e._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${En(r).slice(1)}`}async function Wf(e){const t=await Bf(e),n=It().gapi;return v(n,e,"internal-error"),t.open({where:document.body,url:zf(e),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Hf,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=Et(e,"network-request-failed"),a=It().setTimeout(()=>{s(o)},jf.get());function c(){It().clearTimeout(a),i(r)}r.ping(c).then(c,()=>{s(o)})}))}/**
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
 */const Kf={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Qf=500,Jf=600,Yf="_blank",Xf="http://localhost";class ko{constructor(t){this.window=t,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Zf(e,t,n,r=Qf,i=Jf){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const c=Object.assign(Object.assign({},Kf),{width:r.toString(),height:i.toString(),top:s,left:o}),l=rt().toLowerCase();n&&(a=Qa(l)?Yf:n),Ka(l)&&(t=t||Xf,c.scrollbars="yes");const u=Object.entries(c).reduce((f,[m,I])=>`${f}${m}=${I},`,"");if(Ed(l)&&a!=="_self")return tp(t||"",a),new ko(null);const h=window.open(t||"",a,u);v(h,e,"popup-blocked");try{h.focus()}catch{}return new ko(h)}function tp(e,t){const n=document.createElement("a");n.href=e,n.target=t;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const ep="__/auth/handler",np="emulator/auth/handler",rp=encodeURIComponent("fac");async function No(e,t,n,r,i,s){v(e.config.authDomain,e,"auth-domain-config-required"),v(e.config.apiKey,e,"invalid-api-key");const o={apiKey:e.config.apiKey,appName:e.name,authType:n,redirectUrl:r,v:Ne,eventId:i};if(t instanceof ic){t.setDefaultLanguage(e.languageCode),o.providerId=t.providerId||"",$u(t.getCustomParameters())||(o.customParameters=JSON.stringify(t.getCustomParameters()));for(const[u,h]of Object.entries(s||{}))o[u]=h}if(t instanceof wn){const u=t.getScopes().filter(h=>h!=="");u.length>0&&(o.scopes=u.join(","))}e.tenantId&&(o.tid=e.tenantId);const a=o;for(const u of Object.keys(a))a[u]===void 0&&delete a[u];const c=await e._getAppCheckToken(),l=c?`#${rp}=${encodeURIComponent(c)}`:"";return`${ip(e)}?${En(a).slice(1)}${l}`}function ip({config:e}){return e.emulator?as(e,np):`https://${e.authDomain}/${ep}`}/**
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
 */const hi="webStorageSupport";class sp{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=uc,this._completeRedirectFn=bf,this._overrideRedirectResult=Pf}async _openPopup(t,n,r,i){var s;St((s=this.eventManagers[t._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await No(t,n,r,Di(),i);return Zf(t,o,ds())}async _openRedirect(t,n,r,i){await this._originValidation(t);const s=await No(t,n,r,Di(),i);return cf(s),new Promise(()=>{})}_initialize(t){const n=t._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(St(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(t);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(t){const n=await Wf(t),r=new Nf(t);return n.register("authEvent",i=>(v(i?.authEvent,t,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[t._key()]={manager:r},this.iframes[t._key()]=n,r}_isIframeWebStorageSupported(t,n){this.iframes[t._key()].send(hi,{type:hi},i=>{var s;const o=(s=i?.[0])===null||s===void 0?void 0:s[hi];o!==void 0&&n(!!o),pt(t,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(t){const n=t._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=Lf(t)),this.originValidationPromises[n]}get _shouldInitProactively(){return tc()||ls()||Pr()}}const op=sp;var Do="@firebase/auth",Vo="1.2.0";/**
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
 */class ap{constructor(t){this.auth=t,this.internalListeners=new Map}getUid(){var t;return this.assertAuthConfigured(),((t=this.auth.currentUser)===null||t===void 0?void 0:t.uid)||null}async getToken(t){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(t)}:null}addAuthTokenListener(t){if(this.assertAuthConfigured(),this.internalListeners.has(t))return;const n=this.auth.onIdTokenChanged(r=>{t(r?.stsTokenManager.accessToken||null)});this.internalListeners.set(t,n),this.updateProactiveRefresh()}removeAuthTokenListener(t){this.assertAuthConfigured();const n=this.internalListeners.get(t);n&&(this.internalListeners.delete(t),n(),this.updateProactiveRefresh())}assertAuthConfigured(){v(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function cp(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function lp(e){Te(new re("auth",(t,{options:n})=>{const r=t.getProvider("app").getImmediate(),i=t.getProvider("heartbeat"),s=t.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;v(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const c={apiKey:o,authDomain:a,clientPlatform:e,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:ec(e)},l=new Sd(r,i,s,c);return Md(l,n),l},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((t,n,r)=>{t.getProvider("auth-internal").initialize()})),Te(new re("auth-internal",t=>{const n=he(t.getProvider("auth").getImmediate());return(r=>new ap(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Ut(Do,Vo,cp(e)),Ut(Do,Vo,"esm2017")}/**
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
 */const up=5*60,hp=Oa("authIdTokenMaxAge")||up;let Oo=null;const dp=e=>async t=>{const n=t&&await t.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>hp)return;const i=n?.token;Oo!==i&&(Oo=i,await fetch(e,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function fp(e=xa()){const t=is(e,"auth");if(t.isInitialized())return t.getImmediate();const n=Od(e,{popupRedirectResolver:op,persistence:[_f,sf,uc]}),r=Oa("authTokenSyncURL");if(r){const s=dp(r);Zd(n,s,()=>s(n.currentUser)),Xd(n,o=>s(o))}const i=Da("auth");return i&&Ld(n,`http://${i}`),n}lp("Browser");var pp=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},g,ps=ps||{},E=pp||self;function br(e){var t=typeof e;return t=t!="object"?t:e?Array.isArray(e)?"array":t:"null",t=="array"||t=="object"&&typeof e.length=="number"}function Rn(e){var t=typeof e;return t=="object"&&e!=null||t=="function"}function gp(e){return Object.prototype.hasOwnProperty.call(e,di)&&e[di]||(e[di]=++mp)}var di="closure_uid_"+(1e9*Math.random()>>>0),mp=0;function _p(e,t,n){return e.call.apply(e.bind,arguments)}function yp(e,t,n){if(!e)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,r),e.apply(t,i)}}return function(){return e.apply(t,arguments)}}function et(e,t,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?et=_p:et=yp,et.apply(null,arguments)}function $n(e,t){var n=Array.prototype.slice.call(arguments,1);return function(){var r=n.slice();return r.push.apply(r,arguments),e.apply(this,r)}}function G(e,t){function n(){}n.prototype=t.prototype,e.$=t.prototype,e.prototype=new n,e.prototype.constructor=e,e.ac=function(r,i,s){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return t.prototype[i].apply(r,o)}}function Wt(){this.s=this.s,this.o=this.o}var vp=0;Wt.prototype.s=!1;Wt.prototype.sa=function(){!this.s&&(this.s=!0,this.N(),vp!=0)&&gp(this)};Wt.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const _c=Array.prototype.indexOf?function(e,t){return Array.prototype.indexOf.call(e,t,void 0)}:function(e,t){if(typeof e=="string")return typeof t!="string"||t.length!=1?-1:e.indexOf(t,0);for(let n=0;n<e.length;n++)if(n in e&&e[n]===t)return n;return-1};function gs(e){const t=e.length;if(0<t){const n=Array(t);for(let r=0;r<t;r++)n[r]=e[r];return n}return[]}function Mo(e,t){for(let n=1;n<arguments.length;n++){const r=arguments[n];if(br(r)){const i=e.length||0,s=r.length||0;e.length=i+s;for(let o=0;o<s;o++)e[i+o]=r[o]}else e.push(r)}}function nt(e,t){this.type=e,this.g=this.target=t,this.defaultPrevented=!1}nt.prototype.h=function(){this.defaultPrevented=!0};var Ep=function(){if(!E.addEventListener||!Object.defineProperty)return!1;var e=!1,t=Object.defineProperty({},"passive",{get:function(){e=!0}});try{E.addEventListener("test",()=>{},t),E.removeEventListener("test",()=>{},t)}catch{}return e}();function rn(e){return/^[\s\xa0]*$/.test(e)}function kr(){var e=E.navigator;return e&&(e=e.userAgent)?e:""}function _t(e){return kr().indexOf(e)!=-1}function ms(e){return ms[" "](e),e}ms[" "]=function(){};function Ip(e,t){var n=fg;return Object.prototype.hasOwnProperty.call(n,e)?n[e]:n[e]=t(e)}var Tp=_t("Opera"),we=_t("Trident")||_t("MSIE"),yc=_t("Edge"),Oi=yc||we,vc=_t("Gecko")&&!(kr().toLowerCase().indexOf("webkit")!=-1&&!_t("Edge"))&&!(_t("Trident")||_t("MSIE"))&&!_t("Edge"),wp=kr().toLowerCase().indexOf("webkit")!=-1&&!_t("Edge");function Ec(){var e=E.document;return e?e.documentMode:void 0}var Mi;t:{var fi="",pi=function(){var e=kr();if(vc)return/rv:([^\);]+)(\)|;)/.exec(e);if(yc)return/Edge\/([\d\.]+)/.exec(e);if(we)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(e);if(wp)return/WebKit\/(\S+)/.exec(e);if(Tp)return/(?:Version)[ \/]?(\S+)/.exec(e)}();if(pi&&(fi=pi?pi[1]:""),we){var gi=Ec();if(gi!=null&&gi>parseFloat(fi)){Mi=String(gi);break t}}Mi=fi}var Li;if(E.document&&we){var Lo=Ec();Li=Lo||parseInt(Mi,10)||void 0}else Li=void 0;var Ap=Li;function sn(e,t){if(nt.call(this,e?e.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,e){var n=this.type=e.type,r=e.changedTouches&&e.changedTouches.length?e.changedTouches[0]:null;if(this.target=e.target||e.srcElement,this.g=t,t=e.relatedTarget){if(vc){t:{try{ms(t.nodeName);var i=!0;break t}catch{}i=!1}i||(t=null)}}else n=="mouseover"?t=e.fromElement:n=="mouseout"&&(t=e.toElement);this.relatedTarget=t,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=e.clientX!==void 0?e.clientX:e.pageX,this.clientY=e.clientY!==void 0?e.clientY:e.pageY,this.screenX=e.screenX||0,this.screenY=e.screenY||0),this.button=e.button,this.key=e.key||"",this.ctrlKey=e.ctrlKey,this.altKey=e.altKey,this.shiftKey=e.shiftKey,this.metaKey=e.metaKey,this.pointerId=e.pointerId||0,this.pointerType=typeof e.pointerType=="string"?e.pointerType:Rp[e.pointerType]||"",this.state=e.state,this.i=e,e.defaultPrevented&&sn.$.h.call(this)}}G(sn,nt);var Rp={2:"touch",3:"pen",4:"mouse"};sn.prototype.h=function(){sn.$.h.call(this);var e=this.i;e.preventDefault?e.preventDefault():e.returnValue=!1};var Pn="closure_listenable_"+(1e6*Math.random()|0),Pp=0;function Sp(e,t,n,r,i){this.listener=e,this.proxy=null,this.src=t,this.type=n,this.capture=!!r,this.la=i,this.key=++Pp,this.fa=this.ia=!1}function Nr(e){e.fa=!0,e.listener=null,e.proxy=null,e.src=null,e.la=null}function _s(e,t,n){for(const r in e)t.call(n,e[r],r,e)}function Cp(e,t){for(const n in e)t.call(void 0,e[n],n,e)}function Ic(e){const t={};for(const n in e)t[n]=e[n];return t}const Fo="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Tc(e,t){let n,r;for(let i=1;i<arguments.length;i++){r=arguments[i];for(n in r)e[n]=r[n];for(let s=0;s<Fo.length;s++)n=Fo[s],Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}}function Dr(e){this.src=e,this.g={},this.h=0}Dr.prototype.add=function(e,t,n,r,i){var s=e.toString();e=this.g[s],e||(e=this.g[s]=[],this.h++);var o=xi(e,t,r,i);return-1<o?(t=e[o],n||(t.ia=!1)):(t=new Sp(t,this.src,s,!!r,i),t.ia=n,e.push(t)),t};function Fi(e,t){var n=t.type;if(n in e.g){var r=e.g[n],i=_c(r,t),s;(s=0<=i)&&Array.prototype.splice.call(r,i,1),s&&(Nr(t),e.g[n].length==0&&(delete e.g[n],e.h--))}}function xi(e,t,n,r){for(var i=0;i<e.length;++i){var s=e[i];if(!s.fa&&s.listener==t&&s.capture==!!n&&s.la==r)return i}return-1}var ys="closure_lm_"+(1e6*Math.random()|0),mi={};function wc(e,t,n,r,i){if(r&&r.once)return Rc(e,t,n,r,i);if(Array.isArray(t)){for(var s=0;s<t.length;s++)wc(e,t[s],n,r,i);return null}return n=Is(n),e&&e[Pn]?e.O(t,n,Rn(r)?!!r.capture:!!r,i):Ac(e,t,n,!1,r,i)}function Ac(e,t,n,r,i,s){if(!t)throw Error("Invalid event type");var o=Rn(i)?!!i.capture:!!i,a=Es(e);if(a||(e[ys]=a=new Dr(e)),n=a.add(t,n,r,o,s),n.proxy)return n;if(r=bp(),n.proxy=r,r.src=e,r.listener=n,e.addEventListener)Ep||(i=o),i===void 0&&(i=!1),e.addEventListener(t.toString(),r,i);else if(e.attachEvent)e.attachEvent(Sc(t.toString()),r);else if(e.addListener&&e.removeListener)e.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return n}function bp(){function e(n){return t.call(e.src,e.listener,n)}const t=kp;return e}function Rc(e,t,n,r,i){if(Array.isArray(t)){for(var s=0;s<t.length;s++)Rc(e,t[s],n,r,i);return null}return n=Is(n),e&&e[Pn]?e.P(t,n,Rn(r)?!!r.capture:!!r,i):Ac(e,t,n,!0,r,i)}function Pc(e,t,n,r,i){if(Array.isArray(t))for(var s=0;s<t.length;s++)Pc(e,t[s],n,r,i);else r=Rn(r)?!!r.capture:!!r,n=Is(n),e&&e[Pn]?(e=e.i,t=String(t).toString(),t in e.g&&(s=e.g[t],n=xi(s,n,r,i),-1<n&&(Nr(s[n]),Array.prototype.splice.call(s,n,1),s.length==0&&(delete e.g[t],e.h--)))):e&&(e=Es(e))&&(t=e.g[t.toString()],e=-1,t&&(e=xi(t,n,r,i)),(n=-1<e?t[e]:null)&&vs(n))}function vs(e){if(typeof e!="number"&&e&&!e.fa){var t=e.src;if(t&&t[Pn])Fi(t.i,e);else{var n=e.type,r=e.proxy;t.removeEventListener?t.removeEventListener(n,r,e.capture):t.detachEvent?t.detachEvent(Sc(n),r):t.addListener&&t.removeListener&&t.removeListener(r),(n=Es(t))?(Fi(n,e),n.h==0&&(n.src=null,t[ys]=null)):Nr(e)}}}function Sc(e){return e in mi?mi[e]:mi[e]="on"+e}function kp(e,t){if(e.fa)e=!0;else{t=new sn(t,this);var n=e.listener,r=e.la||e.src;e.ia&&vs(e),e=n.call(r,t)}return e}function Es(e){return e=e[ys],e instanceof Dr?e:null}var _i="__closure_events_fn_"+(1e9*Math.random()>>>0);function Is(e){return typeof e=="function"?e:(e[_i]||(e[_i]=function(t){return e.handleEvent(t)}),e[_i])}function H(){Wt.call(this),this.i=new Dr(this),this.S=this,this.J=null}G(H,Wt);H.prototype[Pn]=!0;H.prototype.removeEventListener=function(e,t,n,r){Pc(this,e,t,n,r)};function J(e,t){var n,r=e.J;if(r)for(n=[];r;r=r.J)n.push(r);if(e=e.S,r=t.type||t,typeof t=="string")t=new nt(t,e);else if(t instanceof nt)t.target=t.target||e;else{var i=t;t=new nt(r,e),Tc(t,i)}if(i=!0,n)for(var s=n.length-1;0<=s;s--){var o=t.g=n[s];i=qn(o,r,!0,t)&&i}if(o=t.g=e,i=qn(o,r,!0,t)&&i,i=qn(o,r,!1,t)&&i,n)for(s=0;s<n.length;s++)o=t.g=n[s],i=qn(o,r,!1,t)&&i}H.prototype.N=function(){if(H.$.N.call(this),this.i){var e=this.i,t;for(t in e.g){for(var n=e.g[t],r=0;r<n.length;r++)Nr(n[r]);delete e.g[t],e.h--}}this.J=null};H.prototype.O=function(e,t,n,r){return this.i.add(String(e),t,!1,n,r)};H.prototype.P=function(e,t,n,r){return this.i.add(String(e),t,!0,n,r)};function qn(e,t,n,r){if(t=e.i.g[String(t)],!t)return!0;t=t.concat();for(var i=!0,s=0;s<t.length;++s){var o=t[s];if(o&&!o.fa&&o.capture==n){var a=o.listener,c=o.la||o.src;o.ia&&Fi(e.i,o),i=a.call(c,r)!==!1&&i}}return i&&!r.defaultPrevented}var Ts=E.JSON.stringify;class Np{constructor(t,n){this.i=t,this.j=n,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}function Dp(){var e=ws;let t=null;return e.g&&(t=e.g,e.g=e.g.next,e.g||(e.h=null),t.next=null),t}class Vp{constructor(){this.h=this.g=null}add(t,n){const r=Cc.get();r.set(t,n),this.h?this.h.next=r:this.g=r,this.h=r}}var Cc=new Np(()=>new Op,e=>e.reset());class Op{constructor(){this.next=this.g=this.h=null}set(t,n){this.h=t,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function Mp(e){var t=1;e=e.split(":");const n=[];for(;0<t&&e.length;)n.push(e.shift()),t--;return e.length&&n.push(e.join(":")),n}function Lp(e){E.setTimeout(()=>{throw e},0)}let on,an=!1,ws=new Vp,bc=()=>{const e=E.Promise.resolve(void 0);on=()=>{e.then(Fp)}};var Fp=()=>{for(var e;e=Dp();){try{e.h.call(e.g)}catch(n){Lp(n)}var t=Cc;t.j(e),100>t.h&&(t.h++,e.next=t.g,t.g=e)}an=!1};function Vr(e,t){H.call(this),this.h=e||1,this.g=t||E,this.j=et(this.qb,this),this.l=Date.now()}G(Vr,H);g=Vr.prototype;g.ga=!1;g.T=null;g.qb=function(){if(this.ga){var e=Date.now()-this.l;0<e&&e<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-e):(this.T&&(this.g.clearTimeout(this.T),this.T=null),J(this,"tick"),this.ga&&(As(this),this.start()))}};g.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function As(e){e.ga=!1,e.T&&(e.g.clearTimeout(e.T),e.T=null)}g.N=function(){Vr.$.N.call(this),As(this),delete this.g};function Rs(e,t,n){if(typeof e=="function")n&&(e=et(e,n));else if(e&&typeof e.handleEvent=="function")e=et(e.handleEvent,e);else throw Error("Invalid listener argument");return 2147483647<Number(t)?-1:E.setTimeout(e,t||0)}function kc(e){e.g=Rs(()=>{e.g=null,e.i&&(e.i=!1,kc(e))},e.j);const t=e.h;e.h=null,e.m.apply(null,t)}class xp extends Wt{constructor(t,n){super(),this.m=t,this.j=n,this.h=null,this.i=!1,this.g=null}l(t){this.h=arguments,this.g?this.i=!0:kc(this)}N(){super.N(),this.g&&(E.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function cn(e){Wt.call(this),this.h=e,this.g={}}G(cn,Wt);var xo=[];function Nc(e,t,n,r){Array.isArray(n)||(n&&(xo[0]=n.toString()),n=xo);for(var i=0;i<n.length;i++){var s=wc(t,n[i],r||e.handleEvent,!1,e.h||e);if(!s)break;e.g[s.key]=s}}function Dc(e){_s(e.g,function(t,n){this.g.hasOwnProperty(n)&&vs(t)},e),e.g={}}cn.prototype.N=function(){cn.$.N.call(this),Dc(this)};cn.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function Or(){this.g=!0}Or.prototype.Ea=function(){this.g=!1};function Up(e,t,n,r,i,s){e.info(function(){if(e.g)if(s)for(var o="",a=s.split("&"),c=0;c<a.length;c++){var l=a[c].split("=");if(1<l.length){var u=l[0];l=l[1];var h=u.split("_");o=2<=h.length&&h[1]=="type"?o+(u+"="+l+"&"):o+(u+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+t+`
`+n+`
`+o})}function Bp(e,t,n,r,i,s,o){e.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+t+`
`+n+`
`+s+" "+o})}function _e(e,t,n,r){e.info(function(){return"XMLHTTP TEXT ("+t+"): "+$p(e,n)+(r?" "+r:"")})}function jp(e,t){e.info(function(){return"TIMEOUT: "+t})}Or.prototype.info=function(){};function $p(e,t){if(!e.g)return t;if(!t)return null;try{var n=JSON.parse(t);if(n){for(e=0;e<n.length;e++)if(Array.isArray(n[e])){var r=n[e];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var s=i[0];if(s!="noop"&&s!="stop"&&s!="close")for(var o=1;o<i.length;o++)i[o]=""}}}}return Ts(n)}catch{return t}}var de={},Uo=null;function Mr(){return Uo=Uo||new H}de.Ta="serverreachability";function Vc(e){nt.call(this,de.Ta,e)}G(Vc,nt);function ln(e){const t=Mr();J(t,new Vc(t))}de.STAT_EVENT="statevent";function Oc(e,t){nt.call(this,de.STAT_EVENT,e),this.stat=t}G(Oc,nt);function it(e){const t=Mr();J(t,new Oc(t,e))}de.Ua="timingevent";function Mc(e,t){nt.call(this,de.Ua,e),this.size=t}G(Mc,nt);function Sn(e,t){if(typeof e!="function")throw Error("Fn must not be null and must be a function");return E.setTimeout(function(){e()},t)}var Lr={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},Lc={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function Ps(){}Ps.prototype.h=null;function Bo(e){return e.h||(e.h=e.i())}function Fc(){}var Cn={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function Ss(){nt.call(this,"d")}G(Ss,nt);function Cs(){nt.call(this,"c")}G(Cs,nt);var Ui;function Fr(){}G(Fr,Ps);Fr.prototype.g=function(){return new XMLHttpRequest};Fr.prototype.i=function(){return{}};Ui=new Fr;function bn(e,t,n,r){this.l=e,this.j=t,this.m=n,this.W=r||1,this.U=new cn(this),this.P=qp,e=Oi?125:void 0,this.V=new Vr(e),this.I=null,this.i=!1,this.s=this.A=this.v=this.L=this.G=this.Y=this.B=null,this.F=[],this.g=null,this.C=0,this.o=this.u=null,this.ca=-1,this.J=!1,this.O=0,this.M=null,this.ba=this.K=this.aa=this.S=!1,this.h=new xc}function xc(){this.i=null,this.g="",this.h=!1}var qp=45e3,Bi={},fr={};g=bn.prototype;g.setTimeout=function(e){this.P=e};function ji(e,t,n){e.L=1,e.v=Ur(Ct(t)),e.s=n,e.S=!0,Uc(e,null)}function Uc(e,t){e.G=Date.now(),kn(e),e.A=Ct(e.v);var n=e.A,r=e.W;Array.isArray(r)||(r=[String(r)]),Wc(n.i,"t",r),e.C=0,n=e.l.J,e.h=new xc,e.g=pl(e.l,n?t:null,!e.s),0<e.O&&(e.M=new xp(et(e.Pa,e,e.g),e.O)),Nc(e.U,e.g,"readystatechange",e.nb),t=e.I?Ic(e.I):{},e.s?(e.u||(e.u="POST"),t["Content-Type"]="application/x-www-form-urlencoded",e.g.ha(e.A,e.u,e.s,t)):(e.u="GET",e.g.ha(e.A,e.u,null,t)),ln(),Up(e.j,e.u,e.A,e.m,e.W,e.s)}g.nb=function(e){e=e.target;const t=this.M;t&&yt(e)==3?t.l():this.Pa(e)};g.Pa=function(e){try{if(e==this.g)t:{const u=yt(this.g);var t=this.g.Ia();const h=this.g.da();if(!(3>u)&&(u!=3||Oi||this.g&&(this.h.h||this.g.ja()||Ho(this.g)))){this.J||u!=4||t==7||(t==8||0>=h?ln(3):ln(2)),xr(this);var n=this.g.da();this.ca=n;e:if(Bc(this)){var r=Ho(this.g);e="";var i=r.length,s=yt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Xt(this),We(this);var o="";break e}this.h.i=new E.TextDecoder}for(t=0;t<i;t++)this.h.h=!0,e+=this.h.i.decode(r[t],{stream:s&&t==i-1});r.splice(0,i),this.h.g+=e,this.C=0,o=this.h.g}else o=this.g.ja();if(this.i=n==200,Bp(this.j,this.u,this.A,this.m,this.W,u,n),this.i){if(this.aa&&!this.K){e:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!rn(a)){var l=a;break e}}l=null}if(n=l)_e(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,$i(this,n);else{this.i=!1,this.o=3,it(12),Xt(this),We(this);break t}}this.S?(jc(this,u,o),Oi&&this.i&&u==3&&(Nc(this.U,this.V,"tick",this.mb),this.V.start())):(_e(this.j,this.m,o,null),$i(this,o)),u==4&&Xt(this),this.i&&!this.J&&(u==4?ul(this.l,this):(this.i=!1,kn(this)))}else ug(this.g),n==400&&0<o.indexOf("Unknown SID")?(this.o=3,it(12)):(this.o=0,it(13)),Xt(this),We(this)}}}catch{}finally{}};function Bc(e){return e.g?e.u=="GET"&&e.L!=2&&e.l.Ha:!1}function jc(e,t,n){let r=!0,i;for(;!e.J&&e.C<n.length;)if(i=Hp(e,n),i==fr){t==4&&(e.o=4,it(14),r=!1),_e(e.j,e.m,null,"[Incomplete Response]");break}else if(i==Bi){e.o=4,it(15),_e(e.j,e.m,n,"[Invalid Chunk]"),r=!1;break}else _e(e.j,e.m,i,null),$i(e,i);Bc(e)&&i!=fr&&i!=Bi&&(e.h.g="",e.C=0),t!=4||n.length!=0||e.h.h||(e.o=1,it(16),r=!1),e.i=e.i&&r,r?0<n.length&&!e.ba&&(e.ba=!0,t=e.l,t.g==e&&t.ca&&!t.M&&(t.l.info("Great, no buffering proxy detected. Bytes received: "+n.length),Os(t),t.M=!0,it(11))):(_e(e.j,e.m,n,"[Invalid Chunked Response]"),Xt(e),We(e))}g.mb=function(){if(this.g){var e=yt(this.g),t=this.g.ja();this.C<t.length&&(xr(this),jc(this,e,t),this.i&&e!=4&&kn(this))}};function Hp(e,t){var n=e.C,r=t.indexOf(`
`,n);return r==-1?fr:(n=Number(t.substring(n,r)),isNaN(n)?Bi:(r+=1,r+n>t.length?fr:(t=t.slice(r,r+n),e.C=r+n,t)))}g.cancel=function(){this.J=!0,Xt(this)};function kn(e){e.Y=Date.now()+e.P,$c(e,e.P)}function $c(e,t){if(e.B!=null)throw Error("WatchDog timer not null");e.B=Sn(et(e.lb,e),t)}function xr(e){e.B&&(E.clearTimeout(e.B),e.B=null)}g.lb=function(){this.B=null;const e=Date.now();0<=e-this.Y?(jp(this.j,this.A),this.L!=2&&(ln(),it(17)),Xt(this),this.o=2,We(this)):$c(this,this.Y-e)};function We(e){e.l.H==0||e.J||ul(e.l,e)}function Xt(e){xr(e);var t=e.M;t&&typeof t.sa=="function"&&t.sa(),e.M=null,As(e.V),Dc(e.U),e.g&&(t=e.g,e.g=null,t.abort(),t.sa())}function $i(e,t){try{var n=e.l;if(n.H!=0&&(n.g==e||qi(n.i,e))){if(!e.K&&qi(n.i,e)&&n.H==3){try{var r=n.Ja.g.parse(t)}catch{r=null}if(Array.isArray(r)&&r.length==3){var i=r;if(i[0]==0){t:if(!n.u){if(n.g)if(n.g.G+3e3<e.G)mr(n),$r(n);else break t;Vs(n),it(18)}}else n.Fa=i[1],0<n.Fa-n.V&&37500>i[2]&&n.G&&n.A==0&&!n.v&&(n.v=Sn(et(n.ib,n),6e3));if(1>=Jc(n.i)&&n.oa){try{n.oa()}catch{}n.oa=void 0}}else Zt(n,11)}else if((e.K||n.g==e)&&mr(n),!rn(t))for(i=n.Ja.g.parse(t),t=0;t<i.length;t++){let l=i[t];if(n.V=l[0],l=l[1],n.H==2)if(l[0]=="c"){n.K=l[1],n.pa=l[2];const u=l[3];u!=null&&(n.ra=u,n.l.info("VER="+n.ra));const h=l[4];h!=null&&(n.Ga=h,n.l.info("SVER="+n.Ga));const f=l[5];f!=null&&typeof f=="number"&&0<f&&(r=1.5*f,n.L=r,n.l.info("backChannelRequestTimeoutMs_="+r)),r=n;const m=e.g;if(m){const I=m.g?m.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(I){var s=r.i;s.g||I.indexOf("spdy")==-1&&I.indexOf("quic")==-1&&I.indexOf("h2")==-1||(s.j=s.l,s.g=new Set,s.h&&(bs(s,s.h),s.h=null))}if(r.F){const S=m.g?m.g.getResponseHeader("X-HTTP-Session-Id"):null;S&&(r.Da=S,N(r.I,r.F,S))}}n.H=3,n.h&&n.h.Ba(),n.ca&&(n.S=Date.now()-e.G,n.l.info("Handshake RTT: "+n.S+"ms")),r=n;var o=e;if(r.wa=fl(r,r.J?r.pa:null,r.Y),o.K){Yc(r.i,o);var a=o,c=r.L;c&&a.setTimeout(c),a.B&&(xr(a),kn(a)),r.g=o}else cl(r);0<n.j.length&&qr(n)}else l[0]!="stop"&&l[0]!="close"||Zt(n,7);else n.H==3&&(l[0]=="stop"||l[0]=="close"?l[0]=="stop"?Zt(n,7):Ds(n):l[0]!="noop"&&n.h&&n.h.Aa(l),n.A=0)}}ln(4)}catch{}}function Gp(e){if(e.Z&&typeof e.Z=="function")return e.Z();if(typeof Map<"u"&&e instanceof Map||typeof Set<"u"&&e instanceof Set)return Array.from(e.values());if(typeof e=="string")return e.split("");if(br(e)){for(var t=[],n=e.length,r=0;r<n;r++)t.push(e[r]);return t}t=[],n=0;for(r in e)t[n++]=e[r];return t}function zp(e){if(e.ta&&typeof e.ta=="function")return e.ta();if(!e.Z||typeof e.Z!="function"){if(typeof Map<"u"&&e instanceof Map)return Array.from(e.keys());if(!(typeof Set<"u"&&e instanceof Set)){if(br(e)||typeof e=="string"){var t=[];e=e.length;for(var n=0;n<e;n++)t.push(n);return t}t=[],n=0;for(const r in e)t[n++]=r;return t}}}function qc(e,t){if(e.forEach&&typeof e.forEach=="function")e.forEach(t,void 0);else if(br(e)||typeof e=="string")Array.prototype.forEach.call(e,t,void 0);else for(var n=zp(e),r=Gp(e),i=r.length,s=0;s<i;s++)t.call(void 0,r[s],n&&n[s],e)}var Hc=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Wp(e,t){if(e){e=e.split("&");for(var n=0;n<e.length;n++){var r=e[n].indexOf("="),i=null;if(0<=r){var s=e[n].substring(0,r);i=e[n].substring(r+1)}else s=e[n];t(s,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function ne(e){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,e instanceof ne){this.h=e.h,pr(this,e.j),this.s=e.s,this.g=e.g,gr(this,e.m),this.l=e.l;var t=e.i,n=new un;n.i=t.i,t.g&&(n.g=new Map(t.g),n.h=t.h),jo(this,n),this.o=e.o}else e&&(t=String(e).match(Hc))?(this.h=!1,pr(this,t[1]||"",!0),this.s=He(t[2]||""),this.g=He(t[3]||"",!0),gr(this,t[4]),this.l=He(t[5]||"",!0),jo(this,t[6]||"",!0),this.o=He(t[7]||"")):(this.h=!1,this.i=new un(null,this.h))}ne.prototype.toString=function(){var e=[],t=this.j;t&&e.push(Ge(t,$o,!0),":");var n=this.g;return(n||t=="file")&&(e.push("//"),(t=this.s)&&e.push(Ge(t,$o,!0),"@"),e.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&e.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&e.push("/"),e.push(Ge(n,n.charAt(0)=="/"?Jp:Qp,!0))),(n=this.i.toString())&&e.push("?",n),(n=this.o)&&e.push("#",Ge(n,Xp)),e.join("")};function Ct(e){return new ne(e)}function pr(e,t,n){e.j=n?He(t,!0):t,e.j&&(e.j=e.j.replace(/:$/,""))}function gr(e,t){if(t){if(t=Number(t),isNaN(t)||0>t)throw Error("Bad port number "+t);e.m=t}else e.m=null}function jo(e,t,n){t instanceof un?(e.i=t,Zp(e.i,e.h)):(n||(t=Ge(t,Yp)),e.i=new un(t,e.h))}function N(e,t,n){e.i.set(t,n)}function Ur(e){return N(e,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),e}function He(e,t){return e?t?decodeURI(e.replace(/%25/g,"%2525")):decodeURIComponent(e):""}function Ge(e,t,n){return typeof e=="string"?(e=encodeURI(e).replace(t,Kp),n&&(e=e.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),e):null}function Kp(e){return e=e.charCodeAt(0),"%"+(e>>4&15).toString(16)+(e&15).toString(16)}var $o=/[#\/\?@]/g,Qp=/[#\?:]/g,Jp=/[#\?]/g,Yp=/[#\?@]/g,Xp=/#/g;function un(e,t){this.h=this.g=null,this.i=e||null,this.j=!!t}function Kt(e){e.g||(e.g=new Map,e.h=0,e.i&&Wp(e.i,function(t,n){e.add(decodeURIComponent(t.replace(/\+/g," ")),n)}))}g=un.prototype;g.add=function(e,t){Kt(this),this.i=null,e=Ve(this,e);var n=this.g.get(e);return n||this.g.set(e,n=[]),n.push(t),this.h+=1,this};function Gc(e,t){Kt(e),t=Ve(e,t),e.g.has(t)&&(e.i=null,e.h-=e.g.get(t).length,e.g.delete(t))}function zc(e,t){return Kt(e),t=Ve(e,t),e.g.has(t)}g.forEach=function(e,t){Kt(this),this.g.forEach(function(n,r){n.forEach(function(i){e.call(t,i,r,this)},this)},this)};g.ta=function(){Kt(this);const e=Array.from(this.g.values()),t=Array.from(this.g.keys()),n=[];for(let r=0;r<t.length;r++){const i=e[r];for(let s=0;s<i.length;s++)n.push(t[r])}return n};g.Z=function(e){Kt(this);let t=[];if(typeof e=="string")zc(this,e)&&(t=t.concat(this.g.get(Ve(this,e))));else{e=Array.from(this.g.values());for(let n=0;n<e.length;n++)t=t.concat(e[n])}return t};g.set=function(e,t){return Kt(this),this.i=null,e=Ve(this,e),zc(this,e)&&(this.h-=this.g.get(e).length),this.g.set(e,[t]),this.h+=1,this};g.get=function(e,t){return e?(e=this.Z(e),0<e.length?String(e[0]):t):t};function Wc(e,t,n){Gc(e,t),0<n.length&&(e.i=null,e.g.set(Ve(e,t),gs(n)),e.h+=n.length)}g.toString=function(){if(this.i)return this.i;if(!this.g)return"";const e=[],t=Array.from(this.g.keys());for(var n=0;n<t.length;n++){var r=t[n];const s=encodeURIComponent(String(r)),o=this.Z(r);for(r=0;r<o.length;r++){var i=s;o[r]!==""&&(i+="="+encodeURIComponent(String(o[r]))),e.push(i)}}return this.i=e.join("&")};function Ve(e,t){return t=String(t),e.j&&(t=t.toLowerCase()),t}function Zp(e,t){t&&!e.j&&(Kt(e),e.i=null,e.g.forEach(function(n,r){var i=r.toLowerCase();r!=i&&(Gc(this,r),Wc(this,i,n))},e)),e.j=t}var tg=class{constructor(e,t){this.g=e,this.map=t}};function Kc(e){this.l=e||eg,E.PerformanceNavigationTiming?(e=E.performance.getEntriesByType("navigation"),e=0<e.length&&(e[0].nextHopProtocol=="hq"||e[0].nextHopProtocol=="h2")):e=!!(E.g&&E.g.Ka&&E.g.Ka()&&E.g.Ka().ec),this.j=e?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var eg=10;function Qc(e){return e.h?!0:e.g?e.g.size>=e.j:!1}function Jc(e){return e.h?1:e.g?e.g.size:0}function qi(e,t){return e.h?e.h==t:e.g?e.g.has(t):!1}function bs(e,t){e.g?e.g.add(t):e.h=t}function Yc(e,t){e.h&&e.h==t?e.h=null:e.g&&e.g.has(t)&&e.g.delete(t)}Kc.prototype.cancel=function(){if(this.i=Xc(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const e of this.g.values())e.cancel();this.g.clear()}};function Xc(e){if(e.h!=null)return e.i.concat(e.h.F);if(e.g!=null&&e.g.size!==0){let t=e.i;for(const n of e.g.values())t=t.concat(n.F);return t}return gs(e.i)}var ng=class{stringify(e){return E.JSON.stringify(e,void 0)}parse(e){return E.JSON.parse(e,void 0)}};function rg(){this.g=new ng}function ig(e,t,n){const r=n||"";try{qc(e,function(i,s){let o=i;Rn(i)&&(o=Ts(i)),t.push(r+s+"="+encodeURIComponent(o))})}catch(i){throw t.push(r+"type="+encodeURIComponent("_badmap")),i}}function sg(e,t){const n=new Or;if(E.Image){const r=new Image;r.onload=$n(Hn,n,r,"TestLoadImage: loaded",!0,t),r.onerror=$n(Hn,n,r,"TestLoadImage: error",!1,t),r.onabort=$n(Hn,n,r,"TestLoadImage: abort",!1,t),r.ontimeout=$n(Hn,n,r,"TestLoadImage: timeout",!1,t),E.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=e}else t(!1)}function Hn(e,t,n,r,i){try{t.onload=null,t.onerror=null,t.onabort=null,t.ontimeout=null,i(r)}catch{}}function Nn(e){this.l=e.fc||null,this.j=e.ob||!1}G(Nn,Ps);Nn.prototype.g=function(){return new Br(this.l,this.j)};Nn.prototype.i=function(e){return function(){return e}}({});function Br(e,t){H.call(this),this.F=e,this.u=t,this.m=void 0,this.readyState=ks,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}G(Br,H);var ks=0;g=Br.prototype;g.open=function(e,t){if(this.readyState!=ks)throw this.abort(),Error("Error reopening a connection");this.C=e,this.B=t,this.readyState=1,hn(this)};g.send=function(e){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const t={headers:this.v,method:this.C,credentials:this.m,cache:void 0};e&&(t.body=e),(this.F||E).fetch(new Request(this.B,t)).then(this.$a.bind(this),this.ka.bind(this))};g.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Dn(this)),this.readyState=ks};g.$a=function(e){if(this.g&&(this.l=e,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=e.headers,this.readyState=2,hn(this)),this.g&&(this.readyState=3,hn(this),this.g)))if(this.responseType==="arraybuffer")e.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(typeof E.ReadableStream<"u"&&"body"in e){if(this.j=e.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;Zc(this)}else e.text().then(this.Za.bind(this),this.ka.bind(this))};function Zc(e){e.j.read().then(e.Xa.bind(e)).catch(e.ka.bind(e))}g.Xa=function(e){if(this.g){if(this.u&&e.value)this.response.push(e.value);else if(!this.u){var t=e.value?e.value:new Uint8Array(0);(t=this.A.decode(t,{stream:!e.done}))&&(this.response=this.responseText+=t)}e.done?Dn(this):hn(this),this.readyState==3&&Zc(this)}};g.Za=function(e){this.g&&(this.response=this.responseText=e,Dn(this))};g.Ya=function(e){this.g&&(this.response=e,Dn(this))};g.ka=function(){this.g&&Dn(this)};function Dn(e){e.readyState=4,e.l=null,e.j=null,e.A=null,hn(e)}g.setRequestHeader=function(e,t){this.v.append(e,t)};g.getResponseHeader=function(e){return this.h&&this.h.get(e.toLowerCase())||""};g.getAllResponseHeaders=function(){if(!this.h)return"";const e=[],t=this.h.entries();for(var n=t.next();!n.done;)n=n.value,e.push(n[0]+": "+n[1]),n=t.next();return e.join(`\r
`)};function hn(e){e.onreadystatechange&&e.onreadystatechange.call(e)}Object.defineProperty(Br.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(e){this.m=e?"include":"same-origin"}});var og=E.JSON.parse;function M(e){H.call(this),this.headers=new Map,this.u=e||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=tl,this.L=this.M=!1}G(M,H);var tl="",ag=/^https?$/i,cg=["POST","PUT"];g=M.prototype;g.Oa=function(e){this.M=e};g.ha=function(e,t,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+e);t=t?t.toUpperCase():"GET",this.I=e,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():Ui.g(),this.C=this.u?Bo(this.u):Bo(Ui),this.g.onreadystatechange=et(this.La,this);try{this.G=!0,this.g.open(t,String(e),!0),this.G=!1}catch(s){qo(this,s);return}if(e=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var i in r)n.set(i,r[i]);else if(typeof r.keys=="function"&&typeof r.get=="function")for(const s of r.keys())n.set(s,r.get(s));else throw Error("Unknown input type for opt_headers: "+String(r));r=Array.from(n.keys()).find(s=>s.toLowerCase()=="content-type"),i=E.FormData&&e instanceof E.FormData,!(0<=_c(cg,t))||r||i||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[s,o]of n)this.g.setRequestHeader(s,o);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{rl(this),0<this.B&&((this.L=lg(this.g))?(this.g.timeout=this.B,this.g.ontimeout=et(this.ua,this)):this.A=Rs(this.ua,this.B,this)),this.v=!0,this.g.send(e),this.v=!1}catch(s){qo(this,s)}};function lg(e){return we&&typeof e.timeout=="number"&&e.ontimeout!==void 0}g.ua=function(){typeof ps<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,J(this,"timeout"),this.abort(8))};function qo(e,t){e.h=!1,e.g&&(e.l=!0,e.g.abort(),e.l=!1),e.j=t,e.m=5,el(e),jr(e)}function el(e){e.F||(e.F=!0,J(e,"complete"),J(e,"error"))}g.abort=function(e){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=e||7,J(this,"complete"),J(this,"abort"),jr(this))};g.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),jr(this,!0)),M.$.N.call(this)};g.La=function(){this.s||(this.G||this.v||this.l?nl(this):this.kb())};g.kb=function(){nl(this)};function nl(e){if(e.h&&typeof ps<"u"&&(!e.C[1]||yt(e)!=4||e.da()!=2)){if(e.v&&yt(e)==4)Rs(e.La,0,e);else if(J(e,"readystatechange"),yt(e)==4){e.h=!1;try{const o=e.da();t:switch(o){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var t=!0;break t;default:t=!1}var n;if(!(n=t)){var r;if(r=o===0){var i=String(e.I).match(Hc)[1]||null;!i&&E.self&&E.self.location&&(i=E.self.location.protocol.slice(0,-1)),r=!ag.test(i?i.toLowerCase():"")}n=r}if(n)J(e,"complete"),J(e,"success");else{e.m=6;try{var s=2<yt(e)?e.g.statusText:""}catch{s=""}e.j=s+" ["+e.da()+"]",el(e)}}finally{jr(e)}}}}function jr(e,t){if(e.g){rl(e);const n=e.g,r=e.C[0]?()=>{}:null;e.g=null,e.C=null,t||J(e,"ready");try{n.onreadystatechange=r}catch{}}}function rl(e){e.g&&e.L&&(e.g.ontimeout=null),e.A&&(E.clearTimeout(e.A),e.A=null)}g.isActive=function(){return!!this.g};function yt(e){return e.g?e.g.readyState:0}g.da=function(){try{return 2<yt(this)?this.g.status:-1}catch{return-1}};g.ja=function(){try{return this.g?this.g.responseText:""}catch{return""}};g.Wa=function(e){if(this.g){var t=this.g.responseText;return e&&t.indexOf(e)==0&&(t=t.substring(e.length)),og(t)}};function Ho(e){try{if(!e.g)return null;if("response"in e.g)return e.g.response;switch(e.K){case tl:case"text":return e.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in e.g)return e.g.mozResponseArrayBuffer}return null}catch{return null}}function ug(e){const t={};e=(e.g&&2<=yt(e)&&e.g.getAllResponseHeaders()||"").split(`\r
`);for(let r=0;r<e.length;r++){if(rn(e[r]))continue;var n=Mp(e[r]);const i=n[0];if(n=n[1],typeof n!="string")continue;n=n.trim();const s=t[i]||[];t[i]=s,s.push(n)}Cp(t,function(r){return r.join(", ")})}g.Ia=function(){return this.m};g.Sa=function(){return typeof this.j=="string"?this.j:String(this.j)};function il(e){let t="";return _s(e,function(n,r){t+=r,t+=":",t+=n,t+=`\r
`}),t}function Ns(e,t,n){t:{for(r in n){var r=!1;break t}r=!0}r||(n=il(n),typeof e=="string"?n!=null&&encodeURIComponent(String(n)):N(e,t,n))}function Be(e,t,n){return n&&n.internalChannelParams&&n.internalChannelParams[e]||t}function sl(e){this.Ga=0,this.j=[],this.l=new Or,this.pa=this.wa=this.I=this.Y=this.g=this.Da=this.F=this.na=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=Be("failFast",!1,e),this.G=this.v=this.u=this.m=this.h=null,this.aa=!0,this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=Be("baseRetryDelayMs",5e3,e),this.hb=Be("retryDelaySeedMs",1e4,e),this.eb=Be("forwardChannelMaxRetries",2,e),this.xa=Be("forwardChannelRequestTimeoutMs",2e4,e),this.va=e&&e.xmlHttpFactory||void 0,this.Ha=e&&e.dc||!1,this.L=void 0,this.J=e&&e.supportsCrossDomainXhr||!1,this.K="",this.i=new Kc(e&&e.concurrentRequestLimit),this.Ja=new rg,this.P=e&&e.fastHandshake||!1,this.O=e&&e.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=e&&e.bc||!1,e&&e.Ea&&this.l.Ea(),e&&e.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&e&&e.detectBufferingProxy||!1,this.qa=void 0,e&&e.longPollingTimeout&&0<e.longPollingTimeout&&(this.qa=e.longPollingTimeout),this.oa=void 0,this.S=0,this.M=!1,this.ma=this.B=null}g=sl.prototype;g.ra=8;g.H=1;function Ds(e){if(ol(e),e.H==3){var t=e.W++,n=Ct(e.I);if(N(n,"SID",e.K),N(n,"RID",t),N(n,"TYPE","terminate"),Vn(e,n),t=new bn(e,e.l,t),t.L=2,t.v=Ur(Ct(n)),n=!1,E.navigator&&E.navigator.sendBeacon)try{n=E.navigator.sendBeacon(t.v.toString(),"")}catch{}!n&&E.Image&&(new Image().src=t.v,n=!0),n||(t.g=pl(t.l,null),t.g.ha(t.v)),t.G=Date.now(),kn(t)}dl(e)}function $r(e){e.g&&(Os(e),e.g.cancel(),e.g=null)}function ol(e){$r(e),e.u&&(E.clearTimeout(e.u),e.u=null),mr(e),e.i.cancel(),e.m&&(typeof e.m=="number"&&E.clearTimeout(e.m),e.m=null)}function qr(e){if(!Qc(e.i)&&!e.m){e.m=!0;var t=e.Na;on||bc(),an||(on(),an=!0),ws.add(t,e),e.C=0}}function hg(e,t){return Jc(e.i)>=e.i.j-(e.m?1:0)?!1:e.m?(e.j=t.F.concat(e.j),!0):e.H==1||e.H==2||e.C>=(e.cb?0:e.eb)?!1:(e.m=Sn(et(e.Na,e,t),hl(e,e.C)),e.C++,!0)}g.Na=function(e){if(this.m)if(this.m=null,this.H==1){if(!e){this.W=Math.floor(1e5*Math.random()),e=this.W++;const i=new bn(this,this.l,e);let s=this.s;if(this.U&&(s?(s=Ic(s),Tc(s,this.U)):s=this.U),this.o!==null||this.O||(i.I=s,s=null),this.P)t:{for(var t=0,n=0;n<this.j.length;n++){e:{var r=this.j[n];if("__data__"in r.map&&(r=r.map.__data__,typeof r=="string")){r=r.length;break e}r=void 0}if(r===void 0)break;if(t+=r,4096<t){t=n;break t}if(t===4096||n===this.j.length-1){t=n+1;break t}}t=1e3}else t=1e3;t=al(this,i,t),n=Ct(this.I),N(n,"RID",e),N(n,"CVER",22),this.F&&N(n,"X-HTTP-Session-Id",this.F),Vn(this,n),s&&(this.O?t="headers="+encodeURIComponent(String(il(s)))+"&"+t:this.o&&Ns(n,this.o,s)),bs(this.i,i),this.bb&&N(n,"TYPE","init"),this.P?(N(n,"$req",t),N(n,"SID","null"),i.aa=!0,ji(i,n,null)):ji(i,n,t),this.H=2}}else this.H==3&&(e?Go(this,e):this.j.length==0||Qc(this.i)||Go(this))};function Go(e,t){var n;t?n=t.m:n=e.W++;const r=Ct(e.I);N(r,"SID",e.K),N(r,"RID",n),N(r,"AID",e.V),Vn(e,r),e.o&&e.s&&Ns(r,e.o,e.s),n=new bn(e,e.l,n,e.C+1),e.o===null&&(n.I=e.s),t&&(e.j=t.F.concat(e.j)),t=al(e,n,1e3),n.setTimeout(Math.round(.5*e.xa)+Math.round(.5*e.xa*Math.random())),bs(e.i,n),ji(n,r,t)}function Vn(e,t){e.na&&_s(e.na,function(n,r){N(t,r,n)}),e.h&&qc({},function(n,r){N(t,r,n)})}function al(e,t,n){n=Math.min(e.j.length,n);var r=e.h?et(e.h.Va,e.h,e):null;t:{var i=e.j;let s=-1;for(;;){const o=["count="+n];s==-1?0<n?(s=i[0].g,o.push("ofs="+s)):s=0:o.push("ofs="+s);let a=!0;for(let c=0;c<n;c++){let l=i[c].g;const u=i[c].map;if(l-=s,0>l)s=Math.max(0,i[c].g-100),a=!1;else try{ig(u,o,"req"+l+"_")}catch{r&&r(u)}}if(a){r=o.join("&");break t}}}return e=e.j.splice(0,n),t.F=e,r}function cl(e){if(!e.g&&!e.u){e.ba=1;var t=e.Ma;on||bc(),an||(on(),an=!0),ws.add(t,e),e.A=0}}function Vs(e){return e.g||e.u||3<=e.A?!1:(e.ba++,e.u=Sn(et(e.Ma,e),hl(e,e.A)),e.A++,!0)}g.Ma=function(){if(this.u=null,ll(this),this.ca&&!(this.M||this.g==null||0>=this.S)){var e=2*this.S;this.l.info("BP detection timer enabled: "+e),this.B=Sn(et(this.jb,this),e)}};g.jb=function(){this.B&&(this.B=null,this.l.info("BP detection timeout reached."),this.l.info("Buffering proxy detected and switch to long-polling!"),this.G=!1,this.M=!0,it(10),$r(this),ll(this))};function Os(e){e.B!=null&&(E.clearTimeout(e.B),e.B=null)}function ll(e){e.g=new bn(e,e.l,"rpc",e.ba),e.o===null&&(e.g.I=e.s),e.g.O=0;var t=Ct(e.wa);N(t,"RID","rpc"),N(t,"SID",e.K),N(t,"AID",e.V),N(t,"CI",e.G?"0":"1"),!e.G&&e.qa&&N(t,"TO",e.qa),N(t,"TYPE","xmlhttp"),Vn(e,t),e.o&&e.s&&Ns(t,e.o,e.s),e.L&&e.g.setTimeout(e.L);var n=e.g;e=e.pa,n.L=1,n.v=Ur(Ct(t)),n.s=null,n.S=!0,Uc(n,e)}g.ib=function(){this.v!=null&&(this.v=null,$r(this),Vs(this),it(19))};function mr(e){e.v!=null&&(E.clearTimeout(e.v),e.v=null)}function ul(e,t){var n=null;if(e.g==t){mr(e),Os(e),e.g=null;var r=2}else if(qi(e.i,t))n=t.F,Yc(e.i,t),r=1;else return;if(e.H!=0){if(t.i)if(r==1){n=t.s?t.s.length:0,t=Date.now()-t.G;var i=e.C;r=Mr(),J(r,new Mc(r,n)),qr(e)}else cl(e);else if(i=t.o,i==3||i==0&&0<t.ca||!(r==1&&hg(e,t)||r==2&&Vs(e)))switch(n&&0<n.length&&(t=e.i,t.i=t.i.concat(n)),i){case 1:Zt(e,5);break;case 4:Zt(e,10);break;case 3:Zt(e,6);break;default:Zt(e,2)}}}function hl(e,t){let n=e.ab+Math.floor(Math.random()*e.hb);return e.isActive()||(n*=2),n*t}function Zt(e,t){if(e.l.info("Error code "+t),t==2){var n=null;e.h&&(n=null);var r=et(e.pb,e);n||(n=new ne("//www.google.com/images/cleardot.gif"),E.location&&E.location.protocol=="http"||pr(n,"https"),Ur(n)),sg(n.toString(),r)}else it(2);e.H=0,e.h&&e.h.za(t),dl(e),ol(e)}g.pb=function(e){e?(this.l.info("Successfully pinged google.com"),it(2)):(this.l.info("Failed to ping google.com"),it(1))};function dl(e){if(e.H=0,e.ma=[],e.h){const t=Xc(e.i);(t.length!=0||e.j.length!=0)&&(Mo(e.ma,t),Mo(e.ma,e.j),e.i.i.length=0,gs(e.j),e.j.length=0),e.h.ya()}}function fl(e,t,n){var r=n instanceof ne?Ct(n):new ne(n);if(r.g!="")t&&(r.g=t+"."+r.g),gr(r,r.m);else{var i=E.location;r=i.protocol,t=t?t+"."+i.hostname:i.hostname,i=+i.port;var s=new ne(null);r&&pr(s,r),t&&(s.g=t),i&&gr(s,i),n&&(s.l=n),r=s}return n=e.F,t=e.Da,n&&t&&N(r,n,t),N(r,"VER",e.ra),Vn(e,r),r}function pl(e,t,n){if(t&&!e.J)throw Error("Can't create secondary domain capable XhrIo object.");return t=n&&e.Ha&&!e.va?new M(new Nn({ob:!0})):new M(e.va),t.Oa(e.J),t}g.isActive=function(){return!!this.h&&this.h.isActive(this)};function gl(){}g=gl.prototype;g.Ba=function(){};g.Aa=function(){};g.za=function(){};g.ya=function(){};g.isActive=function(){return!0};g.Va=function(){};function _r(){if(we&&!(10<=Number(Ap)))throw Error("Environmental error: no available transport.")}_r.prototype.g=function(e,t){return new lt(e,t)};function lt(e,t){H.call(this),this.g=new sl(t),this.l=e,this.h=t&&t.messageUrlParams||null,e=t&&t.messageHeaders||null,t&&t.clientProtocolHeaderRequired&&(e?e["X-Client-Protocol"]="webchannel":e={"X-Client-Protocol":"webchannel"}),this.g.s=e,e=t&&t.initMessageHeaders||null,t&&t.messageContentType&&(e?e["X-WebChannel-Content-Type"]=t.messageContentType:e={"X-WebChannel-Content-Type":t.messageContentType}),t&&t.Ca&&(e?e["X-WebChannel-Client-Profile"]=t.Ca:e={"X-WebChannel-Client-Profile":t.Ca}),this.g.U=e,(e=t&&t.cc)&&!rn(e)&&(this.g.o=e),this.A=t&&t.supportsCrossDomainXhr||!1,this.v=t&&t.sendRawJson||!1,(t=t&&t.httpSessionIdParam)&&!rn(t)&&(this.g.F=t,e=this.h,e!==null&&t in e&&(e=this.h,t in e&&delete e[t])),this.j=new Oe(this)}G(lt,H);lt.prototype.m=function(){this.g.h=this.j,this.A&&(this.g.J=!0);var e=this.g,t=this.l,n=this.h||void 0;it(0),e.Y=t,e.na=n||{},e.G=e.aa,e.I=fl(e,null,e.Y),qr(e)};lt.prototype.close=function(){Ds(this.g)};lt.prototype.u=function(e){var t=this.g;if(typeof e=="string"){var n={};n.__data__=e,e=n}else this.v&&(n={},n.__data__=Ts(e),e=n);t.j.push(new tg(t.fb++,e)),t.H==3&&qr(t)};lt.prototype.N=function(){this.g.h=null,delete this.j,Ds(this.g),delete this.g,lt.$.N.call(this)};function ml(e){Ss.call(this),e.__headers__&&(this.headers=e.__headers__,this.statusCode=e.__status__,delete e.__headers__,delete e.__status__);var t=e.__sm__;if(t){t:{for(const n in t){e=n;break t}e=void 0}(this.i=e)&&(e=this.i,t=t!==null&&e in t?t[e]:void 0),this.data=t}else this.data=e}G(ml,Ss);function _l(){Cs.call(this),this.status=1}G(_l,Cs);function Oe(e){this.g=e}G(Oe,gl);Oe.prototype.Ba=function(){J(this.g,"a")};Oe.prototype.Aa=function(e){J(this.g,new ml(e))};Oe.prototype.za=function(e){J(this.g,new _l)};Oe.prototype.ya=function(){J(this.g,"b")};function dg(){this.blockSize=-1}function Tt(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}G(Tt,dg);Tt.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0};function yi(e,t,n){n||(n=0);var r=Array(16);if(typeof t=="string")for(var i=0;16>i;++i)r[i]=t.charCodeAt(n++)|t.charCodeAt(n++)<<8|t.charCodeAt(n++)<<16|t.charCodeAt(n++)<<24;else for(i=0;16>i;++i)r[i]=t[n++]|t[n++]<<8|t[n++]<<16|t[n++]<<24;t=e.g[0],n=e.g[1],i=e.g[2];var s=e.g[3],o=t+(s^n&(i^s))+r[0]+3614090360&4294967295;t=n+(o<<7&4294967295|o>>>25),o=s+(i^t&(n^i))+r[1]+3905402710&4294967295,s=t+(o<<12&4294967295|o>>>20),o=i+(n^s&(t^n))+r[2]+606105819&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(t^i&(s^t))+r[3]+3250441966&4294967295,n=i+(o<<22&4294967295|o>>>10),o=t+(s^n&(i^s))+r[4]+4118548399&4294967295,t=n+(o<<7&4294967295|o>>>25),o=s+(i^t&(n^i))+r[5]+1200080426&4294967295,s=t+(o<<12&4294967295|o>>>20),o=i+(n^s&(t^n))+r[6]+2821735955&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(t^i&(s^t))+r[7]+4249261313&4294967295,n=i+(o<<22&4294967295|o>>>10),o=t+(s^n&(i^s))+r[8]+1770035416&4294967295,t=n+(o<<7&4294967295|o>>>25),o=s+(i^t&(n^i))+r[9]+2336552879&4294967295,s=t+(o<<12&4294967295|o>>>20),o=i+(n^s&(t^n))+r[10]+4294925233&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(t^i&(s^t))+r[11]+2304563134&4294967295,n=i+(o<<22&4294967295|o>>>10),o=t+(s^n&(i^s))+r[12]+1804603682&4294967295,t=n+(o<<7&4294967295|o>>>25),o=s+(i^t&(n^i))+r[13]+4254626195&4294967295,s=t+(o<<12&4294967295|o>>>20),o=i+(n^s&(t^n))+r[14]+2792965006&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(t^i&(s^t))+r[15]+1236535329&4294967295,n=i+(o<<22&4294967295|o>>>10),o=t+(i^s&(n^i))+r[1]+4129170786&4294967295,t=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(t^n))+r[6]+3225465664&4294967295,s=t+(o<<9&4294967295|o>>>23),o=i+(t^n&(s^t))+r[11]+643717713&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^t&(i^s))+r[0]+3921069994&4294967295,n=i+(o<<20&4294967295|o>>>12),o=t+(i^s&(n^i))+r[5]+3593408605&4294967295,t=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(t^n))+r[10]+38016083&4294967295,s=t+(o<<9&4294967295|o>>>23),o=i+(t^n&(s^t))+r[15]+3634488961&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^t&(i^s))+r[4]+3889429448&4294967295,n=i+(o<<20&4294967295|o>>>12),o=t+(i^s&(n^i))+r[9]+568446438&4294967295,t=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(t^n))+r[14]+3275163606&4294967295,s=t+(o<<9&4294967295|o>>>23),o=i+(t^n&(s^t))+r[3]+4107603335&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^t&(i^s))+r[8]+1163531501&4294967295,n=i+(o<<20&4294967295|o>>>12),o=t+(i^s&(n^i))+r[13]+2850285829&4294967295,t=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(t^n))+r[2]+4243563512&4294967295,s=t+(o<<9&4294967295|o>>>23),o=i+(t^n&(s^t))+r[7]+1735328473&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^t&(i^s))+r[12]+2368359562&4294967295,n=i+(o<<20&4294967295|o>>>12),o=t+(n^i^s)+r[5]+4294588738&4294967295,t=n+(o<<4&4294967295|o>>>28),o=s+(t^n^i)+r[8]+2272392833&4294967295,s=t+(o<<11&4294967295|o>>>21),o=i+(s^t^n)+r[11]+1839030562&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^t)+r[14]+4259657740&4294967295,n=i+(o<<23&4294967295|o>>>9),o=t+(n^i^s)+r[1]+2763975236&4294967295,t=n+(o<<4&4294967295|o>>>28),o=s+(t^n^i)+r[4]+1272893353&4294967295,s=t+(o<<11&4294967295|o>>>21),o=i+(s^t^n)+r[7]+4139469664&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^t)+r[10]+3200236656&4294967295,n=i+(o<<23&4294967295|o>>>9),o=t+(n^i^s)+r[13]+681279174&4294967295,t=n+(o<<4&4294967295|o>>>28),o=s+(t^n^i)+r[0]+3936430074&4294967295,s=t+(o<<11&4294967295|o>>>21),o=i+(s^t^n)+r[3]+3572445317&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^t)+r[6]+76029189&4294967295,n=i+(o<<23&4294967295|o>>>9),o=t+(n^i^s)+r[9]+3654602809&4294967295,t=n+(o<<4&4294967295|o>>>28),o=s+(t^n^i)+r[12]+3873151461&4294967295,s=t+(o<<11&4294967295|o>>>21),o=i+(s^t^n)+r[15]+530742520&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^t)+r[2]+3299628645&4294967295,n=i+(o<<23&4294967295|o>>>9),o=t+(i^(n|~s))+r[0]+4096336452&4294967295,t=n+(o<<6&4294967295|o>>>26),o=s+(n^(t|~i))+r[7]+1126891415&4294967295,s=t+(o<<10&4294967295|o>>>22),o=i+(t^(s|~n))+r[14]+2878612391&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~t))+r[5]+4237533241&4294967295,n=i+(o<<21&4294967295|o>>>11),o=t+(i^(n|~s))+r[12]+1700485571&4294967295,t=n+(o<<6&4294967295|o>>>26),o=s+(n^(t|~i))+r[3]+2399980690&4294967295,s=t+(o<<10&4294967295|o>>>22),o=i+(t^(s|~n))+r[10]+4293915773&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~t))+r[1]+2240044497&4294967295,n=i+(o<<21&4294967295|o>>>11),o=t+(i^(n|~s))+r[8]+1873313359&4294967295,t=n+(o<<6&4294967295|o>>>26),o=s+(n^(t|~i))+r[15]+4264355552&4294967295,s=t+(o<<10&4294967295|o>>>22),o=i+(t^(s|~n))+r[6]+2734768916&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~t))+r[13]+1309151649&4294967295,n=i+(o<<21&4294967295|o>>>11),o=t+(i^(n|~s))+r[4]+4149444226&4294967295,t=n+(o<<6&4294967295|o>>>26),o=s+(n^(t|~i))+r[11]+3174756917&4294967295,s=t+(o<<10&4294967295|o>>>22),o=i+(t^(s|~n))+r[2]+718787259&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~t))+r[9]+3951481745&4294967295,e.g[0]=e.g[0]+t&4294967295,e.g[1]=e.g[1]+(i+(o<<21&4294967295|o>>>11))&4294967295,e.g[2]=e.g[2]+i&4294967295,e.g[3]=e.g[3]+s&4294967295}Tt.prototype.j=function(e,t){t===void 0&&(t=e.length);for(var n=t-this.blockSize,r=this.m,i=this.h,s=0;s<t;){if(i==0)for(;s<=n;)yi(this,e,s),s+=this.blockSize;if(typeof e=="string"){for(;s<t;)if(r[i++]=e.charCodeAt(s++),i==this.blockSize){yi(this,r),i=0;break}}else for(;s<t;)if(r[i++]=e[s++],i==this.blockSize){yi(this,r),i=0;break}}this.h=i,this.i+=t};Tt.prototype.l=function(){var e=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);e[0]=128;for(var t=1;t<e.length-8;++t)e[t]=0;var n=8*this.i;for(t=e.length-8;t<e.length;++t)e[t]=n&255,n/=256;for(this.j(e),e=Array(16),t=n=0;4>t;++t)for(var r=0;32>r;r+=8)e[n++]=this.g[t]>>>r&255;return e};function C(e,t){this.h=t;for(var n=[],r=!0,i=e.length-1;0<=i;i--){var s=e[i]|0;r&&s==t||(n[i]=s,r=!1)}this.g=n}var fg={};function Ms(e){return-128<=e&&128>e?Ip(e,function(t){return new C([t|0],0>t?-1:0)}):new C([e|0],0>e?-1:0)}function vt(e){if(isNaN(e)||!isFinite(e))return Ee;if(0>e)return Q(vt(-e));for(var t=[],n=1,r=0;e>=n;r++)t[r]=e/n|0,n*=Hi;return new C(t,0)}function yl(e,t){if(e.length==0)throw Error("number format error: empty string");if(t=t||10,2>t||36<t)throw Error("radix out of range: "+t);if(e.charAt(0)=="-")return Q(yl(e.substring(1),t));if(0<=e.indexOf("-"))throw Error('number format error: interior "-" character');for(var n=vt(Math.pow(t,8)),r=Ee,i=0;i<e.length;i+=8){var s=Math.min(8,e.length-i),o=parseInt(e.substring(i,i+s),t);8>s?(s=vt(Math.pow(t,s)),r=r.R(s).add(vt(o))):(r=r.R(n),r=r.add(vt(o)))}return r}var Hi=4294967296,Ee=Ms(0),Gi=Ms(1),zo=Ms(16777216);g=C.prototype;g.ea=function(){if(ut(this))return-Q(this).ea();for(var e=0,t=1,n=0;n<this.g.length;n++){var r=this.D(n);e+=(0<=r?r:Hi+r)*t,t*=Hi}return e};g.toString=function(e){if(e=e||10,2>e||36<e)throw Error("radix out of range: "+e);if(Pt(this))return"0";if(ut(this))return"-"+Q(this).toString(e);for(var t=vt(Math.pow(e,6)),n=this,r="";;){var i=vr(n,t).g;n=yr(n,i.R(t));var s=((0<n.g.length?n.g[0]:n.h)>>>0).toString(e);if(n=i,Pt(n))return s+r;for(;6>s.length;)s="0"+s;r=s+r}};g.D=function(e){return 0>e?0:e<this.g.length?this.g[e]:this.h};function Pt(e){if(e.h!=0)return!1;for(var t=0;t<e.g.length;t++)if(e.g[t]!=0)return!1;return!0}function ut(e){return e.h==-1}g.X=function(e){return e=yr(this,e),ut(e)?-1:Pt(e)?0:1};function Q(e){for(var t=e.g.length,n=[],r=0;r<t;r++)n[r]=~e.g[r];return new C(n,~e.h).add(Gi)}g.abs=function(){return ut(this)?Q(this):this};g.add=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],r=0,i=0;i<=t;i++){var s=r+(this.D(i)&65535)+(e.D(i)&65535),o=(s>>>16)+(this.D(i)>>>16)+(e.D(i)>>>16);r=o>>>16,s&=65535,o&=65535,n[i]=o<<16|s}return new C(n,n[n.length-1]&-2147483648?-1:0)};function yr(e,t){return e.add(Q(t))}g.R=function(e){if(Pt(this)||Pt(e))return Ee;if(ut(this))return ut(e)?Q(this).R(Q(e)):Q(Q(this).R(e));if(ut(e))return Q(this.R(Q(e)));if(0>this.X(zo)&&0>e.X(zo))return vt(this.ea()*e.ea());for(var t=this.g.length+e.g.length,n=[],r=0;r<2*t;r++)n[r]=0;for(r=0;r<this.g.length;r++)for(var i=0;i<e.g.length;i++){var s=this.D(r)>>>16,o=this.D(r)&65535,a=e.D(i)>>>16,c=e.D(i)&65535;n[2*r+2*i]+=o*c,Gn(n,2*r+2*i),n[2*r+2*i+1]+=s*c,Gn(n,2*r+2*i+1),n[2*r+2*i+1]+=o*a,Gn(n,2*r+2*i+1),n[2*r+2*i+2]+=s*a,Gn(n,2*r+2*i+2)}for(r=0;r<t;r++)n[r]=n[2*r+1]<<16|n[2*r];for(r=t;r<2*t;r++)n[r]=0;return new C(n,0)};function Gn(e,t){for(;(e[t]&65535)!=e[t];)e[t+1]+=e[t]>>>16,e[t]&=65535,t++}function je(e,t){this.g=e,this.h=t}function vr(e,t){if(Pt(t))throw Error("division by zero");if(Pt(e))return new je(Ee,Ee);if(ut(e))return t=vr(Q(e),t),new je(Q(t.g),Q(t.h));if(ut(t))return t=vr(e,Q(t)),new je(Q(t.g),t.h);if(30<e.g.length){if(ut(e)||ut(t))throw Error("slowDivide_ only works with positive integers.");for(var n=Gi,r=t;0>=r.X(e);)n=Wo(n),r=Wo(r);var i=pe(n,1),s=pe(r,1);for(r=pe(r,2),n=pe(n,2);!Pt(r);){var o=s.add(r);0>=o.X(e)&&(i=i.add(n),s=o),r=pe(r,1),n=pe(n,1)}return t=yr(e,i.R(t)),new je(i,t)}for(i=Ee;0<=e.X(t);){for(n=Math.max(1,Math.floor(e.ea()/t.ea())),r=Math.ceil(Math.log(n)/Math.LN2),r=48>=r?1:Math.pow(2,r-48),s=vt(n),o=s.R(t);ut(o)||0<o.X(e);)n-=r,s=vt(n),o=s.R(t);Pt(s)&&(s=Gi),i=i.add(s),e=yr(e,o)}return new je(i,e)}g.gb=function(e){return vr(this,e).h};g.and=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],r=0;r<t;r++)n[r]=this.D(r)&e.D(r);return new C(n,this.h&e.h)};g.or=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],r=0;r<t;r++)n[r]=this.D(r)|e.D(r);return new C(n,this.h|e.h)};g.xor=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],r=0;r<t;r++)n[r]=this.D(r)^e.D(r);return new C(n,this.h^e.h)};function Wo(e){for(var t=e.g.length+1,n=[],r=0;r<t;r++)n[r]=e.D(r)<<1|e.D(r-1)>>>31;return new C(n,e.h)}function pe(e,t){var n=t>>5;t%=32;for(var r=e.g.length-n,i=[],s=0;s<r;s++)i[s]=0<t?e.D(s+n)>>>t|e.D(s+n+1)<<32-t:e.D(s+n);return new C(i,e.h)}_r.prototype.createWebChannel=_r.prototype.g;lt.prototype.send=lt.prototype.u;lt.prototype.open=lt.prototype.m;lt.prototype.close=lt.prototype.close;Lr.NO_ERROR=0;Lr.TIMEOUT=8;Lr.HTTP_ERROR=6;Lc.COMPLETE="complete";Fc.EventType=Cn;Cn.OPEN="a";Cn.CLOSE="b";Cn.ERROR="c";Cn.MESSAGE="d";H.prototype.listen=H.prototype.O;M.prototype.listenOnce=M.prototype.P;M.prototype.getLastError=M.prototype.Sa;M.prototype.getLastErrorCode=M.prototype.Ia;M.prototype.getStatus=M.prototype.da;M.prototype.getResponseJson=M.prototype.Wa;M.prototype.getResponseText=M.prototype.ja;M.prototype.send=M.prototype.ha;M.prototype.setWithCredentials=M.prototype.Oa;Tt.prototype.digest=Tt.prototype.l;Tt.prototype.reset=Tt.prototype.reset;Tt.prototype.update=Tt.prototype.j;C.prototype.add=C.prototype.add;C.prototype.multiply=C.prototype.R;C.prototype.modulo=C.prototype.gb;C.prototype.compare=C.prototype.X;C.prototype.toNumber=C.prototype.ea;C.prototype.toString=C.prototype.toString;C.prototype.getBits=C.prototype.D;C.fromNumber=vt;C.fromString=yl;var pg=function(){return new _r},gg=function(){return Mr()},vi=Lr,mg=Lc,_g=de,Ko={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20},yg=Nn,zn=Fc,vg=M,Eg=C;const Qo="@firebase/firestore";/**
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
 */class X{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}X.UNAUTHENTICATED=new X(null),X.GOOGLE_CREDENTIALS=new X("google-credentials-uid"),X.FIRST_PARTY=new X("first-party-uid"),X.MOCK_USER=new X("mock-user");/**
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
 */let Me="10.2.0";/**
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
 */const oe=new ns("@firebase/firestore");function Jo(){return oe.logLevel}function y(e,...t){if(oe.logLevel<=P.DEBUG){const n=t.map(Ls);oe.debug(`Firestore (${Me}): ${e}`,...n)}}function qt(e,...t){if(oe.logLevel<=P.ERROR){const n=t.map(Ls);oe.error(`Firestore (${Me}): ${e}`,...n)}}function Er(e,...t){if(oe.logLevel<=P.WARN){const n=t.map(Ls);oe.warn(`Firestore (${Me}): ${e}`,...n)}}function Ls(e){if(typeof e=="string")return e;try{/**
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
*/return function(n){return JSON.stringify(n)}(e)}catch{return e}}/**
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
 */function A(e="Unexpected state"){const t=`FIRESTORE (${Me}) INTERNAL ASSERTION FAILED: `+e;throw qt(t),new Error(t)}function B(e,t){e||A()}function b(e,t){return e}/**
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
 */const d={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class _ extends kt{constructor(t,n){super(t,n),this.code=t,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class Bt{constructor(){this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}}/**
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
 */class vl{constructor(t,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class Ig{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,n){t.enqueueRetryable(()=>n(X.UNAUTHENTICATED))}shutdown(){}}class Tg{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,n){this.changeListener=n,t.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class wg{constructor(t){this.t=t,this.currentUser=X.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,n){let r=this.i;const i=c=>this.i!==r?(r=this.i,n(c)):Promise.resolve();let s=new Bt;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new Bt,t.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const c=s;t.enqueueRetryable(async()=>{await c.promise,await i(this.currentUser)})},a=c=>{y("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(c=>a(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?a(c):(y("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new Bt)}},0),o()}getToken(){const t=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==t?(y("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(B(typeof r.accessToken=="string"),new vl(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const t=this.auth&&this.auth.getUid();return B(t===null||typeof t=="string"),new X(t)}}class Ag{constructor(t,n,r){this.l=t,this.h=n,this.P=r,this.type="FirstParty",this.user=X.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const t=this.T();return t&&this.I.set("Authorization",t),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class Rg{constructor(t,n,r){this.l=t,this.h=n,this.P=r}getToken(){return Promise.resolve(new Ag(this.l,this.h,this.P))}start(t,n){t.enqueueRetryable(()=>n(X.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Pg{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Sg{constructor(t){this.A=t,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(t,n){const r=s=>{s.error!=null&&y("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.R;return this.R=s.token,y("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{t.enqueueRetryable(()=>r(s))};const i=s=>{y("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.appCheck.addTokenListener(this.o)};this.A.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.A.getImmediate({optional:!0});s?i(s):y("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(n=>n?(B(typeof n.token=="string"),this.R=n.token,new Pg(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
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
 */function Cg(e){const t=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(e);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(n);else for(let r=0;r<e;r++)n[r]=Math.floor(256*Math.random());return n}/**
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
 */class El{static V(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/t.length)*t.length;let r="";for(;r.length<20;){const i=Cg(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=t.charAt(i[s]%t.length))}return r}}function k(e,t){return e<t?-1:e>t?1:0}function Ae(e,t,n){return e.length===t.length&&e.every((r,i)=>n(r,t[i]))}/**
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
 */class j{constructor(t,n){if(this.seconds=t,this.nanoseconds=n,n<0)throw new _(d.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new _(d.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(t<-62135596800)throw new _(d.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new _(d.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}static now(){return j.fromMillis(Date.now())}static fromDate(t){return j.fromMillis(t.getTime())}static fromMillis(t){const n=Math.floor(t/1e3),r=Math.floor(1e6*(t-1e3*n));return new j(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(t){return this.seconds===t.seconds?k(this.nanoseconds,t.nanoseconds):k(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds- -62135596800;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class V{constructor(t){this.timestamp=t}static fromTimestamp(t){return new V(t)}static min(){return new V(new j(0,0))}static max(){return new V(new j(253402300799,999999999))}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class dn{constructor(t,n,r){n===void 0?n=0:n>t.length&&A(),r===void 0?r=t.length-n:r>t.length-n&&A(),this.segments=t,this.offset=n,this.len=r}get length(){return this.len}isEqual(t){return dn.comparator(this,t)===0}child(t){const n=this.segments.slice(this.offset,this.limit());return t instanceof dn?t.forEach(r=>{n.push(r)}):n.push(t),this.construct(n)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==t.get(n))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==t.get(n))return!1;return!0}forEach(t){for(let n=this.offset,r=this.limit();n<r;n++)t(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,n){const r=Math.min(t.length,n.length);for(let i=0;i<r;i++){const s=t.get(i),o=n.get(i);if(s<o)return-1;if(s>o)return 1}return t.length<n.length?-1:t.length>n.length?1:0}}class D extends dn{construct(t,n,r){return new D(t,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...t){const n=[];for(const r of t){if(r.indexOf("//")>=0)throw new _(d.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new D(n)}static emptyPath(){return new D([])}}const bg=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class tt extends dn{construct(t,n,r){return new tt(t,n,r)}static isValidIdentifier(t){return bg.test(t)}canonicalString(){return this.toArray().map(t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),tt.isValidIdentifier(t)||(t="`"+t+"`"),t)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new tt(["__name__"])}static fromServerFormat(t){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new _(d.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<t.length;){const a=t[i];if(a==="\\"){if(i+1===t.length)throw new _(d.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const c=t[i+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new _(d.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);r+=c,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(r+=a,i++):(s(),i++)}if(s(),o)throw new _(d.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new tt(n)}static emptyPath(){return new tt([])}}/**
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
 */class T{constructor(t){this.path=t}static fromPath(t){return new T(D.fromString(t))}static fromName(t){return new T(D.fromString(t).popFirst(5))}static empty(){return new T(D.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return t!==null&&D.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,n){return D.comparator(t.path,n.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new T(new D(t.slice()))}}function kg(e,t){const n=e.toTimestamp().seconds,r=e.toTimestamp().nanoseconds+1,i=V.fromTimestamp(r===1e9?new j(n+1,0):new j(n,r));return new Ht(i,T.empty(),t)}function Ng(e){return new Ht(e.readTime,e.key,-1)}class Ht{constructor(t,n,r){this.readTime=t,this.documentKey=n,this.largestBatchId=r}static min(){return new Ht(V.min(),T.empty(),-1)}static max(){return new Ht(V.max(),T.empty(),-1)}}function Dg(e,t){let n=e.readTime.compareTo(t.readTime);return n!==0?n:(n=T.comparator(e.documentKey,t.documentKey),n!==0?n:k(e.largestBatchId,t.largestBatchId))}/**
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
 */const Vg="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Og{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(t=>t())}}/**
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
 */async function Il(e){if(e.code!==d.FAILED_PRECONDITION||e.message!==Vg)throw e;y("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class p{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(t){return this.next(void 0,t)}next(t,n){return this.callbackAttached&&A(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(t,this.result):new p((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(t,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((t,n)=>{this.next(t,n)})}wrapUserFunction(t){try{const n=t();return n instanceof p?n:p.resolve(n)}catch(n){return p.reject(n)}}wrapSuccess(t,n){return t?this.wrapUserFunction(()=>t(n)):p.resolve(n)}wrapFailure(t,n){return t?this.wrapUserFunction(()=>t(n)):p.reject(n)}static resolve(t){return new p((n,r)=>{n(t)})}static reject(t){return new p((n,r)=>{r(t)})}static waitFor(t){return new p((n,r)=>{let i=0,s=0,o=!1;t.forEach(a=>{++i,a.next(()=>{++s,o&&s===i&&n()},c=>r(c))}),o=!0,s===i&&n()})}static or(t){let n=p.resolve(!1);for(const r of t)n=n.next(i=>i?p.resolve(i):r());return n}static forEach(t,n){const r=[];return t.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(t,n){return new p((r,i)=>{const s=t.length,o=new Array(s);let a=0;for(let c=0;c<s;c++){const l=c;n(t[l]).next(u=>{o[l]=u,++a,a===s&&r(o)},u=>i(u))}})}static doWhile(t,n){return new p((r,i)=>{const s=()=>{t()===!0?n().next(()=>{s()},i):r()};s()})}}function Hr(e){return e.name==="IndexedDbTransactionError"}/**
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
 */class Tl{constructor(t,n){this.previousValue=t,n&&(n.sequenceNumberHandler=r=>this.oe(r),this._e=r=>n.writeSequenceNumber(r))}oe(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this._e&&this._e(t),t}}Tl.ae=-1;function Gr(e){return e==null}function Ir(e){return e===0&&1/e==-1/0}function Mg(e){return typeof e=="number"&&Number.isInteger(e)&&!Ir(e)&&e<=Number.MAX_SAFE_INTEGER&&e>=Number.MIN_SAFE_INTEGER}/**
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
 */function Yo(e){let t=0;for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t++;return t}function fe(e,t){for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t(n,e[n])}function wl(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}/**
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
 */class ot{constructor(t,n){this.comparator=t,this.root=n||K.EMPTY}insert(t,n){return new ot(this.comparator,this.root.insert(t,n,this.comparator).copy(null,null,K.BLACK,null,null))}remove(t){return new ot(this.comparator,this.root.remove(t,this.comparator).copy(null,null,K.BLACK,null,null))}get(t){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(t,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(t){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(t,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal((n,r)=>(t(n,r),!1))}toString(){const t=[];return this.inorderTraversal((n,r)=>(t.push(`${n}:${r}`),!1)),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new Wn(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new Wn(this.root,t,this.comparator,!1)}getReverseIterator(){return new Wn(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new Wn(this.root,t,this.comparator,!0)}}class Wn{constructor(t,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!t.isEmpty();)if(s=n?r(t.key,n):1,n&&i&&(s*=-1),s<0)t=this.isReverse?t.left:t.right;else{if(s===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const n={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class K{constructor(t,n,r,i,s){this.key=t,this.value=n,this.color=r??K.RED,this.left=i??K.EMPTY,this.right=s??K.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,n,r,i,s){return new K(t??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,n,r){let i=this;const s=r(t,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(t,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(t,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return K.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,n){let r,i=this;if(n(t,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(t,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(t,i.key)===0){if(i.right.isEmpty())return K.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(t,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,K.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,K.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,n)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw A();const t=this.left.check();if(t!==this.right.check())throw A();return t+(this.isRed()?0:1)}}K.EMPTY=null,K.RED=!0,K.BLACK=!1;K.EMPTY=new class{constructor(){this.size=0}get key(){throw A()}get value(){throw A()}get color(){throw A()}get left(){throw A()}get right(){throw A()}copy(t,n,r,i,s){return this}insert(t,n,r){return new K(t,n)}remove(t,n){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class st{constructor(t){this.comparator=t,this.data=new ot(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal((n,r)=>(t(n),!1))}forEachInRange(t,n){const r=this.data.getIteratorFrom(t[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,t[1])>=0)return;n(i.key)}}forEachWhile(t,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!t(r.getNext().key))return}firstAfterOrEqual(t){const n=this.data.getIteratorFrom(t);return n.hasNext()?n.getNext().key:null}getIterator(){return new Xo(this.data.getIterator())}getIteratorFrom(t){return new Xo(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let n=this;return n.size<t.size&&(n=t,t=this),t.forEach(r=>{n=n.add(r)}),n}isEqual(t){if(!(t instanceof st)||this.size!==t.size)return!1;const n=this.data.getIterator(),r=t.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const t=[];return this.forEach(n=>{t.push(n)}),t}toString(){const t=[];return this.forEach(n=>t.push(n)),"SortedSet("+t.toString()+")"}copy(t){const n=new st(this.comparator);return n.data=t,n}}class Xo{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class ct{constructor(t){this.fields=t,t.sort(tt.comparator)}static empty(){return new ct([])}unionWith(t){let n=new st(tt.comparator);for(const r of this.fields)n=n.add(r);for(const r of t)n=n.add(r);return new ct(n.toArray())}covers(t){for(const n of this.fields)if(n.isPrefixOf(t))return!0;return!1}isEqual(t){return Ae(this.fields,t.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lg extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class bt{constructor(t){this.binaryString=t}static fromBase64String(t){const n=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new Lg("Invalid base64 string: "+s):s}}(t);return new bt(n)}static fromUint8Array(t){const n=function(i){let s="";for(let o=0;o<i.length;++o)s+=String.fromCharCode(i[o]);return s}(t);return new bt(n)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return k(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}bt.EMPTY_BYTE_STRING=new bt("");const Fg=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Gt(e){if(B(!!e),typeof e=="string"){let t=0;const n=Fg.exec(e);if(B(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),t=Number(i)}const r=new Date(e);return{seconds:Math.floor(r.getTime()/1e3),nanos:t}}return{seconds:x(e.seconds),nanos:x(e.nanos)}}function x(e){return typeof e=="number"?e:typeof e=="string"?Number(e):0}function Re(e){return typeof e=="string"?bt.fromBase64String(e):bt.fromUint8Array(e)}/**
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
 */function Fs(e){var t,n;return((n=(((t=e?.mapValue)===null||t===void 0?void 0:t.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function xs(e){const t=e.mapValue.fields.__previous_value__;return Fs(t)?xs(t):t}function fn(e){const t=Gt(e.mapValue.fields.__local_write_time__.timestampValue);return new j(t.seconds,t.nanos)}/**
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
 */class xg{constructor(t,n,r,i,s,o,a,c,l){this.databaseId=t,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=c,this.useFetchStreams=l}}class pn{constructor(t,n){this.projectId=t,this.database=n||"(default)"}static empty(){return new pn("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(t){return t instanceof pn&&t.projectId===this.projectId&&t.database===this.database}}/**
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
 */const Kn={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function ae(e){return"nullValue"in e?0:"booleanValue"in e?1:"integerValue"in e||"doubleValue"in e?2:"timestampValue"in e?3:"stringValue"in e?5:"bytesValue"in e?6:"referenceValue"in e?7:"geoPointValue"in e?8:"arrayValue"in e?9:"mapValue"in e?Fs(e)?4:Ug(e)?9007199254740991:10:A()}function wt(e,t){if(e===t)return!0;const n=ae(e);if(n!==ae(t))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return e.booleanValue===t.booleanValue;case 4:return fn(e).isEqual(fn(t));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const o=Gt(i.timestampValue),a=Gt(s.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos}(e,t);case 5:return e.stringValue===t.stringValue;case 6:return function(i,s){return Re(i.bytesValue).isEqual(Re(s.bytesValue))}(e,t);case 7:return e.referenceValue===t.referenceValue;case 8:return function(i,s){return x(i.geoPointValue.latitude)===x(s.geoPointValue.latitude)&&x(i.geoPointValue.longitude)===x(s.geoPointValue.longitude)}(e,t);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return x(i.integerValue)===x(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const o=x(i.doubleValue),a=x(s.doubleValue);return o===a?Ir(o)===Ir(a):isNaN(o)&&isNaN(a)}return!1}(e,t);case 9:return Ae(e.arrayValue.values||[],t.arrayValue.values||[],wt);case 10:return function(i,s){const o=i.mapValue.fields||{},a=s.mapValue.fields||{};if(Yo(o)!==Yo(a))return!1;for(const c in o)if(o.hasOwnProperty(c)&&(a[c]===void 0||!wt(o[c],a[c])))return!1;return!0}(e,t);default:return A()}}function gn(e,t){return(e.values||[]).find(n=>wt(n,t))!==void 0}function Pe(e,t){if(e===t)return 0;const n=ae(e),r=ae(t);if(n!==r)return k(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return k(e.booleanValue,t.booleanValue);case 2:return function(s,o){const a=x(s.integerValue||s.doubleValue),c=x(o.integerValue||o.doubleValue);return a<c?-1:a>c?1:a===c?0:isNaN(a)?isNaN(c)?0:-1:1}(e,t);case 3:return Zo(e.timestampValue,t.timestampValue);case 4:return Zo(fn(e),fn(t));case 5:return k(e.stringValue,t.stringValue);case 6:return function(s,o){const a=Re(s),c=Re(o);return a.compareTo(c)}(e.bytesValue,t.bytesValue);case 7:return function(s,o){const a=s.split("/"),c=o.split("/");for(let l=0;l<a.length&&l<c.length;l++){const u=k(a[l],c[l]);if(u!==0)return u}return k(a.length,c.length)}(e.referenceValue,t.referenceValue);case 8:return function(s,o){const a=k(x(s.latitude),x(o.latitude));return a!==0?a:k(x(s.longitude),x(o.longitude))}(e.geoPointValue,t.geoPointValue);case 9:return function(s,o){const a=s.values||[],c=o.values||[];for(let l=0;l<a.length&&l<c.length;++l){const u=Pe(a[l],c[l]);if(u)return u}return k(a.length,c.length)}(e.arrayValue,t.arrayValue);case 10:return function(s,o){if(s===Kn.mapValue&&o===Kn.mapValue)return 0;if(s===Kn.mapValue)return 1;if(o===Kn.mapValue)return-1;const a=s.fields||{},c=Object.keys(a),l=o.fields||{},u=Object.keys(l);c.sort(),u.sort();for(let h=0;h<c.length&&h<u.length;++h){const f=k(c[h],u[h]);if(f!==0)return f;const m=Pe(a[c[h]],l[u[h]]);if(m!==0)return m}return k(c.length,u.length)}(e.mapValue,t.mapValue);default:throw A()}}function Zo(e,t){if(typeof e=="string"&&typeof t=="string"&&e.length===t.length)return k(e,t);const n=Gt(e),r=Gt(t),i=k(n.seconds,r.seconds);return i!==0?i:k(n.nanos,r.nanos)}function Se(e){return zi(e)}function zi(e){return"nullValue"in e?"null":"booleanValue"in e?""+e.booleanValue:"integerValue"in e?""+e.integerValue:"doubleValue"in e?""+e.doubleValue:"timestampValue"in e?function(n){const r=Gt(n);return`time(${r.seconds},${r.nanos})`}(e.timestampValue):"stringValue"in e?e.stringValue:"bytesValue"in e?function(n){return Re(n).toBase64()}(e.bytesValue):"referenceValue"in e?function(n){return T.fromName(n).toString()}(e.referenceValue):"geoPointValue"in e?function(n){return`geo(${n.latitude},${n.longitude})`}(e.geoPointValue):"arrayValue"in e?function(n){let r="[",i=!0;for(const s of n.values||[])i?i=!1:r+=",",r+=zi(s);return r+"]"}(e.arrayValue):"mapValue"in e?function(n){const r=Object.keys(n.fields||{}).sort();let i="{",s=!0;for(const o of r)s?s=!1:i+=",",i+=`${o}:${zi(n.fields[o])}`;return i+"}"}(e.mapValue):A()}function ta(e,t){return{referenceValue:`projects/${e.projectId}/databases/${e.database}/documents/${t.path.canonicalString()}`}}function Wi(e){return!!e&&"integerValue"in e}function Us(e){return!!e&&"arrayValue"in e}function ea(e){return!!e&&"nullValue"in e}function na(e){return!!e&&"doubleValue"in e&&isNaN(Number(e.doubleValue))}function nr(e){return!!e&&"mapValue"in e}function Ke(e){if(e.geoPointValue)return{geoPointValue:Object.assign({},e.geoPointValue)};if(e.timestampValue&&typeof e.timestampValue=="object")return{timestampValue:Object.assign({},e.timestampValue)};if(e.mapValue){const t={mapValue:{fields:{}}};return fe(e.mapValue.fields,(n,r)=>t.mapValue.fields[n]=Ke(r)),t}if(e.arrayValue){const t={arrayValue:{values:[]}};for(let n=0;n<(e.arrayValue.values||[]).length;++n)t.arrayValue.values[n]=Ke(e.arrayValue.values[n]);return t}return Object.assign({},e)}function Ug(e){return(((e.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class at{constructor(t){this.value=t}static empty(){return new at({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let n=this.value;for(let r=0;r<t.length-1;++r)if(n=(n.mapValue.fields||{})[t.get(r)],!nr(n))return null;return n=(n.mapValue.fields||{})[t.lastSegment()],n||null}}set(t,n){this.getFieldsMap(t.popLast())[t.lastSegment()]=Ke(n)}setAll(t){let n=tt.emptyPath(),r={},i=[];t.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const c=this.getFieldsMap(n);this.applyChanges(c,r,i),r={},i=[],n=a.popLast()}o?r[a.lastSegment()]=Ke(o):i.push(a.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(t){const n=this.field(t.popLast());nr(n)&&n.mapValue.fields&&delete n.mapValue.fields[t.lastSegment()]}isEqual(t){return wt(this.value,t.value)}getFieldsMap(t){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<t.length;++r){let i=n.mapValue.fields[t.get(r)];nr(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[t.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(t,n,r){fe(n,(i,s)=>t[i]=s);for(const i of r)delete t[i]}clone(){return new at(Ke(this.value))}}function Al(e){const t=[];return fe(e.fields,(n,r)=>{const i=new tt([n]);if(nr(r)){const s=Al(r.mapValue).fields;if(s.length===0)t.push(i);else for(const o of s)t.push(i.child(o))}else t.push(i)}),new ct(t)}/**
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
 */class ht{constructor(t,n,r,i,s,o,a){this.key=t,this.documentType=n,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=a}static newInvalidDocument(t){return new ht(t,0,V.min(),V.min(),V.min(),at.empty(),0)}static newFoundDocument(t,n,r,i){return new ht(t,1,n,V.min(),r,i,0)}static newNoDocument(t,n){return new ht(t,2,n,V.min(),V.min(),at.empty(),0)}static newUnknownDocument(t,n){return new ht(t,3,n,V.min(),V.min(),at.empty(),2)}convertToFoundDocument(t,n){return!this.createTime.isEqual(V.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=t),this.version=t,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=at.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=at.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=V.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(t){return t instanceof ht&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new ht(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tr{constructor(t,n){this.position=t,this.inclusive=n}}function ra(e,t,n){let r=0;for(let i=0;i<e.position.length;i++){const s=t[i],o=e.position[i];if(s.field.isKeyField()?r=T.comparator(T.fromName(o.referenceValue),n.key):r=Pe(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function ia(e,t){if(e===null)return t===null;if(t===null||e.inclusive!==t.inclusive||e.position.length!==t.position.length)return!1;for(let n=0;n<e.position.length;n++)if(!wt(e.position[n],t.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qe{constructor(t,n="asc"){this.field=t,this.dir=n}}function Bg(e,t){return e.dir===t.dir&&e.field.isEqual(t.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rl{}class U extends Rl{constructor(t,n,r){super(),this.field=t,this.op=n,this.value=r}static create(t,n,r){return t.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(t,n,r):new $g(t,n,r):n==="array-contains"?new Gg(t,r):n==="in"?new zg(t,r):n==="not-in"?new Wg(t,r):n==="array-contains-any"?new Kg(t,r):new U(t,n,r)}static createKeyFieldInFilter(t,n,r){return n==="in"?new qg(t,r):new Hg(t,r)}matches(t){const n=t.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(Pe(n,this.value)):n!==null&&ae(this.value)===ae(n)&&this.matchesComparison(Pe(n,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return A()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class gt extends Rl{constructor(t,n){super(),this.filters=t,this.op=n,this.ce=null}static create(t,n){return new gt(t,n)}matches(t){return Pl(this)?this.filters.find(n=>!n.matches(t))===void 0:this.filters.find(n=>n.matches(t))!==void 0}getFlattenedFilters(){return this.ce!==null||(this.ce=this.filters.reduce((t,n)=>t.concat(n.getFlattenedFilters()),[])),this.ce}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const t=this.le(n=>n.isInequality());return t!==null?t.field:null}le(t){for(const n of this.getFlattenedFilters())if(t(n))return n;return null}}function Pl(e){return e.op==="and"}function Sl(e){return jg(e)&&Pl(e)}function jg(e){for(const t of e.filters)if(t instanceof gt)return!1;return!0}function Ki(e){if(e instanceof U)return e.field.canonicalString()+e.op.toString()+Se(e.value);if(Sl(e))return e.filters.map(t=>Ki(t)).join(",");{const t=e.filters.map(n=>Ki(n)).join(",");return`${e.op}(${t})`}}function Cl(e,t){return e instanceof U?function(r,i){return i instanceof U&&r.op===i.op&&r.field.isEqual(i.field)&&wt(r.value,i.value)}(e,t):e instanceof gt?function(r,i){return i instanceof gt&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((s,o,a)=>s&&Cl(o,i.filters[a]),!0):!1}(e,t):void A()}function bl(e){return e instanceof U?function(n){return`${n.field.canonicalString()} ${n.op} ${Se(n.value)}`}(e):e instanceof gt?function(n){return n.op.toString()+" {"+n.getFilters().map(bl).join(" ,")+"}"}(e):"Filter"}class $g extends U{constructor(t,n,r){super(t,n,r),this.key=T.fromName(r.referenceValue)}matches(t){const n=T.comparator(t.key,this.key);return this.matchesComparison(n)}}class qg extends U{constructor(t,n){super(t,"in",n),this.keys=kl("in",n)}matches(t){return this.keys.some(n=>n.isEqual(t.key))}}class Hg extends U{constructor(t,n){super(t,"not-in",n),this.keys=kl("not-in",n)}matches(t){return!this.keys.some(n=>n.isEqual(t.key))}}function kl(e,t){var n;return(((n=t.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>T.fromName(r.referenceValue))}class Gg extends U{constructor(t,n){super(t,"array-contains",n)}matches(t){const n=t.data.field(this.field);return Us(n)&&gn(n.arrayValue,this.value)}}class zg extends U{constructor(t,n){super(t,"in",n)}matches(t){const n=t.data.field(this.field);return n!==null&&gn(this.value.arrayValue,n)}}class Wg extends U{constructor(t,n){super(t,"not-in",n)}matches(t){if(gn(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=t.data.field(this.field);return n!==null&&!gn(this.value.arrayValue,n)}}class Kg extends U{constructor(t,n){super(t,"array-contains-any",n)}matches(t){const n=t.data.field(this.field);return!(!Us(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>gn(this.value.arrayValue,r))}}/**
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
 */class Qg{constructor(t,n=null,r=[],i=[],s=null,o=null,a=null){this.path=t,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=a,this.he=null}}function sa(e,t=null,n=[],r=[],i=null,s=null,o=null){return new Qg(e,t,n,r,i,s,o)}function Bs(e){const t=b(e);if(t.he===null){let n=t.path.canonicalString();t.collectionGroup!==null&&(n+="|cg:"+t.collectionGroup),n+="|f:",n+=t.filters.map(r=>Ki(r)).join(","),n+="|ob:",n+=t.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),Gr(t.limit)||(n+="|l:",n+=t.limit),t.startAt&&(n+="|lb:",n+=t.startAt.inclusive?"b:":"a:",n+=t.startAt.position.map(r=>Se(r)).join(",")),t.endAt&&(n+="|ub:",n+=t.endAt.inclusive?"a:":"b:",n+=t.endAt.position.map(r=>Se(r)).join(",")),t.he=n}return t.he}function js(e,t){if(e.limit!==t.limit||e.orderBy.length!==t.orderBy.length)return!1;for(let n=0;n<e.orderBy.length;n++)if(!Bg(e.orderBy[n],t.orderBy[n]))return!1;if(e.filters.length!==t.filters.length)return!1;for(let n=0;n<e.filters.length;n++)if(!Cl(e.filters[n],t.filters[n]))return!1;return e.collectionGroup===t.collectionGroup&&!!e.path.isEqual(t.path)&&!!ia(e.startAt,t.startAt)&&ia(e.endAt,t.endAt)}/**
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
 */class On{constructor(t,n=null,r=[],i=[],s=null,o="F",a=null,c=null){this.path=t,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=a,this.endAt=c,this.Pe=null,this.Ie=null,this.Te=null,this.startAt,this.endAt}}function Jg(e,t,n,r,i,s,o,a){return new On(e,t,n,r,i,s,o,a)}function Yg(e){return new On(e)}function oa(e){return e.filters.length===0&&e.limit===null&&e.startAt==null&&e.endAt==null&&(e.explicitOrderBy.length===0||e.explicitOrderBy.length===1&&e.explicitOrderBy[0].field.isKeyField())}function Nl(e){return e.explicitOrderBy.length>0?e.explicitOrderBy[0].field:null}function $s(e){for(const t of e.filters){const n=t.getFirstInequalityField();if(n!==null)return n}return null}function Dl(e){return e.collectionGroup!==null}function Je(e){const t=b(e);if(t.Pe===null){t.Pe=[];const n=$s(t),r=Nl(t);if(n!==null&&r===null)n.isKeyField()||t.Pe.push(new Qe(n)),t.Pe.push(new Qe(tt.keyField(),"asc"));else{let i=!1;for(const s of t.explicitOrderBy)t.Pe.push(s),s.field.isKeyField()&&(i=!0);if(!i){const s=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";t.Pe.push(new Qe(tt.keyField(),s))}}}return t.Pe}function Ce(e){const t=b(e);return t.Ie||(t.Ie=Vl(t,Je(e))),t.Ie}function Vl(e,t){if(e.limitType==="F")return sa(e.path,e.collectionGroup,t,e.filters,e.limit,e.startAt,e.endAt);{t=t.map(i=>{const s=i.dir==="desc"?"asc":"desc";return new Qe(i.field,s)});const n=e.endAt?new Tr(e.endAt.position,e.endAt.inclusive):null,r=e.startAt?new Tr(e.startAt.position,e.startAt.inclusive):null;return sa(e.path,e.collectionGroup,t,e.filters,e.limit,n,r)}}function Qi(e,t){t.getFirstInequalityField(),$s(e);const n=e.filters.concat([t]);return new On(e.path,e.collectionGroup,e.explicitOrderBy.slice(),n,e.limit,e.limitType,e.startAt,e.endAt)}function Ji(e,t,n){return new On(e.path,e.collectionGroup,e.explicitOrderBy.slice(),e.filters.slice(),t,n,e.startAt,e.endAt)}function Ol(e,t){return js(Ce(e),Ce(t))&&e.limitType===t.limitType}function Ml(e){return`${Bs(Ce(e))}|lt:${e.limitType}`}function aa(e){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(i=>bl(i)).join(", ")}]`),Gr(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(i=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(i)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(i=>Se(i)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(i=>Se(i)).join(",")),`Target(${r})`}(Ce(e))}; limitType=${e.limitType})`}function qs(e,t){return t.isFoundDocument()&&function(r,i){const s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):T.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)}(e,t)&&function(r,i){for(const s of Je(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(e,t)&&function(r,i){for(const s of r.filters)if(!s.matches(i))return!1;return!0}(e,t)&&function(r,i){return!(r.startAt&&!function(o,a,c){const l=ra(o,a,c);return o.inclusive?l<=0:l<0}(r.startAt,Je(r),i)||r.endAt&&!function(o,a,c){const l=ra(o,a,c);return o.inclusive?l>=0:l>0}(r.endAt,Je(r),i))}(e,t)}function Xg(e){return(t,n)=>{let r=!1;for(const i of Je(e)){const s=Zg(i,t,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function Zg(e,t,n){const r=e.field.isKeyField()?T.comparator(t.key,n.key):function(s,o,a){const c=o.data.field(s),l=a.data.field(s);return c!==null&&l!==null?Pe(c,l):A()}(e.field,t,n);switch(e.dir){case"asc":return r;case"desc":return-1*r;default:return A()}}/**
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
 */class Le{constructor(t,n){this.mapKeyFn=t,this.equalsFn=n,this.inner={},this.innerSize=0}get(t){const n=this.mapKeyFn(t),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,t))return s}}has(t){return this.get(t)!==void 0}set(t,n){const r=this.mapKeyFn(t),i=this.inner[r];if(i===void 0)return this.inner[r]=[[t,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],t))return void(i[s]=[t,n]);i.push([t,n]),this.innerSize++}delete(t){const n=this.mapKeyFn(t),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],t))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(t){fe(this.inner,(n,r)=>{for(const[i,s]of r)t(i,s)})}isEmpty(){return wl(this.inner)}size(){return this.innerSize}}/**
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
 */const tm=new ot(T.comparator);function wr(){return tm}const Ll=new ot(T.comparator);function Qn(...e){let t=Ll;for(const n of e)t=t.insert(n.key,n);return t}function Fl(e){let t=Ll;return e.forEach((n,r)=>t=t.insert(n,r.overlayedDocument)),t}function te(){return Ye()}function xl(){return Ye()}function Ye(){return new Le(e=>e.toString(),(e,t)=>e.isEqual(t))}const em=new ot(T.comparator),nm=new st(T.comparator);function Z(...e){let t=nm;for(const n of e)t=t.add(n);return t}const rm=new st(k);function im(){return rm}/**
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
 */function Ul(e,t){if(e.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Ir(t)?"-0":t}}function Bl(e){return{integerValue:""+e}}function sm(e,t){return Mg(t)?Bl(t):Ul(e,t)}/**
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
 */class zr{constructor(){this._=void 0}}function om(e,t,n){return e instanceof mn?function(i,s){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&Fs(s)&&(s=xs(s)),s&&(o.fields.__previous_value__=s),{mapValue:o}}(n,t):e instanceof _n?$l(e,t):e instanceof yn?ql(e,t):function(i,s){const o=jl(i,s),a=ca(o)+ca(i.Ee);return Wi(o)&&Wi(i.Ee)?Bl(a):Ul(i.serializer,a)}(e,t)}function am(e,t,n){return e instanceof _n?$l(e,t):e instanceof yn?ql(e,t):n}function jl(e,t){return e instanceof Ar?function(r){return Wi(r)||function(s){return!!s&&"doubleValue"in s}(r)}(t)?t:{integerValue:0}:null}class mn extends zr{}class _n extends zr{constructor(t){super(),this.elements=t}}function $l(e,t){const n=Hl(t);for(const r of e.elements)n.some(i=>wt(i,r))||n.push(r);return{arrayValue:{values:n}}}class yn extends zr{constructor(t){super(),this.elements=t}}function ql(e,t){let n=Hl(t);for(const r of e.elements)n=n.filter(i=>!wt(i,r));return{arrayValue:{values:n}}}class Ar extends zr{constructor(t,n){super(),this.serializer=t,this.Ee=n}}function ca(e){return x(e.integerValue||e.doubleValue)}function Hl(e){return Us(e)&&e.arrayValue.values?e.arrayValue.values.slice():[]}/**
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
 */class cm{constructor(t,n){this.field=t,this.transform=n}}function lm(e,t){return e.field.isEqual(t.field)&&function(r,i){return r instanceof _n&&i instanceof _n||r instanceof yn&&i instanceof yn?Ae(r.elements,i.elements,wt):r instanceof Ar&&i instanceof Ar?wt(r.Ee,i.Ee):r instanceof mn&&i instanceof mn}(e.transform,t.transform)}class um{constructor(t,n){this.version=t,this.transformResults=n}}class dt{constructor(t,n){this.updateTime=t,this.exists=n}static none(){return new dt}static exists(t){return new dt(void 0,t)}static updateTime(t){return new dt(t)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function rr(e,t){return e.updateTime!==void 0?t.isFoundDocument()&&t.version.isEqual(e.updateTime):e.exists===void 0||e.exists===t.isFoundDocument()}class Wr{}function Gl(e,t){if(!e.hasLocalMutations||t&&t.fields.length===0)return null;if(t===null)return e.isNoDocument()?new Hs(e.key,dt.none()):new Mn(e.key,e.data,dt.none());{const n=e.data,r=at.empty();let i=new st(tt.comparator);for(let s of t.fields)if(!i.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new Qt(e.key,r,new ct(i.toArray()),dt.none())}}function hm(e,t,n){e instanceof Mn?function(i,s,o){const a=i.value.clone(),c=ua(i.fieldTransforms,s,o.transformResults);a.setAll(c),s.convertToFoundDocument(o.version,a).setHasCommittedMutations()}(e,t,n):e instanceof Qt?function(i,s,o){if(!rr(i.precondition,s))return void s.convertToUnknownDocument(o.version);const a=ua(i.fieldTransforms,s,o.transformResults),c=s.data;c.setAll(zl(i)),c.setAll(a),s.convertToFoundDocument(o.version,c).setHasCommittedMutations()}(e,t,n):function(i,s,o){s.convertToNoDocument(o.version).setHasCommittedMutations()}(0,t,n)}function Xe(e,t,n,r){return e instanceof Mn?function(s,o,a,c){if(!rr(s.precondition,o))return a;const l=s.value.clone(),u=ha(s.fieldTransforms,c,o);return l.setAll(u),o.convertToFoundDocument(o.version,l).setHasLocalMutations(),null}(e,t,n,r):e instanceof Qt?function(s,o,a,c){if(!rr(s.precondition,o))return a;const l=ha(s.fieldTransforms,c,o),u=o.data;return u.setAll(zl(s)),u.setAll(l),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),a===null?null:a.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(h=>h.field))}(e,t,n,r):function(s,o,a){return rr(s.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):a}(e,t,n)}function dm(e,t){let n=null;for(const r of e.fieldTransforms){const i=t.data.field(r.field),s=jl(r.transform,i||null);s!=null&&(n===null&&(n=at.empty()),n.set(r.field,s))}return n||null}function la(e,t){return e.type===t.type&&!!e.key.isEqual(t.key)&&!!e.precondition.isEqual(t.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&Ae(r,i,(s,o)=>lm(s,o))}(e.fieldTransforms,t.fieldTransforms)&&(e.type===0?e.value.isEqual(t.value):e.type!==1||e.data.isEqual(t.data)&&e.fieldMask.isEqual(t.fieldMask))}class Mn extends Wr{constructor(t,n,r,i=[]){super(),this.key=t,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class Qt extends Wr{constructor(t,n,r,i,s=[]){super(),this.key=t,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function zl(e){const t=new Map;return e.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=e.data.field(n);t.set(n,r)}}),t}function ua(e,t,n){const r=new Map;B(e.length===n.length);for(let i=0;i<n.length;i++){const s=e[i],o=s.transform,a=t.data.field(s.field);r.set(s.field,am(o,a,n[i]))}return r}function ha(e,t,n){const r=new Map;for(const i of e){const s=i.transform,o=n.data.field(i.field);r.set(i.field,om(s,o,t))}return r}class Hs extends Wr{constructor(t,n){super(),this.key=t,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class fm extends Wr{constructor(t,n){super(),this.key=t,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class pm{constructor(t,n,r,i){this.batchId=t,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(t,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(t.key)&&hm(s,t,r[i])}}applyToLocalView(t,n){for(const r of this.baseMutations)r.key.isEqual(t.key)&&(n=Xe(r,t,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(t.key)&&(n=Xe(r,t,n,this.localWriteTime));return n}applyToLocalDocumentSet(t,n){const r=xl();return this.mutations.forEach(i=>{const s=t.get(i.key),o=s.overlayedDocument;let a=this.applyToLocalView(o,s.mutatedFields);a=n.has(i.key)?null:a;const c=Gl(o,a);c!==null&&r.set(i.key,c),o.isValidDocument()||o.convertToNoDocument(V.min())}),r}keys(){return this.mutations.reduce((t,n)=>t.add(n.key),Z())}isEqual(t){return this.batchId===t.batchId&&Ae(this.mutations,t.mutations,(n,r)=>la(n,r))&&Ae(this.baseMutations,t.baseMutations,(n,r)=>la(n,r))}}class Gs{constructor(t,n,r,i){this.batch=t,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(t,n,r){B(t.mutations.length===r.length);let i=function(){return em}();const s=t.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new Gs(t,n,r,i)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gm{constructor(t,n){this.largestBatchId=t,this.mutation=n}getKey(){return this.mutation.key}isEqual(t){return t!==null&&this.mutation===t.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mm{constructor(t,n,r){this.alias=t,this.de=n,this.fieldPath=r}}/**
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
 */var F,R;function _m(e){switch(e){default:return A();case d.CANCELLED:case d.UNKNOWN:case d.DEADLINE_EXCEEDED:case d.RESOURCE_EXHAUSTED:case d.INTERNAL:case d.UNAVAILABLE:case d.UNAUTHENTICATED:return!1;case d.INVALID_ARGUMENT:case d.NOT_FOUND:case d.ALREADY_EXISTS:case d.PERMISSION_DENIED:case d.FAILED_PRECONDITION:case d.ABORTED:case d.OUT_OF_RANGE:case d.UNIMPLEMENTED:case d.DATA_LOSS:return!0}}function ym(e){if(e===void 0)return qt("GRPC error has no .code"),d.UNKNOWN;switch(e){case F.OK:return d.OK;case F.CANCELLED:return d.CANCELLED;case F.UNKNOWN:return d.UNKNOWN;case F.DEADLINE_EXCEEDED:return d.DEADLINE_EXCEEDED;case F.RESOURCE_EXHAUSTED:return d.RESOURCE_EXHAUSTED;case F.INTERNAL:return d.INTERNAL;case F.UNAVAILABLE:return d.UNAVAILABLE;case F.UNAUTHENTICATED:return d.UNAUTHENTICATED;case F.INVALID_ARGUMENT:return d.INVALID_ARGUMENT;case F.NOT_FOUND:return d.NOT_FOUND;case F.ALREADY_EXISTS:return d.ALREADY_EXISTS;case F.PERMISSION_DENIED:return d.PERMISSION_DENIED;case F.FAILED_PRECONDITION:return d.FAILED_PRECONDITION;case F.ABORTED:return d.ABORTED;case F.OUT_OF_RANGE:return d.OUT_OF_RANGE;case F.UNIMPLEMENTED:return d.UNIMPLEMENTED;case F.DATA_LOSS:return d.DATA_LOSS;default:return A()}}(R=F||(F={}))[R.OK=0]="OK",R[R.CANCELLED=1]="CANCELLED",R[R.UNKNOWN=2]="UNKNOWN",R[R.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",R[R.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",R[R.NOT_FOUND=5]="NOT_FOUND",R[R.ALREADY_EXISTS=6]="ALREADY_EXISTS",R[R.PERMISSION_DENIED=7]="PERMISSION_DENIED",R[R.UNAUTHENTICATED=16]="UNAUTHENTICATED",R[R.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",R[R.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",R[R.ABORTED=10]="ABORTED",R[R.OUT_OF_RANGE=11]="OUT_OF_RANGE",R[R.UNIMPLEMENTED=12]="UNIMPLEMENTED",R[R.INTERNAL=13]="INTERNAL",R[R.UNAVAILABLE=14]="UNAVAILABLE",R[R.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */new Eg([4294967295,4294967295],0);const vm=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),Em=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),Im=(()=>({and:"AND",or:"OR"}))();class Tm{constructor(t,n){this.databaseId=t,this.useProto3Json=n}}function wm(e,t){return e.useProto3Json||Gr(t)?t:{value:t}}function Yi(e,t){return e.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function Am(e,t){return e.useProto3Json?t.toBase64():t.toUint8Array()}function Rm(e,t){return Yi(e,t.toTimestamp())}function Ie(e){return B(!!e),V.fromTimestamp(function(n){const r=Gt(n);return new j(r.seconds,r.nanos)}(e))}function zs(e,t){return function(r){return new D(["projects",r.projectId,"databases",r.database])}(e).child("documents").child(t).canonicalString()}function Pm(e){const t=D.fromString(e);return B(Ql(t)),t}function Xi(e,t){return zs(e.databaseId,t.path)}function da(e,t){return zs(e.databaseId,t)}function Sm(e){const t=Pm(e);return t.length===4?D.emptyPath():bm(t)}function Cm(e){return new D(["projects",e.databaseId.projectId,"databases",e.databaseId.database]).canonicalString()}function bm(e){return B(e.length>4&&e.get(4)==="documents"),e.popFirst(5)}function fa(e,t,n){return{name:Xi(e,t),fields:n.value.mapValue.fields}}function km(e,t){let n;if(t instanceof Mn)n={update:fa(e,t.key,t.value)};else if(t instanceof Hs)n={delete:Xi(e,t.key)};else if(t instanceof Qt)n={update:fa(e,t.key,t.data),updateMask:Fm(t.fieldMask)};else{if(!(t instanceof fm))return A();n={verify:Xi(e,t.key)}}return t.fieldTransforms.length>0&&(n.updateTransforms=t.fieldTransforms.map(r=>function(s,o){const a=o.transform;if(a instanceof mn)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof _n)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof yn)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof Ar)return{fieldPath:o.field.canonicalString(),increment:a.Ee};throw A()}(0,r))),t.precondition.isNone||(n.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:Rm(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:A()}(e,t.precondition)),n}function Nm(e,t){return e&&e.length>0?(B(t!==void 0),e.map(n=>function(i,s){let o=i.updateTime?Ie(i.updateTime):Ie(s);return o.isEqual(V.min())&&(o=Ie(s)),new um(o,i.transformResults||[])}(n,t))):[]}function Dm(e,t){const n={structuredQuery:{}},r=t.path;t.collectionGroup!==null?(n.parent=da(e,r),n.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(n.parent=da(e,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const i=function(c){if(c.length!==0)return Kl(gt.create(c,"and"))}(t.filters);i&&(n.structuredQuery.where=i);const s=function(c){if(c.length!==0)return c.map(l=>function(h){return{field:Lt(h.field),direction:Om(h.dir)}}(l))}(t.orderBy);s&&(n.structuredQuery.orderBy=s);const o=wm(e,t.limit);return o!==null&&(n.structuredQuery.limit=o),t.startAt&&(n.structuredQuery.startAt=function(c){return{before:c.inclusive,values:c.position}}(t.startAt)),t.endAt&&(n.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(t.endAt)),n}function Vm(e){let t=Sm(e.parent);const n=e.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){B(r===1);const u=n.from[0];u.allDescendants?i=u.collectionId:t=t.child(u.collectionId)}let s=[];n.where&&(s=function(h){const f=Wl(h);return f instanceof gt&&Sl(f)?f.getFilters():[f]}(n.where));let o=[];n.orderBy&&(o=function(h){return h.map(f=>function(I){return new Qe(ge(I.field),function(w){switch(w){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(I.direction))}(f))}(n.orderBy));let a=null;n.limit&&(a=function(h){let f;return f=typeof h=="object"?h.value:h,Gr(f)?null:f}(n.limit));let c=null;n.startAt&&(c=function(h){const f=!!h.before,m=h.values||[];return new Tr(m,f)}(n.startAt));let l=null;return n.endAt&&(l=function(h){const f=!h.before,m=h.values||[];return new Tr(m,f)}(n.endAt)),Jg(t,i,o,s,a,"F",c,l)}function Wl(e){return e.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=ge(n.unaryFilter.field);return U.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=ge(n.unaryFilter.field);return U.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=ge(n.unaryFilter.field);return U.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=ge(n.unaryFilter.field);return U.create(o,"!=",{nullValue:"NULL_VALUE"});default:return A()}}(e):e.fieldFilter!==void 0?function(n){return U.create(ge(n.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return A()}}(n.fieldFilter.op),n.fieldFilter.value)}(e):e.compositeFilter!==void 0?function(n){return gt.create(n.compositeFilter.filters.map(r=>Wl(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return A()}}(n.compositeFilter.op))}(e):A()}function Om(e){return vm[e]}function Mm(e){return Em[e]}function Lm(e){return Im[e]}function Lt(e){return{fieldPath:e.canonicalString()}}function ge(e){return tt.fromServerFormat(e.fieldPath)}function Kl(e){return e instanceof U?function(n){if(n.op==="=="){if(na(n.value))return{unaryFilter:{field:Lt(n.field),op:"IS_NAN"}};if(ea(n.value))return{unaryFilter:{field:Lt(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(na(n.value))return{unaryFilter:{field:Lt(n.field),op:"IS_NOT_NAN"}};if(ea(n.value))return{unaryFilter:{field:Lt(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Lt(n.field),op:Mm(n.op),value:n.value}}}(e):e instanceof gt?function(n){const r=n.getFilters().map(i=>Kl(i));return r.length===1?r[0]:{compositeFilter:{op:Lm(n.op),filters:r}}}(e):A()}function Fm(e){const t=[];return e.fields.forEach(n=>t.push(n.canonicalString())),{fieldPaths:t}}function Ql(e){return e.length>=4&&e.get(0)==="projects"&&e.get(2)==="databases"}/**
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
 */class xm{constructor(t){this.lt=t}}function Um(e){const t=Vm({parent:e.parent,structuredQuery:e.structuredQuery});return e.limitType==="LAST"?Ji(t,t.limit,"L"):t}/**
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
 */class Bm{constructor(){this.on=new jm}addToCollectionParentIndex(t,n){return this.on.add(n),p.resolve()}getCollectionParents(t,n){return p.resolve(this.on.getEntries(n))}addFieldIndex(t,n){return p.resolve()}deleteFieldIndex(t,n){return p.resolve()}getDocumentsMatchingTarget(t,n){return p.resolve(null)}getIndexType(t,n){return p.resolve(0)}getFieldIndexes(t,n){return p.resolve([])}getNextCollectionGroupToUpdate(t){return p.resolve(null)}getMinOffset(t,n){return p.resolve(Ht.min())}getMinOffsetFromCollectionGroup(t,n){return p.resolve(Ht.min())}updateCollectionGroup(t,n,r){return p.resolve()}updateIndexEntries(t,n){return p.resolve()}}class jm{constructor(){this.index={}}add(t){const n=t.lastSegment(),r=t.popLast(),i=this.index[n]||new st(D.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(t){const n=t.lastSegment(),r=t.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(t){return(this.index[t]||new st(D.comparator)).toArray()}}/**
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
 */class be{constructor(t){this.xn=t}next(){return this.xn+=2,this.xn}static On(){return new be(0)}static Nn(){return new be(-1)}}/**
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
 */class $m{constructor(){this.changes=new Le(t=>t.toString(),(t,n)=>t.isEqual(n)),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,n){this.assertNotApplied(),this.changes.set(t,ht.newInvalidDocument(t).setReadTime(n))}getEntry(t,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?p.resolve(r):this.getFromCache(t,n)}getEntries(t,n){return this.getAllFromCache(t,n)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}/**
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
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qm{constructor(t,n){this.overlayedDocument=t,this.mutatedFields=n}}/**
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
 */class Hm{constructor(t,n,r,i){this.remoteDocumentCache=t,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(t,n){let r=null;return this.documentOverlayCache.getOverlay(t,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(t,n))).next(i=>(r!==null&&Xe(r.mutation,i,ct.empty(),j.now()),i))}getDocuments(t,n){return this.remoteDocumentCache.getEntries(t,n).next(r=>this.getLocalViewOfDocuments(t,r,Z()).next(()=>r))}getLocalViewOfDocuments(t,n,r=Z()){const i=te();return this.populateOverlays(t,i,n).next(()=>this.computeViews(t,n,i,r).next(s=>{let o=Qn();return s.forEach((a,c)=>{o=o.insert(a,c.overlayedDocument)}),o}))}getOverlayedDocuments(t,n){const r=te();return this.populateOverlays(t,r,n).next(()=>this.computeViews(t,n,r,Z()))}populateOverlays(t,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(t,i).next(s=>{s.forEach((o,a)=>{n.set(o,a)})})}computeViews(t,n,r,i){let s=wr();const o=Ye(),a=function(){return Ye()}();return n.forEach((c,l)=>{const u=r.get(l.key);i.has(l.key)&&(u===void 0||u.mutation instanceof Qt)?s=s.insert(l.key,l):u!==void 0?(o.set(l.key,u.mutation.getFieldMask()),Xe(u.mutation,l,u.mutation.getFieldMask(),j.now())):o.set(l.key,ct.empty())}),this.recalculateAndSaveOverlays(t,s).next(c=>(c.forEach((l,u)=>o.set(l,u)),n.forEach((l,u)=>{var h;return a.set(l,new qm(u,(h=o.get(l))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(t,n){const r=Ye();let i=new ot((o,a)=>o-a),s=Z();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,n).next(o=>{for(const a of o)a.keys().forEach(c=>{const l=n.get(c);if(l===null)return;let u=r.get(c)||ct.empty();u=a.applyToLocalView(l,u),r.set(c,u);const h=(i.get(a.batchId)||Z()).add(c);i=i.insert(a.batchId,h)})}).next(()=>{const o=[],a=i.getReverseIterator();for(;a.hasNext();){const c=a.getNext(),l=c.key,u=c.value,h=xl();u.forEach(f=>{if(!s.has(f)){const m=Gl(n.get(f),r.get(f));m!==null&&h.set(f,m),s=s.add(f)}}),o.push(this.documentOverlayCache.saveOverlays(t,l,h))}return p.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(t,n){return this.remoteDocumentCache.getEntries(t,n).next(r=>this.recalculateAndSaveOverlays(t,r))}getDocumentsMatchingQuery(t,n,r){return function(s){return T.isDocumentKey(s.path)&&s.collectionGroup===null&&s.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(t,n.path):Dl(n)?this.getDocumentsMatchingCollectionGroupQuery(t,n,r):this.getDocumentsMatchingCollectionQuery(t,n,r)}getNextDocuments(t,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(t,n,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,n,r.largestBatchId,i-s.size):p.resolve(te());let a=-1,c=s;return o.next(l=>p.forEach(l,(u,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),s.get(u)?p.resolve():this.remoteDocumentCache.getEntry(t,u).next(f=>{c=c.insert(u,f)}))).next(()=>this.populateOverlays(t,l,s)).next(()=>this.computeViews(t,c,l,Z())).next(u=>({batchId:a,changes:Fl(u)})))})}getDocumentsMatchingDocumentQuery(t,n){return this.getDocument(t,new T(n)).next(r=>{let i=Qn();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(t,n,r){const i=n.collectionGroup;let s=Qn();return this.indexManager.getCollectionParents(t,i).next(o=>p.forEach(o,a=>{const c=function(u,h){return new On(h,null,u.explicitOrderBy.slice(),u.filters.slice(),u.limit,u.limitType,u.startAt,u.endAt)}(n,a.child(i));return this.getDocumentsMatchingCollectionQuery(t,c,r).next(l=>{l.forEach((u,h)=>{s=s.insert(u,h)})})}).next(()=>s))}getDocumentsMatchingCollectionQuery(t,n,r){let i;return this.documentOverlayCache.getOverlaysForCollection(t,n.path,r.largestBatchId).next(s=>(i=s,this.remoteDocumentCache.getDocumentsMatchingQuery(t,n,r,i))).next(s=>{i.forEach((a,c)=>{const l=c.getKey();s.get(l)===null&&(s=s.insert(l,ht.newInvalidDocument(l)))});let o=Qn();return s.forEach((a,c)=>{const l=i.get(a);l!==void 0&&Xe(l.mutation,c,ct.empty(),j.now()),qs(n,c)&&(o=o.insert(a,c))}),o})}}/**
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
 */class Gm{constructor(t){this.serializer=t,this.ur=new Map,this.cr=new Map}getBundleMetadata(t,n){return p.resolve(this.ur.get(n))}saveBundleMetadata(t,n){return this.ur.set(n.id,function(i){return{id:i.id,version:i.version,createTime:Ie(i.createTime)}}(n)),p.resolve()}getNamedQuery(t,n){return p.resolve(this.cr.get(n))}saveNamedQuery(t,n){return this.cr.set(n.name,function(i){return{name:i.name,query:Um(i.bundledQuery),readTime:Ie(i.readTime)}}(n)),p.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zm{constructor(){this.overlays=new ot(T.comparator),this.lr=new Map}getOverlay(t,n){return p.resolve(this.overlays.get(n))}getOverlays(t,n){const r=te();return p.forEach(n,i=>this.getOverlay(t,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(t,n,r){return r.forEach((i,s)=>{this.Pt(t,n,s)}),p.resolve()}removeOverlaysForBatchId(t,n,r){const i=this.lr.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.lr.delete(r)),p.resolve()}getOverlaysForCollection(t,n,r){const i=te(),s=n.length+1,o=new T(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const c=a.getNext().value,l=c.getKey();if(!n.isPrefixOf(l.path))break;l.path.length===s&&c.largestBatchId>r&&i.set(c.getKey(),c)}return p.resolve(i)}getOverlaysForCollectionGroup(t,n,r,i){let s=new ot((l,u)=>l-u);const o=this.overlays.getIterator();for(;o.hasNext();){const l=o.getNext().value;if(l.getKey().getCollectionGroup()===n&&l.largestBatchId>r){let u=s.get(l.largestBatchId);u===null&&(u=te(),s=s.insert(l.largestBatchId,u)),u.set(l.getKey(),l)}}const a=te(),c=s.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((l,u)=>a.set(l,u)),!(a.size()>=i)););return p.resolve(a)}Pt(t,n,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.lr.get(i.largestBatchId).delete(r.key);this.lr.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new gm(n,r));let s=this.lr.get(n);s===void 0&&(s=Z(),this.lr.set(n,s)),this.lr.set(n,s.add(r.key))}}/**
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
 */class Ws{constructor(){this.hr=new st($.Pr),this.Ir=new st($.Tr)}isEmpty(){return this.hr.isEmpty()}addReference(t,n){const r=new $(t,n);this.hr=this.hr.add(r),this.Ir=this.Ir.add(r)}Er(t,n){t.forEach(r=>this.addReference(r,n))}removeReference(t,n){this.dr(new $(t,n))}Ar(t,n){t.forEach(r=>this.removeReference(r,n))}Rr(t){const n=new T(new D([])),r=new $(n,t),i=new $(n,t+1),s=[];return this.Ir.forEachInRange([r,i],o=>{this.dr(o),s.push(o.key)}),s}Vr(){this.hr.forEach(t=>this.dr(t))}dr(t){this.hr=this.hr.delete(t),this.Ir=this.Ir.delete(t)}mr(t){const n=new T(new D([])),r=new $(n,t),i=new $(n,t+1);let s=Z();return this.Ir.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(t){const n=new $(t,0),r=this.hr.firstAfterOrEqual(n);return r!==null&&t.isEqual(r.key)}}class ${constructor(t,n){this.key=t,this.gr=n}static Pr(t,n){return T.comparator(t.key,n.key)||k(t.gr,n.gr)}static Tr(t,n){return k(t.gr,n.gr)||T.comparator(t.key,n.key)}}/**
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
 */class Wm{constructor(t,n){this.indexManager=t,this.referenceDelegate=n,this.mutationQueue=[],this.pr=1,this.yr=new st($.Pr)}checkEmpty(t){return p.resolve(this.mutationQueue.length===0)}addMutationBatch(t,n,r,i){const s=this.pr;this.pr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new pm(s,n,r,i);this.mutationQueue.push(o);for(const a of i)this.yr=this.yr.add(new $(a.key,s)),this.indexManager.addToCollectionParentIndex(t,a.key.path.popLast());return p.resolve(o)}lookupMutationBatch(t,n){return p.resolve(this.wr(n))}getNextMutationBatchAfterBatchId(t,n){const r=n+1,i=this.Sr(r),s=i<0?0:i;return p.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return p.resolve(this.mutationQueue.length===0?-1:this.pr-1)}getAllMutationBatches(t){return p.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,n){const r=new $(n,0),i=new $(n,Number.POSITIVE_INFINITY),s=[];return this.yr.forEachInRange([r,i],o=>{const a=this.wr(o.gr);s.push(a)}),p.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(t,n){let r=new st(k);return n.forEach(i=>{const s=new $(i,0),o=new $(i,Number.POSITIVE_INFINITY);this.yr.forEachInRange([s,o],a=>{r=r.add(a.gr)})}),p.resolve(this.br(r))}getAllMutationBatchesAffectingQuery(t,n){const r=n.path,i=r.length+1;let s=r;T.isDocumentKey(s)||(s=s.child(""));const o=new $(new T(s),0);let a=new st(k);return this.yr.forEachWhile(c=>{const l=c.key.path;return!!r.isPrefixOf(l)&&(l.length===i&&(a=a.add(c.gr)),!0)},o),p.resolve(this.br(a))}br(t){const n=[];return t.forEach(r=>{const i=this.wr(r);i!==null&&n.push(i)}),n}removeMutationBatch(t,n){B(this.Dr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.yr;return p.forEach(n.mutations,i=>{const s=new $(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(t,i.key)}).next(()=>{this.yr=r})}Fn(t){}containsKey(t,n){const r=new $(n,0),i=this.yr.firstAfterOrEqual(r);return p.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(t){return this.mutationQueue.length,p.resolve()}Dr(t,n){return this.Sr(t)}Sr(t){return this.mutationQueue.length===0?0:t-this.mutationQueue[0].batchId}wr(t){const n=this.Sr(t);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class Km{constructor(t){this.vr=t,this.docs=function(){return new ot(T.comparator)}(),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.vr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(t,r.path.popLast())}removeEntry(t){const n=this.docs.get(t);n&&(this.docs=this.docs.remove(t),this.size-=n.size)}getEntry(t,n){const r=this.docs.get(n);return p.resolve(r?r.document.mutableCopy():ht.newInvalidDocument(n))}getEntries(t,n){let r=wr();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():ht.newInvalidDocument(i))}),p.resolve(r)}getDocumentsMatchingQuery(t,n,r,i){let s=wr();const o=n.path,a=new T(o.child("")),c=this.docs.getIteratorFrom(a);for(;c.hasNext();){const{key:l,value:{document:u}}=c.getNext();if(!o.isPrefixOf(l.path))break;l.path.length>o.length+1||Dg(Ng(u),r)<=0||(i.has(u.key)||qs(n,u))&&(s=s.insert(u.key,u.mutableCopy()))}return p.resolve(s)}getAllFromCollectionGroup(t,n,r,i){A()}Cr(t,n){return p.forEach(this.docs,r=>n(r))}newChangeBuffer(t){return new Qm(this)}getSize(t){return p.resolve(this.size)}}class Qm extends $m{constructor(t){super(),this._r=t}applyChanges(t){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this._r.addEntry(t,i)):this._r.removeEntry(r)}),p.waitFor(n)}getFromCache(t,n){return this._r.getEntry(t,n)}getAllFromCache(t,n){return this._r.getEntries(t,n)}}/**
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
 */class Jm{constructor(t){this.persistence=t,this.Fr=new Le(n=>Bs(n),js),this.lastRemoteSnapshotVersion=V.min(),this.highestTargetId=0,this.Mr=0,this.Or=new Ws,this.targetCount=0,this.Nr=be.On()}forEachTarget(t,n){return this.Fr.forEach((r,i)=>n(i)),p.resolve()}getLastRemoteSnapshotVersion(t){return p.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return p.resolve(this.Mr)}allocateTargetId(t){return this.highestTargetId=this.Nr.next(),p.resolve(this.highestTargetId)}setTargetsMetadata(t,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Mr&&(this.Mr=n),p.resolve()}kn(t){this.Fr.set(t.target,t);const n=t.targetId;n>this.highestTargetId&&(this.Nr=new be(n),this.highestTargetId=n),t.sequenceNumber>this.Mr&&(this.Mr=t.sequenceNumber)}addTargetData(t,n){return this.kn(n),this.targetCount+=1,p.resolve()}updateTargetData(t,n){return this.kn(n),p.resolve()}removeTargetData(t,n){return this.Fr.delete(n.target),this.Or.Rr(n.targetId),this.targetCount-=1,p.resolve()}removeTargets(t,n,r){let i=0;const s=[];return this.Fr.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.Fr.delete(o),s.push(this.removeMatchingKeysForTargetId(t,a.targetId)),i++)}),p.waitFor(s).next(()=>i)}getTargetCount(t){return p.resolve(this.targetCount)}getTargetData(t,n){const r=this.Fr.get(n)||null;return p.resolve(r)}addMatchingKeys(t,n,r){return this.Or.Er(n,r),p.resolve()}removeMatchingKeys(t,n,r){this.Or.Ar(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(t,o))}),p.waitFor(s)}removeMatchingKeysForTargetId(t,n){return this.Or.Rr(n),p.resolve()}getMatchingKeysForTargetId(t,n){const r=this.Or.mr(n);return p.resolve(r)}containsKey(t,n){return p.resolve(this.Or.containsKey(n))}}/**
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
 */class Ym{constructor(t,n){this.Br={},this.overlays={},this.Lr=new Tl(0),this.kr=!1,this.kr=!0,this.referenceDelegate=t(this),this.qr=new Jm(this),this.indexManager=new Bm,this.remoteDocumentCache=function(i){return new Km(i)}(r=>this.referenceDelegate.Qr(r)),this.serializer=new xm(n),this.Kr=new Gm(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.kr=!1,Promise.resolve()}get started(){return this.kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let n=this.overlays[t.toKey()];return n||(n=new zm,this.overlays[t.toKey()]=n),n}getMutationQueue(t,n){let r=this.Br[t.toKey()];return r||(r=new Wm(n,this.referenceDelegate),this.Br[t.toKey()]=r),r}getTargetCache(){return this.qr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Kr}runTransaction(t,n,r){y("MemoryPersistence","Starting transaction:",t);const i=new Xm(this.Lr.next());return this.referenceDelegate.$r(),r(i).next(s=>this.referenceDelegate.Ur(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Wr(t,n){return p.or(Object.values(this.Br).map(r=>()=>r.containsKey(t,n)))}}class Xm extends Og{constructor(t){super(),this.currentSequenceNumber=t}}class Ks{constructor(t){this.persistence=t,this.Gr=new Ws,this.zr=null}static jr(t){return new Ks(t)}get Hr(){if(this.zr)return this.zr;throw A()}addReference(t,n,r){return this.Gr.addReference(r,n),this.Hr.delete(r.toString()),p.resolve()}removeReference(t,n,r){return this.Gr.removeReference(r,n),this.Hr.add(r.toString()),p.resolve()}markPotentiallyOrphaned(t,n){return this.Hr.add(n.toString()),p.resolve()}removeTarget(t,n){this.Gr.Rr(n.targetId).forEach(i=>this.Hr.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(t,n.targetId).next(i=>{i.forEach(s=>this.Hr.add(s.toString()))}).next(()=>r.removeTargetData(t,n))}$r(){this.zr=new Set}Ur(t){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return p.forEach(this.Hr,r=>{const i=T.fromPath(r);return this.Jr(t,i).next(s=>{s||n.removeEntry(i,V.min())})}).next(()=>(this.zr=null,n.apply(t)))}updateLimboDocument(t,n){return this.Jr(t,n).next(r=>{r?this.Hr.delete(n.toString()):this.Hr.add(n.toString())})}Qr(t){return 0}Jr(t,n){return p.or([()=>p.resolve(this.Gr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(t,n),()=>this.persistence.Wr(t,n)])}}/**
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
 */class Qs{constructor(t,n,r,i){this.targetId=t,this.fromCache=n,this.ki=r,this.qi=i}static Qi(t,n){let r=Z(),i=Z();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new Qs(t,n.fromCache,r,i)}}/**
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
 */class Zm{constructor(){this.Ki=!1}initialize(t,n){this.$i=t,this.indexManager=n,this.Ki=!0}getDocumentsMatchingQuery(t,n,r,i){return this.Ui(t,n).next(s=>s||this.Wi(t,n,i,r)).next(s=>s||this.Gi(t,n))}Ui(t,n){if(oa(n))return p.resolve(null);let r=Ce(n);return this.indexManager.getIndexType(t,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=Ji(n,null,"F"),r=Ce(n)),this.indexManager.getDocumentsMatchingTarget(t,r).next(s=>{const o=Z(...s);return this.$i.getDocuments(t,o).next(a=>this.indexManager.getMinOffset(t,r).next(c=>{const l=this.zi(n,a);return this.ji(n,l,o,c.readTime)?this.Ui(t,Ji(n,null,"F")):this.Hi(t,l,n,c)}))})))}Wi(t,n,r,i){return oa(n)||i.isEqual(V.min())?this.Gi(t,n):this.$i.getDocuments(t,r).next(s=>{const o=this.zi(n,s);return this.ji(n,o,r,i)?this.Gi(t,n):(Jo()<=P.DEBUG&&y("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),aa(n)),this.Hi(t,o,n,kg(i,-1)))})}zi(t,n){let r=new st(Xg(t));return n.forEach((i,s)=>{qs(t,s)&&(r=r.add(s))}),r}ji(t,n,r,i){if(t.limit===null)return!1;if(r.size!==n.size)return!0;const s=t.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Gi(t,n){return Jo()<=P.DEBUG&&y("QueryEngine","Using full collection scan to execute query:",aa(n)),this.$i.getDocumentsMatchingQuery(t,n,Ht.min())}Hi(t,n,r,i){return this.$i.getDocumentsMatchingQuery(t,r,i).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
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
 */class t_{constructor(t,n,r,i){this.persistence=t,this.Ji=n,this.serializer=i,this.Yi=new ot(k),this.Zi=new Le(s=>Bs(s),js),this.Xi=new Map,this.es=t.getRemoteDocumentCache(),this.qr=t.getTargetCache(),this.Kr=t.getBundleCache(),this.ts(r)}ts(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new Hm(this.es,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.es.setIndexManager(this.indexManager),this.Ji.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>t.collect(n,this.Yi))}}function e_(e,t,n,r){return new t_(e,t,n,r)}async function Jl(e,t){const n=b(e);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n.ts(t),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],a=[];let c=Z();for(const l of i){o.push(l.batchId);for(const u of l.mutations)c=c.add(u.key)}for(const l of s){a.push(l.batchId);for(const u of l.mutations)c=c.add(u.key)}return n.localDocuments.getDocuments(r,c).next(l=>({ns:l,removedBatchIds:o,addedBatchIds:a}))})})}function n_(e,t){const n=b(e);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=t.batch.keys(),s=n.es.newChangeBuffer({trackRemovals:!0});return function(a,c,l,u){const h=l.batch,f=h.keys();let m=p.resolve();return f.forEach(I=>{m=m.next(()=>u.getEntry(c,I)).next(S=>{const w=l.docVersions.get(I);B(w!==null),S.version.compareTo(w)<0&&(h.applyToRemoteDocument(S,l),S.isValidDocument()&&(S.setReadTime(l.commitVersion),u.addEntry(S)))})}),m.next(()=>a.mutationQueue.removeMutationBatch(c,h))}(n,r,t,s).next(()=>s.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,t.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(a){let c=Z();for(let l=0;l<a.mutationResults.length;++l)a.mutationResults[l].transformResults.length>0&&(c=c.add(a.batch.mutations[l].key));return c}(t))).next(()=>n.localDocuments.getDocuments(r,i))})}function r_(e){const t=b(e);return t.persistence.runTransaction("Get last remote snapshot version","readonly",n=>t.qr.getLastRemoteSnapshotVersion(n))}function i_(e,t){const n=b(e);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(t===void 0&&(t=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,t)))}class pa{constructor(){this.activeTargetIds=im()}Ps(t){this.activeTargetIds=this.activeTargetIds.add(t)}Is(t){this.activeTargetIds=this.activeTargetIds.delete(t)}hs(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class s_{constructor(){this.Js=new pa,this.Ys={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,n,r){}addLocalQueryTarget(t){return this.Js.Ps(t),this.Ys[t]||"not-current"}updateQueryState(t,n,r){this.Ys[t]=n}removeLocalQueryTarget(t){this.Js.Is(t)}isLocalQueryTarget(t){return this.Js.activeTargetIds.has(t)}clearQueryState(t){delete this.Ys[t]}getAllActiveQueryTargets(){return this.Js.activeTargetIds}isActiveQueryTarget(t){return this.Js.activeTargetIds.has(t)}start(){return this.Js=new pa,Promise.resolve()}handleUserChange(t,n,r){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}/**
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
 */class o_{Zs(t){}shutdown(){}}/**
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
 */class ga{constructor(){this.Xs=()=>this.eo(),this.no=()=>this.ro(),this.io=[],this.so()}Zs(t){this.io.push(t)}shutdown(){window.removeEventListener("online",this.Xs),window.removeEventListener("offline",this.no)}so(){window.addEventListener("online",this.Xs),window.addEventListener("offline",this.no)}eo(){y("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const t of this.io)t(0)}ro(){y("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const t of this.io)t(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Jn=null;function Ei(){return Jn===null?Jn=function(){return 268435456+Math.round(2147483648*Math.random())}():Jn++,"0x"+Jn.toString(16)}/**
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
 */const a_={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class c_{constructor(t){this.oo=t.oo,this._o=t._o}ao(t){this.uo=t}co(t){this.lo=t}onMessage(t){this.ho=t}close(){this._o()}send(t){this.oo(t)}Po(){this.uo()}Io(t){this.lo(t)}To(t){this.ho(t)}}/**
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
 */const Y="WebChannelConnection";class l_ extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.Eo=r+"://"+n.host,this.Ao=`projects/${i}/databases/${s}`,this.Ro=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${s}`}get Vo(){return!1}mo(n,r,i,s,o){const a=Ei(),c=this.fo(n,r);y("RestConnection",`Sending RPC '${n}' ${a}:`,c,i);const l={"google-cloud-resource-prefix":this.Ao,"x-goog-request-params":this.Ro};return this.po(l,s,o),this.yo(n,c,l,i).then(u=>(y("RestConnection",`Received RPC '${n}' ${a}: `,u),u),u=>{throw Er("RestConnection",`RPC '${n}' ${a} failed with error: `,u,"url: ",c,"request:",i),u})}wo(n,r,i,s,o,a){return this.mo(n,r,i,s,o)}po(n,r,i){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Me}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((s,o)=>n[o]=s),i&&i.headers.forEach((s,o)=>n[o]=s)}fo(n,r){const i=a_[n];return`${this.Eo}/v1/${r}:${i}`}}{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams,this.longPollingOptions=t.longPollingOptions}yo(t,n,r,i){const s=Ei();return new Promise((o,a)=>{const c=new vg;c.setWithCredentials(!0),c.listenOnce(mg.COMPLETE,()=>{try{switch(c.getLastErrorCode()){case vi.NO_ERROR:const u=c.getResponseJson();y(Y,`XHR for RPC '${t}' ${s} received:`,JSON.stringify(u)),o(u);break;case vi.TIMEOUT:y(Y,`RPC '${t}' ${s} timed out`),a(new _(d.DEADLINE_EXCEEDED,"Request time out"));break;case vi.HTTP_ERROR:const h=c.getStatus();if(y(Y,`RPC '${t}' ${s} failed with status:`,h,"response text:",c.getResponseText()),h>0){let f=c.getResponseJson();Array.isArray(f)&&(f=f[0]);const m=f?.error;if(m&&m.status&&m.message){const I=function(w){const L=w.toLowerCase().replace(/_/g,"-");return Object.values(d).indexOf(L)>=0?L:d.UNKNOWN}(m.status);a(new _(I,m.message))}else a(new _(d.UNKNOWN,"Server responded with status "+c.getStatus()))}else a(new _(d.UNAVAILABLE,"Connection failed."));break;default:A()}}finally{y(Y,`RPC '${t}' ${s} completed.`)}});const l=JSON.stringify(i);y(Y,`RPC '${t}' ${s} sending request:`,i),c.send(n,"POST",l,r,15)})}So(t,n,r){const i=Ei(),s=[this.Eo,"/","google.firestore.v1.Firestore","/",t,"/channel"],o=pg(),a=gg(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},l=this.longPollingOptions.timeoutSeconds;l!==void 0&&(c.longPollingTimeout=Math.round(1e3*l)),this.useFetchStreams&&(c.xmlHttpFactory=new yg({})),this.po(c.initMessageHeaders,n,r),c.encodeInitMessageHeaders=!0;const u=s.join("");y(Y,`Creating RPC '${t}' stream ${i}: ${u}`,c);const h=o.createWebChannel(u,c);let f=!1,m=!1;const I=new c_({oo:w=>{m?y(Y,`Not sending because RPC '${t}' stream ${i} is closed:`,w):(f||(y(Y,`Opening RPC '${t}' stream ${i} transport.`),h.open(),f=!0),y(Y,`RPC '${t}' stream ${i} sending:`,w),h.send(w))},_o:()=>h.close()}),S=(w,L,O)=>{w.listen(L,z=>{try{O(z)}catch(mt){setTimeout(()=>{throw mt},0)}})};return S(h,zn.EventType.OPEN,()=>{m||y(Y,`RPC '${t}' stream ${i} transport opened.`)}),S(h,zn.EventType.CLOSE,()=>{m||(m=!0,y(Y,`RPC '${t}' stream ${i} transport closed`),I.Io())}),S(h,zn.EventType.ERROR,w=>{m||(m=!0,Er(Y,`RPC '${t}' stream ${i} transport errored:`,w),I.Io(new _(d.UNAVAILABLE,"The operation could not be completed")))}),S(h,zn.EventType.MESSAGE,w=>{var L;if(!m){const O=w.data[0];B(!!O);const z=O,mt=z.error||((L=z[0])===null||L===void 0?void 0:L.error);if(mt){y(Y,`RPC '${t}' stream ${i} received error:`,mt);const Fe=mt.status;let Jt=function(Ue){const Bn=F[Ue];if(Bn!==void 0)return ym(Bn)}(Fe),xe=mt.message;Jt===void 0&&(Jt=d.INTERNAL,xe="Unknown error status: "+Fe+" with message "+mt.message),m=!0,I.Io(new _(Jt,xe)),h.close()}else y(Y,`RPC '${t}' stream ${i} received:`,O),I.To(O)}}),S(a,_g.STAT_EVENT,w=>{w.stat===Ko.PROXY?y(Y,`RPC '${t}' stream ${i} detected buffering proxy`):w.stat===Ko.NOPROXY&&y(Y,`RPC '${t}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{I.Po()},0),I}}function Ii(){return typeof document<"u"?document:null}/**
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
 */function Kr(e){return new Tm(e,!0)}/**
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
 */class Yl{constructor(t,n,r=1e3,i=1.5,s=6e4){this.si=t,this.timerId=n,this.bo=r,this.Do=i,this.vo=s,this.Co=0,this.Fo=null,this.Mo=Date.now(),this.reset()}reset(){this.Co=0}xo(){this.Co=this.vo}Oo(t){this.cancel();const n=Math.floor(this.Co+this.No()),r=Math.max(0,Date.now()-this.Mo),i=Math.max(0,n-r);i>0&&y("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Co} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.Fo=this.si.enqueueAfterDelay(this.timerId,i,()=>(this.Mo=Date.now(),t())),this.Co*=this.Do,this.Co<this.bo&&(this.Co=this.bo),this.Co>this.vo&&(this.Co=this.vo)}Bo(){this.Fo!==null&&(this.Fo.skipDelay(),this.Fo=null)}cancel(){this.Fo!==null&&(this.Fo.cancel(),this.Fo=null)}No(){return(Math.random()-.5)*this.Co}}/**
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
 */class u_{constructor(t,n,r,i,s,o,a,c){this.si=t,this.Lo=r,this.ko=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=c,this.state=0,this.qo=0,this.Qo=null,this.Ko=null,this.stream=null,this.$o=new Yl(t,n)}Uo(){return this.state===1||this.state===5||this.Wo()}Wo(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Go()}async stop(){this.Uo()&&await this.close(0)}zo(){this.state=0,this.$o.reset()}jo(){this.Wo()&&this.Qo===null&&(this.Qo=this.si.enqueueAfterDelay(this.Lo,6e4,()=>this.Ho()))}Jo(t){this.Yo(),this.stream.send(t)}async Ho(){if(this.Wo())return this.close(0)}Yo(){this.Qo&&(this.Qo.cancel(),this.Qo=null)}Zo(){this.Ko&&(this.Ko.cancel(),this.Ko=null)}async close(t,n){this.Yo(),this.Zo(),this.$o.cancel(),this.qo++,t!==4?this.$o.reset():n&&n.code===d.RESOURCE_EXHAUSTED?(qt(n.toString()),qt("Using maximum backoff delay to prevent overloading the backend."),this.$o.xo()):n&&n.code===d.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.Xo(),this.stream.close(),this.stream=null),this.state=t,await this.listener.co(n)}Xo(){}auth(){this.state=1;const t=this.e_(this.qo),n=this.qo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.qo===n&&this.t_(r,i)},r=>{t(()=>{const i=new _(d.UNKNOWN,"Fetching auth token failed: "+r.message);return this.n_(i)})})}t_(t,n){const r=this.e_(this.qo);this.stream=this.r_(t,n),this.stream.ao(()=>{r(()=>(this.state=2,this.Ko=this.si.enqueueAfterDelay(this.ko,1e4,()=>(this.Wo()&&(this.state=3),Promise.resolve())),this.listener.ao()))}),this.stream.co(i=>{r(()=>this.n_(i))}),this.stream.onMessage(i=>{r(()=>this.onMessage(i))})}Go(){this.state=5,this.$o.Oo(async()=>{this.state=0,this.start()})}n_(t){return y("PersistentStream",`close with error: ${t}`),this.stream=null,this.close(4,t)}e_(t){return n=>{this.si.enqueueAndForget(()=>this.qo===t?n():(y("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class h_ extends u_{constructor(t,n,r,i,s,o){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s,this.__=!1}get a_(){return this.__}start(){this.__=!1,this.lastStreamToken=void 0,super.start()}Xo(){this.__&&this.u_([])}r_(t,n){return this.connection.So("Write",t,n)}onMessage(t){if(B(!!t.streamToken),this.lastStreamToken=t.streamToken,this.__){this.$o.reset();const n=Nm(t.writeResults,t.commitTime),r=Ie(t.commitTime);return this.listener.c_(r,n)}return B(!t.writeResults||t.writeResults.length===0),this.__=!0,this.listener.l_()}h_(){const t={};t.database=Cm(this.serializer),this.Jo(t)}u_(t){const n={streamToken:this.lastStreamToken,writes:t.map(r=>km(this.serializer,r))};this.Jo(n)}}/**
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
 */class d_ extends class{}{constructor(t,n,r,i){super(),this.authCredentials=t,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.P_=!1}I_(){if(this.P_)throw new _(d.FAILED_PRECONDITION,"The client has already been terminated.")}mo(t,n,r){return this.I_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,s])=>this.connection.mo(t,n,r,i,s)).catch(i=>{throw i.name==="FirebaseError"?(i.code===d.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new _(d.UNKNOWN,i.toString())})}wo(t,n,r,i){return this.I_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.wo(t,n,r,s,o,i)).catch(s=>{throw s.name==="FirebaseError"?(s.code===d.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new _(d.UNKNOWN,s.toString())})}terminate(){this.P_=!0}}async function f_(e,t,n){var r;const i=b(e),{request:s,T_:o}=function(h,f,m){const I=Dm(h,f),S={},w=[];let L=0;return m.forEach(O=>{const z="aggregate_"+L++;S[z]=O.alias,O.de==="count"?w.push({alias:z,count:{}}):O.de==="avg"?w.push({alias:z,avg:{field:Lt(O.fieldPath)}}):O.de==="sum"&&w.push({alias:z,sum:{field:Lt(O.fieldPath)}})}),{request:{structuredAggregationQuery:{aggregations:w,structuredQuery:I.structuredQuery},parent:I.parent},T_:S}}(i.serializer,function(h){const f=b(h);return f.Te||(f.Te=Vl(f,h.explicitOrderBy)),f.Te}(t),n),a=s.parent;i.connection.Vo||delete s.parent;const c=(await i.wo("RunAggregationQuery",a,s,1)).filter(u=>!!u.result);B(c.length===1);const l=(r=c[0].result)===null||r===void 0?void 0:r.aggregateFields;return Object.keys(l).reduce((u,h)=>(u[o[h]]=l[h],u),{})}class p_{constructor(t,n){this.asyncQueue=t,this.onlineStateHandler=n,this.state="Unknown",this.E_=0,this.d_=null,this.A_=!0}R_(){this.E_===0&&(this.V_("Unknown"),this.d_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.d_=null,this.m_("Backend didn't respond within 10 seconds."),this.V_("Offline"),Promise.resolve())))}f_(t){this.state==="Online"?this.V_("Unknown"):(this.E_++,this.E_>=1&&(this.g_(),this.m_(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.V_("Offline")))}set(t){this.g_(),this.E_=0,t==="Online"&&(this.A_=!1),this.V_(t)}V_(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}m_(t){const n=`Could not reach Cloud Firestore backend. ${t}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.A_?(qt(n),this.A_=!1):y("OnlineStateTracker",n)}g_(){this.d_!==null&&(this.d_.cancel(),this.d_=null)}}/**
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
 */class g_{constructor(t,n,r,i,s){this.localStore=t,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.p_=[],this.y_=new Map,this.w_=new Set,this.S_=[],this.b_=s,this.b_.Zs(o=>{r.enqueueAndForget(async()=>{Fn(this)&&(y("RemoteStore","Restarting streams for network reachability change."),await async function(c){const l=b(c);l.w_.add(4),await Ln(l),l.D_.set("Unknown"),l.w_.delete(4),await Qr(l)}(this))})}),this.D_=new p_(r,i)}}async function Qr(e){if(Fn(e))for(const t of e.S_)await t(!0)}async function Ln(e){for(const t of e.S_)await t(!1)}function Fn(e){return b(e).w_.size===0}async function Xl(e,t,n){if(!Hr(t))throw t;e.w_.add(1),await Ln(e),e.D_.set("Offline"),n||(n=()=>r_(e.localStore)),e.asyncQueue.enqueueRetryable(async()=>{y("RemoteStore","Retrying IndexedDB access"),await n(),e.w_.delete(1),await Qr(e)})}function Zl(e,t){return t().catch(n=>Xl(e,n,t))}async function Jr(e){const t=b(e),n=zt(t);let r=t.p_.length>0?t.p_[t.p_.length-1].batchId:-1;for(;m_(t);)try{const i=await i_(t.localStore,r);if(i===null){t.p_.length===0&&n.jo();break}r=i.batchId,__(t,i)}catch(i){await Xl(t,i)}tu(t)&&eu(t)}function m_(e){return Fn(e)&&e.p_.length<10}function __(e,t){e.p_.push(t);const n=zt(e);n.Wo()&&n.a_&&n.u_(t.mutations)}function tu(e){return Fn(e)&&!zt(e).Uo()&&e.p_.length>0}function eu(e){zt(e).start()}async function y_(e){zt(e).h_()}async function v_(e){const t=zt(e);for(const n of e.p_)t.u_(n.mutations)}async function E_(e,t,n){const r=e.p_.shift(),i=Gs.from(r,t,n);await Zl(e,()=>e.remoteSyncer.applySuccessfulWrite(i)),await Jr(e)}async function I_(e,t){t&&zt(e).a_&&await async function(r,i){if(function(o){return _m(o)&&o!==d.ABORTED}(i.code)){const s=r.p_.shift();zt(r).zo(),await Zl(r,()=>r.remoteSyncer.rejectFailedWrite(s.batchId,i)),await Jr(r)}}(e,t),tu(e)&&eu(e)}async function ma(e,t){const n=b(e);n.asyncQueue.verifyOperationInProgress(),y("RemoteStore","RemoteStore received new credentials");const r=Fn(n);n.w_.add(3),await Ln(n),r&&n.D_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(t),n.w_.delete(3),await Qr(n)}async function T_(e,t){const n=b(e);t?(n.w_.delete(2),await Qr(n)):t||(n.w_.add(2),await Ln(n),n.D_.set("Unknown"))}function zt(e){return e.F_||(e.F_=function(n,r,i){const s=b(n);return s.I_(),new h_(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(e.datastore,e.asyncQueue,{ao:y_.bind(null,e),co:I_.bind(null,e),l_:v_.bind(null,e),c_:E_.bind(null,e)}),e.S_.push(async t=>{t?(e.F_.zo(),await Jr(e)):(await e.F_.stop(),e.p_.length>0&&(y("RemoteStore",`Stopping write stream with ${e.p_.length} pending writes`),e.p_=[]))})),e.F_}/**
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
 */class Js{constructor(t,n,r,i,s){this.asyncQueue=t,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new Bt,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(t,n,r,i,s){const o=Date.now()+r,a=new Js(t,n,o,i,s);return a.start(r),a}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new _(d.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function nu(e,t){if(qt("AsyncQueue",`${t}: ${e}`),Hr(e))return new _(d.UNAVAILABLE,`${t}: ${e}`);throw e}class w_{constructor(){this.queries=new Le(t=>Ml(t),Ol),this.onlineState="Unknown",this.N_=new Set}}function A_(e){e.N_.forEach(t=>{t.next()})}class R_{constructor(t,n,r,i,s,o){this.localStore=t,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.Ea={},this.da=new Le(a=>Ml(a),Ol),this.Aa=new Map,this.Ra=new Set,this.Va=new ot(T.comparator),this.ma=new Map,this.fa=new Ws,this.ga={},this.pa=new Map,this.ya=be.Nn(),this.onlineState="Unknown",this.wa=void 0}get isPrimaryClient(){return this.wa===!0}}async function P_(e,t,n){const r=k_(e);try{const i=await function(o,a){const c=b(o),l=j.now(),u=a.reduce((m,I)=>m.add(I.key),Z());let h,f;return c.persistence.runTransaction("Locally write mutations","readwrite",m=>{let I=wr(),S=Z();return c.es.getEntries(m,u).next(w=>{I=w,I.forEach((L,O)=>{O.isValidDocument()||(S=S.add(L))})}).next(()=>c.localDocuments.getOverlayedDocuments(m,I)).next(w=>{h=w;const L=[];for(const O of a){const z=dm(O,h.get(O.key).overlayedDocument);z!=null&&L.push(new Qt(O.key,z,Al(z.value.mapValue),dt.exists(!0)))}return c.mutationQueue.addMutationBatch(m,l,L,a)}).next(w=>{f=w;const L=w.applyToLocalDocumentSet(h,S);return c.documentOverlayCache.saveOverlays(m,w.batchId,L)})}).then(()=>({batchId:f.batchId,changes:Fl(h)}))}(r.localStore,t);r.sharedClientState.addPendingMutation(i.batchId),function(o,a,c){let l=o.ga[o.currentUser.toKey()];l||(l=new ot(k)),l=l.insert(a,c),o.ga[o.currentUser.toKey()]=l}(r,i.batchId,n),await Yr(r,i.changes),await Jr(r.remoteStore)}catch(i){const s=nu(i,"Failed to persist write");n.reject(s)}}function _a(e,t,n){const r=b(e);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.da.forEach((s,o)=>{const a=o.view.B_(t);a.snapshot&&i.push(a.snapshot)}),function(o,a){const c=b(o);c.onlineState=a;let l=!1;c.queries.forEach((u,h)=>{for(const f of h.listeners)f.B_(a)&&(l=!0)}),l&&A_(c)}(r.eventManager,t),i.length&&r.Ea.i_(i),r.onlineState=t,r.isPrimaryClient&&r.sharedClientState.setOnlineState(t)}}async function S_(e,t){const n=b(e),r=t.batch.batchId;try{const i=await n_(n.localStore,t);iu(n,r,null),ru(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Yr(n,i)}catch(i){await Il(i)}}async function C_(e,t,n){const r=b(e);try{const i=await function(o,a){const c=b(o);return c.persistence.runTransaction("Reject batch","readwrite-primary",l=>{let u;return c.mutationQueue.lookupMutationBatch(l,a).next(h=>(B(h!==null),u=h.keys(),c.mutationQueue.removeMutationBatch(l,h))).next(()=>c.mutationQueue.performConsistencyCheck(l)).next(()=>c.documentOverlayCache.removeOverlaysForBatchId(l,u,a)).next(()=>c.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(l,u)).next(()=>c.localDocuments.getDocuments(l,u))})}(r.localStore,t);iu(r,t,n),ru(r,t),r.sharedClientState.updateMutationState(t,"rejected",n),await Yr(r,i)}catch(i){await Il(i)}}function ru(e,t){(e.pa.get(t)||[]).forEach(n=>{n.resolve()}),e.pa.delete(t)}function iu(e,t,n){const r=b(e);let i=r.ga[r.currentUser.toKey()];if(i){const s=i.get(t);s&&(n?s.reject(n):s.resolve(),i=i.remove(t)),r.ga[r.currentUser.toKey()]=i}}async function Yr(e,t,n){const r=b(e),i=[],s=[],o=[];r.da.isEmpty()||(r.da.forEach((a,c)=>{o.push(r.Sa(c,t,n).then(l=>{if((l||n)&&r.isPrimaryClient&&r.sharedClientState.updateQueryState(c.targetId,l?.fromCache?"not-current":"current"),l){i.push(l);const u=Qs.Qi(c.targetId,l);s.push(u)}}))}),await Promise.all(o),r.Ea.i_(i),await async function(c,l){const u=b(c);try{await u.persistence.runTransaction("notifyLocalViewChanges","readwrite",h=>p.forEach(l,f=>p.forEach(f.ki,m=>u.persistence.referenceDelegate.addReference(h,f.targetId,m)).next(()=>p.forEach(f.qi,m=>u.persistence.referenceDelegate.removeReference(h,f.targetId,m)))))}catch(h){if(!Hr(h))throw h;y("LocalStore","Failed to update sequence numbers: "+h)}for(const h of l){const f=h.targetId;if(!h.fromCache){const m=u.Yi.get(f),I=m.snapshotVersion,S=m.withLastLimboFreeSnapshotVersion(I);u.Yi=u.Yi.insert(f,S)}}}(r.localStore,s))}async function b_(e,t){const n=b(e);if(!n.currentUser.isEqual(t)){y("SyncEngine","User change. New user:",t.toKey());const r=await Jl(n.localStore,t);n.currentUser=t,function(s,o){s.pa.forEach(a=>{a.forEach(c=>{c.reject(new _(d.CANCELLED,o))})}),s.pa.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(t,r.removedBatchIds,r.addedBatchIds),await Yr(n,r.ns)}}function k_(e){const t=b(e);return t.remoteStore.remoteSyncer.applySuccessfulWrite=S_.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=C_.bind(null,t),t}class ya{constructor(){this.synchronizeTabs=!1}async initialize(t){this.serializer=Kr(t.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(t),this.persistence=this.createPersistence(t),await this.persistence.start(),this.localStore=this.createLocalStore(t),this.gcScheduler=this.createGarbageCollectionScheduler(t,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(t,this.localStore)}createGarbageCollectionScheduler(t,n){return null}createIndexBackfillerScheduler(t,n){return null}createLocalStore(t){return e_(this.persistence,new Zm,t.initialUser,this.serializer)}createPersistence(t){return new Ym(Ks.jr,this.serializer)}createSharedClientState(t){return new s_}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class N_{async initialize(t,n){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>_a(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=b_.bind(null,this.syncEngine),await T_(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return function(){return new w_}()}createDatastore(t){const n=Kr(t.databaseInfo.databaseId),r=function(s){return new l_(s)}(t.databaseInfo);return function(s,o,a,c){return new d_(s,o,a,c)}(t.authCredentials,t.appCheckCredentials,r,n)}createRemoteStore(t){return function(r,i,s,o,a){return new g_(r,i,s,o,a)}(this.localStore,this.datastore,t.asyncQueue,n=>_a(this.syncEngine,n,0),function(){return ga.v()?new ga:new o_}())}createSyncEngine(t,n){return function(i,s,o,a,c,l,u){const h=new R_(i,s,o,a,c,l);return u&&(h.wa=!0),h}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,n)}terminate(){return async function(n){const r=b(n);y("RemoteStore","RemoteStore shutting down."),r.w_.add(5),await Ln(r),r.b_.shutdown(),r.D_.set("Unknown")}(this.remoteStore)}}/**
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
 */class D_{constructor(t,n,r,i){this.authCredentials=t,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=X.UNAUTHENTICATED,this.clientId=El.V(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async s=>{y("FirestoreClient","Received user=",s.uid),await this.authCredentialListener(s),this.user=s}),this.appCheckCredentials.start(r,s=>(y("FirestoreClient","Received new app check token=",s),this.appCheckCredentialListener(s,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new _(d.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const t=new Bt;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(n){const r=nu(n,"Failed to shutdown persistence");t.reject(r)}}),t.promise}}async function Ti(e,t){e.asyncQueue.verifyOperationInProgress(),y("FirestoreClient","Initializing OfflineComponentProvider");const n=await e.getConfiguration();await t.initialize(n);let r=n.initialUser;e.setCredentialChangeListener(async i=>{r.isEqual(i)||(await Jl(t.localStore,i),r=i)}),t.persistence.setDatabaseDeletedListener(()=>e.terminate()),e._offlineComponents=t}async function va(e,t){e.asyncQueue.verifyOperationInProgress();const n=await O_(e);y("FirestoreClient","Initializing OnlineComponentProvider");const r=await e.getConfiguration();await t.initialize(n,r),e.setCredentialChangeListener(i=>ma(t.remoteStore,i)),e.setAppCheckTokenChangeListener((i,s)=>ma(t.remoteStore,s)),e._onlineComponents=t}function V_(e){return e.name==="FirebaseError"?e.code===d.FAILED_PRECONDITION||e.code===d.UNIMPLEMENTED:!(typeof DOMException<"u"&&e instanceof DOMException)||e.code===22||e.code===20||e.code===11}async function O_(e){if(!e._offlineComponents)if(e._uninitializedComponentsProvider){y("FirestoreClient","Using user provided OfflineComponentProvider");try{await Ti(e,e._uninitializedComponentsProvider._offline)}catch(t){const n=t;if(!V_(n))throw n;Er("Error using user provided cache. Falling back to memory cache: "+n),await Ti(e,new ya)}}else y("FirestoreClient","Using default OfflineComponentProvider"),await Ti(e,new ya);return e._offlineComponents}async function su(e){return e._onlineComponents||(e._uninitializedComponentsProvider?(y("FirestoreClient","Using user provided OnlineComponentProvider"),await va(e,e._uninitializedComponentsProvider._online)):(y("FirestoreClient","Using default OnlineComponentProvider"),await va(e,new N_))),e._onlineComponents}function M_(e){return su(e).then(t=>t.syncEngine)}function L_(e){return su(e).then(t=>t.datastore)}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ou(e){const t={};return e.timeoutSeconds!==void 0&&(t.timeoutSeconds=e.timeoutSeconds),t}/**
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
 */const Ea=new Map;/**
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
 */function au(e,t,n){if(!n)throw new _(d.INVALID_ARGUMENT,`Function ${e}() cannot be called with an empty ${t}.`)}function F_(e,t,n,r){if(t===!0&&r===!0)throw new _(d.INVALID_ARGUMENT,`${e} and ${n} cannot be used together.`)}function Ia(e){if(!T.isDocumentKey(e))throw new _(d.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${e} has ${e.length}.`)}function Ta(e){if(T.isDocumentKey(e))throw new _(d.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${e} has ${e.length}.`)}function Xr(e){if(e===void 0)return"undefined";if(e===null)return"null";if(typeof e=="string")return e.length>20&&(e=`${e.substring(0,20)}...`),JSON.stringify(e);if(typeof e=="number"||typeof e=="boolean")return""+e;if(typeof e=="object"){if(e instanceof Array)return"an array";{const t=function(r){return r.constructor?r.constructor.name:null}(e);return t?`a custom ${t} object`:"an object"}}return typeof e=="function"?"a function":A()}function Ys(e,t){if("_delegate"in e&&(e=e._delegate),!(e instanceof t)){if(t.name===e.constructor.name)throw new _(d.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Xr(e);throw new _(d.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${n}`)}}return e}/**
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
 */class wa{constructor(t){var n,r;if(t.host===void 0){if(t.ssl!==void 0)throw new _(d.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=(n=t.ssl)===null||n===void 0||n;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,t.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<1048576)throw new _(d.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}F_("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:t.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=ou((r=t.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new _(d.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new _(d.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new _(d.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class Zr{constructor(t,n,r,i){this._authCredentials=t,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new wa({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new _(d.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(t){if(this._settingsFrozen)throw new _(d.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new wa(t),t.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new Ig;switch(r.type){case"firstParty":return new Rg(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new _(d.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=Ea.get(n);r&&(y("ComponentProvider","Removing Datastore"),Ea.delete(n),r.terminate())}(this),Promise.resolve()}}function x_(e,t,n,r={}){var i;const s=(e=Ys(e,Zr))._getSettings(),o=`${t}:${n}`;if(s.host!=="firestore.googleapis.com"&&s.host!==o&&Er("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),e._setSettings(Object.assign(Object.assign({},s),{host:o,ssl:!1})),r.mockUserToken){let a,c;if(typeof r.mockUserToken=="string")a=r.mockUserToken,c=X.MOCK_USER;else{a=Du(r.mockUserToken,(i=e._app)===null||i===void 0?void 0:i.options.projectId);const l=r.mockUserToken.sub||r.mockUserToken.user_id;if(!l)throw new _(d.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");c=new X(l)}e._authCredentials=new Tg(new vl(a,c))}}/**
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
 */class xn{constructor(t,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=t}withConverter(t){return new xn(this.firestore,t,this._query)}}class ft{constructor(t,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new jt(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new ft(this.firestore,t,this._key)}}class jt extends xn{constructor(t,n,r){super(t,n,Yg(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new ft(this.firestore,null,new T(t))}withConverter(t){return new jt(this.firestore,t,this._path)}}function cu(e,t,...n){if(e=q(e),au("collection","path",t),e instanceof Zr){const r=D.fromString(t,...n);return Ta(r),new jt(e,null,r)}{if(!(e instanceof ft||e instanceof jt))throw new _(d.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=e._path.child(D.fromString(t,...n));return Ta(r),new jt(e.firestore,null,r)}}function Aa(e,t,...n){if(e=q(e),arguments.length===1&&(t=El.V()),au("doc","path",t),e instanceof Zr){const r=D.fromString(t,...n);return Ia(r),new ft(e,null,new T(r))}{if(!(e instanceof ft||e instanceof jt))throw new _(d.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=e._path.child(D.fromString(t,...n));return Ia(r),new ft(e.firestore,e instanceof jt?e.converter:null,new T(r))}}/**
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
 */class U_{constructor(){this.Ga=Promise.resolve(),this.za=[],this.ja=!1,this.Ha=[],this.Ja=null,this.Ya=!1,this.Za=!1,this.Xa=[],this.$o=new Yl(this,"async_queue_retry"),this.eu=()=>{const n=Ii();n&&y("AsyncQueue","Visibility state changed to "+n.visibilityState),this.$o.Bo()};const t=Ii();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.eu)}get isShuttingDown(){return this.ja}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.tu(),this.nu(t)}enterRestrictedMode(t){if(!this.ja){this.ja=!0,this.Za=t||!1;const n=Ii();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.eu)}}enqueue(t){if(this.tu(),this.ja)return new Promise(()=>{});const n=new Bt;return this.nu(()=>this.ja&&this.Za?Promise.resolve():(t().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.za.push(t),this.ru()))}async ru(){if(this.za.length!==0){try{await this.za[0](),this.za.shift(),this.$o.reset()}catch(t){if(!Hr(t))throw t;y("AsyncQueue","Operation failed with retryable error: "+t)}this.za.length>0&&this.$o.Oo(()=>this.ru())}}nu(t){const n=this.Ga.then(()=>(this.Ya=!0,t().catch(r=>{this.Ja=r,this.Ya=!1;const i=function(o){let a=o.message||"";return o.stack&&(a=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),a}(r);throw qt("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.Ya=!1,r))));return this.Ga=n,n}enqueueAfterDelay(t,n,r){this.tu(),this.Xa.indexOf(t)>-1&&(n=0);const i=Js.createAndSchedule(this,t,n,r,s=>this.iu(s));return this.Ha.push(i),i}tu(){this.Ja&&A()}verifyOperationInProgress(){}async su(){let t;do t=this.Ga,await t;while(t!==this.Ga)}ou(t){for(const n of this.Ha)if(n.timerId===t)return!0;return!1}_u(t){return this.su().then(()=>{this.Ha.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.Ha)if(n.skipDelay(),t!=="all"&&n.timerId===t)break;return this.su()})}au(t){this.Xa.push(t)}iu(t){const n=this.Ha.indexOf(t);this.Ha.splice(n,1)}}class Xs extends Zr{constructor(t,n,r,i){super(t,n,r,i),this.type="firestore",this._queue=function(){return new U_}(),this._persistenceKey=i?.name||"[DEFAULT]"}_terminate(){return this._firestoreClient||lu(this),this._firestoreClient.terminate()}}function B_(e,t){const n=typeof e=="object"?e:xa(),r=typeof e=="string"?e:t||"(default)",i=is(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=ku("firestore");s&&x_(i,...s)}return i}function Zs(e){return e._firestoreClient||lu(e),e._firestoreClient.verifyNotTerminated(),e._firestoreClient}function lu(e){var t,n,r;const i=e._freezeSettings(),s=function(a,c,l,u){return new xg(a,c,l,u.host,u.ssl,u.experimentalForceLongPolling,u.experimentalAutoDetectLongPolling,ou(u.experimentalLongPollingOptions),u.useFetchStreams)}(e._databaseId,((t=e._app)===null||t===void 0?void 0:t.options.appId)||"",e._persistenceKey,i);e._firestoreClient=new D_(e._authCredentials,e._appCheckCredentials,e._queue,s),!((n=i.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(e._firestoreClient._uninitializedComponentsProvider={_offlineKind:i.localCache.kind,_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider})}/**
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
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class j_{constructor(t="count",n){this._aggregateType=t,this._internalFieldPath=n,this.type="AggregateField"}}class $_{constructor(t,n,r){this._userDataWriter=n,this._data=r,this.type="AggregateQuerySnapshot",this.query=t}data(){return this._userDataWriter.convertObjectMap(this._data)}}/**
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
 */class ke{constructor(t){this._byteString=t}static fromBase64String(t){try{return new ke(bt.fromBase64String(t))}catch(n){throw new _(d.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(t){return new ke(bt.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}/**
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
 */class ti{constructor(...t){for(let n=0;n<t.length;++n)if(t[n].length===0)throw new _(d.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new tt(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}/**
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
 */class ei{constructor(t){this._methodName=t}}/**
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
 */class to{constructor(t,n){if(!isFinite(t)||t<-90||t>90)throw new _(d.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(n)||n<-180||n>180)throw new _(d.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=t,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return k(this._lat,t._lat)||k(this._long,t._long)}}/**
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
 */const q_=/^__.*__$/;class H_{constructor(t,n,r){this.data=t,this.fieldMask=n,this.fieldTransforms=r}toMutation(t,n){return this.fieldMask!==null?new Qt(t,this.data,this.fieldMask,n,this.fieldTransforms):new Mn(t,this.data,n,this.fieldTransforms)}}class uu{constructor(t,n,r){this.data=t,this.fieldMask=n,this.fieldTransforms=r}toMutation(t,n){return new Qt(t,this.data,this.fieldMask,n,this.fieldTransforms)}}function hu(e){switch(e){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw A()}}class eo{constructor(t,n,r,i,s,o){this.settings=t,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.uu(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get cu(){return this.settings.cu}lu(t){return new eo(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}hu(t){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(t),i=this.lu({path:r,Pu:!1});return i.Iu(t),i}Tu(t){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(t),i=this.lu({path:r,Pu:!1});return i.uu(),i}Eu(t){return this.lu({path:void 0,Pu:!0})}du(t){return Rr(t,this.settings.methodName,this.settings.Au||!1,this.path,this.settings.Ru)}contains(t){return this.fieldMask.find(n=>t.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>t.isPrefixOf(n.field))!==void 0}uu(){if(this.path)for(let t=0;t<this.path.length;t++)this.Iu(this.path.get(t))}Iu(t){if(t.length===0)throw this.du("Document fields must not be empty");if(hu(this.cu)&&q_.test(t))throw this.du('Document fields cannot begin and end with "__"')}}class G_{constructor(t,n,r){this.databaseId=t,this.ignoreUndefinedProperties=n,this.serializer=r||Kr(t)}Vu(t,n,r,i=!1){return new eo({cu:t,methodName:n,Ru:r,path:tt.emptyPath(),Pu:!1,Au:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function du(e){const t=e._freezeSettings(),n=Kr(e._databaseId);return new G_(e._databaseId,!!t.ignoreUndefinedProperties,n)}function z_(e,t,n,r,i,s={}){const o=e.Vu(s.merge||s.mergeFields?2:0,t,n,i);ro("Data must be an object, but it was:",o,r);const a=fu(r,o);let c,l;if(s.merge)c=new ct(o.fieldMask),l=o.fieldTransforms;else if(s.mergeFields){const u=[];for(const h of s.mergeFields){const f=Zi(t,h,n);if(!o.contains(f))throw new _(d.INVALID_ARGUMENT,`Field '${f}' is specified in your field mask but missing from your input data.`);gu(u,f)||u.push(f)}c=new ct(u),l=o.fieldTransforms.filter(h=>c.covers(h.field))}else c=null,l=o.fieldTransforms;return new H_(new at(a),c,l)}class ni extends ei{_toFieldTransform(t){if(t.cu!==2)throw t.cu===1?t.du(`${this._methodName}() can only appear at the top level of your update data`):t.du(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return t.fieldMask.push(t.path),null}isEqual(t){return t instanceof ni}}class no extends ei{_toFieldTransform(t){return new cm(t.path,new mn)}isEqual(t){return t instanceof no}}function W_(e,t,n,r){const i=e.Vu(1,t,n);ro("Data must be an object, but it was:",i,r);const s=[],o=at.empty();fe(r,(c,l)=>{const u=io(t,c,n);l=q(l);const h=i.Tu(u);if(l instanceof ni)s.push(u);else{const f=Un(l,h);f!=null&&(s.push(u),o.set(u,f))}});const a=new ct(s);return new uu(o,a,i.fieldTransforms)}function K_(e,t,n,r,i,s){const o=e.Vu(1,t,n),a=[Zi(t,r,n)],c=[i];if(s.length%2!=0)throw new _(d.INVALID_ARGUMENT,`Function ${t}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let f=0;f<s.length;f+=2)a.push(Zi(t,s[f])),c.push(s[f+1]);const l=[],u=at.empty();for(let f=a.length-1;f>=0;--f)if(!gu(l,a[f])){const m=a[f];let I=c[f];I=q(I);const S=o.Tu(m);if(I instanceof ni)l.push(m);else{const w=Un(I,S);w!=null&&(l.push(m),u.set(m,w))}}const h=new ct(l);return new uu(u,h,o.fieldTransforms)}function Q_(e,t,n,r=!1){return Un(n,e.Vu(r?4:3,t))}function Un(e,t){if(pu(e=q(e)))return ro("Unsupported field value:",t,e),fu(e,t);if(e instanceof ei)return function(r,i){if(!hu(i.cu))throw i.du(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.du(`${r._methodName}() is not currently supported inside arrays`);const s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(e,t),null;if(e===void 0&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),e instanceof Array){if(t.settings.Pu&&t.cu!==4)throw t.du("Nested arrays are not supported");return function(r,i){const s=[];let o=0;for(const a of r){let c=Un(a,i.Eu(o));c==null&&(c={nullValue:"NULL_VALUE"}),s.push(c),o++}return{arrayValue:{values:s}}}(e,t)}return function(r,i){if((r=q(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return sm(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const s=j.fromDate(r);return{timestampValue:Yi(i.serializer,s)}}if(r instanceof j){const s=new j(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Yi(i.serializer,s)}}if(r instanceof to)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof ke)return{bytesValue:Am(i.serializer,r._byteString)};if(r instanceof ft){const s=i.databaseId,o=r.firestore._databaseId;if(!o.isEqual(s))throw i.du(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:zs(r.firestore._databaseId||i.databaseId,r._key.path)}}throw i.du(`Unsupported field value: ${Xr(r)}`)}(e,t)}function fu(e,t){const n={};return wl(e)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):fe(e,(r,i)=>{const s=Un(i,t.hu(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function pu(e){return!(typeof e!="object"||e===null||e instanceof Array||e instanceof Date||e instanceof j||e instanceof to||e instanceof ke||e instanceof ft||e instanceof ei)}function ro(e,t,n){if(!pu(n)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(n)){const r=Xr(n);throw r==="an object"?t.du(e+" a custom object"):t.du(e+" "+r)}}function Zi(e,t,n){if((t=q(t))instanceof ti)return t._internalPath;if(typeof t=="string")return io(e,t);throw Rr("Field path arguments must be of type string or ",e,!1,void 0,n)}const J_=new RegExp("[~\\*/\\[\\]]");function io(e,t,n){if(t.search(J_)>=0)throw Rr(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,e,!1,void 0,n);try{return new ti(...t.split("."))._internalPath}catch{throw Rr(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,e,!1,void 0,n)}}function Rr(e,t,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let a=`Function ${t}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(s||o)&&(c+=" (found",s&&(c+=` in field ${r}`),o&&(c+=` in document ${i}`),c+=")"),new _(d.INVALID_ARGUMENT,a+e+c)}function gu(e,t){return e.some(n=>n.isEqual(t))}function Y_(e,t){return typeof t=="string"?io(e,t):t instanceof ti?t._internalPath:t._delegate._internalPath}class so{}class X_ extends so{}function Z_(e,t,...n){let r=[];t instanceof so&&r.push(t),r=r.concat(n),function(s){const o=s.filter(c=>c instanceof oo).length,a=s.filter(c=>c instanceof ri).length;if(o>1||o>0&&a>0)throw new _(d.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const i of r)e=i._apply(e);return e}class ri extends X_{constructor(t,n,r){super(),this._field=t,this._op=n,this._value=r,this.type="where"}static _create(t,n,r){return new ri(t,n,r)}_apply(t){const n=this._parse(t);return mu(t._query,n),new xn(t.firestore,t.converter,Qi(t._query,n))}_parse(t){const n=du(t.firestore);return function(s,o,a,c,l,u,h){let f;if(l.isKeyField()){if(u==="array-contains"||u==="array-contains-any")throw new _(d.INVALID_ARGUMENT,`Invalid Query. You can't perform '${u}' queries on documentId().`);if(u==="in"||u==="not-in"){Pa(h,u);const m=[];for(const I of h)m.push(Ra(c,s,I));f={arrayValue:{values:m}}}else f=Ra(c,s,h)}else u!=="in"&&u!=="not-in"&&u!=="array-contains-any"||Pa(h,u),f=Q_(a,o,h,u==="in"||u==="not-in");return U.create(l,u,f)}(t._query,"where",n,t.firestore._databaseId,this._field,this._op,this._value)}}function ty(e,t,n){const r=t,i=Y_("where",e);return ri._create(i,r,n)}class oo extends so{constructor(t,n){super(),this.type=t,this._queryConstraints=n}static _create(t,n){return new oo(t,n)}_parse(t){const n=this._queryConstraints.map(r=>r._parse(t)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:gt.create(n,this._getOperator())}_apply(t){const n=this._parse(t);return n.getFilters().length===0?t:(function(i,s){let o=i;const a=s.getFlattenedFilters();for(const c of a)mu(o,c),o=Qi(o,c)}(t._query,n),new xn(t.firestore,t.converter,Qi(t._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}function Ra(e,t,n){if(typeof(n=q(n))=="string"){if(n==="")throw new _(d.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Dl(t)&&n.indexOf("/")!==-1)throw new _(d.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=t.path.child(D.fromString(n));if(!T.isDocumentKey(r))throw new _(d.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return ta(e,new T(r))}if(n instanceof ft)return ta(e,n._key);throw new _(d.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Xr(n)}.`)}function Pa(e,t){if(!Array.isArray(e)||e.length===0)throw new _(d.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${t.toString()}' filters.`)}function mu(e,t){if(t.isInequality()){const r=$s(e),i=t.field;if(r!==null&&!r.isEqual(i))throw new _(d.INVALID_ARGUMENT,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${r.toString()}' and '${i.toString()}'`);const s=Nl(e);s!==null&&ey(e,i,s)}const n=function(i,s){for(const o of i)for(const a of o.getFlattenedFilters())if(s.indexOf(a.op)>=0)return a.op;return null}(e.filters,function(i){switch(i){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(t.op));if(n!==null)throw n===t.op?new _(d.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${t.op.toString()}' filter.`):new _(d.INVALID_ARGUMENT,`Invalid query. You cannot use '${t.op.toString()}' filters with '${n.toString()}' filters.`)}function ey(e,t,n){if(!n.isEqual(t))throw new _(d.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${t.toString()}' and so you must also use '${t.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${n.toString()}' instead.`)}class ny{convertValue(t,n="none"){switch(ae(t)){case 0:return null;case 1:return t.booleanValue;case 2:return x(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,n);case 5:return t.stringValue;case 6:return this.convertBytes(Re(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,n);case 10:return this.convertObject(t.mapValue,n);default:throw A()}}convertObject(t,n){return this.convertObjectMap(t.fields,n)}convertObjectMap(t,n="none"){const r={};return fe(t,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertGeoPoint(t){return new to(x(t.latitude),x(t.longitude))}convertArray(t,n){return(t.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(t,n){switch(n){case"previous":const r=xs(t);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(fn(t));default:return null}}convertTimestamp(t){const n=Gt(t);return new j(n.seconds,n.nanos)}convertDocumentKey(t,n){const r=D.fromString(t);B(Ql(r));const i=new pn(r.get(1),r.get(3)),s=new T(r.popFirst(5));return i.isEqual(n)||qt(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
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
 */function ry(e,t,n){let r;return r=e?n&&(n.merge||n.mergeFields)?e.toFirestore(t,n):e.toFirestore(t):t,r}function iy(){return new j_("count")}class sy extends ny{constructor(t){super(),this.firestore=t}convertBytes(t){return new ke(t)}convertReference(t){const n=this.convertDocumentKey(t,this.firestore._databaseId);return new ft(this.firestore,null,n)}}function oy(e,t){return function(r,i){const s=new Bt;return r.asyncQueue.enqueueAndForget(async()=>P_(await M_(r),i,s)),s.promise}(Zs(e),t)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ay(e){return cy(e,{count:iy()})}function cy(e,t){const n=Ys(e.firestore,Xs),r=Zs(n),i=function(o,a){const c=[];for(const l in o)Object.prototype.hasOwnProperty.call(o,l)&&c.push(a(o[l],l,o));return c}(t,(s,o)=>new mm(o,s._aggregateType,s._internalFieldPath));return function(o,a,c){const l=new Bt;return o.asyncQueue.enqueueAndForget(async()=>{try{const u=await L_(o);l.resolve(f_(u,a,c))}catch(u){l.reject(u)}}),l.promise}(r,e._query,i).then(s=>function(a,c,l){const u=new sy(a);return new $_(c,u,l)}(n,e,s))}/**
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
 */class ly{constructor(t,n){this._firestore=t,this._commitHandler=n,this._mutations=[],this._committed=!1,this._dataReader=du(t)}set(t,n,r){this._verifyNotCommitted();const i=wi(t,this._firestore),s=ry(i.converter,n,r),o=z_(this._dataReader,"WriteBatch.set",i._key,s,i.converter!==null,r);return this._mutations.push(o.toMutation(i._key,dt.none())),this}update(t,n,r,...i){this._verifyNotCommitted();const s=wi(t,this._firestore);let o;return o=typeof(n=q(n))=="string"||n instanceof ti?K_(this._dataReader,"WriteBatch.update",s._key,n,r,i):W_(this._dataReader,"WriteBatch.update",s._key,n),this._mutations.push(o.toMutation(s._key,dt.exists(!0))),this}delete(t){this._verifyNotCommitted();const n=wi(t,this._firestore);return this._mutations=this._mutations.concat(new Hs(n._key,dt.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new _(d.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}}function wi(e,t){if((e=q(e)).firestore!==t)throw new _(d.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return e}function Sa(){return new no("serverTimestamp")}/**
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
 */function uy(e){return Zs(e=Ys(e,Xs)),new ly(e,t=>oy(e,t))}(function(t,n=!0){(function(i){Me=i})(Ne),Te(new re("firestore",(r,{instanceIdentifier:i,options:s})=>{const o=r.getProvider("app").getImmediate(),a=new Xs(new wg(r.getProvider("auth-internal")),new Sg(r.getProvider("app-check-internal")),function(l,u){if(!Object.prototype.hasOwnProperty.apply(l.options,["projectId"]))throw new _(d.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new pn(l.options.projectId,u)}(o,i),o);return s=Object.assign({useFetchStreams:n},s),a._setSettings(s),a},"PUBLIC").setMultipleInstances(!0)),Ut(Qo,"4.1.1",t),Ut(Qo,"4.1.1","esm2017")})();function Ty(e){return e.issues.reduce((t,n)=>{if(n.path){const r=n.path.map(({key:i})=>i).join(".");t.nested[r]=[...t.nested[r]||[],n.message]}else t.root=[...t.root||[],n.message];return t},{nested:{}})}var ce=class extends Error{issues;constructor(e){super(e[0].message),this.name="ValiError",this.issues=e}};function _u(e,t,n){let r=e;const i=[];for(const s of t)try{r=s(r,n)}catch(o){if(n.abortEarly||n.abortPipeEarly)throw o;i.push(...o.issues)}if(i.length)throw new ce(i);return r}function hy(e,t){return[...e?.path||[],t]}function yu(e,t){const[n,r=[]]=!e||typeof e=="string"?[e,t]:[void 0,e];return{error:n,pipe:r}}function vu(e,t,n){const{error:r,pipe:i}=yu(t,n);return{schema:"object",object:e,async:!1,parse(s,o){if(!s||typeof s!="object"||s.toString()!=="[object Object]")throw new ce([{reason:"type",validation:"object",origin:"value",message:r||"Invalid type",input:s,...o}]);const a={},c=[];for(const[l,u]of Object.entries(e))try{const h=s[l];a[l]=u.parse(h,{...o,path:hy(o,{schema:"object",input:s,key:l,value:h})})}catch(h){if(o?.abortEarly)throw h;c.push(...h.issues)}if(c.length)throw new ce(c);return _u(a,i,{...o,reason:"object"})}}}function Ai(e){return{schema:"optional",wrapped:e,async:!1,parse(t,n){return t===void 0?t:e.parse(t,n)}}}function W(e,t){const{error:n,pipe:r}=yu(e,t);return{schema:"string",async:!1,parse(i,s){if(typeof i!="string")throw new ce([{reason:"type",validation:"string",origin:"value",message:n||"Invalid type",input:i,...s}]);return _u(i,r,{...s,reason:"string"})}}}function dy(e,t,n){return e.parse(t,n)}function Yn(){return e=>e.trim()}function fy(e,t){return(n,r)=>{if(n.length!==e)throw new ce([{validation:"length",origin:"value",message:t||"Invalid length",input:n,...r}]);return n}}function Ri(e,t){return(n,r)=>{if(n.length<e)throw new ce([{validation:"min_length",origin:"value",message:t||"Invalid length",input:n,...r}]);return n}}function Pi(e,t){return(n,r)=>{if(!e.test(n))throw new ce([{validation:"regex",origin:"value",message:t||"Invalid regex",input:n,...r}]);return n}}const Eu="personalid",wy=vu({location:W([Yn(),Ri(1)]),day:W("วันที่ไม่ถูกต้อง",[Pi(/([1-9]|[12][0-9]|3[01])/)]),month:W("เดือนไม่ถูกต้อง",[Pi(/[1-9]|1[0-2]/)]),year:W("ปีไม่ถูกต้อง",[Pi(/^25[3-6][0-9]$/)]),[Eu]:W([Yn(),fy(13)]),prefix:Ai(W()),email:Ai(W()),phone:Ai(W()),firstname:W([Yn(),Ri(1)]),lastname:W([Yn(),Ri(1)]),signature:W("กรุณาลงชื่อ")}),py=vu({apiKey:W(),authDomain:W(),projectId:W(),storageBucket:W(),messagingSenderId:W(),appId:W()}),gy=dy(py,JSON.parse('{"apiKey":"AIzaSyAhpfDKmhUn42QO99-qOn8fhPzAlD36Fww","authDomain":"pension-act.firebaseapp.com","projectId":"pension-act","storageBucket":"pension-act.appspot.com","messagingSenderId":"87809914227","appId":"1:87809914227:web:8a7fe2ad993b908c4f4106"}')),my=Fa(gy),ir=B_(my),ts=fp(),_y=e=>new Promise((t,n)=>{tf(e,r=>r?t(r):n())}),Ay=async e=>{await zd(ts);const t=await _y(ts),n=uy(ir),r=Aa(cu(ir,Ca)),i=Aa(ir,Iu,t.uid);return n.set(r,{...e,uid:t.uid,timestamp:Sa()}),n.set(i,{timestamp:Sa()},{merge:!0}),n.commit()},Ry=async()=>{try{const[e,t]="developer@punchup.world,qf#seDx5bm6SCnR77z".split(",");await Yd(ts,e,t);const n=Z_(cu(ir,Ca),ty(Eu,"!=",Tu));return(await ay(n)).data().count}catch(e){return console.warn(e),0}};export{yy as W,Ry as c,wy as d,Ty as f,dy as p,Ay as s};
