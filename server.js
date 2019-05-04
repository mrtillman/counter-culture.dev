const express = require('express');
const http = require('http');
const app = express();
const next = require('next');

const dev = process.env.NODE_ENV !== 'production'
const nx = next({ dev });
const handle = nx.getRequestHandler();

const port = 9000;

const onStartUp = () => {

  app.get('/posts/:id', (req, res) => {
    const actualPage = '/post'
    const queryParams = { id: req.params.id };
    nx.render(req, res, actualPage, queryParams);
  })
  
  app.get('/*', (req, res) => {
    return handle(req, res);
  })

  http.createServer(app).listen(port, function () {
    console.log(`magic is happening on port ${port}`);
  });

}

nx.prepare().then(onStartUp);