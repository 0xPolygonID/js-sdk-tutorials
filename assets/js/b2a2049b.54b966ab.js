"use strict";(self.webpackChunkpolygonid_js_sdk_website=self.webpackChunkpolygonid_js_sdk_website||[]).push([[5714],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>c});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var d=n.createContext({}),m=function(e){var t=n.useContext(d),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=m(e.components);return n.createElement(d.Provider,{value:t},e.children)},s="mdxType",k={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,d=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),s=m(r),u=a,c=s["".concat(d,".").concat(u)]||s[u]||k[u]||o;return r?n.createElement(c,l(l({ref:t},p),{},{components:r})):n.createElement(c,l({ref:t},p))}));function c(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=u;var i={};for(var d in t)hasOwnProperty.call(t,d)&&(i[d]=t[d]);i.originalType=e,i[s]="string"==typeof e?e:a,l[1]=i;for(var m=2;m<o;m++)l[m]=r[m];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},7631:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>s,frontMatter:()=>o,metadata:()=>i,toc:()=>m});var n=r(7462),a=(r(7294),r(3905));const o={id:"polygonid-js-sdk.inmemorymerkletreestorage.addtomerkletree",title:"InMemoryMerkleTreeStorage.addToMerkleTree() method",hide_title:!0},l=void 0,i={unversionedId:"api/polygonid-js-sdk.inmemorymerkletreestorage.addtomerkletree",id:"api/polygonid-js-sdk.inmemorymerkletreestorage.addtomerkletree",title:"InMemoryMerkleTreeStorage.addToMerkleTree() method",description:"InMemoryMerkleTreeStorage.addToMerkleTree() method",source:"@site/docs/api/polygonid-js-sdk.inmemorymerkletreestorage.addtomerkletree.md",sourceDirName:"api",slug:"/api/polygonid-js-sdk.inmemorymerkletreestorage.addtomerkletree",permalink:"/docs/api/polygonid-js-sdk.inmemorymerkletreestorage.addtomerkletree",draft:!1,tags:[],version:"current",frontMatter:{id:"polygonid-js-sdk.inmemorymerkletreestorage.addtomerkletree",title:"InMemoryMerkleTreeStorage.addToMerkleTree() method",hide_title:!0},sidebar:"api",previous:{title:"InMemoryMerkleTreeStorage.\\_data property",permalink:"/docs/api/polygonid-js-sdk.inmemorymerkletreestorage._data"},next:{title:"InMemoryMerkleTreeStorage.bindMerkleTreeToNewIdentifier() method",permalink:"/docs/api/polygonid-js-sdk.inmemorymerkletreestorage.bindmerkletreetonewidentifier"}},d={},m=[{value:"InMemoryMerkleTreeStorage.addToMerkleTree() method",id:"inmemorymerkletreestorageaddtomerkletree-method",level:2},{value:"Parameters",id:"parameters",level:2}],p={toc:m};function s(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"inmemorymerkletreestorageaddtomerkletree-method"},"InMemoryMerkleTreeStorage.addToMerkleTree() method"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"This API is provided as a preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.")),(0,a.kt)("p",null,"adds entry to merkle tree in the memory"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Signature:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"addToMerkleTree(identifier: string, mtType: MerkleTreeType, hindex: bigint, hvalue: bigint): Promise<void>;\n")),(0,a.kt)("h2",{id:"parameters"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"identifier"),(0,a.kt)("td",{parentName:"tr",align:null},"string"),(0,a.kt)("td",{parentName:"tr",align:null})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"mtType"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"/docs/api/polygonid-js-sdk.merkletreetype"},"MerkleTreeType")),(0,a.kt)("td",{parentName:"tr",align:null})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"hindex"),(0,a.kt)("td",{parentName:"tr",align:null},"bigint"),(0,a.kt)("td",{parentName:"tr",align:null})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"hvalue"),(0,a.kt)("td",{parentName:"tr",align:null},"bigint"),(0,a.kt)("td",{parentName:"tr",align:null})))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Returns:")),(0,a.kt)("p",null,"Promise","<","void",">"))}s.isMDXComponent=!0}}]);