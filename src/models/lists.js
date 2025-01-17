const db = require("../db");



exports.getAll = (callback) => {
  db.query("SELECT * FROM list ORDER BY id_list DESC;", (error, result) => {
    if (error) {
      console.log("error: ", error);
      callback(error, null);
      return;
    }

    callback(null, result);
  })
}

exports.getOne = (todolist, callback) => {
  db.query(`SELECT * FROM tasks INNER JOIN list ON list.id_list = tasks.todolist WHERE list.id_list = ${todolist};`, (error, result) => {
    if (error) {
      console.log("error: ", error);
      callback(error, null);
      return;
    }

    callback(null, result);
  })
}

//add lists
exports.create = (lists, callback) => {
  db.query(`INSERT INTO list (name) VALUES ("${lists.name}");`, (error, result) => {
    if (error) {
      console.log("error: ", error);
      callback(error, null);
      return;
    }
    
    callback(null, result);
  })
}


//not working yet
exports.removeone = ( callback) => {
  db.query(`DELETE FROM list WHERE id_list = 3;`, (error, result) => {
    if (error) {
      console.log("error: ", error);
      callback(error, null);
      return;
    }

    callback(null, result);
  })
}


