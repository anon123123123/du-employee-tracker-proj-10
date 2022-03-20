// Imports
const inquirer = require('inquirer')
const dbSelectAllCheck = require('./db/db_handler')

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
          'Add Employee',
          'Update Employee Role'
        ],
        filter(val) {
            return val.toLowerCase();
          }
      }
]

// Function to display first menu and return result 
const displayMenu = async () => {
    const answ = await inquirer.prompt(questionsMenu).then((answers) => {
        return answers.Manager
    })
    return answ
}


// Main function anon async to run automatically 
(async() => {
    const menuSelect = await displayMenu()
    if (menuSelect === 'view departments') {
        dbSelectAllCheck('department')
    } 
    else if (menuSelect === 'view roles'){

    }
    else if (menuSelect === 'view employees'){

    }
    else if (menuSelect === 'add role'){

    }
    else if (menuSelect === 'add employee'){

    }
    else if (menuSelect === 'update employee role'){

    }
    else {
        console.error('No option selected exiting...')
        process.exit()
    }
    
})()


/* 
Menu Select: 
view departments


*/