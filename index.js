const express = require('express');
const http = require('http');
const bodyParser = require('body-parser'); //use to parse incoming requests
const morgan = require('morgan'); //logger for debug
const router = require('./router');


const app = express();

//App Setup
app.use(morgan('combined'));
app.use(bodyParser.json({ type: '*/*'}));
router(app);

//Server Setup
const port = process.env.PORT || 3090;
const server = http.createServer(app);
server.listen(port);
console.log(' server listening on  ', port);

