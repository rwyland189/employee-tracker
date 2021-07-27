// require inquirer
const inquirer = require('inquirer');

// require the connection.js
const db = require('./db/connection');

// start the application
startApp();

function startApp() {
    inquirer.prompt([
        {
            type: "list",
            name: "option",
            message: "What would you like to do?",
            choices: [
                "View all departments",
                "View all roles",
                "View all employees",
                "Exit"
            ]
        }
    ]).then(function (answer) {
        if (answer.option === 'View all departments') {
            viewAllDepartments();
        } else if (answer.option === 'View all roles') {
            viewAllRoles();
        } else if (answer.option === 'View all employees') {
            viewAllEmployees();
        } else if (answer.option === 'Exit') {
            db.end();
        }
    })
}

// functions needed

// view all departments

// view all roles

// view all employees