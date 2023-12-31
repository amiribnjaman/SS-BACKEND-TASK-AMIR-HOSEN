require("dotenv").config()

// Project configuration
const configuration = {
    db: {
        url: process.env.DB_URL 
    },
    secret_key: {
        key: process.env.SECRET_KEY
    }
}

module.exports = configuration