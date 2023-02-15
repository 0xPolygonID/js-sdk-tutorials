"use strict";(self.webpackChunkpolygonid_js_sdk_website=self.webpackChunkpolygonid_js_sdk_website||[]).push([[7247],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>m});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function d(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var o=n.createContext({}),p=function(e){var t=n.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):d(d({},t),e)),r},s=function(e){var t=p(e.components);return n.createElement(o.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},y=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),c=p(r),y=a,m=c["".concat(o,".").concat(y)]||c[y]||u[y]||i;return r?n.createElement(m,d(d({ref:t},s),{},{components:r})):n.createElement(m,d({ref:t},s))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,d=new Array(i);d[0]=y;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l[c]="string"==typeof e?e:a,d[1]=l;for(var p=2;p<i;p++)d[p]=r[p];return n.createElement.apply(null,d)}return n.createElement.apply(null,r)}y.displayName="MDXCreateElement"},6572:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>o,contentTitle:()=>d,default:()=>c,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var n=r(7462),a=(r(7294),r(3905));const i={id:"polygonid-js-sdk.credentialstorage.findcredentialbyid",title:"CredentialStorage.findCredentialById() method",hide_title:!0},d=void 0,l={unversionedId:"api/polygonid-js-sdk.credentialstorage.findcredentialbyid",id:"api/polygonid-js-sdk.credentialstorage.findcredentialbyid",title:"CredentialStorage.findCredentialById() method",description:"CredentialStorage.findCredentialById() method",source:"@site/docs/api/polygonid-js-sdk.credentialstorage.findcredentialbyid.md",sourceDirName:"api",slug:"/api/polygonid-js-sdk.credentialstorage.findcredentialbyid",permalink:"/docs/api/polygonid-js-sdk.credentialstorage.findcredentialbyid",draft:!1,tags:[],version:"current",frontMatter:{id:"polygonid-js-sdk.credentialstorage.findcredentialbyid",title:"CredentialStorage.findCredentialById() method",hide_title:!0},sidebar:"api",previous:{title:"CredentialStorage.(constructor)",permalink:"/docs/api/polygonid-js-sdk.credentialstorage._constructor_"},next:{title:"CredentialStorage.findCredentialsByQuery() method",permalink:"/docs/api/polygonid-js-sdk.credentialstorage.findcredentialsbyquery"}},o={},p=[{value:"CredentialStorage.findCredentialById() method",id:"credentialstoragefindcredentialbyid-method",level:2},{value:"Parameters",id:"parameters",level:2}],s={toc:p};function c(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"credentialstoragefindcredentialbyid-method"},"CredentialStorage.findCredentialById() method"),(0,a.kt)("p",null,"returns all credentials in the storage"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Signature:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"findCredentialById(id: string): Promise<W3CCredential | undefined>;\n")),(0,a.kt)("h2",{id:"parameters"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"id"),(0,a.kt)("td",{parentName:"tr",align:null},"string"),(0,a.kt)("td",{parentName:"tr",align:null})))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Returns:")),(0,a.kt)("p",null,"Promise","<","W3CCredential ","|"," undefined",">"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Promise<W3CCredential[]>")))}c.isMDXComponent=!0}}]);