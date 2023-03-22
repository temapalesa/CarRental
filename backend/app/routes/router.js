const express = require('express');
const router = express.Router();
const reg = require('../controllers/register');
const login = require('../controllers/login')


//routes for login and registering
router.post('/users/login', login.login)
router.post('/users/register', reg.register)


module.exports = router;  