const mongoose = require('mongoose')
const { Schema } = mongoose


const showSchema = new Schema({
    id: {
        type: String
    },
    showName: {
        type: String,
        required: [true, 'Show field is required']
    },
    runtime: {
        type: string
    },
    createdAt: {
        type: Date,
        default: Date.now
    }

})


module.exports = mongoose.model('Shows', showSchema)