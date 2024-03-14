const httpStatus = require('http-status');
const pick = require('../utils/pick');
const ApiError = require('../utils/ApiError');
const catchAsync = require('../utils/catchAsync');
const { paymentService } = require('../services');

const createPayment = catchAsync(async (req, res) => {
  const contactUs = await paymentService.createPayment(req.body);
  res.status(httpStatus.CREATED).send(contactUs);
});

const getPayments = catchAsync(async (req, res) => {
  const filter = pick(req.query, ['name', 'number']);
  const options = pick(req.query, ['sortBy', 'limit', 'page']);
  const result = await paymentService.queryPayment(filter, options);
  res.send(result);
});

const getPayment = catchAsync(async (req, res) => {
  const contactUs = await paymentService.getPaymentById(req.params.paymentId);
  if (!contactUs) {
    throw new ApiError(httpStatus.NOT_FOUND, 'contactUs not found');
  }
  res.send(contactUs);
});

const updatePayment = catchAsync(async (req, res) => {
  const contactUs = await paymentService.updatePaymentById(req.params.paymentId, req.body);
  res.send(contactUs);
});

const deletePayment = catchAsync(async (req, res) => {
  await paymentService.deletePaymentById(req.params.paymentId);
  res.status(httpStatus.NO_CONTENT).send();
});

module.exports = {
  createPayment,
  getPayments,
  getPayment,
  updatePayment,
  deletePayment,
};
