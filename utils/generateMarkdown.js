function generateMarkdown(data) {
  return `# ${data.Title}

  ## License
  [![License: ${data.License}](https://img.shields.io/badge/License-${data.License}-blue.svg)](https://opensource.org/licenses/ISC)

  ## Table of Contents
  - [Description](#description)
  - [Installation](#installation)
  - [Usages](#usages)
  - [Contributors](#contributors)
  - [Testing](#testing)
  - [Contact Info](#contact-info)

  ## Description
  ${data.Description}

  ## Installation
  ${data.Installation}
  
  ## Usages
  ${data.Usages}
  
  ## Contributors
  ${data.Contributors}
  
  ## Testing
  ${data.Test}
  
  ## Contact Info
  ### GitHub: [${data.Github}](https://github.com/${data.Github})
  
  ### Email: [${data.Email}](mailto:${data.Email})
  
  `;
}

module.exports = generateMarkdown;
