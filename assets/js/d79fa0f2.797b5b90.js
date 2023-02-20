"use strict";(self.webpackChunkjs_sdk_tutorials=self.webpackChunkjs_sdk_tutorials||[]).push([[88587],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>u});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var d=n.createContext({}),s=function(e){var t=n.useContext(d),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(d.Provider,{value:t},e.children)},m="mdxType",k={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,d=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=s(r),c=i,u=m["".concat(d,".").concat(c)]||m[c]||k[c]||a;return r?n.createElement(u,o(o({ref:t},p),{},{components:r})):n.createElement(u,o({ref:t},p))}));function u(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,o=new Array(a);o[0]=c;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l[m]="string"==typeof e?e:i,o[1]=l;for(var s=2;s<a;s++)o[s]=r[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}c.displayName="MDXCreateElement"},97533:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>m,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var n=r(87462),i=(r(67294),r(3905));const a={id:"js-sdk.imerkletreestorage.bindmerkletreetonewidentifier",title:"IMerkleTreeStorage.bindMerkleTreeToNewIdentifier() method",hide_title:!0},o=void 0,l={unversionedId:"api/js-sdk.imerkletreestorage.bindmerkletreetonewidentifier",id:"api/js-sdk.imerkletreestorage.bindmerkletreetonewidentifier",title:"IMerkleTreeStorage.bindMerkleTreeToNewIdentifier() method",description:"IMerkleTreeStorage.bindMerkleTreeToNewIdentifier() method",source:"@site/docs/api/js-sdk.imerkletreestorage.bindmerkletreetonewidentifier.md",sourceDirName:"api",slug:"/api/js-sdk.imerkletreestorage.bindmerkletreetonewidentifier",permalink:"/docs/api/js-sdk.imerkletreestorage.bindmerkletreetonewidentifier",draft:!1,tags:[],version:"current",frontMatter:{id:"js-sdk.imerkletreestorage.bindmerkletreetonewidentifier",title:"IMerkleTreeStorage.bindMerkleTreeToNewIdentifier() method",hide_title:!0},sidebar:"api",previous:{title:"IMerkleTreeStorage.addToMerkleTree() method",permalink:"/docs/api/js-sdk.imerkletreestorage.addtomerkletree"},next:{title:"IMerkleTreeStorage.createIdentityMerkleTrees() method",permalink:"/docs/api/js-sdk.imerkletreestorage.createidentitymerkletrees"}},d={},s=[{value:"IMerkleTreeStorage.bindMerkleTreeToNewIdentifier() method",id:"imerkletreestoragebindmerkletreetonewidentifier-method",level:2},{value:"Parameters",id:"parameters",level:2}],p={toc:s};function m(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"imerkletreestoragebindmerkletreetonewidentifier-method"},"IMerkleTreeStorage.bindMerkleTreeToNewIdentifier() method"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"This API is provided as a preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.")),(0,i.kt)("p",null,"binding to be able to update identifier that belongs to tree"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Signature:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"bindMerkleTreeToNewIdentifier(oldIdentifier: string, newIdentifier: string): Promise<void>;\n")),(0,i.kt)("h2",{id:"parameters"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,i.kt)("th",{parentName:"tr",align:null},"Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"oldIdentifier"),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"newIdentifier"),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null})))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Returns:")),(0,i.kt)("p",null,"Promise","<","void",">"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"{Promise<void>}")))}m.isMDXComponent=!0}}]);