const mongoose = require("mongoose");
const uuid = require("uuid")

const CarSchema = new mongoose.Schema({
    name: {
        type: String,
        default: '',
        required: false,
    },
    brand: {
        type: String,
        default: "",
        required: false,
    }
}, {
    timestamps: true
})

module.exports = mongoose.model('car', CarSchema)
