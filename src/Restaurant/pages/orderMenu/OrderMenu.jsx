import DataNotFound from "@/Restaurant/components/DataNotFound";
import Spinner from "@/Restaurant/components/Spinner";
import CategoryEditModel from "@/Restaurant/components/models/CategoryEditModel";
import SubCategoryEditModel from "@/Restaurant/components/models/SubCategoryEditModel";
import AddItemModal from "@/Restaurant/components/orderMenu/AddItemModal";
import AddOnGroups from "@/Restaurant/components/orderMenu/AddOnGroups";
import ItemComp from "@/Restaurant/components/orderMenu/ItemComp";
import ManageInventory from "@/Restaurant/components/orderMenu/ManageInventory";
import Product from "@/Restaurant/components/orderMenu/Product";
import RestaurantWrapper from "@/Restaurant/components/restaurantWrapper/RestaurantWrapper";
import { Input } from "@/components/ui/input";
import useGetApiReq from "@/hooks/useGetApiReq";
import { useEffect, useState } from "react";
import { FaArrowRight, FaPlus } from "react-icons/fa6";
import { IoSearchOutline } from "react-icons/io5";

const OrderMenu = () => {
  const [isActiveTab, setIsActiveTab] = useState("editor");

  const [isOpena, setIsOpena] = useState(true);
  const [isOpenCategoryModel, setIsOpenCategoryModel] = useState(false);
  const [isOpenSubCategoryModel, setIsOpenSubCategoryModel] = useState(false);
  const [isAddItemModalOpen, setIsAddItemModalOpen] = useState(true);
  const [isAddonGroupsModalOpen, setIsAddonGroupsModalOpen] = useState(false);
  const [allCategories, setAllCategories] = useState([]);
  const [categoryId, setCategoryId] = useState("");
  const [foodItemsInfo, setFoodItemsInfo] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  const toggleOpena = () => {
    setIsOpena(!isOpena);
  };

  const { res, fetchData, isLoading } = useGetApiReq();

  const getCategories = () => {
    fetchData(`/restaurant/get-categories?searchQuery=${searchQuery}`, {
      reportCrash: true,
      screenName: "CATEGORY_GET",
    });
  };

  useEffect(() => {
    getCategories();
  }, [searchQuery]);

  useEffect(() => {
    if (res?.status === 200 || res?.status === 201) {
      console.log("get category res", res);
      setAllCategories(res?.data?.data);
    }
  }, [res]);

  const {
    res: foodItemRes,
    fetchData: fetchFoodItemData,
    isLoading: isFoodItemLoading,
  } = useGetApiReq();

  const getFoodItems = () => {
    fetchFoodItemData(`/restaurant/category/${categoryId}/food`);
  };

  useEffect(() => {
    categoryId && getFoodItems();
  }, [categoryId]);

  useEffect(() => {
    if (foodItemRes?.status === 200 || foodItemRes?.status === 201) {
      console.log("get food items res", foodItemRes);
      // setFoodItems(res?.data?.data);
      const { categoryInfo, itemsByCategory, totalItems } =
        foodItemRes?.data?.data;

      setFoodItemsInfo({
        categoryInfo,
        totalItems,
        itemsByCategory: itemsByCategory[categoryInfo.name],
      });
    }
  }, [foodItemRes]);

  return (
    <RestaurantWrapper>
      {/* <p className="bg-[#22C55E4D] five-color class-sm1 text-center py-2">Morning Rush Alert! Please refrain from making any menu changes between 9 am and 11 am to avoid order disruptions.</p> */}
      <div className="w-full px-4">
        <div className="flex justify-start items-center gap-5 mt-5">
          <button
            onClick={() => setIsActiveTab("editor")}
            className={`${
              isActiveTab === "editor"
                ? "text-[#4A67FF] border-b-[#4A67FF]"
                : "text-[#000000] border-b-transparent"
            }  border-b-2 pb-4 px-5 text-xl font-semibold font-inter`}
          >
            Menu editor
          </button>
          <button
            onClick={() => setIsActiveTab("inventory")}
            className={`${
              isActiveTab === "inventory"
                ? "text-[#4A67FF] border-b-[#4A67FF]"
                : "text-[#000000] border-b-transparent"
            } border-b-2 pb-4 px-5 text-xl font-semibold font-inter`}
          >
            Manage inventory
          </button>
        </div>
        {isActiveTab === "editor" && (
          <>
            <div className="w-[500px] relative mt-4">
              <IoSearchOutline className="absolute top-1/2 -translate-y-1/2 left-4 z-10 text-2xl text-[#8B8A8A]" />
              <Input
                type="search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search"
                className="px-4 pl-12 pt-1 w-full h-[52px] text-[#8B8A8A] placeholder:text-[#8B8A8A] text-xl border-[1.5px] border-[#B6B6B6]"
              />
            </div>
            <div className="w-full rounded-lg overflow-hidden h-[500px] flex items-start border border-[#CED7DE] my-5">
              <div className="left-section relative w-1/3 h-full rounded-tl-lg bg-white border-r border-r-[#CED7DE]">
                <h3 className=" class-base5 p-5 bg-[#F2F4F7] border-b border-b-[#CED7DE]">
                  Categories
                </h3>
                <button
                  className="flex w-full items-center gap-3 px-5 py-4 border-b"
                  onClick={() => setIsOpenCategoryModel(true)}
                >
                  <FaPlus className="primary-color" />
                  <span className="class-base1 primary-color">
                    Add Category
                  </span>
                </button>
                <div className="overflow-y-auto h-full pb-[180px]">
                  {/* <div className=" flex">
                <h4 className="text-color class-sm1 py-4 px-6">Combas (3)</h4>
                <button className={``}><IoIosArrowForward className="seven-color text-2xl" /></button>
                </div> */}
                  {allCategories?.map((category) => (
                    <ItemComp
                      key={category?._id}
                      setCategoryId={setCategoryId}
                      categoryId={categoryId}
                      category={category}
                      getCategories={getCategories}
                    />
                  ))}

                  {allCategories.length === 0 && isLoading && <Spinner />}

                  {allCategories.length === 0 && !isLoading && (
                    <DataNotFound name="Categories" />
                  )}
                </div>
                <button
                  onClick={() => setIsAddonGroupsModalOpen(true)}
                  className="primary-color mt-auto bg-white shadow-3xl absolute bottom-0 flex w-full justify-between items-center left-0 p-4"
                >
                  Go to Add Ons
                  <FaArrowRight className="primary-color" />
                </button>
              </div>
              {categoryId && (
                <div className="right-section w-2/3 bg-white h-full">
                  {foodItemsInfo && (
                    <h3 className=" class-base5 p-5 bg-[#F2F4F7] border-b border-b-[#CED7DE]">
                      {foodItemsInfo?.categoryInfo?.name} (
                      {foodItemsInfo?.totalItems})
                    </h3>
                  )}
                  <button
                    className="flex w-full items-center gap-3 p-5 border-b"
                    onClick={() => setIsAddItemModalOpen(true)}
                  >
                    <FaPlus className="primary-color" />
                    <span className="class-base1 primary-color">
                      Add New Item
                    </span>
                  </button>
                  {foodItemsInfo?.itemsByCategory?.map((foodItem) => (
                    <Product key={foodItem?._id} foodItem={foodItem} getFoodItems={getFoodItems} />
                  ))}

                  {foodItemsInfo?.totalItems === 0 && (
                    <DataNotFound className="mt-3" name="Items" />
                  )}
                </div>
              )}

              {!categoryId && (
                <div className="right-section w-2/3 bg-white h-full flex items-center justify-center">
                  <h2 className="font-semibold text-muted-foreground">
                    Select a category or sub category to see items.
                  </h2>
                </div>
              )}

              {isAddItemModalOpen && (
                <AddItemModal
                  isAddItemModalOpen={isAddItemModalOpen}
                  setIsAddItemModalOpen={setIsAddItemModalOpen}
                  categoryId={categoryId}
                  getFoodItems={getFoodItems}
                />
              )}
            </div>
            {isOpenCategoryModel && (
              <CategoryEditModel
                isOpenCategoryModel={isOpenCategoryModel}
                setIsOpenCategoryModel={setIsOpenCategoryModel}
                getCategories={getCategories}
              />
            )}

            {isOpenSubCategoryModel && (
              <SubCategoryEditModel
                isOpenSubCategoryModel={isOpenSubCategoryModel}
                setIsOpenSubCategoryModel={setIsOpenSubCategoryModel}
              />
            )}

            {isAddonGroupsModalOpen && (
              <AddOnGroups
                isAddonGroupsModalOpen={isAddonGroupsModalOpen}
                setIsAddonGroupsModalOpen={setIsAddonGroupsModalOpen}
              />
            )}
          </>
        )}

        {isActiveTab === "inventory" && (
          <ManageInventory
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
            allCategories={allCategories}
          />
        )}
      </div>
    </RestaurantWrapper>
  );
};

export default OrderMenu;
