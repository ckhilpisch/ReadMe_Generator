const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');
const generateMarkdown = require('./utils/generateMarkdown');
const questions = require('./utils/questions');

function promptUser () {
 return inquirer.prompt (questions).then((answers)=> {
    generateMarkdown(answers);
    const readmeContent = generateMarkdown(answers);
    
    fs.writeFile('./output/README.md', readmeContent, (err) => err ? console.log(err) : console.log('Successfully created README.md!'))
})
}
promptUser();