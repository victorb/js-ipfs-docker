FROM node:9.5.0

RUN apt-get update

RUN apt-get install --yes git

RUN mkdir -p /usr/src/app

WORKDIR /usr/src/app

COPY package.json /usr/src/app/package.json

RUN yarn

COPY . /usr/src/app

CMD node index.js
