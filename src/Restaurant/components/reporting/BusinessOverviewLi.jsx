
const BusinessOverviewLi = ({ name, last = false }) => {
    return (
        <div className={`grid grid-cols-[30%_40%_30%] items-center py-4 ${last ? "" : "border-b-2"} border-[#C2CDD6] border-dashed mt-2`}>
            <h4 className=" text-[#4A5E6D] class-base1">{name}</h4>
            <div>
                <div className="flex items-center justify-center">
                    <div className="relative flex items-center">
                        <div className="flex items-center justify-between w-full">
                            <div className="flex items-center">
                                <div className="w-[10px] h-[10px] bg-[#1AA6F1] rounded-full"></div>
                                <div className="h-[2px] w-20 bg-[#1AA6F1]"></div>
                            </div>
                            <div className="flex items-center">
                                <div className="w-[10px] h-[10px] bg-[#1AA6F1] rounded-full"></div>
                                <div className="h-[2px] w-20 bg-[#1AA6F1]"></div>
                            </div>
                            <div className="flex items-center">
                                <div className="w-[10px] h-[10px] bg-[#1AA6F1] rounded-full"></div>
                                <div className="h-[2px] w-20 bg-[#1AA6F1]"></div>
                            </div>
                            <div className="flex items-center">
                                <div className="w-[10px] h-[10px] bg-[#1AA6F1] rounded-full"></div>
                                <div className="h-[2px] w-20 bg-[#1AA6F1]"></div>
                            </div>
                            <div className="flex items-center">
                                <div className="w-[10px] h-[10px] bg-[#1AA6F1] rounded-full"></div>
                            </div>
                        </div>
                    </div>

                </div>
                {/* <LineChartComp /> */}
            </div>
            <div className="flex justify-end">
                {!last ? <div className="flex gap-3">
                    <p className="class-lg1   text-[#4A5E6D]">₹0</p>
                    <p className="bg-[#E7EBEF] h-7 w-14 flex justify-center">0%</p>
                </div>
                    : <p className="class-lg1   text-[#4A5E6D]">View business reports</p>}
            </div>
        </div>
    )
}

export default BusinessOverviewLi