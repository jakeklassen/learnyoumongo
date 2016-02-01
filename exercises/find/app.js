'use strict';

// FIND
// Exercise 3 of 9

// Here we will learn how to search for documents.

// For all of the exercises, the database is learnyoumongo.
// So, the url would be something like: mongodb://localhost:27017/learnyoumongo

// Use the parrots collection to find all documents where age
// is greater than the first argument passed to your script.

// Using console.log, print the documents to stdout.

const url = 'mongodb://localhost:27017/learnyoumongo';
const mongo = require("mongodb").MongoClient;
const age = Number(process.argv[2]);

mongo.connect(url, (err, db) => {
  if (err) throw err;
  
  db.collection('parrots')
    .find({ age: { $gt: +age } })
    .toArray((err, docs) => {
      if (err) throw err;
      
      console.log(docs);
      db.close();
    });
});