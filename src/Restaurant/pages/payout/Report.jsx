import { Button } from '@/components/ui/button'
import React, { useState } from 'react'

const Report = () => {

    const [activeTab, setActiveTab] = useState("Last 14 Days")
    const tabs = ["Last 14 Days", "Last 30 Days", "Choose Date"]
    return (
        <>
            <div className='bg-[#E7EBEF66] px-6'>
                <div className=' py-6'>
                    <div className=' flex justify-between items-center'>
                        <div className='flex gap-3'>
                            {tabs.map((tab) => {
                                return <Button variant={`${activeTab === tab ? 'capsico' : 'outline'}`} className={`class-base3 rounded-sm ${activeTab === tab ? '' : ' '} `} onClick={() => setActiveTab(tab)}>{tab}</Button>
                            })}
                        </div>
                        <Button variant='capsico' className="class-base3 rounded-sm">Download</Button>
                    </div>
                </div>
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
                            <p className="primary-color class-base5 text-center">Download</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Report
