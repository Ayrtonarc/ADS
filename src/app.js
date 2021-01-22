//Se configura todo lo que tiene que ver con express

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const morgan = require('morgan'); /// sirve para ver peticiones
const app = express();

//app.use(morgan('dev'));

//cargar rutas
let user_routes = require('./routes/index');
//middlewares

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

// cors

//rutas
app.use('/api', user_routes);

module.exports = app;