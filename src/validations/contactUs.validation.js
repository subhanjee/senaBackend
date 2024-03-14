const Joi = require('joi');
const { password, objectId } = require('./custom.validation');

const createContactUs = {
  body: Joi.object().keys({
    number: Joi.number().required(),
    email: Joi.string().email().required(),
    message: Joi.string().required(),
    name: Joi.string().required(),
  }),
};

const getContactUs = {
  query: Joi.object().keys({
    number: Joi.number(),
    email: Joi.string().email(),
    message: Joi.string(),
    name: Joi.string(),
  }),
};

const getContactsUs = {
  params: Joi.object().keys({
    contactUsId: Joi.string().custom(objectId),
  }),
};

const updateContactUs = {
  params: Joi.object().keys({
    contactUsId: Joi.required().custom(objectId),
  }),
  body: Joi.object()
    .keys({
      number: Joi.number(),
      email: Joi.string().email(),
      message: Joi.string(),
      name: Joi.string(),
    })
    .min(1),
};

const deleteContactUs = {
  params: Joi.object().keys({
    contactUsId: Joi.string().custom(objectId),
  }),
};

module.exports = {
  createContactUs,
  getContactUs,
  getContactsUs,
  updateContactUs,
  deleteContactUs,
};
