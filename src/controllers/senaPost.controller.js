const httpStatus = require('http-status');
const pick = require('../utils/pick');
const ApiError = require('../utils/ApiError');
const catchAsync = require('../utils/catchAsync');
const { senaPostService } = require('../services');

const createSenaPost = catchAsync(async (req, res) => {
  const senaPost = await senaPostService.createSenaPost(req.body);
  res.status(httpStatus.CREATED).send(senaPost);
});

const getSenaPosts = catchAsync(async (req, res) => {
  const filter = pick(req.query, ['name', 'number']);
  const options = pick(req.query, ['sortBy', 'limit', 'page']);
  const result = await senaPostService.querySenaPost(filter, options);
  res.send(result);
});

const getSenaPost = catchAsync(async (req, res) => {
  const senaPost = await senaPostService.getSenaPostById(req.params.senaPostId);
  if (!senaPost) {
    throw new ApiError(httpStatus.NOT_FOUND, 'senaPost not found');
  }
  res.send(senaPost);
});

const updateSenaPost = catchAsync(async (req, res) => {
  const senaPost = await senaPostService.updateSenaPostById(req.params.senaPostId, req.body);
  res.send(senaPost);
});

const deleteSenaPost = catchAsync(async (req, res) => {
  await senaPostService.deleteSenaPostById(req.params.senaPostId);
  res.status(httpStatus.NO_CONTENT).send();
});

module.exports = {
  createSenaPost,
  getSenaPosts,
  getSenaPost,
  updateSenaPost,
  deleteSenaPost,
};
