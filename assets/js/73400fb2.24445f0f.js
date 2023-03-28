"use strict";(self.webpackChunkbacalhau_docs=self.webpackChunkbacalhau_docs||[]).push([[8569],{3905:(e,n,a)=>{a.d(n,{Zo:()=>c,kt:()=>h});var t=a(7294);function o(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function r(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function l(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?r(Object(a),!0).forEach((function(n){o(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function s(e,n){if(null==e)return{};var a,t,o=function(e,n){if(null==e)return{};var a,t,o={},r=Object.keys(e);for(t=0;t<r.length;t++)a=r[t],n.indexOf(a)>=0||(o[a]=e[a]);return o}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(t=0;t<r.length;t++)a=r[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var i=t.createContext({}),u=function(e){var n=t.useContext(i),a=n;return e&&(a="function"==typeof e?e(n):l(l({},n),e)),a},c=function(e){var n=u(e.components);return t.createElement(i.Provider,{value:n},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},m=t.forwardRef((function(e,n){var a=e.components,o=e.mdxType,r=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=u(a),m=o,h=d["".concat(i,".").concat(m)]||d[m]||p[m]||r;return a?t.createElement(h,l(l({ref:n},c),{},{components:a})):t.createElement(h,l({ref:n},c))}));function h(e,n){var a=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var r=a.length,l=new Array(r);l[0]=m;var s={};for(var i in n)hasOwnProperty.call(n,i)&&(s[i]=n[i]);s.originalType=e,s[d]="string"==typeof e?e:o,l[1]=s;for(var u=2;u<r;u++)l[u]=a[u];return t.createElement.apply(null,l)}return t.createElement.apply(null,a)}m.displayName="MDXCreateElement"},841:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>i,contentTitle:()=>l,default:()=>p,frontMatter:()=>r,metadata:()=>s,toc:()=>u});var t=a(7462),o=(a(7294),a(3905));const r={sidebar_label:"Custom Containers",sidebar_position:10},l="How To Work With Custom Containers in Bacalhau",s={unversionedId:"examples/workload-onboarding/custom-containers/index",id:"examples/workload-onboarding/custom-containers/index",title:"How To Work With Custom Containers in Bacalhau",description:"Open In Colab",source:"@site/docs/examples/workload-onboarding/custom-containers/index.md",sourceDirName:"examples/workload-onboarding/custom-containers",slug:"/examples/workload-onboarding/custom-containers/",permalink:"/examples/workload-onboarding/custom-containers/",draft:!1,editUrl:"https://github.com/bacalhau-project/docs.bacalhau.org/blob/main/docs/examples/workload-onboarding/custom-containers/index.md",tags:[],version:"current",lastUpdatedAt:1680047144,formattedLastUpdatedAt:"Mar 28, 2023",sidebarPosition:10,frontMatter:{sidebar_label:"Custom Containers",sidebar_position:10},sidebar:"documentationSidebar",previous:{title:"Prolog-Hello-World",permalink:"/examples/workload-onboarding/Prolog-Hello-World/"},next:{title:"Rust - WASM",permalink:"/examples/workload-onboarding/rust-wasm/"}},i={},u=[{value:"Prerequisites",id:"prerequisites",level:3},{value:"1. Running Containers in Bacalhau",id:"1-running-containers-in-bacalhau",level:2},{value:"2. Building Your Own Custom Container For Bacalhau",id:"2-building-your-own-custom-container-for-bacalhau",level:2},{value:"3. Running Your Custom Container on Bacalhau",id:"3-running-your-custom-container-on-bacalhau",level:2}],c={toc:u},d="wrapper";function p(e){let{components:n,...a}=e;return(0,o.kt)(d,(0,t.Z)({},c,a,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"how-to-work-with-custom-containers-in-bacalhau"},"How To Work With Custom Containers in Bacalhau"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://colab.research.google.com/github/bacalhau-project/examples/blob/main/workload-onboarding/custom-containers/index.ipynb"},(0,o.kt)("img",{parentName:"a",src:"https://colab.research.google.com/assets/colab-badge.svg",alt:"Open In Colab"})),"\n",(0,o.kt)("a",{parentName:"p",href:"https://mybinder.org/v2/gh/bacalhau-project/examples/HEAD?labpath=workload-onboarding/custom-containers/index.ipynb"},(0,o.kt)("img",{parentName:"a",src:"https://mybinder.org/badge.svg",alt:"Open In Binder"}))),(0,o.kt)("p",null,"Bacalhau operates by executing jobs within containers. This example shows you how to build and use a custom docker container."),(0,o.kt)("h3",{id:"prerequisites"},"Prerequisites"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"This example requires Docker. If you don't have Docker installed, you can install it from ",(0,o.kt)("a",{parentName:"li",href:"https://docs.docker.com/install/"},"here"),". Docker commands will not work on hosted notebooks like Google Colab, but the Bacalhau commands will."),(0,o.kt)("li",{parentName:"ul"},"The Bacalhau client - ",(0,o.kt)("a",{parentName:"li",href:"https://docs.bacalhau.org/getting-started/installation"},"Installation instructions"))),(0,o.kt)("h2",{id:"1-running-containers-in-bacalhau"},"1. Running Containers in Bacalhau"),(0,o.kt)("p",null,"You're probably used to running docker commands to run a container."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"%%bash\ndocker run docker/whalesay cowsay sup old fashioned container run\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},' _________________________________ \n< sup old fashioned container run >\n --------------------------------- \n    \\\n     \\\n      \\     \n                    ##        .            \n              ## ## ##       ==            \n           ## ## ## ##      ===            \n       /""""""""""""""""___/ ===        \n  ~~~ {~~ ~~~~ ~~~ ~~~~ ~~ ~ /  ===- ~~~   \n       \\______ o          __/            \n        \\    \\        __/             \n          \\____\\______/   \n\n\nWARNING: The requested image\'s platform (linux/amd64) does not match the detected host platform (linux/arm64/v8) and no specific platform was requested\n')),(0,o.kt)("p",null,"Bacalhau uses a syntax that is similar to docker and you can use the same containers. The main difference is that input and output data is passed to the container via IPFS, to enable planetary scale. In this example, it doesn't make too much difference except that we need to download the stdout."),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"--wait")," flag tells Bacalhau to wait for the job to finish before returning. This is useful in interactive sessions like this, but you would normally allow jobs to complete in the background and use the ",(0,o.kt)("inlineCode",{parentName:"p"},"list")," command to check on their status."),(0,o.kt)("p",null,"Another difference is that by default Bacalhau overwrites the default entrypoint for the container so you have to pass all shell commands as arguments to the ",(0,o.kt)("inlineCode",{parentName:"p"},"run")," command after the ",(0,o.kt)("inlineCode",{parentName:"p"},"--")," flag."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"%%bash --out job_id\nbacalhau docker run --wait --id-only docker/whalesay -- bash -c 'cowsay hello web3 uber-run'\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"%%bash\nrm -rf results && mkdir -p results\n")),(0,o.kt)("p",null,"To Download the results of your job, run the following command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"%%bash\nbacalhau get ${JOB_ID}  --output-dir results\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Fetching results of job '1fd678f4-edb5-4516-91b7-2fcd7965ff63'...\nResults for job '1fd678f4-edb5-4516-91b7-2fcd7965ff63' have been written to...\nresults\n\n\n2022/11/23 14:13:09 CleanupManager.fnsMutex violation CRITICAL section took 20.239ms 20239000 (threshold 10ms)\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"%%bash\ncat ./results/combined_results/stdout\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},' _____________________ \n< hello web3 uber-run >\n --------------------- \n    \\\n     \\\n      \\     \n                    ##        .            \n              ## ## ##       ==            \n           ## ## ## ##      ===            \n       /""""""""""""""""___/ ===        \n  ~~~ {~~ ~~~~ ~~~ ~~~~ ~~ ~ /  ===- ~~~   \n       \\______ o          __/            \n        \\    \\        __/             \n          \\____\\______/   \n')),(0,o.kt)("h2",{id:"2-building-your-own-custom-container-for-bacalhau"},"2. Building Your Own Custom Container For Bacalhau"),(0,o.kt)("p",null,"To use your own custom container, you must publish the container to a container registry that is accessible from the Bacalhau network. At this time, only public container registries are supported."),(0,o.kt)("p",null,"To demonstrate this, you will develop and build a simple custom container that comes from an old docker example. I remember seeing cowsay at a Docker conference about a decade ago. I think it's about time we brought it back to life and distribute it across the Bacalhau network."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"%%writefile cod.cow\n$the_cow = <<\"EOC\";\n   $thoughts\n    $thoughts\n                               ,,,,_\n                            \u250c\u03a6\u2593\u256c\u2593\u256c\u2593\u2593\u2593W      @\u2593\u2593\u2592,\n                           \u2560\u2593\u256c\u2593\u256c\u2563\u256c\u256c\u2593\u256c\u2593\u2593   \u2554\u2563\u256c\u256c\u2593\u256c\u2563\u2593,\n                    __,\u250c\u2553\u2550\u2560\u256c\u2560\u256c\u256c\u256c\xd1\u256c\u256c\u256c\xd1\u256c\u256c\xbc,\u2563\u256c\u256c\u2593\u256c\u256c\u2593\u256c\u2593\u2593\u2593\u2510        \u2554W_             ,\u03c6\u2593\u2593\n               ,\xab@\u2592\u2560\u2560\u2560\u2560\u2569\u255a\u2559\u2559\u2569\xdc\u255a\u255a\u255a\u255a\u2569\u2559\u2559\u255a\u2560\u2569\u255a\u255a\u255f\u2593\u2592\u2560\u2560\u256b\u2563\u256c\u256c\u256b\u256c\u2563\u2593,   _\u03c6\u256c\u2593\u256c\u256c\u2593,        ,\u03c6\u2563\u2593\u2593\u256c\u256c\n          _,\u03c6\xc6\u2569\u256c\u2569\u2559\u255a\u2569\u2591\u2559\u2559\u2591\u2591\u2569`=\u2591\u2559\u255a\xbb\xbb\u2566\u2591=\u2553\u2559\xdc1R\u2591\u2502\u2591\u255a\xdc\u2591\u2559\u2559\u255a\u2560\u2560\u2560\u2563\u2563\u256c\u2261\u03a6\u256c\u2580\u256c\u2563\u256c\u256c\u2593\u2593\u2593_   \u2553\u2584\u2593\u2593\u2593\u2593\u2593\u2593\u256c\u258c\n      _,\u03c6\u256c\xd1\u2569\u258c\u2590\u2588[\u2592\u2591\u2591\u2591\u2591R\u2591\u2591\u2580\u2591`,_`!R`````\u2559`-'\u255a\xdc\u2591\u2591\xdc\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2502\u2502\u2502\u2591\u255a\u255a\u2559\u255a\u2569\u2569\u2569\u2563\xd1\u2569\u2560\u2592\u2592\u2569\u2569\u2580\u2593\u2593\u2563\u2593\u2593\u256c\u2560\u258c\n     '\u255a\u2569\xdc\u2559\u2502\u2591\u2591\u2559\xd6\u2592\xdc\u2591\u2591\u2591H\u2591\u2591R \u2592\xa5\u2563\u2563@@@\u2593\u2593\u2593  := '`   `\u2591``````````````````````````]\u2593\u2593\u2593\u256c\u256c\u2560H\n       '\xac\u2550\u2584 `\\\u2591\u2559\xdc\u2591\u2560DjK` \xc5\xbb\xbb\u2559\u2563\u2593\u2593\u2593\u2593\u256c\xd1     -\xbb`       -`      `  ,;\u2553\u2584\u2554\u2557\u221e  ~\u2593\u2593\u2593\u2580\u2593\u2593\u256c\u256c\u256c\u258c\n             '^^^`   _\u2552\u0393   `\u2559\u2580\u2593\u2593\u2568                     _, \u207fD\u2563\u2593\u256c\u2563\u2593\u256c\u2593\u255c      \u2559\u256c\u2593\u2593\u256c\u256c\u2593\u2593\n                 ```\u2514                           _\u2553\u2584@\u2593\u2593\u2593\u255c   `\u255d\u256c\u2593\u2593\u2559           \xb2\u2563\u256c\u2593\u2593\n                        %\u03c6\u2584\u2553_             ~#\u2593\u2560\u2593\u2592\u256c\u2593\u256c\u2593\u2593^        `                \u2559\u2559\n                         `\u2563\u2593\u2593\u2593              \u2560\u256c\u2593\u256c\u2593\u256c\u2580`\n                           \u255a\u2593\u258c               '\u2568\u2580\u255c\nEOC\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Overwriting cod.cow\n")),(0,o.kt)("p",null,"Next, the Dockerfile adds the script and sets the entrypoint."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'%%writefile Dockerfile\nFROM debian:stretch\nRUN apt-get update && apt-get install -y cowsay\n# "cowsay" installs to /usr/games\nENV PATH $PATH:/usr/games\nRUN echo \'#!/bin/bash\\ncowsay "${@:1}"\' > /usr/bin/codsay && \\\n    chmod +x /usr/bin/codsay\nCOPY cod.cow /usr/share/cowsay/cows/default.cow\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Overwriting Dockerfile\n")),(0,o.kt)("p",null,"Now let's build and test the container locally."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"%%bash\ndocker build -t ghcr.io/bacalhau-project/examples/codsay:latest . 2> /dev/null\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"%%bash\ndocker run --rm ghcr.io/bacalhau-project/examples/codsay:latest codsay I like swimming in data\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"}," _________________________\n< I like swimming in data >\n -------------------------\n   \\\n    \\\n                               ,,,,_\n                            \u250c\u03a6\u2593\u256c\u2593\u256c\u2593\u2593\u2593W      @\u2593\u2593\u2592,\n                           \u2560\u2593\u256c\u2593\u256c\u2563\u256c\u256c\u2593\u256c\u2593\u2593   \u2554\u2563\u256c\u256c\u2593\u256c\u2563\u2593,\n                    __,\u250c\u2553\u2550\u2560\u256c\u2560\u256c\u256c\u256c\xd1\u256c\u256c\u256c\xd1\u256c\u256c\xbc,\u2563\u256c\u256c\u2593\u256c\u256c\u2593\u256c\u2593\u2593\u2593\u2510        \u2554W_             ,\u03c6\u2593\u2593\n               ,\xab@\u2592\u2560\u2560\u2560\u2560\u2569\u255a\u2559\u2559\u2569\xdc\u255a\u255a\u255a\u255a\u2569\u2559\u2559\u255a\u2560\u2569\u255a\u255a\u255f\u2593\u2592\u2560\u2560\u256b\u2563\u256c\u256c\u256b\u256c\u2563\u2593,   _\u03c6\u256c\u2593\u256c\u256c\u2593,        ,\u03c6\u2563\u2593\u2593\u256c\u256c\n          _,\u03c6\xc6\u2569\u256c\u2569\u2559\u255a\u2569\u2591\u2559\u2559\u2591\u2591\u2569`=\u2591\u2559\u255a\xbb\xbb\u2566\u2591=\u2553\u2559\xdc1R\u2591\u2502\u2591\u255a\xdc\u2591\u2559\u2559\u255a\u2560\u2560\u2560\u2563\u2563\u256c\u2261\u03a6\u256c\u2580\u256c\u2563\u256c\u256c\u2593\u2593\u2593_   \u2553\u2584\u2593\u2593\u2593\u2593\u2593\u2593\u256c\u258c\n      _,\u03c6\u256c\xd1\u2569\u258c\u2590\u2588[\u2592\u2591\u2591\u2591\u2591R\u2591\u2591\u2580\u2591`,_`!R`````\u2559`-'\u255a\xdc\u2591\u2591\xdc\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2502\u2502\u2502\u2591\u255a\u255a\u2559\u255a\u2569\u2569\u2569\u2563\xd1\u2569\u2560\u2592\u2592\u2569\u2569\u2580\u2593\u2593\u2563\u2593\u2593\u256c\u2560\u258c\n     '\u255a\u2569\xdc\u2559\u2502\u2591\u2591\u2559\xd6\u2592\xdc\u2591\u2591\u2591H\u2591\u2591R \u2592\xa5\u2563\u2563@@@\u2593\u2593\u2593  := '`   `\u2591``````````````````````````]\u2593\u2593\u2593\u256c\u256c\u2560H\n       '\xac\u2550\u2584 `\u2591\u2559\xdc\u2591\u2560DjK` \xc5\xbb\xbb\u2559\u2563\u2593\u2593\u2593\u2593\u256c\xd1     -\xbb`       -`      `  ,;\u2553\u2584\u2554\u2557\u221e  ~\u2593\u2593\u2593\u2580\u2593\u2593\u256c\u256c\u256c\u258c\n             '^^^`   _\u2552\u0393   `\u2559\u2580\u2593\u2593\u2568                     _, \u207fD\u2563\u2593\u256c\u2563\u2593\u256c\u2593\u255c      \u2559\u256c\u2593\u2593\u256c\u256c\u2593\u2593\n                 ```\u2514                           _\u2553\u2584@\u2593\u2593\u2593\u255c   `\u255d\u256c\u2593\u2593\u2559           \xb2\u2563\u256c\u2593\u2593\n                        %\u03c6\u2584\u2553_             ~#\u2593\u2560\u2593\u2592\u256c\u2593\u256c\u2593\u2593^        `                \u2559\u2559\n                         `\u2563\u2593\u2593\u2593              \u2560\u256c\u2593\u256c\u2593\u256c\u2580`\n                           \u255a\u2593\u258c               '\u2568\u2580\u255c\n")),(0,o.kt)("p",null,"Once your container is working as expected then you should push it to a public container registry. In this example, I'm pushing to Github's container registry, but we'll skip the step below because you probably don't have permission.Remember that the Bacalhau nodes expect your container to have a ",(0,o.kt)("inlineCode",{parentName:"p"},"linux/amd64")," architecture."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"%%bash\n# docker buildx build --platform linux/amd64,linux/arm64 --push -t ghcr.io/bacalhau-project/examples/codsay:latest .\n")),(0,o.kt)("h2",{id:"3-running-your-custom-container-on-bacalhau"},"3. Running Your Custom Container on Bacalhau"),(0,o.kt)("p",null,"Now we're ready to submit a Bacalhau job using your custom container. This code runs a job, downloads the results and prints the stdout."),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"The ",(0,o.kt)("inlineCode",{parentName:"p"},"bacalhau docker run")," command strips the default entrypoint, so don't forget to run your entrypoint in the command line arguments.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"%%bash --out job_id\nbacalhau docker run \\\n    --wait \\\n    --id-only \\\n    ghcr.io/bacalhau-project/examples/codsay:v1.0.0 \\\n    -- bash -c 'codsay Look at all this data'\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"%%bash\nrm -rf results && mkdir -p results\n")),(0,o.kt)("p",null,"To Download the results of your job, run the following command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"%%bash\nbacalhau get ${JOB_ID}  --output-dir results\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Fetching results of job '4dac91df-a7ad-4019-80e1-88201e007a01'...\nResults for job '4dac91df-a7ad-4019-80e1-88201e007a01' have been written to...\nresults\n\n\n2022/11/23 14:14:44 CleanupManager.fnsMutex violation CRITICAL section took 19.803ms 19803000 (threshold 10ms)\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"%%bash\ncat ./results/combined_results/stdout\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"}," _______________________\n< Look at all this data >\n -----------------------\n   \\\n    \\\n                               ,,,,_\n                            \u250c\u03a6\u2593\u256c\u2593\u256c\u2593\u2593\u2593W      @\u2593\u2593\u2592,\n                           \u2560\u2593\u256c\u2593\u256c\u2563\u256c\u256c\u2593\u256c\u2593\u2593   \u2554\u2563\u256c\u256c\u2593\u256c\u2563\u2593,\n                    __,\u250c\u2553\u2550\u2560\u256c\u2560\u256c\u256c\u256c\xd1\u256c\u256c\u256c\xd1\u256c\u256c\xbc,\u2563\u256c\u256c\u2593\u256c\u256c\u2593\u256c\u2593\u2593\u2593\u2510        \u2554W_             ,\u03c6\u2593\u2593\n               ,\xab@\u2592\u2560\u2560\u2560\u2560\u2569\u255a\u2559\u2559\u2569\xdc\u255a\u255a\u255a\u255a\u2569\u2559\u2559\u255a\u2560\u2569\u255a\u255a\u255f\u2593\u2592\u2560\u2560\u256b\u2563\u256c\u256c\u256b\u256c\u2563\u2593,   _\u03c6\u256c\u2593\u256c\u256c\u2593,        ,\u03c6\u2563\u2593\u2593\u256c\u256c\n          _,\u03c6\xc6\u2569\u256c\u2569\u2559\u255a\u2569\u2591\u2559\u2559\u2591\u2591\u2569`=\u2591\u2559\u255a\xbb\xbb\u2566\u2591=\u2553\u2559\xdc1R\u2591\u2502\u2591\u255a\xdc\u2591\u2559\u2559\u255a\u2560\u2560\u2560\u2563\u2563\u256c\u2261\u03a6\u256c\u2580\u256c\u2563\u256c\u256c\u2593\u2593\u2593_   \u2553\u2584\u2593\u2593\u2593\u2593\u2593\u2593\u256c\u258c\n      _,\u03c6\u256c\xd1\u2569\u258c\u2590\u2588[\u2592\u2591\u2591\u2591\u2591R\u2591\u2591\u2580\u2591`,_`!R`````\u2559`-'\u255a\xdc\u2591\u2591\xdc\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2502\u2502\u2502\u2591\u255a\u255a\u2559\u255a\u2569\u2569\u2569\u2563\xd1\u2569\u2560\u2592\u2592\u2569\u2569\u2580\u2593\u2593\u2563\u2593\u2593\u256c\u2560\u258c\n     '\u255a\u2569\xdc\u2559\u2502\u2591\u2591\u2559\xd6\u2592\xdc\u2591\u2591\u2591H\u2591\u2591R \u2592\xa5\u2563\u2563@@@\u2593\u2593\u2593  := '`   `\u2591``````````````````````````]\u2593\u2593\u2593\u256c\u256c\u2560H\n       '\xac\u2550\u2584 `\u2591\u2559\xdc\u2591\u2560DjK` \xc5\xbb\xbb\u2559\u2563\u2593\u2593\u2593\u2593\u256c\xd1     -\xbb`       -`      `  ,;\u2553\u2584\u2554\u2557\u221e  ~\u2593\u2593\u2593\u2580\u2593\u2593\u256c\u256c\u256c\u258c\n             '^^^`   _\u2552\u0393   `\u2559\u2580\u2593\u2593\u2568                     _, \u207fD\u2563\u2593\u256c\u2563\u2593\u256c\u2593\u255c      \u2559\u256c\u2593\u2593\u256c\u256c\u2593\u2593\n                 ```\u2514                           _\u2553\u2584@\u2593\u2593\u2593\u255c   `\u255d\u256c\u2593\u2593\u2559           \xb2\u2563\u256c\u2593\u2593\n                        %\u03c6\u2584\u2553_             ~#\u2593\u2560\u2593\u2592\u256c\u2593\u256c\u2593\u2593^        `                \u2559\u2559\n                         `\u2563\u2593\u2593\u2593              \u2560\u256c\u2593\u256c\u2593\u256c\u2580`\n                           \u255a\u2593\u258c               '\u2568\u2580\u255c\n")))}p.isMDXComponent=!0}}]);