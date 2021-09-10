const createTeam = team =>{
    // Template for Manager
    const createManager = manager =>{
        return `
        <div>
        <div>
            <h2 >${manager.getName()}</h2>
            <h3 >${manager.getRole()}</h3>
        </div>
        <div>
            <ul class>
                <li >ID: ${manager.getId()}</li>
                <li >Email: ${manager.getEmail()}</li>
                <li >Office number: ${manager.getOfficeNumber()}</li>
            </ul>
        </div>
    </div>
        `;
    }
    // Template for Engineer
    const createEngineer = engineer =>{
        return `
        <div>
    <div>
        <h2>${engineer.getName()}</h2>
        <h3>>${engineer.getRole()}</h3>
    </div>
    <div>
        <ul>
            <li >ID: ${engineer.getId()}</li>
            <li >Email: ${engineer.getEmail()}</li>
            <li >GitHub: <a href="https://github.com/${engineer.getGithub()}">${engineer.getGithub()}</a></li>
        </ul>
    </div>
</div>
        `;
    }
    // Template for Intern
    const createIntern = intern =>{
        return `
        <div>
    <div>
        <h2 >${intern.getName()}</h2>
        <h3 ><${intern.getRole()}</h3>
    </div>
    <div>
        <ul class>
            <li >ID: ${intern.getId()}</li>
            <li >Email: <a href="mailto:${intern.getEmail()}">${intern.getEmail()}</a></li>
            <li >School: ${intern.getSchool()}</li>
        </ul>
    </div>
</div>
        `;
    }

}
//create function that organizes information for the team and returns html for each type of team member inside a html template
// Create an empty array to recieve all the create functions
const newTeam= [];


newTeam.push(team.filter(employee => employee.getRole() === "Manager")
    // map function so we can render data   
    .map(manager => createManager(manager))
);
newTeam.push(team.filter(employee => employee.getRole() === "Engineer")
    // map function so we can render data
    .map(engineer => createEngineer(engineer))
    // empty string cause they are joined together w/ out commas
    .join("")
);
html.push(team
    .filter(employee => employee.getRole() === "Intern")
    // map function so we can render data
    .map(intern => createIntern(intern))
    // empty string cause they are joined together w/ out commas
    .join("")
);

module.exports = team => {
    `
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>My Team</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
        integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    <link rel="stylesheet" href="style.css">
    <script src="https://kit.fontawesome.com/c502137733.js"></script>
</head>

<body>
    <div class="container-fluid">
        <div class="row">
            <div class="col-12 jumbotron mb-3 team-heading">
                <h1 class="text-center">My Team</h1>
            </div>
        </div>
    </div>
    <div class="container">
        <div class="row">
            <div>
                ${generateTeam(team)}
            </div>
        </div>
    </div>
</body>
</html>
    `;
};


//will need individual functions to take in team member and return the appropiate info



