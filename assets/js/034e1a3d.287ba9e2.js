"use strict";(self.webpackChunkbacalhau_docs=self.webpackChunkbacalhau_docs||[]).push([[2538],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>m});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},u=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=p(a),h=r,m=d["".concat(s,".").concat(h)]||d[h]||c[h]||o;return a?n.createElement(m,l(l({ref:t},u),{},{components:a})):n.createElement(m,l({ref:t},u))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,l=new Array(o);l[0]=h;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[d]="string"==typeof e?e:r,l[1]=i;for(var p=2;p<o;p++)l[p]=a[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},3836:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>c,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var n=a(7462),r=(a(7294),a(3905));const o={sidebar_label:"Training-Pytorch-Model",sidebar_position:2},l="Training Pytorch Model with Bacalhau",i={unversionedId:"examples/model-training/Training-Pytorch-Model/index",id:"examples/model-training/Training-Pytorch-Model/index",title:"Training Pytorch Model with Bacalhau",description:"Open In Colab",source:"@site/docs/examples/model-training/Training-Pytorch-Model/index.md",sourceDirName:"examples/model-training/Training-Pytorch-Model",slug:"/examples/model-training/Training-Pytorch-Model/",permalink:"/examples/model-training/Training-Pytorch-Model/",draft:!1,editUrl:"https://github.com/bacalhau-project/docs.bacalhau.org/blob/main/docs/examples/model-training/Training-Pytorch-Model/index.md",tags:[],version:"current",lastUpdatedAt:1681193749,formattedLastUpdatedAt:"Apr 11, 2023",sidebarPosition:2,frontMatter:{sidebar_label:"Training-Pytorch-Model",sidebar_position:2},sidebar:"documentationSidebar",previous:{title:"Stable-Diffusion-Dreambooth",permalink:"/examples/model-training/Stable-Diffusion-Dreambooth/"},next:{title:"Training-Tensorflow-Model",permalink:"/examples/model-training/Training-Tensorflow-Model/"}},s={},p=[{value:"TD;LR",id:"tdlr",level:2},{value:"Prerequisite",id:"prerequisite",level:2},{value:"Training the Model Locally",id:"training-the-model-locally",level:2},{value:"Uploading Dataset to IPFS",id:"uploading-dataset-to-ipfs",level:2},{value:"Running a Bacalhau Job",id:"running-a-bacalhau-job",level:2},{value:"Structure  of the command",id:"structure--of-the-command",level:3},{value:"Checking the State of your Jobs",id:"checking-the-state-of-your-jobs",level:2},{value:"Viewing your Job Output",id:"viewing-your-job-output",level:2}],u={toc:p},d="wrapper";function c(e){let{components:t,...a}=e;return(0,r.kt)(d,(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"training-pytorch-model-with-bacalhau"},"Training Pytorch Model with Bacalhau"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://colab.research.google.com/github/bacalhau-project/examples/blob/main/model-training/Training-Tensorflow-Model/index.ipynb"},(0,r.kt)("img",{parentName:"a",src:"https://colab.research.google.com/assets/colab-badge.svg",alt:"Open In Colab"})),"\n",(0,r.kt)("a",{parentName:"p",href:"https://mybinder.org/v2/gh/bacalhau-project/examples/HEAD?labpath=model-training/Training-Tensorflow-Model/index.ipynb"},(0,r.kt)("img",{parentName:"a",src:"https://mybinder.org/badge.svg",alt:"Open In Binder"})),"\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/bacalhau-project/bacalhau"},(0,r.kt)("img",{parentName:"a",src:"https://img.shields.io/github/stars/bacalhau-project/bacalhau?style=social",alt:"stars - badge-generator"}))),(0,r.kt)("p",null,"In this example tutorial, we will show you how to train a Pytorch RNN MNIST neural network model with Bacalhau. PyTorch is a framework developed by Facebook AI Research for deep learning, featuring both beginner-friendly debugging tools and a high-level of customization for advanced users, with researchers and practitioners using it across companies like Facebook and Tesla. Applications include computer vision, natural language processing, cryptography, and more."),(0,r.kt)("h2",{id:"tdlr"},"TD;LR"),(0,r.kt)("p",null,"Running any type of Pytorch models with Bacalhau"),(0,r.kt)("h2",{id:"prerequisite"},"Prerequisite"),(0,r.kt)("p",null,"To get started, you need to install the Bacalhau client, see more information ",(0,r.kt)("a",{parentName:"p",href:"https://docs.bacalhau.org/getting-started/installation"},"here")),(0,r.kt)("h2",{id:"training-the-model-locally"},"Training the Model Locally"),(0,r.kt)("p",null,"To train our model locally, we will start by cloning the Pytorch examples ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/pytorch/examples"},"repo")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"%%bash\ngit clone https://github.com/pytorch/examples\n")),(0,r.kt)("p",null,"Next, we run the command below to begin training of the ",(0,r.kt)("em",{parentName:"p"},"mnist_rnn")," model. We added the ",(0,r.kt)("inlineCode",{parentName:"p"},"--save-model")," flag to save the model"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"%%bash\npython ./examples/mnist_rnn/main.py --save-model\n")),(0,r.kt)("p",null,"Next, we will download the MNIST dataset by creating a folder ",(0,r.kt)("inlineCode",{parentName:"p"},"data")," where we will save the downloaded dataset"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"%%bash\nmkdir ../data\n")),(0,r.kt)("p",null,"If you inspect the code ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/pytorch/examples/blob/main/mnist_rnn/main.py"},"here")," you'll see the folder referenced in the code. Here is the a small section of the code that references the folder"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"    train_loader = torch.utils.data.DataLoader(\n        datasets.MNIST('../data', train=True, download=True,\n                       transform=transforms.Compose([\n                           transforms.ToTensor(),\n                           transforms.Normalize((0.1307,), (0.3081,))\n                       ])),\n        batch_size=args.batch_size, shuffle=True, **kwargs)\n    test_loader = torch.utils.data.DataLoader(\n        datasets.MNIST('../data', train=False, transform=transforms.Compose([\n            transforms.ToTensor(),\n            transforms.Normalize((0.1307,), (0.3081,))\n        ])),\n        batch_size=args.test_batch_size, shuffle=True, **kwargs)\n")),(0,r.kt)("h2",{id:"uploading-dataset-to-ipfs"},"Uploading Dataset to IPFS"),(0,r.kt)("p",null,'Now that we have downloaded our dataset, the next step is to upload it to IPFS. The simplest way to upload the data to IPFS is to use a third party service to "pin" data to the IPFS network, to ensure that the data exists and is available. To do this you need an account with a pinning service like ',(0,r.kt)("a",{parentName:"p",href:"https://web3.storage/"},"web3.storage")," or ",(0,r.kt)("a",{parentName:"p",href:"https://pinata.cloud/"},"Pinata")," or ",(0,r.kt)("a",{parentName:"p",href:"https://nft.storage/"},"NFT.Storage"),". Once registered you can use their UI or API or SDKs to upload files."),(0,r.kt)("p",null,"Once you have uploaded your data, you'll finished copy the CID. Here is the dataset we have uploaded ",(0,r.kt)("a",{parentName:"p",href:"https://gateway.pinata.cloud/ipfs/QmdeQjz1HQQdT9wT2NHX86Le9X6X6ySGxp8dfRUKPtgziw/?filename=data"},"https://gateway.pinata.cloud/ipfs/QmdeQjz1HQQdT9wT2NHX86Le9X6X6ySGxp8dfRUKPtgziw/?filename=data")),(0,r.kt)("h2",{id:"running-a-bacalhau-job"},"Running a Bacalhau Job"),(0,r.kt)("p",null,"After the repo image has been pushed to docker hub, we can now use the container for running on Bacalhau. To submit a job, run the following Bacalhau command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"%%bash --out job_id\nbacalhau docker run \\\n--gpu 1 \\\n--timeout 3600 \\\n--wait-timeout-secs 3600 \\\n--wait \\\n--id-only \\\npytorch/pytorch \\\n-w /outputs \\\n -v QmdeQjz1HQQdT9wT2NHX86Le9X6X6ySGxp8dfRUKPtgziw:/data \\\n-u https://raw.githubusercontent.com/pytorch/examples/main/mnist_rnn/main.py \\\n-- python ../inputs/main.py --save-model\n")),(0,r.kt)("h3",{id:"structure--of-the-command"},"Structure  of the command"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"bacalhau docker run"),": call to bacalhau ")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"--gpu 1"),": Request 1 GPU to train the model")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"pytorch/pytorch"),": Using the official pytorch Docker image")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"-v QmdeQjz1HQQd....."),": Mounting the uploaded dataset to path")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"-u https://raw.githubusercontent.com/py.........."),": Mounting our training script we will use the URL to this ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/pytorch/examples/blob/main/mnist_rnn/main.py"},"Pytorch example")," ")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"-w /outputs:")," Our working directory is /outputs. This is the folder where we will to save the model as it will automatically gets uploaded to IPFS as outputs"))),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"python ../inputs/main.py --save-model"),": URL script gets mounted to the /inputs folder in the container. "),(0,r.kt)("p",null,"When a job is submitted, Bacalhau prints out the related ",(0,r.kt)("inlineCode",{parentName:"p"},"job_id"),". We store that in an environment variable so that we can reuse it later on."),(0,r.kt)("h2",{id:"checking-the-state-of-your-jobs"},"Checking the State of your Jobs"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Job status"),": You can check the status of the job using ",(0,r.kt)("inlineCode",{parentName:"li"},"bacalhau list"),". ")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"%%bash\nbacalhau list --id-filter ${JOB_ID}\n")),(0,r.kt)("p",null,"When it says ",(0,r.kt)("inlineCode",{parentName:"p"},"Completed"),", that means the job is done, and we can get the results."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Job information"),": You can find out more information about your job by using ",(0,r.kt)("inlineCode",{parentName:"li"},"bacalhau describe"),".")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"%%bash\nbacalhau describe ${JOB_ID}\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Job download"),": You can download your job results directly by using ",(0,r.kt)("inlineCode",{parentName:"li"},"bacalhau get"),". Alternatively, you can choose to create a directory to store your results. In the command below, we created a directory and downloaded our job output to be stored in that directory.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"%%bash\nrm -rf results && mkdir -p results\nbacalhau get $JOB_ID --output-dir results\n")),(0,r.kt)("p",null,"After the download has finished you should see the following contents in results directory"),(0,r.kt)("h2",{id:"viewing-your-job-output"},"Viewing your Job Output"),(0,r.kt)("p",null,"Each job creates 3 subfolders: the ",(0,r.kt)("strong",{parentName:"p"},"combined_results"),", ",(0,r.kt)("strong",{parentName:"p"},"per_shard files"),", and the ",(0,r.kt)("strong",{parentName:"p"},"raw")," directory. To view the file, run the following command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"%%bash\nls results/ # list the contents of the current directory \ncat results/combined_results/stdout # displays the contents of the file given to it as a parameter.\nls results/combined_results/outputs/ # list the successfully trained model\n")))}c.isMDXComponent=!0}}]);