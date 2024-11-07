import { boolean } from "zod";
import { CustomError } from "../errors/customError";
import { IUserData } from "../interfaces/IUserdata";
import userModel from "../models/userModel";

export class UserRepository {

    static async createUser(data: IUserData) {
        try {
            const createUser = await userModel.create(data);
            if (createUser) return true;
            return false;
        } catch (error) {
            throw CustomError.internalServerError();
        }
    }

    static async getUserByEmail(email: string) {
        try {
            const query = await userModel.findOne({ email });
            return query;
        } catch (error) {
            throw CustomError.internalServerError();
        }
    }

}