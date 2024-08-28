import React, { useState } from 'react'
import RestaurantWrapper from '../components/restaurantWrapper/RestaurantWrapper'
import OutletImg from "../../assets/outlet.png"
import CloseCartImg from '../../assets/Mask group.png'
import { Input } from '@/components/ui/input'
import { IoSearchOutline } from 'react-icons/io5'
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { LiaDownloadSolid } from "react-icons/lia";
import { CiCalendar } from "react-icons/ci";
import { Button } from '@/components/ui/button'
import { HiOutlineAdjustmentsHorizontal } from "react-icons/hi2";
import Toast from '../components/Toast'
const Order = () => {

  const [selectedDateRange, setSelectedDateRange] = useState("");

  const handleSelectChange = (value) => {
    setSelectedDateRange(value);
  };

  return (
    <RestaurantWrapper>
      <>
        <div>
          <div className=' bg-[#D9F1FD66] flex justify-between items-center px-10 py-4 mb-4'>
            <div >
              <h6 className='text-[#000000] text-[16.8px] font-normal font-inter'>Order History</h6>
            </div>
            <div className=' flex justify-center items-center gap-5'>
              <div className='w-[324px] flex items-center'>
                <IoSearchOutline className='-mr-6 z-10' />
                <Input type="search" placeholder="Enter Order ID to search" className="pl-8" />
              </div>

              <Select onValueChange={handleSelectChange}>
                <SelectTrigger className="w-[175px]">
                  <CiCalendar className='text-[18px]' />
                  <SelectValue placeholder="16th to 17th Jul" value={selectedDateRange} />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectItem value="16">16th to 17th Jul</SelectItem>
                    <SelectItem value="17">17th to 18th Jul</SelectItem>
                    <SelectItem value="18">18th to 19th Jul</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>

              <Button variant="outline" className="flex justify-center items-center gap-2 text-[#4A5E6D] text-[16px] font-normal"><HiOutlineAdjustmentsHorizontal className='text-[22px]' /><span>Filter</span></Button>
              <Button variant="outline" className="flex justify-center items-center gap-2 text-[#4A5E6D] text-[16px] font-normal"><LiaDownloadSolid className='text-[18px]' /><span>Export CSV</span></Button>
            </div>
          </div>
          <Toast/>
          <div className='w-full h-[456px] flex flex-col justify-between items-center mt-40'>
            <div className='flex justify-center relative w-[577px]'>
              <img src={OutletImg} alt="" />
              <img src={CloseCartImg} alt="" className=' absolute bottom-[-4%] right-[-7%]' />
            </div>
            <div className=' w-[521px] max-w-[521px] flex flex-col items-center gap-7'>
              <span className='text-[#637D92] text-2xl text-center font-medium font-inter'>You are offline</span>
              <p className='text-[#000000] text-2xl text-center font-normal font-inter'>Click <span className='text-[red] font-semibold'>Help center</span> for more Information.</p>
            </div>
          </div>
        </div>
      </>
    </RestaurantWrapper>
  )
}

export default Order
