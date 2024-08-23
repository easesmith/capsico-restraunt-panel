import React from 'react'
import Header from '../Header'
import Sidebar from '../Sidebar'

const RestaurantWrapper = ({ children }) => {
    return (
        <div >
            <Header />
            <div className=" flex">
                <Sidebar />
                <main className="p-4">
                    {children}
                </main>
            </div>
        </div>
    )
}

export default RestaurantWrapper
