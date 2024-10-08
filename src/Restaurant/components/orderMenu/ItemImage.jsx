import React, { useState } from 'react'
import { FiUpload } from 'react-icons/fi'
import ItemImageUploadModal from './ItemImageUploadModal';

const ItemImage = ({form,name}) => {
    const [isItemImageUploadModalOpen, setIsItemImageUploadModalOpen] = useState(false);

    return (
        <div className="w-full flex justify-between items-center pb-4 border-b">
            <div>
                <h4 className="font-inter font-normal">Chicken Combo</h4>
                <p className="font-inter font-normal text-[#858585]">In Combos</p>
            </div>

            <button type='button' onClick={() => setIsItemImageUploadModalOpen(true)} className='border-2 mt-2 flex flex-col bg-[#1aa6f10c] items-center justify-center primary-color w-20 h-20 rounded-md px-4 py-3'>
                <FiUpload size={25} />
                <p className='font-semibold text-center primary-color text-sm mt-2'>Upload</p>
            </button>
            {isItemImageUploadModalOpen &&
                <ItemImageUploadModal
                    isItemImageUploadModalOpen={isItemImageUploadModalOpen}
                    setIsItemImageUploadModalOpen={setIsItemImageUploadModalOpen}
                    form2={form}
                    name={name}
                />
            }
        </div>
    )
}

export default ItemImage