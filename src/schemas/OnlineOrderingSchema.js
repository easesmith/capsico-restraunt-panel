import { z } from "zod"

export const OnlineOrderingSchema1 = z.object({
    isRefered: z.boolean(),
    timing: z.string().min(1, "Required field"),
});



export const OnlineOrderingSchema2 =
    z.object({
        restaurantOptions: z.array(z.string()).min(1, "Please select at least one restaurant option"),
        cuisines: z.array(z.string()).min(1, "Please select at least one cuisine"),
        openingTime: z.string().min(1, "Please select an opening time"),
        closingTime: z.string().min(1, "Please select a closing time"),
        days: z.array(z.string()).min(1, "Please select at least one day"),
    })


export const OnlineOrderingSchema3 =
    z.object({
        menuImages: z.any().refine(file => file && file.length > 0, "Menu Images are required"),
        restaurant: z.any().refine(file => file && file.length > 0, "Restaurant Images are required"),
        foodImages: z.any().refine(file => file && file.length > 0, "Food Images are required"),
    })


export const OnlineOrderingSchema = z.object({
    ...OnlineOrderingSchema1.shape,
    ...OnlineOrderingSchema2.shape,
    ...OnlineOrderingSchema3.shape,
})