const mongoose = require('mongoose')

const movieSchema = new mongoose.Schema({
    id: {
        type: String,
        require: true,
    },
    movieName: {
        type: String,
        require: true
    },
    region: {
        type: String,
        require: true
    },
    releaseDate: {
        type: Date,
        default: Date.now
    }

})


// directionTeam: {
//     director: {
//         type: String,
//         require: true
//     },
//     producer: {
//         type: String,
//         require: true
//     },
//     others: {
//         type: Array,
//         require: false
//     }
// },
// casts: {
//     hero: {
//         type: String,
//         require: true
//     },
//     heroien: {
//         type: String,
//         require: true
//     },
//     othersCarrecters: {
//         type: Array,
//         require: false
//     }
// }, 

module.exports = mongoose.model('Movies', movieSchema)