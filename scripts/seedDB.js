const mongoose = require("mongoose");
const db = require("../models");
mongoose.Promise = global.Promise;

mongoose.connect(
    process.env.MONGODB_URI || "mongodb://localhost/carbos",
    {
        useMongoClient: true
    }
);

const generalSeed = [
    {
        text: "Test",
        user: "Admin",
        date: "Today"
    }
];
const supportSeed = [
    {
        text: "Test",
        user: "Admin",
        date: "Today"
    }
];

db.General
    .remove({})
    .then(() => db.General.collection.insertMany(generalSeed))
    .then(data => {
        console.log(data.insertedIds.length + " records inserted!");
        process.exit(0);
    })
    .catch(err => {
        console.error(err);
        process.exit(1);
    });
db.Support
    .remove({})
    .then(() => db.Support.collection.insertMany(supportSeed))
    .then(data => {
        console.log(data.insertedIds.length + " records inserted!");
        process.exit(0);
    })
    .catch(err => {
        console.error(err);
        process.exit(1);
    });
