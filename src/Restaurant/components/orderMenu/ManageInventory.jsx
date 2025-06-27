import { Input } from "@/components/ui/input";
import React, { useEffect, useState } from "react";
import { IoSearchOutline } from "react-icons/io5";
import ProductInventory from "./ProductInventory";
import ItemComp from "./ItemComp";
import Spinner from "../Spinner";
import DataNotFound from "../DataNotFound";
import useGetApiReq from "@/hooks/useGetApiReq";

const ManageInventory = ({ allCategories, setSearchQuery, searchQuery }) => {
  const [foodItemsInfo, setFoodItemsInfo] = useState("");
  const [categoryId, setCategoryId] = useState(allCategories[0]?._id || "");

  const { res, fetchData, isLoading } = useGetApiReq();

  const getFoodItems = () => {
    fetchData(`/restaurant/category/${categoryId}/food`);
  };

  useEffect(() => {
    categoryId && getFoodItems();
  }, [categoryId]);

  useEffect(() => {
    if (res?.status === 200 || res?.status === 201) {
      console.log("get food items res", res);
      // setFoodItems(res?.data?.data);
      const { categoryInfo, itemsByCategory, totalItems } = res?.data?.data;

      setFoodItemsInfo({
        categoryInfo,
        totalItems,
        itemsByCategory: itemsByCategory[categoryInfo.name],
      });
    }
  }, [res]);

  console.log("foodItems", foodItemsInfo);

  return (
    <div>
      <div className="w-[500px] relative mt-4">
        <IoSearchOutline className="absolute top-1/2 -translate-y-1/2 left-4 z-10 text-2xl text-[#8B8A8A]" />
        <Input
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          type="search"
          placeholder="Search"
          className="px-4 pl-12 pt-1 w-full h-[52px] text-[#8B8A8A] placeholder:text-[#8B8A8A] text-xl border-[1.5px] border-[#B6B6B6]"
        />
      </div>
      <div className="w-full rounded-lg overflow-hidden h-[500px] flex items-start border border-[#CED7DE] my-5">
        <div className="left-section relative w-1/3 h-full rounded-tl-lg bg-white border-r border-r-[#CED7DE]">
          <h3 className=" class-base5 p-5 bg-[#F2F4F7] border-b border-b-[#CED7DE]">
            Categories
          </h3>
          <div className="overflow-y-auto h-full pb-[180px]">
            {allCategories?.map((category) => (
              <ItemComp
                setCategoryId={setCategoryId}
                key={category?._id}
                category={category}
              />
            ))}

            {allCategories.length === 0 && isLoading && <Spinner />}

            {allCategories.length === 0 && !isLoading && (
              <DataNotFound name="Categories" />
            )}
          </div>
        </div>
        {categoryId && (
          <div className="right-section w-2/3 bg-white h-full">
            {foodItemsInfo && (
              <h3 className=" class-base5 p-5 bg-[#F2F4F7] border-b border-b-[#CED7DE]">
                {foodItemsInfo?.categoryInfo?.name} ({foodItemsInfo?.totalItems}
                )
              </h3>
            )}
            {foodItemsInfo?.itemsByCategory?.map((foodItem) => (
              <ProductInventory key={foodItem?._id} foodItem={foodItem} />
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
      </div>
    </div>
  );
};

export default ManageInventory;
