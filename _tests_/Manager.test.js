//MANAGER TESTING
const { TestWatcher } = require('jest');
const employee = require ('../index');

const name = "Lee";
const id = "1";
const email = "Lee@Manager.com";
const officeNum = "456";

it('works', () => {
    const newEmp = new employee.Manager(name, id, email, officeNum)
    expect(newEmp.getName()).toBe(name);
    expect(newEmp.getID()).toBe(id);
    expect(newEmp.getEmail()).toBe(email);
    expect(newEmp.getOfficeNum()).toBe(officeNum);
    expect(newEmp.getRole()).toBe("Manager");
  });