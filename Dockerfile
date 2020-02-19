FROM node:latest

WORKDIR /counter-culture.dev

ENV NODE_ENV=production

# workaround for dev container
# see https://github.com/zeit/next.js/issues/4022
ENV DEV_ENV=true

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

EXPOSE 9000

CMD [ "node", "server.js" ]