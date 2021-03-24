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


//step2
exports.findOne = (request, response) => {
  const { id } = request.params;

  Lists.getOne(id, (error, result) => {
    if (error) {
      response.send(error.message);
    }

    const students = result;
    const promoName = result[0].name;

    response.render("promo.ejs", { promoName, students });
  });
}

exports.addOne = (request, response) => {
  Lists.create(request.body, (error, result) => {
    if (error) {
      response.send(error.message);
    }

    response.redirect("/");
  })
}