const express = require('express');
const auth = require('../../middlewares/auth');
const validate = require('../../middlewares/validate');
const senaServiceValidation = require('../../validations/senaServices.validation');
const senaServiceController = require('../../controllers/senaService.controller');

const router = express.Router();

router
  .route('/')
  .post(validate(senaServiceValidation.createSenaService), senaServiceController.createSenaService)
  .get(validate(senaServiceValidation.getSenaServices), senaServiceController.getSenaServices);

router
  .route('/:senaServiceId')
  .get(auth('senaService'), validate(senaServiceValidation.getSenaService), senaServiceController.getSenaService)
  .patch(auth('senaService'), validate(senaServiceValidation.updateSenaService), senaServiceController.updateSenaService)
  .delete(auth('senaService'), validate(senaServiceValidation.deleteSenaService), senaServiceController.deleteSenaService);

module.exports = router;
