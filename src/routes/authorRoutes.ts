import { Router } from "express";
import { AuthorController } from "../controllers/authorController";
import { verifyToken } from "../config/config";


export class AuthorRoutes {

    static get routes(): Router {
        const router = Router();

        router
            .post('/create', AuthorController.createAuthor)
            .get('/', AuthorController.getAllAuthors)

        return router;
    }

}