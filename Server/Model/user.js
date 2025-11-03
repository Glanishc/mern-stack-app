const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    dlno: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    attending: { type: Boolean, default: false }
});

const User = mongoose.model('User', userSchema);
module.exports = User;
