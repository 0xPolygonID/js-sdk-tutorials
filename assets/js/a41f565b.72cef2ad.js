"use strict";(self.webpackChunkpolygonid_js_sdk_website=self.webpackChunkpolygonid_js_sdk_website||[]).push([[6620],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>k});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),l=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},y=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),d=l(r),y=o,k=d["".concat(s,".").concat(y)]||d[y]||u[y]||a;return r?n.createElement(k,i(i({ref:t},c),{},{components:r})):n.createElement(k,i({ref:t},c))}));function k(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=y;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p[d]="string"==typeof e?e:o,i[1]=p;for(var l=2;l<a;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}y.displayName="MDXCreateElement"},8072:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>p,toc:()=>l});var n=r(7462),o=(r(7294),r(3905));const a={id:"polygonid-js-sdk.bjjprovider._constructor_",title:"BjjProvider.(constructor)",hide_title:!0},i=void 0,p={unversionedId:"api/polygonid-js-sdk.bjjprovider._constructor_",id:"api/polygonid-js-sdk.bjjprovider._constructor_",title:"BjjProvider.(constructor)",description:"BjjProvider.(constructor)",source:"@site/docs/api/polygonid-js-sdk.bjjprovider._constructor_.md",sourceDirName:"api",slug:"/api/polygonid-js-sdk.bjjprovider._constructor_",permalink:"/polygonid-js-sdk-website/docs/api/polygonid-js-sdk.bjjprovider._constructor_",draft:!1,tags:[],version:"current",frontMatter:{id:"polygonid-js-sdk.bjjprovider._constructor_",title:"BjjProvider.(constructor)",hide_title:!0},sidebar:"api",previous:{title:"AuthHandler class",permalink:"/polygonid-js-sdk-website/docs/api/polygonid-js-sdk.authhandler"},next:{title:"BjjProvider.keyType property",permalink:"/polygonid-js-sdk-website/docs/api/polygonid-js-sdk.bjjprovider.keytype"}},s={},l=[{value:"BjjProvider.(constructor)",id:"bjjproviderconstructor",level:2},{value:"Parameters",id:"parameters",level:2}],c={toc:l};function d(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"bjjproviderconstructor"},"BjjProvider.(constructor)"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"This API is provided as a preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.")),(0,o.kt)("p",null,"Creates an instance of BjjProvider."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Signature:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"constructor(keyType: KmsKeyType, keyStore: AbstractPrivateKeyStore);\n")),(0,o.kt)("h2",{id:"parameters"},"Parameters"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,o.kt)("th",{parentName:"tr",align:null},"Type"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"keyType"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"/polygonid-js-sdk-website/docs/api/polygonid-js-sdk.kmskeytype"},"KmsKeyType")),(0,o.kt)("td",{parentName:"tr",align:null},"kms key type")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"keyStore"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"/polygonid-js-sdk-website/docs/api/polygonid-js-sdk.abstractprivatekeystore"},"AbstractPrivateKeyStore")),(0,o.kt)("td",{parentName:"tr",align:null},"key store for kms")))))}d.isMDXComponent=!0}}]);