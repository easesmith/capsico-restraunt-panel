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
import { FiUpload } from "react-icons/fi"
import ItemImageUploadModal from "./ItemImageUploadModal"
import { useState } from "react"
import ItemImage from "./ItemImage"

const ItemsImageModal = ({ isItemsImageModalOpen, setIsItemsImageModalOpen }) => {
    const schema = z.object({
        itemImage1: z.string().min(1, "Description is required").max(40, "Description cannot exceed 400 characters"),
    });

    const form = useForm({
        resolver: zodResolver(schema),
        defaultValues: {
            itemImage1: "",
        }
    })
    const { register, control, watch, setValue, getValues, trigger } = form;
    
    const onSubmit = (e) => {
        e.preventDefault()
        console.log("form", form.getValues());
        // console.log("data", data);
        // setIsItemDescriptionModalOpen(false);
    }

    return (
        <Sheet className="" open={isItemsImageModalOpen} onOpenChange={setIsItemsImageModalOpen}>
            <SheetContent className="sm:w-1/2 p-0 overflow-y-auto">
                <SheetHeader>
                    <SheetTitle className="text-xl border-b p-5 sticky z-30 flex justify-between top-0 bg-white">
                        Top selling items required image
                        <X onClick={() => setIsItemsImageModalOpen(false)} className="h-6 w-6 cursor-pointer" />
                    </SheetTitle>
                    <SheetDescription></SheetDescription>
                </SheetHeader>
                <div className="bg-[#EDF4FF] px-6 py-8">
                    <h2 className="text-lg font-inter font-semibold">Increase your sales by adding images to your dishes.More photos =More orders!</h2>
                    <p className="text-lg font-inter font-light leading-6">Images you upload will be updated on your menu after moderation from the Zomato team</p>
                </div>
                <Form {...form}>
                    <form  className="w-full p-5">
                        <div className="mb-16">
                            <ItemImage
                                form={form}
                                name="itemImage1"
                            />
                        </div>
                        <div className="flex gap-2 fixed right-0 bottom-0 w-1/2 bg-white p-4 shadow-3xl">
                            <Button onClick={onSubmit} size="lg" variant="capsico" className="w-full class-base2">Save changes</Button>
                        </div>
                    </form>
                </Form>
            </SheetContent>
        </Sheet>
    )
}

export default ItemsImageModal