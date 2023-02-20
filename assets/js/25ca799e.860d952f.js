"use strict";(self.webpackChunkjs_sdk_tutorials=self.webpackChunkjs_sdk_tutorials||[]).push([[62873],{3905:(t,e,n)=>{n.d(e,{Zo:()=>d,kt:()=>m});var r=n(67294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},i=Object.keys(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var p=r.createContext({}),s=function(t){var e=r.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},d=function(t){var e=s(t.components);return r.createElement(p.Provider,{value:e},t.children)},c="mdxType",u={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},k=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,i=t.originalType,p=t.parentName,d=l(t,["components","mdxType","originalType","parentName"]),c=s(n),k=a,m=c["".concat(p,".").concat(k)]||c[k]||u[k]||i;return n?r.createElement(m,o(o({ref:e},d),{},{components:n})):r.createElement(m,o({ref:e},d))}));function m(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var i=n.length,o=new Array(i);o[0]=k;var l={};for(var p in e)hasOwnProperty.call(e,p)&&(l[p]=e[p]);l.originalType=t,l[c]="string"==typeof t?t:a,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}k.displayName="MDXCreateElement"},29639:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>p,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var r=n(87462),a=(n(67294),n(3905));const i={id:"js-sdk.identitycreationoptions",title:"IdentityCreationOptions interface",hide_title:!0},o=void 0,l={unversionedId:"api/js-sdk.identitycreationoptions",id:"api/js-sdk.identitycreationoptions",title:"IdentityCreationOptions interface",description:"IdentityCreationOptions interface",source:"@site/docs/api/js-sdk.identitycreationoptions.md",sourceDirName:"api",slug:"/api/js-sdk.identitycreationoptions",permalink:"/js-sdk-tutorials/docs/api/js-sdk.identitycreationoptions",draft:!1,tags:[],version:"current",frontMatter:{id:"js-sdk.identitycreationoptions",title:"IdentityCreationOptions interface",hide_title:!0},sidebar:"api",previous:{title:"IdentityCreationOptions.blockchain property",permalink:"/js-sdk-tutorials/docs/api/js-sdk.identitycreationoptions.blockchain"},next:{title:"IdentityCreationOptions.method property",permalink:"/js-sdk-tutorials/docs/api/js-sdk.identitycreationoptions.method"}},p={},s=[{value:"IdentityCreationOptions interface",id:"identitycreationoptions-interface",level:2},{value:"Properties",id:"properties",level:2}],d={toc:s};function c(t){let{components:e,...n}=t;return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"identitycreationoptions-interface"},"IdentityCreationOptions interface"),(0,a.kt)("p",null,"DID creation options"),(0,a.kt)("p",null,"  IdentityCreationOptions"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Signature:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"export interface IdentityCreationOptions \n")),(0,a.kt)("h2",{id:"properties"},"Properties"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Property"),(0,a.kt)("th",{parentName:"tr",align:null},"Modifiers"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"/js-sdk-tutorials/docs/api/js-sdk.identitycreationoptions.blockchain"},"blockchain")),(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null},"Blockchain"),(0,a.kt)("td",{parentName:"tr",align:null})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"/js-sdk-tutorials/docs/api/js-sdk.identitycreationoptions.method"},"method")),(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null},"DidMethod"),(0,a.kt)("td",{parentName:"tr",align:null})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"/js-sdk-tutorials/docs/api/js-sdk.identitycreationoptions.networkid"},"networkId")),(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null},"NetworkId"),(0,a.kt)("td",{parentName:"tr",align:null})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"/js-sdk-tutorials/docs/api/js-sdk.identitycreationoptions.seed"},"seed?")),(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null},"Uint8Array"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("em",{parentName:"td"},"(Optional)"))))))}c.isMDXComponent=!0}}]);