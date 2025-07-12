import express from 'express';
import path from 'path';

interface Options {
    port: number;
    publicpath?: string;
}

export class Server {

private app = express();
private readonly port: number;
private readonly publicPath: string;

constructor(options: Options) {
    const { port, publicpath = 'public' } = options;
    this.port = port;
    this.publicPath = publicpath;

}
    async start() {

    //* Middlewares

    //* Public Folder

    this.app.use( express.static( this.publicPath) );


        this.app.get(/.*/, (req, res) => {
            const indexPaht = path.join( __dirname + '../../../public/index.html' );
            res.sendFile(indexPaht);
            
        })


        this.app.listen(3000, ()=> {
            console.log(`Server running en el puerto ${ 3000 } `);
        });
        
    }
}