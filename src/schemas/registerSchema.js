import { z } from "zod"

export const RegisterSchema1 = z.object({
    restaurantName: z.string().min(1, {
        message: "Restaurant name is required",
    }),
    restaurantEmail: z.string()
        .min(1, {
            message: "Email is required",
        })
        .email({
            message: "Invalid email address",
        }),
    addressLine: z.string().min(1, {
        message: "AddressLine is required",
    }),
    city: z.string().min(1, {
        message: "City is required",
    }),
    state: z.string().min(1, {
        message: "State is required",
    }),
    pinCode: z.string().length(6, {
        message: "PinCode must be exactly 6 digits long",
    }),
    latitude: z.coerce.number().min(1, {
        message: "Latitude is required",
    }),
    longitude: z.coerce.number().min(1, {
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
    STDCode: z.string().optional(),
    landlineNumber: z.string().optional(),
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
        restaurantType: z.enum(["BOTH", "VEG", "NON_VEG"], {
            required_error: "Please select an opening time",
        }),
        priceForOne: z.string().min(1, "Price for one in required"),
        restaurantOptions: z.array(z.string()).min(1, "Please select at least one restaurant option"),
        cuisines: z.array(z.string()).min(1, "Please select at least one cuisine"),
        openingTime: z.string().min(1, "Please select an opening time"),
        closingTime: z.string().min(1, "Please select a closing time"),
        days: z.array(z.string()).min(1, "Please select at least one day"),
    })


export const RegisterSchema3 =
    z.object({
        menuImages: z.any().refine(file => file && file.length > 0, "Menu Images are required"),
        restaurantImages: z.any().refine(file => file && file.length > 0, "Restaurant Images are required"),
        foodImages: z.any().refine(file => file && file.length > 0, "Food Images are required"),
    })
