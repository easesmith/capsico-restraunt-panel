import React, { useEffect, useState } from 'react'
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogContent,
} from "@/components/ui/alert-dialog"
import WifiImg from '../../../assets/wifi.png'
import { useLocation } from 'react-router-dom'


const OrdersModel = () => {

    const [showPopup, setShowPopup] = useState(false);
    const location = useLocation()

    useEffect(() => {
        if (location.pathname === '/restaurant/orders') {
            setShowPopup(true)
        } else {
            setShowPopup(false)
        }
    }, [location])
    return (
        <>
            {showPopup ?
                <AlertDialog open={showPopup} onOpenChange={setShowPopup}>
                    <AlertDialogContent className="min-w-[680px] p-0 bg-[#FFFFFF] rounded-xl mx-auto">
                        <div className=' flex justify-center items-center py-8'>
                            <img src={WifiImg} alt="wifi-img" />
                        </div>
                        <div className=' bg-[#E7EBEF66] flex flex-col items-end gap-1 rounded-xl py-6 px-8'>
                            <p className='five-color class-lg1'>To prevent order rejections and ensure a positive customer experience, please go offline if you are unable to fulfill orders for any reason.”</p>
                            <AlertDialogAction className=" bg-[#1AA6F1] hover:bg-[#1AA6F1] text-white class-lg1 tracking-[1%] rounded-[8px] py-6 px-12 mt-1">
                                Okay
                            </AlertDialogAction>
                        </div>
                    </AlertDialogContent>
                </AlertDialog>
                : ''}
        </>
    )
}

export default OrdersModel
