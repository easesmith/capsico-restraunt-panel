/* eslint-disable react/prop-types */
import { Button } from "@/components/ui/button";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Label } from "@/components/ui/label";
import usePostApiReq from "@/hooks/usePostApiReq";
import { imageSchema } from "@/schemas/outletSchema";
import { updatePreview } from "@/utils/updatePreview";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { FiEdit2 } from "react-icons/fi";
import { PiCameraPlus } from "react-icons/pi";

const EditOutletLogoModal = ({ isEditOutletLogoInfoModalOpen, setIsEditOutletLogoModalOpen, getRestaurantProfile, logo }) => {
    const { res, fetchData, isLoading } = usePostApiReq();

    const form = useForm({
        resolver: zodResolver(imageSchema),
        defaultValues: {
            restaurant: "",
            restaurantPreview: `${import.meta.env.VITE_IMAGE_URL}/${logo}` || "",
        }
    })

    const { register, control, watch, setValue, handleSubmit } = form;

    const restaurantRef = register("restaurant");
    const restaurant = watch("restaurant");

    useEffect(() => {
        updatePreview(restaurant, "restaurantPreview", setValue);
    }, [form, restaurant, setValue]);

    const onSubmit = (data) => {
        console.log("data", data);
        const formData = new FormData();
        formData.append("logo", data.restaurant[0])
        fetchData("/restaurant/update-logo", formData);
    }

    useEffect(() => {
        if (res?.status === 200 || res?.status === 201) {
            console.log("update-basic-info response", res);
            getRestaurantProfile();
            setIsEditOutletLogoModalOpen(false);
        }
    }, [res])

    return (
        <Dialog open={isEditOutletLogoInfoModalOpen} onOpenChange={setIsEditOutletLogoModalOpen}>
            <DialogContent className="max-h-[90vh] max-w-[500px] w-full overflow-y-auto">
                <DialogHeader>
                    <DialogTitle>Edit Outlet Logo</DialogTitle>
                    <Form {...form}>
                        <form onSubmit={handleSubmit(onSubmit)} className="w-full pt-5">
                            <div className="w-full">
                                {/* <Label className="pb-2 flex" htmlFor="category">Restaurant Images</Label> */}
                                <FormField
                                    control={control}
                                    name="restaurant"
                                    render={({ field }) => (
                                        <FormItem className="z-20">
                                            <FormLabel className="cursor-pointer left-0 w-full h-full top-0">
                                                <span className="cursor-pointer absolute right-0 -top-7 text-xs p-1 border-dashed rounded-sm">Change</span>
                                                {!watch("restaurantPreview") &&
                                                    <div className='border-2 border-dashed border-[#C2CDD6] w-[450px] h-52 flex flex-col justify-center items-center rounded-md'>
                                                        <div className='border-2 flex flex-col items-center primary-color border-dashed rounded px-5 py-4'>
                                                            <PiCameraPlus size={45} />
                                                            <p className='font-bold text-center primary-color text-sm mt-2'>Add Photo</p>
                                                        </div>
                                                        {/* <p className='font-normal text-xs mt-2'>or drop files to upload</p> */}
                                                    </div>
                                                }
                                                {watch("restaurantPreview") &&
                                                    <div className="relative h-full w-full">
                                                        <div className="w-10 h-10 p-1 shadow-2xl absolute bottom-4 right-4 rounded-full bg-white flex justify-center items-center">
                                                            <FiEdit2 className="text-[#323F49] cursor-pointer text-xl" />
                                                        </div>
                                                        <img className='w-[450px]' src={watch("restaurantPreview")} alt="" />
                                                    </div>
                                                }
                                            </FormLabel>
                                            <FormControl className="hidden">
                                                <Input type="file" accept='.png,.jpeg,.jpg' {...restaurantRef} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            </div>

                            <div className="flex justify-end mt-5">
                                <Button type="submit" variant="capsico">{isLoading ? "Submiting..." : "Submit"}</Button>
                            </div>
                        </form>
                    </Form>
                    <DialogDescription></DialogDescription>
                </DialogHeader>
            </DialogContent>
        </Dialog>
    )
}

export default EditOutletLogoModal