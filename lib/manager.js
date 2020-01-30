require("./employee");
class Manager extends Employee {
  constructor(officenumber) {
    this.officenumber = officenumber;
    super(id, name, title);
  }
  getRole() {
    return "Manager";
  }
}
