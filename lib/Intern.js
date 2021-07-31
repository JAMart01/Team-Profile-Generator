const Employee = require('./Employee');

class Intern extends Employee {

    constructor(name, id, email, school) {
        // call parent constructor here:
        super(name, id, email);

        this.school = school;
    }

    // returns the interns school
    getSchool() {
        return ` ${this.name} went to school at ${this.school}`;
    };

    // overridden to return 'Intern'
    getRole() {
        return ` ${this.name} is an Intern at the company`;
    };
}

module.exports = Intern;