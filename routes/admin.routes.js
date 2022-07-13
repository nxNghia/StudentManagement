const express = require('express');

const router = express.Router();

const adminController = require('../controllers/admin.controlers');

router.get('/get/:type/:order', adminController.getAll);
router.get('/get/:id', adminController.getById);
router.post('/add', adminController.add);
router.post('/update', adminController.update);
router.post('/remove', adminController.remove);

module.exports = router;
