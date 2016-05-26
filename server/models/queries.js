var pgp = require('pg-promise')();
var cn = process.env.DATABASE_URL || 'postgres://localhost:5432/miniShop';
var db = pgp(cn);

var itemList = function(req, res) {

    db.any('SELECT * FROM items ORDER BY id ASC')
        .then(function(data) {

            return res.json(data);
        })
        .catch(function(err){

            console.warn('there was an error: ', err);
        });
}

var createItem = function(req, res) {

    var dataObj = {text: req.body.text, complete: false};

    db.none('INSERT INTO items (text, complete) VALUES ($1, $2)', [dataObj.text, dataObj.complete])
        .then(function(){

            itemList(req, res);
        })
        .catch(function(err){

            console.warn('there was an error: ', err);
        });
}

var deleteItem = function(req, res) {

    var id = req.params.todo_id;

    db.none('DELETE FROM items WHERE id = $1', [id])
        .then(function(){
            itemList(req, res);
        })
        .catch(function(err){
            console.warn('there was an error: ', err);
        });
}

module.exports = {
        itemList,
        createItem,
        deleteItem
    };