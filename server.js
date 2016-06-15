import path from 'path';
import express from 'express';
import db from './server/db';

const isDeveloping = process.env.NODE_ENV !== 'production';
const port = isDeveloping ? 3000 : process.env.PORT;
const app = express();
const staticPath = path.join(__dirname, 'public/build');

if (isDeveloping) {
  let webpack = require('webpack');
  let webpackMiddleware = require('webpack-dev-middleware');
  let webpackHotMiddleware = require('webpack-hot-middleware');
  let config = require('./webpack.config.js');

  const compiler = webpack(config);
  const middleware = webpackMiddleware(compiler, {
    publicPath: config.output.publicPath,
    noInfo: false,
    quiet: true,
    lazy: false,
    watchOptions: {
      aggregateTimeout: 300,
      poll: true
    },
    stats: {
      colors: true,
    }
  });

  const bundlePath = path.join(__dirname, './public/build/index.html');

  app.use(middleware);

  app.use(webpackHotMiddleware(compiler));
  app.use(express.static(staticPath));
  app.get('*', function response(req, res) {
    res.write(middleware.fileSystem.readFileSync(bundlePath));
    res.end();
  });
} else {

  app.use(express.static(staticPath));
}

app.listen(port, '0.0.0.0', function onStart(err) {
  if (err) {
    console.log(err);
  }
  console.info('==> 🌎 port: %s.', port);
});