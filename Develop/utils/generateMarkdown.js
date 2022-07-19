const fs = require("fs");
function renderLicenseBadge(license) {
  if (license == "IBM") {
    licenseBadge = `![License: IPL 1.0](https://img.shields.io/badge/License-IPL_1.0-blue.svg)`;
  } else if (license == "Eclipse") {
    licenseBadge = `![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)`;
  } else if (license == "MIT") {
    licenseBadge = `![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)`;
  } else {
    console.log("No License");
    licenseBadge = "";
  }
  return licenseBadge;
}

function renderLicenseLink(license) {
  if (license == "IBM") {
    licenseLink = `<a href="https://opensource.org/licenses/IPL-1.0" target="_blank">IBM License Information</a>`;
  } else if (license == "Eclipse") {
    licenseLink = `<a href="https://opensource.org/licenses/EPL-1.0" target="_blank">Eclipse License Information</a>`;
  } else if (license == "MIT") {
    licenseLink = `<a href="https://opensource.org/licenses/ISC" target="_blank">MIT License Information</a>`;
  } else {
    console.log("No License");
    licenseLink = "";
  }
  return licenseLink;
}

function generateMarkdown(data) {
  const {
    title,
    description,
    installation,
    usage,
    license,
    contribution,
    tests,
    github,
    email
  } = data;
  renderLicenseBadge(license);
  renderLicenseLink(license);
  return fs.writeFile(
    "README.md",
    `# ${title}
${licenseBadge}
## Description
${description}
## Table of Contents
  [Installation Instructions](#installation)
    
  [Usage Information](#usage)
    
  [Liscense](#liscense)
    
  [Contribution Guidlines](#contributing)
    
  [Test Instructions](#tests)
    
  [Questions](#questions)
    
## Installation
    ${installation}
## Usage
${usage}
## License
### ${licenseLink}
## Contributing
${contribution}
## Tests
${tests}
## Questions
### <a href="https://github.com/${github}" target="_blank">GitHub Link</a>
    
### <a href="mailto:${email}" target="_blank">More questions? Email me</a>`,
    err => (err ? console.error(err) : console.log("log committed"))
  );
}

module.exports = generateMarkdown;
