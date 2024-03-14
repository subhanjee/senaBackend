const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcryptjs');
const { toJSON, paginate } = require('./plugins');
const { roles } = require('../config/roles');

const contactUsSchema = mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
    },
    email: {
      type: String,
      trim: true,
    },
    number: {
      type: Number,
      trim: true,
    },
    message: {
      type: String,
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

// add plugin that converts mongoose to json
contactUsSchema.plugin(toJSON);
contactUsSchema.plugin(paginate);

/**
 * @typedef contactUs
 */
const contactUs = mongoose.model('contactUs', contactUsSchema);

module.exports = contactUs;
