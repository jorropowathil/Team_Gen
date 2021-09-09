// import Employee class
const Employee = require('./Employee');


// create Intern which extends Employee
class Intern extends Employee {
//create a constructor function that takes in name, id, email, school
    constructor(name , id, email, school){
        //use super method to pass name, id, email
        super(name, id, email);
        //such as this.school= school
        this.school =  this.school;
    }
    // Get intern role
    getRole() {
        return 'intern';
    }
    // Get school 
    getSchool(){
        return this.school;
    }
}

module.exports = Intern;



// getRole(){}
// getSchool(){}
// export Intern