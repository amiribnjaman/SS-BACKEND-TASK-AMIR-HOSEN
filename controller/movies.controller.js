const Movies = require('../model/moviesModel/movies.model')
const Directors = require('../model/moviesModel/directors.model')
const starring = require('../model/moviesModel/starring.model')
const { v4: uuidv4 } = require('uuid')


// API endpoint to get all movies 
const getAllMovies = async (req, res) => {
    try {
        const movies = await Movies.aggregate([{
            $lookup: {
                from: 'Directors',
                localField: '_id',
                foreignField: 'movieId',
                as: 'directors'
            },
            $lookup: {
                from: 'starring',
                localField: '_id',
                foreignField: 'movieId',
                as: 'starring'
            }
        }]
        )
        res.status(200).send(movies)
    } catch (error) {
        console.log(error.message)
    }
}

// Find a single movie via id with crewDetails
const findASingleMoveiWithCrewDetials = async (req, res) => {
    try {
        const id = req.params.id

        // res.status(200).send(movies)
    } catch (error) {

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
        const creatStarringDetails = new starring({
            movieId: id,
            director: req.body.director
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