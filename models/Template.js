const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const templateSchema = new Schema({
    //TODO: Creating the schema means setting all the appropriate keys to the input data types
});

const Template = mongoose.model("Template", templateSchema);

module.exports = Template;