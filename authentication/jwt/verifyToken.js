const jwt = require('jsonwebtoken')
const config = require('../../config/config')

// Verify access token function
const verifyToken = (accessToken) => {
    let email;
    jwt.verify(accessToken, config.secret_key.key, (err, decoded) => {
        if (decoded) {
            email = { email: decoded.email, statusCode: 200 }
        }
        if (err) {
            email = { error: 'Not found', statusCode: 403 }
        }
    });

    return email;
}

module.exports = { verifyToken }