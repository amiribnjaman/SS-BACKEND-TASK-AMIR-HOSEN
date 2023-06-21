const Movies = require('../model/moviesModel/movies.model')
const Crew = require('../model/moviesModel/crew.model')


// API endpoint to get all movies 
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

// API endpoint TO post a movie 
const createMovie = async (req, res) => {
    try {
        const createNewMovie = new Movies({
            movieName: req.body.movieName,
            region: req.body.region,
        })
        const newMovie = await createNewMovie.save()

        // Movie director and others crew details post in Crew collection
        const creatCrewDetails = new Crew({
            movieId: newMovie._id,
            director: req.body.director
        })
        await creatCrewDetails.save()

        res.status(201).json({ msg: 'A movie created successfully' })

    } catch (error) {
        res.status(500).send(error.message)
    }
}



module.exports = { getAllMovies, createMovie, findASingleMoveiWithCrewDetials } 