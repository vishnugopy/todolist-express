const db = require("../db");

class Lists {
  constructor(props) {
    const {name} = props;

    this.name = name;
  }

  static getAll(callback) {
    db.query("SELECT * FROM lists", (error, result) => {
      if (error) {
        console.log("error: ", error);
        callback(error, null);
        return;
      }

      console.log(result);
      callback(null, result);
    })
  }
}

module.exports = Lists;