const Movies = require('../model/movies.module')
const Crew = require('../model/crew.module')
const { v4: uuidv4 } = require('uuid');


// Get all movies endpoint
const getAllMovies = async (req, res) => {
    try {
        const movies = await Movies.find()
        res.status(200).send(movies)
    } catch (error) {
        console.log(error.message)
    }
}

// Get all crews endpoint
// const getAllcrews = async (req, res) => {
//     try {
//         const crews = await Crews.find()
//         res.status(200).send(crews)
//     } catch (error) {
//         console.log(error.message)
//     }
// }

// Find a single movie via id with crewDetails
const findASingleMoveiWithCrewDetials = async (req, res) => {
    try {
        const id = req.params.id
        const movie = await Movies.findOne({ id: id })
        res.status(200).send(movie)
    } catch (error) {

    }
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



module.exports = { getAllMovies, createMovie, findASingleMoveiWithCrewDetials } 