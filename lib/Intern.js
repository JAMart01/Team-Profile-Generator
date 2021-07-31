const Employee = require('./Employee');

class Intern extends Employee {

    constructor(school) {
        // call parent constructor here:
        super(name, id, email);

        this.school = school;
    }

    // returns the interns school
    getSchool() {

    };

    // overridden to return 'Intern'
    getRole() {

    };
}

module.exports = Intern;