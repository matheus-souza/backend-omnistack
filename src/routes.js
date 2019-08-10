const express = require('express');
const DevController = require('./controllers/DevController');
const LikeContoller = require('./controllers/LikeController');

const routes = express.Router();

routes.post('/devs', DevController.store);
routes.post('/devs/:devId/likes', LikeContoller.store);

module.exports = routes;
