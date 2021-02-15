const inquirer = require('inquirer');
const fs = require('fs');
const answers = [];

inquirer
    .prompt ([
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
        name: 'tests',
        message: 'Give the testing instructions for your app'

    },
    {
        type: 'checkbox',
        message: 'What is the license for your application',
        name: 'license',
        choices: ['Apache', 'GNU', 'MIT', 'BSD', 'Unlicense']
    },
    {
        type: 'checkbox',
        message: 'What technologies did you use?',
        name: 'tech',
        choices: ['HTML', 'CSS', 'Javascript', 'jQuery', 'Node.js', 'AJAX', 'JSON']
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
]).then((data)=> {
    this.data.answers.push
    console.log(answers);
})