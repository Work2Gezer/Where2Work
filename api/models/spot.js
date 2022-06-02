const mongoose = require("mongoose")

const spotSchema = mongoose.Schema({
    id: { type: String, required: true, index: { unique: true } },
    name: String,
    adress: String,
    rating: Number,
    lat: Number,
    lng: Number,
    description: String,
    tel: String,
})

module.exports = spotSchema