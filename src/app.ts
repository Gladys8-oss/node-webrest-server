import { envs } from './config/envs';
import { AppRouters } from './presentation/routes';
import { Server } from './presentation/server'




(async() => {
    main();

   

    function main() {

        const server = new Server({
            port: envs.PORT,
            publicpath: envs.PUBLIC_PATH,
            routes: AppRouters.routes,
        });

        server.start();
    }
})();