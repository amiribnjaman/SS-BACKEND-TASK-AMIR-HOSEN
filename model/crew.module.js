const mongoose = require('mongoose')

const crewSchema = new mongoose.Schema({
    id: {
        type: String,
        require: true,
    },
    directionTeam: {
        director: {
            type: String,
            require: true
        },
        producer: {
            type: String,
            require: true
        },
        others: {
            type: Array,
            require: false
        }
    },
    casts: {
        hero: {
            type: String,
            require: true
        },
        heroien: {
            type: String,
            require: true
        },
        othersCharrecters: {
            type: Array,
            require: false
        }
    },

})

module.exports = mongoose.model('Crew', crewSchema)