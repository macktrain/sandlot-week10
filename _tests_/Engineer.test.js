//ENGINEER TESTING
const { TestWatcher } = require('jest');
const employee = require ('../index');

const name = "Lee";
const id = "1";
const email = "Lee@Engineer.com";
const github = "macktrain";

it('works', () => {
    const newEmp = new employee.Engineer(name, id, email, github)
    expect(newEmp.getName()).toBe(name);
    expect(newEmp.getID()).toBe(id);
    expect(newEmp.getEmail()).toBe(email);
    expect(newEmp.getGithub()).toBe(github);
    expect(newEmp.getRole()).toBe("Engineer");
  });