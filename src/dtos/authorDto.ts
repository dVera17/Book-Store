import { z } from "zod";

const authorSchema = z.object({
    name: z.string().min(10).max(250),
    nacionality: z.string().min(10).max(250)
})

export class AuthorDto {

    static dataAuthorValidation(data: object) {
        const validation = authorSchema.safeParse(data);

        if (!validation.success && validation.error) {
            return { isValid: false, message: validation.error.errors.map(error => `${error.path} - ${error.message}`) };
        }
        return { isValid: true, message: "Success" };
    }

}