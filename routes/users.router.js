const express = require('express')
const { getAllUser, createUser, signInUser, updateUserRole } = require('../controllers/users.controller')
const router = express.Router()
const { createToken } = require('../authentication/jwt/createToken')
const { verifyToken } = require('../authentication/jwt/verifyToken')


router.get('/', getAllUser)
router.post('/signup', createToken, createUser)
router.post('/login', createToken, signInUser)
router.put('/updaterole/:id', verifyToken, updateUserRole)


module.exports = router