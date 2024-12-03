import { Button } from '@/components/ui/button'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle
} from "@/components/ui/sheet"
import { AddCustomizationCategorySchema } from '@/schemas/CustomizationSchema'
import { zodResolver } from '@hookform/resolvers/zod'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { FaArrowLeft, FaPlus } from 'react-icons/fa6'

const AddCustomizationModal = ({ isAddCustomizationModalOpen, setIsAddCustomizationModalOpen }) => {
    const form = useForm({
        resolver: zodResolver(AddCustomizationCategorySchema),
        defaultValues: {
            type: "",
            categoryType: "",
            categoryName: "",
            customizationType: "",
        }
    })


    const { register, control, watch, setValue, getValues } = form;
    console.log("type", watch("type"));

    const onSubmit = (data) => {
        console.log("data", data);
        setIsAddCustomizationModalOpen(false);
    }

    return (
        <Sheet className="" open={isAddCustomizationModalOpen} onOpenChange={setIsAddCustomizationModalOpen}>
            <SheetContent className="sm:w-1/2 p-0 overflow-y-auto h-full">
                <SheetHeader>
                    <SheetTitle className="text-2xl border-b p-5 sticky z-30 flex justify-between items-center gap-4 top-0 bg-white">
                        <div className='flex items-center gap-4'>
                            <FaArrowLeft onClick={() => setIsAddCustomizationModalOpen(false)} className="text-2xl cursor-pointer" />
                            Customization
                        </div>
                        <Button onClick={() => { }} variant="outline" className="flex gap-1 items-center border-[#4A67FF] text-[#4A67FF] hover:border-[#4A67FF] hover:bg-transparent hover:text-[#4A67FF]">
                            <FaPlus />
                            Add More
                        </Button>
                    </SheetTitle>
                    <SheetDescription>
                        <Form {...form}>
                            <form onSubmit={form.handleSubmit(onSubmit)} className="w-full">
                                <div className="mb-16 h-full">
                                    <div className="py-6 px-5">
                                        <div className='w-full grid grid-cols-[1fr_1fr_10%] items-end gap-5 border p-4 rounded-md'>
                                            <FormField
                                                control={control}
                                                name="customizationName"
                                                render={({ field }) => (
                                                    <FormItem className="w-full">
                                                        <FormLabel>Customization Name</FormLabel>
                                                        <FormControl className="">
                                                            <Input placeholder="Customization Name"  {...field} />
                                                        </FormControl>
                                                        <FormMessage />
                                                    </FormItem>
                                                )}
                                            />
                                            <FormField
                                                control={control}
                                                name="price"
                                                render={({ field }) => (
                                                    <FormItem className="w-full">
                                                        <FormLabel>Price (In Rs)</FormLabel>
                                                        <FormControl>
                                                            <Input placeholder="Price (In Rs)"  {...field} />
                                                        </FormControl>
                                                        <FormMessage />
                                                    </FormItem>
                                                )}
                                            />
                                            <Button onClick={() => { }} variant="capsico">
                                                Add
                                            </Button>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex gap-2 fixed right-0 bottom-0 w-1/2 bg-white p-4 shadow-3xl">
                                    <Button size="lg" variant="capsico" className="w-full class-base2">Submit</Button>
                                </div>
                            </form>
                        </Form>
                    </SheetDescription>
                </SheetHeader>
            </SheetContent>
        </Sheet>
    )
}

export default AddCustomizationModal