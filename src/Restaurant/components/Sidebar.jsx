import React from 'react'
import OrderImg from '../../assets/dish-01.png'
import MenuImg from '../../assets/menu-restaurant.png'
import OrderHistoryImg from '../../assets/restaurant-02.png'
import OrderHistory2Img from '../../assets/restaurant-03.png'
import OffersImg from '../../assets/discount.png'
import PayoutImg from '../../assets/payment-02.png'
import ReportingImg from '../../assets/scooter-01.png'
import Reporting2Img from '../../assets/scooter-02.png'
import HelpCenterImg from '../../assets/help-circle.png'
import OutletInfoImg from '../../assets/115799_shop_icon 1.png'
import ComplaintsImg from '../../assets/profile.png'
import ReviewsImg from '../../assets/information 1.png'
import LearningImg from '../../assets/online-learning-01.png'

import { Link, useLocation } from 'react-router-dom'

const Sidebar = () => {

    const { pathname } = useLocation()

    return (
        <section className=' sticky top-[105px] w-[280px] h-[calc(100vh-105px)] overflow-y-auto overflow-x-visible'>
            <div className='flex flex-col gap-4 bg-[#FFFFFF] border-[1px] border-[#E7EBEF] px-5 py-16'>
                <Link to="/restaurant/order" className={`flex justify-start items-center gap-[14px] h-[52px] p-[14px] cursor-pointer group hover:bg-[#F3F3FC] ${pathname.includes("/restaurant/order") ? 'text-[#1AA6F1] bg-[#F3F3FC]' : 'text-[red]'}`}>
                    <img src={OrderImg} alt="" className='w-[24px] h-[24px]' />
                    <span className={`text-[#637D92] text-[16.8px] font-normal font-inter group-hover:text-[#1AA6F1]`}>Orders</span>
                </Link>
                <Link to="/restaurant/order-menu" className={`flex justify-start items-center gap-[14px] h-[52px] p-[14px] cursor-pointer group hover:bg-[#F3F3FC] ${pathname.includes("/restaurant/order-menu") ? 'text-[#1AA6F1] bg-[#F3F3FC]' : 'text-[red]'}`}>
                    <img src={MenuImg} alt="" className='w-[24px] h-[24px]' />
                    <span className={`${pathname.includes("/restaurant/order-menu") ? 'text-[#637D92] bg-[#F3F3FC]' : 'text-[#637D92] group-hover:text-[#1AA6F1]'} text-[16.8px] font-normal font-inter `}>Menu</span>
                </Link>
                <Link to="/restaurant/order-history" className={`flex justify-start items-center gap-[14px] h-[52px] p-[14px] cursor-pointer group hover:bg-[#F3F3FC] ${pathname.includes("/restaurant/order-history") ? 'text-[#1AA6F1] bg-[#F3F3FC]' : 'text-[red]'}`}>
                    <img src={pathname.includes("/restaurant/order-history") ? OrderHistory2Img : OrderHistoryImg} alt="" className='w-[24px] h-[24px]' />
                    <span className={`${pathname.includes("/restaurant/order-history") ? 'text-[#1AA6F1]' : 'text-[#637D92]'} text-[16.8px] font-normal font-inter group-hover:text-[#1AA6F1]`}>Order history</span>
                </Link>
                <Link to="/restaurant/offers" className={`flex justify-start items-center gap-[14px] h-[52px] p-[14px] cursor-pointer group hover:bg-[#F3F3FC] ${pathname.includes("/restaurant/offers") ? 'text-[#1AA6F1] bg-[#F3F3FC]' : 'text-[red]'}`}>
                    <img src={OffersImg} alt="" className='w-[24px] h-[24px]' />
                    <span className={`text-[#637D92] text-[16.8px] font-normal font-inter ${pathname.includes("/restaurant/offers") ? 'text-[#637D92] bg-[#F3F3FC]' : 'text-[#637D92] group-hover:text-[#1AA6F1]'}`}>Offers</span>
                </Link>
                <Link to="/restaurant/payout" className={`flex justify-start items-center gap-[14px] h-[52px] p-[14px] cursor-pointer group hover:bg-[#F3F3FC] ${pathname.includes("/restaurant/payout") ? 'text-[#637D92] bg-[#F3F3FC]' : 'text-[#637D92]'}`}>
                    <img src={PayoutImg} alt="" className='w-[24px] h-[24px]' />
                    <span className={`text-[#637D92] text-[16.8px] font-normal font-inter ${pathname.includes("/restaurant/payout") ? 'text-[#637D92] bg-[#F3F3FC]' : 'text-[#637D92] group-hover:text-[#1AA6F1]'}  `}>Payout</span>
                </Link>
                <Link to="/restaurant/reporting" className={`flex justify-start items-center gap-[14px] h-[52px] p-[14px] cursor-pointer group hover:bg-[#F3F3FC] ${pathname.includes("/restaurant/reporting") ? 'text-[#1AA6F1] bg-[#F3F3FC]' : 'text-[red]'}`}>
                    <img src={pathname.includes("/restaurant/reporting")?Reporting2Img:ReportingImg}alt="" className='w-[24px] h-[24px]' />
                    <span className={`${pathname.includes("/restaurant/reporting") ? 'text-[#1AA6F1]' : 'text-[#637D92]'} text-[16.8px] font-normal font-inter group-hover:text-[#1AA6F1]`}>Reporting</span>
                </Link>
                <Link to="/restaurant/help-center" className={`flex justify-start items-center gap-[14px] h-[52px] p-[14px] cursor-pointer group hover:bg-[#F3F3FC] ${pathname.includes("/restaurant/help-center") ? 'text-[#1AA6F1] bg-[#F3F3FC]' : 'text-[red]'}`}>
                    <img src={HelpCenterImg} alt="" className='w-[24px] h-[24px]' />
                    <span className='text-[#637D92] text-[16.8px] font-normal font-inter group-hover:text-[#1AA6F1]'>Help Center</span>
                </Link>
                <Link to="/restaurant/outlet-info" className={`flex justify-start items-center gap-[14px] h-[52px] p-[14px] cursor-pointer group hover:bg-[#F3F3FC] ${pathname.includes("/restaurant/outlet-info") ? 'text-[#1AA6F1] bg-[#F3F3FC]' : 'text-[red]'}`}>
                    <img src={OutletInfoImg} alt="" className='w-[24px] h-[24px]' />
                    <span className={`text-[#637D92] text-[16.8px] font-normal font-inter ${pathname.includes("/restaurant/outlet-info") ? 'text-[#637D92] bg-[#F3F3FC]' : 'text-[#637D92] group-hover:text-[#1AA6F1]'}`}>Outlet Info</span>
                </Link>
                <Link to="/restaurant/complaint" className={`flex justify-start items-center gap-[14px] h-[52px] p-[14px] cursor-pointer group hover:bg-[#F3F3FC] ${pathname.includes("/restaurant/complaint") ? 'text-[#1AA6F1] bg-[#F3F3FC]' : 'text-[red]'}`}>
                    <img src={ComplaintsImg} alt="" className='w-[24px] h-[24px]' />
                    <span className='text-[#637D92] text-[16.8px] font-normal font-inter group-hover:text-[#1AA6F1]'>Customer complaints</span>
                </Link>
                <Link to="/restaurant/review" className={`flex justify-start items-center gap-[14px] h-[52px] p-[14px] cursor-pointer group hover:bg-[#F3F3FC] ${pathname.includes("/restaurant/review") ? 'text-[#1AA6F1] bg-[#F3F3FC]' : 'text-[red]'}`}>
                    <img src={ReviewsImg} alt="" className='w-[24px] h-[24px]' />
                    <span className='text-[#637D92] text-[16.8px] font-normal font-inter group-hover:text-[#1AA6F1]'>Reviews</span>
                </Link>
                <Link to="/restaurant/learning" className={`flex justify-start items-center gap-[14px] h-[52px] p-[14px] cursor-pointer group hover:bg-[#F3F3FC] ${pathname.includes("/restaurant/learning") ? 'text-[#1AA6F1] bg-[#F3F3FC]' : 'text-[red]'}`}>
                    <img src={LearningImg} alt="" className='w-[24px] h-[24px]' />
                    <span className='text-[#637D92] text-[16.8px] font-normal font-inter group-hover:text-[#1AA6F1]'>Learning Hub</span>
                </Link>
            </div>
        </section>
    )
}

export default Sidebar
