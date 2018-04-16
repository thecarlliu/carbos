const mongoose = require("mongoose");
const db = require("../models");
mongoose.Promise = global.Promise;

// This file empties the Forum collection and inserts the discussions below

mongoose.connect(
    process.env.MONGODB_URI || "mongodb://localhost/carbos",
    {
        useMongoClient: true
    }
);

const forumSeed = [
    //TODO: Create the appropriate seed content here
];
const templateSeed = [
    //TODO: Create the appropriate seed content here
];
const userSeed = [
    //TODO: Create the appropriate seed content here
];

db.Forum
    .remove({})
    .then(() => db.Forum.collection.insertMany(forumSeed))
    .then(data => {
        console.log(data.insertedIds.length + " records inserted!");
        process.exit(0);
    })
    .catch(err => {
        console.error(err);
        process.exit(1);
    });

db.Template
    .remove({})
    .then(() => db.Forum.collection.insertMany(templateSeed))
    .then(data => {
        console.log(data.insertedIds.length + " records inserted!");
        process.exit(0);
    })
    .catch(err => {
        console.error(err);
        process.exit(1);
    });

db.User
    .remove({})
    .then(() => db.Forum.collection.insertMany(userSeed))
    .then(data => {
        console.log(data.insertedIds.length + " records inserted!");
        process.exit(0);
    })
    .catch(err => {
        console.error(err);
        process.exit(1);
    });
