"use strict";(self.webpackChunkbacalhau_docs=self.webpackChunkbacalhau_docs||[]).push([[5699],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>h});var n=a(7294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var s=n.createContext({}),u=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},b=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=u(a),b=o,h=p["".concat(s,".").concat(b)]||p[b]||d[b]||r;return a?n.createElement(h,i(i({ref:t},c),{},{components:a})):n.createElement(h,i({ref:t},c))}));function h(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,i=new Array(r);i[0]=b;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:o,i[1]=l;for(var u=2;u<r;u++)i[u]=a[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}b.displayName="MDXCreateElement"},1427:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>r,metadata:()=>l,toc:()=>u});var n=a(7462),o=(a(7294),a(3905));const r={sidebar_label:"From S3",sidebar_position:3},i="Copy Data from S3 to Public Storage",l={unversionedId:"data-ingestion/s3",id:"data-ingestion/s3",title:"Copy Data from S3 to Public Storage",description:"Here is a quick tutorial on how to copy Data from S3 to a public storage. In this tutorial, we will scrape all the links from a public AWS S3 buckets and then copy the data to IPFS using Bacalhau.",source:"@site/docs/data-ingestion/s3.md",sourceDirName:"data-ingestion",slug:"/data-ingestion/s3",permalink:"/data-ingestion/s3",draft:!1,editUrl:"https://github.com/bacalhau-project/docs.bacalhau.org/blob/main/docs/data-ingestion/s3.md",tags:[],version:"current",lastUpdatedAt:1685608572,formattedLastUpdatedAt:"Jun 1, 2023",sidebarPosition:3,frontMatter:{sidebar_label:"From S3",sidebar_position:3},sidebar:"documentationSidebar",previous:{title:"Pinning data",permalink:"/data-ingestion/pin"},next:{title:"Process",permalink:"/process"}},s={},u=[{value:"Prerequisite",id:"prerequisite",level:2},{value:"Running a Bacalhau Job",id:"running-a-bacalhau-job",level:2},{value:"Structure of the Command",id:"structure-of-the-command",level:3},{value:"Checking the State of your Jobs",id:"checking-the-state-of-your-jobs",level:2},{value:"Viewing your Job Output",id:"viewing-your-job-output",level:2},{value:"Extract Result CID",id:"extract-result-cid",level:2},{value:"Need Support?",id:"need-support",level:2}],c={toc:u},p="wrapper";function d(e){let{components:t,...a}=e;return(0,o.kt)(p,(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"copy-data-from-s3-to-public-storage"},"Copy Data from S3 to Public Storage"),(0,o.kt)("p",null,"Here is a quick tutorial on how to copy Data from S3 to a public storage. In this tutorial, we will scrape all the links from a public AWS S3 buckets and then copy the data to IPFS using Bacalhau."),(0,o.kt)("h2",{id:"prerequisite"},"Prerequisite"),(0,o.kt)("p",null,"To get started, you need to install the Bacalhau client, see more information ",(0,o.kt)("a",{parentName:"p",href:"https://docs.bacalhau.org/getting-started/installation"},"here")),(0,o.kt)("h2",{id:"running-a-bacalhau-job"},"Running a Bacalhau Job"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'%%bash --out job_id\nbacalhau docker run \\\n-i "s3://noaa-goes16/ABI-L1b-RadC/2000/001/12/OR_ABI-L1b-RadC-M3C01*:/inputs,opt=region=us-east-1" \\\n--id-only \\\n--wait \\\nalpine \\\n-- sh -c "cp -r /inputs/* /outputs/"\n')),(0,o.kt)("h3",{id:"structure-of-the-command"},"Structure of the Command"),(0,o.kt)("p",null,"Let's look closely at the command above:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"bacalhau docker run"),": call to bacalhau ")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},'-i "s3://noaa-goes16/ABI-L1b-RadC/2000/001/12/OR_ABI-L1b-RadC-M3C01*:/inputs,opt=region=us-east-1'),": defines S3 objects as inputs to the job. In this case, it will download all objects that match the prefix ",(0,o.kt)("inlineCode",{parentName:"p"},"ABI-L1b-RadC/2000/001/12/OR_ABI-L1b-RadC-M3C01")," from the bucket ",(0,o.kt)("inlineCode",{parentName:"p"},"noaa-goes16")," in ",(0,o.kt)("inlineCode",{parentName:"p"},"us-east-1")," region, and mount the objects under ",(0,o.kt)("inlineCode",{parentName:"p"},"/inputs")," path inside the docker job.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},'-- sh -c "cp -r /inputs/* /outputs/"'),": copies all files under ",(0,o.kt)("inlineCode",{parentName:"p"},"/inputs")," to ",(0,o.kt)("inlineCode",{parentName:"p"},"/outputs"),", which is by default the result output directory which all of its content will be published to the specified destination, which is IPFS by default"))),(0,o.kt)("p",null,"When a job is submitted, Bacalhau prints out the related ",(0,o.kt)("inlineCode",{parentName:"p"},"job_id"),". We store that in an environment variable so that we can reuse it later on."),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"This only works with datasets that are publicly accessible and don't require an AWS account or pay to use buckets.")),(0,o.kt)("h2",{id:"checking-the-state-of-your-jobs"},"Checking the State of your Jobs"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Job status"),": You can check the status of the job using ",(0,o.kt)("inlineCode",{parentName:"li"},"bacalhau list"),". ")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"%%bash\nbacalhau list --id-filter ${JOB_ID} --wide\n")),(0,o.kt)("p",null,"When it says ",(0,o.kt)("inlineCode",{parentName:"p"},"Published")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"Completed"),", that means the job is done, and we can get the results."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Job information"),": You can find out more information about your job by using ",(0,o.kt)("inlineCode",{parentName:"li"},"bacalhau describe"),".")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"%%bash\nbacalhau describe ${JOB_ID}\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Job download"),": You can download your job results directly by using ",(0,o.kt)("inlineCode",{parentName:"li"},"bacalhau get"),". Alternatively, you can choose to create a directory to store your results. In the command below, we created a directory and downloaded our job output to be stored in that directory.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"%%bash\nrm -rf results && mkdir -p results # Temporary directory to store the results\nbacalhau get $JOB_ID --output-dir results # Download the results\n")),(0,o.kt)("p",null,"After the download has finished you should see the following contents in results directory."),(0,o.kt)("h2",{id:"viewing-your-job-output"},"Viewing your Job Output"),(0,o.kt)("p",null,"To view your file, run the following command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"%%bash\nls -1 results/outputs\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"OR_ABI-L1b-RadC-M3C01_G16_s20000011200000_e20000011200000_c20170671748180.nc\nOR_ABI-L1b-RadC-M3C01_G16_s20000011200000_e20000011200000_c20170691603180.nc\nOR_ABI-L1b-RadC-M3C01_G16_s20000011200000_e20000011200000_c20170751219598.nc\nOR_ABI-L1b-RadC-M3C01_G16_s20000011200000_e20000011200000_c20170752149454.nc\nOR_ABI-L1b-RadC-M3C01_G16_s20000011200000_e20000011200000_c20170752204183.nc\nOR_ABI-L1b-RadC-M3C01_G16_s20000011200000_e20000011200000_c20170752234173.nc\nOR_ABI-L1b-RadC-M3C01_G16_s20000011200000_e20000011200000_c20170901216521.nc\nOR_ABI-L1b-RadC-M3C01_G16_s20000011200000_e20000011200000_c20170951807462.nc\nOR_ABI-L1b-RadC-M3C01_G16_s20000011200000_e20000011200000_c20171000619157.nc\nOR_ABI-L1b-RadC-M3C01_G16_s20000011200000_e20000011200000_c20171061215161.nc\nOR_ABI-L1b-RadC-M3C01_G16_s20000011200000_e20000011200000_c20171071918365.nc\nOR_ABI-L1b-RadC-M3C01_G16_s20000011200000_e20000011200000_c20171091517487.nc\nOR_ABI-L1b-RadC-M3C01_G16_s20000011200000_e20000011200000_c20171152112459.nc\nOR_ABI-L1b-RadC-M3C01_G16_s20000011200000_e20000011200000_c20171221432456.nc\nOR_ABI-L1b-RadC-M3C01_G16_s20000011200000_e20000011200000_c20171232313205.nc\nOR_ABI-L1b-RadC-M3C01_G16_s20000011200000_e20000011200000_c20171301618116.nc\nOR_ABI-L1b-RadC-M3C01_G16_s20000011200000_e20000011200000_c20171572234151.nc\nOR_ABI-L1b-RadC-M3C01_G16_s20000011200000_e20000011200000_c20171592127442.nc\nOR_ABI-L1b-RadC-M3C01_G16_s20000011200000_e20000011200000_c20171801512461.nc\nOR_ABI-L1b-RadC-M3C01_G16_s20000011200000_e20000011200000_c20171941452463.nc\n")),(0,o.kt)("h2",{id:"extract-result-cid"},"Extract Result CID"),(0,o.kt)("p",null,"Installing jq to extract CID from the result description"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"%%bash\nsudo apt update\nsudo apt install jq\nExtracting the CIDs from output json\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"%%bash\nbacalhau describe ${JOB_ID} --json \\\n| jq -r '.State.Executions[].PublishedResults.CID | select (. != null)'\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"QmYFhG668yJZmtk84SMMdbrz5Uvuh78Q8nLxTgLDWShkhR\n")),(0,o.kt)("h2",{id:"need-support"},"Need Support?"),(0,o.kt)("p",null,"For questions, feedback, please reach out in our ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/filecoin-project/bacalhau/discussions"},"forum")))}d.isMDXComponent=!0}}]);