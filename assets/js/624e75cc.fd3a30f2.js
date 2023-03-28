"use strict";(self.webpackChunkbacalhau_docs=self.webpackChunkbacalhau_docs||[]).push([[1357],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>h});var n=a(7294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var i=n.createContext({}),p=function(e){var t=n.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(i.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=p(a),d=o,h=m["".concat(i,".").concat(d)]||m[d]||u[d]||r;return a?n.createElement(h,l(l({ref:t},c),{},{components:a})):n.createElement(h,l({ref:t},c))}));function h(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,l=new Array(r);l[0]=d;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[m]="string"==typeof e?e:o,l[1]=s;for(var p=2;p<r;p++)l[p]=a[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},3330:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>u,frontMatter:()=>r,metadata:()=>s,toc:()=>p});var n=a(7462),o=(a(7294),a(3905));const r={},l="Molecular Dynamics with Bacalhau",s={unversionedId:"examples/molecular-dynamics/Gromacs/index",id:"examples/molecular-dynamics/Gromacs/index",title:"Molecular Dynamics with Bacalhau",description:"Open In Colab",source:"@site/docs/examples/molecular-dynamics/Gromacs/index.md",sourceDirName:"examples/molecular-dynamics/Gromacs",slug:"/examples/molecular-dynamics/Gromacs/",permalink:"/examples/molecular-dynamics/Gromacs/",draft:!1,editUrl:"https://github.com/bacalhau-project/docs.bacalhau.org/blob/main/docs/examples/molecular-dynamics/Gromacs/index.md",tags:[],version:"current",lastUpdatedAt:1680047144,formattedLastUpdatedAt:"Mar 28, 2023",frontMatter:{},sidebar:"documentationSidebar",previous:{title:"Running Genomics on Bacalhau",permalink:"/examples/molecular-dynamics/Genomics/"},next:{title:"FAQs",permalink:"/faqs"}},i={},p=[{value:"Introduction",id:"introduction",level:2},{value:"<strong>Downloading datasets</strong>",id:"downloading-datasets",level:3},{value:"<strong>Uploading the datasets to IPFS</strong>",id:"uploading-the-datasets-to-ipfs",level:3},{value:"<strong>Running the command on Bacalhau</strong>",id:"running-the-command-on-bacalhau",level:4}],c={toc:p},m="wrapper";function u(e){let{components:t,...a}=e;return(0,o.kt)(m,(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"molecular-dynamics-with-bacalhau"},"Molecular Dynamics with Bacalhau"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://colab.research.google.com/github/bacalhau-project/examples/blob/main/Gromacs/BIDS/index.ipynb"},(0,o.kt)("img",{parentName:"a",src:"https://colab.research.google.com/assets/colab-badge.svg",alt:"Open In Colab"})),"\n",(0,o.kt)("a",{parentName:"p",href:"https://mybinder.org/v2/gh/bacalhau-project/examples/HEAD?labpath=miscellaneous/Gromacs/index.ipynb"},(0,o.kt)("img",{parentName:"a",src:"https://mybinder.org/badge.svg",alt:"Open In Binder"}))),(0,o.kt)("h2",{id:"introduction"},"Introduction"),(0,o.kt)("p",null,"GROMACS is a package for high-performance molecular dynamics and output analysis."),(0,o.kt)("p",null,"Molecular dynamics is a computer simulation method for analyzing the physical movements of atoms and molecules"),(0,o.kt)("p",null,"In this example we will make use of ",(0,o.kt)("a",{parentName:"p",href:"https://manual.gromacs.org/documentation/current/onlinehelp/gmx-pdb2gmx.html#description"},"gmx pdb2gmx")," program to add hydrogens to the molecules and generates coordinates in Gromacs (Gromos) format and a topology in Gromacs format"),(0,o.kt)("h3",{id:"downloading-datasets"},(0,o.kt)("strong",{parentName:"h3"},"Downloading datasets")),(0,o.kt)("p",null,"Datasets can be found here ",(0,o.kt)("a",{parentName:"p",href:"https://www.rcsb.org"},"https://www.rcsb.org"),", In this example we use ",(0,o.kt)("a",{parentName:"p",href:"https://www.rcsb.org/structure/1AKI"},"RCSB PDB - 1AKI")," dataset. After downloading place it in a folder called \u201cinput\u201d"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"input\n\u2514\u2500\u2500 1AKI.pdb\n")),(0,o.kt)("h3",{id:"uploading-the-datasets-to-ipfs"},(0,o.kt)("strong",{parentName:"h3"},"Uploading the datasets to IPFS")),(0,o.kt)("p",null,"Upload the directory to IPFS using IPFS CLI (",(0,o.kt)("a",{parentName:"p",href:"https://docs.ipfs.tech/install/command-line/#official-distributions"},"Installation Instructions"),") ","[Not recommended]"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"$ ipfs add -r input/\nadded QmTCCqPzX3qSJHuMeSma9uCqUnriZ5eJX7MnxebxydL89f input/1AKI.pdb\nadded QmeeEB1YMrG6K8z43VdsdoYmQV46gAPQCHotZs9pwusCm9 input\n 113.59 KiB / 113.59 KiB [============================================================================================] 100.00%\n")),(0,o.kt)("p",null,"Copy the CID in the end which is ",(0,o.kt)("inlineCode",{parentName:"p"},"QmeeEB1YMrG6K8z43VdsdoYmQV46gAPQCHotZs9pwusCm9 ")),(0,o.kt)("p",null,"Upload the directory to IPFS using ",(0,o.kt)("a",{parentName:"p",href:"https://app.pinata.cloud/"},"Pinata")," (Recommended)"),(0,o.kt)("p",null,"Click on the upload folder button and select the datasets folder that you want to upload\n",(0,o.kt)("img",{parentName:"p",src:"https://i.imgur.com/TfNP9Lv.png",alt:null})),(0,o.kt)("p",null,"After the Upload has finished copy the CID (highlighted part)"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://i.imgur.com/WO6QlN4.png",alt:null})),(0,o.kt)("h4",{id:"running-the-command-on-bacalhau"},(0,o.kt)("strong",{parentName:"h4"},"Running the command on Bacalhau")),(0,o.kt)("p",null,"This command converts coordinate files to topology and FF-compliant coordinate files:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"bacalhau docker run \\\n-v QmeeEB1YMrG6K8z43VdsdoYmQV46gAPQCHotZs9pwusCm9:/input \\\ngromacs/gromacs \\\n-- /bin/bash -c 'echo 15 | gmx pdb2gmx -f input/1AKI.pdb -o outputs/1AKI_processed.gro -water spc'\n")),(0,o.kt)("p",null,"Lets look at the command above more closely:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"bacalhau docker run")," using the docker backend")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"-v QmeeEB1YMrG6K8z43VdsdoYmQV46gAPQCHotZs9pwusCm9:/input")," here we mount the CID of the dataset we uploaded to IPFS and mount it to a folder called data on the container")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"gromacs/gromacs")," we use the official ",(0,o.kt)("a",{parentName:"p",href:"https://hub.docker.com/r/gromacs/gromacs"},"gromacs - Docker Image")," ")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"-f input/1AKI.pdb")," input file")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"-o output/1AKI_processed.gro")," output file")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"-water")," Water model to use in this case we use spc"))),(0,o.kt)("p",null,"Additional parameters could be found here ",(0,o.kt)("a",{parentName:"p",href:"https://manual.gromacs.org/documentation/current/onlinehelp/gmx-pdb2gmx.html"},"gmx pdb2gmx \u2014 GROMACS 2022.2 documentation")," "),(0,o.kt)("p",null,"(similar tutorial you can try yourself ",(0,o.kt)("a",{parentName:"p",href:"http://www.mdtutorials.com/gmx/membrane_protein/01_pdb2gmx.html"},"KALP-15 in DPPC - GROMACS Tutorial")," )"),(0,o.kt)("p",null,"Installing Bacalhau"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"%%bash\ncurl -sL https://get.bacalhau.org/install.sh | bash\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Your system is linux_amd64\nNo BACALHAU detected. Installing fresh BACALHAU CLI...\nGetting the latest BACALHAU CLI...\nInstalling v0.2.3 BACALHAU CLI...\nDownloading https://github.com/filecoin-project/bacalhau/releases/download/v0.2.3/bacalhau_v0.2.3_linux_amd64.tar.gz ...\nDownloading sig file https://github.com/filecoin-project/bacalhau/releases/download/v0.2.3/bacalhau_v0.2.3_linux_amd64.tar.gz.signature.sha256 ...\nVerified OK\nExtracting tarball ...\nNOT verifying Bin\nbacalhau installed into /usr/local/bin successfully.\nClient Version: v0.2.3\nServer Version: v0.2.3\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"%%bash --out job_id\nbacalhau docker run \\\n--id-only \\\n--wait \\ \n--timeout 3600 \\\n--wait-timeout-secs 3600 \\\n-v QmeeEB1YMrG6K8z43VdsdoYmQV46gAPQCHotZs9pwusCm9:/input \\\ngromacs/gromacs\n-- /bin/bash -c 'echo 15 | gmx pdb2gmx -f input/1AKI.pdb -o outputs/1AKI_processed.gro -water spc'\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"%env JOB_ID={job_id}\n")),(0,o.kt)("p",null,"Running the commands will output a UUID. This is the ID of the job that was created. You can check the status of the job with the following command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"%%bash\nbacalhau list --id-filter ${JOB_ID} --wide\n")),(0,o.kt)("p",null,"Where it says ",(0,o.kt)("inlineCode",{parentName:"p"},"Completed"),", that means the job is done, and we can get the results."),(0,o.kt)("p",null,"To find out more information about your job, run the following command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"%%bash\nbacalhau describe ${JOB_ID}\n")),(0,o.kt)("p",null,"To Download the results of your job, run the following command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"%%bash\nrm -rf results && mkdir -p results\nbacalhau get $JOB_ID --output-dir results\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"\x1b[90m12:19:36.609 |\x1b[0m \x1b[32mINF\x1b[0m \x1b[1mbacalhau/get.go:67\x1b[0m\x1b[36m >\x1b[0m Fetching results of job 'ab354ccc-f02e-4262-ad0b-f33ec78803cc'...\n2022/09/18 12:19:37 failed to sufficiently increase receive buffer size (was: 208 kiB, wanted: 2048 kiB, got: 416 kiB). See https://github.com/lucas-clemente/quic-go/wiki/UDP-Receive-Buffer-Size for details.\n\x1b[90m12:19:47.364 |\x1b[0m \x1b[32mINF\x1b[0m \x1b[1mipfs/downloader.go:115\x1b[0m\x1b[36m >\x1b[0m Found 1 result shards, downloading to temporary folder.\n\x1b[90m12:19:51.091 |\x1b[0m \x1b[32mINF\x1b[0m \x1b[1mipfs/downloader.go:195\x1b[0m\x1b[36m >\x1b[0m Combining shard from output volume 'outputs' to final location: '/content/results'\n")),(0,o.kt)("p",null,"After the download has finished you should\nsee the following contents in results directory"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"%%bash\nls results/\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"shards  stderr  stdout  volumes\n")),(0,o.kt)("p",null,"Rach repository contains selfexplanatory results."))}u.isMDXComponent=!0}}]);