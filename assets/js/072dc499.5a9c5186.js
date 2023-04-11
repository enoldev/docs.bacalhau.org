"use strict";(self.webpackChunkbacalhau_docs=self.webpackChunkbacalhau_docs||[]).push([[6508],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),u=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},p=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),c=u(r),h=a,m=c["".concat(l,".").concat(h)]||c[h]||d[h]||o;return r?n.createElement(m,s(s({ref:t},p),{},{components:r})):n.createElement(m,s({ref:t},p))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,s=new Array(o);s[0]=h;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[c]="string"==typeof e?e:a,s[1]=i;for(var u=2;u<o;u++)s[u]=r[u];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}h.displayName="MDXCreateElement"},5144:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>u});var n=r(7462),a=(r(7294),r(3905));const o={sidebar_label:"Storage Providers",sidebar_position:130},s="Storage Providers",i={unversionedId:"running-node/storage-providers",id:"running-node/storage-providers",title:"Storage Providers",description:"Bacalhau has two ways to make use of external storage providers:",source:"@site/docs/running-node/storage-providers.md",sourceDirName:"running-node",slug:"/running-node/storage-providers",permalink:"/running-node/storage-providers",draft:!1,editUrl:"https://github.com/bacalhau-project/docs.bacalhau.org/blob/main/docs/running-node/storage-providers.md",tags:[],version:"current",lastUpdatedAt:1681193749,formattedLastUpdatedAt:"Apr 11, 2023",sidebarPosition:130,frontMatter:{sidebar_label:"Storage Providers",sidebar_position:130},sidebar:"documentationSidebar",previous:{title:"Networking",permalink:"/running-node/networking"},next:{title:"Job Selection Policy",permalink:"/running-node/job-selection"}},l={},u=[{value:"Inputs",id:"inputs",level:2},{value:"IPFS",id:"ipfs",level:3},{value:"Publishers",id:"publishers",level:2},{value:"Estuary",id:"estuary",level:3},{value:"IPFS",id:"ipfs-1",level:3}],p={toc:u},c="wrapper";function d(e){let{components:t,...r}=e;return(0,a.kt)(c,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"storage-providers"},"Storage Providers"),(0,a.kt)("p",null,"Bacalhau has two ways to make use of external storage providers:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Inputs")," storage resources consumed as inputs to jobs"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Publishers")," storage resources created with the results of jobs")),(0,a.kt)("h2",{id:"inputs"},"Inputs"),(0,a.kt)("h3",{id:"ipfs"},"IPFS"),(0,a.kt)("p",null,"To start, you'll need to connect the Bacalhau node to an IPFS server so that you can run jobs that consume CIDs as inputs."),(0,a.kt)("p",null,"You can either ",(0,a.kt)("a",{parentName:"p",href:"https://docs.ipfs.tech/install/"},"install IPFS")," and run it locally, or you can connect to a remote IPFS server."),(0,a.kt)("p",null,"In both cases, you should have an ",(0,a.kt)("a",{parentName:"p",href:"https://richardschneider.github.io/net-ipfs-core/articles/multiaddress.html"},"IPFS multiaddress")," for the IPFS server that should look something like this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"export IPFS_CONNECT=/ip4/10.1.10.10/tcp/80/p2p/QmVcSqVEsvm5RR9mBLjwpb2XjFVn5bPdPL69mL8PH45pPC\n")),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"The multiaddress above is just an example - you'll need to get the multiaddress of the IPFS server you want to connect to.")),(0,a.kt)("p",null,"You can then configure your bacalhau node to use this IPFS server by passing the ",(0,a.kt)("inlineCode",{parentName:"p"},"--ipfs-connect")," argument to the ",(0,a.kt)("inlineCode",{parentName:"p"},"serve")," command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"bacalhau serve \\\n  --ipfs-connect $IPFS_CONNECT\n")),(0,a.kt)("h2",{id:"publishers"},"Publishers"),(0,a.kt)("h3",{id:"estuary"},"Estuary"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://estuary.tech/"},"Estuary")," gives an accessible API for adding content to both IPFS and Filecoin."),(0,a.kt)("p",null,"You can configure your bacalhau node to use Estuary by passing the ",(0,a.kt)("inlineCode",{parentName:"p"},"--estuary-api-key")," argument to the ",(0,a.kt)("inlineCode",{parentName:"p"},"serve")," command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"bacalhau serve \\\n  --estuary-api-key XXX\n")),(0,a.kt)("p",null,"To get an api key for estuary, you'll need to ",(0,a.kt)("a",{parentName:"p",href:"https://estuary.tech/"},"register an account")," and then ",(0,a.kt)("a",{parentName:"p",href:"https://estuary.tech/api-admin"},"create an api key"),"."),(0,a.kt)("h3",{id:"ipfs-1"},"IPFS"),(0,a.kt)("p",null,"The IPFS publisher works using the same setup as above - you'll need to have an IPFS server running, a multiaddress for it. You'll then you pass that multiaddress using the ",(0,a.kt)("inlineCode",{parentName:"p"},"--ipfs-connect")," argument to the ",(0,a.kt)("inlineCode",{parentName:"p"},"serve")," command."),(0,a.kt)("p",null,"The IPFS publisher will be used as the default if there is no Estuary API Key configured."))}d.isMDXComponent=!0}}]);