"use strict";(self.webpackChunkbacalhau_docs=self.webpackChunkbacalhau_docs||[]).push([[7469],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=p(n),c=i,h=m["".concat(s,".").concat(c)]||m[c]||d[c]||r;return n?a.createElement(h,o(o({ref:t},u),{},{components:n})):a.createElement(h,o({ref:t},u))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[m]="string"==typeof e?e:i,o[1]=l;for(var p=2;p<r;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},6574:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>r,metadata:()=>l,toc:()=>p});var a=n(7462),i=(n(7294),n(3905));const r={sidebar_label:"Python-Custom-Container",sidebar_position:3},o="Building and Running Custom Python  Container",l={unversionedId:"examples/workload-onboarding/Python-Custom-Container/index",id:"examples/workload-onboarding/Python-Custom-Container/index",title:"Building and Running Custom Python  Container",description:"Open In Colab",source:"@site/docs/examples/workload-onboarding/Python-Custom-Container/index.md",sourceDirName:"examples/workload-onboarding/Python-Custom-Container",slug:"/examples/workload-onboarding/Python-Custom-Container/",permalink:"/examples/workload-onboarding/Python-Custom-Container/",draft:!1,editUrl:"https://github.com/bacalhau-project/docs.bacalhau.org/blob/main/docs/examples/workload-onboarding/Python-Custom-Container/index.md",tags:[],version:"current",lastUpdatedAt:1680047144,formattedLastUpdatedAt:"Mar 28, 2023",sidebarPosition:3,frontMatter:{sidebar_label:"Python-Custom-Container",sidebar_position:3},sidebar:"documentationSidebar",previous:{title:"Python - Pandas",permalink:"/examples/workload-onboarding/python-pandas/"},next:{title:"CUDA",permalink:"/examples/workload-onboarding/CUDA/"}},s={},p=[{value:"<strong>Introduction</strong>",id:"introduction",level:2},{value:"Prerequisites",id:"prerequisites",level:2},{value:"Sample Recommendation Dataset",id:"sample-recommendation-dataset",level:2},{value:"Downloading the dataset",id:"downloading-the-dataset",level:3},{value:"Installing Dependencies",id:"installing-dependencies",level:3},{value:"Writing the Script",id:"writing-the-script",level:3},{value:"Running the Script",id:"running-the-script",level:3},{value:"Setting Up Docker",id:"setting-up-docker",level:2},{value:"Build the container",id:"build-the-container",level:3},{value:"Push the container",id:"push-the-container",level:3},{value:"Running a Bacalhau Job",id:"running-a-bacalhau-job",level:2},{value:"Running the Container with Default Parameters",id:"running-the-container-with-default-parameters",level:3},{value:"Structure of the command",id:"structure-of-the-command",level:3},{value:"Running the Container with Custom Parameters",id:"running-the-container-with-custom-parameters",level:3},{value:"Structure of the command",id:"structure-of-the-command-1",level:3},{value:"Checking the State of your Jobs",id:"checking-the-state-of-your-jobs",level:2},{value:"Viewing your Job Output",id:"viewing-your-job-output",level:2}],u={toc:p},m="wrapper";function d(e){let{components:t,...n}=e;return(0,i.kt)(m,(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"building-and-running-custom-python--container"},"Building and Running Custom Python  Container"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://colab.research.google.com/github/bacalhau-project/examples/blob/main/workload-onboarding/Python-Custom-Container/index.ipynb"},(0,i.kt)("img",{parentName:"a",src:"https://colab.research.google.com/assets/colab-badge.svg",alt:"Open In Colab"})),"\n",(0,i.kt)("a",{parentName:"p",href:"https://mybinder.org/v2/gh/bacalhau-project/examples/HEAD?labpath=workload-onboarding/Python-Custom-Container/index.ipynb"},(0,i.kt)("img",{parentName:"a",src:"https://mybinder.org/badge.svg",alt:"Open In Binder"}))),(0,i.kt)("h2",{id:"introduction"},(0,i.kt)("strong",{parentName:"h2"},"Introduction")),(0,i.kt)("p",null,"In this tutorial example, we will walk you through building your own docker container and running the container on the bacalhau network."),(0,i.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,i.kt)("p",null,"To get started, you need to install the Bacalhau client, see more information ",(0,i.kt)("a",{parentName:"p",href:"https://docs.bacalhau.org/getting-started/installation"},"here")),(0,i.kt)("h2",{id:"sample-recommendation-dataset"},"Sample Recommendation Dataset"),(0,i.kt)("p",null,"We will using a simple recommendation script that when given a movie ID will recommend other movies based on user ratings. Assuming you want if recommendations for the movie Toy Story (1995) it will recommend movies from similar categories:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"Recommendations for Toy Story (1995):\n1  :  Toy Story (1995)\n58  :  Postino, Il (The Postman) (1994)\n3159  :  Fantasia 2000 (1999)\n359  :  I Like It Like That (1994)\n756  :  Carmen Miranda: Bananas Is My Business (1994)\n618  :  Two Much (1996)\n48  :  Pocahontas (1995)\n2695  :  Boys, The (1997)\n2923  :  Citizen's Band (a.k.a. Handle with Care) (1977)\n688  :  Operation Dumbo Drop (1995)\n")),(0,i.kt)("h3",{id:"downloading-the-dataset"},"Downloading the dataset"),(0,i.kt)("p",null,"Download Movielens1M dataset from this link ",(0,i.kt)("a",{parentName:"p",href:"https://files.grouplens.org/datasets/movielens/ml-1m.zip"},"https://files.grouplens.org/datasets/movielens/ml-1m.zip")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"!wget https://files.grouplens.org/datasets/movielens/ml-1m.zip\n")),(0,i.kt)("p",null,"In this example we\u2019ll be using 2 files from the MovieLens 1M dataset: ratings.dat and movies.dat. After the dataset is downloaded extract the zip and place ratings.dat and movies.dat into a folder called input"),(0,i.kt)("p",null,"The structure of input directory should be"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"input\n\u251c\u2500\u2500 movies.dat\n\u2514\u2500\u2500 ratings.dat\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"# Extracting the downloaded zip file\n!unzip ml-1m.zip\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"#moving  ratings.dat and movies.dat into a folder called 'input'\n!mkdir input; mv ml-1m/movies.dat ml-1m/ratings.dat input/\n")),(0,i.kt)("h3",{id:"installing-dependencies"},"Installing Dependencies"),(0,i.kt)("p",null,"Create a ",(0,i.kt)("inlineCode",{parentName:"p"},"requirements.txt")," for the Python libraries we\u2019ll be using:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"%%writefile requirements.txt\nnumpy\npandas\n")),(0,i.kt)("p",null,"To install the dependencies run the command"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"%%bash\npip install -r requirements.txt\n")),(0,i.kt)("h3",{id:"writing-the-script"},"Writing the Script"),(0,i.kt)("p",null,"Create a new file called ",(0,i.kt)("inlineCode",{parentName:"p"},"similar-movies.py")," and in it paste the following script"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"%%writefile similar-movies.py\n# Imports\nimport numpy as np\nimport pandas as pd\nimport argparse\nfrom distutils.dir_util import mkpath\nimport warnings\nwarnings.filterwarnings(\"ignore\")\n# Read the files with pandas\ndata = pd.io.parsers.read_csv('input/ratings.dat',\nnames=['user_id', 'movie_id', 'rating', 'time'],\nengine='python', delimiter='::', encoding='latin-1')\nmovie_data = pd.io.parsers.read_csv('input/movies.dat',\nnames=['movie_id', 'title', 'genre'],\nengine='python', delimiter='::', encoding='latin-1')\n\n# Create the ratings matrix of shape (m\xd7u) with rows as movies and columns as users\n\nratings_mat = np.ndarray(\nshape=((np.max(data.movie_id.values)), np.max(data.user_id.values)),\ndtype=np.uint8)\nratings_mat[data.movie_id.values-1, data.user_id.values-1] = data.rating.values\n\n# Normalise matrix (subtract mean off)\n\nnormalised_mat = ratings_mat - np.asarray([(np.mean(ratings_mat, 1))]).T\n\n# Compute SVD\n\nnormalised_mat = ratings_mat - np.matrix(np.mean(ratings_mat, 1)).T\ncov_mat = np.cov(normalised_mat)\nevals, evecs = np.linalg.eig(cov_mat)\n\n# Calculate cosine similarity, sort by most similar and return the top N.\n\ndef top_cosine_similarity(data, movie_id, top_n=10):\n   \nindex = movie_id - 1\n# Movie id starts from 1\n   \nmovie_row = data[index, :]\nmagnitude = np.sqrt(np.einsum('ij, ij -> i', data, data))\nsimilarity = np.dot(movie_row, data.T) / (magnitude[index] * magnitude)\nsort_indexes = np.argsort(-similarity)\nreturn sort_indexes[:top_n]\n\n# Helper function to print top N similar movies\ndef print_similar_movies(movie_data, movie_id, top_indexes):\nprint('Recommendations for {0}: \\n'.format(\nmovie_data[movie_data.movie_id == movie_id].title.values[0]))\nfor id in top_indexes + 1:\nprint(str(id),' : ',movie_data[movie_data.movie_id == id].title.values[0])\n\n\nparser = argparse.ArgumentParser(description='Personal information')\nparser.add_argument('--k', dest='k', type=int, help='principal components to represent the movies',default=50)\nparser.add_argument('--id', dest='id', type=int, help='Id of the movie',default=1)\nparser.add_argument('--n', dest='n', type=int, help='No of recommendations',default=10)\n\nargs = parser.parse_args()\nk = args.k\nmovie_id = args.id # Grab an id from movies.dat\ntop_n = args.n\n\n# k = 50\n# # Grab an id from movies.dat\n# movie_id = 1\n# top_n = 10\n\nsliced = evecs[:, :k] # representative data\ntop_indexes = top_cosine_similarity(sliced, movie_id, top_n)\nprint_similar_movies(movie_data, movie_id, top_indexes)\n")),(0,i.kt)("p",null,"What the similar-movies.py script does"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Read the files with pandas"),(0,i.kt)("li",{parentName:"ul"},"Create the ratings matrix of shape (m\xd7u) with rows as movies and columns as user"),(0,i.kt)("li",{parentName:"ul"},"Normalise matrix (subtract mean off)"),(0,i.kt)("li",{parentName:"ul"},"Compute SVD"),(0,i.kt)("li",{parentName:"ul"},"Calculate cosine similarity, sort by most similar and return the top N."),(0,i.kt)("li",{parentName:"ul"},"Select k principal components to represent the movies, a movie_id to find recommendations and print the top_n results.")),(0,i.kt)("p",null,"For further reading on how the script works, go to ",(0,i.kt)("a",{parentName:"p",href:"https://alyssaq.github.io/2015/20150426-simple-movie-recommender-using-svd/"},"Simple Movie Recommender Using SVD | Alyssa")),(0,i.kt)("h3",{id:"running-the-script"},"Running the Script"),(0,i.kt)("p",null,"Running the script similar-movies.py using the default values you can also use other flags to set your own values"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"! python similar-movies.py\n")),(0,i.kt)("h2",{id:"setting-up-docker"},"Setting Up Docker"),(0,i.kt)("p",null,"We will create a  ",(0,i.kt)("inlineCode",{parentName:"p"},"Dockerfile")," and add the desired configuration to the file. These commands specify how the image will be built, and what extra requirements will be included."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"%%writefile Dockerfile\nFROM python:3.8\nADD similar-movies.py .\nADD /input input\nCOPY ./requirements.txt /requirements.txt\nRUN pip install -r requirements.txt\n")),(0,i.kt)("p",null,"We will use the python:3.8 docker image and add our script ",(0,i.kt)("inlineCode",{parentName:"p"},"similar-movies.py")," to copy the script to the docker image, similarly we also add the dataset directory and also the requirements, after that run the command to install the dependencies in the image"),(0,i.kt)("p",null,"The final folder structure will look like this: "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"\u251c\u2500\u2500 Dockerfile\n\u251c\u2500\u2500 input\n\u2502   \u251c\u2500\u2500 movies.dat\n\u2502   \u2514\u2500\u2500 ratings.dat\n\u251c\u2500\u2500 requirements.txt\n\u2514\u2500\u2500 similar-movies.py\n")),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"See more information on how to containerize your script/app ",(0,i.kt)("a",{parentName:"p",href:"https://docs.docker.com/get-started/02_our_app/"},"here"))),(0,i.kt)("h3",{id:"build-the-container"},"Build the container"),(0,i.kt)("p",null,"We will run ",(0,i.kt)("inlineCode",{parentName:"p"},"docker build")," command to build the container;"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"docker build -t <hub-user>/<repo-name>:<tag> .\n")),(0,i.kt)("p",null,"Before running the command replace;"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"hub-user")," with your docker hub username, If you don\u2019t have a docker hub account ",(0,i.kt)("a",{parentName:"p",href:"https://docs.docker.com/docker-id/"},"follow these instructions to create docker account"),", and use the username of the account you created")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"repo-name")," with the name of the container, you can name it anything you want")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"tag")," this is not required but you can use the latest tag"))),(0,i.kt)("p",null,"In our case"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"docker build -t jsace/python-similar-movies\n")),(0,i.kt)("h3",{id:"push-the-container"},"Push the container"),(0,i.kt)("p",null,"Next, upload the image to the registry. This can be done by using the Docker hub username, repo name or tag."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"docker push <hub-user>/<repo-name>:<tag>\n")),(0,i.kt)("p",null,"In our case"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"docker push jsace/python-similar-movies\n")),(0,i.kt)("h2",{id:"running-a-bacalhau-job"},"Running a Bacalhau Job"),(0,i.kt)("p",null,"After the repo image has been pushed to docker hub, we can now use the container for running on Bacalhau. You can submit a Bacalhau job using by running your container on bacalhau with default or custom parameters"),(0,i.kt)("h3",{id:"running-the-container-with-default-parameters"},"Running the Container with Default Parameters"),(0,i.kt)("p",null,"To submit a Bacalhau job by running your container on bacalhau with default parameters, run the following Bacalhau command:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"%%bash --out job_id\nbacalhau docker run \\\n--id-only \\\n--wait \\\njsace/python-similar-movies \\\n-- python similar-movies.py\n")),(0,i.kt)("h3",{id:"structure-of-the-command"},"Structure of the command"),(0,i.kt)("p",null,"Let's look closely at the command above:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"bacalhau docker run"),": call to bacalhau ")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"jsace/python-similar-movies"),": the name and the tag of the docker image we are using")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"-- python similar-movies.py"),": execute the python script"))),(0,i.kt)("p",null,"When a job is submitted, Bacalhau prints out the related ",(0,i.kt)("inlineCode",{parentName:"p"},"job_id"),". We store that in an environment variable so that we can reuse it later on."),(0,i.kt)("h3",{id:"running-the-container-with-custom-parameters"},"Running the Container with Custom Parameters"),(0,i.kt)("p",null,"To submit a Bacalhau job by running your container on bacalhau with custom parameters, run the following Bacalhau command:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"bacalhau docker run \\\njsace/python-similar-movies \\\n-- python similar-movies.py --k 50 --id 10 --n 10\n")),(0,i.kt)("h3",{id:"structure-of-the-command-1"},"Structure of the command"),(0,i.kt)("p",null,"Let's look closely at the command above:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"bacalhau docker run"),": call to bacalhau ")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"jsace/python-similar-movies"),": the name and the tag of the docker image we are using")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"-- python similar-movies.py --k 50 --id 10 --n 10"),": execute the python script"))),(0,i.kt)("h2",{id:"checking-the-state-of-your-jobs"},"Checking the State of your Jobs"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Job status"),": You can check the status of the job using ",(0,i.kt)("inlineCode",{parentName:"li"},"bacalhau list"),". ")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"%%bash\nbacalhau list --id-filter ${JOB_ID}\n")),(0,i.kt)("p",null,"When it says ",(0,i.kt)("inlineCode",{parentName:"p"},"Published")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"Completed"),", that means the job is done, and we can get the results."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Job information"),": You can find out more information about your job by using ",(0,i.kt)("inlineCode",{parentName:"li"},"bacalhau describe"),".")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"%%bash\nbacalhau describe ${JOB_ID}\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Job download"),": You can download your job results directly by using ",(0,i.kt)("inlineCode",{parentName:"li"},"bacalhau get"),". Alternatively, you can choose to create a directory to store your results. In the command below, we created a directory and downloaded our job output to be stored in that directory.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"%%bash\nrm -rf results && mkdir -p results\nbacalhau get $JOB_ID --output-dir results\n")),(0,i.kt)("h2",{id:"viewing-your-job-output"},"Viewing your Job Output"),(0,i.kt)("p",null,"Each job creates 3 subfolders: the ",(0,i.kt)("strong",{parentName:"p"},"combined_results"),",",(0,i.kt)("strong",{parentName:"p"},"per_shard files"),", and the ",(0,i.kt)("strong",{parentName:"p"},"raw")," directory. To view the file, run the following command:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"!cat results/combined_results/stdout # displays the contents of the file\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"Recommendations for GoldenEye (1995): \n\n10  :  GoldenEye (1995)\n16  :  Casino (1995)\n7  :  Sabrina (1995)\n733  :  Rock, The (1996)\n648  :  Mission: Impossible (1996)\n1049  :  Ghost and the Darkness, The (1996)\n13  :  Balto (1995)\n839  :  Crow: City of Angels, The (1996)\n977  :  Moonlight Murder (1936)\n349  :  Clear and Present Danger (1994)\n")))}d.isMDXComponent=!0}}]);