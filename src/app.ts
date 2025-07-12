import { envs } from './config/envs';
import { Server } from './presentation/server'




(async() => {
    main();

   

    function main() {

        const server = new Server({
            port: envs.PORT,
            publicpath: envs.PUBLIC_PATH
        });

        server.start();
    }
})();