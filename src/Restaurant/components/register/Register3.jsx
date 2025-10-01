/* eslint-disable react/prop-types */
import { Button } from '@/components/ui/button';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import usePatchApiReq from '@/hooks/usePatchApiReq';
import { RegisterSchema3 } from '@/schemas/registerSchema';
import { updateMultiplePreview } from '@/utils/updatePreview';
import { zodResolver } from '@hookform/resolvers/zod';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { PiCameraPlus } from "react-icons/pi";
import { toast } from 'sonner';
import RegisterSuccessModal from '../RegisterSuccessModal';
import usePostApiReq from '@/hooks/usePostApiReq';

const Register3 = ({ restaurant, setStep }) => {
    const [isRegisterSuccessModalOpen, setIsRegisterSuccessModalOpen] = useState(false);

    const form = useForm({
        resolver: zodResolver(RegisterSchema3),
        defaultValues: {
            menuImages: "",
            restaurantImages: "",
            foodImages: "",
        }
    })

    const { register, control, watch, setValue, getValues } = form;
    const { res, fetchData, isLoading } = usePostApiReq();

    const menuImagesRef = register("menuImages");
    const restaurantImagesRef = register("restaurantImages");
    const foodImagesRef = register("foodImages");

    const menuImages = watch("menuImages");
    const restaurantImages = watch("restaurantImages");
    const foodImages = watch("foodImages");

    useEffect(() => {
        updateMultiplePreview(menuImages, "menuImagesPreview", setValue);
        updateMultiplePreview(restaurantImages, "restaurantImagesPreview", setValue);
        updateMultiplePreview(foodImages, "foodImagesPreview", setValue);
    }, [form, menuImages, restaurantImages, foodImages, setValue]);



    const onSubmit = (data) => {
        // setIsRegisterSuccessModalOpen(true);
        console.log("data", data);
        const { menuImages, restaurantImages, foodImages } = data;

        const formData = new FormData();

        // Handle Menu Images
        if (menuImages?.length > 0) {
            Array.from(menuImages).forEach((file) => {
                formData.append("menuImages", file);
            });
        }

        // Handle Restaurant Images
        if (restaurantImages?.length > 0) {
            Array.from(restaurantImages).forEach((file) => {
                formData.append("restaurantImages", file);
            });
        }

        // Handle Food Images
        if (foodImages?.length > 0) {
            Array.from(foodImages).forEach((file) => {
                formData.append("foodImages", file);
            });
        }

        fetchData(
          `/restaurant/restraunt-registration-upload-images/${
            restaurant?._id || restaurant?.id
          }`,
          formData
        );
    }


    useEffect(() => {
        if (res?.status === 200 || res?.status === 201) {
            toast.success(res?.data.message);
            setIsRegisterSuccessModalOpen(true);
        }
    }, [res])

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="w-full py-5">
                <div>
                    <div className='border border-[#C2CDD6] rounded-md px-8 py-6 mt-6'>
                        <div className='w-full mt-4'>
                            <div>
                                <h3 className='text-[28px] font-bold text-[#4A5E6D]'>Menu Images</h3>
                                <p className='text-[20px] font-normal text-[#92A5B5]'>Your menu will be displayed directly to customers on Capsico</p>
                            </div>
                            <div className="grid w-full gap-10 pt-10">
                                <div className="w-full relative">
                                    <FormField
                                        control={control}
                                        name="menuImages"
                                        render={({ field }) => (
                                            <FormItem className="z-20">
                                                <FormLabel className="cursor-pointer  left-0 w-full h-full top-0">
                                                    {/* <span className="cursor-pointer absolute right-0 -top-7 text-xs p-1 border-dashed rounded-sm">Change</span> */}
                                                    {/* {watch("menuImagesPreview") &&
                                                <img className='w-full h-full object-contain' src={watch("menuImagesPreview")} alt="" />
                                            } */}

                                                    {!watch("menuImagesPreview") &&
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
                                                    <Input multiple="true" type="file" accept='.png,.jpeg,.jpg' {...menuImagesRef} />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                    {watch("menuImagesPreview") &&
                                        <div className='flex flex-wrap h-full gap-4'>
                                            {watch("menuImagesPreview").map((prev, i) => (
                                                <img key={i} className='w-80 h-52' src={prev} alt="" />
                                            ))}
                                        </div>}
                                </div>
                            </div>
                        </div>

                        <div className='w-full mt-4'>
                            <div>
                                <h3 className='text-[28px] font-bold text-[#4A5E6D]'>Restaurant Images</h3>
                                <p className='text-[20px] font-normal text-[#92A5B5]'>Please upload at least one photo of the restaurant’s facade (front view)</p>
                            </div>
                            <div className="grid w-full gap-10 pt-10">
                                <div className="w-full relative">
                                    <FormField
                                        control={control}
                                        name="restaurantImages"
                                        render={({ field }) => (
                                            <FormItem className="z-20">
                                                <FormLabel className="cursor-pointer left-0 w-full h-full top-0">
                                                    {/* <span className="cursor-pointer absolute right-0 -top-7 text-xs p-1 border-dashed rounded-sm">Change</span> */}
                                                    {/* {watch("restaurantPreview") &&
                                                <img className='w-full h-full object-contain' src={watch("restaurantPreview")} alt="" />
                                            } */}
                                                    {!watch("restaurantImagesPreview") &&
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
                                                    <Input multiple="true" type="file" accept='.png,.jpeg,.jpg' {...restaurantImagesRef} />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                    {watch("restaurantImagesPreview") &&
                                        <div className='flex flex-wrap h-full gap-4'>
                                            {watch("restaurantImagesPreview").map((prev, i) => (
                                                <img key={i} className='w-80 h-52' src={prev} alt="" />
                                            ))}
                                        </div>}
                                </div>
                            </div>
                        </div>

                        <div className='w-full mt-4'>
                            <div>
                                <h3 className='text-[28px] font-bold text-[#4A5E6D]'>Food Images</h3>
                                <p className='text-[20px] font-normal text-[#92A5B5]'>Please avoid uploading images of raw ingredients</p>
                            </div>
                            <div className="grid w-full gap-10 pt-10">
                                <div className="w-full relative">
                                    <FormField
                                        control={control}
                                        name="foodImages"
                                        render={({ field }) => (
                                            <FormItem className="z-20">
                                                <FormLabel className="cursor-pointer  left-0 w-full h-full top-0">
                                                    {/* <span className="cursor-pointer absolute right-0 -top-7 text-xs p-1 border-dashed rounded-sm">Change</span> */}
                                                    {/* {watch("foodImagesPreview") &&
                                                <img className='w-full h-full object-contain' src={watch("foodImagesPreview")} alt="" />
                                            } */}
                                                    {!watch("foodImagesPreview") &&
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
                                                    <Input multiple="true" type="file" accept='.png,.jpeg,.jpg' {...foodImagesRef} />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                    {watch("foodImagesPreview") &&
                                        <div className='flex flex-wrap h-full gap-4'>
                                            {watch("foodImagesPreview").map((prev, i) => (
                                                <img key={i} className='w-80 h-52' src={prev} alt="" />
                                            ))}
                                        </div>}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-end gap-4 mt-5">
                        <Button onClick={()=> setStep(2)} type="button" variant="capsico" className="w-20">Previous</Button>
                        <Button type="submit" variant="capsico" className="w-20">Submit</Button>
                    </div>
                </div>
                {isRegisterSuccessModalOpen &&
                    <RegisterSuccessModal
                        isRegisterSuccessModalOpen={isRegisterSuccessModalOpen}
                        setIsRegisterSuccessModalOpen={setIsRegisterSuccessModalOpen}
                    />
                }
            </form>
        </Form>
    )
}

export default Register3