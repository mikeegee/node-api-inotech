var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');    // pull information from HTML POST (express4)


var Category = require('./models/category');
var Brand = require('./models/brand');

var app = express();
var port = process.env.PORT || 3000;

var database = require('./config/db');
var db = mongoose.connect(database.url);

app.use(bodyParser.urlencoded({'extended':'true'}));            // parse application/x-www-form-urlencoded
app.use(bodyParser.json());                                     // parse application/json
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));


var Product = require('./models/product');
var products = require('./routes/product')(Product);
app.use( '/api/products',products);

var Category = require('./models/category');
var categories = require('./routes/category')(Category);
app.use( '/api/categories',categories);

var Brand = require('./models/brand');
var brands = require('./routes/brand')(Brand);
app.use( '/api/brands',brands);


app.listen(port, function (err) {
    console.log('Yay ! I am running on ' + port);
});


app.get('/', function (req, res) {
    res.send("Hola World!");
});

