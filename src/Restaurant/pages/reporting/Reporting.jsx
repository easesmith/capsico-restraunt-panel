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


const Reporting = () => {
    const { pathname } = useLocation();

    return (
        <RestaurantWrapper>
            <div className='w-full'>
                <div className='bg-[#D9F1FD66] px-8 py-5 w-full flex justify-between items-center'>
                    <div className='flex gap-3'>
                        <Link to="live-tracking" className={`font-semibold font-numans ${pathname.includes("live-tracking") ? "text-[#1AA6F1]" : "text-[#000000]"}`}>Live Tracking</Link>
                        <Link to="business-reports" className={`font-semibold font-numans ${pathname.includes("business-reports") ? "text-[#1AA6F1]" : "text-[#000000]"}`}>Business Reports</Link>
                    </div>


                    <Select>
                        <SelectTrigger className="w-[180px]">
                            <img src={filterIcon} alt="" /> All Outlets
                            {/* <SelectValue placeholder="All Outlets" /> */}
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="light">Light</SelectItem>
                            <SelectItem value="dark">Dark</SelectItem>
                            <SelectItem value="system">System</SelectItem>
                        </SelectContent>
                    </Select>
                </div>
                <p className='py-5 text-[#637D92] text-lg font-semibold text-center'>Wednesday Showdown: Battling Stats from July 10 vs. Now</p>
                <div>
                    <Routes>
                        <Route path="/live-tracking" element={<LiveTracking />} />
                        <Route path="/business-reports" element={<BusinessReports />} />
                    </Routes>
                </div>
            </div>
        </RestaurantWrapper>
    )
}

export default Reporting