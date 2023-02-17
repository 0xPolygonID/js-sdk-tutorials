"use strict";(self.webpackChunkpolygonid_js_sdk_website=self.webpackChunkpolygonid_js_sdk_website||[]).push([[93305],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>g});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var d=n.createContext({}),s=function(e){var t=n.useContext(d),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(d.Provider,{value:t},e.children)},k="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,d=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),k=s(r),c=a,g=k["".concat(d,".").concat(c)]||k[c]||m[c]||o;return r?n.createElement(g,i(i({ref:t},p),{},{components:r})):n.createElement(g,i({ref:t},p))}));function g(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=c;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l[k]="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}c.displayName="MDXCreateElement"},18269:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>k,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var n=r(87462),a=(r(67294),r(3905));const o={id:"polygonid-js-sdk.imerkletreestorage",title:"IMerkleTreeStorage interface",hide_title:!0},i=void 0,l={unversionedId:"api/polygonid-js-sdk.imerkletreestorage",id:"api/polygonid-js-sdk.imerkletreestorage",title:"IMerkleTreeStorage interface",description:"IMerkleTreeStorage interface",source:"@site/docs/api/polygonid-js-sdk.imerkletreestorage.md",sourceDirName:"api",slug:"/api/polygonid-js-sdk.imerkletreestorage",permalink:"/polygonid-js-sdk-website/docs/api/polygonid-js-sdk.imerkletreestorage",draft:!1,tags:[],version:"current",frontMatter:{id:"polygonid-js-sdk.imerkletreestorage",title:"IMerkleTreeStorage interface",hide_title:!0},sidebar:"api",previous:{title:"IMerkleTreeStorage.getMerkleTreeByIdentifierAndType() method",permalink:"/polygonid-js-sdk-website/docs/api/polygonid-js-sdk.imerkletreestorage.getmerkletreebyidentifierandtype"},next:{title:"InMemoryDataSource.delete() method",permalink:"/polygonid-js-sdk-website/docs/api/polygonid-js-sdk.inmemorydatasource.delete"}},d={},s=[{value:"IMerkleTreeStorage interface",id:"imerkletreestorage-interface",level:2},{value:"Methods",id:"methods",level:2}],p={toc:s};function k(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"imerkletreestorage-interface"},"IMerkleTreeStorage interface"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"This API is provided as a preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.")),(0,a.kt)("p",null,"Interface to work with a merkle tree storage"),(0,a.kt)("p",null," IMerkleTreeStorage"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Signature:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"export interface IMerkleTreeStorage \n")),(0,a.kt)("h2",{id:"methods"},"Methods"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Method"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"/polygonid-js-sdk-website/docs/api/polygonid-js-sdk.imerkletreestorage.addtomerkletree"},"addToMerkleTree(identifier, mtType, hindex, hvalue)")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},(0,a.kt)("em",{parentName:"strong"},"(BETA)"))," adds entry to merkle tree")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"/polygonid-js-sdk-website/docs/api/polygonid-js-sdk.imerkletreestorage.bindmerkletreetonewidentifier"},"bindMerkleTreeToNewIdentifier(oldIdentifier, newIdentifier)")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},(0,a.kt)("em",{parentName:"strong"},"(BETA)"))," binding to be able to update identifier that belongs to tree")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"/polygonid-js-sdk-website/docs/api/polygonid-js-sdk.imerkletreestorage.createidentitymerkletrees"},"createIdentityMerkleTrees(identifier)")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},(0,a.kt)("em",{parentName:"strong"},"(BETA)"))," creates merkle tree in the storage")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"/polygonid-js-sdk-website/docs/api/polygonid-js-sdk.imerkletreestorage.getmerkletreebyidentifierandtype"},"getMerkleTreeByIdentifierAndType(identifier, mtType)")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},(0,a.kt)("em",{parentName:"strong"},"(BETA)"))," gets merkle tree by identifier and type")))))}k.isMDXComponent=!0}}]);