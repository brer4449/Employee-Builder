class Intern extends Employee {
  constructor(school) {
    this.school = school;
    super(id, name, title);
  }
  getSchool() {}
  getRole() {
    return "Intern";
  }
}
