import React, { useState } from 'react'
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle
} from "@/components/ui/sheet"
import { FaArrowLeft, FaArrowRight, FaPlus } from 'react-icons/fa6'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Button } from '@/components/ui/button'
import { IoIosArrowForward } from 'react-icons/io'
import sizeIcon from '@/assets/size.avif'
import quantityIcon from '@/assets/quantity.webp'
import preparationTypeIcon from '@/assets/preparationType.webp'
import { BiTrash } from 'react-icons/bi'
import { Input } from '@/components/ui/input'
import { FiEdit } from 'react-icons/fi'

const CreateVariant = ({ isCreateVariantModalOpen, setIsCreateVariantModalOpen }) => {
    const [selected, setSelected] = useState("define-properties");
    const [isAddVariant, setIsAddVariant] = useState(false);
    const [isAddNewProperty, setIsAddNewProperty] = useState(false);
    const [propertyArray, setPropertyArray] = useState([])

    const form = useForm({
        resolver: zodResolver({}),
        defaultValues: {
            variantName: "",
        }
    })
    const { register, control, watch, setValue, getValues } = form;

    const onSubmit = (data) => {
        console.log("data", data);
        setIsCreateVariantModalOpen(false);
    }

    const handleAddInput = () => {
        setPropertyArray([...propertyArray, "*"]);
    }

    const handlePropertyRemove = (index) => {
        const filtered = propertyArray.filter((_, i) => i !== index);
        setPropertyArray(filtered);
    }

    return (
        <Sheet className="" open={isCreateVariantModalOpen} onOpenChange={setIsCreateVariantModalOpen}>
            <SheetContent className="sm:w-1/2 p-0 overflow-y-auto h-full bg-[#F8F9FC]">
                <SheetHeader>
                    <SheetTitle className="text-2xl border-b p-5 sticky z-30 flex items-center gap-4 top-0 bg-white">
                        <FaArrowLeft onClick={() => setIsCreateVariantModalOpen(false)} className="text-2xl cursor-pointer" />
                        Create Variants
                    </SheetTitle>
                    <SheetDescription>
                        <Form {...form}>
                            <form onSubmit={form.handleSubmit(onSubmit)} className="w-full">
                                <div className="mb-16 h-full">
                                    <div className="flex items-center gap-5 px-5 pt-0 border-b border-[#D3D3D3] -mt-[7px] bg-white">
                                        <button onClick={() => setSelected("define-properties")} className={`border-b-2 class-base2 py-2 ${selected === "define-properties" ? "border-[#1AA6F1] text-[#1AA6F1]" : "border-transparent"} `}>Define Properties</button>
                                        <IoIosArrowForward className='text-xl' />
                                        <button className={`border-b-2 class-base2 py-2 ${selected === "define-properties" ? "border-transparent" : "border-[#1AA6F1] text-[#1AA6F1]"} `}>Enter Pricing</button>
                                    </div>
                                    <div className="bg-[#F8F9FC] py-6 px-5">
                                        {!isAddNewProperty ?
                                            <>
                                                {!isAddVariant && <div onClick={() => setIsAddVariant(true)} className='border cursor-pointer border-dashed border-[#1AA1F1] bg-white hover:bg-[#1aa6f10c] w-full h-32 flex flex-col justify-center items-center rounded-md'>
                                                    <FaPlus className="primary-color" size={25} />
                                                    <p className='font-semibold text-center primary-color class-base2 mt-3'>Add new property</p>
                                                </div>
                                                }

                                                {isAddVariant &&
                                                    <div className='border p-4 bg-white w-full rounded-md'>
                                                        <div className="flex justify-between items-center">
                                                            <h3 className='class-xl6 text-black'>Add property</h3>
                                                            <BiTrash onClick={() => setIsAddVariant(false)} className="text-[#E4626F] text-lg cursor-pointer" />
                                                        </div>
                                                        <div className="w-full mt-5">
                                                            <FormField
                                                                control={control}
                                                                name="variantName"
                                                                render={({ field }) => (
                                                                    <FormItem className="z-20">
                                                                        <FormLabel></FormLabel>
                                                                        <FormControl>
                                                                            <div className='relative'>
                                                                                <Input placeholder="Enter variant name" className="py-6 pr-9"  {...field} />
                                                                                <button onClick={() => setIsAddNewProperty(true)} className='absolute right-2 top-1/2 -translate-y-1/2 w-5 h-5 flex justify-center items-center rounded-full bg-[#1AA6F1] cursor-pointer'>
                                                                                    <FaArrowRight className='text-xs text-white' />
                                                                                </button>
                                                                            </div>
                                                                        </FormControl>
                                                                        <FormMessage />
                                                                    </FormItem>
                                                                )}
                                                            />
                                                        </div>
                                                    </div>
                                                }

                                                <p className='my-5 class-base6'>Or select from templates</p>

                                                <div className='grid grid-cols-3 gap-3'>
                                                    <div className="bg-white border p-5 rounded-lg flex flex-col gap-[2px]">
                                                        <img className='w-12' src={sizeIcon} alt="" />
                                                        <h4 className='class-base6 text-black'>Size</h4>
                                                        <p>E.g. Small, Medium, Large</p>
                                                        <button className='class-base6 primary-color text-left'>Add Property</button>
                                                    </div>
                                                    <div className="bg-white border p-5 rounded-lg flex flex-col gap-[2px]">
                                                        <img className='w-12' src={quantityIcon} alt="" />
                                                        <h4 className='class-base6 text-black'>Quantity</h4>
                                                        <p>E.g. Quarter, Half, Full</p>
                                                        <button className='class-base6 primary-color text-left'>Add Property</button>
                                                    </div>
                                                    <div className="bg-white border p-5 rounded-lg flex flex-col gap-[2px]">
                                                        <img className='w-12' src={preparationTypeIcon} alt="" />
                                                        <h4 className='class-base6 text-black'>Preparation Type</h4>
                                                        <p>E.g. Halal, Non halal</p>
                                                        <button className='class-base6 primary-color text-left'>Add Property</button>
                                                    </div>
                                                </div>
                                            </>
                                            :
                                            <div className='border p-4 bg-white w-full rounded-md'>
                                                <div className='flex justify-between'>
                                                    <div className="flex gap-2 items-center">
                                                        <FiEdit onClick={() => setIsAddNewProperty(false)} className="text-[#1AA6F1] text-lg cursor-pointer" />
                                                        <h4 className='class-xl6 text-black'>{getValues("variantName")}</h4>
                                                    </div>
                                                    <BiTrash onClick={() => setIsAddNewProperty(false)} className="text-[#E4626F] text-lg cursor-pointer" />
                                                </div>
                                                <div>
                                                    {propertyArray.map((_, i) => (
                                                        <div key={i} className="w-full mt-5">
                                                            <FormField
                                                                control={control}
                                                                name={`${getValues("variantName")}${i + 1}`}
                                                                render={({ field }) => (
                                                                    <FormItem className="w-full">
                                                                        <FormLabel>{`${getValues("variantName")} ${i + 1}`}</FormLabel>
                                                                        <FormControl className="">
                                                                            <div className='flex items-center gap-3'>
                                                                                <Input placeholder="Enter variant name" className="py-6 w-full"  {...field} />
                                                                                <BiTrash onClick={() => handlePropertyRemove(i)} className="text-[#E4626F] text-lg cursor-pointer" />
                                                                            </div>
                                                                        </FormControl>
                                                                        <FormMessage />
                                                                    </FormItem>
                                                                )}
                                                            />
                                                        </div>
                                                    ))}
                                                </div>
                                                <button onClick={handleAddInput} className='primary-color class-base4 my-4 flex items-center gap-[2px]'>
                                                    <FaPlus className='text-sm' />
                                                    Add new {getValues("variantName")}
                                                </button>
                                            </div>
                                        }
                                    </div>
                                </div>

                                <div className="flex gap-2 fixed right-0 bottom-0 w-1/2 bg-white p-4 shadow-3xl">
                                    <Button onClick={() => { }} size="lg" variant="capsico" className="w-full class-base2">Enter prices and review</Button>
                                </div>
                            </form>
                        </Form>
                    </SheetDescription>
                </SheetHeader>
            </SheetContent>
        </Sheet>
    )
}

export default CreateVariant