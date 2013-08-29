var mongoose = require('mongoose');
mongoose.connect("mongodb://localhost/test_boat");
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
var count=1;
Boats.find({times: 1},function(e,d){
console.log(d);
});

exports.coordinates = function(req, res){
  Boats.find({}, function (err, db_boat) {
    if(err) {console.log("error");/*error!!!*/}
      console.log(JSON.stringify(db_boat));
      res.send({
         cordinates: db_boat[req.query.times]
      });
  });
};
