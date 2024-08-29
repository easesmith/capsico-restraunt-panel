import React from 'react'
import { FaXmark } from "react-icons/fa6";
import { Link } from 'react-router-dom';

const Toast = () => {
    return (
        <div className=' relative max-w-[900px] w-full mx-auto bg-[#22C55E]  rounded-[25px] py-3'>
            <FaXmark className=' absolute right-[2%] bottom-[32%] class-xl2 fourth-color' />
            <p className='fourth-color class-lg1 text-center leading-[23.49px]'>Enable notifications for an enhanced experience. <Link className=' border-b-2 '>Learn more here.</Link></p>
        </div>
    )
}

export default Toast
