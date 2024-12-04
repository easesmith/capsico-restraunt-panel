import { z } from 'zod';

const customizationSchema = z.object({
    categoryname: z.string().min(1, "Category Name is required"),
    subcategoryname: z.string().min(1, "Subcategory Name is required"),
    customizationOptions: z.array(
        z.object({
            CustomizationName: z.string().min(1, "Customization Name is required"),
            price: z.number().min(0, "Price must be at least 0"),
        })
    ).min(1, "At least one customization type is required"),
});

export const addItemSchema = z.object({
    itemName: z.string().min(1, "Item Name is required"),
    itemImage: z.any().refine(file => file && file.length > 0, "Item Image is required"),
    itemDescription: z.string().min(1, "Item Description is required"),
    cuisine: z.string().min(1, "Cuisine is required"),
    menuCategory: z.string().min(1, "Menu Category is required"),
    basePrice: z.string().min(1, "Price cannot be 0"),
    packagingCharges: z.string().min(1, "Packaging Charges is required"),
    numberOfPeople: z.string().min(1, "Number of People is required"),
    dishSize: z.string().min(1, "Dish Size is required"),
    customizations: z.array(customizationSchema).min(1, "At least one customization is required"),
});
