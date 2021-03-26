const db = require("../db");

exports.create = (task, callback) => {
    db.query(`INSERT INTO tasks (description , date , todolist ) VALUES ("${task.descreption}" ,"${task.date}" , ${task.todolist}  );`, (error, result) => {
      if (error) {
        console.log("error: ", error);
        callback(error, null);
        return;
      }
      
      callback(null, result);
    })
  }
  