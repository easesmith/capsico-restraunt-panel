// import { AlertDialog, AlertDialogContent } from '@radix-ui/react-alert-dialog'
import React, { useState } from 'react'
import DistanceImg from '../../../assets/Layer_2.png'
import ServiceImg from '../../../assets/Group1.png'
import { HiMiniXMark } from "react-icons/hi2";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { AlertDialog, AlertDialogContent } from '@/components/ui/alert-dialog';


const ControlDeliveryDistanceModel = ({ isControlDeliveryModel, setIsControlDeliveryModel }) => {

    // const [showPopup, setShowPopup] = useState(true);

    const [selectedDistance, setSelectedDistance] = useState('');

    function closePopup() {
        setIsControlDeliveryModel(false)
    }

    return (
        <AlertDialog open={isControlDeliveryModel} onOpenChange={setIsControlDeliveryModel}>
            <AlertDialogContent className="min-w-[680px] p-0 bg-[#FFFFFF] rounded-xl mx-auto" >
                <div className='rounded-lg'>
                    <div className='flex justify-between items-center px-4 py-3'>
                        <h1 className='five-color class-xl1'>Control delivery distance</h1>
                        <HiMiniXMark onClick={closePopup} />
                    </div>
                    <div className='bg-[#E7EBEF] p-5 flex flex-col gap-5'>
                        <p className='five-color class-base1'>The fulfillment fee varies based on the delivery distance. It’s lower for shorter distances and higher for longer ones.</p>
                        <h2 className='five-color class-xl1'>Distance & Service fee</h2>
                        <div className='w-full rounded-lg bg-[#FFFFFF] px-6 py-5 flex justify-between'>
                            <div className='w-1/2'>
                                <div className=' flex items-center gap-3 mb-3'>
                                    <img src={DistanceImg} alt="" />
                                    <span className='five-color class-lg1'>Delivery distance</span>
                                </div>
                                <Select value={selectedDistance} onValueChange={setSelectedDistance}>
                                    <SelectTrigger className="w-fit min-w-[150px]">
                                        <SelectValue placeholder="distance" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="5">5km</SelectItem>
                                        <SelectItem value="15">15km</SelectItem>
                                        <SelectItem value="25">25km</SelectItem>
                                    </SelectContent>
                                </Select>

                            </div>
                            <div className='w-1/2'>
                                <div className='flex items-center gap-3 mb-3'>
                                    <img src={ServiceImg} alt="" />
                                    <span className='five-color class-lg1'>Service fee</span>
                                </div>
                                <p className='fourteen-color class-sm1'>{selectedDistance}% base service fee +₹{selectedDistance}/km fulfilment fee</p>
                            </div>
                        </div>
                    </div>
                </div>
            </AlertDialogContent >
        </AlertDialog >


    )
}

export default ControlDeliveryDistanceModel
