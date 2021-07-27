// require inquirer
const inquirer = require('inquirer');

// require console.table
const cTable = require('console.table');

// require the connection.js
const db = require('./db/connection');
const { start } = require('repl');

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

// if view all departments was selected...
function viewAllDepartments() {
    const query = "SELECT * FROM departments";
    db.query(query, function (err, res) {
        console.table(res);
        startApp();
    })
}


// if view all roles was selected...
function viewAllRoles() {
    const query = "SELECT * FROM roles";
    db.query(query, function (err, res) {
        console.table(roles);
    })
    startApp();
}


// if view all employees was selected...
function viewAllEmployees() {
    const query = "SELECT * FROM employees";
    db.query(query, function (err, res) {
        console.table(employees);
    })
    startApp();
}