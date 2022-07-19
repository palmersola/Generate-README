const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");
const data = [
  {
    name: "title",
    message: "Enter project name:"
  },
  {
    name: "description",
    message: "Enter project description"
  },
  {
    name: "installation",
    message: "Enter installation instructions:"
  },
  {
    name: "usage",
    message: "Enter project usage information: "
  },
  {
    type: "checkbox",
    name: "license",
    choices: ["IBM", "Eclipse", "MIT"],
    message: "Enter project license:"
  },
  {
    name: "contribution",
    message: "Enter project contribution guidelines:"
  },
  {
    name: "tests",
    message: "Enter project tests: "
  },
  {
    name: "github",
    message: "Enter GitHub username:"
  },
  {
    name: "email",
    message: "Enter email:"
  }
];

function writeToFile(data) {
  generateMarkdown(data);
}

function init() {
  inquirer.prompt(data).then(data => {
    console.log(data);
    writeToFile(data);
  });
}

init();
