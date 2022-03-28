FROM ubuntu
RUN apt update -y
RUN apt install software-properties-common -y
RUN add-apt-repository ppa:deadsnakes/ppa
RUN apt install python3.8 -y
RUN apt-get update -y
RUN apt-get upgrade -y 
RUN apt-get install sudo -y
RUN apt-get install git -y
RUN apt-get install curl -y
RUN apt-get install wget -y
RUN apt-get install nodejs -y
RUN apt-get install npm -y
RUN curl -fsSL https://deb.nodesource.com/setup_lts.x 
RUN sudo -E bash 
RUN sudo apt-get install -y nodejs
RUN npm install -g typescript ts-node
RUN npm install -g parcel-bundler
RUN npm install -g json-server

