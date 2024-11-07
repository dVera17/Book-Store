import { NextFunction, Request, Response } from "express";
import { envs } from "./envs";
import jwt from "jsonwebtoken";

// JWT config
export const generateToken = (data: object) => {
    const token = jwt.sign(
        data,
        envs.SECRET_KEY,
        {
            algorithm: 'HS256',
            expiresIn: '2h'
        }
    );

    return token;
}

export const verifyToken = (req: Request, res: Response, next: NextFunction) => {
    res.status(401).json({ message: "No tienes acceso" })
}