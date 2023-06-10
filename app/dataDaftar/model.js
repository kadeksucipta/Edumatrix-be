const {Schema, model} = require("mongoose")

const dataDaftarSchema = Schema({

    username: {
        type: String,
        required: [true, "Nama harus di isi"],
        // maxlength: [255, "Panjang nama maksimal adalah 255 karakter"]
    },

    email: {
        type: String,
        required: [true, "email harus di isi"],
        // maxlength: [255, "Panjang maksimal kelurahan adalah 255 karakter"]
    },

    pendidikan: {
        type: String,
        // enum: ["male", "female", "other"],
        // default: "male"
    },

    status: {
        type: String,
        // enum: ["male", "female", "other"],
        // default: "male"
    },

    mapel: {
        type: String,
        // enum: ["male", "female", "other"],
        // default: "male"
    },

    belajar: {
        type: String,
        // enum: ["male", "female", "other"],
        // default: "male"
    },

    hp: {
        type: Number,
        // enum: ["male", "female", "other"],
        // default: "male"
    },

    pesan: {
        type: String,
        // default: "html"
    },

    preferensi: {
        type: String,
        // default: "html"
    },

    sesi: {
        type: String,
        // default: "html"
    },

    // detail: {
    //     type: String,
    //     required: [true, "detail harus di isi"],
    //     maxlength: [255, "Panjang maksimal detail adalah 255 karakter"]
    // },

    user: {
        type: Schema.Types.ObjectId,
        ref: "User"
    }
}, {timestamps: true});

module.exports = model("DataDaftar", dataDaftarSchema)