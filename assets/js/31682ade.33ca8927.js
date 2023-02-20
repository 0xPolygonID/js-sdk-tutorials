"use strict";(self.webpackChunkjs_sdk_tutorials=self.webpackChunkjs_sdk_tutorials||[]).push([[28880],{3905:(e,a,t)=>{t.d(a,{Zo:()=>l,kt:()=>m});var n=t(67294);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function p(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function c(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?p(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):p(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function o(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},p=Object.keys(e);for(n=0;n<p.length;n++)t=p[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(n=0;n<p.length;n++)t=p[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var i=n.createContext({}),s=function(e){var a=n.useContext(i),t=a;return e&&(t="function"==typeof e?e(a):c(c({},a),e)),t},l=function(e){var a=s(e.components);return n.createElement(i.Provider,{value:a},e.children)},u="mdxType",k={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},d=n.forwardRef((function(e,a){var t=e.components,r=e.mdxType,p=e.originalType,i=e.parentName,l=o(e,["components","mdxType","originalType","parentName"]),u=s(t),d=r,m=u["".concat(i,".").concat(d)]||u[d]||k[d]||p;return t?n.createElement(m,c(c({ref:a},l),{},{components:t})):n.createElement(m,c({ref:a},l))}));function m(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var p=t.length,c=new Array(p);c[0]=d;var o={};for(var i in a)hasOwnProperty.call(a,i)&&(o[i]=a[i]);o.originalType=e,o[u]="string"==typeof e?e:r,c[1]=o;for(var s=2;s<p;s++)c[s]=t[s];return n.createElement.apply(null,c)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},27827:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>i,contentTitle:()=>c,default:()=>u,frontMatter:()=>p,metadata:()=>o,toc:()=>s});var n=t(87462),r=(t(67294),t(3905));const p={id:"js-sdk.packagemanager.unpack",title:"PackageManager.unpack() method",hide_title:!0},c=void 0,o={unversionedId:"api/js-sdk.packagemanager.unpack",id:"api/js-sdk.packagemanager.unpack",title:"PackageManager.unpack() method",description:"PackageManager.unpack() method",source:"@site/docs/api/js-sdk.packagemanager.unpack.md",sourceDirName:"api",slug:"/api/js-sdk.packagemanager.unpack",permalink:"/docs/api/js-sdk.packagemanager.unpack",draft:!1,tags:[],version:"current",frontMatter:{id:"js-sdk.packagemanager.unpack",title:"PackageManager.unpack() method",hide_title:!0},sidebar:"api",previous:{title:"PackageManager.registerPackers() method",permalink:"/docs/api/js-sdk.packagemanager.registerpackers"},next:{title:"PackageManager.unpackWithType() method",permalink:"/docs/api/js-sdk.packagemanager.unpackwithtype"}},i={},s=[{value:"PackageManager.unpack() method",id:"packagemanagerunpack-method",level:2},{value:"Parameters",id:"parameters",level:2}],l={toc:s};function u(e){let{components:a,...t}=e;return(0,r.kt)("wrapper",(0,n.Z)({},l,t,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"packagemanagerunpack-method"},"PackageManager.unpack() method"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"This API is provided as a preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.")),(0,r.kt)("p",null,"unpacks packed envelope to basic protocol message and returns media type of the envelope"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Signature:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"unpack(envelope: Uint8Array): Promise<{\n        unpackedMessage: BasicMessage;\n        unpackedMediaType: MediaType;\n    }>;\n")),(0,r.kt)("h2",{id:"parameters"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"envelope"),(0,r.kt)("td",{parentName:"tr",align:null},"Uint8Array"),(0,r.kt)("td",{parentName:"tr",align:null},"bytes envelope")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Returns:")),(0,r.kt)("p",null,"Promise","<","{ unpackedMessage: ",(0,r.kt)("a",{parentName:"p",href:"/docs/api/js-sdk.basicmessage"},"BasicMessage"),"; unpackedMediaType: ",(0,r.kt)("a",{parentName:"p",href:"/docs/api/js-sdk.constants.mediatype"},"MediaType"),"; }",">"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Promise<{ unpackedMessage: BasicMessage; unpackedMediaType: MediaType }")))}u.isMDXComponent=!0}}]);