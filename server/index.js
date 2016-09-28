const express = require('express');

const setupWebpack = require('./middlewares/addWebpackMiddleware');
const argv = require('minimist')(process.argv.slice(2));
const isDev = process.env.NODE_ENV !== 'production';
const resolve = require('path').resolve;
const port = argv.port || process.env.PORT || 3000;
const app = express();

setupWebpack(app, {
  outputPath: resolve(process.cwd(), 'build'),
  publicPath: '/',
});


var server = app.listen(port, (err) => {
  const host = server.address().address;
  console.log('Server is listening on port %s', port);

  if (err) {
    return console.log(err.message);
  }
});

module.exports = server;
