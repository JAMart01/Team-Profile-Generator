const Employee = require('../lib/Employee');


// has name 
// has id 
// has email
test('creates a new employee object', () => {
    const employee = new Employee('Jorge', '1337', 'jorge.martinez1597@gmail.com');

    expect(employee.name).toBe('Jorge');
    expect(employee.id).toEqual(expect.any(String));
    expect(employee.email).toEqual(expect.any(String));
});

// method testing

// getName() returns the employee name
test('returns the employees name', () => {
    const employeee = new Employee('Jorge', '1337', 'jorge.martinez1597@gmail.com')

    expect(employeee.getName()).toEqual(expect.stringContaining('Jorge'));
});


// getId() returns the employees ID
test('returns the employees id', () => {
    const employee = new Employee('Jorge', '1337', 'jorge.martinez1597@gmail.com')

    expect(employee.getId()).toEqual(expect.stringContaining('1337'));
});


// getEmail() returns the employees email
test('returns the employees email', () => {
    const employee = new Employee('Jorge', '1337', 'jorge.martinez1597@gmail.com')

    expect(employee.getEmail()).toEqual(expect.stringContaining('jorge.martinez1597@gmail.com'));
});

// getRole() returns 'Employee'
test('returns the employees role', () => {
    const employee = new Employee('Jorge', '1337', 'jorge.martinez1597@gmail.com')

    expect(employee.getRole()).toEqual(expect.stringContaining('Employee'));
});