import { Request, Response } from "express";
import { AuthDto } from "../dtos/authDto";
import { UserService } from "../services/userService";
import { CustomError } from "../errors/customError";
import { generateToken } from "../config/config";

export class AuthController {

    static async registerUser(req: Request, res: Response) {
        const validateData = AuthDto.dataRegisterValidation(req.body);
        if (!validateData.isValid) {
            res.status(400).json({ status: 400, message: validateData.message })
            return;
        }

        const { email, password, name, phone } = req.body;

        try {
            const registerUser = await UserService.createUser({ email, password, name, phone, role: "customer", });
            if (!registerUser.isValid) {
                res.status(400).json({ status: 400, message: registerUser.message });
                return;
            }

            const createToken = generateToken({
                email,
                password,
                role: 'customer'
            });

            res.status(200).json({ status: 200, message: "User registered succesfully", token: createToken })
        } catch (error) {
            throw CustomError.internalServerError();
        }
    }

    static async loginUser(req: Request, res: Response) {
        const validateData = AuthDto.dataLoginValidation(req.body);
        if (!validateData.isValid) {
            res.status(400).json({ status: 400, message: validateData.message })
            return;
        }

        const { email, password } = req.body;

        try {
            const userExist = await UserService.verifyExistUser(email);
            if (userExist) {
                res.status(400).json({ status: 400, message: "User not found" });
                return;
            }

            const loginUser = await UserService.loginUser(email, password);
            if (!loginUser?.isValid) {
                res.status(400).json({ status: 400, message: loginUser?.message });
                return;
            }

            const createToken = generateToken({
                email,
                password,
                role: 'customer'
            });

            res.status(200).json({ status: 200, message: "Login succesfull", token: createToken })

        } catch (error) {

        }

    }

}