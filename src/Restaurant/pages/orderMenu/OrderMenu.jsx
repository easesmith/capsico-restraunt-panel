import { Button } from "@/components/ui/button";
import React, { useState } from "react";
import { HiOutlineAdjustmentsHorizontal } from "react-icons/hi2";
import { IoIosArrowForward } from "react-icons/io";
import { FiPlusCircle } from "react-icons/fi";
import { FiEdit2 } from "react-icons/fi";
import RestaurantWrapper from "@/Restaurant/components/restaurantWrapper/RestaurantWrapper";
import DownImg from '@/assets/down.png'
import MaskGroupInput from '../../../assets/Mask group Input.png'
import MaskGroupInput2 from '../../../assets/toppng.com-veg-1180x1172 1.png'
import { BiSolidRightArrow } from "react-icons/bi";
import { RiDeleteBinLine } from "react-icons/ri";

const Catalog = () => {

  const [activeTab, setActiveTab] = useState("Items");
  const [isExpanded, setIsExpanded] = useState(false)
  const [showInput, setShowInput] = useState(false)

  const toggleShowInput = () => {
    setShowInput(!showInput);
  };


  const [isOpena, setIsOpena] = useState(true);
  const [isOpenb, setIsOpenb] = useState(false);
  const [isOpenc, setIsOpenc] = useState(false);

  const toggleOpena = () => {
    setIsOpena(!isOpena);
  };

  const toggleOpenb = () => {
    setIsOpenb(!isOpenb);
  };

  const toggleOpenc = () => {
    setIsOpenc(!isOpenc);
  };
  const tabs = ["Items", "Picture Gallery", "Add-ons"];
  const [catalog, setCatalog] = useState([
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
        <div className="flex justify-start gap-3  py-3">
          {tabs.map((tab) => (
            <button
              key={tab}
              className={`p-[10px] class-xl1 focus:outline-none ${activeTab === tab
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
              <span className="primary-color class-base1">220</span>
            </div> : ''}
          </div>
        </div>
        <div className="flex justify-between items-center py-4 border-b-2">
          <h2 className="seven-color class-xl1">Culinary Catalog</h2>
          <Button variant="outline" className="flex justify-center items-center gap-3 third-color class-base2"><HiOutlineAdjustmentsHorizontal className='text-[22px]' /><span className="pr-5">Filter</span><img src={DownImg} className="w-[30px] h-[28px]" /></Button>
        </div>
        <div>
          <div className="w-full flex items-center justify-between border-b-2">
            <div className=" flex justify-start items-center gap-4 py-5">
              <button onClick={() => setIsOpenb(!isOpenb)} className={` transform ${isOpenb ? "rotate-90" : ""}`}><IoIosArrowForward className="seven-color text-2xl" /></button>
              <h3 className="seven-color class-lg1">Combos</h3>
              <button className={``}><FiEdit2 className="seven-color text-xl" /></button>
            </div>
            <p className="class-xl1 seven-color">3 Items</p>
          </div>

          {isOpenb ?
            <div className="">
              <div className="w-full flex items-center justify-between pl-10 border-b-2">
                <div className="flex justify-start items-center gap-4 py-5">
                  <button onClick={() => setIsOpenc(!isOpenc)} className={` transform ${isOpenc ? "rotate-90" : ""}`}><IoIosArrowForward className="seven-color text-2xl" /></button>
                  <h3 className="seven-color class-lg1">Combos</h3>
                  <button className={``}><FiEdit2 className="seven-color text-xl" /></button>
                </div>
                <p className="class-xl1 seven-color">3 Items</p>
              </div>
              {isOpenc ?
                <div className="pl-10">
                  <div className="flex items-center gap-40 py-4 border-b-2 border-dotted">
                    <div className="flex items-center gap-2">
                      <img src={MaskGroupInput} alt="" />
                      <span className="class-base1 seven-color">Egg combo</span>
                    </div>
                    <span className="class-base1 seven-color">₹90</span>
                  </div>
                  <div className="flex items-center gap-40 py-4 border-b-2 border-dotted">
                    <div className="flex items-center gap-2">
                      <img src={MaskGroupInput} alt="" />
                      <span className="class-base1 seven-color">Egg combo</span>
                    </div>
                    <span className="class-base1 seven-color">₹90</span>
                  </div>
                  <div className="flex items-center gap-40 py-4 border-b-2 border-dashed">
                    <div className="flex items-center gap-2">
                      <img src={MaskGroupInput} alt="" />
                      <span className="class-base1 seven-color">Egg combo</span>
                    </div>
                    <span className="class-base1 seven-color">₹90</span>
                  </div>
                </div>
                : ''}
              <div className={`w-[553px] flex flex-wrap gap-8 py-5`}>
                <button className="flex items-center gap-3"><FiPlusCircle className="primary-color text-2xl" /><span className="five-color class-xl1">Add food item</span></button>
                <button className="flex items-center gap-3"><FiPlusCircle className="primary-color text-2xl" /><span className="five-color class-xl1">Arrange Existing item</span></button>
                {
                  showInput ? <button className="flex items-center gap-3"><FiPlusCircle onClick={toggleShowInput} className="primary-color text-2xl" /><span className="five-color class-xl1">Add sublevel</span></button>
                    : <div className=" w-full flex flex-col gap-5">
                      <div className="flex justify-between items-center">
                        <input onClick={toggleShowInput} type="text" placeholder="Sample : Main Course Veg" className="w-fit min-w-[300px] bg-[#E7EBEF33] border-[1px] border-[#1AA1F1] rounded-lg py-5 px-4 text-center placeholder:fourteen-color " />
                        <RiDeleteBinLine className="text-[red] text-[20px] cursor-pointer" />
                      </div>
                      <div>
                        <p className="five-color class-base1">Sublevel Uncertainty? Try Combos! </p>
                      </div>
                    </div>
                }

              </div>
            </div> :
            ''}

        </div>
        <div className="flex gap-4 mt-4">
          <button className="flex items-center gap-3"><FiPlusCircle className="primary-color text-2xl" /><span className="five-color class-xl1">Add Main Menu</span></button>
        </div>
      </div>

      {/* <div className="px-4 mx-auto">
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
      </div> */}
    </RestaurantWrapper>
  );
};

// const Section = ({ section }) => {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <div className="mb-4">
//       <div className="flex justify-between items-center cursor-pointer border-y-[1px] py-4 " >
//         <div className="flex justify-center items-center gap-4">
//           <button onClick={() => setIsOpen(!isOpen)} className={` transform ${isOpen ? "rotate-90" : ""}`}><IoIosArrowForward className="seven-color text-2xl" /></button>
//           <h3 className="seven-color class-lg1">{section.category}</h3>
//           <button className={``}><FiEdit2 className="seven-color text-xl" /></button>
//         </div>
//         <p className="seven-color class-xl1">{section.items.length} Items</p>
//       </div>
//       {isOpen && (
//         <div className="pl-6 mt-2 w-[400px] max-w-[400px]">
//           <div className="mb-10">
//             {section.items.map((item, idx) => (
//               <div key={idx} className="flex justify-between items-center py-4 border-b-[2px] border-dashed">
//                 <div className="flex items-center">
//                   <img src={MaskGroupInput} alt="" className="mr-2 w-[26px] h-[26px]" />
//                   <span className="seven-color class-xl1">{item.name}</span>
//                 </div>
//                 <span className="seven-color class-xl1">₹{item.price}</span>
//               </div>
//             ))}
//           </div>
//           <div className="w-[553px] flex flex-wrap gap-8">
//             <button className="flex items-center gap-3"><FiPlusCircle className="primary-color text-2xl" /><span className="five-color class-xl1">Add food item</span></button>
//             <button className="flex items-center gap-3"><FiPlusCircle className="primary-color text-2xl" /><span className="five-color class-xl1">Arrange Existing item</span></button>
//             <button className="flex items-center gap-3"><FiPlusCircle className="primary-color text-2xl" /><span className="five-color class-xl1">Add food item</span></button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

export default Catalog;
