const httpStatus = require('http-status');
const pick = require('../utils/pick');
const ApiError = require('../utils/ApiError');
const catchAsync = require('../utils/catchAsync');
const { accommodationService } = require('../services');

const createAccommodation = catchAsync(async (req, res) => {
  const accommodation = await accommodationService.createAccommodation(req.body);
  res.status(httpStatus.CREATED).send(accommodation);
});

const getAccommodations = catchAsync(async (req, res) => {
  const filter = pick(req.query, ['name', 'number']);
  const options = pick(req.query, ['sortBy', 'limit', 'page']);
  const result = await accommodationService.queryAccommodation(filter, options);
  res.send(result);
});

const getAccommodation = catchAsync(async (req, res) => {
  const accommodation = await accommodationService.getAccommodationById(req.params.accommodationId);
  if (!accommodation) {
    throw new ApiError(httpStatus.NOT_FOUND, 'accommodation not found');
  }
  res.send(accommodation);
});

const updateAccommodation = catchAsync(async (req, res) => {
  const accommodation = await accommodationService.updateAccommodationById(req.params.accommodationId, req.body);
  res.send(accommodation);
});

const deleteAccommodation = catchAsync(async (req, res) => {
  await accommodationService.deleteAccommodationById(req.params.accommodationId);
  res.status(httpStatus.NO_CONTENT).send();
});

module.exports = {
  createAccommodation,
  getAccommodations,
  getAccommodation,
  updateAccommodation,
  deleteAccommodation,
};
