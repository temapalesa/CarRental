const express = require('express');
const router = express.Router();

const users = require('../controllers/users/users');
const reg = require('../controllers/users/register');
const login = require('../controllers/users/login')



//routes for login and registering
router.post('/users/login', login.login)
router.post('/users/register', reg.register)

//routes for getting users
router.get('/users/getAllUsers', users.getUsers)


module.exports = router;  