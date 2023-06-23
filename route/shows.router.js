const express = require('express')
const router = express.Router()

const { getAllShows, createShow, findASingleShowWithOtherCrew } = require('../controller/shows.controller')

router.get('/', getAllShows)
router.post('/', createShow)
router.get('/:id', findASingleShowWithOtherCrew)

module.exports = router