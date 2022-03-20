// Imports
const inquirer = require('inquirer')
const { dbSelectAllCheck, insertQuery } = require('./db/db_handler')

// Initial questions  
const questionsMenu = [
    {
        type: 'list',
        name: 'Manager',
        message: 'What do you want to do?',
        choices: [
            'View Departments',
            'View Roles',
            'View Employees',
            'Add Role',
            'Add Department',
            'Add Employee',
            'Update Employee Role',
            'Exit'
        ],
        filter(val) {
            return val.toLowerCase();
        }
    }
]

// Add Role Questions 
const roleQuestions = [
    {
        type: 'input',
        name: 'title',
        message: "What's the new role title?"
    },
    {
        type: 'input',
        name: 'salary',
        message: "What's the new role salary (Numbers only)? "
    },
    {
        type: 'input',
        name: 'department_id',
        message: "What's the department id (Numbers only)?"
    }
]

// Add Employee Questions 
const employeeQuestions = [
    {
        type: 'input',
        name: 'first_name',
        message: "What's the employee's first name?"
    },
    {
        type: 'input',
        name: 'last_name',
        message: "What's employee's last name? "
    },
    {
        type: 'input',
        name: 'role_id',
        message: "What's the new role id (Numbers only)?"
    },
    {
        type: 'input',
        name: 'manager_id',
        message: "What's the new manager id (Numbers only)?"
    }
]

// Add Employee Questions 
const updateQuestions = [
    {
        type: 'input',
        name: 'employee_id',
        message: "What's the employee's ID?"
    },
    {
        type: 'input',
        name: 'role_id',
        message: "What's the role ID for the employee? "
    }
]

// Add department Questions 
const departmentQuestions = [
    {
        type: 'input',
        name: 'name',
        message: "What's the new department name?"
    }
]

// Function to display first menu and return result 
const displayMenu = async () => {
    const answ = await inquirer.prompt(questionsMenu).then((answers) => {
        return answers.Manager
    })
    return answ
}

// Main function to call all features 
const main = async () => {
    const menuSelect = await displayMenu()
    if (menuSelect === 'view departments') {
        dbSelectAllCheck('department')
    }
    else if (menuSelect === 'view roles') {
        dbSelectAllCheck('role')
    }
    else if (menuSelect === 'view employees') {
        dbSelectAllCheck('employee')
    }
    else if (menuSelect === 'add role') {
        const answer = await inquirer.prompt(roleQuestions).then((answers) => {
            return answers;
        });
        insertQuery('role', answer)
    }
    else if (menuSelect === 'add department') {
        const answer = await inquirer.prompt(departmentQuestions).then((answers) => {
            return answers;
        });
        insertQuery('department', answer)
    }
    else if (menuSelect === 'add employee') {
        const answer = await inquirer.prompt(employeeQuestions).then((answers) => {
            return answers;
        });
        insertQuery('employee', answer)
    }
    else if (menuSelect === 'update employee role') {
        dbSelectAllCheck('update')
        console.log('Please enter the ID number of the employee you would like to alter role')
        const answer = await inquirer.prompt(updateQuestions).then((answers) => {
            return answers;
        });
        insertQuery('update', answer)
    }
    else {
        console.log('Exiting...')
        process.exit()
    }
    main()

}

main()
