const express = require('express');

const router = express.Router();

const classController = require('../controllers/classes.controllers');

router.get('/get/:type/:order', classController.getAll);
router.get('/get/:id', classController.getById);
router.post('/add', classController.add);
router.post('/update', classController.update);
router.post('/remove', classController.remove);

module.exports = router;
