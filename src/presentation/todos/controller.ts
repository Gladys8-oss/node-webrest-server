import { RequestHandler } from 'express';

export class TodosController {

    //* DI
    constructor() {}

        public getTodos: RequestHandler = (req, res) => {
            
        res.json([
            {id: 1, text: 'Buy milk', createAt: new Date() },
            {id: 2, text: 'Buy bread', createAt: null },
            {id: 3, text: 'Buy butter', createAt: new Date() },
        ]);
    }
        
}
