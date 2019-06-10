var connection = require('./connection.js');

// return an array of burger objects with name and devoured properties
exports.selectAll = function(cb){
    var queryString = "SELECT * FROM burgers;";
    connection.query(queryString, function(err, result) {
      if (err) {
        throw err;
      }
      else{
       // console.log(result);
          cb(result);
      }
    });
}

exports.insertOne = function(burger, cb){
  console.log(cb);
    var queryString = "INSERT INTO burgers (name) VALUES (?);" ;
    connection.query(queryString, burger, function(err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });


}

exports.updateOne = function(burger, cb){
  console.log(cb);
  console.log(burger);
    var queryString = "UPDATE burgers SET devoured = true WHERE name = ?";
    connection.query(queryString, burger, function(err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });

}