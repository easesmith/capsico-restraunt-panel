import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

const WorkingDay = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div>
            <button
                onClick={() => setIsOpen(!isOpen)}
                className='flex justify-between px-5 py-3 bg-slate-200 w-full items-center class-base1'
            >
                <p>Monday</p>
                <IoIosArrowDown
                    className={`transform transition-transform duration-300 ${isOpen ? 'rotate-180' : 'rotate-0'}`}
                />
            </button>
            <div
                className={`transition-all duration-300 ease-in-out overflow-hidden ${isOpen ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'} bg-red-100 w-full`}
            >
                <div className="px-5 py-3">
                    
                </div>
            </div>
        </div>
    )
}

export default WorkingDay