const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
    //TODO: Creating the schema means setting all the appropriate keys to the input data types
});

const User = mongoose.model("User", userSchema);

module.exports = User;