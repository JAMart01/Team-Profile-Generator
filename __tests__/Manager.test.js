const Manager = require('../lib/Manager');

test('creates a manager object', () => {
    const manager = new Manager('Jorge', '1337', 'jorge.martinez1597@gmail.com', 201);

    expect(manager.name).toBe('Jorge');
    expect(manager.id).toEqual(expect.any(String));
    expect(manager.email).toEqual(expect.any(String));
    expect(manager.officeNumber).toEqual(expect.any(Number));
});

// getName() returns the employee name
test('returns the employees name', () => {
    const manager = new Manager('Jorge', '1337', 'jorge.martinez1597@gmail.com', 201);

    expect(manager.getName()).toEqual(expect.stringContaining('Jorge'));
});


// getId() returns the employees ID
test('returns the employees id', () => {
    const manager = new Manager('Jorge', '1337', 'jorge.martinez1597@gmail.com', 201);

    expect(manager.getId()).toEqual(expect.stringContaining('1337'));
});

// getEmail() returns the employees email
test('returns the employees email', () => {
    const manager = new Manager('Jorge', '1337', 'jorge.martinez1597@gmail.com', 201);

    expect(manager.getEmail()).toEqual(expect.stringContaining('jorge.martinez1597@gmail.com'));
});

// getRole() returns 'Manager'
test('returns the employees role', () => {
    const manager = new Manager('Jorge', '1337', 'jorge.martinez1597@gmail.com', 201);

    expect(manager.getRole()).toEqual(expect.stringContaining('Manager'));
});