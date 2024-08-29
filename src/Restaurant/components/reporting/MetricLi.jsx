import { TfiInfoAlt } from 'react-icons/tfi'

const MetricLi = ({ title, week1, week2 }) => {
    return (
        <div className="grid grid-cols-[310px_250px_200px_200px] gap-4 px-5 py-3 border-b border-[#CED7DE]">
            <div className="flex justify-between items-center">
                <p className="text-[#7991A4] class-base3">{title}</p>
            </div>
            <div className="flex items-center justify-center">
                <div className="relative flex items-center">
                    <div className="flex items-center justify-between w-full">
                        <div className="flex items-center">
                            <div className="w-[7px] h-[7px] bg-[#1AA6F1] rounded-full"></div>
                            <div className="h-[1px] w-40 bg-[#1AA6F1]"></div>
                        </div>
                        <div className="flex items-center">
                            <div className="w-[7px] h-[7px] bg-[#1AA6F1] rounded-full"></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-col items-center">
                <p className="text-[#4A5E6D] text-sm font-numans font-medium">{week1 || "-"}</p>
            </div>
            <div className="flex flex-col items-center">
                <p className="text-[#4A5E6D] text-sm font-numans font-medium">{week2 || "-"}</p>
            </div>
        </div>
    )
}

export default MetricLi