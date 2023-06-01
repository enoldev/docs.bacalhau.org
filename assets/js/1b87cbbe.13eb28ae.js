"use strict";(self.webpackChunkbacalhau_docs=self.webpackChunkbacalhau_docs||[]).push([[5667],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>m});var n=a(7294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var u=n.createContext({}),s=function(e){var t=n.useContext(u),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},p=function(e){var t=s(e.components);return n.createElement(u.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,u=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),c=s(a),h=o,m=c["".concat(u,".").concat(h)]||c[h]||d[h]||r;return a?n.createElement(m,l(l({ref:t},p),{},{components:a})):n.createElement(m,l({ref:t},p))}));function m(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,l=new Array(r);l[0]=h;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i[c]="string"==typeof e?e:o,l[1]=i;for(var s=2;s<r;s++)l[s]=a[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},4657:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>d,frontMatter:()=>r,metadata:()=>i,toc:()=>s});var n=a(7462),o=(a(7294),a(3905));const r={sidebar_label:"Python File",sidebar_position:12,description:"How to run a Python file hosted on Bacalhau"},l="Running a Python Script",i={unversionedId:"examples/workload-onboarding/trivial-python/index",id:"examples/workload-onboarding/trivial-python/index",title:"Running a Python Script",description:"How to run a Python file hosted on Bacalhau",source:"@site/docs/examples/workload-onboarding/trivial-python/index.md",sourceDirName:"examples/workload-onboarding/trivial-python",slug:"/examples/workload-onboarding/trivial-python/",permalink:"/examples/workload-onboarding/trivial-python/",draft:!1,editUrl:"https://github.com/bacalhau-project/docs.bacalhau.org/blob/main/docs/examples/workload-onboarding/trivial-python/index.md",tags:[],version:"current",lastUpdatedAt:1685608572,formattedLastUpdatedAt:"Jun 1, 2023",sidebarPosition:12,frontMatter:{sidebar_label:"Python File",sidebar_position:12,description:"How to run a Python file hosted on Bacalhau"},sidebar:"documentationSidebar",previous:{title:"CUDA",permalink:"/examples/workload-onboarding/CUDA/"},next:{title:"Scripting Bacalhau with Python",permalink:"/examples/workload-onboarding/python-script/"}},u={},s=[{value:"TD;LR",id:"tdlr",level:2},{value:"Prerequisites",id:"prerequisites",level:2},{value:"Creating a Hello World File",id:"creating-a-hello-world-file",level:2},{value:"Submit the workload",id:"submit-the-workload",level:2},{value:"Checking the State of your Jobs",id:"checking-the-state-of-your-jobs",level:2},{value:"Viewing your Job Output",id:"viewing-your-job-output",level:2},{value:"Need Support?",id:"need-support",level:2}],p={toc:s},c="wrapper";function d(e){let{components:t,...a}=e;return(0,o.kt)(c,(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"running-a-python-script"},"Running a Python Script"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/bacalhau-project/bacalhau"},(0,o.kt)("img",{parentName:"a",src:"https://img.shields.io/github/stars/bacalhau-project/bacalhau?style=social",alt:"stars - badge-generator"}))),(0,o.kt)("p",null,"This example tutorial serves as an introduction to Bacalhau. Here, you'll be running a Python file hosted on a website on Bacalhau."),(0,o.kt)("h2",{id:"tdlr"},"TD;LR"),(0,o.kt)("p",null,"A quick guide on how to run a hello world script on Bacalhau"),(0,o.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,o.kt)("p",null,"To get started, you need to install the Bacalhau client, see more information ",(0,o.kt)("a",{parentName:"p",href:"https://docs.bacalhau.org/getting-started/installation"},"here")),(0,o.kt)("h2",{id:"creating-a-hello-world-file"},"Creating a Hello World File"),(0,o.kt)("p",null,"We'll be using a very simple Python script which displays the ",(0,o.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/%22Hello,_World!%22_program"},"traditional first greeting"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"%cat hello-world.py\n")),(0,o.kt)("h2",{id:"submit-the-workload"},"Submit the workload"),(0,o.kt)("p",null,"To submit a workload to Bacalhau you can use the ",(0,o.kt)("inlineCode",{parentName:"p"},"bacalhau docker run")," command. "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"%%bash --out job_id\nbacalhau docker run \\\n  --id-only \\\n  --input https://raw.githubusercontent.com/bacalhau-project/examples/151eebe895151edd83468e3d8b546612bf96cd05/workload-onboarding/trivial-python/hello-world.py \\\n  python:3.10-slim -- python3 /inputs/hello-world.py\n")),(0,o.kt)("p",null,"When a job is submitted, Bacalhau prints out the related ",(0,o.kt)("inlineCode",{parentName:"p"},"job_id"),". We store that in an environment variable so that we can reuse it later on."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"%env JOB_ID={job_id}\n")),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"bacalhau docker run")," command allows to pass input data into the container using ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/multiformats/cid"},"content identifier (CID)")," volumes, we will be using the ",(0,o.kt)("inlineCode",{parentName:"p"},"-i URL:path")," ",(0,o.kt)("a",{parentName:"p",href:"https://docs.bacalhau.org/all-flags#docker-run"},"argument")," for simplicity. This results in Bacalhau mounting a ",(0,o.kt)("em",{parentName:"p"},"data volume")," inside the container. By default, Bacalhau mounts the input volume at the path ",(0,o.kt)("inlineCode",{parentName:"p"},"/inputs")," inside the container."),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},(0,o.kt)("a",{parentName:"p",href:"https://github.com/filecoin-project/bacalhau/blob/v0.2.3/cmd/bacalhau/docker_run.go#L64"},"Bacalhau overwrites the default entrypoint"),", so we must run the full command after the ",(0,o.kt)("inlineCode",{parentName:"p"},"--")," argument.")),(0,o.kt)("h2",{id:"checking-the-state-of-your-jobs"},"Checking the State of your Jobs"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Job status"),": You can check the status of the job using ",(0,o.kt)("inlineCode",{parentName:"li"},"bacalhau list"),". ")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"%%bash\nbacalhau list --id-filter=${JOB_ID} --no-style\n")),(0,o.kt)("p",null,"When it says ",(0,o.kt)("inlineCode",{parentName:"p"},"Published")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"Completed"),", that means the job is done, and we can get the results."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Job information"),": You can find out more information about your job by using ",(0,o.kt)("inlineCode",{parentName:"li"},"bacalhau describe"),".")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"%%bash\nbacalhau describe ${JOB_ID}\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Job download"),": You can download your job results directly by using ",(0,o.kt)("inlineCode",{parentName:"li"},"bacalhau get"),". Alternatively, you can choose to create a directory to store your results. In the command below, we created a directory and downloaded our job output to be stored in that directory.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"%%bash\nrm -rf results && mkdir results\nbacalhau get ${JOB_ID} --output-dir results\n")),(0,o.kt)("h2",{id:"viewing-your-job-output"},"Viewing your Job Output"),(0,o.kt)("p",null,"To view the file, run the following command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"\n%%bash\ncat results/stdout\n\n")),(0,o.kt)("h2",{id:"need-support"},"Need Support?"),(0,o.kt)("p",null,"For questions, feedback, please reach out in our ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/filecoin-project/bacalhau/discussions"},"forum")))}d.isMDXComponent=!0}}]);