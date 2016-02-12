

var mongo = require('mongodb').MongoClient;
var database = process.argv[2];

var url = 'mongodb://localhost:27017/' + database;

mongo.connect(url, function(err, db) {
  if (err) {
    console.error(err);
  }
  var collection = db.collection(process.argv[3]);

  collection.remove({
    _id: process.argv[4]
  }, function(err, data) {
    if (err) {
      console.error(err);
    }
    console.log(JSON.stringify(data));
    db.close();
  });
});
