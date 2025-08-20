import { Router } from "express";
import { TodosController } from "./controller";

export class TodoRoutes {

    static get routes(): Router {

        const router = Router();

 //* ROUTERS

    const todosController = new TodosController();

    router.get('/api/todos',  todosController.getTodos);

        return router;
    }
}