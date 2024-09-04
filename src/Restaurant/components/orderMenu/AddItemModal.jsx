import { Button } from "@/components/ui/button"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle
} from "@/components/ui/sheet"
import { Textarea } from "@/components/ui/textarea"
import { updateMultiplePreview } from "@/utils/updatePreview"
import { zodResolver } from "@hookform/resolvers/zod"
import { useEffect, useState } from "react"
import { useForm } from "react-hook-form"
import { FiUpload } from "react-icons/fi"
import { z } from "zod"
import EggIcon from "../customIcons/EggIcon"
import NonVegIcon from "../customIcons/NonVegIcon"
import VegIcon from "../customIcons/VegIcon"
import ItemImageUploadModal from "./ItemImageUploadModal"

const AddItemModal = ({ isAddItemModalOpen, setIsAddItemModalOpen }) => {
    const [isItemImageUploadModalOpen, setIsItemImageUploadModalOpen] = useState(false);

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

    const onSubmit = (data) => {
        console.log("data", data);
        setIsAddItemModalOpen(false);
    }

    console.log("foodType", watch("foodType"));


    return (
        <Sheet className="" open={isAddItemModalOpen} onOpenChange={setIsAddItemModalOpen}>
            <SheetContent className="sm:w-1/2 p-0 overflow-y-auto">
                <SheetHeader>
                    <SheetTitle className="text-2xl border-b p-5 sticky z-30 top-0 bg-white">Add Item Details</SheetTitle>
                    <SheetDescription>
                        <Form {...form}>
                            <form onSubmit={form.handleSubmit(onSubmit)} className="w-full py-5">
                                <div className="mb-16">
                                    <div className="pb-5 border-b-2 border-dashed border=[#D3D3D3]">
                                        <div className="p-5">
                                            <h2 className="class-xl5 text-black">Basic Details</h2>
                                            <div className="w-full mt-5">
                                                <FormField
                                                    control={control}
                                                    name="itemName"
                                                    render={({ field }) => (
                                                        <FormItem className="z-20">
                                                            <FormLabel>Item Name</FormLabel>
                                                            <FormControl>
                                                                <Input placeholder="Enter Dish Name"  {...field} />
                                                            </FormControl>
                                                            <FormMessage />
                                                        </FormItem>
                                                    )}
                                                />
                                            </div>

                                            <div className="w-full mt-5">
                                                <FormField
                                                    control={control}
                                                    name="itemDescription"
                                                    render={({ field }) => (
                                                        <FormItem className="z-20">
                                                            <FormLabel>Item Description</FormLabel>
                                                            <FormControl>
                                                                <Textarea className="resize-none" placeholder="Add a detailed description explaining the dish"  {...field} />
                                                            </FormControl>
                                                            <FormMessage />
                                                        </FormItem>
                                                    )}
                                                />
                                            </div>

                                            <div className="w-full mt-5">
                                                <FormField
                                                    control={control}
                                                    name="foodType"
                                                    render={({ field }) => (
                                                        <FormItem className="z-20">
                                                            <FormLabel>Food Type</FormLabel>
                                                            <FormControl>
                                                                <RadioGroup
                                                                    onValueChange={field.onChange}
                                                                    defaultValue={field.value}
                                                                    className="flex"
                                                                >
                                                                    <FormItem className="flex items-center space-y-0">
                                                                        <FormControl className="hidden">
                                                                            <RadioGroupItem value="veg" />
                                                                        </FormControl>
                                                                        <FormLabel className={`border rounded p-4 flex items-center gap-2 cursor-pointer group hover:bg-[#EDF4FF] ${getValues("foodType") === "veg" && "bg-[#EDF4FF] border border-[#3579F0]"}`}>
                                                                            <VegIcon />
                                                                            <p className={`text-black group-hover:text-[#3579F0] ${getValues("foodType") === "veg" && "text-[#3579F0]"}`}>Veg</p>
                                                                        </FormLabel>
                                                                    </FormItem>
                                                                    <FormItem className="flex items-center space-y-0">
                                                                        <FormControl className="hidden">
                                                                            <RadioGroupItem value="non-veg" />
                                                                        </FormControl>
                                                                        <FormLabel className={`border rounded p-4 flex items-center gap-2 cursor-pointer group hover:bg-[#EDF4FF] ${getValues("foodType") === "non-veg" && "bg-[#EDF4FF] border border-[#3579F0]"}`}>
                                                                            <NonVegIcon />
                                                                            <p className={`text-black group-hover:text-[#3579F0] ${getValues("foodType") === "non-veg" && "text-[#3579F0]"}`}>Non-Veg</p>
                                                                        </FormLabel>
                                                                    </FormItem>
                                                                    <FormItem className="flex items-center space-y-0">
                                                                        <FormControl className="hidden">
                                                                            <RadioGroupItem value="egg" />
                                                                        </FormControl>
                                                                        <FormLabel className={`border rounded p-4 flex items-center gap-2 cursor-pointer group hover:bg-[#EDF4FF] ${getValues("foodType") === "egg" && "bg-[#EDF4FF] border border-[#3579F0]"}`}>
                                                                            <EggIcon />
                                                                            <p className={`text-black group-hover:text-[#3579F0] ${getValues("foodType") === "egg" && "text-[#3579F0]"}`}>Egg</p>
                                                                        </FormLabel>
                                                                    </FormItem>
                                                                </RadioGroup>
                                                            </FormControl>
                                                            <FormMessage />
                                                        </FormItem>
                                                    )}
                                                />
                                            </div>

                                            <div className="w-full mt-5 grid grid-cols-2 gap-5">
                                                <FormField
                                                    control={control}
                                                    name="serviceType"
                                                    render={({ field }) => (
                                                        <FormItem className="z-20">
                                                            <FormLabel>Service Type</FormLabel>
                                                            <FormControl>
                                                                <Select value={field.value} onValueChange={field.onChange}>
                                                                    <SelectTrigger>
                                                                        <SelectValue placeholder="Select Service" />
                                                                    </SelectTrigger>
                                                                    <SelectContent>
                                                                        <SelectItem value="Delivery">Delivery</SelectItem>
                                                                    </SelectContent>
                                                                </Select>
                                                            </FormControl>
                                                            <FormMessage />
                                                        </FormItem>
                                                    )}
                                                />
                                            </div>

                                            <div className="mt-5">
                                                <Label>Item Photos</Label>
                                                <button onClick={() => setIsItemImageUploadModalOpen(true)} className='border-2 mt-2 flex flex-col bg-[#1aa6f10c] items-center justify-center primary-color w-32 h-[140px] rounded-md px-5 py-4'>
                                                    <FiUpload size={25} />
                                                    <p className='font-semibold text-center primary-color text-sm mt-2'>Upload</p>
                                                </button>
                                                {/* <FormField
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
                                                                <Input multiple={false} type="file" accept='.png,.jpeg,.jpg' {...restaurantRef} />
                                                            </FormControl>
                                                            <FormMessage />
                                                        </FormItem>
                                                    )}
                                                /> */}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="pb-5 border-b-2 border-dashed border=[#D3D3D3]">
                                        <div className="p-5">
                                            <h2 className="class-xl5 text-black">Item Pricing</h2>

                                            <div className="w-full mt-5">
                                                <FormField
                                                    control={control}
                                                    name="basePrice"
                                                    render={({ field }) => (
                                                        <FormItem className="z-20">
                                                            <FormLabel>Base price</FormLabel>
                                                            <FormControl>
                                                                <Input type="number" placeholder="Enter Base price of dish"  {...field} />
                                                            </FormControl>
                                                            <FormMessage />
                                                        </FormItem>
                                                    )}
                                                />
                                            </div>

                                            <div className="w-full mt-5">
                                                <FormField
                                                    control={control}
                                                    name="packagingCharges"
                                                    render={({ field }) => (
                                                        <FormItem className="z-20">
                                                            <FormLabel>Packaging charges</FormLabel>
                                                            <FormControl>
                                                                <Input type="number" placeholder="Enter packaging charges"  {...field} />
                                                            </FormControl>
                                                            <FormMessage />
                                                        </FormItem>
                                                    )}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex gap-2 fixed right-0 bottom-0 w-1/2 bg-white p-4 shadow-3xl">
                                    <Button type="button" size="lg" variant="ghost" className="w-1/2 hover:bg-[#FFF5F6] text-[#e85362] hover:text-[#e85362]">Discard</Button>
                                    <Button type="submit" size="lg" variant="capsico" className="w-1/2">Save Changes</Button>
                                </div>

                                {isItemImageUploadModalOpen &&
                                    <ItemImageUploadModal
                                        isItemImageUploadModalOpen={isItemImageUploadModalOpen}
                                        setIsItemImageUploadModalOpen={setIsItemImageUploadModalOpen}
                                    />
                                }
                            </form>
                        </Form>
                    </SheetDescription>
                </SheetHeader>
            </SheetContent>
        </Sheet>

    )
}

export default AddItemModal