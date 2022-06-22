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


import winston from 'winston';


const logConfiguration = winston.createLogger({
    level: 'info',
    format: winston.format.json(),
    transports: [
        new winston.transports.File({ filename: 'error.log', level: 'error' }),
        new winston.transports.File({ filename: 'combined.log' }),
        new winston.transports.Console(),
    ],
});


const logger = winston.createLogger(logConfiguration);



const routes = (app) => {
    app.route("/")
        .get(home);


    app.route("/employee")
        .get(getAllEmployees)
        .post((req, res, next) => {
            // this is middleware 
            // you can do logging / security related code here 
            logger.info("You invoked POST Method");

            logger.info("Request From : ", req.originalUrl);
            logger.info("Method req go : ", req.method);
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
