var path = require('path');
var webpack = require('webpack');
var autoprefixer = require('autoprefixer')
var ExtractTextPlugin = require('extract-text-webpack-plugin')
var HtmlWebpackPlugin = require('html-webpack-plugin')

var htmlWebpackPlugin = new HtmlWebpackPlugin(
  {
    template: __dirname + '/client/index.html',
    filename: 'index.html',
    inject: 'body',
    hostname: 'http://localhost:3000',
    apiPath: 'http://localhost:3000',
  }
);

var extractCSS = new ExtractTextPlugin('css/[name].css', {allChunks: true});
var isDeveloping = process.env.NODE_ENV !== 'production';
var appEntry;

var config = {

      plugins: [
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin(),
        htmlWebpackPlugin,
        extractCSS
      ]
    };

if(isDeveloping) {

  appEntry = [
    'webpack-dev-server/client?http://localhost:3000',
    'webpack/hot/dev-server',
    path.resolve(__dirname, './client/index.js')
  ];

  config.sassLoader = {
      test: /\.sass$/,
      loaders: ['style-loader', 'css-loader', 'sass-loader']
    }
} else {

  appEntry = path.resolve(__dirname, './client/index.js');

  config.sassLoader = {
      test: /\.sass$/,
      loader: ExtractTextPlugin.extract('style-loader', 'css-loader!sass-loader')
    }
  config.ExtractTextPlugin = new ExtractTextPlugin('style.css', {allChunks: true});
  config.plugins.push(config.ExtractTextPlugin);
}

module.exports = {
   devServer: {
    hot: true,
    inline: true
  },
  devtool: "eval",
  entry: appEntry,
  output: {
    path: path.resolve(__dirname, 'public', 'build'),
    publicPath: '/',
    filename: 'bundle.js'
  },
  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loaders: ['react-hot', 'babel']
    },
    {
      test: /\.css$/,
      loader: extractCSS.extract('style-loader', 'css-loader?sourceMap')
    },
    {
      test: /\.png$/,
      loader: 'url-loader?limit=8192&mimetype=image/png&name=images/[name].[ext]'
    },
    config.sassLoader
    ]
  },
  plugins: config.plugins,
  resolve: {
    alias: {
      components:'../components'
    }
  }
}