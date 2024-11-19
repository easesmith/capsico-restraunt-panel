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
import { IoIosCheckmarkCircle } from "react-icons/io";
import { IoMdCall } from "react-icons/io";
import ProfileImg from '@/assets/Ellipse 1.png'
import { FaCircleXmark } from 'react-icons/fa6'
import vegicon from '@/assets/vegicon.png'

const OrderHistory = () => {

  const data = [
    {
      id: '37939 30930',
      date: '',
      time: '',
    },
    {
      id: '839 30930',
      date: '',
      time: '',
    }
  ]

  const data2 = [
    {
      id: '37939 30930',
      date: '',
      time: '',
    },
    {
      id: '9839 30930',
      date: '',
      time: '',
    }
  ]

  const [selectedDateRange, setSelectedDateRange] = useState("");
  const [activeTab, setActiveTab] = useState('All')
  const [searchQuery, setSearchQuery] = useState('')
  const [OrderCompleted, setOrderCompleted] = useState(data)
  const [OrderCancelled, setOrderCancelled] = useState(data2)


  const handleSelectChange = (value) => {
    setSelectedDateRange(value);
  };
  return (
    <RestaurantWrapper>
      <div className=''>
        <div className=' bg-[#D9F1FD66] flex justify-between items-center px-10 py-4 mb-4'>
          <div>
            <h6 className='five-color class-base1'>Order History</h6>
          </div>
          <div className=' flex justify-center items-center gap-5'>
            <div className='w-[300px] flex items-center pl-3'>
              <IoSearchOutline className='-mr-6 z-10 eleven-color' />
              <Input type="search" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} placeholder="Enter Order ID to search" className="pl-8 secondry-color class-sm2" />
            </div>
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

        {activeTab === '' ?
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
          :
          <div className='bg-[#FFFFFF] flex flex-col gap-5 px-6 h-full'>
            <div className='flex gap-4'>
              <Button onClick={() => setActiveTab('All')} variant='gst2' size='lg' className={`h-[38px] w-[91px] ${activeTab != 'All' && 'border-[#9C9C9C] text-[#8B8B8B] bg-[#FFFFFF] hover:bg-[#f0f0f0]'}`}>All</Button>
              <Button onClick={() => setActiveTab('Completed')} variant='gst2' size='lg' className={`h-[38px] ${activeTab != 'Completed' && 'border-[#9C9C9C] text-[#8B8B8B] bg-[#FFFFFF] hover:bg-[#f0f0f0]'}`}>Completed</Button>
              <Button onClick={() => setActiveTab('Cancelled')} variant='gst2' size='lg' className={`h-[38px] ${activeTab != 'Cancelled' && 'border-[#9C9C9C] text-[#8B8B8B] bg-[#FFFFFF] hover:bg-[#f0f0f0]'}`}>Cancelled</Button>
            </div>
            {activeTab === 'All' && OrderCompleted.length > 0 && OrderCompleted.filter(orderId => orderId.id.includes(searchQuery)).map((e, i) => {
              return (
                <div key={i} className='flex justify-between gap-10 border-2 border-[#C1C1C1] rounded-lg h-[248px] px-5'>
                  <div className='w-1/3 h-full flex flex-col justify-between py-7'>
                    <div>
                      <p className='class-xl8 twelve-color'>ID:{e.id}</p>
                      <p className='class-sm8 sixteen-color'>July 12,2023 8:49 am</p>
                    </div>
                    <div className='fifteen-color flex items-center gap-2'>
                      <IoIosCheckmarkCircle className='text-2xl' />
                      <p className='class-sm8'>Delivered</p>
                    </div>
                  </div>
                  <div className='w-1/3 flex flex-col gap-5 h-full justify-start items-center px-10 py-7 border-s-[1px] border-e-[1px] border-dashed border-[#C4C4C4]'>
                    <div className='px-2 w-full'>
                      <div className='flex items-center justify-between mb-3'>
                        <div className='flex items-center gap-2'>
                          <img src={vegicon} alt="" />
                          <p className='class-sm8 twelve-color'>7 X Idli 2 nos</p>
                        </div>
                        <p className='class-sm8 twelve-color'>₹230</p>
                      </div>
                      <div className='flex items-center justify-between mb-3'>
                        <div className='flex items-center gap-2'>
                          <img src={vegicon} alt="" />
                          <p className='class-sm8 twelve-color'>8 X 1 Medu Vada</p>
                        </div>
                        <p className='class-sm8 twelve-color'>₹110</p>
                      </div>
                      <div className='flex items-center justify-between'>
                        <div className='flex items-center gap-2'>
                          <img src={vegicon} alt="" />
                          <p className='class-sm8 twelve-color'>1 X 1 Plain Dosa</p>
                        </div>
                        <p className='class-sm8 twelve-color'>₹50</p>
                      </div>
                    </div>
                    <div className='flex items-center justify-between px-2 w-full'>
                      <p className='class-sm8 twelve-color'>Total amount</p>
                      <p className='class-sm8 twelve-color'>₹390</p>
                    </div>
                    <Button variant='gst3' size='lg' className='class-sm7 h-10 w-[320px]'>Order Completed</Button>
                  </div>
                  <div className=' w-1/3 py-5'>
                    <div className='border-[1px] border-[#E9E9E9] rounded-lg p-3 h-[184px]'>
                      <p className='class-sm8 twelve-color mb-2'>Delivered</p>
                      <div className='flex items-center justify-between'>
                        <div className=' flex justify-start items-start gap-3'>
                          <img src={ProfileImg} alt="profile-img" className='border-[1px] border-[#D3D3D3] rounded-full' />
                          <p className='class-sm8 twelve-color'>Balaji</p>
                        </div>
                        <IoMdCall className='thirteen-color text-lg cursor-pointer' />
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
            {activeTab === 'All' && OrderCancelled.length > 0 && OrderCancelled.filter(orderId => orderId.id.includes(searchQuery)).map((e, i) => {
              return (
                <div key={i} className='flex justify-between gap-10 border-2 border-[#C1C1C1] rounded-lg h-[248px] px-5'>
                  <div className='w-1/2 h-full flex flex-col justify-between py-7'>
                    <div>
                      <p className='class-xl8 twelve-color'>ID:{e.id}</p>
                      <p className='class-sm8 sixteen-color'>July 12,2023 8:49 am</p>
                    </div>
                    <div className='seventeen-color flex items-center gap-2'>
                      <FaCircleXmark className='text-2xl' />
                      <p className='class-sm8'>Cancelled</p>
                    </div>
                  </div>
                  <div className='w-1/2 flex flex-col gap-5 h-full justify-start items-end px-10 py-7 border-s-[1px] border-dashed border-[#C4C4C4]'>
                    <div className='px-2 w-[320px]'>
                      <div className='flex items-center justify-between mb-3'>
                        <p className='class-sm8 twelve-color'>7 X Idli 2 nos</p>
                        <p className='class-sm8 twelve-color'>₹230</p>
                      </div>
                      <div className='flex items-center justify-between mb-3'>
                        <p className='class-sm8 twelve-color'>8 X 1 Medu Vada</p>
                        <p className='class-sm8 twelve-color'>₹110</p>
                      </div>
                      <div className='flex items-center justify-between'>
                        <p className='class-sm8 twelve-color'>1 X 1 Plain Dosa</p>
                        <p className='class-sm8 twelve-color'>₹50</p>
                      </div>
                    </div>
                    <div className='flex items-center justify-between px-2 w-[320px]'>
                      <p className='class-sm8 twelve-color'>Total amount</p>
                      <p className='class-sm8 twelve-color'>₹390</p>
                    </div>
                    <Button variant='gst4' size='lg' className='class-sm7 h-10 w-[320px]'>Order Cancelled</Button>
                  </div>
                </div>
              )
            })}
            {activeTab === 'Completed' && OrderCompleted.length > 0 && OrderCompleted.filter(orderId => orderId.id.includes(searchQuery)).map((e, i) => {
              return (
                <div key={i} className='flex justify-between gap-10 border-2 border-[#C1C1C1] rounded-lg h-[248px] px-5'>
                  <div className='w-1/3 h-full flex flex-col justify-between py-7'>
                    <div>
                      <p className='class-xl8 twelve-color'>ID:{e.id}</p>
                      <p className='class-sm8 sixteen-color'>July 12,2023 8:49 am</p>
                    </div>
                    <div className='fifteen-color flex items-center gap-2'>
                      <IoIosCheckmarkCircle className='text-2xl' />
                      <p className='class-sm8'>Delivered</p>
                    </div>
                  </div>
                  <div className='w-1/3 flex flex-col gap-5 h-full justify-start items-center px-10 py-7 border-s-[1px] border-e-[1px] border-dashed border-[#C4C4C4]'>
                    <div className='px-2 w-full'>
                      <div className='flex items-center justify-between mb-3'>
                        <p className='class-sm8 twelve-color'>7 X Idli 2 nos</p>
                        <p className='class-sm8 twelve-color'>₹230</p>
                      </div>
                      <div className='flex items-center justify-between mb-3'>
                        <p className='class-sm8 twelve-color'>8 X 1 Medu Vada</p>
                        <p className='class-sm8 twelve-color'>₹110</p>
                      </div>
                      <div className='flex items-center justify-between'>
                        <p className='class-sm8 twelve-color'>1 X 1 Plain Dosa</p>
                        <p className='class-sm8 twelve-color'>₹50</p>
                      </div>
                    </div>
                    <div className='flex items-center justify-between px-2 w-full'>
                      <p className='class-sm8 twelve-color'>Total amount</p>
                      <p className='class-sm8 twelve-color'>₹390</p>
                    </div>
                    <Button variant='gst3' size='lg' className='class-sm7 h-10 w-[320px]'>Order Completed</Button>
                  </div>
                  <div className=' w-1/3 py-5'>
                    <div className='border-[1px] border-[#E9E9E9] rounded-lg p-3 h-[184px]'>
                      <p className='class-sm8 twelve-color mb-2'>Delivered</p>
                      <div className='flex items-center justify-between'>
                        <div className=' flex justify-start items-start gap-3'>
                          <img src={ProfileImg} alt="profile-img" className='border-[1px] border-[#D3D3D3] rounded-full' />
                          <p className='class-sm8 twelve-color'>Balaji</p>
                        </div>
                        <IoMdCall className='thirteen-color text-lg cursor-pointer' />
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
            {activeTab === 'Cancelled' && OrderCancelled.length > 0 && OrderCancelled.filter(orderId => orderId.id.includes(searchQuery)).map((e, i) => {
              return (
                <div key={i} className='flex justify-between gap-10 border-2 border-[#C1C1C1] rounded-lg h-[248px] px-5'>
                  <div className='w-1/2 h-full flex flex-col justify-between py-7'>
                    <div>
                      <p className='class-xl8 twelve-color'>ID:{e.id}</p>
                      <p className='class-sm8 sixteen-color'>July 12,2023 8:49 am</p>
                    </div>
                    <div className='seventeen-color flex items-center gap-2'>
                      <FaCircleXmark className='text-2xl' />
                      <p className='class-sm8'>Cancelled</p>
                    </div>
                  </div>
                  <div className='w-1/2 flex flex-col gap-5 h-full justify-start items-end px-10 py-7 border-s-[1px] border-dashed border-[#C4C4C4]'>
                    <div className='px-2 w-[320px]'>
                      <div className='flex items-center justify-between mb-3'>
                        <p className='class-sm8 twelve-color'>7 X Idli 2 nos</p>
                        <p className='class-sm8 twelve-color'>₹230</p>
                      </div>
                      <div className='flex items-center justify-between mb-3'>
                        <p className='class-sm8 twelve-color'>8 X 1 Medu Vada</p>
                        <p className='class-sm8 twelve-color'>₹110</p>
                      </div>
                      <div className='flex items-center justify-between'>
                        <p className='class-sm8 twelve-color'>1 X 1 Plain Dosa</p>
                        <p className='class-sm8 twelve-color'>₹50</p>
                      </div>
                    </div>
                    <div className='flex items-center justify-between px-2 w-[320px]'>
                      <p className='class-sm8 twelve-color'>Total amount</p>
                      <p className='class-sm8 twelve-color'>₹390</p>
                    </div>
                    <Button variant='gst4' size='lg' className='class-sm7 h-10 w-[320px]'>Order Cancelled</Button>
                  </div>
                </div>
              )
            })}
          </div>}
      </div>
    </RestaurantWrapper>
  )
}

export default OrderHistory
