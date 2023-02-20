"use strict";(self.webpackChunkjs_sdk_tutorials=self.webpackChunkjs_sdk_tutorials||[]).push([[61999],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>y});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),d=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},s=function(e){var t=d(e.components);return n.createElement(p.Provider,{value:t},e.children)},m="mdxType",k={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),m=d(r),c=a,y=m["".concat(p,".").concat(c)]||m[c]||k[c]||i;return r?n.createElement(y,l(l({ref:t},s),{},{components:r})):n.createElement(y,l({ref:t},s))}));function y(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,l=new Array(i);l[0]=c;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[m]="string"==typeof e?e:a,l[1]=o;for(var d=2;d<i;d++)l[d]=r[d];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}c.displayName="MDXCreateElement"},22736:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>o,toc:()=>d});var n=r(87462),a=(r(67294),r(3905));const i={id:"js-sdk.imerkletreestorage.getmerkletreebyidentifierandtype",title:"IMerkleTreeStorage.getMerkleTreeByIdentifierAndType() method",hide_title:!0},l=void 0,o={unversionedId:"api/js-sdk.imerkletreestorage.getmerkletreebyidentifierandtype",id:"api/js-sdk.imerkletreestorage.getmerkletreebyidentifierandtype",title:"IMerkleTreeStorage.getMerkleTreeByIdentifierAndType() method",description:"IMerkleTreeStorage.getMerkleTreeByIdentifierAndType() method",source:"@site/docs/api/js-sdk.imerkletreestorage.getmerkletreebyidentifierandtype.md",sourceDirName:"api",slug:"/api/js-sdk.imerkletreestorage.getmerkletreebyidentifierandtype",permalink:"/docs/api/js-sdk.imerkletreestorage.getmerkletreebyidentifierandtype",draft:!1,tags:[],version:"current",frontMatter:{id:"js-sdk.imerkletreestorage.getmerkletreebyidentifierandtype",title:"IMerkleTreeStorage.getMerkleTreeByIdentifierAndType() method",hide_title:!0},sidebar:"api",previous:{title:"IMerkleTreeStorage.createIdentityMerkleTrees() method",permalink:"/docs/api/js-sdk.imerkletreestorage.createidentitymerkletrees"},next:{title:"IMerkleTreeStorage interface",permalink:"/docs/api/js-sdk.imerkletreestorage"}},p={},d=[{value:"IMerkleTreeStorage.getMerkleTreeByIdentifierAndType() method",id:"imerkletreestoragegetmerkletreebyidentifierandtype-method",level:2},{value:"Parameters",id:"parameters",level:2}],s={toc:d};function m(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"imerkletreestoragegetmerkletreebyidentifierandtype-method"},"IMerkleTreeStorage.getMerkleTreeByIdentifierAndType() method"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"This API is provided as a preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.")),(0,a.kt)("p",null,"gets merkle tree by identifier and type"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Signature:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"getMerkleTreeByIdentifierAndType(identifier: string, mtType: MerkleTreeType): Promise<Merkletree>;\n")),(0,a.kt)("h2",{id:"parameters"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"identifier"),(0,a.kt)("td",{parentName:"tr",align:null},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"identifier for tree")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"mtType"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"/docs/api/js-sdk.merkletreetype"},"MerkleTreeType")),(0,a.kt)("td",{parentName:"tr",align:null},"merkle tree type")))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Returns:")),(0,a.kt)("p",null,"Promise","<","Merkletree",">"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"{Promise<Merkletree>}")))}m.isMDXComponent=!0}}]);