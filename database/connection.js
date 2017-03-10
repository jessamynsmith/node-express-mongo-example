var mongoose = require('mongoose');

var exports = module.exports = {};

mongoose.connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/nem_example');

var connection = mongoose.connection;
connection.on('error', console.error.bind(console, 'connection error:'));

connection.once('open', function () {});

exports.connection = connection;
