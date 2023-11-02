const express = require('express');
const cors = require('cors');

const server = express();

// Middlewares
server.use(cors());
server.use(express.json());

// Middleware para la ruta '/api'
server.use('/api', require('./routes/api.routes'));

module.exports = server;
