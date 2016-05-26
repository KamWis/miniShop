var express = require('express');
var router = express.Router();
var path = require('path');

var itemList = require('../models/queries').itemList;
var createItem = require('../models/queries').createItem;
var deleteItem = require('../models/queries').deleteItem;

router.get('/', function(req, res, next) {
  res.sendFile(path.join(__dirname, '../', '../', 'client', 'views', 'index.html'));
});

router.get('/api/v1/minishop/items', itemList);
router.post('/api/v1/minishop/items', createItem);
router.delete('/api/v1/minishop/items:todo_id', deleteItem);

module.exports = router;
