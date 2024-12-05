import { subCategorySchema } from '@/schemas/OrderMenuSchema';
import { zodResolver } from '@hookform/resolvers/zod';
import React, { useEffect } from 'react'
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
import { toast } from 'sonner';
import usePostApiReq from '@/hooks/usePostApiReq';
import Spinner from '../Spinner';

const SubCategoryEditModel = ({ isOpenSubCategoryModel, setIsOpenSubCategoryModel, id, getCategories }) => {

    const {res, isLoading, fetchData} = usePostApiReq()
    console.log(id)

    const form = useForm({
        resolver: zodResolver(subCategorySchema),
        defaultValues: {
            subCategory: "",
            description: "",
        }
    })

    const { register, control, watch, setValue, reset, getValues } = form;

    const onSubmit = (data) => {
        fetchData(`/restaurant/post-add-subcategory/${id}`, {
            name: data.subCategory,
            description: data.description,
        })
        console.log("data", data);
        console.log('submit form')
    }
    
    useEffect(()=>{
        if (res?.status === 200 || res?.status === 201) {
            console.log("Add sub-category res", res);
            toast.success(res?.data?.message)
            getCategories()
            setIsOpenSubCategoryModel(false)
            reset()
        }
    }, [res])

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
                            <Button disabled={isLoading} type="submit" size="lg" variant="capsico" className="w-full mt-10">{isLoading?<Spinner/>:"Add SubCategory"}</Button>
                        </form>
                    </Form>
                    <DialogDescription></DialogDescription>
                </DialogHeader>
            </DialogContent>
        </Dialog>
    )
}

export default SubCategoryEditModel
