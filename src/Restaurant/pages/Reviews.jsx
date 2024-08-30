import React from 'react'
import RestaurantWrapper from '../components/restaurantWrapper/RestaurantWrapper'
import ReviewImg from '../../assets/5410322-removebg-preview 1.png'
import { IoSearchOutline } from 'react-icons/io5'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { HiOutlineAdjustmentsHorizontal } from 'react-icons/hi2'
import { RxQuestionMarkCircled } from "react-icons/rx";

const Reviews = () => {
  return (
    <RestaurantWrapper>
      <div>
        <div className='bg-[#FFFFFF] flex justify-between items-center px-10 py-4'>
          <div>
            <h1 className='five-color class-base2'>Customer Reviews</h1>
          </div>
          <div className='flex justify-center items-center gap-3'>
            <Button variant="outline" className="flex justify-center items-center gap-2 third-color class-sm1">Latest</Button>
            <Button variant="outline" className="flex justify-center items-center gap-2 third-color class-sm1">Detailed reviews</Button>
            <Button variant="outline" className="flex justify-center items-center gap-2 third-color class-sm1"><HiOutlineAdjustmentsHorizontal className='text-[22px]' /><span>Filter</span></Button>
            <Button variant="outline" className="flex justify-center items-center gap-2 third-color class-sm1"><RxQuestionMarkCircled className='text-[22px]' /><span>FAQs</span></Button>
          </div>

        </div>
        <div className='w-full h-[700px] bg-[#E7EBEF66] flex justify-center gap-2 px-6 pt-4 pb-2'>
          <div className='w-[40%]  rounded-s-[7px] px-3'>
            <div className='w-full flex items-center'>
              <IoSearchOutline className='-mr-6 z-10' />
              <Input type="search" placeholder="Search" className="pl-8 secondry-color class-sm2" />
            </div>
          </div>
          <div className=' w-[60%] bg-[#FFFFFF] border-s-[2px] flex flex-col items-center justify-center gap-8'>
            <img src={ReviewImg} alt="review-img" className='w-[200px] h-[192px]' />
            <p className='third-color class-lg5'>No reviews available.</p>
          </div>
        </div>
      </div>
    </RestaurantWrapper>
  )
}

export default Reviews
