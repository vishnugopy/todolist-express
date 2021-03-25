const { response } = require("express");
const Tasks = require("../models/tasks");


exports.addtask = (request, response) => {
    Tasks.create(request.body, (error, result) => {
      if (error) {
        response.send(error.message);
      }
  
      response.redirect("/");
    })
  }