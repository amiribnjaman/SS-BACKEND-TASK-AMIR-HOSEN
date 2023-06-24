const express = require('express')
const { getAllUser, getSingleUserWithRole, createUser, signInUser, updateUserRole } = require('../controllers/users.controller')
const router = express.Router()
const { createToken } = require('../authentication/jwt/createToken')


router.get('/', getAllUser)
// router.get('/:id', getSingleUserWithRole)
router.post('/signup', createToken, createUser)
router.post('/login', signInUser)
router.put('/updaterole/:id', updateUserRole)


module.exports = router