FROM node:argon

RUN npm install webpack -g
RUN npm install knex -g

WORKDIR /tmp
COPY package.json /tmp/
RUN npm config set registry http://registry.npmjs.org/ && npm install
RUN npm install knex -g

WORKDIR /usr/src/app
COPY . /usr/src/app/
RUN cp -a /tmp/node_modules /usr/src/app/

RUN webpack

ENV NODE_ENV=dev
ENV PORT=3000

CMD [ "/usr/local/bin/node", "./server/server.js" ]

EXPOSE 3000