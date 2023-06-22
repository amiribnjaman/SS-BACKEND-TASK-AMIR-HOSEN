require("dotenv").config()

const config = {
    db: {
        url: process.env.DB_URL 
    }
}

module.exports = config