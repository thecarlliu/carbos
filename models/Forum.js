const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const threadSchema = new Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    posts: { type: Array, required: true },
    date: { type: Date, default: Date.now }
});

const Threads = mongoose.model("Forum", threadSchema);

module.exports = Threads;
