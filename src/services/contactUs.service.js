const httpStatus = require('http-status');
const { contactUS } = require('../models');
const ApiError = require('../utils/ApiError');

/**
 * Create a contactUs
 * @param {Object} contactUsBody
 * @returns {Promise<contactUS>}
 */
const createContactUs = async (contactUsBody) => {
  return contactUS.create(contactUsBody);
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
const queryContactsUs = async (filter, options) => {
  const contacts = await contactUS.paginate(filter, options);
  return contacts;
};

/**
 * Get contactUs by id
 * @param {ObjectId} id
 * @returns {Promise<contactUS>}
 */
const getContactUsById = async (id) => {
  return contactUS.findById(id);
};

/**
 * Update contactUs by id
 * @param {ObjectId} contactUsId
 * @param {Object} updateBody
 * @returns {Promise<contactUs>}
 */
const updateContactUsById = async (contactUsId, updateBody) => {
  const contactUs = await getContactUsById(contactUsId);
  if (!contactUs) {
    throw new ApiError(httpStatus.NOT_FOUND, 'contactUs not found');
  }
  Object.assign(contactUs, updateBody);
  await contactUs.save();
  return contactUs;
};

/**
 * Delete contactUs by id
 * @param {ObjectId} contactUsId
 * @returns {Promise<contactUs>}
 */
const deleteContactUsById = async (contactUsId) => {
  const contactUs = await getContactUsById(contactUsId);
  if (!contactUs) {
    throw new ApiError(httpStatus.NOT_FOUND, 'contactUs not found');
  }
  await contactUs.remove();
  return contactUs;
};

module.exports = {
  createContactUs,
  queryContactsUs,
  getContactUsById,
  updateContactUsById,
  deleteContactUsById,
};
