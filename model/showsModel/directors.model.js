const mongoose = require('mongoose')
const Schema = mongoose.Schema


const showDirectorSchema = new Schema({
    showId: {
        type: String
    },
    director: {
        type: String
    }
    // directorPanel: {
    //     director: {
    //         type: String,
    //         required: [true, 'Director field is required']
    //     },
    //     producer: {
    //         type: String,
    //         required: [true, 'Producer field is required']
    //     },
    //     musicDirector: {
    //         type: String,
    //         required: false
    //     },
    //     writer: {
    //         type: String,
    //         required: false
    //     },
    //     cinematographer: {
    //         type: String,
    //         required: false
    //     },
    // }

})



module.exports = mongoose.model('ShowDirectors', showDirectorSchema)