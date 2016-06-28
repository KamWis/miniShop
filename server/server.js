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
    postDate: req.body.postDate,
    picture: req.body.picture
  }

  Product.forge(data).save().then(function(data) {

    res.send(req.body);
  });

});

// MAKE SEARCH AND FETCH IN ONE GET AND CHAIN WHERE WITH THE REST SO
// SORTING AND SEARCH FILTER WILL WORK WITH PAGINATION AND ORDER

router.get('/api/Product', function(req, res) {

  Product.where('name', 'like', '%'+req.query.search+'%').orderBy(req.query.order).fetchPage({pageSize:10, page: req.query.page}).then(function(product){
    console.log('req.query.search: ',req.query.search);
    console.log('req.query.order: ',req.query.order);
    console.log('req.query.page: ',req.query.page);
    var result = product.toJSON();

    if(result.length > 0) {
      res.send(result);
    } else {
      res.send('There is no results to load.');
    }
  });
});

// router.get('/api/Product/Search', function(req, res) {

//   Product.where('name', 'like', '%'+req.query.search+'%').orderBy(req.query.order).fetchAll().then(function(data){

//     var result = data.toJSON();

//     if(result.length > 0) {
//       res.send(result);
//     } else {
//       res.send('There is no results to load.');
//     }
//   });
// });

app.use(express.static(staticPath), router);
app.listen(3000, '0.0.0.0', function onStart(err) {
  if (err) {
    console.log(err);
  }
  console.info('==> 🌎 port: %s.', port);
});