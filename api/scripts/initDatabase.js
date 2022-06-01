var mongoose = require('mongoose');

var options = {
    connectTimeoutMS: 5000,
    useNewUrlParser: true,
    useUnifiedTopology: true
}

mongoose.connect('mongodb+srv://admin:30094561@cluster0.xutoc.mongodb.net/?retryWrites=true&w=majority',
    options,
    function(err) {
        console.log(err)
    })

var userSchema = mongoose.Schema({
    name: String,
    email: String,
    password: String
})

var spotSchema = mongoose.Schema({
    name: String,
    adress: String,
    rating: Number,
})

var userModel = mongoose.model('users', userSchema)
var spotModel = mongoose.model('spots', spotSchema)