type roleEnum = "customer" | "admin";

export interface IUserData {
    email: string,
    password: string,
    name: string
    phone: string
    role: roleEnum
}