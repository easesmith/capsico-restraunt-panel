import { z } from "zod";

export const RegisterSchema1 = z.object({
  restaurantName: z.string().min(1, {
    message: "Restaurant name is required",
  }),
  restaurantEmail: z
    .string()
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
  phoneNumber: z
    .string()
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
  email: z
    .string()
    .min(1, {
      message: "Email is required",
    })
    .email({
      message: "Invalid email address",
    }),
});

export const RegisterSchema2 = z.object({
  restaurantType: z.enum(["BOTH", "VEG", "NON_VEG"], {
    required_error: "Please select a restaurant type.",
  }),
  priceForOne: z.string().min(1, "Price for one in required"),
  restaurantOptions: z
    .array(z.string())
    .min(1, "Please select at least one restaurant option"),
  cuisines: z.array(z.string()).min(1, "Please select at least one cuisine"),
  openingTime: z.string().min(1, "Please select an opening time"),
  closingTime: z.string().min(1, "Please select a closing time"),
  days: z.array(z.string()).min(1, "Please select at least one day"),
});

export const RegisterSchema3 = z.object({
  menuImages: z
    .any()
    .refine((file) => file && file.length > 0, "Menu Images are required"),
  restaurantImages: z
    .any()
    .refine(
      (file) => file && file.length > 0,
      "Restaurant Images are required"
    ),
  foodImages: z
    .any()
    .refine((file) => file && file.length > 0, "Food Images are required"),
});

export const EditProfileSchema4 = z
  .object({
    isRefered: z.boolean().default(false),
    timing: z.string().min(1, "Required field"),
    menuImages: z.any(),
    // .refine((file) => file && file.length > 0, "Menu Images are required"),
    menuImagesPreview: z.array(z.string()).optional(),
    numberType: z
      .enum(["Mobile", "Landline", "Same as restaurant mobile no."])
      .optional(),
    number: z.string().min(1, "Number is required"),
    isManually: z
      .enum([
        "Use details of the restaurant owner.",
        "Enter this information manually",
      ])
      .default("Enter this information manually"),
    fullName: z.string().optional(),
    email: z.string().optional(),
    accountingNotificationsNumber: z.string().optional(),
  })
  .superRefine((data, ctx) => {
    if (data.isManually === "Enter this information manually") {
      if (!data.fullName || data.fullName.trim() === "") {
        ctx.addIssue({
          path: ["fullName"],
          message: "Full name is required",
          code: z.ZodIssueCode.custom,
        });
      }

      if (!data.email || data.email.trim() === "") {
        ctx.addIssue({
          path: ["email"],
          message: "Email is required",
          code: z.ZodIssueCode.custom,
        });
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
        ctx.addIssue({
          path: ["email"],
          message: "Invalid email format",
          code: z.ZodIssueCode.custom,
        });
      }

      if (
        !data.accountingNotificationsNumber ||
        data.accountingNotificationsNumber.trim() === ""
      ) {
        ctx.addIssue({
          path: ["accountingNotificationsNumber"],
          message: "Accounting notifications number is required",
          code: z.ZodIssueCode.custom,
        });
      }
    }
  });

export const EditProfileSchema5 = z.object({
  panNumber: z
    .string()
    .min(10, "PAN number must be 10 characters")
    .max(10, "PAN number must be 10 characters"),
  panImage: z.any(),
  FSSAICertificateNumber: z.string().optional(),
  // .min(14, "FSSAI Certificate must be 14 digits"),
  FSSAIExpiryDate: z.any(),
  fssaiImage: z.any(),
  accountHolderName: z.string().min(1, "Account Holder Name is required"),
  bankAccountNumber: z
    .string()
    .regex(/^\d+$/, "Account number must contain only digits")
    .min(8, "Account number must be at least 8 digits long"),
  IFSCCode: z
    .string()
    .regex(
      /^[A-Z]{4}0[A-Z0-9]{6}$/,
      'IFSC code must be in the format: 4 letters, "0", and 6 alphanumeric characters'
    ),
  bankName: z.string().min(1, "Bank Name is required"),
  bankBranch: z
    .string()
    .regex(/^[a-zA-Z\s]+$/, "Branch name must contain only letters and spaces"),
  gstNo: z
    .string()
    // .regex(
    //   /^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[1-9A-Z]{1}Z[0-9A-Z]{1}$/,
    //   "Invalid GST Number format"
    // )
    .optional(),
});

export const AddProfileSchema5 = z.object({
  panNumber: z
    .string()
    .min(10, "PAN number must be 10 characters")
    .max(10, "PAN number must be 10 characters"),
  panImage: z
    .any()
    .refine((file) => file && file.length > 0, "Pan Card is required"),
  FSSAICertificateNumber: z.string().optional(),
  // .min(14, "FSSAI Certificate must be 14 digits"),
  FSSAIExpiryDate: z.any(),
  fssaiImage: z.any(),
  // .refine((file) => file && file.length > 0, "FSSAI Certificate is required"),
  accountHolderName: z.string().min(1, "Account Holder Name is required"),
  bankAccountNumber: z
    .string()
    .regex(/^\d+$/, "Account number must contain only digits")
    .min(8, "Account number must be at least 8 digits long"),
  IFSCCode: z
    .string()
    .regex(
      /^[A-Z]{4}0[A-Z0-9]{6}$/,
      'IFSC code must be in the format: 4 letters, "0", and 6 alphanumeric characters'
    ),
  bankName: z.string().min(1, "Bank Name is required"),
  bankBranch: z
    .string()
    .regex(/^[a-zA-Z\s]+$/, "Branch name must contain only letters and spaces"),
  gstNo: z
    .string()
    // .regex(
    //   /^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[1-9A-Z]{1}Z[0-9A-Z]{1}$/,
    //   "Invalid GST Number format"
    // )
    .optional(),
});
