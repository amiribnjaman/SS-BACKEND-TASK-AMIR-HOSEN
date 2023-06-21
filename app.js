const express = require('express')
const cors = require('cors')
const app = express()

// App Middlewares
app.use(cors())
app.use(express.urlencoded({ extended: true }))
app.use(express.json())


// Handling url error
app.use((req, res, next) => {
    res.status(404).json({
        message: 'Bad request'
    })
})

// Handling server error
app.use((error, req, res, next) => {
    res.status(500).json({
        message: "Internal problem occur"
    })
})


// Testing get route
app.get('/', (req, res) => {
    res.status(200).sendFile(__dirname + ('/view/index.html'))
})

module.exports = app