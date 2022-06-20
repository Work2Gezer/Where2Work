const mongoose = require('mongoose');
const spotSchema = require('./models/spot')
const userSchema = require('./models/user')
const data = require('./data.json')

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
    const spotsData = data[0].spots
    const usersData = data[0].users
    for(let spot of spotsData) {
        const newSpot = new Spot(spot)
        newSpot.save()
    }
    for(let user of usersData) {
        const newUser = new User(user)
        newUser.save()
    }
}

module.exports = init()