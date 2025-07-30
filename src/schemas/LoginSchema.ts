import {object, string} from "zod";

export const LoginSchema = object({
    username: string("Username is required")
        .min(1, "Username is required"),
    password: string("Password is required")
        .min(1, "Password is required")
        // .min(8, "Password must be more than 8 characters")
        .max(32, "Password must be less than 32 characters"),
})