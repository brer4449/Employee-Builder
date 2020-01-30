const inquirer = require("inquirer");

inquirer
  .prompt([
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
  ])
  .then(function(response) {
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

// const employee = new Employee(empid, empname, "Employee");
// console.log(employee);
// employee.getName();
// employee.getId();
// employee.getEmail();
// employee.getRole();
module.exports = Employee;
