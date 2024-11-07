import { Request, Response } from "express";
import { AuthorDto } from "../dtos/authorDto";
import { AuthorService } from "../services/authorService";


export class AuthorController {

    static async createAuthor(req: Request, res: Response) {
        const validateData = AuthorDto.dataAuthorValidation(req.body);
        if (!validateData.isValid) {
            res.status(400).json({ status: 400, message: validateData.message })
            return;
        }

        const createAuthor = await AuthorService.createAuthor(req.body);
        res.json({ status: 200, message: "Author created" })
    }

    static async getAllAuthors(req: Request, res: Response) {
        const getAllAuthors = await AuthorService.getAllAuthors();
        if (!getAllAuthors?.payload && getAllAuthors?.payload.length === 0) {
            res.status(400).json({ status: 400, message: "No hay ningun author registradoo" })
            return;
        }
        res.json({ status: 200, payload: getAllAuthors?.payload })
    }
}