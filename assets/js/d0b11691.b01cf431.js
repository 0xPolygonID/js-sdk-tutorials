"use strict";(self.webpackChunkjs_sdk_tutorials=self.webpackChunkjs_sdk_tutorials||[]).push([[2795],{3905:(t,e,a)=>{a.d(e,{Zo:()=>u,kt:()=>m});var n=a(67294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function s(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?s(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function l(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},s=Object.keys(t);for(n=0;n<s.length;n++)a=s[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);for(n=0;n<s.length;n++)a=s[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var o=n.createContext({}),p=function(t){var e=n.useContext(o),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},u=function(t){var e=p(t.components);return n.createElement(o.Provider,{value:e},t.children)},d="mdxType",c={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},k=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,s=t.originalType,o=t.parentName,u=l(t,["components","mdxType","originalType","parentName"]),d=p(a),k=r,m=d["".concat(o,".").concat(k)]||d[k]||c[k]||s;return a?n.createElement(m,i(i({ref:e},u),{},{components:a})):n.createElement(m,i({ref:e},u))}));function m(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var s=a.length,i=new Array(s);i[0]=k;var l={};for(var o in e)hasOwnProperty.call(e,o)&&(l[o]=e[o]);l.originalType=t,l[d]="string"==typeof t?t:r,i[1]=l;for(var p=2;p<s;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}k.displayName="MDXCreateElement"},87069:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>o,contentTitle:()=>i,default:()=>d,frontMatter:()=>s,metadata:()=>l,toc:()=>p});var n=a(87462),r=(a(67294),a(3905));const s={id:"js-sdk.statetransitionpubsignals",title:"StateTransitionPubSignals class",hide_title:!0},i=void 0,l={unversionedId:"api/js-sdk.statetransitionpubsignals",id:"api/js-sdk.statetransitionpubsignals",title:"StateTransitionPubSignals class",description:"StateTransitionPubSignals class",source:"@site/docs/api/js-sdk.statetransitionpubsignals.md",sourceDirName:"api",slug:"/api/js-sdk.statetransitionpubsignals",permalink:"/js-sdk-tutorials/docs/api/js-sdk.statetransitionpubsignals",draft:!1,tags:[],version:"current",frontMatter:{id:"js-sdk.statetransitionpubsignals",title:"StateTransitionPubSignals class",hide_title:!0},sidebar:"api",previous:{title:"StateTransitionPubSignals.isOldStateGenesis property",permalink:"/js-sdk-tutorials/docs/api/js-sdk.statetransitionpubsignals.isoldstategenesis"},next:{title:"StateTransitionPubSignals.newUserState property",permalink:"/js-sdk-tutorials/docs/api/js-sdk.statetransitionpubsignals.newuserstate"}},o={},p=[{value:"StateTransitionPubSignals class",id:"statetransitionpubsignals-class",level:2},{value:"Properties",id:"properties",level:2},{value:"Methods",id:"methods",level:2}],u={toc:p};function d(t){let{components:e,...a}=t;return(0,r.kt)("wrapper",(0,n.Z)({},u,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"statetransitionpubsignals-class"},"StateTransitionPubSignals class"),(0,r.kt)("p",null,"Public signals of StateTransition circuit"),(0,r.kt)("p",null," StateTransitionPubSignals"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Signature:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"export declare class StateTransitionPubSignals \n")),(0,r.kt)("h2",{id:"properties"},"Properties"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Property"),(0,r.kt)("th",{parentName:"tr",align:null},"Modifiers"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/js-sdk-tutorials/docs/api/js-sdk.statetransitionpubsignals.isoldstategenesis"},"isOldStateGenesis")),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/js-sdk-tutorials/docs/api/js-sdk.statetransitionpubsignals.newuserstate"},"newUserState")),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Hash"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/js-sdk-tutorials/docs/api/js-sdk.statetransitionpubsignals.olduserstate"},"oldUserState")),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Hash"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/js-sdk-tutorials/docs/api/js-sdk.statetransitionpubsignals.userid"},"userId")),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Id"),(0,r.kt)("td",{parentName:"tr",align:null})))),(0,r.kt)("h2",{id:"methods"},"Methods"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Method"),(0,r.kt)("th",{parentName:"tr",align:null},"Modifiers"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/js-sdk-tutorials/docs/api/js-sdk.statetransitionpubsignals.pubsignalsunmarshal"},"pubSignalsUnmarshal(data)")),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"PubSignalsUnmarshal unmarshal stateTransition.circom public signal")))))}d.isMDXComponent=!0}}]);