"use strict";(self.webpackChunkbacalhau_docs=self.webpackChunkbacalhau_docs||[]).push([[3618],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>d});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),p=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},u=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=p(a),d=r,g=c["".concat(l,".").concat(d)]||c[d]||m[d]||i;return a?n.createElement(g,o(o({ref:t},u),{},{components:a})):n.createElement(g,o({ref:t},u))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=c;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var p=2;p<i;p++)o[p]=a[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},1728:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var n=a(3117),r=(a(7294),a(3905));const i={sidebar_label:"Simple Image Processing",sidebar_position:1},o="Simple Image Processing",s={unversionedId:"examples/data-engineering/image-processing/index",id:"examples/data-engineering/image-processing/index",title:"Simple Image Processing",description:"Open In Colab",source:"@site/docs/examples/data-engineering/image-processing/index.md",sourceDirName:"examples/data-engineering/image-processing",slug:"/examples/data-engineering/image-processing/",permalink:"/examples/data-engineering/image-processing/",draft:!1,editUrl:"https://github.com/bacalhau-project/docs.bacalhau.org/blob/main/docs/examples/data-engineering/image-processing/index.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_label:"Simple Image Processing",sidebar_position:1},sidebar:"documentationSidebar",previous:{title:"Data Engineering",permalink:"/examples/data-engineering/"},next:{title:"Video Filter Sharding",permalink:"/examples/data-engineering/video-filter-sharding/"}},l={},p=[{value:"Submit the workload",id:"submit-the-workload",level:2},{value:"Get results",id:"get-results",level:2},{value:"Where to go next?",id:"where-to-go-next",level:2},{value:"Support",id:"support",level:2}],u={toc:p};function m(e){let{components:t,...i}=e;return(0,r.kt)("wrapper",(0,n.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"simple-image-processing"},"Simple Image Processing"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://colab.research.google.com/github/bacalhau-project/examples/blob/main/data-engineering/image-processing/index.ipynb"},(0,r.kt)("img",{parentName:"a",src:"https://colab.research.google.com/assets/colab-badge.svg",alt:"Open In Colab"})),"\n",(0,r.kt)("a",{parentName:"p",href:"https://mybinder.org/v2/gh/bacalhau-project/examples/HEAD?labpath=data-engineering%2Fimage-processing%2Findex.ipynb"},(0,r.kt)("img",{parentName:"a",src:"https://mybinder.org/badge.svg",alt:"Open In Binder"}))),(0,r.kt)("p",null,"In this example, we will show you how to use Bacalhau to process images on a Landsat dataset."),(0,r.kt)("p",null,"Bacalhau has the unique capability of operating at a massive scale in a distributed environment. This is made possible because data is naturally sharded across the IPFS network amongst many providers. We can take advantage of this to process images in parallel."),(0,r.kt)("p",null,"However, before we do that, this notebook shows you how to use Bacalhau to process images using a ",(0,r.kt)("a",{parentName:"p",href:"https://cloudflare-ipfs.com/ipfs/QmeZRGhe4PmjctYVSVHuEiA9oSXnqmYa4kQubSHgWbjv72"},"much smaller subset"),". This is useful for testing and debugging your code."),(0,r.kt)("p",null,"For a live walk-through of this demo please watch the first part of the video below, otherwise feel free to run the demo yourself by following the steps below."),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=wkOh05J5qgA"},(0,r.kt)("img",{alt:"Bacalhau Intro Video",src:a(8134).Z,width:"852",height:"485"}))),(0,r.kt)("h2",{id:"submit-the-workload"},"Submit the workload"),(0,r.kt)("p",null,"To submit a workload to Bacalhau you can use the ",(0,r.kt)("inlineCode",{parentName:"p"},"bacalhau docker run")," command. This allows you to pass input data volume with a ",(0,r.kt)("inlineCode",{parentName:"p"},"-v CID:path")," argument just like Docker, except the left-hand side of the argument is a ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/multiformats/cid"},"content identifier (CID)"),". This results in Bacalhau mounting a ",(0,r.kt)("em",{parentName:"p"},"data volume")," inside the container. By default, Bacalhau mounts the input volume at the path ",(0,r.kt)("inlineCode",{parentName:"p"},"/inputs")," inside the container."),(0,r.kt)("p",null,"Bacalhau also mounts a data volume to store output data. By default ",(0,r.kt)("inlineCode",{parentName:"p"},"bacalhau docker run")," creates an output data volume mounted at ",(0,r.kt)("inlineCode",{parentName:"p"},"/outputs"),". This is a convenient location to store the results of your job. See below for an example."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"%%bash --out job_id\nbacalhau docker run \\\n  --wait \\\n  --wait-timeout-secs 100 \\\n  -v QmeZRGhe4PmjctYVSVHuEiA9oSXnqmYa4kQubSHgWbjv72:/input_images \\\n  dpokidov/imagemagick:7.1.0-47-ubuntu \\\n  -- magick mogrify -resize 100x100 -quality 100 -path /outputs '/input_images/*.jpg'\n")),(0,r.kt)("p",null,"The job has been submitted and Bacalhau has printed out the related job id.\nWe store that in an environment variable so that we can reuse it later on."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"%%bash\nbacalhau list --id-filter=${JOB_ID} --no-style\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"}," CREATED   ID        JOB                      STATE      VERIFIED  PUBLISHED               \n 15:15:41  deec77f2  Docker dpokidov/imag...  Published            /ipfs/bafybeidtitnyf... \n")),(0,r.kt)("p",null,"Since the job state is published/complete, the job is ready to be downloaded."),(0,r.kt)("h2",{id:"get-results"},"Get results"),(0,r.kt)("p",null,"First, let us create a new directory that will store our job outputs.\nSecond, use the ",(0,r.kt)("inlineCode",{parentName:"p"},"get")," verb to download the job outputs into the directory specified by the ",(0,r.kt)("inlineCode",{parentName:"p"},"--output-dir")," argument.\n",(0,r.kt)("em",{parentName:"p"},"Please ignore the ",(0,r.kt)("inlineCode",{parentName:"em"},"> /dev/null 2>&1")," portion of the command, it is there only temporarily until we fix this ",(0,r.kt)("a",{parentName:"em",href:"https://github.com/filecoin-project/bacalhau/issues/614"},"issue #614")," and is meant to supress debug logs that are not useful for the user.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"%%bash\nmkdir -p ./results # Temporary directory to store the results\nbacalhau get --output-dir ./results ${JOB_ID} # Download the results\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"\x1b[90m16:16:02.846 |\x1b[0m \x1b[32mINF\x1b[0m \x1b[1mbacalhau/get.go:67\x1b[0m\x1b[36m >\x1b[0m Fetching results of job 'deec77f2-e13c-4505-970f-842c7713a48a'...\n\x1b[90m16:16:05.539 |\x1b[0m \x1b[32mINF\x1b[0m \x1b[1mipfs/downloader.go:115\x1b[0m\x1b[36m >\x1b[0m Found 1 result shards, downloading to temporary folder.\n\x1b[90m16:16:12.377 |\x1b[0m \x1b[32mINF\x1b[0m \x1b[1mipfs/downloader.go:195\x1b[0m\x1b[36m >\x1b[0m Combining shard from output volume 'outputs' to final location: '/Users/phil/source/bacalhau-project/examples/data-engineering/image-processing/results'\n")),(0,r.kt)("p",null,"The docker run command above used the ",(0,r.kt)("inlineCode",{parentName:"p"},"outputs")," volume as a results folder so when we download them they will be stored in a  folder within ",(0,r.kt)("inlineCode",{parentName:"p"},"volumes/outputs"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"%%bash\nls -lah results/volumes/outputs\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"total 192K\ndrwxr-xr-x 11 phil staff 352 Sep 16 16:16 .\ndrwxr-xr-x  3 phil staff  96 Sep 16 15:09 ..\n-rw-r--r--  1 phil staff 15K Sep 16 16:16 cafires_vir_2021231_lrg.jpg\n-rw-r--r--  1 phil staff 34K Sep 16 16:16 greatsaltlake_oli_2017210_lrg.jpg\n-rw-r--r--  1 phil staff 13K Sep 16 16:16 greecefires_oli_2021222_lrg.jpg\n-rw-r--r--  1 phil staff 17K Sep 16 16:16 haitiearthquake_oli_20212_lrg.jpg\n-rw-r--r--  1 phil staff 42K Sep 16 16:16 iwojima_tmo_2021225_lrg.jpg\n-rw-r--r--  1 phil staff 11K Sep 16 16:16 lakemead_etm_2000220_lrg.jpg\n-rw-r--r--  1 phil staff 14K Sep 16 16:16 lapalma_oli_2021141_lrg.jpg\n-rw-r--r--  1 phil staff 14K Sep 16 16:16 spainfire_oli_2021227_lrg.jpg\n-rw-r--r--  1 phil staff 16K Sep 16 16:16 sulphursprings_oli_2019254_lrg.jpg\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"import glob\nfrom IPython.display import Image, display\nfor imageName in glob.glob('results/volumes/outputs/*.jpg'):\n    display(Image(filename=imageName))\n")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"jpeg",src:a(5648).Z,width:"100",height:"72"})),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"jpeg",src:a(2340).Z,width:"100",height:"75"})),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"jpeg",src:a(4397).Z,width:"100",height:"82"})),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"jpeg",src:a(8573).Z,width:"100",height:"72"})),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"jpeg",src:a(3056).Z,width:"100",height:"87"})),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"jpeg",src:a(6066).Z,width:"94",height:"100"})),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"jpeg",src:a(7186).Z,width:"100",height:"89"})),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"jpeg",src:a(2376).Z,width:"100",height:"88"})),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"jpeg",src:a(3233).Z,width:"100",height:"79"})),(0,r.kt)("h2",{id:"where-to-go-next"},"Where to go next?"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:".."},"Take a look at other exmaples")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"../../../getting-started/workload-onboarding"},"How to run an existing workload on Bacalhau"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"../../../all-flags"},"Check out the Bacalhau CLI Reference page"),".")),(0,r.kt)("h2",{id:"support"},"Support"),(0,r.kt)("p",null,"Please reach out to the ",(0,r.kt)("a",{parentName:"p",href:"https://filecoinproject.slack.com/archives/C02RLM3JHUY"},"Bacalhau team via Slack")," to seek help or in case of any issues."))}m.isMDXComponent=!0},5648:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/index_11_0-8062fe8d98d74f02b0c65b844f9339a0.jpg"},2340:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/index_11_1-284579a9a15ee50f872330fa318fecd0.jpg"},4397:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/index_11_2-cc2844b1f2ae0e1e773774f3219c0025.jpg"},8573:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/index_11_3-d00b83ba4b35b9623cd36739dfed9ce8.jpg"},3056:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/index_11_4-6d86471f6f5224aff3a7681fa856c6c7.jpg"},6066:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/index_11_5-15ce99181444dd71784a87734fe7e150.jpg"},7186:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/index_11_6-eccd956fa658f24f64d54b0b11cb479e.jpg"},2376:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/index_11_7-ce1d76e887dbf8925dfa4caff69f2a8e.jpg"},3233:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/index_11_8-8e2c87e8602032b3effac0d28205f613.jpg"},8134:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/Bacalhau_Intro_Video_thumbnail-9888836176b5ecba4f0ecca234e791b6.jpg"}}]);