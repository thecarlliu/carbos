const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const generalSchema = new Schema({
    text: { type: String, required: true },
    user: { type: String, required: true },
    date: { type: Date, required: true }
});

const General = mongoose.model("General", generalSchema);

module.exports = General;