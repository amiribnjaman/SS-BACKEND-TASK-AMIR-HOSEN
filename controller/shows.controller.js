const Shows = require('../model/showsModel/shows.model')
const { v4: uuidv4 } = require('uuid')


// API endpoint to get all shows 
const getAllShows = async (req, res) => {
    try {
        const shows = await Shows.find({})
        res.status(200).send(shows)
    } catch (error) {
        console.log(error.message)
    }
}
// API endpoint TO post a show 
const createShow = async (req, res) => {
    try {
        const id = uuidv4()
        const createNewShow = new Shows({
            id,
            showName: req.body.showName,
            region: req.body.region,
        })
        await createNewShow.save()

        res.status(201).json({ msg: 'A new show created successfully' })

    } catch (error) {
        res.status(500).send(error.message)
    }
}



module.exports = { getAllShows, createShow } 