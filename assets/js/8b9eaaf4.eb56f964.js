"use strict";(self.webpackChunkjs_sdk_tutorials=self.webpackChunkjs_sdk_tutorials||[]).push([[10537],{3905:(e,r,t)=>{t.d(r,{Zo:()=>l,kt:()=>y});var n=t(67294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function p(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=n.createContext({}),d=function(e){var r=n.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):o(o({},r),e)),t},l=function(e){var r=d(e.components);return n.createElement(s.Provider,{value:r},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},u=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),m=d(t),u=a,y=m["".concat(s,".").concat(u)]||m[u]||c[u]||i;return t?n.createElement(y,o(o({ref:r},l),{},{components:t})):n.createElement(y,o({ref:r},l))}));function y(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=u;var p={};for(var s in r)hasOwnProperty.call(r,s)&&(p[s]=r[s]);p.originalType=e,p[m]="string"==typeof e?e:a,o[1]=p;for(var d=2;d<i;d++)o[d]=t[d];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}u.displayName="MDXCreateElement"},89602:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>s,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>p,toc:()=>d});var n=t(87462),a=(t(67294),t(3905));const i={id:"js-sdk.ikeyprovider.newprivatekeyfromseed",title:"IKeyProvider.newPrivateKeyFromSeed() method",hide_title:!0},o=void 0,p={unversionedId:"api/js-sdk.ikeyprovider.newprivatekeyfromseed",id:"api/js-sdk.ikeyprovider.newprivatekeyfromseed",title:"IKeyProvider.newPrivateKeyFromSeed() method",description:"IKeyProvider.newPrivateKeyFromSeed() method",source:"@site/docs/api/js-sdk.ikeyprovider.newprivatekeyfromseed.md",sourceDirName:"api",slug:"/api/js-sdk.ikeyprovider.newprivatekeyfromseed",permalink:"/js-sdk-tutorials/docs/api/js-sdk.ikeyprovider.newprivatekeyfromseed",draft:!1,tags:[],version:"current",frontMatter:{id:"js-sdk.ikeyprovider.newprivatekeyfromseed",title:"IKeyProvider.newPrivateKeyFromSeed() method",hide_title:!0},sidebar:"api",previous:{title:"IKeyProvider interface",permalink:"/js-sdk-tutorials/docs/api/js-sdk.ikeyprovider"},next:{title:"IKeyProvider.publicKey() method",permalink:"/js-sdk-tutorials/docs/api/js-sdk.ikeyprovider.publickey"}},s={},d=[{value:"IKeyProvider.newPrivateKeyFromSeed() method",id:"ikeyprovidernewprivatekeyfromseed-method",level:2},{value:"Parameters",id:"parameters",level:2}],l={toc:d};function m(e){let{components:r,...t}=e;return(0,a.kt)("wrapper",(0,n.Z)({},l,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"ikeyprovidernewprivatekeyfromseed-method"},"IKeyProvider.newPrivateKeyFromSeed() method"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"This API is provided as a preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.")),(0,a.kt)("p",null,"creates new key pair from given seed"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Signature:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"newPrivateKeyFromSeed(seed: Uint8Array): Promise<KmsKeyId>;\n")),(0,a.kt)("h2",{id:"parameters"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"seed"),(0,a.kt)("td",{parentName:"tr",align:null},"Uint8Array"),(0,a.kt)("td",{parentName:"tr",align:null},"seed")))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Returns:")),(0,a.kt)("p",null,"Promise","<",(0,a.kt)("a",{parentName:"p",href:"/js-sdk-tutorials/docs/api/js-sdk.kmskeyid"},"KmsKeyId"),">"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Promise<KmsKeyId>")))}m.isMDXComponent=!0}}]);