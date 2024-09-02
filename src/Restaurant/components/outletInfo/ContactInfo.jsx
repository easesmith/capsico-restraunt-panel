import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useState } from 'react';
import { BiTrash } from "react-icons/bi";
import { FiEdit2 } from 'react-icons/fi';
import { IoSearchOutline } from 'react-icons/io5';
import { LuPhoneCall } from "react-icons/lu";
import EditContactInfoModal from './EditContactInfoModal';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import DeleteModal from './DeleteModal';

const ContactInfo = () => {
  const [isEditContactModalOpen, setIsEditContactModalOpen] = useState(false);
  const [isDeleteContactModalOpen, setIsDeleteContactModalOpen] = useState(false);

  const form = useForm({
    resolver: zodResolver({}),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
    }
  })

  const handleContactEdit = () => {
    setIsEditContactModalOpen(true);
  }

  const handleContactDelete = () => {
    setIsDeleteContactModalOpen(true);
  }

  const onSubmit = (data) => {
    console.log("data", data);
    setIsEditContactModalOpen(false);
  }

  return (
    <div className='p-5'>
      <div className='w-full relative'>
        <IoSearchOutline className='absolute top-1/2 -translate-y-1/2 left-2 z-10 text-xl text-[#667085]' />
        <Input type="search" placeholder="Search by name, email or phone number" className="px-4 pl-8 w-full secondry-color class-sm2 placeholder:text-[#667085]" />
      </div>


      <div className='bg-[#E7EBEF] flex justify-between items-center px-4 mt-5 py-3 border-l-4 border-l-[#1AA6F1]'>
        <p className='class-lg1 text-[#323F49]'>Order reminder call</p>
        <button className='class-sm1 text-[#1AA6F1]'>View Permissions</button>
      </div>

      <div className="flex justify-between items-center mt-4 p-4 border-b border-b-[#DAE1E7]">
        <div className='flex items-center gap-2'>
          <div className='w-10 h-10 rounded-full bg-[#1AA6F1] flex justify-center items-center'>
            <LuPhoneCall className='text-white text-xl' />
          </div>
          <div>
            <h3 className='class-lg1 text-[#323F49]'>Order reminder number 2</h3>
            <p className='text-[#637D92] class-sm1'>+91 98765 4212X</p>
          </div>
        </div>
        <div>
          <FiEdit2 onClick={handleContactEdit} className="text-[#1AA6F1] text-xl cursor-pointer" />
        </div>
      </div>
      <div className="flex justify-between items-center p-4 border-b border-b-[#DAE1E7]">
        <div className='flex items-center gap-2'>
          <div className='w-10 h-10 rounded-full bg-[#1AA6F1] flex justify-center items-center'>
            <LuPhoneCall className='text-white text-xl' />
          </div>
          <div>
            <h3 className='class-lg1 text-[#323F49]'>Order reminder number 2</h3>
            <p className='text-[#637D92] class-sm1'>+91 98765 4212X</p>
          </div>
        </div>
        <div>
          <FiEdit2 onClick={handleContactEdit} className="text-[#1AA6F1] text-xl cursor-pointer" />
        </div>
      </div>


      <div className='bg-[#E7EBEF] flex justify-between items-center px-4 mt-3 py-3'>
        <p className='class-lg1 text-[#323F49]'>Owner</p>
        <button className='class-sm1 text-[#1AA6F1]'>View Permissions</button>
      </div>
      <div className="flex justify-between items-center p-4 border-b border-b-[#DAE1E7]">
        <div className='flex items-center gap-2'>
          <div className='w-10 h-10 rounded-full bg-[#1AA6F1] flex justify-center items-center'>
            <LuPhoneCall className='text-white text-xl' />
          </div>
          <div>
            <h3 className='class-lg1 text-[#323F49]'>Ravi Sony</h3>
            <p className='text-[#637D92] class-sm1'>+91 98765 4212X</p>
            <p className='text-[#637D92] class-sm1'>ravisonisbz123@gmail.com</p>
          </div>
        </div>
        <div>
          <FiEdit2 onClick={handleContactEdit} className="text-[#1AA6F1] text-xl cursor-pointer" />
        </div>
      </div>


      <div className='bg-[#E7EBEF] flex justify-between items-center px-4 mt-3 py-3'>
        <p className='class-lg1 text-[#323F49]'>Manager</p>
        <button className='class-sm1 text-[#1AA6F1]'>View Permissions</button>
      </div>

      <div className="flex justify-between items-center p-4 border-b border-b-[#DAE1E7]">
        <div className='flex items-center gap-2'>
          <div className='w-10 h-10 rounded-full bg-[#1AA6F1] flex justify-center items-center'>
            <LuPhoneCall className='text-white text-xl' />
          </div>
          <div>
            <h3 className='class-lg1 text-[#323F49]'>Ravi Sony</h3>
            <p className='text-[#637D92] class-sm1'>+91 98765 4212X</p>
            <p className='text-[#637D92] class-sm1'>ravisonisbz123@gmail.com</p>
          </div>
        </div>
        <div>
          <BiTrash onClick={handleContactDelete} className="text-[#E4626F] text-xl cursor-pointer" />
        </div>
      </div>


      {/* <div className='bg-[#E7EBEF] flex justify-between items-center px-4 mt-3 py-3'>
        <p className='class-lg1 text-[#323F49]'>Staff</p>
        <button className='class-sm1 text-[#1AA6F1]'>View Permissions</button>
      </div> */}

      {/* <div className="flex justify-between items-center px-4 py-2 border-b border-b-[#DAE1E7]">
        <div className='class-sm1 text-[#323F49]'>No one added as staff yet. Invite someone now.</div>
        <div>
          <Button variant="capsico" className="rounded-[1px] px-7 class-base3">Invite user</Button>
        </div>
      </div> */}

      {isEditContactModalOpen &&
        <EditContactInfoModal
          isEditContactModalOpen={isEditContactModalOpen}
          setIsEditContactModalOpen={setIsEditContactModalOpen}
          form={form}
          onSubmit={onSubmit}
        />
      }

      {isDeleteContactModalOpen &&
        <DeleteModal
          isDeleteContactModalOpen={isDeleteContactModalOpen}
          setIsDeleteContactModalOpen={setIsDeleteContactModalOpen}
          onDelete={() => { }}
        />
      }
    </div>
  )
}

export default ContactInfo