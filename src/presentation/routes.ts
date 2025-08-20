import { Router } from "express";
import { TodosController } from "./todos/controller";
import { TodoRoutes } from "./todos/routes";

export class AppRouters {

    static get routes(): Router {

        const router = Router();

 //* ROUTERS

  //  const todosController = new TodosController();

    router.use('/', TodoRoutes.routes);

        return router;
    }
}