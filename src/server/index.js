/* eslint-disable no-console */
const express = require('express');
const next = require('next');
const compression = require('compression');

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

if (!dev) {
  server.use(compression());
}

if (dev) {
  app.prepare().then(() => {
    server.use(handle).listen(port);
  });
}
