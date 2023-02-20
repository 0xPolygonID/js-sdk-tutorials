"use strict";(self.webpackChunkjs_sdk_tutorials=self.webpackChunkjs_sdk_tutorials||[]).push([[72390],{3905:(e,r,t)=>{t.d(r,{Zo:()=>l,kt:()=>v});var n=t(67294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function p(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var d=n.createContext({}),s=function(e){var r=n.useContext(d),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},l=function(e){var r=s(e.components);return n.createElement(d.Provider,{value:r},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},u=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,o=e.originalType,d=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),m=s(t),u=a,v=m["".concat(d,".").concat(u)]||m[u]||c[u]||o;return t?n.createElement(v,i(i({ref:r},l),{},{components:t})):n.createElement(v,i({ref:r},l))}));function v(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=u;var p={};for(var d in r)hasOwnProperty.call(r,d)&&(p[d]=r[d]);p.originalType=e,p[m]="string"==typeof e?e:a,i[1]=p;for(var s=2;s<o;s++)i[s]=t[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}u.displayName="MDXCreateElement"},33714:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>d,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>p,toc:()=>s});var n=t(87462),a=(t(67294),t(3905));const o={id:"js-sdk.bjjprovider.newprivatekeyfromseed",title:"BjjProvider.newPrivateKeyFromSeed() method",hide_title:!0},i=void 0,p={unversionedId:"api/js-sdk.bjjprovider.newprivatekeyfromseed",id:"api/js-sdk.bjjprovider.newprivatekeyfromseed",title:"BjjProvider.newPrivateKeyFromSeed() method",description:"BjjProvider.newPrivateKeyFromSeed() method",source:"@site/docs/api/js-sdk.bjjprovider.newprivatekeyfromseed.md",sourceDirName:"api",slug:"/api/js-sdk.bjjprovider.newprivatekeyfromseed",permalink:"/docs/api/js-sdk.bjjprovider.newprivatekeyfromseed",draft:!1,tags:[],version:"current",frontMatter:{id:"js-sdk.bjjprovider.newprivatekeyfromseed",title:"BjjProvider.newPrivateKeyFromSeed() method",hide_title:!0},sidebar:"api",previous:{title:"BjjProvider class",permalink:"/docs/api/js-sdk.bjjprovider"},next:{title:"BjjProvider.publicKey() method",permalink:"/docs/api/js-sdk.bjjprovider.publickey"}},d={},s=[{value:"BjjProvider.newPrivateKeyFromSeed() method",id:"bjjprovidernewprivatekeyfromseed-method",level:2},{value:"Parameters",id:"parameters",level:2}],l={toc:s};function m(e){let{components:r,...t}=e;return(0,a.kt)("wrapper",(0,n.Z)({},l,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"bjjprovidernewprivatekeyfromseed-method"},"BjjProvider.newPrivateKeyFromSeed() method"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"This API is provided as a preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.")),(0,a.kt)("p",null,"generates a baby jub jub key from a seed phrase"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Signature:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"newPrivateKeyFromSeed(seed: Uint8Array): Promise<KmsKeyId>;\n")),(0,a.kt)("h2",{id:"parameters"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"seed"),(0,a.kt)("td",{parentName:"tr",align:null},"Uint8Array"),(0,a.kt)("td",{parentName:"tr",align:null},"byte array seed")))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Returns:")),(0,a.kt)("p",null,"Promise","<",(0,a.kt)("a",{parentName:"p",href:"/docs/api/js-sdk.kmskeyid"},"KmsKeyId"),">"),(0,a.kt)("p",null,"kms key identifier"))}m.isMDXComponent=!0}}]);