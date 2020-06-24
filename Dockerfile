FROM node:latest

WORKDIR /counter-culture.dev

# workaround for dev container
# see https://github.com/zeit/next.js/issues/4022
ENV DEV_ENV=true

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

EXPOSE 9000

CMD [ "node", "./Presentation/server.js" ]