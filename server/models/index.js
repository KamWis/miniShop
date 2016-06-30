var bookshelf = require("../bookshelf");

var Product = bookshelf.Model.extend({
  tableName: 'products'
});

module.exports = Product;