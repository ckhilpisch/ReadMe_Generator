const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');
const generateMarkdown = require('./utils/generateMarkdown');
const fsWriteFile = util.promisify(fs.writeFile);

function promptUser () {
 return inquirer.prompt ([
    {
        type : 'input',
        name : 'appTitle',
        message : 'What is the title of your application?'
    },
    {
        type: 'input',
        name: 'descript',
        message: 'Give a description of what your application does'

    },
    {
        type: 'input',
        name: 'install',
        message: 'Give the installation instructions for your app'

    },
    {
        type: 'input',
        name: 'usage',
        message: 'Describe how your application is used'

    },
    {
        type: 'input',
        name: 'cont',
        message: 'Give contribution guidelines for the application'

    },
    {
        type: 'input',
        name: 'test',
        message: 'Give the testing instructions for your app'

    },
    {
        type: 'checkbox',
        message: 'What is the license for your application?',
        name: 'license',
        choices: ['Apache', 'GNU', 'MIT', 'BSD', 'Unlicense']

    },
    {
        type: 'input',
        name: 'github',
        message: 'What is your Github username?'

    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?'
        
    },

])
};

async function init () {
    console.log ("Answer the following prompts to generate your README file");
    const answers = await promptUser();
    const readmeContent = generateMarkdown(answers);

    await fsWriteFile('README.md', readmeContent, (err) => err ? console.log(err) : console.log('Successfully created README.md!'))
};

init();
