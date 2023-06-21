const express = require('express')
const router = express.Router()
const { getAllMovies } = require('../controller/movies.controller')

router.get('/', getAllMovies)


module.exports = router