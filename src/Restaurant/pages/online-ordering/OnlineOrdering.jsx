import { Button } from '@/components/ui/button';
import { Form } from '@/components/ui/form';
import OnlineOrdering1 from '@/Restaurant/components/online-ordering/OnlineOrdering1';
import OnlineOrdering2 from '@/Restaurant/components/online-ordering/OnlineOrdering2';
import OnlineOrdering3 from '@/Restaurant/components/online-ordering/OnlineOrdering3';
import RegisterSuccessModal from '@/Restaurant/components/RegisterSuccessModal';
import { OnlineOrderingSchema, OnlineOrderingSchema1, OnlineOrderingSchema2, OnlineOrderingSchema3 } from '@/schemas/OnlineOrderingSchema';
import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { FaCheck } from 'react-icons/fa6';

const OnlineOrdering = () => {
    const [step, setStep] = useState(1);
    const [isRegisterSuccessModalOpen, setIsRegisterSuccessModalOpen] = useState(false);
    const [isCreateOrRegisterRestaurantModalOpen, setIsCreateOrRegisterRestaurantModalOpen] = useState(true);
    const [isChecked, setIsChecked] = useState(true);

    const handleNext = async () => {
        let schema;
        switch (step) {
            case 1:
                schema = OnlineOrderingSchema1;
                break;
            case 2:
                schema = OnlineOrderingSchema2;
                break;
            case 3:
                schema = OnlineOrderingSchema3;
                break;
        }

        // const valid = await form.trigger(Object.keys(schema.shape));
        
        setStep(step + 1);
        // if (valid) {
        // }
    };
    
    console.log("step",step);

    const form = useForm({
        resolver: zodResolver(OnlineOrderingSchema),
        defaultValues: {
            isRefered: false,
            timing: "",
            menuImages: "",
            menuImagesPreview: "",
            numberType: "",
            number: "",
            isManually: "Enter this information manually",
            fullName: "",
            email: "",
            accountingNotificationsNumber: "",

            panNumber: "",
            nameOnPan: "",
            address: "",
            panImage: "",
            FSSAICertificateNumber: "",
            FSSAIExpiryDate: "",
            fssaiImage: "",
            bankAccountNumber: "",
            reEnterAccountNumber: "",
            accountType: "",
            IFSCCode: "",
        }
    })


    const onSubmit = (data) => {
        console.log("data", data);
    }

    return (
        <div className='max-w-7xl mx-auto p-6'>
            <h1 className='font-semibold text-4xl text-[#4A5E6D] text-center'>Registeration for online ordering</h1>
            <div className='border border-[#C2CDD6] mt-12 rounded-md w-full py-8 px-36'>
                <div className='flex justify-between gap-10'>
                    <div className={`${step === 1 ? "border-t-4 border-[#1AA6F1]" : "border-t-4 border-transparent"} py-4 w-[240px] h-[170px] px-2 flex flex-col`}>
                        <h3 className='font-bold text-[19px] text-[#4A5E6D]'>Restaurant Information</h3>
                        <p className='font-normal text-[19px] text-[#92A5B5]'>delivery timing, menu & contact information</p>
                        <div className={`w-10 h-10 mt-auto mx-auto rounded-full ${isChecked && step === 1 ? "bg-[#22C55E]" : step === 1 ? "bg-[#1AA6F1]" : "bg-[#AEAEB0]"} flex justify-center items-center text-2xl text-white`}>
                            {isChecked && step === 1 ?
                                <FaCheck className="text-white text-xl" />
                                : 1}
                        </div>
                    </div>
                    <div className={`${step === 2 ? "border-t-4 border-[#1AA6F1]" : "border-t-4 border-transparent"} py-4 w-[260px] px-2 h-[170px] flex flex-col`}>
                        <h3 className='font-bold text-[19px] text-[#4A5E6D]'>Upload Document</h3>
                        <p className='font-normal text-[19px] text-[#92A5B5]'>PAN , FSSAI and bank account details</p>
                        <div className={`w-10 h-10 mt-auto mx-auto rounded-full ${isChecked && step === 2 ? "bg-[#22C55E]" : step === 1 ? "bg-[#1AA6F1]" : "bg-[#AEAEB0]"} flex justify-center items-center text-2xl text-white`}>
                            {isChecked && step === 2 ?
                                <FaCheck className="text-white text-xl" />
                                : 2}
                        </div>
                    </div>
                    <div className={`${step === 3 ? "border-t-4 border-[#1AA6F1]" : "border-t-4 border-transparent"} py-4 w-[240px] px-2 h-[170px] flex flex-col`}>
                        <h3 className='font-bold text-[19px] text-[#4A5E6D]'>Partnership plans</h3>
                        <p className='font-normal text-[19px] text-[#92A5B5]'>Select your plan</p>
                        <div className={`w-10 h-10 mt-auto mx-auto rounded-full ${isChecked && step === 3 ? "bg-[#22C55E]" : step === 1 ? "bg-[#1AA6F1]" : "bg-[#AEAEB0]"} flex justify-center items-center text-2xl text-white`}>
                            {isChecked && step === 3 ?
                                <FaCheck className="text-white text-xl" />
                                : 3}
                        </div>
                    </div>
                </div>
            </div>
            <div className='w-[50%] mt-5'>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="w-full py-5">
                        {step === 1 &&
                            <OnlineOrdering1 form={form} />
                        }

                        {step === 2 &&
                            <OnlineOrdering2 form={form} />
                        }

                        {step === 3 &&
                            <OnlineOrdering3 form={form} />
                        }

                        <div className="flex justify-end gap-2 mt-10">
                            {/* {step > 1 && <Button type="button" className="bg-[#95C22B] hover:bg-[#a2d825] px-14" onClick={handleBack}>Previous</Button>} */}
                            {step < 3 && <Button type="button" variant="capsico" className="w-20" onClick={handleNext}>Next</Button>}
                            {step === 3 && <Button variant="capsico" className="w-20" type="submit">Done</Button>}
                        </div>
                    </form>
                </Form>
            </div>
            {isRegisterSuccessModalOpen &&
                <RegisterSuccessModal
                    isRegisterSuccessModalOpen={isRegisterSuccessModalOpen}
                    setIsRegisterSuccessModalOpen={setIsRegisterSuccessModalOpen}
                />
            }

        </div>
    )
}

export default OnlineOrdering