const Joi = require('joi');
const { objectId } = require('./custom.validation');

const createSenaPost = {
  body: Joi.object().keys({
    content: Joi.string().required(),
    image: Joi.array().required(),
  }),
};

const getSenaPost = {
  query: Joi.object().keys({
    content: Joi.string(),
    image: Joi.array(),
  }),
};

const getSenaPosts = {
  params: Joi.object().keys({
    senaPostId: Joi.string().custom(objectId),
  }),
};

const updateSenaPost = {
  params: Joi.object().keys({
    senaPostId: Joi.required().custom(objectId),
  }),
  body: Joi.object()
    .keys({
      country: Joi.string().email(),
      city: Joi.string(),
      prefrence: Joi.string(),
    })
    .min(1),
};

const deleteSenaPost = {
  params: Joi.object().keys({
    senaPostId: Joi.string().custom(objectId),
  }),
};

module.exports = {
  createSenaPost,
  getSenaPost,
  getSenaPosts,
  updateSenaPost,
  deleteSenaPost,
};
