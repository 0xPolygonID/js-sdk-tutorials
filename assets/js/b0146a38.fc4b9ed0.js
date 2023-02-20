"use strict";(self.webpackChunkjs_sdk_tutorials=self.webpackChunkjs_sdk_tutorials||[]).push([[18606],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>g});var i=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=i.createContext({}),d=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=d(e.components);return i.createElement(s.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},y=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=d(n),y=r,g=c["".concat(s,".").concat(y)]||c[y]||u[y]||a;return n?i.createElement(g,o(o({ref:t},p),{},{components:n})):i.createElement(g,o({ref:t},p))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=y;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:r,o[1]=l;for(var d=2;d<a;d++)o[d]=n[d];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}y.displayName="MDXCreateElement"},18607:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>c,frontMatter:()=>a,metadata:()=>l,toc:()=>d});var i=n(87462),r=(n(67294),n(3905));const a={id:"js-sdk.iidentitystorage.getallidentities",title:"IIdentityStorage.getAllIdentities() method",hide_title:!0},o=void 0,l={unversionedId:"api/js-sdk.iidentitystorage.getallidentities",id:"api/js-sdk.iidentitystorage.getallidentities",title:"IIdentityStorage.getAllIdentities() method",description:"IIdentityStorage.getAllIdentities() method",source:"@site/docs/api/js-sdk.iidentitystorage.getallidentities.md",sourceDirName:"api",slug:"/api/js-sdk.iidentitystorage.getallidentities",permalink:"/docs/api/js-sdk.iidentitystorage.getallidentities",draft:!1,tags:[],version:"current",frontMatter:{id:"js-sdk.iidentitystorage.getallidentities",title:"IIdentityStorage.getAllIdentities() method",hide_title:!0},sidebar:"api",previous:{title:"IFilterQuery interface",permalink:"/docs/api/js-sdk.ifilterquery"},next:{title:"IIdentityStorage.getIdentity() method",permalink:"/docs/api/js-sdk.iidentitystorage.getidentity"}},s={},d=[{value:"IIdentityStorage.getAllIdentities() method",id:"iidentitystoragegetallidentities-method",level:2}],p={toc:d};function c(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,i.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"iidentitystoragegetallidentities-method"},"IIdentityStorage.getAllIdentities() method"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"This API is provided as a preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.")),(0,r.kt)("p",null,"gets all identity from the data source"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Signature:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"getAllIdentities(): Promise<Identity[]>;\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Returns:")),(0,r.kt)("p",null,"Promise","<",(0,r.kt)("a",{parentName:"p",href:"/docs/api/js-sdk.identity"},"Identity"),"[","]",">"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"{Promise<Identity[]>}")))}c.isMDXComponent=!0}}]);