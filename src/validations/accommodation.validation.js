const Joi = require('joi');
const { password, objectId } = require('./custom.validation');

const createAccommodation = {
  body: Joi.object().keys({
    country: Joi.string().required(),
    city: Joi.string().required(),
    prefrence: Joi.string().required(),
  }),
};

const getAccommodation = {
  query: Joi.object().keys({
    country: Joi.string().email(),
    city: Joi.string(),
    prefrence: Joi.string(),
  }),
};

const getAccommodations = {
  params: Joi.object().keys({
    accommodationId: Joi.string().custom(objectId),
  }),
};

const updateAccommodation = {
  params: Joi.object().keys({
    accommodationId: Joi.required().custom(objectId),
  }),
  body: Joi.object()
    .keys({
      country: Joi.string().email(),
      city: Joi.string(),
      prefrence: Joi.string(),
    })
    .min(1),
};

const deleteAccommodation = {
  params: Joi.object().keys({
    accommodationId: Joi.string().custom(objectId),
  }),
};

module.exports = {
  createAccommodation,
  getAccommodation,
  getAccommodations,
  updateAccommodation,
  deleteAccommodation,
};
