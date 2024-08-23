import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle
} from "@/components/ui/dialog";
import {
    InputOTP,
    InputOTPGroup,
    InputOTPSlot
} from "@/components/ui/input-otp";

import { useEffect, useState } from "react";

const OtpModal = ({ isOtpModalOpen, setIsOtpModalOpen, isEmail = false }) => {
    const [timeLeft, setTimeLeft] = useState(60);

    useEffect(() => {
        if (timeLeft > 0) {
            const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
            return () => clearTimeout(timer);
        }
    }, [timeLeft]);

    const handleResendOtp = () => {
        setTimeLeft(60);
    };

    return (
        <Dialog open={isOtpModalOpen} onOpenChange={() => setIsOtpModalOpen(!isOtpModalOpen)}>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle className="font-dmSans text-[32px] text-[#515151]">Enter Otp</DialogTitle>
                    <h3 className="text-[#3F83F8] font-medium text-2xl text-center pt-8">
                        {isEmail ?
                            "We have sent a verification code to georgia.young@example.com"
                            : "OTP sent successfully"}
                    </h3>
                    <span className="text-4xl font-medium font-dmSans text-center text-[#515151] pt-3">{Math.floor(timeLeft / 60)}:{String(timeLeft % 60).padStart(2, '0')}</span>

                    <div className="pt-5">
                        <InputOTP maxLength={6}>
                            <InputOTPGroup>
                                <InputOTPSlot className="" index={0} />
                            </InputOTPGroup>
                            <InputOTPGroup>
                                <InputOTPSlot index={1} />
                            </InputOTPGroup>
                            <InputOTPGroup>
                                <InputOTPSlot index={2} />
                            </InputOTPGroup>
                            <InputOTPGroup>
                                <InputOTPSlot index={3} />
                            </InputOTPGroup>
                            <InputOTPGroup>
                                <InputOTPSlot index={4} />
                            </InputOTPGroup>
                            <InputOTPGroup>
                                <InputOTPSlot index={5} />
                            </InputOTPGroup>
                        </InputOTP>
                    </div>
                </DialogHeader>
                <div className="flex justify-center gap-1 mt-3">
                    <h3 className="text-2xl font-dmSans font-bold text-[#1F2A37]">Did’t get the OTP?</h3>
                    <button onClick={handleResendOtp} disabled={timeLeft !== 0} className="text-2xl font-dmSans font-normal disabled:cursor-not-allowed text-[#6B7280]">Resend Now</button>
                </div>
                <DialogDescription></DialogDescription>
            </DialogContent>
        </Dialog >
    )
}

export default OtpModal