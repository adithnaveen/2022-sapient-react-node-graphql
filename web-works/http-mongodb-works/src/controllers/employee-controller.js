
import mongoose from 'mongoose';
import { EmployeeSchema } from '../models/employee-model';

import { hash, compare } from '../util/hash'

const Employee = mongoose.model('Employee', EmployeeSchema);


// add employee - version 1
export const addEmployee_v1 = (req, res) => {
    let newEmployee = new Employee(req.body);

    newEmployee.save((err, employee) => {
        if (err) {
            res.send(err);
        }
        res.json(employee);
    })
}

// add employee - version 2 with encryption

export const addEmployee = async (req, res) => {
    let emp = req.body;
    emp.password = await hash(emp.password);
    let newEmployee = new Employee(emp);

    try {
        let retEmp = await newEmployee.save();
        res.send(retEmp);
    } catch (err) {
        res.send(err);
    }
}




// get all employees 
export const getAllEmployees = (req, res) => {
    Employee.find({}, (err, employees) => {
        if (err) {
            res.send(err);
        }
        res.json(employees);
    });
}

// get all employees by their first Name 
export const getEmployeesByFirstName = (req, res) => {
    Employee.find({ 'firstName': req.params.firstName }, (err, employees) => {
        if (err) {
            res.send(err);
        }
        res.json(employees);
    });
}


// get employee by id 
export const getEmployeeById = (req, res) => {
    Employee.findById(req.params.employeeId, (err, employee) => {
        if (err) {
            res.send(err);
        }
        res.json(employee);
    })
}

// update employee
export const updateEmployee = (req, res) => {
    Employee.findByIdAndUpdate({ _id: req.params.employeeId }, req.body, { new: true }, (err, updatedEmployee) => {
        if (err) {
            res.send(err);
        }
        res.json(updatedEmployee);
    })
}

// delete 
export const deleteEmployeeById = (req, res) => {
    Employee.findByIdAndDelete({ _id: req.params.employeeId }, (err, data) => {
        if (err) {
            res.send(err);
        }
        res.json({ message: "remployee deleted successfully.", data });
    })
}



// authenticat user - (email, password)
export const authenticateUser = async (req, res) => {
    try {
        let retEmployee = await Employee.findOne({ email: req.body.email });
        const validateEmployee = await compare(req.body.password, retEmployee.password);

        if (validateEmployee) {
            res.send({ message: "User Validated" });
        } else {
            res.send({ message: "Sorry not validate credentials :" + req.body.email });
        }
    } catch (err) {
        res.send({ message: "Error Authenticating :" + req.body.email });
    }
}

export const home = (req, res) => {
    res.json({ "message": "Welcome from Express" });
}
