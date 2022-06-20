const mongoose = require("mongoose")
const bcrypt = require('bcrypt')

const userSchema = mongoose.Schema({
    id: { type: string, required: true, index: { unique: true } },
    username: { type: string, required: true, index: { unique: true } },
    password: { type: string, required: true },
    email: { type: string, required: true, index: { unique: true } },
    firstname: { type: string, required: false },
    lastname: { type: string, required: false },
    image: { type: string, required: false },
})

module.exports = userSchema