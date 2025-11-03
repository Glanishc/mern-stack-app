const mongoose = require('mongoose')

const contactSchema = new mongoose.Schema({
    dlno :{
        type:String
    },
    email :{
        type:String
    },
    message :{
        type:String
    }
})

const Contact = mongoose.model('contact', contactSchema)
module.exports = Contact;