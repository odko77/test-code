const mongoose = require("mongoose");
const { uniqId } = require("./helper")

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: false,
    },
    age: {
        type: Number,
        required: false,
    },
    cars: [{
        type: mongoose.Types.ObjectId,
        ref: "car"
    }],
    lastSee: {
        type: Date,
        default: Date.now
    }
}, {
    timestamps: true
})

module.exports = mongoose.model('user', UserSchema)
