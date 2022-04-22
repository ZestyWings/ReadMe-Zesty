const inquirer = require("inquirer");
const fs = require('fs');
const util = require("util");

const generatorMarkdown = require("./utils/generateMarkdown");

// Questions for user //
const promptUser = () => {
    return inquirer.prompt([
        {
            type: "input",
            message: "What is the title of the project?",
            name: "Title",    
        }, {
            type: "input",
            message: "What is the project about? Give a detailed description of your project",
            name: "Description",
        }, {
            type: "input",
            message: "What does the user need to install to run this app?",
            name: "Installation",
        }, {
            type: "input", 
            message: "How would you use this app, provide instructions and examples for use",
            name: "Usage",
        }, {
            type: "input",
            message: "What license is being used?",
            name: "License",
        }, {
            type: "input",
            message: "Who contributed to this project?",
            name: "Contributing"
        }, {
            type: "input",
            message: "What is your Github username?",
            name: "Username"
        }, {
            type: "input",
            message: "What is your email?",
            name: "Email",
        }
    ])
}



const init = () => {
    promptUser()
    .then((answers) => fs.writeFileSync('README-example.md', generatorMarkdown(answers)))
    .then(() => console.log("Successfully wrote to README-example.md"))
    .catch((err) => console.error(err));
};

init();