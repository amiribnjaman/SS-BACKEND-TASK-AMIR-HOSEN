const app = require('./app')
require("dotenv").config()
const port = process.env.PORT || 4000


// Server listening
app.listen(port, () => {
    console.log('Server listen on ', port)
})