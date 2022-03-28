```
docker build -t d3_project .

docker stop  $(docker ps | grep -E 'd3_project' | awk '{print $1}' | awk 'NR==1') && docker rm  $(docker ps -a | grep -E 'd3_project' | awk '{print $1}' | awk 'NR==1')
docker run --name d3_project -v ~/Desktop/d3_project:/d3_project -p 1234:1234 -p 3000:3000 -itd d3_project /bin/bash 
docker exec -w /d3_project -it $(docker ps | grep -E 'd3_project' | awk '{print $1}' | awk 'NR==1') /bin/bash

```

if you have this build docker long time before, please execute the command below to remove the old image, and execute the commands above.


### Web
https://www.typescriptlang.org/play


### Install Typescript compiler
1. install typescript
```
npm install -g typescript ts-node
```

2. install prettier plugins
```
npm install -g parcel-bundler
```

3. npm install -g
```
npm install -g json-server
```

# d3_project
```
parcel index.html
```


```
docker pull node 
# this node docker image installed git as well
docker images
docker run -it --name d3_container ba17ecfd099c /bin/bash

```
