const inquirer = require("inquirer");

const questions = [
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
inquirer.prompt(questions).then(function(answers) {
  // console.log(answers.empname);
  // console.log(answers.empid);
  // console.log(answers.empemail);
  let newemployee = new Employee(
    answers.empid,
    answers.empname,
    answers.empemail
  );
  console.log(newemployee);
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
