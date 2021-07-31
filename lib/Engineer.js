const Employee = require('./Employee');

class Engineer extends Employee {

    constructor(github) {
        // call parent constructor here:
        super(name, id, email);

        this.github = github;
    }

    // returns engineers Github
    getGithub() {

    };

    // overidden to return 'Engineer'
    getRole() {

    };

}

module.exports = Engineer;