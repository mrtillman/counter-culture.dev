node:latest

WORKDIR /counter-culture.dev

ENV NODE_ENV=production

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

EXPOSE 9000

CMD [ "npm", "start" ]