import { z } from 'zod';

export const outletSchema = z.object({
    name: z.string().min(1, "Name is required").default("Desi Platters"),
    category: z.array(z.string()).nonempty("At least one category is required").default(["North Indian"]),
    address: z.string().min(1, "Address is required").default("529/k, Shadab volony, Khurram Nagar, Gorakhpur"),
    location: z.object({
        lat: z.string().optional().default(""),
        lng: z.string().optional().default("")
    })
});

export const OutletBasicInfoSchema = z.object({
    name: z.string().min(1, "Name is required"),
    email: z.string().email("Invalid email address"),
    phone: z
        .string()
        .min(10, "Phone number must be at least 10 digits")
        .regex(/^[0-9]+$/, "Phone number must contain only digits"),
    restaurantType: z.string().min(1, "Restaurant type is required"),
});

export const imageSchema = z.object({
    restaurant: z
        .any()
        .refine(file => file && file.length > 0, "Image is required"),
});


export const addressSchema = z.object({
    addressLine: z.string().min(1, "AddressLine is required"),
    city: z.string().min(1, "City is required"),
    state: z.string().min(1, "State is required"),
    pinCode: z
        .string()
        .length(6, "Pincode must be exactly 6 digits")
        .regex(/^\d{6}$/, "Pincode must only contain digits"),
    latitude: z.string().min(1, "Latitude is required"),
    longitude: z.string().min(1, "Longitude is required"),
});