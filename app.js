require('file?name=./js/material.min.[ext]!./node_modules/bootstrap-material-design/dist/js/material.min.js')
require('file?name=./js/ripples.min.[ext]!./node_modules/bootstrap-material-design/dist/js/ripples.min.js')
require('./client/index.js')
require('./client/stylesheets/style.sass')
require('./node_modules/bootstrap-material-design/dist/css/bootstrap-material-design.min.css')
require('./node_modules/bootstrap-material-design/dist/css/ripples.min.css')
require('file?name=./images/logo.[ext]!./client/images/logo.png')
require('./client/init.js')

module.exports = function() {

    return null;
};