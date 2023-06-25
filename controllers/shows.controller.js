const Shows = require('../models/showsModel/shows.model')
const ShowDirectors = require('../models/showsModel/directors.model')
const ShowStarrings = require('../models/showsModel/starring.model')
const Users = require('../models/usersModel/user.model')
const { v4: uuidv4 } = require('uuid')


// Get all shows 
const getAllShows = async (req, res) => {
    try {
        const shows = await Shows.find({}, { _id: 0, createdAt: 0, __v: 0 })
        res.status(200).send(shows)
    } catch (error) {
        res.status(500).send(error.message)
    }
}

// POST a new show 
const createShow = async (req, res) => {
    try {
        const id = uuidv4()
        const { showName, runtime, director, writer, host, guest } = req.body

        const email = req.res.locals.email
        const findEmail = Users.findOne({ email: email })

        if (findEmail.role == admin) {
            // Api end point for create a new show
            const createNewShow = new Shows({
                id,
                showName,
                runtime
            })

            // Show's director and others crew details post in director collection
            const creatDirectorsDetails = new ShowDirectors({
                showId: id,
                director,
                writer
            })

            // Show's Starring/actors details post in starring collection
            const creatStarringDetails = new ShowStarrings({
                showId: id,
                host,
                guest

            })

            // Save all info into collections through schema
            await createNewShow.save()
            await creatDirectorsDetails.save()
            await creatStarringDetails.save()

            res.status(201).json({ msg: 'A new show created successfully' })
        } else {
            res.status(401).json({ msg: 'Unauthorized user' })
        }

    } catch (error) {
        res.status(500).send(error.message)
    }
}

// Find a single show via id with crewDetails
const findASingleShowWithOtherCrew = async (req, res) => {
    try {
        let showFullInfo = []
        const id = req.params.id

        // Find data from shows, showDirectors and showStarrings collections
        const show = await Shows.findOne({ id: id }, { _id: 0, createdAt: 0, __v: 0 })
        const showDirector = await ShowDirectors.findOne({ showId: show.id }, { _id: 0, __v: 0 })
        const showStarring = await ShowStarrings.findOne({ showId: show.id }, { _id: 0, __v: 0 })

        // Fush all shows info into showFullInfo array
        showFullInfo.push({ 'show': show }, { 'director': showDirector }, { 'starring': showStarring })

        res.status(200).send(showFullInfo)
    } catch (error) {
        res.status(500).send(error.message)
    }
}


module.exports = { getAllShows, createShow, findASingleShowWithOtherCrew } 