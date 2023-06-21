const Movies = require('../model/movies.module')

// Get all movies endpoin
const getAllMovies = (req, res) => {
    res.status(200).json({ data: 'get all movies' })
}

// Post a movie endpoint
const createMovie = async (req, res) => {
    
}

module.exports = { getAllMovies } 