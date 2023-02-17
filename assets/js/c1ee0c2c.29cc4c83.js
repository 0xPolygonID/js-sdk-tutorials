"use strict";(self.webpackChunkpolygonid_js_sdk_website=self.webpackChunkpolygonid_js_sdk_website||[]).push([[53137],{3905:(t,e,r)=>{r.d(e,{Zo:()=>s,kt:()=>g});var a=r(67294);function i(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function n(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,a)}return r}function o(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?n(Object(r),!0).forEach((function(e){i(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function c(t,e){if(null==t)return{};var r,a,i=function(t,e){if(null==t)return{};var r,a,i={},n=Object.keys(t);for(a=0;a<n.length;a++)r=n[a],e.indexOf(r)>=0||(i[r]=t[r]);return i}(t,e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);for(a=0;a<n.length;a++)r=n[a],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(i[r]=t[r])}return i}var l=a.createContext({}),d=function(t){var e=a.useContext(l),r=e;return t&&(r="function"==typeof t?t(e):o(o({},e),t)),r},s=function(t){var e=d(t.components);return a.createElement(l.Provider,{value:e},t.children)},p="mdxType",u={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},m=a.forwardRef((function(t,e){var r=t.components,i=t.mdxType,n=t.originalType,l=t.parentName,s=c(t,["components","mdxType","originalType","parentName"]),p=d(r),m=i,g=p["".concat(l,".").concat(m)]||p[m]||u[m]||n;return r?a.createElement(g,o(o({ref:e},s),{},{components:r})):a.createElement(g,o({ref:e},s))}));function g(t,e){var r=arguments,i=e&&e.mdxType;if("string"==typeof t||i){var n=r.length,o=new Array(n);o[0]=m;var c={};for(var l in e)hasOwnProperty.call(e,l)&&(c[l]=e[l]);c.originalType=t,c[p]="string"==typeof t?t:i,o[1]=c;for(var d=2;d<n;d++)o[d]=r[d];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},25799:(t,e,r)=>{r.r(e),r.d(e,{assets:()=>l,contentTitle:()=>o,default:()=>p,frontMatter:()=>n,metadata:()=>c,toc:()=>d});var a=r(87462),i=(r(67294),r(3905));const n={id:"polygonid-js-sdk.circuitstorage.loadcircuitdata",title:"CircuitStorage.loadCircuitData() method",hide_title:!0},o=void 0,c={unversionedId:"api/polygonid-js-sdk.circuitstorage.loadcircuitdata",id:"api/polygonid-js-sdk.circuitstorage.loadcircuitdata",title:"CircuitStorage.loadCircuitData() method",description:"CircuitStorage.loadCircuitData() method",source:"@site/docs/api/polygonid-js-sdk.circuitstorage.loadcircuitdata.md",sourceDirName:"api",slug:"/api/polygonid-js-sdk.circuitstorage.loadcircuitdata",permalink:"/polygonid-js-sdk-website/docs/api/polygonid-js-sdk.circuitstorage.loadcircuitdata",draft:!1,tags:[],version:"current",frontMatter:{id:"polygonid-js-sdk.circuitstorage.loadcircuitdata",title:"CircuitStorage.loadCircuitData() method",hide_title:!0},sidebar:"api",previous:{title:"CircuitStorage.(constructor)",permalink:"/polygonid-js-sdk-website/docs/api/polygonid-js-sdk.circuitstorage._constructor_"},next:{title:"CircuitStorage class",permalink:"/polygonid-js-sdk-website/docs/api/polygonid-js-sdk.circuitstorage"}},l={},d=[{value:"CircuitStorage.loadCircuitData() method",id:"circuitstorageloadcircuitdata-method",level:2},{value:"Parameters",id:"parameters",level:2}],s={toc:d};function p(t){let{components:e,...r}=t;return(0,i.kt)("wrapper",(0,a.Z)({},s,r,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"circuitstorageloadcircuitdata-method"},"CircuitStorage.loadCircuitData() method"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"This API is provided as a preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.")),(0,i.kt)("p",null,"loads circuit data by id"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Signature:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"loadCircuitData(circuitId: CircuitId): Promise<CircuitData>;\n")),(0,i.kt)("h2",{id:"parameters"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,i.kt)("th",{parentName:"tr",align:null},"Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"circuitId"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/polygonid-js-sdk-website/docs/api/polygonid-js-sdk.circuitid"},"CircuitId")),(0,i.kt)("td",{parentName:"tr",align:null},"id of the circuit")))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Returns:")),(0,i.kt)("p",null,"Promise","<",(0,i.kt)("a",{parentName:"p",href:"/polygonid-js-sdk-website/docs/api/polygonid-js-sdk.circuitdata"},"CircuitData"),">"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Promise<CircuitData>")))}p.isMDXComponent=!0}}]);