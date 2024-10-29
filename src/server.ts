import express, { Router } from "express";
import cors from "cors";

interface IOptions {
    host: string
    port: number
    routes: Router
}

export class Server {

    public readonly app = express();
    private readonly port: number;
    private readonly host: string;
    private readonly routes: Router;

    constructor(options: IOptions) {
        const { port = 3000, host = "localhost", routes } = options;
        this.port = port;
        this.host = host;
        this.routes = routes;
    }

    async start() {
        this.app.use(cors());
        this.app.use(express.json());
        this.app.use(this.routes);

        this.app.listen(this.port, this.host, () => {
            console.log(`The server is running on http://${this.host}:${this.port}\n`);
        })
    }

}