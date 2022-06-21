const mongoose = require("mongoose")

const spotSchema = mongoose.Schema({
    id: { type: Number, index: { unique: true } },
    name: String,
    adress: String,
    type: String,
    wifi: Boolean,
    rating: Number,
    lat: { type: Number, required: true },
    lng: { type: Number, required: true },
    description: String,
    tel: String,
})

module.exports = spotSchema