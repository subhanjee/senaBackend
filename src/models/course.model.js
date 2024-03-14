const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcryptjs');
const { toJSON, paginate } = require('./plugins');
const { roles } = require('../config/roles');

const courseSchema = mongoose.Schema(
  {
    country: {
      type: String,
      trim: true,
    },
    purpose: {
      type: String,
      trim: true,
    },
    field: {
      type: String,
      trim: true,
    },
    education: {
      type: String,
      trim: true,
    },
    marks: {
      type: String,
      trim: true,
    },
    intake: {
      type: String,
      trim: true,
    },
    test1: {
      type: String,
      trim: true,
    },
    test1Number: {
      type: String,
      trim: true,
    },
    test2: {
      type: String,
      trim: true,
    },
    test2Number: {
      type: String,
      trim: true,
    },
    workExperience: {
      type: String,
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

// add plugin that converts mongoose to json
courseSchema.plugin(toJSON);
courseSchema.plugin(paginate);

/**
 * @typedef course
 */
const course = mongoose.model('course', courseSchema);

module.exports = course;
