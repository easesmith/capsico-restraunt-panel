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
import AddCustomizationModal from './AddCustomizationModal'

const AddCustomizationCategoryModal = ({ isCustomizationModalOpen, setIsCustomizationModalOpen }) => {
    const [isAddCustomizationModalOpen, setIsAddCustomizationModalOpen] = useState(false);
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
        setIsCustomizationModalOpen(false);
    }

    return (
        <Sheet className="" open={isCustomizationModalOpen} onOpenChange={setIsCustomizationModalOpen}>
            <SheetContent className="sm:w-1/2 p-0 overflow-y-auto h-full">
                <SheetHeader>
                    <SheetTitle className="text-2xl border-b p-5 sticky z-30 flex items-center gap-4 top-0 bg-white">
                        <FaArrowLeft onClick={() => setIsCustomizationModalOpen(false)} className="text-2xl cursor-pointer" />
                        Add Customization Category
                    </SheetTitle>
                    <SheetDescription>
                        <Form {...form}>
                            <form onSubmit={form.handleSubmit(onSubmit)} className="w-full">
                                <div className="mb-16 h-full">
                                    <div className="py-6 px-5">
                                        <div className='w-full'>
                                            <FormField
                                                control={control}
                                                name="type"
                                                render={({ field }) => (
                                                    <FormItem className="w-full">
                                                        <FormLabel>Type</FormLabel>
                                                        <FormControl className="">
                                                            <Select onValueChange={field.onChange} value={field.value}>
                                                                <SelectTrigger className="flex justify-between items-center w-full h-10 text-[#1D1929] text-sm font-normal font-sans border-[#E9E9EA] border-[1px] rounded-lg">
                                                                    <SelectValue placeholder="Select Type" />
                                                                </SelectTrigger>
                                                                <SelectContent>
                                                                    <SelectGroup>
                                                                        <SelectItem value="category">Category</SelectItem>
                                                                        <SelectItem value="sub-category">Sub Category</SelectItem>
                                                                    </SelectGroup>
                                                                </SelectContent>
                                                            </Select>
                                                        </FormControl>
                                                        <FormMessage />
                                                    </FormItem>
                                                )}
                                            />
                                        </div>
                                        {watch("type") === "sub-category" && <div className='w-full mt-5'>
                                            <FormField
                                                control={control}
                                                name="categoryType"
                                                render={({ field }) => (
                                                    <FormItem className="w-full">
                                                        <FormLabel>Category Type</FormLabel>
                                                        <FormControl className="">
                                                            <Select>
                                                                <SelectTrigger className="flex justify-between items-center w-full h-10 text-[#1D1929] text-sm font-normal font-sans border-[#E9E9EA] border-[1px] rounded-lg">
                                                                    <SelectValue placeholder="Select Category" />
                                                                </SelectTrigger>
                                                                <SelectContent>
                                                                    <SelectGroup>
                                                                        <SelectItem value="category1">Category1</SelectItem>
                                                                        <SelectItem value="category2">Category2</SelectItem>
                                                                        <SelectItem value="category3">Category3</SelectItem>
                                                                    </SelectGroup>
                                                                </SelectContent>
                                                            </Select>
                                                        </FormControl>
                                                        <FormMessage />
                                                    </FormItem>
                                                )}
                                            />
                                        </div>}

                                        <div className='w-full mt-5'>
                                            <FormField
                                                control={control}
                                                name="categoryName"
                                                render={({ field }) => (
                                                    <FormItem className="w-full">
                                                        <FormLabel>Category Name</FormLabel>
                                                        <FormControl className="">
                                                            <Input placeholder="Category Name"  {...field} />
                                                        </FormControl>
                                                        <FormMessage />
                                                    </FormItem>
                                                )}
                                            />
                                        </div>
                                        <div className='w-full mt-5'>
                                            <FormField
                                                control={control}
                                                name="customizationType"
                                                render={({ field }) => (
                                                    <FormItem className="w-full">
                                                        <FormLabel>Customization Type</FormLabel>
                                                        <FormControl>
                                                            <Select>
                                                                <SelectTrigger className="flex justify-between items-center w-full h-10 text-[#1D1929] text-sm font-normal font-sans border-[#E9E9EA] border-[1px] rounded-lg">
                                                                    <SelectValue placeholder="Select Customization Type" />
                                                                </SelectTrigger>
                                                                <SelectContent>
                                                                    <SelectGroup>
                                                                        <SelectItem value="multiple">Multiple</SelectItem>
                                                                        <SelectItem value="single">Single</SelectItem>
                                                                    </SelectGroup>
                                                                </SelectContent>
                                                            </Select>
                                                        </FormControl>
                                                        <FormMessage />
                                                    </FormItem>
                                                )}
                                            />
                                        </div>
                                        <div className="flex justify-end items-center mt-5">
                                            <Button type="button" onClick={() => setIsAddCustomizationModalOpen(true)} variant="outline" className="flex gap-1 items-center border-[#4A67FF] text-[#4A67FF] hover:border-[#4A67FF] hover:bg-transparent hover:text-[#4A67FF]">
                                                <FaPlus />
                                                Add Customization
                                            </Button>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex gap-2 fixed right-0 bottom-0 w-1/2 bg-white p-4 shadow-3xl">
                                    <Button size="lg" variant="capsico" className="w-full class-base2">Add</Button>
                                </div>
                            </form>
                        </Form>

                        {isAddCustomizationModalOpen &&
                            <AddCustomizationModal
                                isAddCustomizationModalOpen={isAddCustomizationModalOpen}
                                setIsAddCustomizationModalOpen={setIsAddCustomizationModalOpen}
                            />
                        }
                    </SheetDescription>
                </SheetHeader>
            </SheetContent>
        </Sheet>
    )
}

export default AddCustomizationCategoryModal