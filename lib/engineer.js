const Employee = require("./employee.js");
class Engineer extends Employee {
  constructor(github) {
    this.github = github;
    super(id, name, title);
  }
  getGithub() {}
  getRole() {
    return "Engineer";
  }
}
