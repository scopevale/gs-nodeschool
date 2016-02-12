var mongo = require('mongodb').MongoClient;
var url = 'mongodb://localhost:27017/learnyoumongo';
var sizeFilter = process.argv[2];

mongo.connect(url, function(err, db) {
  if (err) {
    console.error(err);
  }
  var collection = db.collection('prices');

  collection.aggregate([
    { $match: { size: sizeFilter }}
  , { $group: {
      _id: 'average'
    , average: {
        $avg: '$price'
      }
    }}
  ]).toArray(function(err, results) {
    if (err) {
      throw err;
    }
    if (!results.length) {
      throw new Error('No results found');
    }
    var o = results[0];
    console.log(Number(o.average).toFixed(2));
    db.close();
  });
});
