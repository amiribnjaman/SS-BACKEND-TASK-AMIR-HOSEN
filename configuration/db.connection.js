const mongoose = require('mongoose')
const configuration = require('./configuration')

const dbURL = configuration.db.url

// MongoDB Connection through mongoose
mongoose.connect(dbURL)
    .then(() => {
        console.log('Mongodb is connected')
    })
    .catch(error => {
        console.log(error)
        process.exit(1)
    })


module.exports = mongoose