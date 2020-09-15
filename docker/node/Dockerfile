FROM node:12

USER root
RUN apt-get update && \
    apt-get install -y \
        git \
        unzip \
        libzip-dev \
        libicu-dev \
        libpq-dev \
        libc-client-dev \
        libkrb5-dev \
        libssl-dev \
        libpng-dev \
        net-tools

RUN npm install -g @angular/cli 
WORKDIR /enghaw-web