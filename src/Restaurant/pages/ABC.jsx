import React from 'react'
import RestaurantWrapper from '../components/restaurantWrapper/RestaurantWrapper'
// import {
//     Select,
//     SelectContent,
//     SelectItem,
//     SelectTrigger,
//     SelectValue,
// } from "@/components/ui/select"
// import { Input } from "@/components/ui/input"
// import { IoSearchOutline } from "react-icons/io5";
import OutletImg from "../../assets/outlet.png"
import CloseCartImg from '../../assets/Mask group.png'

const ABC = () => {
    return (
        <RestaurantWrapper>
            {/* <div className='w-[100%]'> */}
            {/* <div className=' flex items-center'>
                    <div>
                        <h6 className='text-[#000000] text-[16.8px] font-normal font-inter'>Order History</h6>
                    </div>
                    <div>
                        <Input type="search" placeholder="Search by order ID" />
                        <IoSearchOutline/>
                    </div>
                    <div>
                        <Select>
                            <SelectTrigger className="w-[180px]">
                                <SelectValue placeholder="Theme" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="light">Light</SelectItem>
                                <SelectItem value="dark">Dark</SelectItem>
                                <SelectItem value="system">System</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                </div> */}
            <div className='w-full flex flex-col justify-between items-center'>
                <div className=' relative w-[577px]'>
                    <img src={OutletImg} alt="" />
                    <img src={CloseCartImg} alt="" className=' absolute bottom-[-3%] right-[0%]' />
                </div>
                <div className=' w-[521px] max-w-[521px] flex flex-col items-center gap-7'>
                    <span className='text-[#637D92] text-2xl text-center font-medium font-inter'>You are offline</span>
                    <p className='text-[#000000] text-2xl text-center font-normal font-inter'>Click <span className='text-[red] font-semibold'>Help center</span> for more Information.</p>
                </div>
            </div>
            {/* </div> */}
        </RestaurantWrapper>
    )
}

export default ABC
