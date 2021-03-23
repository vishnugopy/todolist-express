const express = require("express");
const listcontroller = require("../controllers/listcontroller")

const router = express.Router();

router.get("/" , listcontroller.findAll );

module.exports = router;