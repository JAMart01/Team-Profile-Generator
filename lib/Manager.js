const Employee = require('./Employee');

class Manager extends Employee {

    constructor(name, id, email, officeNumber) {
        // call parent constructor here:
        super(name, id, email);

        this.officeNumber = officeNumber;
    }

    // overridden to return 'Manager'
    getRole() {
        return ` ${this.name} is a Manager of the company`;
    };
}

module.exports = Manager;