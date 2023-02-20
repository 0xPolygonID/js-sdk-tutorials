"use strict";(self.webpackChunkjs_sdk_tutorials=self.webpackChunkjs_sdk_tutorials||[]).push([[84446],{3905:(t,e,r)=>{r.d(e,{Zo:()=>d,kt:()=>k});var n=r(67294);function a(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function i(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function l(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?i(Object(r),!0).forEach((function(e){a(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function s(t,e){if(null==t)return{};var r,n,a=function(t,e){if(null==t)return{};var r,n,a={},i=Object.keys(t);for(n=0;n<i.length;n++)r=i[n],e.indexOf(r)>=0||(a[r]=t[r]);return a}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(n=0;n<i.length;n++)r=i[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(a[r]=t[r])}return a}var o=n.createContext({}),p=function(t){var e=n.useContext(o),r=e;return t&&(r="function"==typeof t?t(e):l(l({},e),t)),r},d=function(t){var e=p(t.components);return n.createElement(o.Provider,{value:e},t.children)},c="mdxType",u={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},m=n.forwardRef((function(t,e){var r=t.components,a=t.mdxType,i=t.originalType,o=t.parentName,d=s(t,["components","mdxType","originalType","parentName"]),c=p(r),m=a,k=c["".concat(o,".").concat(m)]||c[m]||u[m]||i;return r?n.createElement(k,l(l({ref:e},d),{},{components:r})):n.createElement(k,l({ref:e},d))}));function k(t,e){var r=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var i=r.length,l=new Array(i);l[0]=m;var s={};for(var o in e)hasOwnProperty.call(e,o)&&(s[o]=e[o]);s.originalType=t,s[c]="string"==typeof t?t:a,l[1]=s;for(var p=2;p<i;p++)l[p]=r[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},88274:(t,e,r)=>{r.r(e),r.d(e,{assets:()=>o,contentTitle:()=>l,default:()=>c,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var n=r(87462),a=(r(67294),r(3905));const i={id:"js-sdk.credentialstatus",title:"CredentialStatus interface",hide_title:!0},l=void 0,s={unversionedId:"api/js-sdk.credentialstatus",id:"api/js-sdk.credentialstatus",title:"CredentialStatus interface",description:"CredentialStatus interface",source:"@site/docs/api/js-sdk.credentialstatus.md",sourceDirName:"api",slug:"/api/js-sdk.credentialstatus",permalink:"/docs/api/js-sdk.credentialstatus",draft:!1,tags:[],version:"current",frontMatter:{id:"js-sdk.credentialstatus",title:"CredentialStatus interface",hide_title:!0},sidebar:"api",previous:{title:"CredentialStatus.id property",permalink:"/docs/api/js-sdk.credentialstatus.id"},next:{title:"CredentialStatus.revocationNonce property",permalink:"/docs/api/js-sdk.credentialstatus.revocationnonce"}},o={},p=[{value:"CredentialStatus interface",id:"credentialstatus-interface",level:2},{value:"Properties",id:"properties",level:2}],d={toc:p};function c(t){let{components:e,...r}=t;return(0,a.kt)("wrapper",(0,n.Z)({},d,r,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"credentialstatus-interface"},"CredentialStatus interface"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"This API is provided as a preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.")),(0,a.kt)("p",null,"CredentialStatus contains type and revocation Url "),(0,a.kt)("p",null," CredentialStatus"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Signature:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"export interface CredentialStatus \n")),(0,a.kt)("h2",{id:"properties"},"Properties"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Property"),(0,a.kt)("th",{parentName:"tr",align:null},"Modifiers"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"/docs/api/js-sdk.credentialstatus.id"},"id")),(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null},"string"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},(0,a.kt)("em",{parentName:"strong"},"(BETA)")))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"/docs/api/js-sdk.credentialstatus.revocationnonce"},"revocationNonce?")),(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null},"number"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},(0,a.kt)("em",{parentName:"strong"},"(BETA)"))," ",(0,a.kt)("em",{parentName:"td"},"(Optional)"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"/docs/api/js-sdk.credentialstatus.type"},"type")),(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"/docs/api/js-sdk.credentialstatustype"},"CredentialStatusType")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},(0,a.kt)("em",{parentName:"strong"},"(BETA)")))))))}c.isMDXComponent=!0}}]);