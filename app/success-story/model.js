const mongoose = require("mongoose");
const { model, Schema } = mongoose;

const succesStorySchema = Schema({

    name: {
        type: String,
        minlength: [3, "Panjang judul minimal 3 karakter"],
        required: [true, "Nama judul harus diisi"]
    },

    description: {
        type: String,
        maxlength: [1000, "Panjang deskripsi maksimal 1000 karakter"]
    },

    price: {
        type: Number
    },

    image_url: String,

    category: {
        type: Schema.Types.ObjectId,
        ref: "Category"
    },

    tags: [{
        type: Schema.Types.ObjectId,
        ref: "Tag"
    }]

}, { timestamps: true });

module.exports = model("SuccessStory", succesStorySchema);