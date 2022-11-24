"use strict";(self.webpackChunkbacalhau_docs=self.webpackChunkbacalhau_docs||[]).push([[4236],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>m});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var c=a.createContext({}),s=function(e){var n=a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},u=function(e){var n=s(e.components);return a.createElement(c.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},p=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,l=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=s(t),m=r,g=p["".concat(c,".").concat(m)]||p[m]||d[m]||l;return t?a.createElement(g,o(o({ref:n},u),{},{components:t})):a.createElement(g,o({ref:n},u))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var l=t.length,o=new Array(l);o[0]=p;var i={};for(var c in n)hasOwnProperty.call(n,c)&&(i[c]=n[c]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var s=2;s<l;s++)o[s]=t[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}p.displayName="MDXCreateElement"},9849:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>d,frontMatter:()=>l,metadata:()=>i,toc:()=>s});var a=t(7462),r=(t(7294),t(3905));const l={sidebar_label:"DuckDB",sidebar_position:1},o="DuckDB",i={unversionedId:"examples/data-engineering/DuckDB/index",id:"examples/data-engineering/DuckDB/index",title:"DuckDB",description:"Open In Colab",source:"@site/docs/examples/data-engineering/DuckDB/index.md",sourceDirName:"examples/data-engineering/DuckDB",slug:"/examples/data-engineering/DuckDB/",permalink:"/examples/data-engineering/DuckDB/",draft:!1,editUrl:"https://github.com/bacalhau-project/docs.bacalhau.org/blob/main/docs/examples/data-engineering/DuckDB/index.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_label:"DuckDB",sidebar_position:1},sidebar:"documentationSidebar",previous:{title:"Data Engineering",permalink:"/examples/data-engineering/"},next:{title:"Simple Image Processing",permalink:"/examples/data-engineering/image-processing/"}},c={},s=[{value:"Introduction",id:"introduction",level:2},{value:"Building Docker container",id:"building-docker-container",level:2},{value:"Running on bacalhau",id:"running-on-bacalhau",level:2},{value:"Running Arbituary SQL commands over Yellow taxi trips dataset",id:"running-arbituary-sql-commands-over-yellow-taxi-trips-dataset",level:2}],u={toc:s};function d(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,a.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"duckdb"},"DuckDB"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://colab.research.google.com/github/bacalhau-project/examples/blob/main/data-engineering/DuckDB/index.ipynb"},(0,r.kt)("img",{parentName:"a",src:"https://colab.research.google.com/assets/colab-badge.svg",alt:"Open In Colab"})),"\n",(0,r.kt)("a",{parentName:"p",href:"https://mybinder.org/v2/gh/bacalhau-project/examples/HEAD?labpath=data-engineering/DuckDB/index.ipynb"},(0,r.kt)("img",{parentName:"a",src:"https://mybinder.org/badge.svg",alt:"Open In Binder"}))),(0,r.kt)("h2",{id:"introduction"},"Introduction"),(0,r.kt)("p",null,"DuckDB is a relational table-oriented database management system and supports SQL queries for producing analytical results. It also comes with various features that are useful for data analytics."),(0,r.kt)("p",null,"DuckDB is suited for the following use cases"),(0,r.kt)("p",null,"Processing and storing tabular datasets, e.g. from CSV or Parquet files\nInteractive data analysis, e.g. Joining & aggregate multiple large tables\nConcurrent large changes, to multiple large tables, e.g. appending rows, adding/removing/updating columns\nLarge result set transfer to client"),(0,r.kt)("p",null,"The advantage of using DuckDB with bacalhau is that you don\u2019t need to install\nIt locally also there is no need to download the datasets since the datasets are\nAlready there on IPFS or on the web"),(0,r.kt)("h2",{id:"building-docker-container"},"Building Docker container"),(0,r.kt)("p",null,"You can skip to running on bacalhau if you don\u2019t want to build the container\nIf you want any additional dependencies to be installed along with DuckDB\nyou need to build your own container"),(0,r.kt)("p",null,"To build your own docker container, create a Dockerfile, which contains\nInstructions to build your DuckDB   docker container"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-Dockerfile"},"FROM mcr.microsoft.com/vscode/devcontainers/python:3.9\n\nRUN apt-get update && apt-get install -y nodejs npm g++\n\n# Install dbt\nRUN pip3 --disable-pip-version-check --no-cache-dir install duckdb==0.4.0 dbt-duckdb==1.1.4 \\\n    && rm -rf /tmp/pip-tmp\n\n# Install duckdb cli\nRUN wget https://github.com/duckdb/duckdb/releases/download/v0.4.0/duckdb_cli-linux-amd64.zip \\\n    && unzip duckdb_cli-linux-amd64.zip -d /usr/local/bin \\\n    && rm duckdb_cli-linux-amd64.zip\n\n# Configure Workspace\nENV DBT_PROFILES_DIR=/workspaces/datadex\nWORKDIR /workspaces/datadex\n\n")),(0,r.kt)("p",null,"Building the container"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"docker build -t davidgasquez/datadex:v0.2.0 .\n")),(0,r.kt)("p",null,"Testing it locally"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'\u276f docker run davidgasquez/datadex:v0.1.0 "select 1"\n\u250c\u2500\u2500\u2500\u2510\n\u2502 1 \u2502\n\u251c\u2500\u2500\u2500\u2524\n\u2502 1 \u2502\n\u2514\u2500\u2500\u2500\u2518\n\n\n')),(0,r.kt)("p",null,"Since our container is working locally we push it to docker hub"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"docker push davidgasquez/datadex:v0.2.0\n")),(0,r.kt)("h2",{id:"running-on-bacalhau"},"Running on bacalhau"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"!curl -sL https://get.bacalhau.org/install.sh | bash\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"Your system is linux_amd64\nNo BACALHAU detected. Installing fresh BACALHAU CLI...\nGetting the latest BACALHAU CLI...\nInstalling v0.3.11 BACALHAU CLI...\nDownloading https://github.com/filecoin-project/bacalhau/releases/download/v0.3.11/bacalhau_v0.3.11_linux_amd64.tar.gz ...\nDownloading sig file https://github.com/filecoin-project/bacalhau/releases/download/v0.3.11/bacalhau_v0.3.11_linux_amd64.tar.gz.signature.sha256 ...\nVerified OK\nExtracting tarball ...\nNOT verifying Bin\nbacalhau installed into /usr/local/bin successfully.\nClient Version: v0.3.11\nServer Version: v0.3.11\n")),(0,r.kt)("p",null,"To test whether the same command that we ran locally runs on bacalhau we run the following command"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"bacalhau docker run \\\n     --workdir /inputs/ \\\n     --wait \\\n     --id-only \\\n     davidgasquez/datadex:v0.2.0 -- /bin/bash -c 'duckdb -s \"select 1\"'\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"%env JOB_ID={job_id}\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"env: JOB_ID=eb72c5f5-599b-464e-af93-3ecb9247e9af\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"bacalhau list --id-filter ${JOB_ID}\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"\x1b[92;100m CREATED  \x1b[0m\x1b[92;100m ID       \x1b[0m\x1b[92;100m JOB                     \x1b[0m\x1b[92;100m STATE     \x1b[0m\x1b[92;100m VERIFIED \x1b[0m\x1b[92;100m PUBLISHED               \x1b[0m\n\x1b[97;40m 15:50:12 \x1b[0m\x1b[97;40m eb72c5f5 \x1b[0m\x1b[97;40m Docker davidgasquez/... \x1b[0m\x1b[97;40m Completed \x1b[0m\x1b[97;40m          \x1b[0m\x1b[97;40m /ipfs/QmXcsqrT1SvYZH... \x1b[0m\n")),(0,r.kt)("p",null,'Where it says "Completed", that means the job is done, and we can get the results.'),(0,r.kt)("p",null,"To find out more information about your job, run the following command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"bacalhau describe ${JOB_ID}\n")),(0,r.kt)("p",null,"Downloading the outputs"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"rm -rf results && mkdir -p results\nbacalhau get $JOB_ID --output-dir results\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"Fetching results of job 'eb72c5f5-599b-464e-af93-3ecb9247e9af'...\nResults for job 'eb72c5f5-599b-464e-af93-3ecb9247e9af' have been written to...\nresults\n\n\n2022/11/11 15:52:13 failed to sufficiently increase receive buffer size (was: 208 kiB, wanted: 2048 kiB, got: 416 kiB). See https://github.com/lucas-clemente/quic-go/wiki/UDP-Receive-Buffer-Size for details.\n")),(0,r.kt)("p",null,"Viewing the outputs"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"cat results/combined_results/stdout\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"\u250c\u2500\u2500\u2500\u2510\n\u2502 1 \u2502\n\u251c\u2500\u2500\u2500\u2524\n\u2502 1 \u2502\n\u2514\u2500\u2500\u2500\u2518\n")),(0,r.kt)("p",null,"#wohooo! SQL on bacalhau"),(0,r.kt)("h2",{id:"running-arbituary-sql-commands-over-yellow-taxi-trips-dataset"},"Running Arbituary SQL commands over Yellow taxi trips dataset"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"bacalhau docker run \\\n -i bafybeiejgmdpwlfgo3dzfxfv3cn55qgnxmghyv7vcarqe3onmtzczohwaq \\\n  --workdir /inputs \\\n  --id-only \\\n  --wait \\\n  davidgasquez/duckdb:latest \\\n  -- duckdb -s \"select count(*) from '0_yellow_taxi_trips.parquet'\"\n\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"bacalhau list --id-filter ${JOB_ID} --wide\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"\x1b[92;100m CREATED           \x1b[0m\x1b[92;100m ID                                   \x1b[0m\x1b[92;100m JOB                                                                                            \x1b[0m\x1b[92;100m STATE     \x1b[0m\x1b[92;100m VERIFIED \x1b[0m\x1b[92;100m PUBLISHED                                            \x1b[0m\n\x1b[97;40m 22-11-12-07:15:50 \x1b[0m\x1b[97;40m cced3685-2d50-4297-9739-6c692af8c60b \x1b[0m\x1b[97;40m Docker davidgasquez/duckdb:latest duckdb -s select count(*) from '0_yellow_taxi_trips.parquet' \x1b[0m\x1b[97;40m Completed \x1b[0m\x1b[97;40m          \x1b[0m\x1b[97;40m /ipfs/Qmd3QYstyjEVkLrRRyEWVmhtEvmNMbjHcQ5a1o2zJy1JnJ \x1b[0m\n")),(0,r.kt)("p",null,'Where it says "Completed", that means the job is done, and we can get the results.'),(0,r.kt)("p",null,"To find out more information about your job, run the following command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"bacalhau describe ${JOB_ID}\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"rm -rf results && mkdir -p results\nbacalhau get $JOB_ID --output-dir results\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"Fetching results of job 'cced3685-2d50-4297-9739-6c692af8c60b'...\nResults for job 'cced3685-2d50-4297-9739-6c692af8c60b' have been written to...\nresults\n\n\n2022/11/12 07:19:32 failed to sufficiently increase receive buffer size (was: 208 kiB, wanted: 2048 kiB, got: 416 kiB). See https://github.com/lucas-clemente/quic-go/wiki/UDP-Receive-Buffer-Size for details.\n")),(0,r.kt)("p",null,"Viewing the outputs"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"cat results/combined_results/stdout\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"\u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n\u2502 count_star() \u2502\n\u251c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524\n\u2502 24648499     \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")))}d.isMDXComponent=!0}}]);