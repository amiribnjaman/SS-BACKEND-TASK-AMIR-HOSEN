const mongoose = require('mongoose')
const Schema = mongoose.Schema

const movieSchema = new Schema({
    id: {
        type: String,
        required: true,
    },
    movieName: {
        type: String,
        required: [true, 'Movei field is required']
    },
    countries: {
        type: String,
        required: [true, 'region field is required']
    },
    runtime: {
        type: String,
        required: [true, 'Run time field is required']
    },
    releasedDate: {
        type: String,
        required: [true, 'Realsed date is required']
    },
    languages: {
        type: [],
        required: false
    },
    budget: {
        type: Number,
        required: [true, 'Budget is required']
    },
    boxOffice: {
        type: Number,
        required: false
    },
    createdAt: {
        type: Date,
        default: Date.now
    }

})


module.exports = mongoose.model('Movies', movieSchema)