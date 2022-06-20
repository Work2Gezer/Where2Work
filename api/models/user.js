const mongoose = require("mongoose")
const bcrypt = require('bcrypt')

const userSchema = mongoose.Schema({
    id: { type: Number, index: { unique: true } },
    username: { type: String, required: true, index: { unique: true } },
    password: { type: String, required: true },
    email: { type: String, required: true, index: { unique: true } },
    firstname: { type: String, required: false },
    lastname: { type: String, required: false },
    image: { type: String, required: false },
    permissions : { type: String }
})

module.exports = userSchema