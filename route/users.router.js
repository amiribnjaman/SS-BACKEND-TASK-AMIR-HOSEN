const express = require('express')
const { createUser, signInUser } = require('../controller/users.controller')
const router = express.Router()


router.post('/signup', createUser)
router.post('/login', signInUser)


module.exports = router