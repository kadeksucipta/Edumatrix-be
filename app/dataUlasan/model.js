const {Schema, model} = require("mongoose")

const dataUlasanSchema = Schema({

    username: {
        type: String,
        // required: [true, "Nama harus di isi"],
        // maxlength: [255, "Panjang nama maksimal adalah 255 karakter"]
    },

    pesan: {
        type: String,
        // default: "html"
    },

    rating: {
        type: String,
        // default: "html"
    },

    // detail: {
    //     type: String,
    //     required: [true, "detail harus di isi"],
    //     maxlength: [255, "Panjang maksimal detail adalah 255 karakter"]
    // },

    // user: {
    //     type: Schema.Types.ObjectId,
    //     ref: "User"
    // }
}, {timestamps: true});

module.exports = model("DataUlasan", dataUlasanSchema)