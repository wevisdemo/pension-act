import{o as Ye,s as vs,B as Md,S as ta,i as ea,a as A,b as G,C as al,c as b,d as V,h as m,f as K,D as xd,l as D,A as Fd,v as ue,u as Ud,r as he,E as $d,F as Lc,G as Bd,H as $i,I as Vc,J as Mc,K as xc,L as Fc,w as Re,x as Ce,q as kt,j as p,M as fn,m as P,y as ke,N as jd,z as De,O as Hd,t as Ae,g as be,e as sr,P as na,Q as or,R as ii,p as ra,n as Uc,T as Zs,U as bi,V as Si}from"./index.97f00626.js";function Wd(e,...t){const n=e.subscribe(...t);return n.unsubscribe?()=>n.unsubscribe():n}function Ge(e){let t;return Wd(e,n=>t=n)(),t}class qd extends Error{constructor(t,n){super(t),this.name="FelteSubmitError",this.response=n}}function zd(e,t){return Object.keys(e).some(r=>t(e[r]))}function Es(e,t){return Object.keys(e||{}).reduce((r,i)=>Object.assign(Object.assign({},r),{[i]:t(e[i])}),{})}function Q(e){return Object.prototype.toString.call(e)==="[object Object]"}function ge(e){return Object.keys(e||{}).reduce((t,n)=>Object.assign(Object.assign({},t),{[n]:Q(e[n])?ge(e[n]):Array.isArray(e[n])?[...e[n]]:e[n]}),{})}function Gd(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]]);return n}function Kd(e){return function(t){if(Q(t)){const n=_e(t,e);return Gd(n,["key"])}return e}}function _e(e,t){return Es(e,n=>Q(n)?_e(n,t):Array.isArray(n)?n.map(Kd(t)):t)}function pn(...e){const t=e.pop(),n=e.shift();if(typeof n=="string")return n;const r=ge(n);if(e.length===0)return r;for(const i of e){if(!i)continue;if(typeof i=="string")return i;let s=t(r,i);if(typeof s<"u")return s;const o=Array.from(new Set(Object.keys(r).concat(Object.keys(i))));for(const a of o)if(s=t(r[a],i[a]),typeof s<"u")r[a]=s;else if(Q(i[a])&&Q(r[a]))r[a]=pn(r[a],i[a],t);else if(Array.isArray(i[a]))r[a]=i[a].map((l,c)=>{if(!Q(l))return l;const u=Array.isArray(r[a])?r[a][c]:r[a];return pn(u,l,t)});else if(Q(i[a])){const l=_e(ge(i[a]),void 0);r[a]=pn(l,i[a],t)}else typeof i[a]<"u"&&(r[a]=i[a])}return r}function Qd(e,t){if(!(Q(e)&&Q(t))){if(Array.isArray(t)){if(t.some(Q))return;const n=Array.isArray(e)?e:[];return t.map((r,i)=>{var s;return(s=n[i])!==null&&s!==void 0?s:r})}if(typeof e<"u")return e}}function ll(...e){return pn(...e,Qd)}function $c(...e){return pn(...e,()=>{})}function $e(e,t,n){const r=s=>String.prototype.split.call(t,s).filter(Boolean).reduce((o,a)=>o!=null?o[a]:o,e),i=r(/[,[\]]+?/)||r(/[,[\].]+?/);return i===void 0||i===e?n:i}function si(e,t,n){e&&(e=ge(e)),Q(e)||(e={});const r=Array.isArray(t)?t:t.match(/[^.[\]]+/g)||[],i=r[r.length-1];if(!i)return e;let s=e;for(let o=0;o<r.length-1;o++){const a=r[o];if(!s[a]||!Q(s[a])&&!Array.isArray(s[a])){const l=r[o+1];isNaN(Number(l))?s[a]={}:s[a]=[]}s=s[a]}return s[i]=n(s[i]),e}function ht(e,t,n){return si(e,t,()=>n)}function Cr(e,t){if(!e||Object(e)!==e)return;typeof e<"u"&&(e=ge(e));const n=Array.isArray(t)?t:t.toString().match(/[^.[\]]+/g)||[],r=n.length===1?e:$e(e,n.slice(0,-1).join("."));return Array.isArray(r)?r.splice(Number(n[n.length-1]),1):r==null||delete r[n[n.length-1]],e}function Ur(e,t){return zd(e,n=>Q(n)?Ur(n,t):Array.isArray(n)?n.length===0||n.every(r=>typeof r=="string")?t(n):n.some(r=>Q(r)?Ur(r,t):t(r)):t(n))}function Zn(e){return e?.nodeName==="INPUT"}function Xd(e){return e?.nodeName==="TEXTAREA"}function tr(e){return e?.nodeName==="SELECT"}function ws(e){return e?.nodeName==="FIELDSET"}function qt(e){return Zn(e)||Xd(e)||tr(e)}function cl(e){return e.nodeType===Node.ELEMENT_NODE}function Dt(e,t){return t??(qt(e)?e.name:"")}function to(e){let t=e;for(;t&&t.nodeName!=="FORM";){if(t.hasAttribute("data-felte-ignore"))return!0;t=t.parentElement}return!1}function Jd(e,t){if(!(Q(e)||Q(t))){if(e===null||e==="")return t;if(t===null||t===""||!t)return e;if(!(!e||!t)){if(Array.isArray(e)){if(!Array.isArray(t))return[...e,t];const n=[],r=Math.max(t.length,e.length);for(let i=0;i<r;i++){let s=e[i],o=t[i];!Q(s)&&!Q(o)?(Array.isArray(s)||(s=[s]),Array.isArray(o)||(o=[o]),n.push(...s,...o)):n.push(Qn([s??{},o??{}]))}return n.filter(Boolean)}return Array.isArray(t)||(t=[t]),[e,...t].reduce((n,r)=>n.concat(r),[]).filter(Boolean)}}}function Qn(e){return pn(...e,Jd)}function Yd(e,t){return t?(Array.isArray(t)?t:[t]).map(r=>r(e)):[]}function bo(e,t){return t?Array.isArray(t)?t.reduce((n,r)=>r(n),e):t(e):e}function ia(e=8){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";let n="";for(let r=0;r<e;r++)n+=t.charAt(Math.floor(Math.random()*t.length));return n}function Gi(e,t,{onInit:n,onEnd:r}={}){let i;return(...s)=>{i||n?.(),i&&clearTimeout(i),i=setTimeout(()=>{e.apply(this,s),i=void 0,r?.()},t)}}function So(e){if(qt(e))return[e];if(e.childElementCount===0)return[];const t=new Set;for(const n of e.children){if(qt(n)&&t.add(n),ws(n))for(const r of n.elements)qt(r)&&t.add(r);n.childElementCount>0&&So(n).forEach(r=>t.add(r))}return Array.from(t)}function Bc(e){for(const t of e.elements)!qt(t)&&!ws(t)||e.hasAttribute("data-felte-keep-on-remove")&&!t.hasAttribute("data-felte-keep-on-remove")&&(t.dataset.felteKeepOnRemove=e.dataset.felteKeepOnRemove)}function jc(e){return e.type.match(/^(number|range)$/)?e.value?+e.value:void 0:e.value}function ul(e){var t;let n={},r={};for(const i of e.elements){if(ws(i)&&Bc(i),!qt(i)||!i.name)continue;const s=Dt(i);if(Zn(i)){if(i.type==="checkbox"){if(typeof $e(n,s)>"u"){if(Array.from(e.querySelectorAll(`[name="${i.name}"]`)).filter(l=>qt(l)?s===Dt(l):!1).length===1){n=ht(n,s,i.checked),r=ht(r,s,!1);continue}n=ht(n,s,i.checked?[i.value]:[]),r=ht(r,s,!1);continue}Array.isArray($e(n,s))&&i.checked&&(n=si(n,s,a=>[...a,i.value]));continue}if(i.type==="radio"){if($e(n,s))continue;n=ht(n,s,i.checked?i.value:void 0),r=ht(r,s,!1);continue}if(i.type==="file"){n=ht(n,s,i.multiple?Array.from(i.files||[]):(t=i.files)===null||t===void 0?void 0:t[0]),r=ht(r,s,!1);continue}}else if(tr(i)){if(!i.multiple)n=ht(n,s,i.value);else{const l=Array.from(i.selectedOptions).map(c=>c.value);n=ht(n,s,l)}r=ht(r,s,!1);continue}const o=jc(i);n=ht(n,s,o),r=ht(r,s,!1)}return{defaultData:n,defaultTouched:r}}function Zd(e,t){var n;if(!qt(e))return;const r=t;if(Zn(e)){if(e.type==="checkbox"){const i=r;if(typeof i>"u"||typeof i=="boolean"){e.checked=!!i;return}Array.isArray(i)&&(i.includes(e.value)?e.checked=!0:e.checked=!1);return}if(e.type==="radio"){const i=r;e.value===i?e.checked=!0:e.checked=!1;return}if(e.type==="file"){if(t instanceof FileList)e.files=t;else if(t instanceof File&&typeof DataTransfer<"u"){const i=new DataTransfer;i.items.add(t),e.files=i.files}else if(typeof DataTransfer<"u"&&Array.isArray(t)&&t.some(i=>i instanceof File)){const i=new DataTransfer;for(const s of t)s instanceof File&&i.items.add(s);e.files=i.files}else(!t||Array.isArray(t)&&!t.length)&&(e.files=null,e.value="");return}}else if(tr(e)){if(e.multiple){if(Array.isArray(r)){e.value=String((n=r[0])!==null&&n!==void 0?n:"");const s=r.map(o=>String(o));for(const o of e.options)s.includes(o.value)?o.selected=!0:o.selected=!1}}else{e.value=String(r??"");for(const s of e.options)s.value===String(r)?s.selected=!0:s.selected=!1}return}e.value=String(r??"")}function Pi(e,t){for(const n of e.elements){if(ws(n)&&Bc(n),!qt(n)||!n.name)continue;const r=Dt(n);Zd(n,$e(t,r))}}function Hc(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]]);return n}function Ke(e,t){return Es(e,n=>Q(n)?Ke(n,t):Array.isArray(n)?n.length===0||n.every(r=>typeof r=="string")?t:n.map(r=>{const i=Ke(r,t);return Hc(i,["key"])}):t)}function xn(e){return e?Es(e,t=>Q(t)?xn(t):Array.isArray(t)?t.length===0||t.every(n=>typeof n=="string")?t:t.map(n=>{if(!Q(n))return n;const r=xn(n);return r.key||(r.key=ia()),r}):t):{}}function kn(e){return e?Es(e,t=>Q(t)?kn(t):Array.isArray(t)?t.length===0||t.every(n=>typeof n=="string")?t:t.map(n=>{if(!Q(n))return n;const r=kn(n);return Hc(r,["key"])}):t):{}}function tf(){class e extends CustomEvent{constructor(i){super("feltesuccess",{detail:i})}}class t extends CustomEvent{constructor(i){super("felteerror",{detail:i,cancelable:!0})}setErrors(i){this.preventDefault(),this.errors=i}}class n extends Event{constructor(){super("feltesubmit",{cancelable:!0})}handleSubmit(i){this.onSubmit=i}handleError(i){this.onError=i}handleSuccess(i){this.onSuccess=i}}return{createErrorEvent:r=>new t(r),createSubmitEvent:()=>new n,createSuccessEvent:r=>new e(r)}}function ef(e){if(e)return async function(){let n=new FormData(e);const r=new URL(e.action),i=e.method.toLowerCase()==="get"?"get":r.searchParams.get("_method")||e.method;let s=e.enctype;e.querySelector('input[type="file"]')&&(s="multipart/form-data"),(i==="get"||s==="application/x-www-form-urlencoded")&&(n=new URLSearchParams(n));let o;i==="get"?(n.forEach((l,c)=>{r.searchParams.append(c,l)}),o={method:i,headers:{Accept:"application/json"}}):o={method:i,body:n,headers:Object.assign(Object.assign({},s!=="multipart/form-data"&&{"Content-Type":s}),{Accept:"application/json"})};const a=await window.fetch(r.toString(),o);if(a.ok)return a;throw new qd("An error occurred while submitting the form",a)}}function Ri(e,t,n,r){return si(e,t,i=>(typeof i<"u"&&!Array.isArray(i)||(i||(i=[]),typeof r>"u"?i.push(n):i.splice(r,0,n)),i))}function nf(e,t,n,r){return si(e,t,i=>(!i||!Array.isArray(i)||([i[n],i[r]]=[i[r],i[n]]),i))}function rf(e,t,n,r){return si(e,t,i=>(!i||!Array.isArray(i)||i.splice(r,0,i.splice(n,1)[0]),i))}function hl(e){return typeof e=="function"}function an(e){return(n,r)=>{if(typeof n=="string"){const i=n;e(s=>{const o=hl(r)?r($e(s,i)):r;return ht(s,i,o)})}else e(i=>hl(n)?n(i):n)}}function sf({stores:e,config:t,validateErrors:n,validateWarnings:r,_getCurrentExtenders:i}){var s;let o,a=xn((s=t.initialValues)!==null&&s!==void 0?s:{});const{data:l,touched:c,errors:u,warnings:h,isDirty:d,isSubmitting:f,interacted:y}=e,w=an(l.update),R=an(c.update),T=an(u.update),q=an(h.update);function z(S){w(x=>{const j=S(x);return o&&Pi(o,j),j})}const M=(S,x,j)=>{an(z)(S,x),typeof S=="string"&&j&&R(S,!0)};function ct(S,x,j){const rt=Q(x)?Ke(x,!1):!1,It=Q(rt)?_e(rt,[]):[];x=Q(x)?Object.assign(Object.assign({},x),{key:ia()}):x,u.update(at=>Ri(at,S,It,j)),h.update(at=>Ri(at,S,It,j)),c.update(at=>Ri(at,S,rt,j)),l.update(at=>{const Kt=Ri(at,S,x,j);return setTimeout(()=>o&&Pi(o,Kt)),Kt})}function Z(S){u.update(S),h.update(S),c.update(S),l.update(x=>{const j=S(x);return setTimeout(()=>o&&Pi(o,j)),j})}function ft(S){Z(x=>Cr(x,S))}function ot(S,x,j){Z(rt=>nf(rt,S,x,j))}function lt(S,x,j){Z(rt=>rf(rt,S,x,j))}function pt(S){const x=$e(a,S),j=Q(x)?Ke(x,!1):!1,rt=Q(j)?_e(j,[]):[];l.update(It=>{const at=ht(It,S,x);return o&&Pi(o,at),at}),c.update(It=>ht(It,S,j)),u.update(It=>ht(It,S,rt)),h.update(It=>ht(It,S,rt))}const W=an(f.update),ut=an(d.update),re=an(y.update);async function N(){const S=Ge(l);c.set(Ke(S,!0)),y.set(null);const x=await n(S);return await r(S),x}function et(){M(ge(a)),R(S=>_e(S,!1)),y.set(null),d.set(!1)}function _t(S){return async function(j){var rt,It,at,Kt,St,ie,Le;const{createErrorEvent:qe,createSubmitEvent:se,createSuccessEvent:oe}=tf(),ae=se();o?.dispatchEvent(ae);const C=(It=(rt=ae.onError)!==null&&rt!==void 0?rt:S?.onError)!==null&&It!==void 0?It:t.onError,g=(Kt=(at=ae.onSuccess)!==null&&at!==void 0?at:S?.onSuccess)!==null&&Kt!==void 0?Kt:t.onSuccess,k=(Le=(ie=(St=ae.onSubmit)!==null&&St!==void 0?St:S?.onSubmit)!==null&&ie!==void 0?ie:t.onSubmit)!==null&&Le!==void 0?Le:ef(o);if(!k||(j?.preventDefault(),ae.defaultPrevented))return;f.set(!0),y.set(null);const B=kn(Ge(l)),Tt=await n(B,S?.validate),Se=await r(B,S?.warn);if(Se&&h.set($c(_e(B,[]),Se)),c.set(Ke(B,!0)),Tt&&(c.set(Ke(Tt,!0)),Ur(Tt,yt=>Array.isArray(yt)?yt.length>=1:!!yt))){await new Promise(yt=>setTimeout(yt)),i().forEach(yt=>{var le;return(le=yt.onSubmitError)===null||le===void 0?void 0:le.call(yt,{data:B,errors:Tt})}),f.set(!1);return}const pe={event:j,setFields:M,setData:w,setTouched:R,setErrors:T,setWarnings:q,unsetField:ft,addField:ct,resetField:pt,reset:et,setInitialValues:Ft.setInitialValues,moveField:lt,swapFields:ot,form:o,controls:o&&Array.from(o.elements).filter(qt),config:Object.assign(Object.assign({},t),S)};try{const it=await k(B,pe);o?.dispatchEvent(oe(Object.assign({response:it},pe))),await g?.(it,pe)}catch(it){const yt=qe(Object.assign({error:it},pe));if(o?.dispatchEvent(yt),!C&&!yt.defaultPrevented)throw it;if(!C&&!yt.errors)return;const le=yt.errors||await C?.(it,pe);le&&(c.set(Ke(le,!0)),u.set(le),await new Promise(Pt=>setTimeout(Pt)),i().forEach(Pt=>{var Pe;return(Pe=Pt.onSubmitError)===null||Pe===void 0?void 0:Pe.call(Pt,{data:B,errors:Ge(u)})}))}finally{f.set(!1)}}}const Ft={setData:w,setFields:M,setTouched:R,setErrors:T,setWarnings:q,setIsSubmitting:W,setIsDirty:ut,setInteracted:re,validate:N,reset:et,unsetField:ft,resetField:pt,addField:ct,swapFields:ot,moveField:lt,createSubmitHandler:_t,handleSubmit:_t(),setInitialValues:S=>{a=xn(S)}};return{public:Ft,private:{_setFormNode(S){o=S},_getInitialValues:()=>a}}}function of({helpers:e,stores:t,config:n,extender:r,createSubmitHandler:i,handleSubmit:s,_setFormNode:o,_getInitialValues:a,_setCurrentExtenders:l,_getCurrentExtenders:c}){const{setFields:u,setTouched:h,reset:d,setInitialValues:f}=e,{addValidator:y,addTransformer:w,validate:R}=e,{data:T,errors:q,warnings:z,touched:M,isSubmitting:ct,isDirty:Z,interacted:ft,isValid:ot,isValidating:lt}=t;function pt(W){W.requestSubmit||(W.requestSubmit=s);function ut(C){return function(g){return g({form:W,stage:C,controls:Array.from(W.elements).filter(qt),data:T,errors:q,warnings:z,touched:M,isValid:ot,isValidating:lt,isSubmitting:ct,isDirty:Z,interacted:ft,config:n,addValidator:y,addTransformer:w,setFields:u,validate:R,reset:d,createSubmitHandler:i,handleSubmit:s})}}l(r.map(ut("MOUNT"))),W.noValidate=!!n.validate;const{defaultData:re,defaultTouched:N}=ul(W);o(W),f($c(ge(re),a())),u(a()),M.set(N);function et(C){const g=Dt(C),k=Array.from(W.querySelectorAll(`[name="${C.name}"]`)).filter(B=>qt(B)?g===Dt(B):!1);if(k.length!==0)return k.length===1?T.update(B=>ht(B,Dt(C),C.checked)):T.update(B=>ht(B,Dt(C),k.filter(Zn).filter(Tt=>Tt.checked).map(Tt=>Tt.value)))}function _t(C){const g=W.querySelectorAll(`[name="${C.name}"]`),k=Array.from(g).find(B=>Zn(B)&&B.checked);T.update(B=>ht(B,Dt(C),k?.value))}function Ft(C){var g;const k=Array.from((g=C.files)!==null&&g!==void 0?g:[]);T.update(B=>ht(B,Dt(C),C.multiple?k:k[0]))}function Ut(C){if(!C.multiple)T.update(g=>ht(g,Dt(C),C.value));else{const g=Array.from(C.selectedOptions).map(k=>k.value);T.update(k=>ht(k,Dt(C),g))}}function S(C){const g=C.target;if(!g||!qt(g)||tr(g)||to(g)||["checkbox","radio","file"].includes(g.type)||!g.name)return;Z.set(!0);const k=jc(g);ft.set(g.name),T.update(B=>ht(B,Dt(g),k))}function x(C){const g=C.target;if(!(!g||!qt(g)||to(g))&&g.name)if(h(Dt(g),!0),ft.set(g.name),(tr(g)||["checkbox","radio","file","hidden"].includes(g.type))&&Z.set(!0),g.type==="hidden"&&T.update(k=>ht(k,Dt(g),g.value)),tr(g))Ut(g);else if(Zn(g))g.type==="checkbox"?et(g):g.type==="radio"?_t(g):g.type==="file"&&Ft(g);else return}function j(C){const g=C.target;!g||!qt(g)||to(g)||g.name&&(h(Dt(g),!0),ft.set(g.name))}function rt(C){C.preventDefault(),d()}const It={childList:!0,subtree:!0};function at(C){let g=Ge(T),k=Ge(M),B=Ge(q),Tt=Ge(z);for(const Se of C.reverse()){if(Se.hasAttribute("data-felte-keep-on-remove")&&Se.dataset.felteKeepOnRemove!=="false")continue;const pe=/.*(\[[0-9]+\]|\.[0-9]+)\.[^.]+$/;let it=Dt(Se);const yt=Ge(M);if(pe.test(it)){const Pt=it.split(".").slice(0,-1).join("."),Pe=$e(yt,Pt);Q(Pe)&&Object.keys(Pe).length<=1&&(it=Pt)}g=Cr(g,it),k=Cr(k,it),B=Cr(B,it),Tt=Cr(Tt,it)}T.set(g),M.set(k),q.set(B),z.set(Tt)}const Kt=Gi(()=>{c().forEach(k=>{var B;return(B=k.destroy)===null||B===void 0?void 0:B.call(k)}),l(r.map(ut("UPDATE")));const{defaultData:C,defaultTouched:g}=ul(W);T.update(k=>ll(k,C)),M.update(k=>ll(k,g)),e.setFields(Ge(T))},0);let St=[];const ie=Gi(()=>{c().forEach(C=>{var g;return(g=C.destroy)===null||g===void 0?void 0:g.call(C)}),l(r.map(ut("UPDATE"))),at(St),St=[]},0);function Le(C){Array.from(C.addedNodes).some(k=>cl(k)?qt(k)?!0:So(k).length>0:!1)&&Kt()}function qe(C){for(const g of C.removedNodes){if(!cl(g))continue;const k=So(g);k.length!==0&&(St.push(...k),ie())}}function se(C){for(const g of C)g.type==="childList"&&(g.addedNodes.length>0&&Le(g),g.removedNodes.length>0&&qe(g))}const oe=new MutationObserver(se);oe.observe(W,It),W.addEventListener("input",S),W.addEventListener("change",x),W.addEventListener("focusout",j),W.addEventListener("submit",s),W.addEventListener("reset",rt);const ae=q.subscribe(C=>{for(const g of W.elements){if(!qt(g)||!g.name)continue;const k=$e(C,Dt(g)),B=Array.isArray(k)?k.join(`
`):typeof k=="string"?k:void 0;B!==g.dataset.felteValidationMessage&&(B?(g.dataset.felteValidationMessage=B,g.setAttribute("aria-invalid","true")):(delete g.dataset.felteValidationMessage,g.removeAttribute("aria-invalid")))}});return{destroy(){oe.disconnect(),W.removeEventListener("input",S),W.removeEventListener("change",x),W.removeEventListener("focusout",j),W.removeEventListener("submit",s),W.removeEventListener("reset",rt),ae(),c().forEach(C=>{var g;return(g=C.destroy)===null||g===void 0?void 0:g.call(C)})}}}return{form:pt}}function af(e){const t={aborted:!1,priority:e};return{signal:t,abort(){t.aborted=!0}}}function lf(e,t){if(Q(e))return!t||Q(t)&&Object.keys(t).length===0?_e(e,null):void 0;if(Array.isArray(e)){if(e.some(Q))return;const n=Array.isArray(t)?t:[];return e.map((r,i)=>{const s=n[i];return Array.isArray(s)&&s.length===0?null:r&&s||null})}return Array.isArray(t)&&t.length===0?null:Array.isArray(t)?e?t:null:e&&t?[t]:null}function cf(e,t){if(Q(e))return!t||Q(t)&&Object.keys(t).length===0?_e(e,null):void 0;if(Array.isArray(e)){if(e.some(Q))return;const n=Array.isArray(t)?t:[];return e.map((r,i)=>{const s=n[i];return Array.isArray(s)&&s.length===0?null:s||null})}return Array.isArray(t)&&t.length===0?null:Array.isArray(t)?t:t?[t]:null}function uf([e,t]){return pn(t,e,lf)}function hf([e,t]){return pn(t,e,cf)}function df(e){return function(n,r,i){const s=Array.isArray(n)?n:[n],o=new Array(s.length),a=e(i),l=a.set,c=a.subscribe;let u;function h(){u=s.map((f,y)=>f.subscribe(w=>{o[y]=w,l(r(o))}))}function d(){u?.forEach(f=>f())}return a.subscribe=function(y){const w=c(y);return()=>{w()}},[a,h,d]}}function ff(e,t){var n,r,i,s,o,a,l,c,u;const h=df(e),d=t.initialValues=t.initialValues?xn(bo(ge(t.initialValues),t.transform)):{},f=Ke(kn(d),!1),y=e(f),w=e(0),[R,T,q]=h([y,w],([Y,nt])=>Ur(Y,$t=>!!$t)&&nt>=1,!1);delete R.set,delete R.update;function z(Y){let nt;return async function($t,me,Bt,Ie=!1){if(!Bt||!$t)return;let Rt=me&&Object.keys(me).length>0?me:_e($t,[]);const Ve=af(Ie);if((!nt?.signal.priority||Ie)&&(nt?.abort(),nt=Ve),nt.signal.priority&&!Ie)return;w.update(ce=>ce+1);const Sn=Yd($t,Bt);return Sn.forEach(async ce=>{const _=await ce;Ve.signal.aborted||(Rt=Qn([Rt,_]),Y.set(Rt))}),await Promise.all(Sn),nt=void 0,w.update(ce=>ce-1),Rt}}let M=_e(f,[]);const ct=e(d),Z=_e(f,[]),ft=e(Z),ot=e(ge(Z)),[lt,pt,W]=h([ft,ot],Qn,ge(Z)),ut=_e(f,[]),re=e(ut),N=e(ge(ut)),[et,_t,Ft]=h([re,N],Qn,ge(ut)),[Ut,S,x]=h([lt,y],uf,ge(Z)),[j,rt,It]=h([et,y],hf,ge(ut));let at=!1;const[Kt,St,ie]=h(lt,([Y])=>{var nt;return at?!Ur(Y,vt=>Array.isArray(vt)?vt.length>=1:!!vt):(at=!0,!t.validate&&!(!((nt=t.debounced)===null||nt===void 0)&&nt.validate))},!t.validate&&!(!((n=t.debounced)===null||n===void 0)&&n.validate));delete Kt.set,delete Kt.update;const Le=e(!1),qe=e(!1),se=e(null),oe=z(ft),ae=z(re),C=z(ot),g=z(N),k=Gi(C,(o=(i=(r=t.debounced)===null||r===void 0?void 0:r.validateTimeout)!==null&&i!==void 0?i:(s=t.debounced)===null||s===void 0?void 0:s.timeout)!==null&&o!==void 0?o:300,{onInit:()=>{w.update(Y=>Y+1)},onEnd:()=>{w.update(Y=>Y-1)}}),B=Gi(g,(u=(l=(a=t.debounced)===null||a===void 0?void 0:a.warnTimeout)!==null&&l!==void 0?l:(c=t.debounced)===null||c===void 0?void 0:c.timeout)!==null&&u!==void 0?u:300);async function Tt(Y,nt){var vt;const $t=kn(Y),me=oe($t,M,nt??t.validate,!0);if(nt)return me;const Bt=C($t,M,(vt=t.debounced)===null||vt===void 0?void 0:vt.validate,!0);return Qn(await Promise.all([me,Bt]))}async function Se(Y,nt){var vt;const $t=kn(Y),me=ae($t,M,nt??t.warn,!0);if(nt)return me;const Bt=g($t,M,(vt=t.debounced)===null||vt===void 0?void 0:vt.warn,!0);return Qn(await Promise.all([me,Bt]))}let pe=Z,it=ut;function yt(){const Y=ct.subscribe(Bt=>{var Ie,Rt;const Ve=kn(Bt);oe(Ve,M,t.validate),ae(Ve,M,t.warn),k(Ve,M,(Ie=t.debounced)===null||Ie===void 0?void 0:Ie.validate),B(Ve,M,(Rt=t.debounced)===null||Rt===void 0?void 0:Rt.warn)}),nt=y.subscribe(Bt=>{M=_e(Bt,[])}),vt=lt.subscribe(Bt=>{pe=Bt}),$t=et.subscribe(Bt=>{it=Bt});pt(),St(),_t(),S(),rt(),T();function me(){Y(),x(),W(),Ft(),It(),ie(),q(),nt(),vt(),$t()}return me}function le(Y){ft.set(Y(pe)),ot.set({})}function Pt(Y){re.set(Y(it)),N.set({})}function Pe(Y){le(()=>Y)}function wr(Y){Pt(()=>Y)}return Ut.set=Pe,Ut.update=le,j.set=wr,j.update=Pt,{data:ct,errors:Ut,warnings:j,touched:y,isValid:Kt,isSubmitting:Le,isDirty:qe,isValidating:R,interacted:se,validateErrors:Tt,validateWarnings:Se,cleanup:t.preventStoreStart?()=>{}:yt(),start:yt}}function pf(e,t){var n,r;(n=e.extend)!==null&&n!==void 0||(e.extend=[]),(r=e.debounced)!==null&&r!==void 0||(e.debounced={}),e.validate&&!Array.isArray(e.validate)&&(e.validate=[e.validate]),e.debounced.validate&&!Array.isArray(e.debounced.validate)&&(e.debounced.validate=[e.debounced.validate]),e.transform&&!Array.isArray(e.transform)&&(e.transform=[e.transform]),e.warn&&!Array.isArray(e.warn)&&(e.warn=[e.warn]),e.debounced.warn&&!Array.isArray(e.debounced.warn)&&(e.debounced.warn=[e.debounced.warn]);function i(_t,{debounced:Ft,level:Ut}={debounced:!1,level:"error"}){var S;const x=Ut==="error"?"validate":"warn";(S=e.debounced)!==null&&S!==void 0||(e.debounced={});const j=Ft?e.debounced:e;j[x]?j[x]=[...j[x],_t]:j[x]=[_t]}function s(_t){e.transform?e.transform=[...e.transform,_t]:e.transform=[_t]}const o=Array.isArray(e.extend)?e.extend:[e.extend];let a=[];const l=()=>a,c=_t=>{a=_t},{isSubmitting:u,isValidating:h,data:d,errors:f,warnings:y,touched:w,isValid:R,isDirty:T,cleanup:q,start:z,validateErrors:M,validateWarnings:ct,interacted:Z}=ff(t.storeFactory,e),ft=d.update,ot=d.set,lt=_t=>ft(Ft=>xn(bo(_t(Ft),e.transform))),pt=_t=>ot(xn(bo(_t,e.transform)));d.update=lt,d.set=pt;const W=sf({extender:o,config:e,addValidator:i,addTransformer:s,validateErrors:M,validateWarnings:ct,_getCurrentExtenders:l,stores:{data:d,errors:f,warnings:y,touched:w,isValid:R,isValidating:h,isSubmitting:u,isDirty:T,interacted:Z}}),{createSubmitHandler:ut,handleSubmit:re}=W.public;a=o.map(_t=>_t({stage:"SETUP",errors:f,warnings:y,touched:w,data:d,isDirty:T,isValid:R,isValidating:h,isSubmitting:u,interacted:Z,config:e,addValidator:i,addTransformer:s,setFields:W.public.setFields,reset:W.public.reset,validate:W.public.validate,handleSubmit:re,createSubmitHandler:ut}));const N=Object.assign({config:e,stores:{data:d,touched:w,errors:f,warnings:y,isSubmitting:u,isValidating:h,isValid:R,isDirty:T,interacted:Z},createSubmitHandler:ut,handleSubmit:re,helpers:Object.assign(Object.assign({},W.public),{addTransformer:s,addValidator:i}),extender:o,_getCurrentExtenders:l,_setCurrentExtenders:c},W.private),{form:et}=of(N);return Object.assign({data:d,errors:f,warnings:y,touched:w,isValid:R,isSubmitting:u,isValidating:h,isDirty:T,interacted:Z,form:et,cleanup:q,startStores:z},W.public)}function mf(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]]);return n}const Gn=[];function Wc(e,t=Ye){let n;const r=new Set;function i(a){if(vs(e,a)&&(e=a,n)){const l=!Gn.length;for(const c of r)c[1](),Gn.push(c,e);if(l){for(let c=0;c<Gn.length;c+=2)Gn[c][0](Gn[c+1]);Gn.length=0}}}function s(a){i(a(e))}function o(a,l=Ye){const c=[a,l];return r.add(c),r.size===1&&(n=t(i,s)||Ye),a(e),()=>{r.delete(c),r.size===0&&n&&(n(),n=null)}}return{set:i,update:s,subscribe:o}}function gf(e){const t=pf(e??{},{storeFactory:Wc}),{cleanup:n,startStores:r}=t,i=mf(t,["cleanup","startStores"]);return Md(n),i}const qc={},zc={};function dl(e){const t=e.config;if(e.stage==="SETUP"){if(!t.__felteReporterSvelteId){const n=ia(21);t.__felteReporterSvelteId=n,qc[n]=e.errors,zc[n]=e.warnings}return{}}return e.form.hasAttribute("data-felte-reporter-svelte-id")||(e.form.dataset.felteReporterSvelteId=t.__felteReporterSvelteId),{onSubmitError(){const n=e&&e.form.querySelector('[aria-invalid="true"]:not([type="hidden"])');n&&n.focus()}}}function _f(e){return!e||"preventFocusOnError"in e?t=>dl(t):dl(e)}const yf=e=>({}),fl=e=>({}),vf=e=>({messages:e&4}),pl=e=>({messages:e[2]});function Ef(e){let t;const n=e[9].placeholder,r=Vc(n,e,e[8],fl);return{c(){r&&r.c()},l(i){r&&r.l(i)},m(i,s){r&&r.m(i,s),t=!0},p(i,s){r&&r.p&&(!t||s&256)&&Mc(r,n,i,i[8],t?Fc(n,i[8],s,yf):xc(i[8]),fl)},i(i){t||(he(r,i),t=!0)},o(i){ue(r,i),t=!1},d(i){r&&r.d(i)}}}function wf(e){let t;const n=e[9].default,r=Vc(n,e,e[8],pl);return{c(){r&&r.c()},l(i){r&&r.l(i)},m(i,s){r&&r.m(i,s),t=!0},p(i,s){r&&r.p&&(!t||s&260)&&Mc(r,n,i,i[8],t?Fc(n,i[8],s,vf):xc(i[8]),pl)},i(i){t||(he(r,i),t=!0)},o(i){ue(r,i),t=!1},d(i){r&&r.d(i)}}}function If(e){let t,n,r,i,s,o;const a=[wf,Ef],l=[];function c(u,h){return!u[3].placeholder||u[2]?0:1}return r=c(e),i=l[r]=a[r](e),{c(){t=A("div"),n=G(),i.c(),s=al(),this.h()},l(u){t=b(u,"DIV",{style:!0}),V(t).forEach(m),n=K(u),i.l(u),s=al(),this.h()},h(){xd(t,"display","none")},m(u,h){D(u,t,h),e[10](t),D(u,n,h),l[r].m(u,h),D(u,s,h),o=!0},p(u,[h]){let d=r;r=c(u),r===d?l[r].p(u,h):(Fd(),ue(l[d],1,1,()=>{l[d]=null}),Ud(),i=l[r],i?i.p(u,h):(i=l[r]=a[r](u),i.c()),he(i,1),i.m(s.parentNode,s))},i(u){o||(he(i),o=!0)},o(u){ue(i),o=!1},d(u){u&&(m(t),m(n),m(s)),e[10](null),l[r].d(u)}}}function Tf(e,t,n){let r,i,s=Ye,o=()=>(s(),s=Bd(d,T=>n(7,i=T)),d);e.$$.on_destroy.push(()=>s());let{$$slots:a={},$$scope:l}=t;const c=$d(a);let{level:u="error"}=t,{for:h}=t,d,f,y;function w(){return y.closest("form")}Lc(()=>{n(6,f=Dt(y,h));const q=w();o(q?u==="error"?n(0,d=qc[q.dataset.felteReporterSvelteId]):n(0,d=zc[q.dataset.felteReporterSvelteId]):n(0,d=Wc({})))});function R(T){$i[T?"unshift":"push"](()=>{y=T,n(1,y)})}return e.$$set=T=>{"level"in T&&n(4,u=T.level),"for"in T&&n(5,h=T.for),"$$scope"in T&&n(8,l=T.$$scope)},e.$$.update=()=>{e.$$.dirty&192&&n(2,r=f&&$e(i,f))},[d,y,r,c,u,h,f,i,l,a,R]}class Af extends ta{constructor(t){super(),ea(this,t,Tf,If,vs,{level:4,for:5})}}const Me=Af;function bf(e){return e.issues.reduce((t,n)=>{if(n.path){const r=n.path.map(({key:i})=>i).join(".");t.nested[r]=[...t.nested[r]||[],n.message]}else t.root=[...t.root||[],n.message];return t},{nested:{}})}var Fn=class extends Error{issues;constructor(e){super(e[0].message),this.name="ValiError",this.issues=e}};function Gc(e,t,n){let r=e;const i=[];for(const s of t)try{r=s(r,n)}catch(o){if(n.abortEarly||n.abortPipeEarly)throw o;i.push(...o.issues)}if(i.length)throw new Fn(i);return r}function Sf(e,t){return[...e?.path||[],t]}function Kc(e,t){const[n,r=[]]=!e||typeof e=="string"?[e,t]:[void 0,e];return{error:n,pipe:r}}function Qc(e,t,n){const{error:r,pipe:i}=Kc(t,n);return{schema:"object",object:e,async:!1,parse(s,o){if(!s||typeof s!="object"||s.toString()!=="[object Object]")throw new Fn([{reason:"type",validation:"object",origin:"value",message:r||"Invalid type",input:s,...o}]);const a={},l=[];for(const[c,u]of Object.entries(e))try{const h=s[c];a[c]=u.parse(h,{...o,path:Sf(o,{schema:"object",input:s,key:c,value:h})})}catch(h){if(o?.abortEarly)throw h;l.push(...h.issues)}if(l.length)throw new Fn(l);return Gc(a,i,{...o,reason:"object"})}}}function eo(e){return{schema:"optional",wrapped:e,async:!1,parse(t,n){return t===void 0?t:e.parse(t,n)}}}function jt(e,t){const{error:n,pipe:r}=Kc(e,t);return{schema:"string",async:!1,parse(i,s){if(typeof i!="string")throw new Fn([{reason:"type",validation:"string",origin:"value",message:n||"Invalid type",input:i,...s}]);return Gc(i,r,{...s,reason:"string"})}}}function Po(e,t,n){return e.parse(t,n)}function Ci(){return e=>e.trim()}function Pf(e,t){return(n,r)=>{if(n.length!==e)throw new Fn([{validation:"length",origin:"value",message:t||"Invalid length",input:n,...r}]);return n}}function no(e,t){return(n,r)=>{if(n.length<e)throw new Fn([{validation:"min_length",origin:"value",message:t||"Invalid length",input:n,...r}]);return n}}function ro(e,t){return(n,r)=>{if(!e.test(n))throw new Fn([{validation:"regex",origin:"value",message:t||"Invalid regex",input:n,...r}]);return n}}/*!
 * Signature Pad v4.1.6 | https://github.com/szimek/signature_pad
 * (c) 2023 Szymon Nowak | Released under the MIT license
 */class Ki{constructor(t,n,r,i){if(isNaN(t)||isNaN(n))throw new Error(`Point is invalid: (${t}, ${n})`);this.x=+t,this.y=+n,this.pressure=r||0,this.time=i||Date.now()}distanceTo(t){return Math.sqrt(Math.pow(this.x-t.x,2)+Math.pow(this.y-t.y,2))}equals(t){return this.x===t.x&&this.y===t.y&&this.pressure===t.pressure&&this.time===t.time}velocityFrom(t){return this.time!==t.time?this.distanceTo(t)/(this.time-t.time):0}}class sa{constructor(t,n,r,i,s,o){this.startPoint=t,this.control2=n,this.control1=r,this.endPoint=i,this.startWidth=s,this.endWidth=o}static fromPoints(t,n){const r=this.calculateControlPoints(t[0],t[1],t[2]).c2,i=this.calculateControlPoints(t[1],t[2],t[3]).c1;return new sa(t[1],r,i,t[2],n.start,n.end)}static calculateControlPoints(t,n,r){const i=t.x-n.x,s=t.y-n.y,o=n.x-r.x,a=n.y-r.y,l={x:(t.x+n.x)/2,y:(t.y+n.y)/2},c={x:(n.x+r.x)/2,y:(n.y+r.y)/2},u=Math.sqrt(i*i+s*s),h=Math.sqrt(o*o+a*a),d=l.x-c.x,f=l.y-c.y,y=h/(u+h),w={x:c.x+d*y,y:c.y+f*y},R=n.x-w.x,T=n.y-w.y;return{c1:new Ki(l.x+R,l.y+T),c2:new Ki(c.x+R,c.y+T)}}length(){let n=0,r,i;for(let s=0;s<=10;s+=1){const o=s/10,a=this.point(o,this.startPoint.x,this.control1.x,this.control2.x,this.endPoint.x),l=this.point(o,this.startPoint.y,this.control1.y,this.control2.y,this.endPoint.y);if(s>0){const c=a-r,u=l-i;n+=Math.sqrt(c*c+u*u)}r=a,i=l}return n}point(t,n,r,i,s){return n*(1-t)*(1-t)*(1-t)+3*r*(1-t)*(1-t)*t+3*i*(1-t)*t*t+s*t*t*t}}class Rf{constructor(){try{this._et=new EventTarget}catch{this._et=document}}addEventListener(t,n,r){this._et.addEventListener(t,n,r)}dispatchEvent(t){return this._et.dispatchEvent(t)}removeEventListener(t,n,r){this._et.removeEventListener(t,n,r)}}function Cf(e,t=250){let n=0,r=null,i,s,o;const a=()=>{n=Date.now(),r=null,i=e.apply(s,o),r||(s=null,o=[])};return function(...c){const u=Date.now(),h=t-(u-n);return s=this,o=c,h<=0||h>t?(r&&(clearTimeout(r),r=null),n=u,i=e.apply(s,o),r||(s=null,o=[])):r||(r=window.setTimeout(a,h)),i}}class Qi extends Rf{constructor(t,n={}){super(),this.canvas=t,this._drawningStroke=!1,this._isEmpty=!0,this._lastPoints=[],this._data=[],this._lastVelocity=0,this._lastWidth=0,this._handleMouseDown=r=>{r.buttons===1&&(this._drawningStroke=!0,this._strokeBegin(r))},this._handleMouseMove=r=>{this._drawningStroke&&this._strokeMoveUpdate(r)},this._handleMouseUp=r=>{r.buttons===1&&this._drawningStroke&&(this._drawningStroke=!1,this._strokeEnd(r))},this._handleTouchStart=r=>{if(r.cancelable&&r.preventDefault(),r.targetTouches.length===1){const i=r.changedTouches[0];this._strokeBegin(i)}},this._handleTouchMove=r=>{r.cancelable&&r.preventDefault();const i=r.targetTouches[0];this._strokeMoveUpdate(i)},this._handleTouchEnd=r=>{if(r.target===this.canvas){r.cancelable&&r.preventDefault();const s=r.changedTouches[0];this._strokeEnd(s)}},this._handlePointerStart=r=>{this._drawningStroke=!0,r.preventDefault(),this._strokeBegin(r)},this._handlePointerMove=r=>{this._drawningStroke&&(r.preventDefault(),this._strokeMoveUpdate(r))},this._handlePointerEnd=r=>{this._drawningStroke&&(r.preventDefault(),this._drawningStroke=!1,this._strokeEnd(r))},this.velocityFilterWeight=n.velocityFilterWeight||.7,this.minWidth=n.minWidth||.5,this.maxWidth=n.maxWidth||2.5,this.throttle="throttle"in n?n.throttle:16,this.minDistance="minDistance"in n?n.minDistance:5,this.dotSize=n.dotSize||0,this.penColor=n.penColor||"black",this.backgroundColor=n.backgroundColor||"rgba(0,0,0,0)",this.compositeOperation=n.compositeOperation||"source-over",this._strokeMoveUpdate=this.throttle?Cf(Qi.prototype._strokeUpdate,this.throttle):Qi.prototype._strokeUpdate,this._ctx=t.getContext("2d"),this.clear(),this.on()}clear(){const{_ctx:t,canvas:n}=this;t.fillStyle=this.backgroundColor,t.clearRect(0,0,n.width,n.height),t.fillRect(0,0,n.width,n.height),this._data=[],this._reset(this._getPointGroupOptions()),this._isEmpty=!0}fromDataURL(t,n={}){return new Promise((r,i)=>{const s=new Image,o=n.ratio||window.devicePixelRatio||1,a=n.width||this.canvas.width/o,l=n.height||this.canvas.height/o,c=n.xOffset||0,u=n.yOffset||0;this._reset(this._getPointGroupOptions()),s.onload=()=>{this._ctx.drawImage(s,c,u,a,l),r()},s.onerror=h=>{i(h)},s.crossOrigin="anonymous",s.src=t,this._isEmpty=!1})}toDataURL(t="image/png",n){switch(t){case"image/svg+xml":return typeof n!="object"&&(n=void 0),`data:image/svg+xml;base64,${btoa(this.toSVG(n))}`;default:return typeof n!="number"&&(n=void 0),this.canvas.toDataURL(t,n)}}on(){this.canvas.style.touchAction="none",this.canvas.style.msTouchAction="none",this.canvas.style.userSelect="none";const t=/Macintosh/.test(navigator.userAgent)&&"ontouchstart"in document;window.PointerEvent&&!t?this._handlePointerEvents():(this._handleMouseEvents(),"ontouchstart"in window&&this._handleTouchEvents())}off(){this.canvas.style.touchAction="auto",this.canvas.style.msTouchAction="auto",this.canvas.style.userSelect="auto",this.canvas.removeEventListener("pointerdown",this._handlePointerStart),this.canvas.removeEventListener("pointermove",this._handlePointerMove),this.canvas.ownerDocument.removeEventListener("pointerup",this._handlePointerEnd),this.canvas.removeEventListener("mousedown",this._handleMouseDown),this.canvas.removeEventListener("mousemove",this._handleMouseMove),this.canvas.ownerDocument.removeEventListener("mouseup",this._handleMouseUp),this.canvas.removeEventListener("touchstart",this._handleTouchStart),this.canvas.removeEventListener("touchmove",this._handleTouchMove),this.canvas.removeEventListener("touchend",this._handleTouchEnd)}isEmpty(){return this._isEmpty}fromData(t,{clear:n=!0}={}){n&&this.clear(),this._fromData(t,this._drawCurve.bind(this),this._drawDot.bind(this)),this._data=this._data.concat(t)}toData(){return this._data}_getPointGroupOptions(t){return{penColor:t&&"penColor"in t?t.penColor:this.penColor,dotSize:t&&"dotSize"in t?t.dotSize:this.dotSize,minWidth:t&&"minWidth"in t?t.minWidth:this.minWidth,maxWidth:t&&"maxWidth"in t?t.maxWidth:this.maxWidth,velocityFilterWeight:t&&"velocityFilterWeight"in t?t.velocityFilterWeight:this.velocityFilterWeight,compositeOperation:t&&"compositeOperation"in t?t.compositeOperation:this.compositeOperation}}_strokeBegin(t){this.dispatchEvent(new CustomEvent("beginStroke",{detail:t}));const n=this._getPointGroupOptions(),r=Object.assign(Object.assign({},n),{points:[]});this._data.push(r),this._reset(n),this._strokeUpdate(t)}_strokeUpdate(t){if(this._data.length===0){this._strokeBegin(t);return}this.dispatchEvent(new CustomEvent("beforeUpdateStroke",{detail:t}));const n=t.clientX,r=t.clientY,i=t.pressure!==void 0?t.pressure:t.force!==void 0?t.force:0,s=this._createPoint(n,r,i),o=this._data[this._data.length-1],a=o.points,l=a.length>0&&a[a.length-1],c=l?s.distanceTo(l)<=this.minDistance:!1,u=this._getPointGroupOptions(o);if(!l||!(l&&c)){const h=this._addPoint(s,u);l?h&&this._drawCurve(h,u):this._drawDot(s,u),a.push({time:s.time,x:s.x,y:s.y,pressure:s.pressure})}this.dispatchEvent(new CustomEvent("afterUpdateStroke",{detail:t}))}_strokeEnd(t){this._strokeUpdate(t),this.dispatchEvent(new CustomEvent("endStroke",{detail:t}))}_handlePointerEvents(){this._drawningStroke=!1,this.canvas.addEventListener("pointerdown",this._handlePointerStart),this.canvas.addEventListener("pointermove",this._handlePointerMove),this.canvas.ownerDocument.addEventListener("pointerup",this._handlePointerEnd)}_handleMouseEvents(){this._drawningStroke=!1,this.canvas.addEventListener("mousedown",this._handleMouseDown),this.canvas.addEventListener("mousemove",this._handleMouseMove),this.canvas.ownerDocument.addEventListener("mouseup",this._handleMouseUp)}_handleTouchEvents(){this.canvas.addEventListener("touchstart",this._handleTouchStart),this.canvas.addEventListener("touchmove",this._handleTouchMove),this.canvas.addEventListener("touchend",this._handleTouchEnd)}_reset(t){this._lastPoints=[],this._lastVelocity=0,this._lastWidth=(t.minWidth+t.maxWidth)/2,this._ctx.fillStyle=t.penColor,this._ctx.globalCompositeOperation=t.compositeOperation}_createPoint(t,n,r){const i=this.canvas.getBoundingClientRect();return new Ki(t-i.left,n-i.top,r,new Date().getTime())}_addPoint(t,n){const{_lastPoints:r}=this;if(r.push(t),r.length>2){r.length===3&&r.unshift(r[0]);const i=this._calculateCurveWidths(r[1],r[2],n),s=sa.fromPoints(r,i);return r.shift(),s}return null}_calculateCurveWidths(t,n,r){const i=r.velocityFilterWeight*n.velocityFrom(t)+(1-r.velocityFilterWeight)*this._lastVelocity,s=this._strokeWidth(i,r),o={end:s,start:this._lastWidth};return this._lastVelocity=i,this._lastWidth=s,o}_strokeWidth(t,n){return Math.max(n.maxWidth/(t+1),n.minWidth)}_drawCurveSegment(t,n,r){const i=this._ctx;i.moveTo(t,n),i.arc(t,n,r,0,2*Math.PI,!1),this._isEmpty=!1}_drawCurve(t,n){const r=this._ctx,i=t.endWidth-t.startWidth,s=Math.ceil(t.length())*2;r.beginPath(),r.fillStyle=n.penColor;for(let o=0;o<s;o+=1){const a=o/s,l=a*a,c=l*a,u=1-a,h=u*u,d=h*u;let f=d*t.startPoint.x;f+=3*h*a*t.control1.x,f+=3*u*l*t.control2.x,f+=c*t.endPoint.x;let y=d*t.startPoint.y;y+=3*h*a*t.control1.y,y+=3*u*l*t.control2.y,y+=c*t.endPoint.y;const w=Math.min(t.startWidth+c*i,n.maxWidth);this._drawCurveSegment(f,y,w)}r.closePath(),r.fill()}_drawDot(t,n){const r=this._ctx,i=n.dotSize>0?n.dotSize:(n.minWidth+n.maxWidth)/2;r.beginPath(),this._drawCurveSegment(t.x,t.y,i),r.closePath(),r.fillStyle=n.penColor,r.fill()}_fromData(t,n,r){for(const i of t){const{points:s}=i,o=this._getPointGroupOptions(i);if(s.length>1)for(let a=0;a<s.length;a+=1){const l=s[a],c=new Ki(l.x,l.y,l.pressure,l.time);a===0&&this._reset(o);const u=this._addPoint(c,o);u&&n(u,o)}else this._reset(o),r(s[0],o)}}toSVG({includeBackgroundColor:t=!1}={}){const n=this._data,r=Math.max(window.devicePixelRatio||1,1),i=0,s=0,o=this.canvas.width/r,a=this.canvas.height/r,l=document.createElementNS("http://www.w3.org/2000/svg","svg");if(l.setAttribute("xmlns","http://www.w3.org/2000/svg"),l.setAttribute("xmlns:xlink","http://www.w3.org/1999/xlink"),l.setAttribute("viewBox",`${i} ${s} ${o} ${a}`),l.setAttribute("width",o.toString()),l.setAttribute("height",a.toString()),t&&this.backgroundColor){const c=document.createElement("rect");c.setAttribute("width","100%"),c.setAttribute("height","100%"),c.setAttribute("fill",this.backgroundColor),l.appendChild(c)}return this._fromData(n,(c,{penColor:u})=>{const h=document.createElement("path");if(!isNaN(c.control1.x)&&!isNaN(c.control1.y)&&!isNaN(c.control2.x)&&!isNaN(c.control2.y)){const d=`M ${c.startPoint.x.toFixed(3)},${c.startPoint.y.toFixed(3)} C ${c.control1.x.toFixed(3)},${c.control1.y.toFixed(3)} ${c.control2.x.toFixed(3)},${c.control2.y.toFixed(3)} ${c.endPoint.x.toFixed(3)},${c.endPoint.y.toFixed(3)}`;h.setAttribute("d",d),h.setAttribute("stroke-width",(c.endWidth*2.25).toFixed(3)),h.setAttribute("stroke",u),h.setAttribute("fill","none"),h.setAttribute("stroke-linecap","round"),l.appendChild(h)}},(c,{penColor:u,dotSize:h,minWidth:d,maxWidth:f})=>{const y=document.createElement("circle"),w=h>0?h:(d+f)/2;y.setAttribute("r",w.toString()),y.setAttribute("cx",c.x.toString()),y.setAttribute("cy",c.y.toString()),y.setAttribute("fill",u),l.appendChild(y)}),l.outerHTML}}const kf="personalid",ml=Qc({location:jt([Ci(),no(1)]),day:jt("วันที่ไม่ถูกต้อง",[ro(/([1-9]|[12][0-9]|3[01])/)]),month:jt("เดือนไม่ถูกต้อง",[ro(/[1-9]|1[0-2]/)]),year:jt("ปีไม่ถูกต้อง",[ro(/^25[3-6][0-9]$/)]),[kf]:jt([Ci(),Pf(13)]),prefix:eo(jt()),email:eo(jt()),phone:eo(jt()),firstname:jt([Ci(),no(1)]),lastname:jt([Ci(),no(1)]),signature:jt("กรุณาลงชื่อ")}),Df=Qc({apiKey:jt(),authDomain:jt(),projectId:jt(),storageBucket:jt(),messagingSenderId:jt(),appId:jt()});/**
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
 */const Xc=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let i=e.charCodeAt(r);i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=i&63|128):(i&64512)===55296&&r+1<e.length&&(e.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(e.charCodeAt(++r)&1023),t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=i&63|128):(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=i&63|128)}return t},Of=function(e){const t=[];let n=0,r=0;for(;n<e.length;){const i=e[n++];if(i<128)t[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=e[n++];t[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=e[n++],o=e[n++],a=e[n++],l=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;t[r++]=String.fromCharCode(55296+(l>>10)),t[r++]=String.fromCharCode(56320+(l&1023))}else{const s=e[n++],o=e[n++];t[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return t.join("")},Jc={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<e.length;i+=3){const s=e[i],o=i+1<e.length,a=o?e[i+1]:0,l=i+2<e.length,c=l?e[i+2]:0,u=s>>2,h=(s&3)<<4|a>>4;let d=(a&15)<<2|c>>6,f=c&63;l||(f=64,o||(d=64)),r.push(n[u],n[h],n[d],n[f])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(Xc(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):Of(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<e.length;){const s=n[e.charAt(i++)],a=i<e.length?n[e.charAt(i)]:0;++i;const c=i<e.length?n[e.charAt(i)]:64;++i;const h=i<e.length?n[e.charAt(i)]:64;if(++i,s==null||a==null||c==null||h==null)throw new Nf;const d=s<<2|a>>4;if(r.push(d),c!==64){const f=a<<4&240|c>>2;if(r.push(f),h!==64){const y=c<<6&192|h;r.push(y)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};class Nf extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Lf=function(e){const t=Xc(e);return Jc.encodeByteArray(t,!0)},Xi=function(e){return Lf(e).replace(/\./g,"")},Yc=function(e){try{return Jc.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
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
 */function Vf(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Mf=()=>Vf().__FIREBASE_DEFAULTS__,xf=()=>{if(typeof process>"u"||typeof process.env>"u")return;const e={}.__FIREBASE_DEFAULTS__;if(e)return JSON.parse(e)},Ff=()=>{if(typeof document>"u")return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=e&&Yc(e[1]);return t&&JSON.parse(t)},oa=()=>{try{return Mf()||xf()||Ff()}catch(e){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);return}},Zc=e=>{var t,n;return(n=(t=oa())===null||t===void 0?void 0:t.emulatorHosts)===null||n===void 0?void 0:n[e]},Uf=e=>{const t=Zc(e);if(!t)return;const n=t.lastIndexOf(":");if(n<=0||n+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const r=parseInt(t.substring(n+1),10);return t[0]==="["?[t.substring(1,n-1),r]:[t.substring(0,n),r]},tu=()=>{var e;return(e=oa())===null||e===void 0?void 0:e.config},eu=e=>{var t;return(t=oa())===null||t===void 0?void 0:t[`_${e}`]};/**
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
 */class $f{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}wrapCallback(t){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(n):t(n,r))}}}/**
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
 */function Bf(e,t){if(e.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=t||"demo-project",i=e.iat||0,s=e.sub||e.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},e),a="";return[Xi(JSON.stringify(n)),Xi(JSON.stringify(o)),a].join(".")}/**
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
 */function ee(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function jf(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(ee())}function Hf(){const e=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof e=="object"&&e.id!==void 0}function Wf(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function qf(){const e=ee();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}function zf(){try{return typeof indexedDB=="object"}catch{return!1}}function Gf(){return new Promise((e,t)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;t(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){t(n)}})}/**
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
 */const Kf="FirebaseError";class sn extends Error{constructor(t,n,r){super(n),this.code=t,this.customData=r,this.name=Kf,Object.setPrototypeOf(this,sn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,oi.prototype.create)}}class oi{constructor(t,n,r){this.service=t,this.serviceName=n,this.errors=r}create(t,...n){const r=n[0]||{},i=`${this.service}/${t}`,s=this.errors[t],o=s?Qf(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new sn(i,a,r)}}function Qf(e,t){return e.replace(Xf,(n,r)=>{const i=t[r];return i!=null?String(i):`<${r}?>`})}const Xf=/\{\$([^}]+)}/g;function Jf(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function Ji(e,t){if(e===t)return!0;const n=Object.keys(e),r=Object.keys(t);for(const i of n){if(!r.includes(i))return!1;const s=e[i],o=t[i];if(gl(s)&&gl(o)){if(!Ji(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function gl(e){return e!==null&&typeof e=="object"}/**
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
 */function ai(e){const t=[];for(const[n,r]of Object.entries(e))Array.isArray(r)?r.forEach(i=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):t.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return t.length?"&"+t.join("&"):""}function Yf(e,t){const n=new Zf(e,t);return n.subscribe.bind(n)}class Zf{constructor(t,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{t(this)}).catch(r=>{this.error(r)})}next(t){this.forEachObserver(n=>{n.next(t)})}error(t){this.forEachObserver(n=>{n.error(t)}),this.close(t)}complete(){this.forEachObserver(t=>{t.complete()}),this.close()}subscribe(t,n,r){let i;if(t===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");tp(t,["next","error","complete"])?i=t:i={next:t,error:n,complete:r},i.next===void 0&&(i.next=io),i.error===void 0&&(i.error=io),i.complete===void 0&&(i.complete=io);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(t){this.observers===void 0||this.observers[t]===void 0||(delete this.observers[t],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(t){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,t)}sendOne(t,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[t]!==void 0)try{n(this.observers[t])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(t){this.finalized||(this.finalized=!0,t!==void 0&&(this.finalError=t),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function tp(e,t){if(typeof e!="object"||e===null)return!1;for(const n of t)if(n in e&&typeof e[n]=="function")return!0;return!1}function io(){}/**
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
 */function ne(e){return e&&e._delegate?e._delegate:e}class Un{constructor(t,n,r){this.name=t,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
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
 */const Cn="[DEFAULT]";/**
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
 */class ep{constructor(t,n){this.name=t,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const n=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(n)){const r=new $f;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(t){var n;const r=this.normalizeInstanceIdentifier(t?.identifier),i=(n=t?.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(rp(t))try{this.getOrInitializeService({instanceIdentifier:Cn})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(t=Cn){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...t.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=Cn){return this.instances.has(t)}getOptions(t=Cn){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:n={}}=t,r=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(t,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(t),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&t(o,i),()=>{s.delete(t)}}invokeOnInitCallbacks(t,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(t,n)}catch{}}getOrInitializeService({instanceIdentifier:t,options:n={}}){let r=this.instances.get(t);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:np(t),options:n}),this.instances.set(t,r),this.instancesOptions.set(t,n),this.invokeOnInitCallbacks(r,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,r)}catch{}return r||null}normalizeInstanceIdentifier(t=Cn){return this.component?this.component.multipleInstances?t:Cn:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function np(e){return e===Cn?void 0:e}function rp(e){return e.instantiationMode==="EAGER"}/**
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
 */class ip{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const n=this.getProvider(t.name);if(n.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);n.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const n=new ep(t,this);return this.providers.set(t,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var tt;(function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"})(tt||(tt={}));const sp={debug:tt.DEBUG,verbose:tt.VERBOSE,info:tt.INFO,warn:tt.WARN,error:tt.ERROR,silent:tt.SILENT},op=tt.INFO,ap={[tt.DEBUG]:"log",[tt.VERBOSE]:"log",[tt.INFO]:"info",[tt.WARN]:"warn",[tt.ERROR]:"error"},lp=(e,t,...n)=>{if(t<e.logLevel)return;const r=new Date().toISOString(),i=ap[t];if(i)console[i](`[${r}]  ${e.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class aa{constructor(t){this.name=t,this._logLevel=op,this._logHandler=lp,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in tt))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?sp[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,tt.DEBUG,...t),this._logHandler(this,tt.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,tt.VERBOSE,...t),this._logHandler(this,tt.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,tt.INFO,...t),this._logHandler(this,tt.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,tt.WARN,...t),this._logHandler(this,tt.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,tt.ERROR,...t),this._logHandler(this,tt.ERROR,...t)}}const cp=(e,t)=>t.some(n=>e instanceof n);let _l,yl;function up(){return _l||(_l=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function hp(){return yl||(yl=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const nu=new WeakMap,Ro=new WeakMap,ru=new WeakMap,so=new WeakMap,la=new WeakMap;function dp(e){const t=new Promise((n,r)=>{const i=()=>{e.removeEventListener("success",s),e.removeEventListener("error",o)},s=()=>{n(mn(e.result)),i()},o=()=>{r(e.error),i()};e.addEventListener("success",s),e.addEventListener("error",o)});return t.then(n=>{n instanceof IDBCursor&&nu.set(n,e)}).catch(()=>{}),la.set(t,e),t}function fp(e){if(Ro.has(e))return;const t=new Promise((n,r)=>{const i=()=>{e.removeEventListener("complete",s),e.removeEventListener("error",o),e.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(e.error||new DOMException("AbortError","AbortError")),i()};e.addEventListener("complete",s),e.addEventListener("error",o),e.addEventListener("abort",o)});Ro.set(e,t)}let Co={get(e,t,n){if(e instanceof IDBTransaction){if(t==="done")return Ro.get(e);if(t==="objectStoreNames")return e.objectStoreNames||ru.get(e);if(t==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return mn(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in e}};function pp(e){Co=e(Co)}function mp(e){return e===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...n){const r=e.call(oo(this),t,...n);return ru.set(r,t.sort?t.sort():[t]),mn(r)}:hp().includes(e)?function(...t){return e.apply(oo(this),t),mn(nu.get(this))}:function(...t){return mn(e.apply(oo(this),t))}}function gp(e){return typeof e=="function"?mp(e):(e instanceof IDBTransaction&&fp(e),cp(e,up())?new Proxy(e,Co):e)}function mn(e){if(e instanceof IDBRequest)return dp(e);if(so.has(e))return so.get(e);const t=gp(e);return t!==e&&(so.set(e,t),la.set(t,e)),t}const oo=e=>la.get(e);function _p(e,t,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(e,t),a=mn(o);return r&&o.addEventListener("upgradeneeded",l=>{r(mn(o.result),l.oldVersion,l.newVersion,mn(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{s&&l.addEventListener("close",()=>s()),i&&l.addEventListener("versionchange",c=>i(c.oldVersion,c.newVersion,c))}).catch(()=>{}),a}const yp=["get","getKey","getAll","getAllKeys","count"],vp=["put","add","delete","clear"],ao=new Map;function vl(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&typeof t=="string"))return;if(ao.get(t))return ao.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,i=vp.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||yp.includes(n)))return;const s=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let c=l.store;return r&&(c=c.index(a.shift())),(await Promise.all([c[n](...a),i&&l.done]))[0]};return ao.set(t,s),s}pp(e=>({...e,get:(t,n,r)=>vl(t,n)||e.get(t,n,r),has:(t,n)=>!!vl(t,n)||e.has(t,n)}));/**
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
 */class Ep{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(wp(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function wp(e){const t=e.getComponent();return t?.type==="VERSION"}const ko="@firebase/app",El="0.9.16";/**
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
 */const $n=new aa("@firebase/app"),Ip="@firebase/app-compat",Tp="@firebase/analytics-compat",Ap="@firebase/analytics",bp="@firebase/app-check-compat",Sp="@firebase/app-check",Pp="@firebase/auth",Rp="@firebase/auth-compat",Cp="@firebase/database",kp="@firebase/database-compat",Dp="@firebase/functions",Op="@firebase/functions-compat",Np="@firebase/installations",Lp="@firebase/installations-compat",Vp="@firebase/messaging",Mp="@firebase/messaging-compat",xp="@firebase/performance",Fp="@firebase/performance-compat",Up="@firebase/remote-config",$p="@firebase/remote-config-compat",Bp="@firebase/storage",jp="@firebase/storage-compat",Hp="@firebase/firestore",Wp="@firebase/firestore-compat",qp="firebase",zp="10.2.0";/**
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
 */const Do="[DEFAULT]",Gp={[ko]:"fire-core",[Ip]:"fire-core-compat",[Ap]:"fire-analytics",[Tp]:"fire-analytics-compat",[Sp]:"fire-app-check",[bp]:"fire-app-check-compat",[Pp]:"fire-auth",[Rp]:"fire-auth-compat",[Cp]:"fire-rtdb",[kp]:"fire-rtdb-compat",[Dp]:"fire-fn",[Op]:"fire-fn-compat",[Np]:"fire-iid",[Lp]:"fire-iid-compat",[Vp]:"fire-fcm",[Mp]:"fire-fcm-compat",[xp]:"fire-perf",[Fp]:"fire-perf-compat",[Up]:"fire-rc",[$p]:"fire-rc-compat",[Bp]:"fire-gcs",[jp]:"fire-gcs-compat",[Hp]:"fire-fst",[Wp]:"fire-fst-compat","fire-js":"fire-js",[qp]:"fire-js-all"};/**
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
 */const Yi=new Map,Oo=new Map;function Kp(e,t){try{e.container.addComponent(t)}catch(n){$n.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function ar(e){const t=e.name;if(Oo.has(t))return $n.debug(`There were multiple attempts to register component ${t}.`),!1;Oo.set(t,e);for(const n of Yi.values())Kp(n,e);return!0}function ca(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}/**
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
 */const Qp={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},gn=new oi("app","Firebase",Qp);/**
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
 */class Xp{constructor(t,n,r){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Un("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw gn.create("app-deleted",{appName:this._name})}}/**
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
 */const mr=zp;function iu(e,t={}){let n=e;typeof t!="object"&&(t={name:t});const r=Object.assign({name:Do,automaticDataCollectionEnabled:!1},t),i=r.name;if(typeof i!="string"||!i)throw gn.create("bad-app-name",{appName:String(i)});if(n||(n=tu()),!n)throw gn.create("no-options");const s=Yi.get(i);if(s){if(Ji(n,s.options)&&Ji(r,s.config))return s;throw gn.create("duplicate-app",{appName:i})}const o=new ip(i);for(const l of Oo.values())o.addComponent(l);const a=new Xp(n,r,o);return Yi.set(i,a),a}function su(e=Do){const t=Yi.get(e);if(!t&&e===Do&&tu())return iu();if(!t)throw gn.create("no-app",{appName:e});return t}function _n(e,t,n){var r;let i=(r=Gp[e])!==null&&r!==void 0?r:e;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=t.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${t}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${t}" contains illegal characters (whitespace or "/")`),$n.warn(a.join(" "));return}ar(new Un(`${i}-version`,()=>({library:i,version:t}),"VERSION"))}/**
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
 */const Jp="firebase-heartbeat-database",Yp=1,$r="firebase-heartbeat-store";let lo=null;function ou(){return lo||(lo=_p(Jp,Yp,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore($r)}}}).catch(e=>{throw gn.create("idb-open",{originalErrorMessage:e.message})})),lo}async function Zp(e){try{return await(await ou()).transaction($r).objectStore($r).get(au(e))}catch(t){if(t instanceof sn)$n.warn(t.message);else{const n=gn.create("idb-get",{originalErrorMessage:t?.message});$n.warn(n.message)}}}async function wl(e,t){try{const r=(await ou()).transaction($r,"readwrite");await r.objectStore($r).put(t,au(e)),await r.done}catch(n){if(n instanceof sn)$n.warn(n.message);else{const r=gn.create("idb-set",{originalErrorMessage:n?.message});$n.warn(r.message)}}}function au(e){return`${e.name}!${e.options.appId}`}/**
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
 */const tm=1024,em=30*24*60*60*1e3;class nm{constructor(t){this.container=t,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new im(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=Il();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(i=>i.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const s=new Date(i.date).valueOf();return Date.now()-s<=em}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const t=Il(),{heartbeatsToSend:n,unsentEntries:r}=rm(this._heartbeatsCache.heartbeats),i=Xi(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=t,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function Il(){return new Date().toISOString().substring(0,10)}function rm(e,t=tm){const n=[];let r=e.slice();for(const i of e){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),Tl(n)>t){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Tl(n)>t){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class im{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return zf()?Gf().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await Zp(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(t){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return wl(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return wl(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...t.heartbeats]})}else return}}function Tl(e){return Xi(JSON.stringify({version:2,heartbeats:e})).length}/**
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
 */function sm(e){ar(new Un("platform-logger",t=>new Ep(t),"PRIVATE")),ar(new Un("heartbeat",t=>new nm(t),"PRIVATE")),_n(ko,El,e),_n(ko,El,"esm2017"),_n("fire-js","")}sm("");var om="firebase",am="10.2.0";/**
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
 */_n(om,am,"app");function ua(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]]);return n}function lu(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const lm=lu,cu=new oi("auth","Firebase",lu());/**
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
 */const Zi=new aa("@firebase/auth");function cm(e,...t){Zi.logLevel<=tt.WARN&&Zi.warn(`Auth (${mr}): ${e}`,...t)}function Bi(e,...t){Zi.logLevel<=tt.ERROR&&Zi.error(`Auth (${mr}): ${e}`,...t)}/**
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
 */function tn(e,...t){throw ha(e,...t)}function Be(e,...t){return ha(e,...t)}function um(e,t,n){const r=Object.assign(Object.assign({},lm()),{[t]:n});return new oi("auth","Firebase",r).create(t,{appName:e.name})}function ha(e,...t){if(typeof e!="string"){const n=t[0],r=[...t.slice(1)];return r[0]&&(r[0].appName=e.name),e._errorFactory.create(n,...r)}return cu.create(e,...t)}function $(e,t,...n){if(!e)throw ha(t,...n)}function Qe(e){const t="INTERNAL ASSERTION FAILED: "+e;throw Bi(t),new Error(t)}function en(e,t){e||Qe(t)}/**
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
 */function No(){var e;return typeof self<"u"&&((e=self.location)===null||e===void 0?void 0:e.href)||""}function hm(){return Al()==="http:"||Al()==="https:"}function Al(){var e;return typeof self<"u"&&((e=self.location)===null||e===void 0?void 0:e.protocol)||null}/**
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
 */function dm(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(hm()||Hf()||"connection"in navigator)?navigator.onLine:!0}function fm(){if(typeof navigator>"u")return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}/**
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
 */class li{constructor(t,n){this.shortDelay=t,this.longDelay=n,en(n>t,"Short delay should be less than long delay!"),this.isMobile=jf()||Wf()}get(){return dm()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function da(e,t){en(e.emulator,"Emulator should always be set here");const{url:n}=e.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}/**
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
 */class uu{static initialize(t,n,r){this.fetchImpl=t,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;Qe("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;Qe("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;Qe("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const pm={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const mm=new li(3e4,6e4);function fa(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}async function ci(e,t,n,r,i={}){return hu(e,i,async()=>{let s={},o={};r&&(t==="GET"?o=r:s={body:JSON.stringify(r)});const a=ai(Object.assign({key:e.config.apiKey},o)).slice(1),l=await e._getAdditionalHeaders();return l["Content-Type"]="application/json",e.languageCode&&(l["X-Firebase-Locale"]=e.languageCode),uu.fetch()(fu(e,e.config.apiHost,n,a),Object.assign({method:t,headers:l,referrerPolicy:"no-referrer"},s))})}async function hu(e,t,n){e._canInitEmulator=!1;const r=Object.assign(Object.assign({},pm),t);try{const i=new gm(e),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw ki(e,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[l,c]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw ki(e,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw ki(e,"email-already-in-use",o);if(l==="USER_DISABLED")throw ki(e,"user-disabled",o);const u=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw um(e,u,c);tn(e,u)}}catch(i){if(i instanceof sn)throw i;tn(e,"network-request-failed",{message:String(i)})}}async function du(e,t,n,r,i={}){const s=await ci(e,t,n,r,i);return"mfaPendingCredential"in s&&tn(e,"multi-factor-auth-required",{_serverResponse:s}),s}function fu(e,t,n,r){const i=`${t}${n}?${r}`;return e.config.emulator?da(e.config,i):`${e.config.apiScheme}://${i}`}class gm{constructor(t){this.auth=t,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Be(this.auth,"network-request-failed")),mm.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function ki(e,t,n){const r={appName:e.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=Be(e,t,r);return i.customData._tokenResponse=n,i}/**
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
 */async function _m(e,t){return ci(e,"POST","/v1/accounts:delete",t)}async function ym(e,t){return ci(e,"POST","/v1/accounts:lookup",t)}/**
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
 */function Or(e){if(e)try{const t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch{}}async function vm(e,t=!1){const n=ne(e),r=await n.getIdToken(t),i=pa(r);$(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s?.sign_in_provider;return{claims:i,token:r,authTime:Or(co(i.auth_time)),issuedAtTime:Or(co(i.iat)),expirationTime:Or(co(i.exp)),signInProvider:o||null,signInSecondFactor:s?.sign_in_second_factor||null}}function co(e){return Number(e)*1e3}function pa(e){const[t,n,r]=e.split(".");if(t===void 0||n===void 0||r===void 0)return Bi("JWT malformed, contained fewer than 3 sections"),null;try{const i=Yc(n);return i?JSON.parse(i):(Bi("Failed to decode base64 JWT payload"),null)}catch(i){return Bi("Caught error parsing JWT payload as JSON",i?.toString()),null}}function Em(e){const t=pa(e);return $(t,"internal-error"),$(typeof t.exp<"u","internal-error"),$(typeof t.iat<"u","internal-error"),Number(t.exp)-Number(t.iat)}/**
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
 */async function Br(e,t,n=!1){if(n)return t;try{return await t}catch(r){throw r instanceof sn&&wm(r)&&e.auth.currentUser===e&&await e.auth.signOut(),r}}function wm({code:e}){return e==="auth/user-disabled"||e==="auth/user-token-expired"}/**
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
 */class Im{constructor(t){this.user=t,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(t){var n;if(t){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(t=!1){if(!this.isRunning)return;const n=this.getInterval(t);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(t){t?.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class pu{constructor(t,n){this.createdAt=t,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Or(this.lastLoginAt),this.creationTime=Or(this.createdAt)}_copy(t){this.createdAt=t.createdAt,this.lastLoginAt=t.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function ts(e){var t;const n=e.auth,r=await e.getIdToken(),i=await Br(e,ym(n,{idToken:r}));$(i?.users.length,n,"internal-error");const s=i.users[0];e._notifyReloadListener(s);const o=!((t=s.providerUserInfo)===null||t===void 0)&&t.length?bm(s.providerUserInfo):[],a=Am(e.providerData,o),l=e.isAnonymous,c=!(e.email&&s.passwordHash)&&!a?.length,u=l?c:!1,h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new pu(s.createdAt,s.lastLoginAt),isAnonymous:u};Object.assign(e,h)}async function Tm(e){const t=ne(e);await ts(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}function Am(e,t){return[...e.filter(r=>!t.some(i=>i.providerId===r.providerId)),...t]}function bm(e){return e.map(t=>{var{providerId:n}=t,r=ua(t,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function Sm(e,t){const n=await hu(e,{},async()=>{const r=ai({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:i,apiKey:s}=e.config,o=fu(e,i,"/v1/token",`key=${s}`),a=await e._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",uu.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
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
 */class jr{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(t){$(t.idToken,"internal-error"),$(typeof t.idToken<"u","internal-error"),$(typeof t.refreshToken<"u","internal-error");const n="expiresIn"in t&&typeof t.expiresIn<"u"?Number(t.expiresIn):Em(t.idToken);this.updateTokensAndExpiration(t.idToken,t.refreshToken,n)}async getToken(t,n=!1){return $(!this.accessToken||this.refreshToken,t,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(t,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(t,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await Sm(t,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(t,n,r){this.refreshToken=n||null,this.accessToken=t||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(t,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new jr;return r&&($(typeof r=="string","internal-error",{appName:t}),o.refreshToken=r),i&&($(typeof i=="string","internal-error",{appName:t}),o.accessToken=i),s&&($(typeof s=="number","internal-error",{appName:t}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(t){this.accessToken=t.accessToken,this.refreshToken=t.refreshToken,this.expirationTime=t.expirationTime}_clone(){return Object.assign(new jr,this.toJSON())}_performRefresh(){return Qe("not implemented")}}/**
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
 */function ln(e,t){$(typeof e=="string"||typeof e>"u","internal-error",{appName:t})}class Ln{constructor(t){var{uid:n,auth:r,stsTokenManager:i}=t,s=ua(t,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Im(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new pu(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(t){const n=await Br(this,this.stsTokenManager.getToken(this.auth,t));return $(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(t){return vm(this,t)}reload(){return Tm(this)}_assign(t){this!==t&&($(this.uid===t.uid,this.auth,"internal-error"),this.displayName=t.displayName,this.photoURL=t.photoURL,this.email=t.email,this.emailVerified=t.emailVerified,this.phoneNumber=t.phoneNumber,this.isAnonymous=t.isAnonymous,this.tenantId=t.tenantId,this.providerData=t.providerData.map(n=>Object.assign({},n)),this.metadata._copy(t.metadata),this.stsTokenManager._assign(t.stsTokenManager))}_clone(t){const n=new Ln(Object.assign(Object.assign({},this),{auth:t,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(t){$(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=t,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(t){this.reloadListener?this.reloadListener(t):this.reloadUserInfo=t}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(t,n=!1){let r=!1;t.idToken&&t.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(t),r=!0),n&&await ts(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const t=await this.getIdToken();return await Br(this,_m(this.auth,{idToken:t})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(t=>Object.assign({},t)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(t,n){var r,i,s,o,a,l,c,u;const h=(r=n.displayName)!==null&&r!==void 0?r:void 0,d=(i=n.email)!==null&&i!==void 0?i:void 0,f=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,y=(o=n.photoURL)!==null&&o!==void 0?o:void 0,w=(a=n.tenantId)!==null&&a!==void 0?a:void 0,R=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,T=(c=n.createdAt)!==null&&c!==void 0?c:void 0,q=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:z,emailVerified:M,isAnonymous:ct,providerData:Z,stsTokenManager:ft}=n;$(z&&ft,t,"internal-error");const ot=jr.fromJSON(this.name,ft);$(typeof z=="string",t,"internal-error"),ln(h,t.name),ln(d,t.name),$(typeof M=="boolean",t,"internal-error"),$(typeof ct=="boolean",t,"internal-error"),ln(f,t.name),ln(y,t.name),ln(w,t.name),ln(R,t.name),ln(T,t.name),ln(q,t.name);const lt=new Ln({uid:z,auth:t,email:d,emailVerified:M,displayName:h,isAnonymous:ct,photoURL:y,phoneNumber:f,tenantId:w,stsTokenManager:ot,createdAt:T,lastLoginAt:q});return Z&&Array.isArray(Z)&&(lt.providerData=Z.map(pt=>Object.assign({},pt))),R&&(lt._redirectEventId=R),lt}static async _fromIdTokenResponse(t,n,r=!1){const i=new jr;i.updateFromServerResponse(n);const s=new Ln({uid:n.localId,auth:t,stsTokenManager:i,isAnonymous:r});return await ts(s),s}}/**
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
 */const bl=new Map;function Xe(e){en(e instanceof Function,"Expected a class definition");let t=bl.get(e);return t?(en(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,bl.set(e,t),t)}/**
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
 */class mu{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(t,n){this.storage[t]=n}async _get(t){const n=this.storage[t];return n===void 0?null:n}async _remove(t){delete this.storage[t]}_addListener(t,n){}_removeListener(t,n){}}mu.type="NONE";const Sl=mu;/**
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
 */function ji(e,t,n){return`firebase:${e}:${t}:${n}`}class er{constructor(t,n,r){this.persistence=t,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=ji(this.userKey,i.apiKey,s),this.fullPersistenceKey=ji("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(t){return this.persistence._set(this.fullUserKey,t.toJSON())}async getCurrentUser(){const t=await this.persistence._get(this.fullUserKey);return t?Ln._fromJSON(this.auth,t):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(t){if(this.persistence===t)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=t,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(t,n,r="authUser"){if(!n.length)return new er(Xe(Sl),t,r);const i=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let s=i[0]||Xe(Sl);const o=ji(r,t.config.apiKey,t.name);let a=null;for(const c of n)try{const u=await c._get(o);if(u){const h=Ln._fromJSON(t,u);c!==s&&(a=h),s=c;break}}catch{}const l=i.filter(c=>c._shouldAllowMigration);return!s._shouldAllowMigration||!l.length?new er(s,t,r):(s=l[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async c=>{if(c!==s)try{await c._remove(o)}catch{}})),new er(s,t,r))}}/**
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
 */function Pl(e){const t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(yu(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(gu(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(Eu(t))return"Blackberry";if(wu(t))return"Webos";if(ma(t))return"Safari";if((t.includes("chrome/")||_u(t))&&!t.includes("edge/"))return"Chrome";if(vu(t))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=e.match(n);if(r?.length===2)return r[1]}return"Other"}function gu(e=ee()){return/firefox\//i.test(e)}function ma(e=ee()){const t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function _u(e=ee()){return/crios\//i.test(e)}function yu(e=ee()){return/iemobile/i.test(e)}function vu(e=ee()){return/android/i.test(e)}function Eu(e=ee()){return/blackberry/i.test(e)}function wu(e=ee()){return/webos/i.test(e)}function Is(e=ee()){return/iphone|ipad|ipod/i.test(e)||/macintosh/i.test(e)&&/mobile/i.test(e)}function Pm(e=ee()){var t;return Is(e)&&!!(!((t=window.navigator)===null||t===void 0)&&t.standalone)}function Rm(){return qf()&&document.documentMode===10}function Iu(e=ee()){return Is(e)||vu(e)||wu(e)||Eu(e)||/windows phone/i.test(e)||yu(e)}function Cm(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function Tu(e,t=[]){let n;switch(e){case"Browser":n=Pl(ee());break;case"Worker":n=`${Pl(ee())}-${e}`;break;default:n=e}const r=t.length?t.join(","):"FirebaseCore-web";return`${n}/JsCore/${mr}/${r}`}/**
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
 */class km{constructor(t){this.auth=t,this.queue=[]}pushCallback(t,n){const r=s=>new Promise((o,a)=>{try{const l=t(s);o(l)}catch(l){a(l)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(t){if(this.auth.currentUser===t)return;const n=[];try{for(const r of this.queue)await r(t),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r?.message})}}}/**
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
 */async function Dm(e,t={}){return ci(e,"GET","/v2/passwordPolicy",fa(e,t))}/**
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
 */const Om=6;class Nm{constructor(t){var n,r,i,s;const o=t.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:Om,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=t.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=t.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=t.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=t.schemaVersion}validatePassword(t){var n,r,i,s,o,a;const l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(t,l),this.validatePasswordCharacterOptions(t,l),l.isValid&&(l.isValid=(n=l.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),l.isValid&&(l.isValid=(r=l.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),l.isValid&&(l.isValid=(i=l.containsLowercaseLetter)!==null&&i!==void 0?i:!0),l.isValid&&(l.isValid=(s=l.containsUppercaseLetter)!==null&&s!==void 0?s:!0),l.isValid&&(l.isValid=(o=l.containsNumericCharacter)!==null&&o!==void 0?o:!0),l.isValid&&(l.isValid=(a=l.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),l}validatePasswordLengthOptions(t,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=t.length>=r),i&&(n.meetsMaxPasswordLength=t.length<=i)}validatePasswordCharacterOptions(t,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<t.length;i++)r=t.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(t,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(t.containsLowercaseLetter||(t.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(t.containsUppercaseLetter||(t.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(t.containsNumericCharacter||(t.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(t.containsNonAlphanumericCharacter||(t.containsNonAlphanumericCharacter=s))}}/**
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
 */class Lm{constructor(t,n,r,i){this.app=t,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Rl(this),this.idTokenSubscription=new Rl(this),this.beforeStateQueue=new km(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=cu,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=t.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(t,n){return n&&(this._popupRedirectResolver=Xe(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await er.create(this,t),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const t=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!t)){if(this.currentUser&&t&&this.currentUser.uid===t.uid){this._currentUser._assign(t),await this.currentUser.getIdToken();return}await this._updateCurrentUser(t,!0)}}async initializeCurrentUser(t){var n;const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(t&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i?._redirectEventId,l=await this.tryRedirectSignIn(t);(!o||o===a)&&l?.user&&(i=l.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return $(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(t){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,t,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(t){try{await ts(t)}catch(n){if(n?.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(t)}useDeviceLanguage(){this.languageCode=fm()}async _delete(){this._deleted=!0}async updateCurrentUser(t){const n=t?ne(t):null;return n&&$(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(t,n=!1){if(!this._deleted)return t&&$(this.tenantId===t.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(t),this.queue(async()=>{await this.directlySetCurrentUser(t),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(t){return this.queue(async()=>{await this.assertedPersistence.setPersistence(Xe(t))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(t){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(t)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const t=await Dm(this),n=new Nm(t);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(t){this._errorFactory=new oi("auth","Firebase",t())}onAuthStateChanged(t,n,r){return this.registerStateListener(this.authStateSubscription,t,n,r)}beforeAuthStateChanged(t,n){return this.beforeStateQueue.pushCallback(t,n)}onIdTokenChanged(t,n,r){return this.registerStateListener(this.idTokenSubscription,t,n,r)}authStateReady(){return new Promise((t,n)=>{if(this.currentUser)t();else{const r=this.onAuthStateChanged(()=>{r(),t()},n)}})}toJSON(){var t;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(t=this._currentUser)===null||t===void 0?void 0:t.toJSON()}}async _setRedirectUser(t,n){const r=await this.getOrInitRedirectPersistenceManager(n);return t===null?r.removeCurrentUser():r.setCurrentUser(t)}async getOrInitRedirectPersistenceManager(t){if(!this.redirectPersistenceManager){const n=t&&Xe(t)||this._popupRedirectResolver;$(n,this,"argument-error"),this.redirectPersistenceManager=await er.create(this,[Xe(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(t){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===t?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===t?this.redirectUser:null}async _persistUserIfCurrent(t){if(t===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(t))}_notifyListenersIfCurrent(t){t===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(t=this.currentUser)===null||t===void 0?void 0:t.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(t,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if($(a,this,"internal-error"),a.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const l=t.addObserver(n,r,i);return()=>{o=!0,l()}}else{const l=t.addObserver(n);return()=>{o=!0,l()}}}async directlySetCurrentUser(t){this.currentUser&&this.currentUser!==t&&this._currentUser._stopProactiveRefresh(),t&&this.isProactiveRefreshEnabled&&t._startProactiveRefresh(),this.currentUser=t,t?await this.assertedPersistence.setCurrentUser(t):await this.assertedPersistence.removeCurrentUser()}queue(t){return this.operations=this.operations.then(t,t),this.operations}get assertedPersistence(){return $(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(t){!t||this.frameworks.includes(t)||(this.frameworks.push(t),this.frameworks.sort(),this.clientVersion=Tu(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var t;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((t=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||t===void 0?void 0:t.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var t;const n=await((t=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||t===void 0?void 0:t.getToken());return n?.error&&cm(`Error while retrieving App Check token: ${n.error}`),n?.token}}function Ts(e){return ne(e)}class Rl{constructor(t){this.auth=t,this.observer=null,this.addObserver=Yf(n=>this.observer=n)}get next(){return $(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */function Vm(){var e,t;return(t=(e=document.getElementsByTagName("head"))===null||e===void 0?void 0:e[0])!==null&&t!==void 0?t:document}function Mm(e){return new Promise((t,n)=>{const r=document.createElement("script");r.setAttribute("src",e),r.onload=t,r.onerror=i=>{const s=Be("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",Vm().appendChild(r)})}function xm(e){return`__${e}${Math.floor(Math.random()*1e6)}`}/**
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
 */function Fm(e,t){const n=ca(e,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(Ji(s,t??{}))return i;tn(i,"already-initialized")}return n.initialize({options:t})}function Um(e,t){const n=t?.persistence||[],r=(Array.isArray(n)?n:[n]).map(Xe);t?.errorMap&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(r,t?.popupRedirectResolver)}function $m(e,t,n){const r=Ts(e);$(r._canInitEmulator,r,"emulator-config-failed"),$(/^https?:\/\//.test(t),r,"invalid-emulator-scheme");const i=!!n?.disableWarnings,s=Au(t),{host:o,port:a}=Bm(t),l=a===null?"":`:${a}`;r.config.emulator={url:`${s}//${o}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||jm()}function Au(e){const t=e.indexOf(":");return t<0?"":e.substr(0,t+1)}function Bm(e){const t=Au(e),n=/(\/\/)?([^?#/]+)/.exec(e.substr(t.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:Cl(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:Cl(o)}}}function Cl(e){if(!e)return null;const t=Number(e);return isNaN(t)?null:t}function jm(){function e(){const t=document.createElement("p"),n=t.style;t.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",t.classList.add("firebase-emulator-warning"),document.body.appendChild(t)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",e):e())}/**
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
 */class bu{constructor(t,n){this.providerId=t,this.signInMethod=n}toJSON(){return Qe("not implemented")}_getIdTokenResponse(t){return Qe("not implemented")}_linkToIdToken(t,n){return Qe("not implemented")}_getReauthenticationResolver(t){return Qe("not implemented")}}/**
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
 */async function nr(e,t){return du(e,"POST","/v1/accounts:signInWithIdp",fa(e,t))}/**
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
 */const Hm="http://localhost";class Bn extends bu{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(t){const n=new Bn(t.providerId,t.signInMethod);return t.idToken||t.accessToken?(t.idToken&&(n.idToken=t.idToken),t.accessToken&&(n.accessToken=t.accessToken),t.nonce&&!t.pendingToken&&(n.nonce=t.nonce),t.pendingToken&&(n.pendingToken=t.pendingToken)):t.oauthToken&&t.oauthTokenSecret?(n.accessToken=t.oauthToken,n.secret=t.oauthTokenSecret):tn("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(t){const n=typeof t=="string"?JSON.parse(t):t,{providerId:r,signInMethod:i}=n,s=ua(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new Bn(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(t){const n=this.buildRequest();return nr(t,n)}_linkToIdToken(t,n){const r=this.buildRequest();return r.idToken=n,nr(t,r)}_getReauthenticationResolver(t){const n=this.buildRequest();return n.autoCreate=!1,nr(t,n)}buildRequest(){const t={requestUri:Hm,returnSecureToken:!0};if(this.pendingToken)t.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),t.postBody=ai(n)}return t}}/**
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
 */class Su{constructor(t){this.providerId=t,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(t){this.defaultLanguageCode=t}setCustomParameters(t){return this.customParameters=t,this}getCustomParameters(){return this.customParameters}}/**
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
 */class ui extends Su{constructor(){super(...arguments),this.scopes=[]}addScope(t){return this.scopes.includes(t)||this.scopes.push(t),this}getScopes(){return[...this.scopes]}}/**
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
 */class cn extends ui{constructor(){super("facebook.com")}static credential(t){return Bn._fromParams({providerId:cn.PROVIDER_ID,signInMethod:cn.FACEBOOK_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return cn.credentialFromTaggedObject(t)}static credentialFromError(t){return cn.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return cn.credential(t.oauthAccessToken)}catch{return null}}}cn.FACEBOOK_SIGN_IN_METHOD="facebook.com";cn.PROVIDER_ID="facebook.com";/**
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
 */class un extends ui{constructor(){super("google.com"),this.addScope("profile")}static credential(t,n){return Bn._fromParams({providerId:un.PROVIDER_ID,signInMethod:un.GOOGLE_SIGN_IN_METHOD,idToken:t,accessToken:n})}static credentialFromResult(t){return un.credentialFromTaggedObject(t)}static credentialFromError(t){return un.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthIdToken:n,oauthAccessToken:r}=t;if(!n&&!r)return null;try{return un.credential(n,r)}catch{return null}}}un.GOOGLE_SIGN_IN_METHOD="google.com";un.PROVIDER_ID="google.com";/**
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
 */class hn extends ui{constructor(){super("github.com")}static credential(t){return Bn._fromParams({providerId:hn.PROVIDER_ID,signInMethod:hn.GITHUB_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return hn.credentialFromTaggedObject(t)}static credentialFromError(t){return hn.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return hn.credential(t.oauthAccessToken)}catch{return null}}}hn.GITHUB_SIGN_IN_METHOD="github.com";hn.PROVIDER_ID="github.com";/**
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
 */class dn extends ui{constructor(){super("twitter.com")}static credential(t,n){return Bn._fromParams({providerId:dn.PROVIDER_ID,signInMethod:dn.TWITTER_SIGN_IN_METHOD,oauthToken:t,oauthTokenSecret:n})}static credentialFromResult(t){return dn.credentialFromTaggedObject(t)}static credentialFromError(t){return dn.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=t;if(!n||!r)return null;try{return dn.credential(n,r)}catch{return null}}}dn.TWITTER_SIGN_IN_METHOD="twitter.com";dn.PROVIDER_ID="twitter.com";/**
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
 */async function Wm(e,t){return du(e,"POST","/v1/accounts:signUp",fa(e,t))}/**
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
 */class vn{constructor(t){this.user=t.user,this.providerId=t.providerId,this._tokenResponse=t._tokenResponse,this.operationType=t.operationType}static async _fromIdTokenResponse(t,n,r,i=!1){const s=await Ln._fromIdTokenResponse(t,r,i),o=kl(r);return new vn({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(t,n,r){await t._updateTokensIfNecessary(r,!0);const i=kl(r);return new vn({user:t,providerId:i,_tokenResponse:r,operationType:n})}}function kl(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}/**
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
 */async function qm(e){var t;const n=Ts(e);if(await n._initializationPromise,!((t=n.currentUser)===null||t===void 0)&&t.isAnonymous)return new vn({user:n.currentUser,providerId:null,operationType:"signIn"});const r=await Wm(n,{returnSecureToken:!0}),i=await vn._fromIdTokenResponse(n,"signIn",r,!0);return await n._updateCurrentUser(i.user),i}/**
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
 */class es extends sn{constructor(t,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,es.prototype),this.customData={appName:t.name,tenantId:(s=t.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(t,n,r,i){return new es(t,n,r,i)}}function Pu(e,t,n,r){return(t==="reauthenticate"?n._getReauthenticationResolver(e):n._getIdTokenResponse(e)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?es._fromErrorAndOperation(e,s,t,r):s})}async function zm(e,t,n=!1){const r=await Br(e,t._linkToIdToken(e.auth,await e.getIdToken()),n);return vn._forOperation(e,"link",r)}/**
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
 */async function Gm(e,t,n=!1){const{auth:r}=e,i="reauthenticate";try{const s=await Br(e,Pu(r,i,t,e),n);$(s.idToken,r,"internal-error");const o=pa(s.idToken);$(o,r,"internal-error");const{sub:a}=o;return $(e.uid===a,r,"user-mismatch"),vn._forOperation(e,i,s)}catch(s){throw s?.code==="auth/user-not-found"&&tn(r,"user-mismatch"),s}}/**
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
 */async function Km(e,t,n=!1){const r="signIn",i=await Pu(e,r,t),s=await vn._fromIdTokenResponse(e,r,i);return n||await e._updateCurrentUser(s.user),s}function Qm(e,t,n,r){return ne(e).onIdTokenChanged(t,n,r)}function Xm(e,t,n){return ne(e).beforeAuthStateChanged(t,n)}function Jm(e,t,n,r){return ne(e).onAuthStateChanged(t,n,r)}const ns="__sak";/**
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
 */class Ru{constructor(t,n){this.storageRetriever=t,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(ns,"1"),this.storage.removeItem(ns),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(t,n){return this.storage.setItem(t,JSON.stringify(n)),Promise.resolve()}_get(t){const n=this.storage.getItem(t);return Promise.resolve(n?JSON.parse(n):null)}_remove(t){return this.storage.removeItem(t),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function Ym(){const e=ee();return ma(e)||Is(e)}const Zm=1e3,tg=10;class Cu extends Ru{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(t,n)=>this.onStorageEvent(t,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=Ym()&&Cm(),this.fallbackToPolling=Iu(),this._shouldAllowMigration=!0}forAllChangedKeys(t){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&t(n,i,r)}}onStorageEvent(t,n=!1){if(!t.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const r=t.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(t.newValue!==o)t.newValue!==null?this.storage.setItem(r,t.newValue):this.storage.removeItem(r);else if(this.localCache[r]===t.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);Rm()&&s!==t.newValue&&t.newValue!==t.oldValue?setTimeout(i,tg):i()}notifyListeners(t,n){this.localCache[t]=n;const r=this.listeners[t];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((t,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:t,oldValue:n,newValue:r}),!0)})},Zm)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(t,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[t]||(this.listeners[t]=new Set,this.localCache[t]=this.storage.getItem(t)),this.listeners[t].add(n)}_removeListener(t,n){this.listeners[t]&&(this.listeners[t].delete(n),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(t,n){await super._set(t,n),this.localCache[t]=JSON.stringify(n)}async _get(t){const n=await super._get(t);return this.localCache[t]=JSON.stringify(n),n}async _remove(t){await super._remove(t),delete this.localCache[t]}}Cu.type="LOCAL";const eg=Cu;/**
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
 */class ku extends Ru{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(t,n){}_removeListener(t,n){}}ku.type="SESSION";const Du=ku;/**
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
 */function ng(e){return Promise.all(e.map(async t=>{try{return{fulfilled:!0,value:await t}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class As{constructor(t){this.eventTarget=t,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(t){const n=this.receivers.find(i=>i.isListeningto(t));if(n)return n;const r=new As(t);return this.receivers.push(r),r}isListeningto(t){return this.eventTarget===t}async handleEvent(t){const n=t,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!o?.size)return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async c=>c(n.origin,s)),l=await ng(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:l})}_subscribe(t,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[t]||(this.handlersMap[t]=new Set),this.handlersMap[t].add(n)}_unsubscribe(t,n){this.handlersMap[t]&&n&&this.handlersMap[t].delete(n),(!n||this.handlersMap[t].size===0)&&delete this.handlersMap[t],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}As.receivers=[];/**
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
 */function ga(e="",t=10){let n="";for(let r=0;r<t;r++)n+=Math.floor(Math.random()*10);return e+n}/**
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
 */class rg{constructor(t){this.target=t,this.handlers=new Set}removeMessageHandler(t){t.messageChannel&&(t.messageChannel.port1.removeEventListener("message",t.onMessage),t.messageChannel.port1.close()),this.handlers.delete(t)}async _send(t,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,l)=>{const c=ga("",20);i.port1.start();const u=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(h){const d=h;if(d.data.eventId===c)switch(d.data.status){case"ack":clearTimeout(u),s=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(d.data.response);break;default:clearTimeout(u),clearTimeout(s),l(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:t,eventId:c,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function je(){return window}function ig(e){je().location.href=e}/**
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
 */function Ou(){return typeof je().WorkerGlobalScope<"u"&&typeof je().importScripts=="function"}async function sg(){if(!navigator?.serviceWorker)return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function og(){var e;return((e=navigator?.serviceWorker)===null||e===void 0?void 0:e.controller)||null}function ag(){return Ou()?self:null}/**
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
 */const Nu="firebaseLocalStorageDb",lg=1,rs="firebaseLocalStorage",Lu="fbase_key";class hi{constructor(t){this.request=t}toPromise(){return new Promise((t,n)=>{this.request.addEventListener("success",()=>{t(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function bs(e,t){return e.transaction([rs],t?"readwrite":"readonly").objectStore(rs)}function cg(){const e=indexedDB.deleteDatabase(Nu);return new hi(e).toPromise()}function Lo(){const e=indexedDB.open(Nu,lg);return new Promise((t,n)=>{e.addEventListener("error",()=>{n(e.error)}),e.addEventListener("upgradeneeded",()=>{const r=e.result;try{r.createObjectStore(rs,{keyPath:Lu})}catch(i){n(i)}}),e.addEventListener("success",async()=>{const r=e.result;r.objectStoreNames.contains(rs)?t(r):(r.close(),await cg(),t(await Lo()))})})}async function Dl(e,t,n){const r=bs(e,!0).put({[Lu]:t,value:n});return new hi(r).toPromise()}async function ug(e,t){const n=bs(e,!1).get(t),r=await new hi(n).toPromise();return r===void 0?null:r.value}function Ol(e,t){const n=bs(e,!0).delete(t);return new hi(n).toPromise()}const hg=800,dg=3;class Vu{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Lo(),this.db)}async _withRetries(t){let n=0;for(;;)try{const r=await this._openDb();return await t(r)}catch(r){if(n++>dg)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Ou()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=As._getInstance(ag()),this.receiver._subscribe("keyChanged",async(t,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(t,n)=>["keyChanged"])}async initializeSender(){var t,n;if(this.activeServiceWorker=await sg(),!this.activeServiceWorker)return;this.sender=new rg(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((t=r[0])===null||t===void 0)&&t.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(t){if(!(!this.sender||!this.activeServiceWorker||og()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:t},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const t=await Lo();return await Dl(t,ns,"1"),await Ol(t,ns),!0}catch{}return!1}async _withPendingWrite(t){this.pendingWrites++;try{await t()}finally{this.pendingWrites--}}async _set(t,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Dl(r,t,n)),this.localCache[t]=n,this.notifyServiceWorker(t)))}async _get(t){const n=await this._withRetries(r=>ug(r,t));return this.localCache[t]=n,n}async _remove(t){return this._withPendingWrite(async()=>(await this._withRetries(n=>Ol(n,t)),delete this.localCache[t],this.notifyServiceWorker(t)))}async _poll(){const t=await this._withRetries(i=>{const s=bs(i,!1).getAll();return new hi(s).toPromise()});if(!t)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:i,value:s}of t)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(t,n){this.localCache[t]=n;const r=this.listeners[t];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),hg)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(t,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[t]||(this.listeners[t]=new Set,this._get(t)),this.listeners[t].add(n)}_removeListener(t,n){this.listeners[t]&&(this.listeners[t].delete(n),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Vu.type="LOCAL";const fg=Vu;new li(3e4,6e4);/**
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
 */function pg(e,t){return t?Xe(t):($(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}/**
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
 */class _a extends bu{constructor(t){super("custom","custom"),this.params=t}_getIdTokenResponse(t){return nr(t,this._buildIdpRequest())}_linkToIdToken(t,n){return nr(t,this._buildIdpRequest(n))}_getReauthenticationResolver(t){return nr(t,this._buildIdpRequest())}_buildIdpRequest(t){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return t&&(n.idToken=t),n}}function mg(e){return Km(e.auth,new _a(e),e.bypassAuthState)}function gg(e){const{auth:t,user:n}=e;return $(n,t,"internal-error"),Gm(n,new _a(e),e.bypassAuthState)}async function _g(e){const{auth:t,user:n}=e;return $(n,t,"internal-error"),zm(n,new _a(e),e.bypassAuthState)}/**
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
 */class Mu{constructor(t,n,r,i,s=!1){this.auth=t,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(t,n)=>{this.pendingPromise={resolve:t,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(t){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=t;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(c){this.reject(c)}}onError(t){this.reject(t)}getIdpTask(t){switch(t){case"signInViaPopup":case"signInViaRedirect":return mg;case"linkViaPopup":case"linkViaRedirect":return _g;case"reauthViaPopup":case"reauthViaRedirect":return gg;default:tn(this.auth,"internal-error")}}resolve(t){en(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(t),this.unregisterAndCleanUp()}reject(t){en(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(t),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const yg=new li(2e3,1e4);class Jn extends Mu{constructor(t,n,r,i,s){super(t,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,Jn.currentPopupAction&&Jn.currentPopupAction.cancel(),Jn.currentPopupAction=this}async executeNotNull(){const t=await this.execute();return $(t,this.auth,"internal-error"),t}async onExecution(){en(this.filter.length===1,"Popup operations only handle one event");const t=ga();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],t),this.authWindow.associatedEvent=t,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Be(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var t;return((t=this.authWindow)===null||t===void 0?void 0:t.associatedEvent)||null}cancel(){this.reject(Be(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Jn.currentPopupAction=null}pollUserCancellation(){const t=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Be(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(t,yg.get())};t()}}Jn.currentPopupAction=null;/**
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
 */const vg="pendingRedirect",Hi=new Map;class Eg extends Mu{constructor(t,n,r=!1){super(t,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let t=Hi.get(this.auth._key());if(!t){try{const r=await wg(this.resolver,this.auth)?await super.execute():null;t=()=>Promise.resolve(r)}catch(n){t=()=>Promise.reject(n)}Hi.set(this.auth._key(),t)}return this.bypassAuthState||Hi.set(this.auth._key(),()=>Promise.resolve(null)),t()}async onAuthEvent(t){if(t.type==="signInViaRedirect")return super.onAuthEvent(t);if(t.type==="unknown"){this.resolve(null);return}if(t.eventId){const n=await this.auth._redirectUserForId(t.eventId);if(n)return this.user=n,super.onAuthEvent(t);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function wg(e,t){const n=Ag(t),r=Tg(e);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function Ig(e,t){Hi.set(e._key(),t)}function Tg(e){return Xe(e._redirectPersistence)}function Ag(e){return ji(vg,e.config.apiKey,e.name)}async function bg(e,t,n=!1){const r=Ts(e),i=pg(r,t),o=await new Eg(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,t)),o}/**
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
 */const Sg=10*60*1e3;class Pg{constructor(t){this.auth=t,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(t){this.consumers.add(t),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,t)&&(this.sendToConsumer(this.queuedRedirectEvent,t),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(t){this.consumers.delete(t)}onEvent(t){if(this.hasEventBeenHandled(t))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(t,r)&&(n=!0,this.sendToConsumer(t,r),this.saveEventToCache(t))}),this.hasHandledPotentialRedirect||!Rg(t)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=t,n=!0)),n}sendToConsumer(t,n){var r;if(t.error&&!xu(t)){const i=((r=t.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(Be(this.auth,i))}else n.onAuthEvent(t)}isEventForConsumer(t,n){const r=n.eventId===null||!!t.eventId&&t.eventId===n.eventId;return n.filter.includes(t.type)&&r}hasEventBeenHandled(t){return Date.now()-this.lastProcessedEventTime>=Sg&&this.cachedEventUids.clear(),this.cachedEventUids.has(Nl(t))}saveEventToCache(t){this.cachedEventUids.add(Nl(t)),this.lastProcessedEventTime=Date.now()}}function Nl(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter(t=>t).join("-")}function xu({type:e,error:t}){return e==="unknown"&&t?.code==="auth/no-auth-event"}function Rg(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return xu(e);default:return!1}}/**
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
 */async function Cg(e,t={}){return ci(e,"GET","/v1/projects",t)}/**
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
 */const kg=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Dg=/^https?/;async function Og(e){if(e.config.emulator)return;const{authorizedDomains:t}=await Cg(e);for(const n of t)try{if(Ng(n))return}catch{}tn(e,"unauthorized-domain")}function Ng(e){const t=No(),{protocol:n,hostname:r}=new URL(t);if(e.startsWith("chrome-extension://")){const o=new URL(e);return o.hostname===""&&r===""?n==="chrome-extension:"&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!Dg.test(n))return!1;if(kg.test(e))return r===e;const i=e.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const Lg=new li(3e4,6e4);function Ll(){const e=je().___jsl;if(e?.H){for(const t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let n=0;n<e.CP.length;n++)e.CP[n]=null}}function Vg(e){return new Promise((t,n)=>{var r,i,s;function o(){Ll(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{Ll(),n(Be(e,"network-request-failed"))},timeout:Lg.get()})}if(!((i=(r=je().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)t(gapi.iframes.getContext());else if(!((s=je().gapi)===null||s===void 0)&&s.load)o();else{const a=xm("iframefcb");return je()[a]=()=>{gapi.load?o():n(Be(e,"network-request-failed"))},Mm(`https://apis.google.com/js/api.js?onload=${a}`).catch(l=>n(l))}}).catch(t=>{throw Wi=null,t})}let Wi=null;function Mg(e){return Wi=Wi||Vg(e),Wi}/**
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
 */const xg=new li(5e3,15e3),Fg="__/auth/iframe",Ug="emulator/auth/iframe",$g={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Bg=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function jg(e){const t=e.config;$(t.authDomain,e,"auth-domain-config-required");const n=t.emulator?da(t,Ug):`https://${e.config.authDomain}/${Fg}`,r={apiKey:t.apiKey,appName:e.name,v:mr},i=Bg.get(e.config.apiHost);i&&(r.eid=i);const s=e._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${ai(r).slice(1)}`}async function Hg(e){const t=await Mg(e),n=je().gapi;return $(n,e,"internal-error"),t.open({where:document.body,url:jg(e),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:$g,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=Be(e,"network-request-failed"),a=je().setTimeout(()=>{s(o)},xg.get());function l(){je().clearTimeout(a),i(r)}r.ping(l).then(l,()=>{s(o)})}))}/**
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
 */const Wg={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},qg=500,zg=600,Gg="_blank",Kg="http://localhost";class Vl{constructor(t){this.window=t,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Qg(e,t,n,r=qg,i=zg){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l=Object.assign(Object.assign({},Wg),{width:r.toString(),height:i.toString(),top:s,left:o}),c=ee().toLowerCase();n&&(a=_u(c)?Gg:n),gu(c)&&(t=t||Kg,l.scrollbars="yes");const u=Object.entries(l).reduce((d,[f,y])=>`${d}${f}=${y},`,"");if(Pm(c)&&a!=="_self")return Xg(t||"",a),new Vl(null);const h=window.open(t||"",a,u);$(h,e,"popup-blocked");try{h.focus()}catch{}return new Vl(h)}function Xg(e,t){const n=document.createElement("a");n.href=e,n.target=t;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const Jg="__/auth/handler",Yg="emulator/auth/handler",Zg=encodeURIComponent("fac");async function Ml(e,t,n,r,i,s){$(e.config.authDomain,e,"auth-domain-config-required"),$(e.config.apiKey,e,"invalid-api-key");const o={apiKey:e.config.apiKey,appName:e.name,authType:n,redirectUrl:r,v:mr,eventId:i};if(t instanceof Su){t.setDefaultLanguage(e.languageCode),o.providerId=t.providerId||"",Jf(t.getCustomParameters())||(o.customParameters=JSON.stringify(t.getCustomParameters()));for(const[u,h]of Object.entries(s||{}))o[u]=h}if(t instanceof ui){const u=t.getScopes().filter(h=>h!=="");u.length>0&&(o.scopes=u.join(","))}e.tenantId&&(o.tid=e.tenantId);const a=o;for(const u of Object.keys(a))a[u]===void 0&&delete a[u];const l=await e._getAppCheckToken(),c=l?`#${Zg}=${encodeURIComponent(l)}`:"";return`${t_(e)}?${ai(a).slice(1)}${c}`}function t_({config:e}){return e.emulator?da(e,Yg):`https://${e.authDomain}/${Jg}`}/**
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
 */const uo="webStorageSupport";class e_{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Du,this._completeRedirectFn=bg,this._overrideRedirectResult=Ig}async _openPopup(t,n,r,i){var s;en((s=this.eventManagers[t._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await Ml(t,n,r,No(),i);return Qg(t,o,ga())}async _openRedirect(t,n,r,i){await this._originValidation(t);const s=await Ml(t,n,r,No(),i);return ig(s),new Promise(()=>{})}_initialize(t){const n=t._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(en(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(t);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(t){const n=await Hg(t),r=new Pg(t);return n.register("authEvent",i=>($(i?.authEvent,t,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[t._key()]={manager:r},this.iframes[t._key()]=n,r}_isIframeWebStorageSupported(t,n){this.iframes[t._key()].send(uo,{type:uo},i=>{var s;const o=(s=i?.[0])===null||s===void 0?void 0:s[uo];o!==void 0&&n(!!o),tn(t,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(t){const n=t._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=Og(t)),this.originValidationPromises[n]}get _shouldInitProactively(){return Iu()||ma()||Is()}}const n_=e_;var xl="@firebase/auth",Fl="1.2.0";/**
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
 */class r_{constructor(t){this.auth=t,this.internalListeners=new Map}getUid(){var t;return this.assertAuthConfigured(),((t=this.auth.currentUser)===null||t===void 0?void 0:t.uid)||null}async getToken(t){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(t)}:null}addAuthTokenListener(t){if(this.assertAuthConfigured(),this.internalListeners.has(t))return;const n=this.auth.onIdTokenChanged(r=>{t(r?.stsTokenManager.accessToken||null)});this.internalListeners.set(t,n),this.updateProactiveRefresh()}removeAuthTokenListener(t){this.assertAuthConfigured();const n=this.internalListeners.get(t);n&&(this.internalListeners.delete(t),n(),this.updateProactiveRefresh())}assertAuthConfigured(){$(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function i_(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function s_(e){ar(new Un("auth",(t,{options:n})=>{const r=t.getProvider("app").getImmediate(),i=t.getProvider("heartbeat"),s=t.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;$(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:o,authDomain:a,clientPlatform:e,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Tu(e)},c=new Lm(r,i,s,l);return Um(c,n),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((t,n,r)=>{t.getProvider("auth-internal").initialize()})),ar(new Un("auth-internal",t=>{const n=Ts(t.getProvider("auth").getImmediate());return(r=>new r_(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),_n(xl,Fl,i_(e)),_n(xl,Fl,"esm2017")}/**
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
 */const o_=5*60,a_=eu("authIdTokenMaxAge")||o_;let Ul=null;const l_=e=>async t=>{const n=t&&await t.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>a_)return;const i=n?.token;Ul!==i&&(Ul=i,await fetch(e,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function c_(e=su()){const t=ca(e,"auth");if(t.isInitialized())return t.getImmediate();const n=Fm(e,{popupRedirectResolver:n_,persistence:[fg,eg,Du]}),r=eu("authTokenSyncURL");if(r){const s=l_(r);Xm(n,s,()=>s(n.currentUser)),Qm(n,o=>s(o))}const i=Zc("auth");return i&&$m(n,`http://${i}`),n}s_("Browser");var u_=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},I,ya=ya||{},U=u_||self;function Ss(e){var t=typeof e;return t=t!="object"?t:e?Array.isArray(e)?"array":t:"null",t=="array"||t=="object"&&typeof e.length=="number"}function di(e){var t=typeof e;return t=="object"&&e!=null||t=="function"}function h_(e){return Object.prototype.hasOwnProperty.call(e,ho)&&e[ho]||(e[ho]=++d_)}var ho="closure_uid_"+(1e9*Math.random()>>>0),d_=0;function f_(e,t,n){return e.call.apply(e.bind,arguments)}function p_(e,t,n){if(!e)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,r),e.apply(t,i)}}return function(){return e.apply(t,arguments)}}function Zt(e,t,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?Zt=f_:Zt=p_,Zt.apply(null,arguments)}function Di(e,t){var n=Array.prototype.slice.call(arguments,1);return function(){var r=n.slice();return r.push.apply(r,arguments),e.apply(this,r)}}function xt(e,t){function n(){}n.prototype=t.prototype,e.$=t.prototype,e.prototype=new n,e.prototype.constructor=e,e.ac=function(r,i,s){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return t.prototype[i].apply(r,o)}}function Tn(){this.s=this.s,this.o=this.o}var m_=0;Tn.prototype.s=!1;Tn.prototype.sa=function(){!this.s&&(this.s=!0,this.N(),m_!=0)&&h_(this)};Tn.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const Fu=Array.prototype.indexOf?function(e,t){return Array.prototype.indexOf.call(e,t,void 0)}:function(e,t){if(typeof e=="string")return typeof t!="string"||t.length!=1?-1:e.indexOf(t,0);for(let n=0;n<e.length;n++)if(n in e&&e[n]===t)return n;return-1};function va(e){const t=e.length;if(0<t){const n=Array(t);for(let r=0;r<t;r++)n[r]=e[r];return n}return[]}function $l(e,t){for(let n=1;n<arguments.length;n++){const r=arguments[n];if(Ss(r)){const i=e.length||0,s=r.length||0;e.length=i+s;for(let o=0;o<s;o++)e[i+o]=r[o]}else e.push(r)}}function te(e,t){this.type=e,this.g=this.target=t,this.defaultPrevented=!1}te.prototype.h=function(){this.defaultPrevented=!0};var g_=function(){if(!U.addEventListener||!Object.defineProperty)return!1;var e=!1,t=Object.defineProperty({},"passive",{get:function(){e=!0}});try{U.addEventListener("test",()=>{},t),U.removeEventListener("test",()=>{},t)}catch{}return e}();function Hr(e){return/^[\s\xa0]*$/.test(e)}function Ps(){var e=U.navigator;return e&&(e=e.userAgent)?e:""}function xe(e){return Ps().indexOf(e)!=-1}function Ea(e){return Ea[" "](e),e}Ea[" "]=function(){};function __(e,t){var n=cy;return Object.prototype.hasOwnProperty.call(n,e)?n[e]:n[e]=t(e)}var y_=xe("Opera"),lr=xe("Trident")||xe("MSIE"),Uu=xe("Edge"),Vo=Uu||lr,$u=xe("Gecko")&&!(Ps().toLowerCase().indexOf("webkit")!=-1&&!xe("Edge"))&&!(xe("Trident")||xe("MSIE"))&&!xe("Edge"),v_=Ps().toLowerCase().indexOf("webkit")!=-1&&!xe("Edge");function Bu(){var e=U.document;return e?e.documentMode:void 0}var Mo;t:{var fo="",po=function(){var e=Ps();if($u)return/rv:([^\);]+)(\)|;)/.exec(e);if(Uu)return/Edge\/([\d\.]+)/.exec(e);if(lr)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(e);if(v_)return/WebKit\/(\S+)/.exec(e);if(y_)return/(?:Version)[ \/]?(\S+)/.exec(e)}();if(po&&(fo=po?po[1]:""),lr){var mo=Bu();if(mo!=null&&mo>parseFloat(fo)){Mo=String(mo);break t}}Mo=fo}var xo;if(U.document&&lr){var Bl=Bu();xo=Bl||parseInt(Mo,10)||void 0}else xo=void 0;var E_=xo;function Wr(e,t){if(te.call(this,e?e.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,e){var n=this.type=e.type,r=e.changedTouches&&e.changedTouches.length?e.changedTouches[0]:null;if(this.target=e.target||e.srcElement,this.g=t,t=e.relatedTarget){if($u){t:{try{Ea(t.nodeName);var i=!0;break t}catch{}i=!1}i||(t=null)}}else n=="mouseover"?t=e.fromElement:n=="mouseout"&&(t=e.toElement);this.relatedTarget=t,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=e.clientX!==void 0?e.clientX:e.pageX,this.clientY=e.clientY!==void 0?e.clientY:e.pageY,this.screenX=e.screenX||0,this.screenY=e.screenY||0),this.button=e.button,this.key=e.key||"",this.ctrlKey=e.ctrlKey,this.altKey=e.altKey,this.shiftKey=e.shiftKey,this.metaKey=e.metaKey,this.pointerId=e.pointerId||0,this.pointerType=typeof e.pointerType=="string"?e.pointerType:w_[e.pointerType]||"",this.state=e.state,this.i=e,e.defaultPrevented&&Wr.$.h.call(this)}}xt(Wr,te);var w_={2:"touch",3:"pen",4:"mouse"};Wr.prototype.h=function(){Wr.$.h.call(this);var e=this.i;e.preventDefault?e.preventDefault():e.returnValue=!1};var fi="closure_listenable_"+(1e6*Math.random()|0),I_=0;function T_(e,t,n,r,i){this.listener=e,this.proxy=null,this.src=t,this.type=n,this.capture=!!r,this.la=i,this.key=++I_,this.fa=this.ia=!1}function Rs(e){e.fa=!0,e.listener=null,e.proxy=null,e.src=null,e.la=null}function wa(e,t,n){for(const r in e)t.call(n,e[r],r,e)}function A_(e,t){for(const n in e)t.call(void 0,e[n],n,e)}function ju(e){const t={};for(const n in e)t[n]=e[n];return t}const jl="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Hu(e,t){let n,r;for(let i=1;i<arguments.length;i++){r=arguments[i];for(n in r)e[n]=r[n];for(let s=0;s<jl.length;s++)n=jl[s],Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}}function Cs(e){this.src=e,this.g={},this.h=0}Cs.prototype.add=function(e,t,n,r,i){var s=e.toString();e=this.g[s],e||(e=this.g[s]=[],this.h++);var o=Uo(e,t,r,i);return-1<o?(t=e[o],n||(t.ia=!1)):(t=new T_(t,this.src,s,!!r,i),t.ia=n,e.push(t)),t};function Fo(e,t){var n=t.type;if(n in e.g){var r=e.g[n],i=Fu(r,t),s;(s=0<=i)&&Array.prototype.splice.call(r,i,1),s&&(Rs(t),e.g[n].length==0&&(delete e.g[n],e.h--))}}function Uo(e,t,n,r){for(var i=0;i<e.length;++i){var s=e[i];if(!s.fa&&s.listener==t&&s.capture==!!n&&s.la==r)return i}return-1}var Ia="closure_lm_"+(1e6*Math.random()|0),go={};function Wu(e,t,n,r,i){if(r&&r.once)return zu(e,t,n,r,i);if(Array.isArray(t)){for(var s=0;s<t.length;s++)Wu(e,t[s],n,r,i);return null}return n=ba(n),e&&e[fi]?e.O(t,n,di(r)?!!r.capture:!!r,i):qu(e,t,n,!1,r,i)}function qu(e,t,n,r,i,s){if(!t)throw Error("Invalid event type");var o=di(i)?!!i.capture:!!i,a=Aa(e);if(a||(e[Ia]=a=new Cs(e)),n=a.add(t,n,r,o,s),n.proxy)return n;if(r=b_(),n.proxy=r,r.src=e,r.listener=n,e.addEventListener)g_||(i=o),i===void 0&&(i=!1),e.addEventListener(t.toString(),r,i);else if(e.attachEvent)e.attachEvent(Ku(t.toString()),r);else if(e.addListener&&e.removeListener)e.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return n}function b_(){function e(n){return t.call(e.src,e.listener,n)}const t=S_;return e}function zu(e,t,n,r,i){if(Array.isArray(t)){for(var s=0;s<t.length;s++)zu(e,t[s],n,r,i);return null}return n=ba(n),e&&e[fi]?e.P(t,n,di(r)?!!r.capture:!!r,i):qu(e,t,n,!0,r,i)}function Gu(e,t,n,r,i){if(Array.isArray(t))for(var s=0;s<t.length;s++)Gu(e,t[s],n,r,i);else r=di(r)?!!r.capture:!!r,n=ba(n),e&&e[fi]?(e=e.i,t=String(t).toString(),t in e.g&&(s=e.g[t],n=Uo(s,n,r,i),-1<n&&(Rs(s[n]),Array.prototype.splice.call(s,n,1),s.length==0&&(delete e.g[t],e.h--)))):e&&(e=Aa(e))&&(t=e.g[t.toString()],e=-1,t&&(e=Uo(t,n,r,i)),(n=-1<e?t[e]:null)&&Ta(n))}function Ta(e){if(typeof e!="number"&&e&&!e.fa){var t=e.src;if(t&&t[fi])Fo(t.i,e);else{var n=e.type,r=e.proxy;t.removeEventListener?t.removeEventListener(n,r,e.capture):t.detachEvent?t.detachEvent(Ku(n),r):t.addListener&&t.removeListener&&t.removeListener(r),(n=Aa(t))?(Fo(n,e),n.h==0&&(n.src=null,t[Ia]=null)):Rs(e)}}}function Ku(e){return e in go?go[e]:go[e]="on"+e}function S_(e,t){if(e.fa)e=!0;else{t=new Wr(t,this);var n=e.listener,r=e.la||e.src;e.ia&&Ta(e),e=n.call(r,t)}return e}function Aa(e){return e=e[Ia],e instanceof Cs?e:null}var _o="__closure_events_fn_"+(1e9*Math.random()>>>0);function ba(e){return typeof e=="function"?e:(e[_o]||(e[_o]=function(t){return e.handleEvent(t)}),e[_o])}function Vt(){Tn.call(this),this.i=new Cs(this),this.S=this,this.J=null}xt(Vt,Tn);Vt.prototype[fi]=!0;Vt.prototype.removeEventListener=function(e,t,n,r){Gu(this,e,t,n,r)};function Gt(e,t){var n,r=e.J;if(r)for(n=[];r;r=r.J)n.push(r);if(e=e.S,r=t.type||t,typeof t=="string")t=new te(t,e);else if(t instanceof te)t.target=t.target||e;else{var i=t;t=new te(r,e),Hu(t,i)}if(i=!0,n)for(var s=n.length-1;0<=s;s--){var o=t.g=n[s];i=Oi(o,r,!0,t)&&i}if(o=t.g=e,i=Oi(o,r,!0,t)&&i,i=Oi(o,r,!1,t)&&i,n)for(s=0;s<n.length;s++)o=t.g=n[s],i=Oi(o,r,!1,t)&&i}Vt.prototype.N=function(){if(Vt.$.N.call(this),this.i){var e=this.i,t;for(t in e.g){for(var n=e.g[t],r=0;r<n.length;r++)Rs(n[r]);delete e.g[t],e.h--}}this.J=null};Vt.prototype.O=function(e,t,n,r){return this.i.add(String(e),t,!1,n,r)};Vt.prototype.P=function(e,t,n,r){return this.i.add(String(e),t,!0,n,r)};function Oi(e,t,n,r){if(t=e.i.g[String(t)],!t)return!0;t=t.concat();for(var i=!0,s=0;s<t.length;++s){var o=t[s];if(o&&!o.fa&&o.capture==n){var a=o.listener,l=o.la||o.src;o.ia&&Fo(e.i,o),i=a.call(l,r)!==!1&&i}}return i&&!r.defaultPrevented}var Sa=U.JSON.stringify;class P_{constructor(t,n){this.i=t,this.j=n,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}function R_(){var e=Pa;let t=null;return e.g&&(t=e.g,e.g=e.g.next,e.g||(e.h=null),t.next=null),t}class C_{constructor(){this.h=this.g=null}add(t,n){const r=Qu.get();r.set(t,n),this.h?this.h.next=r:this.g=r,this.h=r}}var Qu=new P_(()=>new k_,e=>e.reset());class k_{constructor(){this.next=this.g=this.h=null}set(t,n){this.h=t,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function D_(e){var t=1;e=e.split(":");const n=[];for(;0<t&&e.length;)n.push(e.shift()),t--;return e.length&&n.push(e.join(":")),n}function O_(e){U.setTimeout(()=>{throw e},0)}let qr,zr=!1,Pa=new C_,Xu=()=>{const e=U.Promise.resolve(void 0);qr=()=>{e.then(N_)}};var N_=()=>{for(var e;e=R_();){try{e.h.call(e.g)}catch(n){O_(n)}var t=Qu;t.j(e),100>t.h&&(t.h++,e.next=t.g,t.g=e)}zr=!1};function ks(e,t){Vt.call(this),this.h=e||1,this.g=t||U,this.j=Zt(this.qb,this),this.l=Date.now()}xt(ks,Vt);I=ks.prototype;I.ga=!1;I.T=null;I.qb=function(){if(this.ga){var e=Date.now()-this.l;0<e&&e<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-e):(this.T&&(this.g.clearTimeout(this.T),this.T=null),Gt(this,"tick"),this.ga&&(Ra(this),this.start()))}};I.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function Ra(e){e.ga=!1,e.T&&(e.g.clearTimeout(e.T),e.T=null)}I.N=function(){ks.$.N.call(this),Ra(this),delete this.g};function Ca(e,t,n){if(typeof e=="function")n&&(e=Zt(e,n));else if(e&&typeof e.handleEvent=="function")e=Zt(e.handleEvent,e);else throw Error("Invalid listener argument");return 2147483647<Number(t)?-1:U.setTimeout(e,t||0)}function Ju(e){e.g=Ca(()=>{e.g=null,e.i&&(e.i=!1,Ju(e))},e.j);const t=e.h;e.h=null,e.m.apply(null,t)}class L_ extends Tn{constructor(t,n){super(),this.m=t,this.j=n,this.h=null,this.i=!1,this.g=null}l(t){this.h=arguments,this.g?this.i=!0:Ju(this)}N(){super.N(),this.g&&(U.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Gr(e){Tn.call(this),this.h=e,this.g={}}xt(Gr,Tn);var Hl=[];function Yu(e,t,n,r){Array.isArray(n)||(n&&(Hl[0]=n.toString()),n=Hl);for(var i=0;i<n.length;i++){var s=Wu(t,n[i],r||e.handleEvent,!1,e.h||e);if(!s)break;e.g[s.key]=s}}function Zu(e){wa(e.g,function(t,n){this.g.hasOwnProperty(n)&&Ta(t)},e),e.g={}}Gr.prototype.N=function(){Gr.$.N.call(this),Zu(this)};Gr.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function Ds(){this.g=!0}Ds.prototype.Ea=function(){this.g=!1};function V_(e,t,n,r,i,s){e.info(function(){if(e.g)if(s)for(var o="",a=s.split("&"),l=0;l<a.length;l++){var c=a[l].split("=");if(1<c.length){var u=c[0];c=c[1];var h=u.split("_");o=2<=h.length&&h[1]=="type"?o+(u+"="+c+"&"):o+(u+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+t+`
`+n+`
`+o})}function M_(e,t,n,r,i,s,o){e.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+t+`
`+n+`
`+s+" "+o})}function Yn(e,t,n,r){e.info(function(){return"XMLHTTP TEXT ("+t+"): "+F_(e,n)+(r?" "+r:"")})}function x_(e,t){e.info(function(){return"TIMEOUT: "+t})}Ds.prototype.info=function(){};function F_(e,t){if(!e.g)return t;if(!t)return null;try{var n=JSON.parse(t);if(n){for(e=0;e<n.length;e++)if(Array.isArray(n[e])){var r=n[e];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var s=i[0];if(s!="noop"&&s!="stop"&&s!="close")for(var o=1;o<i.length;o++)i[o]=""}}}}return Sa(n)}catch{return t}}var qn={},Wl=null;function Os(){return Wl=Wl||new Vt}qn.Ta="serverreachability";function th(e){te.call(this,qn.Ta,e)}xt(th,te);function Kr(e){const t=Os();Gt(t,new th(t))}qn.STAT_EVENT="statevent";function eh(e,t){te.call(this,qn.STAT_EVENT,e),this.stat=t}xt(eh,te);function de(e){const t=Os();Gt(t,new eh(t,e))}qn.Ua="timingevent";function nh(e,t){te.call(this,qn.Ua,e),this.size=t}xt(nh,te);function pi(e,t){if(typeof e!="function")throw Error("Fn must not be null and must be a function");return U.setTimeout(function(){e()},t)}var Ns={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},rh={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function ka(){}ka.prototype.h=null;function ql(e){return e.h||(e.h=e.i())}function ih(){}var mi={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function Da(){te.call(this,"d")}xt(Da,te);function Oa(){te.call(this,"c")}xt(Oa,te);var $o;function Ls(){}xt(Ls,ka);Ls.prototype.g=function(){return new XMLHttpRequest};Ls.prototype.i=function(){return{}};$o=new Ls;function gi(e,t,n,r){this.l=e,this.j=t,this.m=n,this.W=r||1,this.U=new Gr(this),this.P=U_,e=Vo?125:void 0,this.V=new ks(e),this.I=null,this.i=!1,this.s=this.A=this.v=this.L=this.G=this.Y=this.B=null,this.F=[],this.g=null,this.C=0,this.o=this.u=null,this.ca=-1,this.J=!1,this.O=0,this.M=null,this.ba=this.K=this.aa=this.S=!1,this.h=new sh}function sh(){this.i=null,this.g="",this.h=!1}var U_=45e3,Bo={},is={};I=gi.prototype;I.setTimeout=function(e){this.P=e};function jo(e,t,n){e.L=1,e.v=Ms(nn(t)),e.s=n,e.S=!0,oh(e,null)}function oh(e,t){e.G=Date.now(),_i(e),e.A=nn(e.v);var n=e.A,r=e.W;Array.isArray(r)||(r=[String(r)]),ph(n.i,"t",r),e.C=0,n=e.l.J,e.h=new sh,e.g=Vh(e.l,n?t:null,!e.s),0<e.O&&(e.M=new L_(Zt(e.Pa,e,e.g),e.O)),Yu(e.U,e.g,"readystatechange",e.nb),t=e.I?ju(e.I):{},e.s?(e.u||(e.u="POST"),t["Content-Type"]="application/x-www-form-urlencoded",e.g.ha(e.A,e.u,e.s,t)):(e.u="GET",e.g.ha(e.A,e.u,null,t)),Kr(),V_(e.j,e.u,e.A,e.m,e.W,e.s)}I.nb=function(e){e=e.target;const t=this.M;t&&Fe(e)==3?t.l():this.Pa(e)};I.Pa=function(e){try{if(e==this.g)t:{const u=Fe(this.g);var t=this.g.Ia();const h=this.g.da();if(!(3>u)&&(u!=3||Vo||this.g&&(this.h.h||this.g.ja()||Ql(this.g)))){this.J||u!=4||t==7||(t==8||0>=h?Kr(3):Kr(2)),Vs(this);var n=this.g.da();this.ca=n;e:if(ah(this)){var r=Ql(this.g);e="";var i=r.length,s=Fe(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Dn(this),Nr(this);var o="";break e}this.h.i=new U.TextDecoder}for(t=0;t<i;t++)this.h.h=!0,e+=this.h.i.decode(r[t],{stream:s&&t==i-1});r.splice(0,i),this.h.g+=e,this.C=0,o=this.h.g}else o=this.g.ja();if(this.i=n==200,M_(this.j,this.u,this.A,this.m,this.W,u,n),this.i){if(this.aa&&!this.K){e:{if(this.g){var a,l=this.g;if((a=l.g?l.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Hr(a)){var c=a;break e}}c=null}if(n=c)Yn(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Ho(this,n);else{this.i=!1,this.o=3,de(12),Dn(this),Nr(this);break t}}this.S?(lh(this,u,o),Vo&&this.i&&u==3&&(Yu(this.U,this.V,"tick",this.mb),this.V.start())):(Yn(this.j,this.m,o,null),Ho(this,o)),u==4&&Dn(this),this.i&&!this.J&&(u==4?Dh(this.l,this):(this.i=!1,_i(this)))}else oy(this.g),n==400&&0<o.indexOf("Unknown SID")?(this.o=3,de(12)):(this.o=0,de(13)),Dn(this),Nr(this)}}}catch{}finally{}};function ah(e){return e.g?e.u=="GET"&&e.L!=2&&e.l.Ha:!1}function lh(e,t,n){let r=!0,i;for(;!e.J&&e.C<n.length;)if(i=$_(e,n),i==is){t==4&&(e.o=4,de(14),r=!1),Yn(e.j,e.m,null,"[Incomplete Response]");break}else if(i==Bo){e.o=4,de(15),Yn(e.j,e.m,n,"[Invalid Chunk]"),r=!1;break}else Yn(e.j,e.m,i,null),Ho(e,i);ah(e)&&i!=is&&i!=Bo&&(e.h.g="",e.C=0),t!=4||n.length!=0||e.h.h||(e.o=1,de(16),r=!1),e.i=e.i&&r,r?0<n.length&&!e.ba&&(e.ba=!0,t=e.l,t.g==e&&t.ca&&!t.M&&(t.l.info("Great, no buffering proxy detected. Bytes received: "+n.length),Fa(t),t.M=!0,de(11))):(Yn(e.j,e.m,n,"[Invalid Chunked Response]"),Dn(e),Nr(e))}I.mb=function(){if(this.g){var e=Fe(this.g),t=this.g.ja();this.C<t.length&&(Vs(this),lh(this,e,t),this.i&&e!=4&&_i(this))}};function $_(e,t){var n=e.C,r=t.indexOf(`
`,n);return r==-1?is:(n=Number(t.substring(n,r)),isNaN(n)?Bo:(r+=1,r+n>t.length?is:(t=t.slice(r,r+n),e.C=r+n,t)))}I.cancel=function(){this.J=!0,Dn(this)};function _i(e){e.Y=Date.now()+e.P,ch(e,e.P)}function ch(e,t){if(e.B!=null)throw Error("WatchDog timer not null");e.B=pi(Zt(e.lb,e),t)}function Vs(e){e.B&&(U.clearTimeout(e.B),e.B=null)}I.lb=function(){this.B=null;const e=Date.now();0<=e-this.Y?(x_(this.j,this.A),this.L!=2&&(Kr(),de(17)),Dn(this),this.o=2,Nr(this)):ch(this,this.Y-e)};function Nr(e){e.l.H==0||e.J||Dh(e.l,e)}function Dn(e){Vs(e);var t=e.M;t&&typeof t.sa=="function"&&t.sa(),e.M=null,Ra(e.V),Zu(e.U),e.g&&(t=e.g,e.g=null,t.abort(),t.sa())}function Ho(e,t){try{var n=e.l;if(n.H!=0&&(n.g==e||Wo(n.i,e))){if(!e.K&&Wo(n.i,e)&&n.H==3){try{var r=n.Ja.g.parse(t)}catch{r=null}if(Array.isArray(r)&&r.length==3){var i=r;if(i[0]==0){t:if(!n.u){if(n.g)if(n.g.G+3e3<e.G)as(n),Us(n);else break t;xa(n),de(18)}}else n.Fa=i[1],0<n.Fa-n.V&&37500>i[2]&&n.G&&n.A==0&&!n.v&&(n.v=pi(Zt(n.ib,n),6e3));if(1>=_h(n.i)&&n.oa){try{n.oa()}catch{}n.oa=void 0}}else On(n,11)}else if((e.K||n.g==e)&&as(n),!Hr(t))for(i=n.Ja.g.parse(t),t=0;t<i.length;t++){let c=i[t];if(n.V=c[0],c=c[1],n.H==2)if(c[0]=="c"){n.K=c[1],n.pa=c[2];const u=c[3];u!=null&&(n.ra=u,n.l.info("VER="+n.ra));const h=c[4];h!=null&&(n.Ga=h,n.l.info("SVER="+n.Ga));const d=c[5];d!=null&&typeof d=="number"&&0<d&&(r=1.5*d,n.L=r,n.l.info("backChannelRequestTimeoutMs_="+r)),r=n;const f=e.g;if(f){const y=f.g?f.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(y){var s=r.i;s.g||y.indexOf("spdy")==-1&&y.indexOf("quic")==-1&&y.indexOf("h2")==-1||(s.j=s.l,s.g=new Set,s.h&&(Na(s,s.h),s.h=null))}if(r.F){const w=f.g?f.g.getResponseHeader("X-HTTP-Session-Id"):null;w&&(r.Da=w,mt(r.I,r.F,w))}}n.H=3,n.h&&n.h.Ba(),n.ca&&(n.S=Date.now()-e.G,n.l.info("Handshake RTT: "+n.S+"ms")),r=n;var o=e;if(r.wa=Lh(r,r.J?r.pa:null,r.Y),o.K){yh(r.i,o);var a=o,l=r.L;l&&a.setTimeout(l),a.B&&(Vs(a),_i(a)),r.g=o}else Ch(r);0<n.j.length&&$s(n)}else c[0]!="stop"&&c[0]!="close"||On(n,7);else n.H==3&&(c[0]=="stop"||c[0]=="close"?c[0]=="stop"?On(n,7):Ma(n):c[0]!="noop"&&n.h&&n.h.Aa(c),n.A=0)}}Kr(4)}catch{}}function B_(e){if(e.Z&&typeof e.Z=="function")return e.Z();if(typeof Map<"u"&&e instanceof Map||typeof Set<"u"&&e instanceof Set)return Array.from(e.values());if(typeof e=="string")return e.split("");if(Ss(e)){for(var t=[],n=e.length,r=0;r<n;r++)t.push(e[r]);return t}t=[],n=0;for(r in e)t[n++]=e[r];return t}function j_(e){if(e.ta&&typeof e.ta=="function")return e.ta();if(!e.Z||typeof e.Z!="function"){if(typeof Map<"u"&&e instanceof Map)return Array.from(e.keys());if(!(typeof Set<"u"&&e instanceof Set)){if(Ss(e)||typeof e=="string"){var t=[];e=e.length;for(var n=0;n<e;n++)t.push(n);return t}t=[],n=0;for(const r in e)t[n++]=r;return t}}}function uh(e,t){if(e.forEach&&typeof e.forEach=="function")e.forEach(t,void 0);else if(Ss(e)||typeof e=="string")Array.prototype.forEach.call(e,t,void 0);else for(var n=j_(e),r=B_(e),i=r.length,s=0;s<i;s++)t.call(void 0,r[s],n&&n[s],e)}var hh=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function H_(e,t){if(e){e=e.split("&");for(var n=0;n<e.length;n++){var r=e[n].indexOf("="),i=null;if(0<=r){var s=e[n].substring(0,r);i=e[n].substring(r+1)}else s=e[n];t(s,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function Vn(e){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,e instanceof Vn){this.h=e.h,ss(this,e.j),this.s=e.s,this.g=e.g,os(this,e.m),this.l=e.l;var t=e.i,n=new Qr;n.i=t.i,t.g&&(n.g=new Map(t.g),n.h=t.h),zl(this,n),this.o=e.o}else e&&(t=String(e).match(hh))?(this.h=!1,ss(this,t[1]||"",!0),this.s=kr(t[2]||""),this.g=kr(t[3]||"",!0),os(this,t[4]),this.l=kr(t[5]||"",!0),zl(this,t[6]||"",!0),this.o=kr(t[7]||"")):(this.h=!1,this.i=new Qr(null,this.h))}Vn.prototype.toString=function(){var e=[],t=this.j;t&&e.push(Dr(t,Gl,!0),":");var n=this.g;return(n||t=="file")&&(e.push("//"),(t=this.s)&&e.push(Dr(t,Gl,!0),"@"),e.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&e.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&e.push("/"),e.push(Dr(n,n.charAt(0)=="/"?z_:q_,!0))),(n=this.i.toString())&&e.push("?",n),(n=this.o)&&e.push("#",Dr(n,K_)),e.join("")};function nn(e){return new Vn(e)}function ss(e,t,n){e.j=n?kr(t,!0):t,e.j&&(e.j=e.j.replace(/:$/,""))}function os(e,t){if(t){if(t=Number(t),isNaN(t)||0>t)throw Error("Bad port number "+t);e.m=t}else e.m=null}function zl(e,t,n){t instanceof Qr?(e.i=t,Q_(e.i,e.h)):(n||(t=Dr(t,G_)),e.i=new Qr(t,e.h))}function mt(e,t,n){e.i.set(t,n)}function Ms(e){return mt(e,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),e}function kr(e,t){return e?t?decodeURI(e.replace(/%25/g,"%2525")):decodeURIComponent(e):""}function Dr(e,t,n){return typeof e=="string"?(e=encodeURI(e).replace(t,W_),n&&(e=e.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),e):null}function W_(e){return e=e.charCodeAt(0),"%"+(e>>4&15).toString(16)+(e&15).toString(16)}var Gl=/[#\/\?@]/g,q_=/[#\?:]/g,z_=/[#\?]/g,G_=/[#\?@]/g,K_=/#/g;function Qr(e,t){this.h=this.g=null,this.i=e||null,this.j=!!t}function An(e){e.g||(e.g=new Map,e.h=0,e.i&&H_(e.i,function(t,n){e.add(decodeURIComponent(t.replace(/\+/g," ")),n)}))}I=Qr.prototype;I.add=function(e,t){An(this),this.i=null,e=gr(this,e);var n=this.g.get(e);return n||this.g.set(e,n=[]),n.push(t),this.h+=1,this};function dh(e,t){An(e),t=gr(e,t),e.g.has(t)&&(e.i=null,e.h-=e.g.get(t).length,e.g.delete(t))}function fh(e,t){return An(e),t=gr(e,t),e.g.has(t)}I.forEach=function(e,t){An(this),this.g.forEach(function(n,r){n.forEach(function(i){e.call(t,i,r,this)},this)},this)};I.ta=function(){An(this);const e=Array.from(this.g.values()),t=Array.from(this.g.keys()),n=[];for(let r=0;r<t.length;r++){const i=e[r];for(let s=0;s<i.length;s++)n.push(t[r])}return n};I.Z=function(e){An(this);let t=[];if(typeof e=="string")fh(this,e)&&(t=t.concat(this.g.get(gr(this,e))));else{e=Array.from(this.g.values());for(let n=0;n<e.length;n++)t=t.concat(e[n])}return t};I.set=function(e,t){return An(this),this.i=null,e=gr(this,e),fh(this,e)&&(this.h-=this.g.get(e).length),this.g.set(e,[t]),this.h+=1,this};I.get=function(e,t){return e?(e=this.Z(e),0<e.length?String(e[0]):t):t};function ph(e,t,n){dh(e,t),0<n.length&&(e.i=null,e.g.set(gr(e,t),va(n)),e.h+=n.length)}I.toString=function(){if(this.i)return this.i;if(!this.g)return"";const e=[],t=Array.from(this.g.keys());for(var n=0;n<t.length;n++){var r=t[n];const s=encodeURIComponent(String(r)),o=this.Z(r);for(r=0;r<o.length;r++){var i=s;o[r]!==""&&(i+="="+encodeURIComponent(String(o[r]))),e.push(i)}}return this.i=e.join("&")};function gr(e,t){return t=String(t),e.j&&(t=t.toLowerCase()),t}function Q_(e,t){t&&!e.j&&(An(e),e.i=null,e.g.forEach(function(n,r){var i=r.toLowerCase();r!=i&&(dh(this,r),ph(this,i,n))},e)),e.j=t}var X_=class{constructor(e,t){this.g=e,this.map=t}};function mh(e){this.l=e||J_,U.PerformanceNavigationTiming?(e=U.performance.getEntriesByType("navigation"),e=0<e.length&&(e[0].nextHopProtocol=="hq"||e[0].nextHopProtocol=="h2")):e=!!(U.g&&U.g.Ka&&U.g.Ka()&&U.g.Ka().ec),this.j=e?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var J_=10;function gh(e){return e.h?!0:e.g?e.g.size>=e.j:!1}function _h(e){return e.h?1:e.g?e.g.size:0}function Wo(e,t){return e.h?e.h==t:e.g?e.g.has(t):!1}function Na(e,t){e.g?e.g.add(t):e.h=t}function yh(e,t){e.h&&e.h==t?e.h=null:e.g&&e.g.has(t)&&e.g.delete(t)}mh.prototype.cancel=function(){if(this.i=vh(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const e of this.g.values())e.cancel();this.g.clear()}};function vh(e){if(e.h!=null)return e.i.concat(e.h.F);if(e.g!=null&&e.g.size!==0){let t=e.i;for(const n of e.g.values())t=t.concat(n.F);return t}return va(e.i)}var Y_=class{stringify(e){return U.JSON.stringify(e,void 0)}parse(e){return U.JSON.parse(e,void 0)}};function Z_(){this.g=new Y_}function ty(e,t,n){const r=n||"";try{uh(e,function(i,s){let o=i;di(i)&&(o=Sa(i)),t.push(r+s+"="+encodeURIComponent(o))})}catch(i){throw t.push(r+"type="+encodeURIComponent("_badmap")),i}}function ey(e,t){const n=new Ds;if(U.Image){const r=new Image;r.onload=Di(Ni,n,r,"TestLoadImage: loaded",!0,t),r.onerror=Di(Ni,n,r,"TestLoadImage: error",!1,t),r.onabort=Di(Ni,n,r,"TestLoadImage: abort",!1,t),r.ontimeout=Di(Ni,n,r,"TestLoadImage: timeout",!1,t),U.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=e}else t(!1)}function Ni(e,t,n,r,i){try{t.onload=null,t.onerror=null,t.onabort=null,t.ontimeout=null,i(r)}catch{}}function yi(e){this.l=e.fc||null,this.j=e.ob||!1}xt(yi,ka);yi.prototype.g=function(){return new xs(this.l,this.j)};yi.prototype.i=function(e){return function(){return e}}({});function xs(e,t){Vt.call(this),this.F=e,this.u=t,this.m=void 0,this.readyState=La,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}xt(xs,Vt);var La=0;I=xs.prototype;I.open=function(e,t){if(this.readyState!=La)throw this.abort(),Error("Error reopening a connection");this.C=e,this.B=t,this.readyState=1,Xr(this)};I.send=function(e){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const t={headers:this.v,method:this.C,credentials:this.m,cache:void 0};e&&(t.body=e),(this.F||U).fetch(new Request(this.B,t)).then(this.$a.bind(this),this.ka.bind(this))};I.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,vi(this)),this.readyState=La};I.$a=function(e){if(this.g&&(this.l=e,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=e.headers,this.readyState=2,Xr(this)),this.g&&(this.readyState=3,Xr(this),this.g)))if(this.responseType==="arraybuffer")e.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(typeof U.ReadableStream<"u"&&"body"in e){if(this.j=e.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;Eh(this)}else e.text().then(this.Za.bind(this),this.ka.bind(this))};function Eh(e){e.j.read().then(e.Xa.bind(e)).catch(e.ka.bind(e))}I.Xa=function(e){if(this.g){if(this.u&&e.value)this.response.push(e.value);else if(!this.u){var t=e.value?e.value:new Uint8Array(0);(t=this.A.decode(t,{stream:!e.done}))&&(this.response=this.responseText+=t)}e.done?vi(this):Xr(this),this.readyState==3&&Eh(this)}};I.Za=function(e){this.g&&(this.response=this.responseText=e,vi(this))};I.Ya=function(e){this.g&&(this.response=e,vi(this))};I.ka=function(){this.g&&vi(this)};function vi(e){e.readyState=4,e.l=null,e.j=null,e.A=null,Xr(e)}I.setRequestHeader=function(e,t){this.v.append(e,t)};I.getResponseHeader=function(e){return this.h&&this.h.get(e.toLowerCase())||""};I.getAllResponseHeaders=function(){if(!this.h)return"";const e=[],t=this.h.entries();for(var n=t.next();!n.done;)n=n.value,e.push(n[0]+": "+n[1]),n=t.next();return e.join(`\r
`)};function Xr(e){e.onreadystatechange&&e.onreadystatechange.call(e)}Object.defineProperty(xs.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(e){this.m=e?"include":"same-origin"}});var ny=U.JSON.parse;function bt(e){Vt.call(this),this.headers=new Map,this.u=e||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=wh,this.L=this.M=!1}xt(bt,Vt);var wh="",ry=/^https?$/i,iy=["POST","PUT"];I=bt.prototype;I.Oa=function(e){this.M=e};I.ha=function(e,t,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+e);t=t?t.toUpperCase():"GET",this.I=e,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():$o.g(),this.C=this.u?ql(this.u):ql($o),this.g.onreadystatechange=Zt(this.La,this);try{this.G=!0,this.g.open(t,String(e),!0),this.G=!1}catch(s){Kl(this,s);return}if(e=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var i in r)n.set(i,r[i]);else if(typeof r.keys=="function"&&typeof r.get=="function")for(const s of r.keys())n.set(s,r.get(s));else throw Error("Unknown input type for opt_headers: "+String(r));r=Array.from(n.keys()).find(s=>s.toLowerCase()=="content-type"),i=U.FormData&&e instanceof U.FormData,!(0<=Fu(iy,t))||r||i||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[s,o]of n)this.g.setRequestHeader(s,o);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{Ah(this),0<this.B&&((this.L=sy(this.g))?(this.g.timeout=this.B,this.g.ontimeout=Zt(this.ua,this)):this.A=Ca(this.ua,this.B,this)),this.v=!0,this.g.send(e),this.v=!1}catch(s){Kl(this,s)}};function sy(e){return lr&&typeof e.timeout=="number"&&e.ontimeout!==void 0}I.ua=function(){typeof ya<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,Gt(this,"timeout"),this.abort(8))};function Kl(e,t){e.h=!1,e.g&&(e.l=!0,e.g.abort(),e.l=!1),e.j=t,e.m=5,Ih(e),Fs(e)}function Ih(e){e.F||(e.F=!0,Gt(e,"complete"),Gt(e,"error"))}I.abort=function(e){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=e||7,Gt(this,"complete"),Gt(this,"abort"),Fs(this))};I.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Fs(this,!0)),bt.$.N.call(this)};I.La=function(){this.s||(this.G||this.v||this.l?Th(this):this.kb())};I.kb=function(){Th(this)};function Th(e){if(e.h&&typeof ya<"u"&&(!e.C[1]||Fe(e)!=4||e.da()!=2)){if(e.v&&Fe(e)==4)Ca(e.La,0,e);else if(Gt(e,"readystatechange"),Fe(e)==4){e.h=!1;try{const o=e.da();t:switch(o){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var t=!0;break t;default:t=!1}var n;if(!(n=t)){var r;if(r=o===0){var i=String(e.I).match(hh)[1]||null;!i&&U.self&&U.self.location&&(i=U.self.location.protocol.slice(0,-1)),r=!ry.test(i?i.toLowerCase():"")}n=r}if(n)Gt(e,"complete"),Gt(e,"success");else{e.m=6;try{var s=2<Fe(e)?e.g.statusText:""}catch{s=""}e.j=s+" ["+e.da()+"]",Ih(e)}}finally{Fs(e)}}}}function Fs(e,t){if(e.g){Ah(e);const n=e.g,r=e.C[0]?()=>{}:null;e.g=null,e.C=null,t||Gt(e,"ready");try{n.onreadystatechange=r}catch{}}}function Ah(e){e.g&&e.L&&(e.g.ontimeout=null),e.A&&(U.clearTimeout(e.A),e.A=null)}I.isActive=function(){return!!this.g};function Fe(e){return e.g?e.g.readyState:0}I.da=function(){try{return 2<Fe(this)?this.g.status:-1}catch{return-1}};I.ja=function(){try{return this.g?this.g.responseText:""}catch{return""}};I.Wa=function(e){if(this.g){var t=this.g.responseText;return e&&t.indexOf(e)==0&&(t=t.substring(e.length)),ny(t)}};function Ql(e){try{if(!e.g)return null;if("response"in e.g)return e.g.response;switch(e.K){case wh:case"text":return e.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in e.g)return e.g.mozResponseArrayBuffer}return null}catch{return null}}function oy(e){const t={};e=(e.g&&2<=Fe(e)&&e.g.getAllResponseHeaders()||"").split(`\r
`);for(let r=0;r<e.length;r++){if(Hr(e[r]))continue;var n=D_(e[r]);const i=n[0];if(n=n[1],typeof n!="string")continue;n=n.trim();const s=t[i]||[];t[i]=s,s.push(n)}A_(t,function(r){return r.join(", ")})}I.Ia=function(){return this.m};I.Sa=function(){return typeof this.j=="string"?this.j:String(this.j)};function bh(e){let t="";return wa(e,function(n,r){t+=r,t+=":",t+=n,t+=`\r
`}),t}function Va(e,t,n){t:{for(r in n){var r=!1;break t}r=!0}r||(n=bh(n),typeof e=="string"?n!=null&&encodeURIComponent(String(n)):mt(e,t,n))}function Pr(e,t,n){return n&&n.internalChannelParams&&n.internalChannelParams[e]||t}function Sh(e){this.Ga=0,this.j=[],this.l=new Ds,this.pa=this.wa=this.I=this.Y=this.g=this.Da=this.F=this.na=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=Pr("failFast",!1,e),this.G=this.v=this.u=this.m=this.h=null,this.aa=!0,this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=Pr("baseRetryDelayMs",5e3,e),this.hb=Pr("retryDelaySeedMs",1e4,e),this.eb=Pr("forwardChannelMaxRetries",2,e),this.xa=Pr("forwardChannelRequestTimeoutMs",2e4,e),this.va=e&&e.xmlHttpFactory||void 0,this.Ha=e&&e.dc||!1,this.L=void 0,this.J=e&&e.supportsCrossDomainXhr||!1,this.K="",this.i=new mh(e&&e.concurrentRequestLimit),this.Ja=new Z_,this.P=e&&e.fastHandshake||!1,this.O=e&&e.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=e&&e.bc||!1,e&&e.Ea&&this.l.Ea(),e&&e.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&e&&e.detectBufferingProxy||!1,this.qa=void 0,e&&e.longPollingTimeout&&0<e.longPollingTimeout&&(this.qa=e.longPollingTimeout),this.oa=void 0,this.S=0,this.M=!1,this.ma=this.B=null}I=Sh.prototype;I.ra=8;I.H=1;function Ma(e){if(Ph(e),e.H==3){var t=e.W++,n=nn(e.I);if(mt(n,"SID",e.K),mt(n,"RID",t),mt(n,"TYPE","terminate"),Ei(e,n),t=new gi(e,e.l,t),t.L=2,t.v=Ms(nn(n)),n=!1,U.navigator&&U.navigator.sendBeacon)try{n=U.navigator.sendBeacon(t.v.toString(),"")}catch{}!n&&U.Image&&(new Image().src=t.v,n=!0),n||(t.g=Vh(t.l,null),t.g.ha(t.v)),t.G=Date.now(),_i(t)}Nh(e)}function Us(e){e.g&&(Fa(e),e.g.cancel(),e.g=null)}function Ph(e){Us(e),e.u&&(U.clearTimeout(e.u),e.u=null),as(e),e.i.cancel(),e.m&&(typeof e.m=="number"&&U.clearTimeout(e.m),e.m=null)}function $s(e){if(!gh(e.i)&&!e.m){e.m=!0;var t=e.Na;qr||Xu(),zr||(qr(),zr=!0),Pa.add(t,e),e.C=0}}function ay(e,t){return _h(e.i)>=e.i.j-(e.m?1:0)?!1:e.m?(e.j=t.F.concat(e.j),!0):e.H==1||e.H==2||e.C>=(e.cb?0:e.eb)?!1:(e.m=pi(Zt(e.Na,e,t),Oh(e,e.C)),e.C++,!0)}I.Na=function(e){if(this.m)if(this.m=null,this.H==1){if(!e){this.W=Math.floor(1e5*Math.random()),e=this.W++;const i=new gi(this,this.l,e);let s=this.s;if(this.U&&(s?(s=ju(s),Hu(s,this.U)):s=this.U),this.o!==null||this.O||(i.I=s,s=null),this.P)t:{for(var t=0,n=0;n<this.j.length;n++){e:{var r=this.j[n];if("__data__"in r.map&&(r=r.map.__data__,typeof r=="string")){r=r.length;break e}r=void 0}if(r===void 0)break;if(t+=r,4096<t){t=n;break t}if(t===4096||n===this.j.length-1){t=n+1;break t}}t=1e3}else t=1e3;t=Rh(this,i,t),n=nn(this.I),mt(n,"RID",e),mt(n,"CVER",22),this.F&&mt(n,"X-HTTP-Session-Id",this.F),Ei(this,n),s&&(this.O?t="headers="+encodeURIComponent(String(bh(s)))+"&"+t:this.o&&Va(n,this.o,s)),Na(this.i,i),this.bb&&mt(n,"TYPE","init"),this.P?(mt(n,"$req",t),mt(n,"SID","null"),i.aa=!0,jo(i,n,null)):jo(i,n,t),this.H=2}}else this.H==3&&(e?Xl(this,e):this.j.length==0||gh(this.i)||Xl(this))};function Xl(e,t){var n;t?n=t.m:n=e.W++;const r=nn(e.I);mt(r,"SID",e.K),mt(r,"RID",n),mt(r,"AID",e.V),Ei(e,r),e.o&&e.s&&Va(r,e.o,e.s),n=new gi(e,e.l,n,e.C+1),e.o===null&&(n.I=e.s),t&&(e.j=t.F.concat(e.j)),t=Rh(e,n,1e3),n.setTimeout(Math.round(.5*e.xa)+Math.round(.5*e.xa*Math.random())),Na(e.i,n),jo(n,r,t)}function Ei(e,t){e.na&&wa(e.na,function(n,r){mt(t,r,n)}),e.h&&uh({},function(n,r){mt(t,r,n)})}function Rh(e,t,n){n=Math.min(e.j.length,n);var r=e.h?Zt(e.h.Va,e.h,e):null;t:{var i=e.j;let s=-1;for(;;){const o=["count="+n];s==-1?0<n?(s=i[0].g,o.push("ofs="+s)):s=0:o.push("ofs="+s);let a=!0;for(let l=0;l<n;l++){let c=i[l].g;const u=i[l].map;if(c-=s,0>c)s=Math.max(0,i[l].g-100),a=!1;else try{ty(u,o,"req"+c+"_")}catch{r&&r(u)}}if(a){r=o.join("&");break t}}}return e=e.j.splice(0,n),t.F=e,r}function Ch(e){if(!e.g&&!e.u){e.ba=1;var t=e.Ma;qr||Xu(),zr||(qr(),zr=!0),Pa.add(t,e),e.A=0}}function xa(e){return e.g||e.u||3<=e.A?!1:(e.ba++,e.u=pi(Zt(e.Ma,e),Oh(e,e.A)),e.A++,!0)}I.Ma=function(){if(this.u=null,kh(this),this.ca&&!(this.M||this.g==null||0>=this.S)){var e=2*this.S;this.l.info("BP detection timer enabled: "+e),this.B=pi(Zt(this.jb,this),e)}};I.jb=function(){this.B&&(this.B=null,this.l.info("BP detection timeout reached."),this.l.info("Buffering proxy detected and switch to long-polling!"),this.G=!1,this.M=!0,de(10),Us(this),kh(this))};function Fa(e){e.B!=null&&(U.clearTimeout(e.B),e.B=null)}function kh(e){e.g=new gi(e,e.l,"rpc",e.ba),e.o===null&&(e.g.I=e.s),e.g.O=0;var t=nn(e.wa);mt(t,"RID","rpc"),mt(t,"SID",e.K),mt(t,"AID",e.V),mt(t,"CI",e.G?"0":"1"),!e.G&&e.qa&&mt(t,"TO",e.qa),mt(t,"TYPE","xmlhttp"),Ei(e,t),e.o&&e.s&&Va(t,e.o,e.s),e.L&&e.g.setTimeout(e.L);var n=e.g;e=e.pa,n.L=1,n.v=Ms(nn(t)),n.s=null,n.S=!0,oh(n,e)}I.ib=function(){this.v!=null&&(this.v=null,Us(this),xa(this),de(19))};function as(e){e.v!=null&&(U.clearTimeout(e.v),e.v=null)}function Dh(e,t){var n=null;if(e.g==t){as(e),Fa(e),e.g=null;var r=2}else if(Wo(e.i,t))n=t.F,yh(e.i,t),r=1;else return;if(e.H!=0){if(t.i)if(r==1){n=t.s?t.s.length:0,t=Date.now()-t.G;var i=e.C;r=Os(),Gt(r,new nh(r,n)),$s(e)}else Ch(e);else if(i=t.o,i==3||i==0&&0<t.ca||!(r==1&&ay(e,t)||r==2&&xa(e)))switch(n&&0<n.length&&(t=e.i,t.i=t.i.concat(n)),i){case 1:On(e,5);break;case 4:On(e,10);break;case 3:On(e,6);break;default:On(e,2)}}}function Oh(e,t){let n=e.ab+Math.floor(Math.random()*e.hb);return e.isActive()||(n*=2),n*t}function On(e,t){if(e.l.info("Error code "+t),t==2){var n=null;e.h&&(n=null);var r=Zt(e.pb,e);n||(n=new Vn("//www.google.com/images/cleardot.gif"),U.location&&U.location.protocol=="http"||ss(n,"https"),Ms(n)),ey(n.toString(),r)}else de(2);e.H=0,e.h&&e.h.za(t),Nh(e),Ph(e)}I.pb=function(e){e?(this.l.info("Successfully pinged google.com"),de(2)):(this.l.info("Failed to ping google.com"),de(1))};function Nh(e){if(e.H=0,e.ma=[],e.h){const t=vh(e.i);(t.length!=0||e.j.length!=0)&&($l(e.ma,t),$l(e.ma,e.j),e.i.i.length=0,va(e.j),e.j.length=0),e.h.ya()}}function Lh(e,t,n){var r=n instanceof Vn?nn(n):new Vn(n);if(r.g!="")t&&(r.g=t+"."+r.g),os(r,r.m);else{var i=U.location;r=i.protocol,t=t?t+"."+i.hostname:i.hostname,i=+i.port;var s=new Vn(null);r&&ss(s,r),t&&(s.g=t),i&&os(s,i),n&&(s.l=n),r=s}return n=e.F,t=e.Da,n&&t&&mt(r,n,t),mt(r,"VER",e.ra),Ei(e,r),r}function Vh(e,t,n){if(t&&!e.J)throw Error("Can't create secondary domain capable XhrIo object.");return t=n&&e.Ha&&!e.va?new bt(new yi({ob:!0})):new bt(e.va),t.Oa(e.J),t}I.isActive=function(){return!!this.h&&this.h.isActive(this)};function Mh(){}I=Mh.prototype;I.Ba=function(){};I.Aa=function(){};I.za=function(){};I.ya=function(){};I.isActive=function(){return!0};I.Va=function(){};function ls(){if(lr&&!(10<=Number(E_)))throw Error("Environmental error: no available transport.")}ls.prototype.g=function(e,t){return new we(e,t)};function we(e,t){Vt.call(this),this.g=new Sh(t),this.l=e,this.h=t&&t.messageUrlParams||null,e=t&&t.messageHeaders||null,t&&t.clientProtocolHeaderRequired&&(e?e["X-Client-Protocol"]="webchannel":e={"X-Client-Protocol":"webchannel"}),this.g.s=e,e=t&&t.initMessageHeaders||null,t&&t.messageContentType&&(e?e["X-WebChannel-Content-Type"]=t.messageContentType:e={"X-WebChannel-Content-Type":t.messageContentType}),t&&t.Ca&&(e?e["X-WebChannel-Client-Profile"]=t.Ca:e={"X-WebChannel-Client-Profile":t.Ca}),this.g.U=e,(e=t&&t.cc)&&!Hr(e)&&(this.g.o=e),this.A=t&&t.supportsCrossDomainXhr||!1,this.v=t&&t.sendRawJson||!1,(t=t&&t.httpSessionIdParam)&&!Hr(t)&&(this.g.F=t,e=this.h,e!==null&&t in e&&(e=this.h,t in e&&delete e[t])),this.j=new _r(this)}xt(we,Vt);we.prototype.m=function(){this.g.h=this.j,this.A&&(this.g.J=!0);var e=this.g,t=this.l,n=this.h||void 0;de(0),e.Y=t,e.na=n||{},e.G=e.aa,e.I=Lh(e,null,e.Y),$s(e)};we.prototype.close=function(){Ma(this.g)};we.prototype.u=function(e){var t=this.g;if(typeof e=="string"){var n={};n.__data__=e,e=n}else this.v&&(n={},n.__data__=Sa(e),e=n);t.j.push(new X_(t.fb++,e)),t.H==3&&$s(t)};we.prototype.N=function(){this.g.h=null,delete this.j,Ma(this.g),delete this.g,we.$.N.call(this)};function xh(e){Da.call(this),e.__headers__&&(this.headers=e.__headers__,this.statusCode=e.__status__,delete e.__headers__,delete e.__status__);var t=e.__sm__;if(t){t:{for(const n in t){e=n;break t}e=void 0}(this.i=e)&&(e=this.i,t=t!==null&&e in t?t[e]:void 0),this.data=t}else this.data=e}xt(xh,Da);function Fh(){Oa.call(this),this.status=1}xt(Fh,Oa);function _r(e){this.g=e}xt(_r,Mh);_r.prototype.Ba=function(){Gt(this.g,"a")};_r.prototype.Aa=function(e){Gt(this.g,new xh(e))};_r.prototype.za=function(e){Gt(this.g,new Fh)};_r.prototype.ya=function(){Gt(this.g,"b")};function ly(){this.blockSize=-1}function He(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}xt(He,ly);He.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0};function yo(e,t,n){n||(n=0);var r=Array(16);if(typeof t=="string")for(var i=0;16>i;++i)r[i]=t.charCodeAt(n++)|t.charCodeAt(n++)<<8|t.charCodeAt(n++)<<16|t.charCodeAt(n++)<<24;else for(i=0;16>i;++i)r[i]=t[n++]|t[n++]<<8|t[n++]<<16|t[n++]<<24;t=e.g[0],n=e.g[1],i=e.g[2];var s=e.g[3],o=t+(s^n&(i^s))+r[0]+3614090360&4294967295;t=n+(o<<7&4294967295|o>>>25),o=s+(i^t&(n^i))+r[1]+3905402710&4294967295,s=t+(o<<12&4294967295|o>>>20),o=i+(n^s&(t^n))+r[2]+606105819&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(t^i&(s^t))+r[3]+3250441966&4294967295,n=i+(o<<22&4294967295|o>>>10),o=t+(s^n&(i^s))+r[4]+4118548399&4294967295,t=n+(o<<7&4294967295|o>>>25),o=s+(i^t&(n^i))+r[5]+1200080426&4294967295,s=t+(o<<12&4294967295|o>>>20),o=i+(n^s&(t^n))+r[6]+2821735955&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(t^i&(s^t))+r[7]+4249261313&4294967295,n=i+(o<<22&4294967295|o>>>10),o=t+(s^n&(i^s))+r[8]+1770035416&4294967295,t=n+(o<<7&4294967295|o>>>25),o=s+(i^t&(n^i))+r[9]+2336552879&4294967295,s=t+(o<<12&4294967295|o>>>20),o=i+(n^s&(t^n))+r[10]+4294925233&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(t^i&(s^t))+r[11]+2304563134&4294967295,n=i+(o<<22&4294967295|o>>>10),o=t+(s^n&(i^s))+r[12]+1804603682&4294967295,t=n+(o<<7&4294967295|o>>>25),o=s+(i^t&(n^i))+r[13]+4254626195&4294967295,s=t+(o<<12&4294967295|o>>>20),o=i+(n^s&(t^n))+r[14]+2792965006&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(t^i&(s^t))+r[15]+1236535329&4294967295,n=i+(o<<22&4294967295|o>>>10),o=t+(i^s&(n^i))+r[1]+4129170786&4294967295,t=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(t^n))+r[6]+3225465664&4294967295,s=t+(o<<9&4294967295|o>>>23),o=i+(t^n&(s^t))+r[11]+643717713&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^t&(i^s))+r[0]+3921069994&4294967295,n=i+(o<<20&4294967295|o>>>12),o=t+(i^s&(n^i))+r[5]+3593408605&4294967295,t=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(t^n))+r[10]+38016083&4294967295,s=t+(o<<9&4294967295|o>>>23),o=i+(t^n&(s^t))+r[15]+3634488961&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^t&(i^s))+r[4]+3889429448&4294967295,n=i+(o<<20&4294967295|o>>>12),o=t+(i^s&(n^i))+r[9]+568446438&4294967295,t=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(t^n))+r[14]+3275163606&4294967295,s=t+(o<<9&4294967295|o>>>23),o=i+(t^n&(s^t))+r[3]+4107603335&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^t&(i^s))+r[8]+1163531501&4294967295,n=i+(o<<20&4294967295|o>>>12),o=t+(i^s&(n^i))+r[13]+2850285829&4294967295,t=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(t^n))+r[2]+4243563512&4294967295,s=t+(o<<9&4294967295|o>>>23),o=i+(t^n&(s^t))+r[7]+1735328473&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^t&(i^s))+r[12]+2368359562&4294967295,n=i+(o<<20&4294967295|o>>>12),o=t+(n^i^s)+r[5]+4294588738&4294967295,t=n+(o<<4&4294967295|o>>>28),o=s+(t^n^i)+r[8]+2272392833&4294967295,s=t+(o<<11&4294967295|o>>>21),o=i+(s^t^n)+r[11]+1839030562&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^t)+r[14]+4259657740&4294967295,n=i+(o<<23&4294967295|o>>>9),o=t+(n^i^s)+r[1]+2763975236&4294967295,t=n+(o<<4&4294967295|o>>>28),o=s+(t^n^i)+r[4]+1272893353&4294967295,s=t+(o<<11&4294967295|o>>>21),o=i+(s^t^n)+r[7]+4139469664&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^t)+r[10]+3200236656&4294967295,n=i+(o<<23&4294967295|o>>>9),o=t+(n^i^s)+r[13]+681279174&4294967295,t=n+(o<<4&4294967295|o>>>28),o=s+(t^n^i)+r[0]+3936430074&4294967295,s=t+(o<<11&4294967295|o>>>21),o=i+(s^t^n)+r[3]+3572445317&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^t)+r[6]+76029189&4294967295,n=i+(o<<23&4294967295|o>>>9),o=t+(n^i^s)+r[9]+3654602809&4294967295,t=n+(o<<4&4294967295|o>>>28),o=s+(t^n^i)+r[12]+3873151461&4294967295,s=t+(o<<11&4294967295|o>>>21),o=i+(s^t^n)+r[15]+530742520&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^t)+r[2]+3299628645&4294967295,n=i+(o<<23&4294967295|o>>>9),o=t+(i^(n|~s))+r[0]+4096336452&4294967295,t=n+(o<<6&4294967295|o>>>26),o=s+(n^(t|~i))+r[7]+1126891415&4294967295,s=t+(o<<10&4294967295|o>>>22),o=i+(t^(s|~n))+r[14]+2878612391&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~t))+r[5]+4237533241&4294967295,n=i+(o<<21&4294967295|o>>>11),o=t+(i^(n|~s))+r[12]+1700485571&4294967295,t=n+(o<<6&4294967295|o>>>26),o=s+(n^(t|~i))+r[3]+2399980690&4294967295,s=t+(o<<10&4294967295|o>>>22),o=i+(t^(s|~n))+r[10]+4293915773&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~t))+r[1]+2240044497&4294967295,n=i+(o<<21&4294967295|o>>>11),o=t+(i^(n|~s))+r[8]+1873313359&4294967295,t=n+(o<<6&4294967295|o>>>26),o=s+(n^(t|~i))+r[15]+4264355552&4294967295,s=t+(o<<10&4294967295|o>>>22),o=i+(t^(s|~n))+r[6]+2734768916&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~t))+r[13]+1309151649&4294967295,n=i+(o<<21&4294967295|o>>>11),o=t+(i^(n|~s))+r[4]+4149444226&4294967295,t=n+(o<<6&4294967295|o>>>26),o=s+(n^(t|~i))+r[11]+3174756917&4294967295,s=t+(o<<10&4294967295|o>>>22),o=i+(t^(s|~n))+r[2]+718787259&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~t))+r[9]+3951481745&4294967295,e.g[0]=e.g[0]+t&4294967295,e.g[1]=e.g[1]+(i+(o<<21&4294967295|o>>>11))&4294967295,e.g[2]=e.g[2]+i&4294967295,e.g[3]=e.g[3]+s&4294967295}He.prototype.j=function(e,t){t===void 0&&(t=e.length);for(var n=t-this.blockSize,r=this.m,i=this.h,s=0;s<t;){if(i==0)for(;s<=n;)yo(this,e,s),s+=this.blockSize;if(typeof e=="string"){for(;s<t;)if(r[i++]=e.charCodeAt(s++),i==this.blockSize){yo(this,r),i=0;break}}else for(;s<t;)if(r[i++]=e[s++],i==this.blockSize){yo(this,r),i=0;break}}this.h=i,this.i+=t};He.prototype.l=function(){var e=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);e[0]=128;for(var t=1;t<e.length-8;++t)e[t]=0;var n=8*this.i;for(t=e.length-8;t<e.length;++t)e[t]=n&255,n/=256;for(this.j(e),e=Array(16),t=n=0;4>t;++t)for(var r=0;32>r;r+=8)e[n++]=this.g[t]>>>r&255;return e};function st(e,t){this.h=t;for(var n=[],r=!0,i=e.length-1;0<=i;i--){var s=e[i]|0;r&&s==t||(n[i]=s,r=!1)}this.g=n}var cy={};function Ua(e){return-128<=e&&128>e?__(e,function(t){return new st([t|0],0>t?-1:0)}):new st([e|0],0>e?-1:0)}function Ue(e){if(isNaN(e)||!isFinite(e))return rr;if(0>e)return zt(Ue(-e));for(var t=[],n=1,r=0;e>=n;r++)t[r]=e/n|0,n*=qo;return new st(t,0)}function Uh(e,t){if(e.length==0)throw Error("number format error: empty string");if(t=t||10,2>t||36<t)throw Error("radix out of range: "+t);if(e.charAt(0)=="-")return zt(Uh(e.substring(1),t));if(0<=e.indexOf("-"))throw Error('number format error: interior "-" character');for(var n=Ue(Math.pow(t,8)),r=rr,i=0;i<e.length;i+=8){var s=Math.min(8,e.length-i),o=parseInt(e.substring(i,i+s),t);8>s?(s=Ue(Math.pow(t,s)),r=r.R(s).add(Ue(o))):(r=r.R(n),r=r.add(Ue(o)))}return r}var qo=4294967296,rr=Ua(0),zo=Ua(1),Jl=Ua(16777216);I=st.prototype;I.ea=function(){if(Te(this))return-zt(this).ea();for(var e=0,t=1,n=0;n<this.g.length;n++){var r=this.D(n);e+=(0<=r?r:qo+r)*t,t*=qo}return e};I.toString=function(e){if(e=e||10,2>e||36<e)throw Error("radix out of range: "+e);if(Je(this))return"0";if(Te(this))return"-"+zt(this).toString(e);for(var t=Ue(Math.pow(e,6)),n=this,r="";;){var i=us(n,t).g;n=cs(n,i.R(t));var s=((0<n.g.length?n.g[0]:n.h)>>>0).toString(e);if(n=i,Je(n))return s+r;for(;6>s.length;)s="0"+s;r=s+r}};I.D=function(e){return 0>e?0:e<this.g.length?this.g[e]:this.h};function Je(e){if(e.h!=0)return!1;for(var t=0;t<e.g.length;t++)if(e.g[t]!=0)return!1;return!0}function Te(e){return e.h==-1}I.X=function(e){return e=cs(this,e),Te(e)?-1:Je(e)?0:1};function zt(e){for(var t=e.g.length,n=[],r=0;r<t;r++)n[r]=~e.g[r];return new st(n,~e.h).add(zo)}I.abs=function(){return Te(this)?zt(this):this};I.add=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],r=0,i=0;i<=t;i++){var s=r+(this.D(i)&65535)+(e.D(i)&65535),o=(s>>>16)+(this.D(i)>>>16)+(e.D(i)>>>16);r=o>>>16,s&=65535,o&=65535,n[i]=o<<16|s}return new st(n,n[n.length-1]&-2147483648?-1:0)};function cs(e,t){return e.add(zt(t))}I.R=function(e){if(Je(this)||Je(e))return rr;if(Te(this))return Te(e)?zt(this).R(zt(e)):zt(zt(this).R(e));if(Te(e))return zt(this.R(zt(e)));if(0>this.X(Jl)&&0>e.X(Jl))return Ue(this.ea()*e.ea());for(var t=this.g.length+e.g.length,n=[],r=0;r<2*t;r++)n[r]=0;for(r=0;r<this.g.length;r++)for(var i=0;i<e.g.length;i++){var s=this.D(r)>>>16,o=this.D(r)&65535,a=e.D(i)>>>16,l=e.D(i)&65535;n[2*r+2*i]+=o*l,Li(n,2*r+2*i),n[2*r+2*i+1]+=s*l,Li(n,2*r+2*i+1),n[2*r+2*i+1]+=o*a,Li(n,2*r+2*i+1),n[2*r+2*i+2]+=s*a,Li(n,2*r+2*i+2)}for(r=0;r<t;r++)n[r]=n[2*r+1]<<16|n[2*r];for(r=t;r<2*t;r++)n[r]=0;return new st(n,0)};function Li(e,t){for(;(e[t]&65535)!=e[t];)e[t+1]+=e[t]>>>16,e[t]&=65535,t++}function Rr(e,t){this.g=e,this.h=t}function us(e,t){if(Je(t))throw Error("division by zero");if(Je(e))return new Rr(rr,rr);if(Te(e))return t=us(zt(e),t),new Rr(zt(t.g),zt(t.h));if(Te(t))return t=us(e,zt(t)),new Rr(zt(t.g),t.h);if(30<e.g.length){if(Te(e)||Te(t))throw Error("slowDivide_ only works with positive integers.");for(var n=zo,r=t;0>=r.X(e);)n=Yl(n),r=Yl(r);var i=Kn(n,1),s=Kn(r,1);for(r=Kn(r,2),n=Kn(n,2);!Je(r);){var o=s.add(r);0>=o.X(e)&&(i=i.add(n),s=o),r=Kn(r,1),n=Kn(n,1)}return t=cs(e,i.R(t)),new Rr(i,t)}for(i=rr;0<=e.X(t);){for(n=Math.max(1,Math.floor(e.ea()/t.ea())),r=Math.ceil(Math.log(n)/Math.LN2),r=48>=r?1:Math.pow(2,r-48),s=Ue(n),o=s.R(t);Te(o)||0<o.X(e);)n-=r,s=Ue(n),o=s.R(t);Je(s)&&(s=zo),i=i.add(s),e=cs(e,o)}return new Rr(i,e)}I.gb=function(e){return us(this,e).h};I.and=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],r=0;r<t;r++)n[r]=this.D(r)&e.D(r);return new st(n,this.h&e.h)};I.or=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],r=0;r<t;r++)n[r]=this.D(r)|e.D(r);return new st(n,this.h|e.h)};I.xor=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],r=0;r<t;r++)n[r]=this.D(r)^e.D(r);return new st(n,this.h^e.h)};function Yl(e){for(var t=e.g.length+1,n=[],r=0;r<t;r++)n[r]=e.D(r)<<1|e.D(r-1)>>>31;return new st(n,e.h)}function Kn(e,t){var n=t>>5;t%=32;for(var r=e.g.length-n,i=[],s=0;s<r;s++)i[s]=0<t?e.D(s+n)>>>t|e.D(s+n+1)<<32-t:e.D(s+n);return new st(i,e.h)}ls.prototype.createWebChannel=ls.prototype.g;we.prototype.send=we.prototype.u;we.prototype.open=we.prototype.m;we.prototype.close=we.prototype.close;Ns.NO_ERROR=0;Ns.TIMEOUT=8;Ns.HTTP_ERROR=6;rh.COMPLETE="complete";ih.EventType=mi;mi.OPEN="a";mi.CLOSE="b";mi.ERROR="c";mi.MESSAGE="d";Vt.prototype.listen=Vt.prototype.O;bt.prototype.listenOnce=bt.prototype.P;bt.prototype.getLastError=bt.prototype.Sa;bt.prototype.getLastErrorCode=bt.prototype.Ia;bt.prototype.getStatus=bt.prototype.da;bt.prototype.getResponseJson=bt.prototype.Wa;bt.prototype.getResponseText=bt.prototype.ja;bt.prototype.send=bt.prototype.ha;bt.prototype.setWithCredentials=bt.prototype.Oa;He.prototype.digest=He.prototype.l;He.prototype.reset=He.prototype.reset;He.prototype.update=He.prototype.j;st.prototype.add=st.prototype.add;st.prototype.multiply=st.prototype.R;st.prototype.modulo=st.prototype.gb;st.prototype.compare=st.prototype.X;st.prototype.toNumber=st.prototype.ea;st.prototype.toString=st.prototype.toString;st.prototype.getBits=st.prototype.D;st.fromNumber=Ue;st.fromString=Uh;var uy=function(){return new ls},hy=function(){return Os()},vo=Ns,dy=rh,fy=qn,Zl={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20},py=yi,Vi=ih,my=bt,gy=st;const tc="@firebase/firestore";/**
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
 */class Xt{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}Xt.UNAUTHENTICATED=new Xt(null),Xt.GOOGLE_CREDENTIALS=new Xt("google-credentials-uid"),Xt.FIRST_PARTY=new Xt("first-party-uid"),Xt.MOCK_USER=new Xt("mock-user");/**
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
 */let yr="10.2.0";/**
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
 */const jn=new aa("@firebase/firestore");function ec(){return jn.logLevel}function O(e,...t){if(jn.logLevel<=tt.DEBUG){const n=t.map($a);jn.debug(`Firestore (${yr}): ${e}`,...n)}}function Hn(e,...t){if(jn.logLevel<=tt.ERROR){const n=t.map($a);jn.error(`Firestore (${yr}): ${e}`,...n)}}function hs(e,...t){if(jn.logLevel<=tt.WARN){const n=t.map($a);jn.warn(`Firestore (${yr}): ${e}`,...n)}}function $a(e){if(typeof e=="string")return e;try{/**
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
 */function X(e="Unexpected state"){const t=`FIRESTORE (${yr}) INTERNAL ASSERTION FAILED: `+e;throw Hn(t),new Error(t)}function Mt(e,t){e||X()}function gt(e,t){return e}/**
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
 */const v={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class L extends sn{constructor(t,n){super(t,n),this.code=t,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class Mn{constructor(){this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}}/**
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
 */class $h{constructor(t,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class _y{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,n){t.enqueueRetryable(()=>n(Xt.UNAUTHENTICATED))}shutdown(){}}class yy{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,n){this.changeListener=n,t.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class vy{constructor(t){this.t=t,this.currentUser=Xt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,n){let r=this.i;const i=l=>this.i!==r?(r=this.i,n(l)):Promise.resolve();let s=new Mn;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new Mn,t.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const l=s;t.enqueueRetryable(async()=>{await l.promise,await i(this.currentUser)})},a=l=>{O("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(l=>a(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?a(l):(O("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new Mn)}},0),o()}getToken(){const t=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==t?(O("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Mt(typeof r.accessToken=="string"),new $h(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const t=this.auth&&this.auth.getUid();return Mt(t===null||typeof t=="string"),new Xt(t)}}class Ey{constructor(t,n,r){this.l=t,this.h=n,this.P=r,this.type="FirstParty",this.user=Xt.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const t=this.T();return t&&this.I.set("Authorization",t),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class wy{constructor(t,n,r){this.l=t,this.h=n,this.P=r}getToken(){return Promise.resolve(new Ey(this.l,this.h,this.P))}start(t,n){t.enqueueRetryable(()=>n(Xt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Iy{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Ty{constructor(t){this.A=t,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(t,n){const r=s=>{s.error!=null&&O("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.R;return this.R=s.token,O("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{t.enqueueRetryable(()=>r(s))};const i=s=>{O("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.appCheck.addTokenListener(this.o)};this.A.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.A.getImmediate({optional:!0});s?i(s):O("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(n=>n?(Mt(typeof n.token=="string"),this.R=n.token,new Iy(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
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
 */function Ay(e){const t=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(e);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(n);else for(let r=0;r<e;r++)n[r]=Math.floor(256*Math.random());return n}/**
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
 */class Bh{static V(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/t.length)*t.length;let r="";for(;r.length<20;){const i=Ay(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=t.charAt(i[s]%t.length))}return r}}function dt(e,t){return e<t?-1:e>t?1:0}function cr(e,t,n){return e.length===t.length&&e.every((r,i)=>n(r,t[i]))}/**
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
 */class Lt{constructor(t,n){if(this.seconds=t,this.nanoseconds=n,n<0)throw new L(v.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new L(v.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(t<-62135596800)throw new L(v.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new L(v.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}static now(){return Lt.fromMillis(Date.now())}static fromDate(t){return Lt.fromMillis(t.getTime())}static fromMillis(t){const n=Math.floor(t/1e3),r=Math.floor(1e6*(t-1e3*n));return new Lt(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(t){return this.seconds===t.seconds?dt(this.nanoseconds,t.nanoseconds):dt(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds- -62135596800;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class wt{constructor(t){this.timestamp=t}static fromTimestamp(t){return new wt(t)}static min(){return new wt(new Lt(0,0))}static max(){return new wt(new Lt(253402300799,999999999))}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class Jr{constructor(t,n,r){n===void 0?n=0:n>t.length&&X(),r===void 0?r=t.length-n:r>t.length-n&&X(),this.segments=t,this.offset=n,this.len=r}get length(){return this.len}isEqual(t){return Jr.comparator(this,t)===0}child(t){const n=this.segments.slice(this.offset,this.limit());return t instanceof Jr?t.forEach(r=>{n.push(r)}):n.push(t),this.construct(n)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==t.get(n))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==t.get(n))return!1;return!0}forEach(t){for(let n=this.offset,r=this.limit();n<r;n++)t(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,n){const r=Math.min(t.length,n.length);for(let i=0;i<r;i++){const s=t.get(i),o=n.get(i);if(s<o)return-1;if(s>o)return 1}return t.length<n.length?-1:t.length>n.length?1:0}}class At extends Jr{construct(t,n,r){return new At(t,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...t){const n=[];for(const r of t){if(r.indexOf("//")>=0)throw new L(v.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new At(n)}static emptyPath(){return new At([])}}const by=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Yt extends Jr{construct(t,n,r){return new Yt(t,n,r)}static isValidIdentifier(t){return by.test(t)}canonicalString(){return this.toArray().map(t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Yt.isValidIdentifier(t)||(t="`"+t+"`"),t)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Yt(["__name__"])}static fromServerFormat(t){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new L(v.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<t.length;){const a=t[i];if(a==="\\"){if(i+1===t.length)throw new L(v.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const l=t[i+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new L(v.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);r+=l,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(r+=a,i++):(s(),i++)}if(s(),o)throw new L(v.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new Yt(n)}static emptyPath(){return new Yt([])}}/**
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
 */class H{constructor(t){this.path=t}static fromPath(t){return new H(At.fromString(t))}static fromName(t){return new H(At.fromString(t).popFirst(5))}static empty(){return new H(At.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return t!==null&&At.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,n){return At.comparator(t.path,n.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new H(new At(t.slice()))}}function Sy(e,t){const n=e.toTimestamp().seconds,r=e.toTimestamp().nanoseconds+1,i=wt.fromTimestamp(r===1e9?new Lt(n+1,0):new Lt(n,r));return new En(i,H.empty(),t)}function Py(e){return new En(e.readTime,e.key,-1)}class En{constructor(t,n,r){this.readTime=t,this.documentKey=n,this.largestBatchId=r}static min(){return new En(wt.min(),H.empty(),-1)}static max(){return new En(wt.max(),H.empty(),-1)}}function Ry(e,t){let n=e.readTime.compareTo(t.readTime);return n!==0?n:(n=H.comparator(e.documentKey,t.documentKey),n!==0?n:dt(e.largestBatchId,t.largestBatchId))}/**
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
 */const Cy="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class ky{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(t=>t())}}/**
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
 */async function jh(e){if(e.code!==v.FAILED_PRECONDITION||e.message!==Cy)throw e;O("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class E{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(t){return this.next(void 0,t)}next(t,n){return this.callbackAttached&&X(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(t,this.result):new E((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(t,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((t,n)=>{this.next(t,n)})}wrapUserFunction(t){try{const n=t();return n instanceof E?n:E.resolve(n)}catch(n){return E.reject(n)}}wrapSuccess(t,n){return t?this.wrapUserFunction(()=>t(n)):E.resolve(n)}wrapFailure(t,n){return t?this.wrapUserFunction(()=>t(n)):E.reject(n)}static resolve(t){return new E((n,r)=>{n(t)})}static reject(t){return new E((n,r)=>{r(t)})}static waitFor(t){return new E((n,r)=>{let i=0,s=0,o=!1;t.forEach(a=>{++i,a.next(()=>{++s,o&&s===i&&n()},l=>r(l))}),o=!0,s===i&&n()})}static or(t){let n=E.resolve(!1);for(const r of t)n=n.next(i=>i?E.resolve(i):r());return n}static forEach(t,n){const r=[];return t.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(t,n){return new E((r,i)=>{const s=t.length,o=new Array(s);let a=0;for(let l=0;l<s;l++){const c=l;n(t[c]).next(u=>{o[c]=u,++a,a===s&&r(o)},u=>i(u))}})}static doWhile(t,n){return new E((r,i)=>{const s=()=>{t()===!0?n().next(()=>{s()},i):r()};s()})}}function Bs(e){return e.name==="IndexedDbTransactionError"}/**
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
 */class Hh{constructor(t,n){this.previousValue=t,n&&(n.sequenceNumberHandler=r=>this.oe(r),this._e=r=>n.writeSequenceNumber(r))}oe(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this._e&&this._e(t),t}}Hh.ae=-1;function Ba(e){return e==null}function ds(e){return e===0&&1/e==-1/0}function Dy(e){return typeof e=="number"&&Number.isInteger(e)&&!ds(e)&&e<=Number.MAX_SAFE_INTEGER&&e>=Number.MIN_SAFE_INTEGER}/**
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
 */function nc(e){let t=0;for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t++;return t}function vr(e,t){for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t(n,e[n])}function Wh(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}/**
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
 */class ye{constructor(t,n){this.comparator=t,this.root=n||Ht.EMPTY}insert(t,n){return new ye(this.comparator,this.root.insert(t,n,this.comparator).copy(null,null,Ht.BLACK,null,null))}remove(t){return new ye(this.comparator,this.root.remove(t,this.comparator).copy(null,null,Ht.BLACK,null,null))}get(t){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(t,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(t){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(t,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal((n,r)=>(t(n,r),!1))}toString(){const t=[];return this.inorderTraversal((n,r)=>(t.push(`${n}:${r}`),!1)),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new Mi(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new Mi(this.root,t,this.comparator,!1)}getReverseIterator(){return new Mi(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new Mi(this.root,t,this.comparator,!0)}}class Mi{constructor(t,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!t.isEmpty();)if(s=n?r(t.key,n):1,n&&i&&(s*=-1),s<0)t=this.isReverse?t.left:t.right;else{if(s===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const n={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class Ht{constructor(t,n,r,i,s){this.key=t,this.value=n,this.color=r??Ht.RED,this.left=i??Ht.EMPTY,this.right=s??Ht.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,n,r,i,s){return new Ht(t??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,n,r){let i=this;const s=r(t,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(t,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(t,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return Ht.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,n){let r,i=this;if(n(t,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(t,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(t,i.key)===0){if(i.right.isEmpty())return Ht.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(t,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,Ht.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,Ht.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,n)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw X();const t=this.left.check();if(t!==this.right.check())throw X();return t+(this.isRed()?0:1)}}Ht.EMPTY=null,Ht.RED=!0,Ht.BLACK=!1;Ht.EMPTY=new class{constructor(){this.size=0}get key(){throw X()}get value(){throw X()}get color(){throw X()}get left(){throw X()}get right(){throw X()}copy(t,n,r,i,s){return this}insert(t,n,r){return new Ht(t,n)}remove(t,n){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class fe{constructor(t){this.comparator=t,this.data=new ye(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal((n,r)=>(t(n),!1))}forEachInRange(t,n){const r=this.data.getIteratorFrom(t[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,t[1])>=0)return;n(i.key)}}forEachWhile(t,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!t(r.getNext().key))return}firstAfterOrEqual(t){const n=this.data.getIteratorFrom(t);return n.hasNext()?n.getNext().key:null}getIterator(){return new rc(this.data.getIterator())}getIteratorFrom(t){return new rc(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let n=this;return n.size<t.size&&(n=t,t=this),t.forEach(r=>{n=n.add(r)}),n}isEqual(t){if(!(t instanceof fe)||this.size!==t.size)return!1;const n=this.data.getIterator(),r=t.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const t=[];return this.forEach(n=>{t.push(n)}),t}toString(){const t=[];return this.forEach(n=>t.push(n)),"SortedSet("+t.toString()+")"}copy(t){const n=new fe(this.comparator);return n.data=t,n}}class rc{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class Ee{constructor(t){this.fields=t,t.sort(Yt.comparator)}static empty(){return new Ee([])}unionWith(t){let n=new fe(Yt.comparator);for(const r of this.fields)n=n.add(r);for(const r of t)n=n.add(r);return new Ee(n.toArray())}covers(t){for(const n of this.fields)if(n.isPrefixOf(t))return!0;return!1}isEqual(t){return cr(this.fields,t.fields,(n,r)=>n.isEqual(r))}}/**
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
 */class Oy extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class rn{constructor(t){this.binaryString=t}static fromBase64String(t){const n=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new Oy("Invalid base64 string: "+s):s}}(t);return new rn(n)}static fromUint8Array(t){const n=function(i){let s="";for(let o=0;o<i.length;++o)s+=String.fromCharCode(i[o]);return s}(t);return new rn(n)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return dt(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}rn.EMPTY_BYTE_STRING=new rn("");const Ny=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Wn(e){if(Mt(!!e),typeof e=="string"){let t=0;const n=Ny.exec(e);if(Mt(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),t=Number(i)}const r=new Date(e);return{seconds:Math.floor(r.getTime()/1e3),nanos:t}}return{seconds:Wt(e.seconds),nanos:Wt(e.nanos)}}function Wt(e){return typeof e=="number"?e:typeof e=="string"?Number(e):0}function Yr(e){return typeof e=="string"?rn.fromBase64String(e):rn.fromUint8Array(e)}/**
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
 */function ja(e){var t,n;return((n=(((t=e?.mapValue)===null||t===void 0?void 0:t.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function qh(e){const t=e.mapValue.fields.__previous_value__;return ja(t)?qh(t):t}function fs(e){const t=Wn(e.mapValue.fields.__local_write_time__.timestampValue);return new Lt(t.seconds,t.nanos)}/**
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
 */class Ly{constructor(t,n,r,i,s,o,a,l,c){this.databaseId=t,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=l,this.useFetchStreams=c}}class ps{constructor(t,n){this.projectId=t,this.database=n||"(default)"}static empty(){return new ps("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(t){return t instanceof ps&&t.projectId===this.projectId&&t.database===this.database}}/**
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
 */const xi={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function ur(e){return"nullValue"in e?0:"booleanValue"in e?1:"integerValue"in e||"doubleValue"in e?2:"timestampValue"in e?3:"stringValue"in e?5:"bytesValue"in e?6:"referenceValue"in e?7:"geoPointValue"in e?8:"arrayValue"in e?9:"mapValue"in e?ja(e)?4:Vy(e)?9007199254740991:10:X()}function We(e,t){if(e===t)return!0;const n=ur(e);if(n!==ur(t))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return e.booleanValue===t.booleanValue;case 4:return fs(e).isEqual(fs(t));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const o=Wn(i.timestampValue),a=Wn(s.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos}(e,t);case 5:return e.stringValue===t.stringValue;case 6:return function(i,s){return Yr(i.bytesValue).isEqual(Yr(s.bytesValue))}(e,t);case 7:return e.referenceValue===t.referenceValue;case 8:return function(i,s){return Wt(i.geoPointValue.latitude)===Wt(s.geoPointValue.latitude)&&Wt(i.geoPointValue.longitude)===Wt(s.geoPointValue.longitude)}(e,t);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return Wt(i.integerValue)===Wt(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const o=Wt(i.doubleValue),a=Wt(s.doubleValue);return o===a?ds(o)===ds(a):isNaN(o)&&isNaN(a)}return!1}(e,t);case 9:return cr(e.arrayValue.values||[],t.arrayValue.values||[],We);case 10:return function(i,s){const o=i.mapValue.fields||{},a=s.mapValue.fields||{};if(nc(o)!==nc(a))return!1;for(const l in o)if(o.hasOwnProperty(l)&&(a[l]===void 0||!We(o[l],a[l])))return!1;return!0}(e,t);default:return X()}}function Zr(e,t){return(e.values||[]).find(n=>We(n,t))!==void 0}function hr(e,t){if(e===t)return 0;const n=ur(e),r=ur(t);if(n!==r)return dt(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return dt(e.booleanValue,t.booleanValue);case 2:return function(s,o){const a=Wt(s.integerValue||s.doubleValue),l=Wt(o.integerValue||o.doubleValue);return a<l?-1:a>l?1:a===l?0:isNaN(a)?isNaN(l)?0:-1:1}(e,t);case 3:return ic(e.timestampValue,t.timestampValue);case 4:return ic(fs(e),fs(t));case 5:return dt(e.stringValue,t.stringValue);case 6:return function(s,o){const a=Yr(s),l=Yr(o);return a.compareTo(l)}(e.bytesValue,t.bytesValue);case 7:return function(s,o){const a=s.split("/"),l=o.split("/");for(let c=0;c<a.length&&c<l.length;c++){const u=dt(a[c],l[c]);if(u!==0)return u}return dt(a.length,l.length)}(e.referenceValue,t.referenceValue);case 8:return function(s,o){const a=dt(Wt(s.latitude),Wt(o.latitude));return a!==0?a:dt(Wt(s.longitude),Wt(o.longitude))}(e.geoPointValue,t.geoPointValue);case 9:return function(s,o){const a=s.values||[],l=o.values||[];for(let c=0;c<a.length&&c<l.length;++c){const u=hr(a[c],l[c]);if(u)return u}return dt(a.length,l.length)}(e.arrayValue,t.arrayValue);case 10:return function(s,o){if(s===xi.mapValue&&o===xi.mapValue)return 0;if(s===xi.mapValue)return 1;if(o===xi.mapValue)return-1;const a=s.fields||{},l=Object.keys(a),c=o.fields||{},u=Object.keys(c);l.sort(),u.sort();for(let h=0;h<l.length&&h<u.length;++h){const d=dt(l[h],u[h]);if(d!==0)return d;const f=hr(a[l[h]],c[u[h]]);if(f!==0)return f}return dt(l.length,u.length)}(e.mapValue,t.mapValue);default:throw X()}}function ic(e,t){if(typeof e=="string"&&typeof t=="string"&&e.length===t.length)return dt(e,t);const n=Wn(e),r=Wn(t),i=dt(n.seconds,r.seconds);return i!==0?i:dt(n.nanos,r.nanos)}function dr(e){return Go(e)}function Go(e){return"nullValue"in e?"null":"booleanValue"in e?""+e.booleanValue:"integerValue"in e?""+e.integerValue:"doubleValue"in e?""+e.doubleValue:"timestampValue"in e?function(n){const r=Wn(n);return`time(${r.seconds},${r.nanos})`}(e.timestampValue):"stringValue"in e?e.stringValue:"bytesValue"in e?function(n){return Yr(n).toBase64()}(e.bytesValue):"referenceValue"in e?function(n){return H.fromName(n).toString()}(e.referenceValue):"geoPointValue"in e?function(n){return`geo(${n.latitude},${n.longitude})`}(e.geoPointValue):"arrayValue"in e?function(n){let r="[",i=!0;for(const s of n.values||[])i?i=!1:r+=",",r+=Go(s);return r+"]"}(e.arrayValue):"mapValue"in e?function(n){const r=Object.keys(n.fields||{}).sort();let i="{",s=!0;for(const o of r)s?s=!1:i+=",",i+=`${o}:${Go(n.fields[o])}`;return i+"}"}(e.mapValue):X()}function Ko(e){return!!e&&"integerValue"in e}function Ha(e){return!!e&&"arrayValue"in e}function qi(e){return!!e&&"mapValue"in e}function Lr(e){if(e.geoPointValue)return{geoPointValue:Object.assign({},e.geoPointValue)};if(e.timestampValue&&typeof e.timestampValue=="object")return{timestampValue:Object.assign({},e.timestampValue)};if(e.mapValue){const t={mapValue:{fields:{}}};return vr(e.mapValue.fields,(n,r)=>t.mapValue.fields[n]=Lr(r)),t}if(e.arrayValue){const t={arrayValue:{values:[]}};for(let n=0;n<(e.arrayValue.values||[]).length;++n)t.arrayValue.values[n]=Lr(e.arrayValue.values[n]);return t}return Object.assign({},e)}function Vy(e){return(((e.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class ve{constructor(t){this.value=t}static empty(){return new ve({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let n=this.value;for(let r=0;r<t.length-1;++r)if(n=(n.mapValue.fields||{})[t.get(r)],!qi(n))return null;return n=(n.mapValue.fields||{})[t.lastSegment()],n||null}}set(t,n){this.getFieldsMap(t.popLast())[t.lastSegment()]=Lr(n)}setAll(t){let n=Yt.emptyPath(),r={},i=[];t.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const l=this.getFieldsMap(n);this.applyChanges(l,r,i),r={},i=[],n=a.popLast()}o?r[a.lastSegment()]=Lr(o):i.push(a.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(t){const n=this.field(t.popLast());qi(n)&&n.mapValue.fields&&delete n.mapValue.fields[t.lastSegment()]}isEqual(t){return We(this.value,t.value)}getFieldsMap(t){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<t.length;++r){let i=n.mapValue.fields[t.get(r)];qi(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[t.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(t,n,r){vr(n,(i,s)=>t[i]=s);for(const i of r)delete t[i]}clone(){return new ve(Lr(this.value))}}function zh(e){const t=[];return vr(e.fields,(n,r)=>{const i=new Yt([n]);if(qi(r)){const s=zh(r.mapValue).fields;if(s.length===0)t.push(i);else for(const o of s)t.push(i.child(o))}else t.push(i)}),new Ee(t)}/**
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
 */class Oe{constructor(t,n,r,i,s,o,a){this.key=t,this.documentType=n,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=a}static newInvalidDocument(t){return new Oe(t,0,wt.min(),wt.min(),wt.min(),ve.empty(),0)}static newFoundDocument(t,n,r,i){return new Oe(t,1,n,wt.min(),r,i,0)}static newNoDocument(t,n){return new Oe(t,2,n,wt.min(),wt.min(),ve.empty(),0)}static newUnknownDocument(t,n){return new Oe(t,3,n,wt.min(),wt.min(),ve.empty(),2)}convertToFoundDocument(t,n){return!this.createTime.isEqual(wt.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=t),this.version=t,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=ve.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=ve.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=wt.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(t){return t instanceof Oe&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new Oe(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class ms{constructor(t,n){this.position=t,this.inclusive=n}}function sc(e,t,n){let r=0;for(let i=0;i<e.position.length;i++){const s=t[i],o=e.position[i];if(s.field.isKeyField()?r=H.comparator(H.fromName(o.referenceValue),n.key):r=hr(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function oc(e,t){if(e===null)return t===null;if(t===null||e.inclusive!==t.inclusive||e.position.length!==t.position.length)return!1;for(let n=0;n<e.position.length;n++)if(!We(e.position[n],t.position[n]))return!1;return!0}/**
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
 */class Vr{constructor(t,n="asc"){this.field=t,this.dir=n}}function My(e,t){return e.dir===t.dir&&e.field.isEqual(t.field)}/**
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
 */class Gh{}class Nt extends Gh{constructor(t,n,r){super(),this.field=t,this.op=n,this.value=r}static create(t,n,r){return t.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(t,n,r):new Fy(t,n,r):n==="array-contains"?new By(t,r):n==="in"?new jy(t,r):n==="not-in"?new Hy(t,r):n==="array-contains-any"?new Wy(t,r):new Nt(t,n,r)}static createKeyFieldInFilter(t,n,r){return n==="in"?new Uy(t,r):new $y(t,r)}matches(t){const n=t.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(hr(n,this.value)):n!==null&&ur(this.value)===ur(n)&&this.matchesComparison(hr(n,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return X()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class wn extends Gh{constructor(t,n){super(),this.filters=t,this.op=n,this.ce=null}static create(t,n){return new wn(t,n)}matches(t){return Kh(this)?this.filters.find(n=>!n.matches(t))===void 0:this.filters.find(n=>n.matches(t))!==void 0}getFlattenedFilters(){return this.ce!==null||(this.ce=this.filters.reduce((t,n)=>t.concat(n.getFlattenedFilters()),[])),this.ce}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const t=this.le(n=>n.isInequality());return t!==null?t.field:null}le(t){for(const n of this.getFlattenedFilters())if(t(n))return n;return null}}function Kh(e){return e.op==="and"}function Qh(e){return xy(e)&&Kh(e)}function xy(e){for(const t of e.filters)if(t instanceof wn)return!1;return!0}function Qo(e){if(e instanceof Nt)return e.field.canonicalString()+e.op.toString()+dr(e.value);if(Qh(e))return e.filters.map(t=>Qo(t)).join(",");{const t=e.filters.map(n=>Qo(n)).join(",");return`${e.op}(${t})`}}function Xh(e,t){return e instanceof Nt?function(r,i){return i instanceof Nt&&r.op===i.op&&r.field.isEqual(i.field)&&We(r.value,i.value)}(e,t):e instanceof wn?function(r,i){return i instanceof wn&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((s,o,a)=>s&&Xh(o,i.filters[a]),!0):!1}(e,t):void X()}function Jh(e){return e instanceof Nt?function(n){return`${n.field.canonicalString()} ${n.op} ${dr(n.value)}`}(e):e instanceof wn?function(n){return n.op.toString()+" {"+n.getFilters().map(Jh).join(" ,")+"}"}(e):"Filter"}class Fy extends Nt{constructor(t,n,r){super(t,n,r),this.key=H.fromName(r.referenceValue)}matches(t){const n=H.comparator(t.key,this.key);return this.matchesComparison(n)}}class Uy extends Nt{constructor(t,n){super(t,"in",n),this.keys=Yh("in",n)}matches(t){return this.keys.some(n=>n.isEqual(t.key))}}class $y extends Nt{constructor(t,n){super(t,"not-in",n),this.keys=Yh("not-in",n)}matches(t){return!this.keys.some(n=>n.isEqual(t.key))}}function Yh(e,t){var n;return(((n=t.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>H.fromName(r.referenceValue))}class By extends Nt{constructor(t,n){super(t,"array-contains",n)}matches(t){const n=t.data.field(this.field);return Ha(n)&&Zr(n.arrayValue,this.value)}}class jy extends Nt{constructor(t,n){super(t,"in",n)}matches(t){const n=t.data.field(this.field);return n!==null&&Zr(this.value.arrayValue,n)}}class Hy extends Nt{constructor(t,n){super(t,"not-in",n)}matches(t){if(Zr(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=t.data.field(this.field);return n!==null&&!Zr(this.value.arrayValue,n)}}class Wy extends Nt{constructor(t,n){super(t,"array-contains-any",n)}matches(t){const n=t.data.field(this.field);return!(!Ha(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>Zr(this.value.arrayValue,r))}}/**
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
 */class qy{constructor(t,n=null,r=[],i=[],s=null,o=null,a=null){this.path=t,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=a,this.he=null}}function ac(e,t=null,n=[],r=[],i=null,s=null,o=null){return new qy(e,t,n,r,i,s,o)}function Wa(e){const t=gt(e);if(t.he===null){let n=t.path.canonicalString();t.collectionGroup!==null&&(n+="|cg:"+t.collectionGroup),n+="|f:",n+=t.filters.map(r=>Qo(r)).join(","),n+="|ob:",n+=t.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),Ba(t.limit)||(n+="|l:",n+=t.limit),t.startAt&&(n+="|lb:",n+=t.startAt.inclusive?"b:":"a:",n+=t.startAt.position.map(r=>dr(r)).join(",")),t.endAt&&(n+="|ub:",n+=t.endAt.inclusive?"a:":"b:",n+=t.endAt.position.map(r=>dr(r)).join(",")),t.he=n}return t.he}function qa(e,t){if(e.limit!==t.limit||e.orderBy.length!==t.orderBy.length)return!1;for(let n=0;n<e.orderBy.length;n++)if(!My(e.orderBy[n],t.orderBy[n]))return!1;if(e.filters.length!==t.filters.length)return!1;for(let n=0;n<e.filters.length;n++)if(!Xh(e.filters[n],t.filters[n]))return!1;return e.collectionGroup===t.collectionGroup&&!!e.path.isEqual(t.path)&&!!oc(e.startAt,t.startAt)&&oc(e.endAt,t.endAt)}/**
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
 */class js{constructor(t,n=null,r=[],i=[],s=null,o="F",a=null,l=null){this.path=t,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=a,this.endAt=l,this.Pe=null,this.Ie=null,this.Te=null,this.startAt,this.endAt}}function zy(e,t,n,r,i,s,o,a){return new js(e,t,n,r,i,s,o,a)}function Gy(e){return new js(e)}function lc(e){return e.filters.length===0&&e.limit===null&&e.startAt==null&&e.endAt==null&&(e.explicitOrderBy.length===0||e.explicitOrderBy.length===1&&e.explicitOrderBy[0].field.isKeyField())}function Ky(e){return e.explicitOrderBy.length>0?e.explicitOrderBy[0].field:null}function Qy(e){for(const t of e.filters){const n=t.getFirstInequalityField();if(n!==null)return n}return null}function Xy(e){return e.collectionGroup!==null}function Mr(e){const t=gt(e);if(t.Pe===null){t.Pe=[];const n=Qy(t),r=Ky(t);if(n!==null&&r===null)n.isKeyField()||t.Pe.push(new Vr(n)),t.Pe.push(new Vr(Yt.keyField(),"asc"));else{let i=!1;for(const s of t.explicitOrderBy)t.Pe.push(s),s.field.isKeyField()&&(i=!0);if(!i){const s=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";t.Pe.push(new Vr(Yt.keyField(),s))}}}return t.Pe}function fr(e){const t=gt(e);return t.Ie||(t.Ie=Jy(t,Mr(e))),t.Ie}function Jy(e,t){if(e.limitType==="F")return ac(e.path,e.collectionGroup,t,e.filters,e.limit,e.startAt,e.endAt);{t=t.map(i=>{const s=i.dir==="desc"?"asc":"desc";return new Vr(i.field,s)});const n=e.endAt?new ms(e.endAt.position,e.endAt.inclusive):null,r=e.startAt?new ms(e.startAt.position,e.startAt.inclusive):null;return ac(e.path,e.collectionGroup,t,e.filters,e.limit,n,r)}}function Xo(e,t,n){return new js(e.path,e.collectionGroup,e.explicitOrderBy.slice(),e.filters.slice(),t,n,e.startAt,e.endAt)}function Zh(e,t){return qa(fr(e),fr(t))&&e.limitType===t.limitType}function td(e){return`${Wa(fr(e))}|lt:${e.limitType}`}function cc(e){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(i=>Jh(i)).join(", ")}]`),Ba(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(i=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(i)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(i=>dr(i)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(i=>dr(i)).join(",")),`Target(${r})`}(fr(e))}; limitType=${e.limitType})`}function za(e,t){return t.isFoundDocument()&&function(r,i){const s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):H.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)}(e,t)&&function(r,i){for(const s of Mr(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(e,t)&&function(r,i){for(const s of r.filters)if(!s.matches(i))return!1;return!0}(e,t)&&function(r,i){return!(r.startAt&&!function(o,a,l){const c=sc(o,a,l);return o.inclusive?c<=0:c<0}(r.startAt,Mr(r),i)||r.endAt&&!function(o,a,l){const c=sc(o,a,l);return o.inclusive?c>=0:c>0}(r.endAt,Mr(r),i))}(e,t)}function Yy(e){return(t,n)=>{let r=!1;for(const i of Mr(e)){const s=Zy(i,t,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function Zy(e,t,n){const r=e.field.isKeyField()?H.comparator(t.key,n.key):function(s,o,a){const l=o.data.field(s),c=a.data.field(s);return l!==null&&c!==null?hr(l,c):X()}(e.field,t,n);switch(e.dir){case"asc":return r;case"desc":return-1*r;default:return X()}}/**
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
 */class Er{constructor(t,n){this.mapKeyFn=t,this.equalsFn=n,this.inner={},this.innerSize=0}get(t){const n=this.mapKeyFn(t),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,t))return s}}has(t){return this.get(t)!==void 0}set(t,n){const r=this.mapKeyFn(t),i=this.inner[r];if(i===void 0)return this.inner[r]=[[t,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],t))return void(i[s]=[t,n]);i.push([t,n]),this.innerSize++}delete(t){const n=this.mapKeyFn(t),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],t))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(t){vr(this.inner,(n,r)=>{for(const[i,s]of r)t(i,s)})}isEmpty(){return Wh(this.inner)}size(){return this.innerSize}}/**
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
 */const tv=new ye(H.comparator);function gs(){return tv}const ed=new ye(H.comparator);function Fi(...e){let t=ed;for(const n of e)t=t.insert(n.key,n);return t}function nd(e){let t=ed;return e.forEach((n,r)=>t=t.insert(n,r.overlayedDocument)),t}function Nn(){return xr()}function rd(){return xr()}function xr(){return new Er(e=>e.toString(),(e,t)=>e.isEqual(t))}const ev=new ye(H.comparator),nv=new fe(H.comparator);function Jt(...e){let t=nv;for(const n of e)t=t.add(n);return t}const rv=new fe(dt);function iv(){return rv}/**
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
 */function id(e,t){if(e.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:ds(t)?"-0":t}}function sd(e){return{integerValue:""+e}}function sv(e,t){return Dy(t)?sd(t):id(e,t)}/**
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
 */class Hs{constructor(){this._=void 0}}function ov(e,t,n){return e instanceof ti?function(i,s){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&ja(s)&&(s=qh(s)),s&&(o.fields.__previous_value__=s),{mapValue:o}}(n,t):e instanceof ei?ad(e,t):e instanceof ni?ld(e,t):function(i,s){const o=od(i,s),a=uc(o)+uc(i.Ee);return Ko(o)&&Ko(i.Ee)?sd(a):id(i.serializer,a)}(e,t)}function av(e,t,n){return e instanceof ei?ad(e,t):e instanceof ni?ld(e,t):n}function od(e,t){return e instanceof _s?function(r){return Ko(r)||function(s){return!!s&&"doubleValue"in s}(r)}(t)?t:{integerValue:0}:null}class ti extends Hs{}class ei extends Hs{constructor(t){super(),this.elements=t}}function ad(e,t){const n=cd(t);for(const r of e.elements)n.some(i=>We(i,r))||n.push(r);return{arrayValue:{values:n}}}class ni extends Hs{constructor(t){super(),this.elements=t}}function ld(e,t){let n=cd(t);for(const r of e.elements)n=n.filter(i=>!We(i,r));return{arrayValue:{values:n}}}class _s extends Hs{constructor(t,n){super(),this.serializer=t,this.Ee=n}}function uc(e){return Wt(e.integerValue||e.doubleValue)}function cd(e){return Ha(e)&&e.arrayValue.values?e.arrayValue.values.slice():[]}/**
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
 */class lv{constructor(t,n){this.field=t,this.transform=n}}function cv(e,t){return e.field.isEqual(t.field)&&function(r,i){return r instanceof ei&&i instanceof ei||r instanceof ni&&i instanceof ni?cr(r.elements,i.elements,We):r instanceof _s&&i instanceof _s?We(r.Ee,i.Ee):r instanceof ti&&i instanceof ti}(e.transform,t.transform)}class uv{constructor(t,n){this.version=t,this.transformResults=n}}class Ne{constructor(t,n){this.updateTime=t,this.exists=n}static none(){return new Ne}static exists(t){return new Ne(void 0,t)}static updateTime(t){return new Ne(t)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function zi(e,t){return e.updateTime!==void 0?t.isFoundDocument()&&t.version.isEqual(e.updateTime):e.exists===void 0||e.exists===t.isFoundDocument()}class Ws{}function ud(e,t){if(!e.hasLocalMutations||t&&t.fields.length===0)return null;if(t===null)return e.isNoDocument()?new Ga(e.key,Ne.none()):new wi(e.key,e.data,Ne.none());{const n=e.data,r=ve.empty();let i=new fe(Yt.comparator);for(let s of t.fields)if(!i.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new bn(e.key,r,new Ee(i.toArray()),Ne.none())}}function hv(e,t,n){e instanceof wi?function(i,s,o){const a=i.value.clone(),l=dc(i.fieldTransforms,s,o.transformResults);a.setAll(l),s.convertToFoundDocument(o.version,a).setHasCommittedMutations()}(e,t,n):e instanceof bn?function(i,s,o){if(!zi(i.precondition,s))return void s.convertToUnknownDocument(o.version);const a=dc(i.fieldTransforms,s,o.transformResults),l=s.data;l.setAll(hd(i)),l.setAll(a),s.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(e,t,n):function(i,s,o){s.convertToNoDocument(o.version).setHasCommittedMutations()}(0,t,n)}function Fr(e,t,n,r){return e instanceof wi?function(s,o,a,l){if(!zi(s.precondition,o))return a;const c=s.value.clone(),u=fc(s.fieldTransforms,l,o);return c.setAll(u),o.convertToFoundDocument(o.version,c).setHasLocalMutations(),null}(e,t,n,r):e instanceof bn?function(s,o,a,l){if(!zi(s.precondition,o))return a;const c=fc(s.fieldTransforms,l,o),u=o.data;return u.setAll(hd(s)),u.setAll(c),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),a===null?null:a.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(h=>h.field))}(e,t,n,r):function(s,o,a){return zi(s.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):a}(e,t,n)}function dv(e,t){let n=null;for(const r of e.fieldTransforms){const i=t.data.field(r.field),s=od(r.transform,i||null);s!=null&&(n===null&&(n=ve.empty()),n.set(r.field,s))}return n||null}function hc(e,t){return e.type===t.type&&!!e.key.isEqual(t.key)&&!!e.precondition.isEqual(t.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&cr(r,i,(s,o)=>cv(s,o))}(e.fieldTransforms,t.fieldTransforms)&&(e.type===0?e.value.isEqual(t.value):e.type!==1||e.data.isEqual(t.data)&&e.fieldMask.isEqual(t.fieldMask))}class wi extends Ws{constructor(t,n,r,i=[]){super(),this.key=t,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class bn extends Ws{constructor(t,n,r,i,s=[]){super(),this.key=t,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function hd(e){const t=new Map;return e.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=e.data.field(n);t.set(n,r)}}),t}function dc(e,t,n){const r=new Map;Mt(e.length===n.length);for(let i=0;i<n.length;i++){const s=e[i],o=s.transform,a=t.data.field(s.field);r.set(s.field,av(o,a,n[i]))}return r}function fc(e,t,n){const r=new Map;for(const i of e){const s=i.transform,o=n.data.field(i.field);r.set(i.field,ov(s,o,t))}return r}class Ga extends Ws{constructor(t,n){super(),this.key=t,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class fv extends Ws{constructor(t,n){super(),this.key=t,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class pv{constructor(t,n,r,i){this.batchId=t,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(t,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(t.key)&&hv(s,t,r[i])}}applyToLocalView(t,n){for(const r of this.baseMutations)r.key.isEqual(t.key)&&(n=Fr(r,t,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(t.key)&&(n=Fr(r,t,n,this.localWriteTime));return n}applyToLocalDocumentSet(t,n){const r=rd();return this.mutations.forEach(i=>{const s=t.get(i.key),o=s.overlayedDocument;let a=this.applyToLocalView(o,s.mutatedFields);a=n.has(i.key)?null:a;const l=ud(o,a);l!==null&&r.set(i.key,l),o.isValidDocument()||o.convertToNoDocument(wt.min())}),r}keys(){return this.mutations.reduce((t,n)=>t.add(n.key),Jt())}isEqual(t){return this.batchId===t.batchId&&cr(this.mutations,t.mutations,(n,r)=>hc(n,r))&&cr(this.baseMutations,t.baseMutations,(n,r)=>hc(n,r))}}class Ka{constructor(t,n,r,i){this.batch=t,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(t,n,r){Mt(t.mutations.length===r.length);let i=function(){return ev}();const s=t.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new Ka(t,n,r,i)}}/**
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
 */class mv{constructor(t,n){this.largestBatchId=t,this.mutation=n}getKey(){return this.mutation.key}isEqual(t){return t!==null&&this.mutation===t.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
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
 */var Ct,J;function gv(e){switch(e){default:return X();case v.CANCELLED:case v.UNKNOWN:case v.DEADLINE_EXCEEDED:case v.RESOURCE_EXHAUSTED:case v.INTERNAL:case v.UNAVAILABLE:case v.UNAUTHENTICATED:return!1;case v.INVALID_ARGUMENT:case v.NOT_FOUND:case v.ALREADY_EXISTS:case v.PERMISSION_DENIED:case v.FAILED_PRECONDITION:case v.ABORTED:case v.OUT_OF_RANGE:case v.UNIMPLEMENTED:case v.DATA_LOSS:return!0}}function _v(e){if(e===void 0)return Hn("GRPC error has no .code"),v.UNKNOWN;switch(e){case Ct.OK:return v.OK;case Ct.CANCELLED:return v.CANCELLED;case Ct.UNKNOWN:return v.UNKNOWN;case Ct.DEADLINE_EXCEEDED:return v.DEADLINE_EXCEEDED;case Ct.RESOURCE_EXHAUSTED:return v.RESOURCE_EXHAUSTED;case Ct.INTERNAL:return v.INTERNAL;case Ct.UNAVAILABLE:return v.UNAVAILABLE;case Ct.UNAUTHENTICATED:return v.UNAUTHENTICATED;case Ct.INVALID_ARGUMENT:return v.INVALID_ARGUMENT;case Ct.NOT_FOUND:return v.NOT_FOUND;case Ct.ALREADY_EXISTS:return v.ALREADY_EXISTS;case Ct.PERMISSION_DENIED:return v.PERMISSION_DENIED;case Ct.FAILED_PRECONDITION:return v.FAILED_PRECONDITION;case Ct.ABORTED:return v.ABORTED;case Ct.OUT_OF_RANGE:return v.OUT_OF_RANGE;case Ct.UNIMPLEMENTED:return v.UNIMPLEMENTED;case Ct.DATA_LOSS:return v.DATA_LOSS;default:return X()}}(J=Ct||(Ct={}))[J.OK=0]="OK",J[J.CANCELLED=1]="CANCELLED",J[J.UNKNOWN=2]="UNKNOWN",J[J.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",J[J.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",J[J.NOT_FOUND=5]="NOT_FOUND",J[J.ALREADY_EXISTS=6]="ALREADY_EXISTS",J[J.PERMISSION_DENIED=7]="PERMISSION_DENIED",J[J.UNAUTHENTICATED=16]="UNAUTHENTICATED",J[J.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",J[J.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",J[J.ABORTED=10]="ABORTED",J[J.OUT_OF_RANGE=11]="OUT_OF_RANGE",J[J.UNIMPLEMENTED=12]="UNIMPLEMENTED",J[J.INTERNAL=13]="INTERNAL",J[J.UNAVAILABLE=14]="UNAVAILABLE",J[J.DATA_LOSS=15]="DATA_LOSS";/**
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
 */new gy([4294967295,4294967295],0);class yv{constructor(t,n){this.databaseId=t,this.useProto3Json=n}}function Jo(e,t){return e.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function vv(e,t){return e.useProto3Json?t.toBase64():t.toUint8Array()}function Ev(e,t){return Jo(e,t.toTimestamp())}function ir(e){return Mt(!!e),wt.fromTimestamp(function(n){const r=Wn(n);return new Lt(r.seconds,r.nanos)}(e))}function dd(e,t){return function(r){return new At(["projects",r.projectId,"databases",r.database])}(e).child("documents").child(t).canonicalString()}function wv(e){const t=At.fromString(e);return Mt(Cv(t)),t}function Yo(e,t){return dd(e.databaseId,t.path)}function Iv(e){const t=wv(e);return t.length===4?At.emptyPath():Av(t)}function Tv(e){return new At(["projects",e.databaseId.projectId,"databases",e.databaseId.database]).canonicalString()}function Av(e){return Mt(e.length>4&&e.get(4)==="documents"),e.popFirst(5)}function pc(e,t,n){return{name:Yo(e,t),fields:n.value.mapValue.fields}}function bv(e,t){let n;if(t instanceof wi)n={update:pc(e,t.key,t.value)};else if(t instanceof Ga)n={delete:Yo(e,t.key)};else if(t instanceof bn)n={update:pc(e,t.key,t.data),updateMask:Rv(t.fieldMask)};else{if(!(t instanceof fv))return X();n={verify:Yo(e,t.key)}}return t.fieldTransforms.length>0&&(n.updateTransforms=t.fieldTransforms.map(r=>function(s,o){const a=o.transform;if(a instanceof ti)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof ei)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof ni)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof _s)return{fieldPath:o.field.canonicalString(),increment:a.Ee};throw X()}(0,r))),t.precondition.isNone||(n.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:Ev(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:X()}(e,t.precondition)),n}function Sv(e,t){return e&&e.length>0?(Mt(t!==void 0),e.map(n=>function(i,s){let o=i.updateTime?ir(i.updateTime):ir(s);return o.isEqual(wt.min())&&(o=ir(s)),new uv(o,i.transformResults||[])}(n,t))):[]}function Pv(e){let t=Iv(e.parent);const n=e.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){Mt(r===1);const u=n.from[0];u.allDescendants?i=u.collectionId:t=t.child(u.collectionId)}let s=[];n.where&&(s=function(h){const d=fd(h);return d instanceof wn&&Qh(d)?d.getFilters():[d]}(n.where));let o=[];n.orderBy&&(o=function(h){return h.map(d=>function(y){return new Vr(Xn(y.field),function(R){switch(R){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(y.direction))}(d))}(n.orderBy));let a=null;n.limit&&(a=function(h){let d;return d=typeof h=="object"?h.value:h,Ba(d)?null:d}(n.limit));let l=null;n.startAt&&(l=function(h){const d=!!h.before,f=h.values||[];return new ms(f,d)}(n.startAt));let c=null;return n.endAt&&(c=function(h){const d=!h.before,f=h.values||[];return new ms(f,d)}(n.endAt)),zy(t,i,o,s,a,"F",l,c)}function fd(e){return e.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=Xn(n.unaryFilter.field);return Nt.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=Xn(n.unaryFilter.field);return Nt.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=Xn(n.unaryFilter.field);return Nt.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=Xn(n.unaryFilter.field);return Nt.create(o,"!=",{nullValue:"NULL_VALUE"});default:return X()}}(e):e.fieldFilter!==void 0?function(n){return Nt.create(Xn(n.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return X()}}(n.fieldFilter.op),n.fieldFilter.value)}(e):e.compositeFilter!==void 0?function(n){return wn.create(n.compositeFilter.filters.map(r=>fd(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return X()}}(n.compositeFilter.op))}(e):X()}function Xn(e){return Yt.fromServerFormat(e.fieldPath)}function Rv(e){const t=[];return e.fields.forEach(n=>t.push(n.canonicalString())),{fieldPaths:t}}function Cv(e){return e.length>=4&&e.get(0)==="projects"&&e.get(2)==="databases"}/**
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
 */class kv{constructor(t){this.lt=t}}function Dv(e){const t=Pv({parent:e.parent,structuredQuery:e.structuredQuery});return e.limitType==="LAST"?Xo(t,t.limit,"L"):t}/**
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
 */class Ov{constructor(){this.on=new Nv}addToCollectionParentIndex(t,n){return this.on.add(n),E.resolve()}getCollectionParents(t,n){return E.resolve(this.on.getEntries(n))}addFieldIndex(t,n){return E.resolve()}deleteFieldIndex(t,n){return E.resolve()}getDocumentsMatchingTarget(t,n){return E.resolve(null)}getIndexType(t,n){return E.resolve(0)}getFieldIndexes(t,n){return E.resolve([])}getNextCollectionGroupToUpdate(t){return E.resolve(null)}getMinOffset(t,n){return E.resolve(En.min())}getMinOffsetFromCollectionGroup(t,n){return E.resolve(En.min())}updateCollectionGroup(t,n,r){return E.resolve()}updateIndexEntries(t,n){return E.resolve()}}class Nv{constructor(){this.index={}}add(t){const n=t.lastSegment(),r=t.popLast(),i=this.index[n]||new fe(At.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(t){const n=t.lastSegment(),r=t.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(t){return(this.index[t]||new fe(At.comparator)).toArray()}}/**
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
 */class pr{constructor(t){this.xn=t}next(){return this.xn+=2,this.xn}static On(){return new pr(0)}static Nn(){return new pr(-1)}}/**
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
 */class Lv{constructor(){this.changes=new Er(t=>t.toString(),(t,n)=>t.isEqual(n)),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,n){this.assertNotApplied(),this.changes.set(t,Oe.newInvalidDocument(t).setReadTime(n))}getEntry(t,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?E.resolve(r):this.getFromCache(t,n)}getEntries(t,n){return this.getAllFromCache(t,n)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}/**
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
 */class Vv{constructor(t,n){this.overlayedDocument=t,this.mutatedFields=n}}/**
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
 */class Mv{constructor(t,n,r,i){this.remoteDocumentCache=t,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(t,n){let r=null;return this.documentOverlayCache.getOverlay(t,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(t,n))).next(i=>(r!==null&&Fr(r.mutation,i,Ee.empty(),Lt.now()),i))}getDocuments(t,n){return this.remoteDocumentCache.getEntries(t,n).next(r=>this.getLocalViewOfDocuments(t,r,Jt()).next(()=>r))}getLocalViewOfDocuments(t,n,r=Jt()){const i=Nn();return this.populateOverlays(t,i,n).next(()=>this.computeViews(t,n,i,r).next(s=>{let o=Fi();return s.forEach((a,l)=>{o=o.insert(a,l.overlayedDocument)}),o}))}getOverlayedDocuments(t,n){const r=Nn();return this.populateOverlays(t,r,n).next(()=>this.computeViews(t,n,r,Jt()))}populateOverlays(t,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(t,i).next(s=>{s.forEach((o,a)=>{n.set(o,a)})})}computeViews(t,n,r,i){let s=gs();const o=xr(),a=function(){return xr()}();return n.forEach((l,c)=>{const u=r.get(c.key);i.has(c.key)&&(u===void 0||u.mutation instanceof bn)?s=s.insert(c.key,c):u!==void 0?(o.set(c.key,u.mutation.getFieldMask()),Fr(u.mutation,c,u.mutation.getFieldMask(),Lt.now())):o.set(c.key,Ee.empty())}),this.recalculateAndSaveOverlays(t,s).next(l=>(l.forEach((c,u)=>o.set(c,u)),n.forEach((c,u)=>{var h;return a.set(c,new Vv(u,(h=o.get(c))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(t,n){const r=xr();let i=new ye((o,a)=>o-a),s=Jt();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,n).next(o=>{for(const a of o)a.keys().forEach(l=>{const c=n.get(l);if(c===null)return;let u=r.get(l)||Ee.empty();u=a.applyToLocalView(c,u),r.set(l,u);const h=(i.get(a.batchId)||Jt()).add(l);i=i.insert(a.batchId,h)})}).next(()=>{const o=[],a=i.getReverseIterator();for(;a.hasNext();){const l=a.getNext(),c=l.key,u=l.value,h=rd();u.forEach(d=>{if(!s.has(d)){const f=ud(n.get(d),r.get(d));f!==null&&h.set(d,f),s=s.add(d)}}),o.push(this.documentOverlayCache.saveOverlays(t,c,h))}return E.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(t,n){return this.remoteDocumentCache.getEntries(t,n).next(r=>this.recalculateAndSaveOverlays(t,r))}getDocumentsMatchingQuery(t,n,r){return function(s){return H.isDocumentKey(s.path)&&s.collectionGroup===null&&s.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(t,n.path):Xy(n)?this.getDocumentsMatchingCollectionGroupQuery(t,n,r):this.getDocumentsMatchingCollectionQuery(t,n,r)}getNextDocuments(t,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(t,n,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,n,r.largestBatchId,i-s.size):E.resolve(Nn());let a=-1,l=s;return o.next(c=>E.forEach(c,(u,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),s.get(u)?E.resolve():this.remoteDocumentCache.getEntry(t,u).next(d=>{l=l.insert(u,d)}))).next(()=>this.populateOverlays(t,c,s)).next(()=>this.computeViews(t,l,c,Jt())).next(u=>({batchId:a,changes:nd(u)})))})}getDocumentsMatchingDocumentQuery(t,n){return this.getDocument(t,new H(n)).next(r=>{let i=Fi();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(t,n,r){const i=n.collectionGroup;let s=Fi();return this.indexManager.getCollectionParents(t,i).next(o=>E.forEach(o,a=>{const l=function(u,h){return new js(h,null,u.explicitOrderBy.slice(),u.filters.slice(),u.limit,u.limitType,u.startAt,u.endAt)}(n,a.child(i));return this.getDocumentsMatchingCollectionQuery(t,l,r).next(c=>{c.forEach((u,h)=>{s=s.insert(u,h)})})}).next(()=>s))}getDocumentsMatchingCollectionQuery(t,n,r){let i;return this.documentOverlayCache.getOverlaysForCollection(t,n.path,r.largestBatchId).next(s=>(i=s,this.remoteDocumentCache.getDocumentsMatchingQuery(t,n,r,i))).next(s=>{i.forEach((a,l)=>{const c=l.getKey();s.get(c)===null&&(s=s.insert(c,Oe.newInvalidDocument(c)))});let o=Fi();return s.forEach((a,l)=>{const c=i.get(a);c!==void 0&&Fr(c.mutation,l,Ee.empty(),Lt.now()),za(n,l)&&(o=o.insert(a,l))}),o})}}/**
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
 */class xv{constructor(t){this.serializer=t,this.ur=new Map,this.cr=new Map}getBundleMetadata(t,n){return E.resolve(this.ur.get(n))}saveBundleMetadata(t,n){return this.ur.set(n.id,function(i){return{id:i.id,version:i.version,createTime:ir(i.createTime)}}(n)),E.resolve()}getNamedQuery(t,n){return E.resolve(this.cr.get(n))}saveNamedQuery(t,n){return this.cr.set(n.name,function(i){return{name:i.name,query:Dv(i.bundledQuery),readTime:ir(i.readTime)}}(n)),E.resolve()}}/**
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
 */class Fv{constructor(){this.overlays=new ye(H.comparator),this.lr=new Map}getOverlay(t,n){return E.resolve(this.overlays.get(n))}getOverlays(t,n){const r=Nn();return E.forEach(n,i=>this.getOverlay(t,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(t,n,r){return r.forEach((i,s)=>{this.Pt(t,n,s)}),E.resolve()}removeOverlaysForBatchId(t,n,r){const i=this.lr.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.lr.delete(r)),E.resolve()}getOverlaysForCollection(t,n,r){const i=Nn(),s=n.length+1,o=new H(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const l=a.getNext().value,c=l.getKey();if(!n.isPrefixOf(c.path))break;c.path.length===s&&l.largestBatchId>r&&i.set(l.getKey(),l)}return E.resolve(i)}getOverlaysForCollectionGroup(t,n,r,i){let s=new ye((c,u)=>c-u);const o=this.overlays.getIterator();for(;o.hasNext();){const c=o.getNext().value;if(c.getKey().getCollectionGroup()===n&&c.largestBatchId>r){let u=s.get(c.largestBatchId);u===null&&(u=Nn(),s=s.insert(c.largestBatchId,u)),u.set(c.getKey(),c)}}const a=Nn(),l=s.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((c,u)=>a.set(c,u)),!(a.size()>=i)););return E.resolve(a)}Pt(t,n,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.lr.get(i.largestBatchId).delete(r.key);this.lr.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new mv(n,r));let s=this.lr.get(n);s===void 0&&(s=Jt(),this.lr.set(n,s)),this.lr.set(n,s.add(r.key))}}/**
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
 */class Qa{constructor(){this.hr=new fe(Ot.Pr),this.Ir=new fe(Ot.Tr)}isEmpty(){return this.hr.isEmpty()}addReference(t,n){const r=new Ot(t,n);this.hr=this.hr.add(r),this.Ir=this.Ir.add(r)}Er(t,n){t.forEach(r=>this.addReference(r,n))}removeReference(t,n){this.dr(new Ot(t,n))}Ar(t,n){t.forEach(r=>this.removeReference(r,n))}Rr(t){const n=new H(new At([])),r=new Ot(n,t),i=new Ot(n,t+1),s=[];return this.Ir.forEachInRange([r,i],o=>{this.dr(o),s.push(o.key)}),s}Vr(){this.hr.forEach(t=>this.dr(t))}dr(t){this.hr=this.hr.delete(t),this.Ir=this.Ir.delete(t)}mr(t){const n=new H(new At([])),r=new Ot(n,t),i=new Ot(n,t+1);let s=Jt();return this.Ir.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(t){const n=new Ot(t,0),r=this.hr.firstAfterOrEqual(n);return r!==null&&t.isEqual(r.key)}}class Ot{constructor(t,n){this.key=t,this.gr=n}static Pr(t,n){return H.comparator(t.key,n.key)||dt(t.gr,n.gr)}static Tr(t,n){return dt(t.gr,n.gr)||H.comparator(t.key,n.key)}}/**
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
 */class Uv{constructor(t,n){this.indexManager=t,this.referenceDelegate=n,this.mutationQueue=[],this.pr=1,this.yr=new fe(Ot.Pr)}checkEmpty(t){return E.resolve(this.mutationQueue.length===0)}addMutationBatch(t,n,r,i){const s=this.pr;this.pr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new pv(s,n,r,i);this.mutationQueue.push(o);for(const a of i)this.yr=this.yr.add(new Ot(a.key,s)),this.indexManager.addToCollectionParentIndex(t,a.key.path.popLast());return E.resolve(o)}lookupMutationBatch(t,n){return E.resolve(this.wr(n))}getNextMutationBatchAfterBatchId(t,n){const r=n+1,i=this.Sr(r),s=i<0?0:i;return E.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return E.resolve(this.mutationQueue.length===0?-1:this.pr-1)}getAllMutationBatches(t){return E.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,n){const r=new Ot(n,0),i=new Ot(n,Number.POSITIVE_INFINITY),s=[];return this.yr.forEachInRange([r,i],o=>{const a=this.wr(o.gr);s.push(a)}),E.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(t,n){let r=new fe(dt);return n.forEach(i=>{const s=new Ot(i,0),o=new Ot(i,Number.POSITIVE_INFINITY);this.yr.forEachInRange([s,o],a=>{r=r.add(a.gr)})}),E.resolve(this.br(r))}getAllMutationBatchesAffectingQuery(t,n){const r=n.path,i=r.length+1;let s=r;H.isDocumentKey(s)||(s=s.child(""));const o=new Ot(new H(s),0);let a=new fe(dt);return this.yr.forEachWhile(l=>{const c=l.key.path;return!!r.isPrefixOf(c)&&(c.length===i&&(a=a.add(l.gr)),!0)},o),E.resolve(this.br(a))}br(t){const n=[];return t.forEach(r=>{const i=this.wr(r);i!==null&&n.push(i)}),n}removeMutationBatch(t,n){Mt(this.Dr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.yr;return E.forEach(n.mutations,i=>{const s=new Ot(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(t,i.key)}).next(()=>{this.yr=r})}Fn(t){}containsKey(t,n){const r=new Ot(n,0),i=this.yr.firstAfterOrEqual(r);return E.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(t){return this.mutationQueue.length,E.resolve()}Dr(t,n){return this.Sr(t)}Sr(t){return this.mutationQueue.length===0?0:t-this.mutationQueue[0].batchId}wr(t){const n=this.Sr(t);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class $v{constructor(t){this.vr=t,this.docs=function(){return new ye(H.comparator)}(),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.vr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(t,r.path.popLast())}removeEntry(t){const n=this.docs.get(t);n&&(this.docs=this.docs.remove(t),this.size-=n.size)}getEntry(t,n){const r=this.docs.get(n);return E.resolve(r?r.document.mutableCopy():Oe.newInvalidDocument(n))}getEntries(t,n){let r=gs();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():Oe.newInvalidDocument(i))}),E.resolve(r)}getDocumentsMatchingQuery(t,n,r,i){let s=gs();const o=n.path,a=new H(o.child("")),l=this.docs.getIteratorFrom(a);for(;l.hasNext();){const{key:c,value:{document:u}}=l.getNext();if(!o.isPrefixOf(c.path))break;c.path.length>o.length+1||Ry(Py(u),r)<=0||(i.has(u.key)||za(n,u))&&(s=s.insert(u.key,u.mutableCopy()))}return E.resolve(s)}getAllFromCollectionGroup(t,n,r,i){X()}Cr(t,n){return E.forEach(this.docs,r=>n(r))}newChangeBuffer(t){return new Bv(this)}getSize(t){return E.resolve(this.size)}}class Bv extends Lv{constructor(t){super(),this._r=t}applyChanges(t){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this._r.addEntry(t,i)):this._r.removeEntry(r)}),E.waitFor(n)}getFromCache(t,n){return this._r.getEntry(t,n)}getAllFromCache(t,n){return this._r.getEntries(t,n)}}/**
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
 */class jv{constructor(t){this.persistence=t,this.Fr=new Er(n=>Wa(n),qa),this.lastRemoteSnapshotVersion=wt.min(),this.highestTargetId=0,this.Mr=0,this.Or=new Qa,this.targetCount=0,this.Nr=pr.On()}forEachTarget(t,n){return this.Fr.forEach((r,i)=>n(i)),E.resolve()}getLastRemoteSnapshotVersion(t){return E.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return E.resolve(this.Mr)}allocateTargetId(t){return this.highestTargetId=this.Nr.next(),E.resolve(this.highestTargetId)}setTargetsMetadata(t,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Mr&&(this.Mr=n),E.resolve()}kn(t){this.Fr.set(t.target,t);const n=t.targetId;n>this.highestTargetId&&(this.Nr=new pr(n),this.highestTargetId=n),t.sequenceNumber>this.Mr&&(this.Mr=t.sequenceNumber)}addTargetData(t,n){return this.kn(n),this.targetCount+=1,E.resolve()}updateTargetData(t,n){return this.kn(n),E.resolve()}removeTargetData(t,n){return this.Fr.delete(n.target),this.Or.Rr(n.targetId),this.targetCount-=1,E.resolve()}removeTargets(t,n,r){let i=0;const s=[];return this.Fr.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.Fr.delete(o),s.push(this.removeMatchingKeysForTargetId(t,a.targetId)),i++)}),E.waitFor(s).next(()=>i)}getTargetCount(t){return E.resolve(this.targetCount)}getTargetData(t,n){const r=this.Fr.get(n)||null;return E.resolve(r)}addMatchingKeys(t,n,r){return this.Or.Er(n,r),E.resolve()}removeMatchingKeys(t,n,r){this.Or.Ar(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(t,o))}),E.waitFor(s)}removeMatchingKeysForTargetId(t,n){return this.Or.Rr(n),E.resolve()}getMatchingKeysForTargetId(t,n){const r=this.Or.mr(n);return E.resolve(r)}containsKey(t,n){return E.resolve(this.Or.containsKey(n))}}/**
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
 */class Hv{constructor(t,n){this.Br={},this.overlays={},this.Lr=new Hh(0),this.kr=!1,this.kr=!0,this.referenceDelegate=t(this),this.qr=new jv(this),this.indexManager=new Ov,this.remoteDocumentCache=function(i){return new $v(i)}(r=>this.referenceDelegate.Qr(r)),this.serializer=new kv(n),this.Kr=new xv(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.kr=!1,Promise.resolve()}get started(){return this.kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let n=this.overlays[t.toKey()];return n||(n=new Fv,this.overlays[t.toKey()]=n),n}getMutationQueue(t,n){let r=this.Br[t.toKey()];return r||(r=new Uv(n,this.referenceDelegate),this.Br[t.toKey()]=r),r}getTargetCache(){return this.qr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Kr}runTransaction(t,n,r){O("MemoryPersistence","Starting transaction:",t);const i=new Wv(this.Lr.next());return this.referenceDelegate.$r(),r(i).next(s=>this.referenceDelegate.Ur(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Wr(t,n){return E.or(Object.values(this.Br).map(r=>()=>r.containsKey(t,n)))}}class Wv extends ky{constructor(t){super(),this.currentSequenceNumber=t}}class Xa{constructor(t){this.persistence=t,this.Gr=new Qa,this.zr=null}static jr(t){return new Xa(t)}get Hr(){if(this.zr)return this.zr;throw X()}addReference(t,n,r){return this.Gr.addReference(r,n),this.Hr.delete(r.toString()),E.resolve()}removeReference(t,n,r){return this.Gr.removeReference(r,n),this.Hr.add(r.toString()),E.resolve()}markPotentiallyOrphaned(t,n){return this.Hr.add(n.toString()),E.resolve()}removeTarget(t,n){this.Gr.Rr(n.targetId).forEach(i=>this.Hr.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(t,n.targetId).next(i=>{i.forEach(s=>this.Hr.add(s.toString()))}).next(()=>r.removeTargetData(t,n))}$r(){this.zr=new Set}Ur(t){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return E.forEach(this.Hr,r=>{const i=H.fromPath(r);return this.Jr(t,i).next(s=>{s||n.removeEntry(i,wt.min())})}).next(()=>(this.zr=null,n.apply(t)))}updateLimboDocument(t,n){return this.Jr(t,n).next(r=>{r?this.Hr.delete(n.toString()):this.Hr.add(n.toString())})}Qr(t){return 0}Jr(t,n){return E.or([()=>E.resolve(this.Gr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(t,n),()=>this.persistence.Wr(t,n)])}}/**
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
 */class Ja{constructor(t,n,r,i){this.targetId=t,this.fromCache=n,this.ki=r,this.qi=i}static Qi(t,n){let r=Jt(),i=Jt();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new Ja(t,n.fromCache,r,i)}}/**
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
 */class qv{constructor(){this.Ki=!1}initialize(t,n){this.$i=t,this.indexManager=n,this.Ki=!0}getDocumentsMatchingQuery(t,n,r,i){return this.Ui(t,n).next(s=>s||this.Wi(t,n,i,r)).next(s=>s||this.Gi(t,n))}Ui(t,n){if(lc(n))return E.resolve(null);let r=fr(n);return this.indexManager.getIndexType(t,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=Xo(n,null,"F"),r=fr(n)),this.indexManager.getDocumentsMatchingTarget(t,r).next(s=>{const o=Jt(...s);return this.$i.getDocuments(t,o).next(a=>this.indexManager.getMinOffset(t,r).next(l=>{const c=this.zi(n,a);return this.ji(n,c,o,l.readTime)?this.Ui(t,Xo(n,null,"F")):this.Hi(t,c,n,l)}))})))}Wi(t,n,r,i){return lc(n)||i.isEqual(wt.min())?this.Gi(t,n):this.$i.getDocuments(t,r).next(s=>{const o=this.zi(n,s);return this.ji(n,o,r,i)?this.Gi(t,n):(ec()<=tt.DEBUG&&O("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),cc(n)),this.Hi(t,o,n,Sy(i,-1)))})}zi(t,n){let r=new fe(Yy(t));return n.forEach((i,s)=>{za(t,s)&&(r=r.add(s))}),r}ji(t,n,r,i){if(t.limit===null)return!1;if(r.size!==n.size)return!0;const s=t.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Gi(t,n){return ec()<=tt.DEBUG&&O("QueryEngine","Using full collection scan to execute query:",cc(n)),this.$i.getDocumentsMatchingQuery(t,n,En.min())}Hi(t,n,r,i){return this.$i.getDocumentsMatchingQuery(t,r,i).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
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
 */class zv{constructor(t,n,r,i){this.persistence=t,this.Ji=n,this.serializer=i,this.Yi=new ye(dt),this.Zi=new Er(s=>Wa(s),qa),this.Xi=new Map,this.es=t.getRemoteDocumentCache(),this.qr=t.getTargetCache(),this.Kr=t.getBundleCache(),this.ts(r)}ts(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new Mv(this.es,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.es.setIndexManager(this.indexManager),this.Ji.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>t.collect(n,this.Yi))}}function Gv(e,t,n,r){return new zv(e,t,n,r)}async function pd(e,t){const n=gt(e);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n.ts(t),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],a=[];let l=Jt();for(const c of i){o.push(c.batchId);for(const u of c.mutations)l=l.add(u.key)}for(const c of s){a.push(c.batchId);for(const u of c.mutations)l=l.add(u.key)}return n.localDocuments.getDocuments(r,l).next(c=>({ns:c,removedBatchIds:o,addedBatchIds:a}))})})}function Kv(e,t){const n=gt(e);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=t.batch.keys(),s=n.es.newChangeBuffer({trackRemovals:!0});return function(a,l,c,u){const h=c.batch,d=h.keys();let f=E.resolve();return d.forEach(y=>{f=f.next(()=>u.getEntry(l,y)).next(w=>{const R=c.docVersions.get(y);Mt(R!==null),w.version.compareTo(R)<0&&(h.applyToRemoteDocument(w,c),w.isValidDocument()&&(w.setReadTime(c.commitVersion),u.addEntry(w)))})}),f.next(()=>a.mutationQueue.removeMutationBatch(l,h))}(n,r,t,s).next(()=>s.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,t.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(a){let l=Jt();for(let c=0;c<a.mutationResults.length;++c)a.mutationResults[c].transformResults.length>0&&(l=l.add(a.batch.mutations[c].key));return l}(t))).next(()=>n.localDocuments.getDocuments(r,i))})}function Qv(e){const t=gt(e);return t.persistence.runTransaction("Get last remote snapshot version","readonly",n=>t.qr.getLastRemoteSnapshotVersion(n))}function Xv(e,t){const n=gt(e);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(t===void 0&&(t=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,t)))}class mc{constructor(){this.activeTargetIds=iv()}Ps(t){this.activeTargetIds=this.activeTargetIds.add(t)}Is(t){this.activeTargetIds=this.activeTargetIds.delete(t)}hs(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class Jv{constructor(){this.Js=new mc,this.Ys={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,n,r){}addLocalQueryTarget(t){return this.Js.Ps(t),this.Ys[t]||"not-current"}updateQueryState(t,n,r){this.Ys[t]=n}removeLocalQueryTarget(t){this.Js.Is(t)}isLocalQueryTarget(t){return this.Js.activeTargetIds.has(t)}clearQueryState(t){delete this.Ys[t]}getAllActiveQueryTargets(){return this.Js.activeTargetIds}isActiveQueryTarget(t){return this.Js.activeTargetIds.has(t)}start(){return this.Js=new mc,Promise.resolve()}handleUserChange(t,n,r){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}/**
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
 */class Yv{Zs(t){}shutdown(){}}/**
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
 */class gc{constructor(){this.Xs=()=>this.eo(),this.no=()=>this.ro(),this.io=[],this.so()}Zs(t){this.io.push(t)}shutdown(){window.removeEventListener("online",this.Xs),window.removeEventListener("offline",this.no)}so(){window.addEventListener("online",this.Xs),window.addEventListener("offline",this.no)}eo(){O("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const t of this.io)t(0)}ro(){O("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const t of this.io)t(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Ui=null;function Eo(){return Ui===null?Ui=function(){return 268435456+Math.round(2147483648*Math.random())}():Ui++,"0x"+Ui.toString(16)}/**
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
 */const Zv={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class t0{constructor(t){this.oo=t.oo,this._o=t._o}ao(t){this.uo=t}co(t){this.lo=t}onMessage(t){this.ho=t}close(){this._o()}send(t){this.oo(t)}Po(){this.uo()}Io(t){this.lo(t)}To(t){this.ho(t)}}/**
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
 */const Qt="WebChannelConnection";class e0 extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.Eo=r+"://"+n.host,this.Ao=`projects/${i}/databases/${s}`,this.Ro=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${s}`}get Vo(){return!1}mo(n,r,i,s,o){const a=Eo(),l=this.fo(n,r);O("RestConnection",`Sending RPC '${n}' ${a}:`,l,i);const c={"google-cloud-resource-prefix":this.Ao,"x-goog-request-params":this.Ro};return this.po(c,s,o),this.yo(n,l,c,i).then(u=>(O("RestConnection",`Received RPC '${n}' ${a}: `,u),u),u=>{throw hs("RestConnection",`RPC '${n}' ${a} failed with error: `,u,"url: ",l,"request:",i),u})}wo(n,r,i,s,o,a){return this.mo(n,r,i,s,o)}po(n,r,i){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+yr}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((s,o)=>n[o]=s),i&&i.headers.forEach((s,o)=>n[o]=s)}fo(n,r){const i=Zv[n];return`${this.Eo}/v1/${r}:${i}`}}{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams,this.longPollingOptions=t.longPollingOptions}yo(t,n,r,i){const s=Eo();return new Promise((o,a)=>{const l=new my;l.setWithCredentials(!0),l.listenOnce(dy.COMPLETE,()=>{try{switch(l.getLastErrorCode()){case vo.NO_ERROR:const u=l.getResponseJson();O(Qt,`XHR for RPC '${t}' ${s} received:`,JSON.stringify(u)),o(u);break;case vo.TIMEOUT:O(Qt,`RPC '${t}' ${s} timed out`),a(new L(v.DEADLINE_EXCEEDED,"Request time out"));break;case vo.HTTP_ERROR:const h=l.getStatus();if(O(Qt,`RPC '${t}' ${s} failed with status:`,h,"response text:",l.getResponseText()),h>0){let d=l.getResponseJson();Array.isArray(d)&&(d=d[0]);const f=d?.error;if(f&&f.status&&f.message){const y=function(R){const T=R.toLowerCase().replace(/_/g,"-");return Object.values(v).indexOf(T)>=0?T:v.UNKNOWN}(f.status);a(new L(y,f.message))}else a(new L(v.UNKNOWN,"Server responded with status "+l.getStatus()))}else a(new L(v.UNAVAILABLE,"Connection failed."));break;default:X()}}finally{O(Qt,`RPC '${t}' ${s} completed.`)}});const c=JSON.stringify(i);O(Qt,`RPC '${t}' ${s} sending request:`,i),l.send(n,"POST",c,r,15)})}So(t,n,r){const i=Eo(),s=[this.Eo,"/","google.firestore.v1.Firestore","/",t,"/channel"],o=uy(),a=hy(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},c=this.longPollingOptions.timeoutSeconds;c!==void 0&&(l.longPollingTimeout=Math.round(1e3*c)),this.useFetchStreams&&(l.xmlHttpFactory=new py({})),this.po(l.initMessageHeaders,n,r),l.encodeInitMessageHeaders=!0;const u=s.join("");O(Qt,`Creating RPC '${t}' stream ${i}: ${u}`,l);const h=o.createWebChannel(u,l);let d=!1,f=!1;const y=new t0({oo:R=>{f?O(Qt,`Not sending because RPC '${t}' stream ${i} is closed:`,R):(d||(O(Qt,`Opening RPC '${t}' stream ${i} transport.`),h.open(),d=!0),O(Qt,`RPC '${t}' stream ${i} sending:`,R),h.send(R))},_o:()=>h.close()}),w=(R,T,q)=>{R.listen(T,z=>{try{q(z)}catch(M){setTimeout(()=>{throw M},0)}})};return w(h,Vi.EventType.OPEN,()=>{f||O(Qt,`RPC '${t}' stream ${i} transport opened.`)}),w(h,Vi.EventType.CLOSE,()=>{f||(f=!0,O(Qt,`RPC '${t}' stream ${i} transport closed`),y.Io())}),w(h,Vi.EventType.ERROR,R=>{f||(f=!0,hs(Qt,`RPC '${t}' stream ${i} transport errored:`,R),y.Io(new L(v.UNAVAILABLE,"The operation could not be completed")))}),w(h,Vi.EventType.MESSAGE,R=>{var T;if(!f){const q=R.data[0];Mt(!!q);const z=q,M=z.error||((T=z[0])===null||T===void 0?void 0:T.error);if(M){O(Qt,`RPC '${t}' stream ${i} received error:`,M);const ct=M.status;let Z=function(lt){const pt=Ct[lt];if(pt!==void 0)return _v(pt)}(ct),ft=M.message;Z===void 0&&(Z=v.INTERNAL,ft="Unknown error status: "+ct+" with message "+M.message),f=!0,y.Io(new L(Z,ft)),h.close()}else O(Qt,`RPC '${t}' stream ${i} received:`,q),y.To(q)}}),w(a,fy.STAT_EVENT,R=>{R.stat===Zl.PROXY?O(Qt,`RPC '${t}' stream ${i} detected buffering proxy`):R.stat===Zl.NOPROXY&&O(Qt,`RPC '${t}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{y.Po()},0),y}}function wo(){return typeof document<"u"?document:null}/**
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
 */function qs(e){return new yv(e,!0)}/**
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
 */class md{constructor(t,n,r=1e3,i=1.5,s=6e4){this.si=t,this.timerId=n,this.bo=r,this.Do=i,this.vo=s,this.Co=0,this.Fo=null,this.Mo=Date.now(),this.reset()}reset(){this.Co=0}xo(){this.Co=this.vo}Oo(t){this.cancel();const n=Math.floor(this.Co+this.No()),r=Math.max(0,Date.now()-this.Mo),i=Math.max(0,n-r);i>0&&O("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Co} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.Fo=this.si.enqueueAfterDelay(this.timerId,i,()=>(this.Mo=Date.now(),t())),this.Co*=this.Do,this.Co<this.bo&&(this.Co=this.bo),this.Co>this.vo&&(this.Co=this.vo)}Bo(){this.Fo!==null&&(this.Fo.skipDelay(),this.Fo=null)}cancel(){this.Fo!==null&&(this.Fo.cancel(),this.Fo=null)}No(){return(Math.random()-.5)*this.Co}}/**
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
 */class n0{constructor(t,n,r,i,s,o,a,l){this.si=t,this.Lo=r,this.ko=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=l,this.state=0,this.qo=0,this.Qo=null,this.Ko=null,this.stream=null,this.$o=new md(t,n)}Uo(){return this.state===1||this.state===5||this.Wo()}Wo(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Go()}async stop(){this.Uo()&&await this.close(0)}zo(){this.state=0,this.$o.reset()}jo(){this.Wo()&&this.Qo===null&&(this.Qo=this.si.enqueueAfterDelay(this.Lo,6e4,()=>this.Ho()))}Jo(t){this.Yo(),this.stream.send(t)}async Ho(){if(this.Wo())return this.close(0)}Yo(){this.Qo&&(this.Qo.cancel(),this.Qo=null)}Zo(){this.Ko&&(this.Ko.cancel(),this.Ko=null)}async close(t,n){this.Yo(),this.Zo(),this.$o.cancel(),this.qo++,t!==4?this.$o.reset():n&&n.code===v.RESOURCE_EXHAUSTED?(Hn(n.toString()),Hn("Using maximum backoff delay to prevent overloading the backend."),this.$o.xo()):n&&n.code===v.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.Xo(),this.stream.close(),this.stream=null),this.state=t,await this.listener.co(n)}Xo(){}auth(){this.state=1;const t=this.e_(this.qo),n=this.qo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.qo===n&&this.t_(r,i)},r=>{t(()=>{const i=new L(v.UNKNOWN,"Fetching auth token failed: "+r.message);return this.n_(i)})})}t_(t,n){const r=this.e_(this.qo);this.stream=this.r_(t,n),this.stream.ao(()=>{r(()=>(this.state=2,this.Ko=this.si.enqueueAfterDelay(this.ko,1e4,()=>(this.Wo()&&(this.state=3),Promise.resolve())),this.listener.ao()))}),this.stream.co(i=>{r(()=>this.n_(i))}),this.stream.onMessage(i=>{r(()=>this.onMessage(i))})}Go(){this.state=5,this.$o.Oo(async()=>{this.state=0,this.start()})}n_(t){return O("PersistentStream",`close with error: ${t}`),this.stream=null,this.close(4,t)}e_(t){return n=>{this.si.enqueueAndForget(()=>this.qo===t?n():(O("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class r0 extends n0{constructor(t,n,r,i,s,o){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s,this.__=!1}get a_(){return this.__}start(){this.__=!1,this.lastStreamToken=void 0,super.start()}Xo(){this.__&&this.u_([])}r_(t,n){return this.connection.So("Write",t,n)}onMessage(t){if(Mt(!!t.streamToken),this.lastStreamToken=t.streamToken,this.__){this.$o.reset();const n=Sv(t.writeResults,t.commitTime),r=ir(t.commitTime);return this.listener.c_(r,n)}return Mt(!t.writeResults||t.writeResults.length===0),this.__=!0,this.listener.l_()}h_(){const t={};t.database=Tv(this.serializer),this.Jo(t)}u_(t){const n={streamToken:this.lastStreamToken,writes:t.map(r=>bv(this.serializer,r))};this.Jo(n)}}/**
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
 */class i0 extends class{}{constructor(t,n,r,i){super(),this.authCredentials=t,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.P_=!1}I_(){if(this.P_)throw new L(v.FAILED_PRECONDITION,"The client has already been terminated.")}mo(t,n,r){return this.I_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,s])=>this.connection.mo(t,n,r,i,s)).catch(i=>{throw i.name==="FirebaseError"?(i.code===v.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new L(v.UNKNOWN,i.toString())})}wo(t,n,r,i){return this.I_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.wo(t,n,r,s,o,i)).catch(s=>{throw s.name==="FirebaseError"?(s.code===v.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new L(v.UNKNOWN,s.toString())})}terminate(){this.P_=!0}}class s0{constructor(t,n){this.asyncQueue=t,this.onlineStateHandler=n,this.state="Unknown",this.E_=0,this.d_=null,this.A_=!0}R_(){this.E_===0&&(this.V_("Unknown"),this.d_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.d_=null,this.m_("Backend didn't respond within 10 seconds."),this.V_("Offline"),Promise.resolve())))}f_(t){this.state==="Online"?this.V_("Unknown"):(this.E_++,this.E_>=1&&(this.g_(),this.m_(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.V_("Offline")))}set(t){this.g_(),this.E_=0,t==="Online"&&(this.A_=!1),this.V_(t)}V_(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}m_(t){const n=`Could not reach Cloud Firestore backend. ${t}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.A_?(Hn(n),this.A_=!1):O("OnlineStateTracker",n)}g_(){this.d_!==null&&(this.d_.cancel(),this.d_=null)}}/**
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
 */class o0{constructor(t,n,r,i,s){this.localStore=t,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.p_=[],this.y_=new Map,this.w_=new Set,this.S_=[],this.b_=s,this.b_.Zs(o=>{r.enqueueAndForget(async()=>{Ti(this)&&(O("RemoteStore","Restarting streams for network reachability change."),await async function(l){const c=gt(l);c.w_.add(4),await Ii(c),c.D_.set("Unknown"),c.w_.delete(4),await zs(c)}(this))})}),this.D_=new s0(r,i)}}async function zs(e){if(Ti(e))for(const t of e.S_)await t(!0)}async function Ii(e){for(const t of e.S_)await t(!1)}function Ti(e){return gt(e).w_.size===0}async function gd(e,t,n){if(!Bs(t))throw t;e.w_.add(1),await Ii(e),e.D_.set("Offline"),n||(n=()=>Qv(e.localStore)),e.asyncQueue.enqueueRetryable(async()=>{O("RemoteStore","Retrying IndexedDB access"),await n(),e.w_.delete(1),await zs(e)})}function _d(e,t){return t().catch(n=>gd(e,n,t))}async function Gs(e){const t=gt(e),n=In(t);let r=t.p_.length>0?t.p_[t.p_.length-1].batchId:-1;for(;a0(t);)try{const i=await Xv(t.localStore,r);if(i===null){t.p_.length===0&&n.jo();break}r=i.batchId,l0(t,i)}catch(i){await gd(t,i)}yd(t)&&vd(t)}function a0(e){return Ti(e)&&e.p_.length<10}function l0(e,t){e.p_.push(t);const n=In(e);n.Wo()&&n.a_&&n.u_(t.mutations)}function yd(e){return Ti(e)&&!In(e).Uo()&&e.p_.length>0}function vd(e){In(e).start()}async function c0(e){In(e).h_()}async function u0(e){const t=In(e);for(const n of e.p_)t.u_(n.mutations)}async function h0(e,t,n){const r=e.p_.shift(),i=Ka.from(r,t,n);await _d(e,()=>e.remoteSyncer.applySuccessfulWrite(i)),await Gs(e)}async function d0(e,t){t&&In(e).a_&&await async function(r,i){if(function(o){return gv(o)&&o!==v.ABORTED}(i.code)){const s=r.p_.shift();In(r).zo(),await _d(r,()=>r.remoteSyncer.rejectFailedWrite(s.batchId,i)),await Gs(r)}}(e,t),yd(e)&&vd(e)}async function _c(e,t){const n=gt(e);n.asyncQueue.verifyOperationInProgress(),O("RemoteStore","RemoteStore received new credentials");const r=Ti(n);n.w_.add(3),await Ii(n),r&&n.D_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(t),n.w_.delete(3),await zs(n)}async function f0(e,t){const n=gt(e);t?(n.w_.delete(2),await zs(n)):t||(n.w_.add(2),await Ii(n),n.D_.set("Unknown"))}function In(e){return e.F_||(e.F_=function(n,r,i){const s=gt(n);return s.I_(),new r0(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(e.datastore,e.asyncQueue,{ao:c0.bind(null,e),co:d0.bind(null,e),l_:u0.bind(null,e),c_:h0.bind(null,e)}),e.S_.push(async t=>{t?(e.F_.zo(),await Gs(e)):(await e.F_.stop(),e.p_.length>0&&(O("RemoteStore",`Stopping write stream with ${e.p_.length} pending writes`),e.p_=[]))})),e.F_}/**
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
 */class Ya{constructor(t,n,r,i,s){this.asyncQueue=t,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new Mn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(t,n,r,i,s){const o=Date.now()+r,a=new Ya(t,n,o,i,s);return a.start(r),a}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new L(v.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Ed(e,t){if(Hn("AsyncQueue",`${t}: ${e}`),Bs(e))return new L(v.UNAVAILABLE,`${t}: ${e}`);throw e}class p0{constructor(){this.queries=new Er(t=>td(t),Zh),this.onlineState="Unknown",this.N_=new Set}}function m0(e){e.N_.forEach(t=>{t.next()})}class g0{constructor(t,n,r,i,s,o){this.localStore=t,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.Ea={},this.da=new Er(a=>td(a),Zh),this.Aa=new Map,this.Ra=new Set,this.Va=new ye(H.comparator),this.ma=new Map,this.fa=new Qa,this.ga={},this.pa=new Map,this.ya=pr.Nn(),this.onlineState="Unknown",this.wa=void 0}get isPrimaryClient(){return this.wa===!0}}async function _0(e,t,n){const r=w0(e);try{const i=await function(o,a){const l=gt(o),c=Lt.now(),u=a.reduce((f,y)=>f.add(y.key),Jt());let h,d;return l.persistence.runTransaction("Locally write mutations","readwrite",f=>{let y=gs(),w=Jt();return l.es.getEntries(f,u).next(R=>{y=R,y.forEach((T,q)=>{q.isValidDocument()||(w=w.add(T))})}).next(()=>l.localDocuments.getOverlayedDocuments(f,y)).next(R=>{h=R;const T=[];for(const q of a){const z=dv(q,h.get(q.key).overlayedDocument);z!=null&&T.push(new bn(q.key,z,zh(z.value.mapValue),Ne.exists(!0)))}return l.mutationQueue.addMutationBatch(f,c,T,a)}).next(R=>{d=R;const T=R.applyToLocalDocumentSet(h,w);return l.documentOverlayCache.saveOverlays(f,R.batchId,T)})}).then(()=>({batchId:d.batchId,changes:nd(h)}))}(r.localStore,t);r.sharedClientState.addPendingMutation(i.batchId),function(o,a,l){let c=o.ga[o.currentUser.toKey()];c||(c=new ye(dt)),c=c.insert(a,l),o.ga[o.currentUser.toKey()]=c}(r,i.batchId,n),await Ks(r,i.changes),await Gs(r.remoteStore)}catch(i){const s=Ed(i,"Failed to persist write");n.reject(s)}}function yc(e,t,n){const r=gt(e);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.da.forEach((s,o)=>{const a=o.view.B_(t);a.snapshot&&i.push(a.snapshot)}),function(o,a){const l=gt(o);l.onlineState=a;let c=!1;l.queries.forEach((u,h)=>{for(const d of h.listeners)d.B_(a)&&(c=!0)}),c&&m0(l)}(r.eventManager,t),i.length&&r.Ea.i_(i),r.onlineState=t,r.isPrimaryClient&&r.sharedClientState.setOnlineState(t)}}async function y0(e,t){const n=gt(e),r=t.batch.batchId;try{const i=await Kv(n.localStore,t);Id(n,r,null),wd(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Ks(n,i)}catch(i){await jh(i)}}async function v0(e,t,n){const r=gt(e);try{const i=await function(o,a){const l=gt(o);return l.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let u;return l.mutationQueue.lookupMutationBatch(c,a).next(h=>(Mt(h!==null),u=h.keys(),l.mutationQueue.removeMutationBatch(c,h))).next(()=>l.mutationQueue.performConsistencyCheck(c)).next(()=>l.documentOverlayCache.removeOverlaysForBatchId(c,u,a)).next(()=>l.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(c,u)).next(()=>l.localDocuments.getDocuments(c,u))})}(r.localStore,t);Id(r,t,n),wd(r,t),r.sharedClientState.updateMutationState(t,"rejected",n),await Ks(r,i)}catch(i){await jh(i)}}function wd(e,t){(e.pa.get(t)||[]).forEach(n=>{n.resolve()}),e.pa.delete(t)}function Id(e,t,n){const r=gt(e);let i=r.ga[r.currentUser.toKey()];if(i){const s=i.get(t);s&&(n?s.reject(n):s.resolve(),i=i.remove(t)),r.ga[r.currentUser.toKey()]=i}}async function Ks(e,t,n){const r=gt(e),i=[],s=[],o=[];r.da.isEmpty()||(r.da.forEach((a,l)=>{o.push(r.Sa(l,t,n).then(c=>{if((c||n)&&r.isPrimaryClient&&r.sharedClientState.updateQueryState(l.targetId,c?.fromCache?"not-current":"current"),c){i.push(c);const u=Ja.Qi(l.targetId,c);s.push(u)}}))}),await Promise.all(o),r.Ea.i_(i),await async function(l,c){const u=gt(l);try{await u.persistence.runTransaction("notifyLocalViewChanges","readwrite",h=>E.forEach(c,d=>E.forEach(d.ki,f=>u.persistence.referenceDelegate.addReference(h,d.targetId,f)).next(()=>E.forEach(d.qi,f=>u.persistence.referenceDelegate.removeReference(h,d.targetId,f)))))}catch(h){if(!Bs(h))throw h;O("LocalStore","Failed to update sequence numbers: "+h)}for(const h of c){const d=h.targetId;if(!h.fromCache){const f=u.Yi.get(d),y=f.snapshotVersion,w=f.withLastLimboFreeSnapshotVersion(y);u.Yi=u.Yi.insert(d,w)}}}(r.localStore,s))}async function E0(e,t){const n=gt(e);if(!n.currentUser.isEqual(t)){O("SyncEngine","User change. New user:",t.toKey());const r=await pd(n.localStore,t);n.currentUser=t,function(s,o){s.pa.forEach(a=>{a.forEach(l=>{l.reject(new L(v.CANCELLED,o))})}),s.pa.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(t,r.removedBatchIds,r.addedBatchIds),await Ks(n,r.ns)}}function w0(e){const t=gt(e);return t.remoteStore.remoteSyncer.applySuccessfulWrite=y0.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=v0.bind(null,t),t}class vc{constructor(){this.synchronizeTabs=!1}async initialize(t){this.serializer=qs(t.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(t),this.persistence=this.createPersistence(t),await this.persistence.start(),this.localStore=this.createLocalStore(t),this.gcScheduler=this.createGarbageCollectionScheduler(t,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(t,this.localStore)}createGarbageCollectionScheduler(t,n){return null}createIndexBackfillerScheduler(t,n){return null}createLocalStore(t){return Gv(this.persistence,new qv,t.initialUser,this.serializer)}createPersistence(t){return new Hv(Xa.jr,this.serializer)}createSharedClientState(t){return new Jv}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class I0{async initialize(t,n){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>yc(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=E0.bind(null,this.syncEngine),await f0(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return function(){return new p0}()}createDatastore(t){const n=qs(t.databaseInfo.databaseId),r=function(s){return new e0(s)}(t.databaseInfo);return function(s,o,a,l){return new i0(s,o,a,l)}(t.authCredentials,t.appCheckCredentials,r,n)}createRemoteStore(t){return function(r,i,s,o,a){return new o0(r,i,s,o,a)}(this.localStore,this.datastore,t.asyncQueue,n=>yc(this.syncEngine,n,0),function(){return gc.v()?new gc:new Yv}())}createSyncEngine(t,n){return function(i,s,o,a,l,c,u){const h=new g0(i,s,o,a,l,c);return u&&(h.wa=!0),h}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,n)}terminate(){return async function(n){const r=gt(n);O("RemoteStore","RemoteStore shutting down."),r.w_.add(5),await Ii(r),r.b_.shutdown(),r.D_.set("Unknown")}(this.remoteStore)}}/**
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
 */class T0{constructor(t,n,r,i){this.authCredentials=t,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=Xt.UNAUTHENTICATED,this.clientId=Bh.V(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async s=>{O("FirestoreClient","Received user=",s.uid),await this.authCredentialListener(s),this.user=s}),this.appCheckCredentials.start(r,s=>(O("FirestoreClient","Received new app check token=",s),this.appCheckCredentialListener(s,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new L(v.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const t=new Mn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(n){const r=Ed(n,"Failed to shutdown persistence");t.reject(r)}}),t.promise}}async function Io(e,t){e.asyncQueue.verifyOperationInProgress(),O("FirestoreClient","Initializing OfflineComponentProvider");const n=await e.getConfiguration();await t.initialize(n);let r=n.initialUser;e.setCredentialChangeListener(async i=>{r.isEqual(i)||(await pd(t.localStore,i),r=i)}),t.persistence.setDatabaseDeletedListener(()=>e.terminate()),e._offlineComponents=t}async function Ec(e,t){e.asyncQueue.verifyOperationInProgress();const n=await b0(e);O("FirestoreClient","Initializing OnlineComponentProvider");const r=await e.getConfiguration();await t.initialize(n,r),e.setCredentialChangeListener(i=>_c(t.remoteStore,i)),e.setAppCheckTokenChangeListener((i,s)=>_c(t.remoteStore,s)),e._onlineComponents=t}function A0(e){return e.name==="FirebaseError"?e.code===v.FAILED_PRECONDITION||e.code===v.UNIMPLEMENTED:!(typeof DOMException<"u"&&e instanceof DOMException)||e.code===22||e.code===20||e.code===11}async function b0(e){if(!e._offlineComponents)if(e._uninitializedComponentsProvider){O("FirestoreClient","Using user provided OfflineComponentProvider");try{await Io(e,e._uninitializedComponentsProvider._offline)}catch(t){const n=t;if(!A0(n))throw n;hs("Error using user provided cache. Falling back to memory cache: "+n),await Io(e,new vc)}}else O("FirestoreClient","Using default OfflineComponentProvider"),await Io(e,new vc);return e._offlineComponents}async function S0(e){return e._onlineComponents||(e._uninitializedComponentsProvider?(O("FirestoreClient","Using user provided OnlineComponentProvider"),await Ec(e,e._uninitializedComponentsProvider._online)):(O("FirestoreClient","Using default OnlineComponentProvider"),await Ec(e,new I0))),e._onlineComponents}function P0(e){return S0(e).then(t=>t.syncEngine)}/**
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
 */function Td(e){const t={};return e.timeoutSeconds!==void 0&&(t.timeoutSeconds=e.timeoutSeconds),t}/**
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
 */const wc=new Map;/**
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
 */function Ad(e,t,n){if(!n)throw new L(v.INVALID_ARGUMENT,`Function ${e}() cannot be called with an empty ${t}.`)}function R0(e,t,n,r){if(t===!0&&r===!0)throw new L(v.INVALID_ARGUMENT,`${e} and ${n} cannot be used together.`)}function Ic(e){if(!H.isDocumentKey(e))throw new L(v.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${e} has ${e.length}.`)}function Tc(e){if(H.isDocumentKey(e))throw new L(v.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${e} has ${e.length}.`)}function Za(e){if(e===void 0)return"undefined";if(e===null)return"null";if(typeof e=="string")return e.length>20&&(e=`${e.substring(0,20)}...`),JSON.stringify(e);if(typeof e=="number"||typeof e=="boolean")return""+e;if(typeof e=="object"){if(e instanceof Array)return"an array";{const t=function(r){return r.constructor?r.constructor.name:null}(e);return t?`a custom ${t} object`:"an object"}}return typeof e=="function"?"a function":X()}function bd(e,t){if("_delegate"in e&&(e=e._delegate),!(e instanceof t)){if(t.name===e.constructor.name)throw new L(v.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Za(e);throw new L(v.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${n}`)}}return e}/**
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
 */class Ac{constructor(t){var n,r;if(t.host===void 0){if(t.ssl!==void 0)throw new L(v.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=(n=t.ssl)===null||n===void 0||n;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,t.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<1048576)throw new L(v.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}R0("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:t.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Td((r=t.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new L(v.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new L(v.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new L(v.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class Qs{constructor(t,n,r,i){this._authCredentials=t,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Ac({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new L(v.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(t){if(this._settingsFrozen)throw new L(v.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Ac(t),t.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new _y;switch(r.type){case"firstParty":return new wy(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new L(v.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=wc.get(n);r&&(O("ComponentProvider","Removing Datastore"),wc.delete(n),r.terminate())}(this),Promise.resolve()}}function C0(e,t,n,r={}){var i;const s=(e=bd(e,Qs))._getSettings(),o=`${t}:${n}`;if(s.host!=="firestore.googleapis.com"&&s.host!==o&&hs("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),e._setSettings(Object.assign(Object.assign({},s),{host:o,ssl:!1})),r.mockUserToken){let a,l;if(typeof r.mockUserToken=="string")a=r.mockUserToken,l=Xt.MOCK_USER;else{a=Bf(r.mockUserToken,(i=e._app)===null||i===void 0?void 0:i.options.projectId);const c=r.mockUserToken.sub||r.mockUserToken.user_id;if(!c)throw new L(v.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");l=new Xt(c)}e._authCredentials=new yy(new $h(a,l))}}/**
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
 */class tl{constructor(t,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=t}withConverter(t){return new tl(this.firestore,t,this._query)}}class Ze{constructor(t,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new yn(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new Ze(this.firestore,t,this._key)}}class yn extends tl{constructor(t,n,r){super(t,n,Gy(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new Ze(this.firestore,null,new H(t))}withConverter(t){return new yn(this.firestore,t,this._path)}}function k0(e,t,...n){if(e=ne(e),Ad("collection","path",t),e instanceof Qs){const r=At.fromString(t,...n);return Tc(r),new yn(e,null,r)}{if(!(e instanceof Ze||e instanceof yn))throw new L(v.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=e._path.child(At.fromString(t,...n));return Tc(r),new yn(e.firestore,null,r)}}function bc(e,t,...n){if(e=ne(e),arguments.length===1&&(t=Bh.V()),Ad("doc","path",t),e instanceof Qs){const r=At.fromString(t,...n);return Ic(r),new Ze(e,null,new H(r))}{if(!(e instanceof Ze||e instanceof yn))throw new L(v.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=e._path.child(At.fromString(t,...n));return Ic(r),new Ze(e.firestore,e instanceof yn?e.converter:null,new H(r))}}/**
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
 */class D0{constructor(){this.Ga=Promise.resolve(),this.za=[],this.ja=!1,this.Ha=[],this.Ja=null,this.Ya=!1,this.Za=!1,this.Xa=[],this.$o=new md(this,"async_queue_retry"),this.eu=()=>{const n=wo();n&&O("AsyncQueue","Visibility state changed to "+n.visibilityState),this.$o.Bo()};const t=wo();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.eu)}get isShuttingDown(){return this.ja}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.tu(),this.nu(t)}enterRestrictedMode(t){if(!this.ja){this.ja=!0,this.Za=t||!1;const n=wo();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.eu)}}enqueue(t){if(this.tu(),this.ja)return new Promise(()=>{});const n=new Mn;return this.nu(()=>this.ja&&this.Za?Promise.resolve():(t().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.za.push(t),this.ru()))}async ru(){if(this.za.length!==0){try{await this.za[0](),this.za.shift(),this.$o.reset()}catch(t){if(!Bs(t))throw t;O("AsyncQueue","Operation failed with retryable error: "+t)}this.za.length>0&&this.$o.Oo(()=>this.ru())}}nu(t){const n=this.Ga.then(()=>(this.Ya=!0,t().catch(r=>{this.Ja=r,this.Ya=!1;const i=function(o){let a=o.message||"";return o.stack&&(a=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),a}(r);throw Hn("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.Ya=!1,r))));return this.Ga=n,n}enqueueAfterDelay(t,n,r){this.tu(),this.Xa.indexOf(t)>-1&&(n=0);const i=Ya.createAndSchedule(this,t,n,r,s=>this.iu(s));return this.Ha.push(i),i}tu(){this.Ja&&X()}verifyOperationInProgress(){}async su(){let t;do t=this.Ga,await t;while(t!==this.Ga)}ou(t){for(const n of this.Ha)if(n.timerId===t)return!0;return!1}_u(t){return this.su().then(()=>{this.Ha.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.Ha)if(n.skipDelay(),t!=="all"&&n.timerId===t)break;return this.su()})}au(t){this.Xa.push(t)}iu(t){const n=this.Ha.indexOf(t);this.Ha.splice(n,1)}}class Sd extends Qs{constructor(t,n,r,i){super(t,n,r,i),this.type="firestore",this._queue=function(){return new D0}(),this._persistenceKey=i?.name||"[DEFAULT]"}_terminate(){return this._firestoreClient||Rd(this),this._firestoreClient.terminate()}}function O0(e,t){const n=typeof e=="object"?e:su(),r=typeof e=="string"?e:t||"(default)",i=ca(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=Uf("firestore");s&&C0(i,...s)}return i}function Pd(e){return e._firestoreClient||Rd(e),e._firestoreClient.verifyNotTerminated(),e._firestoreClient}function Rd(e){var t,n,r;const i=e._freezeSettings(),s=function(a,l,c,u){return new Ly(a,l,c,u.host,u.ssl,u.experimentalForceLongPolling,u.experimentalAutoDetectLongPolling,Td(u.experimentalLongPollingOptions),u.useFetchStreams)}(e._databaseId,((t=e._app)===null||t===void 0?void 0:t.options.appId)||"",e._persistenceKey,i);e._firestoreClient=new T0(e._authCredentials,e._appCheckCredentials,e._queue,s),!((n=i.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(e._firestoreClient._uninitializedComponentsProvider={_offlineKind:i.localCache.kind,_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider})}/**
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
 */class ri{constructor(t){this._byteString=t}static fromBase64String(t){try{return new ri(rn.fromBase64String(t))}catch(n){throw new L(v.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(t){return new ri(rn.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}/**
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
 */class el{constructor(...t){for(let n=0;n<t.length;++n)if(t[n].length===0)throw new L(v.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Yt(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}/**
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
 */class Xs{constructor(t){this._methodName=t}}/**
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
 */class Cd{constructor(t,n){if(!isFinite(t)||t<-90||t>90)throw new L(v.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(n)||n<-180||n>180)throw new L(v.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=t,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return dt(this._lat,t._lat)||dt(this._long,t._long)}}/**
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
 */const N0=/^__.*__$/;class L0{constructor(t,n,r){this.data=t,this.fieldMask=n,this.fieldTransforms=r}toMutation(t,n){return this.fieldMask!==null?new bn(t,this.data,this.fieldMask,n,this.fieldTransforms):new wi(t,this.data,n,this.fieldTransforms)}}class kd{constructor(t,n,r){this.data=t,this.fieldMask=n,this.fieldTransforms=r}toMutation(t,n){return new bn(t,this.data,this.fieldMask,n,this.fieldTransforms)}}function Dd(e){switch(e){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw X()}}class nl{constructor(t,n,r,i,s,o){this.settings=t,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.uu(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get cu(){return this.settings.cu}lu(t){return new nl(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}hu(t){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(t),i=this.lu({path:r,Pu:!1});return i.Iu(t),i}Tu(t){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(t),i=this.lu({path:r,Pu:!1});return i.uu(),i}Eu(t){return this.lu({path:void 0,Pu:!0})}du(t){return ys(t,this.settings.methodName,this.settings.Au||!1,this.path,this.settings.Ru)}contains(t){return this.fieldMask.find(n=>t.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>t.isPrefixOf(n.field))!==void 0}uu(){if(this.path)for(let t=0;t<this.path.length;t++)this.Iu(this.path.get(t))}Iu(t){if(t.length===0)throw this.du("Document fields must not be empty");if(Dd(this.cu)&&N0.test(t))throw this.du('Document fields cannot begin and end with "__"')}}class V0{constructor(t,n,r){this.databaseId=t,this.ignoreUndefinedProperties=n,this.serializer=r||qs(t)}Vu(t,n,r,i=!1){return new nl({cu:t,methodName:n,Ru:r,path:Yt.emptyPath(),Pu:!1,Au:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function M0(e){const t=e._freezeSettings(),n=qs(e._databaseId);return new V0(e._databaseId,!!t.ignoreUndefinedProperties,n)}function x0(e,t,n,r,i,s={}){const o=e.Vu(s.merge||s.mergeFields?2:0,t,n,i);il("Data must be an object, but it was:",o,r);const a=Od(r,o);let l,c;if(s.merge)l=new Ee(o.fieldMask),c=o.fieldTransforms;else if(s.mergeFields){const u=[];for(const h of s.mergeFields){const d=Zo(t,h,n);if(!o.contains(d))throw new L(v.INVALID_ARGUMENT,`Field '${d}' is specified in your field mask but missing from your input data.`);Vd(u,d)||u.push(d)}l=new Ee(u),c=o.fieldTransforms.filter(h=>l.covers(h.field))}else l=null,c=o.fieldTransforms;return new L0(new ve(a),l,c)}class Js extends Xs{_toFieldTransform(t){if(t.cu!==2)throw t.cu===1?t.du(`${this._methodName}() can only appear at the top level of your update data`):t.du(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return t.fieldMask.push(t.path),null}isEqual(t){return t instanceof Js}}class rl extends Xs{_toFieldTransform(t){return new lv(t.path,new ti)}isEqual(t){return t instanceof rl}}function F0(e,t,n,r){const i=e.Vu(1,t,n);il("Data must be an object, but it was:",i,r);const s=[],o=ve.empty();vr(r,(l,c)=>{const u=Ld(t,l,n);c=ne(c);const h=i.Tu(u);if(c instanceof Js)s.push(u);else{const d=Ys(c,h);d!=null&&(s.push(u),o.set(u,d))}});const a=new Ee(s);return new kd(o,a,i.fieldTransforms)}function U0(e,t,n,r,i,s){const o=e.Vu(1,t,n),a=[Zo(t,r,n)],l=[i];if(s.length%2!=0)throw new L(v.INVALID_ARGUMENT,`Function ${t}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let d=0;d<s.length;d+=2)a.push(Zo(t,s[d])),l.push(s[d+1]);const c=[],u=ve.empty();for(let d=a.length-1;d>=0;--d)if(!Vd(c,a[d])){const f=a[d];let y=l[d];y=ne(y);const w=o.Tu(f);if(y instanceof Js)c.push(f);else{const R=Ys(y,w);R!=null&&(c.push(f),u.set(f,R))}}const h=new Ee(c);return new kd(u,h,o.fieldTransforms)}function Ys(e,t){if(Nd(e=ne(e)))return il("Unsupported field value:",t,e),Od(e,t);if(e instanceof Xs)return function(r,i){if(!Dd(i.cu))throw i.du(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.du(`${r._methodName}() is not currently supported inside arrays`);const s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(e,t),null;if(e===void 0&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),e instanceof Array){if(t.settings.Pu&&t.cu!==4)throw t.du("Nested arrays are not supported");return function(r,i){const s=[];let o=0;for(const a of r){let l=Ys(a,i.Eu(o));l==null&&(l={nullValue:"NULL_VALUE"}),s.push(l),o++}return{arrayValue:{values:s}}}(e,t)}return function(r,i){if((r=ne(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return sv(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const s=Lt.fromDate(r);return{timestampValue:Jo(i.serializer,s)}}if(r instanceof Lt){const s=new Lt(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Jo(i.serializer,s)}}if(r instanceof Cd)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof ri)return{bytesValue:vv(i.serializer,r._byteString)};if(r instanceof Ze){const s=i.databaseId,o=r.firestore._databaseId;if(!o.isEqual(s))throw i.du(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:dd(r.firestore._databaseId||i.databaseId,r._key.path)}}throw i.du(`Unsupported field value: ${Za(r)}`)}(e,t)}function Od(e,t){const n={};return Wh(e)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):vr(e,(r,i)=>{const s=Ys(i,t.hu(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function Nd(e){return!(typeof e!="object"||e===null||e instanceof Array||e instanceof Date||e instanceof Lt||e instanceof Cd||e instanceof ri||e instanceof Ze||e instanceof Xs)}function il(e,t,n){if(!Nd(n)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(n)){const r=Za(n);throw r==="an object"?t.du(e+" a custom object"):t.du(e+" "+r)}}function Zo(e,t,n){if((t=ne(t))instanceof el)return t._internalPath;if(typeof t=="string")return Ld(e,t);throw ys("Field path arguments must be of type string or ",e,!1,void 0,n)}const $0=new RegExp("[~\\*/\\[\\]]");function Ld(e,t,n){if(t.search($0)>=0)throw ys(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,e,!1,void 0,n);try{return new el(...t.split("."))._internalPath}catch{throw ys(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,e,!1,void 0,n)}}function ys(e,t,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let a=`Function ${t}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(s||o)&&(l+=" (found",s&&(l+=` in field ${r}`),o&&(l+=` in document ${i}`),l+=")"),new L(v.INVALID_ARGUMENT,a+e+l)}function Vd(e,t){return e.some(n=>n.isEqual(t))}/**
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
 */function B0(e,t,n){let r;return r=e?n&&(n.merge||n.mergeFields)?e.toFirestore(t,n):e.toFirestore(t):t,r}function j0(e,t){return function(r,i){const s=new Mn;return r.asyncQueue.enqueueAndForget(async()=>_0(await P0(r),i,s)),s.promise}(Pd(e),t)}/**
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
 */class H0{constructor(t,n){this._firestore=t,this._commitHandler=n,this._mutations=[],this._committed=!1,this._dataReader=M0(t)}set(t,n,r){this._verifyNotCommitted();const i=To(t,this._firestore),s=B0(i.converter,n,r),o=x0(this._dataReader,"WriteBatch.set",i._key,s,i.converter!==null,r);return this._mutations.push(o.toMutation(i._key,Ne.none())),this}update(t,n,r,...i){this._verifyNotCommitted();const s=To(t,this._firestore);let o;return o=typeof(n=ne(n))=="string"||n instanceof el?U0(this._dataReader,"WriteBatch.update",s._key,n,r,i):F0(this._dataReader,"WriteBatch.update",s._key,n),this._mutations.push(o.toMutation(s._key,Ne.exists(!0))),this}delete(t){this._verifyNotCommitted();const n=To(t,this._firestore);return this._mutations=this._mutations.concat(new Ga(n._key,Ne.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new L(v.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}}function To(e,t){if((e=ne(e)).firestore!==t)throw new L(v.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return e}function Sc(){return new rl("serverTimestamp")}/**
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
 */function W0(e){return Pd(e=bd(e,Sd)),new H0(e,t=>j0(e,t))}(function(t,n=!0){(function(i){yr=i})(mr),ar(new Un("firestore",(r,{instanceIdentifier:i,options:s})=>{const o=r.getProvider("app").getImmediate(),a=new Sd(new vy(r.getProvider("auth-internal")),new Ty(r.getProvider("app-check-internal")),function(c,u){if(!Object.prototype.hasOwnProperty.apply(c.options,["projectId"]))throw new L(v.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new ps(c.options.projectId,u)}(o,i),o);return s=Object.assign({useFetchStreams:n},s),a._setSettings(s),a},"PUBLIC").setMultipleInstances(!0)),_n(tc,"4.1.1",t),_n(tc,"4.1.1","esm2017")})();const q0="documents",z0="users",G0=Po(Df,JSON.parse('{"apiKey":"AIzaSyAhpfDKmhUn42QO99-qOn8fhPzAlD36Fww","authDomain":"pension-act.firebaseapp.com","projectId":"pension-act","storageBucket":"pension-act.appspot.com","messagingSenderId":"87809914227","appId":"1:87809914227:web:8a7fe2ad993b908c4f4106"}')),K0=iu(G0),Ao=O0(K0),Pc=c_(),Q0=e=>new Promise((t,n)=>{Jm(e,r=>r?t(r):n())}),X0=async e=>{await qm(Pc);const t=await Q0(Pc),n=W0(Ao),r=bc(k0(Ao,q0)),i=bc(Ao,z0,t.uid);return n.set(r,{...e,uid:t.uid,timestamp:Sc()}),n.set(i,{timestamp:Sc()},{merge:!0}),n.commit()};function Rc(e,t,n){const r=e.slice();return r[28]=t[n],r}function Cc(e,t,n){const r=e.slice();return r[31]=t[n],r}function kc(e,t,n){const r=e.slice();return r[34]=t[n],r}function J0(e){let t,n='<span class="label-text heading-03">เขียนที่*</span>',r,i,s,o,a,l,c,u;return{c(){t=A("label"),t.innerHTML=n,r=G(),i=A("input"),o=G(),a=A("div"),l=A("span"),c=Ae("ระบุสถานที่กรอกข้อมูลเช่น จังหวัด"),this.h()},l(h){t=b(h,"LABEL",{class:!0,for:!0,"data-svelte-h":!0}),kt(t)!=="svelte-1u4zzld"&&(t.innerHTML=n),r=K(h),i=b(h,"INPUT",{type:!0,name:!0,class:!0}),o=K(h),a=b(h,"DIV",{class:!0});var d=V(a);l=b(d,"SPAN",{class:!0});var f=V(l);c=be(f,"ระบุสถานที่กรอกข้อมูลเช่น จังหวัด"),f.forEach(m),d.forEach(m),this.h()},h(){p(t,"class","label"),p(t,"for","location"),p(i,"type","string"),p(i,"name","location"),p(i,"class",s="input rounded-sm bg-base-200 "+(e[27]?"input-error":"")),i.disabled=e[5],p(l,"class",u="label-text-alt "+(e[27]?"text-error":"text-neutral opacity-[60%]")),p(a,"class","label")},m(h,d){D(h,t,d),D(h,r,d),D(h,i,d),D(h,o,d),D(h,a,d),P(a,l),P(l,c)},p(h,d){d[0]&134217728&&s!==(s="input rounded-sm bg-base-200 "+(h[27]?"input-error":""))&&p(i,"class",s),d[0]&32&&(i.disabled=h[5]),d[0]&134217728&&u!==(u="label-text-alt "+(h[27]?"text-error":"text-neutral opacity-[60%]"))&&p(l,"class",u)},d(h){h&&(m(t),m(r),m(i),m(o),m(a))}}}function Dc(e){let t,n=e[34]+"",r,i,s;return{c(){t=A("option"),r=Ae(n),this.h()},l(o){t=b(o,"OPTION",{});var a=V(t);r=be(a,n),a.forEach(m),this.h()},h(){t.selected=i=e[34]===e[10].getDate(),t.__value=s=e[34],fn(t,t.__value)},m(o,a){D(o,t,a),P(t,r)},p(o,a){a[0]&64&&n!==(n=o[34]+"")&&Uc(r,n),a[0]&64&&i!==(i=o[34]===o[10].getDate())&&(t.selected=i),a[0]&64&&s!==(s=o[34])&&(t.__value=s,fn(t,t.__value))},d(o){o&&m(t)}}}function Y0(e){let t,n='<span class="label-text heading-03">วันที่ลงชื่อ*</span>',r,i,s,o,a,l=sr(e[6]),c=[];for(let u=0;u<l.length;u+=1)c[u]=Dc(kc(e,l,u));return{c(){t=A("label"),t.innerHTML=n,r=G(),i=A("select");for(let u=0;u<c.length;u+=1)c[u].c();this.h()},l(u){t=b(u,"LABEL",{class:!0,for:!0,"data-svelte-h":!0}),kt(t)!=="svelte-3sdafr"&&(t.innerHTML=n),r=K(u),i=b(u,"SELECT",{class:!0,name:!0});var h=V(i);for(let d=0;d<c.length;d+=1)c[d].l(h);h.forEach(m),this.h()},h(){p(t,"class","label"),p(t,"for","day"),p(i,"class",s="select rounded-sm max-w-xs bg-base-200 "+(e[27]?"input-error":"")),i.disabled=e[5],p(i,"name","day"),e[0].day===void 0&&na(()=>e[14].call(i))},m(u,h){D(u,t,h),D(u,r,h),D(u,i,h);for(let d=0;d<c.length;d+=1)c[d]&&c[d].m(i,null);or(i,e[0].day,!0),o||(a=ii(i,"change",e[14]),o=!0)},p(u,h){if(h[0]&1088){l=sr(u[6]);let d;for(d=0;d<l.length;d+=1){const f=kc(u,l,d);c[d]?c[d].p(f,h):(c[d]=Dc(f),c[d].c(),c[d].m(i,null))}for(;d<c.length;d+=1)c[d].d(1);c.length=l.length}h[0]&134217728&&s!==(s="select rounded-sm max-w-xs bg-base-200 "+(u[27]?"input-error":""))&&p(i,"class",s),h[0]&32&&(i.disabled=u[5]),h[0]&65&&or(i,u[0].day)},d(u){u&&(m(t),m(r),m(i)),ra(c,u),o=!1,a()}}}function Oc(e){let t,n=e[31]+"",r;return{c(){t=A("option"),r=Ae(n),this.h()},l(i){t=b(i,"OPTION",{});var s=V(t);r=be(s,n),s.forEach(m),this.h()},h(){t.selected=e[31]===e[10].getMonth()+1,t.__value=e[31],fn(t,t.__value)},m(i,s){D(i,t,s),P(t,r)},p:Ye,d(i){i&&m(t)}}}function Z0(e){let t,n='<span class="label-text heading-03">เดือน*</span>',r,i,s,o,a,l=sr(e[8]),c=[];for(let u=0;u<l.length;u+=1)c[u]=Oc(Cc(e,l,u));return{c(){t=A("label"),t.innerHTML=n,r=G(),i=A("select");for(let u=0;u<c.length;u+=1)c[u].c();this.h()},l(u){t=b(u,"LABEL",{class:!0,for:!0,"data-svelte-h":!0}),kt(t)!=="svelte-1vflusj"&&(t.innerHTML=n),r=K(u),i=b(u,"SELECT",{class:!0,name:!0});var h=V(i);for(let d=0;d<c.length;d+=1)c[d].l(h);h.forEach(m),this.h()},h(){p(t,"class","label"),p(t,"for","month"),p(i,"class",s="select rounded-sm max-w-xs bg-base-200 "+(e[27]?"input-error":"")),i.disabled=e[5],p(i,"name","month"),e[0].month===void 0&&na(()=>e[15].call(i))},m(u,h){D(u,t,h),D(u,r,h),D(u,i,h);for(let d=0;d<c.length;d+=1)c[d]&&c[d].m(i,null);or(i,e[0].month,!0),o||(a=ii(i,"change",e[15]),o=!0)},p(u,h){if(h[0]&1280){l=sr(u[8]);let d;for(d=0;d<l.length;d+=1){const f=Cc(u,l,d);c[d]?c[d].p(f,h):(c[d]=Oc(f),c[d].c(),c[d].m(i,null))}for(;d<c.length;d+=1)c[d].d(1);c.length=l.length}h[0]&134217728&&s!==(s="select rounded-sm max-w-xs bg-base-200 "+(u[27]?"input-error":""))&&p(i,"class",s),h[0]&32&&(i.disabled=u[5]),h[0]&65&&or(i,u[0].month)},d(u){u&&(m(t),m(r),m(i)),ra(c,u),o=!1,a()}}}function Nc(e){let t,n=e[28]+"",r;return{c(){t=A("option"),r=Ae(n),this.h()},l(i){t=b(i,"OPTION",{});var s=V(t);r=be(s,n),s.forEach(m),this.h()},h(){t.selected=e[28]===e[10].getFullYear(),t.__value=e[28],fn(t,t.__value)},m(i,s){D(i,t,s),P(t,r)},p:Ye,d(i){i&&m(t)}}}function tE(e){let t,n='<span class="label-text heading-03">ปีพ.ศ.*</span>',r,i,s,o,a,l=sr(e[9]),c=[];for(let u=0;u<l.length;u+=1)c[u]=Nc(Rc(e,l,u));return{c(){t=A("label"),t.innerHTML=n,r=G(),i=A("select");for(let u=0;u<c.length;u+=1)c[u].c();this.h()},l(u){t=b(u,"LABEL",{class:!0,for:!0,"data-svelte-h":!0}),kt(t)!=="svelte-1musnz3"&&(t.innerHTML=n),r=K(u),i=b(u,"SELECT",{class:!0,name:!0});var h=V(i);for(let d=0;d<c.length;d+=1)c[d].l(h);h.forEach(m),this.h()},h(){p(t,"class","label"),p(t,"for","year"),p(i,"class",s="select rounded-sm max-w-xs bg-base-200 "+(e[27]?"input-error":"")),i.disabled=e[5],p(i,"name","year"),e[0].year===void 0&&na(()=>e[16].call(i))},m(u,h){D(u,t,h),D(u,r,h),D(u,i,h);for(let d=0;d<c.length;d+=1)c[d]&&c[d].m(i,null);or(i,e[0].year,!0),o||(a=ii(i,"change",e[16]),o=!0)},p(u,h){if(h[0]&1536){l=sr(u[9]);let d;for(d=0;d<l.length;d+=1){const f=Rc(u,l,d);c[d]?c[d].p(f,h):(c[d]=Nc(f),c[d].c(),c[d].m(i,null))}for(;d<c.length;d+=1)c[d].d(1);c.length=l.length}h[0]&134217728&&s!==(s="select rounded-sm max-w-xs bg-base-200 "+(u[27]?"input-error":""))&&p(i,"class",s),h[0]&32&&(i.disabled=u[5]),h[0]&65&&or(i,u[0].year)},d(u){u&&(m(t),m(r),m(i)),ra(c,u),o=!1,a()}}}function eE(e){let t,n='<span class="label-text heading-03">เลขประจำตัวประชาชน*</span>',r,i,s,o,a,l,c,u;return{c(){t=A("label"),t.innerHTML=n,r=G(),i=A("input"),o=G(),a=A("div"),l=A("span"),c=Ae("ใส่เลขประจำตัวประชาชน 13 หลักไม่ต้องเว้นวรรค"),this.h()},l(h){t=b(h,"LABEL",{class:!0,for:!0,"data-svelte-h":!0}),kt(t)!=="svelte-5u2x8b"&&(t.innerHTML=n),r=K(h),i=b(h,"INPUT",{type:!0,name:!0,class:!0}),o=K(h),a=b(h,"DIV",{class:!0});var d=V(a);l=b(d,"SPAN",{class:!0});var f=V(l);c=be(f,"ใส่เลขประจำตัวประชาชน 13 หลักไม่ต้องเว้นวรรค"),f.forEach(m),d.forEach(m),this.h()},h(){p(t,"class","label"),p(t,"for","personalid"),p(i,"type","string"),p(i,"name","personalid"),p(i,"class",s="input rounded-sm bg-base-200 "+(e[27]?"input-error":"")),i.disabled=e[5],p(l,"class",u="label-text-alt "+(e[27]?"text-error":"text-neutral opacity-[60%]")),p(a,"class","label")},m(h,d){D(h,t,d),D(h,r,d),D(h,i,d),D(h,o,d),D(h,a,d),P(a,l),P(l,c)},p(h,d){d[0]&134217728&&s!==(s="input rounded-sm bg-base-200 "+(h[27]?"input-error":""))&&p(i,"class",s),d[0]&32&&(i.disabled=h[5]),d[0]&134217728&&u!==(u="label-text-alt "+(h[27]?"text-error":"text-neutral opacity-[60%]"))&&p(l,"class",u)},d(h){h&&(m(t),m(r),m(i),m(o),m(a))}}}function nE(e){let t,n='<span class="label-text heading-03">ชื่อ*</span>',r,i,s,o,a,l,c,u;return{c(){t=A("label"),t.innerHTML=n,r=G(),i=A("input"),o=G(),a=A("div"),l=A("span"),c=Ae("ระบุชื่อจริงเป็นภาษาไทย"),this.h()},l(h){t=b(h,"LABEL",{class:!0,for:!0,"data-svelte-h":!0}),kt(t)!=="svelte-i2bah3"&&(t.innerHTML=n),r=K(h),i=b(h,"INPUT",{type:!0,name:!0,class:!0}),o=K(h),a=b(h,"DIV",{class:!0});var d=V(a);l=b(d,"SPAN",{class:!0});var f=V(l);c=be(f,"ระบุชื่อจริงเป็นภาษาไทย"),f.forEach(m),d.forEach(m),this.h()},h(){p(t,"class","label"),p(t,"for","firstname"),p(i,"type","text"),p(i,"name","firstname"),p(i,"class",s="input rounded-sm bg-base-200 w-full "+(e[27]?"input-error":"")),i.disabled=e[5],p(l,"class",u="label-text-alt "+(e[27]?"text-error":"")),p(a,"class","label")},m(h,d){D(h,t,d),D(h,r,d),D(h,i,d),D(h,o,d),D(h,a,d),P(a,l),P(l,c)},p(h,d){d[0]&134217728&&s!==(s="input rounded-sm bg-base-200 w-full "+(h[27]?"input-error":""))&&p(i,"class",s),d[0]&32&&(i.disabled=h[5]),d[0]&134217728&&u!==(u="label-text-alt "+(h[27]?"text-error":""))&&p(l,"class",u)},d(h){h&&(m(t),m(r),m(i),m(o),m(a))}}}function rE(e){let t,n='<span class="label-text heading-03">นามสกุล*</span>',r,i,s,o,a,l,c,u;return{c(){t=A("label"),t.innerHTML=n,r=G(),i=A("input"),o=G(),a=A("div"),l=A("span"),c=Ae("ระบุนามสกุลเป็นภาษาไทย"),this.h()},l(h){t=b(h,"LABEL",{class:!0,for:!0,"data-svelte-h":!0}),kt(t)!=="svelte-1lqzuwh"&&(t.innerHTML=n),r=K(h),i=b(h,"INPUT",{type:!0,name:!0,class:!0}),o=K(h),a=b(h,"DIV",{class:!0});var d=V(a);l=b(d,"SPAN",{class:!0});var f=V(l);c=be(f,"ระบุนามสกุลเป็นภาษาไทย"),f.forEach(m),d.forEach(m),this.h()},h(){p(t,"class","label"),p(t,"for","lastname"),p(i,"type","text"),p(i,"name","lastname"),p(i,"class",s="input rounded-sm bg-base-200 "+(e[27]?"input-error":"")),i.disabled=e[5],p(l,"class",u="label-text-alt "+(e[27]?"text-error":"text-neutral opacity-[60%]")),p(a,"class","label")},m(h,d){D(h,t,d),D(h,r,d),D(h,i,d),D(h,o,d),D(h,a,d),P(a,l),P(l,c)},p(h,d){d[0]&134217728&&s!==(s="input rounded-sm bg-base-200 "+(h[27]?"input-error":""))&&p(i,"class",s),d[0]&32&&(i.disabled=h[5]),d[0]&134217728&&u!==(u="label-text-alt "+(h[27]?"text-error":"text-neutral opacity-[60%]"))&&p(l,"class",u)},d(h){h&&(m(t),m(r),m(i),m(o),m(a))}}}function iE(e){let t,n='<span class="label-text heading-03">อีเมล (Optional)</span>',r,i,s,o,a,l,c,u;return{c(){t=A("label"),t.innerHTML=n,r=G(),i=A("input"),o=G(),a=A("div"),l=A("span"),c=Ae("E-mail ที่ใช้งานในปัจจุบัน - สำหรับรับเอกสารยืนยันการลงลายมือชื่อ"),this.h()},l(h){t=b(h,"LABEL",{class:!0,for:!0,"data-svelte-h":!0}),kt(t)!=="svelte-171pcu9"&&(t.innerHTML=n),r=K(h),i=b(h,"INPUT",{type:!0,name:!0,class:!0}),o=K(h),a=b(h,"DIV",{class:!0});var d=V(a);l=b(d,"SPAN",{class:!0});var f=V(l);c=be(f,"E-mail ที่ใช้งานในปัจจุบัน - สำหรับรับเอกสารยืนยันการลงลายมือชื่อ"),f.forEach(m),d.forEach(m),this.h()},h(){p(t,"class","label"),p(t,"for","email"),p(i,"type","text"),p(i,"name","email"),p(i,"class",s="input rounded-sm bg-base-200 "+(e[27]?"input-error":"")),i.disabled=e[5],p(l,"class",u="label-text-alt "+(e[27]?"text-error":"text-neutral opacity-[60%]")),p(a,"class","label")},m(h,d){D(h,t,d),D(h,r,d),D(h,i,d),D(h,o,d),D(h,a,d),P(a,l),P(l,c)},p(h,d){d[0]&134217728&&s!==(s="input rounded-sm bg-base-200 "+(h[27]?"input-error":""))&&p(i,"class",s),d[0]&32&&(i.disabled=h[5]),d[0]&134217728&&u!==(u="label-text-alt "+(h[27]?"text-error":"text-neutral opacity-[60%]"))&&p(l,"class",u)},d(h){h&&(m(t),m(r),m(i),m(o),m(a))}}}function sE(e){let t,n='<span class="label-text heading-03">เบอร์โทรศัพท์ (Optional)</span>',r,i,s,o,a,l,c,u;return{c(){t=A("label"),t.innerHTML=n,r=G(),i=A("input"),o=G(),a=A("div"),l=A("span"),c=Ae(`ระบุเบอร์โทรศัพท์ที่ใช้งานในปัจจุบันสำหรับการอ้างอิง
					ข้อมูลจะเก็บเป็นความลับ`),this.h()},l(h){t=b(h,"LABEL",{class:!0,for:!0,"data-svelte-h":!0}),kt(t)!=="svelte-15ewjxj"&&(t.innerHTML=n),r=K(h),i=b(h,"INPUT",{type:!0,name:!0,class:!0}),o=K(h),a=b(h,"DIV",{class:!0});var d=V(a);l=b(d,"SPAN",{class:!0});var f=V(l);c=be(f,`ระบุเบอร์โทรศัพท์ที่ใช้งานในปัจจุบันสำหรับการอ้างอิง
					ข้อมูลจะเก็บเป็นความลับ`),f.forEach(m),d.forEach(m),this.h()},h(){p(t,"class","label"),p(t,"for","phone"),p(i,"type","text"),p(i,"name","phone"),p(i,"class",s="input rounded-sm bg-base-200 "+(e[27]?"input-error":"")),i.disabled=e[5],p(l,"class",u="label-text-alt "+(e[27]?"text-error":"text-neutral opacity-[60%]")),p(a,"class","label")},m(h,d){D(h,t,d),D(h,r,d),D(h,i,d),D(h,o,d),D(h,a,d),P(a,l),P(l,c)},p(h,d){d[0]&134217728&&s!==(s="input rounded-sm bg-base-200 "+(h[27]?"input-error":""))&&p(i,"class",s),d[0]&32&&(i.disabled=h[5]),d[0]&134217728&&u!==(u="label-text-alt "+(h[27]?"text-error":"text-neutral opacity-[60%]"))&&p(l,"class",u)},d(h){h&&(m(t),m(r),m(i),m(o),m(a))}}}function oE(e){let t,n,r=`คลิกเพื่อกรอกลายเซ็น
							<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M5.707 13.7071C5.59752 13.8169 5.464 13.8998 5.317 13.9491L2.317 14.9491C2.14074 15.0081 1.95153 15.0169 1.7706 14.9743C1.58966 14.9318 1.42417 14.8396 1.29268 14.7082C1.1612 14.5769 1.06894 14.4114 1.02625 14.2305C0.983555 14.0496 0.992126 13.8604 1.051 13.6841L2.051 10.6841C2.1002 10.5368 2.18305 10.4029 2.293 10.2931L10.086 2.50012C10.4611 2.12518 10.9697 1.91455 11.5 1.91455C12.0303 1.91455 12.5389 2.12518 12.914 2.50012L13.5 3.08612C13.8749 3.46118 14.0856 3.9698 14.0856 4.50012C14.0856 5.03045 13.8749 5.53907 13.5 5.91412L5.707 13.7071ZM3 11.0001L10.793 3.20712C10.9805 3.01965 11.2348 2.91434 11.5 2.91434C11.7652 2.91434 12.0195 3.01965 12.207 3.20712L12.793 3.79312C12.9805 3.98065 13.0858 4.23496 13.0858 4.50012C13.0858 4.76529 12.9805 5.0196 12.793 5.20712L5 13.0001L2 14.0001L3 11.0001Z" fill="black"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M9.85402 2.55999C9.80757 2.51342 9.7524 2.47648 9.69165 2.45127C9.63091 2.42607 9.56579 2.41309 9.50002 2.41309C9.43425 2.41309 9.36913 2.42607 9.30839 2.45127C9.24764 2.47648 9.19247 2.51342 9.14602 2.55999L5.85402 5.85499C5.76013 5.94887 5.6328 6.00162 5.50002 6.00162C5.36725 6.00162 5.23991 5.94887 5.14602 5.85499C5.05213 5.7611 4.99939 5.63376 4.99939 5.50099C4.99939 5.36821 5.05213 5.24087 5.14602 5.14699L8.44002 1.85399C8.57932 1.7146 8.74472 1.60402 8.92677 1.52858C9.10882 1.45314 9.30396 1.41431 9.50102 1.41431C9.69808 1.41431 9.89322 1.45314 10.0753 1.52858C10.2573 1.60402 10.4227 1.7146 10.562 1.85399L10.855 2.14599C10.9489 2.23974 11.0017 2.36695 11.0018 2.49963C11.0019 2.63231 10.9493 2.7596 10.8555 2.85349C10.7618 2.94737 10.6346 3.00017 10.5019 3.00026C10.3692 3.00036 10.2419 2.94774 10.148 2.85399L9.85502 2.56099L9.85402 2.55999Z" fill="black"></path><path d="M13.293 1.20709C13.4805 1.01962 13.7348 0.914307 14 0.914307C14.2652 0.914307 14.5195 1.01962 14.707 1.20709L14.737 1.23709C14.9193 1.41933 15.0241 1.66489 15.0297 1.92257C15.0353 2.18024 14.9412 2.43013 14.767 2.62009L13.5 4.00009L12 2.50009L13.293 1.20709Z" fill="black"></path></svg>`,i,s;return{c(){t=A("div"),n=A("button"),n.innerHTML=r,this.h()},l(o){t=b(o,"DIV",{class:!0});var a=V(t);n=b(a,"BUTTON",{type:!0,class:!0,"data-svelte-h":!0}),kt(n)!=="svelte-u454pn"&&(n.innerHTML=r),a.forEach(m),this.h()},h(){p(n,"type","button"),p(n,"class","btn bg-base-100 heading-03 shadow-xl"),p(t,"class","absolute w-full h-full flex justify-center items-center top-0 left-0")},m(o,a){D(o,t,a),P(t,n),i||(s=ii(n,"click",e[18]),i=!0)},p:Ye,d(o){o&&m(t),i=!1,s()}}}function aE(e){let t,n=`ล้าง
						<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none"><rect width="16" height="16" fill="transparent" style="mix-blend-mode:multiply"></rect><path d="M9 14C10.1867 14 11.3467 13.6481 12.3334 12.9888C13.3201 12.3295 14.0892 11.3925 14.5433 10.2961C14.9974 9.19975 15.1162 7.99335 14.8847 6.82946C14.6532 5.66558 14.0818 4.59648 13.2426 3.75736C12.4035 2.91825 11.3344 2.3468 10.1705 2.11529C9.00666 1.88378 7.80026 2.0026 6.7039 2.45673C5.60754 2.91085 4.67047 3.67989 4.01118 4.66658C3.35189 5.65328 3 6.81331 3 8V11.1L1.2 9.3L0.5 10L3.5 13L6.5 10L5.8 9.3L4 11.1V8C4 7.0111 4.29324 6.0444 4.84265 5.22215C5.39206 4.39991 6.17295 3.75904 7.08658 3.38061C8.00021 3.00217 9.00555 2.90315 9.97545 3.09608C10.9454 3.289 11.8363 3.76521 12.5355 4.46447C13.2348 5.16373 13.711 6.05465 13.9039 7.02455C14.0969 7.99446 13.9978 8.99979 13.6194 9.91342C13.241 10.8271 12.6001 11.6079 11.7779 12.1574C10.9556 12.7068 9.98891 13 9 13V14Z" fill="#8054FF"></path></svg>`,r,i;return{c(){t=A("button"),t.innerHTML=n,this.h()},l(s){t=b(s,"BUTTON",{type:!0,class:!0,"data-svelte-h":!0}),kt(t)!=="svelte-1auzjm1"&&(t.innerHTML=n),this.h()},h(){p(t,"type","button"),p(t,"class","btn btn-outline btn-accent absolute right-[10px] bottom-4")},m(s,o){D(s,t,o),r||(i=ii(t,"click",e[13]),r=!0)},p:Ye,d(s){s&&m(t),r=!1,i()}}}function lE(e){let t,n,r=(e[27]||"")+"",i;return{c(){t=A("div"),n=A("span"),i=Ae(r),this.h()},l(s){t=b(s,"DIV",{class:!0});var o=V(t);n=b(o,"SPAN",{class:!0});var a=V(n);i=be(a,r),a.forEach(m),o.forEach(m),this.h()},h(){p(n,"class","label-text-alt text-error"),p(t,"class","label")},m(s,o){D(s,t,o),P(t,n),P(n,i)},p(s,o){o[0]&134217728&&r!==(r=(s[27]||"")+"")&&Uc(i,r)},d(s){s&&m(t)}}}function cE(e){let t,n;return{c(){t=Ae(`กำลังลงชื่อ...
				`),n=A("span"),this.h()},l(r){t=be(r,`กำลังลงชื่อ...
				`),n=b(r,"SPAN",{class:!0}),V(n).forEach(m),this.h()},h(){p(n,"class","loading loading-spinner")},m(r,i){D(r,t,i),D(r,n,i)},d(r){r&&(m(t),m(n))}}}function uE(e){let t,n,r,i,s;return{c(){t=Ae(`ลงชื่อเลย
				`),n=bi("svg"),r=bi("path"),i=bi("path"),s=bi("path"),this.h()},l(o){t=be(o,`ลงชื่อเลย
				`),n=Si(o,"svg",{xmlns:!0,width:!0,height:!0,viewBox:!0,fill:!0});var a=V(n);r=Si(a,"path",{"fill-rule":!0,"clip-rule":!0,d:!0,fill:!0}),V(r).forEach(m),i=Si(a,"path",{"fill-rule":!0,"clip-rule":!0,d:!0,fill:!0}),V(i).forEach(m),s=Si(a,"path",{d:!0,fill:!0}),V(s).forEach(m),a.forEach(m),this.h()},h(){p(r,"fill-rule","evenodd"),p(r,"clip-rule","evenodd"),p(r,"d","M5.707 13.7071C5.59752 13.8169 5.464 13.8998 5.317 13.9491L2.317 14.9491C2.14074 15.0081 1.95153 15.0169 1.7706 14.9743C1.58966 14.9318 1.42417 14.8396 1.29268 14.7082C1.1612 14.5769 1.06894 14.4114 1.02625 14.2305C0.983555 14.0496 0.992126 13.8604 1.051 13.6841L2.051 10.6841C2.1002 10.5368 2.18305 10.4029 2.293 10.2931L10.086 2.50012C10.4611 2.12518 10.9697 1.91455 11.5 1.91455C12.0303 1.91455 12.5389 2.12518 12.914 2.50012L13.5 3.08612C13.8749 3.46118 14.0856 3.9698 14.0856 4.50012C14.0856 5.03045 13.8749 5.53907 13.5 5.91412L5.707 13.7071ZM3 11.0001L10.793 3.20712C10.9805 3.01965 11.2348 2.91434 11.5 2.91434C11.7652 2.91434 12.0195 3.01965 12.207 3.20712L12.793 3.79312C12.9805 3.98065 13.0858 4.23496 13.0858 4.50012C13.0858 4.76529 12.9805 5.0196 12.793 5.20712L5 13.0001L2 14.0001L3 11.0001Z"),p(r,"fill","white"),p(i,"fill-rule","evenodd"),p(i,"clip-rule","evenodd"),p(i,"d","M9.85402 2.55999C9.80757 2.51342 9.7524 2.47648 9.69165 2.45127C9.63091 2.42607 9.56579 2.41309 9.50002 2.41309C9.43425 2.41309 9.36913 2.42607 9.30839 2.45127C9.24764 2.47648 9.19247 2.51342 9.14602 2.55999L5.85402 5.85499C5.76013 5.94887 5.6328 6.00162 5.50002 6.00162C5.36725 6.00162 5.23991 5.94887 5.14602 5.85499C5.05213 5.7611 4.99939 5.63376 4.99939 5.50099C4.99939 5.36821 5.05213 5.24087 5.14602 5.14699L8.44002 1.85399C8.57932 1.7146 8.74472 1.60402 8.92677 1.52858C9.10882 1.45314 9.30396 1.41431 9.50102 1.41431C9.69808 1.41431 9.89322 1.45314 10.0753 1.52858C10.2573 1.60402 10.4227 1.7146 10.562 1.85399L10.855 2.14599C10.9489 2.23974 11.0017 2.36695 11.0018 2.49963C11.0019 2.63231 10.9493 2.7596 10.8555 2.85349C10.7618 2.94737 10.6346 3.00017 10.5019 3.00026C10.3692 3.00036 10.2419 2.94774 10.148 2.85399L9.85502 2.56099L9.85402 2.55999Z"),p(i,"fill","white"),p(s,"d","M13.293 1.20709C13.4805 1.01962 13.7348 0.914307 14 0.914307C14.2652 0.914307 14.5195 1.01962 14.707 1.20709L14.737 1.23709C14.9193 1.41933 15.0241 1.66489 15.0297 1.92257C15.0353 2.18024 14.9412 2.43013 14.767 2.62009L13.5 4.00009L12 2.50009L13.293 1.20709Z"),p(s,"fill","white"),p(n,"xmlns","http://www.w3.org/2000/svg"),p(n,"width","16"),p(n,"height","16"),p(n,"viewBox","0 0 16 16"),p(n,"fill","none")},m(o,a){D(o,t,a),D(o,n,a),P(n,r),P(n,i),P(n,s)},d(o){o&&(m(t),m(n))}}}function hE(e){let t,n,r,i,s,o,a,l,c,u,h,d,f,y,w,R,T,q,z,M,ct,Z='<span class="label-text heading-03">คำนำหน้า</span>',ft,ot,lt,pt,W="นาย",ut,re="นาง",N,et="นางสาว",_t,Ft,Ut,S,x,j,rt,It,at,Kt,St,ie,Le='<span class="label-text heading-03">ลงลายมือชื่อ*</span>',qe,se,oe,ae,C,g,k,B,Tt,Se='<label class="label cursor-pointer space-x-2 justify-normal"><input type="checkbox" name="consent" class="checkbox checkbox-primary"/> <span class="label-text">ข้าพเจ้ายินยอมลงชื่อเสนอกฎหมาย <a href="https://drive.google.com/file/d/1r8MtAdoqSPW37I4aQrgID5U1cFHqy-R2/view" target="_blank" class="underline">อ่านนโยบายการคุ้มครองข้อมูลส่วนบุคคล</a></span></label>',pe,it,yt,le,Pt,Pe='<form method="dialog" class="modal-box"><p class="text-neutral py-4">ลงชื่อสำเร็จ</p> <div class="modal-action"><button class="btn">ปิด</button></div></form>',wr,Y,nt='<form method="dialog" class="modal-box"><p class="text-neutral py-4">เกิดข้อผิดพลาดในการลงชื่อ โปรดลองลงชื่อใหม่อีกครั้ง</p> <div class="modal-action"><button class="btn">ปิด</button></div></form>',vt,$t,me;r=new Me({props:{for:"location",$$slots:{default:[J0,({messages:_})=>({27:_}),({messages:_})=>[_?134217728:0]]},$$scope:{ctx:e}}}),a=new Me({props:{for:"day",$$slots:{default:[Y0,({messages:_})=>({27:_}),({messages:_})=>[_?134217728:0]]},$$scope:{ctx:e}}}),h=new Me({props:{for:"month",$$slots:{default:[Z0,({messages:_})=>({27:_}),({messages:_})=>[_?134217728:0]]},$$scope:{ctx:e}}}),w=new Me({props:{for:"year",$$slots:{default:[tE,({messages:_})=>({27:_}),({messages:_})=>[_?134217728:0]]},$$scope:{ctx:e}}}),T=new Me({props:{for:"personalid",$$slots:{default:[eE,({messages:_})=>({27:_}),({messages:_})=>[_?134217728:0]]},$$scope:{ctx:e}}}),Ut=new Me({props:{for:"firstname",$$slots:{default:[nE,({messages:_})=>({27:_}),({messages:_})=>[_?134217728:0]]},$$scope:{ctx:e}}}),x=new Me({props:{for:"lastname",$$slots:{default:[rE,({messages:_})=>({27:_}),({messages:_})=>[_?134217728:0]]},$$scope:{ctx:e}}}),rt=new Me({props:{for:"email",$$slots:{default:[iE,({messages:_})=>({27:_}),({messages:_})=>[_?134217728:0]]},$$scope:{ctx:e}}}),at=new Me({props:{for:"phone",$$slots:{default:[sE,({messages:_})=>({27:_}),({messages:_})=>[_?134217728:0]]},$$scope:{ctx:e}}});function Bt(_,F){return _[4]?aE:oE}let Ie=Bt(e),Rt=Ie(e);k=new Me({props:{for:"signature",$$slots:{default:[lE,({messages:_})=>({27:_}),({messages:_})=>[_?134217728:0]]},$$scope:{ctx:e}}});function Ve(_,F){return _[5]?cE:uE}let Sn=Ve(e),ce=Sn(e);return{c(){t=A("form"),n=A("div"),Re(r.$$.fragment),i=G(),s=A("div"),o=A("div"),Re(a.$$.fragment),l=G(),c=A("div"),u=A("div"),Re(h.$$.fragment),d=G(),f=A("div"),y=A("div"),Re(w.$$.fragment),R=G(),Re(T.$$.fragment),q=G(),z=A("div"),M=A("div"),ct=A("label"),ct.innerHTML=Z,ft=G(),ot=A("select"),lt=A("option"),pt=A("option"),pt.textContent=W,ut=A("option"),ut.textContent=re,N=A("option"),N.textContent=et,_t=G(),Ft=A("div"),Re(Ut.$$.fragment),S=G(),Re(x.$$.fragment),j=G(),Re(rt.$$.fragment),It=G(),Re(at.$$.fragment),Kt=G(),St=A("div"),ie=A("div"),ie.innerHTML=Le,qe=G(),se=A("div"),oe=A("canvas"),C=G(),Rt.c(),g=G(),Re(k.$$.fragment),B=G(),Tt=A("div"),Tt.innerHTML=Se,pe=G(),it=A("button"),ce.c(),le=G(),Pt=A("dialog"),Pt.innerHTML=Pe,wr=G(),Y=A("dialog"),Y.innerHTML=nt,this.h()},l(_){t=b(_,"FORM",{});var F=V(t);n=b(F,"DIV",{class:!0});var Et=V(n);Ce(r.$$.fragment,Et),i=K(Et),s=b(Et,"DIV",{class:!0});var ze=V(s);o=b(ze,"DIV",{class:!0});var Ir=V(o);Ce(a.$$.fragment,Ir),Ir.forEach(m),l=K(ze),c=b(ze,"DIV",{class:!0});var Tr=V(c);u=b(Tr,"DIV",{class:!0});var Ar=V(u);Ce(h.$$.fragment,Ar),Ar.forEach(m),Tr.forEach(m),d=K(ze),f=b(ze,"DIV",{class:!0});var br=V(f);y=b(br,"DIV",{class:!0});var Sr=V(y);Ce(w.$$.fragment,Sr),Sr.forEach(m),br.forEach(m),ze.forEach(m),R=K(Et),Ce(T.$$.fragment,Et),q=K(Et),z=b(Et,"DIV",{class:!0});var Pn=V(z);M=b(Pn,"DIV",{class:!0});var Rn=V(M);ct=b(Rn,"LABEL",{class:!0,for:!0,"data-svelte-h":!0}),kt(ct)!=="svelte-1h1uakk"&&(ct.innerHTML=Z),ft=K(Rn),ot=b(Rn,"SELECT",{class:!0,name:!0});var on=V(ot);lt=b(on,"OPTION",{}),V(lt).forEach(m),pt=b(on,"OPTION",{"data-svelte-h":!0}),kt(pt)!=="svelte-1en4y3b"&&(pt.textContent=W),ut=b(on,"OPTION",{"data-svelte-h":!0}),kt(ut)!=="svelte-18vmce2"&&(ut.textContent=re),N=b(on,"OPTION",{"data-svelte-h":!0}),kt(N)!=="svelte-1lp5zi9"&&(N.textContent=et),on.forEach(m),Rn.forEach(m),_t=K(Pn),Ft=b(Pn,"DIV",{class:!0});var sl=V(Ft);Ce(Ut.$$.fragment,sl),sl.forEach(m),Pn.forEach(m),S=K(Et),Ce(x.$$.fragment,Et),j=K(Et),Ce(rt.$$.fragment,Et),It=K(Et),Ce(at.$$.fragment,Et),Kt=K(Et),St=b(Et,"DIV",{class:!0});var zn=V(St);ie=b(zn,"DIV",{class:!0,"data-svelte-h":!0}),kt(ie)!=="svelte-zde8yy"&&(ie.innerHTML=Le),qe=K(zn),se=b(zn,"DIV",{class:!0});var Ai=V(se);oe=b(Ai,"CANVAS",{class:!0}),V(oe).forEach(m),C=K(Ai),Rt.l(Ai),Ai.forEach(m),g=K(zn),Ce(k.$$.fragment,zn),zn.forEach(m),B=K(Et),Tt=b(Et,"DIV",{class:!0,"data-svelte-h":!0}),kt(Tt)!=="svelte-1qf61p7"&&(Tt.innerHTML=Se),pe=K(Et),it=b(Et,"BUTTON",{type:!0,class:!0});var ol=V(it);ce.l(ol),ol.forEach(m),Et.forEach(m),le=K(F),Pt=b(F,"DIALOG",{id:!0,class:!0,"data-svelte-h":!0}),kt(Pt)!=="svelte-1fhm9ge"&&(Pt.innerHTML=Pe),wr=K(F),Y=b(F,"DIALOG",{id:!0,class:!0,"data-svelte-h":!0}),kt(Y)!=="svelte-1dwtcut"&&(Y.innerHTML=nt),F.forEach(m),this.h()},h(){p(o,"class","form-control"),p(u,"class","form-control"),p(c,"class","flex flex-row space-x-[10px]"),p(y,"class","form-control"),p(f,"class","flex flex-row space-x-[10px]"),p(s,"class","flex flex-row space-x-[10px]"),p(ct,"class","label"),p(ct,"for","prefix"),lt.selected=!0,lt.__value="",fn(lt,lt.__value),pt.__value="นาย",fn(pt,pt.__value),ut.__value="นาง",fn(ut,ut.__value),N.__value="นางสาว",fn(N,N.__value),p(ot,"class","select rounded-sm max-w-xs bg-base-200"),ot.disabled=e[5],p(ot,"name","prefix"),p(M,"class","form-control"),p(Ft,"class","form-control flex-1"),p(z,"class","flex flex-row space-x-[10px]"),p(ie,"class","label"),p(oe,"class",ae="bg-base-200 h-[258px] w-full rounded-sm "+(!e[4]||e[5]?"pointer-events-none":"")),p(se,"class","relative"),p(St,"class","form-control"),p(Tt,"class","form-control"),p(it,"type","submit"),p(it,"class","btn btn-primary w-full mt-2 heading-03 text-base text-base-100 disabled:text-base-100"),it.disabled=yt=!e[7].consent||e[5],p(n,"class","form-control w-full text-neutral"),p(Pt,"id","success-dialog"),p(Pt,"class","modal modal-bottom sm:modal-middle"),p(Y,"id","error-dialog"),p(Y,"class","modal modal-bottom sm:modal-middle")},m(_,F){D(_,t,F),P(t,n),ke(r,n,null),P(n,i),P(n,s),P(s,o),ke(a,o,null),P(s,l),P(s,c),P(c,u),ke(h,u,null),P(s,d),P(s,f),P(f,y),ke(w,y,null),P(n,R),ke(T,n,null),P(n,q),P(n,z),P(z,M),P(M,ct),P(M,ft),P(M,ot),P(ot,lt),P(ot,pt),P(ot,ut),P(ot,N),P(z,_t),P(z,Ft),ke(Ut,Ft,null),P(n,S),ke(x,n,null),P(n,j),ke(rt,n,null),P(n,It),ke(at,n,null),P(n,Kt),P(n,St),P(St,ie),P(St,qe),P(St,se),P(se,oe),e[17](oe),P(se,C),Rt.m(se,null),P(St,g),ke(k,St,null),P(n,B),P(n,Tt),P(n,pe),P(n,it),ce.m(it,null),P(t,le),P(t,Pt),e[19](Pt),P(t,wr),P(t,Y),e[20](Y),vt=!0,$t||(me=jd(e[11].call(null,t)),$t=!0)},p(_,F){const Et={};F[0]&134217760|F[1]&64&&(Et.$$scope={dirty:F,ctx:_}),r.$set(Et);const ze={};F[0]&134217825|F[1]&64&&(ze.$$scope={dirty:F,ctx:_}),a.$set(ze);const Ir={};F[0]&134217761|F[1]&64&&(Ir.$$scope={dirty:F,ctx:_}),h.$set(Ir);const Tr={};F[0]&134217761|F[1]&64&&(Tr.$$scope={dirty:F,ctx:_}),w.$set(Tr);const Ar={};F[0]&134217760|F[1]&64&&(Ar.$$scope={dirty:F,ctx:_}),T.$set(Ar),(!vt||F[0]&32)&&(ot.disabled=_[5]);const br={};F[0]&134217760|F[1]&64&&(br.$$scope={dirty:F,ctx:_}),Ut.$set(br);const Sr={};F[0]&134217760|F[1]&64&&(Sr.$$scope={dirty:F,ctx:_}),x.$set(Sr);const Pn={};F[0]&134217760|F[1]&64&&(Pn.$$scope={dirty:F,ctx:_}),rt.$set(Pn);const Rn={};F[0]&134217760|F[1]&64&&(Rn.$$scope={dirty:F,ctx:_}),at.$set(Rn),(!vt||F[0]&48&&ae!==(ae="bg-base-200 h-[258px] w-full rounded-sm "+(!_[4]||_[5]?"pointer-events-none":"")))&&p(oe,"class",ae),Ie===(Ie=Bt(_))&&Rt?Rt.p(_,F):(Rt.d(1),Rt=Ie(_),Rt&&(Rt.c(),Rt.m(se,null)));const on={};F[0]&134217728|F[1]&64&&(on.$$scope={dirty:F,ctx:_}),k.$set(on),Sn!==(Sn=Ve(_))&&(ce.d(1),ce=Sn(_),ce&&(ce.c(),ce.m(it,null))),(!vt||F[0]&160&&yt!==(yt=!_[7].consent||_[5]))&&(it.disabled=yt)},i(_){vt||(he(r.$$.fragment,_),he(a.$$.fragment,_),he(h.$$.fragment,_),he(w.$$.fragment,_),he(T.$$.fragment,_),he(Ut.$$.fragment,_),he(x.$$.fragment,_),he(rt.$$.fragment,_),he(at.$$.fragment,_),he(k.$$.fragment,_),vt=!0)},o(_){ue(r.$$.fragment,_),ue(a.$$.fragment,_),ue(h.$$.fragment,_),ue(w.$$.fragment,_),ue(T.$$.fragment,_),ue(Ut.$$.fragment,_),ue(x.$$.fragment,_),ue(rt.$$.fragment,_),ue(at.$$.fragment,_),ue(k.$$.fragment,_),vt=!1},d(_){_&&m(t),De(r),De(a),De(h),De(w),De(T),De(Ut),De(x),De(rt),De(at),e[17](null),Rt.d(),De(k),ce.d(),e[19](null),e[20](null),$t=!1,me()}}}function dE(e,t,n){let r,i,s,o,a,l=!1,c=!1;const u=new ResizeObserver(N=>{n(1,i.width=N[0].target.clientWidth,i),n(1,i.height=N[0].target.clientHeight,i),s.fromData(s.toData())});let h=[...Array.from({length:31},(N,et)=>et+1)],d=[...Array.from({length:12},(N,et)=>et+1)],f=[...Array.from({length:100},(N,et)=>new Date().getFullYear()-et+543)];const y=new Date;let w={day:y.getDate(),month:y.getMonth()+1,year:y.getFullYear()+543};const R=()=>{w.month===2?w.year%4===0?n(6,h=[...Array.from({length:29},(N,et)=>et+1)]):n(6,h=[...Array.from({length:28},(N,et)=>et+1)]):[4,6,9,11].includes(w.month)?n(6,h=[...Array.from({length:30},(N,et)=>et+1)]):n(6,h=[...Array.from({length:31},(N,et)=>et+1)]),h.includes(w.day)||n(0,w.day=h[h.length-1],w)},{form:T,setTouched:q,setData:z,data:M,reset:ct}=gf({validate(N){try{N.day=w.day.toString(),N.month=w.month.toString(),N.year=w.year.toString(),Po(ml,N)}catch(et){return bf(et).nested}return{}},async onSubmit(N){n(5,c=!0);try{N.day=w.day.toString(),N.month=w.month.toString(),N.year=w.year.toString(),console.log(N),await X0(Po(ml,N)),o.showModal(),Z(),ct()}catch(et){console.log(et),a.showModal()}n(5,c=!1)},extend:_f});Hd(e,M,N=>n(7,r=N)),Lc(()=>{s=new Qi(i),s.addEventListener("endStroke",()=>{q("signature",!0),z("signature",s.toDataURL())}),u.observe(i)});function Z(){s.clear(),z("signature",void 0)}function ft(){w.day=Zs(this),n(0,w),n(6,h)}function ot(){w.month=Zs(this),n(0,w),n(6,h)}function lt(){w.year=Zs(this),n(0,w),n(6,h)}function pt(N){$i[N?"unshift":"push"](()=>{i=N,n(1,i)})}const W=()=>n(4,l=!0);function ut(N){$i[N?"unshift":"push"](()=>{o=N,n(2,o)})}function re(N){$i[N?"unshift":"push"](()=>{a=N,n(3,a)})}return e.$$.update=()=>{e.$$.dirty[0]&1&&R()},[w,i,o,a,l,c,h,r,d,f,y,T,M,Z,ft,ot,lt,pt,W,ut,re]}class fE extends ta{constructor(t){super(),ea(this,t,dE,hE,vs,{},null,[-1,-1])}}function pE(e){let t,n,r='<h2 class="heading-responsive-02">ร่วมลงชื่อ</h2> <p>เพื่อเสนอกฎหมาย ผู้สูงอายุและบำนาญพื้นฐานแห่งชาติ(ฉบับที่ ..) พ.ศ. ...</p> <div class="p-[10px] text-neutral bg-primary-focus rounded-[8px]"><p class="font-semibold">คุณสมบัติของผู้เข้าชื่อเสนอกฎหมาย</p> <ul class="list-disc list-inside"><li>เป็นคนไทยที่มีสิทธิเลือกตั้ง (อายุ 18 ปีขึ้นไป) ในวันที่เข้าชื่อฯ</li> <li>ไม่เป็นบุคคลต้องห้ามใช้สิทธิเลือกตั้ง</li></ul></div>',i,s,o,a;return o=new fE({}),{c(){t=A("div"),n=A("div"),n.innerHTML=r,i=G(),s=A("div"),Re(o.$$.fragment),this.h()},l(l){t=b(l,"DIV",{class:!0});var c=V(t);n=b(c,"DIV",{class:!0,"data-svelte-h":!0}),kt(n)!=="svelte-w10jh6"&&(n.innerHTML=r),i=K(c),s=b(c,"DIV",{class:!0});var u=V(s);Ce(o.$$.fragment,u),u.forEach(m),c.forEach(m),this.h()},h(){p(n,"class","md:max-w-[320px]"),p(s,"class","bg-base-100 p-[10px] rounded-[4px]"),p(t,"class","flex md:w-[85vw] md:max-w-[850px] md:flex-row flex-col text-base-100 body-02-normal md:space-x-[40px] md:space-y-none space-y-[8px]")},m(l,c){D(l,t,c),P(t,n),P(t,i),P(t,s),ke(o,s,null),a=!0},p:Ye,i(l){a||(he(o.$$.fragment,l),a=!0)},o(l){ue(o.$$.fragment,l),a=!1},d(l){l&&m(t),De(o)}}}class vE extends ta{constructor(t){super(),ea(this,t,null,pE,vs,{})}}export{vE as default};
