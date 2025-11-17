import { z } from "zod";

export const categorySchema = z.object({
  category: z
    .string()
    .min(3, "Mininum 3 char is required")
    .max(50, "Category should be less than 50 characters"),
  description: z.string().optional(),
  isActive: z.coerce.boolean().optional(),
});

export const subCategorySchema = z.object({
  subCategory: z
    .string()
    .min(3, "Mininum 3 char is required")
    .max(50, "SubCategory should be less than 50 characters"),
  categoryId: z.string().min(1, "Selecte Category"),
  description: z
    .string()
    .min(3, "Mininum 3 char is required")
    .max(50, "Description should be less than 50 characters"),
  isActive: z.coerce.boolean().optional(),
});
