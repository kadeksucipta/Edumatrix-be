const mongoose = require("mongoose");
const {model, Schema} = mongoose;
const tagSchema = Schema({
    name: {
        type: String,
    },
    description: {
        type: String
    }
});

module.exports = model("Tag", tagSchema)