const httpStatus = require('http-status');
const { accommodation } = require('../models');
const ApiError = require('../utils/ApiError');

/**
 * Create a accommodation
 * @param {Object} accommodationBody
 * @returns {Promise<accommodation>}
 */
const createAccommodation = async (accommodationBody) => {
  return accommodation.create(accommodationBody);
};

/**
 * Query for users
 * @param {Object} filter - Mongo filter
 * @param {Object} options - Query options
 * @param {string} [options.sortBy] - Sort option in the format: sortField:(desc|asc)
 * @param {number} [options.limit] - Maximum number of results per page (default = 10)
 * @param {number} [options.page] - Current page (default = 1)
 * @returns {Promise<QueryResult>}
 */
const queryAccommodation = async (filter, options) => {
  const acco = await accommodation.paginate(filter, options);
  return acco;
};

/**
 * Get accommodation by id
 * @param {ObjectId} id
 * @returns {Promise<accommodation>}
 */
const getAccommodationById = async (id) => {
  return accommodation.findById(id);
};

/**
 * Update accommodation by id
 * @param {ObjectId} accommodationId
 * @param {Object} updateBody
 * @returns {Promise<accommodation>}
 */
const updateAccommodationById = async (accommodationId, updateBody) => {
  const accommodation = await getAccommodationById(accommodationId);
  if (!accommodation) {
    throw new ApiError(httpStatus.NOT_FOUND, 'accommodation not found');
  }
  Object.assign(accommodation, updateBody);
  await accommodation.save();
  return accommodation;
};

/**
 * Delete accommodation by id
 * @param {ObjectId} accommodationId
 * @returns {Promise<accommodation>}
 */
const deleteAccommodationById = async (accommodationId) => {
  const accommodation = await getAccommodationById(accommodationId);
  if (!accommodation) {
    throw new ApiError(httpStatus.NOT_FOUND, 'accommodation not found');
  }
  await accommodation.remove();
  return accommodation;
};

module.exports = {
  createAccommodation,
  queryAccommodation,
  getAccommodationById,
  updateAccommodationById,
  deleteAccommodationById,
};
