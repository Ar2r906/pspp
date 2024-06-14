const express = require('express');
const router = express.Router();
const { verifySignUp } = require('../middlewares/auth')
const contoller = require('../controllers/controller_auths');

router.post('/register', [verifySignUp.checkDuplicateEmail], contoller.signup);
router.post('/login', contoller.signin)
router.post('/change-access', contoller.changeAccess)

module.exports = router;