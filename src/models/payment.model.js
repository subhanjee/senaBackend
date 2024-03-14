const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcryptjs');
const { toJSON, paginate } = require('./plugins');
const { roles } = require('../config/roles');

const paymentSchema = mongoose.Schema(
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
    amount: {
      type: String,
      trim: true,
    },
    payment: {
      type: String,
      trim: true,
    },
    referral: {
      type: String,
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

// add plugin that converts mongoose to json
paymentSchema.plugin(toJSON);
paymentSchema.plugin(paginate);

/**
 * @typedef payment
 */
const payment = mongoose.model('payment', paymentSchema);

module.exports = payment;
