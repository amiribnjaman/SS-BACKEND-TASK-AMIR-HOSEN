const express = require('express')
const router = express.Router()
const { getAllMovies, createMovie } = require('../controller/movies.controller')

router.get('/', getAllMovies)
router.post('/', createMovie)


module.exports = router