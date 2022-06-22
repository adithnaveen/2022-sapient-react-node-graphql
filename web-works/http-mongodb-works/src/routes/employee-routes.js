import { home } from "../controllers/employee-controller";

const routes = (app) => {
    app.route("/")
        .get(home);


    app.route()
}

export default routes;
