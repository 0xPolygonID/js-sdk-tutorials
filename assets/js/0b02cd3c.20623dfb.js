"use strict";(self.webpackChunkpolygonid_js_sdk_website=self.webpackChunkpolygonid_js_sdk_website||[]).push([[8384],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>u});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var d=n.createContext({}),s=function(e){var t=n.useContext(d),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(d.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},k=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,d=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),c=s(r),k=o,u=c["".concat(d,".").concat(k)]||c[k]||m[k]||i;return r?n.createElement(u,l(l({ref:t},p),{},{components:r})):n.createElement(u,l({ref:t},p))}));function u(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,l=new Array(i);l[0]=k;var a={};for(var d in t)hasOwnProperty.call(t,d)&&(a[d]=t[d]);a.originalType=e,a[c]="string"==typeof e?e:o,l[1]=a;for(var s=2;s<i;s++)l[s]=r[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}k.displayName="MDXCreateElement"},595:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>c,frontMatter:()=>i,metadata:()=>a,toc:()=>s});var n=r(7462),o=(r(7294),r(3905));const i={id:"polygonid-js-sdk.merkletreelocalstorage.bindmerkletreetonewidentifier",title:"MerkleTreeLocalStorage.bindMerkleTreeToNewIdentifier() method",hide_title:!0},l=void 0,a={unversionedId:"api/polygonid-js-sdk.merkletreelocalstorage.bindmerkletreetonewidentifier",id:"api/polygonid-js-sdk.merkletreelocalstorage.bindmerkletreetonewidentifier",title:"MerkleTreeLocalStorage.bindMerkleTreeToNewIdentifier() method",description:"MerkleTreeLocalStorage.bindMerkleTreeToNewIdentifier() method",source:"@site/docs/api/polygonid-js-sdk.merkletreelocalstorage.bindmerkletreetonewidentifier.md",sourceDirName:"api",slug:"/api/polygonid-js-sdk.merkletreelocalstorage.bindmerkletreetonewidentifier",permalink:"/polygonid-js-sdk-website/docs/api/polygonid-js-sdk.merkletreelocalstorage.bindmerkletreetonewidentifier",draft:!1,tags:[],version:"current",frontMatter:{id:"polygonid-js-sdk.merkletreelocalstorage.bindmerkletreetonewidentifier",title:"MerkleTreeLocalStorage.bindMerkleTreeToNewIdentifier() method",hide_title:!0},sidebar:"api",previous:{title:"MerkleTreeLocalStorage.addToMerkleTree() method",permalink:"/polygonid-js-sdk-website/docs/api/polygonid-js-sdk.merkletreelocalstorage.addtomerkletree"},next:{title:"MerkleTreeLocalStorage.createIdentityMerkleTrees() method",permalink:"/polygonid-js-sdk-website/docs/api/polygonid-js-sdk.merkletreelocalstorage.createidentitymerkletrees"}},d={},s=[{value:"MerkleTreeLocalStorage.bindMerkleTreeToNewIdentifier() method",id:"merkletreelocalstoragebindmerkletreetonewidentifier-method",level:2},{value:"Parameters",id:"parameters",level:2}],p={toc:s};function c(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"merkletreelocalstoragebindmerkletreetonewidentifier-method"},"MerkleTreeLocalStorage.bindMerkleTreeToNewIdentifier() method"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"This API is provided as a preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.")),(0,o.kt)("p",null,"binds merkle tree in the local storage to the new identifiers"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Signature:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"bindMerkleTreeToNewIdentifier(oldIdentifier: string, newIdentifier: string): Promise<void>;\n")),(0,o.kt)("h2",{id:"parameters"},"Parameters"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,o.kt)("th",{parentName:"tr",align:null},"Type"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"oldIdentifier"),(0,o.kt)("td",{parentName:"tr",align:null},"string"),(0,o.kt)("td",{parentName:"tr",align:null})),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"newIdentifier"),(0,o.kt)("td",{parentName:"tr",align:null},"string"),(0,o.kt)("td",{parentName:"tr",align:null})))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Returns:")),(0,o.kt)("p",null,"Promise","<","void",">"))}c.isMDXComponent=!0}}]);