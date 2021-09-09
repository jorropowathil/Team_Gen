// import Employee class
const Employee = require('./Employee');
// create Manager which extends Employee
class Manager extends Employee {
    //create a constructor function that takes in name, id, email, officeNumber
    constructor(name , id, email, officeNumber){
        //use super method to pass name, id, email
        super(name, id, email);
        //such as this.officeNumber= officeNumber
        this.officeNumber = officeNumber;
    }
    // getRole(){}
    getRole(){
        return 'manager';
    }
    // getOfficeNumber(){}
    getOfficeNumber(){
        return this.officeNumber;
    }

}
// export Manager
module.exports = Manager;