"use strict";(self.webpackChunkjs_sdk_tutorials=self.webpackChunkjs_sdk_tutorials||[]).push([[1260],{3905:(t,e,r)=>{r.d(e,{Zo:()=>c,kt:()=>m});var a=r(67294);function n(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function l(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,a)}return r}function o(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?l(Object(r),!0).forEach((function(e){n(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function i(t,e){if(null==t)return{};var r,a,n=function(t,e){if(null==t)return{};var r,a,n={},l=Object.keys(t);for(a=0;a<l.length;a++)r=l[a],e.indexOf(r)>=0||(n[r]=t[r]);return n}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)r=l[a],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}var s=a.createContext({}),p=function(t){var e=a.useContext(s),r=e;return t&&(r="function"==typeof t?t(e):o(o({},e),t)),r},c=function(t){var e=p(t.components);return a.createElement(s.Provider,{value:e},t.children)},u="mdxType",d={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},f=a.forwardRef((function(t,e){var r=t.components,n=t.mdxType,l=t.originalType,s=t.parentName,c=i(t,["components","mdxType","originalType","parentName"]),u=p(r),f=n,m=u["".concat(s,".").concat(f)]||u[f]||d[f]||l;return r?a.createElement(m,o(o({ref:e},c),{},{components:r})):a.createElement(m,o({ref:e},c))}));function m(t,e){var r=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var l=r.length,o=new Array(l);o[0]=f;var i={};for(var s in e)hasOwnProperty.call(e,s)&&(i[s]=e[s]);i.originalType=t,i[u]="string"==typeof t?t:n,o[1]=i;for(var p=2;p<l;p++)o[p]=r[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}f.displayName="MDXCreateElement"},4304:(t,e,r)=>{r.r(e),r.d(e,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>l,metadata:()=>i,toc:()=>p});var a=r(87462),n=(r(67294),r(3905));const l={id:"js-sdk.datafillsslot",title:"dataFillsSlot() function",hide_title:!0},o=void 0,i={unversionedId:"api/js-sdk.datafillsslot",id:"api/js-sdk.datafillsslot",title:"dataFillsSlot() function",description:"dataFillsSlot() function",source:"@site/docs/api/js-sdk.datafillsslot.md",sourceDirName:"api",slug:"/api/js-sdk.datafillsslot",permalink:"/docs/api/js-sdk.datafillsslot",draft:!1,tags:[],version:"current",frontMatter:{id:"js-sdk.datafillsslot",title:"dataFillsSlot() function",hide_title:!0},sidebar:"api",previous:{title:"CredentialWallet.saveAll() method",permalink:"/docs/api/js-sdk.credentialwallet.saveall"},next:{title:"DataPrepareHandlerFunc.(constructor)",permalink:"/docs/api/js-sdk.datapreparehandlerfunc._constructor_"}},s={},p=[{value:"dataFillsSlot() function",id:"datafillsslot-function",level:2},{value:"Parameters",id:"parameters",level:2}],c={toc:p};function u(t){let{components:e,...r}=t;return(0,n.kt)("wrapper",(0,a.Z)({},c,r,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"datafillsslot-function"},"dataFillsSlot() function"),(0,n.kt)("p",null,"checks if data fills into slot capacity ()"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Signature:")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-typescript"},"export declare function dataFillsSlot(slot: Uint8Array, newData: Uint8Array): boolean;\n")),(0,n.kt)("h2",{id:"parameters"},"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"slot"),(0,n.kt)("td",{parentName:"tr",align:null},"Uint8Array"),(0,n.kt)("td",{parentName:"tr",align:null},"current slot data")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"newData"),(0,n.kt)("td",{parentName:"tr",align:null},"Uint8Array"),(0,n.kt)("td",{parentName:"tr",align:null},"new slot data")))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Returns:")),(0,n.kt)("p",null,"boolean"),(0,n.kt)("p",null,"boolean"))}u.isMDXComponent=!0}}]);