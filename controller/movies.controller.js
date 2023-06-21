const Movies = require('../model/movies.module')
const Crew = require('../model/crew.module')
const { v4: uuidv4 } = require('uuid');

// Get all movies endpoin
const getAllMovies = (req, res) => {
    res.status(200).json({ data: 'get all movies' })
}

// Post a movie endpoint
const createMovie = async (req, res) => {
    try {
        console.log(req.body)
        const createNewMovie = new Movies({
            id: uuidv4(),
            movieName: req.body.movieName,
            region: req.body.region,
        })

        // Movie director and others crew details post in Crew collection
        const newMovie = await createNewMovie.save()
        const creatCrewDetails = new Crew({
            movieId: newMovie.id,
            director: req.body.director
        })
        await creatCrewDetails.save()
        res.status(201).json({ msg: 'A movie created successfully' })

    } catch (error) {
        res.status(500).send(error.message)
    }
}

module.exports = { getAllMovies, createMovie } 