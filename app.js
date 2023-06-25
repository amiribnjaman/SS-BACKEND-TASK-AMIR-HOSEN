const express = require('express')
const cors = require('cors')
const app = express()
require('./config/db.connection')
const moviesRouter = require('./routes/movies.router')
const showsRouter = require('./routes/shows.router')
const userRouter = require('./routes/users.router')
const cookieParser = require('cookie-parser')


// App Middlewares
app.use(cors())
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(cookieParser())

const corsOptions = {
    credentials: true,
    ///..other options
};

app.use(cors(corsOptions));


// app.use(function (req, res, next) {
//     res.header('Access-Control-Allow-Origin', req.headers.origin);
//     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//     next();
// })

// Movies Api endpoint
app.use('/api/movies', moviesRouter)
// Shows Api endpoint
app.use('/api/shows', showsRouter)
// Api endpoint for user
app.use('/api/users', userRouter)





// Testing get route
app.get('/', (req, res) => {
    res.sendFile(__dirname + ('/views/index.html'))
})
app.get('/signup', (req, res) => {
    res.sendFile(__dirname + ('/views/signup.html'))
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