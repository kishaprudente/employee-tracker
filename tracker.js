const mysql = require("mysql");
const inquirer = require("inquirer");
const DbHelpers = require("./util/DbHelpers");
const PromptHelpers = require("./util/PromptHelpers");

const dbHelpers = new DbHelpers();
const promptHelpers = new PromptHelpers();

const connection = mysql.createConnection({
  host: "localhost",

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "password",
  database: "employee_trackerDB",
});

connection.connect(async (err) => {
  if (err) throw err;
  console.log("connected as id " + connection.threadId + "\n");
  await start();
});

async function start() {
  try {
    const userChoice = await promptHelpers.startTodo();
    switch (userChoice) {
      case "View all Employees":
        dbHelpers.viewAll(connection);
        // start();
        break;
      case "View all Employees by Department":
        // viewByDept();
        break;
      case "View all Employees by Manager":
        // viewByManager();
        break;
      case "Add Employee":
        // dbHelpers.addEmployee(connection);
        // viewByManager();
        break;
      default:
        break;
    }
  } catch (err) {
    throw err;
  }
}
