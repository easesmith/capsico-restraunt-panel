import React from 'react'
import RestaurantWrapper from '../components/restaurantWrapper/RestaurantWrapper'

const GSTDeclaration = () => {
  return (
    <RestaurantWrapper>
      <h1 className='bg-[#D9D9D933] class-2xl1 primary-color text-center p-[10px]'>Add GST Info</h1>
      <div className=' flex flex-col items-start gap-4 px-6 py-5'>
        <h2 className='five-color class-2xl1'>Is a 5% GST applicable to all your menu items as a restaurant?</h2>
        <div className=' flex items-center gap-10'>
          <div className=' flex items-center gap-2'>
            <input type="radio" name="gst" id="" className='thirteen-color w-[20px] h-[20px]' />
            <span className='twelve-color class-2xl1'>Yes</span>
          </div>
          <div className=' flex items-center gap-2'>
            <input type="radio" name="gst" id="" className='thirteen-color w-[20px] h-[20px]' />
            <span className='twelve-color class-2xl1'>No</span>
          </div>
        </div>
        <button className='five-color class-2xl1 border-[1px] border-[#C2CDD6] px-9 py-1'>Update</button>
      </div>
    </RestaurantWrapper>
  )
}

export default GSTDeclaration
