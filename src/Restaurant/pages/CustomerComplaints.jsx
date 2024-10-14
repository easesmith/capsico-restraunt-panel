import React, { useState } from 'react'
import RestaurantWrapper from '../components/restaurantWrapper/RestaurantWrapper'
import { Button } from '@/components/ui/button'
import CusmoterImg from '../../assets/Layer_1.png'
import RupeesImg from '../../assets/Vector123.png'
import CustomerComplaintModel from '../components/customerComplaint/CustomerComplaintModel'

const CustomerComplaints = () => {

  const data = [{
    id: '37939 62820',
    date: '7:49 pm | 06 Jul',
    description: '1 X Paneer Butter Masala,  2 X 1 Butt...',
    price: '30',
    btn1: 'Resolved',
    btn2: 'Refund accepted, ₹ 144 given to customer',
    image:RupeesImg
  },
  {
    id: '37939 62820',
    date: '7:49 pm | 06 Jul',
    description: '1 X Paneer Butter Masala,  2 X 1 Butt...',
    price: '390',
    btn1: 'Resolved',
    btn2: 'Refund accepted, ₹ 144 given to customer',
    image:RupeesImg
  },
  {
    id: '37939 62820',
    date: '7:49 pm | 06 Jul',
    description: '1 X Paneer Butter Masala,  2 X 1 Butt...',
    price: '390',
    btn1: 'Resolved',
    btn2: 'Refund accepted, ₹ 144 given to customer',
    image:RupeesImg
  }]

  const [complaintsData, setcomplaintsData] = useState(data)
  return (
    <RestaurantWrapper>
      <div>
        <div className='bg-[#D9F1FD66] flex justify-between items-center px-10 py-4'>
          <h1 className='five-color class-base1'>Customer Complaints</h1>
          <Button variant='outline' className="nine-color class-sm1">View on Capsico</Button>
        </div>
        {complaintsData === '' ?
          <div className='w-full h-[700px] bg-[#E7EBEF66] flex justify-center px-6 pt-4 pb-2'>
            <div className='flex flex-col justify-center items-center w-full bg-[#FFFFFF] border-[2px] rounded-[7px]'>
              <img src={CusmoterImg} alt="burger-img" className='w-[192px] h-[192px]' />
              <p className='seven-color class-xl1'>No issues reported. Well done!</p>
            </div>
          </div> :
          <div className='flex flex-col gap-5 px-6 pt-4 pb-40'>
            {complaintsData.map((e, i) => {
              return (
                <div className='bg-[#FFFFFF] shadow-custom h-[169px] rounded-lg border-[1px] border-[#E9E9E9] flex flex-col gap-3 px-7 py-3'>
                  <div className='flex items-start justify-between'>
                    <div className='flex flex-col justify-start items-start gap-1'>
                      <p className='class-sm8 twelve-color'>ID:{e.id}</p>
                      <p className='class-sm8 sixteen-color'>{e.date}</p>
                    </div>
                    <button className='class-sm8 text-[#FFFFFF] bg-[#ADCB42] hover:bg-[#b4d148] border-[1px] border-[#ADCB42] rounded-lg px-3 h-7'>{e.btn1}</button>
                  </div>
                  <div className='flex justify-between items-center'>
                    <p className='class-sm8 sixteen-color'>{e.description}</p>
                    <p className='class-sm8 sixteen-color'>₹{e.price}</p>
                  </div>
                  <button className='class-base8 twelve-color bg-[#FFFFFF] hover:bg-[#f9f8f8] border-[1px] border-[#D3D3D3] rounded-lg py-3 px-8 flex justify-center items-center gap-2'><img src={e.image} alt="" />{e.btn2}</button>
                </div>
              )
            })}
          </div>
        }
      </div>
      <CustomerComplaintModel />
    </RestaurantWrapper>
  )
}

export default CustomerComplaints
