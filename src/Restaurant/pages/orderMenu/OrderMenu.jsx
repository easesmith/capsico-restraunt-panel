import { Button } from "@/components/ui/button";
import React, { useState } from "react";
import { HiOutlineAdjustmentsHorizontal } from "react-icons/hi2";
import { IoIosArrowForward } from "react-icons/io";
import { FiPlusCircle } from "react-icons/fi";
import { FiEdit2 } from "react-icons/fi";
import RestaurantWrapper from "@/Restaurant/components/restaurantWrapper/RestaurantWrapper";
import DownImg from '@/assets/down.png'
import MaskGroupInput from '../../../assets/Mask group Input.png'

const Catalog = () => {

  const [activeTab, setActiveTab] = useState("Items");

  const tabs = ["Items", "Picture Gallery", "Add-ons"];
  const [catalog, setCatalog] = useState([
    {
      category: "Starters",
      items: [{ name: "Paneer Tikka (Serves 1)", price: 220 }],
    },
    {
      category: "Combos",
      items: [
        { name: "Egg combo", price: 90 },
        { name: "Chicken combo", price: 120 },
        { name: "Mutton combo", price: 220 },
      ],
    },
    {
      category: "Main Course",
      items: [],
    },
    {
      category: "Main Course",
      items: [],
    },
    {
      category: "Main Course",
      items: [],
    },
    {
      category: "Main Course",
      items: [],
    },
    {
      category: "Main Course",
      items: [],
    },
    {
      category: "Main Course",
      items: [],
    },
  ]);

  return (
    <RestaurantWrapper>
      <p className="bg-[#22C55E4D] five-color class-sm1 text-center py-2">Morning Rush Alert! Please refrain from making any menu changes between 9 am and 11 am to avoid order disruptions.</p>
      <div className="w-full border-b-[3px] border-[#1AA6F1]">
        <div className="flex justify-start gap-3 px-4 py-3">
          {tabs.map((tab) => (
            <button
              key={tab}
              className={`p-[10px] class-xl1 focus:outline-none ${activeTab === tab
                  ? "primary-color border-b-2 border-[#1AA6F1]"
                  : "text-black"
                }`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>
       
      <div className="px-4 mx-auto">
        <div className="flex justify-between items-center border-b mb-4 py-4">
          <h2 className="seven-color class-xl1">Culinary Catalog</h2>
          <Button variant="outline" className="flex justify-center items-center gap-3 third-color class-base2"><HiOutlineAdjustmentsHorizontal className='text-[22px]' /><span className="pr-5">Filter</span><img src={DownImg} className="w-[30px] h-[28px]" /></Button>
        </div>
        {catalog.map((section, idx) => (
          <Section key={idx} section={section} />
        ))}
        <div className="flex gap-4 mt-4">
          <button className="flex items-center gap-3"><FiPlusCircle className="primary-color text-2xl" /><span className="five-color class-xl1">Add Main Menu</span></button>
        </div>
      </div>
    </RestaurantWrapper>
  );
};

const Section = ({ section }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="mb-4">
      <div className="flex justify-between items-center cursor-pointer border-y-[1px] py-4 " >
        <div className="flex justify-center items-center gap-4">
          <button onClick={() => setIsOpen(!isOpen)} className={` transform ${isOpen ? "rotate-90" : ""}`}><IoIosArrowForward className="seven-color text-2xl" /></button>
          <h3 className="seven-color class-lg1">{section.category}</h3>
          <button className={``}><FiEdit2 className="seven-color text-xl" /></button>
        </div>
        <p className="seven-color class-xl1">{section.items.length} Items</p>
      </div>
      {isOpen && (
        <div className="pl-6 mt-2 w-[400px] max-w-[400px]">
          <div className="mb-10">
            {section.items.map((item, idx) => (
              <div key={idx} className="flex justify-between items-center py-4 border-b-[2px] border-dashed">
                <div className="flex items-center">
                  <img src={MaskGroupInput} alt="" className="mr-2 w-[26px] h-[26px]" />
                  <span className="seven-color class-xl1">{item.name}</span>
                </div>
                <span className="seven-color class-xl1">₹{item.price}</span>
              </div>
            ))}
          </div>
          <div className="w-[553px] flex flex-wrap gap-8">
            <button className="flex items-center gap-3"><FiPlusCircle className="primary-color text-2xl" /><span className="five-color class-xl1">Add food item</span></button>
            <button className="flex items-center gap-3"><FiPlusCircle className="primary-color text-2xl" /><span className="five-color class-xl1">Arrange Existing item</span></button>
            <button className="flex items-center gap-3"><FiPlusCircle className="primary-color text-2xl" /><span className="five-color class-xl1">Add food item</span></button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Catalog;
