FROM node:16

WORKDIR /usr/src/SESI_BE
COPY package*.json ./

RUN npm install

COPY . .

# https://nodejs.org/en/docs/guides/nodejs-docker-webapp/