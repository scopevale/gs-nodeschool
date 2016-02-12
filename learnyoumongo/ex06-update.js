

var mongo = require('mongodb').MongoClient;
var database = process.argv[2];

var url = 'mongodb://localhost:27017/' + database;

mongo.connect(url, function(err, db) {
  if (err) {
    console.error(err);
  }
  var users = db.collection('users');

  users.update({
    name: 'Tina'
  }, {
    $set: {
      age: 40
    }
  }, function(err, data) {
    if (err) {
      console.error(err);
    }
    console.log(JSON.stringify(data));
    db.close();
  });
});
