const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const config = require('../webpack.config');

const app = new WebpackDevServer(webpack(config), {
  publicPath: config.output.publicPath,
  hot: true,
  inline: true,
  historyApiFallback: true
});

app.listen(3000, '0.0.0.0', function (err, result) {
  if (err) {
    return console.log(err);
  }

  console.log('Listening at http://0.0.0.0:3000/');
});