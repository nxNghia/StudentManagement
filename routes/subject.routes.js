const express = require("express");

const router = express.Router();

const subjectController = require("../controllers/subject.controllers");

router.get("/get/:type/:order", subjectController.getAll);
router.get("/get/:id", subjectController.getById);
router.get("/getClasses/:id", subjectController.getAllClass);
router.post("/add", subjectController.add);
router.post("/update", subjectController.update);
router.post("/remove", subjectController.remove);

module.exports = router;
