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

questionPrompt = () => {
  inquirer.prompt(questions).then(function(answers) {
    switch (answers.title) {
      case "Manager":
        inquirer
          .prompt([
            {
              type: "input",
              message: "What is their office number?",
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
              `Office Number: ${newManager.officeNum}`,
              "-".repeat(20)
            ].join("\n");
            fs.appendFile("log.txt", writeData, err => {
              if (err) throw err;
            });
            questionPrompt();
          });
        break;
      case "Engineer":
        inquirer
          .prompt([
            {
              type: "input",
              message: "What is their Github user name?",
              name: "github"
            }
          ])
          .then(function(engineerAnswer) {
            let newEngineer = createEngineer(answers, engineerAnswer);
            let writeData = [
              `Name: ${newEngineer.getName()}`,
              `ID: ${newEngineer.getId()}`,
              `Email: ${newEngineer.getEmail()}`,
              `Role: ${newEngineer.getRole()}`,
              `Github Username: ${newEngineer.getGithub()}`,
              "-".repeat(20)
            ].join("\n");
            fs.appendFile("log.txt", writeData, err => {
              if (err) throw err;
            });
            questionPrompt();
          });
        break;
      case "Intern":
        inquirer
          .prompt([
            {
              type: "input",
              message: "What school did they go to?",
              name: "school"
            }
          ])
          .then(function(internAnswer) {
            let newIntern = createIntern(answers, internAnswer);
            let writeData = [
              `Name: ${newIntern.getName()}`,
              `ID: ${newIntern.getId()}`,
              `Email: ${newIntern.getEmail()}`,
              `Role: ${newIntern.getRole()}`,
              `Alma Mater: ${newIntern.getSchool()}`,
              "-".repeat(20)
            ].join("\n");
            fs.appendFile("log.txt", writeData, err => {
              if (err) throw err;
            });
            questionPrompt();
          });
        break;
      default:
        console.log("You must choose!");
    }
  });
};
questionPrompt();

//Functions to get user input and then return it to CLI
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
  let newEngineer = new Engineer(
    answers.id,
    answers.name,
    answers.email,
    engineerAnswer.github
  );
  return newEngineer;
};

let createIntern = (answers, internAnswer) => {
  let newIntern = new Intern(
    answers.id,
    answers.name,
    answers.email,
    internAnswer.school
  );
  return newIntern;
};
