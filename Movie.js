const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
    title: String,
    description: String,
    posterURL: String,
    rating: Number,
});

module.exports = mongoose.model('Movie', movieSchema);
