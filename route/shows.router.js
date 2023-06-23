const express = require('express')
const router = express.Router()

const {  createShow } = require('../controller/shows.controller')

router.use('/', createShow)

module.exports = router