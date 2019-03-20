const express = require('express');
const helmet = require('helmet');

const db = require('../data/db.js');

const server = express();

server.use(helmet());
server.use(express.json());

server.get('/', (req, res) => {
	res
		.send(`<h2>Lambda WebDB III Challenge</h2>`);
	
});

module.exports = server;