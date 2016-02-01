'use strict';

// AGGREGATE
// Exercise 9 of 9

// Next up is aggregation. Aggregation allows one to do things like
// calculate the sum of a field of multiple documents or the average
// of a field of documents meeting particular criteria.

// Say you have a collection named prices. Each price document is modeled
// like so:

//   {
//     "name": "Tshirt",
//     "size": "S",
//     "price": 10,
//     "quantity": 12
//     "meta": {
//       "vendor": "hanes",
//       "location": "US"
//     }
//   }

// In this exercise, we need to calculate the average price for all documents in prices
// that have the size that will be passed as the first argument to your script.

// Use console.log() to print the average price rounded to 2 decimal places
// to stdout after you have found it.

const mongo = require("mongodb").MongoClient;
const url = `mongodb://localhost:27017/learnyoumongo`;

const size = process.argv[2];

mongo.connect(url, (err, db) => {
  if (err) throw err;

  const collection = db.collection('prices');
  
  let match = { $match: { size: size } };
  
  // Store result in field `average` and $avg on `price`
  let group = { $group: {
    _id: 'average',
    average: {
      $avg: '$price'
    }
  }};
  
  collection.aggregate([match, group])
    .toArray((err, results) => {
      if (err) throw err;

      // Two decimal places
      console.log(parseFloat(results[0].average).toFixed(2));

      db.close();
    });
});