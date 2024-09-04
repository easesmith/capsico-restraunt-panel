import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle
} from "@/components/ui/sheet";
import { updateMultiplePreview } from "@/utils/updatePreview";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { FaCheck, FaPlus, FaXmark } from "react-icons/fa6";
import { z } from "zod";
import guidelineImg1 from "@/assets/guidelineImg1.avif";
import guidelineImg2 from "@/assets/guidelineImg2.avif";
import guidelineImg3 from "@/assets/guidelineImg3.png";
import guidelineImg4 from "@/assets/guidelineImg4.avif";
import guidelineImg5 from "@/assets/guidelineImg5.png";
import guidelineImg6 from "@/assets/guidelineImg6.png";
import guidelineImg7 from "@/assets/guidelineImg7.avif";
import guidelineImg8 from "@/assets/guidelineImg8.avif";

const ItemImageUploadModal = ({ isItemImageUploadModalOpen, setIsItemImageUploadModalOpen }) => {
    const schema = z.object({
        itemName: z.string().min(1, "Item Name is required"),
        foodType: z.string().min(1, "Food Type is required"),
        basePrice: z.string().min(1, "Price cannot be 0"),
    });

    const form = useForm({
        resolver: zodResolver(schema),
        defaultValues: {
            itemName: "",
            itemDescription: "",
            foodType: "",
            serviceType: "",
            basePrice: "",
            packagingCharges: "",
        }
    })
    const { register, control, watch, setValue, getValues } = form;

    const restaurantRef = register("restaurant");

    const restaurant = watch("restaurant");

    useEffect(() => {
        updateMultiplePreview(restaurant, "restaurantPreview", setValue);
    }, [form, restaurant, setValue]);

    const [isPhotoGuidelines, setIsPhotoGuidelines] = useState(true);

    const onSubmit = (data) => {
        console.log("data", data);
        setIsItemImageUploadModalOpen(false);
    }

    return (
        <Sheet className="" open={isItemImageUploadModalOpen} onOpenChange={setIsItemImageUploadModalOpen}>
            <SheetContent className="sm:w-1/2 p-0 overflow-y-auto">
                <SheetHeader>
                    <SheetTitle className="text-2xl border-b p-5 sticky z-30 top-0 bg-white">Photo Guidelines</SheetTitle>
                    <SheetDescription>

                        <Form {...form}>
                            <form onSubmit={form.handleSubmit(onSubmit)} className="w-full py-5">
                                <div className="mb-16">
                                    <div className="flex items-center gap-5 p-5 pt-0">
                                        <button onClick={() => setIsPhotoGuidelines(true)} className={`border-b-2 class-xl2 pb-2 ${isPhotoGuidelines ? "border-[#1AA6F1] text-[#1AA6F1]" : "border-transparent"} `}>Photo guidelines</button>
                                        <button onClick={() => setIsPhotoGuidelines(false)} className={`border-b-2 class-xl2 pb-2 ${isPhotoGuidelines ? "border-transparent" : "border-[#1AA6F1] text-[#1AA6F1]"} `}>Upload photos</button>
                                    </div>
                                    {isPhotoGuidelines ?
                                        <div className="p-5">
                                            <div className="border-b-2 border-dashed pb-6">
                                                <div className="flex gap-5">
                                                    <div className="relative w-[40%]">
                                                        <img className="w-full" src={guidelineImg1} alt="" />
                                                        <div className="flex justify-center items-center w-10 h-10 rounded-full absolute -right-2 -top-2 bg-[#BF2938] border-[3px] border-white">
                                                            <FaXmark className="text-white text-xl" />
                                                        </div>
                                                    </div>
                                                    <div className="relative w-[40%]">
                                                        <img className="w-full" src={guidelineImg2} alt="" />
                                                        <div className="flex justify-center items-center w-10 h-10 rounded-full absolute -right-2 -top-2 bg-[#BF2938] border-[3px] border-white">
                                                            <FaXmark className="text-white text-xl" />
                                                        </div>
                                                    </div>
                                                </div>
                                                <p className="mt-2 class-base2 w-[80%]">Photo should be original, photo taken from the internet and AI generated photos will be rejected.</p>
                                            </div>

                                            <div className="border-b-2 border-dashed pb-6 mt-6">
                                                <div className="flex gap-5">
                                                    <div className="relative w-[40%]">
                                                        <img className="w-full" src={guidelineImg3} alt="" />
                                                        <div className="flex justify-center items-center w-10 h-10 rounded-full absolute -right-2 -top-2 bg-[#24963F] border-[3px] border-white">
                                                            <FaCheck className="text-white text-xl" />
                                                        </div>
                                                    </div>
                                                    <div className="relative w-[40%]">
                                                        <img className="w-full" src={guidelineImg4} alt="" />
                                                        <div className="flex justify-center items-center w-10 h-10 rounded-full absolute -right-2 -top-2 bg-[#BF2938] border-[3px] border-white">
                                                            <FaXmark className="text-white text-xl" />
                                                        </div>
                                                    </div>
                                                </div>
                                                <p className="mt-2 class-base2 w-[80%]">Image should not be zoomed in.</p>
                                            </div>

                                            <div className="border-b-2 border-dashed pb-6 mt-6">
                                                <div className="flex gap-5">
                                                    <div className="relative w-[40%]">
                                                        <img className="w-full" src={guidelineImg5} alt="" />
                                                        <div className="flex justify-center items-center w-10 h-10 rounded-full absolute -right-2 -top-2 bg-[#24963F] border-[3px] border-white">
                                                            <FaCheck className="text-white text-xl" />
                                                        </div>
                                                    </div>
                                                    <div className="relative w-[40%]">
                                                        <img className="w-full" src={guidelineImg6} alt="" />
                                                        <div className="flex justify-center items-center w-10 h-10 rounded-full absolute -right-2 -top-2 bg-[#BF2938] border-[3px] border-white">
                                                            <FaXmark className="text-white text-xl" />
                                                        </div>
                                                    </div>
                                                </div>
                                                <p className="mt-2 class-base2 w-[80%]">Food should be in the centre of the frame.</p>
                                            </div>

                                            <div className="pb-6 mt-6">
                                                <div className="flex gap-5">
                                                    <div className="relative w-[40%]">
                                                        <img className="w-full" src={guidelineImg7} alt="" />
                                                        <div className="flex justify-center items-center w-10 h-10 rounded-full absolute -right-2 -top-2 bg-[#24963F] border-[3px] border-white">
                                                            <FaCheck className="text-white text-xl" />
                                                        </div>
                                                    </div>
                                                    <div className="relative w-[40%]">
                                                        <img className="w-full" src={guidelineImg8} alt="" />
                                                        <div className="flex justify-center items-center w-10 h-10 rounded-full absolute -right-2 -top-2 bg-[#BF2938] border-[3px] border-white">
                                                            <FaXmark className="text-white text-xl" />
                                                        </div>
                                                    </div>
                                                </div>
                                                <p className="mt-2 class-base2 w-[80%]">Photo should be clear and not blurred.</p>
                                            </div>
                                        </div>
                                        :
                                        <div className="pb-5">
                                            <div className="p-5">
                                                <div className="mt-5 border-b pb-8 border-[#D3D3D3]">
                                                    <FormField
                                                        control={control}
                                                        name="restaurant"
                                                        render={({ field }) => (
                                                            <FormItem className="z-20">
                                                                <FormLabel className="cursor-pointer left-0 w-full h-full top-0">
                                                                    <span className="cursor-pointer absolute right-0 -top-7 text-xs p-1 border-dashed rounded-sm">Change</span>
                                                                    {!watch("restaurantPreview") &&
                                                                        <div className='border border-[#C2CDD6] bg-[#1aa6f10c] w-full h-60  flex flex-col justify-center items-center rounded-md'>
                                                                            <FaPlus className="primary-color" size={25} />
                                                                            <p className='font-semibold text-center primary-color class-base2 mt-3'>Upload from PC</p>
                                                                        </div>
                                                                    }
                                                                </FormLabel>
                                                                <FormControl className="hidden">
                                                                    <Input multiple={false} type="file" accept='.png,.jpeg,.jpg' {...restaurantRef} />
                                                                </FormControl>
                                                                <FormMessage />
                                                            </FormItem>
                                                        )}
                                                    />
                                                </div>
                                                <ul className="flex flex-col gap-4 mt-5 ml-5 text-black">
                                                    <li>File Size: below 10 MB</li>
                                                    <li>Format: PNG or JPG</li>
                                                    <li>Dimensions: 1800x1200px</li>
                                                    <li>Make sure that the dish is clearly visible and is placed centre of the picture and isn't cropped for thumbnail image</li>
                                                </ul>
                                            </div>
                                        </div>
                                    }
                                    <div className="flex gap-2 fixed right-0 bottom-0 w-1/2 bg-white p-4 shadow-3xl">
                                        {isPhotoGuidelines ? <Button onClick={() => setIsPhotoGuidelines(false)} size="lg" variant="capsico" className="w-full">Continue</Button>
                                            :
                                            <Button type="submit" size="lg" variant="capsico" className="w-full">Map Image</Button>
                                        }
                                    </div>
                                </div>
                            </form>
                        </Form>

                    </SheetDescription>
                </SheetHeader>
            </SheetContent>
        </Sheet>
    )
}

export default ItemImageUploadModal