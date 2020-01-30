// The different employee types should all inherit some methods and properties from a base class of Employee.

//Min requirements
//Functional application.
// GitHub repository with a unique name and a README describing the project.
// User can use the CLI to generate an HTML page that displays information about their team.
// All tests must pass.

// The first class is an Employee parent class with the following properties and methods:
// name
// id
// title
// getName()
// getId()
// getEmail()
// getRole() // Returns 'Employee'

// The other three classes will extend Employee.
// In addition to Employee's properties and methods, MANAGER will also have:
// officeNumber
// getRole() // Overridden to return 'Manager'
// In addition to Employee's properties and methods, ENGINEER will also have:
// github // GitHub username
// getGithub()
// getRole() // Overridden to return 'Engineer'
// In addition to Employee's properties and methods, INTERN will also have:
// school
// getSchool()
// getRole() // Overridden to return 'Intern'
