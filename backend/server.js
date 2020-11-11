const express = require('express');
const dotenv = require('dotenv');
const fs = require('fs');
const path = require('path');

const data = require('./data/products');

dotenv.config();

const app = express();

const PORT = 3001 || process.env.PORT;

app.get('/', (req, res) => {
	res.send('ProShop API');
});

app.get('/api/products', (req, res) => {
	res.json(data);
});

app.get('/api/products/:id', (req, res) => {
	const product = data.find(p => p._id === req.params.id);
	res.json(product);
});

app.listen(PORT, () => {
	console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`);
});
