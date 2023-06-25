const jwt = require('jsonwebtoken')
const config = require('../../config/config')

// Verify access token function
const verifyToken = (req, res, next) => {
    const token = req.authorization
    console.log(req)
    try {
        jwt.verify(token, config.secret_key.key, (err, decoded) => {
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

    return email;
}

module.exports = { verifyToken }