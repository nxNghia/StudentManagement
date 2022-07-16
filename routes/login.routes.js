const express = require('express');

const router = express.Router();

const classController = require('../controllers/login.controllers');

router.post('/', classController.LogIn);
router.post('/logout', classController.logOut);

module.exports = router;
