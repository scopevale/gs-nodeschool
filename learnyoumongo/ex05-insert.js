

var mongo = require('mongodb').MongoClient;
var fname = process.argv[2];
var lname = process.argv[3];

var url = 'mongodb://localhost:27017/learnyoumongo';

mongo.connect(url, function(err, db) {
  if (err) {
    console.error(err);
  }
  var users = db.collection('users');

  var user = {
    firstName: fname,
    lastName: lname
  };

  users.insert(user, function(err, data) {
    if (err) {
      console.error(err);
    }
    console.log(JSON.stringify(user));
    db.close();
  });
});
