var mongoose = require('mongoose');

var exports = module.exports = {};

var productSchema = mongoose.Schema({
  id: Number,
  name: String
});

exports.Product = mongoose.model('Product', productSchema);
