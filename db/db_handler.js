// Imports
const mysql = require('mysql2')

// MySQL Password -- Alter this to yours
const SQL_PASS = process.env.DB_PASS || 'password' // Test creds

// Connect to database
const db = mysql.createConnection(
    {
      host: '127.0.0.1',
      user: 'root',
      password: SQL_PASS,
      database: 'employee_manager'
    },
    console.log(`Connected to the employee_manager database.`)
)

// Performs query on DB
const dbSelectAll = async(query) => {
    db.query(query, function (err, results) {
        if(err) {
            console.error(err)
        }
        console.table(results);
      });
}

// Determines what table to query 
const dbSelectAllCheck = async(table) => {
    if (table === 'department') {
        dbSelectAll('SELECT * FROM department')
    } 
    else if (table === 'employee') {
        dbSelectAll('SELECT * FROM employee')
    }
    else if (table === 'role') {
        dbSelectAll('SELECT * FROM role')
    }
}

module.exports = dbSelectAllCheck;