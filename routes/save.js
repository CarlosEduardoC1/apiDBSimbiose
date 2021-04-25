const express = require('express');
const routes = express.Router();
const http = require('http');
const controller = require('../controller/save');

routes.post('/', controller.save);


module.exports = routes;