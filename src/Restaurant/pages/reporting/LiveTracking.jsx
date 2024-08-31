import businessIcon from "@/assets/6843047_business_development_financial_growing_growth_icon 1.png";
import funnelIcon from "@/assets/9025666_funnel_icon 1.png";
import accountIcon from "@/assets/5094668_account_group_team_user_icon 1.png";
import informationIcon from "@/assets/information 1.png";
import offerIcon from "@/assets/offerIcon.png";
import latestDishIcon from "@/assets/latestDishIcon.png";
import BusinessOverviewLi from "@/Restaurant/components/reporting/BusinessOverviewLi";
import { LineChartComp } from "@/Restaurant/components/LineChart";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

const LiveTracking = () => {
  return (
    <div className='p-10 pt-0'>
      <p className='py-5 text-[#637D92] class-lg1 text-center'>Wednesday Showdown: Battling Stats from July 10 vs. Now</p>
      <div className="bg-white p-6 rounded-xl">
        <div className="flex justify-between items-center">
          <div className="flex gap-2 items-center">
            <img src={businessIcon} alt="businessIcon" />
            <h4 className="class-lg1 text-[#4A5E6D] font-numans">Businesss Overview</h4>
            <img src={informationIcon} alt="" />
          </div>
          <div>
            <button className="class-lg1 flex primary-color font-numans">
              See resturant level Info
              <MdOutlineKeyboardArrowRight size={26} />
            </button>
          </div>
        </div>
        <div className="mt-4">
          <BusinessOverviewLi name="Sales" />
          <BusinessOverviewLi name="Completed Orders" />
          <BusinessOverviewLi name="Average Order Value" />
          <BusinessOverviewLi name="Market Share" last={true} />
        </div>
      </div>

      <div className="bg-white p-6 mt-6 rounded-xl">
        <div className="flex justify-between items-center">
          <div className="flex gap-2 items-center">
            <img src={accountIcon} alt="businessIcon" />
            <h4 className="class-lg1 text-[#4A5E6D] font-numans">User Experience</h4>
            <img src={informationIcon} alt="" />
          </div>
          <div>
            <button className="class-lg1 flex primary-color font-numans">
              See resturant level Info
              <MdOutlineKeyboardArrowRight size={26} />
            </button>
          </div>
        </div>
        <div className="mt-4">
          <div className={`flex justify-between items-center py-4 border-b-2 border-[#C2CDD6] border-dashed mt-2`}>
            <h4 className="class-lg1 text-[#4A5E6D] font-numans">Reviews</h4>
            <div className="flex justify-end">
              <p className="class-lg1 font-numans text-[#4A5E6D]">View business reports</p>
            </div>
          </div>

          <div className={`flex justify-between items-center py-4 border-b-2 border-[#C2CDD6] border-dashed mt-2`}>
            <h4 className="class-lg1 text-[#4A5E6D] font-numans">Unsatisfied Orders</h4>
          </div>
          <div className="pl-10 border-b-2 border-[#C2CDD6] border-dashed">
            <BusinessOverviewLi name="Rejected Orders" last={true} />
            <BusinessOverviewLi name="Poor rated Orders" last={true} />
            <BusinessOverviewLi name="Delayed Orders" last={true} />
            <BusinessOverviewLi name="Complaints" last={true} />
          </div>
          <BusinessOverviewLi name="Lost Orders" />
          <BusinessOverviewLi name="Online Percentage" last={true} />
        </div>
      </div>

      <div className="bg-white p-6 mt-6 rounded-xl">
        <div className="flex justify-between items-center">
          <div className="flex gap-2 items-center">
            <img src={funnelIcon} alt="businessIcon" />
            <h4 className="class-lg1 text-[#4A5E6D] font-numans">User Funnel</h4>
            <img src={informationIcon} alt="" />
          </div>
          <div>
            <button className="class-lg1 flex primary-color font-numans">
              See resturant level Info
              <MdOutlineKeyboardArrowRight size={26} />
            </button>
          </div>
        </div>
        <div className="mt-4 border-t-2 border-[#C2CDD6] border-dashed">
          <div className="border-b-2 border-[#C2CDD6] border-dashed">
            <BusinessOverviewLi name="Overall Impressions" last={true} />
            <BusinessOverviewLi name="Impressions to menu" last={true} />
            <BusinessOverviewLi name="Menu to Chekout" last={true} />
            <BusinessOverviewLi name="Checkout to order" last={true} />
          </div>
          <BusinessOverviewLi name="New users" />
          <BusinessOverviewLi name="Repeat users" />
          <BusinessOverviewLi name="Lapsed users" last={true} />
        </div>
      </div>

      <div className="bg-white p-6 mt-6 rounded-xl">
        <div className="flex justify-between items-center">
          <div className="flex gap-2 items-center">
            <img src={offerIcon} alt="businessIcon" />
            <h4 className="class-lg1 text-[#4A5E6D] font-numans">Promotions & Offers</h4>
            <img src={informationIcon} alt="" />
          </div>
          <div>
            <button className="class-lg1 flex primary-color font-numans">
              See resturant level Info
              <MdOutlineKeyboardArrowRight size={26} />
            </button>
          </div>
        </div>
        <div className="mt-4 border-t-2 border-[#C2CDD6] border-dashed">
          <BusinessOverviewLi name="Sales from Promotions" />
          <BusinessOverviewLi name="Sales from Offers" last={true} />
        </div>
      </div>

      <div className="bg-white p-6 mt-6 rounded-xl">
        <div className="flex justify-between items-center">
          <div className="flex gap-2 items-center">
            <img src={latestDishIcon} alt="businessIcon" />
            <h4 className="class-lg1 text-[#4A5E6D] font-numans">Latest Dish</h4>
            <img src={informationIcon} alt="" />
          </div>
          <div>
            <button className="class-lg1 flex primary-color font-numans">
              See resturant level Info
              <MdOutlineKeyboardArrowRight size={26} />
            </button>
          </div>
        </div>
        <div className="mt-4 border-t-2 border-[#C2CDD6] border-dashed">
          <p className="py-4 class-lg1 font-numans text-[#4A5E6D]">View business reports</p>
        </div>
      </div>
    </div>
  )
}

export default LiveTracking