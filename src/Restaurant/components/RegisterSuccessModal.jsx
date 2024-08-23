import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { FaCheck } from "react-icons/fa";

const RegisterSuccessModal = ({ isRegisterSuccessModalOpen, setIsRegisterSuccessModalOpen }) => {

    return (
        <AlertDialog open={isRegisterSuccessModalOpen} onOpenChange={() => setIsRegisterSuccessModalOpen(!isRegisterSuccessModalOpen)}>
            <AlertDialogContent className="py-14 px-10">
                <AlertDialogHeader>
                    <div className="w-20 h-20 mx-auto rounded-full bg-[#22C55E] flex justify-center items-center">
                        <FaCheck className="text-white text-4xl" />
                    </div>
                    <AlertDialogTitle className="font-normal text-center text-[22px] text-[#000000]">Your Restaurant listing details submitted successfully</AlertDialogTitle>
                </AlertDialogHeader>
                <p className="text-[#7991A4] text-sm font-normal text-center w-[80%] mx-auto">Our team will review the details and notify you once your page is live on Capsico!</p>
                <AlertDialogFooter>
                    {/* <AlertDialogAction className="w-full bg-[#1AA6F1]">Continue</AlertDialogAction> */}
                    <Button variant="capsico" onClick={() => setIsRegisterSuccessModalOpen(false)} className="font-dmSans font-normal disabled:cursor-not-allowed text-white w-full text-lg h-12 rounded-sm">Okay</Button>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog >

    )
}

export default RegisterSuccessModal