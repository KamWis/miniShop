var express = require('express');
var router = express.Router();

var bodyParser = require('body-parser');

var port = process.env.PORT || 3000;
var app = express();
var staticPath = 'public/build';

var knex = require('./db');
var bookshelf = require('bookshelf')(knex);

var Product = bookshelf.Model.extend({
  tableName: 'products'
})
bookshelf.plugin('pagination');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

router.post('/api/Product', function(req, res) {

  var data = {
    name: req.body.name,
    price: req.body.price,
    postDate: Date.now(),
    picture: req.body.link
  }

  Product.forge(data).save().then(function(data) {

    res.send(req.body);
  });

});

router.get('/api/Product', function(req, res) {

  // Product.forge().fetchAll().then(function(product){

  //   res.send(product.toJSON());
  // })
  Product.forge().fetchPage({pageSize:10, page: req.query.page}).then(function(product){

    var result = product.toJSON();

    if(result.length > 0) {
      res.send(result);
    } else {
      res.send('There is no more results to load.');
    }
  })
});

app.use(express.static(staticPath), router);
app.listen(3000, '0.0.0.0', function onStart(err) {
  if (err) {
    console.log(err);
  }
  console.info('==> 🌎 port: %s.', port);
});