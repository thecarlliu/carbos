const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const categoriesSchema = new Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    image: { type: String, required: true },
    templates: { type: Array, required: true },
});

const categories = mongoose.model("Template", categoriesSchema);

module.exports = categories;