const mongoose = require('mongoose')
const { Schema } = mongoose


const movieSchema = new Schema({
    id: {
        type: String
    },
    movieName: {
        type: String,
    },
    runtime: {
        type: String
    },
    createdAt: {
        type: Date,
        default: Date.now
    }

})


module.exports = mongoose.model('Movies', movieSchema)