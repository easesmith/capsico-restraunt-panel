import { useState } from "react";
import CreateVariant from "./CreateVariant"

const Property = ({ title, example, form }) => {
    const [isCreateVariantModalOpen, setIsCreateVariantModalOpen] = useState(false);

    const handleModalOpen = ()=>{
        setIsCreateVariantModalOpen(true);
    }

    return (
        <div className='bg-white p-3 rounded-lg shadow-sm'>
            <h2 className='font-inter text-lg font-medium text-black'>{title}</h2>
            <p className='text-[#585858] mt-1'>{example}</p>
            <button onClick={handleModalOpen} type='button' className="mt-4 text-[#4A67FF] font-medium font-inter">Add property</button>

            {isCreateVariantModalOpen &&
                <CreateVariant
                    isCreateVariantModalOpen={isCreateVariantModalOpen}
                    setIsCreateVariantModalOpen={setIsCreateVariantModalOpen}
                    form={form}
                />
            }
        </div>
    )
}

export default Property