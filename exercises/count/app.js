'use strict';

// COUNT
// Exercise 8 of 9

// Here we will learn how to count the number of documents that
// meet certain criteria.

// Use the parrots collection to count all documents where age
// is greater than the first argument passed to your script.

// Using console.log, print the number to stdout.

const mongo = require("mongodb").MongoClient;
const url = `mongodb://localhost:27017/learnyoumongo`;

const age = process.argv[2];

mongo.connect(url, (err, db) => {
  if (err) throw err;

  const collection = db.collection('parrots');
  
  collection.count({ age: { $gt: +age } }, (err, count) => {
      if (err) throw err;
      
      console.log(count);
      db.close();
    });
});