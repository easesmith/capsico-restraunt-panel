import React from 'react'
import RestaurantWrapper from '../components/restaurantWrapper/RestaurantWrapper'
import OutletImg from "../../assets/outlet.png"
import CloseCartImg from '../../assets/Mask group.png'

const Order = () => {
  return (
    <RestaurantWrapper>
      <>
        <div className='w-full h-[456px] flex flex-col justify-between items-center'>
          <div className='flex justify-center relative w-[577px]'>
            <img src={OutletImg} alt="" />
            <img src={CloseCartImg} alt="" className=' absolute bottom-[-4%] right-[-7%]' />
          </div>
          <div className=' w-[521px] max-w-[521px] flex flex-col items-center gap-7'>
            <span className='text-[#637D92] text-2xl text-center font-medium font-inter'>You are offline</span>
            <p className='text-[#000000] text-2xl text-center font-normal font-inter'>Click <span className='text-[red] font-semibold'>Help center</span> for more Information.</p>
          </div>
        </div>
      </>
    </RestaurantWrapper>
  )
}

export default Order
