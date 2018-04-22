const mongoose = require("mongoose");
const db = require("../models");
mongoose.Promise = global.Promise;

mongoose.connect(
    process.env.MONGODB_URI || "mongodb://localhost/carbos",
    {
        useMongoClient: true
    }
);

const forumSeed = [
    {
        title: "News",
        description: "Carbos updates.",
        posts: [
            {
                text: "seed-test",
                user: "Admin",
                date: Date.now
            }
        ],
        date: Date.now
    },
    {
        title: "General Discussion",
        description: "Discuss Carbos.",
        posts: [
            {
                text: "seed-test",
                user: "Admin",
                date: Date.now
            }
        ],
        date: Date.now
    },
    {
        title: "Technical Support",
        description: "For reporting technical issues.",
        posts: [
            {
                text: "seed-test",
                user: "Admin",
                date: Date.now
            }
        ],
        date: Date.now
    }
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
