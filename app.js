///require classes 
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

// require inquirer, path and fs
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

//determine current directory and find path to the output folder 
const OUTPUT_DIR = path.resolve(__dirname, "output")
//where to create our output
const outputPath = path.join(OUTPUT_DIR, "team.html");

//require render function from the page template
const render = require("./src/page-template.js");

// Setting constants to empty arrays 
const teamArray = [];
const idArray = [];

function startApp(){
  // Add a new Manager function
  function addManager(){
    inquirer.prompt([
      {
        type: "input",
        name: "managerName",
        message: "Name of the team manager?",
      },
      {
        type: "input",
        name: "managerId",
        message: "What is the manager's ID number?",
      }, 
      {
        type: "input",
        name: "managerEmail",
        message: "What is the Team Manager's email?",
      }, 
      {
        type: "input",
        name: "managerOfficeNumber",
        message: "Enter the Team Manager's office number",
      },
    ])
    .then(inputs => {
      // set a manager constant and create a new manager passing in user inputs
      const manager = new Manager(inputs.managerName, inputs.managerId, inputs.managerEmail, inputs.managerOfficeNumber);
      // push this new manager into team array
      teamArray.push(manager);
      // Push into the ID array
      idArray.push(inputs.managerId);
      newTeam();
    });
  }
// WE ARE GOOD UP UNTIL HERE 

    function newTeam(){
      inquirer.prompt([
        {
          type: "list",
          name: "memberTypeChoice",
          message: "What type of member do you want to add?",
          choices: [
            "Engineer",
            "Intern",
            "I'm Done now"
          ]
        }
      ]).then(teamMemberChoice => {
        // Writing a switch case depending on which option they select
        switch (teamMemberChoice.memberTypeChoice) {
          case "Engineer":
            addEngineer();
            break;
          case "Intern":
            addIntern();
            break;
          case "I'm Done now":
            createTeam();
        }
      });
    }

  function addEngineer() {
    inquirer.prompt([
      {
        type: "input",
        name: "engineerName",
        message: "Enter Engineer Name",
      },
      {
        type: "input",
        name: "engineerId",
        message: "Enter engineer ID",
      },
      {
        type: "input",
        name: "engineerEmail",
        message: "Enter Engineer Email",
      },
      {
        type: "input",
        name: "engineerGithub",
        message: "Enter the engineer's github username",
      }
    ]).then(inputs => {
      const engineer = new Engineer(inputs.engineerName, inputs.engineerId, inputs.engineerEmail, inputs.engineerGithub);
      teamArray.push(engineer);
      idArray.push(inputs.engineerId);
      newTeam();
    });
  }
  addManager();
  // Add intern function
  function addIntern() {
    inquirer.prompt([
      {
        type: "input",
        name: "internName",
        message: "Enter intern's name",
      },
      {
        type: "input",
        name: "internId",
        message: "Enter intern's id",
      },
      {
        type: "input",
        name: "internEmail",
        message: "Enter intern's email",
      },
      {
        type: "input",
        name: "internSchool",
        message: "Enter intern's school",
      }
    ]).then(inputs => {
      const intern = new Intern(inputs.internName, inputs.internId, inputs.internEmail, inputs.internSchool);
      teamArray.push(intern);
      idArray.push(inputs.internId);
      newTeam();
    });
  }
  // Create a new team
  function createTeam() {
    // Create the output directory if the output path doesn't exist
    // Wasnt sure about this part but found it and it works
    fs.writeFileSync(outputPath, render(teamArray), "utf-8");
  }
}
startApp();