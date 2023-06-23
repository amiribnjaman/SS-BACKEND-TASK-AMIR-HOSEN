const Users = require('../model/usersModel/user.model')
const { v4: uuidv4 } = require('uuid')
const md5 = require('md5')


// Api for create a new user
const createUser = async (req, res) => {
    try {
        const { name, email, password } = req.body
        const id = uuidv4()
        console.log(name, email, password, md5(password))
        const user = new Users({
            id,
            name,
            email,
            password: md5(password)
        })
        await user.save()
        res.status(201).send({ msg: 'A new user created successfully' })
    } catch (error) {
        res.status(500).send(error.message)
    }
}

// Api for signin or login
const signInUser = async (req, res) => {
    try {
        const { email, password } = req.body
        const userPass = md5(password)
        const user = await Users.findOne({ email: email })
        if (user && user.password === userPass) {
            res.status(200).json({ msg: 'User matched' })
        } else {
            res.status(400).send({ msg: 'user doesnt matched' })
        }
    } catch (error) {
        res.status(500).send(error.message)
    }
}


module.exports = { createUser, signInUser } 