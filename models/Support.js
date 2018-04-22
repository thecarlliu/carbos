const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const supportSchema = new Schema({
    text: { type: String, required: true },
    user: { type: String, required: true },
    date: { type: Date, required: true }
});

const Support = mongoose.model("Support", supportSchema);

module.exports = Support;