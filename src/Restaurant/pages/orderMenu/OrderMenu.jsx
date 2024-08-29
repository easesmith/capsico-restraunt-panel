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
      <p className="bg-[#22C55E4D] text-[#000000] text-sm text-center font-normal font-numans py-2">Morning Rush Alert! Please refrain from making any menu changes between 9 am and 11 am to avoid order disruptions.</p>
      <div className="w-full border-b-[3px] border-[#1AA6F1]">
        <div className="flex justify-start gap-3 px-4 py-3">
          {tabs.map((tab) => (
            <button
              key={tab}
              className={`p-[10px] text-xl font-normal font-numans focus:outline-none ${activeTab === tab
                ? "text-[#1AA6F1] border-b-[3px] border-[#1AA6F1]"
                : "text-black"
                }`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>
      <div className="p-4">
      <h2 className="text-lg font-semibold mb-2">Sample Food Menu item</h2>
      <div className="bg-blue-100 p-4 rounded-md">
        {/* Dropdown toggle */}
        <div className="flex items-center cursor-pointer" onClick={() => setIsExpanded(!isExpanded)}>
          <span className={`mr-2 ${isExpanded ? 'rotate-90' : ''}`}>▼</span>
          <span className="font-semibold">Starters</span>
        </div>
        {/* Menu items - only shown when expanded */}
        {isExpanded && (
          <div className="mt-2 ml-6 flex items-center space-x-2">
            {/* Radio button styled as green */}
            <input type="radio" id="paneer-tikka" name="menu-item" className="form-radio text-green-600" checked readOnly />
            <label htmlFor="paneer-tikka" className="flex items-center">
              Paneer Tikka (Serves 1)
              <span className="text-blue-600 ml-2">₹220</span>
            </label>
          </div>
        )}
      </div>
    </div>
      <div className="px-4 mx-auto">
        <div className="flex justify-between items-center border-b mb-4 py-4">
          <h2 className="text-[#323F49] text-xl font-normal font-numans">Culinary Catalog</h2>
          <Button variant="outline" className="flex justify-center items-center gap-3 text-[#4A5E6D] text-[16px] font-normal"><HiOutlineAdjustmentsHorizontal className='text-[22px]' /><span className="pr-5">Filter</span><img src={DownImg} className="w-[30px] h-[28px]" /></Button>
        </div>
        {catalog.map((section, idx) => (
          <Section key={idx} section={section} />
        ))}
        <div className="flex gap-4 mt-4">
          <button className="flex items-center gap-3"><FiPlusCircle className="text-[#1AA6F1] text-2xl" /><span className="text-[#000000] text-xl font-normal font-numans">Add Main Menu</span></button>
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
          <button onClick={() => setIsOpen(!isOpen)} className={` transform ${isOpen ? "rotate-90" : ""}`}><IoIosArrowForward className="text-[#323F49] text-2xl" /></button>
          <h3 className="text-[#323F49] text-xl font-normal font-numans">{section.category}</h3>
          <button className={``}><FiEdit2 className="text-[#323F49] text-xl" /></button>
        </div>
        <p className="text-[#323F49] text-xl font-normal font-numans">{section.items.length} Items</p>
      </div>
      {isOpen && (
        <div className="pl-6 mt-2 w-[400px] max-w-[400px]">
          <div className="mb-10">
            {section.items.map((item, idx) => (
              <div key={idx} className="flex justify-between items-center py-4 border-b-[2px] border-dashed">
                <div className="flex items-center">
                  <img src={MaskGroupInput} alt="" className="mr-2 w-[26px] h-[26px]" />
                  <span className="text-[#323F49] text-xl font-normal font-numans">{item.name}</span>
                </div>
                <span className="text-[#323F49] text-xl font-normal font-numans">₹{item.price}</span>
              </div>
            ))}
          </div>
          <div className="w-[553px] flex flex-wrap gap-8">
            <button className="flex items-center gap-3"><FiPlusCircle className="text-[#1AA6F1] text-2xl" /><span className="text-[#000000] text-xl font-normal font-numans">Add food item</span></button>
            <button className="flex items-center gap-3"><FiPlusCircle className="text-[#1AA6F1] text-2xl" /><span className="text-[#000000] text-xl font-normal font-numans">Arrange Existing item</span></button>
            <button className="flex items-center gap-3"><FiPlusCircle className="text-[#1AA6F1] text-2xl" /><span className="text-[#000000] text-xl font-normal font-numans">Add food item</span></button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Catalog;
