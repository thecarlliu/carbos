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
const templateSeed = [
    {
        title: "Travel",
        description: "Reel in customers with user-friendly interfaces and eye-catching brochures.",
        image: "https://via.placeholder.com/200x200",
        templates: [
            {
                title: "travel1",
                image: "https://via.placeholder.com/200x200",
                sourceURL: "https://github.com/thecarlliu/travel1-source",
                demoURL: "https://github.com/thecarlliu/travel1-demo"
            }
        ]
    },
    {
        title: "Art",
        description: "Amaze your audience with aesthetic galleries.",
        image: "https://via.placeholder.com/200x200",
        templates: [
            {
                title: "art1",
                image: "https://via.placeholder.com/200x200",
                sourceURL: "https://github.com/thecarlliu/art1-source",
                demoURL: "https://github.com/thecarlliu/art1-demo"
            }
        ]
    }
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
