const express = require('express');
const dotenv = require('dotenv');
const colors = require('colors');
const { notFound, errorHandler } = require('./middleware/errorMiddleware');
const connectDB = require('./config/db');
const data = require('./data/products');
const productRoutes = require('./routes/productRoutes');

const PORT = 3001 || process.env.PORT;

dotenv.config();

connectDB();

const app = express();

app.get('/', (req, res) => {
	res.send('ProShop API');
});

app.use('/api/products', productRoutes);

app.use(notFound);
app.use(errorHandler);

app.listen(PORT, () => {
	console.log(
		`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold
	);
});
