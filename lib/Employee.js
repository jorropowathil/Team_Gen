// create Employee class

class Employee {
    constructor(name, id, email){
        this.name = name
        this.id = id
        this.email = email
    }
    getName (){
        return this.name
    }
    getId(){
        return this.id
    }
    getEmail(){
        return this.email
    }
    getRole (){
        inquirer.prompt([{
        type: 'list',
        message: 'What is your role on the team?',
        name: 'confirm',
        choices: [
            "Engineer", 
            "Intern",
            "Manager"
        ]
      },
    ])
    return this.choices;
    }
}

module.exports = Employee

//create a constructor function that takes in name, id, email
// and sets them as properties of employee 
//such as this.name= name

// getName(){}
// getId(){}
// getEmail(){}
// getRole(){}

// export Employee