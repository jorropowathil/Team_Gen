// create Employee class

class Employee {
    //create a constructor function that takes in name, id, email
    // and sets them as properties of employee 
    //such as this.name= name
    constructor(name, id, email){
        this.name = name
        this.id = id
        this.email = email
    }
    // getName(){}
    getName (){
        return this.name
    }
    // getId(){}
    getId(){
        return this.id
    }
    // getEmail(){}
    getEmail(){
        return this.email
    }
    // getRole(){}
    getRole (){
        inquirer.prompt([{
        type: 'list',
        message: 'What is your role on the team?',
        name: 'confirm',
        choices: ["Engineer", "Intern", "Manager"]
    },])
    return this.choices;
    }
}
// export Employee
module.exports = Employee;