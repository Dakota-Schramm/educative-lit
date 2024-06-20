FROM ubuntu:20.04
# Copy lit folder to container

WORKDIR /app
COPY . .

# Enable non-interactive mode
ENV DEBIAN_FRONTEND="noninteractive"

# Misc packages for debugging
RUN apt-get -y update && apt-get -y install curl

# Lit Installation
RUN curl -sL https://deb.nodesource.com/setup_20.x -o nodesource_setup.sh &&\
    bash nodesource_setup.sh

# Node Installation
RUN apt-get -y update &&\
    apt-get install -y nodejs

# Nohup pre-requisites Installation
RUN npm install -y --global pnpm

RUN cd /app && npm install