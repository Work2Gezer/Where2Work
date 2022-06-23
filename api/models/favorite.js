const mongoose = require("mongoose")



const favSchema = mongoose.Schema({
    id: { type: Number, index: { unique: true } },
    uid: Number,
    liste: []
})




module.exports = favSchema