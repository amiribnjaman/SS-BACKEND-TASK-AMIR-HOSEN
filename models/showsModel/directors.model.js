const mongoose = require('mongoose')
const Schema = mongoose.Schema


const showDirectorSchema = new Schema({
    showId: {
        type: String
    },
    director: {
        type: String,
    },
    writer:  {
        type: string
    }

})



module.exports = mongoose.model('ShowDirectors', showDirectorSchema)