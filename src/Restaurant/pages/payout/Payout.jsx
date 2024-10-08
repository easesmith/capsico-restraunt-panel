import React, { useState } from 'react'
import RestaurantWrapper from '@/Restaurant/components/restaurantWrapper/RestaurantWrapper'
import { Button } from '@/components/ui/button';
import Taxes from './Taxes';
import Report from './Report';
import Invoice from './Invoice';

const Payouts = () => {
    return (
        <div className='bg-[#E7EBEF66] px-6'>
            <div className=' py-4'>
                <div className=' flex justify-between items-center'>
                    <h2 className=' seven-color class-xl1 mb-3'>Current cycle</h2>
                    <Button variant='capsico' className="class-base3 rounded-sm">Download</Button>
                </div>
                <p className=' seven-color class-sm1'>Your payouts follow a <span className='primary-color font-medium'>weekly</span> cycle. Earnings accumulated from Monday through Sunday are credited to your account on the subsequent Wednesday.</p>
            </div>
            <div className="bg-white rounded-lg shadow px-7 py-8  mx-auto">
                <div className="flex justify-between pb-12">
                    <div>
                        <h4 className="six-color class-base1 text-center mb-6">Time period</h4>
                        <p className="third-color class-base1 text-center">15 Jul - 21 Jul, 2024</p>
                    </div>
                    <div>
                        <h4 className="six-color class-base1 text-center mb-6">Orders</h4>
                        <p className="third-color class-base1 text-center">0</p>
                    </div>
                    <div>
                        <h4 className="six-color class-base1 text-center mb-6">Payout date</h4>
                        <p className="third-color class-base1 text-center">24 Jul, 2024</p>
                    </div>
                    <div>
                        <h4 className="six-color class-base1 text-center mb-6">Estimated amount</h4>
                        <p className="third-color class-base1 text-center">₹199.8</p>
                    </div>
                    <div>
                        <h4 className="six-color class-base1 text-center mb-6">Transactions</h4>
                        <p className="third-color class-base1 text-center">View</p>
                    </div>
                </div>
                <div className="flex justify-between border-y py-4">
                    <h4 className="seven-color class-base1">Total orders</h4>
                    <p className="seven-color class-base1">0</p>
                </div>
                <div className="flex justify-between border-y py-4">
                    <h4 className="seven-color class-base1">Customer Payable (A)</h4>
                    <p className="seven-color class-base1">₹0.00</p>
                </div>
                <div className="flex justify-between border-y py-4">
                    <h4 className="seven-color class-base1">Service fees & payment mechanism fees (B)
                    </h4>
                    <p className="seven-color class-base1">₹0.00</p>
                </div>
                <div className="flex justify-between border-y py-4">
                    <h4 className="seven-color class-base1">Government charges (C)
                    </h4>
                    <p className="seven-color class-base1">₹0.00</p>
                </div>
                <div className="flex justify-between border-y py-4">
                    <h4 className="seven-color class-base1">Other order level deductions (D)
                    </h4>
                    <p className="seven-color class-base1">₹0.00</p>
                </div>
                <div className="flex justify-between border-y py-4">
                    <h4 className="seven-color class-base1">Investments in growth services & miscellaneous deductions (E)
                    </h4>
                    <p className="seven-color class-base1">₹199.80</p>
                </div>
                <div className="flex justify-between border-y py-4">
                    <h4 className="seven-color class-base1">Investments in Hyperpure (F)
                    </h4>
                    <p className="seven-color class-base1">₹0.00</p>
                </div>
                <div className="flex justify-between border-y py-4">
                    <h4 className="seven-color class-base1">Total Additions (G)
                    </h4>
                    <p className="seven-color class-base1">₹0.00</p>
                </div>
                <div className="flex justify-between border-y py-4">
                    <h4 className="seven-color class-base1">Estimated net payout (ABC-D-E-F+G)</h4>
                    <p className="seven-color class-base1">₹199.80</p>
                </div>
            </div>
        </div>
    )
}


const Payout = () => {

    const [activeTab, setActiveTab] = useState("Payouts");

    const tabs = ["Payouts", "Invoices", "UTR Reports", "Taxes"];
    return (
        <RestaurantWrapper>
            <>
                <div className='bg-[#D9F1FD66]'>
                    <h1 className=' five-color class-base1 border-[1px] ps-6 py-6'>Payout</h1>
                </div>
                <div className="w-full">
                    <div className="flex justify-start gap-3 px-4 ">
                        {tabs.map((tab) => (
                            <button
                                key={tab}
                                className={`p-3 class-base2 focus:outline-none ${activeTab === tab
                                    ? "primary-color border-b-[3px] border-[#1AA6F1]"
                                    : "ten-color"
                                    }`}
                                onClick={() => setActiveTab(tab)}
                            >
                                {tab}
                            </button>
                        ))}
                    </div>
                </div>
                {

                }
                {activeTab === "Payouts" ?
                    <Payouts/>
                    :
                    <>
                        {activeTab === "Invoices" ?
                            <Invoice />
                            :
                            <>
                                {activeTab === "UTR Reports" ? <Report /> : <Taxes />}
                            </>}
                    </>
                    }

            </>
        </RestaurantWrapper>
    )
}

export default Payout
