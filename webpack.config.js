var path = require('path');
var webpack = require('webpack');
var autoprefixer = require('autoprefixer')
var ExtractTextPlugin = require('extract-text-webpack-plugin')
var HtmlWebpackPlugin = require('html-webpack-plugin')

var HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
  template: __dirname + '/client/index.html',
  filename: 'index.html',
  inject: 'body'
});

var extractCSS = new ExtractTextPlugin('css/[name].css', {allChunks: true});

var isDeveloping = process.env.NODE_ENV !== 'production';

var config = {
      postcss: [],
      resolve: {},
      plugins: [
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin(),
        HTMLWebpackPluginConfig,
        extractCSS
      ]
    };

if(isDeveloping) {
  config.sassLoader = {
      test: /\.sass$/,
      loaders: ['style-loader', 'css-loader', 'sass-loader']
    }

} else {
  config.sassLoader = {
      test: /\.sass$/,
      loader: ExtractTextPlugin.extract('style-loader', 'css-loader!sass-loader')
    }
  config.ExtractTextPlugin = new ExtractTextPlugin('style.css', {allChunks: true});

  config.plugins.push(config.ExtractTextPlugin);

  config.postcss.push(
    autoprefixer({
      browsers: ['last 2 versions']
    })
  )

  config.resolve.extensions = ['.sass', '.css'];
  config.resolve.root = [path.join(__dirname, './client/stylesheets')];
}

module.exports = {
  devtool: "source-map",
  entry: [
    'webpack-hot-middleware/client?reload=true',
    path.resolve(__dirname, 'app.js')
  ],
  output: {
    path: path.resolve(__dirname, 'public', 'build'),
    publicPath: path.resolve(__dirname, 'public', 'build'),
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
    config.sassLoader
    ]
  },
  plugins: config.plugins,
  postcss: config.postcss,
  resolve: config.resolve
}