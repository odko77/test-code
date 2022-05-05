const uuid = require("uuid");

const uniqId = {
    _id: {
        type: String,
        default: uuid.v1(),
        unique: true,
        require: true,
    }
}

module.exports = {
    uniqId
}
