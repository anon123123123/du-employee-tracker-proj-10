INSERT INTO department (name) 
VALUES ('Security'),
('Engineering'),
('Marketing'),
('Sales');
 
 INSERT INTO role (title, salary, department_id) 
 VALUES 
('Penetration Tester', 220000.00, 1),
('Engineering', 120000.00, 2),
('Marketing', 90000.00, 3),
('Sales', 600000.00, 4);

 INSERT INTO employee (first_name, last_name, role_id, manager_id) 
 VALUES 
('Malphar', 'leet', 1, 0),
('John', 'Doe', 2, 1),
('Sally', 'Sue', 3, 1),
('Bob', 'Bobertson III', 4, 1);

