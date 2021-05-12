FROM ubuntu:20.04

ARG DEBIAN_FRONTEND=noninteractive

RUN apt update

RUN apt-get install -y curl

RUN curl -sL https://deb.nodesource.com/setup_15.x  | bash -- \
    && apt-get install -y nodejs \
    && apt-get autoremove -y 

WORKDIR /root

EXPOSE 3000