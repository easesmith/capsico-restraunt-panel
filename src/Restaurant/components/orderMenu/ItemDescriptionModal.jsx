import { Form } from "@/components/ui/form"
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
import { z } from "zod"
import ItemDescriptionInput from "./ItemDescriptionInput"
import { Button } from "@/components/ui/button"

const ItemDescriptionModal = ({ isItemDescriptionModalOpen, setIsItemDescriptionModalOpen }) => {
    const schema = z.object({
        itemDescription: z.string().min(1, "Description is required").max(40, "Description cannot exceed 400 characters"),
    });

    const form = useForm({
        resolver: zodResolver(schema),
        defaultValues: {
            itemDescription: "",
        }
    })
    const { register, control, watch, setValue, getValues, trigger } = form;

    const onSubmit = (data) => {
        console.log("data", data);
        // setIsItemDescriptionModalOpen(false);
    }

    return (
        <Sheet className="" open={isItemDescriptionModalOpen} onOpenChange={setIsItemDescriptionModalOpen}>
            <SheetContent className="sm:w-1/2 p-0 overflow-y-auto">
                <SheetHeader>
                    <SheetTitle className="text-xl border-b p-5 sticky z-30 flex justify-between top-0 bg-white">
                        Top selling items required description
                        <X onClick={() => setIsItemDescriptionModalOpen(false)} className="h-6 w-6 cursor-pointer" />
                    </SheetTitle>
                    <SheetDescription></SheetDescription>
                </SheetHeader>
                <div className="bg-[#EDF4FF] px-6 py-8">
                    <h2 className="text-lg font-inter font-semibold">Enter description to explain your dish better to consumers</h2>
                    <p className="text-lg font-inter font-light leading-6">A goood dish description should include serving size,preparation style,
                        ingrediants,allergen info,and other information that will help consumer</p>
                </div>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="w-full p-5">
                        <div className="mb-16">
                            <ItemDescriptionInput
                                control={control}
                                getValues={getValues}
                                trigger={trigger}
                                category={"In starters"}
                                name={"Panner Noodles"}
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

export default ItemDescriptionModal