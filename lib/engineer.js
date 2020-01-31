const Employee = require("./employee.js");
class Engineer extends Employee {
  constructor(github) {
    this.github = github;
    super(id, name, email);
  }
  getGithub() {
    return this.github;
  }
  getRole() {
    return "Engineer";
  }
}
