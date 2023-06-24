const express = require('express')
const router = express.Router()
const {
    getAllMovies,
    createMovie,
    findASingleMoveiWithCrewDetials } = require('../controllers/movies.controller')

router.get('/', getAllMovies)
router.post('/', createMovie)
router.get('/:id', findASingleMoveiWithCrewDetials)


module.exports = router