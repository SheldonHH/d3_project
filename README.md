```
docker build -t d3_project .
docker run -itd d3_project /bin/bash
docker exec -it $(docker ps | grep -E 'd3_project' | awk '{print $1}' | awk 'NR==1') /bin/bash

```

### Web
https://www.typescriptlang.org/play


### Install Typescript compiler
1. install typescript
```
npm install -g typescript ts-node
```

2. install prettier plugins




npm install -g parcel-bundler

# d3_project



```
docker pull node 
# this node docker image installed git as well
docker images
docker run -it --name d3_container ba17ecfd099c /bin/bash

```
