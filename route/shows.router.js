const express = require('express')
const router = express.Router()

const { 
    getAllShows } = require('../controller/shows.controller')

router.use('/', getAllShows)

module.exports = router