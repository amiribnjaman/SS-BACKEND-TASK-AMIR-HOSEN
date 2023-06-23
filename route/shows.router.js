const express = require('express')
const router = express.Router()

const { getAllShows, createShow } = require('../controller/shows.controller')

router.get('/', getAllShows)
router.post('/', createShow)

module.exports = router