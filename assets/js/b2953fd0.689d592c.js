"use strict";(self.webpackChunkjs_sdk_tutorials=self.webpackChunkjs_sdk_tutorials||[]).push([[16669],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>u});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function p(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?p(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):p(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},p=Object.keys(e);for(r=0;r<p.length;r++)a=p[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(r=0;r<p.length;r++)a=p[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),o=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},c=function(e){var t=o(e.components);return r.createElement(s.Provider,{value:t},e.children)},d="mdxType",k={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,p=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=o(a),m=n,u=d["".concat(s,".").concat(m)]||d[m]||k[m]||p;return a?r.createElement(u,l(l({ref:t},c),{},{components:a})):r.createElement(u,l({ref:t},c))}));function u(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var p=a.length,l=new Array(p);l[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[d]="string"==typeof e?e:n,l[1]=i;for(var o=2;o<p;o++)l[o]=a[o];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},9354:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>p,metadata:()=>i,toc:()=>o});var r=a(87462),n=(a(67294),a(3905));const p={id:"js-sdk.plainpacker",title:"PlainPacker class",hide_title:!0},l=void 0,i={unversionedId:"api/js-sdk.plainpacker",id:"api/js-sdk.plainpacker",title:"PlainPacker class",description:"PlainPacker class",source:"@site/docs/api/js-sdk.plainpacker.md",sourceDirName:"api",slug:"/api/js-sdk.plainpacker",permalink:"/docs/api/js-sdk.plainpacker",draft:!1,tags:[],version:"current",frontMatter:{id:"js-sdk.plainpacker",title:"PlainPacker class",hide_title:!0},sidebar:"api",previous:{title:"Parser.parseSlots() method",permalink:"/docs/api/js-sdk.parser.parseslots"},next:{title:"PlainPacker.mediaType() method",permalink:"/docs/api/js-sdk.plainpacker.mediatype"}},s={},o=[{value:"PlainPacker class",id:"plainpacker-class",level:2},{value:"Methods",id:"methods",level:2}],c={toc:o};function d(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"plainpacker-class"},"PlainPacker class"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"This API is provided as a preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.")),(0,n.kt)("p",null,"Plain packer just serializes bytes to JSON and adds media type"),(0,n.kt)("p",null," PlainPacker  implements IPacker interface"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Signature:")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-typescript"},"export declare class PlainPacker implements IPacker \n")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Implements:")," ",(0,n.kt)("a",{parentName:"p",href:"/docs/api/js-sdk.ipacker"},"IPacker")),(0,n.kt)("h2",{id:"methods"},"Methods"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Method"),(0,n.kt)("th",{parentName:"tr",align:null},"Modifiers"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/docs/api/js-sdk.plainpacker.mediatype"},"mediaType()")),(0,n.kt)("td",{parentName:"tr",align:null}),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"td"},(0,n.kt)("em",{parentName:"strong"},"(BETA)"))," returns media type for plain message")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/docs/api/js-sdk.plainpacker.pack"},"pack(payload, ","_","params)")),(0,n.kt)("td",{parentName:"tr",align:null}),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"td"},(0,n.kt)("em",{parentName:"strong"},"(BETA)"))," Pack returns packed message to transport envelope")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/docs/api/js-sdk.plainpacker.unpack"},"unpack(envelope)")),(0,n.kt)("td",{parentName:"tr",align:null}),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"td"},(0,n.kt)("em",{parentName:"strong"},"(BETA)"))," Unpack returns unpacked message from transport envelope")))))}d.isMDXComponent=!0}}]);