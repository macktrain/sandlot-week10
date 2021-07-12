//must run 'npm install inquirer'
const inquirer = require('inquirer');
const inquirerDetails = require('inquirer');
//NO NEED to install fs,fs is native to node
const fs = require ('fs');
//must run 'npm install --save create-html'
const createHTML = require('create-html');

let managerArr = [];
let engineerArr = [];
let internArr = [];

addManager();

function addManager ()
{

    inquirer
    .prompt([
        {
            type: 'input',
            name: 'fName',
            message: 'Enter managers first name:',
            validate: fName => 
            {
                if ((fName.length === 0) && (fName === "NaN"))
                {
                    return 'You must enter a valid first name.';
                }
                return true;
            },
        },
        {
            type: 'input',
            name: 'lName',
            message: 'Enter managers last name:',
            validate: lName => 
            {
                if ((lName.length === 0) && (lName === "NaN"))
                {
                    return 'You must enter a valid last name.';
                }
                return true;
            },
        },
        {
            type: 'input',
            name: 'empNum',
            message: 'Enter managers employee number:',
            validate: empNum => 
            {
                if ((empNum < 0) || (isNaN(empNum) === true))
                {
                    return 'You must enter a numeric employee number.';
                }
                return true;
            },
        },
        {
            type: 'input',
            name: 'email',
            message: 'Enter managers email address:',
            validate: email => 
            {
                if (!validEmail(email))
                {
                    return 'You must enter a properly formatted email address.';
                }
                return true;
            },
        },
        {
            type: 'input',
            name: 'officeNum',
            message: 'Enter managers office number:',
            validate: officeNum => 
            {
                if ((officeNum.length === 0) || (officeNum === "NaN"))
                {
                    return 'You must enter a valid github account name.';
                }
                return true;
            },
        },
    ]) 
    .then(answers => {
        const arrInput = 
        {
            fName: answers.fName,
            lName: answers.lName,
            empNum: answers.empNum,
            email: answers.email,
            officeNum: answers.officeNum
        };
        managerArr.push(arrInput)
        addTeamMember();
    })
}

function addTeamMember ()
{

    inquirer 
    .prompt([
        {
            type: 'list',
            message: "What type of employee would you like to add?", 
            name: 'empType', 
            choices: 
                    [
                        'Engineer',
                        'Intern Engineer',
                        'Done Adding',
                    ]
        }
    ]) 
    .then(({empType}) => {
        switch (empType) 
        {
            case 'Engineer':
                addEngineerDetails();
                break;
            case 'Intern Engineer':
                addInternDetails();
                break;
            case 'Done Adding':
                buildHTML();
                return;
            default:
                console.log(`Please select an option`);
        }
    })
}

function addEngineerDetails ()
{

    inquirerDetails 
    .prompt([
        {
            type: 'input',
            name: 'fName',
            message: 'Enter team members first name:',
            validate: fName => 
            {
                if ((fName.length === 0) || (fName === "NaN"))
                {
                    return 'You must enter a valid first name.';
                }
                return true;
            },
        },
        {
            type: 'input',
            name: 'lName',
            message: 'Enter team members last name:',
            validate: lName => 
            {
                if ((lName.length === 0) || (lName === "NaN"))
                {
                    return 'You must enter a valid last name.';
                }
                return true;
            },
        },
        {
            type: 'input',
            name: 'empNum',
            message: 'Enter team members employee number:',
            validate: empNum => 
            {
                if ((empNum < 0) || (isNaN(empNum) === true))
                {
                    return 'You must enter a numerical employee number.';
                }
                return true;
            },
        },
        {
            type: 'input',
            name: 'email',
            message: 'Enter team members email address:',
            validate: email => 
            {
                if (!validEmail(email))
                {
                    return 'You must enter a properly formatted email address.';
                }
                return true;
            },
        },
        {
            type: 'input',
            name: 'acctName',
            message: 'Enter team member github account name:',
            validate: acctName => 
            {
                if ((acctName.length === 0) || (acctName === "NaN"))
                {
                    return 'You must enter a valid github account name.';
                }
                return true;
            },
        },
    ]) 
    .then(answers => {
        const arrInput = 
        {
            fName: answers.fName,
            lName: answers.lName,
            empNum: answers.empNum,
            email: answers.email,
            acctName: answers.acctName
        };
        engineerArr.push(arrInput)
        addTeamMember();
    })
}

