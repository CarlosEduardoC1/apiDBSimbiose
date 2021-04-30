const express = require('express');
const routes = express.Router();
const http = require('http');
const controller = require('../controller/cadastro');

routes.post('/save-data', controller.save);
routes.get('/get-data', controller.get);
routes.post('/filter-data/:filtro', controller.getWhere);
routes.post('/update-data/:id', controller.update);
routes.delete('/delete-data/:id', controller.delete);


module.exports = routes;