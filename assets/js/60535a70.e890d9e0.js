"use strict";(self.webpackChunkpolygonid_js_sdk_website=self.webpackChunkpolygonid_js_sdk_website||[]).push([[9283],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>f});var i=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,i)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,i,n=function(e,t){if(null==e)return{};var r,i,n={},o=Object.keys(e);for(i=0;i<o.length;i++)r=o[i],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)r=o[i],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var d=i.createContext({}),p=function(e){var t=i.useContext(d),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},s=function(e){var t=p(e.components);return i.createElement(d.Provider,{value:t},e.children)},y="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},c=i.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,d=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),y=p(r),c=n,f=y["".concat(d,".").concat(c)]||y[c]||g[c]||o;return r?i.createElement(f,a(a({ref:t},s),{},{components:r})):i.createElement(f,a({ref:t},s))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,a=new Array(o);a[0]=c;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l[y]="string"==typeof e?e:n,a[1]=l;for(var p=2;p<o;p++)a[p]=r[p];return i.createElement.apply(null,a)}return i.createElement.apply(null,r)}c.displayName="MDXCreateElement"},7298:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>a,default:()=>y,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var i=r(87462),n=(r(67294),r(3905));const o={id:"polygonid-js-sdk.iidentitystorage.getprofilebyid",title:"IIdentityStorage.getProfileById() method",hide_title:!0},a=void 0,l={unversionedId:"api/polygonid-js-sdk.iidentitystorage.getprofilebyid",id:"api/polygonid-js-sdk.iidentitystorage.getprofilebyid",title:"IIdentityStorage.getProfileById() method",description:"IIdentityStorage.getProfileById() method",source:"@site/docs/api/polygonid-js-sdk.iidentitystorage.getprofilebyid.md",sourceDirName:"api",slug:"/api/polygonid-js-sdk.iidentitystorage.getprofilebyid",permalink:"/polygonid-js-sdk-website/docs/api/polygonid-js-sdk.iidentitystorage.getprofilebyid",draft:!1,tags:[],version:"current",frontMatter:{id:"polygonid-js-sdk.iidentitystorage.getprofilebyid",title:"IIdentityStorage.getProfileById() method",hide_title:!0},sidebar:"api",previous:{title:"IIdentityStorage.getIdentity() method",permalink:"/polygonid-js-sdk-website/docs/api/polygonid-js-sdk.iidentitystorage.getidentity"},next:{title:"IIdentityStorage.getProfileByVerifier() method",permalink:"/polygonid-js-sdk-website/docs/api/polygonid-js-sdk.iidentitystorage.getprofilebyverifier"}},d={},p=[{value:"IIdentityStorage.getProfileById() method",id:"iidentitystoragegetprofilebyid-method",level:2},{value:"Parameters",id:"parameters",level:2}],s={toc:p};function y(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,i.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"iidentitystoragegetprofilebyid-method"},"IIdentityStorage.getProfileById() method"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"This API is provided as a preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.")),(0,n.kt)("p",null,"gets profile by identifier"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Signature:")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-typescript"},"getProfileById(identifier: string): Promise<Profile>;\n")),(0,n.kt)("h2",{id:"parameters"},"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"identifier"),(0,n.kt)("td",{parentName:"tr",align:null},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"profile id")))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Returns:")),(0,n.kt)("p",null,"Promise","<",(0,n.kt)("a",{parentName:"p",href:"/polygonid-js-sdk-website/docs/api/polygonid-js-sdk.profile"},"Profile"),">"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"{Promise<Profile>}")))}y.isMDXComponent=!0}}]);