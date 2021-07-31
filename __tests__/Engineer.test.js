const Engineer = require('../lib/Engineer');

test('creates an engineer object', () => {
    const engineer = new Engineer('Jorge', '1337', 'jorge.martinez1597@gmail.com', 'https://github.com/JAMart01');

    expect(engineer.name).toBe('Jorge');
    expect(engineer.id).toEqual(expect.any(String));
    expect(engineer.email).toEqual(expect.any(String));
    expect(engineer.github).toEqual(expect.any(String));
});

// getName() returns the employee name
test('returns the employees name', () => {
    const engineer = new Engineer('Jorge', '1337', 'jorge.martinez1597@gmail.com', 'https://github.com/JAMart01');

    expect(engineer.getName()).toEqual(expect.stringContaining('Jorge'));
});


// getId() returns the employees ID
test('returns the employees id', () => {
    const engineer = new Engineer('Jorge', '1337', 'jorge.martinez1597@gmail.com', 'https://github.com/JAMart01');

    expect(engineer.getId()).toEqual(expect.stringContaining('1337'));
});

// getEmail() returns the employees email
test('returns the employees email', () => {
    const engineer = new Engineer('Jorge', '1337', 'jorge.martinez1597@gmail.com', 'https://github.com/JAMart01');

    expect(engineer.getEmail()).toEqual(expect.stringContaining('jorge.martinez1597@gmail.com'));
});

// getGitHub returns the engineers github
test('returns the engineers GitHub link', () => {
    const engineer = new Engineer('Jorge', '1337', 'jorge.martinez1597@gmail.com', 'https://github.com/JAMart01');

    expect(engineer.getGithub()).toEqual(expect.stringContaining('https://github.com/JAMart01'));
});

// getRole() returns 'Engineer'
test('returns the employees role', () => {
    const engineer = new Engineer('Jorge', '1337', 'jorge.martinez1597@gmail.com', 'https://github.com/JAMart01');

    expect(engineer.getRole()).toEqual(expect.stringContaining('Engineer'));
});