const express = require('express')
const router = express.Router()

const { getAllShows, createShow, findASingleShowWithOtherCrew } = require('../controllers/shows.controller')
const { verifyToken } = require('../authentication/jwt/verifyToken')


router.get('/', getAllShows)
router.post('/', verifyToken, createShow)
router.get('/:id', findASingleShowWithOtherCrew)

module.exports = router