"use strict";(self.webpackChunkpolygonid_js_sdk_website=self.webpackChunkpolygonid_js_sdk_website||[]).push([[9965],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>c});var i=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,i)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,i,n=function(e,t){if(null==e)return{};var r,i,n={},o=Object.keys(e);for(i=0;i<o.length;i++)r=o[i],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)r=o[i],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=i.createContext({}),s=function(e){var t=i.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},d=function(e){var t=s(e.components);return i.createElement(p.Provider,{value:t},e.children)},f="mdxType",y={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},g=i.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,p=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),f=s(r),g=n,c=f["".concat(p,".").concat(g)]||f[g]||y[g]||o;return r?i.createElement(c,a(a({ref:t},d),{},{components:r})):i.createElement(c,a({ref:t},d))}));function c(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,a=new Array(o);a[0]=g;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[f]="string"==typeof e?e:n,a[1]=l;for(var s=2;s<o;s++)a[s]=r[s];return i.createElement.apply(null,a)}return i.createElement.apply(null,r)}g.displayName="MDXCreateElement"},3806:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>a,default:()=>f,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var i=r(7462),n=(r(7294),r(3905));const o={id:"polygonid-js-sdk.iidentitystorage.getprofilebyverifier",title:"IIdentityStorage.getProfileByVerifier() method",hide_title:!0},a=void 0,l={unversionedId:"api/polygonid-js-sdk.iidentitystorage.getprofilebyverifier",id:"api/polygonid-js-sdk.iidentitystorage.getprofilebyverifier",title:"IIdentityStorage.getProfileByVerifier() method",description:"IIdentityStorage.getProfileByVerifier() method",source:"@site/docs/api/polygonid-js-sdk.iidentitystorage.getprofilebyverifier.md",sourceDirName:"api",slug:"/api/polygonid-js-sdk.iidentitystorage.getprofilebyverifier",permalink:"/docs/api/polygonid-js-sdk.iidentitystorage.getprofilebyverifier",draft:!1,tags:[],version:"current",frontMatter:{id:"polygonid-js-sdk.iidentitystorage.getprofilebyverifier",title:"IIdentityStorage.getProfileByVerifier() method",hide_title:!0},sidebar:"api",previous:{title:"IIdentityStorage.getProfileById() method",permalink:"/docs/api/polygonid-js-sdk.iidentitystorage.getprofilebyid"},next:{title:"IIdentityStorage.getProfilesByGenesisIdentifier() method",permalink:"/docs/api/polygonid-js-sdk.iidentitystorage.getprofilesbygenesisidentifier"}},p={},s=[{value:"IIdentityStorage.getProfileByVerifier() method",id:"iidentitystoragegetprofilebyverifier-method",level:2},{value:"Parameters",id:"parameters",level:2}],d={toc:s};function f(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,i.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"iidentitystoragegetprofilebyverifier-method"},"IIdentityStorage.getProfileByVerifier() method"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"This API is provided as a preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.")),(0,n.kt)("p",null,"gets profile by verifier"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Signature:")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-typescript"},"getProfileByVerifier(verifier: string): Promise<Profile>;\n")),(0,n.kt)("h2",{id:"parameters"},"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"verifier"),(0,n.kt)("td",{parentName:"tr",align:null},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"verifier to which profile has been shared")))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Returns:")),(0,n.kt)("p",null,"Promise","<",(0,n.kt)("a",{parentName:"p",href:"/docs/api/polygonid-js-sdk.profile"},"Profile"),">"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"{Promise<Profile>}")))}f.isMDXComponent=!0}}]);