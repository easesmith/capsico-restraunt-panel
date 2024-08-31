import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';
// import WifiImg from '../../../assets/wifi.png'
import Buyer from '../../../assets/buyers-couple-shopping-holding-colorful-shopper-bags-shopping-mall-generative-ai_527096-28012 1.png'
import { AlertDialog, AlertDialogContent } from '@/components/ui/alert-dialog';
import { FaXmark } from "react-icons/fa6";

const CustomerComplaintModel = () => {

    const [showPopup, setShowPopup] = useState(false);
    const location = useLocation()

    function closePopup() {
        setShowPopup(false)
    }

    useEffect(() => {
        if (location.pathname === '/restaurant/customer-complaint') {
            setShowPopup(true)
        } else {
            setShowPopup(false)
        }
    }, [location])
    return (
        <>
            {showPopup ?
                <AlertDialog open={showPopup} onOpenChange={setShowPopup}>
                    <AlertDialogContent className="min-w-[600px] p-0 bg-[#FFFFFF] rounded-xl mx-auto">
                        <div className=' flex justify-between items-center px-3 pt-5'>
                            <h2 className=' five-color class-xl1 '>Retain Your Customers </h2>
                            <FaXmark onClick={closePopup} className='class-xl1 cursor-pointer' />
                        </div>
                        <div className='flex justify-center items-center'>
                            <img src={Buyer} alt="buyer-img" className='' />
                        </div>
                        <div className=' flex flex-col gap-5 pt-3 pb-8 px-5'>
                            <p className='class-lg1 ten-color'>Refunding a customer for a genuine issue not only delights them but also builds trust in your brand. How It Works:</p>
                            <div>
                                <h3 className='five-color class-xl1 mb-2'>How does it works?</h3>
                                <ul className='pl-10'>
                                    <li className='class-base1 ten-color'>The customer provides details of the issue.</li>
                                    <li className='class-base1 ten-color'>Zomato verifies the details and forwards only genuine complaints for your review.</li>
                                    <li className='class-base1 ten-color'>You resolve the complaint by refunding the customer.</li>
                                </ul>
                            </div>
                            <p className='bg-[#D9F1FD66] five-color text-center class-base1 p-[10px]'>No amount is deducted without your approval.</p>
                        </div>
                    </AlertDialogContent>
                </AlertDialog>
                : ''}
        </>
    )
}

export default CustomerComplaintModel
