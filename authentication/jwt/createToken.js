const jwt = require('jsonwebtoken')
const config = require('../../config/config')

const createToken = async (req, res, next) => {
    const email = req.body.email
    console.log(email)
    const token = jwt.sign({email}, config.secret_key.key)

    res.locals.token = token;  
    next()
}


module.exports = { createToken }