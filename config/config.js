require("dotenv").config()

const config = {
    db: {
        url: process.env.DB_URL 
    },
    secret_key: {
        key: process.env.SECRET_KEY
    }
}

module.exports = config