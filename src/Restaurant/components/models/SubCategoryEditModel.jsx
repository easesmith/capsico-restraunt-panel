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

const SubCategoryEditModel = ({isOpenSubCategoryModel, setIsOpenSubCategoryModel}) => {

    const form = useForm({
        resolver: zodResolver(subCategorySchema),
        defaultValues: {
            subCategory: ""
        }
    })

    const { register, control, watch, setValue, getValues } = form;

    const onSubmit = (data) => {
        console.log(data)
        console.log('submit form')
        setIsOpenSubCategoryModel(false)
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
                                            <FormLabel className="">Sub Category</FormLabel>
                                            <FormControl>
                                                <Input placeholder="Enter SubCategory"  {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            </div>

                            <div className="flex justify-end mt-3">
                                <Button type="submit" variant="capsico" className="w-20">Submit</Button>
                            </div>
                        </form>
                    </Form>
                    <DialogDescription></DialogDescription>
                </DialogHeader>
            </DialogContent>
        </Dialog>
    )
}

export default SubCategoryEditModel
