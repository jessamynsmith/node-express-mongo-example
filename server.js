'use strict';

var mongoose = require('mongoose');
var sslRedirect = require('heroku-ssl-redirect');
var express = require('express');
var connection = require('./database/connection');
var models = require('./database/models');

var app = express();

// enable ssl redirect
app.use(sslRedirect());

// CORS (Cross-Origin Resource Sharing) headers to support Cross-site HTTP requests
app.all('*', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  next();
});

// API Routes
app.get('/api/v1/products', function(request, response) {

  models.Product.find(function (err, data) {
    if (err) {
      console.log(err);
      response.send({'message': 'Unable to retrieve products'});
    } else {
      response.send(data);
    }
  });

});

app.get('*', function(req, res) {
    res.redirect('/api/v1/products');
});

app.set('port', process.env.PORT || 5000);

app.listen(app.get('port'), function() {
  console.log('Express server listening on port ' + app.get('port'));
});
