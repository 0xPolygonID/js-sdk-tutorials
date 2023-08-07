"use strict";(self.webpackChunkjs_sdk_tutorials=self.webpackChunkjs_sdk_tutorials||[]).push([[1976],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var o=r.createContext({}),s=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(o.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},y=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,o=e.parentName,p=d(e,["components","mdxType","originalType","parentName"]),c=s(n),y=i,m=c["".concat(o,".").concat(y)]||c[y]||u[y]||a;return n?r.createElement(m,l(l({ref:t},p),{},{components:n})):r.createElement(m,l({ref:t},p))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,l=new Array(a);l[0]=y;var d={};for(var o in t)hasOwnProperty.call(t,o)&&(d[o]=t[o]);d.originalType=e,d[c]="string"==typeof e?e:i,l[1]=d;for(var s=2;s<a;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}y.displayName="MDXCreateElement"},4228:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>c,frontMatter:()=>a,metadata:()=>d,toc:()=>s});var r=n(87462),i=(n(67294),n(3905));const a={id:"js-sdk.iidentitywallet.findownedcredentialsbydid",title:"IIdentityWallet.findOwnedCredentialsByDID() method",hide_title:!0},l=void 0,d={unversionedId:"api/js-sdk.iidentitywallet.findownedcredentialsbydid",id:"api/js-sdk.iidentitywallet.findownedcredentialsbydid",title:"IIdentityWallet.findOwnedCredentialsByDID() method",description:"IIdentityWallet.findOwnedCredentialsByDID() method",source:"@site/docs/api/js-sdk.iidentitywallet.findownedcredentialsbydid.md",sourceDirName:"api",slug:"/api/js-sdk.iidentitywallet.findownedcredentialsbydid",permalink:"/js-sdk-tutorials/docs/api/js-sdk.iidentitywallet.findownedcredentialsbydid",draft:!1,tags:[],version:"current",frontMatter:{id:"js-sdk.iidentitywallet.findownedcredentialsbydid",title:"IIdentityWallet.findOwnedCredentialsByDID() method",hide_title:!0},sidebar:"api",previous:{title:"IIdentityWallet.createProfile() method",permalink:"/js-sdk-tutorials/docs/api/js-sdk.iidentitywallet.createprofile"},next:{title:"IIdentityWallet.generateCredentialMtp() method",permalink:"/js-sdk-tutorials/docs/api/js-sdk.iidentitywallet.generatecredentialmtp"}},o={},s=[{value:"IIdentityWallet.findOwnedCredentialsByDID() method",id:"iidentitywalletfindownedcredentialsbydid-method",level:2},{value:"Parameters",id:"parameters",level:2}],p={toc:s};function c(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"iidentitywalletfindownedcredentialsbydid-method"},"IIdentityWallet.findOwnedCredentialsByDID() method"),(0,i.kt)("p",null,"find all credentials that belong to any profile or genesis identity for the given did"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Signature:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"findOwnedCredentialsByDID(did: DID, query: ProofQuery): Promise<W3CCredential[]>;\n")),(0,i.kt)("h2",{id:"parameters"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,i.kt)("th",{parentName:"tr",align:null},"Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"did"),(0,i.kt)("td",{parentName:"tr",align:null},"DID"),(0,i.kt)("td",{parentName:"tr",align:null},"profile that has been derived or genesis identity")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"query"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/js-sdk-tutorials/docs/api/js-sdk.proofquery"},"ProofQuery")),(0,i.kt)("td",{parentName:"tr",align:null})))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Returns:")),(0,i.kt)("p",null,"Promise","<",(0,i.kt)("a",{parentName:"p",href:"/js-sdk-tutorials/docs/api/js-sdk.w3ccredential"},"W3CCredential"),"[","]",">"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"{Promise<W3CCredential[]>}")))}c.isMDXComponent=!0}}]);