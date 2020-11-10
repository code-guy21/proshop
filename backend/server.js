const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();
const data = require('./data/products');

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
	console.log(`Listening on PORT:${PORT}`);
});
