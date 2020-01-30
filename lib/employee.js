const inquirer = require("inquirer");
const query = [
  {
    type: "input",
    message: "What is the employee's name?",
    name: "empname"
  },
  {
    type: "input",
    message: "What is the employee's ID number?",
    name: "empid"
  },
  {
    type: "input",
    message: "What is the employee's email?",
    name: "empemail"
  }
];
inquirer.prompt(query).then(function(response) {
  console.log(response.empname);
  console.log(response.empid);
  console.log(response.empemail);
});

class Employee {
  constructor(id, name, title) {
    this.id = id;
    this.name = name;
    this.title = title;
  }
  getName() {}
  getId() {}
  getEmail() {}
  getRole() {
    return "Employee";
  }
}

module.exports = Employee;
