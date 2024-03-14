const httpStatus = require('http-status');
const pick = require('../utils/pick');
const ApiError = require('../utils/ApiError');
const catchAsync = require('../utils/catchAsync');
const { courseService } = require('../services');

const createCourse = catchAsync(async (req, res) => {
  const contactUs = await courseService.createCourse(req.body);
  res.status(httpStatus.CREATED).send(contactUs);
});

const getCourses = catchAsync(async (req, res) => {
  const filter = pick(req.query, ['name']);
  const options = pick(req.query, ['sortBy', 'limit', 'page']);
  const result = await courseService.queryCourse(filter, options);
  res.send(result);
});

const getCourse = catchAsync(async (req, res) => {
  const contactUs = await courseService.getCourseById(req.params.courseId);
  if (!contactUs) {
    throw new ApiError(httpStatus.NOT_FOUND, 'contactUs not found');
  }
  res.send(contactUs);
});

const updateCourse = catchAsync(async (req, res) => {
  const contactUs = await courseService.updateCourseById(req.params.courseId, req.body);
  res.send(contactUs);
});

const deleteCourse = catchAsync(async (req, res) => {
  await courseService.deleteCourseById(req.params.courseId);
  res.status(httpStatus.NO_CONTENT).send();
});

module.exports = {
  createCourse,
  getCourses,
  getCourse,
  updateCourse,
  deleteCourse,
};
