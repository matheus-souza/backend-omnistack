const express = require('express');
const DevController = require('./controllers/DevController');
const LikeContoller = require('./controllers/LikeController');
const DislikeContoller = require('./controllers/DislikeController');

const routes = express.Router();

routes.get('/devs', DevController.index);
routes.post('/devs', DevController.store);
routes.post('/devs/:devId/likes', LikeContoller.store);
routes.post('/devs/:devId/dislikes', DislikeContoller.store);

module.exports = routes;
