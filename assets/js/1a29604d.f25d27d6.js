"use strict";(self.webpackChunkpolygonid_js_sdk_website=self.webpackChunkpolygonid_js_sdk_website||[]).push([[6047],{3905:(t,e,n)=>{n.d(e,{Zo:()=>d,kt:()=>m});var r=n(67294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},l=Object.keys(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var s=r.createContext({}),p=function(t){var e=r.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},d=function(t){var e=p(t.components);return r.createElement(s.Provider,{value:e},t.children)},c="mdxType",u={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},f=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,l=t.originalType,s=t.parentName,d=i(t,["components","mdxType","originalType","parentName"]),c=p(n),f=a,m=c["".concat(s,".").concat(f)]||c[f]||u[f]||l;return n?r.createElement(m,o(o({ref:e},d),{},{components:n})):r.createElement(m,o({ref:e},d))}));function m(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var l=n.length,o=new Array(l);o[0]=f;var i={};for(var s in e)hasOwnProperty.call(e,s)&&(i[s]=e[s]);i.originalType=t,i[c]="string"==typeof t?t:a,o[1]=i;for(var p=2;p<l;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},84873:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>s,contentTitle:()=>o,default:()=>c,frontMatter:()=>l,metadata:()=>i,toc:()=>p});var r=n(87462),a=(n(67294),n(3905));const l={id:"polygonid-js-sdk.datafillsslot",title:"dataFillsSlot() function",hide_title:!0},o=void 0,i={unversionedId:"api/polygonid-js-sdk.datafillsslot",id:"api/polygonid-js-sdk.datafillsslot",title:"dataFillsSlot() function",description:"dataFillsSlot() function",source:"@site/docs/api/polygonid-js-sdk.datafillsslot.md",sourceDirName:"api",slug:"/api/polygonid-js-sdk.datafillsslot",permalink:"/polygonid-js-sdk-website/docs/api/polygonid-js-sdk.datafillsslot",draft:!1,tags:[],version:"current",frontMatter:{id:"polygonid-js-sdk.datafillsslot",title:"dataFillsSlot() function",hide_title:!0},sidebar:"api",previous:{title:"CredentialWallet.saveAll() method",permalink:"/polygonid-js-sdk-website/docs/api/polygonid-js-sdk.credentialwallet.saveall"},next:{title:"DataPrepareHandlerFunc.(constructor)",permalink:"/polygonid-js-sdk-website/docs/api/polygonid-js-sdk.datapreparehandlerfunc._constructor_"}},s={},p=[{value:"dataFillsSlot() function",id:"datafillsslot-function",level:2},{value:"Parameters",id:"parameters",level:2}],d={toc:p};function c(t){let{components:e,...n}=t;return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"datafillsslot-function"},"dataFillsSlot() function"),(0,a.kt)("p",null,"checks if data fills into slot capacity ()"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Signature:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"export declare function dataFillsSlot(slot: Uint8Array, newData: Uint8Array): boolean;\n")),(0,a.kt)("h2",{id:"parameters"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"slot"),(0,a.kt)("td",{parentName:"tr",align:null},"Uint8Array"),(0,a.kt)("td",{parentName:"tr",align:null},"current slot data")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"newData"),(0,a.kt)("td",{parentName:"tr",align:null},"Uint8Array"),(0,a.kt)("td",{parentName:"tr",align:null},"new slot data")))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Returns:")),(0,a.kt)("p",null,"boolean"),(0,a.kt)("p",null,"boolean"))}c.isMDXComponent=!0}}]);