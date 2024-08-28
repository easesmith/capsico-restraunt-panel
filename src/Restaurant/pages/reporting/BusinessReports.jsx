import { Button } from '@/components/ui/button'
import { BsGrid1X2 } from "react-icons/bs";
import graphIcon from "@/assets/graphIcon.png";
import blueGraphIcon from "@/assets/blueGraphIcon.png";
import { useState } from 'react';
import Metric from './Metric';
import Overview from './Overview';

const BusinessReports = () => {
  const [isMetric, setIsMetric] = useState(true);
  
  return (
    <div>
      <div className='bg-[#FFFFFF66] p-5 border-b border-[#DAE1E7]'>
        <div className='flex items-center'>
          <button onClick={() => setIsMetric(true)} className={`flex gap-2 items-center py-2 rounded-lg px-4 border font-numans border-r-0 rounded-r-none ${isMetric ? "border-[#1AA6F1] text-[#1AA6F1]" : "bg-[#4A5E6D] text-white border-[#4A5E6D]"}`}>
            <BsGrid1X2 className='text-xl' />
            <span>Metric</span>
          </button>
          <button onClick={() => setIsMetric(false)} className={`px-4 border border-l-0 py-2 rounded-lg rounded-l-none font-numans flex gap-2 items-center ${!isMetric ? "border-[#1AA6F1] text-[#1AA6F1] bg-white" : "bg-[#4A5E6D] text-white border-[#4A5E6D]"}`}>
            <img className='w-5 h-5' src={!isMetric ? blueGraphIcon : graphIcon} alt="graphIcon" />
            <span>Overview</span>
          </button>
        </div>
      </div>
      <div className='p-10'>
        <div className="">
          {isMetric ?
            <Metric />
            : <Overview />
          }
        </div>
      </div>
    </div>
  )
}

export default BusinessReports