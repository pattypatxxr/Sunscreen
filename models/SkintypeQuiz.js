const mongoose = require("mongoose");

var Schema = new mongoose.Schema({
    question: {
        type : String,
        required: true,
    },
    answer: {
        type : String,
        required: true,
    },
    answer_eng: {
        type: String,
        required: true,
    }
});

const Skin_types = mongoose.model("questions", Schema);

module.exports = Skin_types;