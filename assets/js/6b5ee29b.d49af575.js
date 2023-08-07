"use strict";(self.webpackChunkjs_sdk_tutorials=self.webpackChunkjs_sdk_tutorials||[]).push([[52140],{3905:(t,e,r)=>{r.d(e,{Zo:()=>d,kt:()=>f});var a=r(67294);function n(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function o(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,a)}return r}function i(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?o(Object(r),!0).forEach((function(e){n(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function s(t,e){if(null==t)return{};var r,a,n=function(t,e){if(null==t)return{};var r,a,n={},o=Object.keys(t);for(a=0;a<o.length;a++)r=o[a],e.indexOf(r)>=0||(n[r]=t[r]);return n}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(a=0;a<o.length;a++)r=o[a],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}var l=a.createContext({}),p=function(t){var e=a.useContext(l),r=e;return t&&(r="function"==typeof t?t(e):i(i({},e),t)),r},d=function(t){var e=p(t.components);return a.createElement(l.Provider,{value:e},t.children)},c="mdxType",u={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},m=a.forwardRef((function(t,e){var r=t.components,n=t.mdxType,o=t.originalType,l=t.parentName,d=s(t,["components","mdxType","originalType","parentName"]),c=p(r),m=n,f=c["".concat(l,".").concat(m)]||c[m]||u[m]||o;return r?a.createElement(f,i(i({ref:e},d),{},{components:r})):a.createElement(f,i({ref:e},d))}));function f(t,e){var r=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var o=r.length,i=new Array(o);i[0]=m;var s={};for(var l in e)hasOwnProperty.call(e,l)&&(s[l]=e[l]);s.originalType=t,s[c]="string"==typeof t?t:n,i[1]=s;for(var p=2;p<o;p++)i[p]=r[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},8800:(t,e,r)=>{r.r(e),r.d(e,{assets:()=>l,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var a=r(87462),n=(r(67294),r(3905));const o={id:"js-sdk.proofservice.transitstate",title:"ProofService.transitState() method",hide_title:!0},i=void 0,s={unversionedId:"api/js-sdk.proofservice.transitstate",id:"api/js-sdk.proofservice.transitstate",title:"ProofService.transitState() method",description:"ProofService.transitState() method",source:"@site/docs/api/js-sdk.proofservice.transitstate.md",sourceDirName:"api",slug:"/api/js-sdk.proofservice.transitstate",permalink:"/js-sdk-tutorials/docs/api/js-sdk.proofservice.transitstate",draft:!1,tags:[],version:"current",frontMatter:{id:"js-sdk.proofservice.transitstate",title:"ProofService.transitState() method",hide_title:!0},sidebar:"api",previous:{title:"ProofService.transformQueryValueToBigInts() method",permalink:"/js-sdk-tutorials/docs/api/js-sdk.proofservice.transformqueryvaluetobigints"},next:{title:"ProofService.verifyProof() method",permalink:"/js-sdk-tutorials/docs/api/js-sdk.proofservice.verifyproof"}},l={},p=[{value:"ProofService.transitState() method",id:"proofservicetransitstate-method",level:2},{value:"Parameters",id:"parameters",level:2}],d={toc:p};function c(t){let{components:e,...r}=t;return(0,n.kt)("wrapper",(0,a.Z)({},d,r,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"proofservicetransitstate-method"},"ProofService.transitState() method"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"This API is provided as a preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.")),(0,n.kt)("p",null,"transitState is done always to the latest state"),(0,n.kt)("p",null,"Generates a state transition proof and publishes state to the blockchain"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Signature:")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-typescript"},"transitState(did: DID, oldTreeState: TreeState, isOldStateGenesis: boolean, stateStorage: IStateStorage, ethSigner: Signer): Promise<string>;\n")),(0,n.kt)("h2",{id:"parameters"},"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"did"),(0,n.kt)("td",{parentName:"tr",align:null},"DID"),(0,n.kt)("td",{parentName:"tr",align:null},"identity that will transit state")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"oldTreeState"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/js-sdk-tutorials/docs/api/js-sdk.treestate"},"TreeState")),(0,n.kt)("td",{parentName:"tr",align:null},"previous tree state")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"isOldStateGenesis"),(0,n.kt)("td",{parentName:"tr",align:null},"boolean"),(0,n.kt)("td",{parentName:"tr",align:null},"is a transition state is done from genesis state")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"stateStorage"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/js-sdk-tutorials/docs/api/js-sdk.istatestorage"},"IStateStorage")),(0,n.kt)("td",{parentName:"tr",align:null},"storage of identity states (only eth based storage currently)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"ethSigner"),(0,n.kt)("td",{parentName:"tr",align:null},"Signer"),(0,n.kt)("td",{parentName:"tr",align:null},"signer for transaction")))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Returns:")),(0,n.kt)("p",null,"Promise","<","string",">"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"{Promise<string>}")," - transaction hash is returned"))}c.isMDXComponent=!0}}]);