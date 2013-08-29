var mongoose = require('mongoose');
mongoose.connect("mongodb://localhost/test");
var db_connection=mongoose.connection;
db_connection.on('error', console.error.bind(console, 'connection error:'));
db_connection.once('open', function callback () {
  console.log("Connection opened");
});
var boatSchema=mongoose.Schema({
  x: Number,
  y: Number
});
var Boats=mongoose.model('boat',boatSchema);
