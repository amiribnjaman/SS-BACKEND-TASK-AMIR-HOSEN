const mongoose = require('mongoose')
const Schema = mongoose.Schema


const movieStarringSchema = new Schema({
    movieId: { type: String },
    hero: {
        type: String,
    },
    heroine: {
        type: String,
    }

})



module.exports = mongoose.model('MovieStarring', movieStarringSchema)