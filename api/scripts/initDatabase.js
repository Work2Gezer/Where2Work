const mongoose = require('mongoose');
const spotSchema = require('./models/spot')
const userSchema = require('./models/user')

const options = {
    connectTimeoutMS: 5000,
    useNewUrlParser: true,
    useUnifiedTopology: true
}

const db = 'mongodb://127.0.0.1/where2work';

function init() {

    mongoose.connect(db ,options, (error) => {
        if (error) {
            console.log(error)
        } else {
            console.log("Connected to mongoDB")
        }
    })
    
    const Spot = mongoose.model('Spot', spotSchema)
    const User = mongoose.model('User', userSchema)
}

module.exports = init()