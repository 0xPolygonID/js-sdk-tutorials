"use strict";(self.webpackChunkjs_sdk_tutorials=self.webpackChunkjs_sdk_tutorials||[]).push([[47560],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>f});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var d=n.createContext({}),p=function(e){var t=n.useContext(d),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},s=function(e){var t=p(e.components);return n.createElement(d.Provider,{value:t},e.children)},c="mdxType",y={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,d=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),c=p(r),u=i,f=c["".concat(d,".").concat(u)]||c[u]||y[u]||a;return r?n.createElement(f,o(o({ref:t},s),{},{components:r})):n.createElement(f,o({ref:t},s))}));function f(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,o=new Array(a);o[0]=u;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l[c]="string"==typeof e?e:i,o[1]=l;for(var p=2;p<a;p++)o[p]=r[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},15424:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>c,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var n=r(87462),i=(r(67294),r(3905));const a={id:"js-sdk.identitystorage.getprofilebyid",title:"IdentityStorage.getProfileById() method",hide_title:!0},o=void 0,l={unversionedId:"api/js-sdk.identitystorage.getprofilebyid",id:"api/js-sdk.identitystorage.getprofilebyid",title:"IdentityStorage.getProfileById() method",description:"IdentityStorage.getProfileById() method",source:"@site/docs/api/js-sdk.identitystorage.getprofilebyid.md",sourceDirName:"api",slug:"/api/js-sdk.identitystorage.getprofilebyid",permalink:"/docs/api/js-sdk.identitystorage.getprofilebyid",draft:!1,tags:[],version:"current",frontMatter:{id:"js-sdk.identitystorage.getprofilebyid",title:"IdentityStorage.getProfileById() method",hide_title:!0},sidebar:"api",previous:{title:"IdentityStorage.getIdentity() method",permalink:"/docs/api/js-sdk.identitystorage.getidentity"},next:{title:"IdentityStorage.getProfileByVerifier() method",permalink:"/docs/api/js-sdk.identitystorage.getprofilebyverifier"}},d={},p=[{value:"IdentityStorage.getProfileById() method",id:"identitystoragegetprofilebyid-method",level:2},{value:"Parameters",id:"parameters",level:2}],s={toc:p};function c(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"identitystoragegetprofilebyid-method"},"IdentityStorage.getProfileById() method"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"This API is provided as a preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Signature:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"getProfileById(profileId: string): Promise<Profile>;\n")),(0,i.kt)("h2",{id:"parameters"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,i.kt)("th",{parentName:"tr",align:null},"Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"profileId"),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null})))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Returns:")),(0,i.kt)("p",null,"Promise","<",(0,i.kt)("a",{parentName:"p",href:"/docs/api/js-sdk.profile"},"Profile"),">"))}c.isMDXComponent=!0}}]);