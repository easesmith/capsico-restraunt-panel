import React, { useCallback, useEffect, useState } from 'react'
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
import useGetApiReq from '@/hooks/useGetApiReq'
import { PaginationComp } from '../components/PaginationComp'
import { format } from 'date-fns'
import DataNotFound from '../components/DataNotFound'
import Spinner from '../components/Spinner'

const Reviews = () => {
  const [selectedDateRange, setSelectedDateRange] = useState("");
  const [reviewsData, setReviewsData] = useState([])
  const [searchQurey, setSearchQurey] = useState('')
  const { res, fetchData, isLoading } = useGetApiReq();
  const [page, setPage] = useState(1);
  const [pageCount, setPageCount] = useState(2);
  const [totalCount, setTotalCount] = useState(0);

  const handleSelectChange = (value) => {
    setSelectedDateRange(value);
  };

  const getReviews = useCallback(() => {
    fetchData(`/restaurant/get-reviews?page=${page}`);
  }, [page])

  useEffect(() => {
    getReviews();
  }, [page])

  // console.log("orderStatus",orderStatus);


  useEffect(() => {
    if (res?.status === 200 || res?.status === 201) {
      console.log("reviews response", res);
      const { pagination, ratings } = res?.data?.data || {};
      setReviewsData(ratings);
      if (pagination) {
        setPage(pagination?.currentPage)
        setPageCount(pagination?.totalPages)
        setTotalCount(pagination?.totalReviews)
      }
    }
  }, [res])

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
              <Input type="search" value={searchQurey} onChange={(e) => { setSearchQurey(e.target.value); console.log(e.target.value) }
              } placeholder="Search" className="pl-8 secondry-color class-sm2" />
            </div>

            {reviewsData.length === 0 && isLoading &&
              <Spinner />
            }

            {reviewsData.length === 0 && !isLoading &&
              <DataNotFound name="Reviews" />
            }

            {reviewsData.length > 0 &&
              reviewsData.map((review, i) => {
                return (
                  <div key={i} className='bg-[#FFFFFF] rounded-lg p-6 flex flex-col gap-4 -ml-2 mr-2 mt-4'>
                    <div className='flex items-center gap-3'>
                      <img src={review?.user?.image} alt="" className='cursor-pointer w-10 h-10 rounded-full object-cover' />
                      <div className='flex flex-col justify-center'>
                        <h5 className='five-color class-base4 -mb-1'>{review?.user?.name}</h5>
                        <ReactStars edit={false} value={review?.rating} count={5} color2={'#E0B936'} />
                      </div>
                    </div>
                    <p className='twelve-color class-sm2'>{review?.description}</p>
                    <p className='eighteen-color class-sm2'>{review?.createdAt && format(new Date(review.createdAt), "MMMM d, yyyy")}</p>
                  </div>
                )
              })
            }

            <div className='mt-4'>
              <PaginationComp
                page={page}
                pageCount={pageCount}
                setPage={setPage}
                totalCount={totalCount}
              />
            </div>
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
