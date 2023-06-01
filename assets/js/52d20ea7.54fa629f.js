"use strict";(self.webpackChunkbacalhau_docs=self.webpackChunkbacalhau_docs||[]).push([[8410],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>m});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var u=n.createContext({}),s=function(e){var t=n.useContext(u),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},p=function(e){var t=s(e.components);return n.createElement(u.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,u=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),c=s(a),h=r,m=c["".concat(u,".").concat(h)]||c[h]||d[h]||o;return a?n.createElement(m,l(l({ref:t},p),{},{components:a})):n.createElement(m,l({ref:t},p))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,l=new Array(o);l[0]=h;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i[c]="string"==typeof e?e:r,l[1]=i;for(var s=2;s<o;s++)l[s]=a[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},7739:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>s});var n=a(7462),r=(a(7294),a(3905));const o={sidebar_label:"R Script",sidebar_position:9},l="Running a Simple R Script in Bacalhau",i={unversionedId:"examples/workload-onboarding/r-hello-world/index",id:"examples/workload-onboarding/r-hello-world/index",title:"Running a Simple R Script in Bacalhau",description:"stars - badge-generator",source:"@site/docs/examples/workload-onboarding/r-hello-world/index.md",sourceDirName:"examples/workload-onboarding/r-hello-world",slug:"/examples/workload-onboarding/r-hello-world/",permalink:"/examples/workload-onboarding/r-hello-world/",draft:!1,editUrl:"https://github.com/bacalhau-project/docs.bacalhau.org/blob/main/docs/examples/workload-onboarding/r-hello-world/index.md",tags:[],version:"current",lastUpdatedAt:1685608572,formattedLastUpdatedAt:"Jun 1, 2023",sidebarPosition:9,frontMatter:{sidebar_label:"R Script",sidebar_position:9},sidebar:"documentationSidebar",previous:{title:"R Custom Container",permalink:"/examples/workload-onboarding/r-custom-docker-prophet/"},next:{title:"CUDA",permalink:"/examples/workload-onboarding/CUDA/"}},u={},s=[{value:"TD;LR",id:"tdlr",level:2},{value:"Prerequisites",id:"prerequisites",level:2},{value:"Running an R Script Locally",id:"running-an-r-script-locally",level:2},{value:"Running a Job on Bacalhau",id:"running-a-job-on-bacalhau",level:2},{value:"Structure of the command",id:"structure-of-the-command",level:3},{value:"Checking the State of your Jobs",id:"checking-the-state-of-your-jobs",level:2},{value:"Viewing your Job Output",id:"viewing-your-job-output",level:2},{value:"Futureproofing your R Scripts",id:"futureproofing-your-r-scripts",level:3}],p={toc:s},c="wrapper";function d(e){let{components:t,...a}=e;return(0,r.kt)(c,(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"running-a-simple-r-script-in-bacalhau"},"Running a Simple R Script in Bacalhau"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/bacalhau-project/bacalhau"},(0,r.kt)("img",{parentName:"a",src:"https://img.shields.io/github/stars/bacalhau-project/bacalhau?style=social",alt:"stars - badge-generator"}))),(0,r.kt)("p",null,"You can use official Docker containers for each language like R or Python. In this example, we will use the official R container and run it on bacalhau. "),(0,r.kt)("h2",{id:"tdlr"},"TD;LR"),(0,r.kt)("p",null,"A quick guide on how to run a hello world script on Bacalhau"),(0,r.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,r.kt)("p",null,"To get started, you need to install the Bacalhau client, see more information ",(0,r.kt)("a",{parentName:"p",href:"https://docs.bacalhau.org/getting-started/installation"},"here")),(0,r.kt)("h2",{id:"running-an-r-script-locally"},"Running an R Script Locally"),(0,r.kt)("p",null,"To install R follow these instructions ",(0,r.kt)("a",{parentName:"p",href:"https://rstudio-education.github.io/hopr/starting.html"},"A Installing R and RStudio | Hands-On Programming with R"),". After R and RStudio is installed, create and run a script called hello.R."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'%%writefile hello.R\nprint("hello world")\n')),(0,r.kt)("p",null,"Run the script:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"%%bash\nRscript hello.R\n")),(0,r.kt)("p",null,"Next, upload the script to your public storage in our case IPFS.  We've already uploaded the script to IPFS and the CID is: ",(0,r.kt)("inlineCode",{parentName:"p"},"QmVHSWhAL7fNkRiHfoEJGeMYjaYZUsKHvix7L54SptR8ie"),". You can look at this by browsing to one of the HTTP IPFS proxies like ",(0,r.kt)("a",{parentName:"p",href:"https://cloudflare-ipfs.com/ipfs/QmVHSWhAL7fNkRiHfoEJGeMYjaYZUsKHvix7L54SptR8ie/"},"ipfs.io")," or ",(0,r.kt)("a",{parentName:"p",href:"https://w3s.link/ipfs/QmVHSWhAL7fNkRiHfoEJGeMYjaYZUsKHvix7L54SptR8ie"},"w3s.link"),"."),(0,r.kt)("h2",{id:"running-a-job-on-bacalhau"},"Running a Job on Bacalhau"),(0,r.kt)("p",null,"Now it's time to run the script on the Bacalhau network. To run a job on Bacalhau, run the following command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"%%bash --out job_id\nbacalhau docker run \\\n--wait \\\n--id-only \\\n-i ipfs://QmQRVx3gXVLaRXywgwo8GCTQ63fHqWV88FiwEqCidmUGhk:/hello.R \\\nr-base \\\n-- Rscript hello.R\n")),(0,r.kt)("h3",{id:"structure-of-the-command"},"Structure of the command"),(0,r.kt)("p",null,"Let's look closely at the command above:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"bacalhau docker run"),": call to bacalhau ")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"-i ipfs://QmQRVx3gXVLaRXywgwo8GCTQ63fHqWV88FiwEqCidmUGhk"),": CIDs to use on the job. Mounts them at '/inputs' in the execution.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},":/hello.R"),": the name and the tag of the docker image we are using")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"Rscript hello.R"),": execute the R script"))),(0,r.kt)("p",null,"When a job is submitted, Bacalhau prints out the related ",(0,r.kt)("inlineCode",{parentName:"p"},"job_id"),". We store that in an environment variable so that we can reuse it later on."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"%env JOB_ID={job_id}\n")),(0,r.kt)("h2",{id:"checking-the-state-of-your-jobs"},"Checking the State of your Jobs"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Job status"),": You can check the status of the job using ",(0,r.kt)("inlineCode",{parentName:"li"},"bacalhau list"),".")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"%%bash\nbacalhau list --id-filter ${JOB_ID}\n")),(0,r.kt)("p",null,"When it says ",(0,r.kt)("inlineCode",{parentName:"p"},"Published")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"Completed"),", that means the job is done, and we can get the results."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Job information"),": You can find out more information about your job by using ",(0,r.kt)("inlineCode",{parentName:"li"},"bacalhau describe"),".")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"%%bash\nbacalhau describe  ${JOB_ID}\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Job download"),": You can download your job results directly by using ",(0,r.kt)("inlineCode",{parentName:"li"},"bacalhau get"),". Alternatively, you can choose to create a directory to store your results. In the command below, we created a directory and downloaded our job output to be stored in that directory.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"%%bash\nrm -rf results && mkdir results\nbacalhau get ${JOB_ID} --output-dir results\n")),(0,r.kt)("h2",{id:"viewing-your-job-output"},"Viewing your Job Output"),(0,r.kt)("p",null,"To view the file, run the following command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"%%bash\nls results/\n")),(0,r.kt)("p",null,"Viewing the result"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"%%bash\ncat results/stdout\n")),(0,r.kt)("h3",{id:"futureproofing-your-r-scripts"},"Futureproofing your R Scripts"),(0,r.kt)("p",null,"You can generate the the job request with the following command. This will allow you to re-run that job in the future."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"%%bash\nbacalhau describe ${JOB_ID} --spec > job.yaml\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"%%bash\ncat job.yaml\n")))}d.isMDXComponent=!0}}]);