"use strict";(self.webpackChunkpolygonid_js_sdk_website=self.webpackChunkpolygonid_js_sdk_website||[]).push([[4350],{3905:(e,t,r)=>{r.d(t,{Zo:()=>m,kt:()=>u});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},m=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},y=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),c=p(r),y=a,u=c["".concat(l,".").concat(y)]||c[y]||d[y]||o;return r?n.createElement(u,i(i({ref:t},m),{},{components:r})):n.createElement(u,i({ref:t},m))}));function u(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=y;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:a,i[1]=s;for(var p=2;p<o;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}y.displayName="MDXCreateElement"},3972:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var n=r(7462),a=(r(7294),r(3905));const o={id:"polygonid-js-sdk.inmemoryprivatekeystore",title:"InMemoryPrivateKeyStore class",hide_title:!0},i=void 0,s={unversionedId:"api/polygonid-js-sdk.inmemoryprivatekeystore",id:"api/polygonid-js-sdk.inmemoryprivatekeystore",title:"InMemoryPrivateKeyStore class",description:"InMemoryPrivateKeyStore class",source:"@site/docs/api/polygonid-js-sdk.inmemoryprivatekeystore.md",sourceDirName:"api",slug:"/api/polygonid-js-sdk.inmemoryprivatekeystore",permalink:"/docs/api/polygonid-js-sdk.inmemoryprivatekeystore",draft:!1,tags:[],version:"current",frontMatter:{id:"polygonid-js-sdk.inmemoryprivatekeystore",title:"InMemoryPrivateKeyStore class",hide_title:!0},sidebar:"api",previous:{title:"InMemoryPrivateKeyStore.import() method",permalink:"/docs/api/polygonid-js-sdk.inmemoryprivatekeystore.import"},next:{title:"isGenesisStateId() function",permalink:"/docs/api/polygonid-js-sdk.isgenesisstateid"}},l={},p=[{value:"InMemoryPrivateKeyStore class",id:"inmemoryprivatekeystore-class",level:2},{value:"Constructors",id:"constructors",level:2},{value:"Methods",id:"methods",level:2}],m={toc:p};function c(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"inmemoryprivatekeystore-class"},"InMemoryPrivateKeyStore class"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"This API is provided as a preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.")),(0,a.kt)("p",null,"Key Store to use in memory"),(0,a.kt)("p",null," InMemoryPrivateKeyStore  implements AbstractPrivateKeyStore interface"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Signature:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"export declare class InMemoryPrivateKeyStore implements AbstractPrivateKeyStore \n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Implements:")," ",(0,a.kt)("a",{parentName:"p",href:"/docs/api/polygonid-js-sdk.abstractprivatekeystore"},"AbstractPrivateKeyStore")),(0,a.kt)("h2",{id:"constructors"},"Constructors"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Constructor"),(0,a.kt)("th",{parentName:"tr",align:null},"Modifiers"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"/docs/api/polygonid-js-sdk.inmemoryprivatekeystore._constructor_"},"(constructor)()")),(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},(0,a.kt)("em",{parentName:"strong"},"(BETA)"))," Constructs a new instance of the ",(0,a.kt)("code",null,"InMemoryPrivateKeyStore")," class")))),(0,a.kt)("h2",{id:"methods"},"Methods"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Method"),(0,a.kt)("th",{parentName:"tr",align:null},"Modifiers"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"/docs/api/polygonid-js-sdk.inmemoryprivatekeystore.get"},"get(args)")),(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},(0,a.kt)("em",{parentName:"strong"},"(BETA)")))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"/docs/api/polygonid-js-sdk.inmemoryprivatekeystore.import"},"import(args)")),(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},(0,a.kt)("em",{parentName:"strong"},"(BETA)")))))))}c.isMDXComponent=!0}}]);