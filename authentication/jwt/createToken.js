const jwt = require('jsonwebtoken')
const configuration = require('../../configuration/configuration')

// Token create function
const createToken = async (req, res, next) => {
    const email = req.body.email
    const token = jwt.sign({ email }, configuration.secret_key.key)

    res.locals.token = token;
    next()
}


module.exports = { createToken }