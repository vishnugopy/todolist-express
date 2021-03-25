const db = require("../db");



exports.getAll = (callback) => {
  db.query("SELECT * FROM list;", (error, result) => {
    if (error) {
      console.log("error: ", error);
      callback(error, null);
      return;
    }

    callback(null, result);
  })
}

exports.getOne = (todolist, callback) => {
  db.query(`SELECT * FROM list INNER JOIN tasks ON list.id_list = tasks.id_tasks WHERE tasks.id_tasks = ${todolist};`, (error, result) => {
    if (error) {
      console.log("error: ", error);
      callback(error, null);
      return;
    }

    callback(null, result);
  })
}

