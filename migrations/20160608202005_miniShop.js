
exports.up = function(knex, Promise) {
  return Promise.all([

          knex.schema.createTable('products', function(table) {
              table.increments('id').primary();
              table.string('name');
              table.integer('price');
              table.string('picture');
              table.dateTime('postDate');
          })
      ])
};

exports.down = function(knex, Promise) {
  return Promise.all([
          knex.schema.dropTable('products')
      ])
};
