const Intern = require('../lib/Intern');

test(' creates an intern object', () => {
    const intern = new Intern('Jorge', '1337', 'jorge.martinez1597@gmail.com', 'GWU Coding Bootcamp');

    expect(intern.name).toBe('Jorge');
    expect(intern.id).toEqual(expect.any(String));
    expect(intern.email).toEqual(expect.any(String));
    expect(intern.school).toEqual(expect.any(String));
});

// getName() returns the employee name
test('returns the employees name', () => {
    const intern = new Intern('Jorge', '1337', 'jorge.martinez1597@gmail.com', 'GWU Coding Bootcamp');


    expect(intern.getName()).toEqual(expect.stringContaining('Jorge'));
});


// getId() returns the employees ID
test('returns the employees id', () => {
    const intern = new Intern('Jorge', '1337', 'jorge.martinez1597@gmail.com', 'GWU Coding Bootcamp');

    expect(intern.getId()).toEqual(expect.stringContaining('1337'));
});

// getEmail() returns the employees email
test('returns the employees email', () => {
    const intern = new Intern('Jorge', '1337', 'jorge.martinez1597@gmail.com', 'GWU Coding Bootcamp');

    expect(intern.getEmail()).toEqual(expect.stringContaining('jorge.martinez1597@gmail.com'));
});

// getSchool() returns the employees school
test('returns the interns school', () => {
    const intern = new Intern('Jorge', '1337', 'jorge.martinez1597@gmail.com', 'GWU Coding Bootcamp');

    expect(intern.getSchool()).toEqual(expect.stringContaining('GWU Coding Bootcamp'));
});

// getRole() returns 'Intern'
test('returns the employees role', () => {
    const intern = new Intern('Jorge', '1337', 'jorge.martinez1597@gmail.com', 'GWU Coding Bootcamp');

    expect(intern.getRole()).toEqual(expect.stringContaining('Intern'));
});