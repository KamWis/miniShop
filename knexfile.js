module.exports = {

  development: {
    client: 'postgresql',
    connection: {
      host     : '172.17.0.2',
      port     : '5432',
      user     : 'dev',
      password : 'dev',
      database : 'miniShop'
    }
  }
}