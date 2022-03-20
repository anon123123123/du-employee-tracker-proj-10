// Imports
const inquirer = require('inquirer')
const {dbSelectAllCheck, insertQuery} = require('./db/db_handler')

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
        message: "What's the new role department id (Numbers only)?"
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
const main = async() => {
    const menuSelect = await displayMenu()
    if (menuSelect === 'view departments') {
        dbSelectAllCheck('department')
    } 
    else if (menuSelect === 'view roles'){
        dbSelectAllCheck('role')
    }
    else if (menuSelect === 'view employees'){
        dbSelectAllCheck('employee')
    }
    else if (menuSelect === 'add role'){
        const answer = await inquirer.prompt(roleQuestions).then((answers) => {
            return answers;
          });
          insertQuery('role', answer)

    }
    else if (menuSelect === 'add employee'){

    }
    else if (menuSelect === 'update employee role'){

    }
    else {
        console.error('No option selected exiting...')
        process.exit()
    }
    main()
    
}

main()
/* 
Menu Select: 
view departments


*/