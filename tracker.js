const mysql = require("mysql");
const inquirer = require("inquirer");
const DbHelpers = require("./util/DbHelpers");

const dbHelpers = new DbHelpers();

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
    const todo = await inquirer.prompt({
      type: "list",
      message: "What would you like to do?",
      name: "userChoice",
      choices: [
        "View all Employees",
        "View all Employees by Department",
        "Add Employee",
        "Add Role",
        "Add Department",
      ],
    });
    const { userChoice } = todo;
    switch (userChoice) {
      case "View all Employees":
        await dbHelpers.viewAll(connection);
        await start();
        break;
      case "View all Employees by Department":
        await dbHelpers.viewByDept(connection);
        await start();
        break;
      case "Add Employee":
        await dbHelpers.addEmployee(connection);
        await start();
        break;
      case "Add Role":
        // addRole(connection);
        break;
      case "Add Dept":
        // addDept(connection);
        break;
      default:
        break;
    }
    return userChoice;
  } catch (err) {
    throw err;
  }
}
