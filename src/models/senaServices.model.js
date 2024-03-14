const mongoose = require('mongoose');
const { toJSON, paginate } = require('./plugins');

const senaServicesSchema = mongoose.Schema(
  {
    title: {
      type: String,
      trim: true,
    },
    description: {
      type: String,
      trim: true,
    },
    price: {
      type: String,
      trim: true,
    },
    image: {
      type: Array,
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

// add plugin that converts mongoose to json
senaServicesSchema.plugin(toJSON);
senaServicesSchema.plugin(paginate);

/**
 * @typedef senaservice
 */
const senaservice = mongoose.model('senaservice', senaServicesSchema);

module.exports = senaservice;
