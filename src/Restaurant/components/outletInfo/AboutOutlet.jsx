import { useState } from 'react';
import { FiEdit2 } from 'react-icons/fi'
import { GrLocation } from "react-icons/gr";
import { LuMic } from "react-icons/lu";
import EditOutletModal from './EditOutletModal';
import { Link } from 'react-router-dom';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { Label } from '@/components/ui/label';

const AboutOutlet = () => {
  const [isEditOutletModalOpen, setIsEditOutletModalOpen] = useState(false);
  const [current, setCurrent] = useState("");

  const form = useForm({
    resolver: zodResolver({}),
    defaultValues: {
      restaurantName: "",
    }
  })

  const onSubmit = (data) => {
    console.log("data", data);
  }

  const handleNameEdit = (value) => {
    setCurrent(value);
    setIsEditOutletModalOpen(true);
  }

  const handleCategoryEdit = (value) => {
    setCurrent(value);
    setIsEditOutletModalOpen(true);
  }

  const handleLocationEdit = (value) => {
    setCurrent(value);
    setIsEditOutletModalOpen(true);
  }
  const handleAudioEdit = (value) => {
    setCurrent(value);
    setIsEditOutletModalOpen(true);
  }

  return (
    <div>
      <div className="w-full h-80 bg-blue-100 relative">
        <Label onClick={handleNameEdit} className="px-8 cursor-pointer py-3 bg-white absolute right-2 top-2 flex gap-1 rounded-md">
          <span></span>
          <span className='font-numans text-xs text-[#1AA6F1]'>Edit Photo</span>
        </Label>
        <img className='w-full h-full' src={form.getValues("restaurantPreview")} alt="" />
      </div>

      <div className="p-5">
        <div className='flex items-center justify-between'>
          <div className='flex items-center gap-2'>
            <h2 className='class-xl5 text-[#323F49]'>Desi Platters</h2>
            <FiEdit2 onClick={handleNameEdit} className="text-[#323F49] cursor-pointer text-xl" />
          </div>
          <Link to="/restaurant/reviews" className='class-base1 text-[#0083C9]'>Outlet reviews</Link>
        </div>

        <div className='flex items-center gap-2 mt-1 border-b border-b-[#DAE1E7] pb-5'>
          <h2 className='class-base1 text-[#7991A4]'>North Indian, Fast Food</h2>
          <FiEdit2 onClick={handleCategoryEdit} className="text-[#323F49] cursor-pointer text-xl" />
        </div>

        <div className='flex items-center gap-5 mt-1 py-4 border-b border-b-[#DAE1E7]'>
          <GrLocation className="text-[#323F49] text-xl" />
          <h2 className='class-base1 text-[#7991A4]'>Address:529/k, Shadab volony, Khurram Nagar, Gorakhpur.</h2>
          <FiEdit2 onClick={handleLocationEdit} className="text-[#323F49] cursor-pointer text-xl" />
        </div>

        <button className='class-sm4 text-[#0083C9]'>View on Maps</button>

        <div className='flex items-center gap-5 mt-1 py-4 border-b border-b-[#DAE1E7]'>
          <LuMic className="text-[#323F49] text-xl" />
          <h2 className='class-base1 text-[#7991A4]'>Record pickup instrucations (Please allow microphone access)</h2>
          <FiEdit2 onClick={handleAudioEdit} className="text-[#323F49] cursor-pointer text-xl" />
        </div>
      </div>

      {isEditOutletModalOpen &&
        <EditOutletModal
          isEditOutletModalOpen={isEditOutletModalOpen}
          setIsEditOutletModalOpen={setIsEditOutletModalOpen}
          current={current}
          form={form}
          onSubmit={onsubmit}
        />
      }
    </div>
  )
}

export default AboutOutlet