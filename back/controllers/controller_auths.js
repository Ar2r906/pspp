const { auth } = require('../models/auths')
const { user } = require('../models/users')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
require('dotenv').config()
const secret  = process.env.SECRET
const { v4: uuidv4 } = require('uuid')

const ACCESS_LIFETIME = 30; // 30 секунд
const REFRESH_LIFETIME = 60 * 60 * 24 * 60; // 2 месяца

const createToken = (uid, lifetime) => jwt.sign({ uid }, secret, { expiresIn: lifetime })
const createAccess = (uid) => createToken(uid, ACCESS_LIFETIME)
const createRefresh = (uid) => createToken(uid, REFRESH_LIFETIME)

exports.signup = async (req, res) => {
    try {
        const authed = await auth.create({
            email: req.body.email.toLowerCase(),
            password: bcrypt.hashSync(req.body.password, 8),
            uid: uuidv4(),
        })
        const createdUser = await user.create({
            uid: authed.uid,
            name: req.body.name,
            role: req.body.role,
            email: authed.email
        })

        console.log({ message: `Пользователь ${createdUser.email} успешно зарегистрирован` })
        return res.status(201).send({ message: 'Registred', email: createdUser.email })
    } catch (error) {
        return res.status(400).send({ message: error.message  })
    }
}