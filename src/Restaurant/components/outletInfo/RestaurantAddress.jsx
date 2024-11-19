import React from 'react'
import { MdOutlineKeyboardArrowRight } from 'react-icons/md'

const RestaurantAddress = () => {
  return (
    <div className='px-4'>
      <div className={`py-[21px] mt-2 cursor-pointer flex justify-between items-center class-lg4 primary-color border-b-2`}>
        Select a choice to proceed
      </div>
      <div className={`py-[21px] cursor-pointer flex justify-between items-center class-sm2 ten-color border-b-2`}>
        <span>Modify Outlet Name</span>
        <MdOutlineKeyboardArrowRight className='text-2xl' />
      </div>
      <div className={`py-[21px] cursor-pointer flex justify-between items-center class-sm2 ten-color border-b-2`}>
        <span>Modify Outlet Address & Location</span>
        <MdOutlineKeyboardArrowRight className='text-2xl' />
      </div>
    </div>
  )
}

export default RestaurantAddress