// import mysql2
const mysql = require('mysql2')
// import inquirer 
const inquirer = require('inquirer'); 
// import console.table
const cTable = require('console.table'); 

const db_queries = require('./queries');

// db_queries.viewAllEmployees().then((data) =>{
//     console.table(data);
// });

// Connect to database
// const db = mysql.createConnection(
//     {
//       host: 'localhost',
//       user: 'root',
//       password: '',
//       database: 'employee_db'
//     },
//     console.log(`Connected to the employee_db database.`)
//   );

//   db.connect(function(err) {
//     if (err) throw err;
   
//     console.log("Connected as ID " + db.threadId);
//     console.clear();
//     console.log ("======================================");
//     console.log ("");
//     console.log ("  Employee Manager   ");
//     console.log ("");
//     console.log ("======================================");
//     // connect starting function here
//     employeeCMS();
//   });

// TO DO:
//   view all departments
//   view all roles
//   view all employees
//   add a department
//   add a role
//   add an employee
//   update an employee role

function employeeCMS(){
    inquirer.prompt([
        {
            type: 'list',
            message: "What would you like to do?",
            name: "directory",
            choices: [
                "view all departments",
                "view all roles",
                "view all employees",
                "add a department",
                "add a role",
                "add an employee",
                "update an employee role",
                "exit"
            ]
        },
    ]) //finishes prompt section

    .then(function (answers){

        //switch functions start
       switch (answers.directory) {
           case "view all departments":
               //view all departments function
               console.log('This is the department')
               break;

            case "view all roles":
                console.log('ALL ROLES')
                break;
            case "view all employees":
                console.log("all employees")

                break;
            case "add a department":
                console.log('added a deparment');
                break;
            case "add a role":
                console.log("not coded yet")
                break;
            case "add an employee":
                console.log("not coded yet")
                break;
            case "update an employee role":
                console.log("not coded yet")
                break;
            case "exit":
                db.end();
                break;
        
        //finishes switch
            }
//finishes .then function
    });

//final bracket for function    
};

// db_queries.viewAllEmployees().then((data) =>{
//     console.table(data);
//     });

// db_queries.viewAllEmployees().then(function (data){
//     console.table(data);
//     });