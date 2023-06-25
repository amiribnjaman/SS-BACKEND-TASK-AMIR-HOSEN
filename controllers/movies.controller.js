const Movies = require('../models/moviesModel/movies.model')
const MovieDirectors = require('../models/moviesModel/directors.model')
const MovieStarring = require('../models/moviesModel/starring.model')
const Users = require('../models/usersModel/user.model')

const { v4: uuidv4 } = require('uuid')


// API endpoint to get all movies 
const getAllMovies = async (req, res) => {
    try {
        const movies = await Movies.find({}, { _id: 0, createdAt: 0, __v: 0 })
        res.status(200).send(movies)
    } catch (error) {
        res.status(500).send(error.message)
    }
}

// Find a single movie via id with crewDetails
const findASingleMoveiWithCrewDetials = async (req, res) => {
    try {
        let movieFullInfo = []
        const id = req.params?.id
        // console.log(req.params, id)

        // Find data from movies, moviesdirectors and movieStarring collections
        const movie = await Movies.findOne({ id: id }, { _id: 0, createdAt: 0, __v: 0 })
        const movieDiretor = await MovieDirectors.findOne({ movieId: movie.id }, { _id: 0, __v: 0 })
        const movieStarring = await MovieStarring.findOne({ movieId: movie.id }, { _id: 0, __v: 0 })
        movieFullInfo.push({ "movie": movie }, { "director": movieDiretor }, { "starring": movieStarring })

        res.status(200).send(movieFullInfo)
    } catch (error) {
        console.log(error.message)
    }
}

// API endpoint TO post a movie 
const createMovie = async (req, res) => {
    try {

        const id = uuidv4()
        const { movieName, runtime, director, producer, writer, hero, heroine } = req.body

        const email = req.res.locals.email
        const findEmail = Users.findOne({ email: email })
        if (findEmail.role == 'admin') {
            // A new movie creating api end point
            const createNewMovie = new Movies({
                id,
                movieName,
                runtime
            })

            // Movie director and others crew details post in director collection
            const creatDirectorsDetails = new MovieDirectors({
                movieId: id,
                director,
                producer,
                writer

            })

            // Movie Starring/actors details post in starring collection
            const creatStarringDetails = new MovieStarring({
                movieId: id,
                hero,
                heroine,
            })

            // Save all info into collections through schema
            await createNewMovie.save()
            await creatDirectorsDetails.save()
            await creatStarringDetails.save()

            res.status(201).json({ msg: 'A new movie created successfully' })
        } else {
            res.status(400).json({ msg: 'User not authorized' })
        }


    } catch (error) {
        res.status(500).send(error.message)
    }
}



module.exports = { getAllMovies, createMovie, findASingleMoveiWithCrewDetials } 