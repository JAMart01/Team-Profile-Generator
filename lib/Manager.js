const Employee = require('./Employee');

class Manager extends Employee {

    constructor(officeNumber) {
        // call parent constructor here:
        super(name, id, email);

        this.officeNumber = officeNumber;
    }

    // overridden to return 'Manager'
    getRole();
}

module.exports = Manager;