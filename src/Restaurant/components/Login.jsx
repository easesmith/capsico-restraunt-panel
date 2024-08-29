import googleIcon from '@/assets/google.png';
import indiaIcon from '@/assets/pngegg 1.png';
import emailIcon from '@/assets/vector (4).png';
import { Button } from '@/components/ui/button';
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle
} from "@/components/ui/dialog";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { EmailSchema, PhoneSchema } from '@/schemas/loginSchema';
import { zodResolver } from "@hookform/resolvers/zod";
import { useGoogleLogin } from '@react-oauth/google';
import { useState } from 'react';
import { useForm } from "react-hook-form";
import { FaPhoneAlt } from 'react-icons/fa';
import 'react-phone-input-2/lib/style.css';
import OtpModal from './OtpModal';

const Login = ({ isLoginModalOpen, setIsLoginModalOpen }) => {
    const [isEmail, setIsEmail] = useState(false);
    const [isOtpModalOpen, setIsOtpModalOpen] = useState(false);

    const form = useForm({
        resolver: zodResolver(isEmail ? EmailSchema : PhoneSchema),
        defaultValues: {
            phoneNumber: "",
            email: "",
        }
    })
    const { register, control, watch, setValue, getValues } = form;

    const onSubmit = (data) => {
        console.log("data", data);
        setIsOtpModalOpen(true)
    }

    const handleLoginSuccess = (response) => {
        console.log('Login Success:', response);
    };

    const handleLoginFailure = (error) => {
        console.error('Login Failed:', error);
    };

    const login = useGoogleLogin({
        onSuccess: handleLoginSuccess,
        onError: handleLoginFailure,
    });

    return (
        <Dialog open={isLoginModalOpen} onOpenChange={() => setIsLoginModalOpen(!isLoginModalOpen)}>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle className="font-dmSans text-[32px] text-[#515151]">Login</DialogTitle>
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="w-full py-5 mt-4">
                            {isEmail ?
                                <div className='w-full'>
                                    <FormField
                                        control={control}
                                        name="email"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel className="text-lg text-[#344054] font-inter"></FormLabel>
                                                <FormControl>
                                                    <Input type="email" placeholder="Enter your Email" className="placeholder:text-[#667085] w-full" {...field} />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                </div>
                                : <div className='flex gap-5'>
                                    <FormField
                                        control={control}
                                        name="country"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel className="text-lg text-[#344054] font-inter"></FormLabel>
                                                <FormControl>
                                                    <Select defaultValue='+91' className="">
                                                        <SelectTrigger className="w-[100px]">
                                                            <SelectValue placeholder="Select" />
                                                        </SelectTrigger>
                                                        <SelectContent>
                                                            <SelectItem value="+91">
                                                                <img src={indiaIcon} alt="indiaIcon" />
                                                            </SelectItem>
                                                        </SelectContent>
                                                    </Select>
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                    <div className='w-full'>
                                        <FormField
                                            control={control}
                                            name="phoneNumber"
                                            render={({ field }) => (
                                                <FormItem>
                                                    <FormLabel className="text-lg text-[#344054] font-inter"></FormLabel>
                                                    <FormControl>
                                                        <Input placeholder="+91 (98XXX XXXXX)" className="placeholder:text-[#667085] w-full" {...field} />
                                                    </FormControl>
                                                    <FormMessage />
                                                </FormItem>
                                            )}
                                        />
                                    </div>
                                </div>}

                            <Button type="submit" variant="outline" className="w-full border-[#FFA901] text-[#FFA901] hover:text-white hover:bg-[#FFA901] mt-7">Send OTP</Button>
                        </form>
                    </Form>
                    <p className='text-center font-dmSans font-medium text-[#1F2A37] text-xl my-5'>Or</p>
                </DialogHeader>
                <Button
                    onClick={() => login()}
                    type="button"
                    variant="outline"
                    className="w-full flex justify-center gap-2 border-[#D3D3D3] py-4"
                >
                    <img src={googleIcon} alt="googleIcon" />
                    <span className='class-lg4 text-[#3B3B3B]'>Continue with Google</span>
                </Button>

                {isEmail ?
                    <Button onClick={() => setIsEmail(false)} type="button" variant="outline" className="w-full flex justify-center gap-2 border-[#D3D3D3] py-4 mt-1">
                        <FaPhoneAlt className='text-lg text-[#3B3B3B]' />
                        <span className='class-lg4 text-[#3B3B3B]'>Continue with Phone</span>
                    </Button>
                    : <Button onClick={() => setIsEmail(true)} type="button" variant="outline" className="w-full flex justify-center gap-2 border-[#D3D3D3] py-4 mt-1">
                        <img src={emailIcon} alt="emailIcon" />
                        <span className='class-lg4 text-[#3B3B3B]'>Continue with Email</span>
                    </Button>}
                {isOtpModalOpen &&
                    <OtpModal
                        isOtpModalOpen={isOtpModalOpen}
                        setIsOtpModalOpen={setIsOtpModalOpen}
                        isEmail={isEmail}
                    />
                }
                <DialogDescription></DialogDescription>
            </DialogContent>
        </Dialog >
    )
}

export default Login