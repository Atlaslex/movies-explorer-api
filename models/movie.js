const mongoose = require('mongoose');

const {
  posterLinkValidator,
  trailerLinkValidator,
  thumbnailLinkValidator,
} = require('../validators/validators');

const movieSchema = new mongoose.Schema({
  country: {
    type: String,
    required: true,
  },

  director: {
    type: String,
    required: true,
  },

  duration: {
    type: Number,
    required: true,
  },

  year: {
    type: String,
    required: true,
  },

  description: {
    type: String,
    required: true,
  },

  image: {
    type: String,
    required: true,
    validate: posterLinkValidator,
  },
  trailerLink: {
    type: String,
    required: true,
    validate: trailerLinkValidator,
  },

  thumbnail: {
    type: String,
    required: true,
    validate: thumbnailLinkValidator,
  },

  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user',
    required: true,
  },

  movieId: {
    type: Number,
    required: true,
  },

  nameRU: {
    type: String,
    required: true,
  },

  nameEN: {
    type: String,
    required: true,
  },

});

module.exports = mongoose.model('movie', movieSchema);
