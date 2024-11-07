import { CustomError } from "../errors/customError";
import { IUserData } from "../interfaces/IUserdata";
import { UserRepository } from "../repositories/userRepository";
import bcrypt from 'bcrypt';

export class UserService {

    static async createUser(data: IUserData) {
        try {
            const userExist = await this.verifyExistUser(data.email);
            if (userExist) return { isValid: false, message: "User already exist" }

            const { email, password, name, phone, role } = data;

            const encryptedPassword = await bcrypt.hash(password, 10);

            const createUser = await UserRepository.createUser({ email, password: encryptedPassword, name, phone, role });
            return { isValid: true, message: "User created", payload: createUser }
        } catch (error) {
            if (error instanceof CustomError) {
                throw CustomError.badRequest(`Error: ${error.message}`);
            } else throw error;
        }
    }

    static async verifyExistUser(email: string) {
        try {
            const userExist = await UserRepository.getUserByEmail(email);
            if (userExist) return false;
            return true;
        } catch (error) {
            if (error instanceof CustomError) {
                throw CustomError.badRequest(`Error: ${error.message}`);
            } else throw error;
        }
    }

    static async loginUser(email: string, password: string) {
        try {
            const getUser = await UserRepository.getUserByEmail(email);

            if (!getUser || !getUser.password) {
                throw new CustomError(404, "User not found or password is missing");
            }

            const isPasswordValid = await bcrypt.compare(password, getUser.password);

            if (!isPasswordValid) {
                return { isValid: false, message: "Incorrect password" };
            }

            return { isValid: true, message: "Login successful" };
        } catch (error) {

        }
    }

}