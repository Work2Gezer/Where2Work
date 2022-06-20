const mongoose = require("mongoose")

const spotSchema = mongoose.Schema({
    id: { type: Number, index: { unique: true } },
    name: String,
    adress: String,
    type: String,
    wifi: Boolean,
    rating: Number,
    lat: Number,
    lng: Number,
    description: String,
    tel: String,
})

module.exports = spotSchema