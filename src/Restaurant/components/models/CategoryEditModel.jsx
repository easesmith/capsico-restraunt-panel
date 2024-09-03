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
import { categorySchema } from "@/schemas/OrderMenuSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

const CategoryEditModel = ({ isOpenCategoryModel, setIsOpenCategoryModel }) => {
    
    const form = useForm({
        resolver: zodResolver(categorySchema),
        defaultValues:{
            category:""
        }
    })
    
    const { register, control, watch, setValue, getValues } = form;

    const onSubmit = (data) =>{
        console.log(data)
        console.log('submit form')
        setIsOpenCategoryModel(false)
    }

    return (
        <Dialog open={isOpenCategoryModel} onOpenChange={setIsOpenCategoryModel}>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Edit Category</DialogTitle>
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="w-full py-3">
                            <div className="w-full mt-5">
                                <FormField
                                    control={control}
                                    name="category"
                                    render={({ field }) => (
                                        <FormItem className="z-20">
                                            <FormLabel className="">Category</FormLabel>
                                            <FormControl>
                                                <Input placeholder="Enter Category"  {...field} />
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

export default CategoryEditModel
