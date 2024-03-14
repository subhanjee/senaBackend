const httpStatus = require('http-status');
const pick = require('../utils/pick');
const ApiError = require('../utils/ApiError');
const catchAsync = require('../utils/catchAsync');
const { contactUsService } = require('../services');

const createContactUs = catchAsync(async (req, res) => {
  const contactUs = await contactUsService.createContactUs(req.body);
  res.status(httpStatus.CREATED).send(contactUs);
});

const getContactsUs = catchAsync(async (req, res) => {
  const filter = pick(req.query, ['name', 'number']);
  const options = pick(req.query, ['sortBy', 'limit', 'page']);
  const result = await contactUsService.queryContactsUs(filter, options);
  res.send(result);
});

const getContactUs = catchAsync(async (req, res) => {
  const contactUs = await contactUsService.getContactUsById(req.params.contactUsId);
  if (!contactUs) {
    throw new ApiError(httpStatus.NOT_FOUND, 'contactUs not found');
  }
  res.send(contactUs);
});

const updateContactUs = catchAsync(async (req, res) => {
  const contactUs = await contactUsService.updateContactUsById(req.params.contactUsId, req.body);
  res.send(contactUs);
});

const deleteContactUs = catchAsync(async (req, res) => {
  await contactUsService.deleteContactUsById(req.params.contactUsId);
  res.status(httpStatus.NO_CONTENT).send();
});

module.exports = {
  createContactUs,
  getContactsUs,
  getContactUs,
  updateContactUs,
  deleteContactUs,
};
