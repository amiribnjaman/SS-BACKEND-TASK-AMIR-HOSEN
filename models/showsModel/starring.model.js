const mongoose = require('mongoose')
const Schema = mongoose.Schema


const showStarringSchema = new Schema({
    showId: { type: String },
    actor: {
        type: String
    },
    host: {
        type: String,
    },
    guest: {
        type: String,
    },

})



module.exports = mongoose.model('ShowStarring', showStarringSchema)