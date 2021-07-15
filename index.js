//Note jest is used. So, must run 'npm i -D jest'
//must run 'npm install inquirer'
const inquirer = require('inquirer');
//NO NEED to install fs,fs is native to node
const fs = require ('fs');
//must run 'npm install --save create-html'
const createHTML = require('create-html');

let employeeArr = [];

addManager();

function addManager ()
{
    inquirer
    .prompt([
        {
            type: 'input',
            name: 'name',
            message: 'Enter managers first name:',
            validate: name => 
            {
                if (name.length === 0)
                {
                    return 'You must enter a valid first name.';
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
                if ((empNum < 0) && (isNaN(empNum) === true))
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
        pushManager(answers);
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
    inquirer 
    .prompt([
        {
            type: 'input',
            name: 'name',
            message: 'Enter team members first name:',
            validate: name => 
            {
                if ((name.length === 0) || (name === "NaN"))
                {
                    return 'You must enter a valid first name.';
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
        pushEngineer(answers);
        addTeamMember();
    })
}

function addInternDetails ()
{
    inquirer 
    .prompt([
        {
            type: 'input',
            name: 'name',
            message: 'Enter intern first name:',
            validate: name => 
            {
                if ((name.length === 0) || (name === "NaN"))
                {
                    return 'You must enter a valid first name.';
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
        pushIntern(answers);
        addTeamMember();
        console.log
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
    for(let emp of employeeArr){
        //Container
        bodyHTML += `<div class='employee'>`;
            //Header - Name & Role
            bodyHTML += "<div class='teamHeader'>";
                bodyHTML += `<div class='name'>${emp.name}</div>`;
                bodyHTML += `<div class='${emp.role}'>${emp.role}</div>`;
            bodyHTML += "</div>";
            bodyHTML += "<div class='teamBody'>";
                bodyHTML += `<div class='id'>ID: ${emp.id}</div>`;
                bodyHTML += `<div class='email'>Email: <a href='mailto:${emp.email}'>${emp.email}</a></div>`;
                switch(emp.role) {
                    case "Manager":
                        bodyHTML += `<div class='office'>Office number: ${emp.officeNum}</div>`;
                      break;
                    case "Engineer":
                        bodyHTML += `<div class='office'>Github: ${emp.github}</div>`;
                    break;
                    case "Intern":
                        bodyHTML += `<div class='office'>School: ${emp.school}</div>`;
                    break;
                    default:
                      // code block
                  }
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

//Employee Object
class Employee {
    constructor(name, id, email) 
    {
      this.name = name;
      this.id = id;
      this.email = email;
      this.role = "Employee";
    }
    // Method
    getName() 
    {
        return this.name;
    }
    getID() 
    {
        return this.id;
    }
    getEmail() 
    {
        return this.email;
    }
    getRole() 
    {
        return this.role;
    }
  }
  
  class Manager extends Employee {
    constructor(name, id, email, officeNum) 
    {
        super(name, id, email);
        this.officeNum = officeNum;
        this.role = "Manager";
    }
    
    getOfficeNum() 
    {
        return this.officeNum;
    }
    
    getRole() 
    {
        return this.role;
    }
}
  
class Engineer extends Employee {
  constructor(name, id, email, acctName) 
  {
      super(name, id, email);
      this.github = acctName;
      this.role = "Engineer";
  }
  
  getGithub() 
  {
      return this.github;
  }
  
  getRole() 
  {
      return this.role;
  }
}
  
class Intern extends Employee {
  constructor(name, id, email, school) 
  {
      super(name, id, email);
      this.school = school;
      this.role = "Intern";
  }
  
  getSchool() 
  {
      return this.school;
  }
  
  getRole() 
  {
      return this.role;
  }
}

function pushManager(mgrArr)
{
    const manager = new Manager(mgrArr.name, mgrArr.empNum, mgrArr.email, mgrArr.officeNum);
    employeeArr.push(manager)
}

function pushEngineer(engArr)
{
    const engineer = new Engineer(engArr.name, engArr.empNum, engArr.email, engArr.acctName);
    employeeArr.push(engineer)
}

function pushIntern(intArr)
{
    const intern = new Intern(intArr.name, intArr.empNum, intArr.email, intArr.school);
    employeeArr.push(intern)
}

module.exports = 
{
    Employee, 
    Manager, 
    Engineer, 
    Intern
};