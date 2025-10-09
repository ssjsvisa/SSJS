require('dotenv').config();
const express = require('express');
const cors = require('cors');
const newsRouter = require('./server/news');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use('/api', newsRouter);

app.get('/', (req, res) => {
	res.send('Backend server running.');
});

app.listen(PORT, () => {
	console.log(`Server listening on port ${PORT}`);
});
