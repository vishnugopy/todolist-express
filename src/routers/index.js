const express = require("express");
const listcontroller = require("../controllers/listcontroller")
const taskcontroller = require("../controllers/taskcontroller")

const router = express.Router();

router.get("/" , listcontroller.findAll );
router.get("/lists/:todolist", listcontroller.findOne);
router.post("/lists/", listcontroller.addOne);
router.post("/tasks", taskcontroller.addtask);

router.post("/lists/:delete", listcontroller.delete);

module.exports = router;