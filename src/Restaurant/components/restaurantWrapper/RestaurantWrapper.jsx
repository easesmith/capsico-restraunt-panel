import React from 'react'
import Header from '../Header'
import Sidebar from '../Sidebar'

const RestaurantWrapper = ({ children }) => {
    return (
        <div>
            <Header />
            <div className=" flex">
                <Sidebar />
                <main className=" w-[100%] flex justify-center items-center p-4">
                    {children}
                </main>
            </div>
        </div>
    )
}

export default RestaurantWrapper
