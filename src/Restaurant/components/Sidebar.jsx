import React from 'react'
import OrderImg from '../../assets/dish-01.png'
import Order2Img from '../../assets/dish-02.png'
import MenuImg from '../../assets/menu-restaurant.png'
import Menu2Img from '../../assets/menu-restaurant.png'
import OrderHistoryImg from '../../assets/restaurant-02.png'
import OrderHistory2Img from '../../assets/restaurant-03.png'
import OffersImg from '../../assets/discount.png'
import Offers2Img from '../../assets/discount.png'
import PayoutImg from '../../assets/payment-02.png'
import Payout2Img from '../../assets/payment-02.png'
import ReportingImg from '../../assets/scooter-01.png'
import Reporting2Img from '../../assets/scooter-02.png'
import HelpCenterImg from '../../assets/help-circle.png'
import HelpCenter2Img from '../../assets/help-circle.png'
import OutletInfoImg from '../../assets/115799_shop_icon 1.png'
import OutletInfo2Img from '../../assets/115799_shop_icon 1.png'
import ComplaintsImg from '../../assets/profile.png'
import Complaints2Img from '../../assets/profile1.png'
import ReviewsImg from '../../assets/information-circle.png'
import Reviews2Img from '../../assets/information-circle1.png'
import LearningImg from '../../assets/online-learning-01.png'
import Learning2Img from '../../assets/online-learning-01.png'

import { Link, useLocation } from 'react-router-dom'

const Sidebar = () => {

    const { pathname } = useLocation()

    const data = [
        {
            url: "/restaurant/orders",
            clickBeforeImg: OrderImg,
            clickAfterImg: Order2Img,
            title: "Orders"
        },
        {
            url: "/restaurant/order-menu",
            clickBeforeImg: MenuImg,
            clickAfterImg: Menu2Img,
            title: "Menu"
        },
        {
            url: "/restaurant/order-history",
            clickBeforeImg: OrderHistoryImg,
            clickAfterImg: OrderHistory2Img,
            title: "Order History"
        },
        {
            url: "/restaurant/offers",
            clickBeforeImg: OffersImg,
            clickAfterImg: OffersImg,
            title: "offers"
        },
        {
            url: "/restaurant/payout",
            clickBeforeImg: PayoutImg,
            clickAfterImg: Payout2Img,
            title: "Payout"
        },
        {
            url: "/restaurant/reporting",
            clickBeforeImg: ReportingImg,
            clickAfterImg: Reporting2Img,
            title: "Reporting"
        },
        {
            url: "/restaurant/help-center",
            clickBeforeImg: HelpCenterImg,
            clickAfterImg: HelpCenter2Img,
            title: "Help Center"
        },
        {
            url: "/restaurant/outlet-info",
            clickBeforeImg: OutletInfoImg,
            clickAfterImg: OutletInfo2Img,
            title: "Outlet Info"
        },
        {
            url: "/restaurant/customer-complaint",
            clickBeforeImg: ComplaintsImg,
            clickAfterImg: Complaints2Img,
            title: "Customer Complaint"
        },
        {
            url: "/restaurant/reviews",
            clickBeforeImg: ReviewsImg,
            clickAfterImg: Reviews2Img,
            title: "Reviews"
        },
        {
            url: "/restaurant/learning-hub",
            clickBeforeImg: LearningImg,
            clickAfterImg: Learning2Img,
            title: "Learning Hub"
        },
        {
            url: "/restaurant/items",
            clickBeforeImg: OrderImg,
            clickAfterImg: Order2Img,
            title: "Items"
        },
        {
            url: "/restaurant/gst-declaration",
            clickBeforeImg: OrderHistoryImg,
            clickAfterImg: OrderHistory2Img,
            title: "Gst Declaration"
        },
        {
            url: "/restaurant/charges",
            clickBeforeImg: OffersImg,
            clickAfterImg: Offers2Img,
            title: "Charges"
        },
    ]

    return (
        <>
            <section className=' sticky top-[105px] w-[280px] h-[calc(100vh-105px)] overflow-y-auto overflow-x-visible'>
                <div className='flex flex-col gap-4 bg-[#FFFFFF] border-[1px] border-[#E7EBEF] px-5 py-16'>
                    {data.map((e, i) => {
                        return (
                            <Link key={i} to={e.url} className={`flex justify-start items-center gap-[14px] h-[52px] p-[14px] cursor-pointer group hover:bg-[#F3F3FC] ${pathname.includes(e.url) ? 'primary-color bg-[#F3F3FC]' : 'text-[red]'}`}>
                                <img src={pathname.includes(e.url) ? e.clickAfterImg : e.clickBeforeImg} alt="" className='w-[24px] h-[24px]' />
                                <span className={`${pathname.includes(e.url) ? 'primary-color' : 'text-[#637D92]'} text-[16.8px] font-normal font-inter group-hover:primary-color`}>{e.title}</span>
                            </Link>
                        )
                    })}
                </div>
            </section>
        </>
    )
}

export default Sidebar
