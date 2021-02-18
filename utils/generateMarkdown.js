function generateMarkdown(answers) {
  let license = answers.license;
  console.log(license);
  function renderLicenseBadge() {
    // let badge;
    switch (license) {
      case "Apache":
        badge =
          "![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)";
        break;
      case "GNU":
        badge =
          "![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)";
        break;
      case "MIT":
        badge = "https://opensource.org/licenses/MIT";
        break;
      case "BSD":
        badge =
          "![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)";
        break;
      case "Unlicense":
        badge =
          "![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)";
        break;
      default:
        badge = "";
        break;
    }
    return badge;
  }

  function renderLicenseLink() {
    // let link;
    switch (license) {
      case "Apache":
        link = "https://opensource.org/licenses/Apache-2.0";
        break;
      case "GNU":
        link = "https://www.gnu.org/licenses/gpl-3.0";
        break;
      case "MIT":
        link = "https://opensource.org/licenses/MIT";
        break;
      case "BSD":
        link = "https://opensource.org/licenses/BSD-3-Clause";
        break;
      case "Unlicense":
        link = "http://unlicense.org/";
        break;
      default:
        link = "";
        break;
    }
    return link;
  }

  return `#  ${answers.appTitle}:
##  ${renderLicenseBadge()}
    
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
Distributed under the ${answers.license} license.  Full license information:
Licensed under the ${answers.license} License; you may not use this file except in compliance with the License. You may obtain a copy of the License at:

${renderLicenseLink()}

Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.  See the License for the specific language governing permissions and limitations under the License.
`;
}

module.exports = generateMarkdown;
