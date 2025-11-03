const mongoose = require('mongoose')

function RunServer(){
    try {
        mongoose.connect('mongodb://localhost:27017');
        console.log('MongoDB Connected')
    } catch (error) {
        console.log(error)
    }
}
module.exports = RunServer;