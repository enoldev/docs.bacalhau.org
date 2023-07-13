"use strict";(self.webpackChunkbacalhau_docs=self.webpackChunkbacalhau_docs||[]).push([[7853],{3905:(t,e,a)=>{a.d(e,{Zo:()=>d,kt:()=>m});var n=a(7294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function o(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var p=n.createContext({}),s=function(t){var e=n.useContext(p),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},d=function(t){var e=s(t.components);return n.createElement(p.Provider,{value:e},t.children)},c="mdxType",u={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},h=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,p=t.parentName,d=o(t,["components","mdxType","originalType","parentName"]),c=s(a),h=r,m=c["".concat(p,".").concat(h)]||c[h]||u[h]||l;return a?n.createElement(m,i(i({ref:e},d),{},{components:a})):n.createElement(m,i({ref:e},d))}));function m(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,i=new Array(l);i[0]=h;var o={};for(var p in e)hasOwnProperty.call(e,p)&&(o[p]=e[p]);o.originalType=t,o[c]="string"==typeof t?t:r,i[1]=o;for(var s=2;s<l;s++)i[s]=a[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},56:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>o,toc:()=>s});var n=a(7462),r=(a(7294),a(3905));const l={sidebar_label:"Lilypad for Web3",sidebar_position:3,description:"Lilypad is a distributed compute network for web3 based on Bacalhau. It currently enables the running of Bacalhau jobs from smart contracts."},i="\ud83c\udf43 What is Lilypad?",o={unversionedId:"integration/lilypad",id:"integration/lilypad",title:"\ud83c\udf43 What is Lilypad?",description:"Lilypad is a distributed compute network for web3 based on Bacalhau. It currently enables the running of Bacalhau jobs from smart contracts.",source:"@site/docs/integration/lilypad.md",sourceDirName:"integration",slug:"/integration/lilypad",permalink:"/integration/lilypad",draft:!1,editUrl:"https://github.com/bacalhau-project/docs.bacalhau.org/blob/main/docs/integration/lilypad.md",tags:[],version:"current",lastUpdatedAt:1689255806,formattedLastUpdatedAt:"Jul 13, 2023",sidebarPosition:3,frontMatter:{sidebar_label:"Lilypad for Web3",sidebar_position:3,description:"Lilypad is a distributed compute network for web3 based on Bacalhau. It currently enables the running of Bacalhau jobs from smart contracts."},sidebar:"documentationSidebar",previous:{title:"Amplify",permalink:"/integration/amplify"},next:{title:"Community",permalink:"/community"}},p={},s=[{value:"Full Documentation",id:"full-documentation",level:2},{value:"Vision",id:"vision",level:2},{value:"Overview",id:"overview",level:2},{value:"Lilypad Roadmap",id:"lilypad-roadmap",level:2},{value:"Architecture",id:"architecture",level:2},{value:"Overview",id:"overview-1",level:3},{value:"Lilypad v0 Quick Start",id:"lilypad-v0-quick-start",level:2},{value:"Prefer Video?",id:"prefer-video",level:2},{value:"Quick Start Guide",id:"quick-start-guide",level:2},{value:"Implement the LilypadCaller Interface in your contract",id:"implement-the-lilypadcaller-interface-in-your-contract",level:2},{value:"Add a Spec compatible with Bacalhau",id:"add-a-spec-compatible-with-bacalhau",level:2},{value:"Add the Lilypad Events Address &amp; Network Fee",id:"add-the-lilypad-events-address--network-fee",level:2},{value:"Call the LilypadEvents runLilypadJob function",id:"call-the-lilypadevents-runlilypadjob-function",level:2},{value:"description: Lilypad v0 Integrated Networks",id:"description-lilypad-v0-integrated-networks",level:2},{value:"Lilypad v0 Deployed Networks",id:"lilypad-v0-deployed-networks",level:2}],d={toc:s},c="wrapper";function u(t){let{components:e,...a}=t;return(0,r.kt)(c,(0,n.Z)({},d,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"-what-is-lilypad"},"\ud83c\udf43 What is Lilypad?"),(0,r.kt)("h2",{id:"full-documentation"},"Full Documentation"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://docs.lilypadnetwork.org"},"Lilypad Docs")),(0,r.kt)("h2",{id:"vision"},"Vision"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://blog.lilypadnetwork.org/"},"Lilypad")," is aiming to build an internet-scale trustless distributed compute network for web3. Creating the infrastructure for use cases like AI inference, ML training, DeSci and more."),(0,r.kt)("iframe",{src:"https://platform.twitter.com/embed/Tweet.html?dnt=true&embedId=twitter-widget-0&features=eyJ0ZndfdGltZWxpbmVfbGlzdCI6eyJidWNrZXQiOltdLCJ2ZXJzaW9uIjpudWxsfSwidGZ3X2ZvbGxvd2VyX2NvdW50X3N1bnNldCI6eyJidWNrZXQiOnRydWUsInZlcnNpb24iOm51bGx9LCJ0ZndfdHdlZXRfZWRpdF9iYWNrZW5kIjp7ImJ1Y2tldCI6Im9uIiwidmVyc2lvbiI6bnVsbH0sInRmd19yZWZzcmNfc2Vzc2lvbiI6eyJidWNrZXQiOiJvbiIsInZlcnNpb24iOm51bGx9LCJ0ZndfZm9zbnJfc29mdF9pbnRlcnZlbnRpb25zX2VuYWJsZWQiOnsiYnVja2V0Ijoib24iLCJ2ZXJzaW9uIjpudWxsfSwidGZ3X21peGVkX21lZGlhXzE1ODk3Ijp7ImJ1Y2tldCI6InRyZWF0bWVudCIsInZlcnNpb24iOm51bGx9LCJ0ZndfZXhwZXJpbWVudHNfY29va2llX2V4cGlyYXRpb24iOnsiYnVja2V0IjoxMjA5NjAwLCJ2ZXJzaW9uIjpudWxsfSwidGZ3X3Nob3dfYmlyZHdhdGNoX3Bpdm90c19lbmFibGVkIjp7ImJ1Y2tldCI6Im9uIiwidmVyc2lvbiI6bnVsbH0sInRmd19kdXBsaWNhdGVfc2NyaWJlc190b19zZXR0aW5ncyI6eyJidWNrZXQiOiJvbiIsInZlcnNpb24iOm51bGx9LCJ0ZndfdXNlX3Byb2ZpbGVfaW1hZ2Vfc2hhcGVfZW5hYmxlZCI6eyJidWNrZXQiOiJvbiIsInZlcnNpb24iOm51bGx9LCJ0ZndfdmlkZW9faGxzX2R5bmFtaWNfbWFuaWZlc3RzXzE1MDgyIjp7ImJ1Y2tldCI6InRydWVfYml0cmF0ZSIsInZlcnNpb24iOm51bGx9LCJ0ZndfbGVnYWN5X3RpbWVsaW5lX3N1bnNldCI6eyJidWNrZXQiOnRydWUsInZlcnNpb24iOm51bGx9LCJ0ZndfdHdlZXRfZWRpdF9mcm9udGVuZCI6eyJidWNrZXQiOiJvbiIsInZlcnNpb24iOm51bGx9fQ%3D%3D&frame=false&hideCard=false&hideThread=false&id=1667164746599002114&lang=en&origin=https%3A%2F%2Fcdn.iframe.ly%2F6kNS5bO%3Fapp%3D1&sessionId=a65b4df788ce5d41bbb126f645b7d4046f3c62bb&theme=light&widgetsVersion=aaf4084522e3a%3A1674595607486&width=850px",style:{width:"100%",height:"500px"}}),(0,r.kt)("h2",{id:"overview"},"Overview"),(0,r.kt)("p",null,"Lilypad (v0) currently enables users to access verifiable, distributed off-chain compute directly from smart contracts.\\\n\\\nLilypad is at v0 and is a Proof of Concept project operating as an integration layer between Bacalhau compute jobs and solidity smart contracts. This integration enables users to access verifiable off-chain decentralised compute from DApps and smart contract projects, enabling interactions and innovations between on-chain and off-chain compute. \\\n\\\nLilypad v0 does not charge for compute jobs, outside of network running fees (ie. the cost of transactions on the blockchain network it is deployed to). It operates on the ",(0,r.kt)("a",{parentName:"p",href:"https://www.docs.bacalhau.org"},"Bacalhau")," public compute network (which is free to use), though it is worth noting that there are no reliability guarantees given for this network (which is something future versions of this protocol will be working to improve\\"),(0,r.kt)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/9lF7omNEK-c",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowfullscreen:!0}),(0,r.kt)("h2",{id:"lilypad-roadmap"},"Lilypad Roadmap"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"v0: ",(0,r.kt)("strong",{parentName:"li"},"September 2022")," - Lilypad Bridge POC for triggering and returning Bacalhau compute jobs from a smart contract"),(0,r.kt)("li",{parentName:"ul"},"v1: ",(0,r.kt)("strong",{parentName:"li"},"July 2023")," - A ",(0,r.kt)("a",{parentName:"li",href:"https://dl.acm.org/doi/pdf/10.1145/3401025.3401737"},"modicum"),"-based minimal testnet (EVM-based). See ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/bacalhau-project/lilypad"},"github")),(0,r.kt)("li",{parentName:"ul"},"v2: ",(0,r.kt)("strong",{parentName:"li"},"September 2023")," - A more robust trustless distributed testnet"),(0,r.kt)("li",{parentName:"ul"},"v3: tbd - Lilypad Mainnet")),(0,r.kt)("figure",null,(0,r.kt)("img",{src:"/img/lilypad/Lilypad%20Roadmap%20June.png",alt:""}),(0,r.kt)("figcaption",null,(0,r.kt)("p",null,"Lilypad Roadmap"))),(0,r.kt)("h1",{id:"lilypad-v0-reference"},"Lilypad v0 Reference"),(0,r.kt)("h2",{id:"architecture"},"Architecture"),(0,r.kt)("h3",{id:"overview-1"},"Overview"),(0,r.kt)("p",null,"Lilypad is a \u2018bridge\u2019 to enable computation jobs from smart contracts. The aim of Lilypad v0 was to create an integration for users to call Bacalhau jobs directly from their solidity smart contracts and hence enable interactions and innovations between on-chain and off-chain compute.\\\n\\\nLilypad v0 is a proof of concept bridge which runs off the public (free to use) Bacalhau compute network. As such, the reliability of jobs on this network are not guaranteed."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"If you have a need for reliable compute based on this infrastructure - get in touch with us.")),(0,r.kt)("figure",null,(0,r.kt)("img",{src:"/img/lilypad/Lilypad Architecture.png",alt:""}),(0,r.kt)("figcaption",null,(0,r.kt)("p",null,"Lilypad v0 on the FVM Network"))),(0,r.kt)("p",null,"A user contract implements the LilypadCaller interface and to call a job, they make a function call to the deployed LilypadEvents contract."),(0,r.kt)("p",null,"This contract emits an event which the Lilypad bridge daemon listens for and then forwards on to the Bacalhau network for processing."),(0,r.kt)("p",null,"Once the job is complete, the results are returned back to the originating user contract from the bridge code."),(0,r.kt)("figure",null,(0,r.kt)("img",{src:"https://user-images.githubusercontent.com/12529822/224299570-366bde1c-1f48-4af9-9d7c-0d4f8a0fc1fc.png",alt:""}),(0,r.kt)("figcaption",null,(0,r.kt)("p",null,"Note: runBacalhauJob() is now runLilypadJob()"))),(0,r.kt)("p",null,"See more about how Bacalhau & Lilypad are related below:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"https://www.notion.so/7-Introduction-to-Bacalhau-Decentralised-Compute-over-Data-AI-ML-DeSci-fbef1ef73b4e479a9b209be8d29cb58f"},"Bacalhau Notion page"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"FVM Hackerbase Video"),(0,r.kt)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/drwcj2kk6bA",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowfullscreen:!0}))),(0,r.kt)("h2",{id:"lilypad-v0-quick-start"},"Lilypad v0 Quick Start"),(0,r.kt)("h2",{id:"prefer-video"},"Prefer Video?"),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Note: Since this video was released some changes have been made to the underlying code, but the process and general architecture remains the same.")),(0,r.kt)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/B0l0gFYxADY",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowfullscreen:!0}),(0,r.kt)("h2",{id:"quick-start-guide"},"Quick Start Guide"),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"The Lilypad Contracts are not currently importable via npm (though this is in progress), so to import them to you own project, you'll need to use their github links")),(0,r.kt)("p",null,"Using Lilypad in your own solidity smart contract requires the following steps"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Create a contract that implements the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/bacalhau-project/lilypad-v0/blob/main/hardhat/contracts/LilypadCallerInterface.sol"},"LilypadCaller")," interface."," "),(0,r.kt)("p",{parentName:"li"},"As part of this interface you need to implement 2 functions:"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"lilypadFulfilled")," - a callback function that will be called when the job completes successfully"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"lilypadCancelled")," - a callback function that will be called when the job fails"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Provide a public ",(0,r.kt)("a",{parentName:"p",href:"https://docs.bacalhau.org/getting-started/docker-workload-onboarding"},"Docker Spec compatible for use on Bacalhau")," in JSON format to the contract.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"To trigger a job from your contract, you need to call the ",(0,r.kt)("inlineCode",{parentName:"p"},"LilypadEvents")," contract which the Lilypad bridge is listening to and which connects to the Bacalhau public network. Create an instance of ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/bacalhau-project/lilypad-v0/blob/main/hardhat/contracts/LilypadEvents.sol"},(0,r.kt)("inlineCode",{parentName:"a"},"LilypadEvents"))," by passing the public contract address on the network you are using (see ",(0,r.kt)("a",{parentName:"p",href:"https://docs.lilypadnetwork.org/lilypad-v0-reference/deployed-network-details"},"deployed network details"),") to the ",(0,r.kt)("inlineCode",{parentName:"p"},"LilypadEvents")," constructor.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Call the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/bacalhau-project/lilypad-v0/blob/main/hardhat/contracts/LilypadEvents.sol"},"LilypadEvents")," contract function ",(0,r.kt)("inlineCode",{parentName:"p"},"runLilypadJob()")," passing in the following parameters."," "))),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"center"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Purpose"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"_from")),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"address")),(0,r.kt)("td",{parentName:"tr",align:"center"},"The address of the calling contract, to which success or failure will be passed back. You should probably use address(this) from your contract.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"_spec")),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:"center"},"A Bacalhau job spec in JSON format. See below for more information on creating a job spec.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"_resultType")),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("a",{parentName:"td",href:"https://github.com/bacalhau-project/lilypad/blob/main/hardhat/contracts/LilypadCallerInterface.sol#L4-L9"},(0,r.kt)("inlineCode",{parentName:"a"},"LilypadResultType"))),(0,r.kt)("td",{parentName:"tr",align:"center"},"The type of result that you want to be returned. If you specify CID, the result tree will come back as a retrievable IPFS CID. If you specify StdOut, StdErr or ExitCode, those raw values output from the job will be returned.")))),(0,r.kt)("h2",{id:"implement-the-lilypadcaller-interface-in-your-contract"},"Implement the LilypadCaller Interface in your contract"),(0,r.kt)("p",null,"Create a contract that implements ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/bacalhau-project/lilypad/blob/main/hardhat/contracts/LilypadCallerInterface.sol"},(0,r.kt)("inlineCode",{parentName:"a"},"LilypadCallerInterface")),". As part of this interface you need to implement 2 functions:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"lilypadFulfilled")," - a callback function that will be called when the job completes successfully"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"lilypadCancelled")," - a callback function that will be called when the job fails")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-solidity"},"  /** === LilypadCaller Interface === **/\n  pragma solidity >=0.8.4;\n  import 'https://github.com/bacalhau-project/lilypad/blob/main/hardhat/contracts/LilypadCallerInterface.sol' //Location of file link\n\n  /** === User Contract Example === **/\n  contract MyContract is LilypadCallerInterface {\n\n      function lilypadFulfilled(address _from, uint _jobId,\n          LilypadResultType _resultType, string calldata _result)\n          external override {\n          // Do something when the LilypadEvents contract returns\n          // results successfully\n      }\n\n      function lilypadCancelled(address _from, uint _jobId, string\n          calldata _errorMsg) external override {\n          // Do something if there's an error returned by the\n          // LilypadEvents contract\n      }\n  }\n\n")),(0,r.kt)("h2",{id:"add-a-spec-compatible-with-bacalhau"},"Add a Spec compatible with ",(0,r.kt)("a",{parentName:"h2",href:"https://www.docs.bacalhau.org"},"Bacalhau")),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"There are several public examples you can try out without needing to know anything about Docker or WASM specification jobs -> see the ",(0,r.kt)("a",{parentName:"p",href:"https://www.docs.bacalhau.org"},"Bacalhau Docs"),". The full specification for Bacalhau jobs can be ",(0,r.kt)("a",{parentName:"p",href:"https://docs.bacalhau.org/all-flags"},"seen here"),".")),(0,r.kt)("p",null,"Bacalhau operates by executing jobs within containers. This means it is able to run any arbitrary Docker jobs or WASM images"),(0,r.kt)("p",null,"We'll use the public Stable Diffusion Docker Container",(0,r.kt)("a",{parentName:"p",href:"https://github.com/bacalhau-project/examples/pkgs/container/examples%2Fstable-diffusion-gpu"}," located here")," for this example."),(0,r.kt)("p",null,"Here's an example JSON job specification for the Stable Diffusion job:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "Engine": "docker",\n  "Verifier": "noop",\n  "PublisherSpec": { "Type": "estuary" },\n  "Docker": {\n    "Image": "ghcr.io/bacalhau-project/examples/stable-diffusion-gpu:0.0.1",\n    "Entrypoint": [\n      "python",\n      "main.py",\n      "--o",\n      "./outputs",\n      "--p",\n      "A User Prompt Goes here"\n    ]\n  },\n  "Resources": { "GPU": "1" },\n  "Outputs": [{ "Name": "outputs", "Path": "/outputs" }],\n  "Deal": { "Concurrency": 1 }\n}\n')),(0,r.kt)("p",null,"Here's an example of using this JSON specification in solidity:"),(0,r.kt)("p",null,"Note that since we need to be able to add the user prompt input to the spec, it's been split into 2 parts."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-solidity"},'string constant specStart = \'{\'\n    \'"Engine": "docker",\'\n    \'"Verifier": "noop",\'\n    \'"PublisherSpec": {"Type": "estuary"},\'\n    \'"Docker": {\'\n    \'"Image": "ghcr.io/bacalhau-project/examples/stable-diffusion-gpu:0.0.1",\'\n    \'"Entrypoint": ["python", "main.py", "--o", "./outputs", "--p", "\';\n\nstring constant specEnd =\n    \'"]},\'\n    \'"Resources": {"GPU": "1"},\'\n    \'"Outputs": [{"Name": "outputs", "Path": "/outputs"}],\'\n    \'"Deal": {"Concurrency": 1}\'\n    \'}\';\n\n\n//Example of use:\nstring memory spec = string.concat(specStart, _prompt, specEnd);\n')),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"See more about how to ",(0,r.kt)("a",{parentName:"p",href:"https://docs.bacalhau.org/getting-started/docker-workload-onboarding/"},"onboard your Docker Workloads for Bacalhau"),", ",(0,r.kt)("a",{parentName:"p",href:"https://docs.bacalhau.org/getting-started/wasm-workload-onboarding"},"Onboard WebAssembly Workloads")," or ",(0,r.kt)("a",{parentName:"p",href:"https://docs.bacalhau.org/examples/workload-onboarding/custom-containers/"},"Work with Custom Containers")," in the Bacalhau Docs.")),(0,r.kt)("h2",{id:"add-the-lilypad-events-address--network-fee"},"Add the Lilypad Events Address & Network Fee"),(0,r.kt)("p",null,"You can do this by either passing it into your constructor or setting it as a variable"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-solidity"},'// SPDX-License-Identifier: MIT\npragma solidity >=0.8.4;\nimport "https://github.com/bacalhau-project/lilypad/blob/main/hardhat/contracts/LilypadEventsUpgradeable.sol";\nimport "https://github.com/bacalhau-project/lilypad/blob/main/hardhat/contracts/LilypadCallerInterface.sol";\n\n/** === User Contract Example === **/\ncontract MyContract is LilypadCallerInterface {\n  address public bridgeAddress; // LilypadEvents contract address for interacting with the deployed LilypadEvents contract\n  LilypadEventsUpgradeable bridge; // Instance of the LilypadEvents Contract to interact with\n  uint256 public lilypadFee; //=30000000000000000 on FVM;\n\n  constructor(address _bridgeContractAddress) {\n    bridgeAddress = _bridgeContractAddress; //the LilypadEvents contract address for your network\n    bridge = LilypadEventsUpgradeable(_bridgeContractAddress); //create an instance of the Events Contract to interact with\n    uint fee = bridge.getLilypadFee(); // you can fetch the fee amount required for the contract to run also\n    lilypadFee = fee;\n  }\n\n  function lilypadFulfilled(address _from, uint _jobId,\n    LilypadResultType _resultType, string calldata _result)\n    external override {\n    // Do something when the LilypadEvents contract returns\n    // results successfully\n  }\n\n  function lilypadCancelled(address _from, uint _jobId, string\n    calldata _errorMsg) external override {\n    // Do something if there\'s an error returned by the Lilypad Job\n  }\n}\n')),(0,r.kt)("h2",{id:"call-the-lilypadevents-runlilypadjob-function"},"Call the LilypadEvents runLilypadJob function"),(0,r.kt)("p",null,"Using the LilypadEvents Instance, we can now send jobs to the Bacalhau Network via our contract using the ",(0,r.kt)("inlineCode",{parentName:"p"},"runLilypadJob()")," function."),(0,r.kt)("p",null,"In this example we'll use the Stable Diffusion Spec shown above in ",(0,r.kt)("a",{parentName:"p",href:"https://docs.lilypadnetwork.org/lilypad-v0-reference/lilypad-v0-quick-start#add-a-spec-compatible-with-bacalhau"},"#add-a-spec-compatible-with-bacalhau")),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Note that calling the runLilypadJob() function requires a network fee. While the Bacalhau public Network is currently free to use, gas fees are still needed to return the results of the job performed. This is the payable fee in the contract.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-solidity"},'// SPDX-License-Identifier: MIT\npragma solidity >=0.8.4;\nimport "https://github.com/bacalhau-project/lilypad/blob/main/hardhat/contracts/LilypadEventsUpgradeable.sol";\nimport "https://github.com/bacalhau-project/lilypad/blob/main/hardhat/contracts/LilypadCallerInterface.sol";\n\n/** === User Contract Example === **/\ncontract MyContract is LilypadCallerInterface {\n  address public bridgeAddress; // Variable for interacting with the deployed LilypadEvents contract\n  LilypadEventsUpgradeable bridge;\n  uint256 public lilypadFee; //=30000000000000000;\n\n  constructor(address _bridgeContractAddress) {\n    bridgeAddress = _bridgeContractAddress;\n    bridge = LilypadEventsUpgradeable(_bridgeContractAddress);\n    uint fee = bridge.getLilypadFee(); // you can fetch the fee amount required for the contract to run also\n    lilypadFee = fee;\n  }\n\n  //** Define the Bacalhau Specification */\n  string constant specStart = \'{\'\n      \'"Engine": "docker",\'\n      \'"Verifier": "noop",\'\n      \'"PublisherSpec": {"Type": "estuary"},\'\n      \'"Docker": {\'\n      \'"Image": "ghcr.io/bacalhau-project/examples/stable-diffusion-gpu:0.0.1",\'\n      \'"Entrypoint": ["python", "main.py", "--o", "./outputs", "--p", "\';\n\n  string constant specEnd =\n      \'"]},\'\n      \'"Resources": {"GPU": "1"},\'\n      \'"Outputs": [{"Name": "outputs", "Path": "/outputs"}],\'\n      \'"Deal": {"Concurrency": 1}\'\n      \'}\';\n\n\n  /** Call the runLilypadJob() to generate a stable diffusion image from a text prompt*/\n  function StableDiffusion(string calldata _prompt) external payable {\n      require(msg.value >= lilypadFee, "Not enough to run Lilypad job");\n      // TODO: spec -> do proper json encoding, look out for quotes in _prompt\n      string memory spec = string.concat(specStart, _prompt, specEnd);\n      uint id = bridge.runLilypadJob{value: lilypadFee}(address(this), spec, uint8(LilypadResultType.CID));\n      require(id > 0, "job didn\'t return a value");\n      prompts[id] = _prompt;\n  }\n\n  /** LilypadCaller Interface Implementation */\n  function lilypadFulfilled(address _from, uint _jobId,\n    LilypadResultType _resultType, string calldata _result)\n    external override {\n    // Do something when the LilypadEvents contract returns\n    // results successfully\n  }\n\n  function lilypadCancelled(address _from, uint _jobId, string\n    calldata _errorMsg) external override {\n    // Do something if there\'s an error returned by the\n    // LilypadEvents contract\n  }\n}\n')),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"description-lilypad-v0-integrated-networks"},"description: Lilypad v0 Integrated Networks"),(0,r.kt)("h1",{id:"deployed-network-details"},"Deployed Network Details"),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"If you have a use case for another network - please get in touch with us!")),(0,r.kt)("p",null,"The Lilypad Events contract - used for triggering compute jobs on Bacalhau, is currently integrated to the following networks on the address specified:"),(0,r.kt)("h2",{id:"lilypad-v0-deployed-networks"},"Lilypad v0 Deployed Networks"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null}),(0,r.kt)("th",{parentName:"tr",align:null}),(0,r.kt)("th",{parentName:"tr",align:null}),(0,r.kt)("th",{parentName:"tr",align:null}),(0,r.kt)("th",{parentName:"tr",align:null}),(0,r.kt)("th",{parentName:"tr",align:null}))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Chain Name")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"LilypadEvents Contract Address")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"RPC")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"ChainID")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"BlockExplorer")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Faucet"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Filecoin Calibration Net (",(0,r.kt)("strong",{parentName:"td"},"testnet"),")"),(0,r.kt)("td",{parentName:"tr",align:null},"0xdC7612fa94F098F1d7BB40E0f4F4db8fF0bC8820"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://api.calibration.node.glif.io/rpc/v0"},"https://api.calibration.node.glif.io/rpc/v0")),(0,r.kt)("td",{parentName:"tr",align:null},"314159 (0x4cb2f)"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://calibration.filscan.io/"},"https://calibration.filscan.io/"),","),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://faucet.calibration.fildev.network/"},"https://faucet.calibration.fildev.network/"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Filecoin Mainnet"),(0,r.kt)("td",{parentName:"tr",align:null},"0xc18879C0a781DdFa0258302467687413AaD5a4E6"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://api.node.glif.io/rpc/v1"},"https://api.node.glif.io/rpc/v1"),", ",(0,r.kt)("a",{parentName:"td",href:"https://filecoin-mainnet.chainstacklabs.com/rpc/v1"},"https://filecoin-mainnet.chainstacklabs.com/rpc/v1"),", ",(0,r.kt)("a",{parentName:"td",href:"https://rpc.ankr.com/filecoin"},"https://rpc.ankr.com/filecoin")),(0,r.kt)("td",{parentName:"tr",align:null},"314 (0x13a)"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://fvm.starboard.ventures/"},"https://fvm.starboard.ventures/"),", ",(0,r.kt)("a",{parentName:"td",href:"https://explorer.glif.io/"},"https://explorer.glif.io/"),", ",(0,r.kt)("a",{parentName:"td",href:"https://beryx.zondax.ch/"},"https://beryx.zondax.ch/"),", ",(0,r.kt)("a",{parentName:"td",href:"https://filfox.io/"},"https://filfox.io/")),(0,r.kt)("td",{parentName:"tr",align:null},"Requires Filecoin token ",(0,r.kt)("a",{parentName:"td",href:"https://docs.filecoin.io/basics/assets/get-fil/"},"See docs"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Mantle Testnet"),(0,r.kt)("td",{parentName:"tr",align:null},"0xdC7612fa94F098F1d7BB40E0f4F4db8fF0bC8820"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://rpc.testnet.mantle.xyz"},"https://rpc.testnet.mantle.xyz")),(0,r.kt)("td",{parentName:"tr",align:null},"5001 (0x1389)"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://explorer.testnet.mantle.xyz/"},"https://explorer.testnet.mantle.xyz/")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://faucet.testnet.mantle.xyz/"},"https://faucet.testnet.mantle.xyz/"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Sepolia Testnet"),(0,r.kt)("td",{parentName:"tr",align:null},"0xdC7612fa94F098F1d7BB40E0f4F4db8fF0bC8820"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://rpc2.sepolia.org"},"https://rpc2.sepolia.org"),", ",(0,r.kt)("a",{parentName:"td",href:"https://eth-sepolia.g.alchemy.com/v2/demo"},"https://eth-sepolia.g.alchemy.com/v2/demo"),", ",(0,r.kt)("a",{parentName:"td",href:"https://rpc.sepolia.org"},"https://rpc.sepolia.org"),", see ",(0,r.kt)("a",{parentName:"td",href:"https://chainlist.org/chain/11155111"},"https://chainlist.org/chain/11155111")),(0,r.kt)("td",{parentName:"tr",align:null},"11155111 (0xaa36a7)"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://sepolia.etherscan.io/"},"https://sepolia.etherscan.io/")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://www.infura.io/faucet/sepolia"},"https://www.infura.io/faucet/sepolia"),", ",(0,r.kt)("a",{parentName:"td",href:"https://sepoliafaucet.com/"},"https://sepoliafaucet.com/"),", ",(0,r.kt)("a",{parentName:"td",href:"https://sepolia-faucet.pk910.de/"},"https://sepolia-faucet.pk910.de/"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Polygon Mumbai"),(0,r.kt)("td",{parentName:"tr",align:null},"0xdC7612fa94F098F1d7BB40E0f4F4db8fF0bC8820"),(0,r.kt)("td",{parentName:"tr",align:null},"see ",(0,r.kt)("a",{parentName:"td",href:"https://chainlist.org/chain/80001"},"https://chainlist.org/chain/80001")),(0,r.kt)("td",{parentName:"tr",align:null},"80001 (0x13881)"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://mumbai.polygonscan.com/"},"https://mumbai.polygonscan.com/")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://faucet.polygon.technology/"},"https://faucet.polygon.technology/"),", ",(0,r.kt)("a",{parentName:"td",href:"https://mumbaifaucet.com/"},"https://mumbaifaucet.com/"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Polygon Mainnet (coming soon)"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"see ",(0,r.kt)("a",{parentName:"td",href:"https://chainlist.org/chain/137"},"https://chainlist.org/chain/137")),(0,r.kt)("td",{parentName:"tr",align:null},"137 (0x89)"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://polygonscan.com/"},"https://polygonscan.com/")),(0,r.kt)("td",{parentName:"tr",align:null},"Requires MATIC tokens")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Optimism (coming soon)"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"see ",(0,r.kt)("a",{parentName:"td",href:"https://chainlist.org/chain/10"},"https://chainlist.org/chain/10")),(0,r.kt)("td",{parentName:"tr",align:null},"10(0xa)"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Requires OP tokens")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Arbitrum One (coming soon)"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"see ",(0,r.kt)("a",{parentName:"td",href:"https://chainlist.org/chain/42161"},"https://chainlist.org/chain/42161")),(0,r.kt)("td",{parentName:"tr",align:null},"42161 (0xa4b1)"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Requires ARB tokens")))))}u.isMDXComponent=!0}}]);