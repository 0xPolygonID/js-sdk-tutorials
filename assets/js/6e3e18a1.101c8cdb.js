"use strict";(self.webpackChunkpolygonid_js_sdk_website=self.webpackChunkpolygonid_js_sdk_website||[]).push([[30317],{3905:(t,e,a)=>{a.d(e,{Zo:()=>d,kt:()=>y});var r=a(67294);function n(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function o(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?o(Object(a),!0).forEach((function(e){n(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function s(t,e){if(null==t)return{};var a,r,n=function(t,e){if(null==t)return{};var a,r,n={},o=Object.keys(t);for(r=0;r<o.length;r++)a=o[r],e.indexOf(a)>=0||(n[a]=t[a]);return n}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)a=o[r],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}var l=r.createContext({}),p=function(t){var e=r.useContext(l),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},d=function(t){var e=p(t.components);return r.createElement(l.Provider,{value:e},t.children)},g="mdxType",c={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},u=r.forwardRef((function(t,e){var a=t.components,n=t.mdxType,o=t.originalType,l=t.parentName,d=s(t,["components","mdxType","originalType","parentName"]),g=p(a),u=n,y=g["".concat(l,".").concat(u)]||g[u]||c[u]||o;return a?r.createElement(y,i(i({ref:e},d),{},{components:a})):r.createElement(y,i({ref:e},d))}));function y(t,e){var a=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var o=a.length,i=new Array(o);i[0]=u;var s={};for(var l in e)hasOwnProperty.call(e,l)&&(s[l]=e[l]);s.originalType=t,s[g]="string"==typeof t?t:n,i[1]=s;for(var p=2;p<o;p++)i[p]=a[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}u.displayName="MDXCreateElement"},33091:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>l,contentTitle:()=>i,default:()=>g,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var r=a(87462),n=(a(67294),a(3905));const o={id:"polygonid-js-sdk.istatestorage.getlateststatebyid",title:"IStateStorage.getLatestStateById() method",hide_title:!0},i=void 0,s={unversionedId:"api/polygonid-js-sdk.istatestorage.getlateststatebyid",id:"api/polygonid-js-sdk.istatestorage.getlateststatebyid",title:"IStateStorage.getLatestStateById() method",description:"IStateStorage.getLatestStateById() method",source:"@site/docs/api/polygonid-js-sdk.istatestorage.getlateststatebyid.md",sourceDirName:"api",slug:"/api/polygonid-js-sdk.istatestorage.getlateststatebyid",permalink:"/polygonid-js-sdk-website/docs/api/polygonid-js-sdk.istatestorage.getlateststatebyid",draft:!1,tags:[],version:"current",frontMatter:{id:"polygonid-js-sdk.istatestorage.getlateststatebyid",title:"IStateStorage.getLatestStateById() method",hide_title:!0},sidebar:"api",previous:{title:"IStateStorage.getGISTRootInfo() method",permalink:"/polygonid-js-sdk-website/docs/api/polygonid-js-sdk.istatestorage.getgistrootinfo"},next:{title:"IStateStorage interface",permalink:"/polygonid-js-sdk-website/docs/api/polygonid-js-sdk.istatestorage"}},l={},p=[{value:"IStateStorage.getLatestStateById() method",id:"istatestoragegetlateststatebyid-method",level:2},{value:"Parameters",id:"parameters",level:2}],d={toc:p};function g(t){let{components:e,...a}=t;return(0,n.kt)("wrapper",(0,r.Z)({},d,a,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"istatestoragegetlateststatebyid-method"},"IStateStorage.getLatestStateById() method"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"This API is provided as a preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.")),(0,n.kt)("p",null,"gets latest state of identity"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Signature:")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-typescript"},"getLatestStateById(id: bigint): Promise<StateInfo>;\n")),(0,n.kt)("h2",{id:"parameters"},"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"id"),(0,n.kt)("td",{parentName:"tr",align:null},"bigint"),(0,n.kt)("td",{parentName:"tr",align:null},"id to check")))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Returns:")),(0,n.kt)("p",null,"Promise","<",(0,n.kt)("a",{parentName:"p",href:"/polygonid-js-sdk-website/docs/api/polygonid-js-sdk.stateinfo"},"StateInfo"),">"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"Promise<StateInfo>")))}g.isMDXComponent=!0}}]);