import { z } from 'zod'

export const categorySchema = z.object({
  category: z.string().min(3, 'Mininum 3 char is required').max(50, 'Name should be less than 50 characters'),
});

export const subCategorySchema = z.object({
  subCategory: z.string().min(3, 'Mininum 3 char is required').max(50, 'Name should be less than 50 characters'),
});