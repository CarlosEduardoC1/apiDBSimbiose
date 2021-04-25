const express = require('express');
const routes = express.Router();
const http = require('http');
const controller = require('../controller/cadastro');

routes.post('/save-data', controller.save);
routes.post('/get-data', controller.get);


module.exports = routes;