"use strict";(self.webpackChunkpolygonid_js_sdk_website=self.webpackChunkpolygonid_js_sdk_website||[]).push([[6159],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>k});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var m=n.createContext({}),s=function(e){var t=n.useContext(m),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},d=function(e){var t=s(e.components);return n.createElement(m.Provider,{value:t},e.children)},p="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},y=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,m=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=s(r),y=o,k=p["".concat(m,".").concat(y)]||p[y]||c[y]||a;return r?n.createElement(k,i(i({ref:t},d),{},{components:r})):n.createElement(k,i({ref:t},d))}));function k(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=y;var l={};for(var m in t)hasOwnProperty.call(t,m)&&(l[m]=t[m]);l.originalType=e,l[p]="string"==typeof e?e:o,i[1]=l;for(var s=2;s<a;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}y.displayName="MDXCreateElement"},7674:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>m,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var n=r(7462),o=(r(7294),r(3905));const a={id:"polygonid-js-sdk.inmemorymerkletreestorage.createidentitymerkletrees",title:"InMemoryMerkleTreeStorage.createIdentityMerkleTrees() method",hide_title:!0},i=void 0,l={unversionedId:"api/polygonid-js-sdk.inmemorymerkletreestorage.createidentitymerkletrees",id:"api/polygonid-js-sdk.inmemorymerkletreestorage.createidentitymerkletrees",title:"InMemoryMerkleTreeStorage.createIdentityMerkleTrees() method",description:"InMemoryMerkleTreeStorage.createIdentityMerkleTrees() method",source:"@site/docs/api/polygonid-js-sdk.inmemorymerkletreestorage.createidentitymerkletrees.md",sourceDirName:"api",slug:"/api/polygonid-js-sdk.inmemorymerkletreestorage.createidentitymerkletrees",permalink:"/docs/api/polygonid-js-sdk.inmemorymerkletreestorage.createidentitymerkletrees",draft:!1,tags:[],version:"current",frontMatter:{id:"polygonid-js-sdk.inmemorymerkletreestorage.createidentitymerkletrees",title:"InMemoryMerkleTreeStorage.createIdentityMerkleTrees() method",hide_title:!0},sidebar:"api",previous:{title:"InMemoryMerkleTreeStorage.bindMerkleTreeToNewIdentifier() method",permalink:"/docs/api/polygonid-js-sdk.inmemorymerkletreestorage.bindmerkletreetonewidentifier"},next:{title:"InMemoryMerkleTreeStorage.getIdentityMerkleTreesInfo() method",permalink:"/docs/api/polygonid-js-sdk.inmemorymerkletreestorage.getidentitymerkletreesinfo"}},m={},s=[{value:"InMemoryMerkleTreeStorage.createIdentityMerkleTrees() method",id:"inmemorymerkletreestoragecreateidentitymerkletrees-method",level:2},{value:"Parameters",id:"parameters",level:2}],d={toc:s};function p(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"inmemorymerkletreestoragecreateidentitymerkletrees-method"},"InMemoryMerkleTreeStorage.createIdentityMerkleTrees() method"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"This API is provided as a preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.")),(0,o.kt)("p",null,"create trees in the memory"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Signature:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"createIdentityMerkleTrees(identifier: string): Promise<IdentityMerkleTreeMetaInformation[]>;\n")),(0,o.kt)("h2",{id:"parameters"},"Parameters"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,o.kt)("th",{parentName:"tr",align:null},"Type"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"identifier"),(0,o.kt)("td",{parentName:"tr",align:null},"string"),(0,o.kt)("td",{parentName:"tr",align:null})))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Returns:")),(0,o.kt)("p",null,"Promise","<",(0,o.kt)("a",{parentName:"p",href:"/docs/api/polygonid-js-sdk.identitymerkletreemetainformation"},"IdentityMerkleTreeMetaInformation"),"[","]",">"))}p.isMDXComponent=!0}}]);