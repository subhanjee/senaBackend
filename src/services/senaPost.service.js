const httpStatus = require('http-status');
const { senaPost } = require('../models');
const ApiError = require('../utils/ApiError');

/**
 * Create a senaPost
 * @param {Object} senaPostBody
 * @returns {Promise<senaPost>}
 */
const createSenaPost = async (senaPostBody) => {
  return senaPost.create(senaPostBody);
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
const querySenaPost = async (filter, options) => {
  const acco = await senaPost.paginate(filter, options);
  return acco;
};

/**
 * Get senaPost by id
 * @param {ObjectId} id
 * @returns {Promise<senaPost>}
 */
const getSenaPostById = async (id) => {
  return senaPost.findById(id);
};

/**
 * Update senaPost by id
 * @param {ObjectId} senaPostId
 * @param {Object} updateBody
 * @returns {Promise<senaPost>}
 */
const updateSenaPostById = async (senaPostId, updateBody) => {
  // eslint-disable-next-line no-shadow
  const senaPost = await getSenaPostById(senaPostId);
  if (!senaPost) {
    throw new ApiError(httpStatus.NOT_FOUND, 'senaPost not found');
  }
  Object.assign(senaPost, updateBody);
  await senaPost.save();
  return senaPost;
};

/**
 * Delete senaPost by id
 * @param {ObjectId} senaPostId
 * @returns {Promise<senaPost>}
 */
const deleteSenaPostById = async (senaPostId) => {
  // eslint-disable-next-line no-shadow
  const senaPost = await getSenaPostById(senaPostId);
  if (!senaPost) {
    throw new ApiError(httpStatus.NOT_FOUND, 'senaPost not found');
  }
  await senaPost.remove();
  return senaPost;
};

module.exports = {
  createSenaPost,
  querySenaPost,
  getSenaPostById,
  updateSenaPostById,
  deleteSenaPostById,
};
