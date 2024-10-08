import guidelineImg1 from "@/assets/guidelineImg1.avif";
import guidelineImg2 from "@/assets/guidelineImg2.avif";
import guidelineImg3 from "@/assets/guidelineImg3.png";
import guidelineImg4 from "@/assets/guidelineImg4.avif";
import guidelineImg5 from "@/assets/guidelineImg5.png";
import guidelineImg6 from "@/assets/guidelineImg6.png";
import guidelineImg7 from "@/assets/guidelineImg7.avif";
import guidelineImg8 from "@/assets/guidelineImg8.avif";
import { FaCheck, FaXmark } from "react-icons/fa6";

const PhotoGuidelines = () => {
    return (
        <div className="p-5">
            <div className="border-b-2 border-dashed pb-6">
                <div className="flex gap-5">
                    <div className="relative w-[40%]">
                        <img className="w-full" src={guidelineImg1} alt="" />
                        <div className="flex justify-center items-center w-10 h-10 rounded-full absolute -right-2 -top-2 bg-[#BF2938] border-[3px] border-white">
                            <FaXmark className="text-white text-xl" />
                        </div>
                    </div>
                    <div className="relative w-[40%]">
                        <img className="w-full" src={guidelineImg2} alt="" />
                        <div className="flex justify-center items-center w-10 h-10 rounded-full absolute -right-2 -top-2 bg-[#BF2938] border-[3px] border-white">
                            <FaXmark className="text-white text-xl" />
                        </div>
                    </div>
                </div>
                <p className="mt-2 class-base2 w-[80%]">Photo should be original, photo taken from the internet and AI generated photos will be rejected.</p>
            </div>

            <div className="border-b-2 border-dashed pb-6 mt-6">
                <div className="flex gap-5">
                    <div className="relative w-[40%]">
                        <img className="w-full" src={guidelineImg3} alt="" />
                        <div className="flex justify-center items-center w-10 h-10 rounded-full absolute -right-2 -top-2 bg-[#24963F] border-[3px] border-white">
                            <FaCheck className="text-white text-xl" />
                        </div>
                    </div>
                    <div className="relative w-[40%]">
                        <img className="w-full" src={guidelineImg4} alt="" />
                        <div className="flex justify-center items-center w-10 h-10 rounded-full absolute -right-2 -top-2 bg-[#BF2938] border-[3px] border-white">
                            <FaXmark className="text-white text-xl" />
                        </div>
                    </div>
                </div>
                <p className="mt-2 class-base2 w-[80%]">Image should not be zoomed in.</p>
            </div>

            <div className="border-b-2 border-dashed pb-6 mt-6">
                <div className="flex gap-5">
                    <div className="relative w-[40%]">
                        <img className="w-full" src={guidelineImg5} alt="" />
                        <div className="flex justify-center items-center w-10 h-10 rounded-full absolute -right-2 -top-2 bg-[#24963F] border-[3px] border-white">
                            <FaCheck className="text-white text-xl" />
                        </div>
                    </div>
                    <div className="relative w-[40%]">
                        <img className="w-full" src={guidelineImg6} alt="" />
                        <div className="flex justify-center items-center w-10 h-10 rounded-full absolute -right-2 -top-2 bg-[#BF2938] border-[3px] border-white">
                            <FaXmark className="text-white text-xl" />
                        </div>
                    </div>
                </div>
                <p className="mt-2 class-base2 w-[80%]">Food should be in the centre of the frame.</p>
            </div>

            <div className="pb-6 mt-6">
                <div className="flex gap-5">
                    <div className="relative w-[40%]">
                        <img className="w-full" src={guidelineImg7} alt="" />
                        <div className="flex justify-center items-center w-10 h-10 rounded-full absolute -right-2 -top-2 bg-[#24963F] border-[3px] border-white">
                            <FaCheck className="text-white text-xl" />
                        </div>
                    </div>
                    <div className="relative w-[40%]">
                        <img className="w-full" src={guidelineImg8} alt="" />
                        <div className="flex justify-center items-center w-10 h-10 rounded-full absolute -right-2 -top-2 bg-[#BF2938] border-[3px] border-white">
                            <FaXmark className="text-white text-xl" />
                        </div>
                    </div>
                </div>
                <p className="mt-2 class-base2 w-[80%]">Photo should be clear and not blurred.</p>
            </div>
        </div>
    )
}

export default PhotoGuidelines