// import Employee class
const Employee = require('./Employee');
// create Engineer which extends Employee
class Engineer extends Employee {
    //create a constructor function that takes in name, id, email, github
    constructor(name , id, email, githubUser){
        //use super method to pass name, id, email
        // To access properties from the parent class
        super(name, id, email);
        //such as this.github= github
        this.githubUser = githubUser;
    }
    // getRole(){}
    getRole(){
       return 'engineer';
    }
    // getGithub(){}
    getGithubUser(){
        return this.githubUser;
    }
}

// export Engineer
module.exports = Engineer;