var http       = require('http');
var express    = require('express');
var app        = express();
var router     = express.Router();
var server     = http.Server(app);
var io         = require('socket.io')(server);
var port       = process.env.PORT || 3000;
var bodyParser = require('body-parser');
var bookshelf  = require("./bookshelf");
var Product    = require("./models");
var staticPath = 'public/build';


// DEV MIDDLEWARE FOR HOT RELOAD - ALTERNATIVE: CORS

// MAKE IT CONDITIONAL

var webpackDevMiddleware = require("webpack-dev-middleware");
var webpack = require("webpack");
var webpackConfig = require("../webpack.config");

var compiler = webpack(webpackConfig);

app.use(webpackDevMiddleware(compiler, {

    publicPath: webpackConfig.output.publicPath,
    watchOptions: {
      aggregateTimeout: 300,
      poll: true
    }
}));

app.use(require("webpack-hot-middleware")(compiler, {

    log: console.log, path: '/__webpack_hmr'
}));

/////////////////////////////////////////////////////


bookshelf.plugin('pagination');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


// ENDPOINTS

router.post('/api/Product', function(req, res) {

  var data = {
    name: req.body.name,
    price: req.body.price,
    postDate: req.body.postDate,
    picture: req.body.picture
  }

  Product.forge(data).save().then(function(data) {

    res.send(req.body);
  });

});

router.get('/api/Product', function(req, res) {

  Product.where('name', 'like', '%'+req.query.search+'%').orderBy(req.query.order).fetchPage({pageSize:10, page: req.query.page}).then(function(product){

    var result = product.toJSON();

    if(result.length > 0) {
      res.send(result);
    } else {
      res.send('There is no results to load.');
    }
  });
});

// RUN SERVER - PORT WILL BE FROM ABOVE port VARIABLE

app.use(express.static(staticPath), router);

server.listen(3000, '0.0.0.0', function onStart(err) {
  if (err) {
    console.log(err);
  }
  console.info('==> 🌎 port: %s.', port);
});


io.on('disconnect', function (socket) {

  socket.emit('You have been disconnected from the server.');
});

io.on('connection', function (socket) {

  socket.emit('connectedToServer');
});