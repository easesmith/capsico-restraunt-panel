import React from 'react'
import RestaurantWrapper from '../components/restaurantWrapper/RestaurantWrapper'
import { MdInfoOutline } from "react-icons/md";

const Charges = () => {

  return (
    <RestaurantWrapper>
      <h1 className='bg-[#D9D9D933] class-2xl1 primary-color text-center p-[10px]'>Charges</h1>
      <div className=' py-8 px-6'>
        <h2 className='five-color class-xl1'>Delivery Charges</h2>
        <div className=' flex justify-between mt-3'>
          <div className=' flex items-center gap-2'>
            <div className='class-base9 twelve-color'>Charges</div>
            <MdInfoOutline className='text-[20px] ten-color' />
          </div>
          <div className=' flex items-center gap-2'>
            <div className='class-base9 twelve-color'>Value</div>
            <MdInfoOutline className='text-[20px] ten-color' />
          </div>
          <div className=' flex items-center gap-2'>
            <div className='class-base9 twelve-color'>Combo</div>
            <MdInfoOutline className='text-[20px] ten-color' />
          </div>
          <div className=' flex items-center gap-2'>
            <div className='class-base9 twelve-color'>Application On</div>
            <MdInfoOutline className='text-[20px] ten-color' />
          </div>
          <div className=' flex items-center gap-2'>
            <div className='class-base9 twelve-color'>Taxes</div>
            <MdInfoOutline className='text-[20px] ten-color' />
          </div>
        </div>
      </div>

    </RestaurantWrapper>
  )
}

export default Charges
