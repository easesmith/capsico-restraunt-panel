import { Button } from '@/components/ui/button'
import registerAndLoginImg from '@/assets/Rectangle 6103.png'
import { Link } from 'react-router-dom'
import { Separator } from "@/components/ui/separator"
import { useState } from 'react'
import Login from '../components/Login'
import { GoogleOAuthProvider } from '@react-oauth/google'

const RegisterAndLogin = () => {
    const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
    return (
        <div className='max-w-[1350px] w-full py-5 mx-auto'>
            <div>
                <h2 className='text-[#323F49] inline-block font-extrabold font-inter text-3xl px-4'>Capsico</h2>
                <Separator className="bg-black h-[3px] w-36 my-2" />
                <p className='text-[#323F49] text-xs font-bold font-dmSans px-4'>Restaurant Partner</p>
            </div>

            <div className='max-w-lg w-full mx-auto'>
                <h1 className='font-semibold text-2xl text-[#4A67FF] font-numans text-center'>Capsico Restaurant Partner Dashboard</h1>
                <img src={registerAndLoginImg} className='w-4/5 mx-auto mt-2' alt="registerAndLoginImg" />
                <Button onClick={() => setIsLoginModalOpen(true)} variant="capsico" className="w-full mt-4 font-numans text-lg py-6">Login</Button>
                <Link to={"/restaurant/register"}>
                    <Button variant="capsico" className="w-full mt-5 font-numans text-lg py-6">Register</Button>
                </Link>
                <p className='font-numans font-medium text-xl text-center mt-4'>By continuing, you agree to our</p>
                <ul className='flex justify-center gap-4 mt-2 items-center'>
                    <li className='text-[#7C7C7C] text-lg border-b border-dashed border-[#7C7C7C]'>Terms of service</li>
                    <li className='text-[#7C7C7C] text-lg border-b border-dashed border-[#7C7C7C]'>Privacy Policy</li>
                    <li className='text-[#7C7C7C] text-lg border-b border-dashed border-[#7C7C7C]'>Code of Conduct</li>
                </ul>
            </div>
            {isLoginModalOpen &&
                <GoogleOAuthProvider clientId={import.meta.env.VITE_CLIENT_ID}>
                    <Login
                        isLoginModalOpen={isLoginModalOpen}
                        setIsLoginModalOpen={setIsLoginModalOpen}
                    />
                </GoogleOAuthProvider>
            }
        </div>
    )
}

export default RegisterAndLogin