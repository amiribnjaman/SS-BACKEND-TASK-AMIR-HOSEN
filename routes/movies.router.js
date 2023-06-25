const express = require('express')
const router = express.Router()
const {
    getAllMovies,
    createMovie,
    findASingleMoveiWithCrewDetials } = require('../controllers/movies.controller')
const { verifyToken } = require('../authentication/jwt/createToken')


router.get('/', getAllMovies)
router.post('/', verifyToken, createMovie)
router.get('/:id', findASingleMoveiWithCrewDetials)


module.exports = router