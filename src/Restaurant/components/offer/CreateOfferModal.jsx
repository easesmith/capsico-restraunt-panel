import { Sheet, SheetContent } from '@/components/ui/sheet'
import { useState } from 'react'
import CreateOfferModal1 from './CreateOfferModal1'
import CreateOfferModal2 from './CreateOfferModal2'
import CreateOfferModal3 from './CreateOfferModal3'

const CreateOfferModal = ({ isCreateCouponModalOpen, setIsCreateCouponModalOpen }) => {
    const [step, setStep] = useState(1);
    const [apiData, setApiData] = useState("");

    console.log("apiData: ", apiData);

    return (
        <Sheet open={isCreateCouponModalOpen} onOpenChange={setIsCreateCouponModalOpen}>
            <SheetContent className='w-[561px] bg-[#FFFFFF] px-0 py-5 overflow-y-scroll'>
                <h2 className="class-base4 five-color px-4 py-2 border-b-[1px] border-[green]">Create New Offer</h2>
                {step === 1 &&
                    <CreateOfferModal1 setApiData={setApiData} setStep={setStep} />
                }

                {step === 2 &&
                    <CreateOfferModal2 setApiData={setApiData} setStep={setStep} />
                }

                {step === 3 &&
                    <CreateOfferModal3 apiData={apiData} setStep={setStep} setIsCreateCouponModalOpen={setIsCreateCouponModalOpen} />
                }
            </SheetContent>
        </Sheet>
    )
}

export default CreateOfferModal