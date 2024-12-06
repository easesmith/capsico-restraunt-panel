import { z } from 'zod';

const customizationSchema = z.object({
    categoryName: z.string().min(1, "Category Name is required"),
    customizationType: z.string().min(1, "Customization Type is required"),
    customizationOptions: z.array(
        z.object({
            customizationName: z.string().min(1, "Customization Name is required"),
            price: z.number().min(0, "Price must be at least 0"),
        })
    ).min(1, "At least one customization is required"),
});

export const addItemSchema = z.object({
    itemName: z.string().min(1, "Item Name is required"),
    itemImage: z
        .any()
        .refine(file => file && file.length > 0, "Item Image is required"),
    itemDescription: z.string().min(1, "Item Description is required"),
    cuisine: z.string().min(1, "Cuisine is required"),
    foodType: z.string().min(1, "Food Type is required"),
    menuCategory: z.string().min(1, "Menu Category is required"),
    basePrice: z.string().min(1, "Price cannot be 0"),
    preparationTime: z.string().min(1, "Preparation Time is required"),
    packagingCharges: z.string().min(1, "Packaging Charges is required"),
    numberOfPeople: z.string().min(1, "Number of People is required"),
    dishSize: z.string().min(1, "Dish Size is required"),
    timingType: z.string().min(1, "Timing Type is required"),
    openingTime: z.string().optional(),
    closingTime: z.string().optional(),
    days: z.array(z.string()).optional(),
    restaurant: z.string().optional(),
}).refine(data => {
    if (data.timingType === "custom") {
        // Validate only when timingType is 'custom'
        return (
            !!data.openingTime && // Ensure openingTime exists
            !!data.closingTime && // Ensure closingTime exists
            Array.isArray(data.days) && // Ensure days is an array
            data.days.length > 0 // Ensure days has at least one element
        );
    }
    return true;
}, {
    message: "For custom timing, openingTime, closingTime, and at least one day are required.",
    path: ["timingType"],
});
