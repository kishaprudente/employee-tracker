DROP DATABASE IF EXISTS employee_trackerDB;

CREATE DATABASE employee_trackerDB;

USE employee_trackerDB;

CREATE TABLE departments(
	id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(30),
    PRIMARY KEY(id)
);

CREATE TABLE roles(
	id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(30),
    salary DECIMAL(10,2),
    department_id INT,
    CONSTRAINT tracker_id
    FOREIGN KEY (department_id)
        REFERENCES departments(id)
        ON UPDATE CASCADE
        ON DELETE CASCADE
);

CREATE TABLE employees(
	id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    role_id INT,
    manager_id INT,
    CONSTRAINT employee_ibfk_1
    FOREIGN KEY (role_id)
        REFERENCES roles(id)
        ON UPDATE CASCADE
        ON DELETE CASCADE,
	FOREIGN KEY (manager_id)
        REFERENCES employees(id)
        ON UPDATE CASCADE
        ON DELETE CASCADE
);

DROP TABLE employees;

INSERT INTO departments(name)
VALUES ("Engineering"), ("Finance"), ("Sales"), ("Legal");

SELECT * FROM departments;

INSERT INTO roles(title, salary,department_id)
VALUES ("Software Engineer", 130000, 1),
("Lead Engineer", 175000, 1),
("Accountant", 85000, 2),
("Sales Lead", "110000", 3),
("Salesperson", "65000", 3),
("Lawyer", "150000", 4),
("Legal Team Lead", "175000", 4);

SELECT * FROM roles;