/* eslint-disable no-console */
const express = require('express');
const next = require('next');
const compression = require('compression');
const functions = require('firebase-functions');

const createSitemap = require('./sitemap');

const port = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== 'production';
const app = dev ? next({ dev, dir: 'src/app' }) : next({ dev, conf: { distDir: 'next' } });
const handle = app.getRequestHandler();

const server = express();

server.get('/sitemap.xml', (req, res) => {
  res.header('Content-Type', 'application/xml');
  createSitemap(res);
});

server.get('*', (req, res) => handle(req, res));

if (!dev) {
  server.use(compression());
}

if (dev) {
  app.prepare().then(() => {
    server.use(handle).listen(port);
  });
}


exports.next = functions.https.onRequest((req, res) => {
  console.log(`File: ${req.originalUrl}`); // log the page.js file that is being requested

  return app.prepare().then(() => {
    server(req, res);
  });
});
