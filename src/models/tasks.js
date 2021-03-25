const db = require("../db");

exports.create = (task, callback) => {
    db.query(`INSERT INTO tasks (description , date ) VALUES ("${task.descreption}" ,"${task.date}"  );`, (error, result) => {
      if (error) {
        console.log("error: ", error);
        callback(error, null);
        return;
      }
      
      callback(null, result);
    })
  }
  