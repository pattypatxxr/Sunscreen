const mongoose = require("mongoose");

var Schema = new mongoose.Schema({
    name: {
        type : String,
        required: true,
    },
    description: {
        type : String,
        required: true,
    },
    skintype: {
        type: Array,
        required: true,
    },
    link: {
        type: String,
        required: true,
    },
    img: {
        type: String,
        required: true,
    }
});

const Products = mongoose.model("products", Schema);

module.exports = Products;