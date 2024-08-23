import { z } from "zod"

export const RegisterSchema1 = z.object({
    restaurantName: z.string().min(1, {
        message: "Restaurant name is required",
    }),
    restaurantAddress: z.string().min(1, {
        message: "Restaurant address is required",
    }),
    latitude: z.string().min(1, {
        message: "Latitude is required",
    }),
    longitude: z.string().min(1, {
        message: "Longitude is required",
    }),
    phoneNumber: z.string()
        .min(10, {
            message: "Phone number must be at least 10 digits",
        })
        .max(15, {
            message: "Phone number cannot exceed 15 digits",
        })
        .regex(/^\d+$/, {
            message: "Phone number must contain only digits",
        }),
    STDCode: z.string()
        .min(2, {
            message: "STD code must be at least 2 digits",
        })
        .max(5, {
            message: "STD code cannot exceed 5 digits",
        })
        .regex(/^\d+$/, {
            message: "STD code must contain only digits",
        }),
    landlineNumber: z.string()
        .min(5, {
            message: "Landline number must be at least 5 digits",
        })
        .max(15, {
            message: "Landline number cannot exceed 15 digits",
        })
        .regex(/^\d+$/, {
            message: "Landline number must contain only digits",
        }),
    fullName: z.string().min(1, {
        message: "Full name is required",
    }),
    email: z.string()
        .min(1, {
            message: "Email is required",
        })
        .email({
            message: "Invalid email address",
        }),
});



export const RegisterSchema2 =
    z.object({
        restaurantOptions: z.array(z.string()).min(1, "Please select at least one restaurant option"),
        cuisines: z.array(z.string()).min(1, "Please select at least one cuisine"),
        openingTime: z.string().min(1, "Please select an opening time"),
        closingTime: z.string().min(1, "Please select a closing time"),
        days: z.array(z.string()).min(1, "Please select at least one day"),
    })


export const RegisterSchema3 =
    z.object({
        restaurantOptions: z.array(z.string()).min(1, "Please select at least one restaurant option"),
        cuisines: z.array(z.string()).min(1, "Please select at least one cuisine"),
        openingTime: z.string().min(1, "Please select an opening time"),
        closingTime: z.string().min(1, "Please select a closing time"),
        days: z.array(z.string()).min(1, "Please select at least one day"),
    })


export const RegisterSchema = z.object({
    ...RegisterSchema1.shape,
    ...RegisterSchema2.shape,
    ...RegisterSchema3.shape,
})