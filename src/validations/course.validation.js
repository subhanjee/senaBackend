const Joi = require('joi');
const { password, objectId } = require('./custom.validation');

const createCourse = {
  body: Joi.object().keys({
    country: Joi.string().required(),
    purpose: Joi.string().required(),
    field: Joi.string().required(),
    education: Joi.string(),
    marks: Joi.string(),
    intake: Joi.string().required(),
    test1: Joi.string(),
    test1Number: Joi.string(),
    test2: Joi.string(),
    test2Number: Joi.string(),
    workExperience: Joi.string(),
  }),
};

const getCourse = {
  query: Joi.object().keys({
    country: Joi.string(),
    purpose: Joi.string(),
    field: Joi.string(),
    education: Joi.string(),
    marks: Joi.string(),
    intake: Joi.string(),
    test1: Joi.string(),
    test1Number: Joi.string(),
    test2: Joi.string(),
    test2Number: Joi.string(),
    workExperience: Joi.string(),
  }),
};

const getCourses = {
  params: Joi.object().keys({
    courseId: Joi.string().custom(objectId),
  }),
};

const updateCourse = {
  params: Joi.object().keys({
    courseId: Joi.required().custom(objectId),
  }),
  body: Joi.object()
    .keys({
      country: Joi.string(),
      purpose: Joi.string(),
      field: Joi.string(),
      education: Joi.string(),
      marks: Joi.string(),
      intake: Joi.string(),
      test1: Joi.string(),
      test1Number: Joi.string(),
      test2: Joi.string(),
      test2Number: Joi.string(),
      workExperience: Joi.string(),
    })
    .min(1),
};

const deleteCourse = {
  params: Joi.object().keys({
    courseId: Joi.string().custom(objectId),
  }),
};

module.exports = {
  createCourse,
  getCourse,
  getCourses,
  updateCourse,
  deleteCourse,
};
