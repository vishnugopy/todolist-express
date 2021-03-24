const express = require("express");
const listcontroller = require("../controllers/listcontroller")

const router = express.Router();

router.get("/" , listcontroller.findAll );
router.get("/lists/:id", listcontroller.findOne);
router.post("/lists", listcontroller.addOne);

module.exports = router;