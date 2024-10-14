import React, { useState } from 'react'
import RestaurantWrapper from '../components/restaurantWrapper/RestaurantWrapper'
import ReviewImg from '../../assets/5410322-removebg-preview 1.png'
import { IoSearchOutline } from 'react-icons/io5'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { HiOutlineAdjustmentsHorizontal } from 'react-icons/hi2'
import { RxQuestionMarkCircled } from "react-icons/rx";
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { LuCalendar } from 'react-icons/lu'
import ProfileImg from '../../assets/profile123.png'
import ReactStars from 'react-stars'

const Reviews = () => {

  const data = [{
    image: ProfileImg,
    name: 'Ervin Smitham',
    rating: 4,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim  veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea  commodo consequat.',
    date: 'July 13, 2023'
  }, {
    image: ProfileImg,
    name: 'Amar',
    rating: 3,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim  veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea  commodo consequat.',
    date: 'July 13, 2023'
  }]

  const [selectedDateRange, setSelectedDateRange] = useState("");
  const [reviewsData, setReviewsData] = useState(data)
  const [searchQurey, setSearchQurey] = useState('')

  const handleSelectChange = (value) => {
    setSelectedDateRange(value);
  };

  return (
    <RestaurantWrapper>
      <div>
        <div className='bg-[#FFFFFF] flex justify-between items-center px-10 py-4'>
          <div>
            <h1 className='five-color class-base1'>Customer Reviews</h1>
          </div>
          <div className='flex justify-center items-center gap-3'>
            <Button variant="outline" className="flex justify-center items-center gap-2 third-color class-sm1">Latest</Button>
            <Button variant="outline" className="flex justify-center items-center gap-2 third-color class-sm1">Detailed reviews</Button>
            <Select onValueChange={handleSelectChange}>
              <SelectTrigger className=" third-color class-sm1">
                <HiOutlineAdjustmentsHorizontal className='class-lg2 mr-2' />
                <SelectValue placeholder="Desi Platters, Khurram N" value={selectedDateRange} />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup className=' third-color class-base1'>
                  <SelectItem value="16">Restaurant Patner Branch</SelectItem>
                  <SelectItem value="17">Branch 1</SelectItem>
                  <SelectItem value="18">Branch 2</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
            <Button variant="outline" className="flex justify-center items-center gap-2 third-color class-sm1"><HiOutlineAdjustmentsHorizontal className='text-[22px]' /><span>Filter</span></Button>
            <Button variant="outline" className="flex justify-center items-center gap-2 third-color class-sm1"><RxQuestionMarkCircled className='text-[22px]' /><span>FAQs</span></Button>
          </div>
        </div>
        <div className='w-full h-full bg-[#E7EBEF66] flex justify-center gap-2 px-6 pt-4 pb-2'>
          <div className='w-[40%]  rounded-s-[7px] px-3 pb-20'>
            <div className='w-full flex items-center'>
              <IoSearchOutline className='-mr-6 z-10 eleven-color' />
              <Input type="search" value={searchQurey} onChange={(e)=> {setSearchQurey(e.target.value); console.log(e.target.value)}
              } placeholder="Search" className="pl-8 secondry-color class-sm2" />
            </div>
            {reviewsData.length > 0 &&
              reviewsData.filter(item => item.name.toLowerCase().includes(searchQurey.toLowerCase())).map((e, i) => {
                return (
                  <div key={i} className='bg-[#FFFFFF] rounded-lg p-6 flex flex-col gap-4 -ml-2 mr-2 mt-4'>
                    <div className='flex items-center gap-3'>
                      <img src={e.image} alt="" className='cursor-pointer' />
                      <div className='flex flex-col justify-center'>
                        <h5 className='five-color class-base4 -mb-1'>{e.name}</h5>
                        <ReactStars edit={false} value={e.rating} count={5} color2={'#E0B936'} />
                      </div>
                    </div>
                    <p className='twelve-color class-sm2'>{e.description}</p>
                    <p className='eighteen-color class-sm2'>{e.date}</p>
                  </div>
                )
              })
            }
          </div>
          <div className='w-[60%] bg-[#FFFFFF] border-s-[2px] flex flex-col items-center justify-center gap-8'>
            {reviewsData === '' &&
              <>
                <img src={ReviewImg} alt="review-img" className='w-[200px] h-[192px]' />
                <p className='third-color class-lg5'>No reviews available.</p>
              </>
            }
          </div>
        </div>
      </div>
    </RestaurantWrapper>
  )
}

export default Reviews
