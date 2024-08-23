import { z } from "zod"

export const LoginSchema =
    z.object({
        email: z.string().min(2, {
            message: "Username must be at least 5 characters.",
        }),
        password: z.string().min(2, {
            message: "Password is invalid. It must be at least 8 characters long, contain at least one uppercase letter, one lowercase letter, one digit, and one special character (!@#$%^&*).",
        }),
    })