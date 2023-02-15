"use strict";(self.webpackChunkpolygonid_js_sdk_website=self.webpackChunkpolygonid_js_sdk_website||[]).push([[5502],{3905:(t,e,r)=>{r.d(e,{Zo:()=>g,kt:()=>f});var o=r(7294);function n(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function a(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,o)}return r}function i(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?a(Object(r),!0).forEach((function(e){n(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function s(t,e){if(null==t)return{};var r,o,n=function(t,e){if(null==t)return{};var r,o,n={},a=Object.keys(t);for(o=0;o<a.length;o++)r=a[o],e.indexOf(r)>=0||(n[r]=t[r]);return n}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(o=0;o<a.length;o++)r=a[o],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}var p=o.createContext({}),l=function(t){var e=o.useContext(p),r=e;return t&&(r="function"==typeof t?t(e):i(i({},e),t)),r},g=function(t){var e=l(t.components);return o.createElement(p.Provider,{value:e},t.children)},d="mdxType",c={inlineCode:"code",wrapper:function(t){var e=t.children;return o.createElement(o.Fragment,{},e)}},u=o.forwardRef((function(t,e){var r=t.components,n=t.mdxType,a=t.originalType,p=t.parentName,g=s(t,["components","mdxType","originalType","parentName"]),d=l(r),u=n,f=d["".concat(p,".").concat(u)]||d[u]||c[u]||a;return r?o.createElement(f,i(i({ref:e},g),{},{components:r})):o.createElement(f,i({ref:e},g))}));function f(t,e){var r=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var a=r.length,i=new Array(a);i[0]=u;var s={};for(var p in e)hasOwnProperty.call(e,p)&&(s[p]=e[p]);s.originalType=t,s[d]="string"==typeof t?t:n,i[1]=s;for(var l=2;l<a;l++)i[l]=r[l];return o.createElement.apply(null,i)}return o.createElement.apply(null,r)}u.displayName="MDXCreateElement"},5233:(t,e,r)=>{r.r(e),r.d(e,{assets:()=>p,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var o=r(7462),n=(r(7294),r(3905));const a={id:"polygonid-js-sdk.ethstatestorage.getgistproof",title:"EthStateStorage.getGISTProof() method",hide_title:!0},i=void 0,s={unversionedId:"api/polygonid-js-sdk.ethstatestorage.getgistproof",id:"api/polygonid-js-sdk.ethstatestorage.getgistproof",title:"EthStateStorage.getGISTProof() method",description:"EthStateStorage.getGISTProof() method",source:"@site/docs/api/polygonid-js-sdk.ethstatestorage.getgistproof.md",sourceDirName:"api",slug:"/api/polygonid-js-sdk.ethstatestorage.getgistproof",permalink:"/docs/api/polygonid-js-sdk.ethstatestorage.getgistproof",draft:!1,tags:[],version:"current",frontMatter:{id:"polygonid-js-sdk.ethstatestorage.getgistproof",title:"EthStateStorage.getGISTProof() method",hide_title:!0},sidebar:"api",previous:{title:"EthStateStorage.(constructor)",permalink:"/docs/api/polygonid-js-sdk.ethstatestorage._constructor_"},next:{title:"EthStateStorage.getGISTRootInfo() method",permalink:"/docs/api/polygonid-js-sdk.ethstatestorage.getgistrootinfo"}},p={},l=[{value:"EthStateStorage.getGISTProof() method",id:"ethstatestoragegetgistproof-method",level:2},{value:"Parameters",id:"parameters",level:2}],g={toc:l};function d(t){let{components:e,...r}=t;return(0,n.kt)("wrapper",(0,o.Z)({},g,r,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"ethstatestoragegetgistproof-method"},"EthStateStorage.getGISTProof() method"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"This API is provided as a preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.")),(0,n.kt)("p",null,"generates proof of inclusion / non-inclusion to global identity state for given identity"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Signature:")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-typescript"},"getGISTProof(id: bigint): Promise<StateProof>;\n")),(0,n.kt)("h2",{id:"parameters"},"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"id"),(0,n.kt)("td",{parentName:"tr",align:null},"bigint"),(0,n.kt)("td",{parentName:"tr",align:null},"id to check")))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Returns:")),(0,n.kt)("p",null,"Promise","<",(0,n.kt)("a",{parentName:"p",href:"/docs/api/polygonid-js-sdk.stateproof"},"StateProof"),">"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"Promise<StateProof>")))}d.isMDXComponent=!0}}]);