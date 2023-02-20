"use strict";(self.webpackChunkjs_sdk_tutorials=self.webpackChunkjs_sdk_tutorials||[]).push([[10507],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>m});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},l=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},f="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),f=c(r),u=a,m=f["".concat(s,".").concat(u)]||f[u]||d[u]||i;return r?n.createElement(m,o(o({ref:t},l),{},{components:r})):n.createElement(m,o({ref:t},l))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=u;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p[f]="string"==typeof e?e:a,o[1]=p;for(var c=2;c<i;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},33468:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>f,frontMatter:()=>i,metadata:()=>p,toc:()=>c});var n=r(87462),a=(r(67294),r(3905));const i={id:"js-sdk.iproofservice",title:"IProofService interface",hide_title:!0},o=void 0,p={unversionedId:"api/js-sdk.iproofservice",id:"api/js-sdk.iproofservice",title:"IProofService interface",description:"IProofService interface",source:"@site/docs/api/js-sdk.iproofservice.md",sourceDirName:"api",slug:"/api/js-sdk.iproofservice",permalink:"/docs/api/js-sdk.iproofservice",draft:!1,tags:[],version:"current",frontMatter:{id:"js-sdk.iproofservice",title:"IProofService interface",hide_title:!0},sidebar:"api",previous:{title:"IProofService.generateProof() method",permalink:"/docs/api/js-sdk.iproofservice.generateproof"},next:{title:"IProofService.transitState() method",permalink:"/docs/api/js-sdk.iproofservice.transitstate"}},s={},c=[{value:"IProofService interface",id:"iproofservice-interface",level:2},{value:"Methods",id:"methods",level:2}],l={toc:c};function f(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"iproofservice-interface"},"IProofService interface"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Signature:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"export interface IProofService \n")),(0,a.kt)("h2",{id:"methods"},"Methods"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Method"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"/docs/api/js-sdk.iproofservice.generateauthv2inputs"},"generateAuthV2Inputs(hash, did, profileNonce, circuitId)")),(0,a.kt)("td",{parentName:"tr",align:null},"generates auth inputs")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"/docs/api/js-sdk.iproofservice.generateproof"},"generateProof(proofReq, identifier, credential, opts)")),(0,a.kt)("td",{parentName:"tr",align:null},"Generate proof from given identity and credential for protocol proof request")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"/docs/api/js-sdk.iproofservice.transitstate"},"transitState(did, oldTreeState, isOldStateGenesis, stateStorage, ethSigner)")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("p",null,"transitState is done always to the latest state"),(0,a.kt)("p",null,"Generates a state transition proof and publishes state to the blockchain"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"/docs/api/js-sdk.iproofservice.verifyproof"},"verifyProof(zkp, circuitName)")),(0,a.kt)("td",{parentName:"tr",align:null},"Verification of zkp proof for given circuit id")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"/docs/api/js-sdk.iproofservice.verifystate"},"verifyState(circuitId, pubSignals)")),(0,a.kt)("td",{parentName:"tr",align:null},"state verification function")))))}f.isMDXComponent=!0}}]);