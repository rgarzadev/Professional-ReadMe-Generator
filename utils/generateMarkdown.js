function renderLicenseBadge(projectLicense) {
  if (projectLicense !== "None") {
    return `![GitHub license](https://img.shields.io/badge/license-${projectLicense}-blue.svg)`
  }
  return ''
}

function renderLicenseLink(projectLicense) {
  if (projectLicense !== "None") {
    return (
      `\n* [License](#license)\n`
    )
  }
  return ''
}

function renderLicenseSection(projectLicense) {
  if (projectLicense !== "None") {
    return (
      `## License

This project is licensed under the ${projectLicense} license.`
    )
  }
  return ''
}

// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.projectTitle}

${renderLicenseBadge(data.projectLicense)}

## Project Description

${data.projectDescription}

## Table of Contents 

* [Installation](#installation)

* [Languages Used](#languages)

* [Usage](#usage)
${renderLicenseLink(data.projectLicense)}
* [Contributing](#contributing)

* [Tests](#tests)

* [Questions](#questions)

* [Additional Resources](#additional)

## Installation

To install dependencies, run this command:

\`\`\`
${data.installationCommand}
\`\`\`

## Languages

${data.languagesUsed}

## Usage

${data.repoUsage}

${renderLicenseSection(data.projectLicense)}
  
## Contributing

${data.repoContributing}

## Tests

To run tests, run the following command:

\`\`\`
${data.testCommand}
\`\`\`

## Questions

Please reach out with any questions at: ${data.userEmail}. You can open an issue for this repo, or explore more of my work at [${data.userGithubName}](https://github.com/${data.userGithubName}/).

## Additional

You can find additional info and/or instructions about this repo at: ${data.additionalResources}.
  
`;

}

module.exports = generateMarkdown;
