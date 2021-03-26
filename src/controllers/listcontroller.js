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

    let taskoftasks = result;
    let Tasks ;
    let taskid = todolist;
    

    if(result == ""  ){
      Tasks = "No tasks available Add it";
    } else{
      Tasks = result[0].name;
    }

    response.render("tasks.ejs", { Tasks,  taskoftasks , taskid });
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




exports.delete = (request, response) => {
  Lists.removeone(request.body, (error, result) => {
    if (error) {
      response.send(error.message);
    }

    response.redirect("/");
  })
}