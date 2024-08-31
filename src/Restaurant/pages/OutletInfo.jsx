import { Button } from '@/components/ui/button'
import RestaurantWrapper from '../components/restaurantWrapper/RestaurantWrapper'
import { useState } from 'react'
import { MdOutlineKeyboardArrowRight } from 'react-icons/md'
import AboutOutlet from '../components/outletInfo/AboutOutlet'
import ContactInfo from '../components/outletInfo/ContactInfo'
import OutletWorkingTime from '../components/outletInfo/OutletWorkingTime'
import RestaurantAddress from '../components/outletInfo/RestaurantAddress'
import ControlDeliveryDistance from '../components/outletInfo/ControlDeliveryDistance'

const OutletInfo = () => {
    const [selcected, setSelcected] = useState("About-Outlet");

    return (
        <RestaurantWrapper>
            <div>
                <div className='bg-[#D9F1FD66] p-5 flex justify-between items-center'>
                    <p className='class-base1'>Outlet Info</p>
                    <Button variant='outline' className="nine-color class-base2 rounded">View on Capsico</Button>
                </div>
                <div className="my-3 mx-8 bg-white grid grid-cols-[40%_60%] border shadow">
                    <div className='border border-b-0'>
                        <div onClick={() => setSelcected("About-Outlet")} className={`p-5  cursor-pointer flex justify-between items-center class-lg3 border-b-2 ${selcected === "About-Outlet" ? "text-[#1AA6F1] border-l-[#1AA6F1] bg-[#F3F3FC]" : "border-l-transparent"}  border-l-4`}>
                            <span>About Outlet</span>
                            <MdOutlineKeyboardArrowRight className='text-2xl' />
                        </div>
                        <div onClick={() => setSelcected("Contact-Info")} className={`p-5  cursor-pointer flex justify-between items-center class-lg3 border-b-2 ${selcected === "Contact-Info" ? "text-[#1AA6F1] border-l-[#1AA6F1] bg-[#F3F3FC]" : "border-l-transparent"}  border-l-4`}>
                            <span>Contact Info</span>
                            <MdOutlineKeyboardArrowRight className='text-2xl' />
                        </div>
                        <div onClick={() => setSelcected("Outlet-Working-time")} className={`p-5  cursor-pointer flex justify-between items-center class-lg3 border-b-2 ${selcected === "Outlet-Working-time" ? "text-[#1AA6F1] border-l-[#1AA6F1] bg-[#F3F3FC]" : "border-l-transparent"}  border-l-4`}>
                            <span>Outlet Working time</span>
                            <MdOutlineKeyboardArrowRight className='text-2xl' />
                        </div>
                        <div onClick={() => setSelcected("Control-delivery-distance")} className={`p-5  cursor-pointer flex justify-between items-center class-lg3 border-b-2 ${selcected === "Control-delivery-distance" ? "text-[#1AA6F1] border-l-[#1AA6F1] bg-[#F3F3FC]" : "border-l-transparent"}  border-l-4`}>
                            <span>Control delivery distance</span>
                            <MdOutlineKeyboardArrowRight className='text-2xl' />
                        </div>
                        <div onClick={() => setSelcected("Restaurant-address")} className={`p-5  cursor-pointer flex justify-between items-center class-lg3 border-b-2 ${selcected === "Restaurant-address" ? "text-[#1AA6F1] border-l-[#1AA6F1] bg-[#F3F3FC]" : "border-l-transparent"}  border-l-4`}>
                            <span>Restaurant name, location & address</span>
                            <MdOutlineKeyboardArrowRight className='text-2xl' />
                        </div>
                    </div>
                    <div>
                        {selcected === "About-Outlet" && <AboutOutlet />}
                        {selcected === "Contact-Info" && <ContactInfo />}
                        {selcected === "Outlet-Working-time" && <OutletWorkingTime />}
                        {selcected === "Control-delivery-distance" && <ControlDeliveryDistance />}
                        {selcected === "Restaurant-address" && <RestaurantAddress />}
                    </div>
                </div>
            </div>
        </RestaurantWrapper>
    )
}

export default OutletInfo