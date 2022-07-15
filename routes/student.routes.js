const express = require("express");

const router = express.Router();

const studentController = require("../controllers/student.controllers");

router.get("/get/:type/:order", studentController.getAll);
router.get("/get/:id", studentController.getById);
router.post("/add", studentController.add);
router.get("/getClasses/:id", studentController.getAllClass);
router.post("/update", studentController.update);
router.post("/remove", studentController.remove);

module.exports = router;
