import { MongoDatabase } from "./config/db/connect"
import { envs } from "./config/envs"
import { AppRoutes } from "./routes/routes"
import { Server } from "./server"

const main = async () => {

    await MongoDatabase.connect({
        dbConnectionString: envs.DB_URL,
        dbName: envs.DB_NAME
    });

    new Server({
        port: envs.PORT,
        host: envs.HOST,
        routes: AppRoutes.routes
    })
        .start();
}

main();