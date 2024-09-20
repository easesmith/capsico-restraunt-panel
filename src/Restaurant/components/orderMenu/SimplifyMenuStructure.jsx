import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Form, FormControl, FormField, FormItem, FormLabel } from "@/components/ui/form"
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle
} from "@/components/ui/sheet"
import { zodResolver } from "@hookform/resolvers/zod"
import { X } from "lucide-react"
import { useForm } from "react-hook-form"
import { object, z } from "zod"
import LowSellingItem from "./LowSellingItem"
import { useEffect } from "react"

const SimplifyMenuStructureModal = ({ isSimplifyMenuStructureModalOpen, setIsSimplifyMenuStructureModalOpen }) => {
    const schema = z.object({
        lowSellingItems: z.boolean(),
        lowSellingItem1: z.boolean(),
    });

    const form = useForm({
        resolver: zodResolver(schema),
        defaultValues: {
            lowSellingItems: false,
            lowSellingItem1: false,
            lowSellingItem2: false,
        }
    })
    const { register, control, watch, setValue, getValues, trigger } = form;

    const isLowsellingItems = watch("lowSellingItems");

    useEffect(() => {
        const lowSellingItems = Object.keys(getValues());

        console.log("lowSellingItems", lowSellingItems);
        if (isLowsellingItems) {
            lowSellingItems.forEach(element => {
                setValue(element, isLowsellingItems);
            });
        }
        else {
            lowSellingItems.forEach(element => {
                setValue(element, isLowsellingItems);
            });
        }
    }, [isLowsellingItems, setValue])



    const onSubmit = (data) => {
        console.log("data", data);
        // setIsItemDescriptionModalOpen(false);
    }

    return (
        <Sheet className="" open={isSimplifyMenuStructureModalOpen} onOpenChange={setIsSimplifyMenuStructureModalOpen}>
            <SheetContent className="sm:w-1/2 p-0 overflow-y-auto">
                <SheetHeader>
                    <SheetTitle className="text-xl border-b p-5 sticky z-30 flex justify-between top-0 bg-white">
                        Simplify your menu by removing low-selling dishes
                        <X onClick={() => setIsSimplifyMenuStructureModalOpen(false)} className="h-6 w-6 cursor-pointer" />
                    </SheetTitle>
                    <SheetDescription></SheetDescription>
                </SheetHeader>
                <div className="bg-[#EDF4FF] px-6 py-8">
                    <h2 className="text-lg font-inter font-semibold">Customer are switching to restaurants with simplier menus!</h2>
                    <p className="text-lg font-inter font-light leading-6">Customers prefer Menus that are easy to browse and understand.Your customers are dropping due to complex menu.Remove low selling items to retain your customers.</p>
                </div>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="w-full">
                        <div className="mb-16">
                            <div className="flex justify-between gap-4 py-5 px-7 border-b">
                                <h4 className="text-lg font-inter font-semibold">Low selling items</h4>
                                <FormField
                                    control={control}
                                    name="lowSellingItems"
                                    render={({ field }) => (
                                        <FormItem className="flex gap-3 items-center">
                                            <FormControl>
                                                <div>
                                                    <FormLabel></FormLabel>
                                                    <Checkbox
                                                        checked={field.value}
                                                        onCheckedChange={field.onChange}
                                                    />
                                                </div>
                                            </FormControl>
                                        </FormItem>
                                    )}
                                />
                            </div>

                            <LowSellingItem
                                control={control}
                                name="Mutton Combo"
                                id="lowSellingItem1"
                                category="In Combos"
                            />

                            <LowSellingItem
                                control={control}
                                name="Chicken Stick[1 Piece]"
                                id="lowSellingItem2"
                                category="In Starters"
                            />
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

export default SimplifyMenuStructureModal