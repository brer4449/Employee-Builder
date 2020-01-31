require("./employee");
class Intern extends Employee {
  constructor(school) {
    this.school = school;
    super(id, name, email);
  }
  getSchool() {
    return this.school;
  }
  getRole() {
    return "Intern";
  }
}
