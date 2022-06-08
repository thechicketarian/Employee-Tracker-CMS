const mysql = require('mysql2');

// Connect to database
const db = mysql.createConnection(
    {
      host: 'localhost',
      user: 'root',
      password: '',
      database: 'employee_db'
    },

  );

    db.connect(function(err) {
    if (err) throw err;
    console.log(`Connected to the employee_db database.`)
  });

class Connection {
    constructor(connection){
        this.connection = connection;

    }
    //DEPARTMENTS
    viewAllDepartments(){
      return this.connection.promise().query("SELECT * FROM department");
  }
        //add a department
        addDepartment(userInput) {
          return this.connection.promise().query(`"INSERT INTO department (department_name) VALUES ("${userInput}")`);
        } 

    //ROLES 
    viewAllRoles(){
      return this.connection.promise().query("SELECT * FROM roles");
    }
    //EMPLOYEES
    viewAllEmployees(){
        return this.connection.promise().query("SELECT * FROM employee");
    }




};

module.exports = new Connection(db);