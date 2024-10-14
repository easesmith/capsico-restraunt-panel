import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle
} from "@/components/ui/alert-dialog";
import { HiMiniXMark } from 'react-icons/hi2';
import { IoVolumeMediumOutline } from "react-icons/io5";
import { RxCopy } from "react-icons/rx";
import { Badge } from "@/components/ui/badge"
import restaurantCutlery from "@/assets/restaurant-cutlery 1.png"
import vegicon from '@/assets/vegicon.png'
import { FaMinus, FaPlus } from "react-icons/fa6";
import { useState } from "react";

const OrderAlertModal = ({ isOrderAlertModalOpen, setIsOrderAlertModalOpen }) => {
    const [minute, setMinute] = useState(1);
    const handleCancel = (e) => {
        e.preventDefault();
        setIsOrderAlertModalOpen(false);
    }

    const handleAction = (e) => {
        e.preventDefault();
        setIsOrderAlertModalOpen(true);
    }

    return (
        <AlertDialog open={isOrderAlertModalOpen} onOpenChange={setIsOrderAlertModalOpen}>
            <AlertDialogContent className="max-w-xl w-full">
                <AlertDialogHeader>
                    <div className="flex justify-between items-center">
                        <AlertDialogTitle className="font-medium text-[#000000]">Alert for New Order</AlertDialogTitle>
                        <HiMiniXMark onClick={() => setIsOrderAlertModalOpen(false)} className='text-2xl cursor-pointer' />
                    </div>
                </AlertDialogHeader>
                <div className='rounded-lg bg-[#fafafa] border p-4'>
                    <div className="flex justify-between">
                        <div>
                            <div className="flex items-center gap-1">
                                <h3 className="text-[#515151] font-medium text-sm font-dmSans">ID:39939 30994</h3>
                                <RxCopy className="cursor-pointer text-[#515151] ml-2" />
                                <IoVolumeMediumOutline className="cursor-pointer text-[#515151] text-xl" />
                            </div>
                            <p className="font-dmSans font-medium text-xs mt-2 text-[#7C7C7C]">09:04 am</p>
                        </div>
                        <div>
                            <p className="font-dmSans font-medium text-xs text-[#2649FF]">1st order by Zyash</p>
                            <Badge variant="outline" className="border-[#ADCB42] py-[6px] mt-2 flex items-center gap-1 text-[#ADCB42]">
                                <img src={restaurantCutlery} alt="" />
                                <span>Send Cutlery</span>
                            </Badge>
                        </div>
                    </div>
                    <div className="flex flex-col gap-2 mt-5">
                        <div className="flex justify-between items-center gap-2">
                            <div className='flex items-center gap-3'>
                                <img src={vegicon} alt="" />
                                <h3 className='text-sm font-dmSans font-medium text-[#515151]'>1 X Masala Dosa</h3>
                            </div>
                            <h3 className='text-sm font-dmSans font-medium text-[#515151]'>₹60</h3>
                        </div>
                        <div className="flex justify-between items-center gap-2">
                            <div className='flex items-center gap-3'>
                                <img src={vegicon} alt="" />
                                <h3 className='text-sm font-dmSans font-medium text-[#515151]'>1 X Set Dosa 2nos</h3>
                            </div>
                            <h3 className='text-sm font-dmSans font-medium text-[#515151]'>₹60</h3>
                        </div>
                    </div>
                    <Badge className="bg-[#CAFFD5] text-[#3B3B3B] font-dmSans w-full rounded-lg py-[6px] mt-2">
                        <span className="font-medium">Order Instruction</span>: <span className="text-[#666666] ml-1">Add more spicy</span>
                    </Badge>
                    <div className="mt-3 pt-3 border-t border-t-[#D3D3D3] border-dashed flex justify-between items-center">
                        <div className="grid grid-cols-2 items-center gap-6">
                            <h2 className="font-medium font-dmSans text-[#515151] ">Total amount</h2>
                            <div className="bg-[#FFEFB5] text-black font-dmSans w-11 text-xs font-semibold rounded-none flex justify-center px-0 py-[6px]">
                                PAID
                            </div>
                        </div>
                        <h2 className="font-medium font-dmSans text-[#515151]">₹120</h2>
                    </div>
                    <div className="p-4 border rounded-lg bg-white mt-4">
                        <h2 className="font-dmSans font-medium text-[#1D1D1D] text-sm">Delivery partner will be assigned shortly. </h2>
                        <p className="text-[10px] font-dmSans text-[#7C7C7C]">Please continue food preparation; the delivery partner will arrive at your outlet just before the order is ready.</p>
                        <p className="text-[10px] font-dmSans text-[#7C7C7C] font-medium mt-2">Enter food preparation time</p>
                        <div className="flex justify-between items-center px-4 py-1 mt-2 border rounded-lg">
                            <FaMinus onClick={() => setMinute((prev) => prev - 1)} className="cursor-pointer text-2xl" />
                            <p className="font-medium font-dmSans text-[#515151]">{minute} mins</p>
                            <FaPlus onClick={() => setMinute((prev) => prev + 1)} className="cursor-pointer text-2xl" />
                        </div>
                    </div>
                    <AlertDialogFooter className="mt-2">
                        <AlertDialogCancel onClick={handleCancel} className="w-full font-dmSans font-normal bg-[#F05542] hover:bg-[#F05542] text-white hover:text-white rounded-lg">Reject</AlertDialogCancel>
                        <AlertDialogAction onClick={handleAction} className="w-full font-dmSans font-normal bg-gradient-to-r from-[#4A67FF] from-30% to-[#172C99] to-40% text-white rounded-lg">Accept in 02:19</AlertDialogAction>
                    </AlertDialogFooter>
                </div>
            </AlertDialogContent>
        </AlertDialog >
    )
}

export default OrderAlertModal