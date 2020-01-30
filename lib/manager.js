require("./employee");
class Manager extends Employee {
  constructor(officenumber) {
    this.title = "Manager";
    this.officenumber = officenumber;
    super(id, name, "Manager");
  }
  getRole() {
    return "Manager";
  }
}
