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