function addInternDetails ()
{

    inquirerDetails 
    .prompt([
        {
            type: 'input',
            name: 'fName',
            message: 'Enter intern first name:',
            validate: fName => 
            {
                if ((fName.length === 0) || (fName === "NaN"))
                {
                    return 'You must enter a valid first name.';
                }
                return true;
            },
        },
        {
            type: 'input',
            name: 'lName',
            message: 'Enter intern last name:',
            validate: lName => 
            {
                if ((lName.length === 0) || (lName === "NaN"))
                {
                    return 'You must enter a valid last name.';
                }
                return true;
            },
        },
        {
            type: 'input',
            name: 'empNum',
            message: 'Enter intern employee number:',
            validate: empNum => 
            {
                if ((empNum < 0) || (isNaN(empNum) === true))
                {
                    return 'You must enter a numerical employee number.';
                }
                return true;
            },
        },
        {
            type: 'input',
            name: 'email',
            message: 'Enter intern email address:',
            validate: email => 
            {
                if (!validEmail(email))
                {
                    return 'You must enter a properly formatted email address.';
                }
                return true;
            },
        },
        {
            type: 'input',
            name: 'school',
            message: 'Enter intern school name:',
            validate: school => 
            {
                if ((school.length === 0) || (school === "NaN"))
                {
                    return 'You must enter a valid school name.';
                }
                return true;
            },
        },
    ]) 
    .then(answers => {
        const arrInput = 
        {
            fName: answers.fName,
            lName: answers.lName,
            empNum: answers.empNum,
            email: answers.email,
            school: answers.school
        };
        internArr.push(arrInput)
        addTeamMember();
    })
}

//This email validator was borrowed from zparacha.com
//http://zparacha.com/validate-email-address-using-javascript-regular-expression
function validEmail(testCase)
{      
    var pattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return pattern.test(testCase); 
} 


function buildHTML()
{
    //Must run 'npm install --save create-html'
    //loop through object
    let i = 0;
    let bodyHTML = "<div id='titleContainer'><div id='title'>My Team</div></div>";
    bodyHTML += "<div id='container'>";
    for(let emp of managerArr){
        //Container
        bodyHTML += `<div class='employee'>`;
            //Header - Name & Role
            bodyHTML += "<div class='teamHeader'>";
                bodyHTML += `<div class='name'>${emp.fName} ${emp.lName}</div>`;
                bodyHTML += "<div class='manager'>Manager</div>";
            bodyHTML += "</div>";
            bodyHTML += "<div class='teamBody'>";
                bodyHTML += `<div class='id'>ID: ${emp.empNum}</div>`;
                bodyHTML += `<div class='email'>Email: <a href='mailto:${emp.email}'>${emp.email}</a></div>`;
                bodyHTML += `<div class='office'>Office number: ${emp.officeNum}</div>`;
            bodyHTML += "</div>";
        bodyHTML += "</div>";
    };

    for(let emp of engineerArr){
        //Container
        bodyHTML += `<div class='employee'>`;
            //Header - Name & Role
            bodyHTML += "<div class='teamHeader'>";
                bodyHTML += `<div class='name'>${emp.fName} ${emp.lName}</div>`;
                bodyHTML += "<div class='engineer'>Engineer</div>";
            bodyHTML += "</div>";
            bodyHTML += "<div class='teamBody'>";
                bodyHTML += `<div class='id'>ID: ${emp.empNum}</div>`;
                bodyHTML += `<div class='email'>Email: <a href='mailto:${emp.email}'>${emp.email}</a></div>`;
                bodyHTML += `<div class='github'>GitHub: ${emp.acctName}</div>`;
            bodyHTML += "</div>";
        bodyHTML += "</div>";
    };

    for(let emp of internArr){
        //Container
        bodyHTML += `<div class='employee'>`;
            //Header - Name & Role
            bodyHTML += "<div class='teamHeader'>";
                bodyHTML += `<div class='name'>${emp.fName} ${emp.lName}</div>`;
                bodyHTML += "<div class='intern'>Intern</div>";
            bodyHTML += "</div>";
            bodyHTML += "<div class='teamBody'>";
                bodyHTML += `<div class='id'>ID: ${emp.empNum}</div>`;
                bodyHTML += `<div class='email'>Email: <a href='mailto:${emp.email}'>${emp.email}</a></div>`;
                bodyHTML += `<div class='school'>School: ${emp.school}</div>`;
            bodyHTML += "</div>";
        bodyHTML += "</div>";
    };

    bodyHTML += "</div>";

    var html = createHTML({
        title: 'My Team',
        //script: 'noJSFiles.js',
        scriptAsync: true,
        css: './style/myTeam.css',
        lang: 'en',
        dir: 'rtl',
        head: '<meta name="description" content="example">',
        body: bodyHTML
      });

    fs.writeFileSync(`${process.cwd()}/index.html`, html);
}