//require Employee
const Employee = require('../lib/Employee');
const Employee = require('../lib/Employee');

// create test for employee 
describe("Employee", () => {
    test('Should create an object that has name, id and email  "name, id, email"', () => {
        const Employee = new Employee;
        expect("name" in employee.toEqual(true));
        expect("id" in employee.toEqual(true));
        expect("email" in employee.toEqual(true));
    })
})

// test to see if type of new employee is an object

// test if can set name via constructor

// test if can set id via constructor

// test if can set email via constructor

//test to see if getName() returns name test value

//test to see if getId() returns id test value

//test to see if getEmail() returns email test value

//test to see if getRole() returns "Employee"