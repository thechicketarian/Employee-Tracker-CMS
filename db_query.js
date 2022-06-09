//QUERY FUNCTIONS

//   view all departments
function viewAllDeparments() {
    
    console.log('See Departments Below')
    db.query("SELECT * FROM department", function(err, res) {
      if (err) {
          //logs error 
          console.log(err)
      } else
      //logs result into the command line
      console.table(res)
      //returns back the main directory
    //   employeeCMS();
  })
}

//   view all roles
function viewAllRoles() {
    
    console.log('See Roles Below')
    db.query("SELECT * FROM role", function(err, res) {
      if (err) {
          //logs error 
          console.log(err)
      } else
      //logs result into the command line
      console.table(res)
      //returns back the main directory
    //   employeeCMS();
  })
}

//   view all employees
function viewAllEmployees() {
    
    console.log('See Roles Below')
    db.query("SELECT * FROM employee", function(err, res) {
      if (err) {
          //logs error 
          console.log(err)
      } else
      //logs result into the command line
      console.table(res)
      //returns back the main directory
    //   employeeCMS();
  })
}

//   add a department

function addADeparment(){
    console.log('continue to add a role');
        
        inquirer.prompt([
            {
                name: "newDepartmentName",
                type: "input",
                message: "What is the department name?"
            }
        ])
        .then((answer) => {
                console.log(answer)
                console.log("MAKING ANOTHER SPACE --------");

                let newDName = answer;

                db.query(`"INSERT INTO department (department_name) VALUES ("${newDName.name}");`, function(err, res) {
                    if (err) {
                        //logs error 
                        console.log(err)
                    } else
                    //logs result into the command line
                    console.table(res)
                    //returns back the main directory
                    // employeeCMS();
              });
              
        
    //end of inquirer
    })

};

//   add a role


//   add an employee
//   update an employee role