// import mysql2
const mysql = require('mysql2')
// import inquirer 
const inquirer = require('inquirer'); 
// import console.table
const cTable = require('console.table'); 

const db_queries = require('./queries');

function employeeCMS(){
    inquirer.prompt([
        {
            type: 'list',
            message: "What would you like to do?",
            name: "directory",
            choices: [
                // "view all departments",
                // "view all roles",
                "view all employees",
                // "add a department",
                // "add a role",
                // "add an employee",
                // "update an employee role",
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
                console.log("JUST CONSOLE LOG")
                
                //testing data 

                employeeCMS();
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
// employeeCMS();

//FUNCTIONS

// db_queries.viewAllEmployees().then((data) =>{
//     console.table(data);
//     });


db_queries.viewAllEmployees().then(function (data){
    console.table(data);
    });



 