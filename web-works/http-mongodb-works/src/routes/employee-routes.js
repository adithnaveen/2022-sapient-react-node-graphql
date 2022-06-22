import {
    deleteEmployeeById,
    getEmployeeById,
    getEmployeesByFirstName,
    home,
    updateEmployee
}
    from "../controllers/employee-controller";

const routes = (app) => {
    app.route("/")
        .get(home);


    app.route("/employee")
        .get(getAllEmployees)
        .post(addEmployee);

    app.route("/employee/:employeeId")
        .get(getEmployeeById)
        .put(updateEmployee)
        .delete(deleteEmployeeById);

    app.route("/employee/name/:firstName")
        .get(getEmployeesByFirstName);
}

export default routes;
