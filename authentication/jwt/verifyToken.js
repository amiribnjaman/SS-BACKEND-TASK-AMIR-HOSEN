const jwt = require('jsonwebtoken')
const configuration = require('../../configuration/configuration')

// Verify access token function
const verifyToken = (req, res, next) => {
    const token = req.authorization
    try {
        jwt.verify(token, configuration.secret_key.key, (err, decoded) => {
            if (decoded) {
                res.locals.email = { email: decoded.email, statusCode: 200 }
                next()
            }
            if (err) {
                res.locals.email = { error: 'Not found', statusCode: 403 }
                next()
            }
        });
    } catch (error) {

    }

}

module.exports = { verifyToken }