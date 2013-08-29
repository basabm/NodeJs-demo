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
var cord=[{ x: 37.772323, y: -122.214897, times: 1}, { x: 37.772323, y: -122.214897, times: 2}, { x: 36.772323, y: -123.214897, times: 3}, { x: 35.772323, y: -124.214897, times: 4}, { x: 34.772323, y: -125.214897, times: 5}, { x: 33.772323, y: -126.214897, times: 6}, { x: 32.772323, y: -127.214897, times: 7}, { x: 31.772323, y: -128.214897, times: 8}, { x: 30.772323, y: -129.214897, times: 9}, { x: 29.772323, y: -130.214897, times: 10}, { x: 28.772323, y: -131.214897, times: 11}, { x: 27.772323, y: -132.214897, times: 12}, { x: 26.772323, y: -133.214897, times: 13}, { x: 25.772323, y: -134.214897, times: 14}, { x: 24.772323, y: -135.214897, times: 15}, { x: 23.772323, y: -136.214897, times: 16}, { x: 22.772323, y: -137.214897, times: 17}, { x: 21.772323, y: -138.214897, times: 18}, { x: 20.772323, y: -139.214897, times: 19}, { x: 19.772323, y: -140.214897, times: 20}, { x: 18.772323, y: -141.214897, times: 21}, { x: 17.772323, y: -142.214897, times: 22}, { x: 16.772323, y: -143.214897, times: 23}, { x: 15.772323, y: -144.214897, times: 24}, { x: 14.772323, y: -145.214897, times: 25}, { x: 13.772323, y: -146.214897, times: 26}, { x: 12.772323, y: -147.214897, times: 27}, { x: 11.772323, y: -148.214897, times: 28}, { x: 10.772323, y: -149.214897, times: 29}, { x: 9.772323, y: -150.214897, times: 30}, { x: 8.772323, y: -151.214897, times: 31}, { x: 7.772323, y: -152.214897, times: 32}, { x: 6.772323, y: -153.214897, times: 33}, { x: 5.772323, y: -154.214897, times: 34}, { x: 4.772323, y: -155.214897, times: 35}, { x: 3.772323, y: -156.214897, times: 36}, { x: 2.772323, y: -157.214897, times: 37}, { x: 1.772323, y: -158.214897, times: 38}, { x: 0.7723230000000001, y: -159.214897, times: 39}, { x: -0.2276769999999999, y: -160.214897, times: 40}, { x: -1.227677, y: -161.214897, times: 41}, { x: -2.227677, y: -162.214897, times: 42}, { x: -3.227677, y: -163.214897, times: 43}, { x: -4.227677, y: -164.214897, times: 44}, { x: -5.227677, y: -165.214897, times: 45}, { x: -6.227677, y: -166.214897, times: 46}, { x: -7.227677, y: -167.214897, times: 47}, { x: -8.227677, y: -168.214897, times: 48}, { x: -9.227677, y: -169.214897, times: 49}, { x: -10.227677, y: -170.214897, times: 50}, { x: -11.227677, y: -171.214897, times: 51}]

for(i in cord){
 var b=new Boats({x: cord[i].x, y: cord[i].y, times: i+1});
 b.save(function (err, d) {console.log("inserted record x:"+cord[i].x+" y:"+cord[i].y);});
}

