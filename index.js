// Main starting point of the application
const express = require('express');
const http = require('http');
const bodyParser = require('body-parser'); //use to parse incoming requests
const morgan = require('morgan'); //logger for debug
const router = require('./router');
const mongoose = require('mongoose');

const app = express();

// DB Setup
mongoose.connect('mongodb://localhost:/auth/auth'); //create database called auth

//App Setup
app.use(morgan('combined'));
app.use(bodyParser.json({ type: '*/*'}));
router(app);

//Server Setup
const port = process.env.PORT || 3090;
const server = http.createServer(app);
server.listen(port);
console.log(' server listening on  ', port);

