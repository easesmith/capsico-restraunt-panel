/* eslint-disable react/prop-types */
import { Button } from "@/components/ui/button";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { updateMultiplePreview } from "@/utils/updatePreview";
import { useEffect } from "react";
import { PiCameraPlus } from "react-icons/pi";

const EditOutletModal = ({ isEditOutletModalOpen, setIsEditOutletModalOpen, form, current, onSubmit }) => {
    const { register, control, watch, setValue, getValues } = form;

    const restaurantRef = register("restaurant");

    const restaurant = watch("restaurant");

    useEffect(() => {
        updateMultiplePreview(restaurant, "restaurantPreview", setValue);
    }, [form, restaurant, setValue]);

    return (
        <Dialog open={isEditOutletModalOpen} onOpenChange={() => setIsEditOutletModalOpen(!isEditOutletModalOpen)}>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Edit Outlet Info</DialogTitle>
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="w-full py-5">
                            <div className="w-full relative">
                                <FormField
                                    control={control}
                                    name="restaurant"
                                    render={({ field }) => (
                                        <FormItem className="z-20">
                                            <FormLabel className="cursor-pointer left-0 w-full h-full top-0">
                                                <span className="cursor-pointer absolute right-0 -top-7 text-xs p-1 border-dashed rounded-sm">Change</span>
                                                {!watch("restaurantPreview") &&
                                                    <div className='border-2 border-dashed border-[#C2CDD6] w-full h-72  flex flex-col justify-center items-center rounded-md'>
                                                        <div className='border-2 flex flex-col items-center primary-color border-dashed rounded px-5 py-4'>
                                                            <PiCameraPlus size={45} />
                                                            <p className='font-bold text-center primary-color text-sm mt-2'>Add Photo</p>
                                                        </div>
                                                        <p className='font-normal text-xs mt-2'>or drop files to upload</p>
                                                    </div>
                                                }
                                            </FormLabel>
                                            <FormControl className="hidden">
                                                <Input multiple={true} type="file" accept='.png,.jpeg,.jpg' {...restaurantRef} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                {watch("restaurantPreview") &&
                                    <div className='flex flex-wrap h-full gap-4'>
                                        {watch("restaurantPreview").map((prev, i) => (
                                            <img key={i} className='w-80 h-52' src={prev} alt="" />
                                        ))}
                                    </div>}
                            </div>

                            <div className="flex justify-end mt-3">
                                <Button onClick={() => setIsEditOutletModalOpen(false)} type="submit" variant="capsico" className="w-20">Submit</Button>
                            </div>
                        </form>
                    </Form>
                    <DialogDescription></DialogDescription>
                </DialogHeader>
            </DialogContent>
        </Dialog>
    )
}

export default EditOutletModal