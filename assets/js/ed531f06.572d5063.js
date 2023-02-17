"use strict";(self.webpackChunkpolygonid_js_sdk_website=self.webpackChunkpolygonid_js_sdk_website||[]).push([[25052],{3905:(t,e,o)=>{o.d(e,{Zo:()=>d,kt:()=>m});var r=o(67294);function n(t,e,o){return e in t?Object.defineProperty(t,e,{value:o,enumerable:!0,configurable:!0,writable:!0}):t[e]=o,t}function a(t,e){var o=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),o.push.apply(o,r)}return o}function i(t){for(var e=1;e<arguments.length;e++){var o=null!=arguments[e]?arguments[e]:{};e%2?a(Object(o),!0).forEach((function(e){n(t,e,o[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(o,e))}))}return t}function s(t,e){if(null==t)return{};var o,r,n=function(t,e){if(null==t)return{};var o,r,n={},a=Object.keys(t);for(r=0;r<a.length;r++)o=a[r],e.indexOf(o)>=0||(n[o]=t[o]);return n}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(r=0;r<a.length;r++)o=a[r],e.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(t,o)&&(n[o]=t[o])}return n}var l=r.createContext({}),p=function(t){var e=r.useContext(l),o=e;return t&&(o="function"==typeof t?t(e):i(i({},e),t)),o},d=function(t){var e=p(t.components);return r.createElement(l.Provider,{value:e},t.children)},g="mdxType",c={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},u=r.forwardRef((function(t,e){var o=t.components,n=t.mdxType,a=t.originalType,l=t.parentName,d=s(t,["components","mdxType","originalType","parentName"]),g=p(o),u=n,m=g["".concat(l,".").concat(u)]||g[u]||c[u]||a;return o?r.createElement(m,i(i({ref:e},d),{},{components:o})):r.createElement(m,i({ref:e},d))}));function m(t,e){var o=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var a=o.length,i=new Array(a);i[0]=u;var s={};for(var l in e)hasOwnProperty.call(e,l)&&(s[l]=e[l]);s.originalType=t,s[g]="string"==typeof t?t:n,i[1]=s;for(var p=2;p<a;p++)i[p]=o[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,o)}u.displayName="MDXCreateElement"},57194:(t,e,o)=>{o.r(e),o.d(e,{assets:()=>l,contentTitle:()=>i,default:()=>g,frontMatter:()=>a,metadata:()=>s,toc:()=>p});var r=o(87462),n=(o(67294),o(3905));const a={id:"polygonid-js-sdk.ethstatestorage.getgistrootinfo",title:"EthStateStorage.getGISTRootInfo() method",hide_title:!0},i=void 0,s={unversionedId:"api/polygonid-js-sdk.ethstatestorage.getgistrootinfo",id:"api/polygonid-js-sdk.ethstatestorage.getgistrootinfo",title:"EthStateStorage.getGISTRootInfo() method",description:"EthStateStorage.getGISTRootInfo() method",source:"@site/docs/api/polygonid-js-sdk.ethstatestorage.getgistrootinfo.md",sourceDirName:"api",slug:"/api/polygonid-js-sdk.ethstatestorage.getgistrootinfo",permalink:"/polygonid-js-sdk-website/docs/api/polygonid-js-sdk.ethstatestorage.getgistrootinfo",draft:!1,tags:[],version:"current",frontMatter:{id:"polygonid-js-sdk.ethstatestorage.getgistrootinfo",title:"EthStateStorage.getGISTRootInfo() method",hide_title:!0},sidebar:"api",previous:{title:"EthStateStorage.getGISTProof() method",permalink:"/polygonid-js-sdk-website/docs/api/polygonid-js-sdk.ethstatestorage.getgistproof"},next:{title:"EthStateStorage.getLatestStateById() method",permalink:"/polygonid-js-sdk-website/docs/api/polygonid-js-sdk.ethstatestorage.getlateststatebyid"}},l={},p=[{value:"EthStateStorage.getGISTRootInfo() method",id:"ethstatestoragegetgistrootinfo-method",level:2},{value:"Parameters",id:"parameters",level:2}],d={toc:p};function g(t){let{components:e,...o}=t;return(0,n.kt)("wrapper",(0,r.Z)({},d,o,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"ethstatestoragegetgistrootinfo-method"},"EthStateStorage.getGISTRootInfo() method"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"This API is provided as a preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Signature:")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-typescript"},"getGISTRootInfo(id: bigint): Promise<RootInfo>;\n")),(0,n.kt)("h2",{id:"parameters"},"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"id"),(0,n.kt)("td",{parentName:"tr",align:null},"bigint"),(0,n.kt)("td",{parentName:"tr",align:null})))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Returns:")),(0,n.kt)("p",null,"Promise","<",(0,n.kt)("a",{parentName:"p",href:"/polygonid-js-sdk-website/docs/api/polygonid-js-sdk.rootinfo"},"RootInfo"),">"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"{Promise<RootInfo>}")))}g.isMDXComponent=!0}}]);