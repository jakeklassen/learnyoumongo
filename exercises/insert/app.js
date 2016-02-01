'use strict';

// INSERT
// Exercise 5 of 9

// Connect to MongoDB on port 27017.
// You should connect to the database named learnyoumongo and insert
// a document into the docs collection.

// The document should be a json document with the following properties:

// * `firstName`
// * `lastName`

// firstName will be passed as the first argument to the lesson.

// lastName will be passed as the second argument to the lesson.

// Use console.log to print out the object used to create the document.

// Make sure you use JSON.stringify convert it to JSON.

const url = 'mongodb://localhost:27017/learnyoumongo';
const mongo = require("mongodb").MongoClient;

const firstName = process.argv[2];
const lastName = process.argv[3];

// Short form object syntax
let user = {
  firstName,
  lastName
};

mongo.connect(url, (err, db) => {
  if (err) throw err;
  
  db.collection('docs')
    .insert(user, (err, data) => {
      if (err) throw err;
      
      db.close();
      console.log(JSON.stringify(user));
    });
});