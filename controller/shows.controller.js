const Shows = require('../model/showsModel/shows.model')
const showDirector = require('../model/showsModel/directors.model')
const showStarring = require('../model/showsModel/starring.model')
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
        // Api end point for create a new show
        const createNewShow = new Shows({
            id,
            showName: req.body.showName,
            region: req.body.region,
        })

        // Show director and others crew details post in director collection
        const creatDirectorsDetails = new showDirector({
            movieId: id,
            director: req.body.director
        })

        // Show Starring/actors details post in starring collection
        const creatStarringDetails = new showStarring({
            movieId: id,
            actor: req.body.actor
        })


        await createNewShow.save()
        await creatDirectorsDetails.save()
        await creatStarringDetails.save()

        res.status(201).json({ msg: 'A new show created successfully' })

    } catch (error) {
        res.status(500).send(error.message)
    }
}



module.exports = { getAllShows, createShow } 