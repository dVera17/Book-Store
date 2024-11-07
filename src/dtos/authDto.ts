import { z } from "zod";

const registerUserSchema = z.object({
    email: z.string().regex(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/),
    password: z.string().min(8),
    name: z.string().min(3),
    phone: z.string().min(7)
});

const loginUserSchema = z.object({
    email: z.string().regex(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/),
    password: z.string().min(8),
})

interface IValidationResult {
    isValid: boolean
    message: string | string[]
}

export class AuthDto {

    static dataRegisterValidation(data: object): IValidationResult {
        const validation = registerUserSchema.safeParse(data);

        if (!validation.success && validation.error) {
            return { isValid: false, message: validation.error.errors.map(error => `${error.path} - ${error.message}`) };
        }
        return { isValid: true, message: "Success" };
    }

    static dataLoginValidation(data: object): IValidationResult {
        const validation = loginUserSchema.safeParse(data);

        if (!validation.success && validation.error) {
            return { isValid: false, message: validation.error.errors.map(error => `${error.path} - ${error.message}`) };
        }

        return { isValid: true, message: "Success" };
    }

}