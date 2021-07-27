// require mysql
const mysql = require('mysql2');

// connect to database
const db = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password: 'MyNewPass',
        database: 'employeeTracker'
    },
    console.log('Connected to the employeeTracker database!')
);

// functions needed

// view all departments

// view all roles

// view all employees

// add a department

// add a role

// add an employee

// update an employee