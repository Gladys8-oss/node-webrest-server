import express, { Router } from 'express';
import path from 'path';

interface Options {
    port: number;
    routes: Router;
    publicpath?: string
}

export class Server {

private app = express();
private readonly port: number;
private readonly publicPath: string;
private readonly routes: Router;

constructor(options: Options) {
    const { port, routes, publicpath = 'public' } = options;
    this.port = port;
    this.publicPath = publicpath;
    this.routes =  routes;

}
    async start() {

    //* Middlewares

    //* Public Folder

    this.app.use( express.static( this.publicPath ) );

   
        //* Toutes
        this.app.use( this.routes );
        
        //* SPA
        this.app.get(/.*/, (req, res) => {
            const indexPaht = path.join( __dirname + `../../../${ this.publicPath } public/index.html` );
            res.sendFile(indexPaht);
            
        })


        this.app.listen(3000, ()=> {
            console.log(`Server running en el puerto ${ 3000 } `);
        });
        
    }
}