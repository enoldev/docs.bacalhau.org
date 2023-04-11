"use strict";(self.webpackChunkbacalhau_docs=self.webpackChunkbacalhau_docs||[]).push([[5522],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>h});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=p(a),m=r,h=c["".concat(s,".").concat(m)]||c[m]||d[m]||o;return a?n.createElement(h,i(i({ref:t},u),{},{components:a})):n.createElement(h,i({ref:t},u))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:r,i[1]=l;for(var p=2;p<o;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},5678:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var n=a(7462),r=(a(7294),a(3905));const o={sidebar_label:"BIDS",sidebar_position:1},i="Running BIDS Apps on Bacalhau",l={unversionedId:"examples/molecular-dynamics/BIDS/index",id:"examples/molecular-dynamics/BIDS/index",title:"Running BIDS Apps on Bacalhau",description:"Open In Colab",source:"@site/docs/examples/molecular-dynamics/BIDS/index.md",sourceDirName:"examples/molecular-dynamics/BIDS",slug:"/examples/molecular-dynamics/BIDS/",permalink:"/examples/molecular-dynamics/BIDS/",draft:!1,editUrl:"https://github.com/bacalhau-project/docs.bacalhau.org/blob/main/docs/examples/molecular-dynamics/BIDS/index.md",tags:[],version:"current",lastUpdatedAt:1681193749,formattedLastUpdatedAt:"Apr 11, 2023",sidebarPosition:1,frontMatter:{sidebar_label:"BIDS",sidebar_position:1},sidebar:"documentationSidebar",previous:{title:"Molecular Dynamics",permalink:"/examples/molecular-dynamics/"},next:{title:"Coresets On Bacalhau",permalink:"/examples/molecular-dynamics/Coreset/"}},s={},p=[{value:"TD;LR",id:"tdlr",level:2},{value:"Prerequisite",id:"prerequisite",level:2},{value:"Downloading datasets",id:"downloading-datasets",level:2},{value:"Uploading the datasets to IPFS",id:"uploading-the-datasets-to-ipfs",level:2},{value:"Running a Bacalhau Job",id:"running-a-bacalhau-job",level:2},{value:"Structure of the command",id:"structure-of-the-command",level:3},{value:"Checking the State of your Jobs",id:"checking-the-state-of-your-jobs",level:2},{value:"Viewing your Job Output",id:"viewing-your-job-output",level:2}],u={toc:p},c="wrapper";function d(e){let{components:t,...a}=e;return(0,r.kt)(c,(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"running-bids-apps-on-bacalhau"},"Running BIDS Apps on Bacalhau"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://colab.research.google.com/github/bacalhau-project/examples/blob/main/miscellaneous/BIDS/index.ipynb"},(0,r.kt)("img",{parentName:"a",src:"https://colab.research.google.com/assets/colab-badge.svg",alt:"Open In Colab"})),"\n",(0,r.kt)("a",{parentName:"p",href:"https://mybinder.org/v2/gh/bacalhau-project/examples/HEAD?labpath=miscellaneous/BIDS/index.ipynb"},(0,r.kt)("img",{parentName:"a",src:"https://mybinder.org/badge.svg",alt:"Open In Binder"})),"\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/bacalhau-project/bacalhau"},(0,r.kt)("img",{parentName:"a",src:"https://img.shields.io/github/stars/bacalhau-project/bacalhau?style=social",alt:"stars - badge-generator"}))),(0,r.kt)("p",null,"In this example tutorial, we will look at how to run BIDS App on Bacalhau. BIDS (Brain Imaging Data Structure) is an emerging standard for organizing and describing neuroimaging datasets.  ",(0,r.kt)("a",{parentName:"p",href:"https://bids-apps.neuroimaging.io/about/"},"BIDS App")," is a container image capturing a neuroimaging pipeline that takes a BIDS formatted dataset as input. Each BIDS App has the same core set of command line arguments, making them easy to run and integrate into automated platforms. BIDS Apps are constructed in a way that does not depend on any software outside of the image other than the container engine."),(0,r.kt)("h2",{id:"tdlr"},"TD;LR"),(0,r.kt)("p",null,"Running imaging data structure with Bacalhau"),(0,r.kt)("h2",{id:"prerequisite"},"Prerequisite"),(0,r.kt)("p",null,"To get started, you need to install the Bacalhau client, see more information ",(0,r.kt)("a",{parentName:"p",href:"https://docs.bacalhau.org/getting-started/installation"},"here")),(0,r.kt)("h2",{id:"downloading-datasets"},"Downloading datasets"),(0,r.kt)("p",null,"For this tutorial, download file ",(0,r.kt)("inlineCode",{parentName:"p"},"ds005.tar")," from this Bids dataset ",(0,r.kt)("a",{parentName:"p",href:"https://drive.google.com/drive/folders/0B2JWN60ZLkgkMGlUY3B4MXZIZW8?resourcekey=0-EYVSOlRbxeFKO8NpjWWM3w"},"folder")," and untar it in a directory. ",(0,r.kt)("inlineCode",{parentName:"p"},"ds005")," will be our input directory in the following example."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"data\n\u2514\u2500\u2500 ds005\n")),(0,r.kt)("h2",{id:"uploading-the-datasets-to-ipfs"},"Uploading the datasets to IPFS"),(0,r.kt)("p",null,'The simplest way to upload the data to IPFS is to use a third party service to "pin" data to the IPFS network, to ensure that the data exists and is available. To do this you need an account with a pinning service like ',(0,r.kt)("a",{parentName:"p",href:"https://web3.storage/docs/how-tos/pinning-services-api/"},"web3.storage")," or ",(0,r.kt)("a",{parentName:"p",href:"https://app.pinata.cloud/pinmanager"},"Pinata")," or ",(0,r.kt)("a",{parentName:"p",href:"https://nft.storage/docs/how-to/nftup/"},"nft.storage")," . Once registered you can use their UI or API or SDKs to upload files."),(0,r.kt)("p",null,"When you pin your data, you'll get a CID which is in a format like this ",(0,r.kt)("inlineCode",{parentName:"p"},"QmaNyzSpJCt1gMCQLd3QugihY6HzdYmA8QMEa45LDBbVPz"),". Copy the CID as it will be used to access your data"),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Alternatively, you can upload your dataset to IPFS using ",(0,r.kt)("a",{parentName:"p",href:"https://docs.ipfs.tech/install/command-line/#official-distributions"},"IPFS CLI"),", but the recommended approach is to use a pinning service as we have mentioned above.")),(0,r.kt)("h2",{id:"running-a-bacalhau-job"},"Running a Bacalhau Job"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"%%bash --out job_id\nbacalhau docker run \\\n--id-only \\ \n--wait \\\n--timeout 3600 \\\n--wait-timeout-secs 3600 \\\n-v QmaNyzSpJCt1gMCQLd3QugihY6HzdYmA8QMEa45LDBbVPz:/data \\\nnipreps/mriqc:latest \n-- mriqc ../data/ds005 ../outputs participant --participant_label 01 02 03\n")),(0,r.kt)("h3",{id:"structure-of-the-command"},"Structure of the command"),(0,r.kt)("p",null,"Let's look closely at the command above:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"bacalhau docker run"),": call to bacalhau ")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"-v QmaNyzSpJCt1gMCQLd3QugihY6HzdYmA8QMEa45LDBbVPz:/data"),": mount the CID of the dataset that is uploaded to IPFS and mount it to a folder called data on the container")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"nipreps/mriqc:latest"),": the name and the tag of the docker image we are using")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"../data/ds005"),": path to input dataset")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"../outputs"),": path to output")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"participant --participant_label 01 02 03"),": run the participant level in subjects 001 002 003"))),(0,r.kt)("p",null,"When a job is submitted, Bacalhau prints out the related job_id. We store that in an environment variable so that we can reuse it later on."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"%%env JOB_ID={job_id}\n")),(0,r.kt)("h2",{id:"checking-the-state-of-your-jobs"},"Checking the State of your Jobs"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Job status"),": You can check the status of the job using ",(0,r.kt)("inlineCode",{parentName:"li"},"bacalhau list"),". ")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"%%bash\nbacalhau list --id-filter ${JOB_ID} --wide\n")),(0,r.kt)("p",null,"When it says ",(0,r.kt)("inlineCode",{parentName:"p"},"Completed"),", that means the job is done, and we can get the results."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Job information"),": You can find out more information about your job by using ",(0,r.kt)("inlineCode",{parentName:"li"},"bacalhau describe"),".")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"%%bash\nbacalhau describe ${JOB_ID}\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Job download"),": You can download your job results directly by using ",(0,r.kt)("inlineCode",{parentName:"li"},"bacalhau get"),". Alternatively, you can choose to create a directory to store your results. In the command below, we created a directory and downloaded our job output to be stored in that directory.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"%%bash\nrm -rf results && mkdir -p results\nbacalhau get $JOB_ID --output-dir results\n")),(0,r.kt)("p",null,"After the download has finished you should see the following contents in results directory"),(0,r.kt)("h2",{id:"viewing-your-job-output"},"Viewing your Job Output"),(0,r.kt)("p",null,"Each job creates 3 subfolders: the ",(0,r.kt)("strong",{parentName:"p"},"combined_results"),", ",(0,r.kt)("strong",{parentName:"p"},"per_shard files"),", and the ",(0,r.kt)("strong",{parentName:"p"},"raw")," directory. To view the file, run the following command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"%%bash\nls results/ # list the contents of the current directory \ncat results/combined_results/stdout # displays the contents of the current directory \n")))}d.isMDXComponent=!0}}]);