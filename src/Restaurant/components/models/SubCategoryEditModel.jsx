import { subCategorySchema } from '@/schemas/OrderMenuSchema';
import { zodResolver } from '@hookform/resolvers/zod';
import React from 'react'
import { useForm } from 'react-hook-form';
import { Button } from "@/components/ui/button";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle
} from "@/components/ui/dialog";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from "@/components/ui/input";
import { Textarea } from '@/components/ui/textarea';

const SubCategoryEditModel = ({ isOpenSubCategoryModel, setIsOpenSubCategoryModel }) => {

    const form = useForm({
        resolver: zodResolver(subCategorySchema),
        defaultValues: {
            category: "",
            description: "",
        }
    })

    const { register, control, watch, setValue, reset, getValues } = form;

    const onSubmit = (data) => {
        console.log("data", data);
        console.log('submit form')
        setIsOpenSubCategoryModel(false)
        reset({
            category: "",
            description: "",
        })
    }

    return (
        <Dialog open={isOpenSubCategoryModel} onOpenChange={setIsOpenSubCategoryModel}>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Edit Sub-Category</DialogTitle>
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="w-full py-3">
                            <div className="w-full mt-5">
                                <FormField
                                    control={control}
                                    name="subCategory"
                                    render={({ field }) => (
                                        <FormItem className="z-20">
                                            <FormLabel className="text-[#969696]">Sub-Category Name</FormLabel>
                                            <FormControl>
                                                <Input type='text'  {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            </div>
                            <div className="w-full mt-5">
                                <FormField
                                    control={control}
                                    name="description"
                                    render={({ field }) => (
                                        <FormItem className="z-20">
                                            <FormLabel className="text-[#969696]">Description</FormLabel>
                                            <FormControl>
                                                <Textarea className='resize-none' {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            </div>
                            <Button type="submit" size="lg" variant="capsico" className="w-full mt-10">Add SubCategory</Button>
                        </form>
                    </Form>
                    <DialogDescription></DialogDescription>
                </DialogHeader>
            </DialogContent>
        </Dialog>
    )
}

export default SubCategoryEditModel
