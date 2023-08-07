"use strict";(self.webpackChunkjs_sdk_tutorials=self.webpackChunkjs_sdk_tutorials||[]).push([[66053],{3905:(t,e,r)=>{r.d(e,{Zo:()=>p,kt:()=>y});var i=r(67294);function n(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function a(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,i)}return r}function s(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?a(Object(r),!0).forEach((function(e){n(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function o(t,e){if(null==t)return{};var r,i,n=function(t,e){if(null==t)return{};var r,i,n={},a=Object.keys(t);for(i=0;i<a.length;i++)r=a[i],e.indexOf(r)>=0||(n[r]=t[r]);return n}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(i=0;i<a.length;i++)r=a[i],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}var d=i.createContext({}),l=function(t){var e=i.useContext(d),r=e;return t&&(r="function"==typeof t?t(e):s(s({},e),t)),r},p=function(t){var e=l(t.components);return i.createElement(d.Provider,{value:e},t.children)},c="mdxType",u={inlineCode:"code",wrapper:function(t){var e=t.children;return i.createElement(i.Fragment,{},e)}},f=i.forwardRef((function(t,e){var r=t.components,n=t.mdxType,a=t.originalType,d=t.parentName,p=o(t,["components","mdxType","originalType","parentName"]),c=l(r),f=n,y=c["".concat(d,".").concat(f)]||c[f]||u[f]||a;return r?i.createElement(y,s(s({ref:e},p),{},{components:r})):i.createElement(y,s({ref:e},p))}));function y(t,e){var r=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var a=r.length,s=new Array(a);s[0]=f;var o={};for(var d in e)hasOwnProperty.call(e,d)&&(o[d]=e[d]);o.originalType=t,o[c]="string"==typeof t?t:n,s[1]=o;for(var l=2;l<a;l++)s[l]=r[l];return i.createElement.apply(null,s)}return i.createElement.apply(null,r)}f.displayName="MDXCreateElement"},12385:(t,e,r)=>{r.r(e),r.d(e,{assets:()=>d,contentTitle:()=>s,default:()=>c,frontMatter:()=>a,metadata:()=>o,toc:()=>l});var i=r(87462),n=(r(67294),r(3905));const a={id:"js-sdk.iidentitystorage",title:"IIdentityStorage interface",hide_title:!0},s=void 0,o={unversionedId:"api/js-sdk.iidentitystorage",id:"api/js-sdk.iidentitystorage",title:"IIdentityStorage interface",description:"IIdentityStorage interface",source:"@site/docs/api/js-sdk.iidentitystorage.md",sourceDirName:"api",slug:"/api/js-sdk.iidentitystorage",permalink:"/js-sdk-tutorials/docs/api/js-sdk.iidentitystorage",draft:!1,tags:[],version:"current",frontMatter:{id:"js-sdk.iidentitystorage",title:"IIdentityStorage interface",hide_title:!0},sidebar:"api",previous:{title:"IIdentityStorage.getProfilesByGenesisIdentifier() method",permalink:"/js-sdk-tutorials/docs/api/js-sdk.iidentitystorage.getprofilesbygenesisidentifier"},next:{title:"IIdentityStorage.saveIdentity() method",permalink:"/js-sdk-tutorials/docs/api/js-sdk.iidentitystorage.saveidentity"}},d={},l=[{value:"IIdentityStorage interface",id:"iidentitystorage-interface",level:2},{value:"Methods",id:"methods",level:2}],p={toc:l};function c(t){let{components:e,...r}=t;return(0,n.kt)("wrapper",(0,i.Z)({},p,r,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"iidentitystorage-interface"},"IIdentityStorage interface"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"This API is provided as a preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.")),(0,n.kt)("p",null,"storage for identities and profiles"),(0,n.kt)("p",null," IIdentityStorage"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Signature:")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-typescript"},"export interface IIdentityStorage \n")),(0,n.kt)("h2",{id:"methods"},"Methods"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Method"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/js-sdk-tutorials/docs/api/js-sdk.iidentitystorage.getallidentities"},"getAllIdentities()")),(0,n.kt)("td",{parentName:"tr",align:null},"gets all identity from the data source")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/js-sdk-tutorials/docs/api/js-sdk.iidentitystorage.getidentity"},"getIdentity(identifier)")),(0,n.kt)("td",{parentName:"tr",align:null},"gets identity from the the data source")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/js-sdk-tutorials/docs/api/js-sdk.iidentitystorage.getprofilebyid"},"getProfileById(identifier)")),(0,n.kt)("td",{parentName:"tr",align:null},"gets profile by identifier")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/js-sdk-tutorials/docs/api/js-sdk.iidentitystorage.getprofilebyverifier"},"getProfileByVerifier(verifier)")),(0,n.kt)("td",{parentName:"tr",align:null},"gets profile by verifier")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/js-sdk-tutorials/docs/api/js-sdk.iidentitystorage.getprofilesbygenesisidentifier"},"getProfilesByGenesisIdentifier(genesisIdentifier)")),(0,n.kt)("td",{parentName:"tr",align:null},"gets profile identity by genesis identifiers")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/js-sdk-tutorials/docs/api/js-sdk.iidentitystorage.saveidentity"},"saveIdentity(identity)")),(0,n.kt)("td",{parentName:"tr",align:null},"saves identity to the data source")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/js-sdk-tutorials/docs/api/js-sdk.iidentitystorage.saveprofile"},"saveProfile(profile)")),(0,n.kt)("td",{parentName:"tr",align:null},"saves profile identity to data")))))}c.isMDXComponent=!0}}]);