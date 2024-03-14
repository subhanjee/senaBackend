const Joi = require('joi');
const { objectId } = require('./custom.validation');

const createSenaService = {
  body: Joi.object().keys({
    title: Joi.string().required(),
    description: Joi.string().required(),
    price: Joi.string().required(),
    image: Joi.array(),
  }),
};

const getSenaService = {
  query: Joi.object().keys({
    title: Joi.string(),
    description: Joi.string(),
    price: Joi.string(),
    image: Joi.array(),
  }),
};

const getSenaServices = {
  params: Joi.object().keys({
    senaServiceId: Joi.string().custom(objectId),
  }),
};

const updateSenaService = {
  params: Joi.object().keys({
    senaServiceId: Joi.required().custom(objectId),
  }),
  body: Joi.object()
    .keys({
      title: Joi.string(),
      description: Joi.string(),
      price: Joi.string(),
      image: Joi.array(),
    })
    .min(1),
};

const deleteSenaService = {
  params: Joi.object().keys({
    senaServiceId: Joi.string().custom(objectId),
  }),
};

module.exports = {
  createSenaService,
  getSenaService,
  getSenaServices,
  updateSenaService,
  deleteSenaService,
};
