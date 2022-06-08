USE employee_db;

INSERT INTO department (department_name)
VALUES ('Art'),('Engineering'),('Marketing');

INSERT INTO roles (title, salary, department_id)
VALUES ("Art Director", 50, 1),
("Lead Engineer", 100, 2),
("Associate Marketing", 150, 3);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Jane", "Bane", 1, NULL),
("Stella","Jella",2,1),
("Ben","Hen",3,1);

-- SELECT *
-- FROM department;
-- SELECT *
-- FROM role;
-- SELECT *
-- FROM employee;