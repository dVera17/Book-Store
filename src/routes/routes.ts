import { Router } from "express";
import { AuthRoutes } from "./authRoutes";
import { AuthorRoutes } from "./authorRoutes";

export class AppRoutes {

    static get routes(): Router {
        const router = Router();

        router
            .use('/auth', AuthRoutes.routes)
            .use('/author', AuthorRoutes.routes)

        return router;
    }
}