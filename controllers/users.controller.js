const Users = require('../model/usersModel/user.model')
const Role = require('../model/usersModel/role.model')
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

// get a user with role using id
const getSingleUserWithRole = async (req, res) => {
    try {
        const id = req.params.id
        const userRole = []
        const user = await Users.findOne({ id: id })
        const role = await Role.findOne({ userId: id })
        userRole.push(user, role)
        res.status(200).send(userRole)
    } catch (error) {
        res.status(500).send(error.message)
    }
}

// Api for create a new user
const createUser = async (req, res) => {
    try {
        const { name, email, password } = req.body
        const id = uuidv4()
        const user = new Users({
            id,
            name,
            email,
            password: md5(password)
        })
        const role = new Role({
            userId: id,
            role: 'user'
        })

        await user.save()
        await role.save()
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

// Update user's role user to admin
const updateUserRole = async (req, res) => {
    try {
        const id = req.params.id
        const updatedRole = Users.findOneAndUpdate({ userId: id }, { role: 'admin' }, {
            new: true
        })
        res.status(204).send(updatedRole)
    } catch (error) {
        res.status(500).send(error.message)
    }
}


module.exports = { getAllUser, getSingleUserWithRole, createUser, signInUser, updateUserRole } 