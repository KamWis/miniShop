var path = require('path');
var express = require('express');


var port = process.env.PORT || 3000;
var app = express();
var staticPath = 'public/build';

app.use(express.static(staticPath));

app.listen(port, '0.0.0.0', function onStart(err) {
  if (err) {
    console.log(err);
  }
  console.info('==> 🌎 port: %s.', port);
});