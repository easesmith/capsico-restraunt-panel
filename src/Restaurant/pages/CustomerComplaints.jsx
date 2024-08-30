import React from 'react'
import RestaurantWrapper from '../components/restaurantWrapper/RestaurantWrapper'
import { Button } from '@/components/ui/button'
import CusmoterImg from '../../assets/Layer_1.png'

const CustomerComplaints = () => {
  return (
    <RestaurantWrapper>
      <div>
        <div className='bg-[#D9F1FD66] flex justify-between items-center px-10 py-4'>
          <h1 className='five-color class-base2'>Customer Complaints</h1>
          <Button variant='outline' className="nine-color class-sm1">View on Capsico</Button>
        </div>
        <div className='w-full h-[700px] bg-[#E7EBEF66] flex justify-center px-6 pt-4 pb-2'>
          <div className='flex flex-col justify-center items-center w-full bg-[#FFFFFF] border-[2px] rounded-[7px]'>
            <img src={CusmoterImg} alt="burger-img" className='w-[192px] h-[192px]' />
            <p className='seven-color class-xl1'>No issues reported. Well done!</p>
          </div>
        </div>
      </div>
    </RestaurantWrapper>
  )
}

export default CustomerComplaints
