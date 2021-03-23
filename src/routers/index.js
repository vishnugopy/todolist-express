const express = require("express");
const listcontroller = require("../controllers/listcontroller")

const router = express.Router();

router.get("/" , (request , response)=>{
    const lists = listcontroller.findAll();
    response.render("home.ejs" , { lists })
});

module.exports = router;