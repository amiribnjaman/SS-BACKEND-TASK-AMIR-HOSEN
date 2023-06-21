const express = require('express')
const router = express.Router()
const {
    getAllMovies,
    createMovie,
    findASingleMoveiWithCrewDetials } = require('../controller/movies.controller')

router.get('/', getAllMovies)
router.post('/', createMovie)
router.get('/:id', findASingleMoveiWithCrewDetials)


module.exports = router