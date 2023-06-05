"use strict";(self.webpackChunkbacalhau_docs=self.webpackChunkbacalhau_docs||[]).push([[6801],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>m});var o=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,o)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function r(e,t){if(null==e)return{};var a,o,n=function(e,t){if(null==e)return{};var a,o,n={},l=Object.keys(e);for(o=0;o<l.length;o++)a=l[o],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(o=0;o<l.length;o++)a=l[o],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var i=o.createContext({}),u=function(e){var t=o.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},c=function(e){var t=u(e.components);return o.createElement(i.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},h=o.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,i=e.parentName,c=r(e,["components","mdxType","originalType","parentName"]),d=u(a),h=n,m=d["".concat(i,".").concat(h)]||d[h]||p[h]||l;return a?o.createElement(m,s(s({ref:t},c),{},{components:a})):o.createElement(m,s({ref:t},c))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,s=new Array(l);s[0]=h;var r={};for(var i in t)hasOwnProperty.call(t,i)&&(r[i]=t[i]);r.originalType=e,r[d]="string"==typeof e?e:n,s[1]=r;for(var u=2;u<l;u++)s[u]=a[u];return o.createElement.apply(null,s)}return o.createElement.apply(null,a)}h.displayName="MDXCreateElement"},9831:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>p,frontMatter:()=>l,metadata:()=>r,toc:()=>u});var o=a(7462),n=(a(7294),a(3905));const l={sidebar_label:"DuckDB",sidebar_position:1},s=void 0,r={unversionedId:"examples/case-studies/duckdb-log-processing/index",id:"examples/case-studies/duckdb-log-processing/index",title:"index",description:"DuckDB is an embedded SQL database tool that is designed to analyze data without external dependencies or state, that can be embedded locally on any machine.",source:"@site/docs/examples/case-studies/duckdb-log-processing/index.md",sourceDirName:"examples/case-studies/duckdb-log-processing",slug:"/examples/case-studies/duckdb-log-processing/",permalink:"/examples/case-studies/duckdb-log-processing/",draft:!1,editUrl:"https://github.com/bacalhau-project/docs.bacalhau.org/blob/main/docs/examples/case-studies/duckdb-log-processing/index.md",tags:[],version:"current",lastUpdatedAt:1685999167,formattedLastUpdatedAt:"Jun 5, 2023",sidebarPosition:1,frontMatter:{sidebar_label:"DuckDB",sidebar_position:1}},i={},u=[{value:"Problem",id:"problem",level:2},{value:"Using Bacalhau to Execute DuckDB Processing",id:"using-bacalhau-to-execute-duckdb-processing",level:2},{value:"Tools Used",id:"tools-used",level:2},{value:"Try out Thing",id:"try-out-thing",level:3},{value:"Step 1: Set up a \u201cfake log creating\u201d job",id:"step-1-set-up-a-fake-log-creating-job",level:4},{value:"Step 2 Configure logrotate on the machine",id:"step-2-configure-logrotate-on-the-machine",level:4},{value:"Step 3: The Bacalhau Job",id:"step-3-the-bacalhau-job",level:4},{value:"<strong>Step 3a: Use DuckDB to process the logs:</strong>",id:"step-3a-use-duckdb-to-process-the-logs",level:4},{value:"<strong>Step 3b - Compress the file:</strong>",id:"step-3b---compress-the-file",level:4},{value:"<strong>Step 3c - Push the file to an S3 bucket:</strong>",id:"step-3c---push-the-file-to-an-s3-bucket",level:4},{value:"<strong>Step 3d - Compress the raw log file</strong>",id:"step-3d---compress-the-raw-log-file",level:4},{value:"<strong>Step 3e - Push the compressed raw log to Iceberg</strong>",id:"step-3e---push-the-compressed-raw-log-to-iceberg",level:4},{value:"<strong>Step 3f:</strong>",id:"step-3f",level:4}],c={toc:u},d="wrapper";function p(e){let{components:t,...a}=e;return(0,n.kt)(d,(0,o.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"DuckDB is an embedded SQL database tool that is designed to analyze data without external dependencies or state, that can be embedded locally on any machine."),(0,n.kt)("p",null,"Because DuckDB allows you to process and store data such as Parquet files and text logs, DuckDB can be an invaluable tool in analyzing system created data such as logs while still allowing you to use SQL as a first-class way to interact with it."),(0,n.kt)("p",null,"However, many organizations only want to present DuckDB on local interfaces for security and compliance  purposes, so having a central system that can interact with embedded DuckDBs would not be acceptable. Bacalhau + DuckDB provides a distributed way to execute many queries against local logs, without having to move the files at all."),(0,n.kt)("h2",{id:"problem"},"Problem"),(0,n.kt)("p",null,"With data being generated everywhere, it can be a challenge to centralize and process the information before getting insights. Moving data to a lake can be time consuming, costly, and insecure; often just moving the data risks enormous data protection fines."),(0,n.kt)("p",null,"Further, the sheer number of log files alone being generated from servers, IoT devices, embedded machines, and more present a huge surface area for managing generated data. As files are written to a local data store, organizations are faced with either building remote connectivity tooling to access the files in place, or pushing these files into a data lake costing both time and money."),(0,n.kt)("p",null,"Ideally, a users would be able to gain insights from the remote files WITHOUT having to centralize first. This is where Bacalhau and DuckDB can step in."),(0,n.kt)("h2",{id:"using-bacalhau-to-execute-duckdb-processing"},"Using Bacalhau to Execute DuckDB Processing"),(0,n.kt)("p",null,"In order to speed results and deliver more cost-effective processing of log files generated, we can use Bacalhau and DuckDB to run directly to the nodes."),(0,n.kt)("p",null,"The flow looks like the following:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Execute a command against the network to execute \u201clocal to machine\u201d queries against the set of nodes with log files on them"),(0,n.kt)("li",{parentName:"ol"},"Return the results of the queries that require immediate action (e.g. emergency alerts)"),(0,n.kt)("li",{parentName:"ol"},"Archive the existing logs into cold storage.")),(0,n.kt)("p",null,"This is laid out in the architecture below."),(0,n.kt)("h2",{id:"tools-used"},"Tools Used"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"DuckDB"),(0,n.kt)("li",{parentName:"ul"},"Docker"),(0,n.kt)("li",{parentName:"ul"},"Python"),(0,n.kt)("li",{parentName:"ul"},"Terraform"),(0,n.kt)("li",{parentName:"ul"},"gcloud CLI")),(0,n.kt)("h3",{id:"try-out-thing"},"Try out Thing"),(0,n.kt)("p",null,"Follow the steps below to set up log processing and storage for 3 VMs in different regions or zones these VMs produce logs:"),(0,n.kt)("h4",{id:"step-1-set-up-a-fake-log-creating-job"},"Step 1: Set up a \u201cfake log creating\u201d job"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Output something that looks like real logs -"),(0,n.kt)("li",{parentName:"ul"},"It should be compatible with this - ",(0,n.kt)("a",{parentName:"li",href:"https://tersesystems.com/blog/2023/03/04/ad-hoc-structured-log-analysis-with-sqlite-and-duckdb/"},"https://tersesystems.com/blog/2023/03/04/ad-hoc-structured-log-analysis-with-sqlite-and-duckdb/")),(0,n.kt)("li",{parentName:"ul"},"Each fake log entry should look something like this:")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-JSON"},'    {\n    "id": "<UNIQUE ID>",\n    "@timestamp": "<TIME STAMP IN ISO9660>",\n    "@version": "1.1",\n    "message": "ServiceName [Category] Message",\n    }\n')),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"For service name - just use one of \u201cAuth\u201d, \u201cAppStack\u201d, \u201cDatabase\u201d - each one should produce one per 5 seconds"),(0,n.kt)("li",{parentName:"ul"},"For category, select one from ","[INFO]",", ","[WARN]",", ","[CRITICAL]",", ","[SECURITY]"),(0,n.kt)("li",{parentName:"ul"},"For message - just output a random combination of words from a ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/dwyl/english-words/files/3086945/clean_words_alpha.txt"},"word list")," - so each message should be like \u201cdog cheese cow car sky\u201d. Have it be 5 words each."),(0,n.kt)("li",{parentName:"ul"},"This needs to be running reliably - so have the script run in system.d")),(0,n.kt)("h4",{id:"step-2-configure-logrotate-on-the-machine"},"Step 2 Configure logrotate on the machine"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Create a new logrotate configuration file at ",(0,n.kt)("strong",{parentName:"li"},(0,n.kt)("inlineCode",{parentName:"strong"},"/etc/logrotate.d/my_logs"))," with the content:")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"/path/to/logs/*.log {\nhourly\nrotate 1\nmissingok\nnotifempty\ncompress\n}\n")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Each time the log rotates - put it into a special directory ",(0,n.kt)("strong",{parentName:"li"},(0,n.kt)("inlineCode",{parentName:"strong"},"/var/logs/raw_logs"))," or something. (this is a setting in log rotate - where you output the rotate to)")),(0,n.kt)("h4",{id:"step-3-the-bacalhau-job"},"Step 3: The Bacalhau Job"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"On a second machine, once per hour, trigger a job to run across all nodes identified across regions"),(0,n.kt)("li",{parentName:"ul"},"Pass the log path to the job spec. (Use the local mount feature (can\u2019t use it currently))"),(0,n.kt)("li",{parentName:"ul"},"This job should do the following:",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"If the file is not present in raw_logs, write information to stdout: \u201c{ warning: raw_logs_not_found, date: <-ISO9660 Timestamp->}\u201d - and quit"),(0,n.kt)("li",{parentName:"ul"},"If file is present:")))),(0,n.kt)("h4",{id:"step-3a-use-duckdb-to-process-the-logs"},(0,n.kt)("strong",{parentName:"h4"},"Step 3a: Use DuckDB to process the logs:")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Use a container (like from our existing example) that has DuckDB inside it - ",(0,n.kt)("a",{parentName:"li",href:"https://docs.bacalhau.org/examples/data-engineering/DuckDB/"},"https://docs.bacalhau.org/examples/data-engineering/DuckDB/")),(0,n.kt)("li",{parentName:"ul"},"We should NOT use David Gasquez\u2019s current one - we should use the generic one."),(0,n.kt)("li",{parentName:"ul"},"Inside the container, use a command that loads the file - e.g. ",(0,n.kt)("inlineCode",{parentName:"li"},"\u201cduckdb -s \"select count(*) from '0_yellow_taxi_trips.parquet'\u201d")),(0,n.kt)("li",{parentName:"ul"},"Except, we want to select only a subset of the files e.g. ",(0,n.kt)("inlineCode",{parentName:"li"},"\u201cduckdb -s \"select count(*) from '0_yellow_taxi_trips.parquet' contains('abc','a')\u201d")),(0,n.kt)("li",{parentName:"ul"},"Output the match to a file on the disk - ",(0,n.kt)("inlineCode",{parentName:"li"},"/tmp/Region-Zone-NodeName-Security-yyyymmddhhmm.json"))),(0,n.kt)("h4",{id:"step-3b---compress-the-file"},(0,n.kt)("strong",{parentName:"h4"},"Step 3b - Compress the file:")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"/tmp/Region-Zone-NodeName-SECURITY-yyyymmddhhmm.json.gz"))),(0,n.kt)("h4",{id:"step-3c---push-the-file-to-an-s3-bucket"},(0,n.kt)("strong",{parentName:"h4"},"Step 3c - Push the file to an S3 bucket:")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Push the processed logs to s3 (s3 push functionality isn\u2019t implemented yet - just use a standard aws CLI command - figure out with Walid how to do credentials)")),(0,n.kt)("h4",{id:"step-3d---compress-the-raw-log-file"},(0,n.kt)("strong",{parentName:"h4"},"Step 3d - Compress the raw log file")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"/tmp/Region-Zone-NodeName-RAW-yyyymmddhhmm.json.gz"))),(0,n.kt)("h4",{id:"step-3e---push-the-compressed-raw-log-to-iceberg"},(0,n.kt)("strong",{parentName:"h4"},"Step 3e - Push the compressed raw log to Iceberg")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Just use standard Iceberg API - talk with Walid about")),(0,n.kt)("h4",{id:"step-3f"},(0,n.kt)("strong",{parentName:"h4"},"Step 3f:")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Delete the raw log file")))}p.isMDXComponent=!0}}]);