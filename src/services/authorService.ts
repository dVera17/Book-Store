import { AuthorRepository } from "../repositories/authorRepository";


export class AuthorService {

    static async createAuthor(data: object) {
        try {
            const createUser = await AuthorRepository.createAuthor(data);
            if (!createUser) return { isValid: false, message: "Error" }
            return { isValid: true, message: "Author created" }
        } catch (error) {
            console.log(error);
        }
    }

    static async getAllAuthors() {
        try {
            const getAllUsers = await AuthorRepository.getAllAuthors();
            return { isValid: true, payload: getAllUsers.payload }
        } catch (error) {

        }
    }

}