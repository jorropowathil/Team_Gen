//require Employee
const Employee = require('../lib/Employee');

// create test for employee 
describe("Employee", () => {
    test('Should create an object that has name, id and email  "name, id, email"', () => {
        const Employee = new Employee;
        expect("name" in employee.toEqual(true));
        expect("id" in employee.toEqual(true));
        expect("email" in employee.toEqual(true));
    })
    // test to see if type of new employee is an object
    test("Employee should be converted into an object", () => {
        const Employee = new Employee;
        expect(typeof employee).toEqual("object");
    })
    // test if can set name via constructor
    test("Name should be able to set via constructor", () => {
        const name = "Jorro";
        const object = new Employee(name);
        expect(object.name).toEqual(name);
    })
    // test if can set id via constructor
    test("id should be set via constructor", () => {
        const id = "1023";
        const object = new Employee(id);
        expect(object.id).toEqual(id);
    })
    // test if can set email via constructor
    test("email should be set via constructor", () => {
        const email = "jp@gmail.com";
        const object = new Employee(email);
        expect(object.id).toEqual(id);
    })
    //test to see if getName() returns name test value
    test("getName should return test value (Jorro)", () =>{
        const name = "Jorro";
        const employee = new Employee(name);
        expect(employee.getName).toEqual(name);
    })
    //test to see if getId() returns id test value
    test("getId should return test value (1023)", () => {
        const id = "1023";
        const employee = new Employee(id);
        expect(employee.id).toEqual(id);
    })
    //test to see if getEmail() returns email test value
    test("getEmail should return email test value (jp@gmail.com)", () => {
        const email = "jp@gmail.com";
        const employee = new Employee(email);
        expect(employee.email).toEqual(email);
    })
    //test to see if getRole() returns "Employee"
    test("getRole should return Employee", () =>{
        const role = "Employee";
        const employee = new Employee(role);
        expect(employee.role).toEqual(role);
    })
})