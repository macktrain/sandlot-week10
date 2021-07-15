//Employee TESTING
const { TestWatcher } = require('jest');
const employee = require ('../index');

const name = "Lee";
const id = "1";
const email = "Lee@Employee.com";

it('works', () => {
    const newEmp = new employee.Employee(name, id, email)
    expect(newEmp.getName()).toBe(name);
    expect(newEmp.getID()).toBe(id);
    expect(newEmp.getEmail()).toBe(email);
    expect(newEmp.getRole()).toBe("Employee");
  });