import { Button } from "@/components/ui/button"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle
} from "@/components/ui/sheet"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { FaArrowLeft } from "react-icons/fa6"
import { z } from "zod"

const PackagingChargesModal = ({ isPackagingChargesModalOpen, setIsPackagingChargesModalOpen }) => {
    const schema = z.object({
        type: z.string().min(1, "Type is required"),
        valueInRs: z.string().optional(),
        valueInPercentage: z.string().optional(),
        maxUptoInRs: z.string().optional(),
    })
        .refine(
            (data) => data.type !== "fixed" || !!data.valueInRs,
            {
                message: "Value in Rs is required for fixed type",
                path: ["valueInRs"], // Error attached to `valueInRs`
            }
        )
        .refine(
            (data) => data.type !== "percentage" || !!data.valueInPercentage,
            {
                message: "Value in Percentage is required for percentage type",
                path: ["valueInPercentage"], // Error attached to `valueInPercentage`
            }
        )
        .refine(
            (data) => data.type !== "percentage" || !!data.maxUptoInRs,
            {
                message: "Max upto in Rs is required for percentage type",
                path: ["maxUptoInRs"], // Error attached to `maxUptoInRs`
            }
        );


    const form = useForm({
        resolver: zodResolver(schema),
        defaultValues: {
            type: "",
            valueInRs: "",
            valueInPercentage: "",
            maxUptoInRs: "",
        }
    })
    const { register, control, watch, setValue, getValues, trigger } = form;

    const selectedType = watch("type");

    const onSubmit = (data) => {
        console.log("form", data);
        // console.log("data", data);
        // setIsItemDescriptionModalOpen(false);
    }

    return (
        <Sheet className="" open={isPackagingChargesModalOpen} onOpenChange={setIsPackagingChargesModalOpen}>
            <SheetContent className="sm:w-1/2 p-0 overflow-y-auto">
                <SheetHeader>
                    <SheetTitle className="text-xl border-b p-5 sticky z-30 flex items-center gap-3 top-0 bg-white">
                        <FaArrowLeft onClick={() => setIsPackagingChargesModalOpen(false)} className="cursor-pointer text-3xl" />
                        <div>
                            <h2 className="text-lg font-inter font-semibold">Packaging Charges</h2>
                            <p className="text-base text-[#676767] font-inter font-light leading-6">AddPackaging charges</p>
                        </div>
                    </SheetTitle>
                    <SheetDescription></SheetDescription>
                </SheetHeader>

                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="w-full p-5">
                        <div className="mb-16">
                            <div className="w-full">
                                <FormField
                                    control={control}
                                    name="type"
                                    render={({ field }) => (
                                        <FormItem className="z-20">
                                            <FormLabel>Type</FormLabel>
                                            <FormControl>
                                                <Select value={field.value} onValueChange={field.onChange}>
                                                    <SelectTrigger>
                                                        <SelectValue placeholder="Select" />
                                                    </SelectTrigger>
                                                    <SelectContent>
                                                        <SelectItem value="fixed">Fixed</SelectItem>
                                                        <SelectItem value="percentage">Percentage</SelectItem>
                                                    </SelectContent>
                                                </Select>
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            </div>

                            {selectedType === "percentage" &&
                                <>
                                    <div className="w-full mt-5">
                                        <FormField
                                            control={control}
                                            name="valueInPercentage"
                                            render={({ field }) => (
                                                <FormItem className="z-20">
                                                    <FormLabel>Value in %</FormLabel>
                                                    <FormControl>
                                                        <Input type="number" placeholder="10"  {...field} />
                                                    </FormControl>
                                                    <FormMessage />
                                                </FormItem>
                                            )}
                                        />
                                    </div>
                                    <div className="w-full mt-5">
                                        <FormField
                                            control={control}
                                            name="maxUptoInRs"
                                            render={({ field }) => (
                                                <FormItem className="z-20">
                                                    <FormLabel>Max upto in Rs </FormLabel>
                                                    <FormControl>
                                                        <Input type="number" placeholder="20"  {...field} />
                                                    </FormControl>
                                                    <FormMessage />
                                                </FormItem>
                                            )}
                                        />
                                    </div>
                                </>}

                            {selectedType === "fixed" &&
                                <div className="w-full mt-5">
                                    <FormField
                                        control={control}
                                        name="valueInRs"
                                        render={({ field }) => (
                                            <FormItem className="z-20">
                                                <FormLabel>Value in Rs</FormLabel>
                                                <FormControl>
                                                    <Input type="number" placeholder="20"  {...field} />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                </div>}
                        </div>
                        <div className="flex gap-2 fixed right-0 bottom-0 w-1/2 bg-white p-4 shadow-3xl">
                            <Button type="submit" size="lg" variant="capsico" className="w-full class-base2">Save changes</Button>
                        </div>
                    </form>
                </Form>
            </SheetContent>
        </Sheet>
    )
}

export default PackagingChargesModal