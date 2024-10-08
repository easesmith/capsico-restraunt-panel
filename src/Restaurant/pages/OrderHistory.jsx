import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { useState } from 'react'
import { HiOutlineAdjustmentsHorizontal } from "react-icons/hi2"
import { IoSearchOutline } from 'react-icons/io5'
import { LiaDownloadSolid } from 'react-icons/lia'
import { LuCalendar } from "react-icons/lu"
import BurgerImg from '../../assets/burger.png'
import RestaurantWrapper from '../components/restaurantWrapper/RestaurantWrapper'

const OrderHistory = () => {

  const [selectedDateRange, setSelectedDateRange] = useState("");

  const handleSelectChange = (value) => {
    setSelectedDateRange(value);
  };
  return (
    <RestaurantWrapper>
      <div className=''>
        <div className=' bg-[#D9F1FD66] flex justify-between items-center px-10 py-4 mb-4'>
          <div >
            <h6 className='five-color class-base1'>Order History</h6>
          </div>
          <div className=' flex justify-center items-center gap-5'>
            {/* <div className='w-[324px] flex items-center'>
              <IoSearchOutline className='-mr-6 z-10' />
              <Input type="search" placeholder="Enter Order ID to search" className="pl-8" />
            </div> */}

            <Select onValueChange={handleSelectChange}>
              <SelectTrigger className="w-[175px] third-color">
                <LuCalendar className='class-lg2' />
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

        <div className='w-full h-[700px] bg-[#E7EBEF66] flex justify-center pl-6 pb-2'>
          <div className='w-1/2 bg-[#FFFFFF] pt-6 px-6  border-[2px] rounded-s-[7px]'>
            <div className='w-full flex items-center pl-3'>
              <IoSearchOutline className='-mr-6 z-10 eleven-color' />
              <Input type="search" placeholder="Enter Order ID to search" className="pl-8 secondry-color class-sm2" />
            </div>
          </div>
          <div className=' w-1/2 bg-[#FFFFFF] flex flex-col items-center justify-center gap-12'>
            <img src={BurgerImg} alt="burger-img" className='w-[258px] h-[258px]' />
            <p className='third-color class-2xl1'>No order to show</p>
          </div>
        </div>
      </div>

      {/* <div className='w-[830px] h-[594px] bg-[#FFFFFF] rounded-xl mx-auto'>
        <div className=' flex justify-center items-center py-8'>
          <img src={WifiImg} alt="wifi-img" />
        </div>
        <div className=' bg-[#E7EBEF66] flex flex-col items-end gap-1 rounded-xl py-6 px-8'>
          <p className='text-[#000000] text-2xl font-normal font-numans'>To prevent order rejections and ensure a positive customer experience, please go offline if you are unable to fulfill orders for any reason.”</p>
          <Button variant="wifi" className="bg-[#1AA6F1] text-[#FFFFFF] text-2xl font-normal font-numans tracking-[1%] rounded-[8px] py-5 px-16">Okay</Button>
        </div>
      </div> */}
    </RestaurantWrapper>
  )
}

export default OrderHistory
