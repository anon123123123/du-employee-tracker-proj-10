// Imports
const mysql = require('mysql2')
const cTable = require('console.table');

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
        console.clear()
        console.table(results);
        console.log('Press down on the arrow pad to continue')
      });
}

// Determines what table to query 
const dbSelectAllCheck = async(table) => {
    if (table === 'department') {
        dbSelectAll('SELECT * FROM department')
    } 
    else if (table === 'employee') {
        // Possible improvement add name instead of manager ID
        dbSelectAll('SELECT employee.id, first_name, last_name, manager_id, role.title, role.salary, department.name AS Department FROM employee INNER JOIN role ON employee.id = role.id INNER JOIN department ON role.id = employee.id')
    }
    else if (table === 'role') {
        dbSelectAll('SELECT * FROM role')
    }
}

// Handles Inserts into DB 
const insertQuery = async (query, answers) => {
    if(query === 'role') {
        db.query('INSERT INTO role (title,salary,department_id) VALUES (?,?,?)', [answers.title, Number(answers.salary), Number(answers.department_id)], (err,results) => {
            if(err) {
                console.error(err)
            } else {
                console.log('Role added')
            }
        })
    }
    else if (query === 'department'){
        db.query('INSERT INTO department (name) VALUES (?)', [answers.name], (err,results) => {
            if(err) {
                console.error(err)
            } else {
                console.log('Department added')
            }
        })
    }
    else if (query === 'employee'){
        db.query('INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES (?,?,?,?)', [answers.first_name, answers.last_name, Number(answers.role_id), Number(answers.manager_id)], (err,results) => {
            if(err) {
                console.error(err)
            } else {
                console.log('Employee added')
            }
        })
    }
    else if (query === 'update'){
        db.query('UPDATE employee SET role_id = ? WHERE employee.id = ?', [Number(answers.role_id), Number(answers.employee_id)], (err,results) => {
            if(err) {
                console.error(err)
            } else {
                console.log('Employee added')
            }
        })
    }

}

module.exports = {dbSelectAllCheck, insertQuery};