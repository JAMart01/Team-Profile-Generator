const inquirer = require('inquirer');
const Engineer = require('./lib/Engineer');
const Manager = require('./lib/Manager');
const Intern = require('./lib/Intern');
const fs = require('fs');
const generatePage = require("./src/page-template");


// empty array to hold all of the team member data
const teamMembers = [];

const createManager = () => {

    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: "What is the team managers name?",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter the team managers name!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: 'What is the managers ID?',
            validate: idInput => {
                if (idInput) {
                    return true;
                } else {
                    console.log('Please enter the managers ID!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is the managers email?',
            validate: emailInput => {
                if (emailInput) {
                    return true;
                } else {
                    console.log('Please enter the managers email address!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: 'What is the managers office number?',
            validate: officeNumberInput => {
                if (officeNumberInput) {
                    return true;
                } else {
                    console.log('Please enter the managers office number!');
                    return false; 
                }
            }
        }
    ])
    .then( answer => {
        let manager = new Manager(answer.name, answer.id, answer.email, answer.officeNumber);
        
        teamMembers.push(manager);

        console.log(manager);
    })
    .then(createEmployee);

};

const createEngineer = function() {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is the Engineers name?',
            validate: engNameInput => {
                if (engNameInput) {
                    return true;
                } else {
                    console.log('Please enter the Engineers name!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: 'What is this Engineers ID?',
            validate: engIdInput => {
                if (engIdInput) {
                    return true;
                } else {
                    console.log('Please enter the engineers ID!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is this Engineers email?',
            validate: engEmailInput => {
                if (engEmailInput) {
                    return true;
                } else {
                    console.log('Please enter the engineers email address!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'github',
            message: 'What is this engineers github?',
            validate: githubInput => {
                if (githubInput) {
                    return true;
                } else {
                    console.log('Please enter the engineers github!');
                    return false; 
                }
            }
        }    
    ])
    .then( answer => {
        let engineer = new Engineer(answer.name, answer.id, answer.email, answer.github);

        teamMembers.push(engineer);

        console.log(engineer);
    })
    .then(createEmployee);
};

const createIntern = function () {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is the Interns name?',
            validate: intNameInput => {
                if (intNameInput) {
                    return true;
                } else {
                    console.log('Please enter the Interns name!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: 'What is this Interns ID?',
            validate: intIdInput => {
                if (intIdInput) {
                    return true;
                } else {
                    console.log('Please enter the Interns ID!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is this Interns email?',
            validate: intEmailInput => {
                if (intEmailInput) {
                    return true;
                } else {
                    console.log('Please enter the Interns email address!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'school',
            message: 'What school did this Intern attend?',
            validate: schoolInput => {
                if (schoolInput) {
                    return true;
                } else {
                    console.log('Please enter this Interns school!');
                    return false; 
                }
            }
        }    
    ])
    .then( answer => {
        let intern = new Intern(answer.name, answer.id, answer.email, answer.school);

        teamMembers.push(intern);

        console.log(intern);
    })
    .then(createEmployee);
};



const createEmployee = function() {
    return inquirer.prompt([
        {
            type: 'confirm',
            name: 'confirmEmployee',
            message: 'Would you like to create a new employee?',
            default: false
        },
        {
            type: 'list',
            name: 'employeeType',
            message: 'What kind of employee would you like to create?',
            choices: ['Engineer', 'Intern'], 
            when: ({confirmEmployee}) => {
                if (confirmEmployee) {
                    return true;
                } else {
                    return false;
                }
            }
        }
    ]) 
    .then( answer => {

       if (answer.employeeType === 'Engineer') {
           console.log('Create an Engineer')
           createEngineer();
       }  
       else if (answer.employeeType === 'Intern') {
           console.log('Create an Intern');
           createIntern();
        }
        else {
            // return generatePage(employeeData)
            console.log('Data received, Generating page!')
            console.log(teamMembers);
        }
    });
};

const createPage = function (HTMLTemplate) {
    fs.writeFile('./dist/index.html', HTMLTemplate, (err) => {
        if (err) {
            console.log(err);
        } else {
            console.log('Page successfully generated!!!');
        }
    });
};


createManager()
// Then promises will be chained here that will take in the data that was received
// after it takes in the date it outputs it to the page template file which will generate the html
// afterwards that data will be returned and send into the createPage function which will create
// the HTML file. 
    