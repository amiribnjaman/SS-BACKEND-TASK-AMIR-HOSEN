require("dotenv").config()

const config = {
    db: {
        url: process.env.DB 
    }
}

module.exports = config