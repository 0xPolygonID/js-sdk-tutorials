"use strict";(self.webpackChunkpolygonid_js_sdk_website=self.webpackChunkpolygonid_js_sdk_website||[]).push([[54146],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>m});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},p=Object.keys(e);for(a=0;a<p.length;a++)n=p[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(a=0;a<p.length;a++)n=p[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},d="mdxType",k={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,p=e.originalType,l=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),d=c(n),u=r,m=d["".concat(l,".").concat(u)]||d[u]||k[u]||p;return n?a.createElement(m,i(i({ref:t},s),{},{components:n})):a.createElement(m,i({ref:t},s))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var p=n.length,i=new Array(p);i[0]=u;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[d]="string"==typeof e?e:r,i[1]=o;for(var c=2;c<p;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},3134:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>p,metadata:()=>o,toc:()=>c});var a=n(87462),r=(n(67294),n(3905));const p={id:"polygonid-js-sdk.plainpacker.unpack",title:"PlainPacker.unpack() method",hide_title:!0},i=void 0,o={unversionedId:"api/polygonid-js-sdk.plainpacker.unpack",id:"api/polygonid-js-sdk.plainpacker.unpack",title:"PlainPacker.unpack() method",description:"PlainPacker.unpack() method",source:"@site/docs/api/polygonid-js-sdk.plainpacker.unpack.md",sourceDirName:"api",slug:"/api/polygonid-js-sdk.plainpacker.unpack",permalink:"/polygonid-js-sdk-website/docs/api/polygonid-js-sdk.plainpacker.unpack",draft:!1,tags:[],version:"current",frontMatter:{id:"polygonid-js-sdk.plainpacker.unpack",title:"PlainPacker.unpack() method",hide_title:!0},sidebar:"api",previous:{title:"PlainPacker.pack() method",permalink:"/polygonid-js-sdk-website/docs/api/polygonid-js-sdk.plainpacker.pack"},next:{title:"PlainPackerParams type",permalink:"/polygonid-js-sdk-website/docs/api/polygonid-js-sdk.plainpackerparams"}},l={},c=[{value:"PlainPacker.unpack() method",id:"plainpackerunpack-method",level:2},{value:"Parameters",id:"parameters",level:2}],s={toc:c};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"plainpackerunpack-method"},"PlainPacker.unpack() method"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"This API is provided as a preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.")),(0,r.kt)("p",null,"Unpack returns unpacked message from transport envelope"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Signature:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"unpack(envelope: Uint8Array): Promise<BasicMessage>;\n")),(0,r.kt)("h2",{id:"parameters"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"envelope"),(0,r.kt)("td",{parentName:"tr",align:null},"Uint8Array"),(0,r.kt)("td",{parentName:"tr",align:null},"packed envelope (serialized json with media type)")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Returns:")),(0,r.kt)("p",null,"Promise","<",(0,r.kt)("a",{parentName:"p",href:"/polygonid-js-sdk-website/docs/api/polygonid-js-sdk.basicmessage"},"BasicMessage"),">"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Promise<BasicMessage>")))}d.isMDXComponent=!0}}]);