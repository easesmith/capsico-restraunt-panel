import { Link, Route, Routes, useLocation } from 'react-router-dom'
import RestaurantWrapper from '../../components/restaurantWrapper/RestaurantWrapper'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import filterIcon from '@/assets/filter 1.png'
import LiveTracking from './LiveTracking'
import BusinessReports from './BusinessReports'
import { Button } from '@/components/ui/button'
import { LiaDownloadSolid } from "react-icons/lia";
import { IoIosArrowDown } from "react-icons/io";
import { useState } from 'react'
import FilterModal from '@/Restaurant/components/filterModal/FilterModal'

const Reporting = () => {
    const { pathname } = useLocation();
    const [isFilterModalOpen, setIsFilterModalOpen] = useState(false);
    const [selectedFilters, setSelectedFilters] = useState("");

    console.log("filters", selectedFilters);


    return (
        <RestaurantWrapper>
            <div className='w-full'>
                <div className='bg-[#D9F1FD66] px-8 py-5 w-full flex justify-between items-center'>
                    <div className='flex gap-3'>
                        <Link to="live-tracking" className={`class-base3 ${pathname.includes("live-tracking") ? "primary-color" : "text-[#000000]"}`}>Live Tracking</Link>
                        <Link to="business-reports" className={`class-base3 ${pathname.includes("business-reports") ? "primary-color" : "text-[#000000]"}`}>Business Reports</Link>
                    </div>


                    <div className='flex gap-5 items-center'>
                        {pathname.includes("business-reports") && <Button variant="outline" className="bg-[#D9F1FD66] flex items-center gap-3 border-[#C2CDD6]">
                            <LiaDownloadSolid className='text-[#4A5E6D] class-xl1' />
                            <span className='text-[#4A5E6D] font-numans font-medium'>Export</span>
                        </Button>}
                        <Button onClick={() => setIsFilterModalOpen(true)} variant="outline" className="bg-[#D9F1FD66] flex items-center gap-3 border-[#C2CDD6]">
                            <img src={filterIcon} alt="" />
                            <span className='text-[#4A5E6D] font-numans font-medium'>All Outlets</span>
                            <IoIosArrowDown className='text-[#4A5E6D]' />
                        </Button>
                    </div>
                </div>

                <div>
                    <Routes>
                        <Route path="/live-tracking" element={<LiveTracking />} />
                        <Route path="/business-reports" element={<BusinessReports />} />
                    </Routes>
                </div>
                {isFilterModalOpen &&
                    <FilterModal
                        isFilterModalOpen={isFilterModalOpen}
                        setIsFilterModalOpen={setIsFilterModalOpen}
                        setSelectedFilters={setSelectedFilters}
                    />
                }
            </div>
        </RestaurantWrapper>
    )
}

export default Reporting