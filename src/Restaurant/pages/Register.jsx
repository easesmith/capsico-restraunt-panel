import { useState } from 'react';
import { FaCheck } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import CreateOrRegisterRestaurantModal from '../components/CreateOrRegisterRestaurantModal';
import Register1 from '../components/register/Register1';
import Register2 from '../components/register/Register2';
import Register3 from '../components/register/Register3';

const Register = () => {
    const [step, setStep] = useState(1);
    const [restaurant, setRestaurant] = useState({ _id: "673c6c4737e46cc800e45e15" });
    const [isRegisterSuccessModalOpen, setIsRegisterSuccessModalOpen] = useState(false);
    const [isCreateOrRegisterRestaurantModalOpen, setIsCreateOrRegisterRestaurantModalOpen] = useState(true);
    const [isChecked, setIsChecked] = useState(true);

    const navigate = useNavigate();
    const isAuthenticated = localStorage.getItem("restaurant-status") === "true";
    // if (isAuthenticated) {
    //     navigate("/restaurant/orders")
    // }

    return (
        <div className='max-w-7xl mx-auto p-6'>
            <h1 className='font-semibold text-4xl text-[#4A5E6D] text-center'>Create your restaurant page</h1>
            <div className='border border-[#C2CDD6] mt-12 rounded-md w-full py-8 px-36'>
                <div className='flex justify-between gap-10'>
                    <div className={`${step === 1 ? "border-t-4 border-[#1AA6F1]" : "border-t-4 border-transparent"} py-4 w-[240px] h-[170px] px-2 flex flex-col`}>
                        <h3 className='font-bold text-[19px] text-[#4A5E6D]'>Restaurant Information</h3>
                        <p className='font-normal text-[19px] text-[#92A5B5]'>Restaurant name. address. contact no., owner details</p>
                        <div className={`w-10 h-10 mt-auto mx-auto rounded-full ${isChecked && step === 1 ? "bg-[#22C55E]" : step === 1 ? "bg-[#1AA6F1]" : "bg-[#AEAEB0]"} flex justify-center items-center text-2xl text-white`}>
                            {isChecked && step === 1 ?
                                <FaCheck className="text-white text-xl" />
                                : 1}
                        </div>
                    </div>
                    <div className={`${step === 2 ? "border-t-4 border-[#1AA6F1]" : "border-t-4 border-transparent"} py-4 w-[260px] px-2 h-[170px] flex flex-col`}>
                        <h3 className='font-bold text-[19px] text-[#4A5E6D]'>Restaurant Type & Timings</h3>
                        <p className='font-normal text-[19px] text-[#92A5B5]'>Cuisine type. opening hours</p>
                        <div className={`w-10 h-10 mt-auto mx-auto rounded-full ${isChecked && step === 2 ? "bg-[#22C55E]" : step === 1 ? "bg-[#1AA6F1]" : "bg-[#AEAEB0]"} flex justify-center items-center text-2xl text-white`}>
                            {isChecked && step === 2 ?
                                <FaCheck className="text-white text-xl" />
                                : 2}
                        </div>
                    </div>
                    <div className={`${step === 3 ? "border-t-4 border-[#1AA6F1]" : "border-t-4 border-transparent"} py-4 w-[240px] px-2 h-[170px] flex flex-col`}>
                        <h3 className='font-bold text-[19px] text-[#4A5E6D]'>Upload Images</h3>
                        <p className='font-normal text-[19px] text-[#92A5B5]'>Menu, restaurant. food images</p>
                        <div className={`w-10 h-10 mt-auto mx-auto rounded-full ${isChecked && step === 3 ? "bg-[#22C55E]" : step === 1 ? "bg-[#1AA6F1]" : "bg-[#AEAEB0]"} flex justify-center items-center text-2xl text-white`}>
                            {isChecked && step === 3 ?
                                <FaCheck className="text-white text-xl" />
                                : 3}
                        </div>
                    </div>
                </div>
            </div>
            <div className='w-[70%] mt-5'>
                {step === 1 &&
                    <Register1
                        restaurant={restaurant}
                        setRestaurant={setRestaurant}
                        setStep={setStep}
                    />
                }

                {step === 2 &&
                    <Register2
                        restaurant={restaurant}
                        setStep={setStep}
                    />
                }

                {step === 3 &&
                    <Register3
                        restaurant={restaurant}
                        setStep={setStep}
                    />
                }

                {/* <div className="flex justify-end gap-2 mt-10">
                            {step < 3 && <Button type="button" variant="capsico" className="w-20" onClick={handleNext}>Next</Button>}
                            {step === 3 && <Button variant="capsico" className="w-20" type="submit">Done</Button>}
                        </div> */}
            </div>

            {isCreateOrRegisterRestaurantModalOpen &&
                <CreateOrRegisterRestaurantModal
                    isCreateOrRegisterRestaurantModalOpen={isCreateOrRegisterRestaurantModalOpen}
                    setIsCreateOrRegisterRestaurantModalOpen={setIsCreateOrRegisterRestaurantModalOpen}
                />
            }
        </div>
    )
}

export default Register