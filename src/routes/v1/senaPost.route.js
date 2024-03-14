const express = require('express');
const auth = require('../../middlewares/auth');
const validate = require('../../middlewares/validate');
const senaPostValidation = require('../../validations/senaPost.validation');
const senaPostController = require('../../controllers/senaPost.controller');

const router = express.Router();

router
  .route('/')
  .post(validate(senaPostValidation.createSenaPost), senaPostController.createSenaPost)
  .get(validate(senaPostValidation.getSenaPosts), senaPostController.getSenaPosts);

router
  .route('/:senaPostId')
  .get(auth('senaPost'), validate(senaPostValidation.getSenaPost), senaPostController.getSenaPost)
  .patch(auth('senaPost'), validate(senaPostValidation.updateSenaPost), senaPostController.updateSenaPost)
  .delete(auth('senaPost'), validate(senaPostValidation.deleteSenaPost), senaPostController.deleteSenaPost);

module.exports = router;
