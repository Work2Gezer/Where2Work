const mongoose = require("mongoose")
require('dotenv').config()


function initdb() {
    if(mongoose.connection.readyState === 0) {
        mongoose.connect('mongodb+srv://cluster0.xts0j.mongodb.net/?retryWrites=true&w=majority', 
            { user: process.env.LOGIN, pass: process.env.PASS, useNewUrlParser: true, useUnifiedTopology: true }
        )
    }else{
        console.log("Already connected to mongoDB")
    } 
}

function closedb(){
    mongoose.connection.close()
}

exports.initdb = initdb
exports.closedb = closedb