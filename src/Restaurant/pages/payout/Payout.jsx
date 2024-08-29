import React, { useState } from 'react'
import RestaurantWrapper from '@/Restaurant/components/restaurantWrapper/RestaurantWrapper'
import TaxImg from '../../../assets/tax.png'

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
                    <div className="flex justify-start gap-3 px-4 py-3">
                        {tabs.map((tab) => (
                            <button
                                key={tab}
                                className={`p-[10px] class-base1 focus:outline-none ${activeTab === tab
                                    ? "primary-color border-b-2"
                                    : "five-color"
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
                    <>
                        <div className='bg-[#E7EBEF66] px-6'>
                            <div className=' py-6'>
                                <div className=' flex justify-between items-center'>
                                    <h2 className=' text-[#323F49] class-xl1 mb-3'>Current cycle</h2>
                                    <button>Download</button>
                                </div>
                                <p className=' text-[#323F49] text-sm font-normal font-numans'>Your payouts follow a <span className='text-[] font-medium'>weekly</span> cycle. Earnings accumulated from Monday through Sunday are credited to your account on the subsequent Wednesday.</p>
                            </div>
                            <div className="bg-white rounded-lg shadow px-7 py-8  mx-auto">
                                <div className="flex justify-between pb-12">
                                    <div>
                                        <h4 className="seven-color class-base1 text-center mb-6">Time period</h4>
                                        <p className="third-color class-base1 text-center">15 Jul - 21 Jul, 2024</p>
                                    </div>
                                    <div>
                                        <h4 className="seven-color class-base1 text-center mb-6">Orders</h4>
                                        <p className="text-[#4A5E6D] class-base1 text-center">0</p>
                                    </div>
                                    <div>
                                        <h4 className="seven-color class-base1 text-center mb-6">Payout date</h4>
                                        <p className="text-[#4A5E6D] class-base1 text-center">24 Jul, 2024</p>
                                    </div>
                                    <div>
                                        <h4 className="seven-color class-base1 text-center mb-6">Estimated amount</h4>
                                        <p className="text-[#4A5E6D] class-base1 text-center">₹199.8</p>
                                    </div>
                                    <div>
                                        <h4 className="seven-color class-base1 text-center mb-6">Transactions</h4>
                                        <p className="text-[#4A5E6D] class-base1 text-center">View</p>
                                    </div>
                                </div>
                                <div className="flex justify-between border-y py-4">
                                    <h4 className="text-[#323F49] class-base1">Total orders</h4>
                                    <p className="text-[#323F49] class-base1">0</p>
                                </div>
                                <div className="flex justify-between border-y py-4">
                                    <h4 className="text-[#323F49] class-base1">Total orders</h4>
                                    <p className="text-[#323F49] class-base1">0</p>
                                </div>
                                <div className="flex justify-between border-y py-4">
                                    <h4 className="text-[#323F49] class-base1">Total orders</h4>
                                    <p className="text-[#323F49] class-base1">0</p>
                                </div>
                                <div className="flex justify-between border-y py-4">
                                    <h4 className="text-[#323F49] class-base1">Total orders</h4>
                                    <p className="text-[#323F49] class-base1">0</p>
                                </div>
                                <div className="flex justify-between border-y py-4">
                                    <h4 className="text-[#323F49] class-base1">Total orders</h4>
                                    <p className="text-[#323F49] class-base1">0</p>
                                </div>
                                <div className="flex justify-between border-y py-4">
                                    <h4 className="text-[#323F49] class-base1">Total orders</h4>
                                    <p className="text-[#323F49] class-base1">0</p>
                                </div>
                            </div>
                        </div>
                    </>
                    :
                    <>
                        {activeTab === "Invoices" ? <>
                            <div className='bg-[#E7EBEF66] px-6'>
                                <div className="bg-white rounded-lg shadow px-7 py-8  mx-auto">
                                    <div className="flex justify-between">
                                        <div>
                                            <h4 className="six-color class-base1 text-center mb-6">UTR</h4>
                                            <p className="third-color class-base1 text-center">Not available</p>
                                        </div>
                                        <div>
                                            <h4 className="six-color class-base1 text-center mb-6">Date</h4>
                                            <p className="third-color class-base1 text-center">17 Jul 2024</p>
                                        </div>
                                        <div>
                                            <h4 className="six-color class-base1 text-center mb-6">Status</h4>
                                            <p className="third-color class-base1 text-center">Pending</p>
                                        </div>
                                        <div>
                                            <h4 className="six-color class-base1 text-center mb-6">Amount</h4>
                                            <p className="third-color class-base1 text-center">₹199.8</p>
                                        </div>
                                        <div>
                                            <h4 className="six-color class-base1 text-center mb-6">Details</h4>
                                            <p className="third-color class-base1 text-center">Download</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </>
                            :
                            <>
                                {activeTab === "UTR Reports" ? <>
                                    <div className='bg-[#E7EBEF66] px-6'>
                                        <div className=' py-6'>
                                            <div className=' flex justify-between items-center'>
                                                <h2 className=' seven-color text-2xl font-normal font-numans mb-3'>Current cycle</h2>
                                                <button>Download</button>
                                            </div>
                                            <p className=' seven-color text-sm font-normal font-numans'>Your payouts follow a <span className='text-[] font-medium'>weekly</span> cycle. Earnings accumulated from Monday through Sunday are credited to your account on the subsequent Wednesday.</p>
                                        </div>
                                        <div className="bg-white rounded-lg shadow px-7 py-8  mx-auto">
                                            <div className="flex justify-between pb-12">
                                                <div>
                                                    <h4 className="six-color class-base1 mb-6">Time period</h4>
                                                    <p className="third-color class-base1">15 Jul - 21 Jul, 2024</p>
                                                </div>
                                                <div>
                                                    <h4 className="six-color class-base1 mb-6">Orders</h4>
                                                    <p className="third-color class-base1">0</p>
                                                </div>
                                                <div>
                                                    <h4 className="six-color class-base1 mb-6">Payout date</h4>
                                                    <p className="third-color class-base1">24 Jul, 2024</p>
                                                </div>
                                                <div>
                                                    <h4 className="six-color class-base1 mb-6">Estimated amount</h4>
                                                    <p className="third-color class-base1">₹199.8</p>
                                                </div>
                                                <div>
                                                    <h4 className="six-color class-base1 mb-6">Transactions</h4>
                                                    <p className="third-color class-base1">View</p>
                                                </div>
                                            </div>
                                            <div className="flex justify-between border-y py-4">
                                                <h4 className="seven-color class-lg1">Total orders</h4>
                                                <p className="seven-color class-lg1">0</p>
                                            </div>
                                            <div className="flex justify-between border-y py-4">
                                                <h4 className="seven-color class-lg1">Total orders</h4>
                                                <p className="seven-color class-lg1">0</p>
                                            </div>
                                            <div className="flex justify-between border-y py-4">
                                                <h4 className="seven-color class-lg1">Total orders</h4>
                                                <p className="seven-color class-lg1">0</p>
                                            </div>
                                            <div className="flex justify-between border-y py-4">
                                                <h4 className="seven-color class-lg1">Total orders</h4>
                                                <p className="seven-color class-lg1">0</p>
                                            </div>
                                            <div className="flex justify-between border-y py-4">
                                                <h4 className="seven-color class-lg1">Total orders</h4>
                                                <p className="seven-color class-lg1">0</p>
                                            </div>
                                            <div className="flex justify-between border-y py-4">
                                                <h4 className="seven-color class-lg1">Total orders</h4>
                                                <p className="seven-color class-lg1">0</p>
                                            </div>
                                        </div>
                                    </div>
                                </>
                                    :
                                    <>
                                        <div className='px-7'>
                                            <h4 className='third-color class-lg1'>TDS Certificates</h4>
                                            <div className='w-full h-[690px] bg-[#FFFFFF] flex flex-col justify-center items-center gap-12 border-[1px] rounded-lg my-4'>
                                                <img src={TaxImg} alt="tax-img" className='w-[244px] h-[198px]' />
                                                <p className='third-color class-lg1'>No tax certificates available</p>
                                            </div>
                                        </div>
                                    </>}
                            </>}
                    </>}

            </>
        </RestaurantWrapper>
    )
}

export default Payout
