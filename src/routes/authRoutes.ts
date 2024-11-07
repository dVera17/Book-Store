import { Router } from "express";
import { AuthController } from "../controllers/authController";

export class AuthRoutes {

    static get routes(): Router{
        const router = Router();

        router
            .post('/register', AuthController.registerUser)
            .post('/login', AuthController.loginUser)

        return router;
    }

}