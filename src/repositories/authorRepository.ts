import { CustomError } from "../errors/customError";
import authorModel from "../models/authorModel";

export class AuthorRepository {

    static async createAuthor(data: object) {
        try {
            const createAuthor = await authorModel.create(data);
            return { isValid: true };
        } catch (error) {
            throw CustomError.internalServerError();
        }
    }

    static async getAllAuthors() {
        try {
            const getAllAuthors = await authorModel.find({});
            return { isValid: true, message: "Success", payload: getAllAuthors }
        } catch (error) {
            throw CustomError.internalServerError();
        }
    }
}