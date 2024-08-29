import MetricLi from "@/Restaurant/components/reporting/MetricLi";
import { TfiInfoAlt } from "react-icons/tfi";
import overview from "@/data/overview.json";
import userExperience from "@/data/userExperience.json";
import userFunnel from "@/data/userFunnel.json";
import marketing from "@/data/marketing.json";

const Metric = () => {

    return (
        <div className="bg-white">
            <div className="grid grid-cols-[310px_250px_200px_200px] gap-4 px-5 py-3 border-b border-[#CED7DE]">
                <div className="flex justify-between items-center">
                    <p className="text-2xl text-[#323F49] font-medium font-numans">Metric</p>
                    <TfiInfoAlt size={25} />
                </div>
                <div></div>
                <div className="flex flex-col items-center">
                    <p className="class-lg3 text-[#323F49]">Week 27</p>
                    <p className="text-[#4A5E6D] class-sm1">1-7 Jul 2024</p>
                </div>
                <div className="flex flex-col items-center">
                    <p className="class-lg3 text-[#323F49]">Week 28</p>
                    <p className="text-[#4A5E6D] class-sm1">8-14 Jul 2024</p>
                </div>
            </div>

            <p className="class-xl1 text-[#4A5E6D] py-4 px-5 font-semibold border-b border-[#CED7DE] font-numans">Overview</p>
            {overview.map((item, i) => (
                <MetricLi
                    key={i}
                    title={item.title}
                    week1={item.week1}
                    week2={item.week2}
                />
            ))}

            <p className="class-xl1 text-[#4A5E6D] py-4 px-5 font-semibold border-b border-[#CED7DE] font-numans">User Experience</p>
            {userExperience.map((item, i) => (
                <MetricLi
                    key={i}
                    title={item.title}
                    week1={item.week1}
                    week2={item.week2}
                />
            ))}

            <p className="class-xl1 text-[#4A5E6D] py-4 px-5 font-semibold border-b border-[#CED7DE] font-numans">User Funnel</p>
            {userFunnel.map((item, i) => (
                <MetricLi
                    key={i}
                    title={item.title}
                    week1={item.week1}
                    week2={item.week2}
                />
            ))}

            <p className="class-xl1 text-[#4A5E6D] py-4 px-5 font-semibold border-b border-[#CED7DE] font-numans">Marketing</p>
            {marketing.map((item, i) => (
                <MetricLi
                    key={i}
                    title={item.title}
                    week1={item.week1}
                    week2={item.week2}
                />
            ))}

            <div className="grid grid-cols-[310px_250px_200px_200px] gap-4 px-5 items-center py-4 border-b border-[#CED7DE]">
                <p className="class-xl1 text-[#4A5E6D] font-semibold font-numans">Latest Menu</p>
                <p className='text-[#4A5E6D] class-sm3'>Select one outlet to view this</p>
            </div>
        </div>
    )
}

export default Metric