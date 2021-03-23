const { response } = require("express");
const Lists = require("../models/lists");

exports.findAll = (request, response) => {
  Lists.getAll((error, lists) => {
    if (error) {
      response.send(error.message);
    }

    console.log("listsssss ", lists);

    response.render("home.ejs", { lists });
  });
}