const inquirer = require("inquirer");
const fs = require("fs");
const Employee = require("./lib/employee");
const Manager = require("./lib/manager");

const questions = [
  {
    type: "input",
    message: "What is the employee's ID number?",
    name: "id"
  },
  {
    type: "input",
    message: "What is the employee's name?",
    name: "name"
  },
  {
    type: "input",
    message: "What is the employee's email?",
    name: "email"
  },
  {
    type: "list",
    message: "Pick a job title:",
    choices: ["Manager", "Engineer", "Intern"],
    name: "title"
  }
];

inquirer.prompt(questions).then(function(answers) {
  switch (answers.title) {
    case "Manager":
      inquirer
        .prompt([
          {
            type: "input",
            message: "What is your office number?",
            name: "officeNum"
          }
        ])
        .then(function(managerAnswer) {
          let newManager = createManager(answers, managerAnswer);
          let writeData = [
            `Name: ${newManager.getName()}`,
            `ID: ${newManager.getId()}`,
            `Email: ${newManager.getEmail()}`,
            `Role: ${newManager.getRole()}`,
            "-".repeat(20)
          ].join("\n");
          fs.writeFile("log.txt", writeData, err => {
            if (err) throw err;
          });
        });
      break;
    case "Engineer":
      inquirer.prompt([
        {
          type: "input",
          message: "What is your Github user name?",
          name: "github"
        }
      ]);
      break;
    case "Intern":
      inquirer.prompt([
        {
          type: "input",
          message: "What school did you go to?",
          name: "school"
        }
      ]);
      break;
    default:
      console.log("You must choose!");
  }
});

let createManager = (answers, managerAnswer) => {
  let newManager = new Manager(
    answers.id,
    answers.name,
    answers.email,
    managerAnswer.officeNum
  );
  return newManager;
};
let createEngineer = (answers, engineerAnswer) => {
  let;
};
