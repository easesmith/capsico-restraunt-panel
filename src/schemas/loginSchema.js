import { z } from "zod";

export const PhoneSchema = z.object({
    phoneNumber: z.string()
        .length(10, {
            message: "Phone number must be exactly 10 digits",
        })
        .regex(/^\d{10}$/, {
            message: "Phone number must contain exactly 10 digits",
        }),
});

export const EmailSchema = z.object({
    email: z.string()
        .email({
            message: "Invalid email address",
        }),
});
