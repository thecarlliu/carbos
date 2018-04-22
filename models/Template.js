const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const categoriesSchema = new Schema({
    id: {type: Number, required: true},
    title: { type: String, required: true },
    description: { type: String, required: true },
    image: { type: String, required: true },
    sourceURL: { type: String, required: true },
    demoURL: { type: String, required: true }
});

const categories = mongoose.model("Template", categoriesSchema);

module.exports = categories;