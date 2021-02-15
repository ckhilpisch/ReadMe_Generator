const inquirer = require('inquirer');
const fs = require('fs');
const generateREADME = (answers) =>
`#${answers.appTitle}:
##Table of Contents:
<ol>
<li><a href="#description">Description</a></li>
<li><a href="#installation">Installation</a></li>
<li><a href="#techologies">Technologies Used</a></li>
<li><a href="#usage">Usage</a></li>
<li><a href="#contributing">Contributing</a></li>
<li><a href="#testing">Testing</a></li>
<li><a href="#questions">Questions</a></li>
<li><a href="#license">License</a></li>
</ol>

## Description:
${answers.descript}

##Installation:
${answers.install}

## Technologies:
<ul>
    <li>${answers.tech[0]}
    <li>${answers.tech[1]}
    <li>${answers.tech[2]}
    <li>${answers.tech[3]}
    <li>${answers.tech[4]}
</ul>

## Usage: 
${answers.usage}

## Contributing:
${ansers.cont}

##Testing:
${answers.test} 

## Questions:
Have any questions about the app?  Check out my Github Site:

www.github.com/${answers.github}

Feel free to drop me a line:
<a class="link" href="mailto:${answers.email}">${answers.email}</a>

## License:
Distributed under the ${answers.license} license.`



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
        message: 'What is the license for your application?',
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
]).then((responses)=> {
    console.log(responses);
})

// //logic for the licensing

// Apache:
// [![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)

// GNU: 
// [![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)
// MIT: 
// [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

// BSD:[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)

// Unlicense: 
// [![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)

//logic for no license

//logic for technologies used

//logic for blank answers
