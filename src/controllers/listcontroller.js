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
  const { todolist } = request.params;

  Lists.getOne(todolist, (error, result) => {
    if (error) {
      response.send(error.message);
    }

    const taskoftasks = result;
    const Tasks = result[0].name;

    console.log("tasksss ", taskoftasks);
    console.log("tasksss ", Tasks);

    response.render("tasks.ejs", { Tasks,  taskoftasks });
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