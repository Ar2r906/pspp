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
            role: req.body.role,
            name: req.body.name,
        })
        const createdUser = await user.create({
            uid: authed.uid,
            name: authed.name,
            role: authed.role,
            email: authed.email
        })

        console.log({ message: `Пользователь ${createdUser.email} успешно зарегистрирован` })
        return res.status(201).send({ message: 'Registred', email: createdUser.email })
    } catch (error) {
        return res.status(400).send({ message: error.message  })
    }
};

exports.signin = async (req, res) => {
    try {
        const user = await auth.findOne({
            where: {
                email: req.body.email.toLowerCase()
            }
        })

        if(!user) {
            return res.status(403).send({ error: 'Invalid data' })
        }
        var passwordIsValid = bcrypt.compareSync(
            req.body.password,
            user.password
        )
        if(!passwordIsValid)  {
            return res.status(403).send({ error: 'Invalid data'  })
        }

        const token = createAccess(user.uid)
        const token_refresh = createRefresh(user.uid)

        await auth.update({AccessToken: token, RefreshToken: token_refresh},
            {where: {uid: user.uid} }
        )

        console.log({ message: `User ${user.email} signin` })

        return res.status(200).send({
            Message: 'Signin',
            Uid: user.uid,
            AccessToken: token,
            RefreshToken: token_refresh,
            Name: user.name,
            Email: user.email,
            Role: user.role
        })
    } catch (error) {
        return res.ststus(500).send({
            error: 'Server error',
        })
    }
}

exports.changeAccess = async(req, res) => {
    try {
        const { uid } = jwt.verify(token_refresh, secret)
        const currentUser = await auth.findOne({
            where: {uid: uid}
        })

        if(!currentUser) { return res.status(404).send({message: 'User not found'}) }

        const token = createAccess(currentUser.uid)
        const token_refresh = createRefresh(currentUser.uid)

        await auth.update({AccessToken: token, RefreshToken: token_refresh},
            {where: {uid: currentUser.uid}}
        )

        return res.ststus(200).send({
            Message: 'Success',
            Uid: currentUser.uid,
            AccessToken: token,
            RefreshToken: token_refresh
        })
    } catch (error) {
        return res.ststus(500).send({
            message: 'Server error',error
        })
    }
}