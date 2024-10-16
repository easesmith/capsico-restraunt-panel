import React, { useState } from 'react'
import RestaurantWrapper from '../components/restaurantWrapper/RestaurantWrapper'
import OutletImg from "../../assets/outlet.png"
import CloseCartImg from '../../assets/Mask group.png'
import { Input } from '@/components/ui/input'
import { IoSearchOutline } from 'react-icons/io5'
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { LiaDownloadSolid } from "react-icons/lia";
import { LuCalendar } from "react-icons/lu";
import { Button } from '@/components/ui/button'
import { HiOutlineAdjustmentsHorizontal } from "react-icons/hi2";
import OrdersModel from '../components/orders/OrdersModel'
import { useSelector, useDispatch } from 'react-redux';
import { hideNotification, showNotification } from '../redux/notificationSlice';
import SingleOrder from '../components/SingleOrder'
import OrderAlertModal from '../components/OrderAlertModal'

const Order = () => {

  const dispatch = useDispatch()
  // const isVisible = useSelector((state) => state.notification.isVisible);
  console.log(useSelector((state) => state.notification.isVisible))

  // isOn ? dispatch(hideNotification()) : dispatch(showNotification())


  const [selectedDateRange, setSelectedDateRange] = useState("");
  const [orderStatus, setOrderStatus] = useState("preparing")
  const [isOrderAlertModalOpen, setIsOrderAlertModalOpen] = useState(true);

  const handleSelectChange = (value) => {
    setSelectedDateRange(value);
  };

  return (
    <RestaurantWrapper>
      <>
        <div>
          <div className=' bg-[#D9F1FD66] flex justify-between items-center px-10 py-4 mb-4'>
            <div >
              <h6 className='five-color class-base1'>Order History</h6>
            </div>
            <div className=' flex justify-center items-center gap-5'>
              <div className='w-[324px] flex items-center'>
                <IoSearchOutline className='-mr-6 z-10 eleven-color' />
                <Input type="search" placeholder="Enter Order ID to search" className="pl-8 secondry-color class-sm2" />
              </div>

              <Select onValueChange={handleSelectChange}>
                <SelectTrigger className="w-[175px] third-color">
                  <LuCalendar className='third-color class-lg2' />
                  <SelectValue placeholder="16th to 17th Jul" value={selectedDateRange} />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup className=' third-color class-sm1'>
                    <SelectItem value="16">16th to 17th Jul</SelectItem>
                    <SelectItem value="17">17th to 18th Jul</SelectItem>
                    <SelectItem value="18">18th to 19th Jul</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>

              <Button variant="outline" className="flex justify-center items-center gap-2 third-color class-sm1"><HiOutlineAdjustmentsHorizontal className='text-[22px]' /><span>Filter</span></Button>
              <Button variant="outline" className="flex justify-center items-center gap-2 third-color class-sm1"><LiaDownloadSolid className='text-[18px]' /><span>Export CSV</span></Button>
            </div>
          </div>

          {/* <Toast /> */}
          <div className="flex items-center gap-5 p-5">
            <button onClick={() => setOrderStatus("preparing")} className={`px-6 py-1 rounded-lg ${orderStatus == "preparing" ? "bg-[#4A67FF] text-white" : "border border-[#8B8B8B] text-[#8B8B8B]"}`}>Preparing</button>
            <button onClick={() => setOrderStatus("ready")} className={`px-6 py-1 rounded-md ${orderStatus == "ready" ? "bg-[#4A67FF] text-white" : "border border-[#8B8B8B] text-[#8B8B8B]"}`}>Ready</button>
            <button onClick={() => setOrderStatus("collected")} className={`px-6 py-1 rounded-md ${orderStatus == "collected" ? "bg-[#4A67FF] text-white" : "border border-[#8B8B8B] text-[#8B8B8B]"}`}>Collected</button>
          </div>

          <div className="flex flex-col gap-3 p-5">
            <SingleOrder />
          </div>
          {isOrderAlertModalOpen &&
            <OrderAlertModal
              isOrderAlertModalOpen={isOrderAlertModalOpen}
              setIsOrderAlertModalOpen={setIsOrderAlertModalOpen}
            />
          }

          {/* <div className='w-full h-[456px] flex flex-col justify-between items-center mt-40'>
            <div className='flex justify-center relative w-[577px]'>
              <img src={OutletImg} alt="" />
              <img src={CloseCartImg} alt="" className=' absolute bottom-[-4%] right-[-7%]' />
            </div>
            <div className=' w-[521px] max-w-[521px] flex flex-col items-center gap-6'>
              <span className='eight-color class-xl3 text-center'>You are offline</span>
              <p className='five-color class-xl3 text-center'>Click <span className='primary-color font-semibold'>Help center</span> for more Information.</p>
            </div>
          </div> */}
        </div>
        <OrdersModel />
      </>
    </RestaurantWrapper>
  )
}

export default Order
