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
import { format } from 'date-fns'
import VegIcon from './customIcons/VegIcon'
import NonVegIcon from './customIcons/NonVegIcon'
import EggIcon from './customIcons/EggIcon'
import { getSocket } from '@/socket'
import { toast } from 'sonner'

const SingleOrder = ({ order, status = "", getOrders }) => {
    // console.log("Single Order", order);
    const socket = getSocket();
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

    const handleOrderReady = () => {
        socket.emit('mark-order-ready', {
            orderId: order._id
        });
    }
    socket.on('order-ready-response', (response) => {
        getOrders();
        if (response?.success) {

            toast.success(response?.message);
        }
        console.log("rder-ready-response", response);
        // {
        //   success: true,
        //   message: 'Order marked ready successfully',
        //   orderId: 'orderId',
        //   readyTime: '2024-01-30T12:00:00Z'
        // }
    });

    return (
        <div className='grid grid-cols-3 border border-[#C1C1C1] rounded-lg'>
            <div className='p-5 border-r border-dashed border-r-[#C4C4C4]'>
                <h2 className='text-[#515151] font-medium text-xl break-all font-dmSans'>ID:{order?.orderNumber}</h2>
                <p className='font-dmSans font-medium text-sm text-[#7C7C7C]'>{order?.timing?.orderedAt && format(order?.timing?.orderedAt, "MMMM dd, yyyy h:mm a")}</p>
                <div className={`flex flex-col mt-5 ${status === "COLLECTED" && "justify-end"}`}>
                    {status === "INPROGRESS" &&
                        <>
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
                        </>}
                    {status === "READY" &&
                        <>
                            <div className="flex items-center space-x-2">
                                <div className="flex items-center justify-center w-6 h-6 bg-[#57A748] p-[6px] text-white rounded-full">
                                    <FaCheck />
                                </div>
                                <span className="text-black font-medium text-sm">Accepted</span>
                            </div>

                            <div className="ml-3 border-l border-dashed border-gray-400 h-6"></div>

                            <div className="flex items-center space-x-2">
                                <div className="flex items-center justify-center w-6 h-6 bg-[#57A748] text-white p-[6px] rounded-full">
                                    <FaCheck />
                                </div>
                                <span className="text-black font-medium text-sm">Preparing</span>
                            </div>
                        </>}
                    {status === "COLLECTED" &&
                        <div className="flex items-center space-x-2">
                            <div className="flex items-center justify-center w-6 h-6 bg-[#57A748] text-white p-[6px] rounded-full">
                                <FaCheck />
                            </div>
                            <span className="text-[#57A748] font-medium text-sm">Delivered</span>
                        </div>
                    }
                </div>
            </div>
            <div className='py-5 px-10 border-r border-dashed border-r-[#C4C4C4]'>
                <div className="flex flex-col gap-2">
                    {order?.items?.map((item, i) => (
                        <div key={i} className="flex justify-between items-center gap-2">
                            <div className='flex items-center gap-3'>
                                {item?.foodId?.FoodType === "veg" && <VegIcon />}
                                {item?.foodId?.FoodType === "Non-veg" && <NonVegIcon />}
                                {item?.foodId?.FoodType === "Egg" && <EggIcon />}
                                <h3 className='text-sm font-dmSans font-medium text-[#515151]'>{item?.quantity
                                } X {item?.name}</h3>
                            </div>
                            <h3 className='text-sm font-dmSans font-medium text-[#515151]'>₹{item?.itemTotal}</h3>
                        </div>))}
                </div>
                <div className="flex justify-between items-center gap-2 mt-5">
                    <h3 className='text-sm font-dmSans font-medium text-[#515151]'>Total amount</h3>
                    <h3 className='text-sm font-dmSans font-medium text-[#515151]'>₹{order?.total || order?.amounts?.total}</h3>
                </div>
                {status === "INPROGRESS" && <button onClick={handleOrderReady} className={`px-6 py-2 mt-5 bg-gradient-to-r from-[#4A67FF] from-30% to-[#172C99] to-40% rounded-md text-white w-full`}>Order ready in 10:19</button>}
                {status === "READY" && <button className={`px-6 py-2 mt-5 bg-gradient-to-r to-40% rounded-md bg-[#F05542] text-white w-full`}>Order ready</button>}
                {status === "COLLECTED" && <button className={`px-6 py-2 mt-5 bg-gradient-to-r to-40% rounded-md bg-[#4A67FF] text-white w-full`}>Order Completed</button>}
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
                            <div className='w-full grid grid-cols-2 gap-2 items-end'>
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
                                <Button type="submit" className="w-full rounded-xl hover:text-white bg-[#4A67FF] hover:bg-[#4A67FF]">Submit</Button>
                                {/* <Button type="submit" className="w-full rounded-xl hover:text-white bg-[#4A67FF] hover:bg-[#4A67FF]">Submit</Button> */}
                            </div>
                        </form>
                    </Form>
                </div>
            </div>
        </div>
    )
}

export default SingleOrder