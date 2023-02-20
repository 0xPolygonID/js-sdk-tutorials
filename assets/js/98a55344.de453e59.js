"use strict";(self.webpackChunkjs_sdk_tutorials=self.webpackChunkjs_sdk_tutorials||[]).push([[74341],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>c});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var m=n.createContext({}),p=function(e){var t=n.useContext(m),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},s=function(e){var t=p(e.components);return n.createElement(m.Provider,{value:t},e.children)},d="mdxType",y={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},k=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,m=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=p(r),k=a,c=d["".concat(m,".").concat(k)]||d[k]||y[k]||i;return r?n.createElement(c,o(o({ref:t},s),{},{components:r})):n.createElement(c,o({ref:t},s))}));function c(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=k;var l={};for(var m in t)hasOwnProperty.call(t,m)&&(l[m]=t[m]);l.originalType=e,l[d]="string"==typeof e?e:a,o[1]=l;for(var p=2;p<i;p++)o[p]=r[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}k.displayName="MDXCreateElement"},90256:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>m,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var n=r(87462),a=(r(67294),r(3905));const i={id:"js-sdk.inmemorymerkletreestorage.getmerkletreebyidentifierandtype",title:"InMemoryMerkleTreeStorage.getMerkleTreeByIdentifierAndType() method",hide_title:!0},o=void 0,l={unversionedId:"api/js-sdk.inmemorymerkletreestorage.getmerkletreebyidentifierandtype",id:"api/js-sdk.inmemorymerkletreestorage.getmerkletreebyidentifierandtype",title:"InMemoryMerkleTreeStorage.getMerkleTreeByIdentifierAndType() method",description:"InMemoryMerkleTreeStorage.getMerkleTreeByIdentifierAndType() method",source:"@site/docs/api/js-sdk.inmemorymerkletreestorage.getmerkletreebyidentifierandtype.md",sourceDirName:"api",slug:"/api/js-sdk.inmemorymerkletreestorage.getmerkletreebyidentifierandtype",permalink:"/js-sdk-tutorials/docs/api/js-sdk.inmemorymerkletreestorage.getmerkletreebyidentifierandtype",draft:!1,tags:[],version:"current",frontMatter:{id:"js-sdk.inmemorymerkletreestorage.getmerkletreebyidentifierandtype",title:"InMemoryMerkleTreeStorage.getMerkleTreeByIdentifierAndType() method",hide_title:!0},sidebar:"api",previous:{title:"InMemoryMerkleTreeStorage.getIdentityMerkleTreesInfo() method",permalink:"/js-sdk-tutorials/docs/api/js-sdk.inmemorymerkletreestorage.getidentitymerkletreesinfo"},next:{title:"InMemoryMerkleTreeStorage class",permalink:"/js-sdk-tutorials/docs/api/js-sdk.inmemorymerkletreestorage"}},m={},p=[{value:"InMemoryMerkleTreeStorage.getMerkleTreeByIdentifierAndType() method",id:"inmemorymerkletreestoragegetmerkletreebyidentifierandtype-method",level:2},{value:"Parameters",id:"parameters",level:2}],s={toc:p};function d(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"inmemorymerkletreestoragegetmerkletreebyidentifierandtype-method"},"InMemoryMerkleTreeStorage.getMerkleTreeByIdentifierAndType() method"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"This API is provided as a preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.")),(0,a.kt)("p",null,"get merkle tree by identifier and type from memory"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Signature:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"getMerkleTreeByIdentifierAndType(identifier: string, mtType: MerkleTreeType): Promise<Merkletree>;\n")),(0,a.kt)("h2",{id:"parameters"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"identifier"),(0,a.kt)("td",{parentName:"tr",align:null},"string"),(0,a.kt)("td",{parentName:"tr",align:null})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"mtType"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"/js-sdk-tutorials/docs/api/js-sdk.merkletreetype"},"MerkleTreeType")),(0,a.kt)("td",{parentName:"tr",align:null})))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Returns:")),(0,a.kt)("p",null,"Promise","<","Merkletree",">"))}d.isMDXComponent=!0}}]);