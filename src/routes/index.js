const express = require('express');
let UserController = require('../controllers/user');

let api = express.Router();

api.get('/pruebas', UserController.pruebas);
api.post('/registro',  UserController.saveUser);

module.exports = api;