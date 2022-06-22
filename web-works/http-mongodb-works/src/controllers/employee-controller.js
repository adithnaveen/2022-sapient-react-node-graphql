
import mongoose from 'mongoose';
import { EmployeeSchema } from '../models/employee-model';

const Employee = mongoose.model('Employee', EmployeeSchema);

// add employee 
export const addEmployee = (req, res) => {
    let newEmployee = new Employee(req.body);

    newEmployee.save((err, employee) => {
        if (err) {
            res.send(err);
        }
        res.json(employee);
    })
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
    Employee.remove({ _id: req.params.employeeId }, (err, data) => {
        if (err) {
            res.send(err);
        }
        res.json({ message: "remployee deleted successfully.", data });
    })
}

export const home = (req, res) => {
    res.json({ "message": "Welcome from Express" });
}
