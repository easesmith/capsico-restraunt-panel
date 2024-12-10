import { Button } from '@/components/ui/button'
import RestaurantWrapper from '../components/restaurantWrapper/RestaurantWrapper'
import { useEffect, useState } from 'react'
import { MdOutlineKeyboardArrowRight } from 'react-icons/md'
import AboutOutlet from '../components/outletInfo/AboutOutlet'
import ContactInfo from '../components/outletInfo/ContactInfo'
import OutletWorkingTime from '../components/outletInfo/OutletWorkingTime'
import RestaurantAddress from '../components/outletInfo/RestaurantAddress'
// import ControlDeliveryDistance from '../components/outletInfo/ControlDeliveryDistance'
import ControlDeliveryDistanceModel from '../components/models/ControlDeliveryDistanceModel'
import useGetApiReq from '@/hooks/useGetApiReq'

const OutletInfo = () => {
    const [selcected, setSelcected] = useState("About-Outlet");

    const [isControlDeliveryModel, setIsControlDeliveryModel] = useState(false)

    const { res, fetchData, isLoading } = useGetApiReq();

    const getRestaurantProfile = () => {
        fetchData("/restaurant/restaurant-profile");
    }

    useEffect(() => {
        getRestaurantProfile();
    }, [])

    useEffect(() => {
        if (res?.status === 200 || res?.status === 201) {
            console.log("restaurant profile response", res);
        }
    }, [res])

    return (
        <RestaurantWrapper>
            <div>
                <div className='bg-[#D9F1FD66] p-5 flex justify-between items-center'>
                    <p className='class-base1'>Outlet Info</p>
                    <Button variant='outline' className="nine-color class-base2 rounded">View on Capsico</Button>
                </div>
                <div className="my-3 mx-8 bg-white grid grid-cols-[40%_60%] border rounded-md shadow">
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
                        <div onClick={() => setIsControlDeliveryModel(true)} className={`p-5  cursor-pointer flex justify-between items-center class-lg3 border-b-2 ${selcected === "Control-delivery-distance" ? "text-[#1AA6F1] border-l-[#1AA6F1] bg-[#F3F3FC]" : "border-l-transparent"}  border-l-4`}>
                            <span>Control delivery distance</span>
                            <MdOutlineKeyboardArrowRight className='text-2xl' />
                        </div>
                        <div onClick={() => setSelcected("Restaurant-address")} className={`p-5  cursor-pointer flex justify-between items-center class-lg3 border-b-2 ${selcected === "Restaurant-address" ? "text-[#1AA6F1] border-l-[#1AA6F1] bg-[#F3F3FC]" : "border-l-transparent"}  border-l-4`}>
                            <span>Restaurant name, location & address</span>
                            <MdOutlineKeyboardArrowRight className='text-2xl' />
                        </div>
                    </div>
                    <div>
                        {selcected === "About-Outlet" && <AboutOutlet getRestaurantProfile={getRestaurantProfile} profile={res?.data?.data?.profile} />}
                        {selcected === "Contact-Info" && <ContactInfo />}
                        {selcected === "Outlet-Working-time" && <OutletWorkingTime getRestaurantProfile={getRestaurantProfile} operatingHours={res?.data?.data?.profile?.operatingHours} />}
                        {/* {selcected === "Control-delivery-distance" && <ControlDeliveryDistance/>} */}
                        {/* {selcected === "Control-delivery-distance" && isControlDeliveryModel ? <ControlDeliveryDistanceModel/> : 'bh'} */}
                        {/* {isControlDeliveryModel ?<ControlDeliveryDistanceModel/>: ''} */}
                        {selcected === "Restaurant-address" && <RestaurantAddress />}
                    </div>
                </div>
                {isControlDeliveryModel &&
                    <ControlDeliveryDistanceModel
                        isControlDeliveryModel={isControlDeliveryModel}
                        setIsControlDeliveryModel={setIsControlDeliveryModel}
                    />
                }
            </div>
        </RestaurantWrapper>
    )
}

export default OutletInfo