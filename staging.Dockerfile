FROM node:16.15-alpine

WORKDIR /usr/app

COPY package*.json ./

RUN yarn install

COPY . .

EXPOSE 3004

CMD yarn dev
