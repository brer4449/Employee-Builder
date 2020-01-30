const inquirer = require("inquirer");
const fs = require("fs");

const questions = [
  {
    type: "input",
    message: "What is the employee's ID number?",
    name: "id"
  },
  {
    type: "input",
    message: "What is the employee's name?",
    name: "name"
  },
  {
    type: "input",
    message: "What is the employee's email?",
    name: "email"
  }
];

inquirer.prompt(questions).then(function(answers) {
  // console.log(answers.name);
  // console.log(answers.id);
  // console.log(answers.email);
  let newemployee = new Employee(answers.id, answers.name, answers.email);
  let writeData = [
    `Employee Name: ${newemployee.getName()}`,
    `Employee ID: ${newemployee.getId()}`,
    `Employee Email: ${newemployee.getEmail()}`,
    `Employee Role: ${newemployee.getRole()}`,
    "-".repeat(20)
  ].join("\n");
  console.log(newemployee);

  fs.writeFile("log.txt", writeData, err => {
    if (err) throw err;
  });
});

class Employee {
  constructor(id, name, email) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.role = "Employee";
  }
  getName() {
    return this.name;
  }
  getId() {
    return this.id;
  }
  getEmail() {
    return this.email;
  }
  getRole() {
    return this.role;
  }
}

module.exports = Employee;
