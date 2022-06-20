const mongoose = require("mongoose")

const spotSchema = mongoose.Schema({
    id: { type: string, required: true, index: { unique: true } },
    name: string,
    adress: string,
    type: string,
    wifi: Boolean,
    rating: Number,
    lat: Number,
    lng: Number,
    description: string,
    tel: string,
})

module.exports = spotSchema