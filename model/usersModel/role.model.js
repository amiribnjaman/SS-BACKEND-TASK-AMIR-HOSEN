const mongoose = require('mongoose')
const Schema = mongoose.Schema


const roleSchema = new Schema({
    userId: { type: String },
    role: {type: String}
})



module.exports = mongoose.model('Role', roleSchema)