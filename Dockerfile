FROM node:argon

RUN npm install webpack -g
RUN npm install knex -g

WORKDIR /usr/src/app

COPY package.json /usr/src/app/
COPY . /usr/src/app/

ENV NODE_ENV=production
ENV PORT=3000

RUN webpack

EXPOSE 3000