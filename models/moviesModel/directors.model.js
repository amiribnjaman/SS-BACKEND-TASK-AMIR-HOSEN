const mongoose = require('mongoose')
const Schema = mongoose.Schema


const movieDirectorSchema = new Schema({
    movieId: {
        type: String
    },
    director: {
        type: String,
    },
    producer: {
        type: String,
    },
    writer: {
        type: String,
    },
})



module.exports = mongoose.model('MovieDirectors', movieDirectorSchema)