const inquirer = require("inquirer");

class PromptHelpers {
  async startTodo() {
    try {
      const todo = await inquirer.prompt({
        type: "list",
        message: "What would you like to do?",
        name: "userChoice",
        choices: [
          "View all Employees",
          "View all Employees by Department",
          "View all employees by Manager",
          "Add Employee",
        ],
      });
      return todo.userChoice;
    } catch (err) {
      throw err;
    }
  }
}

module.exports = PromptHelpers;
