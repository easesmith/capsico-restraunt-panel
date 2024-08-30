import React from 'react'

const Report = () => {
    
    return (
        <>
            <div className='bg-[#E7EBEF66] px-6'>
                <div className=' py-6'>
                    <div className=' flex justify-between items-center'>
                        <h2 className=' seven-color text-2xl font-normal font-numans mb-3'>Current cycle</h2>
                        <button>Download</button>
                    </div>
                    <p className=' seven-color text-sm font-normal font-numans'>Your payouts follow a <span className='text-[] font-medium'>weekly</span> cycle. Earnings accumulated from Monday through Sunday are credited to your account on the subsequent Wednesday.</p>
                </div>
                <div className="bg-white rounded-lg shadow px-7 py-8  mx-auto">
                    <div className="flex justify-between">
                        <div>
                            <h4 className="six-color class-base1 text-center mb-6">UTR</h4>
                            <p className="third-color class-base1 text-center">15 Jul - 21 Jul, 2024</p>
                        </div>
                        <div>
                            <h4 className="six-color class-base1 text-center mb-6">Date</h4>
                            <p className="third-color class-base1 text-center">0</p>
                        </div>
                        <div>
                            <h4 className="six-color class-base1 text-center mb-6">Status</h4>
                            <p className="third-color class-base1 text-center">24 Jul, 2024</p>
                        </div>
                        <div>
                            <h4 className="six-color class-base1 text-center mb-6">Amount</h4>
                            <p className="third-color class-base1 text-center">₹199.8</p>
                        </div>
                        <div>
                            <h4 className="six-color class-base1 text-center mb-6">Details</h4>
                            <p className="third-color class-base1 text-center">View</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Report
