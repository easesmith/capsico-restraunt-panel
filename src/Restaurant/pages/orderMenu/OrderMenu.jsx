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
import { IoIosArrowForward } from "react-icons/io";
import CategoryEditModel from "@/Restaurant/components/models/CategoryEditModel";
import SubCategoryEditModel from "@/Restaurant/components/models/SubCategoryEditModel";
import { FaArrowLeft, FaArrowRight, FaPlus } from "react-icons/fa6";
import Product from "@/Restaurant/components/orderMenu/Product";
import AddItemModal from "@/Restaurant/components/orderMenu/AddItemModal";
import AddOnGroups from "@/Restaurant/components/orderMenu/AddOnGroups";

const Catalog = () => {

  const [activeTab, setActiveTab] = useState("Items");
  const [isExpanded, setIsExpanded] = useState(false)
  const [addCategory, setAddCategory] = useState(true)

  const [isOpena, setIsOpena] = useState(true);
  const [isOpenCategoryModel, setIsOpenCategoryModel] = useState(false)
  const [isOpenSubCategoryModel, setIsOpenSubCategoryModel] = useState(false)
  const [isAddItemModalOpen, setIsAddItemModalOpen] = useState(false);
  const [isAddonGroupsModalOpen, setIsAddonGroupsModalOpen] = useState(false);

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
      {/* <p className="bg-[#22C55E4D] five-color class-sm1 text-center py-2">Morning Rush Alert! Please refrain from making any menu changes between 9 am and 11 am to avoid order disruptions.</p> */}
      <div className="w-full px-4">
        <div className="w-full rounded-lg overflow-hidden h-[500px] flex items-start border border-[#CED7DE] my-5">
          <div className="left-section relative w-1/3 h-full rounded-tl-lg bg-white border-r border-r-[#CED7DE]">
            <h3 className=" class-base5 p-5 bg-[#F2F4F7] border-b border-b-[#CED7DE]">Categories</h3>
            <button className="flex w-full items-center gap-3 px-5 py-4 border-b" onClick={() => setIsOpenCategoryModel(true)}>
              <FaPlus className="primary-color" />
              <span className="class-base1 primary-color">Add Category</span>
            </button>
            <div className="overflow-y-auto h-full pb-[180px]">
              {/* <div className=" flex">
                <h4 className="text-color class-sm1 py-4 px-6">Combas (3)</h4>
                <button className={``}><IoIosArrowForward className="seven-color text-2xl" /></button>
                </div> */}
              <ItemComp title={'abc'} />
            </div>
            <button onClick={() => setIsAddonGroupsModalOpen(true)} className="primary-color mt-auto bg-white shadow-3xl absolute bottom-0 flex w-full justify-between items-center left-0 p-4">
              Go to Add Ons
              <FaArrowRight className="primary-color" />
            </button>
          </div>
          <div className="right-section w-2/3 bg-white h-full">
            <h3 className=" class-base5 p-5 bg-[#F2F4F7] border-b border-b-[#CED7DE]">Combos (3)</h3>
            <button className="flex w-full items-center gap-3 p-5 border-b" onClick={() => setIsAddItemModalOpen(true)}>
              <FaPlus className="primary-color" />
              <span className="class-base1 primary-color">Add New Item</span>
            </button>
            <Product />
          </div>

          <AddItemModal
            isAddItemModalOpen={isAddItemModalOpen}
            setIsAddItemModalOpen={setIsAddItemModalOpen}
          />
        </div>

        {isOpenCategoryModel &&
          <CategoryEditModel
            isOpenCategoryModel={isOpenCategoryModel}
            setIsOpenCategoryModel={setIsOpenCategoryModel}
          />
        }

        {isOpenSubCategoryModel &&
          <SubCategoryEditModel
            isOpenSubCategoryModel={isOpenSubCategoryModel}
            setIsOpenSubCategoryModel={setIsOpenSubCategoryModel}
          />
        }

        {isAddonGroupsModalOpen &&
          <AddOnGroups
            isAddonGroupsModalOpen={isAddonGroupsModalOpen}
            setIsAddonGroupsModalOpen={setIsAddonGroupsModalOpen}
          />
        }
      </div>
    </RestaurantWrapper>
  );
};

export default Catalog;
