"use strict";(self.webpackChunkjs_sdk_tutorials=self.webpackChunkjs_sdk_tutorials||[]).push([[56531],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>u});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function d(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),o=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=o(e.components);return r.createElement(s.Provider,{value:t},e.children)},c="mdxType",k={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,s=e.parentName,p=d(e,["components","mdxType","originalType","parentName"]),c=o(a),m=n,u=c["".concat(s,".").concat(m)]||c[m]||k[m]||l;return a?r.createElement(u,i(i({ref:t},p),{},{components:a})):r.createElement(u,i({ref:t},p))}));function u(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,i=new Array(l);i[0]=m;var d={};for(var s in t)hasOwnProperty.call(t,s)&&(d[s]=t[s]);d.originalType=e,d[c]="string"==typeof e?e:n,i[1]=d;for(var o=2;o<l;o++)i[o]=a[o];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},35967:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>c,frontMatter:()=>l,metadata:()=>d,toc:()=>o});var r=a(87462),n=(a(67294),a(3905));const l={id:"js-sdk.icredentialwallet",title:"ICredentialWallet interface",hide_title:!0},i=void 0,d={unversionedId:"api/js-sdk.icredentialwallet",id:"api/js-sdk.icredentialwallet",title:"ICredentialWallet interface",description:"ICredentialWallet interface",source:"@site/docs/api/js-sdk.icredentialwallet.md",sourceDirName:"api",slug:"/api/js-sdk.icredentialwallet",permalink:"/js-sdk-tutorials/docs/api/js-sdk.icredentialwallet",draft:!1,tags:[],version:"current",frontMatter:{id:"js-sdk.icredentialwallet",title:"ICredentialWallet interface",hide_title:!0},sidebar:"api",previous:{title:"ICredentialWallet.list() method",permalink:"/js-sdk-tutorials/docs/api/js-sdk.icredentialwallet.list"},next:{title:"ICredentialWallet.remove() method",permalink:"/js-sdk-tutorials/docs/api/js-sdk.icredentialwallet.remove"}},s={},o=[{value:"ICredentialWallet interface",id:"icredentialwallet-interface",level:2},{value:"Methods",id:"methods",level:2}],p={toc:o};function c(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"icredentialwallet-interface"},"ICredentialWallet interface"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"This API is provided as a preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.")),(0,n.kt)("p",null,"Interface to work with credential wallets"),(0,n.kt)("p",null," ICredentialWallet"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Signature:")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-typescript"},"export interface ICredentialWallet \n")),(0,n.kt)("h2",{id:"methods"},"Methods"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Method"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/js-sdk-tutorials/docs/api/js-sdk.icredentialwallet.createcredential"},"createCredential(issuer, request, schema)")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"td"},(0,n.kt)("em",{parentName:"strong"},"(BETA)"))," Creates a W3C verifiable Credential object")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/js-sdk-tutorials/docs/api/js-sdk.icredentialwallet.filterbycredentialsubject"},"filterByCredentialSubject(credentials, subject)")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"td"},(0,n.kt)("em",{parentName:"strong"},"(BETA)"))," Filters given credentials with given credential subject")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/js-sdk-tutorials/docs/api/js-sdk.icredentialwallet.findbycontexttype"},"findByContextType(context, type)")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"td"},(0,n.kt)("em",{parentName:"strong"},"(BETA)"))," Finds credentials by JSON-LD schema and type")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/js-sdk-tutorials/docs/api/js-sdk.icredentialwallet.findbyid"},"findById(id)")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"td"},(0,n.kt)("em",{parentName:"strong"},"(BETA)"))," Finds the credential by its id")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/js-sdk-tutorials/docs/api/js-sdk.icredentialwallet.findbyquery"},"findByQuery(query)")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"td"},(0,n.kt)("em",{parentName:"strong"},"(BETA)"))," Find credential using iden3 query language")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/js-sdk-tutorials/docs/api/js-sdk.icredentialwallet.findnonrevokedcredential"},"findNonRevokedCredential(creds)")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"td"},(0,n.kt)("em",{parentName:"strong"},"(BETA)"))," Finds non-revoked credential from a given list by resolving their credential status")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/js-sdk-tutorials/docs/api/js-sdk.icredentialwallet.getauthbjjcredential"},"getAuthBJJCredential(did)")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"td"},(0,n.kt)("em",{parentName:"strong"},"(BETA)"))," Finds Auth BJJ credential for given user")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/js-sdk-tutorials/docs/api/js-sdk.icredentialwallet.getrevocationstatus"},"getRevocationStatus(credStatus, issuerDID, issuerData)")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"td"},(0,n.kt)("em",{parentName:"strong"},"(BETA)"))," Fetches Revocation status depended on type")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/js-sdk-tutorials/docs/api/js-sdk.icredentialwallet.getrevocationstatusfromcredential"},"getRevocationStatusFromCredential(cred)")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"td"},(0,n.kt)("em",{parentName:"strong"},"(BETA)"))," Fetches or Builds a revocation status for a given credential Supported types for credentialStatus field: SparseMerkleTreeProof, Iden3ReverseSparseMerkleTreeProof")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/js-sdk-tutorials/docs/api/js-sdk.icredentialwallet.list"},"list()")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"td"},(0,n.kt)("em",{parentName:"strong"},"(BETA)"))," List of W3C Credential")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/js-sdk-tutorials/docs/api/js-sdk.icredentialwallet.remove"},"remove(id)")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"td"},(0,n.kt)("em",{parentName:"strong"},"(BETA)"))," removes W3C credentials from data storage")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/js-sdk-tutorials/docs/api/js-sdk.icredentialwallet.save"},"save(credential)")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"td"},(0,n.kt)("em",{parentName:"strong"},"(BETA)"))," saves W3C credential (upsert)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/js-sdk-tutorials/docs/api/js-sdk.icredentialwallet.saveall"},"saveAll(credentials)")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"td"},(0,n.kt)("em",{parentName:"strong"},"(BETA)"))," saves the batch of W3C credentials (upsert)")))))}c.isMDXComponent=!0}}]);