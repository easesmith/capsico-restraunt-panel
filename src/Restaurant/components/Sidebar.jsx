import React from 'react'
import OrderImg from '../../assets/dish-01.png'

const Sidebar = () => {
    return (
        <section className=''>
            <div className='flex flex-col gap-4 w-[280px] bg-[#FFFFFF] border-[1px] border-[#E7EBEF] px-5 py-16'>
                <div className='flex justify-start items-center gap-[14px] h-[52px] bg-[#F3F3FC] p-[14px] cursor-pointer hover:bg-[#F3F3FC]'>
                    <img src={OrderImg} alt="" className='w-[24px] h-[24px]' />
                    <span className='text-[#1AA6F1] text-[16.8px] font-normal font-inter'>Orders</span>
                </div>
                <div className='flex justify-start items-center gap-[14px] h-[52px] p-[14px] cursor-pointer group hover:bg-[#F3F3FC]'>
                    <img src={OrderImg} alt="" className='w-[24px] h-[24px]' />
                    <span className='text-[#637D92] text-[16.8px] font-normal font-inter group-hover:text-[#1AA6F1]'>Menu</span>
                </div>
                <div className='flex justify-start items-center gap-[14px] h-[52px] p-[14px] cursor-pointer group hover:bg-[#F3F3FC]'>
                    <img src={OrderImg} alt="" className='w-[24px] h-[24px]' />
                    <span className='text-[#637D92] text-[16.8px] font-normal font-inter group-hover:text-[#1AA6F1]'>Order history</span>
                </div>
                <div className='flex justify-start items-center gap-[14px] h-[52px] p-[14px] cursor-pointer group hover:bg-[#F3F3FC]'>
                    <img src={OrderImg} alt="" className='w-[24px] h-[24px]' />
                    <span className='text-[#637D92] text-[16.8px] font-normal font-inter group-hover:text-[#1AA6F1]'>Offers</span>
                </div>
                <div className='flex justify-start items-center gap-[14px] h-[52px] p-[14px] cursor-pointer group hover:bg-[#F3F3FC]'>
                    <img src={OrderImg} alt="" className='w-[24px] h-[24px]' />
                    <span className='text-[#637D92] text-[16.8px] font-normal font-inter group-hover:text-[#1AA6F1]'>Payout</span>
                </div>
                <div className='flex justify-start items-center gap-[14px] h-[52px] p-[14px] cursor-pointer group hover:bg-[#F3F3FC]'>
                    <img src={OrderImg} alt="" className='w-[24px] h-[24px]' />
                    <span className='text-[#637D92] text-[16.8px] font-normal font-inter group-hover:text-[#1AA6F1]'>Reporting</span>
                </div>
                <div className='flex justify-start items-center gap-[14px] h-[52px] p-[14px] cursor-pointer group hover:bg-[#F3F3FC]'>
                    <img src={OrderImg} alt="" className='w-[24px] h-[24px]' />
                    <span className='text-[#637D92] text-[16.8px] font-normal font-inter group-hover:text-[#1AA6F1]'>Help Center</span>
                </div>
                <div className='flex justify-start items-center gap-[14px] h-[52px] p-[14px] cursor-pointer group hover:bg-[#F3F3FC]'>
                    <img src={OrderImg} alt="" className='w-[24px] h-[24px]' />
                    <span className='text-[#637D92] text-[16.8px] font-normal font-inter group-hover:text-[#1AA6F1]'>Outlet Info</span>
                </div>
                <div className='flex justify-start items-center gap-[14px] h-[52px] p-[14px] cursor-pointer group hover:bg-[#F3F3FC]'>
                    <img src={OrderImg} alt="" className='w-[24px] h-[24px]' />
                    <span className='text-[#637D92] text-[16.8px] font-normal font-inter group-hover:text-[#1AA6F1]'>Customer complaints</span>
                </div>
                <div className='flex justify-start items-center gap-[14px] h-[52px] p-[14px] cursor-pointer group hover:bg-[#F3F3FC]'>
                    <img src={OrderImg} alt="" className='w-[24px] h-[24px]' />
                    <span className='text-[#637D92] text-[16.8px] font-normal font-inter group-hover:text-[#1AA6F1]'>Reviews</span>
                </div>
                <div className='flex justify-start items-center gap-[14px] h-[52px] p-[14px] cursor-pointer group hover:bg-[#F3F3FC]'>
                    <img src={OrderImg} alt="" className='w-[24px] h-[24px]' />
                    <span className='text-[#637D92] text-[16.8px] font-normal font-inter group-hover:text-[#1AA6F1]'>Learning Hub</span>
                </div>
            </div>
        </section>
    )
}

export default Sidebar
