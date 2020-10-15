const fs = require("fs");
const path = require("path");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

console.log("Welcome to the Professional ReadMe Generator. Enter your project info to generate your own professional ReadMe.md!")
// array of questions for user
const questions = [
    {
        name: "projectTitle",
        message: "Project name:"
    },
    {
        name: "projectDescription",
        message: "Short description of your project:"
    },
    {
        type: "list",
        name: "projectLicense",
        message: "Project license:",
        choices: ["MIT", "APACHE 2.0", "GPL 3.0", "BSD 3", "wtfpl", "None"]
    },
    {
        type: "checkbox",
        message: "Languages used:",
        name: "languagesUsed",
        choices: [
            " HTML",
            " CSS",
            " JavaScript",
            " Other"
        ]
    },
    {
        name: "installationCommand",
        message: "Command entered to install dependencies:",
        default: "npm i"
    },
    {
        name: "testCommand",
        message: "Command entered to run tests:",
        default: "npm test"
    },
    {
        name: "repoUsage",
        message: "Special repo usage instructions:",
    },
    {
        name: "repoContributing",
        message: "Contributing to repo instructions:",
    },
    {
        name: "userGithubName",
        message: "Enter your GitHub username:"
    },
    {
        name: "userEmail",
        message: "Enter your email address:"
    },
    {
        name: "additionalResources",
        message: "Link to additional app info online (video, etc.):",
    }
];

// function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

// function to initialize program
function init() {
    inquirer.prompt(questions)
        .then((userAnswers) => {
            console.log("Generating README...");
            writeToFile("README.md", generateMarkdown({ ...userAnswers }));
        });
};


// function call to initialize program
init();
