const Movies = require('../model/moviesModel/movies.model')
const Directors = require('../model/moviesModel/directors.model')
const Starring = require('../model/moviesModel/starring.model')
const mongoose = require('mongoose')

const { v4: uuidv4 } = require('uuid')


// API endpoint to get all movies 
const getAllMovies = async (req, res) => {
    try {
        const movies = await Movies.find({})
        res.status(200).send(movies)
    } catch (error) {
        console.log(error.message)
    }
}

// Find a single movie via id with crewDetails
const findASingleMoveiWithCrewDetials = async (req, res) => {
    try {
        let movieFullInfo = []
        const id = req.params.id
        const movie = await Movies.findOne({ id: id })
        const movieDiretor = await Directors.findOne({ movieId: movie.id })
        const movieStarring = await Starring.findOne({ movieId: movie.id })
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
        const createNewMovie = new Movies({
            id,
            movieName: req.body.movieName,
            region: req.body.region,
        })

        // Movie director and others crew details post in director collection
        const creatDirectorsDetails = new Directors({
            movieId: id,
            director: req.body.director
        })

        // Movie Starring/actors details post in starring collection
        const creatStarringDetails = new Starring({
            movieId: id,
            actor: req.body.actor
        })

        await createNewMovie.save()
        await creatDirectorsDetails.save()
        await creatStarringDetails.save()

        res.status(201).json({ msg: 'A movie created successfully' })

    } catch (error) {
        res.status(500).send(error.message)
    }
}



module.exports = { getAllMovies, createMovie, findASingleMoveiWithCrewDetials } 