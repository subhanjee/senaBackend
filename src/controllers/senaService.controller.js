const httpStatus = require('http-status');
const pick = require('../utils/pick');
const ApiError = require('../utils/ApiError');
const catchAsync = require('../utils/catchAsync');
const { senaService } = require('../services');

const createSenaService = catchAsync(async (req, res) => {
  const senaServices = await senaService.createSenaService(req.body);
  res.status(httpStatus.CREATED).send(senaServices);
});

const getSenaServices = catchAsync(async (req, res) => {
  const filter = pick(req.query, ['name']);
  const options = pick(req.query, ['sortBy', 'limit', 'page']);
  const result = await senaService.querySenaService(filter, options);
  res.send(result);
});

const getSenaService = catchAsync(async (req, res) => {
  const senaServices = await senaService.getSenaServiceById(req.params.senaServiceId);
  if (!senaServices) {
    throw new ApiError(httpStatus.NOT_FOUND, 'senaServices not found');
  }
  res.send(senaServices);
});

const updateSenaService = catchAsync(async (req, res) => {
  const senaServices = await senaService.updateSenaServiceById(req.params.senaServiceId, req.body);
  res.send(senaServices);
});

const deleteSenaService = catchAsync(async (req, res) => {
  await senaService.deleteSenaServiceById(req.params.senaServiceId);
  res.status(httpStatus.NO_CONTENT).send();
});

module.exports = {
  createSenaService,
  getSenaServices,
  getSenaService,
  updateSenaService,
  deleteSenaService,
};
