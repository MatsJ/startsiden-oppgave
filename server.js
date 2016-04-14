var express = require('express');
var app = express();

//makes it possible to render ejs files.
app.set('view engine', 'ejs');

//specifies where to store stylesheets, javascript, images etc
app.use(express.static(__dirname + '/public'));

//routes for app
app.get('/', function(req, res) {
  res.render('pad');
});

//listening to port 8000
var port = process.env.PORT || 8000;
app.listen(port);
