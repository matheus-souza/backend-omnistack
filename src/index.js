const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');

const server = express();

mongoose.connect('mongodb+srv://backomnistack:@souza123@cluster0-8ykdl.mongodb.net/onministack8?retryWrites=true&w=majority', {
    useNewUrlParser: true
});

server.use(express.json());
server.use(routes);

server.listen(3333);
