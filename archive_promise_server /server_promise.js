// import mysql2
const mysql = require('mysql2')
// import inquirer 
const inquirer = require('inquirer'); 
// import console.table
const cTable = require('console.table'); 

const db_queries = require('./queries_promise');

employeeCMS();

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
               allDepartments();
               break;

            case "view all roles":
                console.log('ALL ROLES')
                allRoles();
                break;
            case "view all employees":
                console.log("All Employees")
                allEmployees();
                break;
            case "add a department":
                console.log('added a deparment');
                addDepartment();
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


//--------------------------------- FUNCTIONS ------------- 

//All Departments
function allDepartments() {
    db_queries.viewAllDepartments()
    .then(([rows]) => {
      let departments = rows;
      console.log("\n");
      console.table(departments);
      employeeCMS();
    })
};

//add a department (NEED HELP)

function addDepartment() {

      
  inquirer.prompt([
        {
    type: "input",
    message: "Enter the name of a new department below:",
    name: "newDepName"
  }
]) .then(res => {
    console.log(res)
    console.log("MAKING ANOTHER SPACE --------")

    db_queries.createDepartment(res.newDepName).then(([rows]) => {
        let addedDepa = rows;
        console.log("\n");
        console.table(addedDepa);
        employeeCMS();
      })

  });


    //     inquirer.prompt(
    //         {
    //     type: "input",
    //     message: "Enter the name of a new department below:",
    //     name: "newDepName"
    //   })
      
    //   .then(res => {
    //     console.log(res)
    //     console.log("MAKING ANOTHER SPACE --------")
        
    //     let name = res;
    //     db_queries.createDepartment(name).then(() => 
    //     console.log(`Added ${name.name} in the database`))
    //     console.table(res);
    //     employeeCMS();
    //   });
      

      //end
};

//All Roles
function allRoles() {
    db_queries.viewAllEmployees()
    .then(([rows]) => {
      let roles = rows;
      console.log("\n");
      console.table(roles);
      employeeCMS();
    })
};
 

//All Employees
function allEmployees() {
    db_queries.viewAllEmployees()
    .then(([rows]) => {
      let employees = rows;
      console.log("\n");
      console.table(employees);
      employeeCMS();
    })
};
