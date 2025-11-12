import { z } from "zod"

export const OnlineOrderingSchema1 = z.object({
    isRefered: z.boolean().default(false),
    timing: z.string().min(1, "Required field"),
    menuImages: z.any().refine(file => file && file.length > 0, "Menu Images are required"),
    menuImagesPreview: z.string().optional(), // Can be empty or undefined
    numberType: z.enum(["Mobile", "Landline"]).optional(), // Restrict to specific types if applicable
    number: z.string().min(1, "Number is required"),
    isManually: z.string().default("Enter this information manually"),
    fullName: z.string().min(1, "Full name is required"),
    email: z.string().email("Invalid email format").optional(),
    accountingNotificationsNumber: z.string().optional(),
});



export const OnlineOrderingSchema2 = z.object({
    panNumber: z.string().min(10, "PAN number must be 10 characters").max(10, "PAN number must be 10 characters"),
    nameOnPan: z.string().min(1, "Name on PAN is required"),
    address: z.string().min(1, "Address is required"),
    panImage: z.string().optional(),
    FSSAICertificateNumber: z.string().optional(),
    FSSAIExpiryDate: z.string().optional(),
    fssaiImage: z.string().optional(),
    bankAccountNumber: z.string().min(1, "Bank account number is required"),
    reEnterAccountNumber: z.string().min(1, "Re-enter account number"),
    accountType: z.enum(["Savings", "Current"]).optional(), // Restrict to specific account types if applicable
    IFSCCode: z.string().min(1, "IFSC Code is required"),
}).superRefine((data, ctx) => {
    if (data.bankAccountNumber !== data.reEnterAccountNumber) {
        ctx.addIssue({
            path: ['reEnterAccountNumber'], // Pointing to the re-enter account number field
            message: "Account numbers do not match",
        });
    }
});


export const OnlineOrderingSchema3 =
    z.object({
        // menuImages: z.any().refine(file => file && file.length > 0, "Menu Images are required"),
        // restaurant: z.any().refine(file => file && file.length > 0, "Restaurant Images are required"),
        // foodImages: z.any().refine(file => file && file.length > 0, "Food Images are required"),
    })


export const OnlineOrderingSchema = z.object({
    ...OnlineOrderingSchema1.shape,
    ...OnlineOrderingSchema2.shape,
    ...OnlineOrderingSchema3.shape,
})

export const AddProfileSchema6 = z.object({
  dateOfEstablishment: z.date({
    required_error: "Please select the date of establishment",
  }),
  businessType: z.string().min(1, "Business type is required"),
  unitType: z.string().min(1, "Unit type is required"),

  ownerProfile: z
    .any()
    .refine(
      (file) => file instanceof File,
      "Owner profile picture is required"
    ),

  assignedCity: z.string().min(1, "Assigned city is required"),

  deliveryRadius: z
    .string()
    .min(1, "Delivery radius is required")
    .regex(/^\d+$/, "Enter a valid number"),

  cancellationTime: z
    .string()
    .min(1, "Cancellation consideration time is required")
    .regex(/^\d+$/, "Enter a valid number"),

  taxPercent: z
    .string()
    .min(1, "Tax percent is required")
    .regex(/^\d+(\.\d+)?$/, "Enter valid percent"),

  packagingCharges: z
    .string()
    .min(1, "Packaging charge is required")
    .regex(/^\d+(\.\d+)?$/, "Enter valid amount"),

  costTag: z.string().min(1, "Cost tag is required"),
  udyamNumber: z.string().min(1, "Udyam registration number is required"),

  firmProof: z
    .any()
    .refine(
      (file) => file instanceof File,
      "Firm establishment proof is required"
    ),
  restaurantFront: z
    .any()
    .refine((file) => file instanceof File, "Front image is required"),
  restaurantInside: z
    .any()
    .refine((file) => file instanceof File, "Inside image is required"),
  restaurantKitchen: z
    .any()
    .refine((file) => file instanceof File, "Kitchen image is required"),
  stockArea: z
    .any()
    .refine(
      (file) => file instanceof File,
      "Stock keeping area image is required"
    ),

  commissionPercent: z
    .string()
    .min(1, "Commission percent is required")
    .regex(/^\d+(\.\d+)?$/, "Enter valid percent"),

  onboardingSupport: z
    .string()
    .min(1, "Please specify if onboarding support is needed"),

  supportQuery: z.string().optional(),

  agreementAccepted: z
    .boolean()
    .refine((val) => val === true, "You must accept the agreement declaration"),
});

