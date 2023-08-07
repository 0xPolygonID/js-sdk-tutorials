"use strict";(self.webpackChunkjs_sdk_tutorials=self.webpackChunkjs_sdk_tutorials||[]).push([[82750],{3905:(t,e,a)=>{a.d(e,{Zo:()=>p,kt:()=>g});var n=a(67294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function i(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function l(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?i(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function s(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},i=Object.keys(t);for(n=0;n<i.length;n++)a=i[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(n=0;n<i.length;n++)a=i[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var u=n.createContext({}),o=function(t){var e=n.useContext(u),a=e;return t&&(a="function"==typeof t?t(e):l(l({},e),t)),a},p=function(t){var e=o(t.components);return n.createElement(u.Provider,{value:e},t.children)},d="mdxType",m={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},c=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,i=t.originalType,u=t.parentName,p=s(t,["components","mdxType","originalType","parentName"]),d=o(a),c=r,g=d["".concat(u,".").concat(c)]||d[c]||m[c]||i;return a?n.createElement(g,l(l({ref:e},p),{},{components:a})):n.createElement(g,l({ref:e},p))}));function g(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var i=a.length,l=new Array(i);l[0]=c;var s={};for(var u in e)hasOwnProperty.call(e,u)&&(s[u]=e[u]);s.originalType=t,s[d]="string"==typeof t?t:r,l[1]=s;for(var o=2;o<i;o++)l[o]=a[o];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},14776:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>u,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>o});var n=a(87462),r=(a(67294),a(3905));const i={id:"js-sdk.atomicquerysigv2onchainpubsignals",title:"AtomicQuerySigV2OnChainPubSignals class",hide_title:!0},l=void 0,s={unversionedId:"api/js-sdk.atomicquerysigv2onchainpubsignals",id:"api/js-sdk.atomicquerysigv2onchainpubsignals",title:"AtomicQuerySigV2OnChainPubSignals class",description:"AtomicQuerySigV2OnChainPubSignals class",source:"@site/docs/api/js-sdk.atomicquerysigv2onchainpubsignals.md",sourceDirName:"api",slug:"/api/js-sdk.atomicquerysigv2onchainpubsignals",permalink:"/js-sdk-tutorials/docs/api/js-sdk.atomicquerysigv2onchainpubsignals",draft:!1,tags:[],version:"current",frontMatter:{id:"js-sdk.atomicquerysigv2onchainpubsignals",title:"AtomicQuerySigV2OnChainPubSignals class",hide_title:!0},sidebar:"api",previous:{title:"AtomicQuerySigV2OnChainPubSignals.issuerID property",permalink:"/js-sdk-tutorials/docs/api/js-sdk.atomicquerysigv2onchainpubsignals.issuerid"},next:{title:"AtomicQuerySigV2OnChainPubSignals.merklized property",permalink:"/js-sdk-tutorials/docs/api/js-sdk.atomicquerysigv2onchainpubsignals.merklized"}},u={},o=[{value:"AtomicQuerySigV2OnChainPubSignals class",id:"atomicquerysigv2onchainpubsignals-class",level:2},{value:"Properties",id:"properties",level:2},{value:"Methods",id:"methods",level:2}],p={toc:o};function d(t){let{components:e,...a}=t;return(0,r.kt)("wrapper",(0,n.Z)({},p,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"atomicquerysigv2onchainpubsignals-class"},"AtomicQuerySigV2OnChainPubSignals class"),(0,r.kt)("p",null,"public signals"),(0,r.kt)("p",null," AtomicQuerySigV2OnChainPubSignals  {BaseConfig}"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Signature:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"export declare class AtomicQuerySigV2OnChainPubSignals extends BaseConfig \n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Extends:")," ",(0,r.kt)("a",{parentName:"p",href:"/js-sdk-tutorials/docs/api/js-sdk.baseconfig"},"BaseConfig")),(0,r.kt)("h2",{id:"properties"},"Properties"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Property"),(0,r.kt)("th",{parentName:"tr",align:null},"Modifiers"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/js-sdk-tutorials/docs/api/js-sdk.atomicquerysigv2onchainpubsignals.challenge"},"challenge")),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"bigint"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/js-sdk-tutorials/docs/api/js-sdk.atomicquerysigv2onchainpubsignals.circuitqueryhash"},"circuitQueryHash")),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"bigint"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/js-sdk-tutorials/docs/api/js-sdk.atomicquerysigv2onchainpubsignals.gistroot"},"gistRoot")),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Hash"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/js-sdk-tutorials/docs/api/js-sdk.atomicquerysigv2onchainpubsignals.isrevocationchecked"},"isRevocationChecked")),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"number"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/js-sdk-tutorials/docs/api/js-sdk.atomicquerysigv2onchainpubsignals.issuerauthstate"},"issuerAuthState")),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Hash"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/js-sdk-tutorials/docs/api/js-sdk.atomicquerysigv2onchainpubsignals.issuerclaimnonrevstate"},"issuerClaimNonRevState")),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Hash"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/js-sdk-tutorials/docs/api/js-sdk.atomicquerysigv2onchainpubsignals.issuerid"},"issuerID")),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Id"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/js-sdk-tutorials/docs/api/js-sdk.atomicquerysigv2onchainpubsignals.merklized"},"merklized")),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"number"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/js-sdk-tutorials/docs/api/js-sdk.atomicquerysigv2onchainpubsignals.requestid"},"requestID")),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"bigint"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/js-sdk-tutorials/docs/api/js-sdk.atomicquerysigv2onchainpubsignals.timestamp"},"timestamp")),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"number"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/js-sdk-tutorials/docs/api/js-sdk.atomicquerysigv2onchainpubsignals.userid"},"userID")),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Id"),(0,r.kt)("td",{parentName:"tr",align:null})))),(0,r.kt)("h2",{id:"methods"},"Methods"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Method"),(0,r.kt)("th",{parentName:"tr",align:null},"Modifiers"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/js-sdk-tutorials/docs/api/js-sdk.atomicquerysigv2onchainpubsignals.pubsignalsunmarshal"},"pubSignalsUnmarshal(data)")),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"// PubSignalsUnmarshal unmarshal credentialAtomicQuerySig.circom public signals")))))}d.isMDXComponent=!0}}]);