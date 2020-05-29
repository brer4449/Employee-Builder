const inquirer = require("inquirer");
const fs = require("fs");
const Employee = require("./lib/employee");
const Manager = require("./lib/manager");
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");

//Array of question objects
const questions = [
  {
    type: "input",
    message: "What is the employee's name?",
    name: "name",
  },
  {
    type: "input",
    message: "What is the employee's ID number?",
    name: "id",
  },
  {
    type: "input",
    message: "What is the employee's email?",
    name: "email",
  },
  {
    type: "list",
    message: "Pick a job title:",
    choices: ["Engineer", "Intern", "Employee"],
    name: "title",
  },
];

const managerQuestions = [
  {
    type: "input",
    message: "What is the manager's name?",
    name: "name",
  },
  {
    type: "input",
    message: "What is the manager's ID number?",
    name: "id",
  },
  {
    type: "input",
    message: "What is the manager's email?",
    name: "email",
  },
  {
    type: "input",
    message: "What is their office number?",
    name: "officeNum",
  },
];

questionPrompt = () => {
  inquirer.prompt(managerQuestions).then(function (managerAnswer) {
    let newManager = createManager(managerAnswer);
    let writeData = [
      `Name: ${newManager.getName()}`,
      `ID: ${newManager.getId()}`,
      `Email: ${newManager.getEmail()}`,
      `Role: ${newManager.getRole()}`,
      `Office Number: ${newManager.officeNum}`,
      "-".repeat(20),
      `\n`,
    ].join("\n");
    fs.appendFile("log.txt", writeData, (err) => {
      if (err) throw err;
    });
    exitPrompt();
  });
};
questionPrompt();

//Function to exit series of questions or continue making a team
exitPrompt = () => {
  inquirer
    .prompt({
      type: "confirm",
      message: "Do you want to make another employee?",
      name: "confirmation",
    })
    .then((answers) => {
      if (answers.confirmation === false) {
        return console.log(
          "Your team has been assembled and has been written to the log.txt file. Goodbye."
        );
      } else {
        console.log("Employee successfully added, let's add another.");
        employeeQuestions();
      }
    });
};

employeeQuestions = () => {
  inquirer.prompt(questions).then(function (answers) {
    switch (answers.title) {
      case "Engineer":
        inquirer
          .prompt([
            {
              type: "input",
              message: "What is their Github user name?",
              name: "github",
            },
          ])
          .then(function (engineerAnswer) {
            let newEngineer = createEngineer(answers, engineerAnswer);
            let writeData = [
              `Name: ${newEngineer.getName()}`,
              `ID: ${newEngineer.getId()}`,
              `Email: ${newEngineer.getEmail()}`,
              `Role: ${newEngineer.getRole()}`,
              `Github Username: ${newEngineer.getGithub()}`,
              "-".repeat(20),
              `\n`,
            ].join("\n");
            fs.appendFile("log.txt", writeData, (err) => {
              if (err) throw err;
            });
            exitPrompt();
          });
        break;
      case "Intern":
        inquirer
          .prompt([
            {
              type: "input",
              message: "What school did they go to?",
              name: "school",
            },
          ])
          .then(function (internAnswer) {
            let newIntern = createIntern(answers, internAnswer);
            let writeData = [
              `Name: ${newIntern.getName()}`,
              `ID: ${newIntern.getId()}`,
              `Email: ${newIntern.getEmail()}`,
              `Role: ${newIntern.getRole()}`,
              `Alma Mater: ${newIntern.getSchool()}`,
              "-".repeat(20),
              `\n`,
            ].join("\n");
            fs.appendFile("log.txt", writeData, (err) => {
              if (err) throw err;
            });
            exitPrompt();
          });
        break;
      case "Employee":
        inquirer
          .prompt([
            {
              type: "input",
              message: "What is their job title?",
              name: "role",
            },
          ])
          .then(function (employeeAnswer) {
            let newEmployee = createEmployee(answers, employeeAnswer);
            let writeData = [
              `Name: ${newEmployee.getName()}`,
              `ID: ${newEmployee.getId()}`,
              `Email: ${newEmployee.getEmail()}`,
              `Role: ${newEmployee.getRole()}`,
              "-".repeat(20),
              `\n`,
            ].join("\n");
            fs.appendFile("log.txt", writeData, (err) => {
              if (err) throw err;
            });
            exitPrompt();
          });
        break;
      default:
        console.log("You must choose!");
    }
  });
};

//Functions to get user input and then return it to CLI
let createManager = (managerAnswer) => {
  let newManager = new Manager(
    managerAnswer.name,
    managerAnswer.id,
    managerAnswer.email,
    managerAnswer.officeNum
  );
  return newManager;
};

let createEngineer = (answers, engineerAnswer) => {
  let newEngineer = new Engineer(
    answers.name,
    answers.id,
    answers.email,
    engineerAnswer.github
  );
  return newEngineer;
};

let createIntern = (answers, internAnswer) => {
  let newIntern = new Intern(
    answers.name,
    answers.id,
    answers.email,
    internAnswer.school
  );
  return newIntern;
};

let createEmployee = (answers, employeeAnswer) => {
  let newEmployee = new Employee(
    answers.name,
    answers.id,
    answers.email,
    employeeAnswer.role
  );
  return newEmployee;
};
