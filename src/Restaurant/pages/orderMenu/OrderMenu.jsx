import { Button } from "@/components/ui/button";
import React, { useEffect, useState } from "react";
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
import useGetApiReq from "@/hooks/useGetApiReq";
import DataNotFound from "@/Restaurant/components/DataNotFound";
import Spinner from "@/Restaurant/components/Spinner";
import { Input } from "@/components/ui/input";
import { IoSearchOutline } from "react-icons/io5";
import ManageInventory from "@/Restaurant/components/orderMenu/ManageInventory";

const OrderMenu = () => {

  const [activeTab, setActiveTab] = useState("Items");
  const [isExpanded, setIsExpanded] = useState(false)
  const [addCategory, setAddCategory] = useState(true)
  const [isActiveTab, setIsActiveTab] = useState("editor")

  const [isOpena, setIsOpena] = useState(true);
  const [isOpenCategoryModel, setIsOpenCategoryModel] = useState(false)
  const [isOpenSubCategoryModel, setIsOpenSubCategoryModel] = useState(false)
  const [isAddItemModalOpen, setIsAddItemModalOpen] = useState(false);
  const [isAddonGroupsModalOpen, setIsAddonGroupsModalOpen] = useState(false);
  const [allCategories, setAllCategories] = useState([]);

  const toggleOpena = () => {
    setIsOpena(!isOpena);
  };


  const { res, fetchData, isLoading } = useGetApiReq();

  const getCategories = () => {
    fetchData("/restaurant/get-categories");
  }

  useEffect(() => {
    getCategories();
  }, [])

  useEffect(() => {
    if (res?.status === 200 || res?.status === 201) {
      console.log("get category res", res);
      setAllCategories(res?.data?.data);
    }
  }, [res])

  return (
    <RestaurantWrapper>
      {/* <p className="bg-[#22C55E4D] five-color class-sm1 text-center py-2">Morning Rush Alert! Please refrain from making any menu changes between 9 am and 11 am to avoid order disruptions.</p> */}
      <div className="w-full px-4">
        <div className="flex justify-start items-center gap-5 mt-5">
          <button onClick={() => setIsActiveTab('editor')} className={`${isActiveTab === 'editor' ? 'text-[#4A67FF] border-b-[#4A67FF]' : 'text-[#000000] border-b-transparent'}  border-b-2 pb-4 px-5 text-xl font-semibold font-inter`}>Menu editor</button>
          <button onClick={() => setIsActiveTab('inventory')} className={`${isActiveTab === 'inventory' ? 'text-[#4A67FF] border-b-[#4A67FF]' : 'text-[#000000] border-b-transparent'} border-b-2 pb-4 px-5 text-xl font-semibold font-inter`}>Manage inventory</button>
        </div>
        {isActiveTab === 'editor' &&
          <>
            <div className='w-[500px] relative mt-4'>
              <IoSearchOutline className='absolute top-1/2 -translate-y-1/2 left-4 z-10 text-2xl text-[#8B8A8A]' />
              <Input type="search" placeholder="Search" className="px-4 pl-12 pt-1 w-full h-[52px] text-[#8B8A8A] placeholder:text-[#8B8A8A] text-xl border-[1.5px] border-[#B6B6B6]" />
            </div>
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
                  {allCategories?.map((category) => (
                    <ItemComp key={category?._id} category={category} getCategories={getCategories} show={true} />
                  ))}

                  {allCategories.length === 0 && isLoading &&
                    <Spinner />
                  }

                  {allCategories.length === 0 && !isLoading &&
                    <DataNotFound name="Categories" />
                  }
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

              {isAddItemModalOpen &&
                <AddItemModal
                  isAddItemModalOpen={isAddItemModalOpen}
                  setIsAddItemModalOpen={setIsAddItemModalOpen}
                />
              }

            </div>
            {isOpenCategoryModel &&
              <CategoryEditModel
                isOpenCategoryModel={isOpenCategoryModel}
                setIsOpenCategoryModel={setIsOpenCategoryModel}
                getCategories={getCategories}
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
          </>
        }
        
        {isActiveTab === 'inventory' && <ManageInventory allCategories={allCategories}/>}

      </div>
    </RestaurantWrapper>
  );
};

export default OrderMenu;
