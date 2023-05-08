"use strict";(self.webpackChunkjs_sdk_tutorials=self.webpackChunkjs_sdk_tutorials||[]).push([[89262],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>y});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var o=n.createContext({}),s=function(e){var t=n.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},c=function(e){var t=s(e.components);return n.createElement(o.Provider,{value:t},e.children)},u="mdxType",k={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=s(r),d=a,y=u["".concat(o,".").concat(d)]||u[d]||k[d]||i;return r?n.createElement(y,p(p({ref:t},c),{},{components:r})):n.createElement(y,p({ref:t},c))}));function y(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,p=new Array(i);p[0]=d;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l[u]="string"==typeof e?e:a,p[1]=l;for(var s=2;s<i;s++)p[s]=r[s];return n.createElement.apply(null,p)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},49805:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>o,contentTitle:()=>p,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var n=r(87462),a=(r(67294),r(3905));const i={id:"js-sdk.keypath",title:"keyPath() function",hide_title:!0},p=void 0,l={unversionedId:"api/js-sdk.keypath",id:"api/js-sdk.keypath",title:"keyPath() function",description:"keyPath() function",source:"@site/docs/api/js-sdk.keypath.md",sourceDirName:"api",slug:"/api/js-sdk.keypath",permalink:"/js-sdk-tutorials/docs/api/js-sdk.keypath",draft:!1,tags:[],version:"current",frontMatter:{id:"js-sdk.keypath",title:"keyPath() function",hide_title:!0},sidebar:"api",previous:{title:"JWSPacker.unpack() method",permalink:"/js-sdk-tutorials/docs/api/js-sdk.jwspacker.unpack"},next:{title:"KMS.createKeyFromSeed() method",permalink:"/js-sdk-tutorials/docs/api/js-sdk.kms.createkeyfromseed"}},o={},s=[{value:"keyPath() function",id:"keypath-function",level:2},{value:"Parameters",id:"parameters",level:2}],c={toc:s};function u(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"keypath-function"},"keyPath() function"),(0,a.kt)("p",null,"builds key path"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Signature:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"export declare function keyPath(keyType: KmsKeyType, keyID: string): string;\n")),(0,a.kt)("h2",{id:"parameters"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"keyType"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"/js-sdk-tutorials/docs/api/js-sdk.kmskeytype"},"KmsKeyType")),(0,a.kt)("td",{parentName:"tr",align:null},"key type")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"keyID"),(0,a.kt)("td",{parentName:"tr",align:null},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"key id")))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Returns:")),(0,a.kt)("p",null,"string"),(0,a.kt)("p",null,"string path"))}u.isMDXComponent=!0}}]);