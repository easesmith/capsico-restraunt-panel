import React from 'react'
import RestaurantWrapper from '../components/restaurantWrapper/RestaurantWrapper'
import { Input } from '@/components/ui/input'
import { IoSearchOutline } from "react-icons/io5";


const OrderHistory = () => {
  return (
    <RestaurantWrapper>
      <section className='w-full h-full'>
        <div>
          <div>
            <div className='flex items-center'>
              <IoSearchOutline className='' />
              <Input type="search" placeholder="Enter Order ID to search" className="pl-8" />
            </div>
          </div>
          <div>

          </div>
        </div>
      </section>
    </RestaurantWrapper>
  )
}

export default OrderHistory
