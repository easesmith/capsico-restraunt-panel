import { Button } from "@/components/ui/button";
import React, { useState } from "react";
import { HiOutlineAdjustmentsHorizontal } from "react-icons/hi2";
import { FiPlusCircle } from "react-icons/fi";
import RestaurantWrapper from "@/Restaurant/components/restaurantWrapper/RestaurantWrapper";
import DownImg from '@/assets/down.png'
import MaskGroupInput2 from '../../../assets/toppng.com-veg-1180x1172 1.png'
import { BiSolidRightArrow } from "react-icons/bi";
import ItemComp from "@/Restaurant/components/orderMenu/ItemComp";
import { RiDeleteBinLine } from "react-icons/ri";

const Catalog = () => {

  const [activeTab, setActiveTab] = useState("Items");
  const [isExpanded, setIsExpanded] = useState(false)
  const [addCategory, setAddCategory] = useState(true)

  const [isOpena, setIsOpena] = useState(true);

  const toggleOpena = () => {
    setIsOpena(!isOpena);
  };


  const tabs = ["Items", "Picture Gallery", "Add-ons"];

  const data = [
    {
      category: "Combos"
    },
    {
      category: "Main Course"
    },
    {
      category: "Combos"
    },
    {
      category: "Starter"
    },
    {
      category: "Rice"
    },
    {
      category: "Snacks"
    },
    {
      category: "Bread"
    }
  ]

  return (
    <RestaurantWrapper>
      <p className="bg-[#22C55E4D] five-color class-sm1 text-center py-2">Morning Rush Alert! Please refrain from making any menu changes between 9 am and 11 am to avoid order disruptions.</p>
      <div className="w-full px-4">
        <div className="flex justify-start gap-3 py-3">
          {tabs.map((tab) => (
            <button
              key={tab}
              className={`p-[10px] class-base1 focus:outline-none ${activeTab === tab
                ? "primary-color border-b-[3px] border-[#1AA6F1]"
                : "text-black"
                }`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>
        <div>
          <h3 className="five-color class-base1 py-3">Sample Food Menu item</h3>
          <div className="bg-[#D9F1FD] px-6 pt-7 pb-2">
            <div className="flex items-center justify-start gap-3">
              <BiSolidRightArrow onClick={toggleOpena} className={`${isOpena ? 'transform rotate-90' : ''} cursor-pointer`} />
              <span className="five-color class-base1">Starters</span>
            </div>
            {isOpena ? <div className=" flex items-center gap-2 pl-3 py-1">
              <img src={MaskGroupInput2} className="w-[27px] h-[27px]" alt="" />
              <span className="five-color class-base1">Paneer Tikka (Serves 1)</span>
              <span className="primary-color class-base1">₹220</span>
            </div> : ''}
          </div>
        </div>
        <div className="flex justify-between items-center py-4 border-b-2">
          <h2 className="seven-color class-xl1">Culinary Catalog</h2>
          <Button variant="outline" className="flex justify-center items-center gap-3 third-color class-base2"><HiOutlineAdjustmentsHorizontal className='text-[22px]' /><span className="pr-5">Filter</span><img src={DownImg} className="w-[30px] h-[28px]" /></Button>
        </div>
        {
          data.map((e, i) => {
            return <ItemComp key={i} title={e.category} />
          })
        }
        <div className="flex gap-4 mt-4 mb-8">
          {
            addCategory ?
              <button className="w-[553px] flex items-center gap-3" onClick={() => setAddCategory(false)}><FiPlusCircle className="primary-color text-lg" /><span className="five-color class-lg1">Add Main Menu</span></button>
              : <div className=" w-full flex flex-col gap-5">
                <div className="flex justify-between items-center">
                  <input type="text" placeholder="Sample : Main Course Veg" className="w-fit min-w-[300px] bg-[#E7EBEF33] border-[1px] border-[#1AA1F1] rounded-lg py-5 px-4 text-center placeholder:fourteen-color " />
                  <RiDeleteBinLine className="text-[red] text-[20px] cursor-pointer" onClick={() => setAddCategory(true)} />
                </div>
                <div>
                  <p className="five-color class-base1">Add category Uncertainty? Try Combos! </p>
                </div>
              </div>
          }
        </div>
      </div>
    </RestaurantWrapper>
  );
};

export default Catalog;
