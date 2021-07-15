//INTERN TESTING
const { TestWatcher } = require('jest');
const employee = require ('../index');

const name = "Lee";
const id = "1";
const email = "Lee@intern.com";
const school = "Colorado State University";

it('works', () => {
    const newEmp = new employee.Intern(name, id, email, school)
    expect(newEmp.getName()).toBe(name);
    expect(newEmp.getID()).toBe(id);
    expect(newEmp.getEmail()).toBe(email);
    expect(newEmp.getSchool()).toBe(school);
    expect(newEmp.getRole()).toBe("Intern");
  });