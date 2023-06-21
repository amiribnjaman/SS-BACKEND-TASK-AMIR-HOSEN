const express = require('express')
const cors = require('cors')
const app = express()

// App Middlewares
app.use(cors())
app.use(express.urlencoded({ extended: true }))
app.use(express.json())



// Testing get route
app.get('/', (req, res) => {
    res.status(200).sendFile(__dirname + ('/view/index.html'))
})

module.exports = app