const httpStatus = require('http-status');
const { senaServices } = require('../models');
const ApiError = require('../utils/ApiError');

/**
 * Create a senaServices
 * @param {Object} senaServiceBody
 * @returns {Promise<senaServices>}
 */
const createSenaService = async (senaServiceBody) => {
  return senaServices.create(senaServiceBody);
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
const querySenaService = async (filter, options) => {
  const corse = await senaServices.paginate(filter, options);
  return corse;
};

/**
 * Get senaServices by id
 * @param {ObjectId} id
 * @returns {Promise<senaServices>}
 */
const getSenaServiceById = async (id) => {
  return senaServices.findById(id);
};

/**
 * Update senaServices by id
 * @param {ObjectId} senaServiceId
 * @param {Object} updateBody
 * @returns {Promise<senaServices>}
 */
const updateSenaServiceById = async (senaServiceId, updateBody) => {
  // eslint-disable-next-line no-shadow
  const senaServices = await getSenaServiceById(senaServiceId);
  if (!senaServices) {
    throw new ApiError(httpStatus.NOT_FOUND, 'senaServices not found');
  }
  Object.assign(senaServices, updateBody);
  await senaServices.save();
  return senaServices;
};

/**
 * Delete senaServices by id
 * @param {ObjectId} senaServiceId
 * @returns {Promise<senaServices>}
 */
const deleteSenaServiceById = async (senaServiceId) => {
  // eslint-disable-next-line no-shadow
  const senaService = await getSenaServiceById(senaServiceId);
  if (!senaService) {
    throw new ApiError(httpStatus.NOT_FOUND, 'senaService not found');
  }
  await senaService.remove();
  return senaService;
};

module.exports = {
  createSenaService,
  querySenaService,
  getSenaServiceById,
  updateSenaServiceById,
  deleteSenaServiceById,
};
