"use strict";(self.webpackChunkjs_sdk_tutorials=self.webpackChunkjs_sdk_tutorials||[]).push([[25883],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>y});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function p(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?p(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},p=Object.keys(e);for(a=0;a<p.length;a++)r=p[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(a=0;a<p.length;a++)r=p[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var o=a.createContext({}),c=function(e){var t=a.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=c(e.components);return a.createElement(o.Provider,{value:t},e.children)},l="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},f=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,p=e.originalType,o=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),l=c(r),f=n,y=l["".concat(o,".").concat(f)]||l[f]||d[f]||p;return r?a.createElement(y,i(i({ref:t},s),{},{components:r})):a.createElement(y,i({ref:t},s))}));function y(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var p=r.length,i=new Array(p);i[0]=f;var u={};for(var o in t)hasOwnProperty.call(t,o)&&(u[o]=t[o]);u.originalType=e,u[l]="string"==typeof e?e:n,i[1]=u;for(var c=2;c<p;c++)i[c]=r[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}f.displayName="MDXCreateElement"},16160:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>l,frontMatter:()=>p,metadata:()=>u,toc:()=>c});var a=r(87462),n=(r(67294),r(3905));const p={id:"js-sdk.authdatapreparefunc",title:"AuthDataPrepareFunc type",hide_title:!0},i=void 0,u={unversionedId:"api/js-sdk.authdatapreparefunc",id:"api/js-sdk.authdatapreparefunc",title:"AuthDataPrepareFunc type",description:"AuthDataPrepareFunc type",source:"@site/docs/api/js-sdk.authdatapreparefunc.md",sourceDirName:"api",slug:"/api/js-sdk.authdatapreparefunc",permalink:"/docs/api/js-sdk.authdatapreparefunc",draft:!1,tags:[],version:"current",frontMatter:{id:"js-sdk.authdatapreparefunc",title:"AuthDataPrepareFunc type",hide_title:!0},sidebar:"api",previous:{title:"AtomicQuerySigV2PubSignals.value property",permalink:"/docs/api/js-sdk.atomicquerysigv2pubsignals.value"},next:{title:"AuthHandler.(constructor)",permalink:"/docs/api/js-sdk.authhandler._constructor_"}},o={},c=[{value:"AuthDataPrepareFunc type",id:"authdatapreparefunc-type",level:2}],s={toc:c};function l(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"authdatapreparefunc-type"},"AuthDataPrepareFunc type"),(0,n.kt)("p",null,"signature of auth signals function preparer"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Signature:")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-typescript"},"export type AuthDataPrepareFunc = (hash: Uint8Array, did: DID, profileNonce: number, circuitId: CircuitId) => Promise<Uint8Array>;\n")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"References:")," ",(0,n.kt)("a",{parentName:"p",href:"/docs/api/js-sdk.circuitid"},"CircuitId")))}l.isMDXComponent=!0}}]);