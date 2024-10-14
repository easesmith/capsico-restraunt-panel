import { AlertDialog, AlertDialogContent, AlertDialogHeader } from '@/components/ui/alert-dialog'
import React from 'react'
import { FaCheck } from 'react-icons/fa6'
import { useNavigate } from 'react-router-dom'

const CreateOrRegisterRestaurantModal = ({ isCreateOrRegisterRestaurantModalOpen, setIsCreateOrRegisterRestaurantModalOpen }) => {
    const navigate = useNavigate();

    const handelNavigate = ()=>{
        setIsCreateOrRegisterRestaurantModalOpen(false);
        navigate("/restaurant/create-restaurant");
    }
    const handelNavigate2 = ()=>{
        setIsCreateOrRegisterRestaurantModalOpen(false);
        navigate("/restaurant/online-ordering");
    }

    return (
        <AlertDialog open={isCreateOrRegisterRestaurantModalOpen} onOpenChange={setIsCreateOrRegisterRestaurantModalOpen}>
            <AlertDialogContent className="max-w-lg w-full">
                <AlertDialogHeader>
                    <div className="flex flex-col p-8 pt-5">
                        <div className="flex items-center space-x-2">
                            <div className="flex items-center justify-center w-9 h-9 bg-[#22C55E] p-[6px] text-white rounded-full">
                                <FaCheck />
                            </div>
                            <button onClick={handelNavigate} className="text-black font-semibold font-inter">Create your restaurant page</button>
                        </div>

                        <div className="ml-[18px] border-l-2 border-dashed border-[#BDBDBD] h-9"></div>

                        <div className="flex items-center space-x-2">
                            <div className="flex items-center justify-center w-9 h-9 bg-[#BEBEBE] text-white p-[6px] rounded-full">
                                {/* <FaCheck /> */}
                                2
                            </div>
                            <button onClick={handelNavigate2} className="text-black font-semibold font-inter">Registeration for online ordering</button>
                        </div>
                    </div>
                </AlertDialogHeader>
            </AlertDialogContent>
        </AlertDialog >
    )
}

export default CreateOrRegisterRestaurantModal