// 🟣 Edit Restaurant Step 4 Schema
export const EditProfileSchema6 = z.object({
  dateOfEstablishment: z.union([
    z.date(),
    z.string().min(1, "Date of establishment is required"),
  ]),

  businessType: z.string().min(1, "Business type is required"),
  unitType: z.string().min(1, "Unit type is required"),

  ownerProfile: z
    .any()
    .refine(
      (file) =>
        !file ||
        file instanceof File ||
        typeof file === "string" ||
        (file instanceof FileList && file.length > 0),
      "Owner profile is required"
    )
    .optional(),

  assignedCity: z.string().min(1, "Assigned city is required"),

  deliveryRadius: z.coerce
    .number({
      required_error: "Delivery radius is required",
      invalid_type_error: "Enter a valid number",
    })
    .min(1, "Delivery radius must be greater than 0"),

  cancellationTime: z.coerce
    .number({
      required_error: "Cancellation consideration time is required",
      invalid_type_error: "Enter a valid number",
    })
    .min(1, "Cancellation consideration time must be greater than 0"),

  taxPercent: z.coerce
    .number({
      required_error: "Tax percent is required",
      invalid_type_error: "Enter a valid number",
    })
    .min(0, "Enter a valid tax percent"),

  packagingCharges: z.coerce
    .number({
      required_error: "Packaging charge is required",
      invalid_type_error: "Enter a valid amount",
    })
    .min(0, "Enter a valid packaging charge"),

  costTag: z.coerce
    .number({
      required_error: "Cost tag is required",
      invalid_type_error: "Enter a valid number",
    })
    .min(1, "Cost tag must be greater than 0"),

  udyamNumber: z.string().min(1, "Udyam registration number is required"),

  firmProof: z
    .any()
    .refine(
      (file) =>
        !file ||
        file instanceof File ||
        typeof file === "string" ||
        (file instanceof FileList && file.length > 0),
      "Firm establishment proof is required"
    )
    .optional(),

  restaurantFront: z
    .any()
    .refine(
      (file) =>
        !file ||
        file instanceof File ||
        typeof file === "string" ||
        (file instanceof FileList && file.length > 0),
      "Front image is required"
    )
    .optional(),

  restaurantInside: z
    .any()
    .refine(
      (file) =>
        !file ||
        file instanceof File ||
        typeof file === "string" ||
        (file instanceof FileList && file.length > 0),
      "Inside image is required"
    )
    .optional(),

  restaurantKitchen: z
    .any()
    .refine(
      (file) =>
        !file ||
        file instanceof File ||
        typeof file === "string" ||
        (file instanceof FileList && file.length > 0),
      "Kitchen image is required"
    )
    .optional(),

  stockArea: z
    .any()
    .refine(
      (file) =>
        !file ||
        file instanceof File ||
        typeof file === "string" ||
        (file instanceof FileList && file.length > 0),
      "Stock keeping area image is required"
    )
    .optional(),

  commissionPercent: z.coerce
    .number({
      required_error: "Commission percent is required",
      invalid_type_error: "Enter a valid number",
    })
    .min(0, "Enter a valid commission percent"),

  onboardingSupport: z
    .string()
    .min(1, "Please specify if onboarding support is needed"),

  supportQuery: z.string().optional(),

  agreementAccepted: z
    .boolean()
    .refine((val) => val === true, "You must accept the agreement declaration"),
});