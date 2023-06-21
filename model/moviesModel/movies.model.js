const mongoose = require('mongoose')

const movieSchema = new mongoose.Schema({
    // id: {
    //     type: String,
    //     required: true,
    // },
    movieName: {
        type: String,
        required: [true, 'Movei field is required']
    },
    region: {
        type: String,
        required: [true, 'region field is required']
    },
    createAt: {
        type: Date,
        default: Date.now
    }

})
  

module.exports = mongoose.model('Movies', movieSchema)