const {register, login, keepLogin} = require ('../controllers/usersController')
const express = require('express');
const route = express.Router();

route.post('/regis', register);
route.post('/auth', login);
route.get('/keeplogin', keepLogin);
module.exports = route; 