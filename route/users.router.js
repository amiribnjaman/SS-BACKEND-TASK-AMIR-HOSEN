const express = require('express')
const { router } = require('../app')
const router = express.Router()


router.get('/', createUser)


module.exports = router