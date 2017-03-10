var mongoose = require('mongoose');
var connection = require('./connection');
var models = require('./models');


var data = [
  {id: 1, name: 'potatoes'},
  {id: 2, name: 'carrots'},
  {id: 3, name: 'beets'}
];

// Remove any old data
models.Product.remove({}, function (err, docs) {
});

// Create new data
for (var i = 0; i < data.length; i++) {
  var item = models.Product(data[i]);
  item.save();
}
