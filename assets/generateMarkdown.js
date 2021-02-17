// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    let data;
        switch(license.choices) {
            case 'Apache':
                data = '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)]';
                break;
            case 'GNU':
                data = '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)]';
                break;
            case 'MIT':
                data = 'https://opensource.org/licenses/MIT';
                break;
            case 'BSD':
                data = '[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)]';
                break;
            case 'Unlicense':
                data = '[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)]';
                break;
            default:
                data = '';
                break;   
        }
        return data;
        console.log(data);        
}


// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
    let data;
    switch(license) {
                case 'Apache':
                    data = 'https://opensource.org/licenses/Apache-2.0';
                    break;
                case 'GNU':
                    data = 'https://www.gnu.org/licenses/gpl-3.0';
                    break;
                case 'MIT':
                    data = 'https://opensource.org/licenses/MIT';
                    break;
                case 'BSD':
                    data = 'https://opensource.org/licenses/BSD-3-Clause';
                    break;
                case 'Unlicense':
                    data = 'http://unlicense.org/';
                    break;
                default:
                    data = '';
                    break;   
            }
            return data;
        
}


// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
// function renderLicenseSection(license) {
    
//     `Licensed under the ${license} License;
//     you may not use this file except in compliance with the License.
//     You may obtain a copy of the License at

 

    
 
//     Unless required by applicable law or agreed to in writing, software
//     distributed under the License is distributed on an "AS IS" BASIS,
//     WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
//     See the License for the specific language governing permissions and
//     limitations under the License.`


// }

// TODO: Create a function to generate markdown for README
function generateMarkdown(answers) {
    const generateMarkdown = (answers) =>
    `#  ${answers.appTitle}:
    ##  
    
    ## Table of Contents:
    <ol>
    <li><a href="#description">Description</a></li>
    <li><a href="#installation">Installation</a></li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#testing">Testing</a></li>
    <li><a href="#questions">Questions</a></li>
    <li><a href="#license">License</a></li>
    </ol>
    
    ## Description:
    ${answers.descript}
    
    ## Installation:
    ${answers.install}
    
    ## Usage: 
    ${answers.usage}
    
    ## Contributing:
    ${answers.cont}
    
    ## Testing:
    ${answers.test} 
    
    ## Questions:
    Have any questions about the app?  Check out my Github Site:
    
    www.github.com/${answers.github}
    
    Feel free to drop me a line:
    <a class="link" href="mailto:${answers.email}">${answers.email}</a>
    
    ## License:
    Distributed under the ${answers.license} license.
    Full license information:
    <p license></p>
    `
}


module.exports = {
    renderLicenseLink,
    renderLicenseBadge,
    generateMarkdown,

}