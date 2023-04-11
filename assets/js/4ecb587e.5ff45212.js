"use strict";(self.webpackChunkbacalhau_docs=self.webpackChunkbacalhau_docs||[]).push([[1541],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=u(n),h=r,m=p["".concat(s,".").concat(h)]||p[h]||d[h]||o;return n?a.createElement(m,i(i({ref:t},c),{},{components:n})):a.createElement(m,i({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:r,i[1]=l;for(var u=2;u<o;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},3374:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var a=n(7462),r=(n(7294),n(3905));const o={sidebar_label:"Quick Start",sidebar_position:100,toc_max_heading_level:4},i="Join as Compute Provider",l={unversionedId:"running-node/quick-start",id:"running-node/quick-start",title:"Join as Compute Provider",description:"Bacalhau is a peer-to-peer network of compute providers that will run jobs submitted by users. A Compute Provider (CP) is anyone who is running a Bacalhau compute node participating in the Bacalhau compute network, regardless of whether they are hosting any Filecoin data.",source:"@site/docs/running-node/quick-start.md",sourceDirName:"running-node",slug:"/running-node/quick-start",permalink:"/running-node/quick-start",draft:!1,editUrl:"https://github.com/bacalhau-project/docs.bacalhau.org/blob/main/docs/running-node/quick-start.md",tags:[],version:"current",lastUpdatedAt:1681193749,formattedLastUpdatedAt:"Apr 11, 2023",sidebarPosition:100,frontMatter:{sidebar_label:"Quick Start",sidebar_position:100,toc_max_heading_level:4},sidebar:"documentationSidebar",previous:{title:"Private Cluster",permalink:"/next-steps/private-cluster"},next:{title:"Quick Start Using Docker",permalink:"/running-node/quick-start-docker"}},s={},u=[{value:"Quick start (Ubuntu 22.04)",id:"quick-start-ubuntu-2204",level:2},{value:"Prerequisites",id:"prerequisites",level:3},{value:"Install Docker",id:"install-docker",level:4},{value:"Ensure your Storage Server is Running",id:"ensure-your-storage-server-is-running",level:4},{value:"Configure firewall",id:"configure-firewall",level:4},{value:"Install the Bacalhau Binary",id:"install-the-bacalhau-binary",level:3},{value:"Run bacalhau",id:"run-bacalhau",level:3},{value:"Check your node works",id:"check-your-node-works",level:3},{value:"What&#39;s next?",id:"whats-next",level:3}],c={toc:u},p="wrapper";function d(e){let{components:t,...n}=e;return(0,r.kt)(p,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"join-as-compute-provider"},"Join as Compute Provider"),(0,r.kt)("p",null,"Bacalhau is a peer-to-peer network of compute providers that will run jobs submitted by users. A Compute Provider (CP) is anyone who is running a Bacalhau compute node participating in the Bacalhau compute network, regardless of whether they are hosting any Filecoin data."),(0,r.kt)("p",null,"This section will show you how to configure and run a bacalhau node and start accepting and running jobs."),(0,r.kt)("p",null,"To bootstrap your node and join the network as a CP you can leap right into the ",(0,r.kt)("a",{parentName:"p",href:"#quick-start-ubuntu-2204"},"Ubuntu 22.04 quick start")," below, or find for more setup details in these guides:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://docs.bacalhau.org/running-node/networking"},"Networking")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://docs.bacalhau.org/running-node/storage-providers"},"Storage Providers")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://docs.bacalhau.org/running-node/job-selection"},"Job Selection Policy")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://docs.bacalhau.org/running-node/resource-limits"},"Resource Limits")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://docs.bacalhau.org/running-node/gpu"},"GPU Support")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://docs.bacalhau.org/running-node/windows-support"},"Windows Support")," (with limitations)")),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"If you run on a different system than Ubuntu, drop us a message on ",(0,r.kt)("a",{parentName:"p",href:"https://filecoinproject.slack.com/archives/C02RLM3JHUY"},"Slack"),"!\nWe'll add instructions for your favorite OS.")),(0,r.kt)("h2",{id:"quick-start-ubuntu-2204"},"Quick start (Ubuntu 22.04)"),(0,r.kt)("p",null,"Estimated time for completion: 10 min."),(0,r.kt)("p",null,"Tested on: Ubuntu 22.04 LTS (x86/64) running on a GCP e2-standard-4 (4 vCPU, 16 GB memory) instance with 40 GB disk size."),(0,r.kt)("h3",{id:"prerequisites"},"Prerequisites"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Docker Engine - to take on Docker workloads"),(0,r.kt)("li",{parentName:"ul"},"Connection to storage provider - for storing job's results"),(0,r.kt)("li",{parentName:"ul"},"Firewall - to ensure your node can communicate with the rest of the network"),(0,r.kt)("li",{parentName:"ul"},"Physical hardware, Virtual Machine or cloud based host. A Bacalhau compute node is not intended to be ran from within a Docker container.")),(0,r.kt)("h4",{id:"install-docker"},"Install Docker"),(0,r.kt)("p",null,"To run docker based workloads, you should have docker installed and running."),(0,r.kt)("p",null,"If you already have it installed and want to configure the connection to Docker with the following environment variables:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"DOCKER_HOST")," to set the url to the docker server."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"DOCKER_API_VERSION")," to set the version of the API to reach, leave empty for latest."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"DOCKER_CERT_PATH")," to load the TLS certificates from."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"DOCKER_TLS_VERIFY")," to enable or disable TLS verification, off by default.")),(0,r.kt)("p",null,"If you do not have Docker on your system, you can follow the official ",(0,r.kt)("a",{parentName:"p",href:"https://docs.docker.com/engine/install/"},"docker installation instructions")," or just use the snippet below:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'# install dependencies\nsudo apt-get update\nsudo apt-get install \\\n    ca-certificates \\\n    curl \\\n    gnupg \\\n    lsb-release\n\n# add package repo and key\nsudo mkdir -p /etc/apt/keyrings\ncurl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /etc/apt/keyrings/docker.gpg\necho "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.gpg] https://download.docker.com/linux/ubuntu \\\n  $(lsb_release -cs) stable" | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null\n\n# install docker\nsudo apt-get update\nsudo apt-get install docker-ce docker-ce-cli containerd.io docker-compose-plugin\n')),(0,r.kt)("p",null,"Now make ",(0,r.kt)("a",{parentName:"p",href:"https://docs.docker.com/engine/install/linux-postinstall/#:~:text=The%20Docker%20daemon%20always%20runs,members%20of%20the%20docker%20group"},"Docker manageable by a non-root user"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sudo groupadd docker\nsudo usermod -aG docker $USER\n")),(0,r.kt)("h4",{id:"ensure-your-storage-server-is-running"},"Ensure your Storage Server is Running"),(0,r.kt)("p",null,"We will need to connect our bacalhau node to an storage server for this we will be using IPFS server so we can run jobs that consume CIDs as inputs."),(0,r.kt)("p",null,"You can either install and run it locally or you can connect to a remote IPFS server."),(0,r.kt)("p",null,"In both cases - we should have a ",(0,r.kt)("a",{parentName:"p",href:"https://richardschneider.github.io/net-ipfs-core/articles/multiaddress.html"},"multiaddress")," for our IPFS server that should look something like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"export IPFS_CONNECT=/ip4/10.1.10.10/tcp/80/p2p/QmVcSqVEsvm5RR9mBLjwpb2XjFVn5bPdPL69mL8PH45pPC\n")),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"The multiaddress above is just an example - you need to get the multiaddress of the server you want to connect to.")),(0,r.kt)("p",null,"To install a single IPFS node locally on Ubuntu you can follow the ",(0,r.kt)("a",{parentName:"p",href:"https://docs.ipfs.tech/install/ipfs-desktop/#ubuntu"},"official instructions"),", or follow the steps below. We advise to run the same IPFS version as the Bacalhau main network."),(0,r.kt)("p",null,"Using the command below:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"export IPFS_VERSION=$(wget -q -O - https://raw.githubusercontent.com/filecoin-project/bacalhau/main/ops/terraform/production.tfvars | grep --color=never ipfs_version | awk -F'\"' '{print $2}')\n")),(0,r.kt)("p",null,"Install:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'wget "https://dist.ipfs.tech/go-ipfs/${IPFS_VERSION}/go-ipfs_${IPFS_VERSION}_linux-amd64.tar.gz"\ntar -xvzf "go-ipfs_${IPFS_VERSION}_linux-amd64.tar.gz"\ncd go-ipfs\nsudo bash install.sh\nipfs --version\n')),(0,r.kt)("p",null,"Configure:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sudo mkdir -p /data/ipfs\nexport IPFS_PATH=/data/ipfs\nsudo chown $(id -un):$(id -gn) ${IPFS_PATH} # change ownership of ipfs directory\nipfs init\n")),(0,r.kt)("p",null,"Now launch the IPFS daemon ",(0,r.kt)("strong",{parentName:"p"},"in a separate terminal")," (make sure to export the ",(0,r.kt)("inlineCode",{parentName:"p"},"IPFS_PATH")," environment variable there as well):"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"ipfs daemon\n")),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"If you want to run the IPFS daemon as a ",(0,r.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Systemd"},"systemd")," service, here's an example ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/bacalhau-project/bacalhau/blob/main/ops/terraform/remote_files/configs/ipfs-daemon.service"},"systemd service file"),".")),(0,r.kt)("p",null,"Don't forget we need to fetch an ",(0,r.kt)("a",{parentName:"p",href:"https://richardschneider.github.io/net-ipfs-core/articles/multiaddress.html"},"IPFS multiaddress")," pointing to our local node."),(0,r.kt)("p",null,"Use the following command to print out a number of addresses."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"ipfs id\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n        "ID": "12D3KooWNhRU6H1eeqvT1jQAXFAdFDvT5H4AEGmHV7N1cYbzYh1F",\n        "PublicKey": "CAESIL9gmDyR6IgM7ym1JmJ8JKL7NvEgIEGaWwssanl1ieuW",\n        "Addresses": [\n                "/ip4/10.128.0.11/tcp/4001/p2p/12D3KooWNhRU6H1eeqvT1jQAXFAdFDvT5H4AEGmHV7N1cYbzYh1F",\n                "/ip4/10.128.0.11/udp/4001/quic/p2p/12D3KooWNhRU6H1eeqvT1jQAXFAdFDvT5H4AEGmHV7N1cYbzYh1F",\n                "/ip4/127.0.0.1/tcp/4001/p2p/12D3KooWNhRU6H1eeqvT1jQAXFAdFDvT5H4AEGmHV7N1cYbzYh1F",\n                "/ip4/127.0.0.1/udp/4001/quic/p2p/12D3KooWNhRU6H1eeqvT1jQAXFAdFDvT5H4AEGmHV7N1cYbzYh1F",\n                ...\n        ],\n        "AgentVersion": "go-ipfs/0.12.2/",\n        "ProtocolVersion": "ipfs/0.1.0",\n        "Protocols": [\n                "/ipfs/bitswap",\n                ...\n                "/p2p/id/delta/1.0.0",\n                "/x/"\n        ]\n}\n')),(0,r.kt)("p",null,"I pick the record that combines ",(0,r.kt)("inlineCode",{parentName:"p"},"127.0.0.1")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"tcp")," but I replace port ",(0,r.kt)("inlineCode",{parentName:"p"},"4001")," with ",(0,r.kt)("inlineCode",{parentName:"p"},"5001"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"export IPFS_CONNECT=/ip4/127.0.0.1/tcp/5001/p2p/12D3KooWNhRU6H1eeqvT1jQAXFAdFDvT5H4AEGmHV7N1cYbzYh1F\n")),(0,r.kt)("h4",{id:"configure-firewall"},"Configure firewall"),(0,r.kt)("p",null,"To ensure that our node can communicate with other nodes on the network - we need to make sure the ",(0,r.kt)("strong",{parentName:"p"},"1235")," port is open."),(0,r.kt)("p",null,"(Optional) To ensure the cli can communicate with our node directly (i.e. ",(0,r.kt)("inlineCode",{parentName:"p"},"bacalhau --api-host <MY_NODE_PUBLIC_IP> version"),") - we need to make sure the ",(0,r.kt)("strong",{parentName:"p"},"1234")," port is open."),(0,r.kt)("p",null,"Firewall configuration is very specific to your network and we can't provide generic instructions for this step but if you need any help feel free to reach out on ",(0,r.kt)("a",{parentName:"p",href:"https://filecoinproject.slack.com/archives/C02RLM3JHUY"},"Slack!")),(0,r.kt)("h3",{id:"install-the-bacalhau-binary"},"Install the Bacalhau Binary"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/getting-started/installation#install-the-bacalhau-client"},"Install the bacalhau binary")," to run ",(0,r.kt)("inlineCode",{parentName:"p"},"bacalhau serve"),"."),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"If you want to run Bacalhau  as a ",(0,r.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Systemd"},"systemd")," service, here's an example ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/bacalhau-project/bacalhau/blob/main/ops/terraform/remote_files/configs/bacalhau-daemon.service"},"systemd service file"),".")),(0,r.kt)("h3",{id:"run-bacalhau"},"Run bacalhau"),(0,r.kt)("p",null,"Now we can run our bacalhau node:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"LOG_LEVEL=debug bacalhau serve \\\n  --ipfs-connect $IPFS_CONNECT\n")),(0,r.kt)("p",null,"Alternatively, you can run the following Docker command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"docker run -it --rm \\\n  -e LOG_LEVEL=debug \\\n  ghcr.io/bacalhau-project/bacalhau:latest serve --ipfs-connect $IPFS_CONNECT\n")),(0,r.kt)("p",null,"These commands join this node to the public Bacalhau network, congrats! \ud83c\udf89"),(0,r.kt)("h3",{id:"check-your-node-works"},"Check your node works"),(0,r.kt)("p",null,"Even though the cli (by default) submits jobs, each node listens for events on the global network and possibly bids for taking a job: your logs should therefore show activity of your node bidding for incoming jobs."),(0,r.kt)("p",null,"To quick check your node runs properly, let's submit the following dummy job:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"bacalhau docker run ubuntu echo Test\n")),(0,r.kt)("p",null,"If you see logs of your computenode bidding for the job above it means you've successfully joined Bacalhau as a Compute Provider!"),(0,r.kt)("h3",{id:"whats-next"},"What's next?"),(0,r.kt)("p",null,"At this point you probably have a number of questions for us. What incentive should you expect for running a public Bacalhau node?\nPlease contact us on ",(0,r.kt)("a",{parentName:"p",href:"https://filecoinproject.slack.com/archives/C02RLM3JHUY"},"Slack")," to further discuss this topic and for sharing your valuable feedback."))}d.isMDXComponent=!0}}]);