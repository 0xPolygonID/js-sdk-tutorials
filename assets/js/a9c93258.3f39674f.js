"use strict";(self.webpackChunkjs_sdk_tutorials=self.webpackChunkjs_sdk_tutorials||[]).push([[14567],{3905:(t,a,e)=>{e.d(a,{Zo:()=>u,kt:()=>k});var n=e(67294);function r(t,a,e){return a in t?Object.defineProperty(t,a,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[a]=e,t}function i(t,a){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(t,a).enumerable}))),e.push.apply(e,n)}return e}function l(t){for(var a=1;a<arguments.length;a++){var e=null!=arguments[a]?arguments[a]:{};a%2?i(Object(e),!0).forEach((function(a){r(t,a,e[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):i(Object(e)).forEach((function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(e,a))}))}return t}function s(t,a){if(null==t)return{};var e,n,r=function(t,a){if(null==t)return{};var e,n,r={},i=Object.keys(t);for(n=0;n<i.length;n++)e=i[n],a.indexOf(e)>=0||(r[e]=t[e]);return r}(t,a);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(n=0;n<i.length;n++)e=i[n],a.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(t,e)&&(r[e]=t[e])}return r}var p=n.createContext({}),o=function(t){var a=n.useContext(p),e=a;return t&&(e="function"==typeof t?t(a):l(l({},a),t)),e},u=function(t){var a=o(t.components);return n.createElement(p.Provider,{value:a},t.children)},d="mdxType",m={inlineCode:"code",wrapper:function(t){var a=t.children;return n.createElement(n.Fragment,{},a)}},c=n.forwardRef((function(t,a){var e=t.components,r=t.mdxType,i=t.originalType,p=t.parentName,u=s(t,["components","mdxType","originalType","parentName"]),d=o(e),c=r,k=d["".concat(p,".").concat(c)]||d[c]||m[c]||i;return e?n.createElement(k,l(l({ref:a},u),{},{components:e})):n.createElement(k,l({ref:a},u))}));function k(t,a){var e=arguments,r=a&&a.mdxType;if("string"==typeof t||r){var i=e.length,l=new Array(i);l[0]=c;var s={};for(var p in a)hasOwnProperty.call(a,p)&&(s[p]=a[p]);s.originalType=t,s[d]="string"==typeof t?t:r,l[1]=s;for(var o=2;o<i;o++)l[o]=e[o];return n.createElement.apply(null,l)}return n.createElement.apply(null,e)}c.displayName="MDXCreateElement"},94105:(t,a,e)=>{e.r(a),e.d(a,{assets:()=>p,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>o});var n=e(87462),r=(e(67294),e(3905));const i={id:"js-sdk.atomicquerysigv2onchaininputs",title:"AtomicQuerySigV2OnChainInputs class",hide_title:!0},l=void 0,s={unversionedId:"api/js-sdk.atomicquerysigv2onchaininputs",id:"api/js-sdk.atomicquerysigv2onchaininputs",title:"AtomicQuerySigV2OnChainInputs class",description:"AtomicQuerySigV2OnChainInputs class",source:"@site/docs/api/js-sdk.atomicquerysigv2onchaininputs.md",sourceDirName:"api",slug:"/api/js-sdk.atomicquerysigv2onchaininputs",permalink:"/js-sdk-tutorials/docs/api/js-sdk.atomicquerysigv2onchaininputs",draft:!1,tags:[],version:"current",frontMatter:{id:"js-sdk.atomicquerysigv2onchaininputs",title:"AtomicQuerySigV2OnChainInputs class",hide_title:!0},sidebar:"api",previous:{title:"AtomicQuerySigV2OnChainInputs.inputsMarshal() method",permalink:"/js-sdk-tutorials/docs/api/js-sdk.atomicquerysigv2onchaininputs.inputsmarshal"},next:{title:"AtomicQuerySigV2OnChainInputs.profileNonce property",permalink:"/js-sdk-tutorials/docs/api/js-sdk.atomicquerysigv2onchaininputs.profilenonce"}},p={},o=[{value:"AtomicQuerySigV2OnChainInputs class",id:"atomicquerysigv2onchaininputs-class",level:2},{value:"Properties",id:"properties",level:2},{value:"Methods",id:"methods",level:2}],u={toc:o};function d(t){let{components:a,...e}=t;return(0,r.kt)("wrapper",(0,n.Z)({},u,e,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"atomicquerysigv2onchaininputs-class"},"AtomicQuerySigV2OnChainInputs class"),(0,r.kt)("p",null,"AtomicQuerySigV2OnChainInputs ZK private inputs for credentialAtomicQuerySig.circom"),(0,r.kt)("p",null," AtomicQuerySigV2OnChainInputs  {BaseConfig}"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Signature:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"export declare class AtomicQuerySigV2OnChainInputs extends BaseConfig \n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Extends:")," ",(0,r.kt)("a",{parentName:"p",href:"/js-sdk-tutorials/docs/api/js-sdk.baseconfig"},"BaseConfig")),(0,r.kt)("h2",{id:"properties"},"Properties"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Property"),(0,r.kt)("th",{parentName:"tr",align:null},"Modifiers"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/js-sdk-tutorials/docs/api/js-sdk.atomicquerysigv2onchaininputs.authclaim"},"authClaim")),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Claim"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/js-sdk-tutorials/docs/api/js-sdk.atomicquerysigv2onchaininputs.authclaimincmtp"},"authClaimIncMtp")),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Proof"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/js-sdk-tutorials/docs/api/js-sdk.atomicquerysigv2onchaininputs.authclaimnonrevmtp"},"authClaimNonRevMtp")),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Proof"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/js-sdk-tutorials/docs/api/js-sdk.atomicquerysigv2onchaininputs.challenge"},"challenge")),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"bigint"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/js-sdk-tutorials/docs/api/js-sdk.atomicquerysigv2onchaininputs.claim"},"claim")),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/js-sdk-tutorials/docs/api/js-sdk.claimwithsigproof"},"ClaimWithSigProof")),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/js-sdk-tutorials/docs/api/js-sdk.atomicquerysigv2onchaininputs.claimsubjectprofilenonce"},"claimSubjectProfileNonce")),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"bigint"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/js-sdk-tutorials/docs/api/js-sdk.atomicquerysigv2onchaininputs.currenttimestamp"},"currentTimeStamp")),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"number"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/js-sdk-tutorials/docs/api/js-sdk.atomicquerysigv2onchaininputs.gistproof"},"gistProof")),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/js-sdk-tutorials/docs/api/js-sdk.gistproof"},"GISTProof")),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/js-sdk-tutorials/docs/api/js-sdk.atomicquerysigv2onchaininputs.id"},"id")),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Id"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/js-sdk-tutorials/docs/api/js-sdk.atomicquerysigv2onchaininputs.profilenonce"},"profileNonce")),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"bigint"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/js-sdk-tutorials/docs/api/js-sdk.atomicquerysigv2onchaininputs.query"},"query")),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/js-sdk-tutorials/docs/api/js-sdk.query"},"Query")),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/js-sdk-tutorials/docs/api/js-sdk.atomicquerysigv2onchaininputs.requestid"},"requestID")),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"bigint"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/js-sdk-tutorials/docs/api/js-sdk.atomicquerysigv2onchaininputs.signature"},"signature")),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Signature"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/js-sdk-tutorials/docs/api/js-sdk.atomicquerysigv2onchaininputs.skipclaimrevocationcheck"},"skipClaimRevocationCheck")),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/js-sdk-tutorials/docs/api/js-sdk.atomicquerysigv2onchaininputs.treestate"},"treeState")),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/js-sdk-tutorials/docs/api/js-sdk.treestate"},"TreeState")),(0,r.kt)("td",{parentName:"tr",align:null})))),(0,r.kt)("h2",{id:"methods"},"Methods"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Method"),(0,r.kt)("th",{parentName:"tr",align:null},"Modifiers"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/js-sdk-tutorials/docs/api/js-sdk.atomicquerysigv2onchaininputs.inputsmarshal"},"inputsMarshal()")),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"marshal inputs")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/js-sdk-tutorials/docs/api/js-sdk.atomicquerysigv2onchaininputs.validate"},"validate()")),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Validate inputs")))))}d.isMDXComponent=!0}}]);