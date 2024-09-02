import React, { useState } from 'react'
import RestaurantWrapper from '../components/restaurantWrapper/RestaurantWrapper'
import { Button } from '@/components/ui/button'

const GSTDeclaration = () => {
  const[isGst,setIsGst] = useState('')

  const IsGstHandle = (e) =>{
    setIsGst(e.target.value)
    console.log(e.target.value)
  }

  return (
    <RestaurantWrapper>
      <h1 className='bg-[#D9D9D933] class-2xl1 primary-color text-center p-[10px]'>Add GST Info</h1>
      <div className=' flex flex-col items-start gap-3 px-6 py-5'>
        <h2 className='five-color class-lg7'>Is a 5% GST applicable to all your menu items as a restaurant?</h2>
        <div className=' flex items-center gap-10'>
          <div className=' flex items-center gap-2'>
            <input type="radio" name="gst" id="" value="no" checked={isGst === 'no'} onChange={IsGstHandle} className='thirteen-color w-4 h-4 cursor-pointer' />
            <span className='twelve-color class-lg7'>Yes</span>
          </div>
          <div className=' flex items-center gap-2'>
            <input type="radio" name="gst" id="" value="yes" checked={isGst === 'yes'} onChange={IsGstHandle} className='thirteen-color w-4 h-4 cursor-pointer' />
            <span className='twelve-color class-lg7'>No</span>
          </div>
        </div>
        <Button variant='gst' size='gstSize'>Update</Button>
      </div>
    </RestaurantWrapper>
  )
}

export default GSTDeclaration
