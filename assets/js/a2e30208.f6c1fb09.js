"use strict";(self.webpackChunkpolygonid_js_sdk_website=self.webpackChunkpolygonid_js_sdk_website||[]).push([[23705],{3905:(t,e,a)=>{a.d(e,{Zo:()=>d,kt:()=>g});var n=a(67294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function p(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var s=n.createContext({}),o=function(t){var e=n.useContext(s),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},d=function(t){var e=o(t.components);return n.createElement(s.Provider,{value:e},t.children)},m="mdxType",u={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},k=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,s=t.parentName,d=p(t,["components","mdxType","originalType","parentName"]),m=o(a),k=r,g=m["".concat(s,".").concat(k)]||m[k]||u[k]||l;return a?n.createElement(g,i(i({ref:e},d),{},{components:a})):n.createElement(g,i({ref:e},d))}));function g(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,i=new Array(l);i[0]=k;var p={};for(var s in e)hasOwnProperty.call(e,s)&&(p[s]=e[s]);p.originalType=t,p[m]="string"==typeof t?t:r,i[1]=p;for(var o=2;o<l;o++)i[o]=a[o];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}k.displayName="MDXCreateElement"},73543:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>p,toc:()=>o});var n=a(87462),r=(a(67294),a(3905));const l={id:"polygonid-js-sdk.atomicquerymtpv2pubsignals",title:"AtomicQueryMTPV2PubSignals class",hide_title:!0},i=void 0,p={unversionedId:"api/polygonid-js-sdk.atomicquerymtpv2pubsignals",id:"api/polygonid-js-sdk.atomicquerymtpv2pubsignals",title:"AtomicQueryMTPV2PubSignals class",description:"AtomicQueryMTPV2PubSignals class",source:"@site/docs/api/polygonid-js-sdk.atomicquerymtpv2pubsignals.md",sourceDirName:"api",slug:"/api/polygonid-js-sdk.atomicquerymtpv2pubsignals",permalink:"/polygonid-js-sdk-website/docs/api/polygonid-js-sdk.atomicquerymtpv2pubsignals",draft:!1,tags:[],version:"current",frontMatter:{id:"polygonid-js-sdk.atomicquerymtpv2pubsignals",title:"AtomicQueryMTPV2PubSignals class",hide_title:!0},sidebar:"api",previous:{title:"AtomicQueryMTPV2PubSignals.issuerID property",permalink:"/polygonid-js-sdk-website/docs/api/polygonid-js-sdk.atomicquerymtpv2pubsignals.issuerid"},next:{title:"AtomicQueryMTPV2PubSignals.merklized property",permalink:"/polygonid-js-sdk-website/docs/api/polygonid-js-sdk.atomicquerymtpv2pubsignals.merklized"}},s={},o=[{value:"AtomicQueryMTPV2PubSignals class",id:"atomicquerymtpv2pubsignals-class",level:2},{value:"Properties",id:"properties",level:2},{value:"Methods",id:"methods",level:2}],d={toc:o};function m(t){let{components:e,...a}=t;return(0,r.kt)("wrapper",(0,n.Z)({},d,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"atomicquerymtpv2pubsignals-class"},"AtomicQueryMTPV2PubSignals class"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"This API is provided as a preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.")),(0,r.kt)("p",null,"Public signals"),(0,r.kt)("p",null," AtomicQueryMTPV2PubSignals  {BaseConfig}"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Signature:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"export declare class AtomicQueryMTPV2PubSignals extends BaseConfig \n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Extends:")," ",(0,r.kt)("a",{parentName:"p",href:"/polygonid-js-sdk-website/docs/api/polygonid-js-sdk.baseconfig"},"BaseConfig")),(0,r.kt)("h2",{id:"properties"},"Properties"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Property"),(0,r.kt)("th",{parentName:"tr",align:null},"Modifiers"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/polygonid-js-sdk-website/docs/api/polygonid-js-sdk.atomicquerymtpv2pubsignals.claimpathkey"},"claimPathKey?")),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"bigint"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("em",{parentName:"strong"},"(BETA)"))," ",(0,r.kt)("em",{parentName:"td"},"(Optional)"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/polygonid-js-sdk-website/docs/api/polygonid-js-sdk.atomicquerymtpv2pubsignals.claimpathnotexists"},"claimPathNotExists")),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"number"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("em",{parentName:"strong"},"(BETA)")))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/polygonid-js-sdk-website/docs/api/polygonid-js-sdk.atomicquerymtpv2pubsignals.claimschema"},"claimSchema")),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"SchemaHash"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("em",{parentName:"strong"},"(BETA)")))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/polygonid-js-sdk-website/docs/api/polygonid-js-sdk.atomicquerymtpv2pubsignals.isrevocationchecked"},"isRevocationChecked")),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"number"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("em",{parentName:"strong"},"(BETA)")))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/polygonid-js-sdk-website/docs/api/polygonid-js-sdk.atomicquerymtpv2pubsignals.issuerclaimidenstate"},"issuerClaimIdenState?")),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Hash"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("em",{parentName:"strong"},"(BETA)"))," ",(0,r.kt)("em",{parentName:"td"},"(Optional)"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/polygonid-js-sdk-website/docs/api/polygonid-js-sdk.atomicquerymtpv2pubsignals.issuerclaimnonrevstate"},"issuerClaimNonRevState?")),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Hash"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("em",{parentName:"strong"},"(BETA)"))," ",(0,r.kt)("em",{parentName:"td"},"(Optional)"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/polygonid-js-sdk-website/docs/api/polygonid-js-sdk.atomicquerymtpv2pubsignals.issuerid"},"issuerID?")),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Id"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("em",{parentName:"strong"},"(BETA)"))," ",(0,r.kt)("em",{parentName:"td"},"(Optional)"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/polygonid-js-sdk-website/docs/api/polygonid-js-sdk.atomicquerymtpv2pubsignals.merklized"},"merklized")),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"number"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("em",{parentName:"strong"},"(BETA)")))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/polygonid-js-sdk-website/docs/api/polygonid-js-sdk.atomicquerymtpv2pubsignals.operator"},"operator")),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"number"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("em",{parentName:"strong"},"(BETA)")))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/polygonid-js-sdk-website/docs/api/polygonid-js-sdk.atomicquerymtpv2pubsignals.requestid"},"requestID?")),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"bigint"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("em",{parentName:"strong"},"(BETA)"))," ",(0,r.kt)("em",{parentName:"td"},"(Optional)"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/polygonid-js-sdk-website/docs/api/polygonid-js-sdk.atomicquerymtpv2pubsignals.slotindex"},"slotIndex")),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"number"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("em",{parentName:"strong"},"(BETA)")))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/polygonid-js-sdk-website/docs/api/polygonid-js-sdk.atomicquerymtpv2pubsignals.timestamp"},"timestamp")),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"number"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("em",{parentName:"strong"},"(BETA)")))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/polygonid-js-sdk-website/docs/api/polygonid-js-sdk.atomicquerymtpv2pubsignals.userid"},"userID?")),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Id"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("em",{parentName:"strong"},"(BETA)"))," ",(0,r.kt)("em",{parentName:"td"},"(Optional)"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/polygonid-js-sdk-website/docs/api/polygonid-js-sdk.atomicquerymtpv2pubsignals.value"},"value")),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"bigint","[","]"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("em",{parentName:"strong"},"(BETA)")))))),(0,r.kt)("h2",{id:"methods"},"Methods"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Method"),(0,r.kt)("th",{parentName:"tr",align:null},"Modifiers"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/polygonid-js-sdk-website/docs/api/polygonid-js-sdk.atomicquerymtpv2pubsignals.pubsignalsunmarshal"},"pubSignalsUnmarshal(data)")),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("em",{parentName:"strong"},"(BETA)"))," PubSignalsUnmarshal unmarshal credentialAtomicQueryMTP.circom public signals array to AtomicQueryMTPPubSignals")))))}m.isMDXComponent=!0}}]);