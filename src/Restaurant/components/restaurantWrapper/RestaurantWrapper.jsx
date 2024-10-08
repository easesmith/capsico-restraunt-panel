import React from 'react'
import Header from '../Header'
import Sidebar from '../Sidebar'
import { useSelector } from 'react-redux'
import Toast from '../Toast'

const RestaurantWrapper = ({ children }) => {

    const isVisible = useSelector((state) => state.notification.isVisible)
    return (
        <div>
            <Header />
            <div className="flex ">
                <Sidebar />
                <main className=" w-[calc(100%-280px)] bg-[#E7EBEF66]">
                    {isVisible && <Toast />}
                    {children}
                </main>
            </div>
        </div>
    )
}

export default RestaurantWrapper
