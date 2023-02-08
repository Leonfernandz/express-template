const {register, login} = require ('../controllers/usersController')
const express = require('express');
const route = express.Router();

route.post('/regis', register);

route.post('/auth', login);
module.exports = route; 