import React from 'react'
import Header from '../Header'
import Sidebar from '../Sidebar'

const RestaurantWrapper = ({ children }) => {
    return (
        <div >
            <Header />
            <div className="flex">
                <Sidebar />
                <main className="w-full">
                    {children}
                </main>
            </div>
        </div>
    )
}

export default RestaurantWrapper
