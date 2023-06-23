const mongoose = require('mongoose')
const Schema = mongoose.Schema


const userSchema = new Schema({
    id: { type: String },
    name: { type: String },
    email: { type: String, unique: true },
    password: { type: String }
})



module.exports = mongoose.model('Users', userSchema)