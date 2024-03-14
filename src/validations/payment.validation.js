const Joi = require('joi');
const { password, objectId } = require('./custom.validation');

const createPayment = {
  body: Joi.object().keys({
    number: Joi.number().required(),
    email: Joi.string().email().required(),
    amount: Joi.string().required(),
    payment: Joi.string().required(),
    referral: Joi.string().required(),
    name: Joi.string().required(),
  }),
};

const getPayment = {
  query: Joi.object().keys({
    number: Joi.number(),
    email: Joi.string().email(),
    amount: Joi.string(),
    payment: Joi.string(),
    referral: Joi.string(),
    name: Joi.string(),
  }),
};

const getPayments = {
  params: Joi.object().keys({
    paymentId: Joi.string().custom(objectId),
  }),
};

const updatePayment = {
  params: Joi.object().keys({
    paymentId: Joi.required().custom(objectId),
  }),
  body: Joi.object()
    .keys({
      number: Joi.number(),
      email: Joi.string().email(),
      amount: Joi.string(),
      payment: Joi.string(),
      referral: Joi.string(),
      name: Joi.string(),
    })
    .min(1),
};

const deletePayment = {
  params: Joi.object().keys({
    paymentId: Joi.string().custom(objectId),
  }),
};

module.exports = {
  createPayment,
  getPayment,
  getPayments,
  updatePayment,
  deletePayment,
};
