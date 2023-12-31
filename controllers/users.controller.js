const Users = require('../models/usersModel/user.model')
const { v4: uuidv4 } = require('uuid')
const md5 = require('md5')


// Get all the users
const getAllUser = async (req, res) => {
    try {
        const users = await Users.find({})
        res.status(200).send(users)
    } catch (error) {
        res.status(500).send(error.message)
    }
}


// Api for create a new user
const createUser = async (req, res) => {
    try {
        const token = req.res.locals.token
        
        const { name, email, password } = req.body
        const id = uuidv4()
        const user = new Users({
            id,
            name,
            email,
            password: md5(password),
            role: 'user',
            token
        })

        // Set cookie
        res.cookie("token", token, { httpOnly: false })

        await user.save()
        res.status(201).json({ msg: 'A new user created successfully', token: token })
    } catch (error) {
        res.status(500).send(error.message)
    }
}

// Api for signin or login
const signInUser = async (req, res) => {
    try {
        const token = req.res.locals.token

        const { email, password } = req.body
        const userPass = md5(password)
        const user = await Users.findOne({ email: email })
        if (user && user.password === userPass) {

            // Set cookie
            res.cookie("token", token, { httpOnly: false })
            res.status(200).json({ msg: 'User matched', token: token })

        } else {
            res.status(400).send({ msg: 'user doesnt matched' })
        }
    } catch (error) {
        res.status(500).send(error.message)
    }
}

// Update user's role from normal user to admin
const updateUserRole = async (req, res) => {
    try {
        const email = req.res.locals.email
        const findEmail = Users.findOne({ email: email })
        if (findEmail.role == 'admin') {
            const id = req.params.id
            const updatedRole = Users.findOneAndUpdate({ id: id }, { role: 'admin' }, {
                new: true
            })
            res.status(204).send(updatedRole)
        } else {
            res.status(401).json({ msg: 'Unauthorized user' })
        }
    } catch (error) {
        res.status(500).send(error.message)
    }
}


module.exports = { getAllUser, createUser, signInUser, updateUserRole } 