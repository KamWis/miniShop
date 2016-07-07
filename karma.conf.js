var webpack = require('webpack');

module.exports = function (config) {
  config.set({
    browsers: [ 'Chrome', 'Firefox' ],
    singleRun: false,
    frameworks: [ 'mocha', 'chai', 'sinon'],
    files: [
      'tests.webpack.js'
    ],
    preprocessors: {
      'tests.webpack.js': [ 'webpack', 'sourcemap' ]
    },
    reporters: [ 'mocha', 'coverage' ],
    webpack: {
      devtool: 'inline-source-map',
      module: {
        loaders: [
          { test: /\.(js?|jsx?)$/, exclude: /node_modules|(-test\.js)$/, loader: 'babel-loader' },
          { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader?plugins=babel-plugin-rewire' },
          { test: /.(png|jpg)$/, loader: 'url-loader?limit=8192' }
        ],
        postLoaders: [{ //delays coverage til after tests are run, fixing transpiled source coverage error
          test: /\.js$/,
          exclude: /(test|node_modules)\//,
          loader: 'istanbul-instrumenter'
        }]
      }
    },
    webpackServer: {
      noInfo: true
    },
    coverageReporter: {
     type: 'html',
     dir: 'coverage/'
    }
  });
};