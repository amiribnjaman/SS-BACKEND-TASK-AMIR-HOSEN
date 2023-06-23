const mongoose = require('mongoose')
const { Schema } = mongoose


const showsSchema = new Schema({
    id: {
        type: String
    },
    showName: {
        type: String,
        required: [true, 'Show field is required']
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    // directors: [uuidv4(), { ref: 'Directors' }]

})


module.exports = mongoose.model('Shows', showsSchema)