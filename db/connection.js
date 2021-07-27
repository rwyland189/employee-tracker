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

module.exports = db;