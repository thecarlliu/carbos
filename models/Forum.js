const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const forumSchema = new Schema({
    //TODO: Creating the schema means setting all the appropriate keys to the input data types
});

const Forum = mongoose.model("Forum", forumSchema);

module.exports = Forum;
