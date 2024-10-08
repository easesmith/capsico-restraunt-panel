import React from 'react'
import { FaCheck } from 'react-icons/fa6'
import vegicon from '@/assets/vegicon.png'
import Ellipse from '@/assets/Ellipse 1.png'
import { MdCall } from 'react-icons/md'
import { Button } from '@/components/ui/button'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';

const SingleOrder = () => {
    const form = useForm({
        resolver: zodResolver({}),
        defaultValues: {
            phoneNumber: "",
            email: "",
        }
    })
    const { register, control, watch, setValue, getValues } = form;

    const onSubmit = (data) => {
        console.log("data", data);
    }
    return (
        <div className='grid grid-cols-3 border border-[#C1C1C1] rounded-lg'>
            <div className='p-5 border-r border-dashed border-r-[#C4C4C4]'>
                <h2 className='text-[#515151] font-medium text-xl font-dmSans'>ID:37939 30930</h2>
                <p className='font-dmSans font-medium text-sm text-[#7C7C7C]'>July 12,2023 8:49 am</p>
                <div className="flex flex-col mt-5">
                    <div className="flex items-center space-x-2">
                        <div className="flex items-center justify-center w-6 h-6 bg-[#57A748] p-[6px] text-white rounded-full">
                            <FaCheck />
                        </div>
                        <span className="text-black font-medium text-sm">Accepted</span>
                    </div>

                    <div className="ml-3 border-l border-dashed border-gray-400 h-6"></div>

                    <div className="flex items-center space-x-2">
                        <div className="flex items-center justify-center w-6 h-6 bg-[#BEBEBE] text-white p-[6px] rounded-full">
                            <FaCheck />
                        </div>
                        <span className="text-black font-medium text-sm">Preparing</span>
                    </div>
                </div>
            </div>
            <div className='py-5 px-10 border-r border-dashed border-r-[#C4C4C4]'>
                <div className="flex flex-col gap-2">
                    <div className="flex justify-between items-center gap-2">
                        <div className='flex items-center gap-3'>
                            <img src={vegicon} alt="" />
                            <h3 className='text-sm font-dmSans font-medium text-[#515151]'>7 X Idli 2 nos</h3>
                        </div>
                        <h3 className='text-sm font-dmSans font-medium text-[#515151]'>₹230</h3>
                    </div>
                    <div className="flex justify-between items-center gap-2">
                        <div className='flex items-center gap-3'>
                            <img src={vegicon} alt="" />
                            <h3 className='text-sm font-dmSans font-medium text-[#515151]'>8 X 1 Medu Vada</h3>
                        </div>
                        <h3 className='text-sm font-dmSans font-medium text-[#515151]'>₹110</h3>
                    </div>
                    <div className="flex justify-between items-center gap-2">
                        <div className='flex items-center gap-3'>
                            <img src={vegicon} alt="" />
                            <h3 className='text-sm font-dmSans font-medium text-[#515151]'>1 X 1 Plain Dosa</h3>
                        </div>
                        <h3 className='text-sm font-dmSans font-medium text-[#515151]'>₹50</h3>
                    </div>
                </div>
                <div className="flex justify-between items-center gap-2 mt-5">
                    <h3 className='text-sm font-dmSans font-medium text-[#515151]'>Total amount</h3>
                    <h3 className='text-sm font-dmSans font-medium text-[#515151]'>₹390</h3>
                </div>
                <button className={`px-6 py-2 mt-5 bg-gradient-to-r from-[#4A67FF] from-30% to-[#172C99] to-40% rounded-md text-white w-full`}>Order ready in 10:19</button>
                {/* <button className={`px-6 py-2 mt-5 bg-gradient-to-r to-40% rounded-md bg-[#F05542] text-white w-full`}>Order ready</button> */}
                {/* <button className={`px-6 py-2 mt-5 bg-gradient-to-r to-40% rounded-md bg-[#4A67FF] text-white w-full`}>Order Completed</button> */}
            </div>
            <div className='p-5'>
                <div className="border border-[#D7D7D7] rounded-md px-4 py-2">
                    <div className="flex justify-between items-center">
                        <h4 className='font-medium font-dmSans text-sm text-[#515151]'>Balaji has arrived</h4>
                        <div className="flex items-center gap-2">
                            <img src={Ellipse} alt="" />
                            <div className="w-10 h-10 rounded-full bg-[#E9E9E9] flex justify-center items-center text-[#4A67FF]">
                                <MdCall className='text-2xl' />
                            </div>
                        </div>
                    </div>
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="w-full">
                            <div className='w-full grid grid-cols-2'>
                                <FormField
                                    control={control}
                                    name="phoneNumber"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel className="text-lg text-[#3B3B3B] font-bold font-inter">Enter OTP</FormLabel>
                                            <FormControl>
                                                <Input placeholder="" className="placeholder:text-[#3B3B3B] w-full" {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            </div>

                            <FormField
                                control={control}
                                name="phoneNumber"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel className="text-sm text-[#3B3B3B] font-inter">Enter Balaji’s Body temperature</FormLabel>
                                        <FormControl>
                                            <div className='w-full grid grid-cols-2 mt-3 gap-5'>
                                                <Input placeholder="98.4° F" className="placeholder:text-[#3B3B3B] text-center w-full" {...field} />
                                                <Button type="submit" className="w-full rounded-xl hover:text-white bg-[#4A67FF] hover:bg-[#4A67FF]">Submit</Button>
                                            </div>
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </form>
                    </Form>
                </div>
            </div>
        </div>
    )
}

export default SingleOrder