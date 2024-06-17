const express = require('express')
const router = express.Router();
const { authjwt } = require('../middlewares/auth')
const { getUserByUid } = require('../controllers/controller_users')

router.get('/', [authjwt.verifyToken], getUserByUid)


module.exports = router