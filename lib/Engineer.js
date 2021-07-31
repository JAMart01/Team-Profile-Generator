const Employee = require('./Employee');

class Engineer extends Employee {

    constructor(name, id, email, github) {
        // call parent constructor here:
        super(name, id, email);

        this.github = github;
    }

    // returns engineers Github
    getGithub() {
        return `${this.name}'s GitHub page is ${this.github}.`;
    };

    // overidden to return 'Engineer'
    getRole() {
        return ` ${this.name} is an Engineer for the company`;
    };

}

module.exports = Engineer;