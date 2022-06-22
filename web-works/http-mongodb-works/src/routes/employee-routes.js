import {
    deleteEmployeeById,
    getEmployeeById,
    addEmployee,
    getAllEmployees,
    getEmployeesByFirstName,
    home,
    updateEmployee,
    authenticateUser
}
    from "../controllers/employee-controller";

import hash from '../util/hash';

const routes = (app) => {
    app.route("/")
        .get(home);


    app.route("/employee")
        .get(getAllEmployees)
        .post((req, res, next) => {
            // this is middleware 
            // you can do logging / security related code here 
            console.log("you invoked POST Mehtod");
            console.log("Request From : ", req.originalUrl);
            console.log("Method req go : ", req.method);
            next();
        }, addEmployee);


    app.route("/employee/:employeeId")
        .get(getEmployeeById)
        .put(updateEmployee)
        .delete(deleteEmployeeById);

    app.route("/employee/name/:firstName")
        .get(getEmployeesByFirstName);

    app.route("/auth")
        .post(authenticateUser);
}

export default routes;
