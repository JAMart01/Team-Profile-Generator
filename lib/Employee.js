class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }


    // returns the employee name
    getName() {
        return ` This employees name is ${this.name}.`;
    };

    // returns the employess ID
    getId() {
        return `${this.name}'s ID is  ${this.id}.`;
    };

    // returns the employess email
    getEmail() {
        return `${this.name}'s Email is ${this.email}`;
    };

    // returns 'Employee'
    getRole() {
        return ` ${this.name} is an Employee of the company`;
    };

}


module.exports = Employee; 