import { envs } from "./config/envs"
import { AppRoutes } from "./routes/routes"
import { Server } from "./server"

const main = async () => {

    new Server({
        port: envs.PORT,
        host: envs.HOST,
        routes: AppRoutes.routes
    })
        .start();
}

main();