const express = require('express')
const { getAllUser, getSingleUserWithRole, createUser, signInUser, updateUserRole } = require('../controllers/users.controller')
const router = express.Router()


router.get('/', getAllUser)
router.get('/:id', getSingleUserWithRole)
router.post('/signup', createUser)
router.post('/login', signInUser)
router.put('/updaterole/:id', updateUserRole)


module.exports = router