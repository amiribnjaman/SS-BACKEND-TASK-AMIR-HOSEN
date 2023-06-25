const jwt = require('jsonwebtoken')
const configuration = require('../../configuration/configuration')

const createToken = async (req, res, next) => {
    const email = req.body.email
    // console.log(email)
    const token = jwt.sign({ email }, configuration.secret_key.key)

    res.locals.token = token;
    next()
}


module.exports = { createToken }