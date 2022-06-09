// import mysql2
const mysql = require('mysql2')
// import inquirer 
const inquirer = require('inquirer'); 
// import console.table
const cTable = require('console.table'); 

//old promise code const db_queries = require('./queries');

// Connect to database
const db = mysql.createConnection(
    {
      host: 'localhost',
      user: 'root',
      password: '',
      database: 'employee_db'
    },
    console.log(`Connected to the employee_db database.`)
  );

  db.connect(function(err) {
    if (err) throw err;
    console.log(`Connected to the employee_db database.`)
    employeeCMS();
  });

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
                "delete employee",
                "delete role",
                "delete department",
                "exit"
            ]
        },
    ]) //finishes prompt section

    .then(function (answers){

        //switch functions start
       switch (answers.directory) {
           case "view all departments":
            console.log("---------------------")
            console.log("---- Departments ----")
            console.log("---------------------")
               viewAllDeparments();
               break;

            case "view all roles":
                console.log("---------------------")
                console.log("------- Roles -------")
                console.log("---------------------")
                viewAllRoles();
                break;
            case "view all employees":
                console.log("---------------------")
                console.log("----- Employees -----")
                console.log("---------------------")
                viewAllEmployees();
                break;
            case "add a department":
                console.log("---------------------")
                console.log("-- Add A Department -")
                console.log("---------------------")
                addADeparment();
                break;
            case "add a role":
                console.log("---------------------")
                console.log("-------- Add A Role -")
                console.log("---------------------")
                addARole();
                break;
            case "add an employee":
                console.log("---------------------")
                console.log("--- Add An Employee -")
                console.log("---------------------")
                // showBeforeAddEmployee();
                addAnEmployee();
                break;
            case "update an employee role":
                console.log("---------------------")
                console.log(" Update An Employee -")
                console.log("---------------------")
                updateEmployee();
                break;
            case "delete employee":
                deleteEmployee();
                break;
            case "delete role":
                deleteRole();
                break;
            case "delete department":
                 deleteDepartment();
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

//QUERY FUNCTIONS

//   view all departments
function viewAllDeparments() {
    
    db.query("SELECT * FROM department;", function(err, res) {
      if (err) {
          //logs error 
          console.log(err)
      } else
      //logs result into the command line
      console.table(res)
      //returns back the main directory
      employeeCMS();
  })
}

//   view all roles
function viewAllRoles() {

    db.query("SELECT * FROM roles JOIN department ON roles.department_id = department.id;", function(err, res) {
      if (err) {
          //logs error 
          console.log(err)
      } else
      //logs result into the command line
      console.table(res)
      //returns back the main directory
      employeeCMS();
  })
}

//   view all employees
function viewAllEmployees() {
    
    db.query("SELECT * FROM employee;", function(err, res) {
      if (err) {
          //logs error 
          console.log(err)
      } else
      //logs result into the command line
      console.table(res)
      //returns back the main directory
      employeeCMS();
  })
}

//   add a department

function addADeparment(){

    db.query("SELECT * FROM department", (err, res) => {
    
    console.table(res);
        
    inquirer.prompt([ //start
        
        {
        // Prompt user for name of department
        name: "deptName",
        type: "input",
        message: "Please add New Department Name:"
    }
    // end
    ]).then((answer) => {
            
        // add department to the table
        db.query(`INSERT INTO department (department_name) VALUES ("${answer.deptName}");`, (err, res) => {
            // if(err) return err;
                // logs result into the command line
            console.table(res)
            console.log("\n NEW DEPARTMENT ADDED...\n ");
            employeeCMS();
        });
        
    //end of inquirer
    })

})

};

//   add a role
function addARole(){

    db.query("SELECT * FROM roles", (err, res) => {

        console.table(res);

    inquirer.prompt([ //start
        {
            name: "roleTitle",
            type: "input",
            message: "What role would you like to add?"
          },
          {
            name: "roleSalary",
            type: "input",
            message: "What is the salary for that role?"
          },
          {
            name: 'roleDepartment',
            type: 'input',
            message: 'What is the department ID?'
          }
    // end
    ]).then((answer) => {

        console.log(answer);
        // add role to the table
        db.query(`INSERT INTO roles (title, salary, department_id) VALUES ("${answer.roleTitle}","${answer.roleSalary}","${answer.roleDepartment}");`, (err, res) => {
            if(err) return err;
            // logs result into the command line
            console.table(res)
            console.log("\n NEW ROLE ADDED...\n ");
            employeeCMS();
        });
        
    //end of inquirer
    });
})

};

function addAnEmployee(){

    db.query("SELECT * FROM employee", (err, res) => {
        console.table(res);

    inquirer.prompt([ //start
        {
            name: "employeeName",
            type: "input",
            message: "What is the employees name?"
          },
          {
            name: "employeeLastName",
            type: "input",
            message: "What is the employees last name?"
          },
          {
            name: "employeeRoleId",
            type: 'input',
            message: 'What is the employees role ID?'
          },
          {
            name: "employeeManagerId",
            type: 'input',
            message: 'What is the employees manager ID?'
          }
    // end
    ]).then((answer) => {

        console.log(answer);
        // add role to the table
        db.query(`INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ("${answer.employeeName}","${answer.employeeLastName}","${answer.employeeRoleId}","${answer.employeeManagerId}");`, (err, res) => {
            if(err) return err;
            // logs result into the command line
            console.table(res)
            console.log("\n NEW EMPLOYEE ADDED...\n ");
            employeeCMS();
        });
        
    //end of inquirer
    });

})

};

//   update an employee role

function updateEmployee(){

db.query("SELECT * FROM employee", (err, res) => {
    if(err) return err;
    console.table(res);

    inquirer.prompt([
    {
      type: 'input',
      name: 'roleID',
      message: 'What is the role ID that you would like to change employee to?',
    }, {
        type: 'input',
        name: 'employeeID',
        message: 'What is the employees ID?',
      },
    ])
        .then((answers) => {

           db.query(`UPDATE employee SET role_id = ("${answers.roleID}") where id = ("${answers.employeeID}");`, (err, res) => {
  
                console.table(res);
                console.log("updates to employees has been made");
                employeeCMS();
            });
        });

})

};

//DELETE EMPLOYEEE

function deleteEmployee(){    
    
    db.query("SELECT * FROM employee;", (err, res) => {
    if(err) return err;
    console.table(res);

    inquirer.prompt([
    {
      type: 'input',
      name: 'deleteEmployee',
      message: 'What is the ID of the employee you would like to delete?',
    }
]).then((answer) => {
    console.log(answer)
    db.query(`DELETE FROM employee WHERE id = ("${answer.deleteEmployee}");`, (err, res) => {
        
        if(err) return err;
        console.table(res)
        console.log("Employee successfully deleted!")
       employeeCMS();
     })

})

})

};

//DELETE ROLE

function deleteRole(){    
    
    db.query("SELECT * FROM roles;", (err, res) => {
    if(err) return err;
    console.table(res);

    inquirer.prompt([
    {
      type: 'input',
      name: 'deleteRole',
      message: 'What is the role id you would like to delete?',
    } 
]).then((answer) => {
    console.log(answer)
    db.query(`DELETE FROM roles WHERE id = ("${answer.deleteRole}");`, (err, res) => {
        
        if(err) return err;
        console.table(res)
        console.log("Role successfully deleted!")
       employeeCMS();
     })

})
  
})

};

//DELETE Department

function deleteDepartment(){    
    
    db.query("SELECT * FROM department;", (err, res) => {
    if(err) return err;
    console.table(res);

    inquirer.prompt([
    {
      type: 'input',
      name: 'deleteDepartment',
      message: 'What is the department you would like to delete?',
    } 
]).then((answer) => {
    console.log(answer)
    db.query(`DELETE FROM department WHERE department_name = ("${answer.deleteDepartment}");`, (err, res) => {
        
        if(err) return err;
        console.table(res)
        console.log("Department successfully deleted!")
       employeeCMS();
     })

})
  
})

};

