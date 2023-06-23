const express = require('express')
const cors = require('cors')
const app = express()
require('./config/db.connection')
const moviesRouter = require('./route/movies.router')
const showsRouter = require('./route/shows.router')


// App Middlewares
app.use(cors())
app.use(express.urlencoded({ extended: true }))
app.use(express.json())


// Movies Api endpoint
app.use('/api/movies', moviesRouter)
// Shows Api endpoint
app.use('/api/shows', showsRouter)


// Testing get route
app.get('/', (req, res) => {
    res.status(200).sendFile(__dirname + ('/view/index.html'))
})

// Handling url error
app.use((req, res, next) => {
    res.status(404).json({
        message: 'Bad request'
    })
})

// Handling server error
app.use((error, req, res, next) => {
    res.status(500).json({
        message: "Internal problem occurred"
    })
})


module.exports = app