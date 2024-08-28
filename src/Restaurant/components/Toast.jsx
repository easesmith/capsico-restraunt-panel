import React from 'react'
import { FaXmark } from "react-icons/fa6";

const Toast = () => {
    return (
        <div className=' relative max-w-[900px] w-full mx-auto bg-[#22C55E]  rounded-[25px] py-3'>
            <FaXmark className=' absolute right-[2%] text-[20px] text-[#FFFFFF]' />
            <p className='text-[#FFFFFF] text-[18px] text-center font-normal font-numans leading-[23.49px]'>Enable notifications for an enhanced experience. Learn more here.</p>
        </div>
    )
}

export default Toast
