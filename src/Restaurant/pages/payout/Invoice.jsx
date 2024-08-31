import { Button } from '@/components/ui/button'
import React, { useState } from 'react'

const Invoice = () => {

    const [activeTab, setActiveTab] = useState("Online ordering")
    const tabs = ["Online ordering", "Recovery"]

    return (
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
            <div className='bg-[#FFFFFF] border-[2px] border-[#DAE1E7] p-[10px]'>
                <h4 className='seven-color text-center class-base3'>Financial year - 2024</h4>
            </div>
            <div className="bg-white rounded-lg shadow px-7 py-8  mx-auto">
                <div className="flex justify-between">
                    <div>
                        <h4 className="six-color class-base1 text-center mb-6">Invoice No</h4>
                        <p className="third-color class-base1 text-center">ALDP-123-12345</p>
                    </div>
                    <div>
                        <h4 className="six-color class-base1 text-center mb-6">Month</h4>
                        <p className="third-color class-base1 text-center">Not available</p>
                    </div>
                    <div>
                        <h4 className="six-color class-base1 text-center mb-6">Type</h4>
                        <p className="third-color class-base1 text-center">Online Ordering</p>
                    </div>
                    <div>
                        <h4 className="six-color class-base1 text-center mb-6">Download Invoice</h4>
                        <p className="primary-color class-base5 text-center">Download</p>
                    </div>
                    <div>
                        <h4 className="six-color class-base1 text-center mb-6">Download Credit/Debit Note</h4>
                        <p className="primary-color class-base5 text-center">Download</p>
                    </div>
                    <div>
                        <h4 className="six-color class-base1 text-center mb-6">Download TCS</h4>
                        <p className="primary-color class-base5 text-center">Download</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Invoice
