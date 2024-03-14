const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcryptjs');
const { toJSON, paginate } = require('./plugins');
const { roles } = require('../config/roles');
const { string } = require('joi');

const accommodationSchema = mongoose.Schema(
  {
    country: {
      type: String,
      trim: true,
    },
    city: {
      type: String,
      trim: true,
    },
    prefrence: {
      type: String,
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

// add plugin that converts mongoose to json
accommodationSchema.plugin(toJSON);
accommodationSchema.plugin(paginate);

/**
 * @typedef accommodation
 */
const accommodation = mongoose.model('accommodation', accommodationSchema);

module.exports = accommodation;
