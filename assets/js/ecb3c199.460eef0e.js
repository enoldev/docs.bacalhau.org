"use strict";(self.webpackChunkbacalhau_docs=self.webpackChunkbacalhau_docs||[]).push([[9716],{3905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>h});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var u=n.createContext({}),p=function(e){var t=n.useContext(u),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},s=function(e){var t=p(e.components);return n.createElement(u.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,u=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),c=p(a),d=r,h=c["".concat(u,".").concat(d)]||c[d]||m[d]||o;return a?n.createElement(h,l(l({ref:t},s),{},{components:a})):n.createElement(h,l({ref:t},s))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,l=new Array(o);l[0]=d;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i[c]="string"==typeof e?e:r,l[1]=i;for(var p=2;p<o;p++)l[p]=a[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},4062:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>m,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var n=a(7462),r=(a(7294),a(3905));const o={sidebar_label:"csv-to-avro-or-parquet",sidebar_position:2},l="Convert CSV To Parquet Or Avro",i={unversionedId:"examples/data-engineering/csv-to-avro-or-parquet/index",id:"examples/data-engineering/csv-to-avro-or-parquet/index",title:"Convert CSV To Parquet Or Avro",description:"stars - badge-generator",source:"@site/docs/examples/data-engineering/csv-to-avro-or-parquet/index.md",sourceDirName:"examples/data-engineering/csv-to-avro-or-parquet",slug:"/examples/data-engineering/csv-to-avro-or-parquet/",permalink:"/examples/data-engineering/csv-to-avro-or-parquet/",draft:!1,editUrl:"https://github.com/bacalhau-project/docs.bacalhau.org/blob/main/docs/examples/data-engineering/csv-to-avro-or-parquet/index.md",tags:[],version:"current",lastUpdatedAt:1687445283,formattedLastUpdatedAt:"Jun 22, 2023",sidebarPosition:2,frontMatter:{sidebar_label:"csv-to-avro-or-parquet",sidebar_position:2},sidebar:"documentationSidebar",previous:{title:"Ethereum Blockchain Analysis",permalink:"/examples/data-engineering/blockchain-etl/"},next:{title:"DuckDB",permalink:"/examples/data-engineering/DuckDB/"}},u={},p=[{value:"Introduction",id:"introduction",level:2},{value:"TD;LR",id:"tdlr",level:2},{value:"Prerequisites",id:"prerequisites",level:2},{value:"Running CSV to Arvo or Parquet Locally\u200b",id:"running-csv-to-arvo-or-parquet-locally",level:2},{value:"Install the following dependencies",id:"install-the-following-dependencies",level:2},{value:"Containerize Script with Docker",id:"containerize-script-with-docker",level:2},{value:"Build the container",id:"build-the-container",level:3},{value:"Push the container",id:"push-the-container",level:3},{value:"Running a Bacalhau Job",id:"running-a-bacalhau-job",level:2},{value:"Mounting the CSV File from IPFS",id:"mounting-the-csv-file-from-ipfs",level:3},{value:"Structure of the command",id:"structure-of-the-command",level:3},{value:"Mounting the CSV File from a URL",id:"mounting-the-csv-file-from-a-url",level:3},{value:"Structure of the command",id:"structure-of-the-command-1",level:3},{value:"Checking the State of your Jobs",id:"checking-the-state-of-your-jobs",level:2},{value:"Viewing your Job Output",id:"viewing-your-job-output",level:2},{value:"Need Support?",id:"need-support",level:2}],s={toc:p},c="wrapper";function m(e){let{components:t,...a}=e;return(0,r.kt)(c,(0,n.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"convert-csv-to-parquet-or-avro"},"Convert CSV To Parquet Or Avro"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/bacalhau-project/bacalhau"},(0,r.kt)("img",{parentName:"a",src:"https://img.shields.io/github/stars/bacalhau-project/bacalhau?style=social",alt:"stars - badge-generator"}))),(0,r.kt)("h2",{id:"introduction"},"Introduction"),(0,r.kt)("p",null,"Converting from CSV to parquet or avro reduces the size of the file and allows for faster read and write speeds. With Bacalhau, you can convert your CSV files stored on ipfs or on the web without the need to download files and install dependencies locally."),(0,r.kt)("p",null,"In this example tutorial we will convert a CSV file from a URL to parquet format and save the converted parquet file to IPFS"),(0,r.kt)("h2",{id:"tdlr"},"TD;LR"),(0,r.kt)("p",null,"Converting CSV stored in public storage with Bacalhau"),(0,r.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,r.kt)("p",null,"To get started, you need to install the Bacalhau client, see more information ",(0,r.kt)("a",{parentName:"p",href:"https://docs.bacalhau.org/getting-started/installation"},"here"),"\n!command -v bacalhau >/dev/null 2>&1 || (export BACALHAU_INSTALL_DIR=.; curl -sL ",(0,r.kt)("a",{parentName:"p",href:"https://get.bacalhau.org/install.sh"},"https://get.bacalhau.org/install.sh")," | bash)\npath=!echo $PATH\n%env PATH=./:{path","[0]","}"),(0,r.kt)("h2",{id:"running-csv-to-arvo-or-parquet-locally"},"Running CSV to Arvo or Parquet Locally\u200b"),(0,r.kt)("p",null,"Installing dependencies"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"%cd csv_to_avro_or_parquet\n")),(0,r.kt)("h2",{id:"install-the-following-dependencies"},"Install the following dependencies"),(0,r.kt)("p",null,"Run the following commands:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"\n%%bash\npip install fastavro\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"\n%%bash\npip install numpy\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"\n%%bash\npip install pandas\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"%%bash\npip install pyarrow\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"%%bash\npython3 src/converter.py ./movies.csv  ./movies.parquet parquet\n\n# python converter.py path_to_csv path_to_result_file extension\n")),(0,r.kt)("p",null,"Viewing the parquet file"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"import pandas as pd\npd.read_parquet('./movies.parquet').head()\n")),(0,r.kt)("h2",{id:"containerize-script-with-docker"},"Containerize Script with Docker"),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"You can skip this section entirely and directly go to running on Bacalhau")),(0,r.kt)("p",null,"To build your own docker container, create a ",(0,r.kt)("inlineCode",{parentName:"p"},"Dockerfile"),", which contains instructions to build your image."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"FROM python:3.8\n\nRUN apt update && apt install git\n\nRUN git clone https://github.com/bacalhau-project/Sparkov_Data_Generation\n\nWORKDIR /Sparkov_Data_Generation/\n\nRUN pip3 install -r requirements.txt\n")),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"See more information on how to containerize your script/app",(0,r.kt)("a",{parentName:"p",href:"https://docs.docker.com/get-started/02_our_app/"},"here"))),(0,r.kt)("h3",{id:"build-the-container"},"Build the container"),(0,r.kt)("p",null,"We will run ",(0,r.kt)("inlineCode",{parentName:"p"},"docker build")," command to build the container;"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"docker build -t <hub-user>/<repo-name>:<tag> .\n")),(0,r.kt)("p",null,"Before running the command replace;"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"hub-user")," with your docker hub username, If you don\u2019t have a docker hub account ",(0,r.kt)("a",{parentName:"p",href:"https://docs.docker.com/docker-id/"},"follow these instructions to create docker account"),", and use the username of the account you created")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"repo-name")," with the name of the container, you can name it anything you want")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"tag")," this is not required but you can use the latest tag"))),(0,r.kt)("p",null,"In our case:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"docker build -t jsacex/csv-to-arrow-or-parquet\n")),(0,r.kt)("h3",{id:"push-the-container"},"Push the container"),(0,r.kt)("p",null,"Next, upload the image to the registry. This can be done by using the Docker hub username, repo name or tag."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"docker push <hub-user>/<repo-name>:<tag>\n")),(0,r.kt)("p",null,"In our case:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"docker push jsacex/csv-to-arrow-or-parquet\n")),(0,r.kt)("h2",{id:"running-a-bacalhau-job"},"Running a Bacalhau Job"),(0,r.kt)("p",null,"To submit a job, we are going to either mount the script from an IPFS or from an URL."),(0,r.kt)("h3",{id:"mounting-the-csv-file-from-ipfs"},"Mounting the CSV File from IPFS"),(0,r.kt)("p",null,"With the command below, we are gmounting the CSV file for transactions from IPFS"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"!command -v bacalhau >/dev/null 2>&1 || (export BACALHAU_INSTALL_DIR=.; curl -sL https://get.bacalhau.org/install.sh | bash)\npath=!echo $PATH\n%env PATH=./:{path[0]}\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"%%bash --out job_id\nbacalhau docker run \\\n-i ipfs://QmTAQMGiSv9xocaB4PUCT5nSBHrf9HZrYj21BAZ5nMTY2W  \\\n--wait \\\n--id-only \\\njsacex/csv-to-arrow-or-parquet \\\n-- python3 src/converter.py ../inputs/transactions.csv  ../outputs/transactions.parquet parquet\n")),(0,r.kt)("h3",{id:"structure-of-the-command"},"Structure of the command"),(0,r.kt)("p",null,"Let's look closely at the command above:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"bacalhau docker run"),": call to bacalhau")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"-i ipfs://QmTAQMGiSv9xocaB4PUCT5nSBHrf9HZrYj21BAZ5nMTY2W"),": CIDs to use on the job. Mounts them at '/inputs' in the execution.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"jsacex/csv-to-arrow-or-parque"),": the name and the tag of the docker image we are using")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"../inputs/movies.csv "),": path to input dataset")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"../outputs/movies.parquet parquet"),": path to the output")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"python3 src/converter.py"),": execute the script"))),(0,r.kt)("h3",{id:"mounting-the-csv-file-from-a-url"},"Mounting the CSV File from a URL"),(0,r.kt)("p",null,"To mount the CSV file from a URL"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"%%bash --out job_id\nbacalhau docker run \\\n-i https://raw.githubusercontent.com/bacalhau-project/csv_to_avro_or_parquet/master/movies.csv \\\njsacex/csv-to-arrow-or-parquet \\\n-- python3 src/converter.py ../inputs/movies.csv  ../outputs/movies.parquet parquet\n")),(0,r.kt)("h3",{id:"structure-of-the-command-1"},"Structure of the command"),(0,r.kt)("p",null,"Let's look closely at the command above:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"bacalhau docker run"),": call to bacalhau")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"-i https://raw.githubusercontent.com/bacalhau-project/csv_to_avro_or_parquet/master/movies.csv"),": URL: path of the input data volumes downloaded from a URL source")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"jsacex/csv-to-arrow-or-parque"),": the name and the tag of the docker image we are using")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"../inputs/movies.csv "),": path to the input dataset")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"../outputs/movies.parquet parquet"),": path to the output")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"python3 src/converter.py"),": execute the script"))),(0,r.kt)("p",null,"When a job is submitted, Bacalhau prints out the related ",(0,r.kt)("inlineCode",{parentName:"p"},"job_id"),". We store that in an environment variable so that we can reuse it later on."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"%env JOB_ID={job_id}\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"env: JOB_ID=bacalhau describe 71ecde0e-dac3-4c8d-bf2e-7a92cc54425e\n")),(0,r.kt)("h2",{id:"checking-the-state-of-your-jobs"},"Checking the State of your Jobs"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Job status"),": You can check the status of the job using ",(0,r.kt)("inlineCode",{parentName:"li"},"bacalhau list"),".")),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Replace the {JOB_ID} with your generated ID.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"%%bash\nbacalhau list --id-filter={JOB_ID} \n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"\x1b[92;100m CREATED  \x1b[0m\x1b[92;100m ID       \x1b[0m\x1b[92;100m JOB                     \x1b[0m\x1b[92;100m STATE     \x1b[0m\x1b[92;100m VERIFIED \x1b[0m\x1b[92;100m PUBLISHED               \x1b[0m\n\x1b[97;40m 16:53:30 \x1b[0m\x1b[97;40m 71ecde0e \x1b[0m\x1b[97;40m Docker jsacex/csv-to... \x1b[0m\x1b[97;40m Completed \x1b[0m\x1b[97;40m          \x1b[0m\x1b[97;40m ipfs://QmP5PbbJZ1fdq... \x1b[0m\n")),(0,r.kt)("p",null,"When it says ",(0,r.kt)("inlineCode",{parentName:"p"},"Published")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"Completed"),", that means the job is done, and we can get the results."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Job information"),": You can find out more information about your job by using ",(0,r.kt)("inlineCode",{parentName:"li"},"bacalhau describe"),".")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"%%bash\nbacalhau describe {JOB_ID}\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Job download"),": You can download your job results directly by using ",(0,r.kt)("inlineCode",{parentName:"li"},"bacalhau get"),". Alternatively, you can choose to create a directory to store your results. In the command below, we created a directory and downloaded our job output to be stored in that directory.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"%%bash\nrm -rf results && mkdir -p results\nbacalhau get ${JOB_ID} --output-dir results\n")),(0,r.kt)("h2",{id:"viewing-your-job-output"},"Viewing your Job Output"),(0,r.kt)("p",null,"To view the file, run the following command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"%%bash\nls results/outputs\n")),(0,r.kt)("p",null,"Alternatively, you can do this."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"import pandas as pd\nimport os\npd.read_parquet('results/outputs/transactions.parquet')\n")),(0,r.kt)("h2",{id:"need-support"},"Need Support?"),(0,r.kt)("p",null,"For questions, and feedback, please reach out in our ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/filecoin-project/bacalhau/discussions"},"forum")))}m.isMDXComponent=!0}}]);