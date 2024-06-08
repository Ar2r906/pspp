const express = require('express');
const router = express.Router();
const contoller = require('../controllers/controller_auths');

router.post('/register', contoller.signup);

module.exports = router;