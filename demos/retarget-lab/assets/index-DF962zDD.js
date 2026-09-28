var $b=Object.defineProperty;var tM=(o,e,i)=>e in o?$b(o,e,{enumerable:!0,configurable:!0,writable:!0,value:i}):o[e]=i;var _n=(o,e,i)=>tM(o,typeof e!="symbol"?e+"":e,i);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))s(l);new MutationObserver(l=>{for(const f of l)if(f.type==="childList")for(const h of f.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&s(h)}).observe(document,{childList:!0,subtree:!0});function i(l){const f={};return l.integrity&&(f.integrity=l.integrity),l.referrerPolicy&&(f.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?f.credentials="include":l.crossOrigin==="anonymous"?f.credentials="omit":f.credentials="same-origin",f}function s(l){if(l.ep)return;l.ep=!0;const f=i(l);fetch(l.href,f)}})();function Fv(o){return o&&o.__esModule&&Object.prototype.hasOwnProperty.call(o,"default")?o.default:o}var vd={exports:{}},ll={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var S_;function eM(){if(S_)return ll;S_=1;var o=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function i(s,l,f){var h=null;if(f!==void 0&&(h=""+f),l.key!==void 0&&(h=""+l.key),"key"in l){f={};for(var d in l)d!=="key"&&(f[d]=l[d])}else f=l;return l=f.ref,{$$typeof:o,type:s,key:h,ref:l!==void 0?l:null,props:f}}return ll.Fragment=e,ll.jsx=i,ll.jsxs=i,ll}var b_;function nM(){return b_||(b_=1,vd.exports=eM()),vd.exports}var K=nM(),yd={exports:{}},fe={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var M_;function iM(){if(M_)return fe;M_=1;var o=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),f=Symbol.for("react.consumer"),h=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),x=Symbol.for("react.suspense"),m=Symbol.for("react.memo"),_=Symbol.for("react.lazy"),p=Symbol.for("react.activity"),y=Symbol.for("react.view_transition"),b=Symbol.iterator;function E(I){return I===null||typeof I!="object"?null:(I=b&&I[b]||I["@@iterator"],typeof I=="function"?I:null)}var A={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},S=Object.assign,v={};function N(I,dt,et){this.props=I,this.context=dt,this.refs=v,this.updater=et||A}N.prototype.isReactComponent={},N.prototype.setState=function(I,dt){if(typeof I!="object"&&typeof I!="function"&&I!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,I,dt,"setState")},N.prototype.forceUpdate=function(I){this.updater.enqueueForceUpdate(this,I,"forceUpdate")};function L(){}L.prototype=N.prototype;function z(I,dt,et){this.props=I,this.context=dt,this.refs=v,this.updater=et||A}var G=z.prototype=new L;G.constructor=z,S(G,N.prototype),G.isPureReactComponent=!0;var D=Array.isArray;function O(){}var X={H:null,A:null,T:null,S:null},w=Object.prototype.hasOwnProperty;function C(I,dt,et){var st=et.ref;return{$$typeof:o,type:I,key:dt,ref:st!==void 0?st:null,props:et}}function H(I,dt){return C(I.type,dt,I.props)}function Q(I){return typeof I=="object"&&I!==null&&I.$$typeof===o}function nt(I){var dt={"=":"=0",":":"=2"};return"$"+I.replace(/[=:]/g,function(et){return dt[et]})}var ht=/\/+/g;function ot(I,dt){return typeof I=="object"&&I!==null&&I.key!=null?nt(""+I.key):dt.toString(36)}function k(I){switch(I.status){case"fulfilled":return I.value;case"rejected":throw I.reason;default:switch(typeof I.status=="string"?I.then(O,O):(I.status="pending",I.then(function(dt){I.status==="pending"&&(I.status="fulfilled",I.value=dt)},function(dt){I.status==="pending"&&(I.status="rejected",I.reason=dt)})),I.status){case"fulfilled":return I.value;case"rejected":throw I.reason}}throw I}function ct(I,dt,et,st,bt){var Pt=typeof I;(Pt==="undefined"||Pt==="boolean")&&(I=null);var Rt=!1;if(I===null)Rt=!0;else switch(Pt){case"bigint":case"string":case"number":Rt=!0;break;case"object":switch(I.$$typeof){case o:case e:Rt=!0;break;case _:return Rt=I._init,ct(Rt(I._payload),dt,et,st,bt)}}if(Rt)return bt=bt(I),Rt=st===""?"."+ot(I,0):st,D(bt)?(et="",Rt!=null&&(et=Rt.replace(ht,"$&/")+"/"),ct(bt,dt,et,"",function(le){return le})):bt!=null&&(Q(bt)&&(bt=H(bt,et+(bt.key==null||I&&I.key===bt.key?"":(""+bt.key).replace(ht,"$&/")+"/")+Rt)),dt.push(bt)),1;Rt=0;var Mt=st===""?".":st+":";if(D(I))for(var Gt=0;Gt<I.length;Gt++)st=I[Gt],Pt=Mt+ot(st,Gt),Rt+=ct(st,dt,et,Pt,bt);else if(Gt=E(I),typeof Gt=="function")for(I=Gt.call(I),Gt=0;!(st=I.next()).done;)st=st.value,Pt=Mt+ot(st,Gt++),Rt+=ct(st,dt,et,Pt,bt);else if(Pt==="object"){if(typeof I.then=="function")return ct(k(I),dt,et,st,bt);throw dt=String(I),Error("Objects are not valid as a React child (found: "+(dt==="[object Object]"?"object with keys {"+Object.keys(I).join(", ")+"}":dt)+"). If you meant to render a collection of children, use an array instead.")}return Rt}function $(I,dt,et){if(I==null)return I;var st=[],bt=0;return ct(I,st,"","",function(Pt){return dt.call(et,Pt,bt++)}),st}function _t(I){if(I._status===-1){var dt=I._result,et=dt();et.then(function(st){(I._status===0||I._status===-1)&&(I._status=1,I._result=st,et.status===void 0&&(et.status="fulfilled",et.value=st))},function(st){(I._status===0||I._status===-1)&&(I._status=2,I._result=st,et.status===void 0&&(et.status="rejected",et.reason=st))}),I._status===-1&&(I._status=0,I._result=et)}if(I._status===1)return I._result.default;throw I._result}var vt=typeof reportError=="function"?reportError:function(I){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var dt=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof I=="object"&&I!==null&&typeof I.message=="string"?String(I.message):String(I),error:I});if(!window.dispatchEvent(dt))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",I);return}console.error(I)};function Yt(I){var dt=X.T,et={};et.types=dt!==null?dt.types:null,X.T=et;try{var st=I(),bt=X.S;bt!==null&&bt(et,st),typeof st=="object"&&st!==null&&typeof st.then=="function"&&st.then(O,vt)}catch(Pt){vt(Pt)}finally{dt!==null&&et.types!==null&&(dt.types=et.types),X.T=dt}}function he(I){var dt=X.T;if(dt!==null){var et=dt.types;et===null?dt.types=[I]:et.indexOf(I)===-1&&et.push(I)}else Yt(he.bind(null,I))}var Ae={map:$,forEach:function(I,dt,et){$(I,function(){dt.apply(this,arguments)},et)},count:function(I){var dt=0;return $(I,function(){dt++}),dt},toArray:function(I){return $(I,function(dt){return dt})||[]},only:function(I){if(!Q(I))throw Error("React.Children.only expected to receive a single React element child.");return I}};return fe.Activity=p,fe.Children=Ae,fe.Component=N,fe.Fragment=i,fe.Profiler=l,fe.PureComponent=z,fe.StrictMode=s,fe.Suspense=x,fe.ViewTransition=y,fe.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=X,fe.__COMPILER_RUNTIME={__proto__:null,c:function(I){return X.H.useMemoCache(I)}},fe.addTransitionType=he,fe.cache=function(I){return function(){return I.apply(null,arguments)}},fe.cacheSignal=function(){return null},fe.cloneElement=function(I,dt,et){if(I==null)throw Error("The argument must be a React element, but you passed "+I+".");var st=S({},I.props),bt=I.key;if(dt!=null)for(Pt in dt.key!==void 0&&(bt=""+dt.key),dt)!w.call(dt,Pt)||Pt==="key"||Pt==="__self"||Pt==="__source"||Pt==="ref"&&dt.ref===void 0||(st[Pt]=dt[Pt]);var Pt=arguments.length-2;if(Pt===1)st.children=et;else if(1<Pt){for(var Rt=Array(Pt),Mt=0;Mt<Pt;Mt++)Rt[Mt]=arguments[Mt+2];st.children=Rt}return C(I.type,bt,st)},fe.createContext=function(I){return I={$$typeof:h,_currentValue:I,_currentValue2:I,_threadCount:0,Provider:null,Consumer:null},I.Provider=I,I.Consumer={$$typeof:f,_context:I},I},fe.createElement=function(I,dt,et){var st,bt={},Pt=null;if(dt!=null)for(st in dt.key!==void 0&&(Pt=""+dt.key),dt)w.call(dt,st)&&st!=="key"&&st!=="__self"&&st!=="__source"&&(bt[st]=dt[st]);var Rt=arguments.length-2;if(Rt===1)bt.children=et;else if(1<Rt){for(var Mt=Array(Rt),Gt=0;Gt<Rt;Gt++)Mt[Gt]=arguments[Gt+2];bt.children=Mt}if(I&&I.defaultProps)for(st in Rt=I.defaultProps,Rt)bt[st]===void 0&&(bt[st]=Rt[st]);return C(I,Pt,bt)},fe.createRef=function(){return{current:null}},fe.forwardRef=function(I){return{$$typeof:d,render:I}},fe.isValidElement=Q,fe.lazy=function(I){return{$$typeof:_,_payload:{_status:-1,_result:I},_init:_t}},fe.memo=function(I,dt){return{$$typeof:m,type:I,compare:dt===void 0?null:dt}},fe.startTransition=Yt,fe.unstable_useCacheRefresh=function(){return X.H.useCacheRefresh()},fe.use=function(I){return X.H.use(I)},fe.useActionState=function(I,dt,et){return X.H.useActionState(I,dt,et)},fe.useCallback=function(I,dt){return X.H.useCallback(I,dt)},fe.useContext=function(I){return X.H.useContext(I)},fe.useDebugValue=function(){},fe.useDeferredValue=function(I,dt){return X.H.useDeferredValue(I,dt)},fe.useEffect=function(I,dt){return X.H.useEffect(I,dt)},fe.useEffectEvent=function(I){return X.H.useEffectEvent(I)},fe.useId=function(){return X.H.useId()},fe.useImperativeHandle=function(I,dt,et){return X.H.useImperativeHandle(I,dt,et)},fe.useInsertionEffect=function(I,dt){return X.H.useInsertionEffect(I,dt)},fe.useLayoutEffect=function(I,dt){return X.H.useLayoutEffect(I,dt)},fe.useMemo=function(I,dt){return X.H.useMemo(I,dt)},fe.useOptimistic=function(I,dt){return X.H.useOptimistic(I,dt)},fe.useReducer=function(I,dt,et){return X.H.useReducer(I,dt,et)},fe.useRef=function(I){return X.H.useRef(I)},fe.useState=function(I){return X.H.useState(I)},fe.useSyncExternalStore=function(I,dt,et){return X.H.useSyncExternalStore(I,dt,et)},fe.useTransition=function(){return X.H.useTransition()},fe.version="19.3.0",fe}var E_;function Qp(){return E_||(E_=1,yd.exports=iM()),yd.exports}var Cn=Qp();const aM=Fv(Cn);var Sd={exports:{}},cl={},bd={exports:{}},Md={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var T_;function sM(){return T_||(T_=1,(function(o){function e(k,ct){var $=k.length;k.push(ct);t:for(;0<$;){var _t=$-1>>>1,vt=k[_t];if(0<l(vt,ct))k[_t]=ct,k[$]=vt,$=_t;else break t}}function i(k){return k.length===0?null:k[0]}function s(k){if(k.length===0)return null;var ct=k[0],$=k.pop();if($!==ct){k[0]=$;t:for(var _t=0,vt=k.length,Yt=vt>>>1;_t<Yt;){var he=2*(_t+1)-1,Ae=k[he],I=he+1,dt=k[I];if(0>l(Ae,$))I<vt&&0>l(dt,Ae)?(k[_t]=dt,k[I]=$,_t=I):(k[_t]=Ae,k[he]=$,_t=he);else if(I<vt&&0>l(dt,$))k[_t]=dt,k[I]=$,_t=I;else break t}}return ct}function l(k,ct){var $=k.sortIndex-ct.sortIndex;return $!==0?$:k.id-ct.id}if(o.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var f=performance;o.unstable_now=function(){return f.now()}}else{var h=Date,d=h.now();o.unstable_now=function(){return h.now()-d}}var x=[],m=[],_=1,p=null,y=3,b=!1,E=!1,A=!1,S=!1,v=typeof setTimeout=="function"?setTimeout:null,N=typeof clearTimeout=="function"?clearTimeout:null,L=typeof setImmediate<"u"?setImmediate:null;function z(k){for(var ct=i(m);ct!==null;){if(ct.callback===null)s(m);else if(ct.startTime<=k)s(m),ct.sortIndex=ct.expirationTime,e(x,ct);else break;ct=i(m)}}function G(k){if(A=!1,z(k),!E)if(i(x)!==null)E=!0,D||(D=!0,Q());else{var ct=i(m);ct!==null&&ot(G,ct.startTime-k)}}var D=!1,O=-1,X=5,w=-1;function C(){return S?!0:!(o.unstable_now()-w<X)}function H(){if(S=!1,D){var k=o.unstable_now();w=k;var ct=!0;try{t:{E=!1,A&&(A=!1,N(O),O=-1),b=!0;var $=y;try{e:{for(z(k),p=i(x);p!==null&&!(p.expirationTime>k&&C());){var _t=p.callback;if(typeof _t=="function"){p.callback=null,y=p.priorityLevel;var vt=_t(p.expirationTime<=k);if(k=o.unstable_now(),typeof vt=="function"){p.callback=vt,z(k),ct=!0;break e}p===i(x)&&s(x),z(k)}else s(x);p=i(x)}if(p!==null)ct=!0;else{var Yt=i(m);Yt!==null&&ot(G,Yt.startTime-k),ct=!1}}break t}finally{p=null,y=$,b=!1}ct=void 0}}finally{ct?Q():D=!1}}}var Q;if(typeof L=="function")Q=function(){L(H)};else if(typeof MessageChannel<"u"){var nt=new MessageChannel,ht=nt.port2;nt.port1.onmessage=H,Q=function(){ht.postMessage(null)}}else Q=function(){v(H,0)};function ot(k,ct){O=v(function(){k(o.unstable_now())},ct)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(k){k.callback=null},o.unstable_forceFrameRate=function(k){0>k||125<k?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):X=0<k?Math.floor(1e3/k):5},o.unstable_getCurrentPriorityLevel=function(){return y},o.unstable_next=function(k){switch(y){case 1:case 2:case 3:var ct=3;break;default:ct=y}var $=y;y=ct;try{return k()}finally{y=$}},o.unstable_requestPaint=function(){S=!0},o.unstable_runWithPriority=function(k,ct){switch(k){case 1:case 2:case 3:case 4:case 5:break;default:k=3}var $=y;y=k;try{return ct()}finally{y=$}},o.unstable_scheduleCallback=function(k,ct,$){var _t=o.unstable_now();switch(typeof $=="object"&&$!==null?($=$.delay,$=typeof $=="number"&&0<$?_t+$:_t):$=_t,k){case 1:var vt=-1;break;case 2:vt=250;break;case 5:vt=1073741823;break;case 4:vt=1e4;break;default:vt=5e3}return vt=$+vt,k={id:_++,callback:ct,priorityLevel:k,startTime:$,expirationTime:vt,sortIndex:-1},$>_t?(k.sortIndex=$,e(m,k),i(x)===null&&k===i(m)&&(A?(N(O),O=-1):A=!0,ot(G,$-_t))):(k.sortIndex=vt,e(x,k),E||b||(E=!0,D||(D=!0,Q()))),k},o.unstable_shouldYield=C,o.unstable_wrapCallback=function(k){var ct=y;return function(){var $=y;y=ct;try{return k.apply(this,arguments)}finally{y=$}}}})(Md)),Md}var A_;function rM(){return A_||(A_=1,bd.exports=sM()),bd.exports}var Ed={exports:{}},Pn={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var R_;function oM(){if(R_)return Pn;R_=1;var o=Qp();function e(_){var p="https://react.dev/errors/"+_;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var y=2;y<arguments.length;y++)p+="&args[]="+encodeURIComponent(arguments[y])}return"Minified React error #"+_+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var s={d:{f:i,r:function(){throw Error(e(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal"),f=Symbol.for("react.recoverable"),h=Symbol.for("react.optimistic_key");function d(_,p,y){var b=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:b==null?null:b===h?h:""+b,children:_,containerInfo:p,implementation:y}}var x=o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function m(_,p){if(_==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return Pn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,Pn.browser=function(_){return{$$typeof:f,_reason:_}},Pn.createPortal=function(_,p){var y=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(e(299));return d(_,p,null,y)},Pn.flushSync=function(_){var p=x.T,y=s.p;try{if(x.T=null,s.p=2,_)return _()}finally{x.T=p,s.p=y,s.d.f()}},Pn.preconnect=function(_,p){typeof _=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,s.d.C(_,p))},Pn.prefetchDNS=function(_){typeof _=="string"&&s.d.D(_)},Pn.preinit=function(_,p){if(typeof _=="string"&&p&&typeof p.as=="string"){var y=p.as,b=m(y,p.crossOrigin),E=typeof p.integrity=="string"?p.integrity:void 0,A=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;y==="style"?s.d.S(_,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:b,integrity:E,fetchPriority:A}):y==="script"&&s.d.X(_,{crossOrigin:b,integrity:E,fetchPriority:A,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},Pn.preinitModule=function(_,p){if(typeof _=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var y=m(p.as,p.crossOrigin);s.d.M(_,{crossOrigin:y,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0})}}else p==null&&s.d.M(_)},Pn.preload=function(_,p){if(typeof _=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var y=p.as,b=m(y,p.crossOrigin);s.d.L(_,y,{crossOrigin:b,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},Pn.preloadModule=function(_,p){if(typeof _=="string")if(p){var y=m(p.as,p.crossOrigin);s.d.m(_,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:y,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0})}else s.d.m(_)},Pn.requestFormReset=function(_){s.d.r(_)},Pn.unstable_batchedUpdates=function(_,p){return _(p)},Pn.useFormState=function(_,p,y){return x.H.useFormState(_,p,y)},Pn.useFormStatus=function(){return x.H.useHostTransitionStatus()},Pn.version="19.3.0",Pn}var C_;function lM(){if(C_)return Ed.exports;C_=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(e){console.error(e)}}return o(),Ed.exports=oM(),Ed.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var w_;function cM(){if(w_)return cl;w_=1;var o=rM(),e=Qp(),i=lM();function s(t){var n="https://react.dev/errors/"+t;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+t+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function f(t){for(var n=t,a=n;a&&!a.alternate;)n=a,(n.flags&4098)!==0&&(t=n.return),a=n.return;for(;n.return;)n=n.return;return n.tag===3?t:null}function h(t){if(t.tag===13){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function d(t){if(t.tag===31){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function x(t){if(f(t)!==t)throw Error(s(188))}function m(t){var n=t.alternate;if(!n){if(n=f(t),n===null)throw Error(s(188));return n!==t?null:t}for(var a=t,r=n;;){var c=a.return;if(c===null)break;var u=c.alternate;if(u===null){if(r=c.return,r!==null){a=r;continue}break}if(c.child===u.child){for(u=c.child;u;){if(u===a)return x(c),t;if(u===r)return x(c),n;u=u.sibling}throw Error(s(188))}if(a.return!==r.return)a=c,r=u;else{for(var g=!1,M=c.child;M;){if(M===a){g=!0,a=c,r=u;break}if(M===r){g=!0,r=c,a=u;break}M=M.sibling}if(!g){for(M=u.child;M;){if(M===a){g=!0,a=u,r=c;break}if(M===r){g=!0,r=u,a=c;break}M=M.sibling}if(!g)throw Error(s(189))}}if(a.alternate!==r)throw Error(s(190))}if(a.tag!==3)throw Error(s(188));return a.stateNode.current===a?t:n}function _(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t;for(t=t.child;t!==null;){if(n=_(t),n!==null)return n;t=t.sibling}return null}function p(t,n,a,r,c,u){for(;t!==null;){if((t.tag===5||t.tag===27||t.tag===6)&&a(t,r,c,u)||(t.tag!==22||t.memoizedState===null)&&(n||t.tag!==5&&t.tag!==27)&&p(t.child,n,a,r,c,u))return!0;t=t.sibling}return!1}function y(t){for(t=t.return;t!==null;){if(t.tag===3||t.tag===5||t.tag===27)return t;t=t.return}return null}function b(t){var n=!1;for(t=t.return;t!==null&&(t.tag===4&&(n=!0),!(t.tag===3||t.tag===5||t.tag===27));)t=t.return;return n}function E(t){var n=[null,null],a=y(t);return a===null||A(n,t,a.child,{foundSelf:!1}),n}function A(t,n,a,r){for(;a!==null;){if(a===n)r.foundSelf=!0;else if(a.tag===5||a.tag===27||a.tag===6){if(r.foundSelf)return t[1]=a,!0;t[0]=a}else if((a.tag!==22||a.memoizedState===null)&&A(t,n,a.child,r))return!0;a=a.sibling}return!1}function S(t){switch(t.tag){case 5:case 27:case 6:return t.stateNode;case 3:return t.stateNode.containerInfo;default:throw Error(s(559))}}var v=null,N=null;function L(t,n,a){return t===a?!0:t===n?(v=t,!0):!1}function z(t,n,a){return t===a?(N=t,!1):t===n?(N!==null&&(v=t),!0):!1}function G(t){if(t===null)return null;do t=t===null?null:t.return;while(t&&t.tag!==5&&t.tag!==27&&t.tag!==3);return t||null}function D(t,n,a){for(var r=0,c=t;c;c=a(c))r++;c=0;for(var u=n;u;u=a(u))c++;for(;0<r-c;)t=a(t),r--;for(;0<c-r;)n=a(n),c--;for(;r--;){if(t===n||n!==null&&t===n.alternate)return t;t=a(t),n=a(n)}return null}var O=Object.assign,X=Symbol.for("react.element"),w=Symbol.for("react.transitional.element"),C=Symbol.for("react.portal"),H=Symbol.for("react.fragment"),Q=Symbol.for("react.strict_mode"),nt=Symbol.for("react.profiler"),ht=Symbol.for("react.consumer"),ot=Symbol.for("react.context"),k=Symbol.for("react.forward_ref"),ct=Symbol.for("react.suspense"),$=Symbol.for("react.suspense_list"),_t=Symbol.for("react.memo"),vt=Symbol.for("react.lazy"),Yt=Symbol.for("react.activity"),he=Symbol.for("react.legacy_hidden"),Ae=Symbol.for("react.memo_cache_sentinel"),I=Symbol.for("react.view_transition"),dt=Symbol.for("react.recoverable"),et=Symbol.iterator;function st(t){return t===null||typeof t!="object"?null:(t=et&&t[et]||t["@@iterator"],typeof t=="function"?t:null)}var bt=Symbol.for("react.client.reference");function Pt(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===bt?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case H:return"Fragment";case nt:return"Profiler";case Q:return"StrictMode";case ct:return"Suspense";case $:return"SuspenseList";case Yt:return"Activity";case I:return"ViewTransition"}if(typeof t=="object")switch(t.$$typeof){case C:return"Portal";case ot:return t.displayName||"Context";case ht:return(t._context.displayName||"Context")+".Consumer";case k:var n=t.render;return t=t.displayName,t||(t=n.displayName||n.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case _t:return n=t.displayName||null,n!==null?n:Pt(t.type)||"Memo";case vt:n=t._payload,t=t._init;try{return Pt(t(n))}catch{}}return null}var Rt=Array.isArray,Mt=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Gt=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,le={pending:!1,data:null,method:null,action:null},ke=[],B=-1;function ce(t){return{current:t}}function Jt(t){0>B||(t.current=ke[B],ke[B]=null,B--)}function te(t,n){B++,ke[B]=t.current,t.current=n}var Ft=ce(null),Fe=ce(null),qt=ce(null),se=ce(null);function U(t,n){switch(te(qt,n),te(Fe,t),te(Ft,null),n.nodeType){case 9:case 11:t=(t=n.documentElement)&&(t=t.namespaceURI)?Dg(t):0;break;default:if(t=n.tagName,n=n.namespaceURI)n=Dg(n),t=Ug(n,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}Jt(Ft),te(Ft,t)}function T(){Jt(Ft),Jt(Fe),Jt(qt)}function at(t){var n=t.memoizedState;n!==null&&(Br._currentValue=n.memoizedState,te(se,t)),n=Ft.current;var a=Ug(n,t.type);n!==a&&(te(Fe,t),te(Ft,a))}function xt(t){Fe.current===t&&(Jt(Ft),Jt(Fe)),se.current===t&&(Jt(se),Br._currentValue=le)}var yt,ft;function Vt(t){if(yt===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);yt=n&&n[1]||"",ft=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+yt+t+ft}var Nt=!1;function Kt(t,n){if(!t||Nt)return"";Nt=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var r={DetermineComponentFrameRoot:function(){try{if(n){var mt=function(){throw Error()};if(Object.defineProperty(mt.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(mt,[])}catch(Ut){var Y=Ut}Reflect.construct(t,[],mt)}else{try{mt.call()}catch(Ut){Y=Ut}mt=!1;try{var it=Object.getOwnPropertyDescriptor(t.prototype,"props");Object.defineProperty(t.prototype,"props",{configurable:!0,set:function(){throw Error()}}),mt=!0,new t}finally{mt&&(it!==void 0?Object.defineProperty(t.prototype,"props",it):delete t.prototype.props)}}}else{try{throw Error()}catch(Ut){Y=Ut}(mt=t())&&typeof mt.catch=="function"&&mt.catch(function(){})}}catch(Ut){if(Ut&&Y&&typeof Ut.stack=="string")return[Ut.stack,Y.stack]}return[null,null]}};r.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var c=Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot,"name");c&&c.configurable&&Object.defineProperty(r.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var u=r.DetermineComponentFrameRoot(),g=u[0],M=u[1];if(g&&M){var P=g.split(`
`),j=M.split(`
`);for(c=r=0;r<P.length&&!P[r].includes("DetermineComponentFrameRoot");)r++;for(;c<j.length&&!j[c].includes("DetermineComponentFrameRoot");)c++;if(r===P.length||c===j.length)for(r=P.length-1,c=j.length-1;1<=r&&0<=c&&P[r]!==j[c];)c--;for(;1<=r&&0<=c;r--,c--)if(P[r]!==j[c]){if(r!==1||c!==1)do if(r--,c--,0>c||P[r]!==j[c]){var rt=`
`+P[r].replace(" at new "," at ");return t.displayName&&rt.includes("<anonymous>")&&(rt=rt.replace("<anonymous>",t.displayName)),rt}while(1<=r&&0<=c);break}}}finally{Nt=!1,Error.prepareStackTrace=a}return(a=t?t.displayName||t.name:"")?Vt(a):""}function jt(t,n){switch(t.tag){case 26:case 27:case 5:return Vt(t.type);case 16:return Vt("Lazy");case 13:return t.child!==n&&n!==null?Vt("Suspense Fallback"):Vt("Suspense");case 19:return Vt("SuspenseList");case 0:case 15:return Kt(t.type,!1);case 11:return Kt(t.type.render,!1);case 1:return Kt(t.type,!0);case 31:return Vt("Activity");case 30:return Vt("ViewTransition");default:return""}}function St(t){try{var n="",a=null;do n+=jt(t,a),a=t,t=t.return;while(t);return n}catch(r){return`
Error generating stack: `+r.message+`
`+r.stack}}var Ct=Object.prototype.hasOwnProperty,ee=o.unstable_scheduleCallback,$t=o.unstable_cancelCallback,Bt=o.unstable_shouldYield,re=o.unstable_requestPaint,F=o.unstable_now,Lt=o.unstable_getCurrentPriorityLevel,wt=o.unstable_ImmediatePriority,Dt=o.unstable_UserBlockingPriority,Et=o.unstable_NormalPriority,gt=o.unstable_LowPriority,Xt=o.unstable_IdlePriority,ue=o.log,We=o.unstable_setDisableYieldValue,De=null,tn=null;function fn(t){if(typeof ue=="function"&&We(t),tn&&typeof tn.setStrictMode=="function")try{tn.setStrictMode(De,t)}catch{}}var Gn=Math.clz32?Math.clz32:sa,Ul=Math.log,Nl=Math.LN2;function sa(t){return t>>>=0,t===0?32:31-(Ul(t)/Nl|0)|0}var La=256,vs=262144,ys=4194304;function xi(t){var n=t&42;if(n!==0)return n;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return t&-t;case 262144:case 524288:case 1048576:case 2097152:return t&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function Ss(t,n,a){var r=t.pendingLanes;if(r===0)return 0;var c=0,u=t.suspendedLanes,g=t.pingedLanes;t=t.warmLanes;var M=r&134217727;return M!==0?(r=M&~u,r!==0?c=xi(r):(g&=M,g!==0?c=xi(g):a||(a=M&~t,a!==0&&(c=xi(a))))):(M=r&~u,M!==0?c=xi(M):g!==0?c=xi(g):a||(a=r&~t,a!==0&&(c=xi(a)))),c===0?0:n!==0&&n!==c&&(n&u)===0&&(u=c&-c,a=n&-n,u>=a||u===32&&(a&4194048)!==0)?n:c}function Hi(t,n){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&n)===0}function go(t,n){(n&8)!==0&&(n|=n&32);var a=t.entangledLanes;if(a!==0)for(t=t.entanglements,a&=n;0<a;){var r=31-Gn(a),c=1<<r;n|=t[r],a&=~c}return n}function Ll(t,n){switch(t){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Ol(){var t=ys;return ys<<=1,(ys&62914560)===0&&(ys=4194304),t}function _o(t){for(var n=[],a=0;31>a;a++)n.push(t);return n}function bs(t,n){t.pendingLanes|=n,n!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function ju(t,n,a,r,c,u){var g=t.pendingLanes;t.pendingLanes=a,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=a,t.entangledLanes&=a,t.errorRecoveryDisabledLanes&=a,t.shellSuspendCounter=0;var M=t.entanglements,P=t.expirationTimes,j=t.hiddenUpdates;for(a=g&~a;0<a;){var rt=31-Gn(a),mt=1<<rt;M[rt]=0,P[rt]=-1;var Y=j[rt];if(Y!==null)for(j[rt]=null,rt=0;rt<Y.length;rt++){var it=Y[rt];it!==null&&(it.lane&=-536870913)}a&=~mt}r!==0&&Pl(t,r,0),u!==0&&c===0&&t.tag!==0&&(t.suspendedLanes|=u&~(g&~n))}function Pl(t,n,a){t.pendingLanes|=n,t.suspendedLanes&=~n;var r=31-Gn(n);t.entangledLanes|=n,t.entanglements[r]=t.entanglements[r]|1073741824|a&261930}function zl(t,n){var a=t.entangledLanes|=n;for(t=t.entanglements;a;){var r=31-Gn(a),c=1<<r;c&n|t[r]&n&&(t[r]|=n),a&=~c}}function R(t,n){var a=n&-n;return a=(a&42)!==0?1:W(a),(a&(t.suspendedLanes|n))!==0?0:a}function W(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function lt(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function ut(){var t=Gt.p;return t!==0?t:(t=window.event,t===void 0?32:p_(t.type))}function J(t,n){var a=Gt.p;try{return Gt.p=t,n()}finally{Gt.p=a}}var Tt=Math.random().toString(36).slice(2),At="__reactFiber$"+Tt,Ot="__reactProps$"+Tt,It="__reactContainer$"+Tt,ne="__reactEvents$"+Tt,ae="__reactListeners$"+Tt,Qt="__reactHandles$"+Tt,ve="__reactResources$"+Tt,Ue="__reactMarker$"+Tt,Ze="__reactLoad$"+Tt;function Ke(t){delete t[At],delete t[Ot],delete t[ae],delete t[Qt]}function we(t){var n;if(n=t[At])return n;for(var a=t.parentNode;a;){if(n=a[It]||a[At]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(t=Wg(t);t!==null;){if(a=t[At])return a;t=Wg(t)}return n}t=a,a=t.parentNode}return null}function Wt(t){if(t=t[At]||t[It]){var n=t.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return t}return null}function Be(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t.stateNode;throw Error(s(33))}function ye(t){var n=t[ve];return n||(n=t[ve]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function Le(t){t[Ue]=!0}function ra(t){t[Ze]=void 0}var In=new Set,Oa={};function Pe(t,n){ln(t,n),ln(t+"Capture",n)}function ln(t,n){for(Oa[t]=n,t=0;t<n.length;t++)In.add(n[t])}var Zn=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Mn={},wn={};function vo(t){return Ct.call(wn,t)?!0:Ct.call(Mn,t)?!1:Zn.test(t)?wn[t]=!0:(Mn[t]=!0,!1)}var ge=!1;function x0(){var t=ge;return ge=!1,t}function Il(t,n,a){if(vo(n))if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":t.removeAttribute(n);return;case"boolean":var r=n.toLowerCase().slice(0,5);if(r!=="data-"&&r!=="aria-"){t.removeAttribute(n);return}}t.setAttribute(n,a)}}function Fl(t,n,a){if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(n);return}t.setAttribute(n,a)}}function oa(t,n,a,r){if(r===null)t.removeAttribute(a);else{switch(typeof r){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(a);return}t.setAttributeNS(n,a,r)}}function ii(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function g0(t){var n=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function vy(t,n,a){var r=Object.getOwnPropertyDescriptor(t.constructor.prototype,n);if(!t.hasOwnProperty(n)&&typeof r<"u"&&typeof r.get=="function"&&typeof r.set=="function"){var c=r.get,u=r.set;return Object.defineProperty(t,n,{configurable:!0,get:function(){return c.call(this)},set:function(g){a=""+g,u.call(this,g)}}),Object.defineProperty(t,n,{enumerable:r.enumerable}),{getValue:function(){return a},setValue:function(g){a=""+g},stopTracking:function(){t._valueTracker=null,delete t[n]}}}}function Wu(t){if(!t._valueTracker){var n=g0(t)?"checked":"value";t._valueTracker=vy(t,n,""+t[n])}}function _0(t){if(!t)return!1;var n=t._valueTracker;if(!n)return!0;var a=n.getValue(),r="";return t&&(r=g0(t)?t.checked?"true":"false":t.value),t=r,t!==a?(n.setValue(t),!0):!1}var yy=/[\n"\\]/g;function gi(t){return t.replace(yy,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function Zu(t,n,a,r,c,u,g,M){t.name="",g!=null&&typeof g!="function"&&typeof g!="symbol"&&typeof g!="boolean"?t.type=g:t.removeAttribute("type"),n!=null?g==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+ii(n)):t.value!==""+ii(n)&&(t.value=""+ii(n)):g!=="submit"&&g!=="reset"||t.removeAttribute("value"),n!=null?g==="number"&&t.value==n?Ku(t,ii(t.value)):Ku(t,ii(n)):a!=null?Ku(t,ii(a)):r!=null&&t.removeAttribute("value"),c==null&&u!=null&&(t.defaultChecked=!!u),c!=null&&(t.checked=c&&typeof c!="function"&&typeof c!="symbol"),M!=null&&typeof M!="function"&&typeof M!="symbol"&&typeof M!="boolean"?t.name=""+ii(M):t.removeAttribute("name")}function v0(t,n,a,r,c,u,g,M){if(u!=null&&typeof u!="function"&&typeof u!="symbol"&&typeof u!="boolean"&&(t.type=u),n!=null||a!=null){if(!(u!=="submit"&&u!=="reset"||n!=null)){Wu(t);return}a=a!=null?""+ii(a):"",n=n!=null?""+ii(n):a,M||n===t.value||(t.value=n),t.defaultValue=n}r=r??c,r=typeof r!="function"&&typeof r!="symbol"&&!!r,t.checked=M?t.checked:!!r,t.defaultChecked=!!r,g!=null&&typeof g!="function"&&typeof g!="symbol"&&typeof g!="boolean"&&(t.name=g),Wu(t)}function Ku(t,n){t.defaultValue!==""+n&&(t.defaultValue=""+n)}function ir(t,n,a,r){if(t=t.options,n){n={};for(var c=0;c<a.length;c++)n["$"+a[c]]=!0;for(a=0;a<t.length;a++)c=n.hasOwnProperty("$"+t[a].value),t[a].selected!==c&&(t[a].selected=c),c&&r&&(t[a].defaultSelected=!0)}else{for(a=""+ii(a),n=null,c=0;c<t.length;c++){if(t[c].value===a){t[c].selected=!0,r&&(t[c].defaultSelected=!0);return}n!==null||t[c].disabled||(n=t[c])}n!==null&&(n.selected=!0)}}function y0(t,n,a){if(n!=null&&(n=""+ii(n),n!==t.value&&(t.value=n),a==null)){t.defaultValue!==n&&(t.defaultValue=n);return}t.defaultValue=a!=null?""+ii(a):""}function S0(t,n,a,r){if(n==null){if(r!=null){if(a!=null)throw Error(s(92));if(Rt(r)){if(1<r.length)throw Error(s(93));r=r[0]}a=r}a==null&&(a=""),n=a}a=ii(n),t.defaultValue=a,r=t.textContent,r===a&&r!==""&&r!==null&&(t.value=r),Wu(t)}function ar(t,n){if(n){var a=t.firstChild;if(a&&a===t.lastChild&&a.nodeType===3){a.nodeValue=n;return}}t.textContent=n}var Sy=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function b0(t,n,a){var r=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?r?t.setProperty(n,""):n==="float"?t.cssFloat="":t[n]="":r?t.setProperty(n,a):typeof a!="number"||a===0||Sy.has(n)?n==="float"?t.cssFloat=a:t[n]=(""+a).trim():t[n]=a+"px"}function M0(t,n,a){if(n!=null&&typeof n!="object")throw Error(s(62));if(t=t.style,a!=null){for(var r in a)!a.hasOwnProperty(r)||n!=null&&n.hasOwnProperty(r)||(r.indexOf("--")===0?t.setProperty(r,""):r==="float"?t.cssFloat="":t[r]="",ge=!0);for(var c in n)r=n[c],n.hasOwnProperty(c)&&a[c]!==r&&(b0(t,c,r),ge=!0)}else for(var u in n)n.hasOwnProperty(u)&&b0(t,u,n[u])}function Qu(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var by=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["maskType","mask-type"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),My=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Bl(t){return My.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}function Gi(){}var Ju=null;function $u(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var sr=null,rr=null;function E0(t){var n=Wt(t);if(n&&(t=n.stateNode)){var a=t[Ot]||null;t:switch(t=n.stateNode,n.type){case"input":if(Zu(t,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=t;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+gi(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var r=a[n];if(r!==t&&r.form===t.form){var c=r[Ot]||null;if(!c)throw Error(s(90));Zu(r,c.value,c.defaultValue,c.defaultValue,c.checked,c.defaultChecked,c.type,c.name)}}for(n=0;n<a.length;n++)r=a[n],r.form===t.form&&_0(r)}break t;case"textarea":y0(t,a.value,a.defaultValue);break t;case"select":n=a.value,n!=null&&ir(t,!!a.multiple,n,!1)}}}var tf=!1;function T0(t,n,a){if(tf)return t(n,a);tf=!0;try{var r=t(n);return r}finally{if(tf=!1,(sr!==null||rr!==null)&&(Bc(),sr&&(n=sr,t=rr,rr=sr=null,E0(n),t)))for(n=0;n<t.length;n++)E0(t[n])}}function yo(t,n){var a=t.stateNode;if(a===null)return null;var r=a[Ot]||null;if(r===null)return null;a=r[n];t:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break t;default:t=!1}if(t)return null;if(a&&typeof a!="function")throw Error(s(231,n,typeof a));return a}var la=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ef=!1;if(la)try{var So={};Object.defineProperty(So,"passive",{get:function(){ef=!0}}),window.addEventListener("test",So,So),window.removeEventListener("test",So,So)}catch{ef=!1}var Pa=null,nf=null,Hl=null;function A0(){if(Hl)return Hl;var t,n=nf,a=n.length,r,c="value"in Pa?Pa.value:Pa.textContent,u=c.length;for(t=0;t<a&&n[t]===c[t];t++);var g=a-t;for(r=1;r<=g&&n[a-r]===c[u-r];r++);return Hl=c.slice(t,1<r?1-r:void 0)}function Gl(t){var n=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&n===13&&(t=13)):t=n,t===10&&(t=13),32<=t||t===13?t:0}function Vl(){return!0}function R0(){return!1}function Vn(t){function n(a,r,c,u,g){this._reactName=a,this._targetInst=c,this.type=r,this.nativeEvent=u,this.target=g,this.currentTarget=null;for(var M in t)t.hasOwnProperty(M)&&(a=t[M],this[M]=a?a(u):u[M]);return this.isDefaultPrevented=(u.defaultPrevented!=null?u.defaultPrevented:u.returnValue===!1)?Vl:R0,this.isPropagationStopped=R0,this}return O(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Vl)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Vl)},persist:function(){},isPersistent:Vl}),n}var za={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Xl=Vn(za),bo=O({},za,{view:0,detail:0}),Ey=Vn(bo),af,sf,Mo,kl=O({},bo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:of,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Mo&&(Mo&&t.type==="mousemove"?(af=t.screenX-Mo.screenX,sf=t.screenY-Mo.screenY):sf=af=0,Mo=t),af)},movementY:function(t){return"movementY"in t?t.movementY:sf}}),C0=Vn(kl),Ty=O({},kl,{dataTransfer:0}),Ay=Vn(Ty),Ry=O({},bo,{relatedTarget:0}),rf=Vn(Ry),Cy=O({},za,{animationName:0,elapsedTime:0,pseudoElement:0}),wy=Vn(Cy),Dy=O({},za,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Uy=Vn(Dy),Ny=O({},za,{data:0}),w0=Vn(Ny),Ly={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Oy={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Py={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function zy(t){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(t):(t=Py[t])?!!n[t]:!1}function of(){return zy}var Iy=O({},bo,{key:function(t){if(t.key){var n=Ly[t.key]||t.key;if(n!=="Unidentified")return n}return t.type==="keypress"?(t=Gl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Oy[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:of,charCode:function(t){return t.type==="keypress"?Gl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Gl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Fy=Vn(Iy),By=O({},kl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),D0=Vn(By),Hy=O({},za,{submitter:0}),Gy=Vn(Hy),Vy=O({},bo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:of}),Xy=Vn(Vy),ky=O({},za,{propertyName:0,elapsedTime:0,pseudoElement:0}),Yy=Vn(ky),qy=O({},kl,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),jy=Vn(qy),Wy=O({},za,{newState:0,oldState:0,source:0}),Zy=Vn(Wy),Ky=[9,13,27,32],lf=la&&"CompositionEvent"in window,Eo=null;la&&"documentMode"in document&&(Eo=document.documentMode);var Qy=la&&"TextEvent"in window&&!Eo,U0=la&&(!lf||Eo&&8<Eo&&11>=Eo),N0=" ",L0=!1;function O0(t,n){switch(t){case"keyup":return Ky.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function P0(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var or=!1;function Jy(t,n){switch(t){case"compositionend":return P0(n);case"keypress":return n.which!==32?null:(L0=!0,N0);case"textInput":return t=n.data,t===N0&&L0?null:t;default:return null}}function $y(t,n){if(or)return t==="compositionend"||!lf&&O0(t,n)?(t=A0(),Hl=nf=Pa=null,or=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return U0&&n.locale!=="ko"?null:n.data;default:return null}}var tS={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function z0(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n==="input"?!!tS[t.type]:n==="textarea"}function I0(t,n,a,r){sr?rr?rr.push(r):rr=[r]:sr=r,n=Yc(n,"onChange"),0<n.length&&(a=new Xl("onChange","change",null,a,r),t.push({event:a,listeners:n}))}var To=null,Ao=null;function eS(t){Eg(t,0)}function Yl(t){var n=Be(t);if(_0(n))return t}function F0(t,n){if(t==="change")return n}var B0=!1;if(la){var cf;if(la){var uf="oninput"in document;if(!uf){var H0=document.createElement("div");H0.setAttribute("oninput","return;"),uf=typeof H0.oninput=="function"}cf=uf}else cf=!1;B0=cf&&(!document.documentMode||9<document.documentMode)}function G0(){To&&(To.detachEvent("onpropertychange",V0),Ao=To=null)}function V0(t){if(t.propertyName==="value"&&Yl(Ao)){var n=[];I0(n,Ao,t,$u(t)),T0(eS,n)}}function nS(t,n,a){t==="focusin"?(G0(),To=n,Ao=a,To.attachEvent("onpropertychange",V0)):t==="focusout"&&G0()}function iS(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Yl(Ao)}function aS(t,n){if(t==="click")return Yl(n)}function sS(t,n){if(t==="input"||t==="change")return Yl(n)}function rS(t,n){return t===n&&(t!==0||1/t===1/n)||t!==t&&n!==n}var ai=typeof Object.is=="function"?Object.is:rS;function Ro(t,n){if(ai(t,n))return!0;if(typeof t!="object"||t===null||typeof n!="object"||n===null)return!1;var a=Object.keys(t),r=Object.keys(n);if(a.length!==r.length)return!1;for(r=0;r<a.length;r++){var c=a[r];if(!Ct.call(n,c)||!ai(t[c],n[c]))return!1}return!0}function ff(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function X0(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function k0(t,n){var a=X0(t);t=0;for(var r;a;){if(a.nodeType===3){if(r=t+a.textContent.length,t<=n&&r>=n)return{node:a,offset:n-t};t=r}t:{for(;a;){if(a.nextSibling){a=a.nextSibling;break t}a=a.parentNode}a=void 0}a=X0(a)}}function Y0(t,n){return t&&n?t===n?!0:t&&t.nodeType===3?!1:n&&n.nodeType===3?Y0(t,n.parentNode):"contains"in t?t.contains(n):t.compareDocumentPosition?!!(t.compareDocumentPosition(n)&16):!1:!1}function q0(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var n=ff(t.document);n instanceof t.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)t=n.contentWindow;else break;n=ff(t.document)}return n}function hf(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n&&(n==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||n==="textarea"||t.contentEditable==="true")}var oS=la&&"documentMode"in document&&11>=document.documentMode,lr=null,df=null,Co=null,pf=!1;function j0(t,n,a){var r=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;pf||lr==null||lr!==ff(r)||(r=lr,"selectionStart"in r&&hf(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Co&&Ro(Co,r)||(Co=r,r=Yc(df,"onSelect"),0<r.length&&(n=new Xl("onSelect","select",null,n,a),t.push({event:n,listeners:r}),n.target=lr)))}function Ms(t,n){var a={};return a[t.toLowerCase()]=n.toLowerCase(),a["Webkit"+t]="webkit"+n,a["Moz"+t]="moz"+n,a}var cr={animationend:Ms("Animation","AnimationEnd"),animationiteration:Ms("Animation","AnimationIteration"),animationstart:Ms("Animation","AnimationStart"),transitionrun:Ms("Transition","TransitionRun"),transitionstart:Ms("Transition","TransitionStart"),transitioncancel:Ms("Transition","TransitionCancel"),transitionend:Ms("Transition","TransitionEnd")},mf={},W0={};la&&(W0=document.createElement("div").style,"AnimationEvent"in window||(delete cr.animationend.animation,delete cr.animationiteration.animation,delete cr.animationstart.animation),"TransitionEvent"in window||delete cr.transitionend.transition);function Es(t){if(mf[t])return mf[t];if(!cr[t])return t;var n=cr[t],a;for(a in n)if(n.hasOwnProperty(a)&&a in W0)return mf[t]=n[a];return t}var Z0=Es("animationend"),K0=Es("animationiteration"),Q0=Es("animationstart"),lS=Es("transitionrun"),cS=Es("transitionstart"),uS=Es("transitioncancel"),J0=Es("transitionend"),$0=new Map,xf="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error fullscreenChange fullscreenError gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");xf.push("scrollEnd");function Di(t,n){$0.set(t,n),Pe(n,[t])}var fS=0;function ca(t,n){if(t.name!=null&&t.name!=="auto")return t.name;if(n.autoName!==null)return n.autoName;t=Oi.identifierPrefix;var a=fS++;return t="_"+t+"t_"+a.toString(32)+"_",n.autoName=t}function tm(t){if(t==null||typeof t=="string")return t;var n=null,a=wr;if(a!==null)for(var r=0;r<a.length;r++){var c=t[a[r]];if(c!=null){if(c==="none")return"none";n=n==null?c:n+(" "+c)}}return n??t.default}function ua(t,n){return t=tm(t),n=tm(n),n==null?t==="auto"?null:t:n==="auto"?null:n}var ql=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},_i=[],ur=0,gf=0;function jl(){for(var t=ur,n=gf=ur=0;n<t;){var a=_i[n];_i[n++]=null;var r=_i[n];_i[n++]=null;var c=_i[n];_i[n++]=null;var u=_i[n];if(_i[n++]=null,r!==null&&c!==null){var g=r.pending;g===null?c.next=c:(c.next=g.next,g.next=c),r.pending=c}u!==0&&em(a,c,u)}}function Wl(t,n,a,r){_i[ur++]=t,_i[ur++]=n,_i[ur++]=a,_i[ur++]=r,gf|=r,t.lanes|=r,t=t.alternate,t!==null&&(t.lanes|=r)}function _f(t,n,a,r){return Wl(t,n,a,r),Zl(t)}function Ts(t,n){return Wl(t,null,null,n),Zl(t)}function em(t,n,a){t.lanes|=a;var r=t.alternate;r!==null&&(r.lanes|=a);for(var c=!1,u=t.return;u!==null;)u.childLanes|=a,r=u.alternate,r!==null&&(r.childLanes|=a),u.tag===22&&(t=u.stateNode,t===null||t._visibility&1||(c=!0)),t=u,u=u.return;return t.tag===3?(u=t.stateNode,c&&n!==null&&(c=31-Gn(a),t=u.hiddenUpdates,r=t[c],r===null?t[c]=[n]:r.push(n),n.lane=a|536870912),u):null}function Zl(t){if(50<Ko)throw Ko=0,Fc=null,Error(s(185));for(var n=t.return;n!==null;)t=n,n=t.return;return t.tag===3?t.stateNode:null}var fr={};function hS(t,n,a,r){this.tag=t,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Kn(t,n,a,r){return new hS(t,n,a,r)}function vf(t){return t=t.prototype,!(!t||!t.isReactComponent)}function fa(t,n){var a=t.alternate;return a===null?(a=Kn(t.tag,n,t.key,t.mode),a.elementType=t.elementType,a.type=t.type,a.stateNode=t.stateNode,a.alternate=t,t.alternate=a):(a.pendingProps=n,a.type=t.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=t.flags&1206910976,a.childLanes=t.childLanes,a.lanes=t.lanes,a.child=t.child,a.memoizedProps=t.memoizedProps,a.memoizedState=t.memoizedState,a.updateQueue=t.updateQueue,n=t.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=t.sibling,a.index=t.index,a.ref=t.ref,a.refCleanup=t.refCleanup,a}function nm(t,n){t.flags&=1206910978;var a=t.alternate;return a===null?(t.childLanes=0,t.lanes=n,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=a.childLanes,t.lanes=a.lanes,t.child=a.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=a.memoizedProps,t.memoizedState=a.memoizedState,t.updateQueue=a.updateQueue,t.type=a.type,n=a.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t}function Kl(t,n,a,r,c,u){var g=0;if(r=t,typeof r=="function")vf(r)&&(g=1);else if(typeof r=="string")g=Hb(t,a,Ft.current)?26:t==="html"||t==="head"||t==="body"?27:5;else t:switch(r){case Yt:return t=Kn(31,a,n,c),t.elementType=Yt,t.lanes=u,t;case H:return As(a.children,c,u,n);case Q:g=8,c|=24;break;case nt:return t=Kn(12,a,n,c|2),t.elementType=nt,t.lanes=u,t;case ct:return t=Kn(13,a,n,c),t.elementType=ct,t.lanes=u,t;case $:return t=Kn(19,a,n,c),t.elementType=$,t.lanes=u,t;case he:case I:return t=c|32,t=Kn(30,a,n,t),t.elementType=I,t.lanes=u,t.stateNode={autoName:null,paired:null,clones:null,ref:null},t;default:if(typeof r=="object"&&r!==null)switch(r.$$typeof){case ot:g=10;break t;case ht:g=9;break t;case k:g=11;break t;case _t:g=14;break t;case vt:g=16,r=null;break t}g=29,a=Error(s(130,t===null?"null":typeof t,"")),r=null}return n=Kn(g,a,n,c),n.elementType=t,n.type=r,n.lanes=u,n}function As(t,n,a,r){return t=Kn(7,t,r,n),t.lanes=a,t}function yf(t,n,a){return t=Kn(6,t,null,n),t.lanes=a,t}function im(t){var n=Kn(18,null,null,0);return n.stateNode=t,n}function Sf(t,n,a){return n=Kn(4,t.children!==null?t.children:[],t.key,n),n.lanes=a,n.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},n}var am=new WeakMap;function vi(t,n){if(typeof t=="object"&&t!==null){var a=am.get(t);return a!==void 0?a:(n={value:t,source:n,stack:St(n)},am.set(t,n),n)}return{value:t,source:n,stack:St(n)}}var hr=[],dr=0,Ql=null,wo=0,yi=[],Si=0,Ia=null,Vi=1,Xi="";function ha(t,n){hr[dr++]=wo,hr[dr++]=Ql,Ql=t,wo=n}function sm(t,n,a){yi[Si++]=Vi,yi[Si++]=Xi,yi[Si++]=Ia,Ia=t;var r=Vi;t=Xi;var c=32-Gn(r)-1;r&=~(1<<c),a+=1;var u=32-Gn(n)+c;if(30<u){var g=c-c%5;u=(r&(1<<g)-1).toString(32),r>>=g,c-=g,Vi=1<<32-Gn(n)+c|a<<c|r,Xi=u+t}else Vi=1<<u|a<<c|r,Xi=t}function Jl(t){t.return!==null&&(ha(t,1),sm(t,1,0))}function bf(t){for(;t===Ql;)Ql=hr[--dr],hr[dr]=null,wo=hr[--dr],hr[dr]=null;for(;t===Ia;)Ia=yi[--Si],yi[Si]=null,Xi=yi[--Si],yi[Si]=null,Vi=yi[--Si],yi[Si]=null}function rm(t,n){yi[Si++]=Vi,yi[Si++]=Xi,yi[Si++]=Ia,Vi=n.id,Xi=n.overflow,Ia=t}var En=null,Je=null,Se=!1,Fa=null,bi=!1,Mf=Error(s(519));function Ba(t){var n=Error(s(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Do(vi(n,t)),Mf}function om(t){var n=t.stateNode,a=t.type,r=t.memoizedProps;switch(n[At]=t,n[Ot]=r,a){case"dialog":Te("cancel",n),Te("close",n);break;case"iframe":case"object":case"embed":Te("load",n);break;case"video":case"audio":for(a=0;a<Jo.length;a++)Te(Jo[a],n);break;case"source":Te("error",n);break;case"img":case"image":case"link":Te("error",n),Te("load",n);break;case"details":Te("toggle",n);break;case"input":Te("invalid",n),v0(n,r.value,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name,!0);break;case"select":Te("invalid",n);break;case"textarea":Te("invalid",n),S0(n,r.value,r.defaultValue,r.children)}a=r.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||r.suppressHydrationWarning===!0||Cg(n.textContent,a)?(r.popover!=null&&(Te("beforetoggle",n),Te("toggle",n)),r.onScroll!=null&&Te("scroll",n),r.onScrollEnd!=null&&Te("scrollend",n),r.onClick!=null&&(n.onclick=Gi),n=!0):n=!1,n||Ba(t,!0)}function $l(t){for(En=t.return;En;)switch(En.tag){case 5:case 31:case 13:bi=!1;return;case 27:case 3:bi=!0;return;default:En=En.return}}function pr(t){if(t!==En)return!1;if(!Se)return $l(t),Se=!0,!1;var n=t.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=t.type,a=!(a!=="form"&&a!=="button")||$h(t.type,t.memoizedProps)),a=!a),a&&Je&&Ba(t),$l(t),n===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(317));Je=jg(t)}else if(n===31){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(317));Je=jg(t)}else n===27?(n=Je,es(t.type)?(t=ld,ld=null,Je=t):Je=n):Je=En?Ei(t.stateNode.nextSibling):null;return!0}function Rs(){Je=En=null,Se=!1}function Ef(){var t=Fa;return t!==null&&($n===null?$n=t:$n.push.apply($n,t),Fa=null),t}function Do(t){Fa===null?Fa=[t]:Fa.push(t)}var Tf=ce(null),Cs=null,da=null;function Ha(t,n,a){te(Tf,n._currentValue),n._currentValue=a}function pa(t){t._currentValue=Tf.current,Jt(Tf)}function tc(t,n,a){for(;t!==null;){var r=t.alternate;if((t.childLanes&n)!==n?(t.childLanes|=n,r!==null&&(r.childLanes|=n)):r!==null&&(r.childLanes&n)!==n&&(r.childLanes|=n),t===a)break;t=t.return}}function Af(t,n,a,r){var c=t.child;for(c!==null&&(c.return=t);c!==null;){var u=c.dependencies;if(u!==null){var g=c.child;u=u.firstContext;t:for(;u!==null;){var M=u;u=c;for(var P=0;P<n.length;P++)if(M.context===n[P]){u.lanes|=a,M=u.alternate,M!==null&&(M.lanes|=a),tc(u.return,a,t),r||(g=null);break t}u=M.next}}else if(c.tag===18){if(g=c.return,g===null)throw Error(s(341));g.lanes|=a,u=g.alternate,u!==null&&(u.lanes|=a),tc(g,a,t),g=null}else c.tag===13&&c.memoizedState!==null&&c.memoizedState.dehydrated===null?(c.lanes|=a,g=c.alternate,g!==null&&(g.lanes|=a),tc(c.return,a,t),g=c.child,g=g!==null?g.sibling:null):g=c.child;if(g!==null)g.return=c;else for(g=c;g!==null;){if(g===t){g=null;break}if(c=g.sibling,c!==null){c.return=g.return,g=c;break}g=g.return}c=g}}function ws(t,n,a,r){t=null;for(var c=n,u=!1;c!==null;){if(!u){if((c.flags&524288)!==0)u=!0;else if((c.flags&262144)!==0)break}if(c.tag===10){var g=c.alternate;if(g===null)throw Error(s(387));if(g=g.memoizedProps,g!==null){var M=c.type;ai(c.pendingProps.value,g.value)||(t!==null?t.push(M):t=[M])}}else if(c===se.current){if(g=c.alternate,g===null)throw Error(s(387));g.memoizedState.memoizedState!==c.memoizedState.memoizedState&&(t!==null?t.push(Br):t=[Br])}c=c.return}return t!==null&&Af(n,t,a,r),n.flags|=262144,t!==null}function ec(t){for(t=t.firstContext;t!==null;){if(!ai(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function Ds(t){Cs=t,da=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function Dn(t){return lm(Cs,t)}function nc(t,n){return Cs===null&&Ds(t),lm(t,n)}function lm(t,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},da===null){if(t===null)throw Error(s(308));da=n,t.dependencies={lanes:0,firstContext:n},t.flags|=524288}else da=da.next=n;return a}var dS=typeof AbortController<"u"?AbortController:function(){var t=[],n=this.signal={aborted:!1,addEventListener:function(a,r){t.push(r)}};this.abort=function(){n.aborted=!0,t.forEach(function(a){return a()})}},pS=o.unstable_scheduleCallback,mS=o.unstable_NormalPriority,hn={$$typeof:ot,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Rf(){return{controller:new dS,data:new Map,refCount:0}}function Uo(t){t.refCount--,t.refCount===0&&pS(mS,function(){t.controller.abort()})}function cm(t,n){if((t.pendingLanes&4194048)!==0){var a=t.transitionTypes;for(a===null&&(a=t.transitionTypes=[]),t=0;t<n.length;t++){var r=n[t];a.indexOf(r)===-1&&a.push(r)}}}var No=null;function xS(t){var n=t.transitionTypes;return t.transitionTypes=null,n}var Lo=null,Cf=0,Us=0,mr=null;function gS(t,n){if(Lo===null){var a=Lo=[];Cf=0,Us=kh(),mr={status:"pending",value:void 0,then:function(r){a.push(r)}}}return Cf++,n.then(um,um),n}function um(){if(--Cf===0&&(No=null,Lo!==null)){mr!==null&&(mr.status="fulfilled");var t=Lo;Lo=null,Us=0,mr=null;for(var n=0;n<t.length;n++)(0,t[n])()}}function _S(t,n){var a=[],r={status:"pending",value:null,reason:null,then:function(c){a.push(c)}};return t.then(function(){r.status="fulfilled",r.value=n;for(var c=0;c<a.length;c++)(0,a[c])(n)},function(c){for(r.status="rejected",r.reason=c,c=0;c<a.length;c++)(0,a[c])(void 0)}),r}var fm=Mt.S;Mt.S=function(t,n){if(ig=F(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&gS(t,n),No!==null)for(var a=Lr;a!==null;)cm(a,No),a=a.next;if(a=t.types,a!==null){for(var r=Lr;r!==null;)cm(r,a),r=r.next;if(Us!==0){r=No,r===null&&(r=No=[]);for(var c=0;c<a.length;c++){var u=a[c];r.indexOf(u)===-1&&r.push(u)}}}fm!==null&&fm(t,n)};var Ns=ce(null);function wf(){var t=Ns.current;return t!==null?t:Qe.pooledCache}function ic(t,n){n===null?te(Ns,Ns.current):te(Ns,n.pool)}function hm(){var t=wf();return t===null?null:{parent:hn._currentValue,pool:t}}var xr=Error(s(460)),Df=Error(s(474)),ac=Error(s(542)),sc={then:function(){}};function dm(t){return t=t.status,t==="fulfilled"||t==="rejected"}function pm(t,n,a){switch(a=t[a],a===void 0?t.push(n):a!==n&&(n.then(Gi,Gi),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,xm(t),t===void 0&&!("reason"in n)?Error(s(600)):t;default:if(typeof n.status=="string")n.then(Gi,Gi);else{if(t=Qe,t!==null&&100<t.shellSuspendCounter)throw Error(s(482));t=n,t.status="pending",t.then(function(r){if(n.status==="pending"){var c=n;c.status="fulfilled",c.value=r}},function(r){if(n.status==="pending"){var c=n;c.status="rejected",c.reason=r}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,xm(t),t}throw Os=n,xr}}function Ls(t){try{var n=t._init;return n(t._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(Os=a,xr):a}}var Os=null;function mm(){if(Os===null)throw Error(s(459));var t=Os;return Os=null,t}function xm(t){if(t===xr||t===ac)throw Error(s(483))}var gr=null,Oo=0;function rc(t){var n=Oo;return Oo+=1,gr===null&&(gr=[]),pm(gr,t,n)}function Ga(t,n){n=n.props.ref,t.ref=n!==void 0?n:null}function oc(t,n){throw n.$$typeof===X?Error(s(525)):(t=Object.prototype.toString.call(n),Error(s(31,t==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":t)))}function gm(t){function n(q,V){if(t){var tt=q.deletions;tt===null?(q.deletions=[V],q.flags|=16):tt.push(V)}}function a(q,V){if(!t)return null;for(;V!==null;)n(q,V),V=V.sibling;return null}function r(q){for(var V=new Map;q!==null;)q.key===null?V.set(q.index,q):V.set(q.key,q),q=q.sibling;return V}function c(q,V){return q=fa(q,V),q.index=0,q.sibling=null,q}function u(q,V,tt){return q.index=tt,t?(tt=q.alternate,tt!==null?(tt=tt.index,tt<V?(q.flags|=2,V):tt):(q.flags|=134217730,V)):(q.flags|=1048576,V)}function g(q){return t&&q.alternate===null&&(q.flags|=134217730),q}function M(q,V,tt,pt){return V===null||V.tag!==6?(V=yf(tt,q.mode,pt),V.return=q,V):(V=c(V,tt),V.return=q,V)}function P(q,V,tt,pt){var Ht=tt.type;return Ht===H?(q=rt(q,V,tt.props.children,pt,tt.key),Ga(q,tt),q):V!==null&&(V.elementType===Ht||typeof Ht=="object"&&Ht!==null&&Ht.$$typeof===vt&&Ls(Ht)===V.type)?(V=c(V,tt.props),Ga(V,tt),V.return=q,V):(V=Kl(tt.type,tt.key,tt.props,null,q.mode,pt),Ga(V,tt),V.return=q,V)}function j(q,V,tt,pt){return V===null||V.tag!==4||V.stateNode.containerInfo!==tt.containerInfo||V.stateNode.implementation!==tt.implementation?(V=Sf(tt,q.mode,pt),V.return=q,V):(V=c(V,tt.children||[]),V.return=q,V)}function rt(q,V,tt,pt,Ht){return V===null||V.tag!==7?(V=As(tt,q.mode,pt,Ht),V.return=q,V):(V=c(V,tt),V.return=q,V)}function mt(q,V,tt){if(typeof V=="string"&&V!==""||typeof V=="number"||typeof V=="bigint")return V=yf(""+V,q.mode,tt),V.return=q,V;if(typeof V=="object"&&V!==null){switch(V.$$typeof){case w:return tt=Kl(V.type,V.key,V.props,null,q.mode,tt),Ga(tt,V),tt.return=q,tt;case C:return V=Sf(V,q.mode,tt),V.return=q,V;case vt:return V=Ls(V),mt(q,V,tt)}if(Rt(V)||st(V))return V=As(V,q.mode,tt,null),V.return=q,V;if(typeof V.then=="function")return mt(q,rc(V),tt);if(V.$$typeof===ot)return mt(q,nc(q,V),tt);oc(q,V)}return null}function Y(q,V,tt,pt){var Ht=V!==null?V.key:null;if(typeof tt=="string"&&tt!==""||typeof tt=="number"||typeof tt=="bigint")return Ht!==null?null:M(q,V,""+tt,pt);if(typeof tt=="object"&&tt!==null){switch(tt.$$typeof){case w:return tt.key===Ht?P(q,V,tt,pt):null;case C:return tt.key===Ht?j(q,V,tt,pt):null;case vt:return tt=Ls(tt),Y(q,V,tt,pt)}if(Rt(tt)||st(tt))return Ht!==null?null:rt(q,V,tt,pt,null);if(typeof tt.then=="function")return Y(q,V,rc(tt),pt);if(tt.$$typeof===ot)return Y(q,V,nc(q,tt),pt);oc(q,tt)}return null}function it(q,V,tt,pt,Ht){if(typeof pt=="string"&&pt!==""||typeof pt=="number"||typeof pt=="bigint")return q=q.get(tt)||null,M(V,q,""+pt,Ht);if(typeof pt=="object"&&pt!==null){switch(pt.$$typeof){case w:return q=q.get(pt.key===null?tt:pt.key)||null,P(V,q,pt,Ht);case C:return q=q.get(pt.key===null?tt:pt.key)||null,j(V,q,pt,Ht);case vt:return pt=Ls(pt),it(q,V,tt,pt,Ht)}if(Rt(pt)||st(pt))return q=q.get(tt)||null,rt(V,q,pt,Ht,null);if(typeof pt.then=="function")return it(q,V,tt,rc(pt),Ht);if(pt.$$typeof===ot)return it(q,V,tt,nc(V,pt),Ht);oc(V,pt)}return null}function Ut(q,V,tt,pt){for(var Ht=null,Ce=null,Zt=V,ie=V=0,mn=null;Zt!==null&&ie<tt.length;ie++){Zt.index>ie?(mn=Zt,Zt=null):mn=Zt.sibling;var Ne=Y(q,Zt,tt[ie],pt);if(Ne===null){Zt===null&&(Zt=mn);break}t&&Zt&&Ne.alternate===null&&n(q,Zt),V=u(Ne,V,ie),Ce===null?Ht=Ne:Ce.sibling=Ne,Ce=Ne,Zt=mn}if(ie===tt.length)return a(q,Zt),Se&&ha(q,ie),Ht;if(Zt===null){for(;ie<tt.length;ie++)Zt=mt(q,tt[ie],pt),Zt!==null&&(V=u(Zt,V,ie),Ce===null?Ht=Zt:Ce.sibling=Zt,Ce=Zt);return Se&&ha(q,ie),Ht}for(Zt=r(Zt);ie<tt.length;ie++)mn=it(Zt,q,ie,tt[ie],pt),mn!==null&&(t&&(Ne=mn.alternate,Ne!==null&&Zt.delete(Ne.key===null?ie:Ne.key)),V=u(mn,V,ie),Ce===null?Ht=mn:Ce.sibling=mn,Ce=mn);return t&&Zt.forEach(function(rs){return n(q,rs)}),Se&&ha(q,ie),Ht}function kt(q,V,tt,pt){if(tt==null)throw Error(s(151));for(var Ht=null,Ce=null,Zt=V,ie=V=0,mn=null,Ne=tt.next();Zt!==null&&!Ne.done;ie++,Ne=tt.next()){Zt.index>ie?(mn=Zt,Zt=null):mn=Zt.sibling;var rs=Y(q,Zt,Ne.value,pt);if(rs===null){Zt===null&&(Zt=mn);break}t&&Zt&&rs.alternate===null&&n(q,Zt),V=u(rs,V,ie),Ce===null?Ht=rs:Ce.sibling=rs,Ce=rs,Zt=mn}if(Ne.done)return a(q,Zt),Se&&ha(q,ie),Ht;if(Zt===null){for(;!Ne.done;ie++,Ne=tt.next())Ne=mt(q,Ne.value,pt),Ne!==null&&(V=u(Ne,V,ie),Ce===null?Ht=Ne:Ce.sibling=Ne,Ce=Ne);return Se&&ha(q,ie),Ht}for(Zt=r(Zt);!Ne.done;ie++,Ne=tt.next())Ne=it(Zt,q,ie,Ne.value,pt),Ne!==null&&(t&&(mn=Ne.alternate,mn!==null&&Zt.delete(mn.key===null?ie:mn.key)),V=u(Ne,V,ie),Ce===null?Ht=Ne:Ce.sibling=Ne,Ce=Ne);return t&&Zt.forEach(function(Jb){return n(q,Jb)}),Se&&ha(q,ie),Ht}function me(q,V,tt,pt){if(typeof tt=="object"&&tt!==null&&tt.type===H&&tt.key===null&&tt.props.ref===void 0&&(tt=tt.props.children),typeof tt=="object"&&tt!==null){switch(tt.$$typeof){case w:t:{for(var Ht=tt.key;V!==null;){if(V.key===Ht){if(Ht=tt.type,Ht===H){if(V.tag===7){a(q,V.sibling),pt=c(V,tt.props.children),Ga(pt,tt),pt.return=q,q=pt;break t}}else if(V.elementType===Ht||typeof Ht=="object"&&Ht!==null&&Ht.$$typeof===vt&&Ls(Ht)===V.type){a(q,V.sibling),pt=c(V,tt.props),Ga(pt,tt),pt.return=q,q=pt;break t}a(q,V);break}else n(q,V);V=V.sibling}tt.type===H?(pt=As(tt.props.children,q.mode,pt,tt.key),Ga(pt,tt),pt.return=q,q=pt):(pt=Kl(tt.type,tt.key,tt.props,null,q.mode,pt),Ga(pt,tt),pt.return=q,q=pt)}return g(q);case C:t:{for(Ht=tt.key;V!==null;){if(V.key===Ht)if(V.tag===4&&V.stateNode.containerInfo===tt.containerInfo&&V.stateNode.implementation===tt.implementation){a(q,V.sibling),pt=c(V,tt.children||[]),pt.return=q,q=pt;break t}else{a(q,V);break}else n(q,V);V=V.sibling}pt=Sf(tt,q.mode,pt),pt.return=q,q=pt}return g(q);case vt:return tt=Ls(tt),me(q,V,tt,pt)}if(Rt(tt))return Ut(q,V,tt,pt);if(st(tt)){if(Ht=st(tt),typeof Ht!="function")throw Error(s(150));return tt=Ht.call(tt),kt(q,V,tt,pt)}if(typeof tt.then=="function")return me(q,V,rc(tt),pt);if(tt.$$typeof===ot)return me(q,V,nc(q,tt),pt);oc(q,tt)}return typeof tt=="string"&&tt!==""||typeof tt=="number"||typeof tt=="bigint"?(tt=""+tt,V!==null&&V.tag===6?(a(q,V.sibling),pt=c(V,tt),pt.return=q,q=pt):(a(q,V),pt=yf(tt,q.mode,pt),pt.return=q,q=pt),g(q)):a(q,V)}return function(q,V,tt,pt){try{Oo=0;var Ht=me(q,V,tt,pt);return gr=null,Ht}catch(Zt){if(Zt===xr||Zt===ac)throw Zt;var Ce=Kn(29,Zt,null,q.mode);return Ce.lanes=pt,Ce.return=q,Ce}finally{}}}var Ps=gm(!0),_m=gm(!1),Va=!1;function Uf(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Nf(t,n){t=t.updateQueue,n.updateQueue===t&&(n.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function Xa(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function ka(t,n,a){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,(ze&2)!==0){var c=r.pending;return c===null?n.next=n:(n.next=c.next,c.next=n),r.pending=n,n=Zl(t),em(t,null,a),n}return Wl(t,r,n,a),Zl(t)}function Po(t,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var r=n.lanes;r&=t.pendingLanes,a|=r,n.lanes=a,zl(t,a)}}function Lf(t,n){var a=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,a===r)){var c=null,u=null;if(a=a.firstBaseUpdate,a!==null){do{var g={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};u===null?c=u=g:u=u.next=g,a=a.next}while(a!==null);u===null?c=u=n:u=u.next=n}else c=u=n;a={baseState:r.baseState,firstBaseUpdate:c,lastBaseUpdate:u,shared:r.shared,callbacks:r.callbacks},t.updateQueue=a;return}t=a.lastBaseUpdate,t===null?a.firstBaseUpdate=n:t.next=n,a.lastBaseUpdate=n}var Of=!1;function zo(){if(Of){var t=mr;if(t!==null)throw t}}function Io(t,n,a,r){Of=!1;var c=t.updateQueue;Va=!1;var u=c.firstBaseUpdate,g=c.lastBaseUpdate,M=c.shared.pending;if(M!==null){c.shared.pending=null;var P=M,j=P.next;P.next=null,g===null?u=j:g.next=j,g=P;var rt=t.alternate;rt!==null&&(rt=rt.updateQueue,M=rt.lastBaseUpdate,M!==g&&(M===null?rt.firstBaseUpdate=j:M.next=j,rt.lastBaseUpdate=P))}if(u!==null){var mt=c.baseState;g=0,rt=j=P=null,M=u;do{var Y=M.lane&-536870913,it=Y!==M.lane;if(it?(Re&Y)===Y:(r&Y)===Y){Y!==0&&Y===Us&&(Of=!0),rt!==null&&(rt=rt.next={lane:0,tag:M.tag,payload:M.payload,callback:null,next:null});t:{var Ut=t,kt=M;Y=n;var me=a;switch(kt.tag){case 1:if(Ut=kt.payload,typeof Ut=="function"){mt=Ut.call(me,mt,Y);break t}mt=Ut;break t;case 3:Ut.flags=Ut.flags&-65537|128;case 0:if(Ut=kt.payload,Y=typeof Ut=="function"?Ut.call(me,mt,Y):Ut,Y==null)break t;mt=O({},mt,Y);break t;case 2:Va=!0}}Y=M.callback,Y!==null&&(t.flags|=64,it&&(t.flags|=8192),it=c.callbacks,it===null?c.callbacks=[Y]:it.push(Y))}else it={lane:Y,tag:M.tag,payload:M.payload,callback:M.callback,next:null},rt===null?(j=rt=it,P=mt):rt=rt.next=it,g|=Y;if(M=M.next,M===null){if(M=c.shared.pending,M===null)break;it=M,M=it.next,it.next=null,c.lastBaseUpdate=it,c.shared.pending=null}}while(!0);rt===null&&(P=mt),c.baseState=P,c.firstBaseUpdate=j,c.lastBaseUpdate=rt,u===null&&(c.shared.lanes=0),Qa|=g,t.lanes=g,t.memoizedState=mt}}function vm(t,n){if(typeof t!="function")throw Error(s(191,t));t.call(n)}function ym(t,n){var a=t.callbacks;if(a!==null)for(t.callbacks=null,t=0;t<a.length;t++)vm(a[t],n)}var Ya=ce(null),lc=ce(0);function Sm(t,n){t=va,te(lc,t),te(Ya,n),va=t|n.baseLanes}function Pf(){te(lc,va),te(Ya,Ya.current)}function zf(){va=lc.current,Jt(Ya),Jt(lc)}var Un=ce(null),Fn=null;function qa(t){var n=t.alternate;te(Nn,Nn.current&1),te(Un,t),Fn===null&&(n===null||Ya.current!==null||n.memoizedState!==null)&&(Fn=t)}function If(t){te(Nn,Nn.current),te(Un,t),Fn===null&&(Fn=t)}function bm(t){t.tag===22?(te(Nn,Nn.current),te(Un,t),Fn===null&&(Fn=t)):ja()}function ja(){te(Nn,Nn.current),te(Un,Un.current)}function si(t){Jt(Un),Fn===t&&(Fn=null),Jt(Nn)}var Nn=ce(0);function Fo(t,n){te(Un,Un.current),te(Nn,n)}function Ff(t){Jt(Nn),Jt(Un),Fn===t&&(Fn=null)}function cc(t){for(var n=t;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||rd(a)||od(a)))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!=="independent"){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var ma=0,pe=null,Ye=null,dn=null,uc=!1,_r=!1,zs=!1,fc=0,Bo=0,vr=null,vS=0;function an(){throw Error(s(321))}function Bf(t,n){if(n===null)return!1;for(var a=0;a<n.length&&a<t.length;a++)if(!ai(t[a],n[a]))return!1;return!0}function Hf(t,n,a,r,c,u){return ma=u,pe=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,Mt.H=t===null||t.memoizedState===null?sx:rx,zs=!1,u=a(r,c),zs=!1,_r&&(u=Em(n,a,r,c)),Mm(t),u}function Mm(t){Mt.H=_c;var n=Ye!==null&&Ye.next!==null;if(ma=0,dn=Ye=pe=null,uc=!1,Bo=0,vr=null,n)throw Error(s(300));t===null||pn||(t=t.dependencies,t!==null&&ec(t)&&(pn=!0))}function Em(t,n,a,r){pe=t;var c=0;do{if(_r&&(vr=null),Bo=0,_r=!1,25<=c)throw Error(s(301));if(c+=1,dn=Ye=null,t.updateQueue!=null){var u=t.updateQueue;u.lastEffect=null,u.events=null,u.stores=null,u.memoCache!=null&&(u.memoCache.index=0)}Mt.H=RS,u=n(a,r)}while(_r);return u}function yS(){var t=Mt.H,n=t.useState()[0];return n=typeof n.then=="function"?Ho(n):n,t=t.useState()[0],(Ye!==null?Ye.memoizedState:null)!==t&&(pe.flags|=1024),n}function Gf(){var t=fc!==0;return fc=0,t}function Vf(t,n,a){n.updateQueue=t.updateQueue,n.flags&=-2053,t.lanes&=~a}function Xf(t){if(uc){for(t=t.memoizedState;t!==null;){var n=t.queue;n!==null&&(n.pending=null),t=t.next}uc=!1}ma=0,dn=Ye=pe=null,_r=!1,Bo=fc=0,vr=null}function Xn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return dn===null?pe.memoizedState=dn=t:dn=dn.next=t,dn}function cn(){if(Ye===null){var t=pe.alternate;t=t!==null?t.memoizedState:null}else t=Ye.next;var n=dn===null?pe.memoizedState:dn.next;if(n!==null)dn=n,Ye=t;else{if(t===null)throw pe.alternate===null?Error(s(467)):Error(s(310));Ye=t,t={memoizedState:Ye.memoizedState,baseState:Ye.baseState,baseQueue:Ye.baseQueue,queue:Ye.queue,next:null},dn===null?pe.memoizedState=dn=t:dn=dn.next=t}return dn}function hc(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Ho(t){var n=Bo;return Bo+=1,vr===null&&(vr=[]),t=pm(vr,t,n),n=pe,(dn===null?n.memoizedState:dn.next)===null&&(n=n.alternate,Mt.H=n===null||n.memoizedState===null?sx:rx),t}function dc(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return Ho(t);if(t.$$typeof===dt)return;if(t.$$typeof===ot)return Dn(t)}throw Error(s(438,String(t)))}function kf(t){var n=null,a=pe.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var r=pe.alternate;r!==null&&(r=r.updateQueue,r!==null&&(r=r.memoCache,r!=null&&(n={data:r.data.map(function(c){return c.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=hc(),pe.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(t),r=0;r<t;r++)a[r]=Ae;return n.index++,a}function xa(t,n){return typeof n=="function"?n(t):n}function pc(t){var n=cn();return Yf(n,Ye,t)}function Yf(t,n,a){var r=t.queue;if(r===null)throw Error(s(311));r.lastRenderedReducer=a;var c=t.baseQueue,u=r.pending;if(u!==null){if(c!==null){var g=c.next;c.next=u.next,u.next=g}n.baseQueue=c=u,r.pending=null}if(u=t.baseState,c===null)t.memoizedState=u;else{n=c.next;var M=g=null,P=null,j=n,rt=!1;do{var mt=j.lane&-536870913;if(mt!==j.lane?(Re&mt)===mt:(ma&mt)===mt){var Y=j.revertLane;if(Y===0)P!==null&&(P=P.next={lane:0,revertLane:0,gesture:null,action:j.action,hasEagerState:j.hasEagerState,eagerState:j.eagerState,next:null}),mt===Us&&(rt=!0);else if((ma&Y)===Y){j=j.next,Y===Us&&(rt=!0);continue}else mt={lane:0,revertLane:j.revertLane,gesture:null,action:j.action,hasEagerState:j.hasEagerState,eagerState:j.eagerState,next:null},P===null?(M=P=mt,g=u):P=P.next=mt,pe.lanes|=Y,Qa|=Y;mt=j.action,zs&&a(u,mt),u=j.hasEagerState?j.eagerState:a(u,mt)}else Y={lane:mt,revertLane:j.revertLane,gesture:j.gesture,action:j.action,hasEagerState:j.hasEagerState,eagerState:j.eagerState,next:null},P===null?(M=P=Y,g=u):P=P.next=Y,pe.lanes|=mt,Qa|=mt;j=j.next}while(j!==null&&j!==n);if(P===null?g=u:P.next=M,!ai(u,t.memoizedState)&&(pn=!0,rt&&(a=mr,a!==null)))throw a;t.memoizedState=u,t.baseState=g,t.baseQueue=P,r.lastRenderedState=u}return c===null&&(r.lanes=0),[t.memoizedState,r.dispatch]}function qf(t){var n=cn(),a=n.queue;if(a===null)throw Error(s(311));a.lastRenderedReducer=t;var r=a.dispatch,c=a.pending,u=n.memoizedState;if(c!==null){a.pending=null;var g=c=c.next;do u=t(u,g.action),g=g.next;while(g!==c);ai(u,n.memoizedState)||(pn=!0),n.memoizedState=u,n.baseQueue===null&&(n.baseState=u),a.lastRenderedState=u}return[u,r]}function Tm(t,n,a){var r=pe,c=cn(),u=Se;if(u){if(a===void 0)throw Error(s(407));a=a()}else a=n();var g=!ai((Ye||c).memoizedState,a);if(g&&(c.memoizedState=a,pn=!0),c=c.queue,Zf(Cm.bind(null,r,c,t),[t]),t=c.getSnapshot!==n||g||dn!==null&&(dn.memoizedState.tag&1)!==0,yr(t?9:8,{destroy:void 0},Rm.bind(null,r,c,a,n),null),t){if(r.flags|=2048,Qe===null)throw Error(s(349));u||(ma&127)!==0||Am(r,n,a)}return a}function Am(t,n,a){t.flags|=16384,t={getSnapshot:n,value:a},n=pe.updateQueue,n===null?(n=hc(),pe.updateQueue=n,n.stores=[t]):(a=n.stores,a===null?n.stores=[t]:a.push(t))}function Rm(t,n,a,r){n.value=a,n.getSnapshot=r,wm(n)&&Dm(t)}function Cm(t,n,a){return a(function(){wm(n)&&Dm(t)})}function wm(t){var n=t.getSnapshot;t=t.value;try{var a=n();return!ai(t,a)}catch{return!0}}function Dm(t){var n=Ts(t,2);n!==null&&ti(n,t,2)}function jf(t){var n=Xn();if(typeof t=="function"){var a=t;if(t=a(),zs){fn(!0);try{a()}finally{fn(!1)}}}return n.memoizedState=n.baseState=t,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:xa,lastRenderedState:t},n}function Um(t,n,a,r){return t.baseState=a,Yf(t,Ye,typeof r=="function"?r:xa)}function SS(t,n,a,r,c){if(gc(t))throw Error(s(485));if(t=n.action,t!==null){var u={payload:c,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(g){u.listeners.push(g)}};Mt.T!==null?a(!0):u.isTransition=!1,r(u),a=n.pending,a===null?(u.next=n.pending=u,Nm(n,u)):(u.next=a.next,n.pending=a.next=u)}}function Nm(t,n){var a=n.action,r=n.payload,c=t.state;if(n.isTransition){var u=Mt.T,g={};g.types=u!==null?u.types:null,Mt.T=g;try{var M=a(c,r),P=Mt.S;P!==null&&P(g,M),Lm(t,n,M)}catch(j){Wf(t,n,j)}finally{u!==null&&g.types!==null&&(u.types=g.types),Mt.T=u}}else try{u=a(c,r),Lm(t,n,u)}catch(j){Wf(t,n,j)}}function Lm(t,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(r){Om(t,n,r)},function(r){return Wf(t,n,r)}):Om(t,n,a)}function Om(t,n,a){n.status="fulfilled",n.value=a,Pm(n),t.state=a,n=t.pending,n!==null&&(a=n.next,a===n?t.pending=null:(a=a.next,n.next=a,Nm(t,a)))}function Wf(t,n,a){var r=t.pending;if(t.pending=null,r!==null){r=r.next;do n.status="rejected",n.reason=a,Pm(n),n=n.next;while(n!==r)}t.action=null}function Pm(t){t=t.listeners;for(var n=0;n<t.length;n++)(0,t[n])()}function zm(t,n){return n}function Im(t,n){if(Se){var a=Qe.formState;if(a!==null){t:{var r=pe;if(Se){if(Je){e:{for(var c=Je,u=bi;c.nodeType!==8;){if(!u){c=null;break e}if(c=Ei(c.nextSibling),c===null){c=null;break e}}u=c.data,c=u==="F!"||u==="F"?c:null}if(c){Je=Ei(c.nextSibling),r=c.data==="F!";break t}}Ba(r)}r=!1}r&&(n=a[0])}}return a=Xn(),a.memoizedState=a.baseState=n,r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:zm,lastRenderedState:n},a.queue=r,a=nx.bind(null,pe,r),r.dispatch=a,r=jf(!1),u=th.bind(null,pe,!1,r.queue),r=Xn(),c={state:n,dispatch:null,action:t,pending:null},r.queue=c,a=SS.bind(null,pe,c,u,a),c.dispatch=a,r.memoizedState=t,[n,a,!1]}function Fm(t){var n=cn();return Bm(n,Ye,t)}function Bm(t,n,a){if(n=Yf(t,n,zm)[0],t=pc(xa)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var r=Ho(n)}catch(g){throw g===xr?ac:g}else r=n;n=cn();var c=n.queue,u=c.dispatch;return a!==n.memoizedState&&(pe.flags|=2048,yr(9,{destroy:void 0},bS.bind(null,c,a),null)),[r,u,t]}function bS(t,n){t.action=n}function Hm(t){var n=cn(),a=Ye;if(a!==null)return Bm(n,a,t);cn(),n=n.memoizedState,a=cn();var r=a.queue.dispatch;return a.memoizedState=t,[n,r,!1]}function yr(t,n,a,r){return t={tag:t,create:a,deps:r,inst:n,next:null},n=pe.updateQueue,n===null&&(n=hc(),pe.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=t.next=t:(r=a.next,a.next=t,t.next=r,n.lastEffect=t),t}function Gm(){return cn().memoizedState}function mc(t,n,a,r){var c=Xn();pe.flags|=t,c.memoizedState=yr(1|n,{destroy:void 0},a,r===void 0?null:r)}function xc(t,n,a,r){var c=cn();r=r===void 0?null:r;var u=c.memoizedState.inst;Ye!==null&&r!==null&&Bf(r,Ye.memoizedState.deps)?c.memoizedState=yr(n,u,a,r):(pe.flags|=t,c.memoizedState=yr(1|n,u,a,r))}function Vm(t,n){mc(8390656,8,t,n)}function Zf(t,n){xc(2048,8,t,n)}function MS(t){pe.flags|=4;var n=pe.updateQueue;if(n===null)n=hc(),pe.updateQueue=n,n.events=[t];else{var a=n.events;a===null?n.events=[t]:a.push(t)}}function Xm(t){var n=cn().memoizedState;return MS({ref:n,nextImpl:t}),function(){if((ze&2)!==0)throw Error(s(440));return n.impl.apply(void 0,arguments)}}function km(t,n){return xc(4,2,t,n)}function Ym(t,n){return xc(4,4,t,n)}function qm(t,n){if(typeof n=="function"){t=t();var a=n(t);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return t=t(),n.current=t,function(){n.current=null}}function jm(t,n,a){a=a!=null?a.concat([t]):null,xc(4,4,qm.bind(null,n,t),a)}function Kf(){}function Wm(t,n){var a=cn();n=n===void 0?null:n;var r=a.memoizedState;return n!==null&&Bf(n,r[1])?r[0]:(a.memoizedState=[t,n],t)}function Zm(t,n){var a=cn();n=n===void 0?null:n;var r=a.memoizedState;if(n!==null&&Bf(n,r[1]))return r[0];if(r=t(),zs){fn(!0);try{t()}finally{fn(!1)}}return a.memoizedState=[r,n],r}function Qf(t,n,a){return a===void 0||(ma&1073741824)!==0&&(Re&261930)===0?t.memoizedState=n:(t.memoizedState=a,t=sg(),pe.lanes|=t,Qa|=t,a)}function Km(t,n,a,r){return ai(a,n)?a:Ya.current!==null?(t=Qf(t,a,r),ai(t,n)||(pn=!0),t):(ma&106)===0||(ma&1073741824)!==0&&(Re&261930)===0?(pn=!0,t.memoizedState=a):(t=sg(),pe.lanes|=t,Qa|=t,n)}function Qm(t,n,a,r,c){var u=Gt.p;Gt.p=u!==0&&8>u?u:8;var g=Mt.T,M={};M.types=g!==null?g.types:null,Mt.T=M,th(t,!1,n,a);try{var P=c(),j=Mt.S;if(j!==null&&j(M,P),P!==null&&typeof P=="object"&&typeof P.then=="function"){var rt=_S(P,r);Go(t,n,rt,ci(t))}else Go(t,n,r,ci(t))}catch(mt){Go(t,n,{then:function(){},status:"rejected",reason:mt},ci())}finally{Gt.p=u,g!==null&&M.types!==null&&(g.types=M.types),Mt.T=g}}function ES(){}function Jf(t,n,a,r){if(t.tag!==5)throw Error(s(476));var c=Jm(t).queue;Qm(t,c,n,le,a===null?ES:function(){return $m(t),a(r)})}function Jm(t){var n=t.memoizedState;if(n!==null)return n;n={memoizedState:le,baseState:le,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:xa,lastRenderedState:le},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:xa,lastRenderedState:a},next:null},t.memoizedState=n,t=t.alternate,t!==null&&(t.memoizedState=n),n}function $m(t){var n=Jm(t);n.next===null&&(n=t.alternate.memoizedState),Go(t,n.next.queue,{},ci())}function $f(){return Dn(Br)}function tx(){return cn().memoizedState}function ex(){return cn().memoizedState}function TS(t){for(var n=t.return;n!==null;){switch(n.tag){case 24:case 3:var a=ci();t=Xa(a);var r=ka(n,t,a);r!==null&&(ti(r,n,a),Po(r,n,a)),n={cache:Rf()},t.payload=n;return}n=n.return}}function AS(t,n,a){var r=ci();a={lane:r,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},gc(t)?ix(n,a):(a=_f(t,n,a,r),a!==null&&(ti(a,t,r),ax(a,n,r)))}function nx(t,n,a){var r=ci();Go(t,n,a,r)}function Go(t,n,a,r){var c={lane:r,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(gc(t))ix(n,c);else{var u=t.alternate;if(t.lanes===0&&(u===null||u.lanes===0)&&(u=n.lastRenderedReducer,u!==null))try{var g=n.lastRenderedState,M=u(g,a);if(c.hasEagerState=!0,c.eagerState=M,ai(M,g))return Wl(t,n,c,0),Qe===null&&jl(),!1}catch{}finally{}if(a=_f(t,n,c,r),a!==null)return ti(a,t,r),ax(a,n,r),!0}return!1}function th(t,n,a,r){if(r={lane:2,revertLane:kh(),gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null},gc(t)){if(n)throw Error(s(479))}else n=_f(t,a,r,2),n!==null&&ti(n,t,2)}function gc(t){var n=t.alternate;return t===pe||n!==null&&n===pe}function ix(t,n){_r=uc=!0;var a=t.pending;a===null?n.next=n:(n.next=a.next,a.next=n),t.pending=n}function ax(t,n,a){if((a&4194048)!==0){var r=n.lanes;r&=t.pendingLanes,a|=r,n.lanes=a,zl(t,a)}}var _c={readContext:Dn,use:dc,useCallback:an,useContext:an,useEffect:an,useImperativeHandle:an,useLayoutEffect:an,useInsertionEffect:an,useMemo:an,useReducer:an,useRef:an,useState:an,useDebugValue:an,useDeferredValue:an,useTransition:an,useSyncExternalStore:an,useId:an,useHostTransitionStatus:an,useFormState:an,useActionState:an,useOptimistic:an,useMemoCache:an,useCacheRefresh:an,useEffectEvent:an},sx={readContext:Dn,use:dc,useCallback:function(t,n){return Xn().memoizedState=[t,n===void 0?null:n],t},useContext:Dn,useEffect:Vm,useImperativeHandle:function(t,n,a){a=a!=null?a.concat([t]):null,mc(4194308,4,qm.bind(null,n,t),a)},useLayoutEffect:function(t,n){return mc(4194308,4,t,n)},useInsertionEffect:function(t,n){mc(4,2,t,n)},useMemo:function(t,n){var a=Xn();n=n===void 0?null:n;var r=t();if(zs){fn(!0);try{t()}finally{fn(!1)}}return a.memoizedState=[r,n],r},useReducer:function(t,n,a){var r=Xn();if(a!==void 0){var c=a(n);if(zs){fn(!0);try{a(n)}finally{fn(!1)}}}else c=n;return r.memoizedState=r.baseState=c,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:c},r.queue=t,t=t.dispatch=AS.bind(null,pe,t),[r.memoizedState,t]},useRef:function(t){var n=Xn();return t={current:t},n.memoizedState=t},useState:function(t){t=jf(t);var n=t.queue,a=nx.bind(null,pe,n);return n.dispatch=a,[t.memoizedState,a]},useDebugValue:Kf,useDeferredValue:function(t,n){var a=Xn();return Qf(a,t,n)},useTransition:function(){var t=jf(!1);return t=Qm.bind(null,pe,t.queue,!0,!1),Xn().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,n,a){var r=pe,c=Xn();if(Se){if(a===void 0)throw Error(s(407));a=a()}else{if(a=n(),Qe===null)throw Error(s(349));(Re&127)!==0||Am(r,n,a)}c.memoizedState=a;var u={value:a,getSnapshot:n};return c.queue=u,Vm(Cm.bind(null,r,u,t),[t]),r.flags|=2048,yr(9,{destroy:void 0},Rm.bind(null,r,u,a,n),null),a},useId:function(){var t=Xn(),n=Qe.identifierPrefix;if(Se){var a=Xi,r=Vi;a=(r&~(1<<32-Gn(r)-1)).toString(32)+a,n="_"+n+"R_"+a,a=fc++,0<a&&(n+="H"+a.toString(32)),n+="_"}else a=vS++,n="_"+n+"r_"+a.toString(32)+"_";return t.memoizedState=n},useHostTransitionStatus:$f,useFormState:Im,useActionState:Im,useOptimistic:function(t){var n=Xn();n.memoizedState=n.baseState=t;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=th.bind(null,pe,!0,a),a.dispatch=n,[t,n]},useMemoCache:kf,useCacheRefresh:function(){return Xn().memoizedState=TS.bind(null,pe)},useEffectEvent:function(t){var n=Xn(),a={impl:t};return n.memoizedState=a,function(){if((ze&2)!==0)throw Error(s(440));return a.impl.apply(void 0,arguments)}}},rx={readContext:Dn,use:dc,useCallback:Wm,useContext:Dn,useEffect:Zf,useImperativeHandle:jm,useInsertionEffect:km,useLayoutEffect:Ym,useMemo:Zm,useReducer:pc,useRef:Gm,useState:function(){return pc(xa)},useDebugValue:Kf,useDeferredValue:function(t,n){var a=cn();return Km(a,Ye.memoizedState,t,n)},useTransition:function(){var t=pc(xa)[0],n=cn().memoizedState;return[typeof t=="boolean"?t:Ho(t),n]},useSyncExternalStore:Tm,useId:tx,useHostTransitionStatus:$f,useFormState:Fm,useActionState:Fm,useOptimistic:function(t,n){var a=cn();return Um(a,Ye,t,n)},useMemoCache:kf,useCacheRefresh:ex,useEffectEvent:Xm},RS={readContext:Dn,use:dc,useCallback:Wm,useContext:Dn,useEffect:Zf,useImperativeHandle:jm,useInsertionEffect:km,useLayoutEffect:Ym,useMemo:Zm,useReducer:qf,useRef:Gm,useState:function(){return qf(xa)},useDebugValue:Kf,useDeferredValue:function(t,n){var a=cn();return Ye===null?Qf(a,t,n):Km(a,Ye.memoizedState,t,n)},useTransition:function(){var t=qf(xa)[0],n=cn().memoizedState;return[typeof t=="boolean"?t:Ho(t),n]},useSyncExternalStore:Tm,useId:tx,useHostTransitionStatus:$f,useFormState:Hm,useActionState:Hm,useOptimistic:function(t,n){var a=cn();return Ye!==null?Um(a,Ye,t,n):(a.baseState=t,[t,a.queue.dispatch])},useMemoCache:kf,useCacheRefresh:ex,useEffectEvent:Xm};function eh(t,n,a,r){n=t.memoizedState,a=a(r,n),a=a==null?n:O({},n,a),t.memoizedState=a,t.lanes===0&&(t.updateQueue.baseState=a)}var nh={enqueueSetState:function(t,n,a){t=t._reactInternals;var r=ci(),c=Xa(r);c.payload=n,a!=null&&(c.callback=a),n=ka(t,c,r),n!==null&&(ti(n,t,r),Po(n,t,r))},enqueueReplaceState:function(t,n,a){t=t._reactInternals;var r=ci(),c=Xa(r);c.tag=1,c.payload=n,a!=null&&(c.callback=a),n=ka(t,c,r),n!==null&&(ti(n,t,r),Po(n,t,r))},enqueueForceUpdate:function(t,n){t=t._reactInternals;var a=ci(),r=Xa(a);r.tag=2,n!=null&&(r.callback=n),n=ka(t,r,a),n!==null&&(ti(n,t,a),Po(n,t,a))}};function ox(t,n,a,r,c,u,g){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,u,g):n.prototype&&n.prototype.isPureReactComponent?!Ro(a,r)||!Ro(c,u):!0}function lx(t,n,a,r){t=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,r),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,r),n.state!==t&&nh.enqueueReplaceState(n,n.state,null)}function Is(t,n){var a=n;if("ref"in n){a={};for(var r in n)r!=="ref"&&(a[r]=n[r])}if(t=t.defaultProps){a===n&&(a=O({},a));for(var c in t)a[c]===void 0&&(a[c]=t[c])}return a}function cx(t){ql(t)}function ux(t){console.error(t)}function fx(t){ql(t)}function vc(t,n){try{var a=t.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(r){setTimeout(function(){throw r})}}function hx(t,n,a){try{var r=t.onCaughtError;r(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(c){setTimeout(function(){throw c})}}function ih(t,n,a){return a=Xa(a),a.tag=3,a.payload={element:null},a.callback=function(){vc(t,n)},a}function dx(t){return t=Xa(t),t.tag=3,t}function px(t,n,a,r){var c=a.type.getDerivedStateFromError;if(typeof c=="function"){var u=r.value;t.payload=function(){return c(u)},t.callback=function(){hx(n,a,r)}}var g=a.stateNode;g!==null&&typeof g.componentDidCatch=="function"&&(t.callback=function(){hx(n,a,r),typeof c!="function"&&(Ja===null?Ja=new Set([this]):Ja.add(this));var M=r.stack;this.componentDidCatch(r.value,{componentStack:M!==null?M:""})})}function CS(t,n,a,r,c){if(a.flags|=32768,r!==null&&typeof r=="object"&&typeof r.then=="function"){if(n=a.alternate,n!==null&&ws(n,a,c,!0),a=Un.current,a!==null){switch(a.tag){case 31:case 13:case 19:return Fn===null?Hc():a.alternate===null&&sn===0&&(sn=3),a.flags&=-257,a.flags|=65536,a.lanes=c,r===sc?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([r]):n.add(r),Gh(t,r,c)),!1;case 22:return a.flags|=65536,r===sc?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([r])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([r]):a.add(r)),Gh(t,r,c)),!1}throw Error(s(435,a.tag))}return Gh(t,r,c),Hc(),!1}if(Se)return n=Un.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=c,r!==Mf&&(t=Error(s(422),{cause:r}),Do(vi(t,a)))):(r!==Mf&&(n=Error(s(423),{cause:r}),Do(vi(n,a))),t=t.current.alternate,t.flags|=65536,c&=-c,t.lanes|=c,r=vi(r,a),c=ih(t.stateNode,r,c),Lf(t,c),sn!==4&&(sn=2)),!1;var u=Error(s(520),{cause:r});if(u=vi(u,a),Zo===null?Zo=[u]:Zo.push(u),sn!==4&&(sn=2),n===null)return!0;r=vi(r,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,t=c&-c,a.lanes|=t,t=ih(a.stateNode,r,t),Lf(a,t),!1;case 1:if(n=a.type,u=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||u!==null&&typeof u.componentDidCatch=="function"&&(Ja===null||!Ja.has(u))))return a.flags|=65536,c&=-c,a.lanes|=c,c=dx(c),px(c,t,a,r),Lf(a,c),!1;break;case 22:if(a.memoizedState!==null)return a.flags|=65536,!1}a=a.return}while(a!==null);return!1}var ah=Error(s(461)),pn=!1;function gn(t,n,a,r){n.child=t===null?_m(n,null,a,r):Ps(n,t.child,a,r)}function mx(t,n,a,r,c){a=a.render;var u=n.ref;if("ref"in r){var g={};for(var M in r)M!=="ref"&&(g[M]=r[M])}else g=r;return Ds(n),r=Hf(t,n,a,g,u,c),M=Gf(),t!==null&&!pn?(Vf(t,n,c),ga(t,n,c)):(Se&&M&&Jl(n),n.flags|=1,gn(t,n,r,c),n.child)}function xx(t,n,a,r,c){if(t===null){var u=a.type;return typeof u=="function"&&!vf(u)&&u.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=u,gx(t,n,u,r,c)):(t=Kl(a.type,null,r,n,n.mode,c),t.ref=n.ref,t.return=n,n.child=t)}if(u=t.child,!hh(t,c)){var g=u.memoizedProps;if(a=a.compare,a=a!==null?a:Ro,a(g,r)&&t.ref===n.ref)return ga(t,n,c)}return n.flags|=1,t=fa(u,r),t.ref=n.ref,t.return=n,n.child=t}function gx(t,n,a,r,c){if(t!==null){var u=t.memoizedProps;if(Ro(u,r)&&t.ref===n.ref)if(pn=!1,n.pendingProps=r=u,hh(t,c))(t.flags&131072)!==0&&(pn=!0);else return n.lanes=t.lanes,ga(t,n,c)}return sh(t,n,a,r,c)}function _x(t,n,a,r){var c=r.children,u=t!==null?t.memoizedState:null;if(t===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),r.mode==="hidden"){if((n.flags&128)!==0){if(u=u!==null?u.baseLanes|a:a,t!==null){for(r=n.child=t.child,c=0;r!==null;)c=c|r.lanes|r.childLanes,r=r.sibling;r=c&~u}else r=0,n.child=null;return vx(t,n,u,a,r)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},t!==null&&ic(n,u!==null?u.cachePool:null),u!==null?Sm(n,u):Pf(),bm(n);else return r=n.lanes=536870912,vx(t,n,u!==null?u.baseLanes|a:a,a,r)}else u!==null?(ic(n,u.cachePool),Sm(n,u),ja(),n.memoizedState=null):(t!==null&&ic(n,null),Pf(),ja());return gn(t,n,c,a),n.child}function Vo(t,n){return t!==null&&t.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function vx(t,n,a,r,c){var u=wf();return u=u===null?null:{parent:hn._currentValue,pool:u},n.memoizedState={baseLanes:a,cachePool:u},t!==null&&ic(n,null),Pf(),bm(n),t!==null&&ws(t,n,r,!0),n.childLanes=c,null}function yc(t,n){return n=Sc({mode:n.mode,children:n.children},t.mode),n.ref=t.ref,t.child=n,n.return=t,n}function yx(t,n,a){return Ps(n,t.child,null,a),t=yc(n,n.pendingProps),t.flags|=2,si(n),n.memoizedState=null,t}function wS(t,n,a){var r=n.pendingProps,c=(n.flags&128)!==0;if(n.flags&=-129,t===null){if(Se){if(r.mode==="hidden")return t=yc(n,r),n.lanes=536870912,t.memoizedState={baseLanes:0,cachePool:null},Vo(null,t);if(If(n),(t=Je)?(t=qg(t,bi),t=t!==null&&t.data==="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:Ia!==null?{id:Vi,overflow:Xi}:null,retryLane:536870912,hydrationErrors:null},a=im(t),a.return=n,n.child=a,En=n,Je=null)):t=null,t===null)throw Ba(n);return n.lanes=536870912,null}return yc(n,r)}var u=t.memoizedState;if(u!==null){var g=u.dehydrated;if(If(n),c)if(n.flags&256)n.flags&=-257,n=yx(t,n,a);else if(n.memoizedState!==null)n.child=t.child,n.flags|=128,n=null;else throw Error(s(558));else if(pn||ws(t,n,a,!1),c=(a&t.childLanes)!==0,pn||c){if(Ya.current===null){if(r=Qe,r!==null&&(g=R(r,a),g!==0&&g!==u.retryLane))throw u.retryLane=g,Ts(t,g),ti(r,t,g),ah;Hc()}n=yx(t,n,a)}else t=u.treeContext,Je=Ei(g.nextSibling),En=n,Se=!0,Fa=null,bi=!1,t!==null&&rm(n,t),n=yc(n,r),n.flags|=134221824;return n}return t=fa(t.child,{mode:r.mode,children:r.children}),t.ref=n.ref,n.child=t,t.return=n,t}function Sr(t,n){var a=n.ref;if(a===null)t!==null&&t.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(s(284));(t===null||t.ref!==a)&&(n.flags|=4194816)}}function sh(t,n,a,r,c){return Ds(n),a=Hf(t,n,a,r,void 0,c),r=Gf(),t!==null&&!pn?(Vf(t,n,c),ga(t,n,c)):(Se&&r&&Jl(n),n.flags|=1,gn(t,n,a,c),n.child)}function Sx(t,n,a,r,c,u){return Ds(n),n.updateQueue=null,a=Em(n,r,a,c),Mm(t),r=Gf(),t!==null&&!pn?(Vf(t,n,u),ga(t,n,u)):(Se&&r&&Jl(n),n.flags|=1,gn(t,n,a,u),n.child)}function bx(t,n,a,r,c){if(Ds(n),n.stateNode===null){var u=fr,g=a.contextType;typeof g=="object"&&g!==null&&(u=Dn(g)),u=new a(r,u),n.memoizedState=u.state!==null&&u.state!==void 0?u.state:null,u.updater=nh,n.stateNode=u,u._reactInternals=n,u=n.stateNode,u.props=r,u.state=n.memoizedState,u.refs={},Uf(n),g=a.contextType,u.context=typeof g=="object"&&g!==null?Dn(g):fr,u.state=n.memoizedState,g=a.getDerivedStateFromProps,typeof g=="function"&&(eh(n,a,g,r),u.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof u.getSnapshotBeforeUpdate=="function"||typeof u.UNSAFE_componentWillMount!="function"&&typeof u.componentWillMount!="function"||(g=u.state,typeof u.componentWillMount=="function"&&u.componentWillMount(),typeof u.UNSAFE_componentWillMount=="function"&&u.UNSAFE_componentWillMount(),g!==u.state&&nh.enqueueReplaceState(u,u.state,null),Io(n,r,u,c),zo(),u.state=n.memoizedState),typeof u.componentDidMount=="function"&&(n.flags|=4194308),r=!0}else if(t===null){u=n.stateNode;var M=n.memoizedProps,P=Is(a,M);u.props=P;var j=u.context,rt=a.contextType;g=fr,typeof rt=="object"&&rt!==null&&(g=Dn(rt));var mt=a.getDerivedStateFromProps;rt=typeof mt=="function"||typeof u.getSnapshotBeforeUpdate=="function",M=n.pendingProps!==M,rt||typeof u.UNSAFE_componentWillReceiveProps!="function"&&typeof u.componentWillReceiveProps!="function"||(M||j!==g)&&lx(n,u,r,g),Va=!1;var Y=n.memoizedState;u.state=Y,Io(n,r,u,c),zo(),j=n.memoizedState,M||Y!==j||Va?(typeof mt=="function"&&(eh(n,a,mt,r),j=n.memoizedState),(P=Va||ox(n,a,P,r,Y,j,g))?(rt||typeof u.UNSAFE_componentWillMount!="function"&&typeof u.componentWillMount!="function"||(typeof u.componentWillMount=="function"&&u.componentWillMount(),typeof u.UNSAFE_componentWillMount=="function"&&u.UNSAFE_componentWillMount()),typeof u.componentDidMount=="function"&&(n.flags|=4194308)):(typeof u.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=r,n.memoizedState=j),u.props=r,u.state=j,u.context=g,r=P):(typeof u.componentDidMount=="function"&&(n.flags|=4194308),r=!1)}else{u=n.stateNode,Nf(t,n),g=n.memoizedProps,rt=Is(a,g),u.props=rt,mt=n.pendingProps,Y=u.context,j=a.contextType,P=fr,typeof j=="object"&&j!==null&&(P=Dn(j)),M=a.getDerivedStateFromProps,(j=typeof M=="function"||typeof u.getSnapshotBeforeUpdate=="function")||typeof u.UNSAFE_componentWillReceiveProps!="function"&&typeof u.componentWillReceiveProps!="function"||(g!==mt||Y!==P)&&lx(n,u,r,P),Va=!1,Y=n.memoizedState,u.state=Y,Io(n,r,u,c),zo();var it=n.memoizedState;g!==mt||Y!==it||Va||t!==null&&t.dependencies!==null&&ec(t.dependencies)?(typeof M=="function"&&(eh(n,a,M,r),it=n.memoizedState),(rt=Va||ox(n,a,rt,r,Y,it,P)||t!==null&&t.dependencies!==null&&ec(t.dependencies))?(j||typeof u.UNSAFE_componentWillUpdate!="function"&&typeof u.componentWillUpdate!="function"||(typeof u.componentWillUpdate=="function"&&u.componentWillUpdate(r,it,P),typeof u.UNSAFE_componentWillUpdate=="function"&&u.UNSAFE_componentWillUpdate(r,it,P)),typeof u.componentDidUpdate=="function"&&(n.flags|=4),typeof u.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof u.componentDidUpdate!="function"||g===t.memoizedProps&&Y===t.memoizedState||(n.flags|=4),typeof u.getSnapshotBeforeUpdate!="function"||g===t.memoizedProps&&Y===t.memoizedState||(n.flags|=1024),n.memoizedProps=r,n.memoizedState=it),u.props=r,u.state=it,u.context=P,r=rt):(typeof u.componentDidUpdate!="function"||g===t.memoizedProps&&Y===t.memoizedState||(n.flags|=4),typeof u.getSnapshotBeforeUpdate!="function"||g===t.memoizedProps&&Y===t.memoizedState||(n.flags|=1024),r=!1)}return u=r,Sr(t,n),r=(n.flags&128)!==0,u||r?(u=n.stateNode,a=r&&typeof a.getDerivedStateFromError!="function"?null:u.render(),n.flags|=1,t!==null&&r?(n.child=Ps(n,t.child,null,c),n.child=Ps(n,null,a,c)):gn(t,n,a,c),n.memoizedState=u.state,t=n.child):t=ga(t,n,c),t}function Mx(t,n,a,r){return Rs(),n.flags|=256,gn(t,n,a,r),n.child}var rh={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function oh(t){return{baseLanes:t,cachePool:hm()}}function lh(t,n,a){return t=t!==null?t.childLanes&~a:0,n&&(t|=li),t}function Ex(t,n,a){var r=n.pendingProps,c=!1,u=(n.flags&128)!==0,g;if((g=u)||(g=t!==null&&t.memoizedState===null?!1:(Nn.current&2)!==0),g&&(c=!0,n.flags&=-129),g=(n.flags&32)!==0,n.flags&=-33,t===null){if(Se){if(c?qa(n):ja(),(t=Je)?(t=qg(t,bi),t=t!==null&&t.data!=="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:Ia!==null?{id:Vi,overflow:Xi}:null,retryLane:536870912,hydrationErrors:null},a=im(t),a.return=n,n.child=a,En=n,Je=null)):t=null,t===null)throw Ba(n);return od(t)?n.lanes=32:n.lanes=536870912,null}return u=r.children,r=r.fallback,c?(ja(),c=n.mode,u=Sc({mode:"hidden",children:u},c),r=As(r,c,a,null),u.return=n,r.return=n,u.sibling=r,n.child=u,r=n.child,r.memoizedState=oh(a),r.childLanes=lh(t,g,a),n.memoizedState=rh,Vo(null,r)):(qa(n),ch(n,u))}var M=t.memoizedState;if(M!==null){var P=M.dehydrated;if(P!==null)return DS(t,n,u,g,r,P,M,a)}return c?(ja(),c=r.fallback,u=n.mode,M=t.child,P=M.sibling,r=fa(M,{mode:"hidden",children:r.children}),r.subtreeFlags=M.subtreeFlags&1206910976,P!==null?c=fa(P,c):(c=As(c,u,a,null),c.flags|=2),c.return=n,r.return=n,r.sibling=c,n.child=r,Vo(null,r),r=n.child,c=t.child.memoizedState,c===null?c=oh(a):(u=c.cachePool,u!==null?(M=hn._currentValue,u=u.parent!==M?{parent:M,pool:M}:u):u=hm(),c={baseLanes:c.baseLanes|a,cachePool:u}),r.memoizedState=c,r.childLanes=lh(t,g,a),n.memoizedState=rh,Vo(t.child,r)):(qa(n),a=t.child,t=a.sibling,a=fa(a,{mode:"visible",children:r.children}),a.return=n,a.sibling=null,t!==null&&(g=n.deletions,g===null?(n.deletions=[t],n.flags|=16):g.push(t)),n.child=a,n.memoizedState=null,a)}function ch(t,n){return n=Sc({mode:"visible",children:n},t.mode),n.return=t,t.child=n}function Sc(t,n){return t=Kn(22,t,null,n),t.lanes=0,t}function bc(t,n,a){return Ps(n,t.child,null,a),t=ch(n,n.pendingProps.children),t.flags|=2,n.memoizedState=null,t}function DS(t,n,a,r,c,u,g,M){if(a)return n.flags&256?(qa(n),n.flags&=-257,bc(t,n,M)):n.memoizedState!==null?(ja(),n.child=t.child,n.flags|=128,null):(ja(),u=c.fallback,g=n.mode,c=Sc({mode:"visible",children:c.children},g),u=As(u,g,M,null),u.flags|=2,c.return=n,u.return=n,c.sibling=u,n.child=c,Ps(n,t.child,null,M),c=n.child,c.memoizedState=oh(M),c.childLanes=lh(t,r,M),n.memoizedState=rh,Vo(null,c));if(qa(n),od(u)){if(r=u.nextSibling&&u.nextSibling.dataset,r)var P=r.dgst;return r=P,r!==""&&(c=Error(s(419)),c.stack="",c.digest=r,Do({value:c,source:null,stack:null})),bc(t,n,M)}if(pn||ws(t,n,M,!1),r=(M&t.childLanes)!==0,pn||r){if(Ya.current!==null)return bc(t,n,M);if(r=Qe,r!==null&&(c=R(r,M),c!==0&&c!==g.retryLane))throw g.retryLane=c,Ts(t,c),ti(r,t,c),ah;return rd(u)||Hc(),bc(t,n,M)}return rd(u)?(n.flags|=192,n.child=t.child,null):(t=g.treeContext,Je=Ei(u.nextSibling),En=n,Se=!0,Fa=null,bi=!1,t!==null&&rm(n,t),n=ch(n,c.children),n.flags|=134221824,n)}function Tx(t,n,a){t.lanes|=n;var r=t.alternate;r!==null&&(r.lanes|=n),tc(t.return,n,a)}function Ax(t){for(var n=null;t!==null;){var a=t.alternate;a!==null&&cc(a)===null&&(n=t),t=t.sibling}return n}function Mc(t,n,a,r,c,u){var g=t.memoizedState;g===null?t.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:r,tail:a,tailMode:c,treeForkCount:u}:(g.isBackwards=n,g.rendering=null,g.renderingStartTime=0,g.last=r,g.tail=a,g.tailMode=c,g.treeForkCount=u)}function uh(t){var n=t.child;for(t.child=null;n!==null;){var a=n.sibling;n.sibling=t.child,t.child=n,n=a}}function fh(t,n,a){var r=n.pendingProps,c=r.revealOrder,u=r.tail;r=r.children;var g=Nn.current;if(n.flags&128)return Fo(n,g),null;var M=(g&2)!==0;if(M?(g=g&1|2,n.flags|=128):g&=1,Fo(n,g),c==="backwards"&&t!==null?(uh(t),gn(t,n,r,a),uh(t)):gn(t,n,r,a),r=Se?wo:0,!M&&t!==null&&(t.flags&128)!==0)t:for(t=n.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Tx(t,a,n);else if(t.tag===19)Tx(t,a,n);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break t;for(;t.sibling===null;){if(t.return===null||t.return===n)break t;t=t.return}t.sibling.return=t.return,t=t.sibling}switch(c){case"backwards":a=Ax(n.child),a===null?(c=n.child,n.child=null):(c=a.sibling,a.sibling=null,uh(n)),Mc(n,!0,c,null,u,r);break;case"unstable_legacy-backwards":for(a=null,c=n.child,n.child=null;c!==null;){if(t=c.alternate,t!==null&&cc(t)===null){n.child=c;break}t=c.sibling,c.sibling=a,a=c,c=t}Mc(n,!0,a,null,u,r);break;case"together":Mc(n,!1,null,null,void 0,r);break;case"independent":n.memoizedState=null;break;default:a=Ax(n.child),a===null?(c=n.child,n.child=null):(c=a.sibling,a.sibling=null),Mc(n,!1,c,a,u,r)}return n.child}function Rx(t,n,a){var r=n.pendingProps;return Ha(n,n.type,r.value),gn(t,n,r.children,a),n.child}function ga(t,n,a){if(t!==null&&(n.dependencies=t.dependencies),Qa|=n.lanes,(a&n.childLanes)===0)if(t!==null){if(ws(t,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(t!==null&&n.child!==t.child)throw Error(s(153));if(n.child!==null){for(t=n.child,a=fa(t,t.pendingProps),n.child=a,a.return=n;t.sibling!==null;)t=t.sibling,a=a.sibling=fa(t,t.pendingProps),a.return=n;a.sibling=null}return n.child}function hh(t,n){return(t.lanes&n)!==0?!0:(t=t.dependencies,!!(t!==null&&ec(t)))}function US(t,n,a){switch(n.tag){case 3:U(n,n.stateNode.containerInfo),Ha(n,hn,t.memoizedState.cache),Rs();break;case 27:case 5:at(n);break;case 4:U(n,n.stateNode.containerInfo);break;case 10:Ha(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,If(n),null;break;case 13:var r=n.memoizedState;if(r!==null){if(r.dehydrated!==null)return qa(n),n.flags|=128,null;r=ws(t,n,a,!1);var c=n.child.childLanes;return r||(a&c)!==0?Ex(t,n,a):(qa(n),t=ga(t,n,a),t!==null?t.sibling:null)}qa(n);break;case 19:if(n.flags&128)return fh(t,n,a);if(c=(t.flags&128)!==0,r=(a&n.childLanes)!==0,r||(ws(t,n,a,!1),r=(a&n.childLanes)!==0),c){if(r)return fh(t,n,a);n.flags|=128}if(c=n.memoizedState,c!==null&&(c.rendering=null,c.tail=null,c.lastEffect=null),Fo(n,Nn.current),r)break;return null;case 22:return n.lanes=0,_x(t,n,a,n.pendingProps);case 24:Ha(n,hn,t.memoizedState.cache)}return ga(t,n,a)}function Cx(t,n,a){if(t!==null)if(t.memoizedProps!==n.pendingProps)pn=!0;else{if(!hh(t,a)&&(n.flags&128)===0)return pn=!1,US(t,n,a);pn=(t.flags&131072)!==0}else pn=!1,Se&&(n.flags&1048576)!==0&&sm(n,wo,n.index);switch(n.lanes=0,n.tag){case 16:t:{var r=n.pendingProps;if(t=Ls(n.elementType),n.type=t,typeof t=="function")vf(t)?(r=Is(t,r),n.tag=1,n=bx(null,n,t,r,a)):(n.tag=0,n=sh(null,n,t,r,a));else{if(t!=null){var c=t.$$typeof;if(c===k){n.tag=11,n=mx(null,n,t,r,a);break t}else if(c===_t){n.tag=14,n=xx(null,n,t,r,a);break t}else if(c===ot){n.tag=10,n.type=t,n=Rx(null,n,a);break t}}throw n=Pt(t)||t,Error(s(306,n,""))}}return n;case 0:return sh(t,n,n.type,n.pendingProps,a);case 1:return r=n.type,c=Is(r,n.pendingProps),bx(t,n,r,c,a);case 3:t:{if(U(n,n.stateNode.containerInfo),t===null)throw Error(s(387));r=n.pendingProps;var u=n.memoizedState;c=u.element,Nf(t,n),Io(n,r,null,a);var g=n.memoizedState;if(r=g.cache,Ha(n,hn,r),r!==u.cache&&Af(n,[hn],a,!0),zo(),r=g.element,u.isDehydrated)if(u={element:r,isDehydrated:!1,cache:g.cache},n.updateQueue.baseState=u,n.memoizedState=u,n.flags&256){n=Mx(t,n,r,a);break t}else if(r!==c){c=vi(Error(s(424)),n),Do(c),n=Mx(t,n,r,a);break t}else{switch(t=n.stateNode.containerInfo,t.nodeType){case 9:t=t.body;break;default:t=t.nodeName==="HTML"?t.ownerDocument.body:t}for(Je=Ei(t.firstChild),En=n,Se=!0,Fa=null,bi=!0,a=_m(n,null,r,a),n.child=a;a;)a.flags=a.flags&-3|134221824,a=a.sibling}else{if(Rs(),r===c){n=ga(t,n,a);break t}gn(t,n,r,a)}n=n.child}return n;case 26:return Sr(t,n),t===null?(a=$g(n.type,null,n.pendingProps,null))?n.memoizedState=a:Se||(n.stateNode=Ng(n.type,n.pendingProps,qt.current,n)):n.memoizedState=$g(n.type,t.memoizedProps,n.pendingProps,t.memoizedState),null;case 27:return at(n),t===null&&Se&&(r=n.stateNode=Zg(n.type,n.pendingProps,qt.current),En=n,bi=!0,c=Je,es(n.type)?(ld=c,Je=Ei(r.firstChild)):Je=c),gn(t,n,n.pendingProps.children,a),Sr(t,n),t===null&&(n.flags|=4194304),n.child;case 5:return t===null&&Se&&((c=r=Je)&&(r=Tb(r,n.type,n.pendingProps,bi),r!==null?(n.stateNode=r,En=n,Je=Ei(r.firstChild),bi=!1,c=!0):c=!1),c||Ba(n)),at(n),c=n.type,u=n.pendingProps,g=t!==null?t.memoizedProps:null,r=u.children,$h(c,u)?r=null:g!==null&&$h(c,g)&&(n.flags|=32),n.memoizedState!==null&&(c=Hf(t,n,yS,null,null,a),Br._currentValue=c),Sr(t,n),gn(t,n,r,a),n.child;case 6:return t===null&&Se&&((t=a=Je)&&(a=Ab(a,n.pendingProps,bi),a!==null?(n.stateNode=a,En=n,Je=null,t=!0):t=!1),t||Ba(n)),null;case 13:return Ex(t,n,a);case 4:return U(n,n.stateNode.containerInfo),r=n.pendingProps,t===null?n.child=Ps(n,null,r,a):gn(t,n,r,a),n.child;case 11:return mx(t,n,n.type,n.pendingProps,a);case 7:return r=n.pendingProps,Sr(t,n),gn(t,n,r,a),n.child;case 8:return gn(t,n,n.pendingProps.children,a),n.child;case 12:return gn(t,n,n.pendingProps.children,a),n.child;case 10:return Rx(t,n,a);case 9:return c=n.type._context,r=n.pendingProps.children,Ds(n),c=Dn(c),r=r(c),n.flags|=1,gn(t,n,r,a),n.child;case 14:return xx(t,n,n.type,n.pendingProps,a);case 15:return gx(t,n,n.type,n.pendingProps,a);case 19:return fh(t,n,a);case 31:return wS(t,n,a);case 22:return _x(t,n,a,n.pendingProps);case 24:return Ds(n),r=Dn(hn),t===null?(c=wf(),c===null&&(c=Qe,u=Rf(),c.pooledCache=u,u.refCount++,u!==null&&(c.pooledCacheLanes|=a),c=u),n.memoizedState={parent:r,cache:c},Uf(n),Ha(n,hn,c)):((t.lanes&a)!==0&&(Nf(t,n),Io(n,null,null,a),zo()),c=t.memoizedState,u=n.memoizedState,c.parent!==r?(c={parent:r,cache:r},n.memoizedState=c,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=c),Ha(n,hn,r)):(r=u.cache,Ha(n,hn,r),r!==c.cache&&Af(n,[hn],a,!0))),gn(t,n,n.pendingProps.children,a),n.child;case 30:return n.stateNode===null&&(n.stateNode={autoName:null,paired:null,clones:null,ref:null}),r=n.pendingProps,r.name!=null&&r.name!=="auto"?n.flags|=t===null?18882560:18874368:Se&&Jl(n),t!==null&&t.memoizedProps.name!==r.name?n.flags|=4194816:Sr(t,n),gn(t,n,r.children,a),n.child;case 29:throw n.pendingProps}throw Error(s(156,n.tag))}function _a(t){t.flags|=4}function dh(t,n,a,r,c){var u;if((u=(t.mode&32)!==0)&&(u=a===null?i_(n,r):i_(n,r)&&(r.src!==a.src||r.srcSet!==a.srcSet)),u){if(t.flags|=16777216,(c&335544128)===c)if(t.stateNode.complete)t.flags|=8192;else if(cg())t.flags|=8192;else throw Os=sc,Df}else t.flags&=-16777217}function wx(t,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!a_(n))if(cg())t.flags|=8192;else throw Os=sc,Df}function Ec(t,n){n!==null&&(t.flags|=4),t.flags&16384&&(n=t.tag!==22?Ol():536870912,t.lanes|=n,Ar|=n)}function Xo(t,n){if(!Se)switch(t.tailMode){case"visible":break;case"collapsed":for(var a=t.tail,r=null;a!==null;)a.alternate!==null&&(r=a),a=a.sibling;r===null?n||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null;break;default:for(n=t.tail,a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?t.tail=null:a.sibling=null}}function $e(t){var n=t.alternate!==null&&t.alternate.child===t.child,a=0,r=0;if(n)for(var c=t.child;c!==null;)a|=c.lanes|c.childLanes,r|=c.subtreeFlags&1206910976,r|=c.flags&1206910976,c.return=t,c=c.sibling;else for(c=t.child;c!==null;)a|=c.lanes|c.childLanes,r|=c.subtreeFlags,r|=c.flags,c.return=t,c=c.sibling;return t.subtreeFlags|=r,t.childLanes=a,n}function NS(t,n,a){var r=n.pendingProps;switch(bf(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return $e(n),null;case 1:return $e(n),null;case 3:return a=n.stateNode,r=null,t!==null&&(r=t.memoizedState.cache),n.memoizedState.cache!==r&&(n.flags|=2048),pa(hn),T(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(t===null||t.child===null)&&(pr(n)?_a(n):t===null||t.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,Ef())),$e(n),null;case 26:var c=n.type,u=n.memoizedState;return t===null?(_a(n),u!==null?($e(n),wx(n,u)):($e(n),dh(n,c,null,r,a))):u?u!==t.memoizedState?(_a(n),$e(n),wx(n,u)):($e(n),n.flags&=-16777217):(t=t.memoizedProps,t!==r&&_a(n),$e(n),dh(n,c,t,r,a)),null;case 27:if(xt(n),a=qt.current,c=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==r&&_a(n);else{if(!r){if(n.stateNode===null)throw Error(s(166));return $e(n),n.subtreeFlags&=-33554433,null}t=Ft.current,pr(n)?om(n):(t=Zg(c,r,a),n.stateNode=t,_a(n))}return $e(n),n.subtreeFlags&=-33554433,null;case 5:if(xt(n),c=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==r&&_a(n);else{if(!r){if(n.stateNode===null)throw Error(s(166));return $e(n),n.subtreeFlags&=-33554433,null}if(u=Ft.current,pr(n))om(n);else{var g=tl(qt.current);switch(u){case 1:u=g.createElementNS("http://www.w3.org/2000/svg",c);break;case 2:u=g.createElementNS("http://www.w3.org/1998/Math/MathML",c);break;default:switch(c){case"svg":u=g.createElementNS("http://www.w3.org/2000/svg",c);break;case"math":u=g.createElementNS("http://www.w3.org/1998/Math/MathML",c);break;case"script":u=g.createElement("div"),u.innerHTML="<script><\/script>",u=u.removeChild(u.firstChild);break;case"select":u=typeof r.is=="string"?g.createElement("select",{is:r.is}):g.createElement("select"),r.multiple?u.multiple=!0:r.size&&(u.size=r.size);break;default:u=typeof r.is=="string"?g.createElement(c,{is:r.is}):g.createElement(c)}}u[At]=n,u[Ot]=r;t:for(g=n.child;g!==null;){if(g.tag===5||g.tag===6)u.appendChild(g.stateNode);else if(g.tag!==4&&g.tag!==27&&g.child!==null){g.child.return=g,g=g.child;continue}if(g===n)break t;for(;g.sibling===null;){if(g.return===null||g.return===n)break t;g=g.return}g.sibling.return=g.return,g=g.sibling}n.stateNode=u;t:switch(On(u,c,r),c){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break t;case"img":r=!0;break t;default:r=!1}r&&_a(n)}}return $e(n),n.subtreeFlags&=-33554433,dh(n,n.type,t===null?null:t.memoizedProps,n.pendingProps,a),null;case 6:if(t&&n.stateNode!=null)t.memoizedProps!==r&&_a(n);else{if(typeof r!="string"&&n.stateNode===null)throw Error(s(166));if(t=qt.current,pr(n)){if(t=n.stateNode,a=n.memoizedProps,r=null,c=En,c!==null)switch(c.tag){case 27:case 5:r=c.memoizedProps}t[At]=n,t=!!(t.nodeValue===a||r!==null&&r.suppressHydrationWarning===!0||Cg(t.nodeValue,a)),t||Ba(n,!0)}else t=tl(t).createTextNode(r),t[At]=n,n.stateNode=t}return $e(n),null;case 31:if(a=n.memoizedState,t===null||t.memoizedState!==null){if(r=pr(n),a!==null){if(t===null){if(!r)throw Error(s(318));if(t=n.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(557));t[At]=n}else Rs(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;$e(n),t=!1}else a=Ef(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=a),t=!0;if(!t)return n.flags&256?(si(n),n):(si(n),null);if((n.flags&128)!==0)throw Error(s(558))}return $e(n),null;case 13:if(r=n.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(c=pr(n),r!==null&&r.dehydrated!==null){if(t===null){if(!c)throw Error(s(318));if(c=n.memoizedState,c=c!==null?c.dehydrated:null,!c)throw Error(s(317));c[At]=n}else Rs(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;$e(n),c=!1}else c=Ef(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=c),c=!0;if(!c)return n.flags&256?(si(n),n):(si(n),null)}return si(n),(n.flags&128)!==0?(n.lanes=a,n):(a=r!==null,t=t!==null&&t.memoizedState!==null,a&&(r=n.child,c=null,r.alternate!==null&&r.alternate.memoizedState!==null&&r.alternate.memoizedState.cachePool!==null&&(c=r.alternate.memoizedState.cachePool.pool),u=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(u=r.memoizedState.cachePool.pool),u!==c&&(r.flags|=2048)),a!==t&&a&&(n.child.flags|=8192),Ec(n,n.updateQueue),$e(n),null);case 4:return T(),t===null&&Wh(n.stateNode.containerInfo),n.flags|=67108864,$e(n),null;case 10:return pa(n.type),$e(n),null;case 19:if(Ff(n),r=n.memoizedState,r===null)return $e(n),null;if(c=(n.flags&128)!==0,u=r.rendering,u===null)if(c)Xo(r,!1);else{if(sn!==0||t!==null&&(t.flags&128)!==0)for(t=n.child;t!==null;){if(u=cc(t),u!==null){for(n.flags|=128,Xo(r,!1),t=u.updateQueue,n.updateQueue=t,Ec(n,t),n.subtreeFlags=0,t=a,a=n.child;a!==null;)nm(a,t),a=a.sibling;return Fo(n,Nn.current&1|2),Se&&ha(n,r.treeForkCount),n.child}t=t.sibling}r.tail!==null&&F()>zc&&(n.flags|=128,c=!0,Xo(r,!1),n.lanes=4194304)}else{if(!c)if(t=cc(u),t!==null){if(n.flags|=128,c=!0,t=t.updateQueue,n.updateQueue=t,Ec(n,t),Xo(r,!0),r.tail===null&&r.tailMode!=="collapsed"&&r.tailMode!=="visible"&&!u.alternate&&!Se)return $e(n),null}else 2*F()-r.renderingStartTime>zc&&a!==536870912&&(n.flags|=128,c=!0,Xo(r,!1),n.lanes=4194304);r.isBackwards?(u.sibling=n.child,n.child=u):(t=r.last,t!==null?t.sibling=u:n.child=u,r.last=u)}if(r.tail!==null){t=r.tail;t:{for(a=t;a!==null;){if(a.alternate!==null){a=!1;break t}a=a.sibling}a=!0}return r.rendering=t,r.tail=t.sibling,r.renderingStartTime=F(),t.sibling=null,u=Nn.current,u=c?u&1|2:u&1,r.tailMode==="visible"||r.tailMode==="collapsed"||!a||Se?Fo(n,u):(a=u,te(Un,n),te(Nn,a),Fn===null&&(Fn=n)),Se&&ha(n,r.treeForkCount),t}return $e(n),null;case 22:case 23:return si(n),zf(),r=n.memoizedState!==null,t!==null?t.memoizedState!==null!==r&&(n.flags|=8192):r&&(n.flags|=8192),r?(a&536870912)!==0&&(n.flags&128)===0&&($e(n),n.subtreeFlags&6&&(n.flags|=8192)):$e(n),a=n.updateQueue,a!==null&&Ec(n,a.retryQueue),a=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),r=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(r=n.memoizedState.cachePool.pool),r!==a&&(n.flags|=2048),t!==null&&Jt(Ns),null;case 24:return a=null,t!==null&&(a=t.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),pa(hn),$e(n),null;case 25:return null;case 30:return n.flags|=33554432,$e(n),null}throw Error(s(156,n.tag))}function LS(t,n){switch(bf(n),n.tag){case 1:return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 3:return pa(hn),T(),t=n.flags,(t&65536)!==0&&(t&128)===0?(n.flags=t&-65537|128,n):null;case 26:case 27:case 5:return xt(n),null;case 31:if(n.memoizedState!==null){if(si(n),n.alternate===null)throw Error(s(340));Rs()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 13:if(si(n),t=n.memoizedState,t!==null&&t.dehydrated!==null){if(n.alternate===null)throw Error(s(340));Rs()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 19:return Ff(n),t=n.flags,t&65536?(n.flags=t&-65537|128,t=n.memoizedState,t!==null&&(t.rendering=null,t.tail=null),n.flags|=4,n):null;case 4:return T(),null;case 10:return pa(n.type),null;case 22:case 23:return si(n),zf(),t!==null&&Jt(Ns),t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 24:return pa(hn),null;case 25:return null;default:return null}}function Dx(t,n){switch(bf(n),n.tag){case 3:pa(hn),T();break;case 26:case 27:case 5:xt(n);break;case 4:T();break;case 31:n.memoizedState!==null&&si(n);break;case 13:si(n);break;case 19:Ff(n);break;case 10:pa(n.type);break;case 22:case 23:si(n),zf(),t!==null&&Jt(Ns);break;case 24:pa(hn)}}function ko(t,n){try{var a=n.updateQueue,r=a!==null?a.lastEffect:null;if(r!==null){var c=r.next;a=c;do{if((a.tag&t)===t){r=void 0;var u=a.create,g=a.inst;r=u(),g.destroy=r}a=a.next}while(a!==c)}}catch(M){Ge(n,n.return,M)}}function Wa(t,n,a){try{var r=n.updateQueue,c=r!==null?r.lastEffect:null;if(c!==null){var u=c.next;r=u;do{if((r.tag&t)===t){var g=r.inst,M=g.destroy;if(M!==void 0){g.destroy=void 0,c=n;var P=a,j=M;try{j()}catch(rt){Ge(c,P,rt)}}}r=r.next}while(r!==u)}}catch(rt){Ge(n,n.return,rt)}}function Ux(t){var n=t.updateQueue;if(n!==null){var a=t.stateNode;try{ym(n,a)}catch(r){Ge(t,t.return,r)}}}function Nx(t,n,a){a.props=Is(t.type,t.memoizedProps),a.state=t.memoizedState;try{a.componentWillUnmount()}catch(r){Ge(t,n,r)}}function ki(t,n){try{var a=t.ref;if(a!==null){switch(t.tag){case 26:case 27:case 5:var r=t.stateNode;break;case 30:var c=t.stateNode,u=ca(t.memoizedProps,c);(c.ref===null||c.ref.name!==u)&&(c.ref=Bg(u)),r=c.ref;break;case 7:if(t.stateNode===null){var g=new ui(t);p(t.child,!1,Mb,g,void 0,void 0),t.stateNode=g}r=t.stateNode;break;default:r=t.stateNode}typeof a=="function"?t.refCleanup=a(r):a.current=r}}catch(M){Ge(t,n,M)}}function Ln(t,n){var a=t.ref,r=t.refCleanup;if(a!==null)if(typeof r=="function")try{r()}catch(c){Ge(t,n,c)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(c){Ge(t,n,c)}else a.current=null}function Tc(t,n){if((t.tag===5||t.tag===27||t.tag===6)&&t.alternate===null&&n!==null)for(var a=0;a<n.length;a++)Yg(t.stateNode,n[a])}function Lx(t){for(var n=t.return;n!==null&&(mh(n)&&Yg(t.stateNode,n.stateNode),!ph(n));)n=n.return}function Yo(t){for(var n=t.return;n!==null&&(mh(n)&&Eb(t.stateNode,n.stateNode),!ph(n));)n=n.return}function ph(t){return t.tag===5||t.tag===3||t.tag===27}function mh(t){return t&&t.tag===7&&t.stateNode!==null}function xh(t){var n=t.type,a=t.memoizedProps,r=t.stateNode;try{t:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&r.focus();break t;case"img":a.src?r.src=a.src:a.srcSet&&(r.srcset=a.srcSet)}}catch(c){Ge(t,t.return,c)}}function gh(t,n,a){try{var r=t.stateNode;sb(r,t.type,a,n),r[Ot]=n}catch(c){Ge(t,t.return,c)}}function Ox(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&es(t.type)||t.tag===4}function _h(t){t:for(;;){for(;t.sibling===null;){if(t.return===null||Ox(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&es(t.type)||t.flags&2||t.child===null||t.tag===4)continue t;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function vh(t,n,a,r){var c=t.tag;if(c===5||c===6)c=t.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(c,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(c),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=Gi)),Tc(t,r),ge=!0;else if(c!==4&&(c===27&&(Tc(t,r),r=null,es(t.type)&&(a=t.stateNode,n=null)),t=t.child,t!==null))for(vh(t,n,a,r),t=t.sibling;t!==null;)vh(t,n,a,r),t=t.sibling}function Ac(t,n,a,r){var c=t.tag;if(c===5||c===6)c=t.stateNode,n?a.insertBefore(c,n):a.appendChild(c),Tc(t,r),ge=!0;else if(c!==4&&(c===27&&(Tc(t,r),r=null,es(t.type)&&(a=t.stateNode)),t=t.child,t!==null))for(Ac(t,n,a,r),t=t.sibling;t!==null;)Ac(t,n,a,r),t=t.sibling}function Px(t){var n=t.stateNode,a=t.memoizedProps;try{for(var r=t.type,c=n.attributes;c.length;)n.removeAttributeNode(c[0]);On(n,r,a),n[At]=t,n[Ot]=a}catch(u){Ge(t,t.return,u)}}var Rc=!1,ri=null;function zx(t){(t.tag===30||(t.subtreeFlags&33554432)!==0)&&(Rc=!0)}var Yi=null;function Ix(){var t=Yi;return Yi=null,t}var Qn=0;function br(t,n,a,r,c){return Qn=0,Fx(t.child,n,a,r,c)}function Fx(t,n,a,r,c){for(var u=!1;t!==null;){if(t.tag===5){var g=t.stateNode;if(r!==null){var M=nd(g);r.push(M),M.view&&(u=!0)}else u||nd(g).view&&(u=!0);Rc=!0,Ig(g,Qn===0?n:n+"_"+Qn,a),Qn++}else(t.tag!==22||t.memoizedState===null)&&(t.tag===30&&c||Fx(t.child,n,a,r,c)&&(u=!0));t=t.sibling}return u}function qi(t,n){for(;t!==null;)t.tag===5?Fg(t.stateNode,t.memoizedProps):(t.tag!==22||t.memoizedState===null)&&(t.tag===30&&n||qi(t.child,n)),t=t.sibling}function Cc(t){if((t.subtreeFlags&18874368)!==0)for(t=t.child;t!==null;){if((t.tag!==22||t.memoizedState===null)&&(Cc(t),t.tag===30&&(t.flags&18874368)!==0&&t.stateNode.paired)){var n=t.memoizedProps;if(n.name==null||n.name==="auto")throw Error(s(544));var a=n.name;n=ua(n.default,n.share),n!=="none"&&(br(t,a,n,null,!1)||qi(t.child,!1))}t=t.sibling}}function yh(t,n){if(t.tag===30){var a=t.stateNode,r=t.memoizedProps,c=ca(r,a),u=ua(r.default,a.paired?r.share:r.enter);u!=="none"?br(t,c,u,null,!1)?(Cc(t),a.paired||n||Dr(t,r.onEnter)):qi(t.child,!1):Cc(t)}else if((t.subtreeFlags&33554432)!==0)for(t=t.child;t!==null;)yh(t,n),t=t.sibling;else Cc(t)}function Sh(t){if(ri!==null&&ri.size!==0){var n=ri;if((t.subtreeFlags&18874368)!==0)for(t=t.child;t!==null;){if(t.tag!==22||t.memoizedState===null){if(t.tag===30&&(t.flags&18874368)!==0){var a=t.memoizedProps,r=a.name;if(r!=null&&r!=="auto"){var c=n.get(r);if(c!==void 0){var u=ua(a.default,a.share);if(u!=="none"&&(br(t,r,u,null,!1)?(u=t.stateNode,c.paired=u,u.paired=c,Dr(t,a.onShare)):qi(t.child,!1)),n.delete(r),n.size===0)break}}}Sh(t)}t=t.sibling}}}function bh(t){if(t.tag===30){var n=t.memoizedProps,a=ca(n,t.stateNode),r=ri!==null?ri.get(a):void 0,c=ua(n.default,r!==void 0?n.share:n.exit);c!=="none"&&(br(t,a,c,null,!1)?r!==void 0?(c=t.stateNode,r.paired=c,c.paired=r,ri.delete(a),Dr(t,n.onShare)):Dr(t,n.onExit):qi(t.child,!1)),ri!==null&&Sh(t)}else if((t.subtreeFlags&33554432)!==0)for(t=t.child;t!==null;)bh(t),t=t.sibling;else ri!==null&&Sh(t)}function Bx(t){for(t=t.child;t!==null;){if(t.tag===30){var n=t.memoizedProps,a=ca(n,t.stateNode);n=ua(n.default,n.update),t.flags&=-5,n!=="none"&&br(t,a,n,t.memoizedState=[],!1)}else(t.subtreeFlags&33554432)!==0&&Bx(t);t=t.sibling}}function Mh(t){if((t.subtreeFlags&18874368)!==0)for(t=t.child;t!==null;){if(t.tag!==22||t.memoizedState===null){if(t.tag===30&&(t.flags&18874368)!==0){var n=t.stateNode;n.paired!==null&&(n.paired=null,qi(t.child,!1))}Mh(t)}t=t.sibling}}function wc(t){if(t.tag===30)t.stateNode.paired=null,qi(t.child,!1),Mh(t);else if((t.subtreeFlags&33554432)!==0)for(t=t.child;t!==null;)wc(t),t=t.sibling;else Mh(t)}function Hx(t){for(t=t.child;t!==null;)t.tag===30?qi(t.child,!1):(t.subtreeFlags&33554432)!==0&&Hx(t),t=t.sibling}function Eh(t,n,a,r,c,u,g){for(var M=!1;n!==null;){if(n.tag===5){var P=n.stateNode;if(u!==null&&Qn<u.length){var j=u[Qn],rt=nd(P);(j.view||rt.view)&&(M=!0);var mt;if(mt=(t.flags&4)===0)if(rt.clip)mt=!0;else{mt=j.rect;var Y=rt.rect;mt=mt.y!==Y.y||mt.x!==Y.x||mt.height!==Y.height||mt.width!==Y.width}mt&&(t.flags|=4),rt.abs?rt=!j.abs:(j=j.rect,rt=rt.rect,rt=j.height!==rt.height||j.width!==rt.width),rt&&(t.flags|=32)}else t.flags|=32;(t.flags&4)!==0&&Ig(P,Qn===0?a:a+"_"+Qn,c),M&&(t.flags&4)!==0||(Yi===null&&(Yi=[]),Yi.push(P,Qn===0?r:r+"_"+Qn,n.memoizedProps)),Qn++}else(n.tag!==22||n.memoizedState===null)&&(n.tag===30&&g?t.flags|=n.flags&32:Eh(t,n.child,a,r,c,u,g)&&(M=!0));n=n.sibling}return M}function Gx(t,n){for(t=t.child;t!==null;){if(t.tag===30){var a=t.memoizedProps,r=t.stateNode,c=ca(a,r),u=ua(a.default,a.update),g;g=t.memoizedState,t.memoizedState=null,r=t;var M=t.child;Qn=0,c=Eh(r,M,c,c,u,g,!1),(t.flags&4)!==0&&c&&Dr(t,a.onUpdate)}else(t.subtreeFlags&33554432)!==0&&Gx(t);t=t.sibling}}var Tn=!1,Ie=!1,ji=!1,Th=!1,Vx=typeof WeakSet=="function"?WeakSet:Set,An=null,Wi=!1,qo=!1,Dc=!1,Ah=!1;function OS(t,n,a){if(t=t.containerInfo,Qh=Hr,t=q0(t),hf(t)){if("selectionStart"in t)var r={start:t.selectionStart,end:t.selectionEnd};else t:{r=(r=t.ownerDocument)&&r.defaultView||window;var c=r.getSelection&&r.getSelection();if(c&&c.rangeCount!==0){r=c.anchorNode;var u=c.anchorOffset,g=c.focusNode;c=c.focusOffset;try{r.nodeType,g.nodeType}catch{r=null;break t}var M=0,P=-1,j=-1,rt=0,mt=0,Y=t,it=null;e:for(;;){for(var Ut;Y!==r||u!==0&&Y.nodeType!==3||(P=M+u),Y!==g||c!==0&&Y.nodeType!==3||(j=M+c),Y.nodeType===3&&(M+=Y.nodeValue.length),(Ut=Y.firstChild)!==null;)it=Y,Y=Ut;for(;;){if(Y===t)break e;if(it===r&&++rt===u&&(P=M),it===g&&++mt===c&&(j=M),(Ut=Y.nextSibling)!==null)break;Y=it,it=Y.parentNode}Y=Ut}r=P===-1||j===-1?null:{start:P,end:j}}else r=null}r=r||{start:0,end:0}}else r=null;for(Jh={focusedElem:t,selectionRange:r},Hr=!1,a=(a&335544064)===a,An=n,n=a?9270:1024;An!==null;){if(t=An,a&&(r=t.deletions,r!==null))for(u=0;u<r.length;u++)a&&bh(r[u]);if(t.alternate===null&&(t.flags&2)!==0)a&&zx(t),Uc(a);else{if(t.tag===22){if(r=t.alternate,t.memoizedState!==null){r!==null&&r.memoizedState===null&&a&&bh(r),Uc(a);continue}else if(r!==null&&r.memoizedState!==null){a&&zx(t),Uc(a);continue}}r=t.child,(t.subtreeFlags&n)!==0&&r!==null?(r.return=t,An=r):(a&&Bx(t),Uc(a))}}ri=null}function Uc(t){for(;An!==null;){var n=An,a=t,r=n.alternate,c=n.flags;switch(n.tag){case 0:case 11:case 15:break;case 1:if((c&1024)!==0&&r!==null){a=void 0,c=r.memoizedProps,r=r.memoizedState;var u=n.stateNode;try{var g=Is(n.type,c);a=u.getSnapshotBeforeUpdate(g,r),u.__reactInternalSnapshotBeforeUpdate=a}catch(M){Ge(n,n.return,M)}}break;case 3:if((c&1024)!==0){if(r=n.stateNode.containerInfo,a=r.nodeType,a===9)sd(r);else if(a===1)switch(r.nodeName){case"HEAD":case"HTML":case"BODY":sd(r);break;default:r.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;case 30:a&&r!==null&&(a=ca(r.memoizedProps,r.stateNode),c=n.memoizedProps,c=ua(c.default,c.update),c!=="none"&&br(r,a,c,r.memoizedState=[],!0));break;default:if((c&1024)!==0)throw Error(s(163))}if(r=n.sibling,r!==null){r.return=n.return,An=r;break}An=n.return}}function Xx(t,n,a){var r=a.flags;switch(a.tag){case 0:case 11:case 15:Zi(t,a),r&4&&ko(5,a);break;case 1:if(Zi(t,a),r&4)if(t=a.stateNode,n===null)try{t.componentDidMount()}catch(g){Ge(a,a.return,g)}else{var c=Is(a.type,n.memoizedProps);n=n.memoizedState;try{t.componentDidUpdate(c,n,t.__reactInternalSnapshotBeforeUpdate)}catch(g){Ge(a,a.return,g)}}r&64&&Ux(a),r&512&&ki(a,a.return);break;case 3:if(Zi(t,a),r&64&&(t=a.updateQueue,t!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{ym(t,n)}catch(g){Ge(a,a.return,g)}}break;case 27:n===null&&r&4&&Px(a);case 26:case 5:Zi(t,a),n===null&&r&4&&xh(a),r&512&&ki(a,a.return);break;case 12:Zi(t,a);break;case 31:Zi(t,a),r&4&&jx(t,a);break;case 13:Zi(t,a),r&4&&Wx(t,a),r&64&&(t=a.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(a=qS.bind(null,a),Rb(t,a))));break;case 22:if(r=a.memoizedState!==null||Tn,!r){var u=n!==null&&n.memoizedState!==null||Ie;n=Tn,c=Ie,Tn=r,(Ie=u)&&!c?(r=2,(a.subtreeFlags&8772)!==0&&(r|=1),Li(t,a,r)):Zi(t,a),Tn=n,Ie=c}break;case 30:Zi(t,a),r&512&&ki(a,a.return);break;case 7:r&512&&ki(a,a.return);default:Zi(t,a)}}function Rh(t,n){for(t=t.child;t!==null;)kx(t,n),t=t.sibling}function kx(t,n){switch(t.tag){case 5:case 26:try{var a=t.stateNode;if(n){var r=a.style;typeof r.setProperty=="function"?r.setProperty("display","none","important"):r.display="none"}else{var c=t.stateNode,u=t.memoizedProps.style,g=u!=null&&u.hasOwnProperty("display")?u.display:null;c.style.display=g==null||typeof g=="boolean"?"":(""+g).trim()}}catch(P){Ge(t,t.return,P)}Ch(t,n);break;case 6:try{t.stateNode.nodeValue=n?"":t.memoizedProps,ge=!0}catch(P){Ge(t,t.return,P)}break;case 18:try{var M=t.stateNode;n?zg(M,!0):zg(t.stateNode,!1)}catch(P){Ge(t,t.return,P)}break;case 22:case 23:t.memoizedState===null&&Rh(t,n);break;default:Rh(t,n)}}function Ch(t,n){if(t.subtreeFlags&67108864)for(t=t.child;t!==null;){t:{var a=t,r=n;switch(a.tag){case 4:kx(a,r);break t;case 22:a.memoizedState===null&&Ch(a,r);break t;default:Ch(a,r)}}t=t.sibling}}function Yx(t){var n=t.alternate;n!==null&&(t.alternate=null,Yx(n)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(n=t.stateNode,n!==null&&Ke(n)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var en=null,Jn=!1;function Ui(t,n,a){for(a=a.child;a!==null;)qx(t,n,a),a=a.sibling}function qx(t,n,a){if(tn&&typeof tn.onCommitFiberUnmount=="function")try{tn.onCommitFiberUnmount(De,a)}catch{}switch(a.tag){case 26:Ie||Ln(a,n),Ui(t,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&!Ie&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:Ie||Ln(a,n),Yo(a);var r=en,c=Jn;es(a.type)&&(en=a.stateNode,Jn=!1),Ui(t,n,a),Kg(a.stateNode,a.type,a.memoizedProps),en=r,Jn=c;break;case 5:Ie||Ln(a,n),Yo(a);case 6:if(a.tag===6&&Yo(a),r=en,c=Jn,en=null,Ui(t,n,a),en=r,Jn=c,en!==null)if(Jn)try{(en.nodeType===9?en.body:en.nodeName==="HTML"?en.ownerDocument.body:en).removeChild(a.stateNode),ge=!0}catch(u){Ge(a,n,u)}else try{en.removeChild(a.stateNode),ge=!0}catch(u){Ge(a,n,u)}break;case 18:en!==null&&(Jn?(t=en,Pg(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,a.stateNode),Gr(t)):Pg(en,a.stateNode));break;case 4:r=en,c=Jn,en=a.stateNode.containerInfo,Jn=!0,Ui(t,n,a),en=r,Jn=c;break;case 0:case 11:case 14:case 15:Wa(2,a,n),Ie||Wa(4,a,n),Ui(t,n,a);break;case 1:Ie||(Ln(a,n),r=a.stateNode,typeof r.componentWillUnmount=="function"&&Nx(a,n,r)),Ui(t,n,a);break;case 21:Ui(t,n,a);break;case 22:Ie=(r=Ie)||a.memoizedState!==null,Ui(t,n,a),Ie=r;break;case 30:Ln(a,n),Ui(t,n,a);break;case 7:Ie||Ln(a,n),Ui(t,n,a);break;default:Ui(t,n,a)}}function jx(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null))){t=t.dehydrated;try{Gr(t)}catch(a){Ge(n,n.return,a)}}}function Wx(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{Gr(t)}catch(a){Ge(n,n.return,a)}}function PS(t){switch(t.tag){case 31:case 13:case 19:var n=t.stateNode;return n===null&&(n=t.stateNode=new Vx),n;case 22:return t=t.stateNode,n=t._retryCache,n===null&&(n=t._retryCache=new Vx),n;default:throw Error(s(435,t.tag))}}function Nc(t,n){var a=PS(t);n.forEach(function(r){if(!a.has(r)){a.add(r);var c=jS.bind(null,t,r);r.then(c,c)}})}function kn(t,n,a){var r=n.deletions;if(r!==null)for(var c=0;c<r.length;c++){var u=r[c],g=t,M=n,P=M;t:for(;P!==null;){switch(P.tag){case 27:if(es(P.type)){en=P.stateNode,Jn=!1;break t}break;case 5:en=P.stateNode,Jn=!1;break t;case 3:case 4:en=P.stateNode.containerInfo,Jn=!0;break t}P=P.return}if(en===null)throw Error(s(160));qx(g,M,u),en=null,Jn=!1,g=u.alternate,g!==null&&(g.return=null),u.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)Zx(n,t,a),n=n.sibling}var Ni=null;function Zx(t,n,a){var r=t.alternate,c=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(c&4&&(r=t.updateQueue,r=r!==null?r.events:null,r!==null))for(var u=0;u<r.length;u++){var g=r[u];g.ref.impl=g.nextImpl}kn(n,t,a),Yn(t),c&4&&(Wa(3,t,t.return),ko(3,t),Wa(5,t,t.return));break;case 1:kn(n,t,a),Yn(t),c&512&&(Ie||r===null||Ln(r,r.return)),c&64&&Tn&&(t=t.updateQueue,t!==null&&(n=t.callbacks,n!==null&&(a=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=a===null?n:a.concat(n))));break;case 26:if(u=Ni,kn(n,t,a),Yn(t),c&512&&(Ie||r===null||Ln(r,r.return)),c&4)if(c=r!==null?r.memoizedState:null,a=t.memoizedState,r===null)if(a===null)if(t.stateNode===null)if(Tn)t.stateNode=Ng(t.type,t.memoizedProps,n.containerInfo,t);else{t:{n=t.type,a=t.memoizedProps,c=u.ownerDocument||u;e:switch(n){case"title":r=c.getElementsByTagName("title")[0],(!r||r[Ue]||r[At]||r.namespaceURI==="http://www.w3.org/2000/svg"||r.hasAttribute("itemprop"))&&(r=c.createElement(n),c.head.insertBefore(r,c.querySelector("head > title"))),On(r,n,a),r[At]=t,Le(r),n=r;break t;case"link":if(u=n_("link","href",c).get(n+(a.href||""))){for(g=0;g<u.length;g++)if(r=u[g],r.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&r.getAttribute("rel")===(a.rel==null?null:a.rel)&&r.getAttribute("title")===(a.title==null?null:a.title)&&r.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){u.splice(g,1);break e}}r=c.createElement(n),On(r,n,a),c.head.appendChild(r);break;case"meta":if(u=n_("meta","content",c).get(n+(a.content||""))){for(g=0;g<u.length;g++)if(r=u[g],r.getAttribute("content")===(a.content==null?null:""+a.content)&&r.getAttribute("name")===(a.name==null?null:a.name)&&r.getAttribute("property")===(a.property==null?null:a.property)&&r.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&r.getAttribute("charset")===(a.charSet==null?null:a.charSet)){u.splice(g,1);break e}}r=c.createElement(n),On(r,n,a),c.head.appendChild(r);break;default:throw Error(s(468,n))}r[At]=t,Le(r),n=r}t.stateNode=n}else Tn||hd(u,t.type,t.stateNode);else t.stateNode=e_(u,a,t.memoizedProps);else c!==a?(c===null?(n=r.stateNode,n===null||Ie||n.parentNode.removeChild(n)):c.count--,a===null?Tn||hd(u,t.type,t.stateNode):e_(u,a,t.memoizedProps)):a===null&&t.stateNode!==null&&gh(t,t.memoizedProps,r.memoizedProps);break;case 27:kn(n,t,a),Yn(t),c&512&&(Ie||r===null||Ln(r,r.return)),r!==null&&c&4&&gh(t,t.memoizedProps,r.memoizedProps);break;case 5:if(u=ji,ji=!1,kn(n,t,a),ji=u,Yn(t),c&512&&(Ie||r===null||Ln(r,r.return)),t.flags&32){n=t.stateNode;try{ar(n,""),ge=!0}catch(rt){Ge(t,t.return,rt)}}c&4&&t.stateNode!=null&&(n=t.memoizedProps,gh(t,n,r!==null?r.memoizedProps:n)),c&1024&&(Th=!0);break;case 6:if(kn(n,t,a),Yn(t),c&4){if(t.stateNode===null)throw Error(s(162));n=t.memoizedProps,a=t.stateNode;try{a.nodeValue=n,ge=!0}catch(rt){Ge(t,t.return,rt)}}break;case 3:if(ge=!1,jc=null,u=Ni,Ni=el(n.containerInfo),kn(n,t,a),Ni=u,Yn(t),c&4&&r!==null&&r.memoizedState.isDehydrated)try{Gr(n.containerInfo)}catch(rt){Ge(t,t.return,rt)}Th&&(Th=!1,Kx(t)),ge=!1;break;case 4:c=ji,ji=Tn,r=x0(),u=Ni,Ni=el(t.stateNode.containerInfo),kn(n,t,a),Yn(t),Ni=u,ge&&qo&&(Dc=!0),ge=r,ji=c;break;case 12:kn(n,t,a),Yn(t);break;case 31:kn(n,t,a),Yn(t),c&4&&(n=t.updateQueue,n!==null&&(t.updateQueue=null,Nc(t,n)));break;case 13:kn(n,t,a),Yn(t),t.child.flags&8192&&t.memoizedState!==null!=(r!==null&&r.memoizedState!==null)&&(Pc=F()),c&4&&(n=t.updateQueue,n!==null&&(t.updateQueue=null,Nc(t,n)));break;case 22:u=t.memoizedState!==null,g=r!==null&&r.memoizedState!==null;var M=Tn,P=Ie,j=ji;Tn=M||u,ji=j||u,Ie=P||g,kn(n,t,a),Ie=P,ji=j,Tn=M,Yn(t),c&8192&&(n=t.stateNode,n._visibility=u?n._visibility&-2:n._visibility|1,!u||r===null||g||Tn||Ie||(n=g||Ie,a=Tn,r=Ie,Tn=u||Tn,Ie=n,Za(t,2),Tn=a,Ie=r),!u&&ji||Rh(t,u)),c&4&&(n=t.updateQueue,n!==null&&(a=n.retryQueue,a!==null&&(n.retryQueue=null,Nc(t,a))));break;case 19:kn(n,t,a),Yn(t),c&4&&(n=t.updateQueue,n!==null&&(t.updateQueue=null,Nc(t,n)));break;case 30:c&512&&(Ie||r===null||Ln(r,r.return)),c=x0(),u=qo,g=(a&335544064)===a,M=t.memoizedProps,qo=g&&ua(M.default,M.update)!=="none",kn(n,t,a),Yn(t),g&&r!==null&&ge&&(t.flags|=4),qo=u,ge=c;break;case 21:break;case 7:c&512&&(Ie||r===null||Ln(r,r.return)),r&&r.stateNode!==null&&(r.stateNode._fragmentFiber=t);default:kn(n,t,a),Yn(t)}}function Yn(t){var n=t.flags;if(n&2){try{for(var a,r=t.return;r!==null;){if(Ox(r)){a=r;break}r=r.return}r=null;for(var c=t.return;c!==null;){if(mh(c)){var u=c.stateNode;r===null?r=[u]:r.push(u)}if(ph(c))break;c=c.return}var g=r;if(a==null)throw Error(s(160));switch(a.tag){case 27:var M=a.stateNode,P=_h(t);Ac(t,P,M,g);break;case 5:var j=a.stateNode;a.flags&32&&(ar(j,""),a.flags&=-33);var rt=_h(t);Ac(t,rt,j,g);break;case 3:case 4:var mt=a.stateNode.containerInfo,Y=_h(t);vh(t,Y,mt,g);break;default:throw Error(s(161))}}catch(it){Ge(t,t.return,it)}t.flags&=-3}n&4096&&(t.flags&=-4097)}function Kx(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var n=t;Kx(n),n.tag===5&&n.flags&1024&&(n=n.stateNode,Hr=!0,n.reset(),Hr=!1),t=t.sibling}}function Mr(t,n){if(n.subtreeFlags&9270)for(n=n.child;n!==null;)Qx(n,t),n=n.sibling;else Gx(n)}function Qx(t,n){var a=t.alternate;if(a===null)yh(t,!1);else switch(t.tag){case 3:if(Ah=Wi=!1,Ix(),Mr(n,t),!Wi&&!Dc){if(t=Yi,t!==null)for(var r=0;r<t.length;r+=3){a=t[r];var c=t[r+1];Fg(a,t[r+2]),a=a.ownerDocument.documentElement,a!==null&&a.animate({opacity:[0,0],pointerEvents:["none","none"]},{duration:0,fill:"forwards",pseudoElement:"::view-transition-group("+c+")"})}t=n.containerInfo,t=t.nodeType===9?t.documentElement:t.ownerDocument.documentElement,t!==null&&t.style.viewTransitionName===""&&(t.style.viewTransitionName="none",t.animate({opacity:[0,0],pointerEvents:["none","none"]},{duration:0,fill:"forwards",pseudoElement:"::view-transition-group(root)"}),t.animate({width:[0,0],height:[0,0]},{duration:0,fill:"forwards",pseudoElement:"::view-transition"})),Ah=!0}Yi=null;break;case 5:Mr(n,t);break;case 4:r=Wi,Wi=!1,Mr(n,t),Wi&&(Dc=!0),Wi=r;break;case 22:t.memoizedState===null&&(a.memoizedState!==null?yh(t,!1):Mr(n,t));break;case 30:r=Wi,c=Ix(),Wi=!1,Mr(n,t),Wi&&(t.flags|=4);var u=t.memoizedProps,g=t.stateNode;n=ca(u,g),g=ca(a.memoizedProps,g);var M=ua(u.default,u.update);M==="none"?n=!1:(u=a.memoizedState,a.memoizedState=null,a=t.child,Qn=0,n=Eh(t,a,n,g,M,u,!0),Qn!==(u===null?0:u.length)&&(t.flags|=32)),(t.flags&4)!==0&&n?(Dr(t,t.memoizedProps.onUpdate),Yi=c):c!==null&&(c.push.apply(c,Yi),Yi=c),Wi=(t.flags&32)!==0?!0:r;break;default:Mr(n,t)}}function Zi(t,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)Xx(t,n.alternate,n),n=n.sibling}function Za(t,n){for(t=t.child;t!==null;){var a=t,r=n;switch(a.tag){case 0:case 11:case 14:case 15:Wa(4,a,a.return),Za(a,r);break;case 1:Ln(a,a.return);var c=a.stateNode;typeof c.componentWillUnmount=="function"&&Nx(a,a.return,c),Za(a,r);break;case 27:(r&2)!==0&&Kg(a.stateNode,a.type,a.memoizedProps);case 5:Ln(a,a.return),a.tag!==5&&a.tag!==27||Yo(a),Za(a,r);break;case 6:Yo(a);break;case 26:Ln(a,a.return),c=a.stateNode,a.memoizedState!==null||c===null||Ie||c.parentNode.removeChild(c),Za(a,r);break;case 22:a.memoizedState===null&&Za(a,r);break;case 30:Ln(a,a.return),Za(a,r);break;case 7:Ln(a,a.return);default:Za(a,r)}t=t.sibling}}function Li(t,n,a){for(a=(n.subtreeFlags&8772)!==0?a:a&-2,n=n.child;n!==null;){var r=n.alternate,c=t,u=n,g=u.flags,M=(a&1)!==0;switch(u.tag){case 0:case 11:case 15:Li(c,u,a),ko(4,u);break;case 1:if(Li(c,u,a),r=u,c=r.stateNode,typeof c.componentDidMount=="function")try{c.componentDidMount()}catch(rt){Ge(r,r.return,rt)}if(r=u,c=r.updateQueue,c!==null){var P=r.stateNode;try{var j=c.shared.hiddenCallbacks;if(j!==null)for(c.shared.hiddenCallbacks=null,c=0;c<j.length;c++)vm(j[c],P)}catch(rt){Ge(r,r.return,rt)}}M&&g&64&&Ux(u),ki(u,u.return);break;case 27:(a&2)!==0&&Px(u);case 5:u.tag!==5&&u.tag!==27||Lx(u),Li(c,u,a),M&&r===null&&g&4&&xh(u),ki(u,u.return);break;case 6:Lx(u);break;case 26:P=u.stateNode,u.memoizedState!==null||P===null||Tn||hd(el(P.ownerDocument),u.type,P),Li(c,u,a),M&&r===null&&g&4&&xh(u),ki(u,u.return);break;case 12:Li(c,u,a);break;case 31:Li(c,u,a),M&&g&4&&jx(c,u);break;case 13:Li(c,u,a),M&&g&4&&Wx(c,u);break;case 22:u.memoizedState===null&&Li(c,u,a),ki(u,u.return);break;case 30:Li(c,u,a),ki(u,u.return);break;case 7:ki(u,u.return);default:Li(c,u,a)}n=n.sibling}}function wh(t,n){var a=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),t=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(t=n.memoizedState.cachePool.pool),t!==a&&(t!=null&&t.refCount++,a!=null&&Uo(a))}function Dh(t,n){t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&Uo(t))}function Mi(t,n,a,r){var c=(a&335544064)===a;if(n.subtreeFlags&(c?10262:10256))for(n=n.child;n!==null;)Jx(t,n,a,r),n=n.sibling;else c&&Hx(n)}function Jx(t,n,a,r){var c=(a&335544064)===a;c&&n.alternate===null&&n.return!==null&&n.return.alternate!==null&&wc(n);var u=n.flags;switch(n.tag){case 0:case 11:case 15:Mi(t,n,a,r),u&2048&&ko(9,n);break;case 1:Mi(t,n,a,r);break;case 3:Mi(t,n,a,r),c&&Ah&&(t=t.containerInfo,t=t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,t.style.viewTransitionName==="root"&&(t.style.viewTransitionName=""),t=t.ownerDocument.documentElement,t!==null&&t.style.viewTransitionName==="none"&&(t.style.viewTransitionName="")),u&2048&&(u=null,n.alternate!==null&&(u=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==u&&(n.refCount++,u!=null&&Uo(u)));break;case 12:if(u&2048){Mi(t,n,a,r),u=n.stateNode;try{var g=n.memoizedProps,M=g.id,P=g.onPostCommit;typeof P=="function"&&P(M,n.alternate===null?"mount":"update",u.passiveEffectDuration,-0)}catch(j){Ge(n,n.return,j)}}else Mi(t,n,a,r);break;case 31:Mi(t,n,a,r);break;case 13:Mi(t,n,a,r);break;case 23:break;case 22:g=n.stateNode,M=n.alternate,n.memoizedState!==null?(c&&M!==null&&M.memoizedState===null&&wc(M),g._visibility&2?Mi(t,n,a,r):jo(t,n)):(c&&M!==null&&M.memoizedState!==null&&wc(n),g._visibility&2?Mi(t,n,a,r):(g._visibility|=2,Er(t,n,a,r,(n.subtreeFlags&10256)!==0||!1))),u&2048&&wh(M,n);break;case 24:Mi(t,n,a,r),u&2048&&Dh(n.alternate,n);break;case 30:c&&(u=n.alternate,u!==null&&(qi(u.child,!0),qi(n.child,!0))),Mi(t,n,a,r);break;default:Mi(t,n,a,r)}}function Er(t,n,a,r,c){for(c=c&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var u=t,g=n,M=a,P=r,j=g.flags;switch(g.tag){case 0:case 11:case 15:Er(u,g,M,P,c),ko(8,g);break;case 23:break;case 22:var rt=g.stateNode;g.memoizedState!==null?rt._visibility&2?Er(u,g,M,P,c):jo(u,g):(rt._visibility|=2,Er(u,g,M,P,c)),c&&j&2048&&wh(g.alternate,g);break;case 24:Er(u,g,M,P,c),c&&j&2048&&Dh(g.alternate,g);break;default:Er(u,g,M,P,c)}n=n.sibling}}function jo(t,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=t,r=n,c=r.flags;switch(r.tag){case 22:jo(a,r),c&2048&&wh(r.alternate,r);break;case 24:jo(a,r),c&2048&&Dh(r.alternate,r);break;default:jo(a,r)}n=n.sibling}}var Fs=8192;function Bs(t,n,a){if(t.subtreeFlags&Fs)for(t=t.child;t!==null;)$x(t,n,a),t=t.sibling}function $x(t,n,a){switch(t.tag){case 26:Bs(t,n,a),t.flags&Fs&&(t.memoizedState!==null?Gb(a,Ni,t.memoizedState,t.memoizedProps):(t=t.stateNode,(n&335544128)===n&&r_(a,t)));break;case 5:Bs(t,n,a),t.flags&Fs&&(t=t.stateNode,(n&335544128)===n&&r_(a,t));break;case 3:case 4:var r=Ni;Ni=el(t.stateNode.containerInfo),Bs(t,n,a),Ni=r;break;case 22:t.memoizedState===null&&(r=t.alternate,r!==null&&r.memoizedState!==null?(r=Fs,Fs=16777216,Bs(t,n,a),Fs=r):Bs(t,n,a));break;case 30:if((t.flags&Fs)!==0&&(r=t.memoizedProps.name,r!=null&&r!=="auto")){var c=t.stateNode;c.paired=null,ri===null&&(ri=new Map),ri.set(r,c)}Bs(t,n,a);break;default:Bs(t,n,a)}}function tg(t){var n=t.alternate;if(n!==null&&(t=n.child,t!==null)){n.child=null;do n=t.sibling,t.sibling=null,t=n;while(t!==null)}}function Wo(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var r=n[a];An=r,ng(r,t)}tg(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)eg(t),t=t.sibling}function eg(t){switch(t.tag){case 0:case 11:case 15:Wo(t),t.flags&2048&&Wa(9,t,t.return);break;case 3:Wo(t);break;case 12:Wo(t);break;case 22:var n=t.stateNode;t.memoizedState!==null&&n._visibility&2&&(t.return===null||t.return.tag!==13)?(n._visibility&=-3,Lc(t)):Wo(t);break;default:Wo(t)}}function Lc(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var r=n[a];An=r,ng(r,t)}tg(t)}for(t=t.child;t!==null;){switch(n=t,n.tag){case 0:case 11:case 15:Wa(8,n,n.return),Lc(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,Lc(n));break;default:Lc(n)}t=t.sibling}}function ng(t,n){for(;An!==null;){var a=An;switch(a.tag){case 0:case 11:case 15:Wa(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var r=a.memoizedState.cachePool.pool;r!=null&&r.refCount++}break;case 24:Uo(a.memoizedState.cache)}if(r=a.child,r!==null)r.return=a,An=r;else t:for(a=t;An!==null;){r=An;var c=r.sibling,u=r.return;if(Yx(r),r===a){An=null;break t}if(c!==null){c.return=u,An=c;break t}An=u}}}var zS={getCacheForType:function(t){var n=Dn(hn),a=n.data.get(t);return a===void 0&&(a=t(),n.data.set(t,a)),a},cacheSignal:function(){return Dn(hn).controller.signal}},IS=typeof WeakMap=="function"?WeakMap:Map,ze=0,Qe=null,Ee=null,Re=0,He=0,oi=null,Ka=!1,Tr=!1,Uh=!1,va=0,sn=0,Qa=0,Hs=0,Oc=0,li=0,Ar=0,Zo=null,$n=null,Nh=!1,Pc=0,ig=0,zc=1/0,Ic=null,Ja=null,nn=0,Oi=null,Gs=null,Ki=0,Lh=0,Oh=null,ag=null,Rr=null,Cr=null,wr=null,Ko=0,Fc=null;function ci(){return(ze&2)!==0&&Re!==0?Re&-Re:Mt.T!==null?kh():ut()}function sg(){if(li===0)if((Re&536870912)===0||Se){var t=vs;vs<<=1,(vs&3932160)===0&&(vs=262144),li=t}else li=536870912;return t=Un.current,t!==null&&(t.flags|=32),li}function Dr(t,n){if(n!=null){var a=t.stateNode,r=a.ref;r===null&&(r=a.ref=Bg(ca(t.memoizedProps,a))),Cr===null&&(Cr=[]),Cr.push(n.bind(null,r))}}function ti(t,n,a){(t===Qe&&(He===2||He===9)||t.cancelPendingCommit!==null)&&(Ur(t,0),$a(t,Re,li,!1)),bs(t,a),((ze&2)===0||t!==Qe)&&(t===Qe&&((ze&2)===0&&(Hs|=a),sn===4&&$a(t,Re,li,!1)),Qi(t))}function rg(t,n,a){if((ze&6)!==0)throw Error(s(327));var r=!a&&(n&127)===0&&(n&t.expiredLanes)===0||Hi(t,n),c=r?HS(t,n):zh(t,n,!0),u=r;do{if(c===0){Tr&&!r&&$a(t,n,0,!1);break}else{if(a=t.current.alternate,u&&!FS(a)){c=zh(t,n,!1),u=!1;continue}if(c===2){if(u=n,t.errorRecoveryDisabledLanes&u)var g=0;else g=t.pendingLanes&-536870913,g=g!==0?g:g&536870912?536870912:0;if(g!==0){n=g;t:{var M=t;c=Zo;var P=M.current.memoizedState.isDehydrated;if(P&&(Ur(M,g).flags|=256),g=zh(M,g,!1),g!==2&&g!==6){if(Uh&&!P){M.errorRecoveryDisabledLanes|=u,Hs|=u,c=4;break t}u=$n,$n=c,u!==null&&($n===null?$n=u:$n.push.apply($n,u))}c=g}if(u=!1,c!==2)continue}}if(c===1){Ur(t,0),$a(t,n,0,!0);break}t:{switch(r=t,u=c,u){case 0:case 1:throw Error(s(345));case 4:if((n&4194048)!==n&&(n&62914560)!==n)break;case 6:$a(r,n,li,!Ka);break t;case 2:$n=null;break;case 3:case 5:break;default:throw Error(s(329))}if((n&62914560)===n&&(c=Pc+300-F(),10<c)){if($a(r,n,li,!Ka),Ss(r,0,!0)!==0)break t;Ki=n,r.timeoutHandle=ed(og.bind(null,r,a,$n,Ic,Nh,n,li,Hs,Ar,Ka,u,"Throttled",-0,0),c);break t}og(r,a,$n,Ic,Nh,n,li,Hs,Ar,Ka,u,null,-0,0)}}break}while(!0);Qi(t)}function og(t,n,a,r,c,u,g,M,P,j,rt,mt,Y,it){t.timeoutHandle=-1;var Ut=n.subtreeFlags,kt=(u&335544064)===u;if(mt=null,(kt||Ut&8192||(Ut&16785408)===16785408)&&(mt={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Gi},ri=null,$x(n,u,mt),kt&&(Ut=mt,kt=t.containerInfo,kt=(kt.nodeType===9?kt:kt.ownerDocument).__reactViewTransition,kt!=null&&(Ut.count++,Ut.waitingForViewTransition=!0,Ut=al.bind(Ut),kt.finished.then(Ut,Ut))),Ut=(u&62914560)===u?Pc-F():(u&4194048)===u?ig-F():0,Ut=Vb(mt,Ut),Ut!==null)){Ki=u,t.cancelPendingCommit=Ut(mg.bind(null,t,n,u,a,r,c,g,M,P,j,rt,mt,null,Y,it)),$a(t,u,g,!j);return}mg(t,n,u,a,r,c,g,M,P,j,rt,mt)}function FS(t){for(var n=t;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var r=0;r<a.length;r++){var c=a[r],u=c.getSnapshot;c=c.value;try{if(!ai(u(),c))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function $a(t,n,a,r){n=go(t,n),n&=~Oc,n&=~Hs,t.suspendedLanes|=n,t.pingedLanes&=~n,r&&(t.warmLanes|=n),r=t.expirationTimes;for(var c=n;0<c;){var u=31-Gn(c),g=1<<u;r[u]=-1,c&=~g}a!==0&&Pl(t,a,n)}function Bc(){return(ze&6)===0?(Qo(0),!1):!0}function Ph(){if(Ee!==null){if(He===0)var t=Ee.return;else t=Ee,da=Cs=null,Xf(t),gr=null,Oo=0,t=Ee;for(;t!==null;)Dx(t.alternate,t),t=t.return;Ee=null}}function Ur(t,n){var a=t.timeoutHandle;return a!==-1&&(t.timeoutHandle=-1,lb(a)),a=t.cancelPendingCommit,a!==null&&(t.cancelPendingCommit=null,a()),Ki=0,Ph(),Qe=t,Ee=a=fa(t.current,null),Re=n,He=0,oi=null,Ka=!1,Tr=Hi(t,n),Uh=!1,Ar=li=Oc=Hs=Qa=sn=0,$n=Zo=null,Nh=!1,va=go(t,n),jl(),a}function lg(t,n){pe=null,Mt.H=_c,n===xr||n===ac?(n=mm(),He=3):n===Df?(n=mm(),He=4):He=n===ah?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,oi=n,Ee===null&&(sn=1,vc(t,vi(n,t.current)))}function cg(){var t=Un.current;return t===null?!0:(Re&4194048)===Re?Fn===null:(Re&62914560)===Re||(Re&536870912)!==0?t===Fn:!1}function ug(){var t=Mt.H;return Mt.H=_c,t===null?_c:t}function fg(){var t=Mt.A;return Mt.A=zS,t}function Hc(){sn=4,Ka||(Re&4194048)!==Re&&Un.current!==null||(Tr=!0),(Qa&134217727)===0&&(Hs&134217727)===0||Qe===null||$a(Qe,Re,li,!1)}function zh(t,n,a){var r=ze;ze|=2;var c=ug(),u=fg();(Qe!==t||Re!==n)&&(Ic=null,Ur(t,n)),n=!1;var g=sn;t:do try{if(He!==0&&Ee!==null){var M=Ee,P=oi;switch(He){case 8:Ph(),g=6;break t;case 3:case 2:case 9:case 6:Un.current===null&&(n=!0);var j=He;if(He=0,oi=null,Nr(t,M,P,j),a&&Tr){g=0;break t}break;default:j=He,He=0,oi=null,Nr(t,M,P,j)}}BS(),g=sn;break}catch(rt){lg(t,rt)}while(!0);return n&&t.shellSuspendCounter++,da=Cs=null,ze=r,Mt.H=c,Mt.A=u,Ee===null&&(Qe=null,Re=0,jl()),g}function BS(){for(;Ee!==null;)hg(Ee)}function HS(t,n){var a=ze;ze|=2;var r=ug(),c=fg();Qe!==t||Re!==n?(Ic=null,zc=F()+500,Ur(t,n)):Tr=Hi(t,n);t:do try{if(He!==0&&Ee!==null){n=Ee;var u=oi;e:switch(He){case 1:He=0,oi=null,Nr(t,n,u,1);break;case 2:case 9:if(dm(u)){He=0,oi=null,dg(n);break}n=function(){He!==2&&He!==9||Qe!==t||(He=7),Qi(t)},u.then(n,n);break t;case 3:He=7;break t;case 4:He=5;break t;case 7:dm(u)?(He=0,oi=null,dg(n)):(He=0,oi=null,Nr(t,n,u,7));break;case 5:var g=null;switch(Ee.tag){case 26:g=Ee.memoizedState;case 5:case 27:var M=Ee;if(g?a_(g):M.stateNode.complete){He=0,oi=null;var P=M.sibling;if(P!==null)Ee=P;else{var j=M.return;j!==null?(Ee=j,Gc(j)):Ee=null}break e}}He=0,oi=null,Nr(t,n,u,5);break;case 6:He=0,oi=null,Nr(t,n,u,6);break;case 8:Ph(),sn=6;break t;default:throw Error(s(462))}}GS();break}catch(rt){lg(t,rt)}while(!0);return da=Cs=null,Mt.H=r,Mt.A=c,ze=a,Ee!==null?0:(Qe=null,Re=0,jl(),sn)}function GS(){for(;Ee!==null&&!Bt();)hg(Ee)}function hg(t){var n=Cx(t.alternate,t,va);t.memoizedProps=t.pendingProps,n===null?Gc(t):Ee=n}function dg(t){var n=t,a=n.alternate;switch(n.tag){case 15:case 0:n=Sx(a,n,n.pendingProps,n.type,void 0,Re);break;case 11:n=Sx(a,n,n.pendingProps,n.type.render,n.ref,Re);break;case 5:Xf(n);var r=n;r===En&&(Se?($l(r),r.tag===5&&r.stateNode!=null&&(Je=r.stateNode)):($l(r),Se=!0));default:Dx(a,n),n=Ee=nm(n,va),n=Cx(a,n,va)}t.memoizedProps=t.pendingProps,n===null?Gc(t):Ee=n}function Nr(t,n,a,r){da=Cs=null,Xf(n),gr=null,Oo=0;var c=n.return;try{if(CS(t,c,n,a,Re)){sn=1,vc(t,vi(a,t.current)),Ee=null;return}}catch(u){if(c!==null)throw Ee=c,u;sn=1,vc(t,vi(a,t.current)),Ee=null;return}n.flags&32768?(Se||r===1?t=!0:Tr||(Re&536870912)!==0?t=!1:(Ka=t=!0,(r===2||r===9||r===3||r===6)&&(r=Un.current,r!==null&&r.tag===13&&(r.flags|=16384))),pg(n,t)):Gc(n)}function Gc(t){var n=t;do{if((n.flags&32768)!==0){pg(n,Ka);return}t=n.return;var a=NS(n.alternate,n,va);if(a!==null){Ee=a;return}if(n=n.sibling,n!==null){Ee=n;return}Ee=n=t}while(n!==null);sn===0&&(sn=5)}function pg(t,n){do{var a=LS(t.alternate,t);if(a!==null){a.flags&=32767,Ee=a;return}if(a=t.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(t=t.sibling,t!==null)){Ee=t;return}Ee=t=a}while(t!==null);sn=6,Ee=null}function mg(t,n,a,r,c,u,g,M,P,j,rt,mt){t.cancelPendingCommit=null;do Vc();while(nn!==0);if((ze&6)!==0)throw Error(s(327));if(n!==null){if(n===t.current)throw Error(s(177));t===Qe&&(Ee=Qe=null,Re=0),Gs=n,Oi=t,Ki=a,Oh=c,ag=r,VS(t,n,a,g,M,P,mt)}}function VS(t,n,a,r,c,u,g){var M=n.lanes|n.childLanes;if(Lh=M,M|=gf,ju(t,a,M,r,c,u),Cr=null,(a&335544064)===a?(wr=xS(t),r=10262):(wr=null,r=10256),(n.subtreeFlags&r)!==0||(n.flags&r)!==0?(t.callbackNode=null,t.callbackPriority=0,WS(Et,function(){return Hh(),null})):(t.callbackNode=null,t.callbackPriority=0),Rc=!1,r=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||r){r=Mt.T,Mt.T=null,c=Gt.p,Gt.p=2,u=ze,ze|=4;try{OS(t,n,a)}finally{ze=u,Gt.p=c,Mt.T=r}}nn=1,Rc?Rr=pb(g,t.containerInfo,wr,Ih,Fh,kS,Bh,Hh,XS):(Ih(),Fh(),Bh())}function XS(t){if(nn!==0){var n=Oi.onRecoverableError;n(t,{componentStack:null})}}function kS(){nn===3&&(nn=0,Qx(Gs,Oi),nn=4)}function Ih(){if(nn===1){nn=0;var t=Oi,n=Gs,a=Ki,r=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||r){r=Mt.T,Mt.T=null;var c=Gt.p;Gt.p=2;var u=ze;ze|=4;try{qo=Dc=!1,Zx(n,t,a),a=Jh;var g=q0(t.containerInfo),M=a.focusedElem,P=a.selectionRange;if(g!==M&&M&&M.ownerDocument&&Y0(M.ownerDocument.documentElement,M)){if(P!==null&&hf(M)){var j=P.start,rt=P.end;if(rt===void 0&&(rt=j),"selectionStart"in M)M.selectionStart=j,M.selectionEnd=Math.min(rt,M.value.length);else{var mt=M.ownerDocument||document,Y=mt&&mt.defaultView||window;if(Y.getSelection){var it=Y.getSelection(),Ut=M.textContent.length,kt=Math.min(P.start,Ut),me=P.end===void 0?kt:Math.min(P.end,Ut);!it.extend&&kt>me&&(g=me,me=kt,kt=g);var q=k0(M,kt),V=k0(M,me);if(q&&V&&(it.rangeCount!==1||it.anchorNode!==q.node||it.anchorOffset!==q.offset||it.focusNode!==V.node||it.focusOffset!==V.offset)){var tt=mt.createRange();tt.setStart(q.node,q.offset),it.removeAllRanges(),kt>me?(it.addRange(tt),it.extend(V.node,V.offset)):(tt.setEnd(V.node,V.offset),it.addRange(tt))}}}}for(mt=[],it=M;it=it.parentNode;)it.nodeType===1&&mt.push({element:it,left:it.scrollLeft,top:it.scrollTop});for(typeof M.focus=="function"&&M.focus(),M=0;M<mt.length;M++){var pt=mt[M];pt.element.scrollLeft=pt.left,pt.element.scrollTop=pt.top}}Hr=!!Qh,Jh=Qh=null}finally{ze=u,Gt.p=c,Mt.T=r}}t.current=n,nn=2}}function Fh(){if(nn===2){nn=0;var t=Oi,n=Gs,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=Mt.T,Mt.T=null;var r=Gt.p;Gt.p=2;var c=ze;ze|=4;try{Xx(t,n.alternate,n)}finally{ze=c,Gt.p=r,Mt.T=a}}nn=3}}function Bh(){if(nn===4||nn===3){nn=0;var t=Rr;Rr=null,re();var n=Oi,a=Gs,r=Ki,c=ag,u=(r&335544064)===r?10262:10256;if((a.subtreeFlags&u)!==0||(a.flags&u)!==0?nn=5:(nn=0,Gs=Oi=null,xg(n,n.pendingLanes)),u=n.pendingLanes,u===0&&(Ja=null),lt(r),a=a.stateNode,tn&&typeof tn.onCommitFiberRoot=="function")try{tn.onCommitFiberRoot(De,a,void 0,(a.current.flags&128)===128)}catch{}if(c!==null){a=Mt.T,u=Gt.p,Gt.p=2,Mt.T=null;try{for(var g=n.onRecoverableError,M=0;M<c.length;M++){var P=c[M];g(P.value,{componentStack:P.stack})}}finally{Mt.T=a,Gt.p=u}}if(c=Cr,g=wr,wr=null,c!==null&&(Cr=null,g===null&&(g=[]),t!==null))for(P=0;P<c.length;P++)a=(0,c[P])(g),a!==void 0&&t.finished.finally(a);(Ki&3)!==0&&Vc(),Qi(n),u=n.pendingLanes,(r&261930)!==0&&(u&42)!==0?n===Fc?Ko++:(Ko=0,Fc=n):(Ko=0,Fc=null),Qo(0)}}function xg(t,n){(t.pooledCacheLanes&=n)===0&&(n=t.pooledCache,n!=null&&(t.pooledCache=null,Uo(n)))}function Vc(){return Rr!==null&&(Rr.skipTransition(),Rr=null),Ih(),Fh(),Bh(),Hh()}function Hh(){if(nn!==5)return!1;var t=Oi,n=Lh;Lh=0;var a=lt(Ki),r=Mt.T,c=Gt.p;try{Gt.p=32>a?32:a,Mt.T=null,a=Oh,Oh=null;var u=Oi,g=Ki;if(nn=0,Gs=Oi=null,Ki=0,(ze&6)!==0)throw Error(s(331));var M=ze;if(ze|=4,eg(u.current),Jx(u,u.current,g,a),ze=M,Qo(0,!1),tn&&typeof tn.onPostCommitFiberRoot=="function")try{tn.onPostCommitFiberRoot(De,u)}catch{}return!0}finally{Gt.p=c,Mt.T=r,xg(t,n)}}function gg(t,n,a){n=vi(a,n),n=ih(t.stateNode,n,2),t=ka(t,n,2),t!==null&&(bs(t,2),Qi(t))}function Ge(t,n,a){if(t.tag===3)gg(t,t,a);else for(;n!==null;){if(n.tag===3){gg(n,t,a);break}else if(n.tag===1){var r=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Ja===null||!Ja.has(r))){t=vi(a,t),a=dx(2),r=ka(n,a,2),r!==null&&(px(a,r,n,t),bs(r,2),Qi(r));break}}n=n.return}}function Gh(t,n,a){var r=t.pingCache;if(r===null){r=t.pingCache=new IS;var c=new Set;r.set(n,c)}else c=r.get(n),c===void 0&&(c=new Set,r.set(n,c));c.has(a)||(Uh=!0,c.add(a),t=YS.bind(null,t,n,a),n.then(t,t))}function YS(t,n,a){var r=t.pingCache;r!==null&&r.delete(n),t.pingedLanes|=t.suspendedLanes&a,t.warmLanes&=~a,Qe===t&&(Re&a)===a&&((sn===4||sn===3&&(Re&62914560)===Re&&300>F()-Pc)&&(ze&2)===0?Ur(t,0):Oc|=a,Ar===Re&&(Ar=0)),Qi(t)}function _g(t,n){n===0&&(n=Ol()),t=Ts(t,n),t!==null&&(bs(t,n),Qi(t))}function qS(t){var n=t.memoizedState,a=0;n!==null&&(a=n.retryLane),_g(t,a)}function jS(t,n){var a=0;switch(t.tag){case 31:case 13:var r=t.stateNode,c=t.memoizedState;c!==null&&(a=c.retryLane);break;case 19:r=t.stateNode;break;case 22:r=t.stateNode._retryCache;break;default:throw Error(s(314))}r!==null&&r.delete(n),_g(t,a)}function WS(t,n){return ee(t,n)}var Lr=null,Or=null,Vh=!1,Xc=!1,Xh=!1,ts=0;function Qi(t){t!==Or&&t.next===null&&(Or===null?Lr=Or=t:Or=Or.next=t),Xc=!0,Vh||(Vh=!0,KS())}function Qo(t,n){if(!Xh&&Xc){Xh=!0;do for(var a=!1,r=Lr;r!==null;){if(t!==0){var c=r.pendingLanes;if(c===0)var u=0;else{var g=r.suspendedLanes,M=r.pingedLanes;u=(1<<31-Gn(42|t)+1)-1,u&=c&~(g&~M),u=u&201326741?u&201326741|1:u?u|2:0}u!==0&&(a=!0,bg(r,u))}else u=Re,u=Ss(r,r===Qe?u:0,r.cancelPendingCommit!==null||r.timeoutHandle!==-1),(u&3)===0||Hi(r,u)||(a=!0,bg(r,u));r=r.next}while(a);Xh=!1}}function ZS(){vg()}function vg(){Xc=Vh=!1;var t=0;ts!==0&&ob()&&(t=ts);for(var n=F(),a=null,r=Lr;r!==null;){var c=r.next,u=yg(r,n);u===0?(r.next=null,a===null?Lr=c:a.next=c,c===null&&(Or=a)):(a=r,(t!==0||(u&3)!==0)&&(Xc=!0)),r=c}nn!==0&&nn!==5||Qo(t),ts!==0&&(ts=0)}function yg(t,n){for(var a=t.suspendedLanes,r=t.pingedLanes,c=t.expirationTimes,u=t.pendingLanes&-62914561;0<u;){var g=31-Gn(u),M=1<<g,P=c[g];P===-1?((M&a)===0||(M&r)!==0)&&(c[g]=Ll(M,n)):P<=n&&(t.expiredLanes|=M),u&=~M}if(n=Qe,a=Re,a=Ss(t,t===n?a:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),r=t.callbackNode,a===0||t===n&&(He===2||He===9)||t.cancelPendingCommit!==null)return r!==null&&r!==null&&$t(r),t.callbackNode=null,t.callbackPriority=0;if((a&3)===0||Hi(t,a)){if(n=a&-a,n===t.callbackPriority)return n;switch(r!==null&&$t(r),lt(a)){case 2:case 8:a=Dt;break;case 32:a=Et;break;case 268435456:a=Xt;break;default:a=Et}return r=Sg.bind(null,t),a=ee(a,r),t.callbackPriority=n,t.callbackNode=a,n}return r!==null&&r!==null&&$t(r),t.callbackPriority=2,t.callbackNode=null,2}function Sg(t,n){if(nn!==0&&nn!==5)return t.callbackNode=null,t.callbackPriority=0,null;var a=t.callbackNode;if(Vc()&&t.callbackNode!==a)return null;var r=Re;return r=Ss(t,t===Qe?r:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),r===0?null:(rg(t,r,n),yg(t,F()),t.callbackNode!=null&&t.callbackNode===a?Sg.bind(null,t):null)}function bg(t,n){if(Vc())return null;rg(t,n,!0)}function KS(){cb(function(){(ze&6)!==0?ee(wt,ZS):vg()})}function kh(){if(ts===0){var t=Us;t===0&&(t=La,La<<=1,(La&261888)===0&&(La=256)),ts=t}return ts}function Mg(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:Bl(t)}function QS(t,n,a,r,c){if(n==="submit"&&a&&a.stateNode===c){var u=Mg((c[Ot]||null).action),g=r.submitter;g&&(n=(n=g[Ot]||null)?Mg(n.formAction):g.getAttribute("formAction"),n!==null&&(u=n,g=null));var M=new Xl("action","action",null,r,c);t.push({event:M,listeners:[{instance:null,listener:function(){if(r.defaultPrevented){if(ts!==0){var P=new FormData(c,g);Jf(a,{pending:!0,data:P,method:c.method,action:u},null,P)}}else typeof u=="function"&&(M.preventDefault(),P=new FormData(c,g),Jf(a,{pending:!0,data:P,method:c.method,action:u},u,P))},currentTarget:c}]})}}for(var Yh=0;Yh<xf.length;Yh++){var qh=xf[Yh],JS=qh.toLowerCase(),$S=qh[0].toUpperCase()+qh.slice(1);Di(JS,"on"+$S)}Di(Z0,"onAnimationEnd"),Di(K0,"onAnimationIteration"),Di(Q0,"onAnimationStart"),Di("dblclick","onDoubleClick"),Di("focusin","onFocus"),Di("focusout","onBlur"),Di(lS,"onTransitionRun"),Di(cS,"onTransitionStart"),Di(uS,"onTransitionCancel"),Di(J0,"onTransitionEnd"),ln("onMouseEnter",["mouseout","mouseover"]),ln("onMouseLeave",["mouseout","mouseover"]),ln("onPointerEnter",["pointerout","pointerover"]),ln("onPointerLeave",["pointerout","pointerover"]),Pe("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Pe("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Pe("onBeforeInput",["compositionend","keypress","textInput","paste"]),Pe("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Pe("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Pe("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Jo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),tb=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Jo));function Eg(t,n){n=(n&4)!==0;for(var a=0;a<t.length;a++){var r=t[a],c=r.event;r=r.listeners;t:{var u=void 0;if(n)for(var g=r.length-1;0<=g;g--){var M=r[g],P=M.instance,j=M.currentTarget;if(M=M.listener,P!==u&&c.isPropagationStopped())break t;u=M,c.currentTarget=j;try{u(c)}catch(rt){ql(rt)}c.currentTarget=null,u=P}else for(g=0;g<r.length;g++){if(M=r[g],P=M.instance,j=M.currentTarget,M=M.listener,P!==u&&c.isPropagationStopped())break t;u=M,c.currentTarget=j;try{u(c)}catch(rt){ql(rt)}c.currentTarget=null,u=P}}}}function Te(t,n){var a=n[ne];a===void 0&&(a=n[ne]=new Set);var r=t+"__bubble";a.has(r)||(Tg(n,t,2,!1),a.add(r))}function jh(t,n,a){var r=0;n&&(r|=4),Tg(a,t,r,n)}var kc="_reactListening"+Math.random().toString(36).slice(2);function Wh(t){if(!t[kc]){t[kc]=!0,In.forEach(function(a){a!=="selectionchange"&&(tb.has(a)||jh(a,!1,t),jh(a,!0,t))});var n=t.nodeType===9?t:t.ownerDocument;n===null||n[kc]||(n[kc]=!0,jh("selectionchange",!1,n))}}function Tg(t,n,a,r){switch(p_(n)){case 2:var c=qb;break;case 8:c=jb;break;default:c=pd}a=c.bind(null,n,a,t),c=void 0,!ef||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(c=!0),r?c!==void 0?t.addEventListener(n,a,{capture:!0,passive:c}):t.addEventListener(n,a,!0):c!==void 0?t.addEventListener(n,a,{passive:c}):t.addEventListener(n,a,!1)}function Zh(t,n,a,r,c){var u=r;if((n&1)===0&&(n&2)===0&&r!==null)t:for(;;){if(r===null)return;var g=r.tag;if(g===3||g===4){var M=r.stateNode.containerInfo;if(M===c)break;if(g===4)for(g=r.return;g!==null;){var P=g.tag;if((P===3||P===4)&&g.stateNode.containerInfo===c)return;g=g.return}for(;M!==null;){if(g=we(M),g===null)return;if(P=g.tag,P===5||P===6||P===26||P===27){r=u=g;continue t}M=M.parentNode}}r=r.return}T0(function(){var j=u,rt=$u(a),mt=[];t:{var Y=$0.get(t);if(Y!==void 0){var it=Xl,Ut=t;switch(t){case"keypress":if(Gl(a)===0)break t;case"keydown":case"keyup":it=Fy;break;case"focusin":Ut="focus",it=rf;break;case"focusout":Ut="blur",it=rf;break;case"beforeblur":case"afterblur":it=rf;break;case"click":if(a.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":it=C0;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":it=Ay;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":it=Xy;break;case Z0:case K0:case Q0:it=wy;break;case J0:it=Yy;break;case"scroll":case"scrollend":it=Ey;break;case"wheel":it=jy;break;case"copy":case"cut":case"paste":it=Uy;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":it=D0;break;case"submit":it=Gy;break;case"toggle":case"beforetoggle":it=Zy}var kt=(n&4)!==0,me=!kt&&(t==="scroll"||t==="scrollend"),q=kt?Y!==null?Y+"Capture":null:Y;kt=[];for(var V=j,tt;V!==null;){var pt=V;if(tt=pt.stateNode,pt=pt.tag,pt!==5&&pt!==26&&pt!==27||tt===null||q===null||(pt=yo(V,q),pt!=null&&kt.push($o(V,pt,tt))),me)break;V=V.return}0<kt.length&&(Y=new it(Y,Ut,null,a,rt),mt.push({event:Y,listeners:kt}))}}if((n&7)===0){t:{if(it=t==="mouseover"||t==="pointerover",Y=t==="mouseout"||t==="pointerout",it&&a!==Ju&&(Ut=a.relatedTarget||a.fromElement)&&(we(Ut)||Ut[It]))break t;(Y||it)&&(Ut=rt.window===rt?rt:(it=rt.ownerDocument)?it.defaultView||it.parentWindow:window,Y?(it=a.relatedTarget||a.toElement,Y=j,it=it?we(it):null,it!==null&&(me=f(it),kt=it.tag,it!==me||kt!==5&&kt!==27&&kt!==6)&&(it=null)):(Y=null,it=j),Y!==it&&(kt=C0,pt="onMouseLeave",q="onMouseEnter",V="mouse",(t==="pointerout"||t==="pointerover")&&(kt=D0,pt="onPointerLeave",q="onPointerEnter",V="pointer"),me=Y==null?Ut:Be(Y),tt=it==null?Ut:Be(it),Ut=new kt(pt,V+"leave",Y,a,rt),Ut.target=me,Ut.relatedTarget=tt,pt=null,we(rt)===j&&(kt=new kt(q,V+"enter",it,a,rt),kt.target=tt,kt.relatedTarget=me,pt=kt),me=pt,kt=Y&&it?D(Y,it,eb):null,Y!==null&&Ag(mt,Ut,Y,kt,!1),it!==null&&me!==null&&Ag(mt,me,it,kt,!0)))}t:{if(Y=j?Be(j):window,it=Y.nodeName&&Y.nodeName.toLowerCase(),it==="select"||it==="input"&&Y.type==="file")var Ht=F0;else if(z0(Y))if(B0)Ht=sS;else{Ht=iS;var Ce=nS}else it=Y.nodeName,!it||it.toLowerCase()!=="input"||Y.type!=="checkbox"&&Y.type!=="radio"?j&&Qu(j.elementType)&&(Ht=F0):Ht=aS;if(Ht&&(Ht=Ht(t,j))){I0(mt,Ht,a,rt);break t}Ce&&Ce(t,Y,j)}switch(Ce=j?Be(j):window,t){case"focusin":(z0(Ce)||Ce.contentEditable==="true")&&(lr=Ce,df=j,Co=null);break;case"focusout":Co=df=lr=null;break;case"mousedown":pf=!0;break;case"contextmenu":case"mouseup":case"dragend":pf=!1,j0(mt,a,rt);break;case"selectionchange":if(oS)break;case"keydown":case"keyup":j0(mt,a,rt)}var Zt;if(lf)t:{switch(t){case"compositionstart":var ie="onCompositionStart";break t;case"compositionend":ie="onCompositionEnd";break t;case"compositionupdate":ie="onCompositionUpdate";break t}ie=void 0}else or?O0(t,a)&&(ie="onCompositionEnd"):t==="keydown"&&a.keyCode===229&&(ie="onCompositionStart");ie&&(U0&&a.locale!=="ko"&&(or||ie!=="onCompositionStart"?ie==="onCompositionEnd"&&or&&(Zt=A0()):(Pa=rt,nf="value"in Pa?Pa.value:Pa.textContent,or=!0)),Ce=Yc(j,ie),0<Ce.length&&(ie=new w0(ie,t,null,a,rt),mt.push({event:ie,listeners:Ce}),Zt?ie.data=Zt:(Zt=P0(a),Zt!==null&&(ie.data=Zt)))),(Zt=Qy?Jy(t,a):$y(t,a))&&(ie=Yc(j,"onBeforeInput"),0<ie.length&&(Ce=new w0("onBeforeInput","beforeinput",null,a,rt),mt.push({event:Ce,listeners:ie}),Ce.data=Zt)),QS(mt,t,j,a,rt)}Eg(mt,n)})}function $o(t,n,a){return{instance:t,listener:n,currentTarget:a}}function Yc(t,n){for(var a=n+"Capture",r=[];t!==null;){var c=t,u=c.stateNode;if(c=c.tag,c!==5&&c!==26&&c!==27||u===null||(c=yo(t,a),c!=null&&r.unshift($o(t,c,u)),c=yo(t,n),c!=null&&r.push($o(t,c,u))),t.tag===3)return r;t=t.return}return[]}function eb(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function Ag(t,n,a,r,c){for(var u=n._reactName,g=[];a!==null&&a!==r;){var M=a,P=M.alternate,j=M.stateNode;if(M=M.tag,P!==null&&P===r)break;M!==5&&M!==26&&M!==27||j===null||(P=j,c?(j=yo(a,u),j!=null&&g.unshift($o(a,j,P))):c||(j=yo(a,u),j!=null&&g.push($o(a,j,P)))),a=a.return}g.length!==0&&t.push({event:n,listeners:g})}var nb=/\r\n?/g,ib=/\u0000|\uFFFD/g;function Rg(t){return(typeof t=="string"?t:""+t).replace(nb,`
`).replace(ib,"")}function Cg(t,n){return n=Rg(n),Rg(t)===n}function Ve(t,n,a,r,c,u){switch(a){case"children":if(typeof r=="string")n==="body"||n==="textarea"&&r===""||ar(t,r);else if(typeof r=="number"||typeof r=="bigint")n!=="body"&&ar(t,""+r);else return;break;case"className":Fl(t,"class",r);break;case"tabIndex":Fl(t,"tabindex",r);break;case"dir":case"role":case"viewBox":case"width":case"height":Fl(t,a,r);break;case"style":M0(t,r,u);return;case"data":if(n!=="object"){Fl(t,"data",r);break}case"src":case"href":if(r===""&&(n!=="a"||a!=="href")){t.removeAttribute(a);break}if(r==null||typeof r=="function"||typeof r=="symbol"||typeof r=="boolean"){t.removeAttribute(a);break}r=Bl(r),t.setAttribute(a,r);break;case"action":case"formAction":if(typeof r=="function"){t.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof u=="function"&&(a==="formAction"?(n!=="input"&&Ve(t,n,"name",c.name,c,null),Ve(t,n,"formEncType",c.formEncType,c,null),Ve(t,n,"formMethod",c.formMethod,c,null),Ve(t,n,"formTarget",c.formTarget,c,null)):(Ve(t,n,"encType",c.encType,c,null),Ve(t,n,"method",c.method,c,null),Ve(t,n,"target",c.target,c,null)));if(r==null||typeof r=="symbol"||typeof r=="boolean"){t.removeAttribute(a);break}r=Bl(r),t.setAttribute(a,r);break;case"onClick":r!=null&&(t.onclick=Gi);return;case"onScroll":r!=null&&Te("scroll",t);return;case"onScrollEnd":r!=null&&Te("scrollend",t);return;case"dangerouslySetInnerHTML":if(r!=null){if(typeof r!="object"||!("__html"in r))throw Error(s(61));if(a=r.__html,a!=null){if(c.children!=null)throw Error(s(60));(u!=null?u.__html:void 0)!==a&&(t.innerHTML=a)}}break;case"multiple":t.multiple=r&&typeof r!="function"&&typeof r!="symbol";break;case"muted":t.muted=r&&typeof r!="function"&&typeof r!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(r==null||typeof r=="function"||typeof r=="boolean"||typeof r=="symbol"){t.removeAttribute("xlink:href");break}a=Bl(r),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":r!=null&&typeof r!="function"&&typeof r!="symbol"?t.setAttribute(a,r):t.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"credentialless":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":r&&typeof r!="function"&&typeof r!="symbol"?t.setAttribute(a,""):t.removeAttribute(a);break;case"capture":case"download":r===!0?t.setAttribute(a,""):r!==!1&&r!=null&&typeof r!="function"&&typeof r!="symbol"?t.setAttribute(a,r):t.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":r!=null&&typeof r!="function"&&typeof r!="symbol"&&!isNaN(r)&&1<=r?t.setAttribute(a,r):t.removeAttribute(a);break;case"rowSpan":case"start":r==null||typeof r=="function"||typeof r=="symbol"||isNaN(r)?t.removeAttribute(a):t.setAttribute(a,r);break;case"popover":Te("beforetoggle",t),Te("toggle",t),Il(t,"popover",r);break;case"xlinkActuate":oa(t,"http://www.w3.org/1999/xlink","xlink:actuate",r);break;case"xlinkArcrole":oa(t,"http://www.w3.org/1999/xlink","xlink:arcrole",r);break;case"xlinkRole":oa(t,"http://www.w3.org/1999/xlink","xlink:role",r);break;case"xlinkShow":oa(t,"http://www.w3.org/1999/xlink","xlink:show",r);break;case"xlinkTitle":oa(t,"http://www.w3.org/1999/xlink","xlink:title",r);break;case"xlinkType":oa(t,"http://www.w3.org/1999/xlink","xlink:type",r);break;case"xmlBase":oa(t,"http://www.w3.org/XML/1998/namespace","xml:base",r);break;case"xmlLang":oa(t,"http://www.w3.org/XML/1998/namespace","xml:lang",r);break;case"xmlSpace":oa(t,"http://www.w3.org/XML/1998/namespace","xml:space",r);break;case"is":Il(t,"is",r);break;case"innerText":case"textContent":return;default:if(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")a=by.get(a)||a,Il(t,a,r);else return}ge=!0}function Kh(t,n,a,r,c,u){switch(a){case"style":M0(t,r,u);return;case"dangerouslySetInnerHTML":if(r!=null){if(typeof r!="object"||!("__html"in r))throw Error(s(61));if(a=r.__html,a!=null){if(c.children!=null)throw Error(s(60));(u!=null?u.__html:void 0)!==a&&(t.innerHTML=a)}}break;case"children":if(typeof r=="string")ar(t,r);else if(typeof r=="number"||typeof r=="bigint")ar(t,""+r);else return;break;case"onScroll":r!=null&&Te("scroll",t);return;case"onScrollEnd":r!=null&&Te("scrollend",t);return;case"onClick":r!=null&&(t.onclick=Gi);return;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":return;case"innerText":case"textContent":return;default:if(!Oa.hasOwnProperty(a))t:{if(a[0]==="o"&&a[1]==="n"&&(c=a.endsWith("Capture"),u=a.slice(2,c?a.length-7:void 0),n=t[Ot]||null,n=n!=null?n[a]:null,typeof n=="function"&&t.removeEventListener(u,n,c),typeof r=="function")){typeof n!="function"&&n!==null&&(a in t?t[a]=null:t.hasAttribute(a)&&t.removeAttribute(a)),t.addEventListener(u,r,c);break t}ge=!0,a in t?t[a]=r:r===!0?t.setAttribute(a,""):Il(t,a,r)}return}ge=!0}function On(t,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Te("error",t),Te("load",t);var r=!1,c=!1,u;for(u in a)if(a.hasOwnProperty(u)){var g=a[u];if(g!=null)switch(u){case"src":r=!0;break;case"srcSet":c=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:Ve(t,n,u,g,a,null)}}c&&Ve(t,n,"srcSet",a.srcSet,a,null),r&&Ve(t,n,"src",a.src,a,null);return;case"input":Te("invalid",t);var M=u=g=c=null,P=null,j=null;for(r in a)if(a.hasOwnProperty(r)){var rt=a[r];if(rt!=null)switch(r){case"name":c=rt;break;case"type":g=rt;break;case"checked":P=rt;break;case"defaultChecked":j=rt;break;case"value":u=rt;break;case"defaultValue":M=rt;break;case"children":case"dangerouslySetInnerHTML":if(rt!=null)throw Error(s(137,n));break;default:Ve(t,n,r,rt,a,null)}}v0(t,u,M,P,j,g,c,!1);return;case"select":Te("invalid",t),r=g=u=null;for(c in a)if(a.hasOwnProperty(c)&&(M=a[c],M!=null))switch(c){case"value":u=M;break;case"defaultValue":g=M;break;case"multiple":r=M;default:Ve(t,n,c,M,a,null)}n=u,a=g,t.multiple=!!r,n!=null?ir(t,!!r,n,!1):a!=null&&ir(t,!!r,a,!0);return;case"textarea":Te("invalid",t),u=c=r=null;for(g in a)if(a.hasOwnProperty(g)&&(M=a[g],M!=null))switch(g){case"value":r=M;break;case"defaultValue":c=M;break;case"children":u=M;break;case"dangerouslySetInnerHTML":if(M!=null)throw Error(s(91));break;default:Ve(t,n,g,M,a,null)}S0(t,r,c,u);return;case"option":for(P in a)if(a.hasOwnProperty(P)&&(r=a[P],r!=null))switch(P){case"selected":t.selected=r&&typeof r!="function"&&typeof r!="symbol";break;default:Ve(t,n,P,r,a,null)}return;case"dialog":Te("beforetoggle",t),Te("toggle",t),Te("cancel",t),Te("close",t);break;case"iframe":case"object":Te("load",t);break;case"video":case"audio":for(r=0;r<Jo.length;r++)Te(Jo[r],t);break;case"image":Te("error",t),Te("load",t);break;case"details":Te("toggle",t);break;case"embed":case"source":case"link":Te("error",t),Te("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(j in a)if(a.hasOwnProperty(j)&&(r=a[j],r!=null))switch(j){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:Ve(t,n,j,r,a,null)}return;default:if(Qu(n)){for(rt in a)a.hasOwnProperty(rt)&&(r=a[rt],r!==void 0&&Kh(t,n,rt,r,a,void 0));return}}for(M in a)a.hasOwnProperty(M)&&(r=a[M],r!=null&&Ve(t,n,M,r,a,null))}var ab={};function sb(t,n,a,r){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var c=null,u=null,g=null,M=null,P=null,j=null,rt=null;for(it in a){var mt=a[it];if(a.hasOwnProperty(it)&&mt!=null)switch(it){case"checked":break;case"value":break;case"defaultValue":P=mt;default:r.hasOwnProperty(it)||Ve(t,n,it,null,r,mt)}}for(var Y in r){var it=r[Y];if(mt=a[Y],r.hasOwnProperty(Y)&&(it!=null||mt!=null))switch(Y){case"type":it!==mt&&(ge=!0),u=it;break;case"name":it!==mt&&(ge=!0),c=it;break;case"checked":it!==mt&&(ge=!0),j=it;break;case"defaultChecked":it!==mt&&(ge=!0),rt=it;break;case"value":it!==mt&&(ge=!0),g=it;break;case"defaultValue":it!==mt&&(ge=!0),M=it;break;case"children":case"dangerouslySetInnerHTML":if(it!=null)throw Error(s(137,n));break;default:it!==mt&&Ve(t,n,Y,it,r,mt)}}Zu(t,g,M,P,j,rt,u,c);return;case"select":it=g=M=Y=null;for(u in a)if(P=a[u],a.hasOwnProperty(u)&&P!=null)switch(u){case"value":break;case"multiple":it=P;default:r.hasOwnProperty(u)||Ve(t,n,u,null,r,P)}for(c in r)if(u=r[c],P=a[c],r.hasOwnProperty(c)&&(u!=null||P!=null))switch(c){case"value":u!==P&&(ge=!0),Y=u;break;case"defaultValue":u!==P&&(ge=!0),M=u;break;case"multiple":u!==P&&(ge=!0),g=u;default:u!==P&&Ve(t,n,c,u,r,P)}n=M,a=g,r=it,Y!=null?ir(t,!!a,Y,!1):!!r!=!!a&&(n!=null?ir(t,!!a,n,!0):ir(t,!!a,a?[]:"",!1));return;case"textarea":it=Y=null;for(M in a)if(c=a[M],a.hasOwnProperty(M)&&c!=null&&!r.hasOwnProperty(M))switch(M){case"value":break;case"children":break;default:Ve(t,n,M,null,r,c)}for(g in r)if(c=r[g],u=a[g],r.hasOwnProperty(g)&&(c!=null||u!=null))switch(g){case"value":c!==u&&(ge=!0),Y=c;break;case"defaultValue":c!==u&&(ge=!0),it=c;break;case"children":break;case"dangerouslySetInnerHTML":if(c!=null)throw Error(s(91));break;default:c!==u&&Ve(t,n,g,c,r,u)}y0(t,Y,it);return;case"option":for(var Ut in a)if(Y=a[Ut],a.hasOwnProperty(Ut)&&Y!=null&&!r.hasOwnProperty(Ut))switch(Ut){case"selected":t.selected=!1;break;default:Ve(t,n,Ut,null,r,Y)}for(P in r)if(Y=r[P],it=a[P],r.hasOwnProperty(P)&&Y!==it&&(Y!=null||it!=null))switch(P){case"selected":Y!==it&&(ge=!0),t.selected=Y&&typeof Y!="function"&&typeof Y!="symbol";break;default:Ve(t,n,P,Y,r,it)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var kt in a)Y=a[kt],a.hasOwnProperty(kt)&&Y!=null&&!r.hasOwnProperty(kt)&&Ve(t,n,kt,null,r,Y);for(j in r)if(Y=r[j],it=a[j],r.hasOwnProperty(j)&&Y!==it&&(Y!=null||it!=null))switch(j){case"children":case"dangerouslySetInnerHTML":if(Y!=null)throw Error(s(137,n));break;default:Ve(t,n,j,Y,r,it)}return;default:if(Qu(n)){for(var me in a)Y=a[me],a.hasOwnProperty(me)&&Y!==void 0&&!r.hasOwnProperty(me)&&Kh(t,n,me,void 0,r,Y);for(rt in r)Y=r[rt],it=a[rt],!r.hasOwnProperty(rt)||Y===it||Y===void 0&&it===void 0||Kh(t,n,rt,Y,r,it);return}}for(var q in a)Y=a[q],a.hasOwnProperty(q)&&Y!=null&&!r.hasOwnProperty(q)&&Ve(t,n,q,null,r,Y);for(mt in r)Y=r[mt],it=a[mt],!r.hasOwnProperty(mt)||Y===it||Y==null&&it==null||Ve(t,n,mt,Y,r,it)}function wg(t){switch(t){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function rb(){if(typeof performance.getEntriesByType=="function"){for(var t=0,n=0,a=performance.getEntriesByType("resource"),r=0;r<a.length;r++){var c=a[r],u=c.transferSize,g=c.initiatorType,M=c.duration;if(u&&M&&wg(g)){for(g=0,M=c.responseEnd,r+=1;r<a.length;r++){var P=a[r],j=P.startTime;if(j>M)break;var rt=P.transferSize,mt=P.initiatorType;rt&&wg(mt)&&(P=P.responseEnd,g+=rt*(P<M?1:(M-j)/(P-j)))}if(--r,n+=8*(u+g)/(c.duration/1e3),t++,10<t)break}}if(0<t)return n/t/1e6}return navigator.connection&&(t=navigator.connection.downlink,typeof t=="number")?t:5}var Qh=null,Jh=null;function tl(t){return t.nodeType===9?t:t.ownerDocument}function Dg(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Ug(t,n){if(t===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&n==="foreignObject"?0:t}function Ng(t,n,a,r){return a=tl(a).createElement(t),a[At]=r,a[Ot]=n,On(a,t,n),Le(a),a}function $h(t,n){return t==="textarea"||t==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var td=null;function ob(){var t=window.event;return t&&t.type==="popstate"?t===td?!1:(td=t,!0):(td=null,!1)}var ed=typeof setTimeout=="function"?setTimeout:void 0,lb=typeof clearTimeout=="function"?clearTimeout:void 0,Lg=typeof Promise=="function"?Promise:void 0,Og=typeof requestAnimationFrame=="function"?requestAnimationFrame:ed,cb=typeof queueMicrotask=="function"?queueMicrotask:typeof Lg<"u"?function(t){return Lg.resolve(null).then(t).catch(ub)}:ed;function ub(t){setTimeout(function(){throw t})}function es(t){return t==="head"}function Pg(t,n){var a=n,r=0;do{var c=a.nextSibling;if(t.removeChild(a),c&&c.nodeType===8)if(a=c.data,a==="/$"||a==="/&"){if(r===0){t.removeChild(c),Gr(n);return}r--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")r++;else if(a==="html")cd(t.ownerDocument.documentElement);else if(a==="head"){a=t.ownerDocument.head,cd(a);for(var u=a.firstChild;u;){var g=u.nextSibling,M=u.nodeName;u[Ue]||M==="SCRIPT"||M==="STYLE"||M==="LINK"&&u.rel.toLowerCase()==="stylesheet"||a.removeChild(u),u=g}}else a==="body"&&cd(t.ownerDocument.body);a=c}while(a);Gr(n)}function zg(t,n){var a=t;t=0;do{var r=a.nextSibling;if(a.nodeType===1?n?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(n?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),r&&r.nodeType===8)if(a=r.data,a==="/$"){if(t===0)break;t--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||t++;a=r}while(a)}function Ig(t,n,a){if(n=CSS.escape(n)!==n?"r-"+btoa(n).replace(/=/g,""):n,t.style.viewTransitionName=n,a!=null&&(t.style.viewTransitionClass=a),a=getComputedStyle(t),a.display==="inline"){if(n=t.getClientRects(),n.length===1)var r=1;else for(var c=r=0;c<n.length;c++){var u=n[c];0<u.width&&0<u.height&&r++}r===1&&(t=t.style,t.display=n.length===1?"inline-block":"block",t.marginTop="-"+a.paddingTop,t.marginBottom="-"+a.paddingBottom)}}function Fg(t,n){t=t.style,n=n.style;var a=n!=null?n.hasOwnProperty("viewTransitionName")?n.viewTransitionName:n.hasOwnProperty("view-transition-name")?n["view-transition-name"]:null:null;t.viewTransitionName=a==null||typeof a=="boolean"?"":(""+a).trim(),a=n!=null?n.hasOwnProperty("viewTransitionClass")?n.viewTransitionClass:n.hasOwnProperty("view-transition-class")?n["view-transition-class"]:null:null,t.viewTransitionClass=a==null||typeof a=="boolean"?"":(""+a).trim(),t.display==="inline-block"&&(n==null?t.display=t.margin="":(a=n.display,t.display=a==null||typeof a=="boolean"?"":a,a=n.margin,a!=null?t.margin=a:(a=n.hasOwnProperty("marginTop")?n.marginTop:n["margin-top"],t.marginTop=a==null||typeof a=="boolean"?"":a,n=n.hasOwnProperty("marginBottom")?n.marginBottom:n["margin-bottom"],t.marginBottom=n==null||typeof n=="boolean"?"":n)))}function fb(t,n,a){return a=a.ownerDocument.defaultView,{rect:t,abs:n.position==="absolute"||n.position==="fixed",clip:n.clipPath!=="none"||n.overflow!=="visible"||n.filter!=="none"||n.mask!=="none"||n.mask!=="none"||n.borderRadius!=="0px",view:0<=t.bottom&&0<=t.right&&t.top<=a.innerHeight&&t.left<=a.innerWidth}}function nd(t){var n=t.getBoundingClientRect(),a=getComputedStyle(t);return fb(n,a,t)}function hb(t){return t.documentElement.clientHeight}function db(t){this.addEventListener("load",t),this.addEventListener("error",t)}function pb(t,n,a,r,c,u,g,M,P){var j=n.nodeType===9?n:n.ownerDocument;try{var rt=j.startViewTransition({update:function(){var Y=j.defaultView,it=Y.navigation&&Y.navigation.transition,Ut=j.fonts.status;r();var kt=[];if(Ut==="loaded"&&(hb(j),j.fonts.status==="loading"&&kt.push(j.fonts.ready)),Ut=kt.length,t!==null)for(var me=t.suspenseyImages,q=0,V=0;V<me.length;V++){var tt=me[V];if(!tt.complete){var pt=tt.getBoundingClientRect();if(0<pt.bottom&&0<pt.right&&pt.top<Y.innerHeight&&pt.left<Y.innerWidth){if(q+=s_(tt),q>Wc){kt.length=Ut;break}tt=new Promise(db.bind(tt)),kt.push(tt)}}}if(0<kt.length)return Y=Promise.race([Promise.all(kt),new Promise(function(Ht){return setTimeout(Ht,500)})]).then(c,c),(it?Promise.allSettled([it.finished,Y]):Y).then(u,u);if(c(),it)return it.finished.then(u,u);u()},types:a});j.__reactViewTransition=rt;var mt=[];return rt.ready.then(function(){for(var Y=j.documentElement.getAnimations({subtree:!0}),it=0;it<Y.length;it++){var Ut=Y[it],kt=Ut.effect,me=kt.pseudoElement;if(me!=null&&me.startsWith("::view-transition")){mt.push(Ut),Ut=kt.getKeyframes();for(var q=me=void 0,V=!0,tt=0;tt<Ut.length;tt++){var pt=Ut[tt],Ht=pt.width;if(me===void 0)me=Ht;else if(me!==Ht){V=!1;break}if(Ht=pt.height,q===void 0)q=Ht;else if(q!==Ht){V=!1;break}delete pt.width,delete pt.height,pt.transform==="none"&&delete pt.transform}V&&me!==void 0&&q!==void 0&&(kt.setKeyframes(Ut),V=getComputedStyle(kt.target,kt.pseudoElement),V.width!==me||V.height!==q)&&(V=Ut[0],V.width=me,V.height=q,V=Ut[Ut.length-1],V.width=me,V.height=q,kt.setKeyframes(Ut))}}g()},function(Y){j.__reactViewTransition===rt&&(j.__reactViewTransition=null);try{if(typeof Y=="object"&&Y!==null)switch(Y.name){case"InvalidStateError":(Y.message==="View transition was skipped because document visibility state is hidden."||Y.message==="Skipping view transition because document visibility state has become hidden."||Y.message==="Skipping view transition because viewport size changed."||Y.message==="Transition was aborted because of invalid state")&&(Y=null)}Y!==null&&P(Y)}finally{r(),c(),g()}}),rt.finished.finally(function(){for(var Y=0;Y<mt.length;Y++)mt[Y].cancel();j.__reactViewTransition===rt&&(j.__reactViewTransition=null),M()}),rt}catch{return r(),c(),g(),null}}function Vs(t,n){this._scope=document.documentElement,this._selector="::view-transition-"+t+"("+n+")"}Vs.prototype.animate=function(t,n){return n=typeof n=="number"?{duration:n}:O({},n),n.pseudoElement=this._selector,this._scope.animate(t,n)},Vs.prototype.getAnimations=function(){for(var t=this._scope,n=this._selector,a=t.getAnimations({subtree:!0}),r=[],c=0;c<a.length;c++){var u=a[c].effect;u!==null&&u.target===t&&u.pseudoElement===n&&r.push(a[c])}return r},Vs.prototype.getComputedStyle=function(){return getComputedStyle(this._scope,this._selector)};function Bg(t){return{name:t,group:new Vs("group",t),imagePair:new Vs("image-pair",t),old:new Vs("old",t),new:new Vs("new",t)}}function ui(t){this._fragmentFiber=t,this._observers=this._eventListeners=null}ui.prototype.addEventListener=function(t,n,a){var r=null,c=null;if(!(a!=null&&typeof a!="boolean"&&(r=a.signal||null,r!==null&&r.aborted))){this._eventListeners===null&&(this._eventListeners=[]);var u=this._eventListeners;if(Gg(u,t,n,a)===-1){var g=this,M=n;a!=null&&typeof a!="boolean"&&a.once===!0&&(M=function(P){g.removeEventListener(t,n,a),typeof n=="function"?n.call(this,P):n.handleEvent(P)}),r!==null&&(c=g.removeEventListener.bind(g,t,n,a),r.addEventListener("abort",c,{once:!0}),c=r.removeEventListener.bind(r,"abort",c)),r=Pr(a),u.push({type:t,listener:n,optionsOrUseCapture:a,attachedListener:M,cleanup:c}),p(this._fragmentFiber.child,!1,mb,t,M,r)}this._eventListeners=u}};function mb(t,n,a,r){return S(t).addEventListener(n,a,r),!1}ui.prototype.removeEventListener=function(t,n,a){var r=this._eventListeners;if(r!==null&&(n=Gg(r,t,n,a),n!==-1)){var c=r[n];a=c.attachedListener;var u=c.cleanup;c=Pr(c.optionsOrUseCapture),p(this._fragmentFiber.child,!1,xb,t,a,c),r.splice(n,1),u!==null&&u()}};function xb(t,n,a,r){return S(t).removeEventListener(n,a,r),!1}function Pr(t){return t!=null&&typeof t!="boolean"&&(t.once===!0||t.signal instanceof AbortSignal)?{capture:t.capture,passive:t.passive}:t}function Hg(t){return t==null?"c=0":typeof t=="boolean"?"c="+(t?"1":"0"):"c="+(t.capture?"1":"0")}function Gg(t,n,a,r){if(t.length===0)return-1;r=Hg(r);for(var c=0;c<t.length;c++){var u=t[c];if(u.type===n&&u.listener===a&&Hg(u.optionsOrUseCapture)===r)return c}return-1}ui.prototype.dispatchEvent=function(t){var n=y(this._fragmentFiber);if(n===null)return!0;n=S(n);var a=this._eventListeners;if(a!==null&&0<a.length||!t.bubbles){var r=n.nodeType===9?n.createComment(""):document.createTextNode("");if(a)for(var c=0;c<a.length;c++){var u=a[c];r.addEventListener(u.type,u.attachedListener,Pr(u.optionsOrUseCapture))}if(n.appendChild(r),t=r.dispatchEvent(t),a)for(c=0;c<a.length;c++)u=a[c],r.removeEventListener(u.type,u.attachedListener,Pr(u.optionsOrUseCapture));return n.removeChild(r),t}return n.dispatchEvent(t)},ui.prototype.focus=function(t){p(this._fragmentFiber.child,!0,Vg,t,void 0,void 0)};function Vg(t,n){return t.tag===6?!1:(t=S(t),Cb(t,n))}ui.prototype.focusLast=function(t){var n=[];p(this._fragmentFiber.child,!0,id,n,void 0,void 0);for(var a=n.length-1;0<=a&&!Vg(n[a],t);a--);};function id(t,n){return n.push(t),!1}ui.prototype.blur=function(){var t=y(this._fragmentFiber);t!==null&&(t=S(t),t=tl(t).activeElement,t!==null&&p(this._fragmentFiber.child,!1,gb,t,void 0,void 0))};function gb(t,n){return t.tag===6?!1:(t=S(t),t===n||t.contains(n)?(n.blur(),!0):!1)}ui.prototype.observeUsing=function(t){this._observers===null&&(this._observers=new Set),this._observers.add(t),p(this._fragmentFiber.child,!1,_b,t,void 0,void 0)};function _b(t,n){return t.tag===6||(t=S(t),n.observe(t)),!1}ui.prototype.unobserveUsing=function(t){var n=this._observers;if(n!==null&&n.has(t)){n.delete(t),p(this._fragmentFiber.child,!1,vb,t,void 0,void 0);for(var a=n=0;a<Pi.length;a++){var r=Pi[a];r.fragmentInstance===this&&r.observer===t?t.unobserve(r.instance):Pi[n++]=r}Pi.length=n}};function vb(t,n){return t.tag===6||(t=S(t),n.unobserve(t)),!1}var Pi=[],ad=!1;function yb(t,n,a){Pi.push({fragmentInstance:t,observer:n,instance:a}),ad||(ad=!0,wb(function(){ad=!1;var r=Pi;Pi=[];for(var c=0;c<r.length;c++){var u=r[c];u.observer.unobserve(u.instance)}}))}ui.prototype.getClientRects=function(){var t=[];return p(this._fragmentFiber.child,!1,Sb,t,void 0,void 0),t};function Sb(t,n){if(t.tag===6){t=t.stateNode;var a=t.ownerDocument.createRange();a.selectNodeContents(t),n.push.apply(n,a.getClientRects())}else t=S(t),n.push.apply(n,t.getClientRects());return!1}ui.prototype.getRootNode=function(t){var n=y(this._fragmentFiber);return n===null?this:S(n).getRootNode(t)},ui.prototype.compareDocumentPosition=function(t){var n=y(this._fragmentFiber);if(n===null)return Node.DOCUMENT_POSITION_DISCONNECTED;var a=[];p(this._fragmentFiber.child,!1,id,a,void 0,void 0);var r=S(n);if(a.length===0){if(a=r,b(this._fragmentFiber)){t:{for(n=this._fragmentFiber.return;n!==null;){if(n.tag===4){n=n.stateNode.containerInfo;break t}if(n.tag===3||n.tag===5||n.tag===27)break;n=n.return}n=null}n!=null&&(a=n)}n=this._fragmentFiber;var c=r=a.compareDocumentPosition(t);return a===t?c=Node.DOCUMENT_POSITION_CONTAINS:r&Node.DOCUMENT_POSITION_CONTAINED_BY&&(a=E(n)[1],a===null?c=Node.DOCUMENT_POSITION_PRECEDING:(t=S(a).compareDocumentPosition(t),c=t===0||t&Node.DOCUMENT_POSITION_FOLLOWING?Node.DOCUMENT_POSITION_FOLLOWING:Node.DOCUMENT_POSITION_PRECEDING)),c|=Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC}n=S(a[0]),c=S(a[a.length-1]);var u=b(this._fragmentFiber)?n.parentElement:r;if(u==null)return Node.DOCUMENT_POSITION_DISCONNECTED;r=u.compareDocumentPosition(n)&Node.DOCUMENT_POSITION_CONTAINED_BY,u=u.compareDocumentPosition(c)&Node.DOCUMENT_POSITION_CONTAINED_BY;var g=n.compareDocumentPosition(t),M=c.compareDocumentPosition(t),P=g&Node.DOCUMENT_POSITION_CONTAINED_BY||M&Node.DOCUMENT_POSITION_CONTAINED_BY;return M=r&&u&&g&Node.DOCUMENT_POSITION_FOLLOWING&&M&Node.DOCUMENT_POSITION_PRECEDING,n=r&&n===t||u&&c===t||P||M?Node.DOCUMENT_POSITION_CONTAINED_BY:!r&&n===t||!u&&c===t?Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC:g,n&Node.DOCUMENT_POSITION_DISCONNECTED||n&Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC||bb(n,this._fragmentFiber,a[0],a[a.length-1],t)?n:Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC};function bb(t,n,a,r,c){var u=we(c);if(t&Node.DOCUMENT_POSITION_CONTAINED_BY){if(a=!!u)t:{for(;u!==null;){if(u.tag===7&&(u===n||u.alternate===n)){a=!0;break t}u=u.return}a=!1}return a}if(t&Node.DOCUMENT_POSITION_CONTAINS){if(u===null)return u=c.ownerDocument,c===u||c===u.documentElement||c===u.body;t:{for(u=n,n=y(n);u!==null;){if(!(u.tag!==5&&u.tag!==3&&u.tag!==27||u!==n&&u.alternate!==n)){u=!0;break t}u=u.return}u=!1}return u}return t&Node.DOCUMENT_POSITION_PRECEDING?((n=!!u)&&!(n=u===a)&&(n=D(a,u,G),n===null?n=!1:(p(n,!0,L,u,a),u=v,v=null,n=u!==null)),n):t&Node.DOCUMENT_POSITION_FOLLOWING?((n=!!u)&&!(n=u===r)&&(n=D(r,u,G),n===null?n=!1:(p(n,!0,z,u,r),u=v,N=v=null,n=u!==null)),n):!1}function Xg(t,n){var a=t.ownerDocument.createRange();a.selectNodeContents(t),t=a.getBoundingClientRect(),window.scrollTo(window.scrollX+t.left,n?window.scrollY+t.top:window.scrollY+t.bottom-window.innerHeight)}ui.prototype.scrollIntoView=function(t){if(typeof t=="object")throw Error(s(566));var n=[];p(this._fragmentFiber.child,!1,id,n,void 0,void 0);var a=t!==!1;if(n.length===0){var r=E(this._fragmentFiber);if(r=a?r[1]||r[0]||y(this._fragmentFiber):r[0]||r[1],r===null)return;if(r.tag===6){t=S(r),Xg(t,a);return}if(r=S(r),r.nodeType!==9){if(r.nodeType===11){a="host"in r?r.host:null,a!==null&&a.scrollIntoView(t);return}r.scrollIntoView(t)}}for(r=a?n.length-1:0;r!==(a?-1:n.length);){var c=n[r];c.tag===6?(c=S(c),Xg(c,a)):S(c).scrollIntoView(t),r+=a?-1:1}};function Mb(t,n){return t=S(t),kg(t,n),!1}function kg(t,n){t.reactFragments==null&&(t.reactFragments=new Set),t.reactFragments.add(n)}function Yg(t,n){var a=n._eventListeners;if(a!==null)for(var r=0;r<a.length;r++){var c=a[r];t.addEventListener(c.type,c.attachedListener,Pr(c.optionsOrUseCapture))}t.nodeType!==3&&(a=n._observers,a!==null&&a.forEach(function(u){for(var g=0,M=0;M<Pi.length;M++){var P=Pi[M];(P.fragmentInstance!==n||P.observer!==u||P.instance!==t)&&(Pi[g++]=P)}Pi.length=g,u.observe(t)}),kg(t,n))}function Eb(t,n){var a=n._eventListeners;if(a!==null)for(var r=0;r<a.length;r++){var c=a[r];t.removeEventListener(c.type,c.attachedListener,Pr(c.optionsOrUseCapture))}t.nodeType!==3&&(a=n._observers,a!==null&&a.forEach(function(u){typeof u.rootMargin=="string"?yb(n,u,t):u.unobserve(t)}),t.reactFragments!=null&&t.reactFragments.delete(n))}function sd(t){var n=t.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":sd(a),Ke(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}t.removeChild(a)}}function Tb(t,n,a,r){for(;t.nodeType===1;){var c=a;if(t.nodeName.toLowerCase()!==n.toLowerCase()){if(!r&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(r){if(!t[Ue])switch(n){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(u=t.getAttribute("rel"),u==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(u!==c.rel||t.getAttribute("href")!==(c.href==null||c.href===""?null:c.href)||t.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin)||t.getAttribute("title")!==(c.title==null?null:c.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(u=t.getAttribute("src"),(u!==(c.src==null?null:c.src)||t.getAttribute("type")!==(c.type==null?null:c.type)||t.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin))&&u&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(n==="input"&&t.type==="hidden"){var u=c.name==null?null:""+c.name;if(c.type==="hidden"&&t.getAttribute("name")===u)return t}else return t;if(t=Ei(t.nextSibling),t===null)break}return null}function Ab(t,n,a){if(n==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!a||(t=Ei(t.nextSibling),t===null))return null;return t}function qg(t,n){for(;t.nodeType!==8;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!n||(t=Ei(t.nextSibling),t===null))return null;return t}function rd(t){return t.data==="$?"||t.data==="$~"}function od(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState!=="loading"}function Rb(t,n){var a=t.ownerDocument;if(t.data==="$~")t._reactRetry=n;else if(t.data!=="$?"||a.readyState!=="loading")n();else{var r=function(){n(),a.removeEventListener("DOMContentLoaded",r)};a.addEventListener("DOMContentLoaded",r),t._reactRetry=r}}function Ei(t){for(;t!=null;t=t.nextSibling){var n=t.nodeType;if(n===1||n===3)break;if(n===8){if(n=t.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return t}var ld=null;function jg(t){t=t.nextSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="/$"||a==="/&"){if(n===0)return Ei(t.nextSibling);n--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||n++}t=t.nextSibling}return null}function Wg(t){t=t.previousSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(n===0)return t;n--}else a!=="/$"&&a!=="/&"||n++}t=t.previousSibling}return null}function Cb(t,n){function a(){r=!0}if(t.ownerDocument.activeElement===t)return!0;var r=!1;try{t.ownerDocument.addEventListener("focus",a,!0),(t.focus||HTMLElement.prototype.focus).call(t,n)}finally{t.ownerDocument.removeEventListener("focus",a,!0)}return r}function wb(t){Og(function(){Og(function(n){return t(n)})})}function Zg(t,n,a){switch(n=tl(a),t){case"html":if(t=n.documentElement,!t)throw Error(s(452));return t;case"head":if(t=n.head,!t)throw Error(s(453));return t;case"body":if(t=n.body,!t)throw Error(s(454));return t;default:throw Error(s(451))}}function Kg(t,n,a){for(var r in a){var c=a[r];a.hasOwnProperty(r)&&c!=null&&Ve(t,n,r,null,ab,c)}a.dangerouslySetInnerHTML!=null&&(t.textContent=""),t.onclick===Gi&&(t.onclick=null),Ke(t)}function cd(t){for(var n=t.attributes;n.length;)t.removeAttributeNode(n[0]);Ke(t)}var Ti=new Map,Qg=new Set;function el(t){if(typeof t.getRootNode=="function"){var n=t.getRootNode();if(n.nodeType===9||n.nodeType===11)return n}return t.nodeType===9?t:t.ownerDocument}var ya=Gt.d;Gt.d={f:Db,r:Ub,D:Nb,C:Lb,L:Ob,m:Pb,X:Ib,S:zb,M:Fb};function Db(){var t=ya.f(),n=Bc();return t||n}function Ub(t){var n=Wt(t);n!==null&&n.tag===5&&n.type==="form"?$m(n):ya.r(t)}var zr=typeof document>"u"?null:document;function Jg(t,n,a){var r=zr;if(r&&typeof n=="string"&&n){var c=gi(n);c='link[rel="'+t+'"][href="'+c+'"]',typeof a=="string"&&(c+='[crossorigin="'+a+'"]'),Qg.has(c)||(Qg.add(c),t={rel:t,crossOrigin:a,href:n},r.querySelector(c)===null&&(n=r.createElement("link"),On(n,"link",t),Le(n),r.head.appendChild(n)))}}function Nb(t){ya.D(t),Jg("dns-prefetch",t,null)}function Lb(t,n){ya.C(t,n),Jg("preconnect",t,n)}function Ob(t,n,a){ya.L(t,n,a);var r=zr;if(r&&t&&n){var c='link[rel="preload"][as="'+gi(n)+'"]';n==="image"&&a&&a.imageSrcSet?(c+='[imagesrcset="'+gi(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(c+='[imagesizes="'+gi(a.imageSizes)+'"]')):c+='[href="'+gi(t)+'"]';var u=c;switch(n){case"style":u=Ir(t);break;case"script":u=Fr(t)}if(!(Ti.has(u)||(t=O({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:t,as:n},a),Ti.set(u,t),r.querySelector(c)!==null||n==="style"&&r.querySelector(nl(u))||n==="script"&&r.querySelector(il(u))))){var g=r.createElement("link");On(g,"link",t),n==="style"&&(g[Ze]=!0,g.onload=g.onerror=function(){ra(g)}),Le(g),r.head.appendChild(g)}}}function Pb(t,n){ya.m(t,n);var a=zr;if(a&&t){var r=n&&typeof n.as=="string"?n.as:"script",c='link[rel="modulepreload"][as="'+gi(r)+'"][href="'+gi(t)+'"]',u=c;switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":u=Fr(t)}if(!Ti.has(u)&&(t=O({rel:"modulepreload",href:t},n),Ti.set(u,t),a.querySelector(c)===null)){switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(il(u)))return}r=a.createElement("link"),On(r,"link",t),Le(r),a.head.appendChild(r)}}}function zb(t,n,a){ya.S(t,n,a);var r=zr;if(r&&t){var c=ye(r).hoistableStyles,u=Ir(t);n=n||"default";var g=c.get(u);if(!g){var M={loading:0,preload:null};if(g=r.querySelector(nl(u)))M.loading=5;else{t=O({rel:"stylesheet",href:t,"data-precedence":n},a),(a=Ti.get(u))&&ud(t,a);var P=g=r.createElement("link");Le(P),On(P,"link",t),P._p=new Promise(function(j,rt){P.onload=j,P.onerror=rt}),P.addEventListener("load",function(){M.loading|=1}),P.addEventListener("error",function(){M.loading|=2}),M.loading|=4,qc(g,n,r)}g={type:"stylesheet",instance:g,count:1,state:M},c.set(u,g)}}}function Ib(t,n){ya.X(t,n);var a=zr;if(a&&t){var r=ye(a).hoistableScripts,c=Fr(t),u=r.get(c);u||(u=a.querySelector(il(c)),u||(t=O({src:t,async:!0},n),(n=Ti.get(c))&&fd(t,n),u=a.createElement("script"),Le(u),On(u,"link",t),a.head.appendChild(u)),u={type:"script",instance:u,count:1,state:null},r.set(c,u))}}function Fb(t,n){ya.M(t,n);var a=zr;if(a&&t){var r=ye(a).hoistableScripts,c=Fr(t),u=r.get(c);u||(u=a.querySelector(il(c)),u||(t=O({src:t,async:!0,type:"module"},n),(n=Ti.get(c))&&fd(t,n),u=a.createElement("script"),Le(u),On(u,"link",t),a.head.appendChild(u)),u={type:"script",instance:u,count:1,state:null},r.set(c,u))}}function $g(t,n,a,r){var c=(c=qt.current)?el(c):null;if(!c)throw Error(s(446));switch(t){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(a=Ir(a.href),n=ye(c).hoistableStyles,r=n.get(a),r||(r={type:"style",instance:null,count:0,state:null},n.set(a,r)),r):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){t=Ir(a.href);var u=ye(c).hoistableStyles,g=u.get(t);if(g||(c=c.ownerDocument||c,g={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},u.set(t,g),(u=c.querySelector(nl(t)))?u._p||(g.instance=u,g.state.loading=5):(u=Ti.get(t),u||(u={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},Ti.set(t,u)),Bb(c,t,u,g.state))),n&&r===null)throw Error(s(528,""));return g}if(n&&r!==null)throw Error(s(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(a=Fr(a),n=ye(c).hoistableScripts,r=n.get(a),r||(r={type:"script",instance:null,count:0,state:null},n.set(a,r)),r):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,t))}}function Ir(t){return'href="'+gi(t)+'"'}function nl(t){return'link[rel="stylesheet"]['+t+"]"}function t_(t){return O({},t,{"data-precedence":t.precedence,precedence:null})}function Bb(t,n,a,r){if(n=t.querySelector('link[rel="preload"][as="style"]['+n+"]")){if(n[Ze]!==!0){r.loading=1;return}}else n=t.createElement("link"),n[Ze]=!0,n.onload=n.onerror=ra.bind(null,n),On(n,"link",a),Le(n),t.head.appendChild(n);r.preload=n,n.addEventListener("load",function(){return r.loading|=1}),n.addEventListener("error",function(){return r.loading|=2})}function Fr(t){return'[src="'+gi(t)+'"]'}function il(t){return"script[async]"+t}function e_(t,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var r=t.querySelector('style[data-href~="'+gi(a.href)+'"]');if(r)return n.instance=r,Le(r),r;var c=O({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return r=(t.ownerDocument||t).createElement("style"),Le(r),On(r,"style",c),qc(r,a.precedence,t),n.instance=r;case"stylesheet":c=Ir(a.href);var u=t.querySelector(nl(c));if(u)return n.state.loading|=4,n.instance=u,Le(u),u;r=t_(a),(c=Ti.get(c))&&ud(r,c),u=(t.ownerDocument||t).createElement("link"),Le(u);var g=u;return g._p=new Promise(function(M,P){g.onload=M,g.onerror=P}),On(u,"link",r),n.state.loading|=4,qc(u,a.precedence,t),n.instance=u;case"script":return u=Fr(a.src),(c=t.querySelector(il(u)))?(n.instance=c,Le(c),c):(r=a,(c=Ti.get(u))&&(r=O({},a),fd(r,c)),t=t.ownerDocument||t,c=t.createElement("script"),Le(c),On(c,"link",r),t.head.appendChild(c),n.instance=c);case"void":return null;default:throw Error(s(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(r=n.instance,n.state.loading|=4,qc(r,a.precedence,t));return n.instance}function qc(t,n,a){for(var r=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),c=r.length?r[r.length-1]:null,u=c,g=0;g<r.length;g++){var M=r[g];if(M.dataset.precedence===n)u=M;else if(u!==c)break}u?u.parentNode.insertBefore(t,u.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(t,n.firstChild))}function ud(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.title==null&&(t.title=n.title)}function fd(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.integrity==null&&(t.integrity=n.integrity)}var jc=null;function n_(t,n,a){if(jc===null){var r=new Map,c=jc=new Map;c.set(a,r)}else c=jc,r=c.get(a),r||(r=new Map,c.set(a,r));if(r.has(t))return r;for(r.set(t,null),a=a.getElementsByTagName(t),c=0;c<a.length;c++){var u=a[c];if(!(u[Ue]||u[At]||t==="link"&&u.getAttribute("rel")==="stylesheet")&&u.namespaceURI!=="http://www.w3.org/2000/svg"){var g=u.getAttribute(n)||"";g=t+g;var M=r.get(g);M?M.push(u):r.set(g,[u])}}return r}function hd(t,n,a){t=t.ownerDocument||t,t.head.insertBefore(a,n==="title"?t.querySelector("head > title"):null)}function Hb(t,n,a){if(a===1||n.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return t=n.disabled,typeof n.precedence=="string"&&t==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function i_(t,n){return t==="img"&&n.src!=null&&n.src!==""&&n.onLoad==null&&n.loading!=="lazy"}function a_(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}function s_(t){return(t.width||100)*(t.height||100)*(typeof devicePixelRatio=="number"?devicePixelRatio:1)*.25}function r_(t,n){typeof n.decode=="function"&&(t.imgCount++,n.complete||(t.imgBytes+=s_(n),t.suspenseyImages.push(n)),t=Xb.bind(t),n.decode().then(t,t))}function Gb(t,n,a,r){if(a.type==="stylesheet"&&(typeof r.media!="string"||matchMedia(r.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var c=Ir(r.href),u=n.querySelector(nl(c));if(u){n=u._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(t.count++,t=al.bind(t),n.then(t,t)),a.state.loading|=4,a.instance=u,Le(u);return}u=n.ownerDocument||n,r=t_(r),(c=Ti.get(c))&&ud(r,c),u=u.createElement("link"),Le(u);var g=u;g._p=new Promise(function(M,P){g.onload=M,g.onerror=P}),On(u,"link",r),a.instance=u}t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(a,n),(n=a.state.preload)&&(a.state.loading&3)===0&&(t.count++,a=al.bind(t),n.addEventListener("load",a),n.addEventListener("error",a))}}var Wc=0;function Vb(t,n){return t.stylesheets&&t.count===0&&Kc(t,t.stylesheets),0<t.count||0<t.imgCount?function(a){var r=setTimeout(function(){if(t.stylesheets&&Kc(t,t.stylesheets),t.unsuspend){var u=t.unsuspend;t.unsuspend=null,u()}},6e4+n);0<t.imgBytes&&Wc===0&&(Wc=62500*rb());var c=setTimeout(function(){if(t.waitingForImages=!1,t.count===0&&(t.stylesheets&&Kc(t,t.stylesheets),t.unsuspend)){var u=t.unsuspend;t.unsuspend=null,u()}},(t.imgBytes>Wc?50:800)+n);return t.unsuspend=a,function(){t.unsuspend=null,clearTimeout(r),clearTimeout(c)}}:null}function o_(t){if(t.count===0&&(t.imgCount===0||!t.waitingForImages)){if(t.stylesheets)Kc(t,t.stylesheets);else if(t.unsuspend){var n=t.unsuspend;t.unsuspend=null,n()}}}function al(){this.count--,o_(this)}function Xb(){this.imgCount--,o_(this)}var Zc=null;function Kc(t,n){t.stylesheets=null,t.unsuspend!==null&&(t.count++,Zc=new Map,n.forEach(kb,t),Zc=null,al.call(t))}function kb(t,n){if(!(n.state.loading&4)){var a=Zc.get(t);if(a)var r=a.get(null);else{a=new Map,Zc.set(t,a);for(var c=t.querySelectorAll("link[data-precedence],style[data-precedence]"),u=0;u<c.length;u++){var g=c[u];(g.nodeName==="LINK"||g.getAttribute("media")!=="not all")&&(a.set(g.dataset.precedence,g),r=g)}r&&a.set(null,r)}c=n.instance,g=c.getAttribute("data-precedence"),u=a.get(g)||r,u===r&&a.set(null,c),a.set(g,c),this.count++,r=al.bind(this),c.addEventListener("load",r),c.addEventListener("error",r),u?u.parentNode.insertBefore(c,u.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(c,t.firstChild)),n.state.loading|=4}}var Br={$$typeof:ot,Provider:null,Consumer:null,_currentValue:le,_currentValue2:le,_threadCount:0};function Yb(t,n,a,r,c,u,g,M,P){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=_o(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=_o(0),this.hiddenUpdates=_o(null),this.identifierPrefix=r,this.onUncaughtError=c,this.onCaughtError=u,this.onRecoverableError=g,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=P,this.transitionTypes=null,this.incompleteTransitions=new Map}function l_(t,n,a,r,c,u,g,M,P,j,rt,mt){return t=new Yb(t,n,a,g,P,j,rt,mt,M),n=1,u===!0&&(n|=24),u=Kn(3,null,null,n),t.current=u,u.stateNode=t,n=Rf(),n.refCount++,t.pooledCache=n,n.refCount++,u.memoizedState={element:r,isDehydrated:a,cache:n},Uf(u),t}function c_(t){return t?(t=fr,t):fr}function u_(t,n,a,r,c,u){c=c_(c),r.context===null?r.context=c:r.pendingContext=c,r=Xa(n),r.payload={element:a},u=u===void 0?null:u,u!==null&&(r.callback=u),a=ka(t,r,n),a!==null&&(ti(a,t,n),Po(a,t,n))}function f_(t,n){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var a=t.retryLane;t.retryLane=a!==0&&a<n?a:n}}function dd(t,n){f_(t,n),(t=t.alternate)&&f_(t,n)}function h_(t){if(t.tag===13||t.tag===31){var n=Ts(t,67108864);n!==null&&ti(n,t,67108864),dd(t,67108864)}}function d_(t){if(t.tag===13||t.tag===31){var n=ci();n=W(n);var a=Ts(t,n);a!==null&&ti(a,t,n),dd(t,n)}}var Hr=!0;function qb(t,n,a,r){var c=Mt.T;Mt.T=null;var u=Gt.p;try{Gt.p=2,pd(t,n,a,r)}finally{Gt.p=u,Mt.T=c}}function jb(t,n,a,r){var c=Mt.T;Mt.T=null;var u=Gt.p;try{Gt.p=8,pd(t,n,a,r)}finally{Gt.p=u,Mt.T=c}}function pd(t,n,a,r){if(Hr){var c=md(r);if(c===null)Zh(t,n,r,Qc,a),m_(t,r);else if(Zb(c,t,n,a,r))r.stopPropagation();else if(m_(t,r),n&4&&-1<Wb.indexOf(t)){for(;c!==null;){var u=Wt(c);if(u!==null)switch(u.tag){case 3:if(u=u.stateNode,u.current.memoizedState.isDehydrated){var g=xi(u.pendingLanes);if(g!==0){var M=u;for(M.pendingLanes|=2,M.entangledLanes|=2;g;){var P=1<<31-Gn(g);M.entanglements[1]|=P,g&=~P}Qi(u),(ze&6)===0&&(zc=F()+500,Qo(0))}}break;case 31:case 13:M=Ts(u,2),M!==null&&ti(M,u,2),Bc(),dd(u,2)}if(u=md(r),u===null&&Zh(t,n,r,Qc,a),u===c)break;c=u}c!==null&&r.stopPropagation()}else Zh(t,n,r,null,a)}}function md(t){return t=$u(t),xd(t)}var Qc=null;function xd(t){if(Qc=null,t=we(t),t!==null){var n=f(t);if(n===null)t=null;else{var a=n.tag;if(a===13){if(t=h(n),t!==null)return t;t=null}else if(a===31){if(t=d(n),t!==null)return t;t=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;t=null}else n!==t&&(t=null)}}return Qc=t,null}function p_(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"fullscreenerror":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"resize":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Lt()){case wt:return 2;case Dt:return 8;case Et:case gt:return 32;case Xt:return 268435456;default:return 32}default:return 32}}var gd=!1,ns=null,is=null,as=null,sl=new Map,rl=new Map,ss=[],Wb="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function m_(t,n){switch(t){case"focusin":case"focusout":ns=null;break;case"dragenter":case"dragleave":is=null;break;case"mouseover":case"mouseout":as=null;break;case"pointerover":case"pointerout":sl.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":rl.delete(n.pointerId)}}function ol(t,n,a,r,c,u){return t===null||t.nativeEvent!==u?(t={blockedOn:n,domEventName:a,eventSystemFlags:r,nativeEvent:u,targetContainers:[c]},n!==null&&(n=Wt(n),n!==null&&h_(n)),t):(t.eventSystemFlags|=r,n=t.targetContainers,c!==null&&n.indexOf(c)===-1&&n.push(c),t)}function Zb(t,n,a,r,c){switch(n){case"focusin":return ns=ol(ns,t,n,a,r,c),!0;case"dragenter":return is=ol(is,t,n,a,r,c),!0;case"mouseover":return as=ol(as,t,n,a,r,c),!0;case"pointerover":var u=c.pointerId;return sl.set(u,ol(sl.get(u)||null,t,n,a,r,c)),!0;case"gotpointercapture":return u=c.pointerId,rl.set(u,ol(rl.get(u)||null,t,n,a,r,c)),!0}return!1}function x_(t){var n=we(t.target);if(n!==null){var a=f(n);if(a!==null){if(n=a.tag,n===13){if(n=h(a),n!==null){t.blockedOn=n,J(t.priority,function(){d_(a)});return}}else if(n===31){if(n=d(a),n!==null){t.blockedOn=n,J(t.priority,function(){d_(a)});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){t.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Jc(t){if(t.blockedOn!==null)return!1;for(var n=t.targetContainers;0<n.length;){var a=md(t.nativeEvent);if(a===null){a=t.nativeEvent;var r=new a.constructor(a.type,a);Ju=r,a.target.dispatchEvent(r),Ju=null}else return n=Wt(a),n!==null&&h_(n),t.blockedOn=a,!1;n.shift()}return!0}function g_(t,n,a){Jc(t)&&a.delete(n)}function Kb(){gd=!1,ns!==null&&Jc(ns)&&(ns=null),is!==null&&Jc(is)&&(is=null),as!==null&&Jc(as)&&(as=null),sl.forEach(g_),rl.forEach(g_)}function $c(t,n){t.blockedOn===n&&(t.blockedOn=null,gd||(gd=!0,o.unstable_scheduleCallback(o.unstable_NormalPriority,Kb)))}var tu=null;function __(t){tu!==t&&(tu=t,o.unstable_scheduleCallback(o.unstable_NormalPriority,function(){tu===t&&(tu=null);for(var n=0;n<t.length;n+=3){var a=t[n],r=t[n+1],c=t[n+2];if(typeof r!="function"){if(xd(r||a)===null)continue;break}var u=Wt(a);u!==null&&(t.splice(n,3),n-=3,Jf(u,{pending:!0,data:c,method:a.method,action:r},r,c))}}))}function Gr(t){function n(P){return $c(P,t)}ns!==null&&$c(ns,t),is!==null&&$c(is,t),as!==null&&$c(as,t),sl.forEach(n),rl.forEach(n);for(var a=0;a<ss.length;a++){var r=ss[a];r.blockedOn===t&&(r.blockedOn=null)}for(;0<ss.length&&(a=ss[0],a.blockedOn===null);)x_(a),a.blockedOn===null&&ss.shift();if(a=(t.ownerDocument||t).$$reactFormReplay,a!=null)for(r=0;r<a.length;r+=3){var c=a[r],u=a[r+1],g=c[Ot]||null;if(typeof u=="function")g||__(a);else if(g){var M=null;if(u&&u.hasAttribute("formAction")){if(c=u,g=u[Ot]||null)M=g.formAction;else if(xd(c)!==null)continue}else M=g.action;typeof M=="function"?a[r+1]=M:(a.splice(r,3),r-=3),__(a)}}}function v_(){function t(u){u.canIntercept&&u.info==="react-transition"&&u.intercept({handler:function(){return new Promise(function(g){return c=g})},focusReset:"manual",scroll:"manual"})}function n(){c!==null&&(c(),c=null),r||setTimeout(a,20)}function a(){if(!r&&!navigation.transition){var u=navigation.currentEntry;u&&u.url!=null&&navigation.navigate(u.url,{state:u.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var r=!1,c=null;return navigation.addEventListener("navigate",t),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(a,100),function(){r=!0,navigation.removeEventListener("navigate",t),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),c!==null&&(c(),c=null)}}}function _d(t){this._internalRoot=t}eu.prototype.render=_d.prototype.render=function(t){var n=this._internalRoot;if(n===null)throw Error(s(409));var a=n.current,r=ci();u_(a,r,t,n,null,null)},eu.prototype.unmount=_d.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var n=t.containerInfo;u_(t.current,2,null,t,null,null),Bc(),n[It]=null}};function eu(t){this._internalRoot=t}eu.prototype.unstable_scheduleHydration=function(t){if(t){var n=ut();t={blockedOn:null,target:t,priority:n};for(var a=0;a<ss.length&&n!==0&&n<ss[a].priority;a++);ss.splice(a,0,t),a===0&&x_(t)}};var y_=e.version;if(y_!=="19.3.0")throw Error(s(527,y_,"19.3.0"));Gt.findDOMNode=function(t){var n=t._reactInternals;if(n===void 0)throw typeof t.render=="function"?Error(s(188)):(t=Object.keys(t).join(","),Error(s(268,t)));return t=m(n),t=t!==null?_(t):null,t=t===null?null:t.stateNode,t};var Qb={bundleType:0,version:"19.3.0",rendererPackageName:"react-dom",currentDispatcherRef:Mt,reconcilerVersion:"19.3.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var nu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!nu.isDisabled&&nu.supportsFiber)try{De=nu.inject(Qb),tn=nu}catch{}}return cl.createRoot=function(t,n){if(!l(t))throw Error(s(299));var a=!1,r="",c=cx,u=ux,g=fx;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(r=n.identifierPrefix),n.onUncaughtError!==void 0&&(c=n.onUncaughtError),n.onCaughtError!==void 0&&(u=n.onCaughtError),n.onRecoverableError!==void 0&&(g=n.onRecoverableError)),n=l_(t,1,!1,null,null,a,r,null,c,u,g,v_),t[It]=n.current,Wh(t),new _d(n)},cl.hydrateRoot=function(t,n,a){if(!l(t))throw Error(s(299));var r=!1,c="",u=cx,g=ux,M=fx,P=null;return a!=null&&(a.unstable_strictMode===!0&&(r=!0),a.identifierPrefix!==void 0&&(c=a.identifierPrefix),a.onUncaughtError!==void 0&&(u=a.onUncaughtError),a.onCaughtError!==void 0&&(g=a.onCaughtError),a.onRecoverableError!==void 0&&(M=a.onRecoverableError),a.formState!==void 0&&(P=a.formState)),n=l_(t,1,!0,n,a??null,r,c,P,u,g,M,v_),n.context=c_(null),a=n.current,r=ci(),r=W(r),c=Xa(r),c.callback=null,ka(a,c,r),a=r,n.current.lanes=a,bs(n,a),Qi(n),t[It]=n.current,Wh(t),new eu(n)},cl.version="19.3.0",cl}var D_;function uM(){if(D_)return Sd.exports;D_=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(e){console.error(e)}}return o(),Sd.exports=cM(),Sd.exports}var fM=uM();const hM=Fv(fM);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dM=o=>o.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),Bv=(...o)=>o.filter((e,i,s)=>!!e&&e.trim()!==""&&s.indexOf(e)===i).join(" ").trim();/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var pM={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mM=Cn.forwardRef(({color:o="currentColor",size:e=24,strokeWidth:i=2,absoluteStrokeWidth:s,className:l="",children:f,iconNode:h,...d},x)=>Cn.createElement("svg",{ref:x,...pM,width:e,height:e,stroke:o,strokeWidth:s?Number(i)*24/Number(e):i,className:Bv("lucide",l),...d},[...h.map(([m,_])=>Cn.createElement(m,_)),...Array.isArray(f)?f:[f]]));/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const aa=(o,e)=>{const i=Cn.forwardRef(({className:s,...l},f)=>Cn.createElement(mM,{ref:f,iconNode:e,className:Bv(`lucide-${dM(o)}`,s),...l}));return i.displayName=`${o}`,i};/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xM=aa("ArrowDown",[["path",{d:"M12 5v14",key:"s699le"}],["path",{d:"m19 12-7 7-7-7",key:"1idqje"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gM=aa("ArrowLeft",[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _M=aa("ArrowRight",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vM=aa("BookOpen",[["path",{d:"M12 7v14",key:"1akyts"}],["path",{d:"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",key:"ruj8y"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yM=aa("Check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const SM=aa("ExternalLink",[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"M10 14 21 3",key:"gplh6r"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bM=aa("Maximize2",[["polyline",{points:"15 3 21 3 21 9",key:"mznyad"}],["polyline",{points:"9 21 3 21 3 15",key:"1avn1i"}],["line",{x1:"21",x2:"14",y1:"3",y2:"10",key:"ota7mn"}],["line",{x1:"3",x2:"10",y1:"21",y2:"14",key:"1atl0r"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const MM=aa("Pause",[["rect",{x:"14",y:"4",width:"4",height:"16",rx:"1",key:"zuxfzm"}],["rect",{x:"6",y:"4",width:"4",height:"16",rx:"1",key:"1okwgv"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const EM=aa("Play",[["polygon",{points:"6 3 20 12 6 21 6 3",key:"1oa8hb"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const TM=aa("RotateCcw",[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]]),iu={godot:[{title:"读取两套 Rest",short:"参考姿态",body:"骨骼名称相同仍不足以共享动作。先读取源与目标的父子关系、局部 Rest 和父骨全局 Rest。Godot 4 的 Bone Pose 本身包含 Rest。",formula:"Rₛ, Rₜ；Pₛ, Pₜ = 父骨全局 Rest",observation:"先看两侧身高与腿长不同，所有骨骼处于参考姿态。"},{title:"建立骨骼对应",short:"按骨映射",body:"SkeletonProfile 给出要处理的骨名；运行时 Modifier 按名称在两个 Skeleton3D 中查找骨骼。导入路径则使用 BoneMap 统一骨名与 Rest。目标若多一节骨骼，该骨没有直接对应的源 Pose。",formula:"profile[name] → source bone / target bone",observation:"连线表示对应关系；额外骨保持自己的局部 Rest，同时继承父骨变换。"},{title:"采样源 Pose",short:"源动作",body:"在当前更新中读取源骨骼的局部 Pose。示例组合了左腿跨步、右腿支撑、骨盆侧移、躯干转体前倾和双臂不对称伸展；真实引擎会处理每个已映射骨骼的完整位置、旋转、缩放。",formula:"ΔTₛ = Tₛ − Rₛ",observation:"拖动动作采样滑杆，同时观察脊柱、双臂、髋和双腿。"},{title:"校正 Rest 轴向",short:"旋转传递",body:"局部模式把源 Pose 相对源 Rest 的变换，经过两边父骨 Rest 坐标系转换后写到目标 Rest。图中骨轴预先对齐，因此展示等价的 Rest 相对旋转。",formula:"Qₜ ≈ Rₜ · (Rₛ⁻¹ · Qₛ) 〔对齐骨轴时〕",observation:"目标骨保持自己的长度与参考姿态，接收动作角度。"},{title:"缩放位置增量",short:"位移传递",body:"局部位置取源 Pose 减源 Rest，旋转到目标父骨 Rest 空间，乘目标/源 motion_scale 比值，再加目标 Rest 位置。该比值是整副骨架的尺度，不会逐条腿自动求接触。",formula:"Tₜ = Rₜ + map(ΔTₛ) · mₜ / mₛ",observation:"髋部位移随 motion_scale 变化；腿长差仍可能留下脚底偏差。"},{title:"写入目标骨架",short:"运行时结果",body:"RetargetModifier3D 在源 Skeleton 的同次更新里直接重写子 Skeleton 已映射骨 Pose。位置、旋转、缩放可分别开关。默认使用局部 Pose 模式。",formula:"target.set_bone_pose(position, rotation, scale)",observation:"橙色脚底标记与地面之间的距离是当前示例的接触误差。"},{title:"切换 Global Pose",short:"可选模式",body:"Global 模式把源骨的全局 Pose 传给目标，能包含源侧未映射父骨的影响；目标骨长不一致时也可能被迫伸缩。它不是默认局部模式的“更准确”开关。",formula:"Gₜ.position = Gₛ.position 〔模型空间〕",observation:"目标全局姿态更贴近源，局部比例可能被改变。"}],unreal:[{title:"建立 IK Rig",short:"骨架定义",body:"源与目标各有 IK Rig。给两侧指定 pelvis/retarget root，再定义四肢、脊柱等链；允许骨名、骨数和轴向不同。",formula:"IK Rigₛ + IK Rigₜ",observation:"两套骨架比例不同，稍后按链处理。"},{title:"配对 Retarget Chains",short:"按链映射",body:"IK Retargeter 把目标链映射到源链。链的起止骨是关键，链内骨数可以不同；自动匹配名称仍需检查。异构案例中，源左腿为 3 骨，目标为 4 骨。",formula:"LeftLegₛ[3] → LeftLegₜ[4]",observation:"多出的黄色关节属于同一目标腿链，没有同名的源骨也可参与链求值。"},{title:"对齐 Retarget Pose",short:"基姿态",body:"源和目标的 Retarget Pose 先校准 A/T Pose、骨轴与髋部高度。后续操作都以两边的初始姿态为参考。",formula:"ΔQ = Qcurrent · QretargetPose⁻¹",observation:"目标仍显示自己的腿长和轮廓。"},{title:"传递 Pelvis Motion",short:"骨盆运动",body:"默认操作栈先处理 pelvis 的旋转与位移；高度比例参与位移缩放。源姿态按当前帧读入，然后操作栈依次修改目标的全局 Pose。",formula:"pelvisₜ ≈ pelvisRestₜ + Δpelvisₛ · heightₜ / heightₛ",observation:"目标髋部跟随源动作，但仍以目标身高定位。"},{title:"求 FK Chains",short:"链上旋转",body:"FK Chains 将源链姿态沿目标链传播。插值模式按链上的归一化位置采样，不要求逐骨数量相同。躯干、双臂、双腿同时参与；异构案例把膝部弯曲分配给目标下段的两个关节，仅用于直观展示，并非 UE 的精确采样结果。",formula:"u = arcLength / chainLength；Qₜ(u) ← ΔQₛ(u)",observation:"对照转体和展臂，再看多出的黄色关节如何分担左腿弯曲。"},{title:"计算 IK Goal",short:"末端目标",body:"需要精确手脚位置时，IK Chains 根据源链方向和伸展率生成目标 Goal。Goal 与求解器是可选配置；没有 Goal 时不会凭空得到脚锁。",formula:"goal ≈ hipₜ + directionₛ · normalizedReachₛ · lengthₜ",observation:"青色目标标记展示当前脚部末端要追随的位置。"},{title:"求解 IK 与脚接触",short:"可选约束",body:"连接 Goal 和 IK 求解器后，求解器调整目标链以靠近目标点。此演示另设“锁定脚底”教学开关，表示额外接触约束；UE 默认 retarget 并不自动保证落脚不滑。",formula:"|hip−goal| ≤ upper + lower",observation:"打开脚底锁定，比较橙色脚底误差如何变化。"},{title:"处理 Root Motion",short:"角色位移",body:"Root Motion 操作可以复制源 Root，或从 Pelvis 生成，并按配置调整比例与偏移。是否驱动角色移动还取决于动画资产与运行时消费方式。",formula:"rootₜ = RetargetRootMotion(rootₛ, settings)",observation:"本场景仅显示骨骼与轨迹标记，不替代角色控制器的位移。"}]},AM=[{label:"Godot 4.7 · 3D Skeleton Retargeting",url:"https://docs.godotengine.org/en/4.7/tutorials/assets_pipeline/retargeting_3d_skeletons.html"},{label:"Godot 4.7 · RetargetModifier3D API",url:"https://docs.godotengine.org/en/4.7/classes/class_retargetmodifier3d.html"},{label:"Godot 4.7 · Modifier 源码",url:"https://github.com/godotengine/godot/blob/4.7/scene/3d/retarget_modifier_3d.cpp"},{label:"Unreal · IK Rig Retargeting",url:"https://dev.epicgames.com/documentation/en-us/unreal-engine/ik-rig-animation-retargeting-in-unreal-engine"},{label:"Unreal · Retarget Operation Stack",url:"https://dev.epicgames.com/documentation/unreal-engine/retargeting-operation-stack-in-unreal-engine-5-8"},{label:"Unreal · Same Skeleton Retargeting",url:"https://dev.epicgames.com/documentation/unreal-engine/using-retargeted-animations-in-unreal-engine"}];/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Jp="181",ao={ROTATE:0,DOLLY:1,PAN:2},io={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},RM=0,U_=1,CM=2,Hv=1,wM=2,Ra=3,_s=0,ni=1,Ca=2,Da=0,so=1,N_=2,L_=3,O_=4,DM=5,Zs=100,UM=101,NM=102,LM=103,OM=104,PM=200,zM=201,IM=202,FM=203,cp=204,up=205,BM=206,HM=207,GM=208,VM=209,XM=210,kM=211,YM=212,qM=213,jM=214,fp=0,hp=1,dp=2,oo=3,pp=4,mp=5,xp=6,gp=7,Gv=0,WM=1,ZM=2,gs=0,KM=1,QM=2,JM=3,$M=4,t1=5,e1=6,n1=7,Vv=300,lo=301,co=302,_p=303,vp=304,Vu=306,yp=1e3,wa=1001,Sp=1002,pi=1003,i1=1004,au=1005,Ci=1006,Td=1007,Qs=1008,na=1009,Xv=1010,kv=1011,bl=1012,$p=1013,Js=1014,$i=1015,po=1016,t0=1017,e0=1018,Ml=1020,Yv=35902,qv=35899,jv=1021,Wv=1022,wi=1023,El=1026,Tl=1027,Zv=1028,n0=1029,i0=1030,a0=1031,s0=1033,wu=33776,Du=33777,Uu=33778,Nu=33779,bp=35840,Mp=35841,Ep=35842,Tp=35843,Ap=36196,Rp=37492,Cp=37496,wp=37808,Dp=37809,Up=37810,Np=37811,Lp=37812,Op=37813,Pp=37814,zp=37815,Ip=37816,Fp=37817,Bp=37818,Hp=37819,Gp=37820,Vp=37821,Xp=36492,kp=36494,Yp=36495,qp=36283,jp=36284,Wp=36285,Zp=36286,a1=3200,s1=3201,Kv=0,r1=1,ms="",di="srgb",uo="srgb-linear",Pu="linear",qe="srgb",Vr=7680,P_=519,o1=512,l1=513,c1=514,Qv=515,u1=516,f1=517,h1=518,d1=519,z_=35044,I_="300 es",ta=2e3,zu=2001;function Jv(o){for(let e=o.length-1;e>=0;--e)if(o[e]>=65535)return!0;return!1}function Iu(o){return document.createElementNS("http://www.w3.org/1999/xhtml",o)}function p1(){const o=Iu("canvas");return o.style.display="block",o}const F_={};function B_(...o){const e="THREE."+o.shift();console.log(e,...o)}function oe(...o){const e="THREE."+o.shift();console.warn(e,...o)}function un(...o){const e="THREE."+o.shift();console.error(e,...o)}function Al(...o){const e=o.join(" ");e in F_||(F_[e]=!0,oe(...o))}function m1(o,e,i){return new Promise(function(s,l){function f(){switch(o.clientWaitSync(e,o.SYNC_FLUSH_COMMANDS_BIT,0)){case o.WAIT_FAILED:l();break;case o.TIMEOUT_EXPIRED:setTimeout(f,i);break;default:s()}}setTimeout(f,i)})}class er{addEventListener(e,i){this._listeners===void 0&&(this._listeners={});const s=this._listeners;s[e]===void 0&&(s[e]=[]),s[e].indexOf(i)===-1&&s[e].push(i)}hasEventListener(e,i){const s=this._listeners;return s===void 0?!1:s[e]!==void 0&&s[e].indexOf(i)!==-1}removeEventListener(e,i){const s=this._listeners;if(s===void 0)return;const l=s[e];if(l!==void 0){const f=l.indexOf(i);f!==-1&&l.splice(f,1)}}dispatchEvent(e){const i=this._listeners;if(i===void 0)return;const s=i[e.type];if(s!==void 0){e.target=this;const l=s.slice(0);for(let f=0,h=l.length;f<h;f++)l[f].call(this,e);e.target=null}}}const Bn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let H_=1234567;const yl=Math.PI/180,Rl=180/Math.PI;function nr(){const o=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0,s=Math.random()*4294967295|0;return(Bn[o&255]+Bn[o>>8&255]+Bn[o>>16&255]+Bn[o>>24&255]+"-"+Bn[e&255]+Bn[e>>8&255]+"-"+Bn[e>>16&15|64]+Bn[e>>24&255]+"-"+Bn[i&63|128]+Bn[i>>8&255]+"-"+Bn[i>>16&255]+Bn[i>>24&255]+Bn[s&255]+Bn[s>>8&255]+Bn[s>>16&255]+Bn[s>>24&255]).toLowerCase()}function be(o,e,i){return Math.max(e,Math.min(i,o))}function r0(o,e){return(o%e+e)%e}function x1(o,e,i,s,l){return s+(o-e)*(l-s)/(i-e)}function g1(o,e,i){return o!==e?(i-o)/(e-o):0}function Sl(o,e,i){return(1-i)*o+i*e}function _1(o,e,i,s){return Sl(o,e,1-Math.exp(-i*s))}function v1(o,e=1){return e-Math.abs(r0(o,e*2)-e)}function y1(o,e,i){return o<=e?0:o>=i?1:(o=(o-e)/(i-e),o*o*(3-2*o))}function S1(o,e,i){return o<=e?0:o>=i?1:(o=(o-e)/(i-e),o*o*o*(o*(o*6-15)+10))}function b1(o,e){return o+Math.floor(Math.random()*(e-o+1))}function M1(o,e){return o+Math.random()*(e-o)}function E1(o){return o*(.5-Math.random())}function T1(o){o!==void 0&&(H_=o);let e=H_+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function A1(o){return o*yl}function R1(o){return o*Rl}function C1(o){return(o&o-1)===0&&o!==0}function w1(o){return Math.pow(2,Math.ceil(Math.log(o)/Math.LN2))}function D1(o){return Math.pow(2,Math.floor(Math.log(o)/Math.LN2))}function U1(o,e,i,s,l){const f=Math.cos,h=Math.sin,d=f(i/2),x=h(i/2),m=f((e+s)/2),_=h((e+s)/2),p=f((e-s)/2),y=h((e-s)/2),b=f((s-e)/2),E=h((s-e)/2);switch(l){case"XYX":o.set(d*_,x*p,x*y,d*m);break;case"YZY":o.set(x*y,d*_,x*p,d*m);break;case"ZXZ":o.set(x*p,x*y,d*_,d*m);break;case"XZX":o.set(d*_,x*E,x*b,d*m);break;case"YXY":o.set(x*b,d*_,x*E,d*m);break;case"ZYZ":o.set(x*E,x*b,d*_,d*m);break;default:oe("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+l)}}function no(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return o/4294967295;case Uint16Array:return o/65535;case Uint8Array:return o/255;case Int32Array:return Math.max(o/2147483647,-1);case Int16Array:return Math.max(o/32767,-1);case Int8Array:return Math.max(o/127,-1);default:throw new Error("Invalid component type.")}}function qn(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return Math.round(o*4294967295);case Uint16Array:return Math.round(o*65535);case Uint8Array:return Math.round(o*255);case Int32Array:return Math.round(o*2147483647);case Int16Array:return Math.round(o*32767);case Int8Array:return Math.round(o*127);default:throw new Error("Invalid component type.")}}const fo={DEG2RAD:yl,RAD2DEG:Rl,generateUUID:nr,clamp:be,euclideanModulo:r0,mapLinear:x1,inverseLerp:g1,lerp:Sl,damp:_1,pingpong:v1,smoothstep:y1,smootherstep:S1,randInt:b1,randFloat:M1,randFloatSpread:E1,seededRandom:T1,degToRad:A1,radToDeg:R1,isPowerOfTwo:C1,ceilPowerOfTwo:w1,floorPowerOfTwo:D1,setQuaternionFromProperEuler:U1,normalize:qn,denormalize:no};class de{constructor(e=0,i=0){de.prototype.isVector2=!0,this.x=e,this.y=i}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,i){return this.x=e,this.y=i,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const i=this.x,s=this.y,l=e.elements;return this.x=l[0]*i+l[3]*s+l[6],this.y=l[1]*i+l[4]*s+l[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,i){return this.x=be(this.x,e.x,i.x),this.y=be(this.y,e.y,i.y),this}clampScalar(e,i){return this.x=be(this.x,e,i),this.y=be(this.y,e,i),this}clampLength(e,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(be(s,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(e)/i;return Math.acos(be(s,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,s=this.y-e.y;return i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this}lerpVectors(e,i,s){return this.x=e.x+(i.x-e.x)*s,this.y=e.y+(i.y-e.y)*s,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this}rotateAround(e,i){const s=Math.cos(i),l=Math.sin(i),f=this.x-e.x,h=this.y-e.y;return this.x=f*s-h*l+e.x,this.y=f*l+h*s+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class $s{constructor(e=0,i=0,s=0,l=1){this.isQuaternion=!0,this._x=e,this._y=i,this._z=s,this._w=l}static slerpFlat(e,i,s,l,f,h,d){let x=s[l+0],m=s[l+1],_=s[l+2],p=s[l+3],y=f[h+0],b=f[h+1],E=f[h+2],A=f[h+3];if(d<=0){e[i+0]=x,e[i+1]=m,e[i+2]=_,e[i+3]=p;return}if(d>=1){e[i+0]=y,e[i+1]=b,e[i+2]=E,e[i+3]=A;return}if(p!==A||x!==y||m!==b||_!==E){let S=x*y+m*b+_*E+p*A;S<0&&(y=-y,b=-b,E=-E,A=-A,S=-S);let v=1-d;if(S<.9995){const N=Math.acos(S),L=Math.sin(N);v=Math.sin(v*N)/L,d=Math.sin(d*N)/L,x=x*v+y*d,m=m*v+b*d,_=_*v+E*d,p=p*v+A*d}else{x=x*v+y*d,m=m*v+b*d,_=_*v+E*d,p=p*v+A*d;const N=1/Math.sqrt(x*x+m*m+_*_+p*p);x*=N,m*=N,_*=N,p*=N}}e[i]=x,e[i+1]=m,e[i+2]=_,e[i+3]=p}static multiplyQuaternionsFlat(e,i,s,l,f,h){const d=s[l],x=s[l+1],m=s[l+2],_=s[l+3],p=f[h],y=f[h+1],b=f[h+2],E=f[h+3];return e[i]=d*E+_*p+x*b-m*y,e[i+1]=x*E+_*y+m*p-d*b,e[i+2]=m*E+_*b+d*y-x*p,e[i+3]=_*E-d*p-x*y-m*b,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,i,s,l){return this._x=e,this._y=i,this._z=s,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,i=!0){const s=e._x,l=e._y,f=e._z,h=e._order,d=Math.cos,x=Math.sin,m=d(s/2),_=d(l/2),p=d(f/2),y=x(s/2),b=x(l/2),E=x(f/2);switch(h){case"XYZ":this._x=y*_*p+m*b*E,this._y=m*b*p-y*_*E,this._z=m*_*E+y*b*p,this._w=m*_*p-y*b*E;break;case"YXZ":this._x=y*_*p+m*b*E,this._y=m*b*p-y*_*E,this._z=m*_*E-y*b*p,this._w=m*_*p+y*b*E;break;case"ZXY":this._x=y*_*p-m*b*E,this._y=m*b*p+y*_*E,this._z=m*_*E+y*b*p,this._w=m*_*p-y*b*E;break;case"ZYX":this._x=y*_*p-m*b*E,this._y=m*b*p+y*_*E,this._z=m*_*E-y*b*p,this._w=m*_*p+y*b*E;break;case"YZX":this._x=y*_*p+m*b*E,this._y=m*b*p+y*_*E,this._z=m*_*E-y*b*p,this._w=m*_*p-y*b*E;break;case"XZY":this._x=y*_*p-m*b*E,this._y=m*b*p-y*_*E,this._z=m*_*E+y*b*p,this._w=m*_*p+y*b*E;break;default:oe("Quaternion: .setFromEuler() encountered an unknown order: "+h)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,i){const s=i/2,l=Math.sin(s);return this._x=e.x*l,this._y=e.y*l,this._z=e.z*l,this._w=Math.cos(s),this._onChangeCallback(),this}setFromRotationMatrix(e){const i=e.elements,s=i[0],l=i[4],f=i[8],h=i[1],d=i[5],x=i[9],m=i[2],_=i[6],p=i[10],y=s+d+p;if(y>0){const b=.5/Math.sqrt(y+1);this._w=.25/b,this._x=(_-x)*b,this._y=(f-m)*b,this._z=(h-l)*b}else if(s>d&&s>p){const b=2*Math.sqrt(1+s-d-p);this._w=(_-x)/b,this._x=.25*b,this._y=(l+h)/b,this._z=(f+m)/b}else if(d>p){const b=2*Math.sqrt(1+d-s-p);this._w=(f-m)/b,this._x=(l+h)/b,this._y=.25*b,this._z=(x+_)/b}else{const b=2*Math.sqrt(1+p-s-d);this._w=(h-l)/b,this._x=(f+m)/b,this._y=(x+_)/b,this._z=.25*b}return this._onChangeCallback(),this}setFromUnitVectors(e,i){let s=e.dot(i)+1;return s<1e-8?(s=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=s):(this._x=0,this._y=-e.z,this._z=e.y,this._w=s)):(this._x=e.y*i.z-e.z*i.y,this._y=e.z*i.x-e.x*i.z,this._z=e.x*i.y-e.y*i.x,this._w=s),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(be(this.dot(e),-1,1)))}rotateTowards(e,i){const s=this.angleTo(e);if(s===0)return this;const l=Math.min(1,i/s);return this.slerp(e,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,i){const s=e._x,l=e._y,f=e._z,h=e._w,d=i._x,x=i._y,m=i._z,_=i._w;return this._x=s*_+h*d+l*m-f*x,this._y=l*_+h*x+f*d-s*m,this._z=f*_+h*m+s*x-l*d,this._w=h*_-s*d-l*x-f*m,this._onChangeCallback(),this}slerp(e,i){if(i<=0)return this;if(i>=1)return this.copy(e);let s=e._x,l=e._y,f=e._z,h=e._w,d=this.dot(e);d<0&&(s=-s,l=-l,f=-f,h=-h,d=-d);let x=1-i;if(d<.9995){const m=Math.acos(d),_=Math.sin(m);x=Math.sin(x*m)/_,i=Math.sin(i*m)/_,this._x=this._x*x+s*i,this._y=this._y*x+l*i,this._z=this._z*x+f*i,this._w=this._w*x+h*i,this._onChangeCallback()}else this._x=this._x*x+s*i,this._y=this._y*x+l*i,this._z=this._z*x+f*i,this._w=this._w*x+h*i,this.normalize();return this}slerpQuaternions(e,i,s){return this.copy(e).slerp(i,s)}random(){const e=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),s=Math.random(),l=Math.sqrt(1-s),f=Math.sqrt(s);return this.set(l*Math.sin(e),l*Math.cos(e),f*Math.sin(i),f*Math.cos(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,i=0){return this._x=e[i],this._y=e[i+1],this._z=e[i+2],this._w=e[i+3],this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._w,e}fromBufferAttribute(e,i){return this._x=e.getX(i),this._y=e.getY(i),this._z=e.getZ(i),this._w=e.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class Z{constructor(e=0,i=0,s=0){Z.prototype.isVector3=!0,this.x=e,this.y=i,this.z=s}set(e,i,s){return s===void 0&&(s=this.z),this.x=e,this.y=i,this.z=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,i){return this.x=e.x*i.x,this.y=e.y*i.y,this.z=e.z*i.z,this}applyEuler(e){return this.applyQuaternion(G_.setFromEuler(e))}applyAxisAngle(e,i){return this.applyQuaternion(G_.setFromAxisAngle(e,i))}applyMatrix3(e){const i=this.x,s=this.y,l=this.z,f=e.elements;return this.x=f[0]*i+f[3]*s+f[6]*l,this.y=f[1]*i+f[4]*s+f[7]*l,this.z=f[2]*i+f[5]*s+f[8]*l,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const i=this.x,s=this.y,l=this.z,f=e.elements,h=1/(f[3]*i+f[7]*s+f[11]*l+f[15]);return this.x=(f[0]*i+f[4]*s+f[8]*l+f[12])*h,this.y=(f[1]*i+f[5]*s+f[9]*l+f[13])*h,this.z=(f[2]*i+f[6]*s+f[10]*l+f[14])*h,this}applyQuaternion(e){const i=this.x,s=this.y,l=this.z,f=e.x,h=e.y,d=e.z,x=e.w,m=2*(h*l-d*s),_=2*(d*i-f*l),p=2*(f*s-h*i);return this.x=i+x*m+h*p-d*_,this.y=s+x*_+d*m-f*p,this.z=l+x*p+f*_-h*m,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const i=this.x,s=this.y,l=this.z,f=e.elements;return this.x=f[0]*i+f[4]*s+f[8]*l,this.y=f[1]*i+f[5]*s+f[9]*l,this.z=f[2]*i+f[6]*s+f[10]*l,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,i){return this.x=be(this.x,e.x,i.x),this.y=be(this.y,e.y,i.y),this.z=be(this.z,e.z,i.z),this}clampScalar(e,i){return this.x=be(this.x,e,i),this.y=be(this.y,e,i),this.z=be(this.z,e,i),this}clampLength(e,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(be(s,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this}lerpVectors(e,i,s){return this.x=e.x+(i.x-e.x)*s,this.y=e.y+(i.y-e.y)*s,this.z=e.z+(i.z-e.z)*s,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,i){const s=e.x,l=e.y,f=e.z,h=i.x,d=i.y,x=i.z;return this.x=l*x-f*d,this.y=f*h-s*x,this.z=s*d-l*h,this}projectOnVector(e){const i=e.lengthSq();if(i===0)return this.set(0,0,0);const s=e.dot(this)/i;return this.copy(e).multiplyScalar(s)}projectOnPlane(e){return Ad.copy(this).projectOnVector(e),this.sub(Ad)}reflect(e){return this.sub(Ad.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(e)/i;return Math.acos(be(s,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,s=this.y-e.y,l=this.z-e.z;return i*i+s*s+l*l}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,i,s){const l=Math.sin(i)*e;return this.x=l*Math.sin(s),this.y=Math.cos(i)*e,this.z=l*Math.cos(s),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,i,s){return this.x=e*Math.sin(i),this.y=s,this.z=e*Math.cos(i),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(e){const i=this.setFromMatrixColumn(e,0).length(),s=this.setFromMatrixColumn(e,1).length(),l=this.setFromMatrixColumn(e,2).length();return this.x=i,this.y=s,this.z=l,this}setFromMatrixColumn(e,i){return this.fromArray(e.elements,i*4)}setFromMatrix3Column(e,i){return this.fromArray(e.elements,i*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,i=Math.random()*2-1,s=Math.sqrt(1-i*i);return this.x=s*Math.cos(e),this.y=i,this.z=s*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ad=new Z,G_=new $s;class xe{constructor(e,i,s,l,f,h,d,x,m){xe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,i,s,l,f,h,d,x,m)}set(e,i,s,l,f,h,d,x,m){const _=this.elements;return _[0]=e,_[1]=l,_[2]=d,_[3]=i,_[4]=f,_[5]=x,_[6]=s,_[7]=h,_[8]=m,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const i=this.elements,s=e.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],this}extractBasis(e,i,s){return e.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),s.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const i=e.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const s=e.elements,l=i.elements,f=this.elements,h=s[0],d=s[3],x=s[6],m=s[1],_=s[4],p=s[7],y=s[2],b=s[5],E=s[8],A=l[0],S=l[3],v=l[6],N=l[1],L=l[4],z=l[7],G=l[2],D=l[5],O=l[8];return f[0]=h*A+d*N+x*G,f[3]=h*S+d*L+x*D,f[6]=h*v+d*z+x*O,f[1]=m*A+_*N+p*G,f[4]=m*S+_*L+p*D,f[7]=m*v+_*z+p*O,f[2]=y*A+b*N+E*G,f[5]=y*S+b*L+E*D,f[8]=y*v+b*z+E*O,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[3]*=e,i[6]*=e,i[1]*=e,i[4]*=e,i[7]*=e,i[2]*=e,i[5]*=e,i[8]*=e,this}determinant(){const e=this.elements,i=e[0],s=e[1],l=e[2],f=e[3],h=e[4],d=e[5],x=e[6],m=e[7],_=e[8];return i*h*_-i*d*m-s*f*_+s*d*x+l*f*m-l*h*x}invert(){const e=this.elements,i=e[0],s=e[1],l=e[2],f=e[3],h=e[4],d=e[5],x=e[6],m=e[7],_=e[8],p=_*h-d*m,y=d*x-_*f,b=m*f-h*x,E=i*p+s*y+l*b;if(E===0)return this.set(0,0,0,0,0,0,0,0,0);const A=1/E;return e[0]=p*A,e[1]=(l*m-_*s)*A,e[2]=(d*s-l*h)*A,e[3]=y*A,e[4]=(_*i-l*x)*A,e[5]=(l*f-d*i)*A,e[6]=b*A,e[7]=(s*x-m*i)*A,e[8]=(h*i-s*f)*A,this}transpose(){let e;const i=this.elements;return e=i[1],i[1]=i[3],i[3]=e,e=i[2],i[2]=i[6],i[6]=e,e=i[5],i[5]=i[7],i[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const i=this.elements;return e[0]=i[0],e[1]=i[3],e[2]=i[6],e[3]=i[1],e[4]=i[4],e[5]=i[7],e[6]=i[2],e[7]=i[5],e[8]=i[8],this}setUvTransform(e,i,s,l,f,h,d){const x=Math.cos(f),m=Math.sin(f);return this.set(s*x,s*m,-s*(x*h+m*d)+h+e,-l*m,l*x,-l*(-m*h+x*d)+d+i,0,0,1),this}scale(e,i){return this.premultiply(Rd.makeScale(e,i)),this}rotate(e){return this.premultiply(Rd.makeRotation(-e)),this}translate(e,i){return this.premultiply(Rd.makeTranslation(e,i)),this}makeTranslation(e,i){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,i,0,0,1),this}makeRotation(e){const i=Math.cos(e),s=Math.sin(e);return this.set(i,-s,0,s,i,0,0,0,1),this}makeScale(e,i){return this.set(e,0,0,0,i,0,0,0,1),this}equals(e){const i=this.elements,s=e.elements;for(let l=0;l<9;l++)if(i[l]!==s[l])return!1;return!0}fromArray(e,i=0){for(let s=0;s<9;s++)this.elements[s]=e[s+i];return this}toArray(e=[],i=0){const s=this.elements;return e[i]=s[0],e[i+1]=s[1],e[i+2]=s[2],e[i+3]=s[3],e[i+4]=s[4],e[i+5]=s[5],e[i+6]=s[6],e[i+7]=s[7],e[i+8]=s[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Rd=new xe,V_=new xe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),X_=new xe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function N1(){const o={enabled:!0,workingColorSpace:uo,spaces:{},convert:function(l,f,h){return this.enabled===!1||f===h||!f||!h||(this.spaces[f].transfer===qe&&(l.r=Ua(l.r),l.g=Ua(l.g),l.b=Ua(l.b)),this.spaces[f].primaries!==this.spaces[h].primaries&&(l.applyMatrix3(this.spaces[f].toXYZ),l.applyMatrix3(this.spaces[h].fromXYZ)),this.spaces[h].transfer===qe&&(l.r=ro(l.r),l.g=ro(l.g),l.b=ro(l.b))),l},workingToColorSpace:function(l,f){return this.convert(l,this.workingColorSpace,f)},colorSpaceToWorking:function(l,f){return this.convert(l,f,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===ms?Pu:this.spaces[l].transfer},getToneMappingMode:function(l){return this.spaces[l].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(l,f=this.workingColorSpace){return l.fromArray(this.spaces[f].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,f,h){return l.copy(this.spaces[f].toXYZ).multiply(this.spaces[h].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(l,f){return Al("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),o.workingToColorSpace(l,f)},toWorkingColorSpace:function(l,f){return Al("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),o.colorSpaceToWorking(l,f)}},e=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],s=[.3127,.329];return o.define({[uo]:{primaries:e,whitePoint:s,transfer:Pu,toXYZ:V_,fromXYZ:X_,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:di},outputColorSpaceConfig:{drawingBufferColorSpace:di}},[di]:{primaries:e,whitePoint:s,transfer:qe,toXYZ:V_,fromXYZ:X_,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:di}}}),o}const Oe=N1();function Ua(o){return o<.04045?o*.0773993808:Math.pow(o*.9478672986+.0521327014,2.4)}function ro(o){return o<.0031308?o*12.92:1.055*Math.pow(o,.41666)-.055}let Xr;class L1{static getDataURL(e,i="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let s;if(e instanceof HTMLCanvasElement)s=e;else{Xr===void 0&&(Xr=Iu("canvas")),Xr.width=e.width,Xr.height=e.height;const l=Xr.getContext("2d");e instanceof ImageData?l.putImageData(e,0,0):l.drawImage(e,0,0,e.width,e.height),s=Xr}return s.toDataURL(i)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const i=Iu("canvas");i.width=e.width,i.height=e.height;const s=i.getContext("2d");s.drawImage(e,0,0,e.width,e.height);const l=s.getImageData(0,0,e.width,e.height),f=l.data;for(let h=0;h<f.length;h++)f[h]=Ua(f[h]/255)*255;return s.putImageData(l,0,0),i}else if(e.data){const i=e.data.slice(0);for(let s=0;s<i.length;s++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[s]=Math.floor(Ua(i[s]/255)*255):i[s]=Ua(i[s]);return{data:i,width:e.width,height:e.height}}else return oe("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let O1=0;class o0{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:O1++}),this.uuid=nr(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const i=this.data;return typeof HTMLVideoElement<"u"&&i instanceof HTMLVideoElement?e.set(i.videoWidth,i.videoHeight,0):i instanceof VideoFrame?e.set(i.displayHeight,i.displayWidth,0):i!==null?e.set(i.width,i.height,i.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const s={uuid:this.uuid,url:""},l=this.data;if(l!==null){let f;if(Array.isArray(l)){f=[];for(let h=0,d=l.length;h<d;h++)l[h].isDataTexture?f.push(Cd(l[h].image)):f.push(Cd(l[h]))}else f=Cd(l);s.url=f}return i||(e.images[this.uuid]=s),s}}function Cd(o){return typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&o instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&o instanceof ImageBitmap?L1.getDataURL(o):o.data?{data:Array.from(o.data),width:o.width,height:o.height,type:o.data.constructor.name}:(oe("Texture: Unable to serialize Texture."),{})}let P1=0;const wd=new Z;class Wn extends er{constructor(e=Wn.DEFAULT_IMAGE,i=Wn.DEFAULT_MAPPING,s=wa,l=wa,f=Ci,h=Qs,d=wi,x=na,m=Wn.DEFAULT_ANISOTROPY,_=ms){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:P1++}),this.uuid=nr(),this.name="",this.source=new o0(e),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=s,this.wrapT=l,this.magFilter=f,this.minFilter=h,this.anisotropy=m,this.format=d,this.internalFormat=null,this.type=x,this.offset=new de(0,0),this.repeat=new de(1,1),this.center=new de(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new xe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=_,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(wd).x}get height(){return this.source.getSize(wd).y}get depth(){return this.source.getSize(wd).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const i in e){const s=e[i];if(s===void 0){oe(`Texture.setValues(): parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){oe(`Texture.setValues(): property '${i}' does not exist.`);continue}l&&s&&l.isVector2&&s.isVector2||l&&s&&l.isVector3&&s.isVector3||l&&s&&l.isMatrix3&&s.isMatrix3?l.copy(s):this[i]=s}}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const s={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(s.userData=this.userData),i||(e.textures[this.uuid]=s),s}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Vv)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case yp:e.x=e.x-Math.floor(e.x);break;case wa:e.x=e.x<0?0:1;break;case Sp:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case yp:e.y=e.y-Math.floor(e.y);break;case wa:e.y=e.y<0?0:1;break;case Sp:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Wn.DEFAULT_IMAGE=null;Wn.DEFAULT_MAPPING=Vv;Wn.DEFAULT_ANISOTROPY=1;class rn{constructor(e=0,i=0,s=0,l=1){rn.prototype.isVector4=!0,this.x=e,this.y=i,this.z=s,this.w=l}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,i,s,l){return this.x=e,this.y=i,this.z=s,this.w=l,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this.w=e.w+i.w,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this.w+=e.w*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this.w=e.w-i.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const i=this.x,s=this.y,l=this.z,f=this.w,h=e.elements;return this.x=h[0]*i+h[4]*s+h[8]*l+h[12]*f,this.y=h[1]*i+h[5]*s+h[9]*l+h[13]*f,this.z=h[2]*i+h[6]*s+h[10]*l+h[14]*f,this.w=h[3]*i+h[7]*s+h[11]*l+h[15]*f,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const i=Math.sqrt(1-e.w*e.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/i,this.y=e.y/i,this.z=e.z/i),this}setAxisAngleFromRotationMatrix(e){let i,s,l,f;const x=e.elements,m=x[0],_=x[4],p=x[8],y=x[1],b=x[5],E=x[9],A=x[2],S=x[6],v=x[10];if(Math.abs(_-y)<.01&&Math.abs(p-A)<.01&&Math.abs(E-S)<.01){if(Math.abs(_+y)<.1&&Math.abs(p+A)<.1&&Math.abs(E+S)<.1&&Math.abs(m+b+v-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const L=(m+1)/2,z=(b+1)/2,G=(v+1)/2,D=(_+y)/4,O=(p+A)/4,X=(E+S)/4;return L>z&&L>G?L<.01?(s=0,l=.707106781,f=.707106781):(s=Math.sqrt(L),l=D/s,f=O/s):z>G?z<.01?(s=.707106781,l=0,f=.707106781):(l=Math.sqrt(z),s=D/l,f=X/l):G<.01?(s=.707106781,l=.707106781,f=0):(f=Math.sqrt(G),s=O/f,l=X/f),this.set(s,l,f,i),this}let N=Math.sqrt((S-E)*(S-E)+(p-A)*(p-A)+(y-_)*(y-_));return Math.abs(N)<.001&&(N=1),this.x=(S-E)/N,this.y=(p-A)/N,this.z=(y-_)/N,this.w=Math.acos((m+b+v-1)/2),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,i){return this.x=be(this.x,e.x,i.x),this.y=be(this.y,e.y,i.y),this.z=be(this.z,e.z,i.z),this.w=be(this.w,e.w,i.w),this}clampScalar(e,i){return this.x=be(this.x,e,i),this.y=be(this.y,e,i),this.z=be(this.z,e,i),this.w=be(this.w,e,i),this}clampLength(e,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(be(s,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this.w+=(e.w-this.w)*i,this}lerpVectors(e,i,s){return this.x=e.x+(i.x-e.x)*s,this.y=e.y+(i.y-e.y)*s,this.z=e.z+(i.z-e.z)*s,this.w=e.w+(i.w-e.w)*s,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this.w=e[i+3],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e[i+3]=this.w,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this.w=e.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class z1 extends er{constructor(e=1,i=1,s={}){super(),s=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ci,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},s),this.isRenderTarget=!0,this.width=e,this.height=i,this.depth=s.depth,this.scissor=new rn(0,0,e,i),this.scissorTest=!1,this.viewport=new rn(0,0,e,i);const l={width:e,height:i,depth:s.depth},f=new Wn(l);this.textures=[];const h=s.count;for(let d=0;d<h;d++)this.textures[d]=f.clone(),this.textures[d].isRenderTargetTexture=!0,this.textures[d].renderTarget=this;this._setTextureOptions(s),this.depthBuffer=s.depthBuffer,this.stencilBuffer=s.stencilBuffer,this.resolveDepthBuffer=s.resolveDepthBuffer,this.resolveStencilBuffer=s.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=s.depthTexture,this.samples=s.samples,this.multiview=s.multiview}_setTextureOptions(e={}){const i={minFilter:Ci,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(i.mapping=e.mapping),e.wrapS!==void 0&&(i.wrapS=e.wrapS),e.wrapT!==void 0&&(i.wrapT=e.wrapT),e.wrapR!==void 0&&(i.wrapR=e.wrapR),e.magFilter!==void 0&&(i.magFilter=e.magFilter),e.minFilter!==void 0&&(i.minFilter=e.minFilter),e.format!==void 0&&(i.format=e.format),e.type!==void 0&&(i.type=e.type),e.anisotropy!==void 0&&(i.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(i.colorSpace=e.colorSpace),e.flipY!==void 0&&(i.flipY=e.flipY),e.generateMipmaps!==void 0&&(i.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(i.internalFormat=e.internalFormat);for(let s=0;s<this.textures.length;s++)this.textures[s].setValues(i)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,i,s=1){if(this.width!==e||this.height!==i||this.depth!==s){this.width=e,this.height=i,this.depth=s;for(let l=0,f=this.textures.length;l<f;l++)this.textures[l].image.width=e,this.textures[l].image.height=i,this.textures[l].image.depth=s,this.textures[l].isData3DTexture!==!0&&(this.textures[l].isArrayTexture=this.textures[l].image.depth>1);this.dispose()}this.viewport.set(0,0,e,i),this.scissor.set(0,0,e,i)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,s=e.textures.length;i<s;i++){this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const l=Object.assign({},e.textures[i].image);this.textures[i].source=new o0(l)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class tr extends z1{constructor(e=1,i=1,s={}){super(e,i,s),this.isWebGLRenderTarget=!0}}class $v extends Wn{constructor(e=null,i=1,s=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:i,height:s,depth:l},this.magFilter=pi,this.minFilter=pi,this.wrapR=wa,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class I1 extends Wn{constructor(e=null,i=1,s=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:i,height:s,depth:l},this.magFilter=pi,this.minFilter=pi,this.wrapR=wa,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Cl{constructor(e=new Z(1/0,1/0,1/0),i=new Z(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=i}set(e,i){return this.min.copy(e),this.max.copy(i),this}setFromArray(e){this.makeEmpty();for(let i=0,s=e.length;i<s;i+=3)this.expandByPoint(zi.fromArray(e,i));return this}setFromBufferAttribute(e){this.makeEmpty();for(let i=0,s=e.count;i<s;i++)this.expandByPoint(zi.fromBufferAttribute(e,i));return this}setFromPoints(e){this.makeEmpty();for(let i=0,s=e.length;i<s;i++)this.expandByPoint(e[i]);return this}setFromCenterAndSize(e,i){const s=zi.copy(i).multiplyScalar(.5);return this.min.copy(e).sub(s),this.max.copy(e).add(s),this}setFromObject(e,i=!1){return this.makeEmpty(),this.expandByObject(e,i)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,i=!1){e.updateWorldMatrix(!1,!1);const s=e.geometry;if(s!==void 0){const f=s.getAttribute("position");if(i===!0&&f!==void 0&&e.isInstancedMesh!==!0)for(let h=0,d=f.count;h<d;h++)e.isMesh===!0?e.getVertexPosition(h,zi):zi.fromBufferAttribute(f,h),zi.applyMatrix4(e.matrixWorld),this.expandByPoint(zi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),su.copy(e.boundingBox)):(s.boundingBox===null&&s.computeBoundingBox(),su.copy(s.boundingBox)),su.applyMatrix4(e.matrixWorld),this.union(su)}const l=e.children;for(let f=0,h=l.length;f<h;f++)this.expandByObject(l[f],i);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,i){return i.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,zi),zi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let i,s;return e.normal.x>0?(i=e.normal.x*this.min.x,s=e.normal.x*this.max.x):(i=e.normal.x*this.max.x,s=e.normal.x*this.min.x),e.normal.y>0?(i+=e.normal.y*this.min.y,s+=e.normal.y*this.max.y):(i+=e.normal.y*this.max.y,s+=e.normal.y*this.min.y),e.normal.z>0?(i+=e.normal.z*this.min.z,s+=e.normal.z*this.max.z):(i+=e.normal.z*this.max.z,s+=e.normal.z*this.min.z),i<=-e.constant&&s>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ul),ru.subVectors(this.max,ul),kr.subVectors(e.a,ul),Yr.subVectors(e.b,ul),qr.subVectors(e.c,ul),os.subVectors(Yr,kr),ls.subVectors(qr,Yr),Xs.subVectors(kr,qr);let i=[0,-os.z,os.y,0,-ls.z,ls.y,0,-Xs.z,Xs.y,os.z,0,-os.x,ls.z,0,-ls.x,Xs.z,0,-Xs.x,-os.y,os.x,0,-ls.y,ls.x,0,-Xs.y,Xs.x,0];return!Dd(i,kr,Yr,qr,ru)||(i=[1,0,0,0,1,0,0,0,1],!Dd(i,kr,Yr,qr,ru))?!1:(ou.crossVectors(os,ls),i=[ou.x,ou.y,ou.z],Dd(i,kr,Yr,qr,ru))}clampPoint(e,i){return i.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,zi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(zi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Sa[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Sa[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Sa[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Sa[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Sa[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Sa[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Sa[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Sa[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Sa),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Sa=[new Z,new Z,new Z,new Z,new Z,new Z,new Z,new Z],zi=new Z,su=new Cl,kr=new Z,Yr=new Z,qr=new Z,os=new Z,ls=new Z,Xs=new Z,ul=new Z,ru=new Z,ou=new Z,ks=new Z;function Dd(o,e,i,s,l){for(let f=0,h=o.length-3;f<=h;f+=3){ks.fromArray(o,f);const d=l.x*Math.abs(ks.x)+l.y*Math.abs(ks.y)+l.z*Math.abs(ks.z),x=e.dot(ks),m=i.dot(ks),_=s.dot(ks);if(Math.max(-Math.max(x,m,_),Math.min(x,m,_))>d)return!1}return!0}const F1=new Cl,fl=new Z,Ud=new Z;class Xu{constructor(e=new Z,i=-1){this.isSphere=!0,this.center=e,this.radius=i}set(e,i){return this.center.copy(e),this.radius=i,this}setFromPoints(e,i){const s=this.center;i!==void 0?s.copy(i):F1.setFromPoints(e).getCenter(s);let l=0;for(let f=0,h=e.length;f<h;f++)l=Math.max(l,s.distanceToSquared(e[f]));return this.radius=Math.sqrt(l),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const i=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=i*i}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,i){const s=this.center.distanceToSquared(e);return i.copy(e),s>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;fl.subVectors(e,this.center);const i=fl.lengthSq();if(i>this.radius*this.radius){const s=Math.sqrt(i),l=(s-this.radius)*.5;this.center.addScaledVector(fl,l/s),this.radius+=l}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ud.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(fl.copy(e.center).add(Ud)),this.expandByPoint(fl.copy(e.center).sub(Ud))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const ba=new Z,Nd=new Z,lu=new Z,cs=new Z,Ld=new Z,cu=new Z,Od=new Z;class l0{constructor(e=new Z,i=new Z(0,0,-1)){this.origin=e,this.direction=i}set(e,i){return this.origin.copy(e),this.direction.copy(i),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,i){return i.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ba)),this}closestPointToPoint(e,i){i.subVectors(e,this.origin);const s=i.dot(this.direction);return s<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,s)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const i=ba.subVectors(e,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(e):(ba.copy(this.origin).addScaledVector(this.direction,i),ba.distanceToSquared(e))}distanceSqToSegment(e,i,s,l){Nd.copy(e).add(i).multiplyScalar(.5),lu.copy(i).sub(e).normalize(),cs.copy(this.origin).sub(Nd);const f=e.distanceTo(i)*.5,h=-this.direction.dot(lu),d=cs.dot(this.direction),x=-cs.dot(lu),m=cs.lengthSq(),_=Math.abs(1-h*h);let p,y,b,E;if(_>0)if(p=h*x-d,y=h*d-x,E=f*_,p>=0)if(y>=-E)if(y<=E){const A=1/_;p*=A,y*=A,b=p*(p+h*y+2*d)+y*(h*p+y+2*x)+m}else y=f,p=Math.max(0,-(h*y+d)),b=-p*p+y*(y+2*x)+m;else y=-f,p=Math.max(0,-(h*y+d)),b=-p*p+y*(y+2*x)+m;else y<=-E?(p=Math.max(0,-(-h*f+d)),y=p>0?-f:Math.min(Math.max(-f,-x),f),b=-p*p+y*(y+2*x)+m):y<=E?(p=0,y=Math.min(Math.max(-f,-x),f),b=y*(y+2*x)+m):(p=Math.max(0,-(h*f+d)),y=p>0?f:Math.min(Math.max(-f,-x),f),b=-p*p+y*(y+2*x)+m);else y=h>0?-f:f,p=Math.max(0,-(h*y+d)),b=-p*p+y*(y+2*x)+m;return s&&s.copy(this.origin).addScaledVector(this.direction,p),l&&l.copy(Nd).addScaledVector(lu,y),b}intersectSphere(e,i){ba.subVectors(e.center,this.origin);const s=ba.dot(this.direction),l=ba.dot(ba)-s*s,f=e.radius*e.radius;if(l>f)return null;const h=Math.sqrt(f-l),d=s-h,x=s+h;return x<0?null:d<0?this.at(x,i):this.at(d,i)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const i=e.normal.dot(this.direction);if(i===0)return e.distanceToPoint(this.origin)===0?0:null;const s=-(this.origin.dot(e.normal)+e.constant)/i;return s>=0?s:null}intersectPlane(e,i){const s=this.distanceToPlane(e);return s===null?null:this.at(s,i)}intersectsPlane(e){const i=e.distanceToPoint(this.origin);return i===0||e.normal.dot(this.direction)*i<0}intersectBox(e,i){let s,l,f,h,d,x;const m=1/this.direction.x,_=1/this.direction.y,p=1/this.direction.z,y=this.origin;return m>=0?(s=(e.min.x-y.x)*m,l=(e.max.x-y.x)*m):(s=(e.max.x-y.x)*m,l=(e.min.x-y.x)*m),_>=0?(f=(e.min.y-y.y)*_,h=(e.max.y-y.y)*_):(f=(e.max.y-y.y)*_,h=(e.min.y-y.y)*_),s>h||f>l||((f>s||isNaN(s))&&(s=f),(h<l||isNaN(l))&&(l=h),p>=0?(d=(e.min.z-y.z)*p,x=(e.max.z-y.z)*p):(d=(e.max.z-y.z)*p,x=(e.min.z-y.z)*p),s>x||d>l)||((d>s||s!==s)&&(s=d),(x<l||l!==l)&&(l=x),l<0)?null:this.at(s>=0?s:l,i)}intersectsBox(e){return this.intersectBox(e,ba)!==null}intersectTriangle(e,i,s,l,f){Ld.subVectors(i,e),cu.subVectors(s,e),Od.crossVectors(Ld,cu);let h=this.direction.dot(Od),d;if(h>0){if(l)return null;d=1}else if(h<0)d=-1,h=-h;else return null;cs.subVectors(this.origin,e);const x=d*this.direction.dot(cu.crossVectors(cs,cu));if(x<0)return null;const m=d*this.direction.dot(Ld.cross(cs));if(m<0||x+m>h)return null;const _=-d*cs.dot(Od);return _<0?null:this.at(_/h,f)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Xe{constructor(e,i,s,l,f,h,d,x,m,_,p,y,b,E,A,S){Xe.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,i,s,l,f,h,d,x,m,_,p,y,b,E,A,S)}set(e,i,s,l,f,h,d,x,m,_,p,y,b,E,A,S){const v=this.elements;return v[0]=e,v[4]=i,v[8]=s,v[12]=l,v[1]=f,v[5]=h,v[9]=d,v[13]=x,v[2]=m,v[6]=_,v[10]=p,v[14]=y,v[3]=b,v[7]=E,v[11]=A,v[15]=S,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Xe().fromArray(this.elements)}copy(e){const i=this.elements,s=e.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],i[9]=s[9],i[10]=s[10],i[11]=s[11],i[12]=s[12],i[13]=s[13],i[14]=s[14],i[15]=s[15],this}copyPosition(e){const i=this.elements,s=e.elements;return i[12]=s[12],i[13]=s[13],i[14]=s[14],this}setFromMatrix3(e){const i=e.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(e,i,s){return e.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),s.setFromMatrixColumn(this,2),this}makeBasis(e,i,s){return this.set(e.x,i.x,s.x,0,e.y,i.y,s.y,0,e.z,i.z,s.z,0,0,0,0,1),this}extractRotation(e){const i=this.elements,s=e.elements,l=1/jr.setFromMatrixColumn(e,0).length(),f=1/jr.setFromMatrixColumn(e,1).length(),h=1/jr.setFromMatrixColumn(e,2).length();return i[0]=s[0]*l,i[1]=s[1]*l,i[2]=s[2]*l,i[3]=0,i[4]=s[4]*f,i[5]=s[5]*f,i[6]=s[6]*f,i[7]=0,i[8]=s[8]*h,i[9]=s[9]*h,i[10]=s[10]*h,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(e){const i=this.elements,s=e.x,l=e.y,f=e.z,h=Math.cos(s),d=Math.sin(s),x=Math.cos(l),m=Math.sin(l),_=Math.cos(f),p=Math.sin(f);if(e.order==="XYZ"){const y=h*_,b=h*p,E=d*_,A=d*p;i[0]=x*_,i[4]=-x*p,i[8]=m,i[1]=b+E*m,i[5]=y-A*m,i[9]=-d*x,i[2]=A-y*m,i[6]=E+b*m,i[10]=h*x}else if(e.order==="YXZ"){const y=x*_,b=x*p,E=m*_,A=m*p;i[0]=y+A*d,i[4]=E*d-b,i[8]=h*m,i[1]=h*p,i[5]=h*_,i[9]=-d,i[2]=b*d-E,i[6]=A+y*d,i[10]=h*x}else if(e.order==="ZXY"){const y=x*_,b=x*p,E=m*_,A=m*p;i[0]=y-A*d,i[4]=-h*p,i[8]=E+b*d,i[1]=b+E*d,i[5]=h*_,i[9]=A-y*d,i[2]=-h*m,i[6]=d,i[10]=h*x}else if(e.order==="ZYX"){const y=h*_,b=h*p,E=d*_,A=d*p;i[0]=x*_,i[4]=E*m-b,i[8]=y*m+A,i[1]=x*p,i[5]=A*m+y,i[9]=b*m-E,i[2]=-m,i[6]=d*x,i[10]=h*x}else if(e.order==="YZX"){const y=h*x,b=h*m,E=d*x,A=d*m;i[0]=x*_,i[4]=A-y*p,i[8]=E*p+b,i[1]=p,i[5]=h*_,i[9]=-d*_,i[2]=-m*_,i[6]=b*p+E,i[10]=y-A*p}else if(e.order==="XZY"){const y=h*x,b=h*m,E=d*x,A=d*m;i[0]=x*_,i[4]=-p,i[8]=m*_,i[1]=y*p+A,i[5]=h*_,i[9]=b*p-E,i[2]=E*p-b,i[6]=d*_,i[10]=A*p+y}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(e){return this.compose(B1,e,H1)}lookAt(e,i,s){const l=this.elements;return fi.subVectors(e,i),fi.lengthSq()===0&&(fi.z=1),fi.normalize(),us.crossVectors(s,fi),us.lengthSq()===0&&(Math.abs(s.z)===1?fi.x+=1e-4:fi.z+=1e-4,fi.normalize(),us.crossVectors(s,fi)),us.normalize(),uu.crossVectors(fi,us),l[0]=us.x,l[4]=uu.x,l[8]=fi.x,l[1]=us.y,l[5]=uu.y,l[9]=fi.y,l[2]=us.z,l[6]=uu.z,l[10]=fi.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const s=e.elements,l=i.elements,f=this.elements,h=s[0],d=s[4],x=s[8],m=s[12],_=s[1],p=s[5],y=s[9],b=s[13],E=s[2],A=s[6],S=s[10],v=s[14],N=s[3],L=s[7],z=s[11],G=s[15],D=l[0],O=l[4],X=l[8],w=l[12],C=l[1],H=l[5],Q=l[9],nt=l[13],ht=l[2],ot=l[6],k=l[10],ct=l[14],$=l[3],_t=l[7],vt=l[11],Yt=l[15];return f[0]=h*D+d*C+x*ht+m*$,f[4]=h*O+d*H+x*ot+m*_t,f[8]=h*X+d*Q+x*k+m*vt,f[12]=h*w+d*nt+x*ct+m*Yt,f[1]=_*D+p*C+y*ht+b*$,f[5]=_*O+p*H+y*ot+b*_t,f[9]=_*X+p*Q+y*k+b*vt,f[13]=_*w+p*nt+y*ct+b*Yt,f[2]=E*D+A*C+S*ht+v*$,f[6]=E*O+A*H+S*ot+v*_t,f[10]=E*X+A*Q+S*k+v*vt,f[14]=E*w+A*nt+S*ct+v*Yt,f[3]=N*D+L*C+z*ht+G*$,f[7]=N*O+L*H+z*ot+G*_t,f[11]=N*X+L*Q+z*k+G*vt,f[15]=N*w+L*nt+z*ct+G*Yt,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[4]*=e,i[8]*=e,i[12]*=e,i[1]*=e,i[5]*=e,i[9]*=e,i[13]*=e,i[2]*=e,i[6]*=e,i[10]*=e,i[14]*=e,i[3]*=e,i[7]*=e,i[11]*=e,i[15]*=e,this}determinant(){const e=this.elements,i=e[0],s=e[4],l=e[8],f=e[12],h=e[1],d=e[5],x=e[9],m=e[13],_=e[2],p=e[6],y=e[10],b=e[14],E=e[3],A=e[7],S=e[11],v=e[15];return E*(+f*x*p-l*m*p-f*d*y+s*m*y+l*d*b-s*x*b)+A*(+i*x*b-i*m*y+f*h*y-l*h*b+l*m*_-f*x*_)+S*(+i*m*p-i*d*b-f*h*p+s*h*b+f*d*_-s*m*_)+v*(-l*d*_-i*x*p+i*d*y+l*h*p-s*h*y+s*x*_)}transpose(){const e=this.elements;let i;return i=e[1],e[1]=e[4],e[4]=i,i=e[2],e[2]=e[8],e[8]=i,i=e[6],e[6]=e[9],e[9]=i,i=e[3],e[3]=e[12],e[12]=i,i=e[7],e[7]=e[13],e[13]=i,i=e[11],e[11]=e[14],e[14]=i,this}setPosition(e,i,s){const l=this.elements;return e.isVector3?(l[12]=e.x,l[13]=e.y,l[14]=e.z):(l[12]=e,l[13]=i,l[14]=s),this}invert(){const e=this.elements,i=e[0],s=e[1],l=e[2],f=e[3],h=e[4],d=e[5],x=e[6],m=e[7],_=e[8],p=e[9],y=e[10],b=e[11],E=e[12],A=e[13],S=e[14],v=e[15],N=p*S*m-A*y*m+A*x*b-d*S*b-p*x*v+d*y*v,L=E*y*m-_*S*m-E*x*b+h*S*b+_*x*v-h*y*v,z=_*A*m-E*p*m+E*d*b-h*A*b-_*d*v+h*p*v,G=E*p*x-_*A*x-E*d*y+h*A*y+_*d*S-h*p*S,D=i*N+s*L+l*z+f*G;if(D===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const O=1/D;return e[0]=N*O,e[1]=(A*y*f-p*S*f-A*l*b+s*S*b+p*l*v-s*y*v)*O,e[2]=(d*S*f-A*x*f+A*l*m-s*S*m-d*l*v+s*x*v)*O,e[3]=(p*x*f-d*y*f-p*l*m+s*y*m+d*l*b-s*x*b)*O,e[4]=L*O,e[5]=(_*S*f-E*y*f+E*l*b-i*S*b-_*l*v+i*y*v)*O,e[6]=(E*x*f-h*S*f-E*l*m+i*S*m+h*l*v-i*x*v)*O,e[7]=(h*y*f-_*x*f+_*l*m-i*y*m-h*l*b+i*x*b)*O,e[8]=z*O,e[9]=(E*p*f-_*A*f-E*s*b+i*A*b+_*s*v-i*p*v)*O,e[10]=(h*A*f-E*d*f+E*s*m-i*A*m-h*s*v+i*d*v)*O,e[11]=(_*d*f-h*p*f-_*s*m+i*p*m+h*s*b-i*d*b)*O,e[12]=G*O,e[13]=(_*A*l-E*p*l+E*s*y-i*A*y-_*s*S+i*p*S)*O,e[14]=(E*d*l-h*A*l-E*s*x+i*A*x+h*s*S-i*d*S)*O,e[15]=(h*p*l-_*d*l+_*s*x-i*p*x-h*s*y+i*d*y)*O,this}scale(e){const i=this.elements,s=e.x,l=e.y,f=e.z;return i[0]*=s,i[4]*=l,i[8]*=f,i[1]*=s,i[5]*=l,i[9]*=f,i[2]*=s,i[6]*=l,i[10]*=f,i[3]*=s,i[7]*=l,i[11]*=f,this}getMaxScaleOnAxis(){const e=this.elements,i=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],s=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],l=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(i,s,l))}makeTranslation(e,i,s){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,i,0,0,1,s,0,0,0,1),this}makeRotationX(e){const i=Math.cos(e),s=Math.sin(e);return this.set(1,0,0,0,0,i,-s,0,0,s,i,0,0,0,0,1),this}makeRotationY(e){const i=Math.cos(e),s=Math.sin(e);return this.set(i,0,s,0,0,1,0,0,-s,0,i,0,0,0,0,1),this}makeRotationZ(e){const i=Math.cos(e),s=Math.sin(e);return this.set(i,-s,0,0,s,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,i){const s=Math.cos(i),l=Math.sin(i),f=1-s,h=e.x,d=e.y,x=e.z,m=f*h,_=f*d;return this.set(m*h+s,m*d-l*x,m*x+l*d,0,m*d+l*x,_*d+s,_*x-l*h,0,m*x-l*d,_*x+l*h,f*x*x+s,0,0,0,0,1),this}makeScale(e,i,s){return this.set(e,0,0,0,0,i,0,0,0,0,s,0,0,0,0,1),this}makeShear(e,i,s,l,f,h){return this.set(1,s,f,0,e,1,h,0,i,l,1,0,0,0,0,1),this}compose(e,i,s){const l=this.elements,f=i._x,h=i._y,d=i._z,x=i._w,m=f+f,_=h+h,p=d+d,y=f*m,b=f*_,E=f*p,A=h*_,S=h*p,v=d*p,N=x*m,L=x*_,z=x*p,G=s.x,D=s.y,O=s.z;return l[0]=(1-(A+v))*G,l[1]=(b+z)*G,l[2]=(E-L)*G,l[3]=0,l[4]=(b-z)*D,l[5]=(1-(y+v))*D,l[6]=(S+N)*D,l[7]=0,l[8]=(E+L)*O,l[9]=(S-N)*O,l[10]=(1-(y+A))*O,l[11]=0,l[12]=e.x,l[13]=e.y,l[14]=e.z,l[15]=1,this}decompose(e,i,s){const l=this.elements;let f=jr.set(l[0],l[1],l[2]).length();const h=jr.set(l[4],l[5],l[6]).length(),d=jr.set(l[8],l[9],l[10]).length();this.determinant()<0&&(f=-f),e.x=l[12],e.y=l[13],e.z=l[14],Ii.copy(this);const m=1/f,_=1/h,p=1/d;return Ii.elements[0]*=m,Ii.elements[1]*=m,Ii.elements[2]*=m,Ii.elements[4]*=_,Ii.elements[5]*=_,Ii.elements[6]*=_,Ii.elements[8]*=p,Ii.elements[9]*=p,Ii.elements[10]*=p,i.setFromRotationMatrix(Ii),s.x=f,s.y=h,s.z=d,this}makePerspective(e,i,s,l,f,h,d=ta,x=!1){const m=this.elements,_=2*f/(i-e),p=2*f/(s-l),y=(i+e)/(i-e),b=(s+l)/(s-l);let E,A;if(x)E=f/(h-f),A=h*f/(h-f);else if(d===ta)E=-(h+f)/(h-f),A=-2*h*f/(h-f);else if(d===zu)E=-h/(h-f),A=-h*f/(h-f);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+d);return m[0]=_,m[4]=0,m[8]=y,m[12]=0,m[1]=0,m[5]=p,m[9]=b,m[13]=0,m[2]=0,m[6]=0,m[10]=E,m[14]=A,m[3]=0,m[7]=0,m[11]=-1,m[15]=0,this}makeOrthographic(e,i,s,l,f,h,d=ta,x=!1){const m=this.elements,_=2/(i-e),p=2/(s-l),y=-(i+e)/(i-e),b=-(s+l)/(s-l);let E,A;if(x)E=1/(h-f),A=h/(h-f);else if(d===ta)E=-2/(h-f),A=-(h+f)/(h-f);else if(d===zu)E=-1/(h-f),A=-f/(h-f);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+d);return m[0]=_,m[4]=0,m[8]=0,m[12]=y,m[1]=0,m[5]=p,m[9]=0,m[13]=b,m[2]=0,m[6]=0,m[10]=E,m[14]=A,m[3]=0,m[7]=0,m[11]=0,m[15]=1,this}equals(e){const i=this.elements,s=e.elements;for(let l=0;l<16;l++)if(i[l]!==s[l])return!1;return!0}fromArray(e,i=0){for(let s=0;s<16;s++)this.elements[s]=e[s+i];return this}toArray(e=[],i=0){const s=this.elements;return e[i]=s[0],e[i+1]=s[1],e[i+2]=s[2],e[i+3]=s[3],e[i+4]=s[4],e[i+5]=s[5],e[i+6]=s[6],e[i+7]=s[7],e[i+8]=s[8],e[i+9]=s[9],e[i+10]=s[10],e[i+11]=s[11],e[i+12]=s[12],e[i+13]=s[13],e[i+14]=s[14],e[i+15]=s[15],e}}const jr=new Z,Ii=new Xe,B1=new Z(0,0,0),H1=new Z(1,1,1),us=new Z,uu=new Z,fi=new Z,k_=new Xe,Y_=new $s;class ia{constructor(e=0,i=0,s=0,l=ia.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=i,this._z=s,this._order=l}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,i,s,l=this._order){return this._x=e,this._y=i,this._z=s,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,i=this._order,s=!0){const l=e.elements,f=l[0],h=l[4],d=l[8],x=l[1],m=l[5],_=l[9],p=l[2],y=l[6],b=l[10];switch(i){case"XYZ":this._y=Math.asin(be(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-_,b),this._z=Math.atan2(-h,f)):(this._x=Math.atan2(y,m),this._z=0);break;case"YXZ":this._x=Math.asin(-be(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(d,b),this._z=Math.atan2(x,m)):(this._y=Math.atan2(-p,f),this._z=0);break;case"ZXY":this._x=Math.asin(be(y,-1,1)),Math.abs(y)<.9999999?(this._y=Math.atan2(-p,b),this._z=Math.atan2(-h,m)):(this._y=0,this._z=Math.atan2(x,f));break;case"ZYX":this._y=Math.asin(-be(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(y,b),this._z=Math.atan2(x,f)):(this._x=0,this._z=Math.atan2(-h,m));break;case"YZX":this._z=Math.asin(be(x,-1,1)),Math.abs(x)<.9999999?(this._x=Math.atan2(-_,m),this._y=Math.atan2(-p,f)):(this._x=0,this._y=Math.atan2(d,b));break;case"XZY":this._z=Math.asin(-be(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(y,m),this._y=Math.atan2(d,f)):(this._x=Math.atan2(-_,b),this._y=0);break;default:oe("Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,s===!0&&this._onChangeCallback(),this}setFromQuaternion(e,i,s){return k_.makeRotationFromQuaternion(e),this.setFromRotationMatrix(k_,i,s)}setFromVector3(e,i=this._order){return this.set(e.x,e.y,e.z,i)}reorder(e){return Y_.setFromEuler(this),this.setFromQuaternion(Y_,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ia.DEFAULT_ORDER="XYZ";class ty{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let G1=0;const q_=new Z,Wr=new $s,Ma=new Xe,fu=new Z,hl=new Z,V1=new Z,X1=new $s,j_=new Z(1,0,0),W_=new Z(0,1,0),Z_=new Z(0,0,1),K_={type:"added"},k1={type:"removed"},Zr={type:"childadded",child:null},Pd={type:"childremoved",child:null};class yn extends er{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:G1++}),this.uuid=nr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=yn.DEFAULT_UP.clone();const e=new Z,i=new ia,s=new $s,l=new Z(1,1,1);function f(){s.setFromEuler(i,!1)}function h(){i.setFromQuaternion(s,void 0,!1)}i._onChange(f),s._onChange(h),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:s},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new Xe},normalMatrix:{value:new xe}}),this.matrix=new Xe,this.matrixWorld=new Xe,this.matrixAutoUpdate=yn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=yn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ty,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,i){this.quaternion.setFromAxisAngle(e,i)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,i){return Wr.setFromAxisAngle(e,i),this.quaternion.multiply(Wr),this}rotateOnWorldAxis(e,i){return Wr.setFromAxisAngle(e,i),this.quaternion.premultiply(Wr),this}rotateX(e){return this.rotateOnAxis(j_,e)}rotateY(e){return this.rotateOnAxis(W_,e)}rotateZ(e){return this.rotateOnAxis(Z_,e)}translateOnAxis(e,i){return q_.copy(e).applyQuaternion(this.quaternion),this.position.add(q_.multiplyScalar(i)),this}translateX(e){return this.translateOnAxis(j_,e)}translateY(e){return this.translateOnAxis(W_,e)}translateZ(e){return this.translateOnAxis(Z_,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ma.copy(this.matrixWorld).invert())}lookAt(e,i,s){e.isVector3?fu.copy(e):fu.set(e,i,s);const l=this.parent;this.updateWorldMatrix(!0,!1),hl.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ma.lookAt(hl,fu,this.up):Ma.lookAt(fu,hl,this.up),this.quaternion.setFromRotationMatrix(Ma),l&&(Ma.extractRotation(l.matrixWorld),Wr.setFromRotationMatrix(Ma),this.quaternion.premultiply(Wr.invert()))}add(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return e===this?(un("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(K_),Zr.child=e,this.dispatchEvent(Zr),Zr.child=null):un("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let s=0;s<arguments.length;s++)this.remove(arguments[s]);return this}const i=this.children.indexOf(e);return i!==-1&&(e.parent=null,this.children.splice(i,1),e.dispatchEvent(k1),Pd.child=e,this.dispatchEvent(Pd),Pd.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ma.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ma.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ma),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(K_),Zr.child=e,this.dispatchEvent(Zr),Zr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,i){if(this[e]===i)return this;for(let s=0,l=this.children.length;s<l;s++){const h=this.children[s].getObjectByProperty(e,i);if(h!==void 0)return h}}getObjectsByProperty(e,i,s=[]){this[e]===i&&s.push(this);const l=this.children;for(let f=0,h=l.length;f<h;f++)l[f].getObjectsByProperty(e,i,s);return s}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(hl,e,V1),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(hl,X1,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return e.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(e){e(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverseVisible(e)}traverseAncestors(e){const i=this.parent;i!==null&&(e(i),i.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].updateMatrixWorld(e)}updateWorldMatrix(e,i){const s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){const l=this.children;for(let f=0,h=l.length;f<h;f++)l[f].updateWorldMatrix(!1,!0)}}toJSON(e){const i=e===void 0||typeof e=="string",s={};i&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},s.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.geometryInfo=this._geometryInfo.map(d=>({...d,boundingBox:d.boundingBox?d.boundingBox.toJSON():void 0,boundingSphere:d.boundingSphere?d.boundingSphere.toJSON():void 0})),l.instanceInfo=this._instanceInfo.map(d=>({...d})),l.availableInstanceIds=this._availableInstanceIds.slice(),l.availableGeometryIds=this._availableGeometryIds.slice(),l.nextIndexStart=this._nextIndexStart,l.nextVertexStart=this._nextVertexStart,l.geometryCount=this._geometryCount,l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.matricesTexture=this._matricesTexture.toJSON(e),l.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(l.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(l.boundingBox=this.boundingBox.toJSON()));function f(d,x){return d[x.uuid]===void 0&&(d[x.uuid]=x.toJSON(e)),x.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=f(e.geometries,this.geometry);const d=this.geometry.parameters;if(d!==void 0&&d.shapes!==void 0){const x=d.shapes;if(Array.isArray(x))for(let m=0,_=x.length;m<_;m++){const p=x[m];f(e.shapes,p)}else f(e.shapes,x)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(f(e.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const d=[];for(let x=0,m=this.material.length;x<m;x++)d.push(f(e.materials,this.material[x]));l.material=d}else l.material=f(e.materials,this.material);if(this.children.length>0){l.children=[];for(let d=0;d<this.children.length;d++)l.children.push(this.children[d].toJSON(e).object)}if(this.animations.length>0){l.animations=[];for(let d=0;d<this.animations.length;d++){const x=this.animations[d];l.animations.push(f(e.animations,x))}}if(i){const d=h(e.geometries),x=h(e.materials),m=h(e.textures),_=h(e.images),p=h(e.shapes),y=h(e.skeletons),b=h(e.animations),E=h(e.nodes);d.length>0&&(s.geometries=d),x.length>0&&(s.materials=x),m.length>0&&(s.textures=m),_.length>0&&(s.images=_),p.length>0&&(s.shapes=p),y.length>0&&(s.skeletons=y),b.length>0&&(s.animations=b),E.length>0&&(s.nodes=E)}return s.object=l,s;function h(d){const x=[];for(const m in d){const _=d[m];delete _.metadata,x.push(_)}return x}}clone(e){return new this.constructor().copy(this,e)}copy(e,i=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),i===!0)for(let s=0;s<e.children.length;s++){const l=e.children[s];this.add(l.clone())}return this}}yn.DEFAULT_UP=new Z(0,1,0);yn.DEFAULT_MATRIX_AUTO_UPDATE=!0;yn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Fi=new Z,Ea=new Z,zd=new Z,Ta=new Z,Kr=new Z,Qr=new Z,Q_=new Z,Id=new Z,Fd=new Z,Bd=new Z,Hd=new rn,Gd=new rn,Vd=new rn;class Bi{constructor(e=new Z,i=new Z,s=new Z){this.a=e,this.b=i,this.c=s}static getNormal(e,i,s,l){l.subVectors(s,i),Fi.subVectors(e,i),l.cross(Fi);const f=l.lengthSq();return f>0?l.multiplyScalar(1/Math.sqrt(f)):l.set(0,0,0)}static getBarycoord(e,i,s,l,f){Fi.subVectors(l,i),Ea.subVectors(s,i),zd.subVectors(e,i);const h=Fi.dot(Fi),d=Fi.dot(Ea),x=Fi.dot(zd),m=Ea.dot(Ea),_=Ea.dot(zd),p=h*m-d*d;if(p===0)return f.set(0,0,0),null;const y=1/p,b=(m*x-d*_)*y,E=(h*_-d*x)*y;return f.set(1-b-E,E,b)}static containsPoint(e,i,s,l){return this.getBarycoord(e,i,s,l,Ta)===null?!1:Ta.x>=0&&Ta.y>=0&&Ta.x+Ta.y<=1}static getInterpolation(e,i,s,l,f,h,d,x){return this.getBarycoord(e,i,s,l,Ta)===null?(x.x=0,x.y=0,"z"in x&&(x.z=0),"w"in x&&(x.w=0),null):(x.setScalar(0),x.addScaledVector(f,Ta.x),x.addScaledVector(h,Ta.y),x.addScaledVector(d,Ta.z),x)}static getInterpolatedAttribute(e,i,s,l,f,h){return Hd.setScalar(0),Gd.setScalar(0),Vd.setScalar(0),Hd.fromBufferAttribute(e,i),Gd.fromBufferAttribute(e,s),Vd.fromBufferAttribute(e,l),h.setScalar(0),h.addScaledVector(Hd,f.x),h.addScaledVector(Gd,f.y),h.addScaledVector(Vd,f.z),h}static isFrontFacing(e,i,s,l){return Fi.subVectors(s,i),Ea.subVectors(e,i),Fi.cross(Ea).dot(l)<0}set(e,i,s){return this.a.copy(e),this.b.copy(i),this.c.copy(s),this}setFromPointsAndIndices(e,i,s,l){return this.a.copy(e[i]),this.b.copy(e[s]),this.c.copy(e[l]),this}setFromAttributeAndIndices(e,i,s,l){return this.a.fromBufferAttribute(e,i),this.b.fromBufferAttribute(e,s),this.c.fromBufferAttribute(e,l),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Fi.subVectors(this.c,this.b),Ea.subVectors(this.a,this.b),Fi.cross(Ea).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Bi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,i){return Bi.getBarycoord(e,this.a,this.b,this.c,i)}getInterpolation(e,i,s,l,f){return Bi.getInterpolation(e,this.a,this.b,this.c,i,s,l,f)}containsPoint(e){return Bi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Bi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,i){const s=this.a,l=this.b,f=this.c;let h,d;Kr.subVectors(l,s),Qr.subVectors(f,s),Id.subVectors(e,s);const x=Kr.dot(Id),m=Qr.dot(Id);if(x<=0&&m<=0)return i.copy(s);Fd.subVectors(e,l);const _=Kr.dot(Fd),p=Qr.dot(Fd);if(_>=0&&p<=_)return i.copy(l);const y=x*p-_*m;if(y<=0&&x>=0&&_<=0)return h=x/(x-_),i.copy(s).addScaledVector(Kr,h);Bd.subVectors(e,f);const b=Kr.dot(Bd),E=Qr.dot(Bd);if(E>=0&&b<=E)return i.copy(f);const A=b*m-x*E;if(A<=0&&m>=0&&E<=0)return d=m/(m-E),i.copy(s).addScaledVector(Qr,d);const S=_*E-b*p;if(S<=0&&p-_>=0&&b-E>=0)return Q_.subVectors(f,l),d=(p-_)/(p-_+(b-E)),i.copy(l).addScaledVector(Q_,d);const v=1/(S+A+y);return h=A*v,d=y*v,i.copy(s).addScaledVector(Kr,h).addScaledVector(Qr,d)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const ey={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},fs={h:0,s:0,l:0},hu={h:0,s:0,l:0};function Xd(o,e,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?o+(e-o)*6*i:i<1/2?e:i<2/3?o+(e-o)*6*(2/3-i):o}class Me{constructor(e,i,s){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,i,s)}set(e,i,s){if(i===void 0&&s===void 0){const l=e;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(e,i,s);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,i=di){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Oe.colorSpaceToWorking(this,i),this}setRGB(e,i,s,l=Oe.workingColorSpace){return this.r=e,this.g=i,this.b=s,Oe.colorSpaceToWorking(this,l),this}setHSL(e,i,s,l=Oe.workingColorSpace){if(e=r0(e,1),i=be(i,0,1),s=be(s,0,1),i===0)this.r=this.g=this.b=s;else{const f=s<=.5?s*(1+i):s+i-s*i,h=2*s-f;this.r=Xd(h,f,e+1/3),this.g=Xd(h,f,e),this.b=Xd(h,f,e-1/3)}return Oe.colorSpaceToWorking(this,l),this}setStyle(e,i=di){function s(f){f!==void 0&&parseFloat(f)<1&&oe("Color: Alpha component of "+e+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(e)){let f;const h=l[1],d=l[2];switch(h){case"rgb":case"rgba":if(f=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(f[4]),this.setRGB(Math.min(255,parseInt(f[1],10))/255,Math.min(255,parseInt(f[2],10))/255,Math.min(255,parseInt(f[3],10))/255,i);if(f=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(f[4]),this.setRGB(Math.min(100,parseInt(f[1],10))/100,Math.min(100,parseInt(f[2],10))/100,Math.min(100,parseInt(f[3],10))/100,i);break;case"hsl":case"hsla":if(f=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(f[4]),this.setHSL(parseFloat(f[1])/360,parseFloat(f[2])/100,parseFloat(f[3])/100,i);break;default:oe("Color: Unknown color model "+e)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(e)){const f=l[1],h=f.length;if(h===3)return this.setRGB(parseInt(f.charAt(0),16)/15,parseInt(f.charAt(1),16)/15,parseInt(f.charAt(2),16)/15,i);if(h===6)return this.setHex(parseInt(f,16),i);oe("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,i);return this}setColorName(e,i=di){const s=ey[e.toLowerCase()];return s!==void 0?this.setHex(s,i):oe("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ua(e.r),this.g=Ua(e.g),this.b=Ua(e.b),this}copyLinearToSRGB(e){return this.r=ro(e.r),this.g=ro(e.g),this.b=ro(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=di){return Oe.workingToColorSpace(Hn.copy(this),e),Math.round(be(Hn.r*255,0,255))*65536+Math.round(be(Hn.g*255,0,255))*256+Math.round(be(Hn.b*255,0,255))}getHexString(e=di){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,i=Oe.workingColorSpace){Oe.workingToColorSpace(Hn.copy(this),i);const s=Hn.r,l=Hn.g,f=Hn.b,h=Math.max(s,l,f),d=Math.min(s,l,f);let x,m;const _=(d+h)/2;if(d===h)x=0,m=0;else{const p=h-d;switch(m=_<=.5?p/(h+d):p/(2-h-d),h){case s:x=(l-f)/p+(l<f?6:0);break;case l:x=(f-s)/p+2;break;case f:x=(s-l)/p+4;break}x/=6}return e.h=x,e.s=m,e.l=_,e}getRGB(e,i=Oe.workingColorSpace){return Oe.workingToColorSpace(Hn.copy(this),i),e.r=Hn.r,e.g=Hn.g,e.b=Hn.b,e}getStyle(e=di){Oe.workingToColorSpace(Hn.copy(this),e);const i=Hn.r,s=Hn.g,l=Hn.b;return e!==di?`color(${e} ${i.toFixed(3)} ${s.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(s*255)},${Math.round(l*255)})`}offsetHSL(e,i,s){return this.getHSL(fs),this.setHSL(fs.h+e,fs.s+i,fs.l+s)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,i){return this.r=e.r+i.r,this.g=e.g+i.g,this.b=e.b+i.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,i){return this.r+=(e.r-this.r)*i,this.g+=(e.g-this.g)*i,this.b+=(e.b-this.b)*i,this}lerpColors(e,i,s){return this.r=e.r+(i.r-e.r)*s,this.g=e.g+(i.g-e.g)*s,this.b=e.b+(i.b-e.b)*s,this}lerpHSL(e,i){this.getHSL(fs),e.getHSL(hu);const s=Sl(fs.h,hu.h,i),l=Sl(fs.s,hu.s,i),f=Sl(fs.l,hu.l,i);return this.setHSL(s,l,f),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const i=this.r,s=this.g,l=this.b,f=e.elements;return this.r=f[0]*i+f[3]*s+f[6]*l,this.g=f[1]*i+f[4]*s+f[7]*l,this.b=f[2]*i+f[5]*s+f[8]*l,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,i=0){return this.r=e[i],this.g=e[i+1],this.b=e[i+2],this}toArray(e=[],i=0){return e[i]=this.r,e[i+1]=this.g,e[i+2]=this.b,e}fromBufferAttribute(e,i){return this.r=e.getX(i),this.g=e.getY(i),this.b=e.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Hn=new Me;Me.NAMES=ey;let Y1=0;class mo extends er{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Y1++}),this.uuid=nr(),this.name="",this.type="Material",this.blending=so,this.side=_s,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=cp,this.blendDst=up,this.blendEquation=Zs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Me(0,0,0),this.blendAlpha=0,this.depthFunc=oo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=P_,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Vr,this.stencilZFail=Vr,this.stencilZPass=Vr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const i in e){const s=e[i];if(s===void 0){oe(`Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){oe(`Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(s):l&&l.isVector3&&s&&s.isVector3?l.copy(s):this[i]=s}}toJSON(e){const i=e===void 0||typeof e=="string";i&&(e={textures:{},images:{}});const s={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.color&&this.color.isColor&&(s.color=this.color.getHex()),this.roughness!==void 0&&(s.roughness=this.roughness),this.metalness!==void 0&&(s.metalness=this.metalness),this.sheen!==void 0&&(s.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(s.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(s.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(s.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(s.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(s.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(s.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(s.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(s.shininess=this.shininess),this.clearcoat!==void 0&&(s.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(s.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(s.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(s.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(s.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,s.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(s.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(s.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(s.dispersion=this.dispersion),this.iridescence!==void 0&&(s.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(s.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(s.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(s.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(s.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(s.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(s.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(s.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(s.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(s.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(s.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(s.lightMap=this.lightMap.toJSON(e).uuid,s.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(s.aoMap=this.aoMap.toJSON(e).uuid,s.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(s.bumpMap=this.bumpMap.toJSON(e).uuid,s.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(s.normalMap=this.normalMap.toJSON(e).uuid,s.normalMapType=this.normalMapType,s.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(s.displacementMap=this.displacementMap.toJSON(e).uuid,s.displacementScale=this.displacementScale,s.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(s.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(s.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(s.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(s.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(s.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(s.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(s.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(s.combine=this.combine)),this.envMapRotation!==void 0&&(s.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(s.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(s.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(s.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(s.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(s.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(s.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(s.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(s.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(s.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(s.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(s.size=this.size),this.shadowSide!==null&&(s.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(s.sizeAttenuation=this.sizeAttenuation),this.blending!==so&&(s.blending=this.blending),this.side!==_s&&(s.side=this.side),this.vertexColors===!0&&(s.vertexColors=!0),this.opacity<1&&(s.opacity=this.opacity),this.transparent===!0&&(s.transparent=!0),this.blendSrc!==cp&&(s.blendSrc=this.blendSrc),this.blendDst!==up&&(s.blendDst=this.blendDst),this.blendEquation!==Zs&&(s.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(s.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(s.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(s.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(s.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(s.blendAlpha=this.blendAlpha),this.depthFunc!==oo&&(s.depthFunc=this.depthFunc),this.depthTest===!1&&(s.depthTest=this.depthTest),this.depthWrite===!1&&(s.depthWrite=this.depthWrite),this.colorWrite===!1&&(s.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(s.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==P_&&(s.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(s.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(s.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Vr&&(s.stencilFail=this.stencilFail),this.stencilZFail!==Vr&&(s.stencilZFail=this.stencilZFail),this.stencilZPass!==Vr&&(s.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(s.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(s.rotation=this.rotation),this.polygonOffset===!0&&(s.polygonOffset=!0),this.polygonOffsetFactor!==0&&(s.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(s.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(s.linewidth=this.linewidth),this.dashSize!==void 0&&(s.dashSize=this.dashSize),this.gapSize!==void 0&&(s.gapSize=this.gapSize),this.scale!==void 0&&(s.scale=this.scale),this.dithering===!0&&(s.dithering=!0),this.alphaTest>0&&(s.alphaTest=this.alphaTest),this.alphaHash===!0&&(s.alphaHash=!0),this.alphaToCoverage===!0&&(s.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(s.premultipliedAlpha=!0),this.forceSinglePass===!0&&(s.forceSinglePass=!0),this.wireframe===!0&&(s.wireframe=!0),this.wireframeLinewidth>1&&(s.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(s.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(s.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(s.flatShading=!0),this.visible===!1&&(s.visible=!1),this.toneMapped===!1&&(s.toneMapped=!1),this.fog===!1&&(s.fog=!1),Object.keys(this.userData).length>0&&(s.userData=this.userData);function l(f){const h=[];for(const d in f){const x=f[d];delete x.metadata,h.push(x)}return h}if(i){const f=l(e.textures),h=l(e.images);f.length>0&&(s.textures=f),h.length>0&&(s.images=h)}return s}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const i=e.clippingPlanes;let s=null;if(i!==null){const l=i.length;s=new Array(l);for(let f=0;f!==l;++f)s[f]=i[f].clone()}return this.clippingPlanes=s,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Fu extends mo{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Me(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ia,this.combine=Gv,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const xn=new Z,du=new de;let q1=0;class ea{constructor(e,i,s=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:q1++}),this.name="",this.array=e,this.itemSize=i,this.count=e!==void 0?e.length/i:0,this.normalized=s,this.usage=z_,this.updateRanges=[],this.gpuType=$i,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,i,s){e*=this.itemSize,s*=i.itemSize;for(let l=0,f=this.itemSize;l<f;l++)this.array[e+l]=i.array[s+l];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let i=0,s=this.count;i<s;i++)du.fromBufferAttribute(this,i),du.applyMatrix3(e),this.setXY(i,du.x,du.y);else if(this.itemSize===3)for(let i=0,s=this.count;i<s;i++)xn.fromBufferAttribute(this,i),xn.applyMatrix3(e),this.setXYZ(i,xn.x,xn.y,xn.z);return this}applyMatrix4(e){for(let i=0,s=this.count;i<s;i++)xn.fromBufferAttribute(this,i),xn.applyMatrix4(e),this.setXYZ(i,xn.x,xn.y,xn.z);return this}applyNormalMatrix(e){for(let i=0,s=this.count;i<s;i++)xn.fromBufferAttribute(this,i),xn.applyNormalMatrix(e),this.setXYZ(i,xn.x,xn.y,xn.z);return this}transformDirection(e){for(let i=0,s=this.count;i<s;i++)xn.fromBufferAttribute(this,i),xn.transformDirection(e),this.setXYZ(i,xn.x,xn.y,xn.z);return this}set(e,i=0){return this.array.set(e,i),this}getComponent(e,i){let s=this.array[e*this.itemSize+i];return this.normalized&&(s=no(s,this.array)),s}setComponent(e,i,s){return this.normalized&&(s=qn(s,this.array)),this.array[e*this.itemSize+i]=s,this}getX(e){let i=this.array[e*this.itemSize];return this.normalized&&(i=no(i,this.array)),i}setX(e,i){return this.normalized&&(i=qn(i,this.array)),this.array[e*this.itemSize]=i,this}getY(e){let i=this.array[e*this.itemSize+1];return this.normalized&&(i=no(i,this.array)),i}setY(e,i){return this.normalized&&(i=qn(i,this.array)),this.array[e*this.itemSize+1]=i,this}getZ(e){let i=this.array[e*this.itemSize+2];return this.normalized&&(i=no(i,this.array)),i}setZ(e,i){return this.normalized&&(i=qn(i,this.array)),this.array[e*this.itemSize+2]=i,this}getW(e){let i=this.array[e*this.itemSize+3];return this.normalized&&(i=no(i,this.array)),i}setW(e,i){return this.normalized&&(i=qn(i,this.array)),this.array[e*this.itemSize+3]=i,this}setXY(e,i,s){return e*=this.itemSize,this.normalized&&(i=qn(i,this.array),s=qn(s,this.array)),this.array[e+0]=i,this.array[e+1]=s,this}setXYZ(e,i,s,l){return e*=this.itemSize,this.normalized&&(i=qn(i,this.array),s=qn(s,this.array),l=qn(l,this.array)),this.array[e+0]=i,this.array[e+1]=s,this.array[e+2]=l,this}setXYZW(e,i,s,l,f){return e*=this.itemSize,this.normalized&&(i=qn(i,this.array),s=qn(s,this.array),l=qn(l,this.array),f=qn(f,this.array)),this.array[e+0]=i,this.array[e+1]=s,this.array[e+2]=l,this.array[e+3]=f,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==z_&&(e.usage=this.usage),e}}class ny extends ea{constructor(e,i,s){super(new Uint16Array(e),i,s)}}class iy extends ea{constructor(e,i,s){super(new Uint32Array(e),i,s)}}class on extends ea{constructor(e,i,s){super(new Float32Array(e),i,s)}}let j1=0;const Ai=new Xe,kd=new yn,Jr=new Z,hi=new Cl,dl=new Cl,Rn=new Z;class zn extends er{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:j1++}),this.uuid=nr(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Jv(e)?iy:ny)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,i){return this.attributes[e]=i,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,i,s=0){this.groups.push({start:e,count:i,materialIndex:s})}clearGroups(){this.groups=[]}setDrawRange(e,i){this.drawRange.start=e,this.drawRange.count=i}applyMatrix4(e){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(e),i.needsUpdate=!0);const s=this.attributes.normal;if(s!==void 0){const f=new xe().getNormalMatrix(e);s.applyNormalMatrix(f),s.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(e),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Ai.makeRotationFromQuaternion(e),this.applyMatrix4(Ai),this}rotateX(e){return Ai.makeRotationX(e),this.applyMatrix4(Ai),this}rotateY(e){return Ai.makeRotationY(e),this.applyMatrix4(Ai),this}rotateZ(e){return Ai.makeRotationZ(e),this.applyMatrix4(Ai),this}translate(e,i,s){return Ai.makeTranslation(e,i,s),this.applyMatrix4(Ai),this}scale(e,i,s){return Ai.makeScale(e,i,s),this.applyMatrix4(Ai),this}lookAt(e){return kd.lookAt(e),kd.updateMatrix(),this.applyMatrix4(kd.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Jr).negate(),this.translate(Jr.x,Jr.y,Jr.z),this}setFromPoints(e){const i=this.getAttribute("position");if(i===void 0){const s=[];for(let l=0,f=e.length;l<f;l++){const h=e[l];s.push(h.x,h.y,h.z||0)}this.setAttribute("position",new on(s,3))}else{const s=Math.min(e.length,i.count);for(let l=0;l<s;l++){const f=e[l];i.setXYZ(l,f.x,f.y,f.z||0)}e.length>i.count&&oe("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Cl);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){un("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new Z(-1/0,-1/0,-1/0),new Z(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),i)for(let s=0,l=i.length;s<l;s++){const f=i[s];hi.setFromBufferAttribute(f),this.morphTargetsRelative?(Rn.addVectors(this.boundingBox.min,hi.min),this.boundingBox.expandByPoint(Rn),Rn.addVectors(this.boundingBox.max,hi.max),this.boundingBox.expandByPoint(Rn)):(this.boundingBox.expandByPoint(hi.min),this.boundingBox.expandByPoint(hi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&un('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Xu);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){un("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new Z,1/0);return}if(e){const s=this.boundingSphere.center;if(hi.setFromBufferAttribute(e),i)for(let f=0,h=i.length;f<h;f++){const d=i[f];dl.setFromBufferAttribute(d),this.morphTargetsRelative?(Rn.addVectors(hi.min,dl.min),hi.expandByPoint(Rn),Rn.addVectors(hi.max,dl.max),hi.expandByPoint(Rn)):(hi.expandByPoint(dl.min),hi.expandByPoint(dl.max))}hi.getCenter(s);let l=0;for(let f=0,h=e.count;f<h;f++)Rn.fromBufferAttribute(e,f),l=Math.max(l,s.distanceToSquared(Rn));if(i)for(let f=0,h=i.length;f<h;f++){const d=i[f],x=this.morphTargetsRelative;for(let m=0,_=d.count;m<_;m++)Rn.fromBufferAttribute(d,m),x&&(Jr.fromBufferAttribute(e,m),Rn.add(Jr)),l=Math.max(l,s.distanceToSquared(Rn))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&un('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,i=this.attributes;if(e===null||i.position===void 0||i.normal===void 0||i.uv===void 0){un("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const s=i.position,l=i.normal,f=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ea(new Float32Array(4*s.count),4));const h=this.getAttribute("tangent"),d=[],x=[];for(let X=0;X<s.count;X++)d[X]=new Z,x[X]=new Z;const m=new Z,_=new Z,p=new Z,y=new de,b=new de,E=new de,A=new Z,S=new Z;function v(X,w,C){m.fromBufferAttribute(s,X),_.fromBufferAttribute(s,w),p.fromBufferAttribute(s,C),y.fromBufferAttribute(f,X),b.fromBufferAttribute(f,w),E.fromBufferAttribute(f,C),_.sub(m),p.sub(m),b.sub(y),E.sub(y);const H=1/(b.x*E.y-E.x*b.y);isFinite(H)&&(A.copy(_).multiplyScalar(E.y).addScaledVector(p,-b.y).multiplyScalar(H),S.copy(p).multiplyScalar(b.x).addScaledVector(_,-E.x).multiplyScalar(H),d[X].add(A),d[w].add(A),d[C].add(A),x[X].add(S),x[w].add(S),x[C].add(S))}let N=this.groups;N.length===0&&(N=[{start:0,count:e.count}]);for(let X=0,w=N.length;X<w;++X){const C=N[X],H=C.start,Q=C.count;for(let nt=H,ht=H+Q;nt<ht;nt+=3)v(e.getX(nt+0),e.getX(nt+1),e.getX(nt+2))}const L=new Z,z=new Z,G=new Z,D=new Z;function O(X){G.fromBufferAttribute(l,X),D.copy(G);const w=d[X];L.copy(w),L.sub(G.multiplyScalar(G.dot(w))).normalize(),z.crossVectors(D,w);const H=z.dot(x[X])<0?-1:1;h.setXYZW(X,L.x,L.y,L.z,H)}for(let X=0,w=N.length;X<w;++X){const C=N[X],H=C.start,Q=C.count;for(let nt=H,ht=H+Q;nt<ht;nt+=3)O(e.getX(nt+0)),O(e.getX(nt+1)),O(e.getX(nt+2))}}computeVertexNormals(){const e=this.index,i=this.getAttribute("position");if(i!==void 0){let s=this.getAttribute("normal");if(s===void 0)s=new ea(new Float32Array(i.count*3),3),this.setAttribute("normal",s);else for(let y=0,b=s.count;y<b;y++)s.setXYZ(y,0,0,0);const l=new Z,f=new Z,h=new Z,d=new Z,x=new Z,m=new Z,_=new Z,p=new Z;if(e)for(let y=0,b=e.count;y<b;y+=3){const E=e.getX(y+0),A=e.getX(y+1),S=e.getX(y+2);l.fromBufferAttribute(i,E),f.fromBufferAttribute(i,A),h.fromBufferAttribute(i,S),_.subVectors(h,f),p.subVectors(l,f),_.cross(p),d.fromBufferAttribute(s,E),x.fromBufferAttribute(s,A),m.fromBufferAttribute(s,S),d.add(_),x.add(_),m.add(_),s.setXYZ(E,d.x,d.y,d.z),s.setXYZ(A,x.x,x.y,x.z),s.setXYZ(S,m.x,m.y,m.z)}else for(let y=0,b=i.count;y<b;y+=3)l.fromBufferAttribute(i,y+0),f.fromBufferAttribute(i,y+1),h.fromBufferAttribute(i,y+2),_.subVectors(h,f),p.subVectors(l,f),_.cross(p),s.setXYZ(y+0,_.x,_.y,_.z),s.setXYZ(y+1,_.x,_.y,_.z),s.setXYZ(y+2,_.x,_.y,_.z);this.normalizeNormals(),s.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let i=0,s=e.count;i<s;i++)Rn.fromBufferAttribute(e,i),Rn.normalize(),e.setXYZ(i,Rn.x,Rn.y,Rn.z)}toNonIndexed(){function e(d,x){const m=d.array,_=d.itemSize,p=d.normalized,y=new m.constructor(x.length*_);let b=0,E=0;for(let A=0,S=x.length;A<S;A++){d.isInterleavedBufferAttribute?b=x[A]*d.data.stride+d.offset:b=x[A]*_;for(let v=0;v<_;v++)y[E++]=m[b++]}return new ea(y,_,p)}if(this.index===null)return oe("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new zn,s=this.index.array,l=this.attributes;for(const d in l){const x=l[d],m=e(x,s);i.setAttribute(d,m)}const f=this.morphAttributes;for(const d in f){const x=[],m=f[d];for(let _=0,p=m.length;_<p;_++){const y=m[_],b=e(y,s);x.push(b)}i.morphAttributes[d]=x}i.morphTargetsRelative=this.morphTargetsRelative;const h=this.groups;for(let d=0,x=h.length;d<x;d++){const m=h[d];i.addGroup(m.start,m.count,m.materialIndex)}return i}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const x=this.parameters;for(const m in x)x[m]!==void 0&&(e[m]=x[m]);return e}e.data={attributes:{}};const i=this.index;i!==null&&(e.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const s=this.attributes;for(const x in s){const m=s[x];e.data.attributes[x]=m.toJSON(e.data)}const l={};let f=!1;for(const x in this.morphAttributes){const m=this.morphAttributes[x],_=[];for(let p=0,y=m.length;p<y;p++){const b=m[p];_.push(b.toJSON(e.data))}_.length>0&&(l[x]=_,f=!0)}f&&(e.data.morphAttributes=l,e.data.morphTargetsRelative=this.morphTargetsRelative);const h=this.groups;h.length>0&&(e.data.groups=JSON.parse(JSON.stringify(h)));const d=this.boundingSphere;return d!==null&&(e.data.boundingSphere=d.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=e.name;const s=e.index;s!==null&&this.setIndex(s.clone());const l=e.attributes;for(const m in l){const _=l[m];this.setAttribute(m,_.clone(i))}const f=e.morphAttributes;for(const m in f){const _=[],p=f[m];for(let y=0,b=p.length;y<b;y++)_.push(p[y].clone(i));this.morphAttributes[m]=_}this.morphTargetsRelative=e.morphTargetsRelative;const h=e.groups;for(let m=0,_=h.length;m<_;m++){const p=h[m];this.addGroup(p.start,p.count,p.materialIndex)}const d=e.boundingBox;d!==null&&(this.boundingBox=d.clone());const x=e.boundingSphere;return x!==null&&(this.boundingSphere=x.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const J_=new Xe,Ys=new l0,pu=new Xu,$_=new Z,mu=new Z,xu=new Z,gu=new Z,Yd=new Z,_u=new Z,tv=new Z,vu=new Z;class mi extends yn{constructor(e=new zn,i=new Fu){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let f=0,h=l.length;f<h;f++){const d=l[f].name||String(f);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=f}}}}getVertexPosition(e,i){const s=this.geometry,l=s.attributes.position,f=s.morphAttributes.position,h=s.morphTargetsRelative;i.fromBufferAttribute(l,e);const d=this.morphTargetInfluences;if(f&&d){_u.set(0,0,0);for(let x=0,m=f.length;x<m;x++){const _=d[x],p=f[x];_!==0&&(Yd.fromBufferAttribute(p,e),h?_u.addScaledVector(Yd,_):_u.addScaledVector(Yd.sub(i),_))}i.add(_u)}return i}raycast(e,i){const s=this.geometry,l=this.material,f=this.matrixWorld;l!==void 0&&(s.boundingSphere===null&&s.computeBoundingSphere(),pu.copy(s.boundingSphere),pu.applyMatrix4(f),Ys.copy(e.ray).recast(e.near),!(pu.containsPoint(Ys.origin)===!1&&(Ys.intersectSphere(pu,$_)===null||Ys.origin.distanceToSquared($_)>(e.far-e.near)**2))&&(J_.copy(f).invert(),Ys.copy(e.ray).applyMatrix4(J_),!(s.boundingBox!==null&&Ys.intersectsBox(s.boundingBox)===!1)&&this._computeIntersections(e,i,Ys)))}_computeIntersections(e,i,s){let l;const f=this.geometry,h=this.material,d=f.index,x=f.attributes.position,m=f.attributes.uv,_=f.attributes.uv1,p=f.attributes.normal,y=f.groups,b=f.drawRange;if(d!==null)if(Array.isArray(h))for(let E=0,A=y.length;E<A;E++){const S=y[E],v=h[S.materialIndex],N=Math.max(S.start,b.start),L=Math.min(d.count,Math.min(S.start+S.count,b.start+b.count));for(let z=N,G=L;z<G;z+=3){const D=d.getX(z),O=d.getX(z+1),X=d.getX(z+2);l=yu(this,v,e,s,m,_,p,D,O,X),l&&(l.faceIndex=Math.floor(z/3),l.face.materialIndex=S.materialIndex,i.push(l))}}else{const E=Math.max(0,b.start),A=Math.min(d.count,b.start+b.count);for(let S=E,v=A;S<v;S+=3){const N=d.getX(S),L=d.getX(S+1),z=d.getX(S+2);l=yu(this,h,e,s,m,_,p,N,L,z),l&&(l.faceIndex=Math.floor(S/3),i.push(l))}}else if(x!==void 0)if(Array.isArray(h))for(let E=0,A=y.length;E<A;E++){const S=y[E],v=h[S.materialIndex],N=Math.max(S.start,b.start),L=Math.min(x.count,Math.min(S.start+S.count,b.start+b.count));for(let z=N,G=L;z<G;z+=3){const D=z,O=z+1,X=z+2;l=yu(this,v,e,s,m,_,p,D,O,X),l&&(l.faceIndex=Math.floor(z/3),l.face.materialIndex=S.materialIndex,i.push(l))}}else{const E=Math.max(0,b.start),A=Math.min(x.count,b.start+b.count);for(let S=E,v=A;S<v;S+=3){const N=S,L=S+1,z=S+2;l=yu(this,h,e,s,m,_,p,N,L,z),l&&(l.faceIndex=Math.floor(S/3),i.push(l))}}}}function W1(o,e,i,s,l,f,h,d){let x;if(e.side===ni?x=s.intersectTriangle(h,f,l,!0,d):x=s.intersectTriangle(l,f,h,e.side===_s,d),x===null)return null;vu.copy(d),vu.applyMatrix4(o.matrixWorld);const m=i.ray.origin.distanceTo(vu);return m<i.near||m>i.far?null:{distance:m,point:vu.clone(),object:o}}function yu(o,e,i,s,l,f,h,d,x,m){o.getVertexPosition(d,mu),o.getVertexPosition(x,xu),o.getVertexPosition(m,gu);const _=W1(o,e,i,s,mu,xu,gu,tv);if(_){const p=new Z;Bi.getBarycoord(tv,mu,xu,gu,p),l&&(_.uv=Bi.getInterpolatedAttribute(l,d,x,m,p,new de)),f&&(_.uv1=Bi.getInterpolatedAttribute(f,d,x,m,p,new de)),h&&(_.normal=Bi.getInterpolatedAttribute(h,d,x,m,p,new Z),_.normal.dot(s.direction)>0&&_.normal.multiplyScalar(-1));const y={a:d,b:x,c:m,normal:new Z,materialIndex:0};Bi.getNormal(mu,xu,gu,y.normal),_.face=y,_.barycoord=p}return _}class wl extends zn{constructor(e=1,i=1,s=1,l=1,f=1,h=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:i,depth:s,widthSegments:l,heightSegments:f,depthSegments:h};const d=this;l=Math.floor(l),f=Math.floor(f),h=Math.floor(h);const x=[],m=[],_=[],p=[];let y=0,b=0;E("z","y","x",-1,-1,s,i,e,h,f,0),E("z","y","x",1,-1,s,i,-e,h,f,1),E("x","z","y",1,1,e,s,i,l,h,2),E("x","z","y",1,-1,e,s,-i,l,h,3),E("x","y","z",1,-1,e,i,s,l,f,4),E("x","y","z",-1,-1,e,i,-s,l,f,5),this.setIndex(x),this.setAttribute("position",new on(m,3)),this.setAttribute("normal",new on(_,3)),this.setAttribute("uv",new on(p,2));function E(A,S,v,N,L,z,G,D,O,X,w){const C=z/O,H=G/X,Q=z/2,nt=G/2,ht=D/2,ot=O+1,k=X+1;let ct=0,$=0;const _t=new Z;for(let vt=0;vt<k;vt++){const Yt=vt*H-nt;for(let he=0;he<ot;he++){const Ae=he*C-Q;_t[A]=Ae*N,_t[S]=Yt*L,_t[v]=ht,m.push(_t.x,_t.y,_t.z),_t[A]=0,_t[S]=0,_t[v]=D>0?1:-1,_.push(_t.x,_t.y,_t.z),p.push(he/O),p.push(1-vt/X),ct+=1}}for(let vt=0;vt<X;vt++)for(let Yt=0;Yt<O;Yt++){const he=y+Yt+ot*vt,Ae=y+Yt+ot*(vt+1),I=y+(Yt+1)+ot*(vt+1),dt=y+(Yt+1)+ot*vt;x.push(he,Ae,dt),x.push(Ae,I,dt),$+=6}d.addGroup(b,$,w),b+=$,y+=ct}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new wl(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function ho(o){const e={};for(const i in o){e[i]={};for(const s in o[i]){const l=o[i][s];l&&(l.isColor||l.isMatrix3||l.isMatrix4||l.isVector2||l.isVector3||l.isVector4||l.isTexture||l.isQuaternion)?l.isRenderTargetTexture?(oe("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[i][s]=null):e[i][s]=l.clone():Array.isArray(l)?e[i][s]=l.slice():e[i][s]=l}}return e}function jn(o){const e={};for(let i=0;i<o.length;i++){const s=ho(o[i]);for(const l in s)e[l]=s[l]}return e}function Z1(o){const e=[];for(let i=0;i<o.length;i++)e.push(o[i].clone());return e}function ay(o){const e=o.getRenderTarget();return e===null?o.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Oe.workingColorSpace}const K1={clone:ho,merge:jn};var Q1=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,J1=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Na extends mo{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Q1,this.fragmentShader=J1,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ho(e.uniforms),this.uniformsGroups=Z1(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const i=super.toJSON(e);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const h=this.uniforms[l].value;h&&h.isTexture?i.uniforms[l]={type:"t",value:h.toJSON(e).uuid}:h&&h.isColor?i.uniforms[l]={type:"c",value:h.getHex()}:h&&h.isVector2?i.uniforms[l]={type:"v2",value:h.toArray()}:h&&h.isVector3?i.uniforms[l]={type:"v3",value:h.toArray()}:h&&h.isVector4?i.uniforms[l]={type:"v4",value:h.toArray()}:h&&h.isMatrix3?i.uniforms[l]={type:"m3",value:h.toArray()}:h&&h.isMatrix4?i.uniforms[l]={type:"m4",value:h.toArray()}:i.uniforms[l]={value:h}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const s={};for(const l in this.extensions)this.extensions[l]===!0&&(s[l]=!0);return Object.keys(s).length>0&&(i.extensions=s),i}}class sy extends yn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Xe,this.projectionMatrix=new Xe,this.projectionMatrixInverse=new Xe,this.coordinateSystem=ta,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,i){return super.copy(e,i),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,i){super.updateWorldMatrix(e,i),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const hs=new Z,ev=new de,nv=new de;class Ri extends sy{constructor(e=50,i=1,s=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=s,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const i=.5*this.getFilmHeight()/e;this.fov=Rl*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(yl*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Rl*2*Math.atan(Math.tan(yl*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,i,s){hs.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(hs.x,hs.y).multiplyScalar(-e/hs.z),hs.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),s.set(hs.x,hs.y).multiplyScalar(-e/hs.z)}getViewSize(e,i){return this.getViewBounds(e,ev,nv),i.subVectors(nv,ev)}setViewOffset(e,i,s,l,f,h){this.aspect=e/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=f,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let i=e*Math.tan(yl*.5*this.fov)/this.zoom,s=2*i,l=this.aspect*s,f=-.5*l;const h=this.view;if(this.view!==null&&this.view.enabled){const x=h.fullWidth,m=h.fullHeight;f+=h.offsetX*l/x,i-=h.offsetY*s/m,l*=h.width/x,s*=h.height/m}const d=this.filmOffset;d!==0&&(f+=e*d/this.getFilmWidth()),this.projectionMatrix.makePerspective(f,f+l,i,i-s,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}const $r=-90,to=1;class $1 extends yn{constructor(e,i,s){super(),this.type="CubeCamera",this.renderTarget=s,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new Ri($r,to,e,i);l.layers=this.layers,this.add(l);const f=new Ri($r,to,e,i);f.layers=this.layers,this.add(f);const h=new Ri($r,to,e,i);h.layers=this.layers,this.add(h);const d=new Ri($r,to,e,i);d.layers=this.layers,this.add(d);const x=new Ri($r,to,e,i);x.layers=this.layers,this.add(x);const m=new Ri($r,to,e,i);m.layers=this.layers,this.add(m)}updateCoordinateSystem(){const e=this.coordinateSystem,i=this.children.concat(),[s,l,f,h,d,x]=i;for(const m of i)this.remove(m);if(e===ta)s.up.set(0,1,0),s.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),f.up.set(0,0,-1),f.lookAt(0,1,0),h.up.set(0,0,1),h.lookAt(0,-1,0),d.up.set(0,1,0),d.lookAt(0,0,1),x.up.set(0,1,0),x.lookAt(0,0,-1);else if(e===zu)s.up.set(0,-1,0),s.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),f.up.set(0,0,1),f.lookAt(0,1,0),h.up.set(0,0,-1),h.lookAt(0,-1,0),d.up.set(0,-1,0),d.lookAt(0,0,1),x.up.set(0,-1,0),x.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const m of i)this.add(m),m.updateMatrixWorld()}update(e,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:s,activeMipmapLevel:l}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[f,h,d,x,m,_]=this.children,p=e.getRenderTarget(),y=e.getActiveCubeFace(),b=e.getActiveMipmapLevel(),E=e.xr.enabled;e.xr.enabled=!1;const A=s.texture.generateMipmaps;s.texture.generateMipmaps=!1,e.setRenderTarget(s,0,l),e.render(i,f),e.setRenderTarget(s,1,l),e.render(i,h),e.setRenderTarget(s,2,l),e.render(i,d),e.setRenderTarget(s,3,l),e.render(i,x),e.setRenderTarget(s,4,l),e.render(i,m),s.texture.generateMipmaps=A,e.setRenderTarget(s,5,l),e.render(i,_),e.setRenderTarget(p,y,b),e.xr.enabled=E,s.texture.needsPMREMUpdate=!0}}class ry extends Wn{constructor(e=[],i=lo,s,l,f,h,d,x,m,_){super(e,i,s,l,f,h,d,x,m,_),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class t3 extends tr{constructor(e=1,i={}){super(e,e,i),this.isWebGLCubeRenderTarget=!0;const s={width:e,height:e,depth:1},l=[s,s,s,s,s,s];this.texture=new ry(l),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const s={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},l=new wl(5,5,5),f=new Na({name:"CubemapFromEquirect",uniforms:ho(s.uniforms),vertexShader:s.vertexShader,fragmentShader:s.fragmentShader,side:ni,blending:Da});f.uniforms.tEquirect.value=i;const h=new mi(l,f),d=i.minFilter;return i.minFilter===Qs&&(i.minFilter=Ci),new $1(1,10,this).update(e,h),i.minFilter=d,h.geometry.dispose(),h.material.dispose(),this}clear(e,i=!0,s=!0,l=!0){const f=e.getRenderTarget();for(let h=0;h<6;h++)e.setRenderTarget(this,h),e.clear(i,s,l);e.setRenderTarget(f)}}class gl extends yn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const e3={type:"move"};class qd{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new gl,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new gl,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new Z,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new Z),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new gl,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new Z,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new Z),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const i=this._hand;if(i)for(const s of e.hand.values())this._getHandJoint(i,s)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,i,s){let l=null,f=null,h=null;const d=this._targetRay,x=this._grip,m=this._hand;if(e&&i.session.visibilityState!=="visible-blurred"){if(m&&e.hand){h=!0;for(const A of e.hand.values()){const S=i.getJointPose(A,s),v=this._getHandJoint(m,A);S!==null&&(v.matrix.fromArray(S.transform.matrix),v.matrix.decompose(v.position,v.rotation,v.scale),v.matrixWorldNeedsUpdate=!0,v.jointRadius=S.radius),v.visible=S!==null}const _=m.joints["index-finger-tip"],p=m.joints["thumb-tip"],y=_.position.distanceTo(p.position),b=.02,E=.005;m.inputState.pinching&&y>b+E?(m.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!m.inputState.pinching&&y<=b-E&&(m.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else x!==null&&e.gripSpace&&(f=i.getPose(e.gripSpace,s),f!==null&&(x.matrix.fromArray(f.transform.matrix),x.matrix.decompose(x.position,x.rotation,x.scale),x.matrixWorldNeedsUpdate=!0,f.linearVelocity?(x.hasLinearVelocity=!0,x.linearVelocity.copy(f.linearVelocity)):x.hasLinearVelocity=!1,f.angularVelocity?(x.hasAngularVelocity=!0,x.angularVelocity.copy(f.angularVelocity)):x.hasAngularVelocity=!1));d!==null&&(l=i.getPose(e.targetRaySpace,s),l===null&&f!==null&&(l=f),l!==null&&(d.matrix.fromArray(l.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,l.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(l.linearVelocity)):d.hasLinearVelocity=!1,l.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(l.angularVelocity)):d.hasAngularVelocity=!1,this.dispatchEvent(e3)))}return d!==null&&(d.visible=l!==null),x!==null&&(x.visible=f!==null),m!==null&&(m.visible=h!==null),this}_getHandJoint(e,i){if(e.joints[i.jointName]===void 0){const s=new gl;s.matrixAutoUpdate=!1,s.visible=!1,e.joints[i.jointName]=s,e.add(s)}return e.joints[i.jointName]}}class c0{constructor(e,i=1,s=1e3){this.isFog=!0,this.name="",this.color=new Me(e),this.near=i,this.far=s}clone(){return new c0(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class n3 extends yn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ia,this.environmentIntensity=1,this.environmentRotation=new ia,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,i){return super.copy(e,i),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const i=super.toJSON(e);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}class Lu extends yn{constructor(){super(),this.isBone=!0,this.type="Bone"}}class oy extends Wn{constructor(e=null,i=1,s=1,l,f,h,d,x,m=pi,_=pi,p,y){super(null,h,d,x,m,_,l,f,p,y),this.isDataTexture=!0,this.image={data:e,width:i,height:s},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const iv=new Xe,i3=new Xe;class u0{constructor(e=[],i=[]){this.uuid=nr(),this.bones=e.slice(0),this.boneInverses=i,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,i=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),i.length===0)this.calculateInverses();else if(e.length!==i.length){oe("Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let s=0,l=this.bones.length;s<l;s++)this.boneInverses.push(new Xe)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,i=this.bones.length;e<i;e++){const s=new Xe;this.bones[e]&&s.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(s)}}pose(){for(let e=0,i=this.bones.length;e<i;e++){const s=this.bones[e];s&&s.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,i=this.bones.length;e<i;e++){const s=this.bones[e];s&&(s.parent&&s.parent.isBone?(s.matrix.copy(s.parent.matrixWorld).invert(),s.matrix.multiply(s.matrixWorld)):s.matrix.copy(s.matrixWorld),s.matrix.decompose(s.position,s.quaternion,s.scale))}}update(){const e=this.bones,i=this.boneInverses,s=this.boneMatrices,l=this.boneTexture;for(let f=0,h=e.length;f<h;f++){const d=e[f]?e[f].matrixWorld:i3;iv.multiplyMatrices(d,i[f]),iv.toArray(s,f*16)}l!==null&&(l.needsUpdate=!0)}clone(){return new u0(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const i=new Float32Array(e*e*4);i.set(this.boneMatrices);const s=new oy(i,e,e,wi,$i);return s.needsUpdate=!0,this.boneMatrices=i,this.boneTexture=s,this}getBoneByName(e){for(let i=0,s=this.bones.length;i<s;i++){const l=this.bones[i];if(l.name===e)return l}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,i){this.uuid=e.uuid;for(let s=0,l=e.bones.length;s<l;s++){const f=e.bones[s];let h=i[f];h===void 0&&(oe("Skeleton: No bone found with UUID:",f),h=new Lu),this.bones.push(h),this.boneInverses.push(new Xe().fromArray(e.boneInverses[s]))}return this.init(),this}toJSON(){const e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const i=this.bones,s=this.boneInverses;for(let l=0,f=i.length;l<f;l++){const h=i[l];e.bones.push(h.uuid);const d=s[l];e.boneInverses.push(d.toArray())}return e}}const jd=new Z,a3=new Z,s3=new xe;class ps{constructor(e=new Z(1,0,0),i=0){this.isPlane=!0,this.normal=e,this.constant=i}set(e,i){return this.normal.copy(e),this.constant=i,this}setComponents(e,i,s,l){return this.normal.set(e,i,s),this.constant=l,this}setFromNormalAndCoplanarPoint(e,i){return this.normal.copy(e),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(e,i,s){const l=jd.subVectors(s,i).cross(a3.subVectors(e,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,i){return i.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,i){const s=e.delta(jd),l=this.normal.dot(s);if(l===0)return this.distanceToPoint(e.start)===0?i.copy(e.start):null;const f=-(e.start.dot(this.normal)+this.constant)/l;return f<0||f>1?null:i.copy(e.start).addScaledVector(s,f)}intersectsLine(e){const i=this.distanceToPoint(e.start),s=this.distanceToPoint(e.end);return i<0&&s>0||s<0&&i>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,i){const s=i||s3.getNormalMatrix(e),l=this.coplanarPoint(jd).applyMatrix4(e),f=this.normal.applyMatrix3(s).normalize();return this.constant=-l.dot(f),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const qs=new Xu,r3=new de(.5,.5),Su=new Z;class f0{constructor(e=new ps,i=new ps,s=new ps,l=new ps,f=new ps,h=new ps){this.planes=[e,i,s,l,f,h]}set(e,i,s,l,f,h){const d=this.planes;return d[0].copy(e),d[1].copy(i),d[2].copy(s),d[3].copy(l),d[4].copy(f),d[5].copy(h),this}copy(e){const i=this.planes;for(let s=0;s<6;s++)i[s].copy(e.planes[s]);return this}setFromProjectionMatrix(e,i=ta,s=!1){const l=this.planes,f=e.elements,h=f[0],d=f[1],x=f[2],m=f[3],_=f[4],p=f[5],y=f[6],b=f[7],E=f[8],A=f[9],S=f[10],v=f[11],N=f[12],L=f[13],z=f[14],G=f[15];if(l[0].setComponents(m-h,b-_,v-E,G-N).normalize(),l[1].setComponents(m+h,b+_,v+E,G+N).normalize(),l[2].setComponents(m+d,b+p,v+A,G+L).normalize(),l[3].setComponents(m-d,b-p,v-A,G-L).normalize(),s)l[4].setComponents(x,y,S,z).normalize(),l[5].setComponents(m-x,b-y,v-S,G-z).normalize();else if(l[4].setComponents(m-x,b-y,v-S,G-z).normalize(),i===ta)l[5].setComponents(m+x,b+y,v+S,G+z).normalize();else if(i===zu)l[5].setComponents(x,y,S,z).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),qs.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const i=e.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),qs.copy(i.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(qs)}intersectsSprite(e){qs.center.set(0,0,0);const i=r3.distanceTo(e.center);return qs.radius=.7071067811865476+i,qs.applyMatrix4(e.matrixWorld),this.intersectsSphere(qs)}intersectsSphere(e){const i=this.planes,s=e.center,l=-e.radius;for(let f=0;f<6;f++)if(i[f].distanceToPoint(s)<l)return!1;return!0}intersectsBox(e){const i=this.planes;for(let s=0;s<6;s++){const l=i[s];if(Su.x=l.normal.x>0?e.max.x:e.min.x,Su.y=l.normal.y>0?e.max.y:e.min.y,Su.z=l.normal.z>0?e.max.z:e.min.z,l.distanceToPoint(Su)<0)return!1}return!0}containsPoint(e){const i=this.planes;for(let s=0;s<6;s++)if(i[s].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class ku extends mo{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Me(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Bu=new Z,Hu=new Z,av=new Xe,pl=new l0,bu=new Xu,Wd=new Z,sv=new Z;class _l extends yn{constructor(e=new zn,i=new ku){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const i=e.attributes.position,s=[0];for(let l=1,f=i.count;l<f;l++)Bu.fromBufferAttribute(i,l-1),Hu.fromBufferAttribute(i,l),s[l]=s[l-1],s[l]+=Bu.distanceTo(Hu);e.setAttribute("lineDistance",new on(s,1))}else oe("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,i){const s=this.geometry,l=this.matrixWorld,f=e.params.Line.threshold,h=s.drawRange;if(s.boundingSphere===null&&s.computeBoundingSphere(),bu.copy(s.boundingSphere),bu.applyMatrix4(l),bu.radius+=f,e.ray.intersectsSphere(bu)===!1)return;av.copy(l).invert(),pl.copy(e.ray).applyMatrix4(av);const d=f/((this.scale.x+this.scale.y+this.scale.z)/3),x=d*d,m=this.isLineSegments?2:1,_=s.index,y=s.attributes.position;if(_!==null){const b=Math.max(0,h.start),E=Math.min(_.count,h.start+h.count);for(let A=b,S=E-1;A<S;A+=m){const v=_.getX(A),N=_.getX(A+1),L=Mu(this,e,pl,x,v,N,A);L&&i.push(L)}if(this.isLineLoop){const A=_.getX(E-1),S=_.getX(b),v=Mu(this,e,pl,x,A,S,E-1);v&&i.push(v)}}else{const b=Math.max(0,h.start),E=Math.min(y.count,h.start+h.count);for(let A=b,S=E-1;A<S;A+=m){const v=Mu(this,e,pl,x,A,A+1,A);v&&i.push(v)}if(this.isLineLoop){const A=Mu(this,e,pl,x,E-1,b,E-1);A&&i.push(A)}}}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let f=0,h=l.length;f<h;f++){const d=l[f].name||String(f);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=f}}}}}function Mu(o,e,i,s,l,f,h){const d=o.geometry.attributes.position;if(Bu.fromBufferAttribute(d,l),Hu.fromBufferAttribute(d,f),i.distanceSqToSegment(Bu,Hu,Wd,sv)>s)return;Wd.applyMatrix4(o.matrixWorld);const m=e.ray.origin.distanceTo(Wd);if(!(m<e.near||m>e.far))return{distance:m,point:sv.clone().applyMatrix4(o.matrixWorld),index:h,face:null,faceIndex:null,barycoord:null,object:o}}const rv=new Z,ov=new Z;class Gu extends _l{constructor(e,i){super(e,i),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const i=e.attributes.position,s=[];for(let l=0,f=i.count;l<f;l+=2)rv.fromBufferAttribute(i,l),ov.fromBufferAttribute(i,l+1),s[l]=l===0?0:s[l-1],s[l+1]=s[l]+rv.distanceTo(ov);e.setAttribute("lineDistance",new on(s,1))}else oe("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class ly extends Wn{constructor(e,i,s=Js,l,f,h,d=pi,x=pi,m,_=El,p=1){if(_!==El&&_!==Tl)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const y={width:e,height:i,depth:p};super(y,l,f,h,d,x,_,s,m),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new o0(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const i=super.toJSON(e);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class cy extends Wn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class h0 extends zn{constructor(e=1,i=1,s=1,l=32,f=1,h=!1,d=0,x=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:i,height:s,radialSegments:l,heightSegments:f,openEnded:h,thetaStart:d,thetaLength:x};const m=this;l=Math.floor(l),f=Math.floor(f);const _=[],p=[],y=[],b=[];let E=0;const A=[],S=s/2;let v=0;N(),h===!1&&(e>0&&L(!0),i>0&&L(!1)),this.setIndex(_),this.setAttribute("position",new on(p,3)),this.setAttribute("normal",new on(y,3)),this.setAttribute("uv",new on(b,2));function N(){const z=new Z,G=new Z;let D=0;const O=(i-e)/s;for(let X=0;X<=f;X++){const w=[],C=X/f,H=C*(i-e)+e;for(let Q=0;Q<=l;Q++){const nt=Q/l,ht=nt*x+d,ot=Math.sin(ht),k=Math.cos(ht);G.x=H*ot,G.y=-C*s+S,G.z=H*k,p.push(G.x,G.y,G.z),z.set(ot,O,k).normalize(),y.push(z.x,z.y,z.z),b.push(nt,1-C),w.push(E++)}A.push(w)}for(let X=0;X<l;X++)for(let w=0;w<f;w++){const C=A[w][X],H=A[w+1][X],Q=A[w+1][X+1],nt=A[w][X+1];(e>0||w!==0)&&(_.push(C,H,nt),D+=3),(i>0||w!==f-1)&&(_.push(H,Q,nt),D+=3)}m.addGroup(v,D,0),v+=D}function L(z){const G=E,D=new de,O=new Z;let X=0;const w=z===!0?e:i,C=z===!0?1:-1;for(let Q=1;Q<=l;Q++)p.push(0,S*C,0),y.push(0,C,0),b.push(.5,.5),E++;const H=E;for(let Q=0;Q<=l;Q++){const ht=Q/l*x+d,ot=Math.cos(ht),k=Math.sin(ht);O.x=w*k,O.y=S*C,O.z=w*ot,p.push(O.x,O.y,O.z),y.push(0,C,0),D.x=ot*.5+.5,D.y=k*.5*C+.5,b.push(D.x,D.y),E++}for(let Q=0;Q<l;Q++){const nt=G+Q,ht=H+Q;z===!0?_.push(ht,ht+1,nt):_.push(ht+1,ht,nt),X+=3}m.addGroup(v,X,z===!0?1:2),v+=X}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new h0(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Dl extends zn{constructor(e=1,i=1,s=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:i,widthSegments:s,heightSegments:l};const f=e/2,h=i/2,d=Math.floor(s),x=Math.floor(l),m=d+1,_=x+1,p=e/d,y=i/x,b=[],E=[],A=[],S=[];for(let v=0;v<_;v++){const N=v*y-h;for(let L=0;L<m;L++){const z=L*p-f;E.push(z,-N,0),A.push(0,0,1),S.push(L/d),S.push(1-v/x)}}for(let v=0;v<x;v++)for(let N=0;N<d;N++){const L=N+m*v,z=N+m*(v+1),G=N+1+m*(v+1),D=N+1+m*v;b.push(L,z,D),b.push(z,G,D)}this.setIndex(b),this.setAttribute("position",new on(E,3)),this.setAttribute("normal",new on(A,3)),this.setAttribute("uv",new on(S,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Dl(e.width,e.height,e.widthSegments,e.heightSegments)}}class d0 extends zn{constructor(e=1,i=32,s=16,l=0,f=Math.PI*2,h=0,d=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:i,heightSegments:s,phiStart:l,phiLength:f,thetaStart:h,thetaLength:d},i=Math.max(3,Math.floor(i)),s=Math.max(2,Math.floor(s));const x=Math.min(h+d,Math.PI);let m=0;const _=[],p=new Z,y=new Z,b=[],E=[],A=[],S=[];for(let v=0;v<=s;v++){const N=[],L=v/s;let z=0;v===0&&h===0?z=.5/i:v===s&&x===Math.PI&&(z=-.5/i);for(let G=0;G<=i;G++){const D=G/i;p.x=-e*Math.cos(l+D*f)*Math.sin(h+L*d),p.y=e*Math.cos(h+L*d),p.z=e*Math.sin(l+D*f)*Math.sin(h+L*d),E.push(p.x,p.y,p.z),y.copy(p).normalize(),A.push(y.x,y.y,y.z),S.push(D+z,1-L),N.push(m++)}_.push(N)}for(let v=0;v<s;v++)for(let N=0;N<i;N++){const L=_[v][N+1],z=_[v][N],G=_[v+1][N],D=_[v+1][N+1];(v!==0||h>0)&&b.push(L,z,D),(v!==s-1||x<Math.PI)&&b.push(z,G,D)}this.setIndex(b),this.setAttribute("position",new on(E,3)),this.setAttribute("normal",new on(A,3)),this.setAttribute("uv",new on(S,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new d0(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class p0 extends zn{constructor(e=1,i=.4,s=12,l=48,f=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:i,radialSegments:s,tubularSegments:l,arc:f},s=Math.floor(s),l=Math.floor(l);const h=[],d=[],x=[],m=[],_=new Z,p=new Z,y=new Z;for(let b=0;b<=s;b++)for(let E=0;E<=l;E++){const A=E/l*f,S=b/s*Math.PI*2;p.x=(e+i*Math.cos(S))*Math.cos(A),p.y=(e+i*Math.cos(S))*Math.sin(A),p.z=i*Math.sin(S),d.push(p.x,p.y,p.z),_.x=e*Math.cos(A),_.y=e*Math.sin(A),y.subVectors(p,_).normalize(),x.push(y.x,y.y,y.z),m.push(E/l),m.push(b/s)}for(let b=1;b<=s;b++)for(let E=1;E<=l;E++){const A=(l+1)*b+E-1,S=(l+1)*(b-1)+E-1,v=(l+1)*(b-1)+E,N=(l+1)*b+E;h.push(A,S,N),h.push(S,v,N)}this.setIndex(h),this.setAttribute("position",new on(d,3)),this.setAttribute("normal",new on(x,3)),this.setAttribute("uv",new on(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new p0(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class Zd extends mo{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Me(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Me(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Kv,this.normalScale=new de(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ia,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class o3 extends mo{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=a1,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class l3 extends mo{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class Kd extends ku{constructor(e){super(),this.isLineDashedMaterial=!0,this.type="LineDashedMaterial",this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(e)}copy(e){return super.copy(e),this.scale=e.scale,this.dashSize=e.dashSize,this.gapSize=e.gapSize,this}}class uy extends yn{constructor(e,i=1){super(),this.isLight=!0,this.type="Light",this.color=new Me(e),this.intensity=i}dispose(){}copy(e,i){return super.copy(e,i),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const i=super.toJSON(e);return i.object.color=this.color.getHex(),i.object.intensity=this.intensity,this.groundColor!==void 0&&(i.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(i.object.distance=this.distance),this.angle!==void 0&&(i.object.angle=this.angle),this.decay!==void 0&&(i.object.decay=this.decay),this.penumbra!==void 0&&(i.object.penumbra=this.penumbra),this.shadow!==void 0&&(i.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(i.object.target=this.target.uuid),i}}class c3 extends uy{constructor(e,i,s){super(e,s),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(yn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Me(i)}copy(e,i){return super.copy(e,i),this.groundColor.copy(e.groundColor),this}}const Qd=new Xe,lv=new Z,cv=new Z;class u3{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new de(512,512),this.mapType=na,this.map=null,this.mapPass=null,this.matrix=new Xe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new f0,this._frameExtents=new de(1,1),this._viewportCount=1,this._viewports=[new rn(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const i=this.camera,s=this.matrix;lv.setFromMatrixPosition(e.matrixWorld),i.position.copy(lv),cv.setFromMatrixPosition(e.target.matrixWorld),i.lookAt(cv),i.updateMatrixWorld(),Qd.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Qd,i.coordinateSystem,i.reversedDepth),i.reversedDepth?s.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):s.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),s.multiply(Qd)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class fy extends sy{constructor(e=-1,i=1,s=1,l=-1,f=.1,h=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=i,this.top=s,this.bottom=l,this.near=f,this.far=h,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,i,s,l,f,h){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=f,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),s=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let f=s-e,h=s+e,d=l+i,x=l-i;if(this.view!==null&&this.view.enabled){const m=(this.right-this.left)/this.view.fullWidth/this.zoom,_=(this.top-this.bottom)/this.view.fullHeight/this.zoom;f+=m*this.view.offsetX,h=f+m*this.view.width,d-=_*this.view.offsetY,x=d-_*this.view.height}this.projectionMatrix.makeOrthographic(f,h,d,x,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}class f3 extends u3{constructor(){super(new fy(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class h3 extends uy{constructor(e,i){super(e,i),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(yn.DEFAULT_UP),this.updateMatrix(),this.target=new yn,this.shadow=new f3}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class d3 extends Ri{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class uv{constructor(e=1,i=0,s=0){this.radius=e,this.phi=i,this.theta=s}set(e,i,s){return this.radius=e,this.phi=i,this.theta=s,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=be(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,i,s){return this.radius=Math.sqrt(e*e+i*i+s*s),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,s),this.phi=Math.acos(be(i/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}const ds=new Z,Eu=new Xe,Jd=new Xe;class p3 extends Gu{constructor(e){const i=hy(e),s=new zn,l=[],f=[];for(let m=0;m<i.length;m++){const _=i[m];_.parent&&_.parent.isBone&&(l.push(0,0,0),l.push(0,0,0),f.push(0,0,0),f.push(0,0,0))}s.setAttribute("position",new on(l,3)),s.setAttribute("color",new on(f,3));const h=new ku({vertexColors:!0,depthTest:!1,depthWrite:!1,toneMapped:!1,transparent:!0});super(s,h),this.isSkeletonHelper=!0,this.type="SkeletonHelper",this.root=e,this.bones=i,this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1;const d=new Me(255),x=new Me(65280);this.setColors(d,x)}updateMatrixWorld(e){const i=this.bones,s=this.geometry,l=s.getAttribute("position");Jd.copy(this.root.matrixWorld).invert();for(let f=0,h=0;f<i.length;f++){const d=i[f];d.parent&&d.parent.isBone&&(Eu.multiplyMatrices(Jd,d.matrixWorld),ds.setFromMatrixPosition(Eu),l.setXYZ(h,ds.x,ds.y,ds.z),Eu.multiplyMatrices(Jd,d.parent.matrixWorld),ds.setFromMatrixPosition(Eu),l.setXYZ(h+1,ds.x,ds.y,ds.z),h+=2)}s.getAttribute("position").needsUpdate=!0,super.updateMatrixWorld(e)}setColors(e,i){const l=this.geometry.getAttribute("color");for(let f=0;f<l.count;f+=2)l.setXYZ(f,e.r,e.g,e.b),l.setXYZ(f+1,i.r,i.g,i.b);return l.needsUpdate=!0,this}dispose(){this.geometry.dispose(),this.material.dispose()}}function hy(o){const e=[];o.isBone===!0&&e.push(o);for(let i=0;i<o.children.length;i++)e.push(...hy(o.children[i]));return e}class m3 extends Gu{constructor(e=10,i=10,s=4473924,l=8947848){s=new Me(s),l=new Me(l);const f=i/2,h=e/i,d=e/2,x=[],m=[];for(let y=0,b=0,E=-d;y<=i;y++,E+=h){x.push(-d,0,E,d,0,E),x.push(E,0,-d,E,0,d);const A=y===f?s:l;A.toArray(m,b),b+=3,A.toArray(m,b),b+=3,A.toArray(m,b),b+=3,A.toArray(m,b),b+=3}const _=new zn;_.setAttribute("position",new on(x,3)),_.setAttribute("color",new on(m,3));const p=new ku({vertexColors:!0,toneMapped:!1});super(_,p),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}class x3 extends er{constructor(e,i=null){super(),this.object=e,this.domElement=i,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){if(e===void 0){oe("Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}}function fv(o,e,i,s){const l=g3(s);switch(i){case jv:return o*e;case Zv:return o*e/l.components*l.byteLength;case n0:return o*e/l.components*l.byteLength;case i0:return o*e*2/l.components*l.byteLength;case a0:return o*e*2/l.components*l.byteLength;case Wv:return o*e*3/l.components*l.byteLength;case wi:return o*e*4/l.components*l.byteLength;case s0:return o*e*4/l.components*l.byteLength;case wu:case Du:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*8;case Uu:case Nu:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case Mp:case Tp:return Math.max(o,16)*Math.max(e,8)/4;case bp:case Ep:return Math.max(o,8)*Math.max(e,8)/2;case Ap:case Rp:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*8;case Cp:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case wp:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case Dp:return Math.floor((o+4)/5)*Math.floor((e+3)/4)*16;case Up:return Math.floor((o+4)/5)*Math.floor((e+4)/5)*16;case Np:return Math.floor((o+5)/6)*Math.floor((e+4)/5)*16;case Lp:return Math.floor((o+5)/6)*Math.floor((e+5)/6)*16;case Op:return Math.floor((o+7)/8)*Math.floor((e+4)/5)*16;case Pp:return Math.floor((o+7)/8)*Math.floor((e+5)/6)*16;case zp:return Math.floor((o+7)/8)*Math.floor((e+7)/8)*16;case Ip:return Math.floor((o+9)/10)*Math.floor((e+4)/5)*16;case Fp:return Math.floor((o+9)/10)*Math.floor((e+5)/6)*16;case Bp:return Math.floor((o+9)/10)*Math.floor((e+7)/8)*16;case Hp:return Math.floor((o+9)/10)*Math.floor((e+9)/10)*16;case Gp:return Math.floor((o+11)/12)*Math.floor((e+9)/10)*16;case Vp:return Math.floor((o+11)/12)*Math.floor((e+11)/12)*16;case Xp:case kp:case Yp:return Math.ceil(o/4)*Math.ceil(e/4)*16;case qp:case jp:return Math.ceil(o/4)*Math.ceil(e/4)*8;case Wp:case Zp:return Math.ceil(o/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function g3(o){switch(o){case na:case Xv:return{byteLength:1,components:1};case bl:case kv:case po:return{byteLength:2,components:1};case t0:case e0:return{byteLength:2,components:4};case Js:case $p:case $i:return{byteLength:4,components:1};case Yv:case qv:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${o}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Jp}}));typeof window<"u"&&(window.__THREE__?oe("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Jp);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function dy(){let o=null,e=!1,i=null,s=null;function l(f,h){i(f,h),s=o.requestAnimationFrame(l)}return{start:function(){e!==!0&&i!==null&&(s=o.requestAnimationFrame(l),e=!0)},stop:function(){o.cancelAnimationFrame(s),e=!1},setAnimationLoop:function(f){i=f},setContext:function(f){o=f}}}function _3(o){const e=new WeakMap;function i(d,x){const m=d.array,_=d.usage,p=m.byteLength,y=o.createBuffer();o.bindBuffer(x,y),o.bufferData(x,m,_),d.onUploadCallback();let b;if(m instanceof Float32Array)b=o.FLOAT;else if(typeof Float16Array<"u"&&m instanceof Float16Array)b=o.HALF_FLOAT;else if(m instanceof Uint16Array)d.isFloat16BufferAttribute?b=o.HALF_FLOAT:b=o.UNSIGNED_SHORT;else if(m instanceof Int16Array)b=o.SHORT;else if(m instanceof Uint32Array)b=o.UNSIGNED_INT;else if(m instanceof Int32Array)b=o.INT;else if(m instanceof Int8Array)b=o.BYTE;else if(m instanceof Uint8Array)b=o.UNSIGNED_BYTE;else if(m instanceof Uint8ClampedArray)b=o.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+m);return{buffer:y,type:b,bytesPerElement:m.BYTES_PER_ELEMENT,version:d.version,size:p}}function s(d,x,m){const _=x.array,p=x.updateRanges;if(o.bindBuffer(m,d),p.length===0)o.bufferSubData(m,0,_);else{p.sort((b,E)=>b.start-E.start);let y=0;for(let b=1;b<p.length;b++){const E=p[y],A=p[b];A.start<=E.start+E.count+1?E.count=Math.max(E.count,A.start+A.count-E.start):(++y,p[y]=A)}p.length=y+1;for(let b=0,E=p.length;b<E;b++){const A=p[b];o.bufferSubData(m,A.start*_.BYTES_PER_ELEMENT,_,A.start,A.count)}x.clearUpdateRanges()}x.onUploadCallback()}function l(d){return d.isInterleavedBufferAttribute&&(d=d.data),e.get(d)}function f(d){d.isInterleavedBufferAttribute&&(d=d.data);const x=e.get(d);x&&(o.deleteBuffer(x.buffer),e.delete(d))}function h(d,x){if(d.isInterleavedBufferAttribute&&(d=d.data),d.isGLBufferAttribute){const _=e.get(d);(!_||_.version<d.version)&&e.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}const m=e.get(d);if(m===void 0)e.set(d,i(d,x));else if(m.version<d.version){if(m.size!==d.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(m.buffer,d,x),m.version=d.version}}return{get:l,remove:f,update:h}}var v3=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,y3=`#ifdef USE_ALPHAHASH
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
#endif`,S3=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,b3=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,M3=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,E3=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,T3=`#ifdef USE_AOMAP
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
#endif`,A3=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,R3=`#ifdef USE_BATCHING
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
#endif`,C3=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,w3=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,D3=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,U3=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,N3=`#ifdef USE_IRIDESCENCE
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
#endif`,L3=`#ifdef USE_BUMPMAP
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
#endif`,O3=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,P3=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,z3=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,I3=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,F3=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,B3=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,H3=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,G3=`#if defined( USE_COLOR_ALPHA )
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
#endif`,V3=`#define PI 3.141592653589793
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
} // validated`,X3=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,k3=`vec3 transformedNormal = objectNormal;
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
#endif`,Y3=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,q3=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,j3=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,W3=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Z3="gl_FragColor = linearToOutputTexel( gl_FragColor );",K3=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Q3=`#ifdef USE_ENVMAP
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
#endif`,J3=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,$3=`#ifdef USE_ENVMAP
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
#endif`,tE=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,eE=`#ifdef USE_ENVMAP
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
#endif`,nE=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,iE=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,aE=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,sE=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,rE=`#ifdef USE_GRADIENTMAP
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
}`,oE=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,lE=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,cE=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,uE=`uniform bool receiveShadow;
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
#endif`,fE=`#ifdef USE_ENVMAP
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
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
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
#endif`,hE=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,dE=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,pE=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,mE=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,xE=`PhysicalMaterial material;
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
#endif`,gE=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
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
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 uv = vec2( roughness, dotNV );
	return texture2D( dfgLUT, uv ).rg;
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
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = DFGApprox( vec3(0.0, 0.0, 1.0), vec3(sqrt(1.0 - dotNV * dotNV), 0.0, dotNV), material.roughness );
	vec2 dfgL = DFGApprox( vec3(0.0, 0.0, 1.0), vec3(sqrt(1.0 - dotNL * dotNL), 0.0, dotNL), material.roughness );
	vec3 FssEss_V = material.specularColor * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColor * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColor + ( 1.0 - material.specularColor ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg * Favg + EPSILON );
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
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
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
}`,_E=`
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
#endif`,vE=`#if defined( RE_IndirectDiffuse )
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
#endif`,yE=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,SE=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,bE=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ME=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,EE=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,TE=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,AE=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,RE=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,CE=`#if defined( USE_POINTS_UV )
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
#endif`,wE=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,DE=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,UE=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,NE=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,LE=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,OE=`#ifdef USE_MORPHTARGETS
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
#endif`,PE=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,zE=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,IE=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,FE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,BE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,HE=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,GE=`#ifdef USE_NORMALMAP
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
#endif`,VE=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,XE=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,kE=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,YE=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,qE=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,jE=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,WE=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,ZE=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,KE=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,QE=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,JE=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,$E=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,tT=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,eT=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,nT=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,iT=`float getShadowMask() {
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
}`,aT=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,sT=`#ifdef USE_SKINNING
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
#endif`,rT=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,oT=`#ifdef USE_SKINNING
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
#endif`,lT=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,cT=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,uT=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,fT=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,hT=`#ifdef USE_TRANSMISSION
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
#endif`,dT=`#ifdef USE_TRANSMISSION
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
#endif`,pT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,mT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,xT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,gT=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const _T=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,vT=`uniform sampler2D t2D;
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
}`,yT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ST=`#ifdef ENVMAP_TYPE_CUBE
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
}`,bT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,MT=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ET=`#include <common>
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
}`,TT=`#if DEPTH_PACKING == 3200
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
}`,AT=`#define DISTANCE
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
}`,RT=`#define DISTANCE
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
}`,CT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,wT=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,DT=`uniform float scale;
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
}`,UT=`uniform vec3 diffuse;
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
}`,NT=`#include <common>
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
}`,LT=`uniform vec3 diffuse;
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
}`,OT=`#define LAMBERT
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
}`,PT=`#define LAMBERT
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
}`,zT=`#define MATCAP
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
}`,IT=`#define MATCAP
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
}`,FT=`#define NORMAL
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
}`,BT=`#define NORMAL
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
}`,HT=`#define PHONG
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
}`,GT=`#define PHONG
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
}`,VT=`#define STANDARD
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
}`,XT=`#define STANDARD
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
}`,kT=`#define TOON
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
}`,YT=`#define TOON
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
}`,qT=`uniform float size;
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
}`,jT=`uniform vec3 diffuse;
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
}`,WT=`#include <common>
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
}`,ZT=`uniform vec3 color;
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
}`,KT=`uniform float rotation;
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
}`,QT=`uniform vec3 diffuse;
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
}`,_e={alphahash_fragment:v3,alphahash_pars_fragment:y3,alphamap_fragment:S3,alphamap_pars_fragment:b3,alphatest_fragment:M3,alphatest_pars_fragment:E3,aomap_fragment:T3,aomap_pars_fragment:A3,batching_pars_vertex:R3,batching_vertex:C3,begin_vertex:w3,beginnormal_vertex:D3,bsdfs:U3,iridescence_fragment:N3,bumpmap_pars_fragment:L3,clipping_planes_fragment:O3,clipping_planes_pars_fragment:P3,clipping_planes_pars_vertex:z3,clipping_planes_vertex:I3,color_fragment:F3,color_pars_fragment:B3,color_pars_vertex:H3,color_vertex:G3,common:V3,cube_uv_reflection_fragment:X3,defaultnormal_vertex:k3,displacementmap_pars_vertex:Y3,displacementmap_vertex:q3,emissivemap_fragment:j3,emissivemap_pars_fragment:W3,colorspace_fragment:Z3,colorspace_pars_fragment:K3,envmap_fragment:Q3,envmap_common_pars_fragment:J3,envmap_pars_fragment:$3,envmap_pars_vertex:tE,envmap_physical_pars_fragment:fE,envmap_vertex:eE,fog_vertex:nE,fog_pars_vertex:iE,fog_fragment:aE,fog_pars_fragment:sE,gradientmap_pars_fragment:rE,lightmap_pars_fragment:oE,lights_lambert_fragment:lE,lights_lambert_pars_fragment:cE,lights_pars_begin:uE,lights_toon_fragment:hE,lights_toon_pars_fragment:dE,lights_phong_fragment:pE,lights_phong_pars_fragment:mE,lights_physical_fragment:xE,lights_physical_pars_fragment:gE,lights_fragment_begin:_E,lights_fragment_maps:vE,lights_fragment_end:yE,logdepthbuf_fragment:SE,logdepthbuf_pars_fragment:bE,logdepthbuf_pars_vertex:ME,logdepthbuf_vertex:EE,map_fragment:TE,map_pars_fragment:AE,map_particle_fragment:RE,map_particle_pars_fragment:CE,metalnessmap_fragment:wE,metalnessmap_pars_fragment:DE,morphinstance_vertex:UE,morphcolor_vertex:NE,morphnormal_vertex:LE,morphtarget_pars_vertex:OE,morphtarget_vertex:PE,normal_fragment_begin:zE,normal_fragment_maps:IE,normal_pars_fragment:FE,normal_pars_vertex:BE,normal_vertex:HE,normalmap_pars_fragment:GE,clearcoat_normal_fragment_begin:VE,clearcoat_normal_fragment_maps:XE,clearcoat_pars_fragment:kE,iridescence_pars_fragment:YE,opaque_fragment:qE,packing:jE,premultiplied_alpha_fragment:WE,project_vertex:ZE,dithering_fragment:KE,dithering_pars_fragment:QE,roughnessmap_fragment:JE,roughnessmap_pars_fragment:$E,shadowmap_pars_fragment:tT,shadowmap_pars_vertex:eT,shadowmap_vertex:nT,shadowmask_pars_fragment:iT,skinbase_vertex:aT,skinning_pars_vertex:sT,skinning_vertex:rT,skinnormal_vertex:oT,specularmap_fragment:lT,specularmap_pars_fragment:cT,tonemapping_fragment:uT,tonemapping_pars_fragment:fT,transmission_fragment:hT,transmission_pars_fragment:dT,uv_pars_fragment:pT,uv_pars_vertex:mT,uv_vertex:xT,worldpos_vertex:gT,background_vert:_T,background_frag:vT,backgroundCube_vert:yT,backgroundCube_frag:ST,cube_vert:bT,cube_frag:MT,depth_vert:ET,depth_frag:TT,distanceRGBA_vert:AT,distanceRGBA_frag:RT,equirect_vert:CT,equirect_frag:wT,linedashed_vert:DT,linedashed_frag:UT,meshbasic_vert:NT,meshbasic_frag:LT,meshlambert_vert:OT,meshlambert_frag:PT,meshmatcap_vert:zT,meshmatcap_frag:IT,meshnormal_vert:FT,meshnormal_frag:BT,meshphong_vert:HT,meshphong_frag:GT,meshphysical_vert:VT,meshphysical_frag:XT,meshtoon_vert:kT,meshtoon_frag:YT,points_vert:qT,points_frag:jT,shadow_vert:WT,shadow_frag:ZT,sprite_vert:KT,sprite_frag:QT},zt={common:{diffuse:{value:new Me(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new xe},alphaMap:{value:null},alphaMapTransform:{value:new xe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new xe}},envmap:{envMap:{value:null},envMapRotation:{value:new xe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new xe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new xe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new xe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new xe},normalScale:{value:new de(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new xe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new xe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new xe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new xe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Me(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Me(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new xe},alphaTest:{value:0},uvTransform:{value:new xe}},sprite:{diffuse:{value:new Me(16777215)},opacity:{value:1},center:{value:new de(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new xe},alphaMap:{value:null},alphaMapTransform:{value:new xe},alphaTest:{value:0}}},Ji={basic:{uniforms:jn([zt.common,zt.specularmap,zt.envmap,zt.aomap,zt.lightmap,zt.fog]),vertexShader:_e.meshbasic_vert,fragmentShader:_e.meshbasic_frag},lambert:{uniforms:jn([zt.common,zt.specularmap,zt.envmap,zt.aomap,zt.lightmap,zt.emissivemap,zt.bumpmap,zt.normalmap,zt.displacementmap,zt.fog,zt.lights,{emissive:{value:new Me(0)}}]),vertexShader:_e.meshlambert_vert,fragmentShader:_e.meshlambert_frag},phong:{uniforms:jn([zt.common,zt.specularmap,zt.envmap,zt.aomap,zt.lightmap,zt.emissivemap,zt.bumpmap,zt.normalmap,zt.displacementmap,zt.fog,zt.lights,{emissive:{value:new Me(0)},specular:{value:new Me(1118481)},shininess:{value:30}}]),vertexShader:_e.meshphong_vert,fragmentShader:_e.meshphong_frag},standard:{uniforms:jn([zt.common,zt.envmap,zt.aomap,zt.lightmap,zt.emissivemap,zt.bumpmap,zt.normalmap,zt.displacementmap,zt.roughnessmap,zt.metalnessmap,zt.fog,zt.lights,{emissive:{value:new Me(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:_e.meshphysical_vert,fragmentShader:_e.meshphysical_frag},toon:{uniforms:jn([zt.common,zt.aomap,zt.lightmap,zt.emissivemap,zt.bumpmap,zt.normalmap,zt.displacementmap,zt.gradientmap,zt.fog,zt.lights,{emissive:{value:new Me(0)}}]),vertexShader:_e.meshtoon_vert,fragmentShader:_e.meshtoon_frag},matcap:{uniforms:jn([zt.common,zt.bumpmap,zt.normalmap,zt.displacementmap,zt.fog,{matcap:{value:null}}]),vertexShader:_e.meshmatcap_vert,fragmentShader:_e.meshmatcap_frag},points:{uniforms:jn([zt.points,zt.fog]),vertexShader:_e.points_vert,fragmentShader:_e.points_frag},dashed:{uniforms:jn([zt.common,zt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:_e.linedashed_vert,fragmentShader:_e.linedashed_frag},depth:{uniforms:jn([zt.common,zt.displacementmap]),vertexShader:_e.depth_vert,fragmentShader:_e.depth_frag},normal:{uniforms:jn([zt.common,zt.bumpmap,zt.normalmap,zt.displacementmap,{opacity:{value:1}}]),vertexShader:_e.meshnormal_vert,fragmentShader:_e.meshnormal_frag},sprite:{uniforms:jn([zt.sprite,zt.fog]),vertexShader:_e.sprite_vert,fragmentShader:_e.sprite_frag},background:{uniforms:{uvTransform:{value:new xe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:_e.background_vert,fragmentShader:_e.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new xe}},vertexShader:_e.backgroundCube_vert,fragmentShader:_e.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:_e.cube_vert,fragmentShader:_e.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:_e.equirect_vert,fragmentShader:_e.equirect_frag},distanceRGBA:{uniforms:jn([zt.common,zt.displacementmap,{referencePosition:{value:new Z},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:_e.distanceRGBA_vert,fragmentShader:_e.distanceRGBA_frag},shadow:{uniforms:jn([zt.lights,zt.fog,{color:{value:new Me(0)},opacity:{value:1}}]),vertexShader:_e.shadow_vert,fragmentShader:_e.shadow_frag}};Ji.physical={uniforms:jn([Ji.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new xe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new xe},clearcoatNormalScale:{value:new de(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new xe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new xe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new xe},sheen:{value:0},sheenColor:{value:new Me(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new xe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new xe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new xe},transmissionSamplerSize:{value:new de},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new xe},attenuationDistance:{value:0},attenuationColor:{value:new Me(0)},specularColor:{value:new Me(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new xe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new xe},anisotropyVector:{value:new de},anisotropyMap:{value:null},anisotropyMapTransform:{value:new xe}}]),vertexShader:_e.meshphysical_vert,fragmentShader:_e.meshphysical_frag};const Tu={r:0,b:0,g:0},js=new ia,JT=new Xe;function $T(o,e,i,s,l,f,h){const d=new Me(0);let x=f===!0?0:1,m,_,p=null,y=0,b=null;function E(L){let z=L.isScene===!0?L.background:null;return z&&z.isTexture&&(z=(L.backgroundBlurriness>0?i:e).get(z)),z}function A(L){let z=!1;const G=E(L);G===null?v(d,x):G&&G.isColor&&(v(G,1),z=!0);const D=o.xr.getEnvironmentBlendMode();D==="additive"?s.buffers.color.setClear(0,0,0,1,h):D==="alpha-blend"&&s.buffers.color.setClear(0,0,0,0,h),(o.autoClear||z)&&(s.buffers.depth.setTest(!0),s.buffers.depth.setMask(!0),s.buffers.color.setMask(!0),o.clear(o.autoClearColor,o.autoClearDepth,o.autoClearStencil))}function S(L,z){const G=E(z);G&&(G.isCubeTexture||G.mapping===Vu)?(_===void 0&&(_=new mi(new wl(1,1,1),new Na({name:"BackgroundCubeMaterial",uniforms:ho(Ji.backgroundCube.uniforms),vertexShader:Ji.backgroundCube.vertexShader,fragmentShader:Ji.backgroundCube.fragmentShader,side:ni,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),_.geometry.deleteAttribute("normal"),_.geometry.deleteAttribute("uv"),_.onBeforeRender=function(D,O,X){this.matrixWorld.copyPosition(X.matrixWorld)},Object.defineProperty(_.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),l.update(_)),js.copy(z.backgroundRotation),js.x*=-1,js.y*=-1,js.z*=-1,G.isCubeTexture&&G.isRenderTargetTexture===!1&&(js.y*=-1,js.z*=-1),_.material.uniforms.envMap.value=G,_.material.uniforms.flipEnvMap.value=G.isCubeTexture&&G.isRenderTargetTexture===!1?-1:1,_.material.uniforms.backgroundBlurriness.value=z.backgroundBlurriness,_.material.uniforms.backgroundIntensity.value=z.backgroundIntensity,_.material.uniforms.backgroundRotation.value.setFromMatrix4(JT.makeRotationFromEuler(js)),_.material.toneMapped=Oe.getTransfer(G.colorSpace)!==qe,(p!==G||y!==G.version||b!==o.toneMapping)&&(_.material.needsUpdate=!0,p=G,y=G.version,b=o.toneMapping),_.layers.enableAll(),L.unshift(_,_.geometry,_.material,0,0,null)):G&&G.isTexture&&(m===void 0&&(m=new mi(new Dl(2,2),new Na({name:"BackgroundMaterial",uniforms:ho(Ji.background.uniforms),vertexShader:Ji.background.vertexShader,fragmentShader:Ji.background.fragmentShader,side:_s,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),m.geometry.deleteAttribute("normal"),Object.defineProperty(m.material,"map",{get:function(){return this.uniforms.t2D.value}}),l.update(m)),m.material.uniforms.t2D.value=G,m.material.uniforms.backgroundIntensity.value=z.backgroundIntensity,m.material.toneMapped=Oe.getTransfer(G.colorSpace)!==qe,G.matrixAutoUpdate===!0&&G.updateMatrix(),m.material.uniforms.uvTransform.value.copy(G.matrix),(p!==G||y!==G.version||b!==o.toneMapping)&&(m.material.needsUpdate=!0,p=G,y=G.version,b=o.toneMapping),m.layers.enableAll(),L.unshift(m,m.geometry,m.material,0,0,null))}function v(L,z){L.getRGB(Tu,ay(o)),s.buffers.color.setClear(Tu.r,Tu.g,Tu.b,z,h)}function N(){_!==void 0&&(_.geometry.dispose(),_.material.dispose(),_=void 0),m!==void 0&&(m.geometry.dispose(),m.material.dispose(),m=void 0)}return{getClearColor:function(){return d},setClearColor:function(L,z=1){d.set(L),x=z,v(d,x)},getClearAlpha:function(){return x},setClearAlpha:function(L){x=L,v(d,x)},render:A,addToRenderList:S,dispose:N}}function tA(o,e){const i=o.getParameter(o.MAX_VERTEX_ATTRIBS),s={},l=y(null);let f=l,h=!1;function d(C,H,Q,nt,ht){let ot=!1;const k=p(nt,Q,H);f!==k&&(f=k,m(f.object)),ot=b(C,nt,Q,ht),ot&&E(C,nt,Q,ht),ht!==null&&e.update(ht,o.ELEMENT_ARRAY_BUFFER),(ot||h)&&(h=!1,z(C,H,Q,nt),ht!==null&&o.bindBuffer(o.ELEMENT_ARRAY_BUFFER,e.get(ht).buffer))}function x(){return o.createVertexArray()}function m(C){return o.bindVertexArray(C)}function _(C){return o.deleteVertexArray(C)}function p(C,H,Q){const nt=Q.wireframe===!0;let ht=s[C.id];ht===void 0&&(ht={},s[C.id]=ht);let ot=ht[H.id];ot===void 0&&(ot={},ht[H.id]=ot);let k=ot[nt];return k===void 0&&(k=y(x()),ot[nt]=k),k}function y(C){const H=[],Q=[],nt=[];for(let ht=0;ht<i;ht++)H[ht]=0,Q[ht]=0,nt[ht]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:H,enabledAttributes:Q,attributeDivisors:nt,object:C,attributes:{},index:null}}function b(C,H,Q,nt){const ht=f.attributes,ot=H.attributes;let k=0;const ct=Q.getAttributes();for(const $ in ct)if(ct[$].location>=0){const vt=ht[$];let Yt=ot[$];if(Yt===void 0&&($==="instanceMatrix"&&C.instanceMatrix&&(Yt=C.instanceMatrix),$==="instanceColor"&&C.instanceColor&&(Yt=C.instanceColor)),vt===void 0||vt.attribute!==Yt||Yt&&vt.data!==Yt.data)return!0;k++}return f.attributesNum!==k||f.index!==nt}function E(C,H,Q,nt){const ht={},ot=H.attributes;let k=0;const ct=Q.getAttributes();for(const $ in ct)if(ct[$].location>=0){let vt=ot[$];vt===void 0&&($==="instanceMatrix"&&C.instanceMatrix&&(vt=C.instanceMatrix),$==="instanceColor"&&C.instanceColor&&(vt=C.instanceColor));const Yt={};Yt.attribute=vt,vt&&vt.data&&(Yt.data=vt.data),ht[$]=Yt,k++}f.attributes=ht,f.attributesNum=k,f.index=nt}function A(){const C=f.newAttributes;for(let H=0,Q=C.length;H<Q;H++)C[H]=0}function S(C){v(C,0)}function v(C,H){const Q=f.newAttributes,nt=f.enabledAttributes,ht=f.attributeDivisors;Q[C]=1,nt[C]===0&&(o.enableVertexAttribArray(C),nt[C]=1),ht[C]!==H&&(o.vertexAttribDivisor(C,H),ht[C]=H)}function N(){const C=f.newAttributes,H=f.enabledAttributes;for(let Q=0,nt=H.length;Q<nt;Q++)H[Q]!==C[Q]&&(o.disableVertexAttribArray(Q),H[Q]=0)}function L(C,H,Q,nt,ht,ot,k){k===!0?o.vertexAttribIPointer(C,H,Q,ht,ot):o.vertexAttribPointer(C,H,Q,nt,ht,ot)}function z(C,H,Q,nt){A();const ht=nt.attributes,ot=Q.getAttributes(),k=H.defaultAttributeValues;for(const ct in ot){const $=ot[ct];if($.location>=0){let _t=ht[ct];if(_t===void 0&&(ct==="instanceMatrix"&&C.instanceMatrix&&(_t=C.instanceMatrix),ct==="instanceColor"&&C.instanceColor&&(_t=C.instanceColor)),_t!==void 0){const vt=_t.normalized,Yt=_t.itemSize,he=e.get(_t);if(he===void 0)continue;const Ae=he.buffer,I=he.type,dt=he.bytesPerElement,et=I===o.INT||I===o.UNSIGNED_INT||_t.gpuType===$p;if(_t.isInterleavedBufferAttribute){const st=_t.data,bt=st.stride,Pt=_t.offset;if(st.isInstancedInterleavedBuffer){for(let Rt=0;Rt<$.locationSize;Rt++)v($.location+Rt,st.meshPerAttribute);C.isInstancedMesh!==!0&&nt._maxInstanceCount===void 0&&(nt._maxInstanceCount=st.meshPerAttribute*st.count)}else for(let Rt=0;Rt<$.locationSize;Rt++)S($.location+Rt);o.bindBuffer(o.ARRAY_BUFFER,Ae);for(let Rt=0;Rt<$.locationSize;Rt++)L($.location+Rt,Yt/$.locationSize,I,vt,bt*dt,(Pt+Yt/$.locationSize*Rt)*dt,et)}else{if(_t.isInstancedBufferAttribute){for(let st=0;st<$.locationSize;st++)v($.location+st,_t.meshPerAttribute);C.isInstancedMesh!==!0&&nt._maxInstanceCount===void 0&&(nt._maxInstanceCount=_t.meshPerAttribute*_t.count)}else for(let st=0;st<$.locationSize;st++)S($.location+st);o.bindBuffer(o.ARRAY_BUFFER,Ae);for(let st=0;st<$.locationSize;st++)L($.location+st,Yt/$.locationSize,I,vt,Yt*dt,Yt/$.locationSize*st*dt,et)}}else if(k!==void 0){const vt=k[ct];if(vt!==void 0)switch(vt.length){case 2:o.vertexAttrib2fv($.location,vt);break;case 3:o.vertexAttrib3fv($.location,vt);break;case 4:o.vertexAttrib4fv($.location,vt);break;default:o.vertexAttrib1fv($.location,vt)}}}}N()}function G(){X();for(const C in s){const H=s[C];for(const Q in H){const nt=H[Q];for(const ht in nt)_(nt[ht].object),delete nt[ht];delete H[Q]}delete s[C]}}function D(C){if(s[C.id]===void 0)return;const H=s[C.id];for(const Q in H){const nt=H[Q];for(const ht in nt)_(nt[ht].object),delete nt[ht];delete H[Q]}delete s[C.id]}function O(C){for(const H in s){const Q=s[H];if(Q[C.id]===void 0)continue;const nt=Q[C.id];for(const ht in nt)_(nt[ht].object),delete nt[ht];delete Q[C.id]}}function X(){w(),h=!0,f!==l&&(f=l,m(f.object))}function w(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:X,resetDefaultState:w,dispose:G,releaseStatesOfGeometry:D,releaseStatesOfProgram:O,initAttributes:A,enableAttribute:S,disableUnusedAttributes:N}}function eA(o,e,i){let s;function l(m){s=m}function f(m,_){o.drawArrays(s,m,_),i.update(_,s,1)}function h(m,_,p){p!==0&&(o.drawArraysInstanced(s,m,_,p),i.update(_,s,p))}function d(m,_,p){if(p===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(s,m,0,_,0,p);let b=0;for(let E=0;E<p;E++)b+=_[E];i.update(b,s,1)}function x(m,_,p,y){if(p===0)return;const b=e.get("WEBGL_multi_draw");if(b===null)for(let E=0;E<m.length;E++)h(m[E],_[E],y[E]);else{b.multiDrawArraysInstancedWEBGL(s,m,0,_,0,y,0,p);let E=0;for(let A=0;A<p;A++)E+=_[A]*y[A];i.update(E,s,1)}}this.setMode=l,this.render=f,this.renderInstances=h,this.renderMultiDraw=d,this.renderMultiDrawInstances=x}function nA(o,e,i,s){let l;function f(){if(l!==void 0)return l;if(e.has("EXT_texture_filter_anisotropic")===!0){const O=e.get("EXT_texture_filter_anisotropic");l=o.getParameter(O.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function h(O){return!(O!==wi&&s.convert(O)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_FORMAT))}function d(O){const X=O===po&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(O!==na&&s.convert(O)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_TYPE)&&O!==$i&&!X)}function x(O){if(O==="highp"){if(o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.HIGH_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.HIGH_FLOAT).precision>0)return"highp";O="mediump"}return O==="mediump"&&o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.MEDIUM_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let m=i.precision!==void 0?i.precision:"highp";const _=x(m);_!==m&&(oe("WebGLRenderer:",m,"not supported, using",_,"instead."),m=_);const p=i.logarithmicDepthBuffer===!0,y=i.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),b=o.getParameter(o.MAX_TEXTURE_IMAGE_UNITS),E=o.getParameter(o.MAX_VERTEX_TEXTURE_IMAGE_UNITS),A=o.getParameter(o.MAX_TEXTURE_SIZE),S=o.getParameter(o.MAX_CUBE_MAP_TEXTURE_SIZE),v=o.getParameter(o.MAX_VERTEX_ATTRIBS),N=o.getParameter(o.MAX_VERTEX_UNIFORM_VECTORS),L=o.getParameter(o.MAX_VARYING_VECTORS),z=o.getParameter(o.MAX_FRAGMENT_UNIFORM_VECTORS),G=E>0,D=o.getParameter(o.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:f,getMaxPrecision:x,textureFormatReadable:h,textureTypeReadable:d,precision:m,logarithmicDepthBuffer:p,reversedDepthBuffer:y,maxTextures:b,maxVertexTextures:E,maxTextureSize:A,maxCubemapSize:S,maxAttributes:v,maxVertexUniforms:N,maxVaryings:L,maxFragmentUniforms:z,vertexTextures:G,maxSamples:D}}function iA(o){const e=this;let i=null,s=0,l=!1,f=!1;const h=new ps,d=new xe,x={value:null,needsUpdate:!1};this.uniform=x,this.numPlanes=0,this.numIntersection=0,this.init=function(p,y){const b=p.length!==0||y||s!==0||l;return l=y,s=p.length,b},this.beginShadows=function(){f=!0,_(null)},this.endShadows=function(){f=!1},this.setGlobalState=function(p,y){i=_(p,y,0)},this.setState=function(p,y,b){const E=p.clippingPlanes,A=p.clipIntersection,S=p.clipShadows,v=o.get(p);if(!l||E===null||E.length===0||f&&!S)f?_(null):m();else{const N=f?0:s,L=N*4;let z=v.clippingState||null;x.value=z,z=_(E,y,L,b);for(let G=0;G!==L;++G)z[G]=i[G];v.clippingState=z,this.numIntersection=A?this.numPlanes:0,this.numPlanes+=N}};function m(){x.value!==i&&(x.value=i,x.needsUpdate=s>0),e.numPlanes=s,e.numIntersection=0}function _(p,y,b,E){const A=p!==null?p.length:0;let S=null;if(A!==0){if(S=x.value,E!==!0||S===null){const v=b+A*4,N=y.matrixWorldInverse;d.getNormalMatrix(N),(S===null||S.length<v)&&(S=new Float32Array(v));for(let L=0,z=b;L!==A;++L,z+=4)h.copy(p[L]).applyMatrix4(N,d),h.normal.toArray(S,z),S[z+3]=h.constant}x.value=S,x.needsUpdate=!0}return e.numPlanes=A,e.numIntersection=0,S}}function aA(o){let e=new WeakMap;function i(h,d){return d===_p?h.mapping=lo:d===vp&&(h.mapping=co),h}function s(h){if(h&&h.isTexture){const d=h.mapping;if(d===_p||d===vp)if(e.has(h)){const x=e.get(h).texture;return i(x,h.mapping)}else{const x=h.image;if(x&&x.height>0){const m=new t3(x.height);return m.fromEquirectangularTexture(o,h),e.set(h,m),h.addEventListener("dispose",l),i(m.texture,h.mapping)}else return null}}return h}function l(h){const d=h.target;d.removeEventListener("dispose",l);const x=e.get(d);x!==void 0&&(e.delete(d),x.dispose())}function f(){e=new WeakMap}return{get:s,dispose:f}}const xs=4,hv=[.125,.215,.35,.446,.526,.582],Ks=20,sA=256,ml=new fy,dv=new Me;let $d=null,tp=0,ep=0,np=!1;const rA=new Z;class pv{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,i=0,s=.1,l=100,f={}){const{size:h=256,position:d=rA}=f;$d=this._renderer.getRenderTarget(),tp=this._renderer.getActiveCubeFace(),ep=this._renderer.getActiveMipmapLevel(),np=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(h);const x=this._allocateTargets();return x.depthBuffer=!0,this._sceneToCubeUV(e,s,l,x,d),i>0&&this._blur(x,0,0,i),this._applyPMREM(x),this._cleanup(x),x}fromEquirectangular(e,i=null){return this._fromTexture(e,i)}fromCubemap(e,i=null){return this._fromTexture(e,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=gv(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=xv(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget($d,tp,ep),this._renderer.xr.enabled=np,e.scissorTest=!1,eo(e,0,0,e.width,e.height)}_fromTexture(e,i){e.mapping===lo||e.mapping===co?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),$d=this._renderer.getRenderTarget(),tp=this._renderer.getActiveCubeFace(),ep=this._renderer.getActiveMipmapLevel(),np=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const s=i||this._allocateTargets();return this._textureToCubeUV(e,s),this._applyPMREM(s),this._cleanup(s),s}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,s={magFilter:Ci,minFilter:Ci,generateMipmaps:!1,type:po,format:wi,colorSpace:uo,depthBuffer:!1},l=mv(e,i,s);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=mv(e,i,s);const{_lodMax:f}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=oA(f)),this._blurMaterial=cA(f,e,i),this._ggxMaterial=lA(f,e,i)}return l}_compileMaterial(e){const i=new mi(new zn,e);this._renderer.compile(i,ml)}_sceneToCubeUV(e,i,s,l,f){const x=new Ri(90,1,i,s),m=[1,-1,1,1,1,1],_=[1,1,1,-1,-1,-1],p=this._renderer,y=p.autoClear,b=p.toneMapping;p.getClearColor(dv),p.toneMapping=gs,p.autoClear=!1,p.state.buffers.depth.getReversed()&&(p.setRenderTarget(l),p.clearDepth(),p.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new mi(new wl,new Fu({name:"PMREM.Background",side:ni,depthWrite:!1,depthTest:!1})));const A=this._backgroundBox,S=A.material;let v=!1;const N=e.background;N?N.isColor&&(S.color.copy(N),e.background=null,v=!0):(S.color.copy(dv),v=!0);for(let L=0;L<6;L++){const z=L%3;z===0?(x.up.set(0,m[L],0),x.position.set(f.x,f.y,f.z),x.lookAt(f.x+_[L],f.y,f.z)):z===1?(x.up.set(0,0,m[L]),x.position.set(f.x,f.y,f.z),x.lookAt(f.x,f.y+_[L],f.z)):(x.up.set(0,m[L],0),x.position.set(f.x,f.y,f.z),x.lookAt(f.x,f.y,f.z+_[L]));const G=this._cubeSize;eo(l,z*G,L>2?G:0,G,G),p.setRenderTarget(l),v&&p.render(A,x),p.render(e,x)}p.toneMapping=b,p.autoClear=y,e.background=N}_textureToCubeUV(e,i){const s=this._renderer,l=e.mapping===lo||e.mapping===co;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=gv()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=xv());const f=l?this._cubemapMaterial:this._equirectMaterial,h=this._lodMeshes[0];h.material=f;const d=f.uniforms;d.envMap.value=e;const x=this._cubeSize;eo(i,0,0,3*x,2*x),s.setRenderTarget(i),s.render(h,ml)}_applyPMREM(e){const i=this._renderer,s=i.autoClear;i.autoClear=!1;const l=this._lodMeshes.length;for(let f=1;f<l;f++)this._applyGGXFilter(e,f-1,f);i.autoClear=s}_applyGGXFilter(e,i,s){const l=this._renderer,f=this._pingPongRenderTarget,h=this._ggxMaterial,d=this._lodMeshes[s];d.material=h;const x=h.uniforms,m=s/(this._lodMeshes.length-1),_=i/(this._lodMeshes.length-1),p=Math.sqrt(m*m-_*_),y=.05+m*.95,b=p*y,{_lodMax:E}=this,A=this._sizeLods[s],S=3*A*(s>E-xs?s-E+xs:0),v=4*(this._cubeSize-A);x.envMap.value=e.texture,x.roughness.value=b,x.mipInt.value=E-i,eo(f,S,v,3*A,2*A),l.setRenderTarget(f),l.render(d,ml),x.envMap.value=f.texture,x.roughness.value=0,x.mipInt.value=E-s,eo(e,S,v,3*A,2*A),l.setRenderTarget(e),l.render(d,ml)}_blur(e,i,s,l,f){const h=this._pingPongRenderTarget;this._halfBlur(e,h,i,s,l,"latitudinal",f),this._halfBlur(h,e,s,s,l,"longitudinal",f)}_halfBlur(e,i,s,l,f,h,d){const x=this._renderer,m=this._blurMaterial;h!=="latitudinal"&&h!=="longitudinal"&&un("blur direction must be either latitudinal or longitudinal!");const _=3,p=this._lodMeshes[l];p.material=m;const y=m.uniforms,b=this._sizeLods[s]-1,E=isFinite(f)?Math.PI/(2*b):2*Math.PI/(2*Ks-1),A=f/E,S=isFinite(f)?1+Math.floor(_*A):Ks;S>Ks&&oe(`sigmaRadians, ${f}, is too large and will clip, as it requested ${S} samples when the maximum is set to ${Ks}`);const v=[];let N=0;for(let O=0;O<Ks;++O){const X=O/A,w=Math.exp(-X*X/2);v.push(w),O===0?N+=w:O<S&&(N+=2*w)}for(let O=0;O<v.length;O++)v[O]=v[O]/N;y.envMap.value=e.texture,y.samples.value=S,y.weights.value=v,y.latitudinal.value=h==="latitudinal",d&&(y.poleAxis.value=d);const{_lodMax:L}=this;y.dTheta.value=E,y.mipInt.value=L-s;const z=this._sizeLods[l],G=3*z*(l>L-xs?l-L+xs:0),D=4*(this._cubeSize-z);eo(i,G,D,3*z,2*z),x.setRenderTarget(i),x.render(p,ml)}}function oA(o){const e=[],i=[],s=[];let l=o;const f=o-xs+1+hv.length;for(let h=0;h<f;h++){const d=Math.pow(2,l);e.push(d);let x=1/d;h>o-xs?x=hv[h-o+xs-1]:h===0&&(x=0),i.push(x);const m=1/(d-2),_=-m,p=1+m,y=[_,_,p,_,p,p,_,_,p,p,_,p],b=6,E=6,A=3,S=2,v=1,N=new Float32Array(A*E*b),L=new Float32Array(S*E*b),z=new Float32Array(v*E*b);for(let D=0;D<b;D++){const O=D%3*2/3-1,X=D>2?0:-1,w=[O,X,0,O+2/3,X,0,O+2/3,X+1,0,O,X,0,O+2/3,X+1,0,O,X+1,0];N.set(w,A*E*D),L.set(y,S*E*D);const C=[D,D,D,D,D,D];z.set(C,v*E*D)}const G=new zn;G.setAttribute("position",new ea(N,A)),G.setAttribute("uv",new ea(L,S)),G.setAttribute("faceIndex",new ea(z,v)),s.push(new mi(G,null)),l>xs&&l--}return{lodMeshes:s,sizeLods:e,sigmas:i}}function mv(o,e,i){const s=new tr(o,e,i);return s.texture.mapping=Vu,s.texture.name="PMREM.cubeUv",s.scissorTest=!0,s}function eo(o,e,i,s,l){o.viewport.set(e,i,s,l),o.scissor.set(e,i,s,l)}function lA(o,e,i){return new Na({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:sA,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Yu(),fragmentShader:`

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

				// Section 3.2: Transform view direction to hemisphere configuration
				vec3 Vh = normalize(vec3(alpha * V.x, alpha * V.y, V.z));

				// Section 4.1: Orthonormal basis
				float lensq = Vh.x * Vh.x + Vh.y * Vh.y;
				vec3 T1 = lensq > 0.0 ? vec3(-Vh.y, Vh.x, 0.0) / sqrt(lensq) : vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(Vh, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + Vh.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * Vh;

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
		`,blending:Da,depthTest:!1,depthWrite:!1})}function cA(o,e,i){const s=new Float32Array(Ks),l=new Z(0,1,0);return new Na({name:"SphericalGaussianBlur",defines:{n:Ks,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:s},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:Yu(),fragmentShader:`

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
		`,blending:Da,depthTest:!1,depthWrite:!1})}function xv(){return new Na({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Yu(),fragmentShader:`

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
		`,blending:Da,depthTest:!1,depthWrite:!1})}function gv(){return new Na({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Yu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Da,depthTest:!1,depthWrite:!1})}function Yu(){return`

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
	`}function uA(o){let e=new WeakMap,i=null;function s(d){if(d&&d.isTexture){const x=d.mapping,m=x===_p||x===vp,_=x===lo||x===co;if(m||_){let p=e.get(d);const y=p!==void 0?p.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==y)return i===null&&(i=new pv(o)),p=m?i.fromEquirectangular(d,p):i.fromCubemap(d,p),p.texture.pmremVersion=d.pmremVersion,e.set(d,p),p.texture;if(p!==void 0)return p.texture;{const b=d.image;return m&&b&&b.height>0||_&&b&&l(b)?(i===null&&(i=new pv(o)),p=m?i.fromEquirectangular(d):i.fromCubemap(d),p.texture.pmremVersion=d.pmremVersion,e.set(d,p),d.addEventListener("dispose",f),p.texture):null}}}return d}function l(d){let x=0;const m=6;for(let _=0;_<m;_++)d[_]!==void 0&&x++;return x===m}function f(d){const x=d.target;x.removeEventListener("dispose",f);const m=e.get(x);m!==void 0&&(e.delete(x),m.dispose())}function h(){e=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:h}}function fA(o){const e={};function i(s){if(e[s]!==void 0)return e[s];const l=o.getExtension(s);return e[s]=l,l}return{has:function(s){return i(s)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(s){const l=i(s);return l===null&&Al("WebGLRenderer: "+s+" extension not supported."),l}}}function hA(o,e,i,s){const l={},f=new WeakMap;function h(p){const y=p.target;y.index!==null&&e.remove(y.index);for(const E in y.attributes)e.remove(y.attributes[E]);y.removeEventListener("dispose",h),delete l[y.id];const b=f.get(y);b&&(e.remove(b),f.delete(y)),s.releaseStatesOfGeometry(y),y.isInstancedBufferGeometry===!0&&delete y._maxInstanceCount,i.memory.geometries--}function d(p,y){return l[y.id]===!0||(y.addEventListener("dispose",h),l[y.id]=!0,i.memory.geometries++),y}function x(p){const y=p.attributes;for(const b in y)e.update(y[b],o.ARRAY_BUFFER)}function m(p){const y=[],b=p.index,E=p.attributes.position;let A=0;if(b!==null){const N=b.array;A=b.version;for(let L=0,z=N.length;L<z;L+=3){const G=N[L+0],D=N[L+1],O=N[L+2];y.push(G,D,D,O,O,G)}}else if(E!==void 0){const N=E.array;A=E.version;for(let L=0,z=N.length/3-1;L<z;L+=3){const G=L+0,D=L+1,O=L+2;y.push(G,D,D,O,O,G)}}else return;const S=new(Jv(y)?iy:ny)(y,1);S.version=A;const v=f.get(p);v&&e.remove(v),f.set(p,S)}function _(p){const y=f.get(p);if(y){const b=p.index;b!==null&&y.version<b.version&&m(p)}else m(p);return f.get(p)}return{get:d,update:x,getWireframeAttribute:_}}function dA(o,e,i){let s;function l(y){s=y}let f,h;function d(y){f=y.type,h=y.bytesPerElement}function x(y,b){o.drawElements(s,b,f,y*h),i.update(b,s,1)}function m(y,b,E){E!==0&&(o.drawElementsInstanced(s,b,f,y*h,E),i.update(b,s,E))}function _(y,b,E){if(E===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(s,b,0,f,y,0,E);let S=0;for(let v=0;v<E;v++)S+=b[v];i.update(S,s,1)}function p(y,b,E,A){if(E===0)return;const S=e.get("WEBGL_multi_draw");if(S===null)for(let v=0;v<y.length;v++)m(y[v]/h,b[v],A[v]);else{S.multiDrawElementsInstancedWEBGL(s,b,0,f,y,0,A,0,E);let v=0;for(let N=0;N<E;N++)v+=b[N]*A[N];i.update(v,s,1)}}this.setMode=l,this.setIndex=d,this.render=x,this.renderInstances=m,this.renderMultiDraw=_,this.renderMultiDrawInstances=p}function pA(o){const e={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function s(f,h,d){switch(i.calls++,h){case o.TRIANGLES:i.triangles+=d*(f/3);break;case o.LINES:i.lines+=d*(f/2);break;case o.LINE_STRIP:i.lines+=d*(f-1);break;case o.LINE_LOOP:i.lines+=d*f;break;case o.POINTS:i.points+=d*f;break;default:un("WebGLInfo: Unknown draw mode:",h);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:e,render:i,programs:null,autoReset:!0,reset:l,update:s}}function mA(o,e,i){const s=new WeakMap,l=new rn;function f(h,d,x){const m=h.morphTargetInfluences,_=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,p=_!==void 0?_.length:0;let y=s.get(d);if(y===void 0||y.count!==p){let C=function(){X.dispose(),s.delete(d),d.removeEventListener("dispose",C)};var b=C;y!==void 0&&y.texture.dispose();const E=d.morphAttributes.position!==void 0,A=d.morphAttributes.normal!==void 0,S=d.morphAttributes.color!==void 0,v=d.morphAttributes.position||[],N=d.morphAttributes.normal||[],L=d.morphAttributes.color||[];let z=0;E===!0&&(z=1),A===!0&&(z=2),S===!0&&(z=3);let G=d.attributes.position.count*z,D=1;G>e.maxTextureSize&&(D=Math.ceil(G/e.maxTextureSize),G=e.maxTextureSize);const O=new Float32Array(G*D*4*p),X=new $v(O,G,D,p);X.type=$i,X.needsUpdate=!0;const w=z*4;for(let H=0;H<p;H++){const Q=v[H],nt=N[H],ht=L[H],ot=G*D*4*H;for(let k=0;k<Q.count;k++){const ct=k*w;E===!0&&(l.fromBufferAttribute(Q,k),O[ot+ct+0]=l.x,O[ot+ct+1]=l.y,O[ot+ct+2]=l.z,O[ot+ct+3]=0),A===!0&&(l.fromBufferAttribute(nt,k),O[ot+ct+4]=l.x,O[ot+ct+5]=l.y,O[ot+ct+6]=l.z,O[ot+ct+7]=0),S===!0&&(l.fromBufferAttribute(ht,k),O[ot+ct+8]=l.x,O[ot+ct+9]=l.y,O[ot+ct+10]=l.z,O[ot+ct+11]=ht.itemSize===4?l.w:1)}}y={count:p,texture:X,size:new de(G,D)},s.set(d,y),d.addEventListener("dispose",C)}if(h.isInstancedMesh===!0&&h.morphTexture!==null)x.getUniforms().setValue(o,"morphTexture",h.morphTexture,i);else{let E=0;for(let S=0;S<m.length;S++)E+=m[S];const A=d.morphTargetsRelative?1:1-E;x.getUniforms().setValue(o,"morphTargetBaseInfluence",A),x.getUniforms().setValue(o,"morphTargetInfluences",m)}x.getUniforms().setValue(o,"morphTargetsTexture",y.texture,i),x.getUniforms().setValue(o,"morphTargetsTextureSize",y.size)}return{update:f}}function xA(o,e,i,s){let l=new WeakMap;function f(x){const m=s.render.frame,_=x.geometry,p=e.get(x,_);if(l.get(p)!==m&&(e.update(p),l.set(p,m)),x.isInstancedMesh&&(x.hasEventListener("dispose",d)===!1&&x.addEventListener("dispose",d),l.get(x)!==m&&(i.update(x.instanceMatrix,o.ARRAY_BUFFER),x.instanceColor!==null&&i.update(x.instanceColor,o.ARRAY_BUFFER),l.set(x,m))),x.isSkinnedMesh){const y=x.skeleton;l.get(y)!==m&&(y.update(),l.set(y,m))}return p}function h(){l=new WeakMap}function d(x){const m=x.target;m.removeEventListener("dispose",d),i.remove(m.instanceMatrix),m.instanceColor!==null&&i.remove(m.instanceColor)}return{update:f,dispose:h}}const py=new Wn,_v=new ly(1,1),my=new $v,xy=new I1,gy=new ry,vv=[],yv=[],Sv=new Float32Array(16),bv=new Float32Array(9),Mv=new Float32Array(4);function xo(o,e,i){const s=o[0];if(s<=0||s>0)return o;const l=e*i;let f=vv[l];if(f===void 0&&(f=new Float32Array(l),vv[l]=f),e!==0){s.toArray(f,0);for(let h=1,d=0;h!==e;++h)d+=i,o[h].toArray(f,d)}return f}function Sn(o,e){if(o.length!==e.length)return!1;for(let i=0,s=o.length;i<s;i++)if(o[i]!==e[i])return!1;return!0}function bn(o,e){for(let i=0,s=e.length;i<s;i++)o[i]=e[i]}function qu(o,e){let i=yv[e];i===void 0&&(i=new Int32Array(e),yv[e]=i);for(let s=0;s!==e;++s)i[s]=o.allocateTextureUnit();return i}function gA(o,e){const i=this.cache;i[0]!==e&&(o.uniform1f(this.addr,e),i[0]=e)}function _A(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2f(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(Sn(i,e))return;o.uniform2fv(this.addr,e),bn(i,e)}}function vA(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3f(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else if(e.r!==void 0)(i[0]!==e.r||i[1]!==e.g||i[2]!==e.b)&&(o.uniform3f(this.addr,e.r,e.g,e.b),i[0]=e.r,i[1]=e.g,i[2]=e.b);else{if(Sn(i,e))return;o.uniform3fv(this.addr,e),bn(i,e)}}function yA(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4f(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(Sn(i,e))return;o.uniform4fv(this.addr,e),bn(i,e)}}function SA(o,e){const i=this.cache,s=e.elements;if(s===void 0){if(Sn(i,e))return;o.uniformMatrix2fv(this.addr,!1,e),bn(i,e)}else{if(Sn(i,s))return;Mv.set(s),o.uniformMatrix2fv(this.addr,!1,Mv),bn(i,s)}}function bA(o,e){const i=this.cache,s=e.elements;if(s===void 0){if(Sn(i,e))return;o.uniformMatrix3fv(this.addr,!1,e),bn(i,e)}else{if(Sn(i,s))return;bv.set(s),o.uniformMatrix3fv(this.addr,!1,bv),bn(i,s)}}function MA(o,e){const i=this.cache,s=e.elements;if(s===void 0){if(Sn(i,e))return;o.uniformMatrix4fv(this.addr,!1,e),bn(i,e)}else{if(Sn(i,s))return;Sv.set(s),o.uniformMatrix4fv(this.addr,!1,Sv),bn(i,s)}}function EA(o,e){const i=this.cache;i[0]!==e&&(o.uniform1i(this.addr,e),i[0]=e)}function TA(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2i(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(Sn(i,e))return;o.uniform2iv(this.addr,e),bn(i,e)}}function AA(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3i(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(Sn(i,e))return;o.uniform3iv(this.addr,e),bn(i,e)}}function RA(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4i(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(Sn(i,e))return;o.uniform4iv(this.addr,e),bn(i,e)}}function CA(o,e){const i=this.cache;i[0]!==e&&(o.uniform1ui(this.addr,e),i[0]=e)}function wA(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2ui(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(Sn(i,e))return;o.uniform2uiv(this.addr,e),bn(i,e)}}function DA(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3ui(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(Sn(i,e))return;o.uniform3uiv(this.addr,e),bn(i,e)}}function UA(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4ui(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(Sn(i,e))return;o.uniform4uiv(this.addr,e),bn(i,e)}}function NA(o,e,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(o.uniform1i(this.addr,l),s[0]=l);let f;this.type===o.SAMPLER_2D_SHADOW?(_v.compareFunction=Qv,f=_v):f=py,i.setTexture2D(e||f,l)}function LA(o,e,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(o.uniform1i(this.addr,l),s[0]=l),i.setTexture3D(e||xy,l)}function OA(o,e,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(o.uniform1i(this.addr,l),s[0]=l),i.setTextureCube(e||gy,l)}function PA(o,e,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(o.uniform1i(this.addr,l),s[0]=l),i.setTexture2DArray(e||my,l)}function zA(o){switch(o){case 5126:return gA;case 35664:return _A;case 35665:return vA;case 35666:return yA;case 35674:return SA;case 35675:return bA;case 35676:return MA;case 5124:case 35670:return EA;case 35667:case 35671:return TA;case 35668:case 35672:return AA;case 35669:case 35673:return RA;case 5125:return CA;case 36294:return wA;case 36295:return DA;case 36296:return UA;case 35678:case 36198:case 36298:case 36306:case 35682:return NA;case 35679:case 36299:case 36307:return LA;case 35680:case 36300:case 36308:case 36293:return OA;case 36289:case 36303:case 36311:case 36292:return PA}}function IA(o,e){o.uniform1fv(this.addr,e)}function FA(o,e){const i=xo(e,this.size,2);o.uniform2fv(this.addr,i)}function BA(o,e){const i=xo(e,this.size,3);o.uniform3fv(this.addr,i)}function HA(o,e){const i=xo(e,this.size,4);o.uniform4fv(this.addr,i)}function GA(o,e){const i=xo(e,this.size,4);o.uniformMatrix2fv(this.addr,!1,i)}function VA(o,e){const i=xo(e,this.size,9);o.uniformMatrix3fv(this.addr,!1,i)}function XA(o,e){const i=xo(e,this.size,16);o.uniformMatrix4fv(this.addr,!1,i)}function kA(o,e){o.uniform1iv(this.addr,e)}function YA(o,e){o.uniform2iv(this.addr,e)}function qA(o,e){o.uniform3iv(this.addr,e)}function jA(o,e){o.uniform4iv(this.addr,e)}function WA(o,e){o.uniform1uiv(this.addr,e)}function ZA(o,e){o.uniform2uiv(this.addr,e)}function KA(o,e){o.uniform3uiv(this.addr,e)}function QA(o,e){o.uniform4uiv(this.addr,e)}function JA(o,e,i){const s=this.cache,l=e.length,f=qu(i,l);Sn(s,f)||(o.uniform1iv(this.addr,f),bn(s,f));for(let h=0;h!==l;++h)i.setTexture2D(e[h]||py,f[h])}function $A(o,e,i){const s=this.cache,l=e.length,f=qu(i,l);Sn(s,f)||(o.uniform1iv(this.addr,f),bn(s,f));for(let h=0;h!==l;++h)i.setTexture3D(e[h]||xy,f[h])}function t2(o,e,i){const s=this.cache,l=e.length,f=qu(i,l);Sn(s,f)||(o.uniform1iv(this.addr,f),bn(s,f));for(let h=0;h!==l;++h)i.setTextureCube(e[h]||gy,f[h])}function e2(o,e,i){const s=this.cache,l=e.length,f=qu(i,l);Sn(s,f)||(o.uniform1iv(this.addr,f),bn(s,f));for(let h=0;h!==l;++h)i.setTexture2DArray(e[h]||my,f[h])}function n2(o){switch(o){case 5126:return IA;case 35664:return FA;case 35665:return BA;case 35666:return HA;case 35674:return GA;case 35675:return VA;case 35676:return XA;case 5124:case 35670:return kA;case 35667:case 35671:return YA;case 35668:case 35672:return qA;case 35669:case 35673:return jA;case 5125:return WA;case 36294:return ZA;case 36295:return KA;case 36296:return QA;case 35678:case 36198:case 36298:case 36306:case 35682:return JA;case 35679:case 36299:case 36307:return $A;case 35680:case 36300:case 36308:case 36293:return t2;case 36289:case 36303:case 36311:case 36292:return e2}}class i2{constructor(e,i,s){this.id=e,this.addr=s,this.cache=[],this.type=i.type,this.setValue=zA(i.type)}}class a2{constructor(e,i,s){this.id=e,this.addr=s,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=n2(i.type)}}class s2{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,i,s){const l=this.seq;for(let f=0,h=l.length;f!==h;++f){const d=l[f];d.setValue(e,i[d.id],s)}}}const ip=/(\w+)(\])?(\[|\.)?/g;function Ev(o,e){o.seq.push(e),o.map[e.id]=e}function r2(o,e,i){const s=o.name,l=s.length;for(ip.lastIndex=0;;){const f=ip.exec(s),h=ip.lastIndex;let d=f[1];const x=f[2]==="]",m=f[3];if(x&&(d=d|0),m===void 0||m==="["&&h+2===l){Ev(i,m===void 0?new i2(d,o,e):new a2(d,o,e));break}else{let p=i.map[d];p===void 0&&(p=new s2(d),Ev(i,p)),i=p}}}class Ou{constructor(e,i){this.seq=[],this.map={};const s=e.getProgramParameter(i,e.ACTIVE_UNIFORMS);for(let l=0;l<s;++l){const f=e.getActiveUniform(i,l),h=e.getUniformLocation(i,f.name);r2(f,h,this)}}setValue(e,i,s,l){const f=this.map[i];f!==void 0&&f.setValue(e,s,l)}setOptional(e,i,s){const l=i[s];l!==void 0&&this.setValue(e,s,l)}static upload(e,i,s,l){for(let f=0,h=i.length;f!==h;++f){const d=i[f],x=s[d.id];x.needsUpdate!==!1&&d.setValue(e,x.value,l)}}static seqWithValue(e,i){const s=[];for(let l=0,f=e.length;l!==f;++l){const h=e[l];h.id in i&&s.push(h)}return s}}function Tv(o,e,i){const s=o.createShader(e);return o.shaderSource(s,i),o.compileShader(s),s}const o2=37297;let l2=0;function c2(o,e){const i=o.split(`
`),s=[],l=Math.max(e-6,0),f=Math.min(e+6,i.length);for(let h=l;h<f;h++){const d=h+1;s.push(`${d===e?">":" "} ${d}: ${i[h]}`)}return s.join(`
`)}const Av=new xe;function u2(o){Oe._getMatrix(Av,Oe.workingColorSpace,o);const e=`mat3( ${Av.elements.map(i=>i.toFixed(4))} )`;switch(Oe.getTransfer(o)){case Pu:return[e,"LinearTransferOETF"];case qe:return[e,"sRGBTransferOETF"];default:return oe("WebGLProgram: Unsupported color space: ",o),[e,"LinearTransferOETF"]}}function Rv(o,e,i){const s=o.getShaderParameter(e,o.COMPILE_STATUS),f=(o.getShaderInfoLog(e)||"").trim();if(s&&f==="")return"";const h=/ERROR: 0:(\d+)/.exec(f);if(h){const d=parseInt(h[1]);return i.toUpperCase()+`

`+f+`

`+c2(o.getShaderSource(e),d)}else return f}function f2(o,e){const i=u2(e);return[`vec4 ${o}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}function h2(o,e){let i;switch(e){case KM:i="Linear";break;case QM:i="Reinhard";break;case JM:i="Cineon";break;case $M:i="ACESFilmic";break;case e1:i="AgX";break;case n1:i="Neutral";break;case t1:i="Custom";break;default:oe("WebGLProgram: Unsupported toneMapping:",e),i="Linear"}return"vec3 "+o+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const Au=new Z;function d2(){Oe.getLuminanceCoefficients(Au);const o=Au.x.toFixed(4),e=Au.y.toFixed(4),i=Au.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${o}, ${e}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function p2(o){return[o.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",o.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(vl).join(`
`)}function m2(o){const e=[];for(const i in o){const s=o[i];s!==!1&&e.push("#define "+i+" "+s)}return e.join(`
`)}function x2(o,e){const i={},s=o.getProgramParameter(e,o.ACTIVE_ATTRIBUTES);for(let l=0;l<s;l++){const f=o.getActiveAttrib(e,l),h=f.name;let d=1;f.type===o.FLOAT_MAT2&&(d=2),f.type===o.FLOAT_MAT3&&(d=3),f.type===o.FLOAT_MAT4&&(d=4),i[h]={type:f.type,location:o.getAttribLocation(e,h),locationSize:d}}return i}function vl(o){return o!==""}function Cv(o,e){const i=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return o.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function wv(o,e){return o.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const g2=/^[ \t]*#include +<([\w\d./]+)>/gm;function Kp(o){return o.replace(g2,v2)}const _2=new Map;function v2(o,e){let i=_e[e];if(i===void 0){const s=_2.get(e);if(s!==void 0)i=_e[s],oe('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,s);else throw new Error("Can not resolve #include <"+e+">")}return Kp(i)}const y2=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Dv(o){return o.replace(y2,S2)}function S2(o,e,i,s){let l="";for(let f=parseInt(e);f<parseInt(i);f++)l+=s.replace(/\[\s*i\s*\]/g,"[ "+f+" ]").replace(/UNROLLED_LOOP_INDEX/g,f);return l}function Uv(o){let e=`precision ${o.precision} float;
	precision ${o.precision} int;
	precision ${o.precision} sampler2D;
	precision ${o.precision} samplerCube;
	precision ${o.precision} sampler3D;
	precision ${o.precision} sampler2DArray;
	precision ${o.precision} sampler2DShadow;
	precision ${o.precision} samplerCubeShadow;
	precision ${o.precision} sampler2DArrayShadow;
	precision ${o.precision} isampler2D;
	precision ${o.precision} isampler3D;
	precision ${o.precision} isamplerCube;
	precision ${o.precision} isampler2DArray;
	precision ${o.precision} usampler2D;
	precision ${o.precision} usampler3D;
	precision ${o.precision} usamplerCube;
	precision ${o.precision} usampler2DArray;
	`;return o.precision==="highp"?e+=`
#define HIGH_PRECISION`:o.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:o.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function b2(o){let e="SHADOWMAP_TYPE_BASIC";return o.shadowMapType===Hv?e="SHADOWMAP_TYPE_PCF":o.shadowMapType===wM?e="SHADOWMAP_TYPE_PCF_SOFT":o.shadowMapType===Ra&&(e="SHADOWMAP_TYPE_VSM"),e}function M2(o){let e="ENVMAP_TYPE_CUBE";if(o.envMap)switch(o.envMapMode){case lo:case co:e="ENVMAP_TYPE_CUBE";break;case Vu:e="ENVMAP_TYPE_CUBE_UV";break}return e}function E2(o){let e="ENVMAP_MODE_REFLECTION";if(o.envMap)switch(o.envMapMode){case co:e="ENVMAP_MODE_REFRACTION";break}return e}function T2(o){let e="ENVMAP_BLENDING_NONE";if(o.envMap)switch(o.combine){case Gv:e="ENVMAP_BLENDING_MULTIPLY";break;case WM:e="ENVMAP_BLENDING_MIX";break;case ZM:e="ENVMAP_BLENDING_ADD";break}return e}function A2(o){const e=o.envMapCubeUVHeight;if(e===null)return null;const i=Math.log2(e)-2,s=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:s,maxMip:i}}function R2(o,e,i,s){const l=o.getContext(),f=i.defines;let h=i.vertexShader,d=i.fragmentShader;const x=b2(i),m=M2(i),_=E2(i),p=T2(i),y=A2(i),b=p2(i),E=m2(f),A=l.createProgram();let S,v,N=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(S=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E].filter(vl).join(`
`),S.length>0&&(S+=`
`),v=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E].filter(vl).join(`
`),v.length>0&&(v+=`
`)):(S=[Uv(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+_:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+x:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(vl).join(`
`),v=[Uv(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+m:"",i.envMap?"#define "+_:"",i.envMap?"#define "+p:"",y?"#define CUBEUV_TEXEL_WIDTH "+y.texelWidth:"",y?"#define CUBEUV_TEXEL_HEIGHT "+y.texelHeight:"",y?"#define CUBEUV_MAX_MIP "+y.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor||i.batchingColor?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+x:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==gs?"#define TONE_MAPPING":"",i.toneMapping!==gs?_e.tonemapping_pars_fragment:"",i.toneMapping!==gs?h2("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",_e.colorspace_pars_fragment,f2("linearToOutputTexel",i.outputColorSpace),d2(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(vl).join(`
`)),h=Kp(h),h=Cv(h,i),h=wv(h,i),d=Kp(d),d=Cv(d,i),d=wv(d,i),h=Dv(h),d=Dv(d),i.isRawShaderMaterial!==!0&&(N=`#version 300 es
`,S=[b,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+S,v=["#define varying in",i.glslVersion===I_?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===I_?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+v);const L=N+S+h,z=N+v+d,G=Tv(l,l.VERTEX_SHADER,L),D=Tv(l,l.FRAGMENT_SHADER,z);l.attachShader(A,G),l.attachShader(A,D),i.index0AttributeName!==void 0?l.bindAttribLocation(A,0,i.index0AttributeName):i.morphTargets===!0&&l.bindAttribLocation(A,0,"position"),l.linkProgram(A);function O(H){if(o.debug.checkShaderErrors){const Q=l.getProgramInfoLog(A)||"",nt=l.getShaderInfoLog(G)||"",ht=l.getShaderInfoLog(D)||"",ot=Q.trim(),k=nt.trim(),ct=ht.trim();let $=!0,_t=!0;if(l.getProgramParameter(A,l.LINK_STATUS)===!1)if($=!1,typeof o.debug.onShaderError=="function")o.debug.onShaderError(l,A,G,D);else{const vt=Rv(l,G,"vertex"),Yt=Rv(l,D,"fragment");un("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(A,l.VALIDATE_STATUS)+`

Material Name: `+H.name+`
Material Type: `+H.type+`

Program Info Log: `+ot+`
`+vt+`
`+Yt)}else ot!==""?oe("WebGLProgram: Program Info Log:",ot):(k===""||ct==="")&&(_t=!1);_t&&(H.diagnostics={runnable:$,programLog:ot,vertexShader:{log:k,prefix:S},fragmentShader:{log:ct,prefix:v}})}l.deleteShader(G),l.deleteShader(D),X=new Ou(l,A),w=x2(l,A)}let X;this.getUniforms=function(){return X===void 0&&O(this),X};let w;this.getAttributes=function(){return w===void 0&&O(this),w};let C=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return C===!1&&(C=l.getProgramParameter(A,o2)),C},this.destroy=function(){s.releaseStatesOfProgram(this),l.deleteProgram(A),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=l2++,this.cacheKey=e,this.usedTimes=1,this.program=A,this.vertexShader=G,this.fragmentShader=D,this}let C2=0;class w2{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const i=e.vertexShader,s=e.fragmentShader,l=this._getShaderStage(i),f=this._getShaderStage(s),h=this._getShaderCacheForMaterial(e);return h.has(l)===!1&&(h.add(l),l.usedTimes++),h.has(f)===!1&&(h.add(f),f.usedTimes++),this}remove(e){const i=this.materialCache.get(e);for(const s of i)s.usedTimes--,s.usedTimes===0&&this.shaderCache.delete(s.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const i=this.materialCache;let s=i.get(e);return s===void 0&&(s=new Set,i.set(e,s)),s}_getShaderStage(e){const i=this.shaderCache;let s=i.get(e);return s===void 0&&(s=new D2(e),i.set(e,s)),s}}class D2{constructor(e){this.id=C2++,this.code=e,this.usedTimes=0}}function U2(o,e,i,s,l,f,h){const d=new ty,x=new w2,m=new Set,_=[],p=l.logarithmicDepthBuffer,y=l.vertexTextures;let b=l.precision;const E={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function A(w){return m.add(w),w===0?"uv":`uv${w}`}function S(w,C,H,Q,nt){const ht=Q.fog,ot=nt.geometry,k=w.isMeshStandardMaterial?Q.environment:null,ct=(w.isMeshStandardMaterial?i:e).get(w.envMap||k),$=ct&&ct.mapping===Vu?ct.image.height:null,_t=E[w.type];w.precision!==null&&(b=l.getMaxPrecision(w.precision),b!==w.precision&&oe("WebGLProgram.getParameters:",w.precision,"not supported, using",b,"instead."));const vt=ot.morphAttributes.position||ot.morphAttributes.normal||ot.morphAttributes.color,Yt=vt!==void 0?vt.length:0;let he=0;ot.morphAttributes.position!==void 0&&(he=1),ot.morphAttributes.normal!==void 0&&(he=2),ot.morphAttributes.color!==void 0&&(he=3);let Ae,I,dt,et;if(_t){const De=Ji[_t];Ae=De.vertexShader,I=De.fragmentShader}else Ae=w.vertexShader,I=w.fragmentShader,x.update(w),dt=x.getVertexShaderID(w),et=x.getFragmentShaderID(w);const st=o.getRenderTarget(),bt=o.state.buffers.depth.getReversed(),Pt=nt.isInstancedMesh===!0,Rt=nt.isBatchedMesh===!0,Mt=!!w.map,Gt=!!w.matcap,le=!!ct,ke=!!w.aoMap,B=!!w.lightMap,ce=!!w.bumpMap,Jt=!!w.normalMap,te=!!w.displacementMap,Ft=!!w.emissiveMap,Fe=!!w.metalnessMap,qt=!!w.roughnessMap,se=w.anisotropy>0,U=w.clearcoat>0,T=w.dispersion>0,at=w.iridescence>0,xt=w.sheen>0,yt=w.transmission>0,ft=se&&!!w.anisotropyMap,Vt=U&&!!w.clearcoatMap,Nt=U&&!!w.clearcoatNormalMap,Kt=U&&!!w.clearcoatRoughnessMap,jt=at&&!!w.iridescenceMap,St=at&&!!w.iridescenceThicknessMap,Ct=xt&&!!w.sheenColorMap,ee=xt&&!!w.sheenRoughnessMap,$t=!!w.specularMap,Bt=!!w.specularColorMap,re=!!w.specularIntensityMap,F=yt&&!!w.transmissionMap,Lt=yt&&!!w.thicknessMap,wt=!!w.gradientMap,Dt=!!w.alphaMap,Et=w.alphaTest>0,gt=!!w.alphaHash,Xt=!!w.extensions;let ue=gs;w.toneMapped&&(st===null||st.isXRRenderTarget===!0)&&(ue=o.toneMapping);const We={shaderID:_t,shaderType:w.type,shaderName:w.name,vertexShader:Ae,fragmentShader:I,defines:w.defines,customVertexShaderID:dt,customFragmentShaderID:et,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:b,batching:Rt,batchingColor:Rt&&nt._colorsTexture!==null,instancing:Pt,instancingColor:Pt&&nt.instanceColor!==null,instancingMorph:Pt&&nt.morphTexture!==null,supportsVertexTextures:y,outputColorSpace:st===null?o.outputColorSpace:st.isXRRenderTarget===!0?st.texture.colorSpace:uo,alphaToCoverage:!!w.alphaToCoverage,map:Mt,matcap:Gt,envMap:le,envMapMode:le&&ct.mapping,envMapCubeUVHeight:$,aoMap:ke,lightMap:B,bumpMap:ce,normalMap:Jt,displacementMap:y&&te,emissiveMap:Ft,normalMapObjectSpace:Jt&&w.normalMapType===r1,normalMapTangentSpace:Jt&&w.normalMapType===Kv,metalnessMap:Fe,roughnessMap:qt,anisotropy:se,anisotropyMap:ft,clearcoat:U,clearcoatMap:Vt,clearcoatNormalMap:Nt,clearcoatRoughnessMap:Kt,dispersion:T,iridescence:at,iridescenceMap:jt,iridescenceThicknessMap:St,sheen:xt,sheenColorMap:Ct,sheenRoughnessMap:ee,specularMap:$t,specularColorMap:Bt,specularIntensityMap:re,transmission:yt,transmissionMap:F,thicknessMap:Lt,gradientMap:wt,opaque:w.transparent===!1&&w.blending===so&&w.alphaToCoverage===!1,alphaMap:Dt,alphaTest:Et,alphaHash:gt,combine:w.combine,mapUv:Mt&&A(w.map.channel),aoMapUv:ke&&A(w.aoMap.channel),lightMapUv:B&&A(w.lightMap.channel),bumpMapUv:ce&&A(w.bumpMap.channel),normalMapUv:Jt&&A(w.normalMap.channel),displacementMapUv:te&&A(w.displacementMap.channel),emissiveMapUv:Ft&&A(w.emissiveMap.channel),metalnessMapUv:Fe&&A(w.metalnessMap.channel),roughnessMapUv:qt&&A(w.roughnessMap.channel),anisotropyMapUv:ft&&A(w.anisotropyMap.channel),clearcoatMapUv:Vt&&A(w.clearcoatMap.channel),clearcoatNormalMapUv:Nt&&A(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Kt&&A(w.clearcoatRoughnessMap.channel),iridescenceMapUv:jt&&A(w.iridescenceMap.channel),iridescenceThicknessMapUv:St&&A(w.iridescenceThicknessMap.channel),sheenColorMapUv:Ct&&A(w.sheenColorMap.channel),sheenRoughnessMapUv:ee&&A(w.sheenRoughnessMap.channel),specularMapUv:$t&&A(w.specularMap.channel),specularColorMapUv:Bt&&A(w.specularColorMap.channel),specularIntensityMapUv:re&&A(w.specularIntensityMap.channel),transmissionMapUv:F&&A(w.transmissionMap.channel),thicknessMapUv:Lt&&A(w.thicknessMap.channel),alphaMapUv:Dt&&A(w.alphaMap.channel),vertexTangents:!!ot.attributes.tangent&&(Jt||se),vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!ot.attributes.color&&ot.attributes.color.itemSize===4,pointsUvs:nt.isPoints===!0&&!!ot.attributes.uv&&(Mt||Dt),fog:!!ht,useFog:w.fog===!0,fogExp2:!!ht&&ht.isFogExp2,flatShading:w.flatShading===!0&&w.wireframe===!1,sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:p,reversedDepthBuffer:bt,skinning:nt.isSkinnedMesh===!0,morphTargets:ot.morphAttributes.position!==void 0,morphNormals:ot.morphAttributes.normal!==void 0,morphColors:ot.morphAttributes.color!==void 0,morphTargetsCount:Yt,morphTextureStride:he,numDirLights:C.directional.length,numPointLights:C.point.length,numSpotLights:C.spot.length,numSpotLightMaps:C.spotLightMap.length,numRectAreaLights:C.rectArea.length,numHemiLights:C.hemi.length,numDirLightShadows:C.directionalShadowMap.length,numPointLightShadows:C.pointShadowMap.length,numSpotLightShadows:C.spotShadowMap.length,numSpotLightShadowsWithMaps:C.numSpotLightShadowsWithMaps,numLightProbes:C.numLightProbes,numClippingPlanes:h.numPlanes,numClipIntersection:h.numIntersection,dithering:w.dithering,shadowMapEnabled:o.shadowMap.enabled&&H.length>0,shadowMapType:o.shadowMap.type,toneMapping:ue,decodeVideoTexture:Mt&&w.map.isVideoTexture===!0&&Oe.getTransfer(w.map.colorSpace)===qe,decodeVideoTextureEmissive:Ft&&w.emissiveMap.isVideoTexture===!0&&Oe.getTransfer(w.emissiveMap.colorSpace)===qe,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===Ca,flipSided:w.side===ni,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionClipCullDistance:Xt&&w.extensions.clipCullDistance===!0&&s.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Xt&&w.extensions.multiDraw===!0||Rt)&&s.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:s.has("KHR_parallel_shader_compile"),customProgramCacheKey:w.customProgramCacheKey()};return We.vertexUv1s=m.has(1),We.vertexUv2s=m.has(2),We.vertexUv3s=m.has(3),m.clear(),We}function v(w){const C=[];if(w.shaderID?C.push(w.shaderID):(C.push(w.customVertexShaderID),C.push(w.customFragmentShaderID)),w.defines!==void 0)for(const H in w.defines)C.push(H),C.push(w.defines[H]);return w.isRawShaderMaterial===!1&&(N(C,w),L(C,w),C.push(o.outputColorSpace)),C.push(w.customProgramCacheKey),C.join()}function N(w,C){w.push(C.precision),w.push(C.outputColorSpace),w.push(C.envMapMode),w.push(C.envMapCubeUVHeight),w.push(C.mapUv),w.push(C.alphaMapUv),w.push(C.lightMapUv),w.push(C.aoMapUv),w.push(C.bumpMapUv),w.push(C.normalMapUv),w.push(C.displacementMapUv),w.push(C.emissiveMapUv),w.push(C.metalnessMapUv),w.push(C.roughnessMapUv),w.push(C.anisotropyMapUv),w.push(C.clearcoatMapUv),w.push(C.clearcoatNormalMapUv),w.push(C.clearcoatRoughnessMapUv),w.push(C.iridescenceMapUv),w.push(C.iridescenceThicknessMapUv),w.push(C.sheenColorMapUv),w.push(C.sheenRoughnessMapUv),w.push(C.specularMapUv),w.push(C.specularColorMapUv),w.push(C.specularIntensityMapUv),w.push(C.transmissionMapUv),w.push(C.thicknessMapUv),w.push(C.combine),w.push(C.fogExp2),w.push(C.sizeAttenuation),w.push(C.morphTargetsCount),w.push(C.morphAttributeCount),w.push(C.numDirLights),w.push(C.numPointLights),w.push(C.numSpotLights),w.push(C.numSpotLightMaps),w.push(C.numHemiLights),w.push(C.numRectAreaLights),w.push(C.numDirLightShadows),w.push(C.numPointLightShadows),w.push(C.numSpotLightShadows),w.push(C.numSpotLightShadowsWithMaps),w.push(C.numLightProbes),w.push(C.shadowMapType),w.push(C.toneMapping),w.push(C.numClippingPlanes),w.push(C.numClipIntersection),w.push(C.depthPacking)}function L(w,C){d.disableAll(),C.supportsVertexTextures&&d.enable(0),C.instancing&&d.enable(1),C.instancingColor&&d.enable(2),C.instancingMorph&&d.enable(3),C.matcap&&d.enable(4),C.envMap&&d.enable(5),C.normalMapObjectSpace&&d.enable(6),C.normalMapTangentSpace&&d.enable(7),C.clearcoat&&d.enable(8),C.iridescence&&d.enable(9),C.alphaTest&&d.enable(10),C.vertexColors&&d.enable(11),C.vertexAlphas&&d.enable(12),C.vertexUv1s&&d.enable(13),C.vertexUv2s&&d.enable(14),C.vertexUv3s&&d.enable(15),C.vertexTangents&&d.enable(16),C.anisotropy&&d.enable(17),C.alphaHash&&d.enable(18),C.batching&&d.enable(19),C.dispersion&&d.enable(20),C.batchingColor&&d.enable(21),C.gradientMap&&d.enable(22),w.push(d.mask),d.disableAll(),C.fog&&d.enable(0),C.useFog&&d.enable(1),C.flatShading&&d.enable(2),C.logarithmicDepthBuffer&&d.enable(3),C.reversedDepthBuffer&&d.enable(4),C.skinning&&d.enable(5),C.morphTargets&&d.enable(6),C.morphNormals&&d.enable(7),C.morphColors&&d.enable(8),C.premultipliedAlpha&&d.enable(9),C.shadowMapEnabled&&d.enable(10),C.doubleSided&&d.enable(11),C.flipSided&&d.enable(12),C.useDepthPacking&&d.enable(13),C.dithering&&d.enable(14),C.transmission&&d.enable(15),C.sheen&&d.enable(16),C.opaque&&d.enable(17),C.pointsUvs&&d.enable(18),C.decodeVideoTexture&&d.enable(19),C.decodeVideoTextureEmissive&&d.enable(20),C.alphaToCoverage&&d.enable(21),w.push(d.mask)}function z(w){const C=E[w.type];let H;if(C){const Q=Ji[C];H=K1.clone(Q.uniforms)}else H=w.uniforms;return H}function G(w,C){let H;for(let Q=0,nt=_.length;Q<nt;Q++){const ht=_[Q];if(ht.cacheKey===C){H=ht,++H.usedTimes;break}}return H===void 0&&(H=new R2(o,C,w,f),_.push(H)),H}function D(w){if(--w.usedTimes===0){const C=_.indexOf(w);_[C]=_[_.length-1],_.pop(),w.destroy()}}function O(w){x.remove(w)}function X(){x.dispose()}return{getParameters:S,getProgramCacheKey:v,getUniforms:z,acquireProgram:G,releaseProgram:D,releaseShaderCache:O,programs:_,dispose:X}}function N2(){let o=new WeakMap;function e(h){return o.has(h)}function i(h){let d=o.get(h);return d===void 0&&(d={},o.set(h,d)),d}function s(h){o.delete(h)}function l(h,d,x){o.get(h)[d]=x}function f(){o=new WeakMap}return{has:e,get:i,remove:s,update:l,dispose:f}}function L2(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.material.id!==e.material.id?o.material.id-e.material.id:o.z!==e.z?o.z-e.z:o.id-e.id}function Nv(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.z!==e.z?e.z-o.z:o.id-e.id}function Lv(){const o=[];let e=0;const i=[],s=[],l=[];function f(){e=0,i.length=0,s.length=0,l.length=0}function h(p,y,b,E,A,S){let v=o[e];return v===void 0?(v={id:p.id,object:p,geometry:y,material:b,groupOrder:E,renderOrder:p.renderOrder,z:A,group:S},o[e]=v):(v.id=p.id,v.object=p,v.geometry=y,v.material=b,v.groupOrder=E,v.renderOrder=p.renderOrder,v.z=A,v.group=S),e++,v}function d(p,y,b,E,A,S){const v=h(p,y,b,E,A,S);b.transmission>0?s.push(v):b.transparent===!0?l.push(v):i.push(v)}function x(p,y,b,E,A,S){const v=h(p,y,b,E,A,S);b.transmission>0?s.unshift(v):b.transparent===!0?l.unshift(v):i.unshift(v)}function m(p,y){i.length>1&&i.sort(p||L2),s.length>1&&s.sort(y||Nv),l.length>1&&l.sort(y||Nv)}function _(){for(let p=e,y=o.length;p<y;p++){const b=o[p];if(b.id===null)break;b.id=null,b.object=null,b.geometry=null,b.material=null,b.group=null}}return{opaque:i,transmissive:s,transparent:l,init:f,push:d,unshift:x,finish:_,sort:m}}function O2(){let o=new WeakMap;function e(s,l){const f=o.get(s);let h;return f===void 0?(h=new Lv,o.set(s,[h])):l>=f.length?(h=new Lv,f.push(h)):h=f[l],h}function i(){o=new WeakMap}return{get:e,dispose:i}}function P2(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let i;switch(e.type){case"DirectionalLight":i={direction:new Z,color:new Me};break;case"SpotLight":i={position:new Z,direction:new Z,color:new Me,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new Z,color:new Me,distance:0,decay:0};break;case"HemisphereLight":i={direction:new Z,skyColor:new Me,groundColor:new Me};break;case"RectAreaLight":i={color:new Me,position:new Z,halfWidth:new Z,halfHeight:new Z};break}return o[e.id]=i,i}}}function z2(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let i;switch(e.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new de};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new de};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new de,shadowCameraNear:1,shadowCameraFar:1e3};break}return o[e.id]=i,i}}}let I2=0;function F2(o,e){return(e.castShadow?2:0)-(o.castShadow?2:0)+(e.map?1:0)-(o.map?1:0)}function B2(o){const e=new P2,i=z2(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let m=0;m<9;m++)s.probe.push(new Z);const l=new Z,f=new Xe,h=new Xe;function d(m){let _=0,p=0,y=0;for(let w=0;w<9;w++)s.probe[w].set(0,0,0);let b=0,E=0,A=0,S=0,v=0,N=0,L=0,z=0,G=0,D=0,O=0;m.sort(F2);for(let w=0,C=m.length;w<C;w++){const H=m[w],Q=H.color,nt=H.intensity,ht=H.distance,ot=H.shadow&&H.shadow.map?H.shadow.map.texture:null;if(H.isAmbientLight)_+=Q.r*nt,p+=Q.g*nt,y+=Q.b*nt;else if(H.isLightProbe){for(let k=0;k<9;k++)s.probe[k].addScaledVector(H.sh.coefficients[k],nt);O++}else if(H.isDirectionalLight){const k=e.get(H);if(k.color.copy(H.color).multiplyScalar(H.intensity),H.castShadow){const ct=H.shadow,$=i.get(H);$.shadowIntensity=ct.intensity,$.shadowBias=ct.bias,$.shadowNormalBias=ct.normalBias,$.shadowRadius=ct.radius,$.shadowMapSize=ct.mapSize,s.directionalShadow[b]=$,s.directionalShadowMap[b]=ot,s.directionalShadowMatrix[b]=H.shadow.matrix,N++}s.directional[b]=k,b++}else if(H.isSpotLight){const k=e.get(H);k.position.setFromMatrixPosition(H.matrixWorld),k.color.copy(Q).multiplyScalar(nt),k.distance=ht,k.coneCos=Math.cos(H.angle),k.penumbraCos=Math.cos(H.angle*(1-H.penumbra)),k.decay=H.decay,s.spot[A]=k;const ct=H.shadow;if(H.map&&(s.spotLightMap[G]=H.map,G++,ct.updateMatrices(H),H.castShadow&&D++),s.spotLightMatrix[A]=ct.matrix,H.castShadow){const $=i.get(H);$.shadowIntensity=ct.intensity,$.shadowBias=ct.bias,$.shadowNormalBias=ct.normalBias,$.shadowRadius=ct.radius,$.shadowMapSize=ct.mapSize,s.spotShadow[A]=$,s.spotShadowMap[A]=ot,z++}A++}else if(H.isRectAreaLight){const k=e.get(H);k.color.copy(Q).multiplyScalar(nt),k.halfWidth.set(H.width*.5,0,0),k.halfHeight.set(0,H.height*.5,0),s.rectArea[S]=k,S++}else if(H.isPointLight){const k=e.get(H);if(k.color.copy(H.color).multiplyScalar(H.intensity),k.distance=H.distance,k.decay=H.decay,H.castShadow){const ct=H.shadow,$=i.get(H);$.shadowIntensity=ct.intensity,$.shadowBias=ct.bias,$.shadowNormalBias=ct.normalBias,$.shadowRadius=ct.radius,$.shadowMapSize=ct.mapSize,$.shadowCameraNear=ct.camera.near,$.shadowCameraFar=ct.camera.far,s.pointShadow[E]=$,s.pointShadowMap[E]=ot,s.pointShadowMatrix[E]=H.shadow.matrix,L++}s.point[E]=k,E++}else if(H.isHemisphereLight){const k=e.get(H);k.skyColor.copy(H.color).multiplyScalar(nt),k.groundColor.copy(H.groundColor).multiplyScalar(nt),s.hemi[v]=k,v++}}S>0&&(o.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=zt.LTC_FLOAT_1,s.rectAreaLTC2=zt.LTC_FLOAT_2):(s.rectAreaLTC1=zt.LTC_HALF_1,s.rectAreaLTC2=zt.LTC_HALF_2)),s.ambient[0]=_,s.ambient[1]=p,s.ambient[2]=y;const X=s.hash;(X.directionalLength!==b||X.pointLength!==E||X.spotLength!==A||X.rectAreaLength!==S||X.hemiLength!==v||X.numDirectionalShadows!==N||X.numPointShadows!==L||X.numSpotShadows!==z||X.numSpotMaps!==G||X.numLightProbes!==O)&&(s.directional.length=b,s.spot.length=A,s.rectArea.length=S,s.point.length=E,s.hemi.length=v,s.directionalShadow.length=N,s.directionalShadowMap.length=N,s.pointShadow.length=L,s.pointShadowMap.length=L,s.spotShadow.length=z,s.spotShadowMap.length=z,s.directionalShadowMatrix.length=N,s.pointShadowMatrix.length=L,s.spotLightMatrix.length=z+G-D,s.spotLightMap.length=G,s.numSpotLightShadowsWithMaps=D,s.numLightProbes=O,X.directionalLength=b,X.pointLength=E,X.spotLength=A,X.rectAreaLength=S,X.hemiLength=v,X.numDirectionalShadows=N,X.numPointShadows=L,X.numSpotShadows=z,X.numSpotMaps=G,X.numLightProbes=O,s.version=I2++)}function x(m,_){let p=0,y=0,b=0,E=0,A=0;const S=_.matrixWorldInverse;for(let v=0,N=m.length;v<N;v++){const L=m[v];if(L.isDirectionalLight){const z=s.directional[p];z.direction.setFromMatrixPosition(L.matrixWorld),l.setFromMatrixPosition(L.target.matrixWorld),z.direction.sub(l),z.direction.transformDirection(S),p++}else if(L.isSpotLight){const z=s.spot[b];z.position.setFromMatrixPosition(L.matrixWorld),z.position.applyMatrix4(S),z.direction.setFromMatrixPosition(L.matrixWorld),l.setFromMatrixPosition(L.target.matrixWorld),z.direction.sub(l),z.direction.transformDirection(S),b++}else if(L.isRectAreaLight){const z=s.rectArea[E];z.position.setFromMatrixPosition(L.matrixWorld),z.position.applyMatrix4(S),h.identity(),f.copy(L.matrixWorld),f.premultiply(S),h.extractRotation(f),z.halfWidth.set(L.width*.5,0,0),z.halfHeight.set(0,L.height*.5,0),z.halfWidth.applyMatrix4(h),z.halfHeight.applyMatrix4(h),E++}else if(L.isPointLight){const z=s.point[y];z.position.setFromMatrixPosition(L.matrixWorld),z.position.applyMatrix4(S),y++}else if(L.isHemisphereLight){const z=s.hemi[A];z.direction.setFromMatrixPosition(L.matrixWorld),z.direction.transformDirection(S),A++}}}return{setup:d,setupView:x,state:s}}function Ov(o){const e=new B2(o),i=[],s=[];function l(_){m.camera=_,i.length=0,s.length=0}function f(_){i.push(_)}function h(_){s.push(_)}function d(){e.setup(i)}function x(_){e.setupView(i,_)}const m={lightsArray:i,shadowsArray:s,camera:null,lights:e,transmissionRenderTarget:{}};return{init:l,state:m,setupLights:d,setupLightsView:x,pushLight:f,pushShadow:h}}function H2(o){let e=new WeakMap;function i(l,f=0){const h=e.get(l);let d;return h===void 0?(d=new Ov(o),e.set(l,[d])):f>=h.length?(d=new Ov(o),h.push(d)):d=h[f],d}function s(){e=new WeakMap}return{get:i,dispose:s}}const G2=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,V2=`uniform sampler2D shadow_pass;
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
}`;function X2(o,e,i){let s=new f0;const l=new de,f=new de,h=new rn,d=new o3({depthPacking:s1}),x=new l3,m={},_=i.maxTextureSize,p={[_s]:ni,[ni]:_s,[Ca]:Ca},y=new Na({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new de},radius:{value:4}},vertexShader:G2,fragmentShader:V2}),b=y.clone();b.defines.HORIZONTAL_PASS=1;const E=new zn;E.setAttribute("position",new ea(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const A=new mi(E,y),S=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Hv;let v=this.type;this.render=function(D,O,X){if(S.enabled===!1||S.autoUpdate===!1&&S.needsUpdate===!1||D.length===0)return;const w=o.getRenderTarget(),C=o.getActiveCubeFace(),H=o.getActiveMipmapLevel(),Q=o.state;Q.setBlending(Da),Q.buffers.depth.getReversed()===!0?Q.buffers.color.setClear(0,0,0,0):Q.buffers.color.setClear(1,1,1,1),Q.buffers.depth.setTest(!0),Q.setScissorTest(!1);const nt=v!==Ra&&this.type===Ra,ht=v===Ra&&this.type!==Ra;for(let ot=0,k=D.length;ot<k;ot++){const ct=D[ot],$=ct.shadow;if($===void 0){oe("WebGLShadowMap:",ct,"has no shadow.");continue}if($.autoUpdate===!1&&$.needsUpdate===!1)continue;l.copy($.mapSize);const _t=$.getFrameExtents();if(l.multiply(_t),f.copy($.mapSize),(l.x>_||l.y>_)&&(l.x>_&&(f.x=Math.floor(_/_t.x),l.x=f.x*_t.x,$.mapSize.x=f.x),l.y>_&&(f.y=Math.floor(_/_t.y),l.y=f.y*_t.y,$.mapSize.y=f.y)),$.map===null||nt===!0||ht===!0){const Yt=this.type!==Ra?{minFilter:pi,magFilter:pi}:{};$.map!==null&&$.map.dispose(),$.map=new tr(l.x,l.y,Yt),$.map.texture.name=ct.name+".shadowMap",$.camera.updateProjectionMatrix()}o.setRenderTarget($.map),o.clear();const vt=$.getViewportCount();for(let Yt=0;Yt<vt;Yt++){const he=$.getViewport(Yt);h.set(f.x*he.x,f.y*he.y,f.x*he.z,f.y*he.w),Q.viewport(h),$.updateMatrices(ct,Yt),s=$.getFrustum(),z(O,X,$.camera,ct,this.type)}$.isPointLightShadow!==!0&&this.type===Ra&&N($,X),$.needsUpdate=!1}v=this.type,S.needsUpdate=!1,o.setRenderTarget(w,C,H)};function N(D,O){const X=e.update(A);y.defines.VSM_SAMPLES!==D.blurSamples&&(y.defines.VSM_SAMPLES=D.blurSamples,b.defines.VSM_SAMPLES=D.blurSamples,y.needsUpdate=!0,b.needsUpdate=!0),D.mapPass===null&&(D.mapPass=new tr(l.x,l.y)),y.uniforms.shadow_pass.value=D.map.texture,y.uniforms.resolution.value=D.mapSize,y.uniforms.radius.value=D.radius,o.setRenderTarget(D.mapPass),o.clear(),o.renderBufferDirect(O,null,X,y,A,null),b.uniforms.shadow_pass.value=D.mapPass.texture,b.uniforms.resolution.value=D.mapSize,b.uniforms.radius.value=D.radius,o.setRenderTarget(D.map),o.clear(),o.renderBufferDirect(O,null,X,b,A,null)}function L(D,O,X,w){let C=null;const H=X.isPointLight===!0?D.customDistanceMaterial:D.customDepthMaterial;if(H!==void 0)C=H;else if(C=X.isPointLight===!0?x:d,o.localClippingEnabled&&O.clipShadows===!0&&Array.isArray(O.clippingPlanes)&&O.clippingPlanes.length!==0||O.displacementMap&&O.displacementScale!==0||O.alphaMap&&O.alphaTest>0||O.map&&O.alphaTest>0||O.alphaToCoverage===!0){const Q=C.uuid,nt=O.uuid;let ht=m[Q];ht===void 0&&(ht={},m[Q]=ht);let ot=ht[nt];ot===void 0&&(ot=C.clone(),ht[nt]=ot,O.addEventListener("dispose",G)),C=ot}if(C.visible=O.visible,C.wireframe=O.wireframe,w===Ra?C.side=O.shadowSide!==null?O.shadowSide:O.side:C.side=O.shadowSide!==null?O.shadowSide:p[O.side],C.alphaMap=O.alphaMap,C.alphaTest=O.alphaToCoverage===!0?.5:O.alphaTest,C.map=O.map,C.clipShadows=O.clipShadows,C.clippingPlanes=O.clippingPlanes,C.clipIntersection=O.clipIntersection,C.displacementMap=O.displacementMap,C.displacementScale=O.displacementScale,C.displacementBias=O.displacementBias,C.wireframeLinewidth=O.wireframeLinewidth,C.linewidth=O.linewidth,X.isPointLight===!0&&C.isMeshDistanceMaterial===!0){const Q=o.properties.get(C);Q.light=X}return C}function z(D,O,X,w,C){if(D.visible===!1)return;if(D.layers.test(O.layers)&&(D.isMesh||D.isLine||D.isPoints)&&(D.castShadow||D.receiveShadow&&C===Ra)&&(!D.frustumCulled||s.intersectsObject(D))){D.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,D.matrixWorld);const nt=e.update(D),ht=D.material;if(Array.isArray(ht)){const ot=nt.groups;for(let k=0,ct=ot.length;k<ct;k++){const $=ot[k],_t=ht[$.materialIndex];if(_t&&_t.visible){const vt=L(D,_t,w,C);D.onBeforeShadow(o,D,O,X,nt,vt,$),o.renderBufferDirect(X,null,nt,vt,D,$),D.onAfterShadow(o,D,O,X,nt,vt,$)}}}else if(ht.visible){const ot=L(D,ht,w,C);D.onBeforeShadow(o,D,O,X,nt,ot,null),o.renderBufferDirect(X,null,nt,ot,D,null),D.onAfterShadow(o,D,O,X,nt,ot,null)}}const Q=D.children;for(let nt=0,ht=Q.length;nt<ht;nt++)z(Q[nt],O,X,w,C)}function G(D){D.target.removeEventListener("dispose",G);for(const X in m){const w=m[X],C=D.target.uuid;C in w&&(w[C].dispose(),delete w[C])}}}const k2={[fp]:hp,[dp]:xp,[pp]:gp,[oo]:mp,[hp]:fp,[xp]:dp,[gp]:pp,[mp]:oo};function Y2(o,e){function i(){let F=!1;const Lt=new rn;let wt=null;const Dt=new rn(0,0,0,0);return{setMask:function(Et){wt!==Et&&!F&&(o.colorMask(Et,Et,Et,Et),wt=Et)},setLocked:function(Et){F=Et},setClear:function(Et,gt,Xt,ue,We){We===!0&&(Et*=ue,gt*=ue,Xt*=ue),Lt.set(Et,gt,Xt,ue),Dt.equals(Lt)===!1&&(o.clearColor(Et,gt,Xt,ue),Dt.copy(Lt))},reset:function(){F=!1,wt=null,Dt.set(-1,0,0,0)}}}function s(){let F=!1,Lt=!1,wt=null,Dt=null,Et=null;return{setReversed:function(gt){if(Lt!==gt){const Xt=e.get("EXT_clip_control");gt?Xt.clipControlEXT(Xt.LOWER_LEFT_EXT,Xt.ZERO_TO_ONE_EXT):Xt.clipControlEXT(Xt.LOWER_LEFT_EXT,Xt.NEGATIVE_ONE_TO_ONE_EXT),Lt=gt;const ue=Et;Et=null,this.setClear(ue)}},getReversed:function(){return Lt},setTest:function(gt){gt?st(o.DEPTH_TEST):bt(o.DEPTH_TEST)},setMask:function(gt){wt!==gt&&!F&&(o.depthMask(gt),wt=gt)},setFunc:function(gt){if(Lt&&(gt=k2[gt]),Dt!==gt){switch(gt){case fp:o.depthFunc(o.NEVER);break;case hp:o.depthFunc(o.ALWAYS);break;case dp:o.depthFunc(o.LESS);break;case oo:o.depthFunc(o.LEQUAL);break;case pp:o.depthFunc(o.EQUAL);break;case mp:o.depthFunc(o.GEQUAL);break;case xp:o.depthFunc(o.GREATER);break;case gp:o.depthFunc(o.NOTEQUAL);break;default:o.depthFunc(o.LEQUAL)}Dt=gt}},setLocked:function(gt){F=gt},setClear:function(gt){Et!==gt&&(Lt&&(gt=1-gt),o.clearDepth(gt),Et=gt)},reset:function(){F=!1,wt=null,Dt=null,Et=null,Lt=!1}}}function l(){let F=!1,Lt=null,wt=null,Dt=null,Et=null,gt=null,Xt=null,ue=null,We=null;return{setTest:function(De){F||(De?st(o.STENCIL_TEST):bt(o.STENCIL_TEST))},setMask:function(De){Lt!==De&&!F&&(o.stencilMask(De),Lt=De)},setFunc:function(De,tn,fn){(wt!==De||Dt!==tn||Et!==fn)&&(o.stencilFunc(De,tn,fn),wt=De,Dt=tn,Et=fn)},setOp:function(De,tn,fn){(gt!==De||Xt!==tn||ue!==fn)&&(o.stencilOp(De,tn,fn),gt=De,Xt=tn,ue=fn)},setLocked:function(De){F=De},setClear:function(De){We!==De&&(o.clearStencil(De),We=De)},reset:function(){F=!1,Lt=null,wt=null,Dt=null,Et=null,gt=null,Xt=null,ue=null,We=null}}}const f=new i,h=new s,d=new l,x=new WeakMap,m=new WeakMap;let _={},p={},y=new WeakMap,b=[],E=null,A=!1,S=null,v=null,N=null,L=null,z=null,G=null,D=null,O=new Me(0,0,0),X=0,w=!1,C=null,H=null,Q=null,nt=null,ht=null;const ot=o.getParameter(o.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let k=!1,ct=0;const $=o.getParameter(o.VERSION);$.indexOf("WebGL")!==-1?(ct=parseFloat(/^WebGL (\d)/.exec($)[1]),k=ct>=1):$.indexOf("OpenGL ES")!==-1&&(ct=parseFloat(/^OpenGL ES (\d)/.exec($)[1]),k=ct>=2);let _t=null,vt={};const Yt=o.getParameter(o.SCISSOR_BOX),he=o.getParameter(o.VIEWPORT),Ae=new rn().fromArray(Yt),I=new rn().fromArray(he);function dt(F,Lt,wt,Dt){const Et=new Uint8Array(4),gt=o.createTexture();o.bindTexture(F,gt),o.texParameteri(F,o.TEXTURE_MIN_FILTER,o.NEAREST),o.texParameteri(F,o.TEXTURE_MAG_FILTER,o.NEAREST);for(let Xt=0;Xt<wt;Xt++)F===o.TEXTURE_3D||F===o.TEXTURE_2D_ARRAY?o.texImage3D(Lt,0,o.RGBA,1,1,Dt,0,o.RGBA,o.UNSIGNED_BYTE,Et):o.texImage2D(Lt+Xt,0,o.RGBA,1,1,0,o.RGBA,o.UNSIGNED_BYTE,Et);return gt}const et={};et[o.TEXTURE_2D]=dt(o.TEXTURE_2D,o.TEXTURE_2D,1),et[o.TEXTURE_CUBE_MAP]=dt(o.TEXTURE_CUBE_MAP,o.TEXTURE_CUBE_MAP_POSITIVE_X,6),et[o.TEXTURE_2D_ARRAY]=dt(o.TEXTURE_2D_ARRAY,o.TEXTURE_2D_ARRAY,1,1),et[o.TEXTURE_3D]=dt(o.TEXTURE_3D,o.TEXTURE_3D,1,1),f.setClear(0,0,0,1),h.setClear(1),d.setClear(0),st(o.DEPTH_TEST),h.setFunc(oo),ce(!1),Jt(U_),st(o.CULL_FACE),ke(Da);function st(F){_[F]!==!0&&(o.enable(F),_[F]=!0)}function bt(F){_[F]!==!1&&(o.disable(F),_[F]=!1)}function Pt(F,Lt){return p[F]!==Lt?(o.bindFramebuffer(F,Lt),p[F]=Lt,F===o.DRAW_FRAMEBUFFER&&(p[o.FRAMEBUFFER]=Lt),F===o.FRAMEBUFFER&&(p[o.DRAW_FRAMEBUFFER]=Lt),!0):!1}function Rt(F,Lt){let wt=b,Dt=!1;if(F){wt=y.get(Lt),wt===void 0&&(wt=[],y.set(Lt,wt));const Et=F.textures;if(wt.length!==Et.length||wt[0]!==o.COLOR_ATTACHMENT0){for(let gt=0,Xt=Et.length;gt<Xt;gt++)wt[gt]=o.COLOR_ATTACHMENT0+gt;wt.length=Et.length,Dt=!0}}else wt[0]!==o.BACK&&(wt[0]=o.BACK,Dt=!0);Dt&&o.drawBuffers(wt)}function Mt(F){return E!==F?(o.useProgram(F),E=F,!0):!1}const Gt={[Zs]:o.FUNC_ADD,[UM]:o.FUNC_SUBTRACT,[NM]:o.FUNC_REVERSE_SUBTRACT};Gt[LM]=o.MIN,Gt[OM]=o.MAX;const le={[PM]:o.ZERO,[zM]:o.ONE,[IM]:o.SRC_COLOR,[cp]:o.SRC_ALPHA,[XM]:o.SRC_ALPHA_SATURATE,[GM]:o.DST_COLOR,[BM]:o.DST_ALPHA,[FM]:o.ONE_MINUS_SRC_COLOR,[up]:o.ONE_MINUS_SRC_ALPHA,[VM]:o.ONE_MINUS_DST_COLOR,[HM]:o.ONE_MINUS_DST_ALPHA,[kM]:o.CONSTANT_COLOR,[YM]:o.ONE_MINUS_CONSTANT_COLOR,[qM]:o.CONSTANT_ALPHA,[jM]:o.ONE_MINUS_CONSTANT_ALPHA};function ke(F,Lt,wt,Dt,Et,gt,Xt,ue,We,De){if(F===Da){A===!0&&(bt(o.BLEND),A=!1);return}if(A===!1&&(st(o.BLEND),A=!0),F!==DM){if(F!==S||De!==w){if((v!==Zs||z!==Zs)&&(o.blendEquation(o.FUNC_ADD),v=Zs,z=Zs),De)switch(F){case so:o.blendFuncSeparate(o.ONE,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case N_:o.blendFunc(o.ONE,o.ONE);break;case L_:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case O_:o.blendFuncSeparate(o.DST_COLOR,o.ONE_MINUS_SRC_ALPHA,o.ZERO,o.ONE);break;default:un("WebGLState: Invalid blending: ",F);break}else switch(F){case so:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case N_:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE,o.ONE,o.ONE);break;case L_:un("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case O_:un("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:un("WebGLState: Invalid blending: ",F);break}N=null,L=null,G=null,D=null,O.set(0,0,0),X=0,S=F,w=De}return}Et=Et||Lt,gt=gt||wt,Xt=Xt||Dt,(Lt!==v||Et!==z)&&(o.blendEquationSeparate(Gt[Lt],Gt[Et]),v=Lt,z=Et),(wt!==N||Dt!==L||gt!==G||Xt!==D)&&(o.blendFuncSeparate(le[wt],le[Dt],le[gt],le[Xt]),N=wt,L=Dt,G=gt,D=Xt),(ue.equals(O)===!1||We!==X)&&(o.blendColor(ue.r,ue.g,ue.b,We),O.copy(ue),X=We),S=F,w=!1}function B(F,Lt){F.side===Ca?bt(o.CULL_FACE):st(o.CULL_FACE);let wt=F.side===ni;Lt&&(wt=!wt),ce(wt),F.blending===so&&F.transparent===!1?ke(Da):ke(F.blending,F.blendEquation,F.blendSrc,F.blendDst,F.blendEquationAlpha,F.blendSrcAlpha,F.blendDstAlpha,F.blendColor,F.blendAlpha,F.premultipliedAlpha),h.setFunc(F.depthFunc),h.setTest(F.depthTest),h.setMask(F.depthWrite),f.setMask(F.colorWrite);const Dt=F.stencilWrite;d.setTest(Dt),Dt&&(d.setMask(F.stencilWriteMask),d.setFunc(F.stencilFunc,F.stencilRef,F.stencilFuncMask),d.setOp(F.stencilFail,F.stencilZFail,F.stencilZPass)),Ft(F.polygonOffset,F.polygonOffsetFactor,F.polygonOffsetUnits),F.alphaToCoverage===!0?st(o.SAMPLE_ALPHA_TO_COVERAGE):bt(o.SAMPLE_ALPHA_TO_COVERAGE)}function ce(F){C!==F&&(F?o.frontFace(o.CW):o.frontFace(o.CCW),C=F)}function Jt(F){F!==RM?(st(o.CULL_FACE),F!==H&&(F===U_?o.cullFace(o.BACK):F===CM?o.cullFace(o.FRONT):o.cullFace(o.FRONT_AND_BACK))):bt(o.CULL_FACE),H=F}function te(F){F!==Q&&(k&&o.lineWidth(F),Q=F)}function Ft(F,Lt,wt){F?(st(o.POLYGON_OFFSET_FILL),(nt!==Lt||ht!==wt)&&(o.polygonOffset(Lt,wt),nt=Lt,ht=wt)):bt(o.POLYGON_OFFSET_FILL)}function Fe(F){F?st(o.SCISSOR_TEST):bt(o.SCISSOR_TEST)}function qt(F){F===void 0&&(F=o.TEXTURE0+ot-1),_t!==F&&(o.activeTexture(F),_t=F)}function se(F,Lt,wt){wt===void 0&&(_t===null?wt=o.TEXTURE0+ot-1:wt=_t);let Dt=vt[wt];Dt===void 0&&(Dt={type:void 0,texture:void 0},vt[wt]=Dt),(Dt.type!==F||Dt.texture!==Lt)&&(_t!==wt&&(o.activeTexture(wt),_t=wt),o.bindTexture(F,Lt||et[F]),Dt.type=F,Dt.texture=Lt)}function U(){const F=vt[_t];F!==void 0&&F.type!==void 0&&(o.bindTexture(F.type,null),F.type=void 0,F.texture=void 0)}function T(){try{o.compressedTexImage2D(...arguments)}catch(F){F("WebGLState:",F)}}function at(){try{o.compressedTexImage3D(...arguments)}catch(F){F("WebGLState:",F)}}function xt(){try{o.texSubImage2D(...arguments)}catch(F){F("WebGLState:",F)}}function yt(){try{o.texSubImage3D(...arguments)}catch(F){F("WebGLState:",F)}}function ft(){try{o.compressedTexSubImage2D(...arguments)}catch(F){F("WebGLState:",F)}}function Vt(){try{o.compressedTexSubImage3D(...arguments)}catch(F){F("WebGLState:",F)}}function Nt(){try{o.texStorage2D(...arguments)}catch(F){F("WebGLState:",F)}}function Kt(){try{o.texStorage3D(...arguments)}catch(F){F("WebGLState:",F)}}function jt(){try{o.texImage2D(...arguments)}catch(F){F("WebGLState:",F)}}function St(){try{o.texImage3D(...arguments)}catch(F){F("WebGLState:",F)}}function Ct(F){Ae.equals(F)===!1&&(o.scissor(F.x,F.y,F.z,F.w),Ae.copy(F))}function ee(F){I.equals(F)===!1&&(o.viewport(F.x,F.y,F.z,F.w),I.copy(F))}function $t(F,Lt){let wt=m.get(Lt);wt===void 0&&(wt=new WeakMap,m.set(Lt,wt));let Dt=wt.get(F);Dt===void 0&&(Dt=o.getUniformBlockIndex(Lt,F.name),wt.set(F,Dt))}function Bt(F,Lt){const Dt=m.get(Lt).get(F);x.get(Lt)!==Dt&&(o.uniformBlockBinding(Lt,Dt,F.__bindingPointIndex),x.set(Lt,Dt))}function re(){o.disable(o.BLEND),o.disable(o.CULL_FACE),o.disable(o.DEPTH_TEST),o.disable(o.POLYGON_OFFSET_FILL),o.disable(o.SCISSOR_TEST),o.disable(o.STENCIL_TEST),o.disable(o.SAMPLE_ALPHA_TO_COVERAGE),o.blendEquation(o.FUNC_ADD),o.blendFunc(o.ONE,o.ZERO),o.blendFuncSeparate(o.ONE,o.ZERO,o.ONE,o.ZERO),o.blendColor(0,0,0,0),o.colorMask(!0,!0,!0,!0),o.clearColor(0,0,0,0),o.depthMask(!0),o.depthFunc(o.LESS),h.setReversed(!1),o.clearDepth(1),o.stencilMask(4294967295),o.stencilFunc(o.ALWAYS,0,4294967295),o.stencilOp(o.KEEP,o.KEEP,o.KEEP),o.clearStencil(0),o.cullFace(o.BACK),o.frontFace(o.CCW),o.polygonOffset(0,0),o.activeTexture(o.TEXTURE0),o.bindFramebuffer(o.FRAMEBUFFER,null),o.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),o.bindFramebuffer(o.READ_FRAMEBUFFER,null),o.useProgram(null),o.lineWidth(1),o.scissor(0,0,o.canvas.width,o.canvas.height),o.viewport(0,0,o.canvas.width,o.canvas.height),_={},_t=null,vt={},p={},y=new WeakMap,b=[],E=null,A=!1,S=null,v=null,N=null,L=null,z=null,G=null,D=null,O=new Me(0,0,0),X=0,w=!1,C=null,H=null,Q=null,nt=null,ht=null,Ae.set(0,0,o.canvas.width,o.canvas.height),I.set(0,0,o.canvas.width,o.canvas.height),f.reset(),h.reset(),d.reset()}return{buffers:{color:f,depth:h,stencil:d},enable:st,disable:bt,bindFramebuffer:Pt,drawBuffers:Rt,useProgram:Mt,setBlending:ke,setMaterial:B,setFlipSided:ce,setCullFace:Jt,setLineWidth:te,setPolygonOffset:Ft,setScissorTest:Fe,activeTexture:qt,bindTexture:se,unbindTexture:U,compressedTexImage2D:T,compressedTexImage3D:at,texImage2D:jt,texImage3D:St,updateUBOMapping:$t,uniformBlockBinding:Bt,texStorage2D:Nt,texStorage3D:Kt,texSubImage2D:xt,texSubImage3D:yt,compressedTexSubImage2D:ft,compressedTexSubImage3D:Vt,scissor:Ct,viewport:ee,reset:re}}function q2(o,e,i,s,l,f,h){const d=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,x=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),m=new de,_=new WeakMap;let p;const y=new WeakMap;let b=!1;try{b=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function E(U,T){return b?new OffscreenCanvas(U,T):Iu("canvas")}function A(U,T,at){let xt=1;const yt=se(U);if((yt.width>at||yt.height>at)&&(xt=at/Math.max(yt.width,yt.height)),xt<1)if(typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&U instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&U instanceof ImageBitmap||typeof VideoFrame<"u"&&U instanceof VideoFrame){const ft=Math.floor(xt*yt.width),Vt=Math.floor(xt*yt.height);p===void 0&&(p=E(ft,Vt));const Nt=T?E(ft,Vt):p;return Nt.width=ft,Nt.height=Vt,Nt.getContext("2d").drawImage(U,0,0,ft,Vt),oe("WebGLRenderer: Texture has been resized from ("+yt.width+"x"+yt.height+") to ("+ft+"x"+Vt+")."),Nt}else return"data"in U&&oe("WebGLRenderer: Image in DataTexture is too big ("+yt.width+"x"+yt.height+")."),U;return U}function S(U){return U.generateMipmaps}function v(U){o.generateMipmap(U)}function N(U){return U.isWebGLCubeRenderTarget?o.TEXTURE_CUBE_MAP:U.isWebGL3DRenderTarget?o.TEXTURE_3D:U.isWebGLArrayRenderTarget||U.isCompressedArrayTexture?o.TEXTURE_2D_ARRAY:o.TEXTURE_2D}function L(U,T,at,xt,yt=!1){if(U!==null){if(o[U]!==void 0)return o[U];oe("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+U+"'")}let ft=T;if(T===o.RED&&(at===o.FLOAT&&(ft=o.R32F),at===o.HALF_FLOAT&&(ft=o.R16F),at===o.UNSIGNED_BYTE&&(ft=o.R8)),T===o.RED_INTEGER&&(at===o.UNSIGNED_BYTE&&(ft=o.R8UI),at===o.UNSIGNED_SHORT&&(ft=o.R16UI),at===o.UNSIGNED_INT&&(ft=o.R32UI),at===o.BYTE&&(ft=o.R8I),at===o.SHORT&&(ft=o.R16I),at===o.INT&&(ft=o.R32I)),T===o.RG&&(at===o.FLOAT&&(ft=o.RG32F),at===o.HALF_FLOAT&&(ft=o.RG16F),at===o.UNSIGNED_BYTE&&(ft=o.RG8)),T===o.RG_INTEGER&&(at===o.UNSIGNED_BYTE&&(ft=o.RG8UI),at===o.UNSIGNED_SHORT&&(ft=o.RG16UI),at===o.UNSIGNED_INT&&(ft=o.RG32UI),at===o.BYTE&&(ft=o.RG8I),at===o.SHORT&&(ft=o.RG16I),at===o.INT&&(ft=o.RG32I)),T===o.RGB_INTEGER&&(at===o.UNSIGNED_BYTE&&(ft=o.RGB8UI),at===o.UNSIGNED_SHORT&&(ft=o.RGB16UI),at===o.UNSIGNED_INT&&(ft=o.RGB32UI),at===o.BYTE&&(ft=o.RGB8I),at===o.SHORT&&(ft=o.RGB16I),at===o.INT&&(ft=o.RGB32I)),T===o.RGBA_INTEGER&&(at===o.UNSIGNED_BYTE&&(ft=o.RGBA8UI),at===o.UNSIGNED_SHORT&&(ft=o.RGBA16UI),at===o.UNSIGNED_INT&&(ft=o.RGBA32UI),at===o.BYTE&&(ft=o.RGBA8I),at===o.SHORT&&(ft=o.RGBA16I),at===o.INT&&(ft=o.RGBA32I)),T===o.RGB&&(at===o.UNSIGNED_INT_5_9_9_9_REV&&(ft=o.RGB9_E5),at===o.UNSIGNED_INT_10F_11F_11F_REV&&(ft=o.R11F_G11F_B10F)),T===o.RGBA){const Vt=yt?Pu:Oe.getTransfer(xt);at===o.FLOAT&&(ft=o.RGBA32F),at===o.HALF_FLOAT&&(ft=o.RGBA16F),at===o.UNSIGNED_BYTE&&(ft=Vt===qe?o.SRGB8_ALPHA8:o.RGBA8),at===o.UNSIGNED_SHORT_4_4_4_4&&(ft=o.RGBA4),at===o.UNSIGNED_SHORT_5_5_5_1&&(ft=o.RGB5_A1)}return(ft===o.R16F||ft===o.R32F||ft===o.RG16F||ft===o.RG32F||ft===o.RGBA16F||ft===o.RGBA32F)&&e.get("EXT_color_buffer_float"),ft}function z(U,T){let at;return U?T===null||T===Js||T===Ml?at=o.DEPTH24_STENCIL8:T===$i?at=o.DEPTH32F_STENCIL8:T===bl&&(at=o.DEPTH24_STENCIL8,oe("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===Js||T===Ml?at=o.DEPTH_COMPONENT24:T===$i?at=o.DEPTH_COMPONENT32F:T===bl&&(at=o.DEPTH_COMPONENT16),at}function G(U,T){return S(U)===!0||U.isFramebufferTexture&&U.minFilter!==pi&&U.minFilter!==Ci?Math.log2(Math.max(T.width,T.height))+1:U.mipmaps!==void 0&&U.mipmaps.length>0?U.mipmaps.length:U.isCompressedTexture&&Array.isArray(U.image)?T.mipmaps.length:1}function D(U){const T=U.target;T.removeEventListener("dispose",D),X(T),T.isVideoTexture&&_.delete(T)}function O(U){const T=U.target;T.removeEventListener("dispose",O),C(T)}function X(U){const T=s.get(U);if(T.__webglInit===void 0)return;const at=U.source,xt=y.get(at);if(xt){const yt=xt[T.__cacheKey];yt.usedTimes--,yt.usedTimes===0&&w(U),Object.keys(xt).length===0&&y.delete(at)}s.remove(U)}function w(U){const T=s.get(U);o.deleteTexture(T.__webglTexture);const at=U.source,xt=y.get(at);delete xt[T.__cacheKey],h.memory.textures--}function C(U){const T=s.get(U);if(U.depthTexture&&(U.depthTexture.dispose(),s.remove(U.depthTexture)),U.isWebGLCubeRenderTarget)for(let xt=0;xt<6;xt++){if(Array.isArray(T.__webglFramebuffer[xt]))for(let yt=0;yt<T.__webglFramebuffer[xt].length;yt++)o.deleteFramebuffer(T.__webglFramebuffer[xt][yt]);else o.deleteFramebuffer(T.__webglFramebuffer[xt]);T.__webglDepthbuffer&&o.deleteRenderbuffer(T.__webglDepthbuffer[xt])}else{if(Array.isArray(T.__webglFramebuffer))for(let xt=0;xt<T.__webglFramebuffer.length;xt++)o.deleteFramebuffer(T.__webglFramebuffer[xt]);else o.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&o.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&o.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let xt=0;xt<T.__webglColorRenderbuffer.length;xt++)T.__webglColorRenderbuffer[xt]&&o.deleteRenderbuffer(T.__webglColorRenderbuffer[xt]);T.__webglDepthRenderbuffer&&o.deleteRenderbuffer(T.__webglDepthRenderbuffer)}const at=U.textures;for(let xt=0,yt=at.length;xt<yt;xt++){const ft=s.get(at[xt]);ft.__webglTexture&&(o.deleteTexture(ft.__webglTexture),h.memory.textures--),s.remove(at[xt])}s.remove(U)}let H=0;function Q(){H=0}function nt(){const U=H;return U>=l.maxTextures&&oe("WebGLTextures: Trying to use "+U+" texture units while this GPU supports only "+l.maxTextures),H+=1,U}function ht(U){const T=[];return T.push(U.wrapS),T.push(U.wrapT),T.push(U.wrapR||0),T.push(U.magFilter),T.push(U.minFilter),T.push(U.anisotropy),T.push(U.internalFormat),T.push(U.format),T.push(U.type),T.push(U.generateMipmaps),T.push(U.premultiplyAlpha),T.push(U.flipY),T.push(U.unpackAlignment),T.push(U.colorSpace),T.join()}function ot(U,T){const at=s.get(U);if(U.isVideoTexture&&Fe(U),U.isRenderTargetTexture===!1&&U.isExternalTexture!==!0&&U.version>0&&at.__version!==U.version){const xt=U.image;if(xt===null)oe("WebGLRenderer: Texture marked for update but no image data found.");else if(xt.complete===!1)oe("WebGLRenderer: Texture marked for update but image is incomplete");else{et(at,U,T);return}}else U.isExternalTexture&&(at.__webglTexture=U.sourceTexture?U.sourceTexture:null);i.bindTexture(o.TEXTURE_2D,at.__webglTexture,o.TEXTURE0+T)}function k(U,T){const at=s.get(U);if(U.isRenderTargetTexture===!1&&U.version>0&&at.__version!==U.version){et(at,U,T);return}else U.isExternalTexture&&(at.__webglTexture=U.sourceTexture?U.sourceTexture:null);i.bindTexture(o.TEXTURE_2D_ARRAY,at.__webglTexture,o.TEXTURE0+T)}function ct(U,T){const at=s.get(U);if(U.isRenderTargetTexture===!1&&U.version>0&&at.__version!==U.version){et(at,U,T);return}i.bindTexture(o.TEXTURE_3D,at.__webglTexture,o.TEXTURE0+T)}function $(U,T){const at=s.get(U);if(U.version>0&&at.__version!==U.version){st(at,U,T);return}i.bindTexture(o.TEXTURE_CUBE_MAP,at.__webglTexture,o.TEXTURE0+T)}const _t={[yp]:o.REPEAT,[wa]:o.CLAMP_TO_EDGE,[Sp]:o.MIRRORED_REPEAT},vt={[pi]:o.NEAREST,[i1]:o.NEAREST_MIPMAP_NEAREST,[au]:o.NEAREST_MIPMAP_LINEAR,[Ci]:o.LINEAR,[Td]:o.LINEAR_MIPMAP_NEAREST,[Qs]:o.LINEAR_MIPMAP_LINEAR},Yt={[o1]:o.NEVER,[d1]:o.ALWAYS,[l1]:o.LESS,[Qv]:o.LEQUAL,[c1]:o.EQUAL,[h1]:o.GEQUAL,[u1]:o.GREATER,[f1]:o.NOTEQUAL};function he(U,T){if(T.type===$i&&e.has("OES_texture_float_linear")===!1&&(T.magFilter===Ci||T.magFilter===Td||T.magFilter===au||T.magFilter===Qs||T.minFilter===Ci||T.minFilter===Td||T.minFilter===au||T.minFilter===Qs)&&oe("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),o.texParameteri(U,o.TEXTURE_WRAP_S,_t[T.wrapS]),o.texParameteri(U,o.TEXTURE_WRAP_T,_t[T.wrapT]),(U===o.TEXTURE_3D||U===o.TEXTURE_2D_ARRAY)&&o.texParameteri(U,o.TEXTURE_WRAP_R,_t[T.wrapR]),o.texParameteri(U,o.TEXTURE_MAG_FILTER,vt[T.magFilter]),o.texParameteri(U,o.TEXTURE_MIN_FILTER,vt[T.minFilter]),T.compareFunction&&(o.texParameteri(U,o.TEXTURE_COMPARE_MODE,o.COMPARE_REF_TO_TEXTURE),o.texParameteri(U,o.TEXTURE_COMPARE_FUNC,Yt[T.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===pi||T.minFilter!==au&&T.minFilter!==Qs||T.type===$i&&e.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||s.get(T).__currentAnisotropy){const at=e.get("EXT_texture_filter_anisotropic");o.texParameterf(U,at.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,l.getMaxAnisotropy())),s.get(T).__currentAnisotropy=T.anisotropy}}}function Ae(U,T){let at=!1;U.__webglInit===void 0&&(U.__webglInit=!0,T.addEventListener("dispose",D));const xt=T.source;let yt=y.get(xt);yt===void 0&&(yt={},y.set(xt,yt));const ft=ht(T);if(ft!==U.__cacheKey){yt[ft]===void 0&&(yt[ft]={texture:o.createTexture(),usedTimes:0},h.memory.textures++,at=!0),yt[ft].usedTimes++;const Vt=yt[U.__cacheKey];Vt!==void 0&&(yt[U.__cacheKey].usedTimes--,Vt.usedTimes===0&&w(T)),U.__cacheKey=ft,U.__webglTexture=yt[ft].texture}return at}function I(U,T,at){return Math.floor(Math.floor(U/at)/T)}function dt(U,T,at,xt){const ft=U.updateRanges;if(ft.length===0)i.texSubImage2D(o.TEXTURE_2D,0,0,0,T.width,T.height,at,xt,T.data);else{ft.sort((St,Ct)=>St.start-Ct.start);let Vt=0;for(let St=1;St<ft.length;St++){const Ct=ft[Vt],ee=ft[St],$t=Ct.start+Ct.count,Bt=I(ee.start,T.width,4),re=I(Ct.start,T.width,4);ee.start<=$t+1&&Bt===re&&I(ee.start+ee.count-1,T.width,4)===Bt?Ct.count=Math.max(Ct.count,ee.start+ee.count-Ct.start):(++Vt,ft[Vt]=ee)}ft.length=Vt+1;const Nt=o.getParameter(o.UNPACK_ROW_LENGTH),Kt=o.getParameter(o.UNPACK_SKIP_PIXELS),jt=o.getParameter(o.UNPACK_SKIP_ROWS);o.pixelStorei(o.UNPACK_ROW_LENGTH,T.width);for(let St=0,Ct=ft.length;St<Ct;St++){const ee=ft[St],$t=Math.floor(ee.start/4),Bt=Math.ceil(ee.count/4),re=$t%T.width,F=Math.floor($t/T.width),Lt=Bt,wt=1;o.pixelStorei(o.UNPACK_SKIP_PIXELS,re),o.pixelStorei(o.UNPACK_SKIP_ROWS,F),i.texSubImage2D(o.TEXTURE_2D,0,re,F,Lt,wt,at,xt,T.data)}U.clearUpdateRanges(),o.pixelStorei(o.UNPACK_ROW_LENGTH,Nt),o.pixelStorei(o.UNPACK_SKIP_PIXELS,Kt),o.pixelStorei(o.UNPACK_SKIP_ROWS,jt)}}function et(U,T,at){let xt=o.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(xt=o.TEXTURE_2D_ARRAY),T.isData3DTexture&&(xt=o.TEXTURE_3D);const yt=Ae(U,T),ft=T.source;i.bindTexture(xt,U.__webglTexture,o.TEXTURE0+at);const Vt=s.get(ft);if(ft.version!==Vt.__version||yt===!0){i.activeTexture(o.TEXTURE0+at);const Nt=Oe.getPrimaries(Oe.workingColorSpace),Kt=T.colorSpace===ms?null:Oe.getPrimaries(T.colorSpace),jt=T.colorSpace===ms||Nt===Kt?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,T.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,T.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,jt);let St=A(T.image,!1,l.maxTextureSize);St=qt(T,St);const Ct=f.convert(T.format,T.colorSpace),ee=f.convert(T.type);let $t=L(T.internalFormat,Ct,ee,T.colorSpace,T.isVideoTexture);he(xt,T);let Bt;const re=T.mipmaps,F=T.isVideoTexture!==!0,Lt=Vt.__version===void 0||yt===!0,wt=ft.dataReady,Dt=G(T,St);if(T.isDepthTexture)$t=z(T.format===Tl,T.type),Lt&&(F?i.texStorage2D(o.TEXTURE_2D,1,$t,St.width,St.height):i.texImage2D(o.TEXTURE_2D,0,$t,St.width,St.height,0,Ct,ee,null));else if(T.isDataTexture)if(re.length>0){F&&Lt&&i.texStorage2D(o.TEXTURE_2D,Dt,$t,re[0].width,re[0].height);for(let Et=0,gt=re.length;Et<gt;Et++)Bt=re[Et],F?wt&&i.texSubImage2D(o.TEXTURE_2D,Et,0,0,Bt.width,Bt.height,Ct,ee,Bt.data):i.texImage2D(o.TEXTURE_2D,Et,$t,Bt.width,Bt.height,0,Ct,ee,Bt.data);T.generateMipmaps=!1}else F?(Lt&&i.texStorage2D(o.TEXTURE_2D,Dt,$t,St.width,St.height),wt&&dt(T,St,Ct,ee)):i.texImage2D(o.TEXTURE_2D,0,$t,St.width,St.height,0,Ct,ee,St.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){F&&Lt&&i.texStorage3D(o.TEXTURE_2D_ARRAY,Dt,$t,re[0].width,re[0].height,St.depth);for(let Et=0,gt=re.length;Et<gt;Et++)if(Bt=re[Et],T.format!==wi)if(Ct!==null)if(F){if(wt)if(T.layerUpdates.size>0){const Xt=fv(Bt.width,Bt.height,T.format,T.type);for(const ue of T.layerUpdates){const We=Bt.data.subarray(ue*Xt/Bt.data.BYTES_PER_ELEMENT,(ue+1)*Xt/Bt.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,Et,0,0,ue,Bt.width,Bt.height,1,Ct,We)}T.clearLayerUpdates()}else i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,Et,0,0,0,Bt.width,Bt.height,St.depth,Ct,Bt.data)}else i.compressedTexImage3D(o.TEXTURE_2D_ARRAY,Et,$t,Bt.width,Bt.height,St.depth,0,Bt.data,0,0);else oe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else F?wt&&i.texSubImage3D(o.TEXTURE_2D_ARRAY,Et,0,0,0,Bt.width,Bt.height,St.depth,Ct,ee,Bt.data):i.texImage3D(o.TEXTURE_2D_ARRAY,Et,$t,Bt.width,Bt.height,St.depth,0,Ct,ee,Bt.data)}else{F&&Lt&&i.texStorage2D(o.TEXTURE_2D,Dt,$t,re[0].width,re[0].height);for(let Et=0,gt=re.length;Et<gt;Et++)Bt=re[Et],T.format!==wi?Ct!==null?F?wt&&i.compressedTexSubImage2D(o.TEXTURE_2D,Et,0,0,Bt.width,Bt.height,Ct,Bt.data):i.compressedTexImage2D(o.TEXTURE_2D,Et,$t,Bt.width,Bt.height,0,Bt.data):oe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):F?wt&&i.texSubImage2D(o.TEXTURE_2D,Et,0,0,Bt.width,Bt.height,Ct,ee,Bt.data):i.texImage2D(o.TEXTURE_2D,Et,$t,Bt.width,Bt.height,0,Ct,ee,Bt.data)}else if(T.isDataArrayTexture)if(F){if(Lt&&i.texStorage3D(o.TEXTURE_2D_ARRAY,Dt,$t,St.width,St.height,St.depth),wt)if(T.layerUpdates.size>0){const Et=fv(St.width,St.height,T.format,T.type);for(const gt of T.layerUpdates){const Xt=St.data.subarray(gt*Et/St.data.BYTES_PER_ELEMENT,(gt+1)*Et/St.data.BYTES_PER_ELEMENT);i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,gt,St.width,St.height,1,Ct,ee,Xt)}T.clearLayerUpdates()}else i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,0,St.width,St.height,St.depth,Ct,ee,St.data)}else i.texImage3D(o.TEXTURE_2D_ARRAY,0,$t,St.width,St.height,St.depth,0,Ct,ee,St.data);else if(T.isData3DTexture)F?(Lt&&i.texStorage3D(o.TEXTURE_3D,Dt,$t,St.width,St.height,St.depth),wt&&i.texSubImage3D(o.TEXTURE_3D,0,0,0,0,St.width,St.height,St.depth,Ct,ee,St.data)):i.texImage3D(o.TEXTURE_3D,0,$t,St.width,St.height,St.depth,0,Ct,ee,St.data);else if(T.isFramebufferTexture){if(Lt)if(F)i.texStorage2D(o.TEXTURE_2D,Dt,$t,St.width,St.height);else{let Et=St.width,gt=St.height;for(let Xt=0;Xt<Dt;Xt++)i.texImage2D(o.TEXTURE_2D,Xt,$t,Et,gt,0,Ct,ee,null),Et>>=1,gt>>=1}}else if(re.length>0){if(F&&Lt){const Et=se(re[0]);i.texStorage2D(o.TEXTURE_2D,Dt,$t,Et.width,Et.height)}for(let Et=0,gt=re.length;Et<gt;Et++)Bt=re[Et],F?wt&&i.texSubImage2D(o.TEXTURE_2D,Et,0,0,Ct,ee,Bt):i.texImage2D(o.TEXTURE_2D,Et,$t,Ct,ee,Bt);T.generateMipmaps=!1}else if(F){if(Lt){const Et=se(St);i.texStorage2D(o.TEXTURE_2D,Dt,$t,Et.width,Et.height)}wt&&i.texSubImage2D(o.TEXTURE_2D,0,0,0,Ct,ee,St)}else i.texImage2D(o.TEXTURE_2D,0,$t,Ct,ee,St);S(T)&&v(xt),Vt.__version=ft.version,T.onUpdate&&T.onUpdate(T)}U.__version=T.version}function st(U,T,at){if(T.image.length!==6)return;const xt=Ae(U,T),yt=T.source;i.bindTexture(o.TEXTURE_CUBE_MAP,U.__webglTexture,o.TEXTURE0+at);const ft=s.get(yt);if(yt.version!==ft.__version||xt===!0){i.activeTexture(o.TEXTURE0+at);const Vt=Oe.getPrimaries(Oe.workingColorSpace),Nt=T.colorSpace===ms?null:Oe.getPrimaries(T.colorSpace),Kt=T.colorSpace===ms||Vt===Nt?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,T.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,T.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,Kt);const jt=T.isCompressedTexture||T.image[0].isCompressedTexture,St=T.image[0]&&T.image[0].isDataTexture,Ct=[];for(let gt=0;gt<6;gt++)!jt&&!St?Ct[gt]=A(T.image[gt],!0,l.maxCubemapSize):Ct[gt]=St?T.image[gt].image:T.image[gt],Ct[gt]=qt(T,Ct[gt]);const ee=Ct[0],$t=f.convert(T.format,T.colorSpace),Bt=f.convert(T.type),re=L(T.internalFormat,$t,Bt,T.colorSpace),F=T.isVideoTexture!==!0,Lt=ft.__version===void 0||xt===!0,wt=yt.dataReady;let Dt=G(T,ee);he(o.TEXTURE_CUBE_MAP,T);let Et;if(jt){F&&Lt&&i.texStorage2D(o.TEXTURE_CUBE_MAP,Dt,re,ee.width,ee.height);for(let gt=0;gt<6;gt++){Et=Ct[gt].mipmaps;for(let Xt=0;Xt<Et.length;Xt++){const ue=Et[Xt];T.format!==wi?$t!==null?F?wt&&i.compressedTexSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Xt,0,0,ue.width,ue.height,$t,ue.data):i.compressedTexImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Xt,re,ue.width,ue.height,0,ue.data):oe("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):F?wt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Xt,0,0,ue.width,ue.height,$t,Bt,ue.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Xt,re,ue.width,ue.height,0,$t,Bt,ue.data)}}}else{if(Et=T.mipmaps,F&&Lt){Et.length>0&&Dt++;const gt=se(Ct[0]);i.texStorage2D(o.TEXTURE_CUBE_MAP,Dt,re,gt.width,gt.height)}for(let gt=0;gt<6;gt++)if(St){F?wt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+gt,0,0,0,Ct[gt].width,Ct[gt].height,$t,Bt,Ct[gt].data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+gt,0,re,Ct[gt].width,Ct[gt].height,0,$t,Bt,Ct[gt].data);for(let Xt=0;Xt<Et.length;Xt++){const We=Et[Xt].image[gt].image;F?wt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Xt+1,0,0,We.width,We.height,$t,Bt,We.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Xt+1,re,We.width,We.height,0,$t,Bt,We.data)}}else{F?wt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+gt,0,0,0,$t,Bt,Ct[gt]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+gt,0,re,$t,Bt,Ct[gt]);for(let Xt=0;Xt<Et.length;Xt++){const ue=Et[Xt];F?wt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Xt+1,0,0,$t,Bt,ue.image[gt]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Xt+1,re,$t,Bt,ue.image[gt])}}}S(T)&&v(o.TEXTURE_CUBE_MAP),ft.__version=yt.version,T.onUpdate&&T.onUpdate(T)}U.__version=T.version}function bt(U,T,at,xt,yt,ft){const Vt=f.convert(at.format,at.colorSpace),Nt=f.convert(at.type),Kt=L(at.internalFormat,Vt,Nt,at.colorSpace),jt=s.get(T),St=s.get(at);if(St.__renderTarget=T,!jt.__hasExternalTextures){const Ct=Math.max(1,T.width>>ft),ee=Math.max(1,T.height>>ft);yt===o.TEXTURE_3D||yt===o.TEXTURE_2D_ARRAY?i.texImage3D(yt,ft,Kt,Ct,ee,T.depth,0,Vt,Nt,null):i.texImage2D(yt,ft,Kt,Ct,ee,0,Vt,Nt,null)}i.bindFramebuffer(o.FRAMEBUFFER,U),Ft(T)?d.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,xt,yt,St.__webglTexture,0,te(T)):(yt===o.TEXTURE_2D||yt>=o.TEXTURE_CUBE_MAP_POSITIVE_X&&yt<=o.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&o.framebufferTexture2D(o.FRAMEBUFFER,xt,yt,St.__webglTexture,ft),i.bindFramebuffer(o.FRAMEBUFFER,null)}function Pt(U,T,at){if(o.bindRenderbuffer(o.RENDERBUFFER,U),T.depthBuffer){const xt=T.depthTexture,yt=xt&&xt.isDepthTexture?xt.type:null,ft=z(T.stencilBuffer,yt),Vt=T.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Nt=te(T);Ft(T)?d.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,Nt,ft,T.width,T.height):at?o.renderbufferStorageMultisample(o.RENDERBUFFER,Nt,ft,T.width,T.height):o.renderbufferStorage(o.RENDERBUFFER,ft,T.width,T.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,Vt,o.RENDERBUFFER,U)}else{const xt=T.textures;for(let yt=0;yt<xt.length;yt++){const ft=xt[yt],Vt=f.convert(ft.format,ft.colorSpace),Nt=f.convert(ft.type),Kt=L(ft.internalFormat,Vt,Nt,ft.colorSpace),jt=te(T);at&&Ft(T)===!1?o.renderbufferStorageMultisample(o.RENDERBUFFER,jt,Kt,T.width,T.height):Ft(T)?d.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,jt,Kt,T.width,T.height):o.renderbufferStorage(o.RENDERBUFFER,Kt,T.width,T.height)}}o.bindRenderbuffer(o.RENDERBUFFER,null)}function Rt(U,T){if(T&&T.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(i.bindFramebuffer(o.FRAMEBUFFER,U),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const xt=s.get(T.depthTexture);xt.__renderTarget=T,(!xt.__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),ot(T.depthTexture,0);const yt=xt.__webglTexture,ft=te(T);if(T.depthTexture.format===El)Ft(T)?d.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,yt,0,ft):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,yt,0);else if(T.depthTexture.format===Tl)Ft(T)?d.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,yt,0,ft):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,yt,0);else throw new Error("Unknown depthTexture format")}function Mt(U){const T=s.get(U),at=U.isWebGLCubeRenderTarget===!0;if(T.__boundDepthTexture!==U.depthTexture){const xt=U.depthTexture;if(T.__depthDisposeCallback&&T.__depthDisposeCallback(),xt){const yt=()=>{delete T.__boundDepthTexture,delete T.__depthDisposeCallback,xt.removeEventListener("dispose",yt)};xt.addEventListener("dispose",yt),T.__depthDisposeCallback=yt}T.__boundDepthTexture=xt}if(U.depthTexture&&!T.__autoAllocateDepthBuffer){if(at)throw new Error("target.depthTexture not supported in Cube render targets");const xt=U.texture.mipmaps;xt&&xt.length>0?Rt(T.__webglFramebuffer[0],U):Rt(T.__webglFramebuffer,U)}else if(at){T.__webglDepthbuffer=[];for(let xt=0;xt<6;xt++)if(i.bindFramebuffer(o.FRAMEBUFFER,T.__webglFramebuffer[xt]),T.__webglDepthbuffer[xt]===void 0)T.__webglDepthbuffer[xt]=o.createRenderbuffer(),Pt(T.__webglDepthbuffer[xt],U,!1);else{const yt=U.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,ft=T.__webglDepthbuffer[xt];o.bindRenderbuffer(o.RENDERBUFFER,ft),o.framebufferRenderbuffer(o.FRAMEBUFFER,yt,o.RENDERBUFFER,ft)}}else{const xt=U.texture.mipmaps;if(xt&&xt.length>0?i.bindFramebuffer(o.FRAMEBUFFER,T.__webglFramebuffer[0]):i.bindFramebuffer(o.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer===void 0)T.__webglDepthbuffer=o.createRenderbuffer(),Pt(T.__webglDepthbuffer,U,!1);else{const yt=U.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,ft=T.__webglDepthbuffer;o.bindRenderbuffer(o.RENDERBUFFER,ft),o.framebufferRenderbuffer(o.FRAMEBUFFER,yt,o.RENDERBUFFER,ft)}}i.bindFramebuffer(o.FRAMEBUFFER,null)}function Gt(U,T,at){const xt=s.get(U);T!==void 0&&bt(xt.__webglFramebuffer,U,U.texture,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,0),at!==void 0&&Mt(U)}function le(U){const T=U.texture,at=s.get(U),xt=s.get(T);U.addEventListener("dispose",O);const yt=U.textures,ft=U.isWebGLCubeRenderTarget===!0,Vt=yt.length>1;if(Vt||(xt.__webglTexture===void 0&&(xt.__webglTexture=o.createTexture()),xt.__version=T.version,h.memory.textures++),ft){at.__webglFramebuffer=[];for(let Nt=0;Nt<6;Nt++)if(T.mipmaps&&T.mipmaps.length>0){at.__webglFramebuffer[Nt]=[];for(let Kt=0;Kt<T.mipmaps.length;Kt++)at.__webglFramebuffer[Nt][Kt]=o.createFramebuffer()}else at.__webglFramebuffer[Nt]=o.createFramebuffer()}else{if(T.mipmaps&&T.mipmaps.length>0){at.__webglFramebuffer=[];for(let Nt=0;Nt<T.mipmaps.length;Nt++)at.__webglFramebuffer[Nt]=o.createFramebuffer()}else at.__webglFramebuffer=o.createFramebuffer();if(Vt)for(let Nt=0,Kt=yt.length;Nt<Kt;Nt++){const jt=s.get(yt[Nt]);jt.__webglTexture===void 0&&(jt.__webglTexture=o.createTexture(),h.memory.textures++)}if(U.samples>0&&Ft(U)===!1){at.__webglMultisampledFramebuffer=o.createFramebuffer(),at.__webglColorRenderbuffer=[],i.bindFramebuffer(o.FRAMEBUFFER,at.__webglMultisampledFramebuffer);for(let Nt=0;Nt<yt.length;Nt++){const Kt=yt[Nt];at.__webglColorRenderbuffer[Nt]=o.createRenderbuffer(),o.bindRenderbuffer(o.RENDERBUFFER,at.__webglColorRenderbuffer[Nt]);const jt=f.convert(Kt.format,Kt.colorSpace),St=f.convert(Kt.type),Ct=L(Kt.internalFormat,jt,St,Kt.colorSpace,U.isXRRenderTarget===!0),ee=te(U);o.renderbufferStorageMultisample(o.RENDERBUFFER,ee,Ct,U.width,U.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Nt,o.RENDERBUFFER,at.__webglColorRenderbuffer[Nt])}o.bindRenderbuffer(o.RENDERBUFFER,null),U.depthBuffer&&(at.__webglDepthRenderbuffer=o.createRenderbuffer(),Pt(at.__webglDepthRenderbuffer,U,!0)),i.bindFramebuffer(o.FRAMEBUFFER,null)}}if(ft){i.bindTexture(o.TEXTURE_CUBE_MAP,xt.__webglTexture),he(o.TEXTURE_CUBE_MAP,T);for(let Nt=0;Nt<6;Nt++)if(T.mipmaps&&T.mipmaps.length>0)for(let Kt=0;Kt<T.mipmaps.length;Kt++)bt(at.__webglFramebuffer[Nt][Kt],U,T,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+Nt,Kt);else bt(at.__webglFramebuffer[Nt],U,T,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+Nt,0);S(T)&&v(o.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(Vt){for(let Nt=0,Kt=yt.length;Nt<Kt;Nt++){const jt=yt[Nt],St=s.get(jt);let Ct=o.TEXTURE_2D;(U.isWebGL3DRenderTarget||U.isWebGLArrayRenderTarget)&&(Ct=U.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),i.bindTexture(Ct,St.__webglTexture),he(Ct,jt),bt(at.__webglFramebuffer,U,jt,o.COLOR_ATTACHMENT0+Nt,Ct,0),S(jt)&&v(Ct)}i.unbindTexture()}else{let Nt=o.TEXTURE_2D;if((U.isWebGL3DRenderTarget||U.isWebGLArrayRenderTarget)&&(Nt=U.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),i.bindTexture(Nt,xt.__webglTexture),he(Nt,T),T.mipmaps&&T.mipmaps.length>0)for(let Kt=0;Kt<T.mipmaps.length;Kt++)bt(at.__webglFramebuffer[Kt],U,T,o.COLOR_ATTACHMENT0,Nt,Kt);else bt(at.__webglFramebuffer,U,T,o.COLOR_ATTACHMENT0,Nt,0);S(T)&&v(Nt),i.unbindTexture()}U.depthBuffer&&Mt(U)}function ke(U){const T=U.textures;for(let at=0,xt=T.length;at<xt;at++){const yt=T[at];if(S(yt)){const ft=N(U),Vt=s.get(yt).__webglTexture;i.bindTexture(ft,Vt),v(ft),i.unbindTexture()}}}const B=[],ce=[];function Jt(U){if(U.samples>0){if(Ft(U)===!1){const T=U.textures,at=U.width,xt=U.height;let yt=o.COLOR_BUFFER_BIT;const ft=U.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Vt=s.get(U),Nt=T.length>1;if(Nt)for(let jt=0;jt<T.length;jt++)i.bindFramebuffer(o.FRAMEBUFFER,Vt.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+jt,o.RENDERBUFFER,null),i.bindFramebuffer(o.FRAMEBUFFER,Vt.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+jt,o.TEXTURE_2D,null,0);i.bindFramebuffer(o.READ_FRAMEBUFFER,Vt.__webglMultisampledFramebuffer);const Kt=U.texture.mipmaps;Kt&&Kt.length>0?i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Vt.__webglFramebuffer[0]):i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Vt.__webglFramebuffer);for(let jt=0;jt<T.length;jt++){if(U.resolveDepthBuffer&&(U.depthBuffer&&(yt|=o.DEPTH_BUFFER_BIT),U.stencilBuffer&&U.resolveStencilBuffer&&(yt|=o.STENCIL_BUFFER_BIT)),Nt){o.framebufferRenderbuffer(o.READ_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.RENDERBUFFER,Vt.__webglColorRenderbuffer[jt]);const St=s.get(T[jt]).__webglTexture;o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,St,0)}o.blitFramebuffer(0,0,at,xt,0,0,at,xt,yt,o.NEAREST),x===!0&&(B.length=0,ce.length=0,B.push(o.COLOR_ATTACHMENT0+jt),U.depthBuffer&&U.resolveDepthBuffer===!1&&(B.push(ft),ce.push(ft),o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,ce)),o.invalidateFramebuffer(o.READ_FRAMEBUFFER,B))}if(i.bindFramebuffer(o.READ_FRAMEBUFFER,null),i.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),Nt)for(let jt=0;jt<T.length;jt++){i.bindFramebuffer(o.FRAMEBUFFER,Vt.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+jt,o.RENDERBUFFER,Vt.__webglColorRenderbuffer[jt]);const St=s.get(T[jt]).__webglTexture;i.bindFramebuffer(o.FRAMEBUFFER,Vt.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+jt,o.TEXTURE_2D,St,0)}i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Vt.__webglMultisampledFramebuffer)}else if(U.depthBuffer&&U.resolveDepthBuffer===!1&&x){const T=U.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,[T])}}}function te(U){return Math.min(l.maxSamples,U.samples)}function Ft(U){const T=s.get(U);return U.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function Fe(U){const T=h.render.frame;_.get(U)!==T&&(_.set(U,T),U.update())}function qt(U,T){const at=U.colorSpace,xt=U.format,yt=U.type;return U.isCompressedTexture===!0||U.isVideoTexture===!0||at!==uo&&at!==ms&&(Oe.getTransfer(at)===qe?(xt!==wi||yt!==na)&&oe("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):un("WebGLTextures: Unsupported texture color space:",at)),T}function se(U){return typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement?(m.width=U.naturalWidth||U.width,m.height=U.naturalHeight||U.height):typeof VideoFrame<"u"&&U instanceof VideoFrame?(m.width=U.displayWidth,m.height=U.displayHeight):(m.width=U.width,m.height=U.height),m}this.allocateTextureUnit=nt,this.resetTextureUnits=Q,this.setTexture2D=ot,this.setTexture2DArray=k,this.setTexture3D=ct,this.setTextureCube=$,this.rebindTextures=Gt,this.setupRenderTarget=le,this.updateRenderTargetMipmap=ke,this.updateMultisampleRenderTarget=Jt,this.setupDepthRenderbuffer=Mt,this.setupFrameBufferTexture=bt,this.useMultisampledRTT=Ft}function j2(o,e){function i(s,l=ms){let f;const h=Oe.getTransfer(l);if(s===na)return o.UNSIGNED_BYTE;if(s===t0)return o.UNSIGNED_SHORT_4_4_4_4;if(s===e0)return o.UNSIGNED_SHORT_5_5_5_1;if(s===Yv)return o.UNSIGNED_INT_5_9_9_9_REV;if(s===qv)return o.UNSIGNED_INT_10F_11F_11F_REV;if(s===Xv)return o.BYTE;if(s===kv)return o.SHORT;if(s===bl)return o.UNSIGNED_SHORT;if(s===$p)return o.INT;if(s===Js)return o.UNSIGNED_INT;if(s===$i)return o.FLOAT;if(s===po)return o.HALF_FLOAT;if(s===jv)return o.ALPHA;if(s===Wv)return o.RGB;if(s===wi)return o.RGBA;if(s===El)return o.DEPTH_COMPONENT;if(s===Tl)return o.DEPTH_STENCIL;if(s===Zv)return o.RED;if(s===n0)return o.RED_INTEGER;if(s===i0)return o.RG;if(s===a0)return o.RG_INTEGER;if(s===s0)return o.RGBA_INTEGER;if(s===wu||s===Du||s===Uu||s===Nu)if(h===qe)if(f=e.get("WEBGL_compressed_texture_s3tc_srgb"),f!==null){if(s===wu)return f.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Du)return f.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Uu)return f.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Nu)return f.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(f=e.get("WEBGL_compressed_texture_s3tc"),f!==null){if(s===wu)return f.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Du)return f.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Uu)return f.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Nu)return f.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===bp||s===Mp||s===Ep||s===Tp)if(f=e.get("WEBGL_compressed_texture_pvrtc"),f!==null){if(s===bp)return f.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Mp)return f.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Ep)return f.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Tp)return f.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===Ap||s===Rp||s===Cp)if(f=e.get("WEBGL_compressed_texture_etc"),f!==null){if(s===Ap||s===Rp)return h===qe?f.COMPRESSED_SRGB8_ETC2:f.COMPRESSED_RGB8_ETC2;if(s===Cp)return h===qe?f.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:f.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===wp||s===Dp||s===Up||s===Np||s===Lp||s===Op||s===Pp||s===zp||s===Ip||s===Fp||s===Bp||s===Hp||s===Gp||s===Vp)if(f=e.get("WEBGL_compressed_texture_astc"),f!==null){if(s===wp)return h===qe?f.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:f.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Dp)return h===qe?f.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:f.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Up)return h===qe?f.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:f.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Np)return h===qe?f.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:f.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Lp)return h===qe?f.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:f.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Op)return h===qe?f.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:f.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Pp)return h===qe?f.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:f.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===zp)return h===qe?f.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:f.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===Ip)return h===qe?f.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:f.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===Fp)return h===qe?f.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:f.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Bp)return h===qe?f.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:f.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Hp)return h===qe?f.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:f.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Gp)return h===qe?f.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:f.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Vp)return h===qe?f.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:f.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Xp||s===kp||s===Yp)if(f=e.get("EXT_texture_compression_bptc"),f!==null){if(s===Xp)return h===qe?f.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:f.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===kp)return f.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===Yp)return f.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===qp||s===jp||s===Wp||s===Zp)if(f=e.get("EXT_texture_compression_rgtc"),f!==null){if(s===qp)return f.COMPRESSED_RED_RGTC1_EXT;if(s===jp)return f.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===Wp)return f.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===Zp)return f.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===Ml?o.UNSIGNED_INT_24_8:o[s]!==void 0?o[s]:null}return{convert:i}}const W2=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Z2=`
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

}`;class K2{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,i){if(this.texture===null){const s=new cy(e.texture);(e.depthNear!==i.depthNear||e.depthFar!==i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){const i=e.cameras[0].viewport,s=new Na({vertexShader:W2,fragmentShader:Z2,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new mi(new Dl(20,20),s)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Q2 extends er{constructor(e,i){super();const s=this;let l=null,f=1,h=null,d="local-floor",x=1,m=null,_=null,p=null,y=null,b=null,E=null;const A=typeof XRWebGLBinding<"u",S=new K2,v={},N=i.getContextAttributes();let L=null,z=null;const G=[],D=[],O=new de;let X=null;const w=new Ri;w.viewport=new rn;const C=new Ri;C.viewport=new rn;const H=[w,C],Q=new d3;let nt=null,ht=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(et){let st=G[et];return st===void 0&&(st=new qd,G[et]=st),st.getTargetRaySpace()},this.getControllerGrip=function(et){let st=G[et];return st===void 0&&(st=new qd,G[et]=st),st.getGripSpace()},this.getHand=function(et){let st=G[et];return st===void 0&&(st=new qd,G[et]=st),st.getHandSpace()};function ot(et){const st=D.indexOf(et.inputSource);if(st===-1)return;const bt=G[st];bt!==void 0&&(bt.update(et.inputSource,et.frame,m||h),bt.dispatchEvent({type:et.type,data:et.inputSource}))}function k(){l.removeEventListener("select",ot),l.removeEventListener("selectstart",ot),l.removeEventListener("selectend",ot),l.removeEventListener("squeeze",ot),l.removeEventListener("squeezestart",ot),l.removeEventListener("squeezeend",ot),l.removeEventListener("end",k),l.removeEventListener("inputsourceschange",ct);for(let et=0;et<G.length;et++){const st=D[et];st!==null&&(D[et]=null,G[et].disconnect(st))}nt=null,ht=null,S.reset();for(const et in v)delete v[et];e.setRenderTarget(L),b=null,y=null,p=null,l=null,z=null,dt.stop(),s.isPresenting=!1,e.setPixelRatio(X),e.setSize(O.width,O.height,!1),s.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(et){f=et,s.isPresenting===!0&&oe("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(et){d=et,s.isPresenting===!0&&oe("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return m||h},this.setReferenceSpace=function(et){m=et},this.getBaseLayer=function(){return y!==null?y:b},this.getBinding=function(){return p===null&&A&&(p=new XRWebGLBinding(l,i)),p},this.getFrame=function(){return E},this.getSession=function(){return l},this.setSession=async function(et){if(l=et,l!==null){if(L=e.getRenderTarget(),l.addEventListener("select",ot),l.addEventListener("selectstart",ot),l.addEventListener("selectend",ot),l.addEventListener("squeeze",ot),l.addEventListener("squeezestart",ot),l.addEventListener("squeezeend",ot),l.addEventListener("end",k),l.addEventListener("inputsourceschange",ct),N.xrCompatible!==!0&&await i.makeXRCompatible(),X=e.getPixelRatio(),e.getSize(O),A&&"createProjectionLayer"in XRWebGLBinding.prototype){let bt=null,Pt=null,Rt=null;N.depth&&(Rt=N.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,bt=N.stencil?Tl:El,Pt=N.stencil?Ml:Js);const Mt={colorFormat:i.RGBA8,depthFormat:Rt,scaleFactor:f};p=this.getBinding(),y=p.createProjectionLayer(Mt),l.updateRenderState({layers:[y]}),e.setPixelRatio(1),e.setSize(y.textureWidth,y.textureHeight,!1),z=new tr(y.textureWidth,y.textureHeight,{format:wi,type:na,depthTexture:new ly(y.textureWidth,y.textureHeight,Pt,void 0,void 0,void 0,void 0,void 0,void 0,bt),stencilBuffer:N.stencil,colorSpace:e.outputColorSpace,samples:N.antialias?4:0,resolveDepthBuffer:y.ignoreDepthValues===!1,resolveStencilBuffer:y.ignoreDepthValues===!1})}else{const bt={antialias:N.antialias,alpha:!0,depth:N.depth,stencil:N.stencil,framebufferScaleFactor:f};b=new XRWebGLLayer(l,i,bt),l.updateRenderState({baseLayer:b}),e.setPixelRatio(1),e.setSize(b.framebufferWidth,b.framebufferHeight,!1),z=new tr(b.framebufferWidth,b.framebufferHeight,{format:wi,type:na,colorSpace:e.outputColorSpace,stencilBuffer:N.stencil,resolveDepthBuffer:b.ignoreDepthValues===!1,resolveStencilBuffer:b.ignoreDepthValues===!1})}z.isXRRenderTarget=!0,this.setFoveation(x),m=null,h=await l.requestReferenceSpace(d),dt.setContext(l),dt.start(),s.isPresenting=!0,s.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return S.getDepthTexture()};function ct(et){for(let st=0;st<et.removed.length;st++){const bt=et.removed[st],Pt=D.indexOf(bt);Pt>=0&&(D[Pt]=null,G[Pt].disconnect(bt))}for(let st=0;st<et.added.length;st++){const bt=et.added[st];let Pt=D.indexOf(bt);if(Pt===-1){for(let Mt=0;Mt<G.length;Mt++)if(Mt>=D.length){D.push(bt),Pt=Mt;break}else if(D[Mt]===null){D[Mt]=bt,Pt=Mt;break}if(Pt===-1)break}const Rt=G[Pt];Rt&&Rt.connect(bt)}}const $=new Z,_t=new Z;function vt(et,st,bt){$.setFromMatrixPosition(st.matrixWorld),_t.setFromMatrixPosition(bt.matrixWorld);const Pt=$.distanceTo(_t),Rt=st.projectionMatrix.elements,Mt=bt.projectionMatrix.elements,Gt=Rt[14]/(Rt[10]-1),le=Rt[14]/(Rt[10]+1),ke=(Rt[9]+1)/Rt[5],B=(Rt[9]-1)/Rt[5],ce=(Rt[8]-1)/Rt[0],Jt=(Mt[8]+1)/Mt[0],te=Gt*ce,Ft=Gt*Jt,Fe=Pt/(-ce+Jt),qt=Fe*-ce;if(st.matrixWorld.decompose(et.position,et.quaternion,et.scale),et.translateX(qt),et.translateZ(Fe),et.matrixWorld.compose(et.position,et.quaternion,et.scale),et.matrixWorldInverse.copy(et.matrixWorld).invert(),Rt[10]===-1)et.projectionMatrix.copy(st.projectionMatrix),et.projectionMatrixInverse.copy(st.projectionMatrixInverse);else{const se=Gt+Fe,U=le+Fe,T=te-qt,at=Ft+(Pt-qt),xt=ke*le/U*se,yt=B*le/U*se;et.projectionMatrix.makePerspective(T,at,xt,yt,se,U),et.projectionMatrixInverse.copy(et.projectionMatrix).invert()}}function Yt(et,st){st===null?et.matrixWorld.copy(et.matrix):et.matrixWorld.multiplyMatrices(st.matrixWorld,et.matrix),et.matrixWorldInverse.copy(et.matrixWorld).invert()}this.updateCamera=function(et){if(l===null)return;let st=et.near,bt=et.far;S.texture!==null&&(S.depthNear>0&&(st=S.depthNear),S.depthFar>0&&(bt=S.depthFar)),Q.near=C.near=w.near=st,Q.far=C.far=w.far=bt,(nt!==Q.near||ht!==Q.far)&&(l.updateRenderState({depthNear:Q.near,depthFar:Q.far}),nt=Q.near,ht=Q.far),Q.layers.mask=et.layers.mask|6,w.layers.mask=Q.layers.mask&3,C.layers.mask=Q.layers.mask&5;const Pt=et.parent,Rt=Q.cameras;Yt(Q,Pt);for(let Mt=0;Mt<Rt.length;Mt++)Yt(Rt[Mt],Pt);Rt.length===2?vt(Q,w,C):Q.projectionMatrix.copy(w.projectionMatrix),he(et,Q,Pt)};function he(et,st,bt){bt===null?et.matrix.copy(st.matrixWorld):(et.matrix.copy(bt.matrixWorld),et.matrix.invert(),et.matrix.multiply(st.matrixWorld)),et.matrix.decompose(et.position,et.quaternion,et.scale),et.updateMatrixWorld(!0),et.projectionMatrix.copy(st.projectionMatrix),et.projectionMatrixInverse.copy(st.projectionMatrixInverse),et.isPerspectiveCamera&&(et.fov=Rl*2*Math.atan(1/et.projectionMatrix.elements[5]),et.zoom=1)}this.getCamera=function(){return Q},this.getFoveation=function(){if(!(y===null&&b===null))return x},this.setFoveation=function(et){x=et,y!==null&&(y.fixedFoveation=et),b!==null&&b.fixedFoveation!==void 0&&(b.fixedFoveation=et)},this.hasDepthSensing=function(){return S.texture!==null},this.getDepthSensingMesh=function(){return S.getMesh(Q)},this.getCameraTexture=function(et){return v[et]};let Ae=null;function I(et,st){if(_=st.getViewerPose(m||h),E=st,_!==null){const bt=_.views;b!==null&&(e.setRenderTargetFramebuffer(z,b.framebuffer),e.setRenderTarget(z));let Pt=!1;bt.length!==Q.cameras.length&&(Q.cameras.length=0,Pt=!0);for(let le=0;le<bt.length;le++){const ke=bt[le];let B=null;if(b!==null)B=b.getViewport(ke);else{const Jt=p.getViewSubImage(y,ke);B=Jt.viewport,le===0&&(e.setRenderTargetTextures(z,Jt.colorTexture,Jt.depthStencilTexture),e.setRenderTarget(z))}let ce=H[le];ce===void 0&&(ce=new Ri,ce.layers.enable(le),ce.viewport=new rn,H[le]=ce),ce.matrix.fromArray(ke.transform.matrix),ce.matrix.decompose(ce.position,ce.quaternion,ce.scale),ce.projectionMatrix.fromArray(ke.projectionMatrix),ce.projectionMatrixInverse.copy(ce.projectionMatrix).invert(),ce.viewport.set(B.x,B.y,B.width,B.height),le===0&&(Q.matrix.copy(ce.matrix),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale)),Pt===!0&&Q.cameras.push(ce)}const Rt=l.enabledFeatures;if(Rt&&Rt.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&A){p=s.getBinding();const le=p.getDepthInformation(bt[0]);le&&le.isValid&&le.texture&&S.init(le,l.renderState)}if(Rt&&Rt.includes("camera-access")&&A){e.state.unbindTexture(),p=s.getBinding();for(let le=0;le<bt.length;le++){const ke=bt[le].camera;if(ke){let B=v[ke];B||(B=new cy,v[ke]=B);const ce=p.getCameraImage(ke);B.sourceTexture=ce}}}}for(let bt=0;bt<G.length;bt++){const Pt=D[bt],Rt=G[bt];Pt!==null&&Rt!==void 0&&Rt.update(Pt,st,m||h)}Ae&&Ae(et,st),st.detectedPlanes&&s.dispatchEvent({type:"planesdetected",data:st}),E=null}const dt=new dy;dt.setAnimationLoop(I),this.setAnimationLoop=function(et){Ae=et},this.dispose=function(){}}}const Ws=new ia,J2=new Xe;function $2(o,e){function i(S,v){S.matrixAutoUpdate===!0&&S.updateMatrix(),v.value.copy(S.matrix)}function s(S,v){v.color.getRGB(S.fogColor.value,ay(o)),v.isFog?(S.fogNear.value=v.near,S.fogFar.value=v.far):v.isFogExp2&&(S.fogDensity.value=v.density)}function l(S,v,N,L,z){v.isMeshBasicMaterial||v.isMeshLambertMaterial?f(S,v):v.isMeshToonMaterial?(f(S,v),p(S,v)):v.isMeshPhongMaterial?(f(S,v),_(S,v)):v.isMeshStandardMaterial?(f(S,v),y(S,v),v.isMeshPhysicalMaterial&&b(S,v,z)):v.isMeshMatcapMaterial?(f(S,v),E(S,v)):v.isMeshDepthMaterial?f(S,v):v.isMeshDistanceMaterial?(f(S,v),A(S,v)):v.isMeshNormalMaterial?f(S,v):v.isLineBasicMaterial?(h(S,v),v.isLineDashedMaterial&&d(S,v)):v.isPointsMaterial?x(S,v,N,L):v.isSpriteMaterial?m(S,v):v.isShadowMaterial?(S.color.value.copy(v.color),S.opacity.value=v.opacity):v.isShaderMaterial&&(v.uniformsNeedUpdate=!1)}function f(S,v){S.opacity.value=v.opacity,v.color&&S.diffuse.value.copy(v.color),v.emissive&&S.emissive.value.copy(v.emissive).multiplyScalar(v.emissiveIntensity),v.map&&(S.map.value=v.map,i(v.map,S.mapTransform)),v.alphaMap&&(S.alphaMap.value=v.alphaMap,i(v.alphaMap,S.alphaMapTransform)),v.bumpMap&&(S.bumpMap.value=v.bumpMap,i(v.bumpMap,S.bumpMapTransform),S.bumpScale.value=v.bumpScale,v.side===ni&&(S.bumpScale.value*=-1)),v.normalMap&&(S.normalMap.value=v.normalMap,i(v.normalMap,S.normalMapTransform),S.normalScale.value.copy(v.normalScale),v.side===ni&&S.normalScale.value.negate()),v.displacementMap&&(S.displacementMap.value=v.displacementMap,i(v.displacementMap,S.displacementMapTransform),S.displacementScale.value=v.displacementScale,S.displacementBias.value=v.displacementBias),v.emissiveMap&&(S.emissiveMap.value=v.emissiveMap,i(v.emissiveMap,S.emissiveMapTransform)),v.specularMap&&(S.specularMap.value=v.specularMap,i(v.specularMap,S.specularMapTransform)),v.alphaTest>0&&(S.alphaTest.value=v.alphaTest);const N=e.get(v),L=N.envMap,z=N.envMapRotation;L&&(S.envMap.value=L,Ws.copy(z),Ws.x*=-1,Ws.y*=-1,Ws.z*=-1,L.isCubeTexture&&L.isRenderTargetTexture===!1&&(Ws.y*=-1,Ws.z*=-1),S.envMapRotation.value.setFromMatrix4(J2.makeRotationFromEuler(Ws)),S.flipEnvMap.value=L.isCubeTexture&&L.isRenderTargetTexture===!1?-1:1,S.reflectivity.value=v.reflectivity,S.ior.value=v.ior,S.refractionRatio.value=v.refractionRatio),v.lightMap&&(S.lightMap.value=v.lightMap,S.lightMapIntensity.value=v.lightMapIntensity,i(v.lightMap,S.lightMapTransform)),v.aoMap&&(S.aoMap.value=v.aoMap,S.aoMapIntensity.value=v.aoMapIntensity,i(v.aoMap,S.aoMapTransform))}function h(S,v){S.diffuse.value.copy(v.color),S.opacity.value=v.opacity,v.map&&(S.map.value=v.map,i(v.map,S.mapTransform))}function d(S,v){S.dashSize.value=v.dashSize,S.totalSize.value=v.dashSize+v.gapSize,S.scale.value=v.scale}function x(S,v,N,L){S.diffuse.value.copy(v.color),S.opacity.value=v.opacity,S.size.value=v.size*N,S.scale.value=L*.5,v.map&&(S.map.value=v.map,i(v.map,S.uvTransform)),v.alphaMap&&(S.alphaMap.value=v.alphaMap,i(v.alphaMap,S.alphaMapTransform)),v.alphaTest>0&&(S.alphaTest.value=v.alphaTest)}function m(S,v){S.diffuse.value.copy(v.color),S.opacity.value=v.opacity,S.rotation.value=v.rotation,v.map&&(S.map.value=v.map,i(v.map,S.mapTransform)),v.alphaMap&&(S.alphaMap.value=v.alphaMap,i(v.alphaMap,S.alphaMapTransform)),v.alphaTest>0&&(S.alphaTest.value=v.alphaTest)}function _(S,v){S.specular.value.copy(v.specular),S.shininess.value=Math.max(v.shininess,1e-4)}function p(S,v){v.gradientMap&&(S.gradientMap.value=v.gradientMap)}function y(S,v){S.metalness.value=v.metalness,v.metalnessMap&&(S.metalnessMap.value=v.metalnessMap,i(v.metalnessMap,S.metalnessMapTransform)),S.roughness.value=v.roughness,v.roughnessMap&&(S.roughnessMap.value=v.roughnessMap,i(v.roughnessMap,S.roughnessMapTransform)),v.envMap&&(S.envMapIntensity.value=v.envMapIntensity)}function b(S,v,N){S.ior.value=v.ior,v.sheen>0&&(S.sheenColor.value.copy(v.sheenColor).multiplyScalar(v.sheen),S.sheenRoughness.value=v.sheenRoughness,v.sheenColorMap&&(S.sheenColorMap.value=v.sheenColorMap,i(v.sheenColorMap,S.sheenColorMapTransform)),v.sheenRoughnessMap&&(S.sheenRoughnessMap.value=v.sheenRoughnessMap,i(v.sheenRoughnessMap,S.sheenRoughnessMapTransform))),v.clearcoat>0&&(S.clearcoat.value=v.clearcoat,S.clearcoatRoughness.value=v.clearcoatRoughness,v.clearcoatMap&&(S.clearcoatMap.value=v.clearcoatMap,i(v.clearcoatMap,S.clearcoatMapTransform)),v.clearcoatRoughnessMap&&(S.clearcoatRoughnessMap.value=v.clearcoatRoughnessMap,i(v.clearcoatRoughnessMap,S.clearcoatRoughnessMapTransform)),v.clearcoatNormalMap&&(S.clearcoatNormalMap.value=v.clearcoatNormalMap,i(v.clearcoatNormalMap,S.clearcoatNormalMapTransform),S.clearcoatNormalScale.value.copy(v.clearcoatNormalScale),v.side===ni&&S.clearcoatNormalScale.value.negate())),v.dispersion>0&&(S.dispersion.value=v.dispersion),v.iridescence>0&&(S.iridescence.value=v.iridescence,S.iridescenceIOR.value=v.iridescenceIOR,S.iridescenceThicknessMinimum.value=v.iridescenceThicknessRange[0],S.iridescenceThicknessMaximum.value=v.iridescenceThicknessRange[1],v.iridescenceMap&&(S.iridescenceMap.value=v.iridescenceMap,i(v.iridescenceMap,S.iridescenceMapTransform)),v.iridescenceThicknessMap&&(S.iridescenceThicknessMap.value=v.iridescenceThicknessMap,i(v.iridescenceThicknessMap,S.iridescenceThicknessMapTransform))),v.transmission>0&&(S.transmission.value=v.transmission,S.transmissionSamplerMap.value=N.texture,S.transmissionSamplerSize.value.set(N.width,N.height),v.transmissionMap&&(S.transmissionMap.value=v.transmissionMap,i(v.transmissionMap,S.transmissionMapTransform)),S.thickness.value=v.thickness,v.thicknessMap&&(S.thicknessMap.value=v.thicknessMap,i(v.thicknessMap,S.thicknessMapTransform)),S.attenuationDistance.value=v.attenuationDistance,S.attenuationColor.value.copy(v.attenuationColor)),v.anisotropy>0&&(S.anisotropyVector.value.set(v.anisotropy*Math.cos(v.anisotropyRotation),v.anisotropy*Math.sin(v.anisotropyRotation)),v.anisotropyMap&&(S.anisotropyMap.value=v.anisotropyMap,i(v.anisotropyMap,S.anisotropyMapTransform))),S.specularIntensity.value=v.specularIntensity,S.specularColor.value.copy(v.specularColor),v.specularColorMap&&(S.specularColorMap.value=v.specularColorMap,i(v.specularColorMap,S.specularColorMapTransform)),v.specularIntensityMap&&(S.specularIntensityMap.value=v.specularIntensityMap,i(v.specularIntensityMap,S.specularIntensityMapTransform))}function E(S,v){v.matcap&&(S.matcap.value=v.matcap)}function A(S,v){const N=e.get(v).light;S.referencePosition.value.setFromMatrixPosition(N.matrixWorld),S.nearDistance.value=N.shadow.camera.near,S.farDistance.value=N.shadow.camera.far}return{refreshFogUniforms:s,refreshMaterialUniforms:l}}function tR(o,e,i,s){let l={},f={},h=[];const d=o.getParameter(o.MAX_UNIFORM_BUFFER_BINDINGS);function x(N,L){const z=L.program;s.uniformBlockBinding(N,z)}function m(N,L){let z=l[N.id];z===void 0&&(E(N),z=_(N),l[N.id]=z,N.addEventListener("dispose",S));const G=L.program;s.updateUBOMapping(N,G);const D=e.render.frame;f[N.id]!==D&&(y(N),f[N.id]=D)}function _(N){const L=p();N.__bindingPointIndex=L;const z=o.createBuffer(),G=N.__size,D=N.usage;return o.bindBuffer(o.UNIFORM_BUFFER,z),o.bufferData(o.UNIFORM_BUFFER,G,D),o.bindBuffer(o.UNIFORM_BUFFER,null),o.bindBufferBase(o.UNIFORM_BUFFER,L,z),z}function p(){for(let N=0;N<d;N++)if(h.indexOf(N)===-1)return h.push(N),N;return un("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function y(N){const L=l[N.id],z=N.uniforms,G=N.__cache;o.bindBuffer(o.UNIFORM_BUFFER,L);for(let D=0,O=z.length;D<O;D++){const X=Array.isArray(z[D])?z[D]:[z[D]];for(let w=0,C=X.length;w<C;w++){const H=X[w];if(b(H,D,w,G)===!0){const Q=H.__offset,nt=Array.isArray(H.value)?H.value:[H.value];let ht=0;for(let ot=0;ot<nt.length;ot++){const k=nt[ot],ct=A(k);typeof k=="number"||typeof k=="boolean"?(H.__data[0]=k,o.bufferSubData(o.UNIFORM_BUFFER,Q+ht,H.__data)):k.isMatrix3?(H.__data[0]=k.elements[0],H.__data[1]=k.elements[1],H.__data[2]=k.elements[2],H.__data[3]=0,H.__data[4]=k.elements[3],H.__data[5]=k.elements[4],H.__data[6]=k.elements[5],H.__data[7]=0,H.__data[8]=k.elements[6],H.__data[9]=k.elements[7],H.__data[10]=k.elements[8],H.__data[11]=0):(k.toArray(H.__data,ht),ht+=ct.storage/Float32Array.BYTES_PER_ELEMENT)}o.bufferSubData(o.UNIFORM_BUFFER,Q,H.__data)}}}o.bindBuffer(o.UNIFORM_BUFFER,null)}function b(N,L,z,G){const D=N.value,O=L+"_"+z;if(G[O]===void 0)return typeof D=="number"||typeof D=="boolean"?G[O]=D:G[O]=D.clone(),!0;{const X=G[O];if(typeof D=="number"||typeof D=="boolean"){if(X!==D)return G[O]=D,!0}else if(X.equals(D)===!1)return X.copy(D),!0}return!1}function E(N){const L=N.uniforms;let z=0;const G=16;for(let O=0,X=L.length;O<X;O++){const w=Array.isArray(L[O])?L[O]:[L[O]];for(let C=0,H=w.length;C<H;C++){const Q=w[C],nt=Array.isArray(Q.value)?Q.value:[Q.value];for(let ht=0,ot=nt.length;ht<ot;ht++){const k=nt[ht],ct=A(k),$=z%G,_t=$%ct.boundary,vt=$+_t;z+=_t,vt!==0&&G-vt<ct.storage&&(z+=G-vt),Q.__data=new Float32Array(ct.storage/Float32Array.BYTES_PER_ELEMENT),Q.__offset=z,z+=ct.storage}}}const D=z%G;return D>0&&(z+=G-D),N.__size=z,N.__cache={},this}function A(N){const L={boundary:0,storage:0};return typeof N=="number"||typeof N=="boolean"?(L.boundary=4,L.storage=4):N.isVector2?(L.boundary=8,L.storage=8):N.isVector3||N.isColor?(L.boundary=16,L.storage=12):N.isVector4?(L.boundary=16,L.storage=16):N.isMatrix3?(L.boundary=48,L.storage=48):N.isMatrix4?(L.boundary=64,L.storage=64):N.isTexture?oe("WebGLRenderer: Texture samplers can not be part of an uniforms group."):oe("WebGLRenderer: Unsupported uniform value type.",N),L}function S(N){const L=N.target;L.removeEventListener("dispose",S);const z=h.indexOf(L.__bindingPointIndex);h.splice(z,1),o.deleteBuffer(l[L.id]),delete l[L.id],delete f[L.id]}function v(){for(const N in l)o.deleteBuffer(l[N]);h=[],l={},f={}}return{bind:x,update:m,dispose:v}}const eR=new Uint16Array([11481,15204,11534,15171,11808,15015,12385,14843,12894,14716,13396,14600,13693,14483,13976,14366,14237,14171,14405,13961,14511,13770,14605,13598,14687,13444,14760,13305,14822,13066,14876,12857,14923,12675,14963,12517,14997,12379,15025,12230,15049,12023,15070,11843,15086,11687,15100,11551,15111,11433,15120,11330,15127,11217,15132,11060,15135,10922,15138,10801,15139,10695,15139,10600,13012,14923,13020,14917,13064,14886,13176,14800,13349,14666,13513,14526,13724,14398,13960,14230,14200,14020,14383,13827,14488,13651,14583,13491,14667,13348,14740,13132,14803,12908,14856,12713,14901,12542,14938,12394,14968,12241,14992,12017,15010,11822,15024,11654,15034,11507,15041,11380,15044,11269,15044,11081,15042,10913,15037,10764,15031,10635,15023,10520,15014,10419,15003,10330,13657,14676,13658,14673,13670,14660,13698,14622,13750,14547,13834,14442,13956,14317,14112,14093,14291,13889,14407,13704,14499,13538,14586,13389,14664,13201,14733,12966,14792,12758,14842,12577,14882,12418,14915,12272,14940,12033,14959,11826,14972,11646,14980,11490,14983,11355,14983,11212,14979,11008,14971,10830,14961,10675,14950,10540,14936,10420,14923,10315,14909,10204,14894,10041,14089,14460,14090,14459,14096,14452,14112,14431,14141,14388,14186,14305,14252,14130,14341,13941,14399,13756,14467,13585,14539,13430,14610,13272,14677,13026,14737,12808,14790,12617,14833,12449,14869,12303,14896,12065,14916,11845,14929,11655,14937,11490,14939,11347,14936,11184,14930,10970,14921,10783,14912,10621,14900,10480,14885,10356,14867,10247,14848,10062,14827,9894,14805,9745,14400,14208,14400,14206,14402,14198,14406,14174,14415,14122,14427,14035,14444,13913,14469,13767,14504,13613,14548,13463,14598,13324,14651,13082,14704,12858,14752,12658,14795,12483,14831,12330,14860,12106,14881,11875,14895,11675,14903,11501,14905,11351,14903,11178,14900,10953,14892,10757,14880,10589,14865,10442,14847,10313,14827,10162,14805,9965,14782,9792,14757,9642,14731,9507,14562,13883,14562,13883,14563,13877,14566,13862,14570,13830,14576,13773,14584,13689,14595,13582,14613,13461,14637,13336,14668,13120,14704,12897,14741,12695,14776,12516,14808,12358,14835,12150,14856,11910,14870,11701,14878,11519,14882,11361,14884,11187,14880,10951,14871,10748,14858,10572,14842,10418,14823,10286,14801,10099,14777,9897,14751,9722,14725,9567,14696,9430,14666,9309,14702,13604,14702,13604,14702,13600,14703,13591,14705,13570,14707,13533,14709,13477,14712,13400,14718,13305,14727,13106,14743,12907,14762,12716,14784,12539,14807,12380,14827,12190,14844,11943,14855,11727,14863,11539,14870,11376,14871,11204,14868,10960,14858,10748,14845,10565,14829,10406,14809,10269,14786,10058,14761,9852,14734,9671,14705,9512,14674,9374,14641,9253,14608,9076,14821,13366,14821,13365,14821,13364,14821,13358,14821,13344,14821,13320,14819,13252,14817,13145,14815,13011,14814,12858,14817,12698,14823,12539,14832,12389,14841,12214,14850,11968,14856,11750,14861,11558,14866,11390,14867,11226,14862,10972,14853,10754,14840,10565,14823,10401,14803,10259,14780,10032,14754,9820,14725,9635,14694,9473,14661,9333,14627,9203,14593,8988,14557,8798,14923,13014,14922,13014,14922,13012,14922,13004,14920,12987,14919,12957,14915,12907,14909,12834,14902,12738,14894,12623,14888,12498,14883,12370,14880,12203,14878,11970,14875,11759,14873,11569,14874,11401,14872,11243,14865,10986,14855,10762,14842,10568,14825,10401,14804,10255,14781,10017,14754,9799,14725,9611,14692,9445,14658,9301,14623,9139,14587,8920,14548,8729,14509,8562,15008,12672,15008,12672,15008,12671,15007,12667,15005,12656,15001,12637,14997,12605,14989,12556,14978,12490,14966,12407,14953,12313,14940,12136,14927,11934,14914,11742,14903,11563,14896,11401,14889,11247,14879,10992,14866,10767,14851,10570,14833,10400,14812,10252,14789,10007,14761,9784,14731,9592,14698,9424,14663,9279,14627,9088,14588,8868,14548,8676,14508,8508,14467,8360,15080,12386,15080,12386,15079,12385,15078,12383,15076,12378,15072,12367,15066,12347,15057,12315,15045,12253,15030,12138,15012,11998,14993,11845,14972,11685,14951,11530,14935,11383,14920,11228,14904,10981,14887,10762,14870,10567,14850,10397,14827,10248,14803,9997,14774,9771,14743,9578,14710,9407,14674,9259,14637,9048,14596,8826,14555,8632,14514,8464,14471,8317,14427,8182,15139,12008,15139,12008,15138,12008,15137,12007,15135,12003,15130,11990,15124,11969,15115,11929,15102,11872,15086,11794,15064,11693,15041,11581,15013,11459,14987,11336,14966,11170,14944,10944,14921,10738,14898,10552,14875,10387,14850,10239,14824,9983,14794,9758,14762,9563,14728,9392,14692,9244,14653,9014,14611,8791,14569,8597,14526,8427,14481,8281,14436,8110,14391,7885,15188,11617,15188,11617,15187,11617,15186,11618,15183,11617,15179,11612,15173,11601,15163,11581,15150,11546,15133,11495,15110,11427,15083,11346,15051,11246,15024,11057,14996,10868,14967,10687,14938,10517,14911,10362,14882,10206,14853,9956,14821,9737,14787,9543,14752,9375,14715,9228,14675,8980,14632,8760,14589,8565,14544,8395,14498,8248,14451,8049,14404,7824,14357,7630,15228,11298,15228,11298,15227,11299,15226,11301,15223,11303,15219,11302,15213,11299,15204,11290,15191,11271,15174,11217,15150,11129,15119,11015,15087,10886,15057,10744,15024,10599,14990,10455,14957,10318,14924,10143,14891,9911,14856,9701,14820,9516,14782,9352,14744,9200,14703,8946,14659,8725,14615,8533,14568,8366,14521,8220,14472,7992,14423,7770,14374,7578,14315,7408,15260,10819,15260,10819,15259,10822,15258,10826,15256,10832,15251,10836,15246,10841,15237,10838,15225,10821,15207,10788,15183,10734,15151,10660,15120,10571,15087,10469,15049,10359,15012,10249,14974,10041,14937,9837,14900,9647,14860,9475,14820,9320,14779,9147,14736,8902,14691,8688,14646,8499,14598,8335,14549,8189,14499,7940,14448,7720,14397,7529,14347,7363,14256,7218,15285,10410,15285,10411,15285,10413,15284,10418,15282,10425,15278,10434,15272,10442,15264,10449,15252,10445,15235,10433,15210,10403,15179,10358,15149,10301,15113,10218,15073,10059,15033,9894,14991,9726,14951,9565,14909,9413,14865,9273,14822,9073,14777,8845,14730,8641,14682,8459,14633,8300,14583,8129,14531,7883,14479,7670,14426,7482,14373,7321,14305,7176,14201,6939,15305,9939,15305,9940,15305,9945,15304,9955,15302,9967,15298,9989,15293,10010,15286,10033,15274,10044,15258,10045,15233,10022,15205,9975,15174,9903,15136,9808,15095,9697,15053,9578,15009,9451,14965,9327,14918,9198,14871,8973,14825,8766,14775,8579,14725,8408,14675,8259,14622,8058,14569,7821,14515,7615,14460,7435,14405,7276,14350,7108,14256,6866,14149,6653,15321,9444,15321,9445,15321,9448,15320,9458,15317,9470,15314,9490,15310,9515,15302,9540,15292,9562,15276,9579,15251,9577,15226,9559,15195,9519,15156,9463,15116,9389,15071,9304,15025,9208,14978,9023,14927,8838,14878,8661,14827,8496,14774,8344,14722,8206,14667,7973,14612,7749,14556,7555,14499,7382,14443,7229,14385,7025,14322,6791,14210,6588,14100,6409,15333,8920,15333,8921,15332,8927,15332,8943,15329,8965,15326,9002,15322,9048,15316,9106,15307,9162,15291,9204,15267,9221,15244,9221,15212,9196,15175,9134,15133,9043,15088,8930,15040,8801,14990,8665,14938,8526,14886,8391,14830,8261,14775,8087,14719,7866,14661,7664,14603,7482,14544,7322,14485,7178,14426,6936,14367,6713,14281,6517,14166,6348,14054,6198,15341,8360,15341,8361,15341,8366,15341,8379,15339,8399,15336,8431,15332,8473,15326,8527,15318,8585,15302,8632,15281,8670,15258,8690,15227,8690,15191,8664,15149,8612,15104,8543,15055,8456,15001,8360,14948,8259,14892,8122,14834,7923,14776,7734,14716,7558,14656,7397,14595,7250,14534,7070,14472,6835,14410,6628,14350,6443,14243,6283,14125,6135,14010,5889,15348,7715,15348,7717,15348,7725,15347,7745,15345,7780,15343,7836,15339,7905,15334,8e3,15326,8103,15310,8193,15293,8239,15270,8270,15240,8287,15204,8283,15163,8260,15118,8223,15067,8143,15014,8014,14958,7873,14899,7723,14839,7573,14778,7430,14715,7293,14652,7164,14588,6931,14524,6720,14460,6531,14396,6362,14330,6210,14207,6015,14086,5781,13969,5576,15352,7114,15352,7116,15352,7128,15352,7159,15350,7195,15348,7237,15345,7299,15340,7374,15332,7457,15317,7544,15301,7633,15280,7703,15251,7754,15216,7775,15176,7767,15131,7733,15079,7670,15026,7588,14967,7492,14906,7387,14844,7278,14779,7171,14714,6965,14648,6770,14581,6587,14515,6420,14448,6269,14382,6123,14299,5881,14172,5665,14049,5477,13929,5310,15355,6329,15355,6330,15355,6339,15355,6362,15353,6410,15351,6472,15349,6572,15344,6688,15337,6835,15323,6985,15309,7142,15287,7220,15260,7277,15226,7310,15188,7326,15142,7318,15090,7285,15036,7239,14976,7177,14914,7045,14849,6892,14782,6736,14714,6581,14645,6433,14576,6293,14506,6164,14438,5946,14369,5733,14270,5540,14140,5369,14014,5216,13892,5043,15357,5483,15357,5484,15357,5496,15357,5528,15356,5597,15354,5692,15351,5835,15347,6011,15339,6195,15328,6317,15314,6446,15293,6566,15268,6668,15235,6746,15197,6796,15152,6811,15101,6790,15046,6748,14985,6673,14921,6583,14854,6479,14785,6371,14714,6259,14643,6149,14571,5946,14499,5750,14428,5567,14358,5401,14242,5250,14109,5111,13980,4870,13856,4657,15359,4555,15359,4557,15358,4573,15358,4633,15357,4715,15355,4841,15353,5061,15349,5216,15342,5391,15331,5577,15318,5770,15299,5967,15274,6150,15243,6223,15206,6280,15161,6310,15111,6317,15055,6300,14994,6262,14928,6208,14860,6141,14788,5994,14715,5838,14641,5684,14566,5529,14492,5384,14418,5247,14346,5121,14216,4892,14079,4682,13948,4496,13822,4330,15359,3498,15359,3501,15359,3520,15359,3598,15358,3719,15356,3860,15355,4137,15351,4305,15344,4563,15334,4809,15321,5116,15303,5273,15280,5418,15250,5547,15214,5653,15170,5722,15120,5761,15064,5763,15002,5733,14935,5673,14865,5597,14792,5504,14716,5400,14640,5294,14563,5185,14486,5041,14410,4841,14335,4655,14191,4482,14051,4325,13918,4183,13790,4012,15360,2282,15360,2285,15360,2306,15360,2401,15359,2547,15357,2748,15355,3103,15352,3349,15345,3675,15336,4020,15324,4272,15307,4496,15285,4716,15255,4908,15220,5086,15178,5170,15128,5214,15072,5234,15010,5231,14943,5206,14871,5166,14796,5102,14718,4971,14639,4833,14559,4687,14480,4541,14402,4401,14315,4268,14167,4142,14025,3958,13888,3747,13759,3556,15360,923,15360,925,15360,946,15360,1052,15359,1214,15357,1494,15356,1892,15352,2274,15346,2663,15338,3099,15326,3393,15309,3679,15288,3980,15260,4183,15226,4325,15185,4437,15136,4517,15080,4570,15018,4591,14950,4581,14877,4545,14800,4485,14720,4411,14638,4325,14556,4231,14475,4136,14395,3988,14297,3803,14145,3628,13999,3465,13861,3314,13729,3177,15360,263,15360,264,15360,272,15360,325,15359,407,15358,548,15356,780,15352,1144,15347,1580,15339,2099,15328,2425,15312,2795,15292,3133,15264,3329,15232,3517,15191,3689,15143,3819,15088,3923,15025,3978,14956,3999,14882,3979,14804,3931,14722,3855,14639,3756,14554,3645,14470,3529,14388,3409,14279,3289,14124,3173,13975,3055,13834,2848,13701,2658,15360,49,15360,49,15360,52,15360,75,15359,111,15358,201,15356,283,15353,519,15348,726,15340,1045,15329,1415,15314,1795,15295,2173,15269,2410,15237,2649,15197,2866,15150,3054,15095,3140,15032,3196,14963,3228,14888,3236,14808,3224,14725,3191,14639,3146,14553,3088,14466,2976,14382,2836,14262,2692,14103,2549,13952,2409,13808,2278,13674,2154,15360,4,15360,4,15360,4,15360,13,15359,33,15358,59,15357,112,15353,199,15348,302,15341,456,15331,628,15316,827,15297,1082,15272,1332,15241,1601,15202,1851,15156,2069,15101,2172,15039,2256,14970,2314,14894,2348,14813,2358,14728,2344,14640,2311,14551,2263,14463,2203,14376,2133,14247,2059,14084,1915,13930,1761,13784,1609,13648,1464,15360,0,15360,0,15360,0,15360,3,15359,18,15358,26,15357,53,15354,80,15348,97,15341,165,15332,238,15318,326,15299,427,15275,529,15245,654,15207,771,15161,885,15108,994,15046,1089,14976,1170,14900,1229,14817,1266,14731,1284,14641,1282,14550,1260,14460,1223,14370,1174,14232,1116,14066,1050,13909,981,13761,910,13623,839]);let Aa=null;function nR(){return Aa===null&&(Aa=new oy(eR,32,32,i0,po),Aa.minFilter=Ci,Aa.magFilter=Ci,Aa.wrapS=wa,Aa.wrapT=wa,Aa.generateMipmaps=!1,Aa.needsUpdate=!0),Aa}class iR{constructor(e={}){const{canvas:i=p1(),context:s=null,depth:l=!0,stencil:f=!1,alpha:h=!1,antialias:d=!1,premultipliedAlpha:x=!0,preserveDrawingBuffer:m=!1,powerPreference:_="default",failIfMajorPerformanceCaveat:p=!1,reversedDepthBuffer:y=!1}=e;this.isWebGLRenderer=!0;let b;if(s!==null){if(typeof WebGLRenderingContext<"u"&&s instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");b=s.getContextAttributes().alpha}else b=h;const E=new Set([s0,a0,n0]),A=new Set([na,Js,bl,Ml,t0,e0]),S=new Uint32Array(4),v=new Int32Array(4);let N=null,L=null;const z=[],G=[];this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=gs,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const D=this;let O=!1;this._outputColorSpace=di;let X=0,w=0,C=null,H=-1,Q=null;const nt=new rn,ht=new rn;let ot=null;const k=new Me(0);let ct=0,$=i.width,_t=i.height,vt=1,Yt=null,he=null;const Ae=new rn(0,0,$,_t),I=new rn(0,0,$,_t);let dt=!1;const et=new f0;let st=!1,bt=!1;const Pt=new Xe,Rt=new Z,Mt=new rn,Gt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let le=!1;function ke(){return C===null?vt:1}let B=s;function ce(R,W){return i.getContext(R,W)}try{const R={alpha:!0,depth:l,stencil:f,antialias:d,premultipliedAlpha:x,preserveDrawingBuffer:m,powerPreference:_,failIfMajorPerformanceCaveat:p};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${Jp}`),i.addEventListener("webglcontextlost",Et,!1),i.addEventListener("webglcontextrestored",gt,!1),i.addEventListener("webglcontextcreationerror",Xt,!1),B===null){const W="webgl2";if(B=ce(W,R),B===null)throw ce(W)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(R){throw R("WebGLRenderer: "+R.message),R}let Jt,te,Ft,Fe,qt,se,U,T,at,xt,yt,ft,Vt,Nt,Kt,jt,St,Ct,ee,$t,Bt,re,F,Lt;function wt(){Jt=new fA(B),Jt.init(),re=new j2(B,Jt),te=new nA(B,Jt,e,re),Ft=new Y2(B,Jt),te.reversedDepthBuffer&&y&&Ft.buffers.depth.setReversed(!0),Fe=new pA(B),qt=new N2,se=new q2(B,Jt,Ft,qt,te,re,Fe),U=new aA(D),T=new uA(D),at=new _3(B),F=new tA(B,at),xt=new hA(B,at,Fe,F),yt=new xA(B,xt,at,Fe),ee=new mA(B,te,se),jt=new iA(qt),ft=new U2(D,U,T,Jt,te,F,jt),Vt=new $2(D,qt),Nt=new O2,Kt=new H2(Jt),Ct=new $T(D,U,T,Ft,yt,b,x),St=new X2(D,yt,te),Lt=new tR(B,Fe,te,Ft),$t=new eA(B,Jt,Fe),Bt=new dA(B,Jt,Fe),Fe.programs=ft.programs,D.capabilities=te,D.extensions=Jt,D.properties=qt,D.renderLists=Nt,D.shadowMap=St,D.state=Ft,D.info=Fe}wt();const Dt=new Q2(D,B);this.xr=Dt,this.getContext=function(){return B},this.getContextAttributes=function(){return B.getContextAttributes()},this.forceContextLoss=function(){const R=Jt.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=Jt.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return vt},this.setPixelRatio=function(R){R!==void 0&&(vt=R,this.setSize($,_t,!1))},this.getSize=function(R){return R.set($,_t)},this.setSize=function(R,W,lt=!0){if(Dt.isPresenting){oe("WebGLRenderer: Can't change size while VR device is presenting.");return}$=R,_t=W,i.width=Math.floor(R*vt),i.height=Math.floor(W*vt),lt===!0&&(i.style.width=R+"px",i.style.height=W+"px"),this.setViewport(0,0,R,W)},this.getDrawingBufferSize=function(R){return R.set($*vt,_t*vt).floor()},this.setDrawingBufferSize=function(R,W,lt){$=R,_t=W,vt=lt,i.width=Math.floor(R*lt),i.height=Math.floor(W*lt),this.setViewport(0,0,R,W)},this.getCurrentViewport=function(R){return R.copy(nt)},this.getViewport=function(R){return R.copy(Ae)},this.setViewport=function(R,W,lt,ut){R.isVector4?Ae.set(R.x,R.y,R.z,R.w):Ae.set(R,W,lt,ut),Ft.viewport(nt.copy(Ae).multiplyScalar(vt).round())},this.getScissor=function(R){return R.copy(I)},this.setScissor=function(R,W,lt,ut){R.isVector4?I.set(R.x,R.y,R.z,R.w):I.set(R,W,lt,ut),Ft.scissor(ht.copy(I).multiplyScalar(vt).round())},this.getScissorTest=function(){return dt},this.setScissorTest=function(R){Ft.setScissorTest(dt=R)},this.setOpaqueSort=function(R){Yt=R},this.setTransparentSort=function(R){he=R},this.getClearColor=function(R){return R.copy(Ct.getClearColor())},this.setClearColor=function(){Ct.setClearColor(...arguments)},this.getClearAlpha=function(){return Ct.getClearAlpha()},this.setClearAlpha=function(){Ct.setClearAlpha(...arguments)},this.clear=function(R=!0,W=!0,lt=!0){let ut=0;if(R){let J=!1;if(C!==null){const Tt=C.texture.format;J=E.has(Tt)}if(J){const Tt=C.texture.type,At=A.has(Tt),Ot=Ct.getClearColor(),It=Ct.getClearAlpha(),ne=Ot.r,ae=Ot.g,Qt=Ot.b;At?(S[0]=ne,S[1]=ae,S[2]=Qt,S[3]=It,B.clearBufferuiv(B.COLOR,0,S)):(v[0]=ne,v[1]=ae,v[2]=Qt,v[3]=It,B.clearBufferiv(B.COLOR,0,v))}else ut|=B.COLOR_BUFFER_BIT}W&&(ut|=B.DEPTH_BUFFER_BIT),lt&&(ut|=B.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),B.clear(ut)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){i.removeEventListener("webglcontextlost",Et,!1),i.removeEventListener("webglcontextrestored",gt,!1),i.removeEventListener("webglcontextcreationerror",Xt,!1),Ct.dispose(),Nt.dispose(),Kt.dispose(),qt.dispose(),U.dispose(),T.dispose(),yt.dispose(),F.dispose(),Lt.dispose(),ft.dispose(),Dt.dispose(),Dt.removeEventListener("sessionstart",Ul),Dt.removeEventListener("sessionend",Nl),sa.stop()};function Et(R){R.preventDefault(),B_("WebGLRenderer: Context Lost."),O=!0}function gt(){B_("WebGLRenderer: Context Restored."),O=!1;const R=Fe.autoReset,W=St.enabled,lt=St.autoUpdate,ut=St.needsUpdate,J=St.type;wt(),Fe.autoReset=R,St.enabled=W,St.autoUpdate=lt,St.needsUpdate=ut,St.type=J}function Xt(R){un("WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function ue(R){const W=R.target;W.removeEventListener("dispose",ue),We(W)}function We(R){De(R),qt.remove(R)}function De(R){const W=qt.get(R).programs;W!==void 0&&(W.forEach(function(lt){ft.releaseProgram(lt)}),R.isShaderMaterial&&ft.releaseShaderCache(R))}this.renderBufferDirect=function(R,W,lt,ut,J,Tt){W===null&&(W=Gt);const At=J.isMesh&&J.matrixWorld.determinant()<0,Ot=Ol(R,W,lt,ut,J);Ft.setMaterial(ut,At);let It=lt.index,ne=1;if(ut.wireframe===!0){if(It=xt.getWireframeAttribute(lt),It===void 0)return;ne=2}const ae=lt.drawRange,Qt=lt.attributes.position;let ve=ae.start*ne,Ue=(ae.start+ae.count)*ne;Tt!==null&&(ve=Math.max(ve,Tt.start*ne),Ue=Math.min(Ue,(Tt.start+Tt.count)*ne)),It!==null?(ve=Math.max(ve,0),Ue=Math.min(Ue,It.count)):Qt!=null&&(ve=Math.max(ve,0),Ue=Math.min(Ue,Qt.count));const Ze=Ue-ve;if(Ze<0||Ze===1/0)return;F.setup(J,ut,Ot,lt,It);let Ke,we=$t;if(It!==null&&(Ke=at.get(It),we=Bt,we.setIndex(Ke)),J.isMesh)ut.wireframe===!0?(Ft.setLineWidth(ut.wireframeLinewidth*ke()),we.setMode(B.LINES)):we.setMode(B.TRIANGLES);else if(J.isLine){let Wt=ut.linewidth;Wt===void 0&&(Wt=1),Ft.setLineWidth(Wt*ke()),J.isLineSegments?we.setMode(B.LINES):J.isLineLoop?we.setMode(B.LINE_LOOP):we.setMode(B.LINE_STRIP)}else J.isPoints?we.setMode(B.POINTS):J.isSprite&&we.setMode(B.TRIANGLES);if(J.isBatchedMesh)if(J._multiDrawInstances!==null)Al("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),we.renderMultiDrawInstances(J._multiDrawStarts,J._multiDrawCounts,J._multiDrawCount,J._multiDrawInstances);else if(Jt.get("WEBGL_multi_draw"))we.renderMultiDraw(J._multiDrawStarts,J._multiDrawCounts,J._multiDrawCount);else{const Wt=J._multiDrawStarts,Be=J._multiDrawCounts,ye=J._multiDrawCount,Le=It?at.get(It).bytesPerElement:1,ra=qt.get(ut).currentProgram.getUniforms();for(let In=0;In<ye;In++)ra.setValue(B,"_gl_DrawID",In),we.render(Wt[In]/Le,Be[In])}else if(J.isInstancedMesh)we.renderInstances(ve,Ze,J.count);else if(lt.isInstancedBufferGeometry){const Wt=lt._maxInstanceCount!==void 0?lt._maxInstanceCount:1/0,Be=Math.min(lt.instanceCount,Wt);we.renderInstances(ve,Ze,Be)}else we.render(ve,Ze)};function tn(R,W,lt){R.transparent===!0&&R.side===Ca&&R.forceSinglePass===!1?(R.side=ni,R.needsUpdate=!0,Hi(R,W,lt),R.side=_s,R.needsUpdate=!0,Hi(R,W,lt),R.side=Ca):Hi(R,W,lt)}this.compile=function(R,W,lt=null){lt===null&&(lt=R),L=Kt.get(lt),L.init(W),G.push(L),lt.traverseVisible(function(J){J.isLight&&J.layers.test(W.layers)&&(L.pushLight(J),J.castShadow&&L.pushShadow(J))}),R!==lt&&R.traverseVisible(function(J){J.isLight&&J.layers.test(W.layers)&&(L.pushLight(J),J.castShadow&&L.pushShadow(J))}),L.setupLights();const ut=new Set;return R.traverse(function(J){if(!(J.isMesh||J.isPoints||J.isLine||J.isSprite))return;const Tt=J.material;if(Tt)if(Array.isArray(Tt))for(let At=0;At<Tt.length;At++){const Ot=Tt[At];tn(Ot,lt,J),ut.add(Ot)}else tn(Tt,lt,J),ut.add(Tt)}),L=G.pop(),ut},this.compileAsync=function(R,W,lt=null){const ut=this.compile(R,W,lt);return new Promise(J=>{function Tt(){if(ut.forEach(function(At){qt.get(At).currentProgram.isReady()&&ut.delete(At)}),ut.size===0){J(R);return}setTimeout(Tt,10)}Jt.get("KHR_parallel_shader_compile")!==null?Tt():setTimeout(Tt,10)})};let fn=null;function Gn(R){fn&&fn(R)}function Ul(){sa.stop()}function Nl(){sa.start()}const sa=new dy;sa.setAnimationLoop(Gn),typeof self<"u"&&sa.setContext(self),this.setAnimationLoop=function(R){fn=R,Dt.setAnimationLoop(R),R===null?sa.stop():sa.start()},Dt.addEventListener("sessionstart",Ul),Dt.addEventListener("sessionend",Nl),this.render=function(R,W){if(W!==void 0&&W.isCamera!==!0){un("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(O===!0)return;if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),W.parent===null&&W.matrixWorldAutoUpdate===!0&&W.updateMatrixWorld(),Dt.enabled===!0&&Dt.isPresenting===!0&&(Dt.cameraAutoUpdate===!0&&Dt.updateCamera(W),W=Dt.getCamera()),R.isScene===!0&&R.onBeforeRender(D,R,W,C),L=Kt.get(R,G.length),L.init(W),G.push(L),Pt.multiplyMatrices(W.projectionMatrix,W.matrixWorldInverse),et.setFromProjectionMatrix(Pt,ta,W.reversedDepth),bt=this.localClippingEnabled,st=jt.init(this.clippingPlanes,bt),N=Nt.get(R,z.length),N.init(),z.push(N),Dt.enabled===!0&&Dt.isPresenting===!0){const Tt=D.xr.getDepthSensingMesh();Tt!==null&&La(Tt,W,-1/0,D.sortObjects)}La(R,W,0,D.sortObjects),N.finish(),D.sortObjects===!0&&N.sort(Yt,he),le=Dt.enabled===!1||Dt.isPresenting===!1||Dt.hasDepthSensing()===!1,le&&Ct.addToRenderList(N,R),this.info.render.frame++,st===!0&&jt.beginShadows();const lt=L.state.shadowsArray;St.render(lt,R,W),st===!0&&jt.endShadows(),this.info.autoReset===!0&&this.info.reset();const ut=N.opaque,J=N.transmissive;if(L.setupLights(),W.isArrayCamera){const Tt=W.cameras;if(J.length>0)for(let At=0,Ot=Tt.length;At<Ot;At++){const It=Tt[At];ys(ut,J,R,It)}le&&Ct.render(R);for(let At=0,Ot=Tt.length;At<Ot;At++){const It=Tt[At];vs(N,R,It,It.viewport)}}else J.length>0&&ys(ut,J,R,W),le&&Ct.render(R),vs(N,R,W);C!==null&&w===0&&(se.updateMultisampleRenderTarget(C),se.updateRenderTargetMipmap(C)),R.isScene===!0&&R.onAfterRender(D,R,W),F.resetDefaultState(),H=-1,Q=null,G.pop(),G.length>0?(L=G[G.length-1],st===!0&&jt.setGlobalState(D.clippingPlanes,L.state.camera)):L=null,z.pop(),z.length>0?N=z[z.length-1]:N=null};function La(R,W,lt,ut){if(R.visible===!1)return;if(R.layers.test(W.layers)){if(R.isGroup)lt=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(W);else if(R.isLight)L.pushLight(R),R.castShadow&&L.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||et.intersectsSprite(R)){ut&&Mt.setFromMatrixPosition(R.matrixWorld).applyMatrix4(Pt);const At=yt.update(R),Ot=R.material;Ot.visible&&N.push(R,At,Ot,lt,Mt.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||et.intersectsObject(R))){const At=yt.update(R),Ot=R.material;if(ut&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),Mt.copy(R.boundingSphere.center)):(At.boundingSphere===null&&At.computeBoundingSphere(),Mt.copy(At.boundingSphere.center)),Mt.applyMatrix4(R.matrixWorld).applyMatrix4(Pt)),Array.isArray(Ot)){const It=At.groups;for(let ne=0,ae=It.length;ne<ae;ne++){const Qt=It[ne],ve=Ot[Qt.materialIndex];ve&&ve.visible&&N.push(R,At,ve,lt,Mt.z,Qt)}}else Ot.visible&&N.push(R,At,Ot,lt,Mt.z,null)}}const Tt=R.children;for(let At=0,Ot=Tt.length;At<Ot;At++)La(Tt[At],W,lt,ut)}function vs(R,W,lt,ut){const{opaque:J,transmissive:Tt,transparent:At}=R;L.setupLightsView(lt),st===!0&&jt.setGlobalState(D.clippingPlanes,lt),ut&&Ft.viewport(nt.copy(ut)),J.length>0&&xi(J,W,lt),Tt.length>0&&xi(Tt,W,lt),At.length>0&&xi(At,W,lt),Ft.buffers.depth.setTest(!0),Ft.buffers.depth.setMask(!0),Ft.buffers.color.setMask(!0),Ft.setPolygonOffset(!1)}function ys(R,W,lt,ut){if((lt.isScene===!0?lt.overrideMaterial:null)!==null)return;L.state.transmissionRenderTarget[ut.id]===void 0&&(L.state.transmissionRenderTarget[ut.id]=new tr(1,1,{generateMipmaps:!0,type:Jt.has("EXT_color_buffer_half_float")||Jt.has("EXT_color_buffer_float")?po:na,minFilter:Qs,samples:4,stencilBuffer:f,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Oe.workingColorSpace}));const Tt=L.state.transmissionRenderTarget[ut.id],At=ut.viewport||nt;Tt.setSize(At.z*D.transmissionResolutionScale,At.w*D.transmissionResolutionScale);const Ot=D.getRenderTarget(),It=D.getActiveCubeFace(),ne=D.getActiveMipmapLevel();D.setRenderTarget(Tt),D.getClearColor(k),ct=D.getClearAlpha(),ct<1&&D.setClearColor(16777215,.5),D.clear(),le&&Ct.render(lt);const ae=D.toneMapping;D.toneMapping=gs;const Qt=ut.viewport;if(ut.viewport!==void 0&&(ut.viewport=void 0),L.setupLightsView(ut),st===!0&&jt.setGlobalState(D.clippingPlanes,ut),xi(R,lt,ut),se.updateMultisampleRenderTarget(Tt),se.updateRenderTargetMipmap(Tt),Jt.has("WEBGL_multisampled_render_to_texture")===!1){let ve=!1;for(let Ue=0,Ze=W.length;Ue<Ze;Ue++){const Ke=W[Ue],{object:we,geometry:Wt,material:Be,group:ye}=Ke;if(Be.side===Ca&&we.layers.test(ut.layers)){const Le=Be.side;Be.side=ni,Be.needsUpdate=!0,Ss(we,lt,ut,Wt,Be,ye),Be.side=Le,Be.needsUpdate=!0,ve=!0}}ve===!0&&(se.updateMultisampleRenderTarget(Tt),se.updateRenderTargetMipmap(Tt))}D.setRenderTarget(Ot,It,ne),D.setClearColor(k,ct),Qt!==void 0&&(ut.viewport=Qt),D.toneMapping=ae}function xi(R,W,lt){const ut=W.isScene===!0?W.overrideMaterial:null;for(let J=0,Tt=R.length;J<Tt;J++){const At=R[J],{object:Ot,geometry:It,group:ne}=At;let ae=At.material;ae.allowOverride===!0&&ut!==null&&(ae=ut),Ot.layers.test(lt.layers)&&Ss(Ot,W,lt,It,ae,ne)}}function Ss(R,W,lt,ut,J,Tt){R.onBeforeRender(D,W,lt,ut,J,Tt),R.modelViewMatrix.multiplyMatrices(lt.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),J.onBeforeRender(D,W,lt,ut,R,Tt),J.transparent===!0&&J.side===Ca&&J.forceSinglePass===!1?(J.side=ni,J.needsUpdate=!0,D.renderBufferDirect(lt,W,ut,J,R,Tt),J.side=_s,J.needsUpdate=!0,D.renderBufferDirect(lt,W,ut,J,R,Tt),J.side=Ca):D.renderBufferDirect(lt,W,ut,J,R,Tt),R.onAfterRender(D,W,lt,ut,J,Tt)}function Hi(R,W,lt){W.isScene!==!0&&(W=Gt);const ut=qt.get(R),J=L.state.lights,Tt=L.state.shadowsArray,At=J.state.version,Ot=ft.getParameters(R,J.state,Tt,W,lt),It=ft.getProgramCacheKey(Ot);let ne=ut.programs;ut.environment=R.isMeshStandardMaterial?W.environment:null,ut.fog=W.fog,ut.envMap=(R.isMeshStandardMaterial?T:U).get(R.envMap||ut.environment),ut.envMapRotation=ut.environment!==null&&R.envMap===null?W.environmentRotation:R.envMapRotation,ne===void 0&&(R.addEventListener("dispose",ue),ne=new Map,ut.programs=ne);let ae=ne.get(It);if(ae!==void 0){if(ut.currentProgram===ae&&ut.lightsStateVersion===At)return Ll(R,Ot),ae}else Ot.uniforms=ft.getUniforms(R),R.onBeforeCompile(Ot,D),ae=ft.acquireProgram(Ot,It),ne.set(It,ae),ut.uniforms=Ot.uniforms;const Qt=ut.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(Qt.clippingPlanes=jt.uniform),Ll(R,Ot),ut.needsLights=bs(R),ut.lightsStateVersion=At,ut.needsLights&&(Qt.ambientLightColor.value=J.state.ambient,Qt.lightProbe.value=J.state.probe,Qt.directionalLights.value=J.state.directional,Qt.directionalLightShadows.value=J.state.directionalShadow,Qt.spotLights.value=J.state.spot,Qt.spotLightShadows.value=J.state.spotShadow,Qt.rectAreaLights.value=J.state.rectArea,Qt.ltc_1.value=J.state.rectAreaLTC1,Qt.ltc_2.value=J.state.rectAreaLTC2,Qt.pointLights.value=J.state.point,Qt.pointLightShadows.value=J.state.pointShadow,Qt.hemisphereLights.value=J.state.hemi,Qt.directionalShadowMap.value=J.state.directionalShadowMap,Qt.directionalShadowMatrix.value=J.state.directionalShadowMatrix,Qt.spotShadowMap.value=J.state.spotShadowMap,Qt.spotLightMatrix.value=J.state.spotLightMatrix,Qt.spotLightMap.value=J.state.spotLightMap,Qt.pointShadowMap.value=J.state.pointShadowMap,Qt.pointShadowMatrix.value=J.state.pointShadowMatrix),ut.currentProgram=ae,ut.uniformsList=null,ae}function go(R){if(R.uniformsList===null){const W=R.currentProgram.getUniforms();R.uniformsList=Ou.seqWithValue(W.seq,R.uniforms)}return R.uniformsList}function Ll(R,W){const lt=qt.get(R);lt.outputColorSpace=W.outputColorSpace,lt.batching=W.batching,lt.batchingColor=W.batchingColor,lt.instancing=W.instancing,lt.instancingColor=W.instancingColor,lt.instancingMorph=W.instancingMorph,lt.skinning=W.skinning,lt.morphTargets=W.morphTargets,lt.morphNormals=W.morphNormals,lt.morphColors=W.morphColors,lt.morphTargetsCount=W.morphTargetsCount,lt.numClippingPlanes=W.numClippingPlanes,lt.numIntersection=W.numClipIntersection,lt.vertexAlphas=W.vertexAlphas,lt.vertexTangents=W.vertexTangents,lt.toneMapping=W.toneMapping}function Ol(R,W,lt,ut,J){W.isScene!==!0&&(W=Gt),se.resetTextureUnits();const Tt=W.fog,At=ut.isMeshStandardMaterial?W.environment:null,Ot=C===null?D.outputColorSpace:C.isXRRenderTarget===!0?C.texture.colorSpace:uo,It=(ut.isMeshStandardMaterial?T:U).get(ut.envMap||At),ne=ut.vertexColors===!0&&!!lt.attributes.color&&lt.attributes.color.itemSize===4,ae=!!lt.attributes.tangent&&(!!ut.normalMap||ut.anisotropy>0),Qt=!!lt.morphAttributes.position,ve=!!lt.morphAttributes.normal,Ue=!!lt.morphAttributes.color;let Ze=gs;ut.toneMapped&&(C===null||C.isXRRenderTarget===!0)&&(Ze=D.toneMapping);const Ke=lt.morphAttributes.position||lt.morphAttributes.normal||lt.morphAttributes.color,we=Ke!==void 0?Ke.length:0,Wt=qt.get(ut),Be=L.state.lights;if(st===!0&&(bt===!0||R!==Q)){const Mn=R===Q&&ut.id===H;jt.setState(ut,R,Mn)}let ye=!1;ut.version===Wt.__version?(Wt.needsLights&&Wt.lightsStateVersion!==Be.state.version||Wt.outputColorSpace!==Ot||J.isBatchedMesh&&Wt.batching===!1||!J.isBatchedMesh&&Wt.batching===!0||J.isBatchedMesh&&Wt.batchingColor===!0&&J.colorTexture===null||J.isBatchedMesh&&Wt.batchingColor===!1&&J.colorTexture!==null||J.isInstancedMesh&&Wt.instancing===!1||!J.isInstancedMesh&&Wt.instancing===!0||J.isSkinnedMesh&&Wt.skinning===!1||!J.isSkinnedMesh&&Wt.skinning===!0||J.isInstancedMesh&&Wt.instancingColor===!0&&J.instanceColor===null||J.isInstancedMesh&&Wt.instancingColor===!1&&J.instanceColor!==null||J.isInstancedMesh&&Wt.instancingMorph===!0&&J.morphTexture===null||J.isInstancedMesh&&Wt.instancingMorph===!1&&J.morphTexture!==null||Wt.envMap!==It||ut.fog===!0&&Wt.fog!==Tt||Wt.numClippingPlanes!==void 0&&(Wt.numClippingPlanes!==jt.numPlanes||Wt.numIntersection!==jt.numIntersection)||Wt.vertexAlphas!==ne||Wt.vertexTangents!==ae||Wt.morphTargets!==Qt||Wt.morphNormals!==ve||Wt.morphColors!==Ue||Wt.toneMapping!==Ze||Wt.morphTargetsCount!==we)&&(ye=!0):(ye=!0,Wt.__version=ut.version);let Le=Wt.currentProgram;ye===!0&&(Le=Hi(ut,W,J));let ra=!1,In=!1,Oa=!1;const Pe=Le.getUniforms(),ln=Wt.uniforms;if(Ft.useProgram(Le.program)&&(ra=!0,In=!0,Oa=!0),ut.id!==H&&(H=ut.id,In=!0),ra||Q!==R){Ft.buffers.depth.getReversed()&&R.reversedDepth!==!0&&(R._reversedDepth=!0,R.updateProjectionMatrix()),Pe.setValue(B,"projectionMatrix",R.projectionMatrix),Pe.setValue(B,"viewMatrix",R.matrixWorldInverse);const wn=Pe.map.cameraPosition;wn!==void 0&&wn.setValue(B,Rt.setFromMatrixPosition(R.matrixWorld)),te.logarithmicDepthBuffer&&Pe.setValue(B,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(ut.isMeshPhongMaterial||ut.isMeshToonMaterial||ut.isMeshLambertMaterial||ut.isMeshBasicMaterial||ut.isMeshStandardMaterial||ut.isShaderMaterial)&&Pe.setValue(B,"isOrthographic",R.isOrthographicCamera===!0),Q!==R&&(Q=R,In=!0,Oa=!0)}if(J.isSkinnedMesh){Pe.setOptional(B,J,"bindMatrix"),Pe.setOptional(B,J,"bindMatrixInverse");const Mn=J.skeleton;Mn&&(Mn.boneTexture===null&&Mn.computeBoneTexture(),Pe.setValue(B,"boneTexture",Mn.boneTexture,se))}J.isBatchedMesh&&(Pe.setOptional(B,J,"batchingTexture"),Pe.setValue(B,"batchingTexture",J._matricesTexture,se),Pe.setOptional(B,J,"batchingIdTexture"),Pe.setValue(B,"batchingIdTexture",J._indirectTexture,se),Pe.setOptional(B,J,"batchingColorTexture"),J._colorsTexture!==null&&Pe.setValue(B,"batchingColorTexture",J._colorsTexture,se));const Zn=lt.morphAttributes;if((Zn.position!==void 0||Zn.normal!==void 0||Zn.color!==void 0)&&ee.update(J,lt,Le),(In||Wt.receiveShadow!==J.receiveShadow)&&(Wt.receiveShadow=J.receiveShadow,Pe.setValue(B,"receiveShadow",J.receiveShadow)),ut.isMeshGouraudMaterial&&ut.envMap!==null&&(ln.envMap.value=It,ln.flipEnvMap.value=It.isCubeTexture&&It.isRenderTargetTexture===!1?-1:1),ut.isMeshStandardMaterial&&ut.envMap===null&&W.environment!==null&&(ln.envMapIntensity.value=W.environmentIntensity),ln.dfgLUT!==void 0&&(ln.dfgLUT.value=nR()),In&&(Pe.setValue(B,"toneMappingExposure",D.toneMappingExposure),Wt.needsLights&&_o(ln,Oa),Tt&&ut.fog===!0&&Vt.refreshFogUniforms(ln,Tt),Vt.refreshMaterialUniforms(ln,ut,vt,_t,L.state.transmissionRenderTarget[R.id]),Ou.upload(B,go(Wt),ln,se)),ut.isShaderMaterial&&ut.uniformsNeedUpdate===!0&&(Ou.upload(B,go(Wt),ln,se),ut.uniformsNeedUpdate=!1),ut.isSpriteMaterial&&Pe.setValue(B,"center",J.center),Pe.setValue(B,"modelViewMatrix",J.modelViewMatrix),Pe.setValue(B,"normalMatrix",J.normalMatrix),Pe.setValue(B,"modelMatrix",J.matrixWorld),ut.isShaderMaterial||ut.isRawShaderMaterial){const Mn=ut.uniformsGroups;for(let wn=0,vo=Mn.length;wn<vo;wn++){const ge=Mn[wn];Lt.update(ge,Le),Lt.bind(ge,Le)}}return Le}function _o(R,W){R.ambientLightColor.needsUpdate=W,R.lightProbe.needsUpdate=W,R.directionalLights.needsUpdate=W,R.directionalLightShadows.needsUpdate=W,R.pointLights.needsUpdate=W,R.pointLightShadows.needsUpdate=W,R.spotLights.needsUpdate=W,R.spotLightShadows.needsUpdate=W,R.rectAreaLights.needsUpdate=W,R.hemisphereLights.needsUpdate=W}function bs(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return X},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return C},this.setRenderTargetTextures=function(R,W,lt){const ut=qt.get(R);ut.__autoAllocateDepthBuffer=R.resolveDepthBuffer===!1,ut.__autoAllocateDepthBuffer===!1&&(ut.__useRenderToTexture=!1),qt.get(R.texture).__webglTexture=W,qt.get(R.depthTexture).__webglTexture=ut.__autoAllocateDepthBuffer?void 0:lt,ut.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(R,W){const lt=qt.get(R);lt.__webglFramebuffer=W,lt.__useDefaultFramebuffer=W===void 0};const ju=B.createFramebuffer();this.setRenderTarget=function(R,W=0,lt=0){C=R,X=W,w=lt;let ut=!0,J=null,Tt=!1,At=!1;if(R){const It=qt.get(R);if(It.__useDefaultFramebuffer!==void 0)Ft.bindFramebuffer(B.FRAMEBUFFER,null),ut=!1;else if(It.__webglFramebuffer===void 0)se.setupRenderTarget(R);else if(It.__hasExternalTextures)se.rebindTextures(R,qt.get(R.texture).__webglTexture,qt.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){const Qt=R.depthTexture;if(It.__boundDepthTexture!==Qt){if(Qt!==null&&qt.has(Qt)&&(R.width!==Qt.image.width||R.height!==Qt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");se.setupDepthRenderbuffer(R)}}const ne=R.texture;(ne.isData3DTexture||ne.isDataArrayTexture||ne.isCompressedArrayTexture)&&(At=!0);const ae=qt.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(ae[W])?J=ae[W][lt]:J=ae[W],Tt=!0):R.samples>0&&se.useMultisampledRTT(R)===!1?J=qt.get(R).__webglMultisampledFramebuffer:Array.isArray(ae)?J=ae[lt]:J=ae,nt.copy(R.viewport),ht.copy(R.scissor),ot=R.scissorTest}else nt.copy(Ae).multiplyScalar(vt).floor(),ht.copy(I).multiplyScalar(vt).floor(),ot=dt;if(lt!==0&&(J=ju),Ft.bindFramebuffer(B.FRAMEBUFFER,J)&&ut&&Ft.drawBuffers(R,J),Ft.viewport(nt),Ft.scissor(ht),Ft.setScissorTest(ot),Tt){const It=qt.get(R.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_CUBE_MAP_POSITIVE_X+W,It.__webglTexture,lt)}else if(At){const It=W;for(let ne=0;ne<R.textures.length;ne++){const ae=qt.get(R.textures[ne]);B.framebufferTextureLayer(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0+ne,ae.__webglTexture,lt,It)}}else if(R!==null&&lt!==0){const It=qt.get(R.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,It.__webglTexture,lt)}H=-1},this.readRenderTargetPixels=function(R,W,lt,ut,J,Tt,At,Ot=0){if(!(R&&R.isWebGLRenderTarget)){un("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let It=qt.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&At!==void 0&&(It=It[At]),It){Ft.bindFramebuffer(B.FRAMEBUFFER,It);try{const ne=R.textures[Ot],ae=ne.format,Qt=ne.type;if(!te.textureFormatReadable(ae)){un("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!te.textureTypeReadable(Qt)){un("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}W>=0&&W<=R.width-ut&&lt>=0&&lt<=R.height-J&&(R.textures.length>1&&B.readBuffer(B.COLOR_ATTACHMENT0+Ot),B.readPixels(W,lt,ut,J,re.convert(ae),re.convert(Qt),Tt))}finally{const ne=C!==null?qt.get(C).__webglFramebuffer:null;Ft.bindFramebuffer(B.FRAMEBUFFER,ne)}}},this.readRenderTargetPixelsAsync=async function(R,W,lt,ut,J,Tt,At,Ot=0){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let It=qt.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&At!==void 0&&(It=It[At]),It)if(W>=0&&W<=R.width-ut&&lt>=0&&lt<=R.height-J){Ft.bindFramebuffer(B.FRAMEBUFFER,It);const ne=R.textures[Ot],ae=ne.format,Qt=ne.type;if(!te.textureFormatReadable(ae))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!te.textureTypeReadable(Qt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const ve=B.createBuffer();B.bindBuffer(B.PIXEL_PACK_BUFFER,ve),B.bufferData(B.PIXEL_PACK_BUFFER,Tt.byteLength,B.STREAM_READ),R.textures.length>1&&B.readBuffer(B.COLOR_ATTACHMENT0+Ot),B.readPixels(W,lt,ut,J,re.convert(ae),re.convert(Qt),0);const Ue=C!==null?qt.get(C).__webglFramebuffer:null;Ft.bindFramebuffer(B.FRAMEBUFFER,Ue);const Ze=B.fenceSync(B.SYNC_GPU_COMMANDS_COMPLETE,0);return B.flush(),await m1(B,Ze,4),B.bindBuffer(B.PIXEL_PACK_BUFFER,ve),B.getBufferSubData(B.PIXEL_PACK_BUFFER,0,Tt),B.deleteBuffer(ve),B.deleteSync(Ze),Tt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(R,W=null,lt=0){const ut=Math.pow(2,-lt),J=Math.floor(R.image.width*ut),Tt=Math.floor(R.image.height*ut),At=W!==null?W.x:0,Ot=W!==null?W.y:0;se.setTexture2D(R,0),B.copyTexSubImage2D(B.TEXTURE_2D,lt,0,0,At,Ot,J,Tt),Ft.unbindTexture()};const Pl=B.createFramebuffer(),zl=B.createFramebuffer();this.copyTextureToTexture=function(R,W,lt=null,ut=null,J=0,Tt=null){Tt===null&&(J!==0?(Al("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Tt=J,J=0):Tt=0);let At,Ot,It,ne,ae,Qt,ve,Ue,Ze;const Ke=R.isCompressedTexture?R.mipmaps[Tt]:R.image;if(lt!==null)At=lt.max.x-lt.min.x,Ot=lt.max.y-lt.min.y,It=lt.isBox3?lt.max.z-lt.min.z:1,ne=lt.min.x,ae=lt.min.y,Qt=lt.isBox3?lt.min.z:0;else{const Zn=Math.pow(2,-J);At=Math.floor(Ke.width*Zn),Ot=Math.floor(Ke.height*Zn),R.isDataArrayTexture?It=Ke.depth:R.isData3DTexture?It=Math.floor(Ke.depth*Zn):It=1,ne=0,ae=0,Qt=0}ut!==null?(ve=ut.x,Ue=ut.y,Ze=ut.z):(ve=0,Ue=0,Ze=0);const we=re.convert(W.format),Wt=re.convert(W.type);let Be;W.isData3DTexture?(se.setTexture3D(W,0),Be=B.TEXTURE_3D):W.isDataArrayTexture||W.isCompressedArrayTexture?(se.setTexture2DArray(W,0),Be=B.TEXTURE_2D_ARRAY):(se.setTexture2D(W,0),Be=B.TEXTURE_2D),B.pixelStorei(B.UNPACK_FLIP_Y_WEBGL,W.flipY),B.pixelStorei(B.UNPACK_PREMULTIPLY_ALPHA_WEBGL,W.premultiplyAlpha),B.pixelStorei(B.UNPACK_ALIGNMENT,W.unpackAlignment);const ye=B.getParameter(B.UNPACK_ROW_LENGTH),Le=B.getParameter(B.UNPACK_IMAGE_HEIGHT),ra=B.getParameter(B.UNPACK_SKIP_PIXELS),In=B.getParameter(B.UNPACK_SKIP_ROWS),Oa=B.getParameter(B.UNPACK_SKIP_IMAGES);B.pixelStorei(B.UNPACK_ROW_LENGTH,Ke.width),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,Ke.height),B.pixelStorei(B.UNPACK_SKIP_PIXELS,ne),B.pixelStorei(B.UNPACK_SKIP_ROWS,ae),B.pixelStorei(B.UNPACK_SKIP_IMAGES,Qt);const Pe=R.isDataArrayTexture||R.isData3DTexture,ln=W.isDataArrayTexture||W.isData3DTexture;if(R.isDepthTexture){const Zn=qt.get(R),Mn=qt.get(W),wn=qt.get(Zn.__renderTarget),vo=qt.get(Mn.__renderTarget);Ft.bindFramebuffer(B.READ_FRAMEBUFFER,wn.__webglFramebuffer),Ft.bindFramebuffer(B.DRAW_FRAMEBUFFER,vo.__webglFramebuffer);for(let ge=0;ge<It;ge++)Pe&&(B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,qt.get(R).__webglTexture,J,Qt+ge),B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,qt.get(W).__webglTexture,Tt,Ze+ge)),B.blitFramebuffer(ne,ae,At,Ot,ve,Ue,At,Ot,B.DEPTH_BUFFER_BIT,B.NEAREST);Ft.bindFramebuffer(B.READ_FRAMEBUFFER,null),Ft.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else if(J!==0||R.isRenderTargetTexture||qt.has(R)){const Zn=qt.get(R),Mn=qt.get(W);Ft.bindFramebuffer(B.READ_FRAMEBUFFER,Pl),Ft.bindFramebuffer(B.DRAW_FRAMEBUFFER,zl);for(let wn=0;wn<It;wn++)Pe?B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,Zn.__webglTexture,J,Qt+wn):B.framebufferTexture2D(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,Zn.__webglTexture,J),ln?B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,Mn.__webglTexture,Tt,Ze+wn):B.framebufferTexture2D(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,Mn.__webglTexture,Tt),J!==0?B.blitFramebuffer(ne,ae,At,Ot,ve,Ue,At,Ot,B.COLOR_BUFFER_BIT,B.NEAREST):ln?B.copyTexSubImage3D(Be,Tt,ve,Ue,Ze+wn,ne,ae,At,Ot):B.copyTexSubImage2D(Be,Tt,ve,Ue,ne,ae,At,Ot);Ft.bindFramebuffer(B.READ_FRAMEBUFFER,null),Ft.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else ln?R.isDataTexture||R.isData3DTexture?B.texSubImage3D(Be,Tt,ve,Ue,Ze,At,Ot,It,we,Wt,Ke.data):W.isCompressedArrayTexture?B.compressedTexSubImage3D(Be,Tt,ve,Ue,Ze,At,Ot,It,we,Ke.data):B.texSubImage3D(Be,Tt,ve,Ue,Ze,At,Ot,It,we,Wt,Ke):R.isDataTexture?B.texSubImage2D(B.TEXTURE_2D,Tt,ve,Ue,At,Ot,we,Wt,Ke.data):R.isCompressedTexture?B.compressedTexSubImage2D(B.TEXTURE_2D,Tt,ve,Ue,Ke.width,Ke.height,we,Ke.data):B.texSubImage2D(B.TEXTURE_2D,Tt,ve,Ue,At,Ot,we,Wt,Ke);B.pixelStorei(B.UNPACK_ROW_LENGTH,ye),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,Le),B.pixelStorei(B.UNPACK_SKIP_PIXELS,ra),B.pixelStorei(B.UNPACK_SKIP_ROWS,In),B.pixelStorei(B.UNPACK_SKIP_IMAGES,Oa),Tt===0&&W.generateMipmaps&&B.generateMipmap(Be),Ft.unbindTexture()},this.initRenderTarget=function(R){qt.get(R).__webglFramebuffer===void 0&&se.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?se.setTextureCube(R,0):R.isData3DTexture?se.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?se.setTexture2DArray(R,0):se.setTexture2D(R,0),Ft.unbindTexture()},this.resetState=function(){X=0,w=0,C=null,Ft.reset(),F.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ta}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const i=this.getContext();i.drawingBufferColorSpace=Oe._getDrawingBufferColorSpace(e),i.unpackColorSpace=Oe._getUnpackColorSpace()}}const Pv={type:"change"},m0={type:"start"},_y={type:"end"},Ru=new l0,zv=new ps,aR=Math.cos(70*fo.DEG2RAD),vn=new Z,ei=2*Math.PI,je={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},ap=1e-6;class sR extends x3{constructor(e,i=null){super(e,i),this.state=je.NONE,this.target=new Z,this.cursor=new Z,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:ao.ROTATE,MIDDLE:ao.DOLLY,RIGHT:ao.PAN},this.touches={ONE:io.ROTATE,TWO:io.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new Z,this._lastQuaternion=new $s,this._lastTargetPosition=new Z,this._quat=new $s().setFromUnitVectors(e.up,new Z(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new uv,this._sphericalDelta=new uv,this._scale=1,this._panOffset=new Z,this._rotateStart=new de,this._rotateEnd=new de,this._rotateDelta=new de,this._panStart=new de,this._panEnd=new de,this._panDelta=new de,this._dollyStart=new de,this._dollyEnd=new de,this._dollyDelta=new de,this._dollyDirection=new Z,this._mouse=new de,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=oR.bind(this),this._onPointerDown=rR.bind(this),this._onPointerUp=lR.bind(this),this._onContextMenu=mR.bind(this),this._onMouseWheel=fR.bind(this),this._onKeyDown=hR.bind(this),this._onTouchStart=dR.bind(this),this._onTouchMove=pR.bind(this),this._onMouseDown=cR.bind(this),this._onMouseMove=uR.bind(this),this._interceptControlDown=xR.bind(this),this._interceptControlUp=gR.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Pv),this.update(),this.state=je.NONE}update(e=null){const i=this.object.position;vn.copy(i).sub(this.target),vn.applyQuaternion(this._quat),this._spherical.setFromVector3(vn),this.autoRotate&&this.state===je.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let s=this.minAzimuthAngle,l=this.maxAzimuthAngle;isFinite(s)&&isFinite(l)&&(s<-Math.PI?s+=ei:s>Math.PI&&(s-=ei),l<-Math.PI?l+=ei:l>Math.PI&&(l-=ei),s<=l?this._spherical.theta=Math.max(s,Math.min(l,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(s+l)/2?Math.max(s,this._spherical.theta):Math.min(l,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let f=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const h=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),f=h!=this._spherical.radius}if(vn.setFromSpherical(this._spherical),vn.applyQuaternion(this._quatInverse),i.copy(this.target).add(vn),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let h=null;if(this.object.isPerspectiveCamera){const d=vn.length();h=this._clampDistance(d*this._scale);const x=d-h;this.object.position.addScaledVector(this._dollyDirection,x),this.object.updateMatrixWorld(),f=!!x}else if(this.object.isOrthographicCamera){const d=new Z(this._mouse.x,this._mouse.y,0);d.unproject(this.object);const x=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),f=x!==this.object.zoom;const m=new Z(this._mouse.x,this._mouse.y,0);m.unproject(this.object),this.object.position.sub(m).add(d),this.object.updateMatrixWorld(),h=vn.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;h!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(h).add(this.object.position):(Ru.origin.copy(this.object.position),Ru.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Ru.direction))<aR?this.object.lookAt(this.target):(zv.setFromNormalAndCoplanarPoint(this.object.up,this.target),Ru.intersectPlane(zv,this.target))))}else if(this.object.isOrthographicCamera){const h=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),h!==this.object.zoom&&(this.object.updateProjectionMatrix(),f=!0)}return this._scale=1,this._performCursorZoom=!1,f||this._lastPosition.distanceToSquared(this.object.position)>ap||8*(1-this._lastQuaternion.dot(this.object.quaternion))>ap||this._lastTargetPosition.distanceToSquared(this.target)>ap?(this.dispatchEvent(Pv),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?ei/60*this.autoRotateSpeed*e:ei/60/60*this.autoRotateSpeed}_getZoomScale(e){const i=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*i)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,i){vn.setFromMatrixColumn(i,0),vn.multiplyScalar(-e),this._panOffset.add(vn)}_panUp(e,i){this.screenSpacePanning===!0?vn.setFromMatrixColumn(i,1):(vn.setFromMatrixColumn(i,0),vn.crossVectors(this.object.up,vn)),vn.multiplyScalar(e),this._panOffset.add(vn)}_pan(e,i){const s=this.domElement;if(this.object.isPerspectiveCamera){const l=this.object.position;vn.copy(l).sub(this.target);let f=vn.length();f*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*f/s.clientHeight,this.object.matrix),this._panUp(2*i*f/s.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/s.clientWidth,this.object.matrix),this._panUp(i*(this.object.top-this.object.bottom)/this.object.zoom/s.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,i){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const s=this.domElement.getBoundingClientRect(),l=e-s.left,f=i-s.top,h=s.width,d=s.height;this._mouse.x=l/h*2-1,this._mouse.y=-(f/d)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const i=this.domElement;this._rotateLeft(ei*this._rotateDelta.x/i.clientHeight),this._rotateUp(ei*this._rotateDelta.y/i.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let i=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(ei*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),i=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-ei*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),i=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(ei*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),i=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-ei*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),i=!0;break}i&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const i=this._getSecondPointerPosition(e),s=.5*(e.pageX+i.x),l=.5*(e.pageY+i.y);this._rotateStart.set(s,l)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const i=this._getSecondPointerPosition(e),s=.5*(e.pageX+i.x),l=.5*(e.pageY+i.y);this._panStart.set(s,l)}}_handleTouchStartDolly(e){const i=this._getSecondPointerPosition(e),s=e.pageX-i.x,l=e.pageY-i.y,f=Math.sqrt(s*s+l*l);this._dollyStart.set(0,f)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const s=this._getSecondPointerPosition(e),l=.5*(e.pageX+s.x),f=.5*(e.pageY+s.y);this._rotateEnd.set(l,f)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const i=this.domElement;this._rotateLeft(ei*this._rotateDelta.x/i.clientHeight),this._rotateUp(ei*this._rotateDelta.y/i.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const i=this._getSecondPointerPosition(e),s=.5*(e.pageX+i.x),l=.5*(e.pageY+i.y);this._panEnd.set(s,l)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const i=this._getSecondPointerPosition(e),s=e.pageX-i.x,l=e.pageY-i.y,f=Math.sqrt(s*s+l*l);this._dollyEnd.set(0,f),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const h=(e.pageX+i.x)*.5,d=(e.pageY+i.y)*.5;this._updateZoomParameters(h,d)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let i=0;i<this._pointers.length;i++)if(this._pointers[i]==e.pointerId){this._pointers.splice(i,1);return}}_isTrackingPointer(e){for(let i=0;i<this._pointers.length;i++)if(this._pointers[i]==e.pointerId)return!0;return!1}_trackPointer(e){let i=this._pointerPositions[e.pointerId];i===void 0&&(i=new de,this._pointerPositions[e.pointerId]=i),i.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const i=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[i]}_customWheelEvent(e){const i=e.deltaMode,s={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(i){case 1:s.deltaY*=16;break;case 2:s.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(s.deltaY*=10),s}}function rR(o){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(o.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(o)&&(this._addPointer(o),o.pointerType==="touch"?this._onTouchStart(o):this._onMouseDown(o)))}function oR(o){this.enabled!==!1&&(o.pointerType==="touch"?this._onTouchMove(o):this._onMouseMove(o))}function lR(o){switch(this._removePointer(o),this._pointers.length){case 0:this.domElement.releasePointerCapture(o.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(_y),this.state=je.NONE;break;case 1:const e=this._pointers[0],i=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:i.x,pageY:i.y});break}}function cR(o){let e;switch(o.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case ao.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(o),this.state=je.DOLLY;break;case ao.ROTATE:if(o.ctrlKey||o.metaKey||o.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(o),this.state=je.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(o),this.state=je.ROTATE}break;case ao.PAN:if(o.ctrlKey||o.metaKey||o.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(o),this.state=je.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(o),this.state=je.PAN}break;default:this.state=je.NONE}this.state!==je.NONE&&this.dispatchEvent(m0)}function uR(o){switch(this.state){case je.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(o);break;case je.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(o);break;case je.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(o);break}}function fR(o){this.enabled===!1||this.enableZoom===!1||this.state!==je.NONE||(o.preventDefault(),this.dispatchEvent(m0),this._handleMouseWheel(this._customWheelEvent(o)),this.dispatchEvent(_y))}function hR(o){this.enabled!==!1&&this._handleKeyDown(o)}function dR(o){switch(this._trackPointer(o),this._pointers.length){case 1:switch(this.touches.ONE){case io.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(o),this.state=je.TOUCH_ROTATE;break;case io.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(o),this.state=je.TOUCH_PAN;break;default:this.state=je.NONE}break;case 2:switch(this.touches.TWO){case io.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(o),this.state=je.TOUCH_DOLLY_PAN;break;case io.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(o),this.state=je.TOUCH_DOLLY_ROTATE;break;default:this.state=je.NONE}break;default:this.state=je.NONE}this.state!==je.NONE&&this.dispatchEvent(m0)}function pR(o){switch(this._trackPointer(o),this.state){case je.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(o),this.update();break;case je.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(o),this.update();break;case je.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(o),this.update();break;case je.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(o),this.update();break;default:this.state=je.NONE}}function mR(o){this.enabled!==!1&&o.preventDefault()}function xR(o){o.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function gR(o){o.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const _R=new Z(0,1,0),sp=new Z,Iv=new Z,Cu=new Z;function rp(o,e,i,s,l,f=!1){const h=new Lu;h.name="root",h.position.x=e;const d={root:h},x=(D,O,X,w,C=0)=>{const H=new Lu;return H.name=D,H.position.set(X,w,C),O.add(H),d[D]=H,H},m=.81*l,_=.81*l,p=x("hips",h,0,m+_),y=x("spine",p,0,.34*s),b=x("chest",y,0,.42*s);x("head",b,0,.52*s);for(const D of[-1,1]){const O=D<0?"left":"right",X=x(`${O}UpperArm`,b,D*.32*s,.09*s),w=x(`${O}LowerArm`,X,D*.55*s,-.18*s);x(`${O}Hand`,w,D*.44*s,-.12*s);const C=x(`${O}UpperLeg`,p,D*.18*s,-.06*s),H=x(`${O}LowerLeg`,C,0,-m+.06*s);if(f&&O==="left"){const Q=x("leftExtraLeg",H,0,-_*.54);x("leftFoot",Q,0,-_*.46)}else x(`${O}Foot`,H,0,-_)}o.add(h);const E=new u0(Object.values(d)),A=new p3(h);A.material.color.setHex(i),A.material.transparent=!0,A.material.opacity=.3,o.add(A);const S=new Zd({color:i,metalness:.16,roughness:.44}),v=new Zd({color:15331566,metalness:.12,roughness:.5}),N=new h0(.042,.048,1,10),L=new d0(.079,14,10),z=[],G=[];for(const D of Object.values(d)){if(D!==h){const O=new mi(L,D.name==="leftExtraLeg"?new Zd({color:16769422,emissive:7292943,emissiveIntensity:.55}):v);o.add(O),G.push({bone:D,mesh:O})}if(D.parent instanceof Lu&&D.parent!==h){const O=new mi(N,S);o.add(O),z.push({a:D.parent,b:D,mesh:O})}}return{root:h,bones:d,skeleton:E,links:z,joints:G,helper:A,upper:m,lower:_}}function xl(o){o.root.updateMatrixWorld(!0),o.skeleton.update(),o.helper.updateMatrixWorld(!0);for(const{a:e,b:i,mesh:s}of o.links)e.getWorldPosition(sp),i.getWorldPosition(Iv),Cu.subVectors(Iv,sp),s.position.copy(sp).addScaledVector(Cu,.5),s.quaternion.setFromUnitVectors(_R,Cu.clone().normalize()),s.scale.set(1,Cu.length(),1);for(const{bone:e,mesh:i}of o.joints)e.getWorldPosition(i.position)}function op(o,e){o.helper.visible=e;for(const{mesh:i}of o.links)i.visible=e;for(const{mesh:i}of o.joints)i.visible=e}function vR(o,e,i,s){const l=i.y-s.y,f=i.z-s.z,h=fo.clamp(Math.hypot(l,f),.001,o+e-.002),d=Math.PI-Math.acos(fo.clamp((o*o+e*e-h*h)/(2*o*e),-1,1));return{hipAngle:Math.atan2(f,l)-Math.atan2(e*Math.sin(d),o+e*Math.cos(d)),knee:d}}function yR(o,e){const i=[o.bones.leftUpperLeg,o.bones.leftLowerLeg,o.bones.leftExtraLeg],s=o.bones.leftFoot,l=new Z,f=new Z;for(let h=0;h<48&&(o.root.updateMatrixWorld(!0),s.getWorldPosition(f),!(f.distanceTo(e)<5e-4));h++)for(let d=i.length-1;d>=0;d--){const x=i[d];x.getWorldPosition(l),s.getWorldPosition(f);const m=f.y-l.y,_=f.z-l.z,p=e.y-l.y,y=e.z-l.z,b=Math.atan2(m*y-_*p,m*p+_*y);x.rotation.x=fo.clamp(x.rotation.x+b,d===0?-1.5:0,d===0?1.5:2.6),o.root.updateMatrixWorld(!0)}}class SR{constructor(e){_n(this,"renderer");_n(this,"scene",new n3);_n(this,"camera",new Ri(38,1,.1,100));_n(this,"controls");_n(this,"source");_n(this,"targetSame");_n(this,"targetExtra");_n(this,"target");_n(this,"sourceRest");_n(this,"targetRest");_n(this,"goal");_n(this,"goalStem");_n(this,"mapping");_n(this,"extraLabel");_n(this,"resizeObserver");_n(this,"frame",0);_n(this,"restLegRatio",.78);_n(this,"animate",()=>{this.frame=requestAnimationFrame(this.animate),this.controls.update(),this.updateExtraLabelPosition(),this.renderer.render(this.scene,this.camera)});this.host=e,this.renderer=new iR({antialias:!0,alpha:!1}),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.renderer.setClearColor(1448732),this.renderer.outputColorSpace=di,e.appendChild(this.renderer.domElement),this.scene.fog=new c0(1448732,12,26),this.scene.add(new c3(12184035,3420978,2));const i=new h3(16777215,2.4);i.position.set(3,7,5),this.scene.add(i);const s=new m3(12,24,3689289,2832182);s.position.y=-.09,this.scene.add(s);const l=new mi(new Dl(14,14),new Fu({color:2107689}));l.rotation.x=-Math.PI/2,l.position.y=-.11,this.scene.add(l),this.source=rp(this.scene,-1.4,6937546,1,1),this.targetSame=rp(this.scene,1.4,16100722,.83,.78),this.targetExtra=rp(this.scene,1.4,16100722,.83,.78,!0),this.target=this.targetExtra,op(this.targetSame,!1),this.sourceRest=this.makeRestGhost(-1.4,6937546,1,1),this.targetRest=this.makeRestGhost(1.4,16100722,.83,.78),this.scene.add(this.sourceRest,this.targetRest),this.goal=new mi(new p0(.15,.013,8,32),new Fu({color:9165296})),this.goal.rotation.x=Math.PI/2,this.scene.add(this.goal);const f=new zn().setFromPoints([new Z,new Z]);this.goalStem=new _l(f,new Kd({color:9165296,dashSize:.08,gapSize:.06,transparent:!0,opacity:.75})),this.scene.add(this.goalStem);const h=new zn().setFromPoints(Array.from({length:12},()=>new Z));this.mapping=new Gu(h,new Kd({color:13819614,dashSize:.1,gapSize:.08,transparent:!0,opacity:.4})),this.scene.add(this.mapping),this.extraLabel=document.createElement("div"),this.extraLabel.className="extra-bone-label",e.appendChild(this.extraLabel),this.camera.position.set(5.8,3.2,8.3),this.camera.lookAt(0,1.35,0),this.controls=new sR(this.camera,this.renderer.domElement),this.controls.target.set(0,1.35,0),this.controls.enableDamping=!0,this.controls.minDistance=5,this.controls.maxDistance=15,this.controls.maxPolarAngle=Math.PI*.49,this.resizeObserver=new ResizeObserver(()=>this.resize()),this.resizeObserver.observe(e),this.resize(),this.animate()}makeRestGhost(e,i,s,l){const f=new gl,h=new Kd({color:i,transparent:!0,opacity:.28,dashSize:.06,gapSize:.045}),d=1.62*l,x=d+.76*s,m=[[-.18*s,0,-.18*s,d],[.18*s,0,.18*s,d],[-.18*s,d,0,x],[.18*s,d,0,x],[0,d,0,x+.52*s],[-.32*s,x,-1.31*s,x-.21*s],[.32*s,x,1.31*s,x-.21*s]];for(const[_,p,y,b]of m){const E=new _l(new zn().setFromPoints([new Z(e+_,p,0),new Z(e+y,b,0)]),h);E.computeLineDistances(),f.add(E)}return f}updateTargetRestGhost(e){if(e===this.restLegRatio)return;const i=this.makeRestGhost(1.4,16100722,.83,e),s=this.targetRest.children[0].material;for(const l of this.targetRest.children)l instanceof _l&&l.geometry.dispose();this.targetRest.clear();for(const l of[...i.children])this.targetRest.add(l);s.dispose(),this.restLegRatio=e}update(e){const{engine:i,step:s,phase:l,legRatio:f,topology:h,footLock:d,showRest:x}=e;this.target=h==="extra"?this.targetExtra:this.targetSame,this.host.dataset.sourceBones=String(this.source.skeleton.bones.length),this.host.dataset.targetBones=String(this.target.skeleton.bones.length),op(this.targetExtra,h==="extra"),op(this.targetSame,h==="same"),this.updateTargetRestGhost(f);const m=.81*f;this.target.upper=m,this.target.lower=m,this.target.bones.hips.position.y=m*2,this.target.bones.leftLowerLeg.position.y=-m+.06*.83,this.target.bones.rightLowerLeg.position.y=-m+.06*.83,h==="extra"?(this.target.bones.leftExtraLeg.position.y=-m*.54,this.target.bones.leftFoot.position.y=-m*.46):this.target.bones.leftFoot.position.y=-m,this.target.bones.rightFoot.position.y=-m;const _=s>=2,p=_?Math.sin(l*Math.PI):0,y=_?(l-.5)*.25:0,b=_?.24+.58*p:0,E=_?.12+.68*p:0;this.source.bones.hips.position.set(-.1*p,1.62+.07*p,0),this.source.bones.leftUpperLeg.rotation.x=b,this.source.bones.leftLowerLeg.rotation.x=E,this.source.bones.rightUpperLeg.rotation.x=-.2*p,this.source.bones.rightLowerLeg.rotation.x=.3*p,this.source.bones.spine.rotation.set(.2*p,.32*p,-.12*p),this.source.bones.chest.rotation.set(.08*p,.18*p,.08*p),this.source.bones.head.rotation.set(-.15*p,-.3*p,.03*p),this.source.bones.leftUpperArm.rotation.set(-.18*p,-.48*p,-.92*p),this.source.bones.leftLowerArm.rotation.set(.12*p,.22*p,-.48*p),this.source.bones.rightUpperArm.rotation.set(.3*p,-.42*p,.72*p),this.source.bones.rightLowerArm.rotation.set(-.2*p,.25*p,-.62*p),this.source.root.position.z=y,this.target.root.position.z=i==="unreal"&&s>=7?y*f:0;const A=i==="godot"?s>=3:s>=4,S=i==="godot"?s>=4:s>=3,v=i==="godot"&&s===6;this.target.bones.leftUpperLeg.rotation.x=A?b:0,this.target.bones.leftLowerLeg.rotation.x=A?h==="extra"&&i==="unreal"?E*.5:E:0,h==="extra"&&(this.target.bones.leftExtraLeg.rotation.x=A&&i==="unreal"?E*.5:0),this.target.bones.rightUpperLeg.rotation.x=A?this.source.bones.rightUpperLeg.rotation.x:0,this.target.bones.rightLowerLeg.rotation.x=A?this.source.bones.rightLowerLeg.rotation.x:0;for(const nt of["spine","chest","head","leftUpperArm","leftLowerArm","rightUpperArm","rightLowerArm"])A?this.target.bones[nt].rotation.copy(this.source.bones[nt].rotation):this.target.bones[nt].rotation.set(0,0,0);if(this.target.bones.hips.position.x=S?this.source.bones.hips.position.x*(i==="godot"?.8:f):0,this.target.bones.hips.position.y=m*2+(S?.07*p*(i==="godot"?.8:f):0),v&&(this.target.bones.hips.position.x=this.source.bones.hips.position.x,this.target.bones.hips.position.y=this.source.bones.hips.position.y,this.target.bones.leftLowerLeg.position.y=this.source.bones.leftLowerLeg.position.y,this.target.bones.rightLowerLeg.position.y=this.source.bones.rightLowerLeg.position.y,h==="extra"?(this.target.bones.leftExtraLeg.position.y=this.source.bones.leftFoot.position.y*.54,this.target.bones.leftFoot.position.y=this.source.bones.leftFoot.position.y*.46):this.target.bones.leftFoot.position.y=this.source.bones.leftFoot.position.y,this.target.bones.rightFoot.position.y=this.source.bones.rightFoot.position.y),xl(this.source),xl(this.target),v){const nt=this.source.bones.leftFoot.getWorldPosition(new Z),ht=this.target.bones.leftFoot.getWorldPosition(new Z),ot=this.target.bones.leftFoot.parent;this.target.bones.leftFoot.position.copy(ot.worldToLocal(new Z(ht.x,nt.y,nt.z))),xl(this.target)}const N=this.source.bones.leftUpperLeg.getWorldPosition(new Z),L=this.source.bones.leftFoot.getWorldPosition(new Z),z=this.target.bones.leftUpperLeg.getWorldPosition(new Z),G=m-.06*.83,D=m,O=L.clone().sub(N).multiplyScalar((G+D)/(this.source.upper+this.source.lower-.06)),X=z.clone().add(O);if(d&&i==="unreal"&&s>=6){X.y=0;const nt=G+D-.015,ht=Math.max(0,z.y-X.y-nt);this.target.bones.hips.position.y-=ht,xl(this.target),this.target.bones.leftUpperLeg.getWorldPosition(z);const ot=z.y-X.y,k=Math.sqrt(Math.max(0,nt*nt-ot*ot));X.z=z.z+fo.clamp(X.z-z.z,-k,k)}if(i==="unreal"&&s>=6){if(h==="extra")yR(this.target,X);else{const nt=vR(G,D,z,X);this.target.bones.leftUpperLeg.rotation.x=nt.hipAngle,this.target.bones.leftLowerLeg.rotation.x=nt.knee}xl(this.target)}this.goal.position.copy(X),this.goal.position.y=Math.max(this.goal.position.y,.015),this.goal.visible=i==="unreal"&&s>=5;const w=this.target.bones.leftFoot.getWorldPosition(new Z),C=this.goalStem.geometry.attributes.position;C.setXYZ(0,w.x,w.y,w.z),C.setXYZ(1,X.x,X.y,X.z),C.needsUpdate=!0,this.goalStem.computeLineDistances(),this.goalStem.visible=this.goal.visible;const H=["hips","head","leftUpperArm","leftUpperLeg","leftLowerLeg","leftFoot"],Q=this.mapping.geometry.attributes.position;if(H.forEach((nt,ht)=>{const ot=this.source.bones[nt].getWorldPosition(new Z),k=this.target.bones[nt].getWorldPosition(new Z);Q.setXYZ(ht*2,ot.x,ot.y,ot.z),Q.setXYZ(ht*2+1,k.x,k.y,k.z)}),Q.needsUpdate=!0,this.mapping.computeLineDistances(),this.mapping.visible=s===1,this.extraLabel.hidden=h!=="extra",h==="extra"){const nt=Math.round(fo.radToDeg(this.target.bones.leftExtraLeg.rotation.x));this.host.dataset.extraAngle=String(nt),this.extraLabel.textContent=i==="godot"&&s>=3?`额外骨 · Rest ${nt}°`:i==="unreal"&&s>=6?`额外骨 · IK 后 ${nt}°`:i==="unreal"&&s>=4?`额外骨 · FK 分配 ${nt}°`:"+1 额外骨",this.updateExtraLabelPosition()}else delete this.host.dataset.extraAngle;return this.host.dataset.sourceSpineYaw=this.source.bones.spine.rotation.y.toFixed(3),this.host.dataset.targetSpineYaw=this.target.bones.spine.rotation.y.toFixed(3),this.host.dataset.sourceElbow=this.source.bones.leftLowerArm.rotation.z.toFixed(3),this.host.dataset.targetElbow=this.target.bones.leftLowerArm.rotation.z.toFixed(3),this.sourceRest.visible=x&&s>=2,this.targetRest.visible=x&&s>=2,Math.abs(w.y)*100}resize(){const e=this.host.clientWidth,i=this.host.clientHeight;!e||!i||(this.camera.aspect=e/i,this.camera.updateProjectionMatrix(),this.renderer.setSize(e,i))}updateExtraLabelPosition(){if(this.extraLabel.hidden)return;const e=this.target.bones.leftExtraLeg.getWorldPosition(new Z).project(this.camera);this.extraLabel.style.left=`${(e.x*.5+.5)*this.host.clientWidth+15}px`,this.extraLabel.style.top=`${(-e.y*.5+.5)*this.host.clientHeight-13}px`}dispose(){cancelAnimationFrame(this.frame),this.resizeObserver.disconnect(),this.controls.dispose(),this.scene.traverse(e=>{(e instanceof mi||e instanceof _l||e instanceof Gu)&&(e.geometry.dispose(),(Array.isArray(e.material)?e.material:[e.material]).forEach(s=>s.dispose()))}),this.renderer.dispose(),this.renderer.domElement.remove(),this.extraLabel.remove()}}const lp={engine:"godot",step:0,phase:.5,legRatio:.78,topology:"extra",footLock:!1,showRest:!0};function bR(){const[o,e]=Cn.useState(lp),[i,s]=Cn.useState(!1),[l,f]=Cn.useState(0),[h,d]=Cn.useState(""),x=Cn.useRef(null),m=Cn.useRef(null),_=Cn.useRef(null),p=iu[o.engine],y=p[o.step];Cn.useEffect(()=>{if(x.current)try{const S=new SR(x.current);return m.current=S,f(S.update(lp)),()=>{m.current=null,S.dispose()}}catch{d("浏览器无法创建 WebGL 场景。请启用硬件加速后刷新页面。")}},[]),Cn.useEffect(()=>{m.current&&f(m.current.update(o))},[o]),Cn.useEffect(()=>{if(!i)return;const S=window.setInterval(()=>{e(v=>({...v,step:Math.min(v.step+1,iu[v.engine].length-1)}))},2800);return()=>window.clearInterval(S)},[i]),Cn.useEffect(()=>{i&&o.step===p.length-1&&s(!1)},[i,o.step,p.length]),Cn.useEffect(()=>{const S=v=>{v.target instanceof HTMLInputElement||(v.key==="ArrowRight"&&e(N=>({...N,step:Math.min(N.step+1,iu[N.engine].length-1)})),v.key==="ArrowLeft"&&e(N=>({...N,step:Math.max(N.step-1,0)})))};return window.addEventListener("keydown",S),()=>window.removeEventListener("keydown",S)},[]);const b=S=>{s(!1),e(v=>({...v,engine:S,step:0,footLock:!1}))},E=S=>{s(!1),e(v=>({...v,step:Math.max(0,Math.min(iu[v.engine].length-1,S))}))},A=()=>{s(!1),e(lp)};return K.jsxs("div",{className:"app",children:[K.jsxs("header",{className:"topbar",children:[K.jsxs("div",{className:"brand",children:[K.jsx("span",{className:"brand-mark",children:"R"}),K.jsx("span",{children:"骨骼重定向实验室"}),K.jsx("span",{className:"brand-sub",children:"RETARGET LAB"})]}),K.jsxs("nav",{className:"topnav","aria-label":"页面导航",children:[K.jsx("button",{className:"topnav-active",onClick:()=>window.scrollTo({top:0,behavior:"smooth"}),children:"交互演示"}),K.jsxs("button",{onClick:()=>{var S;return(S=_.current)==null?void 0:S.scrollIntoView({behavior:"smooth"})},children:["机制对照 ",K.jsx(xM,{size:14})]})]}),K.jsxs("a",{className:"source-shortcut",href:"#sources",children:[K.jsx(vM,{size:16})," 研究来源"]})]}),K.jsxs("main",{children:[K.jsxs("section",{className:"workbench","aria-label":"骨骼重定向交互演示",children:[K.jsxs("aside",{className:"steps-panel",children:[K.jsx("div",{className:"panel-kicker",children:"ALGORITHM WALKTHROUGH"}),K.jsxs("h1",{children:["逐步看清",K.jsx("br",{}),"动作如何换骨架"]}),K.jsxs("div",{className:"engine-toggle",role:"group","aria-label":"选择引擎",children:[K.jsx("button",{className:o.engine==="godot"?"selected":"","aria-pressed":o.engine==="godot",onClick:()=>b("godot"),children:"Godot 4.7"}),K.jsx("button",{className:o.engine==="unreal"?"selected":"","aria-pressed":o.engine==="unreal",onClick:()=>b("unreal"),children:"Unreal 5.x"})]}),K.jsxs("div",{className:"topology-control",children:[K.jsx("span",{children:"骨骼数量"}),K.jsxs("div",{className:"topology-toggle",role:"group","aria-label":"选择骨骼数量案例",children:[K.jsx("button",{className:o.topology==="same"?"selected":"","aria-pressed":o.topology==="same",onClick:()=>e(S=>({...S,topology:"same"})),children:"17 → 17"}),K.jsx("button",{className:o.topology==="extra"?"selected":"","aria-pressed":o.topology==="extra",onClick:()=>e(S=>({...S,topology:"extra"})),children:"17 → 18"})]}),K.jsx("small",{children:o.topology==="extra"?"目标左腿增加一节：源链 3 骨 → 目标链 4 骨":"两侧左腿均为 3 骨链"})]}),K.jsxs("div",{className:"step-heading",children:[K.jsx("span",{children:"算法步骤"}),K.jsxs("span",{children:[String(o.step+1).padStart(2,"0")," / ",String(p.length).padStart(2,"0")]})]}),K.jsx("ol",{className:"step-list",children:p.map((S,v)=>K.jsx("li",{children:K.jsxs("button",{className:v===o.step?"step active":v<o.step?"step complete":"step",onClick:()=>E(v),"aria-current":v===o.step?"step":void 0,children:[K.jsx("span",{className:"step-index",children:v<o.step?K.jsx(yM,{size:13}):String(v+1).padStart(2,"0")}),K.jsx("span",{children:S.short}),v===o.step&&K.jsx("span",{className:"step-current-dot"})]})},S.title))}),K.jsxs("div",{className:"step-transport",children:[K.jsx("button",{className:"icon-button",title:"上一步","aria-label":"上一步",onClick:()=>E(o.step-1),disabled:o.step===0,children:K.jsx(gM,{size:18})}),K.jsxs("button",{className:"play-button",onClick:()=>s(!i),"aria-label":i?"暂停自动演示":"自动演示",children:[i?K.jsx(MM,{size:16}):K.jsx(EM,{size:16}),i?"暂停":"自动演示"]}),K.jsx("button",{className:"icon-button",title:"下一步","aria-label":"下一步",onClick:()=>E(o.step+1),disabled:o.step===p.length-1,children:K.jsx(_M,{size:18})})]})]}),K.jsxs("div",{className:"scene-panel",children:[K.jsxs("div",{className:"scene-toolbar",children:[K.jsxs("div",{className:"scene-title",children:[K.jsx("span",{className:"live-dot"})," 三维骨架 · ",o.engine==="godot"?"局部 Pose 传递":"IK Retargeter 操作栈"]}),K.jsx("button",{className:"scene-reset",onClick:A,title:"重置演示","aria-label":"重置演示",children:K.jsx(TM,{size:17})})]}),K.jsx("div",{className:"canvas-host",ref:x,children:h&&K.jsx("div",{className:"canvas-error",children:h})}),K.jsxs("div",{className:"scene-labels","aria-hidden":"true",children:[K.jsxs("div",{children:[K.jsx("span",{className:"source-mark"}),"源骨架 ",K.jsx("small",{children:"Source"})]}),K.jsxs("div",{children:[K.jsx("span",{className:"target-mark"}),"目标骨架 ",K.jsx("small",{children:"Target"})]})]}),K.jsxs("div",{className:"scene-footer",children:[K.jsx("span",{children:"拖动旋转视角 · 滚轮缩放"}),K.jsxs("span",{children:[K.jsx(bM,{size:13})," 实时骨骼层级"]})]})]}),K.jsxs("aside",{className:"detail-panel",children:[K.jsxs("div",{className:"detail-topline",children:[K.jsx("span",{children:o.engine==="godot"?"GODOT / MODIFIER":"UNREAL / IK RETARGETER"}),K.jsxs("span",{children:["STEP ",String(o.step+1).padStart(2,"0")]})]}),K.jsx("h2",{children:y.title}),K.jsx("p",{className:"detail-copy",children:y.body}),K.jsxs("div",{className:"formula-block",children:[K.jsx("span",{children:"关键关系 / 教学简化"}),K.jsx("code",{children:y.formula})]}),K.jsxs("div",{className:"observation",children:[K.jsx("span",{className:"observation-line"}),K.jsx("p",{children:y.observation})]}),o.topology==="extra"&&K.jsxs("div",{className:"topology-result",children:[K.jsx("strong",{children:"异构左腿"}),K.jsx("span",{children:o.engine==="godot"?"额外骨无源配对，局部 Pose 保持 Rest，但仍继承父骨变换。":"额外骨进入目标链，FK 将动作沿 4 骨链分配；IK 求解实际末端。"})]}),K.jsxs("div",{className:"controls",children:[K.jsx("div",{className:"controls-title",children:"场景参数"}),K.jsxs("label",{className:"slider-label",htmlFor:"pose",children:[K.jsx("span",{children:"跨步转体 · 动作采样"}),K.jsxs("strong",{children:[Math.round(o.phase*100),"%"]})]}),K.jsx("input",{id:"pose",type:"range",min:"0",max:"100",value:Math.round(o.phase*100),onChange:S=>e(v=>({...v,phase:Number(S.target.value)/100}))}),K.jsxs("label",{className:"slider-label",htmlFor:"legs",children:[K.jsx("span",{children:"目标腿长 / 源腿长"}),K.jsxs("strong",{children:[Math.round(o.legRatio*100),"%"]})]}),K.jsx("input",{id:"legs",type:"range",min:"60",max:"100",value:Math.round(o.legRatio*100),onChange:S=>e(v=>({...v,legRatio:Number(S.target.value)/100}))}),K.jsxs("label",{className:"check-row",children:[K.jsx("input",{type:"checkbox",checked:o.showRest,onChange:S=>e(v=>({...v,showRest:S.target.checked}))}),K.jsx("span",{children:"显示参考姿态"})]}),o.engine==="unreal"&&K.jsxs("label",{className:"check-row",children:[K.jsx("input",{type:"checkbox",checked:o.footLock,onChange:S=>e(v=>({...v,footLock:S.target.checked}))}),K.jsx("span",{children:"演示脚底接触约束"})]})]}),K.jsxs("div",{className:"metric",children:[K.jsx("span",{children:"目标脚踝距地面"}),K.jsxs("strong",{children:[l.toFixed(1)," ",K.jsx("small",{children:"cm"})]}),K.jsx("p",{children:"当前姿态的几何读数；脚离地时不代表滑步误差。"})]})]})]}),K.jsxs("section",{className:"comparison",ref:_,children:[K.jsxs("div",{className:"section-heading",children:[K.jsxs("div",{children:[K.jsx("span",{className:"section-no",children:"02 / COMPARISON"}),K.jsx("h2",{children:"机制对照"})]}),K.jsx("p",{children:"同样是“把动作给另一副骨架”，两套系统选择了不同的处理粒度。"})]}),K.jsxs("div",{className:"comparison-table",role:"table","aria-label":"Godot 与 Unreal 骨骼重定向机制对照",children:[K.jsxs("div",{className:"compare-row compare-head",role:"row",children:[K.jsx("span",{role:"columnheader",children:"维度"}),K.jsx("span",{role:"columnheader",children:"Godot 4.7"}),K.jsx("span",{role:"columnheader",children:"Unreal IK Retargeter"})]}),K.jsxs("div",{className:"compare-row",role:"row",children:[K.jsx("strong",{role:"cell",children:"对应单位"}),K.jsx("span",{role:"cell",children:"运行时按 SkeletonProfile 骨名配对；18 骨目标中的额外骨不获源 Pose。"}),K.jsx("span",{role:"cell",children:"IK Rig 按链映射；示例可将源左腿 3 骨链传给目标 4 骨链。"})]}),K.jsxs("div",{className:"compare-row",role:"row",children:[K.jsx("strong",{role:"cell",children:"参考姿态"}),K.jsx("span",{role:"cell",children:"源/目标 Bone Rest 和父骨全局 Rest 参与坐标转换；导入器可重写轴向和轮廓。"}),K.jsx("span",{role:"cell",children:"源/目标 Retarget Pose 校准 A/T Pose 与骨轴；各操作以其为基准。"})]}),K.jsxs("div",{className:"compare-row",role:"row",children:[K.jsx("strong",{role:"cell",children:"平移与比例"}),K.jsx("span",{role:"cell",children:"局部位置增量乘目标/源 motion_scale；全局模式直接传递模型空间位置。"}),K.jsx("span",{role:"cell",children:"Pelvis Motion 按身高处理髋运动；FK/IK 链和 Root Motion 各有可调设置。"})]}),K.jsxs("div",{className:"compare-row",role:"row",children:[K.jsx("strong",{role:"cell",children:"脚与手接触"}),K.jsx("span",{role:"cell",children:"Modifier 本身不求解 IK；需要另接 IK、约束或动画修正。"}),K.jsx("span",{role:"cell",children:"可选 IK Goal 与求解器可追踪末端；脚锁仍要有明确的接触目标和配置。"})]}),K.jsxs("div",{className:"compare-row",role:"row",children:[K.jsx("strong",{role:"cell",children:"工作阶段"}),K.jsx("span",{role:"cell",children:"导入期统一动画资源，或在 Skeleton 更新中逐帧重写子骨架 Pose。"}),K.jsx("span",{role:"cell",children:"可在编辑器烘焙新动画，也可用 Retarget Pose From Mesh 运行时传递。"})]})]}),K.jsxs("div",{className:"math-notes",children:[K.jsxs("div",{children:[K.jsx("span",{className:"analysis-id",children:"GODOT / LOCAL POSE"}),K.jsx("h3",{children:"Rest 空间的真正换算"}),K.jsx("p",{children:"设 B 为骨骼局部 Basis，P 为父骨全局 Rest Basis，R 为骨骼局部 Rest Basis；下标 s/t 分别代表源/目标。Godot 4.7 的局部模式缓存前后变换，再逐骨写入："}),K.jsxs("code",{children:["Bₜ = Pₜ⁻¹ Pₛ Bₛ Rₛ⁻¹ Pₛ⁻¹ Pₜ Rₜ",K.jsx("br",{}),"pₜ = rₜ + Pₜ⁻¹ Pₛ (pₛ − rₛ) · mₜ / mₛ"]}),K.jsx("p",{children:"这也说明同名骨若 Rest 轴向不同，直接复制局部四元数会失败。"})]}),K.jsxs("div",{children:[K.jsx("span",{className:"analysis-id",children:"UNREAL / OP STACK"}),K.jsx("h3",{children:"链参数与末端约束"}),K.jsx("p",{children:"UE 的处理器以源全局 Pose 为输入，先生成两侧基姿态，再顺序运行配置的 Retarget Ops。FK 的插值模式按链上归一化参数采样源变换；IK Goal 用源链方向和归一化伸展率得到目标末端位置。"}),K.jsxs("code",{children:["source global Pose → pelvis → FK(u)",K.jsx("br",{}),"→ optional Goal / IK solve → root motion"]}),K.jsx("p",{children:"操作栈可重排或增删，因此这里展示的是常见教学顺序，而非所有项目的固定算法。"})]})]}),K.jsxs("div",{className:"analysis-grid",children:[K.jsxs("div",{children:[K.jsx("span",{className:"analysis-id",children:"01 / WHY GODOT"}),K.jsx("h3",{children:"资源共享优先"}),K.jsx("p",{children:"Godot 的导入工作流先解决骨名、Rest 和动画轨道的一致性；运行时 Modifier 按骨复用已有姿态。目标多出的骨保持局部 Rest，不会自动取得插值动作。这与 Skeleton3D、AnimationLibrary 和场景节点的组合方式相符；接触质量通常要由后续约束负责。"})]}),K.jsxs("div",{children:[K.jsx("span",{className:"analysis-id",children:"02 / WHY UNREAL"}),K.jsx("h3",{children:"异构角色优先"}),K.jsx("p",{children:"Unreal 的 IK Retargeter 把 pelvis、FK 链、IK Goal 和 Root Motion 分开；链参数让 3 骨源链可以驱动 4 骨目标链。代价是作者必须定义链、校准姿态并判断何时需要 IK；“启用 retarget”并不自动修好所有接触。"})]}),K.jsxs("div",{children:[K.jsx("span",{className:"analysis-id",children:"03 / ALSO IMPORTANT"}),K.jsx("h3",{children:"别混淆另一条路径"}),K.jsx("p",{children:"Unreal 还有同 Skeleton 的传统平移重定向，可按骨选择 Animation、Skeleton、AnimationScaled 等模式；它与这里演示的 IK Rig 跨骨架算法不是同一条流水线。Godot 也有导入时 Rest 标准化，不能等同于运行时 Modifier。"})]})]}),K.jsx("p",{className:"analysis-note",children:"“为什么采用这些取舍”是基于两者公开工作流的工程分析，并非引擎团队对设计动机的官方声明。三维动画使用简化人形、两段腿解析 IK 与三段腿 CCD，便于观察机制；不宣称逐位复现引擎求解器。"})]}),K.jsxs("section",{className:"sources",id:"sources",children:[K.jsxs("div",{className:"section-heading",children:[K.jsxs("div",{children:[K.jsx("span",{className:"section-no",children:"03 / REFERENCES"}),K.jsx("h2",{children:"研究来源"})]}),K.jsx("p",{children:"文档以 Godot 4.7 与 Unreal 5.x IK Rig 为准；Unreal 细节另对照本机 5.9 源码。"})]}),K.jsx("div",{className:"source-grid",children:AM.map(S=>K.jsxs("a",{href:S.url,target:"_blank",rel:"noreferrer",children:[K.jsx("span",{children:S.label}),K.jsx(SM,{size:15})]},S.url))})]})]}),K.jsxs("footer",{children:[K.jsx("span",{children:"RETARGET LAB"}),K.jsx("span",{children:"Godot 4.7 · Unreal Engine 5.x · Three.js 骨骼演示"})]})]})}hM.createRoot(document.getElementById("root")).render(K.jsx(aM.StrictMode,{children:K.jsx(bR,{})}));
