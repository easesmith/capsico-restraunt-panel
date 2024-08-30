import React from 'react'
import TaxImg from '../../../assets/tax.png'


const Taxes = () => {
    return (
        <div className='px-7'>
            <h4 className='third-color class-lg1'>TDS Certificates</h4>
            <div className='w-full h-[690px] bg-[#FFFFFF] flex flex-col justify-center items-center gap-12 border-[1px] rounded-lg my-4'>
                <img src={TaxImg} alt="tax-img" className='w-[244px] h-[198px]' />
                <p className='third-color class-lg1'>No tax certificates available</p>
            </div>
        </div>
    )
}

export default Taxes
