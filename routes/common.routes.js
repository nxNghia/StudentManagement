const express = require('express');

const router = express.Router();

const commonController = require('../controllers/common.controllers');

router.get('/getAllFaculties', commonController.getAllFaculties);

module.exports = router;
