const Movies = require('../model/moviesModel/movies.model')
const MovieDirectors = require('../model/moviesModel/directors.model')
const MovieStarring = require('../model/moviesModel/starring.model')
// const mongoose = require('mongoose')

const { v4: uuidv4 } = require('uuid')


// API endpoint to get all movies 
const getAllMovies = async (req, res) => {
    try {
        const movies = await Movies.find({})
        res.status(200).send(movies)
    } catch (error) {
        res.status(500).send(error.message)
    }
}

// Find a single movie via id with crewDetails
const findASingleMoveiWithCrewDetials = async (req, res) => {
    try {
        let movieFullInfo = []
        const id = req.params.id
        const movie = await Movies.findOne({ id: id }, { _id: 0, createdAt: 0, __v: 0 })
        const movieDiretor = await MovieDirectors.findOne({ movieId: movie.id }, { _id: 0, __v: 0 })
        const movieStarring = await MovieStarring.findOne({ movieId: movie.id }, { _id: 0, __v: 0 })
        movieFullInfo.push(movie, movieDiretor, movieStarring)

        res.status(200).send(movieFullInfo)
    } catch (error) {
        console.log(error.message)
    }
}

// API endpoint TO post a movie 
const createMovie = async (req, res) => {
    try {

        const id = uuidv4()
        // A new movie creating api end point
        const createNewMovie = new Movies({
            id,
            movieName: req.body.movieName,
            region: req.body.region,
        })

        // Movie director and others crew details post in director collection
        const creatDirectorsDetails = new MovieDirectors({
            movieId: id,
            director: req.body.director
        })

        // Movie Starring/actors details post in starring collection
        const creatStarringDetails = new MovieStarring({
            movieId: id,
            actor: req.body.actor
        })

        // Save all info into collections through schema
        await createNewMovie.save()
        await creatDirectorsDetails.save()
        await creatStarringDetails.save()

        res.status(201).json({ msg: 'A new movie created successfully' })

    } catch (error) {
        res.status(500).send(error.message)
    }
}



module.exports = { getAllMovies, createMovie, findASingleMoveiWithCrewDetials } 