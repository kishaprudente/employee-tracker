const mysql = require("mysql");
const inquirer = require("inquirer");

class DbHelpers {
  viewAll(cntn) {
    console.log("Viewing all employees...");
    cntn.query("SELECT * FROM roles", (err, res) => {
      if (err) throw err;
      console.log("\n");
      console.table(res);
    });
  }
}

module.exports = DbHelpers;
