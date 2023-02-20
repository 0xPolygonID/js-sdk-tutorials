"use strict";(self.webpackChunkjs_sdk_tutorials=self.webpackChunkjs_sdk_tutorials||[]).push([[34234],{3905:(t,e,r)=>{r.d(e,{Zo:()=>d,kt:()=>y});var n=r(67294);function a(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function l(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function i(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?l(Object(r),!0).forEach((function(e){a(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function o(t,e){if(null==t)return{};var r,n,a=function(t,e){if(null==t)return{};var r,n,a={},l=Object.keys(t);for(n=0;n<l.length;n++)r=l[n],e.indexOf(r)>=0||(a[r]=t[r]);return a}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)r=l[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(a[r]=t[r])}return a}var s=n.createContext({}),c=function(t){var e=n.useContext(s),r=e;return t&&(r="function"==typeof t?t(e):i(i({},e),t)),r},d=function(t){var e=c(t.components);return n.createElement(s.Provider,{value:e},t.children)},p="mdxType",u={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},m=n.forwardRef((function(t,e){var r=t.components,a=t.mdxType,l=t.originalType,s=t.parentName,d=o(t,["components","mdxType","originalType","parentName"]),p=c(r),m=a,y=p["".concat(s,".").concat(m)]||p[m]||u[m]||l;return r?n.createElement(y,i(i({ref:e},d),{},{components:r})):n.createElement(y,i({ref:e},d))}));function y(t,e){var r=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var l=r.length,i=new Array(l);i[0]=m;var o={};for(var s in e)hasOwnProperty.call(e,s)&&(o[s]=e[s]);o.originalType=t,o[p]="string"==typeof t?t:a,i[1]=o;for(var c=2;c<l;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},53404:(t,e,r)=>{r.r(e),r.d(e,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>l,metadata:()=>o,toc:()=>c});var n=r(87462),a=(r(67294),r(3905));const l={id:"js-sdk.identitywallet._constructor_",title:"IdentityWallet.(constructor)",hide_title:!0},i=void 0,o={unversionedId:"api/js-sdk.identitywallet._constructor_",id:"api/js-sdk.identitywallet._constructor_",title:"IdentityWallet.(constructor)",description:"IdentityWallet.(constructor)",source:"@site/docs/api/js-sdk.identitywallet._constructor_.md",sourceDirName:"api",slug:"/api/js-sdk.identitywallet._constructor_",permalink:"/docs/api/js-sdk.identitywallet._constructor_",draft:!1,tags:[],version:"current",frontMatter:{id:"js-sdk.identitywallet._constructor_",title:"IdentityWallet.(constructor)",hide_title:!0},sidebar:"api",previous:{title:"IdentityStorage.saveProfile() method",permalink:"/docs/api/js-sdk.identitystorage.saveprofile"},next:{title:"IdentityWallet.addCredentialsToMerkleTree() method",permalink:"/docs/api/js-sdk.identitywallet.addcredentialstomerkletree"}},s={},c=[{value:"IdentityWallet.(constructor)",id:"identitywalletconstructor",level:2},{value:"Parameters",id:"parameters",level:2}],d={toc:c};function p(t){let{components:e,...r}=t;return(0,a.kt)("wrapper",(0,n.Z)({},d,r,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"identitywalletconstructor"},"IdentityWallet.(constructor)"),(0,a.kt)("p",null,"Constructs a new instance of the ",(0,a.kt)("inlineCode",{parentName:"p"},"IdentityWallet")," class"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Signature:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"constructor(_kms: KMS, _storage: IDataStorage, _credentialWallet: ICredentialWallet);\n")),(0,a.kt)("h2",{id:"parameters"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"_","kms"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"/docs/api/js-sdk.kms"},"KMS")),(0,a.kt)("td",{parentName:"tr",align:null},"Key Management System that allows signing data with BJJ key")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"_","storage"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"/docs/api/js-sdk.idatastorage"},"IDataStorage")),(0,a.kt)("td",{parentName:"tr",align:null},"data storage to access credential / identity / Merkle tree data")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"_","credentialWallet"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"/docs/api/js-sdk.icredentialwallet"},"ICredentialWallet")),(0,a.kt)("td",{parentName:"tr",align:null},"credential wallet instance to quickly access credential CRUD functionality")))))}p.isMDXComponent=!0}}]);