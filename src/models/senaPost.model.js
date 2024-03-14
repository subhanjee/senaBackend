const mongoose = require('mongoose');
const { toJSON, paginate } = require('./plugins');

const senaPostSchema = mongoose.Schema(
  {
    content: {
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
senaPostSchema.plugin(toJSON);
senaPostSchema.plugin(paginate);

/**
 * @typedef senaPost
 */
const senaPost = mongoose.model('senaPost', senaPostSchema);

module.exports = senaPost;
