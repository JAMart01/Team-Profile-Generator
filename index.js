// GIVEN a command-line application that accepts user input
// WHEN I am prompted for my team members and their information
// THEN an HTML file is generated that displays a nicely formatted team roster based on user input
// WHEN I click on an email address in the HTML
// THEN my default email program opens and populates the TO field of the email with the address
// WHEN I click on the GitHub username
// THEN that GitHub profile opens in a new tab



// WHEN I start the application
// THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number
// WHEN I enter the team manager’s name, employee ID, email address, and office number
// THEN I am presented with a menu with the option to add an engineer or an intern or to finish building my team
// WHEN I select the engineer option
// THEN I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu
// WHEN I select the intern option
// THEN I am prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu
// WHEN I decide to finish building my team
// THEN I exit the application, and the HTML is generated

const inquirer = require('inquirer');
const Engineer = require('./lib/Engineer');
const Manager = require('./lib/Manager');
const Intern = require('./lib/Intern');



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
    .then((answer) => {
        const manager = new Manager(answer.name, answer.id, answer.email, answer.officeNumber);

        console.log(manager);
    });

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

        console.log('Create an Intern');
        createIntern();
    });
};


// at the end of these functions call createEmployee again 
// function createEngineer();

// function createIntern();


createManager()
    .then(createEmployee);