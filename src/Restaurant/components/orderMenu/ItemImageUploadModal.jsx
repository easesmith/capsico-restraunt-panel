import demoImg1 from "@/assets/demoImg1.avif";
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
import { FaPlus } from "react-icons/fa6";
import { z } from "zod";
import PhotoGuidelines from "./PhotoGuidelines";
import { X } from "lucide-react";

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

    const dishRef = register("dish");

    const dish = watch("dish");

    useEffect(() => {
        updateMultiplePreview(dish, "dishPreview", setValue);
    }, [form, dish, setValue]);

    const [isPhotoGuidelines, setIsPhotoGuidelines] = useState(true);

    const onSubmit = (data) => {
        console.log("data", data);
        setIsItemImageUploadModalOpen(false);
    }

    return (
        <Sheet className="" open={isItemImageUploadModalOpen} onOpenChange={setIsItemImageUploadModalOpen}>
            <SheetContent className="sm:w-1/2 p-0 overflow-y-auto">
                <SheetHeader>
                    <SheetTitle className="text-2xl border-b p-5 sticky z-30 flex justify-between top-0 bg-white">
                        Photo Guidelines
                        <X onClick={() => setIsItemImageUploadModalOpen(false)} className="h-6 w-6 cursor-pointer" />
                    </SheetTitle>
                    <SheetDescription>

                        <Form {...form}>
                            <form onSubmit={form.handleSubmit(onSubmit)} className="w-full py-5">
                                <div className="mb-16">
                                    <div className="flex items-center gap-5 p-5 pt-0">
                                        <button onClick={() => setIsPhotoGuidelines(true)} className={`border-b-2 class-base2 pb-2 ${isPhotoGuidelines ? "border-[#1AA6F1] text-[#1AA6F1]" : "border-transparent"} `}>Photo guidelines</button>
                                        <button onClick={() => setIsPhotoGuidelines(false)} className={`border-b-2 class-base2 pb-2 ${isPhotoGuidelines ? "border-transparent" : "border-[#1AA6F1] text-[#1AA6F1]"} `}>Upload photos</button>
                                    </div>
                                    {isPhotoGuidelines ?
                                        <PhotoGuidelines />
                                        :
                                        <div className="pb-5">
                                            <div className="p-5">
                                                <div className="mt-5 border-b pb-8 border-[#D3D3D3]">
                                                    <FormField
                                                        control={control}
                                                        name="dish"
                                                        render={({ field }) => (
                                                            <FormItem className="z-20">
                                                                <FormLabel className="cursor-pointer left-0 w-full h-full top-0">
                                                                    <span className="cursor-pointer absolute right-0 -top-7 text-xs p-1 border-dashed rounded-sm">Change</span>
                                                                    {!watch("dishPreview") &&
                                                                        <div className='border border-[#C2CDD6] bg-[#1aa6f10c] w-full h-60  flex flex-col justify-center items-center rounded-md'>
                                                                            <FaPlus className="primary-color" size={25} />
                                                                            <p className='font-semibold text-center primary-color class-base2 mt-3'>Upload from PC</p>
                                                                        </div>
                                                                    }
                                                                    {watch("dishPreview") &&
                                                                        <img className='w-72' src={watch("dishPreview")} alt="" />
                                                                    }
                                                                </FormLabel>
                                                                <FormControl className="hidden">
                                                                    <Input multiple={false} type="file" accept='.png,.jpeg,.jpg' {...dishRef} />
                                                                </FormControl>
                                                                <FormMessage />
                                                            </FormItem>
                                                        )}
                                                    />
                                                </div>
                                                <ul className="flex flex-col gap-4 mt-5 mb-7 ml-5 text-black class-base2">
                                                    <li>File Size: below 10 MB</li>
                                                    <li>Format: PNG or JPG</li>
                                                    <li>Dimensions: 1800x1200px</li>
                                                    <li>Make sure that the dish is clearly visible and is placed centre of the picture and isn't cropped for thumbnail image</li>
                                                </ul>
                                                <img className="w-[40%]" src={demoImg1} alt="" />
                                            </div>
                                        </div>
                                    }
                                    <div className="flex gap-2 fixed right-0 bottom-0 w-1/2 bg-white p-4 shadow-3xl">
                                        {isPhotoGuidelines ? <Button onClick={() => setIsPhotoGuidelines(false)} size="lg" variant="capsico" className="w-full class-base2">Continue</Button>
                                            :
                                            <Button type="submit" size="lg" variant="capsico" className="w-full class-base2">Map Image</Button>
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