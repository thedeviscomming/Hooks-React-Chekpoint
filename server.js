const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const movieRoutes = require('./routes/movies');

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use('/api/movies', movieRoutes);

mongoose.connect('mongodb://localhost:27017/cinema-app', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB Connected'))
    .catch(err => console.error(err));

app.listen(5000, () => {
    console.log('Server is running on http://localhost:5000');
});
