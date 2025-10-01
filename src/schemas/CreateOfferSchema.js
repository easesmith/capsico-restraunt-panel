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


export const offerSchema = z
  .object({
    // offerCode: z.string().min(1, "Offer Code is required").optional(), // optional unique
    restaurantId: z.string().min(1, "Restaurant is required"),

    offerName: z.string().min(1, "Offer name is required"),
    description: z.string().optional(),

    offerType: z.enum(
      ["flatOff", "percentageDiscount", "bogoOffers", "comboDeals"],
      {
        required_error: "Offer type is required",
      }
    ),

    scope: z.enum(["global", "categorywise", "itemwise"], {
      required_error: "Scope is required",
    }),

    priorityLevel: z.coerce
      .number()
      .min(0, "Priority level must be 0 or greater"),

    discountValue: z.coerce
      .number()
      .min(0, "Discount value must be 0 or greater")
      .optional(),
    maxDiscount: z.coerce
      .number()
      .min(0, "Maximum discount must be 0 or greater")
      .optional(),

    // offerDetails (nested object, conditional fields later)
    offerDetails: z
      .object({
        bogoConfig: z
          .object({
            buyQuantity: z.coerce.number().optional(),
            getQuantity: z.coerce.number().optional(),
            freeItemType: z.string().optional(),
          })
          .optional(),
        comboItems: z
          .array(
            z.object({
              itemId: z.string().optional(),
              quantity: z.coerce.number().optional(),
              isRequired: z.boolean().default(false),
            })
          )
          .optional(),

        comboPrice: z.coerce.number().optional(),
        comboConfig: z
          .object({
            allowSubstitution: z.boolean().default(false),
            substitutionLimit: z.coerce.number().optional(),
          })
          .optional(),
      })
      .optional(),

    applicableItems: z.array(z.string()).optional(),
    applicableCategories: z.array(z.string()).optional(),

    // excludedItems: z.array(z.string()).optional(),
    // excludedCategories: z.array(z.string()).optional(),

    minOrderValue: z.number().optional(),

    startDate: z.date({
      required_error: "Start date is required",
    }),
    endDate: z.date({
      required_error: "End date is required",
    }),

    isActive: z.boolean().default(true),
    priority: z.number().min(0).max(100).default(0),

    maxUsage: z.number(),
    maxUsesPerUser: z.number(),

    createdBy: z.string().optional(), // filled from backend
    createdByType: z.enum(["admin", "restaurant"]).optional(),
  })
  .superRefine((data, ctx) => {
    const comboItems = data.offerDetails?.comboItems;
    if (comboItems) {
      const seen = new Set();
      comboItems.forEach((item, index) => {
        if (seen.has(item.itemId)) {
          ctx.addIssue({
            code: "custom",
            path: ["offerDetails", "comboItems", index, "itemId"], // attach error to the specific field
            message: "This item is already added to the combo",
          });
        } else {
          seen.add(item.itemId);
        }
      });
    }

    // Ensure endDate > startDate
    if (data.endDate <= data.startDate) {
      ctx.addIssue({
        code: "custom",
        path: ["endDate"],
        message: "End date must be later than start date",
      });
    }

    // Offer type validation
    if (
      data.offerType === "flatOff" ||
      data.offerType === "percentageDiscount"
    ) {
      if (!data?.discountValue) {
        ctx.addIssue({
          code: "custom",
          path: ["discountValue"],
          message:
            "Discount value is required for flatOff and percentageDiscount offers",
        });
      }
    }

    if (data.offerType === "percentageDiscount" && !data?.maxDiscount) {
      ctx.addIssue({
        code: "custom",
        path: ["maxDiscount"],
        message: "Max discount is required for percentageDiscount offers",
      });
    }

    if (data.offerType === "bogoOffers") {
      const bogo = data.offerDetails?.bogoConfig;

      // Buy Quantity
      if (bogo?.buyQuantity == null) {
        ctx.addIssue({
          code: "custom",
          path: ["offerDetails", "bogoConfig", "buyQuantity"],
          message: "Buy Quantity is required",
        });
      }

      // Get Quantity
      if (bogo?.getQuantity == null) {
        ctx.addIssue({
          code: "custom",
          path: ["offerDetails", "bogoConfig", "getQuantity"],
          message: "Get Quantity is required",
        });
      }

      // Free Item Type
      if (!bogo?.freeItemType) {
        ctx.addIssue({
          code: "custom",
          path: ["offerDetails", "bogoConfig", "freeItemType"],
          message: "Free Item Type is required",
        });
      }
    }
    if (data.offerType === "comboDeals") {
      if (
        !data.offerDetails?.comboItems ||
        data.offerDetails.comboItems.length < 2
      ) {
        ctx.addIssue({
          code: "custom",
          path: ["offerDetails", "comboItems"],
          message: "At least 2 combo items are required for comboDeals",
        });
      }
      if (!data.offerDetails?.comboPrice) {
        ctx.addIssue({
          code: "custom",
          path: ["offerDetails", "comboPrice"],
          message: "Combo price is required for comboDeals",
        });
      }
    }

    // Scope validation
    if (
      data.scope === "itemwise" &&
      (!data.applicableItems || data.applicableItems.length === 0)
    ) {
      ctx.addIssue({
        code: "custom",
        path: ["applicableItems"],
        message: "Applicable items are required for itemwise scope",
      });
    }

    if (
      data.scope === "categorywise" &&
      (!data.applicableCategories || data.applicableCategories.length === 0)
    ) {
      ctx.addIssue({
        code: "custom",
        path: ["applicableCategories"],
        message: "Applicable categories are required for categorywise scope",
      });
    }
  });