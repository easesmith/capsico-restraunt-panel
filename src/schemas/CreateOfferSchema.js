import { z } from 'zod';

export const CreateOfferSchema1 = z.object({
    code: z.string().optional(),
    name: z.string().min(1, "Name is required."),
    description: z.string().min(1, "Description is required."),
    discountType: z.string().min(1, "Discount type is required."),
    discountValue: z.string().optional(),
    maxDiscount: z.string().optional(),
}).superRefine((data, ctx) => {
    if (data.discountType === "fixed" && !data.discountValue) {
        ctx.addIssue({
            path: ["discountValue"], // Field where the error should be shown
            message: "Discount Value is required for fixed type",
        });
    }

    if (data.discountType === "percentage" && !data.discountValue) {
        ctx.addIssue({
            path: ["discountValue"],
            message: "Discount Value is required for percentage type",
        });
    }

    if (data.discountType === "percentage" && !data.maxDiscount) {
        ctx.addIssue({
            path: ["maxDiscount"],
            message: "Max Discount is required for percentage type",
        });
    }

    if (data.discountType === "buyOneGetOne" && !data.discountValue) {
        ctx.addIssue({
            path: ["discountValue"],
            message: "Discount value is required for Buy One Get One type",
        });
    }
});

export const CreateOfferSchema2 = z.object({
    minOrderValue: z.string().optional(),
    applicableOn: z.string().optional(),
    applicableCuisines: z.array(z.string()).optional(),
    applicableItems: z.array(z.string()).optional(),
    maxUsageCount: z.string().optional(),
    maxUsagePerUser: z.string().optional(),
    usageFrequency: z.string().optional(),
    // selectedCuisines: z.array().optional(),
    // selectedItems: z.array().optional(),
});

export const CreateOfferSchema3 = z.object({
    startDate: z.date().refine((val) => !!val, "Start date is required."),
    endDate: z.date().refine((val) => !!val, "End date is required."),
    dealType: z.string().optional(),
    time: z.string().optional(),
    dealoftheday: z.boolean().optional(),
    priority: z.string().optional(),
});
