const mongoose = require('mongoose')
const { Schema } = mongoose
const { v4: uuidv4 } = require('uuid')


const movieSchema = new Schema({
    // id: uuidv4(),
    id: {
        type: String
    },
    movieName: {
        type: String,
        required: [true, 'Movie field is required']
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    // directors: [uuidv4(), { ref: 'Directors' }]

})


module.exports = mongoose.model('Movies', movieSchema)