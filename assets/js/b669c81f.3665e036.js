"use strict";(self.webpackChunkpolygonid_js_sdk_website=self.webpackChunkpolygonid_js_sdk_website||[]).push([[6159],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>k});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),m=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},d=function(e){var t=m(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},y=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=m(r),y=o,k=p["".concat(s,".").concat(y)]||p[y]||c[y]||i;return r?n.createElement(k,a(a({ref:t},d),{},{components:r})):n.createElement(k,a({ref:t},d))}));function k(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=y;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:o,a[1]=l;for(var m=2;m<i;m++)a[m]=r[m];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}y.displayName="MDXCreateElement"},7674:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>m});var n=r(7462),o=(r(7294),r(3905));const i={id:"polygonid-js-sdk.inmemorymerkletreestorage.createidentitymerkletrees",title:"InMemoryMerkleTreeStorage.createIdentityMerkleTrees() method",hide_title:!0},a=void 0,l={unversionedId:"api/polygonid-js-sdk.inmemorymerkletreestorage.createidentitymerkletrees",id:"api/polygonid-js-sdk.inmemorymerkletreestorage.createidentitymerkletrees",title:"InMemoryMerkleTreeStorage.createIdentityMerkleTrees() method",description:"InMemoryMerkleTreeStorage.createIdentityMerkleTrees() method",source:"@site/docs/api/polygonid-js-sdk.inmemorymerkletreestorage.createidentitymerkletrees.md",sourceDirName:"api",slug:"/api/polygonid-js-sdk.inmemorymerkletreestorage.createidentitymerkletrees",permalink:"/polygonid-js-sdk-website/docs/api/polygonid-js-sdk.inmemorymerkletreestorage.createidentitymerkletrees",draft:!1,tags:[],version:"current",frontMatter:{id:"polygonid-js-sdk.inmemorymerkletreestorage.createidentitymerkletrees",title:"InMemoryMerkleTreeStorage.createIdentityMerkleTrees() method",hide_title:!0},sidebar:"api",previous:{title:"InMemoryMerkleTreeStorage.bindMerkleTreeToNewIdentifier() method",permalink:"/polygonid-js-sdk-website/docs/api/polygonid-js-sdk.inmemorymerkletreestorage.bindmerkletreetonewidentifier"},next:{title:"InMemoryMerkleTreeStorage.getIdentityMerkleTreesInfo() method",permalink:"/polygonid-js-sdk-website/docs/api/polygonid-js-sdk.inmemorymerkletreestorage.getidentitymerkletreesinfo"}},s={},m=[{value:"InMemoryMerkleTreeStorage.createIdentityMerkleTrees() method",id:"inmemorymerkletreestoragecreateidentitymerkletrees-method",level:2},{value:"Parameters",id:"parameters",level:2}],d={toc:m};function p(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"inmemorymerkletreestoragecreateidentitymerkletrees-method"},"InMemoryMerkleTreeStorage.createIdentityMerkleTrees() method"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"This API is provided as a preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.")),(0,o.kt)("p",null,"create trees in the memory"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Signature:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"createIdentityMerkleTrees(identifier: string): Promise<IdentityMerkleTreeMetaInformation[]>;\n")),(0,o.kt)("h2",{id:"parameters"},"Parameters"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,o.kt)("th",{parentName:"tr",align:null},"Type"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"identifier"),(0,o.kt)("td",{parentName:"tr",align:null},"string"),(0,o.kt)("td",{parentName:"tr",align:null})))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Returns:")),(0,o.kt)("p",null,"Promise","<",(0,o.kt)("a",{parentName:"p",href:"/polygonid-js-sdk-website/docs/api/polygonid-js-sdk.identitymerkletreemetainformation"},"IdentityMerkleTreeMetaInformation"),"[","]",">"))}p.isMDXComponent=!0}}]);