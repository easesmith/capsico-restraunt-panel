import restaurantCutlery from "@/assets/restaurant-cutlery 1.png";
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle
} from "@/components/ui/alert-dialog";
import { Badge } from "@/components/ui/badge";
import { getSocket } from "@/socket";
import Counter from "@/utils/Counter";
import { format } from "date-fns";
import { useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa6";
import { IoVolumeMediumOutline } from "react-icons/io5";
import { RxCopy } from "react-icons/rx";
import EggIcon from "./customIcons/EggIcon";
import NonVegIcon from "./customIcons/NonVegIcon";
import VegIcon from "./customIcons/VegIcon";

const OrderAlertModal = ({ isOrderAlertModalOpen, setIsOrderAlertModalOpen, newOrder, getOrders }) => {
    // const newOrder = JSON.parse(localStorage.getItem("newOrder")).order;
    console.log("newOrder", newOrder);
    const socket = getSocket();

    const [minute, setMinute] = useState(1);
    const handleCancel = (e) => {
        e.preventDefault();
        socket.emit('update_order_status', {
            orderId: newOrder?.id,
            status: 'rejected',
            reason: ''
        });
        setIsOrderAlertModalOpen(false);
    }

    const handleAction = (e) => {
        e.preventDefault();
        socket.emit('update_order_status', {
            orderId: newOrder?.id,
            status: 'confirmed',
            reason: ''
        });
        setIsOrderAlertModalOpen(false);
    }

    const onComplete = () => {
        socket.emit('update_order_status', {
            orderId: newOrder?.id,
            status: 'not-confirmed',
            reason: ''
        });
        console.log("Order updated");
        
        setIsOrderAlertModalOpen(false);
    }

    socket.on('order_status_updated', (response) => {
        console.log("order_status_updated response: ", response);
        getOrders();
    });


    return (
        <AlertDialog open={isOrderAlertModalOpen} onOpenChange={setIsOrderAlertModalOpen}>
            <AlertDialogContent className="max-w-xl w-full">
                <AlertDialogHeader>
                    <div className="flex justify-between items-center">
                        <AlertDialogTitle className="font-medium text-[#000000]">Alert for New Order</AlertDialogTitle>
                        {/* <HiMiniXMark onClick={() => setIsOrderAlertModalOpen(false)} className='text-2xl cursor-pointer' /> */}
                    </div>
                </AlertDialogHeader>
                <div className='rounded-lg bg-[#fafafa] border p-4'>
                    <div className="flex justify-between">
                        <div>
                            <div className="flex items-center gap-1">
                                <h3 className="text-[#515151] font-medium text-sm font-dmSans">ID:{newOrder?.orderNumber}</h3>
                                <RxCopy className="cursor-pointer text-[#515151] ml-2" />
                                <IoVolumeMediumOutline className="cursor-pointer text-[#515151] text-xl" />
                            </div>
                            <p className="font-dmSans font-medium text-xs mt-2 text-[#7C7C7C]">{newOrder?.timing?.orderedAt && format(new Date(newOrder?.timing?.orderedAt), "hh:mm aa")}</p>
                        </div>
                        {/* <div>
                            <p className="font-dmSans font-medium text-xs text-[#2649FF]">1st order by Zyash</p>
                            <Badge variant="outline" className="border-[#ADCB42] py-[6px] mt-2 flex items-center gap-1 text-[#ADCB42]">
                                <img src={restaurantCutlery} alt="" />
                                <span>Send Cutlery</span>
                            </Badge>
                        </div> */}
                    </div>
                    <div className="flex flex-col gap-2 mt-5">
                        {newOrder?.items?.map((item, i) => (
                            <div key={i} className="flex justify-between items-center gap-2">
                                <div className='flex items-center gap-3'>
                                    {item?.FoodType === "veg" && <VegIcon />}
                                    {item?.FoodType === "Non-veg" && <NonVegIcon />}
                                    {item?.FoodType === "Egg" && <EggIcon />}
                                    <h3 className='text-sm font-dmSans font-medium text-[#515151]'>{item?.quantity
                                    } X {item?.name}</h3>
                                </div>
                                <h3 className='text-sm font-dmSans font-medium text-[#515151]'>₹{item?.totalPrice}</h3>
                            </div>
                        ))}
                    </div>
                    <Badge className="bg-[#CAFFD5] hover:bg-[#CAFFD5] text-[#3B3B3B] flex items-start font-dmSans w-full rounded-lg py-[6px] mt-2">
                        <span className="font-medium">Order Instruction</span>: <span className="text-[#666666] ml-1">{newOrder?.specialInstructions}</span>
                    </Badge>
                    <div className="mt-3 pt-3 border-t border-t-[#D3D3D3] border-dashed flex justify-between items-center">
                        <div className="grid grid-cols-2 items-center gap-6">
                            <h2 className="font-medium font-dmSans text-[#515151] ">Total amount</h2>
                            <div className="bg-[#FFEFB5] uppercase text-black font-dmSans text-xs font-semibold rounded-none flex justify-center px-0 py-[6px]">
                                {newOrder?.payment?.status}
                            </div>
                        </div>
                        <h2 className="font-medium font-dmSans text-[#515151]">₹{newOrder?.amounts?.total}</h2>
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
                        <AlertDialogAction onClick={handleAction} className="w-full font-dmSans font-normal bg-gradient-to-r from-[#4A67FF] from-30% to-[#172C99] to-40% text-white rounded-lg flex gap-1">Accept in {<Counter onComplete={onComplete} />}</AlertDialogAction>
                    </AlertDialogFooter>
                </div>
            </AlertDialogContent>
        </AlertDialog >
    )
}

export default OrderAlertModal